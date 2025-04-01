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
    "3WsaVqSK251zv3U7jvJs46XncHqyZ8uGyXuF2hnAy3Z4FJGmaWs2AKsiGHJtfrZ4RTPfL2yjUspBmV4UuwyXZKx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "zwT2PhCBDeP4y3gV6VLZVoYdYXjs2RQNUYTdWBYd6aTFppSdHqi5TDMbZznBeXkCH6vRyiSRYWqbCmVQuG1e8iX",
  "key1": "4aZQ2GqUBNG5RSH8VAaBHUzFsYcEzuxPC6g82btkhdJ181gRfM7m6LwSrASEYx8FCzBibfR2B8QRp9SdV2T34QtF",
  "key2": "3b3ejD9NuGeJdGQfaDbUYjDSogRJtjnxnLWBSvaUdwApGRgrhRh8ZZ63E3z5Wv9GpKpdHXWbr4UhZSB4EsnXJwDS",
  "key3": "32TEGP6TQx2cBTKqmcRje9eaVhVUBCSF2EZasdrhgE2sscxwVUWjdQURsQQN93b8mk2WmSaLUtFNjB2n9AZtxdhd",
  "key4": "VBp4cx4y5vndtszPNVkAKMQ5Ay9HTPRWfHEUHJyPWSjEHZ9HAHBST7CkYz2sGNG3gEDiRv3Pk24191RioYsAKCC",
  "key5": "2keJKEbFssE9sX7CFExYyjvAHYmdy7BNSiwGBpYeihRMeL9824P24ky93RZ85KBocscZYZZDmvGj1qbY593CcQYb",
  "key6": "5PXuQrftnJA8x3m4p6Uiqs9EmBJtoRqfDGR92NaMxWHaSFSt96Xhe3VAxRbMBUQcSNooKChpmLQL3TST2pgaSRNt",
  "key7": "cSV9tNgu5ho7C1oDd47edkuXVn6wUsRqaMF8SorKv7EJNQTzXoztshyn3ev8AR7eUgkD828ZBUhutqT7u71opNz",
  "key8": "51u82Ky7TB1HNUsaELsTZHs9k8njQgmCc7dnFBivs7ic8xesDY3ydcRPa8o7aT2vwvnSZpUfCtRmsazRmaSLPnE4",
  "key9": "5xGMUvVwSKdikyU5fyfwqb5gLv16bUGkH9o6wnYXi65DdKStmNPMGxW6qXYMmjtr2jcUYefrnw5vsoohBhLykEJ",
  "key10": "27T1WgnRSgcLgwahXfMzp85GYuiRSvvExVfQmKfAkUikXECXDq7FbmAUuppXGQKf4c6RBFD6NmPXCsVcorLdopwk",
  "key11": "2tyKTnoszgTAt2RbFeN9LLYSvQxrZ5iypnoYX7k4U9RXYpnqeY3KacuTVsMgxus3C1WtQzZ6N6rPFhkJAgVdUs3E",
  "key12": "4ZbQWX3NqTNrpnZjdba4ue4Dk4K4scMwdWUkFyJZzB92yNozRGowSyfkmsxpS9rcUk9iJJq1YFhNYMszd9X3f12t",
  "key13": "5qbUViKbE8cC69FqDgJCjNVmDThfpgRT2odUGTH7rSHkp9rVQ3cYZmAE8G94GHy7BhLxpesCNsxSeJ687ZDVetTP",
  "key14": "2SmZtXnkF8pKgJVFq2NUt38Hy4W4bwZbitnFCvu6fGdAZbvbHWV2rJCNDzEae5MKC7aubbXQrT8Y8hTXnjRmaanD",
  "key15": "2oTQP7AQux8CYtSCdb37ExpdZ5far7TyCFR37DcFi5RKmnDevPqaLWXG33R8HeX7D7HVRkVVxfxpFEHR3r3Xu1Ss",
  "key16": "3S43p3da73MQoCnN4zmFf69P3prMA66RTTfkXyY341hoqR5V62yuk1b96uZzFEpW2ztAcpxpi7LDub4r8hx3yb9M",
  "key17": "38pK3ZpyT7ZNKHLamaCNkn1JXHqytZ8GAr8hVwenrdK5HoVVoRdPYH9YhU4RpjsAkRqGECcSDQQJVi7Pz5PeV3pF",
  "key18": "4NDUNSastkcttLT26Wu4VCHa1TzxkD4QycG2NtZ7TMA3r4EWd8JaJEBeGQF5QDA5TYqUVgYFknrJ786vSuGurN7V",
  "key19": "3TSnP3R3jhHR9LQDeuystaAA78R9yUhzG8pdpqcs8CH5t3yN1Z6KidC3jj7pHes5Ghpu3dK234AcbNsdnT7ufaSC",
  "key20": "hdwMvjmFP852miyszyH2YT5LPxNHyXDiR3wynaUPR6mPTuxL51nHNtsjLXQD6cawXHARwe8YvspeebLDjCKCe2y",
  "key21": "3vSRCLsmyA7EonRpanbvgSZGVaukVE4jyuBqQbCY4dDkSUFK3H14bgXqrALaApKs74jtcSRBjm2ek9Zeiq2HPWao",
  "key22": "3NC5ej44WxypCJ63MryUx6m4XKMRPracaCTuoyrxYP95YJtQxn2VyYyEVEDJ3Lf46vihgw37gmEmUUptKSjME1oB",
  "key23": "4PeC56mv6opBMV7QTvc55cbuHvd5eauBW6iRnPFQW18SkuaHPaCRFF8J619JVNaQh4jNPzKsaAaFJ3sP72PYPVqd",
  "key24": "4qf7zcmPUthoSGzUU79aKPMUCxnQBFqPqG5uDqGfzxcKmBWXpGq7syeJzaZzGPUJEZ3MWLNYkrcTD5tpSr5dpJEi",
  "key25": "5J7DUanHoccyMDjGo39i83L1f3ScdobLWsxA4CkD1epNfDVPJkRX93TUSCBe9Vw256rwTXtx4w6NPYcXYMbNMzZ2",
  "key26": "MzzB6S8ehw7nELPNJ9VxNQLfnfHm7p3dG1Rtn5ufCqJEw2sqHUeqBwe81k75D2sYdhzSYvw7hSJEESfCc2PnRmZ",
  "key27": "2Xoz1hRgVTRp95T4owiCTLTbrFgLVdWPDMAQHJWRrCt1qm8GLGxxUJY1zaujjE7Cc6agWsPfFPYkGP8eYvagpTAk",
  "key28": "5b3QF9BZdGhwBxqTmg5fngYCZymnPgeVaFp24WnLzhTtdF61Adw47KewBFP58Bv4jfxk3wdjjdHzoXypNnFA1hV",
  "key29": "2zAXv4xbVDDQHjBPaRgTvUbhGDMa1PCPt8iEPzDfZ6VJBqWfudeikYTQTDU3JnSzKmdVx1Lj1Qxo57aAyaox51HA",
  "key30": "5v1sdd2tQLSseMZHnisWSPEQxEPS9aeFYEPzSqVYhuUK5rZLiyzJyrYT55wePuGGJ3K8cPDJmip4ebrYW51mjNVJ",
  "key31": "2s1FmKcQZjC7nBHZATJbQFs2cL4qk9XPHDyb1Y1XAKHgHY8yhaxpJmRtpXRcdowSVBgofLwFpoRUSTAkRhjBykQ7",
  "key32": "dy6Q8tk55h7aSHfckxRmWHJyjwTAgxYzpw9xsPUuWYoW1xRP5UVCQ1xdUAvHB1QNcYMb1LnJxqTUhbzdqxdKyT2",
  "key33": "5eeXhH2eupCRZHqRvSZh42kR7475WpnBamcdiwNRB5U84UZ1YUWQ8t3xunZH9hygL8zkdSzyZkefCb3rYDbbiEzE"
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
