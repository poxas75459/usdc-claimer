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
    "2MShvsf5kK6nBrgeFwP3cMbme8jcJ9f5txmDyN2dpL9M5i8Pcb1crmAkE6eEPMGXcqytrn8TyXPk18G4cVykLTFa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3hJ1h4AFbin4cv2DpQffoJZRuGy75qRGXXbAFeQFJHAgMKEBPYUK2rsLz7d7gCRhkhzUEH2ptumn1J1ZQ7m9J4oc",
  "key1": "4cpbsXiXj6fSmS3T86rgK8CNbBdUbdU5erpp9pN8pPDCTi8Vo1hmE9jCF57aWJ78hX4LYpTi4XZS7C6BARhyQL2z",
  "key2": "2sRbVg2uXX2o7ZMkmNcWn35SEwPpctz8MgQdj7ZsbeqGjxnPqBxKm8v11SzgNmUZ96QxdXqjipuEf8jB2d4KDMaJ",
  "key3": "38Y8CpHfqvfnrpguzjzaNW7eq2FrsGbCH2kLXUAu6sme5BRrvAhjUMcBqfmRcef1FemYfDFHP2CxxxVkjwryMVXL",
  "key4": "3MA96wVbuRp6K6i2oWg7emfWYhMQECpz5DVn88Tyuy7QoYbThjzbhzmyjabc2a4QTQK8PMFtakSefpS98Qmk5x6E",
  "key5": "5mKZScBcdpZM9PEqLdVLypoMwJotp6RzPpnb29dhV8mDseXJ4qaf7VBY2TZuWWeX7K9EYGiBkfV3d5NLKPHsH2bQ",
  "key6": "4BrW2pQK9T29LpxnSNY7SQh9BTke2ejgDUyq2oPT28tvgqNmDi3ngYkBdsTGTauqF8Jv6Fxd5Auz6aKwyxgwuqD",
  "key7": "3XoHCH8GxeBWQU8ga81TZpdKxKQVHMt4XD42arFdC6oxxTZXP8Gp1TZYBRPDEL19isPArSD5h4Qo1dkugMVmhwKj",
  "key8": "3nnrMUfppsDN5zRiGgiQmmieDoH3j2ZCmbg5YYJJvWsCMAUJ5jno8qaKmQmctzmS7G5Bs7EEZsiutuMku9WsMecH",
  "key9": "4GZCcSBGx1fjDkK95r5rzwXRmgXxMRFnZKvVCr4jnzbDjaSrTw6935kVf2ugve4VSeF914P8LEavgNYyNtZ71gtr",
  "key10": "2Ccm6HRTvSuCMr7wMnaaWLyd9McpfLnUfsDB8VqEacGHqKxZ4sWFspSQh37EMCFNkCyExpAeEggRKs8yQjLbEW2E",
  "key11": "3Lyrbm6xMa3uDTM3TRtBstDomdciA6zGcdB9p7i6W2HZFbypSdJvGtgmV3gxwmcphpipM4s6EoRK2Gj3Lmv513j2",
  "key12": "23ndaHGPC4HrixnKwBREiGdQPgVHLcYG82iVTi8N6MSSC7DCBw6pbjG9XpBtqupdZchvCdwxfQSLA1z6R2d2cXZF",
  "key13": "3n1ARvieMNWgCejnWdBSLpQcuTEykwGWGCxQuknb2jHj33Rh6u824CicRfj5SkK41CCDpRPLNmzk6QD7h1iuu5H7",
  "key14": "yNd1M1rWYqdZeNUc1HrcubyBoYSgdUbi9Aamx7UspfpW372mFekn6GwabV5kjT31ZprdkC77gBdWKqxeSkdaFcm",
  "key15": "5qX7CqedkdgbTtcUxTh22NBBMkCFbxTKTserjkAgCtL8AWwPqrwrHn7FN1QjrB1jftfA8L4QrxRmRwYa4g5QDC2h",
  "key16": "3jPhL358suBcfXSQrna5q52ZH1bYudjrjNWYzSHg2dSstLfS5g6s8qe9xkV1gFNehRfvUXqVJCYpnFpFRnXWuJQL",
  "key17": "4oz9hr6x1516YVcs4A9ZHcG8t4UHcmWCC8JNjN4thB8DKxE6y94N18YSw9jaNtrwdP1FQMrQc5kM147FTABsJqup",
  "key18": "9pShvu4herND8GCPYNRT9WWwUmaxFTFM5fsDGSieGFpBso8LMxaxGfaAxDCLe3Ts37JeHmjgX66F8LuwuEwtc4A",
  "key19": "2WKfHcRj68gP9tUM62UhqidUHycbmRQdjRhz5VcUTgQMkFLZsV5D3abExHNNKe6bTSwBJ2FVrt3CGpmXrrSCTofu",
  "key20": "AbUDnd51uX16qmHCvhkjsVVYyqGErFbfSsqaVUtE8yksL67j1rcmE1rCYnfpGYdaX8sgn7Ga6Mts9DKZsbDqq7G",
  "key21": "41ceucpMK25c45gXzFbSfXtTyNd6B7YrzevqckGwCaYAZXNSbD1UMWt9gNRQwMTuKWRHD9Y2xeRrDTdXejLPQgku",
  "key22": "5WXU6hgMkaSLKXvVxsg96PeJzmijCxaQCuRYbxKjNXKCPvADbvCDP8QfSnnzmncBSr5qxuPDMVyVXruvH9GLMoNC",
  "key23": "53yokBhoMkfFeoBaFiAKcrZP7p9HCKho7JtMTrSafBvDzEEK21gnK4bFdNE46iXxoohBXUZAvxzybkKNByX8GHrp",
  "key24": "4LJXnSafBaYPrWHQypqksyuaGgtWbWi66doKGtKt6KgQv6iGNHgYSiNiaBBdwoGLCvJWuDBQmdsrCRZwzsncUftT",
  "key25": "3j7obehqRcTC5ALGXuaiu4NqkQaj1KnouRt3m9UEugBUKM4wTtWZ8cDZAV4HfucXVsKCN4X5dJB8bRdyFYaDrbZG",
  "key26": "W8fFQqKToRha3Tt2GUiDUBZLsrpLNnMRCDkCTNqdFdcdAq1RBkgZCmh2iDLQwfR2Fd4FS3zctWU2fvR8R9XGnVe",
  "key27": "5hP8Z1Mp5AqK3GkobwAAugshdZHJqQc7xC3cB1b6cU4rmj9UdyGVVQh6ZocMt7FPX3L9ewKeZkhqZq2BHksMNS5n",
  "key28": "5fdQFCUMTegaATDdivJQBSEno5WetYtj74XzrxhvpWm4ctMh2D6pv9nKwt23AvbsipwWz3yoA5uhX7R1TRZzArxR",
  "key29": "4CR9VfsKyLjx47GDLj3muSKFWL8jBF1nepbSbXUeaEAA3T8YV3p75RQXDFcdbTQ1yK91RC6APuNQhccYsH9qtFtd",
  "key30": "37WqWvy4KQ18TkQRsSGPXzgkVKE2WXmEefXy1SG6FvQiebZZYPyu7DvcT4eGmFMiz5CsJfLEqQDS5ChPnogE5B8x",
  "key31": "TyoqZPL8Mg46t7f9BpF5CDDQLVQCG8dHu3qENSYVT6VV3vFSmJZp1PG7VLqnNweL71AnMSEWvjk2AHTT6GAECtF",
  "key32": "YFxHGNA69swHdp3NHNrtMhzVohCH7HdtSyoZV25XgV8PqbgkX2vJDsXEEcFoJku5nmdJevzCKzBUM8a2kfKBijT",
  "key33": "4jJToK6f4jwmTvVCQ9sy9VcVS2Hc9kknLn4UgysrnBkwJ8xuPoJz6y3gHYhwUJd68xzfRH89ra5z719TLJAg1Dog",
  "key34": "4EcWkVpfEEgfY6DYQws67W5PXYMGsSd32tzdLgjgeodjSFXuBUaPvkUFKoCiZpxhnSe4FYh85eKZpw39FDweWuF4",
  "key35": "2P6bB7yuDTMJeMvV3eQ1Qoc9S8ggHs5dFQdLFuC14qJz2ZWR1r689dxuZ8WDki5NKStfNKMvSHRmYjxBkSzBqyF3",
  "key36": "2ZgNqAinfKSCpjmQrHMYvQ8v81ZcF4DpZdSiKsqm9QrD9GFrMRZuVFWpQi5GBv9heLBnZ2fenPBFezVv12k39F33",
  "key37": "4hXM4cD7YeoaiQzT1n2rCBumGG61YuQapVAUbp73QZMMQ4KzP8qxNBWVTbXA26YPR5mp7qBazGBjzVTGkAroLv5M",
  "key38": "5YWAZJZh7jJCEEPSiT7i3MUymCSoS2uoUCZ8kZ8tsvbRs8WEb8FGu2vVr5dNMBGbTM2cHacQ7ybbksKFK9esxYuG",
  "key39": "4SXcRK7PvfXJ2krbA5pco66xNNVS71q71S9kQGEciHAswwK6mELyuHJLGpgZEGsj6H7UCnm3xvBfgZVkcofGBDra"
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
