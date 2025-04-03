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
    "4oJWGJYmWQMioTj5wwwXrej28mwVtkzAcKYPJudu89CGEQpMZEvpjCgmsXDDRtxHuuW74Y8NkADPMDtxTsTChvnw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4y6EL7R1cDQQxKE6tYd6DcycTRvJz7uyxkrZa4s8DdbVfj7DURP781FajseJCit5VtrHAfBQ4JuDpJAkZsGW4LkP",
  "key1": "5cTKF4Deqaasr4eJsSpf9AEC4ZN4TikLPJyPkdiH6zxPnkNdnMsrMV7eNDUbLUvgVRdTt2oPFZKMsQkuDB2pWDYt",
  "key2": "2cPwR3miVERYYE4KKHBPdAggUhi4hvvBeNDezLngTEy6Xs6kJfUBnGf2bRuUX2NTwRP4fxZM1q5QE1uS7TLSGHL9",
  "key3": "3Vx32NJVXM1i9rNGHbZfSZegf8ibYfC6YEaCrPGsC1RP7emWFGfLdsDnRKefW8v8vESRiPj8F7K1DSRLShvoEd2V",
  "key4": "5btZrhRTctBC1Wp7kN2vVM2Wj8nq53qMu2ZB7ByLJPGeGyKdzZQvAokDARhF2g53cw7ZJT5Fw1Ch4CPVk4qzxhGc",
  "key5": "2nPFmtbnjYnJPCniiCj2qvMaEv4phi2QyyLEVC4tro9C8gP2mr6mtp4RopjgjeDGniJX1G96yFhxVDcGSdUxh3Rg",
  "key6": "5DqGJjtGwnwEPB4eaLiWDYYUAyzqPAhURBvNJgqwNMsx6ivRyyH3hNZbTjz4cQ6JTuWvTWYLCcFwteVw5XiQQBWL",
  "key7": "5f2YMgNxeQg6L7Nq5sD9zihZJp5tr2qtS7mu25spLUm9dDqjnjjEf2UXiKwyxmqvxHMvj2sJTiZs3eMyUt7qKR38",
  "key8": "fccdYZmG2TN3CRYcveMKfT8QAwkA6j96NqCbeqcZBASYVGSz5JBvin5178fLLX6uX5e5x8UrhBRAznotF5XnfNM",
  "key9": "3djfj7a5nSFWUjNR23R6APtKmAWZat7vFhAnZ2P4NGnipfkvB4ZLGf92MFurtpeAAgBQak6WNvg7qjRp6Szv9NCc",
  "key10": "4VHpmbEDxPVhpDUxSK6ZQBjWopYHtgf2zjCYpMMGvmtg2rK3BnHXdBEWckuW3LpTvkQntR7Kn1aURf5tVceNnFcr",
  "key11": "5auWrBDCvKhBf2SK4oX9qJ1ZnRaxndaTCtX2uQffTpt63DBp5yt8AofkQNQzfqbbgKfnBch5AL8tAXFVpjL134RM",
  "key12": "vkERjZ1rikYt9Ny2Yxe5D4PLjWyqPg6dod4Sv8MkHdCoZe28j3rrP2disuFZWYx28ETut4TBr1UGrdmCrGs999H",
  "key13": "32XBdTvaStxsPvtzB7aYgFXmMeUMnGgBSKgNYeumfBthfpYuj94Co3YfZdepTjeBBXKmvwNVGmLFVETjDWjZkwzm",
  "key14": "3jaWivN5AzQafhepnKxqu1Xui7jLEy4QXgc21ufmRz4ryXyeBqA8F7xM36bPV38wjpDuAbhQAThEFXN5Yj1avaJx",
  "key15": "4LP9ty92icmhh9uCQjyrqcSLvTKouFMpB11kzno1gA9dqMEMV6BPHPNVZ528hiuY5RyXzse6gEHGnh5D27qi4fKd",
  "key16": "5uxbdwTSMA9FPMFZjbuHAndDNzrL7s8Zsgzs9WCEnhYKdu1wZ85mVMmgQweXjjQMDRjkwUMSqvWwAyAMXbaf6QbT",
  "key17": "5fwXAEqJtSeiMZwkkyPZKE8bF8ww5BEyMrg62pmDZDuzqoHRoXtTvosvw3mH8JzP2anF4p1MdinEXSvSF24B7R4w",
  "key18": "4hYTcKeqm8dd9rDcG9mTcHvw6J7HqZFqxhxMpUnZ4Js8n8omZ7BvipNrWvQomyZR474uRjFoFxx1eG4azLs9htJF",
  "key19": "2xhKsHApBmxc8JM7m58avMoBxAUYwFoLL4aBSuPNq9AySpV39s9WzcrCeVeDGHLmKgeGk4icDgK8UxpD9gkAyJ5N",
  "key20": "545nfHzwQavWXHVg3iCBxxHw1uhTFSMdnNpADXUmxCgDqkTzkYooHbCfP7viZ9JivjShRtGnLZFKxjVwCEsWA6Jc",
  "key21": "3H7zPZAymALnYxWMTF6jnAEBDhb67rsU88BtUL53yV4XuvoDM57cWFdK2QHZX6RZa7rDnb7MAdrjneTm4N1ruTmM",
  "key22": "UqdLdoRzRpmX8KPDQTfqnUgtBkPuRTb7Nyn1auJdtVRTw9NBAwCzCqmgBzsPLL8iJiUr5vKf9YfaMEQW5QmPeVt",
  "key23": "3fFpvcvtuZtUjxffv2aPqfgXgkDRa2j33RqvbtaiZYqeKLoZnJaj4aFYGpUZkwa1c2jaagTJGorDQHL684Q4vYtw",
  "key24": "2o7H2JDPeCWo5DCLk6ejEczjYGvFKHJRRpmihmTceWYzQQEzWVz3nja4de5NzXEFFF5gAGmzkwZ1Vn5Z3M1DUj42",
  "key25": "5UkhbAKCPNRjtijhsUgAEpuFCZDT8tLj8gNtZZqsuhaikSCQdqx1hZ1wCwEtipxQQpxN6wrwKcJ1XqnUmBdoqq6r",
  "key26": "49ePNGZzwJaAn5T5aMC7ghFffySn3FQUHY1BrtmmmWjp4JKS6LcShNv2eNexokv6MYbQXGKh93yaUAPeSrgKuZnv"
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
