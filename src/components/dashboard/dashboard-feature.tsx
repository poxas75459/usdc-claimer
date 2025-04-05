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
    "5aV13nwkjFbztu4vPJCF4262X2RrFUvAD6J6NRHaqMoJN5cCpHVmsRDSJvQMfKUiRKPqgnrcbKC4Hv8QdpHg7BSW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Jc5oisyV3mWbt3pdLfKTARefjruKLAKpY24LsvsNb1WxgB6LgJaMERc12QRfQGcRWtwK672z7SpDRBAxArJwCYK",
  "key1": "3PDsX8UTm5RbqMqTgt6UvjahCXrAQe7197WqGjSXLYrn7SokiC9ZAW8Deppsw1jbc6EhTEaze3KPWGZdxK8uZrrS",
  "key2": "ahQy3ni98XKyKFqU58QSC81dioWngWj1k7FnwA6euh2X146GgmPxCLfNEKUUutVdJUpMpaSK2QRJTqyBpWHYPsW",
  "key3": "2xDpxWuBE5BT8cvC3KXUsKbCoD6v5rVCUepLzEsrTDfJmhksCDrsuYKxvPaAiKyCAGaKL8Z3y7GYCBE2g1kjAJEC",
  "key4": "4LeggCYVoFic6znHYG7mnvfCLQBGA1oCWTF76qARLBJaUoq7N8FCx86qBznAZwavUnnZViBq3h8MzNxN1vnf7GJY",
  "key5": "5nuFYcFH9uhsfz6sFeJBgmDycBaHD6jnq6hPUen7Dsk9a96zw1LUHE28cr96GSttz1u7p7UrSnzxJiyVYgJMBZQb",
  "key6": "4GPQdpyHSsiLphjQxSoAHFAdpQ699uSuNmw43op5xSyhmnj251AyiJ7kTMyERtfJmf4u9X6AbTQTHqiPDKscV5ew",
  "key7": "2yv6MRLzZx51W8Z8Ux4kaQxZRu1QU4TtXPiqs5jomQcC5cfkN4XeQC6S1dE6tLuf7v1TtrNq3JLASxHfW1yaMoKW",
  "key8": "4qU6tGXFWL73dnsRVNmS3fwT3JRsFXSQbzyeVKsPz9UkV36SmfD8bFzjkNuDtcmMLUcYmQ7r5Pu4e8VKVRErrc2i",
  "key9": "3mUwLcQEXS8QmjHKcQdTwsrWMiUGSPkWJREQvqxrt2cG74vAu71YHtdaozU2tJ7t5Kj4J3A2wJHjydKqaSbZPzZ6",
  "key10": "3p9VKG8aCQbkqu6LzwZfCkY3Cq79AP26Y7cxtFxuQ4YksZ9LHThnssgzPxEmmG7R7a7zTAR7sBtVikYdJK2NJ5RE",
  "key11": "46t26YKV3mQBQjvnLRt9uwguhMdnxNF3Z4JQ7pCzMAAVjbbtAkz2hUXUHM7v67AW7D88GuYgHAXTWb91qPs84nF",
  "key12": "3WZQmqPUv3QdPbbhMkWKPsM5WYkgSiTpG7vNonGJqWGEvUkq9f2bH4jBiXNh2nqHUJcjy3Hm8Nbykrv3ZsArvTsA",
  "key13": "2R9Bym9rG5Jug8hAW5Eo77i8Yvf9A5bh3o9fRyph4Ce3Y68QuYkx4dR8755suFENwefxtauQFPBDHorfN3RBAVhn",
  "key14": "3Eo7wzL2FXbDg28KQuYNhccwLyRf3qV7VnT6FWUVtdXjur4W77cN9Arm18S4EDo3f21FbaXfTLDU2LQHDbLiorXU",
  "key15": "2La81SKyM5akudaeknnN7YY7pM2TPSfEuNsVWzwoWRDprxA3RfGL7G7zVgRGob5SUJ7dqotmMV5b5ESqin3MJtVd",
  "key16": "8fT15hqsFm1W6qC9AjkujVcfot2unjF7WwHXb95y2b96ZMj7ZwqjYbkM2b8mXToRrSTg919okfC3RVCaT3nwVx5",
  "key17": "y8TxwkzT3mLFB3bfjtZJ11Hkth6rL7Mr1VAem4xi7U27PQEYHaz69qutaKhD1ZadhZ1UbRnch37BZSPHbrzPovQ",
  "key18": "5F5i867njUEfpjnQs84aNQgDSD83XvZuovzjoKjjESUpGXWTPwm2Q8WBLGHjh9nuA4SzXwW7EuXN3cFPs66Vn7Fc",
  "key19": "3LRnSRSy9WHBcd2hChiTG3o3ZoqoFuo1o2iMZn6w56CHxG9QciAR1AgDXkusx5qLQZuYd9vVTBUc7uuDWRAhQf8u",
  "key20": "qKWP64P2vRVa1o9wR3cftbxjGW4PQv6tiA78uyuBxxR8wcgtXnHj37smrDDZmL8XR3YD85Eq1VcEcVmPkQoEH1A",
  "key21": "2Zqjn8Wpw6tXY9WSWqy6NZafSxE2aosPKx7P6zpZGQgC85SJZUhgbzqhxDpctvDjfigMWPGbJDCFSRx1TvDwSA38",
  "key22": "3bjtEWpxYDXABP5seBzS3ZXqxaECiSdfCeiTjVc44S9ozZ3mEnRNaEyxgCoy2gcz87bTtDn9PGhKHzVSYc8nSFt6",
  "key23": "3rmXXWZw3UPadWC6ofdWAfiBtwDazVjwceTTffnBP2UrnoL8AkyCWVD39q8nWmtoMvLqDRCMkjyN2WYeTTiwKFpZ",
  "key24": "4qYu5CW6ovd5X5PgBDxSpj2nUnbKRKTat3Duj87fBBY4UK2gZVsfGEU2AHPMx8PFxrTnysGLZt2KpQeRG5AERMup",
  "key25": "36G2VR9kFZEFSyAJXXS1xzxG7HcAr7pDuBC5tVTXEDu93UEZzrTb7J7Hvtxjtaknf1o2KcwEiBUrWLvaYeP8QJAU",
  "key26": "5Z51KK2W9yHhGukzYBY6r55itgcFV5Ui13LpnLTatmtg4RazUcScZzi9m9ejXuYXcwuEEkB42YS1J8UKWANgWTXH",
  "key27": "5dcqNLgrUaPfqpFK4KCvQaEcK7Efj37uqezXa6zQJLjm9m56jQqrh6zsrdgRZt5FEiL7DJDeK12GNuwNknF6xTo4",
  "key28": "di3FnSYexaD1frdFntkrEqrrkXTuxxpxeMfH26JqqUfB7EprxTKJy4k1JxiXFCPXCWiCwr41zt1N6tsWfLVNYoV",
  "key29": "4ofnm99u56CyB9zE3NeNVwPDsDg2sDVs1FohdcJAWWZ7ZdXpZRzhVZqRAkcEpiYkWkRMDKjgbb8ZdpQNxr44BhLn",
  "key30": "LvBsThoFUvdpVsK32ucFQGiggcaJEsHAMwMEjypKMnAUWBCYBNjeLqworoxC7zxcStBpZp7ai3sMLbCURWGucYc",
  "key31": "4rN7p6L7g9T94Wi2rTNB41bLfzG1aQw9pfUNHPE7JeswgPushKEhnNsxzZgsh8hERpTpRPvLvkJf2JS3XhSXwPFh",
  "key32": "4tKpqWwR64EL3dcLPPFTn4MkwyNf6Ky8bxPsUNyXs7DD9xAhv5oH2Mnyn9dbwurCzSXVyGPnG5nYNx4f1Gdmxgk9",
  "key33": "syeMfVp4Uqsk3PGShLcyEAwGTTv8ontXtSV6iu7PyFYV8LttfcX1jEqwThM6qySvEtEthuowRx5xVm51KAUxZh4",
  "key34": "bD6yeNhKjdCVyt8UabBo5deT8mHC7w1dk4rBqNTxQ4gsnhvwhsQFPYhmTEVXMRZP3MJZCADWgU24ZAXD7hArXir",
  "key35": "oJbnRGKks9bGY67w3e3LZFFWKUAspWVwtqAe7yopzw9r2wMoafLLDrvbSYcLnavuYToBSTc7qQnE2CvxXE6AP3J",
  "key36": "3gmahbjuWWQC9mZRQCLzax6cVyRVcZysDBzwaSYtWE87W7YhZ5KoNtuWMcy6mvNC4fRu3a8GwbMALwF8pggf3Kwv",
  "key37": "38xZbYvZXnrBVLXZa6TJHoNyFvBStTbnqf5zMydPS68wxfu8SrzKJNQLyz864RzWbbakSgFGsMN4Ptk5HucyhAby",
  "key38": "TRbLMUqwFKwXadm3ALst9aq8TmfPDATBhxGbLrdd57tidgtU4J1d6p9TbWzqbWbVW9G6iY1ZhDqBxhHty4gMy46",
  "key39": "5xjZ5VtTBFCUuDCTLHC4Ma86rczddYhqbWmtdrr13bJCnqHHiUS3YqsaBnAetYnAnzYMRqkdbXHd711Bd1Fq2nnw",
  "key40": "5hvhoYwP1VukgvP8wwur66tgcKCo3pLEgH7yP1W8kfHy87RYQJN6rbz1Bkq9oyWhtSE6yWLUPHXmp1V1mHVfMnxG",
  "key41": "1RD3qYk2DSahoX84aKLng7q9qdNXYrXTu2tpa4kUdQL6f62WSn3DqvZbZySFBxqaGXaz9zT9xNr7C2n2DiSHK9d"
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
