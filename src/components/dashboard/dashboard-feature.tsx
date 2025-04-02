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
    "2DXuwuodhFwq89QB4dJqsU2Tgk9d2jW3YJkvgZEaLik5bp3zMsbhEVtkLQJCUno2pp119aRUNE5H9AezYU4mhnHS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3UA5PJunioz5tKyCBCZcQXaLBkUjfoidzYVS4VN9vtENcduUGAnrL2FYV4br46Esbm9m4freD77oE1dydANbiS5m",
  "key1": "4fPtza162F1o87ocmYd6QozHmCnRCWcVkySXLHeDhWXJYvdRcQjDq1GCneGyDGzLR28Lmk4UQ3GLPoZtzPVUU6vg",
  "key2": "45Nv1eYa4wBTa5GKqDBvXYtbZNSsADhLDGzce5MTV4BygkskrHzPApq8CjWshCVCddwf531gxNj4QR4td8gToG5D",
  "key3": "32exVrWAcELN8bKhxEmgqya85THbz2urUaYr1MQyAKMZfQKWiXhiPm2iVT4csh8AM8qwoqE5iy49cYtHapNkntb",
  "key4": "34XfoDLzbnG3Ms6BA4LqZeh7YBw7PQ3rPZvZp1gJ3fRQPzyEmGdUd1bEXXz7NmC7r83UKZNqH2e7NwmksTtJEANw",
  "key5": "5cpNGRi5TxHHYeM4FSBnez5UZUCjpsLU6SzvcSJkG3ihNRMRp36TxBqhsdZZ2emj5Lj5RSPbihZb3mryaTqPvp4v",
  "key6": "ks3TXRLaVG2AnRjGzbBRianGn2Bx8V2idU59R4wPgDUPXw8fpFVnYVayP11Hg1cXt5DX9qnghu23yndKPJeTg1X",
  "key7": "3rCp45SB8nnzuJ2GMpZxPpMt1gktXQhqLh41fh7Gj1ihwKpdHdrJzDui4B4U9ZwspoLDhZThYh1hHzLFnVt348j5",
  "key8": "4jDKmCRjYsHPH566cpPdae6zMrFi3T9DH8F98iH72LR6rQmqr9C1mhQi6anf4tfWt6Z7mZncCdz9UEfpis33UVSB",
  "key9": "3iGHtcJhfxAuXd5xNNMwBLbGTVZx75ACsihrXgs65YqaeLvT2RsNM8abunzmc5ZzSAxoWchqB1tyA7kMHWszxK7Z",
  "key10": "5F3rTKEwYpjSnfJ9MFPbJPgsMS5aqELNvk3pT3hrJzdTZE5do7KpkThvcXzk8a4KZcAWyJFssu4krPARN59hfrHx",
  "key11": "LfLvqynEWmRbScWbrxkJvM3Y6M9rPjNxyzfk8ABdCdzNeHMezXXgTfsPp1UggQ8Ah9pXHgxTkDTRn2eR33H4cE1",
  "key12": "2Zh3pWjujH3BXV1mUCpWctPE3VBgyPeyNVt6eSXAvWM6uaus3Nu4YKUgKUZNeSqkZ5Kxg1Dk56PtPhbrMDnU6vRD",
  "key13": "z5QsVjrkBRKqVfZBYeZe6bRQEfR8zsxLnxMm8SHaNE9ebNd5VveP4iTqbvGrE13pKPv9JYNbXa94PnLcQVomSdC",
  "key14": "65HdNeecuPzaXYRXFRWD1ApPe2rfSRNRe5DfnueQrDWMyEdBvCEQ3fjnQca8oqwycfhfix7Ag9vj4dqyPFKVFJeX",
  "key15": "uwGXY5h726asgtFkwUCQH2RmURf6yRsondSkLggEQp8D5APMMvpPes41F6zAMikuXmsR88wsWjEdY2oa1SYkikh",
  "key16": "4TXQJ7ZbdRyue4714qLNt7A6wKEd1La67YNBzL8swmkEMtQCNL2Ssw9iR5Dfnw5wQWAECDgksnEcoMaDQn1RmyKA",
  "key17": "3DTaN3jDnqTERVCmRuABk36osEtgVzLvTDiY3BmbPJ3zwXesNNr81V3YuiH9UpVG6UkLcP2EZbHC2RV5J7VZbHFa",
  "key18": "41y9WgCsaPSHDMhbGUHf9Mx7ahujHwDRb5NHc4vKTy9Df3WLckYHRKHcmWUfLGULiditi7X5ZY5LRWYfLjRjqjZ",
  "key19": "6xTobcx5qxNLFibzDbGaCwkfQoB99UqxZdRuSje2FVkxYEKSMNmdSNJE4mFpWgtvVd7nj467aGJUynVYWPsKZoA",
  "key20": "RHiqP3CyFuWhxn7kFDsGaXuvUBTv4BDXpzYL54Jrh3iktkf7Nnx1yWWg4A4oipt2JiLcs8BkAPSLUn7hR7evssu",
  "key21": "39sq8XR2mdNpUXd8UdXVwgPoJcs6BwgJtQP5t3zmyb2sagMudcfVhckALPRXFK41nojMysEGtravVZXkfLm9uo4M",
  "key22": "447N9m3NuwuRfkLPLwYfYRHJtFKm2FFGWNYQgdDoSk19AcdUjF1djfXTLXrmaPaccHEs9JXmXU35BJWcPdFsRaLR",
  "key23": "mAWFxbhA8iLKcbWR96DJJ9bTqxwEunqZSHjvMabvooes61mYURUPDJJCou7HtmafbhwULiuduMBPNsw6vAjGofi",
  "key24": "2hdLijGzKLUsL3jY7brVq1uuxZEXeve2USEjRGmUqHZyzCDKJig1fhpB8T7c1bFznHXzse44SLvjpEf52LNDHCMK",
  "key25": "Re2bTxwZVcAmtGfxDUjwQqyTmDCWZxH3myqqXVxVGLeHSrzKefkKD1nCkc9TZvDQXVrmNHrEMgAeRpvgX3vLsKT",
  "key26": "2HxPSHCCieATD9AdMFnvxJpPWGDWHd1iVuUvhEAj12DDSk1HvwWjWGp9ByGvH8zjMGyEvuitn7JWVF7467FXwg1E",
  "key27": "LFNuUK3r4mGXGRDBn44pQyfkRXKbRf2nWS5JTBVCYxwRyAnwvhwi3mEQtE27pGoiVmUcy8wWGr7DLh96ht5RnSA",
  "key28": "2vbtS4QdJHQEHNvaesE2qNPCSQ26CamudBqJ1d8BLU7QYaeerop3gipsJD6N1RLZSc5sMRCaCpCvXVUF2RvELE8i",
  "key29": "4DdV5MipHNxhutLiujQEct67JkfrtryJ5DpbRKc9p4WEQ15Bw1XNKK6jwwsisBsiBji9vvEiXxocZ1LD7XJ9L6xM"
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
