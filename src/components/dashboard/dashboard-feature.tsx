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
    "4XWno35RZDDQQJaUKQuYvk3Wddurat14kyF9DGTu6KBjbeknwDq2bTX5wqQbh5dM6qTKyZRXVFd1ZrgCEWDgovGE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5P9jLsfdppSwnfCM3L9x1WJG94xZdpYdHrJWUAxeSYLdxnNFGSPhxioTFkoW1LRkiuQwh12Xhdn3JgZhgZCgqCmN",
  "key1": "3ZxxL2kESyLhQq8XRVqp6Crc1n4qXa4AczVVu4k9XWibxx5zLnNJKYRaCSf8dzdUj5aZUD2eHDmBULuttw1zC3s",
  "key2": "nvLtvjsmC6gqA5oXRsmEo1zEqbrhq549weUccm1LDSmN4tEasVbQaZNqskG98bPZ8xRrVjvknvx7FzRo2c2i78S",
  "key3": "5wzCL6WfqiDNsDs3fV1ToTXjwyiQx8graf9ZD8doYG8tAv2Ra9kNpQkhMm3Wkvbd6vfYBWC4KAx1vhEeCFud337S",
  "key4": "3TcSCShc14PotvzazxEK714jagb8DsQTLWMPaNzsNV38xVtPYQYKc6aBG68Jx7TGDvDJBzEB4PfdUnnBnwUL5tHY",
  "key5": "57VRtowwfDXiQ4TQTzb7h3c48kNkMRAekddWUr1pEoynWuc9ydEtRZR3SfEJ2VgkXCXf2xXHJMfhGA9yUD45v5EC",
  "key6": "5tf4o7EofTxd2Jf76jiTdbWFcCWayrtef8Y3wD9zRMh8uzQbnRnCCyMzcRjKiA1k19e8whvXXqh5JsdVZUSU4twX",
  "key7": "2U3PjMyj3ZX6Sw34dt4Du6XJK7MZp68EQm55hN84b4FADgznpBpTw2yzFDpb7TYiEK6BNWasZUvBb9U9uyuhyxiG",
  "key8": "39YFejRFzoZijchB691N27kTvoxkN7Pz9qUi9PfVLVGD2Jvrd3F38gEEUPgtcDs7ezVUnNazpRfHp9Tgs2T9GtEn",
  "key9": "EEvMEkUA2qcLkv1v4MnYFJi9fEpEUXf44HLRYARC9yhB3vCvMrZp5uSC8yz789Hv9QNN3bsgCdsSVZXJTEZ4rHH",
  "key10": "2KMNsHLEtSm6vr1TuWeTWWdynN7VQSf5eSBKYaHHbpk6YjBZ2nTp3wem1juPFxETCDR2exdoZdaXzmQtodUbuMQP",
  "key11": "2ov37YatLpnaGJEZq6EmeGTqQ5uqgDAENsYkeijuqJLTGYp9JhSepnniDyfbH8M3TQTRWNfwZoy7PYf22avtiVJN",
  "key12": "2arA4wxVjieJikx1TjzU7zsRsDeJ836PP5hbzJeeQPUBKncQ22eWZvc1xUzq88BdbXExpikQEPUExaL26f291oEe",
  "key13": "5nW7MPxHMmA1e8CzzEcLzcnk8k51d2t96QgNnhRT6n7m4zB6DKHeniDi1bCAT1hpyjrcs6cPf2UUaWAij6HhBoqH",
  "key14": "3oWT63VNPgwFZF7i6HnwVx2QooxMeDRgMbdAsGHCwtfqvFk1UwDPNteAD2fEv8b62VLaq3h2AAA7fQUiTvj2H2sJ",
  "key15": "teb3g9Gi4gUM3iLJUA95FHDBeSEPDzDbManfAf2ciZPJ1ou3yY2euMtPqqGbDdiqDcK87jVKReff1CeT3QHwkho",
  "key16": "2tCWC27QoGeoWKneXZKeGtprstveSvfoP8vRpN7GCf9qg16gfB5ai5GRDCFyftDNCkfq1dYHLKi3QwC2Fspdk8ST",
  "key17": "4VqYHLoaUSv7QUJbh6yKit7kquLranAT35cKLbD8xremRuCF2vGxHiCYPGVuCCkQLEVzqeYhpjKeLycEb5XsG8ra",
  "key18": "i5rBec11kWhUuVf7jYDGfyc1imNN31ozCAhsrywVNmw4hARKuso4XmfxsysFxKWNMiddN15A5C1fREDQhaeHEn8",
  "key19": "4Xr17AAvqUUwrk8x71ErkibSCFVqr1pWNgeuyjDCbP4VE7cFMArmTGUt23FiucPE72ZkBvUcgYUGFgVoS3RKGFCk",
  "key20": "636JJR1pdXMdDU8EGMsRYTcUzFSxemwTE3CwenVo7kGGk3wmHWjorDADbDtCD4TNLwioak3SiF5tiw85DtPLMHZ6",
  "key21": "4xUaojKMsG3QWzDqLxuCzkziEZnhe38F73gbdd7XyqDmBRo84EDKNhEP4eRHgtJByHCjXVLLuFAEMPkPttAkEcz9",
  "key22": "5dRkDJyb5R2Hh1jmqS82m9hhgztpAB92hDeoirtakNPUZhRRkAXgtShEhmB91G3D6WdAs4LKEUuiMviszgrAhPiY",
  "key23": "4hsmVURmHUUuXsWwZr8X6JybiZp1TpsmZ7p4wM84Ux4dJk5Mf1hHcUZ9FnauzhFjuDXceH6kboLySr5JNoKG41az",
  "key24": "3egfAMUK8kP4YuFTc36v7NxtJoGNrp2wihtYAvewRNWje3JXQaBKEx5RXfpkCdSKGVEkWF1TqeMw8NvbVfKXgmp2",
  "key25": "56B83AbayyNveE2vMJ4W8gxbuJibKUqEUJ8u5wTYcnLq6mSb2EYsrH4gitk2RcNCqYWb8qaz9ojkRChuPb1hi81x",
  "key26": "2GmDNU7SPR5KYHFL3STCaZXicimDnvTBoYz54FRejarXXmgXgMAAx3z7dyRfeKpaJnTjnpFefNDqZeCwdGVApjn5",
  "key27": "4RSMm9Y9K3E9b8JoJgH9YtrE5X97v9aUdCw3i76tHHytqNoTpgTzn7Rhjtsw4A4PqK43SAgv9BuygGKfPFX9hFaS",
  "key28": "5E2moMPY7WgUytvcSoJivfrhwyfp8nEFoPtq5foJDg3Zyqd2NYxwZu5oqGjeek7EZc5do4TAUcXGoF9YMtx2wZgX",
  "key29": "ogZ3QK37QZSAskB5tZ342H2AtDh5C4zwr27Ha6u479RxKm5rpK2FCxTthT9YrMaZ8rLDJrqzNTLn32px2s4h1W8",
  "key30": "WyaZtmzcHDEUnMA5RoN4dwfeN7cAiJdKdkMyoMfa5J7iWLe9ZBABPzjmJrNDCL25k2Ho5DUFr69ytp4EUUEBVqW",
  "key31": "2c5AH7KRvEoa7iJzWWbRcuJbED7XyHeP6JpFmPcQ9avj94aC53BW56JdfaoGbDQSiaR5LJWzRdNXEfpGRC2MNXC9",
  "key32": "5BysdaHKirGYc3SBakVmNeDiH4pXPcgqUgeu5CFuYTJomSd3iLBZ4nr8dvnPBePz2gCAzHqsmvp3z2yu8rhVJqdz",
  "key33": "5GM26n7uiyxz8gt8mBGhfwRNDodG7EZmTrY93347UQoTJEPtiSdLY5jU4pTg4BiF7zrm3BXAvpgLQM1yJCbo9kV6",
  "key34": "5JY1bB1eKn9VCwqtpySd2N8JF24pPKz3whWVxkHrUj4pMJZ5ERS7hZGMTuLV1VfnvQ4nmt3csUFHyFGc6ZmLg8m4",
  "key35": "jXTKPsDwH1WV9pvqwAuk9f7oQ1w2aSdUpR9QyPHvDRs3ecMrA8KD3utdG3Q3YwDkngpPLng8WxVxPeSig9Gifh6",
  "key36": "5MdwaGqrjK61NoUizeYQ15mX2tA9fCPurvDekRx3uLBkSgXV7taJxmS6xk2jAzPDfxY1wUofAqrTY4q5YcxFNhFn",
  "key37": "47otZCTdc35BjXjapcbqNFmu37x9jyMr9nKZdL7Rrkwb9xJbkHSVSQauudDfapa9LT1vLsToifGzff214QWrq1TY",
  "key38": "5owrgMiYfTznpXTrvwvQuoXqR6dYHwARcXxraRbyA1NvjXWErqCZWGCo8R3FWZV3iP8xg4YYxzmMF16E17sJrnTf",
  "key39": "3FLRx1XubaywBZUAFrdt3GjdyEfH1YntJo1Xq25wF9YmNHqdBzGAqHNhkieg8Nqthfb4oM68Z9gGK63A1durpo65",
  "key40": "5mnp2536d4wJDW9LcUbBA9LrfAfmN1Ai86HmdtyHXEo5fCbj2wysWhdfzPGEAzfdSbDiuiqRWwnCZ64F5ea5GFVv",
  "key41": "tDMNWQpXekL9JFLpCeARCLoBr8CtvBA2xtKXZQWo6APVpYNEnSu1ZxuLsV3NWssmPgrbHU7pNCndfJtWJxPZANY"
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
