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
    "5XVwjqPTszJszbFtoZPKfF3UbDYzwbGGnjQQQmiL3uCKvWDEJFLfT78YFswVHJ2bxcikqehemWc43HwFGPcF6dqh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3gi4JSXT7Z4885aUefqxxGD3ojfv9obh7axnSfezwf4GhsoqteWGC5MSFZFRf264pV1tMGcKrtQvQCmd53QD8ssH",
  "key1": "5Fk7nLPw9eDWw7wyZ2ek8BvvVSsC9PRQ1XtNGL6LDwu4Wfmh4T1rS3fafiCGFPEYu5iccKiqV7CxBLCKSuRk12gU",
  "key2": "2di4r9TcmGPbNzL53WKmnRfQFNEabqdbauhMQJAWpqAEsnpz8sz6Ey9UTBP2bPTmw35h1hfk4kQYQXCto2yQChTM",
  "key3": "65vGYtTX6DXGbTNtCK1QMB4hwzRYFMdgm3B2RDJPMfaFHU8ZxiPbcXRRYPEZ6BgT8R6nEzNgsJd4VNv7buzfkWZ2",
  "key4": "5qXEwG53VsjTr5Ss9eqxNJE6K2hvtnGnw8thPtwb6yfjiBQmukJ26PQFR6FQ2YdGxBbgGrtz8kiKgmCsm6p2XoXm",
  "key5": "5L95dJkrJ3NvbtYW53Ec3NHiqnhkzRyBUoJWDd66dFFbEVzLspBCEAwHiTo5vRFwmG84RmKWbmLc3vk268oupX9C",
  "key6": "2Ss4oCc2pe9dvTNQDsNdMzi1n8GgLaHYtsYXsL5hRz5xWwHeNgNbdV4ngp9DwrnHgn2882CkSTBfuojzSD75imy1",
  "key7": "2rXr1F2ddmndJmXD1oFuat5wch7bRvt3ghtXPKgeYtxRN5qDAUw7JrfswDgQ899CVHYzHbdJXiJg8NhfPCaZhWj9",
  "key8": "3fWdD4AQsKgtccuBZrW4DbV1ic2NTrYmr6m2L9YseUj3P3Wh6JPbbXYvvZgA5nLDxSumYAZHaPMW4vbvxcvaSFRa",
  "key9": "64P1Ya3aiNHiDco8epCJciSwypWyjHNX2QLxJeJsxoWcsd237AB2Bzfb8gxgFQAUetCtbMw2DJiuLaJp7vrc9BpR",
  "key10": "4Yx4VTrFEjzQdPrhgw9XDUVEu7T5GtpJBN1FSnuxtKiYk2k7PeyaZYkPc7Az2a4g2x6HKYngYkZRVeKKC3Patx7w",
  "key11": "3KPsb25bNxYH7pi8dqwegYW5sfMRy2uJHvDNnTyoLwd4a2VV2GnrP7Ga35ZsvZ6Ejapu15hgBjz1QKMyKgPuQRrE",
  "key12": "3AcbnscHBpZ5dojDAz1WqeWPPmNCaEQ8nSQi85qt6VMhK5nxTu2gyMM8S13w3Gs7FhfLeVjTdy7D3V7fSt9yQkTw",
  "key13": "3LurwnJmQ6FHeFeCQrB9AUF5A9pyytAhHgo6dYj33QqBpw8hKVd5h4hjBRjHU6Ra8K5w32uRJWoPgeKnKr4dEcrm",
  "key14": "48F5Vp5L34PpXrYU4do1CErqHzG1UvaYLhzodPGUW9m9qACJBQmubYzZ5bKsfQVm662qPGbjrCdG73cx5wpRoj3n",
  "key15": "Gx38USiRh9Bmxt4atEqjvfyVGBVxvY21dBt8YxzFpHJd3QiUkYhB5CXWBxG4t2z3hjaRstE9Tv51sZVQDjtcCbg",
  "key16": "GnmQ5q53z72EH1VDdmtH13xZMtafwGhHyd4KeCVMnvGHR9atPAUhPn4fYUGyNNjTHcyZqQV1ZXMpahBKQUzW1VL",
  "key17": "5EiT9z8vRjrMofNAipemfvRzeVfqUV8G8wpZzVMt6i2VPD3sSoJwwLjewuSCM5yptzANwKVJtVzbc564DEUoyVoj",
  "key18": "5DJAJWF11LTBRErwF6e9drouuLMcNaWXCNqjy1fUap51nHFtDyhRM5AG8WmadU8SuyJSruptPzgazohGTA4yPAL1",
  "key19": "3F3cyDaTDxNcuRJNQXjiBxWCZQHkLbSrezJZkWJVoB7EiissVS7msYivzALsijUqGVmBEGesbehhFU8ZsMaDV3C3",
  "key20": "FR9r3hGjKkVmB91ZjSk2xU5dyQee3kH4vp7e1gBDV7LDcfKyMaMFwFkpeXbtGr8Kq7PuCQmmCXwdJo8KUgmDbVW",
  "key21": "WgGKTYhkVvZXZdWFi5jWyRW7knxT5U3FayK5exQBgrDJAyVhZMkSzZp5gdhJ3ZQ8yvqyHHXvodaQfTxL6cNXJsA",
  "key22": "5G4EnmXjC3PZQTFeZEoAocnkN1RZnQFZ2BkRMWesAy1m7FyH8smN6ZkNpU2PvoPakxpHvuWkNdNkr6tPT5ExUat",
  "key23": "5ACoGUMCsEaFWVouUFWGB6cVeX3j7GkxJxXVH7mT4TZL6gUnKFPfHWnXE43AdMmgfgsRZ9tLimkTq7R4aTLn6CsX",
  "key24": "hCdCLKRgH9SLvq6BRgDx2k97QbQLpqZRY2sq6jo8pjHqcGJ6mNQvhBEECvtQaeJS5kVKPdZXEPXoKNp2trc2a2u",
  "key25": "4KveKaHD2WErFdv1jEuskmuRoy43CeCaFNYZ8qiTpG34ATE2wg4TiTT6Fp6AbEahbXBPrNXsDEBueAoCjUZNvQv6",
  "key26": "2GaKyJbb9AxRCKeb3GjUJNRo6iHBiYrcrPo24aC5NrpcVLgBAVKQxJSvXw2c5XAAJMyf1XuD6QCLqR2uCYGwKhVA",
  "key27": "59VBYkcm7azLBhHBt8Ba5rg92uL59z74TkEmFoV4uGXmqxcwCWN9aULRaxvfUb7eBPvNR4sbPKkvrsPWtDnfU9Tr",
  "key28": "53B4qcb9ga7a5GREXZgqbk6KZhJr47z4BbAxhcKd5sWcJY6gWANTzofNUahVwnV94c8dYyauSnYVsSE44YajQEZQ",
  "key29": "Mu6YZaAazCuGURDq3WXLmejrspyvLHFEg18B8pMrrF8dxLxN4pV4WF4FogMdV1k96yPLL8EjNMTG4yA1y7zNRDV",
  "key30": "2mgiMbMRcatBAj8vLkptJCRhJexuBJSwrYpFLzMe1v6ufePG7YB5yuNMotFiW3BEoxZQqWVCcCRFyZDtQXPFJBYg",
  "key31": "5KTx8DCy4shhxjgYHhHPjghDAVLWNTjJ5s6pmZJtduLks8z1pPHFKtQ4t3hwVWEFjqvafaAz37Aeu1jN5ms7giKf",
  "key32": "ayXsofggr5hWLZV1TDqFrhxHJVTHwkwfv3aZcjquzyo4Q5ArbMusGFBoWZvAXEbDE7yE3Gpo9jXgTckrzv2Fi8p",
  "key33": "4gGHuTp3T1qwePZz4N56jsu3QH3beppXKMYzxwWqcykdG7wyepH1TDdWwpg6327kJkdWKRhxNfQCEd7kmcq7eJUC",
  "key34": "272HYHaa1qLjPQAkydWbAh1rk7xfCu5V3Ks6M3dwGmEfBessz8GjeXVDzWSAW54fuRp84Lei9T1Awd5VMvZed7sV",
  "key35": "3WkyMhBUkKX4KGJuqtEpDAyqj2KsSbVGGLnEPQLJnmK9pkZRencfSgDPN7VCHQRStoxCQZhwQv1K6ZPJJzrh1TD3",
  "key36": "4hVqsP2zaczL6sTBWxQXevJD9FPgrKKKxsWZahBesPvm61mxvmLmivbCn28Ky633uT69PbJ5qVJDjS46Bjb7YM4y",
  "key37": "2d2Ad7DSZstg11h5jdV78SSYGtRUJtk6LoCxGbhXHwNpxtpB1iSvbv8aDPTucSq9YGRxsUPyNJkAbR3QheRkm8ej",
  "key38": "2RZcKYcNhsSRq4UDbdsY1boxgh1HCxokp5E4xymeXQZKpBkLKaToNoQxR9nrQ8aSUmoedGpbCw7QAtUzbwWs7YJZ",
  "key39": "CTQwCzztK43FGvEoAGbnmat3J99bRD4cjuvrrMeShWnEHFEUV65BjPdNLdGy37NFR6Z8KJJaTNA8mAnk6ZTEsXu",
  "key40": "4jq1MtoU8mro83wftj1LNFQej1uSbmufQ9yGfaC1yxUT29kcF9KHrGdWBCosXRMGg8LjYXBdJDcfXW1XyyaJQx4n",
  "key41": "5eRTAPWstYr5aHFSRFZZ1GCxZieZ5RNQJoGutPPrerzbxWgmt47pKDeAKVYDQzYZEndPixocLgsXBSeiYDM2V6nv",
  "key42": "4dDmJUFTykAbjsLrxzurjcvQ5c1CM1RXz8JELCAWc5eAZYs59iejnCTbv2dHpfSYZzrsavVGTKsoynhPVAPG5Q3v",
  "key43": "2oXCk2SDGyGLEULxVECUwC1kdQwtR2dZiw8HE5Txmp3XWg5zfQpGBTEgHaQB5VXMZP7kPQ568GcJvZGeCKkS95Pm",
  "key44": "4iuz2tU4DkWU1hhp7wFfq4FzHDCkfn5UiAE7J2iAtYaRv26gyRERjyfjdK9R67WBRJUWPRqDL5sjgYKi8TdDjvPA",
  "key45": "Svv6WdT3iFFaG767XCF1eW4oSgYhQf3jfYoEnAJdaWL2eZxitrVyRvqwpoV2zkfMdiSTWqAeRGfSmwx1HFQ7utm",
  "key46": "4dr1tnFqq84731j4etNg6WpFzw75arzK98zpw1j8kS5RHG4JfbbRpXYYVqFuZ4h8hBd4uTzRewCuLpbesn5JLFCq",
  "key47": "5rVvybWm6NfM95zHkGzqmyzzsiata2gwtagaUdYmrgeCd97WoAMtJGpHYskZ3ovAW3nNt8zPFQBhrbvgBUjuAMpH"
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
