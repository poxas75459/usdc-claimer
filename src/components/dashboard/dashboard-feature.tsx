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
    "3arGLrwY4wFqNFi57AZn22JsP9L31gUQGHKQBG17a2ECy2LsbTpd5Uyo3t4Athsr8nLsTAiYxzsVMT4cFyZx2T9K"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "8CT4exn2ASk4qFnZQjzKGhCJB776bWregRu1vumNdNt5Q2WHJrXFvzU6brp9uwDBAejGKJQ1CeFhN6Pbz51mB5D",
  "key1": "5a5CfJHFv3S2qBjGYo5CaU6cZ68quvQ1J6vxLXD6WUztrMegwnRffPJomPeBs9siZ8Lpr1ky3JXe8nuxobeiWn5L",
  "key2": "59vEiAhGPNvWmWErf5VShbQmRxETL266JyqDa5baVUKNAzaXqyWd8yD5H4ue6sbPo9z6WydmKgCGyB6VergQcLni",
  "key3": "5YVKtiafzADXvh4k2xtfxFtUgZvoa68C2qYdKShbQHq3oM5zFpXjkg4JyrhPhP9JtAGaJyGjmbY6Ve4cevLA69hb",
  "key4": "4d2WgQ7UEdCHJczJNNJ1Uzz4EpKuBHJDrSNirRpnV5DHf45P61hDx531WwNTd3QRcSGqCirQTfmJVjzVxX8cxF4p",
  "key5": "38vKTdmrWdFq97gfCB7qnTQ5iaQG8QdEfoi9Dvg2ru1sQQfu7Z5Dm5oaZcFyoot6qgRGx8xRcC7DqgZLk7eXvfZX",
  "key6": "29PjEwFFUhVPcJyK5CgnXCevuefWeVadUsuSBSKr2j5E9RLUXvoDeJ3hxqwiHuYoPCjg7MhbdYqTjcy8AhZRroop",
  "key7": "4NgjxuLMMhWJG6MxYRC1W77eDt2ReRxUaLn3fTN8g4KtbLHNQk9fkmYiBkvqbqJCp5A8FK1SE35TSHTJXARPzyyt",
  "key8": "63Ff45e1BpyDbCPktCiPCMmwrL2wKx14kw8eu6dRTZMqyXGYLtJdu5hGzV9KMezxBKh6uL1jzTBndPbjLnUpAoRK",
  "key9": "4v5iwW4wrxbGwABQcia4sf3LFfdzz1X5zsXGhbijcynE1qHRq4H4VFm9sN4jwQjorcTUDjcF3ruWcDKB2egkfzXR",
  "key10": "xkB1gCx2VjoEQqKgmNMuCY4RP1Q742tnwpqUvb7ka6HsdSWYUGFXw3DhWomgfsQ4iYAR22rWoks2wBKWiNvbrti",
  "key11": "2VPG3qWoR3czMVaVUSFYRXRM4J51dUT1Lm5fEKNaQ9gNj5KSWYkZ9FdqJ935nk3Kh1vufVpGprycZdYDKdfKYt7J",
  "key12": "3CAKq2myVMjUXFW8TbHJmvubiRjSwRsnJVkRJQhWt2BTkSCZ4Wa3dpKQ9E348QKvZDsFxaC1Uz6F7E6r4XJRTqHR",
  "key13": "4VETHjhEM1YKg9LDTN7oFjFxE29sCKDLxMCw4rJa6cZxF7VTkK9Nr9DgCMxKMpEDGZm5NNtWLaTk6LsxuasJCoMS",
  "key14": "2NfxDm7shdDUERTmYNZqJi6eDr3iMMbE6dU75yNnGU5PuBWKeoCsKTrddQCBR8yzCoizDtXzFXt1SZiys4CTvvpb",
  "key15": "2DNm9eqy67mH2BHswQGpHtzPGrM2DW4Mrdi6sAaeTwNi26y4NkMrbcQpNksKiULgkD2qXcMvodGrV2dBdLX1UApT",
  "key16": "3ay7Q9v94f5JrABocNpggWuQHgfLY7KSi6mnkZiS53pUFbnRBYv4UXXEFhJsARzkoQAt2HJhcLi55nTMtxctpm4z",
  "key17": "3GJXG8BMRsmGG451dMVxjEKwqq4TqgEUa7b9Rn3B7aAxw2JdyHDbKGLhBFfokSi7opt4RuVQpLzEoW7UE6T9iU6w",
  "key18": "4gVof44WN3gadQuiBVghLSqouiW6nn3eRyp6zJevPFn5fjUFfvRQohVpdKewncuCsVp51dnDdUQZvTNRvQnRsnLg",
  "key19": "3kAJEZYa6GAmDMAcoP8qSV6KMy1HqTht1UfA9BkwKmfomiDG31QX5ohHC48YJJ1fvj78nAiCCX27DqFMmFXZyKPu",
  "key20": "38xn4iVruMwyEkVHr3hnwraZXgkNK7mNSVj1WbuWtAKSSJJ1tKE4Py6Y3UVPiKPDQ6Hyg6tVCM3otFicPhcD24uA",
  "key21": "qMPrQC3daoJUADzxNchmfAeJjpCyZJCHRsGCwV7uTpP5bEJ1owsr9YwzgS3isDGFjo38b7KVTS4DvhSP3bwi7g1",
  "key22": "5vk9NdQkyZHwitkiKFWRC9hYvPTVCiPwwU51Ug9uqxyKvvqDSNGB6gTxYYXv79RXNbL378QUW2SyPeRxRAxFK3LS",
  "key23": "2UxYJ3Brp22Pj1R9twiGPpHFD8CdyNAHMgJH2bmD2RJzQaHwge2KVYTgCU7YPoMt3suGc3BtQQFR9NWn6bdS5g4u",
  "key24": "2dLMtrEvskNR5tnvwNMMrCjR5x8nmbVs7DxmPBzoE3Dpgo9daTnXBd4gSDGPnGxMKg2UfXQRG4BCeDqMV7abvQHw",
  "key25": "3GK98c5BdWcp8J2cwKLE22TJn71JrMiBqVBATYqWS4rd6JpxDpoMRv4fVsqxMHUm3jqXZShvwriq75FBQRWSQaFk",
  "key26": "2taiHhcGUZnmKsfPBTDbEd5pya4xXuL7EqWT1GkhtKf3Qra2hH8giTTfsuqyQz6m7URmLzZjQ7oXnhAD3YpWJT66",
  "key27": "4SGWepLKWs3DzdK8fcg6rHvffCr54nis2Qw8PJVTWFdPEqZUETEWh6XHTxHAyJktGQHfvxQ61D6B4JwziecftU1g",
  "key28": "39KYEN6FKFJYTHV86dH7oZJ8JHX886yQPJCX743V81ePD7EzBLCVVgapiDLQ7NCfqqBs8WTEGZHSkxcU1m3joyBG",
  "key29": "fz7aXLctRcDcbhHs5FvH98a6D5cjWqNgN1oQxWKVdi8XRbnYvuGWiPwWm3GGqDoVnFSSf25bZRn5MALmHxU7Pb5",
  "key30": "5mid8osB7y6GVEYghswTn8GZbNdy5AMQ3j4QAa77HiVHiaHLcQYHhYjWp2zzCXxPNhodYJuArUGJ77LUUBy1m774",
  "key31": "5121L2JSAy2txA3myzU5S2fwTfiuZJek1Q6NQ59FVPCiwYjV5xyqg2wvERyepBgVMMC6NmwvoiQ4gDpNwjAe8qDP",
  "key32": "3j3TSNq4Nbb9Ct67EnqqoxBDMPwADmhzn9hP7wTn2wzxoaiDstxeAdoPFKRvMsBqyvZPPPFSbDfKEJLv9vWYYvQT",
  "key33": "5gSd49vzpyyV8WbkdvP297b8x66tp1j54PBg73DSqYnSNBADWkDvKVn3tf14zYd3h8fQLBSqrm1cdBGiVyycS9ir",
  "key34": "2Cr16jNQ9D8yFHbvzktm61s1ziw5i8HbhLNQ38KbiagtokuxbLzghjP9CuuYEcJBiAo9d8Goik8Mt47nDniK8mkK",
  "key35": "2BRzvj6vVXHtJ9wEwEtSYJfwCmwEdDrcieXofn6vgKBSV9o2nfLMCChMFqYms8jkgbKSDVdMuiXra9ayMQJesRPG",
  "key36": "2AvTEYCYEjuWm7LhWVbhGmdf6D8QUvtqzrQX19TxhoAaibR89g7TbTf42ucfKxfXiTvxLjEdcQG8pWgEtMtJpDFX",
  "key37": "4qwAUeSsMbwU7cttktwdfPDKVVhDhPinbJjhMbxWn4QyDxd3YRBjiQ3CpGzzxeSYRCnq8hXvHCJQtmiPanobvKL1",
  "key38": "k9N7FXPAspHFxNgui8TXL8Lud1BUBxPhGBrHNtzGhTDHABYonvhqCXzLYFdhqHmyJdh3BchfKWDDJPZnbb1G8ML",
  "key39": "wvncXqmZavPxxfyrnT8F11fProkaRrWn4tBfrgpsZ9mSJvM1DCJV8po39JGXb3JDmW4bCwsbmw1FnTvKRHLtE4d"
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
