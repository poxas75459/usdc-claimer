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
    "57f4xiWeCW21XoundAAobtX1vSBrGgyPAcJAtVFudfLjiusZ8hMrJdQT4mePDAknDghCCQSVE6ga5E3CT2X7tnW2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5vnLJN5nVcDsT1jsp7596PE4E4zyeDxqzfX19qu7qJjoMiZdehe9UzqzUtfaHxWcVxEV5AFG9GaNMbcnLXFgjXPE",
  "key1": "25vqhcGcmwXn288F3whzzVE9otcxGFScqYE4xSfWXMSXUz8N8edqvkuuiYe7TQEu8WhpFoWr2XgohWqzCrqHakQD",
  "key2": "NjSJWHmCvKMTCr3ssEsNcYbtFJcM19hZYS2jrt3d4Jfim83vNLCqA2dar8JtVs7ZBWFSCPcNvBGrY7naF5C7uTB",
  "key3": "4yJ7Pa8br4Q1MVyBXUN9xmtZRjUBkQHuBbp1v6btWHgLBygmmLPKuBgAgpcBcmFFMeBkUsZmb9HZrqYtzDaRDAL6",
  "key4": "3dwdNcSdXbNeFaC9koXRRNBRZQdHegDZbbpJ9dqQxY3zKywMLjPJc2mqsdXM7QSGm2jEtBWat7odDmZ6BcXUYn1C",
  "key5": "8jWwufchwsoY8CMY7eWwpcBN5SiE8x5QoEkVKoXVGPJSmjn4nVy8GX7uZTSK3DcCYcx7rhvrgDtLPkvL8Dg9qQE",
  "key6": "2ooDAqZng4HWrc3M9gWixNrVMLe18pHYc3GCkjw9ed6poAHd2AgMNKtXBDg6Dr9xyz9M1XKPy2nPKXxTTtozJmR9",
  "key7": "4mA13x35WJmiNiWJcLkEZDy8CZGGwhYaABdBs2aqFqg3cNFz21NJroqhuFjnGyL52amQivgdVdimQeeo7X4C9MKk",
  "key8": "XYjR1KpJLac3VMFQxSqjWdqA7wcRdVFpEiNwBXcnH2hWdjvBx739YrWQxFU78nqRicUKebxAEtCVTEY7dPDiGC2",
  "key9": "4sBbRf2WwXwx6s1SyZ1LzjhfMtFeKn8LLv3k4TReSHGX41vHbRMpa2AwbUZDDkMkqHr9QwydWaJqeLAXknb8csMp",
  "key10": "26BuDGkGMtuK34W9LpTbcz9eCyDVaLGZVPua1thir7vyQUNwSL1JPsuMgyRtu6dg2QXFtyJSaLbNrDfbQcTPFtwG",
  "key11": "ERhf7shgrzLs3Ro6nrzVKRzvpwKqmwHdCqbsk6g96F5vwhq3hf38esTwrtmKedxycnme5utGsXiLMneCAVYe72H",
  "key12": "451BHbsq3X7HtTAn264RJEFcbXVBVf6W4B16YTxVHwhXNUzozJ9DXH9Ly3kn5RPbQbLawgMwiCc8P9Gvd8nbM2ek",
  "key13": "3o7A7qnQzW6Ce8EBCUC1uHJPUtRV4QdxUCJ9tZRnJbNnqJeK3EHWLVMe2pT3rQZmxx4cjFza7TfrsnTqrPHkytB4",
  "key14": "678fagW37xfa1h61FrnZrtxLVYGZuZRfT8qt6fBB2PoeaGpgyRr1ZtuFJDUdUpavorLAaxUxmWBBwEA65J2nwaa2",
  "key15": "4FhekPXF5HLbjw7XNdcweKLxVxw2UoX8fDyHDwFgdMcHukZSahL3yZ3MRmefKiKBRe9peAANeLeX7LJgEswtmf2g",
  "key16": "2uz6H13qech8oYE9FEuzVwN9tUJBE5zChtV2NRcwtWn6RVTrE7vnDTpPy241uMxeNjcrecSfpriqhURf6aRYYv2i",
  "key17": "56BL7zuB5xSHBbXyfwxbfdUqMsiMdSiVbzup5fHqMBr3ZqSY3UdgJxPwytWSEsfYRStBvoPEVnxs513jhYr28Tpn",
  "key18": "4XjjBgAyr76QfzLEvn5UJU4o2efEWL6cSZCooN461HKQWv6wfvHQnwknJ7yZJLXhP7eMoTftd7vfwoPUn8u3Phop",
  "key19": "355DnqEgVtUDsJwD3kug25P8kV5SvWp8Wyo5JMC6GrNihDpWj3mJ1Qzch3TdKu6LAxb3hhY2msPuLR3ECv5S2hbr",
  "key20": "nkJF8rRDA42HNpUJmM69Tz8pQuL9j3ikaJyFP9QZQRc7fteid835wV9mA1vLLJYh27gJdiFXSQTM9mPQe6MrxKa",
  "key21": "42zZfMvM5JkDPwQ7rQNZfQWcFAM7GsYgMxYyeeaG6uuVYNbruZdSkmx1suFnwhb9Q1ex8nAbjRFt2U17HSsxWqSC",
  "key22": "2ZkQYcrya2ECGtFoGJML1XqQRAAa9YEQB9gySDZfQPBPAYNA12gncKgoYeTkFeR1CSPmi5UT1Jt8Zh5fgTS2bm9d",
  "key23": "2vcvotoJyWCBS2fMpjex3Ar5T8QMN9SysFhdsgycD7HoZoCANQXcuAHMQ6yksHDJzndiQQqTb7duwQh543KLTCsF",
  "key24": "3EdJ1kPvmGmgwVuycFVbuvdc9cMsCFgR2QAfmipjF8xdseUDqm1T7x8rsCUFg1LcdMWgLcPoZSkVoJyVvzkUqPUB",
  "key25": "hVsJfR6JHTAYWQgcEUNCUjs6o3aLQBMYvx5udFWHShH6XyUXsBqBUofbPyNjFD7GXBsobN6uKWnKZLF2pGkaYdP",
  "key26": "owJR7TfwkJcsXGFLWgCJdbeAYNwbRYb1GonBG7tgyV1hFm9KsADMPMjeYHA4Fo5egRDMygbRsQeGbSDNHWa1o1Z",
  "key27": "48E8MkjfSoUpJM2ot22qrgZCBterSB3M47Su37wD3cioZ34f7Sz17eMkRUVCE3JxZVwj6xMCd17vXtpGrkqDHDXu",
  "key28": "G62pEo5Jdgjx5ftoGkAatFuvWJ8wWzofv9aG4GxKT2e2icQFaGwMw8tekJZL44TuEkdf1igDkENjHGHwc5Y6nQi",
  "key29": "5FRouEMJJ3riQEzdKGhUry4ceNovqs6v5HoZ4Q3zRQmT1ByruUS3JhF5xssAYsYjrgXRWHZXdgDafxjwCXJBPt5h",
  "key30": "dPZ8HUiUZ6S5uqzsb3QSexFfkJepFTLuNchFHs4xPJGY1FAAGpir3Renz9n9fyzR82ABNa2vLpC2LB6oTRPYfhK",
  "key31": "54BKxyQ4vkMRuS97nggFK6hfndNgynb25MphkWbwa6Yy4FS7EmNJ7ueqkqm4utAhfVAeLzgnhZczW3RgAwXdKZYV",
  "key32": "2kqfdSQJtbscG2obVf8YpQKWRRrqhaUU4D86SeMEXM36aZyT6XGQqrunsYeyiqPjZLA8EATZwVGAE2Km3kdQjjKe",
  "key33": "4bgXchzyiiHxwSMYGLrKhfU129NNcH8FVBK9gBRKYxMH48yeD96cbdjpVTgBeBVcux7NmeWczLWRioWQtV9uTiRB",
  "key34": "pFuVNHsTm4r4GMK67eyTnt9iXQrB2XLB2i4sHofu6egs4zC9SphKxUZ6eVihSyvWkD8L6hyn2docU2NZadvKnPe",
  "key35": "67jL9Zy6qAJbGBBdZbwmJFDxZBqFHzNA6KHzkMZqTQAf3Gqg6kho2yEVnUCJ6PH42dY7Sr5n9AmYcFi9u3Xk1mzX",
  "key36": "He6aHPeeNJzx9bhtjGNTER6LD53QjVjLUXXFtTL5N5RrmakaMt3FkbZpFSY8H32pRcbEeYWY8fCSvW1sqRx5dUP",
  "key37": "5Jsv5fBCmmNn19nL6Pjx4XTP3e32x6cArdjFFV21t4AQJW2nUH7F3hX6mv3hw22vtt7mqddw2Xuj2gbAmcKYf7dw",
  "key38": "2wLQ29TJ6WuXDyWkotxqoG1UrGSiETFjrAABT2NTYVhEGj3t6VNjYmAdHa5LpgbhuHSxSiYbXSyQAPxQpTKR5Jov",
  "key39": "4D2fhYaFdKgBGc4qyhqCMKtUPYqRKr1RpJfwMcUMeKSF4SW2j9en4dwDrZLo86cF6YXkZL2XQGrY1AN3im1wi2se",
  "key40": "4FyRZaS12dbiFgGHw5Xrp8SnHVzQK7zmXbXDz2ocxUcRt7vkSGPEaPVdurEYUeUu79puYJk8HnhS3DbA9uUFXsBe",
  "key41": "4AGm88ZW2YVtLJgSg2Hs3PnXj58md8pcbdUQfSHoMvsCMbagvtBt8UqRYGpUmCfgH5xaqNwtMXLdTWYEsDNmFJs6",
  "key42": "vx7sDNiAWBvVR7jdc2ibFAHJhQENe47ZigpxjSc1NGu2eKmAfH8U2mk3wx4WVL6KAyV5U9v5QjAVm1Xw7jU66rJ",
  "key43": "5gNZP24tFrbzbGP6TZgHM5B1rdkosQgBMWyLbdh1Qjn9ekWvkBve1Z9ygu8RknscBxrNTpcEahEypUAFRX4FGWXM",
  "key44": "HH7MstjRHYTfAnzMhhCA9wkNQdntoxzakUCyzMBZPEXi7Hx5yJ4JHnVn1zTUq5zdo8PW1grE5TTQ45y74JH5Be5",
  "key45": "5pPa4SLfjKYac63FKH942UsuTDo95WoX7CEqaVAp9UsKaxBo6AFYQu7SH5KGpuBXJBa42h9KZYBtPA5MCf7UEMFp",
  "key46": "5rTRbZBNxr7VxX96M9U19hxjv2tmyBk5HZBjc5PrrrHoEqGrt2xxSDdTLjfEvwsREaJaYYco21zgemcSQnRH5Joc",
  "key47": "5rbh7eKYvA7d9H58MweUK7baf1VqhZnzVa5FY4Tzp4Cc8uoHXXR7YncZWVxfJnzVqzwJHogLDBiWcfXCWXaH2BHQ",
  "key48": "9sBQXRxAEFnfqs78AKdzdq9MtPs4wC6yaicutQx3S2RrjXcmynXQnLfYfJztNAFYTcgNhzUEEKcbnthqXTh6BQm"
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
