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
    "2ghaAdrYUTiWsp2PVQecLmQ61NGcaEkUQGmQNkruTBXDUgA4Lni8WfRBCpXNmP9qXFxBU7btKmH1ZGfm87j1zsYY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4eSdyTsd8pW4Sx2LvHx5PbKkzETmtpnFPtTyJQVaDHV69eQ1i1YSfhZAw88BadPcsxESDkFGybHhdq2bchrdqMLu",
  "key1": "42SgBsjUqTapCm6i4V3fnvv8cSV3Jzv12a1bvGQNLagPbABJ5kpELnVRGg4VMsbHdPCAQfFYShVf6BiuWrBpqk92",
  "key2": "2YB1e6Rg7cBEHBRxQoSNJ2sdpmN4kcy7eyuRXv1kU6XLLdUe4pSqUuZ1evTSKKHPbvHQgkhNiW9AACBJV9vWg4Hq",
  "key3": "SzsoMCtrRgsXAFcWchZ2FYPwrr7QLaDGkpajhpKFibsLmSe8Xt9amX99uBUd3FKCbnmPtCB763ngUMAEqwiC4Ss",
  "key4": "31A736qCjNvJLPc9izxGvsoatF5A89SiWtTAtDrHkFCJWzEzSA4zf92wwToBKPcfDuWMiT3PYAwRo1nPoboaHLbw",
  "key5": "5RGZvWUmitQzr6F9ZpDBr1Wj3K1C1NYCgf7295iuEvGMTn1GqN78okbuEzmkvo2hGSXMCwwpjUX1P8n8EMTaDP5x",
  "key6": "4Nt8N2sgt1pQt5B8KYAV7ZPK2iRncKeygT8GerNmePrNNJaGiQH1ybLPpQUoYbQ9Tj7Df4bR3qnR8ZJKHNeuA3Kx",
  "key7": "BneJ6RJ4sWYCr5AhBDPLxS9ey1yb3yJJj1BS9iLkmaK22b98CPA6Yf7WNkKGMGTDPREH4wq12ntvhifHdt3q1bC",
  "key8": "2LwdWpi38pQk86dEMZ7ANdz94HykK4WNZsDekBVdGfy3T3JBuJc7RAM3rfK8d2FBL2wKK7ywkKwmCPVmvynk6tuQ",
  "key9": "po4QdRVvnWzJN6BvHCwpPUMj3p4At42XP5WmdWxvGkaQsd4nH2Mv7o9VUb6AGdMtRNEdKFDBQoRCiXcVv55Vmvf",
  "key10": "5YTj7wm9YmNfu3fMsMPVHqxs3FQJ6s26meKRiCXMpyjCsWMactWFbuMZ1ZfxyuUzQDHVEfFZWv7tkkY9m9LAMdZ5",
  "key11": "5p1Ap2CMkLJyrnYcRdCJ5DPRzXBZZzQYeyte8Y497NaTHyomG4L6z4C7hiBvriMYqsWuxgQ6AbSFZzxYyk6U3YEy",
  "key12": "H5dwDGWR43U6ZLcGPEdidG6KrwrQAiZUrSN6sh8nzEfdtxX4bShWA47C2i4vj7wHUetb3J58sGMP7nazNs5LJf3",
  "key13": "GJjL2RjoDXTQZD7whBiuxkRRUBQYeUDdWJCsvggCvrxhRLyJxbeYS5ybXgF27MsYFvihcysu6XfKjKEU4Zd8RUm",
  "key14": "5RvnvsDKGWMsV9ccCDgAr9eY2EAKtL3SLddU4dP6ELkCLVTuSczjarssuw69C9rsQu5GAK3RTv7NMLByBRX3HHo3",
  "key15": "3nSHAVWhsKpeeeH6TnNvVdPCXRJXkYFLVKPYFhu64ru6KEye6CJrcSH6fPA9f9vMkDX8jKHu26N5LsnVYkoKGUdn",
  "key16": "zV641RcfDhzc1kaYkRRdVjManMmEpA4C1oeGP3A2RfsRonwqznD7ZXoECFAf8iEjCs5NyPs9FTarsVLTN9mNkXo",
  "key17": "5ohqrgsvR8mtEtvNbLUJs8xS6ZtmNpBewNbB9q3EAPPdVhUwQmvBgyzV22ivLGXebCZMYM64me8Vc9pcSR7x9iAF",
  "key18": "WKhuJdf598WAwHWuSxNettKnpX8tBFSfNLCAk7jZ5Wne9jq2demL1ypB5geY4HZEfHV7XA6CKWwVLy8vHzY9f7E",
  "key19": "5Ajf4y4Ek76LGvu47oJpvqN6auupWaEZzQNoDccx13mVfAKE6v2ibPZMZ3Pkam6K1FVqwDNqDhF4GgQjH67FxrQp",
  "key20": "3mS673rWeNK3HUix8SZQZ7SDK7HznGo5gVeoYntotCWtS9FQaTx1w5BJj8V1ZAiYChh6CYTEbNSm76cpvS1sgCPx",
  "key21": "Nq1aDckdRuWbxg7C8MkXxU2ghhW5rr7VfvXURUzKdthGuAaqg4Dke2cf8KVqzWDq24hPNmCV5oMCZUdKq93GxLG",
  "key22": "5pVxqV3ZThnd3J5eNUEL5ZQHMuBD4qNoKVTcKdaFFhvYbZFeqou2pAS6rGcE1n7D1xF71fi69ZibUTuGSbXtQiUQ",
  "key23": "21Evmsf4M2nmcaQxsnVsWGKVm82G4np9w1edB1VEs1gfk3iUVMev34cKsvh7RXg1qVAVWDJoGHzpNfsBVZ8eoD78",
  "key24": "41opATRvMJg3rd6NgsM3beGAPztsPbtkiFJ2YSoMTKmt3dBSGDbqFSuwgdMdA8Uws8JqrhznMTUQdtGZkGqztGKj",
  "key25": "29UEbEwPaAjQDy3DNxNQZXw3cZZT7S6SJYEc7UcBtoiGXSU7wQWBYPAV3ugn5NHT8wRaqt9Jdqr94qibrtSpnW9q",
  "key26": "5yCXPkwexfzMLfLiwV5McMFkZMygq3KEb2sE9aaauYTK6zujvqww2B56qejhbgEAcKzJWn7qdt6uDR7RN9kxbELs",
  "key27": "4UmYrF3WDFxGKb32RWqUAFrfh2Aqkebu7pUKDbZ6uBvng7MeUS6k6P2LEipSEMcM3ALxDQFVxnC6Kyda35AEsxrK",
  "key28": "3gE9FAWRNwPts7g7u89xs8QB3E819N8vCAsua38mdMZ6ocRp3YjG6dmhQSALnz4jUkGCKWGDc7ANzhdWzuMZLUFC",
  "key29": "5WCT6q8We44Y3FJPyo4NeWPbR7Nn2gSogD11TKcTJ7NaEyi8FxrYyc17zW2iCevQHz843aqnohXB9MN48DbPgQim",
  "key30": "291gC43sXycTgJr7s1e84UzCgdcHMmf3dLLPjpTQKpLby9ivUa6cFunx9ozPwZ4GB1vc32fz8EhuaeGqiFJGwYDR",
  "key31": "42Ym9RtBgBiQBTN1FgWQbBJYZFKS96q9Qg4PgtUCK65euYXemhG1bqFBUBhyLt49gVuqwEmmNeSmAY4XNsVGrDzP",
  "key32": "xE5e2ehYj4sqYXJ7tR5WzT7t6eNBsy6onegL6KbvyoQTk7zvQgxa4r6WL6ZjoczfYZ3w3pHzsPcqk7MV6cuUpuc",
  "key33": "58eBS85x67o3y7zi7HcqWv64zTXRozTiPGMk9J9i8X6f3TUbQrNqrYpPej3K5G14Y7C7ddBm5FHr4ZPXdi67yJPG",
  "key34": "4wh6eoR6Ybikm3eLF3LajfEUk1FGdRb3P7mvfwN9igMuZjxD66522cWuak88Si9HAPCyJwmyJFp73cnnaEeAFTt9",
  "key35": "4WJiVEq5sYYUP6aNBr7FeC74XYMyJnPMjr9WBvzoaVztibMNjbHScnDdf7sqEcwoqHEM7kcNAEBW2GjbcpjJeKrq",
  "key36": "NUTisvCcKGBq6RzUiZFGoZ2vfygsEatiebfQp8mrVaUiCk79VUsko4FwS41RcLpm3qzy61ChoVbyzCHYw3etM71",
  "key37": "5yyvaxmpKE7yEK4JwunnTmXcuNrs5iFR1u8LM1tf1sDzbj7VmaVeFgkQ4QvmpZChdrygr83kqgRk3Jf7N4WBG9pR",
  "key38": "2HMZcWnL6YTz8rGTPTpCBwqT7g3wcP2YFCEajUdrU67dW85c5r3a46ArPr8Wen2B1aki2B2xQaquFyquJL5Q8QQK",
  "key39": "4wK4h8Q2PAzt1znx2AHtcKWpM8svUsjnXg8vMTqpU9D2xKkNRkaLLtaCGrFtKqFwknJrsJRV5aL7PJYidNVL9Cwc",
  "key40": "3p7nNPeZ1NYay8Jc4kqg7RRevEeFhMs1gED4txT8JXcBa3fczcvFSV3pmVwBUjXSkSsowsCkLv8HFaYhNjTp5uB1",
  "key41": "2dxaG7MgPGyP6A1FrzxmLWwXty25uuv65iT4ycL83StzcxBc4Xta5ZinsfipEvVPD3BrszrvJL9tFTL9SpabeqAC",
  "key42": "2ddEDcvrSHh2SYBi9Hq7qVxaCfVsM8vq5UUjF2TYc8SjwLZbq7DB9UmPuGTg1HEAqGyA57XzmPEUzgR6QMtfmXh2",
  "key43": "5uqMk8XT2QxhJ1Rgy4MURjgdXpENBsmzJdC2pdse3B94VejT5Dy3SF2ZoQeyqhmzysvqz5Rz8Bu2HaP6vpASYZHk"
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
