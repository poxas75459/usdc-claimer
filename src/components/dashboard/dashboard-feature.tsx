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
    "bmL8oa7GS4bathNdR6fMDkuHvXbwZwhT71Uk7trBov7D5dJo1a9sv8vZ55hNj8rEJRHUcnuhdAVY2utZMtNvTrr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5XMDjoZc6X1EP5S6oubpKX4iJDgeFQ325UVEy5WNZjsvVcP8Z3pWo6QhVJbuWwyE5aHavT1ZBpXfFPGh1ntSoQGN",
  "key1": "56x4ScbCDLTgRjwU4s4PNtsk3GBcfmuLAk9xNRn7LC3ChpA9RRBYxbgQhLMWxEdykfZ9i6xL9R4L3xs46YecafK6",
  "key2": "C8tCYAgU8P2C5ss5d1fTf3Za6ZhTa4UE22SzaPnRuNsSnjoRKTJJwPPgoyDKWmzcJcNXK2EWoKPhejYVc8E9Ugu",
  "key3": "46T8Ua3VFzSFYCSRedQJE9XWNNysy86L7v6Q1cDyZ1JPVYmJvBaWbDoLrhnV4xpC9zsfh6mvcRYKYxaTEBytjVFc",
  "key4": "4ofhRRqZM6LU4EvrDYgT9m4iWWWbcycmDMXWFvPTS4Hk1sddb9MYDsQ2jnyNzoN9z5uJyrPFRkbed1U7JtosaTCY",
  "key5": "dsL1RcUDqgmBNmokqWTwfemQLi5ipnjE91mXsMiTVP13CHKNjgV3ibkRQdLb7auscEbTmC5NwJSkGPmstX7oVt7",
  "key6": "5XyWKWfLQY7ZJMKLePBngonFLUU7KHa7HndGzJZm17jK9K6f16bEoCQtWho7azcTD3rCtBdfTegdrcUpMnYfzoXd",
  "key7": "4uX8T2wKEuL6kFt631vB36XgDea7X93PK6pTs6mhkDu5fnuUrbKKK1ae8qybZCrxTWKZbkavVA3XHqDLXKveatAq",
  "key8": "3vPDHUM9PBMK6ZTwSYcL6egJ5BNJQUUoP6uWm2AMibbHQGkWz1QEeQcARcyMLqauBJYUFYiMAwL6SA2q8GtUCJSF",
  "key9": "5iSFSafp8xL6srkKx9T1eKgHC8MoqQ9DBe5x8jJpRCJQUrrKBoNCTQeAJWrWbGBP7dkGKSBZYqhM1KWMPPA4qd37",
  "key10": "3idgF2186KV2pyfPRaEkCKhuMKMmfhpTgyYb5eykU1HV4exZquHt6kMo8ha3brJroLifLDMs5cHeAVDKHGcxT5Ua",
  "key11": "vgsfT3dPK3qEoPZWAAmVEhb2q292VHL5gNSWe3V6CGDbhSbqrNtDZQQJT8NFoVCQXxrAMi8ajo61To6h9Wg7mCD",
  "key12": "tQKbkzWQuARxkVVkwGPQUa3Bryvdf7wMBfrG89NTLnfinXpHf2yNcuyyqPa9YYhnY8WSaoMYgDEFQ1DSQk1TgBj",
  "key13": "5YczcWrWdufDEau67Zq6ab6GqLbuBP9RfZLVcN88mXka8rujpj1kQbGyqnRbW9FkXBqS2eUTmwwhQzyRBHqUKuHX",
  "key14": "5c2LwtGnSWErG8YUF8eBEz9HdrZQG7RF9FHwnm73xbenPn9eX2MVwkPjZQBN5VYknCUnFYc9vX2ha5RBsiiy4xYV",
  "key15": "5B4BgezdkzewXSB7TCNti4erzghQh4a1qWPG19Yw9RX12DqpQZ7RvfzwwWCsGaSQzHGyRuoBW3cC8WqhmCedLb2R",
  "key16": "4sQrnBMu7WLGdKeJLmMWQwKt47zPUbTbXwXvTEFiGJg4ZTWXP8hBi9wJdMTmPkrZYQWteWz65qDLZhAMDgKGkhTx",
  "key17": "stntGpB2G7V6jpd7XLqxP75vgP7dfWCF68jtYQVvT3ZxMVpvkML2rMKzRftY7v2Yw1TDah72HTrjqkCbpTUFMyJ",
  "key18": "SEP1wW3BQHLVkh4hYfN1xzmcqNNp1AxiVYrFVgijXA1WeHWangdE7KhqD1NRngiNdtjYAJZwe426KCYc57jvf4k",
  "key19": "5RkwpyqHihb533ZrbQpWwRy4F4HdV5w3P47rBtgySAbXz5bpqi5Fsb8b4trVsb6vMnX1FSC9dUDkyBwPPFp67XTZ",
  "key20": "57iy2fxzZ2n8tojkjqptQWNB47WJDsnDbjtUWb35uxKfBkS4hv16R4hphWvreBHLTHkA77k3Tevgai6LQkWAzU42",
  "key21": "ujEiUrZb9rf93zDwnCXgbr7Zr47sBhDZqPWc4WpUPXjEGwGjGg9wqGQyofaVKj7tpovfHY3uePrz6MqGMTe3UeJ",
  "key22": "Leq3XASdfaYtCHBpmdgw8SJU1tTSAC4PdpZwW4w8qUMn2fW6r3WvogRdCirAyamrwEapNsVojUczN4r3YMBYcjv",
  "key23": "5iMiYtbnBj73gAbKxiidwXLR9RbdtAAwFBpZDgLND3LBvYHfSc8iLr7yMhx5Y2k58naiEsGnEVLv8zyKrPaeEVFh",
  "key24": "xQLvtrKFqVwczrRcJBr1yERdGfpwrxqzaBCpbu2cAT1VzBWAVMovknxP4o6Xc6V2bY9x6k346biaV7p1FmpwEub",
  "key25": "49t8QJnDEHn3FCPHXEb5FTdRUXD8TWa2oPasTv7TGhYXbqpdY3rqvWnz8Yv2MBaEbm2H4BK1RgVaY1B3wnoozB9g",
  "key26": "2Sc9wPSfD89sJs24xzrUEQm7MWY6BM6YbKvfDr7HLje4xRHY6bsZpL9csns75pZ4czv8KJrgGxptKMKS2NxouHLL",
  "key27": "676ZzoKEeqX8FU55zqPum4Cz17rQtSL6AsHJda16itf9H44VFNwwA7xt1gdNTFGCVkLxF7j8bw25qf6g8eMdG7mJ",
  "key28": "sGBLtw52osRu98DGtLK6tUWiW3pqmYnrgvEmn4ryYnajUCoDiLz1x61snJPwqxx3f2kST2jhzDzeqZ4WRqpeqic",
  "key29": "3bHeygrnP6n46ZtQCyKBbCBREkYYnSFVzjV6JMdfKdM8ouVuEpD1i9bdM43wnz97WpC1KLRhiLZ3DgFTkzkN4apV",
  "key30": "3NHtKgRtaHpUKgCgQCK5ayMUmFCQkStJ89ZyVZ2kdbrXBPcDP2yoYCDDSLkUBYfQ8wmpeWrUFqz5jw9DsqKz3msa",
  "key31": "5XedLQLgpTYygqvef6QiaK9sj2Kfv3BHTNurqYKMLNb96tuc5r2qszbWm2uBde53c61CtZQwVLigsBqboGRouizv",
  "key32": "3j8XE8j16NzRK3WFTohsKY7fKtFyEQUWeheTpCvUFqnUeCN6agFFWXqprktVuZ1VRGWCYjstubNEJuLgVERmRdPQ",
  "key33": "4PCQg3fD5uo4xPxzW9EUUK1nzjtBYGvundkyDyCvFFMaPDRLWaGeeaCJdcqZ53S7iELqQYMtXnAaPDtfgUy3k2LJ",
  "key34": "2NrbS5qZLfL6XPMsriiqxiGoMuunHQ8NqarjnjTwyf6UXvozr45q9ob6ML72zt7rFw2L6Z98XiDVXAKSDBDycpwZ",
  "key35": "3QCNZ3B1BtBf8aUxFHmShxVq3jbRKDGa1c3v5oCbmMV7PRBmRhq8pLQk1FagfmkssyVo41PRzGvy7xECCMdmFiqw",
  "key36": "hrJuVeJYYLUrWhqnHRXwDfwweGALHuiEiyQ2KRHgiJUTnZ6TGxsSmP9QgaPnqVeW6baZFce7N8F4mpHpmoQ1hme",
  "key37": "4gz4H32vyTKoPgExZW7U9wgupNRspQHhxRjVdw3D539ebTe1XZp6kww3guuoLnrCicTYKp3p4s9xJFWDTFL6Zapm",
  "key38": "4b3BYePu5QsJdHm6JwCNXDiwGeSSfZznXMLvQkWQCfzNJrauXy6geyD8cpsVoNGNea9PFNiT4wpnZEzc7ABzaZZy",
  "key39": "494MtjWmqQdnSzpXhMRUg4CzBMVNC6qegVep9eFk2DJvTYiGerUDu6GtHd2PbdZhozuUMeqnTHnMHZXSUji6MrfC",
  "key40": "4mDdnX2pXgF2ma7RVxgWg8AoLCRN2T8pbDn33srNK2ZJ2wbj2BCV7aeBS7MXD7J5iDpca26SKTCAs8qmncCvqNGY",
  "key41": "sBFkRS5ovXLHxoqoNQBjh2TExzoyXYTBJoM86is6wyEAEvgBySSuhD1Lj8iefCDzG2tKUgMeEQ8v6Hixm55YR16",
  "key42": "3p4GoAPnrxbKHHAZHc2PT3GAMSrUbTnyQZnBGpeNMWmxBPv1FyjLRZggJKPHhroDAS6CmwkenrgZkEcVMiRx4CRa",
  "key43": "2ENtWH4Ysn5XGZR5hUSgdTvExYXNM2AdKAWY89jP9EGpGE9WMLtc6HzCaTRqiifkb8SsbgKGtSo2xX93KwkMQP7g",
  "key44": "517zsjiKjFC9U7xphNhaw8xjGjkLFDyzEu6evi7ZbKndZkgPqtVGFrXPxsQ1JqSiwLzAm7H1dEo9789CjjaCEjUQ",
  "key45": "5g8akrwoU9cUPBU9bGHxLuvsA2vvjeKqQjcRFvHVXKsHuN4RN6EjQtkXBS6LUByP7fNz2gdJepcQ7LJvdsEcow7X",
  "key46": "5DwKQAsnyLDUz1HvEZu8u9REWSR9QMMsqn9JZ4fj3udK5LE5xgeQDsY8fSvVboXQc7oZjXbScPgEABo3172kA41e"
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
