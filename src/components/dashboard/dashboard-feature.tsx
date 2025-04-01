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
    "3MWgySX1mWCXRdre6hH4KgNuQdxjbSr7Qmjm9zB7vzDQajwSTfWbs3GiC3snXnbdkg4KZtcB2fZKqkztvcwXY41k"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "CSxEcMPGHRVAuC6oiiPmvQiUiFn5w7H7NndExCGdCqpZgMopVtuopbLcoVZn8ekgnSmiESb6wT3jKEvsPUJ6yN2",
  "key1": "PmiT9KwvTiPhP8dknwkP6SoG7vk3FWgkqwuYAtKAhSPnxKK4bbiy3inCQr79rnBiZjsXrDqurZyJNYDww3bSuFq",
  "key2": "45UBajfV7EGeHCjexwiwBosbMevmBFo5iT3svjVbeR48E8AyJeEnj3DxFp9GZGS5W3eJSiraACf95J9uvJVFi4AY",
  "key3": "5WphHZxYb72PGwcKvHhqv3Xn84NAWe31gB3vLG3c97z69QxMfsVMepT4pCAxk22SbGsmNqvL2ktuKnTbZuyjxj7f",
  "key4": "5Y7UdffJscyntQjyT9VfNBHs8x7NpqU2RPFrnkTnDJG4usAKhvJvtz3zFfcnMVwkUsxg1F5yoRk3Ck4QuLm5ajJu",
  "key5": "25fFb2zr4Cm4hnwytTMVyHNqSbPfRNUykskE7aUtDKpEESk5QEsnTsmcD78hebuiUUzvn8LD4qw8nAmypEVt6fzz",
  "key6": "57mwUrqbcT5vu7M299TK5XYshfN52gRAQs7LEueF5STog8dc8gWAD8jLvMgocd7qPNqeLhmv5gC7Rx1TProumfzS",
  "key7": "LWUi1sDrDFgSyCzH6C6EXwGsWF8bbRjEVemhgnKvoyWj8cVRNWWNn3xVuCTwy2jUvGDxqxU2iAsN97YHUyFVPAA",
  "key8": "5eBhJqdQHZZ5BzRqyyHLLRSyQZZ1aYb41Z39nGVehmb7sBM2kpSv5SFeLxeiu2BRwQsC6yYRYY4QQaoazhLKs4wm",
  "key9": "4uErSPgwSu3AmqDeGPXHXth7csZq898A25GWGnMSuWGK4MM2nN6L733H6geAM6w2qEYHb2u4etuHxc1U52cTTKjU",
  "key10": "44YUcbdaAQ2WnkwW7p5j4rxqdTRVgPgw42h92E97FoVAQXHzdqVLGXrD1BTteDfMgDyjskofzMjMqAtd35cKTvMj",
  "key11": "2j4om1xhi97Z78nhz9j4iALM58QCWQrrkQULa3rEYoSoWMmfyDmTvApqTsoMML996565A7vCjaRtrfRzQ8ug6a3F",
  "key12": "34nsvFKjLgR8vAzvYM3YQKfUBSRwQ34MDA4Zx2SWynLFrUoUsznPHnvzt4bYaHDdhs2dF3KP2x3jPVubBQEsd7zu",
  "key13": "kwp5DNosdfxfhHm3EeoJdVJXcfgS5Ms4dGWpSj8weZWTqmVz8NVan3BvffaaSmpu63cooSrzhfpPGhd6gGEmxnH",
  "key14": "2QeBQPYMbHEjSs5irfEHdCdbNaKQBLiHbo3559tG9AjhhgMepEzLHfGRyvBXt9cmQZKqgnwzTsaFSihzJjTXsFNd",
  "key15": "2BmKmxtcmYTEKpiPbwh5dsVAy2PqgbiCj7TeszDVDoJF49DCfVoWTjHtsEYE6oC73NPP1H3tt9xbbbW3UUY8mrtX",
  "key16": "5UuEBfSAZNpb8mgxFBPh66GETBdQ35fRHmKbkMpp8Ro6wePAvqxMiworF2HPqZgmGATc9hVkeuJwjqtfUJgxpKww",
  "key17": "7YyGwRASn17QKq92CqRfxAgAspwwpdjWamiajgDvZRxVB5hv1yutnnC8d9FMUvW2ccFVrURvhjg7AqsqGr9cx5B",
  "key18": "5kKSEEuAJwT3UvE98r3gPLhST1vRoyBMQW1qTiSFCCiyXTs8UWotgDjutH56V9f2JDBaZKcGgBe1v5nNvDPf4Ajj",
  "key19": "2Yjc13EBHS24n49JiSnSHdsFZywTKtg1FBDqYcxWBzRz6dQM9qqBNBxSG3fK8e12L7X6sLV7qNQtMkMuGBMcwEJo",
  "key20": "5GmbD2gSKT7adKNnwLrrBaMSsfSHnVWtNg6AtMUAFzGghCSB1kuCEryjmCpckLyipDXnbEJzbhyf9Fh7jTPXhSVs",
  "key21": "uouptZT8xvWHa3RMLwPwSLGfLrjgmbb8dcnZWDMgVq9ihVidCE7mdxmKhMYtqeW2u9y9JyTj8EmGGamA1pmGpgR",
  "key22": "5Y8b3cw2EZBHQN5HBKuqAwgFgmRKN1LLKhkbVGZ2VC4EYAAgCetavj97EvF2QvE3hmJohPYNVRg3ruuPRf5rC6h9",
  "key23": "2Pue6qb49SWT2HduBntpDcTT2hTRoy9yAisPgyLTPkcqxUAzxn8xRyPzZoUwbEXRcwZmcyDuBRA9YhuVDnL2PZVZ",
  "key24": "6bBrU7crZJzmjydR9ksrqJdAisA9187EaCqsH3Yi8ijZaEyzpnw4ZiAG5Fiou8SeuDExyS1ajBJ9hASDZUYDwcC",
  "key25": "54KUHs4EhBE5aptCvSKLng5aTGfnkazR8NG33w4a6hdebyYbeY7Q6aeSN8JsuB7Vq5yUMpruR3zxQi45BNhMJF4x",
  "key26": "kSq8uZdzHMtJJv95udGNxJddqFq68X8koqpKfeULwggL98FgL2hMrKSpzu1NC41mHVud4fSyPjoaQfEpH6ojuUb",
  "key27": "2oPRDkhT8Mz1SLob9faTYUTo6obB3yzkTkg93s7fpEvRNDxj14z7d1GuiybxSSra5hB22vxWFdAaWiUCNthqbbbE",
  "key28": "4AYo2jjXa34huGM59uf95WQxWy3iRAs7UXXSToHYct3ypLPkbK1RvuqJc9S79z5BjmYyXH9uQEyzuDkEiCcVUstv",
  "key29": "5zR3SrdfbP4F9SQtnmSddX2Ru8QUBLx2LrAqjgbtSoSuxaVaP1jhyG2y4vHpTnXvcCxiDgct32fA7nKcAppNHiMw",
  "key30": "2KXFJZsimrVXYpQsVRVK2Z8CZmnFHtfxpF82u6gKygjk1Y8kVQweC7kKGGmfBGF5mUjs7dAmCacUJR4kiu1kYJ3r",
  "key31": "43A4yrhAGCEn6bpLtBhCX93xwoAL2NK2ZXPUjzEviF2nfgzzsZ1dkRKr9cyiQC3uwLt6eScYLZJguQkbW3uEeeNT",
  "key32": "J19swzGLR6DtVHMnFDfcz1w5wi1JEbhBp3apXtydMk2o6tFQ5PTMyczqi6mz6MBJpuid1cryPtfo1isqDJ8GFq6",
  "key33": "XdAw3KVCz1HY29mRFCWZ14dTpyNuTZwi9mjpmkfgjmToqivx6DYy9UkPGo1oUuatu2ZDYHP2P5ipzF24aRyXE9U",
  "key34": "2RoanQoLLbYS5NRmE4zDTQfJyaax2rHQ5U3R7T1v6FWtdauZ8FJZK6TsSttpUctZYKrBW4x2Q1eYiChT2wCt7UgT",
  "key35": "2Bniu5UEYwhVTTxQh7wTxT3kdwer87EWDzsdg3dFFZ5K9H4MvRrs1T19vg4rFsVznaorExhxUDYMPJAB8cSdFrXe",
  "key36": "3DXisf5dj6vcffb9Rczf24yHA5bTze5FpzFBSAYw2gv6sxrCpAXEaefjDQKHsNHjvf1ZPs7jKuws5KLnhDGqoeaC",
  "key37": "56Q2HccNCLGPUafwg2pbK9v8vTtK2EQ82Mv1PT2mfiPvvceaSmBY7z77uJZ225BfGYQ54f4GWFnv245kiWNkBuQ5",
  "key38": "5GmDFfq2RZnvnrVzHQswv7AsL5gawMwJQTAASjxviqZKyZiCQbcQgoB6fzh34WtwngBD8C2faKZjxhzWeTRu8tZe",
  "key39": "4mSsJ1eGEdKuiozih9v8DXy7GKbrUEWK7bG59cZj4ks6gnXrctjwboDAMa7qqE3EpembSJyuMtB1e2dzrmxUFehy",
  "key40": "4Fkwa9vpDfzeP9ymhE2FQbNbwHL2UziKyZ4nZfpTJ5Vtpu7s8k9oS2UM7Ta9BNiTrqT3fAdkg1coGXowjhAK8e3u",
  "key41": "4G7tuJbcxmAtDVomC77zzA8esFtt1kKEgKqAjTEQitJiwFBQj3KqpNGnFAvmZe9NpFMypiATkbKEBLUaeURHBtBN",
  "key42": "4AK6vNDtRghJ6He59ukNpA8Rp5UZF26KEwKv1qQNjaxc4YPW5W5XeXdpeq1zRM8qyW6rN3nrhgwcNiNzjV8HnrR6",
  "key43": "27XyPwDoxHszPJorwShgVZg5ynBUJ4oGbrfn3M5qy5xJKQLjaw7jpXXP6U1rBVdhWs62mmtajGYnygAzzEEHk2pK",
  "key44": "2uDyPdFdfsNpznNN2uCMb3kXEufHLnJaFf7rmLRX7sVHPg6zY6Cn47Las37PqNT86BVL7qhPKXeDptC11uRecjoV",
  "key45": "2qpE3YkrQkDNfNUkumM7iJW36wbb29zmVmVuwEpgLsdFzaPASKFH9dfdV6c5LXSaZVKBE7Fr7GEBKfvk1XdKBcxk",
  "key46": "2iiK4ov744WzwGGE1uPmkgVZyi6kiheq89eYP5Trke32EuNpMtUrwqN2Rvy7xtmTuTibNxQ8yHGivE8bqBpNm3aJ",
  "key47": "2kCabTkdjn3G75D7117y3NfLQV5hZQUVt5RfMn9gnXNUgNcNk2qXwBQVNSdqkXctRH5eHT4rc3sYZmQ7es9RTLe5",
  "key48": "2ePhB7NdQhWyhR63xMZwx3DWcDCAnMJXiQH1QGHnQLayPTEWiCrF5U5y6rtMwbeDXQVdvRiMmYhaBnv3rNmL7ukH"
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
