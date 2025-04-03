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
    "2mBP4vDBvDLSVeFKtYamGqiMDVRpv5Xbb1dqgRid1CufdFKC9MpHtyg3VZ4ud1UNjPDHBPAMFHbvYfmEwK5sp1RS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "zxk8MS1cG3SLbq2K8JaFeAAG11whU32SsEbcCyhvRJ98AXZNLMpgP1R43AenfQhGp6bN7HCtTUUPcao9qNZWRJf",
  "key1": "35FtMSU9sJWCmuuFwPUkS2wpVunUup7HoYARHWD6WkXusBbYZBJZ8KJuFbgAXfRqvtictQzUAdcFFwchxriApRWU",
  "key2": "4dFyi3o86ekz2WLAqknmya4gtJFqG3Zcw9f5JRufWAmJp7aDU4jSkGs65nmWu78ZT8u3bqdywE5KGHc4tCUGM5Fs",
  "key3": "4Z98MUHzwvPaoPqgonLpiapbr2ihZtREpSsjf6tairxSEHkK3Xwnr3VNrvvzpUTSe3gqRVYqGXzwdeSEVDMZD4bg",
  "key4": "64o7PKnCdBQv7fGNuoz1Fz1xHazZG8gZB5d6N94YTTapfUMpjSAZy7X8N9VuzKsg9rXNstCnR7wFoMcfwELjfWtr",
  "key5": "3crYkxB62P8z2JYnfmzp9vHM1z25mReg6iEn5ERpxRp5tbkxSBhBebjtQvsy21NRToRPatzJ4PZCcBLWEra4KQSs",
  "key6": "4vh81wgELMqTc3eADXssZpZamrNdNiQNmPsSkLhKC2VAMozn11antqjM5cRGJqagirhDqgwb1WNqH1vSCs5emBGs",
  "key7": "WCLYjwtr2TfQFZ2Kf5ZcQsyCG4osFhs2VvAFGNSpc8chRQq3NWWFooLXjRvi78xNybirz61HBF1wugLB17QDfyx",
  "key8": "3LNvrinLBUoRh7621Jao7tApYaTrtunixRPBY5Gnd1EftigyVUAqWvK5ZQLAaLo9xRS1enKwDqQzBoDKvXR5fnRX",
  "key9": "3zUjqPDW885RNzGiGHpXsUt2ywGAm7tYmmXa6p7SiTBqah7GgfyKpnoh3WmhMW4rUwcqhdR2JnoLBo2ZQNLzF1Qz",
  "key10": "2MriAeDWcpXXTpSuDE474DECoFByUHETMuz3SUrTZqDnwKtWDbhV4wBSej2Ly7bPW9Zgx76YBbTdr6NMSYMbEvhD",
  "key11": "23RfiMg6z2tZT9udEnH52dniTY4XzrUViFHrRJdBmf3ksUr4N9cFCChEM6KAn9YjhfKp58bCvUMpsmPe7pKnZXsF",
  "key12": "4BeMEQ59dtGevFosAN2VwWFDdmXZdMEeTQqR3jrsofY71nfAdft5DoXibZEikCAmw5AL1FXGgmKnfEmMusDPWyqZ",
  "key13": "5tm86k3wd13GgaVnYRm8CtwMthY3EvGCMRd6S3vYP1pF24YnCDja7SRGUWZLZ9RsQkpm4xXynNEEN3oX8HHeDJhQ",
  "key14": "4vneZJXjYhdjPLaYkbJdBVW7gJPF9BT7mzMFtbHCqbQEkjkqQ2YC8sEveccgHfu9PYGwyjNVvDGdJkxNqmAXEJcK",
  "key15": "4CtHaCaWiSj2Aj6yNYUbrGa4RCC7MG4vAVdpRG4tjhXSe9xBkqiLnBm3Uc2juiJ1u4zxRZhvWG7jHRdxRUcLx2zG",
  "key16": "GjaPvScjGWAbfr8CmtpodsdwP6yMkpwRkBF1wazyG12dhaZ9YzjbwYcGYXtkiY7xVoPnwrVP4dRARo1MGT2ZE4K",
  "key17": "2uXcLo6Tdy8kJoRJuYLhdoFVwpfK1tvfryzXrBB2MxXWq59NoWwgBxCnnYY81XPg8gyUcZhsFB9nEHfG74adoPPh",
  "key18": "2nUTrw1GG6XRGSm53cAXvECfrYroqLYLU6kNhMhAe8HfLr8gtauud3Nhr73iTHsZgeqRSM7YspLG4tCrsSTpY2F",
  "key19": "345yisLQCuVU2QPeVBR2aqmdRDP9zSSHD5kwC7SkvVxKGy2pDkATFPFiE4aN2UQ7ewwM8YdpnUmiRtkgNNKgLcGf",
  "key20": "4VvZBasmnUFkWgByYiABETh6Q9vwgvL84sXbki4AiQuveDFwv4KpCQk1UQLL7R1ayNxVTephYA4YPELe3HbqKaXH",
  "key21": "4XBQheuGmbyRjfmfHGQtYgp7mooVhvVSnsSwWkgCsYMY1KavF54saMnWxHx11Yz6y31euSjw9w7bKbF6Qw9m9RQg",
  "key22": "3srQMDm3Ac8YeJAyyG2c1tBUc5fnLceiMXwYxkbLstiX27hWEEkcdhcwDa5kpCfEVgW2jWJaz1SxJWVh7jGPjVoU",
  "key23": "2QBAtATc5kupq7gXyCaVAyLWrHtD6dbTQx2zNqWYKYoYF7BEKJDrfxywqLWaRBm8jXowtxyo1dyvKrrkaKEDouYC",
  "key24": "2k5e4LsADdmJP3C55TC8GCzR6dKB9Si3BgoULUN5M3ujvNurNivyphgE4pxJHyw44DGSXQCBFCThZz7HUkFX7d35",
  "key25": "3gtyvQwgGvLifL8G14rodSBSPA8j2XXX8sDioJbxxD2DS7qixqNMjtaohAzmJonWiuuZoi5tYvo5JDKprF24RZxz",
  "key26": "2o6h95JUJECBS64uFiaqXXiLD1sfwyrT8AEBLATsUhLYC75TYnUghE3nVjAJzj5Ygre2vA8XvQMPShtUrg2c9rTV",
  "key27": "3aRswpwVqMV4bAsqMHonMazFxhUb2Za3mtXqveVDjXxBPydZoCpfSdskXp3SgiBs5GQf3MGWbJnWC2RCW6SaMB8q",
  "key28": "AB1Sk6mQB9Csd7dmtcJf141PU1tm1p2JSJDVPNCWeQs62LPq5ndaMSpUfc7QCW7Xm8cvRQCD7tZTi6wbnhH646n",
  "key29": "2SsEZWZNW2KxbPLFqLfuS17Zdj9qb873sZqLBFY8DWHFzBCTeBBW8aQAD3g21mSf8ygqJj8AwRYDnbyx7RANXrhH",
  "key30": "5WcUzMeKuBYdFKsaySmUvA8x8LaZ8We86WoUodfJ3sDNEU7Knj1bE9ursneQNMAZhSNbYdCnY9Ny5dwHLXECMrVp",
  "key31": "3jG5v8QrbTb3zVKnTJTFh669yiTwWUHtWPxYUXjrYCofT1NqB8m4VVQy1JHj7D8pmVeotfNgfYp3CbZZNpWwmMd2",
  "key32": "Pjid9JDtP8wt1UyznnJMLPaSnZyYMkTwJoqr9rMorfe7S6Ya521ybpNhppiHoF8Gph7hcJwYvrac5skB3tzkLLS"
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
