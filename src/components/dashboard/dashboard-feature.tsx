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
    "4wXX5S4YALdfX68HB6hMd9tN5VsxJEV77EnTxibXcB4PqAMEFhng3GKhxCwWYyBD9GtLb9hgRY9zPWxU73mbDnWJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "R67BbBjvZCJzeNEtfXtcNwcnQ2QywCLT14AS8kwYWmiLEcd1rzF7J23cMV9qXzhgTwLd6MqiozrxXL8a1tTPLri",
  "key1": "fbuivqWn7y11s7FhnEqxwrZvaBfYooC7Vh9p6CFM7pqSAmGQyRjEgc9ico2T57wvEoCdMCEJS3L7FBvrgrwhaSY",
  "key2": "21JXJhgP7AbRp6dgtNj15MMyRmbMuuvKggARmDNM6HdqxBtNosYT7aSR2nRjb5emT5KtKDXgtYVcXzopcMYguNeG",
  "key3": "4yF3LHYMSG5KqPkR43ZHycGukdhRTSFSiVeC9kpTxqmrthmusj4bSfydwbxDm3vmPodzBGQE7JYHxNgiVCKRxr4t",
  "key4": "3qPYDvZkxf3WH4FvSoGfb8rkxhyfq1UDENc7E6TccH8WSkiLVgRQJd9iqgvyTy5cTRUHKSQz36E5MpU9phtFP29H",
  "key5": "4sHLPWbfaRvSDnPp7FCcmeMzvGPmTnYC5aRF4PNZpybD9N1uddDHdUcCHtfmGH4TNJqxHVvQC9RbarZUDAt4s2TD",
  "key6": "4YmLB2DsyM3qqg9C2kT2x22yLcHUCUV6vEgS5RHXstH5GDKqEEJWFp82yo3qCVy41sXLziSUora8FH2hqbB57PvF",
  "key7": "5B4p4JctyGRBx7ER8oBGfTPCVEng4KRW7hDE6Q39ZNHXtjm7vNpTXvcptpr987J17gA9BAcFKQDSMhqF14xdjMrQ",
  "key8": "4mWQzwwFioxPGYGHQ3ddSnFtGG1zczknq2js6FPWMADeqFCigP2rxJRH6ZPfyPoP2vghcsQezkPF7P35EBxqfXAh",
  "key9": "4b282JBQN7Cnp6YPZ5WbAexCxe3LKTcANjYdXMKmudYQoEq8gVLyvbeusTRuG66T5gkXHmfUpuj6vDBxcwXZbXDp",
  "key10": "2rCoc71WeYQ1kMvwbuJy2ok9JVdpDspawUksytNh386KsjngD1Dx8DX35R9NhxToek9Qj7CwqgTSixhgZ59sAkLr",
  "key11": "5MdGiViTPiUWMnvxz5byYh2nmSRjy1muYQhZKHEL9A9Qbnn7iXLVESMPF2KobszkdiQVkK8RtQCojd1nLibgfnpn",
  "key12": "2xpovUQj2uJ7kZj2rVyGdV1GLoAwXwow8cFLznANm5tWKtkdLCBzoHXfg8DYjTQ8rmR9HUNdJXzJFpQJEoYh1MW8",
  "key13": "4NV1unJLSkCrZEYt9ETMRgERoVyLwbi45WYSHot7J2suerEXYyN5XcTSK38nUXJH1hkBvSyaBHxxEyWPMDtxdGi5",
  "key14": "4A553ekU3RNjrkoUDFKdZGWXrd4bHzcSBriDp5HBcEcT8UJYvHZfH1i34DqpKxcKySEfMEp28g8D5pK1q1Sb3vPa",
  "key15": "4MsG1oDfXjgvGcu5qbJrGt7cG6q1LSehGThdwQY5uvyzhqcvpGiv2XAPEAgHLk7i7JeXbznE9SFzVNvNSQVMpLF1",
  "key16": "w9TAj9cM5UQHVEFVtsqXAAXNWsewQPeGu8tdXN3ACSMEmaMB4mWw7RJWCpg1sai5fTRin2F1rUYWiC3iA79yMJt",
  "key17": "2U3mEUVsuu2w1jUoqxS4dwZhtVx7xi8fQXmhz1DPMNJ1bjk4RWdzT94PZfQ6SN2nYpRDWzrYFySieFcsnptGNAL8",
  "key18": "4cS4F1UGuyR4QUYwuJSKTBhBR6hZHFYYCbyfh5KEkbzkzeCQorCRiQGfsz5TyKBy5TBhCqorAzP2witiS9rHq8Ja",
  "key19": "3kxRG6RCjwQT9xoZ7Rbd3ddmv93vyMjVrLhARkf13smjMPJgGXNM2RC7K8scuqHt2TVmeWMzJ4n972Z9trrVFTmS",
  "key20": "9KPcJDsEfdwAeLXC3yHdxHPepfPuia2Sff17RyDmqKGm2h6ongdD1PH4N2NfsU5EQmdB8ivDGEespnHWuHbb71C",
  "key21": "5UHzAxS8jz6JzimzrXqbYK66yqj7B8WPt7qvhWW8u2ZoHbUknbM6AQiKHhhPTy9VGEJY4UyGydutxpai3jKXtM9X",
  "key22": "PkPZ72MXQ7ACbeTdMFfNpyrHtFQhZWpKz5TjRDP9bGGyYbyo8i1nBxX36aGHSYfcsUfkQAnShtxHBXVUXgg7aa2",
  "key23": "32pcmkYhafJiigoqbdyaJwCRKEFgCqkvGNk4ruc1xeXmkrneU9i7LZJvMJsyZKVob1t5eVzCNuoe8BCUeAjNm1B4",
  "key24": "25Ba4hyMdx1PDq7PN9tF26UVkC1kJRtti2YwVV6qb9w5TEEttL66brMYkamJVPo6wHC7qnQx4ewnqwax4CkAfRyp",
  "key25": "4tJhcigxcdRE6S8siWsnDJvdvwF9fGdwskX2vp2CuhehaYCbTvGEuiqEX4hyXARq2C99yWhYTPqXDCDYs5FaXojb",
  "key26": "4Sv5wFDiPE9vP2hkTEbZVvvGL4afQcUiFQykNprDfyuJ1d4rPEuKrbNSxBXLmCRvED9YXKMtWmz9oADSYnWTVjPU",
  "key27": "2ztDLj1rUjLzpJ2aTrCMYvTDo3TGmpuVpCcAjs3T9vox8QRXJvwA7YH699Zqz6wasqqLnGjfDUGhFrUzYzHDHF8T",
  "key28": "4K4ExNXe6nzyVDfhkNsvhuZ6vDu6zdNYhK7Dz83z2B1FyPUDdpCwHkVKgYHMutvb2bVCJseqT9kBUmBqGiWZhW1y",
  "key29": "46D7Bc55GpCQc7tX8fFAiqUnasffZaehWFdKy6ThQiqv5J7SKX3Zxft3UBX5e3zwdD1bx1yfQbGYFipFWxR1AjP4",
  "key30": "3HBJ234mE3JH9nzokoRmV3jDGkbpNTNVdTNuLoBVDv3cCuEg8xpFe8fxBKxW5P79PCE8i43o6kksyCmWZdZbsAGh",
  "key31": "29pxKRmcvbybFxgf52DJCXXS3dm5K8KniKzyhDvzXG33HK7kpchn6NK2xbQZskqJg9u8k6XQ1192Y42Pbv4u7n59",
  "key32": "5KckG9LaHPWFM16Gtx7DWABbHPdHzQjE98xVSShkQ7ybBpmgYDKbhwErEoGp5KDJFtD4nvGEwjv4iWxTKU6eToEY"
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
