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
    "4ThVGaDnFonG47j5MJhwpDnwmwDALcqyxN7NNKwqXqS6iaHaLF4xYnf9NtG7Sp82A26Js4X9Y6pqhYjcFgBE8BBk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3SCMoZLsLiPv28jZdxBXjDZExiLKD8mbumgRcke9sisYffwHFu8ySNSsZ3q1u7s862E7bDi4w5nj2jtMcMZPba49",
  "key1": "5yMS1aP2BN6LefQjhaSZAfMGZauqsLdxXHKVsCmJBAMwWEi61LZasL3pkdUQJDbqLfYmdxCXfBMJqZgRB1DwYai6",
  "key2": "2w53YZN89xgZR3p7LiQapaEZ6QpdqRuDmEzkucTf3gLN2wjKFu6xYZ1kXtuxozzg7jWfahT7d1ofb5gXXjZ2ncEV",
  "key3": "2xpQsRjwEBiH7D8UgQT2H9bUuNzaYy72vn6UPpmyC6DR5UMoG8fBuULE7SV8MuxGCkAsK9B7X9Y1DUuLoeKAPcAv",
  "key4": "2T61gzBgef9zRmGLS4wsv3RnPyn9p6VREnprKKSbZJPpkQ2Pq9HCjbh42ww4Pb4o47i6K2yLZ1rkTJ12m8XwFjhQ",
  "key5": "AxFmqo2fCoQRBQgSXH5pfJmpXdhaLv2MydByPFpS8YtmNVfzZeY8gDkTkpN6AqGxrL5CxxskqSSoB6UG1JQFy64",
  "key6": "4HYjHffzqq2zQxAUHfsetNpaj34wj6MvpwNoPMHeCFPuxzQeaAK7dHBMgjXazpk8tPNga6iWHwGYcBqyFsCC32Rq",
  "key7": "7f6JUW3gFdYS17M6SfJBbJB6xwtrAq8exXnLCZdY1zDpyE9qqmtn7y197w7UhaKjM8binp5J3GbZGKZqMy21UJU",
  "key8": "4nfGTKRMSbauzoUUnNYBfVMykWsFAHzu2Uk9w6XHZDNLF6XXkumM1zG6AHJhsF8NaE73aCMLSXe8haH4HAhG4LfX",
  "key9": "4wtbc4gp3RENG8Ty212bhpsDPEoe3g6NmZTqZQVjLPjx1rN9uFSv2nmyLttWj2iYqSnM3dVNet7uogxdwzEZNRjW",
  "key10": "4DhnjAWNAqqMQRfz9DLq3h5LpGinYrYiY9xoV85B58XAwyRSGXqxuZAxWVeASdZWd4hWdjRcDvrpNEhWabLDafqT",
  "key11": "4cCGSHpzVQoGvnw6icyakZNJhhVJFDHqBVuUaVHP7G2QLqHr6Hf1xJPpmug6TdPCGBZciF1epqprUdaBwZj34qpq",
  "key12": "dmuqRpaCm7mohaVbz8VZQBfbTRFiwyQ2SLo25QMGN2Jb9NzXVDZzioFLThxRgvYkmMk1KX9ZRiCKDiBeDpd3kK2",
  "key13": "3sZDBobSL2rHYbzD4fY1GWyGRAtacGGAqaZL1jYdTzfT7VGriuRzvrZPmoAEBmuUtwJDcWsRhCp24ftoXAr6Gyh2",
  "key14": "2mDnpfhhkPrEXUqrtBLqJQFRp3ThyLxY1EuX5xTo1r23sdoGwWcifNnx1D57erDmb3PVTzkatAmNxdU2aexZxr9Y",
  "key15": "4yBRPt1qcG5RKSXsDQJQ7hEhhNxcEJTSbCTyUsBrnzy5eotjKGwCxsGSmqo6jSYkHgxTGkM9kvLJbt3bV2L2gkqZ",
  "key16": "wSJgrsbSQycPbgt7oiRuwgcZXDaFu4NgAHXXJJfuyaKF5bA79ZbegPHPoMNNAZAoMXFZ7m7BVM1HZY2DBSNJBwe",
  "key17": "5wn7LFoqLecNgv1pLxzT6BYijwF9tUKCd2BqKhKYwYTxtgQrPsir4zje2nvU2xAGeekuP64Fy3DLS2pQdx1fVrV5",
  "key18": "5DAh3adN5Z6NDJNBBkbvtCTYG7fQSLuVJuyLVxs92ym37fxVVgh2qQV3n8goUCK7qqUbgxNS4fiKfki9oWqrpELh",
  "key19": "2WTGTQJaDoRzD6RXyFZWKk23wm3MySBjhKbDQfmEdMktNWmVRUiLzpnLwkrvaDfQB8UgtfgRwA63cnkzuKGXZ2aB",
  "key20": "3mMVC2UoorAcx2D29pi4qMx2KiSw3aAnpHbshy6HhEyU5nwhCyxdyp9qQJ7LkQqjkBt7RbbVe5G4cWCZYdy7Nsbv",
  "key21": "2gQtxDJQEWHp8WHRheUix3h4UXzmXceQx7CBiKqQiKuHUkH9X5c8pPCuV1UrPMXgro9D5m7RrpopsQTqXhut5xxe",
  "key22": "5nF4xj33daTGdnYesLPDYUb4fhg7QgX6UgQvQEquxkB3h35Gqs7zvWLxt61KqbPpLxKCHRcz4z64XwF7VbtDCC4B",
  "key23": "bZtDRJpnvv7WB3v3z8HSrHK4PCxWSuXGNx5aXzoJLHmwx2EGBozNWZSxhwXykBxvWfaKSKSPXg4EoVehyFW8srJ",
  "key24": "3dTyrkYPLz1LniN5xtSX6B6KLUZfDbpnzWiXbss8VCdyxtejiwLjTPGSH4aqmp7ri2R9eRbCQN3hqRJwgYVaaGJU",
  "key25": "3JPD2hBPJkcox8eHAoU9RvPMyFR3zJaFfBCDMHNijdvLpCd9GV7YnMnDquF9TNu8JJWQCWNzTdGJJ29BochLtkAX",
  "key26": "3oxiHQwgcDWUVtvNoQnNyn37D86uFefWZ97Bz8unaeZHXPCg74HV51p7etyPRh3uoUzA75SXK19nPF2CkN9yL4wm",
  "key27": "2g7H8Y7AgnPzhS8p24aYaZAQMziNP2URFeTcNn2jRprLHyJh3WdCVtgY78UcEXr1YAudaCMZpNqVV9fpsjmkQvWE",
  "key28": "59MN23fZ3WcvSxPKG7cCFJiwALdqxWhCom2uhpjXXLdaX52BQfpyWftiRPrdQFEuynmLxqMusXH8rxz57X8HmpZn",
  "key29": "2YfjDTKbG6skhFW1DoQeKx4Ev6GXTXq1J3KHXXVDvNg1uE2Gbadxq1vXiCgDs4eRGayGY6VayTafEWgZwqjXp1M7",
  "key30": "jRDkn1J3CeyoH2NKbmo4C82PgAcohaswsuQt3zkPy5e8JuftnpScHaQhpBNU5BRrqLvxmgyiXc6L3tt3xs6azmw",
  "key31": "4tu7FCepsYcru2g2WLYnpTwgt3HRM5XH3BJW9iWN3as8PHt4MNRbn2qxxwBsZMxdX9duvpE8AK4YorAxTHvBWr2u",
  "key32": "4nxwEksrxz6Tjkxw4YT9jxfumDGPiYxthc4B7Qecdxn2TwznyfnHS6to3knbejXLbfTaZAmHbmZuuW3WZtYCoU1q",
  "key33": "213ShEiDNbHCUPsonLnMPqM6YNtUTBWUFvgfU71sQHiTcVGt4xao8khxaS1cAgp6f9ooND98KLVZyphNHdwfn9Wq",
  "key34": "QLMSF7evxXQBH8DCvHYHjzXtCqnmpKDbn54q54nLgCHrhwSgsyFKgWMA6npA5V1vDsRZ5ywwfhFnWcoaUWa9Bjs",
  "key35": "4EtYqS2f9hkqbPfXRQpGUcYsZi23vfr5aQydezBUZAhXXX6AAVspUCbLetQjyEywfjQjJTmnui7ywTFFRJd6cjmu",
  "key36": "57qn4NG87kNkuP7E9rrwmoLugjxnNfmoKUjtfpw4PZKNHBwxsSTBJucvScU9FHdvwsDX6dcHkfJbALrPmqMLxJFS",
  "key37": "4cKZMG6tM8YDugAutKBogBTtQ6t9T2JefEMJBWN7r5PqbJu8bbnheNJmATiz4ZbKkDdukVy2Kb9tHgWkVbYVSEhi",
  "key38": "3YKCDNwGUWveV7i6rF6uSM5SoXmBbM7idRvv4Ywn5B1iDk4ZcDMqKEiNYaVuP1jCr6oTHg7wURWXE2Ky9DNxaAwv",
  "key39": "3hU7rdyXWDcuJ9sg4jcfC6pUUb8MKEK9bnVFgznEdJ65a5JjukkL5sa8R3w734D5Bo71izSmE8gCuPDcmsAv2w6V"
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
