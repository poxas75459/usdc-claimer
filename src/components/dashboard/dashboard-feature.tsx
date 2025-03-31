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
    "3d26dh1hQDRZWm2Bh2swReoi6Ku2vwZsHfFvYSmGpyUHr8gCf3DbYHR6CG2NkRFu8qQKUii5ZtDSup1ETJ1EJLcb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5LhfpMVjvZf2kQAEZExMH78ExgyCecRq6KKviqpxjf5s9W6UkYxGLY67FybkQ9gf7bP1Dh4arez7YGgQ3UM44KcT",
  "key1": "43yXfRZZULfyYDXP6zNs9naQGviGM41Mqi24LM83pugxtDVy9kzjrqEddWUkTQrpweFLBVWYvYwq4HQyqkNA66v9",
  "key2": "5DMEvVAYjMUGDUSmxKrsunjPF271tS31qKKd25nLHdBvsu4cEEkP2TUmqD3p2zBVnkZY5MHZHmFLbg15BoNHG11w",
  "key3": "4uYhtudKch86Bq65G8TY6jfDvq66R7N1E5B23am9xRHGVsNDw2dRUUVc7Tw55bio8ik8bdbFr1o5MrZVYZwQiBAp",
  "key4": "5Trccse7xBZuR2pgaTwG49Zi9uQTpwa234HHTU32HqueW2rd62bx4VcR7KBqNXznfX1sEzVygBng4gs6hfLuPeqk",
  "key5": "24UPUUwZNoUKKygkctpHLdgTGQer6yR98aMycahQsf479etdG2dovy1k28A1pnAzqzPhvfJ5qmCTRXF7vYzPEpFx",
  "key6": "59FZYsLXwrzuHicTQHaaEAukrtbqr3aFpJEotmF6DWL4hv4m8vLoszxvWa77rqqou1MCQttQhtTYNRubSiex64Kw",
  "key7": "3dsB1XBhuCMinfyNmQfSmNNSiAXFf6QRJkVJjU2uueiT5bEJBkT191tB14kxRzdfzhJh6ebpgNPuMcDjojuHMhCh",
  "key8": "4Nz4ejMMYVwoFXnbdAAGyXapAShpx6mGuZ2aWWpRyH2BiArwmiQjFZZVrwY3yHokwP4wGp1kt52n24c4SwRXyimx",
  "key9": "3BYkDXRXT8ZpqwNKtdcNZMoTJVCgoZkLSVt8ADW6xsRJEdQAXStfM9L3H6YF9cKwdWYC6iVeNRZqkZJc2wErG5Cv",
  "key10": "4utKfevrJ5RzxozjHXHqJ94mKXw3u4kSobVEtDKhzi23W5bj2TL39zs3b3nz3thw7egUhVUgHZWEcMX8YNraVWRa",
  "key11": "37EaRBSf9r1puHL2wmDtfVg4B2nM7ZftX4gRYjtAdezB2XNhFxD3s96CoGJdTdxjzY1XMWusZGkzgFA88NWi7RRC",
  "key12": "2C3dtZd23DLPA6zCzRxs5x7j5vLrSQpTBotz2qztc7LegBfq9N81DyP3XNyHyJgNmaaUzbDZfbRXbuvErwpZoJCL",
  "key13": "2ZjsUJSyibvWwEtrNzLuSveeB7CvhWMTFBfEu1pyDAfjdjHgqLrEzMHhne7uHnffghULVh4Gzw67oAGDQ33nsCiE",
  "key14": "66MYYQtAHyctLdqfmC3bnGZrpEGRx6bMkhjLNA9WdVPWanQFT21pm1bkXp4JQaq5hSFbHixnhQJwq2iDP7DFjSES",
  "key15": "5usiuWnKvB8foAvmMUMZTR4i9zDxJ6XCX9e2mkoAG9rY7surKZNEjcnVQC9gc8Y3CNaXjVu9NDhruDJExU7vSA2T",
  "key16": "4mTg9s6TZgcvsj8XtsyfgU3A4RsRyfJFbo6knQZ3ZH48v217HtVG39SxTNFeYCc8aySrCcRomQz4ovXAzYaV2UZH",
  "key17": "5jx76BxYrkAp85G4vTBzbyPYdet7YuEamvb7wM7x3ckyemkYaqXSjZRhz8siL36o6kk6cPxnJfy5SFhKKD9QgLKM",
  "key18": "4eHqdxiampUT39iNG8KRYjAUVyHx3BPTyaXw1n46DiT82FnrrqV8oAoeEa8nKrJzP4gFgWQfRsiSrzfP54F9k2H4",
  "key19": "3BFw428NAvPErf6j85rDU5rEZsUTaPtGmZmttjXEb7CqfKTbcx4TkTv7byxJP667BBhyNZsRoRWLG65aEvLsF4UQ",
  "key20": "5erqNkn7GEpKSfADDs8teU2amiZZuaURytuqYAakqHmX1SYFsi1hYUuHsCwJgb2fKYGmCgeJq4tC3WKcCxXwKLft",
  "key21": "2j52dsxJjgA9S1f2ZgQoew4ezan1X1mWsxB4XXLyCYVargDjiRV38LWcSKZPvh2pSNTJ2p45T2oaNfJ326BHwFAj",
  "key22": "2GtuRrUpEUwg1T2c9JHXaSWFSpai3zmwJmPAZ2VN2ViQVcighJ8H8N6tf7jmVRgWzUxxAvJ7noQhPQpxRL2QAJD2",
  "key23": "pBq7juyvGC9sPjS6rbraRK7xpJmBCZkvt2SsfbLEeJhV6RQsGgnHdiK2dmRtfP1VpwcpBoDnjKffybEa4BYnV8V",
  "key24": "5vkqep8LA7qqdLaoRVgtg8FVxTgWqJ81pz2BNEbhvMnirtZeuRgY9vkW7nZ4eEZDwoAzrpUktG9xTxkK7gCpHbqJ",
  "key25": "4faTXnpAQm17KyMAa75HKtwUTazan7HzYyViUyfqaWUkJLGeRdZg1D7ngmVmsVNrkGxXvBbsfxB8NPrZb84tqQKs",
  "key26": "33baXymmWeGzmfJYWmF2TatpdKC9qAGV9wj3TNBRPEd6T93L5zc4JRi185WmeuJ8kkF8DuntycS2LfYhne9w5jBN",
  "key27": "oqYjH3s5T1s6yQjLrm3fLPMQBUe4ntTaQyPgZpe9c8nMBRp7DmkMmqY73UTiZgoyYXjsrm4gwgwhiweCdoFVjAD",
  "key28": "55T396miy3R8HZeKV4Wr6ppLQxVX4FHFoMgdU4MHnZXkkJArecZoFmAD7J6Y9Ea5ThnmdfXXuJ6JVEMDMy7iNKUY",
  "key29": "nLrFd8nY2ds5CWg1zvcEko4A2tAD3Ytc7QvHBSEDq5PSC5S7Z8gWLHrDQszJ9pq8Wvf7YEHMi1MJ4iEu4vT5Tfe",
  "key30": "38MyExbR7k5caHgyzQsKd8DETJoeuJsYp2uF4TTrZxjPV5tJWABUjDZEVaqNuv9Dx1AujC4E1FEG8F9BShqPrYvh",
  "key31": "1Z6SJhNQDLV9sP3VE1yBn6JZWqqPGUjxF7KsNd29DxSP2uymFo6ncfY3eV9UZtrQihiwdFSNa3qJ92UVo8qYvRT",
  "key32": "248LajjX54wdoFqkYD6p4KJYA7D26JQ5k4X84cPHzT3qEDf88hWEHuKNf5UJf1tn5ANg8swuogFxVexbWfB29Vd1",
  "key33": "28Jp3EPHnVMsCrjBffVVrj4zPPKTaSubt5gGkbN6QRueYsxUshd7oqfWXhxa32WodHusVLFQq98Pw84oTmcRXeku",
  "key34": "43T7SN8CaiNogfnkQx6kDqMcA3xG4Do5GRdRuDBnS3wwjZq8ExGucnXfXf2ciNDGbGoB55B1Pxe4oyJ5V6LWCJXq",
  "key35": "3oeHjh94QpzpyFeQKS5esXkbqmLXRUyUyXEBKtjS75CFtGdBLsHui39csSBKGLp6JM85zGVnt2BTbpScgT72khaX",
  "key36": "2UuuWgoa2WQGrSL5Kq2ysrSJ2snzk62QEonNjYQPCL5dVjTVVrF6FL5gj4NSE87ahuSBujTCF8GmFSJ1nFP6UFAQ",
  "key37": "3BDevnjs5rPsufTYrb7XbzmKheTWunQsVF6xj6PbpTMY8VKTZMDvkke1xSWxMEcuqdpd8o45sRBwW3bAF59xsaEY",
  "key38": "XYYfsXbR7oL7xXzCzqz7u4KbnFVrVLJBDMKGAm5PSbHVT3baczA9nExTZ5eYRPAgaWSMoV4t8RHNn1f5ADw3TC6",
  "key39": "2Y3FGp32yfonmF24k6BhzAVskvQCG4MdExh6k9axAJv8LZoyVQmVTNn7fEQFcjeoPCm4MCav4UwiE9ydy8xnVNmY",
  "key40": "BpQyFV3aRTgmA2nwG8zeRKKtN5iDYgo5Vj2aWQh5r1ciR4yNQR7GCpm31juzZKb75FZ6MT7H5bsXbLrenizMoth",
  "key41": "5HBxuZdBjsYHpB3CWeikZowwCAM3X1wQH1g1FrRXFPQ2BnufXLSkmZAcC7NQiQqkRqN2R48USPNkBH45n93UEf23",
  "key42": "4QKS28xbb6XZPK166oaLSPgP9bM1Gi7jR7b2KmBypX9mY4mcnQqv8bXh4EeJovQzSYjcrfufBfSWNJoyYtpovGsX",
  "key43": "4CvH7fiGCkW32yGEpyJEFcYznLgS5JUt76H7VsE3w4g7CtR7x3fgc9NxpQUYYKa32HMLaJr3aG6JEqHTjoYFVJJV",
  "key44": "2RDHieEEdrxDgjAPEoRYH9N6LM5rVrtVwkAk4bmYL9JEfW9cCZeGNX1jH6ZHqqLHwcd6joun8sQ6E5nbBX2RW5q1",
  "key45": "2ujbbirB5D87abBZmPWtFEiTKhPLVKgdoN6xi8eqmva8mArzL3ohuVVnW61FMrmSkp4yzD2nSTyEsPTPVLtUbTCx",
  "key46": "3vjGj9ZQHS1J1PGRwgnhELh6MTLcZJjHMRk8ttpynnhh7pCdHsfu6QC7pMQ3KmqKXPzFH7PN4TbPT6L19yBDyGfD",
  "key47": "5yQV6wh7NUVWZienmTAEin8rEAdmWtuXWLB919XfmyWr3LQ62ZTVJAh47V73FGtQNq2JczBscW2YHUnUZGdSaCkW"
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
