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
    "4yQuJ51moWwSLVefz1YSTahEwUSVrHTvsgco5nUe8TXb5ujPDYApfTqqNWChdnAxCqSNTVg7CkwNrRW9R18y59Ta"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3CGgJtM3j6WQ1t63jFcB1zLKmDdxhWXP1Lcj7FhryY6DiigNCZToArvrwrUksKFMR8oXU4p2t1qEUPsqRiYbwAfa",
  "key1": "2VhgiXLi3f3WpvxArrbXuPxvvBM5Zkpq6gwjwgpT7mBqTN8bfhdMATCabBbgpQAjfYUHak6pQ7Fc7hoxiME5VAac",
  "key2": "2VVz7o7bzwEnbiTJhu48ptfqgEt8G2zbptHCYTpyiGb3F18t2QmAGBrPe1Lgj8WedfHiFNHcheSKVzZSg1yrtMzr",
  "key3": "3114zHZwURfVx4GDLubmomEv3qfzsjGWTaUzT4JyrhJFpyyinyF8iZ8HQK1ybZzUZxEKngGEaBtTGM387jkSxq9c",
  "key4": "3iBWwCWswZ6S2i8FRPUnYKwjpfhR2FvUYGkuWoYCbBjAk26KdsBEmKE695nxspRh4Pb4WMjUwC9wn8Z3ZSerAbWS",
  "key5": "33o3mV3Pa8bdhyxNAAPANzUBrRrs5KBGgEj5MUbZ3ztsN4PmV2P8WZT1k4TwKT8sVPKnwGzLNfksutYA5nr5ce6d",
  "key6": "5BMdiypCM6f7UZFmBV2ahHtBUQmmErzfka79xjdMJusuB9wdWks8BBNASo7Aox3vvRREypLAKZte9jCbtznHefm",
  "key7": "4HQri7Tn6zDAcwWZkzMAb34vUwVWm5HZ6WfrcDxoKhvf2EbYzfYwP2fdL61Cdz79wHnQ8vzePikk9x8Phz6ZrDxs",
  "key8": "4byDpDZbB7d5sdpLemXuavFVPDmVFfzMQYQtVgBUs7V5TabygVTNP3QwRkVy56dkZHRqkW546rbHfcjKMja5opqs",
  "key9": "4W5jU9wnn8R7gZNPNAsVw47BfrUMYLJ3PeYzwTPe9EZEibFMSji8N1Hx2SsgLApPN3o1M1mByH32fJaU8Rtvj2A6",
  "key10": "2m7JC2tZUvLanZJAD7x94KDyCZmzYAGULyn7hJrkrdX5YwxH49H8TKEUVTFb1GYPx43pLaFosf97ixQ8g7F9tKDA",
  "key11": "5qDAxPyF7LhJ5J35WozUb6TCCuoixibiANk4L5vc5vX9UgbgcCCp1EBUrVrEu7ZvqyQAJGRsbkXHD4BtKVoDSnY9",
  "key12": "yaNgJqjhKYuXw3cuvahBbjwiHUs8VXwyX3vmEL4eBSbFx6AZBo5UwN3Etqdpn6ViNy7XBHCyrDVHT3db8TJXedo",
  "key13": "yAzg8zadRQ9QqqQiqxGcRmwtDtcMfw4Mbm29HJUWT4zUtvH3BHynbLuSURfseigjL3X6E5YSR15EhvRd81ifyqS",
  "key14": "3w3J11roi6fh5nXqLYmwTrucfKUYHCcsERbFbaBQcJmZqAAAvxr8hXVjhekkeXkyKv2dM1hcL5tNrAz7s8V6YzSu",
  "key15": "3zD5sBADdWToAfPsXPb3M9tjVspauocFZsF3xfN8ZpdKNeghdXLVQG8rUhtwvirsMPGg4897a2tS3P1cq69PzRBv",
  "key16": "yHQX2FWcnK6QpYhKpo671FxBWEdsLkhLWts8k6kgdjYaqeRwXMUkKS8eooV46UN8HGFkeQnMSBMeX8FPekd5A6J",
  "key17": "5751ZDaWgM1WigDefADunC1kGGjSzXa5dwTooCTwTSsNx3e8UtdYxzdeMoTpPVStWG5CTZ8CDTwDDcPjdLjcuKX3",
  "key18": "5G6Z98EDZNur6cLBK7zDUJYhw4vBG2spcY23ypFWdaVSUCTz2yry3dG8FDGdZ8YG82qsFgmy7VKmYm2q23TTm1FL",
  "key19": "4bW57ethNmxuh71eu758QiSkrWEeX1k2fmyuSVD1EhLBj3SDXKN5GYfuHQhG6ig8GZEktH4nsmoBTV7gf7ZjPPaC",
  "key20": "2gf86vRcJ6w5n53DZH4LdFRmi59UBTCXRWJz2o8fTepYcvN5qSRy7uiGZesDu9CLfpoNrPpZiNtDqkKvbaW8E6yY",
  "key21": "nd1ChMwxHcxW8jwiwpKDgZnPnqLFoE6u3EsN3XVzciCFw8ko7pW5U96noYsaK8FDHzFYUVCoT5mHYSLnyhrr8NV",
  "key22": "gbs8nBSW3JzkT1SjAcRM4NTRgZ7rTMvEFkZbH1ZktJpxB8JVomGSC43LG2x4kaeCRcLMQSMxU3xVjbYbTFHXvCE",
  "key23": "3YEBmTqfj5jAkdyf74R2NQSMi3HqmvFF5YaZ18F8vtomZjWQkLuE1Ami2k92daYVgu8ceou6bTDJVks6w1mZrn9Z",
  "key24": "5acxWrcvAosWueHUTGfcvXXLvrGtksjXM7S7Xx7ySnkUosZqozr2W82cdXuFHn6YF4ngaagFnmyQqS1BiL4petPR",
  "key25": "5B2BDRa4nnPkKHgBuq2RwCiAdYWLBE2UpUVVAXdSv37xHdLRxLPi6fw3cJZdAvB1eGSkVRYPkPyn7hQiNswWwwaH",
  "key26": "2ZmtAHUSETNEHRuLFpLTwbSrSJ8srA3yaTXkXiSMeauHkKUM7yddqsLdEySyHY9Q5bcAXCUib7hcVwRVQb3GGGrz",
  "key27": "5JeuJqQ7HzzcVN85geeaFQQs6JPmzx7sFQ8TrGXuAFKZU5vhvEWjhTRhsJkzVyLnM6Skso5PZDjrnBThwCrQZuiB",
  "key28": "51yofivWXsWSymogvW28DLnMuvh75GfYx8Wavp6jWkLoWa2renykZEXqA7GgJLLTB6U2RpKHVV4s4qcPHjS7999X",
  "key29": "vmfH1L8UcWZepjPdbQYb9mDfZyV7nzqRR9nXSmmmXTUjMkPNgQHf1F7keTqdtRwiUZACDyZAzYMdR6eCFqhQSTk",
  "key30": "5jzFJcbwR1XpT9TLTgDzPEddRchecVQLDT4AHXSuYhohK4EL6DhkTRZUjkce9NGPgNcZ5G1Zb9JwoqnsQSuF27bL",
  "key31": "62KRayg5pUiY42aXorKwKcx1ZABuYv49jzgCW2fqF7KrvMEhcYQ9vG3zNgJ8pCWw2kWBzew1cx5w7K8kcFRRfBGn",
  "key32": "2g2ruxTVMKsKpXh9ns3j5ns1iTZmdLL7a4h1pMe63Sy8m1eAZTCd7bgutobBcoEHY8CpxC8FtzFHTurNx2R7v6N2",
  "key33": "LNBYjtrnrfpHHFjTiEpd6HvyXeh5jH2bGhSmqDFz5ZgrW2sCvEPZFqGudyo1h8xhULperi8mo9czDG6QyjHTRML",
  "key34": "2a2WTvBHhcixMaBUqXcNTC9fs33CA9taTWGQkv3Labx6QCMyXLJzQR4GvwtQvh495Rn3uU9FhetEux1q9rjgG45B",
  "key35": "zR3jwbLSGD9UgPXKamQYxzb85bksjQmWXD4s44b8XwKGeV67jySZ5MnPz19an5wh6vcSXUh2A3qAYJDzaAAbCmc",
  "key36": "2MEdsyR65dtos3yBz1WiPc89XhncQ4EYVRrcLHYhJuHcSdW7xogKWhxU5HABpnk2vTCc4ZXKHPitoqi6PTbEMnMN",
  "key37": "35o2WuAGFRgWqGywddWh141m1cQ6g51ApgXP2ifuYNhUtqYSYtPRZAc5ePF82sdgkDtvA7SSAQjwWPgPkhm7pTf5",
  "key38": "3DWiUuzzyFi7btdoJm5EnieCN6jzQiiZadhBbEVxJ42kMB84nnzfVC8vVLvvq3S7DgCELcp5KKgzs5XUpmdSrkCT",
  "key39": "4GnsSaW3MKH2HN9AhBcWY6qLggho3yzcuwS4hyEAaoXh5iCFYuvujckT4im1dUSKxLixJqdjKWfD2FxQ23niaSaU",
  "key40": "416HmQuWDzskt7r1fgAqVvih95HPoBKsxmARZ5DxZ7M6agMPPg7irQaKq5xZvbvXzJNzNdfm2mYwV6YE2VMMp2J6",
  "key41": "8YLJZyAKUW2yk8w5WjjWHH7W6dsWhkLiWsQpnGXXeunssS1g5w3amV7CwTWPLoEnqBZm9PMWQm8u5ytWPzKRLdW"
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
