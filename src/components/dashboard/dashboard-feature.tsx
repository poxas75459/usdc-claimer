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
    "5TYzK8KBitUrqmdrNQ6aQbxtwa465fPonFJoaDRW7pmTDpJZQ3kJKedKTh4Ccafqzq4J7N9zQB72NWe6ZbGk72Rt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Q7RzaPdoV7A9CnGb6M3LFx8Czh7H4BW6dkW2nSiHy1WSEAi97J8UofYn4T7TnQEg7fuP7FzocyNDqF6HUb6EdTZ",
  "key1": "3rADh81Nbxz5PAGtZWvsWxrky4oaroZQzm8J4cUCwok75d5qdg7NDowUPCT52jEMvr9ALQQhZWSd1Q22WtM7Dv1o",
  "key2": "aBNoHdGxmUbTJXLVTWTiPTuSehdRy4Q4ubjRHrZhcLPPnHT57Mzhab1XVjJgdnTVNyH1kbAQHw63m23BLkvCo5y",
  "key3": "61L7LNpjtwKPmZXu6FX4Hq5c8Nwwfcm2WRyZ9ZLKBVtx9i7ijNqHKnHDtJES7btRxNfeV4xzv3aG2fpmQmxLpiy9",
  "key4": "57LdD6pQs1RwCSoqMzhKtXmyTE7QNoRdHSwF2FYTMCFoGmaPMfacneDhJjBVjjcZENCTVrkYsAkJEDyRET8hftNM",
  "key5": "4jE3Gree4NUdhumL7FNEHYrgd3eKwyDve4Kcsndg1PsTf1JJpqUp6VxV5KKJ3C693czmMZJARimQ8qEeypndD9Dn",
  "key6": "3mNpCLVk1TbUKApVnMtdcW6itse69KXssggpuJLS6UAZwPui9Cgg9FhazJm55dKcUGh455M8FEbspTJk1k7yaq9Y",
  "key7": "3FBCJw6BEfyMz6TAFxd8FcJYDsQUsYBtQYs9qfbt2tdAHGeH5w2rWF4eEuUKjijZfrR43ExAX91C7pQZMKGMncF5",
  "key8": "3fHuahX2Bf6SuUjebVD9aVs7XvWfyBrpUXxsAVWxMkfX6YxqcoBnR73xS63D9fE92kAHoxoZGt3nQQqHXztVozfD",
  "key9": "5GgpQo37mLegD2R1jrKZttPVyepNtTuLzha3cSGMikKL9aH249kjBW4zwfwdb9aPMY8WzvmuuSsSaKYtupPAZkF7",
  "key10": "cmfKSi2SDpoAzCthfGLR8Wdyi7HeizoAG6WZu2rmrvwdeqKUuAWf3TWbfZxkdQCwKNfftHcjwsDzz6R8PCgw181",
  "key11": "3wWFmXByuszpspVynju8RVPyrmRxZX4mDRtTEgZVEsNS7tEGGgpCH7JmuS4i3t1Fz8J78ngXxz6Eb9FpXAAvipM",
  "key12": "5Pcm4PYbxec7Hgi3msNbErzUUo5fNmXpCrcvGYG8DxDqfipeCmRBtFyRnjB1cyrYDoEEE25QDUf1iTPEQyV1yAhs",
  "key13": "3d18SUMW7tw7aoVaUdG1ppwrcTpHST5rpAsBugQjeiYNxbVtUSdKY5FQfwz5TeFmZAGoMM3LgfkECL3eLpFtefx7",
  "key14": "3DfH5Bueei7saTX23Urs2F5TgXwisCnvwUu3NZkZJczN7pVP4YuC1qJv8pqYjYzhQK8jCapF2JfhDFvCBDC8bvL5",
  "key15": "46uHn68d1D6xLag3TwQ2D6sR2TCCuk3HFnbhK8Ef6zeQN2qPWmLkfAwXY49DgJevMc2T265YKWvyDHcTduYKd5jS",
  "key16": "4jUGrAzCNAgQF4379Bt2LWrQ983Sm1ggnyfGNTMUDVz7H3U6j35J7ce54GdUYxqEMaPXDG7PcawNAa8mSifnG5yy",
  "key17": "3koHKX3jpVBmcBrQsQB7uHpovhjqJSvEiQVPBZsv1pkLzC6xpzu59joBYYejx4F7X7U7PRUzFpcsUpEZts4imFSG",
  "key18": "2AGLDisTeBrJUAx9rRySpoC6Y4n3cjaFzY1NyPYpn2bxkGi3p2d5wSiyZ7chVpafjhZRdASXu58EbJUz69PoHyeV",
  "key19": "3vek8RnuHUDuxGDuxcVZiCGuaNEzVH6Kg5uVzoso6Z8yxkeXHDhmpgd9ubYBN32KkhFserAMF4TUvMit3MXkC5qQ",
  "key20": "2kZa39QRs8CbFrSrCtnT8shCA2upLmg25E8eUGAPpbtq75DMdhrxJn3R7miaXLBB2D3byFf4JGNrpbTGdvFvZf61",
  "key21": "3fYksG3Fhh7T3ovLLmULKdNyyskGBngPxFbRW1bwajKUqS5QTNFz3S96gp4mTyTZwz1PyyDawTkCpLKx984Ku6A2",
  "key22": "5Nvdpy76At9YTZ6VGuUdxTHHuNTG4gvrkVxjbF6nd2yAWxW7aHQv6zTia7XmuQjME3MEFpHWi3aSHW1aoLVFbxkb",
  "key23": "24ete16NXmejGNkK6pLWaN19pvQjHVqT8uS931TUDg5YUKMEorzZjxXaBZXxxyfgjpvUs7H75QjZnpDoTo57fk5D",
  "key24": "6e8YjBpR2rpPFwpSQ7knpi7C711PBq3rugSFE9hp9ddRp7hsoW9hCJYrnX8mWDspvfgnX4yXqTkkPpZ6ibHCnjP",
  "key25": "57ggwczfrRrdLjYrALMDppKrEXo1Ccn7a6meYWVKtDbrp65M5ZxLakLgrBSEHzBcaEmkHNVLaG56zwdLZDJcC574",
  "key26": "3HrDdfTPrm1EmHVC44xQJdpTu7XhsRdH4Ny6WnViCpc58W7YyFDhCQZSPjfJrkqtKZ3UAYUYPdRobzvSzcRXLuuf",
  "key27": "2g8p8Hf12bcTgFNouy5gujNjUXQLhTe48YwENbu8FG7a1AX1RycdGQ47wuHyJtG3M16Ufvh9Cj8WEehHwFHp8mrR",
  "key28": "4L5wvqjKfeRANGesfftSJY1AFwngV2ZqYDuFDuMZ1tiZPq86zqWhwgQ62ZcJS8BoTjrmaRaX4ewX5V7eabN3jUDv",
  "key29": "njD71p17aqSM9HzimxmimRVyNVddiZipkdUPrJTWTC7TGPuZMbkjtHPfddvYarNbgtQz7byKZFubzGVvL333wjb"
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
