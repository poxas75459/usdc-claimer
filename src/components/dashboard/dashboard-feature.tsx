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
    "5ZBgnV3rdL6AGgRKQkgGES5j6vrGqipsFRCU42B1rcHe6ThvQUGfKFiJdCYdUdEs6vDjmgNykFWF2HWgpctg4ABF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5wTxn8vCZhH5J1cX1SrtyHV6QmnFHZASKwGRBxg1Nsp1BjzMrd42AKNQqS43rQEMG8cNSZHFjEiqzByfC6ybDUHA",
  "key1": "5ykgMZ3xqurQPYWA8QEQeRxeJbDSwRTrU2Emp2pQQjpwU9cqyZACE86JiKaRN6YFSMoTjqKzwqYcX95trpkXC8es",
  "key2": "3nC6ixmYnreX5DpEFrsFG3o8eND8Fc3wvPuiCiXazF9X6sCrQyQurjPAVkhrbGiDmj9TTA2yiGLkYNWGkTCottsb",
  "key3": "5vLiJWwjARHSg28ScGgf1iJEYCXg4CLPSwAzX5ogu431pWFf6iwZgierCBdArwZSDneDZKXZeJyttU6jET3b3eT7",
  "key4": "RwY2tavd4uDCwnk9GbW1iArp8RMrFgVbJZuoUL8UtB5iNzJfwCM1NTCqkKfuuFezTYi6R578V5KdTAigFCfWe6q",
  "key5": "3TqooCWLRs3cQ8WjZq9yHPqtzpaZMzpkLQrxWwxvbL46x685iXD3SKaZwUQUFkMhKRsZt5uJQn6MVTAYqUnC6nWA",
  "key6": "25gFrwbyhiNbZQqioXfGX5hNuavt7FRSHcsaze2499ZmpmAviVRV4LnJA6zicieBUxBoJ14k7EZ6mJA9TYbsa6k8",
  "key7": "ZtmyPZc4eqZX9TvrWgP7VqmnWCicoPjWGxDTXzaUxPPsMvUoJ7XTT4AgrXMDrHHYAUhnjxspW3DMH4TYFzz668A",
  "key8": "2KoGZPNczgS6n7RSaH1wBsQJ8HsgjVWAk3NTtQnv4tttpdRUofbFDQYVv2Uq2whuWBPQhgeYx6zKAZHRRTx7BsY2",
  "key9": "XTPFYntHisiGbVfsWzGjcXBRuu9RQ4dBdg29nQ5bQ622LzpBxcUdjVBYmW1Dqbk14z6ycyPtgtTu4dkQgYyAdiw",
  "key10": "469bQL8dkpKXQ68REtxLtnzdCgasjuw62ZSf6Eh13BMKdoA2NTuxSKSFY9GLte35ro7fwGy1urryrSbbt6MszynN",
  "key11": "3UbYh3Fh2R4i3NgtmncbPsU7SVTo2eEjbxkviiUFkpecXqs8uLJj7czSwo5mJdr2A2pHTW59C18wBdYqyUh5jehb",
  "key12": "2mTFLBqUUYZdaHQALy3PGwAGvyH9TyeHFT9HS4Ppd6HY6Ly7nGKgQY2GQE4o4mFb7xVnbxEfXAzruRHW2zkK2afB",
  "key13": "2UQiRpweiV2xQui3MWBDZVWanmo4Mh7fNBrhPxya7SBnXLyCeqPLZZH6siDf7ZyGPduAg2LrCcXr4GrBgjAPjLcK",
  "key14": "5fBtACtUZmT17VBeCHsPTYvjvYogZb6LxPDrXNsN7FH1dqnzDQo5gMqdp5hTAiR1gKLVkCSYfFsuwFaaxbm2BgsD",
  "key15": "5UVGUFfraCi7a2e5v6ArTY3ywwaXGWrJPn8fH8Sh5617d2XzKKjj19Z5egxmv7mow6R2BqJcKjGZjnJWTVoJQJJN",
  "key16": "Razem5qUGuY2fwvmkEiFoc4xYYT9UNKzUbWztA3njEwHtw64KK1iAkpboJcNVyHqUvTsxKLNnqypGKrFGLdEcxE",
  "key17": "3BWir3vJ4bLnuiw6XHzrnm1CYssNskKJXvSUnmaHo7RULeiRmzbfY3kKEamssExC7vBPHcJdShdppk7xc6XKVSPG",
  "key18": "5GjZXezzyQh8VbBVRdM2oerxgdukAx4UzWiSQVE9gaMcF2JVR4jkPEzuthvnJN7q6f2ZDSht4YHiiEPLQHqC2pDe",
  "key19": "28w6CDY69PNwuTYN4xpRNp3qsi8msPL9DmRRnHoXhpG7nUvBye1rqqB6M88nb5txpPm5ZMoz7i9R7emtfcPSd4TB",
  "key20": "VCaVfXUDwd156BH6cq3k1sT5yridRkfj9pSSaXMN9xx3qvdvvYyvFzWKpshW46NKxAAtAaG2XkdbE6Pq4KcWTv8",
  "key21": "RpyjAwHiDzqtAtA8TiETD9rNGYW7tZTLtLZxcXU9nYJLo8iM21dKqUDVfzoQehre3PJus4ELr9w9mvktG4F3acT",
  "key22": "3sgLyrhhKe5Qc3er5r3jpqPTWPz2EXP4ETszomRfsaaGMWiUdUFdx2Rosxszx7vXb9DPrrrhtk9v1B2ZZkkE11jj",
  "key23": "kGMHwHcq9ngUff262KxuMRnLYRyiUr2KhWAYsd3jopM6HLF87KjBeRzXDb3zUEySuXLosJii64xxmeUbeJduW4H",
  "key24": "1nzfSBqUyxfCxvCeF7NX9C13e4sY1owhW3TX4pXcRvM53Lkq7MQLo7CEKBCDq5FTJWrkRq23fmxEHFeayjyCCDh",
  "key25": "t8fW44ktXk9n65Z1PtnFA69kZ6GXcdhsyiFWb6gv9C997oWpeQMBQCR6188zrHXawzBxyfzxSyGhBm5qQQMAsUV",
  "key26": "3Au5NYTrLudz7J14PK9Mw3j2SUVQwSEFv7wzn2RZu6W2gEE3TBS4D84ajaEcDvvCKEVRFgwcW9MRF7QvLDLPimrp",
  "key27": "wYXLAQqGrBFJx8KxYKyaamoRYGwGHjooJbMgkm1L6eo46YtuW4PBXE2CHHCJZCgtNRcVcmSnpKjqjaSKudRRPSd",
  "key28": "2iJGzxPrUnEC6jueS929cWQqQV4BvUdtkweWyJLkWjQggtadBFeTrFB4i5843VAfMbwJZPnLHzcUWMWydgkzWU7d",
  "key29": "exJ5FAjAWsm72qu13vn7T74oaoouPvSWg2bL9hL94Hy61vjgBBYUqKzZr9H5a41T3HaiVpNuv9bD9sehWP6Vx8Z",
  "key30": "4rQzDR26xptYB8tQJQ1smdgKkyg7QS9nagjEcNs3Edx4vdtbtaHHqZXNCNyG6ni82CgYTATPnFyqZcdL5sCRhDDz",
  "key31": "bqiDwd1VLF5iRt6Md4P1UcDmurhVJiKeD8LF9ytycWWqqEAjawhyMGuJbiGVA46kUjkiFBHGHr3merXo3CEKtEA",
  "key32": "59kFtTVoYF3BisDmaY2TPDeN41fsgRTiF58T8vKCqJy1j7W9pkP35N1y9Ph86phtBy3BZLefQQAbMdCGgT7vSmt2",
  "key33": "5ebfhEd7EcdPiTFa1KvAe7sXLNRKwg6VAfpqh8RTiKtuBGWpf5x3LNdWHvvwcQfthcC2gVQdfgq6gsW7vvFdruFV"
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
