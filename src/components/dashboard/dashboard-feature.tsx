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
    "5jTKYarSugTNyDJp6yTU4BZTo82MMGK6XdGxrwkFH4gT6ovZ7DYwAzYQQ4WoezcF898sWugRcB7DB9NabPu2NDhU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5wVuLg3dJzFP6X2GRa9LYiPuHANVwMGywZeyQjVYhm5aDgiigPM1x2QwqpFPRDXJgSmTgZ8XRY7hnZrLUDMJHj4U",
  "key1": "5c5ZBFQgYGdDjvYCnysaGX5ubKjeQD7A5rn6WBrjhoFbhUhbE5vDiqL8uoZ2VLzfEbw87V5sz4X5VSvmjmrbv2av",
  "key2": "3Rz9ht2e3JJEazHeBBqjLfkJq9TrECrWD4sGmYMxvVzo6SFcqsruAHS4ua4wMh2VnXT167Lg3onSBnXRiJxZqWqz",
  "key3": "4wMGawm4DYzM1oV6NuzGD3md3e3ZYKtZEeEy6pouj8cHXASubsq6puAEv9WiV22DLNTkrvMNs3bf6wnH1F6Z3Wp9",
  "key4": "4E65BUEr2xUEh4TEmGJ6g64XumHBAvdBsa4Wk4P5rdRhMXiJycQ4bMFBYuTv23f9Du2uYFKtv37m2cS2DjAaSu29",
  "key5": "5ZW7i3pN6Pzb7FWxr9QZt3ML3b5JQfr7zZhU7FbaEx8d9nwrg8dWKen8qFgdJBgpTsueJMTqU9JDvVSJbLJWKiZh",
  "key6": "3yGwsySg4ASzZ5kSFmTHWdeZ9MN8gkzygPrsGKE4vboxtkfifJDfq1pTndmA7erVYoHZer9qJLLEDGQVtfYKSwQ4",
  "key7": "67ieZTvoMe9HvMRmdBXL8Lj7Wuzr4HizaKoSXYdRTKiRCGrVz78qysfNtWkNTiQ9dqqf9cqVmQHqVUUdLiq3SYJL",
  "key8": "XbZaEzGq8JKBfJU2p6QeK8KNoFa9Cdk1RV8mMNwyvGA2gx7gedH1ER1hqbypJ5nCFNCrz9EwApLRJs43nbyeZrp",
  "key9": "2X2VfT2XYXsqREvZwWLDoLEBzff6A9tL1Q6U89s2updPv2mAN4wHh7VAxaBzai4LjW54Bn17fiuPoWSPuZR1BRZe",
  "key10": "4DHsWFhqjwc7u6asaBQjCDbVqAaUc2HqqYjGbbLkj7b1zXWjb1z7DqJBMYFUFZqcAu1tfxpoL4jnAchtyWiWU7Ht",
  "key11": "3zbKCjrvwUfsnLTMdcE1uZnWRAh6LcSrASQyBy3HbrFcvv9M7wvc6SokGncW7DnHT6qREy7DQr85zKVqzkcLK8VJ",
  "key12": "4JwBTVFrCxayTWfz35JjM2iNKXMJuQpGRzXPqB2C84hv7qTpUSh2aqkiht2KjGZdmyXsDu9rYHyUaa9BigMikqAv",
  "key13": "39bMnTcMgPHzsA9NujMPz7cPpeR2zhfv2b1JgnSxrezmGckSZqfAyAtpABhD9BESH34qDvB4wQTu3C8441Rk7ziX",
  "key14": "2uRSHNsAd7hrWGKgjc869FvuWGBVPJpR5mBntCGikGWeoknMYA6ApoL1sykGdDozMTeBFW4qBozpYUFqV9HvWDaz",
  "key15": "52SpNQ1HF6GrTM6uzZtwPAH1rfnFtFtxLEeGvthX227qvTCMjCFRVL8Uvotb87dr7XhyJAJMVqiAb8mLFAMXDfdB",
  "key16": "P1ui6tiBQtxe9qAj9Jos2wdjweuQ3yVgwd2DDfazvSzRSXRSJMk3WaXgCjoHmMEUJEWMvtukeRY8FTkZ8c66sza",
  "key17": "Yb3ji2zVN3HpHTYQnoqUr5SFXxhVC52WGnq5dSiLDkFZzyHpYSnRir6JxnaJLAbyP1gRWeuP9NNv8NoNS1NXtPD",
  "key18": "5ASKBMSUsqnqaErCQUivoBSvkd5LQKi9FtSgJujcHyNtGN3Tv2UCqCRzyH3QkiUKDpDGmhkRMbFSfQsS1MBn7z8c",
  "key19": "5KoFssKcuFD4F9PdAZLnUwKvFi4Hc4ZZH6QZLPYheVnjuAzkembKknwsxBJ5atxvLEmV8gS4x9TPuPpq1LuJwC7a",
  "key20": "3am823E42Ln8udRJ8xEkbS6L8Dj39Mn7Q1zgoN61gMtTEPMvukF1yLgXgUtBjTpyGi8pmj3iMPjuXBE6KQ85zmR",
  "key21": "3uB4PfzmKN33FnC6EYHCBZr3Md6jxQ1NwgdQdUQfMdtqPrhbJ8JNCrg6ErP12mXAtMvMWqUWwJUXNsHBiKNx1CaU",
  "key22": "5TdezBpCp9iBZfvQF1kcp1HgPQpKbcUSJ8UDUn2aVKUncptVjWyoQge8S4GR3RasLJsL9zXbw28RTQQfW8pftFyX",
  "key23": "3NywNFydqSozHasfqrskuqRBZ9qk8CrMNu3KhreKQa74VEhCUAouCXWbrvJf2GAZj1WGmA5ZCqCKsBkaUCWqBCWv",
  "key24": "61ryJUYCtBuzMBpB4H8QThkW67aEn3e5AZgcnoi4iB4nwxh87rqrB2yvBaeN2SLvdHrnw3HC8vPUVsbzgzdw8HMd",
  "key25": "5czGunaBj3YsGUXpCHYdA5PqsadqHSHUrFsk37Qb6Ni9LAUWTJC68pkpDXLL5NTWM5wCTCJBjULJVzqEQRZwryNo",
  "key26": "3nb82Pm5fkHth5XG4Tr6sGfap9dF9LXBwfW4opp5LJfho2rwuULdtZnhLeMbLtQCFxw4fT7pKYk3CPCUTSZRBCPu"
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
