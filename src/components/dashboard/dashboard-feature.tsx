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
    "4U5FHKAVhgmuWLrCPWNCRupnN9Xtsqc2FAqnZkP5f1G7uW1YWYgqEbzHvEWQS34Cwo4f1TwcQTdMakEc8bKqxxDT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2oQz6oVSTT9DuscPqeEB4PivFdXc9245cnfvfFrHcjk3R2h9qMA5sQko7YGgxa4rvC8UPs9njXLsd63M5tgPKnG4",
  "key1": "2KXyDqJJERjRqA8hx3gA8V5F1StBMhLf8QYuQgcrwQeMoNVcsMPQHDySKxpnQMpNrYuMBWceAyCAvsoGBT9QtuWH",
  "key2": "2PmiPmyyrnf3joZgywdhWTwa4jBReNmT9X8UdEYVru9xJCC1bVUPpe7JcDWqGPxYYjXZqbfFgVgKpsUPR9kDTaAM",
  "key3": "2NwWekczpCHGDpzxtCyCnGiVtpaX4YiUd2zAME2i4dpBa9yHhckXWi1EXFDwRvcru1DoubfVTZWdqvasH1QQ5mPq",
  "key4": "MNMUERnGfFFyVLTwYF2nBg84UTSbnBy8wpWFVsY9X78PzGY5DCKp6jFbTq8Qk6BTcHs8rCHRN1gi5s52xy4CB49",
  "key5": "L1kdtDemaXrvDkCBvebf5rv9vpDBNHqEXWTGv2dLHT24yqjfT3GJkSgLNLYDBM95UTYjJNFe2HcTVLjCyiiLmtj",
  "key6": "3TTG3Ah1kJZi17J7DA1QddhWJ7KdFrtGyuPGa6GNgHJfuMyYQHuxNvaRGXdSZrrT7E6qTf63vjHdNGHW7AwZyVE",
  "key7": "JngM8UDog3VauZ2yc1wrxxR5zD4Z9HjT1Mp4shDijdRqxADdX5VwCA7P8NhnYooWGX6yuCTnAj5mJgtparGkhbE",
  "key8": "5afEMEaJhge59xBAG7pynW4VTAUL67j6gedgWMGYsEagsg2FeDscfzkubCa9vPpuqvFr4CVkzAdExAUUjrZEHzL8",
  "key9": "4QxM95c2RUgAb4VL2wQ9PAncqdpv98as2EdGstqjcdTJUL1KGPcDRcdkNc7pS5ykyKTt1YpgKgTZxUKX7JLG4M4H",
  "key10": "3nQM8Hbo6EvfBnHwaLixipeoF9EmvM5WEw9LgVQWRnpiSPJ6TUQcV5W1kYGovLge1rmBB4pv1L8o2DGQFiU5KRCD",
  "key11": "2h9MBSkdtcq7kuztJXWvSevJXuax8fCUw6hNGCoaELNVrhZKu3H5U3ejN1JFRRDRAw1RuHctJVKoKAikmBPbT7dN",
  "key12": "3eBy3FcYxGtUCTUSY7qn7qmgB6ymyYz93HF5NdfrzBjBHShREz5YCJrt1eyCUh6FSbFSiShpGvP2SRVat5Gr3C2Q",
  "key13": "58G4AjcTPiTfnke7oPHHxZJPjNq2quCDyb7xoqdJTQEA69DoqdxAVeJUL4sZUbwVPrxif4TKWrTvuaL83hrwDAQE",
  "key14": "4hD1tg1QtRs4gh6w5rScZVxfTgPn5ZNFXGY9RyWHJYDhm3LrTjXe4rC64MPcLaqWwuHJjn7z1Br1aqGyk7NLZDQY",
  "key15": "2VP8Lo5NFZYGnn5fS1cA5S1SFEhhn9wzAZa7KcFDVLpBgTAvaLUgfR2t4XNjyDvtaYZ6yVRyLRMtTZp6kFhdT2oU",
  "key16": "38V3GShH5TYx8gRbmWsWv3U41UUUJPQwvnbZAojdQFtBPHJ85gisQn3EccHrW5qPrNmxEmP8nmENPHuorRJxs2aN",
  "key17": "3xZpcqcZ7Yv4UUQ8ycEeCqD8S8isSRN4b4ujkuAmhCyQ5kMDVevwHtdmP9gXHUcHH2A1GU4647fY2fPNJKXUUsrE",
  "key18": "5QzRRWdxD4VKZKgHUktMQyKhFHeqEkoA7yC7wQNZA7Vmebr4aPQdcbLbejt7xgdH31CH1DTBNxCEBRhq69uAdSJ9",
  "key19": "3X35bDnXa4UgBUmGJ8aDg1qc544NG9UyCYdjGnmKbm35DBNEb7LE5LZHGwxAMVUZAUEee9WebmSYLcReNdDWYFAS",
  "key20": "3rwf1uuSvFKCC3W5d8bhaTxfgYinE1uhS8kn8ucLGrAzFpoNGw9pu9AoKaNAYDbC68Ya9TgK51ZZPgGubMTMfLB6",
  "key21": "4RuYt1odaziPEbZTRmGpHpsvrz4SxM2kc3GLmdLaxTKPmLX1ZzBveE2rNBfHyVcwS7K4GnJMPDzCcb1FbWS5wAwA",
  "key22": "9D2NKrtMdTLnkw4Lnvw2Gom7a9yZFosVYPDtNnLuz2wDYYRQDQfToieCr4aTYfwf7TFpMNFQegqUVurUbGKQbnZ",
  "key23": "2uP81Q5stJNZju1dY4S3r3Hs85uYMRtgyBMAFu5oNS2zLt7WiiuzxFXSgGneJGRh6w5r1fSLEjBHSBjng1TkXFGr",
  "key24": "2oixFSAmKT4zNY2ZaxLfzHeEL123QbK8Xn9p94ji6i5bSSytXwCpx4u6jkVDt5dnk3meKkb7qxewSJy37PRzkiju",
  "key25": "4C4R2DMUxuEX3t7RS6yYXTT1h6AZFGsPat5Fo3hRagCh1TQWYT5HF2S9uGBEpKLUxTqNNLtRevvLWGTtw2VM75o3",
  "key26": "2eBgoXsLHCoQLhSWaFyDkQNVnyifYsXQb6a3Xq7kXDsuSLG3srAjD9q417NaiDMbCLQzLw3WujhudVNep9Bz9QVd",
  "key27": "41Gn5hKnsTRHF93uGWQhxc5RMT9GJBYDNsPifbtRYWRLub8Vcd42ywQHCpkfgAPhitm53EVg8nEsrjRqPzE7jG4d",
  "key28": "RrTc3DKsx7tGkkTJ8cGt7oAUU1Gfy3C2suh3LeXAJgYWvEqnbnKfqBBtJpgU9jZJHw2fjism1koFfP9qe2MdkrM",
  "key29": "4MfcfwAoajRZUFgEQ3PYWCZAo87EEupxo9LhRcHVReou4rhFpvKFLnLVSwJQjNebQwrd82CZW4HrTVa8GNdSV9Dz",
  "key30": "2cGnNuoYRMM5AtfwLpeaNASveo6pi4BBWx5VR36sXQNsaDrvHxuk7BVuEdu6YFGU6HBPEoNQRVNUGqWyYe6d8DKi",
  "key31": "2cgdj4HCYSgdtTfWyyJ8zqrnSQ6pPmULjeXfoU1rWbnHRCmbTpSmYAHaBk4PuFTWnTke1NQnCHXy3uWFUmSqnFjB",
  "key32": "6o89vPqK5H9jFLtgnFrgyfNtjeQAetuydWq4AUCHpuc8N7ZMXDng8AmQAAPswj1fncAfbpqHHSzqiQd1tcwL939",
  "key33": "3Levp8CjftS5b8mkxDCwy3vnxD3KR2bQm5wE5qHdqiTNLKNu6PWpV64kMCdTuXbE1DY7By4zK8boRU4FDqCk1R4Q",
  "key34": "3oFrxpdrBjJmCTfzGnZZE3sgRNgPf3U5dUV3oEq9JHXEPhSVjXUKyKTrjMXfvXCB1GpJ12JujaYWHskcMQhYyX9y",
  "key35": "RGa65jiG7sZycgmXW2NHJ2kkwSM53HZzU7RreVJhTzKYyKRox7uML8uNzaPKesBW6mQCvsojTXX6adjkaGbxcn4",
  "key36": "32FLW4cW5WaAASBRUjvUboCs617SfwVpSfHWWLALV43h9s83z4XCha8V934jA1FZAJuvDppKmy8HtpBfxZ9Y5Qff",
  "key37": "4c9mAvr8ZjHrhogQKZLqhyLhEhNQWX7APSSBEXRU4PE3vobAFkjN3Z6C4eioDzXAqFBdzTfy8mnmL3r7dRUM1mNM",
  "key38": "2wUvAvr7Je9rncicH1gpNrDNWXVXmgXZivqBE2iaF7vCnkACKPaDWfMVm9rtqLBRAvobjvsdj6WcsZf96u7WWLPW",
  "key39": "5uGUHCvkTHZKnZb68cdy4C8whxDU8H23cHHt2kDgBVkCVEAuGVhQGPSBNidRrUD6vwbmAoEsucf39jz7aBpq117V",
  "key40": "5a29Mj9cAU7WmPq4YvUqDvxjvki6qhiP4EUJK1BSyQTjdBeGj24CDnmaZuSGmgM2dbQmn85rLCAkhZsSYzBVMhz5",
  "key41": "3MoRgbhPJCx4YKTdtFihBMVXeVRKFsNykLicKVMmfCyuNijdqTdowMhVjoGTuc3P1warCQBPskoL8eVWi5AresbB",
  "key42": "2iWnNtKTVBLuehSU7Y6gFTCQYsWEanu8MAk1yGfNNgUkBajBk7mVerSWD3mTiz8XTYQMcZhJYvLpU2mVpbMTp7GE",
  "key43": "4LFyCxyzLVarctBZ5VWm95T2zXAS17CJLiDhsk6XdU4GdPEroEy8App3QnPB8X9sBqabV3pC2iGW3wRFub77PBHp",
  "key44": "4dQmtHKwzQcZP4EsFJz3sxixM5peNELPgZszbjWzafa8FyNcEEqzohV3m8oCzV9ckBR6Z13AgQ6b6ySAnEBSUprt",
  "key45": "5pzBVjUtbmqVH2QkBqiouiukBNDgWdC2FccjkYwU5p3Wz2MNZC6q2D4P4d2iziwr7tbwYgJpCjPYdLxtKZujx2md",
  "key46": "2m3ztTrtXfGg42CNqeNFgSYr3Y9vAGfDuXGmoBV3tyNcNuStdgUCQGVuCNWwUhms5m9HZ29BSBMDzUpgDAfouYCD",
  "key47": "5Nx6YSbtu7GyvTKNyNXfAgKtfs37jzFqRKm5vUnLQjhGni7v297H3Thn42S9hA3YUeAshRyA7Fbjv5CxuqYAnsEu",
  "key48": "2Bgr6sBSnncDct5kN2qoaqh9NfHr9rpVRRGf2XmPyrCFBvwdCFma6a16skVxZUFK5c5LWLNmfhUTTGnPUVhin7Bo",
  "key49": "4Wg5S8VucCnDpdoGzbj2sGm4uK16ZctmyaQiYcSWJepvuw8VryBz49EfmhjRADAFdigUR7qAhHsbPo32bmGSyafm"
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
