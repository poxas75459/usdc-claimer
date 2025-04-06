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
    "4GgNYpH8UFRsXYTkebXTMzyHufBcaF3YuS8qzNgoDxfbFpaM6MuTzDWCGdf8G8AZrLwMv9EYf1nx6s9R8UNXwhxc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "YQhhxKdmvZRWVk7XRqXbMxqZByHxBjQV7Qex1RACeApw5eNtLRUtaMNufaxN8D8EQ5CTtx1aQPd1sQCEGjtAThG",
  "key1": "QnT3D1ygesnA7DHGkQ1VJzHpdXR6iFXr4dRg7S74LDTt96yK7bu2nFuXKZBNrHm4MX8nqjKTXDwyupdBfoWXPzZ",
  "key2": "2nZSPRz3yimcrkvakz3XitQC4x6mrAwt2LBmYQh2az64FjH2xbacd2Ff7kq4DwyxgE3waSr9Kz7kGpntJDKkLDJw",
  "key3": "48KtRXugts23LpeArXeT4fzpJk7mQ7cFXoP8CB3fVPp62pnA4iGwTk8jCYeZfaBPToXdDKewXqiiiSP2kvYhXnMU",
  "key4": "3eup6f6FRxL1Yh19GcBKZnyT5EtrP14xFM7kWBDpKPSrkqFbz5a5A1R5fJAAVWQZJYYv2RLbgYqAVmLjC1cvY2AV",
  "key5": "2TZk9qWW7tBuDzbeAjFuy1HXozpHX2FyFRGDAXdfJCkS5QfYN4cxgUNTzccjQcTCh7zGhhP5kwN6fNp4J8BWdf5a",
  "key6": "2BtCLTMQqwsz9r9dF91ZpYumJPBqeiLTHXMs8hDfEcKfAJuPJNn4FQedcYYrQR2SFcviHx2BktmXnfhnv8s8P7Cz",
  "key7": "2ogNE6cEk4dFxMqehKDZrHzckkQx9UH6xzkzFV38TThYTZ4qzDkzcuwghyf9c6NphkVat8HznFVFNoQePmtuvWqp",
  "key8": "2khTcgW5aAARr3NdKFDXS73XGSVFU87PLYfitNX8HG3XHuiCsMgdersm8qhZ7re6NeZ7sPMw4mM4E4nRgijACurf",
  "key9": "2BjZqWfjRxyNB7ByskRx9Aipvyxgs4FHjrdtKiHScpHrRkSchb12vmT4tAb9ggumQBuvHSjvR6Vv4ukcpRpMrk6g",
  "key10": "4uCoHmqeLdujjpnCK6qv2mBALxsQW1mxYgDdz5j2EDsesrG7jpcbG3fsbk4HMTHkczBTLtMucoJLXZKhKtDEG4K6",
  "key11": "32ttZ43zLvsPymrrgRKrFhj3oWKDDu34Hnx22PkpiHD6JTB4nKrDt3kiVUnNYUDN7TxSnMzCcRsLvFetR5ehDhQQ",
  "key12": "4j4RUJjvnj3FxEtjGWcim5m3YVs5yBmV6ViyYFbZMi7KanwX34sFTNdbv8KyTwTD2zhzCMkDvdfXJ724fTLCTzbx",
  "key13": "2WcnFFxshBWXhZPv2aHFPUeNDi8vxDRN4zEqmiVNoPR8hF4xJjfhFfAJ9uFoxpa8nvWV5H95NgUTVthmJD8iRPDX",
  "key14": "4D1EnQZLvSPCUZqc7ZDJVco9g2g38Caqk5iSiFfQsGLryJrMnF7dd1H1uxRgRSQERscvrqBTRefoHf5p1pN75yhX",
  "key15": "2Kvz3W2RQbVeFXXUuVvTBLTQ4wC7C7aVsBTnF8NqF91m3aJB7H79k1UVNbeB6SUrjMscfeqBkBNsLzyEPmyqM9rx",
  "key16": "2Vdqv1PWfuoYaRt4cCb7EhQQ1WT2gTMHBoppFoUi21MgKwW6PdaB62JSS9puW13sYQK12co9oKntaW7r3rJfhXfY",
  "key17": "5EY8hH7jQXMPChdCe7YzQp1xMFnHcTaJiwzj6JuoXjrFKWfPYJjyS2q7eYEgfELmos9aR4fMhjC6oJHtm4ALYYub",
  "key18": "5wkm2FzgBkatH6SoLbkvy2D1YgMVja9sS1CoJ2qozEtyjEM35Q7rpforWtuB1f8GoeujpXJXnkEMRU4gAhSyCaxA",
  "key19": "2enA4rFVTuZxQ9WPE2SGJNmTBTywR5bTam4wYG1hn79eRYEfsLoPYg9epx76dRaYrXeBLjCisQvxvZFQocxH9wjL",
  "key20": "2ZYtBnB7zh3Vk9vsXCaY58HwR7eaUzJgGZKHCByAbq3yZSoCFKHBhXFd7DQr7hZE7BjgnGxat4vhnpgyxDTg892B",
  "key21": "4nzwekmrfrDaFAntWZPsMAAmt79UEWo6kERqhN6DVEPcWTSN4UGcQVn1NtW4qYZuQ7UUhpBx9r9V2e5ieY6MekcP",
  "key22": "4MWMnZ3toZ3pKfnwcvr5D8n3w7iJRBdursm5pwZFtpAfKZyWworgs1Dc5XUbHgN6EwmZF8FJnX5L9XJrnsswHr75",
  "key23": "56iDhNZ34DEyaCK5dzcL7q4ifRLMtjiHzKJxfV1zyyEHJk5rdHj4wE9F9nKYtmdhwZY51Z1tRHGpicWss4Zu3GM2",
  "key24": "452MxgimEzTWkcr5UbhfRgwA5JanxYxXmg9wqGcXRqUtJejniWD78LAK7jXxHTU7JY9wZTQNVhgqKMi18EEsbWJt",
  "key25": "4YZWvSprQYsoQXfh2sPwg4y7CskNvnPd9BJN12b1j3Jz8v8LnvR5csdnjX9y4Rfm9xbfDcduNCtrymxwexDGYshz",
  "key26": "5EpvYxQMEd2EipCB8xuBBVGnJEzvQwbidLbjky1zJLXQM2XuqeSWYSRpCmsCE1VrBh89zucfbYLUwagBrgownKBC",
  "key27": "3UzqQNBNVqknvJj6quZ4hCdRXFTMiDg7vtUZsd21L8bvnYSw4wJhYTub8z97UsHjZg3xnaAwkzfqe6KAvFSNvVxk",
  "key28": "29pkyP72xV4ryHoGVk6qauJF37cGvzbLtqWmnJA3ydfdFiWAS9vZG8V99mmkwZta33iEjSM7KUYxdJLsvyvNKtub",
  "key29": "25L5kRKSJRedcAqrRLFTJy53yWHy75MjrGdEnqoRuNDBt2ZKhqKMHCBA9EX2bRk2nUctjr5CZsg1SE8tR2zsXjk2",
  "key30": "3X8xU8CEEfXtbuMvF3DXt8baBpB2Gf75A5CFXmBaq86cCVLxRPy6VacMmp9wrmr1tmv6p9sKoXd9HpWHtZRjgQRL",
  "key31": "62Ry5S91DXKtZbfV5ZSGooD3PGzKL8bnKudNo3onbN8ZtU6pzAjCicXEzQYU28uh3zacxznvz58FURdgDwCCqf6p",
  "key32": "4kf1Qb65f2LD5AHDefbZQGcTfi6kfnVM1iuvgbNaRE8wTgGPFz1recNm4PAz8vd8dpvcEhPEQYVsxg6xmFXh3sAx",
  "key33": "4Y4tPfw41ptPhcXxFngSzNMYJ7yhw4bcBezA61EB7BoqYkcjsVRgPWhoLCKR6yDBemjgZBTLry3iJd3xtWjpP97h",
  "key34": "38TNEyySRJbDn5aH2gHkmgis6N35NcTCDSusYQsTdTfRKyizpr8Wbqh3DM9FrXv1qrGrXdLUq6raBGLJvTfqAwQb",
  "key35": "4wyYkS5FFbW5zzaA2h6wtWJedE8ZjAo8ueqgeNtSpCDF6dfy8o8XhSqfPxRLwRw2xtpz7K6LhxxfKSGCBvEt2GYT",
  "key36": "9kVyrhtAvxnUNZkTED2KStMPPGN8PysJ1TJFDhAZhc1mcKLaSarMBWCnjaRYBgBGGXvjJatjcHmA8Gfb12oe2yK",
  "key37": "4cTkXnJx4BwQ3EN6qogvR1xGA3YEuSNXbGDh3uFe4Gg9DBxy3R2YySzTNcaSEpJaPySk4HcdTHs1pgZy1MiARnkv",
  "key38": "5hZjWLaX8m6v5LAFc5QsJMzsfLYenkhiJXhhu66jT1bRtzfDyKskJzKGGvRJe7BSwVfCCGqK6wYX7EDdUYTHrdpo",
  "key39": "5heKwz8o4iLam5xTACXL8uY8FWnFt367FS1RnBr1GwFgf2kiziz5YyXpqocJ86Um8GoSKCdmQzAFxXsmgDZ6CZDV",
  "key40": "2TiJ1cnQeBHpJkbXwYoxHtfYs596Xjsjsr8gVAiNVoJoYActhwR8HxbkaFToVM6ZP5VSoAfHFoLedTy3zNd4Tdf1",
  "key41": "2AwUVdhBPQdgY55oJykW1En7QxYAnG9dt3LiV3UDVbJ7xpmNNWqsXF8gkvapNHQYJ4Di26xsymT9H8D5PCjb8Fuc"
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
