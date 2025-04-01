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
    "4uuZer1uPjEx8wuGjXoraE26pd3zQMuUweaq1UbGjM6n7vgFheBy6ZYC22CsSd63khUgVErMdDk49QXvfUSeM4Eu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4wA2kcUuJvV9XYYT4wpTgW2arohGyLxCT7z4KfWGG5zqZMK5EkRjbaQ7jNvjxg3gXBjMAvccXouEEXe5ePQjVufy",
  "key1": "5oAt2z5TaHq9bBsj1trpvYP1147bAN6q48GrnMmDCmE7rpTwcxJdiG49v1vHHHGgfucHVdJ68UH5cHRdWrCxUjUU",
  "key2": "33ocR8qbGXsbmGd5RS7UJiNmK99a9hbnYZpEsm42m6ky6YSpRivEu8RkeNnRZuo2sPN2qDJaRuwmAav2WtVfVbbr",
  "key3": "ZM4W7Frc2TeGgZKAEqzcsN6Re8AwcRxwZS8pCRFSbrbmD2TEwKHN4ix7iYEzB4ucXFkv1bVAA8UVeP6aJFjDthS",
  "key4": "2MH4xqPDA8HcKmdBqdMJz3MstehAuVj7xPpZKMahyUQVBvG8Ljh5zRWTtnBWfNLk2fSz9vMNxZ3zmmM2PYbv2s69",
  "key5": "614AfaVFJm8Qy8DBg7CX1DscYjHiKMaRwbrxg29a9BhyW5iDDLamGUV2Bd71koQQyTeT22X7yqaztALfwkPAQVPk",
  "key6": "3MdB25apPpabJRaUUroFZXkUFiQ5c4b8dByTcFKXJF43MNNqcBnQNhKqTR1uk7kGTVvACCBu1ppJVhiEX8yW4ZdN",
  "key7": "2oEq45dPuGF14qBCtZSkA1tYW1TEBmvRDGCC3j97B9dJZd3S3NkUo9SVuWQoDesadJevQedzXKZznGcoPKEAzaiK",
  "key8": "bvQGYPKHsGib1s8spg6bTzwDVer38arS8QoR8xS4e4AxheLqz6C9L2HLqe8Qj9pkJQpdpPj8jGuD5a2ucMaHmLv",
  "key9": "rWe8SzdTJ7UxuBTNFgpEUHzQ6g9zT5obycqoxDDu8boNnneFGmxnDvAHUUJxQmxBkCv5PQGQUNZnjVqvpd8Z3Je",
  "key10": "64PwmfCMJ9mZTxWhh8gZF4LJnoJnY9PKPPuxn1uHEKdWF5GvyztN8GDGqbZhmaxEjVfypvgmmvsctpFams1FAs85",
  "key11": "iyiVpm7gQsoWsx1gUHY6HE7rWvg7a5G7va118zEcoFfhbi7sn7waRfkDjpW1t4poXwyHfkgB3H7FM7TKy7DG7sW",
  "key12": "4TRKjrtRrjaoxBg1WKws81TZu1XgoWWnJUUgQAnqphCKbCUmEfeYSXW279yGMfwa6cU3vTqEakjpJiMTAUWjVMFn",
  "key13": "49DPDySSRyHSuogThCtYpEvBecCwk7qrnPQp954zDEvemPb4c92ML9R6R1aPxLG7T7qvET75q9YooVA2Ti9UBhea",
  "key14": "Y1fNmAa9Y7wiJbxHqEqUPAB9zZjxbf3LH7XFyybpDn4STLusNsfdxeazRoYoMMmnnsun2kA1w4vzZtpYXVCAwVn",
  "key15": "42BQLnme6S45oebMkNpvfp68srxLQondSEyP43xusjCwcteZaM5Rcig1iBu3ecJvweoUqKoh1fhb8iv9ApzV5hxQ",
  "key16": "3EgRU7VPNVMUaAaDBsqGzNLwmWTVPBeQpjTf6XJ1VLtjoMi3Sf5WX75iEW1grchWgorASaJ8u4JvyVvvvABc6dXt",
  "key17": "4K7p4AyscKdthhPnbZJLNnnUUNCYi5fQnJVwxHAFSD9YWoeW7MDbYrR6mk1doNSc3AUATZjsoZd57MpTax6xaP5E",
  "key18": "52cZw44y1zZFBCcPKrqZhgrZa1ruAV8oAm38sHAbGk922rEZa8WE86iUSgmeetXeiwUGgPdN6Qngc6WrdJpwLRcG",
  "key19": "3jGjtnarvmtNvaz58h1mxrLUMQHWsVXe9r4kN4iQmj5E6xzarTsmnx5BMc89yw7DYfAaR9sL7WxQAMTDNrFsJMZW",
  "key20": "grUR8G25oxteyjWkVSsRKSuiFRxthX5F1SHQUoD2GhtPpaJ5j2HwSC1ef2WaRTqrrZLrZNnGG4G4oso8HdX89S2",
  "key21": "3K7ygue9qojaHHLKpZ6C4fHnTqpRjwjmxijC2Mf2NFy3wtpyYknANEaToo2padEFWgtTHjxPPGNspSW8PNNZE8U9",
  "key22": "3CSTBrApyqnR8CB9RuLPGg6KceK6UGaAVPTFNRFMko9EwKZvDzfz7brwhwGNK2b18W7bj3GVCx1hRBHguGfsP1rL",
  "key23": "2P3v5Eh8erXpCX4BSsuYFzareQmiWm7ajFD6GgZNrcUXju38D7yUP88dC4tab5dWmxkQNQWJaoJTY8szjpqwVVqG",
  "key24": "N2jCyBejv6V1pmVQ96KxJkrBmtTyXGT8ew2gvdWntF17L7KWFeUci4jpPEno1cX7vVK3CYqqGSJdgjjbXLdFqnb",
  "key25": "28qFGg4NBQk6rF1aUakUa83XKpD4fuVTMMddUPLssMFv37rtL61QU1aPX7iSbhT1haMHgKK8dhjMJs8JqgqN1BY1",
  "key26": "5F75tvoofBwqik6R75dUMhWFHryaHp64M9Z1wArTKnszaPtcKwSSZASnZA4VRB6n3cZWNsd4UoYVkcYrtFsEEPBC"
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
