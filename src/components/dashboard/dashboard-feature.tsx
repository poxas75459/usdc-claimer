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
    "3dcntAVzv2xkeRY7RULcYMcVXj14mTDFDREExLEMYPFx98Sw7CcmYskkYjLceT2vwWuRBCQyprTr5APJ4M4FZzRk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "CKjmJwifwb5FW1nMveLD1nAyEbGDat6UtzNtWPACxAeggDjARjWLZGUaQSqqkTcGSiW3dH2hcrqrD1dsMF7G1mr",
  "key1": "2k1W8CwrTHtVkRpLKTNhATUhDzLM1jJSniuUGxKa6c8zeAkj7Xv488BKVzyn8YfSXKQoCuSnLEDayJT4MegZkX89",
  "key2": "X8Kcwd7vJhWktYobWNzZ6H7jSviXk8fFzcfSUW1pR4S3biPzVxCyLWrX7WYh2rmAawo1xzdJVr3KorhXhiRvK3P",
  "key3": "4ND6oD9cnEuFKdaDcScra7rG2WoRzG86FkJwDwrfffPEyHfbFdS2A1zZ6uTA6nCFtxXmRQVebUoNQ8kSFBkhbSPx",
  "key4": "44LMxMvhEDzxKnDsPJF1vGbJK6xgmNxARcGAWXiErMY2eiRaoXrjRDm4eMa2TVMA5jTBNoDDusfbpjZ3z9GDEoLU",
  "key5": "XdzS64mqhDFdHGCTQGk7iHCR9wF2S24v2AWvdKTPTXfUnAqPzT1Y4t8Li4fvcDw6Hs1jqPSnp84ttJ2dEXS9TTs",
  "key6": "5XZQnL8dyLgPj66YENFDtwRaK6FPVcqBYN4fqd2FeeXz8zW8gUGz3yMN7LuGVqgdFtsgvyGJvzJkXqr5RzYEabWW",
  "key7": "2qKWBJpSmoGJ6yik9Li7J7m8SBc2Yu32rji5te3nNf1JU8wNSoojKWQCRgBQNnkW5mKgNtD4vhexDi423sgmtfSa",
  "key8": "VXhDHwVNpRScYE5LqiUW8BgFPomWDXgUj3GJwd6c6KJPiTFNaomNDRpno5kXAehmbjoJup6rWv6rMnMbU34PmXL",
  "key9": "5sgEQ3tAGANRdbJV1iUYKYLkzZ1BUyoWAXUPcHzWsdhKKVAaufeZrKvb9w76r3kLTT8KJQndS9raMTWJpv2YyB7s",
  "key10": "3pgihG2X3tq6xydUkEvZgTpyRHFuuiW4cKnVkQggViriVGH7uTn3r4SfT7iNDM5dDSxsestaJhjs2shwW37pan3v",
  "key11": "39mjFT4NXuCkeeoRoudpHFqD7eFFv5jkWULMapZxEnjrrPXmCc6VpzfgN5pWU3acbR1yEQTsetTDsGEE6kCxTbAc",
  "key12": "4rmv7JQi3FPJ8TYcp3MPA6dV5tiGDqkM9LjcSU4qmuUB3G4fqDK9CYbq87tA6RLgyAfRMy4AWuwkWEw4krSpGpgi",
  "key13": "2z1PGqHfGPKpT8NYb3ByuWEgsGEkJD2e69QZ18gJwbqABQvxPXk3t2zjnwwD2w4qEWZ6tAjxWwyE5V4fLxBHD6u2",
  "key14": "3GiWyQ1sHavojy2EpjPRc6KqSjLt3vzo3TpaC7FvTZX19ckWbTirmT8kB2Ppr1nLLdytuh8mTxAmq6EbxAWh6ViL",
  "key15": "2TzdWanQdfFbixHFQ97Bsw4WP2G2MfGZRfuggQhqaPe4HWPgiU7YwJF8xdGjScvP6aWQzbQ5pv8nLy55qADDixAd",
  "key16": "2ZZQ4nRGhx3dxj1g2FTekwcmwDrSUd1fFWFcodzN7N1rS6gxJ2VNt3G22dPPNguST4LibNdwCYacZrDSJvJfS2Ae",
  "key17": "2KR1QN4eWZ3KrYhgoXGu55WrBe1dYg5mAyZeNcwGZt3WozPE3FR7uxiFbLrodkgXoJawh9Gw24m7ADywv9vrowqD",
  "key18": "46Q4YbYwmTHDPopTTThKAj5upiUzt65L89pW5S41gKWs7LeE6uzzv32CEmyK7JU9KZJqCCPKeVbReFLusGQk6HA8",
  "key19": "4tfHmSE2m2MBgyPbDVkcRJw7M1vQEtCFKEm2tRBu6A8YuD5PL68Kt4TbUi86UKQ15jAbLa2HHMHZGzjkWykjCjYh",
  "key20": "2EzXaaVh1MCU9Gfwd9jEb3XBaUXB6GCLZ28wzM5o9sLSdv2AyVyzPuLjt3kC5fbJU7evCHYMRCLiEscwc7tw7MMf",
  "key21": "3bnntAaogDtc32sHpmbHfq4LQB5UPA8XHUBuhsm5934BFYf8rPgQrEs7wfF1s1DPxDXuNTHC2DzZKZtEA2grQ1hk",
  "key22": "61Ch7WdwNCqPgAb9Ekx5yUsCwRLA9CV3Ky4g6Dt6pKySSGDrRfhecUhweu46pvjX4FPVbNUS3iY7TePj77rVhPqd",
  "key23": "4VHh88Bd6Bp73kH5m5dmYD8p7dEC3hFkoCetnD22CmrRqdJu8ZuZG4ovGXcf5YA1GohwQRwKnUJVHNmrGNj7Vd3z",
  "key24": "fchAbJxPYbJU5k5kx3VeBFiies4vB58NB1WMnV4r9fMujnZ7SSf8Vzgn1M9BrxyzXVEgYhar6keHX9uayWfaNqw",
  "key25": "5JxrBpc5kNVouy5qBggcfRrJnD6jMW2BLS4z8gQxnYPNjgGzrtSVGNSygphRb1x5ZFFAEFvstKdAgNXaF5mwHg1M",
  "key26": "2fUqghNQ6JZgm5drEnuYGuzcnYKHw9iqeKUzpXhCPsFGHTQf3F6VpduDmicP3s1Va4nAscRL5Lan4avth7bCxnD6",
  "key27": "5C19yW3F1Jw364JnfgJqvGJ3f6X3QPSVYGxdvPAK4R34RoB6dJyyub9XiRWSEAYHMuHtjCDPrrw7A3d6VbNuzP5R",
  "key28": "57kFMSHiPtkhmnHnNaKeHPUtxVVdNSfuKvnLhYhy2atU8ma1iZU2fTuvjrTJ9C3iRYZ23sWUfR9Zdh2d9Ho5XGXS",
  "key29": "2yaJdUECAVSawL6ACxTGCPNjkagCCeWE9QdEs72MV39Zv2i8aUgiXxGw6zoZQpSA9YEc3AcE3s8wE29uTeVaJz16",
  "key30": "5GMVrt68Dbe4PwwUXrn7MAcLQEZCtgFjxGkeoW4CC1JM2KgCyVRa23KPYdQCYQPzJZkWNtRamDxyTP7eFrj3jNxp",
  "key31": "55sumYRZxteYCQ51BbnbBWCAk2u9un7uDBxwUjzvFRLkaNoRn23Nae1crd9SudowvUx9YVJznK12VdFxNUXNSp9m",
  "key32": "4k5iQH31wDdspDEka3uwCsRnS8GaeAetBoJZKsbQSu9vvey2nC6VHuaXow1BN1Y8n2V4BMfR1fp9MqVYtQjXcbks"
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
