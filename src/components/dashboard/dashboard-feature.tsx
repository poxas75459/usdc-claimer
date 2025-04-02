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
    "51JqwAGPMx2AHNo9nBn2fahXNamZQKDViRpT9fKyTgqPThhiRhAtwehYH3jzpCyV33HLSDZ2JpdWfvck52fxzUmJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3nxVXvEYkBhoJzhSeJTrGoaRKXKR9NuXbLyjUE2mFBGmFFoca4EZ6hKiNnvMzqCerShy8BG8wbRtxtLGHkB8eWuw",
  "key1": "4qAfSYXunNm2E4LUxadsGUStRxCXXE32F9puvZC2BwYKcbopHvKAsvLJjZKmYo3zhPzt9NuzSXNac4WePhL5D3Qe",
  "key2": "5Z6sLS3bTffvypfBP7zJyDLBuV1D6iLBavmeZsgmY5VhWfdCrUL93ZgEC7SC29zVqWJKRWjtoLKSSJy2C4uXdxSS",
  "key3": "4Hu9Z9YGKrLnLHmq46ykumD4pj8X7jmHiFisAngTUeXYBLM6SEE8aWCFt6v8hPfiNLyHH3b1hU2ReMoTYwh8dfit",
  "key4": "3xZ7mhpPZoHwSJ2MbkbrFfQJ6CDBSfecGAyjB3xsQAe7sccJS42N4wEMECvn31BMXYZSihsFjF6AuYXxzu7PNu6S",
  "key5": "2yveNrQXtr82eQGfvKM1VZs6zbi6tY23z4iPwGLqcWkDHc7mVCufRG5SvfwpefHHSjzEk3LdZ3HFJSTXP9jzrPq9",
  "key6": "4eiT7JbkFbMrYPVT5QMdkhemNwedzQVacsMy7tUpHPm7vHc1uSR1rxsGY3FuJaCJdx387LMsvL44cK8qByvfQPmT",
  "key7": "32976QzTnNnQCRhSnaY8yC661UFEEoPshrHmutUp3rpsaatDaL8ewV62eu4H3XmXo6YkcjvZJ7VYH4xucGkXc34F",
  "key8": "2u2koHQvcjdkpry9MkaK3Mzb9YQYmzww4GTbbWLQCfoU9ZYaL7EmYdq6a21NxYyd6UFNqVAw1yUQA1tHUkviirSd",
  "key9": "41UdJJgvz8T9XSWpYaf4CPmJarDqnGEvNKpoXHvKJVDLHHZnN7xkXEDbzmZmQtiwsWU8dN8GTgkyVDrxaPLcZdiC",
  "key10": "RsFdSoiGHAKySz1pAMCC5cboAcWasAM5ZR1tbFQztWCcz8FhQhN18zmM4TqaW7F3uMg82H78jnmyx5MBHFtx7qg",
  "key11": "6gBmrfw3joztccNq5v8Zx7RFaGud2HSVP4gV3Jzpn2Go8Dr8YVWDFLoYsPj5MasWgR6MtcW3KHAU8oVTAuuz3YL",
  "key12": "3pndnS9wYdvGVSMpVgbfNfAWnr8enxHFzDFvH6VyKZdmSQQd4PoCVEv6rQfd292Q3pAwuue9ddh4RBA8ussWZHS7",
  "key13": "2y1yw6sakNKrRS5sEYfzdK5s9BFHwb3rG49LaWnzBeBj8Sf6LRvKwCgMsnL1yZu8ARms7tzcKaV82K8gfMFgkgek",
  "key14": "3AqogZxDbEEd7Jafqc5PaaSjjgaw9mpaVwHw8Zn4hqQkh4HtG4bEQswRWUV1HYVeEC32qwFxfVCLKoAtuePcNyfB",
  "key15": "43Ktz8UD4XyUzMEaS4EYQioxg8583xkczWTA6DWhnW36rp56yT1nTbnqQvz99Ze9qCXPxxtgaQqoX5eDV5iwrfAD",
  "key16": "5BrzomxDR8GcQq8amtx4YRQszM5BhrwRRGvxdNfHsHjpuao25idfGxtK2TXGRoyDAXiWJDXEuXRF79c92Wrf7dd1",
  "key17": "DWnxY5Tc9d6MFrpANggg9Xzr9Pd1YdycMJ8HknpWLr9nzf7rdRZV6rcVspAwfvHyA9nHaqUJthcwDkovTGBvM7H",
  "key18": "67a4yggoDN48exq6mPo4sgiNxKP3nP1YjjK6RBPszFNU83FAy3AjzenEKmtynRboeRwo93S9DDyHRJW9eo9KogAv",
  "key19": "3dXWM617vjyfaJoYx2rP4iGJvnPjBCP4hDDhTuoKkonLg8cz6yhGGAUVkrDMPkomh9vMxKuqF2TMyTUmxcAJjupZ",
  "key20": "3sisAcfQyj6JRNcd42tjvAfy7s7CUYpLqBGr4vvappgEXxueHWopRrzer7G1vaZh55Cpakd97ZBo46AeD3gvgXXi",
  "key21": "3h5KQ9XDm3ZD3zKP6vqKxe9Fudf7QV3XirPnsMuJhpYtToGMYDZwG2NQeC7KHHzpMuQYY7Px6xojB3hPPDePaect",
  "key22": "3psojv5KQqCgGFSMBzrRunqk5HwQdEAFtqebHAYr31xpo7b8ok5K8mMnh3XjiTqBVdgFYg8ZEbWgCbz9LmbDBUhc",
  "key23": "4UCPjpcqMxgKhGQ5eiWBTsv6RcfNMigfnZXjbvuJHaJ6LrxLx6UKtpv9FUXJBk4AS5bWyxjePsCawqG366xUk2jv",
  "key24": "4Kd8Gg6CySp7ucvvvbwPbp51cXzAvPhGCE2y9ngjpQGorftSqWa1x367vtVZWYzf4D71Xh4TPcVfJrgTvvyYXLGW"
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
