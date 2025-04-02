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
    "2WyUfcWwhkvkJ1zDhh33p2S7J6f39YqjSSvKBLKz4VNZe9LJCUSt5Y5mwzYzQHHSp51nYbbzZaS35nHP3mJSNrhH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2fJrXaitBjrDxEVwZsTnS6sDtkJfbW7zfp843jwqLN7HA7VizvpPi5cV3PbF8Apf2GPGN1qdt6Dx9sf1gr2sEUJK",
  "key1": "5VoL8LVbTq1QCsBfm5Qv9XNgwUCDimoEmbxUybXKg8qmwHchMB11QQPC4XK9dAAAVTma4JywTaUC8D54wi6RE7ie",
  "key2": "JzoHbumAhHWPQmAoEmWzkioSEYeCGKQZsxBkbanSdpFhanJWciGzUmMB8vZzjbtEgJvUZLQrVARyEivAfXfYzMt",
  "key3": "3vyRK6TnJXzZ2GS9keiEvJoTyUV6W27GZ9aS8Rm62owrNMeBeeRnZhTAS7exMd9zZadY1TjbzjG5a5f9vbgwGCXy",
  "key4": "KsEDvdBiRL8PR3gMTt8tqQvJbXr1vXr3XdxvQf56rZZHZu4jr5HWQxpuNE1oJ4UfkXoBZYeCxr9AGoK31YbmTWa",
  "key5": "3M6Rik8twqpm1EBgfrBSL3wFUHQZTvBzbbrfqvhUxaPCsGf4HWkSLHXV9tzG5N5ZRGK8MQWbsWfuheVYeG5nUKon",
  "key6": "JqqEC3n7EuKx7oSntSCKUmSy5rZkeiqBTcsJobe18t6objLcpsSw5WMi2UDtUBJmzAKf4ejYZeq3q5qmpNmSq4n",
  "key7": "RAPG9hhAfZDmbHy72H1Rr16aMcrSSHWBqxXkxS5gs6fJDGEuxNddQpWBRRzoWeWnvK7fJKG3xotHd4w6sWfTmWz",
  "key8": "3tuT7wqbzmZqxp2MaaeUPS7aGdWPSM3JgQ2ug5ARhNrdrN8TTon1vpFDHBWBQmeQw8Q7TmMND5quRb9yiVwsyCJZ",
  "key9": "4ceyo1iFbMn8GspvVdHPpQ7tkSqrLPTmr53cJ9YCgnThL8eyH2n3cUwe2xMTxr6XkhXM9oJfZ3Rc71vmLL5mAv1p",
  "key10": "2GvTNUsCz7rBtACC98YvM6xZD5PrB34ZcqnsySupYysRhhhuge79tn41tFhgsZh2oR2Fdesc7AjVFoHYZy7WGL2R",
  "key11": "3dxT7yFkpudfPSyQgu2qTjC9rq3Sbz6huhtFzCUi3Mxw8s34tSDhyiCSxsLcNZPRbMr5bgJBfokH8qSn3yhEdqEN",
  "key12": "5NFX2cXJc4Kk1bjV49SxW8oB6Ehxzuc37Jm8aRC5pAJVkwTQoDS2ADKRwN6qwPUp5oiFTpBSVycMUtPCiPGoLepy",
  "key13": "41nTJDof1UzrLBoo5GD4u9Cx5Zo5JAgcJfdR9dYPKzTzGhBGB1qmn8u41RgvGzPvqxEqmhMUE7LsZgbGYC4Yz9te",
  "key14": "5zvgeULFDGbggBqv2XHJUGynqkrTwrr7feFokzp6b7qu4HcZmMhHE5upWxeuNEh5NgEajR4ZVpswyRt9q1LWLwLX",
  "key15": "3CqsAAZpoGdtP94a7QZWnuCTjfXDxhAFBpeYYM5W5hMXHskoa9RLPTQXJCFWhjvbNvLYbSLVFwUuhcV2DtbEkvuB",
  "key16": "3XQUT4w2DV2tEgFuwJdDqZEmZJw2mjsZ2687AsnniohWKFWmkpkHPNKkawqXPrgLREJZ6FbJXUBKf35xQ3PnNKzF",
  "key17": "3hBcjvL41txv6i3mtr1NStC4ENa55EYP3Vqc1fFFZr3Fc4P7BdmtSvUca8p8aP2FqcoqxebtxgdAX8UUvU8WqU4a",
  "key18": "5TSeL5LUhqfDPgnEHnnSg1SX43BJqSxbqNYwnyWahrdzN8hBnNgGSyyt2yhN6EvWDakCcHifKq6FvV26DNRB6rWT",
  "key19": "5JXYGr3qTXUPt5NWr6GGV5eJqytjgenVjRW9QjUHJoqPzy3Rw9jz2sbDsr9n7ihu6tS8jLJrtsfUfP13csPRLP89",
  "key20": "3JxhWg4JD8rDEz6ZVeH8r7u7kyxAzpCruy8dJvyQZEwQckXTbxeFRVUYLFAfDpGb2Bb77B1DySrkr4VjVTmp8Km6",
  "key21": "62KgpXoiE63UELsHd38wcZnN7LmWFQCfr5XgMCRbwujbwJ5CanCJSSiP5H9TSqoDfW1UU7YK63cxvk1v1ctKeVNG",
  "key22": "3KsQ2PKgW3L5RLvi4kX2HmVVpCPQoG2ptfE9y3C6c3hRkj1CSKqy5KHXGVnz6th9o3SCDaJemZHJEyCnpnnJM1C1",
  "key23": "22UfyKZ1ufNyWbcDr8ft4dsUdXPqnfTxqkXDS2WH1MdpWvmfPkhukdASpFeeXrRNp87J3GKyQRMnwyk9vWyt2QfP",
  "key24": "48mJvr9mpNvGDz74hTMkcr7eUjiVQunxNQcS6HV2VQhsVQkxXmKciMcsNoivwTK6kCxoSjCDGQd3RwsCdJSiqRBJ",
  "key25": "3zyg6Z2VdLLq129FWCqvKnB2Z7ypVh91DoQFpcB236CxzVWjJEzcx1WHZGt5UsDYz1SJqFsgjgZgzqrELy7UarxW",
  "key26": "52M3KmfMXx64U6BtvjZRJ6Y9uYfzG5TjtY1SVFP7XHbLj3VbyY8Y3HRUg85wRc5TJzYgi5yf1RKkMwT8iqhmJu2X",
  "key27": "2GRbGQGeBZHJ1Br1x8fyfrpEA1vSRLhh9FPrLtKnua9NXLhCMUd6gXLUAwQbLaiJPkY58WJzs9u6keBzW8ytUbfF",
  "key28": "2q3pyUzuPC8X6JxC6kkmtHbREh5ALUXz4Szg8wYmVM6gwJhY6FuoemGh3mWXXYUCzx8kJJ6oLTwEyokcTXHnb591",
  "key29": "2ikhby1AgoT256CEwkguSyG4RUe5uyJPs5TWqGTJUY3rCymFMkzhWgF3thoqMJ3LfQtpfhs1pKLUQxCwQLPFRkew",
  "key30": "2dA71V2Wu9njWCcXsHaAbSVKKwYU1XBo1oQHESfMj26ggxLBgNQMVjQ92FubQdudhQtsis8NZFsYgTxnG1cMGW5J",
  "key31": "3bRMiympDjiUZpdufWstSUAyw5Sri4rL3KtGJ5Lq8YjiKvt5omFXC9jJwqyJzgGTdTtyqShPPwvK6Tdvie6yNiQt",
  "key32": "5WHw3cDWxw7wPncyemXqp7ggY7nbJZbmkuQd1JMkK6b2nJFbZaRfK8Yr4rHd1wT4dD664VpVM1magM5y4mAtPy2S",
  "key33": "2dh6KGfZcjykQZZSwh89a2Y1E2PpfDvKPgZG36MEA7GKbQFF4LSwWNbNzp6M2GJFfwjQ57EQuTPigjMeSPeoHadE",
  "key34": "37sgFK6XKLJHEc1epf6VemXTFyb9qVZeTihi3qJeWLwYVErRCkAibE7yzDrjokJygCKCBfbNCTCjTNCBcdbYuksS",
  "key35": "2Umy1537gHZ1zY7RVLfzpVHVTrpkqS4y6LzvnM4YExjvL91xNZr5uAeaF6NZZRyEb4ECEcUWfkwZDk7UhcWagrvo",
  "key36": "2NoLpEf4fuohLkt3JwfT5BQLoL7fTgtoYXB9rZuNhhGyHsL8QBM83LhU2X52yqzg598mf5P6za3ePgmj9kBnyvtY",
  "key37": "4G16Pb6UYbr18iyDcJBV1nMGjk7gVUGXvkHahRYDZEGfrhK4x1rKnYNFSDn2K9sv9rPYkduHzHpXWVubxGgmWfUj",
  "key38": "a3dv8fxGLviYWfvigHyZbnxJFyciu5bDuvWmNKuzH6ne4bCM9KjPdV6FwvDvmgBa5NqiFfwwLJHFfnbx55xRnuN",
  "key39": "2VSB95va2NwuQgFAY9XRG9MqBxCW4hkWHX7qhiSNejvg6UGzQQPGisF8mShPB8kugaFUxd8rj3MsGuTFHkRDUaxa"
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
