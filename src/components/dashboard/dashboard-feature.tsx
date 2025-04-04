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
    "5ZF7KgK5ZHHLsp5jmi3uPfsfXhwN1pZAiDXw65FBwdQSjWyB6KHe3bkszi4dPxsGrSCd6KQBPcHP1fhR6tuN1PbK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3EHJHxqtsp5GJyEvcKjrJrrqfscSpNJBoLVB4Lbj9FaddSWojviG9kbaC2sQEKFhFQLWAKXxNswvqwMipxpJ3E59",
  "key1": "4EskWFcxHXpucBkEWrtyu2d6bQi7yP7XyWpoSSCRPcc8nRwX51L12sgKeyREXxKoGjm4VJvcdQcd4nESRp5m8WXg",
  "key2": "2xkezFgxvkvBTN2LfkuGbUmJgyX32DgQnYGvfsYzSzpupN7uM8KZi3FXpVuZueNncfZHCqiXjFnqNeAUeWXmYPGi",
  "key3": "46zoD9Tv4H6ao5fLdPXwTgVSwYXWh7dAFCWVzuqPCZRxRVnPeUdzXZoiMAXcSkP2VpkkUZqBA2mREckG2U28mRQq",
  "key4": "nCzJcCh2UaQV5HwZQ9Qh3a2623G2SgtSodKYo4pk2kZmxyVm4YsfgPyHJabGakLTEDbACTZfMgKPWwy6RrJkyYQ",
  "key5": "2HZVshSHuAU5LdR3Mzbr1zuKzXZkeiUY1PzZ5fXnJDHT7uuFE8E6bWMajaHd2h9Tzd3X2F2AnoBYphBUk1U9vNYR",
  "key6": "5nyCut4v74XRFrEAQg1kU1XimebZxSJ7cK4ZNd54BQhqnp5U9TchRSxCbvGQaDnBCJ2oa8quLq3SzftTydb9gRwG",
  "key7": "4CdXojdcQuez5dL6zwsqqxkWD7HprW5sNGYv33fsMUeozRgdWeAeN5A4XevcdY6ZPiNueUmdy8S6RUd3KuwjAhdG",
  "key8": "2apVLKgJL4Sq54LGKnMg5LsG4gbsagnqpkyZC3UKr4e4hSzVTWXK2vHMwyrmJFXAK1ugNDk3UuDSBpudAyVh6RoM",
  "key9": "5Phno5zQ8MDNggmvPHgCtyDg5TsobZnTjc6UmQk4GuWmYUeWnP8G8WZUvb41ntT3h7ocTvfxRQdFB4cPyHZqi9ri",
  "key10": "2o3cC3KsNAm8gB3WzqK5kFcLMhgFyuY2DVKNSp83wdrUESekVcKwPh87CKiuNcaw4mzDH887UjQTpPdFGHcyXqSY",
  "key11": "51Kx8SzeDBzdhDrXM6M4ETYBMB96J4jyLCaYpFAEYeC7fdZpAuZZtbuK9PgvZCznVFXpi3P8VGui3YoDgLUXRft7",
  "key12": "L9j2rch5exxV8RSXmY9gScm6sjoW1ZhNLqfD96yYnu7T34o6gXVFXeX2cBccvEq1J6ZmtGFprWbmBH7avocoiKc",
  "key13": "5ecM8HYjnScqsoxmZkSMTu4eAJs8c4ekKbfVcUtdeve7saWqUFk3kkJSomnU8iqDUHWKv9jcYqAqTs7oDGR5sett",
  "key14": "5tKXg937e8RK1XxR2XvZw53iTSkhhXGfcoNWtrdrxnBChJhfjxHFUpXq8SnPorTHGVnLo4Zx8VsJdXvX3GxbYDQH",
  "key15": "4nP7C9KcuRCnxSxqiNw9nqStcjR6TBUEM7ekwEuxBicBCF52XjpqJ7qbdgLWm5RTqWfY3e96emHhAWcCvqLV7TfT",
  "key16": "4WjY4sXQgWQvuvW6mG5nGNqAGruXEKCfMp54munvbBt2pVjTYmDdtm1vGM5jN588ksgi4EiMvZdxKp4BCswF9MAJ",
  "key17": "5C5pcf9XJsmzcp53yZvmLaTvrv8x21ov4L5GLKtfKD6gywbZfyC59QjamkaqXuDKGqNPhhrpa2bvaw268oX16dQo",
  "key18": "2y49VV9Yi9y5obGKawwwMMNogBtWVBfyAqb5d9HvH4fnn8RU88sx7BhMtTNWDVBjgbo3Td1VFKNfZwPf1ebn87tb",
  "key19": "2MqmVW5i3Q9hoS28DB3aozSUimYaRQnJtCGax3ytTUcKpajidTBVEk7N3xhERfGP4ozzEKdhmghVB4nyaKxXHkXg",
  "key20": "5qeNFgyHB7EAAYQA9zcXChs9e4gvttANRya2XREgCe8ZqMhbrSWLh1PwuAn6qX7kUoDxBdRD4jcwpvbZkBp2ZsBJ",
  "key21": "Rvmws1H1EJ5mZf4jBp1VYWoP8Sfni9smHvZwWeK7b8Mhez913Pc3sZBpHBoZnqK4WmiqyB5z8VkdnE9J3q3VS5T",
  "key22": "5GUvHaqjGwsJhQrN2FscsmSYgXjMVWsKZECJyfnaFD4MMT7QsfRAd1BSs9Y1aLnTi6R9E1K2gRc6tKfueA4xP9yq",
  "key23": "66mC4G8yE7CnVRWCm2YF36SCaPmhvkWQo8Eg6exvJFAYkZ8JPKx86qKF7u7r3fyk9bWMuWJyeDHJ9GehfDHFLCAY",
  "key24": "2XB2enHTDTrfgDJ8FanAuCAwy3hXhZgvV6VD2nokuYmJy5QkwNC1fBYARFspJ6XFETkFg9dchfbK4kyZpRr1uVXy",
  "key25": "5p83SqfJoaMutTbMWGPjPiYqE3jnz218SXZ1CTVTxUvfqLizWtDTvk4ngsihHcGNZyzpGW4e921tXutS21wasvnf",
  "key26": "5ZDPvt1j3cFdvH4k1Hep3qTwkhy3DgojfJEPbpcxsipNwRe1a2DEMkd6QcgvRdLuh1k6HmXQrt9FnrrCF78wng1x",
  "key27": "63WsX6PMiKUAStjzJUZ7HVhzuQULoxwKCmEMAXV8g4po47mnrpGWRr8JhRPKUwxLgYtxbo8vBfSb2MwtDTfSmKs9",
  "key28": "9Hpgr7jv8T7erdKx7G1Njt9qBQJCG4ZzFYY4pUbXQxDYwGK5PZYtSK13kP1YLSzj2oTZyhLXv8ntkyMEJvHGhSb",
  "key29": "38WrHRJ29Gqz1Gcvq7x2dXJ1RvNUC7cust98C8gcY3X2FhgsEpY7JKEUmWp87n8zcfa6CKSA6uWWtfsdpcejyPLd",
  "key30": "5vwAkxdNDNYN6WAjsUUpb69xVDttuDeaEanB9gQHiJzbVfPV2mPPyo6izfJQzXVpeSHmpwVw7WvRpZJW4MHQoFhE",
  "key31": "2k9XHJScPySEytVVNUMQD1JZcmVmntdLsFRuLYGB8F7TtEiNi3zu4LRXcuBiEZHNsrDvRRiHcCmmxfDJTzErwNHY",
  "key32": "53duAwbpKwynxkCdYck4v1q9Pd9etUjyjifAy5wsYLBu4QvhxJF2H4D7dJBz5iVZpBGCKGN65Jx6ZaTsHM95gF35",
  "key33": "4PgkGZ5GMQyXYceTpUsrkk4ayC46Adanz4iuwUMBC6EJXSzMcar7jj3bYGimeHrS7AyKcy4kM3CNYb9hb1wgT3Nb",
  "key34": "5xxgQdm4NCovAwgXeq6dsXr62QpFQ7vAnUDq8kXdAmXBa2oWzsVyvpgpq3KyvXn6ZG6on1SR9wfdtLT8QcF5yzY6",
  "key35": "55mF6HAtbjJi2TPRETutw5kwqkFLC4CtPPwYUVKwX67zQWjcK9vS6DALeyLZVZ8nitBPdcNntKyGNwcract8siaK",
  "key36": "5aPKQEbaxqFp16j52Um8RnWin97K6g8wBrwGmLCBz2PAdZWgWxyo7XW6i2YmxAwfhKfyAbpS3aHD8SdXA8k8zbM1",
  "key37": "3yKrzmWPuHcXVnunLMsS68LyCPrHGT9s2BD9pZYNTH6AY5WsAEPrupLpMAxW1YdFaK8Un5ZdNXHbkhUne3cueQyz",
  "key38": "37pEqJxa9GXAyoG39LCghrhderPHH52ohcLwb5zLfrgJepqq2T2vmX743RaPUPZnYKwRtiukEM3Bm6ExdVjNgNFv",
  "key39": "61hn1FSpMLDwTDsU7SZywrqypGFw5nvG25nb9ikqo9aV8RK52Sa5ZmifuHHGvtpfzgu38ydGJrk6PKBYutPN8ez8",
  "key40": "5b8u5qfUqjWXVzFhYEr9StQVWJFPQRUNV5fyFKoWjqGUxwkrYjA5pwhGaUnzZg5QC9GJofGAH8rgk6fDWCbgcBw5",
  "key41": "4vPVT7DMu4zBvmtUd9zJnMopkWAnVoHmkFfRYUv8VS94fJtp1SdMoGDw8ZR4igr91GuLswhUjMwYN58B7MCP5K8s",
  "key42": "31YjTNZSXaTbMkijHEoJdMjEfiioyyj18XDo29d7cmE6E5zwRGhFVNF9yidcuiZ5E7JajGRRLLLi3UJmTBg3DjAV",
  "key43": "4qthnNnSc77Da3FLidwBcYAwZr4HbEE2AE1T3sfBS1X8rMgQdYWAn7BXeFKHdmYLJjshz95G4WcWxY2RazeRqLhY",
  "key44": "628e5PyH532dHR9QKyATxi7bHHKr7m6L7jsz5VjpZcMaUBce8qJqoWFeUXHGVSxSqt2jFfzEf5LxMvHPH1UHqeTX",
  "key45": "3m9uHoAeKpPSK3uEX3qTDtk84wiGr6xpSh5W1hE698X6bfrdZ61T1y1tTouV8W4ywtTRpiLhU5unATjKE2Dz5UZF",
  "key46": "4kYLi5newz93ZbcPK7wehd9Dt8XcFfj1qS9VuaAVm9Go4xnjrA1ihg7q8Wo3K1ownQ1u5tibqBSHpm1RvbcLA2Hk"
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
