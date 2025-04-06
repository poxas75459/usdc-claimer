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
    "5HHxtdRToNbG3XCsaJt4FwiSUT2iJn4LVfuDCQt8ivej7JcuK6LrMRay5TJ6TfhsuR6B3GHa8MP3eVma7stGaJEG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3i3SCF7sEaPNEoQy7BovsYDeAj8m9PwCTpBDkKd7iPChGASZi2vX1KgN6EdUZUXteWRcPFGjzEeHDPumpanoFDkM",
  "key1": "59r3PV6Pweo8Qn5YqFEtBpn1CVt5KPo3wtWQaNNFvi1u4BwyeQGLmBWWN7bwjPp7ke3QxYdiFjzMuwmFKisZmDi2",
  "key2": "48EoU1rG1jq2C47FjRf5M72qa9P9KGXP33qkJnbkYaLW4WQrvmmhSJ3hiqTdWjju7vGxSwwwGLF51sM9yBzmNXK3",
  "key3": "z23dcf91PCgEm9pKycSHd4FDd1yYHqcPgDfHsMxEaNNPQSnQ21hgsdSedQtgpn8eAwd77LvvcjEcpXMbTTyKs51",
  "key4": "ASWBzuhZxiGJGMSqLQ9hUJeCEkZwNgk25YhRjxVXtWP55JHgzsMt3VFFTTdmqfM7qJUCkdnzW9L3eK26WfDT3Nt",
  "key5": "z2XHiYTEea2akdvPPX4ZRYHPLg92kb5NtiNe3CtE1xCWCaHAM3gZ7UfhDTKj8uaxj3PWhc9XzUp45kSqyRcegsE",
  "key6": "2gaH2HzGUASNp8gtydWU8gE3G9k2rGNNNngVnKCJuh63cz4AUxC17PiM7i7MdSqgPhPK27Dgk1mVX5xgxx517mmo",
  "key7": "4nGbfqSShu2eDxwAwtN9kMg3kHG4tsMRm1rT1EyTRDDsA5D2514nJwLCQceVV8ZBj7m87uDtXrdamiHopkxKpX1g",
  "key8": "46xVULDu3D8qhLywMjdC4sa1AT6L8rZqg4NbY6mJekF4LGxHV2edjttr8FxyEaSkHymbNNTdqfo5A62UL9Znq9KF",
  "key9": "5Dvsh1tFEJ8gqJPp5Xki3ZZVXnZiMgMi3BFdjsZtjdBAVV1KBzgbJaEoHHGPCpMG3Kh5e48fWCr1jWci8j8oVG8t",
  "key10": "4EnnXPP8SR22avmCiuJc5xwJMYLosg35XjsYHECK7qPP29F2EdoHdvCwRokcFaXPndjEyLdTPjqQouMvZkizpA9Z",
  "key11": "2qTvfFokjxLiWY511iNziFUtwdBcLBkfhgRSM9aNzzCaaYTYx9nxpWDT4sJTz6E6F1ZLjETYSV8uyQn12dKsXuS6",
  "key12": "4NBGi1yX3RkJj82iTSrfGd54L7n3nVuMmBUiviZekDJ3vsMTiH77SEsjzEo29ZgKcMGia8vdaZ9WgBChgqwggwVR",
  "key13": "5AzNtT1wvKUp8jpD39qcQK3AnyeE8kZbVujL2n1yJ8MY7p13VQ4kcCZg2Co5tn3Qe7mm3kKw2ZwiDtsDgKquKwW",
  "key14": "3H4LgJNnqdrvQx5WUj5GGNpxwsgEme6f9a2xR1yGiGkEVFn5H8sv82a5Yd3hmn4Jw2jpz7eis3Kb5PBLvfXWVxrv",
  "key15": "5dS6G4geGsxxqKTJieapgfc2xh9WE6buc9oM8ZkxiPfi45fYJQo5WoYmh6BcjMdCJsQFECip1iJqhMNHRATSDCS9",
  "key16": "3BvSJvN2hAHStmWDspbYRNZcm4kyqDGeTsYuQ4Cu46MeQ3ZRnnU2YXBoh4Qi5CwAQsaHddgpnkvDKbTpxnhg88jy",
  "key17": "3pDNkCzQLw4xPeDEqpVi4BGkFT9gctj3CzxQ9u3jLAF3B8Zc8toovhmZ62LR4UNUr5PiG3aa5beH3KXUYdYujjkb",
  "key18": "5FFFhF88Kh7mEaBvVEhUEfwqQ54ZbxU8m6KtzkvZzvXaYeeFkdYBeNdX2VJqVqPAc4pcMbT3pQSQ2mKPmuMrcyiu",
  "key19": "3fH68TBAKgCV7zAhtn3hWFtande8CjuYDVhKrZTy4Q8VnuoRfE77jLhaLKc6Vfx2uzYvsp3LK9pNy2JoYwigi7Ms",
  "key20": "4vPxdauuRcG2wWi1UHvywcXY3t9QmQ8iCmadrZGapRvnRus39jCWhJgpTxf6cb1Ej5MRc3KsCgz3fkPCX3LixuDV",
  "key21": "5uUEm2cjt9ii4QZqJ8xUJBecEUXQqTuUdjaUTcAgU3UG8dPvyb8hry9cYXzM58jzx6CZYWZ8iyKMhAqaYoPv5njk",
  "key22": "21ASPq79h49GorjyNdpXo2jozUSRhVxZbAnk26jXMja9Sf2PVFY2R6RCcYVPthzo43CEj3XnKwXpu3yzxA1Nrdgj",
  "key23": "2vyKs2HE8yEKG9i2NNcofbxUYrvQKppH3LpyoQ9hs3TM97Zsrs26M9LtE5fZARQfcoS4stBTRSJS4PPcA2RNAHLF",
  "key24": "4fXTLkRADYdyAvUbD8a9dfXE5FGhNP3DNrmoUZByHZwT3ehuGAFYY39KQCtTGwRRryTD8Jrt1LFRriXfxFXdZD8x",
  "key25": "4znjQuzSFfiLbgkZuTrtojGnCBBvx1xvKq1CogFpNTLWHaEHLsqF26zPZ3AFT63eGAqMXakUy5rzzZ3ZbamVmKXJ",
  "key26": "3oKX65NMUnWgQLU8m6kkXkUPwQgeXBTT32zgGiNCDqGA2dmwxB3n3aZXqQZaHwHjsj9f8AhUc6dvLYdtv3C1k3k5",
  "key27": "5WVtrLTtfUGAHLvNYdGM6cp8ga7bKg4boxLxxByN4yiLAHauX1tF7XLvqPbnZqNfgXf2EsCfRCae1r2g1AjNB89z",
  "key28": "5fDzmofeYSkpR92bQ4w6YDoJMyqn5dzi31zAe3e2KULLFdecMUe6StNvgX9o3AjYzcnFMd2bvL1oNeLTAr6Tu26E",
  "key29": "5khty75sHbWHi6ui6iMaMoXoPqnMvEUnAHmpmmSJHPxZ8dWDyFxDWj4TqDyKeD3xQ84Fa5yE3nhGACmCty7qWdtd",
  "key30": "4NWFs4nqkTRmoBMdV74Ly1XXkRUY3pK64mj89kzkBMbDBmyNWnKPLwGqvT9D3AbUR9tfskcvGVG5EzYER6U3rATL",
  "key31": "rBfggF4suZBVPVGtaoMhvC5DTMguAQNs73izQPiEk4Jw6DSjytoNvKMS8zFdkHaEufApT1v42eXcTQC2j9ZMTrP",
  "key32": "4hPX1o95FFPqoVegMuPTb4AiTZPkfzT69uoqXpBArbtoP7cAYS8iXvd14rDyZzn2iqqevcdbifwUqDnjkLDBeJAa",
  "key33": "2gEy6srmoxUybRX7sgsTzrEWKZSLubZDdzjjeWeutNq4kw4jm59VsUkhoAaBmqw8rJA8f64FCJYzHJ9gS3qCrw7F",
  "key34": "4E8nGQRAXuHRunKGthDt44aP1u9WJsapiq1T76eaetgAPfais4LpxcapfKHSFEMoVbexwzkLHVDVoxf8q8vPofvy",
  "key35": "45TeasN4AApMdPgRG82WKRLmPLN1iqcRrMEiAzFsz3C9ndBZ5hZB1TuCvBRzD4C1VhD6DzA7AKS2qRwf2gFMzExc",
  "key36": "4Gq6vHamSEHEzUV82tKHLrawyECpKZEHWKTjyeXoWuR9jBLtKmTMB7fofjM4g2Ucd7EpSJga6yd9hvt4B4nNe3y7",
  "key37": "ZinzWg2Jr4J81hYCjA5gpwYqY9HjQJmCnaNoL6cg7aDk9k3RLK2hJjVDj7pMxgtqPCUf2CQmbhBM97ugyAeDDeo",
  "key38": "3RzSBM9yg8AA3jaQCF6xvWU33YtCRRK1dzKRYQNrFfh1FiMu5Ls6HWVuURbfQgysLiLXXPA9AigkYkPSpHwr83Ax",
  "key39": "4M9G197LtSjMmoXEKXcwb2SnaJyFJbpwwhLGPYVRUSSNAD7V8rd7PCjFnYTr8PpXXCPaCikM5htEvxAq2sGVfh6G",
  "key40": "3EgCQFsHhSrmbhjq2ynDgXyyb4rvZzQHqp6aWeJWfKjQoNXwurxP4BNg1zioPCwWEz7PFQZ9WezChEh1sb1hcWMi",
  "key41": "2r3otiFQZdAk9tPSuKKb2YbTxb6zM49rxo8yazCbGL8e9Wjp9dW311c2qDXyqxnFSb3UzWBb3koU7QAsLn6wSe3e"
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
