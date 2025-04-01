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
    "3BVQMacrJU7oLDYUFSJJVFeqmWfrdw3HBwyxZsd45tgbXrxkW5DLYR7axvLyFDAZBnz83eLofoQbmmYyxB9bz8X5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5TZBbrm5ZXonmQFiiWU9uFvffkv75V7fcaFWZrqkCG28HxSHDGAX9HutU2BJzsuWiCyfPB8SpHofCMXQBxQZN9R8",
  "key1": "5Der9cfFtXgmQktnrSoP1KoiprfV9VoxeWVR87iAKbXLetbdafUBronvTq4n9Gi9k1GDjGPP8498X4Nupyebr2f6",
  "key2": "2g94Y8CCi5AGYbyTomhsZ69Vb3d9sjdmWocP23pPPnqYr3aJ5orxcVTrSB6rhPasxVrPD3C4SwUDNVqpMnGm7xG2",
  "key3": "4R6MSsP59qfXoJ6PDxaZoxdyokLGQa9R56B3W6wfskCBsGAF98Uwv3jBrsFcr51SWGeQDZ7otWafNhhEr7zQaSij",
  "key4": "2zDGurdPF4egj3MjzCPLaAQhWwudbeWc55WeUYvPVLXKE2GfnKyDVPkCD5n9EjuK2NBQTH2Ab2GPZDuZwg9iU8cv",
  "key5": "3V9bhjWGGVdUGFJVpb3qznCSGiHtqxzSF66vd994ADyXhXWMzwqdinnAhPEXdv9bNAq2Bpq7XfBTxGM2iCkUxzR3",
  "key6": "5fJaqt2orH8DtXt6ePYTtRTp1Nfkq4GFhfvbpyLgkefAJjTB3Zpd1i78VQgs7QhfJeUCLXb9tknWNRvSdo76A9kB",
  "key7": "55YRYdknvikwna7VFFwKJQmx6mz8369JurHySTpGsHyHcayZ3wRV5Gki9UL3Cvkfv14xjeGJ2LDHi1hMfydcngQ",
  "key8": "5BmVXFHdp4VEs9PpT3PqKZvGhdS9NnecKEsRQDbPyg2mfSENWE17PVYc7pmSBMqLzLjZiKd7BVsyVR9pj12KEQ7g",
  "key9": "2T4RustbvZetNiseoULEdpd2sABr1AoqxgohkjzdcjVcYuamT9PJwaaHsYd9VJi3aCoZMjFhCHM5zCZq6LGByGSW",
  "key10": "2tUdDKBX34GwvmbAAGw8YSsT6XqN9bDbUAokR76o4MvG4brqq9TC65uLNh895G5gDY38wfmavLAu8TjArbs5hmpy",
  "key11": "58buiWqLkG8xLkTVmZX57MLVwpG3j3n6RkgmFNv6EaVKmrJdbSFZARHSoR25yrfve5ftgmqQ5UPgjToyzeosCt2i",
  "key12": "dtQ4Xyrd8sWDpnumccFvnHsCMNZDFd1BPgw4qV1ifJ5x8BMVkS8opBJfaa3VStEn7MiGxwstkENRBa7p9CWrp4A",
  "key13": "24DMZnjjANK8CSZbAiR6usTjQkoKtQCU2dxBjXLF5i7aYramFiJuh14Maros9YNWt5EK7VJH9khKvbkEBUm8oBhu",
  "key14": "2VEDJAHEcZKiKApfRMjXoMLjn2AocySGZveyAVUAJrMZMwXeCH6Ad8mRoNPKD2EqiH7Pw6HGpenoWucD45A9xmBo",
  "key15": "2dYEz2TCz1sUhNhxVhzPw9oWgyqCEZqWaT18WiKVjE79N7mLgS45DydeM2KGgB6cgwtsCoUxyhCQFztDdSYtTqcM",
  "key16": "3dXX6DpojbEiZuhRd8NU8QA2TqVmPENoVSsEGUW26KvcqrbDFyceopZ4kBifoP9GMqcGR8nvV1iSPnh1vT47V3LL",
  "key17": "5v2TL7Hv1KXK1FvLkJsPrtbZG5z3UticcXTVrChZQmT6HWVMq2wgY6nRbCsfnXr39MbBbZnhvAF3k8sCLVLT5Ghi",
  "key18": "5pEQnWsQ3m32BTn6eM6YqjKuvqJtEbvfPZB4W7TmR1GnHDP2Piukd5f2P39U4DzWYQ9E3ytCsi64bJFfZzt614P5",
  "key19": "5MGvUf5dbThaFkJptQ5AwmTMV15UEk6zodyS3Fq8T4Hke97LPs1A13EU3FXNpSjRKwUmH2YA7bARJiMrqJARRNu3",
  "key20": "4rWKxs4AeUZMdtFAuHThrGp1mA4tBo6d6nDYiFrZq1kXTTazZvHEEGWpgVhdKXMzUzrJCaztmTKN2pg2sN3NAubf",
  "key21": "5VuQKJG99YEWFP2npYmyEjNEARN541f8TyYS5esnseQKtyEv3P8aULXsNSC11AC7eBWC599zQYXe5z6ZgV1PRoze",
  "key22": "339KNcEJzGbtewU2XUF1GoURxvhmEn9DLMvAqE3yRjDbmv8ghQdCzyaf2H2GUfhxfWtcX7Ag8GtSe4VydwivShAC",
  "key23": "5rujumsRZRJK4ULQuBRG7smC9KYv51VkMiVZbQkJg2QSsXvV3gZ2F9ex53SL3g8VV9SJPKmmeTe6C3fEHiQYtU9J",
  "key24": "2XbP6RirPxuGueFdAtW1mqGjeYkGnJA5qBHEzzUbZiZwhhSgQiwupmCdKUbrpxyqZcacz8S86hjxLbP6VNvtEmFn",
  "key25": "3jE4YaQU4mYiswbmySaSN8auqHwT9gMtmEheZ6BX3sUV6qeG8RqnUfXqcFWF63ybWBS2QiEJBDAjjJkRqYQZKLoG",
  "key26": "56nnavArp7g67SbZt5yuTJtNyrQe5kvuRirhiigCW6Uhod4KG1duQ4cLGUeTQdGG3Gj9xF9a38Zr3Tw5YfAgypJD",
  "key27": "4Nna1nQH52sDmq8btuZWp116aAKudG229oAsmUhso7YYL2CXwRfSnGj93PTQbDaT44nnFdZr8VvA6DRYcSNZ6qob"
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
