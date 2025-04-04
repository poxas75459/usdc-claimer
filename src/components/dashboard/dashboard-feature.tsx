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
    "67fL9YDcJXFFSA9F7EjRgA83KLVdtT5Zwsgppdct6XHSaznDvqQDAEDgCgDEVFCGdq55QSVkFztRBS4y6nN51FZS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4YauE2jZJyPT137cRFagoS7Du2sGaNR6nSMLPpDbXQUznMVogqYURqvnTYtuzd7Hhw4pi5eq89dDYDRcE5B3mPd6",
  "key1": "5nTH3zPhsj5dUuqAFKb1mtjZRRfFRiAR7fE9xPkjLhZxadvuUU12U8wDRjNHB6WUfgewvnLFWUnUzZfiyo2vJrjV",
  "key2": "5fYV7iUDGvseEnfc95WoxKBixDCM8MzHQrNZh8QgKWaRJh11XYx41crpqg4axTFSWEGtWev4UFth4BsASxw32j9m",
  "key3": "4vvzF6rPzbNNv7CtHkth8wyvvUedhu6VZvUY4rBN9wMHQiw8bCocakDkHqcZhggXmkjV3pJJDmS6ooBAHqJrZA2x",
  "key4": "2P7UKMySdkYiEGBiBSRFLT54Tw2PTpEWueVadhdivxqZJ1582efitTVUAB3z5VABW1WLVDhKJhLU8yMCeXoKBx9e",
  "key5": "xrTfAQXh4rKXuG7RuWyoPsZC2tDJdNfx7UBqJg9ABAdCYzcXDn2Bhng8Rwabo4zqNdyKvsBn59ha4acsgQStBZd",
  "key6": "4HYtAd9Zu9SeJrwW64ax388dUsafbmqRrQQRaoJNr8jYeubyBuSyjavS5vBgmaztMjMTdB37W46NjCTGKYMLcsbW",
  "key7": "2vVgdZLmnZSTmmdo8MzgZJTo8kpY8vM12MCfXKsMHcFeVtEmoZdLwb77kShD1vSfKrjomcWWu6ncZ81giZJtxzto",
  "key8": "32L1mCCD3zrvrty8xm2GwXhCrBnwxgYH4sytedRdtuLVywFdcwTbNpLb1UbV3qymUhyyvBBsfDYaMYLMQQsxLmGo",
  "key9": "63x4pANH2frEDq2sYLTXo4xRAdzU3B6BzcKr7ZyCqTDT2Gdj24prS77YDBNhBUw1hjz1VnDRDDWhgoUW3dMXKXQg",
  "key10": "3yWzjLd92SSmeGrEWeJESKFiMUXRpfvN6dYqGDfmVQu8RXYG9JAM4FoNytfj1opgqAGmSMuewjRgBtXwegh4r5j1",
  "key11": "5S53s7gt87RuYwky27XqhkB4Yja43JdAiqzFojBrc6n6bGmMKC3JAvsuM1GzKAbN2dmgo8WLZPSJPfvXR4Yw9BXF",
  "key12": "23ascHTJb9Duw6J5WtqY711ou6nkC4zbJYZxhewr2FWoex4Lm695TZ9ERVWnHCGbvyF8xxmicFUEvmGBxxyze1wM",
  "key13": "4t8kfsAFAB2evVVUb6di3EJypNvAignKhozqNZnK5rSszV86anXGdLLHaspsCMGvTZk6z1XLJPMsAF31L2VpspZP",
  "key14": "233jHCBgFUBDJ4oRsCWrueLKmcNhZPAcnThWnjyHwyrrLcRz4dp8TVqptgEQuoZcKqipuvffdNBTHm2XUEMezyUh",
  "key15": "4FEt6318cRhAqd1j5xqqp4Grra5ebWwKHqYbt5SWVey3qpLfh2ePYkvWBW1aVHLFgW334bC3zqNWQEKoJs8rvqj9",
  "key16": "os2y99Y4j3YDtVjboMcL1tXMCTDphzmsc4VRNaCEwM9FPvVpWZvJSC5MWGqGwPsiz7Puf6bvqhe3MwXXvTzVmfq",
  "key17": "Fvrd4Q9nrKLT2J6Kv3UPLMs88wzvcbru8tTFqbXdavVBrzdN4gBcNzkAwCTkegxTLzeNtLVdGVuF1dZu9nibGgo",
  "key18": "4o42zjD423VPyRYrJaurEjFBFFAxhRQZpkmS5n7WnBKxg2T1eDR2FbSyKTgQwUTE11rt5uQGqxXdjZs3G9CFwoaY",
  "key19": "3XNNMVRSAg7ad1y4FxevERmzRn6pagH1XoxjeKABST2WaXow1oYP6uKPEuH1hQ47SkwwARmrWd5ksQ2NxjTSaeYD",
  "key20": "3BBp6k6Wn9kogisH8fQiUgStLwnA6fD52fTvfykjZAPwjfuWnWHdVuR6pkHJhhP5qR4y5QW6Y6NdPwhSmqR2DMGe",
  "key21": "32Zzy3D8MmciaSqL6nfude9DAiQ5Bj95vTf9e99QN9VbbBhVeJxTWWG1ne1V4JK8vprtx1LD8QzHhMp71udj4Tg2",
  "key22": "2u5yYY5kpQyxhiRxt8x7JfpX9i4oK5F8t5oF3hCob17r5cNfkDw2rdTB92c23ZXg9htJwJHYZYFiC1naDgD5Fdzt",
  "key23": "3WQ6tHGiUhaHMUojV7TPLdwmBjYWhZwmxadMb3WMHrcuXqNBhvJ4hacpm26W56VsyNtEEm6PKE8QLYKkh7ZFgnMN",
  "key24": "2h8Ls2RNbjvDBGGteWhNq74A81VVGNg6s9Lq1Cbibv26C6935BHoCgbzHa97BMhGUeiAtSKWbWpRMJTo293vdAue",
  "key25": "63ynx8Tw2PzDL6oQSVPVjQL9aMQ3aZAi3y7R9AuYZjb2fu3giECBravx1tymmzufcKaFKenkV2nydQWnUaUcEdJU",
  "key26": "HhkSWysw6ymBfAUP8vMghBmXE6UwbXhwEAF8SFRx2pGZRcQWwws2eonSgDNAVxD7vNRj3UdxnaBb3htLeAMsvd6",
  "key27": "54iKv13h5r3mcL5Y3ezqq7vx3n4qpEfptmsMmdmyVjTapzPt3WJYTA8SuqznGvKXrQCfSL2RoyS8Cg7WGN3ymt52",
  "key28": "4qKisbpfQfKVmaDoHbcnbfhn4aDEqVPshnka8HC8uKuBFLo8KtgbgGMzHveVReCF1295A8eqLpfK2nK5Gt1Skx9A",
  "key29": "3Fvwqkzhf1sYUbo1Hy2JdBPB2rkrDgekfwcqyEcLBRk8ne8w4rxLZoLJYnbCWn1pjVSd4rh7DyrtTmpo6kJmX89t",
  "key30": "2orqCfAkNEberYoNsjr9dP121BLtibdSuEd8xRcSSJo5SiS1GkFTRHTe9gxAQPTG51N1eu8qafpCHYoY9P5eS8si",
  "key31": "47YmGYJM1bozfanMLvZsQwoxT9CY7ohF3LuAVdycyCKHfhN3BSzRRjMEt61LqGN5YjSsoMgg4h6urc6oxUzQY326",
  "key32": "2Yu1gs6zpyQDJaqs4YbNWJdWdLyDo2qv1k24m9zBf7VBoMT8CJXz421yAH8HC4b1o1dear68frrrRhBAiYCLE9xc",
  "key33": "5HCHBfp1PcwgcZxYBcb2KsntnJaquvR6c6rB2TUUHhqeJ2Fiuqu33cZ6jkajjXkzS9uLvcBiY3i1dfNAYk7HC2y4",
  "key34": "3upDLkKFGQic28h8phyL1YuaA5ALmXyE66nzAXMrGhK5viD7NnpyJ1FL4naBQ1zJNUoYpMjVNsLp8i83Nmk1b5wc",
  "key35": "5qogS7Sg7KRd267NPaGH2Ph1WAtstz67yX9wCsZmvttF8sWhyUEkwGdbgHY2Qar4Rnz8BB4UZTyy2ubsBEgbdL4h",
  "key36": "4HjWpiwpU2vJpS7djVkZbd9TEYXXtDUPHT9dczXpnm8YQDqL8mvSt75u4bm5FS2nKhfuLBuxTymxjzMkzistrk79",
  "key37": "2xcK2sezUtsXSHsdEQtDNkT8K6a3zDeTombX7tKgdW9WA45rJvK2RPhM9KMXkftc6fBYtfnw4rxELmeebKKDH8Lf",
  "key38": "5iGQAQSA2foZfpqWXg5rrko5UV74epuwPdNpniuLWXfCymP8Va1kNNq81R9vQYbaLtfZssBYDHoSeCx7WUisXwvZ",
  "key39": "3291hTVdEMvRRTaRwrZKWRVFPvvAzeZDoPr5eeWVmjK8q8iD9EtRrzD9NGu2m8rGoB5yVJSj43XeeEvDHg3gyhNq",
  "key40": "5aLWT1xi9peTimKpuRSDsGsQNNFePUgZW9vc752vVyTkXoww2SemNhm8cUGS2HJgdDgzWMJ7KzK4p7FCk9aC4mjt",
  "key41": "52425TtDHrezngPa6u2EfiZDjkZbPy3fpD8gn7Q9CJ4DhL9NKG8hYf38ipmUbQJnZcFkkp7NjEEKxYjXnVCpxUu9",
  "key42": "Vw38VfYhvQTUCE22vS5Y4zupMAGMZ1oX1YQ4nM2CqdHfcpwzMzpBWgfuvNmTw2XHUGovkFjpvSw9SQaSZcLyAQg",
  "key43": "HJXU133sUNxY5EC55wyz2DZxAGmLspEEkJqTHbenbuDd6SjkPLgRoLhT6TxANkV3H8LJmxoHgokeVpCB6tCdAmp",
  "key44": "5bxNhjDPVXL6ZXYUKykk9VzZYrMTDQD8wLzBv9pKqxPE8PPPejXq78VJArrZUDtbbzB9dUZSaFyxCzMm5tdLtMqG",
  "key45": "38tdDoEMYHVnbPwKkSQNkLzSRWc8tYqephhf6TYrqPV62PMb81n7f7EgsGiLFGuhgYSQf75vheL4MTiTBACZJ1C3"
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
