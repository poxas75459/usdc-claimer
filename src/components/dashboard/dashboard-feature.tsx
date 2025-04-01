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
    "KbJSXnLNZtnxR9N3ZBgLiPx97esdBJwTCB6rrVgd58z2PSAGvQiAR31wndju2uj8QgZmtM1LyLjuF2XvnbGkGuw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3JdJfYU3dHZmFnfeuPpC9rxXb2zxxBG3vhvawX7yq1JatMKNoLcMWwvnsk6UpCAtxM63eL44khcYEui9eVgqAqkA",
  "key1": "3C9tmJSQcxbREUBnAZPxx8K5HLeRdYhdxT8fBmjMsFEqZueTjaWUPv6brSGwBe1Db2eQCPhKSYL3sdt9fvuokWCy",
  "key2": "4wsVCWWCahsT8Svhz6XfPa8gETdmrnZxDkkMqyvaeFNMd7Ga4XtxdCmjSJhhMgQGW2Bqoe8PLGXok6B4WyCjAcGP",
  "key3": "UiEND6qz7p4RnEmMtY3CfWWVyP72NMg83X9JC8qE9M9hAVZSYiuQequ8J8zCA3i73sreBE2wqT6zrAZNvXaPkGH",
  "key4": "4wp5ko6ZFncxDnCKVbDViTPZ4esXX9NNGLuB5T8vzgPzHiyPkjCauwJykfUgpMS5TaxrHyXc95LFuFrdwVt7bw5",
  "key5": "4XEMfkgPvfaqmGnsfw1bw9fsodKRNoz8KW3rCxkmHhRb1cmDwAVFjMx96pLarM3foqjiSne7EDGE42jac8kWNQLr",
  "key6": "43uWg2qK2iuq8cLRAFDGsLzrEZ7SSJrht5JPxGNfTQzQW1JYSB2Nm2KYxM5ennVGSPPRSWCwsCBafAAsmWJm6fGW",
  "key7": "2Xv4mT596i1ZjzCLy3s94gULYsAJ6kjyUckS6Da6dGm4jU8DRnhSZoh8oWyuKYEFF5sAJEa353RQ3XkadS2imizf",
  "key8": "m3DK6EVQZxto5egsYgtBdcDRfRR8VjYHNspEv9hLU8NNhtt2ERRWiko57gLJPZygETft8xbTwNrzP7tXmWBJadT",
  "key9": "2U2e8yduTVQ1PiicrMgWxA7qLEJ2cUQgDBU5tEoDyZoLyCY26MvnkU2VhNMUr1vrNjf38XXZpnqrdiWxhaDpuYqJ",
  "key10": "5Yct1312dBSv3qHWeyVA7ptKnKDPHJNr1PrycXatbE7qNW6yw8T73UkLysjvTLeko6ZtaHefj3M8gACjefcv2SGM",
  "key11": "5pMtUmgxFuC3KB89T4ZN77CT6NWQMJ7JRMNvoNiCDitndcei8sFXC1EuVEqWAU58EoGhZAe9PQ4UUNzPJYXafcLa",
  "key12": "YuWDNrUzUdf9TreVHAxZ7E33hQxvrrQssVBjkuR5msz1ViQbbFfaCcGPbtHL2B6rH87wuEJf1EyorxJ7iSrH7jU",
  "key13": "3fukCaFUzwMNLMrKFaRMPuPqAPC8ktZQ7tMdEr5qbrCLaQ5s9JtdcycfeGW9xoaNgsBqT17AFUUoYB6teSgss5Ki",
  "key14": "5zFtZVGqx8pWUUo5MsAuAEuR3RYQVeaCCDZZdEYNa6SFgJdg9pDA2ooBdB2eAhK7f67p6qL8YndHkVcgYr1kiaPH",
  "key15": "4fV6zemj9B51cFZrnsqcaYZXCvTtD8VTRaWR6XhqoeFKiN24UnMrzhuXA2qHNXd8HvtrXCehu7LXZV9ahMbHwMNc",
  "key16": "5i8P3ebvZNNgmHVbMFnQrYmEkSp6bA4yb4tR6ubpDQBJ5n8JfpFK8H6MotZZRkxEH1ZSmcm1GiMEjdFXecGGgyud",
  "key17": "3NrdszCa6D3KheyywcbtB1o5aPABxoaEB76QmDrPnLUrp9knqXACJbEqX81aapf41myca8GLuXSaS5XQ1GVwqEgd",
  "key18": "npuauaWbe8CBJGY6fmd6Q7fXxS2vM8PhX9ddupt2ZGxg5LqyQevKr3n3VkAT5ozf8RQGVxknBSFBG47mxaXTarE",
  "key19": "47FJuHXc75j2QqeAovvJkdUrEcVv8ZLJczP6DGghDkzkF1h1166siSg7Jdqk5VPZNWKYcLdvhBf13qM7AM6JQpZq",
  "key20": "C4Kug1a2D3CDAYCT8Fk4CFHRajPP1joyGEPTMex9TfmYHDqgm6MxR4zmz1MHEWhWY9Yhk5pPiM8zCK6PaT4KaFY",
  "key21": "rjmz46mgJgJBX9DY4657am4w994QT3DsFJ8b3K2ENN78ugPy3rSYgqHBtH2Laf6MTni3wCzeJCrcv21rJhXRtDe",
  "key22": "5i54RKjJNtvJWt8diiQPStAYEZdJr8ef6WVwxTm1ZEWEDbJSGFwa2x9cHiqKwzYJQCEBbvhrcnLTTK4w68PosZRZ",
  "key23": "e3X3UQ7j61iGbo39igTFcD6qFfzAPULNgsej4w3tCZJKo9Sb66X3nbSVvsuBFtER7tjnf2YtcXEgjf3ae5dQD2E",
  "key24": "vuUifDBDSQguHhSZZy89XbNYT8CC4Fiyou8HB9e2UwaRa5j2TxtzwiTKBdVRGBceWAZdoiCsRz1M8UnWH9qp2pJ",
  "key25": "26gpU3FCUDnrivYfpKrYzygVWB1TxGUc4f3u6uSJDN56LJ3V2sGjURfNvj6YbnLnr3ZjJnUMYHU2HZNRZA3CQdMc",
  "key26": "3GVrHGMADMUhm7qGuN55FbWBepU6zunPpiZ8q3M7UxGYwVwkyV5yHa7vSZpLkDsZGdQGi4NXpJLKPdTjZE8YvcHu",
  "key27": "5kiuPUmpZf9KQGknGscc8UiPMRuEDYzxfauLv6BXTp6hggAAJrRmHxVcHrqQHQGmWy6x2CiD4joSZG1uAZjtHEuL",
  "key28": "3R1vbdFJwi1VTGqgppYEzv31DJuX6xLFjYXq5Mk1n5uPs2YMQUN2iKdpNKijDgpe4ZTFSe8eRvnny4GfDE55iE9W"
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
