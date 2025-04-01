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
    "Vb5nHZbLE7nj1ySNVKe7rBtu7s1idEDNx7Hsro9ZSYWac9c61zwcDRMnumMd6PHiu9eSexvVAzwW7xQTCBWctpi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3zttf5sQH28LFimBMj5oNzJ1a1U3CXNZVYvDxDMp2cniYzk9seSj5Cmna7ixXFcTXyocJqABCmC96GktuUUYbEvN",
  "key1": "3sZLXuY1Vduj2E7SutpntzCj89qTyabpeXCpyHWLYb8KCqHTJeqv6GoGZbsnp8aCDPgRpSUEtYtt77n1hRsdpXnT",
  "key2": "3a83Grg3wUEM3SS5ESnZhS24gGdoPuU6YkFowcYHoZPG66XcgKTR6gEyiPuFge1REoKb631CaSTavzYRzmaA4kAP",
  "key3": "4woKu19FCdSUVo6WtW1cZ9tpxDupCGrL3gSsQBSMWUNaciQCytMMAstRdGQognAk7TmfBNqaj9d971Uv9urmPXyy",
  "key4": "47YFYwQLfPpNT8Uq1a3XzczQj5G4Mh95QhNtc375Sh6fGETWBCwDqsjkcTSgHJFro3dXf931xRuF8NL9x4z7mZdW",
  "key5": "2vxNtP82xG929rkVCB4xupnvJu1r2fRdoQ959abtvqemG5YCbk1nQm2z2zUTxhhpR2KG8m11CTNis8w38kd6jJY9",
  "key6": "5ZctXwT5oEPqRwBz9owmA8bE1t42Xx2Fc5ozBSXM7GkRoP5NL6oTfjprrQgz7oU6t63gxEhYXWxSYiEgDm1bVYDa",
  "key7": "4b7xo5QmmguzCM7GFwatuJU73n9872oknCpuRAt9qDihrDZ1S37NRruaXQ6GgcxT7NbBWcZawAZsYq5kyfcDx5qh",
  "key8": "g4QSRRntK7bAUsZF2Y1gF9y5kFv5qkm1cHVdKR3kwD7TEA4nGbfRZbdvakv71wgpwRrbY263VWtuMouB9FGRxqJ",
  "key9": "2aD2WKQ67NjtjZRuJPdcQUFMXuvwbv4vAbkGUhVGMMzgKE92V2RHtXQ4KH48sDpZZuYnrbFHWaafTrCqhm5CstBw",
  "key10": "A3EY1bXppby51pkMS2FH43RzQ4C4CK3zrwGgTeV1okejo9W3eSmbHt7ZbUh9sS18yKD46bNjLUdTt3AYAxquEM8",
  "key11": "2R89L4jr1c3vUSCiY5RAtty1dZHGZsCN7vu5SLS8t4mRFz3LswHXANouBAuX17obK8r2p5RQ7zyBPq4UJwegFZnr",
  "key12": "5Gd8P6NKUMGMMsKMCq7PvCb7UkN7S1F39aqGxSTpfMAvq5NFaKonjZwboz4aezEDGwR8b32Pr4gA9xgup2wf3XmA",
  "key13": "43FaesK5stQpbiiJN5YCUYS5NgeL1GgtGgSP6SyBc7wBwtD5sSu4oj3qivGEE6gcUg5engxXPJW3gDph7HtH1c5G",
  "key14": "4AnnZBUiQvEcRkKJMD25e9VqZYyUaXhmANnihropZQCfMZz3Gsfs8ajQdZNeUCABAKZW6Ds8utYv9cu9vTgTMJHW",
  "key15": "5XFXq8bbgpQksVDrifqTcNK3p4EGEWpmqzREf65zN94fGoYvsMpsG3SNfKnnuhW78ZMLkM7XebRo7bHEAHp1rST4",
  "key16": "Gv6ebZZFaf5bt9enAg92qizKwcyZodixks5nnRXLjNr4pTos5PAdHJnmDAFgvoYptRQ4UPxWu1LUcBwaMnFoje1",
  "key17": "2M8yXUYmBmYxVXyqiggaGRTbuKfuDmQuv4tsMk45jVrppsCcrLuSi59yM8mhZv1DciLi21ayomM96Fu5QX1Sqba7",
  "key18": "4BMdiZMR9k737YSAY62tKBfyrBLx2wWAAFsS4FqPahi2G5SRe4Pv7pZiUgmVos3MLRgoWCPsUc5TT9iGdXbZke8W",
  "key19": "3rqfG8sLdb7LtqQL1i6U5bGsJkc1Stg9MycywBaoVqZoa46FiBVZLTVEBKWRn2VY2G8Jb1Jkhd1TBMZjpwKrbPPo",
  "key20": "5BKWE4xiXPKbuw75B7fkCdESonZM3GTetA99PviwEu3wnQ57p6z6bcUg3vymCUAfzWd9zNMAnYB16yRY9zdXy2fS",
  "key21": "5q7wACH7ygTtyStfMRe6wYqReKNQdrvipW6gLNmDxer4TBJoXXRr5LyPmdPZemi3zU3kfKwQmUGa5kwYscvJLiqa",
  "key22": "36MTBbpMaM6gx4zVKsRn9qLHkE1UumsuhLMcTUuww1J1KFGrGSXLjEd6kE6v33yA7SeRjyqvDd7mwvdwYD99orp6",
  "key23": "BweeuqxLqMCcvwkwnPUNoewU79Ge5Lt5FYJPP2XoTiQAydHGFxkTuM1mJyKnka6p5NSX4e5FPhMbCc3GxZeE8ER",
  "key24": "2Gh3Pvo6gMS2FnYWhCyfL8j9ewNTWaYWTFRBHhD3JM6FvXh9dpjwb21a7bHnSxeG5uwVQyS888ms9cMnUWbiDM5B",
  "key25": "5oDGpBZyt1t22AHWtQ9GiWLdMPZ1u94EMNgxHfu5m57T3eNgSHKNUrgQSqvykfdqoem1Eh7bNz49uFSi3hLKpjmW",
  "key26": "2B6Z12oS11aYx5BSr2MjHpeR2nh7J4GX5M3RSTR5syQobBGMYPBLFDJ6MKqkTQApHR2nR9p6TxqnAy73RFi4X3bG",
  "key27": "36KWpRRrHJi3XuC35kHVWGmZ8vY1pd1qntmbp5fbWCTb7NMq4K4KKtYTDJJXNtyb4gr3s26mQRnE7csyGDwPhmYp",
  "key28": "298JnpEcMRK61fZZigRXRdvQu3w4tgC6gYJxrP9UhXcadgvhnP5WWqpaSsyiCuAriGMLhbz6iGyBqk24ZVSKcgKC",
  "key29": "5Z38rrx8eErG1GExyxEysowoqQRpmwd2cCEXetpnuCAK2hjvv4ExNLnFNHEcBfXipyTX5WgBFkTxDJDY7ggxZXzF",
  "key30": "3KyqfwjwfQLgNDPtHZ1bdZ3XBaiHgbaTwEkdrF2TqMrBmd97wNdSs7Gf9GBWXwZYKjbUVB1qASR138gjW4ADqAM2",
  "key31": "3LGVz6yeCqE2EmrcoZzW2XJpHe1qgUgjNcRPeeU6Vnv7Gk6cGiR5wv59Bf8qrRY9ZarE7hzprY4hGfhL7tXncuCg",
  "key32": "31kbKyfBZV1QneqzLanACvy9DAkbzYNtJyUevE8xSXDrP6EhTWbtW9hhEJqzpNYVDv4nupKv4PzfuxbY8CCYPNKk",
  "key33": "MboGj2uXhHSQ5aUQRFx8Qhmz5psFeK4Z9XCfd6gyEwFnfS5BKh7DjERYj7kF4xNFwV6ajAdtvKKPLDR1qAm5Vk7",
  "key34": "obqBwbY3Pyi4LPr4bTA5HFcwNUtNbG34uq2cTvq5koWamxE5NPmFSqHi5bGKrHSaLphCHpzicHEXDYqDzBq2zwX",
  "key35": "2zRSrRUXMTMYEPiHhU1s5dZL4yUJ74na2K9zT8eqTUYnERvCAdYp8ZYronZapQtS84fNe6ma9RCsb7UfC8rw7gKN"
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
