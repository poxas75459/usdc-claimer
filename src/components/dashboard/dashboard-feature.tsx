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
    "2AGc6fsptrMcK8fHePeo9D1gFz6EZmi2TKp292a5FJUu3uEJozEJWPLxnugJ75TL9BB2xrKq4m8xBroXNk6k7xqb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5LR4hiFchiErme288AS2P93QjbkDWJ9gfn9ZfNhpLNfRApsQVBBvigEM1N9wdemXZ9DRq375M5WqZFYTMfisEdWQ",
  "key1": "4kDe9L7HcJRJ354Jw7XBLNGMmSwRfA4p8aMEvdc54JZovxvYwJfVLUWQpzLbjzLaZqY6US39p98nvaB79CrNwpu2",
  "key2": "34T3p6dSwaeVwn98rgF9sAPE36e4NqnjY5uFC5wqHEPmSTVBx1mzDRi3gTUfswtMwcRt3vS2oKYdFSf3C9z3BXV1",
  "key3": "5L5YcUXienz7YmBfaCKEVu4w2fYsv461aiJ8Mik8piRsND7XKTB5HiyJsp4AZx89i1N366tPsrtwKppBcYXAvauo",
  "key4": "3fxNMLnk4KC6oJhNkpaJkYM2GXjcQ2mEJDsZKWAXtutBRddeprC9MfzW5AYzetJqeqxFX4ZeUi5SBSQ4CXK3qgwX",
  "key5": "YkQFESTqUGVgfeb5dykWdz41xDb2tBM2tTwf5BgR2RU7nGFqMzApHeFtNyAx2svDF13Dc2MtVEkHiu94rXi5pwe",
  "key6": "4uAXecjPKNj1A2zE7jLgyC911LmTWNmWXeCeo2vEF1FyQJXJLaaCW4Kev1MFrWSD3iXyoUKriM6PkEH79jmEK8bp",
  "key7": "4buwkapnZj9tSbEg2tHYdbKCvZApNUN1ksUvaF8S97RnRsyxFRNL79G8DawiPvkbKjgTN26ZwfR2QMzTsDry17dy",
  "key8": "3jiid38GkpZUTQFbwUbCY3PSzDcYYzQukZvLaB4uUKYe4Kx2sqYNTMsXyhkdKqWfknoFbsmPMYacPc6xecGcNC82",
  "key9": "2p6ZzF87BjgJ3vQVkpQg43GgWDt1mFQdueda77izpV4wRvYVf86ZFo1oPFkgnRVUBVGcDWw5tcKYTbytUohdf5uC",
  "key10": "2pe7Wiog8LDscQVwynswuMuLtX1arkUHUMPuwq8bpLvwjJRa2rnZXDDdjm3FGxJ4rna22bPf1XQzQLKs9FTbQqvy",
  "key11": "5xVyezxBkLvhYC9LdNqxVwM3JfCBisxeC6hT3RvuW8uiCt8CgdQXvq3r1stqGCv1Jm7RTb4HCkfQS8hrdWtSuuwu",
  "key12": "5yXC9apQEviCRiBY2EZrP5f4azpsYM7SpDGwYDsSDemL7F8KXgYaQgCzMiZ8hmoJGS3dJRwuj2uNYHUCGLNS8RAJ",
  "key13": "2b4Ctqr51sBvn6dNrKKW34Kwznccf7biaErT2DZQ5rPP8WQKcsCTnUQK2Ft9z3MkpCQDHvjWBaHDpJSmV9efJkoC",
  "key14": "43DppTzktLZDHcSVhk7Cf92g2MtzFKWXhG7nQ1LKrLytwGFGEUi5kqCtTBu24dEsPaaL8rN7RZduxjbmCEXPtcoV",
  "key15": "BPxy8hMG3hJbSPN44XefgLVw77dL97MeqPHEpKuuDWnuLjMfkUAQaLwmzGxU6CBjQ7NCw3RQEsgde3NFcthuevk",
  "key16": "2BsAvJvMXF8yVhRuRx2n8ey9cAQGiUMztBNtKMyKf23nTSdVfrfSXtD4QbedhssGgUtNrmAngSkCWAwe7ZdDtayC",
  "key17": "QvomCHpetzyVh7KSJXVkLwEdrRa3iikmT6HrjPHnJouEf3KcevVfdqPXQN13cutjcJBvjwLqLsUPpioe2k3uFBA",
  "key18": "3JEZVSyiTHiwLEy5o32UBQrQ3NT92A9ZMnRBTJ7LybNWhaStFoD3MeuQqFA6UwNYgUtrCXomTwnM67nE2E97m43v",
  "key19": "4t5F8bpMhsZbpHzgLZEgi15XBxskZbp5gRJHAjNBJS6icXQN3CqudGgQpw4WZti7qeNSp41UiXJYnX7ohjn3paV2",
  "key20": "2x4qyJEZppc48dj8wy2pMz32xvu9YteP6AZ6tXsC8ZDH6uUf8goYa1QmD15uopyo8QNiKtXn5x2zPJvJumxoqkJ6",
  "key21": "2JjxkKiFV8Qq57cRAKHgCKaYQm1N23BVMgzSQVGepWd15fV5ejHJxh5UEAUeMC6pb9bPUFU94zfZRLfqSgL83fkz",
  "key22": "7Qx77o7aqJwx3Vs3iACz1kTQqhYpvP5hmP9mgUdXYgfxzWLYzsRnEefDdBUYJnwkrWV4JrUybMw7uJiBbcQkBMQ",
  "key23": "27fs3gqncJTxaagaTPwUMX3L5KKmj84zMBMqh85d99XP8cXztRJCVknpQEgMUK38HP4u2t8bJpwtrEBFiFHQDMmH",
  "key24": "2NermYBHWrHPEksEAXjGWmxrkgWRrn58nrJCjEogwE3BiQuVPWPYENXxTrtXRmENNyobCchMsw572ZncnQzvbmGm",
  "key25": "5vCJ3XrLXWozk97y7STrneYNcS1qvnsyvFA1LX37y28bSTK2aV8FNReo7PwKZBpdDxxSCZtNdbYkwSh2zPocqbAp",
  "key26": "5VZopGU5CivcXmkEPwMAdDz1V9zVLCJs3BRweZ89mjM94nv79FPk84KvGSqj4q5oMHBYHJ9e7z5gfzmcsq4BUMRE",
  "key27": "3gqyFZii4xnvYHieD3RgfgzNwp7RLWVBhaAi467opYdZnNjtghrmoTx4Lp3iPqYkmXzBQAWnHoGU7CNYAdMpPoyP",
  "key28": "2vNncLELwmxoAosVmspSuuj2JXPt88nQm8rhFEGs8ZPvinWsScBMZuN21gnXbU77puRT6H9hYB2L6amKs7z9nQSF",
  "key29": "5LCrUfjSRFxXnqm3CNGJHBah8zr96Vtspdppt51u1cUDG3XAxBeN5zuP7T2ZAHfSND5Dq5K7h6wyZjTKTYqZDeRe",
  "key30": "WT4HXLPtYFbmZZsEbFyUdK8nCzrouHd25tkANLRXr3aPZJ6C1La3EMhAzqd2dc4uw7hAgtJUHeJj8jWcUKuG4se"
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
