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
    "57hRoNiwRsZBx8jDpnu6xLVJ32BEaHjtD1yvyW5mZB4Wc3U6vP1vpiX4fh9EWxLfRJoAoTK5qiDKnwdee14LoZBA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "55d5PB86HQdFZSreaGbvp7Jsr4DQiS6tGyxhyZHwZCG5WMNgN5pUht5mLLQGJWRCE1QmKPCMpboFDehfq53CWPFT",
  "key1": "3FfC329MeubpRKrViHSqYngaeb6Ppjz6x9AH2d31byp39LGA8p37fLPxCqYRpzPFgrp3EhKzYXmzGm1F3iebQL1n",
  "key2": "2vRsTdfNuherDXqGf7SpWPjMPzjQJzWnZ6cJnZUHzQozir8AjuozjtHBe9MLWMqbE3XNt7SJyXUGhB39AUUxZxSu",
  "key3": "3FzDm45dDEvecG7oxiKbHqVBeec9LkoCANXWXWKGSDr4ZErWknERb1k5ePrRcAceLwMrPKdADBQJTMsFZuBQuhNb",
  "key4": "58ncQ6XSZGjacYFfqrhKtvCNfdUjPtUyBUbthftTXcZvqPoSZUAYfNo2rRmt5n8YaV276pFj27nUcdVtkbLiEGtD",
  "key5": "pxzdMUimkJz23BcW6LABDDebYroku5H62G5kYQbWt9nqM2Ja88wybVGATyu3L2wZe9FACJcW3PaD6A1Pp4AfpFP",
  "key6": "N9T7PeaTYB1TxYXJxpMhoHskPnJPodMwSDv8KPrwndcvwX9uYP1eoV2bryzBawNsuXVwtDicFcqu98ZVA5b4WQb",
  "key7": "BGAFRarEUzP2xECoQZXLzreAQ6qkqPXPV58PeDoVHRRDR6s5LZsH4QnQ2d1gvage2EdowQ5PPqkuuDtNAMLXdfi",
  "key8": "w5hspQYgtYSkVpFJtkagx3fBFahut5KLshLNpe9rWfpanJ4ZC25YPKwYPBQ2wrtMLP2TQ1B2RrdRYyJHodyMgJg",
  "key9": "5xYhmHjK74rr7Wgzgh5LXC7BJEn36XT2XRhqbTZveMoFfpzhKAN644CCZb75PgVrR7pUcy4HyKjAmseFk2nAsTZu",
  "key10": "HbBYKstjyB1tgus9XT4nLyBdkp4Cpb22ufajcUoGRqFcBZ2n78vVpjET6zTvFaT3kLGgrWf5ka9RUXWiCsBPNvB",
  "key11": "2eGJj5ouCpa5sC6mKPmuyx81BVWo7cR275SL5VBrgEkoYFYJnQX9yLWiiVCMDmEkLg2CZGDi8o6pi2Rha6Q85tSt",
  "key12": "2wN7bLCCavZzph6ahWEooSrA8CWXcubpwv9t9w1m1GRuZSh4p7JBvkNJs7qGocBEd9zWhCZyeZTdEH3horU7SBYW",
  "key13": "3zE9W2K14ax9CVU6fVFaDuAzmc5Mg4jgUWUCPkseCrFQLGMMNgQoxn9AMfCmbGZ4dARwt6crAFdAiN7wt1Q2C65y",
  "key14": "CBpu8JdwRyy64xwGkdttRL55XXYHTJuLe1G5S72DyctsdTXe35wbMBhs57HEkacL4oBLDnUZ9k2Yyxsa5814JcQ",
  "key15": "2TNw9Ec2dQtw3Y2J1NhdH9FDV7T7XBXsPycxTCX5TBLBH3xri4yqbJzeZiLAJkW87M22r6fMY6gJqpkujJXTj53i",
  "key16": "2cq9PgXDnivEAc9CLcHDBGcmwTV4ADsmV7MbMUUNoqPPGNTcF85Fg3VhjyNVXoR57juCKBLDrfbdk2w1MnNYeuJ1",
  "key17": "63ko39JJpLCRWANZe9Sk227An39ZihHMCs6JaD5Z18fXAtqbK9uNfMdMcAf2uWwWp7M8DpDdhr1B8wYRiT6eByDW",
  "key18": "59m9MA5baqvViz7BQ1PcBn3brkEfgisS4qtBgTdZu9yCJ9zsds465qGrbLXfpaxJyvW8pcAfeVzyTw7yN5VhsjzZ",
  "key19": "2yaYAfZUR7QxeeUdKANi1d9ETUY8KnUg13JMcWcCBeEejC8WtU7CJXiTv1QzMNyDwDkzpREFX6hbj8WEhF36j5np",
  "key20": "2PbyxNiLc6aToDwHaWw4NozrP1HwWZW3XpSK4285bLQHmKZfmeyfzQeopk7pQdjz9pL43WcTwzzWosiJSuAeacZY",
  "key21": "5aNkVDfPuPev7urmGiWY7MovmATLuLNYdYDXqY78zXL8jML1LEvowpvUvn4zFuPesujYrXgcRVZYkhYhQYujQMxH",
  "key22": "5tXhWPqTyfinEBWa3oq9bgBdf5tZkSUPJ3RtgpkcJ4hnMeT8pJcRYrufbGDRNuLZBRjoarD6ghEYpzqhLUZA4CAJ",
  "key23": "4p8aG3RS6souBSx6zaTwp8xf9EDo4334imYX6RdvyWLjtNUri8eHMCeZYaVfs1JPwebAgJ6TQYPQkAaZSErg36zw",
  "key24": "4oSMyAEeNmjptG8SBC2sjPP4Uq4BYiZ7RsRkpW8VKKRjy1kBCs6Tj4tL87RPYFmRgc1Y69RbKYWBF9c4GMZsS6wV",
  "key25": "2osfZhefgyQq2Y2aDeUaa9p8kVMu59PfTzojbUNEpTF7DeTozEkStAZwS2WcQsvgv5h3pJHYZDG12CmAXt9dbt1g",
  "key26": "32k2WY8K9NBWMDQeDgh4Wpb5zxrJeW4r1Mzg7NZJzMQG3LqdH6SxhjZBfBraLCwt97au6gAPNkL5y1JpUeZSSomG",
  "key27": "2ch9oKUjgodw1KEKbzCkgcnyTDd2pUev2h9YX3tZfUMLWXnn1U59hpPA7BAbfXws3Eup3SmUUDZj6gvqXTA6Sot8",
  "key28": "3ByAoyuPyWUtLLdZ1xL8TfnxF4EF3jj5JSq7uYCErE7cawxC2T2hDJXoSmCFahHP8QSVV8VLyWbVtHxDEmXgkAFc",
  "key29": "m7soop7Dw3SZEDSv8JSLzUxVfEZe3SPcDEkqE3jsKCN1PVUraLAWG39jVvqxfZR9Ay4tsL4NbZ1eGk4g628CQJ7",
  "key30": "4ZLYzwFr5r9iPoZJC7oK4BCL1Gpv8xa4S5dFxXMVmT6NJHoicNffP74pXHjzQmQiBnY6ztrfkdJLTc5DF3jg7mep",
  "key31": "28sjDvYc3iJPDrfJ6iyhiJq3CdoJBiv3dha2uRbeTPCknRpSmg2QhuohCBD9NgveTwvgnWP5dCakJ9XCLsbBPDrh",
  "key32": "ZPCXqZ89ApYUZWgjGrrAtdt7kQSxxM3U2ALjBXkzb8AevQvXn4ZR69BHGHjhoh4G9kyc8xp321hYVUKdpNwEiLN",
  "key33": "3ahFhPG8geT7j8NjL8EZ9yAXP6gBWkx5J357yDPo97PJKfR5UUhMpyHt7J41hXkpApj1aARirumpeveu1NFRxPxY",
  "key34": "d3jdffPpFQb35M19UULYumZMntFKkccfSF7T7T9JnuSyU7GStV9ALjVhHeAmN5Z6S6yJiJX2fB7NYWqDtAa5drS",
  "key35": "2mfYZMV88VMNzP3JHzV1FaRqtK8P9Rctyw1Fsc8xnQEuXzi9gPUCsEXCeeP9eUs3o6G7L2mEDwBEkeegr613LsdS",
  "key36": "2oHCWXzyZmCkFHmjjxDJvzdTkyBfMVfLEmJ8EyftXKxZ5SLLCgwTKEf83dwpyUT9VTjRpnHX3DkjBYhcRDTNxS46",
  "key37": "2jMbPh8TdHtPJFKTfgMQVcmmBsWoehzgGryf8XVEaBhm2S3425S6ir1rFxZ7GHZkGYyq9JAFi34t7AX5PEkfaUet",
  "key38": "2m3jCmoNEgBMPQZBnATPaWz7b8Z7EwaKRJQHUfFe22DaMrJbipgyAjjoYz3REeFY5VR1oMGC3vHDMjiKp6TBftgJ",
  "key39": "5Ftf7h36LuHeajSTkG7mCj9Ue6oHWdgeHAYDUmmeQXCHo5M2RWP9PsZXkjCX4BhKmMypmoEtTtVpdVeuUVAPikR2",
  "key40": "4VMCsZcJZArNXQigKs5hz5xB13sMsd2BhakRYMAMqNBDbvEZBMjZY6WvZHHbiZBtkcwUE46sbBPCU6dUAhNW8qcb",
  "key41": "39g2eqVK37ZbAdej5hpS45bAaELH7ysc4rPJkdnqCEorzhLH3cs3G7S1dpvYYzcJ9TayBNaPDBhg2nnUab61m6C",
  "key42": "2GzyZMitcY4CxLK6mvHxd8tQGUsJvYEt1CdLAdvoTQwiUGyxkrrdkt5v9zhF8k9QWy1Gnrexm8AmESrCFWrbXnnb",
  "key43": "5kK4DPTP2g8GZScJcVcHmz9U2wEmjUsYf4bBBf8jr24g4qzbdHpPskWBAK19u1iL2wAjH1yJi2CJPWvuKkrucqcX",
  "key44": "4JoxRiUb4jua72N1igbzYR4CGm2YzSmMZsojeuBy16YLa2NtEfTGfpjcS3pYaUSciVUFZeAz12VNkPZX1WH4pVer",
  "key45": "2KQkAJ7ZsRDsLSG8YdrViCLU3Zq7RYXMAw1JDhWPnfGKkM4MMc5aaDMtXoDTiZV4jUJzbaJ3JZv1WH6BAaAXWo7i",
  "key46": "3ZyPu75aJrwDqhsBm6khwXJiRkgpDrV4U6UKrSmAjnw7vAFgjRxvyfaG3umEfUmQzn7BXQw3JFMM6QochJUCy5bK",
  "key47": "2nYSTQjg4YkwspZp1UHRSKorMFbbn1pio1k44NyFRypxo8GGoaJ6HpNAcKoxhuwNNLmiV169Xj5yiPuPQZC6niSu"
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
