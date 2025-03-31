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
    "4fRUFExUWneJJodw3knan1tHta26ohxZMAQ4so3fa9TaoTQNjqu1vsYunCQsmyeL6HjyuSLVQeyhGPkQnV8zFGeM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3fK298GMDKqM3ytp9BUFGf9tCsQeTL74suAXt6feXs14g5ErNFGpKfzCqcyxWHFTmFodaDWTqfMdNRFx5LLLjX8G",
  "key1": "k2LT1KRbGvUkWy86G6YLnvomUdRif5evMdGJW1zdBzyGJQKoAmHxRVK3prx4gQemmRUPnBF3BAev447oLvbNFzn",
  "key2": "37opR6hbH7hwxwbyw2veHPowYBLZFfMLwj4ZB9RxWVUfPtJMPxurftcZWzF4CYq1NMLziQXGRvwgT3D1ymik7GWN",
  "key3": "25xT62JTg2v9F9WTAVzmwAPd2Xg2BoVprwoFuXE9EiajTN2WQZAZhj5mxQtWjVPYcrSBxGoFQUguhmYePw3KHAhi",
  "key4": "Y8ZJJVD7rukLQz29SRMaP6apPBNMSNdjfAz81ooBUd5gy1TsPxsGiGfW3M2LLg8iV1WtpB72SevVPWSNMUwh6Ls",
  "key5": "2AZiDqRxbvXqDsVaaN24teWzYnmZpmeWxe8hYqEk4wYxn3Yjv4h7eMTTtxmQGCr6jYJM72jcppUcceLbdvGNQUQh",
  "key6": "5uMmfSVswEGK6acdunj9vK9RkNMcLajEqmzmmxkpDWfeb2TYBnJ7syJyMjawhCV68A6CDT5iZ7Zm2xYtUfMgjf2t",
  "key7": "4ksS6VGAANvzvCkDX3LMX33hyAXSEFMDLED9y9SdBd7xo6VBYeA5d1Tt7omP3gdjrg9Vg7JN3xkwmrcL9WunBBhW",
  "key8": "3X5ZWqHSJTxCdM38VZMhFFFR5BcJS3Gm2BdFQzyvgb1bCnXPRQ6HUFE7rraCCPTtS181o4ZGfCj5xzMSKTewugsc",
  "key9": "2gfkPTi7Dujzse2h6s2JV7QtYhQoeppu3VmnQyqda5xkK4AN5eZCM66xp3UKJ8ykV4C69jNUnee3wfdxeaw1YPNZ",
  "key10": "3jeYZJik1JBGqpALTih36wqbRAw3gH1uvKr4g8jREyKYS1iBBTVoLLSKtBHfwvJdGt5Lb7TujaK7tEMkmp16GfmJ",
  "key11": "3CvihVGkpQvYPktcUMmT84ecaht7VDTGw6gABqgzi1KahdLpLwcsKFty8id1E95gkUDsXaBHuV84432zAqaFtxqx",
  "key12": "5SLbfoETifKCby5HgfHPMpQkhx4a1wxCUhZ4yATNxuDUq8y8ETNuYo9gWhrDRYPSTLgohgZqbAVj1wpfaLWYVh9B",
  "key13": "38hmYtFm1fzwu2UGRieHHbccqUztqBdzyP8vikhGSk3sXEv8sSK5ddfomF39QA8o3LtC9BqAeBBsDrGJiKt2y161",
  "key14": "4KYaRj4bs4vjUP6xJ6RqsPznWqoB49xxhZ1AKVmbYav6Q1jcavPcHpzD3hEyK7zLDFAUjduAYb8TJBtjBFefaGNC",
  "key15": "mxmuCPJ3Ast4NNL31sLbVijNbU2NTFiERPoE8m8YJVxp4B2f5DkNUxfNKuf8mMn6xTxU8tbCKiksCtBr8SkEqd1",
  "key16": "3Vm7jSpmgFL8jzr3h2q3oH23THqPZQgbhtrNxs5w3JMS8EQbgsazESLGVv1zp13eLzVusGwBmp4B2vJ5BN7Pi446",
  "key17": "4KNt3srUw9oJg93gKZehdLEq14FAfkq6xCkXi2nDjChZwsyUnaGz45zJLVMGDou2ddCwRNJEGjvt7PEUERuVkgMa",
  "key18": "5tKRBkc7feAjeAKiMVDMFRFRqiZPakwBAnZXYRTph9s3bucbpYNfa2GwbJWjJB6zs5ACFZY4mMcAsQvDkCVexDaS",
  "key19": "243rfbb769UPqs1KbUAGq6kgEQtsiYZagRLQ9SVwkDsNg8TNqPhj2wi7qt4WDGqXpnL9LUbjXPbFc34V9XrPTfkC",
  "key20": "3zGXBngwEAVtEss7t79UD93jqUVh6bjx3fUszS92TY7ocsFV56o6ChbCU5t4NJZALfcYL1zR7u5wZiSJwSERe9vd",
  "key21": "z4XaUHhvLRVCJEau39KSji53vFcYvHkob5raugNFcZo9mfKwfd98eXbUeai7Ky4cayj8zprS4wFjs6yeSUicoCf",
  "key22": "3LQ6AfkyCyHzVGwesya4czDXDRqbFnsHHhNsS8mY65xejAzDRYwhc5cimSvNsanQxCRHbq8mdkGXQjRFtxHH1j3c",
  "key23": "3x8i9qqWrSeDAvpNZT3Ee4Vh1CC5rMesMzbnKvm4NbPZPP4rwS8R3guChpev3cQ11tZttDrUstcMNHdF4wEhhJsj",
  "key24": "3FJAG9UzUBngFmNuAeEXwJsrWzvpWDWfpfr4AtYsAVuw4dG2VKv72krdtnEBJmvsB7Xfpf3u6Ek8knEyhpMPyrqn",
  "key25": "3FVM7JjrcsHDhrHy6j9kHhApZ3V6NLWmFh6TqLb7yfuepdECsYu3NrfhAnMP4E2yGS4bbvd1uN8wF2CAq9j7bnoC",
  "key26": "6JLTzGCg3H1UQw2MUgSxjCnPTHsTk7A24nuCaREa58VkwcXHBSAYKcqkYRvM89qTEeRpMAco9MKH1UTYrHV1Pay",
  "key27": "5hNU2iU27KMfYSQY9a4oRyhAMr371JhL92wnsmCaKbEhBd1coKkvGhzmJBovMEsgUbrVynpmxAHps8rWKVZHsLDM",
  "key28": "3f4CMJ1KbciARnmHyqczcgMYfAmsGE6rEmHQTBknnEfKsxdgfEtMBYdG1rKgNbSaGVmtcvo7h7mpGAjdiNM1w5iT",
  "key29": "2MoaZ7zU2WKxNwcqcW8fvG6hkMB8wJVkSFhKitab7LNbwUUW2ZAA3tdph7YjRBCVnKWpjdZhNieuViw7Z2wY7oLu",
  "key30": "4zaz1uXREyeBo1XZn2szC3wti6QFJ67h7nGqHev6t16q8LxT7T9ERwi8oRZw8ax8eUofcZ8hQos628HACxzZu2zU",
  "key31": "5fFgvSujH1bZmdjPSedg4qAzRp39Kc3nDhfjnsYz1hsrJooRNBdrVJzQzCCUPoC2w4VvebD6R7Fr1t4cmedtcp8H",
  "key32": "2cwnhKpPHc1kU2zePDgtiF2v3QTCc6Cd4NuGNnwhKkD7bekgG5onE2CesHhUpGPGwdEpFRizhBKWnj9Aeb9bUwVd",
  "key33": "2PySEiVeYD3YAjv7YqTYkPky6H8NeGKco5Mo9x1CfMoZXt2ttbftKZQdPmJJXck25J8bA4ujuViwfGoewTru9aRo"
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
