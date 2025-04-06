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
    "4C22WbwEfGssZUDedNreiBPQQtCwQ3QoddXuR5c6emL5G4GoxBrz4qoq18AYoSLKUo6nCqNqv1pVNJF34KLiyYFw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5BNavfPRUTMqunoBeUxToCuRoUqDxhzzkG5j92V5rfbVwqu1z1LrYM5iyPXq2rFPmbjoR3ptaUPUpPxqNceVWxBW",
  "key1": "34oBzXWNHi8y69gbMbtSMUTxAwDbaRF2SDmoQmduFRDpfDp8cwBg1N5E6PK1ASYALhgJfQQVYHvAGpEPYyQPk26i",
  "key2": "66kFC5WyKcRTzoMqc7cYe2WEj7i8XC9WZdvPfTh67tWtkd171HdN8Ym2St2ZCv2izbByPZ5acVFqP14ar44jEUUZ",
  "key3": "2gTde6XSh3jv1LL3FHQo3fBmMzmJTmd1YYDp6rqaukEWNpMCwRgGfn8Gy4A7aLdjPcKdkEcaTWgpkrH9NFbvtAyE",
  "key4": "5e2PzW119SZok8ztRRCfgZoqvf9kLGB6WhhEo3cG4rKByLjoxpTzpUx1w5yZ8yGgQJhFCeyqNRP2PqicCgE9x9FR",
  "key5": "2zeaPnjjjEkviLyopc7bGm8wjDppRLiFcS1S4Lk85kMML2CdDtbQTKG2ZULbN44w4FuLCtqU71aFPnun57567Wk4",
  "key6": "23ZxkNwAqWz9kAvQ2zFBUtnMvDJdv4CatseWkJDuP7oRV8fkDEpQyn7h5XtUTUtXiEXxChCgmBYPaptC34ayanPP",
  "key7": "2mm6V1SFDtR24ZMi5Ssn1mz62SZVGiFH422gPHLZgGqjHsUhiTFKK84zCn4yvXEaFuoaRRfKKtauY9SjpXNnXxyW",
  "key8": "2CLUsFzNKUSgmyzs1wK2vaa9MLrEyxmUZ6tb2YZtFbCMA8hPQBfkxBNTkkDqd38DY2Rb3msL1K2Zb8GDpL1Fwe1Q",
  "key9": "5T9mTcAhANazMHbd2yCKQmxoy6GLHekaSXJNQ6YEJ2XjaLc5vi6rf5LUCF2eWCt4sz5xkJZHQhqVZe6umYANnpjZ",
  "key10": "2Gm9UkNgSQsRXp1yPNLYwTEUS7fFmweLz6tCH8f4XW6mJpvacVQ4dThXHBT3d315YCrTtjnRzxYYTphkCGcqLNsU",
  "key11": "5Ppkq75z3gERthbSg4R72s93A8nmPys32re4RLEqWdPy7P9u5KztEYLbMfYAquboFw2rhdAWGqP65Hcn9AF2mh2j",
  "key12": "rge9ruzyG7cCRYMeXFZKArSSL3UueKmErKrRsE88bo2iBCvj3rDwk7x1pZ6aQpR8b9K1x9F94657bMZWhAnhQKG",
  "key13": "4NBguERqiS9ZAwjVcX426SkspicJwuFK9pQKtcUTz8A5e6WBhNgAPZLsayUabhF1k2WgxAHqvNMBnRKCEU7HyKFo",
  "key14": "4SZtjSqAZshPn19s9Gpfk4tLCNFXX9eWosgoa3ZVr8Y2TU1yKn1eLjhhHonDNWwcJsDtYwaAdeB37CRmJYzkv6R3",
  "key15": "2pH2tz6DfWg6rXPoKSZ3vN3eRzLMnHfBf9sBUUXAREYLGF89PWMevyjddW8UTUXvUWsrmmZSf6LaeJ2WuKWQ2hCn",
  "key16": "5zUYotKmiABPbALTNsSNGDyT1dysPAeE5gXZkdUo3aYuaeKQL8LZJdvYCX12qcPjd7gMyS6X3Yu9xsMLvVrThBri",
  "key17": "3rXeZtFuXY6RJiL8RL5LHuPkEeQm4tLLogJD42EWxc1FXWyvw5zQtbnNV5xuJuoLmv8NNrPpddXDsVZZKC9FULo3",
  "key18": "3MrpAKvhWhFj6rwgFBE4VbWvXb3c9iaPDLpfFFVMBmdRuVd4a1tV5fweDZ3WExn2bhbYXojrHZiH2L1WbDaGgYj6",
  "key19": "2Ex27T5Wt2KnQKB7BJcj6xYvnoW3aRD2cVn5miVvRuN63VbbtjWaMhBBykiK29ydvSk3zZ8yxrnWeh57hdScgi2S",
  "key20": "ACgihQXA3WWjPm2wBHM1fH4gQdtKDCeP5HPSYiP3Phf1oGQARUQK2hUpADVcZyoUwMwCVRjerc4VK81eJCNi1MY",
  "key21": "3wp1njm25uekYwssWEVvupcEESVLwtTJUvEby9enqCtJVzEMPYGkQBPw19m3pSRRMUysu54B9KzVBnRnqXJbf6aP",
  "key22": "4BL6hhSbwXqse6kX7sApTnuF1y6A2v7r6XcwpVj7L6cQ2RzSwTtyR67wRriLC2svBfGNUiyw387HmRQFTqD3F1aH",
  "key23": "3HJu75bqbi1jSAKnZNfRkn3uMBVrk4b5iM9hZvYRypwT2iV2Sx7vdxZGPJh8fQndpTCgWubvREm5pvyAmQiTfpkk",
  "key24": "62REK2EFqtTRPYaw1JFeSygB6TqcSW1y7zaXvRUhVmYQrKW19qYKSCgYyqaETW9nkEnjjMWP5tuVT1MM4TJ2t1d7",
  "key25": "Eu9M1wuGdiT9rH3eNHuJVqFxeqoQp7x55hFi52mHZkEH1vq3mQ5k8kzDRAqc9QAenMkEGw1H7QG6Ei4FqxQ9FEK",
  "key26": "3ey88uHVmJ36GknQFkcDZRrUZkNEoa24jfzTNosthbV8KiNE7Ntkh6QJnSm9Z9YefekEasEr7JuatDRrR6qPbG1V",
  "key27": "2J6hu74Ttu3xgxeJNUG7tA6AQJL35LDxuh5gDMjWVUQie5VBuR8SNap6gUY4D5rvsZc7E4bDcGXuYR6x9WGcCcwY",
  "key28": "4uriXV6ivGVpdF4iHzwGwXt6Bcw1NABDb8wcFSR77AdNH6dimbwEiTGk9GBDTsrm8McXwJDBnwo1j58eLX3dEknz",
  "key29": "5Dq1o2Ew2Mp7gk5K5YGXkpWkUte9cV2Jt5ynaivCJwmLifVL7y8BZKJVyFTbBd2Rnz6KRibx7MWtjz5qnjgodh4D",
  "key30": "53hD9y8s4BocQn2pszCunZCVpm8nRN1CsvTRYyduWeWqoNLn6nZcwrJdxntVk6tMZK65nidU7Ns4ZANJh2vHXy85",
  "key31": "4rszuJcWUZHxMnzb52mGXJUsHwqEtKXEJnLYXQxSYEYbckrnr6ZwwZF34tXpht6mjXxRDMHTdPqSScyajfhzVekR",
  "key32": "39ajbgooVRD9bff1No2TuRTLPtHdiGBjgujErVoxCGA2eEyw38bWnf4zDTbPFbMp9WNN6zqtWgkKiH3vgN4NVwfr",
  "key33": "3u6s9x36C4TBAkjo5164QTnSff24HvttFSf3XvH6XxKBieuj5tS6XxAoGgejAvoGnsrGSXeoF8yXRBZY6ZrUtUFD",
  "key34": "RCRg9JDaMTc682h8p4LCNHvN6DY2aWiqPhcDBbpNgQsCT6HLwJheUaLWR1RVeVGTm7Cpuoyxzq7nNmQ82ZA31vL",
  "key35": "4JT9YNmRHWMcu119zTmhSG345F1CTMxsy8T6zJZNCNJ2BFgPEArDNXK5bR4uCc8rHFFLpSRcRPRDpxptTorFYTU1",
  "key36": "4VGhE1ZQF7TNtPec7CQ7LAKFPPHmbNaCvvpmptsnaheT4Jiox4C2C3j9RsBVDsEnDQKL1Ai5PEDwLrurJFo2gytB",
  "key37": "4GYmx7UMDhJ3BiKehAxZDCTf4q2MzDVEYYBdndJ1672Ehk3oWkKnSiJijM9vqHiqxhXTChpLCvbiax9AEZBwUJ7w",
  "key38": "sPBgz6XDyDh7YRXDFhW99PmKbbEmgnvVCn9YAZWVFVV51zxvHARDWkZCPxbm7ht944SmMmRLw2QCjddvAx7sGtd",
  "key39": "5xGr6176USgXYh85KChEGRPZcJxkEauEsQiipXSrxzEejL1hC2D8LNpTi73fX6KdWYvJdGN4FBu5pAA8gtkj5hk6",
  "key40": "2N78U5utZPrUf1AXbkRrM5Enfw975QJ1fHURZxDDGccXKmeztp1v9bTdYx4fpmHGAFVziC5xRxtZ3WpzCxnmzs9D",
  "key41": "45CjuuVX3h8pRNZYPFiuZgz6XoHS34gqwX8QJbdco58Nyxt8TojoXNeCNzPPodMRxuorMnQxtpoyh34W3Cc39AuU",
  "key42": "58SrwiyTMdYjXTQ6A6nzk3g6k9HWh1JPZMfJrn6wevPUDyQEpS5c1AH3i6EtGR2WqG7EV3WJAJABYPmnm2L7HKdW",
  "key43": "63hsGpLegpc8uhR9k7tWwxqwZqGpSJh5yq4E2uYtrPhTmmXbTHL2MaHLk1WXuxsqizyR6oTV2btgmgwE49zKnSyW",
  "key44": "4Htg2xDVPeT2ajfKVovHnGiTr1fC5ADBtSkrbihKUWVP2iCgvBv3EAuA2WmcPyWAKeuYkXayWtmzxQvcurWHWz9S",
  "key45": "4NX7dib9UXvrSfEusRmcnWiDBJAhyBRbs2eAVUeQecEuTv8ERQPjKsbUwCoTVjmpuamhfxbqCVjxgTjkuPtbK84C",
  "key46": "653CS521WYAecJWUVFprph7ja4gUTeoWJJy1kne4Edap5BehsqWSo1UgEGcxYcqTYNKxLM4bQhjMd14uUdRCHbVU",
  "key47": "2zLSt1CP7bAW7TbjghNk3VnoCKiX8YxPhY7CNSRbfQTRn7n5TcAUNVzoxBk8VhKnR9no9UdaYA9GcyKy431LC8ox"
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
