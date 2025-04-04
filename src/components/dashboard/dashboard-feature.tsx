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
    "52gdpscUX6nrZm8r21qThBjCFv9Jj5PCEusyCQ6mE5sSc7oR9HqeXZAHYC5M9QEpraqypSmvEi4ygZmuWjYSPeen"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "JkHfFtDuwex3a5AaFbCr8gKXAgNt7KnhoKmTm4XEabRGd9q8sWgF12TXJRCneuGL3Rqxp2uciwp9ztFWPRFFmvG",
  "key1": "3K2XWh5f6NLu2htGLAhpdfSHj4LtEdx3Ax4xpaRi3dASC12zeTatgiw5xxuc8yJ8DkBQeFyKY9kNSDKjSTpYsLSJ",
  "key2": "62Sno4UJVBhB2pt5dgs2eT6x9txkNggHKKKss1eWASwgzTDMGi7gE9mPetcxWduBdEm3AgouhNAEG7fKrGfuaqV8",
  "key3": "2Q7bw7NqePKCEvGF81ieDnQq2WatLnEe7DTjL69zSawZg5uPJbvX7cTYbN4qJ73eK5Jk8vSsGmnuDxr3sbsJN8Qi",
  "key4": "5CzKHgqLCYbsRrPtqd2BSuDMtUf6Pk2WZnHP8cKgsD8K4r4DyaXWP5tb9KbubyFEWsYde7ceDbG1LvNwL9aUb9Z4",
  "key5": "25WzRZDEhUerL6yq68JnP7cU37DLCRXF6XXbVWfJo7x5YooK6zYELtRAS9QV8am2WhVHT2gSczccxrxpe7fCtzXX",
  "key6": "3hbyHcjvsz69DHtfA1JbFTchw8x8tGpPSKVUtiYdqaYmQHNDB2JM7n2XaVnHXNK18vexzVW5xuKUWg6oXbm7bSD1",
  "key7": "5YkNaWp7Tcinwy6kwx1FLRJnYoveHSPxSKoMDwC5oQE56EiLvBy4HwPkCt2xgrjyHrDe2w2TAttFThDFQZvam8Ai",
  "key8": "zDuLRSCTeDiyVs2JbZWyQVgBHmHdNuv3Vk15Ve2TMzQEYkdL31sDfL9US4EreUnV2Bf9P18LDKWqw99hKoW4bam",
  "key9": "3xRiTDV68odkH5VgMGQhP8EM3vutLq2mR7Q5Qi2PEWJn5pjBBi8CZJyu9rh8CurjcCL5Zq5N2zYxs2x34QZDKf9N",
  "key10": "62ZeeB7xMWW59WRA6Pw6mt7Jy7ywXHcH7rgQs2XUFJwwiFQh7mAhkzpruBSvp81EFeEzTbC6WQ69vSmbdpEnSx2q",
  "key11": "49cXFZ3H2gtVGYPLXd6ZDbKqtcUkwdQZMFZYS7EzKsdvsNAZqPofjgGaLRMHUPD5iVFSQgnDJH2m9GguSAYc5Gza",
  "key12": "3TEMeni1Qydz5AwG8gD1NA6atsVtXhTjT7aSFVnTw2cSp5kYCp2rFQfSUEksdUNVewgdqcQnXfnp1QNo5Eboagxx",
  "key13": "53Hmcm7975SBv5wWeWVjpwX4B7ai1Qfih53XWrJydSXWkoSif3z7FaVb73WhGVP39wpqs4nWtp9CrGBFvKat54Tu",
  "key14": "5SbeTmL8vxddJ1im2xpcev6npiypBqL37ezqQp8sMbsmuXeoSQhCubYPmNyR82ZsVWKwbUkuM7vmASxz1KyMo5ZR",
  "key15": "4aqtvbZeQcDRPQkhCwfWZwKDmsriAm6zvhfsFTGYhMLYispUBhXpwCGL7Vp73FpvdBMAdnGRtseVHNRj95wSa36N",
  "key16": "5tAeE9QmPpv79YBaUE9pMHVUsgb7DV5CrYAKm68QyCh4ACQvVz1hK8tXTtarMJ3vVWzStKDKxEVAYGmds821g4Qt",
  "key17": "5Rnj3ZjcpnpoXoRsfX2DXD2VPDmUNzNMFYAst8jd62pRtgCZetY3CF4DjC5yrnxxjGPjAgaWigwdAoEdZ3jn4xXP",
  "key18": "4i5rqM6WpMoC2QYmcvbSiLZ8Ser1PSq46kKUv1Lk9TVHfBT4McGYbnkJADFiqhygKFNBwq4m7HPt2qU8w1s5KFf",
  "key19": "2LW2zXXhsGR9mmJHCtaTPt1xhyoaPcqLmLU4BDHA9kDYZ9PnvkauHJCXxzKBuo9tYK5auqXHdeMgvtxkua3MKJDH",
  "key20": "66vxD42PxFC19hLW8E7DVgD1yqqVSQnNSm7Z8Lxuc9TVbxGmaTLEw6iJ5bqhGyvZbghp5u5HiBrcVV3uwsihXYVA",
  "key21": "27hY5CsVGY5ckTM233w2csv3MQksQq65mduQ9W3BXSw2rSgx4229Zb5Ahub9ajJkpUCjp63rvys7TWmG45Gyexrv",
  "key22": "3Z4km4UF1CByqQRvfgrqhYB3GAuUFQ8Pz3bxtWY7PKgWrAat3YcGREo2gLCmUmpaoyen37DUFCcgReyZZYPvXLdz",
  "key23": "UmzL2xSCpGKKjveULVep87GhUB8pnFCahogZWLAGa8JbMn4yESVT9WzgRtWMidhQc4PXWeLZu2XtLhATmwwFCug",
  "key24": "go5NgHMFTK5FaekBKVUUgrp486VAvLAmvYvxa9xFT2ExkkR3FP7qUa659FwELCdDKpqhQ49VafRBP4XPvY6FYmJ",
  "key25": "2C5qkRCg5XneMFCwG2qYC2EWCwUDNyv42UC92PyerjALvkpc37qzTsVtgAgtKKBqcet3Edz2vSnQ24Vr5wXdRL8x",
  "key26": "5Jh71e2H9Lh4sVV9H5vRr2JxYU7LhEvD6PRfMPy5hoE7kmzzQ6wxDCed8vTfHZFB4CRvC518iUxWA3LX5Spujah9",
  "key27": "2jnQRatEn6aZhWZwdPeDX89RMnR9dxamUgKaVXvPpVzMHeS2QxLh1QBCZyAYtpFRE9BNm9SPGoGMzgRqwtdFeUAC",
  "key28": "3rmKvXwkRkLTotKeGyHfQ9jdjuuBWjwTJ5VxiQHsW6G7JcxFiGMU8Gkd5ArkKRuUEGoXZkHWqaxdkDCcQm45aPX8",
  "key29": "35RPm4sdzCZKSYTh2UDJ5Qv7Cb8uRzhZHSUfrMYQ7wNeVjz1rVHW8zYRFbLbbyNKkvP79irYaQgVr9TfjnjEp9Ft",
  "key30": "2DoLuH2aQsU43DAmP8TwaxXy83nn3jaKDTjwtsXCCsKg8M4SB9ZMcxnX7Czu6k56Tc3j5spn7kmnBeD7y1RJgutB",
  "key31": "2GWUDCL8chfB4E1SxdGBfCoSMD2dh89qEvb6uRiopEV4tiP9cHsDd1z6MtMftRGxeRkrVibVsoFWguiJfmVuwqby",
  "key32": "3eF9YWoVqRu5sCCvXAeKcJhrDKDNkWNCWnMTBnxqnheF7SivKStK42ugaxeKNd5H2Uoo8PfQSGxR6WiaCLZ5KjB7",
  "key33": "4naDG9RuLMsknZvfPfrjNiP2CAPmfc3pkFqVVnPzye5DkgmZjvzj3Sq5d4EWFMkWAPSmhzbzN6BJvDurfP68HdpK",
  "key34": "5HmoJroLRyMYZpV9DpSzWZwMTdLPm5GPxq5Udyr5VNzbjXDmjafJKfc9jRkdHzMUcs98QmHvqSv74kZc9QdgU7bt",
  "key35": "2Pbh4vF5cy6iDSRJDEQfYYkfEv5yfVB3XQTcsK5nKEJKHQ7x57dmJDgPhadZ6wNCHKwJZ9cxNCHWSspyjRJf1act",
  "key36": "37MMsBwiB7CxGqp85VfiUsjrVwe75iR5gGGjoBQ69w1N2KkF22ceNpWvPQetKTKG1p6rJaSBsb8GTAbAXof9nW1z",
  "key37": "CRdFMWBFTNfxpDAk8hzqh6qD6VNWkehbpS3FyWWGX6xM5FHqkzaD94yTXpSvJ5KFFroEVVRDaXS4wHkNPhrtqFk",
  "key38": "5maXBkcNLgEMVeE8uCUQn6Y2rJcYc1xSxYZ1GSnkomPK4Y4fmDQTbsksy2pUnKeByJVJ7kUbNwCVfCywngVUKLPo",
  "key39": "4AwHkdbYcrrkknkd1MwrS24yXjkFhFScAdB3bDVpGa4LrMUexer9WHXzZJu79mVuT7xX65E2FkU6azeFjZ7gpCKJ",
  "key40": "4nfZnGhSb8DmtzQfk8r6VPs5ucjXcZiEjXZaA1Djw4m2UD77C5EL7o4mD3YBun95RR9VhuVg92KLA32XShGwiWTT",
  "key41": "3xFoMrczfPMCT2eAyBsL3dca6JkyMMK1ddUDXWN1tfLVmJ4LydpQkJjR4T4XrdSxfqrgSVgdjLVi3ihnCyrgNre7",
  "key42": "64RfAaw6Z1PAzGuV2QSiTFD3QpMrptDvw1qW46mskgebW1YtcEnEbzeGUHrLV5qKjdLNnZoXw4uZhfLyf9SB9cat",
  "key43": "2Jvye2bm1J36vdaGNENXNQcoZ9fiXoPTLukUozghdRbsysfmAe9nfYQAwdFTfWJ8PujZKVqzKZoCXzKRstdCeqKX",
  "key44": "2yRwRJoygHuS2i1LtMddq4VQdM1gf3pGr8FPKUoGmXgJFEJcGamX8SWAVmvxCzRjDyWtLsqqSmfF4GYgtV7F9yFn",
  "key45": "2P1Y78xo529pfXAcMLiWcgAjQEvctYZ5A5wgfe997hqwiNbwj8UCCGZgRuF2k3UzXd8kc6F2mChfpdbg1zMHkFXV",
  "key46": "4VTQXA5zNkNjQtnimks94urYRQJ1hn9ZLGb6HpoJSreL68ZdZQevKCDVwR522Y5dSBWgBAsFw7fVJn1GNwLw1z8u",
  "key47": "4vyapfJ4BpmaZJ52nCnbPGmn64JQhr7jxe21JS5SePpqewJteBnrkRJVFucV8suQwhxazauXZq8XDrsLsjz33n8j"
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
