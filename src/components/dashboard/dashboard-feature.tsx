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
    "aPy1RYSKNBGuR658mFMZgLLSUQJYd2rsvmD5xrucWqywqfVAq9YCkuDCycNtmaYv96UkN7QXCukDevDK7sprJNd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5R79sduWihPUN25HT83of1LC76RZ71ox18DgvyWNsUDLubwpmk68N55Tvo6j53reVzN343pzZFKYFAx7pz9ti4Hw",
  "key1": "4vGCJFdXtDSTNpXZP3og6VxridbqSpDxJqYQLTzeQdKZS1RDF3YAqvEdbS2T2h21edRYnPE8qgrVWGHHiPiYLoWH",
  "key2": "AMiotXX1KGqF4YpfCZwuNcdkx5paqxCM7MjpM5U5VMWK1PCkz5dohPHZDA66S3SQPYQtLU6S831mN9p4vjmwmLe",
  "key3": "5T8Vj68AomGmbhB1c9FUbZdeJ7Ss7EVQQi5nc7B3H1XuvxLfAQuq93zKtQRV2S8VzEmdYVLpypvSfnHUbUdQS9gF",
  "key4": "vdqdsscFK8NTShnWKNYu6HuVefsrWyQxfYHD2WiUbJfz9wXXMwyU9Yydok2JMZENAD2AAhvto4a4kApHqL1FYwQ",
  "key5": "2vDo3kEFY2xQf6459RVv424T4RDcyiBedkFohKRAgLJG8rf1mb2WEHLYvkq6jwxEML7RnydMqEwcwDSCm2e8yocT",
  "key6": "22i7Hnp7o5XU1j44YSLaie5MEsCjWU8sYcj6mfHbaf1C3Z4KM8GWNPgQ7Y1xpsPDuUu4QbPw3SdAgKYF52VepVwV",
  "key7": "2sEJd9XGJZUxMGQ1v23qj8sByyJDArxzkuzny4MMZf3ZC9tPhGKALsg6eHTUCYRCRBhCbMVuuADdKS9HQD7hUhTA",
  "key8": "2TymiGG6vBgVQG8vgeUQ9PGLqjR2EKMinpTE9dnePdKkaQAsTn7nRH8P5Z7nroXXXV7Z1fKeakQwJikyLEQ2mGFG",
  "key9": "3e6FMK3ThjsDgSmEGwKUR51H1JHZujRzNjFR7NpXDDBH4wjKrwStuuRzfM7Dz2MXd2MLRHofbn4DFSqRV3MDtHaa",
  "key10": "3ty6odvZkUJoPenXjPzwsiutdpzKfryiq2vNA62xKE6q5Kg4dr292HzivqVSd3BTjnZ7L4Yic88uMySKFo7UvCqK",
  "key11": "5Ja9DQsSuZXkxr3zxjxS3JEsEXcDUXVULfDvPrKahwKT25HXWyhLzRBKBxVYb1MR7vatiTUaY74JS7wFtSRLg23z",
  "key12": "3ckGLBbo23RvjR2r6WWPiLFeUMF6A4RDoA6m8RAzDfpzM2dKP5uU4P8RZmVHBRRZ9XNHQx1k1Cbon3drcvucEX69",
  "key13": "4X2gH3oABzgSBuyNm34X8XQTmzLnqSrL3dbo7jzTZzZb2akKdzzcg3jz7N9sQSfgkKdjEDExST8HJHc3vQLVgWxK",
  "key14": "2fz4H2q6yXFd3yY2rC4cA8q1UzgtrUFrnwmvq8uy6WWUErArnJZ3Ar9pKE7EfhjZu6dfiKnx6akC4x1bpve2rsgc",
  "key15": "3sFGcugLF9HPvW2WfKyig65PUGeXsjqKe5mL9FRrD6rxuKFkpXrVuViJzKnXF3dUtseRhbrDatAaYqW8TFCqbybh",
  "key16": "5ZmgoFvAV3T5DCSYzCJdV6FCFkPcF6r8ZKZ3K9mEE29ifuYp8uwhJktY6YXdQLgDA1mcL6Z1stFFRDwdeyM6Ha9v",
  "key17": "4FgnCM9tyQGnCXSJoC349po92YvwipbEiP23DuD9D1PfqMwtnV5XiMD9ReVZAJfJtMwNNPDBBzByyujqid9fnZ5N",
  "key18": "eoqX8rCe4QzMMRNEqmioHAYRxCDAzXGYccDEHyCxPqLLkfg2Wpy6Ym4TFpjbEKvZXBoEpgGRKdYC9i3hC1fXgNU",
  "key19": "3kdzvRvkfSSb4qpnUhm3LNZTwCj67AXsow5e6zcUxnkZJs65JaQRGnRDaMQfzG95NwHXPcTgPVF7oK8THdicLxsi",
  "key20": "3SBug2NdRQTFQZsmSFZmem8tQFsqbKKp8nXXpfYUDZYAC9kMqepdBKrcM37aENMSFzXfQXb5jhPyfYQeibr6Pq3w",
  "key21": "WZu8U4ND3D5BjcVYcT9pP2iwdQm1HpGv25C6Ec29PwkMNBUpPZTKHHE63taNTasRmjdc5aoGePiAbsHdTWRStVU",
  "key22": "2gPgnDLNHZ5hgEzXG5Asz4rEdHKzRwpQX973UZG32j5edEyCXSe2cZwVyE5aE7BFhuAEtZgqYzcY2HeEvp4a2R5R",
  "key23": "y3jvcugNSABjLMPNFFt97f2TrHDzy8N5RSJWVWsYSD1ZNb1HNwZmSAmaPentcNmVE2UJbWpK58pitpffngXDpub",
  "key24": "3z5juLsPpAeiA8uJoKSkAMd84RpfUMLkv6sPB5SsBarRTZLMvttmH3dfrUqQ3NL6MrfR9CagxUCkNetXGYQciYYZ",
  "key25": "2bK7WhQq3nMQcv43bEVRU8165dYv7XvC742tm6gwYTA1J7nLZFr7CTtUUgZCue5YgfJqHVuFro65E1ffH322fs72",
  "key26": "4FSsxZwTea3SEgCndZFTXYBY4cgHrtR6Sb91emzRAeT7vYadPU2msLwUUDua2rTGEDyU8vTRJ4HQoNh97UxY9dYy"
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
