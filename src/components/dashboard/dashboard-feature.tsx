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
    "4NeRxv4kjhw6zRZ4TTupLNkRVzdrHDr6H8N8eHUvpvuesbYrDKUir5dTegE4aiJBg6np1M2r6yjFqiFmdAT4gRGG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5duGpA9BLVcnAy23hvcT6r6fcWzDUz3w7FvZFqcu6N2VeaDAWtdsrsAkAootEu9rQ7nUsFavw93cvjV8bm6PoMLJ",
  "key1": "ctEqAJY3KwezECCEbPFqmrET8P47yvjn7NwmVMWvTjMMUsQRvZzfRc4KpdFApZe6LcfDwUPgiG3mzutcw3pV8RS",
  "key2": "2vuTG9JN4pjva95rYmmCbKc8BUFcdFanujD4GCG6kDAZgJ7RTrogWKAKNCKkFYC3856kzeoEatiJeAGfrdHwJMZx",
  "key3": "4jJ5c4DH9d9iZvKXbSDsdyDE75MVQWTFjCaD5xY6fZJv1Ljbubs5AHrZXLY2mTnfDdUtWkCT2o8MdpRBzH9tmhKK",
  "key4": "45X3375q983L8w657zW9iq3ng6MuiDyGK1BCFmD8dNkw3Y3P9cRhGfLWtMqvWkvBEzK6kbX2dRzEtC2U1mp9MeH7",
  "key5": "3o5M6p96k6GDwYPoqRxfLtWLM2V8ECcumub8XwShyzorE4k98bKkrAUuGcoyaQLJADTLHWEs3BNuLbGYJ8vHvCaH",
  "key6": "2gZeKhP86Eqtfa7ScD9gXHurFq8chnhA2eVKdBMSB9RkEB5E5aFNVM2G1GXF5xEroaxyzHbHcsw4KUXc9hEoSFdZ",
  "key7": "3F4Su35kAP4dC4NvsvEFwJuE58iWA25SCLzAVYZac3PC6DbV9P7VtK5Ex7EszbLQr8yQ4jRN2fiCowhh2kmNUojP",
  "key8": "2FF9Em1gYxwPGgpxjpiDs49SpiPfks8oD1VGSrpQEVwM3EVifA3Fe5ag346xUQYmfsyVLoTntUBuNgR75Edr2Bfb",
  "key9": "5fERLdbirjbj3kEftmsb35dpSnqcsbb3MCWF6gCQNLKJJMpu99cGVrSkGN6cDhDM9D512gAbD3nNsegb8hU5LCfk",
  "key10": "4uvdLZ6FhrpbKfkotgQsHPd6hJQhxyD9NuSeudMzRbqpmM7x9vDVFWbjFfiou2wkq9vAWG4RmLXNYQUQSusK29CP",
  "key11": "3cdnTLVKP5VNvnBujrHoSumkcZ7ivdErWq87kdY26Bh8HQCrL7vrJ6374ge6MnYtjchCYmHvAUyF93BKAP7JKbX",
  "key12": "9skDitbJmWwCqySDdD6PwEQMW1iM1CNcKeyZVebhRWuaBCzqeF9RiBdeJP5nnyARwNzoipQc5M1u6j7e78hmfgp",
  "key13": "Znqhuz76CgDuhNBPiRHPczRwsSza3XXy7cxfQcyFa4bQ7BMfWmQ9ahgYnm5mkVfWaVMPcntvwmFR1FkmGAi1sGv",
  "key14": "32JHmAuvKhNS9FSvKpaNMwmMJX32zySVtWqndqTPfft5TXcaZAUCz9gTTPE8gfxdnwpu1vLsjXFiutLNu3zUEd35",
  "key15": "33GPznL3aYF1RnMpqWUiyZ89RyoN3JG8vJcfigUgx1hxBNfjTykWVJSyJK4NeAR8po18YEnqXtzFAbFkA1nxJ8zC",
  "key16": "5Xc64hTnam3gDau91VM3uwNUVQKX3Tj8GaRqWmzzXZ241NydERmDARNH3e5ybzhHB1QUxTQ6GL5Hjx4H4NyGWcFs",
  "key17": "2asrsC6nHhUjSAErS4kLPeetwHBYWkcpSJ2qmAEFuck2FQxdBsTsJbqGHZ5oto6ng7NZrHcyfFsd8u8vkwgShBgM",
  "key18": "2Uf6AGMDNrFBgbqsfc3WkGzQe8wCeCe8CNVL3uUPu8e66zSSncXP8qwTVoUFVGsRTjf6yEyeHfXze1jXUT9b1hUn",
  "key19": "QHmj5PHgiSPhV1BYbUZodVcXC9ZkuHiugxey2Agj1ikvqxNEDpc1uP4K53qpBVwTYeX9KRMPQdCdNB9CP285NZG",
  "key20": "4q6ur7xSYqfkhfxYaF6sLgXmd8NEYAnACq6w4t4xDtkEpjwUQHTyzSGYUL1Tt5W891uyRRLJDULT2Cqd6Yxm76uc",
  "key21": "npepkEu5dRz781aA6d5GYtDsfXRUtceQofd2gG8d3MoU4TaGHLmnv2xw1PVSwahGBPnHKpJAc7ovepeeCcjb9PZ",
  "key22": "4sSz9XKtCzV1fNs9cZWdMj7BEy6tnbUyTNgZFrRRra4R1u4V7DfbAMoLvKFTtmjzRSi9sk5y6eMHZFP7LKQooVAw",
  "key23": "AJMDK1QbVyJvdREaQg1HUXzAsLNfscCifPbuCHvXMgyihjRetKik8jB3rQjpYixnw9LphaVDBBYqBc659rP1AjS",
  "key24": "SUHETkG7MiNLoaxBv6ESFhcGR7cU6FV3DWvdBTm4VQt5oBUchhR8ocex3KuevGA9MFwjw1Me4KUVtjFVkExXiGN",
  "key25": "5BUfu5JkrVAeCV5kEJWcFb5SR7wNv4fE9bT6MiQ533tbrP4PzUVoJ8CYDrp8pxeqnk7cBd82zEWBGa9gisy1gBDg",
  "key26": "5TKAQp9nsBAFvhqnaxV8J5CDjdMJWkrfMW5uAgeiMC4RPDQ9i6F2sHvcfwSXgU5EisyejMJFx8s52s57Bxwfbzof",
  "key27": "k6P7y9an9gapZ9R86vrs2j9ZvBLYai5iSiw1x1L6846AB9BnceLiYAX5nH7Cy1oqMYbKCfFt3KX88CDtthXZ717",
  "key28": "rP5yCUEsiNe5zEZNYCe8tAkoFRKggEQ34A37k8Fbft8BiXETNcfeRgXqL6hN1LMEiMSiUexWNomNNpkyxr8xtnT",
  "key29": "36dcwLcgJDkY4CexTYZsVS9ygoJynACZ5VD1K5wwVFjruTuTLRCXBD7nMek3tMCfQ37LzPTTmEKAqNHwGHdj3S2z",
  "key30": "udwHaQKSeTjrCWWiqsKFqy923YBNB7GPBsYCNj7Yf4RGg8AhM9cNvx6jbs3au8KeJGRJ1SwunaShs6EhvXg1AEQ",
  "key31": "31Jexx6fddfnT51AMGjsBfENWvxZymfNBraNE3rbMHWbB2Aje6Nm4mWV9gjdgXUSC3YQYnp17QPCbSbRvJvLHwNV",
  "key32": "3tcaCvtpqKBvoYFCAVtEQjXdg6x38VdWRaJfkP57Y9aDAbSv2g8UTFMopigDeufBt1t6hPeF3pmnR8jaXkGDyRcd",
  "key33": "3rC98j8SA91GCwitqdYfT9QLVK9HdUMsWdoDam6LXd9WQqGhoNw2DHoXct3L6aw421AGYy9mq6B2wrCxwwF1rSGR",
  "key34": "4Ta7a6nVfbA1nfddowhTPpEtjA88amdpBQtm4DwsPvEeM7gWec8nbQ6cRVZj6ZjiR2eAwqNrn77QjZkUvnSG599c",
  "key35": "ThKTvAysbBoERinpzBAMmQm4PG67tEu4qcn8H9kYVSe2uVropKgsE2GyfJ3gE4kyxYHUdA5DX8DXHYc4GsRApRN",
  "key36": "3b2LA4qHTGM8kqzDMCLju8Ad5xkZnsiR8YSD3DNVcG8AdXGLtCe4J2AdYWAoGmL49PwQATi4mbCdBEaQSHbJVwf5",
  "key37": "3Ws8dXdAMA4XYnAw2XL2uA9pE6ygcK5oKsR4TGatMAWeqjrkXVbZcK2wRVqfLfRCUYGAENBASJxmxq56LwHybn88",
  "key38": "5p8mPsDRugPgGC4eCcvRqDHWq6sQFzf1uovy7enMk7oVBPRiNGfzojPSwWnPUSMxDcSGmvDWot4QPgookEmTLagh",
  "key39": "4wEVz7wWEgNVfhwsiRfat3DNwWDxKP57pGCYdfdznvLUyD72pTEn71Yfe7vRSxGo5t77tHeye6qkxf8GVLpuRLYY",
  "key40": "5i5bu6wjNuYSkj9nyp7ADsNb76B3mk6CxRMts6PXBJjampXGnzAcZiPzWK1FABcPDZqCXT6bPCZqmfkuPpYAVQyH",
  "key41": "34pEZFhPU8Vwtt8b4F6FbojtPQjouZ7ZbKhD61DNgoMgyR6nSaUqGCjXoynCYXJbG7b9TV5TfgbbqBWJNPxc111v",
  "key42": "pSTBLvwtEtXb8ewYAXgDJwGZe2ufAJ2xHiw5nkAyYGHqHVA213uPR2HL9pfggd6KSmpyMdEwC9EpwhVLncLbA1Z"
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
