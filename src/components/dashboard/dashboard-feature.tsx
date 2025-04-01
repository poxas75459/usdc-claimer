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
    "2gwqLrWCA2ZgnMDXsSNqFd9T9r8cByxc4SvfEXAZ27CLzfvUhPLCWGNxTc1bXEWAVrFCkFsGZeMqsTyFm1HD5ES2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3fYFAt3eYkq8QE71fA4TEV8A9vy74ofocZrKjCtp17XQtJzu6WNo7ppcLPtUbMkfSi2hy3r9ufiwV32WRfLU3Apk",
  "key1": "2URBsvJ9j1dLFXcMLpEBAyhwzUW1fY1xRV5UdntTR3G3qaBhrvsthVWYPPLUxRJX9x5zWHniWR2sP1rzktd1J44K",
  "key2": "3hHTmiKCmD1ZLuAPrkK9pcP2HWUGt86EhW1SgmSsKr56kY4MRGfDJK2uLb3iUxehZj4y7Vmf7V9DF9e4EafZkm65",
  "key3": "5J2im7SSq1HM3fGJV6JxrkeXhsoifZSnBsU1E7PhRY6K5CrRCLdct8E275W2wbQRJ3HK9GZa43yfqziSpkeGYh6",
  "key4": "2Wxt3yt9uiikLDL7dcfNa4JxTEAqPn7ZwX3gesjF3hPTXVjt97pQgCozxpDND47QFSHDvfemMDW7NJJamBZYgWpM",
  "key5": "4Y1aR7Bu3SUsmG5Cs3HPJ8WcavdXhB3e1iX9Xrhq5XgTfDdpS8hE4evoy4aHT2SrhZy1Zy48opfMKe7M8x1oZixS",
  "key6": "GobPNfmg1JrWtykg2mbXxuBQ2HSCzddG1MxnycFQ5be1dkqrqeS5vkGKEL4EzJ4JsbUzrXYZREVY5cmym9dLCku",
  "key7": "5ein78DPBw1dqdVuCqoZbLx9SWsyKW86xKDP4aCY2SHTaE5MhobAhxpgNwLmU4SJ1VoW6ZgzHfaEZNpv3FsMGT8W",
  "key8": "58Ceg1VpzyAsKYPjFoZFZ6fs46eGJ7p5AT7yzpvv4bAWaiQ4z42SjwXhMpSWvt34nuGxeFP8etyvWaBxQsmMorLy",
  "key9": "3Upt7uxCvDMegXiPwjAsyPUqSnVTjjjaBHTfZH5aaKsrMHaegERrRCVuU8WwJZsqgQYnXwPFPrwAqbkdr2JadJYD",
  "key10": "2mbQ4NkcyA7wTNJpYpsMdhdTS8fWv8uszLpd2ufgth5SA3R5kGDetrXp1TpE8B7z6eYe9psMNwVDSf3keDBtb1F3",
  "key11": "3JVAJ2chSV3X7dYBR5FzAuzYUrZRuN8ui1uyiUTjvbQQQ8YqrWmowzRUyiR3w9QsWbfcxgW9e1NNYu6MH9BMoV55",
  "key12": "2BkkdzxWv3pgL2EesTmDRvnnWLEYvputzRvVEFsvAibmseARTRSMPo4y6GhNg6QkomXFMNVLZ6Ej81EDNtimDk6Z",
  "key13": "66Xzq3Pybm5aDkJSM3Gw1vv5ejPkpu5jrweUD6tmAoJ5TwPZuCzwqxWNSQ3quMLCCV5zaEwj3BNNyjtD9ctTjjT1",
  "key14": "QjMzaUocPrKRR64mgh8mRsXEA9SoCdqctUGq33xyzCTUz9zdNcf6py6dY3ELAqcgChe9B37h944sAW8sEXGhDNM",
  "key15": "4V8oatqfduYxs1Tqq57vkMP3Bz5NYJk818uaHzjbYou9chVpGbCWdp29bgpTNCZ4KBFdYV9MSxzeLWn3d2QSvbG6",
  "key16": "46J2gTirug7hbmDh8ukE9G8uRvNCdwLTE3xLHoco9dC75cEoJc9JRcPhwxxpeUnPTBbA9dPgq2fcFSUbbnuqMUQV",
  "key17": "4ht3Buzo1swdUkWDVQyHUancfNirABnY99gH6JYaQyysCmhNSLDF6G3whm6wbGJNFYVBWxcDhTFvt7AoZSSvwfv5",
  "key18": "46rNHU62pU63QHbZjRfvx6sKaqFwiYKUAKjQFaK3ZKBjSMzeEQxtgRY9eVAXQp9W9yXbM1NfDHzNDS7QMADbsy7e",
  "key19": "3w1exK26YXsGFSRM4GNCjfg7nB9JVZL55CuxnKQxvQe1tQvhC46K6pCQ6GEUYn9jiaoHDAKtRGGB9N2fFnT4qFvG",
  "key20": "3Jbdk86HUENDQ6H86HTERxEbHJLQ6v6jb7vdjyuSczuNrcjRVES8ptdYXZj5hdUWj5SeWkiekAEdWP2ibxUMNtLB",
  "key21": "2EfiaxU8U8oFyWYoE6brzbwehPZESn3UajoMZnebgWMfwVFtALqVn5YpF6nt6CPKz69v4ZqZj9BF75pqbJebfWph",
  "key22": "2QGGS1EtspjcV923MSydW4Ng4JyLy2X47VzhQMdyKoCb1owrkTYDz2TTxe5hruoWLF6t7MvcSVaagMi5Sgmpv7EM",
  "key23": "2NbuJBqaqiys9hi9ir5N8kzMf89fBSdvV7MaUWEaAjXTRzgzUPhz5K8dzoVzBfRv2enHwdVez5zkpwToi8hRkdck",
  "key24": "4kEjipXKi7yGvFb3KVbxStTBfFvMi2VavBQ4vuEbiPJWKep6HDEu8bT9hL9ynFdong4jy3e1H1mxVSHK6n7gGwPE",
  "key25": "CnRk839YJdBRCVRxPJ12yaS1VRT3RNYUbPDwwRKzDXTjuUZ4eppqupUZcS37oDRsumr6UkxHaDvG42hUFJhuyaV",
  "key26": "4CuYNWUh6ECLLBRX49KgqzXqihwxZA76XAuzL9atwJvcwS2NpmT3gzzZZqpknMuH1spn9uBBCuqhzqdt7VNbYgGq",
  "key27": "62i3L3ZPNQGt5Wjd8y25JG3PwbwbRkUGJEfTWiwdfzzqLXLu54eybuyk4PZXk6tTrofcgFdVPRGcUVZCC21PweSC",
  "key28": "zZVewncs93vvHqjkzywgCYGGkPJBc13A4sXKDBt4qDUzzuXTLEJcA1TYKC7Tfni6re4FN86zdf85oXr85bYgbBf",
  "key29": "3R1DzsUWmPQszpZY7VDD1HF1hMubfXvtFqirqAYyAZQZUoYgGPQNz91gRACo2R4E6Kib8scVLU6HfeoE75deNDbj",
  "key30": "2jpB5gwte1TPqDZVrRktGmtYbUBoTQJHCWS5pB8SsEqLntP4qBttWuVraUnQXy1kScCRsdWokabMnb49HsF5dgnh",
  "key31": "5p6iUZmECWHMhM3U8di5zdhDFL1Besv8provLKBg6USoKeTKZ2ncMWU6JQsY15v4JBt7C2MNQ8njcAtbiXMfnZdj",
  "key32": "25g6DLytqSHkCWXGY5dX3zpWpLsm83nn9n23ysEEsdxs31HKPbYp6L9BYyrK6XAbPWcp3th9SZAVVSx7G5RKChx6",
  "key33": "iXo89uNjdBAi9K3BJifkQCk71vYfDyNfhH41Fywdfbm7dToCJ3FsfFPE8JJrcQAd3FKxqy2k3BUKGtbXv3U4gh9",
  "key34": "5VZWpsc1J9Mdh6nwQFsnmkW8aHpvzz8JymZ7ZLKQbvmibRdUD5hJVMN8Qzvh7cKWos1pCHUp7yMN3AVFFiXnG2bg",
  "key35": "2Luw4VwGWzDKbQsPcrwJcjLAQhrMNtrTXcYvYixh432QVGFThXDWhxhfMjGLc8vt4Sw6pmBE8EBwweEtQkpGN2J2",
  "key36": "2jgQzciW6gi9MjrNiPyfxSYruRSgFB7F7L4TDkh1YE7gEnJYLtw8a1a3rd4k4vRciE5s5uvRGTmPqXzKsbZNgEKW",
  "key37": "3qcvkLz2YUT7U7uXfHYHuzx7HjHJcR5oJijX7kifJZ8DCyA2Xbj4r3p5TDpMT1vtgbYn3AtpG8Lxe21oVQi42MBt",
  "key38": "5JDPPpH45gbQiMXB8aKaeY3pt9JGXnRPxs9gLCN6r818w7BDg7SSH1dtyabJJq3VPV42koAnd9KDsV3H5fh9yeNR",
  "key39": "3JLAMvgUnNqMgT7FuCXuSJWKAVRS8k6dPG8NjGgStUPV6fWXVnaHVRwDCxQCqjHjKy9EnEJupP2aUM6BpqpDsTYD",
  "key40": "3mzunxR2wnkSeu2Tizsxpwaanps37JT7SDmDC64D1yaPGwMshJnadZWnr9bNbzr26XUqBqiHsLGz2YbyxdR3FfUV",
  "key41": "58bev7uPW82PkTkbz6Degc8VzZbAupN6oUgUV44FDQJoi4XZ92j8Zs6J7hX1XyyTsSrppHS3k8JrNcvK8Zekgwgz",
  "key42": "mQqKHj6cFnH6SkivWWNE9X53iyHzuxEmRWJcB2sRLSxM6DpKovnij7niqPq156rUN21zdWkrJufteokuXnYBRUt",
  "key43": "5UfnMZbzDtWs7RDwdcGz71in1SLBcfddBMUKrx5KMWykVX1Sg3yWihphi6sYAKoTSCrDoSJdkGGdhJ6o97B4TEx9",
  "key44": "2dT914kCvcSSQjyksC3ceyQk9H2AZSRLXsQdGM1hBmTNEaiow9ZmuBYEZxSsKi9XyH3qAoDxD9r4piKy7omPqeak",
  "key45": "e417a6As3Yw2FQRxCsbbHCS3wvKKiVt5Z3N9yd8ec17ouHS82F6gK1SnA5YPZGHbZufaP8ehjVMTtRLj8xoq59N"
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
