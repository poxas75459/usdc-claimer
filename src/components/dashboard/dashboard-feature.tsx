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
    "5LT9bGbdQ1nuZ1ogvcHdzgtbLTLY15WefY5kcc5s6sFMhiEYrQ4gZLgUZ17saMTv5vL66XVFyiJbzr547mU8BxgB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ThWf1hRgX2GyivCmHNjpc3PBC2n1dUYrwbpoWmiVxZ5RZoXfDbeqmjoJ9bGDT5TW41ptzqpLQFbQxBxy6Ugx8N3",
  "key1": "3hH564DFYrL8RUa2bwdsYRTC5Yv1DG7Mdg4c8xkftWvMULyVtdXKCsMJZ7LAQbizNdV1WuoEZravNb1H6LgeSyZZ",
  "key2": "4F5DXbX6q2vmESe8UgMShdWvMh9J2gC78xDusDX2yoqWBVmwUGhrXcXeS5W2hmEn6iwvRwnutHShjRxMLeRdGu44",
  "key3": "4gDtKTwXFL2Ryps31LVvyChuhQ6jVybiu9kYhWtGnYKBtvSUBsRsRMgcwgrqYWFEXCqMGekFWK7KFSy25sVXdSaw",
  "key4": "3viLAcCkRRtdt7anYfGp45VCbNQyBeJdMfShZWotxT8vEokC8gYHypKCuvd9nc8sehe6QXbgBsHnJBKSdiKqEweu",
  "key5": "4x6vQhWTxLz47puazUZgqmbAoPSFrFFPpi7PTGBYFybiUVBgFBUCQ5H8LQZyLWNaXvvC7vSzPwFsxd23H6163neB",
  "key6": "5btKNAXChraJh2QefJw3MjsexvXTeX9rA56Fp7FCneNSPQchxU9XQug7WePDwjjbjHzVZKRcqYu9gzvqt8jLBjNP",
  "key7": "3xG22AeXc8pmksmeAvPHvKUMcAQVuuH8DNNFM49eqFdE8qSHzKZhrpMfLtdZCBLsriRtZxqBewLxjBnPX19mhDti",
  "key8": "4n8AxjrCfTrGQXcUNKxiMUdQthdo8VwWqj3vjDc7QyANXF4fcfeQxiAqJZg6C94a9kZw6etDbQtdrssLvikabP6L",
  "key9": "ByQFeoLMKz5jsbNk8RgExDsT78uGxEChy7oHuKKEVL8wFrTAWgFEYohVBH5zmdYf3a1yMNDu8iKV5bwgB1h2Rd4",
  "key10": "5DamwKy3jevRt4mAQSAdF77NKPqX1rE8UKd5vAzQ8aNLwzNstzHTqizTdrSzdts5TFo5Po4hb2PPwnxcCrZdi3aC",
  "key11": "5F1suGyQuBMFkMiGLnnNR1H2569JXHuPqLD4wQbtD3S5vXEbzPvVTercSVZPvkYF9MytF9arDj2Yo8jXB8FaNrcG",
  "key12": "3vwwmTUmumwa7YAWYU9rE2XV8L16YLk826FhzeHbNVGpRCXiCTKZdf8DNUBRPASEZhFA8SKg1V2AToPmojTgkzii",
  "key13": "2MJuH4aXf1M24yt2mQtaKxD5555k2cdNBsyVUfyEgwt4Z6TmxmVjDgP4PcsVTvCdzp3TUVYbrZDLUrEsHu1GrTfg",
  "key14": "466w92167VXy8ZQTy1oAFja3KXUTgDQ3rDipeXNuSrctoM7bZDkRTgiXXfTM2AHZvVfTDXUwjWci3jPNZVB5sYb2",
  "key15": "2hXCKjgLvCLYx8rXd2LLGyxa4Vz8VHak5DMCqAnazAyjsH9R2N6iorR4cJBKS8gKHH9eXoazF3A3DdVqe8notKxK",
  "key16": "5a4RivaEZVTQmn2pEaBmT7VQtfvXaeMNMqq7A6bh3yRprt4d4WiE8ewoGDaotvbjxkB5nm6EJGM5orujFkQEUVsj",
  "key17": "5qszV1R5FcTeZDppjQCdBRbdGUofpF9bAPmsSTrpdYBnkCfqAa8CAPxsa7hxqUPR1GXFrVdA9HpL3MkCa1r4X4dw",
  "key18": "DCMmtZC3wE7ULzvBMBehWQsVwV3qm3ni6fHJf5e5WaJbnG1srLyxLf5hDCd4zAKEqs3e77Ym6Ag1AqjVRXENzkT",
  "key19": "52GY2k1roNzk6t9Qk5UfWdMGJN1gYQwckuLwCex39e3aFagfoCkC4S3RcLDLh7UQysJc3o2RXqDcEAjtRQD2rC6U",
  "key20": "4nDCLGvCZvVAjB1J8swKrPyyHjS8Uvcu2WTFWLdiskqq4fccxCJTfdomp4gc3ZQ8ZwwCA4tmFcC6ZMnFYioG3DCD",
  "key21": "ZENgZobtM7gY1aRBqoMnTiAh4vghCc24AvJvyy3yVmgz6B7vniZV75tLBRAappDtnd5P7zGZjLAbroQ9B4mq3Kp",
  "key22": "5nX6XHP3iZEuExviDCcCv3dXi5vgKX7wQ8EdLYwdo2WYxetsNqnVYZVbjNiEfWMYn6wAjCt9iN4cMKqh4fwwrUT5",
  "key23": "2PqkiV9kt82jYZ9EhrQtJbBUqu6bzWdY5N7FTcZz45EGPNUodsSen8ru5YHxxaf4RZPV7C2mjBLGo9XM4BArWHix",
  "key24": "3yvJSefqVqH1qeMNb63kGDEBETFZXpQoM4ggX6MKqGbYPcqAYoJXjYPU9RBGy71jwLRXQAFDp8fVW86xpn9WKWrj",
  "key25": "35uRpt6i61mmU439yChEMw8t74kCeEKCN61ZZqrcjFXynMZSLbvdLnzutg2sAyGnZ571HF1Dz7SCn7Crr1kU359m",
  "key26": "5Ww1xxs3GVFy5QWvY3rLBfJgQwhYXgeGvAKLzH32XgMESBQ9nGGFfpBtHomQQqVDreG3WuGGTq1YoDtuRTn5zhHx",
  "key27": "4RF7xXqbNRzdv7guz1xCqSuq5sZ1SfCybQuaS8rKHSRpMuPuUCDpC1MdxebqoLEQpyg5gczhTXQifV82sdyfdSyw",
  "key28": "3vFLBkmbMv5aHWBn5KuznmYjTKWQppGjfX6CWLMKEPErhoknxxSHDvdFmCizpbTDXtYFUCvtPCQ3gxzsM2RCkhUq",
  "key29": "3q3CodW3X6YaNB1AqNwtVrUvpnQnBxsCHUhzpcYfVzMh22prNyyTsHEPUXLsPRrKqoTZRvhpS7cy2rSgPcLRJE7Y",
  "key30": "4dkDmYkQsuwPPvCjiLompgVfBZCme3sGNtm4b5ZBAtDmicSMNpTFd22oMe5uHeCaZE7zwjVTj4uh2HBGHTjxPWsV",
  "key31": "nEqBp9cHp1AEnE9vLeYtW1C6BWnbLrSPm18S6RvVdFTwgmk5cBhtLzBS7Ktb9AzcAxii7Vas4EVTJ9P1tCf6sf4",
  "key32": "L6KT9MHC6SRbainFfGx9osgvoetT34PEmb4tUHwCtp7k9aDvwkTXHkobQToQQ7RM3GDR51DwBRqBHZV4FxfGnk8",
  "key33": "4JRpMU51mUkqNZiQRMLYYLHxwGNeAYcQjWdSTG548yV1mZCYewYVobuaPUg9fFXotmEPYdAbPJGby6KFcpTGSoMR",
  "key34": "2faZ9MzuLrPawFbhjtQ5S895na3eB7inPJF1BkqNxtRyFJkMFrKfe1gysn1872ohP6NTQv6z9fctjfBEZqjvriuD",
  "key35": "671F4BmLFCXpzyuQG7udFHVDZwpyTMDtfBGdExhzhHBXsKg1gbYS8mbzDi8CVdSv4AKguezfFhrdTd1Ka9uTLUj7",
  "key36": "txETFTdT8dJ5sm4BMYJ4xsHRY6LZcZHq3Hh3ViEujPi7n9YziWWUc398cUgoXxLNgXbfJ7GkAHLrNMCLNbuHGTh",
  "key37": "1Xx9q6AJh1py59ULQKVXjffDnb3bU5xHvSgeCFaJqutkawrdA8MPQJQeudHuw1WChResYydiz2d4Dwd5v7xb1UM",
  "key38": "BXEwzu55NffmoGF5yAdk32hUZUdVaJD49ozRgWCLds6AM3zSSJogduhjrydptpVmQaonhHsFhKvU9qYNeeySSvG",
  "key39": "3Zy245FNHWw4RBVjEKqrRqFPrbyGschDZgD3fRWqv8HCfxEwT5MvKAKqzX7YTZtWJXdrEBj8nJukZkEsXU1ET7oq",
  "key40": "5H8atQZezQVxmd6engMpvf4wUpxNLUnw9LQin3obQi2rajArGkoEppumMMoMnr5UXxNLAyDQY5jS2eRG65XhgJUp",
  "key41": "31hdKpG2u5J1j8Z25vhi44VRjTgp3CXwXTymjjoaWNNBh2eYFx2mKqbJ2t1VDw1FkVs8GExKQPGbFNMZ78feLmvz",
  "key42": "5dSNVo1Skoe5S3KN6BKtLt89o1LZB7eUB6uxXTUUVfGx2C1hdavCceFMswSirP2Ga3yYjbjcvh3NPrpWT4awKcAX",
  "key43": "4Ws8v4asZRYMHLjJWhedKztdPRFNZiw2ChqCZg21enLh3UiJf6ZHBPXRrav8bgPzXB11Eab3A9rYAPM5mWT36Tgy",
  "key44": "2Cf9RiJwkJAtF9f9dC7sqWm3s6KsSWvm8vQbxeLd548ce2VC56S1jBz4kt7RXWYgT9GNYGmiWpcLVBpsFZBUVZ33",
  "key45": "5XVTzSKAhGKLVyHzz4WSojZDvTj7RBFtXTdHA6aEaKs3Mgym6tVqDtCHd6qkbFLSNnxFiuqrQZReNHs9VtHMthPg",
  "key46": "4wHLGrJnuayZXzpiqi3bRyiNmjo6EqJgi2fC4Lt6PVFjwCLG8gXgynPTDfmS7gXkgnxgaS33RcM57wrvtJyB9tq5",
  "key47": "4jcQG443dvVxJvd4jRT3bQ19RAce3Ra4E1jECwCjHugL1eZRoi9gdnJMBTKQ7DqTa48je7Pb6gHVJGTnuCmwP6NN",
  "key48": "2bfDU9wnnE5T2iis9niRdSUy533hxWbn21Kj3wptCPEiEsnsHXLM4xDBGLVm1Cb4ocgc9Er1idprJZDzkDSDe749"
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
