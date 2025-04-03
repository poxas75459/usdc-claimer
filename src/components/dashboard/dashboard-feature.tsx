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
    "2JoVjs6EeR3Rz7RovPnY8T6VGfPjsLuPWaxtxcyMnhv5GC5ztC7LTdieWe2KQUJaHMP1idVjTdUS8mhTF4S7VZ3K"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5xnSu23os2WYnaYiR5mYCA8cyTByAGzQ6D9PAEihZJbMzbgrgZ1ijFpL5DcNwtYMJHJpSrvDhLqqURqwR6dm8kGY",
  "key1": "5FxqSZimq2AvRsvWeFdraftF94RspnD9uVqUNS1xBV4etR4TinY4tP8z6YgNGitnhikKSDvUawLecFfAKr4bDLaV",
  "key2": "2kscTdDY3cXtYrc5rP6DrwZ2V3hfcuN2S3brGdsCTW4BYFHJX94UfsYaRWP9X2SY49mpsb6gpCPzKpMQVDbxvEdR",
  "key3": "3PSVV2GXUP2YxU9NL1ZSFDkjgeGSnYiR31V3D1YXQrDXm6v2vZjQZxVmigwJGU8deWn3WdiGFj2PudEo1MxZy3yh",
  "key4": "axD2xeZZWNgFBJef8Vr9ANgQZyQrz5MtN7YAv1iUMND6YifQDHtwoDGCQMpLJHCofeBkSpruqBQwbgtVBVMToQz",
  "key5": "2avsrKovD8TmbjWGdcrTYycH5dm1HTmeTEdhybkMS6m4EG7c2ZipMPF4syXKH3Y3i6YZ42pcGiVJCBVAuAa52eVv",
  "key6": "5nX4EzRNm7yV2KKDeTkvRGpTGXKYoZpu3iPPvJ3PDFReUNcdRFzSXMhgSwJ9ZVKrAVuRVsCS9oC4WtRmwvBy6i6q",
  "key7": "2hXy2BUrkVQoXVdmBSVXtEsHUAkWnRZCLPW7YdgRHdcL8NGHEQygzDZpSExnDBP5w898uqS8L5UDDSpcxLq6G1rQ",
  "key8": "fWYoNhzdyJrzo4o9UNNsdRaddRFv3ABznLdpVPLizdPUaKE264pxPpJXXhnXcTnDomoeHczvzRwPpXbu1YcWhor",
  "key9": "56uYGeoApygEWH49rK8RhyyoE6hNTgsfkmTT4KWDTVWnaRudcGnXTcoTBNtFAq2mqJqUT3F1Mt8nxMfED2zdFmUH",
  "key10": "39LxKGD4MjkQ2TU3PkGoPqw9wsFn9u8r8DjngRfUAk1bfh23dYxzh9bfcpC5Qcyzu3Vs7BX3L1RCK1MTxUYxLnbz",
  "key11": "54LkLcBGF8i2u6SzKdbGtUbkucfP9T29rr6Fz9Gqw4Z1KSqazSLmSmxGitvx58rZdPaNqHJdJvS86xwRDCULt7Fv",
  "key12": "3hVuPbeviGD64oNbM4kB3aWTWsoG4veYBxJ3tpLupm2eCzNPuUqPJCj5PGtXy4sDJLbMvzeokMNM2d43cLNbJ16z",
  "key13": "1QHiR955nrAkgJgKsD2exLmLGQ5jR2KLQuG5oaBANqiZkyPiv52gYU8evDRP7iYt1oMqBU89U1yqkz1spm1m3mj",
  "key14": "47PN6VpgaH1WtRuJ9sRMbdbSWYN2kFn1GWMsXAwD2FAeGx5sZV1xv4sj2MkuVbWSrtZhLyjVPZwyTE2opi4m2trs",
  "key15": "4rWn7Zmhyc2EDBVU75XGSTV1x9WkrutswXZaDhpwXcrAqPphMNNtQrcD2JHcdf5EgQn9Pkdun5nF33KmRdj8v15t",
  "key16": "3tFcHHGdp1g93rEwkBf7qsagtp5gsD2nMtvg3hb57ZTU5yT3jEUK8cfdK1twRmzHBjWCAodnGsADS1NhMPbTMpDL",
  "key17": "zzxwvjuGCiSR4VF5GFE6uchQQHLAqGSGSburxrJuvtPUzmywDdZn84ZeSzELYF5x96X9x2TeWZXTim7giLdSoUt",
  "key18": "2MmPRYN4b8zCQiryxj8XABfzoE2b2NoJtrh2N2bnKCniNfNqz8rNkZGbt17ZGVWnJ5YD3J2yznFvNxyvMx5YZv8m",
  "key19": "33j4PdmmjjxU74f6bPvcN1spJckUbJ69ttf4F7FCA6BaWVz5PyNdNLzzPi1arTaxHLB9NZYBdQqG8jUtHczSk2eR",
  "key20": "5kmPCpj9xX9yEk6BtzNtMAsai6kj1gS87aAgPQ7BNSpMqP8dhbTsAszv2yFpHzovPn9sVeTgXUw7AVhoLzgZbGtM",
  "key21": "4i7ts5Chn3L8FYJMgKdXyJzzCuN3tCxMZVdi4qht5oGcGhvCaLfyMyFXTqx6EbJHeVEfVvRvTi2G2izedxZ1WvMM",
  "key22": "4JZALuQEANts9ymn3zRuRamqXq8BkBGkQzvyXtX7isM7tQX3QuaVY78ubPkScVFHMdpsMEBAD1bk6mHy7Epz7XLT",
  "key23": "Zm7FFUzFc1YuspePM7km1SjRqoiX7vrf54qQxTvuVotXGsz22TPrR8MZ1Yh5nKPxkyPgbWndSpb1ZLTHQ6fbizL",
  "key24": "2umThGKNKPEtZdVsyfLKmmUGpyHAmePizyZd6Gx9LtBWacqm6gAB9Uy3zYNmbcPdfa4gGgMSpFaYFE7opvYXuqHt",
  "key25": "3bjWVi8FyhnwtHBTArrArAeoV27LfrHjbBgEvLgzqofcorActgtYgE9v2EDxyPsaPdiCckpegcEQfu5ZouMsQATv"
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
