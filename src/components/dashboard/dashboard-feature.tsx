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
    "65KbZ3ef6d4mAm6PgrWBJetAQLUpGL8X5mTTzonpTFmB1gyV8erYfrDSg43ULrKPUZ6R91iLtiJLfs5VZ1pi9Lwp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3DBTikJHwvPCXAfbx1pfR4pNSAC43BfrW7V1rpP45Vqv8unq4zoj5mTn4mA9HWeMBT7XyZBzBdNcH4dFSryR2mjw",
  "key1": "355WGDN9LKpKjTKB14vnJGSy8rp6m9NwZi3cKkshnAKRgwhgDCQCtRcVXdPBdre9UvjHaArQ7aHoj5sDdQvDb4e6",
  "key2": "4TobqWHDmwnix5pMbawhxVKEUapocAXx4goW1BLcZSs6EQwp9cdVRHxDZ4f93cYHrbpWEcTmSyqLPGCZWpMQqCGq",
  "key3": "4SFJEF2DHHgDHaT5xw8RDkJhud4b8Tb8LiYZ1mj4PY6CHi88jrr7EjvBsGNMP7UJxC4Xx5WD9qqhNMCtDvke4kTB",
  "key4": "65wNiJAcDpfwCFitNZWCH42PTF86jc7eftqbkGV85RG37SrTa8sZsuraSVX81RtEiC6R9CSNtM69cBPLQuepzDFz",
  "key5": "5pENyJxbq1oiXBjceTD5z56ZCxSBWXxqHN7p5R7AKJqbQjZEP3S9fa6HPBa9FVtDGQrapyM3bkgx5iTDDaYPg1N",
  "key6": "2acNfJeyjqUHxUHxwYzhFnp1rpYxbkr4qiYpWov9GVXXmRpZpYgjcV6WNXpQRzg31AEcza3HC88u9BjaVF6tLXBr",
  "key7": "4hw4dTH9Qji72ixtdw2Rey6ZdVC8crURMAZVZYDZXDeLPRHUfAymXAhVjo1uzsyV9ZC6RpL5Y2fGqcEtBWLV6r5N",
  "key8": "5zHkmcwuU1GRMjZytC9qfwfr8cUnVPsuzvsmwipE1ZrZRN3HRuUTs4agK8qSj7SqjrWZouMP8WusRDeTEpowNKMe",
  "key9": "2bkHnVgeckaGf97PcNCFGCBHUo3UQmKNgq4vZvGvBtwRurWeA1fWdpgMAU1P1o4NztrkcMshd3b1yUN4U3kpYgNn",
  "key10": "5CxZuF3rd1TCbcnKY5MF93PiG6VKzsEn7ffsz2fXX4NJGZNqBDb9zXfZco2BVtmtqJNGuPkUCWLS97tdxQXr7A2C",
  "key11": "4ejJhbo7SdBjsw6JEnpEszGZVHVzqDbsgkUNYz4yRhkRzchUUKrAoDFwjQenk2ZgBPzUn2KakqAqYYmq5VkXdgGW",
  "key12": "2UsFzoLcBm1imtgbJqJhv1N18s1wddySZuZtbJpHJeGCvdAkAeroJsAhbC55txjF97UmsCNR8Me1f7GqqsyrENMR",
  "key13": "2DjQ6yUNtwFbHQ8U5zx5RSnVB6Seh1X28uZDfd6thJw8deWrArxHJaFhrw67n1wwRwSFocJLbnmUZEEJg81ScyXo",
  "key14": "4zXcCJvn9YDPyS24nCdKV2DU68xMBPAPcXBtgvzwnsF1xjkqPdxt8LMisLhHkCeY3WV7Xpb248FRWfkjraAPTMet",
  "key15": "RECMvuRTkpD72ssU3FjSKLs6NyYyGJDYjYeydrdE62HwNhGVPSkucCbCVDQopPeM8V2K58ZshaFK3qfzf9VEy4c",
  "key16": "21mpMmnH8s43pCt6merYfjVwJYRiiKgDGzGA5tFhpDJ5HWRG17MjkG2amRLicFcD3WaxCZEMCrKrP24owcxw5Z2p",
  "key17": "2yEej6QyybCSvU3sKcxjzDGy3MsUeomCQFGi5y5DZhREEmXkKWAXXxmtJqGR91D3QySrbyQ2yT4Btyps9U63hEqG",
  "key18": "3Rr9k1hAvAnJvMb2ZYQsAGUDXwD4jca4eYmXZZqLchWMsMtNLq5oRPqap7R1i6WmcDLdR4HAtSkX7tNViF3TAF1Z",
  "key19": "4HcAZu79r63tf381bzfUCTi187yXoFwHVbp5YxAF8AE861VjrfjJt4qMr2UZhm5msV1XTjF7fB4DownJbhpXSeS7",
  "key20": "3CgZE3zVvJ1s4v9JRsborQSGdiKL2ikPGXW71Pnhv7mqWuLMqmdAj2KkxSkz8XzrjVGhH2PE9JtQGfnjbREJ8z42",
  "key21": "51iRnsoabTPHyhb3njrG2CCz8rWEsPW4tp86Udyt7hNYU16R4ZMcTDHhKWQXup7xU8bvvG2HAa97xTWdfmHJvoVe",
  "key22": "3xZzdmWhGcYMH9wkUrrTguiW25omm1681YPz8PvDWoysYzaoyiR26omrP9HenNspC4LMFRvMUJ79tT4H8DgwwZRC",
  "key23": "2HFL9iadhhznzu1L1ndRCyGNseCnVc7rGRRedzNriS8k3LgBHQGSdeqKuGU64B6f3DWDms14H3wk8KkFoTjPLi8P",
  "key24": "42yWrJeE48D5vBfDJK7EwdmHgkV7Te8hfhiVUwgpReF5d2ihXWf3V3wnBXq5ctW4PDzkeufSQ8USwYSMSvWnGry5",
  "key25": "2Egqs8VMrXbZhiG4NKrDRpPy7AR8UN8Yje9uYpMyasfygsq8fYcqu3b9DWM6mEHmek53hEuryxyQGq422bdJtndX"
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
