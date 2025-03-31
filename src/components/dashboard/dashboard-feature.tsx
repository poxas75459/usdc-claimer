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
    "3FK2FjRHZ1Jf29mzRq1dJUMVRWExt2T4hhSgu4opj48TYtEpGuWKZjX7HiFHqKYdaWzeBMwKqF57yXYuQPSnSKTW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2qATJDLMzopWmRo2wpwRuoCscfBGYV13YP6tP4NB6hvwTvKHuqVPcEdFgSCcusKmgq9YZx6DyVM13zCigSHEvLYy",
  "key1": "66kxAH2Dk65ew9DadFUTUA1mQF8m25pyQ9wDUkRZf6Wt4AyZD18PRQUat8yP4FZFXM4u2ygBrwdL3E8k8WTGSnQY",
  "key2": "3ZWAg68n4RTEH4HkzoRjFSRW9hukdNpu8dAnKRMd12P5gNi2kp41zHgzZwarhfsA1LXM2zJDVizrsgz86m2nn5WV",
  "key3": "HwBamKZqwjg4QuZk9XakWaqqxw65VwAAdswiy9ZC47H9Qbmuqa5fvXjphSAydPWKSt31HDCvfZPjrkM3L52bZZU",
  "key4": "59bPnQrsXxHVbb6j1zvy4EddqQubuknF4sZ4dwxVjDrrMJtD4x4haQ9zFqkgtfK9ypvUMymKXsteaLLMKCzeZNsy",
  "key5": "25JKMQPQdcG7bw3KqxLRCBE99oTUT4xHoGdY8xhghtrTFFYWYfMrGN4JEif26nx6vbP9z1J6dZiuSFsKsRM1Uxgn",
  "key6": "2VAA99vxZami9FqEePL3mRseHNWQTiVgTCVRcaZMhW3TPz7xBCJUx92qhMDtoJdcfDMkDidkErLVWKBpps9sWw7S",
  "key7": "2qLNMhkkEE6AXQbswnNKuDrxaGoEAVdMhPnxBbJJwuokc4Qhcu7tTuCyb1AYzvTN1diUWr9m3bYbW8oPGysumhvS",
  "key8": "4vVaBeUYoF9fozeYKfLkmFdwLjqq1VmvPsuQ3eT2LygfgEEby6JZ9Cq4jBVnMTWcLPh5rDJVWm5aoySMVLkn1fYk",
  "key9": "uhJEBzTWxyc3fNp1ZxxyHLwNUTJWhSqra64c5hkgrKQHFgBGSy2y6NbMpn767eDtyqHjmRTUYHZYGhKzkaWxnNP",
  "key10": "4YMrLXroHB1ggLzpdaNCdKHby8dc5kWiraxG7nozjjcx4aFUJ6LJyvV9B5tNAiR7VVYmMrLTTksJsjzFQ2EuadNC",
  "key11": "XcytAK3HCS39jRgZNLaEQ2iAVgYYPf7GFT6CGPpPgmKSvyzipm5KHuqRhkryB6p15M1aKr9MoJjvy7S4UsTtzZn",
  "key12": "4gPutc8Jt8N68g3T1uNoo3HmN5Qe31TP67NTVpLxSnqKroPJULE4RLJyudzj2Rz2wxw87GjBK33P4a7RgtYYsxTD",
  "key13": "5LGYvTMg3RwLbXxrmMaYxQEDvFsYkjUXo4fKVzNFWQdzqw1FWCaJCDXzDfiHBvPxDeEaHRYTaWd2vu35P3vMhFoa",
  "key14": "3ykVmbqbk9zXVpgojFEL469WyCTyMaTpEheRqmPCB2UkM5gc9GWALsSqk2PAASavDvMnKbb9TWXsnFWR6UJybT2y",
  "key15": "2DQWRo8sxffhUkQ9e9bL4CveubW14AR9GnzEFtZ9UR5upe7nP6nZUKP72UuQMsSz8Uipa99PJsEkPgdqVdk6PrGt",
  "key16": "272vYTyAUjqiaxP2D5A9c38jjLNtGvnMY284DrJVW6iDEg5Xs92YDP9wDGNcVxiSJYop8tMzmoojnV5E8WmMhyAP",
  "key17": "2iuLZw3XaTGmfkBtskuLWfJizBmZtyJRFjBbaLRXj3s75ayHg1J4vmhGU1UC5oKq56kbpBbNJWNYLTwHn79xsAhg",
  "key18": "2uuZ1DHsd34aj8oaVaspQeRhFKV1BcMQ37kVCNy7sZB5huDfovw8Eb5BEGfpaDnLQJTWUBPNpBNHEDYtkedtqahT",
  "key19": "2rDWSG6E3dLRp2NNqy9AzCLHg7y4RexRe593f5tuHvtBChLZHAZoukh9hWNnivB4kWuWUx3DnQdkRnZxMyEJJNQe",
  "key20": "4JVRGRGWt6qqogzJpSUSBbZvBCx9gV8pxc4tDK8aufVwmdzv1dtTWzwmriiXgBBcUr92De9KBfNmyUndLnpsbKDq",
  "key21": "4ujxjxfPadWXkwLZhnZBoS7eKQGUJRRJ1RG4FCyQEiPzs1hvS7Kdu1B27SKLJRwWyCyER7etG7XABmS2SEAmDFNi",
  "key22": "9hcd3SwWsBYj8rMmfk6HA2VupUCxjD26HwrQkQs3oMqz9Z2vPLFoR4eLhzNvSqKFDt98zjcNX9BUYFtgfNxam2s",
  "key23": "q9Z24mLRdgm3hqWq9Ct7BagtHQpNzrRi2DtmbqQqwXEwoGQWpwSnCv3exmYX2V4NjFxNMsLJru1EAyaUARetr9Z",
  "key24": "3Tf7phxdGGVBjvwviZhGoBNgdi2UwuEwky8M8JgXdeXXz85SFBRob2Zh1w8uNmR9bQuzqedcWqHxfs3RYe3zhnKN",
  "key25": "2Q93Y9cmdNRXJnzg1mAFJd5iuR32YPhsUyMzccJ12QF8wp9Pa9kfcTYvF8Gg7gZjNjYVES3JyLJPgWyPm57QWBwL",
  "key26": "3Fbe4z6TCtZq1e4giYWR1cp1MYe7Ub2qdXLJvRTj35CJ3tbqrY4ZFHsWgTaAZcaUyDyYvQ5M7pBFbkDj4sPYBsqg",
  "key27": "62GG87a4B5YbmvGwvBeQEcAVWnNjDZmkTgPDREyinZ948LLSELBCxU96RetE1suAXLLTZYqT2v7vGPTxTtgu8Dqf",
  "key28": "kiujRFy1Pu2DyxCqByHyMAYfQVy2RTdttBGTAbAo5ApJCTBbEo2NmwWVDw3WHibrVAYWVHp3kdhXBWBmc3Axb5N",
  "key29": "4Krz1AtdakmnMUHzGB1heheLsxt2XgAo7kEoRPKM1i4LfPhukV2hAFF8hDhbNih5x1BHUox9eJXHGKz3euaSzCkA",
  "key30": "51k5aJFWrnd2SUQhWYfHA9G9BVHL1fujFPPYg6BSnEG5Tj6noxrLLZwCHEGWMp28NLp9pDSWRQXtHondSD82dGyW",
  "key31": "5xkscR2h26cPQTEzc7DzxVYcEhgLR3pti8DuY9KNLSZX2az9hh2QM8yXkCLajg9JdF9Nhkty7pdoxz2dnhcka4w1",
  "key32": "3TBtL3rvhYZf7kaxrukjoiwbje36cmHx2mFKGR4XjJgjfu4dKmGaxhLkSzvHH74EghxJ4mHxomqQzJFCG7Zirjaw",
  "key33": "TAAGaXW9YmG2Zvtr6uZPHSUE4iFKnoPq2oi3env6CeAWiMZmnng3fZG4MS4cDCDX2t4VcBCrGX77o4jpqnPSbpZ",
  "key34": "3AJW2VaPjM8BCGTrHmfyTBts573hqgtJd7AtYKEw4TrcC3TCDuibmiuZhqDZfhTucFGokTVmnt9tdPpy3yd4JbpR",
  "key35": "3Hi7mgm7MsK4FtgGNYq1DEDmC3koQpT9UxQSyVvE1an6ubQVrXZ11a5tzPiCaew7EA9eXdRtQm7cGZBkSrF7ryBP",
  "key36": "fLfwJQVFHZDMaBn4UJs9sCi9iHzPA4o6pjTbk4GcoHvVYXu3PsNmXgUfVnx2dpdLmDdbrcMtAQF512biB3AMCfN",
  "key37": "3rYGYLaDJkUGEdqnNdmosaPTt5qaGz2qNBLpGbcyAZgwgUjpzMpWEbNDjG8xrKCNsgoMBjfnKEXp3TknHAZGiNKZ",
  "key38": "2WPGjFarCX13ii9fyZim2E3d9kPi97AYoLriTJLeMTdT7dR1PwKoavGTTbRMYcj1yUVyJr6iCdmiuMGDMKcRNCyU",
  "key39": "3f1uYQKzXALBdTukPQqJoV28G7NQcivjc3pZ7QGg9K2dnLseL9b6p2QfScFZUDixgonfSqkuBcULwWXMZ7Lty2Yr",
  "key40": "2MYL76gk8d4RambDeLvfpRf4VmoeBw7VCeSeiZnz9csiqfeBM9d5FTPUYz1QL6GyydrKSM39fyMPSPsdedZtEQrL",
  "key41": "rr43Bw5z7DPv15RVRe3pXeAopNLFxZwj5RAeZ3h1qosPbw1hDnyhEgrdd1jQDwdPjYXVoN6tHe5wqBZw4HNvDZ8",
  "key42": "VjxTXYdTcYbwWQb2gtqAVo9YpFgyqRPjMdrYpNkFCjD2dQC7d5gQT8uLDyjvnDpqi9bPC2r5uefW3V9jfYUSbqf",
  "key43": "17AVCRM8mTDq19C1KgYFUA5vRgzag4HoEAgPkd2HkBUQRWckVZeSYfsYD7AC4iVpq3fpfhsBD5FuFdVqy1vvter",
  "key44": "44fw5kAZBfNwBWiT5ZuWvWC6YRCNms5uH3baCC95iq717r8pcvdz8kk8ZFPFHnJxbz6ji3gCQDWgSiNPNTYGfxRL",
  "key45": "47HLeZHNRBGeaDXECgMkPvcRrkkKZTTXq9929YRXkB1zzRVBAs7zA2HuyfRHKEydLaLQB3XJYCxaaVm8BtxoHatE",
  "key46": "epfBWYYAnCqN1PRoAQYkwjeaXnibRWjkVyE2L8QfvUp92tSwJTLbkM8ht1FjrCHoU3vJ4uZdBzXjUpRCdtwgLGU"
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
