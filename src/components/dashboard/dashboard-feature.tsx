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
    "5wy7uoa1rXiYrW74Ae9tYeSiBUNikhjGfkLjbbhQ87h1VtZmzS5G5rkVvAcduLV5B46jrQtdEh4pNt2kP4Hj8MF2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3wMPpzJcTP6fYF8UtcxjEN9rMze3k9HsBkjKESDPMNY63NawFYvjHgQJtuvJNZmh4to2pccbeEY3BkmV4RQPBaY5",
  "key1": "4Axpwu9N2Ls4WnjCPCdPK2qzaarQgVB4GfuFTcgeptFVmmqHbMVQnHWcr5LQqzh5MiqGZxRsUtn6p1VY9URTPrCC",
  "key2": "4CTRZVTTrYZgZ9Rug1J2onwwMzKeEG64pZCmNwFht5Km63Wcya4yzTdeB2YZxbshEq6MFjt2KraxR9BiHgrJHKPx",
  "key3": "3EZQMTX4YCJWHkbA621Bmizv44eHdkS7jYQN8o16h8B6quXnEuL5oHu8VKdqqN7Bbisx9P8HU1WhkPjVh8xciQKo",
  "key4": "48V66BZZ2NaQQf1eQ933FP7mfJzDuT2f7UNbX29rz9FFVoZkkF7q7yZPCExL2skqVqzWbFBShMLzzVTzBahUFS1Q",
  "key5": "3p9NF7YGs3xjx8FAR3QY9g4TbTXM5xMJTN6vKBgYFa82ozfXvZjxNzbWuni1DwRUcdjsW7AdZDDz8QHEhTU3kTgP",
  "key6": "5azX5ccHyBikYmNSaJpTgokVdS4tuzKM45va8vWvrGwiHLobYRP4mbVtDEEd2aikwSmq5jYggQFq9j1tQWVn5aGR",
  "key7": "2v2zFKJ6fRbcJQB2LyGj6JzUxFAe7KADi8i38fUjSgk1UzdMCagzTDqkygofW3hyRGpFDr8mKvh6XXBqmFu3yjX8",
  "key8": "38YWEiancMEpmimER9CJqgS7uuLfs6WLmGjd4MyjuVruFPyrUssTwUtmFGLJi1bCMnSJhMFMTAkzZmX1HjKu6w8f",
  "key9": "4twwM2B8A7KkdDK25vKukDey4y7YnakhSFoyHKTGdRUNZtMMBNtgY7UYDdSNYKGsC7vj89xWry6vjFYaK8HiUNfP",
  "key10": "5bEwy5fciCHKfTbpWQUAt2KvPttqvEfiAnaQD8iqU9ZZfa6HKgTPr7qqvsr2sza8eE8Jx1YTu1QVLcDBTyGZHQ6M",
  "key11": "wMvro7GytFCNYcwDn9bWnaKRaTzD29BMxSTqA3tcMbU7dGJJrfLUpyDE2bnQr3HRA8rLy65uisahvGMVZb8RAiw",
  "key12": "2Xwcb3ZqEnJ8AgNdwvpuCxBs4AuLUJZnMUp6baqvLF3Ct8MBvxwTKPTkCacx5UD5259Wq9duG7DPkzECuD8px71E",
  "key13": "5ZQa69vSMa3Ns1XFKVwkUxFTojK4u9XUoiBLqcmoSxLevbmL1X56maiDDq4v9pHA3UF1mQU865kgEArn2GxMj8ST",
  "key14": "4V1rxgW9BtgoNuW4HPWDxUhS3HAsiQ8KesBxThsjfzFTzdokcdtUB8fobDvGHEzTEi7BHMAcrHnM4fS2HxpU7kt2",
  "key15": "5MvKpNjhirUv5G7fp3sv4RCb4gkC5qZoBcaSVSSPGPKjQEATk5zUBHZREbE4PVB76hKFMCN37FsXi88uead3TVkU",
  "key16": "5Avxc2n44TfcXNgSmjRAHLdys23emLnn4n3EbhVDL1jZX8CEnqLPxdQbW76DBFQ9zgztDJHjswFygAjjToeABTnS",
  "key17": "5fbm3ScDrtwZa3Fh533cwLRThwZUgH49PAHMy1TnwSjufoSVNMkT8LCEc4BUFFZyCwzD6fotGRrtmB1ydVzX4Cnb",
  "key18": "3oz8ZyJY8AFz9vBwdxWYz2rNfNQVvd4C6GY6A69yTkMJ2G14ULjWJxUKohAu8VNKW3AKTnynDjHMLYTu8ssCb8qi",
  "key19": "3f5qN9NG7gFG4XtfSfLPCZmHW5hYvFTzAxyu3Gsed33yw7sj98cptSmBajueM9NQ373UaAtSNS5agxhadZ7CQPf4",
  "key20": "41HDQiMXse9JYkjoW3Y3V8hWBJDK2Jt2F7BA3cH5YBfqVfh2y8ndZgrTGuD3xGG569mtahUfTqKpTW3B7geXoQwQ",
  "key21": "3F2qrQpBcAjKyJpedREhMFqd7yQVEpVVcrDdHjo3ycQoGaEdD5JMCcrsqonbHp5RMbmAuRHkUTzTMRiEEqQ7a4Qx",
  "key22": "4rEyNrG3wNGRKhTcF8ynmAiemFZMWAjsv7KNEgXre8f1tQV19pn9CnJLFbT97ezeAGhquzWxVWjh3hZ6tJfoj37B",
  "key23": "3d8wsRJjZxY6VVaov658eqkfEaDsuymQkurNqvUmZnvfAJKi9fJ2yQ8QknE4GAyBkQ5Je1KHoTuS6v7AZDX2XVGA",
  "key24": "nvcFxc1uBhLhJoStZgFcuELUWTSu2qDX9RgmGFj8CfmV87QTkvTbDLz4kSQ8gJoFNSkAhqLWu2GoCjUvtmRqFcY",
  "key25": "2G2kzMsog764gX8WkFJsvPYjmFkYVjW7JeDYtD8nwNDKQoABYiv7dSptQFSF3dqMPfb9mrGaVWwRDC5vSFhzpPw7",
  "key26": "3WB8oeb2YJ4NtkkUSdXfSNjECKGvqRs6ujchfZmiqHvenqZrsv3x6XTMbhFyBdWNLE2KbB6gQ1v3JcvMc5WP64tK",
  "key27": "654G6zjT8Fp148iKm19ybXK3tZeooAFoBK9aV74EE1LWWnNPem556HUfrnEA1S2EsUKtbSdy8ZhDdbyZ5QbpwEty",
  "key28": "5xebjUxVXVAP8oGDyE8U3cguGSxxzdGqkCiQY2354usfZctVSzFEMNZtxZ1H3yHg7xk7ukD17AUw3Fm4t4fDWUmn",
  "key29": "3gbJmJaaJwGowz2S8aFxxkUSjfQqFFE2fKHAVk9xDMFsVzLd3m7Eit2EHWsbNzrZMxjsVTHcXxG23fnNN8JiQRNT",
  "key30": "2KLgMDNXvpm5Fk3rXSLge12bo1169k5sRDmWtFvBNv45QN8osnmoZ5puDB6uhKJrG9wffR84d96XQrAt7uvqUrJi",
  "key31": "LWJ5omHahrjUdpLr29HzacASGaiJoZWoTkbz5Yf5jxiRpMyvwPw7TXmtyuGQ4pn9QG54zagveTVSKHCWLA4EMZ8",
  "key32": "5S7pdU7PnMTivQ9vwiLNPZBFnpVqMEoV6uvoHsQEuCwLkh1V4gkATajvPXTMuGoWo8FBppL7w3q83rnR2TWVXDAR",
  "key33": "5GuvvAfHPjs4cvnWRr2F2PUQbo1LtjDtzAMh7CcVJG3qCCEn3wKQ6cJuLBEwYZofbFz4Ey2FNLjnqxcWqAzsiVW5",
  "key34": "3Xt2CXVSXPMFDPA6RwanswikLH8LuctMxk6fubdX8hEoHFdrUKt8ei5Mz2ug3V1wEC4RZLQWUM92KgenpNqcQBPQ",
  "key35": "2eUHzEgYTeUxfodcTZroR4Zxmnb85QEZcbTzML1PEZNgq5aBydZJ9GhUvVUptUw3SQMuayiV9WW3RCtGoUVZHg8y",
  "key36": "c1Cx4y6R5KREzUvtro4FbWpYcmcYo8dgjUayz8k2cvuji92uYyTPsPz8pYwTMoyAEv3QiJDsJtv14NLpBGy5Psj",
  "key37": "3HUvQQCfCNdDYF2U23DW5m84SkEHZ26DfNqeC24R63pUcfapBo44HXPMRTPVFdbD7QB3QcxoZsRQ9NPCzjnyWVSs",
  "key38": "2sqGeauiLU6W9PtyQQRWGy71xR4aajAn9BzBPD8avkCZ6JbKkZbbnWb4eXgetjgps1tzJYg6Xj6J9H2Wmc3ZBXrQ",
  "key39": "jhYQqNPFM4PM9AcR1Cih1aaQrqKrfSVwn1noqYaeBGvy6aYMK89s8VywkbCtASWV1DLmj4i7mCprS51xcMumsn1",
  "key40": "3JYxjRY8Rbe57LYiiWDtH8LJ4Ynh731twH9fiaNzV5a7EYA1nZHTodLYLPvgRNHg3csqNcLSk7r6BSzgj7Gbu2ry",
  "key41": "2ccyzCvk83DsHQFZstbZbZagAiZFN7TGVzDje5HZtPyFX9zrvT14zSbw9M9GeeLrKAyvXfpJ7ZezVKSpFm9z5gqo",
  "key42": "2w9aeM1fAPwNECHzeh57qKq581h4ThNtsyKiFGmvMZWG3mqcnU7RXucKMZ7pZqUnuQ5ZHDh4KEQWsoNV4EHKz2Gv",
  "key43": "2RsLysqRBy6m8mDY591izEaoySvSXEmgscquDwBU7EbzigubRjZ9VUhz885eaajy1qMYWbRgmgH9tFRukdbTz5Zt",
  "key44": "amwNXY9eUoPU4Fw4Se2bUekoZUM2bhXn3TvYq28LxtoHLVsxTYWDz1Nt6ASwpi2cojU9hsS4oZdHikGqpNgCdti",
  "key45": "2p4FffcoyF8zRq7ResjNH1jHX2P4YF8rfCrWXDireiEKsLPjGkMJoA3hV9KYu77YHFbTJRQuv4zVnpk7wktmGNmJ",
  "key46": "5rf6SJDDvGAtf7szKrgxQq1EM9sv7MhYShZRPioTBPs8LfTJD7LQcYdfcHwq7skjGHKJHuJJett7pzVoBtoKgexF"
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
