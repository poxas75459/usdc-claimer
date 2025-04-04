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
    "tgyXojXLeVzmCD553uNbfHMQQ4LWLrXG1RCr53CaEYfPgAxNb4uc4xZRU1PPVWsuHhZMYgKQRL6JDKkhunrR3cs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "51hQXnLbUt5mPzCxich2XjJwd5iFKfe6vBDKEze8PYTLyRDWWbAg2dwcEG6zkeeVyVyZmHQqpnhd5nGi4ikFR8Vo",
  "key1": "2Sx5Es1CPCvEvf1uKtL1dKke4ZXZacEtQTmSRrq7AH9UWtUc7RQEVDy57gwkKtH211dAHSRSw3A3Vjhf88kfJCVo",
  "key2": "5hWknYRxnpM8CAxp5AhEgCLbDYmjuQ67nNhYZH7i4oRDUEX3dBGMwyeSQG7pGJcE7Yec8CwCa1zRiVoi9ipimEdX",
  "key3": "5P2uSJTfgfBK7Yzex9j7N9tz3DgXrT8cx9vbyPYb75vTGKsTjo3TuDnnrYizGAq38jwHx4EwfdhfSN5cxxsHhMhY",
  "key4": "5kKziEkvueKsKUirT9Gv3VZ7AapACHiD6MoEhGeXNNihWK47iNUdHXC2tyo9hSkRui8AoxVmQuNrGDcXA2ffa4x7",
  "key5": "65eWZ3GDVDtEL4RTJx41ALMTUdSkwvcD5P1YwyC4MG8hPKAZM533t8WYnCnJLXM4kocwYBm1x3umSQJbupcoVRCd",
  "key6": "5iJKKxCQaKjadQTHbVtAdmQEN3rDR7PoMsvDucoZftmdpLJagag4ar3yynH1tXjyGEE1sxBSoZFQUH32T8fLvCap",
  "key7": "3KXAncs2eduZTa7wBPgtwawQBNFk99fyK8QNFVfWxThboN8JUmQpPFFqkj3XZnRfK9GCeFospbPbjsD6hHxbni2v",
  "key8": "4emfgVttsuACCK3uNCSBgSnhQUocBdaxjiTC6fu4qTjycS8Y3EN2aH23vowY1XqXANGBSp26yoCBN9bBzJeR5RCr",
  "key9": "4u3cYVCzAduREuzcFjiQgGeZKMEEVSDViWUUzsdSTCATDVFsfrkAmraczzGf7M3JxbhgUQPUZ1gaiQcMDZz4vdAp",
  "key10": "K9pntpHzQSNhdhnFHAoRmtq9t8adHebykuf6FQK3R6t4cTuQ9g1yUtBY5Ja8uF1JMFPXXRrxrqzux3Deg9VPxsP",
  "key11": "2jTDCHogF1mDkXWuc73L1nwc3seyXej86PNRMmE5tCjxMcyRMqAah8eHsLefnXHX6DbK5hy1eG6FMzGTrtrXRRTi",
  "key12": "3LX4gtvKWCR7NCQ28oa23NfgBusuz3pgD29S18xRNDg4ptYYFvYC2PsPNhZmoCiVqRopAPcNiTcCYGjRZYfwhyQP",
  "key13": "2qoLPU2kAMYGQH9xPAA5u5chLqCa3vBTdFvi3vZgKMGdp5THJMj1qrWrJKcNjNopY2qCrC6XeCN3QZRMJKz6e7C4",
  "key14": "5GoehVJmSofAnM9WnoidkUq2noNxnE6eHWeGh7giizuSDoNUS44rgMLv3WxNYtWXBQM59wCFjSryAUX7gd3BNamk",
  "key15": "5yrvzJqiuLcgT3PduksaraNnW2FgBVmKPV9WELuommj3P16FooaEEGxE81qprk5v9vHFfq6gYmdfxan35ZsEoWV1",
  "key16": "2BRJKoTKMx29sgsnS2pAdUKBoQR8uLdi1s6C2N4697ufATo6umbVHufxucTcDy7VtjYY7oDPDcDdZqsCxSzHpzyd",
  "key17": "5f1Zez5BwPJqAsyMnkFX6X8AvXNoP1boqSbkB2NNocxmy7nd28uB2KjTVz5TYEDohFEjiUefqJ3HAAdqkCf8KiFQ",
  "key18": "2m4sLjM7fZ1iyrSpCDbBXSbX4JLN7NszKHMwX46HKBEQAZjU319EoYQ8WHsWNU9JDF2t1oX1P3SidmjAmSdHL2rM",
  "key19": "4MG5HqRr4a4BY6DMvqSdw1fomXB75wj2NxqJWGfQqaSM2pz59vN7r9zCuutRdiRKE1n4eE5VUc3TwwdFfGDBmFbC",
  "key20": "4JBytKinakAC26DCr2oy3ZDahx3UaNhGCoS1bCCsNuK47VYr4o2yiXUqCdVDZszMni8pGQvPK3PyTZekruSaJiTw",
  "key21": "41YzFZY2LnHKw3tzwbjghWbooCpF5iDtsFi8psBsfZUGCBx1hRW1hKuTXktqXrptVRCrZnGgvCkkPkzSYitT6XuZ",
  "key22": "K55s2Z7C3AKLaBTjLNEAoeS3vAm4ziQ3R13QUsoXhDYrPGLD4t443CwZEjHsjJkdGWLd96hgUeEGwovHVv7ff5H",
  "key23": "4sfjGGsAfRZaLt4Bj8q6N3bKbVjjrsikF8D4kXbT6mEdUJs3znugzwVcazFTEzXY8ba6TRE3LXGSvnr3oeWQGJw8",
  "key24": "5oepT6ZuhKBoeTy4ZkxRQMfwCXUnrURJjEXNhLroLp8yjHJfNTwLwgMZ6ZgmGTFet3Cm1CUwYfKMq8MAMWT7oGHE",
  "key25": "2XfNuH3eZYnFWFJXS5X2WCPsmmERC6GDiwW8Rh6AQZHZk2wbm4yKyeaa9cVDjvbDeX2f2SUPSp416ygtoV5gBPuT",
  "key26": "3r4LJCcTete4iBukMpYrDhL6QXMLWtZiDwXzi2AwTvE7W6Xbaya1DRPMHKM9EekmW8YUu1LHRiALFdYGX1NqaR8z",
  "key27": "2LkaJbJ5vFRJKVopitF6narV5UxsJmi95jAMUdVnGt3ksBG87S23Uvzu6WD65WnNuXgrndhN2cGrkVAsW3sU1BPn",
  "key28": "4sp3sZmK9hwTbGyBW38S8v1X1ZtEDrK86JynU7dVDJ9SJMYALGotyUR2i9dVj8fZheCVtbdsKraUEB6cQthRGmpe",
  "key29": "sdsG5pCGSGwZqvfTkEdiupCpvxe4UaPKi61u2Uo4wbSUjWQPoxj6jyqwJeuuodEtrtAra4hennR3pe2jgT5uhND",
  "key30": "2TJBqJyNyVKJCC9dWnTE79zioQPScNmjQTroUnsvQBDa3vfRMB7Qmg3BmKjF8FkoeJyjR7AB1sRFMCipmF8QmaT4",
  "key31": "3GiVxjWSuwzb7PwJwKG8rRMNXqDjQnyuhw19jW11reWW5C27SoH4BTBUTvs4xVpnYwvyDNArmEfS1iEvTvEiHnN",
  "key32": "4t29AQPQmUXPbhPAjankxa9Q4Fv1mrS9noye3VjrEbYBV9aHYEU8Q2nAGBbRbhYFF9uBBB3jwpaJRVMziebnEGwX",
  "key33": "5ZL2Q4GFjTjLxA5yEykzSHrzGVghaUPP7vz2duoAP5LLRvFhkEoSMtEMWmwYq2pm7eGgJRzYat25UGNB1uM3dgGV",
  "key34": "H7vj3M6XSQtDcW6Tbaguih68i5AEPxQNhwHTcpikzhAox4yVNoyGdF8EF64S8nL6VRDFst1uhzSKoSLtxCgvt5U",
  "key35": "mEdxt4uYoKxGWf7rFVUFCfzwCeD61kuVBH1EUWh7NX2AcAUfftDznpoJd13bn1TTacDo5oDRRgzxKU9KYnwRcUQ",
  "key36": "4yAkyoznHtNtwFbkXYMuaUyDDAiA83455LQNC3VQpkb5oiy48rm3c18tgfoMvnRrAqeQeQfZiiWLu3xakuACKtTi",
  "key37": "5CxLziCGYxfdzsRdp6UUAXW52PYx9tC7nRSD15TZHw3fRcdz1bEFS6hXdDGRAvv4EMSm3XEUVEfFGtNgadEHAdEc",
  "key38": "3RiKvJzj4XmZ1Kc9ERSvD56SjoMso1U8MXSwTH8tV1ia3wFcvtLLzhADz6FTv7hBefTAFrCNzzv5tmTKB8garuAc",
  "key39": "4m7TxSgEvHWYJShgKQ2qpk5hTVxuDmCDrNcomziwbmb64QZWVr7wT8DJ39VNquSnnPzLiwAPSKVjcjnogZP3bDRm",
  "key40": "2EtikKc1ssbQT5mwQT3Z23sAjkNXq96iDSxPheeMrWuZtaLtQYVQQkHBQeh9wKM93LQNY1rDupCUBrbZ9iEWaCXL",
  "key41": "3xezCqeT1tsmvYT44xQ8qJx7PWCLi29fAcB2bgP1G8hpYoxA2WGhSroLjbouHsoZmRNneCryjUpqWETQpfHUJhen",
  "key42": "4kcsGvPLrvpRU4DAk1VNvD59ePgyn5B1wSvjMimpZFfTNTJW6bGwd8YQgtwCWXyCYpZWSCLuHRhZ9WHPdY8AAcrX"
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
