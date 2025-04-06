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
    "4r2toT1oYncAnDwzvvCV37wd3Jv96sSk19i281KP8tdqNQK5Xb1u1wQzpmFs1Tw1NeMQ9XTcDu5imYgLC5YaSY3C"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "64KBHoLujr9wp7tQvDFaLGMy5vkHrNrrAnyKYtm8uhb3t3KN17fckidmivnybrS5s59SBadQGZL16aAd6Lj8veU6",
  "key1": "41zi7MYP6RaAe4SfAZRUKtwG5yzNBkP3e6sX6eGUqHxhNSwS22c8AAfNxNrr8Fim5u1Njem7WNdMosB5EMdfYnW8",
  "key2": "3p2yHgQi8BG97vezQAhjQiFE3xDYpgGSSx6s69zxehETXkF2tbqpxPaM5bYVPV7nXn4G9TmGZuCVLwix8L6Tgh7N",
  "key3": "51rMGqcUnfD2yorrbxsASpnzXTm1XrX1uFzmmioQYUVami6L7Hs4nLkc14dhKhDUYeGVGsm4uHQyVreEP8F2TR9B",
  "key4": "388Tj8XW5GVdtxor7mZBwx65VLcqLgFRJyvTDd7wW8kqoGG8RyFumCRY8dqD1JpirvriizdBnjBeFiUSM2gY7xaA",
  "key5": "4aTmur25ox1oKCunVxAUaDBQWrG2QQmLgpCd5XAB53FHc36GAojmLawLgbaS2LLUjq9W6hYf9ig5b8DsX76TDNsN",
  "key6": "3C5tzzQbJRnQSMnGVHJa2MSfSPrqzj17hJzt8tz4KqnpM3ofzRngVWJsGpQX8nHXdiqEQFxWCf22fgNt8zAuJDsm",
  "key7": "Mga66TBG9sPBiF11bSPJDVjcm1CA4NEnekPvD8VJxAKx49VPmAoNcrsdH4GzBqXauxBCfkrjajoBC6JoUUT187p",
  "key8": "2hHEU5nkqAgRDyi4b2v7vDNbMDJnUefUFQEgijGVamFwzy34eygM9Nuy7nRcNvZbxu5ZThWUkXmRdY5Uehrp2XbS",
  "key9": "2J12iyB2ayvrE3MG73NnAggvmHUGinyxFbnY5EeCo1cM4nggLUMJbJ27HMbkygPGp4MRxiShXZy3gLwCqHNZxvQr",
  "key10": "2AnBzbSvfEQhxe9gz4BgKqfVRPuVxwLVA9pkd1K1KpFaZfAQJi2M8tPdbkRPnYYWrm7N6SuBNvYTowqvY17ragm9",
  "key11": "4t7wBighBBGFMBk22nTk7fcAbbYFk9cLXPuVRbjVGzpPxEA8ZSn1d41fFQ24HbZD1ywMVCAkaNRQfcS4gsK63tz2",
  "key12": "39p8gTykjkbVccQYDeTg3VM2f9nhLc5QHyUyhZc9N2UFw46ke2vg5SCBRAhMDmZt71CZ4UuKDtYWhwdhGks5phxk",
  "key13": "5oVUZ1KUWmziZhTVV9uULKCn6aT1sthtneHZL5vvP9q2kNX2DB3z9U1QfQJMbZojZpWRDNdSjKUNbzGf4jjwzzor",
  "key14": "3eiPCBfToYmDENFfNHVrdgoK64KR2LPchbTQi2jDvTEXCeyq4FWna9T3zs5wXnjNkpLMRkU5rMHYxyfo9vNjaDWW",
  "key15": "5xWjXUsvwuNiSapyMvtwm1zhhtdkymUgCYxiRuxHjEPsxKYusyNHUtyF4GpkWDjdwV5ohK1rjdftxdGfYMtzvSBq",
  "key16": "2FANTCJBQvHiW1eVT4bG6FWqJfbzFymmtoVyjqkWQFhqz7CCofR88vPTWthcVUAZQicF8BUph2dNH35rVSbS4rHr",
  "key17": "3fwzedD4sEQH38jxipqC9nJsz8UWJ3BR4gGGzhshoeWGy9cD4BgTfrnqRoF18T2oQwujGMN39fVST62Dj8cjaXcn",
  "key18": "LrqffD5bRQ9XBQfuDe1T2UTcZrjcBwNrPN4gxmEEJNyPz8vR2crmHdKgxEGKWqJJDemNe7xkoLtWGZJ9xxyYTf9",
  "key19": "2LTifmNMNAb7W6aLB5S4nPuVKec3QDYAiQWcoWwqZP9i84WvcejkkUobGschE3uV7QR2CcZcZCHJ425p7nmra3tb",
  "key20": "64DUizuUVfbmzKiujPhjAwR3irjtG4r58LHP8RruDgSEqzVV992dpJfY8dg29GUWuSiuSWRr137dRu6ka5qtFxX8",
  "key21": "2UdiZz3azktps7Rgck2BHWimn984ED4skcyv5niWK8ebbcm3XHbahdrmaxcfoyX9c2iq7nEsZm5agmcC75p1SVYZ",
  "key22": "5VQGsKwDAQ2PCySzLPKEg2YzHRQv9BTZ81R3gV6GKmehD3iFX2Y513uQBQHQ6oeSojjsrRe7i243TgVjrkhQv5jo",
  "key23": "3ThXPQRFN8Eta4TofxRNDgCifu2jB6S9oprBgzW4njkt1SqVsZsD3zAo2NuijVy3cUdH39yZTSqdrTv1g6U1TGkq",
  "key24": "2bf8Wiqb82EmUVVaSMid8ezSFKQQWYF8fsirgxzS5nYHo3wCeiwDf2rcmwFLzkqs8ghh9vkjJ8cjV37jqiFvW6fs",
  "key25": "4PeAmLMjLigixvmqqUiGh7pPDn766NAZPqsFd6PGjY1hwrieDL3VxpWnNPrjM7QcycAxYsY6WyiChzYfjQ9HticT",
  "key26": "4m7FcM8xnEKLqnvM6Ew3Do4JTXqN3TJTKxdxtxLfquCSeRDoZS547nmchYE4tcvj8kRxaEqBRYAP2usjBNifZeow",
  "key27": "4ybGmimUyFK8pnxoK9WojzoYwAryPFf1LcRPdrXe7Gog6khutaDT2nTbA6qJmvoJ3H5p2ePmhyzNjAqJDLFM9Rv7",
  "key28": "2w89WVnpCoU7ZyzEiANHVgmhhcEbc7w3EYXnMEff8ckSJQ7zCPE8cwtT4yRx4YUg2dJmCm2PZUdMb5W1j5bSbsyL"
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
