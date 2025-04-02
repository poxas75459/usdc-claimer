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
    "4ZFJ7MKDcgUQs6bfHQYSoDP3JXLV2joDmGLA194WZ16gPsjfjfWovVbFEdjDeAENjDJiD3PYEiGcLSdot4raVF7i"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "K9vVZYbdkZVXKe6deH3Vw8LNpphS8CKYtEBWMtg51832ijYBBes5wfTnAoYpRxdwLiqAZ9A4FXwE4iTh7NsiJ8n",
  "key1": "4ASm2vEGP6wXVXeaFRcoattHKfacWHdqGuZBYajDJ31MurBvHa5MZMVPRDivsujkL8QanvQnPQB9prnLJA5ZeCRS",
  "key2": "59NjpuMkLmJDM7ZvVmrUcq9ZBHRPjYd4xnMLzztqKgNHAiERSecWHcRq17RsxMpgod4TfvMqHKtbHXZ6CYA63HxH",
  "key3": "3jrzATvVzuRMaFFHUVPrSzupetdPRXGpYkBdWYSB1r2U5ot1DUjXZWgbKcoC8yWj7gZw2Kbw4sDgkXFy4hPXYED3",
  "key4": "5KNps8sMmY4mi4czYvfgEW1kMR3BtqAqMgLWt5TdCyzA2Szw5Vcf71WBhEuXHfqdLzYqvymGdJghbbr2MviN17zA",
  "key5": "4MewMyBGFgubENUy3UHoBBPiesgDHgjzcyJ8tksFZCzvoReCih4kcp3JzfujwyBM7SPkNrK6a5WriAMpVizSthAE",
  "key6": "4BobyGkyXci3NDRu2tX6FRRKj1FhgUYVbHoqyi26b9K1p8nsa8SkMYf2d6v1AppiEfpFzfcMr5aGY43xP4mRzE8V",
  "key7": "42YmrvHLxAMrJznPDK1EhJp8BbMiD7JCdgmeEekGYi7HXwnvMwb2BcULadUyCARydkaLSZkEKwno7tp152Q3bxsx",
  "key8": "2p8qQ49XvuGxdkRMCXFJwEWUmoJQPrxxjhYaKDB7dGT9dnZQBxETfiYp9yiM3uegyTcJqa8WmnahHZsHDKAqnfdz",
  "key9": "24MhdANFVxEQhYBmQHuTA2Ava4UFETDubj5aSfr5giHQMUKkmrb5S7UKezeBsSKU48rGZk4cXHpxgHW9EqBH1tu4",
  "key10": "3qFduBF9LgmGyGBw5ccDUGnwWgrHnt1mNoc43EXtiwbZjU5MDAN8c1gWk7AzLCBiWersrcEqyiEfj3XmYGFb8FzA",
  "key11": "5Mumsg9131hWYSv7rjSvme2iXdV9LtqGDL8X1PYME68ufBeWawoEzZsvuK9wxSDezrBykN1Smcdg9iBBNW5g7SXp",
  "key12": "67RaAhjnSpfEabKTBse5RKK5yydBrjS7dnGi2PPup7YqFK8GnRyLFm4fDq4z2uyQREkfWi3t86UTn8fchsy1V29Q",
  "key13": "3TMV58FCGpMEBQBBxWb5ohRPUHH5RkdcQ9fks7UNvTg3gNeyBAYjAQ2BCMFqMX3GeoPhhC4MRiKbg3WgRPywHNSr",
  "key14": "4XyfhmrBQY3ALbKx8y8uUQ5Yjmj44uRaFv5TSubrwX8m2Lp5FtKP3ouKy39wtfY5HHF8NMVeuJ5SGmJVz5nsTJvp",
  "key15": "33ek5MVbcyJ6YHTT8aLxtVEbEw7VcKFTNs7UVvYsiKwAGos2DEKVHA85S6MVNV6iWHkNYKHpvBt77LAsYrPqgE1K",
  "key16": "4uTd1VbhAf1k2cNasKKjVPbZPdWWz61Ee4XCpBKPFHL7SYxkYZYrDsxJfFw8zF4U1iWYNdTwKofDx9DALuDA3EtV",
  "key17": "2z1GDhkcY1Lg5qJQb8sZomNZuJEga76oQZSDJ7Np5pvjwhzuznFwyZeTXzNQSXSWamiKVi5DTRKCzHV7Mkk4LBiX",
  "key18": "4AdgNuCv97QgVR3kKWARcqRvBqonsbHkyYfFXyF1GH2NHkdz5xqL4BcmMx3VwApxh5bKxzcewjijFf7HMua1F6P3",
  "key19": "67r7eaJtrzyeRm1aXBjazBrZiKY9PEpf8pPP612VJqGW76GpBpP2emSCQDfQzEB4wcYgmLqiue8CW5ZzVoJSXPzH",
  "key20": "2o1XCWN4L5y9ZHqFZgnxoLvsUeBbMRoGRzVifXv2cjMhfCNwi4SVTw7VDQRLoTVtXu7mk7WMQ31arvHxRcz4qg5n",
  "key21": "5SAjxUar8NnYZwNV3u7KneadjupTic7tQW8r1fDJeW5qnNiwRRuwcDw7pUYmjvuUKXwnPfoYzgXSwS3JECQurV41",
  "key22": "2Ubfr1cXKu184uWK7YTQFmrSj1dRjYhvcU5NYvunWN1cJ5N8NPC9JUa1qk4vUGe7pow83FmCf63qGgTaEpW8JEEh",
  "key23": "5PneGxhHootktSyqvHMRcagxTLcKCAnfJbnuv2WDcLF7amtbAyyH5jeQktmXYy4VyeHrU6HrekbBjRiQaUfSZJmf",
  "key24": "dEDxAFVjEBsRLoKmTPz5S6avCH8pEJVf6QVaNMSQB5ZwoDFucFm6XWnFRkd9TDapnc1Rw7gRrFw9iBq7grCHa7a",
  "key25": "5UcLNLHAPB8BWfukxJFEdzjmiDFRU7pHb1cQbvTaeQ7haKFxBP7bGSKKfR53jif7D2ECw7zJP1hF24wKuALp7wAJ",
  "key26": "67eNcYLorKhYNFuLjzvBgnYFrMLV9ZrhGmJAysqHZW1zemZrC3LdJe1t255MP4UALyxXB2T98H7RPecdWtAU91Xd",
  "key27": "5KgS8o8aMeCvYSdwpLZqySEXo47eXe6AcP8aU66jggvHhtBGEnRHiG11kFZzNSsZoLYNXTd9J6uH9WuJMJm4aCVK",
  "key28": "1XbbRq8V4hb5KApjJoycPygiR5TEjbsSYESxHXkcebXF8VfTroPvH5BQDHPTcUbGqqtcueVvHpdmGkkHzQ6eMKo",
  "key29": "SAiPzA7ybNu5fTmpybnAEMahwQ5H2acxDMJorxQZQjESX89smCUAHEzXVs6UKDrWY3gK2gioUkTSbT1CwCN4mge",
  "key30": "5jAqw7TxjnunV7j36NhgkdR96rMjuMhiDsesXwxEJVBggLMVLWuKCDyxJgXQVBrGzT1JKipp9zfZ4BfRQhUixYYW",
  "key31": "28hswmzrkDoAyv8Kpj3EpscDMrB8g7nCiaxnDEF1casu9gcmNrajnEaQUAQhwWVCg3pgqy1kfRiuKsRqbFoeRDTE",
  "key32": "5bYYwAiYGEbwXjgYPZvFiQ6UbciAyWPPBsjW8y2aQM9Rz4oZD2ogqVHQr9tqgHQeEHcmmhqcD5YW7rNMtsWtvYfx",
  "key33": "4xgVsu5Qjh1r5SFxqzkcbqEMuCRfyUCK262psJDaEfAL2YhGb7qDEsJodbgzxYTpzPrimeSmyodc4C1nipfAzP73",
  "key34": "JnWP3LwGyUGEa69Y9HNtJhw8QNyQ2favJbyDngiBNsNE9cbLFjSbdkJoBfpfc3zNdwZkLufH3pJoLtedRshWDFD",
  "key35": "3bhB1Z5BSY31BZj5tDrLrQpmYZZ8CNC5uB3WtYMrU1K3s9iX9vFxXakgbEn5t8tCQZRkLF3hYoT2QegpDuyYCPwH",
  "key36": "66BgJkubDKgnzqfR9mZdG2oAeWry16PmQ7vY4bpdqyGpPQvgPD9pheFw4PV2rdsxaPQNH453sK5wi2NUGgCeHV48",
  "key37": "3mrREpFTVV3NMYkGEwpHuV15T5zSH7Ectxi64AbJxsWma6F2v5rXWrpVSkyXK6VoyjHXeb1wMstvFZBi2PJzh8KP",
  "key38": "3Zeh8XXQMppnwLj2uF11yD1NbBCfkZdy2VJdCV5z1n5nj7P7jTcYXxZKRQGtKbbYaveFaM7XrzeppuQZNno6bpXB",
  "key39": "2ssVTcXN29Hg5HSrMSkdz6G4JD2HqEa6BovatQkTAbZWn8QV24zgoeZkBTQgbsg3c1LtudMCSrGkMCXB35Uuns84",
  "key40": "SAE2VBz3o2Dzvcr4nuKHDgMu8Cw53gPEYTVAZcXsqfxKoswXxA795ovU2cnszuvmVwfjnyu14D21yJ9fYjkwKEm",
  "key41": "22isFesR83VW5vgsYN8p1UxkYJ36aBRR7xRe6bSbGZwRoPdyhUkqLnyT2Dk9B6DpitjyMNDsRzaQfPF4ADqRGNqY",
  "key42": "5eZbGPRbzczPS4bwuKbAgu42xU1J6gbR6W7nsUKmNoaox9r3WoS8KTkutSYFYrdJoByPf5yVjpXgb8ui5FL3Yog9",
  "key43": "2LUsTZXovdtWoxo2RDoYdV9qqyreSbGPxCreddER8J7XZk7AEE8fBEMscxM4xGWmfjNGzbSe8zxPHsRbMTAqEhx5",
  "key44": "5WRhsejAt689a37bTbQkAUUnAFZs9mYQF3cnejxvD8wRPcUfthEvshe5J5CMvsxTmTwevLF64abRnrUNJ8HHgnag",
  "key45": "4ftQFrv8jKuJK72STnvARqLDVKY5qGzg8LxFDcQz313QatXCNgwzH7LJtbqd4o4fky69cbrjURGYpYzYMyoAuger",
  "key46": "3CB4f8ew5JEvtav1i48WYkYHbxRnt7Ww22Y8GMqhi3ZUXVihZX4Tf7d3DfWPZLtEGQNLFRF8pMt8bXPSjLyAWXyt",
  "key47": "4xF1jjb3DanrR6QHbajogsD3fF94cz2rduBQcYNivvCME4asYE8M8kC6SEmr8Pf7XjgJoarvov7uUQ68jr6LZqQa"
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
