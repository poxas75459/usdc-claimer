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
    "8Ee6RyqicG9631U42GKAzFM56hDxm3SHtdomdoJbZhhcsbHMF8CJw9sxWdjtf5iD11xyNfrobuGDKDoqvNwUbfN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2UMgwNDo3AihArKH9cRg46fzBefBWHGPiPpzd6bjPMHoViBtosgYj5PJDuzHB3xUcebMabt2FBMJQUB32GuVjYSn",
  "key1": "2JotQL1Bof8uXJmN7kDDPsYNMTsMy95RpwQM5N4Qob4ovPNy5kjGUxCXcyuRRiH1332yxMVjfPNSfqfXK1PQmTQR",
  "key2": "55aPpajRQvqsDF8L4SCdt14n6MHhi3ksLLWDhneUCjkyLpRQXsVucXbMnHqyGHHJTXhSLPdAyFRoGP8FFxAAHUkJ",
  "key3": "Qepg5uj2eWcPEgfVXYwibhVfFEzQrt1QjUAcQAx4zkU1qqjNG38NiEmHMC6GTfBcoUNUUmJQbfUbHEXLZSCKw7o",
  "key4": "35VQaj5PWJ2bP4J2zo6EdRyK611WbXAtQoeGG8YUHRPqn3GkKaMB5PKxuButEL8WjDKJQTpEzqRog1pUzc17PvN4",
  "key5": "3TxyevnGdXAjZazpMRHg4QpgXJuNKpUiraRSmzcHSGbo1fQmdXKEDg1FHyrMktEX6aCH1ke864Yst59SAWupmC5w",
  "key6": "5a2ipo5RxheDwqLMRkE6yGVLCtemUD1rDYbwRYXj9j5tLky8LqBb5ffp2ievRchgS3rMGUhc6z4CjvDestWR5kV8",
  "key7": "2NKbR8VYNiahmnAQErCtTVVzm4vS2K38b9N6cdN3wxCruD4xiM3uCCXy1xMoBtKfEXTTQhpump2hZQBMfB7EnMPZ",
  "key8": "59x5Pgg9cc5ByH1w6J81yPLNWqMhLBSrpnrUnUNvQJQNJeTxBfVgwYKYiYTadMFX5Zbryt6CPYn568JSoGAHw9is",
  "key9": "2CBiuVr96qdj5s6mkEHbD2unBgdgrAtuD4mkwvPM8415E2tWvdoA2RGZCT5zHQZFcNWZoDv9dCdXVtKgmYQt9cF2",
  "key10": "5s3Zrz7FM1HZeNT3Mm1VtFyFdTQ2rWhUJYUrapvPTSDuTPp6fFwsddh3Yjn5qDpCQ1XhKuCNAEmXjsa345EHUbvW",
  "key11": "3ahXRRRSiPsnXqwnKnf4RrYd3ZEWwk3AFVgvJHynuRejgY7s7coEUeztBJbGaynhY1pvSkEHKMK44mQh3nWu33Qh",
  "key12": "53TC1CXik26dwdzQiVQdH8B3uPpwPQF8aVtp3jEQ5XNHgZjtDdCk4JupiAxhW6Zji65UAb2sJV8scxjWfBePpHqg",
  "key13": "4gBmusonbovjivdr4cZGqQfeF1jf3Gq7WxuW1GHgBZabMZf8D2DPByNnDfFtZuwXDhd2PPUup9uBa1N42GPwJsNh",
  "key14": "5vKoo1iu8YPb4pNDdKojLQfp4ZThJFKNEP9sQnMPUSBLrqAwRuxM3AsHHTzT648BxtW1twfgMfVk1sJPDHqPBQuQ",
  "key15": "3kFoxZ7gjHtUHXTYvXb3yXDZR8TrdQNey82MUpVaMfR4Wtpdywcdi1MwKeC2TzizBXTPwDWinALv2SHmv63UHioP",
  "key16": "61SQas1CZWYm8bJaQeKa1uRr3ARRRMU7cAyCxbhMayqL5iHPairjUNnN16GMnbwMw5uCTg8MvdgZbdarFh73Rf8i",
  "key17": "G5nUr2ASKMKR8SCNHi8J74g9588eJYD5kroistj7fxPQJPGprrNiWJAnauJkiKvh1aNGuXSf8nLJ9CcFtRKJ4XW",
  "key18": "NX5pSzd2qQqZh5J5XeUxgPo5ipVeA6jTu7PeJAEWTPNHUJ92dokhG1dLtVJ7RyS32TxR468QRXcRjuWiiRzgQYa",
  "key19": "5beyoX6jJTL4LcPb9StHrogVCmcmpNKDLvpU7jSjNrLKTDQ4Ypg6KKyzy85acsH1s5mwZJVhcWQAhViPCB1XgMdQ",
  "key20": "64c739UywaZwxaxk71aBrzWKEExuiRcR6p7vhGnmP9zmqBM2q5cv4M5CGoaGB3d1QuoYT4Ma9B6fR1WdVYpoBPJW",
  "key21": "5YW53F51BFouT38a8D9UGxcDgo4cn17qK8jYW1HAQKkj98SrXoj7YjNNYapfgBMGPTM8E2NJqq24EgpM4c5UZ8GS",
  "key22": "4X8XQ4vdHQH24SZdCzavrKtPt6pPSqMoSWs1nofp1ftuEg3Y3vwcteNjgn2R5sr4z1seyV9uPcRc89Vj2zN3vV6a",
  "key23": "e3Ds5wGa2kfkuFggwm7LTibWnM1cCCKrrwRM5HTPViBg8PPK26MkJQR1km9ULwAtZwWBETQPK1MKF38y8d7n8s7",
  "key24": "4sLNqgXWLSZT9ixUVbxUindM7iTcKBfb5ZbPwNrBXcRaUpBAERiUTWDpLNRVw3WqyZKryHt3f2fAEygXSL4ySQnX",
  "key25": "EbKDwfqWdLgzm3BCm4XRUuZp1B2UvmYeecyyktSLifVXjNWjk96KfF9D8BMU21yEv37bEziJmmqfSyBkSsYzWyM",
  "key26": "4Sxnj5u6rSssdk97RpAvpFZ64kudo13LRcGhVN8k4ku49hx4Fs2KfZ3qsCtKoLjmSmwqcLmHbZGeEMSmod7cZ3h8",
  "key27": "5R8PbKeY2dbHpLHtUgYTTeBErZ3gBShqjUYqxK1rzM71Px1ja7A4KLA9SgRs6LGXtLMNvHtjnZNh2KkKoTPpPXGF",
  "key28": "2ZQ69Rk5p3xgCzNDb2ZfBVETNUtjeqsKkJbGvPzNGohiC2B7rJ9ssDSYMYxHKX3boUNQwXcxsvaXv7N4jkL9vN3C",
  "key29": "3dvikyGYDmCGvLcPyxTdnz6mNhCfu6WAd8ikY8qmDeoBD9gk97t4TLqbL3QRVKrgsjeviK1wBnBU9YcBNiyg4WBi",
  "key30": "3D7eFmRN3CNiRfhVxemfa13ektMdsgMa1Fzz3U2Ak9FASFV7Ff6NjpTDZCd7DenyUDs9CdVVJT5PaNpFtr3z35yB",
  "key31": "46ooKuZ1GuUpVn9Qu3V7FX92JkQTSm7PBQXJDmB6Ngz6HxRQW8RYmUKxvajsMrssvG2MWZQWVWCiZpJ6A26WqFTo",
  "key32": "2AmG9KGjL3U5w2tXLjam1wUeVg3iyZG1Zqn1PDmv564dTjUZxkb3rWYCvbTsJ2JJDfxV45M9AWfrZvV6VfZYnves",
  "key33": "3zzFtTNZEi9MUCtFG4evh1ntFXNKfHSCLBrcSwAx11F4e3TJBUYWLNBroRtRg7XXgheAzVQtoZuwwDs2nD4gzddP",
  "key34": "mRA6kptv8AmNmeb7hJiejCox4yzkKNp5R3Q4pAVprtGz8Urotso9uqvCfaSF6DxzBF7hsLJkFpSzu7nQSDrxwfL",
  "key35": "5ziM1TfYfyocopGHfyL7bUwyL6j465Mmd2TGufSZNPFR2kz1WQB4yiZmHm71FJU3AkBVxoRLBXqKDEHV7WVi9CNz",
  "key36": "3AwUYv58qfKCrZ6tP1h9yRVGbETm9G9TPz8EfVt38qEmrafYjU5SpiGAGFm9M3NJCzMgmgHkkNrJ25eqcEiyRJm",
  "key37": "5UmqvrTv9nZWRQwKRA6U55pqoPYvH5fnXNemqW6MkyytyTXGzhYPbLTN68xpybkz47A2sASkpYoMUFLqnb7jCVJt",
  "key38": "3PKnuXAC2tQMw2wHPymUGmHqoKcv1r5Qya3gEbXJpKBRmbLWZEfhXYULxCJLUbVLbwTXQsrQ68tJ77sow9GozYeL",
  "key39": "6wTUjv7zY61GZuvYnzLkGzcMKNnWE8BFECGTe4cfJXra9EWeg782s1JAEseH1EXPnNRUfLxf1sFEDTBeDwxE6Dn",
  "key40": "4wrsJkkDkNV1Z4dgvJAD99tscE28yytimbKDCToLHNNTKfokEgPiNV6FYCehTfB5666odY7fS6vrQgxreJ2qMFbR",
  "key41": "4ooPStYPwQ3mtfsBo9fbT3aQLgcX3AfiMRd8ZnNAFJ9AZqk3wXpi98RTnU9Y3Cfyw9VLB3zzX6PDD7A1CheWoyA3",
  "key42": "5SEzFFAqk14akz8M5xt2Q1KoSLXcPQmtmtnpJEofda9J1khxgEQLz8zHqAmb2eQgomv4EjXzwcA6mp2Ns5khTsq6",
  "key43": "2dmzNKEesyv3LxCPNWw96VfMCftTFrtSg7cCf5SuofZ9GiihKCnvp7RUWbGW446iDLxuNvYUb9DPCjrkYT6SA8rR",
  "key44": "aupWr4T7CevynPfxHCoj8HVP439wybwT88RFkmxmgtc7S5fMtPqqaoqqDGSuDBegxH7aN2j3mce85F3eRrZRTm2",
  "key45": "3satb66p1izWj4tkSddXwnLM2okrxsDY3g3LKGnNiKUeD2qJxbz5e2jS5jK6K2cjPDKi4VxTXr4KyoJR5TcRsMA1"
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
