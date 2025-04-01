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
    "5tL8hzmSTWy9cbVX7sYJsxszXcMAf6BgtCref35gsQ6Cv6A4SWkeycSvEN48ZzRfR2t2ThwRRLxuXRkbA8QSnmiK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4uNqnwXKTyrff6ABhNpAvZdDMBsN3SntxdJ8EoHMRf1uz2XwSqnrUH3ALDHwzZnUf75cCbR4Ey7NzgXpCZvmcXZz",
  "key1": "bx9NkF7pDeGDzYtcKnfseXaVpFFV341NHny5RejvospB3rRX7TxCWcpbVazvzEnXPPyqGMibJ6sUSPPNjUqsxxr",
  "key2": "5UjPoh5ZB5NbJX5Vw6GUoLfC4sfibM6HaZEkHkm7gWDRV6DTwENEP5hopBZ4ydTc93kvhanbtHZigN1gtHHHSLsX",
  "key3": "LX5fCZqcfeunJn6eV8Y6JdoqXi2uiokY3NFdByMRMzUPhRaMATCWW5o9iAcgyjo1n9idJk1yw2yrMkNFhwZkEF1",
  "key4": "qqW7gb2HenGA15drvUewtd9AmFLrKYtLFYgFhDsjBjUL75BQ6h6xA8oHiUnkYS8VrfXn4U2kyHNm2yivrXVgRGN",
  "key5": "3SAL9QXckTt1QujD1J8hRkTrWyffAPpHecthK41pyRNHP5sBHBe6qWXKzEnwR6kGQUw8zJJzW4d5FnoX3px5syzQ",
  "key6": "4aWWD4SmXAcnNnJUd4ZgAgjpMFZkqZHV1DUvN7N5vEwHRA77LEf8P8WjX6AsQvzYTqU26iBgRgrhszvQiHMVwkiY",
  "key7": "2GfgmaN38SFpm9ZMjjCjWqPU7FvnntP9q6y2LGuuLVPRmoWcTVFN7vn8fhBCD8KQY8hdfDontN1872S4AAVJPQob",
  "key8": "2atLtVs3qTAVT1kvRggwtdtoEJwfnRJeM3b64ybgb4KYFxf3TWoVJyUCv3cwmgpJYDq5rPSRzAXcMymV6MGo2cF7",
  "key9": "2SabSjvi1hhfZmNUhctRKC86SeqihzxhMsTkkc1smjwpNNiGpCkt6gJ4fg24PBx36QLrcMtWsKEV1XHUTEhTSsLp",
  "key10": "5LJNk66HobYfiYamvwRdx3HWzACCwtQFyc7tkDXjrTxEZ4DquGFbCTHTJY6VfvYHvaPT4dRv5UsXt1dZf3ctVFGb",
  "key11": "5w8HkcinmWgWjRtmREMsU32HkDNDmcY6bU6bHqfSe81XbMhtSB2KUmTM7vHCPkmw3xVZc9FnbQkZ8o9yScCdbuST",
  "key12": "3DQsh9FtYd8RwjcazyucmctGNSttuK4gRcs6S6RnZZeD4trtnyT52uLFXXrnBUp85Nr4bh4zXv6KypnBmzHQjcVC",
  "key13": "5Uvz3NzxH4Aib3c5XaBJCwhpbyoNqG9iyVBV62ZvMSgWqgCD3xutjw6act4ZkiCY6QKFq1gCEuNgHHAsMZiKAGDN",
  "key14": "3pxLPNjRwp6nqqx9NMKbo9s9YySpxA7m1TLo5Suu89ibsYYmMUD6VHVsqsysgYuh6EJVwNGvRY1mhtpJFYDYJfyh",
  "key15": "35GL7aNvAZw5SsbWturrsu3W9gNwffQMhmFBwiV4btMGPK3jBiVLCK6iWfYXWfnj7d8DAQCWFspsRFSf3DZfp8J6",
  "key16": "59DYKqiu2DBe5YbDuKV9cHahUZh7Ha5akmr4ojULKLPTm86HMuAwK9sPPghLYdies5s1a57kvv23xjKPhoSPGbiY",
  "key17": "355n8Lv3b9tfGK2MTvPZ8jSk7LbJuVWgXtECH9gs7tbWHXbRMehWfzVf51AqXhk2EdWHfm1zE1wtn4qpXvL4w73d",
  "key18": "3QrRdeVE1LnBdczRBYppRHP5rAcaWskoMGJAdBcT29q5MSrV9h4E9xBtrqEzDUUhRDwNij5AzMCmgyvxJ5vEpwVr",
  "key19": "2cPqkkh9S5PLK6PmbWEsC6z1r4cN19MeJYPoo7b63sULEqCVty7F3soVdH75WzH628ad27n7YeWCMEGW2C4QLVoC",
  "key20": "2LHUG2vMSbL84NTTUqxq5a8RCRssTFHHnBe6sMKCAuo1HnwwWJPNTzXoPMpYYSJhpcqfkDF7gJagtqHyiozjNN2w",
  "key21": "49kRpVDmbnxh61BVX5JCuoi1CwdV4xDprumfKPbfTuSFTcSAwL1WotmdGPHyRWr5GYiA72XipTDxW1Tq6PirJ8zv",
  "key22": "4GmQy9crkMH4d3auFgArboKvVUHrPG6EBb3oLuhKrSfM8YodKog7tQEJGeBdy1xuPTPUCXU42qJ71sGZtKYf9dZF",
  "key23": "5CpMyp8L2acZfGhdDx3r3NaAjqF8z14rXRdTP4iFCXJ86zHruA9e4dFXjELs93SUgJpAho7UVntyrrTE28om5NAa",
  "key24": "5ezhTXbCP952bGeuDXYHx6SRNrLVy2LYu2UxrgVd7dCQX6sf8TyVGD7mLe8RjwYpypdiyjMi4hVgJ8f8xwpSxuTz",
  "key25": "2PoD1vc3c1yL8awDjiHidatF7ucsEVCojNZbpRyxLUDmWRh6dsgevSVSUFjuubFURhUdrgxDCU1yFDitSb99NHs4",
  "key26": "n8ExZBuBctwDJxibRBmTQjgQrPXdemo42CvaMzh7PryATzbJ6CCyzXJMFfzVw5vYm2AK9x4QFCYS3PdHRCFnTgB",
  "key27": "5vRmESeyNm8aFx5wHoAvNzAxbpTSstGRodTTMJpaRPR5YYtbvd8AnJ6X19i3haUWPBEUdYYvbs84JSqS813rjZw4",
  "key28": "47bgKNZ43pym2iNnsicgGSGS8ZhzZgGMiyLkGwPEkM3UsVCcGdgMghhJiSgvzYfkexA2sCgWfzQ2jLf1SiGGRECe",
  "key29": "oJD17GR2qsU1d9jmVBWM8vYqU9DwV5AhBp7VPDRMmLhTvSrHunrcPCVWtD2cGtQqQocioG61RpPjhWx5GKC6KYx",
  "key30": "2wfN5ov2eE4CjBFzo4RhZZgebgrSJ7vi3TeVby2kFXppx57yS1wyPsw7wWgKkgW1DsxFQdUJpW4sqDEbgnpjCv3R"
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
