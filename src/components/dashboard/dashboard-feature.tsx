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
    "3wM1ZMCthd1tUtUsQ2dLFppEcvBcECfuW3odVgwGe8N5mkA9nVYSKoFVcYJTG3MUnV7QgTm7bNjJ5ekwWzi4TUeP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2JcugSqg79pN9YkAA8cXQTsRYQKbLDV42XFQz37HuZnE9f3LtErmdktiYyiRtF7Mbi3LKy3s2Ez9bpiTrzpAPdMg",
  "key1": "2NwXsQE17woxvXCsC4LMWNuBvwvtRxJ9tMSA7kTamHv46kThonCX1GHNSTrBoVghE6V9qwXTqdnh61jxUxHprPhb",
  "key2": "4pdgrc9uyvvbb3CjTPhif4gX4HBAh3TKXPfJp1Lv8Pmx7kwRU37t16RsYv7ViWAuZBmxT2Y9KW4wHRGCAjiXvKNC",
  "key3": "3dKYmdgwpxxwY2aQX6QiL8UgP4JFhCcHh8JSpsK5q8pYnkJnNp7F1DzWrJNLFndxLvJXWrbQgEHAtmG6KemEni5i",
  "key4": "2Pqww5kqKSuN7SKpPsvVVQb7khtgJZ9CtDxx5pF4MnnYBHFXBCV2rYKYepJbfAhEKD27Gvb5ponbeQsLJYBrjZaK",
  "key5": "3rNMHMvrx9y2Gg6VyCZdhptPWBVzrHoNgPp4BND7PP4m8yH1dk1y54jXdzLa8c6TJ5TUZqZqkmjDy22m6mV5fvWZ",
  "key6": "5zBY3dwhEsWAzPXRz2XMehLwJ6QcDpV98pi6p7kBWUYXUjNp1UDbZzMeQp8hzqakA1PP9R5R6b7g7o6JpmEtVnnV",
  "key7": "4KYU8ctuzsgLGZ2eGFWWtLNo1p676KE9a8oyrBykdP7HfDsPmj1tD4WcHC1vxjaejsBsPU5cU1Tqng4HFSRBaDLE",
  "key8": "491ABo4qzRZUnXCFY9gpXpdSD5JgyuyQc5b8AwHfRbj5zMSq377Jf8Gste5CmdamKbJ2LLZap4L7QKEc6HsW5m9A",
  "key9": "Y1csZU6NZNntjXwofK6J662FCviFgzvW2mVxBffU3E5ndpUurM8gX4vtPfLsGm2VzNxXym7Nn9SxMGC3XNSgutp",
  "key10": "379HLnK7YDm99zM5KDbdLKbtgrP6YJQBY8vV4PbKKw3FgzQQzDUdih7BhAHDyPv3jFf9FXpC6dmoU78QKbS7nrBM",
  "key11": "3KW21AHTBs3Cd1WWRCwBZYFKhxFYhqkvNmZvAjB8kzto9SenkTpteSSxbTU627FgctCZ2w7p3UmDZauvY5rjTRGC",
  "key12": "XMMVvEGUKpgkW8DzYKqjFuNfajv6m8u18NmX4SktywTn8aPPHnZbFunYsZ5Z16DCteUARUXJ7FAF5NMWvXddWHb",
  "key13": "3GrXT72TYtpkFh9qDUf62J78R4N8ko5fjRSuu9MSxAqnmKMcSjbxawKvpT7cS8NpqWdZCRULwUhdhtrkg572dECK",
  "key14": "bP7MtE4wtVdStZnckfpe8cDW81QSZpNKCwKVzhmfZZwM3FgaQcEz4SHU4BqsfyYUrd2fxy5moGHXACxhGy7PF3Y",
  "key15": "32U3bqHNW3Gv3Kj3eCHryAKTra681CmyusRJ3KjcunG5DhZLefyiaz5yZuBSd2uWDCxzpXycVpUWh7NeamFX4qJy",
  "key16": "dMGbcPdH2BaBHLeRHqcvuX7ge4dxcxbTQes5qiaifyonuAfYQvsjtYgrqdz35ECJiLRjqsBRvowfCHn98dHSyuf",
  "key17": "5X23fH71gAYa75NLM4op2FL2vmt1o4kzs1WhTLTLMTpyEpsJ8zWdctY37K4MHAbsu1AFiMue9DyPif2bUutmDTAQ",
  "key18": "4oTSWSrFH2dkL5Ykmv7w57qSnhtEQ2hCo7cgk8NryXzsF7eXBMWXbeutBbNg3w7UyFeJPL8Jbh3GmT6P2sqJp5Mn",
  "key19": "512mJs7FKTXWJghDBAfiucmzp37SWrUBgDXPrNGCBSTuMrPGTKpEzkNeaJA44KreNFkLVqonPrsqPLkhBddfDHbY",
  "key20": "4kdu8crWZicwrE6SRm4rcwoK3dez3t5JiZEFWhvE163NUa1kj3dyo8P9dvuZN7B6r4CMyX1shdUXU248MCPz6mwq",
  "key21": "5kym7qJCEuS4AESbnurDZ1BPk3mcLKuCs47qDDiYDpmdo9HqzuL3GvQ74tHwDuieKTiHPSafYtcUjbPVsdUeQPGJ",
  "key22": "5v6f7jKfTBNvPu2En7S3kGoQdb41uDMsuDy5s9DpdWJfSW1qvE2hwJ7U6CiCfRXHMUBXBcGpdVtiZsP5DnZcmHE3",
  "key23": "3PcjHQZkbnUEcSTmMvbMKBg5Sra7a2M8Bmo2xcDuoa8vgyhLtVTyvUU4AXPXLaQdLHVehahquAW9zYdH7chV3cxT",
  "key24": "534Gx676detanMTysx4aDEeLQd6dKGW4t8eQeEhN19LpZaPVVMfvpkGNV3kruhDokA4vdM8mKu3MCVqa7XHiJx4B",
  "key25": "5n9tVXnRWfdDoo9GxxW3uXTCwBwZPzkcq2bZmTVE3UuJLJASAzVAF5GPBGs5ebpgi4BrKQrJauSp8T1oXKoo8i29",
  "key26": "3dk814hdKpsJdtGjTgn51mbRgG9JPaGEdZtamCKb7DPW3WezyNhpnPo432tqzdqGrzJY7jr9DH8eHcxNGsaVLsbk",
  "key27": "219kQS3scE18NRQ1ELpyHnnVoShCykg1M9rrgDLnDvMh7gqPm19sKD2K4GDAh6bLq1vYysuPzToAzTSBQShgqTy2",
  "key28": "2XkygbuBREc25tzDVWVk2gbj6EdTJEhMc32o8Zr2n8pUeuGBLxB3J1YrT8CQNjT6JiFgW5nYvZ8Ntftrzg3qBD5h"
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
