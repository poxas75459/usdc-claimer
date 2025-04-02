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
    "2JFM55sdGU3mt9mUtG9W4sL9PbmEBBdDALwr87arNfEua27kUrBnTvgCm5p7CuhoAfTHwd7d8BnFt52BCf4HCgrH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "258L9ovvEGSbsZ75kUVUjH2KWiJHCZxLWLSHtfCkn3hVJme2rzFkeAkb7Qd14CV3U2eC7KkdEs6tYLXjuBnURn9B",
  "key1": "2TzGNEKDyEUYjuyiXJb9f24WRh5dgUGF5ZeGZs2JnNzmAcPAxtnNqrtdEeZNCwXLASj8HJX674W2QKRadNw7XXQM",
  "key2": "4zXS5Kwx7h3FDCkymcHpPR9ZJXtFYenCLVQHATt1QZPAiYjtoxK8My1FjZTZcJsLbgQb49pKd9EEU8RvtzDbvvKs",
  "key3": "2E1gv95bopza5gBsHydy3aDD9mRXuxPJdrsdBfXyqVHfePKuNHhxf37Jsmq3TZbYCHAJXiY4uYrju34zhPtHFLxm",
  "key4": "3Tg2B1MeoYUhDHwcgvGWuxcmLFRoKXF1X3ofKh1Wsa8aswDj6hNfEhMgUX4Ud9pTXwqVjzpiqAB6Fop6DqZBBqxs",
  "key5": "5VyXXybdzZyFXS71qrSfEjY28VJhDkH36YAV3D9cKmb88K4aqG4C2zMyYXuv3Wg83bKXwTrS698eyUhhpAsCTnxp",
  "key6": "qPphrS5aBWwzA4MAD6PDdSm4hhxLTN9uujvcu4XoNTo7ChvyFfHgWEZAdvDCh2AWfNMve8Xqnj2hDo4bcF86Q4V",
  "key7": "5eTNhLz4dmtSsHBp8CU9ujTk1bHhUKkX5iKsngyxme6oSpgeEZQxSctUB4hsfjFuwmaxvXtAnbBpmyBsw6MwjoTE",
  "key8": "3dM1nnL5SRuhMWLFPwVki4CrA8y1QymDmcBD4rUjBg43Akeacqv17Q7YQKKqsgn5cEB57j2t1qYK87VbdV46Wpot",
  "key9": "u2GZ8UmJ4ptuBJMKjbyCronQEBPDeFWRg6Q3pBTMfNLaB6ao5VcnTgxNWWM9417S5ryYCVXAtjTYoGDTg5jgkbQ",
  "key10": "at8rb4WTdXLmaeE3auC9Lk1w1pAxfqeXy1mAztBtuRMeB2w5hLNwmAURPkb2zmMinNopSmT42MzU1a9mmPgWbxB",
  "key11": "oB1gdc2AkRPJp1mpQVfytd2Fqh5L3syr3o5qBf2sbQq6ptBbAAc9kVmbmoimA4KsCKj4MbubfehMsij62NsEA7P",
  "key12": "5jTmJgznVup8kAc8uiX11EenHbQ2Cpd4zZkixaWa62ESqYpDumno7aZKXKmrNWj3xHsJLSGCe1PtkJTifoZURoL1",
  "key13": "3EtNbPcJXtPYRcGeBcCdU4YZSvFTwQAw89kMN6KyucXbzDbAo8h1kUNbrxnVTDN87E7pH76q1ABjUYATuTDqtMdq",
  "key14": "3qhweAjWELmGuxpfYiBXcZxzGkq3LFV8L4sJr6pNGRsaHA6JdBNTHF4KALpuPaRsTgrjCsebgScPSegSyFj4fujr",
  "key15": "2c86cs2EtqQ2K5NWgXEFA68KfvyXX1mooFeYngfCvEGDouMdRgjdp85oqvwuqNnvwShSaWCEJ8fJ1G7Tz3zz7kYv",
  "key16": "a1JGTV9wYpZPwsdAZ8T6nqPLNTZpoa1YBUNFoZjELVQ7Eu5LhguiC8hi8SuA4MWC4NR5722WXG6JFPPUNg45Gbu",
  "key17": "3jaj7hkz5hsB9RVhYTGnCzTM1QBkb5gKEv4uwLkbcjLWVMZUrW4k6uwWP8puhuQHukhPVjzCvo8UZcS3PcM63HoW",
  "key18": "6wJmcKHxs6Gpreg8zg3C1kHEr3DmGYZwnxtaTBR7FCDQiozDuLSPLWAFQmH9SngriVz9dnbvE1yMuGMyGXhK9hw",
  "key19": "9GEYsG1Wm9VUezfrCJefAjmjGBf36BHTMamTLN6vphNSpeAZfrUyRfft2P44LMYcgcfg6iZ73yFBFsozyeoKFG5",
  "key20": "5sJh68GkLr9aFgnQYZEXz1UV3CquydxznEgLtMviDcN1PyAZa3n6VgYoBuRFJqhmFJwbwa4GqBQBxkMsr2c7jyuT",
  "key21": "5ys8o61uUEkwda6uAtAsi2gJSYq7AkxppfBwTVRCUpNmP7qR9KsGG9s9DrnfYPEpnR9FckiR8xeUrAuKgRJ6b22N",
  "key22": "3F9a6qQu6mDa3jhWwRtyv3XBBGdrYw5e9uVCA16VHJn8vcbmZVrb82FNEXpybirzkB3Nq9hsiymSzreuQ5uFcoNc",
  "key23": "2D2EpPSx2HJYrGBDbdgemDUaZFp2FQWJ4nknvjQNGHhUsCxmGkdkvhxk7z4hDhxAbeYgdGysk4D7LwqRsnN4PWbU",
  "key24": "3dDPA1XA9a9VV3mKAQcANmTpE4WgQsCh4iChD4rqMkFrDbZuGBMUuX6JTo2Xj4yLCdGa9tyS4fxiXuuYs5MW5EUF",
  "key25": "2r7uEvTh4KmQSoNYynMumEUB671YquYiNtH4awzAMEjFgos9ZyEZmFdBF6fR3QV5xu6NgyD9FhNesG6MpBTKrbor",
  "key26": "3BYgiC1fiG6cYYaV4rzU2bqNyz2hSQPDKg5H89VD8HgRXWw88sKGLW7wKpoFL2C433N4J76kzXkupDbEsV94fWgP",
  "key27": "2J8fTX8AFS6W7SwRXrNxaMXffj3RymS3LXsTjEtm3mTYxnudaphZkb9QfVbpSPZ4pK3vSCYJ2saDwiNZpVomPLkk",
  "key28": "3MapraXScRxd58BzFDdeXinUSGuEXWYGteTpK8tXKCtiQj66pVBMJqkzUEAyVtUCQfPCSoHmSmUzhPPD3zc2z5kB",
  "key29": "4WJvsi2dnpmUCCnCbp9hs1MwPt7Nfp3HNmBgyf7vcFqvzz2Zi7HCDARr61Jp6gxFNkrrbxg7s8TgExGa6eLHPsnw",
  "key30": "53dvYuxNoii8KMHDY3jr2sjVP8ukc4Rg1hNv5PKNzrGMh8ShEppCjkmG43f6uKSBVHGAgvvGYsnMKr3EcydhgofY",
  "key31": "5tN1dnHrWZRpgVqK1Aag6Ugy1bd2Z1HH2sdz5MKPGVZvSF9Yu5RRdGrf9MiswYyXcphs4DzpiEgYbmLN85woNAqp",
  "key32": "jVoU5bxi2YvSRQ6YfVUbC8RKhfUtNpbBvJYYbXVUssGEzgfktan8DZXRWLhtYawssqs7FGKCw7GyYgm9DHza44a",
  "key33": "3QCvbQJ8caJtRwjZCnLFLQyKsB2VH9dQyYtuHux6cpySXjaDGwNTDLJdWYCDZ8HHZbNsMpp27K8Lijn8QhwN7HNg",
  "key34": "3eJVh1od4zTyiRafv3wNmRQtQtteEL6kSkZEYF4o6N4YXTuQCqER8BAB1N7LrkhJ8mnNrKZ2VPQUErJBMEyskHcH",
  "key35": "Bj18y1ThTTXWuZSrtG6rfzmCLJTwLKL6u83oDFdHk3r2MkCDoKL3NGQBHpdh64nr4TwNYCg2J5vvis7XhhTm2jR",
  "key36": "Muf8r932fJsZ1DDLGoNUGmTV7zSAQx2YoBnRBqFXp51CvFFYR6XAYfqgiejNh7mRfZCK3MNXwrM3Cw8iQk3krg5",
  "key37": "4J1Z169LFvBwRz1BcgyS2r6awm8VCTDZBs1Frmaoch3nSfjEQC94buugJNmFe3GfJE8VixUPkKSQxhjoML6nn55L",
  "key38": "2SyEDJZmjSJPE758bUsCpTjwefmZJkPWjXBNTGRxcwL8gqYUVy1jgT6CTAq2ZwvXFn3961ADePNuDiJMpei4fjcX",
  "key39": "3YWvNoVDjbAevwR822xYaGBK4B3frUuooKu1YBQ8vqvY9uc8bdep9Z3Y7kXJfJJNnPCvgmBaEDEN7ddHi7ve1wzf",
  "key40": "4tooafnjGR6YtmVfds5LmAVt26Bihc6Lg8AWAaQnqDWgLqrpeD2gbeAYZyhZHcJm43zMFsZtDBfsUq2NfUGPzZuP",
  "key41": "5vQSR6KofHeDUKr9XSGSXQryhGfPE1BUjYLx1fnRUAsSauiMBMsVW2KHDYeiDHKgcxapxqrwb7HVNHCczj81yCTQ",
  "key42": "2oUScc49HFjS8G8XuiPwq2YBhHWywmNzmoqh11hMCLbzSPjY4DbQ8vz2AcKi1ZRQL3XP1PS4BDGayRPrizgNf3tD",
  "key43": "F2RhXuTfBB6NybCmXsYMMAAgDRZETXF1sDNhjWFW6ruS46au7YjYHCn14gYnajSENqo98cG9RsFYYBw7Kb6G9dC",
  "key44": "YZsUXEZKN3zFCmfhVEtisg8PyzaB2xqZKr7YfebDfhousmAG5RdHfxL6CoZCCKsEfrbr2E1QyVBDrokZYmGMhBE",
  "key45": "5p8ztPAYRF8iqwNaxkFJHb54nBZdu6uFsjbxSH14gFSJ93TghWkgY3kF8F5jwkhumCxfNsysp62Q1y5THWv6TVHD",
  "key46": "2XhPBgVDXjBXq4ZuN7PLHzC8aUkVxcAQaRggKFAXBBbovpbQcy3bp4oPjFjEvQmTa5G4z8SX8qeB2UZxqQZDGZaU",
  "key47": "57iTZdmqSeonbMRKVmszqMAjgaovFwvtojbXiS2Anx29jR44b55t3jL4hQL2NDAuKSJZ7VpzrSMJJHkZAZJbJg3v",
  "key48": "4HoFo2GaNHUaDdQ2oJyPie9e8WcWuGXk5HDy3CwmGEBU4F8BUw1LCjZ79j9yA6bz6DYZ7gGssA8fC8iYQuJDCrEd",
  "key49": "2j1RX2DkyMijT9qsGB3iN1rcDQh1V5f71TWH1zoYJzNsT1zA9Dpsea7EjCLUsnQiXPx6zwJ8ehBnKtLoxykz18az"
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
