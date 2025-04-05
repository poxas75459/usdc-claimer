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
    "2TCqMJ7ZmNhMwXBS6iGtjgKvVSW6JbBj6f7MoBSjHB13RN4d2VngYDbzFzjtAceCYzpKr1WyKUHuJz32X3L2LADV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "29PQVAE9R92PbknAv1iy5kwKPppLMKUcXCQDVwc75tS5Sn1wKGbBhxtJ7WmmT6bp1middhUiHmG4J7kTGXRe95bK",
  "key1": "2DoZzWMYUaDkSoSkqGizf2CNKZkEt2imXnacQ1GKyNzfMcXeN2fFfy4qqU7SoawpcX6NYazbZh5JgFjSgNoedL9z",
  "key2": "4KM9seVSoSCQJcHnNNBXUxmnYHZW8cB2RrUwBKufqYBN7wVNzmUgocC1GwKMxgnubco1NNPbEELeHeZZnoBCNv2Q",
  "key3": "5KpD173hfY615eLx77yd3GsNDnxEkjYV9WaZzxVYYE1fehPREGghVG6xZ2ZXReYXWse3DMnKZcFH6LxfkGpfatLt",
  "key4": "44XU8FvSKysV7wTWsMS9PiBGGrMGwCNzJa88666DCbKEWgNYo1iAd8CJnizMRhrvskfv55L3uyG5xeaVryKrroYt",
  "key5": "469SeJxgvRQ911VGut3x7aXpFFspieXXvF4Xb8JtmQog9oDzCSXS5TJuubXkWcpNxaAuEvtBVhSTK2YjzT5FpQTH",
  "key6": "E627zkpJvtyAGMv5QLYgCyXQeMsuLGHqWBxP2R4FjtbyhxeLSWD1H4eHw5eRTQuqULdMzMHQg1P8MURk8vfdvMs",
  "key7": "5iRnpbY7fMnuDUXdCwBVbA4s3jXv2oz4aYrUQejvfd1ue5Qf8aqARtV7oV6S2WhjUBmnNCktN4KYbSnE7ZGoTNCB",
  "key8": "4Z4nDdhcch5AREZP9wmuj8bXFYCaB9fz2JD3hZnQsMQazyHnbYD4UnLKDF2qCAxLJYmHukGC6dAJ19gh25s5u7qa",
  "key9": "LfiAjQLWNVwe4F8NwD1A3U1q5Zu9mL9HtxzYFSC25gYkd9xiJrkjTfoR7rbRoSmJJ3b6T3C69vcCRQF7knwyfWP",
  "key10": "5iCk5yCKDtuELqixNgEW6BX8dotumMcxJezNqyHSxhCKB42TLpSAoTZqRjs3CjRJws9PkkZeb44US3GR77ZaMYye",
  "key11": "3EBizJoeeiriDm3BvC42N8biLcspc2FX44aQobm7fjjd4NME3ESZc1AD1Zr7vjkpnTFCUufQNawzQYKBEECfT5WT",
  "key12": "HRUqgFX9HbR15CatiRWpezmns7tvNaCxjUVFujqzane2sJ767K3NALzPtzEaMxV4vCCa8MPpdwaX5zwp6UGydvk",
  "key13": "5K1ocyi5JodwnsmNrXcy1UftU22MuCd6R3s6TJFybXQcFGzQduvAURc4dK1nWEi1i9VAmg8CPVYHDc955ngLkqNE",
  "key14": "2n6eoXSrZFW7gmYrRb65jY9jYtEoTYD2e7G4tFH4BqkwdheZ577r7kgrn28v8tHHuR4cDVGZNFHnDonavoGsBVks",
  "key15": "25NNE7JkCULEjEtE8y4QRywThh7QRCC3VDu9P9u6Eqdy6D2XkkimPkqUPbRzQBGArZ6pLzWDZWnkNPHYkd15GDT1",
  "key16": "2DMLGp5b4s1LPuxmkQRyefaLhGaZMrQQ7tqjQ1Q6yKXnhsSQT5LFB6Ktj7PjBVCNoYJqQpKsTHNpCrRSYuMKu3dy",
  "key17": "3e8ujrR85qBDMu2xYEAc51MafquLcsUSNGZgP3NoZn28DrEmREbt8QkdNwZV6qY6Jj1JZuvVsspbMmVfyQTBmcWz",
  "key18": "2us1BrZcDNb3qp1eHPQndq67d87YcusZtjT94CfZZG4zu4KT7B8yRXpV9YqYSe4PHVh6SDa9FCkffMuhair5bURa",
  "key19": "5fX2Xg2xA4fwNLeFiFZSpJLXSwhydBkeq9ei7sBrCnpGRVCY7ZC7j3s6zft3bAi4knxQNbzPc5NCgU847MNaFPpe",
  "key20": "4dVUjm9fHqPpSBMAPZ5Ht84kTh2h1A6hq6tqrY44TgGzPEHW54b8WNVHBwXbvBsRgNxZgjEptNZ5paKm4u6emVT",
  "key21": "3dytB3cqF4b3uZB7E9dD6oYLZ6fmj3jE5UFp8asEWTdcV4URTAQSnQ7RqqzJJHpZBeGzNNpbXwP4eUBJ4MSu8M11",
  "key22": "4m1UqpAsq5GTbUpr1R9DAh6LPqwnnGTDKdRj9aKDfSVY12LXAMqj2v2qc7ENCWQy4rTTeQ9HQsaoTqs6Q3yJoW7E",
  "key23": "4sbPB3pS5QCN4to6NRxuqvcVed2orqV6MiF5d38r7g9AVdgFehcvb4qHUskjS3N76G9HzLJZJdCnRLFMhyNdwkVE",
  "key24": "3gmdz88d3DeJLXYNmpF4vWC67NNC8opKW7VEixrq5YESwr5rezE6oe3kyTYbcy8UWrqWb3GJz27mWRskmovfGTXo",
  "key25": "3Gzz8GGkRbYdAY55BK4GZ3feHakCFeMcG41oSJdRMBqGZnPBu5qnibrjq3suxwrviPdZin2SxND95ZGKS6z1e3n8",
  "key26": "2aHhPDMFkcZYRmYiGigneztMG94yy9vYqZBmiwurTFCVRffJopSzJ5qjxcVqaf14hTeMobiDKcRPCQnfWZzTPEqg",
  "key27": "6nw2dCKjS392PP4BxJaBkPXjMkERKeRq496oMhpATo1poVif6k2reUi48HquDLLa9mdZtjUvregxojcbo1bueLq",
  "key28": "UVr5HGU81dpt6C9K9PBDieRYv69hiUmvuTzbmHMhJTDRAX2RzuNsyA1tEyZvWPhFcFwQhkvrG23K9sLPLcoU59y",
  "key29": "5gchUpRQQ3jsVtaL6XB7MY7y7sAvK6sCTiFhnLwYQyah8cPkk2eipkZr3Ad31rEvTeRc7bsGJWCxW1fhknJotEYq",
  "key30": "4596zpzvTn8XBGaKxkeEGst2VJsEGbDupQFnxUuuDVRU4eE5JUiEopygmGroeNXxh97UvQj67vmxKXDcFrFhvrur",
  "key31": "3AMdMo5vbyGmAuP8nFpUxoAj8pbkpLRxPes7Z12FwGdjTqo2rZd5abeHLKoj3pK6zkiRC2etQwTK1NrFPH4Bj3sN",
  "key32": "3WK7NV5G2fcVyfpEoSYRoGxRhFwacoPXwFUMg2kZ5twHBTddbfcByfCHA9KNg2GhEPTKC8pwv13BXBEutBRdkMFB",
  "key33": "3oFwsHmX8tAmWRLcRtjSHUNWmBDYJPHozqtjtY1wrnpnTEio43zZfgGYF1AB8h2nh1iWKhYhy8MhtU1mqkBtYWJe",
  "key34": "2SoBCJhmUyFQo28DthmCruHKJ38BMfc19KVXmVHADH6cS6zhJQ5QT6BdEL8ffuJZHjuEfagRhsYvrgYZ4wwDtCex",
  "key35": "5VpxvrXa8zTYWEmHBvkZKRt8A7PbP79tkyR7LCShFA7EU9BUpjnVCAnznRys9FCHELFDxJkXJ3JjvrNJcPcFi6Ge",
  "key36": "3UKe5qCUNNPf7KZafpX1imUi1HH7xyFnjyEpxEG8sRcy8WY1bbCgaDk5eig3r3AyZbJdkqLJ8smXbecgfuoECG78",
  "key37": "5DLDk9NSSsAVJwbhgJ9FhRc5fS293sNKeNNgqyqt4yNYmm4SizSuWM6NBWJccEywKjES1JPnUeTHpCLDCfL4Xqpv",
  "key38": "5n4wnwco8ZRfbMHG3nFAdfG7VqWPAh4nL7zN7rJAqBgBkpb4BctYZSYYSDy151xGsrotXKPKrm3SZHPizsyBAaex",
  "key39": "3dW1tTr3uJJQ6shbcaqUo9cLcJXbSHkJn4QHLvk4wSvX6LDNFPH9o1gQY15fwz4Qz94C29AXfrqLRauHt8JSKKT3",
  "key40": "32uemUkXarHT2sKryzDAwvLVvRK7Z2ABUcdqKGdPbHmfomwoc2dRcqM9vNhbwkomoPnVU9YPsL3EsPjt4TVBLNst",
  "key41": "2dfgbRmRQAgCaBLK93VVjbFssxGu3Lw2HTHmwsArwGjmNq1NTrxct2r8dPZUqMABYM57Mrk9g3DqvDJXEHGPnCHE",
  "key42": "2VHxitWNQ44BESXEnQHnAb4YUTYZ7nk1Ht7dVgXr24vJpui9eC5Zm3LGBaZqUfUhbK6KDEe4Ggi2jzNUFTEVBqkJ",
  "key43": "rQcW2AE57scTUVNxBLGW8McGhJwHRjaa4C3QKekdNRHW8UTtYfb6KBq5okXVzkAQ3V2WfET7jwgkXGxLvCLjKfk",
  "key44": "26XnAyLpatwX85diBnhhkG5eEtEwd7VbpWTcP7YFztvoiaTavXwPyQwzyrRTeZ69FRRMqAXpBvP9w4eA9shDNC1n",
  "key45": "4iTKd3XBZHEbbgNM4X7uyfcomMsqM9RUtf7pefNTvDYqDP28MGDMGJPKnb6CdSmkdhcBgBMjFYFrj449a6xbSEfU"
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
