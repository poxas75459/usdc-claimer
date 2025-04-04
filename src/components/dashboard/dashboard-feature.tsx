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
    "2BJZpVz5eHoxiypmFuU2xuggSc2PmGu1KaU3VZSBW3tQi7oSMtGyrZ8WLqhXhk9dVci8CtzrRujndpn9SDN1qG7U"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5u6QeS6xyiEHxXH4WB4pFWVWeeWRjA9AEmZwnSF9Ms4be72a1dbPc2HhAw9oaiFEQrmKWK6jCgu5LtjyD2vEkiUt",
  "key1": "3AXddh99afZBCzWBVUbnagatFUyRXZ4hVDbm1mryxCrfFJvDb8dwXJJNKzo2CCHqn36NSC7TU4g1NGCxrCUZnAEy",
  "key2": "3TB4RV8tjuL6pTdgZUqqo5hP1hiC7ypGzLQC9BABghxogv2EE8Hm6VdfcHRtbjCnBQvuFh5qG7Xx4mHLuSR26Vsm",
  "key3": "3T9vShWaHK33gUiPW1N8eesnTP3n3FBoB1KyAY6tsAGb14qqHiBWKaTgRgrk8AnnnftoJiVVCuWse8ySpSQZhBHo",
  "key4": "5BACibghRv1raV8sbYFRqoKAaTyiYpGoCXJ4ZiXtPEgRwCP6GFytmwmAMAByZZMx7rXJ8BEFVmWZcs44cWpREr7e",
  "key5": "4FeS2VK2Wbn2dikZBA48B4JeFD3t9RrcXLkKQdYU9o4tcaa7AijoGEW3SF4Jo4qeTWyEC7fK25cSHoRwwbL5vYdH",
  "key6": "2WtmFQWim212ASBRCrDCSC1SCAUbdF1RV6mz5KCZSc9BxvNwAicqdMoxaqnAiCXR7hEwh2k1xEgf9Ds1dpRoHQvJ",
  "key7": "236TvaBcMHqtfcaBUd4fuk2YetpxkCaAvyLKLQJRV7sWCAcjFiDJex55tTatzhxrmesucfzL8cpRQtGYxzdLJkxK",
  "key8": "5Yp29jBYSy1jxmGdWerKtFuJS6RLaJcWwVKjvEKZTvqYp9XN7MmzTuY5YSFPP6xKCB4YUT32zWWX5AiqfZ66vgwJ",
  "key9": "5YPQmLTaEAfF4k4rCWHuLN848ZLBCxxqW8pXrLqrw9tCYfDLrAo6X7hpcxA7CFmRyUTmod8gxNqXMjRmL9S3GZEA",
  "key10": "5mazXabquNZer5ZLQxSMaJBrokuq1b4o4HqyY4d3KdGG5eWyRT6tTQH6G5kFy1WDd9DXro49ukEwN3uEYYbp5N3T",
  "key11": "3sU3NtsvvypWT3ZApo4RpkGYky9D7EEsvL4yRDszhSFViANCka8x35oB6XAv6DHcNACcsMJUCmhLRqmAGZys467Q",
  "key12": "RZom4ewhBbis17n7r72cqMocMG84rberowky8f6x8fGPD9GevUxqtGpMnshCSX4tiWJWNVACxU1Yq5mugNfd7ah",
  "key13": "2EixYUBQyippyyT2fppsMg1vuYSV4y79GSBDiaeZqt3gQxm39n7M6jJ9AbKSeybUX6WKi2fWuEJAvdL3nEaZa4tw",
  "key14": "3wEBck2UxXYjkecH8whgcoscasHPNQJDU4jtjaVaJA1NiaTGh5n7AFUBXdddh8e3UXi1W8kV6x1eWy8N7WiSrqv4",
  "key15": "qNsSM1LTein7iyWoyfGVUjAf2ZxDwF1AYoRyv9gH5S7TgkgrqsQ4hu6ngbdUBBsGme8m2H1uG6dYXskcQjaX6Hc",
  "key16": "4jDDBt2jf5HpV4D4HCfsSAuMWDSaenuTg15uZcjAWzJC1zLjBdFwwBdaBnbZ5EkzLyJT6oJMGaMMDnzkF2jiGPGJ",
  "key17": "GmGkNcG5rPC8Tq9kj9vT2YmmisHXzAW6AzzVr9zabCRPhQ2yknKiReku97zw17xmHVKaS8JwDq3yYvi5AAdV5Pc",
  "key18": "5y55pQz5c1gsEmeP8fuSMoD3AwFmqd47tFLEQJFpQwoWpmN7hZptWEQhgicGMmjbnXSdKMe56NBrzFVom83aw2yC",
  "key19": "584JEAUzhz3aVfLKCdq31YHXjbxPabJVSp2E6Vi9BXWzHBwH4pooZpzLdGs1BtwKG16yTzhrFyYCfEKMi4REBRYF",
  "key20": "5KgQvvGW1pKwjv8yaFU7bS8TR9Htzjy5SDChbGWejbzB27AQSPEguXT1XyxZshv7kfHrbk3wpkLLiAhuJAVKvKpB",
  "key21": "5BBK8hbTHWgQuJz7JytvHSEQS9AYaYKHpMAg22cNj48fRWPxoePRiDnRasvqnZ6KW7epeEDNYpiTrj6PQycT28tZ",
  "key22": "2W1iC2Dn9ehVbQMuey5WfgPqu56R5N3UdRcQFpJWn3Uzq6PFweJ9rd6WdmE6KB3sTAtzqbqHqduLxER2DT1pJ52g",
  "key23": "5wvuZoKhbXFQp8CwzsgfKqm7h6RJsd5r6eJ9mc6Sie1A9zuMYaWsdMkdqAktdPQB4eaYwxRAJkmznHzawfC89vxW",
  "key24": "yKT68dX4dutSVFV35YH8uov7BxkjLLgoNxaTacHycmD9N98NUMcvLYfk6CNdY5Mn55Bjj9QzNG9FhNgizhNs9Y7",
  "key25": "5opeosgkHrqVV6iYdKLrS316e2kLP8E6Vf4n3tbvcoCRmtCPMfitzwHYo4g1GMwm7soYsiucgfXdHjDZy9eSToa4",
  "key26": "4hfjoUHSe4QQ6QEwqg11trnyJMUgpGKnVNYJEz6EWqXS1xGT6oAgBMguesfii7R9ct5GQd6ZbYyVNbB8Y3GEPtPw",
  "key27": "27cehx8WATxXukSqETEdHKuNcnDgW3CPmSHimVNvhDWrWR9ZeXdnrSJBQiTcuaqQz2gA63NyYmb84qSsndwfauFg",
  "key28": "fsV9j1oJZZNpADCfVMvBgLaedDytYhzzARe38vX7reKTk5BVCSYuWt8fkic1vLskj2wm3fiVPRq6iY3LK6tvBfV",
  "key29": "3d1SB8YXton1Be2SHW8TEMXkqizCP64N8XHz2ZNAYxkktacNaExBfPT8WwR3GdcvhtkABxziRvpSBZasF72smQKS",
  "key30": "NhEy9ChzeuVXqD6sb7e23eCQMeXEqsN3tjRf5HpTtWknq5EuyzivusJQrz9Pm58AFHcv2SGJzBMZztprbymgpZL",
  "key31": "2Gz8PExVRnhXogvCkc7AA5owF3bgX3xah1wrxEkV6nRizJVFiKdNNnQTwu5N4WgWE8vTfqduSs4pjw7ZS3xJkSAR",
  "key32": "49bu1jLPtsBVcFa22VpBefYDYTBumygXtzPiYCc7vs5n6YmFia71zPs9F14TmwXnSwQkUT6MJ8tCtad4TcnpLkvG",
  "key33": "5x1kjfapSCddXRVBkrNJqPhPZutZo5LNiKjjsUWhLwzw46EcHvwcsdwHDbMEdCEkvwae3RFacKv19JLBCCajSAYp",
  "key34": "3f1F4mtmbhn1XrJpbZgZXAThkH5ACK5kGpBi5T3artJTcyrXz3yt2kssAPoXYjWfKEoAXqN2acvgDpStmzGwkg8A",
  "key35": "4zqFEh8j1S4QuUxRUXUesqUGVJ9j8heoi5JPJzCTkzns6Dd6dBKsbZGGxY5tCKR6X9vhMPzynemB5adAFnDAG5p7",
  "key36": "3Ue7KnJhx3cdv5m7gh5XP9TnqcZa7nA2Xo2DzwK1BDTpHojAwj1qEQm6YUsAMQpZebnnGtwq29mkUpaUjBDoDZGD",
  "key37": "3VmrPws8C2pHjYe8dqQsR1SM9HMV5nV3bjNFG7LEXgn973PuWSBUiJSu85WztThiZ1F6sBiqVGbqAzU77VzujuFV",
  "key38": "y3MfspqUE65uAFowtHgcvqt5BbxxG9ykQd5MmcLq2gstVqZXerBtx39sZXWZexy6igT21nerUDKzvoqQ3GUjYKz"
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
