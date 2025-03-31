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
    "5gPwM1FbZ9RFiHHRHhxHW2x6y2M3PMLDJ33ic4qCPRc1wU8nXr3nBtbsox5eui6AcjMgz7TvqtkznAcWmrA9x6k8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3PzJ8SxD92cttQvvfzy5WCaaVVCJYLU4MTM6sPYwKYnFK9SinSXijtEusfXRf235UtmPtNL2oNtq1YjvdHxADLos",
  "key1": "3H8XFmXWTRy1KVAoxEWkYTTUqpcspBFoNh58xJ4KcWCuqihbPVVZidp85VwSKaLqMrX9SazTQVouYLHEsSAmbxpH",
  "key2": "2uDmCB6gddCL49nDCF29a6vTUZxixmFUAsCYNqAPyy96ZgctxTq7ZvzQb1KvsUuQMrX21ZZ2xTYZL67P4Xu6HPEv",
  "key3": "43gQxH2WbxdMAYsJwPe58A3wxTgTHLygWtBRuaBzfC6Q2art1bEMcTDLjTKFCodZvtrzHTaNAzAaafVRb3yyTz6p",
  "key4": "5eKBR4oxjrv1Hizz6xV6TotMGaDQMzsTAgWYMkTfQoSiWEgJuATyPzJE98urSBfoJPwT6jmdw8Lm52ujwTU2ZRPk",
  "key5": "oMnQFG8aCMyGqCoWtGvvT8VSkeXccMC5SuJU4epBEwUghfkyDLaxFa1FuMuXo8oNVrzg6xWuDFPuN1hxD81stf7",
  "key6": "2PvxW7Hahqvzf2oTaKeyYBvNecFcFH1jU5oskjjMwitDMHWvxP8bo2K2w2atwKcA1WJ2pQpBkucrALUURy21i3Ke",
  "key7": "t6d25Wuvriej7r7DfY8yjhmrQSQtd79TR2239ECN1TVXggW2yeMm3DZAbDWKBwGkLZcB1uQW3wHs2zka6sTDpoc",
  "key8": "wVS7zTpp7Z5uXBTu6Vjdjuw1i2Cd3JgcPxzR9kiQRuUteWs8ZWg5i2vK1kUPBiWkN1qQoCFe5cZr6DQMUHwX1mc",
  "key9": "2YexRCEb1JifseiXu4AHiGoAr32Hr1YMA668mfh1BnxXCQCwu7gAm8YPD8QhnTTc7kDcStxjf7aHgpJkVAeDNEWG",
  "key10": "5Y6zEzeFr8weCJUvu16QQnXcNCWY3GmPj99B9dSmDMsQcuXk3axZkSVjtgLEEx3pk3RdKjHJrgCPmmKpFHWHxGnv",
  "key11": "4gz3PwX2YRYehhUrGvDu4qGvfTyRYfno1ApxjVpSTrKNuBJSkehVLSxYzA42QhSfNjeQCFx5CiFArxUfSzeui7g2",
  "key12": "2avg9KwW6oU4SFrF85FSWG8Vkrj93u7fd7qt6VkMS2aRSF2CmDLNJ5zBHccgQbuxtzp39UfmtooenigwL84eGceb",
  "key13": "4AsDXd2A1E7pNizPgdvy5kgidTa17WY9zV9Kc1EaGdRLJwwfNmaLzeKSj5cY8ywqeq4b4Re1ptHMPxHSeNxo3F5i",
  "key14": "42KkBvymvCwwfdPLhb4QCXayFYjVpxyqySVv7PSBhhmL5UR49DzDj9VGD3qTpaZjn8JTHqfp2PGkixD1ctMo8fi9",
  "key15": "5mmiFpAhhXZssMH6aC971TDPxywMGrf9VUCLdeDoVmbdZMbsda319z4F57QhEeoXzW9XRPw4QxYvaveVWi6Yikqn",
  "key16": "27CRTA1LDwx1UNsUNiTjQSeJkTRUb8jVBWjFX2SK4RqG4MmWm2UcaT7o57oS1QfqFjk3kaGCQiWgVz2C4SR431HW",
  "key17": "5mYoBz6mbDiPf7jhr4jCoghq5uzTW1tVeYHyUXcyc481Bn58673u6J5qeYXSoqSLfbvqLTcCw5PVSQBzDmYUa7uo",
  "key18": "4DeNaeMm6F8MYoCyRD8ZkGwVpWrK9kF85C6uypLk56kJWd94Ms8cgXsSKWSRmLN7vxSJoyb5MuBY7bsV4BFjxXJs",
  "key19": "2EAzbgoPiRCwRHYHmEoWe38PWMpCqGYUzPLuxKcCNRUVbT1rELLqdQtMVKtZWg471Qi7jeGBybWmVjwWDL8MqAmA",
  "key20": "3PBAYqFUTnx5b7aNiE5g2xQr3eQDrHRA5XazhqXU5dcSjkdbshoDfPFr3VUJp75T2ex1VVS3zLpYiZ3zCdqcWLk9",
  "key21": "3GQXCd3Y2JGq7ftQkUV1HpiHUQ5UhSXjGWQebmyMcgeR9bvMm54PDUQ2oZUfgbCKeZcGnhFWqQ3ycE8bPG7Gq85i",
  "key22": "uKXmfgf2sg3Ugm37jBGBb7iaUb64kZhtATWu86SWnETvEByNd4TfzFpebAPjE9UK8CofzmziFuzxQuan73UjtpA",
  "key23": "4NUN3PF6XnbwVrsbSdCdVVYYz1tPKqKWp4sJ9kdmedgqNQi3ugQrmBnfP6zBg9gnRCgbKSAaPMDZRPGQJUpATKqL",
  "key24": "354DSa6kYmX7DmcTfLbmiZynZBVaiBWcNBjgFuriZ9XXdScTjMdEzbz7Jt5nZUb7A719nAwW1eez13DJDzFFZzTQ",
  "key25": "3JM9ze6STAkn8e1XHaRbFN4aNrQxDQtN4xHsYg8pWReNHp5pcWJFr1nXujXs8Gp537fuYGbyPPzvunHq837voSYV",
  "key26": "43Ki5bDR4wjPW6L3izcJWBYb8PsWuJbbDgq3KQKPvkTm9fJZEtV3B3gusoZC5cRqdQJcTgvyccFZCbXZjHG88mNY",
  "key27": "3cTKFm8DcU6XTkxAtEhR58zAECTTynLqKsPzFsm1FsBGwwhZw59abXKtwcuQ4BQfkLvZ4gekeNjs86oYkAZjfKhV",
  "key28": "29CkC2Yv3gwJL1wS1tEzAXRcD14giA4ZyX3HTEtDvUujjFfkQq98t6v7JMNmwRQjCFtE8JDhsXgC4PHvBgJdM8Zn",
  "key29": "49X315bewmkSN4hgPGLCZbXAokbfRiTc9A5W71yxSHSq5Jc26Fmfhcnmz47ptJmVBMAcs4rKQnjS3SeihxWTYXtQ",
  "key30": "ihxz15woxBmndG4PQrxUfK16YEMQiqvusTdsWCD6Y8gdbFo8owWmZNzoNh352sH4tXppJgFAfT6QwVCA8No3rAA",
  "key31": "3PYu41QM7t8379c9ejrohNSb7qNPWDwvnq43WfbZvqtH9ixGA61G58bJUui5EArkScRC987eEK1GU4Krun9Bc5xz",
  "key32": "NxYWxQ6KC4P2LxbDYp6nhpRBwcLx1G2KjHXGibYZRgua985qyxnUzp7e24CYaPJGrHPB7XweKsXVaR7NTaq8krA",
  "key33": "5sBk64KY9R52ZFMxQGcsXiXxsyvAXnFGGJrrGpktWqtp4pTCeT4VN5ZXqewzEsGLjQVZYJtEGg9pZJW6seUdGAWY",
  "key34": "4KYpu7bDk5XxYZxTcftCdcmwwf3ovRtakSaNnqm16PF523bEofgMx3u8bNafzv1cX4xBSnRzrpaeFbjnohorHP8y",
  "key35": "4bAU4YQNMwtev57HFT61k6cbLELKen1hqGkEkJtv5RJDB9G1Mat5eS2qSeeAoEKhRmJsSenyTXJQBMqsGJ6o9uaN",
  "key36": "4iSFosP1V1UU5rHMbAzqtS795ZbR2DDpqv3hrdNsfDBc7BnSWYMV3tNj2URmgPhZpH3U3jCLptyRbn9VHEkoXxWY",
  "key37": "SbpwGkjuzxMXEWhq4tzjnUGY1cg2Wx6jyAjqjShicnaEDhFAK2TRQsJA2EgKc3znGW2TZnfj67AeS2dpeGNyq5g",
  "key38": "598Ar3Wpnx9enKKohtJ4ci8euV7Feu7J8gf3Hw9DTPQmMGQHq6rCctFkydycbmsSMWAHXWXSjmmLCRWinAwm9MDH",
  "key39": "4ffXbo15Kan5Yx5Pvtnz3ybggVvJAC8VUa4Gm3yExuGboLm3rKHUto3TzWFHqn9q6RwVvQHt7jRnLm4B3HZFPRwL",
  "key40": "5wvijho3EvbGkoEZLy4Yp6rcRiXKdjnXuqBh1UPyQnLnBjemYpPehUcs9jhZPYaqPaBc1FUg3HKimwdpXM4UKiFo",
  "key41": "2EnFkKD44WjeexxegZjNiCN4DN1p9GEv5AXmiRH6FvE97TWPMHDyYF8aY7tVaLqGNnu3SocEdbynqW8JEekHUFq1",
  "key42": "4KW3fDjo1Led9MQ7nJWJ2MoEkCcFKnyXNB4QibUWuUCapNumAa5VXJuYgLsqfch6wqWQNV6hegaEb19GpJ7r39yQ",
  "key43": "5DTNRHeyGAeWEYihd2eTvUBNJi8LLykoyJWJ1c2jJFTuUJoajP9zC2tnu9tieJBdd16jYYEjdxGThnHMbBuZCChu",
  "key44": "4XB65WCRnMhvXisWSpet6ifSq27ZgzAoDvG8wKLYrizS1pezAKkKZt2Eym2VpRpyQvMXDD3nMLMLJwaVg5zBHKDb",
  "key45": "4wWB41h6qwxvzZBcq9RczhuFk3XmF82VRnFvcxMUfVax6zjgK5jnrSpDGP18nG8dya3MSZXU21USu2pDq2C98qAE",
  "key46": "3Ty9ET9eqgjhiBY6gd4pSTSuZzFdZ7ypM3G13XJqiguUuQJR12PgjHA1bVTkgnfMDwYdtqsHGTxYg69nx3EJQZXG",
  "key47": "5DqN8GV7REyaJ8Mv15e4j4DWCgBAViBdS6eque9tdjuL8RcwQsUHDdhucqJZogFh2FcVbGSH3qFKphQTnAggqZuc",
  "key48": "3GqPH5wjdZaVrzqMWoB8yVK4M2tQZ4hC3vNhFzxduX6uR22K9xU7xuC6meLQXMt7JUFpUBdUty5N1SU9dRdJUUts",
  "key49": "R5Mdyq5gJcrqYCQ3SSLeLTBEHon8mQ18rDH4mdsSHBHrHPjq97JFQrVc4wg7WuPtYvXsP2rz9KBb5jhTFDMaS4m"
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
