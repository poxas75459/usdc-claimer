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
    "5StawDLHk5NzjmRSeVW4QoUpzs9VSAZuuoHYcibkKViiiNinhPeN8XMKxVUbiRtXFpg29HWqVQZrnaYJJyJYhFQC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2jsNYDhntfHDAccwuVDwoWwPezj46mcEvECi3B1cdsVQFwDcQGmVeGkVwLQ7B8TdQnagjDUp6m76B2pYAmDENqay",
  "key1": "3zzf3XmSC2WW7WatoNCsCYxxhYKWH48QcZpGVmbaaWcigoD4kDrjn24Yb7DQfi6ceqZFfMyiFopmyaJ51bt6LkUm",
  "key2": "39YaTADeuvRAfEVcc5v9ACxsB6bz8bBLkG7M4cKLVADcdNw9neBxpYqDT8kbLGzAzzpYe8CUTrL3qjguF55xrSAe",
  "key3": "21tJcfZ5yedeeqiP7p4chZ5tefkEZP1EDNZSzL38JT3WtS8KP7xpK2G4Dvp9ZEpFgUjpbiGyCpiuUTAioycyAXmZ",
  "key4": "2J1hrofsB4py4DQYFQj91RqZrdebo9LQm2sgj36E8jdPTX6R8DAyikjvXuU3rQXjDad5gRLVmKNXBTP2KpnVxZY3",
  "key5": "H5iKChdxz6tG1rqX81khP7oRAE3bNMMHX7hG8J1zumW8rSAHRyHGFPGTou3xUrtPkf4FjkcPsPjwS1QsqnGTiKW",
  "key6": "YPe5byJ9ZD2vYsooApnfVCPDHnqHV4bEvV2AKmFL8Q1WPVWesWG58STYmm3xp2fT9EkE2ukskGNBkJ8CB3e7NDV",
  "key7": "3XzRY7FoWtxJvfD9ugJYemCATnwF1N5CX7TLGnZi4hHXcVmynLQAxF3RT3Y2pRgd13UBw7MwpCBcaqmJSw8ZeKps",
  "key8": "5pDh2CNvGEGNbxfHwXVJTh2eTL1DF1LaX55QV7KUF1Ckj8SafSqnYRPq3rCRKCFojvAJ8bNa8NgvNtz3Z9LHZzcP",
  "key9": "49WwKux1uJNMtjDnAqYg43KwxwLVyusYBnELmzvYPA8HcYrAEdTdpLJBLRNrjWxj82gGF4hWj742XTyauoARsD2H",
  "key10": "4K28G75jMSns6dHYYjEBAM54LTzuNNVR8Tyq4bGqMjAiyXQ5cyc4z1uVLf7Pavk6EKCe2jCfcaJbFLzTntHhuDPa",
  "key11": "3kZBGbxWFji2VvnKeJEmJfUHVPGtz65rUUesrBz1m4SUYbZygYyJV6ESZUHqGPfTpDKN7g3BxmaiJe6AS6Fvq3p",
  "key12": "kvdprtHoacobfDTn6uHWqFT2keBrX3fpN49gApEH1E1dXntMGEmnQfB23VmNsqu2YKfgtLmX8718kGBXERHPgKk",
  "key13": "53KsrfeKb7R2YsFHPkampnGmnLgSD8DqKu7rwaBuuaoeoFDcfXTjoqwNmWQQn5trC6jZYGwhwMXD8U2AgTNTifZA",
  "key14": "RFxcgRWdSxN1p2fsCfoDpz2jFwqxAB3VbjeaTqzmA5yyAmHvrdxWaQKiqo5m6Lm4rsuXdAJZZMexuL8EQjGfLXi",
  "key15": "5pCvuuih8HzuojPu67ytiA2ZGD1wrNAhAWnSWSXSSCQKeLQiwyKb4fNH7srGkCuV7cnePDh8TQV8GdEx9NykpG7G",
  "key16": "56CMvg9sDMon92g2ezaHXKYrR2z5pRhYHujv2a8Ro2naZDcfopBuZriUiQ5sFH9wUnzambuRGmkjsAbz23ZJi7q9",
  "key17": "mnAcAYw8yB3irWvMdWv6PoxFJmHbs5xNgHryDci8zBNJuY49GivDqhRg3o3Rfsja6s4QUbzKquNaijme1g3nHfm",
  "key18": "2aeaSKD49MJAg99zjCcCEvkK1F6qi5iUkAAmEdPoc3cBnrbzZhoJbTiTWiYfpJgQimTNx29UhrdrMLTBkSZ68hBC",
  "key19": "2e21J8QdKjxagZuu5swLmQALJGkQzRXWnADam77Zu6whop1oNVfUSWdovQ2E85GrB2G9dQq3e3P5x29S4u6wCVdu",
  "key20": "3SXSfkuEZi471TvUXgxr31p5r3i8uEqHfha65A12kRHJaJPQ9dqP1ibd6boHJYZVvgTCL3Ab65MMAQ2eTiCKUV7o",
  "key21": "3B4cZrevJWSWnbMPcF3ri6kRnPzZjV4Wej6fp5ebLwqDoJTv7KdzH51w4RRn8j3bNr9jJLx3dgc5MvgaR7dqum2Y",
  "key22": "4yDVWfFnGLy8zG2Mzy5g8Jpq5jw4YmUj6hCwfx1KwajqvGeDGN6jr8iWvjzGmrMQT7BGPWBKd4va9xvQ6deUzqsf",
  "key23": "26izzSNKfbsomfYC8zrfwWwsSUpk3SCT3C7tuodBBu9gtURDZ739hA8ykiUzU4BbVnNDZnZfmsWj3R2Z7rM3v9wP",
  "key24": "3rZ4UXNEP7uxf5wdb7u8gbxN1Z2icUfzpPyEhu2nidZfRawFgJSQsjEovBw9QxwX33e8qyDJ5WSeARYVskaoTTcF",
  "key25": "3tDZmBR53162rcTmfNdSNrUw1xvE3aSkXAgSa6CRLYcLGTAzDfoXKL7Ubsz4SC72nhaSHpaREFKPbGgFb9KjV7YX",
  "key26": "3UqtPFAjbB6Ko5FXyukXGHeRALgimLfKp9m3GfEoaoi6R94ook6X2KjwZ15cUsaVKJYH3u85iSMqJj1TWTMaUySo",
  "key27": "3eZTUR2TQZz8DXKQveXuhnAtUGVDxm6GWJo7bfFikeKfZpMC6dqi31fVudR3jN2KyTpvL2dNtdPonW6oBjY4BkLh",
  "key28": "5mY2n4sjxx9QzurfV23VFAcNsC1amS11ZPnZXEi1jNAGNtA9AzD5xKgRLEGoscNvqz5gM8MZLb5gzwQr9ZCSvLBB",
  "key29": "4LLCyC7eD6Nyb1nY8vPVbSubrh33NPw5KeS6xTcjkFU38D73BSo7mZYYtg2mLjuoMcvsZFwJCAvbhhv8eppaXjfp",
  "key30": "5syUt3SaCKbWxuGCDJm7zU25JzMypsrDX1BHV2qjL8Qaw6okst4idtB7RN3ABsJ2Z4trwEGeG5UTPmiCckYURvGE",
  "key31": "2AhLWEeWZwsAYv4EErEK5iWKtSBKkhAcncMJm4ys5iVA3tSKVCcFv9GCv52GQk2V9scKy5LRAB8GG1whHTZSBeXW",
  "key32": "2RG4GR3TS7yh8fpKuGRBR3YsG5ERBvFUdbBdZUi8aSRQ9MaTRhiqB9YJ8bK9FzTFsWh6xwHQpfSsSrBZF2H1NCVr"
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
