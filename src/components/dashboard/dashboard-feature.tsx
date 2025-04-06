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
    "ZyqPPiwhh6g7ZMYoy9JsbkrHYt5Vo485Ncf1GvNYxWjy1ScNdKNWeH4o4SE8kSvecUCJvexUg3uSzRDN5YjQozb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3GmSW7b4Rz3P8WrEpLbY4PzQtkVY52bvQHrc8YiiXZRxqZWpc8J1erAzs47jahxKa1qNh45tUUnHMPzq4SFGPeGu",
  "key1": "2Zbh1giBwDJM6AQ9NE5BSFFaLX9Jm3R9qGpy2LJXH7hH8pt2nh5aNyhtwWPRpnNJ5sAo81FiZoUhDk6uR6duTQFP",
  "key2": "MbajGGbwX8xYE8H6o3EXMN3LaGBDnnhLaw4wB4cSA2wREZUzLg1GBiGwjXDGTxxnxKAVmUUuuBesRfMELRuxLAW",
  "key3": "kpebM6XEES7YqMCJhNCRgPLPgKDR7G3Jzw7GBY5Fe6xMeCAaWJqNggAxSvdx7PrXB1iDdcEmvENCPRovQC9LZhi",
  "key4": "3M7k8KBAzEAGbtwzdRijniBHL2LkdfobV1B2FpbZxxQQg9Xik7KWZijCC7UmxBBLuXsv14NZhMuYnc14t9w7jqrT",
  "key5": "3qEQV9iVSJoW8chKqsyxo1xMiSMG985Lat45RxKkn6Z1N7uqxpqm8CguF7HCLqncWCwwFps5pErchuJsosuTuvae",
  "key6": "4Ar7X28yDuNbEzi74krAWQQKcM5zmxj1RQ4Jk3heBMYZ7raznbGUd1E5AfsQbJrgNasMtM9PacqHJdEsEjVRyJnc",
  "key7": "4BAFstfm571C1GFf7aeh7EUnsJr3AUDb7YXFdExzF4ZcxNzesUcyJFyxSDViwdDydGrrEwkw4UaGiscMCGyQEpZb",
  "key8": "5XzFFVuyDa9MwRsxbaUna65AzV2E43XqwQ2kGbxoQkwCKzSVjxckF51vD85Fribt7Gvdaf2eUD8xioXsozti6RL1",
  "key9": "4zQobEgzhwe7TU69R8npQuqoJVYCfJ3YhUrtG9moZBhFCndNtNbgBRGgt4XbNXLaPv1qKxwfsUd5b1AAx95ZvCit",
  "key10": "1ZJnqCJeq9gpvHHQ7euV6GJdZKb9o5FTTahMXcNJwEMu7xtmHCH6ARKQZy5zQWdNuNZ4j2xmzKnX4eU4msEsDZp",
  "key11": "5CnArnQkx6SEFvF3JDrKaNNDA97ywBUf3fqZAk2b278MrL2Ka4EPHgMs44nE9aw6w76xbi7NJJz26NwkfvMirjew",
  "key12": "3HyYYbHTFzJRnqoDcZ1Vw89zjHcgarUZpYdEx4JkoR7zKNeEAex4JbW8W9Pzb7MrP1RynjCd2GMsVCRfVt83dDZP",
  "key13": "5FeZ2N2zELUwwc1SHyKKx2emBXWfAAAjDQoeWLeV1TgffrCMnmu6f1MquL83bNYPDVauMWSqzphYZnn6GmvZAJak",
  "key14": "3JqGppcD8FQdhRFs1pML1PJTzd7m6F2wY8CcGxhPERW2ayZpkx99sPKwgHFjJKBpLRygTxwZTqtuWwwD6se1uhs8",
  "key15": "4oPQ8eGoLcHqnkMYhLH7Bjuqx7DC1yxDMT83S1AC1uzWq4PSMxNeRahWCpW84Dwkk6GjBxntNGYfU6NWgpEgcpEk",
  "key16": "2mjS9u36NqY6v5VeW3tX6jJfuqPBbriSpgbhTKrEDoyY6moiLhunELDmo1AotoZ8xMqKnMqMYczLYbozsoyk3J2f",
  "key17": "57XrJpqasXBivqK1dbegeSDsssLiNmPF2sj8cBavVrXmHaiDMfB8M5h5oNFmLrXYqSbQMNfujUZMVSwd673R6Dbc",
  "key18": "tWwGWcdhqGHiujnehWFeUYHTpQnvMzjknZEip8f1JbfcNuEE1W7r6339vDK7VkV9zmkxbQ96spW4sRFkMqAKFvu",
  "key19": "26LdxLGfjui9K2KzBua6pRUhCGFVKZDQHWWLD3UNapjyNh8B4J6B512X596ftrs1C1ox75KYggHc3PnXGnUpMGvd",
  "key20": "58Ph7XZHxxBX8Yf5VGQsVTuWa9B7Mj3LZFq6cbvbA2ctAswjYxCof8EegNqUTmVp1X6qDCvpMjSrGo4HoZe3FG1n",
  "key21": "WXSoavAeS9edJShn8TNyEFUWvP9r852bb6K6vyZnGSXmi71BTse3c5qF3ayK7TERJm9psc2Y3AgAajZDpKEjBiF",
  "key22": "3mcezQau7HCYqjznA1MP8kNnURuCta63cxThrUaqWGVEKVTZ4KqUQQL399z5r4Hd72tHrkQy6tMenmJqDBdnUcFk",
  "key23": "24WvD44FkHuhZcBh1Qk2ducizXqs8xmBMisT918qQWgnCQxfdX4sHBH1Maj9DXLSbjQWmfa8YKRdACmLecFBs6mE",
  "key24": "4FFZqE776hrs91sTNbEVySpqFvfC4XTgMAbxwTZ5iWxKiwkaTxUqyJP5uEjSWsT1scFVZpeDgP3SH1FcYmjSZKAJ",
  "key25": "57m1ZPLnVKBfbHSR8Vm6nHfU9nPmi1HznhvMMoktVoi4ezkN9RQvRrnyHQknTbusAoJ8m6uzckfh9EDMunhH5Jxi",
  "key26": "2w8LPCAAcQS4jrqhhDv2AhW12ohxpBpUx1E92nhUrLJG2X2ZyxdPCh6YA4KUTbBmDcatiDJHnSdqqGk5efDMMbk8",
  "key27": "2y91jXxZpCWcjfqJVadrNvGDUqoCEjaHug7x34SRqjrYVznvYZLpMYxQ6EmFYtanKGBHNdgS391TesJDLAz9Z894",
  "key28": "4jpdhchEZhEhHtui7VuaNzUhZ2uGHN3dD6pKQxpVNxcGfDxhqvHDbGvDZke7ySzAFqQiAucU61oEDB6Y99PoxKh8",
  "key29": "4Km6kmtaHquQ58edJBYSjBZkwoj5QcfrQ4ZjzXi7xu4ErF3p6wvWzcXiBWgTKF77JyVkdgrjej4mc6DMTcaqwf43",
  "key30": "if2eRueJp4FiGwGubFyCAcaGYGUMyerKYg4tD2Rpz7dyNXQR8rQDqtv66bWmMJrwzP2FbfoVbdQrYiSePcGbG2B",
  "key31": "3pqLk3k1jnURUbTAR36TbvCCcYFdnqmQovzTTFhjWJ4xP4aREEJBrsaSNQ16TgsxR8NRQA6TewoqYjeix82hK4rm",
  "key32": "5gCYLJboMgbp2u3Xb8VPnFxhBAELzaEibvRRCx6KCaEDwF1d3bQXsb77Cdta7rx4qNj9WN2sY85gFfrHt652F8bJ",
  "key33": "3KaoQTtEgTjWz3hBM4E6bvyPykkbPmzXYwmVdyLrKNhCm5HXqRXrv86zySic1EUaszJ9U2k9ypF4hQrPtETVXMDD",
  "key34": "59pJCnDpr2ALZsqtH4CRSF8r2vubWg6cUdimxtarriCWrMQEzFg381raEK4au1TDBF1jVZMZ1jxCsNRHSxitnAva",
  "key35": "5xgJGc5uUhH8XF3GgrkGfcBxaLqfn2ggu1JdQy5UdENdFg3KGCBPfSyYCJM3BrbL8JxnpR3f1FhhK6tzu6yCYVoD",
  "key36": "3ZepwY7DWpPHi2VQTnZu4d8Ru8ZqMTMovMHgzUyqqRbcodJVspWgHbkefPLn1tPFDoR3vdhtAnuBXgQHvZKws35A",
  "key37": "5FW3e4uXty5RrvYkBffJGmCyoqJ3asrnb3U2qGESdM9naNXjHZVxYrpsxF6L2zXJuEkDd2vezTNrwZyMjaf4FsvM",
  "key38": "3yrGy5tuatmteCKmtxrFqBQ8xYHNooK4WmKb4JCSzdhTGtJYJaCX6FfppaFG5vjokkSDxJozPHDrHLwxb7ZEyvY",
  "key39": "4FXpk6vuRhwPPnGXdyP2MSmurT2TjWuKMpQryxgHK9FXu6S9SuT4XbRxRxFFhZYWRMf2ABGpHsbD7hPXSFsyE1kf",
  "key40": "3jwSwmAtuvMPHkkyCtBWASNkSNsGk5CaGXQD1oHGvMP569ZFP7PM5ymHuBZoGYXU54nmcyPE1mWAC8FXaDHKen1B",
  "key41": "2wL64gzAQ6XifGDrJmFFGSB9bUDZxWukQEMu1fZdD3sM2McAeecKo4L4uyCC2am3StqVxcjoRGwQNqBNTLJsDfzg",
  "key42": "5PcYfT413HZQGSUo7tNG5z5i2k2xGQYZRc83XeFfSSPFs7w9tUmDvySt6Mv8kY3ht8T7nPiVJKuprwkUZMuQM57a",
  "key43": "4fCXwqLuVvsU94uJJLwhkVXhBqN3j9CKVrH38mhVLmSQHUb47uj17aVXDxfbNFVJZsGDz3UY6R5MT9y2y2DByf1k",
  "key44": "4vNGWZf2WkGiMZoE77ijCg81j9JW1oSK7egVEEfQPsGiGucGuCp1tXsAshDzHTRwouE3js4QwVn3dXURgoJYHUHR",
  "key45": "3nTYBvTtWqTnW9zPUrgK1e38qAqNEYfmWrFVNWQoHMpiQy9W9MFH8tNovPskD9whZuSBNGJb7Xci2hem5CMoc2Lw",
  "key46": "8smZgmsGtLiEnnKgXxt9Ci62zb9oSFiDda1vu7muV1dg62tPUysMUCdnrAVhxYjNoPJkC6iNLJEeE7gCdBB1UPe",
  "key47": "4vWqnWwyhDCQ7yihNQhxneydrttQ9cEacBV9SHkqMzNA6ZocRPXyNmGJg6VcyQ4kFL7Fgf8ximUxrvVdLZ82piwy",
  "key48": "3nHaDaNLfHysLqnV3Y9WKzi3CGDZtuzPY5v1DKFtB757kzo7nBV5A7fsH69oMoVdBPu8gQ9Fpp3eNFAxRK6XPr2D"
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
