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
    "4SMi3LVZZtkuG3yXpVNA49GjFXRp9A2Waq7jrQAT32JLhZMFPE56BWJz1xNSr1TX5JAk5dMNWZ48bipGF8L9W99d"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2wK9qmnL9RP13A5oqpFDLo25Vr5j9uqCFs36mW6geNvQNrYxxzrQwrNNGSArz23iLyJAGmFZHNJFvoyopEw8s8HJ",
  "key1": "3gmuX5fxS1ehKoasXBXs2VMQh2EZazXsrMAHzyn5PCrsYrXN5wFsYiXAdu5W4XJq7ebFFBJZmCC59VjsQG3crZSe",
  "key2": "4Z361EjC7DuAC214JbNzg2PabbTS4mmMmHTWXAKEwuaeqSQ1jgHcBARdjfdbEZV5emdQwhwuQQQ5ZZvQPvRNMVR5",
  "key3": "3tAKxMx3QAFdheNzGs7hastAobQjzDe3HFLsLgqNn2xJgFeeeNKCwkP1sXxjhqWZsareLkVB7crfWGMHfecW8Dd5",
  "key4": "2B299cKpLKf4psjQikCJibW4RBEwuNZAWAQhUSeHecGJN8HJhPvtBUttUcQXnV4zeJJVQcFXosCU7wi2ANXqmmsr",
  "key5": "2iFtQw8RzPkHKaCztQc6NR5k9cvWm1QjjxtQsUSquHcaWrUsgeCm8cMygUdk59SDk4kGDb4tYunS4ZZoxyLtKUDW",
  "key6": "4XB2S4vjTgtektaT1KSwG6mQmxmJzkKwKwxvdmU9jPnpwMfjtsRcKRTVW2QN43GqQSt1upN19E3hy1sFNUMGekJd",
  "key7": "5CZKNuV9pC1buhoogcXPc6e8DUq5LyihQfNkQPTrVvzw69CArK5vSPvuPXKbXSiu8hyXWLp7zBQRwibHGaZtXjej",
  "key8": "3qFPmnuzkfGcBjF5AAdrSD7A6P3sHnkx8zk5V8hyrnahd4Jaw19v5LzUudACx2xCA1stJNrYprJ9xJVKuLq67iEp",
  "key9": "25pajxitzpahxWu8nStiCN1eZemFV5rMK1HjhEYkNdMgN8oxazdENHrgCUwpXD63bhVoArEGL5sTtf2ujW9N81J1",
  "key10": "5nVAvNxM45onEQ7h755pwZkSf1K8ccXPCA83ytGjygUmJFkw47cBb9V1yEzafsaqef4Y4FNLp7S4L8hp7UwWYrBY",
  "key11": "637zrwFmn4J1vDWfmzEn7VxTdm2Vn7x1GNLvRkWn5qZFNMVmgkYDDQWZHZYYjXRBDcRHs4sTDw7TRCiQyw58eGrK",
  "key12": "5sGAJVSDuxCqE5MzU8KRTthuu6N4rLU59CMTDXVsk7G5q3Sm3zLNWfsm99CGTjMHcTM5TNAb9gqFVFtu8jYNuANa",
  "key13": "2ft1G48EbxQMv1uzsorT7UdGAR9yg6nj5SMs4HwmeB3KeijoGMVx56kRd4rApzxUUPSj1m8DmMehqtb59SUbPZUX",
  "key14": "hB8z7C5f58GvBDTfK3fSabvhwDShPNMGBd8ZM3LyiCMzXRvuZk28LShxxGn2omZkUCN41Was4KN5n2MEzYJfxZ4",
  "key15": "3CbbYrhN1R4GvAFDPHrCVGY6t5qp2yGSprfKZa38U3fx2P2oKoKZYM8xZsRpUWziR3ssWnBBcp7AeE91Ezy5LbW6",
  "key16": "3DAM6ETovSfCeXFqYotaYxMUZM5djRsr14Dw2Z1haux1ZfxgGXcHXgvTVkv8wV22dC6ykTT3NhFgp1HhNfYieTex",
  "key17": "3wjTJ5SGKNYZ1s6CQ2PDXw44j857pnaQi2y3V1pLuyHbg7nyDaCtDJtocFEfWPUyQPiVS8Bak5xjAdXeQTefZ96i",
  "key18": "3Ea9KXByirPJpW5SQiKDgvjKFMRvVg5ZnKYESXV64aUz2hYN3Uk4B8WeymSh97ymv8Ef8Hhs3LHeupeConNB2g8g",
  "key19": "5b4DKojnkNAcLbM8qZcQ1brvtR4FUWBoYwfBD8fxFfGdHrczscgLzvrxh1xA7yQtNgLix5ou1je2B6CZGmCvRWdz",
  "key20": "53B8YHb8px7hK5xrQQf7Y46wc2a8wUwHK39xV74o3WKTm5RzsVLCAYTvLX7ASnwp2MUDYdoX554AbJmWJ9cVZ8ZY",
  "key21": "2sEq76fz6xqFrws19J6Rf4bUihrbQ75Bn3TbgP7kQyRCSDMXdHdpn36QYRi6km8mHixRG5td6q4XMq2BCGVFEJRV",
  "key22": "5docs96qkHWR3J24Kc8VNSbY5c4pR3VSVKN1SACEHHCz4wT4DF8XixRA9bRq2N4BvGv9GA397grCwHVqzHr1dorZ",
  "key23": "4BKrRz73cm6Hv4stN7kyQWs6XYATWPtpXJ9UuCW17TXCAND8NYjuc8UzT6WU8JgCLC6F8jTohfFfhBDVYpQEf8NG",
  "key24": "4ekZrzEMGiXZu9gpMhse2To7kJy8eesDiFV2ikuSLHurfrSd64TgXdQ2mHhfMUuErEH9fByv3fHYG64A3gp3y5NW",
  "key25": "4c2Cagjutvw4KyzUeUHbjwD9jXhShPsfkfuJiACjYMCBxP1rKqFPqoZwznJ8C4U9cU7BD5AuwG4DzGo12i24wDdH",
  "key26": "3KrqcWFMgb5p7E8Xwq3NBjARNycRUxTanm3UP54ezvJNUFibujHqURGeR1RcBZv1mVtpo8Nijx4xLpKusyXLr7so",
  "key27": "2dfmas1Rb9Q2hyuTWNZUtJifZ6LyuxdQUo62LdebYxttViiocRnTWu9G5Aphavuc2Fj26C2JAEDPcknx3s4FAiE6",
  "key28": "5YHZee1xvZtvBfSG1dKu2Ckpue4AsDxBuPmEwdyPR9ZLRT1rgMgWqkBY2ySeZNDGoNFMuaNRpWTrYTu4ZYbr1UPU",
  "key29": "5ZZNwAuCM1R251cJzFeV3jubmzwWhpWfGAdMW23PYPLpqwLjWnyYbdbofEQnf3xQ1x4sAfKpj4m91qJFNmspdyY7",
  "key30": "54S3PW7ew2vAMLpw4Hgxs3KhGdVTnWptQFxKQraAWuak4gqDFbZfUhueYbMcAxVrwaTUVkWHwf7wYriNqmgbyvHX",
  "key31": "5J4G3rk8gHqhRw2nS6NUtdt7shvizVN6TDss4SdsDYUSV9L5fr47Ex1XAi78XqJM2YmpyGjbwcCw1b6PpMVH5DnX",
  "key32": "2ueULRipMHc8wQrrfSESt52CJDnM3yvHJwDGUpo1b1hzfTpjqMiKemND4ELo4Y5aqfM2Dpjfauy7HrXoq53VYdVn",
  "key33": "L7Mw4xAvw1fiMLv3jsfvKXrhq1wxapGCsWcBqHa75WEdKRZnREk6567JvRsFKJsYW3xn1GuDCT7M3q6QDbQ9gt6",
  "key34": "2V1wVRMRVt9TffyatmCwHiVtXa7s5nBJYnXHkNdN2jSusFirCyw8aHjFDUWcUcW91C3zRS7WBozV4nFS68o9umWu",
  "key35": "2v1LQ34Smwatc8inTvcM2SoScfegbxq6JwRs6m46TZ9Kk9a5vZdtqQb46UmU1zERmcxdQufVW8UffrSxCu3JpPZ7",
  "key36": "513QeSGX2smtcbG4wBoJxn1csTZEX7PgBkG1fLeSbRKWmNCbgaQvjMe7okWDnGmnSmF24nPy3SnzPWUtn2v7PRW6",
  "key37": "4QBuZBcPFGBff1GR6353ZrztQaT8RNYRaMPBMH4Ks43nUMGUpPVBNNDN84wEaSv7fhX4RxSeTrcHPgK6GFCNFXQp"
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
