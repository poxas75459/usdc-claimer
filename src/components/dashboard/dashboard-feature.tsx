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
    "5x2SAU3a5TLxcPeFUu1xKS8C6TMzfVPmk4oqXMXysQfQPteTvYgPCByPYtywaqy1CfFicmAYDX6mHtcYxGMC451R"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "pK9ddzhWi8EdrkTBWSwRkaPdKv4rrCKXX1EUKdYVvk2pcnV7ubNHh13vNAYkukeBdc14hrdaQ51MZ9UrKinTF3w",
  "key1": "22yhaaFao3BRowV6x2sysq8aq8zMndWgWeL2rUHPQyQjXVBBzY2bCJFggWdJMuD3c3fTmPNAaPuaXW63yAvMznh2",
  "key2": "yKZ42RNLTtTBDZVCcds2y58DMH4RMBqvYJKM3WUdtoY6DyF2owHPWh2trm2XkycpTyWNJp7Dx5rxFuB7GxZPCsn",
  "key3": "5C1xrYYPP7Nq4ah71UmbrpPVTFtYD8NK6z3qSWQE1KKbZmDwMj1ZVdWDHd4Azrs2mos9UHm64nEVJsXx4h836e1j",
  "key4": "5deHPYMPDdjGapB1v3oyhBptauxQJrujeKqihh8PYY1uxVQPUd9ghDz9EF8WVtjUvcV1R3vP9k3bG91KydUZ35v8",
  "key5": "Wx3Ee8afRTKS1DPy8iCSMKDUA2M44prm1Yb2qWRzGrqoj5gWCivDRj1Dko3g5hZdBBFAvCbCEsXMCmmGpxGTd7y",
  "key6": "65aJHTKA8x5nUtsmARXwAjzmE2hPm84ksm7iwqpkw4BuKRDNj6dMWqCiMHj3euFtF5WW2i2ZNQad84Nd4TVT1zfx",
  "key7": "3QiftNqZDqFfS4q8nMRhq1cAGkF16JaYxXqGsvPTn2MDdpaE7jc6UBzEJURNg4EmqZxirC1jrf3hiJiFfxdsG44M",
  "key8": "3hyTFut364VMrzMEEkwiYvsUoZwDNwKh8VNDtQwNrY7pGDLRCLXWayaZGpgHKwVgmDtpAebRaVPFd5yFrbGJ8hCe",
  "key9": "34VwmStwQQJS9uZHGde8MjGNCTurBYAmFDvdnksX5nigysuPZK8P2Etby5ZeC4JHKNXov1fMrzecY645dkgr5UQg",
  "key10": "5e1TYXx5hJiFvewJxtKMUHQvgQ2wY8M7tHsZZPT3QiRKrvGNnYMJEAoZXQvHRAAHtC5x1WSP6Adif6mxxBzGVpWL",
  "key11": "4mm7rFWAbTqgs9PtV4apvrd4YCSohJ76QCusuS8EvQrpC2mViBHiAC5n6dUPyHs7zoS2kdUneSnKiSmHsnaW71RP",
  "key12": "3NsQsSYmWcUsx1oGRfqutsCyrKnmtRQSDBpFBacdrdeBFP6zsFSTDTnXvEv46a8UVT2qSaRpnZtHQjujVvsKAetD",
  "key13": "3kYW69M41ev2HEnZmfyxZqdguAcx4WK8quQaRZjkcyFTwqZ1TNYPS15D2ng6akGrTLsbvzmpbxwkDWUcMcoJK54h",
  "key14": "2CfHmKeMUdk8t6h1hSezgEd9uQHXSHd4WZFiaEf5Qa9Tf5U1T2b1U7kAx3S8ndnv3zoySVAEWMUSdWoT8kaW4p6y",
  "key15": "GPPHrp3STBXuyRRNRihoMApGnCP9XqVoVxGvgVXrNjKUFRdhRkcTSjCNnMLR3hzEEQ9VTpAe5ua977CgSFH5Bp1",
  "key16": "C6se3KcnddeLTn28SDK7taogyt9EvAX5hGXqVSPnHk3Fq5gx1fLLMannAsc6xe8Qeuw5jTosjAa2gm4hHCUxM1r",
  "key17": "3eAVg4DP2LQEacesfPv7jPodZtJ93Tz8jsKTneT1ufVZXvuQs6ZVDfnSrkhzkuV89i6EMV1kWwMPs7y2PQ9CS61Z",
  "key18": "4XSyvXSeg2ySth18dnf6xjJkqHX98UMFt33Avj1U5r1EZCXXBHyTXnKuUSUheNEGJfL31YfEo6o5MgE6vUX5z381",
  "key19": "Mtr7Wdp8uN2sfoBD4Gdyp6AqYKs3Fd8weheHNDPgt3Sw8YYjoC9soH2PAfSzbke2EWjZ4PPX8kA33aCQVBMpoSv",
  "key20": "2cSK53dqmALTwVRQUqFtNPzzYhmKTvAuAxKaC5WsFKCUFc3oCmdxyGoGf6URwjL14Fk454yDxaZCjwro8y3cX6X7",
  "key21": "4cmroTSLtbGsSQXaKtxqBgzxWofSpfNvMGXxCWHMKDqdbTWTYik8yeozjJpFpMWFRVDxXQwGrpPE13LXeGhEhsA7",
  "key22": "4nVFDCLz2VaiBSL3w4VtPghFTA73FWAWxVgDYse1uyWDXXCRMrueWRzJMsKvG8xSMwzqVgzF3sHNJM5z7fnNGCos",
  "key23": "2FmT3P9EPkHVrjkg7vyU3roSMnnEUYc6x45Bgi3GtvAM5kpc4e8FJDudQBHASgdK8uqPewKq6VC6sMJ4Fmx3yJMb",
  "key24": "3DbUJQv8iVvr8iRQ7fcQJyF73FCmMjBvanZGZU4sw3fJJfduE5U59uwfR2EUiG1jBZgk5XPKuYeSUFPwVYFfr22Z",
  "key25": "2D5YnckZMHAPaPemdakq8sm2GVb6qyk7ASHct518VSiLvgt1wTFj1BtGbZGwUvPyAzbE7CPbekVsBMcTTtY91qUq",
  "key26": "qhQUdWwWCBU8sSSjomojEruDXxGXgS9LSDzorDCRWsh8R9LqSGp3ZCGQDybdPcwpj7sEiPtZfweANrq3R2xuXwq",
  "key27": "5ZZ9t22kAnr4a6xE94si571LgoJTpQ9RPRZZao4Cj2R5jYL7P19mPdfhPiUyj9qaX6jUxyW8bbxrJMsj94cyz3Jd",
  "key28": "utUYQoKm9TEePakfeE9CgRCi3xALHrJ4rRQNFkPUgGzq6nmYCoF7WxzpaFqSpakSS1hPBiU8h3cZh5Za4fKE63i",
  "key29": "6Qct87aK6Cxz9SrjFH5JsGCNYpLxWkBgsyWU6MoWPe32qnU1S6vQT3k3BKgKmEdY1z6jQRDXQbgr8d7sfbcN4FU",
  "key30": "2RXCwFXdsTEUec73j4YhXitGxEEUm7uQC8JmYzcG8ZXKmYgaRac1HeZVDy93NY3oEv7MqUsKgJcqbpsZUgxT8M5z",
  "key31": "5KqbUMAQ8xDi2U1KcRYDRGEeCUaj6RNFddzJGDFhML7fjCoMxHi5bT5sh5fhGjF49M5e2o7ZYwWA533FRBPhtpwd",
  "key32": "64ibLtg3q8MNokS4tHSaxbnLWQXgUpLgr2LQHQKQ182r16yo66RfgSaded7nicq8QHyxmcQ3ZzW9pErRQi8MrPp4",
  "key33": "4e9f65px9BnHEQ28AZQJmo9QmJdjq44bGwrujDYXKRKhmcRxnB37fiaYAyfpa3iS5HkD5DgrXxpSGJyX6QuYrvSt",
  "key34": "65NNFVhYGSZYeqbqqvPAuCNNK7iWwWpmvLfVU1W1X6ScCcrnEphk1KcESozrfiFYd28646oCF5MGfcjCdMzx9rNH",
  "key35": "3xC1SzG7BFjWujmaRHBV9cV9anQDfBUyWJTj6SoscuKGEUGjLUShfa7o4hPWXairGhfm55BeWgK2FXjCPurMszg9"
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
