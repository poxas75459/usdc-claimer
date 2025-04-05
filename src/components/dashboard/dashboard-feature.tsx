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
    "gk8eSrQ8boQdg761cGbhzAMvDoAKGefcG2mHbny1SJvxLuxGBCuqXRtux8Am5mfooE4LJPgEFjaAzckYJa2pouA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2gV2Z3CH8o93mqehJ58LfmiyySmgayYH89ZVtw9WjcLKbDUesBewTobAZLSP4qQ9CWeCx8jywRkM7zDRT8F7Tsa",
  "key1": "64BmUE6VPvA7L5KXrpeoLwEmViwyhdZH6PX8uE1DfTy1uFJMsaVN2JaRjqNpcvfcJn2piPCLushjsw9tzBUf7k2g",
  "key2": "5BoBJJGRL6NXZCsi6WC8QfTrnv5WeojGG5k54DbMpVsEVovy7boRF9v1YvQJDjiaCCbuYn3FF4tCac1UaRLbCDuW",
  "key3": "2ugXnd2fwrZMkTwJo1F61h5epTFc4RHdY8YAyAafUpYnbkGNAfCtnEoGAsSngND798EwoJpJLKQjnkyivNeuPRko",
  "key4": "22xwHnRSnMYgNH9WAcq6p8Zf9aAytW47FLP1JHkB7YejnNKTDSr45dxoM2n4DQd4gCnZGGMBkj9k8J6fujMLPWqB",
  "key5": "3n24g9nqvmpg1Vk6VjQAJaQPukdtPzRrVVQ8Tw2FYYxTTMQCvpHNT78oTKmnvh5hgsYwk5fkiNuocjZgbtT2Hya9",
  "key6": "62s38E9kQhaZ4ex9vNyDv5bCnxCDDjBA9b5XFf9E4nak2kCKDjgRo52Awd2xZy85P4ZWp43H7r1DRW6r6sLt9xBb",
  "key7": "3degH1mqa8um7dEv5V753TtYDoxGzTa3LxSZeRk9Xd7GJgFsXdCtKTpjLHDFVF1GfZzF9wHENu2jWaEDR1LkxiyP",
  "key8": "2a4MjQN9GwivqihYVjsKnnZc4zNqi2eFDhnmKBEsxyXwYnFWhogQ48VaHGiYBEuwGdbVuxdJH6rBKNo9vZCwRfP3",
  "key9": "4w3SPbq2CDTv4DorEfZ7v5WXU38WH5dHrqCKqNEt9Dc9jWUSAaxNCm2vfpkUmWEWG4KoFXynDbvmMhw83oqhMLhr",
  "key10": "49SXVwJxxMeFXZ9VRskx9oBdQcBFVyuC7qenNDXgvZEUTbH2aiUQ9UPwmk1cHLZrMmrWgKfrrohyR8ZfWXPdBc2r",
  "key11": "yy4mSxNJRhMY846ZuVdA3mVQuJQvF3USqF4HJBciHHVktnBx1B9CHFkTqoqaP1aMAdMMiBiDdT12j7k5UsppVFe",
  "key12": "2XRqNaTtZ62XGJKH2c7yTdgWxUQxRGFNNDBRCBvpC4QeXya1qhsbjfJzhasnNrPWwyY4iCNaKne3Q234iYknUKgq",
  "key13": "jLPzcJZSNFQcRwGnqSRpmd1SwAupMdPkKRxt4tWro6cX5M1imEgbidUxQa42Hi6NoMEbL1EE8NpByAQvdbf3kJG",
  "key14": "2JHHfLy5C6Cwo7zMdGNuLT6ZVDRiAmXgVjAYU89ytwGitu43xsAqDMgQzyPLekCXfkHq35rMKe4WmpAPrBsHWsMJ",
  "key15": "52Sq5u4cHmc8s8FgCotkLTjEMKN2gNMYaywjpv2Hiti2EwG2kjg4qwFN2So7kR4hGCFhSVX8bCVGuzedaFduY17f",
  "key16": "4E1k1Z7bz9DwYWuufwaEVJzBkSzYqJ5D8hTqVqk28x3HVtDyRArSDHJRRLg2RRr1BySZx3QMsXSdS62sjERaXqth",
  "key17": "5LcMPsjN5M2EQV3SLsfxVams1nVf3GBEj9HuvuGXHi7LZckn16AS5NWKEqEjqmmRxe23QpuhU1LMKgW5VjUd6pJh",
  "key18": "KudbQ9nJYnx2s4hY2JqdfKHhUFDjPi1w3mJHPYpsPKQQGB1pEXS6Bb2G87ss99YrYdJgYidGkFnun3UpJBbU9pa",
  "key19": "CGBePio9EncZwtETp8vTFzbcRNSb7EStt1TByhm6Mu2yD32VK31DRCXSY3XCTpm3jtrWZArVfqNf2bf2eoP8JHi",
  "key20": "53QPAZ5Hgs7eNibWNSQ3f4vnr364NQhW4jGXJjS79dRaFQtjN3pz32YySwtZXSw8WyrVXLQpN8Eg2fF55RGZEbK4",
  "key21": "LdkQVtHvLurZtsi3FCtpxpRKPD2ayKzfiu6BTS6yxanNVLSEuqTuuv9SU2k8ehFZKkFREDJnSqv59YvLzLYNKuV",
  "key22": "43c8hyiB7DrVsqJtVdtnnaGcFxH5Z1NTMzY4zN6fk3uxNV2DmdFZJG1XzbH8pU3s1NMGtKb6v4SDHygv2kXjW8J6",
  "key23": "HnUTE63enqLzGW7h3BVMo5KjLvVNverMGGnvo86a77s2PKt9z2o2G4RT8WE1YcucTLeEsXqC4wUdXL5xXAoHc48",
  "key24": "2sRJKfC9ddLLifCoM3CH87CSvq94wjEfrUG3CNF8Mo6wMQ3saoi3hZVrpRaVq8LiXk4C7G2yH9VZdFuzAF9p28HU",
  "key25": "3D6YqU4jzcZvPvju1FfRbnQkZQYTYnVKyR3pR54iCeHAm21L3WWmi6un3ppHJ1Q7WFV4ZRbdeSo2JehhN1iXZjvP",
  "key26": "WRFVpMovERXQ2yU3Yn9YpY1o2YZyAx6E1bXFjbBnkMhkUEV49YeciGYqkJ8c33BYWhc67ErtCRMxw4B2VPWJ1NT",
  "key27": "217BKs4mdmXFwhB5RqZDjGex7vTZUb4ucd8QFDTmQFKMa4iDYvquZkgEKYVhi1D1auy3MWELE5Q6VENhuN6yUhhN",
  "key28": "2nVEoZbZmoxif5uVujV4hnGJtxQkF6eQQALAnuQeSmTJQrWsCDRvdt7MeCj3Z8CxKerMsDmFTkWQiFBe2LtZU4ha",
  "key29": "4yM6cTyxmhU5LUfswG3oArA7GSuq5mvk7UykiWjhfMM8RvvndsmwDpm57zyDmhDbNuaBRhWu1tBKQGdCdHyL8DTt",
  "key30": "5MMMC9KRjswEXcEVLP383FKmoGbRtXY9bZ9pX8Wb6xcEqdNkW43AbGhhCxLPHEYh1HSaFTGTR5bw3E9XarbkkC2Q",
  "key31": "2JGJ39jgb6TBj9Rot5BZdRsKMraaBM5sPLisiG4ow7qzs4prymUCsbqaAjGVhf1PZXZwJxdE7maU1wTRHWUTJw5b",
  "key32": "2goAGTczoFX9sDuj3H9gTDDDKmSzfde3xasRmB4ALEaPpRVvton389NcKmfpnkzccdxUit1dNpXzd7H7ED52yP2N",
  "key33": "4zsNSn8xg8Fi2GhChzmnjwTdh8iFCdPB5hSC21ALbkT6h8z6yBW72tzBAEAaMwTz2oaUKgkd1pCRBSCnAKj2VWKX",
  "key34": "gd9amKcAH9fGqAu2dYH3sTt7pEqby3wVu5udfMGHuT9BYqAofKp4Nvc9WMf8qFLsbP93Ut51tJVTzrxzqaFMBnG",
  "key35": "2h1jRiJjwS4wJdm8ys3WsAvk7dtGHYpy81AqnxEdFxH3pN9Y2mcXheqdq7CqS59CCgM9TaBUAYzZQCySoBFzAUxU",
  "key36": "5TEXZpaUvs6XycYhaPMVVkoADnueDoAyMCdhWGHAgj8xiwf9Hj3Sjk489Z7XTYp7LU2vGo7Hy3wipidm1AynxFJT"
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
