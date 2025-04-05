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
    "5K9Mn5kiGd4J8jRTHsit87FXyQf4c1sehn4kS8Wz1e2oXLJC5HF4koouhAKyqBZKCdWdt4dEizpfsSJ4fCTKJpUz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5WrdVwojYMnvakFrTTxhtMowiKi21iMrqbgdCDokVfAuJYbh1YMPFNoskTm3bmjgcano2zqyRctXdp37gpkvv2jb",
  "key1": "2y6LoPekady6J7hawerbY92JxyR81zNHWpApXZeRQ3XUWgfUjKNnK9H6VMsddxLy4scTFoKou3ysGq3MHPUyfM29",
  "key2": "5T69Pjst1mKf9FjJx4HYNZXreVTqTqYS6HczRAGx1AwtzVd2CCNxKjcyP49hftUJCrpXQM63tpnWFqrrw9okgzn5",
  "key3": "5UfZyArVXHCSskXBkqAofdLUUjnhoUdh1eFPGGtwYncq9YFoCJ4WnjAXuQCq2vtj3GuZzZEwxRe2W82bEntXxZhK",
  "key4": "4nUpv9kVuMvH1DQ7435xA741JsVF4NvVnim1Kn6HNR4rYEpdyzZfwmCMsaC3GMTe8r3WqMyeqoHKwrjotGYYTkpi",
  "key5": "3Nd7ZojJtKm7UcQpwm9FbDpMRGSPM3ffx3eYJXymUe2H1EMtjZwZuLqoyHLzM6aZkXWKBR8jtZd3uo6JourRQzZn",
  "key6": "5z26fDPstFNwbdZY2VVSvthaz5x3LX3jCmr8cZdR2yNDAbo69dcEbx9w9Xsa9MhiGVei3gn5kaDSHL2FcJmHBuBk",
  "key7": "5NnTM3dGdpQMSCUshPJ9uCpMDoX5y4Cc2r8dHrfpEb7wHx3epc9XXkmqdmhaktAPUkiogzmUcShRySHmgdhPFmLM",
  "key8": "4EEuBhPj4vZh5p5cqkuZztC3LbAU7yvi4GJF84YMCbC96YSzLQ8aY5LuuKKjxsnZyj61yVLnugULiq2z3zzHrGAU",
  "key9": "5y2d6aDnTCzmZddKtSJNvoQ2q89u3PXE4ASynPNkyFRvpBc8of4Aer2kKQeqPLZPYU4JM8uLhSk2eu7nRZz9FprE",
  "key10": "KN2DCPwPnLbb2jyFHFPykRaHoJxXWpUtjScXwZTPRrtAjjgA2HvfZdD5qc4CHThh3WbrQ8a1kMGxnwJRtnhybiC",
  "key11": "3EGQ3F9XnaCnNdL9R3MpDu9mUUCWiXmjtxNjzwa6NjUYbA85rXAc4kxJ6Lwirsj6xehLHrYwZpbFS96PY5tUVxKo",
  "key12": "3HuurC9evxr6SyfKDhJ3Ge9ZDQ5AxM9vAKkuWc8mXBPFWJnkjdQYzFwAa31oHtf6oCmropKorwwaru8UKnpgpQbG",
  "key13": "2YJ9ZgVDGCbdtgSfsZ1kDTMJLM2xy92dy8bsQNZLULBXqtRJVPcuzBJE5aHJ6ZppGjmxa8GRaHMH1tXXna4dprsj",
  "key14": "3Y9Nq7JCNJ4M2NLQZYMRpNit5yLCUDoswDmt5rPFX5pToLjeyFmoEjHiEBAJYBhiskhZKeiYCoQGy5Uy5zANbK1n",
  "key15": "3eRM9ZBx6QxxgHmWcwNfMT583RTnkMWDyMpkUfT5MpsMEB2VLy1jtrbbVewrVwCsi3aQ3sFJ67XhYZCcHH8RvLCB",
  "key16": "33vrqTNf7bqB4bt51koRAjDD79bbt3D3ZiiMWzCTJ8RwCZgAXNrGNfnFTPqHDndACXyfdTCGukjfqgzHkqpAWdTY",
  "key17": "31ihcA3PsGAQtc78GEm7mvXFQgCzjMt7xh61xvo4LWFVcAnEhn7qBV49knPf28A1kXQDAkuQEwUK9w2Ewzma8bib",
  "key18": "4wCYcxmMeViEgPGmHsLQvfXDwxgoFkURT38mz62n1o7XD5L6Eb7jFBiHH7ejbGd9JfxeEGXLCEno5aBXoiQa9Zbb",
  "key19": "2mdtziU6e3oevXT6qPYKzvcJtitYpJeosgQNzTn9i3sQkPkn3wDRqxejnVSVgj4rJnC3hhy6vCBtE7PXHEUT2rfH",
  "key20": "3Wg3PQeVwZ5FHUeZn7XToFKqDnMLEfefUrtYVTm85fgkW3ZM3qrggS1hKyPhiSmhQenpRaTk7nh1dVs3CXRewiTv",
  "key21": "2259LUKMdHjqiAgcXEVZZ5jveTAgrG9Atr9JybHWM79KfVfzXx6aDvnt7JUSVL2CrV3BtPM8kACSMfwdiWScaBTx",
  "key22": "3MPqrX2dc73qAVSdUMxTPoNZw7Nqx8ruBetFqVZfrCQVQtRNhHi93JpKRiKVjXCy5U8qZiuasp7xFTsjUG3dv7qu",
  "key23": "3nwG2FGRV536m4xs5bXMDbPRb2Ww96Y2KXjbxR7D5kShgxwhaRXXZdVwXq2Z412XUyCHVBcdhC17FejGYbQ7ZwYc",
  "key24": "4z4vyztKXTmjNAjfvZoWHfUXnRtrhsHUMGAou1RgyhXLHJyYdDUsmbkPWcGRdQ2NJuwXXXbF7rrsG4p2MbocYEt6",
  "key25": "49Exhf9PcgCT77D4BuZ5kAJaqYVLosb8UiahaGj1j1hbW7D4bwTJ9nLtkRnT93jUHcFqgu4RbTxXXMBsf4kCnm43",
  "key26": "vAeu2WimpRLK4yogXwjS4HUWdt8Asb6FfhhBV1YMLBjqYqPNVt1tUCNzNgfboK5oXFsbmv5JSmqeFrZTATyEixe",
  "key27": "2b7dAzv4SQzFxWGDZV6eqphNkyFPJVL1jDLfvmKQyrQvbrL6aa6SbrLSoMbzfNT8jrqqcHt1E7HqmRZqjvuKVHZ8",
  "key28": "234ZHDTE28qGQX7yoig2p37fq9nqmDWL6FgJBwzppfqqn5b24DystpPdFyh5MFUTkfYAekeo1ruVNiCmVAHAaGdw",
  "key29": "ahmyXLjTZU15Jff8z6PWahUgqrheH5KsgSq3tru77CseeQmKMagy2pKFrXMUzz75JtXmvza4aWcuZo8AZ9iCVFa",
  "key30": "oWW16vtitAX1HRBuu8roy2CsTLEyWXQtC2nBrMPGLEhZdNsnVpysfGUBXLRjdcjx8XxhwVCkHDNnYUitXMfgySx",
  "key31": "4Degt13CEWvHDYFQRfbS2ni47e8ThPo4cDD7h8YHmJfRU28KpLJeJN2t8atdZqApgxPMYtM1G4rueNY7jxfiM2yf",
  "key32": "FbqL3HxT7Dz73PvgUFeW2aYd9nQUj4ChUPFpaAEy8Wj6KeU46wsukRdextQCwCN2P5tcLKNHQCBrrnPJhBGsJUz",
  "key33": "3BqLoVHYKSi3q8gQjznsYLvprAXmnz2zZehL7CojXh93JiytKa7FWYfbN6oCghrSs5jGCXBEYefghBN3CmtX8gTW",
  "key34": "5jamQSpqdRLh8wYVtv3ecJMCKwGS7DPTNquTh2Jr3HYopz8rjCHM3ZVDHTe1FxQXE7HZCsxPY75gQQM6KZ4tXAWk",
  "key35": "5QrdHoM4m3KBWhnJyswFhupjLWvY3ibxizCgudBG374M8JGbQZsJKii2rzZBDk7amRJpQ1LQ984pbFfCyhbEyvrM",
  "key36": "2aWaGH5zQnJKVY7mZTvvZjTXiU8fA9PP9vLDApUMMxL7EariTRX6suq7mmKn4Z4p7Fzg7Y3qYXYpnDvFftPorB8L",
  "key37": "2nHaNFrnBgdHHNZbPGNCb82FpBj1H4wYSm8HpftJ2JkHj4Xpi4iK623E4XzkhQ4xhehco7wVtoWoM7LFvzFTFoE7",
  "key38": "3J2ifYFDso4ASt2vYVUZ1h1Zote34kq7GkM3ytFAiHdRDHoJbTPowAXcpuHd7cbSjzuz2obzPXSi1eRm81QBhVam",
  "key39": "2DjyiTM1VeoshMEwTJ2cnCaDkuxvPgqwHK9hAUDHWk1G6Lckb2AXkZxy5Wi745DNtszMDsxoSCuAzsxePJRQXK6E",
  "key40": "5qBaQXrDAco6sZHH8kgfE971Gk48S25MPeGJQkpNuLFWZd2B7Hck2XfDihui5nWR93uuHhdZhwT5vNA9hTte1nRZ",
  "key41": "3K8Sc7uFkTwsHuGqnzQ3e84zPrJycAnkkfNLAPcAxr328fH8UFHQF8tvW4XeQiVKi4VXLn4KVrnHWiju7TfLGiws",
  "key42": "5xZRpU8dw2f2QRTKSdV1m6Z2SXjcPnHRd25WpWf4aRkq3VUWiJZXvxxmcMB4jRPLh55ASsZwbT5HcjED5aqmuJ1M",
  "key43": "2VX5Xanhk8LH3ZERTXYzQvGjZf5qZexWMvZufDtyrQYjXKSpjkR8imvZUT1VJ2brUZe9eis2P34Biuu7yW96HaTJ"
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
