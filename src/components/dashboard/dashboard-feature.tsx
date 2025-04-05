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
    "zS2MQTNd8JvE74oBXygCo9T7836vtYLcv18h9hrojCy5AZAgqQdfx7KL5EUcuCPPN17MxMB2hhTS7yMXezJ6sjx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3hYMcBTRCkBM9bzKa7yJSDmCZvxVmPnqMpDis6NbLtFgR56TNwX14mTqZVBiFUY2oV9npiY2t7sje6gyqd9tHzAe",
  "key1": "4UNYb7iFY16FbBsPLdeLqxoJQ8Mt3BaYpsEiGfYW7YwUwRoVVS9hrj4gWK91VSjHa9cRLZSmFU52CAbckBG8fMX1",
  "key2": "5aj94y1fQu6cRGfVFeHY5mFAakKLsaAcVwCNbDdu8Yod5dnN5mseStRVrw5YZwmpgYWbxMgSxe7domHtFPxgN6Pv",
  "key3": "vqvUCFJz6chquW2dqjM4Xoiojbr3X9XUNBmEjFsS3VufEqdKyR381BAHMMRZPtG6f4JnijX4BrbGxMYwrf4CkTU",
  "key4": "5XpH8bHKTx26wjW6aVpwRHhr6RG43yCK6UfgVP2kcjbMwCER1J61KxcFqoCfzx2zbJe8ZY85dZD1JxWZcniNJXUe",
  "key5": "28Y2NvyHV3qNntSyVqpE1xeCCpDyLq46PNJePoRju4YeJNQTdQHiSHKHQZeGh9vhTmHVsXewQ48QkJL3T8w5xxbX",
  "key6": "4H6mnVjb2EcQ6bf5vNZfAfiifCdcV6hKAzVbCrTfbyRaDLboSVCLfxzGp6kdrzo3Ruc4QT46DV7oX7zZGN9H93rt",
  "key7": "356Dr7oUxUGnPx37VAKkYKVkhBMSLZLR5rDEiopGpcNFuBwq18ZFouu5h7GWrADDgXkak69Xbz3PqUUwzqP3xRQN",
  "key8": "iPZGd3Z2whx8p3ceyafoAHa7FRYGabggCbqVg7kytLSDfFFzsL4vAaZxm2BMXUrvs3hX7E4dtPB9G8ZHuUCwMym",
  "key9": "2MWxsFqdNWPuoHfTeFhESLwtif1ka5obLv6H6iXntGArjAm6MfU7osuPN8fQGrScPuYzb6orqfdM5Qe92g2w2qcG",
  "key10": "3sbuMekc6XoesVKtpp7D7oknGRGVxBYKYnMwfTKcbuFVQ2VS7C3CpKnKsXNdvvsbjTLXNaG7Y86cV6JynUeNidvy",
  "key11": "2bJcbJJJZAENGn6Yqde4ZijJwszPrJGcWktPC1artde13vvQrRD1AdXnGsF8gbPfvDDrKVgZpQ19Z7KxhkSUKtkZ",
  "key12": "5gyGQfHZXW5eKnjxPjYviTfP3vJPDj1WQmENXXkwcDhKjE9VSxxBGb9uHTQZu9AoMtCLbiXDEpR5yJK26AjU5ae1",
  "key13": "gvDxK7v35z1aGC1GeUGcykjVWmsvsQRz6siyCycnWJF4ZjeRLvPuyrmCFW9D2gW4mLKVaCwpEnbdHHwbFYFA2kN",
  "key14": "2EvQu9KzbDchP7LwQ78gDGKagDxhC165k24cum8qGiwvGaEDpQsyxWKpaUTP7nergiwzJNhfcP6fmXsL4bv6LPFB",
  "key15": "3BZwmAp7jmdtdURXHANC2CXznWgeSKPJQ5VdK9L97XCBnQ9BzA4ydu9X92uFgzM7jrzua3jxYRDyzGfuG7jmtLve",
  "key16": "5h6gJqxbVnDRVc9Gwk4E5uUqupjZq8XCEcLf7QptjrH1Gj4HEPgtVvdBk3mU4U5P57kfS24XKjuzxyhpNUjXx8rh",
  "key17": "2tXjUu5rXdAtGmqNHwjj5iBtXJnNuhRRY8R19GDXVzyQHcQS72VPwPpwdDLF8E7wAb8UBrot64ugfvBEGAGUcG8Z",
  "key18": "5eV5wg3Xf6hFUiTFTcFzFTBEBR4Z8RaZZ8cFsTtQDrrbTTjM4nZNAkS7ST6fzNprWzzStR82qgHjZ61g8qzUNJTG",
  "key19": "2w5cDvGZgcb3AWtAZPY48YW9N4YJeVHN5w4C1S6z86PAr2hDmrEKtHUsvDRn2LtYLkFMeAHpsiYgDkgjpL2mYHXh",
  "key20": "5kqCAENsXHHMu1WR8qZnNwEddSmHQ3FNQvxJfEs4qDqtpm6j7f8chXfAwXFbdBKiogGU3gmtM7rKrsDWYv9ZvKrM",
  "key21": "2ExJqNPh7pJt97tUe1JbN6NTqR5CRFLrL44xfKxP9JQLJMB7GsHW42RNDAHV4V7VJqHMQVA75Ls37dAnqzHvmYAR",
  "key22": "21kMLVSYc9dZhW7yGgRaGPECTuD6TvDpuqNewdRbT4DGaAuMa9o24U1hDJ2oCp7aoWEiXXTkCHbany2ZRU7EcEVv",
  "key23": "4nVccX5PjDeMfda3UNPT2RUY62CqzuYfzjpgZf6GvM3DVVEmy9L68FqGcDoBHuNfKqn8chh5bnTgX9eHJu9rFA9m",
  "key24": "5P25meeDgjiVe1TUWKdvKke6CNhDj5KfcyMN7YFgha2U7bmLR8PuDP1tXfEWHkZdvw2AHxhe6YcpyRnDpdsVC3f7",
  "key25": "2dkGQs8YqSoANUM7aZ3rt4Zj5qq95fn5tPQnQRkP8KzoEMRCszD5C1ezh4E9xdaeV9Mu3KuxkefarM8KeNkEeuU4",
  "key26": "5iMDrs42GMnA6hF9E9CMBNAhig28dCSz8XQJNfiRoM4RVXS5Bk4ru4Muz55xoeKKi7RDJoyT8a3aagfTX9pthQBc",
  "key27": "H3pe4EhJjrN4Ty4Zstyj18qwPpFFv93gmpQwcvva7QuykX4khk4wFNkYzdHAwL2WpL5XasoYPx6bnUryxQREXez",
  "key28": "586a9RUXaziHPHMuQNrLMGBVPSyt7v7KSuFZKA5YPnxnn3T1M9EKPm8M9UdEzcGTtMoGMsrBY2p4Lu5JQqwKKyZJ",
  "key29": "2d5he9BMvVh2EVV27ekFmPduby1djqei6FTbe6VT3b6m9gh3xXpjrb99egumD1ckNFu1BauVEDSoz5Sk7rPEdYMQ",
  "key30": "kFwzmime7z3E3cJXT8CynP3Ez1LpcRe2CaRYuvLppGmAJs6VsRuBf61pVuYiVnzNjUVyL9JaouzfPrW1CzUzVcw",
  "key31": "38iS7W8uJbDx57oiEp26bWp9cfQjEWRpUdxUZGbntvRgffrVddd4rpT3KfPpWBG2k2xtPSCmKesUSZrZCmxvyL5Z",
  "key32": "3kiVSFu4bJT5qydJhk2VY6XHEDKEB6g8zaFP33MS1Du7dqSfmMFH6M3Q4LGqBaezLHD3esnuvaz3FhLMekgJUUyr",
  "key33": "3RuGBKu4XmR1GGJ9mnNgaYyju14ZZ3NJZMGyUsCYpURZaAUiNT43dmYfkuvM4gE6XmUV2oVVnPKiiuAhwpecp27g",
  "key34": "56oSCJHUkfcKH4cyBTa1jKqkmNTbjuRDcifcApr1gQd3R6pBP4Qm6z5asnKcy4LQpksA89SbfdY7LqgcxriKQmPm",
  "key35": "3gmQtTrERHdr22RMjhxcnDSqdgwGbke7siNhC7BNxjcqBhb63EnouTwNMMBEv6p6WisRbEbTfXABwD4u1pemxGQ8",
  "key36": "8JQrt3sKmkHKWAMszKACQhbduu4LZoTxgiKh9M3ckxVUhykiRjkvLKUUtYnikiZExZgAQmmW2Wx5uYwTEd9kzc8"
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
