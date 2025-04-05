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
    "4m4eBjHRGsZyFxe98KSqvVxjrmeYpj5BwCZgGrW8VYP53KmSACe8aXWi1BLGApk5cxm8wKHeGEFHHHywpMSbFkXd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2pRdNViTGBMpJ1zmreCrXcMwGCszQgeebL7BRLN9ULeFocLRtu7UGTo2eZv8YorYXYgd3AmrRW3ytwYnfUXZhrMp",
  "key1": "4D22cDPsbtjoVG9jFWL5gooQdir9qXBYjVuzn5NvMJGMMS9hNhZBEYJon1J8eW7aMPWqaJkXwxN8vMQpBA22z672",
  "key2": "j5NfYNB33hxESnpZgLGYDYt7kUbc6VeyEreG3wxiuGN857ig99s4qe9SSwjF5q8jPdfHkiNMRXEY7ZRwpt2ejkH",
  "key3": "4rLsHvsXeqaMkKT1thEcjgTRx8icB55vZKRaxC98UKGnasTW6XvHY9GnGkEFV6wDGWzprvvXrpPwyd9xvQYvSSXN",
  "key4": "5tJLEMiojwZzaBSUqkJgkoEofHPxy3QiqkZh1vTF8fj4JcPeUQTmui6imGNqrvkdeutrAQEie3DGfvEhuLASA4E8",
  "key5": "57tmGWPf52Hn4XJ1K8kL15RA8NQbwFLqQPHTwEjU13jmxeZ1JfoWEySoKprtdzwBHHE1cGua2tfomeXPYRoxipAc",
  "key6": "2u9oehdvcrU2C7EymWZLUxKmC2ZTQG1arojMfc3UvKpQHGh9qpaA4GygjhottgBU4k5dYYr8SiPPT5BQ5YwG3RMq",
  "key7": "58xETJQMfJD9LruiVpPyDabx63JAjWr5nVWFpSMntLbbjdMyDFNpjhPBaGGFfXBzY2CX4sntGfqgrnCkH6hcFwQx",
  "key8": "2Zc9t2HGv5AsXYiW4SKLY3Ckx71s5jan9wije282F4L7nxpzzNNtCBAiFjtcAS7NxB6yGq4nmeEnJC2d9QXhM44k",
  "key9": "464Dn3nDMGfLdSawvsF9atatjCM5Efd2yK1EEiF2uKz6ahB5rPp4wbgeFxiKziqJaZMVv2h3yMLcazbRHYwLW1DT",
  "key10": "2GTsL4gEgCmuLatW6uKK9REBbDgW9Kh1AQbWxL1XghwFFZSXkqBmeuC7QDbgUT9DToBAQffuC7CRPwfV3S6BxKMR",
  "key11": "4zco2gNxVWxoqRD5gnjxXr9hhChyNXEdXBzC9mRyUqEy14W4tSZQ6LXjdSYqndhKmzryH5DCdoyFdzY8qyqtsUf2",
  "key12": "3Rj4pkcp25rRgeVNnC1PPiZ25RzxsGT3LWowQWbk5nXnQ7c9QgtViAmTWyvZD8SAMYsWAzH8SmdTpUKb4ELN5uvo",
  "key13": "67DtfBT4YsJkuFF8yGghyiAd5m1nLPjo7cH5NqcdN9zm9mt1DsCmM6XVEpsepe7iE8LJRXGsko2pXK4DZHVxWhNc",
  "key14": "3jkPx2kJwHq1RiHqencH6ouscYaFJZMoxBrfU4Y6rL32sbbLmuf4EYzELqGQQx3NY3zdWf8DYKVReGVXJmfVj1fh",
  "key15": "yRoz7Qw7yG1oBjZ4HwXH152Z3VE1ttTKRE1VkLXDpqMwZ4m6hdaDeSdgfCQ82tDVLPHhbZCBQnauxsXf7xaSsWK",
  "key16": "4CdtQxSuDdNv2i6HBb9qWqR6mvEEV2uvPJGDV9Yvxe3rvKPWyaNWLSzw3SwLwDQt7KRfQR7rz8E83b7u5rEVwwxZ",
  "key17": "3ocTGEzQxTPASVHdkxwFWHakqi228fDB57S1sq9Y85kqAHGy1q2QkuWdhc1pf4ddHJtUwsizijjTdEVt5yFRissm",
  "key18": "278aX1HeWzY49zuzk1AZxPiMHzfPU5cp1ump3hQpoLvHGB5GZLwmUv7j1uZHQ3XGQ6968oykzHTHDDm1HUVVBYqo",
  "key19": "214QBZhFGS6aQ3xhU7x6gbrgvLaG2LaGqfyqZuas8XqMPwgvcyHDpYxhSW6NSPaUqyQ4a747wMPtuYQdS5bv1RUW",
  "key20": "D4iNH3YLGms8kTUzyjRRuhf2AX9scsq5KVpKNisx8Aoc5tLCBBR4YGjYzisz8ktQhsvEiYeBqKAZUimZZ8uiDev",
  "key21": "4VzwHJdVxgrm8pdEN7WXLmLX9hsFA5PjARfkcfAhqfsfwMAdQx7b1XGnJeb2u3NKu1qkEcpiFefGo213ydYmKPwy",
  "key22": "5jCgwHXeBrxJHXCmEokJaMfNxQw6EVgZYTeRjxQoR3cn9sBJbqKDUJxWKzcxf6yWa8Q4rB4LGcMRxAXN1rpzs7Ko",
  "key23": "4w136Dfx97NZgPab41JKeDeGkX9KzQBu3wtXT3Z3UiTfe3nMAr3hbZyAJ6wQk9SbZToCPVkXJYiQKn6NzYx7Z95P",
  "key24": "2uEMcabMtSv378r9Mgk1e2CyxrVx2rLc1FmFMTSczuvcZpNt8VQ4JbTwkvorknsxEXgytqNb8sHY4NB3ahKYgTJS",
  "key25": "5ScNtErhfNBgm5kX4VN5Mfrpbb4ryjDCvzbPcsuXUgw5zdnjvURtdHyiks3TwTs3cQ8Cm5rhoGJK2q4VF5DrT3mi",
  "key26": "BF5yP2bAD7q2MXYenkSaVo8eQfW3yXGNoKGvgAz2ezLTiDEE65YPN6GxFdzovuXHBBQxAUeNPPW2Mp54rQg9rEe",
  "key27": "594NrZza9UaeHRKjbX2cjbhUxyPvAkvtBHVHqjcuqBMevxLp66An9p5cVvEQB4LZZ8C5ywca1eLE6JHU4XJDp5SW",
  "key28": "RicKRchqxjT3duK5aAabXtehcGigWzsQxr4n896fKDWpqhVUprcEU8DqjRVF8R2ypV5uNbhdvzKcRAEcgPJAwnx",
  "key29": "5aeGBNApogN5zcXsR4t6ctQkZEUUVdmX3P74qwNpiXfJ4wCsGExjq4sj8rqoM8q2TWNPVZasAT7j5fSPP42wzxzC"
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
