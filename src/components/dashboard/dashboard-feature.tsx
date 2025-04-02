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
    "2ZRsRSbweqhN7KuUmH3Tqcs9FzwGXmYj18tqBR4RmQM1sZEKHifQCPb4GRAzYq82zfZsEymPVrWTqieCPQ7ofgp9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2LaoEXcjszsBBH3A6abNpVAybag5CRLidFP3HfcWpuDA5itPymTBkipsRMaQVEAJGowGziTLEXJptyxEtYyq75bg",
  "key1": "33A9YetLitKfqLHGSrVH2W863aJp8SCHsqjiBrtgBJD5KfL5qM5fYsAebx6acK1VDz18MupP91fRwU1C3MTQq1CB",
  "key2": "cd29n3LTuY4jmxwYRPtTic9TAWurygtYVpf8RnmLnjpzcN3cBcaivaehUjQYLaQQwWR5WCfvhd1wru7K97t621A",
  "key3": "2yfUu3882U46ejgSzxX2MpbWrQPWvHVZQLWHgygmxgM73K8A19S6DNbL6b4cmCBAHcusMjXZqqZm5fiCZ6rPzRxR",
  "key4": "3Pggjwt5AvD865MJD3pcWzJyEEVLVP8zcaawaWBkvxbCybsRapcSDoHkxuq2Gy5BFPfAYgd5bmxSupwrv2TTctrC",
  "key5": "5ujN8jwhuYZPtH4YyptP3jn8U4SE41LaFVyEmdet1YVF3zFCXhQKMZT8rq5wh2k5ThqJJ74KVPZxiRZFTK2vE8mt",
  "key6": "22Efns7EeTR6auoLnNnGYnX4MQ3uPtypDPfEV3VAZrprNxtssxWeWrwh778Uy2GkRYFbTm3XtZkJnabJyj1Fp29t",
  "key7": "5VrYDfUFWFKbBdGqPKBQqESCNC2Yu2dqH3Y27Nf6hEWFF7ZD5agNsBdqw2HV11HFw6f6CPYayGt9d8eVWJPSyfDE",
  "key8": "4XHjbRiBviCBRR3UwN9XLUCwLi1PQc65F8eTPTiG7DaNiUfYdkWhMBji2GTmx83RoDduxj8BC9FXrpujZQkwNVKM",
  "key9": "fZLR6JoLMopR8qjLuzHsMvvno2KP68QmVwhuUq5qQA7rU88WTH2coeexzZH3r1ViiWTTpbnWhS4KGZGKhySMtvs",
  "key10": "4r6Z1jr4E4N7dcmfuKjK8fc8T8hKybjZqKwM8PfcUcpA2vQX6HVWoW61g1D1jNvarDrP3kiTY8c8SbPggxvHq46F",
  "key11": "42MCFUP3veA7GDHXU5JWLEUZ1yRZsoHq5dSNcnmS2qX9FD9H4EqojAcTchqyS8fhgheGAmx7dADZE9G79iBeqtL8",
  "key12": "643jE2psWcy93W7faZXtBsYz1kun4b9dZCQPxVwoW6p3YejjXGahrdcpcS5xsfJeu1hheBiwBdbciuyhYUtobT4N",
  "key13": "5waGocRSDhbPd6mkhuke7FW4B5n53EAzD4yCg7fxkEJu1JaXScfPoQCsjaicmxjHhiPFB4nM5kWCssjcYSbhFMQ4",
  "key14": "4CGq2dPGLRMW5FaS31gWNN1ohG7EpLUgMb6xYvmYW6Fwe73719diTzswonx2FFJHRtPBR3bj7G2rYffEGXzit2UY",
  "key15": "49scTD9ZL6Fgnt6NXibk1z16c7hHNVEDFBvTH2NrgTYpbiZN69ZUgedqrBtnLuPN2wjvcBXAZ5yaVdNu64oF8Bp1",
  "key16": "3UA3K2hZ3hjHdPvvqv1dLzb59CWm2xY63zZgVEeSmtQR1vqtFPvN5ZYcGRd1Lamgc5U4ZJzeiNKtZxKeMXSMyNS1",
  "key17": "49uDq6beWB1ezvUhEaaovm9kuf6tayfvgotH65Xxn5w2rX39mdsvY8nN2Tj97r3NgmWTr5qreSEiEVvRyjVaRuio",
  "key18": "3mJ2QGirGY3jjMTTgmL29ijcRbmqMh6ZsMyC7r6gK3ALhkAgb16VDBkT3QwTai88UD6BtsYJJNkQUzmx3JoLm829",
  "key19": "3qibWykE3pF7CSj1VeSWZk5XdNgfrvzj6XzWER7zRk9yNRVwrCCcrtNNxoA8qRf68CoKqz1ZjZexuNeMQZ6HvVm4",
  "key20": "4TdKxStX67hW32QbmPhMMScVEYai38GiQZPDf5HECi119HG1DuqLnasMReqmZtUUsTiQPPyc9j14KidbyAPwbv1S",
  "key21": "369UhH8tuGnb8SeXobvNe1YJaLusVqFz2dK6sUKeGRG3xN2QFjSKEHNML58PjMosZAgpSuDE85n4fHBnw1157pkv",
  "key22": "3Mg9ayoxYzAGaX95DMeiioTjnpG8prSAuBAgSPTp1DU5cS2NHjj8A23DaCjxz8GYw6YveZWtWmiSBgR5De4AveFW",
  "key23": "ZRdP5vM29GPtosqHXGWxut8uAWXWCRz9Q1QhCGLzHrmReLTY3k4NPQuu8EW23DLqZhmSUMxMYSVTEHe95XsiUn1",
  "key24": "2jN4cCtN4pFT77ZPz1rr5myMxUjSdb4AukNGZT8FttLJFRNPv4TVFzv9AfVhfApGz6s5q9qWtup43NNzmH3Q72Mm",
  "key25": "5cB9L4gXRukBypLDkh9Dxm9z6subApYTiL2Lwx8x1uUhLkAhbdvsUrvKd7V1HS1bDC7FdB2dMsjdz1ghuL9niG1d",
  "key26": "4fsYXkbiABnYb7MLACo8KeBsgCqyMjv8jLirxusmytYBFKopcWvHuBzL4AVSP7PUZ9yGKxqN2XMXTmLVqPGsAfmb"
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
