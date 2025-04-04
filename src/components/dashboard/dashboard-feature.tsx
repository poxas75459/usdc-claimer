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
    "CQSKBGuVQuFr1pdziCNGqXy9QXHd4ATqeAKBK9qgK1ARXwMhhXJaMm37R1J5EuTUvZ22oJ7fPYdLNEpkFBKKEmV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2eshGu25nLiz5jVxsNnEs3ytTybSFYXkrhsywQ9fFdeKgVx8zRGvyj4U1sRf2eHqBKMAQZRwdhoeeLPx4XYdxb7i",
  "key1": "5TzufCVbRsENryhz5gF3yr7Wjs5Mjwq9LkuYZ6TPNu1VMao3za5DWJejAsAeopJRyEFFFjZaM1m3hwgTk766f5HU",
  "key2": "qQVCtNjY9odxbckMGfF6oh48dF282pBg6pdRyiyHEN5KvhrhqjoBautJGL9omCZRQeBDJxHxgCjGbHveBnR4HFV",
  "key3": "WSGY5sbLsNgQF6ozDnqfSzEHd5Ux9S5jyasHCnDMGpnYbxoVUPLG9jLFXsx3F78GVkCvV5DP9XBUPAUifVQunQB",
  "key4": "FXiAtkCyuuZdURPX1CUXrQMLawsy7udfLVer2bLvQQY1PQoBEPHUXQasqboTjS6y5x5WtK4pDQpRU5TTwo5sAdz",
  "key5": "21h7irBFCndWo3KDrUGXr5wqsSoAZewcyZWZsvHPR37g8RdxhHMsSG1rxabcEz5eedwgxjNTfaGxtcb8bULf6Muo",
  "key6": "36dnxFNTteVuJLhj9TX1z91ArwQ2qRhwXB1urxdT346B9bJaLXC8sagkxQdPe96EpqiHQDw9yRCsuK2aCeRR4psd",
  "key7": "3xXXuZ6SG1B3PeQjcWJM7jgNw8Mjbtba8sorfasByhHSMPobwLss2nq2F85qM7h4vTVoioL7EVuaPVe9qz67DwTh",
  "key8": "5gvdYMjpfTPbTuTDHAahqYTM4uGNWCa4c5ZJL1G2qc1G3bSL3M1gJph8EijKqXqxCr8aXvpJBKkEboKoS4J5wxCg",
  "key9": "2H2ubH8HA2JHyNmeBz3ZyxC19CkWUBg8EM9ao6zpkdQu29WmS6xHxG9MmfpzCSY4UwgyupqNhS1umXXX15tPVvYP",
  "key10": "tvL8wgfpMPprGS8RScLwsBdhNGmtJjjSfi4Jsx5V82NHyFYXFFu8zRPVynUb1otg7bueaPyr5MTeAAYqMn9JK1T",
  "key11": "616DCFdcbRkHrBP8dA6KQpXEZsPQ5RCjyyYiQSNbjqKytYov7BDcgdghNShaeoArEvZRbrRMJf5vZMeLVfNnLfNv",
  "key12": "4UwgeW7kUCjTcGnYyaQJhPCUtzs3jUiWNErRtYNv3bHNwfiq8kcCifZSc8yXRCqwxkFDUDDp9awq2YqD2srAeRQi",
  "key13": "2XeFetrXLrpeu685NGu8ShSKc5g8gUU3dT7KutNbWzNRUeLgMCXnkko9ToMoGutLy1QAr1NYVKQ7s3uJBAChZMYN",
  "key14": "xca8swLHVuEdXqXKy82Hhuk982VcJgcdDBzNShzupFp2JVgDpoauRKgeLGYkk8HbVUBcskSuL75irek4y3fNnz3",
  "key15": "3WY1s5dfTAWHpgSxdgqRTEdv619t98zS9eztkRAitsnmv4W2Pv2NbXrYrHbS1AweFbZZ3XQ4VNLPzqSLDCqo4MD3",
  "key16": "3RmyMrGdiANC4C4WAQH4Gi5b5VVbDruAKpwr3K4kTjXXbnZ9kDcg7SimH72Z9iiaKspSxNNdu3B159sD6ZaFskBV",
  "key17": "5mjNbJ1uNen4uEJBDK4KjMo7VRT9HKzuREHkHGW2TNfMNYvRqkTjLbNREg9TAMQhdEyUsev1BF6Sn6DV8J2vQwgz",
  "key18": "459NdHivCafDVkQEbucjLeRAUuwee9C26gcUvME2eL42NJWML2BHvsJZuyih2mM3ohR6MqfajZLNseye62AK3KLY",
  "key19": "2nxGT5yYVUTF7z3Wo2C3SMYRXHLwjPqzygMd7YtGCAJSmTHFZbUQCpHMDGtcKcW2d2fYZQCcWRPHeXH5QMAvHR1R",
  "key20": "5qCziZAwXdhcixqPN8mFhXjj86nTMuxPvDpHRY11gM8UMGcvva45qyxTUUzWFnnUzrb4BrzpbhUextUHYBfpKPPS",
  "key21": "3kPzncu3zW42DRfUtgVLGXfxmYroD19HqJTT9sZx2DuFymTTZSf3axCgTy5mzr5v2cbsqE2hAb6kjHSPFwpYRMhP",
  "key22": "3Si36eCRzoigpgzSbhCTfG65UVjnFzhVaZeyKBMsRezqjHpcS8TAot8U4Tu95AFBpGwQZawa6QoGgM2Ry8UsZyUo",
  "key23": "5irFeYNTJQRkqHg8VzX7tbYRmeriKtaxL4qPScf6J7prN84TeS1kGSuv4P5xhZDXDmCW5Axf8u8bHXazgZYPPJx",
  "key24": "3EWVSdtvV7qGkQtLsg5cm3jB4TRWK6p7S3kQJzxQ8sh7zG1opSbyYrmMosCwJihvtTuHgfHmVHAqRNYtc7pdxKQL",
  "key25": "hJY2bvwLFnYWyTn37ooaZqNHaHz1AYUzcBj2Pqru9pphscPsiAcyAptfXavFXw4SWi6nE3oi323AXZiPZ2cAJGe",
  "key26": "4G1UGnhQKxLZkCBC9NWLqVin7ybsRLrNNprgFzLreVSQGJCErMcVX7DimX2Dnrmw9YrwN1vVFQtnigpNVJaAQqdJ",
  "key27": "5ZUeMxNpjbw1PhJd5pHjcJKxMiBT7jndhWTMjj5jPWkYd2x1BTGGD4ofZiJpm6egcgdVpNbNQ9qYZe1waV1QmcLR",
  "key28": "3nRmX2MPrJwFuoAiDwGkNXbDExLGzTYWxkzZQJTQFuyCZM8cAAUrDBvpPrFTjDwuurp5oHehBB9SiX9ERL93nUDf",
  "key29": "5nPTA2SSiyaatskst7G96zuMvLghCcDaPLV2iQN2aeNfKZKgXMcf8oBntss4o7bMTvi4K8BMR9JUeQ32ZTUVg3sM",
  "key30": "2irGFSjtBEnHJE2WLf8qFLdvRYGvDovmtS7ArRaeSkvawYFPqvpLtoM1QeBA49shKhefDEUVqRf2uG5yz22fscLx",
  "key31": "2ih9Ta898MmPMQkE7tCpXnvjGKGe43cBU5w3xTorh3GvUG22pD8JBqCUWUwm84fxaw2TeWH4nN7YEb5xZN83yue5",
  "key32": "CjUMUQFoLd3j9hr9sLEM47PhwEetU3m4ypsXsF3ypE3fdtm4xj4R7NyCBf9pnGMca2rzPAFfv7DXPmd2insWri5",
  "key33": "236VgEvQ3ZusFqFMUpu4uFQPcqi9agc9WHYsZQtqgKHPC3YNqkpiGw5JtyNc4c5hU1uCcRq4bSMKr87f1oDC3QS6",
  "key34": "3GXQ3dzWZeJwAjLchs5iTZXpe8oPPjbaTiNDadWPMcbUkevU1sw5ABrgwKFtaQGUFZTQMmCBQXfYjjND2BLjWAGZ",
  "key35": "4d2881k4vsvDcRfKq56UWKFbeBEfa14dsF9KtM3hTiYBTkUSduf7ThoetBmsdnusnT6HVdPQ9h5JyJmYyGFca6JQ",
  "key36": "4pyWkSYXd4rN8CC6TTw5RVJiUnRx6xYjArDzmXcyeuhxW6WLkk8kL2JkNB7e9pSnmcyesyjggfFRqLFMJ7E4i2fW",
  "key37": "41odpYmCTWvaG7F2EjDQ5ksUkrW2uGzUV2zHeDRB5mYFcyRde6eBERz67ghvUG31YNLcLm8apU5xym2yzs2ZcM3i",
  "key38": "5ufTN58oSGh1XDWoXd4bcpXQRzPXcfbYAYLcR4U3zECakYYv4nRJfQvNk2RCmTgFyXv9zs2AKuvzCLuptQcBjZ7Q",
  "key39": "3WDT9UZ6xLY8RscELUHgLoc4dTQPSgYnVbtbyGy4N69RtvUSFeVmnkrxNmR1ojcmVebo7ySFunKDMcufs2kVh2gp",
  "key40": "3Gvs2REax3KLc7eE56E8wsh1H1hrKTCnwSBn5NZs7rJPr5ZeEpgGa5JCNhkesfWqWrEuVDjjatEsc6YwEuDbjXcP",
  "key41": "4xmoNFb1WNVE5nE21mykdTAwSsJ24C3vpCkuJxypEoX6TsijFyKUCoiuKryiiwe2eEjx9Rdv5HrfH7FA9U6XUGSS",
  "key42": "25Ymkx4xBDyee39Tjt63PEVZejjoztZPKv5mohMQXrmyKeU4AXSxDmQW2Amq7xi89JFwdLj68WEWFek3iWnYr2gE",
  "key43": "39VoQYL53ym7CXC9w14WwAaooPNn8uC7Fh6zgUAU4oW2av24LJooGMAe9vjDowmsA2QomVMwnFYS3Rpmv73xXKFw",
  "key44": "3nX2zCkPxteU3f2JWoiiaDDKqepjJTZJgdGK53k6LNLbdukCr8rB7Bnz27N5abszS9rvKYWJwGVnvm2FptxqLCT4",
  "key45": "5m1gfdXd5JTYdRSooUvJrFWHGB8gFXephqJ4CnuSaoYRjUYCgpBVyKtqyNTRBQthDMDta85GRApvHf8ekg5j2k4C",
  "key46": "4zAQNBjXdcsRsnsmyADkQwmDJ1cMG7du9gLV5kSv1PcWCuhvLuKqvKG9KDXcdv2wbYan8BERqfRneoyS4JjeWEaU",
  "key47": "2V7cnPFSmKtjmaFU4AXwRKHNrd9n9bpzhoNgkHNWoxmVNfhBbobEgKx88A1dcFa5LhGgwqmBQQbCPsK9q1GTXJoD"
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
