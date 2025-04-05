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
    "TuC8FjucDEwTakAq9Zhns73r96pvFhwo8upVCh7jWzkzFmUFosQgs5sWhgoe5LzmXXoF4P7QkH2qSeGuoDwQoNe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3XPAxuYgeV86zcZHy24n6VjPsRqVrZFp7oE3tr2x5NBt9U8gf1fg4NdrsHW5cLDjvGPZ8pnKPbgBY5Rbpc9CxjGv",
  "key1": "3FuX1Rt8Gdc1sWSe9DMfrtyax4ExcghTwckiXrR86TXKaMYLNgvGAjFqK2JBrz2wqhFb3NsPJnKkm9UuE4BYCTjr",
  "key2": "5GfXUM2YTXenvbhy5sX3c83Kid1GqLqsvwn2QB538NvuoBorWz1MYrmeNhw1dPDHQX4zukACaz5ygSavn7TbzyFb",
  "key3": "2EzFpyhHL5vPHaaGw8WRuc9a5jqtutidfieCyRPaTDWWwPaj5Lop415LAhGVTJTRawu7zYfsDabwFrEkN9dwm16u",
  "key4": "2GU8mfSmGyBuBPFLpFmMLfhAJaqNSKM1Mi9YKFZSkhCxPy8MvnCGvnCVNDtjKXE7DchL1EMfH9tahsFy5xZ8ig9c",
  "key5": "4xhsbhC2ugYbGMbrinHgrRPiR2BrqWmU2Gd9dQGTfC1ZyVEerSpXwJX47NhCFxqD9s2rzqQMcAhjDnLBQcWJ3Asf",
  "key6": "4sZNGW7ZeB22uGdFLvZhTu3VFkQFGm8YVzk7ZysXP6tdqh56JEg82Sc8Gq1hGX1Gw3gcmLZAQhfLc4tiTJJ1Z8e3",
  "key7": "447g6gAtzoa9MinZRThXsERHw6YdvxQ7G4wbycUuwxwpdMHkhR4vyqatKtSsWKuUK4yXJ7pRtRAEb4QNr5azTYr",
  "key8": "49udWzPXrG2SeA3FSsE5oMoRwzDE7M1HnzsogBZU7hRbvitWuyeA9mLXYVrYgxUnusfKEzvy1atidsqtjYKMhoth",
  "key9": "2AKSQGCenRp4gE7FJbxZq8iEVMEWz2pCYmGziYaxYChCXQiB2BkRBE6t5FanZZzjkjdLqWAcLcFwoMhz7LbAgPsj",
  "key10": "4Ub7KM1dvGdQ9r1Mfav7EpnHfxZMhdY92gwhToHTcHBL2qBRqQCBeMZkEtQWQHMrEfZVXspoRbc34VDrFu4P6AUW",
  "key11": "4Ak9hQBYCiTEACtgrz4Ryq6cbc1cTfKFs9XZ4DEVP17DERP3RWqwLN2GBKqfrxkBrehmKvoDxUBEYPuuApJtGq6S",
  "key12": "39PoiGcPuB5UnzSkFufQ2oVqdBgJaiYnL5F6Em7do4k5Dht2KqYgPyTiC1whaUMGsbfeVdXuQ6YVQW9itGbrN2TA",
  "key13": "61DuppUCt6JEHJRyd479xB44jqR6ZKeynvJJADAL5PN5tvrXmGXwZnJq3nJedSBCH14avkN79BDCsfuQBHee2Exz",
  "key14": "3qgVuW6mQEiDyypjWAMYuiYaGDt9eWXxueZA7nhywRZEjgVxgJEqgsRcdZDCbXDx9hAb2ReCoPWge8AS8kwDZ2A4",
  "key15": "57QrgG7YMMo6yk5LrAjzHoZkpBNFbjotn7LTtYwsChn7USpvtk8hLHEn98utv7RNGpBZsdKR2isEcsnUMCrR4UdD",
  "key16": "2rNrTVh5pBpvbTyBBz6rS5meopgSe6fKHmbfZN3hx31tPmn3QyCQmdmiv5dHEdfVaSkh1ZjJnTxw8GbMA8WWa1RH",
  "key17": "3L9tYVm89vX4dXw2Y3Bvsrg9SzpygGuQEj3EpbWYg1ZFHKVxZyYtu8x1earV5JzZgBxtroQ5S3sgSRNgowyKebv9",
  "key18": "PGwNyNkFUVej6nL71dB7Ng9aRfVLCsr6Z2QQPa5wyEk9eMaUt1f8eeyb66d1px3r2fwQhue2RovyfPFVWPDgw3F",
  "key19": "56TXLZHk63yQcyM8BAmUrziLXFho3Ako8rvVdfjcEUFJFekBNc2x1v4E5et9czHGzjv9F2JXNfEUkNLBcZ3ZSWVU",
  "key20": "5N2KnXnrdLwhEtJH4tGLoiAKcnT7W2v4wz6NbgciGt3sqLMQHW5kJx8TEaoM3qFdscX4CovrbPLknMFydHbvWQZh",
  "key21": "582BUEcbMXg67ztwmjGSKa9CgdVfLL2A9nvQe1RrwgMh5mkTQVCsDSinz2LuMSTLsDMgGDn3w4w7SRi8FsdSaGud",
  "key22": "4az96HBojRgbPiuasMDygYkkcQPZXswu6DRgQ5sZttpjzE3bxLxrqhfSbU5JYjc74i3LTDMZJYGqMSue4JvNcrnW",
  "key23": "uW9sFfQZwcL4WwF2vHNtQzbSGPy1P439ZGVBUvqzBu7tjiExR2WRG4f2ajraiLsbR3TD5PeAkJzpjE4CBGC75Vo",
  "key24": "2o6Ac9g3HEHegaeXLc2jFFvxnKtAqnmJS5PbH1YdVeppZjc7PKAYCzKG14ktSnEtkXv4AV9kWZTzDzBDojPVpmkh",
  "key25": "26M1LLqyXG4Cqfrj69arqSQeNjk7sF5yFd2ZWacccZBAYMpi1zqQyCJBfbCG68Xkxf12wvhZQQHzob5LwRVKnXCy",
  "key26": "21ax8aPayJL7o78pApvjgxsn1NfSqYRqbcRwsR7i5RtUnwufiKzYFG4gKknNt35U87FyGU4hY5KqaL7DDcop3uvD",
  "key27": "66PGQMxnmKY6CVwtXFsismcqKXsua8FFamXZvE23hweEywwEXyDfVttfnbbZcdzPihtcRX9LHgj8a7uw9YKFXTyk",
  "key28": "3avUfh8QATq9LqoMEtapqw6eBjeB8MvACjZunaqv85eXPPu4gpjP9B6GXfNwLYMMY7khjjVCwR9Zv7t2LZDdNHyQ",
  "key29": "36RfP4uuqYkKFBxoYQicpn7qR6EowbAtVFFkukeD1xcsZHGj7148Z4hkpmLLmyhNnnEhTm4jryy1CVtW9DxGg8W4",
  "key30": "ukBbZfP3A3R9suRoCiM7VTfoSi13pq3buNQ9bHGzAFjLYsssvWQu1qpR6xzHoG2fuTrkNhkqY2pt9C27e8vdep9",
  "key31": "66rHTvvpECxFa8iTa4z47JdxnmMaZuq5EiXRRHEdpJCn9eKo3stbbiszkx2cboHRAFaD5Vs79rhtCgNwzUYrC8g1",
  "key32": "MF3eFK3WGun1zg1XKLbs7rdVJ7EMDPDQcX5vjbd3eqJLV9hoW2TrMyRm9PRPKLafAhggFnVtRfe9BwQDEyT9PJB",
  "key33": "5do1D4cUsgRVGXKNReRjG3jsCsgYr3nhx4UunWTgNQmfC7qRQjXeJWrbq4XmqSckFtQgiLFBiJx3gYWqPyWcvaKx",
  "key34": "KiDWjGtn8mhikq2QNtkMJr48UYAjsyq6AtyPTKPYSYH5fwCZpK4skp1CzdJGy5ndUMFHGh8VQNndKMssTpJaiAg",
  "key35": "2drN7HYKdq1iHoMDHBngJhR7Yi512pD7BumvS261ADaQShKjM1VWjPjUTJjD44anRJDY6PEEW5KzowWAUmB8jeB1",
  "key36": "2oo7u1SvoJ5VgEDpbqNpt4NK9ujSYBWXdasiUYDCVLd41tAydgFjjHxzwdRMRafme29odP65HyURht2zP9sFkxmm",
  "key37": "3G5LjEdmwhiY68nJyqYCUQub3ymJ1z8HF7cdnxGYnVPYFsso2TaH1metF7hcGn1MWNrqKKUUt5WKVo3A37ovtXTA",
  "key38": "46eHNEGueYXruvpknE14UJTmkymzmr6VEA5jF6gMbjLzT89ckdn11oXoL2HzUQ9zsn2LUcAjGKv7n9ftnuReqPcp",
  "key39": "2KdZUaC87GfCFEhiQ8tUXDKGfBLnBRySpyEkTxgHmBfTFi1ckpK5MbPaETTssd1VUMGaZjS7DQhobi8JhsVdciJ6",
  "key40": "2N6Srh7mJjwysXTAkmsDQEGnywDPgQyF8PjAgSEHDY9L4sQ1eBtACeB89UhymA1XfLPoCSgZkVFjpw4SbbduC365",
  "key41": "2WH7nJYnvzhyzJrB6auzncu6jGeH8FLLmRvay4pg7qau4afiDKTd6AfjeSskp4UDaSgfoJQFpUEGj2CJA7MskPG2",
  "key42": "25nHKkSACGtSrc1tmpb3cTgNpnzFj6mNGj1e5mfnUdgSUCh9U7YRP1PeqQXV6v4bsN5bxV85TayxBn98MnDKuYZr",
  "key43": "2gZ5vPwsiT3wJyXUw8DuWZp6MqG1UmDXbAMpUWMyKvjDRpFLBh31BicaF9F3in1tQA5j8nxTXFB841UF6XhKUu5u",
  "key44": "5UQdUHyTXUsDLiVqcHg1PE1bZVSUWSRpK37F7YaeSpjfcqaMUwPSZsE7YErTiw1jYR3QQVadCkjCSRG9K56HFxLX",
  "key45": "3gTZ3bDhJ4EHTN2Fy39zMf9URY1YFpbhnvvHiouZLsJ2vzWQSkqJoUWiHtxYadAwxKuduSJskCVX2eUtit4wCEji",
  "key46": "2YxqiFpcBWAcpDGUJ7SAx9MW848ZSUmstKfycsXBdbsqhPC7dL5XG1XWfxzAJWu1XxHT7hDZsDThPZTZxXfDviBD",
  "key47": "2A6X3VgbV8mE8EmKkZaQA4NYxkya4DLn5KfRxCrDm7MYRzs7MTXQTv4Gm4dRJJqG2gxKWFp3MgSbEBEhKgoEppbY"
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
