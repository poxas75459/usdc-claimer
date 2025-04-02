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
    "29HkRSNN6G5bVaQkDimnYVcM6n65xgCYtQ3ewHNsu841bY5Xd438dtcrbnoTrQLVm5ztBqCLWd3MfUftShqMsmJ3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "41z5o1Cfw3mcf16zUGdP58wtnCEwkz3jbjiKrE59hToXLJpRREtwp8ozx7fWZWozYfLAWKk1xyaQBeKa61o5FTZ8",
  "key1": "34K59nqs5DgEaoWDUvkiNobuHMbRyFEf17a2MMCxcUnQUkHf72T4nS4i3HCr6LWyDU5ytgZAuYk45k45FCiRXpiZ",
  "key2": "W9pnwfGEijeHJXHsgiqj8Etip7kPVhKB4iYEoF8gsVhp6uFPRtLvYqiNrTVRa12fmL2PmY2kSAPMVPzu4hX2r2F",
  "key3": "xAYdPwfk1TUARCQqv2ZpHBbjkC1SXeyrnTgMiSWdKD2iCwzk2ikkh25hkVGVvfkKJWsiWxA5hqkKqqR5SR9wsMQ",
  "key4": "3ea2tSdmfe6RSpGRa3N3ib87RunKvUFWyNpwj7Ei85AyTLcgU5upGYL93cHA7Soi1SCvL5T12xECBY9rJmGiRaDL",
  "key5": "5TSBuS2BJL2H293T66ir3jgJP58jFexWXKPDs9J6LeCuPtFQvZanaPUh98VPVRPPUxK1urjR85xtrKAs6MxsXLx4",
  "key6": "28dP8upbJCTUxXFyyC3f9ERxxenFuA9ukfoHVNVSEp2mUAvqtywKei8vEFfQSHrC7MxLxNc937hMRwBiXSqwYWi1",
  "key7": "4heoCngZEb2SX4eC8cyXYFHkoNX7ZFVivaN3L6MErxHZvUc4P6fyE2TQB9pEJeMRjiDJZAp2rTypk9BLacZFhxUW",
  "key8": "3Td24uPG6iwPYLtT12zDTtmpahfHYwyd6n6nskUnskyujGisQmMZNCqiDixNoHshHKBTQdkMpeqPfBFT85e6UhvG",
  "key9": "4YEgTrQEdHWEuYHKe9HsJgMVnMPFguYVhTKdJE8ZRaKCn8p2QyvUyLs98c9DGRHqW88Sgcc8YV8qyF3RtSRQc43y",
  "key10": "4BM2sp3pMczanQxGB4D7zkg2i8paww2yHcYx9hXuazL4Qk33CJm2XWftYLvouSA435RSVdiqRY5X4jMEchngGAzN",
  "key11": "3QAv9CrxqEfUVzGUxktSmmMiF3ekvQAkU1hjVVmCRbRMcddGMXQ61vE27qQKPx3WCaJHR9MGocv6Ya4uJUgWLh3L",
  "key12": "aL2PhpvpzPHb3tARqHcjHTWiW12D9ZGhTktWyt8goc5csGiLYaGeEYzF2PGVQKhWFscZLBjrLrzfC1Ftd8avtTf",
  "key13": "3cyF6hntkFoW9SqjDfrHjwfeHCALA8s8dKnodKJbE648JfXZV2hinp9dDbe8ybng3GBrZaNHBkUbhnts11dNAd8Z",
  "key14": "ozyhEQKUDDQnMykDzfTXctX7obvwx52PYyuKMqz7gLWc3ngciqbo3GXfYg75iEP8cAmZYTVKJ4YC3YJcWgtApNY",
  "key15": "DfYwjnLqyv7zCGZ7tHFoyN8gveaZX3iu755BmuZMj6MdFYwtkEBToSAW4CZ7PSrMhrCSydVnBt4B7BKC6QbnWod",
  "key16": "2KQ63uW8h8ihBSDRLLuNdwV2hGhLT9qTnhFsTKEyG7reMJkmvATgWk7pH7tC3d9ZSzPVy1rPfX2VPSRv4h7xpq6i",
  "key17": "2MnsYwNeFFkNggqFkYG2vhuLktgJANLPJwawa3JPgngu2LQ9Z7LfV2iubac6n46YsT61XNjxEjUfTwvSMzkzFGfB",
  "key18": "twyNTPKNc1c6141SrGDMpdXCMqvX99HeqD4qk4gf1qxUHSGNQfN8jPErkhJLQ6dnuYyv3pgrVaATsURTNwmWaW7",
  "key19": "2AFehUm4t8W3G1XU4jYzPMFSRYcAM1aK9gn2GBdGUrHMm4yK3qkCexFsoVDHJtyGpkGragmNaYNbXKF5Lxg5uyRX",
  "key20": "5BtP3McwdEhuYXjqkNUL5hvjJxSnu8ahjaJ55BFMgyNPpWTsRVbELQJdCJ5u5augdZkz5ZHhFsajhJkhHQSzibCj",
  "key21": "4QgqqYphW5X9rsUWN6BmTYxxKmeaRwufzFUcscLykLL4hvemNbUGATaQpAf3aHwLXpXvnn65c9PbWL7HbjENNisS",
  "key22": "3Ye8fdTVB9bq6neRyvuCc6qUCUWDKwYju1BtwmyPkLkjbunjU9xTMSoErLTR8NUsWVMqCnwznnSVRmUyBRHF5w8C",
  "key23": "4YunMBrskGa7iawfN52jpZgFw1oEYvcoT73VWM9spMZxdFapWMdU1QTjyBuXAB1Zke1mxFNtEFAbxs6MYEMzKt2w",
  "key24": "4y4NefVEsi557r4F31GKbAHjNdep81z2JeUHMCaD9kLZ4JY3xRvbBVKc1A3FvVkW2ahRWbCMaee8ZvchtcH2nvya",
  "key25": "2QjBLBvT8ZYLg1gsYanPy2C9gdQFg7jHZHPpZu9bwgCccKLbJBzysF7r5quCN5zcUqN1aGwMVws9TG5EwYaU5YhM",
  "key26": "nwGBpHancp8UMhhy7SL2KeaBDijjhHCchNkPkcVF37XWkf2ufSCR3cZBmeE55yBFcd34suTrP2dicCysqpHAqcR",
  "key27": "4bSHeKmP4uidH3TbCW27mAW4Yhi6ZstRcPh88Y2W6aYjhehywSdEgHrpUuoFaa4NGT5yaRiKQGMzvAYD8sghynAQ"
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
