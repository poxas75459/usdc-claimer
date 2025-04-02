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
    "2WdVUs7PbR6VEBPT1pKciecvyPonEJTzd8g3ciPoYJjYXGim9cqbG4aAiTwBNUe5zBS3Rj8YzLYQ7spALgj3stPn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "fM9yz7NCXJGj1vrnsUJPZ3RxFf2Gyw3HqjpzUEy9Gfs9VVCtvjrr37x4NLYvDNustCXU84bxTYQ1pCtEjnNCdSR",
  "key1": "2NvcsMEnsyHFLwg347B7bwnptyUCpoVRxQgZ7Rpb3jqxet25F1jgypwzkooBLce1c22w3SeSxVDxovdXcTrPDQHn",
  "key2": "4EdRYbaDoZXqWFNq7FPYxJ1nUYEdFwGFF1fGwmPW2P8ifzUHhFQ9RU9Gz13CkF9NEyFidNBi2veSF6Y8wo1LctWM",
  "key3": "2kxCZovQkmdnSp2V8Ei8x3tHcfcAEEUVqu4VN9gTwTQVCDn1rjWjoLdRjML5KJrdm63bEHBLGhQg9sdqmvVPCRUM",
  "key4": "35GbA7B5pYsmL3DRP7ZtEMBfWFHABQB52N3THYrEmKH9CGzDAXese4it4wirnLcbwZH5yPLWGzAe7tiyWo3FoXLK",
  "key5": "4fEMq4QGsyTaA5dxNpkregUVMHZovK9cpH4a28v6stYj2sUP8YcRWcTzJcKZCEhJSVW53axcM3fLCeMJj74ibK25",
  "key6": "2W4UHRcHCTMhMmvNeLEjjxQhFdRzNmVqumbzMKSJX8wYQndbB3g1QsmmRsaZNuQyQ8Bf8wKStApMxPgHLCkspW6r",
  "key7": "3VmaKzVJ1ooHa5ZxhHSQSbmzo8xaosoqydt1iqmBK2dPpCyve4G6Lky3BbFZLGyMLNoFw5yy7UdTZTqymaAsNC98",
  "key8": "4mdc9TUiz6Yf2LSzeES9Kya1EaP3j9eLrj29LJPK5USUzCkt1jsDZAdXY39yFBpGSvi5C6qHgHYLcXbepHjhz4vS",
  "key9": "4ygn2UpJ4oGLoCdBk3z5yn2dBKvkL9VuWcEbBGGyXoyPf8UTEP7oEKTjELA8dMBP4D9QJRVQ9mGPFnGXTcGnnsYj",
  "key10": "25DS8CFmMPLVXP8QAezMfC9ms58LskmRtYKzRHoP1YyuTZ1RgzaJvvTbKiizNT7PygWSUCwk3ZGTXmbhy1Le8RVW",
  "key11": "149G1H8y8biQp8HVhQXW7yKkwk5sXksjwr4iD6FRpBeiPNL455FTKfaR44m8CfYAndDdmML1iXei3PuEbRtWDiJ",
  "key12": "27P2YY52nSD91A76RY7JtrQzRzjVEyZX3oV5kDhJ31tw2xLRG74GFWTRkFwjtgfD2cbQETtcBD9VFu48D8fQskD5",
  "key13": "42vDMwS2JYqptxPgFfv38Ld6UY59xLAmuTVCELG3XutdxFTQde92jE1ZeD3xRp5yFCYwLM6n5LAvBf8argTzDbQj",
  "key14": "hgVSUCLsaoyvDdzhv9gbWt3sus7iYHjHAcN5XiXQEexgmCV4G5BHmdXqsd3C4y5WvFccJqSbd7CzKA73WobZ3fx",
  "key15": "5RUPL4mgikeqivK6qjahUWtaFEXJJKqZWAyMrUTNJJXogyjGyHTRNH4ncL3msqqZmAWdVAkebUR7vaMRkPir96sK",
  "key16": "5JkEN76a3NcBLai3GfqhvTTYHK9BRYKR6ZDsPm6oahZtYNf8VeF9yX7xbjebueQ19Kap9L4e19FtA6ahFvzZL6ui",
  "key17": "4HY3FeGuXNbFoVEPTHwXhtv7bL3wBfA766XXNDHxZxurTee89fJdLECaeHCmJc4ETKHBbW3ezuKYZYg48t89SFJW",
  "key18": "4nB5ieBaLMqAt7PS95QaS18hguji6EB9Nd7JdtX7vZBqhmGaMZfVqx9nPmpFZ1BExu6hTbr1LB12eygfohHy1N5i",
  "key19": "m3YLVtkiYckMHcMoSsGCbWaXqRwYCvjDHWorGw6DjSerxAaeZNfgJW9iENAkaTESNvQBKmkEiuQfCtH4H1aUXXe",
  "key20": "65HHnHWgctwYLU5eg8bC9szLbmqQUNdVgkmnvfrQ8Kutqe2kcxFEAVbrUGjauT5gAihFY5yhdrEfJxzQTiJdP2BM",
  "key21": "2nkT3BvhtbB7rVpTRFZgjkqSqeAVo47rRsyzsN5Dcyop9GUxGb7SRj4rgFX91DvLbkZFbKNujaxeoQPyYtZ3i1vs",
  "key22": "4sSPk4ePZ5cNXbMrSjjykhNqEc84eJMDT1eMEPgT1zQ9zYLcyec9Wwog6ZLGy9ivaa1RPBZswfrgKqdY51xyK8t4",
  "key23": "aCiniz1F8skBQXts35cJWh3DWKSiykF16eMbVuUEnsNRngdaqV9SVQDf6z2ZDG9W7NJizVgSduysgMzhmX4NqQc",
  "key24": "247wnGkp334HY6VZ7CV91vnUSrHoYYEPxdtgvLqkCzt7BBZKYpLMcFZGScYsWUx1mQZVPTvEkDGzskHc5qQKVPAT",
  "key25": "3if4ZzMJUm7G5Dsdgvv9LoyihvZkvVCxvcVSGea5Rbpj1mkKQJKb4EfMdHZc9pomGRdsft34pk7wrKpnJ5zcen41",
  "key26": "Riok7KyWAUHvLMKsyrRsuaVKWNUHtzPvyj6qxMpb9kxKjsp37oP8BiEvJeVkw1JtxcMyc8rb5zoL9jRJF49Xvty",
  "key27": "5V6xxyEdhf3enE7yPGYa8gBCRbg9if5y8Q8MXbXpF7dWfNWLWMHmgyoWHe7S48TVBWNdAP3BwrjzYcWLAaKXgqGf"
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
