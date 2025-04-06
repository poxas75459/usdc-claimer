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
    "3QovHkxJSHLo8dJ2hSL6QWNiuvSeieFEcoPwLsyo6VjFQWna1Jp8fZKqYvoDgpkj8FQuqP5X6KJrEYt3u2ZU2WMi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4aVC87yoG8JTB7s7fMK2xF4C5nuZJj2cuh1XiRAkGC16v68RxEqwDtrmuuKcaki21Dzh14kqhoCShENCiq1XL2K",
  "key1": "3WZcdoEEes1K2rfoDDNun6EWQsFTosc6gyBcyVWWHdrMRWn3wBfPvVi9H4wCtYZhqoF1DGq8fWyVrjmEFW8U9tEV",
  "key2": "4XNzH8LzHsjNB2k39SoBRdGxZjiEMGDmVUKs4us62hQxuyAgW8gdauXquHNKjCKoWQGNxjSKxFjXkH6HQvBnyTJ5",
  "key3": "2d8jX97iirQzMhrBqYkAkKTSK6XYDyCXNaJ9VBDFe54Rxyf4itSnDDs16yeaaVsqsyieTae7Fssna6y98Fdbpqnm",
  "key4": "3u2TMdGRXQ8tX3RwA6PyXHHdKb4Z5zwFJdgyzVHeswSiPfeoyRwyK1FAmHRoPi29fSnXwvyMP73a34do3TrQY6cn",
  "key5": "4KPETfC9gaWMZhMYwKS6TgxT3xYk4SZ2CsggRjh226dhYsb1ojz46RGrVXN7p3vApvW3ysjz8SWUJ2ZbvM2VwK3N",
  "key6": "5V3HjTueopiJ272T75oCEBV1VV6zh5372j99GEzcnfToaJgpfRRkAiFuqKWfwUhckAfbmARJRG34XUy5DPv91oxS",
  "key7": "4gCe5CsLNTDLx8ZkSm7e2mNd2fuqJFEC5jc6fKQbQ9ZK3ThPbWjJtXQbV5KPkhbfdZUpenpPiYrDrZrZknVZzviR",
  "key8": "4JWkuGFJufLmMHV82mJWfzE7HcSFUvRjF2PDv17w1f7m8bkTxHs5vfTT5gLT3fsMUHaaFiPS1yzByFFgSndWh5YC",
  "key9": "BkUgcj9beJcCn6HEDxDu3quLRv8su6eruGVNapqcCLM7xfvB9pr2E1ZboaxtdEAvQmGaFkjWxpPtpx1B5ujKX8a",
  "key10": "53juT1zEJ2PqZyG2cVkcLDsRWe2QX4iWreQcd4CQQHs8dd4RgKGAjqyNx41PgEFQJsUNfHiBwqn6F5pdU8mxdey1",
  "key11": "4hY12FfUFRfCZFhkh7hFPUcgST97prKJRG1qbCn312dUyNZesgQnqaZB6YVULNAxEFqMTaAx2Dx7RuURyqG4NtVP",
  "key12": "5dVWBFMMPAMRRT888yKN8eyQZqqezBLUpft11dr9jCmNS8FPqvAmS9KkES5qmYtQozzrDXjJ7LS3eF8vjWmJhrP7",
  "key13": "4RS7N4nEnmjcRh9G9aQNPzrS95rGCKSNuZzzNqVqhjhUGkdtU8Kou8dDpBue5BEdhTkHvcKbR6uGQ18cQFFXutu3",
  "key14": "4rraXHZpNNxf3fhnUu6aw9krVkoD1h3MY1WLjcYgCgMCZmeTLKhWmJUdGW1W27vTBVF8qXzawFUS2Xwxd4TYSNqb",
  "key15": "39RcyHRm5jUz22KgyHwUmwdh5QSn9REYiv4GSGFX2tpq6Ehg9WzDanGY3NT2fk6pEAxdQkLuQTTKq1KzYbifVvdL",
  "key16": "3K43rdxHpjHr1aBSk7YtpMpp925tR98tSMhq331PhP5YGGo9LTrhJhg6RbgxWuANn24P8FqAvxmery4bjp7xd7TX",
  "key17": "2dYZbtM6S6mrP1hXQq1PxRMMUnf9d8fk8YEGHa99K1YigVG66zbAZLb1ibNEC9NcgUDcH9zwVtD1JDdmwhLVgniF",
  "key18": "4h2LYFk6BEafz2ReC5nCHLsa6BX6MgX9rxarJZKER1RbpfANVDP8aBLx7jPLfwnkukzKCWszoNRtbvaK1MxrC4cF",
  "key19": "667yPztzUF4uLWQSEz6GAXy3q8ZN6bc7jfTmLqX8wmeNphekmnsPXhaXeb71eFRntrSfhinDa8KcUMuWpgaJUX5f",
  "key20": "5SD6YczPCJXtJvurRjKJzLA43aaCS8NWjuayRmUR8M8McqxNtczjePLKbUwUFmeKLGgQ3wC8PZfdgVHrSt56SPVA",
  "key21": "2sitaoEW8w3ttvezQ6WFD9SXz2exSchbJPg9rQBZWAE4RuJYQMoS6W2hshg3PXVixbEbRgrr5iJD86Q3nbxB3QXD",
  "key22": "3Th2f9a82wvbA3WBXNZUsSzDTJeecm29p4gt6vcywMVghdy3dsL5EXGEaKvGkNruszV7V4jx8haZfEJyB4L5gxYq",
  "key23": "25vyvSnAv8AqfP97kRcUJ634KTDLbTak2q1wUsL7h8aaNLbLVLSCubTp3RBf9Gi7PzhknuyY9iSwq8bNxCHjUFtk",
  "key24": "VzVm6GTVYdGFEJnWaZdP1CXP4b1T5YFVs3gjfYZZDqBxsvKaG9UioRFVCzXGdajLprGMbnEvyFuHtTtYYsY8HFx",
  "key25": "2EecANv8eda7Ebs44TDE6aowwuNQ2VmqJKSNEMBWhJMzhtpRg2GUDzgfFWCGqDxDwFiV1pZ3xdztjvWEvhcMYeoU",
  "key26": "4LhCNP8qyp1Yafzyaq7xZPpnroz5PhQwZDv7QkS6XDZEhkyGq81f2Py5pUDnsTLACXXEPVdBBQiJk98UhGsrM6fK",
  "key27": "5GSZsmXkf2fu7765WySbi2qnjGy2ry4VtWKHTt6iACGa6GowhjT1dEiAazGnR4PH4YEPTZdDfJYbVqs8dHkrji3w",
  "key28": "4XaYbnbfTUSgre7oH1sjtwLjf3cYrzr92Yq4zuVoWi1RuQw3aWHCCZR7GaMTQk8UjyZJZrYneeFaGcguRAbinHJ4",
  "key29": "2TNVh3W6r6RdcbYbGfgPC9smnhb6i4WbDg1SWWk4VwVc9A24QoxZDab6VALmLJXF2M77hmGWE6g3DtVoPtAHqAXS",
  "key30": "5irNoBB77Vsukk3HUGWHXXaMPrb1fPiE2ERFuv3A5srAxZ7GWZp1rgvhb7HumuFXp51MvmSZ1XzraWQTZVSZyiyT",
  "key31": "5tfxDf8bsak7MTMDcVRkjYmFYZzzpmSNppe4AjYMsyauApFub54HxgXfKfpf83tvJTaC2phVUatmgJ7iAXBDiQuQ",
  "key32": "2oykoHfd7QU7gBAhGqxWyo15CuT1L15gw84PQQBtyL8vKkmsXdxmAkURFJ81eTLxXVNyikojn4PzxBDMXEkDba2X",
  "key33": "5snvXWfBZv6mnhmLt2Ywcy1LrRxAjhcQdZreK8mubrCiJ3d6HBH7RmdYYNHeKWDtzkWa39fCbd6YaUM8shXPaJxe",
  "key34": "4W2YQBSQR16kbPSshFQ2ZqjgKwiPcGrLBR7kRfwZ9jpcnSnvcaRxdBwi6BzqmUQ9ayK8CNXejCJqSPjSkgTydSyR",
  "key35": "4jsQPuYQpaCddWrqiMLKFT5Qk9YEBFPRKKoZc2JYxpymhb3LwETjjhTMQXMHE3hARw3uuT8usj2tP6gFEVHTvFVp",
  "key36": "2VW1Xbk4dNAUYtApiBHtXp78j4382h5Kw2VxHZa5ZEeihX3Zjrq7LVX71bjLYcbHkNM61tAJxrkTHsDw7ENDZKd8",
  "key37": "3WS2DMawCGmckiyorNx6QdJzuPGaWHAFA6yfzzq6HzkXicrgvPBPnktNFYhaoUehgfQyjooHzLLwk8gpwPbNxUfh",
  "key38": "bbstPWvQXJopu3tQL7qJSs7BGh89wHdg8aoS6ErgpQfEGpHyEitQRfpz9Y6BxhNNd4o7vx9BEm1LrdZ5Dj591q6",
  "key39": "pNfNX3t4R5ke4c1FZKBHoUqKXEhZQD8ETVYZyxT5FixdathCRJnWqqMhG7XyrsyipP6ubnSYRJVCBpKfdbEZ5PX",
  "key40": "4GJ4YTXFVNDotkAcXujqKjb181e68yhoFovAKARboJm3roWQo6PFA7gXYHZ67DePM29ckVYutj48BiALMyynKEXD"
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
