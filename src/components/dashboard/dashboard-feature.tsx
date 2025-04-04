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
    "2RWPuaUDHVazdCijbABA7w5UH24vifhB2rFJ7Ly3YaqxspZHwfoaujZSw67YF3jtSMCP9dZes47ckUM9raBtbJfF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2cLwwTrGXcPn9nkoMq1vexeQN7PnncK74QGz6cdBUYS6rZhosbsLEUsyBKiGemkwc7k9dcZzdwPWytv4d7zsXP7M",
  "key1": "5KNQ1DaZ55rpcECnVNdVb4XzPFqwtmkrcrv4ViXm4HvKacsGSLZwZQQQqCv7mdELbAQ61zRyrU3gQAqpxm8QwiKb",
  "key2": "39WgtKAwxeM41y45egKdswt9pyGQaDdGQjYL4WM8JFBx98UnqyXDkJfVR36KqdoosXV7gSSuJcQWhAgqreU4gb9V",
  "key3": "nVffknNr6LZt2s1FejsJ6p7LemeozV8LFFMqHGq2s8BNU8jEwXf75nwGM59f7Cfe9BeLruNaTE5hpjWZQhScpvW",
  "key4": "4kkyLuZj4xfb4TA4zaUYuAYsk6kC6aaxpnEXfgeNe3rir7hcv8RWPRwWSgTsXCZEn2BMNSckyfaeyAFkNvySSwnX",
  "key5": "27jtQihmpmqcTQETmAH2SeWF9wTk3ocRaLJQGDBjqx1Ev57gF1S6eM2RYEbcnFmYjjGkegpTqA2Hv2KxV9i8crJ1",
  "key6": "2DS8dtCDcTBLLDb1CSyMwhYEq3NwHkgmjaJW74uNx6fua3eq2jvxFASb8PM9rTJNtrDdqbfbxP749UZcaoxyvvd3",
  "key7": "2B9rxir56PkUqnfDADUDMpgUn5sFYPZt7oamQahXECBzmcH15xEb9jexmNP8uxcJcdKjVN7feGX4EpiDMfZSzgPs",
  "key8": "bBoA1gdDcyQ5iXkJBbN2Mf42UVy7tcJt88AEcr9fFqdpuZNKdYwkCHvgQXCsLv6xNcYnMGhdFxzDWRoCtrmTaT8",
  "key9": "2tTwdkCdJwGaF9wouVqJKX2tfBCCioTURJjhta2PNAwkePYq6esartBktWtizURrrqdBfADNeNVJv6qsQ6A85j51",
  "key10": "2abzDpznpP5fjCDdyDgBiWqd2fYKGrPX1CRBv2XBbuhv3HbfgzAqscznrGTNfagBQP8Yvn9rLvCgPx5f3fnCoym9",
  "key11": "c47Euia3KL1ZSb49xYRKNh3N8eh2pRzxaC1xMBCHV2SUNSZZQQxsSbTAoJzeMw3Yj1JDxnWJcJSRpttggMjnUSM",
  "key12": "3pSB5ev8Eqyeowux2RrjCh6kVcQGCRNSF1KVsrGWeC3Ji9y5VyU5Hng8QF2ioFiJz5H6A9iBMMG4cdzKh3SFF8r7",
  "key13": "26nX8mk46DcNHMy97vZvtLaQ1Uauw2PqUC3bWHdgajf4S9fSE3g66PVaWTJVTyickU6J3p15qAy4Xfqhv5m2UiZR",
  "key14": "3Hr9W36i8Dg9YqeyTwJeJM5zzLcUnftAW8kdXdvoh9suox7gvmnpUwEjmsRKpHtVnBNd1ENstxHGvypBVuZF22E8",
  "key15": "27VyXbhSjpJxCfTSFVp3jsoyYuuSh2Wzk1gVk9yGk2mt5MFR8nxLdUNWLwRVPKcQdZfSaq4VriRcYkjyrvBTdSNy",
  "key16": "3Hds44xsAfKngVCwxj46LPkFrnDUPbPDNqSDpmjMhgpSphJfqdYfuuh6eEDPDi6vJBes1guujwTRdSwpZt6uf9Fk",
  "key17": "3H39JbyqwX4A7mqMC7g2BrTG7qXj4SSjYezeZf4jn8EUYJAUFi6aKhdnDUQKB4czSu5q1szecdX9Mztnok3jXdnU",
  "key18": "3VA4b62gh5NJmw1rszpFDvo51yaw4MbCJYqDqRX2voEG9vU8HxhWjbBHHgnUoY3xNnXstj23xP1szqoRbDRZzePf",
  "key19": "2PdLx9zXYeMtmJkdZ7UQetjEAQ2LooqGJxJHi7TwhFo8NBkRG8ir1zbm1Rw8QTVZCBPvK5X1h5hhXLmZrhwg3Zro",
  "key20": "3dQe16UjPr4wFhT91SwkDu3CwmCksfZJA77gUSj65ugu2NWRs59qJ5KaDxGyjgQ8qxHz3QTCTsusEnjDKgo66tE1",
  "key21": "1agpPpuHVoiRnxcJoZwpBLWaYbVhTjYhpfrNKyFpUERV9GHGGdT8kJokE1k9yfN26wfukjsxfJdwSQVoJPg8yJM",
  "key22": "5WBWTNemrsvfVRrJEH8huB89E1QtDMcsUogSJwygDQm5CYyni1wedhLFj7vpkyfgMGPzLmTmaVY7n4jB9CqJn3ny",
  "key23": "3TmsFG6pwUyRqQncgELRUmToaPAFsLFwR56w6wHsnU3RmPR2ZUapR3ho5JpuK5a6JrYbnG5LDbx2QKB2oDzRMSEy",
  "key24": "YUE1baP9RpZW5HLQP6eckhuwbungaCsQZhBZV9EaaHV42tKEUeTr84nS85fdL8QreNddzt5tD5YSqRMBFigXGn7",
  "key25": "bPTQ4iVyZmfUCj4jWoFHtdZvsM9MYnh1pVD9wYks6uWexkFnpdk7w5fFvCboTuJEPpSnmZtzwC9CuoTYvsQmayH",
  "key26": "4bMF3UUVAJLF1fX5Q4Y8n4VkSHHFQgdrsGoZpgjADTfs8px1prU1Whti5HfauBG8zUAeK6g4eeJu9iBNrc9qs3U1",
  "key27": "4RUJKhzAgSg28mFDvcX5sM7wbBEtEMw43XKxc2GtjQ7pLzpzNvqtJEePUhXW1YcSWm7T7doYtLGpoxhmpKFwYf3D",
  "key28": "5e4pRcbmWp8EcMvaT1Jy9vCjuPeNGZZv1GMBwyzbESe2EKBXLjZ1mQCT2NcaEpQpvpez92izkjiFTE5aQkJ3zbTq",
  "key29": "3Boi69SRTVR4wQxHzw9qBRC1qqjZcPfhWTuc3UeLesnA3Rbpmrohn6qyoxGXJ5aznNbEpms2ywn4mN9PHgTcd4sm",
  "key30": "2Y5VXPNzAq3bkEX7GQQFHaMSteauDBrNgMw94vCTmocdPpf3MwjzQLGqj96RrLBGMthEVoqH3LidiwUAvfBo4wZn",
  "key31": "2D6LxKV3c8QcMwjwBbocsjfbTAKAxFjnYJVqQP9QsqsoVrJkHR5SGMeG3sEAnMUX1SSWtMMCMwgRczWPVRcJK3T",
  "key32": "5yVJtxTmiJvh3NLyRCHSgPU7DBcSDuHqo8yDEy6NWN8NePZ1LuR3k2izYfZpHw6HA3vCJxe73h9NwNnU9rFkx6cp",
  "key33": "3yH3YSnXrWNc5RHnFtESLty4oKSvCgvFxLsNz35f9uWKVmDJ96K3NerAJDS15QmrdwYPBJXTPGXUU4TX3Z8KLGEw",
  "key34": "5gMHKXt8j5pVzapJMtee4L2ct5QGZc6CdCo9FoDPr4ELX2ov6tDHPMG1UppP9Kee1fgC3zbiMLjiRgMb2XyRrd67",
  "key35": "2LLnxzBgFMV3bGgmKYUhsTgfcFtwcoRLk61SUVAzaFJivEetYYb6qxyphUbquXTT9kcL74hwj5XWb1jYkWS1Ysjk"
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
