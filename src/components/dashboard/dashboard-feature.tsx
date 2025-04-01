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
    "pGkoJasSofYyFX7ccTGPXj3uQ1mjAGdtKbpzXawN92QXzemJ4YiBjKGiCmJLtxPkEg4nw5oGX8R8ojfAsvoYree"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2pQ2zrkTXJGmAvCDoEyzCALPWUqvWJs69tQxWBAievpWJTKJ9YXW2CqAskBgjTGkHYDt5jsNGxZVQjgcQYh45xvy",
  "key1": "34ZZnbo51zpYVvRi5uo6kFB8ixkKe5MfQbhhLkgQgf4xrqShY9yx314ViVahDNYTFYpbfE7R9EUNZyf1Cbv9Kjfe",
  "key2": "4iKKhRSkLFKMMM6hfZ5XTQgad7rJJge8atencSKoK4ypJH8QdnEqqK3syiUwZ6yAvzU6gkQ2JsDm85dv1Pajp2mm",
  "key3": "59HGznS5bNASGhYD9Hgnn4Xe5hXNPQanPMp3EZH8VLa9AaxDdT7mkxxj7L8hCp2mTADQptCNbjz3W8Pd2okK5ypT",
  "key4": "zzdpGYWJXVLMTetQM97wUWK3hJuRzFE3PQhFrU46D5VHyfGrf1Uuopv6ZB3iCsEJW9Kkdo3nAqaT8c75fpwkUuf",
  "key5": "4CLo443wBmU7rQgNbD6QcggQ5pVXyn9USHDbE3qCZcCasQkqHrMV7pLN4vkv4skeicqooy4W53mP8sSiPF6BjxpC",
  "key6": "3kGksaVuF31RZzUv4D8ngDxdRSGWBXX2JMMJndWBzQsjEKxMsMvBHzfQ1GErpXGLganCg971gCRXXkJgrb54SVFV",
  "key7": "4vZo1txYXP3wQDKFXr5FTh9paFQEV4FknqR648wUnmUz7rnoEhtR7MixmAytdVNs6fQW6h1VBsrSnys15Tksyw8n",
  "key8": "4AnobD37xnDfF7i5oKuEKKmoB1SPeaDDLe7Ek1uMJxY6ojX4aDeGa5i6sdGvvrjY1ncYxKce9xGAb9p9rFJcTVBM",
  "key9": "H9ADzf72KcosBG2Mzc6DAu8yCo6vTcYfKXT93J9HrApEnxMYLCBoechkBs53JASJZVAxCmG8iGLNoKmm5S77uPj",
  "key10": "5f7oqJd4466s3wa5gWQ7F8H7ZatgaHYtJpWx6X1FamD2BUTRXuojNBwvZEyBb4hpdSrnGtHzD89vzc3jL1Nq6gfj",
  "key11": "5GENNFTobCBz56XYRj4wRENNMcr1XiAhLK2Rn5xChwzKC6RsoRv5FT4NR3gzJK3bktEdCHjFTkHfvoeCYU36gpVE",
  "key12": "2dHwgsDY2eSqaUQeAb6CSCzoDsQztBgBZX8iWr7ZND4kcg39QjuQ4X5qLesddRdExuBS1epXq4aH1NCfnfF3U1CC",
  "key13": "uCo3D9Y2t2GMPAZnw5W1rmuoLURxSCEGXvNXw2Cjin4bgDvEjnXRzL48En6cMpxDvQDaKnoZDshsPU4CFfazj25",
  "key14": "5MHSA5tYKPmEkPxTUfhYH5c2oLJUNPM1MmyVkdKfhXf1KzaKFTs8SBuGnvqYCTYsZ5EEfuYZbDyycsC48vsVt5wc",
  "key15": "5gaUiN5tLULrkSNeigCUFWLiw8cFa7G4H1TgKn8Tyq7yzb5rUoD5iFYQaY2Z1x87yDhdCwxTTZ1tXFEFn4xBdATo",
  "key16": "sdrqdFJ89mjcAkSfLkYU1u4GwKw37x9LULXnSQU88tXvTbvyt3qiDMGv1nSrnHtNmyNGCzjFHGtSUAz7QypMcCw",
  "key17": "R7J5uF8nVJPh7CKdSj9sZp1jNqniLCS9pLcy18tnPrphbPyQgmN7uB4b5X4btwsg7kiRjMVYBy2nCkUyMe9D7W2",
  "key18": "5S7YoztJj3doC551eibHFFpVrwvaT6fs6RRJhE8NaiJFJHeWfMUmh1GzwYpdYr2JBxcjLkJ7xCqZHN7PyKtudJy5",
  "key19": "4KJss71DYtPTVfBznAc93FaZX4JuJwADcm2pYDRQafyV76pY9W3v57N7VtGJ1kAYCE1tJFmncMroFKVMSk6Vzbt8",
  "key20": "4NwDXzk9ZgFhGzjPpny5Xk7UX49C56yTQZ6UzbXEwGEgp7N1U5i1aFAH7Zne3kMx9C5ktndapdsRMALKuPu3wzRQ",
  "key21": "4nfT7ce36aPNcGX6AdB3iCy38wTgdWrBrmiJsm8Tf6bVXVPyn2x1m8xei2xQJKvzGenewCBgFbTLbi2KCvuymHYn",
  "key22": "3RRwNpzTy1jeqosGoP9GnkWQNer9Pgf5atcN8C1R9rx1DyiwQbiNBJgRajySUx5KBbC3W67MfQyZmKyoodew7S4L",
  "key23": "3iz8MLxo9VPqxDD75kxAxr69uNf1yuAo3UXhzQ2wphuzA1sfh9z9qTFheRbRswSAauVcgA28RJ6rEyuQHyRL5Qe3",
  "key24": "5TwcTe33uE6W2cUCWaxcL3ihy13eWqCWWwUYuKDdAVmX3Nnpn4Kayaf8wa1LTaqNDk7STdrk9Sg3sGx6VUGmp7yH",
  "key25": "3deXrb2Zm75EB314r8QRGPdx3URe1TBj14a1C9aqYpajAF1Gm8mzReAaNcmC4wG1FarwasL5eNkHjWQU6CqBLrJQ",
  "key26": "3JpaFVGMkdgAGuCWSJ7hjCQ3FmiKrFTksmJh2uj3cHYRshxu21JtqT3MaZpRx8nEGbFAypgu87wQEzWAs8dLMcNH",
  "key27": "irYKbP6FXxfBRPsuN8KhYES6itHrpBTDmUqALbzHXENM3dTSUZZzgoFN8cCtLYrY1EhVHj6rYGTJgYPvMe3VYAZ",
  "key28": "5X9p5qJtFXg4PGLpWFiMGEu5SvtGZpxKS3BhEKmjNgh1zUs9JYigRJK4Z3NAN9eGmryfgP9xuCwQNP3aTaPfyHQg",
  "key29": "27gfCD422YiFcN86bc2wxEDoypEyYwyVVgnQDtVYmn6Et8Hxgsb84H3c5c8DFpgXg44YfF5wRGMoZik68swyDQJW",
  "key30": "63tzzbigq9EyJPG8G2B5p9nb9ypuMzRTUnYQQXbULWELPQ92acQqAkPfyWsLvg3kpQwQnReKYLdZ3rbQPMQQYYng",
  "key31": "3a3iYEDFLbesTaQWMwNiFxwyp7CwyyfZPXk8WAuTYu9SivtM3cHnU1QF7t5JhzD6i34RMPFQj2nFQc8sBeVS5Hpr",
  "key32": "3Ltk8Jr7z6qK6UoXJZMS5CUMrRcuNrJ5g5JCyZLDv8WFJVAgpEaMAZfsg7DMYK9f9kzR3vN86PdAsw6C277ombUY",
  "key33": "429rroYwAxpcBKKbz1U6QvpTqgLewomVuB7uggJe7ySo1oGsov9rf1WSNLLKdsyDM2s2pXCxnuohFyLayXRE6kXz",
  "key34": "23xUhxQyW5UUSFYBuMbTgCRWNo9EgiVpadW5AMHtZC34z26McDxpVgYc7khT9CUcyeiJ9S6XayLfij4VvkRTb7uw",
  "key35": "4atxCvng9p3KiL7n58zMNLwRPprfSn7HH52nCaskefzTd1iz27UQbQ8bPZxcSDzVDB1i1YqkFQJ4XbHkUvG82roH",
  "key36": "2K4pp9qTSwPDeMgrEYVPDsmMacFeuXRtEwmjCzyymi8jLWxn68TzPsiUiYTMP61JbXuBZEoWv5V8zXh2dQaZxBex",
  "key37": "2gDjLTs41t7zV1onpwdfbbJAGD49UdWTYC4cMKkpKfuSztpjWU35aoMsnqfAn8W31z1kgbuoYZguaHtcKM1FX9zT",
  "key38": "qU8dsivLqHdusxeRwn49ZsYfHGCUsCAjfKjt2BU5N9N2roExuAckWBndC9baSDnhF9i55B5WvRdMcPowjygN1R1",
  "key39": "2m1XfN8jAnULUU3bTsBDpeiVqx1raWwXGVNZxYyRwqH8MmdZZVUjw69Q1t7AhULK8YMefnkRYsuTgVnVD5TWZiS5",
  "key40": "5eqtGzrv19myNjTBsuN44fYQpMTjGPxL4JABNtzk947CuscLWNMeKKJtzQxJapincpHWcL8iLVTnTRyvn6LcZCdK",
  "key41": "2eyWuQEjAvxEp6GUMP2SxNoK7FwzBFVzRRjcrWZbJxnw7m1bF2A4tRsrYa7pirKFPawxx8CKmLmyxP5r5wyqETKx",
  "key42": "2zmgNV2gT6Skj3Vgb1RTLfECjvxM6FNK9vVSHsYumXphmXhvRaMRKPmKYKkdE7sFfgTdmJyApsAAJU235AJUJC9n"
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
