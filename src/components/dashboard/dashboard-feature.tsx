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
    "2sSRgq9NRgDr9Z7Ue3CL5xU72hoD1TzPw3RFxaJvgX7PHxNYdbHFrEQoSiAbWUTo1ShpnFcQKEmfiJjfEPaqbdmV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5KGZADeSqm5oGpBdq4qbhh1DqD26Te4LDDM17zYGFvQpe8VG6tJGSN8fdJ12pCkQmR6SNTMqrjR54Ri692AzwQmQ",
  "key1": "Zjr1aLV8eRXGTxVpCNd1vKkiTA3SJjzCrdWcJhnbg5yy1RKv4C82XyCBg6ZjWsL9XaeL9LwmWGqCzYpy91vDRE3",
  "key2": "3VKHfb83D719cheNHQ7UfHWZXHAHTKUYNpG4cmeuEq2wy8yZbQUrXWMQMB2ThBXsnorDWgQ9tjU5Qe9zDAnaXPAp",
  "key3": "4LbHxrCzv4RemXGqfxqTFsrnPY81FQAwEG3fYnesyNSrobn4AJci4cBjJUgPTevEbLDYnikKvPYEGYVvEE83TYYY",
  "key4": "66qLExHvWBZdLvPCHq8pGioptB7Y8p9zgrHLAcdGqmcSwWtwxr4CtKqnRVMb3AhsU4Cs3R9oCNDFKm7xvVJkQVJm",
  "key5": "2zoQZcW6S6SSsWjve4wuwifww9Aoti3hh3BisC7Mwg56quXxeSUfAY1keQBDFS9aTuytxUD2tPSja5nwZzEaF67s",
  "key6": "4R6AP1GSNWa4GdsLppEfJ4MBhjpgTV6NPnR42NSSHbKMB2LD7yhm8AmaHPZLrqBUEFDdzHHNcHEPDxH4reXXYYyN",
  "key7": "3KKDsTdFVUM2KuDbkj8NGAgDre4cUWwSrqbQ6f1gZh3cQd882weoraQhTfP4rX7GMKbnx8TnkLgNNaGPuxwwQCmU",
  "key8": "t1Nadt3WGC46vLoKRjk1ycp2D5mAHUvSV6D7HGZrU6zfn26SzoTBZSVq19NBjwhLFArpWwcq1Y4Xnt96pWrA37k",
  "key9": "3Um5nwuUCymMaa2CJJmkSfav2SxiM5m7CETDwigET52RLMtmdA1tPJ7ziNJfuyT1f8GFWRKxhAW3HhY99nKfNSPy",
  "key10": "39UikAy3VFdGBFxbaLANj3kN4qegiA2Uq9xxWGYDYHzEXBiprPMSwoHhokLHnZrVjPJHMbv7gywwYWeNDWvoyptm",
  "key11": "wgVieMuW5XQLp4r9hKxrL4Gzm36SHVdiQaXjaxvxSav7AJgGXhHjBV4UjNTGWfHpajPJEFenkhSnu43x7sMygp7",
  "key12": "53NFwXZKBBgvgRXCK5n8qQWSriUvgrG9Ea4kr8LyzJT9zSYpZ4J8UWH2sPVJGRQfeHE2xfF9PEDW7GYfnZXPqkdz",
  "key13": "4wqZGJSvBusmwPPdqyJuXEeAauWxLsAsF6bB5Q4QaAFz4LYi2s7aWNVyShCKnRYMd9ekuqzGze6NXoPQhz7iaZVo",
  "key14": "cVRW1kv2PaJmakpYfGxSbGt8QtpraZNx8pxWAngq61bsKAHWdBiFDPdKsnAEgDehoiduheGtcmxFJ7n1Dhc2Uxb",
  "key15": "55n27Yhkx8JmeXkPeYgAPefgWy4mgNSZLv8piYGxrrgqXiJTR2X2QYDcBnu8DrKi1VvNbSpKhR9g3zrzL2srcHTy",
  "key16": "26Gt9mwGz4VdSVqxBmoAspTJJwUaXjbs7uuQkG2kxp5u271oh15aYSfYbGrnDXoxtLnVyJajLNELdmaKcTGFYBdS",
  "key17": "4CwwRKivjRfSvWeE7nAm4BUhuGGHcLFcu3B2SLw844fZa6f6AekNJrbXA3poWfGTtF7WszMPUXG2y4D5pcjWYpg1",
  "key18": "4VWS5zYrkagnDiAcy8ARJUtu6mUudtkqMaLokZEUV6hsV13ik4CEvTnEw94LLrQR7PcpjE4jpkfrTFndPcYyo4yd",
  "key19": "bZ8K2E2wZtHiAMjkEy5CPY5U2AwyjoWDZpXLLD5NeqcQrSFbiDvzzFMM4SjD9SXkwj6UCGeSo6CeypurNK31SRb",
  "key20": "3FtcagwwJyRjK1mDXmGKV3EWxfYJvhAfVKp3voWCcEzkwU1HhFQGcbiafBPPfR91PHtM2tft77t28MKzexFi9rMu",
  "key21": "4QVjFvpCExXeojmN7Sq9ZKzb1AowQEoNqTWvgvrazYmXjpVCeRDM2geYsj4t71dTemKthYzPY76gpZ2kehPRHwfx",
  "key22": "3dFZY5eDk2M2QaPeZL1SzfeoUGUBQEkyuET5Y5JZ6AHLAe5m3A496ghrfieAmT2ftSzJW5rEinKh1oWCDN4gGUXM",
  "key23": "5nDftJ78dE9WxpJD9Uhorg77dQvdGb4X4He5EBk2GZ5uGV8mTZXypJ1ZMNc9WpaugmBefxM5kX4Lv4CRmKcD7Sz8",
  "key24": "4WYWyXbLyQrGhSxVBbrkRJVSj9nva57dsoen9reCUFansdSpKCe4ddYcDc2j2HYzYoV1avYQJM8cF9K956mGGfQa",
  "key25": "3hDnq5EqN3HsVsuESjFXHt1qJ5LnvbAo4AAwo2mz9mHZmGJvHYCX5XJoFFPu6S1S7TzB3eKJttpbLcLLX9y56jxL",
  "key26": "67oGWrVGRw9tHbDvLC15VEtzEJNGHGUx4Dig99Ncehamgum5jAKGgn4FPFyH1VW6GKaBiYy3i9UtW1Di7vQ5ZBHm",
  "key27": "5RhYwPYdJsdcQ1cAVTcxN4miwV8RdqbmvrGnfWjNVekK7Q9PZBybTcGHnNyaQhmBCyX3ZRFuGBrUhmdZwYjWvMKa",
  "key28": "22BEZabCerr1sKSmAypVJoXSpQLvRm8wpDQyRHfsZNd8Xy2G2UXayzFMiKMK6shxDqKLbd9X9Bm94DgYnKegwjdz",
  "key29": "3rKdiNEYesRSzzW5mUXwj1LGwZz3bVz5pJfYNi3GY7MSBzRtPkNMSZDcwhrGhS1q4brZ4nHEG7DzD2Cdiq1taMJA",
  "key30": "5eJvTwZhWPJziydeeJXW3yeg3oKpQUJjAZ9ArfCLwJShzzK2VziYnaPJQumgnreaRCMpUm85Q7rNAC64i3MC1tcB",
  "key31": "5tibdBwNXf1JMghCkGmEgxd5HPzzVEjmYLUrG382QpgsmCuKh6zS3dm67LqADDDSUGv8qhVnM3f8CejgfvX4B4vy"
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
