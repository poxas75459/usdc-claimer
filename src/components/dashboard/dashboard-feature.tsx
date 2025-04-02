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
    "2EU6PfW66ULveJjkZUpXAnKS196jPJkLyPgjXy25rbwiYn4kSZwNHQZqcL2fVXzEMA4bpMRFWdJAEu3WHYa7MRmA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5pYRHhJR9oJQViCwdZii8HNHGowFF1RJtnMBQBFCZp1sdk2GwQi16MkcKdmRjcYBFKTm3sBoAfeVUz1ynxNfjCjY",
  "key1": "5hSx9oCYDzefCNU1rdKBEdXTEy3gBCXCLR8yJNVtL9gvpC2iDxpukWWGMoM5AoW9HMLKfLAhCdv9oxStqT4Sppv3",
  "key2": "22Xa3e2CAEKPfyp3NhRcowk2CNQaYLzzLcf18AYXb9Mkvvj6JUj9F6dbKq1XRiQmriE5dad97VpJNssmXXmS98P3",
  "key3": "2LFp6G4YUyiNGDoxfrxN2grrx8D2VrH6dCbKzrprCubQ1Kz6RzAphm2md2Ae58TVd8a24gAiPEZYXbz3r2mitmBK",
  "key4": "ieT2kpYPmjWumkTpf4kjz9RhYDNooq2DgDXYcYYEiaYzQpDCs2NAANED5hUDUU2kuwg5sHccEL5S2GMgiQMKMSR",
  "key5": "5CwvZKiCd5uCLKGX63Vkc1tkXHSUwJyHbbxWj9QnprGSZAybUTwWTeyJXqSZs2dnbd1o1Wzwb8rSw5JxMdjfoGEG",
  "key6": "5yaut2VRibr3RgoUUmKX9wmcYzRpWefHEA2yYsThJXNQm9ZajC2xfsiNd26vbKe332AhoMmrmpAR1zTP4e425zaQ",
  "key7": "4k44DtQXzsNYKA5kKzPn8QERJAGQWhbZAb35Hp8jY3EWeAhXrEYFB7CHGad3ZieWFpaZ5ewYrAmjw2SZraKaJEXg",
  "key8": "aS8mgTeuUTKeYVhuAcRzZ2xBCgCohBGXnacyBKpkJHqv4YxyTBED9pvu6K1DnciXguAEuv1FDdYpnEfntQiQW5i",
  "key9": "5XE2qhVDHrQFVwv6t6JiDdwXp1STq4x96mrb8YsB6TMFQKjvSrDczBYX19Yri84pwR84zVKJLraCQDdiP67Kv5sZ",
  "key10": "3FEkHEpWSKsC51Z4TBbJrbyEL5nrcLRhJ2a5ae6XbQ2db6VjM9ZVgms8PQWD5Q9j1i5Vkmgib9wh19MWaipieywb",
  "key11": "3KKz4LxsRWoYiCRPxJiSt7HxD2txE68UHekjfesv6JAj7g6XmFydVDCXCanAEPhrkVkmfWswoR58MRgYnPm1zW5n",
  "key12": "5pMw7Xqacrz5p9s1rGTVTxhY8LtvN2QkTPXo2ysoVkkp3epKgiZmpviX7yMUvpE6Y88GmVDL8KGaTsBHBTmXVAnP",
  "key13": "4KEpo2uqjtidzEntTEvyv7PMxUrqSoVJyeAMh275nz2cHvQbot2zrvr3sbLDCou2mP1pLJnUdPXNKot25WQK2kfn",
  "key14": "5jSdbRrA65HJLEprbbvSbCbBN68yk74DsumAKjP1h91Ta79MJFii3Cb1Zi2xhjDY1wWXRj3k4MBr9N6SDtdPuAWs",
  "key15": "49bJHJMJmh5nPQNgRAgwWnh1e5D1ovYdXJMJsUDwgaDzm3bDFhgkt6ZgioMNb6X53wTnQPU8LG3yNJL6HCrHZCd5",
  "key16": "59h1fAccC2UQsu7bBGFnpEXDmq6LizsmYRxB3kuTWu1S5f8exYmgxuirJwboSXA7EXmYep63WGDr4GvgCV8CFzon",
  "key17": "2LhwhbNj8otQ2rPcb4DGVTTpc9gedJKrhWbsLpkvsWWzZpzhb4hD49Kpb36DdDnGu4p45Wk9VETrcofV9oTy92hL",
  "key18": "3UgpSMey9uxKz8jw443dDongavWNvHAqx8GDpkibduamMDbZY8KBgZE66x74sLFeNgByfdSXjH5yQF2eC4Jh1xBg",
  "key19": "5a5xc6HUv54VxveXZrJvZhFWkPxhhSnTikMBAhSdqCPEJvSmwnncGKrtG2p6zfMJ5TYBssqf9viKsZN9Vd6PHPAM",
  "key20": "4tgNQQrMYowuksjZMNRgdXMYY9Fef5kbE688K4hnfFtaKzHDmU71mSj9bqQiwMFMC99YhTc64EoQF1yJtk6apkgh",
  "key21": "4siUB5d6qjJycXg7XCjD9aJMVVJzqRon4SExSdRjAyMeXdznMyym867cozuNFaVb5KshF8YNMpawmXg6sg1ijubF",
  "key22": "3BQLcyAGTBppYBcTSA7y63vsTR8hpFToGeEVo3WDxj72g9qFNeNhyWzYi41mdMXEqk4v5xFFgVXRJB2RKqUKPbaU",
  "key23": "4xWU5kkDC17BZmNWrtRLDWBUsVWwEenk1cKTFCf4Bx2giYYLX77sRjkXu2AfQXj7jqyLhv1uSJmP1Z7KRZEe9HhY",
  "key24": "3zVnBeJ4tzD2pmb7PiLQdCwZzTbLBTbtMrxWaY1tU7L6tHABmVTSyrvtSWnPsVMTfM5ZxL2VEBWc66Zto4SGFfPk",
  "key25": "2DyfnGCWfmCq9S4noTpaoNMpjYNgXuoZN22f2Cf88L5hqam4m9Xz2b1dmvsa2U5fxJmxF78QojcCPAKMmqUrTVMF"
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
