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
    "H87itvLAK4N3xNjkW9G7bQUTiof3K9ENEsXUS9qe7o3S4y9VJyLZgQh3XpF9AWqHJT2ovoBjZRBZQKUkaSeythJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3r55aH2GE9U3vMtHBN7UaQVqZRECmCZR9TqMD4FRGjn6A71DbeRtfa7rDvZ6aXgErdfkpsC1eKZmdSDLVSVotjVz",
  "key1": "2EpeMhw9W3GHXYMebkJtVu4UMAEBUMnbEChxGbUj5pC4SNAuzPVucDhVod2noHF1uB6cnREWLxakcTRXndWU3JcT",
  "key2": "5dSv2StLs2TdqnCfDAWSno2khvVz7uuaQRVQFVeNhJXT1cYLskea2S78JKAA2krXqAzbKzQKMkhUA2T4RCkkz8wq",
  "key3": "qcxG4yVLjw5cDpdi3xGoVLmcqjZDzB7wwtCwML4CkcnCscs7S5noTCh9Ss5zqhtkE1VqVSdr1fpa43QUTHh3Xjv",
  "key4": "613iHXTNrH7y8AZ2PdQmESj42wxQbgrXwEhN4J3UvguHE2xVfxvyUsaVLDBBp9Tmo9rCTRinNNpeesXQJrxK3aS8",
  "key5": "5YWSs1uz4S7aMnzz6sX5zbNJTQTScm5HGDSxfzsXwtbJkYitNpvuEVQ9DDyVoeJnuzfoL2gBya8NrUBELfsjiXeN",
  "key6": "5LoakWQRDnJCZS95dQnWi6Et24mifErhjGE8hwfXTBGEYA59NfS4BwZJXpzbMzUXEjZVRtqFQAFZj9uCfcE3giNB",
  "key7": "63WCrN5a2F1Hq6nWyHPTndi7qnAmF2t5GgMfgpyPMReQvVaz3KsG1hW4hyXVHL9v38XUqMeLnvX1Robow3moMzhJ",
  "key8": "35JT5BVVYfmJaa1osmzjJMsC3YAj9m8USXrSW28NS9Kuatm3fyHi8JwUXEzTkC6BPdnGDFZHex61GEmWqvgxbXN2",
  "key9": "3Ra6UzBXkQRCzaKvMXgsbhsaPUygqcs5AdEqqFfC9uZ8xvY1ffLkjk4v1s28aG6Rs8cEYQy3wUhvVBGzj5sA4anK",
  "key10": "4whSj1fwCzJ5g6P2EWB8d8mkSjxc3GdhsycEPVr7QyrL2DHdBSoAzSHM7Aqyv3rZmmyELe9K4ngviFz22gtZFBD3",
  "key11": "4XsPC5YyrQ265TGSxPxnntHc8EFXt6ZWVsfaYWKx3siRgggubR579SNmgN1DQHPXTm1YtFBjkyGrN2vDATRDM8jB",
  "key12": "66ULMaFhLr5KCAMxFs45gperYmMY7AzUzURcAipUp8djqvPqDqSMMLMzbWweRoQ6r7gAoEERzzQwPeBiLLNx4yUX",
  "key13": "qjNXa9We7Z9rK438HD8CmF9QzFg3oVebUVCu3v7jfQoNTUGyCQA8KXHytT4TmhXrK8upLJgk5QrE6gFg4mJFQqB",
  "key14": "2ypyU16WK7BcDLTEV5rZi9XM78tFTXkmgXtmqB3FheryqhWqzoNkScaK64es7NhbZ82k9Czvsd5KHqMeGfucwYaV",
  "key15": "W2inhUPU2Cc4kxAkdHG3oSMRZndEcnXTnX7Z9AxHFa2tds8ucB6PcPUJEyzDUWoLkeMHUPDdb7TfFxub3TCz4T6",
  "key16": "5utF5EsRTyDpP97TxYHhq8dkrNKvN2hcXZtAxZA1DdxbnWB7W6tJaGz7X4n9oVwAbarwRPYBuNjJ4EPMjV6LRRS6",
  "key17": "4eyhqXgup7g9jVKe4spzVkSFpwGraXtrYX6zb21v9MUNrthUF1FXhXYWLn9cCaQGuseZg45FLcXeecjkcTmhCoBe",
  "key18": "99pfv94iBZsCt1thaBEWzRHgGNQRtmcSneKxRNPsimTepA2hwQdMe2uRLG1Fa7oombe2PkzCsqSH2cAwAUSHGd7",
  "key19": "2qgXLcZaFem9N6GGvEdAp1sjymDC2wKqkkXa34GRirrGs58r8FSDLNTrvTBiiPZGPQCwDBj32Vu1HHJNPrrNB2e",
  "key20": "5MVD1AoRcwbubRytnGrBN6KLLVZ6TC1q4hTdHPszdGwanwPv2pmAQZ6Q9MQSH6bypFaVytF6stE5bgqBkE35en84",
  "key21": "5mqTR92tZ6Re6WFqPsBZf3FneYyPTvqAeK8yRfUsHXdfbKxijHftSm1m6TkwGx5TybNi4NFrriMcuMSS8peDGPgN",
  "key22": "4yTQGSnP4VW2Ynk3CwAc7XcDuUDBBBkq9ziFCwucpSC8yTfvJWAnfXvTUNFdrNBxeMuxcpQaPXYRiXC1cntb1WNm",
  "key23": "2X2BfksrKAvjuvugRV3v2q2att5trswwWbQReFJnwmAUb4LNgUHb8XfpCHJocvu8HHCQL3aAyr8dDZwER16CpCV7",
  "key24": "3Jn2JUwwNdrE5f1JN7NJsd3i9ntCgVeuHsMfaLpZoGMZArNMGmhCLvSYdboxYQoHQSbQZEwW9qUGESa7J7GyfGjk",
  "key25": "2dPYPDpEtafhTEeSNM8FhVZX2Kbo1SuSWui95zA97z6nvjspaJUHxnMyTwK64CXZ1Le8dMC9XTcGExwWuT6aCPYW",
  "key26": "5KeqwZEnrksfmXN7EyiigW74Te8mZ1Qh7GBvLSZUHnr9bi1fWNLRQUvopCGELrDzkPR2A5vV7Upad8wCursHmR5W",
  "key27": "3DXvT6jzt4PsfskH1uJ3GEPq8WVUacdBEWayiSjMr4GL8HRRVfgmuGi1QK1i7A7YxExYhAdHEc6dsWgeyShhsWHH",
  "key28": "4J4wMtHvaabrFDoUni6kNfEoRbC8K7FeyyEGEdyAtxgkt2day5EEf3jWL4WpsXtJv1iFW31T18YrEaYYXR3YPUzk",
  "key29": "2z64413zVWnNkBp5GY6GnyLXf3vDdca3qH8JtUERuwfkdarfbiQRX7Zt2WV7vh3mo6rxrgjgitYBbVA6fmxuCThD",
  "key30": "EMD9nYjDSeM1aCaJ1rHotcQU6vHauxv4tszUXcq8Q567Arhs3q8s1WQdRYRWX6eX1k91assnbh5xAShAu6BRTes",
  "key31": "22vvYpdYrRLyNa62zEAxkMdpJ9faGM29k8LWCCrZjtrXgm62KDF55GxNry5sRtufm8GxxWdjnPqbrU9cADi9LqCt",
  "key32": "3aCZKTA3ia9y6PyiPyVsF7zJ85Yro8jYRzDZjTMJks3Khevu2bRmRe7Da6FjuQqKGDGuaSBkmnveAqehzcQjiaHA",
  "key33": "4sbfYrbVab8BpozYZEa26yVdR4qbkVxVb2UrDpFYTyd9X3AeRxLyCAodDanUA75eVBcuS45HEsLbvqX61yr6DRba",
  "key34": "Vy7ucubX63pVBXeUNY1fFbk9B6FPbUMSGjG2YC3sAH73bHR92c5zpYZbx5sRfdWwLUbr5B1apV1tHEzjP7kC7G6",
  "key35": "anmfSmeySaeidfcnS2Bv3XU8r32u3cp1SUxZ7JotgYwC4EDFDpHPVKgu4r8PRpS5LhsVZptS7d6bcFQPRJoWsSQ",
  "key36": "251aCVFxbuxAYe3eeTvQw5h4HQ9KzWYBKbehtWiFU4D3aKMcm3WsNwh6cv6rrUtxu9UGPcMkbnHjVYQrdkFkoRfW",
  "key37": "6nb5zKsnH4XmUjdPg4882x7pUpyFwPGoNM5zeMXUcUi3Jh7LtdQyLegrKKzNnq2LfdjJYSjR2T59mUwqK7qx8Xv",
  "key38": "38Xw4Zo8rkfBHS11v2KFJgv8i4JbAYcvae61Cfuwg91UCaH165n74Kxp54TUafDw7WHtkPnZ6XsXhwprGz6vstqm",
  "key39": "3kYmNq6CwxsED1Sc5B5fzEVcQaVrCSxoDAvt2MFQ1qHr4WvNFaZdaRgProdsgUYEEvP4ZLZLD46ysvYpKqQmyLZG",
  "key40": "4Xh2jwvK2zMoRjDBb7GWnX719BBdo4uM8FwZyUxN4ebvrESQPHKALCAoKMbZTBVKdECo2sSSQNaPxX6nHGT6ZvNr"
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
