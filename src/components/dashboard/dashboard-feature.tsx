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
    "4PxQvzTj3q3Fy7xBRHED8kK8ACBFVZJFaykcscCH59KccoaPbUrvXao9ZmnjXoZSZQzBhm8LyA1yjq7XYT2HP61L"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2YGQSv5QBfFLJqubHqypvL85CBymGjakKpmCuTfMWKPMbfcCaENat6LVYiAkYnW5CwwMwJJsanW4Z5SC18sXfC3W",
  "key1": "5fQXwuxUqm1ndFoPcfVJf5axXX9Fm9Yn3SvYXmNFBXtmQjDrJnwT1W5LfUq8Etqz2SxN8ZicYnmqvqNSxmS2vnjY",
  "key2": "2jkoUYXjQm6Ys5tbWTg479sz1HvDE9J91kxJmB7b3rvL3xr4H1rjcR5tPFTguA8fQERW4eBSyVoDjnLopwecW8fw",
  "key3": "DwUyeMZxFBPAzirJMxs59y3zSzLXUk6TZ1nkGnLiasxPyvt4SFmgYTYu7tBLQ6oQjegiTJ67ikGczuzf2v8kJno",
  "key4": "3D9fK1GvLDU3E7SpSPXt1kb3KaQEm9o3ubz4UyK2gZ3yEMFq3aXF3ZpG3UpYCsXBV97axuoyp2qgNtkpkbP3LAce",
  "key5": "2Wa3t1na682tTSjhn92fJAuzd5FvDERTNMD1DzNra6hkciGPedCE45CHMtzy8GiTeqkhP4aPHQJHrKQYRS4sHehQ",
  "key6": "2r4zwva1tc6QgLpDgbQaoEHfRsg9u22gX32Gq8PtTwTpfPX4xV4bXhBKBRsPJwLHf5gxGoezCJU15XkrmDG7HFkg",
  "key7": "5MsRPTGs9WmqPShdeVqQ2fTtmRcU5qZHkm3LiigvqQxrRh3ZJiuCuzFDzhTZBDeAStCW8DfetSYeKjhag3pQ1sb8",
  "key8": "28Ut2dHL6GEVVn1m7EavrNWE7pgkoiSPHpLQ6164M748bfeHLtHAJsvTWFnc2nAYsDQLocsP85BnHUZxuUKnUtHA",
  "key9": "3epAgRPQgite1YT8ijEK5TfE1Ndk9eUQ5AeHfam9sE2TR4vMkTuzCcCDHhUhp1XJFPNpPBbKAGpYmXGUWyLMoerQ",
  "key10": "aWpph6wBmYJ2fvzFohXYMweUB1bcixmnSPBLcezDWu4fBcF9yUb1YWNx1Fg4dnJe1ZEkPnoJhRf2mQZY4YfBJ5W",
  "key11": "2G9hYjccpYwRk8H5nJUhUv54bjpUTEDYDxFUBFkJdWBVdt2T2DLYQYj1Umy2khLyDHZ4cRrbMF6nj7sn5j9i4YBd",
  "key12": "2EwZzqm9HmPdKYzxBNiYwNZevBKNCZ2rKZAqYPgn3dLkkiqyioayy8oBiTFozunQHcJ1cLLfyJqV92B1q1dgskWS",
  "key13": "53dMqiYSxM2kHpXdvGvANTfrjAjpTQSEwNCmGXHkhChQZ1vx4AvY3kMLoBGaHTZWJ8CHbDmZ4BbqFx8JfWUhLmtm",
  "key14": "2EmAjY7vjRuZpR4Sf6VK7fgCeTEggQFZ4RVSQEU3QmQBLrfxahMXbAqZ97FjxLL2T8dDYssjADN8LmMcZyRAg7Yt",
  "key15": "2BKBRi8T9o2tiVNsgpwxPzcW1qG9SGnYz7jXwkGp8qEEZLLPoNTXYGVovK5jf5sjmpcDd8QjxUBVyoKwof4nuCju",
  "key16": "2bennf5g9sA9Xt59BFuuhdM1RsgZQP5XnTyXDxwayJhuJm3BKCNfDLPoRJXsdH6QnR4WCnAqkQfwLBjvJLKdaj5v",
  "key17": "297Ch6udkjLWj1g2p7gzCmkAEsKGhHuDTjbnye2Q5fkVStAJD2CraY1MXbz5WnJjgo4bD3emL32zV7MeSeuC7B1a",
  "key18": "291poKYafqkiKWjfinhNEEa8xNqfau9pzx6xwBdg26sPkd4eXhBgiDyXDU5tq4RXNvvbvpcjc9F7Pz8VsfiELfsN",
  "key19": "3VCLQPNoKN1K1GkGRSSUoQvrPw6gFRLVTnkMaqB2dyadhvRPLj9XUJHi21q1YuodjaBxqDhfiFf67mGRa9J1tov8",
  "key20": "3n6Zwc8JNEMgLjUoFRBYhpehrVXd6wta9cyY41aTD1qxbQdLDbjqXq9BF6uoseG2xtxJ5Mi4Vuju3de346aVsWfr",
  "key21": "2aHsUxN7GiteXP7yHYCyXaoyrtGTNM6LBLrmykH5VTVEWJeYAHRPCJECP9F5yyqvkuLLXHukgAFovWbJtynHx4QA",
  "key22": "8cT9fZHwonVnEyiS2P9pGCMT34d74UtCXy5WVSf9ko6LAfvM7aTyA4CV3TsxYi3Twbk782Aa2jb4ZhbK2naBfsN",
  "key23": "4GjZtFxXH52AoHm1gsxK3goLjhDDi9MP7U6c4aQEiheNe4g2v2WBP4ZLt71UkJU43AsX4ei6uJxeKpHqeKhpwetL",
  "key24": "3YsASi27Z4tVciWCEVudEqbgsYvhJW3iBoADzPzbhTKnv1MDHVegnAZQWcRGSSixGJ8RVN7C8h8xJyEsvZcf1See",
  "key25": "5HDvBPzQNdGGQ7rNJMobT2Dxoqg17qZ7k6wRNHErx4h5Wz7fZ7KGsAD6ntq6y1G1QjeaVoiiZY5Fvn9eL5HSUiiq",
  "key26": "4XKQWn7oXhJGSqsMcqYSwGKYBMVeg7KKGiShCTRMTRNvR5wawhzyudUcETp53FTvYK3XBABPiMZUtVdZgKiRSiRB",
  "key27": "2YNzavuAkJz2hmG5Hn7B5pdoUcmu1WnrYqgm5Etb53HHEwVmopMHxC6pVkRni6WuoWmv9MzW76NNS5qEbwrEpqg9",
  "key28": "2YXSHZUj2d8nV2EYNA11vPmYdWSVbCVgrD6SxRWoifoquBu6ApJKfKAYXh32MUgtqEioFu3AexwShnn1FhZRQxPa",
  "key29": "3usTuQQ9X57EJUnra2uCf2u2h6yBCbUJ2PATevwN2dVQecChe6q3XmPVd2jf2W9n9nZYzZSpFKPCiRDkK3bdPbrG",
  "key30": "5mGdK7jcsYfxojgVdK3QfkC1QmabuhHvdXegAvB4tftUMrPxfH5PBff8haCN8CRPNXRqoSAQbFCs5jjTuGp9y1uG",
  "key31": "bWywfi5iihVgUH18k2tyuLcdNZgtH17y6gjmXAsY6wo21bxMgQv7WAScn23Zz2DzY4hbXGQDZJJDRcZ2NfMg4FJ",
  "key32": "3cEAwpocfxT4cDAPJ1MdzEt11cTA6tuobaBYckT6zppb4MqyNjtS3zFCmd8sypNWiseZiXc9WvXYXiryegaWRSDT",
  "key33": "Tpe4iEz25m744Rv69ge6ckqdsAi6eYMs7cHh5spgsrbMFXwzyPNyzpuGMLgLkFoPru2Nz68RMapGYYNhkm5TLza",
  "key34": "5u4PrpYVe3M3h8W7aaCvYohN6PYdDvaBeB5vSvvFDKp11oeyb9jpzH8Gb42V7XWfaT1LiubatUQ4Zi6T5jNUhi7i",
  "key35": "4wurY2eArxPfuKreQ9E7CcEtRoNW3pXQhk7zXV7ytDx39CyXo59Cw2L34K1fjecQjQJPzpZmFEMFAnpTRPJENBDx",
  "key36": "65i6Da2ohwcdX3NrUdfFnvMJHM5HjUKivipZpZ6oxTas8FSUC5TGbcd3qG2EhZt714WRGCC54nAqyhUWXmUPdVq4",
  "key37": "2tGMPc1QtkLPPm3DYhBKe92yjvfyG8F5SwVcxGLxt8xVDdZHVDZKS1DRDkjLNxSz2BXvPq5ntDa5UjfCqDQTDVgh",
  "key38": "2WUTx9UV1qCka62VrQubE68b4SxxjEp95yGGSGNBfzrri5HgzKgYqRfuLmJqP1WCdiHH5ayshDBq248c3Y2XEXdD",
  "key39": "3fQdW9x3wqTMd6CQZpNUYmYSK1CjNMnsUqezxeKWHy96UPQU3R9qVLXPzfFsttR4X2cYaWxV4BrHKgVEhaoZKjWn",
  "key40": "5ZD6235FmhFm6vqPAfNThNhqRLWHWZ4TqsyupWNVJGLrHR6uFu8ZqXMnc7fz3WnFfFv44MuR9LJ3cxUqAP6tvJSz",
  "key41": "z9dJgnQp64dkG4x5sm2axq8Cd6xrRJodVoQxnNgsMnZ6S1FanVFkcrqZoJMt9y8YG2iGt7ovFxG61jMVeChcSQ3",
  "key42": "3jxYifwR3ugzkjRpenC5hbVdtyf4aUNuhshB7Jn2uMUb8RDSGu4wtvMMcJb3dpj4nd3VEwM2szeS51TDkZnGZbPT",
  "key43": "5P4qRzskQTUARh2VTBHwM3uUm5BzY7N3NfMX1QQcAR8FNSbdACzAcEroSbRwUKz9ggwDfabTkXKjhF3bFSox6APR",
  "key44": "3sSrSGoSMhnQBUMhFBMehqP7P4Z1GpxFph467YYoxP9qqKCWtxebvG9QW5iZ14t9WH5dqEdYD3FTZ61Gs3DtY8CV",
  "key45": "4mahYMuJF75iuxYNE2jucMrnXkqvh16CRAVU83ygtRPXJF9RsPF6zr861Jy5fRxc4E1cjGmpcY5BVAz2b1XcA7C",
  "key46": "2HWFFhCwcLF3d2u68nFXv2VHwfoAqK76z6NZ1JTDS43znBUgGyZEs9MZwmcJjQyCPdxMXGvw8r84p7expdZepzV8",
  "key47": "MaHUerJBc5tepte1Mpv7ACE5znuGMmGxvGjeUf2qwzxNUMdM4nEUu9op1t6thpBJTT4DS1Kq39kHXtsZf8r4GRh"
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
