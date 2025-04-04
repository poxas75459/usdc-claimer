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
    "2BjsxDTtYiGvb7SFHZc2x17C16xab7sWif4bDSoYMdSdhp2byvF6wncfQ259pkaDu9MxhCsbM3T2UY27Hrc4qWtz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5WtE9qXj62FiabGn6AqPLPbHoNNLDycGnAcQuto7v6at8N5YdpSftsvgcYN3P8BatF8JCyuDkK5LJLb8Lkth2Wpi",
  "key1": "2W5GWvvPLgjnLBA4CnCym3hSyfvgcvb5Bd8LELHDG7Dbpy7xeQaYBEAH4Zx7Pqxpa9MFtcQTdXuwX35EmVN7EgNF",
  "key2": "2m2CrJ9DKPvDUv2yrwxyyvVUGkCesH9Zd3LDB29ekccqDaFBUyBins3eeM9GLNPEqdYTBfTshcUBc2D6E76NksKV",
  "key3": "3kRsq9woiLNUJBgrXBZpFjfYUWRa245BPBK2Ak8KRXfFwAHhs73RtuPf9RkzGpA2WBEHike7G4brJNe5zUFDefou",
  "key4": "w18xeALuVWdChobD7fcnNgEndNUWY4bU5Y3jHhiqDBU91WJk1uBE4XxzGfsrbRQkUoxXvuWGnwtxvnnHiQ9rmAC",
  "key5": "3dbQAEok2ZJkEDG4VsNT4U2JMiM2v5yp4HR1kbxExe5xQBiV7c3PnmH8LdpQwqyhfAbHrpu1EcKz58LJazwg8E5L",
  "key6": "Pje8NRFyAKgABhQy5x5bSPwkQeqUL7UuwvLAqYCnZazqSWB8BvxEPFM3isUeK9WZkkWFBEFr3UPHYtAiC3rAKCE",
  "key7": "2vg12C7JGuLu6x84pq6KX59daw4T1FxaVCyC1c7TD6Hrpf3tyNXpgqzMbqgy2YTomTsasU9qBhVZPo9jzUyzbVGs",
  "key8": "22GWevdfJWhk81mACJr6AeMWXDXzVCProuStAyGL26Pegb9QcmpZZ3Hw6Zari8Sf6KfTDgoK1htuMoCLtGLhV3HB",
  "key9": "GtYE9NwjHJwxrdrNyZ144F7H45hMEBXSqq8ncErtabPjjdsnEQFTvSXXxfV6s8E1vX4n91sXTL8ADHdy4doorQA",
  "key10": "4GjhVsEPYRUVe6Nzmdmo3Zfc18jGyNjGr1ST7DiznQdrFHwgmMUzB6q4aveR92emkvXryyvZc6DxUSzPNZveqXFj",
  "key11": "2NKoftE61Us8phdXrqbkJUMPWgK9fWzQTK2LgWgwAM8CgU4Dy5YQa9USyifNEQMu2dKvkgkD3QFpLpmt3wBkRTUS",
  "key12": "XDLyp3Gak74zUkyiVFqUhQxp1QSSmtvKU3cpU7kQQCrD8K3apnfsW9tG75RmiBd2oPNYrCzZYZGCpttEZzgaoMA",
  "key13": "4FTCXQJMFHUvy4WVq1rM9949cqgywSgMGy7aEvwxmi9UDPDtKwuxJkv6hdkrsc7gLi2HCKXSkAH9j2xjpgv9vwUB",
  "key14": "5kmESEW9tj3arnxtuTAy2SBWVF6WcQqHQsQwd5BCXvCzhzs4km5WHmKu9PXkhydZoQ41h4KFtpRDCiYxiSrPHq1A",
  "key15": "53tggLe1XKeT5CVimhXqp8deCGgMEChEwhTHmSL1yXbumHQsudbvj43TtkR3LCijBqaDX7VY95M3CqH63FLYZb7D",
  "key16": "51KRiPoFEk1f8m9YwawvdFPrwJV5sGgdSXrP3dPMitbcVUAVTgTqo2eMZzWTRPcrsam2sK1pZF2JWQbiQr8QywiV",
  "key17": "5E6mFBHCmZNk4sMMTsFefnXv9nZidzoimfyGt4Ly5JaMdktZCpNAY6xZjmqAvqvWFQ943aDDEqZTVmMfMshapNjt",
  "key18": "69rvo6tQMjAoNxbdQomUzwVuyeJydpisDyVFmuJy71qrtp3SqMwiWAScMzSVmqU2xKLMp3f7kxaCDJhuaL2XB2c",
  "key19": "vYYidxXWgeh4c1u9uboUqSbQ7XJs1inu4q64xx3TwDL9ydVH6escjMzNPmo3bn2tYFFUeG3sQDp7AAY4HgMSjsy",
  "key20": "2v4Rn1zYv1nBQA96nyfY1Ak7vqbC42Frd7QFCikNqVr6BYFSW7u3Cx9oHtCm3GABs7PrarfKxTg2WhwM4qkAUN2S",
  "key21": "47zpHj58ikXCUzUWMB9p5gxgxdueoUyDGcCXxCoXtRoWarNepNJwZhCzwhFWqqjdF4hfeguHJCsXYB5gS22DhT3Q",
  "key22": "3RzKgJa3nzm5hFE5wYczyffDGGNFrBEPxLnk5oEvSp2X5M3P9iPub7dmnoj3agKMizsAfdyhSjTApmdby93vbKE9",
  "key23": "3wbYaWDPnd9vNYzLN6CYeoy4mtHD7iFHFQqU4Mgw1DAsGnY6VDVvuHbiAMeyG1Jwvraxnd4HwnjdEocBDoE7HRem",
  "key24": "2D9MGW3AX3u7KVce8CFYSNokPc37qYxcjrRyYwdxxcW95Yw7kgiCFcb2fwYaDBqqoAvK8r42GPA81bxnZAvYfyTd",
  "key25": "2gRgC5Euh44r47E3svmUG4erPxW9yw4MbqsFF8YNUt5ADZrocjisLrN8HLLjniVSpX7XUhrEBhq9H3hzKfGd1E1E",
  "key26": "32KJUzTDyancii8qC83K5csMBSHVp6KMsAGervT1ih8s8H1TkoebaBpTP5ujto5BZW6q9UdZ6EyYYbvpeA5VtjGP",
  "key27": "3vzdwMM9AVonAALUByAYDazhrTJz6StVCpPUrsiXY6UxT8rL4Apd3gg2ma2XMS3croRZB4JhxFvr9aTN6Je2dg6Y",
  "key28": "4nPfRfwtEjRzweKr7wETzCZLmSp1cfjjiYHR6ioh2UJxQN4v6z4cy8rkWrb1dF5DvsM7397L2QKMczcPpjZnpNkZ",
  "key29": "3ev9MBFa1zZLaeVWzso8Uo4xpihFQ6Wv4ecmArUXVYXefvQaYsRsPfq2paDG4TQ8CyYX4VM1GsMYeFcNxYBAZcAz",
  "key30": "S41xpmLEVzHxp7U7scHiynuw2qW54qMUMUTd963TJzJpxG14MZmbz627mKZSrjmnadSJsescHXfB2pbaLKiAWRC",
  "key31": "4VGfZt1wAFKXbH3WGUD9MW95VNZGHYPdBu6iehsr5fzbcmpqUGR1shxik8iZFJLDf2PgeQXcQjf8AdLwxhf9pgfw",
  "key32": "5k6uS7pUtAz5SLbiw2teGHtZcKeMXwEA31V95WL1ZxG7Vpfy6hNrN1NMcWWhqScBHue9AkgwGGeurHeZNVDp3wSB",
  "key33": "4ATfHBaeCYiCygqaya72QQ5DXmFubecfsctjy18gSdZo8deF7NM2pnkmrYi4fBvVY2HQFHwj4BprRXsFAAswDPQg",
  "key34": "351L3fwLUy5x7a8uvXd3QwcyabQSv1376HRAVXFM85rLatxX5YXQq42MCnhiFDtjpSovsedjFqim14GnDa7c16vx",
  "key35": "2FgbphoGhyDipckUCBWNEmdymznvPcMTBj26CSW5bMEUT34kLbcZ7zYmThZdEfP48zPxKvRiDUwDwwajZ5SkbGu2",
  "key36": "oZjCsHmWzQYFXJettwxVtCs2wjEWJ3yZZVLyXFvt8wffPMnyPtSfCyprz6dKUXfUnTLPKLwY71BcVQTJB34kboE",
  "key37": "2M2gHvFe3qfrbkjWKN5NywzDzKAVBuShqTSNcStMRsjB58aeiCphTz8tJ4zMvorccbjypmxzfygJ47jzeWkjyU3P",
  "key38": "4TpbYtxMXrVYM2HUqzE3pRhdjWNMpj5cVH7j3YwYFaLPtdJr3UCAg54Bt4ppc9PXXtQT6JnLHodXbHh4iNQ9X78J",
  "key39": "35bgctHYjnNQwFTWcTC1UkLppzcfESuFTfWPs9MY32fJtKBpkgCU716eJXUAhh5T1meaU5PEAN16h5B2pF7WQJD4",
  "key40": "3YkmH3Ebfs5VZCatojECJfAvdb46Z31bZDLwRzJcRGHCHwyswYses9d3jxWc2EGr1QmAu8eYDPZmCM2DmkZ6tcoj",
  "key41": "gToV4fXXVpqbd6YeegRdrcEQEG1sGKmgmSQUA5APERxXqxunESDm95PgxY55veCgdHTUCLnAUSksRTj93omDzds",
  "key42": "2MRGV1tt7zR5piVQ4NfL15S7PMvnHmxmS62nKpCKsASTwMEREvrmH8rhMFNYZCgv9K3bfMbFRJU9ra9yUG2V8XLw",
  "key43": "2pPzvW6pBBMuFt5FT5Cx5T9e95DiaZyR1iG2YMiWDApCNd4cjXN3j7cnSvUaH4g6QTEQnrsU37Hr6LM9fSfrTT8U",
  "key44": "5V5YKqn1ePW7hH9rStoesbz2wm9sinLcxMCaCBF1DNk7ChVMNja8wn14Qd4MYu4VhGQ18fVYPsNwhhzzeACA9tbh"
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
