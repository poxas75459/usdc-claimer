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
    "64AzHic1QekB4Ta33k6VYFrd8ftiXjuSeNGbfdDS9XQYvBFdRA2Vy9UuSigEgsBYXQnyi9bC9HgrNvMSiLCpuPkA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "49bDCkmM31qX4q6EVAv2w7M4RA9fzGKQqsrooayQh127j8FazSjtoGhPmJvpabGRJuEfK7B9qbL5JZJ5raWaPf99",
  "key1": "4n9GHo7DPHTff5qo5dkozBbahYPrnHodYUxvaozvKfLx12ab4b6UPiArxyNY8Xim3MQD6tLkCsmrX9LNf29741fr",
  "key2": "J8sJtg1rLUTQ7xfdG4QSHuoS2LFUz5XTVmjnzZzwQ93pDYJ4BCPLDpTpsHc6KLkXffeTu3Pxdbokr9oXJPSGYst",
  "key3": "2maMeYxvNKXPVjxcBUshNRekSb2YyZ8u3q1x84x2KmDpV2Wmiri5BvBfAGsS5XArasNpAZ3HZrZB8vj9sPMJRqrM",
  "key4": "omKnHybFXozDbxBtBGJMZeYHmdSpNAW8Tf86Hy9aErve4V3pDXwfAoWSeVHpH5EYdMQy1kD8Rg8EE6nT1SPjbde",
  "key5": "4C91NTEHHCJCueaxkgjRSZdYQd8eKnBFCCCXSq2cVWUzego1LzmcLqPqMEJ8xmAEQKzMXbNMaBQ1VCVLkrbi9ce3",
  "key6": "2FvsoCWGfk1K2rR5xKXGhFBG8na9N4KXeYVvCxx77y1AKyJseJrZ1mp4TSdn3k7RYxBTGmgb9jnVAwsdjubDQyyv",
  "key7": "4HQjCSZtCa1oc6zbKHQuY8hSoDBrxBiadhbTNRvrfr9txedVr5u8ZGY6QrEMuT14ZzGT7KUHZbfawv8GKQ2wxYhv",
  "key8": "635XBatVeSQKfQchzTJfUe7QS9dHyx7WFkUKSGkJbMNAZijXSQ41px2Y9JG9ntPjv7PVz6nshj57uRHpZoqBkUY9",
  "key9": "5NWwttuSejcnZ5Xt8K1fVELWUGdEVvnSPAisiCpR1VV3Vxyi8WYpWnhJWvA9s6n4jbMX2EtHakGV75F3iK6LbRQk",
  "key10": "5B4r4PFfbabHBWVFXGk1rDrsC5a1cuPoxqoyXuZEeCi9Pz3eLykRncSU2fGtmswdE7iM7B6UNNuYN1QvnpFyhvLH",
  "key11": "22jNpRke5f4r2ett64dYLWP2xKQEgVwW5KVX5hVJyJoF81GAYCbv5o8WBsBaGjDPbsAga2GmNLxrUEbEPwPxKnqR",
  "key12": "2HtyxrhqZdu2HEtFxyrdkwJYwiqtg6W765tFd3uB1m1FTGAFpuN4Mpkg2eqcWqygqGr6ZKHyF62y2Qktdu6ehjHC",
  "key13": "24E9Zur6XF29pGK1BUfuzkQgRfQ5CxjLgpjvUjhCzopRKtyxLot3ACbZWS56KNTv2kKh7Z3SSd1tpp16gc7ngVud",
  "key14": "4x3ghWNXPKKg87pijweAPVWoXZhfhUWQiFyY8nwoxe8siW41H8suLoDV3vy3mCDdQrUEzxArJt2PgBmtdcxPWGX8",
  "key15": "4VQmAnwzAgfjaqzmdYsctzqLQQKL93cKPGhLeJgzr3pBKMkVXzrHpXNek5DuFFeXbibVtz1CezMsv9ws2u2qJzqM",
  "key16": "3JB1eMZgL1diyeWRY3VX4XLuG5UYukDitW2Et9MEJ9MiznbZrgRzZbvVQyAy48QwaHMRw6JXP32jzg2qrcQ2Rm2P",
  "key17": "2BYcKckshkszKALuYTnF7GqSrWF735QJSJziQ6eYM1C8s7rysGnehBPzXF7C5dV4fkWfM217rHAGvTSk7nReGGD1",
  "key18": "1ufrfiHK2b6TiKrb44pjebrDbj3SPaGoDLpmqkruq4unyGyijJfwmSEgvWrAPaLfZQV4wuM8e56Anc9K7EvspKr",
  "key19": "3bg1w7Wxj5gYyY5GhWWxPiLHN9hrgrMzyPofCXat2MXm4krteL5wdXjv7LnBsnEFXak5wL6K5NW7xSPRbrZ7Nisu",
  "key20": "2ipgrL48ixT4W18Je8Xqod9r2ARFwiaQY9oy9p9KKXeWeaEU7xnbJerpjSdqCbB2ZMDiCx4ZGce5sJAemCd98kE7",
  "key21": "vifV6Kngu3QiiqHmpYmcsKazAtiLwyFQpfXKUJSLE3J6oGZGcGVPedacnZ9WEqnTcr8ojKpqP3g3AByb4Lc4Siu",
  "key22": "4tZXMrcLqu4m3qAayVHJvWimofe4ey8j4N2u58QhPAKcZdZcTHqNTtopiLJS3ivSyeW5RFsMbvR3duAc66ZbkMGp",
  "key23": "5DEFX79Vot8Vuab9YtxhcdsL8dHE5rLMMmsUtomchoLdj9DZziPCYjYBB6pdoNymjS6Bkc5NXp2wJ8wxvc1Bya8y",
  "key24": "4cTpvLyUdndYryMkeW6SbWYU3pzxLtZVtcr8emkMhnuSpkvLZdAGnjpp8LznGSa5oHPy1QsqQ7MuRHwZXWbGDdMv",
  "key25": "2CbjkeTuJyD241gXvMJgLqqqtQsswoMihLPhVxMk6UdPSriTTQbWHfL7Br85BDAGE3C32D1PaeRhtWwGhS1Hjs8X",
  "key26": "2XbRQwUrQwALoZXyXmepXcSSpjSfCR9NhdUDccCKaoikmS4ZZimwm1Zg6CP35XQdjd7JZyNWxkxEY6TEPLkTzm5c",
  "key27": "5DKFzE2FeDk2KovM1XV7TUio99G9Yo1Zx9a1pMTLx2RRTcc7d8qbp4T1VSmb3BpdtShdNmyq6cbpckzgv12Ku1js",
  "key28": "4NDvrngqJjxbkp8eDgG6spyzBFan1J5KXgqYtiSYyjHxGe7maXL8zuj6eXcvpdFqCDnqbY5iPd6KRAq9pmQtHVYa",
  "key29": "3iGzGuWTXQ3g5tLo3xBrswTSLadvpHNNm6fKBhrbGx7VErPaewyY9wUpSVxAfVmYgzYDX1TDxgxvJ9mvDDed7jEX",
  "key30": "5WnVXTAyaTuZp4S5uKAeFXfYYB41VhUrmqd45bmFLTd5kygBo4KxASE9gAHeLsoiBZvVBHyK88Erz2M1BZFYCX4K",
  "key31": "5Cs3nDkLbga6fhi3JhHASKRdR1vxmQwF8zZoHkBwHvzFK2AePhHAruBCGmde8eNB7xQ8FwpgMq6JoRGAw5E6NMAt",
  "key32": "2V3SHAmnJEdFbi5muZ4gmyp99ccNnQxr52YFJySa3C3es11FCQwMAtXqkARCSCdQHKR6rNAqNg4RV13pToWiCBSc",
  "key33": "3Q1CeffyL2sC7pf8U7uGZ9QfR5wDq8pLSVr72mTpqtzsDRqF5sLHWvXEA4PbFA477jYRJe97kfH1DihZHhQqWfy1",
  "key34": "UkvYcKbCpJmWVfaZoJimz7DWGNmzNX827j1xzQjtzrfp4ctr7SVTBbK2x6LuZ87jp47tiJAdEiaFc4Shs3jrffw",
  "key35": "2RpJeRHcTG7gHvp1XMiaScziYKiMYKrHYte3HyRHyDxULEy4yjAoB29KNA23rqN659vnVmpiKMrQQ1U4SkPCmcVh",
  "key36": "YKjCRZ3oys94izJvLkWWobxbBGCbZoHCAVpCgB2kVUjNCHRawJ4wj2zo9Qy5n7GoABFDLkmi4o3aTN979eKmFQb",
  "key37": "5HU28Eh1xRAgw9EDkPNMpta6CpQdh4PYvXmRbYHBMvuQ5RrsXAMEUcJauYXCnSWR456GbWecrd99s4nBrTKTPhAr",
  "key38": "UepnLwzAARn3R5ns4z9XTd2dMXbmgvc59vdvuaTU1LFuqH7RWGBUVTBpZxbwt8DTsBtVueHSn1cc1n9truneJ3x",
  "key39": "3bQ4Nt9e7DA8Ci9Gd92YaH64cYXqamvssHPuMtcWfoEhpEUodNnW8TTebTrBACahPN4FwGtgoctLMS1Gnyi8mA88",
  "key40": "5YVzc5nxXcmPjwHNf5af57TYQXhs8Q8pFLTpwWnsdyHJ7fDeL7Y4FtuBJdFN1Sx3yjzWuTiieSxN6kJfHXVNfjHc",
  "key41": "BEwyn3FqHimLehbDKX7664mNZ87BvZD8wsmSfBYBaB9Kvku1GgMXsfqSutCXXpADwNNjGg8z71CMUN6sYAXg6eE",
  "key42": "4fmeh5ozb7fCrNY4hYv7yB4hAuTcfzWqfLFzxPAaxzXvf3bWzS4f6DLLV64FvVs1RtrYegV8AtDGqsRgvFsSiJkJ",
  "key43": "2foTnNmPXJRmY2Brnn2TmdGobmhrZ9UBiTrqkrFVSWZoCZUkMt2GU3Lau8AiNUfm1yehcwjbw9i94U7TyK4oUKob",
  "key44": "2HNSr42Z2rRLcZAvYeQ8UqVAvfAAwHwYtFq3umCL9kJ2uUdLgkz2Wkn9UdJHNUrzb87Vj677seRSUf2LpXWk8wKo"
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
