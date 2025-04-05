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
    "6GxNcyXVH2urtoLU9xaeGQZqbWJonfB32qNSzRyWyR8HewLJ1qQinPRezHXFu5NGaVtHDjteSqQ9Zia64Vet6cx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2wf5exUG26joZGYLVDJAA4htvQjEkBfPVNfQrJuYbMoJtw4YTKxa9nvZetP4xFgbPwnh85MTRWEZKB6Mvw2e2hRd",
  "key1": "4p3NtBKTHFc9D576jKJXSD3Kc5JjiJ6QMcq9LXo4wKNM7UubGECs3Z4TmzSTWHZZzKJhjQtK7HfBqPkU58BmjR7T",
  "key2": "61aADj1PcBJENoFCKBL11YKnCimu1gybra6ix8f8zgiiiQGsmAruoNGYK8hwpLb6KijjHHMz8uM459HnCNfZ9rb7",
  "key3": "eYPdsdYDkT5dTKmUbPQtZf9bGyJWoLX8vYRM6eHisZtUvonkEv3mnB3uAp5u8koajAwnSVMPpv4e7ijLGnQAXX4",
  "key4": "euSfiiWYaJUkxG5b3LSvFSJMPNhyZAEchxZ5yiEnJXSMr34YjapZ8SWVY81yHHzfBd8zq29s7UtsmQzLGT2zRsD",
  "key5": "3XzLX29cZRfhcDSUcoEgv3kvMgp4j8XytmJnDEGLiCjDtQEen226KhsNoJGuV6zDgoHitjcmrbEJ776sJ1hRcsgp",
  "key6": "jZQSBT9wE7LZ6sxpApcFfTDxCmPpdkzCcaou9Jp2iRoJ59SnH2L22rNb8HMWCfjRQfaMQ4y38a2hLFjkKp4KthG",
  "key7": "34ww74MGYf2NXmSX26XCzQBkw8o4PTdSDvhXe6iqxqgaZ6HhSadNaxd6PVotaXqH5eS2w2Wud8vaBe5wbuffaHZC",
  "key8": "4NS9aKfSP692r4HDiHPf1c7N4CWvM9MDQZyHrDK78L5Tmga8RhiMb8jWC96g16omuF3sV6osexcswGD4YGokXMDf",
  "key9": "pb6geVobx2etpBcBeaWYjA5VgfFW6F94CybkceEooqcqeruBViaDa7sEYUHDpHJb7tCXJKyzXGmAcFbKkAzAVr3",
  "key10": "JF5FKoxYcaX8BxK3tdKgRCfXKgyGbDZMMS4cKY5MTNmXJPTUKRfFGqT7ak8JeDdcvM8xA4DX5Mr8RM9MAJDiVNJ",
  "key11": "4EoRwJBrNjggDgHPTuFXih1eULjTjAXpzsGCHHvidXB3Rm5RzsdMx3ffEwwN7FJYdvrgy1umozL69SByiZsgSyZ",
  "key12": "5AVKQzmFS3WfAwG2fKAkxsmjDSAUweT4zacuC2XDG7QekF3b6s9m79PrF8gJR29wz2CGJZcH6tdbtp6TpyVKXsDf",
  "key13": "2Jf5BzkK5EE9NNe6QWB1kGSsyi9qBrLLwSQsunqXGhMjvW999tZdC9cGyNVdwuvNoAKq6B1HSt34TDkhveF1aUpR",
  "key14": "651gerC2edHix4UBqw196P7zKG2KGeq1zrAfTVyGac26YVpMo8sQLkb6NXEjpiMPkoNh5mEht7V9CCgb2hmQsi8P",
  "key15": "2EBUnCuJhpfZvpdaaLiAMhuxdGSUKVvvboUprJgJfXJMB88B4qbvtif2dG55NYCi8ZJrN1VHukkxnYxs6C5anWmV",
  "key16": "5vKXm3AckPTMggY5qxNZQwtXTtP5kzMjVBd6iiJ6H9d9BRTFLro7nbKDpYjDCorrzYYZNCZoYts1NRZ7X2AA2YQR",
  "key17": "4KxbSEgdtMDj7sW2FTSS24jpCyP15pcTTmURroQ5ggkXhTKh48ZVzasB7oyusJ4y1rFTy6AEmpzrokQmx3zNx63r",
  "key18": "46SSEXHa75TrGo43gZjt9RF3PowqmuEitGFBQQJ9ShAP1nfs6staQCA2sFvDcNVyR7P95ViPGJWvqccLdqTg4EYH",
  "key19": "e7uGTQ7LwX8KZNu8ckA6T9Amt9bvrbzEeSVfkMtZjhCY2NKtdCiL6s4XQfAGgGEFXk3tX9LVPGPHVbvwu7yMcGy",
  "key20": "22QFe2YMNd7m4bqWuCbzEawkLfxuhnohJGv2iFUT1eayBLZxzcVyH4q1XGvCoq9cja9CMP9auFPe21ixZXa2u5ro",
  "key21": "4RZjUpJCAGvFxJew8Ejv64awVMf9JL4WwRsYPTcX8gs6s1DVX9SE1fEVz5SyAak59vsrHzuTMWoTBUe1SW6iMuCD",
  "key22": "dyt1wz9gJsZDJsg5PuF5cPcojhMHxgM2juRiadiwUkEMGFUfoBBTcyAMkA9AGgeAFxMzs8u31oKtJkWQ2DcXQqJ",
  "key23": "2LMKCf3FGe3zceFTQxKiU6bHQUMDorZu4EvZhbQceeLx9Kk3W5dvt3U1AUhUkWcpx2MQUgTg3EvcrHfMaRM4gDH6",
  "key24": "3LR5CBwhXqwnqoxNvYuuNwRE2LHJEoZAYc6K3GCuVMUhNzByeQUVz6Q6Bb6ZvZRCCReGgoeCRmEALkd72KyHjr3K",
  "key25": "5rtMXmYk3CHVjwu9C6PkrkZcYVwPv56dnthvHrghuvF6d8P3uGFqF2trSngBjepcc4apvautLt1uCcqmADmY5Lfb",
  "key26": "hJTxtSETTrTKbizMoFyXT4kqQtmN9HHbSMuHQgYqeNbuLFnSVmaFvDG8FVCrJiyghvggGo8VNvZWibowdFqTG9w",
  "key27": "2LiS1prx1CModKTWpiixpwNhYjmNr9fotL8royntfs5aACUfJ6Q72tNRYYDsVeCBbkBaNeXt92GZqmbUGHngnAVw"
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
