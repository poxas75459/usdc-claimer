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
    "5EW2KwuJ4Vavv2BvRvYBgzpEnAoWHLNCoR5MB1WPWGd3rdqwsv8MXvvqbHieXfzBzBTE2Kbpw1RRp4dBdftH471d"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3KGTEAXsmJGorcSqhRvMRweUD4uD2uSTtURe5Ry4ic9gxsfMou9wRrcYNT2z6TMQBribZMbUwfcyEe64zeVvJJ4n",
  "key1": "4FqokVjeCt5s9AZwDtyCcZs9J12PDvmQnzu9remawmhemjXq1xBbaP72ajb92sEEhCQV14yTU23c77zbyvKj41mM",
  "key2": "MtkkHjK2oDDfFzcQi3r7F9z8wZUeZbvhjptmdLG7Fy5RR1jRkrfJxp4XdABytwFLve4NVP9kbzDdagsmcJMAqDp",
  "key3": "4bks9Xyueh2xFg9sFWa9VKgsqmjcMVbh5CSdwqnbvwiEVJR4NrfFsvkYAzrCYFtMQvF7LSBXQN54CZwDuFnwt5Yr",
  "key4": "23ZdAgmpwjVaCdCMxARwoxNDjFCETGKKzzg6SMRdRytoXREGpwtFxD1Be77gSAB4cJLxZ71TYTcDJxSvYevPNjwU",
  "key5": "2NazMdPmEe88tAHpuNmWs7fWyexkqVbtMC1X9q8cUtzeksvhf2LoBuWr1sSrkSFdLbtRcW6T1bNHVA5GbEeyzMyr",
  "key6": "25SUw4sBvBAvuDVBU2UQbRwbWJA25vZQEM9NKk1gjGenQ7aGsCumbaDqrPkTZ16xmBNMc5nd3K3PakyzQnt6LGaV",
  "key7": "2S2PLDQ23ooZYNqTL57nr9fi5GphMSN23VJTkAnvismE99ZFeUj1Lf6o7CcSTeyfwdh1D6rkEW2v6ZnjqymAmxgd",
  "key8": "26G36SfMYzGNUnkCi97rhEv4Tj3maxbwLWDXtPsKrJrdCEK85y9m46jNLf22fMjB4Hiwt2RGC6j4rS55PZZNT23H",
  "key9": "41pw2pRvh7owhxGFN5Khq5HCQtpJAaxe1Gg7CxM8A6LBp8VBjx9BpLCbnVFsWEs2X8y3HkxWjdS2NomB46mbrayb",
  "key10": "TEjWsSfPGe3DFrJkNjpKhF18EZr4JTWe8dW8nZG2zPLWqchU4iFr9cnvgy4rei8rKKGNTQhcDHNdUeLomp7yU4H",
  "key11": "5s6ssnaRNdy7YAZ9TRJ8BKm9AWvvbpQ2S7KiPtpba11SLd57hiJjMCLPQWuqtYf5LHrdhEPdK61vW1XtQtJHFDrb",
  "key12": "5qb3Ef8AznideBKouLgQUpfTh8Hi7EMkm917jLNRNpGmEquRGY1x3DayPpRiwmqLaGhCf9NQW7t9SpCm3kwMyV9n",
  "key13": "5HZyQKcErUJmeRRXuyXWnubCb7bLgCNAbfanX1As64rZLKjo3R48ZEV91wzBATdwC36dy7bmSCExpFiJws81PLNG",
  "key14": "2VxBAuNCNpYpmbqcMg8aAVHDsGnQ4kQk64swedvD8iqTB5zC7ZLwwSDtzEZi18BHgG3o3CFBbKbRwVq2eqVVhzLD",
  "key15": "26VvLX37RvriP6gUFYzUdUchtTdSMmpDjcroVajtCJYtFmt1b5G9z2JoNxNvuMsSrSL1zVZWXoPcUaPtFwKfiTE1",
  "key16": "3QGRM8aj4QSr1tQiZTxKFRTNna1k8JZgiCFXN44F7Vqgy8XVAizYmgZvxBWiGce6q7xA3RPJsuJFAJ4C4htHzft9",
  "key17": "288zvnFZKpFyX4xcwXzHM7h7JcZ4zscXwhpzKw8ZdPf3uxWZqwHkd4Fdncv29EyMsWAcprYqfvn18Ao5v91rmKmG",
  "key18": "5UsDYRixai4dBv5T79f1yuckPzVF9Py1bsK9JSU7CndFeqBTePvFuXVpwHSTFuf9aAFKasHe6XhVjBcgW1wCL4X5",
  "key19": "4KgPso6VYCPZz4SZzpbF4MPMFvEhJpAjgCnYVxZtGrMoYXCvX6cQcHLzqzC5ZZ2zwDwx2gZypkw4QiJpnyF7dfEG",
  "key20": "24A33qWLDc3js3ki9VwLJVhVBZhxEPMUHxxWGkbjX3M2RKHaLU92efHKF7WC5VkttZd4DDxmB54CY1NW22YPymSW",
  "key21": "5bcUyoatcEpdnUhWquSmjed6pqNZER97fCoS9za1jhnnXYia6ZEvpVRD9qKdLnuBJwhRdgF61Gdr5Kgz6f4Pd4gE",
  "key22": "NiBnpcbfEAApCe476WvtVbUNPf8X3ksbr6MstEaA3HC8wDNYpiaxjdoo6kgosBruQz7SPYF7kJMAMpxrkYBzbnj",
  "key23": "4aAJffREii4vSWDPFktBTSAqzAyEssb4N155kMKvzntEAu4WqXToRxYbwBiivJLEatS76WaZi7n8tFR6gwNwL9vs",
  "key24": "2p4yocryT1wpafDBhYK5gBsSzrCEjwtiQVVsu1AfBBunTj7q533YSLKuVBaK4VLvRwyzMpckwwvPb2GR29yHKfSQ",
  "key25": "65MCrr4n2xtADBEeBdBxso68PZeh9uAMMrGRzV9aQyfyc6f3Uvx5KT83DyH9ZEAfV786JZkxBRBzGokjKhmfe2k6",
  "key26": "2UnNTTGQgEzox7n82jkPsrM6G2ctzRDaqkir63M1CHHJh1JPg5C3gWbf46G8cTWhgrKR3SdkMWnJ3Y73VsDGX64G",
  "key27": "3gFrn8Jv8q6NJFdHmGctrsopHCcpmWTRCgcYZAQ5ST2PzskGy6Ko8svzBtYCMyEhYSKMPLw4T11TzcDfkotxabgu",
  "key28": "Qey1asi1NGgkgu4nqVTkwoR8UM5TsPcmBFWEsuAEtyDTpnMxfcAXEhFwD2Wq7UYL5CWtvXqNpc2iNNNo6e1e3TX",
  "key29": "2y4z4aWQkXP2DkumnC7ruLDg1KLSy9U58cyZDwdn2xRbGBkrcsVkGTkTmZLnKaKXyFbbpBomNaxsszzwtfjaPnt3",
  "key30": "3DynRJ4f9MSt4EwEDt9oGn3LhrwowZR6tgkwj265LGDyfYFTNiJenpMQbKuaHeH6m6hFHVQ46z4HzePrqBH5FmAu",
  "key31": "3tEAVe6SbjVgJHddmb9sRLPnxQe5NU1PKpZTDeAZ7AXUpmyTb1cbKtDGLJJC5CYB3zHvievZorNSUgNLSgw6Cxu3",
  "key32": "h9qcxQZsP7zXL7Z2zCutGrZpez1XpKHR3PYn6wMCLSDGWAHPrZzp6LhqPRUpL6bd2A9eXA1tLcXXDpRH24BEKq4",
  "key33": "2E1cm519Jfbb9HAYfiG87EgJrW8R48wE3MpNfLh4MR9CUKC7zTuMJzGoKk42UT4TP8k2Nuiag9yBfExK3N2osrYE",
  "key34": "4btGq6mGqMzxnjkxG2MwNtgm6qfk5FcDrSopingtd5FDibKYtAKsG1kT5KYDYrjK8GbRpW32B77vTeodCTQvwmC6",
  "key35": "Ej4qwBF6dEa5emoaRDz3dUN3BcvbFyGTBqedhxRyk6yGauiLHbayUnynXoNzcWuXfeLbYwMbuZCTu8WeNTKk4vB",
  "key36": "49TXi2MBLhLHJeTkLpByvGyRJadWeHN5JUavtAB3yhFEEfm2J4s3f6FWqi4NfQdfd173QJRqeeBKbf1pUHMfr64V",
  "key37": "5YWn7wLVq2gU77c1LGHkjLnNni9qXxcRDk4ST9pTSwRHcmQEZhJYsRcHo5AJScPESnj7eL4VsXMZjst9A39oBABJ",
  "key38": "5JNrdXtyJ2YJPhEEXrns6y4btZq3HYhuNkXs44ociEc3irFjhj9YFYjjcNMHiax9DmSVhXkFV9T9dSi39b2xHr1g",
  "key39": "LvGniwCwxhBFyacpUJwk3S3Q4VfiRSNaT6cnX6A5B4dx6z8WBp92cKYTjUuYF4WQDFNfUpy9RVR7LDwrjTqwRhm",
  "key40": "6txkF9aZSg69Pd5ZeQzURmd74YLV5pdn2KuAFj2ADAvgLhW3sS1jUGpGJbiCfd1g978wV9uwrL8GqzM9ZTVJx8v",
  "key41": "5LtJEDwAqqJgErL21dT73WCBKmivfVJHwQGEMFhygLm1bdhFpiSc9zZ9WtSR8DuUvguwHEFbo5gsGU1F4ftQxTXY",
  "key42": "51gp44i9BJwnandT9U71cvHLwmQEVDyEaAHcJE1HJzej6mgnrrdNBNZKYWZRFiwLmW2TdDRGUTtdQBL8xxShMecs"
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
