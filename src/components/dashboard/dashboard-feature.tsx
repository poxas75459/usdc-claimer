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
    "4KJumsEiFGb4nJbTZaXiYTsUXkXWCA2B2YZS7PYFCvcEKdgF56wWBUNvzaccM5yCDNLKncMWoUZ6e2vj92eA9yA4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2aDcdV4UQQRv1pFBBqqPHwu1kf1WBamoADNV6dV1rqBDKSNA5zLksa4bjoXE8CwgKVFUvNEdu97ppds2LEYTgYZ1",
  "key1": "4Pqttm1nvp8E6viNX9U2nHzWcapwkvEzZ8YM3UyF8D1GMVa3QNTYA3PReLEKBqPYz7n6udtGJrsg6ia45AcQ8Pph",
  "key2": "e2aXpRR9vXLVXS3LMdiWAPTP6c4MZBkYEaYFfkU4b5r3ronLyvXijkvMp4FTd1bAWZ345L2L3BTZRpNwkQD1F3z",
  "key3": "5hmTKyzvzM7tMFfrXfqowmppZ19wXh9gkGHmxhA8qDSNEDrwN5mMf1pWoNAV8akcU3n5WK8DGJyw7dUfnMwmQxew",
  "key4": "2HnAWnnvpc6orUS5pw4ijKxVsnFd8FkAa213wQWMsC9FztUVyS7o8hAZZCzFWUu3WaoQBwW6RitPscgb9f3hVQkg",
  "key5": "vB8gqDag7pXZsanMi8KxhugD4K8ghDDSB6c813h3hJVo2heZUkMBtbhnWcNauX78qh2jkxhWKyiNmEzftqyEmSr",
  "key6": "33dk6NCcNiGoBgwnUy3i11WfBmZNMQ9C2AW3cT9FPMff1K4aUat5pjuQDu8RKuh8vPizMhaPVe2ZcQPFxYmXr3Yc",
  "key7": "6LSv32uNNF1ZN1zqGNsU7nGwFbAjGhofRGoznpcZgc6FiXss4QG3L8KKmUBWgoxU5ErEwbEBXpEzmpRD9NGGcuV",
  "key8": "2LmmURkJGCUzXLwmu7GKwZHiUj9CKTua8gWbuTUUXNQ1CFV9qouRapA9tAJjTKUiasZm3zQ87PFZNQJh1gRcPUC7",
  "key9": "3Xed61W6EQ7CrF4ZWLhaMi72UrxbT5vBmeCUtdm1GHrzgTM2Jo7pzTzBRCPhk8gEFhetYHe9kwNasia6Nfo9LzSz",
  "key10": "4wwVdhgu5c47hehokBFNAswWoJG5VUpo7WB3L95zZdRwdbdALjqKoRVLThyY5jJ1kUmubY5ReKT6PYRJPnod9Hok",
  "key11": "5Q1qmvvcz7or54PJixyqeqSryoBEftnUoM3jHR7bZ4Vp6c6YTuyMunDW64aHdVGq4rB5egnoLkderqsD7QMT2erQ",
  "key12": "3z92SmAojV1F94abXBvg72t3u16tzBjEHbHqNVPyD9fJpViTsCHru4mekm2JXbD1qvTq8mphaTKePpwtJu8PDKKX",
  "key13": "2L6s6evNozGv662rsuVqfTaJDQ9eGbRuDcuHCEpx3SoR9T8Uc9Z2n9RoPPPAaH6Ze2rtJHF3gZ9vZppDQWAx1Xwq",
  "key14": "3RVfvdgVdCnYzPLD1KZhC5sPpSkU4LCMdipS5QkQCxBXWWquDf9mWkBh6Hq5onTBSDZhA9LiNxCdK7TQjKWQVegc",
  "key15": "2XqoAgEswfisL6BpPmN5ngNwXEFphnuhQBBv4u7zebRiHvYURNriKSq3ZAfnVzKkAn1BZoLjxiu34W2naxw5w8o8",
  "key16": "2F4ux3cNs1eCFLXvhseRxL4yoBkRmiCuhVdigVpCjF67fCyMxtcGt5TznwZDgTmZfH4PcfDthARc6UEbWAvTo67V",
  "key17": "4qvtSQJ5qZmpPB3nBQ4JrTLCCSoP1YWLRxehe6Bpw6F8d5ifFkcvTmAAdY62Bo1yDjc3XJ5vtS8pdBAikrCTbGtA",
  "key18": "3pBDftriktopd4gLYbNy67gtqHDMRwa4eSpVF6pzMZKVRNsXCFKDg8RV4JXstj7CJEiJR4xS7hv1Y2BTLST8Ekpi",
  "key19": "3Nrnovi5iDVcwjbTAqUYKsa8iq1LRk8xrhNWr4ze7svURhTxgZ4iN3muuBgynjkAPLzDYC8RYJztbqoGjKoekbhn",
  "key20": "2X95sWH9DCgAsuscYrkwwwFsnxDicaBBn6KjeULnW4dnhLBcpksqGaUEePiQb3UKEKfRpeSfwcdooVmg754dSyv5",
  "key21": "qK4skyeeg9kh9Yk1mdPAsYSPzXzxABnqRVSDvjWzYGLpjVrwSY3C8jVWN1ELy9eY79mvp9mRzgx6sJLmoPX4d7Q",
  "key22": "2WhUWcosdhAcFkkUPUEwWtPGtpNeUQuCcKGZ2NuGaQ5Mi4WCEM1kszjbuZWEEGJ8qXQCXus2qjZkxipgNuukRws1",
  "key23": "5ZJmFHaC3Fs23D7UZ6mATjqMo3G52qWDJtA4RWuAqz9Pz2sQJS1wQ9t8YGNnTLntS2SS4WDA4y9UFwNo3ADpKVRh",
  "key24": "5ixFaacH3auN6VGTqafFy9LboG671VqFo3CpaSgfQT2RQ5czjgJ52dLadsDgRQn2goUMrWSps58X1TXPTC6MJykf",
  "key25": "pQCq9LaCoxDRMhaG7wu2uHkfAg6UtLqP99E6kHCA4KVBAtWaRxzeJLKKnW578WK9TWMqJ7bw1kuzmLSh25R3A1a",
  "key26": "2b69X6eK6K4b4XJpTj7dn7mpSYerDmnTnncY6PU1sttgt2H3yKPrVFZkXQZB9k7Q7YdiwxrLKwPgcE1psSo6EnSK",
  "key27": "2oj1pTmTxX5Y1RXFGvG9K3GV6J2nbweRKc3bdj1mXPn97kZfHGs4ojQWAvjsxMFXPLpfK99CucySXB8Ttvk8dMLF"
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
