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
    "uJiaGkoaYVfF3dUa4fCvBLysjBZpCFvwNVz1brnes2F8jiAezbj2s2KQWuipvrDj1QdhTWHGa1jgqCTyZKWq66V"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5MfS9isFsDShRuH7b62wX7p4SETNEVtToS648pDgM1hoHFTX9W3WHCnyv93xp3g5AX66D1SnJzyKucPnPfEpqVrK",
  "key1": "42h5Ycx5ZSGFe6pi5Br2iELeGhUGVVDbPXqxPm6x1PXfDzQ85H7x92KHGiyoGkrpZQg8rHvBpAjmYvZMCu2LKBM",
  "key2": "49CWXzK1qHGnfd4Tnd3Q4855g2vJq1NHwpLwSVqNoQinN7eRXU4jWdXS2XnFf1psbMqZ8BoNgDHnz7oEEi5kYupf",
  "key3": "q8uKmLyR5A8nQX4DHNH2vu8hsVLyPS4HSMtYawyBjh6QNer9cXTiyZJQrnKoyiqimJe8gtqy2PGa3gvrPRAkUq7",
  "key4": "3cYke9QrMaSnubfjZsUgWti7DgQ7fFpQ9Q9mhLxfXA5gbUMa45VM9zcHnyWVWineyYF3UpuHfbp5rvwhA5dsMDh9",
  "key5": "64za37E8c7fknm6Rj9cVgvfU5zsF4yFQV9cfgyedZGDqofXaNc6bqaEcwLJLBBmT9Y42GYnpJB9E2kk8Hch3pBmG",
  "key6": "34Dum9MVBx7zdCqAQQPZjHZU4ADdgsqQDbrxCxHqcoh7zTAwegwgeMioW7hXaBZepPCsNFRiEqPCGiPTWEs6R49T",
  "key7": "5nTLutsh5cBsAvuqqVu2EdPHMGxBNSFMJY5jhGqzXpRy91EDnmr2yyUu2Hm8NvdE6Nr2PxmWz3K1ZEUVUgrZomBg",
  "key8": "8wf4Q2gWaNqXGKR3U7Rwa2fVPExEZgqZujBHBgDr24xc9Mg39ie4guJZuXF165pyhyHjezH68QxyHmPQkY1yYAz",
  "key9": "2Zyvhv7aYbgFRXDLMaw8hgRcpyx2w3dajyGxNZ7Qg593H9o1GCaeQqiWkCczAz9XXnwFm75288cAEr6bjNFSyg5b",
  "key10": "5PkoDubFMUkgrXDUDiAfPKTnMA84ke4hnyeMKhte41uqHqQzZ9cwoPKPToqKZuiJTCrnV6SYFggHQE8RJrVAKPQ2",
  "key11": "3ToXKiim1SwihjcBDtpg1CD9ogNfmd7RNGBCdsS2Z4DBbzvfqmcpeKJ2MvnSx9Quvh1jESLYU8xWKNrujJZmapQJ",
  "key12": "5QU1ApVdKcyPkU9UwheNA8MRn64QYqS74TnUuysMhKqdPodnkhU5bNseYoWg5v5xRDjYCPFvt3q5SyXFSgbMPYjU",
  "key13": "21VhY4xg84hRwchCbNo6wd9qrWK1FDdmqvVwf746X9CEHoxtCDBoWeNtxact9gMTWJaHh3Z79br9YQA4GksYrhn9",
  "key14": "4bkU4cKkq2FPQQsQLrB9Xo577YKmTQq9DuY8MrN9RWxbhYorgvEosH38Kk74hpd4X2gjNYpknzcz2P5zjfcksEmy",
  "key15": "2jDQWcpvJt5Ssh1KuMqYi3yyHGyj7dsqE8YgKX2kwe4y5badK3V3CdmP1Z8gGrPsKgxHkDCtDMaxEhfaXW3qKwh8",
  "key16": "56KbUWoCm36uveqz5r5gDHxCruavE7mEheE2NNdaGLBDuCWFR6PaUDXM7TH7KLcd3WFQtXXQRcBXRYSYgn8dJay4",
  "key17": "4WqQ9p8tknic6zXDYdh1tp31uMTKLNAyfJkFmMLd2SWPt5m14b3SJgv73PKmy8u92ic6TFaqTYBzEFz8t3dyCzVi",
  "key18": "sqCpAyn1yStjHAuRTo3QtPc2PFZuLZbWteApkZ4GtAKxJnuWNfkSfK26DnZzkdC6d2Dg4gPv3LC1axQP3eU6Vhh",
  "key19": "2bwtBpA6AAifqFaCDU5wAk2LZqh7CwYYEn6Jz7sfs5dFgihmT85PLV7KYedA4TXFigSogjq2fN4bc1ADJz1TNUgh",
  "key20": "48Zi24pTPn9KRZLtJKKmpEVAXbcHF1e5EN5UU4f8L2PbhibqypyE5d6pchJVeWg6yZnui7XXBQk2hHPox7Gs4764",
  "key21": "4rPdomdrK3kAPyhGAmsq5xH4uqNNvqpp9BsvHtVkoWBRg64h22vtuMKCYNABHtjmYDqJXzSyEuLhux8iMTE78gUc",
  "key22": "65WofSSCiWUMJk9NG3iFcG1vDWKBkMHDwUkhYh9GPTRKaLB9nCfZWggHBDHsk2G9svqEsbRDQRATSzLqw7CHfn1r",
  "key23": "4SY65HhGNuRGVzEiv1ms2DdXUAvGtjUAxapskjsQqj9fAqQoVnCFYCBfeVdYGc5MwNiZQmChggT5aPU5LVRjMXZU",
  "key24": "4E5j5YAPSts3qftQgwSH59rD2CEvb2EKv5BPt24dyvCMPyjobskHd5NftCJatMg5eBddnG66BJSMYC9q5rk6uz2d",
  "key25": "CpvwqUrGQ37nwGWG6GSbFWeXWftXYhnyR6ghZpjdurVTooCYg4mP5reEmBJU8gNWVVMed8kYkiRSYMjLwLKpQsK",
  "key26": "2baHYL5G4hhk4WSe8Zr2r5HTG4rfGvSEdxnJwqausmVBbasn8Gx7DEwwxuHRA1TaPArGW12ccPmBMaQG95e8nR58",
  "key27": "TQPjLE4C5igMDGHqSjLWSyGoa23JF9Q74ucq9dNLuR8AmY6hj75rSRSHfMM9DeuJZ8xUfWj4H8yRfqCMnwLRPnG",
  "key28": "3k9JSQK7WnDYkd9Rd4Erypi3J6nNBpSHzCTX1uEseuUkY4cD3My4JrUZbyhAarDgdBJvKN8Uzw6HmK92Vp5egbnm"
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
