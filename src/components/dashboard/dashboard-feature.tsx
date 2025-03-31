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
    "3a9yF5urgQ1WbfJYzgP68JLSSmCnmhhyuMyESQAuuKmFWcSyKuPsEU81q5RaQiQAeeXm3mqiszJntKF6hvEG6xnK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4cYoB5SfWuyvf4BnvAGVfdaxr7udHGcpLyfRwY61THB8NZqf3PFZMKb9fbhFBA6jCsBAS1Gr9XLo6E6Vi5HRbbhx",
  "key1": "3QB8ftyCajuLP22guxbMpES1jSikLXfTX8fT7HzNAiiiXMzVLDRjoQoZSWL4QEkGs9fpwxNrErMfM4vdtvZ6NWww",
  "key2": "2yt78ZuLiYhPwbTK1fUbk2wf3mi2u49RiQZxppkd4tkZhTrrgZ6qbEZTEM1KxwvZRwJN3Lzna8qiF2SwKUB4v9cS",
  "key3": "4NgfxqGVdgYpi6tQU4CvZkiqYbbk87yb1X9vkYSdrhVKi2ipz1H6U4CSiZK84af8sYtCs2XxSPg1oXeF2nq56dxn",
  "key4": "5avYnEYiHVPSLkLLYdjb7rssRMAJeNFrWcg3mgnGjfsev4dV7p6eW2RkoiVr9DqnugrPYaduSpoaX63tvqrHg5bU",
  "key5": "4Cf4VG7XLEoAM6EZVohXXtXq97XdPEGHfvEpGSnEpYfm8ubdtmXhwCYrsMBfLJPdSjtR8ZL6s4r6mbhwvqyRp4Sx",
  "key6": "bsaHzziCJLq15ng6o9pwABkeTaNXhYdq4gnhA8UHomoAqNmoujit6eBUQ2uuZgbZhHz2jZGvZB24ou7bEGUKNnc",
  "key7": "3vRYSk6PcNBMzWktg2M8XakLA9EUavdpKhcqgYxuHEhTwTgFruPceZprgdxNxEKoTd2bT5BmEpdjxDXLxQrvmeaB",
  "key8": "3WJKsPcwnrmg5Xmdmj8sXjGWZpYPBLxJM636r5QyUpcLKe3dSMxRKJnbfeEjU8UqaAgcKEc2h6BDnFK7f246epSk",
  "key9": "2H3CTazXBnSUupHkNPzxVy6JHPFey1rsfxGC8d4DX7sEXb3ApdWrWNiHnn8tGQSPE7oxB4f2cL23jsUXESoPfZEZ",
  "key10": "4uynwAjRoDPquZon4cRAk3ua8cHw7N5sKp2d19bDrjDJyn1kybPdPwzpBMLA8dRvjAT6av1ZWVnSc8VzV1UgDFTA",
  "key11": "meWkbYjpCw9MWkMC5X7siusHHj1Y5tT4Y9x9RZExeKoRRNbi4XZ4k17C2dnRFMgaT8RM8oFQ6gMRXH75cV5pTA9",
  "key12": "5Ufb8eHH73A4k6sqwRgM3fmuUaMeFfxhYEV4KQwsTvY3doF1u14eKYfaH9utHwPnBYi91TVEJbbDBsrrRqB2Jvge",
  "key13": "37uJwCkkHZJm2fYzh9kiHJ7NBR7vTuRDcsNuQgqJvMXpw66vNu3KfkfxL9T1TUPTXeNLgWDXphWpFHz637V4Hti",
  "key14": "2Th73etXEnZcULmHKuhYmixXh6JpmVyuhJdKivyH2iDG9xzRcpW3phTYUbG9EPqLSzUweLepRVb47LR1KC8CSMPc",
  "key15": "4fexkyucacivzBaPU7bWrumnnqQmDRkh6LW67MSV6wA11Gij1uVmpyrtpA7iyrADQzEdhFjqciEV6NcGwnsmkqx5",
  "key16": "4iSaem26DZN1aaAGBorRPH52aTDGcSFWBNZoTreqtCbp8JLti2DBC27qFjuq6ivZYY9smPt7FaKD1fRGgA6xj32C",
  "key17": "352DM6nT5Nk36poa7a3sY1atzBsf1Eo8VtTiNc8v92yDkvdaXdqBjGPoamLfkUcwnicghhgcHP3RqZjpiY9artRy",
  "key18": "4HKGPp1tgpGesRMhxBQhaNwgHS2wWV9LoGw2CnrYtwnz87fn6LWj4e1C8DioZ5CDGvnW57vzExBaFMi6zCVk3spu",
  "key19": "4FJLZG8b1RfEFLpYk7KmptgfpUBFVH7QUkgGRtQ4mcAs8WTf6K6NKY9bNaxHAtLa6VN31zXw2PmsEdxzVcdzWGLV",
  "key20": "4dxgM31AiaUhZpuvYvt7UPxR2uJMB2g9uzJjzfXU1ecL1Wr8R9DkKzJF5bcjgndQJsgxjqtWYCXQu6kj6iuMoxYF",
  "key21": "33eWqbWwpFrktRfFcFdFwBwU9VNTdyek5rRTkbb2GKEWzp3m3BrEr3reqgKo1KPKEBNx59gCRxXyC1Yn4PZwuta7",
  "key22": "5fMmS3yNxQWvQcyZrA6arTVP8WkAytkBoF3SiEnJns9iLzKfbgNp5DDprpBiT7EZQpxMYjdaUPXvykx3GD1FcuhK",
  "key23": "f2BYF3uycCmYZxsuonQ3Ltpm8JYuBFFSHoPdfoNY352SWwvEHDCEgFRXGkE9BZmtZCc7VXYzgNjEDFeqGdtsrDB",
  "key24": "49usXpisKgTciyH9bFGx2jdGAJuGyatrdzAbPx67HUd7T1oGXks2s3Vtg1o1FuAmYiKU9chvD4MsnQQ8YCqsuDCd",
  "key25": "2Vj7cVSMWwZUB7WwdDkUJuURKMYR7A7YB92KMSpTKL2QQmXSTNr17rQ9TU2dtkCnjRXXkfwq8rKQqG45DwZedM7z",
  "key26": "4iVWYHsUG2XRgu6TtsvYbuFdg8gA41HYHJPoqS3A4euJv4juiu47mNRUsUX9vFGiBjZU35TKnrCzjEW8oRkEbz7f",
  "key27": "3hAbjBzxn5RKzHzey39YtqYZNoVeEnAyx5cYAQVm8sQ5REJ8HSDLeCUgA7fhg5DfrCaHju87BBFq4jjA5gbPDyAj",
  "key28": "2tytKMRedWpkDbYD3wAemKRtSs8y4jpeSx6h2XryfTXWJnyLspSEmaMx4ePpacxnMMdXc9g5aLKb8seugncttEDJ",
  "key29": "24jMqmh5UucJL8meRRbeRK8pYqqxDwR52RJ5KywnsXLHgmunb9iywJtsMcxzd3u89HTkLwkYcE4dWKTKt7gU5ScW",
  "key30": "3HKYbyDvL7SR31RuGfEhU8V1VgVwvtqmY1kervPrfBA4wGfEnuLNUBbWDPGcuXSV8gUtA2HVNcxNcRQGBFGJg1Xb"
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
