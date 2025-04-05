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
    "2aZdoN6m1nuVFjH7cJfw1BRAiNdovfnLFCd4JFaPzweakkAWzBKjayvbmKwi8NvVp6qUuA3YaFEPUG1mapjJjzsH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ihNWedjBD1g9yM1XUfjaRcLgJuL3w9JUcafBVAYdZvDB2URbwMvNcy25qgbucCDAJVjy1E8YNkAdZVif3DdXTGw",
  "key1": "4yTitvPwyGQ2fkvK2XqpF18SUUcXxRz8gDgmaxV7h999C4fig4GWUmwyf3kGNKeU1LqBAnJKuft8tF9jqPTijUDZ",
  "key2": "2RQvNyrPSXCBDfnBSfoK8SkrXWQoorL2Fbi1EkpMkaBbP8XjuxCZDpTH9agPP5Yuoj9vo2q2sV1GPjDiHgX6G8f4",
  "key3": "BJ4QcRRzk7qnsC75KUrEsbfCa97wDkAPHKYTuohaM8bFiaFX7qHyPEEx4jxbVxpmmA8JebcW1crDxF6ehyXG6u8",
  "key4": "42vQT3FJ4rca8qfja1oP4136HP6z9H5YuGyUrV86Zft8xQFPmmhwXhQdZaT5ZmYHeqLkBYtRJtjQVFFeBP4VRoE8",
  "key5": "4KRMSXwujgzf2stjBP79MJ4CNArDrXrECzTmg2NTX89x788bfs2vc257BBxjK8hQRnSm3QUTGuE3eoY2cHyRry2q",
  "key6": "2UiRmgzTvWSEFPEjLQXo95i9dAfDtVCKHWT37FVT1AqNey5aS1qaFeqpbNW3svCvkFHyFjWUhdRCCP14TjXLUuYR",
  "key7": "48Pfc8r59vxnk7QonErW1kugskv2VMx89Ci5XWd955V3vqbSCUzwF14gSBQW8tKJG8oAh6pKtzm52RDLBcft1GMb",
  "key8": "4SykGBiBeVhp3f1H9MHhvat68uHGEHoecTEzftvaa1KDFydeo4mPCrJ9i4DzBR2qgnH34bpnvBD5SW1unnpSqjht",
  "key9": "3nHgkFmmRPMS5PQ9Mh6g816n372zx28cTcUHUGNb9azYWuNWcjUih5pDbLmdsZ1A6cuXZ8cczvhDi5gqJe4KB5oD",
  "key10": "5JQJKyGyRPpYJB6ad3AWjR6ZpyV1dCzyPZ1U5ahapjETRdHLM7dVGuJ3SK2Cj1nW5fd6wYCoPD1quTceVTkrzp64",
  "key11": "2LX62Nvw8SRnEHRJYRRBNK8p2SiHgYFMfeXnsBeaVs5ZYeNEH4SPnDxjmVz8oB95i9hkfQWh4to4PdUsVFtgctUc",
  "key12": "2V6NRCkodgGuz7Ud6Az5WwhBhdydum65JJHpM3U44n8MSUWNzE3cyjTjA72ck3gdAkLxcJ64CMP6vSeqVABbfvU3",
  "key13": "5D31P71q3VvrLqZJCjBggHCZc2M9N92FSpx7VdHVK31DKrGB3baa1fS8wVvrUM2U75EzM72C6f3joWTzu8rufobF",
  "key14": "3z5KvT8thHNU1fD8zn1bmjs9dQwX1CHjvnmuFbXSt9B5tF6dyTqCQPmTkYxZVFMNjpt54cB6VucMEYZp69ekF2TQ",
  "key15": "5yVjUwJ4HKDto5BjXKJQ73bsuTAofTHK5WGAUR1miSL9B4dem6eT8rLjgJBp9n93fiqGnEtCNscz1dR6HhTv6VWG",
  "key16": "2UjsfdgZF62UhYHRNf2Trq3GrgEssRpn4eTHFRorV8LbWiZw2bk8CheEh2s4JeCNXknbhwbTrKq14dLgYeFfbT91",
  "key17": "5kmjtZmvZoBihHfzfJq1PTkSQ45zmPLKb7bpAUY1FzLQ5pGb62ckUJ9yZrX9PnNpER7m2L3nk6A6Hg5cvNFuuGK5",
  "key18": "2WA6M6zkGdgkMbqDSFFE8KQFaxMvJc9jHsH3MKQWrmtwuG5A9Ev9yXko4t7apJaKgMfvMDsadPr4K4k1juSTdrBK",
  "key19": "4jD6yMpnVYNhqv9FKGm1T9PFVatim5dqXgntsJwFiYtGk8tJmSh4WsWVDzRBNKFm6Hwezi78ibrRHXacQev2G5vt",
  "key20": "2TkTymsP47xvEaWDytnecNQ15qWKH2iv1uNs7viNFgAcoYR2cMepkZ3ACMqR9AdVbNwp3v6XKY6neNymsqXohSf4",
  "key21": "17WmrbNVMLz7eX7pvJ4UKRAXrrU1y2aHtoTCEkLvZPA2AWFty6VL4AyoySWaFaKjLVpussA2ssX6C94RYQEczAp",
  "key22": "35pe7HcouN8bVQbcUZ4xAehv11dwckr2wNdPjnYXVcMGfMLpN8YNQPd1Zbyk1FXZTbh6ub75YshXqNHKETJtG4aC",
  "key23": "4Qjj1cmZvifWdVsPACJ5inPeGxikQkdySvkGq3r1EGrRLCARRFF2dsUDkfWoJNfXBrugTkoQ39dwyHPm6kZMALT6",
  "key24": "41hZusuy2eG5XxPE4YxAidnisvf7efHzod8QCQv2ipPYqkXcumHAQvbhuPuyCkKHMbkur8qv9zXE2bRkoVQ866pu",
  "key25": "4tXL2V1M4ZffHixCMmZ6fHJrsWNgNPueYkxJJweNn1cPeZEHtfKdaDu7469KxgTjQw2Wy6kYANmdDNJdM8AXHsQY"
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
