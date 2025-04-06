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
    "5AQmqtpyBpnSPXGSmY23r3G8WrAgbbf2b5aADpSEjBEqXwdxRLTxcLrSLetUpKt5mT3bShi8hWE22pFYVTD7Zi9Y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "BGLtPCS3d2PyBfvMCzTpQQ5S7Ga33jQaJVhM11HSut2DwMJRLAnKnkDJzh62hVgHHDiaspFHfBVv87NtizKfFhq",
  "key1": "4y7NAhGipWXxegRvhuFjLqD6FZE1f1vjf23iFAVQLdbr1atkTfSmzVRUJwrvHnevX5ymyiUfyr8RSVeLvzq14mYC",
  "key2": "2ZAaugsbARkFs6UwyUSVi6C1jXGdZ2F4sHbEiSxEryerc7ZLzWofrsKKMH8A8ZeSbwjUZQ7bEmnNDR7GJKLu222q",
  "key3": "58bER8ACUGQS7YPzZ4zpAhgPePKWfddigdUovioihH9ouakPSpEF8op6UPbqSK5MVjX746gdFEJcxf5crQ5BjK6P",
  "key4": "3vi5QLZ7ZPAkR4cGELV65W2tFUYmewztei4XjVgR5XwYSrC1brFPRc2vZu3UmVcLxa4UESLT8BT5QZi7H7CzqUYn",
  "key5": "3MUs4E67pKPGfQNKkqVgdXYFeYNQssJ35mhzrycwJzgWcyJ69kyV5N5xxAQRH7ewewM59ABoL8UF61p7oCqoMDhS",
  "key6": "5RsThZii3JLm2jMGTX2DodJvxGYkRFAQ35UHa3DRLwdakb2dtAbfcuPNC4wPmtPfQ9jo2CDWNSAs6aWPUdQCdhWP",
  "key7": "2ZjLSXr7GCCZEBGU8uy44P9jS15ast8dZTzA7fbA85jyUN3iCUgNuAZhXS7Fd2nmm7qhYGmXHbjwyuGujHE9JNB1",
  "key8": "39VLnAFfYCYespmbGooGaHig1f7Diy8XSwsYnq7rWP4aAABWAe3MVfzeHyCPvxoLwdYkeJnJpnRjzxxncoDvYR9n",
  "key9": "2ngNRauSrPPHKHFwKFxfDgKja3Z5rrianbDn8yVnbwb5PTB1sy786CPCoJ5TqS6mHupi1a1XF5WPTeq7jWAiumsP",
  "key10": "3SJbNyNXAYem3q9eRcw8AdduA6mUeqSUMz5A48YKJEQQkjeyuGKkF3znjFCqfDSYZw64Y7adixBhHpQJhPPMMznT",
  "key11": "4dhHumdDaN1Ucaf1rN7w7Q3GVb4792PUL5vhZv7KXT29fbgTkZoDQiCV7Egupe54c9u3MBvnZvb2CDvjTsfFKx6C",
  "key12": "25Ae8NdKsaCw1tR3yUazb4o3rQjeH2B2fz32wrrBw2R2Yy1AKxVGp2EV3kRSeDSrpj682mz9i15CupbR3jjm9qDL",
  "key13": "2Aw1qTiUAkNUYw17RKbVDebFobJP4VcHrcgEHvynbe4TiFhVXAMLoDFabS2p1LfHyRtBB1qAbKX4ndabmMrhrpQz",
  "key14": "4hADcEcjstq8DjybERABPuhjnNteiBfGiYLwqpE5pfm5m4AkFnPRjV2s5aPS8p5ZQt4powLaoGk4UiLN2KJ75h7T",
  "key15": "mTdLDyDY6p5z7viZ4dtRTnioDMMwmwgYA7Xg6jPyyuFdRtge5QCNto4bbScqggUpNeH8JbUWTNYjiyaondj6eo9",
  "key16": "4LPUhoQUq9JHK5a7UGUkp4AEgVTfeaqoVqagaQaADvZcCR7cjMpoFW8U8m4hEJftYyR4ZszQ8TznmRYcT1DEWGNb",
  "key17": "2Lt5WbBjNHX9sB8XL8YUzto7hdZkvGtK2ep7oH7LpUo8iwDCzbtsckDzNAAYr9HL3RvAMekP4UPPFihLRcwswNcb",
  "key18": "2rfSMfNRskqyXhGcQ1ifJYMBHwdFpnmVBMdAiTxRH2DeF9BjN3SG6Xzu7FDutLx24f4YXw2kZCKRZGY9gANRhC2j",
  "key19": "4NSystV9VqF89NFyZYFyJVehRLpdNAFyK2zCVcXLnbcR4nyq12duto8pUHvrFC9oeXXP2UHZAj9V5LYC7PgVCYwT",
  "key20": "odAAztQKBFqddvieXmBqTsBGGctQUh2gkaK8oDzEaPNQLcQEA7dyvdsozHvfsDfAM1dzBFKAcNFCZsDvofNGJUE",
  "key21": "4eVbFNXssY1HS8A9hvZb6pYxpJmEn69s8FLo1u7mXj8hTFGVexvV7t2c1xCWVT9TRJWBnwXp6Y2AJaPjEHWg8ncw",
  "key22": "5mdpqUabDmm4igQiowh3MZrZ97HGLMnnaCxkHbKVtYLCy3ZVEEpKExAbXvhr9gMjMmo9eBawxrbUgRvgiY5T47MJ",
  "key23": "2mTtZCdvdF195BMZyXTBoVFkPUWeotnxU5n1K85t5N1NNXNUaQhoGynTHbJks6kBkJ6HWiPDQ9yVaQyP3tVmGCW9",
  "key24": "pEkrgh8pdSouh6juob9YSFgBiF1r5uXqAbRA2L1Soscs51GeXV1rxHhzBUTJ7XnpaxCXRuwdgSJdSE8Ck8ao9kz",
  "key25": "2sucsXsUj8urgiN1xTNvgdXPzhf8xsGSG14CSM1YiKfCLmQqou6Jw4ZT33Wmkf9NHa82pbTDw6kyCyfSVeY5HU2q",
  "key26": "3d7Q8HCCX1mp47c9BuNFmeED5mL7qdXwMZk9DZt8t5fwTnPonguwpycY5yWBfNRRNq2MhCwQDVDNgBDKPicUQRCU",
  "key27": "3vGnphvCpxXZtwcT7MvQBbDZ3RRNZyThGeBEYAUEEmfZ2joB5bP8rNNxsmWze4F8mG3pxFMBG1xStZ5byYZpZ42Y",
  "key28": "SdP4APAWw42VcjoYu2puoLWqR1vSzzhwYuvs2foyFqvFTAtLKa2QyF2MMKCk46XTx2bfvzmuUU2BtubdHakpvLp"
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
