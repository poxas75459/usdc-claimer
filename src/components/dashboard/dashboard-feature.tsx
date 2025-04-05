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
    "3tctYYp3t1UBa8z4Et1cThxL7rSNXgKJqRqFaZLZDRbRLEYEhUXZ97CvanpxXpAa7NMYXgfHWiEqY6YS2ZeoUcVf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4trdLP3aZye3oW7dPVmVRVmDSZBfsP3T5vuPWjKnjSjDCKjqtkvgvR3d2e7BKiFyLLPddEk7GP2qQ52u6ViY777Y",
  "key1": "4wJ86LoZMMzNH2opGeV64oMXa8CpymY7xBHKSKxaMfF1yVT9JRrMLkGWUDkbbWqqbjGgSrMK9qtw775mHsNBrBXK",
  "key2": "2ZLR7daktSBnnyYb9em6m4Y1XNjx6ovkCTvNbqKq5BK9FEUPoGtZgs3eMEzo2fSsX9UYzRrguupVLPeFUKZB1ivu",
  "key3": "4sjx1USneVBcGs8hyj4FnZM9S95FE9zETrTJVQSoGMaCvaxdKJPo8DPsseBf6cT6b4mJgyfuWdJpD4RngePick4J",
  "key4": "4DQiWzXkns7rczZVpogQQpm3FCfVGUpM4APcgKAmGph9S9vcX76zh8rRaC3Y8SzP9msiYF9Se9UEdzwCxXuQDziM",
  "key5": "2CDc3MBmNwDQUHrWffimweqWsfkgnYYoPsJGpnCRDUSVmLgBnT8hoMCdXsKPJ9ipX92sXAFX7WXDNdfZBXY1eua4",
  "key6": "3m9e4ygxmSps7oQyHEpRbze7EgNS3vfmkRL98VEWPLvrcF3tDh3HHURxpZ1J5HpkXYZg1n6VU6HCf63V8WGxSYZS",
  "key7": "66Kqpd938eyGmANtKrhi3GoQ3JmhvVELcQKzXAf1zx59mnSAiuBiqYsTqPNchpzqJrZe6JfkuUCddfAa97cxLC1Z",
  "key8": "3YTuBV6SzsL6MpGKzqfi1KKiZcjLpBZJNsvHLCXAuDPRiQQDWgSymDTXVZrVHyosbWcH3J4NZ35nvGyg5QSxPmek",
  "key9": "51zrCLzZp9e4wCPihPhKrtBCCKPjMwtoYLjBCeBDWM8Pf8kBhRaqJEEks4TcuwkdRnn6mAM5H7wz421Xsqtzgkn6",
  "key10": "559FWQ5Sb8zsD1xV41xft3PSoFmaZmCd2vtLgBfmDybwthAKD2p1ww8puvDfxwv9XKGqMZ1DugJY8UKFtA7iBVdH",
  "key11": "2Su3XvkCpLEvUqzZaDH46VFwGfuMbGUpWbHUqUt65SkBAqzDx4srDaXT5Z3dyTmcHtaHVnJhtJagNjATThg6SBDh",
  "key12": "3Rwu9fRUSmM1KXpdEaukeHkLMeTWpvmpbpM4tX6UDrHb6FFAKdFDe36CqUUUznWH8yYUhyVPb7XWCjr2nxQuE8Zk",
  "key13": "4fAXR6nWSiDE8cPUACyuwKT1dtR4y9Wygw1A3pm5kjNUB7wwwTm8VqKNqJ6W4XLNJK9xghWwLx2tqcucvnq2JjVX",
  "key14": "3hn9L8peUr5L7QBX9921AtgfvTRqtNRM3iT9ZyWnBsJDLg8EbNDtc8PmpstrnhTunUNXm3dBKuKBDoMDQfSii8Fy",
  "key15": "3YxRTLfxg4VTpWDV4TDgWZMZUSyAnMMMtsGmjcPWKwxWZeyVF2enyqE54hrhXXiHyGFZwxbN8SBA39rE6SCCCnqR",
  "key16": "5REHHDppVUf5rQzRypqRNzRo4Te4K1FjnXZEW9wPLQnMCi1EAYNKc2MXRaYB93ahmP4wBP5tSWoaPJHnFYsBN5VB",
  "key17": "5L1gwbX6TesLSzMo9mqSnnhttFkAKNxNVJrgw1kYR5wUP8SeKgbf79i8hAKrRH5BzcDUizV3TkfWm5wiZ9uNT1YB",
  "key18": "4FmhZTpjj1xJ7AkboNNm3E2JKoE5wzUojddkmRfF71gcPfg8ncGdpaV4AdZg4UstRuECXF1E47q2a9bA2xdQ9pDx",
  "key19": "3SeJbTDokib6aKiBDBH5y1Z38Q4SgdNUt8d6G8xY6DTPji8FTcdE55qyad4sEtXR5nEgginGpRPEoc1L3tcJ9TPq",
  "key20": "5j8LUddB5KTihZvWiQjeaotDRyBUzkYyyx2snZoKLKfQh1PTwWBDivWdVveFdeFk2z3qtDnwar145mnTFX7pbEP9",
  "key21": "zv8dLJTsb5apd8KnsYEuUhgjrRwujgtHJqHArSim3c2xz197ZuEjT75y9HzWvhCntP8RC4KW19iL3BjKsNxQ5bA",
  "key22": "51naSXD5ArSheJKqp8MovB9x5mFfNZ6nhtNh4EKPGKTe7gZJfZE2rLkxctFC1FeExvGJieBrXmrgh2wnLQk8sX4G",
  "key23": "3TNtKd8R79APT5LzAqVVPQKjgSZPW4YkUhHS21saas5uxw1YGNSAAsqv1z6v5fyzREZi9E6svpjxP7yPjZkDaHLk",
  "key24": "3xTjRKjV3BKCmAzBytcoBEqP1vmnh8w4KMS4cQ7kFZ3MMq3dYmHoM3n7PzZ7NgC9y7dqhfJnrZihTi9kqEe9m5Fu",
  "key25": "3uJWrSv9S46KTYrgDruXpBR6DgZbX4GeBjaCtgXwsFwfD9nSxtBRGpBefJPrfKnDT8csVNLQUMTE23jpDSfdqYiK",
  "key26": "42PQ3kqZaVSt2i7UBT4EWBeUuMiGcpuTDYxMF3kjCzYD5NBCM837wthUvzzPQnN38WoxQJ8PTRH5PYaj9QQcs37t",
  "key27": "3N5eVTDUDKL6HsZWbLH2oTgbve8GTzigGCaBK2a8c7Gvvu8zoVxSkBnakcZuagzPnEtVyi9MoivrocTxwHr5jxSg",
  "key28": "3bRctjwigoKPmwJvf7n7iRoUdot365SSbHhcpep4w6b5idydBZUHWieCawVbYjXFC74rh94LLfE9YsAyrfaPL48N",
  "key29": "4wkGimUF62HHYyM6iCW3mb5whtLJtoTeou4mK26ENU4ajL2uPh9yaxvPjp9Su1sHhjhMuLxNhED7uDUYpNsDbeLk",
  "key30": "3RW7HxU5Z9BjVVp5TD4kbHWQPYhLjznBrfKrpbTG28xaZq5jhM9DGSf6SPfN1N2zRwNeyrJsy22qBif8yVS62oHy",
  "key31": "5NX9cj5hGThA17jANHZdC4HrypVA93rFwaBXUTipiAtCDK9kSfz1QYdhNANPeJWeuyMtXDN8oCJXSzG1Gv42EpZQ",
  "key32": "Jz6Vp7F7tkrPCZYga2heuNtCnsejjTQm7TdzsVpJkycVePnsacNCxoeWWHfphCcD8ke1HkgRnkb9wvpw5bCqhDh",
  "key33": "244wsn9B3GtNyTzYENSQBMaqgxQ6f9tVTmpRQgAAcfDNKHf3gjrogXeCMWsQRjPuWHgxxUbLXbZDSry88YLQkQSG",
  "key34": "3GB5eaxGUaKR9KU8uVFohxtTtzCvSeg9f97BZns1B14k8SFW51zd73FveKAVwzvqUx8fuGVPeyG7YgRFDwAWkmpv",
  "key35": "4e2LxrS2YEwtE7bXF82bRKRpP4K2jcphcNEvCxUfDUDnTfyKJrKRiLVa6bzkJ7ZwGgXoRWK6jHCxdUV9BeFAz157",
  "key36": "3Kkgmd4oA1sYQv5TmdEpWxEK8GdAEmQ92N1A77QSWa4iMB3MAEhbkYRdbczBEStxMxFGDKq2DMx1ik8ycgvV5ELx",
  "key37": "AokAj2Wuha2HEfxr6x56zQJpKWXkGXoLrCSPvLmZiGzzKzbrfYHYj9TreCsH6M53NrpckjRmds1yM2wyjrJJ9k7",
  "key38": "3aLwTLutR48BFN3qPa8XnBrJQ3v8K2wmFMzHHgbpKfqrjh6ocSoq6MdpNzu1dE4KZtx7yyMSHcWNsMBGLpb8b5Ld",
  "key39": "612aPdPsEp3xHAo9pLRVkaQTziSd83rYbV352gHs5k4RtHZ7eusqrJgnnEQyPn4sQr4JJX5c8tCGie3nWw9i82aU",
  "key40": "23ioQcLKtiHSpdmdxGnQc9h1mfUNKWz1VUBzJ7M9AweJttjSCayxStTEjcjrMz8MceSsuMUdLPJnFYfSxUuUdNF9",
  "key41": "2ivie4a3jZMXkqSotwby1VQ7TiYPSVNhYg9oaFh32pnyaBB1dyChGS9UZfWRbRKfFWvtwbp7nzB77M6PTMJfmhaF",
  "key42": "UZjn6iy5SWW3zjCsCPUxmTAY1xf88iohMStRiKU8zgW4g2jDJ7mYxj4fxevbngp5TPCBdTu6EnxpZvp3wr8EyJH",
  "key43": "3NKcuGPzd5burmaekhQSaSWjQTiAS77siUM7vfWxVvcmhK9EarHr4AyDjK4fmT7SoRaKvFLjS4DPN59JRCFX2YzU",
  "key44": "3BavZVyxeQwAUJcT2W6aXMA2JhxzAWy33AK8EPTVKTtVLQkCV8SgzyN3kvSD32uqjUQyoJKyHEb1gg5JyNCDKKpP",
  "key45": "2gMnJMeQwxWkJYvdvP4RVeKMGbeosQxx9c6E6qARAohmC6nrohF94dWGjo6CuwkEx4XvAgRSc7wBhf87aWqVn3Yq"
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
