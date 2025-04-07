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
    "5scjff79SGJbNo63hzgxvrzFr4HP2pYVMkwkndenkW2qkb8Xz5NRwTaiEAjW4SSjsnWirrytWezgiwCCX5MtaFBw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4t79WcX5AhC4pnHg3YnbXSW8E3V3wUm6j9bNgE8DYUzFw5tJVr5iKSQuvVfea1sptarbP38zkjPGQfdmbosCSKfK",
  "key1": "fqNKCUWJLiD9ZA68NEmBQBcxyhHXrsAs4U2roZKcDan8gVDy2uNMEpCbtSEV43dyN2K1y2RgdjivVeSqauysYK5",
  "key2": "3j1xje7NBadjLQcD5Qsh42ph4s5eP7xMhnWPrytKa4ABNfocaD4U3cUonN7srqSZqHomkzqzdbNCGx7cgtCCuCjy",
  "key3": "5R1E1pN9mgudXcc6iQo2kayU6rZFqtkPxZUvsKKSbEJofys2cTm2HRx5FyoPuKn3T86csdHdyVfD2ReAY8wEvoA5",
  "key4": "3V6zPibsyJn1dxaNUDLRR9L1Ew2XTz9No9LQGqC5DvqXcpLmvaTAp4dM6q14JHbeqWfQHymL5gxMTZuCQ1BGi5sz",
  "key5": "35ASwtN5Kx5HSMfsRidKd37EWaENZp2bcKJ4HhpsFkLEU9bh3PiZ8heSKcndadZRgvugwngWVzjg3qhZmSiM8quH",
  "key6": "QhCqWTAzJHewJarCkNkBfzeYDUXCq5Zkx55zwhc5Jpn744PpSHcP1ZFfqHq47srTAEcadXJb8ShJ6GLiaVmEA2D",
  "key7": "2L6muXtEzv98e36vhy184Tt7VCPLXVoQ4pgXKuz34eCmv8oNEajjfmK1meyJKHT9SxXrWKQYdpT9zRYuYgBJfGGn",
  "key8": "vALwXYn7CoK1VN3bJt1LwvAtDGgym23BFVkXB8vU9DMvGyeXk25k1JeqDMtH1PHNVSRRvaXiSpCZBo7Lc6nGw6J",
  "key9": "3o3QNcATmRhBXyhGBRi733XBQSQj1D6SyCLReyCUrCUa1fj6bsE7wMStzkPQsgCcTAgaoecsU9kkERTzBQBvtEKp",
  "key10": "2NwCCKMm14z9SJNzZ3F2prE474RSky9qW35yXe2FQmfsjRCcTmexnxTRPhUpSZ7cKAk9qTn29JKPw6B7UiVei6ra",
  "key11": "56RxJbjuBUddmdZrHsuGdomY3qaDHrMWhmQ4F6zzbTdPDz6bcAG7xuCZgKFcTJMLLmG28F4VmCWDzvJjwrVhtiLd",
  "key12": "3enRwPTRu9rwMBijt52Yd9cxpfaAue1ybLm9SkoJ1AqPNoEQgcmYoLqKh6VSh26ebCuc3cPaQk52XizKfjBKLrdi",
  "key13": "6e2tTpGTVhUwvUbeiGKUBZXzvv3nuYkv2UvnJ8X4fMJdxr3g2oy4vbCDwVF8euSapWDkPxjLX1Y4hwTET4qrwKL",
  "key14": "UqAsy2DW9imPCZ8swkayrVk7QJMLNBCcBH4Bm5RHCRTi3oSGWy2HTqkWmd1XfZpq3jqetroVeaxq2RqWYhgCWBt",
  "key15": "3q1d9pVwtRCamFXRtg3S5eoZD6MZtrn4cMLQig4W6QYJBDYzVE2rdUoUdaQvsbdAvcaYzazJxH38f8V8quXdJ3Y3",
  "key16": "51Dd5k3s7rniWeNsG2kv3GLaHQNkQKCtBDmzApHft2gDoKrbPKQojCXWjtVvxTnG4smAoEY7sXVFqscCRvAbVeui",
  "key17": "fJpTNa8tMpoZ2PMQQvki6L24EncfoWy1DCK1eEPwWHQJPowqgcfXDGqXF2MJdPBP33cLJpiaV71sPDMNu3tQVi8",
  "key18": "5G9HaB9RQXLvF8XE2oDq7KUNstq88xVmcYvtg6mZxN7CfZdnZxLCSXUSQhTLveRMfmGaiHiwuocG2E7CFzEv1BgK",
  "key19": "48fpsDS1VXbT38MsAmDHcjcd13sFgEz9mgB4EDM5LvjR4bUJu1p94cHUhwLGk9hCFcQs7xHodjToQPdyDqjXwd5Z",
  "key20": "S7rERqKEbkhxjdXddmoX5Rkkdgr75ai3Y3v9Vp7125B3kuu6FU2gUAnQgGj6Puzaia62Axi4428Bstkj2kWmRCt",
  "key21": "3xXZjsxgAhhKQitJbYvdKqMShCMLWgCN3hn7doKE3wx5CeeRRG7Vme35GEU8jd2Q96Fu3mteo7Lzf6VWwXSopbNF",
  "key22": "CddXEZSrid75yozn7cAJmpLmeHP8E8RXy4VecSNBNMTFDfEKoKZ4DZxDqPsCK7DvJEFM7wHPLGuwJw3idrKYUxX",
  "key23": "3mrrjtKTH4xeBBrc5K6oX2hoDuyduuFR7bcEiyfv16YpJWAAzKFokRJAnPrQPMwUKgKBc3nH9RB1HAtrkLtS6JcE",
  "key24": "3Cd9ERixmetMbwHyhDkssrebPQqxGkqFjsrH6x1gAuV7GsJpQdLrrvgrPshnjow3TzNYnXjatXqnmx7SG8wn4zzN",
  "key25": "4ecS5A8bzk8yjuj1472F7hd58h4c2dW9Pa6XdD5XnxKpNePsWhUewgKH6HXmT69Vyd6Y9N6YMB8PkXLmpgGPmUTb",
  "key26": "4PK4UDX5gckABkAk6ERYow7hzxkHcxpAocaWoWU2UfpeuhBRFD6h3Aq6dHiCqjVJAVa7RV6VGFxNhWVdtuc4rFkF",
  "key27": "32dBJr2XBnYrE2KFzdu3BfgQTxq5V7DXkPkxegZpy4NqwuFjVvm3vAsdiAP1ESnsf8fnTP8QMYSQgMZ9Lagr7fws",
  "key28": "2hqkVZQQx3a1Jj92akfpbLWUS7WBpSyApxoDk1PEW2mGUeF5karpfvGazcc5crZVop1yiRrMzPefeGiZTqu8aREH",
  "key29": "3BwpCu236794fVwESDqbasF17HcJj5DrN7DkL2cV8zLMuQXNLeN3hqq4TKHRpmcyFbUsz8BCpTdaetoi81WkYn6C",
  "key30": "p4JXJBSdM26yPrnxutT2eZccNY3wiQHoKeV38WJt93meuCg5xraPZa9PVXe3WxHNyfKkome8ikpAHnEpkMPYY2N",
  "key31": "SPwCcYuDWknstRUXSezJUCmUYWeLMdbbGvGbvS6vtwrUWvLzhf7TMSmUrLvi8ANKNRE9rnRfZWkjiC2eauDNFeS",
  "key32": "4sjKC7Wjn5ZGccxNRHFMefE3bjygR3NGLDcZTeVL6YFoGgxtktEuCnrAX4dqWE4oFPCCfqKZ494YspzksxwwGKgU",
  "key33": "67Gg47Hs9RGhAne3jCtgK9EH6qNehFkmi7foaGtDJ4wSuG3QZvUYurxxmXjpxKCkJwBQxdCKAHaBzggMsj3HDxF9",
  "key34": "NLDSqKgCrVfiGcQVFsW6atGksckSNzzhRg7pyU827idya9XsUmfC2p9PEkaNCjrMEJ5sHnqeM4vg29hoE272Ja4",
  "key35": "39adq9WvBW7aYq9dnjABCRgFQkSSBkTEouDoZNeLqktZhgYZqYbJqngymg8ZnbJZEJ9JGVdk7GpVc81kBHHy9THo",
  "key36": "KUC6oD7vCo6wG2Hg16f4srbMMCi6uCfkvszLAkEkmqY81CFejoYznKhhrkc2Je66mFGmjg19LpUSnNteGoejg8U"
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
