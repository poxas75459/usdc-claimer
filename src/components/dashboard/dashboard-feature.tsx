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
    "5SezTw8efXGa5SVoiffiBpUeDc6rwiERytX4RSxwXBGrn7T8CPr6qFxkGcVR1rP64z1xKKcu6FNzVm3fokW9RJYw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5XBYeicRp8MEPSbWeSgzEMtqr73sXrNnMDuz2opkXkREKowbjrQeiNMW3seGUUiC5eHqWhw3jAuLHQG1FLCaxVBY",
  "key1": "PHeoHFBZYnyjgfLowoyX1iKqNaJQhEvbuLK2GR8wbxJRsjWvPcuUJKFgDfGEUYmCMLnqJ8d8dJj8tbsL5kiCBW6",
  "key2": "5gxNTHYS3iNmmWy3Eir8j5khfCZzHafsPNo75E7i9BfwB4f5smjYioUNrjJXQ7EWqiRHudWGEW16DTJJeQAKvg1H",
  "key3": "ByWjHMR2jUhPmt4ggzNhsjja8Vse5Xg7XVErfu8ofgLib6EhiTDuNbUoWR6PWE68CxFHwp7eW7pQaFRfwz6bffi",
  "key4": "cEThK2rzDADdE6mgvTZxw89CroDvyceYAZc5Yojrdy8MRbe31tYkdUVHL3y2Tpr5xmBYSJneMGDAtxntHSJB2YT",
  "key5": "2EdeaUm9CHP9y261VYc3KDfuja3CKkJovpjn9CtqtPRMpqpCdBK6jwPNc8WpUs1rESErfv989WMjhsj2A9wYpfuU",
  "key6": "25Kos4L8u8XeviFvTZuDVakwyC64AVPnuwZ2V2Wo16TkofQ3Bd3Lav8WfwtvpTe8k8pcCvFLXKUDcKpFkpMFtvic",
  "key7": "4Vdpq3FdMMp3mNWu9QNzZiDe7VPjNFcjCxFoXT9zGutV6NisK89vymePtvX3v6zfu3iM64r3KzgAUMmWzwj2Rtc5",
  "key8": "Gppki4brpNVxfNRmsU4ZDDQabcAUdrohzVGxzFxEeyFaApi47ayzCqHTukM3m2gbSkAE1mB2ctdSVFwd6U24D6n",
  "key9": "3L8BeGpC94b8B5yJku37aoroukKVNmNuYBv4RaiY1DJWrsEwKV6NL2k77EiTZKsFiUu34uEERaYaaYdUc85ecnms",
  "key10": "8GKahcfsDT7KKkK3PdLU5qEMUHt218XAuYUZnAXiP5L9KAFvGCzPBjMv8WAJGsaFa8hRbrZdUWvcf9aGgPyrqbd",
  "key11": "3gwbm6834jnZEPZ8h2pkPMzW5ShxsGhgDP3QEhDPiBgGJJFif2JjC7ryySwDS6hxg79PxgFB5anYEmAJRpSshRn4",
  "key12": "3JJfXuSErMPgSLZpKn8SS9fUstoKrzQQmX877tjokkkpoC26AAqAvs4rAacAEc21VoK5anjDfUyBvdhoDkGhT8Q9",
  "key13": "mPV7L9YHH2RXWi1boeTHr7jSNMWAqXY3d6V1LfBP2mqbqEcAWZf2C3J42rPPfixyoUp3X3kbCCudD4UUoqJhnbT",
  "key14": "2Fazw8mxx4UCSgo5mVaEAz3pVhnvza9RYVqFRs1SDWz9bodEmNnor8X8Cyms5ZeKg6BzfdvTGTfP7L9m2mJZFaqa",
  "key15": "2pCKrSnUSfDMSEsmEnFC2yNVvAZmr2WrsrhRiW1nscvkmfZtvLk7pydrzKgRs7SYNps8zM1swQiv2yCzmFKWrYoQ",
  "key16": "WS3df56iQwPf2Wb3Enpzk6WwWraCqSKpZvLWaaXh61hqzpcFdGBz8BeTQs3WTCxFkKKUSrmsn24ps5TiW69YaqK",
  "key17": "2SoWBdNA1KnQ5u9AjqX5mCSg9VepgKyw5uvvDWipcUPqNCubQt4jxfZmkgbrEC4wYjTJcwRLAz6ZqqF4JJQmKARF",
  "key18": "2AjXRnaLd7JWGZWbabJtCvwz9MBnvn1SNxN38EutNrMSeBwcHSEwNJjvndZr1hWCzfq6Lo6HmxbbB2tLkM9tqVy4",
  "key19": "wdkQZDfeBup3rBtXC5zHKks7Y4FpLvgcdkcorZQCYomLLnK61Hct76XKr6KUyxMJbvywHK2jbawRt6PSjM6sbPo",
  "key20": "4idrZEjVaMeGRMiTUCjyqLKPD9SQVoampr75cfNDTDF8YAvnSy6W6YRsFYcKtnhbQThQLagDLuhKPqdXTg53ZdET",
  "key21": "5ZWzKMAJnfhZETK73fyRUff1gckF191qdu3iGLXRxe4EsW3d5CeypyFUSjqgnSzqBUjPFAd7u5pmraVUit1Rmy5D",
  "key22": "2GASktqDarWzND7HU3MKKiMstGrGrTs2HSn4RZ76mvVkmJudbRA8maqLMNhZFohirLs5CYQX2LLugmK9jM24B49m",
  "key23": "53vk1VCbaBdxydZcPP53HkCoJ3GNGhSwSRYLaKTEZ2o2e5e4VEYpjD6wSoyM1Mq8DqUn4C45tw7KA1p3i1p3nVQd",
  "key24": "3KFwqtBoS6Lae3k72sbJTVMY4W79KniopDKdpBpuENVGbLaKhhFz8hpxAsbXpSahWNxkFPwmi4a732yVFK18fZXj",
  "key25": "2WyqZnQTfzN7jikQAaK5qS8fgknaxe8vKZ7mpjM5RfR2L7B73VUhe4ZxoiYbjoQaKi4EsS6EMvXUNfjSbR2YQxet",
  "key26": "2w7C2iU8ckTFG61U7NS2seSHiDyoN9h92vntNJVQjrQXHnkxndWV8c7eC8bk6tzojcArjr3GSVdN914GYjEqksqT"
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
