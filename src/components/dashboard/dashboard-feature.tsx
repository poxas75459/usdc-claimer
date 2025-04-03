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
    "4h7CHm5p13HrH5oHYxYetgvomQBQ8cSTHfMX3W8gdEh1px97XtVALqyGYAuaEMPfJaFx9ZW1uGTFqxqVT6k74Mqc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4DGBcFjDXB5AN3bJEa3YtDymgCkPjEynzjRKQ3jSymhGnSpQUDRrGF6ibdboQQnTBtRT73FSNqDLsa4xLzEHnXLn",
  "key1": "p1fQRUmRYmj2DsoNLZFUX5H9QuVmwmnQqWcv2MLXyNotEtDrSEwsaL4mTG29CeNqzvwEE8kH73H45yadoNntjxZ",
  "key2": "48b4LdFUa3XS7gAQW61ThjxzBPzBQfkFS2gAwpNaVyVNi6hVJNUg4q6jbvS11F1Kar6CuJ2i1m9gaYKUgJ3rFzQZ",
  "key3": "4bZcKHwHBjeoHG7y7gUuY2PqDQ24HdgkLYmQqQn5TvgcADHJoQUAYuMEebTBDpaxdCFDDhQwLLFNSo7ic5qxExJH",
  "key4": "4xqxS1J3z8jYYVhHzotj8q9Q12uWTSaY5LtmpyNv1AKVYBin6FgyFi6GMmX3VtoF2YScwKEESe1tZS4D3AXseNUJ",
  "key5": "rNyQijNiTDNn7c8PpnF6KSBtfmu5JiB3KSu2KFcFbhbyWdHKE9KkELdiyQLWicF5fuHrRk1SjJSw12GXCx3vKip",
  "key6": "8J8EdeHoFUi5ye1BQrf98Ar84LMqDjpim39GNXxGjQTeWkmK58SzAWb2aX97i3mvQBMbHTxgttrEpDvHkiw8G5Y",
  "key7": "62Rr6KnRnD5jk3DE9V5JiR46MPUjdqmETAZKvkLZTRhnJt6DjD9CNhjhuisfLUHiATN6brEZRpqgt3zcrejrcoQf",
  "key8": "2x2A3w72XcYHXH8VgKrrxPz13aBEJyGUapiGEGdMQqHm1jpAUpDXZ6dfB2Tv5GVW4DPD7Fr1gqXS7T56wQdgaNe",
  "key9": "5vUTFsnfPFkxpeBUCgkT2cSV5a9gGP6Rv5KvmtzwecSEFPrwDLjBFE6Ld4UYus84Bt7DcLd6hiQxBnDXESnyzjaN",
  "key10": "4Q6QWYSHH2ryTEoYR4vGhsVg4cxVaya8JDtyfysPWwBdYH7L3PkFCLoBfEQHGZM6QmFoYbegktHtT1URLy2JamL1",
  "key11": "34W4CRix1f8pYPLpsGVkkj1KwfH1Ai3kzGfGHHPsbR5mizcmwjjnVyeZFuuMm7p4qzXHgaLR8m7yMS8gnudQgKae",
  "key12": "44Ai6Mhnej9sp4KKNSNJc759E97m6DJewrWYK4k3LQZRamd4hDDniyVGiwTEmW5PWVv8qAG15YUq39RxqMPbAkny",
  "key13": "5s1XaNpyqesLXXSTnACZPN5etfyBxGkFTr47xe4jFsvvuN5zqhqJNJGjy1WMPhZGVSSHFC62RZwQ5KntCr36XNAu",
  "key14": "27QX5aUnozFbyVN3bsqPNurxigTCRV72YgSZTsWPMgYFdtrgq2NFs2JJ5Dn1MZiEQcMXjpqwTL76u1xSEUzx5CGk",
  "key15": "28nAj1nJbd2CiLM6kVPLcX8TToHWe1rMXxLkReb8CpzPCZFpZXHb2ohF1kPUW1ekQSovbMsNxA1i1LZFrbazB6Vr",
  "key16": "45WwncAryghrKRf4LozfcrnFVJBSBDUmgoWsGWAusQpMgEfStqmQDHYcTncJyqZbnXzniQpaZ5PZUgQzrgvUHhoc",
  "key17": "339q7p8pXcy2b7v8r185UX7SBm9sBG5NcMp1uBY3x1qm7jzDtRuhPCv6Zja5WXYuM3mWZZPZxxQmmv8USeu7RgW3",
  "key18": "4zg5kusje6SqPm9nCDAPCLkjKj7ab26mhPuXNj6Kqnft7a9cidGke4fuj4bMC31iipCapFL6aVFdXbRTHf9fvige",
  "key19": "5rQJgth54XXewoTbuzyBvnwfcriFEDi4m7xqiH5f1RuGy9tGbDFFFEJmqszjqL5sETARpkTpj42vQy7b2Hmt8jaw",
  "key20": "2FQxE5QzdEAX9fdQuyw2GMzWDnb7qaRvjrc4gMqSbSdMxr52nnGNynctxwazSjX2voMsRdMHnGwmCnZci3scXHzv",
  "key21": "2xfK9H2Vjgu5CJ7xtEjQGHsfRaMF2nKBchTPiUsWyoxZanwGkpTnUDwnqhJidH6eM1tP46mV5j333or4QhrxpDxc",
  "key22": "3Ez3VwaJzQPeworrEdxy3Vz15eZer4JoneooVoahZsHg2G9aTVTXmAHKedTCiM3EeqM461JdjZHC6baFcPp9Yr8Z",
  "key23": "3YhQL8XZoYMKMwJTkyTeYvxmsrHLBViyc97A1dap7j48uG76WCdowWMX8n4Rq4YSsXcHY2pD1s8pCuRVquomjKVk",
  "key24": "58zHjdF8UWM7SM8wD9Et7fGmL8q7TpgdK2VTFNzXNETEapRQEP8A2SpzXve1ACDvbhgTqNwU6btefzfqZyG5TKR4",
  "key25": "5Hia1r3E7eP6ykXuMTE3kwArNnCrSketroWGAHveHkLpoyhheoZjqb6deAGz7U2F4Z6FA3mob5YGVRYsa7i2Zhf8",
  "key26": "3AiaKkpMxZWH31SC1bwrdF3f9Z4bCkezdVzbs37bEfGrcN7W21mDpZUjsN8LtxyWXvEd2HAtupyAyeuBRfwho4im",
  "key27": "BHKWZTwWMYex17hM84uABGyWTq2c2SDHmmfH4gyMtpErsTuXX9Sf4eGWLRScD3oAAVn1urSVG4K29MUTCaAfG2g",
  "key28": "53jQ1jpv4JSXbSrCqnhVTBNeKs8oKWaEvueXuyhQApscbL1Sve6dG4uE5jWtGgpkDXZh1ozRRWg35CEpbSQAx8fW",
  "key29": "2rVUmk2NBM21gqYcAHjh6uaWPPAmurXMXaoR2b51z9dfef1mQiwZNRY6ASHSpjeSrX5SLCpMYUseMV2mK9fxrFME",
  "key30": "3x7wF17BkyKuijDdjrKqCUQqh4rb3zHXqr8JyTrpjVjUHcRiVMagwcLC7pfmpJTDLQTqgiCtaBez8y61rx6EXr9J",
  "key31": "KSVhXUdBaGbvHyyop13UtGWtK1ZhK6cRE2KNNvXiUocLU2KWnH34YGVcWRsXv3EAAWS9CtD3KXpQVQ17rUpVLaX",
  "key32": "3dUaELtZqKESWLmWEKAt9ma6qb5hjwf2atZKARmL6ncTjNkNob49qKPYojfPYt4sZgsgMKeTPtpwQspADcZVF63G",
  "key33": "37iH31SzFZcuFEzBB9nH2NNJzZybr7wwY5UbZhRhRVXq28pbu92NKJfTLEBy5pmti8XbsXfjErhuvZtUDKv2Adee",
  "key34": "54v7nXc6TF979UkXvnq1zA29PpWRnowPqshFx3b7ghN8QuoibAYkePn6Z7p7yFGCUCh66v3fjYBDFtAcQUFyqPhu",
  "key35": "3psUZCG1fBjmcCGcw5hkTw46DEGzkswif3JV5Ctdqvn2cxdm4vA4RLvWtTBhzdKsrAtBQwbjLjjhMEi25XAXUXCL",
  "key36": "2t8yyF2X2o5fHUQ9956aYVeaAH6T51ZtGzx5kNvQjuQ6MEPX2fo7wC76GFV67ASHo7Ex9osXNZGEZH7RTHk62hKv",
  "key37": "4BfsJpAtA2ZaJQCWb9VqNEP2yW6r9NtsBwRuLqcLGeCQD8zDhKYtk31gE8HRfbE1RhGYBw8cMpdn4NAxFSYPh3DE",
  "key38": "4RCGttExWxReqYwaN2ZyZniRQY5LugtXcmA3wRW5UaiohFp7jsff1CdWvtrxfZNWsU65u3iX7AghHyfCGyjYmtci",
  "key39": "nYGJ76N33TMCfUT8h1xVGfaGqAtqm4xEt2wkAJqBfF8bcaKiTYxqcBAB2M53ZDjDE9gE9QZwiA94v84BzE2A5fh",
  "key40": "4JxoUdD976uxVN96hXqYepfgXJevkC6L5SPyqwPBiz22GRMfHUwFtfwwSVzc4VEjL94fnL6rZcpanLSPkVsCuap5"
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
