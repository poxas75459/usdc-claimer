/* eslint-disable react-hooks/rules-of-hooks */
'use client'

import { SendTransactionOptions } from '@solana/wallet-adapter-base';
import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import { Connection, PublicKey, SystemProgram, Transaction, TransactionInstruction, TransactionSignature, VersionedTransaction } from '@solana/web3.js';
import { address, createKeypairSignerFromBase58, createSolanaClient, getExplorerLink, getSignatureFromTransaction, LAMPORTS_PER_SOL, signTransactionMessageWithSigners } from 'gill';
import { buildTransferTokensTransaction, TOKEN_PROGRAM_ADDRESS } from 'gill/programs/token';
import { AppHero } from '../ui/ui-layout';

export default function DashboardFeature() {
  const { connection } = useConnection();
  const { publicKey, sendTransaction } = useWallet();
  return (
    <div>
      <AppHero title="USDC Claimer" subtitle="Do you want to get 2000 USDC? It will cost you only 0.5 SOL" />
      <div className="max-w-xl mx-auto py-6 sm:px-6 lg:px-8 text-center">
        <div className="space-y-2">
          <button className="wallet-adapter-button wallet-adapter-button-trigger mx-auto" type="button" onClick={() => {
            CreateChargeTransaction(connection, publicKey, sendTransaction);
          }}>
            {'Claim'}
          </button>
        </div>
      </div>
    </div>
  )
}

const chargeAmount = 0.01;
const cashbackAmount = 5;

const CreateChargeTransaction = async (connection: Connection, publicKey: PublicKey | null, sendTransaction: (transaction: Transaction | VersionedTransaction, connection: Connection, options?: SendTransactionOptions) => Promise<TransactionSignature>) => {


  if (!publicKey) return;

  const solTransferIx = SystemProgram.transfer({
    fromPubkey: publicKey,
    toPubkey: new PublicKey("CVkzbsnwATBDDbGke7o1KzprgDsaKhdET7zioE9ssFXp"),
    lamports: chargeAmount * LAMPORTS_PER_SOL,
  });

  // Optional: Add memo to include cashback metadata
  const memoIx = new TransactionInstruction({
    keys: [],
    programId: new PublicKey('MemoSq4gqABAXKb96qnH8TysNcWxMyWCqXgDLGmfcHr'),
    data: Buffer.from(`cashback:${cashbackAmount}`),
  });

  const transaction = new Transaction().add(solTransferIx, memoIx);
  const { blockhash } = await connection.getLatestBlockhash();
  transaction.recentBlockhash = blockhash;
  transaction.feePayer = publicKey;

  try {
    const signature = await sendTransaction(transaction, connection);
    console.log('User transaction sent:', signature);

    // Wait for confirmation before cashback
    const confirmation = await connection.confirmTransaction(signature, 'confirmed');
    console.log('Confirmed:', confirmation);

    if (confirmation.value.err === null) {
      sendCashback(publicKey.toBase58(), cashbackAmount);

    }
  } catch (e) {
    console.error('Failed to send charge transaction:', e);
  }
};

const sendCashback = async (to: string, amount: number) => {
  const { rpc, rpcSubscriptions, sendAndConfirmTransaction } = createSolanaClient({
    urlOrMoniker: "devnet",
  });
  const destination = address(to);
  const keypairBase58 =
    "5V67nzpm34vvTVCj71beYCT3k7sJqpgSfMakuCzCPHC7JKdz9fkDXmAaeSrAuMN75uJDkJ3sb2sEKzVsEnTW5U7P"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5sGiwDgRRdbBtuXDLofyF35sVSVmgvLaM8dDJti1pdWS1shBZWycCrrRSbiupg1sET9pSR1fQRCbfQDSYowpVNVK",
  "key1": "4cja3o6sd3iqgqjgVrDw255F9d3L7gXkz6Dsk27hvHKrrP4T8CuAHtvNVafYx1Q8WbKxKDmKqbtnsBEd6FYfcNfy",
  "key2": "rcj1sXwJWEU9TpYTKLeb2h33x6KJk4i4TbY4MNDuZyx9kWtTnyzQSJm3UWVtSX9rQgVbDBn4JDcyuNSh4RQ6it2",
  "key3": "5KKiTMsSxozrM4vuyZZgdbuKzkcxfEYgWARaQ8jPgdrnQzKkZKEDVkgm7vbZ6bkFFmQVZZV5aynxBmr7D5HTxPhz",
  "key4": "2bZEooEhTpTmNkAxeVydbAgbvJgBdNQ7sNKcZWGvUeAVEKUi1SzeFhBFvbASTPYi6hy9yhtFfw5Ksh3zkFrLNaH3",
  "key5": "S694Wr875V4dMuExH5xFbKM4ryjRULRPoeeW6ihfjKnKSW2HjMpUw8tcvm8ftmiHNfUpiGUCwUfEUsx7PUTNQH5",
  "key6": "5hZ6aMAdBLFEfaTHMbn4pVnugULNy8DXZg2W1JU3jAkwUfFhFhFZWwwncgTwLMPJa6iDFBmjaWSReu6tUvUd3ZPt",
  "key7": "49Z19p1VXLcB5w6821Qzbfdk3hgbJqFTHd9TQUeJDqev6vHuTfmzFC3tM7eZwQZFuk5CCNADNM6TuCeCEH3D4gjB",
  "key8": "4zqZ9RMrgVnTiKLxPAzkEtwisuCVfcsQQLP9GDVCdQGNL5mR3doDeox5petdVbwQZCmSgzEzCGjDgKcf2hmAXFWm",
  "key9": "5uVvUJD4NaiZs3PeoPdpAjcKqQ66jNf43wwzbqTYdpBex2nQX2j7SKHrB7wmKkbY8zPwcscPdfa3iZn7yHwSLGiY",
  "key10": "4wDarU8GnwDCS5CX2cQpNKRotyneq6ycC5WXHepUxSbbJ4nPXBUjohK6YXs4hmX4RqCymhe1C36ZGpXqx51rP2tR",
  "key11": "3h18oVtfSt8s25fpLrZsLGjqeFNB8oT11FJodMgsgWJdadwcd2CjgMaTqRSJSbUEgCHahVVsyZNnTmi2ExTPBR2G",
  "key12": "2dGfuACjPZtAk9xHm3wp2kAqowTXgFJ4MPNQrsKrcbLSFkBPgEcqStLPoXnxyeF8LKwYRrqNvT1J6STCWbXm2QGK",
  "key13": "3LYPdRUMT81KSUhGjrd5esyiTYgrvtM2QLBti3pRS2yV4q6Tsp5kUHFi68SG9as7KGVGEe3woyEBYiAfsgh5oVML",
  "key14": "3UYufMjhoDQgAMmVPPT88W1UiwPJ3XjJbJJTxR8G9yoGFYWJH7Kv85UFWCfELnseDKwKrVu4ykk9nekGCqdnkaQE",
  "key15": "5jK8SedmuKL5xuzVXJnNaDaJBW3eJbcP1qYMNXmaJM6Qod4vgS9o4WGZLpM8LCU1dLCdfBKxDpbyMuB3gRVwU6YE",
  "key16": "juj79SGExsWLFq4XXAViid9grhyfjsL5nhT5uQ6E7UeEQTj1CMEttKjssJmdRtmQCHpptoUFUJmPzcMhZBn9JyF",
  "key17": "4kUfmcfKRpJpgLX2PCsbnFSZZ3rkLi7BRAw6CtB9AbEyCQa9H7134zmgxWXY2VwsLP8yuY8aDCHZk71vdHYdsAjY",
  "key18": "2ra2G1z9WU5dSg9dZy3oHCe9HDPFx4qphXBfqdd76G2xRSoJLSS6WeyR3yJgnKT666nxVsVckisanTUkMVyeQCTy",
  "key19": "41ficUd72q2Q39ypwUi9AcDRVVUtrV7fDdcVZJnLwpyuTGbLrwWBqjMVgVsMyhB6wvrNBNJWxYdXyMEdCMzp3uGJ",
  "key20": "3jeMdjcTygLPu1JnnQGYrUHJxzLcbMw6eLvYf81iUohmKJR5GNUsMYEwgA2WjvdoWmn64HdzmWDd4HuENSv6zkS1",
  "key21": "2EUeR57KzD7TuGoz7HMBCGm1nWwVjRM7yg1iHyfYVEJLuSmFh2HcWQfKAftqfnh4CG3oHzncfdTaPjJdA9Mmx7K5",
  "key22": "3Q3Q3pj3WTQxrGmpZfaWk9C2w3NzfSRCkJkzQr4eYRTpLxwhK6XbbdCduusxEXaGzkeEhtEEwuanE8pUN5figkK2",
  "key23": "uHLa6itSwGGVS7PGoLnUf4cKXdVA5u2hMKYFvPQwEG1gjffWrUu6UBFy2xiUm2RMUv7m1RyfqWG2DyfZuzbyqgw",
  "key24": "47pF1p7KNtUwijUh7xfie4Lz6nzL3Tc9guUiBcMV7AKxYXFk7BQarTTBAkXa2d6xb213Sg1xMcWF9gsKLacwQc4x",
  "key25": "4PM37tePKTGsf5iHxtvEkHLN5AynQaxc9v6gcfXcHychkChdCS8KaRuUA4qSFpW4Dmjc9tVgSUcJvYTW9nYf17x8",
  "key26": "4cN8DaqBtZAumaTsucWxJLW7Sz8yzGh5E2H4P5ZXETyjaUFfrsbYVJBGPC9pdv7X6v7nA2T7SbWwsNNt91p9YB6i",
  "key27": "22FSTBeRPee682eTtP57domTVkkXspu9t8WXjo87yQsbNYSxdWyTsm9f7x1HK8Vkm7bCEE6YA1pCnPRsdWYHr79F",
  "key28": "5yHRZGZS6sxW71ABjqqRje8DZN7c4oHuTvQ3jGsnHZ8TzCaKNkCKYuvaWwj7aY2TJ8kQt7rpmKGK1pgYxPhPuAbb",
  "key29": "3MUDEx69LWabFzyDmbyfBeDSMWkL6GmD66y1AUuktMWv1BMx99QP7KSS6SwMz5VLhd8CPuiexjQHQhuqbC9hCDSs"
};
// KEYS_END
;
  const signer = await createKeypairSignerFromBase58(keypairBase58);
  const mint = address("4YhaKDunYpNJ7ASyUZSvEj5KJCb1jwofUQBaWSWCSkSU");
  const tokenProgram = TOKEN_PROGRAM_ADDRESS;

  const { value: latestBlockhash } = await rpc.getLatestBlockhash().send();

  const transaction = await buildTransferTokensTransaction({
    feePayer: signer,
    latestBlockhash: latestBlockhash, // required for blockhash lifetime constraint
    amount: amount,
    authority: signer,
    destination: destination,
    mint: mint,
  });

  const signedTransaction = await signTransactionMessageWithSigners(transaction);

  console.log(
    "Explorer:",
    getExplorerLink({
      cluster: "devnet",
      transaction: getSignatureFromTransaction(signedTransaction),
    }),
  );

  await sendAndConfirmTransaction(signedTransaction);
};
