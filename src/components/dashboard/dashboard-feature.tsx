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
    "2Boc2TrWPM4Up6FMNxphToAsjXQBKtFG4dwA7s71VL1grUQ5MHQ9py4i9u5zAuPBptXkUGiQnw2eRY1Acr7VpUjg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5JMmsCEpqEQK8iQivyDGoFRBRYp2QaFThtUdxC2U8t5yzvh3UmoByiWSFJX1Gsj6YkB8dgrigPDRCVgVPNAhs7jK",
  "key1": "QWkNCusuVq1NwhXroeXPNjd6P4H42MrYV6ywLsKfdW9JLvnNUUDVG96MeW1Sn7Wk4VWpPBB73hzzR7FWnh8AbWy",
  "key2": "3Y4WH14fPziU6fjKhFbaDBVi95H5LLssoLpdGDF6htT1UrpRHn2ujVnQgqvQXZxbusHnUvSFXAAPiane4EP2W1cV",
  "key3": "3SX7KiL2QhuwZ3Dfg9x6TKMFNUZ6rk4PCKVmm1UQY1bd3Jgps3f7PdKfznQ9cZ11eyvZ5iLTt9CPMS83rWrzEZic",
  "key4": "642woJ8GAYJ7hDdEa4TmTBCRTxW7aGP1BQEJQvjRfXnCm8ueU3YUPCyNhzbgrpz53bfgqiVhUXrr88jyhWCAYK93",
  "key5": "3vBUPkv1xZko6KnaWQ3nFo3U72s8b3gNB1MG4btkvmcwhf9FKYQSaJ3vQbfL9cB3DdtGgaJem8CAWbHazDevKgG6",
  "key6": "5XhtXA5oUWP9B96WPPZwQgt37tVFwTrWF7ogZawTfUUFAMPLxZ5sRLtqKsQceRGdDBYn86oGPzt8z3wVegqSFRBE",
  "key7": "G2fF5Yhm1cjpLgb6PxNpdR4aTt2zLECV1yBQFoupoRfQCEzRy595vfHr8eyEQcnCPu31g1d4sEgMvxtAuh3xdtR",
  "key8": "64UTsoDsphQSsZShHaB6ieHfFNVmrtTRnVomTdjvPkaLYvwj8GzqrkL69NgiRoCa2dpJzKa2Po5i763LT8veT3Rf",
  "key9": "2ZAwCjxXE2MZFrWhsydniuUNa18EucBomWjf8W7fpC8ve7FAqTToWgx3F7f6zjtojEUVGUGWZXuKuP2VHdAuaKbL",
  "key10": "5vauD3noYhycrgMGeYJwuQ9QjRhYttVfSgctxkJFUqSaZ28vcXaFcgJ25Kxy7HsGsQEED2gZXnLUjTZpK3xccVRt",
  "key11": "mstPbw1UNi56GmFjs9UqGUohHyH7fieQhrCe24QEkQkJ9mZKRc9eEerdyGFTJHdz9zWH8Lh1VBFrWowmdKK8Fsv",
  "key12": "yHqefXBwnNy1UBQhwDoPAp6xcYTTwyYABBhbUTpV17srL6Q5ajdFxhLaGTTb274kJvEfmekp5WSg8mfnCRT4XWk",
  "key13": "5xmnRXxWQJNTRbH6LCb6vc5ndC4SV8gS5jWWVmNfQGVoigEXbfoKXjgcCcKu5Wst4ifm5LSeK418vF6dCu1eXJzG",
  "key14": "4KmG23W19gY4cdmga63raf6spcmAVxxYhyXBp7EjZ5Q37oph4YZDnVv1RA5J2eCWQHxxV6Eu6fi8bzJ9UNBb7QnW",
  "key15": "2hQXPxPJq7umTM4LJjBZTRFzLXu9o7DM2Kz6nkozjcyJSZij5NLZjBmSMYJCJLD2ypvYz57bMutqYgzBAM9AJKTz",
  "key16": "ERzzepSmTaUySoqBtNCqjunb8iEugcD44JNjNyvQpsuiFVrXj2FtqPZB9YLacBiV3EXqpUmk7DCFEB9xrTBMZao",
  "key17": "3y191qgeKhzCR8GvoKpTJLfz9r57UrdQwkaPujZ9QPMym4mLabbBn19ruC7DuvVM1VW1aaM9XkuQrnZxbPEHKCvk",
  "key18": "ZCufhm3hTGqXhi9bDuk84zhr7bAZLMg6B9BunuyoQfoaXwqMTocuTpkHatPVuoL5i1M7h8fKZtMPpSArBU9ndWa",
  "key19": "n7PGbtxjpVo2QeChB9wvcVz3xxmBdESUXuCtwaqJFyd76AgJii1Va7xrshe4rN57dFnaFcGqffkossXQapjhYDQ",
  "key20": "2ngcjkbT7x6M7Bo2kn9VDsmBoeBfTyj3z4mjmDoQDyMsQM2Y5G7ngxUuLX1FLFxdMuvChT32VbtBc579Jr1MUhyC",
  "key21": "3hfy1pv74AwXK4rdrgK9caudh4yKYhdxvP1gfuGdW2MhwvhigiUHC7qtf9MRVwobB3PkpGPhbCt8Sh8dvRGQCs9f",
  "key22": "5DvGufzsxpLZoohdtqfmhZyWzwyiFVGH9vxv9RbX57xM9mgQfWaAnTRcVS5aEdeyeWJVifkZwjBB7BWdKPEhwkuj",
  "key23": "4eGYiUxRNcA9CLSydvCpKPViMqGHA4mho424DCdEJzfu1vgSMxr6rRtEmkyy94QdkF87So17tyP4eQimyLanTP1F",
  "key24": "31YzTeCdZ5EmRirAthDWKCBkFHWBT6Cx2RbzZ6MnwgFud6d37ZX1qj1d8nfz9M8adbS13Dy95wNBccyTMh3cnNEb",
  "key25": "5Gth8E3b8Zk7Kx5nCfpajAVaKcib8ec2Fes6ZP7aif9WcWojeaYFdhiSMyEE71fxqBH4ND2UVkrp3mQ89Jc2A4jm",
  "key26": "51oFS4dvshZchLqgbF6hs1eTKV9vveszRFp5QZMShJDH7dHvF42QsLKMmwextJnnHAh263MseC9U9yUNYU3XDTgf",
  "key27": "3XmWZw5dcXkUeUyBLDgReCdyb1u9nqEEwivMysR4Vk5Jk8Ja4mib5qKeYyJWCJ7QGaHpeSyiWBBuAH5bKQB8dYLJ",
  "key28": "5fXLXCoTTf1QPm1AkWkyq5ZjEWgxY9vDyM4VeDSuwMhg4PrwecPUxKvQVwAu2mQEVnu7vEYthw4MvpxFPfuRiuK1",
  "key29": "5NZ3CrikLRgcycifwv73tpiJqXJwMX6CzEKgtqqGcgbo4Z2hCpAvMWUwLJCfxDkzrg5hryoYdh55DzmbXCKFBeQR",
  "key30": "2Y5HKELma6fhkSpKa8PxoFFhgYpza9Vn8NLFVxoER6eqTJcz87FZqHk3AxRkiWxe2fmUScAymZfTGY7EJuyJh4Yn",
  "key31": "2hGQRH7EnWH7SVQxBbrKwNhT4XRLW9KTTJerW3avJoaKX8b6rwcUs4EZdXBNXBRBvnkADM2RPJk2jkNfbCRxmovB",
  "key32": "41rHzKaDBKVmLGWqMbz8kgJ9yUdZw5gRWQDrGoKxb3f3nCvJHgU6c6ZszVo8LyvtKqS64ijFCtkVMCWmuQS1BS1U",
  "key33": "2p42U1rDTcBQZatkSzFhtMQR8T3iLZ3g5zUzx5eBUpPEZfJeUwz6oDr77DYVeabYcrMLjTAjUw2iGX5pEJaMM7NX",
  "key34": "5qZhdyn89w4M4gFzyvUBMTxASGj5ugnygqRZXUbN9szKLTpT33AH1XDvC9h2JBTcySUn9VCqhPudDHqyv4tS92hq",
  "key35": "4hEg52sHhRALzQaoUXmaMWXeuZJHsNWyEa5crVw1j7BCbXsEuSyXnNgJosGyE43h7wcTrBZbNYibxSd7EmE6USFh",
  "key36": "oxwDVXSwakKBx5FNkgDWDAmu8z3pwkbwHTKuguw42Kg1wniTztEL6egfsC36nxm8MXBt5FUCPodHjaXN3hfEMSE",
  "key37": "2BVhFSWamaee94r9gTv2oCDVyAof1FqoDYDvXuyEqtf6LH1NWeaqk1aMRYZpPqvzdy48nL1RM1CAVwPCeYbMpdi5",
  "key38": "2QfAJn7CYAQD3xeFxhDrnTWU3bZ5sGnXdAqfHZ9qRSFRZgKhcCLBiJf3A9xvvgP2cnDtcJGE56KF8ZZFvSBGPCFx"
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
