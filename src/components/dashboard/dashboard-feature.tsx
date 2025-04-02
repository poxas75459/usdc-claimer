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
    "66rA5gMA1Kvw8Hbq1QsxjbaS5YRJweCSh2KayXpzYALA77KDihrMPhW3JQpZ9FCQpcbhctwEN6grXg9dERvLjyQk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5qh6w5H4ucVsCGhZCFnqddWGPEyXw78sB2pfqNhSCFTbFGAGDdNKr4d4MaiLji4jeN7vQ3Q8fhh1AvSsFaVo4Utn",
  "key1": "3QudQzhp4nyui9eSRowKTvEqvzq2FP3KTtB7Ag2j7fWBD7JGKXY5drna58KtbdugyH8Lr79ad6RaEmC5dSqkPFC",
  "key2": "5kphEN8RekH5B3UoPZQUbzLSubroesEy2ZSRLZLGThaiUozFVdDXHczAnQrKzhaeyr7ZrzBfR6iF8zzAbNycT3m4",
  "key3": "2Bcb9oAujs9D81Vv1oR9G4UW1zTqkfVo9pCctodDX6755pQwLG3CsnARn9nkXRpi7eaWxwkXW46X1f1ucSjRPp6j",
  "key4": "3Gc9gmmjkRxZoYC6CL9LSi3gBeK9H8fYkukD1EdtNqPMBpRbrQ6tjLK45km48E9KLQ5kn1R3hz4qnfYsFTnNz42y",
  "key5": "3suqyLRPurmFUBg9sdNK7S9zWnA4bEGpbutuL5EXXwxmCrkznpfcUYdxnbf4DJh4UuyuinySGRV749eDzx9i7c9D",
  "key6": "23Rgzg6DUwSbXfto1tbKPKDS3NxzUuPZQ3GRK1iyGC7ueZg1UQui72qn8eMdD6pJ1ENTJCq4oxfo3FXDpLwVvhYB",
  "key7": "5gPTkBCn6jGJeBmt8TUSkMciTr1KVRKiHH4Xwji7v8TapodX1aH7Dz1JcuxySEmZb7dPUb4bzp2eurSBxDMRYg7Q",
  "key8": "4FNeoUswwL5o9gXNziqpzN1HGuLbTmxHyBuLAfsVvLwxRhuLhkfpLEyiJRNqBEf2RNyL88eW2ZGCYf8sqRpf6fHR",
  "key9": "5jG3GqBY499U8dZbeKJx216dGiBtsa2JCg64CiZgh9MRhj6r3X4HCp2SMiTzckqPob87BfJPSMksZfHid94Epi2C",
  "key10": "54C2kk97cxzpTuTzr9n54HyeDUA6MYEgN6jiT7ZyePyBD235UW2keheGKK16fVvSqmttXtnH9GFrM38zrvWPYwDn",
  "key11": "3RAR8EDo55kN3omE4YXVKiiWtazgDyND8wMP2hxXe967KrPzkzu63GoXVLueFFqL96eo1tmjhUjkh8Aq43Yxcv4j",
  "key12": "5EiRXrzk87m1X7fxvYmnANbRULtKYD5j5FWhUkCeCfqV6rt1fbSPHCj3iLGU618vg88xHTh7T7STCxKns9NFaijX",
  "key13": "4KmvSBsYcpwqYt3VcKXuxzg1SNWQ3MiwmB8BU7HCdCQNaZJwiB3QPx1GP5hkXsSN2hZNC5HoY3ChFJEs6dAt6y2k",
  "key14": "27qTzBDbkQiJeLKpGokZ8SUDfCmDfoBzbcnd8cbfzE7UxKA2psxaPSCrCw4HztnrtBJ2kNHaGi2zdHhPEdhS6KKU",
  "key15": "2nVZSJab5Zq7JSJyRYeEpxM3KnFhPR8Y9RZ2x6z72fCaudGt1QqWk4Xfb9HxfbfyxqdfkomahTVEMLPaNU2G1deh",
  "key16": "WPwjYD6sSfsxzg3K69oTSa58YZ96yE2iWa5zV4URkR8RgwWvqxWu69hCfQNTp7MBTbgQT3VwngYfzqsogrjWvJ2",
  "key17": "2r8UuVAfE3vDKka4R3rXZgpxj1k5bBFsNwmkSaVNqUSNBdd6LBZhSnJE1jnnhdXTQCZabjAnrd8gdSk2BCK4t8j1",
  "key18": "3CQG7jvNFn2QuCer5ajW5iS8oVfyUJ4jvPxHkdijPS8UHWwhRpt7snSoDBhr45JditxrxUh2VCHzkGUdyK7yekZu",
  "key19": "5Vxc2cNgyUg71JxACLzFP3ELQrmztpuyqPqBSFJAV1YRpukRJNBUPJPGjoYqjFLPd6xg92KPc48bDvnHSsEHd5V5",
  "key20": "3Gm9R8gQCKHC4UpQxD9w8VG3LyhkJ8zRSiUruxGDh5TvJZDE7aSroExJivTUUse374HXMbzFfDpnqsqo3b1Vnnw9",
  "key21": "3RsNcrLKgGxpBoLJzPUHSTBPn4eMzm9qDdUUyS3hAt879wHxr4FYcstD16MPVZfb6YfY3Yz1Tt6tEwapE36EWk67",
  "key22": "5tpUf9BYXMSTFEfBoZ9tLQPUum8MTLpjCYJgL855dxVYvxppLLXtKpJBGTQvJoeVZPNaZg5XZmfnutiS8TTp4tsz",
  "key23": "hyVjs7tEhiXhiRoSifY8knziAcea9XyVYP3BqcVE6aULxskiRMPsFRwgztwj1E7NWKtZMbrZsMnaLPHxHsPUYgJ",
  "key24": "2WL5dqtzNeAJYFJxCgtxJYLdWNMhmj26iGgarbCkC8Y5ZPDVgFB1kpcauhJK79i7mXSfZMoZMrDgHB3vG2uXToMr",
  "key25": "3fmjEQch6ng2xeGvvq5Bq4Uce6VHRzhm3YK2JFoA1MrJineGotLSWZVJMHfVro1HboCRZZrX2UDKJXLsGZVGeobs",
  "key26": "5yiTw9iDcikx8HiECUAsgsun9iYUb6eNM62RDcn76xyw6Z8iuiA36g9JRM5bhdTRPdsGE2pbucyTLBPv7fgqwcdB",
  "key27": "iPtq8BMRpBvHHfjrEh5gbgGVZXUuboWFTcq7hBWqjWHKmhbmvqyenuTrwCmcu8csd7x7ejswqZE4GvecSkUoa8X",
  "key28": "623AUdL3wafkqoQL872h1WUQTNcUVL13X97h5CBMpTZjiQJK5hVXj2YYdG1HrbKPaQVQhL3r1MNww32sVWvqfrQp",
  "key29": "UpDda32az3VKKB3shPR5JRnVvTev6edvirScjcCVTEgrqJzziBgRc9MxXDuuDqs2DT6myvWg5GkD3iXxu3ge7jb",
  "key30": "5iDs1hc82ovjUhRJ8YKpuaL51dL8knAsrrYkVVjshKKqqEnpKSbUgk71jobyeHQTH3WfwXPQgYb7mbUE8DNRHT9U",
  "key31": "5pAYdpRH3oorw2iJw4VoZM1BQk4bXpZUTVg4ENfJh2SscveurMhSNrzN8cN2Kqtd2WtaQjTK97teqzUi6qumaULf",
  "key32": "5XKet3K9z1ikJ6LANtPjjeaaSsowZuSdCJ8re56y3hb9gMvPMjL4mPSE4JjdSQuWbgmUCk2p567hyWmNEkFu93eT",
  "key33": "44VhZ2TtfkWfosTdtzA1eTTXifwtW4bFyd2YjUMhUUHQivzXnSS5xTZ1w96J52zj25Equv4TfLFDBHKL7b9DYDPK"
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
