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
    "4mh8Jh2XEvCPmUzwh4Vxm5fT748dypnKFBpBbyoYAtAxUMHQyPFGeC38BJqqryuWU2ABLyjXvZAya5zJcE6362rv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5X8n9BFybycppexHN6DRybJvLTviStyXtXc7UvmH3RH3pimJHGfjg7EqrkgfU2AG7gwXqwejiUaPwK3wRizy45jb",
  "key1": "3PKNH9jUdj3SiXy6n3G3WRJ4f5VuHZYYqtw96RVbE8AnTrXxaP7rKvq11j8eoev8R4UXMwx3nTpLzfkVzWXjbYw3",
  "key2": "2h3v4fCaEAck5T2vBEk3aXVShABySgnkJG3V2Yxf4ib9kZXrVHx1vbcztioM9vRCNVvdAVq4xczfF5ChAc7g2Hee",
  "key3": "5dUZmrQ1QuTMf2LePtYkVS2b1dDienRpUtuhvvTzaGNJCzfVxkKPwyjWU98eCRRx6Q9KWkYGdH3N7WjFnPDE14Bz",
  "key4": "4dTEkAJZW7n1weLvyC2tUotL7LN7zxacjzjT9gF3gMXgJkqq869LZs27yydi5YiG4ACasFidrvS28xGNtwNTfmnS",
  "key5": "64KVhDNqvLRbiwgkuPGAtUtJiGdzjAMEKp4DcaVrS334YFCqth3WKSJedA5ccQ145Hh1kjmNnXca94gJxR3EaWnv",
  "key6": "2WRsKHPwWfbDufac7z1v7BpzzBoobsNtwHX7JHAXEfKLzYdLc54U9P1obsoLr41Wwyprw1WihY2vRNN9UQf7UdxF",
  "key7": "2jETYWBGVwpd2gJYw5BVSGadk8jDkYprn46YSLPXapTmkGmZLmpSohiAd53nkWqfRMTtVYcYurD5qKCJrwuozYun",
  "key8": "5oyoAdiFAn4XB19JZR6JcJL1u7C8RQ3jBFTZ63a67T2jXwusRAinnAAVZN6GVSo9MeqGh6mFj2eo5eiCNLdbQNzF",
  "key9": "3MPJQquijFZAo91ZRxFDm2LbyecKoPVzNEjTzj1UQ3VRoNNQpssEUhZjUpvT1iTXVc6td5SDMeaE3jq6NLye6BKB",
  "key10": "28qMwhHMjQNUYcCnAy9bp6wZUoPRUeHuUgjs96LpoCE7LLSHE6wT7AgajXYpt1kR5RyRrgCe4Nue2CJqmdMRFP1t",
  "key11": "4J8dqsW9tUAFaVGnJnjesVPZ6CiawpGxVCxf4rcMXbCKFkR2115uwaKGRtb9jB9nUZTj43UYwg4vuXRoiyg7kpgD",
  "key12": "2yxgg7PxvTg9cHkKqMKkipXsH6MKauRbbxoFEvtwzFHCkYQsVakJJbgqBjpx2AkWHA4uoXy6VtbMuvDy3okiV4Kq",
  "key13": "2WC1qMCoUWRciWdnYx5HVoYfqUiQqegZ5tgJZDcFVEEEJU53sd6kf7JvaPwN4AP2URcWWkH9Q1ysP1psMcVfy1nf",
  "key14": "s4V3cKL24eYSjCDRqZhaJ2qvxjuLbBWaqVQEEBbkiVuGUYdzaziaDWQiW9mCnRXhiRDkdA4iWveEkvhxQub7Car",
  "key15": "219CD4zbhWChxGENbXXenc16ikbJb3SCXrURURwFuvSCs4DBgFkpJnsd5qzVTczmoG1wvhVLDC8hrKsH3pjykLef",
  "key16": "43YZD2sNdLgAduGbAYvkMg29Z9785AbTeTdp2zx7E3weerZ78cDYZgBb1PciKMD8z3b9AgYS6ioqMvAPtTcBSY5Y",
  "key17": "5G12MWbF7xbrjAzHBRC5s6JDk5VtYPPH3BEEGqrwdyo4wAKxQTDniXgDLykYcQzFuUNSpStVjN4eANV4fNKGx9cd",
  "key18": "C2gJB94SGJpXTaUmVvaYebm5vJBu44DE9pkriu6BjaVFuiCJqr3prdSr7teyTLdDnJzHVE25pq4ATmtqELbUr2S",
  "key19": "3UEQ2LyYkUYtu6UinqJfc8LvdcEWtDvcx6iekH3Sv3re9jp72HtDmGB8jJYkXK5EwKKHahDSBXuF7FjJ28LcUmay",
  "key20": "woPWk3cQ8ERVqxT1u3tmtLi6beTZahzo9L5sLE4c9EugRtAK8umFyz4ZmsE4CQX8XGayYGoce4Gd2RzWpPyx5aq",
  "key21": "67TpAatppJytin5x5yyMPRoa9EdVS6mhjqfLLhtg4FK39XsmL1y4sSvkKSBQ4Yxvs83aHC3Mi4J8fwiKd6nxwyur",
  "key22": "ycSv15Kdh7EtQdYs8KNkQeSrazMbnzytgTWHXsLi916tVPHMAuvermyJkXxXkDy1V5PQogH4s663cudMNoCfxtG",
  "key23": "5PdJP8znEqEVqNjq8RjkEHXxJAXUD8n3HvP3c8qkxmssrzNoBvomDCEt5gmiqZo8ioLJLDKtYcRsvjVAsPbhdkRs",
  "key24": "67NAFZkas96DEb85bx2e5X1gmy5CdAUWQKe8LxWucyCZQx8zQEYCk6ic9TVUywuRyGVWzJZFCpyn6M7hpT9r7aBA",
  "key25": "c47FNn9MWgf47E6gKfTSAnQ6Ck13UjwzkMuKLJjq3RmHykFSbDhbNNHXYc9Wca2CkojSSdvgDDDNcts2cLC4q1N",
  "key26": "LFLg2wh7PBrRMvUnB53MLZjRjMnZmWcyFuSCkU9fQQQ4SA4HZGQ5W3tPyBsyaz4zLxTJshhS1it93RFiN4mJBCf",
  "key27": "3qTrz4WYaCp57Z1Sh7CGNVdk3wBtz4Tjn2CzWQfQ1RECJZeWSxYpS36ib5hxJnMgNwSPsGWtwg2xk5CCmeiPcoqN",
  "key28": "hdJRncHu9iNdYYLqy318MMUsXU9pGeyqBTZgGeW142FNBV4b3kD8XHKVjwzxsfgQZpCSufRG2GAb71ta68w8Tct",
  "key29": "KwNLW8Pw7n1VThfjzPMwcMt6nSSK4EQP4euHYmr8quVgHzMn8DYERgbSuSUTVv5jUCRwnsBzwnisxm63xAdRsnP",
  "key30": "3z2r21gfkGeUnSEaTYtt8dLSrd4jUPPDvBUqGwzMve1Uav6hf1vGNUNPdEF6G23isbHhTrsSk1ZvejBcqn6aUL5e",
  "key31": "xjWRUcJZ1ByP55FSxsTpWKrBoPBEpgAv5V31eivHTkskB8egeqFc2r9mH6wuVBbtu2y7mzSpXYrdJcDEhsLwdQC",
  "key32": "4biMqWkQ61wW5BFsSxus1irgr9vwVct4Q9BCGGPZnUqLb7fdSPyaKy2xBiaJ3N7BC3hMs2BG8bdpWCohBdPzWaSZ",
  "key33": "3qHTzwVC25bbz7xi3KLr8HfrxKyqoeNhpbZepFQe3Dp78e4eyq5e68HTAKwZ7XkGJQrxw1iyUDVQFh66yGnWqLN7",
  "key34": "4wzGGW53Qa2Y7yEfRgZHMXfm8LJpbnCXY5zuCdifFHiWLEw4FyZjacfHRAQWpS6CBwMg3a18ExRsrRs3y6YVmupX",
  "key35": "2zT161d8Mo7V498eqhub5wKhNnpQoXLmyrG53CxfogLdRxWX8Cw8yxPCWiWkMoZbnE1mNAC4TU2pctWejPeJqie4",
  "key36": "4nt5BDEggLFwB6BBfCLjn9diza7WJ7kLnmw2h985ctZonjPJnpZmBCy6XdtPiDwg4QUK9nadkHdMZppQ5HFj3akN",
  "key37": "3EipzKecS8yFYBbxDgQtH1YABisgp9VzWKhJccH7zcGHVYZEY4xzVnjgYr5QEsY1oHJRXPCfDZU4Fdw6CndrrFz5",
  "key38": "G6kMUeXjSuvtBD5oaz8uMDHQE27N594RtZaZqrtFqcojieu6n5wEcDVLMJMwRVx8kfLvUXNbxrFuTPEwh64PXeP",
  "key39": "4jqRATQQhWf1anKGjdBAYXC2Jye2joJZR8nMg6jEgeMi55itziD3voZC2s4FgjBaEGb7RBfV6KDgyNKtGNkbjxS9",
  "key40": "4FcwthkRje9goKPdt5DMfk51JpKw3SMNLTZ7zbyVSDSJhdZ1jyRD5aFz39ENPo7vBuw5V6mPBRKZBjPdsb66ZjJd",
  "key41": "4LyLv2njx4d27PoTY4yC8worGHdiUNz8YB9SjrhVSL5NTLVpgPjhezJBZJK8FHrZDcmPr1tNKXKAp9acrm43ReSH",
  "key42": "2pqJSffupe4TffNzuoXMCcstMfvEB3CgpsK3gBUVb8SVEgEvG5QpffXVG1JqTZM6hddB5i1NCBbZ4xEYF7V2vFeJ",
  "key43": "5YbZdRg1n8gA2ZPU54AwnxnSVfL9CarUKPzx9BonWB1MS6mHuKHGsQ22BVcotwfrChaHXSmgnptL5ApsBtLZrt12",
  "key44": "3oAYUSZvdKCYYFeFYKv8AhWjZkJjHpmoZ8mdUfzRZzcStsnet525Q45GyawBKf3GW9G7umLvdB4nT4ASmdYCXANq"
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
