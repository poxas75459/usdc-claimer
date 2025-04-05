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
    "5xsuDLmB8uvWHNqtorELHWn63kk3hW8RkRy2geipTR1rubVEQGYLcSEwpeaaQsJ7MjYYeujzwXGcuPVzBSXoNmdx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "53Huo43EYQvtJLqE865nkQrZdEbMuv3LL9eYygr1gUG5QgUdFsZqhX4VrFbJuZm23VYRfbve3vwYAgkCE1xGmvwH",
  "key1": "3fHLksgDswjrLYQkaGu38o8nfsBdURb4aPKoJCuP3nb22ZY7t5iMVTtBwiGcpC8N88SATJrMuDBWMaCqjMdPE4dm",
  "key2": "46DuuEWrys1zCh2i6zwx2JUNv6E6QHqCSR9JM2tcEgCJPxGt1ESGuWAg2cX8tPYozrw12W3UqsSgqjRnDYrbxZR2",
  "key3": "5d9zTJhoFRn8R49KAKoFFXRGkNCgrXZ2RbgN3tUR176TA38Nbe52m9umiLPRjR1QqFwa2r2R6eBkqSEFXRsYNHaM",
  "key4": "3BNneGKvthGaCG1QmsoTQnvytdAmwkxMvbDGQgZjZ9Tj8uMJQUbyGBeaJJdctcoVV8trFCHx49FZMAQSYPnN5aeY",
  "key5": "4K7KoHEii1p5vm86kVYciQieJ3CBHFb31q6dWiAx2755B4e2oDXuqjDvkyvw4JY24hkGawMyCLxGPkjAsqDP2rcU",
  "key6": "4F41dMijKVoD6ijiDgXVHZmEkj6hMzhnj2FmByT89dQNJR5UMD9uHM1LeGQB6L7adA6CL8ErmuU7zXB7sZHHYu84",
  "key7": "dJ7PhX1TsuYhPXQMxYM7pvXuAVEg5gVVA1C5do7SMjshTj1kdKeDsnWxnDxPHKmKNEhqjQsWf5cSddhjA3h1msZ",
  "key8": "WSRFXJwg7iiY4HDncho2KkzuqNDF4a5krxDA8cyTdgrWF8TzyihFtJdA8g7Pprnsf2QkV35vzmuBoPPoJFHWnSB",
  "key9": "LAAi9ickmgmdXABzyDJvuBK3FbNoUAsAt1uZ3etGGPZkANyWPZEhfGHrcLEUTnrPMbKGw7zwmSAnKAX29wsSZhv",
  "key10": "2JUdX294JKPkwvUxz6vYBGahwUFh1mDnoLTYUebRPpgha4RnSkJoK25Uifgb3LkfFu6GzteCS8cPPwfViR58kieW",
  "key11": "9zQ7jiKUGUYEWtxDJ7A24ViHH8nrGAJ6dXtXC4SSjFnqrXFHwM3yNGTcvxFWP9XqzoZDA9QZfX6sHwWcjA3V856",
  "key12": "3DLFVvC31J7LQo1QycJQPhEZma3MddVpDwtc4xUDuAs4khWpVCysf4yUSf1wSAwGSkFggJZNuNqqwb9xWvqPkgbH",
  "key13": "335V9D4Y1qSwYYNSWG9k3hDVxmtMYj54TR5LfAn9eRpjvvtodeSTHttJsmnfCJrZymZSp8d7D5Kst3zAauuDwux5",
  "key14": "5q7wKWMH5LJQyi8m4SsPQhZyU2C1VSK7JzTTQpZNtibJKHFiJsnsjRR293qbYKvpYb7ZERfpKSBHd8AVSsnj5Uid",
  "key15": "2z3Jg1ioNdFjbBGMJVsxxxvDCEt8z1yhCGu2HRfw5b7QoS1BYPDe1infM7Jh4yEkZSKhp32k24SeM3gXwJDwnogt",
  "key16": "2uQVWsC2BZNyEeeTLfKKHn3hU87zCAcuewi84sAbVAbrK39yVbPnbp35Jz3HQ2ZbJb3bhe8EAJkDoRexsr9f3DMH",
  "key17": "24dGEAm9DmCo5fUcUdkiVmzM9vhbiLwLTqARZ9JCNtSYAm6tfCuDk7B5DdMNCXTqugGNxemNwyKMf7rKixjtmphp",
  "key18": "2n6mjNfn7Sqp7fXSpqBNAq1yajCheiVQi726BttDeU7DifMZctHxNRwr8j2LaiP4YtPfADSq27GkRw1UoM4yyURf",
  "key19": "5Xx6NryAjk4xZx3fm9ethRNS3ckmgnzj3RjKspuj9iSmcwFg8mZoXHsEpGt68BsFu4QxfsaVfSj6C5wVRBQDGvGN",
  "key20": "56zZeh6ffdw3nAgNr8MVdHz4ADtCSfiwCz3EF424o5F6zPYmsyLNtgQDgYU6m2tWRALPbH5P8Hf88fwVDqYQihmC",
  "key21": "5Xcja6RG7oh8Afig9bevNJQCuyjmvfwpCQcLvMaX8Nh19FSn9pBtabB2qbsvtAKcR5phQ1DbCWvsd1bC4wYGyqqZ",
  "key22": "4mdLMq6KPfNLZRsNEDrDvZcAQcMxbcH8ArZnE7XYLTMb4GoDoxoPCpnJUQ2fsK19PND3BxiPdwonYBejxtuhVpvk",
  "key23": "5iKWxjZma3o7T7RgMbupQu84csJvFMQgXCDbJ3bksZjFJbRA2egAXWeCWoiTziu89N5DaygNbauVgEAe3cJ4VjJv",
  "key24": "21jwoXArh2JQAUH8BDs1XvoJbAUZWJU522NmYyzpwt7exVYoum9wtvWDdd3WcQp6fohELoarbKqSkF8EJqxEJ6bi",
  "key25": "26NzMF4WvEFPGWhCmgJMrCz4jxov8XdLyc5Lu7Tnmyigj8EECPdPTR8bxMrs2LgfyyMYiYs1Z8ZCFzHJE74Dt3dd",
  "key26": "2RpPR1RRf97Sg7DhNaPg2n3fTQ7G2JEbpLGuo4ywbrK2VSXZLcks2GKomZQ5jwcuCwwDA7MtBc42trSJTTcgKxyw",
  "key27": "63zr8kMatTvqm1CBa4myKh8Gk8k6LQwxZ34q6oYR2GktgrsJvx8iCwGjSZWTJp4GABhzKsqXjEN3BC6wMYYHixhH",
  "key28": "5fg4j4XNV89gMtTUBM7zwWLPC6RD2NcpgUtm8VXhh7XhhJnUQvUxsGHXfCoBSiCAbNG6pCsHh4yut6PdgnFZC37F",
  "key29": "227C9YkcmdsvN7VdKQ1rUAZqFTrJVc8zu4mbDpYUcY2yZpe9AV4nE3vdgMFXBDB1P4EAU85B5ttVdZLYhR3XBVPp",
  "key30": "3taa6aLPweHxtCVnqQruiorpY5UBTLLtWgaLfxYmhTJ6fXL7DVUw1EK9dSd8MexRiC4qcugxfrgCZRsozvKG2M9W",
  "key31": "66sJMc4Sdr7Syd1eNVR87tAUafENWYNEhmPXdfju8PgfgD4sG3RmZydN99iX29DZddqTcURGvqowHDRyasrsqR8h",
  "key32": "53UY1mi7bcWsxAK3B1JWgoj2G3GPugijDWS1GMZAjPGPAZQpUwLvZMGPj99sBfPxeY5rXtxbAHb1Wtn7cN9kFzcb",
  "key33": "3VMo6TtdhG4MtP2gU4opEh7jGSAPMFEZ3U2Ccg9WRvX1cZiciGp2Zg6DFzeSs28Q9EEkXAsF75dzzgBCZTXQZ8Nr",
  "key34": "FbU23hq6thyAuDo11ZwW7Ar5w3ug8rkcj8WjaKVNNaNUQf28UuFFnMGxTub1DLqavVhasbn8sGkzD4XWnufMRab",
  "key35": "4ALvgwTUCoKpW48M3jG2M3oUse9yLebtUHgpEwceCfPkwqnEdj579XgkJCDZJyNQVg4HRUcCKfxzyz3ssaLZWy7U",
  "key36": "3WEAZ7j2c36enkY7yHs6bP1BcAe28WyaPtevmGH8Jm2aCUvvRRuaoHvGUpkybFiUzMubv1gtrufWp8ispchR5dcf",
  "key37": "5RN3Bw6JUdC9MwtkbrE1ET7B11PgDbR8EfVE6Jy77j24gLCQEeV1r6AErkcp8akQz9VjJYBXoT7UqhkhjZSzEMaZ",
  "key38": "4LQHNUeBvqpqhMGMnKXjXjY6z9SNZCudD5DzrTiCxe6citfCUTni7eiwCEgvuX2on8sfMMpyxttanX4fT2jQCunT",
  "key39": "5ZUzqeBrZFBcFX2jB28ZZwQZwTEgi2jmALaJrMNQe2KPCriNZgUXybrxc7Zaqqae8zguXVrgmqUqX63nmoPQZ6Gh",
  "key40": "2KGFaZs86XwuNGuvJpAD73uh8QzKHrh3styEDjBXaBPLBm8s5J4eqTRX5KG9xAjTkmvy6ZVo2WSpcg5sLR1j1yJ3",
  "key41": "5V6wT5B1oL8dpgEe1qwG19rtyAVKr2Vkdphg5WDkbhSUws1eKcSGUSxakrL3ERP4RUq3q2aP4xkHfCDTGcaRj4H3"
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
