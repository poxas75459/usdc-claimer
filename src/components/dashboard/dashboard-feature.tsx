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
    "hbqcT8Tva9SUksuPP8MPtksA1L54KbnyyzatRmtyhBoPEDsvcLgQnh8BSNFYatsQzA6Hekbj918FJ9JVWsfJFw1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2uUbBT4RANZKZ2ZsUxG5eWxK9ActLiRrLe4RQrG8vg3GSsQAThPB49HLnCeurns5URq3aQ2kvwXD34MQs8sSmEXH",
  "key1": "4TorTCbL6MuDr4XazSpVoXh7kYn9KKHAiYzmshoKgmNDuqkWKnaQ7hR6EsLTmp7GoJcXxkkFGRaRQeqUvjvkEkCH",
  "key2": "5caGBBcnb5XgzaTULCMmVgGn5j1puW6Yx95CUyZNeQsVTnaMQwHz445ZmgHPxucfAj8xLgBNmUeEsjS1p3EC1oze",
  "key3": "5fhxcVmTbVaiWR2RPzanSqpKi5NgKxn4C7TmaQrP4cTDYjR4cUTGALZ2y7gLNVoKrrKbCoeqHd1YPJiyvXysz49M",
  "key4": "4ngN4qKvsTJNbBTXiQEhgTFMZWrs2reKsH5irmBfXYBe9KuwoUXhn2o5KRas3knHRC1WPqWZjZPsxv3A2WFNw8wt",
  "key5": "65T8vUFfWTefMf3ymze7J6V1Uhn7EnYKKiNBrTfvxM15KJ4rJmwni7arAAJQLQDx3KGV9XcEj89WdrzLV4inLoJx",
  "key6": "5Sd5zLL3GAviApZGVzg2w3eUkV9ZByPuWNKjpGBEthjRndDS9unrdhXQX1CTptWDAsegrbWfFCpUbRuigwWhRish",
  "key7": "KYuHTo59mES4uqfHUjLThAnTXF52xvDxKW1ctLhfcpREGffvdPx9Ub4P3vo4QLXkZTTC49LCwY3yoinhtZGEHhD",
  "key8": "4anHGpn5EYd6tmiDM1Y8ooQsJ1JBnqGQ3NMt1mWiN6FvG63b4uYRSQK5GxefeJeqBL6QeRkruQPmWHfh65GZAP4T",
  "key9": "29LQ88WqN5aAKf4KRQmy3ofQQPkZnRfMCUR9iQ64Ek6aAyxGbEPVFsgSZbeoan5bxVrnAs7iJYmN4Sf4ygPaxBjP",
  "key10": "2iaE3qe9h2iGsSzuCjT7r5Bs2qRkQLz3Wcq2Mp5D8PFsFTh7qC1TRksPEHfE8fbV9SbYD89KMzFcGBSmQdfWg3dw",
  "key11": "4Rzr83nrg5uuUz5HS4p8p451zvZx7nsi8fS1PZ9gyxHR7yTb4wDapuHYwRxQyAVbccZyTK44bPjUVpip4PDoGRP3",
  "key12": "65phzqbpgKtvedZvSBJ25fLakQkQpX4XyjsVSyrQTY3TH6b8Ndse82bLRKpRc5LZUKmXjSMqGKWnfGoiKQ7HZ4Dq",
  "key13": "i7RaRNeX2dsditi5wavAyAnb6tV3S4yoieh71c1kuTAKmia1ku177eWvggLuTNHt93ohPpdZv3WXDfHkDLDahwe",
  "key14": "39F3TjhZkeGKzi14BxvJFqH3EcBZyv5RwoYEM68PU468Gxpajs9zbRJUwg6cgstZ4T68LdkJxYB58mPzNyAu3NcP",
  "key15": "3cynfkTMBqwYAe5Rgd4MWh8cadwXmAGawN4s1Yt22fiofZ2MEeydFtjdFq6X4uyxLncwLzCrg9NTYEtSaomMJ1kN",
  "key16": "19eY5wjbhwPNntyvKaDpV4u2sCoTTG886kUivXYnC3tFKwhJdNTHn3TNvs82LeYgd7j4myBypiFFC5JaZANNnQ8",
  "key17": "3jFnB6n7CdqTceS1Q5c4kyXDyEsun1ziVsJRwpxmKzALKGYcQdJFbNhEKbvkWU7K1j4yug4xjyrmkveMvhHsjkau",
  "key18": "47hFb5aJZ1fVyZM338Y3X3FFSd7TWqyKjiRcWUz68f6WsjzB7LoGm7yWzym3Tkb7GZHXr7P71KgeE1cd26kouNWQ",
  "key19": "4mcuxFPKrmBa1U2fcfgPPdJaRWjhWnzgDiYmif8oXFLwHjdUsqSkB1YMjCR2ZUAhZEPzxViCbsWiuabPP8HEha6n",
  "key20": "2YQzv96dLHCYUXE1mjsTDzkGn4xeBdMmb5cZh3VAQ2d8H5EJTQYsk8noJ59CaavLkHf8PuFXJsuNsNXJpH2Ge6k4",
  "key21": "2D7Xhv8viUrygM4twBKLaYdgesQ4z9ZcgJ9VdnvViFTP76wz49uefJTc5ALy11CD5epH9zT7gW9n4rHUTZzpag9T",
  "key22": "4vJ6KQnsvLkudy2S8dy3NYmKKiV6ewHAbcsftW2wEtqnFMEiRBHZXTKdp7GXVMbWaV6TVUGr2rAoqHidkhf8TRqX",
  "key23": "b6wWjz4Jsjh7wGBQmzrwFwPF6iXJnfrPdfLwJw6PZr3pxiKp6xpNMAREYsSNTreeCS6Sq1nfomWGwDUnpAcWF9b",
  "key24": "3bVC4sZnEv7G4io6rEHM4R1T5V9maZQsPLoFwz9ifRSqmqT2eu5EwRpdXbC8E13wXiv1WthamoqdJhoorUQYVUKh",
  "key25": "yXsDgifQXkaY4zB9fRw2ANuhURJcNtWCxV95cWCWss5VmmjE5eVHvMvmGSqxuxF4b6tbbcF8RH1HPCUt2WZWNio",
  "key26": "67AAdTYVYkahAHijxpPmATXsKqogKcPDSUewuwxrVRCUb5o3i2pgogCa1EN4R2TvnG7CT1wJUEHu7gCUTmAc3qeW",
  "key27": "3nWNWEsJzRiUc6MdoUn5hd6P53RAsPutREusXtVjabAmH5GtKXtQ2DhrNDkSNQYE2hL8ZyxuSJJq38imWzATCf5s",
  "key28": "4nAZk29Zy34wjnuNGeFnTnDKg4Pnk1sE4jVpswQ1cQ7vXv3MxyAqyTXzFzc9TchbFBLNdVre7Y7Zr9q5kPXKbk3L",
  "key29": "14Cn71MNZW5tDZ5FGr9jmpWfGpnqLzcJtmiqUpfFD82Z6CEMpsdp82G2Qb1g3qw1h4AKze879e7XH1A4GQiyiCD",
  "key30": "5sGCEdjkYDQ9a7y3r8SD89MgY9JgMfLBB5vasUmA8hrgYdgUDLAqrBqdqZBHsuhQ3C9kQqDnFRa21qVQbiqfuL3v",
  "key31": "2iKBRegAu3cCKSMaFH6Ndebf8VCzkjcQeTatWbFzFab7SeDwbAnxvTrAuPyUTArbtygvPyZJfX1AeNQev5hKRzKK",
  "key32": "3VN6ounNSiuAgMvP16m3yF5BDn52ig23qBCFP56iHpptujJqNDcxaxUUgLJCsMHSB8Zg1KM2gcuwac1qaLu3SKNf",
  "key33": "4yt2CyJF65twUpL51VrEcBgZ7SPkGdh5W41NredmR7b4m1sLfjzc3DpPz5PJqBtrm4wrunsZqEdhqMLYbSWKzQnP",
  "key34": "5pkzK45st4swa4UPxrNaUsXsUC3KBYYwFKGd1a7hqHWexV36ZXAhTUipZw8KZsdBVejn2h43fCtTxATQQBpdVXz4",
  "key35": "3Le1suQqj5cLHUF2ATevg4mNArk3DjXGpmfRa8yEm8SEKvLMioNaNizNbbUY2QdYXRXsMiMeyQduPxn1RRuz9UoF",
  "key36": "zPhRs9vDoQTeot9hD5xpXTNrZxPisCtHsBLm4mSBi79v4pwfV33MDhAjmDwjC9czZuw8xJT4orPdewaV6eYmJhT",
  "key37": "3GePXptRi61pYai3wayykBu7vq7nTZ9ZrnpQE9NQ2eqESj5eKcQzXExY882jpmv1FwTLRaWM7bAUx2myeTFPVxtd",
  "key38": "2ZvGwcdi9ueHowSqKLTgVa1bH34a4XrD2q4tkuS4MkV1gb6135unpWqZDqKVS5zFsTzGLA6aByiRL4wqtsK57LpQ",
  "key39": "2QbuDycRD42bAzH9K3aLkUaaQkvNZE89uPvD19FvYgTUzDeaKx9tjrKwHjtWXxnLuVuE63YgQ1VcwauumcafxJVf",
  "key40": "3SM5eFNuGY2dbCqix3zpgiShkYvssNEGSHQLSsJevBFzwFbRucySwxM9nsNSNBJKde48DwCJ7MeeqqLkrs1TnGFM",
  "key41": "3qosGpdsdYEw6gjWaC1SaJYv7MSGDPmh6qixkm7mvaR76gmHbJ9Sw5vAcnYKHHaB3pXWjXmdfgV1sXwc7Zzovw8a",
  "key42": "4Y81q1A63mrwq1e6k1SgqB8RmN3DjS99mBCn74DErYDntS8zngSv8rferGqmVkxaqjvNV72UgGXn8vnLUwZU2A2v",
  "key43": "2F4SbBRknWS4vaGg8CT2kQ493zWBkB7u34PCAAxM6z71gwcp4aCQMWvu6ZabPgXvpV52iXVnRojCtt9FtzzF6YBC",
  "key44": "53vWeqzKsYpXHK4fK4FQNBtMDmLYeXNSB3kiHpHbDjExe91HoXu3wivLP8LpFincAzdH2TcWiMnefyTRdtCu79b2",
  "key45": "3G5UbjcbKs8ozRadMiHNa6D9GdYusqufguNJ5GMZrDbyLXjThCGepCxZ2XGH4KKJku7D4pKoS3rqVGKuhCbgd8jn"
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
