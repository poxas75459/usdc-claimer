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
    "5GyPKGQFPoB2RDbjk3swmYCNeHi9RmetGFB3RM1RBvhkvry5FuaXtKfKAy6jQpCWewzog44dMDXSBfq8FMT4MiXT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4gPGeTkHZfx3qYsNNHtQJKZWdm1w3hFdxkq3haEKTLAkyPgPcZ5WyXLqZyc9z5nwsXxNx5YSL4AS5f3WjNBHWeqi",
  "key1": "9ZsYC67VeuGb5gRtrPJmpeAjToxWpFAipqLshkttX2TdNe2oVt7bwcN4ADYbH9dUcKmx2tRYkQoR23kqSC6jE8N",
  "key2": "2Mxgjm9ujppLT7UbfjQ73aUUsYdLKL5CJb6e4enTMJ89EsdwK5sRrhqjiXew9hKVMTxkYzfY829NwiGbQzjqtb4j",
  "key3": "646k3ytpxUV1xUZW58ATmrWt8FPvSMLxF6r7FgTraT6XiaTrEsnMv4Q2gBFfgQut91PgsPosA5LUKHC9UvCMev7T",
  "key4": "46xmMcDrGzR7Uq9B8grTATTwZ5ZzzJzL6jcEYpMus1optq1g3ESYBNmDkqFUb2qTSLTBqH7XFvvpv15CSoJh7HtN",
  "key5": "2E57mkEj1qjWhKLAHwkZMjCXEz6AGooWHu6XrSqBV286wESpXPt88PRpbWXqcqHKSeks3zhCwRnfvHKHJYxFdk7",
  "key6": "3ponBCK3iF4LY55Sy3chq9JX9AUr34rJyZsH5bsKwFAzaHWw1uJXTMAyzUbSGZXC4YfsKxVhPpfkHEhaeh5xRYmK",
  "key7": "32Zkuc5kozyrFUo88vc1xdGmwumpcSD2LZCNdKPwZ9nMCnk6Y8sguwSY9o6MeHwjZkzc3hy1G5AMKqiERqy9fDqF",
  "key8": "5jkAf9xZ9XmhPPWXi185fGPDxHhfCFuKGm78c6XCZFmKqF155VCJCSn8Qe8H9absWxJBouv3ooxH4zYvUmwuoqeL",
  "key9": "gYrPZVEpF9dKCanHxsarGi1BkhihtC2atKp88dZSrhCw6SLgRkKGvHgGeKRK5nghyqTSGdjyeCs3XnZRFPAyDaK",
  "key10": "3YpKEfJzgLpYxNDv5xkC58VdAYWeVPrWDnk8d4peo2P7TKc3LdgaMpv2uGmXnEKbjwY9NiT9KZ2uWxjG9qMY3XEv",
  "key11": "2Yvf5847zoyWiko4Z6nFzXzyjpyp6sWLXocdG428hjBymfaxiJKvZ7JyXSH3CzpT8zQcsoyCZfZhgrozkaLj3sBV",
  "key12": "4VMnNxNQDDRCKUkM2t91ZNUv72df4iUH2CjsmQCXzwmHa6k3w5cumPD5sE2MA7tj6cFmqU4WSpdrjggkGkXooqTD",
  "key13": "65X6MRpihRZGQbkZjaEXPjBXMdy4cxCQfENqoegWN9mxY1yyjSerCFkSrutzcFN6XLjjdNcaRgwebA8gUev96UK9",
  "key14": "34gLufFZVayWqorKv5mD7e3muvLyuc4byhinvzPrGuy2kSFfWdLKhtiU39cg6b6eiXGYuoR4UU5tjYihZL5P4e5E",
  "key15": "An71Q5QcWETdNnmc3PBKKqVRH31XFBTZPHbSsPr2PRa794HugLRXHke58vmnbme3Stfu1LhNx4TMd1tuvre9PSF",
  "key16": "2QrWGUGX3ZiW6mCvy9GZuyyyhsA3pRADdr4fah856EuoBsBvyEf82QevcQvz1QsA7DfQfAsT3uWJh5hV1TA1b8pd",
  "key17": "3hcCAz2DEL8HvHVooeMn6wooXBFLHyQquevc2UuX9FKAMLmN6DPcLsm6pJi84UZJrQnBHai8bVJ5WkhFtW5BW3fr",
  "key18": "4ndsFvi6mMTwdWRge65CDjDN6jJgRRuKGd1dZetoRRj67uTgd2GRg8vQ67BXH3ZP4w6yrQRgcfziEa8mMiJE48vy",
  "key19": "2SpCaAqZY9UwKyVxeNHSfBgxke9hrwpCdfPEW4jw9xrSiredTqh3xyDTnVD2GiWkxVFYhAj961xJX8HGfaxCUGog",
  "key20": "5wCsT89ydAP5rApVX8QGdmDPPGHxqFTAKeJT9mKSRYS4dWqtW5KxFQRm7dB5WBRyyHbcNpJttX2yRPet4aPTtv9X",
  "key21": "4TYUakW1q15zHWYsaMGEd83ztqhDBdZu7euR5TF4pmbdoD17QUaECgjSPtvVXZcgidLD3Cn6dkgZWmjsc4optkDi",
  "key22": "3LERoCZSHiDH4b2HFQLepjSR1rU2t4d17Kud2vG6gnjZmJwbh6pHtmmRxgtgpd3Qu9hBQRuic5R23yUA9Q1g6gK6",
  "key23": "2epu3rLSpqQGeBcDT4Lg91BuZLhJybBxTVD3Bjf6he3paYWYZLWHEz17TcLGR7WFByYszdXPMip7AVptKCKDYGCy",
  "key24": "5YpMnVQW5YMC3ef1ZGdba5EH8ArQPc8wchRHPpHQhpES1JEWsAMUvJ4MEG9maJo7dHMCXjL8RSAo4F7bSAQ5WMjh",
  "key25": "5t2WdYXoofsYUVG83kgdRvZcPYqGWSEoivkVLUVfq62gMdtegVkfhJ7pBN4yWwBkMwHJwfGiPXuLYDdf2hffs2es",
  "key26": "37eoEL5Dn8tTaiLh4ztDWUgnU4vPsWtVGNWEfWNZ78Z8Bt6Gq1qjPErBgNXSj35m4xp78pHdjzqA8DLpvQbFvU7f",
  "key27": "cDWFhcUN7MSfEokWESSxmCENDBWgczdckokPVAmyBS5288VFLibceiSZ3Nc4VGYkBmgNWpdLRb47DBQHbdUBgMh",
  "key28": "iJgCvWk4hSLcQ1LBFK2RyyBGCZaXrCM9HjzRDptNA62TeZYk2hBP3LA8p6SaxXNJUEHc5bwTfxCty5zYxxEHtdL",
  "key29": "QYJfRnVDvR3LN3Px73DBuwLT8hxL8VRVQ5PRBAvW4ij6iEQp69pyWVNbmSEz1quvbU62JqxkjendB2oarGhr3Wa",
  "key30": "qXn6MHuL3P7S1WTqQXQtDHA4VnmgBRvXQKsM4fGBuX9p2GQaqQSy5WdYZcpBG5oPX6hnGP8tHmrFvq4uhaCSmSz",
  "key31": "5jScR2Zqyd4fAbfgzC5G1EfitwjTwbJwtu1xK3KbWqQudZbDJXbPE7gz841SKSwazoBpJB7D1pCCGFiWbJPFXUVz",
  "key32": "5Lod6jjE75DEHFUrqNb2qz5DqopiCKB2e9GEWkL8ufDvgU5b2ZS8DRgpMUTHDnMNgNeZk5HS5wL9QZFkA9PzyngK",
  "key33": "MoW9157H3VV9eTqUBhebCdkPQauhqpkCVFmmMFAwrEqUe5DDGzo679jRE9vfLB3YPKoYv6Ta9a71fz5JVaJ9VKs"
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
