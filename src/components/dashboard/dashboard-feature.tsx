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
    "2usYjBhj2srFmjMX6j9LxW6Mzk4z7M4y6h9GhWYcUWXvzi7cDRu6m9iqcEFRaYaESrxbx7hHckRXiFHswWLio1H2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Sbkb6kJUhfHeauSWfgX11A9W773E7zHtTNsBQZ32QukWdpPfMQa6kftPhibB9reGe2CE1T89y8NSbdvL5JU2udv",
  "key1": "5X8epKgJJucvvV3xc3m69YGPE4kKz7SDeWFrUfLhHxfgxbyYa7xXhGsujcsGD5rLeWTLR4t4st1ipsoKYiNsSqe7",
  "key2": "4AtyAUSXqu1h6xPM8yfnKwo1Hg3kiigBPWJRjUkdctsMfxcmVf78SPBpdmYAbExKmg5NdTWVHo7FdCamCWyNp5Ao",
  "key3": "2Zz9efsKmzpKniyrmhjRn1Eu7qYcTi4w13JuSBYQbWU8W9fggPuGtSqNYtGAgHfz4MhGj3oGBFio37kd3x87PSA5",
  "key4": "3poYQAvGovzpxzkdy2ck8KZMKAAVr56qmqm2evZf4kNkbZPx6M8LrZuB1H5VUHaHoeEwB55ypinkrp3DRC9UesiD",
  "key5": "5NfaQf2YQhBTBWVdMc85psF8zdTPburDfxtzF61hmjQ5ckNMWnAnimQuAe8w8kU3nBJzaYR4YM8zWcRAh4nHs5iu",
  "key6": "5bLeTckWsQrypwDJUWBVqMBhz5X1sqxNH8AGuYWbEPWAmZVMSMLS5qA7oCa73XVntpkJVyakDNLK1AMMV498Sth6",
  "key7": "2isuCKsw2gj5A5DjsVniBQv48azV2qQS5ML3sP5bbLEcHH1kxn7EiirqSvLH7dLUFW9oJ9Rab31x4mD5baA2fRZe",
  "key8": "mvArr1DqowAutMU9K4veP1M5fV6UYy3SkadMykr7nmaDwW8sDcitkb37cmsAQhiAXy4fK55JKK6tBLfwqqdH2YN",
  "key9": "syeMeWfNhmxVvb73aDWDzbVwALzkBEQiYiFdcA9o84ruHnAVd77egnkAhJvF555fW1rSgFJYTq9sHCT6kT6G71a",
  "key10": "5vCWYifaudTPEb9CJREKy6PD5YHSMWtot9zYu1ratc1azQiUoXpqM923yJ5DJHnNZmTkPUNgnCD8ZCWaDUjqfBNV",
  "key11": "2R8PmBDYp1TzcGWfyuCTpwfHNetgdURgyZu3N6owveLqPwFEJqBzrnCqjYMYa5LTtHJCg9DqPQK8GHMKvWzVteLn",
  "key12": "48jrAw34QJzN7VZWoNHe2W5wEEV1eD8VmpEhYcKj5mgrAxfik39McJvWoSCHMkXFWwxq2QumFbysTcRsWsi39eTj",
  "key13": "2VahQTXfNcDeTV1inUMi74y8xbms32coJdcBJhyeZFypcz6btxK5t6PvC1sg3yyKspE1u5cJFMhRgRBykUR2QsRH",
  "key14": "22G3TUuyTdTmPet9NgwmnJoeXugfZnQEBqKgqokEUx9Aq7sLjNjebNS1Wu3JrQq1Wud7CPiEZM3j58PgXwta48Cd",
  "key15": "4MMyno72A6vq13fYwRYvEDAsTvocEJ2jTAhnVXcekfASxwhSrSUpW1XL38Reuy9ZeNhkz3uE2yixPo1uQ2cG2tb1",
  "key16": "5dvyGbamP8N3vBEvgyq1bBdzX8JY84iEjKnxtwwqbXBqxcr82xa4DTmi5L6p2h8EHtRXm931t1gaZLFkS4ftoW73",
  "key17": "5hnFrLZhUwiUQyjQhC8D7qdvfYvzK8Mee4DGz6brPVEHmWLtnWkL2C69miS7qJnJ5FwAXJdQazaFBxpA6RSRDDUR",
  "key18": "5jP2ieQN2F1TuV8FndTiyqz8E5ip9Qw83ow6zsFeuzNtZxMzsDbkKGimYeyYZvT8iJHAAxxLrbUnrYJWCBhCZoaM",
  "key19": "5aG2pGMpZfMSehKLGw2bxTpGu6iaGwogM65iK4zgofnJSpfmTNtLwRzdhp6wR6Jihpq8q9p4haWoKf5nEtwvzmbD",
  "key20": "4wAh8ahkcw6L1Nr3jCYNBzgFs2575deCLffXzzCA4z2FNBw6wmxsTQHAHwZVi2rWK8VhBHX2KMqUTi6ZZG3QgvJw",
  "key21": "3BmUim9abtraMsGjS99wHAxPsUm4X9eSRBQpes5rDD6cWNGWHF7QTWScSm7518M44WdyXQjxHcRjgBUXSmbPA7vj",
  "key22": "bpj8YE3EoT87CXXNriXqFiLWew6jRLfV19QDnWAqQWt2Gnw6Wb3eCHxp9Rnbopmn25oyzQ3jMnBdbRYJWPaLGLK",
  "key23": "2dVVXm7TsDvoV2ASyLSJxCtoeBvB27HzHgNuiiHyenEo3QFsc8fMNmtYRkXmZKosE5mwWo4JLDcCqoesckYmjEt7",
  "key24": "4a174NmndXdcUXCF7gKt1S1W9gmZkLNAVt3vBZ6RvJgMFZzsu6NGbm1aKoJoB1xSQmpMKYAcPDQJDfoN4ScDX6KV",
  "key25": "4ndyGeLCnSuvJmVgRSbpqKpEqVyTsRLisMDJSTVqBgkpYsgnRXRShLwdQxP24eAfPGVtpu4AjvC7BF9aGPsHW7hk",
  "key26": "JHiBwMQbrSqkzg4upeLe4mXnjNjMTVNXnNNXx8jJke5nmR7DRHkRWZMW4dCcKLMWDfimzWfTUE9qCrkiFs9P6Sw",
  "key27": "4kyLkRZnJqiPCes3p6yoen3YSB9mwSx3K2oKyJhQ7bW6NqRAM2hMkS2mPR6AUuTspcMbwQb7ezU1ZisgkhA4Ff7A",
  "key28": "3kqc6kBcjB76WVD2meEStWgL2Pcn13DfszqsmAAtpmsxxc6mGq53bnaorrzH5S6kmNip511YJCds75kaBtQaqsR4",
  "key29": "3bM2gpLLbuCTjJn8hiTgWX2fnqZiVayoFWKoESLK7fnShB46SYZdMQcwc6oAbNLHmthLicFjyWGcHGDZ3XS7Ab4u",
  "key30": "2atKN5qaiNdRxX933pkRDusaQNaoVwNVjHUZL6CKX4hGx15JLj7gj6nkrPEfZP4r71ZQTHfBfydEU2ZyhU7dJjWM",
  "key31": "5dVxr8FDqhTRTeTATSD3BWs84ATgWtbThVtpVUvLspKJKceJv6JqauDqjCVSi1wYgughmAr5GNJ9BJ2mgg6Sfz5u",
  "key32": "2DpoBz9U2Mr3nn6tHFHxZH9SpscSArRpL1Eb8zmTQxzJiBzNGQng52HFHLQaZ2MyTJwRyyBLALJohNjyKJrbozKc",
  "key33": "2e1NGJJ7iPWZfJhbLg2YauqVy6yiTu813VxV6iaRkU9sLiMADvxbWjYjC6pUcSancr2wRBwoAxbi6Bfcrk4iR371",
  "key34": "2k9iMjPZRRoebM6nwpWnRk6Xftvv16cW36Z76LFhbLg3vZEvenJacHWuVLW2aNNgAP5FsvhnCSyvh5YgXL6k1fTj",
  "key35": "4LPWVmcQbj1mY3h4Dxuqz3LaKSP5hCvcuKBB8k3GiAsPFpKEmUqXYZn6ZtN1qc8mDbHMyCVG1hmsALjnDYMEiQYV",
  "key36": "2qLDd167yJLphm8Y2y8SgjZ6fTeJ4viRG5U3KZJBMTMBcKnngkzA5PAPNhnA2T7TabXjgE1kFqUF5kkLq11TC7sZ",
  "key37": "4dVsDgBDsPMwqiyDvjN689VS5kWXFaSeF2nZv3mKZzDdz4besBX9kA4T8YmPZ5CimcNJkvB3YhwTyFjExNZkmX7y",
  "key38": "FqGe58dUT1KP5YXSJ4PdLipB6ghtUQmqFkh956hEY4qMGyiN1ta5ffd6DqneU23pEaB6Zn4ow53yYayPPXQmt5w",
  "key39": "27UVLGTobCfu9f9P1cpCMGVSZT7xqbFyyX5fTAzTvJssWg4pn7m7UqZH9jaAXsxwsCD95D9N66H9rLXHtQbBAboJ"
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
