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
    "54f5zuQi2WsV7mTjvxmbaEJzZxd3udYQsxF323MQ9JJ7K3ojpN4BjVCRW1kTNYG3ZA9v3U2nnifrwYmptfpGRDyX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "122qEjhFL6Sne72bomLvgTbgwwgoRwKW55Q7VCKSoUFYdNEzLuhrYRAoabXB3nwnsTtCG19MWus2maLWvtSMzYKi",
  "key1": "45VRKzLp46UxngRy4ZSvkQzoJZXAA2Sy9yezwmbiyjKcoWSdDBqiarCpmVLQncov8D6AKD7sjbzDAzeHRCctoWtP",
  "key2": "4GMRBXrtQBqg7AYpqHbgBcaiKvqpCPDLWTRYBBuToujm1EFueTZGbC12TuuoN1p5XtFXwpDBNs6dcKhRfb89YX94",
  "key3": "2H1HmDko541p3chHFSVBp9ZcoYRbMMkSjWA2Ym6jXmFoFvzgWs7AuEFQR25wGyzBAkmpxaFqLHkwc3tXecPhS2Wb",
  "key4": "5LeBzzqtMZRpuwrrNDTp1PfJwzEuasjV4DnbZGK8n3k88x2ogt4DVbNZbUkVEHFyoSLFxC2jXV9sePSpeckiNCb1",
  "key5": "Dkg9xzohcHdnVz9rGBY5dvneGXASew9F1bGWCLFGjBvJzzBQZpFBed7Dgf96yfGc4WrDArb6nPfbmnx2wHAtfoJ",
  "key6": "2NtizD1Bd3agMVrwRMVrKG8e9T9GSbYGpgixnSLCiZ6sUVJ4BJJ67ecEZSeyTDGH8SqQXHui3TxXRdAXanbE2f66",
  "key7": "2v8PEETDhPN254kidt4kJCpS7HRyHq4ovPSSj5Ykfz6pfHTgC1PKuHQUomcExxkVrp7MMe77AhLSdBukW5yk4HEL",
  "key8": "xC89ER7DtCEHZGvhuhkKEXcswgmQcufJXFWfy4FyF9CGCiTF6efm6Ar853ex3cPHbUZm18Wts5FqRz3UEQ28afb",
  "key9": "3CWPyKu4cn4gYbFq1mD9oGz9BDgvNr5cKc8U68snDbSCs3hR9go2DcLcwB3xs8RiqYYxPKkiZtGUMo25pMkv2aPL",
  "key10": "hzURuCzoTg1Ng6ddk315UsHWNguz8ZrpLKnUJ6M2ebS4Ytp51iVvKDAyDzQtCB6T5oPUHKskEDgzkaQue7dJBub",
  "key11": "3JhbYiTZa18kyFybSepv7SboNdHA3YZUdfgjNzftZgzGemhZorajHgkf4x7HVXJ3So7MWaCrdSN5FG5bxf2Fszua",
  "key12": "3AFeU9gGq1djQNU7D89ATLHNCLS4L24Q7VniuoGy49vEVZuvFt5ie9L37mpsCpU2NPyTYdV8xX5jzm5oY4XEz4ux",
  "key13": "45HCdxo1iVoBiGrShLSXX7xESqEQhYfGyJEiYAfhA6dcazQBk37UhUyWWLXBBAvMSfAVLwBkA8RchbAw3GcbtvHs",
  "key14": "3wSXgjxp8fcAa9RZZijn9Qy51VDKHZRQzaY6wTu7oKPfQq7STDTeZLGp7t5NMbUWBkCPTy8iaE5xBv2QparPEexM",
  "key15": "iL6pY1wRLrpjwkez6XNmRtbgqT5W37FpLngZ1Db2oq8Sv4yi5EqVLFe7jUDSkzorMCRzAWhXWeGiFnvmrSN3zUT",
  "key16": "5jUAR5npximDdgv7jZYsyuMVXcHKy4aJfZF5Z1UWC5awj3VGP3ZN73nyHwywXDa6XnTTtHykaNBDqkb9L2BjXf2m",
  "key17": "JWCP5SeiNwGc3DR1DKdF7E115YRf61oAxAdAS7oxSb6rrYzsCV7euG5DaYdZpXnUUHdQDpM3XXtYxJGZYRtvtQa",
  "key18": "4LdrG3QgqjxNmVTkodm6NYvWpKeoGJuWE5oYikuH2QuQJhPYGpJS1XFCCgCpgWGGSD4f15i1NsUySZwVZzY6LccE",
  "key19": "4h9qmF73i8YXGMKEwDP3duyPHRWstqHBYmRvKZgcep7nYqpVzmTj5ntvgMvdAvX5p7otjD81DEBAyFjbUDTJgp2A",
  "key20": "3VWL9dDWvCCVnn6NrF9ochaRn9X6Xxt756ExLxUevLuYYe5dwp3uwDBSRyzogWvgNLPMCrwExzUv7CHxKi37aJav",
  "key21": "5ppGMgmF25Tez3Q51ecJbrRrGX1qSQHmmNyJVSotrXgMNdCHLeBWVZSp2U1Xic8LDbi5Gr1FwbeK6g9vihmk7mph",
  "key22": "3PjLqeqp1nCw3npdnB2g9hRwqBh6Xskm5G7QVAYGg1MmQApCNStGDZ5iaTFtbT9gtQJvBfPFrBNgvjbPWY7pNX52",
  "key23": "2u29wGhe2V4kV6XaSLJPK5QNcbxywEdhFhegozJBbmfmprcb5BBQFbRkCk8DbpSyqxw5sgxTSnde4BJemWyhRpHJ",
  "key24": "2YLT3eKcQzjDZqy5zKEBHFgxtxGKoX8YvC1tBm9E8MoH4KVQmyVYswbsTmDJSbriFqW2sszgUH8PsqyjVU6WXx1V",
  "key25": "58xuTj7kTccHz72Xe9byZW5vdSGug9ewWuo5EdY74Tzfq522VkHpQcxryjrEi3HeKD8oQ8xz31zMW13TugHKjNz7",
  "key26": "2iQAYHVkCANB2UaNzoFmuDbMErfA28HC2Fan15TVbRpP44UWnWCaLWnSnt4U2bmfiA3rdFizoX93iB2zx11wHJrE",
  "key27": "2LPTSPcVq7DGtWGSq6hTdyszc6CcgPJnddskBwYj4LTVV9V8qXcvHRPHZ4W4Sd7GA3W2zHqFsG9dVhBzBKQqXCn",
  "key28": "3Tz1p1L3mwWsxiFqtedgPr3FzsPfxNAqweiV7SwzDJ6fneRVgsz59Lq9zQmvJUTMawk2Kicn3kUiUrH1rSLCTWDM",
  "key29": "3eQhQ8fm8T99z8ksjCNuMDbhS2fcETqet5iB8nswXsDrikbS4CmNUehWxUptk8fSZ2nzp157xtp4FyqsG1AnGWJX",
  "key30": "5tPghSDFSTAFDHAULNkrqpKPRKrnBGCSZqJABucYuKiE9g5FNRKFXDFuUZjJ4rdN2TEWz9KjwBA1zZKb6MGK9Lwz",
  "key31": "zgUcPRfAxWWcpqW9S1TrkZQehzTLoFwziX7MR4PuZXEqXRfxDgTga47NYsGsYVVkGTHDBchjzNMKEs35SNJ6QHm",
  "key32": "2CiciTMigotJaqwftqe6UJukXu8z8mypP3gzXshUZPgDfWpJKfxKuuQdpkkCakW1b8v4Yqo8S9XfYKDV925Zx4zS",
  "key33": "5J6RG5oAbCq8VdXp16JHkTZ4ut7qMVF4hAN7Sgf59HTBi5qmrXE67AnZyCqoif1MzXTuJoqyoxyqzMXM9qrMpu7g",
  "key34": "2uEAc25oz7guEBmuAxNuuV9dabgVedRA7PmmQFFhfNEbT6r5feqiiEqeha6Pb9uC4gSGaFXPYdUufsnpRw1cHoZF",
  "key35": "5ktHpkkLTn4QpjpwTTvu3vEKidNUtfomLw6WuBDuvhskWdzf7pV91cdwBYNJBWu6iFZyWPRSB5GB6sHDdLfYmMQg",
  "key36": "2WKEtmf5AGkD2xQERhggQHjSB5GdqqE9T7ZAp5AFwWismzXSv95W61LLZ5ebvNE2AVfigjFNs3uY1Vb7zEyVdMne",
  "key37": "67mqf1XNGCYQiGTrSwrfYYEeH9rBH14cSWVyHaekrimWFCLJT48XrnsbfxALMjP9WgchxLyHJfgVca8ZvzmJN94t",
  "key38": "3AZnupyJHswTNtTwzwpTVP4MFYahYgB8zy9dek3BJYNjNgdS2nuUBtD4nJbZCHoWt5sBXNX23MJnmcctKXN3rm5p",
  "key39": "2iXHwNbsdxUvQZjvK3GBQa9WdPBUeAqTDjz4boTvgiQm8iKVacg5H52JnNeJcXTPJbewTfNo9iXytc6Q47mUWzR4",
  "key40": "4GxvqpTsRMSSVDmMTr87PHUFzoadRCwcihEdH29pHKzKQ5Pzcei1pyftmxZzbgeGcEjBrJJLqfNCajX9cgxmi2YN",
  "key41": "4TWDqoZrwSA6J7F3AodKB14nyxWvuxq3xFbAqJrSAWgMFvkfNUB7JQ6dXK4QY3SLyEGUpW9brUsqAYxXrFV6HbaQ",
  "key42": "3a8MAxr3GrC8hJg2powYMEE9wCRkpvBSdZGV67rNUpfoMK4wQLRybuhUgv3fuHUrEExdPVdSBvfPrnJ5xRu1QpMJ",
  "key43": "3JCDtY9xompXRdN8DsRuG9Jj16Bprn1XKE6t7Zx5yUG8vU3wSRJsC8Qqu15ykbMQJXzj46yYsrrEz7FwCZjLzBe8",
  "key44": "3dRnTpaizkGjGEa4BphRTV7PcHc8gZxQUT7Vn6wXodK9tvRc1VTNsLhWodqcBc4rSZr7bMtE8TrGD4xV6tn5YbJZ"
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
