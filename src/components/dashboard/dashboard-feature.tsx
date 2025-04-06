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
    "41rJULHAJvCbc8WGi5u2bcU1WwuiRMXCRB79qLR6U4kVTuRT85BSDgbgAt1dqDUCcxmFUPSfuGt2pVxCAD5JcLQy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2gY2RTfaCnZ56zZsooNEW4dVykoDEsxvv74mq5SGHBpTg3UJSmm9dwohqPYvbUc248cTSEGwXGV7RYryyfZU2r7p",
  "key1": "5Se6Hkyc1Dv3C7eB2HxzQ4T1cQqLMASZXWWbTe7eKhBQ5HdzpeGBcVmEdnpbNfVamUxCoVQHKNCvEcjm8nSkhu9y",
  "key2": "3jQ92Br9mzwymkr2Lx5aga659nU9FX4ws3juwUFQAQx3k28V39RapE9yZy18vuquVPpNQr1nxbBuLMpcoG9gXiPB",
  "key3": "3mBpnGLFyvTp74SC7FhCSkGjmskiAk3KZudAbPALn6SBrouHFfQUd7WmJgG41S1Z5D9iokM2aBtshe2tcTy129Vm",
  "key4": "55Up1awxH9bVFX2WenY4Gj2Ybpiva71Eyt8NJkFte89WaSDiioVwGUjCfxXVgi3eaivF5Msjcx9vfXvnjuRL7chH",
  "key5": "4WRZzQGVrLK6Ws7rYwRDjcPaT7CanFKAcod2fokftMSLGjXgyK49xsk3AAkD6bXnvQ3pR7eqmDMawGKPm3shmMAx",
  "key6": "55TVtuR8x9jtvRksrLFpRQW4BJ7nZk7PdcCNGLxdd7mj62sQWaJrwj5uAzAgxxbi13T628UTzoHfnxEWPPNLR5Yp",
  "key7": "5zrWFQtec8BFJB4HsqedmHk3N24SKRHwiu7Y5rZTvSoqkjvHBwLaMEinNNvGdyZdrPa8ZpZ9cjQKYJp4vbGf2U2W",
  "key8": "4L4REykbyco8hiuHDWFfi28eB5eHmox3WdjZPeoK3i3j8PNzYULPCkwq85HLXhyUgumktw3siGriNYuyixGpU9b6",
  "key9": "37CxiojHSkG7Tf6vsf3Z7CUrghprLe1SRsvvxZ2LHCgBTcva1c6QBPt8HRyDHNRPm4foT4wkd7MN8MhriNtf5jAp",
  "key10": "2AnY3igZw74VJSobpQzK9fXPyUVfXy23LwVnUxtidhrXKqPUdAh3Q8BG7MVLMved8pJFigJvJazVG1fXQc9sv4KK",
  "key11": "2GuYy6eMniK1BvAHXe2Qq9Jyhx6XAFTrUnHtsTn3XsacgJ584fe53mvUiU4ebjARkD1ihsS7xSV986fpsQHR22sZ",
  "key12": "5WNxQKiDGLvfuW1B1q1CUcoaMpQ7oXQ1MVod6MSBXhz4Qh7ysoLtwJP4hcW9K23dgzqT9Ss4numH9Yna5o3EbFcF",
  "key13": "59vHEHgg72RbZCpLabRqmR3cwGD9pdCvcZJePcnCTWazi9GPak51yrQTbQKGZgTF8dnJTiH9ZRJ6FAeWL9ZfsR6k",
  "key14": "44KxcUyS1zdisYQdgJq6P9NXCFtHEZ8TeT7e9kNrgPwEsfwV5wdnsDUhtbhhBExPUMPDr48pBGQHNPBpod6SXYgo",
  "key15": "g7S1HXSbYj2NkfAXxGao7L7JYmEZcfagNvhXF8J1i4NRZ3g3nTw9MzigUUGTApkmK9AxxxSo8y1sxqE8fzzWcAT",
  "key16": "2x8sZuCRDor1bNdm7TEJaTnEE5afWBA23JLJfBtLF1FHrTtpDh21n3gRqpENxbSHE8hFmonLkDsa2jDvuemmZixM",
  "key17": "2ZYLYsFeGowyYNhbNYhUFRBaeHj5ejKfoEQ2T7TgyvhZ51EEcojB3y28SxHeXo5VAQeJUCKEHoVn8z82m1f2Estr",
  "key18": "2mjEN5v4EeSoNcc43DGub4GsMtWWxqgFB5RULSV6wHii7Lhf2KRfW4BbqJsMZaP79mBP9Dexun5RRc9pd7EEGbqy",
  "key19": "2AsuKENtdxBPRQ1FTnw3KMHaaCjqv1i6XzkBatWVVN3dSXfVbqkm3mzhrqkS7Dyg8bBXfb8ntGRj1bsVJh4AFLhh",
  "key20": "zq3uxq3Uh5grnaSKwxcRp7oxxpzVkeCC7k9qThVW3BnV1bPEbFpHJE2x48Pu9QjazhZr5VcUVGaL8Ze396Nkout",
  "key21": "2fR8zcisA4gwfTre5ubX6EJC4Jww4z5RBnFY5tGu1vxuJgadD8Xcgha4haGLeSf4p2v5VjJzQD8GZKGSVWib1GL8",
  "key22": "2kdMQXzrBpVWKWXzPhnuhKHAadyekfLoUU47i3TN6vgESwBKaT4sLxgYriQYaMyQLqYCJnNqyVheYKFk8Ljt95v4",
  "key23": "3JjQsnLzeyoJPeS1YwRagrqeMr2QpQBhanKbw3p1mV3C5oSu7yJnYQyQp3wWyKMjq436LywYECpBE56Ph9j3fADD",
  "key24": "3Q9mp4pYjUKw7AkpKMYeS3CVTenrZYxB5nUCg6oWGpMrrs4knXgCPRCeNMNFzyLBhfUbXLZAFkf6qsCxvWCE5p61",
  "key25": "66LNsWFQixK9fzDsdnoUVbZHM485gG3GGuYjqD56Qe86BxQfCM2QYp8rC7JE13C9uop3MUkYuKcs9NFZs7L7LTez",
  "key26": "eT5urrjsEuvbv42A5LcPcEwFsivEHHBx1eRNTnwaLCvQMDTvZLj8wirgia2wDmZcHp7cC9tj4te1akrsnXLG3aS",
  "key27": "3UJ25NRGanHA6UK2Bw9XrXGvkuJiJ4y9q45Ubaoz3XRTgEcHTAnmuPNr57KVjdz4MwYhzCduuR1Sf8WacHVnAN5o",
  "key28": "3urBCZCuM9tcYrC4sXm1YMBdQmpd2j3o3XpPgjczURyCFjDbRojrDQLmTD7EYqbZPW7AyLFDfNBy1DbWEcfZrWnT",
  "key29": "53xo7opc6kEYJhzsQPMBCNrpeaRrAVt7VygifChFUjz59xFUhn5VhuqcnY7vXhG2wwcMUTEvApGHxAKfeF8RMGcF",
  "key30": "2J39zEziPyUj4L4GCG12vcHP6pHmyUxNM5abaDcTHk8PQWAE89qD4UWxy8kUfP6VvezpSqBmksX1g1HhpCEwYHnW",
  "key31": "4ap81VVmygqjiNYAMbgNwTKrzpTodpYSYUYRgxqMf6WgnbFyPvCULkMCRERNBwvZ7mYJftC98A3e4v5SJ8pinLrW",
  "key32": "5TMdgkMVxzwopjGyALJcuaEz2ySXiJM4kvLo3PcmrijFpWexu6Cn8drL31Rt4DVRdFBbWRxiGCKh2WKB1dg61ARo",
  "key33": "3MT3QeSJRrwQqhbFPYgTZv1L7P8gGj5r26hLb3J3TgWR9QnPphzXPvkEe1eQohJA9ZaBBFN7hGWhgfX1hAJHhq6W"
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
