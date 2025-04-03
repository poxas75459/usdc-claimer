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
    "5FEbTvdzVFavs858zrhbTe9W9mq1HNays9ezmbeQV5VLZoxZNJEY7D75vj8SBrvrMoVqhHP2GrG3JcYP1nP189qJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2XdcHm1qZRdBKKDoyMv9kAo7vD3aZbNgNrtMu366eU6KBCf1KoTRXx5aTV8XbvMK6S96YEW26kSBzqfdf9Jff7pN",
  "key1": "2QJXGqfwvhTRK1V1Yvec51XTBB9qKLCVwa9E42kHukk7vVX9rcmtZL58kLZcGFrtMpVfKN8texZPNa6K3d7KpX1t",
  "key2": "4RmWq6ngtj9xhjYuXZqYxvLpLviEBgRGpk6HZ5JiKeTdHPxVEsM4GBCFNdvj5sjZzLiRtyGcQ3f3eTj1aT6q2fn4",
  "key3": "5RYjEmrHTUtnP1pXrUJGB21zafKPvnfxm2BnDKrbZD3gmy4dX15Ew4DzvcCk4LAveDHvDRNQmfr3mgxT31KptoXZ",
  "key4": "36GCp6RwCf96Bi1a5Jfzi27xjry5PQSaBPhd5beR4hpft1yXFtxgMNVwy7siB9dSmSy8A2rWrLGz1wPgU98Q1PAZ",
  "key5": "SnToK6gUw1mfG4R7QtzkzdHk7G1DPNym26FhUUEgmqVZm43diufxDJ4WXfYu4yCXpVwYMBTJXbthVbpjEobQKeZ",
  "key6": "8dpfhi3oyeFb3fNY66rGH5jHzJowZw7ppUY1BZWNtx55T77uPiSZHi8vXmMvZ8s9yfVotTBHm1NK3ynHrVa2qTY",
  "key7": "5knq3DohfSCagWTRzNCFLyBrL6uBQaXkxG6HEYfR9KgLcUjg6cNSV7yxNqKW8CDj8ZEzs4Z6KkWpfeuDtZcp66Fi",
  "key8": "2vWS8SQxoXmu9eooBQyq16KQ1BvSXuG2zQ6w7GuQNAqKpZnozwbbPSmrJU7sMydKu9P7MAXUnoyqvpR6RXKPeFC6",
  "key9": "5cyrbcQuX9U9tevAi6F4EAQAaGDqcFCgY9ZFpT1JoEuE3vfkuXBQyjAnrr3284NVZJa68HTdqAZgpgjWbVCUBqYS",
  "key10": "4kcx6jgWXR2564qKbicru9qM9wXjPsP8qtRy3EnNZdJ3RHBMui7BWcdjGW5dsFVYNDEBkQbc7MgeezJdQ3WuRuCn",
  "key11": "2hGHT1DcPXNq2BqrKdAagBY8Cec2wkFFCVhK1QSozwWo7f7pY3hVCrZbZvbGR3Je8j9GJh3sbpsM6s1E8fUjyJaA",
  "key12": "4cr53CLhbqgPWY3LvWihvZUJ7G6FXp3UciN7G5uhPyudeGb5nQtXkbXtyKt5tgk1nxFarvZ5bwqamNh6ZBCUNo6K",
  "key13": "2AFbg7BrVc8zath8vFwtEjiv8cppMP52zuSoyz9qG1FbxHk9LNKkNJf6RhkUDErqVY6uHqwfcrN4E41kumQcPqeg",
  "key14": "wDtFqeEfDMo5gGLZP867exztXnF4MtwR2hSQ92yUKizRxyBKJayXEs4faKUYf9aP3dp2r9LQRJ6hxKn9JUyPzGD",
  "key15": "5rGZEfAGgKwgkVq962yreRv6PcVLhYrmRb6NHvZFwECNF8KVPpGc9RR9KPS56vd2NWWQDtHqZsDA7pwUwXyX7d8T",
  "key16": "kiM6Hwvu5WX8iP2VG9E6eKzykZmE2A8YYNiZvRvB7MZfmc1XoETKwppcjL6VpqvUe4y9JSq4dgWLugSzMzuoeKD",
  "key17": "5XHSEpe92yZMqfaHuaq6YyU35qVJLumGHjqCbZVXat1PVoTw8F6R323LSzuDp1qKzPbGR51zJjtqasha3hQjSSqE",
  "key18": "4MKHrCV7T8TUwoJ8JRxqdWaNafzunDrHT1WdveUyqRYtaZ5BLEZc4fuTtvtY4H7zg6wLW3qMbiSYysPSPLf8cxra",
  "key19": "3wb78pNKGVNQcqfMEganED4d1mmsYg8Lq8xYFwyw2RdbnX4qfc6DJJbNLFFYkQcvQ834v834hmPbgnktW6Xp9A5B",
  "key20": "2YFPM54QjBewBcZyPSgAuKUdjguBVX5yoJUbgD5VAGxRuSTvvz2P7xuSSq68AxNM5RC5ZiEGk841LmaxnkYeA5Jc",
  "key21": "42HCFGhSsaEKhTVh9zs3ZdjyPHeHPSe6MnZ5vGPaAXmhyVF59fjNdNT8bZXXz5zCYBjtoNfm2fifTHQLefYQzkUm",
  "key22": "4rnWuKQnvWeonAUsmm23w8d1hdkJaM1T82CkLsHtzh9yYvvJq2JYd5RpukFwYVQEnoSjegpk85h8PNodsw1QwK4r",
  "key23": "3NW6if18qc5AVAsKfsaMzHcDN66k3mtuj65eSTCy9NoMvsQug6NsaeU1WeZ8cf4gc7z4dmyyLXsinLFjh6DiEMUm",
  "key24": "3psyunW3P3Xbhfc3vy3F3nEcPRtREbgtGAjZhhs9WFzpjLc31DjfQcr3aSBEXwyFUP1nRAYe8WfX7EvTxKnzjGA6",
  "key25": "5Rq3FYZXtDB9XDZ5SbdfZDmip8j9EkyyqarDdFQi5Ebv6DjANdxzTe8MZstABRcuhm853gR6WUwbXuBqma8PHC9u",
  "key26": "5yJZscjRKhFFEyvedfrfALyrJsWGsPJnozY8VVY7FdoS4q2V2PdPdk8vP8uQAi6h8MxmycSxVaXqs5dVA3nriyeT",
  "key27": "5mKC4Lyip33JqFGmv4s1kaviEFkEwUFEgjbVAFpTxdqU3FWJc2ZrbMS4V6k6FuHDT23vUrueMtEF9gDVMfSCu6kp",
  "key28": "2SCxGKDc3QMAVUTG5F4JoPr21wW78D1r7Nj3x89rgD5sCs3Gsdbqkkm6zxXUSS8sny1LFKisfA3W9wKWwJfWVCXV",
  "key29": "2tAdvTbxMqF9BsSW7yosDhJhyX7cM6T3uR4K86mcRfrEF41h67dTM3XYS6t8jCQ8nHZceEbJ8vJdRigFgCnC5WqM",
  "key30": "2gW9LSCVqLZQpVzrhF2HY4rvtwJwXrWb3u5yudnp48KmKb6YTqDSPfAWVvS5xUUX2B2WzYx7RS23M2EA9EvXophb",
  "key31": "q3kyCXy8X8TDcGUYsTwA9QEYxUmKXt4zshRNX6jUTRkuCQd9ArFPqWBvfWpYup3tvcLAKGQG85cKoSuZMYEGn6C",
  "key32": "4NMmKiZDQoywaSrcMceLawU1CwPdwcm8FoQYTYwDH1qoA36RfKH6e4FdkhceCeZWhQ4xzLmVvLS8AHbccT8JMts",
  "key33": "3QyC23o71CTrH3a2FZ9epfF5Age6PfDEvzuVbwtqgTCmPDrsKrjNtB7ktFihNBVabfxz1yb7VmqYAf3QAKaAi1hX",
  "key34": "rNdKQM1bdsQG19fxmiwmgDraHDJ2mJ9jSiA7oM3NinAkoZYoLUegVWwQ7ufQXfxLcBiKQ4UjQ748Qh7RpwZgJPG",
  "key35": "3egWCV1J9qiAtRapRFhKaUgfCgHjPE7zX7w2uDphkwscfYS86DPzXUbNyQD6SRnJ5CsH1LVaXedCUJpvxwVTtZtf"
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
