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
    "QERi11QJaELiBaLeYXchndWP74hG1A6vFkX6tJWrJFsXWDxvL6J6UAxTv72Rukqsg8VMtdDbopkejnRoCpkxiB2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5vvo7rvpcdJGokzRjM7QRfpPNtX8ydFdn5AY4zbALtV2HwGRvUZfSibdDbKv39Mzxp9hpaB9pzY3CBY2bi689VUc",
  "key1": "3RqUFUHvDEsPMD5UX7WDLnKzaUeSaKWALTNUuFH5JhcutgxAdiwDHQFArHZBa9tev65dqrkCAKrW9wRhtaCbMbfJ",
  "key2": "61Jvfe5KUD2aXNGce3nkQq53RCbGHv89uKvChJua5LKStcsX3BH68dSMFGgF52YoNuUv2ZRUFDpHYxHpYxotS3gd",
  "key3": "3qg7SUrBVG9v4zvvKo3514ZXJcbNbyDRycia4qC6V2ph9K8a5NXXMkqcGYcuxfcZ7xh44SnkBYvDBAUhYJnxgJPU",
  "key4": "3BHy1mFMhs4HvYRE2a9QET11surZXpchzmgeCiUsRA3zaWybFwreNLExZFkRJ6r3FKyHqudRb84d7nYKeo7qb2Lo",
  "key5": "4vkxiAaenksc3zBMQLRM2VAh9ahU1U7edxMx7ZD99taTPdnFSUSEFRVBRG8d3FCnejpoSfJvZQ6ezw5c7uDE98Wo",
  "key6": "JZN7gwwmfS8pm6DLewntXsj86LzqUTJjtSa9Fz7B9JK9fnYfsmX4KZkC1ZUSbUhLXp8uQivkD9mHPv8Xnd3zaSP",
  "key7": "2onDnvrsyoC7muy4TByiDStYU7r9QrKMRGB3NHsSEiVqWH2aJ248VQHKMGFrQ28oG8W4DRnHWSidACZKAhBMRfCk",
  "key8": "5ZGWwPSPNSfkgdVNdGgXB2wB1nxcB3Xyth2dzdE6dCW5uH4G21KGdoePUDTq8FS58Fk8FejCsdq161Bn5aP69cPf",
  "key9": "5uEzkCaUju5LMrbbvDHhxJxqy9f23JsEcdiypvcRL7Sa35fTBx1A4UMoyExYYDxhKNPBBqjNYtjtJH6wozExwp5",
  "key10": "nxjUd6sMDTwEKJaoLDtGeG4unx5bQho9pw3D56dyss6yWLh8Y3UKkbMaBTiRR9FwdHXATuZ14a4MFdWBHEQoWoH",
  "key11": "65oDpufpPRhycqrugjK6qd3muwf52GxAc4xNbXj1wPidH1f2jq75WaQCqCvLRgkmtrq7tPitM1APnYWocXTmQib1",
  "key12": "2Xt6RfDppDchWbmX8qPr9M2viaaVxHdzWmp8vVvUPvBVqx6a9kWrboorcxkybFfnVLrQSSTZt4pz8w3P87LnTJVD",
  "key13": "2QUtQMDa6EL9zSrJ4jCS5jWWN58KZ4xxkH3ytCQCdruPUbc6LhKfpGjWShTq8DaFermrTybEWagB36XzAaifAEmD",
  "key14": "3SLYBbSCF3SuMnZj5YyWkWHLTJQYpfcnvTHhW9ZqJYMz5LCLDibNQ4tZKcxmjeC35dde3MaCupcv6HubKg6QiCiX",
  "key15": "24a9XsBkaHZMz7xZpp3HEHUpKRRnKCvEpQxYuj5wXFsyJZyKckiSQpbizuBVRehQ2puTeedmfNPdeYe2sfgwTEoa",
  "key16": "2YNLtCRc2vg4kbRBLVu3SmGXbuKZtnex4Nz8nDc4MBSH5mPiXNNzBC4UaxnJtvxXQ4ivJfacjzt2etFUsRtSaPwb",
  "key17": "3JWQ8PKqKrPnVSBA2B2GJ1VhprAJjjerpJtT5ALmtoQ8z3vFFA6GiHtCw8zsueafgRrpNEgvTttp6cY5fPRw2PrA",
  "key18": "3xPMDeqasMgpnfBTrd136QiNmxxvFbgEAsY4JUrubHFgKSVpQoNEEjhGdJdob7zJ1HNu7hrqgpKd9fDFXdK3Aia2",
  "key19": "4v2xo3Hue4Gpa6qXHvnDa4g5yacdm5haLfF8q4NL7yEhvyaPWySY5yboMMkFtqxQbQXNDSAUkuQ2z9CLXh4L5qB",
  "key20": "3ZoeydLpAvKJgUaf7LxEdt7D8JfwJBVmXHF99FwQcZBokam1vD5eEt4NRFbsvKAoxkJ3vhasCiXmrqt4Xo9vFw67",
  "key21": "64Tz4gLwKJEv7BXCSx4LQuGvhCdDpB5BMFYg2BvUE4jG2JPCrEqjhWXZc7BZ4mvBWg5S99izTeWzoJKM665G9Y4k",
  "key22": "4hxG8c9uqa29XGJiVJZRERpV3umFtVoL1JzL4BoD26AbgdVcZzdCFcCoqHdfjXSpPS5erzLDuP1sdwQkBBBtjfYB",
  "key23": "4z57uQGMEPwR8bEkLp4nYWevN9Lrg3jqrSfxZ1hrDaASTDPG7atLs8WANLAegVPAD3FjwfvLtykqTReEHhz81hQT",
  "key24": "2UMYvpqLV6ZwAKGHYg4jmez6WK2rAacdp8zWyosZ5Gw746JgTtiynqVy82urjMK62jbMoCxaznFFi6JKu7zEYXjA",
  "key25": "2ExmJPTnGpEZt6JNK51pnEQtD5yUmxnNXYs6bDuRgis45sSwmsvVq3wRx9fm4xkrRHCnJwzjfRJeNQpmoeeT85zE",
  "key26": "3yjKWkgmx5QmyLAfTYhH19vt5gC5MsKP2YmV5nvVvEBn9vgheqoeZe1bdSavqJKpk1VMFZRBqfJ7Ku9d5MTWXSzL",
  "key27": "2WNRcURwzqhXbPmifwhqSdBuMuYGisv9UPL7v19aVCYS8raAhWBr9Ew6H6KBNcCTSTCzznTrRBzGstGnKvyFjbvh",
  "key28": "5iPcexwQASnSHwJCvd6rFbiSyQEfASsF66vVAzDWqTDyyjUCMJZNpzvSmmLTnybZbuizgS1ijPNaXiuEaj2FV2jL",
  "key29": "5xr4HgYmosRQjHP1HtsM8q8dFSLBZ2AoUfosCdyu4sQvb5brok1uNkJwUHkG4ZWY3EBjVmfnxgWnYNRkgTddX7XB",
  "key30": "63X63HVJ7nBMkA1PJTmYuj9FBn8riwEhYdqYjeGpdcC3DmJ5VCYRgL79fVrWptVogTKv3R18xRPVbMeYhC5XgayY",
  "key31": "8Q44BSkn8aEHif11MqrTtb2qo45LeSQAvt6QmAPz3xbU6nxZaFcy3fNGKqhaGizUbXSRDBGa9p2aGArqaD18wGe",
  "key32": "4DEiAPdmvQSHeTpsokuKcthsCKRhbj93YoKQZgciqhgtZERLse9iE46enyFgFavocBH1CEMDQMmrJe23b7kYbpLV",
  "key33": "5XFNRDg9KV9h8aTqs1qYQGVPEf4usuR3dp2w98EufJK6hhqzMjXjKg55AqB3X1hX2XsaZPLweYGMeczopd3t2Kwr",
  "key34": "48nBKfX78TRQp3osjCjzspr2zcSornZ8KTgNLfxx9b4bHJLyrpVDzu6uF7DiRq5RLuEdCH96agJAjHc1TzuT6Hhh",
  "key35": "4umFac3mT6G8JH5956ho6Yg5JE2V2hFnPQFydTTf1KisT9cQrULJb3nHnDxtaBoYFR4VyqdBh2G1PhnGjifdrhGz",
  "key36": "2nfUnZtmusZMBhp9ue2mPHbL4tjhmgf6o2vKU3PUm6oFVVX3ZMeVxxAu5ZBdiuRLRehPD63z7aFjr59CQ2MAos79",
  "key37": "5jXX5BksXtjpvwHgeoP8vdDkG6DJxd8EQpKp7xmTiG1qvSafmZTS8GW9jk2sqLp7KdQwbbwEh66FsZbt2oPjRkt5",
  "key38": "2UAjy8op7FMNGAYKd7xykmg4fdZdzwUhg2etUAvy33h7Tv7aQYxzr6JR5g8wrXXWuknwVAzHFTbfG3rUSEtJNwqh",
  "key39": "45GUXNkBrezXikGRi65mBF9wEgEFY1FLkBdSPuPAGGPs7vzJ6Bu3QLkXxqGPbDm57dGYHR5vMG3Y529z7FeoumnW",
  "key40": "3c8FMBYh6rp7Nhh7zmAHb3gwZAReNrg6vcr9NYCMW6WnkjcR6g39NBxCw7vACK9dtCqzRTge74aaUhtvYTTtVa2L",
  "key41": "2kCceWvtaTBCEJDm5LxAMmkPD6XbDCvvrCarGJu359WLzwtMuSf9W1ktuRbzCkUBFwYcD5BUr8T57QCezAP5fhM6"
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
