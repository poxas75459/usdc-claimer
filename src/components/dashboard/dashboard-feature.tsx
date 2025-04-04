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
    "4z2WSRhnXScqd9ZBu6aXrJpY9zhGarNYqsYHbXAeygotVN12e7LgML5hepsrk63KoWftKKU8ktemygSxWbnbHvq7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5iXYGmNhKGCbZ1eGzL8m1vbewrzjUbZCph5FXDUCZP93ZPDYgjsuTdTegFTzq4N2tfneomQ31YUPziFcAN55pgzz",
  "key1": "5QLbKHEBtbtBnUfPAqhrxXpjHoCj8je1LATsFBxRRwAfE92719mFt2UkDaV4Do2TXEfPikYNtKgJf4wSmKvqRUek",
  "key2": "vS4WtHgvYLyoqvgRLckcCFUBCsGo9Sqz1J8CPbioKPBsf1YEhdi1rVCh5MLLJ5obEeY8vGsNXHWgZ3GBZr1GWQK",
  "key3": "2wcnTxMzHzvj8sMEpH5pxzSFWgedwu7isKiLnkcUMgR6vWuD2ZhWrrQbBBeyP6ESmoF1A85mZsdQKRL328AcRyw5",
  "key4": "2RLBNp5NYJcTg9tacMM4dY9V7iCXsFVbRcMwocFtobBvsDf8EUHZfsPGVm3tYkoYU3zyhXSLVorQKGCiYyA6pz44",
  "key5": "3Kcb16Cs6VmDaaoSfgwoLFTS1WvnB4vbqPKoEnMyidJ5Ce612V28PAZPSVPWTLe7Qkbc4KhspGtnXyfbc9nmpfE",
  "key6": "R9yG9f2fD3j5arkG1k8AKBRBmVdSrDi5LoWukVQFwLbBACQzXNxueS2rJhQRcyw4pd1ksubn5PJA4cv1f9WtZhL",
  "key7": "2wPR8DqZLaQEByna4i9weNwGrAnRXy7omFgSBUu278tyAtgH7AKAsRzvGvjNdYjngAyjCDsDwmRywSLs7pbjjM11",
  "key8": "5YgJtiABAiDuLSD5WaKdw8wxfRpnMPCp1qWAmtmdYUCPVBMgai3eNLcmn6CqCysJyyVm5333bmhdpQvBbraKuSGW",
  "key9": "2HFYHg5TGaPUSFuRTaujWaQ8dEcDGysQxYerRV894AVCpCVHR35Tu4ASXWjMnQE3wzB6VaRRrnYLD1gNiHgg31zq",
  "key10": "2wmdroNyV49rnTpKNCFnJ6g7PQCueWhBQxJZWPJ3kq61wDzJMnFxMdugqvRgfGpZGFyZhD6B3h3WE7GWPrahje7q",
  "key11": "2Ywcs4tL6gjvwiMdhg364riJGpuZYtQYvzniwkptZQTrgwVu1mUWfpAzJyxinB7e1464jf8tuHJhxwD4LuaoKwKM",
  "key12": "4BExz8MmiRLBxXyKrM4VzjvgEt42r6HTkHLyjP1hWvSgHNQ2hdNw1ZgJp5EccwvaCM9siArcgRHb7wPtSt9Yg2N3",
  "key13": "3uFFPeESWameu6goLkEs1atUDSS8AmCWnSmgUtnixtv8TkUYhgsWJXshaNBX9NmbHU6f4DrLWtdFZBJk4VhTbGiB",
  "key14": "5TU6Mvy5wfNYbNbSnMW9czispaXpUhfFyBHWbYycXnC8nbyb3trb8ATxJLcCSwaK4bWTXRGx7PujckGECAofkXCC",
  "key15": "3bMbqUcqD3iTF4VS8vpiiJaC5LvXfMH8qpBtNLGtuMHRUr2kBfHYXFV5Cwvv6B5uR9MZCKMP6djATzfAzsKS38vL",
  "key16": "2yzRk3G33Qu6SXN9ELCDE5HNFU8WDMdTq2MwZA6esafmJriHVGPNNMgYQ2WvvcZ7D14BoimjDQN8VcyzeXm6zPG5",
  "key17": "SkE5rw51J6tTwGXLULSXngX6iM7e8V4FPkjwzetqg7myKp97RGKKwPkUW1BEG6jTj7NCigZVY8a8Dq19SdSE5Lk",
  "key18": "2muwtqWyRVNxZTKkANVA8q7H6zAKskRZYtit24w55gy7reXuPRYRcQ88FjxiM33rEdQpCvnU16eRDDk3znRqNept",
  "key19": "s3CVkamJTyQcUJPt6TS9HdxRcQTKoKmZanrKRhUFPQzqC9LLGWYsMo4ofwAdHdyCHPDNDyfxChVjda4uqAV3Agz",
  "key20": "uT84Z7uLtrSuFK6sGbwGaEkHUGdosjAgFH2TPepskGcbC4fZjbZraRvpJVemq5hfTAHP4oq5LLhginLR2yiBP7w",
  "key21": "4xC1EMeecU6rPAbztPpL8wn67x2Q3uRRgNXpMmX5Geq7HBxVGLaZLoRRxRHw7gg4oCTcjfabbJ46Kko4fRynWxHk",
  "key22": "Spuh3cnssne5dvzcrm6L5ULnJqDxApR1wFHuxQ7pCB1hhp4Ky3mTv2JSakhyP2ymEwXPd6JkPnyLyQ9KN4xDuNQ",
  "key23": "4GWgpvHk6fNsvDvrKgyLgyxN1A2DsE1qSxdjaD1ntn815ckoH44KvfKUncbtGkDG1ovH5HNPKvqiiQCHdX1xuJ3c",
  "key24": "5DvxuYB7uEQ16k8eGrHr3XhyJoMcCRi2JcfnQQ35St3iYApsds8xyBbMC59m1gZ4yCS1EkB7sK9u2LcHYYUvJGMk",
  "key25": "3ctoqVZd3Xp5FSSsVkJDEeo6qJumALAM9Bad2ZJrnHQwraF61qCdzEHb5VQ7ocCXDvys3ptUwis2Qhc7gb2cpRN9",
  "key26": "39PwKYvKVaeKPXc9NTKaZ6gLnPoS7kx3U1pmJ7z4togzUPaBJVbimk1Rh1arWRi4j6GC6AycR8jrh1U82AyhcdXm",
  "key27": "2cC89BH5oA2WMjQ31MxHPAjdh5ZAY53mX7wpQjNhMJN8RvUvqDcAcXipe5Aa96CZb9K7g4wzhP7iSYn6ANA2VYqM",
  "key28": "tRNUaX58Kjq8GFeK9xMpgzyNtprZ6nLpz9TV4jc8jszyZe2CbppXbUfW5jr6C8QR8LJuHa348xQj6yyDAxVx5jL",
  "key29": "QkifmFZZD2xWwgk3ASjLbZ8RiTYznTqTpxTCRcvFDxaYntxuiUefZV9n5Jdqb74JHCMhL4frvx9m7tm7BdBU568",
  "key30": "2MSrqgBLN7yeqjHXJvdJhqt1vAbtmKp72P4FqMHTBcomUDGykAYfNxbnhc62ETkcN4MFkkmPiuiboiDpMh6Y4QVq",
  "key31": "5uBboeBR2PtNtvDt3CBLRXHScDY8kygAVPqdRR6Fw6vDVXZXh36AxkMpZuVKCH5PvbJj2zBGbDCMY9JZda8cZYhQ",
  "key32": "2SPzh3tNq2VmvFAYsqrUmbmmz8G1dXoBEFw8Ptbfa2DMYZ8d4deK7rttVo2EPbXBDETVAUQp9e9JuSPVkDHJTESZ",
  "key33": "2t4jZPqGGJ5s1XK4Uy4Nct771sFrDxW9CBhYtxpoKYtsv6KeKZ8CVNJE3kFoHkHZEQa82LYDyx7NNHw8eAnLWGGM",
  "key34": "2P8KVQZ37hBGwepZ4jkgry6nLhgg8C4xXaZJ8EmvXhySHhfCkFUoMeRPk6aRsdg9eBqoyZZR7y7X11fKG2pZyTfa",
  "key35": "5TbGsZBdEgdKRsTbuQ3jGT8gxq5TLZTcfCnjwbkS9Qf5uNG4gUw8LDTjapFuvtd7hdbQSRf7WrUFHJ53QUUvAym4",
  "key36": "c3ve1fm3ab1c1pvEnfZVX4Gk89BJ8a7a1HKS7U3Rd6jjkGB4PjGFtY27T4wreci6Ng6yDwd6s9Gz4nbVhDLxho9",
  "key37": "23ATWCYwfXnzFD1qRjaWM9z1sQiPG5aoR5FpDa8XcJ4jQRD8JRyAGBmE149jVYdfRXwBcgmLtA7smxySJkg4PVXn",
  "key38": "2tNr7ULDB7s1KseCc7wqiuqoj5iu6ieVcii1rZpDkbePrae7GdJdLZa3QEKPd4AZMZPgtjxt5qTiWGW2aLLRitnN",
  "key39": "4JAvH5qKkKDbC1bATembAJj7Qy5e5y4NvqYV5Kcdt7sHqc8TUmKvNFLE8bvdEwBCii38nPyXdnCLqdAC68Zkf1aj",
  "key40": "4VqUmTxo18P61J788abgvjiSwi3D7TuYfrPUHn93sWc2gGDSDmuqe9DZYncSaVDn3Gi1vauJ8GR8udCjgunJQBgV",
  "key41": "4MAVjZq3e7VDfom9Xg1bwmybFJXFhxhajZ9JtLmXbtDRHszwd5XEehGVMakaPP6Cp5AqYW6VMUGy1odt89xkdLqc",
  "key42": "4jBnnbEGA6BUsK3A859Q9jHqcmvsj29bPCR1e5BdGqgu7BZjbGuGe94bjLQXjcVzmKHBzc2pbKodW6gSxofrBRqP"
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
