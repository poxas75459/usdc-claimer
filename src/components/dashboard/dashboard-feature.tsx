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
    "5nYtZ3re6Gi6bj4hgQ3fJwHmQsRP7Agg8CtzGuQZQ4MbUcNwjVwnmDJtkUzaaJN2a8BqsHKTawQgX21ZTJ9KJLNe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "24FRzh3rZzf5rXweWu2Jp2ayTjCd41E4izhTh9Sx2KSt65PMyJoXRgLximddtLiZkRWgoQBYBBemAbXFQBP3G8eC",
  "key1": "2wxrgKL3bjPtLsSa5Bq1dkLhNBSYvpTCHBTHKFbsRU2rZYq688fSdTJppztqrF9DCCEvKhpmDiY1j3maMAR1x2PB",
  "key2": "46D7WTeLMpbN7GE5M8YoUFjJN1z4xrVKueegsf2Ez4zXshbZDBS9FKkHY9XpMQ4Qpq9kE9XodDymmYCrcmL2LGeL",
  "key3": "4UHLgmPfEePzqUt8RMNVaZwY2quux8bHdGxxuykLkUEEaLDZgX6TUaiYn5YGGqYUB1BjYE5YQsEWm57nAbks3HmV",
  "key4": "36WoxMa9gV8jR36QqhsiSkFh5rDmRncvuLGaxcUaXxKJw8PYG9CYXin8v2p52uZhKBqdutJawgFUzF2XqZ7D2eV9",
  "key5": "5pTeQGWTS9YgLzgxc3ST7roJCSYJvBuFaLnys27Gea5v7Jx8ywnSxtZ1euYrHpX1KbqHWRBroB3vxiNXvUXmmM9X",
  "key6": "3mmVoKjubgqtouCZJLKch5PSzoAYzLRkk9KQf3yeQHfewZ3QA4iG7eQQfirNdUzmXQAVoSHaF1mv2wmorbPDSVhW",
  "key7": "WotssizsMHgGrZRJAiYcBWYUenwpSS45Rjk3NGHu5JWUYacM92mhzk6PxnCtPphjJq2MtTnGdVmqqhWYELkp85q",
  "key8": "4QgAQSL9xi3FUxLA8ctdwf5W1vGmzeh4HBtqi6fSNpGW8AACnH5LsztoHJgN7SVTKvu69dae2tfPwsbgHd5XHZcQ",
  "key9": "66GjRhqFB4KA1FAxrhgHTDdC2a8jaQLkCocr7esJd6w35BREd3gqMH1TTVbpMtVwZ3PhRVJ4dbDd6ZQdSVDF6fKZ",
  "key10": "7iWZoBuL67jEBjb3cVDnfei3Yy71LnJusdpsLrWsqUkTSrrvCb1864R3eXhJKvLSn8Z2XijidPV4KG6QYFFktxT",
  "key11": "4RUAVKbb225sJHwG7cVcXgU5VHYXnYqABjCXrdiUt7EeJzacwuSoCKz3y1aYcBzTdRYDRKui3jCaqwp9MT8E7NXZ",
  "key12": "24TojJmXd6f9GiyFzTHAwaEgg26TVrroraLtLWtNQ4KCZtUBK573KEv2qoY9KDu7nZQ95HngbNN6cZxthz7qsa1v",
  "key13": "2nbkFahWR2dxqZ6zkDM3Hf7mjBN7Vop21D5LuTjZaFCLzPMapU3Yq9hAj5JWhfySvVqwCgnjaDcCs3TuSTrRKyku",
  "key14": "2kJW2NPZ5DHmCXWLYeHaX81MCi9JMLdbf7df2KHnxprMCW47PmftGMaGPhunZcmtFmMzFixuEyVmKRfFEKFYPvMp",
  "key15": "3pGMFdpYCmKCQXm23nxfNawWU1Bijyp3WfYx2g72RGnjsUtcKLCo1yT5w96kziJmRZxb5P8VQKTKDFDoTvjQYtmR",
  "key16": "4GTRG3Twm2Jjb5wb9VjhzRWZdZMaV3gsQrX3HgABsh1reZKtQuqZ78xKyjECc3yzam18LqNqivDahyhmdokZqPLa",
  "key17": "HGzU9UkhxoodM4hcM8NBj6SMeWcbdfHDRBdon3pvXcr7VUjDYtBPWfGi9zhBx4hNDv2tUunG38tokF8vtz41nHW",
  "key18": "3pTr6Ahd75KiEXEve4XnwQZaNRmFnMc95CrGEHGGfAYjVw4G2CmRJfFYjQig1s7ZQJ4KBdNUXYbQwJGxTPRPbaXM",
  "key19": "4F3UckxcAmUC6v5MhnjSbxu1WfJSDr8dGR34fDEmReM1vFGjsykBvzHsjRTfF5dYd3rXLRagvQhw8p8RqRbfU3aC",
  "key20": "3arDuD3vQc5MLPNjUnDp8EkfUq7Upj7mDxVBb5hmUwzLajYArmdYN8EBYKywrezrLGVxp26ZWhHTvWZa1TGxov6a",
  "key21": "RLtpbGoyFjdoceuEsC7pGUkDkN4qnqYtmQU1v3LYTeRPGWwrwfHPboEcfV6uAexVxZhvJSJs53HFNZC8WNMUKgT",
  "key22": "bguhMZvpZpx3DS4ysswkvorH598ysPZWXpRoAbtZ4i4RbUoh3kKhb95WEGDnK8oaXjifVtMzEdAnmyxaL3ZptAP",
  "key23": "c6UNjvUB9mtJkwCdAn4Ly4vTGgWwKuvaMUm4TG3hCeQFqKUxyZzGaYhtyNhoLNDrpk9z6GBTQQX3wVpR3jwEqq1",
  "key24": "2riqHoBKsVbGyUAFrsV4JRgQzANTHn9LdrBzuVW3NtzYBZCsLikom3oqPRibxvobFZDag2NzeCxL3vjeyFtMw3F",
  "key25": "5XCyhWgkK7LHZrRPkWhuDEfFVSUqhBySLDSWsKmQR3SLin7M3cHR8cVdB9k9PRYpWjzjtvSq1FC9RYGzwHcA7VCZ",
  "key26": "5tuZkJGx3xBo59HqWEaQarbQq5JMxRRJ7XMqu8SJf7VLrgRa2BijPPatj4xtAfBRGNt5c8V3zfQouSVy6qHaiRYD",
  "key27": "5fESwZZ3wAC2aqndVGLiWfFWnZFzexFvogtNsAEcg7gDpgKw94mjDKmgojf9EYWUJsSZoqh3wq9kbvbKypGUKUac",
  "key28": "5mASdndwgcHiB3hzWZxZXqB4SejJ8ekTj5x1L8M3qwTj5nL8RA3fgK9G1t6CknFgJbTtaU9u2NUQuVzgcqcW5eup",
  "key29": "21hLkfpWsPiv7cU6hSYTsiiYnW7pX1EQq4LrCibHoY3YdnAFj7BoA7tzrx9iA1EtMSedkdCTiqSBh8bpzLJozRX1",
  "key30": "UfLixjMSAp7f8mNTHyzqDvjD7N7k7xx9B7r9j4ysVu362oomvCR85ge1ihhjFtZiBFKyTbziSBgtjgBvzZMCGTf",
  "key31": "43jeLi3d3brGAQyosasHdJz7Esmy5MzQcYaLTnHB9mX1ktmwqYaFUWdrTts6WdCYGRYzK8Kx89m4PP3WvGosiWfo",
  "key32": "29HTp2K4f6aWuwJjFYddqKoHiQ1nqDMyeitvXeEu4uaeTgTj9jVPsC7Kost2mEsh9dvQfQkF7eTPYVbuoEoD4NrQ",
  "key33": "3Ssn221kPPMr9NdXTT1cQCGQtkoqkqZ28WYZA33645Ramur5n4ykxc3yrcQBoPFgihWimqzZuBfXXj1CFgpnjNDw",
  "key34": "457ZCXKy5WSxCzof6GeyDVatKhe4zGjg33mnGkLshPgz4ihwiLBGzUMH46SfpmCwpatcjFegvxcUSmMBMfsbQmJM",
  "key35": "4BZPGAjDMEXoTbz9XvxiTdk9m9wDne6RURs2AF587ru9dM8YQgnGU46jHjUE6nXKyTNoVcei3bWs9bbahsHPVuCH",
  "key36": "3puq16g5K4t79AGFoWh9nuCnYxCYRVbBmDhTvuPrriSr8w5fGpQSnJo6Mc3a1nHPHXUKhjbNf2BYkWMVVAb1BB7n",
  "key37": "21w2ZMzEMWoDhMJTbqQLwtJ3J8VZAba3SkVXavD7dH5WG3vuNLkZBebWRSuxKGr19BGjZfRxvxE6iZeXssWUd1eL",
  "key38": "2pGh5Tbhnqzt3t8g6uL5duXgC8TbkuMv88zK2vN8didm6CKaFzSvQ7hNWovJaVSRyKgmb8dvXdsYiwzWs5gvnGrD",
  "key39": "wotxYN6W5aotpLnabhwSNSiUCqDixHqZFcNHiun9CTQTvgHZ1DfMuJoagEWBbbtH1cCPgQJ72aBdLaFpdH9hBxg",
  "key40": "5xwGxwD7AsR7VnEAzwD6YWrXJEkJMKDWM8gx4QisTzHiTsDjus67Ke9P7agXh4sWFH52GFgBXPr76gKztYXpu6KC",
  "key41": "48QvSthC1W9iKsb5vJ6boBLXhmiMoWvFuWXp7izfr7M9VRGAh6yZnEgNVWpHFJfVfedtthQbg6r39quBzDsMkz6i",
  "key42": "58LaUNWV3HaijpWzEwF2AuXGyAWFSHCmoG2QWi2xfCFdGoE7jC133eppoD661WpNVKkSdzadvdieG6Zte5hCTFaG",
  "key43": "4mPmZ1cg3osC1JTD5XLFEi3rCTUh8LAiPvTxW1xY4yWAH2mv4S1vnYcToXu136R6qaDGfdVpxnuLUvQ5asq68tWu",
  "key44": "3ooJgJAKHXoCNAytNf5eYD1CfxtLzL3HSknWuhqMMNyAoYr5VFRyFHNNeETJJYNVJwrQZjXSQpf8JY1YQpvwgbcg",
  "key45": "dawm1FjnHhqThGQGL69E2pvUL23U5BjB2sHn8g34iDP9TCLxE55p1d73bU9jbDCBH98LudFj2iwjg8LJypEkc2C",
  "key46": "4XFDkBWhnMYQPAi51QwjWacTFXh9dYmUfHiZYwextqUfhvJduM4wrn2eAydEQwbdZQdeokiM9bEifkd6DZE7ub1R"
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
