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
    "fJkXJTSWo1JJPGzfk8qD7PfjcDC5Vfav5tHqD2Uq6sutZjL72gy5vuikNLZSQ7z4QZhjSwwn8Yu9HBiYQAPGVJS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3WJRinwWC3KTvYM7wjkFFGBf6KEDeSZ3c1r45H4H4TFgJBum6eYW5wVPagsovVfjMuY8guMu5ABiyUcb7UheXdh1",
  "key1": "42td8nEqN55JnW3kz1urEtrPsd1VkE6oAj8uvYwaffD6NxGQSBbVtZyNhKjcEhzrYPM6nhLGS5FEq3dtp3T7GQky",
  "key2": "57f5qLxjtKGwC9GvvXXHubuNq498NrXV44Fu3YTkaGyMTKPBH92tjka7TG9rbsjsRaqKD7sKZEV1kJWiieA7tCEM",
  "key3": "5ZJDvqeLP3mSG9VpNCeWPgjjPQC8MJ8XrsCkioGswaGoC2S7uZWdc6aYf8MFUpwFY9KUBig3z9BjukguN8YUaYp5",
  "key4": "d7FVaupjRGdU9pnWkkU6Dm4qxmPcjnck9DVZcuabsY4xT1hssd3G3dcqJw4CjmtJsiRijhzsuGgNfjtVqW9jbgM",
  "key5": "2NTzUUC2DHf8ZDaFZy7gyPM8ywVvuL1HP6Fyx7MHw14K6QsdHofvTjDyG73vRiPwsTfkfUcbVH7HddS2WoXo1PEa",
  "key6": "25Nwh8wevUxuVSRnBgP5oMK1caC7pQnAgjJ1dH2UT7vjBnCJTKHQEGhczetLH3Dx4HN7vceE8GRzHLnHLvnxfHkS",
  "key7": "4gAKXSTvumhDbPkXLGSwAyKj7Pe2tsuAXceTNfPU5vd5nxcv2FS3pDn4Mjyn9Wgvu1RZh6rTzARjaABE3EcA12mZ",
  "key8": "66J7Nxqzw5iSPwf9q1VKSm1yqY5XP8xJvu1ga1Maii7yuUqPVxUqaEe6wDUkvWMi87PGbb6dNBVzL7EVv81CxLcr",
  "key9": "4YwKKYCsJypR42jMkYZ2uKe9tRDUWpFeLS4h99jT9uoK79fxsuLwyZW4p62ppCSXyYZXMf9VRUTbVbA8DHKpWAT3",
  "key10": "TyT3Yx1LSDNTMFKdkoeumDBQ5vjfAMnujeZGkZzM98xPr5pbsxDDVqN2s6ofFwp5WXvUgycKWMGeriWgjxdU2mh",
  "key11": "ypP4qGDX7e8Ezi5Twhhz6KxHLLy29w6ukdSY3jyzeTM4ornGc8pAkjY46z2tBbAFU9Xs3N5DMM4XPCLaBX9PJ8P",
  "key12": "2XaTSUh9nBJdK95wFoU5g5H4VBAGUjYSe2kRRZo3j4fXskLMUen8u6e7wEwE4D9W9ZjPBuNCvME3z2oitVEQ41mR",
  "key13": "3MiBLqVwAKUW4GQ3hxn28fbPMauU1bZXKezMQGZ4Mg4RjV88gRps38HzXd2svrJ2SabLo3oHhXLkAAiifH44RYU8",
  "key14": "2x45M1VEXcMPijm3kM3SE3EEJf8nM1M28VY9oLiTWaPe5VHBALFCRA4iJ7GW6GwZgTHTvL8zpi6wmiZFypGJBjWz",
  "key15": "3bKdnNAVhKZPCpUUkwDGvFf3Kc4BcWQeaiEmxJp7hF3JHFUwkMDH3QaYZ3ZwQZkqDy8guFCKu6n6PB2u9hbS3pHH",
  "key16": "3pkHfjYdgztVp9hSVcfEAXttn2b8ttSm3dDCf8uTw7nMyiRKThs18ajjF75W8ytkjrBQmmVB8Wqe28nyaCqEeDsk",
  "key17": "5i1N7sLUeXxTEpkvSrK5N4qj2xWneqrmN4KH3xw6zSDZDrnmRWJxCQ7wWuCVXhyCEUScTdtk6Pg2LkVzHms2qTz",
  "key18": "cNihQxVFp1MVh2MMgtN7qJV6XemAPvc7uGJHUMtSLzJhfJbbskW3qMamSvWtYbo276bSfAjf55Qrcxy5147jBDN",
  "key19": "51YH1teWBarWBrqXTjc4Br3sPUHQpUgkMPuNEEeZxtR2TkfMyykxLdJ2be2aDg6fJDRNV186viYx4v4VVPkj7y44",
  "key20": "EHztExRJWkzHZMZDud525v4KLWo853p3ojzAYDv52j9AYy8twBQYHPqfHXsXbLR1S41B8mQHYW3aaj9wvLcxoac",
  "key21": "2WCmmBnRJzef7ws6Ep6x4FKgKACm7PWZsrD1sBmZSNotRvsBm3fUYyvhmS2MMfwEEDBfknMSdXyb87ZfXnyTKmbC",
  "key22": "aBZzjkeRhDZwNQDosq4tLf31dtgPf97GdfWuH6v4pACSXNKDYVR3U6VqJhYk4EqvCnXvxKhXiRf85ruuNjWAnd9",
  "key23": "2W9zxnBuP6iHVHtmwF39YKntcRNWjuZboWHW3biYDAbFcWGBmepTstTX3Q8pumiVNa2h7aPWA9kg7S4Nx3bDXtRy",
  "key24": "2LTn7aEvN7HyF4BkStx78hWZwVWD576fAm4XTNCBMJ5Q62gVSBonD2YdQ8NBvPF2ZAyv35PoUN2wiFJFpj5s7znP",
  "key25": "2MpyciMGri6LXhqQZzP3bQovxPbNb1vSM4SKh8qnp41ENziQwWsqvCDdR1wT9ebRNC8puAY4dU9ruEjgWmPJkNzv",
  "key26": "5xiiP5i857sToCDWZrC1tTSsNRGosCSta5TdiGuoWsgzFswpD4NYbFs7ZtykaJmL8jdGk7JFRwFi9pd8aEbWfULE",
  "key27": "dq1QgpNFzaE8JxmQh74NWVxQFr7iZgoYFiYtAhuzLv97GvmhJ7a2iH8zAQdgYJRz8xQzuGNQyuZaVmAXVYVM3ko",
  "key28": "4JAoVN8B5kxN5UUHs4SixcWFNdGKKgQufQYNZAZaYF6iaPsQmgDTgYfNqYXSVBue4kmduaGcmFWQjjfgXC2SrJmy",
  "key29": "2pZYFStvpJZraFoFJVv5YAYRwpEkfNZFDp2GC6Ek9vN5WyY497kKDmCm6FAnsAkHALqZSSA2hssfvebomFn2ZpDN"
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
