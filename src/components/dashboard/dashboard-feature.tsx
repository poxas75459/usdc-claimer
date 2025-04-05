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
    "3jMDVRvqDGwa98zcvpGxMk8kPadvtKHcLU8LprpNffPMjXiMJmEYBCG3MNRQRrDFms5qZRcznPEtf39sgbi53gp3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3PNFtTK9Bw7iCj6nk7zQQQfviaqZ68D5F2jS7Ta6zDY58GJTLFCgk7qZVcsSy59Gnfjo89Xyfg3f3VKGcEQhPhPa",
  "key1": "5JthaRx17TVDXZk9SnswoMhoa9wpES96fKsgMVpxLQjFazXTToRRmfXQac3pccheRH3uFFfHNSkwJTrm7bTacYci",
  "key2": "4pW7A3GoxErMxQ82UQdtSf3xLPtc86q44a9MYAMRuAFfZmAYNbd9bBrvXmXXRsTBuBvjvnwHgK1e1WTg3dujVLfJ",
  "key3": "3dZWPuVon6ViBdMukda2DV4Wbpyenzd6jRYZEzREnup245qu1oNc7xR5QP4TGAdtADDdpPiw4LGRFMXemDuwVjwj",
  "key4": "MrVPHMJVvRaUyoWKgvygaVtR2a5t3N1hdMZ7ci5Tcze9ATbeFVQvVdKEw64fDzQuRmnZHWvETGw9hPYbRughQnr",
  "key5": "2kGZE1H3P6oocYXVRfpVhFyyVHQfQoJ6uLQD9yJ3Gbw4ao5V8y11R15TtFFSBAsKp7DwBVJirEDDin1qUJSnb6ZX",
  "key6": "5G6wG67eq8SVWKnyUrhxNY2sq1VuKvKe8niNfzFsuuLKfXuj68SbXwv5UvapFhHMXTSSNsc3dcqjECEFJkjaLZx8",
  "key7": "53NjcUE5Uu1UoQzB9zQk7GqGTdxSGsHuEbWEABzTXE27NnMtxnfmKv5e8HVLwu24KoDjYHrsSUcQcZ3R2dkL6nYK",
  "key8": "2GiYsSCP5ZgjyDbFtLaZekZy9MRTcovRKHtYfrKq5fBZCGdgWJ4TcneALMU5Xq8jzKQZsPw9tDMVQNsrsaVe9QLU",
  "key9": "5PTS7vU4MdhzCCYFiWEwwEMkkNrd3pdD12TFrMCCcZCiqZehQCHM78R7iu47JEibRStC6WmvuVo6pkri9VdW7LPZ",
  "key10": "MoVVV9HYRR7AMK75apUF3FAJuKCXGXmqnQ61FaPCC7Tg9FNQpAsMnwLKJY7X3gWkANxUJE1jdQgQn3CCHiihf8p",
  "key11": "5XpeLhJFdegTa1ze3jtp2R4YQd6EVCQ6wTwataVWqETy6XAyCv4oLeyJxb6urnwopPUJ9WHxL5BCQ8z3PtP64rDH",
  "key12": "5rFNe6dAHr5f4aeMDdV8z67SQHv5TGFyPFT4HMyE7c8FNxnzXYTmBjTt7CveKXd6NvpmuTEHsug9yNvoWxR773Eu",
  "key13": "2Ymu3RccPMdKLEhkjh2thVoz6VeQQ7vYk2pVCftWbgHMNKihqedXNzAzfaPH2arTMvsYEBF7gTmUs2hBr2ewkm1z",
  "key14": "3AhqPJPCjgQD82AMuEEddYVj9vbtHPNAL13fmvnD8tPdpqQHfwKHmzPY3AGsocmcU2Djc5SSeyLdQ6MZ8kQeXZm7",
  "key15": "4qBBw3cJhAiCDFKnXrhnK51Hm1s9tVjueduuGbEPYmConuvwHXQ2jdw7WfesXo13FLnVLb5q1H6wjQdsGidynALz",
  "key16": "rRVrH51JVkng5crGfek3ZnKZiBZvtdF3aJzmwdmr6G32fLXNF5noPkLRAdxJG4VrQ4dhsSXMNBJxM8p8xgMF5Sf",
  "key17": "XzSX3J72n3nufjtZdWAUghdeCQjeF2vyzBZFFRgW1CEnE9SVeAk3gxBBrLGg21fMqSHrKwXdYTX3yapMK4r5ueX",
  "key18": "257ciaK7UAA1D3SbA6i21tCVouLU6KCDeJiX7DzbKo941V4EaJAf9UQRudnJhWPL2ukSTZXaSFHBLiRi5F2cyPDr",
  "key19": "4y9ndxSD85v8LnBrko84b11LZPKjsDKxgRsjbMFAGdWGX7CvDyy7kC8kABWXKxGqruqih5UyaXc2CncB3fNDQsFk",
  "key20": "ALnc7jus8UPHWyfPMDzVjD2M6gMzdiRzubAHpAY7FT3LxXaBMiDWyoBSxTRZjZCPy4pbsfSNYEzFiNXXfjHctYX",
  "key21": "31FYmFpgQFLtn8LHLfFeUbbJJHVZpEGvoi1FGhda6oHQQiAkRE9b3ccoAYRY5arSgatg7hpE5BBrXLrciGQFgbd4",
  "key22": "WhzCdqXNAP1hFD6NbtJ6dfRxoVdwngRShrc2E4ncXnSkSyunptakXRrm7mZQ9xHGY3UiTaa5wfk5tU5c38PzpUv",
  "key23": "4D6fJZTFKcPowtQAvd2SNDfevzfVZzQNcwsvVNXtFgAD2HanpqG2imLtjq8e7f7kSi65W3ZWkCE5QYXcUbb8wxyQ",
  "key24": "3aefs5HMedetREnNMcgyzjpCy7xh2johzroVdrTtCtNaKRmkKC9dpcK41m6peLQxF1fhJauoshg9TuieX8zmN9Bk",
  "key25": "WGiTUD8iBPBAuQEXmg3mXqQ2Yqd49ofnTBqy21Xo9ppTP3X8VcRny9dMoRf7izgjBBakfD9cPNJpAnDkMTpkcM2",
  "key26": "5NhDbDCZ5dwCVNGvGae5VzfTFRtpgghLVBc45fH5mjNd6PLTYhv4jj3g4jCnLhMBV3hJUD6PEYfKXCBAc2RWhXzZ",
  "key27": "5W8sDmxTKBWjt2aMbR3hDEcE6ntyFuxdik3VZDu89vJe3hmTsaJahVxMmCKP4t3hMcxBxkUYjczYt2a2d18Rnvo4",
  "key28": "4t2HC51awrvZ6ywT1YXYDj8QfsCuGDooUcPUfwUoZgyWat9gMoLoxvs6FnRfqX5XCH3f9sgpc4rzwzf9kVyb43Pb",
  "key29": "5sQcbmDTSGfhaJSTh689Tk5CiyiWyrDGtfxm2pgGUw6ZNT5hFgoxE4RdUSz6bjq3SxTVMEBuDxmrscKQMVWnenTh",
  "key30": "483vZMfP74zi1ng7kRDzXuvJDdrBAiwzD3t3jZeLkVxVMuQ7b9BKjwDAFBTtvSQaWEYNhBY6emk51FoNMpQqLHqj"
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
