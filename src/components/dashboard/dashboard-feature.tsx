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
    "33ZNerwbkFeBcr4sCNkFhSsxW2ioyftjMsWSEme9is16sbzMAUao19reUSYQkj43hzRfoCoTdLVJnzkWLTWYQgLm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5kvD45aFzWYZFamiKqzSNFBsLPrP3Lsr1DQw8aEBm9sGNn1qFXbwDw5MrdzKPUrujX4BTGP8Kt5dej8izHjJwTk2",
  "key1": "2kypLG1tf4yHanEv5p8MKJL9rpv7ufkhbobAc6LnUqxkC6FRBmZ3TpaZ7BG1929ViTfxnqLs1d9W7euyC9WhRSSm",
  "key2": "31m513jfZpQ3iSgc2p9Ga5JJLuwEtT1QW9yipUec9v3iWuS1KTWQNk5ZfnKERBbaeKEDSXCNfFwBcvsndFrnVvmU",
  "key3": "3ACHxvJ9CoLfFFgqzS4GZchvDSMpCLGS3FqyHAyRqAAepMcQCU8LceyEMMYGdfcExpn9gAkPNQDvYxstz3sX2ehW",
  "key4": "m7wKAy4hUNs8CcWP2HdknEVBrEnm1qZDxaF6fYB3qEVpioXdp9wFjt1rZ5CbduDmNtwikSY3B6hCpyi5ZomPBVc",
  "key5": "4HPWY5XUFMnSoAf7xD11oQEvvwNVFpCJoXxDdNiqQsTEgeSVg3iMPvbwZLkBjCZo5vid2UfPZgKvv76gM2X7PRxT",
  "key6": "5mgUW9cAczVBE1u1XfTSPNCQ1jkuAxydkTCTTjsY44RGLEUiLTd53yzPgUMZxcFR8xf3CjFypDZ8XWCrdNEExF4N",
  "key7": "znxUXXkUwFxjPLCuausfQ8scR1LuwvVYiXT37fcV9gtYvTH3ap8hXYtJtEbKao1m6gwfAZHteHdRhvmRZPDso4U",
  "key8": "4R5mgaNdvYFP39pd9tqrFBBvXSyRY6t8HxLnJmz4MV8fdmmNj9xWCBWJHU592svFtawYJddBBrpjADCdURqxZyiv",
  "key9": "3Aiaditseqgsx8XJXHuCqqXt3dd4EWUVFvfCim4mzZKoM1UgVBKqotihEobUY9LdeqSUExpKK9L86GQNVH36mLh2",
  "key10": "4sajKSi89peqWxWoPfbakZX9s6Rx8YeVrvc7sBcULHQWBU64aVEgK3SdZPqNwVgSdCe7JSfcGVGAkpmrsniBYBpx",
  "key11": "2nxAkScmMSutVPWjZ7xhNysS8Vjn2gunX7YsTpXS9vbzJhEnFuYNTX3Ln46oC6Jcpfzi6KLrmLA7Ewj3cze1x1T6",
  "key12": "2sUH6c5pHAL4fWPcj7PP7bSornMSvRrCkGxYKRpphciRMSHAxjyj5sTTSq7S3Lr9Fh8qNJPPJNkrAoMjaDGX9RS",
  "key13": "5GNGij6Nzk9mVsf9vqemEbTbyCZN3dwM6i3WuMr9nxnaiwo49x293vNhDxzca5XGp3zCxAcSY2MVCnQNHdArNXAK",
  "key14": "4Q4AMY647prvEr2jX9eLvJxYSyVbxyu3gv9nymdMvHhybJ7vvDXbLDPxnx96FZAPTV2zsnQ5tXrditm1rxHeoVAN",
  "key15": "4hzzfKgxvW2MVzMWzxdmrXji3ebSi9xPHxRpt37fb37fktPDDD7SKJ5A7DYu71HoVnGbMicUKCpasp8WeE4iJysv",
  "key16": "5tXBNr5GqUSBt978dHGuix8TJao4zH7k2T3RjWG1NCtS9mf4ALg7eBXWPoX6sgxHcwuB9biPpXD595p2hbFvFmwS",
  "key17": "3Sepkfonrxjojhx2Vd29zmvm3GKK7QCgb3P4wvtZsqXtAEeqCkm1tWvFgFjjrGHqY9u1YjrCj42fHTfwScP1Hdbx",
  "key18": "3ojJuapopNWq8ndWuos73HWwVGmoDRCo1GsVysfmCks7nJpnikCmXNV5q3qarxVFr1A4qcEXZZJ6MHUP5eFg2Z9d",
  "key19": "5bMGdCM5WSS2qU2w4aYF3XTFZRaGhyTLUokY4sbdpWjwQoqptPau3ubbkQVEUAo11oJtrw9w2JG48j3ponnZHCXf",
  "key20": "fRfKe3ScKPVAiiKqYEAuEn8JJptt7GTkp3R61LZriJdj6ePkB2qm8Nyg9qPVHsDhCNyn6UK233AmK4maQeDLiNx",
  "key21": "4mpWbqVVjXmKB6PdQUi3MU7P6pyGxLWFdF6jTuemNkiCshn3uG9RthVKhfZVYvRFD4P6vG2vHLxv6zsRbEe99gSu",
  "key22": "65ktVzXDnqvrfsJx88oSiP3ZxzFWP2dyj9YYH8Uo3tEVrjZiTy3DJwPDG6RoDP4QxvUqXB9NMF7nco5GdBSrj833",
  "key23": "25p1DPjRibjsDZTPCbWqwJrNviaMoCndSTDcWPCwPz9goTtEJXTLq4Qop6Y5rabcDDSPamngubdpce8Nhwyz8vVx",
  "key24": "31xk6B6UWJChAcT1Upxq4ZMatX3H5zGkwVj9Qqnx3MaJfHYdxMbfD2ob81WGSb3jWyKyDtCvRazvrjcuw58TghVD",
  "key25": "49tvM7redKfvkbRdBd8ct2jaz2BvwcDMD7jwGD4SjzMb9FbqEh6NXoFPyr2egTpZZJS51ijrdCWrGCKAkYmxAhZf",
  "key26": "3C88XTCdncYY1vo99MXkwBwepNHuaPcGTiBhmerrRahzRJ1GMCn2SFjBxQLf5b5htNtFTJm3empkR22Zs6tgEnFi",
  "key27": "3BFQg4SHd5BWvDN2Gv1YMyg5GMrwr6KrRfkfrJ1dhS5y638cz97S8Je8MGeZNaCTf9zyoLAN8UZMSCjaf67goPcW",
  "key28": "5Jg7bMTKWnayonkJ9wdGmH6LxaGWMwASNtGcho7Q8JJAkcv4pfmaGW9hN3k2gP1QkAdhkDxzg5dfayrDoDx38Xqr",
  "key29": "5q1aHU66gXbQPKdnoHhiHFdpRDpSJYyShPGp6NTuZ7cmCwevPMfebhFWeNxg27hFGPL9H65sQSn12bAPqxF1R7AT"
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
