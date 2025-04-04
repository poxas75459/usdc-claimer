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
    "43XijfwR9FhmMqK5Udbwb3WzKgKEhA8Z3syHN8dQqbioeZU3zm4fjL3AwGLGwogvcQYRJFFFWEVPLenkobWYQga7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2npYBSMktg5Y5LJ9Qk2w4vZ4K92J2G4vM2LPLzRCTEt1o5funLAgryZYwnKQ4Dop1YVxGX1Ks3XSx9LNfSgFBVX8",
  "key1": "2M2uMx3HnCzzrKbf9D8CsyPUkFw74cHcbGCfpqXPSDXLL6xrsM8SXh41Jb1hx5SYNeiCdLcYkXgWx4mT3eMTA1fW",
  "key2": "4euPsTa4y3c2yboYAjXdsjananzbwAwwJo8CBiJbBsnGoju4PeZJFJ5BeKmJLShNJdtJmKTarUQrA7xRJgaTQcak",
  "key3": "2vCDbjTkmXN2RuofuNZN5c9JcUdExLUNo4DALw4wKEDAoD7zutb21TeVHG1mCVLpRTLDvfCqcGCqiegJGPZFtdTi",
  "key4": "3iciVEjAJejcuv94P7KzkMcj1QnXVEw8Thzhfd17L7eiFcDe3J5oFmwCmmM8jpmSp9PtMMRD1fb7yKHp5ueToWEq",
  "key5": "nTanzYPupSLZR7gBK6qiHqTN1vd6L87XRjbJ886SsYQis7GwJAC23j2JDHGEFcgGBpjUK5MXTiPhDKWiv9NFRJ2",
  "key6": "o3NwwffFUgKx1szh5UEPQz1L2GP8ezG9AaDsQvg2rEwpZ5rqU7aYbFYk1tTkmxtyhHfLweVwhGduLSrEWiAk2Np",
  "key7": "5yYjof7newKKwEJcXt8nEcbApXTwj9PLCfWrFzfLocn8TRBimQuKKFS3UCAVBxAaW1gQAe9rGGZ7YxeFYsE9M1mq",
  "key8": "2hLfwG88i6Nt6JqoUMQwNtAeDhmfFM5LyPNA9V8XbafAbwUVXrycZfpE7wNstbf1mPTDJtX5FjSG7WaGp4RzUhu5",
  "key9": "5d93immPfZiAirE8Hpi49hxUCx8TqD7JxZpsVKF3CoFrv9Lz491co7zsF94Er4b439TtrUw8obz9qD1jxHcDWv1j",
  "key10": "5YNxkuhX3EfXXdSqgxy5XQP4GhcWSTdkzdFtXfdgn3xgkXtEhWYzqxatXdLfep8qQCyjGnyZZzCdB5uTZ3BH39Jt",
  "key11": "2wCW1AXtq7J3oBTKt2iWtqosgAo8kh7Thkn4UWAnxdjzQSjH5ZhPc4xZ1NtuQdozvxTYXCoTb3s1vm9X5axboj9T",
  "key12": "3MGPU8ZB6bniNZAR6JK5x9FKFpwXvSvMMUciuZtjdNam4Wgx2DFTMCnJ3m41GDWTnAQqRKA6buC91BYtt2EwU5vi",
  "key13": "58E42XtEGqNYGov3NLpNY91HNdWTxpn1ThiuqjPBhC65JNJd9etXNLTyhaHiGUDiEgA197B7frrYgcwu4pBUc2VR",
  "key14": "2LmEbt2ywMEEVXXrNgjtxRZ81s19gR8NmCVxuVWzD7UtGYRDbUV9pVbtQePWuB6eJ4PSH9JLmHjmfV95S2UQjnPN",
  "key15": "2E5ezebBPFgLzKEkr144FAn9VR4jvCeeqibesdjP1YGvjM54vtYmJYSHVRVKmd1N4i6VnA1LHY62gEBHsAPaiKRD",
  "key16": "3ceFKTe8HdsPGZvVqm9itYb8HetrmTwWVqEibUgUqiabsb16Xb4Bc2bcHwKVUrDQAzzqkmdttZX92XmLMB3jgYe5",
  "key17": "2kgr3zqtdWa1qQwqpE6skHKHVdeJ2xV1K268wSp6AopdVdMQRobCLHmKdKXg4c8SAgeAp5ur6DBm2u3J86t3oaYa",
  "key18": "5CsqZiHtVcmCHJmtirnF4r5Hw72XJGSx8xakqLBPMKEt5sCHhJwziEiGYzkSZaC4p2n2R4PjAH4xppdKAMpzkvJK",
  "key19": "4oCxDC5873UteDAzHLAXoH3KuHHXjFqRTMcerH3zP3ib7a2DnjE5AtPC4bH74cmq3e8HGBqQA3kNZgSa6qwNo4sA",
  "key20": "Lg85QXi3YwtDXguU6A3t25cTbnCpVuNdYj7hzweM2ZEJYUBJkXdDxtsM1NvMNaVzK7kBhXQN9ATvTXVxdnxBqKe",
  "key21": "2ekMqcC6QmxXQwCy96fn1hxxzMPhtQT3oQVtECWN3Lt4fY7ELxL38iU3iZRd2xPMgfmY6eAb1hpDG4hToFsSSEmk",
  "key22": "3NQHoNC2tFe4pex6ahS4ELmb6FAVxs2KSntUeu2XGK5vvjfxhZrobgSC9QWVETq8Ac12Ex98r95wq9NkLDbXJFPE",
  "key23": "iodp9WyoNxWv5SEuk6H6vEtKAJ1RMMVVUkJRgpP2AhNYSgSAXyh2WJYwhQ6mBVdQ6CoWpsDnBoXYCHoiRYFrs1s",
  "key24": "61vjfzsj98cKhyXaQdV9sR5DmYKbC4gvqr5TwHsMRYN3GW9gUDpRoZq8oDCJgEWp9yuyfmeFUeo4ojwXKp6ig5YN",
  "key25": "4LnUhStyNMNG6h4yXjL4uKe1BJpQwd3gVy8LhZA3kmCmy5FQBvupeJfWRB17sux76H7NMKLnZsMhedkuPoiv9V9y",
  "key26": "3wnDy19wqU2s4tdHV55ByPW6d5dnjnoD3JgwdPTfi45iwJyJc7PFuRdwQ2shddv6Pg9J1Q8nu7hkZKm4hMohuUZW",
  "key27": "4QQmogMPhihmvk4o2vRUmMZECL91Ao55Nh1BFRmhE7nrVwF1UhY8tEGpPibsPhpFgUp1BbgFU1gqm8GDvUz8uKV8"
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
