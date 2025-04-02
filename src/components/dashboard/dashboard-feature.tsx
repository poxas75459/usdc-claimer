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
    "3c2Y1vE5ehCmpYxN8KUBwTVMCQb34LcXkKSKKv8muZbThGwq7YcmwpB3KzCDDeP83NUEZoV8f8y2NSYmgmHqNmZg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2kAbnedG1pQ8hcGZM5BmnSaD446bruXjLQPMyA7nMDej9atdPNdi3rtXpGTSr7Ehw1JhXBBxkpsfmg6Hbcbc8nWb",
  "key1": "2kTA4SxkP4drMHxy9o1tdRCKAabVjMx9mAUyiDc59qf8piCJAjyzinYhopiWUw298g4LnTmbioJoApdJ4ph4GKpF",
  "key2": "3kShWdBHyCEcqYAVP29f2KPBJYiha3bHQiHVXGibrpRjT2Qmx52JxhzLYgCPwDWoxRf6gvdArCyeaFLipH6jC9RQ",
  "key3": "32iUBFnNFhQPHZXQG8CsLgxJxHEHn7PCoggS3NsxgnAynN9EQEoprResc9ufHsAjaokkmCAgbS3iLEHrAJ1J9WEK",
  "key4": "4GiFgJ5UP23tdw9isUGwjMBUHkLerWN5dgVgxvNRxgGwJittibbxUHQpEa18tn7f6RYnChfJ6vJWrvGAuXBQmvT1",
  "key5": "52yA7gaXfugay8GRy25BXAQZHF6e6HkTGsRi2Bzncp8h4eqbtoGFfkZfByc4MNFBNyP6DVxsENJL4apHgTwDtTCF",
  "key6": "4hPJ5yQvcHJLCXuMaVoMkZg5yDtdLQz6iYT6P4dXNFJZuGFrQ4y2xKPwHUD7mJPTjRDpmjLRoALJqrhX5gzWbjzg",
  "key7": "3KnqivssN7kAGVYXMbyzqfTCyiqeWUeQ6V6BkVSvemb6bkWwqzG9zCUzhupm4GLLw9ZKA21bmFv5xKKWZkyceoWU",
  "key8": "4gUQTX2LF8c2i5c9bt81Ni37wFshDEeaRhqXnuXMKwci7LAirurSkea5a9iwcpZ1TdDTbB8orP5c5S2hjaSvNNkg",
  "key9": "GVpFJf6C6Kgt7QkhZUpWbDkEhBq44CQbXhoEGDHpyrhNqGKJy9aFkMkREFL9RyjcLXeVodh33RMEQGVHmojcSsb",
  "key10": "jUiVmTuXNRTmB3ZTxg3cwKQPqk5npV346uGdN8SwzPkFScE1sMRgrKt2H5GbiqGtHNb82ATWp9uMDPthMC7h1TX",
  "key11": "28xSKj76ARgBC2fFkgk3h6aszK12ZWoWQCxneSUTmKaMaWP5oeZujNhWaiXmFgWMtMDR4wGmZUghhdMo6hukLycd",
  "key12": "5sHdBt6K7hczGP23twLazYiwainY5FGZwLaCnogdqgoNbdmSmB1ow9H1BzVpWJYkbZYGksYECgWvZDkRBAM9uCtS",
  "key13": "2y92f7eUrRpLDByiy8RPicirQ7tpC8sk84Du5aJwcsMRePHQ3JqSzwD3qU8mgWK4W44NeAFD7PfnUjXb4tDJggVE",
  "key14": "4qKAH3iXYTCnGUnE1mjyquwaM59W4dbddcnHvDmZPQi6bgy7TE1ABPURtubQZ3toF8GsuCuCyhEDBZNDMNHiybdu",
  "key15": "2z48Ez7Er1jWibYknyJpoVoUzvqZDHuhMczovk4fxutJK9VNFnbkbBuiFxpAh4jksqH21EvuFN9dV9eugFsbGPh4",
  "key16": "4tpdVPDvDFnqvqfeHVRJpwkpuYTk6ui4f6Tnz6X2k5MrecvWQeZss2zyCYucGsaUBUEcTAFaMh9dHAVwazafZ1vJ",
  "key17": "4UQ2YsXrwgkWbKLK6GeLroJcE65ytQGSizy6DomBs1NCJhxnCK1VCt9ZzxdLxAog1ZLSo4MhsY9sJQjXMeY7iiTK",
  "key18": "TPBAgtzykF1nMwMXywuWwgpNUnCxokshN85Te2DAg7onzafydcdf4nS4gGZHWrMSSYFm5r3jogBqtEzG3FE6ReW",
  "key19": "2hwbXK1yGA6mWAxTT2aS8wbgemDhjoU1VvnKhCK5bH1LEdVwkNFaJBsmeXLLGyWjTtRzK69nPagTn8wjxF8ikXhY",
  "key20": "Vg7hGR7WyhdgZ52TG7svf5Rfnkn8VuMtvAqncz61ieaLsQYGKc5EzkRG5E7p2GWuamiS6nLMyi9LdyXpvt3V7BW",
  "key21": "3XZDW6SxBDe4mXUUDztSwW8AwQE7npHkCfgS5ZfeAyN3d2XjW5DzB5P3xFyrtTyypFRrHd5r5kFgHcKofe5A9Cuj",
  "key22": "5ce7wd9MHDxAQU4mq5ViTER7sJTZjB2KshNq6wezxACmoCL89z7NdpXMswoVwKPu86VuoHbV2EbXM6uosZTk7xUr",
  "key23": "5rujfW2MTZMrELCJe71Mt8nSnVeRnNEQER8GRqxXwzb1ywo9S4dnfZWLuJAqW37okRB1jzsbEvdTfbETHD2JC3kV",
  "key24": "5LmU28Nk7VWxEidV1cSn2BhWYK3QhsTKZ8nrFiXdFRpAY7h4jCRXUeNkPamt8Z1B3YQi5WBm6PenotJv3okBY6fK",
  "key25": "2JMcUaFRpBzfBVKhvcD5dnfLpWVFijJtW1SsjokBUiBTmdzBmvw7aUfiRvv2YUfrbzivnGAcGVbP8uYHugPmVbgn",
  "key26": "2D5BQ8Ka3B2CowyYy3X8FNtnd4EPsHEVaDbyXobm1hML2vDjaxEMsRVL62nHpYLZjacZQ4E22AfBdj9CHR2TkSHK",
  "key27": "4yZDZA9JSZaujVto66ZKakJeYdurkhXV2auVoKFpqkDkyLqutTQtYym828uiYjUDz7uQHyaM3xG1miZ1WMHu3DKR",
  "key28": "4dY7Qc3RDXJsqSQRLDR31TzBgh1VQuxBJJRZidnsec4JJDAkTrQN7Tfwh7bVGgzkgpUJB5V5VDNXi2CqWZgmRsXo",
  "key29": "3FyHmTWPp1xKe9UZY7J322bYjne8isEBzYJAAbbWidoXkChVkXg3EbCEJa8VRXTvuZpTcfPVFyMuAxRiD6AmhDAc",
  "key30": "3TYYzVAgpwoMuakCWxX6YeY3kWYEEyneoyQAqVN9MkLkcNBTetxPR4fV63zFtCNnXfrJ31SXewyQmn58dVrDjKzj",
  "key31": "2LaeHaMRa6UpEbXZDGAYx3vsHi8kFNfa3KLRBHjYbgaHfVRbUtyE3Utk6mQZ6K4L9V6um9r242eZCa3huJbHU1We",
  "key32": "Dc9tHHHftVSnmRKUWjbhBupa2CzZBqMhrD1eZiczK1BCPhvfkmWyARBuNReB9KCQsfm49D7C9X73PLMaxEVJnUH",
  "key33": "48jm4rcLTbscGHVux9vSpubHpr9Nb1pFYF9Jyv4yQkq3a6AYuMCamunaRz7w5SQBj47passGxCTp3dpMZP8b69tQ",
  "key34": "4eRw6wK3xNGscR13GZktLENAo4GNH5avgJ4MzDRTEiqwMeUu3MvCPjPsCzkVF5dSLVgLUhB6GjRtQXGCHw6wsAiW",
  "key35": "5AE1wUjDi3szNk1QbQ7rSocwn3BDfqSxn2ytNx1gpWFuwnnz6YUHTgayoTtga2BcPVQZfssSNcGsECahqqaKspWW",
  "key36": "5p3eAr3xHW9cCVKGNZUjbQCFuxKWcxrxoA9tKihakougi5p6ZQguqUQhEdFpkBnUVpWKkhtxzGpiC74ivHMsAYay",
  "key37": "5Mzfn5PnVG2yqFFMSUZZbbFG171b1A8B1RYx5R96KxZEEASmBNQbFKR9KNvNm1wzxPu1KjzaE21H6tX85sWLmcuJ",
  "key38": "3PEm6BEa5F2eHGyfNu17nKbhqU8SkrXTgbeiAPGaZQ9Ywfku4Nrt1NxXHmq2wt8ayFtzGeW22mypS2eGntvKdiyE",
  "key39": "4kXnMF4VvoiuLtrX9ZUxSN7Q2f5kF9jaRHuwHACJYa17mFN7VdM51HeHg9zNwwGLZCDEnWWvcy2JUqypURoLz3KJ",
  "key40": "2akYE8bR7aunL7xid2DhCD9TFama4hR4vYmQDSFRZkrQBf28HdhAp766HYeotWB7B6AAxi1BmPJjRyuQEqYKxmZi"
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
