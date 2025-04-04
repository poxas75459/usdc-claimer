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
    "26Em2w2CighKLhpydDGHvV1UidZriYBuT78U1ZH7QuaaZHEeREDAXoh6mvDNXHfiet59etkJd68CLYrbwkWf7vPY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3cbQDQfNP6MLwLxA2usfT19AneYBpkAbTxzxWhJbJrucyLAkRcKecVAdJY6e6aG7LGAxPrgu2CzqzSmXCd73LLAK",
  "key1": "4Z2r3LB4BHAQUTX8WW2j12Yp41SZJS4VyQXfwmrrX1UyyfWMvZmsumXTgQxNb3FsWHcL1Sd5cedUdZU8rfabzwbV",
  "key2": "5awQZ3YJKpACKLX9D4EFy9b5GLaUsFaemnnsA2DEoY7WMcubWRZoddpPPMHVrP1HN5JyNzHnfwN2TroReHyJbUtz",
  "key3": "5jLkNhqTV9KpMjLKSmUseomqvKVcE5As1koHNbDYfhyNs9J34rnqtcGbeTA9dMwKU3WyG52uHv3mVQu3hTNBpW4N",
  "key4": "yG4VhQ6pMC6cH27S2qfVLwZMJs3Q7Fy2Ja3tMF4ePBe8Fv9UMvdyJDSvzJgECY9giWwmy8JTcPzMpzzZpL2ECV9",
  "key5": "5cZAKs55eWnyzu7RH8exxgT9vrR8b1QyXCZUuqCqmtzbvZ5FS4wt53wKJkRpbyfVwrqaZMmYwhRtUQcsMUnHK1Fp",
  "key6": "4Q4mga9bk1G4M6dxCZRAKPiMKN7DgGaNA2vBzRabXX3A5f87v8kjmDa7n164Qeq6ajkS3sFQNEuEk2GzrcmyU7pN",
  "key7": "2acGUHqC4NXg2SNwn6gFA6jVCPtRjBKo95eaqtY4myGGUwFSjcLCa17Ji5LPLVrgLSwFPV8K8ssHtNPLQ5YJfYYU",
  "key8": "4xUmgu2yx2cyXy3EAVsR1eAsd4AuEeyHtW7pqkhSHWxT82kewQmaK1ShGcwcx7MW8HVBHt16UwVM8VExG3nG15ga",
  "key9": "2XKF4qLqgxswW2NDxayaYYaFPN1sdKG2ousT6oHLQ3HFsF5narXX1SG5U5qVhcFRHZxKtLKP4e6QBGo8E3qznJyV",
  "key10": "59S2coJR1dBBA7XRGoRoQjxQ5R5HghRuTJTFTP6u1t2tZi3qGaPJEuoFTVNyhibnWbD76c1iWwYYVGg1PTjrX4qf",
  "key11": "4TP4pQKFo45Y8eyi7Bcygo7CQK6dsVMvGsgEgkX5E6gWTK6BN7chnTgCRg2QXgdZymEGoF36zoGAGrUETJ8uhthR",
  "key12": "564aw2ocSTi3Am42mW5mURpWiC5xW4z6XXPdAbKTLoGWZLgnzjqScop6nvUra8Ypd6JEugvCXChdwKXTCeGQVkAK",
  "key13": "26Z6zU6bdoik52NyExeMMyFga7Mpsbm9ArL97dXchsEm952my39GeeVwPtZpVLNgr9WYrKuSUEL2EwHRG5A7S2C6",
  "key14": "5JGU2SiZuL1UMGmtqh1HkTLvdAV2kn3U1RmQd4xyxWSY47xV3KvcwrY7JVfVgngARgSKEKmuLr6cKAgVXRafmza3",
  "key15": "3e3q35rCBfd73dSwYWifEqfhjiiTzufuN7UytCPyZYM1eWFLVD7i1RU7fWZLLLoCNJSKiiqYKAAqAiHbehyoBtUS",
  "key16": "5gucvrfx7CmwYiMhceUS1oTZJFxiTtadfnzAVdqF6tCqdh5sv1R5T9Wjqd9p6fBbZTzKqvWY3AfBL26qTgm8t56d",
  "key17": "3VS77zNi6uvPn8QmyvKzyPbPYBUYbwjeeJHroFoqNwMcUgEgjDxJLur14Z1vq4D8qgkf3vYHMBtRmP2TEWkQcBFt",
  "key18": "2FuXLqo8Vpr2BdoJm2NG34bJ89RqhUMvBQt4jQyAAFUNVsrLykJWVggF1uen5RGfRS6CHxzjzMQMD9KXZ2XGBFet",
  "key19": "3Uh2uSeJqReWZC732qB5gUxHzPH3TVAMZDV9DAC7M9ANetaPgvPKgqVWzBUPpsB3zcvdPSWRFC3cFCDNEfGdQWmX",
  "key20": "3vP1UA7KjSPyftMjX4RgeSRmmCLD5d1XFvMvksPhX8QxZcA4uzHLVg56ipgB9E3aVf27LY6BPTn78XZJw2vGb1Bi",
  "key21": "5cZ3HBaBckiMqUAFLGLJ6qj2CDSu6pEMPY8oLYnhyQXNujogUwxDPPi41YjzkWpn2nMEfy1j6xqYZHFC4z3ZpTAq",
  "key22": "DcTPLqRj9pWDSX2Z8EQytnVKPHw93o4X5DRw4wwam7Fw5YghahuMBG7YDFQ9UX4WxBNhjpAafdD9bP6dLhSyr3K",
  "key23": "3FB7U3KxnUDDwcR7PS1qCjfisujtbZddcDWjbU9x1uytLt9RRLbMuGkNysDu85ZuoBCsBm1xsjGQpzVsWv3GywJA",
  "key24": "4NGZ6R4VwNGfigkCGpwDFDktiivW7FDdEyFXCrKF4grDpYzqNAJYHj35zeLQL2D26eJGQJT2yFaoZ2MZxxqSWJpk",
  "key25": "2Q8EAaagtdkm8qtw313HN2v9QXfGGpup3nJ6AKRVEhg6RaPP3zwXc6mYXFZUc9yUEc9CZJBGzeBc93AWFrh94xgr",
  "key26": "2fAJQyNKkDaQ2qPVvZSLPZCAPYDspzGiU7ykyPtSsubRbePqnLYxYfwpZctNspdQZSSMPEUUmhU8r2Mnkzw7yL1y",
  "key27": "3L7LkKzQNswaBWD5thGsi9zZTXSCsVzG9MaDbpboEF92BcQTo2F3JBq2QtSii8JWf6uZsbieTQi4QWmtdNcKAiG2",
  "key28": "V5gCZo3btLYRzHsTihtjy9b2ERWaK3TJFzAqnQQsUBoa45uyxM2jpsD6PyZHF44WLJSh8SaZy9rRWAycau745of",
  "key29": "j4jTL2tHRkeamR2izPpt5W3Z3kPzVNDUz9fhUo1S1AnJ3RRsb7s7hJKTJRnCYYFGdx8zfspFW6aZqcmX6yTdfeh",
  "key30": "4krUcwcDqckFgU8eTFMPsY58S5GciENwUNWh6KPV3jQkmmvEVw74qZynGL61AvMdewrLg49ShWuhESSmaDg5DWdD",
  "key31": "4Mrhi1fyxZXqM5NQexMdbjowcNJkW87KNDj8u4ypUahh3oup88Cbe47Rcx6qDk9FhmUXmQqCMrH8KtJv5nE8ifDs",
  "key32": "5gXECZRDmL1tnxDX4ooDAmhtQFvoaprRcaw196vGZMatDEKADGhtYFPX1gjMZNLG4faNKr6vWpCrSkJVjaPNzsZD",
  "key33": "3ugavQT7wirtTBkkGMDBxxUk8f8DLe6Tkxt5svP51rU6hznmG6AY8UYJot8mioUhYa2Dqphau6ZPxRGDejVfqEyV",
  "key34": "4DkGyEq69unBvrP6u2MW8Q33HG3kC1D5ewLfLBMo2E3PXu8rtzL4c3pKiqFawSg2BJSRY4KTsu74uZDqWLwCME6j",
  "key35": "5ZABSdXoB8d5BRzvpnukupo3mNbEMuJMurmehu1Y7zh9wGWqcnkv3rFaCfgMPKV6HNxGisZQitPKSHXfUb4zNCE",
  "key36": "22k8wTQFibGHAhibzZCaY4wYoRBQ1DTboSZwYF6V83HMtG1KcjjnsM5p9a1QWzDxVRveoFgEXP7MsQqgHSBmfNz7",
  "key37": "GhHFeY1nsvVpA1r7edRwznrK2PXm5J5kPa4fAYxd4p2Cr1gP8Usao3HGumvpu2aNTnTLy9jjQUXTqb32XDWbQ1H",
  "key38": "4BP2Q3fE58DzbGL79QReTPqTSwyESErVJZvBM7jrRw8VzC5PSG7BvACt4sZcNd1eCKzkfnbhkwMa14pRXJaRBVsi",
  "key39": "3Vc9NARUXG2dMrPhKp6hXJFopCUS5mai3CoLzZMmP7jsiFXtdp5i1foZR88HsfJzBEkPhK4abxaL6Hyggf3Cc6Qw",
  "key40": "5oeBVASxDjQ2tBY3Q4er1ByUQNG26KCYAs3oQ2HynyHMuNdZcmAMUERdbx64dY6vfCsGeYQGfJvEBijqqgkYvGE8"
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
