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
    "3EpRUJ4xgrUuyR4SJAx7HjrpUrgj8RymeohXgn4BAPoo2mcWxVyzbccaHEbkxkG2uWF2nUz54GSuJJLJB48yju3s"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4R2v949WrsCrztV3GYjvneFaZaX4TsZhT6og1ZBMGK9cVVKFxhmdjHM9D4F3wvmXNqP98qwciigvEoLEsKRpzvKT",
  "key1": "2QxXbuanXgSEn39dKN9BqGSisgeTywknLsNZipmWEjLAkdRKLtChhqZGJLzkphGZkGWezCWVX13ZMujBn3MLVWLf",
  "key2": "4FXtEDtqsQJxBwpiH82iExyrBm99NYAgGHemHBfSAUTbW8hMpKwrY9BfTcgY497pkzYaqETDPYCRT61nn8Ztb7LH",
  "key3": "3PUDjsbNoohxpPAR9dgC7zTM1PsXNWQbYcmdgpESM8zzuXA7GHGRmtj1ajmkvrNVRkDtRgWMSmR5RfvBJ6nAV21c",
  "key4": "4aMpBVbzytbo8nmwDALvSPxAfRjasD8C6Svy4EF37UzcXSAP2FcGoBTEUT84fnkWh37EshkUen9UVTaSLiNWiUoh",
  "key5": "66GuTspCdhc342xgx4y7P4XJJi7qSky7PfJdmyGzF3figZB8oJ5c7KWHxp2rFuWWYD8gdz9v8gLKaW1fpbexjYg2",
  "key6": "ER43uqYCAF981syDefKUA8CxkAEhnqLna9t4gyQqsPYVKyamXcEwyagYSGuzSKEESkMSu9wMFNJKT8qutvnWFJw",
  "key7": "42FVaxKUrTtvYGE5WR9VYf1Xc93xe91PYYvjiqER7HjdJgTgj2F4DAEyHEKxpbsQJNbLs41YQT1JekAHFWqnnDx4",
  "key8": "49qtVzqeTFnRmxLGPPa6hsLhGne9D2dUt6atxzGAZdALLqo4rPNnrPYk3N2ETH5FnfJcgEpmk1gUrW3HeVfeYcQd",
  "key9": "36UHBCgsGUh6mw1WtzHqeA9NQUyCArv84HZx3QWVuNyKZp3VLSBrkq4xhKa1eHuM1TapVVHDhY1ArB67h21aXrFq",
  "key10": "2C8hMUmab62ybJczhKpSCi8krRaJZ4LPYT5cWvssLJSWjdBAuZPK3TtnNZXGWyzDhWdK4T6kUSVsn49gmfqLKcEm",
  "key11": "4ZRvga1SGnwA4Egu1GsyHDSHQgm4nR2sGeduExWQwp8cbBzfVtRYhtwFhi4VAEc2rcEw7z6M9rB8FbHffnoD3oDj",
  "key12": "5Hapwm379SqKGCyzJ2dhFrcoVxxvjvYo9VhQncbppwboiQPAKPvCyFWmGUFFMYPqNQD2vCPsrY3caM6xoooM5RUp",
  "key13": "2Ltg49gDzLXQ9PBgYBPheXRxpsbisSSPpcdPzpoUWP7wJbgL54sEndX4hy2YXwaQ49vvuqYAGZKECWBjR9JMQ5pC",
  "key14": "2PGfkTBznqCSj4q7BKhw1UW76zMUifZnDKQafGQeon7PqsmEFXuCePDXQ2rh87CmQ515ZH4gpUzSmB6sCrP9KAgG",
  "key15": "455bLJUVnKjiQYDvu1TNr7Ps4ehnKvXgQ6grCmvhx7aFWJsoE4mr4C2SQwUbFQsAkHPxMgsStGWWoioGGSavQDbE",
  "key16": "4AyhFCoKDjwhFaFJjTgXDeLyxvnemhtBCdw1y8U4xQTseivzjxQJktHQSrWrQdsonyBLkxhSzpVGFcjvjRdzt1ww",
  "key17": "51t6JLZP1xx5HfNep32s9GYPAxSMHwhwgQz71rur74izpMWu6aXp7CBKQLkB4q7miH3oMXkjpZMeTtAgw9Hy5EHg",
  "key18": "3HedzeFmzei9aQnXB3KkRDVx7bdemiFStiNHrJ2KwfLKGz12tP3sMGgc7vR8RA1qDQtHnhSSsh5ERuraczU2kFsf",
  "key19": "P3FJHX1JkDpaXLY3MGRuJPySjEfYGPUBVK2jJUr6qDSkHJGTffX1DJzU1Bvm77ygsWs7kW7isDAPuef3gEupD1J",
  "key20": "WUaRgt1LxC7d4aynunY2miaeTXigsD1w4u7jbghnRYymio54otMncp8XeHaPzKUBvkaCnFT8fkSfvs72rpk3czw",
  "key21": "4cgwihD3GTuNBMMU5h8WHsaNRXbMpRdTDeCDJgHzihdrzE46VQJfP4dAQ1eGkG7WY5R4hGJfDYpnwubWiZnRbs83",
  "key22": "EPy6iqhtCepPnYsYk2YQNP4cPdHBqmeq4db7vmnoV5q7A5pZvDsMpkvKvovxeqqKnkEcryXZCunQBAVixZ9bkZw",
  "key23": "JvvBnCvdtuSX8NB5Y2FKzbeyS44MtM1LH8mXLCJUaWjiy3SPxM4WmE5gdV1TUAghcLXk2o7AeTCzPDTnjLoDR4H",
  "key24": "3yWrneFLx2jSJK64SWCPQP2CEcf23gcEjpEZcHy6DMXfjfRFa68Ms9W3buVjTMJarabCGQZgtUgHfTdfeafhTNF3",
  "key25": "5maoshiYvipb92HpgYHKWGvudUY9KcVzzFe7uvCdmBdaSE7L9ytwd3nN75pvND92osbTdQ4CskDE6qEehqFmdh6c",
  "key26": "5K9rNVMJuewjL3TstE3Xsm4Hf3ocyCGNaLy5TdcnT7tX7U1SeytvbCysZKGRGmTRH92RVyURYRByRhhKyS4Fy97j",
  "key27": "4k55SyVYzFWmCpnnFTekDhk3sFXjftiBXuqeJcWs5GDw9Vm1f69JRXS56ZunM4UskpLWFiksbWCDaJFHJMo14YpM",
  "key28": "t5dC6EFDn5YB4i3MwY88kLLKfz3PepQUgwdbPW73TQw1cHFB58xxSFxA1oSFHM5V776E9ewNgH473dYNGdTjdNG",
  "key29": "4NSMDnZHhXtrJp4T8EFcwMy29vbsxAH8pm2BmixMckRpbkEVdVJ7MWA7Ba99FmbavRXhUSCGEo798qzFFqyxPk3w",
  "key30": "4rLvuwrfYb4Xg6gjumNt4t46dUCPTx5SQNqKN8CzAQjV5sGqW2z16MbKzuz9rzP4PMsNvkaXutU8XKLWoM5v1H72",
  "key31": "3mjnj65PQdQviv957VmsCn5Lee52rA8rjtBCp4W2NxeVGScsQaDKqgkXpJ1XMB1qEusxRWhWdPC2V3DgxutrLHet",
  "key32": "a6zqYHZ9WHaMkWL2dwEFLBJdsWge2EQUspvczXxL9osRBXoFvvpyaK2Z9i7oX23se4KVqLZDRku6rXBVdbBbDFY",
  "key33": "5A5Wu6RyVjkRVYrvLPtzfJf7VCY2qsfJxSZLykTcHUpxgzibRH4AwMyQCc35fM4sT4Rvx8V8xeYiSHmrSkhrH9nW",
  "key34": "4o44qdG6cusvEAE8VJn7bhdg8ehXEd6A4fbnY21jYwafCSCL7VFwxT99ZfQQ3PNwRYDCMdtHePMUR6D9tk1KqePD"
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
