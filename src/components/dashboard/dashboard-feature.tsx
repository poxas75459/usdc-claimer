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
    "26dp6erjg8kUkFcdDFAfSCyDS14Udzci7cN9V4vrwp4wEewx9ewAWsWwEaC7LNvMRVAU7sLHqSjto6nVVGx4gpy7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "VggeRzcuiu9ns2qe577MHS1GGGMfPfyUmRyfGSxjvdQsw5MVXd5PhDS3e6opkhxhH4v3g2PCCkC93voBYUjytfY",
  "key1": "21LqUMWjMJKG1WqM9jNJ9WUZxaqQEHvTS3aqweAw2HJe133Dynzu915Vu86Kj85HAtiVevmKaPaMNSHrcxGGWaTK",
  "key2": "3R1AwFsyjgm3aB9SP7WvanqR4DZHTqvAAaMzYHy14U1jU76g47ciaYVagiVnZYXzEtbR1DH3mywicPeWTgLiP5bN",
  "key3": "4HnTbTEfsQX3EZVCt7M9atrXexYCB5wWNBzAHSxCSQXtJc6k7ci7Ush9y8Cnvq8PNpryuVWsCW22MtRQpAAS7Y22",
  "key4": "nM3gKoH7HYdzHLV3bopWBAwhS3M21SJCDLhKZthA8jxfbys6kDDkSBSrizr4Z7vyxy6MkxdPaCiWodSWFKHy1va",
  "key5": "dbYJx5szzV5uSB8uhxU8b2EHhpsfaixkmZAyzT7DAJG5i6Yfk2hZ1wQXsAhm2QKnuxE2qL16VWuYkdsAqARYUMy",
  "key6": "3yu7oKGMP22V7z6xEQ2HVSLGAaPiW6fET8xQigYR7nCs6h9CG7B9aM1QZ5pcckx9TaygPmApyU9DDKLWsPBAMoD8",
  "key7": "4YsbUXMx6WAX89Yh4CBx1Gr6hWLRs9vowWijgtersXGLYqrvMQhQERm6CVbSS3EziXQqUWd1u6AtwnJaRk8jDYQ5",
  "key8": "5tScJ1MHhQqi5eQ2ynCytqSTAc4YXz9NdZodAa8wwxVvXbp2XhYWKm3tMyPcEpUBZFjQEGUzjsRhx7Zribx4Vez2",
  "key9": "4JjkF8Qe4cwjLmvEUZ1zJdzu1mraxd5im7r3tqKYcAPEMUUfT7MThYx9jd6N2Pd5dkG8CDdu6bR84yTC8KLLvJMR",
  "key10": "3vis8WLzciaioT4X6Zaz5x3m8ewhdQE2M1kmHLjkQduq9GVfZTwFj9RNS7RN3Vzk8ky7qLjxeU5Rb8No7BYLSZJ1",
  "key11": "5AMdBjVs2enb4gEQ6hrgGjpkexAZmv9r7NU2KtnHs53ff2iGMq23UeWEfP1TEpKsngFicGVdpmi4SR4LorD1pReU",
  "key12": "5keUtDeCPwHu1bYPeedXHaEZ93QgaKyK7LkaQxjgBbM4U4fgANnimGo4oaqB1kTf4MwbCEbB9NaBvRP1jVM4YaNq",
  "key13": "4KHpH5FY6crYpRcKj4kgcbjAh5tBsoRbhjoLbhxkEFPSVeToAjegot9zWMwE1PjRy82cTV8skxpzbYXNv2utL8zb",
  "key14": "2fLrVMZ9eeEQdTaZAyUcEX848ox7wyuGTJUaAJszLX9MKisqZvgvAxfyeYrcYpfp9gKMn9fQjXMWHsXc7MWHuSV9",
  "key15": "27qEUTUqzRbz3Z1FgufcDxw1BgjBZ17Na5WDZbZXaiEekDcRENSRn8ryLy7dnFYDAjRf9R16GYDwEJwqRazoD2Ed",
  "key16": "qySie7ADwUeWSZ5nq4oBSL7srHFcD1vXJ21PTzG6nghPQufCN85acG7mRH27hHCECSqaTY2SzLWgoy8sDzzzKi7",
  "key17": "5AFs8MxmszNZ1nGTNAPPcF12mSr48u5rP7gRGffk6kh64mrzNBJLdwoNHFBWUmonzGyZNzdAihYsifSESh1fntYy",
  "key18": "3Xwjh9btAXyW5JbgPKrQCiRtCwW9h6wtzsVPG3zGh1NjaovXKPMQbuvsKih6s5WNN4QgAtnWDTYJ2nJjLRBo51U9",
  "key19": "5D276K5ZW6oHBkW5i9g5CWi2kMzH8bwQ81Uq5Ee31gzefcoqBMCyUAaqvYitoFn4E5HFinTK5mDTYrmzHDBdLYdS",
  "key20": "59T3VLji4psqFok4sgTC5ByPqysA15jKMduZJsGyRndqGG1Bzq8X8HF9BSr4pfkaWK2FqNXuZFNxJBET3UiwjnNo",
  "key21": "2FoFRR327XmABx6dbfy9A51Lfe6CeKvKS5qfjVjEXfq8asu2xzKdvUex6Gq7EekS1FY51GBfi5NQ9LWchoKLB67v",
  "key22": "3jbRjKucjGQqhydxe2hDGfaB4t5RHXsDRmKBzUsRq4XNfvJc8F9vPimLxRqiG1FxfcdmDETpgWEsGKb1f7u5NdWf",
  "key23": "x5FnTGpB1MS7Yp9eg2na8yixbS2Food4ivf1o24QgbUK5c8z1wfzhrDWxTcXtSt62vkzzBetboVdCbSBD3c1tVW",
  "key24": "2KDWcSBpikHUdMB4rYPXGq4LvW3s1HuWFnWg3TDE93hTjp7p8fkfKxLEknZJH8gNbhsjBLosiEKuStLuqcdZ4XWt",
  "key25": "364NKiHCYpw53B4Z9fFDh3nT2N8FZpse1PaBDXZo8zhsfdS6KLHTVv6BY3PcnC5J14GGCjaZxZ5ZxzLUrF244WW8",
  "key26": "49Ffn1Usx4iHCnQ3vvyRBuDm9o918kaL1FxJERfDdkFbpF3uydxbJjzAL1uBiiS1GDKtVMEEu29af6Tm2uaMzFD6",
  "key27": "3J82oivAEm4aArxp5Ky3rzzcmvK7bbmB3ejD7uw7tKEkZiwmgxYKJEe9KVUrSjfJbDVm3CL1jsUxypcEuuzDfJcu",
  "key28": "5Ju4T3DXJajWcBimA5oiekt6Zk8CzJEwHEudN6bQycbWKKbKdxqLG3DsMLbnxFk6bZdN2fEq82BHUMavh6khfcSo",
  "key29": "4bLGKkCm398xp5QH94d9j8U1yd3spw5Y5ixuvexHaPnuHEXd8jwUyD2vuhuH51hGEMhtRdPGXPLNUAmPs7Kq53Ct",
  "key30": "2YcTFFxXqaoFCTD3KePXN15MoGFtQSeDi4Tt7rbSx57orCemtdDa9cRyHh1kAS6FEbHSwY6Qv5EFuA7M5Htf4RuF",
  "key31": "3e4GKXepGzhovuLoqYEDFwnRQapaujZa113f6QCrD7hXMKR9oZFnZf7bMNco4cAnKX62aAmSqxY2ZMFiymVxrDwX",
  "key32": "5xTtvPa3ostDZCH7fNrTEU2GrJJgcgqK6KstdYZM8oQXS3iRTQiePYXEApm9iHAbmvy5rzBAuQgiVChA7wBPYp2t",
  "key33": "5coDNfrdbLEbdrnV9vPnoDRcE2CcQJBqd6JeVT1i17q97adET22LAKL8WBQ3ErQJcaGWNH7cd3ufzCJqXdsV55hW",
  "key34": "2YVGWtCqVerCnT2EdT5FBTqgptuTteAWkqsxw1r6o6NUGnqUa56XZgeVVG2324z4mTRrX5VHfkNwpCzHu2hLXUr3",
  "key35": "2ayiUVot36SqtmLDy499SKm7gX6vhoDU5RZHTqXS1A3Cmf1uBWeYzEEN7MYePoqijfxevQVAosRpKregab9GfgPJ",
  "key36": "5V9NQcpXpmQzEjPny7LcEySiKahdRF2c6L2qL8x8gbd6r27H1tt4NBd2vPDG8krmPcxLCxK9njuQNi7RyzBQrYev",
  "key37": "58CzckN24H3n42jQG2L6HWddpgq6UniUA9tnq8fE8iQSf2cMVRXZeaAucqKYDTcXfpeHBsuyczyGnMfdoWEwJ2GZ",
  "key38": "2iyU2cfQUuA5cUnfRjGmdsjKBS9tf1vfduDbKkqJ8Tf74Uk9nSLFj5Nh8KNC5CZbSs6s7BPsgfCVBpeYEcgg1EHc",
  "key39": "5EgDwaGgPL5EJnnTYybbnXxDEsEkJS6WuHVqgK67TvotJF7ugY3rLEreRjDDo6aHMrKHmBPX5R1PYxL9YN7Xicqo",
  "key40": "38TAqj67p5Ciw1puiAxa6YWDvSxzcabqgvEuYiey3UUm6t4ouZonnC7B2udyq7oxeT9issJ7C3UfgGR9j4AE4Fbt",
  "key41": "7niS8cm2ZH2w1yArytPbUbY6ZWUTnEBaGwMEw1fepTYfFQddH1u56w2Bzb7WZAXHBwVM872BW4nLPbAsR7QHuVH"
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
