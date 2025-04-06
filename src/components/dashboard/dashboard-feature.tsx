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
    "4Vp9kMAoXih6jPQfQUR2tgsgGuEiog1Kp2N57TdoqL9EFa4VHXPn4hdqpuuSi8gWhhxd2QPwNxdz1YNFum3T1GH8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3fBNycQGH48MceHcM4nuCYAYgnz3fCDgmVSrz2GcDRoi8hsvC27WdWxhKhta7WZyRzHqp68YLBE64dfXKxJJ71xg",
  "key1": "5HySUESfebTWzxTYZCkxvYFf8GsbX2GCPopawg4RPafsTb1Q63LU2GjP7w7TH4o2EkW9xScyafqgjSiWWsALZH5n",
  "key2": "25prDjUqMvT9Db4w1iUYg5bjqKhUx5WoNbG8gK84fYBSmBPzY3AkzKz79Y9KXQveq3NskjYAxg6sqzKYRKbu8pw9",
  "key3": "4XQb6wC3kFCpxrZgbQmhNRXiuCnyr3t74ngFAvgWjAzGKj8EgG1G9u7fxdNvQ2YtMRJkRHmXTgm2NZdpTz9UW95q",
  "key4": "3HGbtZpeYgQSpDwzAxjN2jRwGjHbu58qHqfXAztu1urZkXABNibWaJzxV8KuoCuC1nheuKvuojh4gpYj6vpUyK3G",
  "key5": "3r37kd3N2NPDNzknK3RHpcdpVTUNMD44utDYefrWpSPEEPmVTRdBPHJedGfidgSg46R469VtXeyZ6ZVHnkk4EQme",
  "key6": "2Cwjhi9ko5xQC9Q5LwkXvEKAMr3zbJLdJT59YuTvEknY5BmofDjz8ET6A5ixKcQpeu4mSxzwy45p7LLZbg2BJrjA",
  "key7": "4F6dmbwiDNmPMdQTLPUaQB7xEgjaNJdy2VCTNtnmTGXokwQWkR92D5qNGZxSwkBpQmSAsZ7o4PkCeSznqSvSpU3m",
  "key8": "21gACGM4UcFrFNotJUTwDE7PzDZkR8j9KvtLDeb67cxobmjuXbU8r5XJQ8biN1ct2sTyYqwva6gdg1xABj1J1inX",
  "key9": "fkY2JipcqwxnZbxVvCsLj5pZMsXwWn9zvTv2YKSt9dBWBKHirDaRe82kJmXMZmj8AihLDDeLETMoyRFadzyuUBN",
  "key10": "2skUY6cAyN4nCXpWgJK5V9n2bGFXCkTe1DydTzCf1aW5fzeL9kcVzBcqtYZ2K9Kw1S9RBdwcRbRBCxeDoya3kHHQ",
  "key11": "kee7MAWybxAk49aRqp61zNrya6cBScayMzuaTNRapgnmnVttEg1wPevbS53MWguQDZF6qHeAVkZht9HVTeGHGVh",
  "key12": "2njeHZjp2GZaVJrLbuAn9bhWHPtbE3CCS2D2Su3ntbW6XRAwnAccAp95pBx7BPPG4dWYcNCFK16ohKkZNJEXsy4Q",
  "key13": "5XKEefxo5CioV95732TR8CG6CqhsEpF58yvNCBxvMy5DcrxBh743XpLdQCQweSzKJtwKhR9s79qHt4kTh7S33oia",
  "key14": "2EaMFT2Lj9NjEf2qLyspgG15GKLu8yof5tVMvhimKcNk39WK1nXrkvUmgwGLq8JxEGpLdqKhcKCrSbWhQTdtPVHo",
  "key15": "5KMKVowkUHns6ZkgSqL5Uf4yeB46vK6MgWQUedcFs4aAoqiZJSVPmVb8JbiuE58BpQfAAqMhCz27Yee1iHUneBmY",
  "key16": "3HKdRCg246KwcPfiRVAxgHF6GKUHLEBxJezFCFQUz2HNDKzTF7g5w9oDGhDqsvhgmezFGxKd1uRXmAxeEoEJHP9a",
  "key17": "42H1w8wsBnUBa4h2qYvW1CFEezy9LvD3Fa47iBhTPK4LFqKFTPSHCRZrLcLy4YS65bwPGhuZhuEXyeqPJoJanauu",
  "key18": "e57S9r1EUn28bajjCqgD7U1D2VVg2WPKRF1yhqE6Q1e7Ljj8Btx3sMps1D8uFsWP9MVG5b59mKhenGVo5wzefQQ",
  "key19": "5PNHhdJH84XmLR7wzzqURbVHbq1DFPWUUKBxhMdWK94jv1HBD2upVQAh4US45Gg9dbqfpwmLLCdtL8Ey5s6qph74",
  "key20": "5qRPottVcVYPRTtpsoP556m3TciJYxhY3sFutczp5GMcXoGdCxqzB1KpaHKmhYtzqmvKg4aX1igNp1nPskpHQ8tZ",
  "key21": "3TZJr3VkZGcDwXXhjDkWCn4QN4fshwKyYNFWRq632BoBifUpxoxza3hxX4NHdjfV3cq1mhrDxJLWUqCxnMfgpL76",
  "key22": "4ggg6k1Rzy8tij6pv8bJVoqTZxsgnUuGY8SGVcuBeP5LXEgauAw6BXiaeMvQ2A7rgn3PYsK5YnE3Jo5qQfdBHezt",
  "key23": "2KufUk5JSEzQk31iGqjtuXH9DUzPNxaGRb4gbx7b9y84Yo9Q6AiimnzY8tbjDPJm4n6CKCziw1RNP8ECDyhf48Vk",
  "key24": "2iW2Udq8qaKqhxBVuoP23yNUGDtDSpxXmKGaux36n4i6HMGgBnTeCiiG7mKP46Z6Q5SGoVv9JMwEw27DVD2fiHSM",
  "key25": "3LTZ4AspLPacEjkpM4owFqJisJhCbHkTq2RoyHEfmtpYj2JF9Kt1FjT2zhmTSr7NtT25YkU2AVX1rWHCtyuVPvHn",
  "key26": "3cqBdmCHvRQPxKHcBjnpYkYAn9dxHCz6HNb6DvtqGnUNEUqxe1VjfNSTpwvbKhUNnZThxcg2AbanSn9st57wvDh1",
  "key27": "53Fdnrm7cS47TTMZSqNBNLP6LYW1Ni83MG1XuusX9573dnyVjT1Paoy9HVAJQ4ZWBhRyhrv9msFXfrYaUkGie3VH",
  "key28": "3mcs1KHcmni7mj98t7gQPbF5CtUGaRxSaM6iqBEmLMnZf4yU3onjAAN7fSomRtqFACPj998admnte4tfuaFQg2PF",
  "key29": "xCdHC5evpoYJqzJ1Vk4T6WPQJn1gzbntz3C6ePaYEXzyrEBoUr6oZfnNvijut2n1xWAH3hV1E92Ks4n6aP76ZkU",
  "key30": "2xMtPpN9gtt1zUZCVaPwcTSi2HwpYdbvsDJbYXCwpy2AA9Zdu6R4qw2WNjRV9kR8yjTDq3HfESHJEMFWnY7q5WVj",
  "key31": "4ykiQui9Vk1e3JCSzheU4tyBvTfPczav4KNrcGsLvp8qT3uDA7z2dJG1MMetppNNKozYpXfTb3cwXDw8rirnoQJU",
  "key32": "3b5ZveVZS7rnhJiGiyUwnzCtQErgBLnYTyLTofMeyvHrTQxN5VjPkbtdnBCCfZgW7p71CoUf6t4Le49doBDmkqTA"
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
