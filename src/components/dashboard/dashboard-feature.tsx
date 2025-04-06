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
    "fxDK5M7B9cDVfHKQD5ezrZ7bGQuyKt73TunamYqqSWSu7wBWf8D2NvhnYfhPmSprfD3BjrLyqco7noSFiG71Exf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "55fRg5ERy7dwrHLiHVoRjPumSGLshNmUtPTyFkvjR7tAqK3diFw9uzWdC5KmgQTqMn3tBy4sAkr2hrPmKsYsfUX6",
  "key1": "3U6ry3RpjM5V2twkoPSDJXbFND5vnMeMvyqgcoiyfHkvde5SGXoXbqXjFxq8wFVtzsey3116sTzo9eg5bNea7dbn",
  "key2": "26T3AQBKRfCS14epkosBTPi1JfwWESJpcQwF7i6Z6cHy4tcBhekdJXqbUxfQ7TfS88QBgcvv5qtxo9zK5Wd7EUMh",
  "key3": "hNBimovfT3puHuU8YhDb1656qAqgo5zjGs87hReJzq2HTkQ1qgsw2Ti2iqbEPjSN1M4F27nuxwbHkFpT511KEDk",
  "key4": "4LLkJBegnu5Rav5oD1Xj2q4FVmKVADsYAHuLCZuEcNeR2aEhwBtyjghnZMiZMbJAkPRVpbPtEBmgub2BcfRxeGtw",
  "key5": "2jqX1oneCPviHuDwdPYcvQtNjeVNEeXGHU7KcLqmedV6B4ceYzt3KdYf5GABSCWaTt85o7nBnvZkmGyxUd9TYiWA",
  "key6": "5YRxQHTpLeussxTBfjm8YJif9DNvwbn2ozY2wyqjSs18yz49Fa7VcaRWDGKngL1H8Fbnd6TxdptKGeCks7sutBhL",
  "key7": "5e1TiceH1GgtYWJ7c4sPWsRZcuY1mLTL37Gcf4qpKfjacbzpMjcaZjUSukpW95rg22Rm6BroUdZhcSHce4C96qBb",
  "key8": "4NoNKFnqRAQ8hZBJc14todmRHMQS2sVsPEjHJz2pPN8Dk6zbnBGh2zmivzpsXJ8MGtZgmPbj9MKpGr87ERGDgFRu",
  "key9": "2aZamLRXRvC4naimx7AYM2SeY7EBvFmkvLQWQuhLdNmBLJNLPcNNzQssubroiAVyEbpYwfVqjagjPAG9xVmFezJs",
  "key10": "5LmNNDaWNqg6d5B8vVtDwZF6KiwvWz5FAu97KsXuszsTccfWU7UdgYDoMjJzk6a6vZSfKCmrPXxw6qfLNGBtEqBw",
  "key11": "jVvYz7k84fLVdH581xJqDCRcsWV4v8VCwHr36ApyGn953HJTu4eBPj128BqyJT9QiJvY3XKLaRm5TqjkPpBRfK8",
  "key12": "FYv1CHt5dBD3bRqBip3mRR6fAEt7LgxZF8iUBzUaAZgiNsTgiCeD9811ZiUpe6vhFYhz48exuynX3TSay5uxf7j",
  "key13": "2xzyp5yN2EfMxArr8w3hsYyKZzApWFBuvVP3zUnFb4BBR4k9wMMorAraUwZFE1DTTrHNZp5119CV52vAVCkE7QnC",
  "key14": "5M88unw2RPHEVbr3zdAWApFswxy8K7xGvJmgN1HArJGDd28UQoqn9Rdk6jQqJQcdPHWsSwhT9JUDNebrPLCsfJtF",
  "key15": "3MxKmuoDCEYnj9b1AZoHDW19gYcqRqZKXgzRYSkTLo2U1Yr2AUjqHX5Yr9fbMQi1bYvbYJVQgP2obxYfowmGpEiq",
  "key16": "3EbfkKQT9cDPq71AUPnjsfGuTZbmykoTXfVPjzYzmVgiGSN95amgZMbPXyM6gdsBkT5v3JgSS68h6DRreR4TKKXr",
  "key17": "5H4FTCQ3xX2iVT4ZXJj3ioNPB1eHTr2XtCwpkDe96BYghZeAWcAqLPhVq5vC7AeiY7L6LdEr3sZmC1KVuamvyKyE",
  "key18": "3zSpCzXdSUQabKRCTnqXpmveazrLYcmBR1z8nfWisbh9Hfybi3iD49fqXeanaArqxUdm3pTfRkCMUD5FK1ug9Jq5",
  "key19": "ESnBNAyuZuzJycgWe5qe1CSzwHSSaXAW3K9KAoPBEMCZMXLwzPvGxVi2oEqvCBUUFWu39aPeZ9RHdu6XABjwpYC",
  "key20": "33K4X87f4zudfD8igZJcBCh2pWKViNXXfuGWYYUJS6w8HYoRSB2T2oANAxm7x4m8vT6HpAy4tTdVrH4iKqMwUFkb",
  "key21": "2hDxaUatFWruwiemucY52c3XqDzqxCGy47KoYdXgtB2bhsR4sPd7iVkhHsQVHGwgrTaRszMeGU64iGeEEsnfkeeK",
  "key22": "66292g1okuJJBCdoZaWa1KfV5uv8AbaZEuG7VK2w7RubHcxZuounB7BE3RjETtQtJ66FaUmFuAHjmGVpqKgq8Umv",
  "key23": "65NGete1P2gZ83tNi874gL4cS3TvGx422Zwq1FVPcRGdeCoq9tMQupkg4X5o8cVqMaW8kFqtjtU19L6WNpnikBjr",
  "key24": "4Fsh7fqnW8Mbj4bzzAZF5ten21ddVbcP7FWxNJVPGBLmHdRshV2d5HaoM3y94tPGnEDKQxsnBgPT8yNLkGGfPRC4",
  "key25": "5e8pnE6ugw1mJXpP4hxQN7z7zNv6aJmd1hzKRfN1CP3j8VwF8dDXxdDnQU9eJQbnA8GPZjRX4WDPcc3C2JpmZ6H6",
  "key26": "Fxp6RzCW91gWqf8hgqfzNk7RPRPgzmyiMje53ry3g8oFqmgtxUoR7iiWC4hV6eSDRyoZTNxFANjRnooaCfx5g34",
  "key27": "5qgfTs3vscbvu7AFRMN56JbvEUnyZCfZGTNxjDk8oCGWtSrqg5Tm6TfjsVdoZSXMZJNs32APnNrztQN1GofMLuFV",
  "key28": "5Qm9XYMDnCvcGgqKLRQCUmbpXEVCXisWThQ6PrvhSBfqb1YZskPN7ezouuZz6qhotC3MudcgHZKUPTynZ59fL3BE"
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
