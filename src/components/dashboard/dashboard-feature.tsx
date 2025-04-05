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
    "2qGzXgG8zTgFYjBZSWUjoKMnu7wf9XH31WqPSrYijSRkQMANSKhTfU2u7CagVhqdwcn4RMfouyy811UTwacReTFp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2dWJvNuFbtZVSjrbiTHUb6vivLYf13zSyUii2ExJfNg4gNqPf3bUjGkxxGS1oTgKab2NeQ1MoiMQm7adi7cWssWn",
  "key1": "66mrG5AEAtGWvfhJ7CumwNHTt2vNvXNsCRS4795UgfEvgYFTatdJzghPcKSocfrQYLZRz9KvsATVofDgJZ6wZ7Eq",
  "key2": "53jC3EUqaVueQXFWLC2zxs2Q1NidsvTjNchzbksVEkHDecefTZMAY531HgQuEfruYiBwLoqMkyK2hrTe9tercAWk",
  "key3": "Tbsjq1NqhqEn9w7mFXnb2vTzqmQTczwh63XxztgxQMRcGa54L6JSvYvMcSv4a9AySJfMNDqWhFWSWFE2qNmR9J6",
  "key4": "rhSo92EWBRar8QVrRRFYUEcM9LCmiWf639XesmMitpZgZbygmaHaqQZqUn1i9KbaWukefbr7KXBCMRpyK3138u3",
  "key5": "5XtX2CWiiDgzZokAoxbwBNQn9iJ4aeFxM5c86MdHXdJ8Bb3ytxShK7QV7EYyNUKj22iYrr81L9aTi8xwcsovCNf6",
  "key6": "27HXpiUo1vgZPtLhvJ6Xhe8MC6VdMxfmFotkHMh4he5ktigtECDA2AmK24NDTyxXqSQY3ng4gW944t5aZqXy3dpm",
  "key7": "3eV2Z3S1kiLLwpUwVqeRHdLBZXGMg2uVga5pCrsmhnhFM9nKX6oyESbRx2X35A7Gr82sDe87cs7Fj9KCYUJtj1Fq",
  "key8": "5Qsq35qaw4k53vskY2KjiwxjQJaKeiFJFgVYRNRbzUKgS3xpuP5c43msij8YyHjvf2bUQfUc5AaN9y9s8qxdExCT",
  "key9": "4Q9mspFbmCTQEDLf99vrvBiadrm18HxeMN1UFBe4AcJdYj5WRSgSCx6zKMM2dYoXjqWQBq29JtvZPk16RQUphcZu",
  "key10": "4a7ZCnQTnwhQJN1TcGPLkgoYbseVG17dsQxPBuWMk48f3nkEvqMBMzJ8m2gBhT864jY2N9JvtjdL24tqJ7qzaGSj",
  "key11": "3cc49pcviKszEbVhVU4kMxvL3tB7mE5hQJTcqTfBqP9yrrUH5VxDSrUwm4bByc5qVmYxu9B6wZtUFmFVW9dpFtPD",
  "key12": "3V3TuH5AnDSiRiLeeQymNz7yZH1ewJ9v3cyZRBNRp85j4KGWeCRA4ubjDLT7azXwRUFqVi3ffWJdiRBimaU6Wws6",
  "key13": "QAkgKT1gArizAztEriNSPRYE4SdsPogZpkMmFXQycZJQkHYSDseCRCr2ZYNDccw5wUX27rqKRdqFt6akuresZPv",
  "key14": "V6CfMSW4TpDBrWa5Q8Z3rB6pNX6FwpHQbisGod7b1ZaEuDYbNchXKogEGqKfrg6AooVDVz3gFRVeA7sPS3QMoAu",
  "key15": "isRBdhq1AY1sj5NTNQzvE6KR9ywQR41Xk8tXauZcQ2uxKVkq1fT7nKLW79MeEb7kv11KC1CWNfWweKd3gyC3LvH",
  "key16": "5AKXcVqhVWyuEixjX99NHzWck8Nny64yyPPkGFMjvs1tFPsJEbzXeP2hVax7iUNZd9fDY3ApbRMdQmW47XBN61kw",
  "key17": "2dHBNQ92my2BeqULLVuQDX3oytVrqGfDM3SNuCoTqXrFaUvNLui8nfSSoFHAFEicp9hdExkC4zctrxHKPvx1JUAe",
  "key18": "a73tWHAXWYdcHxfExhpPkdarGjnRvcrYESusesBztDmwkCeRYig4RLkPuK7rMxk2WTLL5drHeUezrG2L6i24RRN",
  "key19": "5tL2otDURBWoNvphjGKPHbzfDWbVaWaJJgibx6hy3hggQAE3kC1Y2fXLvyFi2gTuKEAdsGrA4tnDkLMZeLAr4wFH",
  "key20": "5SkweJqQ5ci6yepLuyNUKJz9Q1jz3ujKG9oxCYZsb2fwQECeAoNrkEaHyAZiGc1YrXMuCVUzk37iMoMgcar9zPrS",
  "key21": "3u5hD3Bb45GazwB5QorVHmMPazuwgUMRY5EKkciBFTLx19zJFzdtxF9eRgkkznuN7eZDWX195HDrSENWFyE6G89d",
  "key22": "5fAYfi3QECvKqnvMLGs3f2jR9CmwRvAfvSptNmdWfCWCriwj3AbNq7fynHj7ZUCu1VXRMLjs3KYbdXwjNatxXoYu",
  "key23": "48nKLP6LKcLqtwnyVrU9KrSBjiRxwkoveJoQ9N82BZSVqaBHwAMcXja4nEsEANhw1uD8TCKThWDH2w2LCUvxGfFb",
  "key24": "mseQL49zJLTbMVxLL4UZjSQHfJVMrbUdsUQL93PFFXeinhkvtxZ3ZoFWsrUGEtpMDf1bAsTEq9Jw9G9uK34D2xj",
  "key25": "Px6MB6jfUXhRXpUh8RDna59GBqxrmVwXncKEs7Ca3qimbXqxPfeN8RT8SpuN5b1Xyk3vJ7ZZnbSUSCeUeqxLYtS",
  "key26": "4rAs67G1cYnGAQGRUddrurYWCCmmGNYszi8rcgsMHQa269R3s1K3Yx9kkqrjRZNtqhCiqhVtvtw4EaECkpwmTftD",
  "key27": "Vk6z1gidasDz4yn7jjPjtSCZyAnuniYsTQXmZipVFq9JjB1s7e1DoNRVaFiFzsSSRrnBd5a9KPFSPjPCgQqziiy",
  "key28": "52B5QEQFTQWJyE9zo6H7LV3rDYCfVjENhdXsjJpUFbRteNCa3CvnKS7EjcbsuSGP8Zjgjkd4PJz3euigh96zeeWq",
  "key29": "3wUgrEYKNr51dyf1H54G9Yx7HgZJawWRVU47n9v8hxriPaeEetKG1hPSCciiixiVgSbXCiqs2VN9VqENDbVbriur",
  "key30": "26YScLrvxvXJ1Fwz9k7fcmZE6FM2gn8KHkmPf68uUD77HR6CPPfEv3Jv3RR2GZWGU7BVQrwtBsZHoN9XKxLrM49L",
  "key31": "24k1BpubsbzryAprXm4hgq94ZyaDRPGYceYiSDzAg3VEenLwq2zrghLBGugkEXPQh113Tvz2Bh1KJqxFvhXbXEvy",
  "key32": "5naTMPUFpcbPmJhoXzDBa37uixMpvebDsNaSUyyicGLgEpc24oMa489bBepKagqaVunj22FH5dv9j4sy5dbDRnNM",
  "key33": "ymbaeZTVjwzveKaDAufNJ1EXUpDjncED65de5MQLuGPRw5q5psfaTU8ZnttiudhM4GVVRixJWgkk6pt6dQyahE2",
  "key34": "3McreY2M6879LaeGZ1G6hTjXoXkmSfTBLPJ37wyEXLGUh3zPmyXQTCzWAnhdbKJbXfUCx1KTQGaBsWQxbQdSKk6Y",
  "key35": "3oTbc6VuhfYpqdo5cRgEMoeWiEs2bosDzmEnz2rJV5S2KX6rMkKra1VTSq8W2fmy4eNCrriMZtracYSpHjCLPm2N",
  "key36": "3YFQN1hXcURtvY3pkTzJVQtPTaEHyaqUaor3RPvaXex1ofq1XrpHXMxoSZ8NjVvQiVRH4ww7i5F2tmvCCE9UbFod"
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
