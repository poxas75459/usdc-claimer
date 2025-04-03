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
    "2VCCo8vuKYupcG2rwXB2K2WtpMpYrZzd4rKfxgKYHe9DEMEJMcEDHWaN2QeMKvGsQbHMU5GYtUFmyASoazYoW8PS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "6JbmqXYD2xeUfqHXUeZe4ymd4iWFoQSWb2tpoCiqBKe1zPErQC65bjMRh96ZbaRqMsSH8P4ocpiA1afdsUKZCkH",
  "key1": "2fgkr3q6NzaMFuMPQXQ19wXvGYtfwtyEV7uver5Jvn9bQ2EwQeKS1gfMsCtwh257nRBaEKK72w4j8dnQHwpbGdnW",
  "key2": "2M58LGXJQsUpe6h4qhgzzd8T2XKKjGATy7JzwxsJrVhbFWZC5Ntx7KeWFhegSV2NpNUyfqLMUR8K7FENc3ReHnbX",
  "key3": "5KNcUg7weQoJUiHShoGopgt4AjK4UgJwRW6eGctFUdWNn1Zku66xmHDnMnEyppMi3PYiqZ6vDyZeo5LgzqKSe2FG",
  "key4": "4vNgD5uLk2pWm8e4gtZK6CKtXdQE3uNnnfEjX6Yc9S8r5bhJ1XBmUXobEkvUsdXqaKZGgcfdjNphU2YUFzUfUnmr",
  "key5": "757FnLESKSh1RFAk5jfCzPqjeoFdJPdPUPdCr9HDYgL2qhRuV4idejkcipcL8j12ZVQNuApuhkhrGDAkeauS22T",
  "key6": "3iUve914zxVWBPh6SMP4hLx7jGjqcKhwx5rBtj52GJTqQ7Gr5wipSVnrmUEgqrnoHtXqyWDPSw7knqiAChtET65E",
  "key7": "2xYMtT7xiax1y7uEk8o7NtQTxwczxEUVVtNjdjbRbC3LFnLAs2KK4HXJXhR7ozXCQUifqY4DDDmGrp76YDXA3sft",
  "key8": "Uuac6qfihco33MvYWnCmuVnrRrNLPUqQ1WfMuBYjN9jVujCyPaijjxda5dLmfe2MrkX6wATQA6yVmNAYYZ3J6c8",
  "key9": "3AyzNiqKPSSeA3bK2PK3wa12zjZH53RKB2SmVYif9QaKzzJeBP3GJfNA68bGvMiqcGPebvqRA3jHJWoMdJEzpTgf",
  "key10": "4UGnbHBBbyzeQErkCF7xqFkXwyVFSS62fbXF65JahDcqPwhEjLViqG1i6hZabEYjHGWNURBF2iAJvhNzEuaCUuq7",
  "key11": "5MPh4tVXGj3SJ9L4wpdFneyEDTisKGUohddG29fxgJvtxWCiCGcQsFUh9q34o79Hdv3ibpoH8UrbdjnTQpnyBLJG",
  "key12": "5gZdjqa8mY94uXq1HaTWauwa1Le7mACnuvH3d5qHHnZX8wZTXEuiP5944j4Lf4wAJthTAm7MHYhSdtA85q11MctL",
  "key13": "4PhUScBMuNikzqiJbaTJr3RVqqCSwqSfzPtiJ1CzS1fKXLaNLmserDTDtuXKHV2CatFD7LMtqaA9yctDWY9UZ15Q",
  "key14": "291isHi4D8AU9Si1aXmpCaJUfm4iaKgwTtUBBewutSBY6iDRhpLdf69rziwEypQijASEBFbxS9F5tTD7mijWSJ3G",
  "key15": "5vd7xsDQiVRE3kqgnMtyAZG8eWvtD6ooL2X9c2p1bDQ5jFAcTMWPxXMszd4iCjEdeeYxm3kUvop2dsZGsrNuWd33",
  "key16": "EQzmzPNaYWYL8B2xoFoSRzB9wLJQXEdi6DWqU1vLLEZUav3D2DgQZ4QFBreXFo43Lq4GVYqFxjqao8rzCqdbrir",
  "key17": "MSrEmeQtMKtc5i41asQmkZkj6MTiro5tveQE6LCrUbkwKxKLSPKyWCFSiiWGMv5Dr3QKBnRdC8GYpm7tFMpzR3Z",
  "key18": "417VPwGGiRi1MZBWsLmiBKWUEz9hevbtNvJW1b56pj4skReYjT5AX2eYY5K77Vb43iZ8kFUk3wsvK7vmwNkUG3Jy",
  "key19": "4J2FXDAiN8Z84DeHoxQ2UT4yXbqnRk6ougD5RqTuNjkt9bE6VHcUk3pLZVzyfH7xTsPqvTjYq2RKeSnmb9tWJAPB",
  "key20": "2emtWfbQMroTBPGjJeqm1GftyM7FG4RXkws59eHjNwiemgDAWbURppvD4WqSLJweDvDQtavY51FesbuGcLwSMiPm",
  "key21": "5k82GL6xtF2NnwsdzjvUzYSNQDzhiw1zzwZ3MinevLT7Csdy8RWb3sZYM9RMTZprq8myxJKJ5Mm4CUUa5ecJ6gny",
  "key22": "4yffEkMHe5JZw8LDkho4nhomQkBUDqYAwAyPn8TeHrn84QazeDSUmbS8joRuwobd5tg9iSCqCpVVCeVV1UXbc2Hh",
  "key23": "3vevvNMrNPut2TLpR7gouVPXnTB8fzVa5mMVjJQ8a9Eec7x3PFPePGWHYmSFwiN1ksufzLa6gsTgUAAxkE1sQP24",
  "key24": "53tYbg8giNBrwDH3tinkSJQXWDtF5uxH5jNb6ADJ2vRyLDhFc7HhDzSJbP7Kmvv6gvxTqLofmYinwiyXmV55bTrn",
  "key25": "38wWpqkvQcFvAwK13GvGDPHFqT5swRLkSGbVWoFWyFaSmnek1TqCFiQMzVVUEGiKgqgcZ2PunJTc52egb7Nxan7P",
  "key26": "2jA4qZN1WgaskTUDjQrACdiREWsGACFHaEagHxhUF64zNwhjrxU3Fcf2kRg8w5ceRGtUVAAKU6ifqAKKcUz38fh3",
  "key27": "3SicFRUcewcvoPpUbUgwfbN4YJqptfNswobRjAsi4V9fUsegKHHW8nra73mtPRGkHc9ipuKfCkmURQmhRW5bA3e1",
  "key28": "2Gnkno1WHQB21jEXkHns8TtgyFjEjrTi2B3M9QCnGBBnxho2fYrdCECBYL14WcbPa71sK4iCBERq9dxv252DYYQH",
  "key29": "4iEh5gcXqtUmvg9nKR38jd5cD3AF22ngpr9afYAtwS5Wfop7zZWFRMgvyeUXA2H352hLgijcSL9psBfDDgJx14uk",
  "key30": "2CwQNvVcqPVUeyyDP7nfcmZQ4mm9EQYSMCNXVkYoyJNA4RryiCNqHDGP7577bvU7ji7UQ7uPxaExgZccJNs1yRyJ",
  "key31": "2ogHzhgQKgyzWaT7EcWxqNcStcYeeGsEVqWHmYKfvUkvKEUP4Xi96y4QUy8jmxsPDiU8S7G25io9teePaKgZxqZe"
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
