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
    "4gxYJzi4RtNUoxwuVHELXW6w4za53hAts4XDMKZqBwR13mze5FxoDyDdaSGk2fpuoeuy9g2CFquPusep2GcEP8XD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4P6CJpCWXMp2QYs9nJhNH8EU5n8rBBeMr1zyyhESEwi4veqH5QkTXzQd6RDywWBJDPmPgTchCru4tnrDypYH9zJo",
  "key1": "3FEeo4UXCctiQNFVLdD5w3wYbvvRx1BcyYUyRuZa1uWfF3d38813FQksBE6w4hu3t4fn6NEEA1v36rQcZCKws3EJ",
  "key2": "3kycgDKbS8t1UMd1n5Eh1s1uM44d9ipfvZycqj2EZwQMqXqvdnKBPidLWPfJcTNsBaa7N34wocJfRUfDHPFc1CqN",
  "key3": "5SEke5fV9XMvHAkeoSSDuWVChRHh7Tmjed6haV1iSjWxorGs58SnNkTrGCsWVq1Jj6BtXdvr68GV6HQWeSYgTcZ",
  "key4": "2k2KAsyEro6YFxHhnNoZVPGHkf6VnxJDMFVDyYJCquJKYoFYE7ty79khMQugUztmvGCdqBX9uhGNpkdUXuWCA6c",
  "key5": "6YnbNM2HLsTNPHem7S6VTrpGd79aR8PhVQyUfD52nPJy59NPYMzBPyqZBsF91pCAchXew7YByFeHJy1MDDs7Vav",
  "key6": "2hftcPnhpJh3T94Wu1dVoW3Cqeqm348pDqxhYH92ghZiqMNpHQDdUC4hwdeY6nEPW6fMbKM9vdwuv9SguYMbuUQ2",
  "key7": "4VwJsZt8Fuz5kYUnQ24CL6tsNhkppjx21pVcxogM46mXLsiyM93sDDV1v8qqq5SpnAALTfwVJTxRWkYcv8U8evf",
  "key8": "mpGxUX2BsWQCBsjqS74b2cK64gUsRpjxXUdGZkcmnFUSAdgoQRrfH6rNRDuVjBRk6rThupZZ7ZwbcN6ZYhg2g9h",
  "key9": "4wfWVu32RkUa7U9rvUunjD146Q6wa32oQsPyTG7ZRUSYWo5gnXVUrfo9dKiC3ZvDGamZE3LcxmNjsd8ZxRHdHMEK",
  "key10": "2SrzAKYhURuDwdbQxcnE4u3Ffo99ScJPvk43BEhCD9N4vw1qeoTVvQYkFkpwouJbs8UNYT9CMSvyh1NpanbouxNF",
  "key11": "2fYufPsVFYj73smVnRnrrKJuQKrW7s67gMemgeyT5DzdWBduczaiC9cR4PjrdFMrQe57i4HfBecaY7esqEcLy5be",
  "key12": "2Kb3BEsgbs8RxneQayi839h4ekZQL1jcUG6mpLEjKpuGp7aEFa5CcQtwkexFsQ7AXgemVsngp1JygiXN6VL75d1G",
  "key13": "3eJYHzuKQ5HYW86ic5GNXJS6Mh3cW7zPnZ3oXSXVNFvArppif6QxhhiVGKtMuBdbZLbpogEPGHzNNcSpeJy9SefM",
  "key14": "5GAjSJqLEWzUGRNkwVJ3JKbZDfUVZpDqynCoersbh3wN65qZ3tHbpEyCkRE9Ztd6fwwqWMAzzWrPbpipBM642ixb",
  "key15": "4TrKXRT9uFCJMsDGv6WHCcM7eQZck1BXviz8QzXV5JGa6zUMLjyMKKidj5yhP8VZPfXTsoPVAb7tddFospzKjxyD",
  "key16": "2gN3U3GLUtDzrko3VM9Dxtx9z1ZGE2M9dNtWfMLqJCTG17ZAVJJgzWAo4cPoK8jkqF2H2nBLNSys5S2P7oBu56SM",
  "key17": "459ukXzY7d3zRiWfzBVfxTaoXfdD3wcmLgoFiJSs3Bqqhz44j63PWF1R123zpzXYAJhUEaBQMtVyEa7qdjUVj3DE",
  "key18": "m4JzHT1zfEPPQdbzzXU6ma1qbgz1meonhVhF32hSK8CeHr969aW1DB39VPmVFKNdyYL6Va151fLBnxGTb5fXaHf",
  "key19": "2nhduw1zxDb4Y81r3cXcqpD1gqtaPzhT2PaSVcywMu9YKaUziqxkVSV5QyAesrm5ebCyKRRfu3sYMoKHr5g7Vmsf",
  "key20": "2e6Lq5dNzTa61UGQvS9Fb2jJRbhx8RUhgMUEQKLAnsCqXF3ae44gNY3sJrEMME2CLk45hmwAnXcomgZxKncV6qZb",
  "key21": "2Qmkku3yCcD7cMW5ccR2BEe5X5L7AjyaTXqPMKyxbRQzx2nhLYzfULz3XfF5k3LntCWo2ogyFntu4iSUkZg1nfrt",
  "key22": "3y2RgYyt49DGuW8kYTeDSVyVxvzj4LYw4SSX7GYKWRVTfUjTAxiWgkgNoLva9ZQMKt4jabMcg3mR3duufFayR6vi",
  "key23": "5TUsFgMmS9GAm14wC3LEhMM3TJYVeFbXfARE9qt3bkX4QDAHBfGdoarqDKj1E5Uif3bcjZAMVYHyUfSKz4F8hH1",
  "key24": "D4MbzscpuWHqQyvBF8Mirmi5YDFuqzHRS5tuk7hMiwjpRnWBFKNPyG1VHAP8rtpQDbip3r9YnftUYPMWqAuwtLr",
  "key25": "2MisbbK14cFdr3Ek3cyu5W8dRdn8G1Y3QjqMAciF8XAtcWt1JchkwEQi7DR38UV78L4dUc8S1FKy8E4Qf95UwxMW",
  "key26": "27T51bZaiNHBmwiWKgwq1mU6EYZEAbTnQ76TKQaZDZFoGjxfQTjkMBsHHwPegRrLDyTZUeuiC8JyVDZPzkV4ShVs",
  "key27": "rQLifPbWKLNYd1uFk1zo6g2UzHnQ6T7VpmG7dykX4jHhaMyoiMeqCc56QnhGPjvue888jnT8AGAeumUFHoo4XZE",
  "key28": "4knBUF3nF6F9iPLNhxSXuY1Agz3GACVzsnujTtijrG8ZuBd8CBxb692eoYE8veVeWyt9KToVppn5Ka6Ue67URdYh",
  "key29": "41b2MMS9EfAXoCPAFKb4ZSoEmaKzfSzGDopdt7L4pxuCMPgGbcqgH3bwCdqFCqichEJ2Z3hZWRBfXa9vdNeSTX84"
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
