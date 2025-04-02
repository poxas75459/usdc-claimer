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
    "2ZBBKgHMNLBYQvm9bhwHbGKDR1iwckTWo5ivskF1RcVgTuCxkSwWAQZgaz51f1UcvQnBMa6nXZTnZskuhV757YyN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "En5LMUZkm9TaBh4zLnpXYEQAC9UXvJ99jRvgfDPWMNkL2jvbnKd6SvJuHmr6EbY9r8jcTZAbvb4nXypyuKiVWFK",
  "key1": "zHfhBffuXDv8x41RDeVFk97htMmB1TDa4Uvem8Sm7tDrNnncUuAwqZqR5WhE1jHv6HBf2WMtDVXCNQCHcwKPMeP",
  "key2": "RUM7DQS2LK35mU5vWb79ZdRXoB3zSBXJD8G3svbMkhnguVWTLHeWbDTz4X9zF29SFUrzbsepeStnH5PBEvqdciK",
  "key3": "3hU9YH5vphzBvLpxDUsrXvAkZKCdpwzcjP2CHgVYeQjiyxB98oGZQuwi6M7RuMWjgMrL1qddVZXjr19Uz42c6VCD",
  "key4": "3wcpGAQCxkoNQGpWdH8QNFv62oDPfUsZrd1rLYem7NuKqCMshEvLFpxWgQrWQY5UFU7X7RSYd6RabDDY6bjatuWd",
  "key5": "5rX2jn8nfw3jMbk3soYsCAVLnptsyXwwff4w12DCehyQJh9NqsVYPmC8DekXGppidW9t3cwZitQxvgrkLm7BLcR8",
  "key6": "4sbjrs54NaPHcNjmsJJNy1m1dVJSawcLGm6rrGxWshae5chztm5D4jmQczpGEWgMEUu8bxSwdoKCQt7Yx7khJkEg",
  "key7": "4ojUfXFUHsRBqS3BbY5nf9WbQcw8Px3bJzhPo5THawwDzmkm7FWPecz5ctwwxCkSiFhLnNPWmopqVXMhGHm7bzvy",
  "key8": "2FyqTiBbsvYiCf4Cc1Uh4PjEcCNQkw86DtnNFakvLdqgzW3oAaZQwdY4d9TdXYdkykuzwFVAWRqG9xjTnnhSVyjq",
  "key9": "4KdDDtfufoTqxfo1YPgixsess2pWLEXo3LjWmFuptZCQkLS9jzWhQgLD3DodeFysMW64HAaT5E6mBc2h8asSDDbc",
  "key10": "67s2VTphB5QuNSkQGkUJXgoahLphkXqMbaBcHLaf4WTsJj2oWdEADzo5nvVYZHR5P5y6txpcrMsrZQC1pGMf2Qe",
  "key11": "mrksym85aXWzMKwAKpBZ3gGciR69EmXCTRio8Jse9QPqJHRrWWnuJ2nNacxwbH8pTKexJX2JTzf3k3khDwZGxco",
  "key12": "3LNvv9Du7MP8YAF2QBw2yfiG3xanHi77KUt2qtWwjRwhds1UPUgPAYA6XGA3Ay1z975J8YRH9GynCdG739gWwEzY",
  "key13": "5XdtpJbuZNWj5sP4GQgG2F75Um25m1gdyt9ifVKAKhHVZG8C8EvGxYKUZYGjeEN3146Nkx4DTR15FZUh8YuDU16D",
  "key14": "3rXqZm7LhXrpBH5twqzi6RCdhi1E3wkJLy23RMJf2nXwZ6LTNkNDKRMGV68pn2vhB5ACq8riXy9LzuZv3U1VrS1G",
  "key15": "JjRsT9Beaeaa56tg1utaGs7tMWmLtyexay7EYZ9CZHsefyqT8VLhqJnZU2Laq3Fctxg1YzBTCmbbCBksdiHg3Ap",
  "key16": "2YBPaq7w4qA2sL1n2SBVAeYNh6tH53427smCaghg3EFCV3rdYySCnFCGFRB32Wb1AwQjsHjE7dyw6aHBBc2sEuhT",
  "key17": "2LoAJnhFh7TTLeop3ZMprb1VC1NEJkGSwrAu82NVPRiCyJnwTv7FfUoMMPgy5E2AKeqjfVYnMWfpb3Bjq8ffWeF6",
  "key18": "5eSdiuYyyruVrY4CWiGFpaNEHTUaVZkRRdvfXc7B76nX5JjiPVz37QEezfHspQ7dQ5u6RqqzmzHmZVvr1WxS6qWm",
  "key19": "4VEeubAaYsUGrWkkScSuBf4g9a29RkP4hzfu11rMhY2oYBLsaSrVpXbtqQBs7eNPwjNxhzkA5LVHLP9KCnbT2FSR",
  "key20": "24GFWtpYZz12uzC3VoXEbSDPZFUp4wd4JK4iJPQHRUayQX1VxnvCCDkGp3MgKeurzGg8fSoa5Vp5Rv6JbUQFjvKu",
  "key21": "4pYBR2sR7DP5s5Z8p8ivcGSR73qZVEUNfCJmcLnQd86R6xdGvpfGgSrCTPPpmz94kTe6c8bPouLJfPP95G2Xd7AW",
  "key22": "NgynxWdvoziGYvSkbvCMmBRQU8TpPniF7i73XfLDewzo2BLXCcp3mtMvrzLsa47TVXeSfEq8gE7bX8JCeHB3fMt",
  "key23": "5hqoVmPtssWa46TRU5cNr8UArqNDBxw7LHW3NwxFifippmK8MtZS2Te9NNngZLuBbVpAdgtnwQSNMVAab44J3Ms2",
  "key24": "2wmndyQvMXEdAFKYgan8S7JkqS4TNCGDKzxKip7wzHoeFeeYYtaJB5NARq2vcN2vCPpK4SDm4ph5ZYLqtKpMG6bm",
  "key25": "u5fnf9gCxD1g9vwhGTG9nf7rDVvFmUDSmgp1pJdgaD5dK7tGN2K64v6DtF8LPc38kDBTzgZQa6aJD18iCUwok7C",
  "key26": "4pqh7NnQMVdgeAyA1ZXKdfMftEVWpWnJonywjzBGNJah7WEv9kDy4yoxyFZPFCRgpjLQULgLbeeWGfkABgQkuHBi",
  "key27": "kKNW4DQENUxh64He8eisAXHqAhT1LQnXbzhYS6KQ4gWKC59YhmbjfWFLYgbZDg2o7crbNn6cpEHB6FPTFjyA4vR",
  "key28": "5iFSCqCJhP8RqdnraJLyLNPNfBNofAD29co87CXShiuR11j6vTuWU5kWsv6c2npMiEZtVVRNqzng64vtoG3JCfYa",
  "key29": "484GbEXR9hDCgA5hwESbDi6EQRRMtTTAcc95vJsEY41C9PLquviGgbtSot825LWbzhHDgeFJuKFcHYvDhkKyxqYr",
  "key30": "24BpGyfqBAzHpcYrzKmkmN6PX3Y9YKVqxn9FQUe3SmZN4wsjrHNpJSgoV1V41hp1i7rJDF9NohgPTTQQj34wxftB",
  "key31": "EBrmNLZPwi3SXo9wjp1tBk5Zj9JMw6VQ4SJFr7ED4mjjRCbcB2aUECyzKNNb4f4wDa7x4tRrVTm4j4QbdsGNt4C",
  "key32": "2CdsSZBfVPUac8t3FNtBxeQfPZ15ooePbRPGPGBx1neJkiJUNgt2ifrfeWMnpmcw8V2niM7QvWWpnQ36tjHa4SKz",
  "key33": "5RdQGDh5gXrbJ8p7KZxiG46rjSrw7AqkuS6sG4NMrDpJ3nrnZh4249bAGRcZ78HGEEFqSo7N3v6h7jFjQ8u7GYZR",
  "key34": "4g2CP3QT2ceQkaVAtc7wCwtjuxvvZkojwnSvM7Dwxr5SJjDmSVwJQ7PcCTCYcSst4ndEdLaGJSsBt26mY2bH2e8E",
  "key35": "3ib77wDtPDLw3xqscq3T7xGit9egeaqwATUPVsVpfNJbqjkQzoNKxzh7gJTdqfVubvSQbgVWzRbXm2Ejfk1exjhy",
  "key36": "5TU3RWXhAwYiiC1hNg5mzgnJvNKKdYgu9x4BYd2Kjy22ZgmRiW4vs71yjWHwpZo2dcXPBVNYyAC4PPNCgdTJGdqC",
  "key37": "uSvJnBQKib9yMEKFgPDjKvDoaJTny25e4v9w8fAvHYVvv7rbua3wKXs8tA5XdHNzcEDJMNoE9QmgzpJck62tVKq",
  "key38": "GGUaPeKMouT6geqvgcN87YW2D6TQnEmyasgmE7sE1jA9hpW1RC1CiWBWvUqjmou9zZNVcHwFutM28zQw4G7M9aN",
  "key39": "54jzdJW4B4bW8A6cHi9kGuDF2WWZobQVLBMx4kQQKj3YwBvXDdzTshGekhe7cg5jjhfZUsVyAsGzd7xQt1U9t81i",
  "key40": "hegVLfpZH3gEAV2K2TCqjzDRpHt6TrpTMbmwF44Q15sqbKaMfBVfYUG5Hu81j6UsYw4f7sw8ujP241WYGnSiSNA",
  "key41": "29FNKfP27ZH3YRV8P4KKjWr1uJFHiNH1LmPRP332S6K3GGY4Txa7DkevKiCRWs17GhNv6T2AShKq2wAGehMfZDUw",
  "key42": "4sis1dPzcUvCbm9NZedQ2bpF85f5DmRF44aJvypHktAyrsQKK8qe23Wm2yJvtpfrH1qqvnK6b3yhQjvnAq6h1w21",
  "key43": "44hosnso9Ezr2oemd1bz8aom35CND2yfzwAHM3fK1rYfWN1zZpesL28WA19iAUjpVufnMheWvrnBpgQc4TtFbLJN",
  "key44": "fGf3RaCahZbFPCvm6aKDCbUjAMtmADYCU51Z5J4C8GncxXptfvpm7dobxq3bBo1jK9zx32uX76WW8WYD7Py3q6b",
  "key45": "23EimYRByG936pvFEX2aPKv3TdrCvmmF8VaJ89hsCKotbiWxExbXMJ3uThC3NV7j4E679Am9yR2UxtouGfTMgnHo",
  "key46": "3eeT3SJ3y9a4xguVQFMcVsZMpNNYkvka9xGfaJGzJQ1djuLFgj1BYqN7SDqM8FeXqsK2kP3VnE1WyjcsCXXNHDEP",
  "key47": "36ub7W8rNYd7bqV9rGj1kmisYsmT9WWteKrcCr4QwpSxPbPi8B4j34MgCFGRSq9jFSnGk7bHDGf2E3ve6ZxWDyDp",
  "key48": "5LYv1PGMQP6a1ksS7CGetnjnAebPKbBL2cDUoKza64UWZqvA2uoQnv1gN5yUQq37GFUJHRgcwPtC99kmexnYzMAL",
  "key49": "1J8kGVwqDGMBZdbcm2tv9GHx12MoQXSJuCqcHyEAhTssAh26ivVEt5chy7CvuwNCajWWhGCDmyqrgNE9F53DpLZ"
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
