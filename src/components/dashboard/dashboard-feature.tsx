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
    "aojTWUMMs5vYn9ZqWTDncP47YDmXEmbN1XHR1oz1EpbVDMZe5ETneuKhWskFKXTrYRMMB8neWnyS7taS4wY6TeF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5wVcW73nmWiWfiwT8yGahRagEZnTME2nsDp18NB2tWgQk3RxvuGwm3qwQLFSuRGRn6PNYJ3XvoRGxBBoJoTsA7TH",
  "key1": "31cBWc33aduCkEgsqGNqyCChuumYY4CKwr87FCUonypysehftZ8wwqFtPRH46rVGCoUrGcHVZ4eWzBn3rJVyeLMx",
  "key2": "3CpxFcHh1NGmxQdgsfwhDRDKtBmUDCKCFg3bsrKiVaeH3pHZ3TUWZQmEKGHAh2CgXdtsesv1h1P5DNwNh6t3HfpC",
  "key3": "5tuU4ZiPH1FM298xemyataaVFHaSYEH5xf756SDFspzyXbQvPwETJQ9gaYrMkR52sj5pfYXbTZkPoxxtubxiaXxj",
  "key4": "4QBMC4eSwTUKzdkjbdCEU5GkcGGHxSniKd4jcW7bUpZQreHNYZtsPGVdm6FZkfP16bwWvhPp94D5A4uufbLuuhkx",
  "key5": "4wRgYPkxMqgYK12LNH3Dk5Nw8hUx86owFAnk6uYNhKh2LYV4ABwVTCwzxTYNJ7CmUkZFnQ2JVponUeSEqdnDMG99",
  "key6": "4w5G3t8pTyGXvZyfaj4MeDw5b8y7J5C7ekdZ5ACQL2ef9WMVYFeRNyVB7atixpjUMAbvUbRDn1jJyEYQB7Mr5u5x",
  "key7": "3gotXBhtzrCBMq4iFAVT3jeBPjmMGXcrptDPpVRmVxDznmDvgR8grDhxbYjaFpU8bMxhfTdo1pFhuLQyMaZPaRFD",
  "key8": "655jvu8gwEa1YQGMg2uucBdf1TPs8Awk8nDTjkYmpnnkwQFpVbe4Eg73ab5uWPsUrpoNJ3xGhZRYzqWovjhPKJAU",
  "key9": "fLHeh6rpng41VSLN9pLhrnuWu1FgFJ3vtkHmgQCppva2B68vae45wsXpRp89Aiw8efisEDbrP33jFACuxiwK7by",
  "key10": "3xY9Qb3zgDotqgU3eMb1kT7jz29RNouoN48ViUZeKMkeJLTSfPGWW1U5GguLRktwt9bh65rpNXbepJdpmMzj9s5p",
  "key11": "5jr84YZTL1AJR8fqD9mYoDDNUavXEX8tc9ZwHRgd2oCix5vXKW1wfWcipCyk6ZStWcP6THDn1vkuE8uzETub3xNT",
  "key12": "5gBqe6imwmZ7nkouFiwPrfziTjJsE482PCUBW9XhhyJH6x6eNgdAkSBbsKxVvfMbBqtY1Jm63SRUeSQVqmrWHKi6",
  "key13": "4pBM7oqaYv6kBjWhV3aWS5zyr6YRmpY5gkHwHzaNF2MMoitDv8JZT3UUmo216L2wTqcLr76ZrFSia74eFRLZzyEm",
  "key14": "619Q1FfCuuXQ6fraycH1xFiMgnF2VEsKQZGBTJ4FkPdqtkJMnev4yXvyo3iSCcfhkVPgy51WCVBFrAM6JQ3K1y8B",
  "key15": "32o6zJvyr68shUJQKZhbR4RCyWu84viSBqUH7nfSpcx5aZEzsQ9cnSySnfbqJwd3669ctgh1AFU9Tw9JcLqthBtd",
  "key16": "jcvKQFHnVCe9nw9FHmbrYpseybE73zERezsG4Npvcnv9ueQZoG4HteqdYVAHj8tnkQtqEN8jGLUY4Fafhe9hgjM",
  "key17": "4MYoiz5YcXGHxAzkSC218pZZfTLotjktTKcaJ2TNQhp4FYvGHx7uRvWX18WYk5v4jNHKkQvPDyGc1tPGiPvncYwo",
  "key18": "3G7tRCuGTci519r7xbFevwPApvdhH7UNKyQ9F5zfMCdZsih42nRb9XLD1eLD5eg1YpDMYad5e54RLMfGeymmyEAa",
  "key19": "3TdpcKiUc2ryj8fFetpGLGuSSdZc8fJKnTfeH3hMLbtb1udm4Tv6kcgkZvgZBYvG3iw854hnXKRfThMFnC8Lu5LW",
  "key20": "2JQgTiVs87u4dMReLBDVmNiwsq9F12mm9C6XU8DAZG7Qg8gXEQZBDUL6gyQyrG71aN5K8QZGrZPaPbYSJbj42Qt2",
  "key21": "1KnEMj82EfvsPXwbAEVQHd7AXcNm3bjGpq4GNGwoN6kZUQSXBPK7ash1QU92iBt4147PCTkkspMpM1fHYfBjqN2",
  "key22": "51nQf1g2g6DfvqNLynSdE3tsHDc876gbkAhkjJM82C8jeB9Y812Svp4q5jBymV33tvqqHU2bTBgJfenDVdpXwX76",
  "key23": "4Ur6TCtF9TxiLDC6jeYH2HioUfscgtAXULn2253s27o6SpGM2855itHXUDy4cFReWRoDuEAyr9K1ew3d8NmsSKFD",
  "key24": "5KHUtAEBcf8cMuLd7TjH7YovF3QmxzcbXGgqaW8oBF1TsytZSnSaXs5e8xsVAdRuwJHBrxAm1TKbxnnh2tuSMiyX",
  "key25": "t2mSpSR3jEiXiqkCuwmNYig4cVCkZzYJiMp7JTSTs3k8ipSZ9JtFs4Pzi5oRsJJDmaxVMZwJMHCa2Ggqk9RomTc",
  "key26": "34kZtSU3NoZ98p7RTooA7a9QbJ2We73CrdEFN5V6NUt2Zd2NxYd2zELyGtxPTyK6XWnSM8UDEHQap3JFYhPYdy2z",
  "key27": "2PdQbvKVqU8wmrYV53amoJxwtqBhMwrnLxQqoczHMTwNhfbJRcLaFL6PmT1P28U6kCUvp9oco1YdbtFstmaf34RU",
  "key28": "3z5UfK49q9XJYAjJdBUkPPHYsZxqvfcw1F6pbj3NvFkJ7cHiw395AJraxHUDJjjwwGUJouGwquvb2sFwkjmyg15a",
  "key29": "5XTJN4A4FnCwVEzDhVUufnTg2WVQed2hhJmbxRdnAAWNZwuza83g267vudFAZMHoExhQUTy9H5Bvdn2qYDKakeqD",
  "key30": "Kfrnbr3XiMhq2yLsxafW4GQqka8Axzibos9QUU2XqAZ7GHbD8DoxWBPYixKUPSiFyqoz6ZW5aqRg7fDjUnRJizm"
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
