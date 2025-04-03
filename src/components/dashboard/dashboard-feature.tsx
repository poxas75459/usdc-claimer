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
    "3oY9sQy4fp3xQRdUkQ77kPSjbJkdAdq1WGPPuxD72tCdWyiif98SZCsA2XJK19JUPMkncsHcpxBNWwnr889Cq12j"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3esauJJwvVkF5FrMPJyv5yEXd6vNxLryzSL7NqRyZhrKUd8cfLexEcqe8Hvt3XD7ZRCTqm8352ATVSwsgtcgtEzi",
  "key1": "366x37s5ZGdboW6XkUkUmdvTTxsp6kqGPzczAo3Yv5cYoG8wsR1oYn9MNgkADh8ZJoDfKuzXvaT4onPyuPUr5ZeK",
  "key2": "4B2qcauE3NUpSUWhKUuaWg8g6vqd2B1VyvGvVawB3vBe6ATinv9PUgrvitY56bxrd9uhLqgatZg2nsHjTrHxWFZf",
  "key3": "5FjQS4npMrLqNhC3idVyKUeBSGJA8mx9qRvf8dMxjguWtHq26obb25Bo5txC9QvEGVme3foMScxL8ZGNXp5zGQeb",
  "key4": "4SfxdjPBPuAvJu6AVFBtcep66fuYSiS5Pe6PFvi5F3htakn41qjusqFWbQp8N4B5sQxCKb6qPFwBfpeHNYuHKzeQ",
  "key5": "5mZdA6ZLVjZEWbgLcfLNMWAfaEigW1sLmbgSNbYFFsM6PuRndApcT6y3ZsAzhQ6Wd9wqzWm2HNpUeWyvAPZLQJnm",
  "key6": "3ztA5CAzdaZei9xNQhFmoaoG8TeSGZRKB97LP51FHNeGE16xQwEkXcNTLbPQ2w3UFdmwK1FhFdZMwwinGmgZEv9X",
  "key7": "5EERw9b1owQcD89bxAbnsG4PSP9QzDByBLPzgezNA748Z3P98CxSsnhif92xCQjhXp6mGFRkiEKMgwaUcyqecawB",
  "key8": "3czKXTnKM2tx65WtYxthmMycxju6uhrobFwQUvbTngERCUbp5QFAcfjxygagumffKXvTj6subEvMDpX8d3npENsY",
  "key9": "4QeV42asw95HuR6arqFg9zrp2FcVmn8iKqRc98qHrYwaDmQX2VgfTw2jnJF2H9iKYH2ChPAELvsNdNSbTywVBP7t",
  "key10": "3EUPefC2YEib8okEiR6B65wH5UjpqJiKotrdDfoNPyaSzavBnsMxqywiQuy9NbP1Ro5xjLWBRXE25pNmGq5agmVB",
  "key11": "4LnXhgs3fWeRubcu5Vno5pNZyxJnXcwNKzb3m1nEFPC196wzBtGqrdk5A1gVwwYCVVM1jMBHGKHGyKbTbaC5KcGp",
  "key12": "61hxxAF3Tm2w5bBweAdthWdMKDXuVnxp7gM5DaXVi1QRKMRDMe5LNGa5WEEBB6fxYHXZik2kpuukMBmdHfYKsoYt",
  "key13": "7soZZmz72gqoYCs9Pk3kh3cnkKMxxo1H81At96sCbA6mhFNhrBv6uwcJrGz56zzn5RdHPsmszeL6grEmNTAYu99",
  "key14": "2qKpJWFvqPcq8i3qPEBCpAtDooKh2NouwxM1WztZuNbrYPFwGiPopDJ9jTErb8upaoPx6mijL2wTVnNkowvqFiW6",
  "key15": "43jYFKc4nVkndZBN4grHDwd5gNoczkL1jD3Zx2b8uxFmVMTRDKCCXwRsBHjtMjKH6V1w1WguxjmZ1YMX3bdXB7gX",
  "key16": "4Q196UFo6C4k65WfL5nqJPn8MFjsRMcMBva8qveEu2aVQqbYcoVSR1L55PYE3gSf2CawxAkEw2X8fM7BL9YSUvZ1",
  "key17": "4zvmK5FNdpEc5UCHxMb6yCvf3CyLJRnT6Cz43c6CBAFByz4BaM3q8cbnLaQc6CgYm9sP6fDXrFaWdAxGBomXMDBJ",
  "key18": "46Lyh48Gddk7Z1kPudyZhqX3MvmQw41ByTGXTRP6VJwP7XkvRUd9RaXcJQHaTj4HxT3QXaGWGNz62jnu74UzSiaS",
  "key19": "3CY4oPL9BPYCvRgBLBaoirfjCLZhDwf2DSyzCaxrpzNRnELfhs4CwDzK64AoHPnXntgXNeWchY5rAnv7eFtUnTDJ",
  "key20": "5CZs1tsMJrJwtmRGQCZSbYssXErQUymLfpBPGiRigXZLed8DfnBUKdha5Hcemi4tzjc4veqPyzb7JUa4hChvEx1V",
  "key21": "ibw66Ao7PDwQph2ZkmruR4fznLRLoLNwuiBjdjYQaomVBiUcQD4tZStLJ1WWk45DUcwznwib3dVUfTXCahtUopv",
  "key22": "3WVqDaA2C53TVK4MJUqP4icdsiGurGNR2wj7vEXaf5XhJkcfujzEEeukCXg6a93twEXwNpfUDWQBs886GdFWWhdr",
  "key23": "4RAvCQxFJ2WrURbpHLvYAXbZzhkCVvWDS2Cz7EnsYsSYVXdE8diSXa91iu3kFpBf9tPtAoFT6zPFnAwd6GSqwrV1",
  "key24": "3LyrLZoci7phEPfCALVT3zps3m15ESB2Cgq3qezfxV68KdpcFnJTAMmAkESqdqqohPbFRDY8NmXYuXs8uj6JcJ21",
  "key25": "4toRpAikFXnbG4vajB1nQNRmRkx62Xpt2DAw5faAHvr3LKUfgNsVT21uBPZtpJSJu7VeabV2EWXbyh4TMDULqENL",
  "key26": "5mQopPj36QRnS7eSrdQSNMHiuFsEDceuGZ1STE5Gvo2kXctDBSPm6KLEzYVaYYXqZ1PHRcLGA6UPBoGqpq48vSyY",
  "key27": "5TH9nKHwZdQomxWt3Wo1c8CuWSSn76X8E2MePoigf8mwybQKcV74AevSzzCMzRKZaiVaX5GwLK6ThK6wsjj2j2dC",
  "key28": "2Kma6xnsydkSQpq7kXVk1SGtGXfeUuDFrPHmXK9PJamzRRSus4V7tigE1DNw4zNhnZAqw6Ar5QEeWqcSjLvVJ7BC",
  "key29": "5s7QG3bwfQQAyNXBT76ENJtZ1a7gTQ1BEWeqJMyBbvruXKju6SKHcDcRAVLpPCJ2mcAr4Wta2YnWE1Edi4rp35ZV",
  "key30": "4PGyYKJsgUHpszv4W6LPmCoPy5ZMDsevp1wwe2Vy3Nu5vFDxLCnGpENLc9C6XzsTkSDtaoxuHcxoBLbW3huvWf9U",
  "key31": "3UY32kbRtnZE6jDnrhMuccdfxqkrNikFuDr5LfZAJdaHrMhv4BscRF9Z5eehDCVnB68XN5rKa3JM2FKVCNkdRbBi",
  "key32": "43XYsFL7nZNkUekhCXdF7bgiv7PSQCTboX32vaZhQZpTVA352nfDMvKNbTaxn9VokPSZAsavksqXCsgw1LgA6fC7",
  "key33": "4jG4UGX7JNsECK1tcPn7RAoko6r5JfHKnuzrnygED6uQr218cQ3MykhrAFpvbw2Y1dUmv3C51DWJyX4TgP1mx2rf",
  "key34": "3rtrCYhWJwhzZZU94ft5ED5yByV7HffZAtDDKTr85ewBpX7nsNh3ix1xyFU22dqZrjqfXGr8HHRu6UrWZiqDit3U",
  "key35": "3LSyG24nvWDuaaSj1d63NxZQqHjcFq4uuHZYhuQq1RV1mbZjY4scggDydkyaHvrJQcpbJ4kQs5MgkmF3efx6Jx2v"
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
