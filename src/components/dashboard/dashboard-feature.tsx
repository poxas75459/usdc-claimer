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
    "4b4iUcDQ5814Q4WbYULocjxkDYGoDxZL7x336HrAFnpbrFVPTRHMVYRBYuSpYbqfxBfpyaZgTUiPx4pq3S4ts2oD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3HECv1RXYJ3yteaMzdTfVwfSitZ5HhjCcatfpLZ3SSUg7MNg6YY1ZRdsihzP5DVsFnE7PiiWCXSGeDuzoc3y5x54",
  "key1": "5inXio7MDh8eAPN9twBCFz6kwaifd1qoCshKwZuypK9fbjtHryyoHVdfyMdcPAfWWFyv56dQQFMADEHW2UuESqH5",
  "key2": "64aia6FNZWNmTGLX8wwbMJnBWeBx9YEVtwBDfPvHD6iuaTDGhQx7dn5Zb64LUKoLxg2w1evFski6D2srnkCBgJjP",
  "key3": "3jfMLdaaMU5CbxTsoXRNXitHBxKwn8yfifWSKyyb8MZrS8unNf1dHJE5Qi5gb2YpqL6gkVpdcDmWx9KU8UociK8T",
  "key4": "4Kxe7tSwPDb1NoRMeqE8qVQBUigQgsGXMHConRejjhbzceFPJBU1ZsaDkPXSGuR2wP9HodzyNtAmNProE1NUvq5Y",
  "key5": "2LTZVYx7uFpMv63cZ3s2UpXADvJCzQVtYUHLvNZy9PXNgwdFSCKoTx9Fs5Q82cZ3ydb9f7DAS2QicjxwgSyRP5y1",
  "key6": "3iaivsUEYV6JYAHHuMakrH8qg2cbJrLfBMjknQ5CWbTFGdX1p1n2XYkvPAExHAowbdbBLCopn8eVGvPN91Cb8r1A",
  "key7": "5KpLyeuJ9AMXoVqwgwCB3thTDGuQYDdDbVcpit67Jtkj49zs9yA9mn59C2qkaeuYZKxtGa1ACDphZokCB6vbPP4o",
  "key8": "4ppAMaTLupwy6AWYf6U3jQae9h6SZKoWgVRzFxqizjW5N2isYBeJRpxhZDernqJWUPkgAQAMuLBjHJjinhHdJdUd",
  "key9": "4v3jXYe7SZQLPQtxUqSyf8RevLt2HG1baC48CoQ2xKDRUaXHNBZYQKAz2Cqzjm7jLsYWDjihGKEcf5D79NMPg8VA",
  "key10": "3hBf27hsbiBXEH6FvnyRzh4QaFF978jnrTpqSVyDznfC84z9H5F4eAwyAVZYYoe7iJ41hTouijVkDTxjXsqgEspv",
  "key11": "2DVnAm44gnE5jX7uispRCp7F3FZ5TWt9EDgJGJk5umfFzt6y2SP6WuEnUq2eEQssJWNAqiU9mRVU4U9KpqmdciPX",
  "key12": "49NekXyfcKp4vJqoU9Wo9J9Uv3jfFKhtzss1gg7hqaVwgUL5btAVsmchr8t6VM6SdHyNqGRPSLxmM5wJvMZKESEY",
  "key13": "21oLWFmSztCRAJmgX9vC6DHPmMzsfUmTSNmikydpokhgynfv7iVyTdAxZSFrYsvaPDjmpuAVMXRRivF3EamL7bz3",
  "key14": "abhR7VRAjVLZk8RQR8BVZQ8qo5dfVr6RzVhWujL2NUHooW1txvpAVpejzGeJAh2RjHdPcdLcUYPdvZP76ZBCj4D",
  "key15": "2DhzcF3dFPFcSBtWn32eo9vGxhJcsMDa8A2VTCvWYb3ciMmGXQ76vhjQUkU9aNLfuxeRZVG6t3P6rAhL92z96ThY",
  "key16": "5vUMKjk1jspHBQ2oXVxqEohZuRYDduZ795oh27jxcnkMcykF7229B1HiieVvGiH32B3u6zSkBdXsbFacVCjBPojX",
  "key17": "4AvKBwTkJwC3pE2KQaavYhi7mjNbibWmSDAffKETuGENz9Cw7oLs5kc8cVSBPeDqrCKgbwYca7eXiS71L6JPBzu4",
  "key18": "2SrFi3rbVyK98jAuQm8ooi9eC9PL6LSQxWtS3HifB7fR3iDpdxKCY97ZDn9kPE4fd6mNZQgESQgQ1MEMUNY4ZaWE",
  "key19": "2ofvmw6RvA7F7HyJoLxHcWW765QqQeezYhgMRwETaSS6z1bgKJoYWiTco6nbVK4FB6AUukELkzUUg4YTKaiHEg5d",
  "key20": "5x16zSZLZJ1j1Nq2z9as2ksfaErNecBMLWhTVZhPUk3DPXHe261kBhbq1CU15BC3ctNzWSEXLcktgyBeaELbKZaQ",
  "key21": "61zTduFqQVwj7Xpf9DnbxDRQx4WqhmKw9SQrXtfRiFkCWoRwh1WJ4Q7Zf9HRFMUmHxiGAKTtS3z5B8Cta6bw4owY",
  "key22": "qmYRwQDDaiGqRakerJCpBcEoUtQmA27eiyQeKBPFz9VEAobUbhwi3ryxTXng1mADeWKU3MqMLqd2iRQDNj9ZD3Z",
  "key23": "3xBWGWyt68GqivCv7LyXNtSCXaktkThqDusDSug5999ytZBkLhePPmUykZ5uKAff6y8S8bT9QnWBC7chjpnXUc6o",
  "key24": "2U2HyryyN25Q7k6PjgmeZJKgHhAq78kHLAaTqYRoL8VvyePeB2wMwwe3zuSaU2SUvfxKhP8Z1YxnS1juc8eqLB59",
  "key25": "5G4ePEH3DHwnh4AzSu1MfniyNEYSWBQQUHmb6s1BJgV5AANeMA6RbdrSyDaVGnkUm2Btn7e1PJvwP7AepjSGcV8",
  "key26": "4vv7dTJ6jWTBsBS89rPXetxeTUsjJVn6y1HDNS3SqyyQ6zy2CiLsquNAAsiNzmML1we433knuFivMTSnUgqrnLTk",
  "key27": "5PRTPRuB3stxEow5XrtLRwNgJZRvDUcd66c3RaeFdTDU34QJdx9zSh9WCbeGactMWPrcbwE8sDfL5oScBm2CNHAJ",
  "key28": "aoRdtxutVLogcdLC9EgkzXiBh6EaeWSA6aJTFEBo9soPYy2g1nCSxdfCbsKxPfC2ZnfVKmy3yUo76BReRrtPXfQ",
  "key29": "4eBpRy3xoeVFc7TfUmPM5DfVBbKKoW6SitAn7uBdWa9k5AG4PasFsFoDe45wfef7vBioTSWaKXyyizBJtJN8hZU8",
  "key30": "2opgbcDnzhitTxtt5yiW5rGUtbJxngD1y9xW8mdTFLwLLph1g7itJzpiem3cgodSwpmdTPXmnUQq8BCNRCGw6Xok",
  "key31": "2ipxtNgeb14M15Qggybh5gGsfJyxSojvd79TmqYZF87QwGh7qE6TbszYnZUtFWnJJ3ojowLHtcfQr3Ki9uTLmAxS",
  "key32": "572uyECAVMoqmdUX2yRmHBbJDkxBpThSAp8Ueg2irzA5DKGxPPj7NRzVVTg9341uwU3TGoZYywSkY1wZbbw8wPn8",
  "key33": "SGFxNtGA4MrSc6JaLT5R7RRMQABqh7tHE3HyPDiFYnTVPgmhxp843SyXA6K2BGfqu9XTT8jv1tcDo6ueH4XWzz6",
  "key34": "4LGArRxBuwQKSisHQUG2XtQCLu7ihiP6oYeuqbo1VG12ZZXwG7ymWfyhmtKhbfAyKEaUX1orroXuwbPFkVqXuytU",
  "key35": "5uqxRh2jHqKJgtu2oaZAccQ1k83xCHGYjrbnwsN8j4ntXuXBgKB6xjZA6ujfRV6Zr888Co2gUThfCVYjDNypvQW1",
  "key36": "56FoEdCBmgnVYwdZcMSiAoYAFbUmxagsLSWVTNt2RJFv8uuqx7FhediSpVdAPoeWBE6xm1bE83ZeDQ2zsSAxooM5",
  "key37": "31oCAWKTkYA23FaPQLxcDUFDvz6Lr2cUGhJV2YUU9GWdCNKJALAaUpYPiV6EQNyZAv8tUd5hQ2vSMbcqB9jNz6f7",
  "key38": "5SnjFG2cAgp6wETDuqm3YBnGodtQ12s39ceGm7oBmWAdp62mpSVioACD3VqiXo5vVYm9jnGJQYZczw7kKby5esVs",
  "key39": "2PsEEPzn9ivejEVuH4KU5mYGj5g6eNEGddkHEPqFXqbX31FpBrfumY9TUzS9mePGUNhWn2A3isr9mCVmX81vW8kR"
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
