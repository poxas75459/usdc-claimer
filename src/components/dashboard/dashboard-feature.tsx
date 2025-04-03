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
    "44BwjTrjZpqQZXVE4xFrARAFjyjp84cgLmoCu5azrokhKUX37DGrRNjuJrk3ZAYYLUPEuNEUhvRkQrCGfYe7ie5V"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "127xn9hHLDBUcYi1c9t3RUYZnngAyhMPJ45iyF7q9wJQWYtxMeHETQEZVobkDi9H5dn34J877wbWoMrnehMVARmG",
  "key1": "4XXGFbisR4rck6xvXzAN4WiHWJRPgmks7PpHJLiWDGSeZX6AZMWqemxfPXDexccY8QzR6MUpuuxw58uiEZsULUYr",
  "key2": "27iqNFF17BvAadrwdwZAdaQHenZ2uPbfYQqoFG4P8xsEaqcvDjj81UFUUGffzTgRPad6Ur1WpCa3MGaEUHBVYGLM",
  "key3": "2LE3mDXcRKqW2g4RhRbUW54fQwVfVqyBYgepxo1jApQyjpCBCqRpjfsMtEFpX5wwwU2nDbEiFiM4QM9uqpPFssDk",
  "key4": "2kM2PW2ZDGyYufSwYdSXDdzbJJNzh9C7J5xKq3sBu1P6vjjFKXq1D16UisgKsz3uNwTjNP4JKd7M2skAfreXEPJs",
  "key5": "2VzMfUFB6whQNp9YVihY3Le4DfmQAE4Vh5Kwo5bmdWUsbPZ9n688nXrJdmMJhifMmtJ6LEj68XiSyV22sPJFjB3R",
  "key6": "2w3tY4W56HBFhKzU7cEQrDnYabntJeGR2LzJCrLa2PkZHgo2u6a9CQSzCpZHeBoKVp4dBggmG2yC3siZaipSW8gs",
  "key7": "4K7eKyzKVyNu1VS8UVRR5FrLXTHdds9tdzu29yvN67gERU3PK9oD8S9SDfhNDL9fnXg2EeFi9rjfFyFB4L5swcRA",
  "key8": "5XhYehZJDPPqTaaSfLXDYjEgw1gscXRzDtr8PgXZuS622rMin1axVWKqKjfkysKufNeC2AJ3VX6qKjj7ePQXYu47",
  "key9": "2XZNneb4gsiom4NeY2NzWj7RtwRVtMxayyyaguckRS1CnMBVy4kisoTrkPBrbfRVu9rBQBkyrFhS87XSbj6U8sct",
  "key10": "59kseZ6WMT4xMsHK7Pj5MdrEKpvyn2kYCjds5yQ4ucdJU65PToraUVWGP1YWUZEzAr7ovpsDCzj2wpCrvtDHjZUd",
  "key11": "2VVAXV8A2nPcEZUsTawJ23Nm4S5VzWpzDEs2L3BTWsK2u79F7WGu4hBvd91R7Jii3mNhkWN7sDnnSuXynyH5zjcp",
  "key12": "27hB1TG8wFXa6WYsJWH5pSFBMpa3SCRtTDTrESCjSnB2bR3rPWUXTZEGKh9f27qYs6v9eGCtv7UKTj72PTF1nQNx",
  "key13": "2MJfk8frer8Z4VmVVJCw4QmhD67e8Qee9Y5SXiGvSZPUsX1cTyqQrcbdCKDAv7tzNoFwx4CbAt8zXeU4TohoHZJF",
  "key14": "2qFGwSH5es4fd1fJ11KxPqrmZhQFaftHR8txdSrYQrac9XsESK9gryAG3BrXSP6RLigBUX8a8ogCq5EkSuTXQm6L",
  "key15": "33J7QaHxMz339pRCzYYUX5tY6aSw3SryryVERM5G4oGV7FXzYgnuppECYpormj5gtNQqVcZ1J5nereeB6a2NbZQz",
  "key16": "49AedQvsKCmeFyEdtXBjrsNeVdnaeuFztKpE8nhsMVm3kACEPWvHrSFkZRUz2pjdyyDrvporUEgXQkEpubCRMbfB",
  "key17": "59YpKqQUTSsVymnL3QWDsRbxFweJm3uEXsPGVAdBq8t6HUBC1tm6nNhP3K645dNoV2MqsDvWAnGjTjvH4ep4Upr9",
  "key18": "4NNSmpuJ6cStRt8k4eR9CDecEYCQBiNC7762hvrwApoc7q9KYy6KGmLQRsBooBh4c8inK3PUaYMmgwckBn3nZBNM",
  "key19": "3ijQCAmhFERfpcERLvekJPVhKZ5gcM1U8Y4bbrZKHnUwuyiHYy9nfHshkEFwT2Nxzq1jqHK843LySAnumv3KGbbj",
  "key20": "3kW6L9ZQQJsJWQSZHyQFJPEFctCKRbd73VkYfyKuPuZBwNRue6yvRrNa32AauvDHoPzoAjmBTeArbXErk411GQoD",
  "key21": "5bro5YXLoh3CQkCCdL7o2Ygc6MNrviJiuY86RG2wPDL993nfeKSbWEF9vgYzBFuvWsnHa4j1kJwSVVf6n93qHPme",
  "key22": "CvQQAGTnoFrAV7KKkhygoSr4eLmQvoLWhQSZyS7uCxYBvL7eorJyPa7TGCgJ9hjQA4oMJjk6HruNmGbyU6iGEN5",
  "key23": "21DWYCqtjebiCQ1h1jdesxPbJbqSBMNZ18ndRUytUjqSYXeF21LpQWM8YGEpcCFD3Diidmggq74CoGQfv3JdeeNo",
  "key24": "5LCFpBXixB4kYBaQy5dnV4mDoydjNQhpHCZS7Quv23PmQXQqW8kEtrC7MC1XXWhrJKQoVJD1geweBZtUjUmxRJoi",
  "key25": "4tLE48j7TMgTv9rj7dMRhwZiTKUHkvr6KnFbrbzjGyJazqSGSWgTuAM9zkohtSZfFsfTMwep6Mi4QWy5AJg8dknq",
  "key26": "2RMQfhNhssmJtAE9HJRoy1DTiws2k18J5CDnsZG1qvA66YNMV7e51WQwLx9QHpaTUjaKYc2BZUYuFrUB3dZaGgzz",
  "key27": "GWWA2uiXxVuvRtC8HbL1bXuAaDAFE52RGvcojHhTsVmxVJjgizQPPjAwYzEjJWau12qpigjqJykyrzofBap3Hjm",
  "key28": "2tx2KjXUKAfrPfETSKgNFRLGFxAAKxQrMZsJDPhpWxVQr6RbeWgmFCVubVtHczdQEadoi94pvHcXP2MgBv7iBSxD",
  "key29": "QChXhhDpEqSisVFu4htdSGPrp5S3BePcBk2pZwuRAoNBXZ57BEF656gYX3mMBMmzQJ2KtgVTV6FTaguvbsVWhbx",
  "key30": "MRg1JDpPz8DXC4zLMgeWwQJrsncwjJdja1EnBKpMtvtF2nA9ZJuSkywpFfXQmuuU6b7SXzC4deAgMsS3qSfej3D",
  "key31": "2YCmMi5EsrvnFwmgGWcSc1RLZwrmfxJJPFsJ8E6xEAMSEB8LRzzvFyW6P49KRH4x6WerJdT2KeYjhJAK8YkyZc4x",
  "key32": "23f376hw6SW9NdkVJdFqjPgpP82JXbAEFEpKTJajWiFEiRnsnEGy8NbJmgyv2vZGR44VFY5MygurNE1ksc7LvNqy",
  "key33": "5ZzjaFGTUGzCRdiwWLWpCeygk7pYRYEY19ZhXnc2naqSJGvrqAfCaaKsGQuNFQEkmahht1xwEjtWavC1AP2Sbe4h",
  "key34": "31XpTMKhgZM6JAZViRiZSXymdxQrSCWbKfh8Pq3khtfnECX1mTNYrwDWjPNcvDpt392MrBG3N153kvSub7m1EAb7",
  "key35": "3YujaZFZN3DPbCfHZuSCPf8WbWL3Qm357hAJFLZk9MhbP42A1TZW7bNyEeQ8o26uZ7KstKKsTYt9JWzrzcJY4w6R",
  "key36": "4aYffeuyPHLN3MoM1338djf1446mwa5FmauQEPAXqhqkAF183SspKWtEXKiHVerDtwQgzKnjESUMMX9xKgqFPRyw",
  "key37": "nJAod9d877B9F7XqA17zGLgnEsSnBHmMcD6ZmtYkhBttxR183TcSh1RkdUp3VkLzCqgV5J8nppAuv8jMoohgZE6",
  "key38": "5GpFz3CCrMJ6A7dWTdGm3gnaFKyQTJeiLC1PChP8ksaPJHz9NxWZ6en9T4846GthcyB7dizhxNhVwdYUdFZ5REhL",
  "key39": "2v4EFDauCqq5ea3Ld92cNqnyBtLGuk9rEZ4TemBLA5DWSWwDcfNJcRBW5ZgcptdMybeyvqBpu6kate332N5tTdLt",
  "key40": "3TZuufbQ9KXKDd6mHs1daZL2qGrgMyPfmyBQacVPH3Y3q6P1NUBE4TpsvQggRLTXGVaYnis1xSEVUpw2KzXMpHW9",
  "key41": "2aLZyrqDT9SQhFmgM6kaUGGzgRC5LXdEcLXos49io4YwotxPkCsRRKYhvYjTbWrgHHLswzj5aDbPAmiimhmxWef3",
  "key42": "4VzBjkY8smKSDhC6mNCeQyibcgcFfC3vuxBMMyN2nnAtSEArNQRijrMqS23jP4SvEdDdoMeAr7mjDTztkfhtpUZN",
  "key43": "2n3ARW7HBpUCtznqUn6zAyWWmNHx5QjqPJuwxo5TvEVPH5UwJEZVqpXpMR2SvLv5644PMAUcyYNWVvVyUmqFoEem",
  "key44": "2A8mqPza4PbT3CwdkjCZmzGphgFkem6PeAAxSM6GBWZpmy57nkqzpzG87TSQEGUFZiJanbsenzfVg22oGaF2mTws",
  "key45": "2djp9yhTAHMMPdnakfQo9jdyN1s7tPYo5JcAAL7LtkAXqQr8HcVosqeesWTCWGoB6mvsbWaUbKLy6UANxkakNj4M",
  "key46": "2rnrWWFii5gmxDEDstr11XvPaWkyET4TK6HDksnSiPpoDUrLJHhnJXMXmPyRvW61t9sSqGm1wiVjvVaJZ7ZcanWL"
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
