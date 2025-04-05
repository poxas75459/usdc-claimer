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
    "fmHpLVdP3PMe5ohKVUc6fjY9Kjhq7gD9Z5hzqcuvFYCpo5oAxN4Sqyi7gfZC1QFvBwrYUrbWNzYK3H7d3Xp41x9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2CCtXgUsHj9UCWYNrRnfqLtQHCs92LhYSUssqbF1tUspJ3spVDnR7iEAhNY2tH4VfJJcbkRiiG5W11DTxJN8WWoJ",
  "key1": "2DbtiUeHa6xTgMCXhWJeTFisAoHg2BpGEbBNPTzF3P4RiShqzCUFjptN6o6FrdJuCgwGJk65vzNEj6yxiU9wNCTf",
  "key2": "3rNDnfHJPmRLDv47VMBJky4ZaZUsMymfJ28Ft1xAEPSfhsFJ3gtNvmyEs3yX6nwXtwoPpeLXgLAVAA45SszYrcNd",
  "key3": "2c6UDAZccY4H5hLf2HSBQZHRRYZ5Jp7i1eksm3boWmfsYKdPBkAnhWbKMXA2Wsfk3vzohkuT9siSvGjwvzEtakba",
  "key4": "2hPPm4NYwMtqLMYAk63yLT1e2CLTkmtKpVjVYVfrzQVrWebgxwg2RYjKftK6ushkFeXCkC7V7SoKWgzKncwzXn77",
  "key5": "4gzmCzd8rurBuAu3MwPU4qu6Xo2tvaL3gfM11Ea8Q3DrjQK1hvufE1DAWZHfxVWvL4VxBoRo5mSaq8VjyEreKouK",
  "key6": "3tMkZH1gbWxtjk3ndFVoneZoBFKkSTYb5vtqcydm5VjPzffDeg6XRcA8UcW1v63Hie7x633x3EWDHNJp5K78K3V2",
  "key7": "4NHu76yojrFBqFzhRL7G9Ar6HBqX9WHTcHqwToYWNgrnbUyXAMGs33k5iVujapkvRybnzhCSXVD5RkAezUNe5DJV",
  "key8": "yc6HETXst7osHU4bvaEd8J5yfWYKzmJn4Gk5nSVuEQoHwfVPPbVYRygwVBvodDMhXR4FtsqxDPH6qrqbo5nLP5j",
  "key9": "3D3oh7oy9hc9BoVnpXGT4L7YbNo9Ekb6CjmiLw25bem6yXsVXQurfKEph1sjdJktJ7ey86rXfnV7mCg2WMNxsPEb",
  "key10": "iKsatSUvwJ6BgFcc72FgtGzCEKxahcpuvgMwMxgp5wSFfa6ZfTczdSpppow2JB5oQWBDVcku7MX5MCMNJw3Bx5T",
  "key11": "JUSjDgCEVajWGyTKWLYsoXRJDfVU1AhBvcCsvpfEvxZx2y4oErKoTrWzU2m34f6myyLwV7VHp8SgejeTDvEVe3M",
  "key12": "ujY2ALcvfQbGqDUsNaWANLEoEjEVFhKv67yaqGvi5MVFvJCDZ2CmGkJ62bEYLX2Eg3XtmtBcWQocxCTHMfpuvG1",
  "key13": "2aLhN3gXTw4fjNt23cmkRD2aQorU8wXu7DDeLhKmhGGn4fmpAdsvkZNgbVLQdmo8VRWpK14VMCiD2YKUWoCJtCAn",
  "key14": "29zLNHkJxtnQzmpbMdNELPruc47TrktrmX3u3p2HJpTNko6LAP4LCW4tnixdF7MiuHHtcxwci6nre4xTNnjq4VEv",
  "key15": "4BRHK5QkHvBNJKHBZDSxnLCZCTzY9dskJ1C2HodYXBuvXtqKuFq2XQdavU3KgJaNXRBgMBFjFBo5a73npvx8GCtc",
  "key16": "5raGG28cQ1PhWLZ2wRE3sK1kunjdPZKQQcPdeU7p6rkq4oTP3CE13WtFynoEfRUY4xpdBHYy727NGmMGhPCec8sr",
  "key17": "23uhzMjpwFpeYrohdLzQrVExGdQi4Qojf3Scw7x2sqQmgewPkTPz1FabdrAXB62AqDZAZtDCieyUEaz4SnkfqRGR",
  "key18": "88xq7rWsx7M1h5pBvcyJ9WTjTYMA4FqKRHTvfSXiu2Ha3qB6dWyKF4LGUm7gd6RhzmJS7w4XwC2mY79pGV8ekAG",
  "key19": "23KL7C5Gz44baoVF2P66M5A9AGBBM4RbkFUcBotcGVUM6GRYn2Uw1tuRa2mBk4Y1xQS4KBxmeHhyaU3kzoWKfzjt",
  "key20": "UL2iFUjYCLc4KXuEux7vYbpUjFiNiAx167RBYrpgTGXyJZN7j3yxmKXbYbhbttdauKEGhoXFhGGi18qxrS25gek",
  "key21": "3eYTxgHq5XYJ59qeoBvBFsWzmrEMgoSwVbQHwr6rcUpkhwVAJXti3hWa7QB23x39kH8rQGRxrQz8ZjqPH2wGff1X",
  "key22": "3U65186LWVHMduX5UxaSQpGtQS3WQcLSdd4uCngpswrodWZxLTCBTmQ9HYq7FZpfTRjRxUPiytWok9VRBsvhSXdF",
  "key23": "2DUns6XddrD6uVtEy1dRJR1TT2ZYtJLskErGwYjY7fH1BeHMC5QdDQpNo6D7cW48ZLBG2xA21kBLpNy89ujFfkCC",
  "key24": "3pqq2fkG7YhGs9p5UQdwaH1jaQbP5kYr7YggU7AKZAR3snmKN5PLVmpvTux3rJ5GSfSAT87hLG673hd723epoQBT",
  "key25": "kqKCiYGHvsDPZW3PDGySL9EaLQxxHyk9DSVLdjFNjzVUA5W3FArKAFCFMCPxWWr1zBJfmKHHzBPhoQZa1kvnxtW",
  "key26": "5bZSoFWg7sLqJC3NvgtxEWQh3qmTzs21bnxXxFV8VMsLotAZfT2S8DTomsSTLv7Sb7WxXmF95H9xLFoz737iXVje",
  "key27": "RCMcNST9AMGh4RMzDSNnEvMbb2fRSBDLtActEoVKf6exPvLcqczQAfzs4144ZFwe5f3Ky2uEHTa9jGEVMkJiQtV"
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
