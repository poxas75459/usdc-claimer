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
    "By5TbuiZMFoX2sBa5TvLUV42MGJJJjkW3cezSjQ8mvDBrhQGq5ic8kR4Ne71SVZb7eeB6DDJuBiYh4VQwfoy6zv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2x95JVWRJhFNQU55PXkfkrcGhFiYT7mHCDFAo69oLSqe4X53zhv3CuBe4cHDrShCogtUVGors6BTB8Zxb7fKbNmL",
  "key1": "5xe5DL74qmkoPBwV7EZynsTbCqS3ufY7UmVTV5deRJdVMk1NE85pKYHkt1zd7udrzFGt2RjNL87dRLxzJ1SXhHT8",
  "key2": "2cgNM5VJxGuWkBDKRD1VRVyyKUKCV86B4uNQRZK8BLjrrvGaJwXFVJHJnbDt8PhM4t3Nh9G78iMuCN1KDse9zohg",
  "key3": "599nZ2r4XU7Joq27uWKwJA85TsaiGLu3eXzdf6zXtsXgs7dnhoNwwS5JCZ5WZJhTJzEGdfNcUbEHUZyxQFqz68aY",
  "key4": "3RWnF3iWLHyZoQbiC3q1FZ5bXbSpNeEZQqK3mhWToPdUwcJhfZN38YFcZbB4kL7QFtiq5JkP6nPPeF9rAmQ7xmph",
  "key5": "2riaZPHfBU2ZETUAuGVqWpA3uxLMKZ7HPgbz4qT1QMC433r9R2LHdwAbsQDXuTuRx1btNLduRCCoNEdnuR5EsRwn",
  "key6": "37aWLHgw7vm5jQRyLh1GhoVK35KP6gyz6KqhJGgbw2oG5dTotsYeEtfpCur7q983C4RbjLFtMZzmdMVXmhtDqNAf",
  "key7": "UxsfyKvKgDUDvHW4Ge7joFrDGQNTwPfG7ip8NCNqyBGzVme4Qn2YSLHLvCWaj7qVbPyQNhK4Rgbx3L1TFBBj9ex",
  "key8": "5icG72QaqG2pmzMzxBXmARfpb3kVstzYkZM7UrEzfeyUSYBDe1sMWz2CGw2uWgGrP7jyo8av6ogGd7vPH2KbqjqK",
  "key9": "4FbVMddTDV7H2ZPRvWScF3RmneR8JhBVSRU4gzfc1asgAB19pPEQsuoBEjFv5wZSdCPgvi2DeX7ZGcBtKPUefVMa",
  "key10": "2pTHB2rozPDFJxjkwK6UDaBHN5i1pXMFtnvbNSPttLSV2YXS4qxiqBv9hSKcTAHSvRC8DvNYHmYAZUjhmETPSrym",
  "key11": "2LMTsEcKEUdFHuerPuSeBttThJxy1rwmpWxD8woaaBVZpFk6kDEXfd8zQAoVhNpgrq3gyJpmwmfckE9Z1Dkiw1Z2",
  "key12": "cc6nBTBhWYMXdi1jRY9uvoKngC7FkzG2qX4G8eHsCYMqtPqu8ezbiqdN29EDGGFXewyhi3fjGmq2nkT4sLuRrs8",
  "key13": "5Bvc6idBcUnNAtFvfdbd62fn3aNiwmFBtQU4rNgDxjAS45UumiyRVUxiXpSMeDe9ojRTZRc6F5hyY1GiyN6hPfj9",
  "key14": "6gZSkVArpFHC37VHZjmKqPHfDYJhMnwZ8maDioenkqGdbXQGru7a2menGG5UvwVERWaseuiMd1LMPFQxnkJrpzB",
  "key15": "637FSfCCUW7LLk98NFHbPPud1P5BiPMVVPo5aWVNtFconCpG8FJtTGWPHCeNwy18o1jvk1FztS1t1455C9N95Bbh",
  "key16": "45gZjhuQ832nsxmFox69se8UZQRRuGiu6ixhcGSQ2ZJF5zAxBTDaGT6DbMvcuABGHbGDmjr4j1NdJ3Z2tn7rgfnX",
  "key17": "5hx85UkzmmLDz7r2oKn2S3MXprj3smnDNSHDVrA2zGLbSssHG4y2gujUEVTRA5VidcSCmt3DivfNcWKzDmA5hv2S",
  "key18": "3daaerAsMECZ4vZKcG5RemHhtncA9FfKZquQjNA4xwr5aioaW4dNvdkFvbipNczwLtakfPJbLrkidHkGTbKCrQxP",
  "key19": "5ZpaxZbK4JXVy6WfmCKqLF6Zj1RPHovwgpzgXQWmysStAFpmRdK1ZyaGodnqtCHtseBpmG7L1PJb6BgTqMNPdd7p",
  "key20": "FsCUVnmC1vnSn2No5wp7BAHoJzdPkycQeSETeaEoNQcdZvsCJSfJqvRo32CXxMcNiJmB3sPJikbKWGsBZjemUqM",
  "key21": "4uVJUD84Toin9XLtDh8nq6D3w6pd3j5AdyV1ZVHKo82orTJYpxZjdGARAktvPvBPKqDtiuhiAcPdhcQp6Hp5X85f",
  "key22": "29CSREUc3dLWP43r4K9Be2fEsVn3HD6PFBftg7Kpsd5Pb5xD7oXpxWMPAxUZNuN2uPRHQ2a8ZYryXZKtLAXCT7q5",
  "key23": "2EZgKY4A1p9yuM7zT8RZWoCsC5A5TBuSavgd12iiLc7ABCHJU2s7unmwz2DYiPn5SKS4FsP48ohettZE52iZZjbX",
  "key24": "4JKFpNtpTciQVsznK1QoczPqoz3r8wBDiEX82EgnRGF9PRoqk4LV9qgnpBQLeoBUy9uEcsiWfiGEd7YVUoGyFSJL",
  "key25": "2C1WTLY3Utsru9sPBqVqMyBZCubQDQKR1nRAWZbe5DiJ8vCr5ipEvajGv1wA9DxAvm8JHuBHhnEPP2B6tEhA8UaJ",
  "key26": "4cfcf855b8iRmRv7WKy7xuYwNrgxDtZtZVYFctijUnKXiBkY3ou8qSc3qGQqn3DtsPm1zNTiZLdV9dYwJC6A4yqF",
  "key27": "k8uEXaBUwatZ6BMdRCY3PxKE7zc2sBQgSVwbG1LApqeza3oexpg49Dx9EVKb11rSYuXCe2dETR85eKhmHZmo9zJ",
  "key28": "g6d7vMi9aAQ4Vh42RnsbVQB12SA2Snw1NuVFGdtqsZaN7tzn8Nyp5GjaVFb5QiAeySGWrNM7s3EUpdT81qwXbJ4",
  "key29": "4vTKwV81FZgcoqMRj3pEHKvh8ZVVionf84Py7x9q3NLwz2hQYhNJRtEdMCzQDLAe6s3WAHD5FhRnBFeM8ZhHbYym",
  "key30": "4reKJyq4mJbKGgrc8p4mWJQPkCvf7AnF2TBDHcNDPvmscERUPXZQ9P4PrYe1L7kiMzUMEL2bvXcvz6tnzDr8QFeu",
  "key31": "QG8f8EGQVgDk6VjbXcUQMdAhKHECWF1bskR4GtaoiMEfhyQF8wC6BUpPakV88kcTDaos4VVrkvxc8UFcPGtGkNb",
  "key32": "HNNr79Sxhqp45hzygUyojG1gujhFE6E1VfceruaLzLBaoEnKBJgQJva6NB7yEJdNoyEK8ADhxQNiNuzsU7F1qTZ",
  "key33": "3iFUYJn3NYTSTn9U5CbZpwD69cZaf1u2jvQs9b2Aia8Ry4nVZSnginQRkRU4oQmq8g9xA32p8XThJjbeT5rB5Wva",
  "key34": "3f9TKE51ZRKFBU1denesVzC6XvQydbT6H9UZsgtsfQ5Fqjsif8NsXhW6GY6fnY2tDnF8s9WEhvPgvADWanZXGKjj",
  "key35": "bdnrV1hTK1BWSYg9MsYKAoSGu4Aj7BqEW3QTmhSj9NJV21gJpPAS7Ywe3tQyDo3jozf6rJX7q966Yf6VMNDLRMA",
  "key36": "62nHtkJPDsoVkcF2GH26152WUcUVb83ThvLLHvQT9zTpKx8vsuPq28uaNb19BCk1JrKMfBqzZTByTKiQp2ki28nf",
  "key37": "3jn3xQYScHzaUUAkQ9sADnA9JaCHRQh8NHckuts45RfzrfiE3pMw9dvDXXgaywvASfxk1q6i7z7A4ebv4yeB7Qq",
  "key38": "3maN64JqWvShqhLey9YdCfAhZV9H9ktiM7A5MeSf8V6x6xas3nBtZJSmHqfnnhC2eNpVeWJk3RuJjdmxXfH4M6Rp",
  "key39": "3d9Q5vvxghE6dh9fU5yQgLzbaT46Bup7hVDRjVViujiXuquCJqyLqieFED8WcQ8yR94hundciZk2NVJbUH3SN7z",
  "key40": "2HPGqQpLyUyGzJ3G8ZJtdqneJkfk4KzPx7RSiLBioEbYnK81u2mepSZS7unbbvrSBppgvY5P1Aw8mHbukzKnnXPu",
  "key41": "4QA5GGvUYDFvgRNMcXJKmw1foijr5aeWtGLYPUPFq2pWmemcvynXUBU8bP1i19ZxQAYQfGYNMhDAiNtqv2yCs7UM",
  "key42": "48VT5huFRr1tikDqYtso5Agig4Nuygt2hu8iLA16n3PW97oKE1MVtuVCUPU1PYPbbzcfcBWb4c1Yo7C6YuwiCzMF",
  "key43": "4J1FQvyPWPBEZtr9sLx5FrkF2ooYBPbrknigdsoZVDiAEJNv1ACueQXib4Gams1HbC7kmTJz9mPFvLGcWZqyLZSj",
  "key44": "2h5RZDSmqwLARLDtu1Gdr89xymvEBeZ2faxL37HvV8ZaHrJS78KTqmbF99Hww3K1AJTd4wvohCoJkTwcNRzuJhx9",
  "key45": "3DGp3aEacttZWtcB7S9QhkSmFCpLJ7MzfRoseb8hXvHzs4M1FR7MusQRybeM7tis4UbypxZG7q684UHEcF4Pw7ph",
  "key46": "zrkkfAmeeWDpkKCoqT4mzLP1G7erbQjMpvNsKa1DGHekb9AToZv8kuijCu3RFerANHY3dZgBtFGK3GEYu66jYf8",
  "key47": "2TZ1bLorufGBraAaTQfFZG3xWHg5sYW5X3ZfUKa5QLmJEUREM9fes4gEW8MPY76K8ejDVpec6bcXbZ1Kh6XoWHEu",
  "key48": "29LbazzJV293Rf8JXxwj45gP61bhz7i93Yo467YRQKf7MnTm2SCA5jQxEdX8jbg3bHiYjLjUHQrF4cCMm7hGXy9h",
  "key49": "4KbjJYmiT6FzveVNiwNbVnVEBBaDsPZ5XenvfANoNAwk6FR3vcM8jdPX1sDB1bbqqp5wFXfFsmtAUGMpwtBiUsVL"
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
