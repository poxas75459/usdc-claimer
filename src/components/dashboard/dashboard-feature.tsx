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
    "3HJnYsnBbj7rHVeZedCQkAmKGByLAnBJvnsWarzDXJD4LjBmcrLn3ZXJdjx211fGUu7HRzVdRdGBRsfsV2G8nqHf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5c37MBkKMMJkwmkeB774cRipWThN4Us2sNmJ7Uwscdo5mKiimdYQFWPd9VJ1iBQSxhcGU9diFcEcohQ53reTbq7Q",
  "key1": "2P2onP366n5Zb46deNmVNYczcdWE9nrFp342Snd7NTAeCPW9papMcVwAaY3u2fsxGUb26vuWnigU4xiQwgeQRXRk",
  "key2": "5bGSMce1yqDMJZSoPz3NH7onso5zJJn9qRssrJ8JXLKwyvrygMqkh6SRHxGd9seAnDzPWejcw9TA8eoqnQ3bHQAZ",
  "key3": "2EAiRBgMbTns6HkCrK2vugSRDtyN3AAJNpUEezdkbNeBaZHyudtYYNhpdk19DV14vVetC7H9Ycm6PKhapHPBPCBV",
  "key4": "53CFX2zYCsPXQseJZXVCDk4iQL7rjvnG9Gsc7kfLrUR9gC93E25LwemUnNcdzBjZMaiZH6ouQFwdxSDr4z4sQ8kf",
  "key5": "53G4prHmebhaDjToJnfs99aG8YPCgLeuTYDN2AqAVndpQcLqVGeKqC1deMHFiJC24ckxWV8pNx7wjhggV9r9uvYm",
  "key6": "5u5GCoZ2HtWoo5gfaRKFHjBJD2irBRt7zUC3RCc25q6Trw99JYg567UqmHxLHSxpJPvSP5dLXukiuMJyjhSJphV4",
  "key7": "28tmfNjAtTjDdddCmvoJELYErJiEqVQNFFDuj8Hrh8ZkuTobup7ejWNf2CXXCRo9fDLgcbzydBTg8hJyVQbBcL8R",
  "key8": "5fe6SXyzDqy9yMArjzDqnJadkVwGubSJfdt2NndqxEt3j3wgouNPy8MQgB9GiW4JFwbZ1bT1o3ncF3hjZT8LWaro",
  "key9": "2v1fCJBdJfCiWdD8KDg2pCpeuQsMkNfxVsdqzsBgsXtUhz9qnFXoCWT7qX8P4iaRHf2Yt1cgFdgZSwSu9wsByYJ2",
  "key10": "UCL4oR8wtQSF2vvSAxqWcTPBez4Zi7jcX38CYmavZqyWXHAMorGLXFcw2XhGFt3CYMAq2u4KKY1uiDRkXSqBrKs",
  "key11": "61HkJ6qwNXD2fiYqncS3j3he6RgSpDq49eZoAZowp2woVNjun771CX5TLefbf6Gs8T29NPh9FpJBmbKWqczBzeu8",
  "key12": "3hQ4PTWYqHbPopXbN3dhmNmmqRv1dyeKSr2YJm8VtYXtDoorVBw96mszcu7Y32vw92q74ghKi4Cz8ntDwaygnDtL",
  "key13": "7v1D8re5rCLz7MSuKYJC7mkz7Uk59K95igJ6YM5aEoZ8kWCss5MwaTu1SWpFi4vDP73Mh9yhwi6McG2uGHAHbbd",
  "key14": "3RKxZm5LzB3Bz3J3poZxsZvFFw5ZBmwDMtWXYUfZFL4rkg8gk4mPa64A4a2Tj4R7XXcDCe1egLV3AjbrucYfkv2z",
  "key15": "3qRoWpi7qZyrsDbp71icQgdJyfUDhJFqi6xDkL3DaK2nbmbdziyRCaYtt5hbo7dTh8LTWLdLyDgh5EZixvQc37xh",
  "key16": "3REctMoKd5foMR17c3q2t16Ueq9tmxdtGAS3qekWEf4DX67RwA2TSX5VQRn7WPsTfS3SbmPtLmybiHwAkVRN1ipS",
  "key17": "2vpCW8yBSXsZLpN2i9M3qoo7iNhbgz5ejafdvuUo2Yk4SiE4ViMsi7eSUoNfbSmEUFZ78d7znn8RFP8hy5EtTU95",
  "key18": "2GLAAuMYNNk4EVj1TFtpxrGpiRuBgeSpct3YhxEiC5oKEX47RFYtToHtf9N73XgwXwfXqtNvhgSZQtDQ3eoqxSRL",
  "key19": "5wsUuuqSvY3i3K7chN5cFw6r5mDggjBK2UjVWg3xoLoV2oaiEcz2wqdvA6Em2UzEPcWByHArPxeimFC9kaRE8Yrk",
  "key20": "3LNQgiie9W3xHLv93WzW6o9XVYXBEmt5jPwRLUg7RbGT9SodirPtQrAwrcBWBfusJ8qRTddkFsLugNhNex9PZVci",
  "key21": "5KMQRBwJT8PmHaJmZ69GGrQv9zFtju8SZdCC92eLb8XESVxaNFzqkBwe3E3o8wxSyz74uMxMTF213D7LJjU2H87u",
  "key22": "51LM9JcZ5Jc4dDRNSAYXVzBZTxMimNKr5HakxVSw354yyLaakgtWivJ5vRwP5fmJNPDZBRCQWWjJL5qXcxMYZYRU",
  "key23": "4uL7FQ6WJPkuBYLqpzsa63NWgsP3YSgUFBdka11BiRdbyDtWJAqyWRhvUNKpcxKNSioqfziaddLXej2fhLGgh2rv",
  "key24": "3GQtQ33nnj2BJEAjYFsrCx3hBmu1cWqAmpQD444yFtvRNzspvSwNPFDT6cYKX35KPQrragnrxunFihCiFCeQg4EK",
  "key25": "xBWjfQ5b7iDPZK2m1zwoeniMuG41Ro9pqLBpma6McqaMtWym7a9CQUTzzRGC8Swueugdcr46g6R7dJRT9RrxTme",
  "key26": "3p6tqzXrWcMMyRZn9QsxgeLK3Ei33N3rKXWNQNuFJNfkPuaaVx6HymW9cEKUtwQHKvpYstPiRMMzcKekfAnnzF1a",
  "key27": "5YUqXVqocXoi8ueEpWoX66MZsVMaY2qBhzguGZ3vgSBS2LC6qxX7aybrwsYZtUhw5fp13E1w8dVVQmXJgYhJhWx9",
  "key28": "5bufBvijkqXN9weCTWwpGuNnVWvrwRahYMHYumHjVorVjS7ifk294kfnixmDh6LNvs36X8dL6HpEezqEhDCoC9QE",
  "key29": "22MMQeQZwvAVdbMb6WE5vRXT7YDUqNa7r3bTEuinfE1HmZfkHsyXHTRogX25y9T86n2HcX3JeNJCTkJgQVvABja9",
  "key30": "3kjYaUNuQ9Vw3oRniH8bm3c9Nbkp4deASAQGyUe9xTHnCrkADXNpMSkpeQ1BTpReFXCm6LxvwbE4N8F9mp46Nvzr",
  "key31": "3gg6k3T4ZdEQmnddwK3d4QkRhjVr2Q4kCAmhgGwRQq7j8NhpZotKDSZ15UT1LpcQkrFCurH49rBz5Y2QNYKV8kit",
  "key32": "2XRbJcmUcET3He6YpwW4yYbXXXjvDrJG1XFhN8gkJ5RbYiJsX9jiqUqENvudCji7FGqX3m39xvwRks31vWyGa1U2",
  "key33": "5ovinNzrAyB7eqYGrfomwM653ZUm2bjsPcoP9BqQEczLpT7Aop1vKKnn5KsineeU83apPcK9ZfcUzNVDQZgKK1h",
  "key34": "3PFWaz5AFeT2jou2pEtdzGgbHBw8psfVTRXKhBDe6SPBYoWG15bLfe9rhexxaLrdKn7dV6cV5GYsLT325gtdKuRT",
  "key35": "56EHb5v7aBUp5Mg2bVqgUDMC8aub4HmKP8MYqBFqWfX4gebwDA4QguoV7L29EygSFJCQFBKpFrcXzSGB9FDB4bKD",
  "key36": "62WYjaCBwC4QyEsZsAv2ti8GxfUxZpkfcz5zW3vxsxeU2DAZoeFYNGDm1W1FyR5ZY9iZSGdWU4dZLzZFjt5ZYPtS",
  "key37": "VrtwEx8Ui29j85mwVPSHJt24RebKiCAGFuKDHWn5XE2ZV9fSz59Wu7gRQLjSoYcwD4uXivEhTkLLfw99GMtSuEx",
  "key38": "4qUXxhJny8MHDRBCEWtCKxawxjbu1KVS2HuC7moU569mxa728Ha4pme4ZgkTVwarKe24bkp3JSS8aFXf8RTjWbYZ",
  "key39": "5mgwXLWy3aGoL2iAfwvsRHVNFNn8RQr49U1PVDGEPFfV6xdrJL5BU8eXi3Cn6aVxo32T8ccAb3H3J7dXF5rwYNvv",
  "key40": "4BjUeJVdrpJ2Mj9JpsBwGUgutdijgqoT1gFq4sYtbHBXT79baagpdQFFuU4mkenz1PDP7MJmhWRA69GPJL15QukH",
  "key41": "5gx4qedQDTxCqkurnHfBL6LLVV2J4FwCBnqu2ok5mjaegPe5EFgkAvYLCnkstQsGUmruBg7EGwYEopHHPNHEWxn2",
  "key42": "Jk23qqYGqKxqnDXxRmFHNJgjH52WMWhCmNoHhzc1kqzHarRRri5xQK7v2YdRCpVmUe9pJQqmQe9274KHBdPwrK5",
  "key43": "3xxWQrGjpqmNcniFbiA1BxBFTf4weHiY4b3Ps9RM3VxUV2J2gedqrvrikUxB11rPHz6KPoqbHS215Ac6SiNwDsH6",
  "key44": "45qJvniWrd1a4z56D9sZW2zV3cdh8mRMENRzR8Z4SqKPYtPGd4FpoZ3bs5r4T1Xtbr3dVqddK8n5RNG1Bo1zbQDm",
  "key45": "qBgW55uZ5K1ZkfjtzWWBHyqxwaV5kH5Bh3TXWFNMBq7K3FSVbF8Lm6fxAQDJC8dfStxJask782Q29uHRSNujfPp"
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
