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
    "BVbu9rREz71BAV6eE7Dhx5MztTKQcHsi6zQEfHb28LATgwX6SK9Dzcv5MntKBwy4P9rbaw3houWDUnK3aCZYaf4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5YvrtzAcRnM66CgBDKGnQxyu2WbpynTqFTM4GEH3YidH6381nfmsqUUMyuXthixVDAbi4fJNkke1tYzyTG36iDnZ",
  "key1": "642xgrdrGsAzFa52YWuJ9LEdyUvU8jZCvgeArJhqfLn7H4gi3VkwZZPy1RYEqzkn7CqHhFYE5YoEZHR5HXBu61pp",
  "key2": "2vGLQot9QMZnScWpWDVbTLtU18t78bHiCJNdUHNSgWw3yzSFjTxvnVq5uhzBdyMEqJf5Va2GVXnbMRBCobHeTFjK",
  "key3": "5dXgF64xUqk3WG4HEL7sWpeLQhELNpAAUzdPzcd3WJZJxws83eqtQ9ZjH9eACHbMemBaW52wmK9oMoxqmoYs9HJh",
  "key4": "2gq3MCJFni1GytnGkfspLooQ6nfYFixuryqZC7rfFnXJ4qYuGQUo31SstbVLwkQD9k2y6DbTngG5gQu2UVLsamvi",
  "key5": "5ZreaeieXV3eTe6JLtsXhoRtL65zaY4j7voryRgYv18PTJbKqqKSL54Q6eDRkSZUJLrYEKgT3v5tcygXEU2XP5WB",
  "key6": "4K4RG4msyvdVzFRkVHb99cTWaqzt2sWA2dqfFsUFCKu699CvtDGKUxdNjz4wMipSWoNA78onodWDsnY2xtUoWK85",
  "key7": "63QMy4JWcg7DorkmEZJSNQ8HNpw1UELY6Z1hAE4oRDqLKWkNi9KuRbZe9w69tMrtcn7LrDeVcYSc7VtXU5uK4TdH",
  "key8": "3uGApRKqAVjbceJ1rWTbJx7eGUdvNkw2Hj5DAeZKEv33N8ULdXBtF6CQXsvuTPJJDouqCVnWcZ8bc55TWymAoj1G",
  "key9": "3wCJFYqvQc93Spx4hLWxhrAtvKj8XaehbXnhP43wj7Pb1bJ36ESWfLiryhtFH8Xr8PqQJ5uw9t8mQBeJksQDNNde",
  "key10": "2ScadFwLK6NdgeP93MLdJWyomQpnXv3vS4dwnCJXr78jU54gBb4Cd5SUFfAXTFxuBsFWrzLMgYkiTLaicwZAiesq",
  "key11": "3i2kp1yuxPmJ4d48bfccdW1Rmm1xii77wNTJPLhNiuk5NALtBEhzXeziPtTkdC1i8DczSoNWotppdZG5HHjTCwHX",
  "key12": "DFTGM3dNtyfHPBHQsYwVMKcDwLbEY2VThKe7JGAdCkYFz5mEn3hseywrgcrpL26Rwe5UftFvMRgGLX9rry7WK78",
  "key13": "5mZ5GFPimVm4CrEkPuL4BzoXn3sEszdw3Egs3HSkhy4mtRVKrCDqRp2b1YWoum4enMuXueWiBVMGcVfZ3TetxQac",
  "key14": "4nX9pbPG24KroKgrbJ4TD14hhAUzNbR8zjRJZTsC8KMPi3fXbXeSWvRHtMrLczVT1MFCtzb88pHkSo2ra2EeuQfe",
  "key15": "5oeBwkGjHPzWAQ2NhXiYCk8bb9ihhjrBsSWuuSS4UdH2cgdysP5SySmd3mBAfiMSw7YcYYBg9ekkCAW4djgeHZeL",
  "key16": "5k7ymZ754tgcrv8gaeERsStpdpDPCdVFR98KjuYnpAAVoCkzxzvtu7whqqtfTeKbt9BedySQhAzxNJGSUzU2ExBq",
  "key17": "2tmW3uHUV1kxLUKXzyz3Dnu3ChEpz4eiiXkjaV7ZbX2NXc11UyKu9i94KXxWaJfQc4GS59mpEhkgaTBDDs3J4VUj",
  "key18": "4tnuoXHg5UB4ND1vw7264ax9yzxwNddg7hHPU8pwKm2bFZQKMvLZDcojaeUrPg8bkBAmHN8ZCdqH1ZJt5aPUACVN",
  "key19": "4gZ2cw2FPusngZLN9CrN2d327jc9DVi7Pfc2DGw4fQbHQ3tPX9Hxv6dMFusrbzQPp9rm7LkNG1cxFhAWrYuQRuRG",
  "key20": "gRrjpfdX3epstRgnHnedUpHnN5Ek7apSPp6qsqx7d4YAudwsDmg9iM2UPHf8yVsE8emw1KLH7pQcMbGQAs8TDha",
  "key21": "5xUa366AXBhWJKxUR19cKmKjYkN4Na1Mv8VSytKwfk9GFqyHv8iN8fGih7smzzxpCVP8o8dbZkEQYbYSor2GPR5i",
  "key22": "3swpW56eNddfpSgTALZjxk8qjCxTBwZziPinZy9TbG2WAzacz6tbLKTU1UgLieTxChsxYG5zpA9terojLDD2eL7k",
  "key23": "497DcLWSuUhwbvV9NfCCx4gCdjDntL5LubvfSiL4UccwVB4KVgoFq73ESKaJZ1hE6D8cLmcKwnqd8vZjFy12YqRZ",
  "key24": "5Zms7dJyG457DeCHVjuDAsprUaKPXrcrEqpip3qCvT2mteT3JsRaztG1ZdaC6uEJ3466s3iv5aqSCbkbRstrLDPP",
  "key25": "3R1faDCqANqgDSF1VBgeUzWiUrKoiF2TQmtYKzhnJu1uip4Dgx8qqrEeF1L8ZZqeVi6z2QRAnZehe68ck8vJZWn1",
  "key26": "278XvTNq8JzDJ3W6xBP1GVndW41HtiYCKXC3BzyAr4e8FAebG578xPJfxiX4zpCMgEcCNMe48PfNUd6rissNY4d2",
  "key27": "4WTwgcbNHog7XGEYGR9fo2WPsAqreKTBoqXD6299trJbNM96aF3TuPZywqPUTnXbXiMrJbLsJRMTDthAad3a4RQx",
  "key28": "2Vaj8gXDn27sD55PGiNt1WcVEYUknBDEs7HuRsjegU4DqtFPdHYghy1vpxCNedmSsgPTFxGoXkVSUjgrVwKnCbgG",
  "key29": "5fqivXmcPejBQuG4A1CG3sBYucrzqNc37Swm6bX8KSeJfqHVuLSPWwVnJDexgFcyDjEkJW2qZ1CB7BMUSydDcQnE",
  "key30": "3uQK9hoiEGwvKjtmqx8AvMPEhXfrorjf3KgsaBGLvDZv1ecJhnBXj7Xz3WHQgdZaCcZtg3u1RkvzeLF3SCpGQTRk",
  "key31": "2HY3GcYoWjW4AiNXy8ViwF73LRrToFN7FE9M8UksvArmSiNgvazVY4FBem7kdEDQsnoBupUSYHq6xogq5bVZDxc4",
  "key32": "3DRue5NuoduoG3FdsrsGPVqwMYhmTbqqeCAfw7dujK9jayGGw69Gph6xYGmPuAGB2F6APbDZHP7218Hafp65usWY",
  "key33": "4jF7iF2CypjYfCuaefkcHhDq5kmDBFqgbtfM1rjoRscjKuBomH7nhpSoeXBqpFEuTFX2Q3qmyRzN7aWoKh4eMmPa",
  "key34": "5zTJRexCegPuY2SkFmbmkEtJyYZfU3Xpx6RMMGh7YVGkwNqcSRMnZrLy7GoVxDHKaZViE2KyknHc9kjRA23y5P3b",
  "key35": "3tFpEiSeJdTzBLKwcd1i5aReKHVkfp55ymduUavHHAeg6ZRgtcZYPurtAPWYLfsD6NW5GboMmFoYpZ85Pea6DDi1",
  "key36": "2nb6pxRkgGx44uac3adDPnkMhe3S731V84xCwXfBPYwBePPuCF5psSE5Mntr4sJ1Vq2ytSVPFZi1YeYYqF8ZMDs4",
  "key37": "4MTyuHZ4X7cMQDFrhwaV2bQkJp1uLzq2P9gM6Gh1DBB51n8aw9E28poDSZXx7zQ79xW8dc8fzbVVR9eHqsXd74ZP",
  "key38": "3aijqn511Qp85UA7qKzUGDURW3xJe4eBKzD1VZpkq3Cp5UbkciT2VDzt7QRsvFBdAtuVoHeyjgMvQoZyvUx28s1X",
  "key39": "34DsC33sBrmKbKHEQkXw6Pe8WHHYVuUwQVYRnqPBHECBkqxZbi5wotEmYfAEPFKJZ8wMCUWoTZML9Zqj87kxDGBe",
  "key40": "46CpjpPakfmuGJuSj7EetN7ipjiCzF5vWtYobLNoq7MtBmiu7j8mr67tUpJXcPkqAJT4QbRcqCJXGMXNdPFB49k6",
  "key41": "5xSAA2s15gMu4WBKYL6xCvYuBF2p7uRLdvzhVL4zisbz3DWrfd1qzuvWN3gz5dEMLWfarswYs6btmJYraw8Z7utJ",
  "key42": "3gF7e99hgdKCukDmfeVtd8BdcrovkWWCmcPywfRrXHUQ627SzYnFXPeSzVqcTAebzF3MqFseGxLcX1y8ntHcq957",
  "key43": "4UKMTMZszjZoXfqTSfBRpFwMV9Lgmjkqzep7kyNoMTUeX7UPuh9teqP9DkyQ5mah9pwVPHrvxADyJA5hG6kUyfAs",
  "key44": "3F1aBjMUqvCZzZVGDyUZ3zzTSPsXVuhopWBsEQ4Jqc7VGBRv7nMU9t12KZZVCnAcyH1ewC2PFWerk1fXcobcERzY"
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
