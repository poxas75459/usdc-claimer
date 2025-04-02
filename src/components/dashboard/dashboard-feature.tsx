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
    "2PBBE1MiBLXrGDqqZGYdBLTi3G9q8HXynNt868FbuSapiz5giy3Ggg5AXR4DqRQJoYjw6KKDboQJVSgryKAioJxc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2wTR1wbYG8dZ8QKSunwE4TXYxp9W7hst9CKh3NYsJwdVZSdUcQYrsEmQ4Tt9srEt4kgpMVb9DKwWgSfp3itJxjtD",
  "key1": "XbVUKzTvEmteqnBTt2EtYSSWwoNtuUfTFzNdpiPaSzVFLk5xsY1Z2VbX2fhUk1rmh9LwWYcMqAq7zi3dNg47mq1",
  "key2": "4q7SiQURuYYa7GZ4Jn2E96GEt71XTEZyUZRv1XkH6Nirn5ioxQMwXSu5eXyqpgmygwAz2mjQzoAT8YL2nXtTDSV7",
  "key3": "2D8tFBENL5WoPq4BfmfUydHWi7BS3E642fFjYsmXwiZQ441fsxXGZR7uvGUN9TbbVmvjNoTJkCbNxoaHTypGmzmp",
  "key4": "3QDcrWthpHc5F88vC5Uc8quQjpJ2FXPD39NASCMsNtbkRCjJQGNrrw6C735q51MYMFdWV7zaRZqhLLRxSck542xk",
  "key5": "2JAJ1W2ReXT85ju69fgrEPGnYWNMcPQHnoxu6ydPqRBgv1AyWoFFDeFkAbVcnu6pjT5BQEca3R5Nyc9YMNV9KYgP",
  "key6": "54ZkM3eUdt6B4AhxxXcJX8TfuXCZi3q6o17itXmXept2Ns3D1CJ58g6bgSWC1tjR9hUNFycRCzz112u8zFbHFPch",
  "key7": "dY5BQeM1Kduwa8ppHTp8wUVcoeVR2vd9SVh7aN6AuWBW6qeonf4SvFXbEeLToxHjzYKgKpvZf7xwA1CCrnkrpsW",
  "key8": "2hkfQN1KiYZVpamc4SvuWxdnTVeKUCc16qYFFq13Xc7xJavnTTF2wkmWLBt9x2REEjmM6NN6aa1o9xpYaHM76QC2",
  "key9": "4HkBM4tjYJoa73GoivC2ZY6oyFCg8FyF9WAAayy8ULnjgWnBULR4Lw7DT2xmxVD5ySiGUbYRfdMpZ4VErJB6iPDU",
  "key10": "5BfcS5w7pfcSeWKrRBvM74QWLA1vtFZy76mdQsttYcJnMwifp5SCq3vYTHe1kX8jQc1P5khwdhBu34WT5w3jM3wu",
  "key11": "a8xhyAquoMUnxBCzhsPebCqKXh6fmkGiHtfVaWPj5ZVsJepLCdzCxdNYuFAa2ZNZBtJfgC9KsPmUcDArm1AoJvA",
  "key12": "5BD9ac9sivosnwf5h2BqXVQ3PfufEoiZ52H85rz5iFD8cjNJhf9p5FX2W3LzLCSByy1fJdViuxEjCaahsgJDUxeG",
  "key13": "55fj49QFhKacpckhMLMmNubKpBPEjZFzQMcConzhykJqy5qUe8QanoA4nnt8Eq4uZsHuAfNewg3MRp7Q6meuXZPC",
  "key14": "4V3QskuGAGVrBHaVjZM75jrnQwPPeYn7GRoCwgr8nDDCAfpw85zuRsVQiVK8xeJmBCToTqifxxWvRmQfto1zJPmv",
  "key15": "2PUvNpVrjn6C9zjTqo7BVv8wfwrCEGiNjphothm8h6GMcxpFmDv2HmLAMnYbSr9H4JeZEYmVNFhgDehKxybcELbf",
  "key16": "4oxNbnRt2YtnkjLW7kkgQTPjqZaH4m2fevVw1At8cEcG8HQafWvLu3ZgHKeZAFzu8LLPxiCyLCaVabgupnXSDHpK",
  "key17": "39jsjXxxSYPZxWDXRwknov8EFk5pjbUF8qAR2Z1oKXgmHVcSzRAMwoaQkrepisrvFN6cH3q9x4E4qw8HqdKL16hU",
  "key18": "bEu1t5fk2czvtfmATc8fDiyt8o6qUExWZBZakCiHQkmKAoHTWz27Ejbj6wdcRJfZs35PkV8KqzYSz8PemnPRzx3",
  "key19": "23jpKUH2vJVxgyhNjxATf3X1dfcVcUCTy1NotcV38aCdynjKQpwroMvUxrmrWGEUeBgWct2rqy96697Qf8roCF4p",
  "key20": "5x2zmPWR3Se1uvrycEiqgrnmnXSa9Fx8hiHsqe91AS19khSp2sp2K8h1FJYcKZv8cAZFWAz6CTWd3UKa6Gh5J4b2",
  "key21": "5kmoer75S7RoDeNoV5d8BHCY8Qwxyw8pjXQvecsdqp5J9LVFoVMSj31RDRznNf2A8wtJZoc3eWPvd5bEqEVW4MjJ",
  "key22": "2xaKdhnooLs3aX9miTsnS58rUACitdUUkyix8jadQhxuyRDgpEGLBbNP5eXaTuTQuF3Z1hCu3kdVF4ikoGvPhh9V",
  "key23": "YYzatkpcGkdQGJbnCvZJLGagoeE5kvi8m5V7FeB1dmSUeTA68BgpFRBmhpYDxaSBiJ2tLas1V95eEU7X8yhkp2c",
  "key24": "651e2ByL5gM5Tc9r3j7aahCdri1ZNbXzaAhCD8rNGqVdXjkuMMga8WCckeWiggnxTkqVgaG5LgmqkXtM3Sk4Tz9x",
  "key25": "4uRv275LbH2NxRstHsRzt5Yw2cA58PApRRLm3UDx422L3MrZDVFKDogrcXGmb1DrpWwbtdQaqqStG5bCX6rYo3c7",
  "key26": "4XLARxCdNgcQETm3ALU4gEHcL34C17H7AyY3UApDHkHcxRzTBJYrubuzfiDPDa9VsscSm9oxGo9gHbu6vhRXxhnT",
  "key27": "2uKn6jVCXJAUCV5gRKBKg3wJYvyLEEm8Jt5exPWTfxb2YXnaoTBiWWNjgnbFfrtrZwZfBpjLVRf6K1qgv5CURDda",
  "key28": "3wQsU3F2CD77gAu8H9K17VYMi3REWNL5FXB9o4Qkx2JfP3G8DAbqrFAgKghbPtxoTXWd98ZZJgRY9RQtUgYR2r5E",
  "key29": "45GUxppxTUUBTKGNwbCWcNJeRbfG1jsrLMrFpZcDYTihmbaZqCjGc6NJwfzTvcxZpRwT3GE1T1UnmtaxEazCMm9g",
  "key30": "2UZYVEnnEEdqMnt2N4FH3QTTeJ6MfoW6iN1EFsojAi1rXSHpWNWssrSk4UV3FbxQFPyhok6VqNYftZh88V9FTgcT",
  "key31": "mzTzKsigFQiNiqjGpWq7HR3mFuu4nCrwvqRhDxZqxsRhrYBVnJGRzQzPaZTe1DbJ91Fx3GiwToQ7LUv7K7Vf2hj",
  "key32": "LYfkfkVwu1ZgpgetFqxiNY1bCrLvUP5QtduFP9F6X3Go4WxtVc2ByeFZ8hzrPgSaoS8BqUgRbfzcFmrDeA8gRib",
  "key33": "4HcGdcU6Qk56C65Kw6qVh82EitzuBietb3e6YpKJSkxyxtqKGLjCL9iY6x1qTf5w3vPATB4sgJBL7vDPBcHFQnTS",
  "key34": "25vHUj1TFDwUqgrMXzSmzVe5vaXEViM2R95CBykqQprrokzULHXjwWB5YpXhNizrpQCAKsS2z1zTQcTTciWFcR4P",
  "key35": "sLDZAy7ig1GzT2eFWN7W4u6kbFHKokP27pDek8S8AA6jJHdq5tCj7mfNjPV41cy1uBL7ePsnv4PP4kMGgWYUask",
  "key36": "2M3qmC4Se5s9oiQVgfygMQny1VCuEzks6PphBgYsiaG1kbQ9dEDwVWQ4X2kHXrRHY3bHqvFja9gQbBu2hHvtZZwp",
  "key37": "3SV5TUQq7dQAjfTTmgxUBnts5KYpUHoS3JyBf6QodXs8YgPR3KwHYJbHiESgKAHg9iNoBQg4sC2HoWPcYVb5maNi",
  "key38": "27Q5LvXZHqagzHz1e3qARW9FKaGEzB9edhnPdjLsHPA6KbGdb3idHhXYtSKBLViFUjLgX8ovuSqjbkhFRv8Ap1nU",
  "key39": "65iNaro3BKXgMrVEreGSdFYhFb9WFYJqhkb9PZHnMbXE4L73qivkFU4YoEhRJy2X9BX5c5zo27QGsyit7QZGyBoZ"
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
