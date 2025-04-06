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
    "4RoY9jJH9HP5MfuzTLxcXeFVq7u8a9znghTiJxcHTzETVqsoWXuXLPHBHdtoc3zS2vSbqFZDwR8X7qRU6Bjo5qqo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "qNWcgiunBR9LyumMuB28jZ1VKJz8AjaViEwSRpPL21d21YKX2MMA6RaMHdRAd8FN5Y5V5TXG5z3TvdbL7tavUZd",
  "key1": "mXP2NXegS2hNzZqQhnDEzsrW4JS3QxNPFPQX7ih1fwvf8zHWAoLyyNKN2Hs8QUKm4q5VgFjZaHbCFZHCA9pP7YG",
  "key2": "3f6hvfBtHwY55VX28eQmv53Fq3tW3HJGQtV4yaGbzTWrauv1AvonmdA2EKTYvD9cfGHroC9MrmtnVYwCma9Vyvss",
  "key3": "53CmzZfcAgAYQFQBaegD2MisTniS7UgHurEa8X6pQRbzLJYdvK3HD2km9jxmkRU8W4GhXw2r7rpCaZB5Ys4Q4BNe",
  "key4": "641BHUy1YjAi3os5H89XNPqXL7VV5YiwY5fXG97PdvhpHvQuyMvYHiBthUbozchSD92EU3D1eVsjEgPVT9ZWwcyA",
  "key5": "5Fony81gfmSf5GJ2wyuhr8udLSEfX4o4Gci2n7Aqirndb91ikS4WmqXk6QNxsbhtP3bvuutTbM8xexrd2VKhhmF2",
  "key6": "5rsabp6CtZHF3qyhV3UnfrKVnrs4LEDMrY9LPDGZutVSGXz2S1DVWLFh3NwEP7HUssZJGWKrDAF7aNoWwKPfSMbj",
  "key7": "v6tr8xfMWKuzRBPi1wE91gxSafg9sx3HBVnX8CQsNdnNnmeSKCZzDjuaaWabtGSAP7Rg56cDAAGNnVrKhJCXiQk",
  "key8": "zxJVVGnGwgQCVP9jTPScZJS2WFetcLqsWzyMa1stW5ezHSt8aNVs9KaUZ4v27aBPrumzaRcGrmUpsS4VrTsFtTb",
  "key9": "4N81yE971195pLX6GNTWzXKL3CbjkVzYasmyXWCcSXLsjvavHjrGktET2tkDdNBbUKKk3TtmVrFGywBwEQNTB4kj",
  "key10": "5xq7djCiqRCjyCWK85yg37S5wYejfWB493puXe2put2vm615Xk2oqwsQgRt8vnr4STeKZiDop2BUyY5nU8mD4aLm",
  "key11": "uo2R9P7gDrm3beLJGuJ75yKU8PtsMrvsSSw1UZ5ngku8vUk2XR4VF1nmC373WPDajYVaSQfxQPLNzHU3cRfPofK",
  "key12": "3WTffB9uMhXzCYvW8UWXSQwP9QYwM73b7GJGWDYDDpajUMXzJRuXBNvnuerdm8hbZCJ8zYXYj828eUx95TNETYKD",
  "key13": "3rn5H9rTqrcsB4TEaoj54iVivMW9j3HqrwuT44gKZresaDaWXzxEiJK65yLkgCwoBAMHCbkn6jWD6E8jUtFpjqM6",
  "key14": "3knYTsoZ7uUQ7gxLAdZkHNvemrRei37hCVddf4ChWXG1rqRguZEUqExqwZK96VcVnubxfe29Q3MGvz1MLky14Rnc",
  "key15": "4geBZX7wo83FvSwa2dudoLRivwd3aCWWxhkf91mni6qa5uh7V4YPuTgAzLVpFTbnagouRMRzyXz7LckKJMoiEw8P",
  "key16": "2FzXmzmuX43gDfUSgNteixfUgc8wpExFUNF1yMCRqVxa7mRrNZmtPBaXAHDVzi7axfiBQzMEp5J8xSx1pvxPRwxq",
  "key17": "3wwRKhnDNAhx9dssSPWhYVZnUYi1uMd23LXo6XUPFoxzLcZ65pjFUt4bfV7SPEJdE83ds8D4LHDjyBj4sNawK7e7",
  "key18": "5zzc6TDVJAUuHNxRJu2yg3ysssXdmuzL7tm83TbRWKcTXsgrrrVLQQ95dtrXFr9NbMBZMtsHGGHmkvKUw8TZbsnL",
  "key19": "51F1NLoNJj1t6PcUeEsjsQx2oivDxpxYmQfms1zUu8c9HazU1EkpvgXNKzAFxfEzP2tBT8SQusUZewsqAHFsqYU",
  "key20": "45iSGPwJqAf2x8A9FHgnXRVa95NNLvPbKCkvReMknKcFvCRV3eQNyeMn7NKL7Rsw6G2m7nbScCQFKBQLm3cN8rak",
  "key21": "5iWNA42UEAz7BFGvHvNqTb9TWCdiZWgm6sRNhP565tkJ7xbPxJXuLEmmysUY4dVkSkFSVins4446wDGbC9MkownX",
  "key22": "4XzJEx6wrhbHRbV5EwoFm2fTjqW6ubwSBDketTEDAqXm8kaNYoPYau6HHpb8vtBGtwHuJ1N5wuhA8tTM67JPsNku",
  "key23": "4UDmzsE1ULHY1sUGUZNgPA3hZqB4XrDxTQGgLHJrsk3JtFdFLW5ziqzyUkrkzxL5gshuEpu6z8sBVpTmTNe8AjTG",
  "key24": "4EB9A3Z6QpQxAF9Z2fEbrt7GLUJ8bkCobwVSDDqpPxLB2q766jpzq537XBgKK7qNA295jRPDahRGxAtqPYqsNfeD",
  "key25": "3vACwLDQvJqVmXHk99HM5j5dSMc7nQupE9TYU15fKVNZgVBS92ZqLSzuUS6Xz7M1tZ2W567xL31PJrsyrd9tPxjN",
  "key26": "53tZLERNUS8FkFGDGyptR3aMci7sMQu1SKDXu5zumzTpMFKuPy7LMppcnxSTtCj8jFfLJhT97Y2uTYnjT6Xjrta3",
  "key27": "2QmLG1YxWQ7kRx17eB9p1R6gqcTjJYE9hBGiauQEFwpkaWdZnokU2eNrzCokFqUtxkoYkJkxfNTaDg4V18E5Fc28",
  "key28": "3ks5gpQ6KbjE4XVUgNmN6RTVTcW2LRyyYyS6AKNfBwBaHwSdormHY6gGVrXtqsSNRKQzBouweWP1PKLn1Q7rxrtY",
  "key29": "3srCagDZvgnunCbtPKQ99EvisYqizL6Ns5oSQaW31nPrWxwHeHPNbHWYEBVu6d726T89YeR6vLwWbhCfuSpQF6YW",
  "key30": "5MbEFpWswBny5SBrm6WzumP7a53MNRi8ZhuHi5zdd6tkHuvCDDvVbWcZG7Cv9M6fiKzFhXvAfAg1xn4tRPVd7ycc",
  "key31": "3aLHeHEE3AdACTZnsZ2ypWgQT3Qcc5PQQXxxNtrTPjhdF8zLpcr4ixoJUk4bGCMTE1agSbaRhd6H2EkpK5VfvVKT",
  "key32": "4Li1aofbJNshVKrFXoFN8mcXWSiJ8JQd5pTZ6QsinmJgEzCPZvBVj6r9gMR19Jtj54eDjW4QHn7p9mEbwhgHtaev",
  "key33": "4op2MaTFz2v4SmQiBCmpy7YSdesdSL81TWvz3USruMs6NDrqVSDaEYwyTdBQCuWSZ6JPGG4tosxCVHkkUiZytQ6V",
  "key34": "2iWQM2SWBEiUaKH8nVu5vbcUs7CdTVRRG3kXKjSWripTxzyBUJ6c2huhhsNiLDEW8wLTzL65CrtdJEoS8BdH46VY",
  "key35": "2DC6HsYjeDo2n57nTxCHkkpt3tF87cA1tZiHFk5AVFQV1TG2QL15DoY8HS9wTMwskV7mBPFAHCXcAnf67nbBqm9K"
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
