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
    "2pUHFvuyaQG1rfKCvgcw9J9yLdA6WziHKYjGTDupgBLf1MoiKvVBvsmNBE7K5SiU6qNtMwrsMHtxXPPpVC8Do2yq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4WUcejnVkJ2sjVGk4VanAeAymdQ7Ak3z2Wgtq6oFZqMjRvJ1qUbi2Jc7LM5qsNpFPNoK1KV2RjakfNqtERufLtyh",
  "key1": "4pXM4EKUBwoUyVFCjMM3CoxFMgmBnar1p6Xs6UKcpSVXdHevA2TXayA4JksQ34kveekABQNvyn8DXazyHLcJKcRp",
  "key2": "2VYRsEpoKTRFRkRfxG7wXQzBcCMfxwyAyaSewHxvey3wQgbEr3kxhxH78ZDEkaJpQLZsQaRhN6UeDbw2nELkyPN5",
  "key3": "4b5Dnt5sJ9LSKZQfiMbuwCJoZNh74tY7ggp1e4Y2zfxadhUpACzYk2ZfPRi7oSH7WgkbxYVeZ1EMo3ovBsjbM45x",
  "key4": "5oeTB7DYaHTjjTDfBc5eQGgcC32ij5RiyUWs2QBmcayR2i7TkTCzvu7Lje3fzVem1jrBXtLedYP3e3vkE9thamwU",
  "key5": "4fkDDWS6T5oQi8sWRLF6wwDqbLKwjYxR8chWFDtvaNys3BNvdefEQ2MGTvtxbJi4L6eTYTDAsafUKfairS122vLx",
  "key6": "3EJWePeGRXE9c2ZWddLKxovqfVGzBVqmwBVZWgdv4J3gC2UeZp8c2ss96qWjaPXSAaMPTid7hTf4M9efKX595U6s",
  "key7": "5Wn5ctqmRJYNYJn5y6W82ypiprv8aiYpWkbs6EgRzFN6PRfRTg57gW5KCq8HyTmgu5NSFvjr42zeZR6qCyDjqfBw",
  "key8": "3wxULNf6DqXJLunbdfbuujY1bg98rBtMoUCgZaawuDL1bsQyFUUrDY3B3ZZb94id4rGJuokRDLozcWdFWEqynUgy",
  "key9": "27RdpXgTjV43kuoZEuTfCRnHdWMtGPmEnHm3BovJkDf7YUkM66XMe4Cu3varrz5aHPv4k9BE6iMD5b2YS3XJ5bEF",
  "key10": "2ZeVjzmqEsBvqYzm2iszSeEtfvmSnneaKM79KjjHpmZDLWdFGJW6r16tXoqH27XPMLT7ybBGdBe2TvURVbydD1ko",
  "key11": "3Ue58uECJtjzhiRR3zzo5DZTiJ4Z4VjgrDUfxp6PdQrufk7PdPqi6DoCANeqS7wBaoSt3pKmarosGe3rZSMgbutR",
  "key12": "32n3ZSDfJc47vjhsnNGBoWk7awDJop8JDP8sApxP2T53Zo5URosyu4KJN46LFiNoxM9QY1TrcCpuGeeAH71R1KhU",
  "key13": "5cZe67xTT5x5tEe3Xxcb8zkaYzDrygxJtpAF7u8GguFGuy7RiRE8W36TjjMMhuqL5PC9PaqdNnMf3yPQtRWwe96c",
  "key14": "5eerWXcD2TuPThVQ3vkQA9HYWXNLVKSPM6MAktxnM8QANioTNov73EdvwkYMEZT542PEnPYqfnSevduRVoYrjTss",
  "key15": "5JdSG6ze8VjnsAm1mtqHczFf2EtbLainCqHB92vyRakSZvbGKhZFSv6W23CdmUWHEDyGWt8depCx5BXAvBssdjrn",
  "key16": "3TGQUwvXpx1NwruYa9bSh48diqLrKPzpgaXvqasaUegoiuvrNDFmy531kHiV57VijVbM8jRA77Mq11nRFVfXKsEZ",
  "key17": "TG1iLpHWrtm486xFqbwZWNoWg8xKoAMu8bUQzqT1HbMREWg2pSPyiDYt8ShkUAVkT2yxdBrVFCL6eY9i7XWLgCM",
  "key18": "3H6XM7jMgNP165BcByYS87eFMaYVWmuhQcBB84wgnboWVqRKPMxu7cHFrPoDwRs4orq6bNpBC9TBNhLjiZCMFeCg",
  "key19": "5ZrgYiefWsdAKg3RgRkgZxRnaCcXmsff2h7XNGtFyis6sDkdcdgyZmLetA8H6nFsfDefkQThQGBPtjaUxmNUjUJu",
  "key20": "RhLRDdtiLaQbUU85mXa4DUEG981L3vrFeAhKWQthpvjvqETSPPQywNK9gW588qDRmf3bXC4Z5eyzCQH76h11p29",
  "key21": "4W9NPEHbM76hqZxVTibH7fzNWWhAsVfraqtGszwRHczp8TDAnh386JKoPWm4Uuc2ptBbDfpihLqsmjF2Qh3bRWjp",
  "key22": "UsxfajQ8UFtrchi6ZxdsuqnsESmPzzHj4gehDjbhVCHEGc9g8rd2s3X2d3tKrke1sTsmAq43JJjtc4Bbp34Co63",
  "key23": "5EVmxcLu6RqKYT6HxEywiPahtSFZCsaMtxNEs4CDNVMZFHQjV8thM7q86CNcDueKz7FTUU5bmWX5SYdckwmSfCiY",
  "key24": "3HvkKQBQnBTRqtutazcZYEdLNVpjb7e1geNxxmQ5Tbn91jNSCFz1s5RfbLcRNr7tiRkYAwcX18MtxWKmYfUQ4viZ",
  "key25": "5fbguWbkYap2rxsDpvwVNufG6Li4m1466rmYBXC1A39VHoU1Ey44mPuDmbkpLrnDAxb14pHEz5j4XdF5VkSdTRTo",
  "key26": "575EVakH9gp3ELPArhQTZASMqzgrXDicqZaYPhbfgiUjAiiqAEqWgpVCvZy7g4ss3cBamL8n48NkU3vkMrbvg6me",
  "key27": "5Z6nEf27Y6jvkcWy7s9oZuB5Xa4D8NyHd3qVWxBAMW5D6V6XZGRD3gL176fgwsGnqpr7vVxyMNV2DPAbWVopMkHn",
  "key28": "4j5mAbDDgxgdvMQXqo4Gb1yYmc33e8evziVwTgr2ehkm7ec9kYDGUDfQMZhPkxXfqhBpfSunf3YmQRtWmd2pTmbn",
  "key29": "225etfNKHm5RqFD7ePBQyHoCfHaqQZkZpMrNFjW4Sj2baNPRCbyycCiZmC79hqcxh76KYj4NjALqhme9e7pzfAAC",
  "key30": "3Xr1JN6cqKKXimF9ZHfxRtAM79qvBgg8txJanB9ECmZR54LvzyysKgtgRVmfNZCKoABvfkZZfr9veeQK75BVU72x",
  "key31": "2tGYJQm3cvHms4bu28v7WzWWM8M4TGgYV6wB1a9zksgC95eSy6XZZaHaZPTnq97ueiyc1tCr5zbpQkfTQ96LuFKG",
  "key32": "2QEhr5gEptb4L7HUjD1RrjEB8Cp8WAwasGNC5ht7fpJMspcU54f1a71iapnF8RVL7DsDapXxCiQGmpotHVhuwZYt",
  "key33": "63V5Xab3qcATvP2efLJsmWzkjg3v5vRuqCNbiyk6XEfezpoN3c4rEJHqhc3puUX57T5cD9pMP3pMcEXShKTkByRX",
  "key34": "3np6UGR3yT41spuWjAmWKUAFfScGaNSj9n4ycH153DEUiDmyBSNEp2MFz7eAuitnb9wJvbdPWKnxs9q1kvmwUrhY",
  "key35": "wbYcVree2Qc7ofRvJbq7jPSdijsUdMAksh1urfoA7gAjn9fyZ1nApv6ra6uCCT8rdL9RSjKAdAYmxo59Ydtwz5X"
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
