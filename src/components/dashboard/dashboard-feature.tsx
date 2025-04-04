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
    "DXBPuaLhcKjw8tsSZf93CRYaDovQ3DQMHS3LCvBpjvUPnt6rDfqJ7fv3q7rjFwW9tHyPZUXENduEWYTR8Bc8dYM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4pFmReLcECCW2s39kjnuMhuztG7KLgArNem3JmiVv7SFP3QaGBL7V3BJZZTzprVrvCRrNJfdwb17xNuvpvVHNXtx",
  "key1": "4XVBHkmJEdZN4asSjPjs6BD9gGbpHjX4R36BwxhuBTqoDZkbhHPxfPogK6yTjZMuo5Bx5sWyJH5RrsXTwu7q1FXG",
  "key2": "5LoQMuzQE6TcEM5ookTemWkEjRYEdSqs3dkb3bvkf1NktgU5ifcrxkW9uLtU4oVhYaLknZXzY1CfzJdcZZcMrf2R",
  "key3": "38dyosYt1ZVT4NBZAP3fY4QcvQDqg2Hmxqd7eKrLosvxSvEYQzkBiLBPekE363zGo5yUFKpYLvmm7B9hG8QZpKPL",
  "key4": "3VVnRwojukpCugnPFgTqmEboY4NGc7m4yZ7fXpLtNgL4rSAT22gcGud7oBsHpUTUJKc3FXDyFgpp8t3ACVDQ4smu",
  "key5": "6GG7tixBKZ1Krov19hPHfg5BTGnELHxr6dqwcngTbxquA2x5iFXZzNtnDfZdvtuHHtoJTvS2V4es2fbJTpkgVmU",
  "key6": "48PbwEEsaeUd4LtsyWW9Ytagg4LaPRFusoHWaSU1QQQVUtTBkNXGDFSbK8gYNLJtvSgUM2FQJ9gWs7P1Y1XUHHXC",
  "key7": "3EZgP15vTiEQBCvzsMCcSZhnwjC2p7ARcQNVPfAgF6XpHRUM9xzCrtpHjFzKCTPwXHpXDSnvvmKTuxeUSmDF61J1",
  "key8": "3mz4661nRUE9aibKbh5a9BmJKWTtx5EKkQv52gtNbaWEQxZ6MXazeZFUeZEmDwvA1edKGdg8fMPj9hbUTytxXahA",
  "key9": "26yWUjFeBDmRRi1ArFoPnZKCDzDvMRSeHzBSRQnQekwFqB4dcULufdVY1CGHNj8TAEkxAh12WMN1UJXy3Gmfzo1M",
  "key10": "8hZDkZirJQyfsLc83bzDrPr8ap1PS4UFmUqKboWkegTAQyowjtmQ3DaFcKifY6w1veYmWaZexTogVBsniyFdzFi",
  "key11": "3tQmnGpju83H5r7Ws1QhZksUn4wCNtw3mejxzchPvzx6xdKoG4RB5J7JoS1KawFSzR2Z8wLGCLNhodj3nY743UrA",
  "key12": "uiLA5NBvSi7dsZpGGuf4mrjFmEfhFUvwABhtYobmc6fbjue9kai4mZBhjf2c4HSFGDPKdHkKhS9foPbf3Mzy8pf",
  "key13": "5GXzoGqtb7srWzsLzDenAmwGgHRkQNwbsK7owRHaKZ4CGV6SLUn3TBGahvf67WruVm2hkWETjnSgko8LumevoDNX",
  "key14": "qup362mWp9xtZFKxjFeLUT9irPK1gnz9DanosDBJDnNqZmajGa47maZvXDUQJ3ZXca6jp1SxgoQT3yiPBRr9jiH",
  "key15": "fc2jVFcVCUCs1j7VYpcVq713S5LKYTs5FEQ1YdXJMbNqHAsaSxs2Yawzc6hyPYa3MHTQk9dVjpkq7ELAcdrbQhm",
  "key16": "4TJFNKEwAuWMjSxCVREvKWpQ7ANRDWfHNzWpwjybYyBAXfVisoPesK9qSmsjPow85k2wfmnv7ysBZqnhQQVG3u9c",
  "key17": "5dsRopCKFPVbcwXTBcTx94zE5wdeeVBuN9xbi1hEBxMvsHzSUfgdTApTbXMXC3bG8KKzhosA6yn6yCSNSMgnpeuj",
  "key18": "Y7hMWmr5xHsqZ1JHVbMaFzV62yDbwwNiQ3VJ49EHgRk3x5bLwxc2tY3CBacNp5tJXi2qhHXmLFKBrCmUNsGmTKY",
  "key19": "5iGeSdDyvnqzGvWvsiZLDHheWQ4DCfgFFC5PeSmtHJjWLndHpCxG1vhHJXEAXFTaNqGCzwvuh4fg9pyBJDDQMFSq",
  "key20": "nv7Fa3eoaXCox1E5gMpoxsYUqCks1E65LkJwTWeaDxQn1x493veDgMfsRDnjwFFEpqAy1Jkwb6nc3EMPerLqiAz",
  "key21": "5y2BpzSKRSbXNEtgakHCz5x2yhgb2MEUz2wvzomYQzwbEHnsjMWUyLxtG5qVrTw1BNbPrCE6WEvyj8vbVkocWxHj",
  "key22": "2Zvs53a9w6s7CrJPhqFQGA5exr7oBXrH9Q8BbcHkwpvsgbm15AdDcqu8VfqhN5qdqt5cqin2PZEeF98WNdPK7rkh",
  "key23": "53WmjCpPdAoJ78tu3zG3bCoZuYePYppwZYh4GqeakLjDJaHHPKTkgdgrvJYgYJQNvQSf15tJ4gxM5JpmBdCar92V",
  "key24": "2trUrBRaYkmRwJxfvvKhXKseYqghRgQYjtUSU9ohP38dvWF5k2BHD2jpDciMWLxZb12TjFX6rvLPZjatsHE382tG",
  "key25": "UnuRMFzdFdSM5jmcNkkGNf3UiZ9h3PMqz2e4SxnazeBNGZtwQHEZsnbxUYvrSNybjShokcUJp1cFoELdQmdBj5R",
  "key26": "63E2uF1smTJVmvqavjLrJbrAf9ZNsgW1Gvy3PwqfZDBcardrrtdeZ8E2XD2Gc4eeodAHEp3PMSHw7efE1t17A3JA",
  "key27": "3REHmX79ffaZZQ3bc98qdoB4i5hoisbRsogmBRcF1apZoUgrh5PDmoJ6TMDis6gUYXrVpWq779FFqvTG5P1FmH9u",
  "key28": "3b4NE78pz9gMLwn7XrYqqDMiCVc5NnLuMaKfxYVERje77QPMLHCkZ5YYx1yRyh4Mq6k1v3maLTkT3Rm67VsGHkRx",
  "key29": "QgRRYKGzMq52MwdJiB2aWsrrAKdLjQdNBECq67R91gkM7BVuGS6VaNWH3WeN4HBaLdSphKEEVpxCJLRPyfecbwe",
  "key30": "S3hsoPcrXqay16tjnTEitVqcBRixmRCA2pL17kGg4aaaWwkbZb774HSv49LMAGD6hZcEfHiatNrAK7iVdpy5Sek",
  "key31": "5Ay7JtMpTN28UDNnBq3Xt9gogmrCmBzoaUQ8TWSjfAakHLZwbNLinPxg98525KHxj9o4MTLqAanu8PYaE3dohwB3",
  "key32": "4JH237KJ8cEbZUQBpCxvRhQJjCTfkUKkRtdQBTLgtqmUZX5hc1uXcMzGCor4XKhtWqP4p2sWxM3s7bEkFTqPHmFw",
  "key33": "5WgNCwWxaDLpWAqAbj1bokMJxAUkxsg3FECh7SHgJrET6Yz6F7hiSfowC7r8gFyHNTNMmqGKPbJ2miNpDw8QZsb3",
  "key34": "4SdLiU8uGuZr95ELAVyiyxCD4d1LxzfCaU9GWN39Pmh4sBJMSQ1yfevJGAWv5Et4FTPUKuSS93mFnWgrZGX3uUaU",
  "key35": "3zFmMVu5GyzQXn2C1FFNFuUHp6TG6jpFhSJ4MUaVXKcinrEqqm6cVoUh5yo68wYK5dK6EnN91fs3ektjw2CWuvzf",
  "key36": "4WpZWfuvjgfHJmvQCDALrBs2V8uMXEPTDw2bethXgX6jYUSWNvCV2HaMoU5s2QgpM6Yqo6MZhAoRWTvXj9GLNTCp",
  "key37": "3iqPfsXPxddEkeESWtSJD6Gxn6HW65nTVbune2QMz8Qw1KoP9Aj9gunmPiDYGUfgCPywf26Ju3qpHFF6F4h5wbuZ",
  "key38": "o9dX7fDihodXF5znnAzWKQ268uy6zqnftKNicAHFGAomtRjHTezHEqyV3QvtqzUzuAL6QMESqWTUB25pt5xfp2P",
  "key39": "2MNX5jrXAX3XvShLd4PhQp4ENphJh5HoDN2rRgTf3KiPKofpctMgcQnLLU7fZgRsSYTSTvc7rm7keK5GCoAVgPRv",
  "key40": "57BHbb9RvTYL13ZBJLZbiUK9naYuLcMGGhJdaR5P8uUPM8HsjCzVDu2aA4KtCo2UuZXGHPNPzaLxaEkKzy6ZnFwd",
  "key41": "57R1HW9N9StF5FACriT3uydPet1fXPnBgRfwpbNqNbWREzoDj7T2XzADrS4ygVcSPC8N7cVvPYkA5pX5umUFMdYh",
  "key42": "3ddgW9mEXWWR79TtoQTW7rPmExJuR28r6eScceDXmyt6VC5hWXj4ezr5YEKHipkrJ32QVQrEVb7wZviPhgDFxJFh",
  "key43": "5bPVcJVKTjnoDKsdH8xK1GXBmByX7ithqQSqQUA7ordAU4emw5UKXbtB11aK5pwLbjMpEqiyrvUGKU9auKTPGE4T",
  "key44": "KeodgYTXdqgBLYx7LCgVRpDoE28L9HT32wesS8DcbHbCSMKFqpbNP6XdKLAY1uH3SBuV8kkhSZMQcZR1Fk6aHd2",
  "key45": "28uMCGeca9g5zTDVV1PKWoZzwiTQWSogSk5efrKrkXk5cRykMAM4rCPpRvSEDobNwvo79uRdEUdRo85NLCUntScE",
  "key46": "YvgmxMWBD2TQG6w9MirsXZpi5uyTyASuSsJqJD6rvmNxEqc3qcEbxrsfCYV3hLMTLmT29zd3jXydd7TjqopqwPg",
  "key47": "tDG9ct8trppdLDFsbgFMbL7ZQB1pWakogcM84XzLTeFVgavDQD9qCH97FkvXsYPuvQRjn4PCgU32mnLDJDMB5we",
  "key48": "43C6LycgRSGZd6fmCZpRFJxf9FRBi29eRQkMyZA4dJeFpA7qGCr2NgLij67QDikiERbayBRsdbHzJeCBbuDF1rdC"
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
