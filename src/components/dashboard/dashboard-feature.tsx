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
    "4PKCL8W28vRs6eTjs1vBkAnqgSp5s777qEr9jLiGqvhp3uoDRQVfAKD68aKGW94Jyf7AePur6H9a7fFUtpCwzGvt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "48C6NK6x2MscT6Ucw6inoKpig6Z3jksjQeWxXk4twY1xkdsB4MVmewnUrnfGAXzNgdJPReKFRh2FndYXxAmrJ6mN",
  "key1": "5PkZevuhU7ygLsa8V3hBUYThSjJFcCEPruhTnPxdBz2PyLZkho2QiNbeToopAy2SRcRZJZ83Mi19RbULxscqMtsC",
  "key2": "5xhTi3gcsTr4hYEWc46QeC67aAqtaX5xYBJX5m5aGhfQN7FxKUFZj4WF2z7gNddKpHdX2MB3v6nxEBEbq7FGScBs",
  "key3": "Q58cdg2uvS2Wrm1rdnuwoppP14tFCFZtBd4Dhduxvb27zWfgZEhW2szVnZFr9uiPUpdZ6ERnWQA4F7TqQ441gEP",
  "key4": "1oGEc85qAtvypWG8L8HsG1ygK5zPSwLdY1P1UhcxLwn47uBR1P2BDCPG3PdXDmDu1rvNCPJATJC6f4Wb5BAhku",
  "key5": "3bdDev5vBLcAGsHY6ckYeKii2rd1R4RPySUZPQgSjJyAuB5SsNaWiQUQQoBHDrpubiHu8CzCu9CRAdzPbEbtRXKg",
  "key6": "3d6Rc3prKvsKGGehjLuc3G2WPJMwHYKjHdExx8C1GTDKJQMWopSDcV7UG29XgWhwGDQPJwkfWnfLKo6X9MNxiFiU",
  "key7": "3RFd3mttvW1Z6VbJP4ELguA6Dy1mscsR1aykmbjWZZy53qhPpNqYzEMNDysDJLuKTLWMyDGF3YyV72XD1jsFafjJ",
  "key8": "XqfUp3pmu1mHDULZVGUVzozyCC5J1vjvoCHxFMiyXJqmaoLEFn657qYm1hmymBE65AeRkAxDPFQy4nYmqnmmFut",
  "key9": "4kC52zhnvQp9PJKqTzsrXMdeAmGJ2PQR4cv5GLjD8Ntufyoh92cdgohFieanqfneNqwxqa1Yu5Djo6szXik24C53",
  "key10": "4n6135p3NCsXhhfU7QqSzbxVXzWGvznE6imW9uEjeFMJr1BPrbk7SvYo3w2V4gHVXATC9Je3h5BCWLZ2KecZWtgq",
  "key11": "2Mqo3Wdj3XtpaFacrXzkPQ47yMZqJZAE3J6eugRFPotqmTTu9orWfKy5wYpNrQQdAm9ZUP8veFreU2Ku5HumAM1R",
  "key12": "4eyzWEmo9CAGW2XGFag6yTQQg6Qrz1KA6eoWhCjNKRtwn69uz8ztXWLi7EbcXMszK7Az2HZpBuSeziTVEmjhGKvf",
  "key13": "461Fj7UjmeNsYA3s6A86gHHrDiz7X4mp69xfPFM5t2MaedR2wLBykC2qnzFPxqytMVTviyHtLHYEnfh96BVn8Yxy",
  "key14": "yJUM6ygU5WQasQ4ZbLYjUG1kSPG96yFwp2DgHsVLGgURoj5W5KUWXGvQvS39qc3tteC9bJRhcj245tQRUqYK1eY",
  "key15": "2iUMFyyFdCbZxBr4AviVjJFYDoR7RwuWc8vbcXM7bDizNrQjWKccpe2psctg1PTZ5DMDbyqouGn656y6vCHSwAqd",
  "key16": "4iBW4834rrUmoA31jqHuSGZhEXzpZ96jVw8wDL3T9EAB8dXYSVEx9WZasVU86aqUbHLQw3w2AsQerRzu6eBbBDVo",
  "key17": "5TAgmvczmSPmCU7NRw4PjhxLU59hEetMdYrYuXTiVZZ3ox3Jwg8mMpSGnUjEEGZEW5pD75LXCiGwuBSibGm1nqVW",
  "key18": "3xWxapzPS5hfrHfoo6nPDnCTazhXRMVqSBDBqWLy85Hjt7sTg9XKvnfkZuyJsA6JboXkQNZHiFTpuaHj8xP8M7G9",
  "key19": "5h3DgxBvJAq7xKBaRPZ1hA5KjsP4fQ2WvS6KuH1sYWX3oMays6Ak3rF5w5JQBwhW5BHmEnNdQWqWKqgP4a5oFfiz",
  "key20": "4P622JNjNu4zcB1PkW4nCSaq9kHikBtNWH5FqZre1iKFFByy2GYdS2oebwv1mbK37jySYF2UV25mhCafJjqJ7YZK",
  "key21": "2NQ1JqLqkR88CxVfZKJxwPhKKuxkTK6cjw8HCAy8TNXoSgbwxRxguTQMNUgPLJokAgh5wEt1CuSQvUQbVwv4ULrg",
  "key22": "2tuhhEyZgC8hAHE5X85LB7JwCRvWGwb1MvD4frk4rcPC8E5PqMDgvGR1vmJUUE8yLyHt8Kizbb9PxqVqtDS2FJzA",
  "key23": "3WJSv4fBwibHTpLP3gyfVHGuaPbWYnaMWeRH2GXHDpgHdtgPUtTs52eaEzDfiprKR3MvCMDue1XcE64b1iNRcJo2",
  "key24": "5nbtpEbyD78BLDnrbFzmSrQneSrth9rYJa3GsHqJhJt1mCFaZ7ixupGe4SuVTwxfFsVqK91Aqx7tbLoXj2buXav3",
  "key25": "PtPBLDFYskRtQU25WqLy5oswsN7uLvwwhsmfPjmZD7ED288jdyjnmpHESu4B3PX8xzCUSjDDfebNQMFHy2K5fu8",
  "key26": "nLiKFYcGkXXPkjdfHqDnCSwojuZ93jFFz6Vw3WexWHam37wQnzh33SVfWiEXzo7qZhQn9VLWi3mVN5wFtKpBgbi",
  "key27": "5xEX74ySnrAEAkngkenvsZV2ytTK2qcFiFPRjzKP65zybLZvkrZUxJ46J2A8kmenqMY9kKX3XT97AMxiw1G9bwAd",
  "key28": "5k6NUQ5FHG7nwS6seT6zhzn5woj78C3UP9E6CbSZtBti36Wgn66DqbNVbh26d6ymq82ywC1d8sHy3PaahX7sYLeT",
  "key29": "5WLySu8ifVimcDU1P7uf4ZqV7vBZmA7kNTUozAa8Xb1mHWxTMGPqqY97f9iGDFnrT1URE3EHKV7tjU1rDSA3LXb6",
  "key30": "467CrjtZ9mYSXnb6L97KTNf985WNMR7Ev4WKdgvJitp4xYfPeEkQzvBGxKzdeZA1LYV9ndmFG1HDTSj99Vtm6FjX"
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
