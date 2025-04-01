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
    "4UF5bz3gbo3oZMsU37egJVXUbUet9gyh1Lp9NbbQFkTCqVwekJK1EfvhdF9XDPsfP6is88fe2WJkn1WvRHZeuTc6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Br3Ki6EEyFa2PAxdQf8WqfUuBaJiKGo8pmnFJQA8ocjwpezmzcSTT1MASxbpiUi7d8a4E7wMVGsvcQWUPMMiXeK",
  "key1": "3jGwgxgXQwWpteDSCPvyfYeDNYCoVWY2kAYD5e4cV897FcAmnbTpgQKMGi5w9GCLhZy4S8ZTov7H94LY2KCV1yFz",
  "key2": "ZGWUfEKuNR7HvHjS4yLbENwnd8BvLibpWeM7i1trvwppxf1GNuTSkCcnSxfoT52GEFc1FpYX1AaCUywsb9QWGyj",
  "key3": "52VMjXvyeFNr1pmrnyjVDndhaieYVPTXa7wmrYwwVgFFNaN1vra6McoabMKfpnovDLhfPyHvJP7sBpyBawUaFLLg",
  "key4": "FFcXaGgV1VfYAaNcgDdgqFYTy2ThEzkCerGkdK3ytQVqcCgorz9VgU89bZF8FN1Zv92KKYofaLQUi5wfXwwoCzh",
  "key5": "3S3yzysbTuEyZA4crSkZCaj1J8mheLFbK5h36HT32uwJSCk3qVQUckjBzdSGPkESRpehYzkBumRLof6K52KFKQW",
  "key6": "4Utcmw6bYwov9dCA7vRWRpaZfwn2reidN8vc9VF1JSngAdUiSbZofAyKMMuKmQ4J1mtzqRHsdNnBPDN1rACZyv84",
  "key7": "5isnCGYYcR6UYfrCQ6Mg5BMkmfcEGoijBhvnL8gG12nRMAwyB5snsEb5U7nxsjqUH4drhJFFoK2UErD68911cEdC",
  "key8": "4so7Gur4U5gwxjeBKTdF2HtsW3uvrvXYeUcUiV4VBQtTxp7zEzEjZhNhZskwub8RUZb76pAAzd4BQGrLpVCQ5pvr",
  "key9": "3wHDbdE6ptreMLmKgsfUfZ9RzGdihR7MJSX64CHCvRD9vyZT3LkssNsHQMdkZq6MFpCygvR6pkSQ8gRKBeiwoTrD",
  "key10": "5FyCfRo3eJht7Mosu8xeWXpCmNkS8kgF8pQDwkx5puwqdtHoga78yMzviA76oorWaqag1Gqdjwp1m5VxGLJXeVWm",
  "key11": "5jqJs3mqBgaUx3oJ6wonu5aotaF7BYZSPmV2h5CiuC5kZJsaC5VVdXVq993nhF3gb4jhdfd7Kepw4iyz7yDb8TLK",
  "key12": "HiVJzG3T5QKWUb9w3jW5TNwe6cpUCPPADPzUC59zaWZ3Wia5TZZ3nVpekD4zHBMu26T86SzH34VWbQe6vaycQ8q",
  "key13": "5AvLKwwkAzmBdbsfdqprNVr8EpY9AybdeNHfs2N28taJDMDg33cX9DYsSMbc2pyKuw6vGCeU2mNRwzEQUAKfgno3",
  "key14": "GitgCkLmK1pan77bKLZYo9xgr9GESBLGQ4aMQFJ9QQQEEeRhYTienpfMMS8ba5tHF7TD4iDugVqg2eBwkGPS4Kh",
  "key15": "Bob3WJvh8HP6HZJvHMadE8i6LLjvKAGgERb4rfBYkNjEzqPgzyK61hfFoXFCep4kwdPaso9BcM66tw3XjPtnD3p",
  "key16": "X948gKQGHxDkoann8xdVT2yFUkz8voiShySC5jfojd5cENk4gibw3PUqhd4zu56R12faBkGKWKbZc17P2rzwAZb",
  "key17": "53fSG2t2jMCrKuXebqUcYNKjp9XZ9eTWFtuQwCotWbC4hk67n3LthWVmzocmq9idBpYqBQfNuSrev3uLfrQUX4Gb",
  "key18": "414Yq4msGMZyTX6HED1dZyuoPvnoxrTw3D3Agfz7r4G2bLiYgf6YYuWTymYbmJViFzkk8pjuHY5A6dZWKDkYhuQq",
  "key19": "2HjXTaUbTv16aRHA66uXfYTEZPfUaVgPHfE6RVon4KgJd9A1jKEWf6zGNcpn5tLKoNfbeYg5fNyybY85LezRL1Ww",
  "key20": "5a7yUc7AxnQh6mbmn8Fx3ZKRpLWeMAa3cBwr38pzecAtcA5j8FZkUMEtZAH2jtzwTSx6amdoHAxFQGW2bkXKfMpR",
  "key21": "3rzp6TPmVAoAxTcbwbQx2eVuxHWebmf54NkfHzEfLJBjq3R5YX4CNSh1YmG1FUtGfbjAubQBEQh4RqvbLijCamLX",
  "key22": "2FXjvRA6yiJgKL2qBtCEDkWnQRCGymdnJpYt5Jfd1pS2BU6QVDMzKaAkuuVGYy15PUsQetQmcWtneVq9fMVngLR",
  "key23": "3An3zfg5i7VL8pHXAS6wdvHwN49cagMhrdHhRhYkH2tP4ispSeKRkvQqb8WcH6QSBsAD5tcM3M4TaMxgVC9DfqiY",
  "key24": "5nPfn4vNudPS681mo3UyL4PvTrwndA5X7dvbi2P9TEkH3SjwPFKhxzS5a9u6KT3HcmqaMdKUXFXFWzDCDezHH16i",
  "key25": "5pUtjBVTrKYMfE16gpqshFd5fdFUWBfvxyyXooeNyYURdxNwtQ2s2GtiXeBeyoAG7mLjmKPHsJ6MR3jfH5utep1q",
  "key26": "2w7s79R2J2QkifvXUA6DTfL2LZsonJWAvXppUVNmkR1nQtE4GUJ55jxQiP1DyJBD1aFMmcMt54YuXLGg1VN8sWKB",
  "key27": "5vmoJ7BGyCR4CrvQQH13Z5m9C77oWany5zWWKxZZn9eo6cA3jigiqrMz8BMG6zqgjVaiZi8quVw98HKCkShEBGKd",
  "key28": "5DtXeguz8yggAZ8jPo8J9K13hExyQe4oU2w2Zxn6Ys5BLLixVWitMovdnWBFt4tEZLQ3bcPWf6QuSztXMAX2JY75",
  "key29": "XHqZihYvaBq88hoYAEso5XRPmLLtMhtX1R7uUT672uKaLsaQYSup2BQWiBwUKJx1gZu9rusKCWCWQaJa3A18kz7",
  "key30": "5K8HvNAhS4BT38FGBna6omD6xvQsb2zSYGWsmrJKvD5JLtDvphCfeWqVWJ4xGqWbr4j7xWXEY5khnXdawYD1hDwR",
  "key31": "55UaPcvHy1JGTCVwfrvkBtiN2Pg2U4kxNkVpDegVZ8RnB1owNcmQqZC5aieuwZKQ5yj4bAehrEfvYzE6w9ocUBUe",
  "key32": "3Qj5mVo2L7cPdqKjjLrHHwsQVKZuxEVuQADySoRatFiNw3Xktc8A3GkTdinQ7a5LeRVKRxfpYfvq5A2xe258uHpi",
  "key33": "649tRLP9mFfizsHMrzCsFUkvYtmajKXDu2vit5eqjuaofWpPVbJBUmskk3rXvExSdGKSG1LnMGZrqty7QrqX5LWa",
  "key34": "Bvh84yCQ1U5DKbTCAZX66729eUkYSzDe5j4yN38MNNi1b6YyUX9oFRciLKj6Q9jVzKmtgsMfa4YP2Nhn7XvEn3y",
  "key35": "4XDZRJ7S6U4AwgVqCAmf2yBakJtkHYvvRpnAFgefSNx6LUvgE7dunmzEqSJNFDDNNLP5DnZPr9KtDHGjU8sr8yzF",
  "key36": "6orZh9hX3GxspsF9hf1pyBpQyz6atdLjQayvA7otAR7cVSW2M8HZFegLdRS3m7gNfRT9woABsJU9Ssqsw3aQYni"
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
