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
    "2bzyEMXXiXohMYRPdgvSYYp6GEa5MWwnGRtaWsR148xCiAdBx4EyzqiAc4pnDfQdboVMfdGT7Hz11woxHnNdz7yF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3nnYSEP28t5UvZCNbdvuX2fidqKAQan9axAVZhEim9x71fFnkC4KEQUfG4S6tEFuKNTn1TUrdsXBSxwM8ec1Ty9g",
  "key1": "2dNqBNrXSWqcDevMjuXCHwyd8yczQnCoCHiFqiqHocBdPP1ZaHfVigdpUVx4GmuzdPKrW8AubiFKeHeS8Ywhkpnu",
  "key2": "rUY956yDCimqYoDZn7v1H8qHG2Y1h3hw4xYnyHozBz1pDGfwNdRt9RXLp8ApqbxXyEdgZstPh8LVZ68nV5FArDZ",
  "key3": "5dLpDeFizts92dEEXYcw4LQ8WvwDgRFU2HLiTG9MG4YHktuYMsQiqYAPCRWkTuWLAX6XQ2Qmx1XA5ApEtbRsvVqQ",
  "key4": "3SniTEiV6MLihH4zcsAxxzhw5WT6MSdzK9dgpyv4ZAckJof7bbAKfS1VpCPaTuDAX11QL3sxBEFxkFyQFPnse86r",
  "key5": "57nGXzhsxX6vRiKqa2Aanxc4dRaoNsDuCij1tq1kAHNBnL6g8Uifn6vmnZvcvdZx6NE7WstRZQUYGhv9ExHb95Vt",
  "key6": "4R5ELL1Y66HJwuDtgqFxtML9DuTANxPyWgigfEWLm6k5ni82YbV9c4dNyTEtC7k8YZabrhAUoh9vHqnGcSuCs7rf",
  "key7": "3id3w2KE41eTDu9R7rZ7YE1zgrFPCJcyQZAZngd7R3iWAN6XUx9qCLDma1NUy2XF72P4MK7siFFNQcPL8xKocjpy",
  "key8": "hzru7tz3zb84Gmn8PY6MTtES1KReGmf3KTGU5wGQU8Scj5dbJxGuWi6DKne1K9wDpA3sgf7B6yz2R97wNdXhsnE",
  "key9": "5vD5K3QZBXXZfDppTMf6VyC5uZCoQq6BrQB1XZ1RF2onRA6s3UjNiSvANQaEc9C6wM9G7rDj4HYCLbFWED8BQHNT",
  "key10": "5ZP3TD4p33LDWrzJRnqFbTWo5jFMi6SU2L8dbBWK7w1jyGpqsfHGoZ7TcaBS51Ktpz8FHXFcCSXNEuKB4qc39t9N",
  "key11": "5VkENxaEHCMpaoomKMLCdZcUu49aEoXdWe9VwK8hV8QjfMeM3dJu9JCad3aezZ1AahVRj7PbszSKM6iBHDPsxHRZ",
  "key12": "4dHJqAmBXj6NWMXhgLrRn18vcvPpxpHHLc41UDVVADE2zrPna71P6uHqSnPftCqaVnk21faixmtUGopfHyQA1RGq",
  "key13": "4CpFv2hSeuPLpS9zD2LKf76ru1PZZtgKifERp1ZpHLmErUoZ6dTVDhM1RK8fp3SseMGUBeD46HMUuZ3wE93uF2RV",
  "key14": "5aE3vbLMJhLuE6So2NToRU16pRMKKNRcJj5ceKR3iZ8rkHaxiB3eJb7tUA3ZBKHMxHoqPDCYKGALX85vrc1FuCV3",
  "key15": "3b2DG9XkMDrWaCXWqPijtfJQEXM2iXYxJHbdR9mSF86iTD4Q5xqoDoQ9RMkT2eEzwgF46LSYBDwmaWcjhJy22xAg",
  "key16": "3cQgDTRRq7XXtZpepjU855MZugYVzaoe8G46cMUwtCeyaX2dajGhrnxZJNUDSeG46WfkKXt2pTpsj5E2JudHQXLV",
  "key17": "5TRS9msDrzjXwiyAo95Y3dHuKYFUr9K4GesjGwTqgepU4h2ZYQiFRyJVw5g2x4ommZuM8F2bFrmxhKC3K3m5SyUV",
  "key18": "2aSTu46bEFeeK1L8aZL9sNX65eUCsyMwQx6tHR1JkFp1MJdDK9U4iMSdyAQUUnsuwKKYxTEm8XMEdnvusWVcxCsu",
  "key19": "3E8zt3ZdCGyLkc7gGNwPE9MLV13ULPxwTH6XCeHA7U4WV4bDWCYXK4W5DYSTN8zrR1QBTu41ieLyENqaNQLR1oSf",
  "key20": "37oUqR2wub5EVnB1nyRDA3dZdw2r9989U75w5R1vLwjY2DSvLURMkG6CvA8ePRhBvoBiQQNp6CKoAeXWrucsE7uW",
  "key21": "2NUCUbU6hZzEbq2XMotDQBCNSaXtrdn1QZqZTFkiNr8HSd6NkP68GV7RMwigFCkrEkSvKyrpxPACiLCFAbGy6jrq",
  "key22": "2ifyLXJiLgJJkBzXcGca3jEKSomAKkQio6RCmhmwX6rdHRD2AP8Z6Na5FUrvhoP8s2eHRM5Ue9bfKyA2p4xfw8Y7",
  "key23": "62NG2aRo7qdkAEaQiDSnhQ3PE7Xi534LenTCTXeEtNSi5ehB2AVr1SehB5ovkZexdTE8jPHdoDcmQxPQ6Wof5KAk",
  "key24": "5KzgaxhvNzPEicZ8bCXwQt4sjtAPTHthur4zowu4815Fv2yoBJsfEVt1AJ6K9B55SX9Bimfu2Q5Tk3rLoFCkdY5a",
  "key25": "5Wt1ES8SKWEeAPHDykywt3YFUrvpuuAuXXBNVVHJzmKjpv8HPmuYZkv9sFa94aFSFEVrtrBAdMhDojNJPxJkEgs5",
  "key26": "5NBa8jA7LBASK86dR5jNCzXoW12CGQ55Dhj4Ho56zZ7iAw9UJdFCEAQmGZqjHVyUEM3ywUJNhs36bbjZQvmRJyqa"
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
