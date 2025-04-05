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
    "5fP1Ee6FDefhWqoSts5A7RZmtEGj1acW58BPCXrzTM1yoYYQc1LWLGyDic758ZHsxZN6PXp4Nr9PJ1JDKCaUndeY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2WHbRvWEXhRLpaRDHjN3vkQkNV6RW3Qq2hZuqd5TL6rhQ8U5crHD9aFRkMPo9e85XG2fyFX9XkdDZ4ThAJBrnNS7",
  "key1": "2xgCBjfBjnPCGe3fMGrnpkV64zfPhbqFqfiDbP2myBmwTgJZs3Dh6yVRrDzHavmuaqhGDtFxwhE2v9p4Z9zrHSSs",
  "key2": "8zZyAGxnGJLKcqrA9rLWkEXxTzgGo9837ghm48q1mentj8Uos8gsVN6UkM5dYVj8TEC7vso9YrRxgd8sdrWfYcD",
  "key3": "3HUmQb4u1nW5sJ3ZejhBWf3PMWG4cLBQVL9ho2pB9bDa1q3D9SPWEWiu7Jqr7eXFXEEQ5r22Qw8iW52pQwRRULyk",
  "key4": "4ezzAqtj64YTBzdNszkZHJd6JwN6VE99mheKPxHEGAbLRQoRcMuQ3bqZSWzcifWf3SZhQTeivY13pn7i9ox5M1sP",
  "key5": "4tzKreWwJCEuhdVqW4C126Ai3VxRLCS28y4M6BMQtUQ4EfozpPpG8znyECEuAVid2XYNVsaJJjrsED6gHocenmKB",
  "key6": "3WE2zuBdcDUaZeMA6V4jLgJqD19d5AaYqKSe4uhKDW3rss2XMwTMjG4jkQvbX2ubA8NEQYy6e663EWYLk31CsCSC",
  "key7": "5WXRkSDZJ5tPzaCX2vThxaswya9hpqfVrdmKzSr2gWj95V15JVP7mKmfzSDicwEinZQqa6nvRVS7TUHWy4SHH6LX",
  "key8": "FZqHnCiMxnS9JyDicp3DNt8KbpWqGtwFm4yuwvXdG77oiAu5R46pNLRR33SSPMJPgyXtEWVQ1vVYMgGYHpT3AK3",
  "key9": "3MrxGo8GtCR58ogCDwZS5AcUy5JiaLNSWZkoqniHMjEAQH1dRa3SAbgWtSLTGqv9yazJf9VKtF4oDqqowrDY9sLJ",
  "key10": "2YxDJUVbu18noxQoYUReiuMkVuJjRA2Pky11skU5f1UUUBs5hQH44fSqSrArH98hocp6BU9HctddBnTaptZiXSVj",
  "key11": "MrmAjWf2sWKF5AMTxhv2cAZvhHiZE8k7oRF6LVf3UCVZaSmc9cZNTHpypHAPfpcRSMx1xxjWprJyTTpad126Q3s",
  "key12": "4R8HURtKK5nGjzJLnAXxAT9FqpyVTNZW1tWzJSpuaHogfmBbUS7zYccKFiZuUL7EtPvMuaYGak7av2qYp77HuLa9",
  "key13": "5rT5bXL31rp6BQZHS7xDAqNoHm18fdyhyTrsoNtJckx8C2mMUnHDPaP4ve9MYpiot9qQo2FP49VaTbKDB1FuUY19",
  "key14": "25X4TSpwmo3eGZe8X86sD9YAVZFD7qDAm1Ut2AaxVVrLWHZxYG6P1aS6wHqKDybATmSEWqLXx2TA2cEbv94CjHL2",
  "key15": "mfiSKJNJnESo6fAcvk2SSWbsY41rE7EHoe4dz6xfUm2CTySrYrAnwVQRJJ6Hhta7V4y62H8cbo3E1Xsf4bdb8UQ",
  "key16": "4Dxy2dumgaoEGuVXZGbJNA39FhwMkYJRthYEdHcXrC2mgB7KgvkFpZbUCKZyXoziU1XFeorcG6LmYtHGWUQxwAio",
  "key17": "XEf67gkipwjozAb1myCJNmNVTFLv34HXNCJkqN3FZBDEcumDNXeVkBTLXf25hZaBb6aJU7athNcWbd1uTWpAyPv",
  "key18": "QpSiaSDktzPybRzBT9yKTXVhvxPdfiCMAMyfihMYmadt1uZC42iL1M6xiRiG5xQ837gjit5UmW6dhkNbcRQbUB2",
  "key19": "56ZweoucHKwEmwcaPrawFvh1R7GDUcyM9mSh11daUnsHZ5EeQN2EJxDCktZgBoyUxz6DgSVCrYu4L3ccNDcDtGhY",
  "key20": "2tt3kWXKEDFPD8B4yWzHaeiqLQFdkxSxXTxhgH9bk1jSsqoM5JVoGywyntCzXF8eirD9N6qgtq3CDkKDUhSCcdoJ",
  "key21": "4RnY43PndkbYXAHF6qAPMtjofQsjuQbv75omSy9EsGdn8Z5zAsCVzcAV6gTbURCJNwkE16AcV97MvwBnexDpGmB6",
  "key22": "2GeX4wZyHkdcXnKF2oV3GBaz5ABvFvonKo94Lr4u9JZnehM5SQ8xaoGWveSCLdqjTC3dHfy3JjQP6aKq3xi4SWa4",
  "key23": "5PFjGt2P1vC7HRJKXjnN9g8bTxbchg5qPWNJynxc68tr3PhvmwSMkM4Qa88n1JukZxSRFRv6VDyrDwejakgR7VyN",
  "key24": "5Kwj6yf63CocBiUpdQJbox9G4ULywd9rv5Fyfx2qAp5zKa5miPhG6kB2U2TaRtQ9SZRMe9MH2D2C2ZvuHRmsHn7R",
  "key25": "3a8SD6WQUhcA3q6t1fugTjGjv5fYD89zQpSiA8NwJVGuwJTU6jBTFadrdC2Yum1LTcwFCTTmpfY4qKmT1KGRfkGv",
  "key26": "4BcFgrfibwV3mSZDWNfXYokarQdXykVYzLP2TZU3xADLjDM1dmueK6hXeYb2L6yZtcVXpyfnhkf2z7BjqKyA9YU5"
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
