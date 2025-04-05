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
    "4VgLzGrMGD3eGu7vSMSUmKjFLKHSYyyALMCnEJHhV3W2ZYyV4XNNtDWyyfL3Ncj3ZjrZQWkva2UWZpCSiAR67yu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4atGBJ8XopX7Twc3GezR6acgdB1Ew4TCSpoPbvwLghn1U8m1781mpdtrxb5FfQmfMwVEbopDnDdHYbuKMXY57DdB",
  "key1": "2GsYnZPimMDH3xn4YBJvaem3CPDdzjouMwA3P58QYR3NQ2oxzyNfPEL1fuwdTn9CE9AGqNBmbw9kstYF7En5qdqa",
  "key2": "3DNAAv2WPEiRXzG1cUEp95nMrRQ1g1U12yZtZxU8uYzjzDeNxAv2oM4VeBYdTW3gjkCLcgUag9pzvqdkbqkJxHmT",
  "key3": "5ZPYWn1W98kAAERfEiNPQdg8etbsgEYbFUJsZtDnaUXdZ6YkbdrXPFLGDh4zVrNFcmM7gvW1p9UP8Nq2hnYEyFFx",
  "key4": "4bQPGJmfED8wAJv4yt7Vni99XUA8tmmExVA8RFY9a2Z7hmG3tFwb5KdA7Fro8LKDpFsw7L6DnVkAwGA8i2GgQVnr",
  "key5": "61AghhQBvj7pcHdRvbtuNgfYj4AEpKW3fVozttHixkg5bQuy5nfEGNrnZojS7GgG9NXxVjJ193eUDrZg3ZcVFUrB",
  "key6": "48jhL1nPSgf7BgZ6xMjE2rG5WccgW7ymJ4o8pDq7QVttSPF9wwExdjhLNjyfofGTLiTnbnuzoCm6TVj7LMkVoXXn",
  "key7": "329LiPiSSDc2JPcDThQbEABVr74XUrvfAL51TU8V883dnKu645CFozNAqt8WZesEgFBHzzqagW6gKanMMNNas345",
  "key8": "3tJkSDekVVp8EiX5zCAB1NS1KiCmMEdVwJ3kytpJ8kQTd9dks8KZJb4xYMrYPWsZoebNzqPLFCRRv2BbakZ831kU",
  "key9": "5Ae2GapkqeTnMHvPtiqqXPQ1pHatBpGakHyVNTKpqSFMpT9h33mVGxf8EmB9YWGxuwdfZgi34rYzQpdvtFzPii52",
  "key10": "2hapXhAsp6sGd2yCfAmA511TphQ2AmyRjVMBgcVnqjrcq2ti5pAq9VoM215wmHcY8ySYXXgCjxogZsg6ENkDDYfW",
  "key11": "2GvmqFRziAFHjs8c5PixUVSW9N1aFPxefomCqbzCVmLMLEqCkE5XPvikhQgNU8H74wqqsSUwd57Y1ZaK3e547v25",
  "key12": "2Bpyk1skgv2sUHE9H3drabhtkTyibova4dbbvRaudYrVYCJZ3rDUD3W6pE8aZVWGHi4UyJpQbC2uFQRAUCwSnJuN",
  "key13": "G49dFB2VyYy1ZfXBAoLUUZzTsvKo756VuePTxuafcWZD9BLJx9jWhM3V5B72VLvhvmUPXVtTxiPyUGPhMYxJCCi",
  "key14": "2h4KSx5kTHdGUUGV2VqninDhMppPTZed7DeQENtcyjTMcyyVx2gSseYB37VUHbgov8jNEHpUNSZMAPTveNcR3htg",
  "key15": "vRvHsWaC6H6rRqfY354NbmzDUEpvquDxvP8hkRmVCZmVG7CLRV7GarCY8ZU5ReSN5iH6WYCCAHiKXM1xzi9FaYF",
  "key16": "3Yb9CAioXTMMtVfiPhbyS7kv2tAmYNvsGrvTDdW4n8JJpXvxps1yiHtJn8FiiJrEhwudN7ohiCJbGpF9DfSoLxjt",
  "key17": "3XnN6LZyFz5Cf7aPWw7SjwyCZTtnzdTc7ZsLS77oY5tJxwB9wZd3kRPWj15VpfY97wNuSgXMkuzuFM6ZSN2SvEAT",
  "key18": "2VNWzdzcWHDdctZ1pFkoScAhz5dKf1B4PoiC8JX7RHNbV2FtpQtDoVc2fka4kCSyp9HG1a16YEYLzDoLvH5JAvkj",
  "key19": "3osXGqtsibD2aW2XgktEgF2jmGYDAhjtVj3NguypXWVJbKtAM9MBdJEourfv4q2PtQWVqLm9ZrAxCPJVNww7zLSu",
  "key20": "3QjYDzuBD4YiQ4b9v7bXxzRxz172AcpeGVcVXccyWGXJQDQDvkXBDd3vkySzcj5tjnYyG3h4apHSQ4cnG2CnKoT1",
  "key21": "43xWuup3PCX7vrGXgjyss5yNB5qaaHdC7VByfHoGPJZJdv1S8rde3JpDhLJF2TCi8SHbvMXxDsXgu6hVu3paCZje",
  "key22": "5rsf8bef9RNqf4ukLCbLfGbqpAKHPmsEyhn1Xaefk2jDotBerwJt4x1D3MFtsqT7kJwsLCmkuUMzGm6iV6vbsTE4",
  "key23": "3ekNYhmXfizGGEmWkgcPikAJquXYSmCpo17mNnTHfRTEG9xrKZj1Vr3iWwMugSRMhNrAGFuSewe5L7SXQoiEZRAn",
  "key24": "58g9xEJP8jW2CHp9CNrEn27EBfrkC5y759pUt6WnHS4ZQYJE6dB7QomScFEKdE8Kebkg9gaFfH1PhvnqpvAmjYed",
  "key25": "zKMu5yWVNz46pn73QqrsiRNt5PeJwWCXD4usf6SNLWcQaXkqjGHtLXUBsmyeY5AQeV3VYWgAdzjY8hGQgzBsV66",
  "key26": "2MQerwgEq8jFJEFCLGFCTbR9ssQMvLB42zFfbQjAeP1XkReTkpWu3MKKoRjt53xh6oiwq6MfgZ8XfAobRxWK1aZo",
  "key27": "3qmgqo8xAFtJwED6fN1gKhvxCtaUpVfGKLqza5c7G4cBww5JeSjihWTwyWVRrjPtNWbde3aYpZ3kCMbW6xQqx17g",
  "key28": "FTWEDMvvvqBJYPQkhsZUwwxooV6sh64QUCVvcDHujxnnBTGdFwHD3tsModQXeKAgfWNV5sNL1BvzRqgaCyMNAwF",
  "key29": "3eKH8JchK62eSr3XwphUiJqY2Rt6HFmdzhSNPf9oYFkqL6spvtDsnwvi7MeLvAgS8xZ8ZdkVpndX9CpJtgPtQRQf",
  "key30": "3BMmZx4rM5uHypfyAJsNnDVPPweEboFEjJsuKm37w5j3aZkw4nsdEDQVwiVLh2Hr7GkKyoz3iomCaDGKu7YVECXB",
  "key31": "2MxFFPAEj3qmAnct3LgqebgwZjkhfdakApwjbGwWebtPnJRHY183t8yGiT6DDogVWGjUxveDKrnf8LNiuZ4s4Snf",
  "key32": "2Cr3497rzU5ko8N13Dzzdr9wUdpLpG74yMpHQRcxmaJPJA6DpWvq2vrC12nop8M8aH25bPNwMrM4qUi9ZbeETexx",
  "key33": "Dmmq6SN76AHJQzExG6vZzGav1a9613xwTPQwijdgXtVeU8VRPDDyepQzxpyi6vaaKZjqCncyashLv9zqHAv8Dnp",
  "key34": "3s4y7fxiZEeeE9Qrmdr6B1Ai9T5SqoCRY6jkRNSxD8tGrRCCCbkQLsWz2TVn8JAqqdzydLtZoa4YwASZn16GDm7Z",
  "key35": "3GdwHqqXibQPnyDESVaSYbhjsDoYMfim1CaWxqJqNCyWcDsBG7zWRZLbJqeMLn9jUvaoxQoCJb1kinRFkVbiJuCB",
  "key36": "3f4L7V2u6w2Wr7ahZsoiCkxohCcuHoQAr6n45B312seeNAXfynYUEo3sFprufCs8dDN7mqo8PNG7dgsiZFhZYZqd",
  "key37": "3e9UHpRDDcLvUVnqUVGSgprSGWh2g4rJt9BrLZCyTxaGVJ4oakmFp1wsirHEWYkhfGd5RenE6RmATvbZ1zAhBeFM",
  "key38": "22C7T8KzRycjvwqGkzDaCgE5VEXbWJ98qs66QiihnYNRc8SS6zBeqeXmF5ZUm6R6BQRgYGjiKxFPhtVTwiyLNMF3",
  "key39": "5pGtEKiaGALsFradbFME4HVZ5SqvGJK7MVfXCK4CV1GTXKD7JbmGQ6vZefMMK5nW3DrjyRWDC3SBmt2dtXRgg59Q",
  "key40": "49i6bEdhn9TLejfrtb4t4ETi9yf6wXoNrVnQX3rdoPebDSNm3NK2jHzz3upkoXnXYPzPxZwUTYco3TDDoah6MpBv"
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
