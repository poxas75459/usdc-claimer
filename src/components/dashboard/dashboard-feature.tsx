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
    "4n3uW8BwyYDg9u6jHmU8Qw9W31yy4Hq2WHViur5D7UAeeuRE8o9FtFh2V7pM2JvoPtsak4kv9h2s6sF2VZygZqVf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4y7sqFfBNqLEmeW5WzNyU6d3swNzHfjUaYDgtLvnV98xJagRqdbYqJFdRUSppxjxQbx1b6pDjsK5vtXLHHotppxv",
  "key1": "4JapQ2WYtEhuCiUns3HULmHGcZym19iqPfbciYtNUMiuQRFyUo5WVvXdnDrW88b5Rjgpvp4x19DRESDpEmWQBq2s",
  "key2": "4xeFLtopoJRLUsLuA9ZygmC38zn4KE4ZfzSfm6zS3PPVoCdLDZbawbyx5ByF5nxUWSJTGqQ92tnf29ZM5HQEFAep",
  "key3": "5h5SEnd6DzxFCVZkCt9MBbHDSVTmz7cKtakefNTgJv9mwz9z6P2zWAawNgTkEoqb4N9fxxPcMsJnLafPq9mXYRWh",
  "key4": "129SGs3AUHKtgfgBXsQqLj6ZmLhuMdmT8VoVGFYmKfWr5kkDRMKtoturmAxyGmZUPaRrBkqAFs4aADXSdB1HJehP",
  "key5": "49oJffWuqujmAsRn6Aod39eiGCr6RWAJeSLKkPWQVAxMLs71s3ZKnLGY4WzbqQ6fdChm8yESygvEZpiLceytv8AF",
  "key6": "5RmEiB3SkiMrKKFa2iCY4JUqTSTRmSmGbqMgbaNfajgkhFBLbf9mngoSWRP3HVc9qrQm6hNUGerAEyernguPJdRB",
  "key7": "4QPvUrQBCNg75y4Yq7Kd5Aehtb4XTtFq5DjoxxGg4ZJEvVyMyjRhUkowPHPAJSB3QCK7x7peGoN8dYwSEGhxwG2Z",
  "key8": "8LK7YbNuVZ3A1yed4ekXakjNbhSEFMbcxEidGMVaanaCWSKyEASGCRy5sgnvvzNNyd9d4X15R2gnRoe1uiW4Ary",
  "key9": "35pxgkQLvHtDQpp5r3nyjszaJb9NEP9vRCtzgy8y1kHoF2Xp7Z1bzD7L8aMiW3D5k7EppsUjcbytq5J1PdtGfh8Q",
  "key10": "Yq7T89aGHBqiUS3vR5GJnbeNerswnNgKwnWUSw22Yq8MisLtQ7cuWw2kyFkuMANLsGHGxLWqaGrgjxCg27p9ndv",
  "key11": "5beMu8AYpGquWrWnDvnXuStgGPQrt6zhr6BqD37mmfH9mN97CFCbQihVj9539iUfU5JvhJake1NPDzJMq5S9KBS7",
  "key12": "ga8HfJSboj9bTPKyBtX2Zi3KNG8etL5ds49tnw31d9NKvDhikFrHkvMEitckQZF7KLtQubZpghZEMGVghwQhVZw",
  "key13": "3q3MUmX8mMKUnmfDP3RyrBRqJi2fuULTG7XDdmQtJrbvudN74ADF86zSxgjNSutNr7G5QFdtDuRPb3aLDP289xiR",
  "key14": "3DUY7oEaXZwBjFM2GvxGGmwTdsUk9nGsdWco3oXRQokKL1EfyHbYfcnktyZFdhEV35CYPYbGd2CMmS3iEDKASvnn",
  "key15": "3PEpZEvvbzAJJiJCsm7AcNkGvU4TGEJEHourVTx6waz9uUGotsk9tRqkgMEZRV1QQ28nE6mfK1bQSNuAs7ouKUea",
  "key16": "4KwcDgDwr4nA6z8TLBXmejmHrVEZGrvvEYGyU6CrChAm9uKaP3iMVhS7wrkLKf8voenMpdMVL291wSaqJ28WSgXy",
  "key17": "3AijjzAZh6yVM2euRqLt2MGAPRCdov7EJVFBVKztR5oxeEpkbTwhQXaTmsswUBf3mQPykMnjYcfrnbrkNwU6Djjj",
  "key18": "4Q5f6R2twwHYZbjHuNiYqCbfipej2pnuEySzNHBUXbkYuKjgKQrF3GWsvG4P8q58wS18PwtWAvyZqJkyYHiofLE",
  "key19": "ursYvA2qUG4rBj6TuYF4zHunDYvJkUHfjGc5HgvpHJUJYz135NvyYy3QKXoyD2s6J5HYGMAwgGgG8RMDhkRRy3Z",
  "key20": "3mxMw38sA3sSpjPXvuYA4hXSweuKY2vRDJDfvPsDfdJRG8XtT4HRNchcd1m83XXgJyJwuKVZDWAucBsihcojdgiV",
  "key21": "3ajy65BNCiqFmfkND7FamipbF5YnHB9gMADAcrP7YJm312BpEp4RNs147WFyYrdD4z6pQFgyGwVgVbvWqEce6pRm",
  "key22": "3DLt1fPYLG9ttsCe9tScq73jGKH41S78GgTbDMQfjk2VrCY1fJrHxR1E5LP6kdkR5vsJqZhBFNkQQze4vVE9rVyi",
  "key23": "2fUDrZ4bmA93YisRFYkKS4fnmUiYped3TCMXPrj4qpA3VNdxMXgBL6Aftdy6uxRufUXN8eTUJtdRVU82yB4Ypxph",
  "key24": "2Cr4qxHGeT1Dr4TEgtn9baYR9ZgMnYvP2KjPHZKx9xBRzKJzP6iUvVoRpzeKYd4EVG3KcHTRk4H6tLsjnwxHeuz6",
  "key25": "2crQCgvPwZg9eR9cDELR9B2C8WGexcJuCeSrpess1cGCuas1GyYmbUJ5tix5LA9aJgwPZeRjmZorQmNwzstFHFyR",
  "key26": "3v7Nhq1XH5f6yRdiFc1xvNf7ETDrG5cydyi5dsQfR5hRcQktUaf6BoaRSwREixpK7c9RswfXvfeyLoX9RorfGKjZ",
  "key27": "5pVKUZzGz6iNswFynx5uD8XiyStfrjq2mJi7knypntbGuJjpsCiCAQZwbGfBiSo4nA9rQovtDgjHD5N7JckVoSGJ",
  "key28": "bRAGeumNk761cjUYmQHHGPiH8j8Hn8WU7ox5rjyFx76FG65VsUuTaa52UESXkwbhynr2raQ8PKhQbmhyNcSogoF",
  "key29": "cFnfdsSebkf6ubr6faGxG9kBEcNWzLqWSQGrEJph12mYKsiit9bffBhLg5zQDJgfmFqjAsNnzgi3SjHBWRZxeqQ",
  "key30": "5qRxWs7doPN5zb4WKX7yv963v2jXtA4GjtcuxBejApX5nUZBMubkscgZHiHAaF3YrMQpsW824Er9PGzZU2h5NdHY",
  "key31": "YQ5H1xnrgn6DJHqTnQMM4zMwVSQy7Ma2oqjn3AvVcYX8rJZF7J72TF6AsbshSWbtADUfc443ZxqfyEUbmqBb1Tn",
  "key32": "DQfacKwWxi8WtLZrhV1vD6Gf6DDTK4aFMzTSHnusiBP4HvSJD8f2dcq2CBFG7mB1RBzZomaJsy39dsncQGCP55q",
  "key33": "36Wq9Puy7gdzYswMLq8yB6H8YFn62K5EGr8Vk7fQZ3mhhRjFKecUVGHZhSuPeZZQWBYKKJtD25pi6Phdsu2PXv8i",
  "key34": "5aeyQ4LVWg7RTM5Ds7hVv7GD4uRCN4FQ5BvJ6bkhx8x39H8pU2tz6u5SJq8B8fPGDRWuz6NrSSLEDpP9KFGpoam5",
  "key35": "59B4vw2P8fymqxHex7N3EzWZXmF9ukz49eK3xXPeWqynh924rkF9gobGANDAgXKeiuXunYFJC8w2EupNjGnBTBed",
  "key36": "LjFWjgPdvtJWXDuph9fZM1LuHv1TdXR25fK3b2hXDb9GrThrfKmEuqdeZJqdwPADUU7EY19EzdXNvHa2Yipdmsd"
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
