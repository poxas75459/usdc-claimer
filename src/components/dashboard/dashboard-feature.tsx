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
    "2HmTFXaVj4Jc1z2SE5FfXQd2bDMkRU4RCqXUQN3VKhJVo9b3qvooSBXRsdhQa8dfnb8EwE8SboCTHnRpZCFxhBJ3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3uTjgECm6MNq6H34Xb91JVX8S9B34Sg4V3ahWajFDPK9odEpdDTpU3g67kE3aR2ee5PM9kjy9eLoHSCs8EjQFWEJ",
  "key1": "HQAHUVV7imFvGMRWs9yTdA1zwGM7uNXBhf711p46jM37DvbvBJEDcZxbqqqdCRWyGFmUWzL65kp8XQ9jmgKETU6",
  "key2": "xZpkFBLsGsyPtvETtfXz65wSW2r13Za2epgrapPyS7red68h7UTu9QYw7knUtGQCqAx4hsaCG8pcv6Vv74Z7W1Z",
  "key3": "2snjzahUgkyv3fcy1i8Ukav79KN6kuiJSCsdaXKXtxY9hknc9ZFWdiSc2JqZ86o4pHUSSnekSacoBkboqR4xsMBz",
  "key4": "2JLp2E31ZhUh76HCcE6YywGFYUrwSq9f7FdgAcnzDrE8LNdrWAUoZRnZ3JAb3rrCS8F7B6vrneDxVAnCGDtJcP8i",
  "key5": "3ChCzognCQ2ZMyhPaJTyRbfw7VC1unj2dG7ESBRManmiXzyZv93nAcLgmwFR98EVyE7mYdNGam4BZHPqLcf6zCmz",
  "key6": "3ncDbcoMfqojWgMwPcgzEx61wDhokZxhzqsbVoYe7NfH1uuNvL8GZXDzzRRLgpZpN9tccCy46kvae3Zg4z53dAMF",
  "key7": "CFRyqDQizRU1DzPofCTXVFdeyQvHcmwrL8c4iKD4kRYy3BPwkswgQivNffnjTDjgtwHcoHGxWgeaAW2bGWvwCg8",
  "key8": "p4grWJgq8dy1MmJyuQ8PTMpts5hPiqaNe5B34DsacTcPuHK96FSqjyiYn2XEoXZ2H7doacU3zdup2jnwHhn1hHv",
  "key9": "5cMEZktABZxGwLgYwS46bpDDMP8HUURDhpd9517jmSH1Kpzsg2wRHsCVUGSW7VgmXxxRBRHmAvX7h93JfHM3Hqen",
  "key10": "4zfAspfditQLVQKtTWWA9tFKx66JjUEeGf9iH8qHosynVQAiLNPf18RsxPsJvjjtERN6Jv47M6vJ8JkRsXASxuMe",
  "key11": "2mwTCZTcq1EwzJe5MnDW1xyigWWt1SWexVNZGFo2AHLaPFX6dxbKJ7vMkfcRRZE2TMrn2JZ5xQcBQM7hPr3ojEaK",
  "key12": "2zpV8MNnokvteVxRVNTqswLifSPLYTLE4hiyzer5xtmkCmizLy1zTXSnQkLbbHHNqMR8cyU2JajaEcyHnmb69gjf",
  "key13": "5np7mbBfY9QMraE4rw5iTiqBtDcGkkHmgPSGdyejvBuwV4HzrrtRxwC8D2C7wbEisNYRhYjdvrhbSVnU5BmsqLd6",
  "key14": "5QJEVjTAV6UPCrxKaX2oTkk6Zd1XvXNRiXFsP28uGpwP8Y1yxPhiKpUxRuvkDUqtmg7zag5nXWuFJrRZZsBz8xy6",
  "key15": "LtXN4djLnbp3H99X4iWUaW4vSpj734bgPGyWmMaYbHm9NpqGQvMRPaTRHt9wMpZ2GHzQme6LXA2G9VAzfKUt5G4",
  "key16": "38hThzVWgz96Jt53doEyDXG7d8a6Pt4bx74w344Fr4yq1f6CWNyArmJLGdoE1dJV6q9DXV5bZy2YqgPaJYeAoQMQ",
  "key17": "2tp6zsTTUbAzVofaHSTxiLqMCxbwM1bCT4wQcssd9jto8DBRDgcJ846fEqXnazPg4ZUAy9rhWggiUHLo11n5EKBL",
  "key18": "JKt68JuAB8nwzjbWxzb14Lrkt9M23FxW2WoKZZKpmWGD3EgoX8RoJAZKxbQMp2FyGrCNYPuLapqmh9FR6YPRuKr",
  "key19": "29ecitoxpyJcXGDRBDu7tuxdhobLym9QS6CmdbFTa2br3VbajRsYEuZKPBiDEA86VN8rpTDhCFeiBEwftH7Huu1a",
  "key20": "4giLaHwQZA3tmibDRCZ2MAhYycNuE3DtDBnmHsXMGNhKt7ZVUTM9mwoUAnEMTGLztQPST9B8XWRxx1xYw6qLUUd2",
  "key21": "5YcSQdK7JkkeD6kfCpFM8QxJze5Dcv4gjetFAvPutw2fVF23d1A3X67pDWLRRE5secQCbG7Cj9TBHSSRMPjFHQcZ",
  "key22": "36H5NS7vHcinTjANA34XB5RHiKEYQqng9SoaTwTyGXjFyqcS72JS3SA1fF7rdFocnQGoDYV29Y2PirZFzyZ6oFyN",
  "key23": "41iaEkvzY2Rsqk6wrCdsDvZpdCDoAKx8PEAr1ie5sYfFAtGFbSJC16r63TidEmrqiX4KA9aDFLLyvj5vdfcsCtYS",
  "key24": "5xY5MdByw9gR2RuTs6VHQWgTqCD2SHTUazW9aQ8GEUrvX7zrphfVUPr2eBYk7yviSXfAVSvwFtW4FkbjfEjqdhXB",
  "key25": "3Mur4Q3sycBWToGYJHnr8NP5cbuV1bPpc6scvM1yYKwmp4oZafMqHEiM4upiDPf8q52CwjtQAW5nErxoV47GRDKP",
  "key26": "3ynhp55HT54ZvLNaWGUET37cZCKkAagPRtb3Q5jNpduCe7F9349AHgJGqCBp8r4h7o4XYNFm4e8MqrnoLSXeg9D1",
  "key27": "5z2zBq9cWmGze76wYQ6KWsVuRuTijKH1weBwFDks1gsuZ48rzB1hZPGz6ERJj99VtqNC73MSGYmV7YRkXQ3rHocF",
  "key28": "3nUFi52Br4Nwz5CG6gyVHxoZSpwbkaiQVL6X3BhhBeDPTsFrxhmDAgWMb5kX6ifiHNr1tzhhmnUMUriDhW9XdQaz",
  "key29": "6wWTBxi3PcBSgFjMFJfJVzjt2YPeBM1eL4p6Mt1ATACSKFcNxS6BVLcsyKbgwMNdFYaGSB5GQBLWTXcupypyw56",
  "key30": "4mKh33viDwxwgWh2dZf2nzY9nFHUEBqur5HWzDfp71kLdbmVPq45fsEv8vWApBWptR4UYLUZwXedVgsnqgaycbHx"
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
