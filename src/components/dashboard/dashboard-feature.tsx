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
    "4XVsAoYZ9qme65ZuLUiv1PzHHDT1KhnkooM4cNJzg3doGfdtyHvPBUXN9TiFAXkAgd5nipzeYagKFkShf1GAf7fv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "imPsERiQg69dh3MmM9HHQiUqdTYvuLgvv2WJzJze8kgvKhfPqgQLiwfAM7jJ8MGJC4WG5rx2yjXbBnoDZg2TJD8",
  "key1": "4m9PsZgpYuSdbKMQdWkkeMsNAT9SqC1HQt5Wa5toKLcAS72t8176KYmi2whhV4tACbcLtA49z8XexHyRctEHzfw7",
  "key2": "KNfz1eaYK4jLKvqThfe5paWuikyi5RnxFsrR8E2BKsdGRzNCrnBAdKHs3u4Zh7Gqv8kaHyrcYdptwCKoVAoeMXX",
  "key3": "3dBJWN7dyswjw8j8ev1UT9bsQwJQoyKZqUGfFXvTTWp15YECJnUnKnnTxzaKwHnLFeCJAgR92SMUq91sdds7fcU8",
  "key4": "5JukFM147pEx95remqxH8L6SWJuZ3HTJbPP35tgyofM4m3VE6t1vrt71WWdcLb5Aj7euA43A3a8P7iGWoLF5AgdN",
  "key5": "5vqbctMZaYTodQSVoAmrcPavd6ADHRnqmE4W7sK3R83byULTX6d49ec7LgEMYGLEwR7EnWenpe53QdTPMRH1sEjs",
  "key6": "5TagkqNp2uhpkgrC1rzfVrN3XP7fk1vaiM1QjfQ8aAUGhGd6ZW7JnkdT32vo6ufRWvjFH92aVbbiYZBN8rP6Wmbp",
  "key7": "4bgEekyQ3T6pwweFNxE8SUt44ymvnWfr6qxAr6K7ePQGmeSspfiszWnpGdSmn89A2Z8er3EmqdcNqxa4EcjrwJFV",
  "key8": "5SZz1DfxvSMaRQrg3GRM9i93tEndWwskubrLv6Z7JqKd1BMvzf7nZWU2WwpTouV9CPTg69UfJGXWjm1XL733656r",
  "key9": "28GJWDW7VzgYNPRdsY49nfKaTPuoeN5cSPND2gh8BkgA1ucRnczzvAHJMZg4Q5xcFTx23JU3kEVasmvxGRph5hEw",
  "key10": "UK26L9zzZJ664XDWwZ1qZFfgjF4Gm6LztWpuLVLSWBLKD2Ju4UxkQmM2uPLWD2ZcAqkmjhH7buXadVtHjypm39R",
  "key11": "5wDXd5ucbKcjdhdKnnxZiGEoB1xgNf2BJD6iL1xFbfpqQmfPRB1eLEubCvrVpHzfwTQtpBjxbU2jqjZCDd7RLrQs",
  "key12": "356iWF1tcYNfBPPdfjNGap8TYSynGd8L6DWucCEwfGkd78cqNNicfo7MRGBhoQtLjSQkyUpy9VmYG2iYPVAeGBJX",
  "key13": "5gJwviVB73MNBHJgAb63yM9zrCUjAapV9MnSjLehDLQyS7TwPaKKSENJK7aA13JBUAq9BVh5AyBPzrWAXaufxmiC",
  "key14": "5wQmKsNteiUGQqyRK2xYxFoUSMcs4DTUEjVJW5Sg8TWzL2TLqwZDprTELX1rdc6WoQXZTHhtuPZPiqP5R3jhLa4e",
  "key15": "3P85C4muGgeQhATdHWPrzUVn39WDk6q9spySwy1Q9wVXcC3rwhahje2dLwXVpqT7oeaC6ptBg3gECPqYydzW4DAa",
  "key16": "282TCiboB2t2sQYfG51yFrW9eEWVk7heTND9n61qyLBGG6zR9EGf6ZUSnH4Um9Ua3imuPo3ErU5RSbvig65VrWwk",
  "key17": "3HM1Lj3btBBdRAwLx4AwTRPvwaNEgMXJ7EfadfwtFdLcbQFkMm4iKUPmi3bRi14hsvQw3WrNfoZcfaTsj37riJVh",
  "key18": "3hs7v77vD4CmES25Kmo6Ui7kECjg7ieA1gxWHEoT7nYY76xf1h8Gm3Hyirqp9b3P9415ztXHxQBLJLZ4x9DFEk7K",
  "key19": "h8fTAyNYAsPC31q3kSpT2atc6FDNqAFPXNmwdQ41m2cEGowiB7w5r1juUSZokGufJvsY2Q1h9S2V7RTBC4n7R9a",
  "key20": "4T1s3gHUxmg4oH21zHE2pKKKdvUT1mLAu4xH1pFCxkEFUwTPsEZr67J8BptvLfKwa18Fu2cLmQU1PWz9GCfBEb3K",
  "key21": "E8Lmoc5PzbYrtBJbqddB3aTJqwNc7iQazXDh4GuguUniyPjrQsTa2E2FU1pNGsiTCDkrd6yZ2MkTrAWqLrPvd3P",
  "key22": "tM3wc76zxBeRKj96VdQQo69JSNLUGQSCob3WfvrNU3g2CgHH7DXm1TnqnXStrzSJVvPSPd5pSiNAxc93SZbRV3B",
  "key23": "5ub5Rx2gJ8HvWLWctWMLUmpCEdo569qerYD83WreynxqXRoRWFfCXxYt2ucMK9QzFhoGoK9KnTuApUSgNizrSwUr",
  "key24": "51ZcZXnYHwgQrcBgfQKKGkbWoTpRLLUSBKQDLFHtdHBFhZr3rLaM2rocZVe598nA3ccstVxV1SZ3m31LcZf7Thy3",
  "key25": "2tfuEoqrTUzRhcTND9WNsQJDjVnnCTzsudbiJ4aWrKxJ9nKiD648CUPnhhjDrWcKAe2NRkvxfDRdKEVzQDWYNFEm",
  "key26": "5fvURj8kC4D17vSJYSJYbdTdQwa1mmQgEyov563r23zDuLCvdv919bYETmiCu5csBweysdaHiRupeHTpsMoJvjpY",
  "key27": "4tzjVhfUcgPaD95Bp3Brab5zFVVfesRf6C159VKszy6eeQ3FdGJ8y3vnsQYEHt2Vu2qMYsrvDcQyra2seJwZ4ixH",
  "key28": "2U94MSsm3KVXdCCmL3WBNZN1BSUnyCX1npDfQPaiLVJuZGrf4WwMHaey6nXLizes8qobuyc94JrsDEXn97XhG91N",
  "key29": "3bBB1aqsJzngjYa6kKFcPi3E1prtKg8dYj7gSC8seSKp3dZEBV4LxC2cqRV6ce5VST7QH6tuUzfBGoPXXSCXnMMt",
  "key30": "YLt7aMaS7dsYXNjdsAKGmXrzZxAwBcLhG9NEvJuQMjg29aMh5G3sqnj7RC9oqRTULroXUynxz2E15q6HARAb6KL",
  "key31": "48hTh3UCZh1E411CbVJyGTWGpxNU6ozKyNaxXMJPMA2AhYTAU5HRxUdqsLNBAHLYe4ViPrKpknfopL57mudj5KFj",
  "key32": "8irVR11DxqVtAfH3PLEX4jaQHqgTM1c351nTC5WP44ye97dunPhSp83o2BgmwzyGxnRS2kXTfpS4RWbEp6yQeEs",
  "key33": "5ptYYTpEygbvrbAVW2MQQtmSWcbu1L5TpPLvzsxkCnqNGcjLYwKE7ob2dfQttYGHFNLrjTPYwsXXZ88PobrWtWua"
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
