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
    "7DX9THAJbdn6gyE2jrE9eHTZfT1FXCZKUcnRydoYGrd5narx3NWsMAEsUwEZkJwhyYz4RMbw7BKAeyuGaEmUVHs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "LmQXZNJWczuvy4sdr87MwC8rVbtJdtYgM4K5WAGZkxYYqPcsV4GcPp3e6A1JTVs3cATpe84ZfQLCh93FvtyQqcj",
  "key1": "35dyZFW1KToUNqx3zyWQzCoRX8tCfyXNXGaLFnZfw4GowJCRgS1YHC17NnJEVWgFSm9Xg6GchfJ9U7iBiS6UsDWS",
  "key2": "2Wgt4oAstfHxbq9ZE4PWbGfN8HBvkSh2TcervTD79VyWAw4MsGbvBxbnos1ArE4NH2BTrh33jkZjr6fdPMmsNUNY",
  "key3": "tYkUmTzZcRK3MNGtrUWDXrLtPF2XWSEV2qQgMQCtZYDyY1N3ud6JfNCNmSPeGiJrqpXXCDGCnDBVZQvWxaPuSQn",
  "key4": "3qqgXed2ArRVSG33LPLVMFeSAShochmvtNPFaKk4vxC3hrxLS5Z9v8QHoGWgHs7VciDuv1LWyjpHn6N44LZJVu3x",
  "key5": "GPVLYuUCDw5Bur3Q9g56LxL22p8QSpKD1xjsxX2uekxyfXgya9XbP2vZXuDxggsArUBkyLd1eKQzcehztJhZ4BP",
  "key6": "4C5xgSB4sMNh4MYuR9oQ5zUPWNbcRXWUfVTtf1M1vzNAi7VkMhjm4kTi1Mqtrz37WumEJ3xdZsCJxYKHm6LVkMiY",
  "key7": "4L9NJjB8QTQRdaBexmYMozHuPuSTaFzr4meU5xLgcLiEFLmJbyFh8rn4Uv3TuGpDzDmyVxPdCY1igYRWfGdR4eHS",
  "key8": "KhusE2wvKjhjoYvJnKETRkPmbYzk2nfewXqV25byEmqM6ZKkcikZZ4c7BmwcAkfX5Fgvfp2Nw3WYDMjtk6h1N2N",
  "key9": "XnzPFZsb2uStxSvASWV5kkfk7v2MviK14ojrQ25hfruQyM8W3f7MC4RX5eDz8BqdCYmrpfWv2KijiwL5iSS91P8",
  "key10": "2JRaSAMDb67pHQ2U4EE3a453rj1uozxcifg9k2WKQ35rHTnkdzaKtBwCnsm6gBscXd2ZwJDa8v5ZmujGkQKXFY3p",
  "key11": "5YLMNMh1cssaNFAv5ToY1ijgooTZwRz6awwZtVs44NcmG5dw6Ga6PB3HdLSfbmEuJVzeuHajKtfy3z14NfjAYqv8",
  "key12": "46iuUqMftvRqpSj7CFcx6B8u9pCnTLh26vyrrYm8yWevaypphS2oGraUtVatG5B97TbeJUNeVtjy71EmDbm1waqk",
  "key13": "2mcGnoM5es1xy9hyXdT6QjLtfA5rHwFuStqoGP3N2hFUatCuPK1ScbfmjBojPAG7NEu1Sv4ocZJD4LdPFFa4r9qG",
  "key14": "4o3xBDFheY7sFPVk75kK3XnfVnKLcG9XusWVWm5YzUJqiRCdxVhptXswgcve9iqcUQqiUwJFtQ8Nh8rABuW6osCB",
  "key15": "wmct9RMU8HGKqwpy6Xv94SWK32UC1B7BGRSpa65wKZLvsjZBJv47eHkFAW9mWzMRg1GJZuM63PkaNhLPhSZ6AQT",
  "key16": "2a1SXtnWZWt6nnuzw9ZUgcj1UykozGKpUThqZ1vDtBBFFzGq8ZxwhPxaHEd8XJCnjDRVj97TPdBQkiv5fkZcbjz2",
  "key17": "34g6gLnA7rjjquVnfFeQJGcxzCfPiR5eDKgMjDQQdZuKYdCTpwQqTS7efUJAgBxGv4wH3BfiXThWF6EyWrzKVJBN",
  "key18": "5VqbFvU41XgSv8gv2JBBAvfTHaVC8ny1eYNG8i2k5zMWGMKUK1myMcyTBAho3BjbBELCrCQmAoKCYHukhCccamYU",
  "key19": "NcRLvNWiRmzZymDh6vwGMBrxb9PZYnAdbuSD5P9vnkhHgucCP5amrtNsZiXsHcAXohX7G4GafssydzUahaHu4DF",
  "key20": "KFsZzGsC5v3UCbJu9Ckri3SbqMxQQEhst3bHJnxadEZMRVg3fCLa2eTrxEe84JmueQAm8XGeZUqvrpWdDZ5UzXY",
  "key21": "hEXCnPcFFWLx3Bo7BiuQNmJgVwPbryMysmYLisQj6t6sRNDAtjLVpmxXeTxceYgefR1MhFfyADaDPPZR3tYH5tn",
  "key22": "4R6TUSHhNGvRQgGVUCxMGcZ2PHzaiF9S35qoYeNzsqD1sibLiGzK3kqdujeP5mCzuWuq5YuXQnqWx1Xh7aELH7qb",
  "key23": "5MrcSRgpq1BtXo5nnPHB8xDgyUecSjozZZfpQ1gPzCsN6M6TbTsomChyzQhVGsq4N27JSqozSwmQo6oQShMHFmBT",
  "key24": "3Q2X3MhfZto6R4PqHTowdvWV28yoDM8nFms7uANfGaNyqStD8dyUGaEU19qbrgZD64yWmCpvWAWEGKCmzkHp4Ce5",
  "key25": "4L5DKsokDkVXfxUoxMKf5DMnd3d5tkMAiCZXhSS9P58C3HTYUNNNffjpSaxU9WqMVVRkwAeYJrpNVUzWWF3xTafL",
  "key26": "42vUsat9raZRAAmm14V1NQdCmYr1cCQE41rZnWeVUerDxYqx9b9GLQNQM2AdCJFU87GhK6KHRoUvpGK6FXqQKNkK",
  "key27": "4ig5FDyELLcfstoYZPoxcrmg9aE2UvtAV4BEf3Go3J9wd1mxK2FM93tX2SWT7qC3Bn2cLkN9TA73ePn1yvoF5cY5",
  "key28": "59YGDeDLR4NPSyctQoQG6ZuR6ikariByTyryPTmRFQox75JA5A1KsQPXa8Xj8TPgnYTMkq1GiXtCrTu4VJsKsjFs",
  "key29": "XFbQocujGmQf9qkfJ8zypeyKSZS6JcJd2PBavVSzYV7ZGdKdcvQttCs27wpB7fLs1K3ncPrCYmdZquCLERiddUx"
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
