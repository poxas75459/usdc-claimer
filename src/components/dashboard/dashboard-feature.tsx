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
    "2r4nQwdGhWZ68n7A6T4LrZ9o5i2n84HAaJh353pvC1fVjrt34Mu8FAUuDP2pGGwJRi7NYFHGzjv9YTKJhYYo8scV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2pfKP9DuGgKHy4Rw7qYcU9pTc2L6y5wt8UzPm7avxAnG24yJ7USPBwc7EnmfzgKvSTqF7c3Eb3vBbJnR46Pcaav7",
  "key1": "2gsFKZSqCm6Zmi79XNQyG6iqbhdDHB9cRxxbMcfza6HG2RNY2GbdW5mNFizd1dnoCscSTbstuP3mVy3cbYW6rmQS",
  "key2": "28WBbxTDgcuHUzqZnKkcXNSqinnEQq5NjFgt3bVvatUV6cdvDezV6mHKXxoMAYQmrTGscvvysZy9AGQstLDkXb6R",
  "key3": "vgSs1f9g2SjRfkaKr8SCGVARDpRhmyCemXirw87Ne1ippFdvSs6yKq9iKqywVFQaqRDw4mQjcApLDnK6SYzbbAw",
  "key4": "2RFXfbJzL8TDVG7hqx98X5anqAFLjmiCKNzddTsgMR661oPt964RaPNNN2iPp1ZGYi6NfwCDxDKBz8rwZQWbc8y1",
  "key5": "5VJ3f97kAf8pPUeDxvmZf7B3Wt9QjuPDHg98V6mGrBzrhGobQj5ThsM9kgdAHLDWhwwdj7YewdGMjBCKjKwf8yQH",
  "key6": "2zYm3p2Hyxe2cibmEKr8RzNQS87HJvBaoR2EykjXM8om18Gj6UNz1ZX9Xf9m3LU1t7zBt1kP8uzGYUrGXoBsFpE7",
  "key7": "4Qt7UmfHTAkV6CUx5UmafkHhQSuC9sM68fDgNSChWRXtVBHb5PcECTUoD4WYEVCXLSPJhr7qtEXFhuMQCiWit5An",
  "key8": "5LqVrYjSoqm6a395RNFPwaoneh341Gb5xfjJumNQuC7oB7rJULC8LdQSrGHDqeLC73RrqH3PoAKZVLFcxpk7ZWWG",
  "key9": "2fhkE26WS8vE6vx9XrkWxVbfEpUYxdeRVUcSmRjyw2DcPB3usJmv4Ap4xAZD2NJfZGWiRLqDceLDcBEjeoFjHfBi",
  "key10": "YHXNQ7HX5yZMVu4S3kwwVVVB65GK79s193Wzg9ymPz6tA26fhMD7Bd6iJAiAsCXLLtuuVWDFkucvpskE5PaXSTS",
  "key11": "4Y8xqRts7bz4661KNGoG2MHwt7M9VeH8wquWuGwcyX9TJuur7K66kqWdvP5Ud38sGqh9keZgE62SfKpy3VRHUuDw",
  "key12": "3JrGdf5WgmwUtJ5DKgcGvAcp3LgVMPoNEa7wxgSejARUzdRBvx8HGuihpy7ohebas6H4KoGGLuB1jF9xqsXvUuMy",
  "key13": "3P9zx7KVbCqW6HVTun6FsDueQmyrmJp7Dpo1ymyokKwiXqCE1FqJBKFdzrNhxUDBae2hMuEgS5hMnYXLtLtRkJns",
  "key14": "5S5ooaU4sAM5xwLjcfk27m5LaVeJMhARpXEyK6bGvQwjn7tKanV3dy4mWcdEhFWZZNMtxSHfM3Z3nTUQjm5ewPVL",
  "key15": "51EBrxtVSGf6p3A9yDZZDkJhKpN1N45QmN49uz123CYaTxySKhCwvNDy7cXNN2JNqoFXfRiYMp4W7AbvtH7XhdAQ",
  "key16": "5atZPDwNFABr8SaJEQU51pqoND6MRAXzfrkrAAgcwJEZ97MTyhWcnCTjBaSAFrThHsDuJrbGsPoJkKbzsiS5TU32",
  "key17": "3g19f3c79Fb9bR7GrXou32wktVVXTwqdtP3Dr6hGg2QRS57aBDZUSmUZgV1k5phzHey5nfQy6KfCf26QQw9fkVft",
  "key18": "3pwRNVELnNKLgQprRm9H8vusw2FVGnj1hobqTX9mTKYMzAXmD48THPEMc4vjF4txG29WVLcUsFci9UQTmqjXwrA3",
  "key19": "4NPhxBtMb83ZfNZajQ2vi8FhMRbpwqGMdQhfkirwNGz6sjGPuQrM3d2gxm9BgeHjJ4HxT7mJRr6xj3ZvhPHNzLCE",
  "key20": "4eaWVN8ZMwDSFo558JSgNPMNnNqtRuWv8wK4HgmZ8Ra5PyUr2YQsQyK2JnpqtezQ7rgNgLwHKMvEmw3GjdPSsP8R",
  "key21": "52ARUGUX36CciKuTkcdpBx3o1G4xxaMvuRaJuZMRMm6EGuL54BbUByYMYFXJfvNhU1PJLvKRfCsFK8imSrhAyAbC",
  "key22": "3UQP5GAPNe3U35iJxNbc3aXWErMwpeZQYaRCEmUYKFH7sgxtTN4Mc5HBRvZ4RCGTRL1VGd86axVKG44hTsiyjVEa",
  "key23": "3CYNdYLY4ArkxKSZrRnDrbhLzDLwXaA7ppAjGbjRWJj7p5jxxVxr1LY1ADba38dCBgM4we7YUeCEbt1rGdduMMor",
  "key24": "AjfHhRUbjpTo8LoTePinPDVdPjaLo3LLc3EyfSpgX7yCUJSsWQTZb2UbYGpMT6Qg8sfHxuYkfY3mC7BdCU2NALW",
  "key25": "3oT5wyyEhZqpiCsm1TyRLtYkDYfrUHvwYs8NdKAWXm3i5ihXcdfMnR4oH82pT2c2hMFFB6ohMTgbTa4CbpkJsqQt",
  "key26": "5q5aMVVHW5ccEbLoKbWjExYRkPbBpTE9TputzfNmodk4DBrzwhmmYtax2nLB5ZGPShMwuwxGRk1Y7DeCbNZH2x19",
  "key27": "yGqYbktngwUAtXi11KmRzJN4pqwEmWdNj6KtbBNjb9Qh7fzG4z7K2bihFeyoQzz4SM8jGHZjTwi6Embu4U1LYZg",
  "key28": "2UrXaFFUYYV8TgwKFs5LpnQp51Rfb91XxgZGDittsCGw8pjwfj6sfmAPGwe4Lj9DCAYuZ3da8Jz41GnK7iiqnnXP",
  "key29": "4LEiSVVWGxfzK1kBzd1v1ssgrWAL3bamkjQRfdnBsVqNuZMLDSyZsNAAeRM5rp5xeobFn8TymyAkKRcNCUDA9J5D",
  "key30": "EEqx8RWg1PdjULLJUEsH5JuhCUu9MVMjtLhpSKctnr4C4bYxwx1eF5eG9Vmb5gTDXDA5XZreoLmVyfP6GMe1Dvn",
  "key31": "tDmkJeVoBKQgCcv9XoEVB8Ay5djfxzMz11g9JYb6aF5moWi59V6jght5UwmeeXW4whK14xauWH7atggUrAuHUkm",
  "key32": "FGJzHiYqJZu5pwJwtit13UUcsBnmN3GvyM2Kz7gvia3GvZ5Fnu6wPGE6VyAdXbsgDGdx7ZyaPN7FwXuQfqnNAS5",
  "key33": "44KJ6PCZTfdXqstWQqXWdKZV2E7ha9WLFTvsfqmuoZreD9y8VSnsmmxmvE3xNTXtoVTsmVMnwH3Ba9DwXVK7Dzsh",
  "key34": "zduQCwMpbSMFPASVSFVAkmdvzFkXfndUrcGXVqBCsH5nvMDtyyU3hMa95EBDtzKZhbcKkURBLyiyC9B2oZS2z93",
  "key35": "4LKgxSmTrZWzg583aX3VeQcupe84UL2fJxKcQNvhncs6se2NpjmYzvRWsuPiAcp6Jd34upc2WfiQeTgaxsJhqY9Q",
  "key36": "2h2GbXVKDj8tMJ1pidgbQUAkbBg9fRasa51vBR4qu6mqVe1dYhfVXw9dU7TtTambHX8bxnu7GnCCYxBvAJZpsSwh",
  "key37": "3REH3NZ6vaDuKgYW66Nuu6s4WaSE8kSvoZu3YgXAUzNz8N6jhCMQpSSqPrzvTj2diSoRRqe2EvmnJ1NGhMygEqPR",
  "key38": "53LvxyLeAwLzUGAZVtbLMUnQaAMfTBFuqMX81LRSJBHqzFdhh31E3KfiJUEP5L16CxhptisMBaLc6iKNKsQvondA",
  "key39": "3QxzvKnrRCwCB4wSNiANGLLSrzgsk8bnABF76iFA5v1xQnYYv78UFum5uX6aiQQVKTsQyZvnEBi8Bhrhqvi4t5Nj"
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
