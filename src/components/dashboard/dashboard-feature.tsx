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
    "23kxqpa3HGYEMes4EhGpPvetAxS6DRZJR1z8ktwUCXWSh6foqocEryCjFJQ9TYR4p2Dh41inUZpPpGPUomBmrczv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3CYgk1fxeFp3DypYLt3MJCGoi2Qa6WHy1ijCthkkyR4ytCWBSFvUugoCHcMe8WwFTBMgBRSMhTKGmXcgk2SqNDWi",
  "key1": "dBwUkXaf9JRtvYRbpGRzARWoE7fs1Vz3EagrTfgjagHS9efhsFvHp9JSncbcgW86dJgc3Ps6nQRsf5vquyujUBq",
  "key2": "QgubXG2DPEhaBGVuiXUoPBWD2MDKneXjciUg1PWT58ce35oiXUwzshTun6o8MfdDKWCuqU1WrsGnQ4dA15Eg9Zp",
  "key3": "36XyS31WJbWbKV5X1BtYyb5Y9GpKqWmPokaSicvmKaYChMwbjCdyn2F9jVmiSvYX4yEtEaD1HmLhHFBqEbtidBif",
  "key4": "46ohgJSayY6rPw59J9f5iBQrJc8KD3aua1Q4whKLYSmH7iv7Gw1oFbNpMJmESkAm1tM1DvTPmpTxyXc1DYp4pqUs",
  "key5": "5YGDapq7XfHhzBr9MyAUThhrV6H9L2zdn15d6HsQkP44dRNzVVoUVPXLVBeLTaLkcCdLSHzc8J8p2CPUczUFZyCb",
  "key6": "2PXQGs32ioAQZUGR53Kc2GPqd9erCRpTA9fdx8z4tPz8yEjTRe5s3kq7dTT5VVhBfDAaESw2Kc2TmEccF6mcuTmG",
  "key7": "4qVpZdGbbpX2FQ3pHHETPBwxjgUZgAo6P3h9KrgrGidkcGk6UM4aHrKy4Yo1ExxYK72eSEFSALesfUR9hfte5838",
  "key8": "rVmgCzqNLANZgp7iEsWuJGjGnojtKkJV1kRRTAGSW4HsKH2KhhHQ1QmLmXbY7H1nAbsByFTJJcrQdBj2VNZGAWS",
  "key9": "4YtKkKZBMQVX19LPhPTnLi1VrW1ZcsffnCkVotTwKG8AkdbHRyqBpjw3JcWz8dkBHivvJxHyRd2aiET26ECKLBaV",
  "key10": "2WKHSGGRNnBfFTz7Aq1ohwWxAZyHWFhvgaXMCBbqyTFHMLEN7hN6aAhRd1H7s3EoKTtNrNYPAJNg1kGfiyRyiMeT",
  "key11": "32e4oT9xHSGb8NdL6kPqbdN1y8duJRUiZh9oz3w3qGzBq5qD5XpPbcqAth8zXY8XwBQS4HAk1wmJ6nke9VGQyGNy",
  "key12": "5cd9eWgdD3Dpz6qESeHywQwpYR37A78LY7f5eHfPzSFgdhCLqSgAqxh75jUa9gmopyc9XvVY9CpaaWcmc2juyg5g",
  "key13": "2N1WucWyEM8k4Duu48w1nWCMnhL1idNVqPXa9meF47TnHvovFgbk28uovaxpazFteSDj1FWJ6TAbFKuuukKNNzbv",
  "key14": "3FkdEXjyEpJT5NoZgJqZkUqXkJyKUyyJD1NvakTuf69sJiwH8GBrN3m1V2dxCcYboN64erPBFc9iXUVQuF9Fvitz",
  "key15": "VfXVXtNHUydJ9joKkPB63Qixkw6USNKzrJSWZY4C7RV8PBrLKRZxp6vDekUaG31ARoqw3kGDMVeLzuyz2MrM9s3",
  "key16": "2yLmgFcgFrBsGUVqLhptuR3E1swB3HnbsSYytosgLQdNUMfbVAx3KpLMb4pK9NoN6pF7d8SHy6RLefdrCaEASU46",
  "key17": "2eR7qZYtMVCMZQnxqXZyuk6jQfmBypzdPG3faW9G9V6hszmVEs8XgDQjSE2hyNzVdDTPJeE8av5YcQSTZd64r6ZL",
  "key18": "5mhNzx4BN1uxBPAGTsGrGPWKajGjbXPn39NnKTUMgzXpn4obZpNH6wAV9Mx4EwMUzgn5o2QYPYmWaXyjAtQG5Jy1",
  "key19": "47T55PFtkVefmiQ5baGRRxBQ545A7AkvH7xScbCvW7kq2KKPVfBvVrqJbv3PUQ8WzdkfdFCjNwJ6tHV9rVNTpYm9",
  "key20": "5eiDNHv9amjoz97nedAuP5LRCrYWZ44uesEptQX8HwKrAgzHSDJWThRNKYfUHxfua6YTwCQvxRrQ2iCKY48kRjVM",
  "key21": "4U8LyXDsMgZbpeiJPZAgg6sxp79GmDEZeCjAzPdxP2erBs8DMSzBv75mt4UZHDQcoXgLR8n2MurdSwcioNqDjkWY",
  "key22": "4VpAjRewgMWYJDUoDUqFVoMwbPBFE7rFcVLN8tzQG53ziqZC78FUUFjPshFC6nuU52Uzh5TaiBMEVrnZoas55RS6",
  "key23": "54fBtLLRAHQFi4mEMzzSJxa6KutsckDZohgydb7qcAryY7vaTJg8TbEaunTru2EWapLF1jrjTdfYYgtM9dpbidFA",
  "key24": "4D5aCr3W9Wap8niA8akwszoqRkBkBPbWMGu6XTuBEJUwGR3pJNKHBru3bwsQ3jCeKrwQKKkCpwsN8hhiGhvVbeaH",
  "key25": "3RDKhddvz7ENJV98Z1KPrHQZJ4DPibarzRjhvwk1pQKi9ftfvvA7mpTDKYqs7k1QyxKDpp5NqGVA9CVZtDUZSsmb",
  "key26": "3QhLv1nAL48pTYQ372PNg63zVY8zapznWyfoPN9HJgkyCjo29x2vrZ5soT1Z8qg3e9mC9FnbMwQ9HomNpzjYHkY2",
  "key27": "u4s9ajHQqgCWGqojvKmF75geTRAZvY9hLcWWuLdWApUcRKM4pGB7nywzcna6qoqGtF6eNqPvguadZNtHsc8GD4S",
  "key28": "32dHHmamBqVg1KmF7J5ivXhK7o1dpPaMDPECg3z91VFffxU3jkjHNYmGmHEsPMY29KfuWvS9mmHUNbJNwtSQkRN1",
  "key29": "4HBsPU1g3S5TBCFUcnfzWTj4hhDMdU3wRFa5ekTZqN7KQw8FbfJedLdsQjrvfZSYVEVwzJRrWZZjgJAi1BTZdfdu"
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
