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
    "4DTjmkS9XyVv3TZXmZWZHqaGmkcVncnNS6o2KqDeLncqw58ZQ5RxwoGME5WsYApBqFKSwXcX2XtTho8h26QNpa4K"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2pqn6krvL44bomCRV44qNYbtfxeQQBT3WMr2neYP9kkF6cEF4KGH7P7g3Rc2fciPEWd4bkveEDC46thWn3P3Q7ur",
  "key1": "3VnmsGpvU7znGKcbtjFoiNw4kehb6ezV4Hwb751BJcFoHSWESudozXng3LewWvDCrgaJofzkAx9SxjcApKN4cz6W",
  "key2": "3PMn5r9auPH8zWtGEyFBqsJvs3ePfieub6NhQWamn5aGAam2dmiHro4vEPB2ZYxjDjjdnzMT5dR9RAV5ufPNWUmg",
  "key3": "43BcEMyQv7sFHwuUhZyY9nHXGC1PboNusvKgk17HEhBGWXibJYusL4CjshxPfZnWsjWpTZEm3sdMB8gHvQNeDj6c",
  "key4": "2p8TLWu29bpexhyXJAzJR75wb55AKc2D3rgRoFPUPkD99hPbnUaaRD7y89C8NnokMads9fXDNbeaknNoAP2J4Pm3",
  "key5": "54JfdjSFypKDH28CND84d11NvenWM2VG4RrekkV8ZJvNudyZ81hikCPiCC2TXU9FwduxBokjoCzA6FPP5tygGVwQ",
  "key6": "3XMCEBLqkqPpux5Z1xmRsPE3PmSpP9c54kxiMg7dXUSx7uuK9p3uKLMXMQQrkn6keCUszneLyWF7CF51Md7UTde",
  "key7": "t2KXmizXUmzPvhcK67au2aNUYruL27GVHrCyEyUyBQ3aLgLhZLedkbLuX6M2Ddrp4ZCru9iFGrtjR1Miyo4xGyT",
  "key8": "87XcQGfLMCtRmyzZf81c51UWKeot36UjSU977RQTSJKdvCT4YFd1WikAozTU6Pzf62xRu8Pz3uQgPgE9g6uo9we",
  "key9": "21o8BNKruBoSh4av37uWmfWpzRKhpzESsR9DeuHNMM1GE1vv4JYNcqJqvhuBP7NKNaxA8F6t4RNijApM3RxNqNb4",
  "key10": "5TZhppjgphjSa7RcZJRFXmTHtoYVeni2VdZ7KFL9cBK6MM3hNjhbfRocXahnzWmo3fhwY98j4gDTPjsWK1z8pQop",
  "key11": "58fNbE3fQCHQTrNwUR8K9Q1YE2ashJJ2V6z4KWumejZGRnqScL4pSku6kcWSRwXHX6fVYBV93youG3TbwzRLu6zM",
  "key12": "3EiieKKjzXPDwLstuVRaUuVWwddzVnoHSoaPWaWBFG9G7P3mNoPdQ5xqWh2LM2xZwGmMXrsTtphG1eCfV2ohmMmh",
  "key13": "wajQ71CLTstUL6JjfjE3eU7CiH6ehqvkfnK6UkhJgwvc7KzUVriRA7r8xQUQZw55SVVZyotiiTcpM44gXmbP5Er",
  "key14": "kBC6vdF5uL2hnL3yYvQKvx25bY7qk1aUecs6EPd7qgk1Ww9TrsKU1mr1ydap87ApZJqzzebGrKCwGZAy8gYBai1",
  "key15": "4pEPp2Q7Y4bkQ9TvNA8wfPS6n6CRNrC4y9qvwhdtyZngp52svQHYVwYaC5krAq56913ySfKMudokSydvFihZnr6v",
  "key16": "2nxd7MXyqTHikFQX8xMu5tvVcX1xYhmoMZ9Vx6DFmadB9a57SDFQ3eGb612kbPrt3dRoDWRUxG9b7e1ZdeLFE5hv",
  "key17": "5ttQMZQerTUWm2GGzLba1uezmCGEhBX7f5H9wp2x7nAtGfV4WGEzUao96LyRzLJBVRjWpjKJpWURfEM8qC7itTz3",
  "key18": "4KNg3muZpMsowrR4GSVXRrtEaqEMjKUdCPHqb7BjB6afDrPJUkkHgVTHHu6WkW6oe7stna7AdWe7V4dTZ2qpLkMR",
  "key19": "5ENFsLsBoSmxxk25111jyPJ7jd295xNLkEujmPCztbJ7h7Xg73YHQ7A2KiqjpW2hc8srKSkT2RqtPnXDDxGjaS1j",
  "key20": "2DymttajGGdLM2kF7GktNBfmComyWGrty5suUoH9wkX5SHjr6r5Qg6TQvGjpWmmYSkrGAgH1x3CQT6Ht1MeSQSXg",
  "key21": "5MKGZ4FBnJmgbJuKtdeHkqBYCgfJ8uzCboLZZtMsPLEhA7ZJouMydhaR8ZzPFSpDssVtRAtJvZsoqiTuZQU5RZNY",
  "key22": "2DUSocoUbd3PrRNhf1Rw3nLgd3qPZhjZ25Wt8BvoMTqNFXRvvRr2VtYr4bX2U64dfBeBu8V6gxn1vtxHHQkwcF24",
  "key23": "5BWqBdENd3YrK29SxDA926ZsShukhyitx7EhCiHXgTpFSYLQW3PZ45GMQAH9SRgTgqpA4phJo7K4MmTfWJpqHgLL",
  "key24": "3boKxfgmqnMXvpJYGEzc36b1HovDKZvFt797UthuEkGoTLmJQf8vMQTmwqHcj6KxuFhmSkPDyu8EFYSLyP9jTkkC",
  "key25": "3nJqbBrUjw16J1nnsPUfiMaryspWuFJUefYA8tfMkLN5vvFPJhwS4hrehdAppDrTRpoj5yQdbhw7mixNjr9v6g7g",
  "key26": "mE4uti2HSZUUWPpUMVrSuhPDnJgLM6Me4CA4GrbsVf4P18WuothyDN1kMmuVujhiQSHcVdsXT5xK6WpUP8rYeso",
  "key27": "3NZRVXWVy6CqWPkFWV22R4mk7V7szv89FFNQw7vWELmxbtkp4jsWKDfftoWGGQVbnSneBEZHbZGnSL4DYDsz4YHL",
  "key28": "5EZjErRFursqM7USo2B1Yc3ougmNKWErkt8D98b2NzH2CsE5cqw1QKywDBKM4pAoJ8QUgYvCK8Jeg2BcndBMVoFP",
  "key29": "5GMNCbYPfd5rgEPs47GEHsjdXua8dX3braX2TDFTu7Nf8wFYVDsNkqMqh1XtJuxt6N5KH35SjvDRXGcJrbVJuGrZ",
  "key30": "4daceGY9nZhDqHcEKbpUnsMeex8rrf2zbkceuLcCit3aqSdVajB97P259nX66QAy9fa8mGqstUknWHa6tYDD35tT",
  "key31": "3Cby3MER9iYUf4i9Q3p4YtNfCDx6oN6F4qMQN9S2yVjQYfiXBr5orRTB8v9fEXSC54dUyWeCyptEMmQQFtg7yqVz",
  "key32": "2BaH6r4XetFTdmi81jEXQifZ6XgPjyLPk46YTCJV7MvhtwWbp7HEDRoLDxG3vcKRRH9gQnD38722B71T37zwey5j",
  "key33": "5NeLXof347ZhddBxftpjy9FXYJkaiZr9MDbroyCgwYrZkooySs6PfVtGS8Kn9jr9K48Fk3BUoJrhPMCoNH3vnNWK",
  "key34": "56CkVAv4XC87Boe1UYoCm2id6weV2XQUDj1N1vfqQyP7fcoypDTMpMjyiZtMiAmhrPxALCxCutnxqEqy5oEXH8GA",
  "key35": "4PBkRsc8hyPimCFb4p9uEiG73n4QCPjvjauGGn5nTjirMycRFthVL8NJDmZ7xLvVXex5gF38qtMUoqh6V3sHab3d"
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
