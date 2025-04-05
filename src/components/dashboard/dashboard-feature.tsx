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
    "5t4oL8NBW5WWmnxKtFNdDR87wHDXE8rtMfgEgXv36gGFYe2ErDDLBmcRLVpojKhYeYwTxkSBULjZVG1G1sM59QYp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3t8HsRxw7NHtTSkqmMA4NKUhx2bM4nRY1saT2u1i6T4ajuVihs8rZJHyLkh8jXqNdBFvqhnQBpzcWSfPE4AasVo9",
  "key1": "2NqhaGmNELDzCrb2yw1HFr2jg1KvnHMuQuJt7iYFE5828DwEf35MCj4P2ynrhh1ZM25HYidsZo8C4esfHHSiaYjH",
  "key2": "29NE4ZBN1KFB6D7beyY5PicHZzkbunnk4MaPKqcqBcPzka3cwMT4zaSuMJMxcxMt1KYympJUvfPkeyuhJzSF7HbP",
  "key3": "DrAYNNeSBAn2xQaFKkKAQArsvmABr4Nx48G3ukyp3qdqviHDK1Nfwr6WptrmB8FPXcLDJR5SVcAftBtAa6t5unS",
  "key4": "3iGw6cnQsot3dJaGKDtx1SR4bSc4ef38pYgbnnNTRnbxVa45ZpudXftD2GMqDPnT4VqEQKW1DhudeJVbMqC4Ufj8",
  "key5": "vkyZcHJhtanzn1voRGhUZdhhh5WmQZ9xR8F4SJVVUsH7DXjH4ke2R24F61UPEjzPZVFS7hQYC65iGjxa8SDTWQN",
  "key6": "2usCDcaf5yjLM5ZN3rpp6Bemyu9hGJgibpYqXCsNnP1Q5wrp44YdyavBsHa4ww9oYJjo2mp78DkyZC6PiodttcjH",
  "key7": "3a3gq5gs4esX47623hKJG7sJfzDcoeGCHcuinsML5LWQgjr1L3ZN1rTx16Ui7Q7WctFj7gRKKmwmi6n8XicHVKrU",
  "key8": "5Kd7mpLsDTiFZzScTGcn23xJfUpQvnHCfDTQkr4cv3utPhHyo5q1wh38rDbeAKxHm46vgohqKzygBotTVy61rfHF",
  "key9": "3pwQcAKKY2sG37jdsqn95rmttZzMKi7VMzXEc8MpcvnPMLRNh7RiYNJjD4kmkFHsLSXouygoYFtrNF2MyAUnARxo",
  "key10": "2TuYQHQHrMLBvNYdiga6YG2WmbuyRX6UHeRntZ2NBzoY6MqQK6dG3f8gxLzD3jiTQ4Q9NbGAu46QrmPT64fmem9d",
  "key11": "3BXy1m8dper35LHp6fxvKqdfbMF3mqWXTRrNR77BPfdgeqXzPrp8kgAxdiXivcCe8AkmsN7bG8yD42823U6TrkkR",
  "key12": "42DGG1scmB325Bkre8QS4R2C5kEgSUr8Gqkvap5qRmuUgiazwDNCvu576Go1B2a9ct9AQxVyTRC2rr4pbM4YBeLd",
  "key13": "2zPaQsR7AKdAe2VDsiZZj4NhouUGGEj8ogop32JDhf8A4L7C63FhsR7Jca3RKq5FUMbRisQekaYUqZzDSLeDK7Tz",
  "key14": "HsXUExnnAvSBB7tJ7zTcq73ZPmhbwSPKQqU7kDDeBHmkqNsjTXYPEiZF9mrbWgpB6gQ6QjWqtPRRbw4p6Vsn2WP",
  "key15": "5LrrsRXCmkdhw3dpZXP62SYyypZWQitzWCeqVnbc975xrgdn5ULjnnk6UaLBJPcvTpK26F4zN2RP3QRiJ9sJS3Ac",
  "key16": "3ntdAAmsfngQA5LiFGfH66nJDrs3bSdGsDQ8vAn5TKPeigkErEoSaC59X2jbefYr86C5tdmb3E3kqqLSy6bSfbqF",
  "key17": "2WR6NkZeY35Z8MSWQ2BrJnMvsMmWTQHyythgzCQ94H3PGn29nJRtbD4oowzN82euPJ2Qe899fqYkVSJciCzpooDS",
  "key18": "FCKKbHUBn2q9C5cMujhQ5Ss8ezVbB8kht34yjVGbmy5UDUmkSQqC93XmaSRKqdPRMD9z4tnnFAcN5GTLTZ1qMGH",
  "key19": "2qtj2mcMHcoSFu3caWu1fRqv8wtjatmGnihuuLWcqdQLSNMUw2Zs68hz3o7fHab14vetE7uWnjRQNfRnCaMiFbaM",
  "key20": "zEFoPtqJ8C75GDjMPhUoA1Fju1hnwB9Nhbs4FWKNp3zgrkJPrSW6UFw6f6dN8DwRfM5A1qupV71en5ToEZxfG8u",
  "key21": "5d4Y8M41LKnJVUX4jpSEnkHG8kJNKib4wnsMt91F1Ru9u8bVTw3qG9zphztL5go9NasNojNuqMsa1NEymhMg8n9K",
  "key22": "V4wT3uMKmq9C4gY9NHG3HdAJrJjb1exCkSWUdvsaePxhVbPaa5jgNcVLb8bGUpZcwk5dFHLs9TXJLzGPSMx1qrN",
  "key23": "4QJRHQ76LXrcHo31Fub6r8fnXxEHzy1qRekQUkwg7Q9HGH6H4YSkVmRWa5ooTVD4xQP6LB1abJGsknwmr12ZxTRG",
  "key24": "55TktcjAHxzEVJy7sqoAsNWunt62MH1EjJHFNHN6S6ZuYisuSA4M88VXroXDnzeUih2A5GSxx1FmuxGWeKNT6bJ1",
  "key25": "3JrWrvhWjydmyYTCAee3nhyGWAGDKGUXLVYxTnnnJRT48UcjzQfCaxPuvpDsRoosc34twb8EFVZioUWPBKgU6gXs",
  "key26": "5vBrmJniSZ67GemMm9YYV1Lpb43m9KxyVCGKzP87Nzw7pQhxNQ27Y1RR85A9q3S85NpyqB13ReqBHeXuXhZCvDgm",
  "key27": "47qK9Wr2eJn7UhucDDy75trkw6gxkwUV13JZZqq6sx4u6WUD5KLEyAfGC62aAD2M8Bwsyd7cXbCGtxJYPyhzebHG",
  "key28": "3cEM2UtSxi7AYKtehUgnth5D54GV8XAbJ6Lo5zJSf6KWog5B8psfxnbqu2Vcvz6LE6SViEE7o5esLZnQsY54k42N",
  "key29": "5zf5g8xebRvBXTbr6hcZRXc6amWTSMXHrmGJdNmzUv3tfszCwZhny9SB9FGpx8QhsRzYfpZPNEHU3DLyRCtkJwp8",
  "key30": "5RHY7qnCWibgFbCyhN1AVJQNfpFadWfQGSJvopsHLGz6CgYMJttke4UgaxVognhutPi3rc4nrUbL5TJ18gsGpruN",
  "key31": "32aUQuNxbrr2GirqDxWGZ55o81ueRXdTDw3Bt7aC44rmRWaRZbtu86sf3p9tbZ2FtFSCeXLqdrHvete4RWBrU6Y4",
  "key32": "4VrwazKhRfXtjup6tq8YfD77cz3prg3Jm7YxA6gtTXm4VmPGvMTVjaZ9iHyzsSSiEtugyMErPkDYJQpQkSAvBkWV",
  "key33": "64p6JXhPU4hWoqFptt4giEjhnfEJENJk161DX16o92fx2RP2wymmg9b8BUeGtoZ17ZJ8Z7AVckzh3Q6Ng2ZBhRj7",
  "key34": "3oRaC9B11vNnzNpifrBFzqHg649PUHw21X8Hzdntt2SDUoi18GyM3wqmFBQ7Jvab8vLGW9ggicEh1g9ECmG8MLc",
  "key35": "4snR366d8Zbt5bBhW31LhW2TTxYv9eZj1qUPLicAgDAdcrZWh6dptypp8LhJnsnWFxdHSBdxrE7XLMNrm8La4ZWK",
  "key36": "5noBauy2zQfSaB92hu4qSLzHtDqBZvEX3wfQDj389GtbqDWL6V8bfJciX6ypL9K9AKc1bCNt8cEeEzFHhUPiHwxt",
  "key37": "1Xd647PSuVDounhiopmC8VZcfVhVYfa5gLi6TQ39V6Z4VY8xJVtDHH9yZABwgXztdDQEkLWYkzLX4EYCVG9kmDU",
  "key38": "4k3YSYGyBU369xiuQW785cCcVHYUUXGtBEQKQxW6QbFehvFFveETXFGiGe2EwuhdxD3MjYQFrSpfSZSbNbUzrfE7",
  "key39": "2JsULLDyDJXfwtG1m8iTjpEfT8jV66YHzjeN8Q5YUfK9xCJFMd3y22o6x6p1VQhRYZ2o2GFsa17MAa2RzckaRSaZ",
  "key40": "6jrbf5YK64DwNCjUgw8x6hXEdFWagaqeBtm65EV82McTGpWkNhUvAnDaWirMWfWPa3VAJRhkUAfivRSE3Gw5Svg",
  "key41": "ZhUojcMjnC5gda654UHcxcWmJ6pvfVWEKTa9D3532tLkw2iU6ZCuu5gBkUofg2578FLRyRRvckJoudQ6WhrdgNW",
  "key42": "pLj3CsNA6tSPh7BvM4k4tfkVAdzsei2ggT8RWGrJDBEtmHD2TNiL2pMrFYdEjjvqJH3rzzuSHbdDd3NdwnesFRg",
  "key43": "5fYeAknKLk9BksaDhnzM1jNiaPxbRaRRB3bfYynsvU7pNfaGkG12otg4hWxC7WWQY2vkH92LVenDj74yUU9cjkdm",
  "key44": "2KLb7XWDMF6wVdcRPWrkVx6ABHjRRtRiZWHepNPtkku2jfdVPt4rLhcwAkZbJXpnej4umGyekE7t4NnuPBBagaBZ",
  "key45": "3nvNFpDCcaAz8iwazMvn7uJXga4EeThihQt3AN9aJ6sH1Rui3DXRLZaS51pBe3Cdtw2GzgdCoojf33P7saG6Dfmi",
  "key46": "2F8iYKQQNkKrQGZf4Qg7SmAcF6LzN4tsFuktzc8ctRYnViwdBozxhXJ34Db3Bx6p1knWk6vJc7XqVSrHC8fbyhSr",
  "key47": "EbQiJapPYFQXK8EM881YRiuqxxzSdfcZ4Q8oPiZWYQ5hr4ZfUjyPsF7EbmvUKqaXEm535ssC2Tahq8zaRuHw1yk",
  "key48": "5aMNJjFT6Vd7UUrj8kAJCVsUDmhCGLydcpSEDJLGoR843NG24CjeESZQxJSijcxRkmftkhBprEE3h8aqQLNsp6Jw"
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
