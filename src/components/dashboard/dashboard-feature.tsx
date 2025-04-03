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
    "ZWpG11Nic93pTv8evNHUt39qTKL3toGdntMya65K6jYnmTLSD7PpYUnxz7J4mcPgqMKsDjA9pDLi7GRzi8Mo4AJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2sfU23GywFcZWhEbsQ32e75xjFWfx3Q2fN4dHY27f1pyeET4upzAu9jNLyCLGecAVYczcLcSNdqT2bWTtANrFWi4",
  "key1": "bJji4mxSJveYVVzKaFuoT7buDD5aqQXktutNYhPU4rFRzEaegCyP32swnkPsmH57BcguXRQWJaPFsSxaAq7mJaQ",
  "key2": "3kK7cF8MLiYsJCAVfHqXLrUA1a9BYMydy6nSoy4Ak8QUs8hdXSBubi7sAz4xW3wQk5yLzEugX5KnWoQS3sGMNZ5C",
  "key3": "2PKJVmscSMdzxGEHJ5A7Gx4SMWoTHhmpvkUsySb64JvujJ4nYtWh9TJ6FF24gGE9KstjcscpEssHS1Gg1vVrtAEz",
  "key4": "557yzDNPovDerZtUNHddBzWWitVEGQcrVRay94FjhhJF4PT473fdVrpDc4KZBVggoxLroNQrtuudXeYyUYRWrUWS",
  "key5": "2tkuWE6nNUuAReRiDJ46P9ZBqfMKYMQZogWRuyTP7njk5rHQYDib4UmKEmCZQZzdS2oWB8MitjRXX7UFmr524Vb",
  "key6": "p4sRBzcx1rMhSjq5qudPM213YJrAGLuEYauF6kPk1yLGsoAKLrKVubp1fWELSQZPbds8eCzqPnv8qfbaTSdUga6",
  "key7": "3xNbjAQdH5LDc2xAga2o4fJ9szK4qZts9XioKUaXq2uW1XojeKUJEjZzw4a5hNYSKg4KazoEKrStfwdKudEYDGG7",
  "key8": "54zZ6M9VmUFUtksUeS8iCp7a7xgWnmkGzrWMddcbx2JMW643wPax4iqHvGHF92C7SRfymQmcT7quqsCc4ki8wRs2",
  "key9": "4KGnyvo9xo9rm4xhhxeqskJC4Chtu3DE35sPzaMJzae3JrXq3n6HmLJ1oNYBhfHAMr54AoSruA7oBb12pWpHXKmE",
  "key10": "39UmsgwUBf6uJ2V7RuDi3843yQUc69cQedEV7HKSKV5c6wJcFZH9r4zR4yLBSVTfZ1n769APVviPA2sNkiyLWbwa",
  "key11": "uwqDRwj71mAdy4jwGQhhsXPJPoemDfQovNGz8poTQkS5JkkHdwsVpUksbXaYTzPSS817XfXjKbzx3r7LxhMdwwb",
  "key12": "2uvYAtPU1NfHabSWhBXxvyrHQFgWFN4kZJNRnPUkD46XMSn2WJ3XgDBF2y2uN4g25GHyGfsd9C6qWfgZxkwvCfJQ",
  "key13": "3Ze3ZVhGHdmPQh35SwkLTtkHRp1AcKKK8PCVxmEuG7HL8HJWYz9HEifCP8uL9C8EGu655bJkBwUKSJ6DskLVFYKS",
  "key14": "fYpVwPLokieKdqQZRTQsq96AQubVnRGbnsi7sJJVKE1M2J9xRQ2Ya4po76XAgFTbVsTwyXxdFQyL1SSBVmSqAi6",
  "key15": "3676fD8WoEV99dHTfQE3oLBCZqghYFmG7AfrTKMj9C4HeBVnxtXKtEoBTQgdSG1FZvgc2DyZjoutG85dDwKXjk8d",
  "key16": "3oe9y4q98bTqjLHewEyBka8W2RcofZc5wRrdHYkjkn7Bg4uRYAv2sEcQTdZM16KDXUhdTdMaJwAaEciRj4vHUqmw",
  "key17": "4jfxTucDcZp6RjuCPodJv7T14ce5cGJMfFPuU1yRf7qceTVc2NxUutUpNwT4eaFTFLafHq75YvHZQPKcAdhq9TJR",
  "key18": "wkznP2kXu1LYYZUjwyqJxnaVctaDcrfCJVVH4Ra67mwH2TZLkjqHru8mtwPQ8YHz2zsz8gYNYjforwDsi1vSCjo",
  "key19": "3QQirc7ouhrdoAYnYYyxuuZymLYZBryCPPjZvsomwbTqAZWceEHusX22MCneF4TJFWArmALNK9Z2NTosKLEeBN4g",
  "key20": "2gZKuhegXtf7pqXxyYkopbdn7P2exSmFApsgvaveV73bZL65mXi5EyHbv3QTYp4vVkSz5kxMzXaq8C6Feks7EZf3",
  "key21": "3gfdSJdWy7YyFmUyXaPJrA1Y6F82qYAu516oaUkz5iSzNDcDbY9hwL2cgTRCHEVKcLk3hijvEpqJUc2dBMZ7jMTV",
  "key22": "36sx1PUyQFdyxNd2J58e6bg38Qtk6XbHMFcEESjWdnvnQf6BeiFMj5ECdm3s3SZnKoXXpzEqPYqsjxCe36NUQ8mA",
  "key23": "61pnqM1LX7WUM2UwqZNoQPVvrH12RcTgy9fSzGW28h1p8BNVuGagxeiUArJo6zyRuRwAwzNXAfiUdVwn3GhCnLny",
  "key24": "3zN7XVijvTGAXQHMMCfWt62HGn1K3bc1ijkHe6cL3uUt732LvfCrXAvrw6g8VYpMUKUyN3psT5qAzByBAdeRxJoC",
  "key25": "5afUpEq53SbH3jcsSua6AP2rc2JMteaCLVBKHESHSq1cZcATDXus9fD9BV26XEKG7CfJVHDLBEfdN34GmGyDPx7P",
  "key26": "2gmxnxvYMjwoYzaxxzE6efEEw9JdCXNNVDfm2VChFazzWuqkaSDSLhtwAugnFKYGwwWGtejfJQRavzoEBgjZg69E",
  "key27": "3Ki4Ko7HRoNxGRE9PGdmDHGJwKpgFTKVaG5MfLWv325hKs2AerYAk6iDSeiKmNPBYEDbDmwNC5SG4jmD7dahcRk"
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
