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
    "54dNC6cLRurrFpUZDtyZVpzGuNhhph3zvQiXnxz2M9HmntAi9ZQNFS2YohuwHfg5pHakov1rrk61L3YZucSaMmGp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "KN5XTTG8EeYWEMGYZxzkLrTwmui2wyy9bDEW28bmK6nmWsGxqaPNaseZE2p4S2BJceh7bKaKtZpXXobm5PimT9M",
  "key1": "3E2XqgnrjJHgbNZ7zn4VmRjFHGhJ3w3PPBggZ4VQ5jWgbLjiqTRPKec6HgiKMvbw1ZTjx1R3usD1UdapY9BY8VEn",
  "key2": "3vTUXqeDuhtpikMgatJgFNh4qDFKDdHoTdXtw19eMq1paNGf2xHu1akTXwMxNjxUNAuarW9JcVws1Gu5xHiJUKdN",
  "key3": "53uc75g3aCDX7NUnkv2wHaK9axJYB5md8o6DH1haxj4J8iz4n4JugLM5SRZ73ENwPfB1By9xiVhsGCezF7vzTyL",
  "key4": "2xJiisxbCZoX9hbR2wcFLYhz2t7xMSQrLumQGiSB1jmmgW34LqtPwz12DDDBguph6nhStHZNLVmUrMFmqz3EB2yg",
  "key5": "3B6Gq9bMSfr2wqBu6KZaXRM2Z8GhKbneE4BH72D9S7oX2nKYQT1mUUwZCREMNvka3Q3TtCVAnorXawxaDAHrHxP9",
  "key6": "5xuBu9zCyscz8Uc2q51GADUJUMBdS1jmCDDxHrieyknEFD72SEfscYnpmbybh8JTvHHnUHY4RYYgrSvxwkGDjd9f",
  "key7": "2SbjUmM6afkW3shiPXYHkHBTCr8jMXpZ8zRvbAC7HTjbT2JXuJwAkVSNgfLdbu5r8j4hWTjcom3Vfd7aSERmKZKM",
  "key8": "2x67iRLjvKGZYHTFLUSfa4j9jgvgCeAQmwCzuGLxM6RjpqVSHGPmAH3hzg7dDEzMouzKieN4SRVGkbrmDEoFfam6",
  "key9": "66jjeCy1rJejHyyroK6ECmDH7bziS1eET5vK6mhdzGrCJ4HYdnTQhb2mvRqk2M3MfTmNikvSeS9fDvCYPss3dzPD",
  "key10": "32xvfs1tZr9PaeWmbXcy82BnEG2hTLctN7pByBiBBZh5rPEGJEzRZ9sMgRDSd83vkVQvNKAbR8YeXQVEnzdMPCmH",
  "key11": "2R7QLaqio9RQjHqJCLcEac3Kr4pzbJH2p4oZPrWqYrisS4bhERL1M7v7eiR7EQ2pDwCfaCCEf8LVUAK6Q5irz3ZT",
  "key12": "46VNbQPS5BETgZwJV18Q8pSNZ1ApwqYUbhVL6HMhsaZANwhckBpY5vqwx4yWR85PftVGWzMjsJW5HAN6W1W2HyM9",
  "key13": "4bcf9JuJiBtSLAEhkM15ou4DfetGtYnW8QEJEzS15HvvX6K1wdHww4n6whbYNeGs9rf9CyD59hfuYqNpy2PrtK9a",
  "key14": "5nV9HAF6bP3KgX9skXpbrqsvuhSS2ifxVUJZcynJAwUxGkZrV9LBUmchkqwbb2WdbRFKxFFTyESuaSMiG7GZsLAQ",
  "key15": "5zYme2SuoboFExEpdjsTizykDbHL27maKFCfGohwswZw7bf2ZG9bjdvhNFqFfVxnngzEreXt4aivQiL5qXxqNTjh",
  "key16": "53dCifPcA5tVPa2eRjT5pwGgbRKzDzoZVcQxL9RuHyhtwNXPD29J3WCmoHxevvvTrVuXZqsyCpo43AA1HmZFNw4U",
  "key17": "3DWoh2zeZ8bJURT2BUs37hUCrSwTbGjZ3DUQrxjYvMAbm8T1m58yVbAtuduAWYX6PKmg5N9dbbU42swvFWMd63gJ",
  "key18": "4yRnc2ZpHWPKeiavY8VFKs3iKhQfDoJXL3K7fo1TTiaq19KmSh8bCoogY6NndtHaS1KM1KkJ4XspNQmnoLwRD5qU",
  "key19": "4xxXGzh6Nf9rpaoiY4SodFvg8MDXqMDpVgnMGpkY55BVJdNEbmk2vxyEi3nPKVLTP8UeQHhpr8BBUAitU8hHAZcP",
  "key20": "3D2bUNfkykjw2NY94e4W4xGFebocwGXAArATjEBZWiAy9hk24yBqDGrDrC7niSeSRgm9grZxo9PoiViKFQ5rERAb",
  "key21": "5TRVSBPVkaqpxVFnGuVAtAcaVARP7ZWMpPyfeuihXepXjVxXSVcR5k59wYTajuSg42EejqcPtr1Ga4SQuTurqM2Q",
  "key22": "3XiemfKUzJTDrVWrdaeszdH7bvntw5ob2ocj85Sm3yYfyFyY9HET2msK6EQ2f3cq3K3mXdTmSurfoHmM2xWJ6Mda",
  "key23": "5Q5RvppnEXMCsproxv876C1ooATYULexSTn2matuMPZg7mBSXLnd42XsLepRbPMyGtVFouqRugFupkzsaZsvJycN",
  "key24": "24MhdFvHybAQyGHA3vm2djYaaTp4bUudmeH7KZmekokPvcvwpLWX79ySAMDsdvsSUodNvznnxv6f17ouM6nVezQu",
  "key25": "67PKJDcW8rGK7LgsFMSVs4D1dsXSdBowsRyH9gCMBZyjktxE7mc3DzHGdVN1gGNUM7PAy8kMPsCZR5mpwSV8QeKM",
  "key26": "2251naXk2G5Rz5kRKBNPyKCRXyRp23mEKUkNWJgbXqpRH824KAUj5bhDsus5GBrZYt4c8HjkkHAL66NctKtWpP5y",
  "key27": "Jwjjnu7TRdCUt9TtqGJMAk1CENK3uhEi9gown5MyfF1452S34PbrWc2ybx4W3ncSXzbzftVaCzkDWACk6Z8PdhH",
  "key28": "wgsEUd9UHQgqnM4Pznqnhr5zn17DfEuKcBT9yqBVFkwn3u9ba7WQwHzedbx4vSGdExtoErAcJHewHnhx8Ak5rTW",
  "key29": "4zMNYb3KsDvartRh514NN34FpA1AHqh89g9u53XGcJpScDijwRPodPB9EmdC3rF6x2xAf9zZsxAU1zGiSAMycuPE",
  "key30": "2Cy5PBRPLKD5PDY2y2pHXfsjv93uEHgKE5Esg9C63951sn1ngTzqGBaVCfKWT3kYkNkjENoidGPP7CQaGBFDyRjR",
  "key31": "6783QpU9w7Cu2pyuufu79XmwqVntR7FuBceYzRn9FrEAhjiYBuAsXMnsRh4PyVuBm1bGHgsXTJnPYqordheaXHNE",
  "key32": "3APJ3JDXiHiYYkSZaGKtrXoLQyPp2J4KjRYX4yJMHvDmgRrfxsPriqgM7G9QfnkK5ikKpcsmrWqq48BA9kY3vPK2"
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
