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
    "3ihErhjqQ4wFQuXD2vxtCR3EPdLtAbswfeodWhjZfgRzAc96y8RFr19EiHgVgwY51zdP6SgigB1znTam8Fy5wkiT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5xsqdmVX3XXFTYDQwWmunuXakdk8UhMENhXgMeQGeXQsAE1rFrf9WHgWGRaGmPBoAVVJQ2yCErH7HtpKB997XGu9",
  "key1": "3S96pKyCPaiQSLDCbb5QyWQbtNwwQhL5WURuwhSNyHq2bPKcJXvZpoQQYXoFb6Ycw6YVKAmhP2WtpCLXmDa7CmBQ",
  "key2": "MV6i2rw42tt2gztxLagvz6xqCpj1EZyU8FBWHySDCDfoDrkoqkWjcu9tBCGCrs6CzHAD44gc6ds3eiMwN5NMMmA",
  "key3": "4uycAnToVjzoo9L9rXw5d1MnmAtoxXm6BDnGGMvHMkESiX6zBYnD3QcSJLXjP5BDeCxkSafYtLyZBjH9dhSREcT3",
  "key4": "4tw8AAe2y7VAQg8khDSm5fwdwaEcGotwWfeVFuwp2YA3WYvjvR7srPcYNu5ni7x7cqPnWPkMGGe6VCxrb7hRjfen",
  "key5": "2kecYiqDMqUBSuBsX3A6qz3fDQFAk2NCMR4kPPYij1pbY1mpzxX8phGuqWraB6JVMR1TvL4hECKc8xNPr9Wffttz",
  "key6": "35AaAq4YqTs4DdAdYZDS1xGFbTza86DKAZyHKfwaD1NjRshf4hsemePGyZhnHuHc17HJTXqGeqBjpCXhB5RXXE9G",
  "key7": "62FPzjjdSapkXkSHhexapWQcWoqJ7TB1KcQnw7MBCmpeQZAKsNsRJRF6QxddNFrqWuqMtUpasLdUZCRDsRWZxZ84",
  "key8": "4cZZWfRumCuA6K2qsjotqL8iFU1h5L2ZbSQvuekftcVpZzEHLMEgxEH21Hrv9iC9WbnBMfdEXhcnebYF1Pj29TY1",
  "key9": "31TXNxje1ZKJAtpMTGSzwLVSNhb1sfrJ8Q7fSWojBPcocLSCcH9MtJb2Gv8fvfscBoFhUz7z2FbMvdYsxZWDyjpb",
  "key10": "62tVEtXv87N9acdY2RUZAkwMFyWrfKgtdhDUCeivekjkWq7xFro7WokaSfSyWsStmgq9xyfYc9XnbJyswjUAj1mA",
  "key11": "52WJ5JhL3fLUCRvjqJW6oAWFB3B1HiniouyqYC4EqTt5KssP2M7ZDMxAM3mFJ8z1BSdPKmLMM3p55cZ178Z1VQHq",
  "key12": "4QY6QzL1TUNdXfgqRu8HSAZVNaDJswRGhNpVWdDCHvDUPfK5JcAnbdYqurQjeSoYU73YLAebMudcN2ZqYFffwWiP",
  "key13": "2p2UdStqcfSJotA6dtyXLcy8rBH5imhu9fRuDzXp7xYwujpXhkLMwjHMb1dZAahqVmPeMaKBn6p17miPLexGnqxp",
  "key14": "4jai5fCj3gT8HZTzy96gUroZfAcdyTVLJBAk7KcDyKyF12KqM4zFH7byhzT7eY7Qri7zu5chSkxFGB4ctz444dav",
  "key15": "4bfAPz3F6UswaXjjvThRo1qKfLzUv57NhQaoTLL7TJJ4sY91sfTNgGbHMTkBPLrgRFHL3UBW5zrog8pBctUxbL4a",
  "key16": "GGrK43kyMwV2q99atrDGLEmdZmXMwJ1C9sC41pkhfiZLNz89abbPrB6FDHMj3xka5v2rcRih85L3ziZncjTsfL7",
  "key17": "5pzAyYPDobMPYBUqqfdrMfYBJmNn6URX2o3i3LJz84Q3Jy3Rw93smm55sXDpq7xyvq3jWYxZpkN1CZCvpbwtCMdV",
  "key18": "3fb2e61LgUYZCZzWserc85524Ds4DXsehMGzMPsd3k5kgDLpcQSLJtFhQRhkYRbJc9ajXNB8YGtimBzwPLALh5XH",
  "key19": "2EaYpQ18VfNgwCnRCK5hCmTLrss1w2UHVnYCw2ji4pPBuFyhuxc5xb77SHaFVz5pCpBsCDamH4aa3uRFyGxasgTD",
  "key20": "4UdXbn6tAjMZfnkKMiWWs5JRYhFG9Z9YMxeZKBZPF1WwPa55grEYoFvUYUBg34XQde7cXzmHpvR4MBfGASPCBYhL",
  "key21": "2hps6mbqExGZZCBXH6uyDZyBdYYsURz6njTgKMSDVSj8W7sif82eX6qpDENkjyypwMyn1SVMDccxMFnu6GPdzA7Z",
  "key22": "4DqQXAnyifXevSCuvGGwd3a5HSudrUDkBgy2uqGDrsYm1wQqkpPWzLXhxb7JFmNMVUdGV1r9mzKrwpbYrpSDFgzZ",
  "key23": "34javsoQKJ5rpBNDnqVVcyS4Vk5Qa28Yz2pQAksAGSPP9G1ihNpkJgXiADXUQLDsLmDfALt2c3BQNwU4KkPFaKQ",
  "key24": "5XfXuB33mSi5tpQ3PNhd7w7FHovUMKjHnkxovwY2owRPAJCZJqASVjqgCZP5j7Ewow5BQ26csYRbFPM5UgTFUiT6"
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
