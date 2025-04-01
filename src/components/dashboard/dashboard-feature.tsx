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
    "66pgf9sSCPJ5RWbK9eDBSrFAw6ax98yLKXrXrWjqXYLeJD56BPiA5gE6cg5Y1NfmzKeeS9CFaDDSpghdFFDCGqTZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "21yo1oguhaRf4ZwXN2TmrF5GnEZqn9PLfTQyd8seDHmhn7jQ7ANWXfdnMc9JfvgeeoGMuVZGGjHJHt9ZuDJFC53y",
  "key1": "2x35e5BbqPVmkNzSGjTuHfWmTCYNYcybFudBNTY2kWveHFSP5hpyFavovwBijhF83LW2L7TAaNU1Bq7uwnYqJrdF",
  "key2": "4R9JXRVzi9oASHXsKzAUJu8ieUobSU9kzcYFxz918diG4Qt4G7LpGyLA7hAdwo9zMHw4m1cZqDEgP6jD9qdpjFrG",
  "key3": "4tERzDwBQkcSUNqXjLqAiiSyBiRmpn6zwrymkeWjUxTmrBUW6Mc9pkQDoL2yTsEJybNyqaQrDWiZWWazZP1NUDdt",
  "key4": "2RRCY4PZKEogm3z1KUQhXGyJpeCHZH7RhHJJFia8byGmV1oVyQt8A4zeoxbi4ZesTCvfunAZzmwvTDJqoKeLqBzU",
  "key5": "8BMGH2dzTgzfrKq9ZesAUkj3tiVKmTsDicc94yF2QMTRVcY4YUykf8EYFXJ8Fb2xsRjYDqUsFNf1poeizxPAswh",
  "key6": "3j9DXGDMJQvLgKjhFhj3gxKc6jg5JdMzkjyqY4NghRMcbxUdfiUBv8qiSdub4FtrEaxnacfZASV88xsXRkbCF7Zo",
  "key7": "5AzARNTN8w1yAD67LRDGB3yqWJSkbHMzxKTF4pAcnpzea1w8KbybTpp6bNaDRKxmxzGoAgrhcqYQFbHzz4R3cKf",
  "key8": "3pL2rSJMjQFE5yGMd6X8Z8KtjJ7yAKPxJg3sg1Qzojs2Y6DZcFJrfGCo6NShwDhwXDLgLdhA5JwfbFdnWEWYR3K2",
  "key9": "5Wsqr3GQoprLupc7gJZAK1Nu23Dtikw9uc1FntLJr13Yhzh89iYYBFKTsAKYoFEaKZn4ByEdfzeefvVGFLfF54Md",
  "key10": "2yFNquT5fCJDUUqa1LwrTuKLkFcAfg5V6P1koBCYyPN6DqNrz7q6sS9HwVxFPA6FHnx3FQWdNtfXfeYNGVimCgQY",
  "key11": "2kAU7hGBtmAYokTPSNYCRVP4GoMQ5mwfFFY3fJiX2fufXS2gHY6PypBcNokawXegDTVeL4VCx3EaqztAmhQnifo8",
  "key12": "51YfLfj4UyrWoNdGWP2tiWLtQDn9JvEQTagR4xPLZ8LZmxEGjSYTQhz7wRhDqtSScdCBXEC8HMx67H5y6FdAxiyX",
  "key13": "57FnSyn8tbcFyzZmRTjiuBRLGuzPS7Y4rGdbCRsTxrfJKnxGtHUTwmMCqdGKNH2qsSueF87s5MRvknDLVWZUesUj",
  "key14": "5bhEtM568NxzM2ec1Ub5bUFjgmWjdnNiDLRgyDjnHgwnoifMCeHmcKxKB2vutXtfA6jfCP1YC2UGuPrCKTCF6SX5",
  "key15": "4m256bxvUKd6KXo35jUobRJ8J9wTxuPa7z9EcLrkiQAx5vTRDLk44bKagKaMXVy81QiLELNuPT3Bec6ZUW3BDukj",
  "key16": "4VuNXNmJn9dpW88tDAQi6nJnZ5DfYeqtSuSYtFZoSotyqx3kDsmg9h9nivP9AeF2ZkJDi4QM6ajsiwCY6s7ScWoo",
  "key17": "2dNdzSrwKQPPc8gmtSwbwmDahS6mWp3NcRhxKCJDkLUBtwS29U9qpTJV7xRyK7VgAtidiYPDJUr7Aq2enXj3x6bb",
  "key18": "2gCywRk8x944jUtBWvq4DrGvoPgCg7BqeempVq6gGQtM5jREcM7kxF8i8HZN1PvPEEJpHgfJNb12zR8aeGZyYZjY",
  "key19": "aU5cKN7mqQALs1bG2xk3cxy3v8VBnMGQW44zRpQS5whrmNoaGBFy2FCH7kNHZncrYn9PByNjdkJbbE7B2RcUVX8",
  "key20": "NZYGFdXTme4fCqLY189Gctz7TtarbpsnqjSdTHLPDpspmjfNxiZjrVs3GLXi2G2oebVJP6kWJEwfNFwe1WD1g6e",
  "key21": "52bnuypPxajHrsyGN6QofdoALcuMDzCMH6nyJivkMKd3dHMFPo6fBUC7AK4N7mViWDwYKc5mZDqJtniromFwsdE9",
  "key22": "2RGHHjfFMBQzAAfx6c9SozWYdjpeWAVgErHNkbuSAYJcPEkizns3S7uiVFpry5gJs4xnvwWiyoeJ6QagCss5dwUi",
  "key23": "4g7aQUkVh5cC4q1u72qPEdb4HvELsYx9V8uVFqd4AQZgriBpKuhAhUB5SyubL5rDmPfuGjDF9A6mYxWdBPWbKnEZ",
  "key24": "4D8Q6nSwEuL1fHnJMbqi9e6awz45yMjgNBkoxEhDrUmszprTdp7ACCPda6Kbff2Pw18tEXTXFbEM8TRiQMWiXnYG",
  "key25": "2DQ46nDaXWfdxDHu6xaiEK8dFv5e3sKPWe4yssk8SkUK7yuPVyxPFA5cMvbkHwMpFTqJGbaCL3q3mvqMG4fF2jWd"
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
