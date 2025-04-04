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
    "2Qh5cMetQjLL5oKccWbAWJ9MXnkXyp4BzHnJTxgEkGJuN4iouizLv7tiiyMuu61agtLctTYUvDQ4cYhkZtZpaWbZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "TTFsFjkXQmpMy1g6uGuW9cqB5oGXWkErPuCEBMUuLwvqKeX37he9zYNT8FRWRPinAs7kg8yytz1QC75isbkjRbQ",
  "key1": "RGrJ6K2Q2qRWMZa2X73imbqBcRuuWCzRDDLbC1J2bW7xmdYe2hQ3JhoHsvNTdHgKv94hLXsVyaRi64kdPwrhhiM",
  "key2": "3aXCZzCB1XHewgZKJj4z3xXacTg89J9Nk4zyTJyoBymiExBkbZAg3UgAWf1Ptj2ikiBkV9jAzTJFTQdzVFuBoiYG",
  "key3": "3fJdDrLFrjz2fDHQjS6QijZvtpAGZdWrYoQ7KkVmENQK8rjsVS5MUwwn914prXm4tg6w3mCKWqj3Y9nBfngdakma",
  "key4": "2iWZDDPd9emZUvp5QVePyUohryQQDbh7Z111bdKzZdfLYN65Buuw37oHafaJ66Tk9b4b2VhQ6gnavvyJF44CJpKu",
  "key5": "3Ah6WJSRi2swJcYqCh6eoiUbE1A9KrudSD4WQUksbFkRgfbwL23WwSyoV23KZoehsWvdf3NoiJJJbt56xYXqdpfM",
  "key6": "4Xv1SkrsC1QYXdP1x2XTURZF4c4SgqMK54C434tHTSJA57H53xTn4iSPgLgYNwPuSXqUg6wxwotD4pWKDpXnbYi",
  "key7": "51P35Lz3dXMFutYFkUQ3hFTYvwUj2S8iBSo4ELZ648q8pJjBsRAJ7F8r9GeWw9X8u7PSBeCeoPnN22r8ubJAG4Xr",
  "key8": "5nsP81SidKsjfdKJsAUK5sMKR7Vv8eE38Y3XoumzLRe1Php8ZUMZXza21cQSMK4uGeC288wjUhShKfcqxukUwZcF",
  "key9": "62mqK9VA9TBHtp46Ku9KZwqgCAqZBZdgj1o1wjFPG8sTVomdLrPxFyzkGqQRoHidr4iuFxBz18imxjCKCfDxppqM",
  "key10": "57QMu5J67v2uLbdL93vAeP5Z8h93BFwk2wQFYy7upRAZoW8jisRYikCnRxgWgjP8Fai1qhTjab5KCUC5exX19Qzn",
  "key11": "4gXs4DDEkwGsHXAHDHzuRDHfU9ULtsCpssLaaD6EG1rQDyU9B39sDp5wb8XeW4cVWMJBfXPHYfV7J2bG3c9YeYFV",
  "key12": "djmNAWwFrdVXhRVG2g5PoPW6dYDrmWHej9YvGDuabHKPYERZB8MgTF1BD9H2nBRBcKZqDfBQSqBzsFqTopKfN6k",
  "key13": "668uqXeSZPXvD7UwzC6CXcYZqWUrdDY1EZ9judp7Q4HMkGsehZLEd8TccouYE9oxUoU3EYH5RPpbcEhtgBaZPBMm",
  "key14": "3hxp5n1B4gNUy7SCRfafe4see9FiCrtesKzsTAde1B7ZBHbZZjPYcypPQqmeu47oUbmTStyBDdPMTLR6KtMtwCeu",
  "key15": "4dheR5rW36Eyw8QAzNxkGf1CSCozwDXNrGXjAf2zLfTfk7yo1orfeFsed7UHyNgbeDBkuVxBF5F4wX3S7esrX5Ax",
  "key16": "4YDF3TZjhiyhJ3FPPVk9sj9EmPSZBzsWjiznkTdcb7RVq4nsuiA4y6eXvXWAAeT2rM2E6NitNWj8iaqFvu1obxor",
  "key17": "grGzh96rHwdA9crR3VRj9tJa7vg8qADJobFigcggseiyhkGMMLuvNqHC4vuURaakmyRWmuFSqPe9qQENQbRMsgy",
  "key18": "5EUynQs7w9kdzA5UJuzn8G9dvgn7JRvqfGZ1h6GKRubBgZtBmdLvdX9tZTRtmG392rWgzQqrGKyP6FWoYxXJXqxi",
  "key19": "3ZTCu6xEPrQJ5utWK9SLWTqwvbKYwHH8NfnFPaaG6GqPwQiZGsNT9fnURQQicoYxYD1XZLapez9sfCekMf8LEm5v",
  "key20": "2p8ucBEnoaep8tEVhPs4o1VWxRax4cc2osKC13VQiCTCdEEPcuNK1fTbqexouXka4uvtT3trpmiiKzjhUG7pkYE7",
  "key21": "5E8UFQGxEzDxNo4tFxGe5cZVrm1JigcbUyihCfFmmkUJ8Mcj54uX7w5ftJN4k7zBsr3M6e1UY7L4Fiw5dfqM3j53",
  "key22": "5zjy7x2o31fpkzpbZNrBmGF41tdkRd4DWfibUVNq4PpYt6m6SK7E88Pg832Q1Rfu15M2Dsnc8Qax6kMD8nxtwpNn",
  "key23": "4VHP1dNqLb3k49N2j5GtUoxMyPszbufwTmd5UmBFNU9LKmSStCZMpqeZEAmxTCxc2e3ki7CfDEppVYAKDMmenLR4",
  "key24": "3yHN82CrbfLfmJGFBR6ZFC55q7KJ5yfa6bhwDBPYL5KSvMhtjAFprobaFweKUhnv1V7xFJkzTLWrwHpstbET9FMb",
  "key25": "5MSoDbPJ7BmjHDoHTSLMngCu9sFjaKG6RnE3fcUyeWrcmnrBpUovjT6RqJdcCCsjk9FtHKEn9gea8qHTirTTnLLG",
  "key26": "58AvLoaDAw5meDoKtAmvLfzyhXkmazzCdMticgCoMAhManxjb1Jx2V7uWwmgzbtV7aEXcDZVxuqHfPxhHTHEYQDa",
  "key27": "9MjE9GmMn14big16VTdKED9aL3MNg1dXesHw9mvCyuhPxvAeCdiTQCQemxf2qL6fwwu4b48X5x6ShdEBdgcFaTc",
  "key28": "4cZv8Dtc4NwPTjKTyjXg1kUnbHBX5uubbhf4Vgzs7UnXmuzBR3oFD3g3LBR6yEBSro3L4ysSxncq9vX6exb3jd8g",
  "key29": "3HtuqRnmWB4nFtqqXQY3NVnFtiiBhxcrDNTiBwGvUUsJJvhbkwcawupeux4BBs7UN1BsFcxFGFcacpCT1mmBua6c",
  "key30": "4ur7Gg5U3KSJTe9mspUhrhJoXfr99DDNLh9cP78Ugwv2kRXzqqat3CK8vKh8s3ebM1ZgdbbxifuE8ts3dNceCmv1",
  "key31": "3r2GJoVzwo4AjkJjyud91kZCtrEq7Th8GE8UpCcTtXZWcTivhBPqxonJSmHStktsRnbw7q5MmCSNuV6ckaW2z3E8",
  "key32": "2zgupihcbg5mRPEEnDMkNyHrN8JtbTp45xVWLnrj1wLUYcFCHmDCN7xhYQoCC3q8GqnkyJ6U8vyGxrBLrbddZtfy",
  "key33": "5vmACEpcs6i5BD1QR3PpSxCXHgxXLdMN2JzRYxDJzxU2n6nHKzkEvMVGgzuKzHXpAkfQ5BewDVTwPjrbPTYxUeRi",
  "key34": "36KbsZN43brMyTxyt3kriWeWbbFsfQcaq2DtkP8yruaqpXg8hR5uWj2wVRb7fD9rMiU7D3Dboo8VP7t3x3S4c6X6"
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
