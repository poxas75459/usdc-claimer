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
    "5qk2Bww4X1wf38qGAoparQfKaoMdFV9dz6yT92HVUDjmYNCteUsYktR3KdY8zJPmsJz5C396GVGLY5BDgmy2EmBR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "411x4XbQ7SGK73vZD2wwSFhqiH1n8vjBYFBk7pdNQdpQoFiSYjkeHaYyfqqX4KsWwRroEEZdEaH2cRrAzgc5Aoj9",
  "key1": "3AqjCi3zGHqX7KxZvniqDBftuTdH5cVmmtMKP64WfnnNNyiQvGf1ma6RRMWtKvtzpDr7ndDb3rWnHZc4nWxqfRUE",
  "key2": "5rx2GRft6QgKTfGfXMqste12iyAwgLc7pD5moJfgK43BemNkb8yJrs9kUrHinE8xJKSp7MfpxTVNyuRk7Dmhxhss",
  "key3": "5HnGVpRSzTSrFFTLGzWxCD6RHD1CtPJKqcESTrRmh7XRpR4EyYJazapNLmurDFzmGmDVMMXYfN4E2eN15Gcaippc",
  "key4": "67dEy34BLJTHCnt68uRZ4jEqXKeqD3Vi3xKFhrjDyQ9yfFAvLZ3urw7JU6kdB8pjfERq4Q41urLtWGVyUd4zzCUV",
  "key5": "5EtAK7kZ8SR7QG5b8nLv7Ud29G1Eov8Pp4b3u2uF3RxYo7VHkyLPh6CmwtiiVXzAbupr3qwnhDeveX9npavS3QF3",
  "key6": "cj3gaVe2VMeAbsHgSDxV1Gqx5M4ft6ieWSZ1GvUzUnExUGPNS6GJwrvSennCFimLNFECECJfAf1jmMUFsEajjbn",
  "key7": "5uq7zkpHwncy56NRTiVjHZkNBmbuSRy5guC2cCVuXDGrab2ZMZexjEKe8WWmDXkzL5JPuzr8R7nUxgd1TnBpvM9X",
  "key8": "tXv7uAdD4fjKZ6Lj1orTwydM3gY3SNdvno86sKQhNH4dHtrapwvxmWprjSRWmrknyc4qd4KnqAFP9nNNDtmjmzA",
  "key9": "4mUyfGAYiArNU7YDFRCprh88bDuEiBFRqu4d5geEJAX2EtbSbnXCqVsYAJmA7oEvLBMbPgzi9MPuqVSYqJfh8rjc",
  "key10": "5UnHzsCuFpTm1pASsB8KkbkZuwxHAUp4sc6PSwdJYdJJzq8g3abJVK4iG3nZFfUnof63cnKQEtYCMLH4TP1jLPF8",
  "key11": "4V7Czj7NhXpFePbosr6Dd8KFgP3sh7w11y7eBrdXVEUJJae9rfK3L56e7rt4xKrE6E6rJbpJWACTsVc5RT9M8nSP",
  "key12": "3eujZnvzFpkgSqKtkB2gMvENF3a3UokBvKWbv78QtnMEVfAoGzF5ZvXQBzCSyaYNGvzwqPmbeQQHW5oVStUzwB1N",
  "key13": "E8KTAgWUJfDkxJbecSW4p7KHSupUDxmaSGBpUMAvP4LYr7eFB9kbeKvbXmg3VyWNaEkgQuoZgfyoZtmGEbmUVaq",
  "key14": "97XtTnZipgqv1S7stKbRnc1Y8ffhYnShP8x6BPwPVorVCPESJ6rEJiguPXzDJfK3AgCp9WMagm3W3Yctwi7bVv6",
  "key15": "2MuTrxWJ2toTMfawcpexWBeQkxjFS922WNQGaKK5g79Suc5LbmfDewzB83n7PgcJxe8KmrXAyJvpDob48MY1MgiR",
  "key16": "3NhmGpGFsuCky4Xc4QBn5WdN2h2v4GLoknDvmDX8jFiGXoGNR6fBgdRfiE4WCX4ELy29oBqwL9RUUdFjaKGFRKh8",
  "key17": "h5HwakSnryHvymaUErCywhXTfceVr7YNV3po7Rj58micZDNVocawN64kXzbkXBaFyiHX5Ac9aLf2q9W6xfqzX7F",
  "key18": "4zp9UC451q7c2gqtHJqvbHiZ1tLVMTNFYqqtFLKLZuvTDPXmtH3LpagcGNnp1V9f8iMbhhzZ3jj68d22oZY8DfXN",
  "key19": "285KymGzqrEDi8TbqphpugHQdCKUQGXF7NKegimJfhHxxu1C8zUMWQE92kNUhk37wNxRxye4g14fozc4JwLMFhRL",
  "key20": "3KLsHsMdQ4v5cqscVR9CP79m4ZhG3iWXqaQz7kG6xnjjZYpuvkSZEuE2hhCgbvGaij8Mdri5JbJ7qpigBuarBP7S",
  "key21": "487VvcFaNLYk1kQEKysuHpsPpPLztuPoZa5hPXmQJDCiPMbPejQgv8ikRvuhhVzzYUnbH7HBCKDMbkCrjVaPQnpH",
  "key22": "2BVRC9xaNS5YnxmJzt1fSpDGxK9U1UiPyHSTXj6iE67H1SUBQxbURNAQ15E6WBrGbyDQBCiniUP3vG7LX1FHTACv",
  "key23": "53eBCbBX1BBmy4qBzvzKqwRySZpQ6yiVPeqNpyrz1jUFau1vTfECDFReKMV6nKkAtCHmeiBiiaAsMLA8BruKKLag",
  "key24": "28aaQDMX3tPhYScVquDZ3GcJTdx6PB6KuT7XCrkXsBZ9ZdLvSY24Qr6hiMv81KVzcU8StbE8bDxSRGTr3Kg2CxoE",
  "key25": "4Ncr4UNBqNwse1PBs7iGMGJmvbntKgHxJyVPMGK7AYDpkPtTboSC38VTpf3T4Y3Nbf87i1h7dzhxmZak3WRkakBq",
  "key26": "4bvLYjkABX4vGhPNXkRBZiFPryf63SxSn778fpzXibnNNvDgg67oQCprQ2JjKKwJUVsPrhSBd5hHc4KBrKAwMd9p",
  "key27": "F1nkH39yGD8s1wDCKkrq1hijN8yCczmAi91RrgvS7SXuT5mGRr22Nk9zjjhHdBDyrJgum7bd17gdNANpPsxgzKv",
  "key28": "NnCMiTPd5rAqKxcAX1Bd7hwatQdPHL9iaL4PfxspkrW7MeJWTmJAKbcTBoCdjmf686Kf2qKH8CA8PsrGXJLyU5X",
  "key29": "55btoFy3hhW1koMqasgdStt9hBh5xGYqEWdN3Ghwy8cmTGY8i8dv7AEFpSY1VCWo6SLmYjTExYzEymkx7jgEfQCy",
  "key30": "5Y4hZpjboCe6sgAx8Xwb2xuPm2hAcZzAccb6hhhm6YYqszoZR3rnUxaDymzDAzZW4TQnupGCJ2LVicsKX1oHjCTr",
  "key31": "4Tj5WDYFiuczcdnFXtyP8jozf7ee6r7XrbCYnZYNTyyqMkuvMTGux6UdRVbpT2sY3GEZHRoxKAhGgPzQyw8N6hFM",
  "key32": "5GUFy66BonX1tCTVPFTMfpXxkrtmHWXquEA1dZS1bfrR9aBdKeg5RGDC21F3qXD6a9JuQtjL5ZhD57iMq7KeKkhA",
  "key33": "WCBt2cRi226GfsYLSBygjMtjA6n7DpFtZV6j9KDG2A7zj3UNxa6V3zq7vHq1JMz9xDWwVWtLqdMZqmv9MYWsaV1",
  "key34": "3Y2Ue3qqkme1civsYjZUJHMu8dkJrVUb4GqYHX2AnMzuPXTYELDSdBfy93Vrc9qUw6S973Y3wzNvh4UVLUs8N1ge",
  "key35": "Kj6MDCvt3va1ivmQMukDt3iWc27MntBebSsJhqVH5EidUYBwWfLKXHvjDqjUy7WU4z4fHPGGGonakoWKdkG4jWm",
  "key36": "3XrcJU9H9uFLGHLLuJSnd5gvAnRXkdqjWdij5J9MskirjdNZZXa57G4Hpoj3Kg4eQKSJwqAkoRwrfsR4YKbsHdy2",
  "key37": "386xZKXf5Env5cUC2TwPVM3iCXDghMqac2gGne4Xe7TeCZsvuZv9ngQFveFn3Uyf2tPeKetVKSnL8aFdMSTWLboZ",
  "key38": "3TyK1gxrgvjp5Z52NbzZSQnZcCn3BKrg8r7kZbgoD8QJvJvcwhgMDSid5NFgNFsg7otrSedRcNxvUBHAJhXv3BuE",
  "key39": "vDdfQJcTx1ELaMCtPz6XW32ijePP79GZat9Y6tnWizYEea6h5ntMWf3AXsy2HRUkrbf96PJPTH3at9FwLRNwGEd",
  "key40": "3CXU3vog8kthBBJTWtm3YGXdPKdYvQLdJiqUiUV5g51mEkqfXiqkjFTAYPj6CG4iF9M7fUodaMPxG7AA9By6vtaL"
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
