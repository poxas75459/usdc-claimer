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
    "5ZLMzVjY24AehNhiFRv1PzFv4R2vzr9t5Zi4dgDkf71yAgBaqEH5uMKDxPAYZrQxQ8561faMnxJrrsAu3Pz1FeEb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2kZpRfrDBnM7KnX7iVAqYovHyF7Y3emBKKKKHifbCmV9UjBpis23R4tb3p3eUeSewCJaFmsSBW7tHmtySbTnGekC",
  "key1": "2ghMCAb5HS42eSEww538PGMKFXCdeFXCPPJ2Wt5y6EHtRHXC4kWzrh71utp6VNbUzosdmKKh1FVgVHxTsEDozwep",
  "key2": "3zRxmiWSdkDZQDP7Kten9eoAz8EVNv3HMQRumMvc48SdfaXnxnG6jT48szzSx7w3Fhax32BRtH8QJCSfwwj1eVQU",
  "key3": "akCvnLjNQxJtB8URz3VktRcbyjYKBRbuW2ZWDtMnwnf5sRsugjz2X67xhW8YChVRM8PfdfBpfAUwxQjvGfdDViM",
  "key4": "659s3hzfwSDZNSCeBf7Ajvzh953aJ9XZ2agZuyyKJNHiNQsjDneDe6sfxb2sqpnxzwEzdpxv3yhhJ2Ltfd8vReRT",
  "key5": "5piygktv1WeHiPJ6cne8FkDqnYHQjasEs2HLfiJjTvjCuubhTuf227RwShizdKtfQXbXM71SLp7GTkwUGfZGV72w",
  "key6": "5pLPZSsSbuV3zfvaz9rSBCudqa5kWwtn4Rpvb7QX5ZPAjTqwt1wC9LrBWuZNXrSH6GnpNLs3hZWSrby1EzBVLhH3",
  "key7": "2F6SzpakyX619KeJ6w6pKZtf6Rx6PWAapY9pgzjDbsQdwRHuapTzAEwzmh3sgZyYT8LUdjFtcH64sBotWvXU5yRQ",
  "key8": "3WrHoXarKGmuf6S9HaQDwHvyThnFfm6BaYu9d3KzuP8hia2TLXSLuswaY7xQ3qDQCURCkdq31V1vkBU4Ghd9pKoM",
  "key9": "2BLkYH8iTSmLwJS9MbVKrYWAPSGrDBx14f18tAv78QzTTmaFDJvDtWeU6daMHHP9C6np2JfHynytNJF4zY2G2Qaq",
  "key10": "5HxKydva9K8ZG6RWhEmveUo5ccXdLRHxt7NT6b5PmsP6X3doTyzDhUJDpogr9RGkHiHdxN3zLqT9N1ZWbgMFQs4o",
  "key11": "4CpuB5kq1uTUXUr9ieSHD7ekoGguChP6DJP3mNccSrAqXaEU5DRBHzuEdzG4AeF8tHWz7Rv3BTbrWiAmHVfXTHH6",
  "key12": "3xaTrYzjpZVfoLXxQCzKdtyHBgL33ptQHteFdz3KGS7PXpKuEHko2Z6fJ4ZJMxQGmtbmpVH3SotAan5YZfn2RojA",
  "key13": "3BFTmV48LGbnaNEDr2AppZefQVezigPFX8S15e5YSB5ibzicMHc5484S5xjNDGFFSfFqD8Vhw4zBzRdW6PmkXdaQ",
  "key14": "51E3jx8wVbcE2F6pnYqvMfwoTiJuResMPxqdj3WVAkX2q2Q8xMjRvz1YbsuaeVjpy7WLkLVYY38GBmLn8pNkKsMC",
  "key15": "3Z6Z8qt3JMh4FXWyTE7tmNJnsjthdDSKhkz5z4j3WzYh4jubwRb38j1aKZ3wpaNucF2LUjisS2tqH7nb4vJd9oSn",
  "key16": "2Qw14Zf9RfsM2RYTKTLibKYL1T5hZvJLAFauWBa4GKUVwHgw7jBGfAuwDXiVV7aGCfsRva8pxjr98tKBChFmd8ZQ",
  "key17": "2XfeJbUpQBZE3vEk9nDjeccE4XHXqVtVXuEFg8hNqzUY5cCWXyLxyQtVDmCSkFVzTKMQeC5dShTpfjrDB77bSbAf",
  "key18": "3cdyYBmSdXbWi3N4tWZL3obToCakDSSuhae1g4bcRY6wrPKW9QxfDwWCHKM6FjyDHD3poBmrNjkBQijMauLBA2uj",
  "key19": "4fnYeKrdnRjdnYhU98kXf8sfD2ZTLbP5sh3KWt3h3hRw9GphajkuQMb28uMMunmvujTAG5zkCx9ojuqq4TfRhkD8",
  "key20": "42j8K9o8ChHrxrsRL95seibZQSuzG5QMEUtH5ihd9Swkgva8zbXKEqQjJq363iiq45PFDz7iaovSNH7jDK2qLKSQ",
  "key21": "55CteVKYGszAiEZ2mUjdhvs7MBUTEZ1SpdyxzBGRdubBBkSkpsjki5aUcQUfjyZzZ8xd8u9KmMcjXNDG6iTu7qfY",
  "key22": "4V75LgNEyXKgXQB68UjWDbBZ9iRJmpVuoLd7HPqEvSm9qbz5ChCgh9TihuArJqTUpW7m14idt6nf53c36fhhHoBP",
  "key23": "59osQxFxBH3MT9o9AfMDxXfxgRMZFN1YWp7kZ327XUVyY1strWCfG46m9QzD8BDXjJLSDaGanTPuMgajLYsfGW7j",
  "key24": "3UdrPuuG5LXnzVg3UzN2R3kgMjUwzguM1KqT6DZNFppjTvvFHEAuAYw2HUNavMUvD2CUDTBydwn1E2pUyugQAMbD",
  "key25": "4AMc8jPzVjYfC8MDvJK9zY7EwrLr7PpXRkQ3qCkZgQkqZJDBStuJ5JYwKvgBnffGUoU268X11m53dfJR7SW23BjY",
  "key26": "45Q7htzSaS7T4LxZF7623vAe7yvEWo4HtFd6wVfAfPdNL6dN9ExYLzAZPmvT6Qou81fBDeUbtzPQzVdsvsyBuA8m",
  "key27": "5m6MgGvZ4xZkLqWRRiAEeQXyshc8gRbgGStmEVimQmkycNLxhbduAufU1XeA1FEbAjU18etiSVxcSRNvMs2cCrUA",
  "key28": "4T5MEWihN3NwB39aproDPHntitcGCJgzLZka8dFN7gUHH2MVPYagbqYYnPi4xT2iBHY4bKKHYVFdCjCPN5Sicpz3",
  "key29": "wM8gJPzwRv21Vh6ABTjAjauFGkf8U1ACLjun6yNLh6oZM9YSNJ7EvpRG5xdTVxixSXbamUanFfoQV9rH82wuxEw",
  "key30": "4DYHxnW6xwrYL37e1FAt7Ab9w7DNFYYx3TzpjhZNpst1hd3fW2b3Xq1xWUsF7Ke6J5RJ7xCB5hohK4bHv1ok2jZB",
  "key31": "3BXDQzTX1xK5dPb7PyiwHA7WcvYwo1XCP1vE9pKNT2oFtwRZFHLrVtg6r6oaF9bAGcsg6T3y2Vodzx5JmH3RDm5p",
  "key32": "34cFCfdNNen8mt5ELEynUsiYbLMJbxLgpwn1cvipQKCW2R98qD5PjQiPduhJWhwkLAjTmxtcdoRd1LmwTAuLWco9",
  "key33": "5v9ZXNbfVyTEkSkXj5Tf5mAsSSieNxNgN4xHDspadmHNbLEAwZ11PKgbF7AsFvCxqvUC1pcnp5YV6wX61MerfDia",
  "key34": "gPvPqR9BZTsR8SkwfKmrfDpoNRjnHmkrPyv6CXb2P5HT1VuRxR4GvRBz6URSKF1nmkNFWi26WjeVzXSBy5QrHky"
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
