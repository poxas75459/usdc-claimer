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
    "3PEy1NsfenJ9qUZK2sSF2RuG23meyxUQNKafFBogL1QM6aDubHv6e8sQTu9jNL7aVutNU19Y6DWzGoaS29evTCne"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4NLLX3LHRJw7Bh14q68eRDEPGs27CvHqzP2YgLVA5CzZF29x3WcnBrCuHYNReUqmUoX9dmzpEKjnu7WAVZVqmAuy",
  "key1": "KpjwJZAYG4Gka9MUQzkpRavAjiG1YhEPW3NnBhiumz9evadhBGe6jmtudWB4C4SCSeZifkkkpwK1EHPWBCdwjCN",
  "key2": "3FnuBXjE6VGHpXWatGm3shJBFFMemtz6vENCM3MWjWyE3C1YZSopEXAQSQubxkoqttCPWZ9iMdtf33GSw2HmbpCa",
  "key3": "4xoeXfwNLErzNw7MfGPVJz14S4FPgE1iyG7EQA5PGeDruLXLzTHFs2VqWGXLCesfEWGFFT16mNe2WWPM3DeTzCRG",
  "key4": "4dtmtUp7GaBcErbYy57GWrEn6PveBmUsTEJ6LEP9qkWGyPLYhwCga2GdEjasseAa9ZjW9nK3eivbBdC5aqLA8BmK",
  "key5": "25EFZniFPqUsReeZ8APvDJ8uVkLsEqB1ZLsekTsxAGP4MRp1CCx2HuajxPxjBLm8VQjEX4DhT1G5cv4RejTzbmxh",
  "key6": "4aZHoarE7wNBbGJHhWx1d2C2HqW24N41G6We8EEYMxWV3peXUzhVMnwvqRbDwXnjkBSUdkEWpC7YwQAEtT3wt6cs",
  "key7": "62oRdZFJ3rjrwYTVCdZNy72pX7bN5eFPfcPVbT5qUS2nhHgKYzBHajun78TCvvubR594ErwXcuvMezC3xPNJ6TzD",
  "key8": "XL61mJR5yFjdS39h5x19i94oG8UVTRHedBBcr1J4K7K2krbo5HVjGdjnQ6dSphC9Z6yZiQvQC4x3LjkJYNUzMWG",
  "key9": "5q9GSSFmCeGBzEm1x2PjePzBvdNMbS6gEK3f5hfyPtee6nhGoDTtmTqkzdz3mEEqJo3Ns6twWXEBKVXrCmwGRtno",
  "key10": "22mkVTyPddS8idWmCkNQsHy56tArBWGMbgchQM7BYq518j3J4wGrcn4vQZStE2LvMzZd5QGBhtjwMQrcrwuhZRMq",
  "key11": "xEDWuNCmnGPvQq4R6NWT7zgycdeWRKXvqaQ5jxmj8XffY4kU7ms5nQYHV67CdLL4ZW6u9zDpTv8Qa3eqTVCXUXd",
  "key12": "Xjdc6esoWzarghQ5sUkZSbAzPkoLVVthUEMhFCxeDtbMB1n3gWtgXQBuFCgaWWBTmsjZVE5HcvhV8yLY4w1cr5R",
  "key13": "4aWPZGoYPreHs7M4giqWKFhSfWbN3n2cd5Zaraowh2D4LeYmDuAxJa2CQ1a7rUUtD5erQjmP643ohaEQXVPrBCVF",
  "key14": "3tkgZ9jtRM9gqqEGynRomHYLEh4v1U5LneEnenASjYY5E6kizNr8PGUZpvU98HCQgNMC4gn7qU7ya2xCUTcNraNL",
  "key15": "4wPjDcuUnPC3ZLuhxkTxinQKenduFJLgbi7hP8LnwrvagwVtToDaUa7bRhzU2syv1W9PW5dwfFmYb8SME9C4EfYS",
  "key16": "3WZeSLXPMcysg7donL7aap8LZiyf7bo3oxCvH3naLFNR5G6mA2YZLbi4CDFxV2VgpNhqKvrWoE8G327HxoBwABYs",
  "key17": "q3Q12vDfpBQ2FV5E1MhDxCTJvYVWszcUDYbc2ZybM3oqeduiQCwXByqhzdMyYLYJ1P3yaQwPR6bsrBTHHg2CQuc",
  "key18": "5NT1fmMSsNvb1QGNuWXmqhyzcK46TVDaF3WjntKGoXFbNcQ6hQaHejmCjg3T3u35PZiaqZEnZtp6fExtdBU37apN",
  "key19": "2FEVPBnnpnA16B8BYVH6xYK3WY6riHZZvzpn4YJz6caQAwTboddRJWQapGF2HfJguKZDkAoRykWHaqbm684YFipd",
  "key20": "VX5E8J4ERApAEtqAEUow8LLUknufb1bVLXafPhyGsQGjBA9EgABsuoQLGxYZQ7nmPkWpTLX7VgHEQiJExn5mccb",
  "key21": "3kvEPydPknwV9pG8VPwC9wKZBxm7a1A5VXRhUbqHZHQgpfGYtwbLBPVV2Y3DRb98MBgbkHHVodiQgi7LjwbmbuH7",
  "key22": "3YD8xy5LVVo5yBx4xQFGWGBMNKAevjT2Tce4aYyhpPEPyBfps9SWWK97xdC8m8vGT6v3DVgcHBr5ButRC6BR78Pk",
  "key23": "2oyW7dS9dKniu9dxGK459rbK4KhcLdnDUWxvGZaKnk4f4Nq7jQzgEa64dGhHUkxWeV6YSdZxw4dThpzwg5FHbvr",
  "key24": "2CN6RZ9xiMpqfiZQ3H9gLkEr5KRY6rEpcpDXECncu5wj2jtkaifwEywww6fhGwcXs6US5mSZYCPQC4vwfzGw5tX9",
  "key25": "2T4b3rc6u9W96rC5b2ojYCgoWrer2r4cbY9qXaJZYftbgzeQ6yqzVL1xeaq21Fgi4QH6Ye2Y2EnPuzL5Uu8TtN7o",
  "key26": "4W7tHabpJZmm9JQ2evnFCGuckRAMvtKNopWasrPrmNWNgoLExFvirY1vUpdpqqeJ8qNf9xLo7dum1b2R3BEi8JY6",
  "key27": "2K4wETWiF4M2K8fRVngE9wQU8KNaNUWuVFGVsAYVMh6fX2aB4XAMXWv56GheuqwY6EeSQmBc2GTn8NCxedKF2FoQ",
  "key28": "2auiZwMSuosBTVpvMSivjpFMfmeTXeRXHC4LkLX4jZCYaMpBVTELcRzc9CfBmrHja7XjX358RZBWrzk5trEfdcZd",
  "key29": "5WMWQj1G9JnEHeJb9Dj3jN17NMNfaZkUf4wXkcykUb72xfQVYuMd3EcuKWUdGUbVwWqWyYhzsoxsgDpcJtUdv1e3",
  "key30": "4xhG7VfeytQDGHYoEPSXpM2TVyvehqkvjnDyEb7vcThGoGe48iSKeMcF4rCPsVsS4gzHr8GjtLmTrCJwWAtWx7m6",
  "key31": "Kh4beXAtpU6H29FsfDo3opWy5jYo1X2cgxbnC27xnxhTEpy4A257BrpfYZrSgg4x8moEXX9wwzqXfEVZrK9coQ9",
  "key32": "3RNi8TX4hQNbR1iYZJvwBfwSaDDoUVXigRzZu7ubBHVFTj2rQwrRDFJtbQLdqiK9VxdTN1wcdp2gkBnkyBBFJX4M",
  "key33": "4c8VSFzE6vyTvhYSXSEUy1deSxnDiTAo5Ujjqngp4s1XzFUaJz83meForUj9NUvEp15AwcA8W3k226kAMzsiKytS",
  "key34": "3KHA6FaP8SAsZ2LTFzDVMaFx4RCwfAULVjXvQUbatm6oMha1jmgX1JsQQqDrV8xUbNSGTBuiZFTV5fS8p2BSqzHX",
  "key35": "5i35em1uXxjB7brJu2DncJpzfhypbLfp7EsNZfmxDjhDWhnNCGDT4JR5pwxh9xZaZ7o6A9o88CMEyDGKPqXqY1by",
  "key36": "3BBkA2YFocPo3WQmdULziNY8Kk3eBPiamPoe72NXFKimZsW8gLN8eA3KUGMjtjth22QkutyHfV5B92Jx5peSg6cq",
  "key37": "39sCM66Am4jqkkoqAqe4cEivVwg9D42G6ijf7KZiEXGccePSy2f3Q4aSXzRCJ5H5aGY9aRc61rVg4SnXAuapGDs3",
  "key38": "2zybvhkQYLjNasvGUY4yx3rjoFryKkcM4Y7UoTbWr16G2B8sccWj6NsiVQeENhJQNjCxYhogD9wcsopap6hprjAf"
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
