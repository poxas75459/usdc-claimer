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
    "4GxwxaTwNC2SkiFMXb1GfeoCNYDKMVp8nwaWhPn2fRADJxy9J5UPQQhVb8TkPEt8epWw4SXMZerZFTwSJbav7DJ8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3dEHVTnrRXxRCtbF7zYEXfvHyZMSH1DLz4aBEsti1pqQgxkjuEJtQNEsGKAwENcf8u9UxREMpDsAHQsDrRoD33zC",
  "key1": "2YmsQVburhdyeiPCUYDFjaCfJbdgJXVXtnUWTL3ShgbePqCWBcz5Tg6ZdHikLBrm8iJnvqpLf6Nzv3mcPfR1jrzR",
  "key2": "4K28uNA4xjAZqeiuNvgbeQ3Yj5snyNZSVyXXDGWeEB6oJcWS2rmr94Pww1pjQUv3t7NKwJFX6EGVnnMpNrUr5Zbk",
  "key3": "42g1UR3HR7CMrJb8Ly4e54JZC4mXJKSnenzQio2wkrnnkoK9oBFH65RFXDWoSa8hAyubMpmdGTxxYvhQmUjbBTF8",
  "key4": "4ryiJ4mXTdjSjyPwqFk171YVu9GBQq9aATDnqs1MVSZPYiopZSn5vePLbLYqcM9HGez6NZo6Ea5Pe8Fcg6tGfoco",
  "key5": "5zCVb3aRx4GxAaStfstgJSmjpQXtDg77ScMKAZSiYtpraNcJMu7oTnkWmPFf12YELFoaaseLAjZNWTmTU7qAUb14",
  "key6": "662mjkFhgjTymdkCXQ8vnRHFwemc7Zf3EBUdt577E4SfDN48AZV74RvcKwophHgi38wG64eJ2wVtvW59x7L5vGkH",
  "key7": "3eQAqNXtaLHb4NMjUCZAhQCWyNrrYJQ8Y9f36JXZhwK93CakEF5BCoswrfEH725Gfusiy5igU7WqeUvk54BDH3d2",
  "key8": "2pNWDaHjNxEEnfmYZe8c2AASY5TYKD3mqkqPRS2CCDCtLG73JDLPrkUapDoF8m25ZyvCQ6z9eERKtSoExDP7fP4W",
  "key9": "32jpDa9pCLAbTfnSfk6vAF9thVVuC2ySPJSYE7KvWZaYK4TGhtD8VaJa7zFnmKYwgJfvm2xQyhiAvf5Ew89RYoqy",
  "key10": "4rruUTbhBy8yvvfcEapsgA8BYeCLrhTka8RYv63NqjWKK4J1w91EEuNxdCDVMYNmPgdZ8hEtXmHP6FnKVF8QG3KF",
  "key11": "5nttc89ryqaoNPmrhXTvHBsvpaJkc7657apGFHL3WiteDaKLfpW3Z1esqcZbBZ3RAxihMmo3jfcxqjHkZStQqr9M",
  "key12": "5BVPyrBtjAKBnb7Tu8pcPpkB9dPgWNM1NsdmBs857UKj7ZVW91xonsjKJ56t3HNJ3qTs5heAh1iZUuqFz6yJnmYY",
  "key13": "5kwY92RQXwVSoJgHJnHgu39deeD5gTxK8gH2DBZtAqxam8uAxS8scJHH6JdTtVTs2XDgY32YGEnAtCFFNW1FvsHc",
  "key14": "5S4SWVEDy2RW99chUCP19TYCww8RcH5GEZmUESRDMvH1r1vMuk6WgLUcsmCC5mWZw5o4i9Nw4DC6rVyaq2oP69nb",
  "key15": "3LwTrF89iXc4ecnxd9pJ3SNafVCiAe6ofuPm1D1qoAQ8QEFxno76qzMP5otNqmKHzHjzhshWubMuvc4DxYCUeU3q",
  "key16": "2bfF7hYjRGcTZoH6xKVgstXQbVHRsr6G5rWJw1AFfCGDPVbYwYm5k51edAeB24CbxEHNpPnJQDpvcwufdeA4DdZg",
  "key17": "28HSyREhX8KM2Xpw9QDUWBvAVuhWyRn1H5Yug54mUGDqt9YBFQfjHsB6F77SKX2ubhdn6YYQaiBpBKHQsR1AXcmq",
  "key18": "21gRLrE2u38e4TrRGPTrxarrS5TXyRuArXzkWowR7o8LgMSmXsmiTeNn7GCLWATPiDyqqAsxiGWSHmBhzhZFiazb",
  "key19": "5oQTr1pui4GPMkYRAWprLd6dhTWQnsjpkpFa4gQbpJzUcrfq8Hh8yy2TsnCdCS3ZKKGwZ9VLXNVXoa4E9UCi33JV",
  "key20": "dAevGREeBjypcJ3dPZoQpy9RAfmcNBkbMcMpUpP4Gq6egnHvSGFXHPodFR4yN4gX1svKk9ZniPySAdk2DjfatX9",
  "key21": "4esc2fYqxCYo6Pwpr5pfvP1uohGp68MvmY5PEVTGXvjQgNd2ft9C76GeuJSPu8TJhcCg6ywHVpdB8xke13ScwiyN",
  "key22": "4p1mwqW3H2fcZwGjreCP57yFC4tD6noQLcinT9QqAXRCgZw7THF35CA4njXPzP1fku2CqAW9B3sKdtZFn9vXcQmt",
  "key23": "57hnSXyMuKkpDQtQjDk7sisbMi1kbfcyUDjRy9Lw7b5kYjEF2gXToZYiytnJYwowt42ooisxoDpiJzbmFnd9xZRa",
  "key24": "2Pw6HzkCgUYgFZwKZUyt9ajz8rtHt1X5n5bKb9CbLdkrDSJsaqyWQtPMxk47juMFqjXV7vRbiJbtC9t3cVWWE6c4",
  "key25": "5C66zk13qRytwe9B8Rpkc3H8CaC6BMPMqauEveZk8c5KwqYNWm38sq5VCzxboz5GTXishhuNQHapVoSXqSoJ3hMC",
  "key26": "29hX3KyKVQsZdNhFD6Q1pJcPsZJdoU46ZkiYTiLo1t3s4CDUo5aVW2mPL1ahSGHa5vdVHhWxf1gi7wXBaBovKiyp",
  "key27": "4cTZ2C5oHpeWzARWUpS1FbwQefS4raTLzaF33MRsnvnqt2KBxE6waHo2ADQnFVP5RrioxZtSkb4TemLtXYXB9XH4",
  "key28": "5B7424gRwy2o2nCw1ycKGKckAgXPgc31X2qvWYXuBUx2vH9UW1GkVjibwk2SUcCPQf4WFiwV7ATKnz9z1xrMNbvD",
  "key29": "4GDvNLVeVVv9E3wFcvcNUmVDCcnNkP6irgV16DdMr8A8xizNFUNfB9LPfMz5J1BDkuA7AdU8VHRTDHeA5G1bxwSQ",
  "key30": "36TPpH9rwFRr8Y5fyPQytB2Kq4fC6aQbKhjp5i8WovHV983FyEcAmm1vJYZKsyqxaPerxr4yi83sa7LpDBMM9UP6",
  "key31": "4pmhBj6oR2emCQ9VZNu8q42nXc9wEiry6a7yC7FEcuZaikQEsHcarkY1KtqD17dbDrgMN6M1dHPEXJpLxwq5unyX",
  "key32": "hi9TBvfnBkMPMVBNfWFntkWkJ6p972xNJb4fMcBAW9kXqbqMZcwH6ap265jQ3AQfULNMuKrbuoe9ekRK4ZzBpwM"
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
