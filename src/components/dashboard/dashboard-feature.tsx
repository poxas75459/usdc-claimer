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
    "2PwwHW4JvhkGZkv43ErEpFoSdBJSfBqqe4JKVfNuDTConc8UiciHxUP6ewQzJERFp4A7UQijjoJXosQbEQwoncLz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4xYwzMp3LJUFWFNFtd6MnW4TSe956C3S6LD3S4bYo8qVVXA69kNDRujfYdzqkaz3Lq6jyUBwYFZ8U3tm6grbitb2",
  "key1": "3BCWy5Kg3YouRJVNSUY8CCTSiKGznehZcSk8tbhj21Dja6qA19gG3hDpsSJm9a2CHvdvV5cTkXdw9MQ9Ybsg2ez4",
  "key2": "5WoUyMxUgbwtBHp7g2copChzdCDhcrKCNmtP8FGL7wB6JuHdtqBfbAa9M4wWTa7Ur4hVf7xGDhVUCaDv5X6aSdXq",
  "key3": "358dwQ7P7wdaVUU8YeiLYSwLvEjgbekV8vzQVf3zVJLhYKW2XaAWgwZm1sVrjnj9HCRrDBfmzua3pqgh6SgbrteV",
  "key4": "KcXMfgaezDmbZKq8GLBnVv1Rh9DxtJRjW52PbDNkxAWMKAMAhYjpqPZpSzgSMeSguV9nGrsLGq7SqUtuFr94XGA",
  "key5": "j6BtsNqZuCBiuSmYLu93LCZkdF86rJpmkiudSHWEWGHgBJsJY3pwcX4Qk6NnYQzFzcD4ZyStiiDpswf7jR4S4Ra",
  "key6": "QpJdpxjKZFDbd9qC8ccTehmLLskNbTJ3k7CCxLrpyHsnzS92wM91zZuBU8eqnCjkEdQpqWgRJVTucJMyryxyTEd",
  "key7": "2uz2Kw9am8Xk5oKWsVEyLHC5bJ4rD2KEPNHQrnJ6dy9kcMEAH1GDRyMe3egP7Tqk4TJZx88XVtifXu6YfT5er9NG",
  "key8": "3B6u42x6Ybgn7ZzC7kpD63rFMWusH2kpGToHso9ppZWj4HpLAakvucF6kVEXrB2CSXxBQAfRgTVNmSebDC6cno5r",
  "key9": "5Nivin49sBaw4BrsPGTNiS1jK3duxQXXNq42J6hR7mL84coWiqVsv13LjGUTvSkBwKvXoxhsjuLpto73QKVgy4vY",
  "key10": "3wY6oMwrxHUpfu5pqAFd7MJT1Z2j2A9hB5ThrV3YZsfLTXsaNGufpyKv4ytPsLAv3L5wPrgTVKc7FRFdE3r7Smzo",
  "key11": "2yKGaysr1UujQtFLoAYPEAcHBLATmgqvM5AXM15LDPgYL1tpr6ajSCrXZ1eHyrDyM2vcoZUrBZvGaodJMdcLViv3",
  "key12": "2iYh7WDvsrXt7hD63ywcVnQ1xS84C4NnsEiPwLrNXwFMfAvjBH2N1FB5aSyYVjHzhtEQEanGTAryUvbVPRtrhz23",
  "key13": "214SESqfrieXN7RbSPEEdapvvp1mL5mapLJGa6bJ7VridhrhNbUqE7ffCzvBZkLWZQq2C3cw7BE4ffMoEwcwhhky",
  "key14": "454AxpbPC66qrYRXunW5RC9hMyznAXJUzhQLg9ipu4ibPvkJtq8mt8K2HmxPuXfbHJ9PJougEWBDfoxcLVDqDje8",
  "key15": "2XHdf9WpW3EuUrmF4bnEU72LKF5QgSffgAjApo8Eba1jjZMG7LtFYPcniGcKh5Dbphj77HgVTdTW52JBsqudNanj",
  "key16": "58f39tFH41EhfYKtPDuTd9UBXWDPPnmLWPvjPhhRHLcb5c7LSyat7sFUVL2Ja4S3SHWj6WbCoHdh4MswJEptqrbW",
  "key17": "3GBJW5zErehbGtNMzU7sBzwydvLTS8Tbw4hZgMgpAFaP7cbBLa5UjqqnviR6LYVgRVmPgzZeg5cEjbBhT3zoNst2",
  "key18": "mas661HnxJzTLoLnRhqxBZyqR6xnG9r9d7Wktj8dQAND29UhBRqEK4HR4488p7hzRCaHgU8CNQ2PuuaK5VoRw1a",
  "key19": "4jZKsYUye3iJQter4MY1BmiZ2rptV2dVKTmZ3QMRdBSRRwJzM4A3N87ca8MKhzmUaDySo6cuHk7mAZD47fCHAj4G",
  "key20": "5eKU8Pd8G4FuZJ7DUSEZQsdUP1pTPCmkDm5Ke2SVwqFW2QmaGUbkSPADVH412UeRmqTKX2yyCCsuvAndYNdZ8LKN",
  "key21": "5bRDHCgn4AWaamiSt5jBYVrMskfAEb7WS5VuNnGYTKukBn8GM75icrvAWHT3vq4avAuTDjaLzkCvvkFDXyZCWYQL",
  "key22": "8EaNk7peCw6uTmwRaBq8f7zR3hsptiUHSgdqexy7iy9sWus5pdCBYVBWkK2EA1j8grPZAPmweD5LoCcxceCR5Kw",
  "key23": "Sq2X4vr9ChDuRfZEaXmnu6nSmT3ZxWFng2g1TsKN39b1dRUEkVKGqDogwn9B5RfAvFAw5TtZ9PMXkknwjS8SFgx",
  "key24": "5J3hhXywxAkK5Y2KqMvYKWserLRvC9ped9daNYxvhS3xPm1r9MPPAfFFBybjuRtWc8MiLvo4r6ba9o2wJimG3jSk",
  "key25": "cP1ba9BcFLGDyUWvdVngFuDsyRdA5RWYYUEYdFcUFprxA1xd7fThVocsLz6FAz5TFSY16ZER6AD5xbNRLhDaAY3",
  "key26": "31demkwmGxqry8pX1KHp69ppMLbM8ksiPjjd5pgcZ9sRPzH795W8eA7irScEriZ7f3D3518szjka9mcyCbWbWXdf",
  "key27": "z53ofLZxoESbgEBCxBh36cExcraJiwLoMDXta8BRhKDHT7hvaWAVJFgi6GzFK2YZsV7GLDhYgiN3q9MwiaKsfxu",
  "key28": "55Yt6hSkLuaPiGgv1x9K2phTb5NMyxmAPutPZaMgLJ45tvPPWiqyVWKku7hzDgq1A3N55pkZ94gXqZo4oY7vxJ1x",
  "key29": "5pn5KMYYXksL3eZhRvCduZRPMSnmDUd3XpkK2MH6NkDM2JPaJ9jiH3yznAVVSnkGc35N6PPu9kseCPXmXdaG3JrE",
  "key30": "2nR4Eoeh4jVyWRtgFGadKsyMQEknc7EcZMtss1CbEjypfmZ4BAp4m4F5YobESMpYYW8nTFNHdVEG5R47VVWnttDd",
  "key31": "2Ej231SV8wmpoMj9fNHNxnqfqU7uy45juC6ZjXLdHm8nzbns6VKxSw47SZKBmA6Y6EhUZU3vnhFxSBbWs28B5WcE",
  "key32": "33McRWKgQ829oivW8aJomkqZPiJa4ChBgHAnvFsLnAUdqpxpehB3rtrey6kHkYzXqXvxguydi3K64v5zBCiYMAoy",
  "key33": "3W6Ms2AmbWitkJwEsBdJvg3MT6VSnxLXtS6YcaB4bfazWwkxj9mMg9ejUnwkW9yL5PUiZSAozkB23qz5j9Dr7Q9T",
  "key34": "2qVmLeokoRJapv9urqVXSjD7aAXio7n4PDQbQvJFFPwegu7D2yxviYJv1QoTEXqoRkDjf2MNnGsCoPhfLH7tX24Y",
  "key35": "2i1uJ2rgCWrwAH37fWMSRs6eLfWXAcQSaVrFSGw1pLFJMVUKEv43zrdDpJacF2DeYnWVuqb58sU6ndtkcqkFtr3p",
  "key36": "2RT9qh78FqVrV4YKT8hEgSJ7DtmHrsww9FrkUYjLrBZTSshogv4xq5fYQnQ8RpNyipHWddKACuPX43mhQh7FMeQ7",
  "key37": "4u5PjWBbUCJLu33hacFkDNZe15xM4e8W4E4ejGgpy1BtcUnL6ipSSwQog6sV84Qo2LFGrazCYUCYZDmrW3eWcfWj",
  "key38": "53TKuVHRuvbiv6EMXe5MeGJZ8NCRwCtGk178AbXGYuJQzE14zLRVkGU2F7QRsqH1jHx8PdoLiioGmU4pFWF18m2s",
  "key39": "2usNb5ScUJK4W8WhSzf8hvpYpQfdhJbCh56zLuGRP9TsHvJkGeqjUpXVN9qevF6SfJqN5N5GGepC5p9sr9xnjTUs",
  "key40": "6KJej1Fh3jSzpXbgybVyp49YB4EKJGrGZT8KSM3S9Cw55B5wuqBpdNdndDFTRNY5H4rFZsiKwwDW1jRWWCY2cq1"
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
