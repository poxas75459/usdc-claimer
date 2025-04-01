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
    "53ZzwJj7kyWewx7tst1BA1BWRCJqrQkoPhwkuoqkX6Shuc7naZ7dofDKcWjrcE4HfBfnv3ghbragkYgn1GDmNzMm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3vivhhzJqfTRbgPvpxGeGPD9fXYYGA86Ycg4Q8HJpmnGeuznVUFDpqGgNEiAJrDVjmwSCLAuwux8XhUGPS2TxiUA",
  "key1": "3btGQYcjMY1hg2gkAbVSKRveCiouiJmXKbE4dzi4YCzUgprQCACo9YJ5SS1qULf4p4oYzdTPqbPcP8hoYmohgd8A",
  "key2": "3wb2mk1MU2b2cZqon8AjUcvjerhTNbRHABAy8dJZLHYfRHvFdcmFAaS8CQCAPEptMGi74EsD5iR789CED5MWqbTa",
  "key3": "3YvrzEpYhPZQH9WPZSEqiB1UfvZ4LAv6hGgJbhU8tTz4R2ctQtx9QXBbAmwEM7ZjzcWQ3FFRiReTVU34SFZ3ZgAu",
  "key4": "4NEcsm97Ad26SXrVc2rqUfTEBxRpvEZ87pFV7nkGYbkXamwLK8GTxL94cVV2YnrC45uwnscavd5ZpUhYhzfwP4Jn",
  "key5": "42HD6rMzwxFqgyxMjr1nPF4utLmeqqfLBjfGBj4Yqh5w76yF614vBWSrFNDgxHHcLbx5zbK2X2am4tJvJB51BQr",
  "key6": "5trH75HGFeT8JpuTkQahbP1Ue58RbAMz5BZXU45tvJZH4ga4tFnav5NaJcPioxcXXqTYY1qrmjAwu2PzHSBKHg9X",
  "key7": "4UvaurBBFv4rYVg3EiyYbHEBsEYCvQHDWNZxt3NCYzw22E8zpB9ETKkHEz8XXyhJMV42Vy6mNxPLERFF4UGFRtkE",
  "key8": "51s5kfLKb88EPdXnUb1ZpQkjfek4eSMVcw3qXufThViF2g8JbD15MWhq8QPbEhJQLx6iEwHx4wzUWX8dDSer7C26",
  "key9": "4vuVpDMNmrXUN6RCGKXPzvDj7wWQ7nAPWAhNEh5yjyoY6m3SDfCqmLZx895g19uNTd35PL4ru1fBnRrk4QPfkBd6",
  "key10": "2usWxWGVxUCVVBjM94CwLUvDapAskcQwosQnY5hFUzgyuzXpYoGx7k8MhXPNkeacaYYJowGgP2MrajoZaXe89xAp",
  "key11": "5aZ2twS9EC7nrCPqj97XPVaYJS2A4WDHSpv1iMikUqucBQ8Ec8z8rWSXedhFwsdYsP6oLezusetLp5jKTFyiYbnR",
  "key12": "3YgyvstwrJRBaLBuGyk7vrftAEBKFDTvEkKc5aq4yHrhDK7AyGURDbqtup37ufWzoHUSCwVxr82PDHDDPwXfSfzE",
  "key13": "2P8wtkxURwtTyifc37FcC8RJy4j8W7dLduGHYFNDCYPVoXncjRKgWPnVzxwd7QhRFoKviaPUUntU1siCAUFR98jP",
  "key14": "627yV67ehGrcYE5F2BQ1hekPfkWeWgq4a1qobQ8NhdfbfNsuXnSxCmcMbxGeFYq71aVZBdCKbwTG9Y2nQddqynag",
  "key15": "4FRdkHusUJaaCWysGcD8QMH1esCdfHxFhR7Lrqr1nktBcjKXCJ7XVih3JEMsNcVSf35pT3RchpCVZyrmaQYYwL1m",
  "key16": "BUYEX6YNWuxUiGHthuBkxVxLZ1YB1qyUVPkiEjyajFFHDRhfXwkpPVb5FsZ1PsfJoPUdcNVU5EPpQHMtt1NNt8x",
  "key17": "nDH6LXTN3iZx6kGRLeTC6N3Mv1hQAx1evYJbKCmuBkFnMdasGro9dupG7V61n4Z5TwRveAwojAq7a2tYiCj1xVs",
  "key18": "4599g2G6KXy2dPELSW7Sdm8ewMLajuqTn1pJbMfnWUEmvHdTEmUg1prLy2aSECxcry7Py55E5fyF9S3UCTsjhdAY",
  "key19": "4GAuUrWbU4eoGfMP3xDhHDi2F4f32U6HXHAsNpqAygMsud6kZTcaDPmjWZV4GF5sGVDWVPxx7H4p6DyE75U1WJex",
  "key20": "3DkXyzyBkobNhuxJKp8rwjXkLsaikaxZZzn3AzdRYtMcg1foMZyGfVU18xN66dAabodR9pMjbdQKphmBn5ydQ1cE",
  "key21": "3cwBDCZ3FXcb4UvAPrx9Ne8G4wExjsRVMqjqVG9LbEWua7SkVLn9qhCxsR1YccdV5N8nEjK6ui4s4dAX2VbPoKpW",
  "key22": "35FscfSC8bi61GpqK4PuEmhjuCdByVW7KLX2q2p4Ctng3UtJ4agujKhKXiCS4Qx2Sj2DSFKz1o2txNbNZM2GcZ4z",
  "key23": "3hyhjMemWxQGErU5vfzpD1Ks3GECmFpTtDgr1u6vRNQUS3DUV7ZNrG2mFQLuL9j7NqHSK8Ayj6FUUHNdT5FPM4oi",
  "key24": "3hVLZXFBv621sR4bY5XD3PXRCXaVAox4nfVmXBgGaBW1sYa4Ljw4RQ7niUp2kuMPGZWmWhJDPo8jo8M5qtPwmjtY",
  "key25": "2SPqT6uAEVFTvUzJ11kGeyfPbEKQkVqLA4oCFe7Kk7gMJ6F97rBe6RkiKzKaikN6Q4FgueSTrTPsPagKpK1p3WDA",
  "key26": "7uZS2pmYtZqNHbX5wQBqZ8kuCvK1DhnVwJCo5ztvudCRwpKCR93S9vdBJFNKHm99FKn8eQWBtsU9XHqtVezfzHw",
  "key27": "3AHbVDe4trA7oFizLnRGSKbb846BRC1JdrzvVaEtceVYq6ShDpLhWi4RQB5zwYo9ThAJs3rY1TbSKUjxKZLaDtp7",
  "key28": "5o82Z4asorKqx5CWrkGmFKJT23f6UAg5HVxQV3Z6Hv6dDtNw9HFtwt53MWGCwAK3JVi2VBjUSqzaHJ5fHrdPp8Si",
  "key29": "4cFvBiZns8oHCyGh2N2owV4JAduiuwaDuwVWN1qz5pReL3HKJp6i6bjmHPJn5BV76fQ6xu6Km9eqHVkXmDFYgEin",
  "key30": "2fgFkMikyLN6vzjgG4RDMrocpXY5siZ6PbcpN8eRnpTPtkb7oTobsf5kT8yohXaVU7kr38zWN1LSWrgGtVJjQqCf",
  "key31": "3MdgAbv6FeTd6U6pfCXySxTk6qVHjbbGm72rR2JXTqeqWELLJW8cGKmRzyY1P1R2k8Zf23Nr57PVDDNrugmAhCnZ",
  "key32": "4zTXKs9PGZyn6FocHkNT9NJ7WjEZ4nG66Y4SZpi5axisT7iVYzRDwm2pJTFmZv23HZQ6qWP1qggSwNoWeEkGzrDc",
  "key33": "4QQ9UE44fq9RaksHBDjm5mmKmoQ7MbQjzHhgYoBC5nxCZHjZueeLq9UeQP9ZAdXMCUp2etq3bb9m1QrFc25mt9Cs"
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
