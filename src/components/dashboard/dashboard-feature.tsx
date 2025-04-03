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
    "N35S64Rue6kgcQuZ1aajqoASSXanqQQo8ewg5ivqoCUMz2ZejAgVQRoPM336zJjKCz2MAc3ibhHWTPuEVYFKqe7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2KPBhGKBMHddwNr86FjGWATCTBWVJzaxz3AtEnLiQ4uZqEWK1gz3ELfAkYMVkfN2a6beojdyKjB8xxStR5LyLDvy",
  "key1": "2xPJV9zeWhZYnotefavUmKfpGk1C7Dcia5gkn2aZk3p1uMgnW4toeFu1HSUwFfBr2xR14x7aPBbCBQn8cS3HKnJF",
  "key2": "cbGZZY7mW6ptgAQbmynFoVyVkGRbVsQd7ev994Jb1KTpAHKhx9XsBAU2bFZuz7nBL6XEf9dEwmH4HAHj62949tX",
  "key3": "3y96NboWxhw8hzMvbxfKVi85dTj5dUHtQynYU1baH7LmfPbCvk1sUp8scKatGQDXQ8vsTsJCXiiVkLFmqpXhXcBJ",
  "key4": "3X3AxBJgPhm9ezDBhzg6MnHAw92yFXiDJRpzRVgL7tkhZ56qhWKU9Zu1kU63qtRWCTythWGbTopcBqsZaAUVgrJ8",
  "key5": "LNTYr11Lj5iBXacU3SqM5ydQq3UCY9QzcXgcqp31nWYDGv7Ua8PpnPfya2Zh53H2BBti9osrbcSoL1GtYtRuL7H",
  "key6": "rtpPryC8HA2Q9JYWCZiKXk8GdiUvaMb6vpVeh76d8Nb3JhDMr7Zh6nUHRQsXDWiUfZwQR1sKX4am8RtT5ExidPE",
  "key7": "4m4iFTHaEFUeW9933yrCtTpqVbio2yoob8QrDs32x8msZtFK4SgzH2UApNEGUxxEsdsppZkZk7MMMmurpQRDNMTZ",
  "key8": "4G4LmNGobiqg5rEC2izbWHFNiezW5Lwwp45r2NkhaE8GuJG6HRATofbqJLYn5deKQtUK7WDz2mBKNNK5vRH1fCJf",
  "key9": "4JhThA1H2DtjYZ7TzqAskjkjZ56QvNPAkAcZTLhSyQeHjgLRcn9iK24W3xxFg7CJmpmy3mFUz2cjJoJ4j1GbQeLC",
  "key10": "27bWf75dD6ye84jLKTGupGxKhCemVvSr14vX538b3aS8XZbpg235J8aB4A3PbgLT73HhHtPBAc568enVEJk17AXe",
  "key11": "3rb142F5A9jXTSWod3xGCXGT3HaoNqniA1GQr3rE2X3NmeTamD5orXvShcNZgoGZFxE2WWthEGjmk9nuL7Dvfx1y",
  "key12": "4WdW7FNbKPfsm4eNfteKsuVpeSrb4UGnHioxqVLiT1255kdZsMbeU1whU9dhAXgQSPUqG6qkirEzFjCTf1kuKbfM",
  "key13": "31Fbzhaty6vmjWLMbx6dAqyXjnMFiJX6MiXQ4NNyrSqmtFr4Bbgi5UeSnfAon7bWz9PqzCcJ9kvNeJTiCrVhZRGE",
  "key14": "39AMZLegdETNSyhWHyMuFmgM8LUJRiPZrRjQ286tFXjJREse1m2HLAGpWGzAPfdspF2mSGueNABBiZz7itxufmBz",
  "key15": "dfvYxhoi7gu7KxzYo8aNWQtnkvozVcHC6Eb3KNY3ViGRnxx2g9Ju6D7AnXEbQWAtU2WZRFh7W8fojV66a2Qx46P",
  "key16": "QswdDfPPpbiZerHaMxVXQVJrveoDNpGgik3yrWrxS9XTx5D5kRHZXgQZBmwd63qz1YdWDw72gUzbJ4mzKJ2K9ax",
  "key17": "2XbxNGZhqsEdpQbmvm64nMXFqsZAebf42riXXCFyf7VuZYGD7H5dDhvRyDRo8FacpjHuavrsfG57RjL5uBdmY6xu",
  "key18": "4ANPVNXKyx618BtRarDkATTh1Dy2tMoCCEQSZNddM3dEUnGUBws7491ssQEZ4KxJjAN3m8kUionEEmx2oVNDUSra",
  "key19": "3KJzU8U7WzR7iBDDn3NqZNF2m5is14YxQ27mDS1buyBjHzYygA8dk8Lp2kCZtmoCoFby1WsgKcRG5VWxFkyGySEV",
  "key20": "5uwgkJJ6rYP3S6Rod1mxh6oU795T1sEe6MkoZRVAP29vsU6u3maEcp3WkSNVKAAfmaha3VUUgHXuWgQFBke1CSBp",
  "key21": "2u78QN3YEGzCpGwuYAS2Mej27fWYi7rw2NTb8AJFEM9sVD7e2F13ZzTSvt7bcGqcSVnsrhDjbz8fdbCorAFR4hVd",
  "key22": "3WmCHjY2yRXj9veA5FUg7SSQ7BQMYpsSHqyxNKFDGpT4sHYS4MTEqmBK4U1VQXhWzoMH4ayWpMUvmjUVoJQTNe4u",
  "key23": "3Gvv28FMbZiNasZ6tYapx1kwPtBcNWzgGimUk8VULUx3hXpDngnM4AnKqKK3ifPX1p18iQrAAJpQriX7DXpexwCM",
  "key24": "2zCCMdJZAW3gzC2tLwi1FFHsaTrrELx36Fbdwpw69inGPXyCNzZWEaZ5WvYjCHfCvNqtrNrXBRbUcJmNXNSfCG51",
  "key25": "5NmVzhEkkxa7Wv41NPa2mMMWkY5Y4b82L28e4cdnbaWQ7bj2poFFW7svrq5DoPhZbS4aBYeGR5QS2Whxktqf7jnF",
  "key26": "5H6hGdDD7xFTx55ZhAovPd2auRccDd1McEMSRL3Fn7ug9X4EbqK49DXRJcF5ZjdP9ck8gz5fhpHWFGcodEpYaLNk",
  "key27": "4ZgLrjRMy73EtxLhS8W8bN3iUixeoaEEndLi3dp2g6eN7wR94ivhAxuVFHXBLiMoqmKr4wvNgsVTF1zqMxiitsQ2",
  "key28": "3Ediyk5aiKS5d1iVrhJvuZZf1MdQBEyUV92EPgooKsg8cxT1BxDpwNLtPv9xdBgePCbDKrYeRPcp6sz7wTFB41kz",
  "key29": "4ZnyGq69YRiqoSzAGyi2qEmF7wWJvoqs1NMz3gxbgXkcSwaMnHAE4suYX9JU2bMi3JRpeQDMR7arj6wKdJxW6DV9",
  "key30": "2txebfK6MsSRmQgxnRDTC7DpN1pZ2tS3ohi3MwewCPwhTdcdD1fbH18HtLTgUiaHhAyFxo3b3xYFnM5ZPvj92bgg",
  "key31": "34LaeRkw8ureEQtxALdJUptXdagUWbNVr6G57ZwSowRYzCzJEzqxbrDehKMc7eu3DQLYwvhtu1x5jipghq9QBQEx",
  "key32": "4TKx2nhQFNuQYjpFbry8J7dKUbLj6S2PjtBqZMHtYVU6bQZQot5mHPghr9zrDE3r8Nj3N6aVbFVNxdeCKZwBgKqm",
  "key33": "3cukzCZJq9KSJKP6pDE1UzHVBqxG2NWJ6z6r2jGfva6cwEmwnV2KiEn8X3mNw9sQjWHbWNuHQcnoxTm89LqVYxX9",
  "key34": "4W2vCKDMSFsKeHjLF6GvnjidGSqURWSzdBQjEjo1ooUjNEmRvHeop6xow3iiyDyt8NWa6XAKBQ1toLQ2frRBLKhQ",
  "key35": "B1eU5JkUE8pZV2prExKKvFakdnLbF1rH4NXqm75QdgkGPoBuZuZ72YbyrBsL77fnaii2tQFRY5xPuqezd7CN4LP",
  "key36": "4WWUU1aey6krihzzwPYPRioLV2G5kCdagmuVCLbTFcmdHCMYWmdJ2N2EdHvpNQzF2erUzYQkxZHcuLXzbHcqCWLr",
  "key37": "3i6EKPx5YdjHH3JDEJKn3CFhEFWqQntwVSVuuBv4zPoEZRQDf9VUC9NUab8UHGweVBQXLdWj7ur2HV8MRxHovRrE",
  "key38": "2mCpQowFCVGDiHuDU5tupH6w1FSjFZTKRbDmuotk2hqRMZr7QjdBvZ1CjqqSvsneutnZh5AcrFfMvhzR8uBiF1Vd",
  "key39": "5hqvGbAsxRFs5aAAUyU8t7Us1hXoe2LrKGeCXpbp5HXaPHK7KBtfJAP92pBNZ88m3FfuQD46tYvzezTXq4gHuktv",
  "key40": "5rBuXmULLVwcNhheCBEwhNLvVDiLGfwXfBhTzca6UyELkBYfQjZLjP2h8wbM7hEFfQZhMYUeWmnfBWaCYseEg5dF"
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
