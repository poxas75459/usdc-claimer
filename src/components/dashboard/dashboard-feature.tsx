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
    "RZF67sE1vgwWiR8JSLiqR2R83GYydPM3a8sS8ptG2iCRV769Roe16Qj31LuuHsV6RsUbTF7K7EcMScv47VqcqNG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5XXUweDh6KAnyiF6hgs4o29SGemS7EoCJhCejvUzS14Gtu6F77EADBi3Y8497bKhBikYprGTVAMv91AGBDBYuP6n",
  "key1": "2fk2gJoQUqQozkwKMGptUm4D4LiZtXZZcTzp8e1ugzJmJnW2ySWbRuiVx7VZnYuiiMaQ5wcU6D2QVZ8RuTRwxdLG",
  "key2": "4hwLP8D4L3jfqfoU6SbrZw2gjNizzC4NudayawTyonhYzePzskeFwCzQgzHH5E2N5Rp5szjJ4RTrsfVSFebSuPyi",
  "key3": "4W6MWeufqrjgk6WTYoJif2sRYkP9fhJY4yPQEkzreRhUdfm1d3LsqPAf5W3aEdc5XiubPmsGfzyPT9BNJG9PfshU",
  "key4": "5kvKPLBgni1k9htU1GTmgpWNfQfJD9EFv7N8C6eMcRpVgX1BGUduQGCei9VHheHgGXJPjSpvn1pPTacnZrXSEDpV",
  "key5": "oqtmpazXyJqcfcBssvxa6M5AaiFBkTGLumP6o3nVpdzUiguoEicuJLGEWHNG5Xdv7SRsSqCdJH1djv8GkovpGRW",
  "key6": "498yZJiHjj29srJGQRgeEQrx1zej1Lryf4sG1LQARF6Tx2Rq4C1k1kGxHwiuK2CzRNmqWU69TAdBr4CFiKPW5SS1",
  "key7": "X8op2EkBMF1xVrzrDXL1TpwhC5Xn2Kzv9bqEgvqYwVuz88UCXzdqacedhCmoajRKxTkSyA2iVdYqj9WdnV7hH5j",
  "key8": "DFVhHDcjyguP3ypWMdWv6gAi16dutKjBM9LbK3RHh61J7Yv5p9PvRHKSwLST842GAMET9HujidCFUt1v7QjKREL",
  "key9": "3sjFzqU1Bv7bE3rdF4RBhJaLYHWqRfNbkABMepUDnAAy5beN1U17xvfunp9U48A8FZwgMsRGsetQypuWgyPoyKqE",
  "key10": "2qSCgsctsTBRYiithXQLyS75o9nLeLi8n6UtMYft4VW4sAVb98aGx2VskBXmKmppPcNFdbiPWBYGsk5hCJRV98ER",
  "key11": "3sm9WQAqMNi34YUNboXdY9NYmYDv59CpSDdYKpZ4uMwWM3bfPKViXsEF6o7QXaSwsp7DiscqqhCCE6Dud4J6Vx7s",
  "key12": "662ofMmdxbz1xzGDJMY6ormyQN4ZK7a8icDkMDx3cHwL82Lq7GdDvavSqRJmYahwrK9Srn4pKdyZwMwKf6NFPYKr",
  "key13": "2FsghJnpGR2LwgWaf4XsAJLcy7euBuZVft64QqpfWgPxGAsdRgU4JY7Ced9tQacp9yUbZdMtg7m3XcBaXbScQeez",
  "key14": "4Ks7mKqFYp9DRJkJV29oVEhcWPw1YRtP9hyCxzzc7uUxtuPNxKgB7m4sJkaECfdLZbqZ7eQ8GTnSExvLUAT5XAgb",
  "key15": "5YagaZ383neSyLSLg54KDWYXncYt8sz3ZJw7gidQydvBQ4ZiFdk5WMV89Zj1PXbARRiUoSY9uMg68fsFMfWSdzP1",
  "key16": "2HLvm2fRS4Eq3PQ5fCi6QZpbTrhMeJRnEB9MTSou7XE2VuCAMrgSUSByZ9zfjQpks5y5GpsLuNhJGYkREMq5F8vT",
  "key17": "U3rVmh5r1wfasxigjWWktZyzNMJgqJmQDCG6YePJBoddc7xxpudR9KQm9HPyLyVRyx55KouX3FDRBjA8gvgnxeU",
  "key18": "2dbXBaiUFd5CzSyedbtNEU4jLSBLxZNqMLFu9EuXjvMbu8J9ACWKvULNF9kdfRz6dCFMmSqCXF2694qoRhiEAWsu",
  "key19": "4XZFFiXXUe5jnMr5z3zAdaGZPPBPmVLo4xuo3gw3ZqBK5YgyuhFPDUfWv4NRDs1tPw6sLxVz3C9nDKmYg9rKkJjU",
  "key20": "51QWMZfesJjK6V4yv9XkhEGAg7vUK5FcoyP3SgEnnvRX5L5RwSES7Fqp3gFuR9kMk4jD5UnAWycdfPtFGgqCpwzG",
  "key21": "3ztyKkGVDqdoTPJe4DSfU8Pn3kGBBhodZWRda8EXqUmzD7CweqjSSRqRTYwUxkFMHQvm2UeWqhDpY1mnZJDcaLPb",
  "key22": "23CwonQrR2Da3q46x8Vo62gkB9rH5xX7Je2T4rzCNWXoW445Td1auiUQ1j3TjxFxdJDobzfpuv5KiWvpez3XpCFp",
  "key23": "3ZNezWysjkEueZo2USdd6zTEGFccVGPBtGP7wnXEWukDNPXV8fWh472kHV1ZrXHazLUFBKDkE4P5bh17bUZbeEzU",
  "key24": "kvD6KQzukzQaMk4gnKWBL2oKeFVBkqhYDQ3F8h11i3HxcGmBZSUQCgqu6NcsQdURZQZdU1swXmGEapBAVsGK7aS",
  "key25": "5tL3kvsxA56FkZoGSSp2NkUJ2YFovnVC1HPUYcrEHdy1gviBxZVbaXoSeBRrtLQwNdxY99BrAubUxfmtautqmywU",
  "key26": "3cYRE6qePQ2KcvTEVR2cyppbE3TLXaEyX26mNvwgRZmRUZ3iaZKgRfCxkxmqAtVTxRMagMFdWyfekGbFBCrxXMmR",
  "key27": "4H93AuF4A5mLQKhYj8FWNggggVMBmwdFeX54BvFD443p4s584JwJxUKuHzA5P1WWsqXxZcJC6aYY2UokowVUoVPW",
  "key28": "5bu9W4FiwCdXv4GRTKf3NZvAyeVbp93yonMafjFzzM3YePtqKTa69aL3PEakQYfSGNDnVpaczBEre528Ei17irs7",
  "key29": "3eJVr1ykbhCMAxp1TogvLy3QwESkDkxuMALym7TokH18tKKA2zgvFoHNL95JWfXmPJZ9RfQYkYWtMxWs9JK5uYZo",
  "key30": "31rZPomMPhecWwdsU49GuwKY4gfYhZ6FARXinEE5Ccpq5sVCmjiEnUTqqnyKeVdF96JoxH4XLbvEw7az6jXMBS2F",
  "key31": "5XbpcbE4C2oHCk5nmi55WEWgR89jf1mQgzqBBNa2CeGQEFj8GzfyEyh4JULyzARVpRwwS2Sc8Zr7LZBmi2sq8GiC",
  "key32": "2HUNLo8miLBALSY4KWmMQqwNoFZYkzou62bvKkxGJyNPpQjiUBi8rncJVXyuG5rDZotmFHezjP9PKoTpePkYx5rx",
  "key33": "42LXp7B34PCGoqXMHGrMQYnVow23cj8sUw25NcfYJyHJXb8ZEFvnqyHYLyGU5ViPBAZomZNdLiXXsdpxcuZ3nRYt"
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
