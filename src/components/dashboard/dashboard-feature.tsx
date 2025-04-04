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
    "2giJQhDF1VPrP7t6gS8dNLsDEJSpufdRdfZSX1tPRFJNmbLDeTEghbVrVxiK1SDNbjPbmwnDiLJ6LoghMHkpH9LU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "63dTA211Ae4pv1VN2Jjdf7RK8zqJEzxrJNaz4wrbrBNqyGxaqsyubYTbWtU6E8GG93pVUcieF5qMc4eASHfBXnj8",
  "key1": "3oLrSqJRyTVgF9PBtnUm3FvCxE9CEy76qBrn45h6bo73mg5gG7nzYhEwWN8AqgeKZV13yP6Xzgtx7QZCVu59HknT",
  "key2": "3YYCiudut5swnwTPvqDTAwuVrCiT56t4f8GxMEvFwMofCtiAAj3tmLcC14PHWFcxML7K6oxeF2PkMK4vtukgdjuq",
  "key3": "5F9sRvPBkhCt3Xcbc41BboTqFKTwxpmS16fkL8x3En3PB42QJU5Z4w1ifhuuo5rSseiV1eVbC9wRcFcixZ5pwBd5",
  "key4": "5tscMRZisfdpUEzwDKEvW3VxavkJS9fXZMVCefTpts7noNKbKL17y2f9knh3GzbQ3vYxhShTW1fX9CPhwn8vtjXu",
  "key5": "LeYnYmSUiJLJeEz3oVX1snN2SouV5AsZtLMyqgYTDrxSSSxbY7XWVptHBhjURzqQ2AMC5V8WNiJqn99ZEGt4ovk",
  "key6": "4rQUaMV55ggGHWRLhcKZUgWTc5BvgX77i2y15AZD3Ev9L6V5CYPTzcnon2cd8BWWeTFxhHrkoSKNWngBGXQRQBK",
  "key7": "4Rg7WEABEJLK3mDG5R8dwLbcTkTSuk8RCBjSW67jkwt6TBWxfDK8NWQdKrwVQBqHbctC7czYizVEWhKagFRCi8ot",
  "key8": "jrxa5WQ4FnvbBb4t9cntvbpuckhH7DbKU5Tniys5KbA6KKYmBmPC8ahmJAKK5WP87RZZ3P82vTgEY1wZcwmtvDK",
  "key9": "3VpsgfR912i2V2YmnDVmRu4sZ8QyzgV6Lyf3TJdzmBhMzjR71ePK5ccVBFkXYFKZCURQrkc62yvGbar7VsW2Sqih",
  "key10": "2t6hcCivsBrGS31D5SEyRaQtxPaM72twrroz7mrcUKDpEA647fkp655HMwZM82UvUdkY9Dr3U4vUk17rKRJLSiTV",
  "key11": "3QUZJikAiDFMgC8u2mu4eoV9UMCaz1h1UunMka4LehFta8t1JjXyrVZxeRu5YyAyJfwsis98E1GUEaWPcWFMcvkU",
  "key12": "4e6yqwpuaNRrWbXmkhVpa38TXjHdNSJhifCU3QuRas9rbXUPFF4BnBvZarRTKgfW2nWb9gdLhkW5ipV5UZCErC5d",
  "key13": "5C46qNrzcHgyXYZHmVqhzEr4mRg1RRLExegPyQE981arT3VsnZCVncXQ7WjG4c7HCEDb6a9EoBNmrrsU1dCPLSTB",
  "key14": "3HBjRQYysUeuFU6552G9ShxrcDKGBMM6iFxha4VBz89ascPiSQhPwcYngMh6FfjpnBKE8yeW7ez5kiD3PYrgqrsL",
  "key15": "4h5yB5HtCmyv334foxGJhiX4GKNNUSn423W4Phuhvu7RPhTebQVLGzL2JJgEitbPdjqwg4gaJQSM8vYVkjgqPGik",
  "key16": "26Ctw9wDoFkP4db5cd6mU5zdo3ENppVDMpnTfNm5BKJg3iJ9nUQGXVWUW7cEo6rb1MwzQF6HdHn92SVjERrgZrz9",
  "key17": "2Ye3faEhHwhq1pGLvWWVPTdEyAb1dkQBxqMghiv1fHwwJCJU5GHotJpTDA6dVNP2FDQQ9njSGrfYA83pPscEfcg1",
  "key18": "3BmXokqc3ytpRyTHwTUEfcafzhK83fZ94vVy2JEiqaFmmZmFML42yjGojnM4gnbkthRFR2CLTt77QcMhQdBgmANA",
  "key19": "3NQYhB1YY1s6AuHSwRNF9N61y33iE2rMb8LSuUUi7CQyiYx3GUiweJvmu67u1oX2hJRGaiQD486nXjfPbkPe6B8K",
  "key20": "5XYNKSWPKoqe3wBSY6XahsJYEmPPhsPe9QFt8tbaowpmYzh6tg7qynkQ4uoRUbQ75tKAccc88ExXaK3YDJUcYhSM",
  "key21": "4M66mK8RpoQPJD4Nc8VebBr4g32tTccztSDRGg1dS93PvWqB3SQwQYKXCSngzmkbr355UhMxQ4VPQUM6iXAvp31c",
  "key22": "4pRpXBErjPoWpKznnJiA9AdvS3iVMa2oQ4FUyHSehXUXYvwNB4HVBqkEZPgGc3ThRXMLqCyyVyd1wv75LV3pySgg",
  "key23": "2U8bv7NU2fzSzLSEDsNVo3BouE9Y9shA6HZPQ4QCZdhLBmEFm9wQV5MUs9vCx67QcRZaXK8RFjVUVqwdv4yB24JN",
  "key24": "2sRVuduQdbLHhJ1y2DZDgkcpYKma1QtWzLWBmmkUa2DvxhuyjGgXwbcR6iCmfbNT9xqwKZ73ruM7Mmdd7d2qgkms",
  "key25": "2TpXCFd6vTVPJc76o2nW1NK1tXHwqHAJA6oTCB8mcbkosd6cQDPEPF69vKrem5cZZxsSHuPZjdcwBGv18CPyuS4c",
  "key26": "4YUN7Szvgrj21prkfbEBKQ5KdJdVniBebL5MFYgQ1LWa7c9sakuJym64jVZyPk4gzsjFv33YVAPXgn6UZhiwzydV",
  "key27": "ZKb4MNtVYknMiSs5jsPHW5rB1cqu43S2DQjuQJdyKgRqD2AvBCocUKHxBA3WBuwJugeAksBYjWmTfye4v16aSVp",
  "key28": "96aJmyt974jUAQuYKhTXknxybB6MPw24sC1oZUMzoMTknsic2UKDQZBpNGV8ZDAVwa6ETRodBDgzvLarTGzFvV6",
  "key29": "5nWWg5V1fMyDWd29DLfvafxUAjYkhTNTRDPaDiDmZqnDvkQw2Zi6NMCpSffUx1Edv6aWT17Gs88BRNDyMFYxpCHY",
  "key30": "4nUEgi1Yq4kziTEVoXnKe94h5dfMwdaiS8bpxb7RrEW7yZ4ExKTYnFkNsuzxY5cMUEXaPH1xKKWjrdZFzFnjMVY8",
  "key31": "nqZesxADMjoCx3Ps6biUDHvvtznWhG7iWKVtfJen7A8x2v7uAX1ALVrrfhAQDur3nG4eRnKYNwTsBFQBZ8cTdHa",
  "key32": "5KxaDx6Y2YEmR6dZiPDmiXn1iuMVVgPDAj98HmggyYcmnJiYALktUTRtttM5SgPWTieGEA35wTMBwwPBL8DaYWdU",
  "key33": "5jUhdcsrWq53NEoELWaKUvgpXs3WZVhCzKb45n2vJK9LFgtST8owuUdHRstFcE2YTh2XM7hjyDpcygyvyP1RnH2s",
  "key34": "2Sntqz2peyijxe5T9XCVr7xWbo7eW9UqENGdY7Bt8rhCfGnf3Sb3CF3jyWeoe3ASegGQp4h6g7PoFwoRTiaagC73",
  "key35": "5X7zF1hQ7RsqaweXzA8iAtSGBYDjf3YUXSZR5THdcqRkKW4odUdbzaiJfTFZb1x5h5LYnDEfAdXTdVuWdf2jHasP",
  "key36": "tB2yuquibY4A5iUyCmaGMMxcKFwNywJGY2UkvUjRYg8vpVAJhmjuXJ65qHPBQrjdLXNvSApYmZaN7qVR8DqPJ9v",
  "key37": "34Fht2Lii6q4tyMiHiZ2ZEJGiVXrKUooTMApU9NnajeHebtf7kfR2Cz7W6wUkv7JEPbRWMN6XA2Xub3EcB39yF7J",
  "key38": "4UUALAn2EgybBKDpXVkFpUBeG7gvPfnrssK2E5P5PGCE2hUsgRr7Sh8uYzWUYyQcAMMnQsP11YoCskx7Vkvdgmzd",
  "key39": "2u4SEFccVobzJA6FhT9ezjfmVzUZRrX4brHvKEZMqL13xZiZktAqte19qSV4Ev3zvU3DWAkHEUZFZmECrMXkc4Ni",
  "key40": "39dsjV8SbKScb9cvmV5eqFSjHN6aFPSTK7527BuLcdrgarYig9EFnKJikiixEPrXYEVpR1LaFncNnZy9BFfvAavW",
  "key41": "afvuoqxGFq3V6obVhYTH8EtWrbbxFX2a8DFeVxkPTiD5CaePH5VjanxKVJ4WRWnDz66KzhYRw7FYT7NcKhXD7Cs",
  "key42": "vVDEhdJT44s5ppX9SDbrmhbCy5DbAVkA9Rg4SgtvXHY3KvDi2ZGejD9GzdazFcbyqvJagJtajs7Uc3qdMvyhKTs",
  "key43": "4Xnu8EkgfzfRoHMGbvz6MMN1kchrcHEsmTBSH6Xne2QoTQB1WCNyhpo7ysakC1sbsxWvWHbEeJYsr7hHqGmJk7gy"
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
