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
    "2C8dSFZ5N25QiSvH1DxFJg82CNah85zp2383aCPitHiu9DzAqpbWGUHiyMi8tsQNUKpAk317BsQjhYsonhrzonc4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "51pTihEQD41a3LFvZNtnvR7C1jz88inWjq9MdFzLg94q93rMYxCbgiKx1i3XRoXr22XuX3ziujepW9yt4sNBxWP3",
  "key1": "5WdeizA9M2paQ45ewaW3WvVaHrwrhKNRt5Rw3evuaMcrUsZ6k4SF12jYKo1T4kY5eLHNmuZaukAeMnG3KYiYqqxk",
  "key2": "3SfVBik9L4axWqm5spkstGjoX4LKhjq1RfR1bRYZTUPGRdBdGtdMj7JnX7eWi6RCowemSzjEscQ6NLfCgV8EoX3m",
  "key3": "2MNf1TWwY2ny4u1AieNH8Yyhj1A1EPbCteZGeu2JuXg9SABXSZaNMeokLfapubHHiY9xUof5xqXNpdaUp8AEsKHi",
  "key4": "2TUr2MkduY1c4qF5VNgssQYRskGn877JghBUTnXHExskpkfpAidWcf7UPdCKvUA84Qnpe9CVwB8sVm8UARmyKKEt",
  "key5": "3L2M1qDfQbLPh7xQ3p5wtM5zxe9ttStLEbxs55aUAKzozrr1B949i9as6x1snW6UbT9ik524vzcwLQReBz3b6W8b",
  "key6": "2dhKuyPJxNr6JEsMLf4bXH1z6GB4Lou9zz9Vr5YBX1aSuQfA8HzPJJnyJJDpvaFZyoCrJMM24JQi8p2sGf13pfWe",
  "key7": "pCe9KgUQXirkcBieRQXk1LiLihJaSzVXC3m3vLMzAi4RVrscRzAyxHUSLhRudyxia3NWW1jjsfaVC7yb9aWnH26",
  "key8": "673kS59qMYE7gQn2VSkunccSCaLZcrYy7w1q2PyJ5WJYrVyHB7ku1w1m5p1fbswrMx7TjAj9cHVPduTt1uh6BM93",
  "key9": "aWtJoDcsZPhuQBzkeAqv1MdivUY5ympQDjpy2geJFW5NEMn3pfuwMKPJroBQvstXKAeYeLt8zSxgJ76xDGLZdkX",
  "key10": "3x4sQtun3iiq3yQiymBnydFRnNNkdAdzkXuTkbo8uDEWx52jqwfDc9sbPcdRYhtqkjBYcUmt9KoyrWyPW5wAsumN",
  "key11": "QSeQZBYuujn6vQGhxTn742Jdgs7aKMmKGskLhfy1QjNE5kXgiHWAma8F2hpYnH4ZfpEzSyYauurLqSrzQqvWXg1",
  "key12": "EEt5yzTWn3QRneY3yk32XB2QhfE7VhcRgHpwyCkvLtyi4Ar8H26eFNKQVLHwGxAhccheH4QBenU1EEA5K1R691x",
  "key13": "7g7zpGezb5dYMUgnyViaekeUpmL6mmau9NPiopj8kmijyTaYfsixfN4f6qUSyinkgjumdi6FCTP3q4dR7P11ZdJ",
  "key14": "3oRNyUvK6JjQAqjSV8rkYhfBTPwCDJTJEf1w2gKB8GmoYit4B69oMqCj6y8q61hKSkaPy2xUMUDaduTchZXy9wmJ",
  "key15": "3dDfXDs31LFQNifdeFb8BEA3VhjwK69yqeVRvkQfKhmutv1eEjFeKZWXEqjJ11xWZVPGTHAitaw7KxSoP8wfiDfw",
  "key16": "2Yq7kYunq1eMdwEi2saZf2vp66yz5eiV2UR3q2obkrJvbC455YurwAZ2pWUmd8Hpvfoow4gNpTFUcgyXYW38vrSJ",
  "key17": "5u3DAtYjubgxgiWyQuz2tnP92tedZTvgnXWHuxKGdPjpcJAN7xuv4RuWcg7G6DUyC9PA2JGNHugjJH6G8NB8kAwD",
  "key18": "3VcrFqCgxNPxkhKik4zAmw4wiCnjNS5NjgALrF8mwtahXKcAnbREndXxpQB66Y86K6guLxRtMh4Divsf5erwNnda",
  "key19": "62qVcSzqSLmAJcQ4dR6C8hoZSCjd5561gC7hhz9RtxLeoHsoanejFEmPMHVo3wfw4gE3NfyKa1ob7Z3MLuoSWst5",
  "key20": "49PcENJNT8xJD4MH8pHCWcq3P3DyJzwnXLxqewsEHsCSpK65UtECw4q9tusdrATKszBcc58FDYi7AcuRxrrxWPQT",
  "key21": "65SJSKuGfyDuqahhUvcJP9RogJN9w47Jatcs2oVwBWqjNWhrcnpvwbqanNPuL5mpK5ySVfk4GadYStrXD4pF9zMu",
  "key22": "2Mncu1w2DJineLtAB8U15h7iCQQLMQ8ineEJ7Nkjxf4jnohUtVmwoUMSB1ZsoqeonhGM47AmYiyvdU522hZyerQS",
  "key23": "2Ur53eLqPU1JsTpyjCpSxnpw3oSUUhd9xxMwww6dvqztAgnrQbekohaTMLzrqW3w98DCpEqe7zySH1gPxiW31vL5",
  "key24": "5KUKDrRgvDrjAkWY3e2GymtYFeqGsv5TLf9hNjmvk4556cuPdiZhtSZeBWLE4h2qYR4zaLswPk6vtrujeKwvM27Y",
  "key25": "36Pi7XR4s8K2vJF47TmTnH74UbgdiHVfF2saAXtRsHvi4MbMoJa4cAM8qi3oWSiXhnJLiLXftVYQydHD1Zw52UNu",
  "key26": "3jp5mWPsTAZUxtLgzwJCacQSUPDGPvsSUPufQzgxwMPhWvDi574zXqViCLhdqhFLfjsq6vVgbtfBZGcfmTssmfxW",
  "key27": "DCoc3iZwNYPpaHkrXd8GoLPY11cZM2EXoN7xjphrH5RQxbkf42U2VuWc3ARqBbAc2hC4tBSR8Bwpi4K5DJzbVtg",
  "key28": "5RX4rRYwavgRuV17HS3sTboCYHoyAiFF1pTrrPxqo6SrhoL4zWTU6YRTzNr23X47byXuW8bmxtingfmD8ppw5M3V",
  "key29": "2aAyodcWmVhGr2z7a8drJhED6Dsb7oGkGSjSqNMzQjk5f6ZksQmgNyDizc4WmdqoLskGnxBoUybAz19EwjSKahGt",
  "key30": "3R4y4T6wFNvtJHSCMbW1TnLYgQefC12U8G36qhogjo3CARsMoTjMbGBkWxbhf6sqLyz5gkPNDGEbtiQEc3VKkxiu",
  "key31": "36ZA4zdUoseyBtPZNtsTR8rDSTwKZg1hQN8HSLXw35M3Suz7gkHnaiFfiLpAp912EjKRKgkuAUAfPu7PhnqLfS9F",
  "key32": "61fwf5GyodQqTYdv16cpHswwqMkmbfdGUptq9JJCA5N2ED2wdzcwavzMNAXVS8GbtUvSqQ8kGoWktyyQQYk5CeUm",
  "key33": "3Vp4dfDSADBz8MaBKg4qzaMjCpByNyyP63AmVc9MAN9Y3kfc4RVNvyqjkkYQSHwiXiMTyBhctxKiFUHZvaRYwBBy",
  "key34": "5T4xA98n9mKGwWu5MoYWyH7E4bhuvgjfQpjvrj1zASoWxKdvDZCeXZzjxjFfqKXwtnMpcnQtkDGf6sjrL8SAkrYM",
  "key35": "2LCJSMV6bxjYeh5Q1LgPEdxutyzp57Gd5CdJ6ZMD4WmQNegCjEudTgsbS8PFB41JC1WQyiAmAwfDYGqrfQLm7rAi",
  "key36": "3yZWEkukVAu5WFxDMNwCDXRKamGfczAdNGq48jUJ4ZjQ4guBbibgLmXET8vfawdVu11gkmYCMxPHioQ6V7rKj8FH",
  "key37": "5hjkwnZyR2RXbFkvDPVkWQQ5AJYcvVM1VdUdt3hG4Ezk1nizrL1Au3dPSZcU37pgNSRrdKrHFk1cGgayVppAr7QG",
  "key38": "EskyjrfPuHiFMUfg5Xnuo7qf2aSCbAZnFr33hdKT7XQ5EbLAFyfiLZKYAkU6xsEemtPs44VpD2tmCt1gwmZoXaE",
  "key39": "4Gm6keKQMdR569geGgGZemUFVdUDjNtqzX6g471VgRyWGvZELQK54hd65HUQCmXFeEfZpGHRX4UC228zGSF9q8QB",
  "key40": "49EzbvPumxJz35Kgp3n7GUoVjCMGkrWyu3faFEK3BrnTxpjwzrpCHgS4m3sXpE9ELEQ8rymhnCorjofowfLDqxo1",
  "key41": "5PUbZUBuQzCWn8ocpzWSEJHWvQDF417Qqj7nNXQNHpaqHJpM9QNfouRfmvxRoxWbMABTPrk5scqrNjRUVqXY1hj6",
  "key42": "5L7n1NxTkgg8QQuadiaW4ZuneNro453P2JdQFuazJPtUj6abaj8wSMQGdtDEmemyTMBNQTrPn2u7Fmz7gMy3TTHX",
  "key43": "3TzMDqPuTRULRoth9ef3LCkGJtPQgmUUyutoPhHKsvRwAr9we67un7iC5btJ8VDwX2TEPyUjfnttDQQJQnLgzyGF",
  "key44": "4Ta8auwdnYRhDpd8N2vJkdejXQc85hPXKze4J39SZbn1Ezvn8jjEe1buu5zftKYzMAwRmxpVGNfL5s2HPtA94Dgj"
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
