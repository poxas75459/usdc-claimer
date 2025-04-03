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
    "tksYHteHWzgw3Q9eanXnfenoAgLozfisxkGQh77XnTfJxG9Qeg9UXZh7LsMWHoEAFAG3rJ7vKEaeQaeFAAVdVNM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4nmy29GPSossUxVaebPjQJyLw19WqDYE7h1nrrgxNqecNZnGJC4RxALCssCzXG35jP1aCLzf3riVv1WrwcTmkrBz",
  "key1": "4P2g51zw13XvveXzerdRwnfq2v4y5qo3NarVacxUeBzsXAsSiP3y27uWSyB7kXLM6miqgmWxLjhPdBAuuAnvGC25",
  "key2": "2FoRCSMV9ZooDYUk9mfKWPYTCDSrgCHaSFfHs3F2L9bEuSPys4uaeCFso6p3uRuCZTgCmDJVoPHtisDk14Hsa7Ec",
  "key3": "VSZuYkcwehZS8ig7ZnCgTQHaZxfRkBM8PHfm5xLQi7LdNT1boLsaF6QZ3zBzMpFYyqRm2ZKs8xh6ik4Wsv7hjWB",
  "key4": "4qwdPKikyNNgaxsi1U12aQRyFwLbNufpDX7DVJbzdUNkkGCbnqV7VdZRKULWbCAETHAmbmQskSaCTpKit71YqH8t",
  "key5": "25ZFE1RQfTfYKY8pvSq2Fg4cy32fntjVFHQR7dczidkANTK3RNLmMNfWNzd5DKHF7gK4RAJcrq3PkRwUw8RunTft",
  "key6": "2AZ9gTjjmJRiDtsrDwZu6my5BcBFd7aCbsdjBASjYhWMB22N62SKLRpPnDQ8jipTLhJyXCR49BgPsGLZvC36VZQK",
  "key7": "3aJzGCfuzkbcBytUycBTRnvP8zSc3WzwyWUNa1GqcSTbZy4kSWt6n7xMa6Sguf5qrm9Qo8mvwBCbYnSgSvsbd2mC",
  "key8": "5ZcqtxgLMmmsMtJCVZWFqbbrefBmG5fxKvnrBeMKAJD3AASqon4Tp9iHeA5dGJYGBDNjSU2sL6HZ37miGFLTGLJV",
  "key9": "5gwQkpUMxY2AD2SZXHTTVdCHFnebwFkCYWWHC1KymUbJDckcThDxH4PkABtFrGdGNsZ9dMQMNdtW6481awvBthMT",
  "key10": "3PFmJ712qeuQhsSpt4QnFJgoHR24cCgc3dnaactX7wUJNifTjQ36MPSy8UUrmr5wDtr5UVF7vpbDWDiW1hcSz69E",
  "key11": "xdWSg7c4vzuFMPDsLKzSJ2p9ScJBfA5AEicV33jnjZjVUq2J1mEdCoh4anoRdK8SYLU96Z7v797xvq18d93etBk",
  "key12": "29YpkJrR1w7jsmLoc6yEYdxAQr9vsjJhjR46oQmwk67HfNKnawnV8FjyAszfXqnVwbsoUmY61caU31aJmQS9HrWn",
  "key13": "5zHwiP6zAtX5GqWin1f2KCk7CJneE1mnkfj6Jsd9N3vWBBNrVTMidRPPNgD6UXxrUh1syDsEumPJxHoSbPps2mMg",
  "key14": "2HxJMbcrLCKeGBZCmuFXQ4tazxaBSU2V8cq8vmBvPxFf5BuZeKM43mWo41MsDdV69XtR7jATmdCFPDyvqnYtwYck",
  "key15": "7bDgpgRzQyKfPafgK2JTGVCxHacbqwmvuYamMQUvBfHPBdeijCaw9tJGW2SoNvj27TabdN7qaE4pEkpj798QGkJ",
  "key16": "Py5BPUZreiU6CmraqqHAqqzGiVhSreo1JQrZEzS9XaXBH29B4HYtBNwUS7guAy7gfdBUxdCpKN8nNk9kMMndZqT",
  "key17": "2qTewPwQG3skhNHoEk9TSYPvam1E11YUrRbCyK39my67dXDkBAHYiSrdi1kzLdjszEGJ3SkyMgnK1JR1Z89VsQKb",
  "key18": "3RsrpAtMLRQeGEvrBVHPzjAhpjdcMGxKPZjNGN3TELsBE4TRpsQj5JYBMeha9boAVLRJnU83Jt28rNmCboMEKFRj",
  "key19": "4xCjuTNj4ZNz44oQG5NxTHPbc8aLnJgFHriXZuSyaR2UAMsseeiUTcgHogCEiGjbLfPkLVyPKYDsQfxfRS6tvRYg",
  "key20": "5zxTEMP3Kp867gCYbd2qBAr19WcM9ybGLQfDtp9iQPGx5JaHZFX1M9H94gXprkjhqL9uD6RWxMmEezDq7Jyn3Nip",
  "key21": "3i4Rg7yfbWmpW8pa9eRZjC6d4QxR67Y7aydMtg1RDDC4yoAjSTiuaygsSxqhkiNCBPiidx5PPhrjQoaPto3drEoR",
  "key22": "3D3ewa3haXnZHbEN5XZC6dHmkFeAReZSTg8LGMMiQi68fVM9eFWhV82AYvsseRKAVa7R8D2bzb1g8CwK42SBkGXw",
  "key23": "4jXdXPeW5UdKLntdnheHyvsM8Wsr1qrB8WgwvicHNZAxQdbhLTS51mzgfX6yYuimYPaxqSxVgMf6ni8XdDDAvJtE",
  "key24": "5UZQLhhTvbnYZWpmmddqYc1DEhVkRB8F3ArAr3QpGvJVmGJ94sd3b2zYagERJ6D9hhJ56y2tEH6b3gZdxkmv2LYt",
  "key25": "2HC5sEDxcBSLSNbL4HwQrM9UVJ6HJbCjeHHC2iiyT5H4PmbiDYtTDnN14gmxJsREZR3GvcJjEbjCSVzCLnRXoejC",
  "key26": "4aMEXFueY1xHAkA1b82RUHmwwRtyDTDSfYoVqhfKQnsL3UXmqWaY9eoMt6vfh5NSTqhRAhhETRLM27xCvjpYWcUR",
  "key27": "31H3zbmXDoBE8iQdmNw7WoYXWxRgk6KTsmA1sFaHv4XbW7w2Kb9caLKHv9wivtBYB6dGFxXGKp8Yh3tshPDNAEg",
  "key28": "1nCkH2WQRK7Z7znPQNdoBJMPRmEzYJVKUM4ikvXW7YmJroqY5udsDzMrCXJSSTgyQVUDcb2FvDzPnzHXWUCGdBC",
  "key29": "2JTxoLEf5TsN9xw2TwyCAezXnSJSqRyL16cRHrXFckMSzN8CXGLuFUxd4USxrnjPk9CrVqmz3KagtSM7GqjvG2s",
  "key30": "d3xDaLb4MNJvQGh1Kbm5RfzYxyo2yABnDrq3mHg4eLL8MPGPz7ECqwDeEXQeupT3UrxxaYx32pxKyyeaznu7uhZ",
  "key31": "3JMhJJshkwuCJrA9o67e3UGPN6QT5dFKg7iqqqpeMPWyKKUCRZGC2ccUtsJi8JFGgpVg8FW1oY2R9FYSNZAG676h",
  "key32": "Z7cLWXd4ZYwisbBECZNV7dGPHYXaPhM25wuyzA9xmpimi2FBYUE8TvoDNax6mNW9dmNgN1K175YwrVQZ8Hr7m1a",
  "key33": "2KsUxvxeeiLMrcvNQ1AmxyFW9N3V65bLrrHrQWFwFQXppywDZfE819jwuC1GiNcT2M1XNdzEKzAGhxc2QErsvRjR",
  "key34": "43WzrMuLVMSPn7p4YXucLY9fPKSespzDNdRfkwTZsQM3dME4sEwvXf8dZGnNXGbzPzcgLz8TGGSWxshrvdHzXgpf",
  "key35": "5Mdz7aG4qaaRE2HXwDzTL73vNkGqRbSuyRbgq8ToXxnEjzAsEzHiPbEk2sHagGax3xXzh5jxkrxHMxqH9amtRynF"
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
