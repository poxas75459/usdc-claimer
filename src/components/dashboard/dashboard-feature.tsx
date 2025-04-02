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
    "3H66r4GnNFUkMq88uZZkeEymVsX2zaJ3JFWYCwjmSXTy8cQ3yUaDx7Mdf3bAcazZqtrDUTypser4tfrDVBmgcjeX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Y9RZX62uCSUDg2YhrPpfRtpK7Fb2GZJhsaA5q3bYTxhFLiT7jWMp44Y2YNePNF3fr4YxuP1oosQee2wLQjZz9Bu",
  "key1": "fjGQezVjk7bE3wEMmFYmYFejteJ62G3Tk6TAcHZVjJq3LwTysCQ3SuR5pHQBFpAfZPCpaQ53ysYuwdYbLHemtQ2",
  "key2": "59p8Fd8yNojCEry4oRfo6jdp2Y7c1izHjFjFryhyt6CETRMvh5GzJeBL9ytXac89BKNvEyWYHpfpcy8WLB7UrWid",
  "key3": "3AWGq6CRrwvkVoKeRoJPxjZ1zAbAgiDtk8sQYimAT3GLw2oVveJDjVWEmMFzDBAYKUMMkTZfWudWM7jLNnbkXr6q",
  "key4": "3z2tK5ZcuQ6dTA5brmXnrhhbspzYQoai18nCSnv1CuRHyfHqBnzr1DNWHnV7yhbz3DMFGu83TGx4dSsSAyu6yBcw",
  "key5": "3Y7UtfNhUs3HWhLrqZRL4hVcEaatLusjKA4pixwcAhPKqPLpoWTyGRwG6DPNDUCtTCeKe6PfPZXfTZ3C9tJ6mTXY",
  "key6": "3zhWJJc2m3uTSvjNw6Nvzcycen8TBF63NiGqVfAsYHgyHTPYrKm431CYEPzAJHpeWjbVcVU7W4j6McH5bLX85gvJ",
  "key7": "3ipqJ4Kayh3skHAYnSMLKuvCA1JJVCWConPryLN2SQA1VLAf562doxzEDbstYyHFCyWHngKNCjBLCuuW1nEDzajg",
  "key8": "XPBYcWhMsjeunK9ZaLw7vFhajetZsxLvcxFLhJP5J9mrAEqVC7UW84dYrA8585kjRfHKr4gVi54ipZsgDt5sbuH",
  "key9": "2WY2hz1oJSHeB8D54ectw3hTS5HGQjFRmP7eWD35U4KyBAATX3UEfg6xXKh1AEfbKmDyYccghLwP8unpkQufzftJ",
  "key10": "3VRKiMNmmFeWTPhBXPXw7FSAaMM22AHHU6AUVE7GgT3GgmNL7eT4UxMKqwhFxVv1oAARtkx8Yi1h8BSoLmnwWSvh",
  "key11": "5VnVkFaorww9fvJcEEharQeutfgDGYnZL8rGWg8TBsL4Jsiu6gqyDK2nmYp7eUPkSECGDt6KvvBWvK7je54K7mKq",
  "key12": "5K8YegKgntu4cvsDZYTmRhRbLNxoN9z1cfgQZfjEyaEeYKJy745Stsqdb3u2fCoRLh56vCBMaTHiUhz4GGQWu2Ws",
  "key13": "61sou2kgG86VsT6dt4cZ7VpCHgG5WMXYGz3U1qtUiNcUZfJ5XRYNnHuFVG59kSyMWMkRiWrygPhD4jp3tujWRx7q",
  "key14": "33tPFLuWV9UytWMgswzRmC2TrpuQSapRCbi1rwdNgwW8BvVhT6scPopAopM6dbaHY4iRf8sw8gHSRKLkazdqftbz",
  "key15": "45W8MgPsp7h2LVUPmz6FpxPvSgqyc3Q8QTaRk9e4oBNTZ47KX22DG4ZDBLszeLQXEobyVtHzyGE1JUD6PDfhQPUZ",
  "key16": "5FUMA5QhGW3u29Y3Xu9AaCPqyK5Xq2QNiX24PDxstaYk7knfxh772icFhuuhGLY1WQYgYUn1uc5tgMuvypqkMvLm",
  "key17": "41UMhHiXosWALcbmADHozFKtzEcfaaiHLAr6RhEvWfhzdDxtJjeKU21c6Vgv486ZW9YwVSvHksjVrdXohJtwVEPS",
  "key18": "kJJvmymWv7Q41V4BuNtu1HxMnoSEPirBZ76qfNQns3M2mu9NXJZti274oAihq8TS9m2kmNW5ugiwAKfLUwu8sQW",
  "key19": "5BD1qBP3fdjXV7XMCqDXryEPE8WxPpES2Eq4dsTF9qvGENCkc43GZ1t2UkdrsxVKsqvMnphXsK7tkCgrJmRdAquZ",
  "key20": "21wdDRbBmUt5jkSFLmsw9s7xj55QBuQyJ9qWucn8dBZKKPaq2EeEZDjd7vPsuwqWxahgQPGSWYgi6zL2Ucim8yX4",
  "key21": "5yGYJ8du7eBy561oNd8YZhChgk7Vo2hSjDbXRoKKMqaN1AbDnuPwXY4K32q4GDRSWiHF5u4wikcAPQowJF6NqaA7",
  "key22": "VpNfoZP23dtKZPt5Etq6wL97m3DsdHcoB36jU7JpvtBQLRMsXHKrSnHjgJ1Wnmdxh1q1mJd47gDiLC9tKYtAKK4",
  "key23": "j9hd4yqxPePkaW6tmomWBPzpnFUqQDA5YQ4q6PHXLizuaqX1zH8ZEdm9m4MStuKmSUkUmLCiaWVUEEcxWmHfgCg",
  "key24": "4bbf7U2mUnKhZ3gE7EcRPUrZak8piQ9fFvahdN3U4mVjFV41jQaT1ApaBPzZqC1noWhUy3p2ZwUK8fDQ6kJkHNn9",
  "key25": "5zWMT3yVhHwgy9bjqEcojxtvpPUoNnoPffqVTyTkaZVnzsEvL4rzeMRps3Ab2ViDRfpS9hGKqNzhP7disSbHNivM",
  "key26": "tz26QdrzhHrHc3ACMR1BS6Db8BgRfYhoiAbBuhSocZWzsVsecr4HiSBHzVKy65DYuhUF8Pn9bkGFXj9TsL18w7J",
  "key27": "Dtokp8WwMmaPnMXse5FCZ6nkE33Xp43TEw28yh7ozWE1fx6WcNzrDQQU3t1V8uszaXRj42iuELkGnrSE6VDjLUn"
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
