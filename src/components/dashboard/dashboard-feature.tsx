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
    "4GFAjZ1BMGbzGFdtNrdJrejUkWzX3oAf2iDsapotJE2YoZoK4khVSjfmCxVej25Dmz7kUbiEpwG5r1X3wsjvsv7A"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2UBPT3Fh9J9BVoZeX9MPGDJKYhSzZP6L1HdkJQJkW7hEnXMZQUDxGhcHEDaWAfpEjtXpTqHXZrdYLRbhZmfYQs6Q",
  "key1": "2zCb1CJ7LA5h7WTuZkA1VGKAo64MdPniw8MVgSW5QDBHVH8UVykZJkWiSRXwSafADr9goZRL6RVJwPrHb3VJfpqL",
  "key2": "2jwwB8wRrzfe5L7HBgBUmvyPUyprqtmyViupkbZSfk4byso9U8B3NRB2wnjwiyo1KTXqeS3uv1iMKoAvAnoFx2nf",
  "key3": "3Vi9ADoEtr2SzkXU5iFH6DHXJ3stQv1nJ3s2MNv5kUBgADzKBw6qxJmi7FwBHLbytbpFrHF6Xje6NyfyXogu6c28",
  "key4": "61xpBShg7RM8C8Fnv52Fjjam9kQapyxRZusF5TdQSPFqkWexoW66HHufTodeoPd2eS9W5qKddeKTPtkb6QmrE1w8",
  "key5": "3nZb5RiyhvoptHveHET7aGnMBkabKgvSY2tZa5xRnYhyw19dTAMpcD8Nj55jhfGNAE8qaivSCVyE7vKvtpZEbBLe",
  "key6": "tCZ9Royu718YxvGsbNSkSzD44dL4y6MrAb6iyzJ6xER77djn1MYwTAo4z2pGhJrR4V67rALuBtbbHz6bdUcAsMy",
  "key7": "4nNmxey3wyN9hwfk98SirYSvtdhwCvVzgQVAmKgek53EmYqfdWSESa9zyHUkDHndJdn5mLyxs65CA91dywVX5big",
  "key8": "4HCDarNaSQipE2RgijhRWXfdPZmNQo58ZrWFmjgSDYdX1cWDb822GDAo7FD1ZS6bA7wGvntFBVFRaJ3XwNVFhMVK",
  "key9": "2fmZEx9WWgxEjru2Lbpezg59R7dQ4yZQBUdL5tCCbyGF6Nz3tQY1dyeBKxP8WPAoqDoSXsQ72oBGcLbE6QVfChHw",
  "key10": "3NyW3apeH6h1R2evav2ADB6YVpCZBNCFTpeJAxZj1porfW38LwH24UfSBsiqoK7REpY21xiPEPxprpDwwxZmXcu4",
  "key11": "5k6YsseJxsdnzLAyGthWeuFsPW1wXhRbinR6htPtm6K4x2wgNfmtU7Aa8mqnWpmXBroYUa1wCyzm9U6bMoovmh2U",
  "key12": "5J1QZE5LxtVrGwax816st87pwReVZ1Srtzh4p4VyxDuMW3vz3943BFgQBRtHoW765qAsTjQUs1umHfG1EUW6JFkn",
  "key13": "PmdAuchUvMH5Jpt64RHNsH4J5K5FVv2pQd3ou8BK2PktdaeVUvE13TDiVWg5nHNNDHHfH2tnrLTw7pyzm13zz7H",
  "key14": "5CXtRcRDT7Soe4L5HU9f9nPjZvGbPr5RAVXBG5ozXqGNkZUgRpGk259ZDEWBEjhQEGfYjFt3bbLn9Lt8XpdFBg2r",
  "key15": "5bPJbgprFqKJ8UgBGDeqkXYq9xfPspDepzEvY9vTcxz4qcA2VanXTMCuUhFoZQbvNCrhBfG4ZhCQ8QuMtVv3V76b",
  "key16": "4ZHoWhp2rKsiQv2iDVPYEjwibXX42XixZXf1v7HVKYZo5qf38xth1DCaKpZ4KwMMZCSfXD2LEhAGrj9FtBmuh4aZ",
  "key17": "5tM6tBGic21RBeJy96kdeZkbqnWySD52hJaUkpB9kvCR8MzhiWy2D55WCuoqHzccoR7nN8DbX42yBQ6iZH2MQ8Ug",
  "key18": "4X9ktQBuYKdAMCkW1wuSGGPgjoZCQmpRuBUEspf2SMRC2zcVovjtYNBmofvJ6KC6t6JNf2KgLYNbMnhUt7WCcak9",
  "key19": "37TzmFGFRb3FG4eXyRnAZcvhBgGWZ1DqAiKe3vs5S9NCD5dT4zgAnKPYnwfJm6pjfxuroX2Rn3L8zz55cgRMeMpE",
  "key20": "5NVfEc5qx93FksxPytHTkKeD4wacjdJN18RwmsMM2uK3ZNzdRT8ua2ybcDVTSJTo8SihARpX43aUudj8uRK6bVUA",
  "key21": "34LysEEiiKeSAS7k42KEh7CfCzQcqr9qKFkAk2jZckhRPZkWr3Q4QSrNwNHoHN5Nj9uuaFQttqCc2dsqeu6UkS1N",
  "key22": "jZ2zFodJantRs2RaYzzxgxKKzgbv1UTh85F4eBSj5ZGV1KzqRV2Vx2Pfp1kUdGTtfq7pzfqutGBkkmkz29NWTng",
  "key23": "3HMHzk7KqVhd6zAkchkcyyzLgavHPFvTeEngXAwFhZb16ZVBNhXC5LfG2nbBQZDksGCmC31AJckf4b6Ao57AjhFi",
  "key24": "4QzdGnqzndENYbPrdYuSFHuqeB5jDjQ8BKjy1x95CmPYt5DmEmj1eKNovbbSoQpSfm6WEQy6xmUo4atx6UWeevBN",
  "key25": "5ur21ZtrKrSCE7Jy9ivBg1UiGiCgKrLZ7zofT8P32oj7FwzLpxv1KbbccDqwFp9TRcSQDZU6CfCYnC8NyAtCVdis",
  "key26": "5yGdEWMbiDXcYR9UjBAMq1bs2JZq7Hf6ggFuhtFM6Hpj77wNmsdQ4ozv4Tjn71ELMrudjGqrCXDB9sCHRCheCnMh",
  "key27": "tqtznn83c5o66wDfpQXRbQWUE3PrDQGzFZJusTMZpZecAmXXqHsyzxAm2Q4r2cvZEfAy9k2rzVjxSuj1A61vXdY",
  "key28": "9ZZWwBi7YoCRSW63hirK5JUCQy954qy2BLk1nd16gPDnNgnEeZ3LnWC9niXUiGqVyBe6cjX6F5dLRpkqtmi5hbC",
  "key29": "UDrvZYu2dpGUMjuzA5BaewvY4i3WTxbjwaZiFnYnhYTmhhFMXMv1PdXfSHQQnSBnFpfSNAcbLhNvmFCi9RpzCnG",
  "key30": "rDKdT8fCg1GP6zcw11nvFJULyaWmy5bA5M3izAr4fMACPWSQ9vBTawYeyQc6xjYnsfcvd8X5iWWB3eikHppJepH",
  "key31": "2ipLSxhH5TMo7SYfea5ddWE3Lj227XPyPDW69C2Lnmw2BJqQTv36WyVZakCYZWhUun7TzBJiRZCwbRWfjgzNvw6v",
  "key32": "4RZs93eiMvqeNP9XkEEJWGQ9FqQE1mDpLQNiWn9eyhmHaRbY3pPj9sY5DrNYcmDU2Vs1JQSa3seEyBUq8FrcMMuF",
  "key33": "67HQ8zaPAjPTdHPgD64cKwNHdg1XJsWMV1LLmwSMh73S7Q3UR4waV159MV8NTG4EbY7hGDqPPYwcrcjc2YkhUeff",
  "key34": "3N46Fcm7t4W5139Ar7AYh9a8sLHbnY6J9nNoHxnyHSxs9ae5cPnABmFU8qFxxFTag9aNzp1Lah2qXkMGd8Ln2rrF",
  "key35": "3AahVJorTnNT38ZBszpKWfbSLCMAgnVCnp1RyAH1wdCZfZCnsAekvYN3a2F7MCqLHEbrkNuXpB95bQgHPXUMW4eF",
  "key36": "9SfEEWV4NUT7UUK8NMDHpRxDRaQppbCws2pnypcsBAn3SmoFtBUJYcE5HR8ihfSBhZc1fKLaSC4ZuDFGyBVHmgY",
  "key37": "3U5N4QHvsFWfUkxdZSVc9WAozNEYqkz1PpYjY3bBcr2JJ5DsgtcneebyRj7hDhpezYV9ganNFSVaJEAtH2XJHyJ9",
  "key38": "5w3Xkc2K5wtWziKQMq56zGKzRU24QGypU19RBTnWfSSeaTjEpgUF14fcuB9vjRU1xSV2YjsGyJQCJaCMtzEqmLot",
  "key39": "3tF98zBf1w6sYSrrp7pNzE6gqYbzBqzBHNRoPjfB3PsjaDXGvKwiVZNovnEc8kS6TWqoCVLPLHXFLxCKqyxjJZcg",
  "key40": "3j5gGwSUou3YQYjrzXcnUBS8qDnSszymAHPPvJcPSB9prUyZYQFmdD8e7vFWBukVSb5Kn8UQQj4yfiiirXfUxZqy",
  "key41": "4eMPWoRPX2zWKCBntXTwrw5bHBKMuTVKmKkWiysjDLLCGWCf3sUS8Kn431hg2LsYmSoSo4P9ApJkcEwgsp3tUxbm",
  "key42": "2SrzDaw51r452yyGYnQuB7K7ugGTjQtVGG5z6KSqpPWWAffRtCcPCtcsgCDGi4amXF5CAJiaBfdpwcK8HE1peH2M",
  "key43": "4mMnQJh37MZFDZVDiZcc6h4cgSqQXYU9yZhSq7fUMHM29MuNfEDZmPnw2jgX1am4gJp3uDd6JvDwpmJMdwPctNxA",
  "key44": "2EtEe1L4AQfQELThzaQyKaCq9vxjGZ214CMgi8HRixFHm6AZiKyrrjso1gyjo33qX4YoWXNi3SyE6UeRLTZNVc5Y",
  "key45": "65b8MtVeEy1u2Ug5GM2Qm1wujqaHRaCyfUG7Q8GC8ravkXArvXdJVpQCXMd4Bw8W6tK3yXzP4GHG6xUBq988Ga2Q",
  "key46": "3Gq4YZwYXHW54sS8h1NJcBMBVHjuexQdP9qPMXwELUe4qyyWJb4L3CHU2cwb886sUEfp2eWsVuCyHT2aPt2ooiBS",
  "key47": "5gvf2AdDVQAnDxExxKBHsutsStJy2wFKKoVTxzcF6gjgujmGWTQkhacaXjyZ7JkXCDYyz3s6scQDJZhJkFifjn4P",
  "key48": "2fcBgoDTC5FzbA8K3GWVDYgBvpoTScK3ZBG8GwYxPCqxc2rr1CGvquAvuxTBE9yxFFrrZpWsTAbkQcWVBxD3uueZ"
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
