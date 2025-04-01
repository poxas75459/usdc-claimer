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
    "QdRBt8pzq29THXtqxi4BTHsFGsCmSm3f1vWSyvVQ7L1NX1P3karPW4AiBcBvD6gD2DDArxKzbo8gDHiL2258Gqw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "j3eP7AUSL88XQmkAfgmeZSmsvAqvEkUw827Cxr8t71SvhnTuWYBVYwab1fkDLNQVQEWq6AtEE1xckFBJkaw4Kjf",
  "key1": "2zpbnftvWzLU8oGKZhUn8UmyCe7eH9uLYf1oLPXZz1j8c6c7VU8dge2UaJux8jXCPaqRexJ5p34BJ89qvRq3UPBS",
  "key2": "2RgKYKc3SRiZWUWz4fPVUV9Fz8oGMHGqs2nbpwhXGvgwmADkLXs2DiPqimV5CJcwsqp68XzRVyTxfpfydFnWWWVo",
  "key3": "3NnbXGzNiLfRZRWpPz1pbTrR7DseFWifJLo4M3ZC15fvasZ9CkGw12SXpbCTs94K9ZQhUj3V89Z9zaRUj5u2cG1o",
  "key4": "2m339DGgyeUDjoDPB85b7qVE8suTbc2QxQfcJax8k6HsPmC8zKFFpvYi46pJtF5cnNuF8Bz8Tyz2rW26sLnrgS4S",
  "key5": "BPUrEhxSQSGQqrpKEjb58yNBgw38aLASNS9uJRzYK1dXAPZM7UXLQHKXFwi1U4x9dLkvwo8irMRSRR2hmcvhKRi",
  "key6": "7eM956S7ujLDjkzPmnHeXM8Dk5mFvAwLBNnUfqdNhTc5iHyArPn3GNakRGkEbF25QBX7ZmtErBydodBj22Kj5E5",
  "key7": "2mjmUdwmjPDoidYbCMPaxnQ49CmyfDM7DrBMhoJBLhQrqACDYTQtuFRU33N5Lcuyfq4pSCCD5kStrJVDkYhsh8UU",
  "key8": "3457h4HbdcYA6dSwuJSgNSeZoerb2DPYGivWyj8Ef4kfUyqk56TBRkNbCK62DZpiG6DuG4PxZZnCs9dXrA735eth",
  "key9": "666yfeW4VK1h6gt5QGpHsdmKv6ijQpgqFYE8sFF6aGEm4fnWEfhqFzCXiuZZa8UM6RYSkBMuWPrWdcb6AtZifyd6",
  "key10": "5P7Zdv828FSoTV1chCKeaUzztHaBiVQxZ5N9kfzjwzkHXfnNKRN6YK7rAEMAnatSQmYWBKzZU27oPYDWZuDXTy1M",
  "key11": "42RYXD4JB8XVx4EE7xoNUNCNKTPyDRFBpMASGHVrG64wgd7AvQeLwmPAnPqWqa76mBj8D8EU6SFLkgKQvg3ktP2b",
  "key12": "Qmpe7vZqkTyHZLGmaJtHxVk2kUjHX7Nj2EmDj1vsM7P7UP5m7QnLdTA14UBUceVsiTmwX5k2Cx9kcGMoia1mkPJ",
  "key13": "4WjC4KZGp1P1Yk2ehBFDfvXe6tRjc1VkLVX8sNedkPP7VUCX1aqZBjDBwY1QuiAhq5e5MPggbN35YVckk9wRCdKt",
  "key14": "4GZ984VMDgnj6uaywqs7SdPzzUVEmhWoV2juReeLrpu6UoyADSdmJjxFA9r6ALTrmmHbQqwjpUawLvN9uyk6o6dy",
  "key15": "58GfnT9apMGzdHjEAZikQeepgt2GGrPs2dQvDUzgYiByxaX4y1e5WX9SnztfCUkf435yNHRsyoPvGKjjwVWMDnF2",
  "key16": "2JDpnFrjh2i5bjSuvdHki8Eoa2JcdPALwTdsEcEGS7iYBPF81At35yvEnQ2Zyu3Wo7VhWdmJU6t9ETHqBzehcb1F",
  "key17": "oKcEdkT66MoPsthoqnuU7bVRrYzyeyLJb4gGb5ahSTNBhTUe3sn3fft48oszuMCHxHe4rFp4DtcdxH3hQntcork",
  "key18": "4wdHBSFiKvGyiEpbTtMi1FrX67i64fQFtJjbQCaTmdbaWkhDmK1rCNAo6k8DbkG2VR2C6wcwL8MnRLa6sMqAnDYb",
  "key19": "3crVUy9FBt3Rc6M8XhdpR8HsPqRBcG61H8xHVMdhHFWjMCibuL4RnWNvRjzdfE8gadpstTTV6HHAPLaEkJebjt1q",
  "key20": "4j4BwuiUQ2giuWz3dd3iY6KKaB4xis9NLm9Vm1jAJSncwt6BD2tgKWY3Myi2vwYJEJ6Qt7bVSDohLYpJf2qy7GRf",
  "key21": "3SrHocaemxjaQ2XJ6hdRQiE7iYwVg4D1VA48Vaog8THfDf5HtDQjUwtj3eXcHtMMyHk9cBHdeZwCd1AjRSjCikDx",
  "key22": "3iBqiVUBzsVaassMKwQJ53gZWGK6U7oiBWf8BHZAaoe3EHg7EycBQF3aYFzpAKz5seDMGfkAjNxcaXLhnG8xkqzm",
  "key23": "3TP9pWrpEuEHZ32fW9NhsUd4qqwZhZveszPi4tYwP98xcFRQDRFMCqDRDNjacGihW8vQooV5XYhv44xvYQC74NL9",
  "key24": "h26EoyFnXG3KuYGCyoBvoQ8w7WmuAh1iKyirnqManNFzzcx8s2Ax9Q9mL9RVJpzPiswzDtq3s3xvud9dbG7dukA",
  "key25": "5RZAaALVTMw76Pp5pjnzaEvvHB8Pn4tJRd1AUvs99LsNoTWQjbjVXaMotj4vCEJu5jrF3VKTyDUJ75gFoLhqqu2Y",
  "key26": "2iXjfiL4dCTQeF2gijhzzggwJ2ew2EgVRidRCyPUQjaunj2fYduK17Zq9LyCDhK2HzbHUhmEmNgobieHEVFDs6Q4",
  "key27": "2Jezm1A9xUgY4JybRn46QghtoiEGCNQ3RzZxXDEQ7wFQ8HTLAY7NBNLd23cq8aLkFyZSku8hnDsukMT1bN6U5bmc",
  "key28": "5sthMNpW5c9UKN1RV2R2T1rTavFpiwaciJkTs4Er9nDJUGySDJGYLA7Byx6aBdNXx9BwzsgpypuyyTptXtMvu71w",
  "key29": "35fzBjybmspv9QfLZQ5zfE7odcVLHhVWLt1vWmcJiHvHRrAhXK5NsdAVARTKiYYKzhr4xo642ohL4wsCA26wjJAN",
  "key30": "4ZhghLPo7bFwcSmUwveYmrXigkpBMDLFLLpm3n4ovqBNsna8DeYPpHS2qVsXrybcDrm8TU6CYyvih5K2szovHC2w",
  "key31": "2XdGDeDd3FkfLYAhEKJcfUM7248CLqCUpmTiPSwpJFtHZwRgumKXZkfdhrXtRYGMap8XfJrSTEE8k1CYku1KqHeD",
  "key32": "2no6AZ2GDVJCHAwFKPL7ziZMbHbCTjBdb7rf7LXztTLJDH3tXzTk5AbUBuBWnFga63c6epX1BLax6S5e3oCVaroJ",
  "key33": "3eEsHj99fiqEEc6RrKakQPpDQmUxtsGpvNagAWZjtRdAniPXXecqp84aztLMon92KjBk2dxseegmLdLvoaUCeajj",
  "key34": "5JLAkQsANqxdBHiq3aMvdaSuPpVKikUCvFfXjpKgXh27dMvVwiKuVWJuiVP3SCqAXm73BA6pWvuJA4dipnY8mUY",
  "key35": "4ixRwcDsp8VwqMY3HnpQwSzCkAxDnThAdVkv4sXUVr9iaHby9jtfN175RWjar85VtmYDmCwPATPvS7oDXzBcykKX",
  "key36": "2tjPANJ8tZPQX2EfpPjx2pK5EFUk7iDzDpA3RFeQot8mmLKmHic3ecqsrbnendsqy7qNZfLLKk2BVuLoAvAQtyq3",
  "key37": "2bad1E4wuButFLNspYuUwEZke3yroXmCmxJxYqCMtSnNivo3gTEQdETMb567cKqHM3wQFyidn9BXPyNg7n6T7F26"
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
