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
    "zYgApqTfWqsjYtT1q3z2mXg25FbQs4a5Kqae9p1b1zsEfSBU1uEfWxbQ45YJE1qp7RnrUZ77wztHWwN9A63cx9V"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2HuNLthohEViL9UjHixZn5DRwAfgA3bDAiDWLGTekVcaoixTnjqeED6jNBTCn58oejznJxntFn8KQuodhbh8ood7",
  "key1": "KYqb3V5iptiairUbE13KVZA29r5nvmGnVMUfBmcvU3c71FfQixiVYDVCcMWhEKcdx3f7SGXSGWwp6frWTJh4m8V",
  "key2": "2uC2zmL7PA9bGiMi9LyFPiMqZWDzjaQ3QrneMiNim5KbjQUnHDBubX9wRBofopgcDpu4T45DR1Ax1hvJXorUCsjs",
  "key3": "4Z8pANRZko9H7BE9jwykYoWXXGJkrQZZkW2bkGoeX6QANbt5Mjs9ApwW5D9b4kuCW4Gtt7TSX5RCJ25ijP5PGcfA",
  "key4": "2TXgi1gtYRFSsb6KULMH6tSSVEH37C1kNAhUzryxyhqcDRmEbaM4GKK9kjR92p63QcTHuA8vgmazohuF9k5JHA8T",
  "key5": "sd6pVb3masDCVaf9iANZsgiTQjCiFyQuamSutM5uaY9R3RnckZPAJf5KMk5UzQwfAdijfmwzNhsGCx2tW3Mwxji",
  "key6": "2Y6x58EtVHPh4un5kDr2RXjcMvcKziYYHidqEvGeqAN25Ttaf92nhWTkJoX7hNjNg3ZELfCMHbnMRnaA4GhwqPcF",
  "key7": "5b7NmE2N1pk7w29tHRwbViBN3SMnhev77yJxqM9JSxSs6nZGRCFJxiDBRr9qaEPGp8Q25W8BnKJzLL48UyWfWnUM",
  "key8": "2AR3GqWHKDGRbpqxewnTn8oy968bVhbCNfaKiqKUptdEstb9UjQG57YwmMGJ4heZmzuj7D4hXPi2fLLS2A6prSzK",
  "key9": "3KWLhDzFQRdVxGKJp9ArDrGUpjXUhCykrLDVFPtaeGPD4XVbeFD9bvqpyJq2tmcKBdsjokfsP5BGv2pB8Cmj7GyL",
  "key10": "5EcyNBe35MA32K8YXfeQuufFe6apAqYzPJ5Zy182rp2AH2BJZrsZ42oPxEQDGt8TpbArmvdYVX4QJoy56TXdmEcb",
  "key11": "5h3KeYUF7knEnfod8BMRXcvzr9wjLJx4Prcyut5qw6CugZ1CEcqkwnBDBupvpK2LhdSvMCexGFPqTXNFqdavnxsz",
  "key12": "43dAukD6euKQiUjrAh9Ukvw4MkFFQsFGjbj2ctfA1JKFy1qxdoNYAS8rdSG43bfBHTwZiN8GNqeBzMJ13WrGycbm",
  "key13": "2AKeyztJxg31xkRcY2B4jCvmt2mjh4pN18pFpJ8YiZf3dMwJqmpEExdqdhT5vm4PZQReZVBSj4cs5FxdV2VMsrGT",
  "key14": "3sTEkR61jSLyBYEwLvUAygAFaqC6MDK5kNeTwterFe2uubABbpqndoSBty386PapKtSwsBxvaC22fDRZkJGr2JXL",
  "key15": "HX9n3dDd9QN7wD2Fr7ATSWFHSbaEhxE59NaHaRyWBhZrN41ZrFjWUUDbTe89jnEahdt5GrjJJPN39JPkX33sfMB",
  "key16": "Bp6TaGWnd2GtMJwxyvQD2cWKvwu1XNrP5n62Kkdw2qyR3uHFZMJSrT7EQeB9L6yKmJm7kUVXYJo87pPPSCdSLq5",
  "key17": "35VpcZaNbVxfzTUuxrFnEmmq68YFuXjxWm6mP6oH8gb1UJWtZsTFj3YPYQBMxP3cYhnUraEywqaBwQFr2UghT6Dk",
  "key18": "2kXRRJk7f1StFmZdBsRmv5ysbQ4A9Emu8JPWuz2n7kGsQU16Y9Z2NXbXzRBuPLzs8qFgejM4xmcEMAp8W81z7VFE",
  "key19": "2Kj1GnYqRyFFBPHCqG9Y8hJnWKmNHnYujvYAbEKQm2U823P5g8uLFXMKiJzKuce5paTBEmmAT9hVHkEnqTKJwxM8",
  "key20": "4a44Mr7jSjdbL1czYGFU1o5kc9BZA5Wa2fVZegeg2nvCqiQz8X95jFSeF7dZF13NaL53R6XrT2JamxjTeTnWbHug",
  "key21": "3i9crBM3Qig9rxNnPXgA4A5RSpmBTLsAgQciNadCJgF2EBHey6GnnEr8h51hjPDgoebgvhMEbNHQ7UZRNBxvGSTf",
  "key22": "4HifQKXhUaSjGNjeppb56SySoLp3rFrhkxfrksgWAfA9AGWPsSsXArZbhY5NC7KyUwNgYcdAt5jdLgknkbq8w5CV",
  "key23": "4793MoTnGVfJMn4DR6hYPRaUzx833iHzA5Kr1EwsCzkXpycYagBWcKyz5DXUnSS4ukHRjjQGkiWD5Gj4ULoP3ZQP",
  "key24": "2QWbHnrzMHKBRdy4mtcz9DHZxF57NARFaPX7vjRgmv1BoJyohjovVtDn8BzqN4A5A2xsYh9soJSe9mLCaaUg2ysv",
  "key25": "2bgDZYmneKS2xhGKxFyRgYoeyScZ64LBYrqJZ4avXJQrRWZMshpBn5QScBAXeVL7797ydxSrPtDoiRjy4bGUYxLY",
  "key26": "3JJ2G4DCnKx3SFQTRRvYSBEh7kJ8SNruEUmaTDCkb1swUJ3pnWjToWp7cSjMx2s58JF613uhNH38G4xvbxBC5yHB",
  "key27": "2JiCP6pYQo8VgYMAGD8L4Mjb8BAFKE6jUPz8uwQgRUdiBNCZZepyZaxTTK4jqi8eXQm2R7QQMvnBLiMWcXEWDg7q",
  "key28": "3oWwddthmgPPaQZDdoa68dNS2kyksp82RBRvEwekbYdgjVWZbocwMw87RnHBRkCHypb4qRwcopZJz8SndVp8G3WQ",
  "key29": "262v9UEjR7o6tHEfgxaasVMrFrnE1M3Z8U7eAfJHRzg3hPmEHgVbNU1agtRBvUT2tnVKh2ZYntAXouagoqoYnmPt",
  "key30": "3yB5jc9EZbymnm9CHDthJDdDfy6MpdB6ooozHZNzBU3CSBpnv62kWCxMqZbJE1D8RCa7kifcfdvQjMM1Y9tETHM6",
  "key31": "3KSLoAsd96WNxroP3Y111gQ6GJjHoA7uWFccHpqozjB9yvbxwBjdLYzebS82xPiL3EM51wgQzq98jYmozHA4QVK8",
  "key32": "5HamWjazjqcbPdx66xfo9NYJKFLL7BQvwkFLQ2wokqWSAyzcoLfoK5GkrbL41D8fgL1s8gu2RyFY2kc1jBkyuqFy",
  "key33": "iMR7mw5MpETZrpnpAN2wAqcGrhmHFmRVVpvPYmMrmv5htsNv5Ro68QE3pfEeeuhKAJzMcWC5CF9qZrMfKYgt6R5",
  "key34": "pxc2o93WoBeB2VsNW9ugFVe8ZJG7g2mEcNt9C8ZvpqkGrgSQpKiuw8jhahP9JdyAFpPszChQF387PA5tyQnWM56",
  "key35": "2umpgzzSgZo2qCEggMtU1WGjLppSRdDGFi1eRTNcgvLCmkCNjyqf3AKssyQHJxXQRViv2FjWotSugbf2fAQjpX5",
  "key36": "2cXvRUHKmtfqrP6sKHuFQVyMaiyXNHtjtaWrD5Yuzui2Pn2N1H4VPAB8qb94HUS2x9sY4A71m8EGuiaYGRC7jdAe"
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
