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
    "4qji8HL8Fa8vgFn3wMhjbgZGFmLvnemEHX4BX1111e3FYioPBrXkT3rbJxLVSQ932Z7DSZKVLrzMNqRUn3vaCxxo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5DqXtxBmYpNV6qA2AhDMxA8ovJ3MgehyveiCg7AyB3C3ZHxbvhfcEfz3vvt8k1t44BdvR1Qp3hvpEM9FMs8zcfEF",
  "key1": "4Akt7mSz3EnL2yRgqc7ENhCgWQuqKJmMuWR6iWsKWohUapAkAFdqZDmUwLoCeSwUbi76otCxRNq2cSnJK13DbVf8",
  "key2": "3fkEQ2W2wtEVvukeMLAP6zaooKTJhT3CPg6YGsGg8tJzEzKU8oT26omgEdWmbcESoEAvAZJLQqH1ReCRsYpXTFnK",
  "key3": "5uNHb2PoFCeWGpbRfjb625SMwTVR2JtP1YVproSaxd7zXmdAf6EBm8JNVAB62ZuCukgoRKZDzHq1u7nerZxgsbmb",
  "key4": "3nJAcyYJnDsoYBVRkCY8fVbq5mSQvXEHLrP2UNq19MrzEcSVvLKmf1xQt8QDiM2hZURbop19HT4G2jkJ9M7DmRfX",
  "key5": "2PWiHrbPNAoG77ts3eCenvHuvxewDw6Q7VToovKmPDKiKgN7HxNWD67D88zVYzcmagAVrTkx3U6QgsXbhZgYSaG8",
  "key6": "2rGwsuW9X3nuVXBFyQLqBQQYpHdakpHNQw7B3Vxh4ArKFpKraqE4uBh4khcyZDaDhzQAQ5gwwQ8hYrXBetgcjHu4",
  "key7": "2kdmTHUdsdLgrqso2XMCUS7PbwzKLmcZvLZxdqwQCT3DnW1yfHgNKkuTgQNbdQUbstx2bzRC65JLALz1jEd9B63u",
  "key8": "5em8fn2Jocwa7R4b1cqjMYss98Npk7bkKJtSJEMX5CUqYEXrdSKtuAnHaR7D3LUWnyzg9Hpep3MR1CQEfXwPz3dj",
  "key9": "3iUw3aGCBWpUmtEJ6e9d3NowpRktR9e5yqr8ASMUf9kZ3oTfQnifYJfrKA5wo4PDTk94aboRpbxDHT95Lmk1KRzf",
  "key10": "3XEtKx4V9q3eiYQTHGQJgTEoHFCKMoS3gQobLzpNjHYwA94c5sF5R5hynTUxPr8jjTnXkcE5sBJaW5ekoNjSJhUi",
  "key11": "2xfNunxDEsvD8jmPSVjgzZ4Sv29YBYzxHwcLAMyEo8u4eauVMeoFRb8gVei9hioham7sCbaHoGWvg9dGmtT47WXt",
  "key12": "5eVym2oQJvHzsW38WTTzonQUHKae4YXAx123ZmEJ5v2UpaSbCZXSniyqX83JmpcEXYeumBkYze8wRdFQxm6DFjvd",
  "key13": "2QuT6bL4CnX8Rfm4oRHza5UwZuj495gfKsXwLxvkxCZz1BKUjDhWwgR5UjyiS8Ck7UFbvrF2tvVncWdxphaww92h",
  "key14": "LqiUaB2YqY6jpvAxhCiuvk9M1JcvLnZfUs65aa8fxd3M5Ny28NfFdBZU6a8h2s39EXBv67JkxW8m2DavSnAR1Cd",
  "key15": "ZZsuGUbdoukoZJuUZ5bsJRsxrL2XHveytrhs8tbb6PvDZSPt9ZTFZBoDqZfNU3XVzxFeAY9rx6sqE5D4PgzBVcK",
  "key16": "Ku77sAotdh1j7CUE9y2vLipVvuJFjk7cGewrPeT3sbobhfHuCMsQrmwqWXjr9wiguNYXxnqZTka5iF31mdQVs5V",
  "key17": "5S1ungPd5acXE3cB7bQLqZYmtEicNf6ov8nrFcBzEEe5uSteAtQQ6i9KwjL4KmifhHTdfSFTQRwpHWHKhLfE78i7",
  "key18": "34oBWbazJV7M1Z4XVkQAVLSotRNvcYbn21Ep43SKZwui4ryU9uY59z7LRXksPwzzZC6mqLystDE2ZDP1GxGWmVxa",
  "key19": "4bXpqaeYSm6kEUyQ3ehdx4dDSdUiQm2b5vKGpx6M86oEVckWKMCijcShkcdEjNGUsDe7oqQA6VUgLBpTxKoGRAUi",
  "key20": "4HeRBvirKsYLziPotbrg2vWr48WB67H6ev5iUj3cbYGtEQY4njwmFppkeDtzYc7GFrYkp4FuqrUJif2UHj18dbod",
  "key21": "4S4rm76DEWrNyfWejDJ2uiPTmh6CdURexTKRUVMHKyuF9L4abrWXApPaYB7dzVRXCiDou5bTWdMvEArCu2hn7pD9",
  "key22": "2cTU6CjiKS3Ze3zeqrCY1nE36a9uk9eizDoKxafiwPTR6AUskpAD593MH5kbXvL6wHFK4GbnmCVbKqRTJgcA12yR",
  "key23": "2rPA3V3qvBerJTk13ejXWzqr61huRBSKAJ7okqo48MYnSnRoCvbRGoKXB1znsQWviDZdadRVaii3UPUwcMeeqwo",
  "key24": "w6HLm15N2pZXqpdDevJighYTRJM6h1AkC4shvTvAp7S9UjfgubCS4Hj47m8M5djEknwgQFGkhqRi6WoYjAd52DN",
  "key25": "4rGTUyJWHAAvKWTZr6SxkXfhg5zEJbnWcKMj2wPrVXyxgEmU9sViwf9ZPPTcbWNswj24ovXwxmP5LCZD7JCzyG76"
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
