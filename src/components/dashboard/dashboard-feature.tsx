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
    "4twzwWZntaJdxim1Lc293pJniXarj3dnSjaHSKfn5X1LU5jJpTpht3krae5727mL4CkWoppTgY5c1UzXs3SXaPZt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "59WvKLbNGVGJcsFiXtZ5FoPPdTVkfrrjxKNPrNQ7KWEaLL7bwYiAbCLC46nJLSxrpwuUmqmc4GAvYitqmenhN1ZY",
  "key1": "5CmyfkDqGc8EiXDbhHLZnnsmbo8hMmBa3gF4V1f7gixU7Ec7xPT3ge39aVTc664Loqp2Ln6o4xCN7ufEmqCfchc2",
  "key2": "2QtFxDgsRBgK2W3a44Lt5xrTbomxgac9VeVCHg95hwvPLAC3sGdDgZSU2eNze1swVwjt82p5pi5v3emhNz11GJsK",
  "key3": "5ZYorhAwKwk2Qkrg1mbXxkvKxKPNCt1FoGRjGS6ArfGuRPxPM6vjhLpkoynuyf62tE1DsvQBEv2sMPL7duLLd8ip",
  "key4": "3HAPXYsfoQzP78ZCN2554yTZvgmSqfkkcbtQ2cNo5Su7Sogta7WWqxtcpsfpr8ALDSMYMoLJtXc1ch4JsAyb9cz",
  "key5": "4bhDPyYCEPJ1xhB9hKWbhj2kh1J61N9hqkjRJS628NyrBEe5rFMGRexsotaKs2gGarDFsbK67Vqf8JRrowuDV6cW",
  "key6": "3AYdUMrcvwMM9c9P7WCMBybwhMQFnoFJRVLGc1rY2H8dBuufh5HrVcY2CKgs9C4t2yHM3tgzh2hHkZzKhpMCgPVf",
  "key7": "4TvbvBgh4gqYQmvbokRrD22dQf6vVGGsNzg6CCi9Xd8yYhPCSkWci9BEJkVtgTfRmRTHSWJ8Xpg8BsoQAxz5abyJ",
  "key8": "5a4vn5NRFBh1tErXJpdYJ42yJ3gG4SgujD3mUg8tsdHiuXHVwESGEbZr3edSE5UyeVuXJbSqSfrGvkoDM3mgw8S",
  "key9": "5ck49XAahW7BKL3FQPA7e4nXRB1y4fARLqfkjep2qNbWhSCSqw1JoFDGbK99bLXAD1kP9wn4f4WFzweU5624h7GQ",
  "key10": "31qmKPkT3sE2mMcWpA2Hqr7Dyzh9U3cN38LX4j4jK9a4vtqaSnv26oj8Ro3wvGpJyDTc3iWxNojxrr52W6WRoRqB",
  "key11": "3Lu7z8GmiybkmEdgyuNoEa5Q1rRbUEvnERamLG4Dj9aEFh3m32ACzt8aCQSEwv5NDgofBb4GBVB65Vvx16YzA57K",
  "key12": "2zPDovKvLMzhHV14Ndk859LZ19uy3gxs8hg8NwKfqx3zBeM3TRz7miTd5zQYaNYrMyzNgt2CF9cC99mccYYHsjQ1",
  "key13": "5yZoVcbr2VzzS6QicFxTJ3yEz5JGk8zbQiqrc3jXVsTFfjDGAU7cEgvCVhoZAzr7GiiMM5uVGQa3gXQT8K7ArNA1",
  "key14": "4S4etQ2NBnU4w3Db12DEramtMrKMtjwPHhnwQj45pkwrj3p54k3bPEA5KG2tkC68vDwhqYAYw8ckgvhZn7rCCirY",
  "key15": "2BLv3oRarmxezThMbT8HWPiGrin2FtDxDBmHiP3CBdTSSmPnE9i9UEytTeQ7UGhFAEymtdZSM7dcjpAsXY3JWfnj",
  "key16": "57MhLWJ3NxrGGikVrTkHKWoKKhBJukdJfAAhkkdbhRd5Zw8NtWumZsnGHYcd9Eyv9n66ezz4F7RmCZCnKFKDZLAY",
  "key17": "5UfbiigPn98zJbvZTByasthJEigQDvu4G5Dy1uUBTQ6PhrAAynXCGe3c7vE7dr3zptsC9oUiEepzTZrvQLAxpf5C",
  "key18": "3aAtioFBTqkFzzn6Ug2oRrYrxZVAVDAxRNGzb4EybhPLBLkKgRrMG6Ee2sEPx2i5UrCZwcePGCFq8ducz4fj1VFm",
  "key19": "65GZnaNS3nVbmws72WrGk1uzhWVU9sWcm9w4Uur2ugRsUfJgvk2iA8kgiyY9m65hZzqzPmN5bsq71LPjVB5NWr1Y",
  "key20": "5XjHu6Mv37Rr4jNcGCe8j8B27NcyVAWXzc4yGA3ikWZiNDBW3fVo8NqaEB8T3FCaoHVvtVgYt7paXMPteycNifhQ",
  "key21": "rbRhuCbcmukX9FNBtGAZ7Z6ywchNYQyCTJv1BnWQehQexE1Hgr2rR2Mxhe7HdY2AXK7H2KBW69BAyhviHCENSJQ",
  "key22": "4p2i42bUsM9njmkTS7bq2fSmBGdCwMa1VfpLvPPqoo3dkWnUx1SHACJ1tUdsn4BZKyyo9pwaeWnNVypRbs5NVEX",
  "key23": "4h2rkCBCHBKPY6BLnigtwwyiYbPyNLcoMZpwD2gK7jhYfhqjXPufNt6svPDJGVVwCCjAsfM9verNT1HcEX6Nqy9r",
  "key24": "5NpNbSoTU1bSsz3xe6T3WTnqLbSMhweYYryD8vndjXAMSnje5v5Rmmhv6gUKynr9g4CzZkDryaM3ZR5PWq78Ywcb",
  "key25": "3yYuLoaP8qFFKqJBMPZGVEAECoKZyRXrkCZP6NzACi3QjtBFZ64R7w9xakgutbaN7htWRsVf4JFqUJn81BHfHno7",
  "key26": "5VhAeHJeThZXhXRDPDQuWtM3nEhGYn7aPdw2ppBx7WdKoX8bAWqajb2893t2tTbpPb2WAbBJVFR9kGG9EACQ7Pdg",
  "key27": "4fJg766XiiWwJMSdtGHKjT6QR4UAT1LxaVjr54c3TeUkrxF1frjmGgN4jHuWAqNp2aBnG3H6jpedx1qk5mgs4RGZ",
  "key28": "4oSnZpTqirWRVSRhjcNHN8tpRFMQUh9fLGiyR8u27LMdF6yD62xNhx7emswZZCjBDjeHwrVt32TM5gE4EHFWF8eo",
  "key29": "5k1z4hkrNiscyRYywWAQ9cnJqYNCSZNTH2pSQs6qsL5zNQ2H69JSUSER7FHaKzkUfsSd1ohUZW92WEecM5RBC7or",
  "key30": "ux5ZugmcQQX3i7jqkwUWSCkKyCewXJj9pWzTPQe2kwKUnc9xoYwTiEMdCg4ceQ7KquhoFHpxkzqXGpUAwzcAunm",
  "key31": "5F3chaPweP5symGx76yK1xiVkaZL3sHuNquPdiNjnjMyymKjHoAbUR6PxXxjdW4SjUzHnZ6BLJ5d5qsYKfTpwcqw",
  "key32": "3cjMhSENhF6iJsQoizKdgF4GDWR7qXviCzryAEmpiHVK8ny7XCzYTrWLuLTW1shiK8GMbfEXjJjQf1phqsVjibhm",
  "key33": "3cnvN3R2DnFaYN1hkPfSutMNbSUeb6hoXkAM8uXPQ7fsJDLA55h4hm2ttbS1qkg5AxZvvWaKAdcgo559KohVs6GF",
  "key34": "4tKWDgx8MvuhwnB5qgdnXRHBJjyE885GaR33YcY21QjmijkMb5DCZXXodY5jh95DCsTMdrS5LYv1VGNXu5yHbRqe",
  "key35": "61JXUPBjT4iJ5NBEkdP2Wmnb816CDeDqJonQzGmbwzKo8gLZ2wVontmEmuYGYUCYHE7fa9QFx9RKW1y2Z6bJkvfF",
  "key36": "5vZffy6pBs5jaNjuG7T9BhmawoNwcmP7udQDrgVrfrT4ZNr2GST3G2wAPwiHdwhzkFFELS9kqvUv9ggSDXTuypJ6",
  "key37": "4rsbrSXkC3csfBKXgSMAYhSC8SwcKUjjGa8NVHjwXGrUdLojeGATbXSyCxs34jzqWmmS5U7w6bS6GkZEtdR1iZs",
  "key38": "4gZPQu2ZbHjAedqLdAUatjnhFuPBhYBSfFtyT5woVHLiKEd9SZY7v8NK7D5xmmwzoBBqZRoABqFsDhaixdiZob2b",
  "key39": "7HRW7wCNcFKjWVZM6KwvsZxekreT6gpXirae3X2ojxg7VTqkEdTRPjGd2km9YHeWezTrd2xtS4TVitqAhRsAzgp",
  "key40": "4C1KA2tmVhoBCCZYA547wF3ieJdr81zsse6xYTHhC7W6PVWaKi3YPk3QAJkvd7LYRSMJguDGNUCVxdaHsQ3WytP7",
  "key41": "4sVzTKqpWmjR341oiUwvtsKPuDNKLD6V2HDs1t76ofRP7TKdU8fXrqGi3uswM63gDFqQxSzk6pVuhtYsYupFaLRg",
  "key42": "3d5uYpCjgtsgNf33NNAN1AJ1DWdgwzxCTcDEx3fgg9azu41QXdQvbGdtqHJc8sBVGn5Y4xumqR1tSHD6swC7RziL",
  "key43": "5kTAUN2GCHFVGTzTGYn4R7CzBc63idZbG5TGamGHXbEFihS29Yg34Zabp36cruhr4yPPnwzvK8R9utL6HKPcLtbn",
  "key44": "3X66MKUdh3S3nNkxkNwodNEGoRSzHPZaBUmNSamwdnUKSAhVeH2HKuC3pwBTDgUdh7CKHSKZZ1jaG7Q8NucZnHRu",
  "key45": "36UeAfGK1nrDVmYuxJVsmxMPrjJhjanXpoq5bDYHKHz1tgVbKvNmhq9hY2mhUMV59S8UEMq4WAYTnwYoyEbTpz5P",
  "key46": "5U3Jd4sccZFZXbvz6XQyUNRpPyEhaJPh7VowpqwSowCSkjC4AV78LRiVXrLP7eYL7LfTNiNUww5oVpShFUbUrPBh",
  "key47": "41Q2UQcQyjqbee7KT6PkAY62wsPpHvvZgigYvPG99HFgcESLTpez4sC2Yxi4xc4pekoTJEeHUUTFFjY6bycixVEi"
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
