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
    "3oJQVLFS6GtzQXsBr3x5Xr5ZtuMQeUsJUcWiVnkfcVF2NFXy8ZhujAawHTAyFFCqH7F1SWgAyBZBGNDw4KajLTMf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "K3KrJEiqisnpgR1ka9sWHBPCG4eLDSiwbenZWuwKcBdgrnKmpiYNBxsErxzVfT1uHBK7FbwypaLVLvx8jwzJPZt",
  "key1": "2bkdJBE1F1mmfwyQCzFEwjD1aMV1LpdSG29zZ1WWhRodJishVFARhbM1Qa2523vrGdEjak8N5TraNbVpHAZWagRN",
  "key2": "4uAPNbU2ZBuebuLUkzVPnUSqA8f5GzAecoyCu26WduCaqhZGjdo3UpCokuSX41qfwfwPicAm5mTrmHBpnd1h9axV",
  "key3": "3CsGA1qtAKomLn2Xrg57vib95RKtAdgtowRJiitBos8oi2KiAkuUwNAEQbdBLTQ4x6H32tMA8JfUc1uZVxBJZsfK",
  "key4": "4YgErSDgK3TWC7XANCfK44UzDhEHTQEnvA4jGgNwHFofMFqy2fTccpToRtSPz5Bp3KbdzQqtd7yxd39VX7UA33tH",
  "key5": "K1fhXY4G7hkWM3mewTLGy2CNTFHERSp6oSwhDQhPTPB3u8vrhCsreCw5fWE8WnGBULwBvYXeK3AGsQAXKQRpK9N",
  "key6": "fMYD2hnc3Xfk6SQdtySrNvxnexjE35rfRhuoGamSfDFqAJdJQcat3SLWipGLRKdjGxhFnQTfYkMTXSiNTX6a8sQ",
  "key7": "5gD5N6Rxjy73jMPHA1e99ZSwoFfRsRhcQed1GHtFkdqGW8uFSFzcJRasw2edj9KaU42GaT2MwTE4Y3kFHz9nfiZ9",
  "key8": "58jeixbGcJfJcLnB4i2TibXG1aodrmWMqCMf9FtStF5YcP1hZE2BNwZkH6Uba2bfJraeTnY8zRBEMykoA1ME9wFk",
  "key9": "2Gz5TpP83FLge2MpfYARmVd6Ap7i7Tcit8RS7t7xCfbXNbGsG2jWUjFumsD2xVZaxuysHh85kRP8pvuppFUgGPty",
  "key10": "r8XuidHatppEhiStuNZJLEMWrBbqrhyfK4QXvs6rbDTGwBd2WkhA6x39RKY1obeZe2vg9RDm6K6bkd87qNSJEoj",
  "key11": "3aeFGNRZ7BZwBqAgMdKxuwzSWovMigeCR3xy99zufue2PBhV7cc21P96s7Gpgo1LzizFMqpLaxx9RGQcXt5xeCEp",
  "key12": "2CeD6A7dPd4aE3ycsE6Bbodjou64hMLAjbJTkjoGWez1zjaW2GwfWs911d27GRvwQh1APuixzcFB4BQjmDVfujgk",
  "key13": "sDUubWih1nBzFmU3Jv9v1d5gE8sCNCcPNBSUtnsm8dEyjhWZS6Zbte4rNR64MvTwbCQmJH18QDFu2ovcgZLLTas",
  "key14": "BAJ4F66FHT9s8DTqRxg4GCRDSqzywW7uVoUEthZ4zDA9wCQdexDBWHSkpeZ681zSzjLoUe4CLfKWMApSkvcudTg",
  "key15": "2wNGD8HJ7ZJuorrKFeVAyd27SMKLm8h4zF3xmbpqAg62dVyTMPMw6mw3PVQpQj7LJmaReKDXPC7QymKR6R8NtbFN",
  "key16": "3TATGAmLKz8GqmSJ9iaXFHZ4MpbbW7DT1ecWkBVdtpDrp7jF73Q21mqKQDjcsFaFvKyFjWWZYFTFxNVQY54pd1UB",
  "key17": "bmtktDWzMhgB9UDHk9N3qeWvnSjTHspfk38KZE3zLb8S5Aj7BKoNkech993vZPNYpFV3yUV2uivCSuzygr3bvdv",
  "key18": "4nf4iCkAavh9GyVbMb33psMQsjRr84KvQXqqVUc5w2RFUGcxtBGgMyKQymHmdUPhscXdr4FtjjidKZCTWicVqdHe",
  "key19": "2SvHgPVXkfU8wG2Uix41mNauadsJfWHNoPufNrPgc47up5yK61US3YryScKUYBCXARgijaDp64gyPw5BXKydD8F5",
  "key20": "4vy43gbxrDbxiQAqcQb7WUAExGDiyaVLN9HfWEzwqvgMU1wTGFa65uhaPD9CwqWaPDJhYfVtMM52f4Ti1AnEW8dQ",
  "key21": "2swdqHEbDkpGBLbSVtmKLKGGDnPbudaDgidMYr7ewcYomrN93XXQ6mLEw9fbJHTqdUJSG4TXGVPWiAWeG7e5v5UL",
  "key22": "3DwEMqCCF6kEo9y5TxyLxPN6pg8qchvWM3bXRK99QFB6Emx6NNZwmkKzLKJFW5MMfXqvZ7szSh1CcAmNrUhWQ6Rc",
  "key23": "2zNwBe7ubxRQ6oQcyPe6xboFDLfUgtuwNkbFgvzK8EFS3y3zCEMNswjqssuK7Kk6Y8CVJVMbDg5JhpfTakuEmAXW",
  "key24": "42TbEGFZiNs7mJQ1dA2UXaZDei8DEL6QJ4DV4LhQmKfZdESmmZCf4t3mw7JVdqvs8HJkcy3dUbwercisK5PNGYaE",
  "key25": "3bjwiCxQtMDVNkGnYynZK46EDYfnmys4Wd54Lowded1fcitGmP9jE4Do81iWUxieLmUNr6uobhMePgEF7j58GsMV",
  "key26": "2ntcWSFpTnQxZAQ9k8Y1At73mqyadtKqmVuDFubiVMNhLvxdMk7Wwn1qtGRqBJU8L5bRoXCjn6cwwfGXDh2yhcqX",
  "key27": "5xuFBzahdgGxXjAfqMQHr7wmdMUdbaYTmtQLAukiR2RQxwczKvXFfrhGNjUoM52wgEf11aMxgVDNBxeygkHGumdj",
  "key28": "3W76npGKWR7ThiJTGFX1N3oguetXxCGUUzVyf3PyKoeiommnkrHE9GuF4XTMnLoMqRArzZ4U4FLWdZVxAMHCJmTb",
  "key29": "36vKFh4wyrdASo73vZpXvGyp2E2NxVg99YFGoymEgfmSntBEdJ55UEwv6g15pugJHWhXA3AAt9WK7tZjnkkLx44a"
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
