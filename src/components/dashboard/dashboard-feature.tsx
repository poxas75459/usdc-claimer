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
    "2UkapJpErehuaGNxmYAtirqVBqRa39CLFetmTs9k3TVK1mYPBSUH8DpN6M24JdQCMr3REVimJGDiTgaACuubHZ3w"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2AFUczQoGuGuVvHXtTBvQLtJwbgLuqbrP7iSJHKRb9J1QCKfAzcduyDuP3kpVe4fNwXxCis2kjdhs3tFVo8XniZL",
  "key1": "3NkDw6uGAJydbaYuSG3GEdWgXi7M3nGRmzTs8AUMadCMtdSWjUCPYZKSAbYQuinVqf1oPABX3TLJhr5UMLyK8rJf",
  "key2": "3vhAa2AruDKsab21XisHK8uiC4GdBovw8HMYrAJaa1PqTta3xgCUGwoTgfwHNL6GK9foCkYncmLgrZC6WFuoWitb",
  "key3": "1iWvWgMKG6dVrWDUExcZTZarXVwDtLqa2kFNDm4VX15CYGsfxhCA6MtaP8zWv5GEUBf2JpctR21ooJ7nxYGhVZK",
  "key4": "2LKriZxASx5GFRgCWEqXX28u89tAE81WvCYMUs8KNjFNnrNrWg7e6q7GRuaUpdY61s7yBddgAZypEkht55ERU2mv",
  "key5": "5LwRu72XT1aBfcH9xJVbi9n9c3GoL2yDodyfw1Hgk1HLK5avsfvL1td8nLDXHPHepdoQWDHhzmBidsMkETVH7d5c",
  "key6": "2mqKcjvKQdJVHL3RPTsaWDvmUCm4zr3btd8jNXnzqop7h6nBQ75C9sXTyDLk297HHwEg8ASv69wYpd6B8o86iFh8",
  "key7": "5WpAm8k9kNJSsHH66FpZVh59hHawMVET9xw3Sjt5wNA4ZiPHnvvDWX3wLXFeYc3G6mZwfFLTM2eTcWKD5sVVGSqq",
  "key8": "4xpXBP73tdYAU4JRi2caq7t3cDbVp6ERaj7NHa3UFT5xBuZhPaY27ywxp4o2tTN3wwDBFPG8KQn3L6p1q3WukeQM",
  "key9": "4X6kd7dXGaRutNrfr9YXVc8jtxDobFEQwSdueDkr3Lh6yPA5qJVmAgxpxXDSrC5eDhjXYiyjmzQnS6yXruNTbAbJ",
  "key10": "3PmJjTHEFyZmthK31gUdvoKSgJaQ2eSk8ujrxMzL4KSegqkfm9uBAqmhbNPaxbqZH7K8Sx9PYoDfSPDyWfoyXtHS",
  "key11": "3Dxhcq6TmxidtKQJKWgW2Ra3zV7rWjMRz6pDJGZf8JsPciujvd2wgPxXE33W5ELckQcxxGQzYDdthsX6mbaGy61d",
  "key12": "2n5H1f1zbKD2hNAGP5cbDcsg8A85M3hCG3Uqct4Q2kseUud8KonPGi2Ci44SYL3RWi4XGHzzoYPut2HFAHZWSuT9",
  "key13": "42ZFMJqSnTvRXGHwTKbSB3VbhvvmKzxY3DuPy2rBCxCz3eK8GwjW7vAWoRKP9iz2TyERfghmEQdr2Ks3ByQsJjHJ",
  "key14": "2fVatvUw8Dd3qLQF9HKcwWC3K8834H24JybJazKiTwfngWcheyAKQT454kbDUS9igd9E2tvvNHTwUn62V4nJzq3f",
  "key15": "5wTVmamczK3a61E8YuaegvW5pdQVCGWJEjrjsgrWH9k8cNom5kULTZwhnvTpaKdDJK1G97LXJNaEVByANoy37Dfn",
  "key16": "2WSoXWLdDG7VkWbZcLTJquBzKRY7eVbvi7m5Ao4f1ATK271FVwtxojohtXWJc8R62pR93iDWLGF7ZSaaUMsqa9ga",
  "key17": "2YJar681QBCPbhEM12uKTGANo6ZnWAu6sMWkmdsu4ALeY3RVM8XcNGXJu1nnvkiYtsPPKB8pKE8Dtn58KEUK11wg",
  "key18": "MD3a19Wa1yH8Z87x4V1CH51jGwfYniZRdkooc7Keg1huYFp8nUw3DLfuEVr5vGBBe5LEp1tspUcqFE3psdGz2aZ",
  "key19": "aT4hamRCwaxYway6KiwHycG2MMG1oRDoo3d5MLmXwBTCLXiNs7gQwf5EpUXyh1GohdMfTNnTs5KAJVw4nKjdZfh",
  "key20": "3AWfpo91qwZ9KUthcU2WUvhWDDsnxKnS8GG3iSsUw5TVG3XjgKoXdw9D92Y7zMdHydx3FV3RpoJgRv5udGhBTGFY",
  "key21": "3kh4y9eQ7FmoPoYvASbvzbXvpLMkFJYFuWkhWSKMNWg6HvhAVRmJWr97D2ZaLfaD9SMpo2kq6JGSQ4vePcEiJgpM",
  "key22": "5BqSo6k4FBV4YpkmfSR3TMHgu1uTZ11B7bCD76zp3HvLnARDRrHUZEsQQhenHnqWKYEBCy2WWK9BnawAUFDAXC7G",
  "key23": "2xKeiJM5T9oZ2eLuBiwVCQvUr3dgP5ofH1CoLofdWHto2NLvo3czENJbDcK4BbVqbWPLdcUFEkQ5BKZsn7vQu8Yy",
  "key24": "5GbNM9gW2EpWLJw9frqwpyEzqY61LNX2YLvoYTCa6QckLUuBmAS6Jw3J2zNjsaDcSVLhAErzq29JJ6UyJ4455Xtf",
  "key25": "4g9qHCpx5fFqFVeRNg1jZJnQhCxKbHckTap78N3bbRtLakVpCyNj8KfyV4W7KkHqG9zN17pBnuYWwmPd5qAsgZ5w",
  "key26": "3t2HQp8f7q7VjNthzDhmYDkKwJA2tSeMbA3qtyiDx7UXSxGxJbRv7D61BNC7CsLWLQPVuEnSmW8Zk3peEA8yLqAs",
  "key27": "2zoYUY14A6gewLgHMb9PRbCC9jw6neb6LRqZ3mAr1E3HiDx5VDo9TtDj3Z5h6ohKkzs5xDNkLa5uCEL8DfXKRG6R",
  "key28": "3pMsgAQmcnTHFxCKW4cK4gjir7NcjXJCfaACL386QYno9f642AaaPVS6ziZZJah7JecJznRJZgXdjaJoX9tMrKsn",
  "key29": "5c3dM5NwRc4XEPQLmgUsG6uKmRhDkaTPLabFFbDrMX3zvqJNXiEMeTaNLQrFgDkc7KPLwbsj22AfP2Ma1QNnPAsF",
  "key30": "54cA4sSfuQPVUZar5Sq8AuExxaT1PPr4Xyib4TDLbZYmrnHfC3qgoVMKhjiFpVPXgWBwnpXnRrYY8Lh42sTtqkAc",
  "key31": "2ViQ3X2vMCFzNQiBt5HhMnQ677WJ24HHvHpvbTYQADhWkpURCVyZ15cp3GG5eG92fM4pH8cCrtH3YSRcb5g1SbkP",
  "key32": "3VaaPprjw3zGxQSuNz4QtN9TNSS819NMwZMAC7eYu4AMnGuGPAmd6EKZrQrCGMjjDmCTAF4oDQSjQkbgALoisVUq",
  "key33": "5buWU77uUjfMR4erB2S7NnLDWDvNcKMgg1RkBgAeM3AyxeCHakg2jZCVyvneytH5RuMLSTmZxU82NfUqTa36WcYv",
  "key34": "3X4xLnzqWWxVAfn9z9gD39m11tKKP5D1Hm5PjFVejpcSrU2ERLDQPMKWckVpG5UvUL7H4YwUoykmLmfbMNjPEA6m",
  "key35": "5j2y91emHLA1pmxveWoWk2VLq1iiLGmzkHzwMiYqB8bBd3pMec3s4As1ew7RwNbytdoCz6qLcN7ZupHnxq4zK4ZJ",
  "key36": "5iLY9dtr67AwU9QFi9Je7XpZ8gxRpUMdKoS9VXE939MHkErkA43RBBc2zDaqmZLeVQh8p5onyeGdQU4CUGXnwXAF",
  "key37": "3Ac49JGVzSPJB2HJ3GHzHX5kZC48ugrrHtmidbpPpcTjLgnaUQ9MN1efPFwr6Bd5xYsyngQSkYqGbZBhFJmWQT8T",
  "key38": "4MJ2sQCWNscNCetoBmrwRKYFtkMTXCQZeW5vxBfje5SLu9N85dqiJ1mc1sATbRtWqNMHq8CAUa83n8jWfU4z4kd2",
  "key39": "4gaut89smzVdXdiMDgSjMD6oCQGE2zfw2SjSyZMby55xnmSjoVnKpnCQCEEgwAk86uB4kcQWJpuuUWqZ5oMHYrd8",
  "key40": "4yos739tmyXibABFNzZ9AjiU7iGixEwfSfDjTTQfKh4K1NQMCDbTZ8G7Gq5e5tMHbnVE5ro4VRADztjd3ipkYoJu",
  "key41": "2Jj4kTF9yXbTn4Kd2n3NXm499CFfrtSpqLzKBGkGzdgMwPzkzHFfEC9rDvDSpYzFyPVtkehGCeHyZaNW1PjMp6hV",
  "key42": "4uXnMp526oarNdy2hKMoWTkyf7fur1AiY8hgS7AtXdtsBcgGszrhhErk1x1DBdHFqWP8dT3D9Wfc5MXwHHpGf1cU",
  "key43": "37ojny7BJ8Pv7LRQattoTgca4eRDN7ZLUBdTKTAaNwQEq4x9yvqiBJcMuciGpp4Bzjv7yeyJtmqSoeNfbXqBF14H",
  "key44": "4mRpW5CEmeAAapHZvAXbdYo8i4ai7aAGwUUBddcFtYUWHvyTSrCBhRMzd7ksY1fKnfwHeCsMxmmoBba5Sh8rPV3q"
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
