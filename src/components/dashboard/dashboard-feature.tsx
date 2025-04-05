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
    "RmX8fGFb3pTPFbRYfqwjVZ4mB463ouVs5AudBBXP1jnf2aP1CuxbipnYFShxN2XbBBcFc9aRYXpCvzmowf3qWxT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5teESrvCsmdrzDtACUUPqPQKjNUVB6j5qmTxuAxnQSLzQg8FUbepqfbctNaWEdvbnDjr1fdNoEchVKRsP294fx4e",
  "key1": "ibfh9Rcwi4X5DsNi4tZxYyZeEJKjRUaYFX3DVeqMi6pcynqgtnibJHTFydod9LXUuPA79wtiovca4aHL5afW83S",
  "key2": "32aHymhmeTuPh8PrzYrZ3eKkGa3kjsBtoLv1dkpqdLhGZ7tfLJ3t2Dj1BB1HpsAuPyVTktcs8amrvr7sM3XCFhQz",
  "key3": "4uq7j4nvAYxkmeg8msEuC9zYjV6M3w5Urwqwt6bb89AmJ9y3bJRnkKDZhVBtXUoqaWR3bcbkTnyjHqTpFgbHXvn1",
  "key4": "3VXPBmPuq8NN6x9ZCiTtTtEWUcmHNJuSg2UmseoXKBpKqr5kJb8SpDNAQYxu7VuVT1mdaXhR8WanPaAZ3NGwxfrg",
  "key5": "41makHg1ZYBn6DdiQw4vcxqZwHKFLTPwb5ySAtKPyjB2wzKVVFRyJe4ZrpiGZGAg8LKoqrw4xpRkkNfvtpoiLb9T",
  "key6": "Y6Ty6HkX5C4T3K4utN4ZvSLrkVDdnUzX9ZZ1vby3P2R5rsfF7vPZR7icGaUnGVNGd7PpUtvZrcyfFNKrFh1gaJz",
  "key7": "p91u35qPdfVvrfgbHWLVwJVGVr6CdoiJiAisttPBx4ubc1LzFjQTSTueWTfBgttSumcGRB5NDCAqVwGZsgNAaNJ",
  "key8": "3GtoDoZpcgSFreRXRukkoEfjFTmnD6igatxo25iWTNFiibPNW1pfzFxf4LSD8c6SnmbDd1rd6gxvYLyzJaw5L6iV",
  "key9": "5hyjnYCszdz1iWkPZC9qguSvEh61Hb8ZK41UsVgARRQpM1U5CTud57j4da3WGcdWD5oW5GQgD3sWWkXTgL8az1p",
  "key10": "2G4KHDWAEEStgAYS9PrLRHfLSstZefkm845KuQDGc84qcnoVNp3eRs8Dpth1ifxQ5yUw7ppyGVHNNesNZwPykDvg",
  "key11": "26BbfhXU8PGWPQuWEj1adUWePRwRZxv2f5ZpnsQKU8fDb8HxmhVhT1cbbbRWxwzZRmK9Cpt8PgPxuYW12urkpzJF",
  "key12": "2JwQpjW2QF1ATfUpsQzyKWyjdTWdq1gDAqJtgofFUUwCpyUXR1KwE5BE7iwN4igioLRMKugLxWvQhyXVE6ZmeAPw",
  "key13": "2yGtd4Td5jL9djZKcqkJCSCgE4j1GDHmcmibxR4UTuBZew4oo8RY7JwT1vkdujJV2csHH8CvxUhSZp6kkccRmru",
  "key14": "3uiHdaedj7w83QrmvxHsYYe1k6Jco8P8Mq2shCJ917aT87WCXbaSvrXXJHuZfN9NiYhFfGg3BvrHFx2na7qoCE5o",
  "key15": "4mfgLj6g72Lx5ofFB2HPya45y4wD2adtRoUyL2H75HWTgZrMg4n6LqdTbDMsRhHPQm4aeeL51x63mRnsxFDHWC7T",
  "key16": "4K8syLFB4k5DhmQESr8Rc1ZqaPsyhNxjbfKWcSWj1DxngznCaCgF3i2gqRqZ6kpAPBXe9ohYgFHc2sr5W8hXCa7m",
  "key17": "5jFKtqebeP2GizaW1wWFf6DtbfgsFNxGjejLG3HPiQeZfidrj8YqBw23c7GSKHkkfaw18CeaAKzrHEQhYKBnNmwp",
  "key18": "3YVSr61gKY1LwLFmQCJGasfjL8Y4TrrBinjMwjxr1vJdHxTSb9b4zUAdZsrYkzuVNDYfg8LHZ6cYCpmhdXGygV9G",
  "key19": "2kZVGTamDnFfG3rkxP8EAamwramfvPQ8jYW9a4weVTG7SgMD3qzcdrAqdXRRBJtDyo1RCzzQiR27R6w2aP7op8iW",
  "key20": "4qKARWocEXhuWKjxuhFcgARHHzyUN8twUhCTAJGGtVEGg5GS3oCyQLPuQKTQwvR3EQF3QMvFYs8xzdT6bWxchDMg",
  "key21": "2vWRvq9393KG7Ax3VTMuwToLYRAsTqHtMhe16Fb64ntEEJ2qz9KbJksfNFdqzzLTzuZyCD7mvHECor1zh6vBiSqN",
  "key22": "5KZCFj7YvPEdPdLwuXzbCEAmy1ZhhHQymm853sVwchFNW8pf3qbAgU1eKD6BpTgP5SaYdTGUga6kvuMWSSY2NF2B",
  "key23": "VcBX4uWm5kVV7PLD4DbZorxR52YEfUEkCV5Q8N5kBi7RuZMxBERutEguvztmpR5RJuPH98qjxVigKpcpqJasLKZ",
  "key24": "5D13ECSjpA2rFhavo2fSthTtfdpWp8JFfyrVvtM3DdgfN7SB5sEjnS38Y5PohFYirLmvrBkMydZMDfYp3p74jmkc",
  "key25": "5nTxGjQmXjQiUE6EKAJ73AsvXwSyaC261ERdSetKNNikTAnvAYszu2KhmxfFjyi5rv9VxyyoxVWhnqPfygntw1cG",
  "key26": "3T4oiQABHRtmLbVPV8AYNoRWVtPNK3Xa7v8jSSWY4i5vtVwad5j4B1RyJcDfYGvH5WfafBLTxC1MuJxN2Jaj6aAC",
  "key27": "53Ka6Yj9jgLFNNmNdzAQowzBtG1LYmopzpcoFnTMcnBgJArBnuCMo9jgeoPxZLDyMZtkwkehEqfbEfZe1fEBup9N",
  "key28": "65ZcK4FvgY1erbsgDEKjfhHNyFKfBBHTWX7aUmUFvWTfxTndLh8w4dVZ1kTyYzEbXCD3jXjZKjxSCMGcECn2egof",
  "key29": "4k9f9Qu4nXHHfmEEbzQcbyM3y5ZkFCwKDkd649PMBGdh5SBxSsHGRK6S8zUztuCqnWBuMdmvmKkwEpgqTJ3gxxZS",
  "key30": "xviiugM4aZGKYuqPivCnnggfRcKaNM3S7WBH2sTvZGD4iqyWsTqHDXSNvouedJz8QcVCrtnt2oaXr4DBZ9v7Sx1",
  "key31": "4rehhyLAos62qRb7p638biDLfZXesPeEq5WyVamdwxMmQCM41uJywcWNgTHEE1YkNpuwqoXSNWCncn1M4e56AZ3M",
  "key32": "yzyas3YGrhRW9E1WzZGijg4NfpocwBxGB3VyVCdES1mBH7deMJgsqBiqtaFsJRGNRXGtVsomQj77xqVs7bArjv1",
  "key33": "4Y9BgCiaYyrLVnPth8vB2GZr2XwxHgKWBWne95ZPS3nbwbWQ2SJyrULAW9WwSxUDxiXmG886CWJ7mjGWXE59mkr9",
  "key34": "5QBUEP5oFxXvscWxnvWnpEZ1yf9hCC8nUqDiCDtD6eFvXqoeCXffh75YC89rNdCV4FjavzPSxe8MhwVRMn9oBJ1L"
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
