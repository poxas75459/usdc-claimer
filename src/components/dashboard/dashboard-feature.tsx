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
    "5PGrCFS6tnAm7UBnZZgqLKFMr8V67TCN8y4xD1kPf7zLZEWuWMrCCueqCQfiFGdABWY3WEaHgXopi1i7La4pJkRC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3qrUZCV2JgcuaTSRR3xbsuLwnDY5pwJrwaGeWWWqEZ1T9DziGHtcXeGT6LbUuFgA8pgtkp6FwP6rTDyLFtS93stK",
  "key1": "66ZJTnuzsLaanV8CUWaHdWA4DUwiTDoBwUT3Httno3CdbEtVVHTs3sCiLJuWZew2ds1KDivGPhBUnxRRzwb5YXZs",
  "key2": "2BVvVeUPeV6hoEnQNTqaTmG67ioegZunoQBVKAAVE6RaCEFBCmxknh8gCEPTy3EXz2VvfrqofBCPQ3MG4gaCGb6X",
  "key3": "21ANwQKbLLrCLtCEZ5zurKuHB3MQfQnkU8oX5YJL58JcE6KCuuRMCUkZs6VaXCsc3XxBLpFr5gdQm7Jqiaj4oyF9",
  "key4": "2MDVWgobtacgCiV7RWBu1Gnd11doSfjAgytru3EAJUbLK1niAWWBuvMf3SbpP4nmH8btpsuyg8C7MGppfwLiYRvq",
  "key5": "2RB76YbfQG9hAgYrCR8o5tqkLr8WH6wDxjERTKA1eetRY5ScpCdKsQfWKMLa14DTJH5sDHFtgeauzcN5rbcpoBRH",
  "key6": "2NyfTmFrh8bBrsupmRK7KkupHnPhKqtHPPvgaYs1HtdFek98yP6h3Tq3F9DWm4a9zsR9ESHgNsJEjq59VhyXTXgd",
  "key7": "4tY6simvJa1r9BDyDqJRMsLvudQKfT41Cgz1rxVw1M7s82imDYUc1JKPY5RPXyj1FN5yWVARWMes2wgWiQL2zRYn",
  "key8": "2xFpeYCDZjkwdmWgQoP2woU3dBFxWEBvib5oxUpdg9KkSv5uBFeGKq7yiev63Mh9bPAXMSV7rYuWizpxswM7Sxb4",
  "key9": "5rSHzqoriZ77Pn5i79PhtGRBsVENKorqMbEBmtbcd5dTXpd7XSZsQ31t1cQJLM2WRemvksAE77FkqmkZqz8VWGUH",
  "key10": "5ucJVGHLr6QLUuUWJq9hXaaD6WcBtyWdDK64sfu13uWQMUsKwrZa31u8mCDYb5atbPkpwcF29eY4Rcdx9Lx38Czy",
  "key11": "36fZ3LJaPxYJzDi2Pjm9n7bvvZkmLiajBevLWzxRZeDbYNzVvqzKTrGdHEjC6zmVFD9K44vRT4ohPYNgavFkDAqH",
  "key12": "3cVfC2aZZz2jXKasYj5EjrT1ucCzeLg94V95A58QquWdAtaxiyKrJrqyKULPyqagSXJ1yfzco3zSGRwki3ihBYY5",
  "key13": "3d2MaCbxEa1YUi7jCfTdRRPA5oTqAZBADh8BVF6FKxDCGmbZgmcbKvnB1HddKb6WCxEXozbtmiR8YCAsA3mJaR8J",
  "key14": "28W4YSVspuLJcKWXMwfMhmzj6Kr5kVj9vN2KWAju6JhNc1iCzmC5KckxQVxBTccDz6qGRQB3WbuzR9PJV3PbfTLy",
  "key15": "3EsjcRJvmV8LJR7HjNEbU5THAELcpJgFSCpMkokJN2eHGDg9h3gVuRN43jg45aBcJDfqHeQw1aFrJvxZeGeUtkH3",
  "key16": "3ZrTumTy1LmwcFKj6SmyXExnke8k1sx6m9sT4T5tKLiN1cuRw9sv5QQC74CtSCjzfYyCRWCZVBmyqfrVLJT1DHEo",
  "key17": "tshTTj8ZFW8BDAiCuswUaf1nkziMZdt2RtWhwz77GbfJyoXgvMw2GH4qSC4QKEBSiYQNbcSptkpYQLe1pe7N6Ym",
  "key18": "5oAsugFoMuvWRM1TQ7VDZEDV7Y1rJRvfNckpAPw6Dp21zETbe8EykNnr5nG8kkAaqNYtnGdqnsBiEjbEKYCEujzr",
  "key19": "4tdewHGXrXA586no2waoj1WgW7iuHweExMgusbUp5hueUQoKGdC2vsia9PgcVhwp7ZSBcsCHg7gb93X5AoteNzgh",
  "key20": "4BqeT4vBz1Ud8KwxcAh2zFCyenT57UXQS9AszP9VfPjrgQUJKu6s7AcB7nCWjpBMhaDzimHoTTjK1utd4wVVu6yf",
  "key21": "3BVmS5TfGyshnGSMvaZcTPJDZuVnV7pYZGeMqNFDdQUv8Ja8LVjqkLYXgdSxBupe3JQNjomESGoA128t7UaihENz",
  "key22": "5bhPkzbkMWr7JN8N6aoHfkogtPxrGT5YMdeEzDaTKk14KHc1bYP9jhHQ8kvRetk97hZZEcFuQfhWYgbVAmKfvd4S",
  "key23": "7kkHzRu7JvETj3Rt2tyM7ACYTVi4Co8y7nVLE1z4rg48DAK6pNFGY9LLea3gi1CaxEzbDDJsm5VpWaB5CrGjPCJ",
  "key24": "3XGyKUZpq8Hd9ypoFswLdkiKPrccGrYnm8SENsj3FnAfUgSziYC4fymei4hrRQaggeDci34hfx6HYsewiFFQnPiz",
  "key25": "49exU3uJEMUotxcXAkes56KsrZFqmmT36nw86Vm6PzM1ysy9cQCnHMuKkhVrqNBtg86SqnHtmM5Dbg25HRhQWtP",
  "key26": "3A9vrPZLW1jDDu6B3KufaKmekecQFCtLhS1PYiodXB8sJWeDckbT1A6pKDy1usYn86fyAvFZVMZEEfHoKue1Cqkv",
  "key27": "8M1hRBh2bpood7QfGVNkbVbZM2Pa3FffUCC8i2Uzvk4phbBLLGRgpJ3Q1fxWyjqMPZGE1ZT3ug2amcZKnZBD6fM",
  "key28": "614U817resen42PFKg5UTXwWWRh7ihdTq8cucpDtCCEHhpoAL2gufs8xaz6ua6ACBSVferCc5JRYg8Pbitx61rNc",
  "key29": "bHLVYwiZcxdTustUzbvgJgNyheBgfepq1fcBDa7hkzyFVe13aWr76SVsMEh5MBS89PoFZ1wqNLYQ6xiEACTbrW3",
  "key30": "2m56ZZpRXLYdgxojE7dYVQVGjUTteuWwe67LcGzEPRru3JFYQrgGdXi9qNRSXZAPBfgk4grJQb3hP3gLhwDvD3dG",
  "key31": "TThzyUNV297csRGLfyHRjsy4rUyDUWrB7225AEEHM1FDwYbmjxcmgCBFLpCNFeZ1bXamKQLcSaRtyvCCMs9vMMW",
  "key32": "3uc8kstnaX5PwQYE4xpo4Et5NzPsTpTkx6nhVo44y4RSfPAddD6BFS9xdA2UpcBPnVkJET9JUPEg7oeyuhb2qYsH",
  "key33": "4cSZUYbXRX3JRgbxbzNhYVid2CqUGwWHXJA7HRZgKyL686QFXtEarhHTxbsqRQQLfQhS8qei7NxrDm5SzcYmkqms",
  "key34": "3fsr94LSMQVHVWsTp4evkTzsjc7bsyE28gNxLjjd8D78VgoCb6XbRuCPxFcUiQULTVnaQFZ3EfXAaf8n1h9zYoMm",
  "key35": "4j8527jcfFyC2AoGyRmPtVBQ89ypYkY2Ed4sSmQf8n8gmRLPFBRvcgQKidZdDaN24wgT86irY4qJN1NeogEiWNYK",
  "key36": "2HTbPjPHWkNRv4ap68tkUYKiDHgtMturhiVetCy5QmVLSdRjSj3TvdsfiHh28pwsghsBDNXNZAPMYjHEFQedFs3A",
  "key37": "4EQmV8yzGdBt6r5X65QX42yRP4ew44YymqaMRPNM2B7hmoTLabLwwzpFu6xKGCs612Sb19z6rPMg2ryeBaJScG6w",
  "key38": "4cvWpru8UstTbV7idABQFTC4mx9aHBounnasHJVrTaYTQ4vMFvfpumJkoK5n9AZqd3Wif1khayP1kFTeaWdaiJ74",
  "key39": "39NcJGRdTfjQzkxKAX5QhA1Qz4VXQ1zoFXhVPzWHfYh2S3YKu1EjHsaUAF85ucSeRJi3Sem4K2WooLsGnQ9JRXsY",
  "key40": "5Qd9iykm4fc9WDwVz9vqU11vfC3Z4Gx3osxkFacP2eKp22CNpeP1NPNxSo2TP2iu6aKBzraTBz4DBsYF4FncErEQ",
  "key41": "3cWBNdQfZxzgwwjRrWXvEAtGDnyxHb8yHxHyZeZr1JgNjuH4rvFiAoSP16WNWxRvk6ZsdXK6FFhFWCT5crrkML4X",
  "key42": "4Zg6LJpwVcPC8GevRb4YW8PTKEcK8qqbcUuQ1n2d7Pb2KK5gwtXhdiMC5SamoHrFqrdtt8pNgRAFxFLg3mr9MzkY",
  "key43": "2VQAziMiTP3kn8GW4GqV9zXM5iGKJyZvDTWhpRRZK8Xi6Xab4mFNHJFNdy4Lswmc3sjj3nFZV7PsEKdKwwUWe3gN"
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
