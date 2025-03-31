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
    "4yDMXJzDjRkuR8PdKJetFs6wbBKNqQzqFnGKG22ik4gGdbMyu5EjQQnhyyrVvCg5pPfTbLe48BCXFFpsq9UqgP4g"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "emvwAb4r1AvdjQ4GywFziTvxmXWqsKsN83rTpst5x16b2bkJsxxHK3YPfkpSa2KD2VyWWyhs2cZQ9q1XGgvhyjH",
  "key1": "b3qHu9c56CLkfmY1CWy3HwRTod9jU65YaUBX3LmiNYxvMXSd3pad3rha9hYmw6v6eMFc3QLUMsUtvBRLEkC4qc5",
  "key2": "4hyFadUGJGjKuwgHZ24dYuTiNWyuqk2KC5j56Foc45B4Q4VkMTvKtUTfCuNcf1hc2BTi4wQ4G2dXgRBirpDsZao8",
  "key3": "HFAfg6oY7Xx8dT2Q29eAQtqYXtVAqo4FvBZTE2neQ5WWdeQrmKC1FFoZ9MeAsk1zbqEtBpU3GqYYx7oGoJinwuA",
  "key4": "3QHnKEjTVjJxsii1YmGJv6MDhzYJX44M6Poc2nHcrcQFS4YreNouwTNWxAJXdupYMXUo6GSyV2MSB8GDsn4ANpQB",
  "key5": "3KDi2d1StdyTmKBHdxP1NtuwEKkVvPAgzBTXosxGYupAz3XmM5zEyS6xvREoyG1swUv8o6TZXPXToX7jVHGbJ2q4",
  "key6": "zC3WiSTT937Gnce7uZPezDW5rmgGBxCuWtwGJGTuTjcSef95yk112FFyjsqQrVUFsaoWz3L8ipxe1tUmCA4cmjM",
  "key7": "2mSEfexDcXPF1wuXGrPNKY1fXaNhP5cfeHSgc2oXx8Syg4Qxu2S7t3AEusnFo1Yjd9nz8pqXqZy1bfJhyUejcu4e",
  "key8": "63d2ZVBW3pB5bkKBeR98vzCiSjQnJoHtm8TytD8EfPi6nEvgDAkB7gdCnMCgZgSaT9n4gykFv8yQk1N2LrnCkNNk",
  "key9": "mRLVhj2Upj7fDxas3YF7zv9yUGErNMrqfepTZbhzGuGqjbyocz1Eqt7u43dqVHts6vo8AeEBKNcUyoJRrNZzFks",
  "key10": "4R6W1Tt4PByPHzdFGe6uftE4QRVXAbGW56yP2uctQHWnSZL5qFtqCSRY9bUe9nz2y43cUwQckaT4cJ3Ya9ep2sCs",
  "key11": "7HwUxuPCm2csJKArtMGmdZxvWSYMNHgJMJBMTqJvyNL18xEkat2S5AnUL1JTCYPAWHLXTVaWBLxpkGDf5wcETGg",
  "key12": "tDEehjxgQYqicrQQAWW6RRn5gLNfm49NHhgqZWpr3GXWgb1FcdCmgKphVTiFLTyRKbjg9vGGoJtLQ3AyHbaFRoH",
  "key13": "3ZkdPbpgZ9VURAiUwvwG55NWs7fKQ1r91fM5D3UFBkqDZCgZkQPXM7rnrGb42patxbcjQWH5K3EG8ZUVSdpfFnF9",
  "key14": "2SR4zMFY6u6j1cXKnk4FEeuTuQVqYcpkeMHYHkmG8bRG9inT7UXXHMoqSPi5SbPNLjwoMwa1nMQc1uoxSQepna86",
  "key15": "3fvLAsWPvghzoESkGdj1cfGLYCYyWDKPSirhkcotphQywMKAAbfZKvtdgdCfVud7wRu6JtJw9tDb5w5YasnNWC7f",
  "key16": "33EvKe5SDq7DDAfQa53pCZh8qAV94DwsSH12db3nir4JY44WGMnEjrotyLpB9y7yatsU2nkSJ6KH1Nbf6t65mjYZ",
  "key17": "28awGQanVhC8zFBGzR7vdSbp3nKqHLXyUby2WfJ61qkUgJKyoP8EjG5eaCDqZFx3RVyz5q5Vm2vvLNma9irgzAVb",
  "key18": "2wGDb3sh7XzAbYRW7otPhhj24LzHUW1FhZu27ZyC4kuj2F96X2jQ5nDvmd5wdz2fk1LtUdjW5L11SrkaW4w4YN1C",
  "key19": "4gEaNtHoAqrztjiwRhjvP2HFyM1xKFszaTCv5uUD9zKk1L9JkARXuJN4wTskdrt8sqDXuqnfxNoJKYeTkQky1FK",
  "key20": "5mHLDcMEVYj6kL4aLGUX1RoN2y66Pua4rsmQYbG43noULhojjWHqaqcfjKbSkWrGgCAoDhbvgwbPyeb73feYuAQi",
  "key21": "4AktGHN8UHhjvYELm9qNZtjDTfjTRcetsJUWNvjdwaJj5iikcfb6AJUK6hC4MbuTkf5FuZJPXyPDxBz2SE9sgHxv",
  "key22": "5UzsXbJDXRrqpPPpDfs7jxc2y276ADWYuiKFMdENsBo4MJxfAktbVx2rYDL8d9s1NMeptRKQS4UrKeGm7WA3Dq18",
  "key23": "2KA1DvJQJtpd1YdR7UGTTiCAp6nvTf5csB7NzKq1asvtDbHv8qkUBKZvTnAWoLgsh8KsHHJmfGTa4b9wBbDSPnos",
  "key24": "zGgy5VXxXMjBcHKYd7SggRTUgk1DhdF9EFXEpNDWZ7KAQnJyi96s5asup6RZrXevM3dguZchy58Tgqw4x93aQUT",
  "key25": "iScNw4faUcfGHzSGTFRLVpGkopbFoEVnEhZGytyMLJfp218ygyXPGZvHr6BWjupvYofSyHoTXahJ9zU86uasQcE",
  "key26": "5M2SGhjbALFJvtUiTEFw8FcFBdeFusmAywBK7tkNKVq28p89YdrwpXSs8LDdPS9RsmRd832UEqfk4rRGkiPMzGP1",
  "key27": "3kgk24EetpDo1mnaTdLxiDJAeaqzJbu5273VmHgKRnt5BrbidkWFqbobLZEpqF7pCmXhFvB91F3yELuurSHNb8V6",
  "key28": "4K1qA95QQTZBcdVxzQTP2fpZfduXs9aJLQXcV1fdTPGdtuv8de2YguJUJXzJdgLwev8Z3LG3oZnWeLNDFcpKeSy2",
  "key29": "4QK7S5iFw1VWu4Wu8jCPMoruMpcUzytPrKveFnrrD5kLPuDq2HRFXVYBMabkrGbfiQxzS4ye4QHMSAARCycGEtRV",
  "key30": "3x58Pvqk5cTp5SJss3owUv3G8URwJTu9SMfwB5c1PXvHXX6aGhTxz3A3MLYtHCLKk1rNrtfKgyUwn7eYieGguhSk",
  "key31": "5P2L5Yw5nWz3Guw49FQthyD4mQQLZ5YrydGVqkTg7uXiW4o3wwzrrHAuBku74x9UVwQ7w9fjXrf9QfjJdKCKXN7N",
  "key32": "5MsezYtHkrH9ZLh6o48Z5ueJ55VCBLUX3SHJHydi3v6NbXbfEvqyeNn9FpYD34Y8KQArjFTf8X6YhgGEPTUiheaM",
  "key33": "4mAmkA5zfTDyAmmAnjVxwo2QkKjWJX4wTRVJvFrjHjtUHDyahGb9hqZ4s3jiES8ChPEYU9HxavW61oZ7FwK7sPxw",
  "key34": "34qCqdE4XNaVKnrT778cvJHVZeGTzU1ZuzLdeCKjF5dE1jiz1KTUyJvEhhN1BouKu6eWhZdcaWaVp5jnjpo3Uo66",
  "key35": "3wivs8LJ5xkE7AVVDv82chs5YCd7D83ktbd5a37TrZjN7nA1KNcfRqLZRCLG8HmFtUkRXX3fp5yKNRne4AqssUZQ",
  "key36": "3iN44kNASGgijTd2xXephbqRnMtmqCh5U8qCtFHwFAC6LEcK2qPJsC4T5FPQarpphgEthVKM6H4pEBqh4rPmSxdD",
  "key37": "YRJCgYpKEFdNr7NN83kYX2ZzLQKEQk3m86LammARraf2yGYDSYPLom1FNcfXQzbDc5qaAWnsTYNEYd3boGmRp79"
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
