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
    "bnoo9PKP8w2b2hzD9mRcy7gHwUgQ4hm52kjokMBFWmq9oyhYdNw7hEkvbyN6yC3hHUpKPHUZucw2g6mPtA1tads"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3WxPd9HLCHDTMvJoA4Ph7Dud7wj5EyLHWf8TfqXW9kShBmvyEjpAWgF8Q6S7evvL65nSa6szgsJ1VWKoKNKABoq4",
  "key1": "5HBQEMR57eVAUY3d2BGDevADLKXoP4owGnKiDE2Jxsz8rMJYmNcYP2nqo5iYUMM2CRMHgkehrsJg98GjywSKvVvV",
  "key2": "4CVrBLd4hzzSk6sszwr3CeqWF26DxfCVFqgXxF8ZvNYfDJGHyKAuavPEUZm5Tm6vQmU9aAeDEvJFjCraEaC6X28z",
  "key3": "2NPutKUVaAQrRBHM4sqcK597jWKCKgDnsrJ9WTPEt8GucQBz86N5zeaKuv5Ha6pFNHpn1xtMAquR789mEt8Acpoq",
  "key4": "4g7isjSLQcsfKWQh813f7oq82ANLtYGNSmRLWiufP9n7PHnUyBXhcGVWBTrqkNEQ3tnVLVpvfk57EiAC9AQvhVJa",
  "key5": "4xJNL8vnYwF66RQTgRvuNhpYe4eADkKbSycjx74nrBqgEiwA4FokzC2DWvsxDAVap2TzCR2tacMKuyHGstRN5eV9",
  "key6": "gYz2uRxymFbCLB8KpH6VW15dgCMKaYq7MqqicLurQv2EeZ1ueBnDeNpoof57fDDQYEacjthJEgExKNnJcyUPoQW",
  "key7": "39e1Cqm9ZELdXB1W6w5nVfFLczyqTUpfGMHrzKwT9LT7RyLWrsiRtBXqbmSbkWdAkN5hA87zym8sENvoymDVBAPv",
  "key8": "5ExdQjz5o5Gb7TLGbqaUH8U4KEy4Zr77WB6JKaPdAcZxRR1TeKcvrM6q46jJuHjgpLHyCinYEBpPdDU5GnqGpm8D",
  "key9": "2qLWYuZYRHJYgFiSfLV3TiHjxo1SFDAUKmLj97g3jU9vJoY16YMEW3v521VPqcfJk3Qgo4xxabZRtz2unREwDKU4",
  "key10": "3oYmLYeTCL356EZ2ECbeYdQNBbJYT81D2pKcn2XRaWqMDFqV4NQN768shPMRHt9ZXoAhnEU5sgVEjybLnCCjT3Uj",
  "key11": "2VvGkWatWKHnnWGayvbo5hpg1oqSaDdbMqTLbvPyxVd7ajms8RqFEMcP8H89t6QxSqrXVSGJPnQDga3bVAJMDNSC",
  "key12": "5boSbgXo5xK3FLurxSnLAFxWRQaESUm5FTKUGBsAcYwoM1RjQF4xVnrAXh42P49eQMj9JiW7u5aNaqWw78DKJtb3",
  "key13": "54iSXtkPvueU1f1z2jqUS4VSeqkpJES6vYVKV4njhKgvYF2o1gJVyEqE4gWt2BzfTtLbbu88g2crHLoGrXBJPaem",
  "key14": "NvCHi2dk86CqxMkg1pB32yJG7KP1cyFdC4A69xcJEvahuK7ucdnmByY61qKnMe93iJQSZcqbTptt8Xg1sbShpoD",
  "key15": "453QPDAbWAkss5wG6shcpxAuRirDzbjhp6UsgT425rjoMfZBK1kDfGDARdXFqwya2aF8hE2y3nGDVxyTj1M1U2Ub",
  "key16": "3n5sHbvDdXT58rRh2x19PVX99Uk4G8yqCheTMDaT4uNR5dkMfF7Cv2wAbkEp4YK5F3XzUMWNXTp5hoLbs5QUg8nm",
  "key17": "emGuppihRRx52yw4XXBcb1Es4Ebo9YBctKcpaCT4AvtHgETDDdNwHqD93eQKAzkdNsGbTy3tBTxnv9Eb4Mn462Y",
  "key18": "4YMaGxXxDgNxh95BbTC8rs6QzPvPbP6PrVjkM5E4wQ5CqvNiHSmWMFmc8CD29t2UELHXWqXMP2G6hKKeiuBXYxx",
  "key19": "62YSUpWWh2ceygULoUGR2q9nEwK4dgNkJWgz1jpuLPVMxQ4uuyjGaMhd3JYPqM9KDzNsUEW87uCWFhZev6tqihmL",
  "key20": "5WW64NGqLWQ5SesEdcZfai1Md8DURZbhzbm46BGEdSdt8dywKKhimX9h6T8YpCj6z5ifCzRoLXwqjtQ3r8uUa7QD",
  "key21": "4J3vg8z6f3uFfg5yoV2ibjviGtTeZEyXCkbmUbL5qgcQucDy9DXtDj8BNdP989MDYC8XoXewKGGHZSEpPYNhH3x7",
  "key22": "5wwKMsNPtLh1VqWmidb8fKyMBw2KK3kNWouVHn2vyPxSkJKqskLcPJbxUHuSj2vMfpsZjk2rnGVsdpMTJAWZFLwt",
  "key23": "cB3K1SUAtdFCEVthtGitXfBnkRg8zRjXci1wshqCt7jHsHMCMTP8rLKsgiZafPkpfc5LtGfFnkH8u4w8fWDQQDo",
  "key24": "34rJ52HHMAnsZhyP5YTKwkm3U9K91wuEJjktfam7eGFX3rzdmGJ9JhrsKUoaEeYhEZzYuyLQYk6okVX4sDku1G9R",
  "key25": "5cMGqGZK8CSzDugBTiboH1SquW8Agdo7gT56HZpej9vf2JBfYP4zLKmt7sBxuutu8CC5ugksJDTX4sCZ87wfnfA6",
  "key26": "2FUs8gL9vZ95u38cfNwnegF2hgNw4NHqa8S6et77prMEmZHuTP5UEDczwPjZkksWn7nRbByPReAWu9GmEQP9yEPb",
  "key27": "67jQvGVQ1mAtyueH2y4ZMUv8pVFYyDHGRyQ6skikza7xTuHm86TKdegHdDcDemhorgUfH3NDk4wGk71aMQCF6zXL",
  "key28": "2EZanNMfxBajqX9FAh67yKYemasdgSKheFNVwJPSdPNyZU9DSPCg5z7bBmfmc8fNrefPqbo377Mjw7WSiYCER73X",
  "key29": "35NF3K9LcyQXqkWEwUZgKJyBGGRYEJtqqTZrUN4d9peKHzCaE9GbUHJBZgXJRT8LabVmECpLXSFdfQCZ9gy8LX9B",
  "key30": "5KvdYCjeJT2Hufe9ZQsXAbYLyUXgyc6fhHYD7PGYT96HKjc6hC9x1G3BG3KoP9yWKiMLMzewPvvAcUJMpuhNydZh"
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
