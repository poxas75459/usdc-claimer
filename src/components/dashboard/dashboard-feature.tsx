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
    "5KfW5bp5fbiXQhj8Aohx4YoEy8euH21LJPeodBrbcjwuN2wCARBTJmZjsS6v7cTHiHbkgaEGp8RkPTJNiLSpXcsi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2hLg6XMtcb3ML63b7a7C5Cd9tDqaxfHKEwC6pUwmsCmgPivLSsKmHQp2VDSo2AMxt8Q9FSzTfoSdLiPi4CU1QCqx",
  "key1": "2obwQB7HWX7AvLL3HCSK7SbrNvgEkeBTfKxFKVDgu8iYaPs8Z6fNDfzbGNu1JDT6wjTMw4Tg3RzKj3zPYFsS1PX9",
  "key2": "5ECPxkdDxstLJBttQVowLqAm9dwjeqfifPfV6QJESbsPYNdHtJ2NkiP4MfMJbsjsn85oszYbAkjqVYSfnufQAcwJ",
  "key3": "4B3m1KypM5oemFAEzMpZdVbj8mnSrSoq9hwZzVUzdmrzifioCoFQZoN7zNi6rNe7qfoHRT55feHo2vadfGdatq2S",
  "key4": "4r6UTLrZH8DmnJ7jLNcQ7LrjYhPoAT52hF7XPfpriS2kTgXNMgVg5rxU9jfckzqeJEyomojnpnrefqqnpmLSbKFa",
  "key5": "4U3A5jGGWgsdF1ZJDZ1J8nUmiUSSPDz9G5nr7gMfUG5b2h41Lx9S3xTspuNpVzCa4wDqZwNS2JLd7PAzoDJydPCR",
  "key6": "oZcSWUyjbHegrLGAfey3ot5ofV6M7dbdVgCD5z3zf2v85E1RV74HZ2UGmeCgZfuYApTU1nwrnMf9byrhx9CwCeu",
  "key7": "4VgFjzntE7QnpuP1y627msaR9KNe69eMHqb75SULqppPxTDb73aWV62yaMGmTpX2T8gUATtgWadJfNvJLhf4rHCQ",
  "key8": "4243qxKWwdR7JfLwM6o9UHBMcZbqV1ntqHmVTSQZ6G2CZTyyJSM5nRdHfY755DYTptYYNmDxafNKELKXrDwT6sCj",
  "key9": "4AELa6LeWXJPq1CY5So81xEvgiKEqbuyCAtFYo8nSnsEgokKaZSZdaJzDSyPtajXF2ts1pw7mEvAPtU7ZXDhf8ov",
  "key10": "3sgJqDmMBXe66K4vet46ZSxAoyM9Yo8w1LsdUUTeniF47UhFHRRDehZQQjPGqGt1quZAi59NR6WSeGQvwEZPACe2",
  "key11": "4yKBccASPqHc72LBDJQM4eg7STLxfaau36AimHVSwtfpkMVvStNhojFRGyf2E9txhuynZguhNfDudBAyW2mWNVMB",
  "key12": "UDE73yRC7GvtWtmhnxiFXEXyAYFsHMduRGoN6oPUwQcqwz4x2kWe5zAqomeDDD9NPewPGPHgiuj8xBmX6yBqvKg",
  "key13": "5qMQSzTCqeZaBqEM3SkLGGPpG648XXdqdwA5YbMyv1SvrDgzk9DSsMZfWKAhT6NyjeTbGV2zQTwALm7PNzevnpae",
  "key14": "4bcrzLoGeyR9zi9hWVcvm4NHbtUsAZsUu9hPyUBRKB4seh3kfAuA8uNvr1pioKwHzt3HgY4TXirdjR4TRy3jv5vg",
  "key15": "4SE9gdJMAsnTAXoJCWZzBXwemwJqJibUDxTCBK7d2MoQmJLcNErsjj6wGHcqt7NrsCEaML74ag2GWsVWioULXMu2",
  "key16": "4VzjvLxh7AKzjeB1QTJysFPSZub4oHzzrt4z1wV8mfwjhtiaehkVYZQctDtKsQ5fCmDBPC5SzpJnUsFLxFBfqGCP",
  "key17": "TfkpiPsmvstDmAfRwHyGRFtmWdsCmS7cpuMMC2GADGi5FshpTQKBpGx6NbemiKPQR72SnaabcM7W6kR5mwUJFcS",
  "key18": "325pU9XYGJ8Qi1JmYPvftm4r2BvLsSny9Rr8CXn1fuKeo3q32Ze1HekLsxGDCz4tfRQtiqTGZEQqtCyttTQJjWo3",
  "key19": "374Qk2KmuoCkF76aigxRi76AavhPVs6pCGB6dwngUhVuzDfVB74wSYP7XcpH8UjS23pEoa3UrwLuGR1g1HsBASCN",
  "key20": "2r7HbYo4jU8ETxMYqVBYE2zdjxqacwyDjFEBTwKsYJEygqECH45ATrFpq9WoM4tQn4Css4AXycaRT4McbM2ZNCwN",
  "key21": "4wB3A465yPLpzBPmB8xxZGywL4G3bmn4YssvzCRo3keFhXqFudbV8QcL8QhUSA8uPxr1CCD89FiNPZ5UH656sTAH",
  "key22": "5om9bbGtP8qKKnHsdf3fBPVXhA3QeL6tmWdQMhgeAMTUsgN9JRChT3jnrF8zEw62HG2gTbzVzf4PxGhmBeYsHWG2",
  "key23": "72ZEWeH2g4u2EPj14pJgegg2cgFarvg9q9dSFs7oKY2CaXNphBM17SibuyjukhPufLueYPsRh6Wc4fCdNx3YTsZ",
  "key24": "5Y8cWKcZFcHvjT5XBwcjENtj95xvLS5Tn3wswXk86NqNm9G4SzfjFfdAn5sjcYRTiU3BzDaxUFiA3Yt7rTwkbgC8",
  "key25": "48KDguzVpx94njUh9fPtVuCGqhzwqRMTjvkPoTRnaLYn81RdgDGxsHyRo19F4PV67oaF6F87sSgWM2GPMqdWVezh",
  "key26": "a8vPTpdMt1Eh4koLetCndCSVRobvZvxV8f2T2ZC3XNjB7nJSdd2v37dR2JSEVNPrbiXbaWhLyiq8Pu3WV8PhzXM",
  "key27": "2Y8bv4CNUDJX2wLpgfLzYRSAnPtaYojuymkA4wi8uwFetfiRn8BgG9tUdErZ7bacecH4ssrt24MYrsBAptrDzYUS",
  "key28": "RycADy2mB3twDM62Q4kQZ2pfjWFBkrikMpb4DhP5EEihYPgu3k5FZYxTFkVmaHxYWFrxo5JsnJyEiUe1BrAcvvm",
  "key29": "47GdxE5yy4npwvBKimFv3D3gnSia85VkXGWUMJMBwEiqCU2b9Vnuydo37hJSUeqFaEX23tuT9QmcckPDiwW3EnZs",
  "key30": "2VdNbTMdAdxFmKjSffygCfoFHGyPFV58vigxPPLEtwbQCfwtvu5DNhi8cknHhJK1J7aFrUxdDeLyNDmHBRacSEGz",
  "key31": "5CWKgW5Aq28jArSXnEgWhPMdSt4HsfBCWtKMRay2BQeURGgBJSAYJLUyXGb2aaLdyapPnf9YSpQaPnK2wivK5Ymu",
  "key32": "2XVm1dyqxWXex2TjKQcRkFa7ArhqknTxQMRJrG7EGAfiJ2umS3DaHevny3KY8tDGfSSHrHPaSHBhfcsKis9mPqHR",
  "key33": "2oWb187L1mmxeH8BrMevbYS3LeAVMds2uz2ZtFFaAV6JBdan5PtBojMbM9kcxAGNe8dBM3DmF53VuFax1Hquntxy",
  "key34": "3XSS8s4sEUc84cQg12Vq4h4yd8Hr4aqpUu22C6BemVAuDN3AgmqAYgXs3zPyTnotNyyXvpscBy49aNFLE5QMnksp",
  "key35": "j4s4Xh7JgqxsGjtANny4x6DczELdoecCP96LwPEg9LTrTyh22et1EgiBusd3eMf1zN3h6CZE2cbdEoFYrCUxM9P",
  "key36": "YgYdS11knKHhxSD7rVTXbT82KFGRoCRE5v7CrtiZPEdDMQTLu458z5WpJjeaHARg3BGp3NsS1yG5Pfu11w1emvR",
  "key37": "5kNTvbmfoKodyD7fym7CYZEqFGQAaqWw63Cd5q5TPMWKH6uejPKcGS4pkcQpDvRMr3ipgajtTUeNa78qZGypPiLk",
  "key38": "4aSMSHzPqbAG6uSifcfXSUJaCXhZxAcNaCyEZ2CQDWWTUTXpCJrPvYi7StoFjBc3wyBRaxWFzVGH4uo9NeUzoiv6",
  "key39": "5JRty2bBj7zjESHQoW8AG9FHgdbdXmWCjL5hj5fD4sM4F6Ke4Qo5pZrNYe1Ypd6eQFFvtq4LiFweqyHP6XnS7HPZ",
  "key40": "tj3zBgXGeg8htxvUux3Z2karw83gFCqkZsCdHNWKvp87c7hAnsTdihK6Edd319YQ1cSkJhEmAuzrdbH42SupAYm",
  "key41": "LjLWFZofKjtqLmnozeNtpqiERzm5ZU5UsqAfD9CH5quVSjKcpmL8R89Us4Vvk4iBFu4wx21g14oveVxVsVPL9tQ",
  "key42": "3G8AJiS4Gu1GcpegQTRWWmpeCKHfdoW3CUusjyEjw7mJwNEnYL4CKhpv7nsnqed5MPQecYPrcvbgEsHQ3CKX13Lv",
  "key43": "3d5QH25d9cNbU7kiKzjC6Y8Rj5SYAznkYSezWpsVfU25QJkppKxai166SdF4idYUf3W14csfCv3AnBJZEJ7Luntw",
  "key44": "4EMyRoDBYcRaHqNLntK6nnvbWZHcFmq9SJ5pv3VAyc5SmHNizRVuU5qud7mTDvz8obWNvTWMh9V4N4NWUdePDqrd",
  "key45": "3DtSuL5iLcgGsaZpbzmpAmP9YC9fSYYgT4kzsP67vGKQwSbyeHXXNp36Tr7KHJpeFMMuxGzdSDGUd2ppMPwy8aWX"
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
