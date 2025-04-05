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
    "2gkRmB14aZrAoo919KaUGmzLJ9arjSWFS53mwWLjdGUteiJCskUhPfEhBgjCXcoqUvNXzJujuVmBzkh9PNoLNYRt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2DDMVUv2zisRektqPK3y5CQsyKaUSDjCj93dKfLEFK6ksqZy6ymXFeLECyPJDnhvGV37TtzTsc5o1w7NBrQKEbU",
  "key1": "wmMMJefH7Ha5M7eFCE56Jsp3sU5fKkyuitGquzcQZ1mLNnqqLbCRdhLV99G11mdapGSvBPTyH4tvTMUb1tcnAjy",
  "key2": "4nnv6benf3aFUw9XhqE38R7k4sB6Cr5a7zQBjZLwtFqimhdZNeQAfucwo5GZNxRh1XpTREuAX4V9HixU2Uj9wiiM",
  "key3": "Cmo8ePibqX1ZdWhKauQkZomU4yTBzHaMPJAZtpsRAE4cuxXSEMSAU17siqrZadEdsCWn9pcq13sMwwxBaBfRAGD",
  "key4": "2Akc1qL9qZs7uYvdQXuLMAsnpa9GF3MxrJjydWoo1UeXH6v8b5SW7SU4zJGRdU5Ya2k6A1gWgTd7ufxHzBzXNsN3",
  "key5": "5LNNi9Lz2CUQPTHuntDBvqkqDV1hq6irXfyTsrafwxXHctjnmAJHrBdU42Nyuuo3Lt5rv1wmvommb9Q35oPMfqAL",
  "key6": "4VL4886cC6632HgxrHSvQys3FzNQHnq4RW2F2mPqnpMB3hh5C39hHJ42MF4LeeqRpdJsyiv1z6r7qVA9qPhT5Poq",
  "key7": "5MfiNDcvwGoa9UnJr12G7vYAhaBacURu7cixGR6b52oC6nCouvNAdt76MiBy12BZRQWfPT25G52jau7Vy8CzkhW",
  "key8": "5dV8Cm38EH4abhjxHNgrRqGuiz2TKa8bFdZxWMa5qKZEPpUzhf54eBgH3cizqZrzNc49fXpmzq3mcWAnvKEXnpMM",
  "key9": "iX7uJAasxVEeqDSNasfryvRh71uvg1g7L3VJtSYZrMx5Y2nyAH2qX5RzspzqEn2Lp3nuWMZpim1GF8oqUbzLznU",
  "key10": "5GN1Dz7eaZdW2WkRBs7FhGb3AJdhdRkkzAv3Ds1sXC7oq6EaipKECStcbfxhHrcGykAkax7ddwK7nbkKnSE3iFmH",
  "key11": "3BGbmpnsCxUPXEN4wxcMNaYZNsMbnZhJzfYq5e2FzZnPj24ecVWhhSxKhATwNfXVeW94aa8LXapEbJAdnXcT8wnQ",
  "key12": "4Wra3YCXugY4FyHCh7vcNW7GyWLbX6gFwir2ePziNgeVtsK6ntRiE9XCk74NSr8MnNEZi8DSApeT19y8Qq3ByNZY",
  "key13": "4RRqTWi5rFSRqiKyY7hKJWQkHtqeUvMQYywrAwotn8aijCkh35ghFgXqpEd1gvRKw2xrax6M6CRwyjCoBx927rdN",
  "key14": "4y2JH9MP3dkJimPGMfs1CTuRjzG4dWe3viCneDtCrKB2YRzfbDsFGHAaHF15sYgRDC4KBd2EhqaoHALnbBCsbHxC",
  "key15": "57ytUowwN5GLeJVvtMosDCb6zP4DtgT571DBFMeEfpy181KVVQ79Gefxhx1F7JEbtgzWmm6cotFR4J42LQMai7jQ",
  "key16": "GDsRyPQEoUS8f4EHKbGuwjcP1tjUmW3NKuiHSmzrUDwBpBoYuAvZb9KQjVzKnyUM8Q4QCyALY5YT6ZPJ5fVzqN2",
  "key17": "3sf7wzxM1ic5K2JQsMq2yxqxrrk6539FDnJVUX6raqdYYhmmPUdE74ZjjNJ5TN3NwZNP7gEeUGxamnfPXekGcsqa",
  "key18": "4h4Uj2Nitw6sjEynavwN3ZUkEZabykW2541UkrHfeiZuoN1YHjVBE7sdoGUc5TXSXo3SUcXD8xwvZmaWyfTQLUKQ",
  "key19": "3N8Yf5TxvzbY1CmqUKVcjCG7HGR2zHV522xJpJhiSiSZaUFTY5wNHert86qXF5ECYJbRf7NyxVBsug9PxFpZjnRR",
  "key20": "4XnW36g1GPbs3KViDmMzUVFL82weFS9M4ijBfpyfT8rdubFAKiVyqUKiXSJ3cnrKsEoS8of4zS6MsqSnSW8h2yzi",
  "key21": "LGkdrH737CX7BHKJLS6SLz1dPZFYE6LUWRYWS4ZTo4BXbA9Xwg1aLLu3KU5Uuu4i73srgmAR8wvYXvFEFua41dr",
  "key22": "5guq6BTQfNaNZfDwvwwu9usTeWVAdjAPckYTSZXemGBBhKjeme5pYQNeS3d56DL4pPTXuHw3PaNrMzTaRvpEq2Mm",
  "key23": "qis5RPpUND9RdWoKB74LccT1ABpTXtQwKNj4kijatAQ6QrCsM9cmVPrYSfCc8AL44ikGKgq5ffxR2uSabS9qM8d",
  "key24": "54jiUwmdigSP9jTRrBqh7j4SuqcqrAF5pKNx15rMpWBKb5nV7EpGT44tnRseNiLh6bBpdBck7EPz2utyGE1GD383",
  "key25": "4A2AvhZVJTHDKptT1gnTn1kxuW1iFBiPXUT4sjtajv3J2vomgQ8z2AWT9oS9Ae9TYnxx5QVmT4KQ4SFZsknDiaWs",
  "key26": "4Tq2vW1pWGEHNwo4VTf9Pnq8d5cEnsTJK2WSkM9cYML27sEfSDZ8ak79ZUrDjDJRsXffuQeUJtvx3MP9BvxYZKEy",
  "key27": "1B1LcH2xQC5XL7WuTbkF1AzhnsJPobx9C8ze6w6ZXDxyih6TEpvYjkY4ucFkWFzmUY9gGNWpvy6ernKbL8njqEZ",
  "key28": "5D98TtZZX7jJXXPt1MniFZwyvPpK7snMbmvrrxu8MCW4zDtzQEGHopkdbPAfajADu2cNmUbEiuVuA4ajBAT8ghJe",
  "key29": "3kvWPJqCPwMZxmSHqyk4LVLL2vfrSTkwLYm6qegC4gCURVV7tob7g3bEhkPeHbsxEnBABhC8GE41qmbi3FAqGAuC",
  "key30": "2GAFJkkMgWB3udT5BdXBWt3qYQZVLm1wnVrGBs48YhQeL4AQAZwDzGuWnAeW5jwotK6zQEst9FWD7pZu7Z3MbHJ8",
  "key31": "4egSNhNnQ8tfUTBKrSUNeu635QHdXZncJpGudVVefNkaPhAiZJqcSgiA4U467gKu38iZkurNH3kEWsmNQUHhKCuH",
  "key32": "55gjhhe8p5W5oZMbyVFyRXNGXAz77U6MsJm8bhLW2j2ewxzvo1NRbwTXkMJw6AgMkEMZXvCxp28wKLparVtjt9bi",
  "key33": "4WvRJEmMizeHADGs8J16ZLAU3LmXHz28vxCsRcZKNGBgiRP12BuS9NDV82cdbXyvKM2yFHPtZzuQGZJGiehacnXZ",
  "key34": "aUumwZaFvzXF2Sr9QkCoq1GCs2r4K6eBG7eFYCCMf4Hp2GPmniDmX8Jfod4gQzTmz5xnXr7tXbYLGJQMqGU9FVs",
  "key35": "23CcftkXE4ftyuCzT7upqAmPYq4fzuVNaaNkEYGrbhRtv7byRGXrBbKL8uqHYqXotxJ8D7aZaK8wL2hfVQJyWCZU",
  "key36": "3SeVxoEsSB3mxzFT3BfH2qS2udszjHm6VcdmBpLJRz8BLWufSNLQW9CTSHzuGyg4cJ5Dep5s17t6VofoTcBfJjPG",
  "key37": "3Zo1G69dZUGm4pYZdWGPTt45spSnWxV1X5kD9u2cJqLQ3Wy7AjS63g6ywZsQSBuH3DsVrRxtdvVnhMLgEGaUGRsw",
  "key38": "3QPhRrDFVEFtoiZEethsScM1GtUmeGqsvsQALcf2FV6z92cGURXgdQzYuhoSTgp42rMzqm92U7TrSoQLq8G4kBPK",
  "key39": "3rM1VZMktAgbRMw9M6DR7T85GwnL9f7uW5nCdwnyW9YfSZga3QRsYXzUWqQKUyjFcNCjSkccnHaSNp7c2r5LAx5D",
  "key40": "33MqxomHtEpm3qCL1J8rHjj96mDXk4uSmZFdBrmrtsRFXXLvCQEh4R5wQMP9NjCmea5GF8MJVZqbjSwtvjFfaqJZ",
  "key41": "6NJTssXbNQ9XfKS1GyB6G2RzqTkGjgEfAL84hpAo5z6RUdVyV2Ep37jtEHGj3FrTgxM7V2A8RmbWrcbpEzFEkV3",
  "key42": "5bmNGoyBTJYZu9pdBADeHkuzk3gitufXAP5w9aKUh1XL7T5CYyFGbw42J4eR8hDtYtGsrZJN8CR7SkhtvzuGqnji",
  "key43": "5FDnAwJRWh3ecyRG59J9uEfktpntwKFaKnYstdzBBLF2M2UWCJuV5KEg3p18VhASkE3KHJtUaDGyWhMn4HVD9CxG",
  "key44": "2dxqV7reotqQHAYv4Rr4icKchhvMQCWojUGfuSLVBuu8hrnrdSVTXFSvDV22C2rqKBvDXnkF6s7GryJn9MEAtwVt",
  "key45": "5wtuWjKRgNRHzcM8z2SJmYWYmWDcfictNGxeWNYuKkDeEe9W8ZHzmNsKRrBH6jVjzL4suM1qEPKqG1BL8p6MyB1L",
  "key46": "5aYa7RCUsx21aYsEEjmzB3QyduRTfNxChxkyEgQNM3dTBWcUEgNVRD9RG1VHe5zihr4MVBh5vZH2B8yPUr6Q4Fz6",
  "key47": "3mcvj3YCesQQ44Zuz5PFxz2LXPfYXwfRxdC2j9G2iMe3Q1ZRyq6cHRUQRXfaJBJ6dtarcGYJeJiZEv2edsUHsySZ",
  "key48": "FNb8RkD2GE5pZVkWgXpBzPAWJGzB48ajJV3L8uvxVijmkmLoLmnDPUzxNNhUoi9eeDrdRBnUanjGohMrsimjLXZ"
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
