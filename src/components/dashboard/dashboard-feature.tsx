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
    "2c9k8wsfZHnZFVpQn3p4iQXfvr2a43WLdy1WLcNuMC2K4GXquVgpo6dBEbhD5Mkp5WMW1opAmDnv3on9e2bJxYfu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "nqtQeWvgiwYqbSmjgyzbEzN4WJC4QyDhDUuX1RqwRHJyAM6xvRRK9DmGAdVeuBCUbLLBR13yPnjGfscuhwZWenQ",
  "key1": "3ENGKRmdvQthqyQRnKjrJjnYemWC1wNtJgCbq8wfLF5d7D95uaRCnAx3HiW2ZkcxLQvL1ffHUfNRGjyk16ury5zK",
  "key2": "3CMU1rfacUG4vz7wGPeDpq5nP5XXrMpm29zLk9tqR9731piNe4GKBqUNfS4f1sbpRjxeM9dFjUKf59b3ufMJxLEk",
  "key3": "2w33YfRaHwp7w15w446tpQ2NNK1yuqxjRoM3n92EGnm8x61wrzHxxweVFtYYSfFsfgGqhUradKgPAsxZsRKT55FB",
  "key4": "494hH5Z9Py1GgL5De7jC7ZJ7Mcd7PRkVBsU325vH3CTndBoV8LnEV5ET5RRcR29jtFQwaLujiHCTiDcHEubU9p4C",
  "key5": "4tQz3U3q9oMzFXM3BhMz57PL2d3RV8ESNbMsnWxzpvVSpgNjgy3d54CsTt5XRxxfYCFU2e8X3yVzvx29cxFyAWbg",
  "key6": "2PiPYEZTnHXAF2ZTf3Z6wfgfDEE41zCfXdvphmFDa5Jtq9kdx95UyxFzQwe1FxAbZhUpQvAf9krj11c8xQY8pNMC",
  "key7": "5TeobxApAH3VrtPo5WSY9iTvEapAVbwgyb3oXTCAFi5HP9XD8SLRYUPmYfHUQ6RmeGFRiNV5ybBsf1pn3Nfcfou1",
  "key8": "5JxrXikh6LSp8cUruuf8o6NCfpKwSfEZDREJ2PaR8AXuSaJjKqHTFUSxybzRfp4Ls5tJuXzbz76xxkRgDD4rFu5F",
  "key9": "3vGSaFNkAZzbzn218LFymzakB7AUDv8rV6QKZDT4wUi8FVt4Snymp26oAxB6hAz2Q8cC8Ew4QimbidSpNusSQhvz",
  "key10": "3fdckD48cbeTDzUaAdsMVg92RR3wYeB4p8VewS9PBvhS1PgqpTgyeQYh935e7qUP9uRzt28JPEXFGeUrTX3rdoWa",
  "key11": "4cMuP5na5prwjEfP3LuPppT6ageQ3rd1YpCtnjRwPAa88WkcWjb6jX46fgAnKSHsKSoeYCicd8JAiqNQDdVSBooA",
  "key12": "5PELaWHviYhMtZHEayVwBvxouVrCaKPSEw6EoHB6s7zSWTzjPqvwR7Wtj1fVCe2jHRpiZ74yBXPxsUzCBVDLj7Np",
  "key13": "dcP9XbGoh7G7zrNVPfhYhy6gjGj5WN4TCjZJmG71tYD48xhPR8nBcdigWVMZ9WhnqfgigBDgu3wrGH4EZRXJH3r",
  "key14": "35soHPikY1sFmmNPjz7Zsd3wodsdGQMq2of1ffJosnP1TiqzDfjNBbNqvZTkYaQYEKX1KADnQjWF2AkB8kFAYwrE",
  "key15": "5gDi9cksfC8WnRFd7RDw2VvXBTxMk9BKDvHVdWG9Rz4HTsnaFnNRegc3yxLuNAyKnsfojJohtgUFv9tm899yePaA",
  "key16": "63UmZbTGhmTz4sEo8UYCtD9hcHugsBMNcsbKYMQKzqnVg3cecLZb15M2ymQ7L7rCKwTFU9Pt8NYFdPAwFMKi1uLs",
  "key17": "2fZRXHkB9PaSq4ka65tLwAhkredTqJFAvFcM9nLXvUQFVunPpwQcfSs7WmRWZRDrLX367dZvup7kqSUvd3jhvVrn",
  "key18": "2biddpo8ojjwcaYN8a5i87UGnY714LtsD26jvi5oA3FZPfRn2TtYmmApTZmgmqxwyWC1ntnJyF1oGt476zUCi1va",
  "key19": "8ZjnW9zvJyXU4xrkMkCJYHiVb8iRc4J6NVwA6J2etur99mQV8iDrc4ZmyrcgFryyAWNGeCkW5sCCCghNbigjjQz",
  "key20": "VEhYPgJREtddgwxkEqKwZCgT3vdGvkwb4pY38BAxXUW2D6Wd5NadZ3Kr1zj6cEg6S4PBMqFb4rD5KJuVCdpwjit",
  "key21": "RB7FU8jCh6WApaMbfCb1b8edwRmCfDFost7KzbTBtrC1Cu1Uk4uMYMYqYVzEnwqxACmthsZrvP9U7oZbY73fMFQ",
  "key22": "2idKBBed2Z89kxQjpUtREsRsQxUJpqH7Pc1waLj3wQrjaQgVoBxMBPbS7vNMNciRXKbc1fcUyPBPv5DeU4dNYsta",
  "key23": "5Yjbpxq8fsdBf35qccnQWN7azEkG8TJeTvm9a6FmwYk2FUKgXCmdBRRWYqhWHkHiWLz9ZAZCkGjH6utvb1uCVhAS",
  "key24": "67ZQoVpJUs8yAUaXzJktC62iNSC5by6E13hpfZgFW3oGkgY7ww6AdAwgtAbhRk25DqLkLHmHDpDthWtEvvuGSw31",
  "key25": "kd44MHpDJECvMePntP1GDVejChFqLnSom92tujrMU3PrRmdW4BiD4TwA7MSE6wzw1STUHxmWBspJHcZvEZLtQM8"
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
