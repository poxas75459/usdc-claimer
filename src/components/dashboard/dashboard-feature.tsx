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
    "4wCxw3VFx989gdY7nhgDAx2snaUhWS3ouznDmLkqt25s9QW5Gh6UQZ5H6zVGuJrMAh2PGR5kMi5Tp7DunoA82cqg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5A7vTM642bsxp9LLRAbX7mMMMcCBefLgmL2xnNjRjbLvFT8xvp9d23oUtdnAWjRdX6CSkxEhdTjJQp6ULG2aGuPz",
  "key1": "3CVQDYMHLAaopwfikhefxXLMJnaq3fLusoZHUaYH3aXqTy1Buu5K3JTMXEay9QjF8fgTUfdkg9yyEadM24aqzcKB",
  "key2": "4TtubSRhXGP6tsfJg6wmH4EUrknfp1SUy6aNSpeiCaeLg8gdUvHwjPSmG7m6MuPMVSD9Z7vksdz7zR3KVJfjQJYW",
  "key3": "2oeoE6E6ZeURXJMV3GxkqNJAgQvpPM71b19wRHcEq1115YpfPjwr6Y92Qu2tYaSyM8PLAfiZSk71PZnzk9Yww6rW",
  "key4": "2zbhwzFqQrRC6bPfDdJeAP3kDcvwrpY9s8x8uhb8wARxsBjfxuCXmyj8s3UqxLHrzhA8aUXRUhdwBUvCQaUFyCvL",
  "key5": "4ejLQGfCoL4zkjLZyPqFwsrZR5RwYA2fMUeNf5qxCQkpSFPU7f8J3PqHpLMHHBR5pAcr3WY9uuE3S9ga8orgqbkF",
  "key6": "PuERUcweSEES5EJzQ56HtyyrBaDZreUMzohA639cHWd2Uu3Hr3jbcUwXmg7SY9kQunVyg2icJw7UoR8GEuuwQVJ",
  "key7": "5WXWSUt3Sb6w29J5RNJd9e7KfZxEeaWhJsffnJFf45XHb4AeCDprGEhp5HTvaqmN84GxVtbHoVgNUqRQEqCHKZQd",
  "key8": "4f8K9hd1ReXuU1iVSsSnHp56pXdPQwAnDRpvnKwop7ntpS5whhvZu834tkoRJ6zFBNrc3YokdtA3gr5RWTHf5uAr",
  "key9": "627Nd69Ls2CgmFU8kGq62jcBAtRKQWBmE3zCKayQLtU64pxX3GyRahP3ZXDXg2KTAKmNAayMEgPbUwnbKuAVJZic",
  "key10": "4qCTUBWk9aBxD2n6Mrjab7Tnm8KWqSxXC5TPQAzK5hNtBS4SqJQ8nVcdBtCrtPUE77FiuSXSQjcE6wfHcskkEYbd",
  "key11": "2MtAH29H4yEz17HhDA38JAhx4Es3vCkBabDkSDypnPFPxRXao7mCZ7Pw9xWDuFTmFvZZye7mXCeo4p9jVcnaTpvA",
  "key12": "jr5TGbmq8XHjwFRYLNBhwQBVXqErEd5Jn6uWNFEKkpPjqh8xJQW5cJX6cXrBBXpwJZvwRMYCcozUkh7mM978reN",
  "key13": "5wSzyyL3p9ijb6Cyp2FhJsamQSYoJtny7pFgMbHTjb2xTV7KfpXw4h6t9gEKuKggP6TA38Xo5pmRmQfwHr1nSoUF",
  "key14": "493AwGERm73mbeKQTqZk14apGECdjpBeJXBSiUpWHBSfGGTPH5UZc3uZEP4KGsaUWFDiMLCQ7TqfpeYTrWVAzgC8",
  "key15": "5RkoD36e4CQWZC11tUa5zdRSfAFj854N6sov9DGqtqSCKmd5xb5mqa775QYcntvErrgyTNfMK4XGVdU2jPffoCyK",
  "key16": "bLYuh7WX1Us2uK6mL1r1ZU36JU522XEHKrqjkVVupRKiH9iCY1v2fWMFVR9xk4UPtnoLX76w9QKjxZhsrTGgpJb",
  "key17": "5fgrU2JRmsyQ8p1SFWJJaihVd8a2WRvz3i15d6FVGfDCLBeP98QbV43UhQ37zCVAVGeT3kz1xfRRpfN6k6GphRA7",
  "key18": "5nvmEu49WPNJkCUotwVsRKi3bm4bL3yEUZeLqWy858NtD9uRbxpTv77BVmbsYNWV4QfNDTPni5L31CF8usgD26rP",
  "key19": "3wFyYzj2RSM9beu2NRuTNL4NwPPijLdKpVjvP8i5CMz89atsSnfxvyU3bnAUtDEVBzKvCp5jMZh8gfZsY8YqZb9s",
  "key20": "JS15eGfxSLnRzp9QFkMwXHyUccQ53xMT1DnHLtJ3jkLeRWixy1K5Mu15pj6wPaFeSwjK8vV69Pa8A1rqbApKPU1",
  "key21": "3B53U66FCU4Xs3n2G2QfR95JntFMLabgqvY6qQo7FKJm4nnuTbs4cuXVZS6hYtuYNgkenTBQ1gmiBS28iLhoTMfB",
  "key22": "tAHb2agemU2Pcem2V9WSGjuKrv7ZjsaBSCXStTcvtXrqfCFxoNX1VGdkDxFJU14EyTqhKn8dLbQeVMNVLbWqGs6",
  "key23": "47JxVSeu3yEFt5hKzanEuG9Pp2G79K6K5JdPVXE14LHW83n2Ahk9JoS95fosJakkuGJhM5xYLiQoQPPKQJ26CENa",
  "key24": "4bQdobUcAFgWfSrWq8qqXj1kqBL57vPs5cdnMufcTSjjBp6DZUihi7PZyfNU9FxdUrHA7yesimK9zcSVDnSHAkV2",
  "key25": "n9f6FYrbx34W7Uy81MarPd7rrfWxKPbshCTaZH3rXqBHHJzmDuVR41WDNmRKgaJJp4bV98fUie9HxR6GRW9XRKa",
  "key26": "2FciEGZdD5LDDfGarMnQCrsg1TcsghMydKNHxsBiXnCWduykFU6XfVBwSSkaUHXr3nMEP8w1en5rQgRCDQj64rEh"
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
