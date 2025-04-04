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
    "55AWpFfQRwmb15hQBmsEcxg5msVyDzC9ezc2vMbwTLyHEQPA4xYZc6qagnRBvG3jDvuiepBcWJ7hbQK1oJKfGYgV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "42EbmBXJ5GfGC9D28iQShDcEUubeNQwd6aEBtRudXiBBJq2CSuWrYX4CwmPVUhs8dRL5VCYjHLNbkGmbMwoU5jrP",
  "key1": "RkVC2didmej5FZW6JPNxe8VR59Z3HXGJmoGADK8UoxGZZzVXpU1qg7BATyLB7KvcpaeQXkUCDo6NE8ncAPV8z37",
  "key2": "5Un5ZAJgd6GQLiAsyye7y4FRYNthHwRSN6DEsU9J7BHw9NPPhRrQPZUWGrS4vnetocpDzzXmet1ikPdv7uXmQkG6",
  "key3": "24xb9Mhj1dbf48miC9J4WP93K7fLL7hoRFguMGd7wFuRGb7a16EhfuWwfbXFbw5D3E2ppTQTqGVcaV53bcYZcaZt",
  "key4": "3wqMLXdfHjcNmHrGnZUgftkQBhLcU5j4ZUpKW3StdLiX5YftbW934HfpyJ8a3X6HYhQwgNiBhYgbWzKGsFNcfrtZ",
  "key5": "5VtLqejoJEEacdzjxzvTsRQPu4MtFcGvjg2MCR3LZuqaUBF3iDJGmakQ4vUCoe5QQ6jRT66K3VgjsVguVbhMDick",
  "key6": "4HYXkHjhwT3ctGUc89MYKx2tkpb8axwLBReKVaGGQbwZZ2j197eSP892BqB6VHB8PPnQctKunaLZBAo1CPKV2pV5",
  "key7": "4aThw1hMxaxBU9CR8yca1AbwyL6htz3dLkthGkyfPCAvftKBH8tSfQ5VdwQMQaGJ94kzuEoYMoHzKJfzJ7C1sSno",
  "key8": "QpM55xex9Wa3aoWdaGyjFmx6W5fxtdxJkuXtGc79iui991CqdzvChbcwMSK64UhYYS2S9JYy7hHtcNvgLACZfyn",
  "key9": "uSnGPhL4NttYoTkSVQ6jd5HR7B1LuTZA4ZdrhEeZKGTfkb6aJLDKhfU1FyqspM99SYWRW7PS4tLE3gpJ9WvgL4K",
  "key10": "bfFi4zXsLEyFFJnCL733QqAEdbjKVPeWPTydmTmVvZFep86VZwsRd6quNhnSJ8nS6S5ub1yq12zRhVgsaFL17AB",
  "key11": "5VrgiqtoVpCdinXYF8d54oeSG5jJzWcx7dAKnCGdW9vJBJuoJVYNLvo6vmfZVq8YKBZiNkwmgeziC6aXRFmukgKn",
  "key12": "4dF93rKoutVhCMHa5MLHFRj4kMSkuyUzAvUBhUcdmb1Zm8sdLTSzzj2egk479giuHDQdKM7ceSGTVgq7mdwYXp3K",
  "key13": "771Gabv8HQDACUkNoG1PXG5j3Jgh8Fi7TqFCPCciCF5uG6C75bJGtmFKqrhBYBCegmsNkk4DkMkua635CFFjtbx",
  "key14": "4nbbPYDmHLLhVybgh233a9rC1vWvTxafp9m93Gu9j55ZHouJMMYR3WQ4K9iHptU15PBm1MZTGiUPqovt1fDkRJBE",
  "key15": "HTmckwVKRkbKzgPghRjUwzEPrAXaFC5ztAMCJGS7S8RuHzD61jpH8mKvuEbRnVEmAMZsgZbHtgs7dMTfKtzJJ78",
  "key16": "sx7AoDDAR52hs2pAFqHwX2gnZbFNBZG4DvdLU8GmR1rWY9T2ae1UrkdWST2zMQNH26deY4LUVCe4baNY3yqerWC",
  "key17": "4L7uNGzFXyjSCxzPKL8XXLxYPa416NodhUTYbt2nCb8z4oQ3AKsPDH7pTNJBKM8qzEWhxRxHJZAmBFZf5Ccv5F4K",
  "key18": "tLXsgwGVLXduc6pTYoDK4BPiAEL7PDHhJ2dEfuahgV9HKys4oLoGfWHmJ7XCyHKQ7ZMi6NKxk1vUobRJ8C5eHBW",
  "key19": "gJ1T2wTGJD7aAmvXMQetdgsRcGiXmvGPTQu3kCgpJTVZwg4uC1SuiA8uDRMUDkcLvRG6NcXMef2Nsh2247L6Knb",
  "key20": "4bcm7cCYBvgx2ytS3S9QJv4ox55ZSiDkJjxAx7XbTVs3cbzuj2rfePeHo5qB2ECMUA8cUsRWsD3zCcv5u6z7XHvs",
  "key21": "34AzXns2njbSx2zMUXfsEQKxQjpJ6yMsZzQeSFNr3sVzX7wti49o8PYGWLEhN1jVMJ5v3DiDKuGtKUrWZxM88Z4X",
  "key22": "ne1KCJLcQoTVug5jaXybNwbETRkKEShGwBckJW9MMRbqS6SixZvhMhifAmMxsTruUyUdayQ1JsR71jVXT3xGdr9",
  "key23": "5XoMp7YLeUccDGx45KjoxPM6fzJcLgh4ueaMfPng3XZP43TujLrUVym5TGJQJdSWW2C24jTZqiN3cDSa4UBz3ZLa",
  "key24": "5iBVVuRWR14PMLT9soYjk4eCeFyWDpEAZzvuBMPNoJd9haepDtASmNUxBo1Q6uQ8wjHLBPyMQik5qMvRki2CJmtn",
  "key25": "5Fr8VdpQ4j6mro6X2wjLgUBXB8Td3TKugpmqAP66G4qv12ZoAxYJZEUXJTpRzsW6iUC53Xm2Sm5QmNEsuVQ11Y3R",
  "key26": "2JwgZkgZWXHN3uAknAAhY4j6UyNRrdkBXZYdwBn8iJTZHEGEzh92R6CJLA8ntoD2e2efqBzRqo9HSNEheA1bmS6q",
  "key27": "4sixZMeCoswRpepZWvtftF2UWR3tTAvHUH8dy7iuL2yLYrXj6MaQPLPX12TLPAY7EYHM8VoB2ZKYSjrkDe3Yxne3",
  "key28": "3wyarRXewSy7911atp87c8gASxZpWQwRxhy319eEPHHjS7qJ1oCXvgrMCsuGwo2qJMg2sfpWDWxyh94iU9BRXJrR",
  "key29": "42nX9Niv4AFir2gtTMm1YWzsHbhazrkdz44m9kV2C7eR3gPqvzxvUi75sigEyJJo24xJG2TSEzsfzDbjv1oPH4GR",
  "key30": "ggpVCNhuPJh1JGyYc4Shf86MAQoWKkytWDgkGAm9j364iX7pr17RoXamyWu3urSV19V4k5TtqVDuotcxBCtZq8h",
  "key31": "5A8FCAX7ZqH5GunpoG8YyiPgWhSV9B5Dz1PKW4VvjDvok57PEJcUFYrzjpvr2qszinrdBV9vG1h4oTbYKwDaffY6",
  "key32": "3Nd6MLEqf8p471dDhhSpvsSMrE1Uxn7er2rc6Y8SfTW54XqArWVWutpahWpKPpZAKb7JZP3xVy9Nm5Jfn9WPsQYP",
  "key33": "4xJAuAMAfPcoKnLFaSvcgZ9DUeGM8mfSZxWwsURNakbrm7dUyzCDa3aFFgNcjk9wx6c8PKRVMhZA5S5G8yZFJLW5",
  "key34": "4CKLYobHPKEHh7erM3nttQjm4GNDaMaudapa8aDcyNbzNamDgZVV4jp6d9S94c8Ke4qXqiJtak6Gfop2N6vywHJp",
  "key35": "hDKVdWJBMnQrctguDYGVi6V9aVP7xRVgzrj2hdDiCUN5fkQAJUC8zxjZizUC23iRSRG7XaJy3iQRJy3AcZdmo1m",
  "key36": "2wMAP5uTXNV6TgPj2coygG4cRLYahSHMR11GWX4MaGhuQLXDqmSvQhq2dRX8MVfEzTRGvAWGQZskGoMo3dLGCvVp",
  "key37": "5C7VvktsRvGuHG4iM8WNufnTzJJwCnXiBitBf4LeA6fTJaNZm9HqSEFBzvttdCwKSCF2AYc5hK3MH9M2EfzphjAr",
  "key38": "5p4cdnBb1zrfqH28dtDRovbuDQV1t7k4DESXqfYJUgJmqkKZm5FiS5ioZc9UCanN3yiDy7ecxJPpMu6UePTCH3tU",
  "key39": "52BH93Aja7kMHWLYiCx6vGKJphRs8W4MZZmL28GfFAwxHn7rwwDe4GEnCdkxywKWJmdFaYuVtRtJJj8oyiFCnpDT",
  "key40": "3MX6TL6i5EbxmhAjznn11Qy2mCcnthV4JDDCn16cRQNWUSC8kv5tZaYZ7tkCAYcaYrY3drBJ1r5b341zmsx8Amgu",
  "key41": "rR1Hwz3JJzkmSUyvQjTqTBPGtEd47feJ5B18XKVcyJiU7r9ytgr5tvCWSoh5Vi3atwscCGcE416sU2BSgWakWj3",
  "key42": "4zZn5ph8apkVyehhVvHMC4Ui2tLgbmiwcyTgMfykPyFXFYJr4HsKQ1zbLd1kdM1HsXXmDvR4vsxDoRRVLLPRcFmG"
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
