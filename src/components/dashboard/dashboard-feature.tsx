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
    "5xZ1a339WfKWBNoQFzGtaT1MrCFVMXao359DM6TaDyKGVSX7zspnFTwmcRqKJZdQqYKNp1CNtZJYubgiCAPaz75M"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5gA2piEBs5a5oY8AzP2onVQQ83FH9GHZh4gv1aGb6fLn2B78Ds859jnnKX9ERSr8nBUz9wNkkogdcq97wExPAmPQ",
  "key1": "5bko93F7bzAC9azuyZSNbdrVwg3Ss1sCLrYdgCVSpsypdAKSEugFNv7Y4BBB1Xzu6fie3Yh76H6ot428dnF8n8TJ",
  "key2": "4JYmUe4fk6TmzZ6aTch5Ey7jUmzmpRFwygFdyL1AksKbTYpH9DURsn78aLoy2oFiNQMac4fbWk5jg7zDYcu1c44w",
  "key3": "44q1XHcEQpAaTVQc1SbB1eQDhfxzJeeeRkirie652ArG9itFEUJR3XKJfpw1ynSgcwHwSMdbdQwaYHq27TEhPda8",
  "key4": "2Ew1rHa4Mn4KadtTyBTWy7cohanVAakqocSG749ZEnWJhNw1B6v7qeb3KGT2GVEajqfP91ypD2t6aB5ZhEtTyRie",
  "key5": "4qBfwc67DHL5wAD8xrcuxAsstepzgnDrjWQ7jKUseJ1dehRFvRQKvzAXTD1vYwmiC6zdqsrQojAQW31b6yX1tWKc",
  "key6": "3UYzuGN9jJm6rs9LSyLMRZAYp1WhNsGQvyQko1dRaz6M8CvsUcy55HLYHHQpky3uvZmwaLNNc6tdEhtgjSJM5eTJ",
  "key7": "3gbqsko3rWB6NYBXToAJLMU4HqgvK47E5SjhUpGofbe4oGnFjuJPxSJkRfKnq2L96E2fge6op5YjP3uEJgkrZCBU",
  "key8": "eSJrXcVqJiuSyQrwGGHQUwWVWYtPn9U91aF9d5f1DZwtbsTRmhqb5vcpASUCZ8uHnLKuvSqqNHrxFhPbMfm9mNK",
  "key9": "5ZGfUR8xemdSdhELos7ezb96WE6WXYuGCDQnTdfUupjAVabStAfVpbg6KumwfMWoTcBXoHhQVweTEvCx94csEwzk",
  "key10": "4RwjMdqcr3d3dhz2hCqcGp33XP3vdWqpeeumh9usauUth24Azvyrq5vCbyMEsXafi33nZeUSUowUNGgwZHcYWbM",
  "key11": "3J3xyFFGGjyQfC5mbWp3tHFoGF3ozraAEvM3C9muXcJ3miiCXy9RgDmBueo6q6kpD1BXBLfEk7iofbtskKRgp1VQ",
  "key12": "5ovV9tQodgmg7wYbDuzgrBRxFJ977HYePuviuGstnM1B2hj7vuRKvrWrTJQua4Lk9RDJxmztW5TpfjSr61vQN5g5",
  "key13": "4kth7RD4f5bKGRG8Hr8BsqFyXVAMuAGA42ELPz3peXByGaP1rkScTt4RuYrD59sDqbDdbuAPjNcMAUbgTm5KL8Vh",
  "key14": "4mTYAVa2pKBJRh61sGjkWGWJn3D8JUZ41dc5WiEDM7LsVnU5xdkTdWTrYynvkdnphvxpUMZxjokDsFzaKj2rsBJG",
  "key15": "3chK9RdAGhmZiDYX5QrjckD963PKzuNYTdSjjojicNwf8MP7CwPpHWnz2uasCEM8fHt2xHu41291da1M4e8AZ1n2",
  "key16": "Fdt7hQeWPYRbZpnvM3GNQ8e2ajLMvVmTtNV5B1NtiUqyWJMHiw8tuDdpNEGY24Hv5aPt7aVk5Hs1gaTXYPjx62f",
  "key17": "U6zDhv1Hj8NWLCfniVYHrz2xrx1STADuShxuThYi8ked72SRr1JdAuvgZibhrrW8fQBsyVD6wcfGL3ru3p33tJL",
  "key18": "22t3GQor2EdEahdAGekvx1GN9fJCCYWCzQUQMFf1TrHXAE1YMHej4g1VGsiz7FuYQZRq92YGbXnnBPkpD68vnF6Z",
  "key19": "31V664noWZLHkBZecjNYTVVTVpnKfztVXb34PUQZEL8DzUCZAj2EHMVkQXK5fMT1fcKcuhXMr6or3qq7ZDERyPSW",
  "key20": "4dMr2X2SaZ7cEh8advjyP3DhbPJwVyFiJ1GMMkrXAKvnJtgR43akCk3D5SGtAVtEP4Si8txZ5Y8hzG2BeNiVh2CF",
  "key21": "Tq2qp64vcRtqD5dnVscJG5ut2VRnLdpYrkRKRvYApSkZ2rPuCjKmXDMy3PzTLL4cCL1MdrxgfcLBbMwuNTjSm4B",
  "key22": "2GLyrQhxGxMM6fFfNWHPPcPdApHea4JiLcArkUzJeWxneZdmcTMHBACtGjXNje3YS67QxJyTvJAzsEaBihtQt28k",
  "key23": "338CzLdWs4NJytvym5pdLNfrpD3BJ5t7rYuFkzLNWAg3uvh6coHFGCo7rnsYEdap9rpDaEAES74R89cJNtYCnkbp",
  "key24": "5ssFTnEUS9zriUEh3mduu9TBEFyzcfe6A6yAzrSikRgxPyGFZFdqXpDHM8eE6938KDs2XUvM6hz272yyFjf91kqX",
  "key25": "4YLqjiZQNUPaLm8RKnxaeq9N9ZMzhUCR1crHLcoCHehieuMVQQLiZX1p9igvppigfscv2gusuUiL7ai8o7EEA9Yk",
  "key26": "35Gi3w4jQ7Qp1ExcBH9RzfBRuUEg7iBJuq1EQuLuoawdpqYvekmtpkkkqVf5bGpa8gfrqpbp6zneNHBY2joSwZKA",
  "key27": "8VoPAvv6VikTjiFryGT2uc53Sczo2f8z5KTtqbcgeqFMeTWQ74ZSh9TLGHYQYGBepTmzYsNgqHMpRXBdcLznnoG",
  "key28": "5jPf3Bk1bKGmbL1w3FKVsZqbhLHgrg7Mbja4hnKqrKtQk1bf8ZCCFvX2xA54CSDbiF1M1UyrRYinhm9hmFUKiRcd",
  "key29": "377wy5cv3ggUnpNk6sbf6V3KnfRFgd2ZDwhLiNoXgxiQW4DQ3biJXvYZhzd2AGi3mZNfPkKGDGgGApqfc2GTUP19",
  "key30": "Np4K4mgN9rT1UTUEJH8zSp8NDctZFEqnZ9T9F6jfwEsCP34XkNRuA3hJH9qJiCwUQnVrVS4AZ1nDY3CxWtALyeg",
  "key31": "hZoWYk3ZmyMXoJUfFgirJEzbDgnJLNRR1pFTz8yKM921RtQMsW7X1WuC8699xQjAqkZLa9yyNohnuXxYKcoS2Q3",
  "key32": "jnit8Z85kHBarh1jYEMxMDUQYN6xNNyeKeX2SQSTd9qMT77KXhJ3RXZj82PZvPedd6A25ednSmpAQ27iNNqrxvB",
  "key33": "2LT5YAEBaYnYfAgGn1iYR7uAFC2qt3rrUcLRWq9Ev4NAoTyoTqZpiS8BbP53qTxyE96dE5ENZwFn9PgpPpyKqxMh",
  "key34": "4hrfXUxYCcb2f3jUzn67TimEvCtoaX9vZYndHhTXBTuW5vpzLR2UkYAEmTDb6AVCeNpfdQkDjWRu96BJjEfV8vYX",
  "key35": "54wxcTnKSy6gKaxTjvNNQC1Hq9qThqMYG2rKrTXP6FrmAMdYzTLY76Q4pziC35EPSa1zVYCtbtF4cVSQ581naVNP",
  "key36": "2NG67uYy5Agb2HcYoJpeF86zyMiKC9k75Z8t25pgDDAoibJMtwoMDbbEjh8USGjiMKLvUHw9Wssh3M7Yxm5N1VbK",
  "key37": "5XvGEgYMpqceQPqJpJyYCs9HKf7pWJRasz8RLyYzYZqae51o1nVo5FE5jNyan5uNCW8P7UxFLTKYXCwvBBVsBbZX",
  "key38": "38Z67Phx7XPjXcJBBEct1C8q6fHZitwVrWrEWXTuCwRTWc4G9DDdkJ3nUCdQFK9s74X5fPeT6uKH84vJNkhxFByn",
  "key39": "2XFM8NHKU6MJ579Re11jfRAKkKqEqZyNt8SndDCafbRR292iiooggdCLy1JVQ52nCPFAEHL7WFrUAQjMWSGrANto",
  "key40": "38F4iijTWNxLG17DJ3fxWcciMRr4mr7hLMYZttKtjBdVs352mHZcFo9uRLw6rZUFi1Pez8LRhzw5zRmqfTWgno9U"
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
