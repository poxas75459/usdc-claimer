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
    "65QvQASrMqJvo5vkMjaPRPn9pjhBnVVta26YeiEvrTkjTDWv8qAy1r3FSpjR7urmnoAzcDPxm9ebYR9s1KbTojyV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "V7cbY3kfUeKaNCv2Qs9Sne4XQe8aopCCNxbjJpJABBqKRPq25eWDkfnW9gZB1vC4afyKpNbxExDvVKL2w3vCKG7",
  "key1": "4nvBYmJveVNqDx9wjibQTHF6xxyUrc7kcX1E41DqrJmdsNY8dbisjMaRZwGuVJLBPoa51L6dv77RaRJmBkDvt6NA",
  "key2": "5Mk17FaA2UbhT7WUFi8SBFekvghur4DdXzxCGU87v2Zn3XeQkpeMw8r2Ebiei3naf2LdkDX1aFZ1guivijH5NyPn",
  "key3": "5NSvUzBc13YQQ9HDBYtdn4NFFoSknPZm9w97Zs1HsTR6RVpgrHBGyyV7qCVGcRGBqjPnbXF3JpxT5kXciQAufKMZ",
  "key4": "4Xe9PZbeLDD42ZWRqeXJ15PkHszjq84iNLAPhotLNxoPrsM5yfmmZbLbYwiQDHJNLxaF15FKnBURhGHTqFDAxMrX",
  "key5": "4vV1oKw64fnkaet32GhZShMT4Tj7K9k4s1nZa24iGzUxvg5p4CiDqU333h58EmA3DXcNLkGM1nWePoBzR5kr3qUt",
  "key6": "52ppwhaqfmAXTKHPpjD9uHYzqHCtGAjmnbRQNjjjeW451G7wi2t4FzoWpaTVNydXJmwwCvbBk7CrcUtMefqTz4oT",
  "key7": "3Ns8ktBstdg316q2dsNRps5LkCQ8hRsbSB8pVFvuMgwFjEMcXqGJDUhwrZTvP92cfkDxdEHRAoSJqFJ7KC4T5y4R",
  "key8": "51JZ37WvWXUcJQtd72FD1qFMnQMuiMLQhpbUM5eFzJ7uvcyhNSn9bG1WLEq6YLj7wHF1S7ZG1Be1ryLM18ddXbyH",
  "key9": "4UgFZQ9SnEk2Wvzp44Jo1uFhe6HemBf7LKue3BBJLaF83zwR8Xg2rUDJQbehvwKhSJ8otpqUTD6Mfy84YmhgK6mb",
  "key10": "Lz8Cd2TVea4RkSCezGBd9NkN6hsc8DCnbFmF4fmpdb1iWVWzYiFwFEYVZzeCTJrp6pWxKku9LhQ8FTktdnCXsLR",
  "key11": "5pebfe1iuog7H6Gw2LAdRgSFqX54Buh23z5k6xzPR82ySsfY4qMTKFYzrojmxa58W5XfSceLw5EMmhWTyzQUV1wS",
  "key12": "r1UwCBqfURtRW7sKc1cmi4ofA8GAh7sb19EHe6VQyPKtxSEG25mfuTvoLMPBvrrU9is1f8etetY69yrUfJm5u3a",
  "key13": "4KLJCUuzXCMB82ebTUMPQNio3Fqt3V2MKumX4rX11QRmkQrSVBmctYdzN5VYHRV1AGXM1sj1AhRNtuM2Fq2DUJ94",
  "key14": "5MNZeJUkPdAhtanLEW7z8Van4N5Xe14udXqFc7Kd7Mu94sMdnx5EvHV127kAvmeB1ruUff2a6WC24ak9ECtaujRm",
  "key15": "Triopy9jmXhzEY39ki1fdX53R9C9PSPMtJGbx5rLX24NdMbSWRTZ6aSqW2Cf9D7MFFMJb9a1q7NVX9p5dPEXTsC",
  "key16": "JAgdngqWj24EMRSiWqy2j7vnTmrTyWDxyhkKw7hWs4VGCzEpRiH1AWsFwBYbJUm5Zi9Rf4PVcvpXiuDeE8nA3Yh",
  "key17": "4vUZ9qtGW13DLA9g8aqVXFbnRnvKRdaBBdWkB3qgedCUap6a52ujCAEWMFFiVWsCBBt44LAPG28VcmNQrXLpuEEz",
  "key18": "JLkPTLqsb7yu8iFFcLwLxSjZWuDGoepdZH3sepimT6LE3FiRzEeTCGfGu3imANrin6EPXymkUx5UnPoZWgT9qpQ",
  "key19": "2BCX43satsJ9KN1vPgrr5GrCAbyicYiubfHiu5L4CzMFRQXk82RVVAZ1yR2Uh5N3GUU8ngokBjTgMgbBCkc2BKBX",
  "key20": "VgkfizSGca4jG56EkgbT4zScuoQ3MSea1BnisfrGw9p1ny2fcwVjnyBiReWmQiQM8MsKwfpsYLvjAnT5aVrP78M",
  "key21": "3GjQYkzikoFFGGwBSwTd4WJsdxwxrVSCWf8vV9UdL59xjucaY2ZswjvQhqQcuopst5bXsBQQEodJPma1vdXoicM5",
  "key22": "2LASTaGA4YLZX85BVeF5Y9UVXSQUFyoR2eR9WMvadXhsiFZPMJsJBqikAzPCqPJS6GB5PxeyPx8Rh7vDL8Jxc4it",
  "key23": "4Sz4FwrUkL37yBBwRmtEQeUb58gpyzFmDhGfWt9B223Ua1pERPumM4jFfwdpWSK1qfwq7Yz59iY5JxWZq6smxbg2",
  "key24": "3i4zz5jqZgGwSKXsZyFfHKUVmP9YUJYb46EMmdFmcU38EUdnM3AT19vTrGBM6hipfC1vpcY6MCTbU2eE9TvZfnbE",
  "key25": "2S2q1B5nwgNhoCizLz5Hms3cQWgotQwaNUghfFRe4r7Rf4iBDUGjDh67boCLu81MSEMmjCm2sWA7dfPaN3VAGGPE",
  "key26": "LSAcD4omUw9YvQ24z9CL6unK9Vj81A4oeXe4qJGHsfhPRgxZRnffFgPhZhQDdYp4Mv8FSfmXFrXu427joGgJbMs",
  "key27": "4hodzRzcSJGE4wVL8AhjLFE1Re8rM7A2Fn4y3nWdgebemQiDXPzsLnkQPDz2JPppBomWvvpPPjKbWNqHhg5kxcEb",
  "key28": "27wPnNVWuH6qmGYYecnxZdu5r8M6ohwbjVT4DxHudF2XWe8MEGDnDPdghTE1vjCJjS9qeuzQ2yA9P7WusMhwGEs7",
  "key29": "25Em9F2D4nLtpMFPEnawzzKAy6Q6BV8F33AWGa5hEzcxQ5RN71aSqsCj26JSRLBgZvddmiQpy46fDMMT9x3UCAUv",
  "key30": "5BLirn1CSEU9i7QiL2aJPfE11oq45vVyUAEKMa3ykUZvnMRifqmLWYTMichjMGzm3nTQAAdk3X6ZVvobHzycMePk",
  "key31": "5NottjmB9aVyfE28Dmgc6zSB1amKfQkqMPaVvZyJMjx9EwitpRriZGJJzKX5UAtU7HKdjJCAYLFkEuSL5MrvpywD",
  "key32": "35eju9nvgVPEBYJmj3ESGVvW5QtR9ATLVeQSb8XNYRLZbGKb9nA1j2cu6U2Gu7dgX5JhtZzj1rqTHj1Z2zRoujuN",
  "key33": "25aQh9cGeH97FLP8G6GFuBa7fAyZVEDce4wek2mkuYzXPsrSx51zHy2nTdg2sWWmTD9VH1JWxJBa61wdbuQy1hvX",
  "key34": "5Jb73k563rgMaAruVgp8x1pGWDt9KiMQRqUxcqS7s7ugdj59nKvpAgAxxWw4wdyeRmCEmuNGMPtoy3iE9YT21Uad",
  "key35": "4h5s5oJDjfEvFgft1gjeoy7WH5vVVQah3Nj5k5GRuop2X2WygMvjgqjAffNpR58ptPQBk8VGSrwNtveir1VsyVie",
  "key36": "2dAUDWfmFqAk1FfCEf8aW6UQg8Uwnz2aNnSdqF6A8s2gPQpKzbWe2T88ygKQBFvSQ9u9s7xiiczNcgg496yENQAW",
  "key37": "5rTmaimLygAuJyAE5NvxB5A6McijonbL9ncLRHwBJoscyu8gp9iFZpzj7Hw5stiyQzWfag8MSeRpK4x5vPn37FTy",
  "key38": "5mk9nLQQVXK9dqC6oVDGc2oVzy4rUWi7e12xtmsA5wjXjLfvq4nn6CgCDJeuPELnZGwEobDDSoKCoeAsKRGHKBHX",
  "key39": "5uqdpoWCCZQ9k4gFhb81RfuUWR4z3paetA3Er2UBqJsdesDJH7mDMJ9pDCGXUKXdv64tw91saMNBsp5zfyrVmS3H"
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
