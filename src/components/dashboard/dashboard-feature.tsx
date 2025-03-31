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
    "AYJeyeYD3kjBMZETYcn5cepSDJyvqLpsB8GZ4iiXXVGYoG24oL4eS8xryUzkZXyYWKV76zsoUY6NjfTmcgAKrD8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "xCyVhND7RbULqdCeiX2nVXBCPg9y2NYNb4Z8NwjPo8qwG8M37a2S5qU8Gppe9i3S7Rx62pN2LmrnYaWtgBfC1Dz",
  "key1": "4bwSekzGVcVX29Zt5JZ2jJUon45p2NPciRE8dK7rdkWu31cdfaTHzD4ZbdxzRqU6G51yUJfcnmFJq42pBR3dY5gU",
  "key2": "2u3MNdL5JJUQJcW3EFi5tXuzwz4EKXGjpvSJGy2r41ZyRVoDy91Z71t8BE93cPevEv8FsXUCHrbbSa14TRSpPHdG",
  "key3": "2M12riHyUF3R6Y3EdBbNg6n2FfouyjuRSBhnw1Ptb8CS4TN65ckVFyVw1dxzNYjNgQNq5NLjTHrBJ9kJd4JTbB1t",
  "key4": "2xJBr2QBgPi5iqtjPoZ4VNNDLTuG77nvD5NgjijVG4EwwrhHbpctpKungaWvaj8V2VRAoW2baRgpmkdQw6azWpS1",
  "key5": "5tpoJYTubgU2VkU3JfCDLo39tiqJKg1wjk3MWrun1ifZ8dQNQWw7E7TAqmVGQTA7WBPBxcLVwc3T1neGhE9Shq2p",
  "key6": "61wD6mui6YeHKJSmdwU99sjBFzoekpCoFeFxZZcrNfPrLrb2SiQBFPrNHQ8SSQtGffqXRBAs9dDQbSUKdQXozDPa",
  "key7": "4Nn28ERb18KwnTTw7Hs5GH2NcwV2NiWAgEJ3fw5JXETradstxwgE7sc9sTLJYsDBpLSUSJHxuk7zSxaScvduhLbr",
  "key8": "44STuCKNE2zzuufQEd2p1iMSgbMyW4qdycDW6pZffDtCtBRr7AMDjV84q9NveFKESmQGHdSzPhmmyFzWYUpQGJgV",
  "key9": "3SWuV3WyitHwMFdywJi8epn5iBo17FaiTj6ifXzb6rrAbgejLib5eE2znzrEw6LzmSRFeCf6rzrZxcxvDyyiqYh8",
  "key10": "5hzBz6sikBpdZYmkC59PEj6XvhfuigYevDUn3UxoUGTXQ9JqLHKjEDRMZ1XjMcmsB9VvNcPX5iCiC5UBuwVJMVJm",
  "key11": "4AndJqpZm2ba25UUGGbdY19Y4YUxWnTra4Q14387rp7BbuKbdVRxzmrCxN47LGLF4d7P57Hzmmgm2SAXNjFWgz4w",
  "key12": "2LKSiZJhu7NFuTvWmk4Pt27iVQaPs26BaFFfRdSH9HgVaJzevLCG4kpVcprt7GNoAVRUmMG3aHJmMhVjK3MUW1rN",
  "key13": "6theoEsaHLRcmQtBVtjtCgjpXap7ZC9nRq2d7EwTvXaL6aisECoaJamaqXhkfis6SYhGbEZC35442npuUHjSoP1",
  "key14": "29oD6m9oA5bKpo3R3L4kqfGtHJBRjiFxhAWMR357u95zKFuRpFau9mZa6mvyGjj3AF4WZLdwPztsPve37wLHahx6",
  "key15": "23YBoPhyqMxLWWTvwQECgM8XaruNvcwv9zfrTLFctEvzjZ6rNbEP8zR3T4uXz91pMwZuybbHrnNDEzoS72ugKkDa",
  "key16": "3TWFsGXcbgA5opinRKT2baaEmctPYqRZj9YhwvoYt9dzEvASNq1bSQjBBxnZWWDgtsv5aCYooZ5zRmedqkvqvVE6",
  "key17": "nxdKGcrKYLr2sgW5jsdwbkNGh8oHGwBfJ3u9vzafREVXtj1QSaHwXPTFZRY7ThrbjfHsS3daUQbcZt2UVFYRQD9",
  "key18": "K6HmCcffA4sdrMBRdvdQHpC9v1H6eThmdfwKHEjphit558k3rTJhuUW87Sdp5DWFdh9SQCAKQKuapq6336nZ622",
  "key19": "2LH7cPsbJHvLsfPgij1fJZ5UQUgEGC7RQ5vGsLxiD4finDcKqZyMszwsQzuKxCGWGd2d8rnYcnXicMpGbTYaMK2T",
  "key20": "2LuVbargfn7P478kh8U4jfQsbZiBanxnnRCg6WNt1iWJyw3Un4N7gv7fmE91K65vrJuMweGVrxSeVpqXjnkQVCiQ",
  "key21": "4yhfMp2e1dAbb2LzCyxNJM2dVD4S6AskUewyHbH8w9UbvFRcYLSXnuWStuYCpux76XqSmLGLPXppQZTR2vN2aE2M",
  "key22": "3jcJMJeYGBApGfxnoZ6Z4CbxTboDUqjrLn4sz1dxk3rq1Zk4tK2axpDhrfb19KZhzEpEfh9RbGZZKtjEgecC54wx",
  "key23": "4ZpVFpUxZCNWxvNUbiYJ9DDyunmbiFgkkQqxTw9PKbxkQSBrxQjs2tdbeB6dwPexcYPFboiiFvpgZypSA5VQMUny",
  "key24": "3edWrwdrpdhctYBgQ4wqKBTx14SJXrGphdbMGEUxPfW97RZTZmEdMYbPA79VhZ3LhosgcSJuUa6yMvXZL9Jveg2d",
  "key25": "2CW7NEUiMiYFMN62rZaYCscjEC3Gi5KxcharA6Rkk87mrNfDQW7pwqsB5TVABcbzmAUoLV9wpUqMsKbSjPysy8d1"
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
