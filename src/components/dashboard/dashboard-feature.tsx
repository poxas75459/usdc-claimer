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
    "4L5fwF2AeRJN9p9A2xN2v4aYFdgNrtyVz5u3GLryqQez9B5XVFemwDQbf2eJCMcWHxt8GhYcQw4b4mEpKtHm8NMM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5qq6GJTonF2sBHtvPyrbAr8K1Eu2feioSusTG9ueFDGLgpWQvq8e3yFYx86WCoAMzhi6WbMV3F7YaYPedw1kynQJ",
  "key1": "4tagWToHwPUL2bM7jomh9gGTXRoppzVVC7AcAe9boGQ1KBxSDqUecF3h95gSoEpkup7TRCAxksq9st1254xKzkCR",
  "key2": "FmDmxQoMoLJaYWRhwZWatoFhFSr82hZbdUG181JR8YQbttjSwchguwvWAdqab5e4rbUmGLiFk2EP2z8FpXv4jZE",
  "key3": "3CpdBAKL6wYfnyW5XghimCbDDzF9iVB4P9MkVQgjZFgUZZYVqHMPGvLpDFe1REW4LF53LvwZ9M9F9Y5qzMLrQhop",
  "key4": "GQsyVofj9WgWRHoF8gXKDjNedWu2DBc175ZBwGPqrPKTyp7q8ZpXMHi2kAhCN25eTAVHwJEYDUpD4BKE68U3XDx",
  "key5": "43agk4wLUGXrkruijato4ZRcNJcceukX2CwY2kFaLvsxajPFmC8RtecLQLsjStXTATiMQNcEZ8jkHWMb5oob227R",
  "key6": "3xrt3XJEXqxdKD9T2i6omC89gMTdDJ8apg9YjBUp9jDrpsLituvqvn8veg1Ju9b3wTwM4FkuDtHmWTxX7UzQqYWN",
  "key7": "TXpbJsRYA2Vo8qc47NCAGWErejU1bRSq4K1Lo4AQ7EwYDxwRRFhJnrpQWoJkdUZwBn7xx46b6LYedZXnd89J22s",
  "key8": "2N4QFee1LkqEa2rGnuKVCPJNsAuovtNGSm5gGm2kK8CbsjZT9ERZdMossDvpJQipWhQRf4i3BpSsFzzQxaLscLJ7",
  "key9": "4x5iS5PcKDDZF7TVQxo8YKgxZUjhhodQ2GuQFJmco5Xd6dhoA2ccVL2ahXAZ6jLekhXLuYRJXJds2Wz9oUobYWU4",
  "key10": "3FVNeXFyUsPVb1qToevXH9KVtk8nAwYpivovXuXGjuGemWdn13caoWYtNbxCqNDbDmM3FwWVX6WkooecKzoLsmEC",
  "key11": "5dPEwHZQfKPfjZaZQSrbHU73i1V6XKxYimxZsd7x3NjsgxTsv6MLdGhtAH44MvSbdPEJ9EWfUS2x8GFajQtFejvK",
  "key12": "3CbFX6rHLswHZgiV68NWnVtPqtkfPhFx1ywKofDjSMgTWTWdcetxYaVTMWaL75t6dT7yP7444igR3UMBE7nHxZW7",
  "key13": "5SyKiQqGTHYKvNxHpLGiQnu4jAyqRiTJzUzUhjc11gWfecsyGwWrvV1WctukmF2azURigqcm8oisFw1HgN1jgtWG",
  "key14": "4PA6pNqQnDbXB5fRUkNWbvV8oM7qEyDVSeQKPTB84DE8uGAVfFUSQZ8fFbvQ2cXHsHwwU4GuivYsxUpBUGwfuFPv",
  "key15": "2wWugRkGV5RA5ocPx2hoVjGa8wixnbzZ9FtDDX1C6pk3yEg6X8vzGJQbMgXq1FLzGQ2HTjxyynUNXhZH6eN4dxmg",
  "key16": "2JubWvVLF71op9pgjbLutc9o6K6a3LKkCK4ieV4UAdJ6reqfTLuFUCEPnjWpVEj7Wn8LeNzKCtmoy8inezF3sTCu",
  "key17": "4L7dK4b4KkPCd2LzPLupzw7k26TzT2o6BYbVbZ9GyTJqa6t1yzgujvBZ2CZR887w1Yyu2no1VBQ3tK1Q4oXerLRV",
  "key18": "2DV9JW83WTVP9faXHBaBhuFvCEKkQqsencjhhZcTZusVuZWqBZde4WKm2yM7P5QLmUKSYuLgYTvLcDcNCkGip9U9",
  "key19": "64eauFh8veiN5pwR99kGQBmEaZPcUi92wKDRMiEa2DubTemqePDexkJtvbxHXBX73ZR9EgbK8DNEYecqL7Q7VgSK",
  "key20": "KEiQ3ZmuPamvhZVuGxsTFgr9wBYf9iUM9usm6S3pr6QAcGLaJ5H3ugo5qyzQ1B6RBxNxy2GwyddjVDyTCejaTGy",
  "key21": "4VDahM9K1hZodiSdca5qyHhrGgohqF3f9mMYCY2dja6gd53ysaNMg5F8XfPBUDPxgPs8g8hZz6QtA64Xv3XjreE4",
  "key22": "2Z9JDbgjZY1bFDUQUSc12J5MkN46vj6iCcr8UucrFnCGRrKriTtfdXgAF96ZAbmUd7ixeLn5B2zZ6kXbZ2QA9Y5t",
  "key23": "SB3vaMeamAqrvNC3N4PHmogdtQKLkWYxTcekoBybSnf6RZqLxhg2tkxbPNwgGmB5wa89ByYxQFDLvHjexMd36q6",
  "key24": "35kxt1UixkVvv1L9N7FdyapexK6r9iNnLpFXA3AJgMkafYfPQiMdH1Ejj2wM82n7SsgyFP1TJDjZFfbDoZcHpHgv",
  "key25": "3YRF2dtBCa22UXWem9SbR4uN8RvGpV7wpHRkLPERvaM66Dy6kwipNcxoKT3o9j1SvEpvAVp782aFuJkqGdA1njrY",
  "key26": "2Q61rAFHJv31eUqis5pUJzcUANcdXs7NXRAeh2NvgBsJEVfQ25HSXP3gVhnQqMV3NVKQLUwknYNBS5gfWYh88HsT",
  "key27": "BQzkYQudRr93myATfQ4rDdjpCGZomYdjLoMEUTvNyK46GnJM8aS4JwF1xFEwiCoPp9VvqDaiEP6g8SWLib1PhRx",
  "key28": "5i5ADfqke5p7c5VuFovLSXuahuncyyFqbsdwzTeBq8HQAuRtLGCdQZqrUpjagXkMhjMfCvmxNt19G9tZJuDUtCEe",
  "key29": "5V3S6L4LK9YP4yo2WKzyPd2htm83gRqMLMnmQ2U15bsL5CMM9jcfPwwo13A4mrkcFvqy5YQ2kozHEnT2XNeMeGXu",
  "key30": "5BXq1nnqSeAFxq3nhcSbg64TGakGEUC6sAJNPNzYjK8VtjHrxpqDwEwmwU7EfQzKiqTgJxPj6tyZNB6e9Pr2DFwn",
  "key31": "5TWWSAZpVWUKhNSDdZ1hwo5xApGH9YGq5G3xGxs5umRFvgYyuhLuDL4pDXvxNane4swwmbSjK9CCuTgvNMEj64Ur",
  "key32": "2VTzHVBjkSqAUHbB2Y3tjwaaszYJFrHUwT14DGw9zDSABBKByiqhYcSJBntKbPx92zrKB1zQAenLVVyk8HLFS47h",
  "key33": "431h5yRMgjmrJWoikKjM2rzqGXCVQbvNo76ow4ksSE5KM7LW2uXA8fuGK7LbrBikzCJfFrDQLdvTzA3YDrFbwgWK",
  "key34": "5kJikWMdugA6NVgK47qB8iGHKXYQrVy2T2EyXLPTs8JqWssgLN1x1TiSYoEPhUKLe4g8gyk8Vm7ZGp5yECDdrY86",
  "key35": "9fK2p5XDhJHXC4nby3ftpmsCU8HVmseHh2z8Ycw4EJiUaJMeCpLjip79puDGVHqNbAGk1X8Xya74T74y2cA21zw",
  "key36": "3NVdCNGyBrqzjZHZEZc4YzNHkrNKTKZktpAnRSaU8saDdwEwoJpt9nEdU3tSt5KWHp3oXe72WXthcQqi2H8u7697",
  "key37": "2PYHLBw6MzPozkUeHbz9ZqDtWYBFKswSiGBqgHaoCwZxkaGCVXkSM1AWLGtoGBs1mKwtQhtQ3vyFyEDjzRqhgqhz",
  "key38": "31NWUSpwNGEegwaoW9aLTLzfYbu6jNHQR6JpsV2qJ936WdWNgRtUJn7NNNiFdohsVmtgryC2xrwA4AzoDVQ7vk4",
  "key39": "f7pRaHYXdfDUGaCuBbgqAUiYo5DzpjEeSAEGEi1fGw86x7upJpkU1YabmZHeMupEeP14DXSxRqyiEPnv1wM96xE",
  "key40": "6477eA5EenKcDes8t5JxjdARfy4RtExC6uaVG5QT55K8guuvgXpWGHzN91tED8YCu4gw3HZuuGhKYBz1T67W8Kyj",
  "key41": "tTqTULGmJVN9S1F99p3BvPuvDYu5osQDHwAneMeoGk9vSWpmevaJAZUK99KAcR6Tx5fycbzdtTGhC5c5CZMdmLV",
  "key42": "XzWHpg94BHVtruUB8PXoHiqAcYpEvwqJ9uNDyHh8oKGxURY96ssScimaVvV86rSExzfDyt86Yhh7enVMVxe5wG9",
  "key43": "koPaDytcpyphFfHCieJmdgErBzeerKoDfw6inghXrsaNAXBh6t6cNs7zJ8NgWK3BhJroBp1zbbnMeNMA5ftS29s",
  "key44": "67WVcbn3gaN8F1VtQ2Yd5HuBURQSG76qeVWFE3PAC4u1FUk1LXgziGnrySm3o8YGRTteUUG6NrLdBfAZ4YcXx9BK",
  "key45": "5xbxb56ijQVjU8MMyF1Rq6JATcZ2dx2Xn4eB5nGJEPvXhJCFHyLWxNWzYsmuw8CUvaHN4kuoDfUVJJVbjEzkQfu8",
  "key46": "zpUVRKH1JYLMKjutmLrofTHt1GRbroJFVR3B4U1CukjD2yxvDYTvFYDpXZANrbzavbdJnYULZsY8JArvTC9BbDY",
  "key47": "2vaMB4cE59CnyWBTwwSbvebx5bHHBn8NtZAxu4RkXcTAbvsT3TdUp8HrjMdeJHjTfmYbPWuaWd76RJAbxidu1x17",
  "key48": "2EvLQFfrw3ExzYKdtX16B91RZp7pHkAsEShATohRBUwquhk4A6zD9KrHhoWhMQDTQp7bmufh3stF4VRkhj5q7oYr"
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
