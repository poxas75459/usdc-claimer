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
    "4XUWfEzY1GvEjnEZDPAvSsCqJgsvwxKenhn1xjVj2Gf6Dx7nGjWKpsLNFFLfuTSrY7A7hWeDgEWr9gdVaxeJrAtL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "372eXGahiaQ4NRnYa3Ljvo4VtG5CW6B4CjLeUmpKc6jogpcNaCzt7QeP71riYDGJ4BEH8CdcJz5Uw2r5tDY6KKR",
  "key1": "LXP1EhcP8zhHRFwK4rB4btcxx899vPMxXnhpPVjYFYN4nWH6bVRPBAuLYdGH5P13JJxpvxxksSUrKHRwKXJ3947",
  "key2": "4ZbKNZdK41DRhejCGJN97kBvm5jCYs7ATatPgeTZt3QidmtfXfiZJ64bPgCdw7pNe8mUiUPTaR8uCTaD8F9Bvu1q",
  "key3": "4sMFyE7dFCdezyjvbNsCr1cvX2z22GP6qs8H1oj1HTLDiGFwS21obNy7aE36f9JhzQwAJ3R7kww37DuoKMLU6sg8",
  "key4": "36tAY4aL1ja2xua5BDgRKt5WkX72HtXXoTzYEQf6Kci49ahe9bpTCQRw4JoXXxpYeNUBcnhJcYN7jfP7sk1kxTuV",
  "key5": "yDEfTNQRT27sbMjBB6XrhqefjFKPk1MFE98cBwBgxBC8ouyxE3Gm9YMzJB2SQgKWTvJjUhVy6my3wtaPq23bbTf",
  "key6": "4K5bFhVKKwHAzLbAREuKbbyEwSvDiMaWRfkcCVWSTPzeF4C4w22wrk74oPHyTLcN3hvyFX8Je8J7agMJ7L8ay48n",
  "key7": "TkW7QuYoss9K6d7RZuVYCb9tG4L3XaK7g5TQXeSvVEm6AxbcikQeHuSHTWcxmHJbeQpvyf2yJ8JvnH8VRNNLXRk",
  "key8": "4heWpAgCUyd7kuWeWjvKHA96ZC7m6yipryLksyRzjerFy4G6eZyyP8zGwstMkCjf7PFYibQGEHBipGgyaYHux1yL",
  "key9": "a3oorWkN33TdimqnFsHtRn7vqdTyFkpcgoFeobbQ9TA2ES6vC4ksSjku9CrQorNcXuoWdRPfCCKSHr3uGjoXKUF",
  "key10": "V8KFNFkBdvMxju6kUSNNXUHefASRpXgLy767Vj6wzoPHZbPT8PimZXNpr1uBW3WkZUENqdrUWwBAK99jPkMKAoM",
  "key11": "Xc8ELAk3MizNVH7YfTvk89x8u3fNziBrq48jFTc68DKcY7crRZuULfDnbb8K1sQS4qYC9if657cZ4XbQAJ6ry6s",
  "key12": "66Ao6RuzCRh3aMJ134SoEZtHtRtiYoBERbmXSRWr7HoZtQbDyWqqDQe3idugP6jneUJ14KzGZwmwukMC1uYoD9RC",
  "key13": "4xJVPHgwiAKvHxCKx4fs2DQM6on5ct1vzjuktAJEFo8ZBwWRX9Ny3dtq3fshrxx4Pzk2r4XWgwppRp5kP5BgTD5t",
  "key14": "5w4epYnBgpBP1AeSA4uFP8KQQVuea69EC3NbVnsHHcXeXzaqDdboNNNw9eKt1nX7gKwNqdArickNj91cEA6saqJJ",
  "key15": "5AKQ9gWu4eXJ3An1cGWRBtZuuuwUxc2ZyQftwp3WBUDgyzRa4aEYxhWjC2bes7aV1yr8LmFKugi9hhvi5f3AUV29",
  "key16": "3E4btg2uQmUqxeK77C97RNfMVcCi6MBXFThHnQ6uJA8MHELMUf1LYNzWQt6x8ak2cAia6dpoboj2jArueZ3Yfyyf",
  "key17": "5cevLa4cM7WoidGuWUHJbhXvbv67jtM6gfsXuHJetSNWCEkqHX7hFwEZgkKnNUgDEHGZQxafi9iEkrSDBSMNyrGi",
  "key18": "uSjpUoBLH4r7Ym6qXm1CZ98GBYbwo4YFKzsHEb1CU3FTS2isghjDtsqaH89EpazPrup5qCgmyBJqAYj7brTv3sq",
  "key19": "491zsn4oQLSREM85jxnn7iATvmWD5uEs4HRqdVxoxuhHe98dcVsL5CB1HQpDxKkKx6Xfep1Bfb5GQvhyJMEXSFF",
  "key20": "4FQaiSdTuszUt1VP8ZGwfZT8TLSx4Wn7vfQh7YYqzeRk5NBcnoEG1qnrHJxWFkZd2Yfn5yCTLbjDRxrP11UjMczm",
  "key21": "4fySxAot1EH1wBYThgrNPLABy8t56hQpK4jgYMwmDXMEbvhaqNkLwCqCQ3DwukGUuxPTx42fP5PYZh9mCrrHv1Py",
  "key22": "kWf4jHYjZ9ar3QC1CsQKbcKwaPkzaeaP85DeVQW2voKMAiu2hbFnEaPWgCSw5idPh4LGGhLctPYCVyvPQ5pp5XR",
  "key23": "2RhG4fQXaD8wioidsJdi1fwXHMC2yv9XB35j627FUpmBrYgeknCs88nX1t55Zh32CS3A6wdaBxxokcXgDVnFkmzm",
  "key24": "2cxVggoDGi84SN1ifxKD88oFSJ46XW3Kgztjv6Y32WcQh7V9RZYPAfNPQ5NRFay6FJDGLyfJKBRithLUmJQk8BGf",
  "key25": "472stFQN4BBw2PhDbfr4b9THEkfU6vSUFMURUqmb5tiqm6hHnGVqtkHXcEdTgGv2J7pk6cBxeZtRTW6gdKnBtLJw",
  "key26": "2kaJsfY6RksYHY2WgiAh9RLEMmWfKG93GHoBqRsVHwMap9o8MNQ2aBLjUgcNJ2zTvY6Dxq1mBHTFRsMatzAxL7tF",
  "key27": "2oifbdnLEqHEsPU5pj94GwitRnkLvS9TVF5aroeRWn498URt1svs5RuzuPRRNAADzwSrxpa6Swj9aeTdi7SakTs",
  "key28": "5yKZXTWmk1Z53jr8UCQKR19nc6L95y4kp34gUyz6oEtdf2dRmH172NHRgkCY57PnF3h2JJsH3G6FSdJHXww3vwmf",
  "key29": "2oL9x7dEcKv6D3tJTMFKrT2CpNsdQ5u2bcQ7XNxmQ4KCvtbm5GG21uoapcBLkr6pGzJRUpnVuyhKyKdpNeAP2W55",
  "key30": "XRzsNCigmKA5JkoFjfxciY5aLCrJiqJZUGqZzMdprPYfMvNQgWbp3DxikihWuA3R6HB1G9Y53NrZBqkDqLx7u8u",
  "key31": "3NuNK4Vq7mHSnqe2M9yZ8DefB95Rkus2ErqqChByPkDKUeQLK6dj7K7tv9Mtjjt3MuajzDgCgSCTgr7Bcq4byLZY",
  "key32": "3jLMK1L4yizXHrJs8QvAFzzvRYQJCG8WZ4CoHz56eQRS38knHNEuQnGpwNXYGPJfDiSjowceRbRC7yQSKpZY4rEd",
  "key33": "sgBo4FSV9PoxqKAugpXxuvgxgZSXJps8ZyKE6PMYKe5EnKonCDWgHSJ9kedGAsUxWuNNJj4G7JpThEbucZV4ZA7"
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
