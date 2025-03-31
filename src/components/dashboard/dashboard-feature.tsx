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
    "3fk8GzLFBCPmLossimqgPo9WpfHnFBGjCV2ppmJj1qGjHMribvCBTdKCV2ZdJNnnUARFrE2fhNz2WtojyLKtAUdk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5wCCeQm1vgxkFMonE9jApVhzyWhLxYwxGraLwCnhWzxxKDYNa4YCopypz4ESdtQnP4xTBWK6J6ErMqYJxRCQ2NpT",
  "key1": "4xS93fe9AdFvtqxamv9nvwJi5vH2WnUJYcUYP2qnNx1URUpBx3mMJLX8Kj48bXt9Qr4tMZSbETHruBe9jfTjYh6F",
  "key2": "45rFTnWcS5h9er61Y5B8RHb8Wg5124FvMuVcTSgniC6SrwgBCapQZWHX8NAQQngTZay8VEqveK5Yvfa9ynua8wZf",
  "key3": "8KvowkV7QeLJXRVPtK5HPRGeKCjcEKsQfK3iW6E6UTNBnEPWdDC8xNaDDZHHdiUtdpRamCF8DJoReQWnQVfxuDL",
  "key4": "4xsEJ6w1KGgzzigGVRLcWVVzp3CSk1j1i1oUwvf2kZHpsT4S57dL2yHV6zVDWU8dcgtXwSWUtJpncfen3n8paQrp",
  "key5": "3VTeN19ZVkyvLLrgAzLDxf9jbSYsy4XAeQ6PvBrZkEEgJzy7Uhk3ZM8kJVDEX23PYhX2BqAWgZtfWS9KdbHJFTD2",
  "key6": "27icnYXVPqihALhG8LzC4L5RfC66qCPqrRk9FNQ2KmoKADgNDmw65318xi6uLjSE5oPVT73XRLcpd5XqmDuU24U4",
  "key7": "4g34DdJSYRLUUbxdQQ2V75waD8WA2XB73kFbDtbvvoH7JVaxq92GHqbLrYUjrbTKtaqsTT5FKfXUCWWhtsV5pAAK",
  "key8": "o1H2jSorwb1SC4QiThi1NgNWUwgVGPfJ2dmdGcMd2DXDvvvmU78HBPk8K5zVV2HqiFMVoGtvf6NnuXHWJhVPwf7",
  "key9": "WCp8idq1uqDzn6cwofdAp6qaDurm9YeiNFcKdTHuYJjmh7omsrSj6dxzq1ivSX3rN4XAtR5vnkGJAacSMPe8CPc",
  "key10": "3oXPegejYQiNuASC7teQ2pTfiT2FeZW8gTBbsp5R3uGs6gspyJkFzfAnomV9qEx91qdPo6UMcrs16yeaGmLc4udA",
  "key11": "oKHqMkqwCo8wD21djFshFmAn5r9uFdRBkEXkgKX1NNcC3jjE99snHVaZ62xKbvQaDcDZJThn6izdTNcttLVu9D4",
  "key12": "FKE7nd4aQzRb5DnmAtCCfD5RN6evcuAPwmE84eGQpwMbMEpYCscb1zKRtAHC58QCMMe2uAEbhuJN47AJUM4FhgT",
  "key13": "3wgCF4pwn1Jm4aTdWJVrCkG7thEW2epkpE8EELFvXYkzwY2wdhdm4yxASCLfUzi4ZFCtXvxdCUSTuJtFMFdkqyj5",
  "key14": "4Pnz5n1KVF2sYCUoPDrhAFqRXdaRvFqptxbWbN9VRaZpxznozrdvTnQL3vXaJsRsZZWYkQbCCvSpW7hYXGjN4Wqh",
  "key15": "3YTtfiVGapdayydosDhNSsbpJfA7of18gGNeFNKrfVhx6msVx7LjjNvKDpkSEQyuz9B649GTpmB1ZWqij7v9KsBr",
  "key16": "52er3ESKvTe5SUHJfkXFgZRSRFtKvdrn9JSjG5RdCgGU9MuJFWqRtwEnNeUks5ZBQtXuz1H4njMPvPRVqZqcTNRy",
  "key17": "3KHy3E6VdXUeidZGgEx7D4xfNftmkWMU8ZxZLZu2Hi8857Ehax2TowtsnvRgfTN8NsW7ER8DgxzaSDd1Lj3pNVLM",
  "key18": "2w8A8Pgy2sX1zACoa45UnbwJwAr74yEtAAMEX8E7q4kwfwm7goxSqWxqBxH1YzLZrhbvCx1aVV1Fj3hS9UmDD2oZ",
  "key19": "2XN699EiEvTvXgMn7xhfMBGFZMXbF5xSUMHYaov7DrkCsobosntCKaF4AzAbgnxZBpEWednTJKpoWkh5zHjeZ2Xk",
  "key20": "XaK4JJN5hbTxtEywPcQrdrcqZ6z1F3rReJtTPD9shSU5VNeHE9B5z243RGNcJ47RhbnA94CXSxNRZbVgXzzQnxT",
  "key21": "5twPhNunuMBpk7nGHvkWiEArrFmmyqbK58jNtzgm91aVH89KcrtBBR8ZR9FrgdTnxTLtqPvbg6W8LSFF2Y7Wej6K",
  "key22": "27AW372sh9EresuH6r42CqgDmaHxVzVaDnDEFPcDztujDHiMYEVGjeJyc7EqbZv6tY4jk9VWnAtBLaPiLAS46fSR",
  "key23": "3SmKaHG5rK45xeiBzeLebssuAtRJYxTARQonCojE5GagmUbaQwXJEeAzawTrhT3YYuJjScePEj2rg4EjvxNsuyWq",
  "key24": "2tVL5XqLaGqGewnn9LRpmK8jRJbNp89EZbuV6n6vSNYAoTzFb81gGubpoD9quAcJB4cLpNDEtgXMvBhYZ1FNkwT4",
  "key25": "23q21YzAX9c9xz6Nf25EWWPVEEEt2WKAq5DV5BtT5rdds2FnBguobpU2y16PcdqiTTevykDvx5kjpUnB2XfQQt14",
  "key26": "wxVyBmZqS5vZGu4622R5eQahne6p2nWABgo4ENNetWtquaGD4Mr55qouCF623KiFaBSsFpV3xzBYuedXw1yPiPy",
  "key27": "3NXpSkfs2HXjHYfAQ9TFyiydP8SA4XGCq9f8YNkupsUMQy7PhtW4FxUbLeDAk9SquoXo9xGruYmhBTdxfHo9sbgJ",
  "key28": "2E8wjo6vVt7sFYZ1agE5iY7CwJFyaagnKGc9xQyGR7sHv22oECEtyDGD6AzyQ3Khg4s8L6ybgiwCoNaZgRnx8syK",
  "key29": "61SiVj3YnvU3vK6RUPG5k44WneMVigpMwbkcKnkLfXzVnFPoSnjSuD74QaoK31ShseFMGemdHJvYjXrPb24PQX3B",
  "key30": "VVL9J7xNWCQBAFHmjN6SUngY6bSMf2BpmXRHgiUBQsEBsNwYjSHDPP9EfUJr8YX9aLsyJXST2sQmjmoXDJGLSRr",
  "key31": "5MFVFjhaD8iRYTu6WKHB5ATGRmGS7bL6zDGCxMMf6j98xJk1bQLDkAY5rTwrcWR2n9sg2V6CVSphyYS7fxEsupjh",
  "key32": "3zRy47baJVAaf744ZRfkb5QGPzGio7hf5XHqDWbmkdDe2oszBqMEpvfJPGv3ChTR4CQbyyvExLj3YaFYAJ2WBm48",
  "key33": "4NcD1b7sUmFFXc3xoQxZWFkhzfaH18uajcRGcZ87v6U3SS6jzP3oj9kobdrs2XbcDHQWJ7bKa3ifpKc2gpprZ4jB",
  "key34": "2VdJunaPYFjA8wxZs6aRJXcosKCKnH6d2gyDLMYdG6yDxLLTjjtLfEyjQG5vKkScHp3tkuXLPqmpfouFY2YqES7j",
  "key35": "2wR9JouqFiZio141RiCUp3xFy7pnoJrtU1e5EvgstaUK36ejNu17WjdLw2q4V1mbAbTfD9X13HCDQLLEtikwZAdQ",
  "key36": "2b72Ztcf5zhKj6pBxkAbNhhJQFKyqd32cEDNmNp4CLenLG7H8pzqKPMQkjfcbtqDFoDb78Pty7FM5WccvzY33ynp",
  "key37": "uRASGJHLsFmgp3p765VcQ2USwVJCRsBY7RanEGiGhNJ55jTJm2UHBdD1KDrrNGMJ4a4XtmxSYgtftfWu5CyHhwM",
  "key38": "3C3Qg2w7jjGBx8szx36vVL9YmeeNdST71BqwFCdmVRo98S6uwkrw52cQfEJpp3yJFWJ2h2thpVXVMpn2ZuaYK1GQ",
  "key39": "gkPizf5BNEeoXiKJVbmjhkCH1dPU1sdqaDvL3SNcXGowmrRHgfkVqsE9qAcPqoZPgywoekHcCG7zu322q8pFrxM",
  "key40": "2nT8wM3ipdCpS8Vf3vHZqnVzDLaYZVquHYtbp3JWxcRChbJeZkEwnSQpYfrmdNu4sB8dmKYFSfyQsfgmkYyocGbg",
  "key41": "62JzAN8xGnXtyqPrdJ9YemWuo9sNuB7DeUYgcZ72Zz3zG4c3VHewJfEADx8znSWEHWo5DC9c3ja8XSz4HWk4ypbb"
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
