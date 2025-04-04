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
    "3aHrEBB6K4T7UWjbxDb2bkVRGoMK67WWEgfHipdTrQMoTNdki8L2garNrCCxSnWzfECc2PjgNyYu8BUntKNqxu1m"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "53we51fkTHFh9QKnwycqp4VJwEbYwGmew85p9CEHCdui6U2AYpMvqHmuhFucokCin3vh9vmEjuF9rf6GdVUNNcQk",
  "key1": "2Ewqbo2xizKy7XrWrx5uBYMzcTzktDJvTdiLNgGqTbectsV2EqcCZ6rmCv3LXZBCocifb5hKHiyCEjecW2TK3ja8",
  "key2": "29jKMtt4WHsTjNPW3sDuhaor12WqA5CTEexyEyMiNd7VK33pAAQQNfRJPVmzTSQd233CGgz67jgHC6s585W48pz2",
  "key3": "39h3WwxE5dDPDyzjbSBqXiiYAeB1SqyUgAFoeDPHyaNWcbfmiKBzD7tBpQ9wJumhFXe1vUiugTTmmMEc5sdqUhXU",
  "key4": "4VLhgAKdUMsy8Pt5QFwuWGdadtzW2K6C52YagqvMxG75ES1tPPMaDpT8iMWenqDvQmxsaZqmEGjhVY46rxgS4gdm",
  "key5": "ybtGPUGyvyn1h9bQjaf2coMvhxSPznm4aafVXJ9CoqQuL9dRQkgrx6Hp6m4oXc6zGSZ7oJGBuUixLCxL9mD8zuH",
  "key6": "3CQeTKCNmfF8Gz1HPCq8aPngrgeZSNHAiEeQmEpWvGpnTRk4pkri1MBHpcu2Rc4fVsDoZE3jcoH5zcgK8apZffWs",
  "key7": "3d21tT3nS7svj48WWmMcLBzSwhVyDu92QtqNnh1R1mvm6zthpV7mLouUQX44V9pEb1EKdkhTSoBhaHTHJYMpGrVU",
  "key8": "5UvP27qusvTLro7tJoEG1wsnsX6CBJyr17ZCRW2Ltvrir79wyUewH34kDnrDyX7iCRrCroerYFXXpyAYQhBsmY6T",
  "key9": "3PbEquBCD2CEupaGBAYhc1otMUht17Y8h57z251aiRWVZaUfFCSXRJ3JWQ1RevvkMg9TD7X5y7ybVXt1axbmM8wL",
  "key10": "8oqt6YoTXSZVHP34w757vcQ2NMEiNjndMA7FECm2qXXhAahCm7qEQLW4ayog2VJBEvPabnvcQkkjvBTJY6GcaCa",
  "key11": "2nRaN6kzCvoHfofmBLCVgq36cH2VoXUKyBQZvKCPhKiiawUEmVHD7aRKTQuwaXnWqx8wBzqxoQRrQpZMsHgBtkLo",
  "key12": "5E8KUKwgXso6P7b5TJSkiDBE4J9oRHgytqpwStbSTVq4MSHyU9TKk2r2eiPavfqycHBo4C9NuPyytUvAkCRoWQFD",
  "key13": "yUn2mQYxP78vCkyuRA6vYED6WvZV5gdQVc9bTja4Sh6z4bmwtJpwWibKcyTLHuNfz3cfawDPzczh4ZPAaSHwdTH",
  "key14": "2PXbeqxLjyfRngpih7W8Qnup22Gm7n81L3uGMzFB6cRJcixavcYrPBdVoJ6jLUpMAnRnep7V38HmJsgd9ZYTwanV",
  "key15": "26U9S14sCdADxPP6ZVc9J2eZgbwLWJRD2rvDhmdNU7p9UDMPy6RmAmwf7k7rXY2C1AWSfMeapYbHj3nwWZ7Yak9S",
  "key16": "62g7HGpij15NzrY47kz9NKWr8pyTCxvtNUN8YHFG6JfSK6Xk4mWQFN1faEo4QxHqFVMUtSLcEqHDoUrujGjhBtLB",
  "key17": "KfAkQgaE44WBcsWRqEN2GL55ycUPyV9HW4dBGVc4nWPCSdMGJQL5MXnpxotzfJBXWFRUA8wQBb1hcQ8C1xvP6Tk",
  "key18": "4Nr6zqtyBwHyfuDLftw4JUVcRWZikZCJXvNVvn2wGo3cK1V819JNtrSPXw6GxyLto13XqQpqdQMErEPxm4RXufkh",
  "key19": "mVKHBwUHMnVLiiXwWdH3RR6T8cCh2m9wWnKaPBqXmJzKXpUHZK6iEaTyuKaZLPRcfsmDRdvnZ1DxURv1xqecAQS",
  "key20": "2GCzMszRYkkPNiq2P9rmRQH9MBJ4Pjnfi8XDys3EStnAS6SBFsAjNXimc8QiZEMkeYQzXjW5aLAfxiUGJf2T1Bgg",
  "key21": "d7xsEUaGKWS9nh1ybM79Ge53BjFqqYZEyLNDfPRGihGGoeFeL9gUbMa5KSvCn9CR6WGq2RLqHJ8ZoSBXMgtHGbh",
  "key22": "2vza8heTLQHx3JAZo1dPQptdwui4cqhYuXNzFZ8xyT5cRyQpZr7eLuyez5MjrUw8KFwKsaZC8mwwGxg7yKXWDo6X",
  "key23": "2kB3LExckhgtAZNdm7beMmXGuaB65XupRdZK2qT4p3oQ766ut2vTMCxXzGYPb153hxKjinkKXkZxnUWv1i6oroTu",
  "key24": "5A8PpunxnJ6vJeFVkkTye4JNykC9eV4NxwP1wQ7yHJm14QbkojjVpUmSAwscGLgxnjMafsshRftaH8YR7YES9QAA",
  "key25": "3LE6osLQNV46ypaMh5Qf49ZyUfYvQa6y5JGhdi2bkfRcuLhWCbRwXhSczdsJDUakXKhUrAysxuxWzojKzQKjzLp7",
  "key26": "59D4WhVnVd2Sxg3a8zw5VpvyBtRqVUkuEuba1WYLc8Bs3TLo1pbdsSgS5aQABxnMaLpMdAu8P5SvneCdmxrRAb4W",
  "key27": "XGNUxSKb2DbPCZ5n9DxUw4FoLAgYvsFMNUVe5XYz3jAD5Tqcr5sywRKG1mtMRLGMBXfqjMfY1g3eAKRKWMbDpry",
  "key28": "1fsBTmhS5CygjDGWvSfGwU5Eee49NYB6s8RTgyRba2P8xwzxXpJkEd4NpqL1hMTep2DvB338ypSktxSn4H3cJst",
  "key29": "EbG2hyCrM5viG8RYuqzf9wRCxJoCCRyPk7bCocjiApeaYmpm8CsvCYaUmRfRvYsyCpfhn6UvAzuuJmcgAUhpuYK",
  "key30": "5R6dBnsXDh8WZm7EmKe2u4QkqPQfbewoyYqdQe65P9PvjZX7vpaJtaaCpTGnFaa9sEctyefrr49X9jrsGvMcnVjo",
  "key31": "3XQf7Gv3dqQDEycuvKVoN1MY5V3SP3UGLUyicfvSyBQTxE6dVDZxexrcKaecVc5sTKDVin2DNX2B2qve2hQSv4DS",
  "key32": "37t8rtfG82jF9x5p5ssy9hr4TU8UPMFCYkAe4qp16nPMPQxivJ8pg4CWDEhdwMDNTrsWUrNKaigao3v9H9rzsRMu"
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
