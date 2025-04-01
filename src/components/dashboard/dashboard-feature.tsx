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
    "3x2YV7ntyQ24CEh8FUZWQZTFPUS3ZqUcTRVs5Br4ii8inYkBPfJnwBfQBkYmRAHhvrUEXxq8u1wVuS9DC9AipeBc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5fD62jVrjvxJ1aGM7zpPhYa1GYVKDxTbL1px1CGonPAM8ojsrAFox8o2ZAo7gCjQqXiXpofasWkLtVwQ22dYaW64",
  "key1": "5tLGLL7zEwtFKjC22GQC1ENzuGTs7WVqXAwoPgWa3aXmPLEspX5rGk9tAyR67D5NtkoEQcueo87V5k1h4haXwz8L",
  "key2": "4vvVfWMrLvu1MJnCRp7x1ZKaLRPUsc1j21skeqo5aCoDCKdPZEVeu18VYhtN685uznDMTGA6T6GJuRgTrHwMPF94",
  "key3": "2NCXK6ZFiy9khDqfUrMd5x7U35AxA6Uz7acHnL8DbNctdCubnU5YyZ51eoxAKFocUYKVakX1gweajpRKx5Ww1upd",
  "key4": "3e4hq9rLyi2gMyb4qcAzJZmFSzJvrjuZVpoRG2iiCb3Ut5LDP6D44tsgdd6S6m5P6efWqkaE3R17KYeqcKXaytTg",
  "key5": "2eFdwRj6t8rfMnUgKHs79PK1f9zvsmUjgQpLDM8EoJ9bhGMJ6oKgq8fSDYegxQtCaExRWi4CKV6PCsrWzvpcyXgC",
  "key6": "66yUA7tZeutWVT1JPdSPicwUWMRG79tY5AZzQE7tKqWQLi5zJPBz5DqA5ezDQEErx9gFfCD52kTTAd1mDHmprGKk",
  "key7": "6VagG9x547CkEFMJ4LFPdi4gWPSnAN69X1pNsJ8mvZ8daYKrgCBJaXcg4bLyZvBhDg8WY5Epu2rY9WaDX5DNvu3",
  "key8": "5BEigHNihg6zWRXwmA3uLa5cc8AsWFWohNx2wXvrGbYrYCKGhjUUgtxynBjo5wRcZiP8cxKnb8X3B57S8uLvrM1s",
  "key9": "3VLVV5vo2joEuB5zwRXdRiUQg5HUx5c98XwCmBZuZ8ocYfGaFqW3SJLQFS7QKUK15JZFANwfv8hzX86wUj6zbtfB",
  "key10": "XnrwQRBpbPb9htMCpAdoKozMqqiwMo1qiMnxSiEUCa1L3dyao79xhEY1ydAhzj2VCvWECHrsTDp34XX2dbx1Vzp",
  "key11": "3HpetnVphsFw9m8TroeLz3ZtBmNzuH6xR9gPGatgonna4YAXBXBsUzHNwNpiQvJNUKBZJfXWVTYrCz6J4RQdPTtH",
  "key12": "2zFTD5b8KWtnKpu3B8tvYqkzhnrMb2WNdN6XRa6SVYvs5k4AAszfzAqk9M8Am14oamGnRhqfepzfgZCrmdzRsA1D",
  "key13": "5MnLh5unjbbZdamkWymg5qxtzSZHJwUDZSRWGiPMrRZXnVt4ezSz2AWfXbbTWuDhkCmP88SaQe2PZqgNwoGdMMDY",
  "key14": "5xSdTUVWWoP3dtKqEzorvbcXpSiPdzrNR7HiAVnWdTULKo8bHmpadFjVvo3zz1oXTyxw9jDXmZMaoPFehm7YMU3c",
  "key15": "5ZnVvP7QjwWuNuz7WXfpkAqbQAaNa55QeuhYdT7obRJnS2G7tHEUMg2yAtQhuSbeDF8qAZe4qUfHXe5mfi7hsSJK",
  "key16": "2oMEJmJMBmWusWSU1pQUdPEVD65sdTjxDAzpragR22Ddw9UaiYmLSRSWR2kg74p8tna6sz6b96nuV7nHyyevBofa",
  "key17": "5s9kgPDomnXPRw2BwcG7QrsGV9ao48sk8UTiBoGB4Y5nrfv5XgiXEjAexFXGDBmAQYHRuJopLLMdYb5afG4DCLrT",
  "key18": "9wVmqpakLhaP25oudvqYFrsipxzTRNvtg6okFSMYd79GtjQKw8xfi4U6jTmawgY7uiKtDjzw6cMzY3SeESSYawb",
  "key19": "3FHMSC6hiiq3eYFMa3o96oVdR9NqM2kwiAxYgu2akp3BXk8nFjY9vyVTSxHXpdY6SfWN7dCnWgpAAarWGGQq6Be4",
  "key20": "29oqn6CqsLVB4aVxkyTiLX7sddPdBLYqNKpjHr2kUbsG93hpnGV63EndgJnQGS1KssEUXM29JZ13bf34Fhr5F5AT",
  "key21": "5WP2kW3eq8vawVLehPG7ZhcyHVfQZ3tqV257dCE62PV6z4QYeYhMq4kugZzT2WEbq14w98G2iDSU9Z76CJGY8qmE",
  "key22": "4GxN1u7BRCeVRvf6xKeL6WiWi6hnAVH3KXNXQGXK59XM5BZ9HJSQbgiwECimc6QwTp5hgMKXg1gSZDsGat7tdjPb",
  "key23": "3wyDyiSgj91wgnDhAsSmWqcRN7GoiLXNbTbQ2ChhCMYR4Vwq8iJ1aevjn44QvZtC36ujeiR8qxSpV8pRC7LsC8tE",
  "key24": "3K289hkNx62hhu6Fc1ksX7KpqrABNgZFYExKM3dZYkvwttJvWFuQrWPPZpAKgZG7jCRkzDTRHWk8WFx8JMQy3b9e",
  "key25": "4DQU31TY6waA3pu2EADJ9JRXV6mLDzcuoaRzZfDAWS6sfpYCqrknwgoggpHfRwTZSMKyFW1KnXTGvpZziSzQ87Q3",
  "key26": "3ErDF7mTa991XUsLpCoiwG1V1omjyU2v6RFdz5ENqPrG2KjV88VHBojkn7rgipC1RVpmJqa6RXctCswWAvYmVfpF",
  "key27": "5QknaSz2PwrGYL6rSbtMJEVeAREWn4uc876wS5RZeEJDprkHUCbBUPKNHruw6DUUG9d944qyguaWSHJsUTiqcqQW",
  "key28": "3WxLthMP5orA6gZaFp4N7324TM5wVA4UJafDcXFpt1dKR1uEKbwRvEtnX5oyGFeo9RGoMT8E1bLTYq2Rv1ZYkxVf",
  "key29": "3FdkPYD2j6safpn4aVJZHgPGwEzEuPmYLqbKQguvHFyr9TVmdNh7NpPhXD6pxjLZ3JTeFvjjZJQ5jon53ryWR1YJ"
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
