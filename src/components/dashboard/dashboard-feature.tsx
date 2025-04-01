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
    "3LBvhf4fkrQgJqkJkwbunjt6UkGfgx71sx7bukhxh23CYFGH8E8JTByzzYvA86yWKNSiDyUyjEvnCZzu87pA2sG8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "WDw5mcHnVjznFiZQwMGW3QfhaSSWz7GG9won5VE6FpStfLjStX9Rwa42mEJiD1e6XZLVThhsnLedtzruSkqjRpt",
  "key1": "36tNWtdoh31SJEMFNMyVJTj1aBYYYJkGuActwB7bKVr3QZrSzDDEks11PJx6MKwKbAvRCVxcMBxaBShnHYSWtcBJ",
  "key2": "4sVpti3qPwBWdKmaNUvryYwnZYQpnp1xWffjttme8Naw3juE9KqD5H1Qh8rCh7Leq2b6Qf2tPcE6KLLXq6wSAiqj",
  "key3": "RswXKBBPzXvcjBFRKrNF6WH858fVMmey5ZDmsiXfmzh3QYq56GRttThaqQgcGp5QSDiAwjGWy7k9HoWvY66NnQ8",
  "key4": "21NyWJBppeUHWGXtDbDJt6FHFSXHJWaVho45ufX5A6LCKDHSYnQJNUR7fWyVod2PVGqoS4DXyTCaLXdZ72ysMRAZ",
  "key5": "3Av6Y6qG4xK6o2S8Ek2fuKb7hYhSZ1ga8qVxh6B6jdpLiRR9NUWU9NCQxkdaiYHikRyKWUmkJhCUTokrHsz3tsD8",
  "key6": "4H2pG93QEXEnTSUSupkkVhhmGQQr9rDLy3oW6d4gLpQzRSHVNw8CpKm7MR49rBWDP4y6gGeEXvHD6reHpcnX7mAu",
  "key7": "gd9XNQUFRLVP5gq35h9J6VtsvzP7jTJmqwYXC51JKUTgTJTvz4S3yXrYYZJ2y4LRgTWQJ5Vps67QwpL87zkomuf",
  "key8": "5r6XNdcd4m1KyGC1w7k5NEXzQYQC2a61ScKZ3Bg3CUddVLQP6qTaa4U5wzHzv6ithSMwZv2M6yJb1rucYtDRLi5F",
  "key9": "2RpatSw2ALEhHKbjgpR3sN6zsZpwSM7FWBNV7P9ecRXgjDQvB2sG4pFreXNcRsrcudHsihXewnWbKj22mG8ScGT6",
  "key10": "5hGKQxHtjA5aaXQrLdZWDMB6BzamhYE7V5krKER3XQRk9ReEZgFmphvx7dNVLEstvCNnNTEoNg5mCXbdycMzGiam",
  "key11": "5wrt48zvW35RtiKQBGu1m4wVmhUcwgjstV2uZAA7afXpkmDBJ1BheNhQUCqfzJTeLpGZXK13hHxzS5seqRNKmbVX",
  "key12": "2LMpB7qVHyRJhP3YVi4dKSXX9ECtG6Rb8oNfu22ZeGKGRForPfDzUzP8C5MnaRA4JZf3XGRFdoX3o8Xiz6SJ25mH",
  "key13": "4zHJXGc6DgntQsYHWW3hPFNaRqKVTWhB8pWWMhGraZznxTpcPf21otLWm1xJE3WgvJ7PkTDzgikHGr3F7XJJjrJo",
  "key14": "5EnDa2BAWMC2TL2Br2pRVRQfJMZGsq3seADvHydjQyMNGuq5gQPZHHTWDa1a4A1Qch5yyVA9kDVxc3kijXca3QHr",
  "key15": "xnttQdf1ofP3KCGhrYudaxgEFnSDM5k9rqgBbHBzzLh38NiC6UaM3aizTsqvL97GJMWKsethcTs17wUo7DEkKow",
  "key16": "XsZuniQWBYnjM3NBLp3dJw8vQ13aQk1QkipV9zRA6TS8eXugLXsmsycZGYFhV6TiHzz6D7vMP8J9ABpoEeELD7r",
  "key17": "B3TWLsW4U8p2oqJn7CGesCit8EpQgxoxgsz5b7xy4peUs23Psnem9fLaurpn8X3BM3voRNmKL3sehzSm1q6xApn",
  "key18": "2iiZrdbJwevyBxdmdqKvAVFG7cikXMNLfQQfVuYm1ioJWjWhd4T9xhaYaTWQaiomEGrLZhfHCS4AAp2rQiTA34QN",
  "key19": "CHkZbVNqj8zB43txKvLC2oTp2v1jT2deBkxUJGJDccseygMkpAfoSs73W8v1Vehe9Gxw4aSixuK4vSmanchAjpQ",
  "key20": "5fGPH5L4G5YVWjCAtyDjGKbRa7ZjnL4jeDHA2Sjh3TxC35wQgC4vtwt7ChBrP3DbW3PMhSxAXRyeCLccb7oAwEc4",
  "key21": "aqT811RsTq3HZLXUbEJ1Nx2dH1mbw4Cw5PV6ME3izFEAgsv7ShEuztVLqpy3hkiZ4U2nqG2K2JtViXFr8e84mgE",
  "key22": "JtM7MiHZ71U42UZfsxorPoN7hoe6ZSkPRgYswXZuMBg4KgMYvyQuSyyTJ9J8ymZrFMgrGrZsszGRLEZLjVZXKjL",
  "key23": "5BzLgfbBcaCNc3tewp4z62TFVCay6p98ijgESGHikoCDt12vUtE2CTY3MSQd87q6GTyU1pt56QcXFKaFLxzo4kNM",
  "key24": "4LrtXyrx4pQM23VVR7er7TFE4Pr1h3xmEZaebu4hcUr5L5HNnB18G4iwHy3XnYZQF3rPTfF9xBd9sKy2z5j9jhtE",
  "key25": "4osBAGoeLopBtKCm4UPvFbk2j21Uu4p36pwYUNp18GZz1cHygvybg1EdZKJvB62e3raB1MF2v7JyM2MCUa3YVDTf",
  "key26": "34Q5BTtupfnccxpVQQCxUW4S9HBCV9FrnqUEZJQgsH45NwmazxQYe2Tn3qvYo8eDC5wBQ4dkz4hxurquZR7BzLKg",
  "key27": "2MaPfE6zEPyPRcaMdqvirtgS4eBLXKhmamv5iktRC3yZ7o6wjr4NbDXiVHRDCy3LtG4iDupqtEczVRpi6DFXfbsi",
  "key28": "4t3NDHt8AvKSVWm6x7cRsrav9RwkQuhQzx3bWTDmhocr2BbMqCLvLiGg9E9jSRTpHhkyYSp67Lm5Fe8HtXJzoFiU",
  "key29": "ZFmEK3CqcBEL5QxxArDL8ogewtYKJaey3Ejdo5D4tYBi88UC2n4bg1xnAJeSC9mbjqyh5M7n3kVKQpaTZ1R434g",
  "key30": "5e3F9PkmpzqxYMb4Kcmax13ukiQ9ymB4FRKigV51XRf1FcjW8P13Mr7ThFjrpDHRGWTVx7crnjowMxd28mz6NpLV",
  "key31": "2e4M8ir3ESdzTC36ejbdMpiPMBFT8nJ7nLi4Pb3sr9UMbGAPgHD7QHqviRFQZA7BijT3Wzysi3VUojJgFPYCz81A",
  "key32": "5LQWFAswjcGT7Dr16uXruMjBBKvBPgLpKGuX5eVx1XPdNHtJVx5zmsqWRMHxceba8R67JMFdsFQ7QW8D4E8AiRya",
  "key33": "3ZMShKhLTyzPEQY8Gz6LUWA69me14XNdMTgoZjtY5sxMnb4tTSKNU7z3Knr71MA9M43Nt9RDYJok7eCvvrdmLSjA",
  "key34": "55oA2i8nqDswKFhe1PdhmoMfAQdF3AhZDPhzxHZwryaN99jzMsbJE7yZn3TtuBGKd2HiJMDugXpvgs5CfHgDaWuk",
  "key35": "seXB39TZpX56ZuVCEWoc3f7rZk6B5pxC5N4iwHheZRuUyJUkaScn9uoarGWsssqj18YkF4v4Cvnfv594743AcGX",
  "key36": "4gGsdgC1zJDgwP2jPXXeRGRJBR6iCALjYbTi4tzqpvvkJqsjZgTezmMyyhm3578s2Tu5rsG3FCoQfkKHKaUP7Lb6",
  "key37": "3UfYyTrpdifnnqUWXSj7FR1j8VwE7zkHMwJ3xg3FCsgkFnTibKEY3jF1yNcUJpDUw3gMnDfcbrgTkgH3vpaUdWYy",
  "key38": "2c19n27imZjzqxsJdCwNhPDam3oCUQZEcFVt714FEYRpyTjoyvX4TXfBMfJmNi4uSTvkkkLUCSFqvTXNBsq5Vumd"
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
