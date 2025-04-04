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
    "5A7Vpz5aYVQ9NsXxT1hWsD5VwSV5sULcFinLi6xwfPDnEVHhypB7rwmpne3E3vr3HHBt8Lnsky19mx1F16SG8N2H"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "KNZTFahin5BuKse42cAjd7n7dYPEzdY5y33KAqbXS7CnrJMaRHMQRyJbhcAtChkybi35N5cdnueUKKKPTyUj7qM",
  "key1": "QdgSWkkGffSofEhXgEfRuJ34rwbxAKxNzaFBLkt5hct4e4jLHV5d1xmDB7GjhqweNhmTZSACmWvsibbq5q1nXZN",
  "key2": "4BZwY8mZdVrM73wT1ecsj4e4AdYooRJocJaNe77spVHp2MPYmqfsWVzca7AnW6DoCPgherAeFPp86sp6mukqrNgW",
  "key3": "5U4dmARiKVzwSwXALAKnYh4PuBmjqexSoPFfFyssn9q6yWBepYENnRDjn1R1uC8y1pQZZZmMYv4j9JmEbSLgDEeH",
  "key4": "2z4gPvF891Djqm8ZoLRxvkuL8ZWeb27x9Md3k2aMdYAurMQtmUEQjSMHT6KTh16UtWHSryHZu3wZmLtD8hs55cE5",
  "key5": "335wJhzvwNkv5Yd1kUxx4Vn9kHitshvy42Ec5E9tF21pQKM4AsKn26LtdJr8sV3yyE1seBKbpUM5bGanc9hEsLjv",
  "key6": "596Shcv3oCg1mLn4gXBjGPpJRqP6yarepGo2hskg2WLJB28HaYQ9d2KMbSLXrkPf2GSgDfwiSenyiTDT6cNCudkH",
  "key7": "66jrS1nyzpMA8RU5K2koT3weYLTZdTdMZnasGEgAP3oSLFGQYAqVzXe48Es9axYxZUbZBHTeiizt3RTzABZUoDnG",
  "key8": "4m4msrPPcyotCFUGCpdQ4eTqYUvBZivCZ48zeshg7mtXYWe3GUaTJsg3FSEjSfxf6uMyhLxKcRRCvaYvT6rnQXGs",
  "key9": "4HUnA2qodLSKH1qVCmdbUD7tZdcZn3dxHiMzviRQMeufm7uJwNtXsi21QM1HXaYv8bNqhuAh8uEgwsoFupoSa13T",
  "key10": "Bo9XCiWxozijwkwTinc4PXUHK3nU9JSzMG3ybJzQmEZmD3o3tuGpsYvuxohW9cNpgKJKPiZKBtb24YrKgZpfWQi",
  "key11": "3mRmvECYe5TH1RZCVitjShzwwSV8FMDPdDDEEeAovpd2qhMHMPmWnZ2VHXpH81RKd5ViaepNFQAZo226oc5jwBNX",
  "key12": "47jX3uneJ7eUnGa98QY31GbFMsy118rD3JRzskGMRQ4YcsHzcv6uYQYEWiYphc2bD3yLUW7g9FKRbmRvPWTrkZsk",
  "key13": "3nKuWZm4Ahj1GSQLsjNtJQiMWXeCr6jh5ZswVuHyDMep6urRN6GmZ4b8tFvr9zc8f4HgKNy497mhqQN1EsLsyN8H",
  "key14": "2h39qMwQyJSrE4TTn8WsBbKHfDid54JpLm5MDAD1ADRnvJLVn4KLtPPBVoW95ZWmmdgjVhWKwCbz6ujQ3J62M7dv",
  "key15": "XDfh3WGceTRmnUA6atHq3mrMgeaEFNew9Bxiz4jSnMEbi73NRQyF27efgnmXsmPjNZcFMhvJ16iCEMHQJBNxo8A",
  "key16": "5gWy25wJVtsqUDRwuK9NuTDbEbtCtVxEjyHhPEyzcwPui7uSCHbQovQ1xhikhq5hPBSinSST5pF2VwasfkUoPE45",
  "key17": "3mS6rvYUQyXQwotQkWK5TDdWgHFCxrAnEc7brP6yiuAnbCmkuZacU14KmpDb28o5HRK6TNiee2HHzyFiXJcdzpht",
  "key18": "5DqpYo8VGBLSPdyxq3rhw96M5CsEaNDikhpy5CvadZ1ZJXp7o5mtq1XuKm3S89q3xftcXLBPCGMi18ykAXGoHSpH",
  "key19": "24jDtkAYp3zpWpsDAw7HCYunESu2M6oqeNfQKat5XnJ8tMqeR8LQdt7if73YMQyj2ET1XiJo8JDk7F8YjEAHSLB6",
  "key20": "QDPHKBkzMTX2wNcoPfTHdPoQczo2X51Bv3PYm8dMVQUs1EMLDd3xGxXJ7o3X5TGtdmSFvWQXU6kp9BZwiTgoMuh",
  "key21": "4HVdij7ZC2odh87xmFXyyuaY741L6qVMdpA5M3KiPWa4Xgqjwff91t4BncjYW89S5YL7gZ7RoBx7c7fcscNfVVrE",
  "key22": "4zzTAwWgvSzZ2r77g8tGaKP1o9tgcS4ZbdaLp9nW1CTA6wC6c1uiLkyYzu6HcRaeEgLHU1aV3g4Yt1dE87CuNCgD",
  "key23": "453bzs7x9ioYWbMHyVq4MuEbT8HHHdkkakW14q2wVbpB2MfZoDehDU7Fs4T3ySAQzuZCby7yM2m1ehziikPTSCXB",
  "key24": "4JB1M928GWhV3aqsjU6z8Dj8m4YsiU8YeAqkBUiMhGoL1knkg5Y1EwSnvmarxnHmRDyvx9kJMzpZQ5JBJoBkvDEX",
  "key25": "4276pS8cn3AqYAyEQW45gHDnEVh19T4nBSHouekR1HArVFPvxTu6qQCJjM9knmbLznnLwUy8wo2jL1d7ou5FewN7",
  "key26": "cT74L4H5FYHQEg2oKnjN531rMQGcVAhKUoKfnsMsA4argXtSevQTQb1VfPccBioAY7mRA4ohFb1KbGokQ5MGtN6",
  "key27": "4STPdMJ3P3seXxo16F2bmgFnWKAMNTwcJWD98TmgSsDdhH5fyTGCLQtC9DmifGG6dgWgQiYvpiF9cj9Pjp1jMa19",
  "key28": "3cZBgyDKZad62GGDeQPeMun7B5GmaB6p6A9s5FJqfwXcVGw9ZjZgYGa8xXiQGjMGorJ8i9b32X4QFcYCKKtKmTKS",
  "key29": "5tt8Hc3FpeZwuoa2jArziqZj5TKxRc2TUKGqqrKpVXoNwj9wHv42KdqUqbVdK6iAzL5KM8WGKU3USgqUFpoKNYz6",
  "key30": "5rr57g4DhSjqGGuJ3qvoTVPwcBzJ6zk6LhtF8D2PMNAyuFwdiyTg6Lb9in7TF5rQx6wu6wSfF2SN6GvJJBXLL8qZ",
  "key31": "263NaFxTzVekEvjSZqGkHx26PTNYbwRXR7hkuLkx53sAQCLSwZu2Zk5nEgKsMAeXMStSKALrntHP8iy4Lmz2azBu",
  "key32": "fM79zUoXsuBHuEp6ocGs4H3K361gUtZDBbyHi7Zf8fXES2ViM3SamNgbK6HvpxEbD6SYQYxo6LfZZpP8iKQ3eLK",
  "key33": "5rrxS7b7UxtCfzwLzRSP63MLUVujCQkpibjugPW84PjSRm9NDKLX9Xn1dKwj9yck9MpdfVu4Kw6xgmG7mSB1WHxf",
  "key34": "5Sed12EdinJpsJi9mvrgSVQArfpQypEFUNukrxBfXV9BfaXjHXnjv1yxaqn43iecAQAw4AawfysPt4iRvNyVUf8d",
  "key35": "2Hq2mfC3P35cp9HDjVBvsKmdbdT32bF6Gyq8oTe1BgiQB8eXfWQiSzcNiHY2D6ikY3vkGHWTX6VZvawoBt6pVsSx",
  "key36": "3kPXr5f5uThetuhNivPRjbYEy1ZppG5ot98yVt9QjHcoFKC8hXtvrTXSU8PbA6JeBfsb3GYcXJEeX3HTrXte4UqV",
  "key37": "2VynScfn39pKyZ3HDAaFHU5BhW3ZaTVypMTvTgQcoKCJ9v5Rkwd5Y2RRmEJc4DuEDmLBzEh61s66gA52kKX1TUXF",
  "key38": "5mt3zrKrVY5SPGNmk6sjE2Q4dD3LAGiByoWwd6sYD5KyYFC6h9c9C6ZrwXKkeWoReyjGXhhcbi5BFrbA1N1hwE34",
  "key39": "4X75Wm2DDALrTNqsCc1MqeuSLLPXAbVbCM8ZPsoc3LRMahkwjgK2pVkecvNazRR9cJYk3bc4VDoim5s5R178hrGN",
  "key40": "3uFtGVBS43Ajtg6Ydtd3abHWrwxXo8oZnbHicNqUGBX9YZuE9V7qwuUa5sMRD12MLJrMZdPyrjfZTyJcVgsGPKwE",
  "key41": "4iu62a9csFD9vSiZAeWwQDuXitYWuq8ZeHtKu6vstPm7F3pPfvXK2xN3eWkdpKqntLvTFf31uDWX4BWb5BGchQYi",
  "key42": "5sCBWRWuTRoZtrbGJpV8xJUbnCnMb8ANJAivYPwgN51HFvyYt7VSr5T9kEupBsYkgxQsw1HoFq8w1TJj8dEWjN5Z",
  "key43": "3gqt2rjRfeYRyFpEfZeHBbAm4dWYscg5dervVfFXDETrQ4kKf44eRan9JZi42zGsVBFHbVNtw1LUg4KVfK5gHAcK",
  "key44": "2yESt85xQFNmjDFR8zUcurB5pp4ip5iEUtzbfPj2f8k5PTsiwEWrmvo1FTsdCWuQK4BxwZYrfHnbGLcxYSTb9nEy"
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
