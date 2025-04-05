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
    "58g7N3Sv8sfPRTNCpeWypSvNM3GaYZR2WBFn8uzfimeaWzCoQAgnw1u87MDya6VBKnJiZrjJKPjjrqrQXe2VGjh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4aGBUSk8zKXH6Kdm3NhTRzw3W8NEUbXeXsg8vr17FdG2JVqcTJ1Xcd9prz7oecvu1Nyo4WgjNrNbuzRdeReB3HrV",
  "key1": "2ohBCUBfyLUt5ZodtfTFDDthg6wHgfVNmseXCwkm8s5SnGJzDr1JqHqHyvL1RNDLJEVNMAxfLaBRefrXiBYfyhPs",
  "key2": "M2h8c2TvRZFQDJDRZYJD98RziM7Eia53XwSQXPZ5xGpAoSPQvBNRsHeAozzEoxNKiXpMWZjNZh9WR1XWbbznh5A",
  "key3": "3fPpt38bqLoNadFi55UEM5S9GAdHWYq1LzixNFYUsezmnx8Gi4EiLt6RK2gfesqS83MJBdsKkxV5tgb3dLjNbCfJ",
  "key4": "5zAacPQRb2h8nnTbvZGQfasvaxHMtziiyGb3VdJVLM5hiQs3FErbtdTaLNVL4jeazQrkwaAAvEEdrZWbEuseKGod",
  "key5": "Emd3NnBEcV1Tqvh8ZeJUMManULwCfSTKN1QrMbAH1fiaV6LAtaNgbkGkb8zdo2j2SfVnujSzzmMMCzHSrq1Ajuq",
  "key6": "cv528oUMxN4HR8x49PJeLHCdkMPjeKYCCpNKTvBVBKq6iCGsZPmrQjjVSZB4ZAuh4fQv1BviXu53LHscTF8hpDp",
  "key7": "4Hsy637raQfq3zn8WWJqgAWKN7juJPBEt3s4fMMTikcd8D8FyZGCU8cBa7abLqZkgYvj9H6p1xFnB83KeRowKcKo",
  "key8": "4XnfmBQrfq72bpXBuMkrgC6ZA2aLe6iixe5PpGNsDFjk7CJL7jD4aRJcEtK6QuwzxM6Z3FPgX4tvLJfWRCwUE3s5",
  "key9": "3YHgCnUGr3hwBAEdAobitbfKLaYN4W2KMVejqkgqmXsRXK6sgiVT2VpLfrM4VTRicRTYte8b63K48WpD288e1fsa",
  "key10": "2BpbMCxnK5S3uwkHCf3JWCRoPMUWpj8JZwNyHKVrK2FokKUFZ9nLtMzu9LfWMiHk9V4uNYAutbuqAdb5u3EaFPNo",
  "key11": "3z26TsW6DcfCPC3qg21QLJsFbdGMbHevwCLHHY9qqpSy5oyvptpQW7AyZ9EPsK4rXrq9L65abU7hAZxgN9pP7NoL",
  "key12": "34TzfPqJZnyVLz1gkw9274LQphcYz5JWPASuEB7nygQUGabRNPjb18rrgJFEncSiqBjNLoBCL9tiWh3PVG5Q4xHA",
  "key13": "3Vzp2XQiCqnDup7DjgGiSd4w6kRnDe33VkQjCZWig1bGjGbJg6gMWzdrvFpk6di8gJwSt2ZT23CBqcJeEh8PcQnE",
  "key14": "wn3TtCyCY2puWUGw2qqH4yB9FmpBXbY2DvnjrHJ9CUR8zzHieuvDUCpnNwpGqbLLkGrYyDAtikq7t9AYfzngoz5",
  "key15": "37gXFcRUU2GxMkyFXgSmJKMQ4Ahj5ffdGKhp5DLVRTthQZNXqq76NPH5ud2FPcJAQiEZ7WfELjgF4Ur2fvaqME5G",
  "key16": "pdfEQT1ktT5iXYwooDGKyL5dtDUSF4ZXHnjBCtsqVg68dEng18HCZWqjibcSTLedRAPa46T27WpRNG3FWTvnnNh",
  "key17": "22rVEj8LDLEtUCW21ihTSQHHJDTRM2zttzBqPXSUW3pahZu7ZFbsF6kVbyqdqFYDnBb59Dxv7UBr5Ukmg3FbguJQ",
  "key18": "BaqXGvaxqQxP8t3SgiXdaDPaTSgc2YfDtbRsStjVudgJHjRF6xLq7GtBQ9rNYKTD2AtUHknEzTvWVwi5rP9xpjH",
  "key19": "4Ywg5T9Ui5NPpxSQfHAtWcvVEskA8cr9pLnSPGYfeNpSN7FqGu2EGgfiuVh49SMwKfxPHVLy4D1izMKB87pc6oPo",
  "key20": "5cgZu7JyyNaKCBvBcL86pFamDSu5vyFZwzSAPLXwS4FQBWQTvJurKWDeKu8iPX9ZJRvNceoZqoGArfajiT2hJyL9",
  "key21": "5p1LzAVCizjH1XcaApvHdjZVibxnbiNsnBYxjetYbwcMmiG7xgW8aau1nurFpYCXDuiEGGQkNwJfTzqAMMYjzj7E",
  "key22": "2Z5LExT95JqTD4Jqp8dJjv9JwwSZnUvQvaYakcGgGUcX5qn5NHudnHwEZrKe2Hh4wD9MqH9BTQ97Dyhu6XrPJ6w9",
  "key23": "2fbUHiRDm4etgxJDTB3LxoAgFR9EEVb6x5DHcBHuqNMGRszvNwtZgS3ZmjCPphiV2AzLaFeXNsByZ2QTSmusGfHq",
  "key24": "3NJjtSkLQUgGvPA3oq5S3vYzxhFfFPvWZuUDUtGvUfZYL7TpdQtE9tMyia6nyCnJW8hNqHknqi5NT4rDXN83gZHY",
  "key25": "ySr5qxdyxFzkEfBu1xNgEMnVivKzKNJfAmmNRz3WYHqzcazSHgNcdG5JqUbBEX4P38CwJWBY7GozjbhRC8jdLxf",
  "key26": "3isEUvepufz78FJVPpfoBRWP9WWAkw7z7yoiGxTkU5cYk7nA8aHkPRdrrgAn7qtuTg76PkYz1zzFhtFeiHssTHZJ",
  "key27": "aaoZ2wTChRdozJ5P6xTcupmnj5YMWFWadFS6Z9bsp5db3BSBn2nfsY5bDjph1QFjXisF6u5ekgj57eut5fghwKp",
  "key28": "5GenLi3GRms2c4NJ1ezQbVEnzPJaCpiTwNC4fNdvmaqDYKstgiBAH2jjxypxBUFamexX6AkuKR8sBsc3fiv4Ttec",
  "key29": "4riJeqKrcXZHxFnv26iQZ7AvLT3oHXCAVS5JdQNCsUeE8iF6HfWTyG4ikv6jJQxgBMn3M7qcNBaJ8MBTLZhz3vHv",
  "key30": "4grLHVpC8LGhLK8AcCaXh7zkhR63sDJbKesyv41sQmZie4pwxTBRdMF6TPxfcZQxW8VL7YrzPcCXeb8bnRgiVQE6",
  "key31": "25LiVxj1HbTtoS2c2qzYtyYVR3rqgeDgD6PoXXG4TjAwiifcx1M5VcaQEhNgLLcWiBLkyDpD4SHUmVw2GwfGSCs2",
  "key32": "621oYaK4MUB3nLkbcMKu1WvfxjxmMRVHXBTGNEdBqzShEJHNT7zU2dbxSdsVa9mynebYU2CttwSumsc8cLKoqSmG",
  "key33": "5zkDdyuvDVwDZsqd4qp23WM8x4xNKBkJzV8i7H4D8FH6xm1Py7VWswZPiezFsSU6KxtyhBrcbSnZtH6gsUP5iRpH",
  "key34": "4qDvC9dm6ePanVmbHeBnB1HecieeTVAsx5yCSiLd5SsRhH3iwGk5QhgEhginSSyodLov5HBdm5JvWu52ByjSwLoR",
  "key35": "2SM3CMmWWbkGLKzQuCvRrnfN5WKsn6NrGwBPi1TFTakPdRvzpvfYdyfMRhzAjNpWzz3JC5soMsx67LNa8NPZGeRh",
  "key36": "2cXc7LtWB5qkK2LG1geJn7moyWdwfThwDAjk5vnnYXdsdU6bhqqX8FPyTCX7iqjjuQFqF2ztexBFsCkXPHjj8ia6",
  "key37": "4nPTCq9grA6hqB9Ygwjj4xpFWTn6j6zxa4T9gLcDjUcpXZwBo4Szm58vdre1tKoJsYBoYocQK5i6sYUng5HQeiSv",
  "key38": "48iZFVHUaeFrRqMRvNQxz1Rq464ZcSCtapqSxY8FULQbKWjgscXzVWF5uK16gpZgBxcMBBc6B1NqmU5jRWid5cRn",
  "key39": "3ZDSsj6RRwpPHjTKEFEGPH93XtokaWPVm6UCwUjGHA6YqmpXanzg6MMKHFgVvC3pcXX4bLC9A9Sg6aSMZ7yfaH5P",
  "key40": "32Tjsw6R2bxefnqWRXYdwj4LidwcrgyVN5nrXDG9VVcHWSkHQvLgKZSxkhGZFFd3trTWTueozw5itnkN43yJevoG"
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
