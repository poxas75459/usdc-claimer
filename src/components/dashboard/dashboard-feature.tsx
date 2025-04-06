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
    "3hRpzE54QZhn2KxhV8MPSQFFWiBQ9uKjVyJdNphfHUvjCXsBzPNjgHxzM5sNZnQdBkETMmHqonCwa4eEZxzWAuEo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "56K6YBXCB3vw3g8z21qHguxFV8zGXuuv97ArZgwR8wa5X1LCHCdHSMk96oAcVZV4BLtQzQ6KaBioVvnsjv8yCRsC",
  "key1": "3nhour5Teu2w6YHwDKnJAgjHRFEvzhG3LkCKXe3kvgnVkXprCHMyGkFNPkhLyBnoVsEfGUFYYxM32R4HJLtA3mRc",
  "key2": "49KZGR81fCKmPit5nxSVW8schJcXRptyQzN5TnCLLDGTwccDpvdjA49NqKR6hw6HEcVuwVLQmnSTTVaMsjLYPAp2",
  "key3": "muf7BKyjENrUwB6H9oGfXmTi57jy2hT55NwVWoFyChS9sLpUhcd9TvRGSGjXBBSo9sm5oEVGHAxhGgshaDyEhsv",
  "key4": "XKnYp3EEWGXtNMTaHqMpzs9cB8CFZ6M4yayP5iL3GtFoyxJyvY2bkKoZAp9G3gBonNZLLYyNyVSJTFNw25KCtVY",
  "key5": "B6Mk6ZSUhC1GeuUo5Pic3HAqM7ubVq91hpsgVPEwvNa3MBCFZqHvbB2obzdo56p1QXoS7SyHQNG78TarVrVMeHD",
  "key6": "59rbdPtLpHoD6DxoHFaTiKEZNVWMoiqWKdWe998M7rCMKQoaUeKSQmEWx4TtSPtLxmCCiLPV2dXTG85WsBSW6vNF",
  "key7": "5D3vRmJZUGLrNo8rTbNpnvLQmnqL3igarXVHASmUgJ3nwYRnZxbwF8f9LXDpCRv8FMS54qmitQ4g47ideQm41bDh",
  "key8": "RDv6PdAkeGQzGUb5AsitnYKmJ8NQmrkScXNfniSnRHt3ymwNSW2zSBAUKbJ21yF318vgnFhVacCwFvarM4Hvh3T",
  "key9": "4t5fiwQoRzYBhsioVdrDHVsdKfuzfNceNA6yHuif54gjzkqK9fTWwhE5QuLG94oCBHAcNjNmoC3zqvQCB84QAxZ2",
  "key10": "5TsGdoupB5Jq4bQLy59CjhNEp9mQfH3yTJNQvTZwv3Mp9K864yhfZrUhP3WBw9LthZ3VnM9V1uy8HMzwh8t6BDHL",
  "key11": "5Uej1sEU3DxvsqiKfXQfAyVUd8X7bHFuUGrQfRyW5JA6mTBGpo9bqQ5CYvjYVXChoEhH6cwHZDUM6mSveJgjKFzS",
  "key12": "owbkT91xpoKyTjVR8xxGCUJYycyfhFAia8QhpZcbKqxj5VrPHvT35nseihCbPnCxb3QfQ2XrcW5FJ5hZWhC1R81",
  "key13": "2HZbx5nfhYLNYCBUqGcixDxWN8Qd7h5QJ64hAXkdBUHXU4a4TzZQ8pwvVj5WsgucfANJx7AZdkAqKF1k5CoPzqzq",
  "key14": "4BLbrAUv2vF1Lw4m7WHfegs98yUGbyr6JtqyqAWMvM5f9FUKyRXfvFTWZGjMCwg7GQXJj45nvNXw2FHG7Qnpu5xj",
  "key15": "3YDE9f4ffTMFLphgeSmfE9A3ATyc6giM3M8DWKAqY1dTkkuRwJs23kVHiUxoPXTcBpL6ERTjFYh7eAyZNVag97g2",
  "key16": "2ANAAYFydmK3RCecFA8JXYBp2rayYe1jEey2bGdDD9GSsp2StVwy4y39LeFJkuPauwPBDbigYvBtEYrmR6nA78ks",
  "key17": "2hH81DGCBu8DFxPBiMpnWzj3tJYXHKTz4STakCmXjify3TP1KBvUnSRNQJoM8HpvSBxn1JgrcNg8vTc4yzKpj4Vn",
  "key18": "47BsCdmCjpRswfz9VXYWEKJW2hgupgvXcW3CYu9ZKZNyyURWpGKDicPrt3UtsHFfFEiKqd6Mcy58SAMNBz2m8hr1",
  "key19": "3YardWBUZjtEc7WwF44Ky5XpGDq9RxhBSoRZfzo6C4W9bhZDVJkkMg83SUHpvtt7QT7kADjDsiCwaBohtT5kJsYd",
  "key20": "4yKD4x33B7ykTthMP3AyxsCs6V3PHhaFJGqrmYSauvkQ8wHUn8QNfPFBZDxAAwjPwKwntHckdhsYjcf9MZHM1dSq",
  "key21": "642vfpVSsTQ58gqB13Q1bA1G5EHt9DCjXJbDEkuoexaJgJAHLeWR4WxBnC87RJ98LmEN39FUhd1yjiYcLXucbrtg",
  "key22": "2XRFzJ3t6gmktt9WhkjJMEhGYJ1NxfxpGUXHwYEgak436JYYXs3dDdbL1y2B1uYNdj3zqxGTjDsHyfSfyCzTTHcn",
  "key23": "4NH7iLAkffBV9gSx8fGWRXnKe1Qz1FBFjSJtZtkvuZ7uZJXv2rMSNHqQQHwuN6JCTVrzDSi9dDBjyiwLpVV3CQ7t",
  "key24": "5A5EUTDQstqr5WmmYmeJ1VrEZr744onUAgEspmqGixrkrLmyuwGabaeq1Ui64kgCrZT1EhuPozspRxDCFqDp2jUA",
  "key25": "4QhTqiZCnzUpfLdwMsUUurPouTxi2HvdWBthPt3hvaHBcFnq7DVH3R7JCLKcNFgxz9gaUQNgAZidcuFZztAHEAg2",
  "key26": "4kYJBr6FLEwHXN69aD9ojp2d2segVCuFVHUV7xJrPs7cg2jPz5p8ZYNZgUVcu74MMDgDXPBJyJHzmjBszLUXzHC2",
  "key27": "EcXa6uu515qwLSixs4BSyCPJXbXveuwBQQJvTdk5qm8ugSB3fp4Twx3vTE3L7CcqjZnjDP7FP3ViBiYpBnFLcdA",
  "key28": "25aayEtqdfi7FBoCigaGj9NJeXdH4t58HQcLu4UXgLW5Sd9EF49axibuJ9a5hbrVFVBWN1qfiFWEsUuYjKsPR2pY",
  "key29": "4ySB55m2bjbr8PmQYBWiF5B7BcsT5dADeurf172soVB3EV4j2fKWjq9aLKmn8FHcR16T1RF6j5GQVWTtb6ij5JjX",
  "key30": "5sJWbzKXAAhT5qi1j4J5BrgfKa5rrTZpPVgNPoCa2J75XZDd8w8AE61FPm5eQ7D2zp6b2CfiPmDxZ6FULvD43xaU",
  "key31": "39rrfQ3djUzngZMhi5APd6aM5HNAwNjKr5kFZojTxY9oXRXuK4Yw3FZDUaR4zEKZS3U3jr1Ppr1jbAzwnCLP8Gay",
  "key32": "3LvinsMp28fCPd1s7Q3626srxddtNMcforwYK43MLFiXPyF6b2hWHiXMjBjxd1m5f8re4VSF9VzyGpBaRG8EP2R3",
  "key33": "3E7g31btfU5hmA3a4X6e8gfhmVSAkJBSYGcf6YpSgncg4ejNGJcCbuxtC78ifpLG2yF9TgowMgwPrah9qsBaAHW8",
  "key34": "2pNcAx9cpaURzge6SGnkvdsgeCB2Y2UHFon8yAzre4ATj443GGAMDAFAt3gt9KFrY2yNhrdwPpwRFb6auczGtUF6",
  "key35": "38yV2KimfpoekxCxoBNu5L4nYfEPp7EDWXYwc7naCc9zFKdfRBLN7eRqHpjBaYK3JcqUHFv2XGCpucPttYtfSWGh",
  "key36": "eY1FFXWWQb6hqcdc5EeB83zANiL4fLLcC7WygK9yL4ZogHhys1MeVJRu9hEiRrrh4tgZ7jbBm3o1RoKdue8Zpbs",
  "key37": "5vnTsvb7DyC49ZHSUVDSyzMFVHTzJrzKBeJn5xJpBf2ypY7w6cobTkrDyGBoJGN6vcq7QU9MhY4Aysc61imToSnw"
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
