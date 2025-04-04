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
    "4YrWh8vwZbVMTs5Kj7m8o1PCJinNcRaMVMM3vqawuzkZNiED1wMZAZdb5Vmgd7KPVdYUuyz3YbNT2JCpYwJDHnpb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "zXnpSshvrZMKHQx9x7wsfwsLpdEKht8Sw9CAkxK8cqdX7D7nex5wwoiM5MgiNvZThGosMsKCmm1iYUrQrJFAZBQ",
  "key1": "qWhTsQqp4YJQGtKiSMPY4vqxQD83bCZmBvRexZTpTaavgL6C5o1eU4n4dXmKmhwMJAdRFha5yzLmfsKtcbYPfBz",
  "key2": "3nhtKqdzapkqy4kWmqBbxBtQGYYhnvsg3MyDqKEBbPnig6Sy3yU2HoPijDWhwwBa2eefLB8TiazXdXQhUpgxbTz4",
  "key3": "3mm48HNp41Z1tao8GoDDSxMbrBW34fWSF7arpbaqGgQhLrWHWT3eSYKYZxx9WLQBEnaVPgB3EfnBWqYt9TMGQhQn",
  "key4": "4cc95Q7jTEdXHneB47kxngrBJXjLKz2RstbV2n3BnqJ7aXJxFiqusqD8aL7tBpsb3Koabqcwhm8mfxEquG6jWdh1",
  "key5": "2iJQos7hubEf7aasZExRBmnmJt9R1iR9VYia1UX9NzQTEG9qmJT5inajSj1SpCxB3uodBdJWCqWedDStntK79sp5",
  "key6": "5WkiwrWvUv7moQ6rzhvd7yKibZqfKRX64Sjrso41TYLWM3GYouWh2wrfWz9oPZeJKLmWqHk2PAbUfuCeqpHFhSJV",
  "key7": "Ax8ovsBJacShtUrwL7TmMESsCgTp9qN474JAZdQLLYe7kiUrfNhsPYhT3rShLawCiKb2KCDyitCKz3WhgYm2XQT",
  "key8": "5bpjwyXDfrqyVRLdyRLoPJrNgfbetonESXaPbpgUNjwMyEc9fijgByjUSskJ1HqKgPYAh1o8ux3Z14BQLvKq5PTw",
  "key9": "5Qaurp8TWRbEYNyVrQWEjRZzGUX3yyYu4k8AsxUswaEazJBDLhQGRyJzFuLsKcazgfucQNaeV4zKNaoQoMCdWSKi",
  "key10": "fHNk4TQoyN4V6SmLPBZh9arCRkWm9Fo9X6FaadMnSNEAZ63PiXRxobshQ5rNBJFTFxCiy7ouvxhJLSmM4Qnds6C",
  "key11": "27rZkhfNmr6Sgq9DR2bKjt81hmz9NPFWH8n5pzXaApM29GpZbBqGqkNwZpqreZzVa1abuMecBjh1BFe83AtUwphN",
  "key12": "eUHqe3GHr8vzdc7oAERVsQED76m7tdpj5nnvvN9sLJwVUxr6wKAagjDWid3j2WMe6tsWFwjX7xFHUpu3z98yS9N",
  "key13": "TtHGtMszvCAPLR8LhnYu2Y2rztJms45wrnTrkAyRcL4rrwDfS7kUAReGvGzjZd2skBKkuBfrAV8kSA7nBtG7Xoi",
  "key14": "3L9TTqn1pf1e22EHJ8LrwwULR3EVoe4SrDGd9fTq1bd6PL6wUBkne92azHwF4zPYeQZYZu17wrLK5s1HAHpwbvjm",
  "key15": "3bzGrrtncj4fTrc9m1KARmVyvWvJin2VSYifpn4quFA4im7xiDeZHgN2TA1NwevanfvFRmyDGTHEKthwVoXEqnn3",
  "key16": "4LcxcwLX6k1EpFAahZ5nA7DK91ufrryqF4eGK5yAmB6nVuriPytDyWUwHXHGY6PwdnQ1ztNG3691oup4YLt7oiLf",
  "key17": "63jNfutdYJq4idYPBKbkceRYukp4mBo8jTQc7op85qaHdR3RYmuFpszsLPg6d2uNsYVDS7Tsou9XycNQex9xYsBY",
  "key18": "CDgdvm8ArNtRGQJxdackuVZmn1uyfzdLu8JAik6my7sN95JATtuCZipd6UXnf5NwQSHFQ383iXnphbanM4bpEq9",
  "key19": "2J6NtMBoUu7oXYpuveXB5Vmbo2WXrh7XHgAkYMn9Eg2inrxKaRnfuDAJK8rv8mLf5uvyu3bsSQ1EVV26hRZ2ytUb",
  "key20": "314TvDdS9WWcwm6uRtwyGTTmjnE7PEZjySopNiuAQj5JaW6TCdtxuvu9R9aS7LbdPLtR3rVNUb8B9cnFfpbJPccP",
  "key21": "TnXPWcu3CKkTH3vpsjY2mvk9c9nRynzERzpsA4joUv3K97do7Fzu1JjCSvZkLowFm2WHuDKDNBAwK3pvv9EbctH",
  "key22": "5zp7Ls8Yh6oucExYQTYhpaRfMy4o8fd8iHGMEmzcd1qX29SWgaqZz5QTue7YxzgyYkDgDdfZMhHQifvXhhaDBWLT",
  "key23": "jFeKjCzp8SJdZsa1oFr3Jb78husP5axqUd1Wa3mxG2MjRjamUXBaP813druLLjbch88zCoiYNW8r8BMv392LMbH",
  "key24": "6og5wYBT3hn17zoiZro1DmEoyTe7zxvZ1qgB4u4kpx2MDMoJX5fQ2LUBKev3Mp8zKdfFuQ5K35siG1dXZp1aMq2",
  "key25": "32LB8PLEcxzL6ktyFDBSzvPJ93wGgQkB1QR8Nd4htQVQpnv8K4YHj2wEQdJHQdYu6ucxsqq9QArcQZRxHkJSXJpj",
  "key26": "3x6BjjaxUfxGbaBFvuCp5utmMPDs7LmdpKf66V9Hf6g3C8cbqXzm16kNFV3RaLJTLE18qZeMEMzuY3nrtTwLxk74",
  "key27": "41n9bYTmrnuwFGZSx9SNw6a6z7mVYSxy2wyHXcqJkMjKpS193wUUBmNYXsfa27cjnVyrh1G3L8mgyfqYqL57rYTC",
  "key28": "46FUVPExFtVwoVHrAMcu1PmSXUnn7Uytg9BLJry4Rbk8rH45SFvzB1yFKThUfs5Evpnda65dtv3YPQRb4qXJ5TRW",
  "key29": "41jFVSLT1zhGi2QboABoPUfDfqmDJf3buRXpjdz22u3GbC1wyuLo1rkSwgfvvkG8s4ihVae86YrRGeD1ddzZfC3Z"
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
