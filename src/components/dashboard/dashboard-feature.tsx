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
    "5x2YiPRHLto2tHfyUbAhkMS42bSEbRx9V3SeqEPyMDLcdjLDqDnRG5S48m2YEcBjW9YPw2Cfm3pw7wjULtw89WUg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "25HLpwfBEYt3StVz3AstorDJafREdBttwMLp9T7sZsVuyxerG9r48y1AQtDQzT34wFHZccodSLs8NXPFpWbLCD85",
  "key1": "3qeyeayNqziZpLjLoqGcTzSdazecPdqPEfbhFEDbfBNx5aMtEaibutyRr5q5RUYfqcy9zdjwLPu6gyyQ1LuHwZXg",
  "key2": "47s7jnU7Bzp6juZ2ssFNGCN92esDgvzgcfNLd7RSFhfwYTxNmFKpNjZCMU6xyry8pThAa8Pf5suexvEUGbT8Twxh",
  "key3": "2MKbB3DzVm9UqcAMt1YTyPbYrUgbaWMhNmDWWDEZqe9VTEZHwedXC4ScdVoFrH2qsHg8kk6bkj2LuAmNuum86JHd",
  "key4": "5sPXuUZwBeKxmRuxX8ZKqtpSSQYwWnKEtfpqkkSDVuT6sfTtRNDtcbbvoCPo87ZANgCRkty8SofqjJKjDc8up655",
  "key5": "5t5kgKaEn3oxKmTFQoFTsTzvpphJE59mpdZsc37HxC58MH14VGHUxo8ieg1v3ZEajyLmSqDFZ8ysLhoF19a2yucn",
  "key6": "sc8HED8DqLqSQ32MBNBspyEfqF3quPqpTgKaeABgGbCkNC6EeoRH51GKYSPwyUmgQbWywsDQ8fyQWwCTe5dJoLr",
  "key7": "3Wv9GjnrmZ2cr7eNGZ1H17DKPQPMRyeqfpDn9CGPsrBodGnTMEVH24txS1Ed8u4bQLY25xDWgnvUHSZpmzqUjNg2",
  "key8": "3pieY35hskYaG4SHqARaPA9p7gEf5FwXbUaphfqrowpw9BUZZhnrtVK6LbZGHYFmHHTA3UAnEVKmS4anUHJVTN7M",
  "key9": "4SH83Qpyc7Mv8utP5xK1ntSoLr67ntPVAJYKULpTAfH1pxbf4EMTrF4ecW9Pon7voujgYsXAhqaoGbFTEPtnvLwi",
  "key10": "WQNgWehG475BCZAHof33sfHLo22kgibvk7VVKV4dYHt6yDyoHHYqUDi7mMNCnqfLrKGmEB83DpDFYUSRNrfABHq",
  "key11": "zfnzYVHgSDrE1nAxK1mtQ1uHJirNDhZvArhfjWFML95vZEEi1JuJEV7gKBrSDjvC4VrdcyDdEoQsKmWMakcrW7H",
  "key12": "4Z5WYeqVCqzYVy6ZqQE8ZAedSU7oiLJ2y7LPdbQoJ1oeFGNVca1zHb6piF29mKdXPpL1gLFrWR65jG16RwLKg2YD",
  "key13": "2siRS7rXdnCYxdsJktnP4AcwkbhZjNLgbdQGMVvbZ9uoyEsFVysPssq75kXyPv8c7koAmUjwHs4R9T7fFyntrs4r",
  "key14": "5E5rR1M3LpgxAUXUmt8W2eG7zWDiNizs9FSDtsgz2NswKmttbdj2DioKFzgwTZYXdwKociFQxoXyFHbU92BWQMpN",
  "key15": "3h9jjWVPr9PgS2C4odvtLie3f4dBVewL7oxGaVSdEdE36yqUC1X178Q8kPzoXVJrtRjqnH5MdByDJtSfvhjAiaps",
  "key16": "3Eud4zyeATwGr5ucn1EyTieeXRx2gwsevtfM816n5vXc48zPDnWvJmCFXJH8Dx8aTDS9JZQC3MHJRGZrnNtpszXz",
  "key17": "3FsoPCNcqPPkfThNsQe5TRzf4je44zpTyagd17vG3SsqhXvETBqL23zTtTzQa6E3KjNHAT1HYzeT48ZK3s7rkar7",
  "key18": "4WbBkQ3RzNgRMcMxLkCuALsHnSwEmQe4mBySUqfgTZttNGfyL3tQUb8in8wz5hWBXKRzYEMTrjsjFRnjxjCNFH1B",
  "key19": "5fw9jRVub6twz1wWq7JZhSDSFCxDWpGRmTY5oFD5Zf6jMKczZbUBgwf44hNPjL7aWwjJ3X3jUcy3UozSPu4kAPqe",
  "key20": "59Ao2Hi8w8AsuAo5ih2WJKxxA6zqnui26siSLKo8MnS3FgE5MYq7Hh8CDrB1nhnbvwvd8SCSd9ycXWM6AFfZWuyF",
  "key21": "49D3UhGM8wCpfwgCijJyaAjxy78j3maMAkys6voLrNdmeVyGxbd46SAxsLRYb5qrYVfuTNudyywpFuWz7qn4bwFk",
  "key22": "ZgnaS1QGihfWRBcLscZwZjzvzZGkSi6VdYkwiSg7FFXDtcY8rEyDtsq4TpkuvKyiphD5ig67fuWYerDuvngugU9",
  "key23": "2Fyz9QtPkgKreeUnRPFLjb3xsJFDFnRLLmfQnvfyj9wkiECjCwm1E3XHs1awDNw3PpwW7GTAErvPnn23dDTJgL1n",
  "key24": "4p5vfr5GBW4B8ZgQWNrKQF2z5bBEjK3HAcRr9MAFHUvs7HVccc291SrfG4E6Mjd8FbNiuFb8V4ngFPtmd43oY3EC",
  "key25": "4dzzBhGDGeXhfC2ZTZkqMtmd2TkZ3wjoSxHoqYrr7oeKb382mPbbX4LuJQdrEsz1VS8uXQ9xJd93uM3G6gMhZKgh",
  "key26": "5kNjNMntzCV1BdD83bC7uzsZwSDa3wnEx1n46Lu2vpr6mXJy3YtB3BRau5apdxmLBnX9z6U9rHAcGLrGMtG3xUEL",
  "key27": "3UFPEZGtziW95DreGmDKtmZq2XYpgMFytNSSKjfRehz96GzW2tNeZBEi7wbnxWfBUXogTbFKwXc6vkHcghr3CwrB",
  "key28": "zWDPAp66khi2axUDFup817aGoYDcZzQaCcdajQDYnoqvMNftAYui6k7JuVw9vnSqA74p3XRG5CNM45KbMBBVJL1",
  "key29": "3uvFyDuTFC9cshnu3A13AbqUXNmSm57pPufVe2ZLEr87bikJwbdM548YAxJ213avw1iCX86F984xzbTpLtN6D5tD",
  "key30": "2yU1uAKgNdtPTjgzBLH2g9tmMeqTYnLdYtxeqxUpgMSeiXAcP1W32g8S9sdFFa81j9UigSktU1m6qi1UtKSzoJNa",
  "key31": "5zkfohA2pTKHSESzi9CzD2j38uqfXEA2UdeMh8yVuwh1kjtHtu4emfyHPxUwkAPTAHU9BChjdJK1cNZp1GhX9dRn",
  "key32": "vnpbZWVuSbA9J4Etz9UeCpeMK5Sbbw7SkHUD9KLCxUPcxjvBiWL4V9Y6aiSbPkwVijwTYjiWtPAR8gix7bmxh2c",
  "key33": "48aNy6hdLNqwaJecjYVVer4xwvcZoeUqWcaZBgXvQ1S6Nc1GUkVGLaiaMthMSVUsLPoFdnEv68389qxr5rdkkoF7",
  "key34": "325nVyFyYruM2frxfMy4izrwnB5STVtCn3HdtcMfRa7TAmvDeKSpqLtAD5Ko4gBPy6aHfPzuL7FDLW4SzC78NT9t",
  "key35": "4Aeeddu3Z39cMEw7fF8X2qmK7SZNxGuqBAyeEoo2yPHs1oc7oC49QnTFwfFrL5PKnouraUcswyGv4Q9MCgfiDiWg",
  "key36": "2q6HXtNYC23JpX4LeRcs5e36Q3deezXjVNWRJ1SyDeiRugRWQcc2B1b2jzVwAwpiavMdUBc7VRnEbtd9ceuNeYx4",
  "key37": "3YrAsw867QTiu4FJG1CmtBkZhMZ218NAEVNGoTLuQzENb2bjDMS3927Ehh364UHRisE6co827vCV5fPGhFySA5m9",
  "key38": "qdsnZDohf3DhdWhzANjEdxiaMvATjmtfGs133wjc4WLPGzbfowY4jVj6vjbUFaFnZnqy8av7QVjFq49tPMzFRyS",
  "key39": "3At1rBjk3Z6fvq7L9uJ1AmQp4SYtqWitSppJMLpgXz36szztMn2pNJFd2yyKiQybjBi61qX9YyRveaVUAg8GuJ1K",
  "key40": "2xLaM2zUrJtC9KW4PLgtTUgv9KZhrJQwhqfdi444Wr9TkJEduphC5fHBX2NJCmzLLVuSi4BEG6hRPUaKiz4sqC3L",
  "key41": "21b3eSLZaPZyAJCVh91vJrWJLYf7hU9m4peUtmtWxmFEkETvDcknr4TwMp8xbWkkgT72hRbBmNSyv1AuooiHsQif",
  "key42": "5fHXJSm1G2w789vgE1BGNiGB1xrkmMimNXf8MSyAqQ58CAs83s9ExbSNQQKNdEs6ZJ3Lx5qvnHKdwitoNCXWd1kP",
  "key43": "5VAfaP58AW3tstJRqygR54C3Y2oLri2cE274R98Nkuk78rHLKCH4Xx6ne8VGaDRmtrvUUoaQvgq5vx9ef8iSG4WZ",
  "key44": "qDWDFPj69Ds8mayBbXsRuBjaGGyRsdmZSb1auaN4qttXptkEnrzothdjn7DmPQjXu9UzrXRTjS1yH5AtSvzrvzX",
  "key45": "41cToHGJULiBiSr1vseGgKhmQMDaKAQExdoo3KER5BgarfSHz38FfdsjLz77jTGBZsRd9NdQ5jzNiSQEYnuVnweL",
  "key46": "2Vs79J2D3ZPwG8ygVE9ZvDaA89MVHQKMPRmgpQENhuWY8JfJymsr7Vd16t7qq2ecgRUzE94tH6EVpJBJqiApeE4U",
  "key47": "pv669CzN9XGyAKatneV4kcEQW5CF1PEk8vZYGRmkhJwj4hA8Fid9f35r1DquVSaofkWgtHjV3yac8RbWwVcL8Ha",
  "key48": "4hgdiezaXC5UcpERfagcRPqphZjfj4GJzPPZEnuGhwg4cyxD2M3wUpoLrJvaeFjr9RRSEu2n3FKqx7gkpa23gW73",
  "key49": "45d4Zz613vYPEiu6XpDN6gAQ9bgrqLbbrp8MQ3WwpN4fXD3jxohd1XSqxkEoQMfyJwSgq72igGqFjbUeH6Wn79i4"
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
