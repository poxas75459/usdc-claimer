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
    "541p44E9fW3fYk7GuwajHNk97mZFoCv3K9ERSpJwCABDcFXCR2J5rxsQdVSB5d11aQKHnd3uwNsq1vMfqvMaXywm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4E4T62r9KhS1fcnqhSC28RopuuY7ubj2hPGDCNcne5AdANMrJBrj4DzmS8d1FyJnKtmekYRyHQvUgXxV9rycYnLF",
  "key1": "4qpxooRqb3Wfmfev8VticyDQf9W7rBnR1LmZ2DQ8czJJpWZEd1K5Fv8b22JuH8EhswaQr3HKR3pLAy538yKhEEgT",
  "key2": "4MqnZgTFNTANUozgxo5ZAp2wQggxpjNdDspjgzWn6EHkL9ZadrLz3YHaXUCkWtq8DFPfrs7LveECxJFTVDeFHAVz",
  "key3": "2upwSR5AWQe1KR2udN2UYuV4HQeM8bPq7EYLRvhmSZvx2NsLwjh2g8FELVGL5WPvjFjFedftDynbM4ZxFB3d6g4W",
  "key4": "5rRmVqCGgESgb57jGrr3fydfxgmaJaTxymStiPkEwcX67Fw4d91NqqEoaG6iAHi4qsjtK6jATeqk8FZTw3DsiKX",
  "key5": "2ktBYkvw5sUR6WdcChhwd8pjCMLkjq1ZfMQVRP3MHzwv5Uz7caV14sFJjzxFEJmQh9CyHcqaTqzGdJwHCSqMiZZ1",
  "key6": "KY7wSGNTLJBYCCnKwfJ4MN3hLLvqTLtZPaM7FW6Pt2fwZqxnFC51NgTKGJn8KsQUUmALCcJmKpM2UbciA6PWM26",
  "key7": "5SKZjm9PURxf55qoFfxcBJ3PUnwdtXqaw2nobawkhvJPbjjWrRz43NvEeZ7HjRxELUC4MvDziUuBAVsF7ns1dTh5",
  "key8": "5FDskDHKXaqwx5n88XTVbducDzgHxQnovJKUNiDSnMrRsrJbT5KiyejztmfEXiPwJXFj2VFNtP4Yy1dZ9ETUMvve",
  "key9": "3yvTUEnhT9LYwSc6iXZa21ukFr7yLrxAMEm4w3QJSVwLe8hodgim4nnWmSzwssJ6SoqHSPXXJFTsQ95tE2zrcUTo",
  "key10": "2yvEqNJ3d8nGsMqbuVQ3YyLY1J5YAMgbL87wxDNCv2ysCQMS6156XmqNkXnfNjsJgu5Mpd2Xadgw5NuD9GYqHP9Q",
  "key11": "4NHQc8yqo9GX1oXf3GNSNnAvDzYcLcgAzws8hjpA1kirqJ6zfH7ieC9L9jxM9QP8LreaixFLW9GSewCC6PCDEn24",
  "key12": "57EtfHmnA3oaUWHjDjJL7Qo9ffCu3vxd2ZkRjubL8tucjy7ApCNBD8FfG6mZDq4adAbzzLq4aQuMLtaMgbJm4mAr",
  "key13": "5thGiW4BtTGGvD6uGVVPRDE4HBCuiccZJQDfUZ4noVyffFp11FhqziWWR4QYCC2j5SLoMTrMML2xXu51A8Tq6K3P",
  "key14": "Ty5rNSpL51TY7xqcfXkdkJbmtFGPDdWTz16BsLDcdRaPuepdy3XRVJoRqkbJAEEEMRZTYqcbmBAHHEXZeQDdr1J",
  "key15": "5Sk9nHsYfdwmG9vfr9dPsuvuEcAS6G5di48Tt8pfUepcuSoFLwDE8zEvdKV5uLkYPoGLDeeqneRc3qPhs4Td9sx6",
  "key16": "2GzuRXwx3XFpJNnKpK367Y99tTb5f316Hwj82uyqzhuYv7s8N6ZgaqJj1PYCZu5JjoCr5oDSN2oDh5tcBiUmZFv9",
  "key17": "o3GJ3oFVZWfDTJCFo8DUUPxHfr972TL9gyQoXsRPsoEUFXz3XVBb7UBL7qaATqqai9qFAik8xn2ybgKpbDz4Fcg",
  "key18": "xXFx6izYpmnhVH6g9FgWANqPLRM9yZuHmdL9BHc3P6GGcmxmXpi5vaddtv7xufJgJkgtdx3uK1Ph5hXgfeoUuQU",
  "key19": "5iisabRzBB4zzCzonxDK9u1ERFnHcDYg7oV4CdRgYY3A9ub6bhebZaFT8Lt5s17qbEP4zxdJkZX63GEksLnaiL1y",
  "key20": "2MA6TSVu4gv7Vf4xkK9ZKHTPntvaE8gDqgyxmzD1MG4R6b355ZUFcgWhnkSfwP2YLTwrZPFwjXcVoUxDxVb1G9H7",
  "key21": "2rTXykD8KYyfSDckPtUhfX4BWUcZ4eQfuHQUVVNBuA8SLk3BfEv9xK9Ny7RKJspfSW3Q9eZnyGt15u4j2NATD661",
  "key22": "6jsrywpVoqpi4txeNKUobX23qoznSQF7P277EtMrm3UwrE5sWeGupKtRwov934U9Pv2toxYV1SxWEoqfULgbnrP",
  "key23": "5TDeShuLzRGNpvghZWEHyrF9CKqkzaA7TRaWR4uXmHQ7fzZc5UJZJWo9roo4nSvBLjxbwFfEBYcniTTWv9nr7Q9q",
  "key24": "3N3AxhN2dhRxUH6LVxcvAFT776M1iJPXq6wz8z7g125BTuimWULdTZYBbEWASvXEVxAmeCG6z9PpWg44TtDw62DU",
  "key25": "3YW4cXuv6ZhPDtuFky4Dz93eNCM9aiU6TWZQS2ihPvy9WoBRdMGcCoY9gcpaubr4mDFJ1ZqGd2br7KCc4peSuL78",
  "key26": "4ZrPKfaV4EE5Y4E9XJ7KWrnXnj8heKCoxPmdi6BJHraeTqBQdMFGkP9qUqZa77Sjw3w5eFzVZWDxCUR2peKc1Xxa",
  "key27": "2TTsbjp4EQdmiqVNsyQMHwZTEaAgTwmAw1mEyEzg7FNvmkzcvBvhP5ych9sC1fc4aFKxcJjjbpPvtCAWyYMUFfUu"
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
