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
    "51NqzAkWMfig6mehXf8fqG3288akLq9g3vSTXjq6pvSejeDcHpoGhSxBxaV2S4ub1bgBwenKo2r3zBRBPnQ3ztii"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "kzJQoakvD6VJwKCDCcmLS4mFh9CwFjksiqJWehjuqpDFeWz8rGfjVBvbxtxyns8q3B2T1X88N6ht5PcZpxoWNcz",
  "key1": "2PaWKBVvK1TUgcG7MW4rdE7qdQLUoZLNfuH6FJ1hVSe4zSViedWNgA9zNbwTUHnhMTZxGtqyeaauy4BVM4v4AJe8",
  "key2": "2cWZ1CnHLNb8jbbtqwtZvYu1hxExsBz8rewriF26vZJvubJQ9fyx17yGsdNrmEQiSd4b1rUHr6xmMZ37AV7jevsR",
  "key3": "292L8mRahHn5E26aTjxWmQBDJoDePiKwipgS3v5KgRafKJQHfbFdj2XrSUWny5edRqw1uKAACR4JJKtT1GLBYfHZ",
  "key4": "5SsnSy1N7j1mnbGj3hwdUecv2SKW5GSgYngEZ1MB4vbmWQC9TQGJKK5JbxAYYuaJutrj1DWXqJg9uvnJPujxvNGF",
  "key5": "677n9xdQkpCrKs5Pz3Dcs7XNi4LGtrtqPov8Xi1bXSF3mGEgrcvjkfVG8XrvsEt84XyyKxBdYmaDRHZVM1BFm7JV",
  "key6": "3R8Q3uGXe8HBUEGwbmtgJq5aRGAkmABzAd6dggNbnqxiJhcrygfBzcaoSh65UZKnt3d3wJARzswSnxZqZ5EJWpos",
  "key7": "5QBj5k3gfHzgo79bKHz2YmrXVrzogkg8hEeXXH7PaXGMThCw3DjP3TZvyQsTXBEN2pPMwzXY4otMqeZWbVo4RFdP",
  "key8": "2rBfwL8pms5NZ2YFsSE1WuhJ2GNQSaabdu2Bpkfi4mrRmx3oMKzGXpwGmNtYeCKXELkHTMdqsK955qBkRPLR5kBm",
  "key9": "5RAWjoC45kxAMaYXwEdSmy4wY4w4y4NoGhWibz6xY1N2Kyo427yZ6D5GrmbsKwFWGXBzbwWg2JQjF6dJyoHQJ5mx",
  "key10": "5UYAHUR2nXpnLU9Gusp3UC6Fz6CB76wE8fHPaoxWkpg217346CWJ3KCkXsbmrobqHV9p7q32LvZLMFvedXpmEWgS",
  "key11": "4c8V8otX3kS2t5eXw2acacy6UoNQw2rDpKf149twiX5qmQ6n7ddcfo9ADpw1TFeZqgB4tBsFq9jakHFyBa3VjEmL",
  "key12": "3fZF1DfxtkVVZMqCSynTYZbLShAyenQXkLjxnQBVS6Ew4bAZgU9wpvj9s75o1yua2hZNuHERr2LLqcR4WppgP6Fj",
  "key13": "2zVRie2J9Fw3pR8ABirgow2n5CP6uF5iuXsz4uzy9YN9G5LsNFwxKrQfXpK7HBZ5xD9U5JPxeYQTu5dSnygzQmN1",
  "key14": "53npWdoMXANwyFPA8tpyXeMgdKTku7z3cyT64R9s1jDnw9eM5DdhSLWxC2NRtgWzX5i5NbZqzigBdzbs2C937QU3",
  "key15": "5YBb7H6kVWYemRC3rKX8uX2C2kfsJ6UaPSV9ibEu2X3hhUYAVmgLMooNmjSmzDWbGe169YWHQ4tGEqyXpNLGFTvX",
  "key16": "2YJbGK5wo9vJQawvbFLK3HZQ4T3D1wrDhgRZPseCEvPwU6Nth97reCPvNzJAhvrBMxpStEkRKKFSV26WTa9nBGvc",
  "key17": "1hbZY5hPXLKqH1eAcjcPNgvnFKY3DQDGDMgw1NroS9T5bQxoeiBUDUPh24YPjfXpHweKFJfxfi86EdEg5fCoxs6",
  "key18": "5cvxATt1CndXEqCHdoHMnG4EcQj4aM1HeWijRDPxW83Mb2DtJc3eP4onAjuMaHDjeRbCkJAU8QfZ7GMkoPWzTSey",
  "key19": "jCtKBqEwAQfh41LoD4LbmyZKPDvKrVtHJy9pUCqeHe6x3LrxRTwLzG83dJBV2XPZZJyoYcqAxU5ozwQpZGRRLN6",
  "key20": "5tFPTkjhQqeHRiXAmbgLoRvwntdSdBh2K1y55TNQEDok5k57atbzkaKAwR4EpSd9e8JiH6CAdvTt5Kj9SQ718s6x",
  "key21": "5AM39Yf5jBp8DaQgA5s3ESKjLmVnPTDMW3NJ9xcStXEg5FXH9bziXSNayzck8LBmQUvvVC7PCEwhx2vPcRLGvsyH",
  "key22": "4Ak9UiSmzksaZePMSyNdExFsXQkW4arSiMicpMgqnj6VJXx6YbMzHGrhxm62DSC4FKrPC9Td5VtKuJp5uCyjGHSq",
  "key23": "5n4rCw8JMVLtrWbSMN2ih3zGk4UKFkZFxQodhAFid3MejSc4VP7h9FH3WZgHTimowfjxqLEXNC6ftTDUbwKpJ1NC",
  "key24": "khomEWLxLGuthVPnWG8fY4yPPsyQGr3nd4iYSnw83FnnGUUFQraRbttzkC3CAWc5GVTDWgPiPz9TPBTLWxQNBum",
  "key25": "5AjPVoy5XWVsyCj3RoQHzUaRDpurJSc4C3Q5CL47goKKqMRVncBUo1NZFnQRz1fg8h9pz2rzExxytsk48TJfeWt4",
  "key26": "65skrXpdUmnkrAjPecmjukp8nKhiSY3PPfb2yZJpRYnJS2zWGacshzgKWRdsQBeEHmNYjHi2aU25K7ZxvAQqyd4N",
  "key27": "J6bPPiTZDozh2r8jsotH2PD8wrXgeYK9EWN7s8rEfBqK2KFPRUaMh8pCX7k9cFy7VtmHyhKB8q8AmQ1MLFoDMTY",
  "key28": "3oWphd3ycgEvWhre2sc3ZRER3DusYhHJjRwc3LkLHeJhQZdYwuKRijYUnzDxxqWDbMFUrYweMzyGXpSZNtZjLyyy",
  "key29": "4yS6KftA7wJdCtQRD5zTpgpKYfw9QioaVAxPemDAKqz9xSVQf6xtm1VRjBosX2RLYHa32cybXLZFhBsmH5rKSi5E"
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
