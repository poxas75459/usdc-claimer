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
    "3juecNXaX2c52ur266ra4dBB1b8Q7CKhHfxkQ757qQQYyNVk35ekV7ii95Uty2stYBmzvryYkHp8b27VrjvSwTEK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4H46VTKQW5oEASnT2s2VoR4UodGaSJwQEAsPMLC3drAjfpjwSDKVntThjjC8cFzxUvgzj9ZfDjJw4W1DXCcrBftu",
  "key1": "645XAuoqQRbHvMVmoKBEgScpuDS6FH1fLJT1nMZ5Nsu3KURkH8UBbQGYWMCFyepHhVDhXYZxgzR7RB5Chu5UCGZH",
  "key2": "5xS5RzqBMvqbMKPQn86H58hDjKUYaZfk2nGFH5NeVDufE9HoAEry5VXkoTiEcVXQPS7oqGyZhdzRvE7eTxVCz1uA",
  "key3": "4jBonaRgKurbPhs9mBZPYfui32zhNECcmm8FVJ8ZxQR6cUcXb2Q817L3ZxqGTLUPzqrPspaa8M3kNNprDvtwMwDa",
  "key4": "zgKPk8ErAdD2kFMcQQPBrKWVHpNhpucRtSQx8e2s3rDWXiK1NtiTT1evannnKhmTPtxe2R5MMnKmvfYPuLjrUmX",
  "key5": "2rmbwJ8aLVjxvLb1M9zLiTpefJkvqhWmo7PdBcudPTJA6ghXtTEqDwQjX9AHF2KADcLpXEd8w3FXXM6b49VqAJEX",
  "key6": "37AT2SD1zEyg72dPu2VqPTX8cGiwqaq5VU8S7thiGkxDg7g6K4SviF7Qbsum6jqWozYPyKQEJ94XcCwp4CDELPxz",
  "key7": "4QyVgmQhP6AkZ1ysLudJeHuf1vezjqE3dra2c22SPTFwceuBiicmYRgWJpf7anquwqWbbwppMkQvqPnqBY3M3gAh",
  "key8": "562SKgDCSbp17DRYEQ13Ud2A4ifaZzf1kW7oucSKKnnJc8XohR76ruDzBqE2HyAHP5gWB5Chgj1RQ3udY1BmaBuD",
  "key9": "3wd1fCrQoYzv71JtBhYikX3mNDUbF7BxLVoCa5Th7U5UZVgdGCAs9eBdyw8Nxrw5KopNcnhpSeK2uVTZ8KoqcPCc",
  "key10": "4up4Mm2Lb6cFaSPrdkvwn8rUgDuNAa9ShVkE7qQaSgkYLDEPfeZH2NaEisCsEGKtgJaQonSo7H5D4y4EyuS5nNxC",
  "key11": "o5s4YwqTirDWfBUp1M35NfmGqu8upScUkw7WW2pYypbSRkZEAgiZ82djxZmtfTsEW9eM6JMfqedr1rsfJEgL75x",
  "key12": "2bptHNbXqbgNMNsR21EXPUhVRYqyx1kcMrKdJQA2gE8dCJKV2HWXt6kTPpEhTbNx6ByhTj31xc3DKEUKpeJw4jrF",
  "key13": "4jwdUJzgNUMYTgq7moL8asbUiBvoiudnZgfhiXmG3E87Y5htiVNj2gnXynBTWU89ASmvg1HjpufQntd8pLJ1nPXv",
  "key14": "3SFtUWEfEYsNCZrMnLRVbgeNjy94x8HnJMVAKEvpiCwnzPxQizq1JDZVXoVuzdPeoztrHshwaDwDyTVCXZirckiy",
  "key15": "3AhFLsK2d7U8EPkmUyvtbgTm9JroxarG1DjQQQpRW6N22RdAe15ySz5EdkeZVUf85yRkwbAEGPz2nMa6kCA9HkeA",
  "key16": "2VYWBx7Fixrdkpd4cpGPARakeKMhLLWRXyCBFdC2Pm1CrZzHfRNHjVEeXp6rRFrhnSxs1Uv4wZ8TzcD6jRzcVg7",
  "key17": "4jBekaBTMNogyY8CMzH5e8ehCrtDWc1xZXxPcmKShhHBKobGrdPMoPXkaPLC8wqSuK1RkRTP39KmFmvDUNC5b8bD",
  "key18": "3RD7fVZFJNgPutNeaghnJtcXLi6u5NpZ3145ocdog4NREuhPoaJSzhm1r5YBAnBfHLvJVAY2Qcu4iQYpAJfJ5rPe",
  "key19": "3mzBwQbVkNCQaq2Vsbjzrd91C9jXsL77bTZbqK2pkRm9r1R2BYJEmt8rn9DMJeigRdRm5ZW5doADzQUXkg7LYUb",
  "key20": "2tFbLq5hWBcfXXW8uFp4BncJvSuxc1Y1A4dvf9bHivw6gMNWDvt1fmmqGU7Lw6Xd9pjRqvTnYHz4btbqs456UvA",
  "key21": "5UcJugCp2hUYmwZGMNyEfxULe5x35UbtGnV1GveatSQenxBzRNdk74SNRBtc4ydNexpnBHNEcUX2xVb9SaFexYJE",
  "key22": "27Mez21M8ELudKgWYGv1Y9Utw4cVjEy65VgksDs1o2T4ib23JbuoLRosTtbY4bEMZXkG1h9N4hgcJ8FrzRVQJN6V",
  "key23": "481jM8kjASRyFi5rwmk3KNTWsSGpCtzDoRonRBDEHZFrRGebVpeLFQ4P2qqMUHw5zRLuJNskyimoJE8pBq47usKf",
  "key24": "2ARM8aUMoYXGYiKHiUrPLmd1QCvL5mnEUX5pdn3MUjhoXePFKfxA12fVbA3zzo9G2wUkQm6UygFXkbguPMmEvzeD",
  "key25": "3Vs5bUD5AqnQhDCtceFDFZVPBvVtRvAFWv3XwmWd98avd1MEuci89aRcM5uFfEBrkcnnjixTYivPMT31c1CP7fy9",
  "key26": "3hVsY2Su3umVJknS5RVJhFqsoPWALc9NSeFHLUUCHSsK6LTRDbigwWSYmtgiSR2kQLFKNSA43ABsxqhRtGx78FwJ",
  "key27": "nq8MYj2rkV5d4SGxwLt9MmfShkQ5dhfphdNUrW7GaF8TrJrzTUx14o1ET6FkbSTMC5WzaQmzW2EzESGDdTQmv5v",
  "key28": "4pgAhpVXfCpVkesoaqvvXPdecjdUQPqtdYMk3A5jNVaYECczpsdfjsfLKRtG1w16xikDKhES3r3tF4S8omAbtxWY",
  "key29": "5ToZ1ipBKenK3hd2dS44pcE2qg17ha7ifJCA2Kqh4NRKYK9aDqSCk41wXq73cdW8QcZe6kjLuGqSwAUvNRfhP4KD",
  "key30": "2PucJ8AUcNaq1EPJTXYsZaYEfdjFDkmz43rBppgueUTbCKeSAiy2NzrHi9A3EgFyvHbVFaSZRBAxsXQSx5Vn7AHQ",
  "key31": "3jqc4FWhyzDYNxYWx6HekfjBAXQQdmmKsfQsAwaCVF7NNY3AqP6Y5tahra8zTb799HhBzUH3kZzdfCV5KTW2XKT1",
  "key32": "4GprqB2N5QzSwVGKTXyUVF29QcGyDGpQYQjDXd7oGX87oTd4ZvkUudL3GZYsyS1TAHHeQfdby3KKkKArj5tMNHGr",
  "key33": "3VrST9hUpzDWQK9SmMe9qSHFR3AL3TBx9Ej9FLSF44TdGipaNmS3qbjTEd5qFZEnxAjtCH12k2L9Pt8ANYGohn61",
  "key34": "2m5exC2zR9KRNcbgCdp1vHp8Cc3nxVxVZJbQwbEw3LWqtwaBh1JtKPoB4yCBVh18KCDkiD9Me8uZwjgrpJFrNvgC",
  "key35": "5Jbz5Cw3bG6VugjfuXuGGmUW3vxcJWfdQgATo89V86Lb8uYMV1RdRbKibZ5HJrCz2SbRQtZPDvUPGcNCUVCfVC5A",
  "key36": "41EFyBBp4mrwmuhff4BteXwt3tdyzcsoYuP8Ze1nG1TqHKWnCZyZFzBGMhmFLkZxWS5cjrNhBjZK73QRQmrekyYr",
  "key37": "3c3NXNyqX24gvbH1WfJnn3VnoBaXc8pzPca3X8TRs4hY7ZmmycvnoV9kz4dfHukVcfeGSC7dP9jQF9MfFWxBUo7v",
  "key38": "4tscVXtjZAzCtQk1143AttmmrQrjWxqUVTPPXtvzT2ecYKBnVtf8LWecNEFghM2eRX2AvrUnBLX9RPrwBskZvNVh",
  "key39": "4MFNGN95QzuC5MAphWkSohtGYtijgXBHykAbDvB6xm6UpMoaEr8tTZQKQ9gkNG6dpdKeoQTF5t2YHpmF6wFkTpmJ",
  "key40": "3Umb23WsG5pFoXp2Eb6wvhV6PqtfYdAtdnTJgAwaWV9Syp2yJ3RNWbeigganPfBtx77gZa33UstA8z9QytoJnjv3",
  "key41": "2H41sB6hGMoViHW9mjUQ4uFwX9oT552iC7SRiMCY8XgzbQE2q3qaJ9DTudzTHRGcKj6rYUpFeisBGPNGx3kqhzUE",
  "key42": "PATePXzaDTkhk87JFws4DR7CzkR9GtHwYLnAotKSbT1xhxP1Bc232fFF9GDNt7jCPqree8aENqdvNaWR3rvEynY",
  "key43": "5hMqoezG1X6RfdaLjAcaHVVZ8QSzitM3UkMcnaLrMzsevmC2Zosx6wK71Gbin92f3qKsDLj5iRcoMUbKT2JV8w8e"
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
