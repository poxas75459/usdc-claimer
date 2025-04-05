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
    "cBVVApS1yk81CfqGJ4baMS2fxLrV763U1msKoc9UYb3gMCzFxd7i8WzxZuN5PZcBQ9BovJd8duge1Kt1ArsBHEv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "33DLNNf2xAVhPWH5oe4SoiHQavRmJ3VbzQvD7eMscJCSyp8KQ84bUjwT1LZeTfEyjCsJ7iVyhHe6cyyxy1qGFoKS",
  "key1": "5C2LGFtCevqqcwQuxtd5M8zBw6fN42Qd7FJdwYbbozyfCY1tbyB68mqfC2anGeZR7o8aXq1rT3McyT2DcJRWbVVo",
  "key2": "3sHFz5aJ83HW4Fzhd728vYCB8kuyzeqnRg8Jqz1tvqyFVYYfC3EiEFuhganThQJqsPZgGLkkjQu8X8GVXyaYfzzd",
  "key3": "3KPr65fxMtPRnti5eZwzBLPGKhj3zQ5zgLsGQnRMU5vnoJCx3jzymkpEAcEZ8eAVkwWvCwLw62HtBTKiTLso6c6i",
  "key4": "5bNauvcXCgHLwbbPDdN7Lf9arLfGrfk5Y4XG7FX72hs2RLkCyc9MaQB17fVgHV59M1LKehXCvGRj7GmPmKBq2WSz",
  "key5": "5EJCPZLF4Vpgxf5rwfYz2KXjUEBxppWQu1wndzLPYnnui2Wcwb526n4bjR5vYzhKHzdNTmho1DRjEy4tBdkUgX2b",
  "key6": "5bzuzgc8tAk2Jgp4YCgX7tc8guuvDrDshjMcUDcT2kHrwyeQ4o1Uqu5LkeaYSbnGMU5tWx4PmTWJBnQUVyMieizc",
  "key7": "QZZ75tBbk4BVrGH8AjtfgyqVAdsXQXG7mTVb4vaph4QcLQBU6fVk5ttpu4ZeLWbFoCLyRGgiC9bxYtQiSyDNy7R",
  "key8": "33NyEmEwqkxrqTjc1H6m81sp15oxPPBwWrQzmivWUa99k3zY2999oyML9fPBLeSo9kuKHE1X2Juoph3kfc33AX6z",
  "key9": "5HDmh6HRsGqCPWmGPtFPQ5cnAjhz8HDiHbaJc5nWjSwpuioDFp6PjTjPE3nQdYJYg2xwEeofWJ4atKMHjsxf9wSg",
  "key10": "2bmsteS4TWN3VMCpXV5tR2EQnGVvCnWoRcFGte4a7FDFSiaupM1sUrFprSVn4pakvSbChfD16aRQaaTUe7xRTjBu",
  "key11": "36bjcrUWPNY5rkseXNEUPxM5S8uzakp66RjNmjs9Dz8motbWBYrzzNxvzBEwmiQvD2pXENGRiJHKqCtbRhV49Q3G",
  "key12": "5vZYBGtetREUkYrAQTRSuLuEvopKp28eCD8WNXedEAXT2wsWL9TBAH9sumdqEDV3918tH8NwuL3cpFjVuctpAhoL",
  "key13": "rajcu3zFuj1tKYNFUKjWo6mmwkHYnW3s6T1VeStRzi9p7fME2Ci7GVtWJqeDamsZysoS3pERc1tXufu4qpvBHow",
  "key14": "5K3JeBZinZU2rortM7eEqwkcG2R7XBKwQUnF5PyjjNSSRj1j2LtRZBDjq7dCvD8Kphwfi8udnx9dK9uat3kdZgGh",
  "key15": "3pr24H7dRUkySQ4v4pXJMdj7inTBKPt3nmoLdkn5TvTJyec773o4QCW1qDwn4EAoKy8peXQtZUW29GYntFkCs4Wy",
  "key16": "4s4wVwub9sRDzCSUAo988Bg4G3N4UXyqEQHwXRa9qxTupgqZrPoVpDEmLPyi7U58PPZtiXJPdgETRKCnvsGVSAhK",
  "key17": "41TG8xrymWZ5Jbx2Q341DGYF6GiJVN4fmLFrSQnbNbxJuiAD5GoMnCTGsnFkcWgTvq5EbmZ76GyyCG2DhnXyRVXC",
  "key18": "5g16QNrgswJjVKmFz3ser49Z9kYkXuQ6rA4172pUyAtfPshaCzUoNMy4ixLbtDbsZ5soa1VTXKt1hstxu1n912iH",
  "key19": "4kXCQrnAttttg6VWoM6fWhFwNMQF7P7hgUw8aun6WFHNwv1YRGBc544MnDMjYduarQeV7UgHetHTEUAsR18nP1Ax",
  "key20": "7dZUJCLj78n9sCofprUb33DXsEdq9CvP2c59xcSszu3mjhEHauoaZxthGWxANp9gn3JT4vKe2MLjee2sHQs8WKh",
  "key21": "59fmhS2vwHuf2VUTwaZqW9zucB38bSH59fqZaRkcBSxvax6y2boT9QRm5P3DLzfktoV6Uu2NB2jsXbeRYPa3PFyi",
  "key22": "4k1aRJJqjjxsqiusoXuXHM5d8u7iMZSom9s7nNW7PECBDcb3qKpeuQ2R2GuqUE2ePWmGJqzAoZ7ooTGV1C9nhgyp",
  "key23": "yCtRpELnF4qah5TvSEQofNES9aSZfKPsetafbFeyJoJG7feyhzNz54Hw116hfk9qkLTaH2ZjtmCioe9SZ2CCAAP",
  "key24": "5HNASbkmRhShGY91iJc4v9jdkK7KDbdSgXbmqi1KK2CgGXPBzwt3vjrNuRBukHSQQYNaV8NukdK5swv9xF68CJpo",
  "key25": "3o3TYAHgcaDBQ3dezj4pppzCmMU6rKYEmPmokdhyMDgsWJvdmxs1L4N3oA8nD2nVKvb1EnuhdJUnXtpJJ5Rm3abN",
  "key26": "LGAigNwRkCM5G4fzh4tSipeu4xR7PrB8yTqhLvLZjBjJFFbjzMuJGSeoAhHDCUcVVpYTaCieD9M94mXYtDEsSwp",
  "key27": "2NGkKM8cREtgz1csULN7PMFq38hHzKp885hSkj9fGATd7M8z8ehPNz7rvX8YWxvqvN4xUSMXdrGME7aZbkvCF9LY",
  "key28": "34w7hroVrzhdS9iMBhpWZyVUreW3TeBwFJMf5wrhKvmgEUcLBnpWwhmk4SZwvhQnDE5pRiXbDbaDTmFVMHbf5L9g",
  "key29": "45mp7GN4cP3oZ3Xx3sn2EfPL7iCniZLpw9VVeVAi1qLu6dyxjU5g7Laf2NbA27EFFYhE2Ehg65aHzchMv9BoSvMZ"
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
