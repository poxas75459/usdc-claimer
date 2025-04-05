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
    "5G8PVoMxrpQZjJpqPk7Fyoe1P4qcqg2PergpZdBoZ8mg6dQa3xvu54nrN1FozqHt46vTpiEeavntdzTTGLQoKVd2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Ruyvc77rYP4R2BQyCae3vfgeCnFwDNK2y3FTQtaHUfU7GcTQkBmc5KscEStYh6zwoyB7tYwAUMe4cpgedSSuN1R",
  "key1": "2y3LQNDReQFTVM6c7fGgLF8o5wjLfqamQZAtKw7UYNXzTyoB5misDUvqJMrfYboMu62KriYS4GK7sJXxEFdXk81g",
  "key2": "j3KX1YAwSFv6WgwWR9kt3MvKAZsyeURsmrgTMMGd3a3HSMNAKyjG5SVQFLhA9qnZjmEFumyCnYVoZCgivdBifxC",
  "key3": "1g2GKkb82KhNcRwjMbsGVyj1AXP2bP3R1xaMG3WjdGnPtTMvsqWd64NveiEHe9TnaH1frqHuQXsGUYhYmmW8qdH",
  "key4": "2cqfGJnB1gUbHP6DoUtDKsajZojm2aS4i9XRA1SWDm2xh5jw1oumEYbwgtsHwyCocmCXkgyb1WraMxCKD4Dt3yaz",
  "key5": "5bJ9Mbhp4wd75SEpsAxHFVcQoZRG3Rq68jyoxHxZHLwkgHBVLSKbmcRqq5jeVmkDNL26YU5XM7daphnhbPAhU9Zr",
  "key6": "4drNy1sEQmfigTUnSvJAadPBEhvzDriXoi7h1LSPYFgPLDRhmyNkXenPTKKuVGpFweyt3Kuj4DPUZ6s4YToLjn61",
  "key7": "5msrNeHRw5n75jCBg1ih7XjorN5VHGqtMjUVYfSKkNRYEP1LVjfZ97WeJCaHo7DBWmyADL2khTzmoYRYYjRAUdck",
  "key8": "52qSUQNJNu9pa4He89i4zAU4XjKgnYDEtsGBh8E4sw6KV1T6e1x6ZUW8rnGDQyhM7shmmgWTbDFGqpsCBk31X4vf",
  "key9": "4Y5pQbEtrhjFatG8bysJAVBAash4RUGvruKRUgF8DxV6QJGAR8TK3P6e1dL8eERruYD96MAde6tpG3TnVY3xrrz2",
  "key10": "3AASGoL6tvKcRtVR8qnbxZcDeULUEmBji9cmr9jGb6BcR2FS3HmWo91EDXcm3h8krPPvM1zni9JBoasgrRdap1VL",
  "key11": "3JEnR6krq8gemLAw5UkRQX5oYqaUut38QeqgJYXL3rdhYbaZvJ8WNerDyT9iVvocVfpuKDxWbsZQmKbJarCZsDZV",
  "key12": "CvNqsxZs6MD1rx2oMyFFzLvbRtRzLDWVgvi4JeJbYZPzTyGTfqefevp3mkRvGZ5KQ3i1sDSJFEboPQEL3d5ddB7",
  "key13": "j5QXxjPsAqPsUegTjn3eYbMAjbZE6FmQx7MQYnTzvzCmMC3pyzUiCEkYNw2q9cSihALBYr8xj344ZRBmL5WqPS4",
  "key14": "4vzim2AFgL7k5XFwoSUujKCa39xB63U9ic87MKWGVqmkNAZ5R9RtWcw3P95ZAHgMvAvaHBE3i5TqAE7Su57srywD",
  "key15": "2BbwcSh4DGcyrWk8HhPae1Dt2G8kCcotFCT2VvZ18F7gxv3dQUD7yKtHwUpWatnm65hZRx9AmfppZb2fZssuzpXP",
  "key16": "47KAgPCQFz1ppyS3Qsky2wk9maBArANA8NLdyr23jz5vHzciyPD1dZH9uXFDToxhvuZ2Pi1gtJUjsJyBDFcYjSKL",
  "key17": "3Q9F6PA1yW9gd6h8QzTQ67dXKt76ikdnXTWCKZnEqvCGQhdG2AZs1xNDSUhPjTZJCmAdLeZXukitcjyaPAhgRGpy",
  "key18": "43FqPsYrferb7mfX8oo2tyXSjjC6iQTWWmtztNsSPqvXmKYdJjTyDgfnsRz5NkeR6MttEcJyouyKLFoXRySu3GZ7",
  "key19": "3XFPouCv1KmtQ49XfCDChfjHbiWzbRSfnVZRb2CUNxXETWBXMkui8C23LMnfvqBXqDDBvbUXvxsJ2Q64daJVWDAS",
  "key20": "4jj9k16ZsQ9homdLaYMSayP81tspnS2CNiRx3A7Jm5XSAsMnZvDvvidj9qdFTygt5RCo7QSTWnxRZ7wxQUV18Cox",
  "key21": "4hqjz783zYDkffP1K32vGxYWnFeyCBL7KsszBeGoDKLFJscNbJ1Wu6qyXAm8kUdP9hHqz7vzng28BvxwKPSimjdL",
  "key22": "63untxp5HCsqdjFC8v95gWDCNKpdECK7R4cTKFUDMK1x69MuBx2dH67e7jnXRLFekaGc8y36Fne1GJ7xfLp4YUwq",
  "key23": "fugjP28zPdaMxUzfByZ3tXd9t69DStPwYtnybPRbqRx5TbSX3rY8KfzNRyxmMAFvYLDGZuznSf6v6iR65D7CVGH",
  "key24": "58hjvqR6cjNTYnCes1TFwRyod8W1kPMnVhfE3pziPAkcRfpdDicNCSFc9CqVWMoQfuHxyARyo7AmPmtcEP8DRn4m",
  "key25": "2P2YsJLsNzuvLqkJam4k86oPRSazZHV6TMqSYYAvFEQod49H24JNykhUJWgbsYujFzYiqnpRzfm6j2BZyCZpog2J",
  "key26": "V6eBpdoRq3SH5AGXMZNVmSDjqKW3EED1Q2cEQNgghGxJWSPfUfBy8z6KrH81Qq9UqEVrArrbxErf2HCmhmXCYM5"
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
