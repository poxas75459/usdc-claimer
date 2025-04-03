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
    "53cxZSgoghapG9Atve6zcv4JVLeEC8JAj8wALXs5WsBfc8otAyjt7P91jEFmp8kHKXg97ekBuM7HAjZkPBTp7NpY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3JSrJAom7aNp1dZbsiNQTQNqg8mXJq2eUX5JmDNVK3BaKFXcxPUBC7YWHePE8kfrm1SPnsVi11p5Nw4wXhmBPMPk",
  "key1": "2fXFyrXKqQsj4pu6SGktS489CgjWcsdNhhgvGbm8CgqtSYiCwY93XUieyb3ii8uB2rGKN8TwSJrL2pZSQ8bgnZBK",
  "key2": "5hhUP4rF65hmPM8jCPc3MznptNWRzkmEJJG4Y1NbXfp8QqbrK5rVmpHGtgtTdEcmdfXNm8MwFdBoyoahZCBHdYQE",
  "key3": "jZxFhPqCF4TQh1DN1wFFkfy5mHDNe2WUvuYbrqjsTvYP6A437DcFmFHk3ZmJ9qLkjChiAkBfJvJU2SRDTRS6jFJ",
  "key4": "5KH2ycUPdPSLZyQGg9QmjjNrXG5a8x3Ze1ggSU8vCvKijpK4f58ew2c8SFByzKHjZgPd1HEZaczUiEy3e2gUnyxi",
  "key5": "5txZX1GW3SZtm9HpddWYwDXSmu2Qgoiyx3nyyDfrGqMKhKyacM28LChKkB1iceTww9HLgHyaSougd7Uhzf4Pzyjg",
  "key6": "5M9os4TXEREEy5Hz6wcMLiaANxDVnAagi3Z6ikTLp5tQj46xbA5hwiuxx2mbtDqPUow8rscSGo5UkubcBA1aDw5G",
  "key7": "5oBY8eDgV7o73HYazEXV49uvEPDbXktefcBuQR94yQ7emPgLPCTmwrMrLixoFgkW3omBNnLtVDPxdeX6c9smE1Fx",
  "key8": "ErSTzVVpUJ9JgG8Nr7znMQxqFmhUJKAXQdce4x7Vcwpp9gJkgWZgcYzgopRFeXEbayiBferHNBXnyi5h2EJsLGn",
  "key9": "C6LQxKohTacs7CamCYYjfJLBqA2gU6VkTcB8DMzxceoGj9gPv8aQYH5a11uddfrs8ZVwfJt6xZJyEySJemNEDAF",
  "key10": "413Ew7ZhKTV65zXP4VGFKJGeMbp6eJg7WbBM1oCGWBkdktFtVg2vmymTrVKXu8X5tDiQ3TEhQrG7bZxK49dTfNGY",
  "key11": "4Q4rQcauU7wVKGNMba9xNmb2D4kpkZn4Lc4xHcxgX3aJ9FZ4dumn3sRhf79efpsNLvLMfzY9tYqYpeKjjZUAbscN",
  "key12": "33yqVUgD6VPZgQEKYHjWHLrYH8q7S5ynMCQqFyimFa5BGpRKWoXTRofxpGGrqEhrAYoZ3U3nZtqFi3GS6aTa9K8e",
  "key13": "5tTp8BefvCVpj3QU6rpPD8GN8diqrkPjsXiA6utgoHzavCCLcrTMzCfCedBz6mWuxCgWANWh1osEgCb66rCwapgP",
  "key14": "2UrE6pCBWCaFDDHWmVHq2KPv86bhxYgLyL6qMNu6vdAUCZyE1eU66oxDKhfRUxTKny2BC7ryb17v93eYBpvfVGLa",
  "key15": "3yXhoqye8QYF2MbR3ynhnyTPaJTBt2WobCFT8j7ViBpfBP82BpyGmkgi1AVboiSzysmXgdHuSRPQQXJmGsSYriFf",
  "key16": "3yps8gGskFfTfrsqVAGcMYXTisE3PFP6dWVpn7QWW3socQSrv44thrwrvLQVjGR7Hktq9BpGdH3JD2QhePiFscuJ",
  "key17": "jssWYgn1i5M11MjYCwmCCJqQLrTUeWLXub9NE2JkEeKzZagXAcSmmKr6B3y9tu4dG1P2pFDvQzbNabdAaJPhDj6",
  "key18": "2tx26aiCfeGFL2GZrxuye8qqto7f155U8ZBP9WPFnN8dfR15uhAU1oSFZ9a3zrZJEajwXsorVPgpH9a44yYBdPe",
  "key19": "4iWYuwhRfBLAEavwCwvknuZWydrLQk5tJtRKdtwmdTAfDc9c9djEwcNUkxqjt2mCxz8RmCkj5BgrMrWdRvZku6qU",
  "key20": "3M132dugWvidTisW9NbzzQxZRnSi9S18dwLd9FykeTDqsCMw2T2rFJWR6GkCfxc9NxAksH7mFmuEHqoMycHzes7r",
  "key21": "4nqnqwh2U123iJedrf8663EUzb9ZjhhRkAhnfZDf3K1obF98R7U4pdehx3dQPNGtDKXXAqXtAPe3SHAJT6Gb78bh",
  "key22": "4r2RMhsxvGJgxcZoDhV5pdUT9WjdtqPsyciNivuiVY7RcNziD4fKtSx7QACKHYweeXaWyeTtU1xWfUVn5vFvJ5t5",
  "key23": "4MnrmNkLp4wDrZpfbbFCfApm1T2UP6cXqHNCV1dRcCjKJRkAMpd59sD4N4iL22os8ozE5Guq17pDVCFG2zG4aZhX",
  "key24": "M72fm2DoqAcPaa8kR6Fps2m8reBFiPHQ6k8faaWKc1F2Sro3vR2MroM1ww6zKHGUqjsjZYZKpvQzLU7AYoZdRyn"
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
