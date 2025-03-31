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
    "39WBWbJRaGCnZJqkXKKZbJvEbrEPTm8ApoADsYEVWRG9WQAeobrWmHv93F3YRzXoZXJU6VBceFAxMSXFGCJbrbx8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5USrWzNSwCDmZ1qu6VmU8T3p3Nrur7a2GidBYbZvCBjjYLwvH3wniBrsmyegd2YHY9AbdCunYaLoPuPrzMJRNi8f",
  "key1": "5dPDoY5YtHnDZSFnPr7AzZcXd7vTm1c4R2LmWb8E9YsG96Rsg1pV67Gp9SZsqZcU5qSN7Bu6K8PHhUzUG4zn4APP",
  "key2": "8xz3SYrvWkHMMZ9fvufhLpQxrPNwuFiZAasxcgHWDbXanGgEDM3qqDLgHLkzKzvLdbA1guhzFgXP76zdh1Nmg4M",
  "key3": "3r9AQqsBBPkRMe6YDrVFcApvym7iyuvpcHKKr7HJ3AbTfjXFg5PvjG68VhstEWaacYfgeTH8BSvJQXRMxTKMttoZ",
  "key4": "X9BHNYtsMcXYUFJkstGKQpFYYBfUSsYiVeaQdN7w9USyhXcaDUvwamTEi2Tsdzgaf1zdtVmTDSXupKe4yixpoSL",
  "key5": "4rMpsXRVn4VVPXpCBAmgctN8M4N9knwyhW6qoyHWVjXHxcWjNS9gwuzarta8QmvjUiEdzUGjzxwF9N92X2E8Ys2L",
  "key6": "3fyEoyVY39s3HyPYUqe3hdtZKcfQatXwEwXMmu5pGbexcsCcvWrtSsFPFAjaiDUHdCLz11wRhwc4sZoGdPkQBwfd",
  "key7": "3K1td3u41gAxL8GrEhaQpbpkL5rais1WXdcvBXLrvjLvCEp4enQMWFX9kWnqk8QsCvzzNvEXA9UWfMqHNo9Ui8Kp",
  "key8": "kY3qQ99HBR6qNJA1rog7iS924KDMDqrBSKz7JrnY1Ro8vJm2Taga7SEaLznkMtzeSqujP8DbpmczPCGuXvsvFch",
  "key9": "3mNhza3jPgqGQFLJrqPg8KfhLP2MYSLMFs2VTea7HZpviyCvmveYB8JErnCukiV97SDC2sKAEiGhFg3CTbdfsmwa",
  "key10": "D6k543zP8ENRaASnzPiUaY39MmjYBqCmbjyPE3zLtRKCUDkfnqCBWXcXAh3fmuc1JutmQ8K3m9gheFtpXPTjhnr",
  "key11": "37eg7KfxP711Ke9nEXzeh89oseUW1TCzDmWtzZywpSTbEwVGxW2AgTkUBbNbHD2n7MMw1RqyH98GnbTV35R7GVBk",
  "key12": "398AjahbkTs9b6woN8wkkcHNSPwEyVfConQGr9GH1qaXregdmf2b2enXqQq191yXQZYRt7XgyKx9UHDZAghu7rgV",
  "key13": "PkSr8WMZFZCYirVBLqEK17gy2d6iTiqw4ZaBGiJMyEYSnf1bTKZEhX5rKZyDGofppwDPokvoQqgT3RdEcRih3ma",
  "key14": "2cELMd2iKhjAXBuhRn9M1ryGdmhWHGU2jdkUhYN2tCidFmUyunXnRiTriAAbTev1tLB1eyPV9pbn6BeNHrME2uiw",
  "key15": "5zqkGSUdCnN8Ez7wgy7J2kBfprzT39H9wKvHKkhvjuZsbvXNFvq6fdRgwAjvTfbJCa4d1hYrTZBWmTG7Tn1uoRpS",
  "key16": "49LR9xzWR6boweSZUPdy3qSs9mSQYSqBjKNWZc77B2ifwjkUJ8DFFzWUKJBctMVTu2nMLd1nArDBHnqBMRzEWuqJ",
  "key17": "3wBMY7rNc4GScL3Ugw1Uu32HecHeQrqGFYZCAGdGxKiRrJftRu4D3AoEtF5tKYaCFWDBG5JTheUWEaHigboaCzuT",
  "key18": "QBgwCh59dCtweAUZCcascZbjvjUJeXynrCsyH8gxkmgMyMsYVozSsrtq7VeZTZzVKvT9iDb4vRrqFt9NEACkpSY",
  "key19": "2PEEkWAmAtQYgedEVzztqCqYfHohb2roGDgFVrdVSqGTXrhTUw8yKmGHAqpUDo39Yda4iEGye4T1XU9kxsypa9xG",
  "key20": "2maUTwmVJX3GsEXVaw5p9SK4EddvvvGvPn9gKqexTGjHHsUEww9QwyMer9WEfq27ZP6efX5wezroDFqvauLhiNTs",
  "key21": "4W3CYGvFGui7izTagyYvCNx1Yts58NXaKjQGay6V2UPBgVadhsjWQ6sGHTgcrJmu1Wbtsh33scbS5JQnmhXnoWhu",
  "key22": "5tAVTxs964gSGXQiH1ZpTF4nn6tsWEKXFqgpVtYXwkHsXpBc1EYtHLNE6cFDs97fwPdtTnDe88gTT6Cuz4vSGgdh",
  "key23": "39kjkotcakKv2b9f4sZzZiRXyZtFqdTCJAP94bvpZR4qkTAGDdUPyep9k1qszHnsfV9GZQN81zNZjXPoi7vUjqBY",
  "key24": "axiRAzUY8G5YJh63br5PcApWrfPkF4PdnRs7ZU1mjmuYbFgS3fVS91NQDqj5DdPEyna4WD7BURydAWvg83hm3cS",
  "key25": "391rKsDR4piVGNP4RwBWGTnfN1zhSz3xFXgrbFmo7tYVEpcbNAGHNH2V2mQsoSCbqgtQGwUfy9gbZXPkqU4BvifG",
  "key26": "4NokNnTBYhLANosVxTLPxTDWY5VUAiQKVXN1WCJCfBNWMmXtj7doQqL2mQ98DrB9cdVaRbWrT52BtypXqDpNSY5d",
  "key27": "EioVhsT6FZgQBZ6AzUdp5H8wKeF4fxgLfCrLrK4afQCDZACnF6NpbNLLb7xV7crCovhCnSU76MK1viRXcqNM4aP",
  "key28": "4nwrMUaiLLXGuANM5TH2KqT3Ty9BoKxUkh3Whv5MKgZzoh38r9bS2apAHkZU1Sgj1gPtYFEQC3AYPHTpboj6DPpq",
  "key29": "48ypHcUQZdGWV7mec8VRKy4F6C54kbrv1Vj9uSdtgtHn7dFwUWuSVVxof8qFktjNiQTJWgAdpEPHMk75LhMeHVz3",
  "key30": "4z3CvrWRHVWtoivJoRwjR8VtdmjdzFTJG4e2HNN9Kg1L42LUp5QC7KRM6uyMYkMR2iEBmFKrPFJZ8gL74Xx9mNxv",
  "key31": "4sHSBsc6scT3tgjewQowMNN9hG5UspeTqC7PR4JZCxk2FCNG1DNoWNNuJtmxRnpjLmH9g5p2TnuBg2A5Hk8dSEV3",
  "key32": "U52qFy6Y23Sxvg7UKVcpGAMsYK5qfTEQctsKn1a3C8D4d5v2iiu4tiuGvi3mzMqcg9x1qhk5W3NsaXNeVsAC1NA",
  "key33": "5ia4xXEsprH1RHx5Z9Mm1CdH6dd1gxLW1T4WsvKXCexMXLTuS7ibWbFNXinVNaPcYnbs3e1vmzB9SeKKLVPMkwoS",
  "key34": "5opz6TB291wWYhUgYvopMqoHLtsuxdyBoAH7DS15r7y3eSdGow9hn7zGkFoS6D91g2DdbNHadW23xqw6H5vHEhqv",
  "key35": "sTwGiBJngGnt8VaxAVs8rzs4rjea48RaMfsfcbYy8PbMmQPBtqozsBwEtUJ9zBorRPJiwBuTDvgVvEPoYQRs9CG",
  "key36": "CnR1526m8ZAGeHxJVeDj8pTmFKvTxsxZKntkL2w66ceNXzAXcKipRULZHATcsSPSgdYYWeNCXRTm3mehXRrKg9G",
  "key37": "LrGvt26BtajvfYZGhryxxvFCFjNHWF3AHhYKNYwLzitJqi9sR2Finxx6J8LPPDZdKxAM8qWXjvbv9uuBC1wAdNS",
  "key38": "4qnUQsZxv9hnGhtHYzre11778WVumahRoQH7kKDvvmYpXg47gKpk8VCgfWncL6DnXD63m2rxwCxjKrK8hq9Gpv4s",
  "key39": "3Xyg6U9pwExr7K93WoujdZpYchWW8XujdduVbiUTfgbn6ZndwM9b4saEE64UwJJTwnk3uNiuBEXTnBFDXrsWRy2u",
  "key40": "5E2AL2gq7tmgTZyYPEcScWsvB9xKAmGiAVx5RA8Rin9DRXdun9LQHPdoAfYAZLbeeQ8yNE3cRceKpLxRLt3iHLAg",
  "key41": "32KGs4n64TJZ9dMpixqWG7YCyrgP6KfGBjjbqyegsoyqquYFYk2xkkGSkHW9TGQm3XfqkAeR6Fob2rq5qQD49NEz",
  "key42": "Z5M3iFeWJ1hk4TJU8hoERAJMSDSt8C4ofwnaVGhWgWdSTaSny5VqyFgCkozToPuZAKw8LLJVy4mecnsYRkeb6ax",
  "key43": "5ggoxncuexnUGCJJcUyJoY5WC2VHHXKogkieq8Z4RjW91QDqugD4SQdamEMi7LeADYQLfzabfkBg1Ws2c3q2Ea7L",
  "key44": "3mNCKfQ5jrhB9JRAe6J4YskRviRjhuo6wePQUhMQmqvhz1rtXqB7UpMwDE5b7tvtxx6NjSk5onPY7wJnKb9rW1UM",
  "key45": "4AJEj5EL41nhHgKzugvKHgnmY8a7hg158oAqGAbNqVQp9Jsq4t6kecGvZbfJXsQcGwbCJyVnvzqDoSUSfRjC5SLb",
  "key46": "4Zhqd412fY3JaFChNF1cdHKG4SN8QQ8HmwjzMSbdpzpXptHA6LzyAPxmJfxVTTgDRNVsisSMB3sP6NV5VBQYucAZ"
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
