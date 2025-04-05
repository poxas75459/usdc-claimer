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
    "5iBgfrSx8hZhHSZzkiSF1SUae9ZG5xUg3LERRtCg5wsi8r1gSkmUd1eQNKfySJQR4qpvQu1DnxEHZjBX8AaDABJC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4dgBGPrVgK2991fiTUeK6pN9ngKviGZrKkyDFakC8f7VWNovKUbFXeWiv9NBuxHpUeTbMi3KSHwxG15FEnj1FDCm",
  "key1": "3JCdgnncvmcPeCPu4k1r9x7SbBoYf8HJqgrT4sn3HAbk84BgdzbDvnCmRQDK3rDzH4yLhwbQ4cuoKBsSyBTbycXC",
  "key2": "C38rakZ9VLJaAdbgM5Mz9TKeZz2kMi4GAoDtJwSSKGgPQrXy9ivaLmSN2m4Yhn1Mu1ryyEAYGdSzXppvj6Rp1nh",
  "key3": "4oJxvC8GYz5xvaP2Cf9ou68AuAC9tK8ATGLDHyzr9cSiR8vDfqPCxD7kQr2K6pGFGRfrPv9q9PfgNon8nehMpiL3",
  "key4": "b6BWknxedCYH6yiPfLHYybbpkiBUXxVteRgPgCRTkafs7rY8a1KFb1n4Vxvdawgttc8okuLT2BwvytRy214Va8A",
  "key5": "4kHyQt4EarQb4B7jSutKxQXamzwKzKS88CzneUioxgTcoDczXPfcjPTB8oVvhD7LhbFViTuF4un5KnBtFShmHmPw",
  "key6": "2nkEDSLahRJm95MngcStn8WdRDdXHaBy7VaUFmn35KGzozAFKQg7o5NqLLJ3BZSWCpYV8nejU14rtq5B9KMPgHbh",
  "key7": "51HJkUzKCB8M2FpgNVhN6owzQmoYgXtKGrQWmcrJVvSHut8L2HqMfaLa5W2NCzHU6v94xXNVn57oow6MskyP4o1k",
  "key8": "zHDpLqVKea3M8HxcQ323ucRVHLTiKaA7HhJZrqyFZCJ4eEyCbzYr2y5iYng6xFysy3q7wFDjhb4RRg5jhk1q3Yj",
  "key9": "3ByujF9uf7iwmy7Yjav9vhsDnGPdJvDnbFN4e6fwtwuGpncbWueSz2EoXk52rkP3etnn7ekpNmrVmSUQQMfeA67X",
  "key10": "fVLvTEzPRdfcZZmDATXnHy9EtSqsSGLTE6g28ehuH5J8u5bsdpTk32QLszUZFPGiRCMweFXi3Ei4emvis7RG8Y6",
  "key11": "2s4zMtkJxxWEBJqGB7ero7NpmEXvPTTuoQa2WwspEjg8L5UnPZKAAUPBtt7vigSYfmLSNihcx4LjJaeGvKn6bPDq",
  "key12": "3dK67Zv2u8gaotBgfk6gjtkkvT49hGVEaGjn5vU4amVKfRdWqG6cyCGEydTTC4i6yzmoxbcoA3Bpxw6FZQxuWtVZ",
  "key13": "2F9qrtLCbSqvPJngWV9Vpc4GGVFB3vfU1Ru4VvXmVsK8KsHGoJo3TGqRGa876GJs5WmFzedk42jSJMdrAPoPzhbG",
  "key14": "4U1M8DvC7QDAEfPw3mELw6hm61RPfYqr22pKYRkJcCrJXdgFubJe1xZk8pTv1gwUJheErbqfSijdTx5c9SAe6neT",
  "key15": "9KL7AfvB8DeaBHMZvU6AZPRiSE17wwFxwqf8L36Fw34nx41MDte6AJqcJ5DaSdbqG7GmJ4Y1UFj6tVaZqDhDsFw",
  "key16": "2WwsFFY95zf1zD19aoYv8Rqgiy3pTgLaAQJpn3mLr5ViG6MkQ3k4QW9d4fhgZ5N6H2nj3UtUZN3sP7nBQPd4JFQJ",
  "key17": "2WrG9dWE1Qhm3vQEtybyqMWs3TEEdQDH4KQtCH4wZUAJgujiFcZtm2cyhMvU7nhS9EVCbnZHZS365igTfjYSQVhs",
  "key18": "4p9hskqD2vce5mwtHi1iRZAwidgSFwUnUAHqG1ExiqASRBZ8iTVNBVME7stPTzaAZtNoiszqkhuqfrmMr4PriQRK",
  "key19": "35vYB8KbdnYc78F8m4MfQeDQLdzxm9bjifwM9nH9E3XHzAu14Jv6zo83ih61XwE3LKRWJn4GbnvW76sjrbQi6yun",
  "key20": "5r2S26zBUJxRCe8SmYQ5jUK7UYXjTSwZ4zSCytZG4Z5AQSpY9qKYTVqxUpnuWnPhJpajk4ZvZ5D6tsrMzVuz27Pv",
  "key21": "2D2vnBKhmqmJUyx6GPaXFmGVH4ExLVRVxNNKb8DTh2SB7BWsqTTRoxMai3JrW6SB3rmoe8pm7o7rWnUqjJk5RwVv",
  "key22": "4yQjtAWLRq3goWhiwB8VkM4Ch4PkdHVNALohwBmEs41EDLNrhtvmtYedqxvcTzqHxKbcRWfVbc9iuJKD27bR8836",
  "key23": "49NPgwG7uPKL4vQqSS2CydF2QYngTEabMB1EDDdMgPbRPnUakMWkjPvDBsbmd1TvrfgVi43u4rA2BzfYFzHZKDnD",
  "key24": "4hZeD8TLaa7n8egaXcojvb8bG6b6NCRSekuzUpD48EUxzkg5rbvgS3J1z9jc25Tj838Zx7aNtdPyo5wAWDVohDxM"
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
