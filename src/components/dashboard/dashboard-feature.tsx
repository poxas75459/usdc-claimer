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
    "4bjUN6WRoK4yqhMC996SKqr4SDLffzdKh8mKuLTRmMo7wUdVytGimhB4LupW778yMvuukKMQyj6n9JKX3ubM9yz7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5GogFL1LJstxAmNSiGpd5oA17DCxBMYDDTRXGAmkieavNcFJir7FVcnNMwq9SLiHvCxoFYp2mn4H3UvXnYcCZXeh",
  "key1": "3JnLYqQbmPawJqGSdeDqpfUvod2nUAZLt8FfBAduzwfUedSJkotQAFXPdFG3Mbbi1rNStsrJZcDTdQixB8LG3hr4",
  "key2": "4wn9jb8Y7BMekewNXS7T94DgEkaaDF2HgTAidzCTm1iwHtYziuNHdVwrYnXjtuiH13e7WJUEG5qrcsCd7AejJFuQ",
  "key3": "4fcJaqqhqvhDub14yjyEjz1QEwbirc5QSh4PQZoPR1oxiAJ4H1k4Pr3uub2N6EvkoHkoXuTyw1Qhivm8o1ZBgNiA",
  "key4": "5ENTS6FzP5gUVaC1zTsPAxiikpyrDFLdaRuuZ3DgCeMhcZFWGsacaVmQ2LPWV62DrwsWKXuhCkyqxRSudvCcRvBS",
  "key5": "3fHqgwCFPRgZPZPvqCCtqTbPLgznmnYstuC3vWuivuT1yiSKz9bRJeHY4V64NoHux9Z5ELKVafjaHPhCAB1VkHzp",
  "key6": "5svbSvhcymP9xfgTcfD1MkxHcUjbS8P1LX68nZECWUF7DBZkjPuFA5QR2s5kmctDfHdCyLHgQNY7sHUGTfs3Etsh",
  "key7": "4pEZuaC4H3DuykTeQre6sAwytxjC9ML5hZCtqAvURsNxadftuMUqmigxYAzFqQKRjBBWVh8Tck8Vf42wJ3m1ZxiV",
  "key8": "5DSTkUUmW8RkgQAQztwvpwHpeBo8GhzvhznCPu4r7ywJcmcfukjzXeey15gENBBkGDKiiPB3Bp67bGm4ihVSJPya",
  "key9": "2bPymve1wwULDb7twMRrqxuxaRdnh81825VgfwJHPeRdZzDoZwxd7rzfGFCWWdqknpyhDeDKr11eCLMtwnrW3Axb",
  "key10": "3xFKDwuoGVJbKSj8LvzGm7PXvyDBevcGVCpVQHHxGSype9EFuaVNWBkdkiRSkpiSRrK9mmZ8vfJcERBqSewBgN1J",
  "key11": "4ybrkHD1nsPBh1WMLCbHV8qLGVzb5eUx5k6wiPXwYVvCgsgh7Et24yFDSTkY9QXyf39q1zLxca8Dx4FPZhorjd6E",
  "key12": "qUS7bHHwuG51QQmp4ipFRgSpmCre2bCQk8f33vnvarEovUXDirHM63x5n13nTWkwqa91xbHyxgPHPxqCpQxgZMM",
  "key13": "5ZkaJoTbMWuZ2MYtj161CASsgLm4Di2B2V6Xoyb3KccLHoVJ6dkM9SDxRLHodGEMYNbDApoweCMLUKu4pM6Z7D4L",
  "key14": "61QHcyQGv4bkJq55vavuJjM8B22EBQFvoNwJ3v9nmCStbD9fjWSCxUCb1pRR4aUTYfkoCCz366MmzzD4NXSxDSA4",
  "key15": "5mHCBfttax8LSv8pkWkvmDfVqhmdnFDyKTa8LPnaAr2H9Jd82Eh2pHV1hJ46yshbxDZMhpmxQ4m6d9c9UxiKwcs1",
  "key16": "4KbmxGb75xNTHYW3Yw4ASb6CRm9iiGygguDZDrW5TKNzYhhFqCaLKsxMLC5bLb6uboZwj2AXov3zY6wYajabZfAT",
  "key17": "271bFHAJQ2NoYJB8noW6Cr8Me2n2kmn6mpgYB5kNMtMDVbNs8EhNJErp45uzNoqRoDhyoXhUoJ5D7aafjLASnZui",
  "key18": "4BpLvBaxA7phRi2nwNB3mnkFgS1UDoq7AUHp8ShHUDCaY9HNmEieyzsNQML9yt8Ecdp6fGUyM3qsv9xunLo9D5T4",
  "key19": "4AxbK7SCi8wmir7ugWnNCZqgD4a3mFmcACYZaKkRJVGv4HSc9K3b9XU6yLgifzr7vYXztYgifMsbnYELN6sowS8",
  "key20": "5ktjZxA4PN3eRpS87rmbHyQswHiTS8MtLj1VhcWe77itShGx4piLFexYQDcu9KvhCuxQicjs6C3XY2EUqeWXTR3J",
  "key21": "2DBsfPxNb6iSC49wXFMLxBnNhrJKJmN6ux6qGqeTcwLDHD4uxYWLCRXmB5vRMA1sUzkabL764KFKPETQLsmCh4g6",
  "key22": "4Zez3Q4ptQFpGDgWRHhoozxM3T4ojnNYkX6xjkpBTwh9qewkstCp4hsuEheje1QMNWXmPgyikLf2vJmMoHcfQ588",
  "key23": "3xV2Z9gP3ehcHy1pXsN4fywtCZsy6AEPUUKgaQ4aXi3LV4Lkixpr6CD2N2hyEmXmbEzKJsV5jHZnnRR5hJ7N5EWa",
  "key24": "5BCeThzkekfTNkQdPcCNGfP1aumHrh4eSgHJSZmG75UmA4P5SfL6vGNDWEuxti59U89LdwxXa3kXtAd8PNsXgkYV",
  "key25": "ETF7C7QnHD8v6jNvuYd5THPAyEA2EMGwj2V18vMyc2XjoAs8YDuSchD8BPVo4kQ7hShUhuQHvcKLENkNmVrWsWh",
  "key26": "ftUeGyxeva63ktEWmFoJZDZjiPUxqtrMc7PWNkMr518eacC31G2gJEdW9rw7Mk28J1eTSbA2XMSTsBWH8Z2aQ4k",
  "key27": "3fhm4KvXTvFHtH6uf3WmgNH3wDryRr9zA1P3AVgJx73tgf7ee5QJTzgLwiwCEancWSwY1HFgDjDvySULbBAvAVak",
  "key28": "5pFesWK9nS85qmugyjsuV6YYq5HKQZE2RVWvRdTpgavVjLT5xo5hkQvqyTkSYpjnaJRiy8exP4bjcTCeaozJ4sk5",
  "key29": "3vxSU3BjxR8LkSP7gELFeFdaJNgbi36E7fFwsQHwtzST1tvMrSiDB5E1egrhfNrmdT4jKcjaHkJmJ5x1DAfRzujf",
  "key30": "3568SEJuEPWStCyP9C399BADyYZqZstfBCqAYnmKRU2baoBmPGNHh1gKgPqKRF6GCdD8zfdaBypQZuuH4WZRQGJP"
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
