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
    "4yWdEu16CrzsqDC2sRZWYjxf3AMy9yUL6qKgS6jZZWTLCqFaNkRoDBg84gbHWAco7nehk45QZHwx4CAVZXMfngz3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "23euPpCzLey1xG8RVXauK1gxEA7hUMJRQbWiwcFCHYN8GH456awN6ahYy7P1dKAzz9EZAgLEUBMGie5rHKuoYzzS",
  "key1": "5s3Wsi2doRHvWfdyQFxgkiQsb7VPQGSVCU7yCHQrB7wyCJoRmzk45EazrhsHxc3uWixDrtKq3itL4dhEGUXtHGrq",
  "key2": "jUrTLSG5tQdSjefY1MM36FfXMfxnD1D3pyU8RH8AmcGRZqboogHB2wZN2kVocwpyAqZHZpkdxzwaZCuHJq4kLdb",
  "key3": "42XEXt6FmGX77R8xqLcP3Ha6De9aKchUDoVvDh9HzAaEerQZx7j4f3jtmMXwcYfcVEj79YS8jU5Ad3ijBDSEA7ep",
  "key4": "3ekPzn3LFqhYDGHX4A57JoscqLLyMqEi2hmfZhebRXQSaLZSq7vDizFCy2ZfGBKkbGTVBj1maUY2FVkQxiWjmpL",
  "key5": "3TzCX4jK5WzQeDumVaxAR4uxqZRkYHnz9t2hNBeKkmbKoDLRz2aNXg74brez4XcjPd5st4uom2noRMqddp4KEKpj",
  "key6": "2MCRu6USXezerBRWsqxhE4MTKum64Eo2a9z5qpbZxMRsFspdmhVP85ooyedSGDszXFeiPZ3vJXbHidkF92XVbuq5",
  "key7": "3DuX3WBu9o3am58NJtT5JeNGiHteaovc4TdLozgBHVEqg7MZhhQqt4mBHSuu9KYLZFWi8x86ZY4SvqHkzZh3covs",
  "key8": "5Dsb3qfnU54cDgp1FHuj3FiEXYLK3rm82u6TPfe7kx15QoMsppcjwqjYh31KpZffKWgrGzD9kTHH3VygFeSwWYxu",
  "key9": "3AU6rUDjWTgn7EaYzLtXhB9tz1cJ6oxWFwdvnV6GrAGUb9jwLjFG3UA8WPwmWpvE7gcX9TSWvkooReZjJzqfzj1Q",
  "key10": "4kjwSfU829ASqwwFWRH8xyHz6aLZAtKe9Pfcjz2YQzWZGYSUue6JcUx7oHa4VVMHHuGNduxKvGuRvw9KvMgEmf8J",
  "key11": "W9L4QAbxSWKBFKhiMcNNWfzKk5pqTUx2vPFNFQqkkkppftDLf6Bp2KW23s2iyB9pwcXLsT33QA5GsETmWK7Tfzh",
  "key12": "2YqxRoFzJnsc49CHAW2u9TKxyiHVvYrtR3BSqz4nc5WZopqUWPgDUVKers6CUXsH1NqcHkqzZjSvGH7zgnWtHGVg",
  "key13": "4htwTaRnwWPX6LX4HmzSEWbmukPYnCj9RpS4KDYNNEjm3pVVwzAM5nNpd3QY14yrPQK8UGoogr46Lwijpzh3wEh2",
  "key14": "9zrk3xEFGYejtv89TBn71Q2DQP4Mj2XfaHFAU8euwmfbWXaBfRkvmgNEhhSsVQ58d7jX6MGnxkMS7oveB9DoyBM",
  "key15": "4gvhxTryt4RUCZdRr3fF2JuXZxrWLxEsxtPsPKibw94e9im1tETPoNt62s72v2pDGYQpQmFuD8He5mawnyjGzqD8",
  "key16": "3Y5sAneCuxZbhRCPNeXvsUuDzmRtS7U88uWbULSbrKzVRdWsy1gCyAqkJ866DvcEJJ6bXPBzuvvnX5afnXB1KcoE",
  "key17": "4Uk4HzZjWkR1bRN2jRKwW4KZC97LLLJ4XRZckaE9e9Vf5HHoTrDQZJKfXzNseW47KcXnTSG3DHsy1b5b48HwcdCW",
  "key18": "g8Tb1ZV4sArqGQNku6shtcqGEEgXHptxhquUZ7hQwnNqb18tugjTcZzyEsocqpnqzoLeruaxT6Y3TKZCcu4dSdC",
  "key19": "5Admzce3HFEFQHaihhJ61NdTRPYN8ZSPAPJMMMGrN3nUKLDnrppd47epPwoixigb8HogyggJpBj3rByDzgikopaM",
  "key20": "31t3EghVdqrWd4XP2WLWGPJjR45PpS34q175CVjnYVDMAaMRi7ZsDsjfDbkDKs8oqxeLrR5iFueSXh4adiU5BWLL",
  "key21": "56rhDbthiyUC1ej6VSHF4czboRUjfLzT2gaeMRrDv2cMn2B9ufXzzuFL5fEvMpBuj3RDnX1CcezPwFpKBEFe1GYc",
  "key22": "2MxdKCKxW7C2HyHcfyq17gfNZNkDBpKWYMe2uxKMBX4gHfAGtWkFzpAXFokUgSda7srvMh2pyJcpzCvDm9RDodLn",
  "key23": "N57yitxQmiXz4MmgkKfrsmWhjzjjQysfDxYEvNAUbMc9LjozzLwo3sg2s2Ho9zpAMgW95vrMnED821XyFMjkTSc",
  "key24": "3YnMuNEkRYS18mffkzYJidW9EgrkDVYr3hr1rH68KoV3SxUx2kFMm2tnEJHTZyYA8Q9GTVchBpGjDYNk5cHYHfJL",
  "key25": "5QcXzcCTpZpKyEGjvc1CWQTdh378wK1Pzfvr6GvWP7498566yzkCESgQVCwiKs9fszyqjai7PRYHjfpEaNodgkrm",
  "key26": "2ki4Kyjv9KTVqASqVKTiNExehhtL3uPqpwN1KiK53P1LR5hGF8cJYrK9NY2BTxsoL9LLvqS5BBkz6p5Bc6a6SrUM",
  "key27": "3A8AJDZBuqN6nv85PxJ1woK3QkKo7LU7T6AdZSVkoKoS7VLJtksLKUHLZGZV2zdZqyiQCyS8CqZVTpPno6RbjNjs",
  "key28": "59HUqSPWGi1ic8aWw4JKWAkbkQ7F6r7bfnQhNewjCKXyuS2oYsEZp9DP9PvfxE7CoR4ZPqatAsiEn8KaiFQi4Wuf",
  "key29": "4dRHjNdrNNqvoAL4VKTnNx7wGGyxhoj2Y6jrsWZJFXkAc4Pqm2KNF7dqFEcuzLYQF77v2rTFcx7zZmRKoz4iyqov",
  "key30": "59LiEHF2JMUPoVRitvHkfeRDLX2cK1jsvnxVXUaJArikMFwf1Y74DsBsh736ca28bKJXJ7xZiso2t3iuCGgHepYo",
  "key31": "5CxQE7SmvcBhtBHfRzjdEBabLtG5gj9gVPTHUtvqxYgx6cvpXDaAmV9AFdCKaQ5jAKUqKHuF4J2MTpDsifWx16Cu",
  "key32": "79CrePyriR9HQZkJAJsohyhw2cTiqvxrkRYmhLc2aXGW1cmTuRSvawoLFmcGJUpvuH7MLKXc9JDmsbhT5d8Fwtb",
  "key33": "4neMzksmHCRdkTmUo8356uDCXY3nCW2Q9ZDuoQTAe2qYxRx45tthknxVmy69DnfCm3GQVwDC1t5xMyzSHfcb55n7",
  "key34": "3H9Q9ob1MPTx7UpbwLtvx1cycQJAyyJEYep97eqR4DGome23eUnG3BEu6yVuDpfTk11xJUcx1TDT6LD5JPioW9EW",
  "key35": "2KUxDdVc8syczddUxc9Pi6aXHLq9i8oV66NeTEtXqJAD9CZKXVkF3zeZoC857tzfdtVP3KaWu3aH6HxjprxbdENk",
  "key36": "246bgNYZcfZ3xpcuS1WctEcLrx2XYsZsDED9xJGbY4VFQoFny234hx5KoahcVwRsAzWidx7uC7woXeM7ijZ3Mnpv",
  "key37": "2zXuemujhgZizajY7BZ2WtYSbV9kzxCF85SML3LihK9PVakorSipU4reW6Z1RTMtpwvJtuBP2wYa3cRWW86KwMhN",
  "key38": "2VLzDXxRUj2GM7TfVmdK3yLcAYB4cbE3ujV6amLbGjJcje2feM2qJmoWS4MhvFxyd1WaY294DEZoDP4yr56jaoJJ",
  "key39": "2awhFR7k6bQznDuDRPbrVkPitL6Jf8QzsBQQqPbQaJtaXyriQnErJC4q5gMGbEsNqPJxehfx5rFhVGVtALKVUndv",
  "key40": "StmR48kCd7AAUKVdqb5pD6wpsBJoBtEgMar45r4K3GiajQ8ZuuB2Naw4ELwsTGwbDqh8Aopp9kEgKpqjjEUF5xt",
  "key41": "3mVg9WMTJDSoeW9nwYAFiKreznQCBubpcjQf5nZDrHN8G7tm72vB7seDSMWidBJXwgNvYxX8UR1z8AEcAfvjoeiN",
  "key42": "3xGNK7STt3AcKq3nENjgF2m1EJgLeFiAtJ9SzJ1CSvficE2UJi29Myq9iFCvEx84kstyN34xttpEcHs4wcaY6KXF",
  "key43": "4niNBVPUMrKzdZuoFzuqjuZjos2JsQWYxh75yhNhgQNmsgat7aeT1TtikKdwuwCyQ5jjv1oCEUFGn7iZpe6zbjyZ",
  "key44": "3GQJpBjSgXhZ8DS6TLx6A8VMnssvP3jXjiXMNWLjDKC8j33t8cYdJeArXis78buLqF5qXSYNW2L6qpfKBjX81Bfv"
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
