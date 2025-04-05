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
    "tXUfNnSdNKgikkBSbQT4CJx1pCyvr61aM16GFxWSZeDjBpcUaDiWKkpvgCAZkyfUBYgqiDhcuErpyU1BAA8Jpd4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "37ZYwgRLbN7ftvhfFwJgC8hPu5ZtvjRj5ubW8ryzh2oZNcXtZHTBT1s5wKbsKNhFYAoYVHvQvCJj3J3NEeF5xRu7",
  "key1": "UZNPCkaVPjpQW7hjWVBuKx5kdchavuJjamCYiWypJhFBx7FY2mjiavFmi4MMt2TC2Qa8MVLdt7i9MWLJJSM3G4J",
  "key2": "ohwphapB9J8Ue1jKktM99hZ4hibW4MsNHP2iffwHx8Q8xTHeZ1bszcbhiYp24Va5pb49aRaKkP8ig3QRKYxNCju",
  "key3": "3G1bV3Vm1gtPwxH8ZhMU2mR4J73khfYRaeJgMY6d2AypgVszheGjXw1fL2du5yPz7SY4fSDcJQh6QyPshenYpsK9",
  "key4": "3okgbKYAC4n8F62fGcg4phFXMFZ1XxVomYrTHSCBoTikTBWH7sgRDThZAcTiAXDjDqfKFP5YA5bW6UHwYUvtatUF",
  "key5": "4PtxNjEQvnNC7NRTMWy5cXAqr7v9TSdcga2dfEYhczccHw3EJR7k79e2TtQXSLQtZK1J68EBCDXizL5ey4H93bce",
  "key6": "5E9bnVDfPk3Fg13VGvVXTtRiJAUTWLHjxbJMn55c4y2AcR41gM3ujAsNdEg9DfPG8Fcs36W2LQWkjqUMdce7fGZw",
  "key7": "5AjPybhGjrYoc5TvKgTekt73wZtyd1YExykA2L6gBB7E2Xx7x4uvBHBoATBz7CYgTBoD6vspr8jJFcq3gw6Ya2dQ",
  "key8": "VrfX2dHbgoGtE8uzQWgkXRPnGHBT4NqYREkabMkHkmfodiv9gFuQevz1jo4vYtFCXA7tCVsV3wZB2g3qyoywWoS",
  "key9": "4UiD68xnjzuNThVogbFYnJsp5cVrbE7z5eSVTAQnepHofKcDE5reHwYyykUxiwcTeTbqDwCbek8otmncMxczLJZr",
  "key10": "3tTxijWvzmTtb4zGMr8QYKsFq46ctQcbfvjz1V8hXnudfv8MMW7x7q6JSZM5Y77c15WimSJWtNQXw235Sa5Dgj99",
  "key11": "65yoBEBeBvFP43ghXQMNiphSfBLgGptNrmMwLtjrVaLc38jLLWFTBfYKRQFjViRsdeKEiEedoACpLRmFHRcqZgfY",
  "key12": "49e2nYAoF7XSsH9MNR2vUi4HmoY5cK7MoZk4bwrJSATeeKtLX5tFPnv4arUu3radTLCZPpEh6aw9eCUnhLoxF14E",
  "key13": "29Aav4yRLtjb9bitJjUoEshYxa1ZQz7ZCsaz24D6aMad9pU9sVVQqgddh6hdWtZ84ndSjRde4wj1CxmRCesi1cHM",
  "key14": "8DBhmHt1x9K8cEf3JBReFvoev96XWdDbTnbuNJFuysEgtsEK4jTwfTkZ7vJeQCyMv5UCEm2mrUWKxAGa34ihtnV",
  "key15": "3WMAbcUW9T74h45jyJ7X2CmJ21nW4189HhWPmuic5L4G3HsN8k7ySqMAM4CNpuyVuyDvr2gHCsJg8eCQn4CY2JMj",
  "key16": "2S72kQiVGqGq3ArKLSCsdjfit4vqrq8wz9d78DrS6riWcTnJrGuWmiTbokgbwiiajkRWgLorGRbHiZXcpVP6DbH3",
  "key17": "5KtDjXYV5V69uATLuXYCyfSZ5U1vqdZwseiBDXVZrFR6QVuaG6K6ZUhvcoKTHdJGdTC76jjBJibUegLeM4zGKBDM",
  "key18": "4oZPYjunEQU6o66AMhy4tbxHPepSpQNpv69ZVCe8WJHVkkb5xikb1xKgNG1EcvRyUvbzEmXmTmwCksZdD9vzbBRW",
  "key19": "4ywSQDpcY1jTbeHM4YQtAb3mBpzLqk5Gws1Ds25tJeRjbFHHUWeC75GfdFYeJDGAYk3r8QAxXYYhWeTdpUYNZ1sv",
  "key20": "WVaZ51TT1fW3SBcCGniAMoNNgMWr8fE5tBEQRQcvdezrKidcuexiqTAEuik2eTnbEewrZF3fNK9rAzP2Hywhn5u",
  "key21": "53nPYGi1RxJ6qWC66NB5xuKfz6dD3sh13Bhb75zZeb9Sp1TceLjQ34G1yUGwNVrH5RPMvHKrKtm1Cb699BoPVH4o",
  "key22": "5nShr5Z1AmMspQDHRWucwvwRn8WymQsaqYiNs4rpTdfLdDJuyh62rabBcryvVwpTytbizYQfsHfttv62Dd3sWw3F",
  "key23": "4Fz3Ag4kPcTqm4fvWmtPHe42ZLd9NVAdc4BNQdy3z6EJDx5qYYAXzsT5BTBENuw4iRfB9FvVxDtHQ53E1h3YUfUM",
  "key24": "64VyPtTFiN51fvVDBrqVuBxUwAvtg3rF5zgcQWuXKnkMpUbKb64FieTGsVZYm8YvA9cHftTxT2R7g1PFo5MnwHzq",
  "key25": "39AhZMLc6rrbPNvEeygtYWH1AicBXcoa62VCtwWvoiyJKQ74ckUHan5h98a5UwL2mKdnAQuLkC7y2MmnvBUTsLxU",
  "key26": "4to1VYtuoqD5QGCGJkogYYbN8HKswTtJnN5FoJjgxM3PrhsJb2xdmSyQQyyhhSCvTH6p8y4p2BDXwvMpPZ1s1758",
  "key27": "5Jnmg4tuqkRBYphJCCx4k5zbMHGNoiFLzJXANyuiKG9MtMyNCALxpc4WQDCbeXGXDJouytmwq4saCqtZqGCdiTL9",
  "key28": "5FvbopUr14zAVcCasLUvyq9xjBhmGXrV3XhyHNcCkzPM6LHpZyJ8jWtvaLv21asChTn4nt2sAC8Ah1YEn96xzFTG"
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
