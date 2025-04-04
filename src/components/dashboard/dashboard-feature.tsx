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
    "4UxoavrNxDfjkSezhMZS8dUXqGdEddcyXeXwxRzdWrv93AR89L7M6mNCijDrYurTCsUmxF9HSXAdtsyRhVvNRA6A"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2JaHZJfKDyBfGTjFqQB1TXHNePWRoDgVvnav5dEGDBA51yZHPNfMQzgvHCbgdq6sveQVTMu6WumbJyLNh9c5dkUj",
  "key1": "WA2KUdxEdapUsHAz7Acn8XRj4ENT24uUpsTDdWdWpjQjySChyNFNFkkoeSsPV7TBtPeApqevZ5pbDZsqqa6BRAt",
  "key2": "PCNTpmYuasJ3ZGPgKirx9SLmVdCdAB5qouXrtos1YtHof5kuexLZnwoPyx62f2ypxjWzLdVoWUempzbqE4Ynex7",
  "key3": "2dkhVyDTzxHPWD17eqab8opebQ9TNbTf32V5Heoz357N3GekFqHaJYR7mwgrchYnEyjywxpc6rLTs82vULDPEGna",
  "key4": "4vnCxvoK1Vw4R1KyYS7xHxGJLGsv3cNAkVCkDWgHtURk4AvFCaHQ3sb6QRNA1KzsksDJpj9KkZeDvjJnLV2U2LPs",
  "key5": "p4e3jL7XNAUJkTaDBJsRkzeqFLFFz5yhDEtiuisNfdai1pVpoV1bnfxgcaoWVCSzGW6QTAmvmL4x6jLSw8YwEQb",
  "key6": "g6keDwa13QzDA1pANWyWieBL8CHH8X9TuLKq6LMtpGXc3s3k8F7i2bjaezFDM31sJy1zwcPWDGB4TZPbWDdFa3g",
  "key7": "2VFXxsAVaZagsi7mWSNcwURUgANeCwCU11NZuv9GCvo2ifawKqo6wzuz4QATpqghembo8Sh6AHeXVtXCaoFhWuWZ",
  "key8": "4DyU9qJD4ANMHA5iAgMrwySyuoBM9XSkDvx2XST2WWTUwZJm1ZEaYxXC8VySBXEx8dReE7KuNLGSEQyLd1sduwPD",
  "key9": "33d7BsxJfKZn5DijBLG536mCgaapv2MQ1sBHLJSnoXGeqAiG2eD2SQ544AgZoXJc8T2oXnsPpdt6QijPJ1pBg7xM",
  "key10": "4o3dfKKUzpAMVnNxZHJXEDrdYyRPtyxTNvuTR9oFyxXYFzL1Sb2YgUJWpM5ZXRyvrm56PAzwCBuZRUbi85ZpSrjS",
  "key11": "BMmziBc86ihU8isfYGTemwvpxvv9U644aiejY9rRCxAzvHN2FoHK5S7bp3kQbmaJNiJ6Xvb5Pj5t5W11hA6MD8M",
  "key12": "mn6D44tFDXfJ7H7hnmBjTaAxXQmUijCXEZNfTBDua6Y1swdK5vZQBK7MEUSqMFj5bT9GtHs73ajJeU7d3Bhp3ou",
  "key13": "4HTtxRNLQ1eAmjYcQZfA22qxMQsRBJZ7YJv95KnRccxQZh4e78TyHJN2SJpghu3RiksCKxmNfWnys9M5bVYRNNtP",
  "key14": "33zuR61tzd5nVyTjQnDLGKj6RG31BPM74eTChVAUpsCbASZBZhATWXP9mzRYZvdzmUNFBEULTkJ8gzq86auaRErm",
  "key15": "tMhokQgwAmKEoCRU4WY9hHsbmWnR5gq9dnxbDYVgaWx2Na54S8qMCnAHdjtesBHd882DhFHLbztzJkWDpqCW48w",
  "key16": "51HJpCM1RmtPLomtNUDj4wLdXY8fKD5Ut6LfeAhf1ntQcfuWFCLbhzrjDGMsrcqvxnmiiucUkmoHwvVSWKaq6pKL",
  "key17": "3wr15U4H2FV1JAbH4Y5aqtUnRbqYo1BiZcAVBuS6JeQ597Ls6vSjtju93jcrdW18ookA1wSvgtL1rxbubHNUBhUU",
  "key18": "2PBRukXkEqf3pttNznDzDQ4YSHUqfJv22UBGY7cxyHQd51SxpFcFJwx32Bear1reT7LuLVd3KEMsst9tptVqasgV",
  "key19": "38sT9h8oYQvXGbEb4LTS6u9D9A2RPCAUwBs4YQLeRrJZNqGAYSVCT1Xpt7djjEmhrD3YEoS9x7h32GkZqj8pYzov",
  "key20": "5REUbvaf5e2GPPb5kFiwDBBQHEZcfYBVTRjFHMr9MnX9QtpyCCw8GLvN6amaX1BY6bN2DmTFEDK18kQidYcsNpta",
  "key21": "4LCSmaH3LXNzT98JWSdvPG32qk6NLo3xpsAFGbVG1VW9oJSDBvnCT2FwfEh24U1Lgtq8S7HfZD6jE4V2hjTuGHrP",
  "key22": "EzzjThuzsVCDREhvbwPdLv1PSBqECVjjAfkdnHC86N7ea3T78b1WoxVKX83jeC41qob9N7TnTHYRuP8kZMKerBX",
  "key23": "3FaPp1XbZfB8xJxBXTyzqoejt471pt2LncgNqq2wKrWRBz3eAZmjDUQR5VbxooS2vtZ4VuKFFJ3SGZZE3iCPaPHE",
  "key24": "5YcNsBQVExCWjKubSd26GSSuS37yPbhA2PEHYDeuyBacMZy2pyvj4hFhENnoH8zwK6aGpqynmmG67zKW9iUa8VYR",
  "key25": "5ksppy2QsKa9C1LSpvgWjuMHXrHzNZkcitqhboJQRHY7qLyCFYiHHuibo9NKeymt8LNNzaw2AreecW2JmU1Hj7ob",
  "key26": "4MpQdoS7Lp2NvT382yx4vkTZFt3Zu9zGXWaFDEE2NyfcpaaEcvhk3s4mobXZPJS82dNU6GtbncWTUydew9XC9yAN",
  "key27": "4fo2jrgtvHKnr7Pn4uxwwvtTXnCTrx6kmk3GCGNTb3ERXrY3XtXueCu4gc7f88gi1134XfV3E2PvCnQNujbweQHm",
  "key28": "2g1fFPCHEHRoM4vkxW7BLRqfffVfobkPbzPnoQdW8ygS7zRqQTpXbyJeK4pMRF17p3cEhns2d9LstYpoKaei8zGs",
  "key29": "3BnBZ8BMMijmctDnWyEngZvCt9nHt13RtsqQDQfvxBToZkDge1U4MWWRzHBzN5renD9ufvFqseSPQ6beJS9FrhKZ",
  "key30": "34CYh4tpFeTcLithnLW55pqDf8ByMthf1M6EpuDF4RyTkV5A7obNyPyZywf84TNdvrENjU5UGzXuydH5ZFag34MG",
  "key31": "ywHgi8n12zxqiWXpfKC7RKVd6hVht64icL1CdukrTrs9AhuQ6LFU1drH7UFHFz87jdPJEueQyNtESYWBx8Pzm1r",
  "key32": "4vP1rE92E8XrjiHxCmPhu529qkrqDnvTpKM62cvmYVpJV3rbwVPKp73ykDALhHWAUQEMyXBTE1etzRXSPy5wmvyJ",
  "key33": "4irymuNxML2xhz8TjbBE6MhtsYqB5N7rhLCVj75Yqyv1Eb9fexL1HQs2B3hQ3yFBx3Ye2ipYESGRsVFeBRkuJBGU",
  "key34": "4BjnAM7JV3wfF7pzk3wiHdW1vaNaSAj18Qk3BtJtL6YaibxLzLhLBRQ51tPJ2JDoKjXnbeWRemYTdzoi77tTRSQf",
  "key35": "4GpNdE8R63vwEaBRTiR2iaWpzG7BzSo3TnxJTKekHXRqokcZZ516w8i9HpeQxXtdnYigcwuYdKiaTtoAykBnb1iq",
  "key36": "3v1pegJxjC9UtiYzeeyT2w2GyaFHYg1keyoTTPGEtLmyoZq4kUFzdD8Kb9xVSvGrVGFPiKRcouCcV9BFsizJR8zy"
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
