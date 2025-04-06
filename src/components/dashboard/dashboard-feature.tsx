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
    "41Y5ZRrSfaKzbBcRbaZVmbdVCcqyfSjyob2Vrr67FA7uQFnkVT8BmU4uhcjycr3dqSZPFwFcvDfcb6u5JVoRGCj8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5scWKhPF69eKgMGsT4LiKLCQM5sta6GHibDXm597cyAC2LqawqLVihamEiRvpHeFmPqHLkY3CV2wUgAR75fMNU5Q",
  "key1": "491qcnL1Mqb8cjmZuhk2JBE96qcvze9vEnorygu2tGEX4ApFPh6tRe8b2oXL3BgjmgVVkzqCAEdaVcRWDN7tWs8R",
  "key2": "62cvUUZ7K7edWXi8YQzYy46vcam7gQqpXpeBQJzuy4RwxeXefUsHEjhKaTVvP5M7z9hGB5gXAhn3T8BzBStneZTa",
  "key3": "31yuBVfFKL8ZnguwC8uVLB7o76RuD5HTjU1UHy7j98bo7fahF4sSGQryNdZjbArZ1d783kCUrHGx5sSNmi6W4Rv3",
  "key4": "dAMJXWi2qEdYihycYoP9hwP2AqL3MWLY3y17nQaLBgVjPeWn16ktchvcGuALo9vKAt1eULQf1awiRYCNdzZsFYc",
  "key5": "4MnDzvnyMjLSy7CPzrmWWWvEKoLuuhvNKVqNYXywYMrv2YtgePsLGpTDickMCnDMjnvh8VP8BFdUt73m8NEeRc8P",
  "key6": "3pnMuWJ5V4DEzZwRdhokxTHaWo729tmdyv9NmKcuz95i8dPfDUCtMrbS2ruJrp1wXYfpzK84HHG39cD5HhTvCCHt",
  "key7": "27BCDorYpGcNY6eFjeLdMeQjrDrfptfhD8xHv3zXPrcHcYpW7FqB5i189oySVsaQ16ERa4JFTiuF7eiyAg4sw89f",
  "key8": "3EbAxzjJ1ttednn1ddTrMGNB3RYocpzUuDP1MZ4jZLPbwj77zGg3U4gAD7HGGUe3BhLNRir66FGiUDEv49qB96Y1",
  "key9": "4fsENYXF5EECEVAd4PEXLehwVUpheqjvyn1hRQ31c5cqSHgwWBchsaNPNUa2rbp9w7AyweZC1VutVsMbwwN4akrs",
  "key10": "5MtuCVshkPLN67NCnuMfA4FTL5MEouY9zvRCwW4r17xQJoUmP7cJeqtmkQeF9acPqi7wwSTvgCDzJmBg5pmgLusT",
  "key11": "3rW2RoWmUPZgQGezmjBAeHE12fT5qEUuKGFAtahhQ2658gQLbDBXQDa5ZbWmBTEPoYbzJjrUV5X7jqFRP5pqYnUb",
  "key12": "3z9QzVQHfApDGvhYDgd8ZHx5zt1WZEPQpNDEKPf4bpo17nB5rU91NQN1c2Ffe29NuHthH1Cv8FmBJ7b1nfeX5qeN",
  "key13": "zg2Tr8Zt8UdnsTNW1TWEZDWT6rEpKQngJYqh2SUshCYgEQTHG6WbpcvcETW3pvHT2d5u4R3bGCbYMh2UtPn7yUU",
  "key14": "KEqtNYvednWfeSieKZVj6VLhv2RkgfdJ2DTqdcDUZVXnFfmKtuyRfDha7ZjqAc6RwAkKU7co4DC8pBjn9gjB8Eg",
  "key15": "4qXnaFq3BgJYR5YER6owwwsF1nANDC6Y3EeJBZ6wTteyFBSRCzWu8HTJfFVAgkEGN1evwgKgPwmJ7WHcHqcS8zbT",
  "key16": "4wJtXoGfE32e3hCFfpnTXqL3N74FVFEEi2FGdPGkA6BZpfgaXhzSU1tLvY3zJtyi9ReBxXddB4LpJcoLov3LCvqR",
  "key17": "57CxvaX4j2q8wCJnrekHbcGZ6XYPDLFdTn2wbBm7rXjWHQWjvTmfLhFfHaZtHgfqtSni8hVmJ2d8571hAZWKohjh",
  "key18": "5HwUVQu9mSRYgPJqGQ9BQaudxNaDdk1uGhc5DP5bqcSDNxEA7uH5gziLtZ6dfE8212Zpc3dintiDngjWQJ9VBhxU",
  "key19": "39wdpJpqR1w2ML45ihQ4vMRxujwWs9Bs9bPkH2YGGwtisGX1Eofqm6Nkpp3ude55x9dtm4SpCGsE8pkiDiDMP8xd",
  "key20": "sjkD9nyUf5zbTBsAeDsu5MF34GUNChrbfrbWd9mSQu1x6RTZ6f7MphQ58qbdKzVpxHvpb5HFVNKaU7g3CTXf7Ah",
  "key21": "4KwNDDYKN9U87ZK2VKJFtgn6BUT4m1wwrNfhWZ3mFTfREJVpqiRxdjjeSecUssANeHMC42xX5JT97WGBAbPJYZze",
  "key22": "5Kq8f8GNVNXxSkuWzxRoqyNfJxHkpKohYny6dbkijuY4hfAofHyuEFduAW9sghzbgJa1jAg8zXgBfNRhBTRppMPa",
  "key23": "2L8p6k1dRXnoGQZEBkUxq4BrmmMpemVmywjRfWT3eccGH4kTw9fBHfsMSnrxSVi6oMTMda4fYpBAr8Qg6be3PBt7",
  "key24": "ooVK1z1WdRTi7ZEeMbcDUM7fGdVm9JY7TwBEgJoJsDu82HeJLMuSgwZ5wDDTicrCFiWJkKoTyNquZyxU5W7Hh69",
  "key25": "fbqjS5ExjX5Pmf71ybsDzNh1Z5kAtp1y335tm3fEBJw6wc6d3vs2PQvGewngPWmnxiRUcTCySvBYBCiJN3sSjA8",
  "key26": "fXB3y51nLoCFo8oyUtnzu57qjxhCdwdsztLGDpjfVpNMxVfEwZgKQSmxMt3XwD8WaSJQ8fVc6d86a5ZYaYv2o48",
  "key27": "4vjFj53XGeBUne82yBhkRvLYXmP55svBdr3ErfJSVZMoPmAkhrQeUo3J9TJcpz91CtR7wu3Rb8WAhEbSGYRGhKrD",
  "key28": "5ZMLkRDPcRQxz23GJeYTnbGEv5rNuCdT8W5xk1nHSBsrqGCVBCTve1j2Ks5DmeSpxfuZUhMv7Mw7viQjr4M83QEz",
  "key29": "3rS5uHySXLJeypuwWjMZoPC8iW2PzXAnM7V3uVfjfVB1L9x8An5T1bYhZKgK3gpibpwjXgJqGpc7LdekTJjpeGtU",
  "key30": "5TfULKc7A6BiyiZvnykfArUmSPuqrNtQn5Kck49Z1GPYWYrGDVAu1rnbrgLHu91AwhVwAJL8wJFUxzyJf38dCfkY"
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
