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
    "5bSuXqmLDE4TYap2eHfXaJH1uQFV89o26UCuP9BtfoozLhLsGQawbUy2bKMLiGZDoGwNe6AZNThy6WpASMRAFJAt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4cvuW5AyCz5cUQDTKAwiZN9TAsdVgfnP8cxANpBRSYHzLjXpVEFCF1LZkqimCYJbd5yaLc5PhuCsaLeBGBFjJ9H6",
  "key1": "51Ed7u6nhc2eD2C9s3DK7YEFtdogU7QZyd6EqgBZJJTX4RmRLgda71DGfc1VHZSXFdF1BsUhp2Ed9nU4NoJwpEAs",
  "key2": "29PuF1uAfy5Tnm1TVwfpXND3cWhXGeiP4SXMK5seccRtCRPPgpUhqix8MwTrqCMjoN7NDjXm79c2ZTzZc5RDGasF",
  "key3": "2oVQtuobpoTGW2J1DRPvC4y1GahNBVXikzRHcsZTxWxuLCAbshvNPeBDJK5eQFySfM5PHJEX88hJd3qy4gn8PDUe",
  "key4": "3q8kUDHJiWMrJf8mCuqEmHs1DdazCzpr26uPYXRjLKr1mFkobQ3iErJs7pjUkk5yuNHQaoLDp1pq9Cg3RoZjjf6T",
  "key5": "2pDAdjDWHmdbCMt6HCbacPMgM7cQDTbja4hC8okrYjDSwrNQjJdqHkfu6jGg9LviVZofwirpFZQrt2dSySrXgZ5J",
  "key6": "21Q2eUSYbrJ8uGgkh3iPQSx1GgBMPB6AsgBbAkez1XCy4EsYTxgML5oBPbaNUvC8d2nr1fZNviUj2Tdo1cztv5E2",
  "key7": "2yt54McFNL5Vp12Uz4Z5Q1FyS7Fp2YzzJoSXXEyUwmjJq78FJwTe8yqShraMYcEsLqk9f1Yjro62MguxMcS7N7ii",
  "key8": "3rKhbW9YjCMenU6xmSTJD6zVb5apzkG64XtdpNyTPScVmKEMmnpmsm6ToTj7kBFnNi76PvZnBYdWzgxVcfTAcc9e",
  "key9": "45A9kM9Y5et49roPXqyrWkDvgjgULoSx25NsLFAJ3VjaXKp572ehdB2JZ6vmRRKkTLoMCsTDgrfH9QCdCX1Kn23u",
  "key10": "3APtiiVQpA8k75gWM3CYDiPayDAcdETRAn9YhWPzSppJABi7QBJcQhjg6HS7FqiNmR74JYx2muoTa8Dvvf4KBQpw",
  "key11": "4wA2KMNKVP44GXtF9bupCYtthbVDAJUC9dPxpWozsX2BtYbNWkLL7G7HjUYi9853nGcKBU3PyEheToC7aiPR56NG",
  "key12": "5ZCgbTPZ1ceuWnT1A1h2EGArLbmrUXL6mm1F2bWU1QtnpFPwQPkMhhrgxGZw9urthneWrKvcEFxm2gugAqcTDuEo",
  "key13": "2ALcbCKMXQcrSxTj28fswLBxBGWUDVKgQVSEQnCwcciEvsRmRhxa2X6r8BqyaZuocz17ZuWePzWx6EnS9sd93YWk",
  "key14": "3GFwhMFDcQqcNcEhqS3ATmXKEgN31ko2E2KLwdpvDMvNTWPU5c5YDdNBVDkznNiqLgZQb6HBtSKk5vpEjGaXiEZo",
  "key15": "UjDTjbK5ybe6SskEwchGBZsW6KG2KcYkLnS7aR1BZxhiuHBZYKnMGhL2396WA5zQCJ8Lx6LQiDgZGeDLpCrPT1p",
  "key16": "393Uhx6KFZjwgAiz21bk2kjhfqGd893xWKyc9tXQS6CDF1RdYAsUFYhBEpJfUv6aXk1ebrjVoE8z8kkKNvYxjz2A",
  "key17": "5FLfPbnbPgVpWeLx6haHXZRZpkQ2TToLSx8JoQJuQyZp8XNjbRMJQNAhVveAbCXZddd8GeRwN8W1mdPHty6A3fgE",
  "key18": "37nLQ7JMSCeFuBRNPR4pdkyN5n9BVNTh181ho3X5oWQY1PAExcNUCB9xhMtxtJzTnRrgZNE1N4Rso8VXBAfgG9vd",
  "key19": "9vryZdNJEyzL7eEXoMnetadJVCr7v5tL1BTeZD41XE9d4nbReA2JzMFgTgvjzMNBAoZ9dnCiUawvTL2eYZeex4R",
  "key20": "2CNrYjrMxGZpvWvBqKW9H7C3hCmMdzhnbnf6inEjU7NFujr8VAkD67wRXk1d4whg8WXpCFGX2UuviC8QdZhFENuY",
  "key21": "4Eu6v52a2AneVHsu89w9FGkTj6vz41syiFeDfzNXSM3vf7RZLdbFR43JEBos6EqKf2YZbCcsA9RAuQTdFnC1aeG7",
  "key22": "5oSbu9Uvr2yMMG7jMoB7p2XW5ZdEdTa42cSJAFDqUzuEPbxMXa7V4YCLzAvR2WQmYstqCyyEPjLomL32paQdEySN",
  "key23": "4XzAhn6NRMhYJD5VraGaP25G2JcgTQSshoPLSH6iBKGbdne2EAwzJ5ZkrWbfrQEagaqwuHAAiTKHLgw5K8fb1WHS",
  "key24": "4wsAgA7i3MXUPxrj2EizRzEWVN4T4YGuoC1nebGS8uwKfjVc2T1c1fh2VGMUV2Rvg4ZBYGUCogeujGtfjRYqtGpC"
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
