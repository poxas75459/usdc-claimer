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
    "5krBaUTaVJmamn8adjyhr5x6RRNWTvt45WbQQaCYshf7o6JZ8KDgHdstuwjCEzJgAvc1GzmVBVjSFa8RZ7pTC6Qk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5B72d9uxVL71ibFvEQSBcRgioqGU3Ebbsn78jx3xeNBUHcdsdxbXvB7Y7iVZi3BaVd1Pb1yQLWubGMYKNuPeH7B1",
  "key1": "2yq62ZuAyG1KXVMQvvAWKCCucXHGxJHPkuXhBnAsTbn7H51hmER1rNizB8PRmi4hjYndsRT8FY25QfYpaMapGtEB",
  "key2": "4p9hryswTP2hcLuRXDWcsD2iZawxa6PTco4x2qp5cxXwp8rWC2fBcZeBRWSKK91RMsLABDNn366ySs33ELHzFuho",
  "key3": "4gC82mRdAJugsm2Ab3RL1HndgsvhKJ8W3trA8h7RTmGXrovqhkxx2yP7BAbakpEMx15Npo8ZPKHA37BJbUAJQJzn",
  "key4": "XHw1nxuzXoUEy3qviHbPnmZexZ5g9aKC562qjxsimMC1uCCjHciDuHyDztuo8AEtD7nMg6AkFpQ23TBF8zMA1fA",
  "key5": "2HPnWVD1QRNiN9gBm8vgvRnMbe4PCHepnjCKGtwF3WTTataSQo3cNWGoksMqKpp7z6pktAUErkXKy9q9P7U9fTcS",
  "key6": "4LaECf1mNx7TYBwGNbP6hMBZDcK9cEDGrSHkRX1B2tUvPQScmaGp8ezw1EDQU767YVbXG97iNmHbsutVUUpFxTEC",
  "key7": "4vANDkTXm3nb72Ja6eVkfxEV24r9dp3AgbMCFqn1XMEjPAkMyUCoDUpwJN414P4gfvE8N2CjNC6xVoEopiFkCHkr",
  "key8": "3792xbo7TTfd6fwPzBdyHW1NUrmsgZZe1bwhk34gyGLvUS7dSCVcWcDRDfqAM9w7bvSMonYE3CthzE3wnS3cr5mf",
  "key9": "2jSsysDQWUEi7NbVpCwR5hEdMHSeqhRdAMz8KA6A2CiFWgD2KNHkjNgmSRcc313m99SniCxHeKXj3FGZnSQeTRQi",
  "key10": "MT5EcSi8st9pEi2mdytbktXKakS4W5z95KMDFduuKTWtFxGkmTm4WNbGixwmsGBLjgpuffsoRwFsnZiE1eNXvCY",
  "key11": "65do2rgojsHvWgXLWArpXNfrW3MPxmskrAwxCUDmTRzgcXobPSZQjdvkkrnLedjHCnLiTUqchR6Dm5JfP2jPNX2Z",
  "key12": "kGesNYoFkWvP3dX7FEGULzHy2uJVSPghUr7HLCkQzLnYYg46X3xrHJoK1nmZDmRaU1eMAiYf2dDY8RUKqpCLnaa",
  "key13": "4QkXN6Jmc1mfiNMuWP5v6n8uPSiF6yMsiXmZhUaJmAprgC9qGtTiZWiZMA1QueiD2gxRd8X54C2e4zKbgYhKrxs1",
  "key14": "3UTPycwXd2uY8d4UQPRUFBsSDNnnHLVyp4Jq7QwjFuVnwu6gfMXPNBVjipsvWwUPsVwpKXukv59k8whePwhmHWo2",
  "key15": "3R9MkcJ6eHVrSMgEFHyB5T2Vy53pvqdoME3WEBs6cj4256gk7HffPCc3msbodemdHbU5UqcuDwnP2crfSNR4SH23",
  "key16": "2HbAJMTQZ72DFgD9yFousWHXMcvMgkz2SWVDxKBmUj63XUbRx6Lxry9DL74GxYkZT5ChuSqDGAMwFxtMyjxXjcKe",
  "key17": "5erZpLFmn7aEV6xevGfxHarQPumKgXbJe4JVBBcrqED3zAP8nZqrMpB3Hyof6wxaUAVSZnZvDAeFV2siVEDPs91R",
  "key18": "ZEA4w9axNMhTiaGvRtQNJdvvaUsdNoXmit8JkYSXYHK3TtJJzyu7EiEcxVDJaP3kv7HyMtHf8Q28uiVxrJdDvn7",
  "key19": "2mbyeuGm92Me8HFN32xZLp5n8yko9uQWTjdnUPXfEFuKLYXv8V8YdtW5t6opcC1CFDnPZX4QepjycdX6CGB5gpch",
  "key20": "vAi7nJxeyHeS3EHYjKmmxFP2XPVWSL38Ya18p41efZUvSnA3ougBp2ZRCAw4URQMrzCsun16Wj2A4XrwmtwEumu",
  "key21": "5t6egP9we2g289Gx1baTehRhCDscTrgjLi3Nkcnktvw5HLWZ24ttQy9nhVNmUENiBsvz7FdQ1et9NegoKjj8W5Rw",
  "key22": "2uL3AJ3dpYgEhngy9zEUJRp5Tw5xYxHAkAKo1JuHQTrGBPQ1axxMivjeUmv7FiSYbDnrJBYNeSWtscTmDR2nhUpK",
  "key23": "Dw84jqJZv9AEKANcpkwNqUkPTLJzdZX6MidctuZmVR3e7VRka7Ukxpuh2StySPr8pES2UcjMJq7kgaSajLKT4C3",
  "key24": "2twSdTmzQJe3m2H9dmrBdmEuW4Hsh5v3rP8FaUWUVnQYdx9Vpz2wUpCaTtFYVu8AhBGDMdjepj4pJvE2wYmh6joL"
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
