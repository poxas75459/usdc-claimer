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
    "3sCeL9urotBUqxyZpDuPSrhSQte6rqc1t9fhqnzpBTYyPs22AE8dHnEXyUH9u2uCv64cA36CcCaJwtqrufHd9QcJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "53JKgk1cnMxEu1cDLtoQT6WhGpofZgybB9g3FNCsTgBagLmLHVuPEDwF4h9sADbwPHfEWBAAQScU7ardTHZzs6jA",
  "key1": "4w3r6VAXhva1g2JRfX4MphoivoXkoAffoKu444erDRexyEwRDCVecprUgaTXQrGdzMT1N1qe81HWVjK8H2s6ABf9",
  "key2": "3JnzJWE5oMf9Hyw2ibF41doVTtDw7mja6WqxSuwD6QtEDdiFHLbaKt5VvysBRKShzhwfUByBF5isxp5oweGAe8Xu",
  "key3": "51avcA61H1tCyE5HHb2kfhLUqXzJz3BmpoNAKzqECXVVrYSQLbwuqCahXuPF4kXdAWLgk5gZSDb54g8iMBBZq3Ld",
  "key4": "5Td14r2JgBSoD8ZCta33sgGdEcfbEoat7yHWiJ5LjDMBJLJJvK8sHgrXAS5YGWi1NQbMzQGBZ4nkJGfbW2wFRkD5",
  "key5": "4GaykQwgtgPbmtx15MiJWkwF5R8Ws5L8Lt4cffpQA1ArcJV8hj118SK6dk42CDn5GrLiYLNBJu3jL3qFiWPn3AtB",
  "key6": "ACxq21bX2gtdsi5Vxg3htzsoQTFSYgpEdWj1SkmQENs55R8F526His4nJK7UMtDKkvF8DxN5bj7wQjgYJTaQndu",
  "key7": "2rdpvCEhL2UBwzhumydbjnCb3kZhj15MKjMCiw4YiH6Tf489bNYNuFPrKr21mBfXPUSgpix3jij3ETFpFjtCBiJu",
  "key8": "5imhby6Fi4BXSz3sLN7t1XqjUyGeuFMFWMmpYMtPdQNzPQHYHVmBCVtKCwody6T5WkQ2hSLuefCuYV133F8J34FP",
  "key9": "2kbsvbLyyCQWxJ9gf5jX3oFyqubdQvMSBi5k7eHQssdzk9rktfyAYdNFrvcz3vLAW4BdN1WaR9k55ezn57zrRsLg",
  "key10": "2oHSXoitTVeEgZNGakazv9cxCLv7SzsB69MhYUyDr5VSKUaHNgbn3ry9hgTA4wQMwkT73g9nrHxusVbkqnqXu4Up",
  "key11": "5qxukGp4gB4yJ4jEHHsKT2tUqCvPYMqnK1zi9tB6XUynMX9mLVCxb5mZASpkAbuZdZcwsxFVeraTQRprEzAFvcr3",
  "key12": "2CtkDUSgrHXyg6QWBv1zyN73kCDnWLXmx4yzoZWZsGBcj3jirvABR329RTHv9jtuc5xcC1p1fWQoT6fJq7Qa4Nzj",
  "key13": "5NGMYmnr91BkreDSioq9WDmgLyYF7ZeeqbnAhzFvC3GmWKQ9ZvDDomLyPYniuxnQkSVMdB7Nr84esQZXfyQub1a2",
  "key14": "44RMfZgCqBrxSvvhwgKnYZYVJX8isQ3RQsXotF1EDckH3RmroGn5MFXa2HguwuJqDDotEspJCbGaCyxGkaiDsbTz",
  "key15": "2UAmrpYNSjUYNnMDv5e7z9QKXUC3ufp35ocFs2oV3A3FE6f6ZpACYBBeEWSi8AnmgcTunk6ZmpMRw4geMkY8DhdH",
  "key16": "3CFu1Fugccfu18CuAiHs7XDM2368WCroqr6stQdyw5Uas3azhicQy9N4dhxG9bdE63XMxVgw22e4wBvnEcE4Tztu",
  "key17": "2vrB9z5jT5nnfivy5VRaXB3sdTsREj8CFtxFjwZKGn785VyiZxRMKZN8U5mspxEmqo5P6f7sWvB8SyxfxsSsTAx2",
  "key18": "5Kke7L4jJUyWAYDqdqJzqq5UyXJfpPgeHzaVwUHAdZf2uWJxCzTaUQKVBerLTsjMheXTkp6ictVGxQmwvJiGVqX4",
  "key19": "3fbAMjFEDBNELd8H98GRzDD9UzShdtZovRgMrdLn9dAqkqivQqBmBhQzvQveK2pEbgvgCcCE3FPff1LFef59deaU",
  "key20": "2PNJj8PUQjZimkCbsV127u3dgAu9yUjLofAWZZPyDeRYKRRN4cBcznyx7jLtbnLGeAT32GPZoJWXqxR99BkYhtfr",
  "key21": "4njywr4WeH6wutSwucRpfqSmVG7QKesheo2ppbtFTpgdx2eWRMWpU1RqXQ62cKW4Mta4hMzeXV32b3LCRRCrHdVV",
  "key22": "3gW51YBt57qaXHNzz9C11f7QUyUVEFste7i7gBvWBM3iiehd4wyVbstLNi3SAwzUvsjLfoCcBsLaNKnSyGkDSPjY",
  "key23": "4uTqq4VjQ5MqmKap48DEBwWFzpzQ647A5nR1LjqG1aRKo4eWQdLoNXXsGHpmKc8PKyjLhDWRDzHwGi93356ktXik",
  "key24": "zBjJt6h6gwxjTBxh6Vt9wzemoeHHJQT9zYynnqzBxDPC1searDuuFcJVK98UVAA955THFGL8vgC6Z8y6zPe7aR6",
  "key25": "5MRPUGAArathP1nTR8cgYgZdic2gA7pPmJYjjPEaH25v5DUA6ps2b6jrHu28SQgu5xaLnUXVFzCE1v7sPtiHYSbj",
  "key26": "4CFMJxF77GeRCLg8Tr9pvY2hkPCaTAvxM14ak44yhGbJBRJBVm2ZuzvKCwUt7wjXEyrBNX3XnkNcqeUJA7dMbfhr",
  "key27": "4g1oFKVvWg2ZfnNFDVRqx1MdihFTBiNiCvi5fhMDmqUuqxztsfKskNfFYLHEfbynGU1BG55UuathFPYGY6uT5Wj7",
  "key28": "5iBLEmzHt1ecSLzBYZD2QZZaa9JkXD6Jyf98xDQAPUmg7euWST2ohdqHczjuw1nPfoQNkWV6B1akDhuRd4BphMuQ",
  "key29": "35T1QdopBmqMASgqMizEaohozRtBMH8mtdA1YMmfSTjXYE3MccJQidtAt6KcYrupKX4CqWG7sqF7ZxBCMbzNdwRk",
  "key30": "3qC9xkYvWTsmEQVmhGi5qRjk3VYYCbHoSBYgAbMgv7nRe43GnYtLyrEYFhSmYZKuGri7ow2p2FcCZwoPHMv4o1Bi",
  "key31": "3YQEyaJJjsZZr9QKopkQfErHXGnDytHQRMWPmHpMgXseLntxd1zFFMSC1VsS2qAqjWbqQ6MP2kp3b7ueTsYCHT2V",
  "key32": "3xFEzaiDpN73gFhKVGcJvghdwETAyTVXBKsjsLbpxW5CdFooYQAUzHVFSz2jFuHs1szyGuwWKNmNNFibt5aRiVCj",
  "key33": "3fgVqm7VvmM6GjdTBsk9uZpZvkdZ4EZ9znL2kPqBkzWa34TSsvMkP5Mjhkw7jLnLSdu3QotLg55eRve1LN9XWFCP",
  "key34": "2ERzGmG7PTK2ggMFdDEf7wuV8Hyq73uJtFWNW5LQ83SLMCMhzwsV8xLcfvU4ZkWTkPsMvc8uqpD9hWwtuHv1czzR",
  "key35": "2L7teQKaAFkwURGpAmV3m88v4oDiwmLFrdY21HpZzQqwCvpRh9BNEb74LAr5sRT6yq9tNHYqJeiDPFZFxoXNKQts",
  "key36": "27XWnfdtWw3v1Dw9qJ2V1uFh2LdHkDiRLsTqJJidKzgUQAewBeMCPfLYPxfHyUMBboExiJ74QXBDyDjNJUsCH1AT",
  "key37": "51wLspYqZUa2pvU9ZgDLqi6q2iCyhQf6DFK62pgiEs4Fg63LSQ63jeZ3dvM8WVR6EWdncaDt9qMZmqAinCvrfK5j",
  "key38": "GNarS9KrQPSZsWhCEzsALoc9HXST2A4mX9sLa99m1j2W6kKZaFFCxRohqsZF7BgrFs63tHPcSqBnG5tpNLisxvb",
  "key39": "5AeovC6mRSAA8mBVLgV6NkRURCVAnj4ZZedV56rfJucGMWSNK59HHDKnceXBXXupFeuq9RfX6bcHjRRK13oM9qQh",
  "key40": "2ivc76cL3x5C5RL9WVqqGsfL9wM7Lf1Wk99fXngZep8A6of8jygHMnSyMH767KuSjPsr6KzeHgnQS8biFz2eay9X",
  "key41": "WmYSGnk77vcHS1hn5RGaFVbHagq4pDUGVzBQMLnpXdk7Rtorogn9aT6X8sRq4Sh1b3ikvgWqRyFF587VBYgcRs6",
  "key42": "3boe4YDf26xhvS4uDiB62gzi1VuUAT1uXhhLAyhrbhcsGUjMwrxDPpZRHaaBDDy6AWkR3xXaZu3D5ttV8bA1Cgzp",
  "key43": "52ueCXwzrrgoNE5yhAZ35ag4LvPMENMisLSimQTE3DJuLB3UuZW3qFo9sSWmRqC1x6ZJtt59JGeCKtRxvG4th33D",
  "key44": "2YLfQKSFPgP2NRktGrzgHaWBhbirQddiPR4Bt6sY9ZVC39eeErjDtZejAWomFNbFgbKi66RRjudxtruXqxpSQbGw",
  "key45": "2tNXMiAfyQYNi8P5UJHtuyhtCDquM4PkuNYSJowcXGHCzw7CUPF7aDBCcJ5YMyakqby63wTMJ5GNG31YL9inCvns",
  "key46": "dJPvbHndEsRjhKCrifQ1kGbgK3CSCXPP3sqRmV1mdse1kcucbdwNs5bPPXNuyFSyXzfuD5fTAC6VaHMtQqo1ijH",
  "key47": "M5TtQpzJtRW9uN5xS5xoPkNqch4QnRYL9T29Ar2rWG81BzCXNsUHUmzHSvZ3yxr9bYTxzMX6Aiav1DGoMxAR76P",
  "key48": "3F9mq8PfbmK494kWBT1gAkjcUVKPwpbdNkqcsiKqmctSHoKiZ6uG4u4TevF8BtgrbQ343MBSrATxPmvzqf9aDFJg"
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
