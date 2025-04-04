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
    "4C2YppPApwMzFzhTXaYd3ikML3z8uhfjrQynxCnifimkSeYjMDHy4n2ye1qtT7tf1c52erg85x4utEophCb4bDbC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2KWMei72pVxdUKGXU9yPcLTJiqtWMsVgmPRyZH6MuHEr7DdYUvTg5BiXW1ERUsUtSQjn3yrR8SXgbTDpex2o3DUU",
  "key1": "2mjdgLqEfE6xW8T2MEiZyXxUrTiHpMw1VexDydkDEEwt9bL2ivQzMnXwTc1FEWKeNHM2ChuWdyFu7XPDTBoQdZBr",
  "key2": "2h9Yzs6LkddHCs8fwV4UqoJFh8KqTJzRH63LXmAWPgvdEH8oTJwzaySnDsodZ3jGp6GXnceHocLhH7Rrg36hMMLt",
  "key3": "62AwQgiG4ZK7iV6N2Ep3ugoSwkVq8kXhrpWpF7X4o8vx9DMm3zUBFUrMHN3G3dcqEYsWvTJY1Rco8RC1LYNEUfEj",
  "key4": "3rceBpESmm1WBonMnZB3UmuvueBRPuPFj1uKUt2ukDmUgYg3AZxpxMHvNW1Dwr2xhwXZMRk3PRViegsnX6nTBBMc",
  "key5": "2awEPLPjJjRzj9R9KPKkrCGpt1gMsUbArrb8dM83iNXyHJZbRQbXKQUraQ473YcnZNm6G12ksHpPw4648ZWyCnKR",
  "key6": "4gP5JPAftrt8xdiSfyGuqJPGpfYxGAegdtVSDVhDXU1jfVWcrFHhHuoJL3Vm9ZaDfsaRHYw9URuxNPVLBFC5BYcX",
  "key7": "2iNiMMzAPd1YzwWXbYHJ9pkkMe84P6MZoTyNfyG6xZPF7T7ZxmdkW3xu2zS7JxCKXVyCkDzSMbohfdsjY6Rq8h5d",
  "key8": "3osJBqXcKxPEpi45VeESxgPSrSDRFJHnVcye38mqbww4QmUrXvWRscKPQJ2HTWH6Z9bsyMCjG3T8x5shCLkYeX98",
  "key9": "5duiY3Ev3aeWcoLCNXf4ZuoExGEEMJPedsd1wCxFBBGpH6d1djoV2b6GiiYknYPrMi6yj2HmGxGfLW8v367RmEne",
  "key10": "5imASSGHtiTRSTdQCFCqQ6E8VXx3a2oUyTqD91MDXZTxw2SLvRcQUCje7Nyhivj7HZSNxMSrJNY7fiGj2Y2Y1xWb",
  "key11": "3mnxCYtntvryVhHXfSJKy9p8uCQLiMg8hdbrgjjP1gFjDtDdv6VpPUb3fpZyGV7erGQm9kGzP26mbwEAwFYjwjmB",
  "key12": "4P5ptnuVrFRyeQxvmMvgiu94mnkWa3zDke9wdGZa8RQ2C4L52Q3druEMXYGJuD5u9iiwu2LcDfv3wRyaszpGxiKW",
  "key13": "5eMQHQ6NwAVx5dEZ5yfzy8NbUFELMR9KKgsjj33zXuD7eUNPnirrB5qadstbNt8twC8aCrQmx3ZMVUmFK3MzerpJ",
  "key14": "3t3vAaiaWj6s1XkpgQFw4gHXxM9G3e7FKzJMozRgLvB5cZ94ZR9hb1U88E9af5AZ3WbiUQU1HrCZ1HhGqAAoLy98",
  "key15": "2KKjc2K3EGVqr7TUkX322PGqxGKrWKAuFM6XzFSmXU4cMYuqV8Sddmg82Wy2U6QLCv5wcWndfD98D6Mgn71EVtDi",
  "key16": "631TFpoqsLBysMjEdRYWsDk1Nf4K9cHLEMrcnEhnjKGVdcbeqjm4F8ozseu9HjdwGWVQRfR2y4baRA44HbGGFswf",
  "key17": "4UwK25QyKB79grVnBDKgCMzJF3F7wzUx2zzFemC4xjiGArqnaTCGaUAK7bUCqWjm5QJ5J212jcmPB6jKaKrbQhsS",
  "key18": "2H3REPV6vtT5VJCh8PU8tbFcAUwBDEL68bKZZNU1vbRtomPGmnFkmNrvKJkMXX9Qd4TQ7aqvQAJdt852WbzAqXcT",
  "key19": "2xuuBKECfq9MEqDe8dbKYP8zTPbZQ1rjc1uvYDXhuPhuBZBxLSk1ar78C4J4t1aGPZ6u3Tn7WDupTWdB3XmXuMvo",
  "key20": "4eHxch2QRu2i2o3ey6SZsrcvWaLhewpvbqCdK5eyPBaQ9dM37X5eGehHbLYF1bce3EcsywL3V62TpgRaW9svWo5g",
  "key21": "3fkvo6xQuQ5XmNTUCw3Ye2vfx8biWFArhwUUCzh8j34yezoZRBgTavFDhwKettv2zsHij1yQ3rQGTakRUCu6tze6",
  "key22": "23jEq83CDHsZZogGN44umqGRX2Zoc1w2UBg1t3MsxrjrrjToJxwBPV4ixvFEJSq7EsWso9JDypkMvKz9KjMSMJwp",
  "key23": "4gH2b8T1hBRJsNMi1qqEeAyC1ca3zYsMj5zjxipUEK9XdkHuxkMAFQz4NfzFjxnqKDducgEjHwz8dBLoMT54wqSD",
  "key24": "ZkbT95h1vzCgemyeunqtT1XsXjJDcwgs7FFkXpCiEouN3HNC4tPYu2Vs7pUGWMUBweCQy4XbND13EjZLDXMmXVA",
  "key25": "3nW9kjfDbpJcCvTZcch3AWMnZ2y6FAkcSz23T5TZUZ62KMshMsc2Spm7yj6Ry3CqnYYXKD9LvHCuqEiXiQ2ARHGA"
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
