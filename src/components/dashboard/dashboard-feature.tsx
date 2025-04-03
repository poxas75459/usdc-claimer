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
    "2QtSwJRmyMouPYuqe6Q43oXgLRp9wVbDqUCWKmbJmqykxmZusJ1ezD1uq6ufNw5XXL1H5CJp9DhG4GCGMmzQtKyq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "54S7BNzp2DK1xbGs3fqRRUAsZB6H2tnxSqqz9o1KpXfSGyJy4XgLPHJABNkxCjAVLug8R6AdwF7ET6TVu6WDghoS",
  "key1": "JTmHVtNFr4MFpsnSaw4xq3tdrKqLgYDvYFGhJcCZAA6sDWbSKmPbzeveLWs6pnKgw7X3Qx1Wrdfgyka6t8Dopmh",
  "key2": "3rWQE6CnEiTRLZsib1f2FxzKRSNGahpnodN5XbCkq6fZTSdkgT2bVbvmFCpLj4gtN2uV7Pz6ZxEpfzbDqNYTo183",
  "key3": "5zm1MqowUudErszuysjNSAZtLL7WEdTgFpyrDCbU7649ycCCTVTeAvaW1zYz5JvoXD6LFG2cKP4pcqdxf1jz2BRG",
  "key4": "5UJGiNNx49yV6u7qfHtdHmdXEPthif1AaTe9jzqAXP73kaovXPGwgrF1nsgZdPV5iSqCYLMkx1P4yrGqkaYtbaSf",
  "key5": "325LpFWfcGotJfw3B4vzSUvc5HtnqzePRcJemhKUMSAYgnJ1FA7EzvuEEW4i71w5M7zNg7W13uj6BueoAfGhrWL",
  "key6": "4YEpBBhWUfFFkmjpnRYcvDkydgsKpnaSK9SPrqb8mWLBaW8BwT4DkUTEFr75EnzM2Bi86bvnsoWpELXN2Ax77idj",
  "key7": "5Vdy81AYcjHUtsPTrJZH92jzpjSfoKD5iUma8DywfLzo2q7nCaTm7BJ8GKYNWuLWVSP7SJhGa83K8Ky1BCiXnJ9J",
  "key8": "3E9EBnoToki4fqN9FFe1GzXYoYZhNCYujU52TJUwdMwuCpr4UyVeGJ61368Vs3GcLHWAJrYkBGeVCBxQf8mcuKr1",
  "key9": "2d8c6NeLELBhZKuKV5BvK5ouFsJv3amE7D9vshFN7iELzJNQCYrm2wR3aoeNULj7MYahusPkGkntFDQbHvSUVgGk",
  "key10": "5jaqPBnkt1Eu9NNm63MtmBPJ25cUDVFCPC7NGD1e816zQ8dFSqHasyUgaHXLaEF94BwRXYUNNAEc8s9ux2rjHGhn",
  "key11": "2wV72aQeWQZw5tNKZAPjW9oPmQXLKpZgVWkkPSrz9P4E8WE7Ps8VjDC13Lc25VRYkhMoXowAig4a8eZqxpwABxLX",
  "key12": "3hqjBBpKDqmGPa3yU6LX7BBBpAt6zRyD9gfpMgNUGTKJHC3CoMNqEChrDNZC48nbGjjvs5BN4zbdUuk7mduJXHBG",
  "key13": "5GQ84iwKEPN2nJ71hxwgNgZwWXTGcL2dSzCPpqoDC97tmTnYTxRiaLmf6wTAynJR1S8imq5uLc3yHPfx4rCVqa7M",
  "key14": "4DiP9yz69JzZAb8RFGGSUKKDSsHhc5ApSY4rRGWyGMm6JaLsQFxztxuSdJDa8MMWCzpKutE37XKFYFDzPG43Fyjj",
  "key15": "2eybiL5M1CqUSWAb8ayaGtZjyiWynXuye9pxeREA3u8RxQ1u6WUnB4tfb17Jqtvj9F9vAmuMv9ZnKmpWZb4PFrAS",
  "key16": "5sgLM1WvC3dB92nAdAbXHA2f37KWiTZ4V173NnXvTPRaZbXoaHVmJEshgBoMSxc4inpo8Hme7W4EwESwjUhGqXfQ",
  "key17": "3wQMxn6Fj2zdCenhWmvCYmVYhuWSsdJTTrxQfery9dwc6Br54wGRQqbWEj9Nma2EHUUVtEL9wZ2VATgzNao1ism6",
  "key18": "67gzcqDgpxVNCd6K5Gj62RTE92CievTSrFVHBzZtUqAr1UsE6cckbZVW53hfuyjZXGJCufDQkYkcYSZY7WbRVAYE",
  "key19": "2bNHP4MZiqLUoeDBohJC3zScjL9fF9k1TcheQkACgbG8k8aiLjJQJ6RrmsVie5YN5Ubf18PbRG6CqKQCNkEhWvJk",
  "key20": "3m5mtQhcLEdkSAJ5CHqW4dHbq4Pz93d6nFLcBEJP6bKEjwsHrs7qNTrcffGtHqF1NUCfJsf2FrvMFFG1Mt7E9oL1",
  "key21": "3SgLdnvrWJiZjWmX3iYWisgT2gx5Cz5g2qFHBALSJqiqdF9riGT5tPsJvhaieTTsVEU7ce3vCQopFRfsDG2GLcTy",
  "key22": "vgrPA3x292wenNZB1QivCu5HsH7YnQh9FDPHM9ody8bxA32UcPCfA3fXFmN1icbTLDmxGPH4HpvGzSvnWHdt5Xh",
  "key23": "4dm4SMsQsi7i659eEzuE7dvMtcNFTxLvNxv95K1G5yL6f3NksBk7Ch3odFJL1FLfwtD1MookWmf7YU4JvaNa6YEv",
  "key24": "fPZxtcH22RSzUAbhZaCiaEnmr6BsTCgEF4PPurtjaNm4geNXc3hJHhpkRpwpMKL6PcWvyHJiCAZ3ZNjg3u2VwSH"
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
