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
    "3PFqBRSh47creZ2rJVCXMGZUyoqG2WryWGnbCCTnxDCCkGPjhzWC9tGkEsjnEPpNEB8rfvo6Bg9h2FY9jetFGU1k"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "26dxnJDAv8UP5p253gayUvm8RjXYJDkmiF7Th5xGaiDLpvmxMYWm4Pi3WSdVgcqBJn2VNUezHhHvYX1SdKDrzkj8",
  "key1": "KpNLD2oxp99QWF8PeotVpN85UScZWyZZcsZ9tMecymwEsEEtbkDPRiirvjeS8sXm8nsH6ESvbgdZdiLs3inHWKh",
  "key2": "QDecAgwRAt3bh4j1uPXPAcFjw8aEoo6LFjB5aSv5zDL6VEiknmiFyraUiF3LxvMUbEKz8XCa18URR5HwfRFbdRz",
  "key3": "5E1qbzdxNhBLuyZ59dda95BhePNhcTMUVwSg26kcUQvMappVQctDz94PZN399bBhrbq1Q6ekGvtgdnb3J8QsZ7hg",
  "key4": "AJGUMQ7WhP7Yg4Ht27BWwWPkYR3GhV3eTn7G1KRWcgF3CXZpQyQ49JXHeuw6r3MZ7By33WfG76LoKfyte3U1VSg",
  "key5": "5UrzsYK67AFsG8v6mW3BN1B7unpm2cuKprW1wchmy8Z6SMB9N9ZH9jFtbQa2s88CWWs444Y66MmykBtTYFDu1tFB",
  "key6": "3zeEcrKPTFeTramMZBWWkA4jBBDXcJhWrQLPK3P216sLJMoqNq4K8P9tjfczhqb2Z7dti9HsgWXnR9VhkLiznSdy",
  "key7": "53CG3ReZvS9h1voGi6MMr6J2L7adZZrhFkDpG4oP34n8GM5GD7kaL1p5N8owqGhXz72rotzap5MwrsjTcvgR6UYC",
  "key8": "5yi9isvq3P8fKWMAmK1L4kzNNYHJ11awZMzNM3zczB7oJshsJNeGKFgsXqgApKESYaJ9GRwp3GdXanjqgNGoSofm",
  "key9": "3Xa5GGwgTfTE2jRP4wzAxrn47Vue6NUbpYbCzh5ALoNVaoE2TtuFHXfq68LGF4Gd6238NrXQ8BekFX5XKkvcdEzq",
  "key10": "3GLMS4CyGvGC9gSJtUE3pDnZFGmzkKd9qNWiAVoFidpmsojCiFWaeNSVw4v7CkhTGkNjXyrdaA6Q7wvdGhW24TmY",
  "key11": "4dCctd1VBPJqoYt5UAxh61nprxirvzaYF5xkvqKTp8AtSxdkfWjDmZRrU6x1wsQ2RxDhEVqE1aQdkhYcx2xF17tq",
  "key12": "P7514sUYeCGaKEW7kSHufi4wShe8eExxYRhnMvuBodj57a1txmWGsGGHH2cud9V7grFDWnNdx8dFTg3LaS4SCNU",
  "key13": "rjKs87qLYksY8Bzy6vSH4siYWh1T7ujHGft3TC2H2dNovibEihFtNaRoHdePybnjT9Nr43YpfvCt2iWS7Va66VA",
  "key14": "4oF2qt4gApkzzmiwzsCen5ApAumssUNf6LZyiQpJZ4XuRDNBLnAsugrKSHpf3TS1cUH4LkzBFir4do9DMbknWkm5",
  "key15": "2K1Ai18QG8nQTYg5i9PD4DR6Kh3GgQWbo4CoEEAGstpXdcXQbeDvYv4X8bcqtpmbwkaah6qqYJCkstadV87VP3CW",
  "key16": "4yNR8sfo8k2w7P2QngM14EfSVmWMh3f7fgxN4SLaxAkfwVX3YHignMDEcqkyNcdizMhPzRg1fVqFDfx6v7uVspYf",
  "key17": "BvjLNFhTsTBvR8DJPMJtaffBdxvN8CHJT64F7VGwsmUTMTXixniz6hfUBhVQUgYfa6JLokmTPxfAU1PpRC9uftF",
  "key18": "3d9DyiBDfnqw6jJB3s4wCtDvg1FS5f7pgpENMfqp4nEB79najKTgz5ws4ofxgUxFfjqJw4wrcbnsUjya9VY3FzU2",
  "key19": "YNAsfYHaFKmLZhHHDV1SNzvAEGxkGHqaVNLmHxSURiyE67a86wjVaFSxQouNdgmkqLGKML1yfnVmChHb1W3kqrE",
  "key20": "1E42NLAf1ADVXiYNhcmN7PVksE7nzmGdeUDFvhkJDoaZ6Mjr3j6uKhF4eXtNBumMEX8JxTB1U7or2sFn8v5HfuM",
  "key21": "NmMjhkEdTpK7P8iQa6srTYgW8RMUczLuXXMbMscMgp3sG3x9RHVgU7uEnN9imcFaXCG8LGVbCV5QkmwAKh5eonZ",
  "key22": "44LNwZg2WutYuSNkjNr1PKjVDfCdq3nYo72xWqmC23qKi4bbn2za4vbHwCyKBadGrZRK3MpZ8pvt74SyF3GnjED",
  "key23": "44kZGxakphdV2N7nq7sPSbVdJvEeNPAirRrQxHqjBN8pUW4SH9ZBC2Q5fxTLfievPzfNg7ib5Reg1hzx811HBYXM",
  "key24": "4QBPDtpdYsKaf1HkM1LD4MBc96zbWRmRFKrHZbdkCgXRofC6ydq7SDjUiYXagGu11zSVpKk8KoCtd7RenkuVQm6e",
  "key25": "gzSFdcFDNwGj5FspcNZiNZ8ivNvHr1RzUMV2pgDwiMhKG5zgEkj4z2j9SurbQUBfs5Au4kQmjpqU8VnD45kSd8c",
  "key26": "5CWwjc7GQoszxwdHYaNBtWgejtXJSuBQxFLgAm6CLPevyEuu2tXZSYbqZfyzoRCv2ACKEeYn9YB2FevSHDDv2kau",
  "key27": "7iTMPH8YA64C6id3wfUwPbd2wb1U1UpScPPEwV13NEe9PLBBn3atsaJ6LWnbxJ2bGcQqXtRp3czqpHK1GqDcqLh",
  "key28": "2gUANgF2ophMuokkgou33vyrvfqph96ZhU3FVHS1HvrmnU7WFDfDnSD4vD7iPACXiNFtb1ixUXQ4B7nXmMahvJie",
  "key29": "23a645vZgXeXTAadiYQBvyeiQ8oVuXqL7zBsKBcehE7mFtMBYXhq1L53o9E1aNBQ7x2ULRBkeDKwabokPKycXU4G",
  "key30": "2cpwypjUUMM4j5bUkrJ591Jb8WeYZR1Defh1TdtPGWee9VudzW9svmHbfhBo57RgyCqvLmsnHknpMhhq3PQEt3FX",
  "key31": "2JU8uxPpgpum2z8hB8b45uqx1YbtGLXm8ASSJ2DLtpwHxUjVwgqgAdz4yraZJpnDWKEvMjWFnHeZPNdNZVJCvXb3",
  "key32": "55M5vz7h6iGSNNRCm4tbSWHiFefT9oKg7nZb9KaQijAW5X4yxtwtDJVNGcMs5RZQnf9skbudSrZYP1rCmVF3W1Gu",
  "key33": "5HYvyY8JBJF5DT3dDtjc2N5SozPj2U8a1qztXeyP4abU5NjLwb86jZuxu64H4Aa1W8dyeh8UFXNQ6XqGayibPDR7",
  "key34": "412KwAAiaws3LULAQsFMotSVHyW8S9jDE8oEoJsj2Xu4bZmByZAKcnRKKZhLMyryGpiueoc2WsdowCcRJkkBaGu3",
  "key35": "2gJgRipNCpWA2Tpj5M7ExaxfxQ46vNwTqjrrHK3eRQ9ectToktieYGa9zfMcF6yvMmx6qGfKJjL6yTeoCoiaxH6b",
  "key36": "5VBvVqVbyncsR5yNvg2RhQ9VFQtrZDCYVvRm5KNS3gNL22gaYXkPf59ZEGVxadcdDZ2SqzFKaZHbeHJREsKLPRV8",
  "key37": "5zw459vmkrTjeH5ha5zoFAmUgcLUJGPiwsrcNUekwSBJ2pSSXTK72f37foEWJ9Sv3LCnokSKZKrNQFZQiWdtW3aF",
  "key38": "3zURhZRqCCHSK9soxvdbWNLNnQ5L5v3CkvGfFxbUssWPfbi5GFpiKK8C7Kd4VQGsneRAkijQ3q7ATJSsguAv85pZ",
  "key39": "2nBSe7L2qx3PTSXYNXkRpPoXUJYG8syw1sVa3MDLdvZ7Y4SXnwv5BkjaDFW6Fm2ZRQXQzYixvh4mwz84uhJDwWFE"
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
