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
    "5krqZRasMFcu4FzngpkDCNwJcW1pAH2WzyjsoY9rrWMzHj22BuEC6GaiicPZTvYFR9UUTn8KjFzZ4MBtRui6wVfs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3hZ6AnVWBBJD4N9nWuxLGVMJDFLbFHTwTJZcmBUyCCPvUUHTx4tHGu4Kz3BkKgNYWmMM1ecqwXfNkMEF49JxXFMp",
  "key1": "4rC4ehCV8jtSqwzKaMfnh9SZ52RLk567AhGokXkVox3QiswPte4A2r2RzDzSetM6yYF4ET2VCFUgQEjR3fn5em16",
  "key2": "46RLirHGeXVyVQVjrVgCQQXNcoioeCrq9dXgR5ckfqDwcEdZeg7qniqwWqSc4wPfvwACrcWncbyj6i2PiYKL6ihg",
  "key3": "2Yk1SM7pyRMypPCdF9dnZbqZ6cBcAei4NEJWdBaqVRAsPzJju2wKD3dQJo8nB9FszckFwDF1idKg2KEFCNGePaEr",
  "key4": "3La3sb9yRPTkjyXZciJm8SWtvNKtFjSxx6SK6rV3TiZ4G3c1s9SZgsVSPoNme7FWvwSHy93kw5w9Wjivz6TALw4n",
  "key5": "24D2cwSNfLXnXVW4aFoC4vatYri7SEYq3zs5rxPhaU1ztLLPunMkHKTPtmX1LPZrV6mU1XJV9DsSZmiAKqwcGFDZ",
  "key6": "64Wx6FHS2y8XGUBuidXWJNgvBXK4FhLeh3jmbhnR59JuwwoQnYvr4E7wPAPZFENvxqTg2xgcu67kKHgS1KRhasa5",
  "key7": "4Ac5ofvxq6aJBBZKvf5QWUSgZNvcJ9tPZmw9xMdAsDx6r5nJfKqcZ4GkcVfee89nzDXvmzEzJi3fZS1VUMMidFnv",
  "key8": "3q6ffgPoexo8mVQgW7N1bTArf7w3d9bjEQYqHUHnHPCbh5J2hZg4KKZMSiJxUVyLdfMYd5AXbzuMDnJUJj59ves4",
  "key9": "2qeAUd6JRXsjY3Nipn4VRLgZSGjsx8v87zLQRBSySsRFo3coMiKftRDKXvfS5gEkHuaMPfaaxLnJgkDXPb5SWsy",
  "key10": "3EQyipbRbL2qeWHdyFWP5oeJBDhXRHBTXc8w2G5KcFCK8654vaCNrjVLE2oeYSA1FYctnBTCqAHSbdJCNqu5TP7",
  "key11": "ZG1j7SwFosUcQs9n5dCCUWwEFheCq3saSbdixMUxmZneFiXvCxEazLaMjtzDfFPNjewCuWChGAWCgE42Sj6E8hk",
  "key12": "5FTM5bssSCMHguai1F611S19r16JM1za71bgLZBDEB4Xw6ESHLKDZrME6YXZYazwbD5xg5Q6zmHWFGEjvJjW5dKi",
  "key13": "v71WJcdsRDqNfSRtUAjBmDWTR6hGgKTS6xrzL8sSqFvfenPar7BjPgyYmFpMnqmoHVge5cuvcjEf13RMbFpqqFg",
  "key14": "Uk7xjC2VPq3bMb7v9LZk9dYP8iSY7GkjnRCqMrCKRNg2StKEztiKjB2y3atwJ1ijzF4arePuvopnK2FGbrQxC61",
  "key15": "2tcE5uDWwxpakvvhZMjW6gD9N86hSDiWSLJMTbzaNH8P8EwBy3Tqin4cnhPLhN2a2v89fnocUoWfdC8ZPfDSSHHn",
  "key16": "M9F9rAYWV5wnGuUddSr8vX3jZUivBdv6dq3G2jJSmUwcH8bSq41jWBPG5zT6BBUJLhzjV9VTii2MfrnTVnHeBL3",
  "key17": "5R8TBbt2vb8LhRGLknc7XMUfChagLRjTsxp2vZRf4iX2GC8zCYk5anZt1FNSNDbLMXDeiH5Ptcgt2x5KrcH3aL4x",
  "key18": "3dAzYCUKoZpPTATWzjV3ScisWSG3XyyKVLqRCbgXuJSx4i2YAoQY2SpyayNKJMLffTr3VyownqrUQp5YriFoPoXZ",
  "key19": "rBxfcsW2VrfxNUGRtkdHsRVD9QBL9M5tPjCxY4yZHPaCge9vjaGHH6YuTikMJscR5RNhWJqmnnuZ2E1uoQSaTYe",
  "key20": "21g86bhQ5LKdnP4B6x69nhYsMdXMuR1UFeSYHggHveGMaV4LfiXNvUF3ghi9bj46DEEnLrR2JknJV92VD6QaqGkz",
  "key21": "4EJzemq2X8nC8FLSvPVJUwUtF89nBGwtqAxFMgW11oaUTtKf8atrEE8nUmgEMVTqGf4DPMZmbfbx72h7LK6rpdcA",
  "key22": "5UJtLVfnWS28ZVf5SKQsiUsSVA5VDC2anupRWXM4YEKSgx2eqrN2UEfXYGWxedhHMvK7T1oA5mWm21ox1gb87iAL",
  "key23": "3fxrkwtcD2ciyouU1uX6U6Yrqnj4Dngj4i6KgNioVSUAMfit2xmkYB3EFnwUjh3kPsRwH8wywom9CcPJAPJ37N4y",
  "key24": "4dFV565ToResQhGMMybNtebJasHsZYdypwy99M9eDcqK7eR4D45yNcUSLzMswDdnGxBPAeWztDGXxGSvjuWw7hc8",
  "key25": "23wXWaHc5GCnyyKj5x5fpgZ7pFiBxX6kiMbY3oQGSRs6Z9R2tfs2y8QNNtSEzzuSbKPqQafmWKAjRVBWBPw6D64Z",
  "key26": "5PNdoynbrv9GW9nLFHJzmXswbddmH3fu22ysoj7857cA1g5C3DmiEXEKMjgTv6jfL7a3kpPyTSTxegekpi8BK4qH",
  "key27": "4MFoZmP6ogHJmukr9pgTEX43uBqfvYrPk5qJcGRJGc3Jf7kB5mbTebyYZNnHDhgUNtQqqiY21K5RgF2SkgePkKLK",
  "key28": "5yPb7QRvYCctt2G7tZ3aGw67dD3VeyBxxsMxvNp6W5EBL21qj4zBGpWeHQGgLvLzr2GFVEWDPK9kaL33UMCHm9ea",
  "key29": "5pHtxfptyXDwxhp2ezyeRvYmi6TP9NPEy21wgQGVbU1M6wrKCj28k6fWugMEBXssKSB6E617Atz3YSbC28GBUfZy",
  "key30": "263vz9gzeyDQKSsWtBL5uQcyzSPPmSjhZrFaMttHKbJxFqnUsnm6X2SER5VCCXdjJBqDWeqwEbRxtUe6LGqLi2iF",
  "key31": "swBvxoXb9PmrJF1ANvgHqNDsiLUEh1QxcGseh3HNurmbnARBMf43WZLpspjuTWwEBV9QbZzhKMHRBw9yxjsy7XW"
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
