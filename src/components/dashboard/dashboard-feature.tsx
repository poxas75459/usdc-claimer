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
    "4aB3Sb9PWGGrHrMazUidJGDWHgs6idD9AK48oXqLNcaovNpZzYcHJUvEQWavw8dZuiu2JFmTqa2Xyk9H6NFBxhjP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5tfx7wZ3E9LBvGLMe13Z9f711i2c7mL8Bi8Gi7Dsar6eU8HAJXW6dFeBB4oV8x9hyu9ShywXuFFBsvnM3x9R3K8X",
  "key1": "5SgpEvVGJf2KW6riSG9yJVfYPJaqaAzKL5HvtZjkZnEaMrtust3fnmgZRcR9JME2oxZWqTVSdcUXkfb3UwA5eKS8",
  "key2": "2arn9LyMi2SHwbNfQQ5BQKSPHW9eQvrHrkb9xtgPpVy2jvmGSv7g3DTsf6fs7c99zGheU1zYQovgNQEEHXb8DFga",
  "key3": "66LAKyJW3NGThFbvp1DkJ5TYoaTtWkZYdyQ3i27Chdh7PYaisNxVAbGM1oVK58urNteMFrpqkYT4s9PuPuwg4oEZ",
  "key4": "2ineAtoABFLqVcikdVr38pAQuBgpgSW8Poh1ZC8nbRC1C67FaWCSjxATqktvCbe7JcyZtkdjLR54DpAyDXQSSyoN",
  "key5": "dTCRKdkSFujdYC1jXtaLT41nMDBhzEdbx2m5NTq7bpaqtJE97RcFerC2jy4JZVuoPZmLzWSe48quvGq7qJe7UTX",
  "key6": "5gdtnJ8i1F7mbf1DmwAt1ededfVMujX7xEM7jhyuSE8HnL8GyPdpNcpgdHCndDPcGR3g3MhcbrNT5UbazsHyhDgd",
  "key7": "2ycp6k7woezhKNZQuX6iPPsTuW3r1PVpXazufafN5xnUjawk4bXUQiGf2gbzPRwEr8kpv8Wyc99S7HHhLRzJcDPR",
  "key8": "2ASGELg4GB1YcjfBqoED4gFMszjZxyGZkSd8uYmrsVTDtLkCsw9dbPn9WNYm2biPnnm7scSEmFnYBVsia3UAhb9t",
  "key9": "2avkqeuXxzqmVCHaridw9Uhj7JCMTjT5jwAMpBPWEMo9xuJrPPcti4kMs5JATmKp1YzEd6rRytFMK5CJsCxUmTWY",
  "key10": "1acc2JFAqcVi7P8eqUDEqVkfk8HLpZLwzh8m4yhuk1WdPt5NyfKTY22K5aRVTPCB8bAcFsqYiKFMsSjncvjQfL8",
  "key11": "4zoPFTmQgFkNqkvrkrZYHLAQNhZeM9PM59kyNmY7cvdEbjZdUjHauECLbzT8QJhwW9u9Upq5ait2DYCWBusfY9eY",
  "key12": "3uasSxMexkwHK72a4hQrfe7m36d4vVR7uAsvu45pxw5MXMuEThU1G3NkFyao1GtPNVh1ELaxvErZDTeX3zD4hVqw",
  "key13": "tb2HvwrccUfHVPb6VfkHi9XfMWZFNiv2eRn6NDp1fxsM4RF6r7Rfh5eUkV6GxQAWc9PJjkWDFRwPV9CUxRNRogh",
  "key14": "5qReg4ZtQPF3koMrhdhb5eYRfenrSWr3W5bwURYcPjvP4HdFFqX2GU425tY6E217a1DFHQ16HUh1oAi8TaRzCtvN",
  "key15": "2s85Kg6B4sCXkkcteZJ4jCtT4d4GtL934sXGCBRJDt8aBxnTQEUKD3gzfkokSqvWVF5NHoK8bh6hbY4Dqocwsuti",
  "key16": "2BYda3mB29yR83VXhprHCXiytJbraFvBkNgVBemJcD2DCuXAAmSkBWQCg3ZzVjfWsr5eBN6jVYKbgjULuCMfUBXQ",
  "key17": "4ffvXA376dTUJ9xNDUCRs7WcEZ3d7vWPQissTNJu4dLGdD9vwJXHrKEoB54Sk2Pmmn3eKQegZzgWkgnVzcrv1uFg",
  "key18": "2nk1XbMUjYstCTkmHmTbPCRVn1CBgbiYMKpx9qSq5GRrAnzSZm1eFe8jGKBSKgbGwp4cqmhL35dQL2e53pAHDzGF",
  "key19": "5bYDrfVRS3ob4U9HBGZ39HWtbsAgDAnFSsa6d5QX3mf6ASfX2rUDHvyUTzDLq7qcncan4Sz3UfAXWTb4X2RLmDi3",
  "key20": "4o9oNJH9ZeUHAprsKoWE6rGZrSDCW2UiV5XmYYKQfRaig68kUzxekxMYTR9oc1FjW3epW1KYXnDurhxnxE7cXEo8",
  "key21": "dHw4uE3cX2vVgkKhfY5a81bYGCVqnj9k2HnBBpBnsLqxSb3iVdAXzDxCzVH9fRareseXhnHpDjAihrPJEnVWXrW",
  "key22": "2A59EZT7Lmv16kR7YB1sF6PKQTSygfB1WbaTNc8qosrri9GfwXk9bS8z7gFvaoSR9q4TMGcragPmUtAiEa8uQo1A",
  "key23": "UZLwhY8gZc2DBqHJNQb3b8Gq9LY456QcpmvZuXY3WSYcVvQccM1Pmyju3ZbdmrV7J4J6CMMAB1XnwiYMeWQ9uKt",
  "key24": "L68rQiCjuzv4vVHZLcfsQPD2quhyTpa95kYB21X21xTfL3KBv9KFvmZEYwoMXHB8TFDgtp1cg61NVK3mR6UF3jf",
  "key25": "4vNjRvUvQxDBes2AcRNrnhacW74nwbeMvM7YejnuMUtBSdV64RCekRYDeKVBJoZVHe4TZZD8wKZGQXPU96EfNYJZ",
  "key26": "2U9mLaxyCG9FpRAeUEaDUtA6NunQtgCPKxXU5dPhQpT6SXyfcLJBuZG2ayjWUSkcVzW7nj3DiW3mtLQ156FDwBhT",
  "key27": "3VtetJUQ76XjwjFn52WGTFCRGvQUNnAWCev6M4qJkdeVtJpeU6phHzpaY7bPJeUgFSQkHkBKjiWQwMXpDpNvsYxM",
  "key28": "5G73MRKBmMY2RhoES7Z4FUEUuvZnXQAjWHXvMzGLkBxLYFBBdfpdzUYaq6MGN7tyEedKrfyt7oYXArAGS9WQkjxr",
  "key29": "5dzNs66hcyGfySgFHcVvFpWuh5zHSG1F9KaoG4gNsgk83wKEQfWGxfJ2Xmzh1bWJ7KbaDKj8qhynFYg8ZWt5aXcY",
  "key30": "5QrKPN22VLKmYmbzCNsHYSXBrEiAJCXVBdD5tiVU5j9yBH2zLQv4hboxRq2FbZ2rWXR9X1YALcfx3acVYxCiaUBq",
  "key31": "5EwwQYXHaFoNSwkxgpks1jQBYmKLGromRq3S626rvskzKVv4vwwpudURxwnfy1gDqJadcKqDwty6RFUJY5XnjR5F",
  "key32": "5N58R7wRbY2bPiF4AynCKZnqLbX5BnAMskJA4rYmcBJUjqYoJVnrsFWDDBUkDC5gBqGXdZGrD9ueoEWF4QZ8r2wF",
  "key33": "2LUYRyy2AwFK2MA8tBcWdqYgJrP1JCD1TmgtoptQ7UMsyvEi9sDdfEAQRkSpFADi1DakYvqHRst8gsUT358LqTcJ",
  "key34": "5mVi3pZqse7mtJohFNsNCwEEfNP99Ro5fR4eJoEH66ABgdwr8EYP6hD3DKKrhqs3wE1TdKeeF1dXQKNJhBH1rivt",
  "key35": "2q2yhaqCm6sC13xWk8mru4FoxdBkQj8RQmz4dpEStSX4jMQH2QUNsZvnH2MFqad1JMMU1AtkwxxT6PAsfbB3YcPF",
  "key36": "62wqxt5diRZFYtKTtHmt8aVQSE3f8Us13Q7VocYx5Va1QDh6WTsthyc5DRSTdwTjkEnkAVMYZcVKwakkkU7uhszu",
  "key37": "51SkpVHZKQMhChYhPma9XPVncWBp6XEGukC7ByQbaPyKZo18jmuBu3ySfpsDAWHNPrJQyvpN4XZnmiWWAvYX9zyC",
  "key38": "3TLJK1R4Puw966BUUa1cUNTizrSfC2hMu6SD12sjvtVkJJg5kopErkmD6hnVvtwfkhA4CbwkuhwVCPXjJVFp3Q1c"
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
