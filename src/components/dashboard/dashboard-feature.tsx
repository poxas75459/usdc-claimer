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
    "3x2NmGhaEntifoGQnZtDPfSM8A5KrQ9owvfJz6KwH7JiZhrswWKjRKPqcGxT1pabmQSYUGqZaZYUvxnnoEunEpy3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5yJV26LCo5TzHBburCMyd24CAxCrK7aMgkmK4qekRsKmdNsghWYLyqfTbfdCjKp1fS3iqwLNNRTAf8sh7Ga1g6sR",
  "key1": "23jwZmiwfswPjytYNKTmPYRfSvawTnFa1yKayrDEHFvCiYc8xpSwdd4DnmXsvTqPMRj7oPxh5cL3wnny8zpyiFoU",
  "key2": "5QAjCkbb142fMhKnkqguVCoTnnsogdHLGBV68ps4SLiXd6Dx6ATfxfnoMfCAPCFK4uiiujN9Xga4uJugpJFPgLus",
  "key3": "5LYahWumomB31qXDnX9PhyJzrgBPTvemxNdqTrE1GEi28Za3DMdmXqvVxUKdfThWo1TjpEYjMBMbkop8F9QsWjpB",
  "key4": "5NRBXHBQz7XV3g9xP67K8Nk8JPhrvHr1896KPbd311e5gFneL1q7tcBwMGTWE1KBj9vKao8ZGmngsXMJokdoGmcp",
  "key5": "3yuycFdhMAtSTLrQe8DT9hXX88JQBat7dqqLZs4c9uzPF6N9qwbas5yHBpDn72oVhA2pxdR5xcNPwutjhMd3b6yY",
  "key6": "5NLVdoiD721B1fUrEFWqLNrtxKi1n9qa7GTF5bocR6j894e8qxEP6pJwMqeS6Wehxntu6y8ybj4it8bBfnHVgaCY",
  "key7": "2ef8Z5wB2KQoKT1Mh3qrdFfxN7VeLQpU8pFBecLpmpzXkWj3E74wsHhQnHMZ18poyuSBxoG2XhyP35Lx4Y4JcoRZ",
  "key8": "5kEY3A8oJpP2sCDxLdjbBQqtDqYQyGyaDHxkjVFEaganZbieuLfq4UZ4tnSknxw7nw9bbayEcMh5iE6bG1DJwACq",
  "key9": "5FfAxeScTgN7zGFoHQVYiXi79GqskJCTdKxjCGe64yS4zC5GhZKsVBCX9AK59ww9wfBiCvNCeEgNG7PRYPC5MnJ7",
  "key10": "5tZci4FanDU3SwzpJQdpsiJrDkqqnEa8ismD644AkmKLnXbDSCdVpZTwCvTsqGyyYWn7yZ5zLw9ExAcSY8iUDEWg",
  "key11": "3ghSUpiEpr2GSfgbQiznPmrUxJE4hGYRBQDaxSzoXJrQArve55YJZHvHdzokxp1c7a1pRC7EANFHNwkZMfE4wdzK",
  "key12": "5P5bV5Wq2ntFg5tyw1AbhbyVbtzPRhcyFxPSnhQQbek6JK3unma1wmzsyaDiJ7VXK72bsg53DCA6u6MDYeGvoHL3",
  "key13": "65ACKsNZMpqK9TdpHySAc1hyLiavTHQbmsRaJqbmc8BuEGiic1M8MD3GoYF7fCCiKB9xPKxbWbDS5M4fAJ1aiL5q",
  "key14": "5Mk3nYexUGc9TndFwYmm1uU1ivfWQQ7CtFUGtnXCUGpKwXqL9MouA3NDbpbv6cNEgnNX6YSpQB54fve58Qh34Jtw",
  "key15": "4mTJQC6QdqLUN5c84EEoxNVjyhpvuY55QY4BKWGs5ZHwX47m9tXe11ptTruhVihBP32PSzQzeJSbPWqP8UvVjNR6",
  "key16": "2aMcX1aPTcKTKr9wvuPR8JtqUEheAdMeDniuHK5Revj2dicbsAwaGwG58Bv8GjW36UgExQBqVA1d6kn2dMiLpd9a",
  "key17": "4TxfyXGDDM96Br4WbnNLXp9EBBXVrDNttNGHyef5RsVXdNM2T6tgzFVzPVYZc2aXNZ9yuFeHQTQWXah8wzQ6xP3Q",
  "key18": "4MrmkwK3iA9S33VDqBCfvNKz7UK9pP5aWAoymhVodhtYYreCkcnyLx6aeGUzX3ByrVKEvmm2zsXtWe4pJ694YYc2",
  "key19": "qnC4eDid9EM85M424achspdeyN6sAuFNzjgwHRTMLBiKfGpZNGvCL8XERoHPC6CUvgSkmzHTsFhLsjeT1KNiHHY",
  "key20": "2NjNvjfP1Y6y18L7VMjj3a3Q7haWTFVvagpgbseu5pGLCYBb2X4A5bqYEGWi2WKu7pZUp9CxGh71Zf2tmN7ySXxT",
  "key21": "43GSHwSd83YugaaBy9E9ae4R7LUBUUpE7pWktGC4xA7AFaLc2LS2LkwhFu6HegXCPMVxHnctvd8ZrUEapu7tL2p6",
  "key22": "4xNsv4ZDPpuLzkjocmvFZkzz8csYHbKpfDpXigeeTQ984coSJ6QjADmfD5ikGMFaMy25XRiDMcogL3AN649eSmGh",
  "key23": "6LKrf5ixhnYt5kT6hNdo6QQ83QJhs5hCsgojVx8aAtyAtaUoHTBW2m1YqnYVwFFvZ893CQTtAXKYTNmr2zryF5a",
  "key24": "3S8GavhbPkK1HSggepe12ZjK5mcNxpTsKTFSJKa1QpgANnRn3uPWcWhCHWK5TYatBxjZyHUgG1ANHzU7tHX56NXa",
  "key25": "3gFAve9sHJ26n6uNwFnmbkYwKsFixY7UUQ6XciNYVK8uBArqoo1g9dMFWUq8wS2vFTj5dtcPtjJoXtcewc42GCnB",
  "key26": "2LVpiMRrL5MuAhyzBvdK7SVbKh5kiMkAamD6AGikDYPzFu43zpPeY6WfDcnE7NbF9EvY6wpZcfE4zULvw5grKNyY",
  "key27": "2PS2shcDqQC68gCXFEcVHD8jyt5D1gHN4PernhP7nG3VcEFghXLTWqcAuGfqCDrqYVuuFuhjLLiX1tReo35tSQXa",
  "key28": "4GJ4hfGPziPG3yuqXTg1QY2fBgsqSVWFodAdXe7UgCNAv4KJ2PyecXMxXvBb7XGjv8S4kVB6JMSP5FKGuQ6ZmSMT",
  "key29": "2J4jAjEuftA7m28nRjr7BwQvB9ojX6QyWd81RjmdQnP4Er66DMEZo2uoeyR4EtUo2MzLTLthQs5dRRorSRtnSYE7",
  "key30": "4f8wWBQjf954Phnvu63ApjmsexsTiUcnPuxVSP5eh8dQNQHYjn7wh1idWh5xtjGF5vLFhUg6nLUPnyapbCNFJ53e",
  "key31": "2TTYKrEdDsikd1ZU2fJ56cbN5PFRs3sBuBvQf4qVn8wKk9UQK9b1JyYK49GPtQ3KUwsp6p3K3HNeK2XUiiSpJFzG",
  "key32": "yHGaaPSpKm1rN3cv2H3VTu9F89p7h9MkJuegZvMixhhCpUa9Ms9eAthZt1DCddDXjz6ADGwkgRwFw8Pu4AQk6zq",
  "key33": "56JFTovyVDet4aNxxL2eszhmdK5MJCK7b4s4sRS7WQMJPR9iXw2VrDCDm4QJ7bvo2i1qgjNxBCj33ZZkDada9vQi",
  "key34": "49Rsas55SD99LmEKHti5ZyF5Pa96G2Zp6Jx68hKG12xCp98Q4iGVByMmWKTa5U7ayprH5MwBEuB72EsHTfGJkeJZ",
  "key35": "4k7eosvX78ecDuTdwi7WoK7JAJiuPqsgJPdFV7Thq7Bdi8bZGdrgg4j7LMonhxhtPibYggsQBUs7QoDzNgfTJVWi",
  "key36": "2fz2eSgeJynuM9iqAWiymWtHV99B5BZxF91cz3r6NevPEGRt7N6SWT9pFvk4oQkGjA64BwcLTGaqvXdUYV1dD2xQ",
  "key37": "4WU5xJt6g8WyDiAESxtX3quHeNxCKL9csXgZ3p6SzN75syBWFeDyL2CpwfVb1LuUZg9L3XrqMAHPsR4tRKNqLCht",
  "key38": "3jb1sF6uh1Af3nuRsCcT35FX2nwTxzxEZHJ66cmHvDowscF3PUDRgf9TjLva6qKnKmq1r3Y8cJa3YBwhYa3wbCZ5",
  "key39": "2Fk9hamhcpjpxvegkpMvaVXWQ9xNnZZjAvjzyGNGStxwBG13NDgxjCGBmQhKaUGACxsgyzRu1tMSzUcNvXdUfjC3",
  "key40": "gfbrRfSQSqVmRi2MBPSGWhpjwYAR7NFjmFDJ5jP9EtBc2aZGMHAJWVVZyERx339ZtTG43cwbkiza8AAVsUAERUY",
  "key41": "472dG5mn6MXsE8Ft7oYF6KobYuZSzUtboYwmBxM49jEQLp7j2K9AaMwfxm1J92xDjXKSLUFz7VoY6qF1W4q2wKGw",
  "key42": "2E4tjPkmFsaAdVvN8E8tyJnjpCzgVbmRygnfT5t3ABUYWxtae5q1t8STKgFm6MxUubopkEZ2UUmqVZpwWV8b12cK",
  "key43": "5jLu7a62GnKqbtsq5JwUGJRpG6iwa811Wuj2vfNd5ZMQS7LEJczNafDTfSyZWrLfQv5y7At3PZKsbwzS6vamERWA",
  "key44": "5Kvth7hqii7iM3vQwDaFQU4dmPKtMVhhVSUoAHEwMDEzokxDyksUwnckCXZN39z7AjKiKEoJkMpChMYsmiuzARjM",
  "key45": "5zcmAwE8N9XSR2gKZFz3C4LW5oep7B3tvFUXeyL1jKg35yE8afD352MfNgugqh3R8JRcV9Jjg5YE5C5U27jfBhgR",
  "key46": "5X8Wkb3RTDEETQSXWQzE3FwryDiSwfTyJsPXcuGqiUcAWzc8ePaVk3rHhibDZB4t4xZkwFu79fWi19irrghcvvku",
  "key47": "2nzP3yS8k4csXbpHpxnTDTRyK2NWuK4dz9PDicxjEmxMV7Wa3QCTu4g7arxSkbcLD5sCdP3Cig8GRZtviWkYNWEG",
  "key48": "3pDeLRrb8pixYJPfRUU8YzfaEew6V9MHWNcrDZ3dRZ9VLGWFrj7yeEU6E9bXgj8vs1DcuiqCv2XY9BBkDp8DjPkj"
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
