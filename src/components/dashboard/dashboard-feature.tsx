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
    "3U4srv2gD5Rw6C7t6fpfiGeBZKXdrWeCQUZAL6UkNFzDqD4DxpEaX2nKhnc6a5vAWMKZfKG8v4ZbKShWTThRo2oB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Fv3PNSDKjjxyZH2oEghctwXGxusYC9MGujpYrqr9HVH3RhfgBMMbu6jp9prAntSXGaz6WVpdX8GfXAEYM69bZby",
  "key1": "4sWSjS4UwU8Gm5mjDH5ZGnZ3t4J8GQsktWc4pah9NJj8BQj4qUGZpgNoZKRYNyrU31CYF8mpmkz2Y9evaXXEb22W",
  "key2": "3rYKamcm8KDeqmReAh5WYxTSgopL3n2qz2EJzFu7qxFonPZ7BQMQXTJFcrhxhV9awoBMesFt5DSV9esuUVsuyGvz",
  "key3": "521M2mzGB11B9A49DmhDUXBeUtLCPsXv73xx3ax7qTBpiCE3GbCAu7smapztZTbEe6AYbwZ8KEnjiRPjehpgTY9b",
  "key4": "3QPXLhEAszcik8QTfM8LfcpUBpofTEKggFPN1hcVD4PzodCgxkC8h3bYadwmEEqE4A6Bt7mrrdJYh2zBAHTQuQ45",
  "key5": "3R3Fy8pjnqeJPFc9H4BEYWYEdLAcVGTC47Q2XjLkEszBRCRTL3YPUG5XoZMnMW67J4XedufCvUSn5kTnWhj2FEeX",
  "key6": "izxXWko5rcDKTo1dWsZJG6f73sJXppedifJhgjtRdMjMP53kWbfz8rfS7KHDpAUwm43EJyjS8YchEL5daqFmidQ",
  "key7": "2ywgXnwdw2STpxXc13rWcxUW2RyHcUeCDUPQviQvSe4vvVkLNKxmHFMtTctbRa69Tq9TFzZkPFyqRL4WVVajKZtx",
  "key8": "4SreXkrL95qM8LyKFRNhdC4r5vu7pWMJk8Q43gju4TwjNQY18Z8AuZJef7VuhZrRbjf5Vezemuw6oPSULwwSXDkE",
  "key9": "DRdV1bNrFnQfkU9EiJd6HMhSYJ8BmShH27ugYdwDskp9ogGciNWwmyi56JhbMFnnPJKYy3BpuP2rw8DDraebvvP",
  "key10": "5naa7Sn7FU6SgQVB6Cp5UdgsQo4cGZAbMJWnZnyE2bFCAqMSEgZP4hTF3yV6YYURdCDUnXL6gd28tWDAU5sZXQAb",
  "key11": "3ESHmsY3jZWg1bFxdMpqg7Gdbs5rfx8ers4Dyx7j8CCDcZ6X4ThE5X4rnPi2Toc8KUNPygtSFYDTWgRzb3PKiJDJ",
  "key12": "2r8LwUZEhaJicvndXDcxzaXWzvXCQMUJfoLH1SBoeVSoAENGUtXP8L1CXUaPx3tjA4VZ5HuFWNvYXHB5zRXoFvy",
  "key13": "5wSpJqBKt3ieA1EUfa6aR8JFdQTZUJwmeiguZPpTwictdi9anbVhpFeJnJWZQBCnHviREmE95rwjZXcCMppAoaXu",
  "key14": "xGzZ9FgNeJUBa1KJzRYtivGVa1XP3eEtjd35QqSVBJ9n2SvHj8KNFuvN79XNS2rdp5hkb8U8gtoKuE3j662aqSv",
  "key15": "5PBakT16Q6vcEfHBJ18KxjTRgGrNimFJUnjqmtHLR4an88EB9LxxgVXsZ3mMLGZnBTkYqu22sipK7HMtYkB1SYSt",
  "key16": "5RrL2i1AHqFfTZ949kiQCyStd7FoXBkLuw7DHtojxpVZXqd6XJxzEHmGVaXd9htZjjLwfzLryM7gYq8rGBs4HUPj",
  "key17": "X2Q1BqXfC5q9F3iRB9XxXK2Co5gaSMBgiNTjj6EpWJAHj65qCGi5snLJC9YpUq8Eg7L3LBkMfDxgreVdLSPwG79",
  "key18": "1qKfJwjq3zAnN1hiMKmWHXctY3bNE1HAf9295UMBUkCeJYo7uoodzCgRrJdAfHZJQGeeSZT1pLuxv2bMHJmSCtR",
  "key19": "4pRC7MXbJttw5KGrBxvitbwC6vy7A2bb952Nmg5M6xE3f1kwu6q2zvFTyQRsokr8DFbTtoHz2hsVvtuzKfQQAg4M",
  "key20": "2QnTAqvFiwXSPzUQJovecXupXQ3BpuhSFC4LgTDz4MPirWmbQ33869ufVmqXofpM3FgPYFdDjCQPqyJvLwjJ1tsz",
  "key21": "27QcWduyiB6Kh9YFRy9ChUTFFTNRfsgFMtLK8jGfkrgTrxsAdG1obMuYMxVv9zHQ4edYLmqdacSfztVtGXmEEEZR",
  "key22": "5CU8LkjRZuMQcuwHD2j1JccMuFKC52X1xdZS7c6FzfafmXLZUipqGdV5h5Fm8JeskyMpLSXVgA4KtwotfoShshoq",
  "key23": "4vgpufYZnFRSpA31PRTm61FpfmNDpGkS2vxyPKyD9VXRgytxzFWD9m8Ejm3dwecF66Atbdw1jmRhyZmB5sHEZzQw",
  "key24": "5qEMW3KSkdYLAvqCx2Z7direN3Yim8HYqpSLZgdsa8hXzJbPTLtbP9LbYXgX8hAPRyfny6MFnA4owawegWZDeSMT",
  "key25": "2pRfukPCJqA9NNUmsnJrzdnThBxiAZ3ckuuWcPXt6hnyg4wDRqzXKES7F4rnFX1L7t64odHrWqef5kJjvt7LspBj",
  "key26": "hR5WfZZmH8DuguVQ8NzSqf24cfxoXaZaFEg48XhXAfLaxo7iEmqLz9LhiYr1JybfScozeJ59J3LwPCwTW15DD2P",
  "key27": "396byBiZe2o5gwq31SdaoJipffvyVktU99x83gLC7MDGtJ7fUjttG2vRv6ouED4xgFL8pTfPNjUxzw3HAwDy2SEe",
  "key28": "34gA41HupUxigpCJHwAjKLLGHWmhu65JxN2yFVkWCNFe5HGtEioCiECSe1YqonT9cNa4RtkQSqKNJFyNUZtnQ4bs",
  "key29": "jXQ7mPDzba881PzgxHsheCLgLHRMswzLxEMxz5rcdSSNAwZhoWzayUWsMyfsN4hNCE4LV6t6caHqCUCikMTbFq9",
  "key30": "NqhoiMA1MGR3PTEELGe4h4uVEzYp5bUoqvfR5V19bUoLNYXjY9b7Aon1sEhVVfm7jvkmN3yWbM6KhBxBt2XuMzW",
  "key31": "zCALRbKtZCDdBb7yFttiEEUMy93E2m7eXGMdcJ2dwsL3EbPL8hB7whtvqKhQotiMa18VrK567iYsNpsR6CTtGyo",
  "key32": "5UjJFGz64SBTgwNZHr5Qr3HVEXd87j97vYwdfJkP1fAPpktQRJnQBB1HkPWCDXWMDHsGC2ncJ3GY9FozjnfSFjso",
  "key33": "49iz4UVJEXKsyQXKxXTQwshSiJyRpx66AUdAt8MvZ4xShUQB9NJ5mYKnttxzK1ZGr1y4TC9M4gnSbqd3hENyHnf4",
  "key34": "4Tx9VtNDqSEweyBdVomGWy37LuBNLCvvt2UZj3SLcUtfZhx3kGGW9RALPR3aG2JLuCugRncfKGus7GEXyFsrBAP7",
  "key35": "5n49NvRWCXTQ67zKWJhAYbAcR67jvcyVH44J3z7nR2LXqRB7sBovNbSTx3cUxKgoZDhnuZRmDY1yUUjNoFpiT3e2",
  "key36": "2zc6nrH5eDn6W635fdizHp4dFB5AsmAJPESgfLmv3efWJkTqnu6Z7hCbm1a1s2ZamwqsWB2owCh6Z3vMHjgE2si9"
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
