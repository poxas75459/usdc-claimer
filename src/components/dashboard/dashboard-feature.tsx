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
    "3UcxaEer5NtuvacZYcrv6zWYTB3S8B8YsoCP917Q1ufWc1U4wwdaJ6LsZFKtw8TCsUV8HepUTeG3Rzu5eR5KEyGX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "BsM2dct9BYtT4wLwJSpJk1H1gd5gC2ehaEnmobWDAWWRyMapv1n7RTyLa3GJBiBW6EZfgUpYx36Y4vbK6zVz4Wf",
  "key1": "469jJnrekmyaMNb16gwVyrdEN4bfvuZ6iipk1ddZtTajc47PgG1GGmJ8QzMvEeN71ukS49UkNDNJnV5rNaHGPanA",
  "key2": "3u8XhxRyLZxAPCxR7fVBvPdRCYE8gw4cPCSYyWduYKAhio9YfqLaPRbsveJkMy1v8du7i64gXkb4ASjujR7VbbQw",
  "key3": "5ze3dDC1iQrcK2q8ZxfJskL9UPVTBtSm1TGjLdS588SPwEkJc7gRzXLCJk2QNXFmvgc7TXeH4iEof6K6aWf9oV9Z",
  "key4": "2rPEx7gZhRdRxn3DZiWboTrxoCEaesCntiyyPag2nspgqEK9QGJTrDDabz4VhRUn1EATnvp57X9X6GZ6ekqRH52q",
  "key5": "2oP7hLGyB1c1G12MwVyxfWfRTJ6BigmeFAgLbat7PNKpr78yqTosUirXUqXUvHK3k6mrzLRyP4xv14BdVN1Uo8v",
  "key6": "2QJ9avorTsjw9kUj5MUv4nEcuG1o1rdhLdA7DXPmvUHCfjg7zi1Ejb7aoEdTDu2pmsQGgPuBT8UkVgecFP4Pafv8",
  "key7": "2ACXbBLDTh7iwcmnfZodBV1YmVP13zJSJeTJjBevVAso6Wx4ddFM7b45R7a6t4KrrJgrSZcLwzGuo4iB8MjbvPzt",
  "key8": "5NtGw9wC9kVFhzDxLD7gg832mWYjEefyZVHEPk96tkL9BLPspgvEnGjboNLzqWXTy7TnRftohDupae7wBwxUQQxN",
  "key9": "2cKa7FzZ6E7LatCLvEnyymUZVCy3J4soUsWakKMNtbRw8prCSMLh3cipVCw3iqD3sD7i9q8LhF92t4Wjk8NHo9PJ",
  "key10": "2QfsUovMRF5JtRqUDNVAjeJ8MC9E9uTL1b9vGpv2qtXpntqBb2Jk6kC9X6kH7N74GWCgT4Qi6dXCGHSyC6PyN8xS",
  "key11": "4DRU2ZVxDS7ezav4cmFWYUY7oJVQM4hyW3Pd2EqiFFa7mVQbi5s6isHhyxwBdjt2B4Q1B23kew9U7sNkkYoNa5Jn",
  "key12": "3Xuva8Twqt5BX7hzNzqHWyn13vpMKM9irqYL8VYLk4cvUxh7cu7adVQQQ9PNhoQrCtp8jmPLaGCF7AJehAbLn3wy",
  "key13": "2Vtm6EnipPRdYFnvDo6xWsTPtRgF28LQArGaSbConcZv3DEoRRKLpQMtpC9sDJUKTXtqNoyFHeHGFQ2EXnZVnHLW",
  "key14": "fajrCzSz1ZoTFqmMYiZWmGkuZpWXKG48V2zGjBtsfMzqqtEehqtC7k5EkxuhHYGEmNanv4ghcCLvQmvhgGSMcFg",
  "key15": "3dJHov1h69DrMGTQN5C1Cmib42PHB9dei9Qeee2Z17u6H49to6JPWq6VfsPeSPQNAUhU3uiyD4kNLovi3wHoWk2n",
  "key16": "3hcHnMfBpSnyRxPWxNx48PFp5ERG78JpwgW4REpF7B18cNjthGcSrZAcxnUFPR1CDK3MkYyn8DP1SyFMqMch87KN",
  "key17": "yNyu8Pjt65NQfweBMiW6fZ1qFKHCHax7iyWPFX9cFUaK2t4gMWy8sacbJ9SnELTKXq76hoykZSacEpDddwi6GLr",
  "key18": "4S4Us3vgqnmVvAg1ELHJTQjPHW2ubPfpDAbqULhSpSmjXYheDfCBQTmoHoUyiVskU4uZaNY1m4H2fm7hbZ6d7Lr1",
  "key19": "22wE9gjtu4eJ894dCMEmDGJ6w5VwGXgdGSFKVPDAJtBNHw3M9pCz1zXA5osmcL3pk6TzXBtjwoCD555vExdXLxMY",
  "key20": "fJvXYSfZm3roxZMAj6gFRfNwGTLbYfQHizhLCkYJp6iPuwDQKgGCau9VPK31JHd2J8R8HCrcvC6jMcPMuwV88KE",
  "key21": "2sq54ysczgDhhhB7aSx59CsSUuS5WPA2i7Kqf7Yydp9GcCJ6BaYio11ncRh3ASkczGm92hk1dEMMEqvqKUhQV3sA",
  "key22": "22S9necgGoeiEd3dzicPcSUVy2BzrN8KdYa9UqjnVARWxVonS7nHXNZhxAM8uc4xaPLHHxzQnzrgnCzXzh5TUzTx",
  "key23": "4qNA1RvVf9g1HXJFAAveZURKbvg5bH7AxgWc9Sds58zi4adEXknr7d88zME7o9sBKsAJQ9DxyvsaK7U57KmPLJya",
  "key24": "mTutqprNXRAHzdqgRAkhdYHjcW5oNTEXxMpA97SfNDwCWavtyeXFu57E7y9E4gfxVX6HnwwpbSGZ44sxizQTgiZ",
  "key25": "4nf46f1vBveoCDuJYdq9Ck2BAKaAUBmPhWo31XcwkGijakSj55PESYuzvQRofTYZ1KN9bys8me3UTT9NX6pncGEe",
  "key26": "bwcLyFLAXswykrXCGUjYy4WWfrX4N3s9DoXv2te58DcddQSbpuFH4y3BjYMCv4bhxAHjVXLT2xTAbVhyim7B4Bu",
  "key27": "56pTZTW9Ph2deQ3P9xHx4vkb8x1Jpg1cm2veyDEaBgLr4ABZRvbRQHj53sfuZrrS1ENXSCqsUBrzhEDYdaF3TLm4",
  "key28": "2FNpBgbQzALCHMs9SNSUDUk9VdhtkCBsfgKLKKuD4bebJHQEEGGMvJ3YNaCks6NCp6ZpYRCLmGYnG3EwDQicWDDD",
  "key29": "4KsXGV1XPHq7Ujhawt49eiueJYFKrUSzrzmcMhC8erT1wYxQF623ws7FAgtUNiBFGcKdf6JCsMc3zVAzzPR6i9N3"
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
