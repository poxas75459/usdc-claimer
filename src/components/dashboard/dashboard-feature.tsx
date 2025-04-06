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
    "5nZfgwBE34pEqQKjyL2kST9xmXJ1PT4h1Wsr4Yhcco8n5BshMi6koFg8xHbGSxfukCjnASqWqWe2pXWCXRUApoRT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4VRh7E24EJemo3u52cjJ56mEhPUJ9QPvcSzsWuBb8MMM5riE8Dhh7veHBGZfEfN7tHXRP8HxorqnjCm2K9m1Gux1",
  "key1": "5xE944re1bSCuB2AWf5Jtx5XwueFUPN8kmuR7LrSQED6tC6nJAxnird1ijCFBNajxjBeuo5kLQhKh2VLwSKvyzE3",
  "key2": "hcpDFvYVyA9KMdc5H3xscsGzZMyv3b99NZ8wmwdVLd6cY7dfNQUJgGNop776s887f36CjotPnrdafrJMsEpfoqt",
  "key3": "4Ldyb9cx1qYgUSRMVfFP485BZQCBArCsfn5qGrkXjvpDQFwjeg1CJmFaHdKMskmA3azXDmGDb7DqGU5GWmv1Le1M",
  "key4": "52LyvmJ92PmCaz7su5oHZZVkVNT8ywFSzbKvo8uonBpJpn2eSCie7fFyzmiLMj9C2WLnAt5TmzqyyasRu6GP7ZJH",
  "key5": "od7FhG9L3R1qiNcEMDfCJpziPFnUy91QQGgGRsJcDwyLwtNZuZGCYdaawixbFeXURxFfAMY8isZpw6mDHVSR6tP",
  "key6": "5YKQpgaeLNEwAQyJYNJvAh9T4BpMe3zKCNQnEryapNhFtdXpmzhm1i6g7dZ1tgvzXVfdrMozi9ZrrwzYYekps8ym",
  "key7": "aYBSm55vpcV5kExfxFKN7KroVwy3h64WcvQKzRADJZChVeM8FZozQ3LAdRTYvAy5FEhT9csCdqU8J7KHkSM1NDY",
  "key8": "1Jr8kcRHJhzgCtAF6QwMvpLkeSv5AcLF7NgP8Jrf6Wf4hNr8pPxA1bo1to3fbMUM6AdPaV9b2kYsCVHW7qisjet",
  "key9": "3Nsfciogtj3eejvJWPS1UZtBUAp2UdoJxWTuxo6xc4HsxNixC6toTDag1GfcMtXBGV6PgikgAKHby7kuUmgFDgAd",
  "key10": "3ToiK4QZ45Azycj2T4Z1s2TF52qui3iXD2YLWkYFN96LPyBDrVHXPYg8ooDAoBDDvSSjstdgZSjD4BQcXqdePzm8",
  "key11": "2kXoLMz5naDbA3SHbWR4WddxBMsDud7DMFK8v86zgw8a6MkjMGhBCSg8M6n5H86DqyBxEBw64JmzgES8WPHSqApZ",
  "key12": "j6uedGLj4UVqJRR3CN97mGGN2n2PjPaJnmUUXjYachmeYNyNWkr1N6uFeUF3sDEbZHTZUgKSeUVVmAQxBwX2Axp",
  "key13": "3HSBCiVorzg3CWhUy134uDhC448JpeKAzpVe6SPQ9wjQBdkNRQQVR4P2RRjseZPQrqKQHJBSKZc2Bzx3duWyJt9s",
  "key14": "4a7dvk2qFUPnnvFjsgAKvj3TAgicAXnizZB78LuskXc8N5ddcMupkRoniYtSqRHU8azggrKebuU3HLR75n1hvEs7",
  "key15": "pqwtDHAu5aeDq3aPvNcNDTCX7vcHHLzr8mFqSkx6gBfRr1AYf7pr3RMGxYzRfxm7pBvkCKCXu3YMoD1nsv1UuGK",
  "key16": "5PjCGmNLVZ3NHS8KtdNUtBR12pqwvb4z1dhP6kb5GpYNQHShjVYZiKcCv5abKp9BKFvrn6bhGdeMZu1vzi7WKvxw",
  "key17": "5rB66spQ88uBGBXCjxGa1UvDjtBrerDXffY77ykzQvKxrDWn6jayVXp1F71jce3kEBntKqwzvBQJfpYZ4MCeBkF6",
  "key18": "3sEFQwaBZ7oR2YaCfoB1Q8BmP2hHhp53jNjj5ua2gJGJjWtdYjKDXYLq2U59SAjcEyySwsFLHBSTmhvJ5L1MfhCq",
  "key19": "1iBHzEs8QFCuSPzdM5RJqcvK2YGcTD6YHbQTD9obsek6CCW8CUdXXJSp6hMgZ17UbeXh5M7NB2PexHxqHoJCeY6",
  "key20": "546rBFxozYyVG8J8g4wyUHjSexB9mqmA1ES25NTzKLoZxmvZFrDrDd9pZN2ezrkgmAzw23kdbLLVdA7CWquiJBqh",
  "key21": "2nbEwX3z2s5QXvmJptcGnLGj5os3XhUmnU9RgPpHdNbZr7DpnSmbVCHecjYxsh68JszFGJQ41Pum96GY2XeKqnJg",
  "key22": "pQh4962MuNcZtDpHcy1YpxN6E7cPwd36jWF3mUaYQ5t7zrLGDYhzkWbnfoApZgjE31XJxpErqAUQwSvRwqZYN6G",
  "key23": "5WMJ4T2w3E7j21jSKjphkq9KZWqYyN87S5wnQEDoFRkmNjcXpitPPX3diEP1MxJEFVeD9VyCBbsjHVpvfo8QEh8z",
  "key24": "3v9XUaKPTeD44ibKpGNjZ8fsZg6iorZseZ8eNbD3JeqkytLb8rPNS5fcCUpsiC4JsbuW8Bj6vN5XiN4ENcbEEBdd",
  "key25": "4HFhUAdbrRjKVU9riU2nM1Uin89CNXKVAXiRVKPQbghjQuwiFKkRmoFSKLZygn673M43GbwBSpUogXfNSUhRm5Ru",
  "key26": "4UNVcAbwAagoyAadJQeQWPoKUbTkjZhu7JH5td3rDz9HgzWNkBb4wd1mhJushNgKTM1j2a3YiAxxtDXytCjyeEHF",
  "key27": "5BYCUMZwNJp48cNMCTvJH9bMjgLpb1zPd9qQnfRs6gW6GA8yDwkgVF38NnfdR3GgsURCbnqyXXSpiMH7AxTWSAip"
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
