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
    "48DcsZBxJkhhrVh2kvknipN577dfetH15D2kNx4bATQQ4VfVNGnzKMeNueqeHnwcGEbKSq5v4cEX4jbgYmVDxFrF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2kCvzuaKUMB6iSWdRrwb4eVtEHamwx6vYzQcJkUPfttBgHZyhYR72UAiP3uABPRsp6UenPrAACdd57xJ9KmqQpAm",
  "key1": "5PeXhJ2y4oob1q6AQhFVXsmQagz7c41QBMAfmU52K38qLryzF4EcrsmzT2XkQWAcvbR39Xch1BZfefTVYP2cN7ZK",
  "key2": "2CNtmzUgbXbECZ3xqnPa9tZ7ah8WGPL92YoR6LjwNAFcXJaMuoS12xscgFo86LB3DJHQCMiLX1ZqcmRtBB1bGLQG",
  "key3": "5zdAPpe35Lpi9hsn3DP9vZX87GjhSE7chQ6iziMwfPW56UGmABNNnj1gaTNBAJ8HTi6VR3R9rAxs4GSZQtmiExwJ",
  "key4": "14hnGpCc1sUGmPkV5s78M2LKHNYhszBeBifrGrcm7umLtmTf86ph7evzZ6gvitJ5quGb5PefDxMcBn6jjHgYN4R",
  "key5": "ZD2re6sHtzx1PfqHixppLdd57xxoT4Rf4VyPcLTSqDWnp9y4pDzSo7R5n6tT5y53YYEGAruxyp7MMTaxgVrHY5w",
  "key6": "hrBfuDaqWKPgfUP77J8orQZmpQMXaNhDgR7D3qiR7j5CHwbFV29FcPueXrWXN56a3tkJVvGbvgVaiMDJFdHUZfJ",
  "key7": "2sHnZzBkwQyi7s8nBfb21s8y37PsCxgXa6xsiaR9hHbw4Jin3AWHdAdLHL5vhKK4U6ATtbPt3BsZXf9BdcdBZmre",
  "key8": "5GrrAkY4jq8qaJquXuce48AasTPbaVAG2mvdCk43NBaPSUZa3YFwyLwjhaie7anCJFM5eX74mgFsZmTfeRahmHP3",
  "key9": "2FfRGuFxL5bbezZySS7wRoeABDFfZwvnCYP7NdBnkc1uvzQJKrEDVRboW9K1XMmSH7Tuy9RwMJKxZgY8Trf2Ceih",
  "key10": "4Ncf6QCLqNqDXHepn2PeRkaHVapjCetPPTiJ1r5q9iJrZ8B1gxrvTYVbRewnADmFEv6GQPtqYn2e1XNrLpvsNdDe",
  "key11": "28Ni4ALo2Kkhe2PbbjbkRd8Tw4xLAZYpc3DYAn1NTGtxdgwvoG2NqHoMNaNnQK8mkQsYAFKoUuvm3A4uyAS6ek3a",
  "key12": "3rUdzhFa7imYATeoDMxk8G94EEGHpsPV7pm99hvwX1WGNL1HV5V93oMVj3NuRZ5dhv6HwufXi8G8YdpXvZumTTiw",
  "key13": "2z5yBicH7yirkXbmmcvGEaaXFwBURcw3LahpLFAccYrZSJMX1GkkVRgND5SiKJVMKgFuG5EzFULgYJXnXk7ZmqMH",
  "key14": "o1Fnc2BM8CuNdxpdYosgiN8TnmT7n3Fw59qRgFL7sPenDr8nZ8EEkytEn3Bmsp6k38eohiWcftgnDwqTdiqKA3r",
  "key15": "32zNeVCG55zJvTroKxMdX9q6ApbgPVr2E8oYCJKee2juMFmx2KnvgevnghzUC2SJcnYvkMk3QBSFtuDpC7faZ8ym",
  "key16": "2pkA12jGQzbQ4qeSepetYWJEJe9YD9w29upKZJ2qg7apAaQKbMCJtuMfEjReejA6Tt69mbbyFbaqrBtNinTNqW4F",
  "key17": "4WzkRaMEXvVBxW1RHdeJmNqQQrnHMjA5WVHMBDePFBP2D6w3hkHV8sYp6znwJYNvxLQ7iC4dHbEPwFnDbrA9hWas",
  "key18": "tmccN1xBMwo8QyfYzaAHsaXxNmdBR57Kk2bSDTmEXC3E4kWSWn2aemvJnfZne2NE3Rz3f8EyfP6667Sv42ZnBkn",
  "key19": "546J7152VJs6bkAeYgZaXVaGHkC1CvZoHMAN6evfXtnu8Xkw67dmVxukntgqCfxxFPPbByN8fBMvvNFSmE5iyeWw",
  "key20": "32MtKjY5BFFZJC3csPHXRusya7iBeDGg1iDijDbEchcec721RL2Wx3QKYe9CrxbSphmE34sah5uLDmWTVUEM6v5g",
  "key21": "5ifgh7mPQUj5F9QwxeG683bcVgkCbEaVmwRgPJCxS8n3d6wRrRt3QtmXzJzBtDSwZ98zoHYAwBvXHEPuTjk36Y2D",
  "key22": "3GC7C1ckGjaA8xAZsZtwpuWzR8KXH9nJykrufXAtHjtb6mbjVgHs7PVqgg7sGAe9ochmizNyLfJ7DmzFX9MuELmK",
  "key23": "2MRucBU8EHg37MMEwGxftoXPzLpMcWxpjAiCVyhL62NYRjo8PqXXh6RfDppi4Ws125oxAcRR8tX9tho4uoeE4UJW",
  "key24": "4gJcqZVnEmLE88Mp1TRd285GokzgPBWXLbDBsBzUKjDY3WYy3ZY49CAtyoMbhyG2KhE9VBvRfRrf9JM2T1jPb8Bd",
  "key25": "eoopnQSeteVKWVZE6MGVDVHDQebuNb6ikJiqV8mua3LSDsZyATtJMrsv4GwShW7SiwyuhfjQGuPffHLXhvRG2ns",
  "key26": "2X6GNCTiSHb4U3vPQEQpj8BF7MXGnqE5dGEpWsLv6e6bfNXq4srcDrTKem8ryvx8XZkKs83QUTfcQNYco1TTejLq",
  "key27": "k6i2ZQsNGjd4J3sd8dBGZKcXVkdPLQ27vCgvpfJLvmf8r9KqT5qonaDHqsiWTdJdbphLyZ8dAZssRpdS4mzw54V",
  "key28": "2vShkQ4tjZN9A18Hs5kBg2Q5LehzPsbPPEoEFBhoHsvHq54WbVqy1Wz6F7ov2grPYsg8UBUFkfWJgbgryd4sakni",
  "key29": "57K8PDNVjL9UT3S7bL6EsBpjdhdG2RiykJ2sde2x1NEApMay95MSHYyHa2W1pjnkxf9vWFaR61c53BbPtAVcJBp3",
  "key30": "2XGWkt2NztvQsKhK6AGoT4EeUM54u95Bf1Es8YeB9gLkNV8VBkQkyfGBPHrHVM4SxhwgVVkoAkG4sHxsypSydExa",
  "key31": "5r3EcfD7VsD62Af2f94Dmei3jrh3H9xbjDM77TSaFV5K3nyCfqdSncq3vybT6kLjhVD49Pfwcro1o9SRPMhmxRwN",
  "key32": "9aQjFVFwSQxv96mpX2C2jtethM99uDibynqYnBEzxn6M8Jj2Hexz628jTBgx4V3ABXSt8ELnsi69r6wcqKsF8sb",
  "key33": "5X4XsL9XvvNs73LtWQcWGqkK6TSZS3kg3JXrpWdwtL3A4RUAWeVDFx5gaKY1GWW9pETC6uNVPMwtEp1FW1wUh7qo",
  "key34": "616qbEn5qWrvswtU7EyNZjVAuhZthZciJvU63yuNKGTj38Z6fBnEgWdtv3Fs82ftN1Txh6bVW3SyXizDRn8q6qy4",
  "key35": "666FbDUo4oYrBgaVFG3awuedUYzbgLZJ8D4NfJUzxZPgjLNBFRhLTQyBBWdHKUq85QwyhjrLLhA9SHTHKa7W5PkW"
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
