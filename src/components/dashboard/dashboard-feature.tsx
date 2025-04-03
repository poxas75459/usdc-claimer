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
    "3zycs37GtTKVk4jsxqpV95rV2YDzH1CLgL51CWtZDmnzYNdLqvk7dBwoNVL5t2MRwYGLRydf2eoppsWReeF1sgEW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2cozVyr3fqMZmMNwMFEg6HKRedjRDfiaiEzbN2vD91ogCThEsz6UGcH8iNfha33SPfGKAehJwnC2eABGAcHVv9pX",
  "key1": "5CxoxCpbvn96DtbPoME8QEtT5M968FSZS4KWd4ZZz5fKyKp3zb8cjAUUP5V77M8hu1urqr765XYwTQJNaDnh8XsN",
  "key2": "2jeFhL4QqvjKs5Hg6uq7bcRZeiJK3PyoDF78DU8cub8QyMw9DbKwheimVu3ErxWPsdDKWvVZC4uSXK7o45dwUcaJ",
  "key3": "5oCDzMokmFq1fUMUAstCW3tG74NXU4UBcxwgqibhBMnCrQTPUPPemxbRHfMroFXX3iv4bpBhxStJLZuLr4m2GtpS",
  "key4": "22gTcT7Bbhbs6vXqGpKKWBGcbLgyvp4wCtDs8ZL8zcQuJwxNftyFmaxEhXXFgWQ7UA5duHTUczLFuTkXakxH31fP",
  "key5": "4UDR7Fw5p8XzskokoPwMzgx6MAeKWvcXMYpzry3AvnjRre4vDfomEG8MCx4GX7eFASz1WFNFEj4bm2QExh56DcZH",
  "key6": "5SnBH9Qmb1o1ZgRV4FpKVUiyLoAfcGLxDegkr3YSRJcgdrWzb89hSkmZXe9xHmDVVH9sTpEWnoWnXY9enfB2Vqzs",
  "key7": "53NeFsChXeYyEjqwcQPPRsGYDjuRyFo6FKDquCcFNjGYqLsmjpkDg71KcXizf8Z78gami29aWghRbxEh2XAHuL34",
  "key8": "2iTQcJYcCSY8YiUQvUEdt2rFCNqSjpCt6JAPNJzmYRVLZzszQVFCg5GT3Nq7s9JS46EGJVusXV3EkcAtoXLGAhP5",
  "key9": "5XUqZqmsiz7ZLt8KhpXNKkqSz38PexkpHQeDNDa5wkdZ9PUYqnZVM1eQFXp3xKNZcb9AjCC7KxzHHdCgEfaggUhd",
  "key10": "5zgAbZC775ZZ8SUFcPgJ1sF9FdqzQUT7e1qaLR96Ff1wkYUDfuLJdHJr5adDWKW6HXFkknb6kjcsiMgHDnQNi5zg",
  "key11": "5bkvgi5bAF2nWLzGRVzLUKsi6uJT48EVgUubksACBdcjEsnWZBJRzYBoQ5HyjftBJCtPCTxCh2kc1WJYTPEGfLdM",
  "key12": "3c3meGpsP1ZaW2BgfU6RaEaHHVaCrXGicrTNfGvmE7kjkPmnnPfY4N1EyncrYUbfJVaTvwLTHPxnzUDwrMFA4H8f",
  "key13": "4UwGMrQCWoh9tiAoLb2ix9LF3Kq7uktRCwWfY78fWQ7hiWv6QoRnNPDDFVtBszCH6hC1PESNuJncr1Yho8GBafdE",
  "key14": "dd43BSdt1amu1QrPtQyXSo15h3pbd5F7JGns8fjcfgh5zSgzfDtzpscr4axBjdpnpp6hfKLN2KZTK9GdwJxgzk3",
  "key15": "LE4QHHW7GM5xNELYTGoeDfZjQ9AyB1qnSwfdvHEWbfnyxmd42cTLvxeBZM4Brk2hvXowU2JYjdtyLs5HSWd1go9",
  "key16": "2vNdo7aVhW4DBFfY9CAkAXFYXoMcmQyFoCf3tQaUuw5CMtb8jsN8MxX2JhHUQwMvrq8FyztPiJZJFCrTi2HNfzhX",
  "key17": "48ibHroaNQvDDpLDrw9tFdU2q3LepbVdER4UuAh9ApubqTzg7C5uXQCchkyUF1P43nBzjcWmzPhww2X6rA8Xk2Uo",
  "key18": "5bqEJCwowS64PX1PsWuDsFTcc1nEujneh9EJQXQS3fKwL4zmbAGYkw9V2SK1fzVJe222qm1MB1ug36xE9Wbwr91P",
  "key19": "2RbeMZezrjuukVJtzDF74TrTe58qW5CyzuKVmVXDtDb7wvCNE2mydkTP8QchagtpAFaN9pz72dbjNCEXN1LY2FGX",
  "key20": "6DNMRnWdZqsBZP4AKu4rYK6NhnCFL6p47xCgUzQoZv1jF6Deh88wgsgJPsqNCujC9XVdvNY31fW89Rmi9nKdyGR",
  "key21": "q3dYf7zZAWwbFPoZepALYKRZRCwnbhRM6pemcKeQ1VPWfz3YpKdfEirS5sT5vuBEKx6GSc8LKBeo7XZZP2KXQ24",
  "key22": "4eXoq7sopuQMzk8NxAqR6zhzXiUPst4orVX2c2xATSSWbmGUwGpjz5WgqhQ1QajzZRMhuabKof6TCwP9WSa1wyqA",
  "key23": "4HKsTnhVbkC1eqUMZL9XWjWTwmurvM8e529eExVH65JzExcbnfczf4VqNoTU7drDYGTRJUabWjMBGKXyCjjRuta5",
  "key24": "2qe3NaZwWJtoJmCQzwqDUwvgC4LJAneLv2W34JwEWvVvG8V1j7sAz5bUP18Q1yWpdvTY8Psik816S6vjwjzg2sS4",
  "key25": "ERntqehBir3hgfwKDhSEgRcJHu3npAk9Crg7m9ziGPjvuiBpMbVkNicTkfQnuWe6B9VsCbK1PEJugrvzYgDT1xV",
  "key26": "4L8w4pQFoGhnGqTUQKqqrpCRLy8uqmRzJ8cAM5ozQDM8gJdTFrcSZay6Rd6C7a2rwBo6eUwgimB4TFNGXr7rCbHn",
  "key27": "RxGFxH7zAFVhFH6tcusa9f7NAR12huV2pZWcQE5SgceWLgCinBPyNaZEV51EoyiVMGmQR7p68DAUCqc8N1Vf9Zv",
  "key28": "5iCy43j1R2fPZ8AozNQbexkTFPFZTyBFpBRBYcrd3xQDpsHnEtVjdqgUNjB634HjeGkF5p9FLZzc4enDJBmYAovW",
  "key29": "5EaV7i1FwYvJfmNmhPgiv6Bw2LShvyNt7hpBbPkidmDgkxy7zkhbJDwPeLb2jc8rE6xopG79TcqiMbw6vEHLAJEd",
  "key30": "2ZHki8TeP3WSoFDLUCahDiMR4jLNrV2zyv5xYpEGvDGHjn3E6uf8xE6ytaQzitxEze4hUDmFypw7cs6HNTUAhh8v"
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
