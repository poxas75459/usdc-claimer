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
    "2qGH5xDrSPBacoHU5yKsPZVk9kFX4wq3HJsuVSVT9tb8gg83izBraNb4VSBqvGBiA2yWgSRPp3dpoFKw6c3SnJN4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "654FWr5nC386sq13HLLK3CXwZJMQJHci86fx6kp2UX3qbyzdrMVgn3b3NWkanNHCq1xfqGiuVdF4rFwFJV4TbcrB",
  "key1": "2CxRTvttrrLoD8H6WNkLQLX4QZBapHkAkj6d3ZVEsew88ZkqhXi47vgyZwbuFMMhXLkvmfM3i8fzBP3kPKXRFLdj",
  "key2": "51DNAZSTYxjwHS6ct2Efd8jh6oCG9pnHTzRTc8QPhYqdaKCzcdhFB1M4Uz1k5o1PR7yJZdNyX2NLVKuFQr749cJb",
  "key3": "2xohQ7s6cZAkKMG6i8RggEnrDmmxYdzaMyKRQDck5iUqzZrwUixvLQGEkzguzshGCtywpmHmuRC9sS9Ep29oTZ1X",
  "key4": "3wfVHuDbgVp1RwPLXKUP8bN2iTNsxhkx6PHyS7yxbYk4R2iQVsoGZPyPW6aS5E75Uq6221W6m31iSZvjodxn53os",
  "key5": "5DYTaQcickZtGgFy8odBjhwBLBpyRUtxFvxqNgQ9mPMksGrkDC5YrsYyWTyMHFeBapLkNeAjNxqkKC4dqUhfGs3B",
  "key6": "2yTvcQJeK8vav2tQzVAACHwz8KJXfLn7FXCfEELVtWhBR7dixGfKBDgC83ikt5656UgEfkhXgyyVXNeCmYKN3Y8N",
  "key7": "3SiRKqMibM9LatWPzBBGSi8ZeLyabohm2jPefjGHoxrhVBCHKzU1XSrxetXfro6VkjZNXWjspFMiKC1HgX9UvHVj",
  "key8": "4vXbUbSbESP8MJZs2MTWiNBmSm5ZiFMaXmFNohgBscBgfKTAmC4zV7gRbC3u5Pg63bx2KrEYDbshEUSV2emKp27a",
  "key9": "4qDto9Y7dPT7JWywAPrF3KHpfY4sA7dn4AcTiPvXm6EvQuNpgiFjJKFvr62McGNqwskGrDnRHNUer7NMKjWTaqw2",
  "key10": "5ie6hcepmNkjZgvdEpjHFJUPdAHJt9bMGKzdspjVbeaH6yYgWtwndX8Yja2AJgbhYWfc4FsJzTSgnNnqCn8FkJZu",
  "key11": "4dnG7GRWV743KkUzvWk8BshA7QEwKL4g2TQAdFzwACJKY9BUN8ACcwKXNKpKfbnkd4oS9kEuutfVuHrjgDpqDxng",
  "key12": "4kLZNWGUyrC8U891kYgqvdnAirg5mJMG4n5CzCaazwRfZ3KTapkXL9dmEX4VkcTA9ebiw5GFryLgCddFjsHTvQpW",
  "key13": "25EfWh1GpBhfiGBQVyCTZ14Q7X99UfnR223NxWfZUVLdR9H1KxMtMeUiKBp5gfpY6HeP842FR7QKCHueaY2eQuBK",
  "key14": "5yQKPXrwXnehMnQyy55iFACkREGYtuySmqeuv3h4F15qQFGUwq9cTMPvXc1zqHSj2Nvur5uuXqwQZuCxEkpUr6QN",
  "key15": "3pQwoweJGBaxvdhvpeUVNQhkNFP6Fs3FMJwHh5QngWzMVom7jgo8SBGUGvFw2b3FWKMnyqBxMJuxideV5sQjvfbn",
  "key16": "kNxTgFTTeRLa93wuy8qMELFkmLvX2ndf7PzUujfbNVXngAreRWU5YEaEB31BLNKVGVsMHwbuhqQs6oV8Nytpdka",
  "key17": "pcDqFYyS3r87zzG91HLVUZ1By1BhaGrjyV84DgbDxvPjBi25ritqu1heirXQsMuE3wf6F2ciorkdcX36dZ2DcyP",
  "key18": "27ZTUchPux5gdCs9T2d47NxqhoYfkmXhzfP8Fi1UtRA1kAEnQEDgZCjnB4Hvz2kk8mbjrJR4eq4i5LVt34NoaPdt",
  "key19": "ydUvnCqaZFa7bbVFRGwv62Ps7LxdvJcJsU441f1iuCiKGU1C5Nx849BAh6D1gz7C6jiGjk56kncHsQjyVVvf7EY",
  "key20": "2M16o7mzUaZkjAXrVZv1joBsmMeNjpzmbvoeZ99bGXzqFhbuTU8x9oWrzM22BBuQr75D9WspPedHYaVCUKBXwovv",
  "key21": "5MEGfTbpvmS8oRakYuYcYrLXHXpYybpTvz8NEkw9NikKEatAAGqPhA2dJvnz1HXDCkf35XeEZytbb8Tvyh6PNM1W",
  "key22": "5n5gj2vDuXUgxYoHHpnM85LzwtmURpr1oAYv5DMeAR8UqTp1yAvSFWbwnYkPKbsFDHGBQhGJ3eVebhUn2xoFxuFh",
  "key23": "51CNyKZC9Tde1tQ6FpZrYZc8C9QEDJnkCviomQzkemFseWC1eD9Q6F5M1GHme7U5Q8hdR3837DYWscVYRXvKsXTL",
  "key24": "5AyGsCgMVnavZkSH3vNs3X4wzS415k8Yf49LVm4nhy9svnv8h9nvRPN7WTPBK359pqvxRJhucvbESqf1j2wXbH7x",
  "key25": "LbBGBZoSvNVqSDZDCGNqc2ZxadzvfVTeJCZXHbGXbuUHsBQDH89YccDgZQEVymAdunoiSRPXtYbBBn1jAahrSgW",
  "key26": "39kvPCfnMsCyEbm6ZNFSsyuq9G1RkVo9JHhmp6Z3SF9V7MUhapuNXiFGXMXnaAtZ46qgREArPiUjGA3MxSTNGfre",
  "key27": "3YEUjF1YWJhmEoJ8J5FVnUWeF4csE4o65dCPntJkahGp3GbehToLtzZrRKaefqoinfhZAAEHZXUJN3Q7Ms7QNc3P",
  "key28": "3vjB2cEHvpxZ2ztHVbK1NjKNkcLoVjBHRHn6P8XTJNVGTDTidPBiYHJYpkCoVzW7JH8H1p1qo26RYbn7Fq3Yi7XR",
  "key29": "389p9ZBEmQT1YBogPJBGwo6xWZDwZ83nSiruyyHMUWnH4Zescf3cbzzv7bp87WkSKprDn4AVAW5kJV5ukjsmeic4",
  "key30": "5u5iqMdys29P3ZkUXJURpQ4J7gLYUxwb1cvJWLp4m9mTVE7WwGRN3k37vFhyXUeEK1ckKGsS9pCRP6h18wCjzHRL",
  "key31": "4zTcUyi7vR2s4o4xHhbPW6k39Go52w7mmVXHKkuy72nboN11tNefTK2zceDmUwBWtzUNBLERemwGS5Jpy4w5pEjL",
  "key32": "2GpZmUzRFYVY8FWHXSWc7xiqS5VAoB4qQmcNQ6pd9HSWjT8B4YmZjTpo5R88wXcyeM8E8Kt9fBMLFYJ6Pi2eTY2C",
  "key33": "5CtcDwesQjKH7Uc5NnJMhECGonWm3u8WcMjKwwgoDsr9kXki6HJ7UxFwxHdDZ7EcBDS7rQnTtnssb6YTWgPFrDrX",
  "key34": "2VBSGsq6kRSjxH6WaYbYuVxWB1hWjMXLyzqFEh5B9JUGqk5FSeDn7iSrPncL4kaVh74eZj7t6A5SYSZPJutk8zNN",
  "key35": "3stsXU1EMQX3Lu9YWRxkdTaLF8JwB8c1pDr4mGkY1yeae4zEPsyE64yLzsV9uMs6TKDqt7TdcRQd66dwzw3RVTLG",
  "key36": "4f7A2HfzyYxi69b667vdTMRU8zzPpwX8P52JyVbu7xvnNjAJUdHygiiPFTeKHHRTZY7sKt2Y8PnAzVbDScG2rC45",
  "key37": "549DAWUdoiehsSRvsxyG7itSWsFin3GvwdXmwFcMATabpDxGQMcVNEbuyNaPtLqx2z1NbHWAkREmLDaxKKsj52ta",
  "key38": "4frvxKpwah383z5wx2xLVE3daXjXQ78hbxSBRJZeMdE43ZsivAiTFjqgmoGM4s8x6Sccyw37uSWH7LE3w4hvri2",
  "key39": "YFjhgCA2cCZJzSJMwLoZM9LL7Yi235uXxtNpcUc53Ve37fyFwPSazsaeHcB4q92966ESP1GxupzHn6dMknqE8A8",
  "key40": "4CfbuzqwcuWui4B8sFypNr6geBZPRxhWV1rDtTQYdrDu1ZF1QXZY9mDQDLAo4FGCnKjptsRiZMJmZ6L7SYzj3YLu",
  "key41": "4daLaBYQsfwyftNP57zFuqScfBUL6DC1ZwcYqAofdrpQAU1y2GX4dq2Yvw3TmSg1pKTFeE5sNF4p5HUxnb72H7Nc",
  "key42": "3t7f9NGavkXHZjxSoDZVDcq94NzaRczyK8Dc4AbNBmu7HcYJ9F9eeU1dQLKLutoFfgURRxcJtqiNWj8V4ESocinM",
  "key43": "26oE8nQAQDVpSUv8TZoe3shZ2pDxgG6fjRHhJgfMYxwJcRekxyACZnqs4zoe2X6M4cFRGpTP2DWCWrq4PsKv3te2",
  "key44": "3HDgtGpMoGEjG6ffrog6BmaDt5fA9BN5twXDX5ukQaXV3uke9Xm2cPUseKjMaNdsHbxwjBTho5wWftv1fWKk5ksd",
  "key45": "3msN98pnrCFd95bDXHfTkdWnfRR8fzXYTJNBzHQ6WGr5NRJBoUJaythXMiwSJwC4MmTzxq4xzBnT1A4uxxCa417K"
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
