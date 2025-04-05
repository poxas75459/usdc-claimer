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
    "3pJqu24Jh2CLEfCHCuCYyKes9uU75ehCJjL8TkHD8DRK4UMANctQ5uUcBnQEUfpxRSH6R2Nj1yNhAmYSJWfVfSBy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "25xLJhzFjp2Du5rp3FzFVXLpnSwPEPsusM6VK2Ars8m49xDTh6xaScCkmJDwe1c52prtuFuVgpntfQCWComNWrts",
  "key1": "4ouhWYwzLJD3Q8MfxLyGLPv9TWSkcKbU1HnD3k3hahiXGFKi6NMXob9JfsSywLyb6yaZeohAZ6F37WMjnxtowyx3",
  "key2": "HCj7RarQP8SpNwwZbePWFZk4ZinEWyQT4rmYoUunmQ89V7AaFRi5Z5m3gDXfvNM9A2v7wXVbH4ozsgsaV81vGhX",
  "key3": "4KMGBBkraj11Gj2to9TpkbKFk5Ap3816aecpuXBBrP2ehEs9BTjyLFaPinXu1ABrc47X2FWA7gDWTe2Eae4Bumuu",
  "key4": "3C9TeMRj4MzAngYP1s7pNFiqMJ4cZmwVxQHug2TB5rNJTKifgYQbpAL2ZF1oLcWD1qZJrTXAApQLcqLNCAzENCd3",
  "key5": "4ECQHE9ZimF1ngc2LkAYkzcxq9QFCDC2TLhK7TYxaQ6oMAViK6mQTpsSu5SWzuM1VVTiGjDoGx1tQFnjrq64vGyz",
  "key6": "3cNvMQS4Hc5vvvr7JGHqAqeorkT4bN4emmaHDUFN5Bh657WLcFmKAEKTvzLuDaD8ni9CWMzzBCsVdum4eQANfb3Y",
  "key7": "3L8dAhV1MrZ3VYs4Av79ct7R74Z6BgkPgEzSgVJHLquG9rR5R3iSbW19J8HVmYdbYfbAXyLbNjScdYPN3jbs8Ldr",
  "key8": "3fmWezgffZY7H776HLWLfqEr6agq8nmkGCfsFKvmPeXmZrwB5NaxEAcAchnE5GXwPXnun4hzQQnPCaFySdHFgKm1",
  "key9": "3SVj77wRavfSLMepwZHhHn7ojmdGQ7bMDJutqSjJobAPgrCu2sv5m1YRJCEU5hMNCYXjUVcMFUmmxuh2GfnW5HTt",
  "key10": "5wviqngTbHJxyQTnBMQwY7mmvE1maEfJzWGoaiwV7DzDeKsaqNP3Tgf6FtenL4ebWiBHC1ziNzDESQE8fPeuUSkb",
  "key11": "3EgKP8ePJHibadzecuH8sHaok69YntDtpSPR4zjRY6x5J5V5458NQZVD1Zdrem1rjtoZycMeXHi8cRHA2cZbtwSJ",
  "key12": "5o6BHLtB5wgJ2Brhiynp7XLoALqwzNjxS8nFey9G5VmREhPkn39i6A9GJwY22iuiQXjLr7XpL1s65tUSnFB4mNMa",
  "key13": "xA1c8do5VHETqDYdQDW73eUuFDGoLFUxF3EkGduUgjJdRHEADJiSqfmFbUbXEr1Vc3HJee3Asx9DPjyvW7JhGa8",
  "key14": "53WaeTsi9gVJBkUBUF1hwkmuivGFcSbaQZZUnKKkV1XqbCBzjbz9gi7eDs7o5cSyauESwmVk9x4M3rBiD3uDdBdD",
  "key15": "2qQo3qRgVEeKrcxwhgLpG38e2pP4yJhohYaJ6SkPSNEeqPZJxgrjuqsjhMgqpqcyAj1C1xEB7yfm4oUji5994G3p",
  "key16": "5UfCyg814itqEDCjWRXfA66fHqYniMJuiudiJiiQCkjLH9ZS45gjMzqVDGi4rzz3jgE7sUBJXJsSjFcpWLTB7ATd",
  "key17": "3diAtF8bAB91eAcXxURYJUzDiLLAmMLKvjqyWsgeCitfcLhfMxJqejX337FxSiVBeky3wLbTThx1jK8BPQTNF97Z",
  "key18": "21C7cHWPZqa7u2vhkUkpgxY8yP4krffdY3VzwQgS7KzXZNDVhsK399YXhCUDNDthLEUTUdWVZY5oEE19H7f6n5Hg",
  "key19": "3MEaeM4tcfKjEfsPtWsfRerD9CfufTCaNPQC6kfNRRuPTQbq8sEJtdVcqXyhGLbFBEaDxQ9XVe5E6J8YEkVbKjhe",
  "key20": "27Bx6LbHcdxpsDVMVTyfKt7cEk4VdGvzyfdexwrQs5rW7r6KopbH5yeV6KhVxbmuDZaMNHUemoV1hFJS6epACk8T",
  "key21": "4mzpHw9ZdKjKhwvds7Qd4NbBd29n8vKugiJAVFKpWV6nLdBghHiiJZXcxcsapxik6XUPX3tBCPBufVVymLEW88Ma",
  "key22": "2x2ALMmE2msc7v6Fw2jJQ63gm2s25A9veUpbiiyNLBeChr64eu3VN3dG74nbvCQNb7cJ82T9PWTaGmtkdPa1Kix6",
  "key23": "eGugNnNoikza1ZJxNNTFLr9jm6uthFKtfmUDSeFfQwRoKGt4qpeEvgCputp3xA4sKCEU8EYMmssb6xEjYQVjAMe",
  "key24": "3sEiJbQBHboi9CCVJXrGNHj99De4BznQDdY8K5no1SrJ2t7LboWSXS4HJKrEeKDEeXEG69K1RxmJ51y9mTKEPP5X",
  "key25": "4yqvK6mwd9caU4hpyMCfDJeUaFgu9aYMEz56oorp5Jj7FWtPvW4KuSJFPS1w9LFAJGCZ7LScDRvLEazS682J3GiK",
  "key26": "23qeRGVxb1MfedFtuMJg9JgCusE59ihSVWiJNfKz4KK4UjNUtqGjq8csEVUjaiN6TmcgG6nNbxnpdKS7KLCNxdhD",
  "key27": "3W1VqXJtnifZDo41NjQ7UHULgg7i1TC7ni6j8UB6bkMUVvU94N4qhC2yc4VMeSttx2JyndiAp5Lb2j3cbdaZedRh",
  "key28": "4FuQJMeuEyx169anBy3btvqTNTUyHSJCfpVCzrYRs5KJ6mpCJv2t9AfHcXfatix1Liz1TxDHhtvWfkycEtFqAgf6",
  "key29": "3Cd8eBkrgLQFGXa8jrcG4grsQNsLCkH9RL2TGtvCvTMNFJu8RHNfCLXTywUkxKVtUAuS9vJXza2o7JK6NSNpdK52",
  "key30": "5hWENS5iMRsjXDQjTyGZMF1Sd89Dk8kdTJfo6YAHtsKsmyJFUDVLurYE8GFU5p1gD9KBs1oMth84GVLyA31mGUDF",
  "key31": "2UFuRTKeajZms2cRvdqnteeXh7C3rPHJjj8wSkanUzvwPwHuqEVVmgSdPRfuQRvJW7j5vbSkBpXPppstHXSBM2nQ",
  "key32": "2BeDzb9Mv8EdK8geJoSbNSJu8okuouAqbEjk8c8vLPEkM9uSgH4KKycy5vLvQJdiYq9d5VMqaESk6sNf9mmrMAep",
  "key33": "36VYuiwAHjvfL9feRR9fQfzTJoBgMjZWMA3fJcRm5AT43phqVtpzKBWn4zz4vFnDXDTPhKAxh7g6nxUdvea8F3JA",
  "key34": "53Cnt9eNxrBLw11r4VCctW7she4itxJ4kQdXZpaR6jMPEQzXkPnYpLb136HjanVCTvsJfmTK1u815xXpjq2PCm4n",
  "key35": "5xcLcnKPgkThVDEsJ4F3qNxA7MPcgRFxTNnqa93J1P1yatCEfGtZGii5Sq2yTZDVtBQeYqMz58VW1cq8VPRhmmo8",
  "key36": "23abCK7pVQr3UAqhR14kWcJFmeCVM1ebmdHN6GaVTyXdQyxBknKtC238RTA6tixnURkpnK6JQsPNfXWrbuC7WpCM"
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
