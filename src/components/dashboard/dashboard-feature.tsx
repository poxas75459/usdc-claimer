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
    "42my2GcwqS2dTLQCpmxtsjFCgso3p63fovZygeqDmkf7b45tnPmokzsR5qcaENT5GxWxczZAHvfQ5PLCKAb7KQrw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3dxUC2LPcEtHGcHPDw6TrXKhS9wYQzwMUx3ZU1MTm84scWLV77yK5QQJBz9oYXjS7SJq9xNF2riZRTSnM8SV39YL",
  "key1": "5ZUA6sBG33Daa3FqcNR8RBk4BuJvZbi3m5GzJJ9wuRyKpjbRWGPow4LxbfRHcVvQy8z5vGcLxhE9SCjjVpofaZc5",
  "key2": "4GYZkdbEhiKawiFvC5KRFCsPbzGFYyeLWUpeFnhi9V9vYy51wSzrfqAzSCLo2bPUVUeukeA2qczvqMndQwfEY3bR",
  "key3": "5ViBFr1kLNhwx7iSW67R3YWmGnvXa472vtT5w9899wKh8ExCMWiZ2Q6v2xgAHyhVpLdA7uKRWswSZ35CUcptAhfS",
  "key4": "2WFMB94U8K812ArJXieS49xTvoZSMoUJ7fVd99RAWJRJgEQXvYZydAoJm4NZdFXavgxtCxsMfpv95fx9Xj5P2TtH",
  "key5": "Uvf9xjQ6uD5p4FB2nQF8t6JF1inssdKtnsrmacrL8eCYR28miZ6cTa5c3R2xVq39kPTB4z7mcwSzZeGcf6WuFJJ",
  "key6": "RPiaDs1sPoRm4vDPco3TR1sVN1TugLiBydew3RyUgSqYMPrywt8WxUMEmig86Gx1n3sK3zGe6BFJTPT7HdfPTup",
  "key7": "61b417DEYwD77CdyZELmHvt3Kqn2wbei9UQB4Gn8LhwYNEHBAEeQLVuDnyJihB33pmkJSDZkBFVPnpv5pEGNf5W",
  "key8": "2ntHUmLapVJi6px5Ey2H42iNogci1vLpRxT6iMxFKWxmgm6P74gDRNopMCqZ3aXFD1eBTFT8jT3Y6xcDBuu3H2K2",
  "key9": "3bZoHhWLkHxWc8Tm11MxymXBWqgk5NmVAJL34TCgyPHDCZkG9q288UndpBnRX7FGr9BbZFUZ8Gb4jhB7AvdcEpN5",
  "key10": "2wTfKavth35rXkafKxPQH9KH42xKvaF9xRdzfSDQkB6wEK1pc4xdsujLZ6f9rSXvTc98FiJGWsbsd9fyAsRkSDXD",
  "key11": "42caP3aMwNSr2obbtb6kfUaiaVRhd1aJTfxFAE6FprtDHM3Pdvs43r15iu6W5CLnJMDhsiaCtaKtp3BTCj82ZGT4",
  "key12": "23NyZLQtvmUPW9SeJztgpTiFt2Pn4aRWpp1fnh3P1MLd6RDdfbMn2uPspe5tp39KSg5DrefBEymBd3ni68YzuLYZ",
  "key13": "fpWCPG4Wd2faa1PP2dttcKZcLxMEzLvXTZcqwdavP4vHBDoAJ6pf28jZhF8We9oSUZdPUCWnkTaiQwmNSzjGvfA",
  "key14": "9pFFaADMxvoEzgGcZmcdWnuYiZ3Pmj6CDqe79t3PVVbXCF3n2vghMVKniUww7ECqvHoxfYxXJwbUCj8jjGTzA5b",
  "key15": "4uEUYADy4qSkj9p5VrRVrs9sRTuPASJfvJn9MxvwCnEc7yeMXWtYfKXvLZDSqFjL5QWg9f73VNGBPbJDuDYybKev",
  "key16": "3SAyDvnakUriD96FRVWCrCyYKtx1Qc5eJCd18Evszp8YLtPMxrgyY5DEwm2RmM2nuMoEaeRQ5woFJuGiUSZX7fUG",
  "key17": "2UoLNjEH64z4PreDK1Pngj5HG3Zd8LoctHmyFaNce86yZ6McZyMs4w3bDv2hgiQUoonFLSdyS2rvmBavi2LQryZB",
  "key18": "3sgt4J7iVVhXiEHd9BzYLyzXuqVwtdQg8PfyUJeuToY7on31SPzGFazMSoWbwz1Pf6QHFTRnrAaBq3Xiz88Fw3jd",
  "key19": "3JsdoCYbcDpmfWQUs8Ewvpn7vyd26NW3cD4UAfAAKT6iKAgdXtG3wdY6254tyso24PEr7G3j8EgYQTjeivTHT8zx",
  "key20": "2yEtQV2oYE87aMkAdcmZyGBZ4VeHRmeNRZUkR3vot3XiiZZbsA32ymXbvaTn92MGJHrmXLwTzhwYNUaD2fwtMPbp",
  "key21": "5rWdFyrS7jqWTdCZNaERbk4iAq5MBabavfQNCRUNuDtRBiRbxmguBWw8smsvy2gZ8R5ZDTSANFmvEwFtqDJ5QkDw",
  "key22": "3owwS1c72zS4ZhJoJzWFeUQi4AGBW6V1tVdx2atoQBQX6E9UmpTqcymDUTQ4MrPBnwszTxvRQF95E2NhThuTXdHa",
  "key23": "59QWrgARmsAGn4uSr9JTWmH4qZVptpwHwLAR73S6P2hAdyFqek2UUWaDwYzyizcdspYhKg4YKZtC17SLw3f17e9R",
  "key24": "5jX6LUCyhd8F4BwFQcnsUJebznSpocTobXBetgfv3wgBLcv2W7FR9QDHhvyX1v2YxJLkpgce1y4eVguoCbStufsG",
  "key25": "2xEZKLtbEpCrwBxtE1KuptkUxw37ZtVdoPuKx784Hx8TdpY9c6b9i6bCmhwra8723KAUHLvKS87r6voBu33UH4xo",
  "key26": "39X8uhu1ka7S1kZTzDNeQknwTR991srSrHqMCFyJNZR6u3dSzqSjEi1AhBPfFDW5ms6D41XU2xGRoKbUTQ8YtJiM",
  "key27": "65DmsnzEqFMoqaoJF5hBwEiWTLk8NzMWKKUX86K9UyXgZDiCnAStS59XZWNRQsYFE6KESW2B6TSc95Kmfjnn46Wg"
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
