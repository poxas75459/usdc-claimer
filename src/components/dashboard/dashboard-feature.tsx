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
    "5bxJqUPc69ouRUtS2DyLESJXZaWxLHWdDkQcSSE913ebDjtyrdw22qajBuFR8EWKHufRQMoJXL4vUqngSF2pupuV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3dVxsN1yk3Hzumu7kRwScvCgAzyzzihYK24D4WjSGUkWWeUi7uwsiFtB35p24nNpY9L432wTByiJJjDPtzMUALcL",
  "key1": "35RfX84xqdVn1GcFwAJH1sPTxwcyRFbZxjmKmF8jbcvXXnqjQisEQnbXEeiX3aYFSvZUoKhwud2DBhzYFrzvdqjz",
  "key2": "5BBnptPZJ26UXBLprzYVcX5jRUjBqRNHuBaSMjKFWA8M4SCVZBYuH5T7PxvEfQJoDmCzguasnXwPukMgi8MPdWw2",
  "key3": "uf62rJdEvhH9qvx3Mpajq6DXviukVYUXmjxPJn8xEsFRxqbRVbR1BsR2nWnGmHPdbJ53j43YSvyRvmchBcwoF3v",
  "key4": "2iHvpH6nNL6wZZkLQhhDnY7ruT7ZrTdxSuxBzLBRFynPo33oXekrRPRnHUkPUxwTv943QVDvuc7Lw9sUvUYTRkqa",
  "key5": "3TtbU6xYJNjhAD7zfXDXhSYcsjZ1rniP29fhScpgTKaAxvGTVPbzAmYwNmc455JSMw8pB9UvGj6e8fq8KfWQxxDG",
  "key6": "3CDjXFhZxDM98sra4WdSVZqPuGdn99y4gSE8asRJJBmiy4qohPxaNTz4nAEZ2C6kmhQk2XSuCgC3HnbuqebTfgkb",
  "key7": "3LVbWmXYohgZYUprcQFykrtZoD9AKxGUv1JsWEzYaAYNwS7SGEe2357tjJLnEGCJHRShx8cmxGAisuj9f8p6ibXa",
  "key8": "2v1aBZBAMUWnphR4QuW7juBRHtZR6q2eAz3PxCwLXakKp9knsFBEtCcGZzGmyeP9AUc889EPFmpGRrjigLyrCLoE",
  "key9": "3QFtkzkeQsj6mdL1BDPNn5ARkVBEEZyjfkR8d6prN9Uig6S93Kv8qxpoYgUADB7SifhTXNCmKHBameWzDcMYDjxY",
  "key10": "3xhEKi3LJBVXivcDPk3fXAdPGDXU1vAbwMkh2vWeYEmWwpvurvuPAo7gtyi5XATWvDhvs8kCzDu3Dqy22gfFoswN",
  "key11": "4v25GZmzY4TqofD1Bk95NNnniZ6RWhdLd5qP5kBN2wAi8UPVyZ3nUacjsXvjbCPvwgDCKkyg4WeYyp6g41tMQyM6",
  "key12": "q8oBcvMZPkJ3yeWGvURRtHjfB36mDMhwLfznfw2PJxZst98NH2L1PevkbXrtAdGnxFiBW3KBNsdfuqwXVoR424h",
  "key13": "4uV2p7FzwAd1amTBAviiUUMcZgakTjqE9i1s6QFpXExtfzK4SjGqnV1tPVHSyPjk8m3d3BuAdNYqSGwmLruYBoHd",
  "key14": "4zaPV3J6msZa711YkSQVjp1RwkrNrh8GHGz9sttAeEeBFcywXQ8moSqdz9GkrYriLyhciATBrqMXzDMiqSQr6jDK",
  "key15": "uUWRYwnF82ftxMoBbziGVsg9FbpUV2XZo3xXTjBzmpUDF24Ftp5Ara1kfBaAVVKRuFodjScLLPSA3jqMuGUc74m",
  "key16": "5u7vDbR51iw4UAXsYAMXXQHveoYFcCUuXvshyrb4kqegL8gYxA5HazTTrrJUot35EiFPMHmJAp5tuZg3yWNSzcXR",
  "key17": "5bJekq3dm4kXBxEHHuSBGDhcVb8HtgWXKPDWqT5ud1oXgCH4mzgB14sokx6inUBTeJKoWrwFKsncSvXtWCPX8Tkq",
  "key18": "4q1wze4ajf62CBTbT7ojtU8E2ceUgL3WvKrXjkDMvA4gqkZPdZ9y2xzLRffE74HWT5HkXxKskoZKNHs3p6EuGeUt",
  "key19": "4nHkGKFWwRWWNVDJajT6kuVEiTe216bJ7xFnj6kYMhDHJ4MBw6WXjRvkakmnnF3WHnQvycDocH1mdg5eCeMEESqK",
  "key20": "3x2n2bKy2Lcy6aaWqjjcQmMfriF3FXduJuWTcnUrkzTLDu4LywypRVm46Q64hhXRmcYLxRrPrDmUiPo3WXaE1md8",
  "key21": "5jMffVG5Y1pcuj8awFr7xhn5mrk2o2adFLYW169ACJ9VMxU5bp7Ah6s1cWdkhJBFtBoaxNAxseFgvGG9yKFQo6kV",
  "key22": "9JV65Lp3uhe9sLDNfsHiELANDCNW8boh1XSvVyqKt1nspBH8SK9F8XrZFopxrc6eocQTQWJifkFfi3xe3vCxFGB",
  "key23": "91Ud4KBfrje3KsofR3fcWy1i2gzNenzA9hEU8dRvFbjuWzdut5RQKuXPs4eX4kZ9m1niGfTj9rHiZWPfHwmumN7",
  "key24": "qoQ1axNjSJNoVhpEegkTwsrY785k43yL6SQGUaadU9HSe4HL32hmW3FYRN4XQ984JWj6VvtAr4eeepvVNAUQCg1",
  "key25": "5JvrhADGirrRrU4hEi2mrv4y6X9jviC1NmEhUYSvgjqPCJ27YRRmY3PeP9SUfjBiKmnCkjuvaocLoa4f55vR2uR4",
  "key26": "3yvvc5ESd9V6wXWCMh3hCqXwPT7k8hAqd23S9ivLAYJK3fFWRfjjmgjFAQXJTrNcbdB866nt8NCmXDbaw9GJEdnx",
  "key27": "2z4ZxvbuWfH4zDUUQ7qg85FF4epGdjA5UkJt7QCA4JyzZpfggW26hzxdeM3j336SJoARbwBUqDB15UWaJvi5mp3h",
  "key28": "4XEBibKTbtMufFXidxbK98koTicfWvu4xbEfwq1qnt2vFuFRHTEyMUmBu9zA4V5cN58Mhh9t3DF5RvJRVYEsKMbx",
  "key29": "54GCc1HQoVpjt5bRMRnQCy1E7KemuvBobiwYxwcPqjzTGCzNaJXn6upVgsYaCoD4u4XFtVLxKuJG8HhZdvGG2di1",
  "key30": "5Af8YfU2npz1M8buebTaTyNqPF6fh95iCnhF2tjWkSkQ4oyYeKPrewhJq6Nvw2NLkqoUzngFJzTVZwwdh5sbC5pr",
  "key31": "2iFcdem8ukBtWTbDdC4Qzq5zxPMtW8WtoyQkqinwTMMqXZMCT61c5TdTU6qDYve3gcrPEx54yWf5pmmcprhhanwc",
  "key32": "2qqCFfSBwRfwhzi2wsCg9HGpKC9kT3M84o4ucc1Q46tkgBHPjUv5c8d99UvzEcFGXtAKKfj4SF3o2vknN7L9K19a",
  "key33": "5VpfDLGoU4VRVMX25KcVTcNzwfoXrzWmSCD1dqt8CSW77ADY6vph6n6hg9sZ8CUEcdKiHTj6TTzduHPzqQRFrZP8",
  "key34": "4crxFArWaFHP8yDY6hQQvZRw7RciohfdjFWqJgAeAMHQWSjLjkcVqjPnnkncPHXQXxcoyQ5hwpdQhhGoHyfeooFS",
  "key35": "5yFYVPE8ejuGVLGjKaRtgYG36PGZBmVa1EWf8akZUm7ybdWoLMS3gcceqQAyTS1bSekhsVMxgUY4UrMAqDXiEMTc",
  "key36": "yNHKJYHwHoPN5qhjEvn5MP1HgzhStQ9w3H9pYK6wSEcAh3wQAs9trk9YCnGV6sGBzLCVxXcDt7tP6jSRwSC65a5",
  "key37": "3rbZHv2ZQUZNDFSxTNPWD3g2Qr6qUPyLf7cjJVqFREaav1qqqcquhuWEm8pgWxWo7ZZXxYyFkWp679cd2hHvjevm"
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
