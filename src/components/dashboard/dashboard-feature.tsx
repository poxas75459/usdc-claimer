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
    "5qWmM12PdjuKUduQn3KqruvzDYcrwLRfbMEgFhKyh5dc9Sst5atbvvS7juchoViojKrB85wFLXMuxRgxMVfpBpnh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4PxJyydFuhxbKN581tT9rf92yk36bW6e3iX9mxnhwuX63khHZ3Hi9PRQgnF8eLE9GvzV5otjrYyq5jiZUxFcqVvZ",
  "key1": "WjMqi8eBFqR6EHmAAaCFB4TLZiYMBaER67DD4yL51BrFybEenUsqiYSV6zkdFiRA2Jsiyw3LHCFZLj2CuFb724Q",
  "key2": "4xxhrKS829Q8WHqxSFYaBpwm9fenTdo6fek7QbQyJEktPVFgNVktx41fuyXDjqSMPnvyv6ATnQQHBwRaaNyCLjmr",
  "key3": "Up5DCA4Lvz7gfVXLTPT8My4opuShZS4gZUgQHCb7VxFv1wuc1zdFWfspduzC66BEEhhCLL29tbGP4yjLDVtxmCG",
  "key4": "5e7ptLpvNsvf87CEa1TX477fnsgP5o5FshY1BR5T3cpUzdSYkbPijdcWcKdKMxBJFRqpjn9wonvquv9xuJqSdLuu",
  "key5": "5e1cSk1NdKzWXmyHdCc2hA8Gf3TtrzcnmZJT5HJm3GUU6fL3P737i5hKBTamcJkGdpupGGQ9KtGv9rx4E7YJ4M5y",
  "key6": "22KMr1LQgujoZnRR1kLDwJBCR6pGiekwL5zqrNsdixDff8MFA2G2nMEzLTEgPs965HtwXX3PwrEZpWL9oAajyHym",
  "key7": "4DzVcypYa9T3N3wrDLg4AirQxfDe9oeWv2X9fJw494iXU77yDtxYmPvaQDcgssPM27YeBeqM3kfFr4noriZEYCQZ",
  "key8": "4zGSksf3KchbGsjrshNj7stYaXtyqJXcH92KSapTEdnFVEDr2uoc1G6qChcHfKCMvBXe6RJeLoSL1YSoKP9A6rEY",
  "key9": "uWDXRXs9dDdMW3F6fGeeWX1j22QPqXCwVeMrUVxgFG16KC3NgUQMxVUUsmrXWTky6GVXdJWxf6gtRGynJxQ8xmN",
  "key10": "A7DNsgDLf21fAHpCP4zpBJdiEspWT2HeXAsBnLc678EA2JvLKKphTX4dTPAYdE7XvpYfyf2htZG3uBgoZ4VG86v",
  "key11": "3ZD4saxVjnaek3YSjK9hHKYNNjM8TF86WTrmRjTMnfPgnE8CbKzevoqHWnqW8FioAQAJPpmSxByHq7DmyZ6tbo4U",
  "key12": "2qM3P1dkaiS6jR6z7FhHbb8SUdfESPP1QWE6arRzCyfhxn97Y5fLtksWifYnvMVyTixGSChtn9kJCvohfPF9tZZh",
  "key13": "5G7zsCLfUcujiTxEePcfkRuwX8Fvmc4XyyESn4FTfPM6Uq8Tjh7Wc4De8nkarLbgswHdmdySroddbqXcw1rdTunT",
  "key14": "4sYSXtAMrnNay4CysGCF1VPC1g1EFzqiJo5VuQh6kGrZe7TSg8ZP65iTn2xNLL8a2R2rZpgvoQr5XNNa1YNtJ1un",
  "key15": "5R9UtMR9q2V9B5Am8avYwzsU7EoReEvmzpQvucvpQJzN2oyH8gjwqVo1Bsf224cHSPC2ZejTT1wPLwiJaoKAKcYo",
  "key16": "5cxdw3PGwaoHfc6xbJtrn8XsH8hSNgPbyvg3dS4h6eS8Vmjiggr5dQCN9Hv95dC38vHSK8SH8p4Ek4Rcyw6m5aZm",
  "key17": "tL4YbNVejzNnYW9Pr4Vmug4dQaMCbY31iXpBm5s86EWvG6XoAmwkhsYanHbY8E2AQcNfxtkf699qZRykkX7SuFA",
  "key18": "4dZ1JaV31Wy8gNqBbYvvacb247461TVc5TmargAcrdqyBf9uicx6a5fzEzetCHEWwTqgXwWrUPK6TfX6xjtMNaqL",
  "key19": "637A9pbdhNyd6YjutEqtiqQazkCsAneb7mE1Uhv4ucP98G9cphLxxJHXJA2bmYsEc13b7k4MbACKkrxDXMTwHn1w",
  "key20": "4o5rfXAQH2uv2SkWzZTJHjRmmBQt9G56RLz5D8U2LJbvXRPcnHANKe1rtBrQ2BzLY3frTrXq22jB2QRwaCe5w8vo",
  "key21": "vy8dMgJ1Gjfk2QcXvcpQD58ygczTLXFkUqJ1ThZrAeJ16j5EB3VVc6w14VxWGFR6iMKm2yVV9ErqcroV5oqLUTc",
  "key22": "bG8PYWFDvfxUkLepVUyjHTtrnvaamz6dnHCs8p8RDzHsUBwDckZA57DcP2MJsMXrtYp9QXU3ds3d8PoLHvB4qsa",
  "key23": "3MeRhTsKAAsMHTGAAE2rAmioEQWY7VcdWNnbxCkwXXGwHNEyiEZ338qx9P9RKKR9SXQeK5A4MPgP1u4jvQe6HhtF",
  "key24": "4ARGCgwhNtsboW2o5qUBuebiLU6GtqtdVTzcggFYNHDBUhuMfW6GoACoxMqWbajwHhxMGguSpTdFWVubKkNJZkR6",
  "key25": "4mTkvWLtGR3S9Ks6nDipb89PVCgS7uHTpDW1TBG49zQzxQXNg81vooHY2jRqqkoVyaHcDWyaZWCcHkg52tZqoE1b",
  "key26": "3CfsqGcp67q6iPep2ThvEA7KHVG61MuDRiLimADQP3Ku5LFdFMUuQZw1YsA6DavraqzNEozLGKrMJ9eQfK5zgx2C",
  "key27": "3gi5sLjQeuQPT4jq4JAiZtVB6NZNX2eMuXLdyBBTVcrtmuv4p2yGkymAn93hNA8pLC9Nv5dytmnmRgvzWE6sRTzx",
  "key28": "2DZDWmPHEabposzPupuzG1CjNHSJArTnnTvSZfxoz19my1tJfxx4qN7YwKRzCkaAwEjTcMiXSJePgqDTNwAz6ubf",
  "key29": "5mu2phua7GdokJ832MWHRUR6DNsHaYtuStotY96mg9CNxWZpbNSqQLnzj3wNxjqXzFmD4AMHarxLwks2WATqP4pQ",
  "key30": "5ExzxC1ak2bxcoH6rqfU7pon1j3XTN9yaRnTF2gndqfYaoUFLEU5DMFCJeNzYsDECHWM2yck3pjD2PNTDf5JaHz6",
  "key31": "2RjYHyXdgvvJDHBxfQ9VVKcwXhR4iZUQRwoJq6k2Q2Jwc9jKuqtg8famTRsqju4GfUXgM8V6nRsRy6XiyX3bcB7t",
  "key32": "ZZSTKu7SzinraPV66LNbPMWhvx3UJP37AzsYSs7oiyjfnHs94ZNKcJBEtjMoUz3upejymR4w8rpi3mGxgKJj9Zc",
  "key33": "4pebMzWByvjA4cFy9yAy6gjqvtCRdXxubnHAvopt16VZ9ffhgcxHtNN4UDWmjBJ9Cs6LgaiK2CzbPmzStgtDSU4F",
  "key34": "2k2z5e5Svm2Zu94kmBarLhqvdV9dBvU35aPMunxtF15CtctNwbuymHt4pVdsRrmHFzEphcfkSJS1Q9JtQGi6bjPP",
  "key35": "3W5ADty9aP2qPiF7PRz36ckCaqHAbuWNFgxy85xmSuYr7WYrvEmqHMW8HqKoRAyuXhXbps4ZrxprHyNQWyvZQpfW",
  "key36": "G7sF6VZ789MyDEeieCURz8Yo35sUsJDjrTDGXLfSZmZBJrxfsedEF1NK8YM17g14RSND2JBN2vcJJzm3vSbhYAc",
  "key37": "TuG4C4hzwWmdD64zWuy7FPtf2r9p3SXrwumhupXA8JaeSbXMTGYZWANv388Q9SMR86NVC4KJSdzMhipuhYHm9LW",
  "key38": "3JRixfWbMYVDUN74LUGC8PVqPpXw4EzCjD8TeSQKsUGKxU8VDnyXdenT9DGZ5Hqwcg3TjM7nERWZBtvrnhJjKHJf",
  "key39": "4X6brcv66SafN8cVCPcsZPi1UEjWqyZtDon7oUn3QFE6wkAHcrWawMBNvek9Tos6MZuHVxCJSKiKkQNKHE5QzFxU"
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
