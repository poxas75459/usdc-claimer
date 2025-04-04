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
    "Q1S8EwXDCwQ7UuGjTokkmQNHL7jRKH9X1p2x15XWsuFYBapfUtsd2LDFuUeCgZ7MD8CN56bLwZA1epdMTeRtVmZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "GK1yFdbRRdQPu3PXSTVEJYvRGYRnmX8W8Ktnh8oACAxxYSZhArRkfNgaEK25vuSj3fAJnEmbqUngwwEMhmFJES8",
  "key1": "2ia63586MRYhu9BGmtZaEv6g23GVtsxZd7qhUtedMzEiPjLtECfc2wfReGz7mLc7wqvAY2jMgiMyFTasBCswiGkU",
  "key2": "5YtHhPxqYEQBB8WwyEcLKTzmdcTsSDwsbU9TBRwZrVRsFQZHDaCnmMtE74xohhPaFfY81Ep3jjtKHv2Zu6m4BVzD",
  "key3": "5zEu5mZ1X3o5HoULELbYEY33pGipmg9cgigy3rKaXyuRtKXZ8A6SA3Jn4ciXm4kqqCyeFvcJg1YezRukAvyp2vuq",
  "key4": "3YMAnvsWurBFHRWLgiT3nbN3ZR6ieHtY7wiATSJ7XHES6cVA9TmVSdT4qb5JzKLESHdSLBfijwUZnt1QQEN1zsyL",
  "key5": "36Hh3tzRHexeaQbiFNz2ZYWhNyQCLzySpzj6GtjR6fygkmuCfSWfp2GxcEm51RNhkNWCCxxGurpuczu8tFu8RZtk",
  "key6": "Wvt3MdBipmRKTTqwkmQ4U1S7zgibpNTs1rh3EbuYj6KgQWk6uyUwd1Jehk1AtZRLthpgdotorn3rNeBdshMYML2",
  "key7": "3jSn3q3RU9sT85mJpSBgD6FJnUqVET9NFtLtAijGSLZcX2GbCb5AvYFr6MPaDkJJ2tHtYxTCNa9kQFoYZGqF3VvR",
  "key8": "3PbDaAoR2V2PAygn1rDvBTQFiwdeVryqTYbCEjSc2RfDgtFVURrkCdxCqD9cid56uwbFkZkCMehfRfEcdgupAX96",
  "key9": "4XweZev7DKSosyj1bBvgd9iS4wHmcYMgC9T8G4p1xBXcJCg23kKSveLo99rMDNXq5F6jEc5ddBFrWKNDDKXoqqFe",
  "key10": "28TpE6EsN5VAnrTfTXjbBKnZY4UXkFYheMr8HE8JQrqyHuxfsA2YfB4PTM5v4cz7SJNr6c799GUbnhLNjLQ1rMiT",
  "key11": "3a6C5JNpW7772y9VZsiAaxyNnw9L2nTWNZ2anXNFsra9Z5FFXp4pmP49yy5U4ZEpyKnLSe7e4vRafEKdAwmwkCAL",
  "key12": "5dQz9LyvpYsa1G3sdPVnFETgHi4RD9GyHrbwKpowfP2C6GQxFWvVqEYJhw7RxfpYrh44pahxHxyuSxkx79dMi8Jg",
  "key13": "5bPFhuE5FHFVywbBnSxn6LWyUnqHP5XMsjA3XwJynzh4AvWfe5ywoss9rf8RvbMraGJAZ5WHv7eLLPe27c6swLGb",
  "key14": "2tjmSWRvDWamzUYrqx7edKJv4A8NzapPt6ZmfrjC8fKG6z46QftbQnXvr1hktbQTXFALjVn6kg3hkWCdjqGjzW7P",
  "key15": "4rdtEkuqdc9zxa4XzxMGBSiuc54N3yFtBkjHQFL8yi5VkgnAhFf2rmjKF1JyWpiEcwVhy9YyK5BAaRxBT957c9c3",
  "key16": "4vZFQRCQ9WaxJvCGnxq9hob4MF5BT5gKJLAgdkEQ59mxtmsQW3J997BBjfrAxNxPhAK1n4eDPrgmajQRaqeVEBGJ",
  "key17": "4Q2mYsQjkqFbM2v82man7Q476MjHNt9pz9cjTkzhz5XS6KL5QWFXv8EcRBWgVvaSe2HebtXHCaHtgMkw5Xqr89TT",
  "key18": "4EErNRJnrB9ESiiY3L8hJcjsmiPwaT9d9fRMaYZdUZawvq1NMQouzxsuxztKniRyRRKQQooYAJ8Q6KAkd5NMtuMq",
  "key19": "42ftwf92LmaFRsKYrxVMBYMTJdi91p8rtLAjGqejLUUKSkyJqLaiR7KvC7dQC6dWicnRLRCeockxoR9BuEKnb1Pt",
  "key20": "dWbrzA1LpeVSraXDH3kT1EuCPt6jy7etuTgsSgRGgL6txDYsTYp1KrJ4XNmhk26TDeAVKmgNbTFG6nELo14jEEx",
  "key21": "27hhu2nGEvTyMdQrjGrD2QzR2YtuUMSVNFRp36ujFX2peKLoLeeCTpd9MswbmAcV1YRUaHrahDPpCXUFeUKvk7TG",
  "key22": "5C864ZTrSBnjWLqSLayQYoiCLcM8BetkbiNMpPuDqaeSJziieWg4qvJCEbFJHy9TJjY958pqVgRLUMwgKPAsLWEi",
  "key23": "2uHWNCBtgZaF1zn3Ybm72rojQ1hVnmRuF5o6TngpibkG7CYoSK6AHbSt6pbEY8VEAyY3eMJzS9mnRoY2xqNHHDYM",
  "key24": "HJrPdMoawVDRxAiGJ6dxEZeHgBfPxKMHs27zBmPxkVdshjCfNsYqTxTgXPARz16LfyzSZgPhxBSCAgy536HDuM6",
  "key25": "2DufBFmESavSEaAoLhezXYx54TTPeNpR26LVAaQyF55HiLMHrsUfsLhhhb41Y8PBRydepNM9heXkWdYGaUo5zhuE",
  "key26": "59KESbtP66Fzw33XqqpjBQCktwMGJZe3CUgMiWcb7G2XLYU2XD5iTUneDppvRgkCA6oRWFYwNkM3y6tPWd3HhraY",
  "key27": "4MwpswdHu9nNNvkKshUyZrCSchEzeiJPD8FhYmeSKMoHEYUpt92LLLkkJrrscsMEZgMEajNUnUisCjp9fPE56Eg",
  "key28": "3Sv9bi6pv2gH6txa5FJriRj2qDrEY7P1PsfcUjRd1Gvm67gwEWdPraS1cJUknEYw95Jr5hNDCaSzjmttbMWyZDAi",
  "key29": "5AWTKyv1ZUgSQsFsQVrEuYPrshLaJTfNtysY3smWqms8QpXV8KAHPM8Uai8WWH5guhg6XkfwT5jPaWey6VzHu1dP",
  "key30": "4a2geryNDmwZVBMGdrp4aiEhbMTpGEyiaNghsp28BqJDStrwEsxWJpPj3M5rPWkuCRuNWXFnRroVMkiBtJK71Mz6",
  "key31": "51GdzmHqdMR8nmnewrdjTAxi2EcPqB1ynZAb3r4Ti431ZKbNRQYb8hxBkidbSChPanUR22Xp3LuSK2sDScPCvtga",
  "key32": "4BKwduEsoNVZh8b89dw54SFZSij5a9SJUX7pJmpF2tcZ7otMSw2srKWEh4o2AkAEARmQPhdpv2Au2oY2ge9Hp5mB",
  "key33": "33ia2tzS16LVhbfyiVRdTEUFWaDcCoE4YCR1CTkXP3LKyShaxehf21LAr5Mxa8Z6AtthxK2jFAxmp5Uwg7uC4w4E",
  "key34": "4HDyrxkuaLey8ZwBty9kP9FQmKahScF89ivnoVUR26MwSf1G38oiCoWo7g6Go6PysXMTNVXde9CowLkEabwFETxH",
  "key35": "2RU5LvriWG11zDNuxKFCXqtkcTqGEPAbAVThdxho12gYiqw7fiQJgdk1ghTfdsw5Z1qhodYD6yiEQk1vBKH2URvD",
  "key36": "5uMiXtZqh1bR1y3Y9GwgBGjdcaQHkVmz1mV2TUnuofx6yJybRJCvsfDXNGcJuFmj8c4pvhD2WnMfFri5ARXzzxcC",
  "key37": "4PCUz4G7YhcasZGupx8iRJe5SgR7XwDWzUWgNPUUaqqHtut969Q8Sm7FJGE617bmPkS4dPecQXVn28eVUJMKLrGF",
  "key38": "2UsHXrK53AW4EJrw6ZBmBT8ZNVD9b4rzKbT45g3omuyigH6sze2pDSE9PWuEgfTvyHzc1syeUmVYkVc7uhzCWXad",
  "key39": "5ZaouGEwYat18xBemmgiXJhpm1tq7CU57KPBfSCxtxmW3go51NcuPUyR9bzpzPHYj5QtxXbT6RHfYccoCPnJoWfe",
  "key40": "4V5rurZP5WsP8VjCrhjg4J9QYbjJdt8vD6v3nP1DKtkLdBpf9WsSD3c63Dn3QSFmShFsc8z8t3ncGHmaKX6zM2qw",
  "key41": "2GzHuER2oUBXWF8oFAh6uLJP9q7jre9bUatjEkgQCtcNkmwZCFHB4LF1BBcLrUnwNtByZAEBQgfTJ1gQKHjGEXAM",
  "key42": "MTXFwQgGCBtyVJN1yPJ7WUSiL5cV9GGTyCRhmtg9mhxAwQaJjbEMg8Wq62bayPKzLnXg3sTGE6JCrH7sJR4RhzJ",
  "key43": "W3ojSxss9RSXjNvHngVBT7a5wmEyCyEB87dKVcdG2PQhUfpnBSiYjnpWHcvFYWFnhVBWVFbPbzcA8X6EUHpirwH",
  "key44": "5WQ29PdM4iZUHZgxsY63U8Yz2KwpRpNHHgFeAFNEsNCUEpPdPZQYdsiNrLvUqsMewt3SeoWSBe3L9N2XgXjbBKFH"
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
