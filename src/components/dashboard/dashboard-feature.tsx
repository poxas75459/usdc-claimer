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
    "2wzUKTck4DYphg3K39TzZbmw1RdLN639HxiByrmNbVsGheRGbGhhguUAqiHaqr4n4Y1RKe8L3qbJCyaycptPGWVU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2JSDbBGFUFCiFjjoK8a97bWoYshkyKPvjrC4Ldig4Vaj6ijEVPXPCtzNuJ8iQk98K7Dv2t813XSEgfdupWyXApQq",
  "key1": "66C5HcoJ3d4KZF4pyHcp8yTrNAW7TbSUFULMbzmDo8LdEVBgLuyTvSRWPzbknWcsZJFuRimLQ3dcZEreDQsvcUR9",
  "key2": "4o1CSsix2ak531WYL86eJCH6ucypBkT7kxrNjDQ5qukvdr2wNXgveRU4Y2DAYBa8gqakyj73ZyChWoVZ8uEcdDaq",
  "key3": "2h5bivjeeYBPRdJ8s57qVgCrDKyD5ipWQBorQcvaKqQTMd8F5DP3rZJvd1Ss75mKydDzJepYVtpFTu6rFFErgWXB",
  "key4": "5xodyDQR3pz2kyxoaTGoLg5Ty5spvb1Jpaeg7cFBRn41SkJwSsEShbV7CNoC9Hkt2s8RM9baLDxxiqKiRs53BW9m",
  "key5": "MCzBDL2ysU34ZRKZjKZ951Phw4MjaxxtMV1iG43BuYqH83whcE39Fp3oX6zJVNMjmPchu3Qe6xnNC4m6rus4Aoi",
  "key6": "22LyALJVe2xJ2BtGkb61xMHBVeonDjs56hhsJUtyr8vN6B28V7aiZE8GSvDfSicoqmXP7qMn7eNya3JiTrSvgdZo",
  "key7": "414dDQGQGsPYNqabcsCxWotm6pBd3PrCiUgCPK2FsCSLTSy3Vcna4vveo8io2g4A4o9AHbGZWEgrtK81sWzP2Ra6",
  "key8": "dES7J2ejnZfAWbrSuXvbPwRbSy7VzGTkE1m9qm9hNBg6mciaM32yX8mzhtYSdkSYWe7ovEsbHo2qpVweeFswYGj",
  "key9": "HvavdQfFCFq73j4SdcLLqNB7K9DhQG6F1QnFvP1LAPN1527AWpGYCvxGE5mUfxxQK5KNtPg1WsVGX8L6YE7mpEn",
  "key10": "56qK6QGTsHjCg7iWcnSQm8EfH1xF1dZZHQkSyBThuXAPjfVwFR6xem4yaq5nzFhzKWJWxDGWb8ZpxKdBbQbFM2tm",
  "key11": "2BM9ikeYsyPQRVtAdLX32tjspTZfN18SfgKqT4Hqqx96S3pioUebpSU53b8AeJ4aN2q3MzAH33V1fUCu6wKxmpgZ",
  "key12": "2WMu9PMgAs7nafVroLvQM8y7cq2ERKEfCnb42mLae25pwhmACXf9ePU2YSGd6XKbxVNfKxqZajN4iQ22H5Jp5i9y",
  "key13": "xErj8WFMb23z4grUGVvbYpwX2ba92KdA1yy5zPwAAjpH8Y9dx5X5yi9dYmVSA3HRv2diwhM8rvotN5pCQBY96GB",
  "key14": "3BZg66Zw9CFfK8EwyZvrNvopjzcb7d5QGQptYriBE6pmUgqF4o7q3xiEytX7Pay323kjXew2AL9VXMYLkH4rztyU",
  "key15": "3EnZAnSzg2Ebdiq6sJYZFudHQq1tQTAG89qSQ2z4UQNo9xrS9CGE91vG6RxaJhzmfuZyF2hCzVKDKZ29fwDYR6LT",
  "key16": "659VFVac71AqwZKY7VtBerZhyunAnx7vtQvKAFXfhRcGQtXqBpxwdbuK542MompmTcgRVJWfLMJWudnEL2VWFktf",
  "key17": "vzjnyjcUStwqwPeqeobNmYZtJ5FQg7qKEp8zAh3VG5j8uMjEdya9iPE77nVtvUj1zhYZFapnEvubZE7tAxbucTd",
  "key18": "3L9E8xSwEW5yTuxB7Tg92dgAFjCe5DMSctab6dBxDZcNKsYq7M3TzEo62WeSv4iqHNQEFAtredH79CbpZsUwSikj",
  "key19": "7cmxu7SycznzVveGKW3gWrtCdTyzpaaNztDuVpx4QNZ2RR1R98SFLZFtsAz5AN8r5ZKKuaXvLKF4xHzcHoT6JR4",
  "key20": "3d7goSNCzonwGimD7PKf5DdDQcpmGwxTbbyHcrT6chqf73bUv6tu7ZPH6aMFz8TykbiMAfgesam2faVv5vcnPgZj",
  "key21": "4eoPYbfgWydBVn6kpHGVPSUxWwPyBvgN8pTDSCQNGHf5csqzFmADmBz6PE6WWXqooCvX7PzuqVpi9V57bH4FiBKa",
  "key22": "4W5qDopoxEoebFfZhQfSMyo2EvB41aTCkR6k6RaDfQGpVFkC7VR6VqCPgn2cNhXpKmLHFNHGTQdzQKE2xvSNchQK",
  "key23": "3kzWH3pK98vfMiGzYZUVzz7oisBHZ8iQy4A9JyCYGRAWdcffYq79jPNPe8d1AWui4M2Cm6URe3Nai5LxjmJycoxU",
  "key24": "5kKF9o4yujWWxKDtCZBxCsKaHky6jZbmPFPTugPfTaHHXmTa1kaEXfivhuD6GNnbAf2j7Sm9MgF2YGZwg9my1yP9",
  "key25": "3HVyosPVjkGHx7ZEx2E9ANeJiuo9HPGdZE2fXCyLhquoH8yWZYjtMmmcDZDbJdDxUY5AXFGjJkVRWzSJeU1tncyu",
  "key26": "24CmY8gcdNsL4nrpcSSrNcdnLD8k6kssfoy6UCJasw96AHwbJ5Ncct4nHUvFEZGmEZcUWkGQ2gvBfBxtzaM3FRji",
  "key27": "4e5PdG6EAwQzmMAhovL1ctnNjPaeLyD2AigT1dL9nr4aB85dfZmZaGD6AStzAvxNAjWkWsQRSVWBzx31G4p7cmFV",
  "key28": "621m8fj4eVGuBgB4VayG2NYsaaqnY8YVCZbhvgKc2CsmfHvUm5GkmBVjLVLBXvhjyvB4voXXsS13zVjBaDLFR9eh",
  "key29": "3BMXX4rPSJW4nLa1Mo62esbSq9MCRYNzBWdHvzzgozZXycmBAuMkiqZ4w9k4RUT2bDD27kJdZMRZpAs8y4VgrNBu",
  "key30": "2tiscHmfGjoY4Xzyi5iXwtpiupNMyGUM998i8VNXPcd1jAkebR4Nmrnw5w5mN6BmqJTGwJ2jMy9jFahjKUaPTqnQ",
  "key31": "5Cf2M9DiQyGRrAxJMW2uPutHqx95AdrcJW6vGsEoioi7Qq57CBw2BSXzWNMD1ZNBvXSgCLtinrE2p3MEa9XHGeLS",
  "key32": "dNdZyX3zcSPfFahPx5oJnNCPWmXisA24ohtK9BB1KMrp8K9VmoFjG7ZR1dULdrbXsRYn23kgEE5XieujGAdZLQi",
  "key33": "59iUzDYgYFQEkBCUQaxMrNKdNUwcmJyZLfc9dGhEehSSHMWk7BT566gSSMSMZACWLsnQYz7XCB7ZobV4jhSqWkAc",
  "key34": "5yJwGxANoyRisXUPUdTMuDFBns3dNcJ8k8EVucDbei2qBAfPodQSfc7vsQg6C49gVFahVxmCwakRsden3bXgTJ75",
  "key35": "6bNmJmudTtauTJCZEazeDJpLiYtNcoH7T3rQ3ANJ7X9ectJrPX6pZS6YvSKrqvdGYH7PZhR4dDrdttk79AfYCvj"
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
