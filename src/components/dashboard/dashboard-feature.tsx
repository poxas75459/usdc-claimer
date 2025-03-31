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
    "3eeYAapFwdRgffF2avcvuq1RUGTjFGvwFC6bieYrc326nF4jwBAf7t8Ny28ckKz3L4nyMDnKFW2UWyafjxCPqkUp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5e8xvFYvAxt1qxVZJdmuCYeMDr7NWPMnpatKqisqxXvRyU2b6yBfoKZVyF1vkzsn8LbNmMSY2a3soSsFiR6zykbN",
  "key1": "3d9YdrKcKsUiG4v6RrEiGjDkKNJ6Yh74PxYCkXfpG7FQ8jqY4WKAVGw57J6hCYrSomHq4djK5uAdp54uzsk6DWMn",
  "key2": "a4e1ANnGxdAAxe5cX2RgJYoecwQVwqJ4q7sCCtDqTfWRz6F8ZZd47JtDycnBKbNAT3JsheKvd3UXNJZV8qE3amm",
  "key3": "3My87JwvpU5k6Np3LUYBxCB8h1QAFXTsAcMn2Ssi7eGMwKwvpV5wfQ1J5r7vMkp8nMfNg3ix6GdjTRiEHhP5nDsP",
  "key4": "Vpi24geByx5KT92eoLgMNPocafHQhkakePb739aiCyqh12eCurj7PmVVytA2JMoSzvKiTx3or4qAyizPUNo3o8s",
  "key5": "3sNFKFWx3qUQoJhr3qJKaxftJCTFUtuC6r6GFfZ1K15rKJ3DnKYmxjYA7LE6URYVT33fVA3P6sqJ14xASuVxsNQY",
  "key6": "4XY1QfrHGrk93pZmtcA6p5zaksf4cevkvG8rwXV3U9ANfZtziD5nLacbxr6T6WjdeqNdjHbufAGbeJ7jakRvNYoB",
  "key7": "5mRdGa8a5HW8baAJ2oQp5gA3SY6SwgNx5Qo2567dLCHGAodj2qiw7e2BMGewwJ9zLKTWqcTTMEusLWtreJQ2yHLr",
  "key8": "4KXLGEM1Moe5PX8SJHqYwbCAKDFcpxsBEUtnXVaYRKD9JFuTRW6DJWgTya23xLnp3NPr5Y5GYUgpGJKPBJotYcWq",
  "key9": "43cWDRyqSHBzPNmzQC1yj1gWCYdPPLEVjhL4koJgDPtzDygEVagvV2pTZZYvn7yxN2vf4cgw4SnPxNjSEkWL7mDa",
  "key10": "2oBdcXadYEiucVyKN926WtaBxx9jBepyGw7mzVhyQgm9dWkQeZhAaGD68NDLgHDvJjUqZjAC7Mj9K9vbD1KPUPUN",
  "key11": "z5JQ918tJtMR8trRs8ApyyYtxPx4o3cRPqGKmGU9aKEj6StiBQrZQ7NF3YLHZB1AQyYoqgUUbxrWm3LeQcag7Eb",
  "key12": "5FCBA8R3VC2ZXdGHXR3BHoGmxGLX9KWLLWTnZGSFnBkk3w5cNbEoVteYHv28pDbFyigxhHRYus1Nv3KW3Prs6MbX",
  "key13": "Q8r2YDwSefazR6sQ9GnvxspNvGXg8WanF8DWzAWrV1CaCFz9fnpWJvTpNoMXUEFrqdYUiZmkY4ZQU7xRC2G37wM",
  "key14": "4JYkNT9De2aZKSythz8yivbYcz4A2UtQiYHH583ntp1iFum4VTtwjkc38grNRrBY7Q9tTbSvFour3Kv9qhyVYMtV",
  "key15": "5YfkcLmSW1ohMVgHWvT322ek4Ncna8ByNcN6XWf4ijEkVTt6LogXoNrdketNfWmt9AYPZx6zz9VtyVrXS2YW4dtm",
  "key16": "5qrjAYBWLjMHw5TcebFMkiGan3pKXH4wULBGDWVELjCXQEitb3itFqwN5M3rkPVGbYkGS7h5zwg5V48QziKUTKRD",
  "key17": "p9JZp3S5mDoQXEkKZChpCNTw98AcZGB3vN4RX5uGveNknfLfcyBDv9oVzf3RUgkFqyC3CoiSY35LuHcCuFvPaLE",
  "key18": "2j2edmRyMY5sRPi6s6px6F78goLZQjXBebjDafLFHX5T1cEUGEM2t2VPyi3PffDVrb4UqEgrWZG86VoAddAEtWAN",
  "key19": "2e5qL3YJmGDRTi3qv2fkBiTmmsK73t4iF4KrU8wL38he3seksuTNvqcfvUVEnK7TeaJCaaX3htmp75KT573bRt5L",
  "key20": "LkbiGsZzt69kacb8LFYx4R52mmP2fhLpjS5L5bdE9q4CDdARaXXss8qw1yG8mvvWxySwb8mK8Z79FJDZfRQ7ZiC",
  "key21": "3wp75MAAZeUxLLBjqZXyqpCa2ok8sCNE6h2J12qcgmHQJrxc8NR9cp3ecz36LhcZ2kwLAkXLkwjBaJeiUWHRRgu3",
  "key22": "wh1Brb7bEXavxxuLLQ2z5t57rkj963dHKRLFeXwXtvSYza2QaU4VYqzeH2Yfx9ZB6onzqLxyuivGsvGXtBFxgLF",
  "key23": "3inM75JYy4auHN7x6KH1MjmTpEcwPDzbnQ5pNEr2PNFkPb7i21jCpyoZfNWNvHoZ7UCTivgNPqhJ8eK9yhnsnnRv",
  "key24": "Jz6ZqFwaJTh4AMUGr4D7Z4WcjPMWbMzgWmxaQ3JRcqNPoAgTBkVe9mJKfaw2UpgMg8vHWujV8uMvMNsmX6ctezv",
  "key25": "3Mg9KUK3wrQKc9vbTr1dPYr9GLbp2kw5zv35XUQpG6ntZfuPrFwesU4yK6eUDegyMgazvp8442ynQ8MFpK4CdfGr",
  "key26": "4a8hv2BerQ66gDDyDaNtMHcmxGmr8AVTGRfFTSPBadQUcu9zbFBtXT9w61hJzgnZc3aBrKtTi4w3mAG73cfXod5r",
  "key27": "41NW41xmiisScPv7ErfAQBz4vevbkNeWEvCFJS12Mf3E1emEZT4rY5nPmAJ1mqCegN5AXhVuHHZ8NAv53Uu7xDMx",
  "key28": "uPfMWytvw8zxDSaBATeLeekwCMN9yvd8zS8a1bG8JTJpC1jvZmSFipZBUDH153N9Sm3rmDAwShrfX3oYU8EsyBu",
  "key29": "61DXZz8A9MTb21CoFwdc71GefiXx5erTKpRcuJkLPYHooZV64FzGeXtv1Ynpj6K9SxabVJQSb1uHPYw1xkkPc1CS",
  "key30": "2LEv8PNMbzdGMfWwX4hGye3d2wWYZo81urBNZvu4jVndkA6T8vuyZ6niEprfKvXt4i3vQvXvUzNdXLsbLZK8xEsy",
  "key31": "2XxGryTYZdzHpExXhNamt8DUjXFpnaS8im4GjW4YcekQx4h3Mu2XcjaG6nYTFDUeWSziwwc5LhATqV8zH5xAUzWs",
  "key32": "33r8ApsTBRQL7qykumBKRhoKB7i6oinNn5MoERejuJwhHDNydKrNWV3Ct9bvyfiVacQew44G2htmkVoNCC1F3DV9"
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
