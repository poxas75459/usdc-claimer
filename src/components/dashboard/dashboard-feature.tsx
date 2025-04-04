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
    "5T5cmkn3D8FtC2iRJbtxMa6LiCuAqhpnQvjUxUSkAphUDpzT1zdnBSksbn76492SSeeuZQFGrGCfdXdNctCBAkvN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "51yHC3qpw5ipuYp4PZ8934JjLp4ypKTs5QLmoj1xmfdv6UUBNQvbWY6kQja3ZRK3rZ2rkLvoBRjK9DkhaeT4FSRm",
  "key1": "4TmpQAdUPSmMjR7BknVkFi5cVcGjEnAWDjSCrpga8z1JQWpwGTgs9fKW4us3k9GNJcZ32umfpfv1Bquaio3ZbtDx",
  "key2": "5mTnwzUUKTH6vAw41M7A9BHiqQ7dgB35BdH3m1YKi9ACAgy3Z3rYiV5jx5336n5KFg2NQN5q4KQNiTkWKbSG8FRs",
  "key3": "2DLzdfnHUZXv8YT7M48gwgNwbpP8BXTvQsyGv877Ki4TMxMSrpYQZjv6Q7azTujXPCvDpdw8zqtdqFPuRewtcBxi",
  "key4": "46j2diHX3JZMPGhsf6kbzLKYMgSCcKVBoYRoU54Ehej8EpTBhkionkzvmkwFxnhs4ZoQxm2gpbG1wYYjTcjMF8sz",
  "key5": "51xMhCjpgBucxAeozvkVfAB43Vgvea27ketA888vdNEe6F3AFs8rFyV16cT945EBZj8gkANQJBjRmDXySRaVAy9J",
  "key6": "3L84NvH2xGaraEMb4Vsfmtt8XV5ociZfTWvD6BZMHBS2RskYxtmqsHkfQrQT7DYXeSwbELWc8a1prRRxe2FHtgqc",
  "key7": "3ymoNCw9CwSuu8gZQyZNGMRjZ7RBgLCgscwacCJymGvaB3W1zMHnqYYVHob5i97GjXk2GDeM4VAEQSUhc7ixSBX",
  "key8": "uYYX3hsNokR4bKwAYjDmih62nXXzF6fYjimoF49oyVKDW7sy3y1FDXv2W7NppJo6aH6CF32dL2d8mbjYbeGGdDP",
  "key9": "3aeFK4teKNJTtthMxqbmdZvLjeoLRWY9rABCDNmc3EkmKkcru6p9SBAPxWuAABRF8sGBrDVq8P9X9pdYcw9LcyJ5",
  "key10": "2qLQcCcLHwdZpR4oDecy8QmutGv7jHn43fpPdjEuAC8F5tGZ5ZZURXYGu7X229QgtzxKUWF1Lcote5ryYfTFkPT5",
  "key11": "ckApeWqAjbTiC9xTiFJwx57YzS1oQDhNMUYyMw2Yn5aLgTpfCXnk9Ehm28JTqTtxBj8fZ1vtZzbHEg9T2MRoT94",
  "key12": "5g4wEVd1tZUDprmGQpdqaXXCaTGRX7nzobyFnKND6BWn43rfYZETHW565hzzyxi3Cjb4KdZsVvxEjHcbeMZrTHd2",
  "key13": "QfGS8Zm5q5TRi5rTb24kT7RpyQLRukDiVpHmtZTDuKfDtHthqKo9JdaBLy73sjrxS2AZUtgzMhzQsXUa7LC4XMf",
  "key14": "2tBf9Q2YDTJU3dP442dfjkCmVcwLTJg4qxCuUMjqTgMh1pF6jhBRfzFHNHDup6VMdeEgb4fafeRm5oLnerVsuqAu",
  "key15": "2dahvgtijPy8McMASCxQQoZZ2JuWjnhHe1ZV91FByPHCZAsFNNXkEiSzhVgomqyMU6muVCRasCXvZczoZZpPkQZX",
  "key16": "4g72hMA7pGH43bSn4R22cY8KkaHqAT1zg9UMWxd3s4Hc3gmgrKf6kE9FYvK9k1gWMYhcFG7FBrW84YQVssvJGyfG",
  "key17": "2neMYteZVE2CvExWH3gHLDcrg5MZMYqLgbPtigak84kKmfRgc51GKU9fotuvV9UZty5bqpeicCRz6ZBCfrFdSMN2",
  "key18": "3cxs37339ApAeftnvFFmxi17yWmNiGC27WLRv5LBDy2ydadk62D44HJuwMxUNWysjRU7vogr7Fp4h7ESXwDnBeWP",
  "key19": "3TdTaArRMuGxc3R9ruBp5EtQXF4UzqGbek7R59oQbWuV1vdCqobLWXkTgFSurorzDRpnM74VefipDBaSTCh5o8rr",
  "key20": "4EKDBAHadyv1Faz26fqmUpfmTRnGeJ8VeqewALPdEJ14VrvqdizNfHeTybJruzfmTQQJbPUvADuBjc9Qc2LgTEAA",
  "key21": "5umWQZQxLqPoHn3PbAqfWCzwSmVUaUV1dQ17c88esoYz6GMyDpGJtXpvfLvEmX5r4UDkirEyFPHbmQNTmMwJHAQN",
  "key22": "664dZHwfi3aQnw6bc2xcYmbvNzZRvygrJTo8BmFgd4hedSLHx4wfcZPScxUWa8jEFgQkgo2wZjSnqGH97An38cHM",
  "key23": "3i5kQvA7mkdwx1XWP6E5euUwx6ryNACEFTVZ6vepnCgEjTi7FSkAHomURFuRJGjRPHwNEzYQeJabZiKCpCmqYPz9",
  "key24": "DBHHyWr7HBZFkmhdmXNHxrFPRTRz3Y7JvXKnLrzu1MZCQCJxkvBYtvwKpEQ6GoerLnjnaVWWJdWmWqUNtVVATWu",
  "key25": "4LjCZn47EnnQPELohgTDMASruFnRFLLoZK6ZKV6dCX3LWh59iLGcFx7W8jp597PaZpUMRcGLNjPuHGymiz669pQp",
  "key26": "3sS714F2UJaaVUFcCErRAh4wd5JB2SZmr6tSX28bs2xo9FWkD8zATUKBdgi3AmxLrs14X43399gzbGWT74b7uosv",
  "key27": "AbvhPbhMMsZbvZxHK92XRBjHqLmJbMHkkBt5gNkvaweVBNYrAPHPey8kgHBKG9KAnth8t5J6gminod8XsZG6YUT",
  "key28": "2RoKZjz5dmzfMxmwx59TVhK5qqhnYrMA3hEDQ7J1ayayD28p58csmBfKKeyj7B9KjDGJNcXmVnthmLUFQHMf2nvi",
  "key29": "5Ri4AKSktDTsYbs87H1EzBuygHWutRG43u7SgDSrL1m36KfkhNhUaeAdtpNoXXwojDkNGvyBxgyqgJbU8F41S6Hb",
  "key30": "VFcZycfQmVeBXFc3UQFtZvdErsAnSEgqaCFAnq7P2jrUCrBA9Hfh4f6RuHLEhdBNNHCyjrvycmR9CrkzgKqN1Rm",
  "key31": "3T7q9JYKXP1HH6wG8KqCmx4Y8ZmC65GDQBCdQ9cY8wPboxNjnxhbctTS7Kas43cMGKgYR7QAZiK7UrKJPHnXngfR",
  "key32": "5EYVSra7q2GwqJz4aENUKpyZpA2x6iDbYyB1Xic9ndz3PfF3qAyXYk7wQyUV4XHc8mxhKhxA1f1chsQnvv5TtFAe",
  "key33": "5LkrhnfXoKpL1Q3pjAPzn3MZ8rUvf2ynaNMjV3uFnjST8EKm7EeVDQ6UEEA37v2BjqJB4PW1Lo7nPmDrZXaMwr8T",
  "key34": "3kDjQeNKBas1LPv6MSomvwQ8PuxXZnnr97Re6mdn3CQDTMhJQZQeTJ7LV1F8xHxujETEk8nYVEcG7bTB8kaPCeNx",
  "key35": "5Gh9a5MUFXr2rBm5FuspuGTQMYw9uz7mu9ZpZoAkg7acpg7ypq7rhdkZCoy8oyxF6CMc2162W44wFTHTdoJ3wqgg",
  "key36": "2poxhJkwZuX9Ud997H3HdSTiiuXHkJH3SiDtmsebifRtqCt6BM8P1U25NWiQcSntwx4eqZDVgF8paDREY9nL37Rs",
  "key37": "4a5buJ732NUyAGVwVtKdt2mZ2iSAGmVpVvKeSoDf4UEH7JqgumAnUGsNPDofbMG3RXfDnv4D4SDdjB5qGjThR4ay",
  "key38": "5rQGXkBMGeSVYRQr1nXQUeDiUtUXxGzM6p1xUguo4ou2LxSiMMjB2dktDUTwqFdz4sHXJseEQDtiJ9yT9p5eqRSD",
  "key39": "5aC3E2wT4pPtBJ9Hhh2ZjJXcxfcZaLpnmm3qh6RQxi92AByWP8JEQvWR24F5koN1b9ERn1Es42Fi25dT4k9sjqSY",
  "key40": "5zD2KduXaP2mGAmSMerPKtP2AfWRMaB7yqgu8kheZjWrLCNcFvqCWXtvJ1xoA58Guq9BoDuwxtuNESoPPswu9ubg",
  "key41": "c6dmqmRpgnhb69p2w3cCGixmRS8Bnx2y1TYFQ3kWJtjtFEENymSm41hZ9VMDgGsAXruDJMKfUnT2eKRQSdtugZ2",
  "key42": "2NFEp2oKyBcDEaUxGaGstFT3LUXewoxdwy1Qt3AykXrLSqG5fATxMRmMcrrr7r2kxqSJFzU3o13wRL4L2yQiFdDk"
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
