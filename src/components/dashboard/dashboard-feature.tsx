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
    "6446Ls6GeSskxNrH7NYgZN6mURj5WEPKNTvhWYGjcJnzfiRX3d5yCayyXEUrnVNPnuwJmciXkQcnd8JzkzFbmkC7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2vLDXrZKDqHqzmmPyty58JprikSjRoMD9dqYF7yHEtyfJnbjaUcFSH9LB1oJGKC4vSphnWJnqznJX7S4u2o45FXu",
  "key1": "5V1LxzAphLFunuc7HWkc1KzLRhPRswmrD2Nxvp5kWy8UT6aX3q4yjqbukNvzWMDgEyrKDYS5Xc9VNi5mvDUV6Uvo",
  "key2": "39Y3vgRYabYCnDVpbKbnoEd6PUv1FRMnMWNo2JefpZLJj3kT2JLJRwLLNDQNpwrSCLNDqsTDvyThbnE59GxmgwR9",
  "key3": "4ifBkeB7Mn2XQ7hvon6HD39zpuaxHM1z6wuEVpdwmLCJiC2hb4mitFhFMWxRr1aua7cjDhUbXHvjzVKMi5sCCkhW",
  "key4": "5n645rL46C7yTEfS5oxymdw5KWodxi5TbgofzThzCZ3HEWiUncCL27wYxvPrBWwzLXwRceFzkNrsdCB7iRbaMfpY",
  "key5": "2qPkSosL3HEZAVYfHrmeDByDcd8Es3pbmQrDLqcZfpWyAzzcaiGYE69khGx3GDezgursceWw9dMRwLLhhD31tScy",
  "key6": "37y739ASJhTYs9EBpEfpyqjKSEvof9fF7Jx7Bc9EHBnZ7cLREFg3CDFB31AbuFFEJzaLhUCBBmmJatynG84rx4Jv",
  "key7": "3SwBfiHgxhy9euTuLjiQHfQvRoN7Rr7wYfbKtFuKTqRG3zqpzKtrVWczpiskSRGtxyAYsrMNKfxPxNwx3mdMAvDA",
  "key8": "2uPvhzGemcSrjZJanRFncjLK3JGnAuttgKmErALXr9V8XboZSDKi16YEfxDDmtoQrbXjNF55XnNZKzTsYNgWtR8t",
  "key9": "25sDTrGYsWsM91zKq9S8PMB1AVzBftoCCnmgof2Wm41kxzU3RnvoSNWz3KM6nXqrqBuKS8Vrg8odY2WrAKb83wHH",
  "key10": "4xKMMVcCeLNenJtB8AQeHYmGYrBCDJqDF9g21YcHkUBCzjmj3JLRuct2Tq2Ci4tpNu2wZ8ptEj7L6WAAnQbGqqvC",
  "key11": "3yhPzzjgwnAcoewDMsaK8Cuqd3Ps6BNBgddP71b6FLpvwwB33tva9XzRv4EaNr8AFEFWExEAKeg2uwFEiDdmhwxL",
  "key12": "5i7udwTxbPHYxbAVAFDLUxAwGQrB3J9CNKKayHSvvidE4b4qmcenxSvZB5Gg84WZFY2GyE3qxnFW8XMuxXLrwdgV",
  "key13": "3JnAXT1ZHPxrhzY3EzaequCEN4TDPG3z3DmVUr9YiUpfA3oEsQhvXz4fg5BZYEtCr8Ga5zhVG4oxeZeLzdEBqYLz",
  "key14": "28UMTapg7ZTw8U1W7bpA8jmK5bjmJVzZY46Nsewqiv6CAV9rQNjYZ22aihUn7Enz7Do6CdSQnEh3KozBdJuoBrfu",
  "key15": "53B5ZNv4sFxYahLs34j2qsZpE3DoJbifx8MwwnqhQCruwyQy9gwUtqzDpvwmL8hzd96hk7yEmUF79TcdmQnZ9vkT",
  "key16": "5zdpTfoGmKP1aygWUwYDWyJXiw1sqNteL47VZpGxwzuQfnqKmYz9LExsC6q1VofzuGWabMEvKVAKN3KHrFNtXfPw",
  "key17": "2UPNhsJXu8TFiYgV2qmEqTFCms5LaEdPAypJ4gUeaaDxsKhohyode2cUqZfx9b3y4vYapU3H2UuDd4AeDmYnqMuc",
  "key18": "2UjEM8WQvBCfw3FR1anonCqFvKNR2GzCoGkVBaiwDxyZJQugEzQLXgtsQ2JQNXV6arn3Ay1CraVr1sQpopCCz4FN",
  "key19": "662Yg8riqkCbg9Gv4wfD4jVp8NbxGdaMCcEJNVppBFEuHViNT7YFQy5ASiUVCBYGfYrqXotVoNhPdGYTP5oYvT6Q",
  "key20": "461WhpdyVyqfkwKVWC8oBHpfeVYB3omENcST8yWCfovAkSpEX6jHUgzNeB8vZDsJc2EEvEVfijpWnikdHsj99j8U",
  "key21": "4ryJryAjeFKA4LjegaLs9Qeg42KzQz2QU5LjUHpnbPnfjhjAGJmYf35Zb6crbdxXLNcLLCUQpMHVrcybhMvZsazc",
  "key22": "4zpaFVHdkZG9A5kQbW7YvZhmXkNjXiuAHxjX8eQVGxpu4NvGEQvYpqbNbww5SqHTkuRPWH4TwQQS35tWobVyF7aP",
  "key23": "4mqKifzLVLeDkRqXMrbdJ28sqUhEhf6gFvRN7J353oaWH9hsrpR1EwoLA2UY1UktiK5vknRaTnGCzJb8W1Z5y9Aq",
  "key24": "3689iVSTPJrCkae7xivHsQKrDMyQSPN7kEiq8BVf3jX7A4cEQzHdhABbr8KYEF5Zmr1Nb3XaZapDH1L4gaR7Zuzo",
  "key25": "2Tc6t5hiNVEFfNbPSNScQJ2bSCRrEoNXjnNahXATSPKz5RJ6ve5z5mn85Z1R3Ehg7TLjixjne93UaNpeCd8rnmPA",
  "key26": "AptW3wEhccx7BMysUmTd1g8mtrWLmhsLFP5y4XwG1fBKTpTu2U3ufRRG1NaJcJf6Wc55V3enc3xa1qMPpTm5sHW",
  "key27": "32DSFLUsRGWNeC62DBYyCSztUeLTkFsA3wbHqVT3biyUf9Dw5k19VfNqPDt5tDHL4wRPF8vPNNeqBQGyeTuipqxT",
  "key28": "3GZk92D2NrZvJLoL8ALn9XRcdnEuoFckd6mHG5tynCjT9vTmG6zu2cUyMUxHD2GCAym3geCfEyystyfoHxo1T6Zd",
  "key29": "3DvHxqFmmNnU9VyeLokeHmMPVWxb4hLDMEBkKf5zCfZWrh7MqWxNMDqQ1WWPJWFTxXDSNp4fg9CKRuoCdqoNWrKe",
  "key30": "m7ywTVcmXKJWrV36WEJ7b7znRofJPjXkTYzdsbe5R2FETaEVafmE5LzYZ2C5hch4ge1bdomwqLjLjNDpGFL4NKw",
  "key31": "3peP1QMCmbSs1SjxKdaxcbvFeK6TothJQyKofuNMyWBhhqAZnhuRiyTpZgcLGrbYiNGgm5enUy9UyLGGXPKKacw1",
  "key32": "2oUR6FQVgsmG9HkYB1Sa56iQdXNy2r4koAFQtorSzSc26hNYbd4VYhsvHSVpi3ikxYkmaSppTJA9BXy8xJELZ6qb",
  "key33": "5Dwcj5fZhsrDHBZZKfkkYGQqA5DqnsGqMnGGF19Xw592wQXfTHZeXBLe8dyJxjGwYyEduqtTybhA4yLsbbSQ4MD2",
  "key34": "ZM22YBfcnYab8QmdXPmUvXX1xB7MCtJbbajUETgEKuZsz6XGv5QSWwLdYEBbTuJPCcyzuqCcoZ2bsB15i25Tsjf",
  "key35": "3FMAubsC7mD6oz9vfgtkNLPVr3sLCzsrzS8y9rPAdxdTqqh8xZGFkQZPXJuJ75pzM7BCGb1GkgxxcZcSFc94b51m",
  "key36": "5sHPvE8H6GzktzaLecyPHvszGEWE4HQLnNAofU8vxWgA8Fe6oEtb3mWFZw9K9RGU66eZ5dWL8utSJYEBgkDNQ2wp",
  "key37": "2gpemyy624wMm5aZ7LZHf77RXUEczsCBG4Ye2E5yTV8d8LhYwdRQwCTDFZchj7dEqEEv6BFTi8dVhnHFSSnEiTyC",
  "key38": "5prmgTA3tnxNcAphUjKk5KSJYWnULgL2sAKMTmEx6ckCSMjArQSS98s1CfqxE7A9aD18W1AFDmkhs3tfbmHT89sA",
  "key39": "xmJJ6Y3yaVc43wH9PcGVCPAM1y2QRB7b1zwjZggLr9VHgRZwZsEgoYgAvtqBBfk3Yy2C4p4NTkcK9RPZxWkfKkv",
  "key40": "2JKdhNRwFxsFtM9a4EA8BdkE6x37ugY7EHLWwbjkNEQTKd8pFPMp4rjnnPC7VvzSnuYf59LQgwHTr7Srt4cr2L3o",
  "key41": "2CGj4p8sY5yXrnue5iNkg1rXgn9tFQvgLjsadts272UgS281Kor3aAn1kcabdW8HToY3yfMnyc8qps4vr3i5nGYR"
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
