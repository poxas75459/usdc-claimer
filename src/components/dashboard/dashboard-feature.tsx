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
    "5zEzZ6H2gi4mvPzbP5iUu9Tpb2TrbQtJnhtbPR9UpD56zFLxF6uWhaaae5e5P7FgtqeNPddTvuQ56a5Hcspjt4g3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2fGSAomnkvTRKSB7kWmkQND6yJEA2oPzvAXyeWLWCBaYtvh2fCrXtA746XFMjgWXGypKB4Rh9LgsAeiCcsHACqM1",
  "key1": "3WhLQ6RRLSDdHkwsU4HZEAU4NeM8HsgbJ7fXETanoS8inJhn9i9PEevrReKnUrySxyh68RdYmGVU16jt334tH8Tp",
  "key2": "2eJ4ogYbYBR8qjPv8fp9rtzvfABqYnSdFy6Wb6M9nHWGe1CVdGwZFko6RAkmoCYhtd3eFwXfr7ftBTBUmmEAMxTD",
  "key3": "QAzcBzvFWkoSeFVZ6HPY7uKCf2CUD6NmznEzcF4puNjTzjmwa2phmB7WhUXymTftefgABAvogyuJ6UeBc4yQ8TN",
  "key4": "4DXwLoX96Tukz4fZXPBKsXf7eTjhvK14WVzvPkpiXsCRqaGjT69joCrkim3C8fzjxRP42raqGYvzzNwHGhU6aTFb",
  "key5": "2yWwxBygJkMR4ZX6Lf1AxjVTaZ3FcRZeheCpz4zHVD9YUA8sRf9ByzVaJZ7QDAFgJPASgtNGwxCArpNHNzb18xfe",
  "key6": "62dH4Ny3npufMj8yeL1h34Tkgj3X1tivSb5sLUJWPAotDfv9yV1xfvnXatFC58VY7YQid5KeePtKNVfE5FsnbWYX",
  "key7": "4KA4H8KgEARbbTdh4Gxv7e86peAPeG5SgicgMqzb9r7oziob3WkwP6vvaUFkvi2s2khDbtfaKjmT7GVsfPYUsVBa",
  "key8": "3zuCgvaePH5Nn3ViwApzTAnSr9ge4LRPzvDHkfrfBLeyEBRzg6aDZSxakzYrEdWRq1bMUwGdXTbdWYmvkLeUPw85",
  "key9": "3c4kZttb3fFdRrYTQKwEJnjkL1k7rv5PqVdfTJWd23qAXYcL5HknXbqzb7FTJFREVJDJXAeJGJP2xnt3vv8GJSqh",
  "key10": "5kfsteQX3Lpcsau1z2hSJW7qV1gFoFgDvJGtfidF9TNk8m3GGJPh2PbS4gJ4B4Yt4KRP6pBow6iZ5FmQPYaCgqoG",
  "key11": "4PuNvyvVsV2MXkyRstfwpMjpwcWoC6TKHkR4VVDj96UicAmQh4mXRuKzjdksNqf4smCHvu6LDVDVabqt7wikjWim",
  "key12": "FDtV6TPKSXRgrM4keU4VqhguBA61ZofBUbwxt1wKvdhXQLSkyXhbAs65M27ExyhpwNxPk3M9p9PtTd95G7EckSD",
  "key13": "4cs1fu9a8huY5iaC7hHRJxpmT1SsUmNJzh391tTEfsttPd6xyHjaz3hkSUzXPS4nWpEzHnfLHZqVTyuczeQgxffY",
  "key14": "4KyZ7EPoqZQh7AtjskuLc4ZFcrs78MXQKFG3skJutmxCxzZyFYuSSFR1Uoq1ZXsUcMyG58Lrs8F6jk1yCLDdh85j",
  "key15": "2HZogSWh1DqU9k3Z7G2grqZnQ6HxbVaEuUVZEr4figPevgXxRMPfcUC7AhNJgthN4FwsKpTh8F27EULfQDbnjbZo",
  "key16": "3STiG7JKtuaH94Dkyyz9pqAgxLD719EX5LC7MeorLrUjdSTuGT7QxjAFb6V7pJY55xwFKKZ2cnXyH8gf2Kusm8WT",
  "key17": "2ixFFqpEQKEvRSsJPtPVWDqunuJtW9XK99iZWLCKBFMzkGTdNLm6k7Vu3KdMuKiFvQ4ffk4ivBYYzSSYwpm3RoQn",
  "key18": "25P8fL28jft1yvic6WfHnWfiSi55VgkeCVhmKQhGai4KCcQBqrymDbjF3wJ156vVKVmjPh6dmXUA71SVF1sqsPau",
  "key19": "32gyKgXdF9pitTE1ce4zMqbcjg8fz74gyZNopzobXHFvfuriR25bHrAvsmHkuw1iVXntYnTqyZBVz7vQekvybDxp",
  "key20": "42LXQxn3iCSN7JiduD8JV16Dq8qE9VPswurLLHQTEtWamNPUJhZxCcMA5ipGhiLoTD3tUbNPB5bhia59ZEdsibuX",
  "key21": "25na6HYWtyMtktLvtxzT4ekD1h29jiD4G942bK5JUj9xFaVhSbTFNAevaiKcr8cj7HRWp8StWm5yprvVdVWuWMzA",
  "key22": "5VdBsTjJo4thTP8UHUZV4Qr2RPDRPQW355kfv4gfSGXnBizvr4nkUQjGibd7B94mXrMeTfLxwZCNC24HhHbbrzGx",
  "key23": "kzbHGAQVfyvCDiuWAoSrzexpAC9TkNboCzU2wMNWWQbGq8gfa2kNeo49tmn3yt6H4rbLmnwW9M3aXgY8XqUqJ2p",
  "key24": "4pdnXKo4NDDAJVegueCza21cyoCd2ekHPmXYp9bvnauwn7tC56y4hUDJhKxnSFCqLaFum7QxBkC6ARzuogULLg6P",
  "key25": "4Vx8vnDWvifyVuox36JhuB1Y87jYPE7dPrJJoKJR277xtigbjBRCnKsCu4s2Ws4cyrziJTUcXBGkQsyba2zjMvLy",
  "key26": "yC3N8ETS6wVihQDthH8q43v6vbHMiUxo3opGBqUJLdexSHeLtDZQhSp34id2C8vEfWCUdSmEewJgfhbNTncEVRy",
  "key27": "2YAWoCSrEferUBJiUvLg8N79Y2qjZeCzSnX7JW9HXtPjhcfUDPxpDTxwb1CEYfsT6eV5VDSBDXfQzMB4QRSM1qT8",
  "key28": "3WW9sYFs2u5MhvKtN6H2UQpUFbzodhmUUeX6KAyB8Uro99nMbGUTcR8xYBwbfMzGbhb58ahU5PFXQ1pTERP3a4L3",
  "key29": "2CsvMBa6zocCAvMvrw19EWXXPrge9YuXurSbf3QFMdvrHKoTfi2emVWJJACtErKMXhxbfGWaruuKATmKFkthWryx",
  "key30": "4z9DDHy3g7z4fowy8SavkSoSThwmQShuNY6gckE5LaJTAB3EHh6xT89semvjuWNoBr9yhRZegXvKWkeixSbKLVfh",
  "key31": "3oMhvMVgn2kJSgfLznrHisi7nokC7jqiFDHPqacY7CGRG4oki2T3YJxN7NM2ufNosm45RtcZuFTYTu9Sf4LjoXLd"
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
