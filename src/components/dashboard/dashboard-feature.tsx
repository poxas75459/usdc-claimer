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
    "25BxCFmCCk4FdgVAbqbQpVCmdcSW93i1jEJYeSRERg9ytxaZE4gEV1SkBUpicE52KSHw86nykLAY5778k57MaoCw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4EEGvwSnqUMTWWjWYpDAsRG8zrai4tPkXbbSYSdBJXJK7VsxEcS5vXFt85j2MZxohNz3de2gV63aH9nSNSyeV76s",
  "key1": "M3MbFV2n7VER41qFaVT4TLg2tF6xR8dJjWbBXaAZpoHizkLrejLct5uzGmgVc95ZGhQK9gwHqhoLwcwLQn6jPvW",
  "key2": "3DjTd8CSrDBY17SQb6etxRpdgyvBD5vNj7xx6Ca3SNvArvcQY8NUtYC8tPvRfnRpWL76cCZ8eua84kvZGZ3YYTQ5",
  "key3": "2wp67iusW4DKU8X26E7ZGPAR7XBWnBKMuTto2mkttsgKchdtHUXv7A7xbqeubWLZVS3CnnVnq26hTmXfEFELjfvs",
  "key4": "Pg5ztKb4hQQM7Gafk4AezQkfrZkHSPyeejGUVGLwzCeNxaosbCeaPazfQoPbfVGWhj4Qqf7pzbLq91wXCMxtt5p",
  "key5": "4Pv9gK25qr68cmy9wr56aTdS9krqD2pB7h7L9iEnQv4wWUkmvSZFXQDWjp2VDQi1aQY9G6keT3KPEzUuHCZGQEkG",
  "key6": "iruWmR7CWBv4StuTvU5HzSTZKNB1wL65ojGJKvS3un8LrK5R2MadF6Q9e45dkmV53LykMh9mjmwtJsakSM4Vps2",
  "key7": "4ezqSrqgo5wxR4p4Nnu5hgqczsbW5GEPd5bZcpXm7kpjCjUHpWRg1mqNm6XU4FGduNpzMYRVDgbMRpuZHyRx6csn",
  "key8": "55yKPgGCTYkt9ntBL3S1esKCSy2prhYAobGvRpVPcAHLeyJjipE4f2Zfu9yHCYf2JdyS9MxWJ6PELbADKLzRdFwc",
  "key9": "5jf4rLMzYuhaEBkRsXqyPyHVouVUdEHFNh75d3jwDCubYvQh7bijg3SP9cZXx2czPRaQdfHuho6YFq8j2dA4Ro7J",
  "key10": "2msnvNGA2Gnq7gSBtJMMv9urYEbA9iARtb6goZ6FCDwb8RRziChejRrhNW4MEx8vhchfENn8vETT34NpkgtThAt9",
  "key11": "32YbmhK8TU6SbxYugDR3rPPfKDjC3DW62NymCRExTp3BonifhKkUyUzjZUnPtCCErASwwVrtij9F6rFWRjuw8Jt9",
  "key12": "5L792qbSnuRfK3f1DWEgs6QrssjrV9AoYMc9r2abPsCF71e9GZnmVn7qZqwKLdhNCx8KTfGBuhkWnpsbkpKLC5Ce",
  "key13": "3p5HjNqHQJWycu3LcTUvMwYByiyBCqHuSWuajvyC6EHuV8Yw6XwUbXArL8eNzt3AK3deVtY3bgnVRwLDYTvSUe72",
  "key14": "658yWE3PriYNBBj7eYvqWtcWXoD94ptNDZcbYxBgCrPy5rFoW34YjAu7JPVHKwhubV7bHvtQ6UZxWKRLZznhLEsj",
  "key15": "3hFHTYy9nCYvb9DbY9T1P9kQrXVGVaubqWxiFsMFs6PX8CPy5mkUmVznsZr7XdTgZmHiq3L3XmJdMXsXZKWnDErX",
  "key16": "2jNbM1LPvp9Zbuwuhr9GNCW2R9VkFi7vK58xbisWEtFf4p5bfEB6APbdZDRWrPKJFPUqjZpdT5FhPMSgfgyihNsv",
  "key17": "5XgCujTxWpjjXiwWZR4xwAe1RoQQHHNgwueCPzKfcR4rFXShuPvnpL5KWnJY5egKoCKtuSpsw32YALrdQLnaBRGi",
  "key18": "4AYZJA1kyw2uXfxxmELJuaB5AdN39wn8F1F79KXzCWiFNoKWF2fhPGLwFWDBHYgeysmrxEigPuJgC9n5vZbnvSng",
  "key19": "LCz8NkSzztexq5W5L2CCSywyWWkCPdsEZSL42yzGcATMXs2T3kukktCvYzC94jU5rsH5sAf7GAYbLHZWav3yqAA",
  "key20": "5hEUhow4zjVi95gwuTs3QLa7zAu16YKUsYYRRxygHrvtP1YHcvhcmXLhB35bprVsZmNvNvLqjRFUv1NPwhRix2yw",
  "key21": "5k2bv2T43vLVPDhvPoTP7UaHVY692WWsVj8kq7X6PXKhkQEHwxq4joEBkxWUe4yoGx1dxYpNg6tjo3zTvQz7N6QZ",
  "key22": "5NQcy1vmGpp9AMRXuv4yT9XoSS6YfiCRjqRNjtWeqkmbX5v37hD92AR4ZeKqyeRtZrz27UtQrTsb2SS2KAJvbpWe",
  "key23": "3eePCvb61htyBskhq8m368y4TjsRgJ9rTvJKbKNJk813BiHzdQMypwf3NaQCSXpGQxVqhJgUhJ5HtJGzXX2erZBD",
  "key24": "2Q9HScRE1DSRk3fTn4FFE7F96K5jqjDzVEiZfByuTsTVUWRfrkVLvp6aY1qYJ1Xhmhvb1YNWE16VBKBAdPHnQqkk",
  "key25": "2j2ZZ7vbsxqssmSHannSrxFqhgCpCDAnLEsAhRGmGLR1hWrdy2orKxsMygmpx5Qqwuh4mNCMF7NbzbNVTt4qcEu1",
  "key26": "2Kg2q4ETB7EKJCz8fwuEiySkpugqoWATzEUFKemv4BXnY9xeM6pT3ZiCvy3X7V9U996g8sEoB3kGyFdG66gLtKLw",
  "key27": "u2rE3WQnukva3qVdxHYAhCALbCLB2SdfV3HuNPSCzV6vSt21iKGRdGuuxcrWBiTtnKSGL3aJtmuiSa5TW6fwWgg",
  "key28": "2rjwPh79p1VaSxaxRb2ta8eguPF52tr3oiuZvaEX6TkvcJcdzFx6fSNQborwSfZbV3Uw3p6Q1QBm2MYKnKLZVqgg",
  "key29": "4NHvsEDhMpevTX9F4q63p2rx6umgTckE7RkAgFw6vnqeWNfvP9iXCHG79pgMTqGTP2pjdqvztc272siknvB2L3or",
  "key30": "45isKznUihxaZRhzD4Q3mWTg6uCvEDuKRX228LFkfezn1HpQ4MT3XgEBJ9Y2ZEYeZWaTPZNR4BRAPV1WWMrr2SSp",
  "key31": "FnjzJQ2DBFcQYUudHyqTd1ncQm8mqDdLTV9pebuWFabyPXM1NSshJH9zE1BSAX1RvdPsZf5VN7Ya8pTfyHDEjAT",
  "key32": "23jYGHj7BBL8F4mCbmPrLxiND9Xw8Qs2E8dR7825dHkT9VMP5rVxLyEd1CNuRCjtwFqQ4zXW3bcHJAHihXZE91ae",
  "key33": "5gJjzqdcoRgttnVWRj8UyZj9zjxBf5dPEMAkaMKR1zp7yZF8qS7qaCrVdn7PQiTB3UtJbQmRGdNYJFNpLkf34b7H",
  "key34": "4r649EP1Sih8oFGpvdPhWtDrWCs2HZvtTidm3VfFkAtsKwGck9GdRDcavcZ97jki3LNqUnYNj9vgbwb8uXo5xFjb",
  "key35": "5CmjhwSuuUhgXP9G526Wn5sqLAuRaJDJBoq88A8tZeE9r6dAPkHhheUVEW3uDtLJFsdo3XYDPUKEFAo1kz9C9BVz",
  "key36": "uPhm7nrm2rWhxQkEDqXZ7CochDmRMaR5Xc63nicZVwrfGvCqzFxgZMhuPXYMAktoUf4AEbu3zKHmP35S93u6EzM",
  "key37": "519UPPEk9mUQnsRxofmNoaTzwUsGHxAfrWAUZLHCzuEz18V8eJPVwW8SLWemmhcmiRdejbhGimVuHy9pAkn3CiHw",
  "key38": "2te6YMp9RRRYDJAJVDQLc9qbKUSAXTf9AtLHAHtqAfNay27giTapSfWeWesRjqLnhD1wQA5At3XuiEJBqHhJNyre"
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
