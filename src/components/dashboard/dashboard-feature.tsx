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
    "43FJxNLJmWWBovSYkHKh2aoPiS5gqrn72VzGSm3NJVCgrWKctDhHMxKU8Cage66H6jFMmHJwbXKmmxfBZcHxv3Fu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3SzGjseHDp8QHQBKpZtZbEH4J45SbWuKPKVy9sHkWk7yJiBE9Mx8bf23T5mM7hvZD2GPfuey9xRyrdYHkCKYd9uo",
  "key1": "42vasRujHs7oavKSvbY8KdtQikzjtDWHr2447hJzu8CMQRUSRLtSezmjxoiWLUW3eL2zkFTeRq4P7t9TiTtewaZZ",
  "key2": "4Q6Y1GsnPZiMuqT1kpkcDtYniDhZNTA6GnpKwMJXFuQHbnCybFvtvYdYu3RsD4w8CYd7pZ3cWYX1o1VDvckZr6Ai",
  "key3": "27V4JVT86tn53mVkdSYUmCzDLq7oYspaUrUiU8PU3t2Ck9Efqg8ySSxba78oXWPqFJk4U7hUSxUKCYDd7cZ5t8sJ",
  "key4": "2PN7FX9y4yj9keVSyq7zS6aJchcxG9Xja6QoHssPz4VdwJDho1pyGB6wC7q4PJmdjdz7RKkVD6rtfHuBsdX6SaXy",
  "key5": "7MFmuuNnue9aWrPMBda86FFxmkygkSTYHR2NscEvhWattZbS4X5cv2QfLMhkysfuPyrKn7VasUa31Qps2ji2DR3",
  "key6": "RzJECNDiuv8N5mDf94tBktXZKv4kKsvJMxVEtu5yRmTafnGP6aMBkcwDkUJieKLX2TwDKYxU5ZRwf1rd8hZ6RcD",
  "key7": "3SGjnLGtXRvyx1sy8GiXD3B2Qiojaj7JzLNZ3fBkgBvMRfPRLSN3Gc9v6iSoGPzn4T6YbZQDJCmDVyBoBYWPy6Hn",
  "key8": "cidhPKgwuPxm65cMSFovEML4q5AnMsbstYaRL2fqPGPR5k5jbv1MvCJ3rMswkwNhGuSzmpTGP12HCTRZ3G9d46f",
  "key9": "DGYUhM9b2e53PCd9dYuQr8kzMUiWzXKd2WPpDPfm3oUQCSamhS44UDTCPNe54GTyvSrW4YqYzGMRutSuMxxnseb",
  "key10": "5XFw2ExNU2QGVpbsguGxgy2ax7JwQkZorAcfPv7oLkFEtsJPYM4kte18XyuA9sm2BdfnxqnYKmPbnnyUiUx4QTYT",
  "key11": "DZsJhdEofrCrT9swn2a9WfV6cEpMprcyLnKFUBS9Pvtze25AuikiW6WR4dLyAG5VeyCVoo6BPvMn4pXNMGkR8kx",
  "key12": "5BuakuWN8f4tRiG9SkiXQChwAjEhdN7PvDQwiyLc5B3PCqHeHsZaouR29eFLBSnErpkstJQLhNsGH2Ve5pjXdFhz",
  "key13": "2FSB46s5S5qAtaoR4PFk4VXMVNRENydFmccXEPhEvadNNDw5bK6HLjKD7esuzNgCpg2u8WxrF1vGJPdrAhtBB8RB",
  "key14": "2zQWMD77VyRw62Fv9U8utBE2WzXXsNRkcLFyr8H67R5nwDPC1uSkjy8w2zY6A4U7xBeUnoYPN2Z1iYGWG9u1GoL6",
  "key15": "4Huwa1zegjhBwPDU1nt3hv9BGUzivaHy78RCnTXWKLtkQ98u95ZpvvAPZ8iZaTPtjRmN7iUri3k7xWFYQcJQbqZ7",
  "key16": "5XT5g4BEcTkHuHXHZ7mt6DVKBpbfdkgPcwWHF6cmvgMUtzcxN1xheVzn4ErH4PN71JhNjARgugtNspCK1Txspzte",
  "key17": "2GkyVXRJ4yrZWAcB3F3qVTdkpwoU68Gj3Cyzrv5pt9HcJDouMDef1xY1Vd5JJXrVcE8FwbD79jutqKJJRzLeh5GJ",
  "key18": "3jVNvrvdVnPhSMoxBRX2FrUBKtUxQYA9xpW4R3atMBrfaptPTS9sveBn7ouwroBcLYQU73YgWvBVWV5L9fKNo5ts",
  "key19": "67d81ngp7j3febXTBDQGab6wZwPxyZHSYDunZa11K628HX5emsC4CTWi4jZRJgZAZ7mBQJPMXzUsvnjw1d7oEHRm",
  "key20": "2teCxKxKWkj86tuN6eo5ktRZ9sJSby2BsXNMRoiGhw1sjJpyDwVvQbWuJnRLVoHiB2hQPWvRrzNvj4j775FNh9vV",
  "key21": "41MxWb6G4bsCVBRWxppWXt8kskvAipLvjmuFEwZLizktNhquiCintHHWxCWkNaD782DiWeXJ8rev1ebUJ3HEJxfK",
  "key22": "34sg5TstAG1M9ry5dRYr7Bq8oAsZjXS9NSQDjxtGqbRKKb5bfLepG8RC95RDyXx8tfdDysRP3iHdNvkMynC8zGFZ",
  "key23": "3r53AndnxNXySE9YvWKNa323WWsVaux1et6xnQAR3RnpDaMuyQFgCBni55VNrLBLWKdaieHc1nereqbWzWdJ25BW",
  "key24": "2xEDFiDbXvkiMA3DgQXFSqomzGs1JG8aiz6XWusBFn4Zk8WuaL6V2cyNUjTucb58NfvXHw9wt1oH8QR3k8pL7JHD",
  "key25": "5sDB4Zb81RhFgKwRf24AqwWUxPfujFV4N3SRcRQc4hot7CYGSd29oz9yyBEbGsLRv3FrjZmmp5tiZLSoMzsqKM4F",
  "key26": "5jrCtCrVwPnhLYHXV4L5FJyNbY39noPbtDvJJ62Hvf7uHN4oAy1a5q3CdNvqa3wCGowZypNFBAvGEBCME4sEftq6",
  "key27": "2AfDwj2GgctsZhdZiy7BGxkN7L92FFoxyKCLW2DJZnKaLP9s9Zx3Ayn12mmioYS7dPQYHJcoR8927mL7U5dH6UiS",
  "key28": "4m8VyRmgBMDtebi7f2RGRxVts6WyK9GvtCPFaf2Srj7AvMYcLQJzErW1WrgAoSRUmPngFq2SDySskbZRaDZ2btup",
  "key29": "4dj3VHti4WPi2KVewYFTg32PBAxf9USDoty9iiLh33wCQZTGNtwV4mXVkREaZiJJw8JWCw1WY1iqKmUxyZfzUqWx",
  "key30": "3d3jwncscDJAdXivHwkPT6GfYtVQSeed9gQEG93vsaA3ZTUA4nnpib2PePecmEGoFb7z2pe2fZV4mNDo1UbU9gMq",
  "key31": "3PJHk14dmBcuGuLf9gJYFxMaTVoEECRxwZCTxhZhqySuySvjnt77othinx1aRH2pHa8rvd58nzFH3aWAaJdMC4ZP",
  "key32": "2KnMKCEXAsgXJ5yzRuWi1YfTEwDZSU6GnURHTKXpZWUdRFSECwKrLynnMMQ2FNNDU29CA9cdj88haiHu3GQaGNni",
  "key33": "2pEMsKU5nYSAeYQBzoWa77RvBjrV61Hb7nvd3Cjv6PJBZ2XNy7WfF1eyFvDHY7Ck5Uk6DoCMYxDNuMRTjpYtyDw",
  "key34": "5pa9dmgVpmsJA2ZyrGwAPWd3jnSNCZ4Hc89yYREa8SG2DetW1V2QK3xxmbCSjQ5CcYU22c3WwmGtumHviJYvXphY",
  "key35": "2BCMdh9yDNYErRXKpMBCG6ogdk2Mf5Xfm6H62C9i7VGhNFdcXFacHrX45bJ6bsshujEptM78UPK7zMnoAmQwAvuP",
  "key36": "62G2TsvJHokAtiQTGYwuBfcAQjo9TTjoBXX1jEVobojH8youJhr4RPgjyhaZdhvT8k15ArnAJgRe4HbgLm156b1i",
  "key37": "2QQ5DAMD7J7a9Y4yof5sqPnRfED2nkKX3s3dT59T8Zxt1PAXtWDo48q1aif2yBKoqQexT54pthJRDfzpEQuYgwkZ",
  "key38": "2gSU1gsSwz5mmEzuYfuVrzumxLgppvdRdRQ7HFX6Fm1pNi3MC1YrQmYuM6fLw7LQWsY1WshNg1YzDk3j5HtpNoQu",
  "key39": "3vvTNAjRBhD4cDxwdL4j9ibFJVJjwZp53suWmYvcTk7SukdgdybGufvcXvxuYxN83vCKo25a3bDsHA7S11d2ouCc"
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
