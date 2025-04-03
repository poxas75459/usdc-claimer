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
    "679mJpXU4f7D85s5YMLwc73bfnyBdWbNkFjwkyaafDRVM8o4zdgd4364faQEtemgsezA9vowKEVuDWcnxZ9CqCMv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5DecwY4crQRUM5ND4nTjTtCB5bbuiWMf3sUGkQoShHbzDij5pRh81eWHzip66rBATDRKPueCYhbtuPe5fhMiqzX2",
  "key1": "2zm1ukNN999Pb621awq3Jzo2XNtfS7KQzBmwe9pcHwBiEDs4MtNSLiF5bkdaqJjGNRZ5uQbFqsXrqUqPDwyNQCRu",
  "key2": "52Ce1Fw3wWdi83HVPtx2Tnyd3bPog7we7iGzcCK3JTxwg9sZtxs4Jb1SVWHMZjUQgVA3panXKdWUkpZeoduKEAFu",
  "key3": "4EHnEbSj4FDHzFefPSfWGrEHtb4dV6odG551xBRzZzgFicf9KXBDb1krL65hGkWB6FnEqUjhEDfMAoPG1gEZcaEr",
  "key4": "3iSGgEU2cDvusKWvnqaMoE1am694Js6A6MDctm5aL1Y4KQjEE5xjUL7Z7RXwR1pkgyZkRQcRoLAfLwUsMPXFEFua",
  "key5": "2dwQLNsH56hgFR2fd3VQK5iM3Y4xfph2NSsW9DV6DvtDThrsRBzCgVbGw3XmPsHwMGTvUdgzu43vtFvqTsCsbAtv",
  "key6": "EJjBbX89LggHjX3DtCERBThDgiQjSD5Mhb2JjrVZxE7JBpWgA1aFcVZGXTPrADQrqcvDmTo9GsV11FhqR34muGr",
  "key7": "53rsgZP9h2j3mxSAhE41VLKrM7WFvBhkBukuBDFJCHHB97kQ8YwFSsqUCNm5678yjPGqTGtGooJCiPngd9wjrTTj",
  "key8": "51yqvBUgKGNPsWkzh4G1gtGkunBj5EVUSYd5ew25xKaJWNvRPK3wkr2WQZ4pwHxY768tXjxz1tSDRJXA1qJh7sGF",
  "key9": "3QMrGriykUeNBhxA1b2ETQX7QGvHHZS9Ufw55cPyR1UkdReCkHGj6FDiyRh3475tjcGMHccfQrPntmdtwQwhxsxy",
  "key10": "WNkiZjpSy5LM77CqAkCqjfeBzododEiBUbArT1w9yWEqudMCUJQDaUsRXi5YsN4NsrGQDkEwwsFFTBV8XZBJw2W",
  "key11": "EuycMMj4KW8UeNvGurXBQa5Gf79QMUKeQtBqsTKeEY5VhzXPv6BtTaMtT5opgf9dUmaXWp1PdBDZgNjkXEcNmAV",
  "key12": "3E554TYToaugDTNRj3f21Za2JdS45o8Zc6PJonVZxPZCiA2CxJjk9Tr4M1LB2bFAN9aPgGM4hhRmeNDaYR3D6tEB",
  "key13": "53tXWtduksEjye7FUoKz1wpeVVQSsY546oWiLZmBaLsrBf5EsCuE4G2xtDfztsZTruTJhfzeLVTCZ9QoB4adHUkx",
  "key14": "2MjpAHiJihw6LsMVkHJH4CZU1E1zGZedGKRsX3zpKz5mo3XNg4e7srDeebmjRD5F3BbAVr1St75Nt8MHwz2gYg1H",
  "key15": "HATnaovr83uh3ycyQ8tdeX6TRtnSeoncHXAAd36WuxibgMcecMMfHfsw1JTBjzVY3ZaPaw69iZVsFubFXhV1EtF",
  "key16": "2Rta24xUUKBM8PfJPHPPaM1zMgugvPy9zia4vAaPdegRqdytjHcDrsQcbcpHHVu89RuYJS5fqUEBE1JJKwpNbmxL",
  "key17": "3EkKPCRfe4VoNNJSbeSnN4o9D9DgkvjBF15JX8E8Z6MypVJ59iz6m44fqsDK1ar5xaZEw2R5W5kgNeiHRsSuLdW7",
  "key18": "25LKLdBjScXDuWAvKQM47ibzZq8zRqk4s4PpwK4JwTy7uq9xEUv3RozkQVp9pCfsmbXby7SrRgWEVafFgtSSTJnP",
  "key19": "4LBzGgZmSDQp9fdVobkctbqTG5ZoGAAVBijbmJ7n4uxpJTriQgrzSQqcMGcCcq7fQRQe6YhyijcYocV9kjKyB8Jr",
  "key20": "2M5bof7DaopQ7SVRdC3T34kezXoknJF97LFxnN9RJu9oeBMrYboAtwkTwakLa9VyeX1xQR7Qh5w573GzK4niyPPj",
  "key21": "3rc3A6Ru1qqgkUzRqjJJKQF9NW8VXqsZzhbicgt2GDXbnbKJWeaHHrqwoPQC3V4QUWrtfhNfsfsbMwLZQetbVGPB",
  "key22": "4MGX6sBzUTMbn8WZRkbZZw5fEd5wALEzizwJx7NzsvZqJLtJXcUDgUXAjLqfNDNTeUakNQhCxvCoce2B9DFjhMV2",
  "key23": "3y4ftfGMAzizkWqAEHEUqo9Dh3kQqgGsiNvSpgugU5nmJQpevGQa1SPNxFUkDnJSgjMfFqe6TWPPfZ2safmbmSmr",
  "key24": "KmJa5CZ2XRUAeixh16RQcSecHu8jRYaLshZGZdFK4xAKbvK2f4RUSRBfCFNBqHJBZamPgVitMNWEn4e6UREdVRg",
  "key25": "4dNu47AjQF3rQqtyjbsv9qfgM1ik2YK1StSSZ8fSzdzoSXsBDmQ4wQFSb8Zqm8sdWppVfxtAMSKxP9rfSg24pCQW",
  "key26": "x7YtQN3bTwWUdoLo3jhJpXxq7qJb1GK5yMo75gRKnGknZw3myWq42p6NvnzqGEGbQnoddp2WLHM358CmquNeFbR",
  "key27": "2AbVNxZ9qbv36kSGEFAqR7AwN5bcoEoBkrq78FBEt59KEfFYH6NdHF1J6CYYEDPVsqeUJePUeGmKsaidhpW1cs7H"
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
