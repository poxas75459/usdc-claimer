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
    "62f1Lk9m8VFKKTEwvKCChpo9tAwFvZjX4wsH27JVu6Q6AgqXi4UMvfaxxrakzvXYTxZKaW4qABB2xs4NgxLSzrMJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5GTiBWYpQtW9YsEwENpNUJ3StZpSkzXHjmWUeUk76dei1EDwBVXkSTvwTJy9r3U7LjZWTS4e1QthPekGTEJYVGyz",
  "key1": "WL5LZ4LZvS28g1icMEKne36TkUrkmZ7UkAyRLeu4VbcYpXxzq5ePqQJjmoMr2xPaVVfd1bKYUHHDRTzfDiXNMcd",
  "key2": "2PRwNWavocKcs82GyrRzaRpGVdPKRygL8TMopGLBurPSNiZ2tmxq5jyf8tBBeuVz9ZRLrMxrYrrTUsLj6d3W9Spi",
  "key3": "2w1G3V7ARcSow41qBRXv1S8gKNW3Xw86rZaNRAFCtGvznoEZAkuamAgUabZbPoB93kHcz5jNPFaygxwU3bQYhyHV",
  "key4": "4mNUQJHdoja7tpr4eTePisotuPeGpeCrHSQZXRsPw387T22b9uzVRZcJoGjwksGxnUecuNRo1rQqjPALNKvBThTc",
  "key5": "3eSisCtdKfVj3aU7TYh8nC3UJTNwNT3dREoMuHSj1QPeTNCv1qD3Fo82uBarcD6AkhrDTCh6siUMo2LnGhuuxZQ5",
  "key6": "3t8poVcCpJqwn2YDRs7gpArpnfLVLNLxoGh7jWstTnDHKcD3fFGdRjFCGjLEBtj7QrSAV8JeZdULi6fDpu9wRQqP",
  "key7": "3efgYUkjhJ1etAQGGbXHiLBAWMEbW4yW8vhMjFRA6rfpsm5tDK8fsoLb7n1VY8QHagYW3V3cB7SR5QiZFgJgakW",
  "key8": "21qfSky7xx8VPAwosgCEGL2kby45QgoVVKSrryLBzKF8Qc5tTtPgvuUA47Ud7EQJFLoFshaWMXUZWnfCUBH7Ghnm",
  "key9": "43hLae8xqf6gyrE3qkgkey1qgfeUq5PxXZeaEX2nZBw1zc3e45Kz6Ja8DVVF8y5wzrhWBRWuJzynwpPVBXjaFD1h",
  "key10": "4k7Fmy9CoBJ6f7Km9BGMMwqgvucSQKhLaXmYztLQ2QKwphefZe7cwBn6JUd3sKbbe2EAhU9mojMrNBLQHukGW2zi",
  "key11": "cVFWUXoKUUmmNAtf28sCj5v1WivN5Zx2uzT7jzD1txgH5nNnHGNaU6vF83XnLJNcghpfYuzif3ytyUir8KQcT5c",
  "key12": "SJAbm7VdPdLBBoA8nxpruEGqApGQrFNAnZtNjo7tUzTGcWUc3gnf8UnXUbT4rZgNm6QjJ1b2K13bdpMMkfxA3rg",
  "key13": "2vC17JSB8QgfD2GNV2qmKFbDbo9eK2WGSMGM19DnGQyozowfbrSoE6cZAdSAiBoeAeyDP3JrvNrFSGzincwWcJpK",
  "key14": "4ARPgBzaLYsvSwDUWLsjCDcJx8VHq6wAsN5TExDjdaZJPtsjwHsvFg5rHzJD3jwVt1qeG63WFEvSbcb14tyKGiAF",
  "key15": "3ASrTGQZPbA8SrNEgb15X69oYjPyzdiajFEs9wbPbSwk7QhxsbzDp29RihCtiR2181HVLFXXuVt56YVNHM4aSbsf",
  "key16": "5N3MWeGASZ7S3HUGnQmd3XhJFqc6w7ukcVauSebrmxUyZZTewMTVenTLoabEfkYnbVLqQUXxEYWXxuTjY4YMXZ7D",
  "key17": "2ZVu4fpwLRiSHCKGNYdfXzDkfdmFAben5VuESdFbeNgUcGCCjWkLbhFHTohEqaufNqXw7t7NEYag4AWeDCrxEdcS",
  "key18": "wWJYcRmYCYPFrgVDB3bnQpj46R2Jp2hSc2FbzzWwcVDVJXio9NTVTcjzvCbFME5CVQcSRJ3zgwmTJ7WDsC5b7RW",
  "key19": "BHSywWNnJkfYaU4H91E6MHUwyNZp6dnvdYLbuXtkLkhpDCfukiWZhvSdqUvSLCswLdFUsMs4LA5CHSqdXjoKAkY",
  "key20": "34wWFHuavofuc1WTHvxd3F2HH6mZEjNTTuVxQLbSPnw3KQWc3aHcvtAsrYnv811knWHuYfzmucbCDB13dyoDCY5h",
  "key21": "mHtJZZqzCNJh7BcVpVipPQRCJqeBpg6pVai2hTpg6go9DCw35BtJF9XxAbujfiRMz6XHy82ZhhdB8fgv1PfWtcn",
  "key22": "525CLRv8dQurrNDuL156vaxhJXbXVS1wfcQsHdcNvar8xeBh2DTvdxfg6vqapm4bqrC7kLivywinekTub8rxPiwd",
  "key23": "9pasABv9ThbMHyY7pRxiEiJPT7Z2b8w3h2BQTeV5Tv6RwzpgCC9SSW8a2KXmjSZGn2igaKjRr4uNLr4T2hmLfAt",
  "key24": "4muF4KA1W6AbHmQMwTx2sbS8aZsApVNyFBqYfb1ZtoAprXsVhNWmfjkzqu4Ly3Qhrgd3ABxdy1qGENRon9cs9Rua",
  "key25": "4MmZpxn3xAk4JkvXANh98X9ZiS1k7Zgn6Av9qbC2zqnxgrJBUVoRh5j977tVhniaPpSQ1FnmrMbKU7pUb5EEMmee",
  "key26": "2iQUqZqWTu56xkUoZgx6zUwXgWVSmwBphm9cbBt8rKsietP1gvsVkW63bJnFTQWjSch9RvDJMsBjvHj2x1DYzFj1",
  "key27": "5epWmyenSuhCRzT8j92uW28PFfwKznAtGXsBFLJksqkAkBpYPRZwweVRvE6YHQJxr6RMj2mkwvuaqzKuGij5zD6N",
  "key28": "49T8pSiozYT2cshfXxQQg8Vx6Q74ZCiqTgkAmzuUYF8qiHQXA6Hpg6RxCK64ZyytsxWpJm4gkNwu1LPn9mM1CVBe",
  "key29": "2SDWc2gwRU33bQEYcfWmgpdddyTwgAwmdn1NgRf5X4DNKBPPB9oowzBMbSer3LD5jjFwaPCHLvKq4zYieturPBvF",
  "key30": "5dPfFHducGAZpvCVgrEHJKqn2PJSdMxMmLoMvetWSBWthrACkdYujjcVwgCNqPvYMCPuti1eE716gxd7fVtiHofU",
  "key31": "5xoMBF4ZW31fDQW4rQHnac5qauJn4vTLJVPd1iGhdWzghMYzgQMfDwbpNCWqdY9P4w2X1uaq7WjS3KxW38uyqdJD",
  "key32": "53yF72dtmqgdxwGDAQXfyHzeYPYrmr3HuxWPJvWz7pRNcfVF88hyEANhC2K2GLJiHL7YzavyymKazGse485H1EPG",
  "key33": "67jdhpRjuCZ8S3quJhZucCdt7X2yXrRoUeaA1EGjxxLw5KjKVffyNyUYU7gyiANRNsGsY2qFFLFom34uqRVV5scA",
  "key34": "56kEiFZkcHp1dWnvh1QWsQxx6HWnDnfbggFpKen9RMNrTVmjP4wob63iouojooBTRRnp8oTwmwVn81gR97qNhAun",
  "key35": "4Qiwvm96voLT9SYh18sA3eRzmANYNvD6rmZ4MSw5mGGZZFVpaPJtPAX6DvzwApszUwAwh3aQMMMF6iAeSAHzcftW",
  "key36": "2CnfPbpcwqsX9znVmoSRUTYrvqte1mLTt6mttkkh5XL8B5Hj7LFPLqABEma3odXM3BMuTAfRQCWh4VUxZwujuDME",
  "key37": "8NDpu5Pc9uSPWNLoiHCNf3sS7uqHPvErZYx1zNX3oVNCcPgj7JrkWGCjatsMGKLYppiTdgCJrKDGXt2dM3oAQkv",
  "key38": "9EHWZwrjWvQ1gVuySfxRGLG6sddr1FzH5B51dxr33TPBFSnTKfr4d8HZwyUd2FmgNNSrRRCZY7rcTKD5mRbLU4n",
  "key39": "5AK9WX6uxxT1AWVVGcXWoMYQh3BoXfFxqZrzYSibj3nPzrRWQSGfeme7X54fVFLTy5RvfSZCPc7iyt6cDGPWpNuA"
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
