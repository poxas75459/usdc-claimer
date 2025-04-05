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
    "232pZ3rdCJLzYo7A2BKjUaCFdKSPoxGX8ZPn2MsXzifwDTPxY2UdX99ZCYa4qkSyjJEdHyqasD631ZX9hva6bkvF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2B5WNccFjhbXuVqgpuhuNwhEY8g3vwYBqseqyrcaMCaiH6kUSGFGsaTxEAqG5XqFRBVSUgWdJvuHJaBbpnfhSJY4",
  "key1": "2hZzEK89zdqrVce8xDeS8Rt47xWDh1YFbstcwsynNpwdbARvcUQQPcewV1eQW7GbpxkV58qTQAfijsLpqBr1LqEg",
  "key2": "4HYj2mh788yy1RKkUy5A5Sd6kEk5pqwqrx8Ruan9aZBj1NHRdDTPZqtmsQLabFfZywt9djg6RK5uyzLxeeqGRF5F",
  "key3": "3mzikq2kfsfxDT3Voc1BD3d92DP6Gg58wCt9ucXPBYUgqxa3oRQq14AMtAkGAThEYcMkJhTEbRoe9ub9XoEsDSgc",
  "key4": "yXvRNBVWvSSxA4eGtrBcjoDVUt5p6nQ5uc5iNFi54B2EWLURvs5iWe5AotVLurtHb1jfbTpnKdEMrrCjt6Bn1Na",
  "key5": "keymtmzYBxaUWLdfAtPU66vWHvg74D1GT6r3DbrCcy75SNhEq24jHQASVUNXu7LL4cPusAd5cWVz7TomjeFr7Zr",
  "key6": "3vyTZT9EkDu2mhXDBz8bBAHQgC2cVxPsQNDwV1PtJacEVnrWZLKhU2fQdqiovYqPUtAy5sZKbJbXZxsvUmXDb99N",
  "key7": "2hrdDxApXcBNfizSDz9CSr52JAdkTEDoZeFKndw6YTAFrgbEoAixP1WQjGjf1hfswXjoNk3EHa8WLb1miDUPjzAJ",
  "key8": "2dv7HrA4LPLsF29qW2DFLaeEurByVYzCrRnpxH3Rn2GpVCGxLRfYTo6ha3RPCCBK7p7U4YMWV7sSdpWNbuT8778S",
  "key9": "52aLPBbwzuK63YyGUZ46phZHR2KkQTMtgCxTr73BM4tCkq2dVNEfqPAd4KYFE9REK5UGtFP7CkeB9RyhYLD7txs8",
  "key10": "3FQG9h2fAzJiHzr9LCep9x3wh7sAkfR6sfZncW8NVhmhp1HK8bU9zTqEdAb1H1vUTK7aJWgQKvjAyq6HNWcco5Sf",
  "key11": "3x2z4HBoTQZ81PksnaDXfF8Sci4sGZkVEez8dSHZZo3ELiATjxVNhqjh18LdG5dDEy4kkbS9TPcwuwbrMXe8U9Bu",
  "key12": "QBCLmQeMMK5cWE745Hq967R1da8QMd1eE3YmUTdoRi6vzBsEHXsXAWAAJcWRSJCcWp9gSfqftKVcnEiyFAKEn47",
  "key13": "oeSExu8YneYFatiPzLnNsyc9jVt5kbwHKvvPPnfsLx1VMBmvvbY6rVyWxUfHufSjFWF26PFdytpRJkg1sFPSSdd",
  "key14": "5vaN53t53Fk77LtjQ4XkgP8Py13fq8dwVwSw4sx3BABCBQDjnmZ7uJWx5Jumu4bdm6JzzKqMrA8om4ZVejA7ohvh",
  "key15": "2Vj3Ab5WN7deq2pcHxXCG8AcRqUwQMvzvPNvjEcfSf9kqRRPGa63CrPhupLH2qf8Hw7pMcYsTWp4nf4DnmkW83PK",
  "key16": "4LEFjJGzqaSr3QDrAm9Za9uUY1RiTDCWoQTPs1sGnfkKrYYfdyEPw7678mezb3ajEqhPpLgdhe83sQQdUSS6KiVG",
  "key17": "4gehfNYrA6dDxYsuN7EYVUFrNXDjofSvY1b1TcQCc26LtbhAGdpYVvh8ah4SUZrLhXP6vwkqgZwEa8bGA5BtQzKk",
  "key18": "288iCXarBxTGwcHhGXD8Ho1iYugvMZeg4aYMXF5gC4PrQkajcNiKXXmept2Eb2jsVfFUAihz5D1B1Ved2XaMnQ5u",
  "key19": "49ajRackBr925Zvv8gnjNrxDg64GNZjVVtzYPVYwszzbwMHoeT831JYMqbDaQkLJRYSobGft6D2oH21fwB2ykbe9",
  "key20": "qCAJmbCWpwCHUfZ7HRfsWNSD7EFHFHG8PwcFWv4HpygHFc6g2MbZW3X2nC38g8vwyqakEk7NXXrXBKY1phc9Mau",
  "key21": "SfkVyuB25Qdq1D8XzLHvR94LaAnFB4cvt1U9xoKeab88EQZvtva7KyfizwssGpXsogrKFogpsioDf6z2VyPNWQR",
  "key22": "5ZFo3nyq7nSDxS2iWxiqqH75t92ppPfZiA6MQ14Fsb7BiLNTz8hM7bJGzp1MXqG2MPRtLsNzhS99CUiooc3KxCBW",
  "key23": "Ku1jMUvFanY3rKkL2Dfji4xwdBZx66mUmrR2Zc8nWmbatCkDsgpZr3tEhcEGkNiUdgag1bEdpEVHuRd4RtK5nFg",
  "key24": "2MX158BKDyvuUKwgvVD9Nty57PR8u4epAdyKCGz3nuJgwefpizYJ6zq9ufhNP6ij6JD7XnjEwQ2vZeTEqhT6sP2z",
  "key25": "3of4pdgxrijDm4WtfVhi9rqTbwUdpBkarn55LKhgYngX3hiCQVUHjeuAq91cofZhH1ZjXCGN5yHPGkDjtFn1cHLC",
  "key26": "2uvCNF8KLHh8aHiXQTck6MAGqsypBbXeu3D3VdGcQ8y7SqJCWNqWTF1StUhFyEMDEXjgFQgD76asxx457493s89u",
  "key27": "4TjnMVFSth7bfqnnLxtxKfJuBBnMakSN2ZhpsRU7zZ8RRtoCRaf9faMu4TBECKxfDdHaEBsanFYTub2Sn7AcZpMt",
  "key28": "4pE2X3kbWv2H6zd6TsBdbH8GozjCcV3MRQ6wrniKhozgqJZwSVB3mgULxkQgCCHEp5s6dcnhCXdwpjmsTYnDrbfJ",
  "key29": "4a9PcUWiFejTUbrD8kEGanxjaKzL4JUjnHhEPW3moLnxuq6hsHBDKn9aHHntes8i1uv1G2mpsL66YsgA8PF8tFjs",
  "key30": "5ivbJ2smapHe7b1Qh2yH9Ghj2mtdQNWSsGAFmGuQw1gxvMerYPwCmSy1KGNid41uRiFswtAujHRgj46cs3HeTmnT",
  "key31": "4vjDeY8F8uDnfNG5vxyBLsEhCrDvYS99xW5YjoVSDMNpwjWV8B5fJrL3AiGxgQ6acRc9SZCsdEKodZdJehf2bmS",
  "key32": "3LKGvhsHVJ1tPmeVzE2DgS72w7Qb2rWD7M7rKpe5iHbVeLu8Ysg1ETPGLxqVckGffackemNc7CS4rCZ8vJy9mS2s",
  "key33": "5oYCsiWtaLwYgVR3f5a9LEyQDFbZNSAUcVGRpPBxbWLmeDnj5y8HxNZ4sSyqmntaiEXnQq44BUkg7bVwN1GdZ5XQ",
  "key34": "zMoEiaJAzXRaqfeL9m787EzcvJ2d3FC6sdmUBYVB6CeCHCAwfeYtdd5z5mt3N7dyqpdGb5HaBXKA76ZwaJdiHWr",
  "key35": "5oeLW2CoDDjL8ttuPE25FZT75rMUTAE9pWHAVGq884kmB7CmjnfL36VFwE21Ejg6FMqFxXi6EeJf9dMXUEQT91m8",
  "key36": "3MMQWyZxrKa7Dos8eBiwz4iKjoA9MCxK7M4P7WKhgxsQsCyHPM2YFhULZcLFJnWJZWNMdE2q3MVgo4ced4e95QfK",
  "key37": "5GTazhXXKJ5oun2Ktb5Gtsj2WammL9c23jSRfrrwVCfFUYN72dYxTR5upcU4HXE5CfBK6Le6RFAb4rZWeScLbhmM",
  "key38": "2KBySjR6gve8pUaFak6XsqZtYJwYXTC7ufWow4gm7ZfqrTdFiLFeqfPanTsGMt8YeDmAHDBGUkXetKkqRH2QT8Ae"
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
