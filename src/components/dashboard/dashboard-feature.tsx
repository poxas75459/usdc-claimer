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
    "2S29LiMZdqj6sBJipS5AJZACuJrLHcfKwGmQ5xvVVxNcMS6K6zzwKGrj7iic2rEGvAuaGN17bz8VXAxe8HetuuFc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "24H3vTTypd5cG6YsTHGYz7uMoD7ohKQFt1wRB31VVjruUAeRGx4L2ZVJTKWqXXXehY8qxoWow9UYwJuHmtwgzrf6",
  "key1": "4SBtBopBEG3ppXQ1YDDKXBiGJVTRQrDgyVBdmQvKubuKPGcHFvvPPKjeuNgkUnhUzHXxq78713xM1XcaJCtmHxYD",
  "key2": "kzPwkJs8Hy7bFLmHFL6uB1BGgnLgaa3BzkGrQqF2cJqj6swrFrL3no8xFL1bG18xFWg23AtZKdEjpFXYqRkz8Tk",
  "key3": "2CpZg3e1nMUErh2Y2fR1Miywz5UXrHu8HesVECGkRfbc681PBSgNsocwAgfj2kiEqyBpcVKVPaFBZdc4pj4VEXK8",
  "key4": "4tDCerWdBk7V3GUzQ9j8doiUSmL97QWxchsbHfJc6FR5V6wXHsqxBw4Tzgms9ZWGNsoyftVUWZpkQ4gMY9DH7SEo",
  "key5": "Wh5LqGvQkFMwTGUo8nGvAZmLvg4ndw3ZDGDqxoxhUnewR7SYEYvDk82me6xyt9r3y9YrCctAmQvv27LFjm24nc3",
  "key6": "2vFmcD5E2nzJM9nmYMKQhCSMds6bs292bEgAFo93mvVN4rsFeCvkcE8Gi7VqTUnqZGHMZdwn1nqLaa2NPrk2SXAG",
  "key7": "2MZcSeZAvESP8rk7xsbmeFYWNTHeDvsywgnkPW6RhbFCTMg8Jicr2SmBT7uFPoiaDjkfih9nUBaVcYgBcrG2zcXk",
  "key8": "EYmERiiSspG9Vbag5uqYZWMTgrKk8w4iiRg9zRi2cRhg8QNzDUtvKDqDLBZJ76d4HPTKtrZxvzqmsJVuuk19cgf",
  "key9": "WQ9bHTC2MbEZwQvNjjnuKxwXAFjX9gdDGXH9GLHFsw48eUuVagmHi9McgT3SuVpmsaVE5SmMDqam8UQRYhjeass",
  "key10": "56NWX3bYkeD1Q3Dr7LxQguL2DDtVwWYrzH4ATP9wfGva7hzqrF5UF2Ns9tm1q7d7RD7Smp7mpfy3qDTXdrUZ4NTr",
  "key11": "44LR4obCPWpUMZ3ZHchxNJaDTfuxj26VJmskX6WDsS9yiWGjrBvTDYvU7CEX5w5ABHPcJYwLVcgaV1ECktRtokrm",
  "key12": "2oaXav91GsYAq7Ygk4qxN5f9JRfZXeVBDCmi2WwL9Nm4H1zWgqFirX5AaBDkHn6Dwpwx82mbc4fqsN9DRLyqvrVh",
  "key13": "jWG8qfof3wjzDfUhaUGMsKXZWPkAZ88aV3NkMucqJA6w5aizGKPXLAbswLYsoh53CinHfmg7sVV9ENvFtdkAkLZ",
  "key14": "5AWTZaMVCqfo5qNpu4aRjMFajTnhjWqCAE8YdW7HeYkpJ9sFqccLipCbWK2y6erWBREp2p8FeqHBKADa2HNMuB3r",
  "key15": "4oY5q4GZMmdBLfWKyQaLWN94334X26PkfB6rEVxjXdvYuaT9LCWQobBvfNsqNdmvCwnU6HxTeqUaArpakDDGi6YR",
  "key16": "jzazfprkhrpDSq6EPj7QiZ8pLeJAmxdsRahqz7RhKgS5ppZqcNR5BEUN4mMLc8KbgKqjoG2Y8UF3kXij4UWWLdk",
  "key17": "4et2JCUU8cArgaRGh1MR6sQrHUmLG13vNM65vpjcLHEViB2nsgzpMouE4jzqBHdBSHsQHNBpW873bBXRtqd2aTPe",
  "key18": "46MGrQkcvv36vaBkdEJqG2pL31FdiGFkrRJrn3vW8Avp5wqrfCRoy3beQ4DXiWNqpc7V3GV5SbtJjgkvysvP2b9y",
  "key19": "39X14W8AFSZ66K2dVCHRwjWverSshxrZCwNq6ghrpq3iBiZFieyCmV6WrFkReiMNS7mU479uUckfF8rmYCYFV3qf",
  "key20": "Wne8Pf7mTWajXXH2sCXRRYX9L383CoJzzep4e4q7ae5zSjqtvoxRdx1pSGrz3YzSXApoAAakLvzjwQvhJNqNvDq",
  "key21": "iPQPsP4mBdVDckK6kWkFyd6r5DEKP6ysj6WY54A3ScLisCRcd7KfWQXXxP4nyiz5ERFpgvbvMgYeJiaF8dcQMTo",
  "key22": "2PxNNQsQPatQFvDNn9gEsccaqEv7mVFVJdDmKXwHUSBwFoQaABgZMrtCphM5gdVvTJYKuET912DdcwhmAz8Enw7D",
  "key23": "2YqwQejYnfVdcc4eHoMK64v79BiZGGD4wxoyx7uEzmojqB288oC4k25mTvTZRQLbLVn3K6cYc4iCoh6eXHxA9oqE",
  "key24": "3v1AN2ddk3g5zUJ7GFNJvhYDMd62ozSevkoRjVrvCLGr3RTaMFUoPjfUXZRdZR4KysFx97FGEdS79ejd6NXhAYCK",
  "key25": "3ZEVFrgaFYyteVPVmQbVRn9UJSQtNZe9nvc6EfVntiZk9phTKRCq5SBNJgvczcb1GGb67KJNb7kb6U5wywdKb8ue",
  "key26": "2W6DgxtZq7yPAzjmjMF4tN6cY9yNgV2ka9M4ism3T7s1sn3gungmMXCtGjuf1aYDzC2E7sauqFPFqQFYLdCW8DZk",
  "key27": "4VwLR6PMwwSgkFgBnEV48x897Kv6H8kp84SQ3kaXYD4eMMytNFzS8rSNBwEZ1XwTzs2dWVGix7YaG87kPaX9Lnuf"
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
