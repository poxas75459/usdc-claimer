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
    "5MLzpdWMZJ2DaqMyspoeS56phUVkAJ3nazvKtZbqXSMs4ZPSS2N4wCNb7RFdDfpa6dhoCFM9bPssspvnbsBwQ9rP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "37TmNPTnJ4Xnq6Q8ueBzto9GLYKz8E5kAQJxw4jw9jhW48U2u59ZFWQV4MiYWrjporeLYi47qAygmdDqfUWQGFmm",
  "key1": "4MNAhuM8epP4KNV6SbKxkoikCKfFoYe4GAB6x6rjfp36XtJd9UJvbPtUgbzsg9Ad34CXRMnk4xEmDaqL3Yz7JPBJ",
  "key2": "4EGmVADwc7GEonnBzQMh4A44KXNR8LnkG8YbdcUDUSE8mQDwYyoYXocenCLkFV5Jud1xVJQhgMqbajYb7KbXzfww",
  "key3": "37VPio9jCsv1DESEnZMFpVpckhy3p7Pem2y6CUwKYaV8saHof3feqZgunu61vW8D6RLZaLamfKbqyhWu1aGxmKjH",
  "key4": "3jUdwHGRN9G3muNfnA8SieL6QZdxn6ghZZXGhXhKvnVVM9CH4uUhJoSbFhLXJr3DbHh5FWvw9vkhEd3m1ibcciuD",
  "key5": "5Et2S6dMGpKXdAXGPcBnPoxJXy3vtZ4GX2jAgWzyEnnhqCS5JGSzWn7mQaCVK8uwoEkAJfN3zQ1PgoDDVBp1qaxH",
  "key6": "4uJCr9s9urCswYJ1nC8J2guHSumhKrWEhFFMSPFGTspQ96rhZQgcPtV42jbDyjf9svPXB522Gs4YgsHV2KgMh6TG",
  "key7": "3ES3mEqdxHaabFQFzihZSqtyk2MXfNyarfVskoqrRq6JsXWggjcpYB16hKvzAPea9pYJ5a2rBPfsPTBYLoXWWi1W",
  "key8": "2FurJ4jJTQGqsSmjZ5ZHy4fZRsKN9bQ6vbHW4bmiqHKmMnNa1nuY6WG8DHQsYCLRbxW4eQx3gbdapjULs8MqNoV2",
  "key9": "4FS5NUso7QqVhDtNQPxF7T6HRk27hUYoBMY2mEMEjoxxstXhRVNCiZdehbBEVCrrUQeaE4fpLrBXEUGBK32knkrV",
  "key10": "4QM7fcYs9zvT9ZSTWvqZ6qt8NuiuaQCjo8z7SB4juviTJRvGGwtHwFsNPBfNoNjxBJXkvAVuJzxDxxBubYqGqRP",
  "key11": "4oDpzPDrcaAhdEbsUBopqAnDqVCe7tSPi1fif7EadcckojbN7aUECY2M4yo5RoLtUKvZbxG5ij1m9dTHpXaF7orM",
  "key12": "4uKXx2gfS8W2sJWXrWm34HMdm776m7QafapEx5HtisRHiL9JAUTJKdaocJCWz9zzQ7JHSab3SVS52k1R1aYCvzCj",
  "key13": "3N6dCtcS49FHz4i2Qjzn2DuNTWF5PAnUzTduViUKXa5oo9H8mL8vBYbH17gnujGH1YTVh5vKQ7CxYG1gPWMDNtFT",
  "key14": "2ktRNRZjR2DUQuva2uuraPAQYo4goJCaaC6L1FxZCZzu2KmTCcEZKDSDqorjeXS991gzMq2qUKgnbzesKf2kGNg3",
  "key15": "5pqAeRi4qaqeB5YwK5jHBA32tmnUgBPX5meh3Bm3o6euewHabf4rybhpBqX4eeAxD4757JN4m6bGgDVvhhfEUFy7",
  "key16": "4Pp5SwzRdVh88ocEFRDmWMjApNWmZMpxsYgGbnq6ZoGYzvPfsnsWXm9nbPtgv9PH1R2FbaA1WdibK3Gviax5Y3Q3",
  "key17": "9aoknvaHA3BBAtKh2TXL8aVxzum394sL8X1hQ8DFpktf25CmgkGPjCBs4ER38tg4RYTF2UB4ztjFmuV6gGpwoNL",
  "key18": "wXPq7WAN3sHD8e5w9LCEBUPMpkmiBVzaRRYt2ZKbRrdhZKHkFEJEVXKbWNKJWoRu5EdMniqDGSYiWFy4QYSY3xu",
  "key19": "4dQB1TjMohvrvwoVF41jxg5SdeUi3BpAxJ4FaX3NvdpgAzWQcw6RBF5DnnBDekCnTni4U458xDdLfaY4ZKZ89YJX",
  "key20": "38AiPAUxc2TLtjfMrjAWLwscqytfEd4SvUFp9BxKWAZNf49RBk5pb4Pvd27pMprsJzEzhppctGtRSfAMechz6bqG",
  "key21": "46H5uQQnidCbsajtUyDR5co6YwJ41EbGMh6zrM15DTWMRxbS38on8PMr42r2fMx6U4j1BR9LtaktoVcx77QKByib",
  "key22": "vhSd17Fquf1tUobJCqK7Vp6JSdHEUcAyLE9Zx5AT9U1FwMFRueSfoxh5dAsc6DY26qSVg5QixgVvyZXjDucxMUt",
  "key23": "CZun4VUGixQuNk7ESnhmxBUdtPinSuwDhzxSrmYmUxEyekmcDeFo1gg65gjyL65aw5HpgCihrbLbC8QhL6LT73o",
  "key24": "2k3hJsnpmSeuEd6Hws1eEYtUZDdrs6v2PfL7XYHy8pjb3QCmsNWpX9bubqGSuJ8G3nVCwsUnzQVsGcKLkBWT6oVy",
  "key25": "3N7f2CMGQ9JVGacdNB1QoLpSyXCFnKGrYf1y9e2hgJX7dPN78YHLo5ak7V4bpsCAe6jZkye1UbJmgyArkSkBpxex",
  "key26": "677FawfeaF8mscaUrGEEW69bc12azwXaKsAqTCFBSTrADASoRWyp9d5cgtWzf64f3UeE2FBR8bPGpTdG4TA2QCEs",
  "key27": "2wtSd1QHi37RtRKpRgbzHBCZ6DvWkRc8R3VgyfdonYfKQSNp4jkSBpKEXhfeHBpDpSFEc8e9n8XKXMA22Pu2KCFU",
  "key28": "2DRUmbzFVWndRuQSyBVg4X2HLCG3BsTNSQ1eS43M4bQbEvr5g6hv2jwKsaSqb715bVbUYaoZgE2yEGJoKUwTTMrV"
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
