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
    "3677EK7KPQBCDu7uoZBZuEcZsVXWs7QE7tD8cfd7o2vpjt7wncUcmGMrn5wcp5VYNuLKK1g9cmTDKDofpof2c1UW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5aRjsnreNzY7f24oBpecMSefSJWLHYEQ7p72cwFMkurQuWX5vD1dGnzniuTeFe1zAXGYMahxunet91vF7jVnD2oj",
  "key1": "3KZQXS3kjXuuMHeziyi5wQmLbMQ299CNVbAABEV1zFsmb2HFXvTHPJmN9TJyKuRXDCqGB7ckkoPAiPAVDXG93Kdh",
  "key2": "3nWhS1H1hAd2Ut3eLU1Mgu2WjnrcC7r7UqPoUMsqzsVVP7gYkknJ3QCEGwFPwz5tRnnNK7dzZiUu7QD5Y2bTugvX",
  "key3": "4xjJumb6YiDujDm3cwWiJiUGJJj43jnJbBMzqF3PhEp5DvqNq4H877ZdjvoGFRMma4e4LrsV5VnTiXXbCtC65dcs",
  "key4": "5mxnmymFo7y1KyLXdJZ5h81eq1YUuoCxzLBGCH4rRQi4CZnMLkfYxfX3ZVtz6wCAxnJ7ZFwDhXvi8aN2zKJZmNgh",
  "key5": "2ctynKqF7ym9kTFWdu4R5a12RdPMN3btuvatwKvUYuttFocjN4rEB93z8KQwAxcXJaTS5ryHzVP2QV832Vuk3dTp",
  "key6": "zmh3LDUXYExxWxXeJE2LiT9CeAcnfMnkLZknGrBv4Tjt2TJU33XPC8bQKNKRWX46YgSximjufXqnpnKchvYPKZB",
  "key7": "3tmkXhao3F4J1m3QHQn28CGLA9RLsbtYjXtrdGqBEh6S3gm1cwzegH5bRN9759VKrcqvRkSLUufCZ9AiQpZdcXek",
  "key8": "fVb3ZYzKX9ZuZa9cwfPZqBsDwNpX3hD9qVbQ6xrYhSzAVW2pNN6aAPYe6UkT4iFgmegcojvYvSKBSKz6DuhNFbP",
  "key9": "3hokbkS7fwGNMixQKgNC7qcUnxZo4x1VA5MeomUh2yKc93oNv9rKNoHCzEpxpfceogazn2J2TqLZN6gaPAT9JZno",
  "key10": "4eD6xRCnyXHQyxZUZch1cDdeY7B2UTXRuJbsjDdEBQ78LdWGekPPivdRStg9ttEvF4ku6iyPUKfqbaQMAnv7pBD3",
  "key11": "2VdJHMsASE8wD12ZpY9PbjWs87vgDVsky1Fh7eE8GcHhmJFVu2YXFngQGTsHt1becBahrw8JWm2xRHgDbYiUcfiD",
  "key12": "38JRHZDWgX4gRGUvdMpfAwA5g9VEjh4FCw3HWY5N6Q3dwH4ZdfZczsdH5QjBbiyzVagwkvJEXs9n1PnEJJfyrxEN",
  "key13": "gfudChijjetYqV9PPRt8mQrWmhfCSSZqKhBSx3XPL3wNrqEwQ3TfVVnF9zzp9GcpBcboAwipw8me4U7Zes1uXKa",
  "key14": "2S3AHJZL76J2sAG3zCCLVozzauhoZqNMX2xvu9cmgkBVzYk4AyUHEVxUA1vux47VQYammwc6dEkUAACUX9bi5QeN",
  "key15": "2kv5kxAEuE3NdSu3XixaxEWBeydBr7koCfKuLKn4vXsr5sbBBrXe3XFRPLjnYctKzHCn9aLUHyW1jC3bRaQ6SLiR",
  "key16": "1ZCKJwV1BovpPLvZUwfUxJkwwFfWVvbsNJV1hSaWxgN2L6ffQt5VXNLFLhmXgc1Yj1HVMSigxL1MdMBGMiDNyaA",
  "key17": "5g26BqENrKcaa9t8NT48KmhpnvYV9CKh3Gi6GrCMa7JBq3ZzctfSHGXziS3zPCH8FqEUaFiqg9WRpdFBQGDSWm4D",
  "key18": "58ich2cuPaX7MJmtgjEAbPTJ7JDcLaF63wKdWY1UxxBREyxzoeGM6x9m443uSPS1qWwxofio7dm6HjufLTWUzqUP",
  "key19": "34C3rGqz2px1RMbCjtf9ooR4tqmRSr9LFZCgDvazzeZtCMPvZjwuCDCJHu8FZUdUUSwfVhAb59AYzkCkeLFeNHxt",
  "key20": "2XabAD8cEoe5LWdSw9ABA52mPzmPUA1rxryZvkz4pkBqXoVDDUhuh6zRoUUfRpxa6n85dBHYR9p2fftBPCyQBJEW",
  "key21": "3TL6J5FC7jZ5d1AKMjechQxBCoHccTAA5aPoekpuTyZMVbppTjarqwfXtCKF6eFYLRkap6nxmqusqXMD9ZVpY7PD",
  "key22": "4CBDmcD7BEEvQ3z2NXsZERc3LNZXcrdSSeFsbzpdwBTVjQAeM6rWHMfmkZzUJDa3iPV2Uo78hCoLp2CpEN5y2H4Y",
  "key23": "3TPDYG64NKDKnwq3tBxf8ffiv4ezpfheYwBSMP4VQQE27NeHEWm76CPosS9fxUUDFGvEHM4pRTiZJif3N86CdWKC",
  "key24": "4uQLDQ2cBBVqRsJ5quy9fcARtYaz3eFGHkm3vaGrdTMf3nL8z5AAKCgNgZ76ZHqzvKNC4bxUF1DvbaFnnjRhrJZy",
  "key25": "5cU98LJFyESSFd4xfpbzv5DrFo9qLBMCQU3qQLG2qyjCqN2o2E4KZ6ZiJi2jUPFzADhMNe1AGjYPKFF3pT5BANK7",
  "key26": "3jixp5aG9HWKtBpcoAWTSRza55KM4jaKArniHrR5XwPuGPPxxAmV9t8xJ5qthAerZY9pbpxiAA1bfqBQy497CgF3",
  "key27": "483ixYvekEnzeKYioJXd2zjFx9cv8a4hquUPdQsxHGiKedADztwoCPVrMGsEevmgiiQ93a6eAxZEJVm4wvwJqunU",
  "key28": "3HZ9HasTRf9U7WBnMDWJQ1KXX7g7Um4MMXoBvoAfMvn9ypizj25hMsRUWe9J3ERoW3gS2p5aUEddU88n4fvWCAzb",
  "key29": "gLDBnQ6hsyHnAn1EMHFRkHvAWbTpSjdrafK1uP7BdRuGo45JZaUDhBSUzMLRQDCKLDhk6gZywqjD6GaApi5GyFH",
  "key30": "4Sw7YfTWV2QRKUpMJh3SLc66ampPdiXE5RWd215AcknWUnh2oBjvdejFY2rfx7Xy3e9qN16NEFrKDNzZQnf2b5u",
  "key31": "3LBahHDxUWzKEf98Y9hCBxTso47tMKXSfuw5GUYKWCcEEBr6HqGNFguUbUzUdtkLXNU36HBuq7jBmG2LLKpfqgdS",
  "key32": "5ZDkRK7KYXcRUofmGvz1wx1HEaZQaAef1BfhBA7QizJd6DGpexQywMyGCimCXbkQYqCi6dB91GruhptCuh377raj"
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
