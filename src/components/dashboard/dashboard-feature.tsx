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
    "4P3FN6ZcknUTH977owvWJWazXXU4ZSXAhTXvc98ooTkRRmqQPkvYj9TaNVPkqdcSo8mpW5kgyMBoDH2N728Au3np"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5BPiAseaoKY2idsNwgP1KtqFStQLgrJcJkCtANPJZXCdzcEShY3xdETvt4s5uBn8R2DHTud5tG4i6Xgv8nCAyaad",
  "key1": "3jDFFu2zN9vw5p6HGRaVaEh1m4RE6TZfwyQGi74RWmDBpDBqGZkcd2pCMQEVP2shN3bcVvdKAumQ3cdgZovWSCQq",
  "key2": "58dFoqfkVvghoakBj3KWJ6dkpiPUL41m5oq6ibSdoPFJBJDNJextztCRsBEiz8quswwvbDSjP8tH77nbvDXra3JF",
  "key3": "2znzjt6rGyjPih9C7z7QohwEY4R3seweFi1DB5zyWhcxfyjJcfYtNBu8YacsUrpkqs2kYevww9SnX8pnxFbrunwh",
  "key4": "4jtZ8cum9TDLr5w35YVbvPhh7Yq7dgzwkgLJwfaagN18ZupHdEPayTqThnvg2scFLMjXL1SgXqiR1xofxgkxFkUZ",
  "key5": "jFopTu3SfvCK3qbcvi81iFs368FeH328Ufqg9nXFjPLsrdRtqWjPVRyKYUwyWpyvekTtAcSRwQxw6onJr94gNWn",
  "key6": "KptjC7PLz2s95ehwSnMPCRbHdv8k5SDeGVgmE4ZukaZgEysXKj1W59n1wuRML9PgJ6z3TrnDtTGiZJJzyBe2bcX",
  "key7": "35ygZ3gMoFjqMwSYsLF3JMvbsRFQF6RtcW75f4dFP9TmGBrg1zADbypPNyDhGFYFJhzTRdJZEcHE47hi7e1nP4Eg",
  "key8": "UfYsDFxGMnh21VAoMFjjcczsRMxPKPjgR8JZoQtiECtMWABTkBfjUsUDAKivR9o3hsW9A76xFmPWMvLUVxaa996",
  "key9": "kYYgYsxZpJnQQha9gnYLmbJeFyRFHW49Zk9hqkZtQQc6DeWdeYXGPNawhxLp81N4SAonSuTxUjzDhuiuHgBrJp8",
  "key10": "NcnoExNbGUNSfVDVQEqQZM9xhy5wSTLkqoK564ffFnTP3c2pYgpZkPLXFSkNBV9Tp3xuaCSzLi9i6TvVPUBEHmw",
  "key11": "S7NWY69J6HonvasRh8H9VRfjbRbkS2WKmfXqxvjTxPaJJpEGWx4DnBGv5a8fgEe132ufbB613ewyiJQ6ecMkgJk",
  "key12": "33etyENBce5gA68oKUhghDSXk3NYKuLw3fgdi75zicjmxMPrPvzmoE4sMMHfCMbDZnphRZNPebLGXBmbpEes9UMM",
  "key13": "5byEUgE2SNLgtDmpRiyCMAutQTfzzbJeHX3sJsvNE242q6jqTL67GNTpNLg6gxKmYdrwiBZDzL43JUV9Mtu89ZGF",
  "key14": "5jUJudapsvqGaCnYenM4965FYoVfeBKZD9FAGPwpF1FHhrqRccfuT8dga11dUdMUBW9sRDMuATw8C2uck9gNPQ6p",
  "key15": "2JwMg3khikynogu2ZxucrZL725RDLXAjHRgUVAd9dnuMNm6CxqEb6G6mdKHGnJcnw7kjWVnLdfvVwZYbuHAcH2FE",
  "key16": "2v2veRmDWx2bvrnSHW3XWbPR7q8sPQy8n9NVKnR7sDi6ycygD3omtve9F8ryEDXzU5zPaKUZFreKbgpG4PKMvqe4",
  "key17": "2shL2mDiKTNCxqAauimmmjv8Sta4TVUcueuy28ToQF69sRya37jRTp5WGk7764JBKpNGyqKuxMKMnyiiNbcSjmSZ",
  "key18": "DvDXBE8qRwJ9P9XxkNhtJJGM3yH71NgU2o2Wiffv4DXu4T2PToia31RGWGMsNCK9X32AquAkhmnJCJufmd61nFv",
  "key19": "2YAzBwS2uhGZuibobhxH898VWRwCNjaJCF6m3dAzTmzEpioChdt4azoBCwXeR7GrMRSUHkTy8TR1wKQQTqLtnxGq",
  "key20": "6GM6GhdmK2u1oWntJJwJ8YQhTMXLuYFpFcoHbsJaVJBFCHmvsg5E2YFAvUJNzJGLciX33hepCWFB6N77faR21sy",
  "key21": "4pdvrbWJnPuDx9Dbauq7Tr7Ki7rdFkd4Rf27x4SatRAgon2ddZBT1dpooc49CAENBfVhd1RoY4cnvxpxL4SXbmML",
  "key22": "Tx2poA3o76adJu2vR8Nbu7axUohdtQSb5cZGnaLwYwCz5Sa4aUpZiuCbTAU9WqNrNx4GcQMSjvTGT9YDfYFUsXM",
  "key23": "2S1ADsAd8TR4ZzPJDNszVGoHGk1WX2mUUyvVbMgfnXW4c4bGBDhoYW2u4p6CmpSzMccBqUNp9HKW7t4duu7xBwvT",
  "key24": "3XKyYkFtS2tqarVY46iRoteyFFN57ofnFAkfaCUV2PwsUqk91sw9fVbroacLTsAa17SbRXZPvtyM7oBTYRUNY8rN",
  "key25": "49aCNdU2XRsqnE6uLPL1owzP5z2anvRhaAQMQx3nVhUGWw4B7byuLhibzfGPA3FkEGvRH7nt3imtmmXiqKyZp78v",
  "key26": "5dV38UTg9bLN1DeZjGHT45hcPN5Ckx7Xo85zANN3wHhqZqXaLACee54FmiK96CVkzLXUWs8pBfvmR63FHZDxx9de"
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
