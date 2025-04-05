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
    "4VkpxC3Smwdtbb5yDkwpGS8LXLAfxEvxXtc3JKset1jGWNyh372B7zqAd57t6bTVEx7jbJTGQWKMvh8e2RLUKvCJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "22Gzaoi2jQ83trLfonbhH7tp7n7vX8EVu6f2PC9axsAqN42ZFdhK75EpbrUhzeq4WGFmqnYasxwyLSGM3wv8K4P7",
  "key1": "2ehvoVnrAQTz1rWx4Ei5T1UbxAJ6UGyzv75DcTe6wjRWTcTYHKTKcNwiPFdargWmyrn1QAapGc3gVpydxFVWw4k5",
  "key2": "3qbkGrwxD2jDbraT3SaH23WGFbLJSEHgmJxVh9bvrVyCkrNgYUnioZ9wMa8BHiArJnAaCsFCi6HJhSAJUd78Gkq1",
  "key3": "4zroS9D683CrAeggStwYcBsnW1UV5aUVutsxF9dzNa14VSRsn53iUWCNPmED49K41sRpoqyiJF9RnHipbQKoL3sf",
  "key4": "9okw4ypmQK9P9L9AEVPHeuh8yRGHnwi9XrZHYKfnXc6ZHqY1fppF4jt5MV4uxMroqg7MxRMh73uvhhU4rKoM1Na",
  "key5": "3mCuF1BdozL2p4q9E8tLibL7eSCu7cwUFFGEe7asL1rfFkKqGYW7zYM1RaxmLdUggPbFhpfHBGNTpkqc2s3XrQpp",
  "key6": "MGndx6cHNXoxtxco3ssXkFcV46e2aRjbH9oLxXXiWnkHimGSh1XsRTGjuWu1LhxkBzp3bUdD6jcXjeZQpEDF5tM",
  "key7": "2JSSoJwfnQY1CeSQEZDVnTFmgxNc6kjtoPqzeUnxEXYxrNPdCteRpRVMMnBzgfJpngpq1PmkDwWotdUkgc6WppcR",
  "key8": "4xbLwV8uEWNm95V86N3Zj6U533sVkGJjYuntgtySgfAjvg6x694o2MVKNghoBx9pCCiVTRi6DBQoJKdrQD14ngTe",
  "key9": "5RSneT1C6FKs4UTBZeQepAEoM8C9Wp1G7jmrFxNQPnpwcFeqQHkPLDxEgUXYpvNPfUZXigcGurpX6pXT5gvdTgsF",
  "key10": "5QRzxuePEkKuNCgn8F36X1UATC7p7HW13ULJJnYQnp5QUTrXCZgXdM9WmhwXNGtKPBs3wZ24WTM1soUcbVZFya5p",
  "key11": "44y6cEj81EhFVCYfXbCucdiAJCdbdmejSaU93Jk11LrZhDSHmci2eap5R1yx8c4q17uAa1Vox1ndNUbkqFBtT4h4",
  "key12": "4ZopfH5DTpNyY9PXzoy21rUYjdiJTY3TnjGx89gk94G4Do5S2EL3cQmyxsoEcgn15EnSuzpP4muJckXGk7iwMm2p",
  "key13": "2ZctCgJoKgDzc6sZKyimoVPB1hmW51PTgvT5TSQGncBdNdr991eM9HihWS3CG9dd8brLCnj9MUQn3FmE4cKWgeGz",
  "key14": "Z4xUbntCbUpty1qqp1MxwQzGrLwYwnSMzSa2b8d4NMR3YBmtqTphKyCrjooJXJRxuHQLar66EmcRukpo9cmeJuf",
  "key15": "xF2vo1VupnNGTsE3yetn4GX7K8cgAHKrcTV1vJ5HFFnirBfRHZ2J17coSWTtA43tQajN1ydV7Qf6jbqE2AqwBBx",
  "key16": "53bicPovp4TrJsJHcoEzVg5JZHKS4vAkGYBQ5Fwqq5iKj7YkNHQNyjju8jsdvPJ4YmfwWvgPjyG6r9nZP1ZAF9SE",
  "key17": "2KtpQbeoX14b8Q5icJAeNDpaxp6Q6LckD4hFZWxAQ8xZvCJWCaFV8Bkh17HhKo5QQLA2XxgjyBQeMBseA8jq1ts5",
  "key18": "5ScYnkYNyEEzU7tMtjwHX5ZYtW2LcZsdA6FrY8duhc9ejmhWTGj5mEyG88fAuRzjmTFCcaWJLgpJCEaLWF15JG81",
  "key19": "2UwPrMxWm57sZEre8s6koQUnXq8hMmkoZ1KnFsAgcpd1QzuVZW2c7rGbxJLpCEdeq9Wa322e1SMmqmu5ZqTcXpN2",
  "key20": "4d5NcTsfjVd6cM98hkGtB5Ds7Q2MTFuK7uFTBzodFQDtXhvMkRbjZp9QC6EZess4Bg5HhNQR6s6jpQGKmQ8kcEBz",
  "key21": "4o4s9gtbMhT6GfF4qSAKu97bEykf1w9HPkPwMsWCdbqZfeZWuwMnRNJRngBvszcUuKL7xkBMa3f9cLjugY6MTMM3",
  "key22": "26zycTaTC6a4heK8pYwXumx9pDiEPu4r1UeXJa5M76TccgBCNbh1nvuk9fLfPKBsfQzVSuqV3hbEt8U9anSfgrPY",
  "key23": "3pWzwqEJ3ANPxZnRrd6oEpq7J83rENhMQTJwrtWoFxA5duqW3JUkLtyJXezhCfVNc9yimxBFe1kn9hxmtwYdRxYC",
  "key24": "5yAasrpvkxCXTHkXFZBtAYFJrnRUT7ezeqSbL7Ljhaub17LExRButBij1F35ovy2UKR3yGkmedJqtUBw2CP7kBaR",
  "key25": "3r9X1Re5YvnaNyGSpiyxYTkZ1pqJS5PQk6mEeXxBAr7AtzcrHmo3GX2zGFncY3A3AyfPs2cfLD2APdBnYCNAsUUN",
  "key26": "3otPj5VZXjsa7NQV6xePuz4XLpX6Stm4xixVuT44S7oYqnWuUMzBztTzasRy6v4Z3AcQ2LS2EFQGPwgVXSybKis7",
  "key27": "2ncapWpTNwArSQYXDQ4rXH6FEgCrdGb1GeFMvKBMNLmzvCufKWEChCB1tHZfPWJetsvEw2xJn5QwN9aVnjgVoNT",
  "key28": "3aHuqo4YBek4kfPkTQtRG2gFTrWPnKEkHC1YEfMYFWc19EEpsZiuTyK3uwdXGBmkP6GuuzPWVQSHzX6mZ8xBAq6H",
  "key29": "252XCKw5XsFB6vDjoisE39DxfpRq3YTHP8L34TwZ4PoahqxFgQLbgBHVVP2fF8XrFgWBawwBwVkZeMoFgJ5vxXyq",
  "key30": "2ELQEy8NPwr5TCjtTG8c9e4BM6yY22jsWMpwi6ntpW2tq9i9B1wmSmY6BuspsnbE5HJCNERAEDC6VPjMnJwXqFHk",
  "key31": "5nngZL7o9jzd6rQ5mrq49cc7GHipmgDkU7Fm9tZoonxYSjxahQAbLW7hR79WJvYyBYZbiQ8Td7oGkp1qGN3cBs4s",
  "key32": "4Z2eERsJX78c6dtAtcLEiJLESkv19yw6mZ7rov7hdJtQ1yPvJ7tBCyGgMFKG2nNZNpMmJnJNtFBkFTUc9BEBmYT1"
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
