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
    "4WG4Aev442scwChvohKKwoeyrC1SBNiBQNtEGmYHtMeqmBdgGrLqPREnsBGDCnVUCLTaW8kApagrRULoaJ1bWtmk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "qQhU2HmcRHEFJmTFN2tGaN3RpHpgP4rwN1kWKkMLFqZ3HMWwFw78xUXdk8LEtQMgdxKBokYFRSJ3XFEgPvrnk1t",
  "key1": "3D5ffaez1xZAnCXzU2yFaprTUjHKksLAfv67WBjKzfuhTYWsbTA97SWavsyK8uu7uXEqjqERpwVjNbhByHUABuUF",
  "key2": "5YV6a5GAe9r6cJTxTcgJEiaNxsWRu7RCTDJriWREbtJUeNJ8H6bTSuH2VagSLvwJAZwKD6UgWNkCb4Ho3fJ9ZjBd",
  "key3": "3MtAGKKN6HLRSCUAjH1FprTJuJK5LwH2h21Lzewaats2Fz4df7W4wyfGMYzg4Poj5hGVvxFpHZg4Str9LXAFuNu3",
  "key4": "2tvoMBmWx4UuoByZT7aBr31oJtPDr6qxu6Lf9xmcaYGeeZSukGGfc6hysVjt8zQKYobXSAZ3w7nspBCYK95BTW5a",
  "key5": "2hgQnZZo7tiFJLx1uBmFsE8YEPvjzv9wVeKvrLrnpmXFiMREvpy7zWd2h8ZRKYgwTZUiqi7nA8Ncp2GyoutT6LZr",
  "key6": "2SfWRSZJ4VCGbo7mAr8BSzbbTnRgJoBdHHFwhFk2adbBSFJuZmEheDaC67Lhd2FfWH6NcyRmAt7xtAaQwGktiG5H",
  "key7": "3cAJ2uQxjE9opdef15Xbnxuh9EhrV4E4qNaFSWzkPb4rKN9GLDsNEkAimc42ePPtB5FLkHFctvTXJJn4cC7HUETo",
  "key8": "2Fsch65kzNxvtYXHsEoMHiNSEHjhoX3DrWU5hLgexehf7UvgyNQAq8G84yBitwPdCr7hhC6hGb7CfcivdGrazKfv",
  "key9": "3z2uDvY4bSNRS8xDb5EiMevRf5nYE4DNRr1iG1XB3626t4eLf8YB2gjHcRZe1bq2qiBSNWwjg916UKCtQxNGXtbU",
  "key10": "gaJ9M67oTGsznPSa4dCaU7Q8YehDN5QwnGaZpJ3c7pZWdViXZu4sezmLX2kmDkPDaRLZi4U6RY15Nr1hpRNEKFM",
  "key11": "2n7j3JvdDJztCUyxJAiegU3HGXBEHfMQ5zD2kcAjnjrG1MucNFtPQyv38MFRHJEEyBacVjAajSkTCwh26C3YXF6b",
  "key12": "2486dx5bCAwm3yK8ZXUUKiEwNhVZz62VmivGbpFLgpDHH8gFXWTjHYuUeqbptEAAbwWiJ1hSmZMe76F5P9idtWRF",
  "key13": "3zBcmZqjnKCNDgrzH8M23ZqyhnALtoXzKA1YrfGTNGi1icLqRv8NiwtXvMxaxPT9DVrdQGKVqfPSrCy1eL2MPhW8",
  "key14": "3MDutPvaZE3evZCCSmMvCoUgyRrDVQz2DV59if8xFWbwarAXnJuTxuA3YD8M96dL8gyx6bQQMvurvAEkADFxq3EL",
  "key15": "59Pnv2j6za78WvVsV1Be3fEGUC8aBA6C6yStJbLVnpcfXFdGxLUYdZgEssP4K1z1NFR7xCCb6YaHSDyZ5Xt43NfJ",
  "key16": "3bbPa1zDHJRDgiMvvwGztsSosL8ZLRaoHaRRDDhFck46tRGcT8JPz9hWyT6iLJSdhJ6NGd3njvByZiG78Vk2km6p",
  "key17": "shJ12RgS59ya8SAsA5PKPVJa4mVfMG4wheHo9gQ7D5h4hwiUkULe2sutDGiyQ2h6sFGcoSmRswbfDyHryQkCL2q",
  "key18": "4CA8FusRiXZvZgZbzBeGEiJFZodXnK69DnqDH3yosLkPDonCbqCNTgj2T2SaotqyPKrjZnpDR1i3c3FFQNwnNSF4",
  "key19": "381FgG39WVrA3cWKqGkEmeitVqxuFm9JCxTiYwRiLoq1tE6wZQe9rGCGYsm9BT8i3xgGz4u89vrviCyuQfZjEkxN",
  "key20": "57dNMfeAeGTyd7VLA4D7a9MZSqpy2GibmUwz94wxg4Nz2iEKe16TkkRHxDrzSSgz2AXjBMXnffvZwtCueZ5Tw5WC",
  "key21": "3NQ1QE9iRTBbcnkhpJu93RWeLB41uapfbtEKBM1Z6mi2HUvvx1ovHRDJHnsVTbgEsSwXUdBqVefaMKKgFToefDMK",
  "key22": "5FqitMZ4HHpvep4MpQBf9gNFDXYgovB2A64pteCEjtnoDcf8GV8dFMSBxtPg16gf48aA6FwSCbHrnfYCayKB7RNf",
  "key23": "2ggydK6VJZZKY9gEbBW21WPqWxpT5jqWXdhu8MYheiKRVRR4aEAf7Xn6KKFhPB6KX5WCdNVioZb83YbX6zjbkECo",
  "key24": "24VEFWriGjB3nZwKWfnuvyDK3M9TSNFFA68DNM4Yss6pF663eX4HdHFGw2FYtLWynHcGpbDe6eG6g1kPqBvop3VX",
  "key25": "2qfWtNLpsqwCgt27sucu6TTEotZJU5U5Ype8Vn9rF7tNg7ST5M4EsGN5tqT1MWQhyf6HAaA5tgZXy1J7GJbnJyfj",
  "key26": "Efnof3QSxnhRQEmvyvxSjwVTQXKD6W52zzXsRFK6tkqxFrtLVZgYFDt72jMdrrJPwKxavrTTQcwhHcHwKUBV2cK",
  "key27": "4UwdHh8tzbtJTMbPv7e8hg5BLM1npJqdYdWsmiVjvxv2QCTMEV5M74HEBC7QrAsVzjWvqgkRZg6XQszkHAPXSYpz",
  "key28": "2KL92K86o5jm2rakjn1szSfKLEWgBMyahq4wGusHjfSZEeMuhc7ZEWQABuVuKKwNe9eTJDhc934qbNn6EzhespQj",
  "key29": "4oddv6roJJXrY4QR6w7wWZhAQiCTL4dZQmeqtVadGMAuaUts19foh8WmJbgM4QEnd1VrKrTYoAWg9BLRHKdDUkot",
  "key30": "4a8KAFo3iM71oLboGSbPoFS3x8CpNSHQPNPDTEX6rNdry3g8GQq2uZzR6EDD9Kz6jeFej6kVkoCEXrVuHpriSjvK"
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
