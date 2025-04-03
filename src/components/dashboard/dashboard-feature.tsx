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
    "4muHx7jkZV2HddLMcHsDHBTSDhFMxk1gyWaj9hANHSLet47F5P5Ht6gvEQ1ve3saTSmgqLoSDHSU74CCbKhkUsUm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "25jKo1Mod46ya78JRxvKpoiJZRkGMcKrJNzhngMk1T9ojzy4C1Dv18v91KdSvai4KTnZszqt6QSDYZ6CZjkf8eAw",
  "key1": "4Um4BDHTNyn113UZGNtVGfyvgYiXTw9K4xRYTSiuAzKmXZE6U6yMxjNDqCoTvh7Lzw2ss7zx5LFGo1UToE3dm7So",
  "key2": "5JARoXHf9ygWqJuLEyx2fxinULcDVU39QodCViX5BHeSgPLi878JP4VH7Ni5sjwazarWbTrsaazmXnn5gdWgwMci",
  "key3": "4mUdoF7rHECpN9CoTrsQ9HerjnZRfcposZnQeftQMKMXiuZPmNa53H1PK48NvMkcBWHVKgN7xR3T5YsBVm1yyuPc",
  "key4": "5cHUmeJ51beyoWsGT4RMxaZsKRT3HZZAZW7977SCQSdz3XggMmUvbtch5PwL8hZyg1x7JVbC996cRMnsXMYraJMq",
  "key5": "2MQ6U8BqghRnXmx2ry7tZ6jhi8wd1G7gQ31p2EHBZdtQyUaX1hLHNAPP1DhXnFtuCGou1yiHgWP8AN3x7wuoQS43",
  "key6": "3KryHr4GJqj3KiZyVgdzKBMp3szoQg54xBPUFUDnNmsujdfQmCS2DjPGP3fuyp4PG9XQY7ooko2zNJWNKcUmBxUq",
  "key7": "4hKL3kFSYfjBP714KNcabALcgSMdSxiMCTFeRjJCXdnd11ki4McND6H3JLTzMM2rq4u3YH4ZUwHWnjU9G9v53W6x",
  "key8": "3nn63odzZbgkL1hPLw5hBMQK9eV7w5EPLj5XHzsbSjVv9wz3eZHtsHRDimwMkmyDJcgxmLcw5T2CTGat6nGK6MND",
  "key9": "2vVUk4mUaxnJUG12NvRF4s9qipowCmyMvDdw9iVfeapei7jLmmcvETz5tTyXqKU8LciMiYduV5zC3XBSnxJbn8wi",
  "key10": "3DrbN5gbYC7thT1F6iWABVDkheaG2MGPe8yVPuHbjXq4yB78TPNRjvnSoHxqvoBA481M3dQUvd4HPJpTr8YK5hbn",
  "key11": "58LxuFZiasv1vpusLbodv9LGc6CKftHHLmsx3c31MMUs2Uo9bFegXTr6aXsEd1FPScwnDyzDHGwtcFhvmoTc5MJW",
  "key12": "677hAv1KrCJJCRbbTaZtq6jxh53sVcidHjHZphPpRJxfyG8Mgeh3RqW3mZfXHkEW9p6zC62X9rZVqDCmQ7UtAvt7",
  "key13": "nqVtabsPZw65jRSAoL2HFJ6AqGZ643sKTj67rEtev1UugY1Sqx1dwJKUomNhrGrHErhHH2gh2nSiToRcUvADMcS",
  "key14": "4diCp6CmiQFWyw5FGk488MuRcmEG7CzYGpC95RNkTE8SJFiWSeLqt4pLLvGqyJBBUvo2ruM8GxV9jWMxzJpPBzn4",
  "key15": "4qjXCaxnntBQPoxXDk2rmGjbDJdRtnds9iptnucRhsYwC9NCYwfW7c76a6E6gVtJBQR8ujLcoTFzGqUCxwUYbbRq",
  "key16": "4LGnXK7d4RpVixEcS3U7mGzmhZEz1EYojL363m6BYugLYo5iEGrYzkfJbvhv962EEneoCbH5qR6xCjQmv5sK9wub",
  "key17": "43mSkGyKmbwEJTeRFLVQP6n6gwXigtMaeJ9art3w3HEJ8QRbU1CDweHg9gC1JHT9mQmTBgpAuGAUFP7Ju2fJnjtu",
  "key18": "4dHenKKz1KTVnWffEGtoQUcWVATUhRcWHepESkZMcEnb5pQXvBszthExp8UNx6dzc1MsZBtkXZq7mVDBCgmQhGHu",
  "key19": "21E1uf8M9VEkRMsJHzL2v94cAVmcrJJV4ZXC2EroXCUp9gWybAKRw7wXqvXaVW2pQmJ1gpcLrWFTJKmbhxKD69Xn",
  "key20": "5MEpekmdhfSP9xoceHoBhWKTDMmBsDPQJruxFXoEsLajfww6rp1PiWLJf6ZbfdRMpZcY6gUX2E2ea8ifSD2XcPmy",
  "key21": "ttdRC4q7vUY8nBpPAWMqNRqrgRMkdjUtfttj7Rw84aHiLw2vPhXBBL1KP91Pb4TpXTbePwFugUV95r6CQCA3PMD",
  "key22": "4MyWqmUp7wkZCeHHj4hFSBJS42ZDzuGnvxToTkQaChCxj4bra7djWyUzfo2irsxFbLGiLLFXyrZ4KHggA5xS74LQ",
  "key23": "tB1F1tS4176h3GB4BRn1QDuTJ7Y8bj55bQygKt1aszHAE4sE6aef7pGQ3ziWEYWwVUGKRePVE33hHwSU4CfaNPh",
  "key24": "Bwr3BFHmBLUppRXJeb6nCwt8zYtJydo6zccrdpFcScb4EWWqF2f1GG2hodpJbLUybkQJcp47wYEUWSDdUpFj9dk",
  "key25": "VQ1iFZRnKvyicPW9nsjU29DvK9MeJruQeE9P46kPVjrAS2HCdiQJTQwkTsjgJaSWaX2U4vpFx5ikxGboM7AekS2",
  "key26": "2MyESWcHZ1NFgctPt5qMTbxrfji8SoFjmtEohYyziF22gdkjADXpE2cGJUakstPNJCQSSfw4nPnHFEFsYzX3bV8J",
  "key27": "67Ko36GAQPWsT7yMwwksB3ro2FbjtVH9YfAgvnZccvnFtNYvkp3k2RvB2CJeoRj1e8XVVZHqafk3Qcdz469xZS2J",
  "key28": "4h4ppNWr436pdLbAatRgnL5d2U3tyFMCPHG533ksnjPwWFpknnj3Cbwwini4MBg5XH7kAbkvN189FeZ1okFc7PEU",
  "key29": "2ShJiUXLMjz1asY1z45nkQnTXCoFqKbZ1ipbSZXqnV8hQAEC4vdDLjGTAwmxCdUN3geYjJSuhSohdJT2deuU2dAe",
  "key30": "5S2f43toTL9UtC55N3LeZeeN9Yj45TUG3AfkGv3sZcQK5uUrMNTqzSjENZv3D2AyS9EyFqgNGQK99gtNmVHBKvfj",
  "key31": "pQ3dwNYdKyrWXoecSzd4duhzYtp3DVCZLk7vLCdE1vV1t7Z2HLYAa3bHmorhuS1ZKiFaaU5PCJLLGL3e57bNPha",
  "key32": "7eR2nVscF9KDR5f89CvWwxLfYtA6X1HkGg2XFTgzPpddNxVttj58R8tYWDHgJ1tzzbjKmsjJFVj9qidSoStgUuf",
  "key33": "5vAwAGRSaCQ4a7Y3RdSoGfdqgSTmjkC91743iAhHGBn9zAJ4apsfw6JxV3DitXDPS3JD5GXKWdnKtCTecvpz9s88",
  "key34": "2iCESqEuBL366MfPq3bSrZrAfviMyb6MiTKLpkBuqf7gKYiZeUJrCVEuz835ZcPXCy9u1JDMcdnnG6u4reETXBAG",
  "key35": "41kwDSEr32vXtNgyJyeufVXzC58gXJLp9HvG6pwqTUmqXRxjcbxx3VLyNFNUe87BtbWi3CXp8fZv3HN8ZfosR5uY",
  "key36": "66w3tdUFSNBRY2XoyQi6yynaBprVZKUVqCKwgkE7vgUs52Ky3QieUhB4hPsyAGb1oUaTjdNXyphBpvgPUGhKZ3Kt",
  "key37": "2ZkEzcjnyh3roHJhURS2x57GjUiWovcgUs7DpDqP7qn6JwMBf66e62mr8twKZZ43M4ondkLkNrKU5WnofhQfUC2V",
  "key38": "51VFietHPhssEdP1wcuUNF2iQMsRoq1DPg63L3u9dC4CyLBfmCag7pFv9owPoSLJx9r7oJ9cbRpvuF31j4m48sU3",
  "key39": "XErtZRWGo9jfxLYRdaBWijKqRQke5dvpoJsGp6gg4y3nGAJtUAsxXhipQttVidTPx99qBxCoodDstTJ8w6DYS6S",
  "key40": "5kJQKVo2vVZ7HQ55E6Bigw294ZzN6877zsWBNz6ukKgeCC4DcoULvdAPawmKuCcez9R6vzgmJPzkvYoWUqJaovB7",
  "key41": "2mpD5FdvtqM7kgBXnY9JP5LYGAHqxv45x7JwSa62vwjknsP5LdvyZYNGz3i7rhef27ZR9xQYqoyouLbzGAKF5kx8",
  "key42": "38taQQDcdTCuAUUXz42wAFU7hjSjrPijmFb1Sz87hVSzJcbq6kSZsPZVaE7mE7UZ7E8iVMyTaLUuZw7d6ZymNjkU",
  "key43": "3aeKJqBt2bQZ4ob9wwriwqNfhruFbxpALaeeznztSFAnfHtZnxHxz15WcjXdvkdao2hFF37vn2f2PwmeCzasuDig",
  "key44": "3GnUqaedAJpFzhPnyx3FcVjYDM1nLaiyUzhgy6q81ahY1ixwU22Mt11vDvb3vHyBD6hMMZrRW9V9m4zDcuggXVGj",
  "key45": "3J5red1ZT3AHg7W3BhqiiEfNuUzAb5Co93d3ci3yMnndUZoT3VVbbnDBsmGEjmmGHxDE5egSeVsf8S1powcfMDy5",
  "key46": "4Vdskf2UERQuWXLTfH3aMWv5iEPDSTZpPtLXpuUk6r1qbcWo4tp6UtLir8MpKCKywM1LMK2zvhk96dsNKKCAaMdr",
  "key47": "5sM79F1mL17uTDoRhypB1ofhr7nnadjEPiuHtc8K3RvXyxVzMB7eTMeTNzmDbyMKwgp2J8dEvfATV4ngwHYXVUzJ",
  "key48": "3FrTWMzkd5TFE9bJ898DBX5uopfuTMda2xyuWmmYCWznHucarzKPi2aMVX14ab7XbPuA9eb1Hxo6tSLUujrKJATr"
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
