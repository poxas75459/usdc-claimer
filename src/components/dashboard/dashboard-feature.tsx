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
    "2qKyXPJHFDGEY3c8xiZQfhusGt7f27eZJfScfMbLn47ocATifD4dr67AKKrTt2dhFdvNBbWYuDLhZLxjypojtG5B"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3B5JSCGEP6gagWLYB2ZMabUfcVtzV21TverDArCaSkwjvgP3uEpryU7nqTMpXAkTCAyo2Adyb3vWrjVq8dqrXaLP",
  "key1": "dgcMcEgNWvZnM7QoE4HRZjueRraibTqttgFY7UsmAe47HhL5mWNPy38VVuxiKbdF9DamyeNNp2XejQE1jZrpKza",
  "key2": "4Y7yJomaCDRENQzeXmNSkafYszZjUjDSxRr9HVNkoAiEaZuv1sisGDgzWsq4acAZskMfz8uhxZk28VDt7mUxCN6X",
  "key3": "4J31Jecw5PwdznUiKShqoVDyADVdyXUWkzh86TgLuirkAovjm4Rn73enSHmXviFa66brR2owqzF4QuedxaciJdWt",
  "key4": "3z367zyJFUTCZT8PvFCEMCJoA1i7WPXJdvcmYBi7HEjH6dmWiqY2jhjD4Vnb1RHBLxYu4QETB3Ey4qUEe6HWwGqY",
  "key5": "4dBbFy559PahArd5ZCfRJhbQ5G1g7CE6YjbKwC19p5P8tprvcyg3RQayKocWm74cYi6RztXEFnL1ndRD8wn7mNW",
  "key6": "piTYNaUthLwv1LySvn9gyiob16z7sjUevGZ6umcTdhAubFyuJ1P2QG5qGjKhdVFQuw25yiUj7JvMuB3rYDSPqeb",
  "key7": "4rrCBhjErg43ozoAdevw1xx1pqSnpkXK1ZxLLoGP4USrn3cJCqPuhdEQAaWaDPrXamFXQZjUWVaqNqyb381K7BJM",
  "key8": "41QaakR84qbuoLVm5HKmnLVjjLSaDP1w16WNbhHoWKe8yuFWsX8BrnM5W84SEBect7AjAANGWNEkPeCD39RABK2A",
  "key9": "3chQ7569EEDnGnbVRnWQdorAMyNqSeVYPoRLQXxAcKzG99vwU7qvNedtt5V5w5gqL5Rqpf3st15uw8yA2Kon7pP2",
  "key10": "3PyTSvEcNPMKLjWq1xCTRWfaJtEM7SsoN5djw2rkJwK4cDcnHPixdvAitETZeNSyMkEMSaoJNCRVqNAFMxj7Lnpo",
  "key11": "3ohbtj7A8CC46HeW3wWzpNFgTWSnFDpV1udZgJh5w5jjcnQTkUryGLc5m39Wh3rMP5nqDMMDUnq5kNgAodzD3Mkr",
  "key12": "56fBgoNzZ8nvPyyZsLSHKouSCqpwiXzwcq2xJNpvs7rnra91qgyGq3m7zofQkCr1oaXHyrrKu64fAcV7W4HNBCx8",
  "key13": "5tHuPjFVUQQfTmFBivgpFu7WVnmSK9n4ZFkjhaLn34yAeygQ4VMAEm5RHvF9PwPFKzqi5M4c3fLGGpGFbTBWcfsy",
  "key14": "xiovdWrpiCkaXFpYdYkQEGC9KTo4ePTNLqcg74CjwL8KP4VnsADyrUHJtJN7WVw5NR5JQPRS2841PEmVhi56z4u",
  "key15": "4gtHVmZ8WQPFyZn2ZDm6oGeRrutsYXCxrBoiDy6p6LGUS2KCGpRiL26wzrBLKEFsWuSVAT7SGf5uAa8ogMQu2LYx",
  "key16": "4UnVSkaeuhJKCBEB9Mntu5gePVyii8X2QZy6qbAuyp5e6quk5WAiDNq95m8ps8fjpe5XzUh2JoHdx8qLJJue7R3t",
  "key17": "2QgVzeQHjfQfqX3wJW2Lr6NgzezWVj5WFk1ZnvU6KgY2DdibqeYKCogiXrvfxvh9xYK7Vtztg9gUpYtmZLBECaiv",
  "key18": "4DuXCTHyfqNwxUd56guZcUQ1RKeCtbmA1HQCEjvvP2HYMjiWWTJWYGww7qD33qxRSgnEUuaqfeFrE1RMQMDDidmM",
  "key19": "5NHVZiojvhLrY6BNxuZhvwQTeYn2xenycia37V6omipQX1YrxpdRh8hJtAuWHMfo59w9RQGXPoXyyuHnfkRDoYds",
  "key20": "2Q93r6FmPoFafeGcFuJdJLiF2q2K9rPNCZdKeTNUtaXu89fTmZECXGEngKxtE6r1ydfTNv2rfS5J86mptJZopJpN",
  "key21": "4vnJ8BsvofUAH3k9JhoqRx1v1ZkvFydATcqBgPDWWVQxd3rHrLghTfw1yJhWgxHGWzhKhsgmPz32Ltn1ffUhLDsB",
  "key22": "33zwiRqu35Q9P16HdfMfSknqpdpCCShKTQ8HurdyRgjykahJApKUffbNu8SxiNFKa9rF2T3a4E5XYN8nVWANRFDW",
  "key23": "4CJstgbFtPyCE9X4cw8hDy4kdaqpGMKidjpHue7LBxv3pmQudAFEMjz1EtEChDaNrLem7kZrN3xAsjftSeHMgvGB",
  "key24": "4McJQgXhLjGokvsqJ6pjxPBXPSVrQZyputrpDKJXtjQt6uHLNaZaPsQ4JYdP56ehV7kv9BLemGvaxY5HexrgEPqW",
  "key25": "4E8Qbtytw95VXK1LUpPBDcWHfwaPs661BtQBwA2ZuZQacAMbLxKeRBoD8vNQGkKrL57YHF4HQH1Z55L4dAr61TkL"
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
