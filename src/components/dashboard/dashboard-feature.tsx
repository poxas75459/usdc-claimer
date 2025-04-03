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
    "5dP5Y5GyjwVC6ozqUq77KVWDAnqBvfW5EAk1Mw2ZyNWHHkHiJUvSqjDdEVgAaQDvo3GzsNnCzVscUiUy46T6R7LQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "61wA7py82QavG5kesPmiZptdo9ACzwTqexkpnRFrn627ax9wnZ9BsKJ7J1LfqmzhnJtvgycyeEvuhWgTTTaLygVw",
  "key1": "2TD29XTFdhVPBSRZ41Z4sTQDMrHfgeBSg3dT45rvmeoLJj2jCxLJeXwfRWoA8CkkYfhF6AUMDLWqKa97R3HuH25v",
  "key2": "5gcJPCK26YLj7TAsNmq9S66FazEBEgygNMVwjtBxmdAMBtjkxHQxDw5oxJkZBHfYtNRU9X3raN3WEMNjiRLXvU18",
  "key3": "3dUbD44ZcCKtK4b7q4t9YY34n3eeH1LnsCkthozFcYvHnP5f1MPLFKpE3Dy72tzo5gcuUmR1Qi6CzcHawQY3Ni26",
  "key4": "5xQKwTPAWdPnZENHv8tadkZ5bK4ugKq56125frdijPN9zkot9ydCPq3Db7MyyHfoeT4Y5tjUCkfTX1CT1i8eHgek",
  "key5": "277j8izQeAdPtxXFUSCbqTkVVf3k225ybgFWDSMK2DE5NFNoKgxPNGrTqGkU8Tc7MAESz8WZYevcXeCaaJ7Che6g",
  "key6": "3vuDkTFt26oZNp1r4ebdYRqUMJBBcKwnnvRzsNYV5ouqdVQ9W9teJKijBwbgDV68PNNKFtLG37gHVFt3bz1DLNC2",
  "key7": "54BkoMo76K7aJMb5JgPazYQZnhn82GxvENdin89UZcxSPQBjuxQhPDGJFaX3bAtEXrZVefW67duCznXiWUhhYHR6",
  "key8": "C4Z3eWi6fBcLyuMkyWo6JxwMrFvr9QPwwntahoYE2fVNNc79r2w3rYhLkF7QUaAdXvXX7CQzE82MwqxMDBdrL1a",
  "key9": "5QZQaDuRe95TJuPLU969xi3hfhghpC6ei4PXCKk7aWjoejRJvMVaSXd6gE5w5rN4zM2NeEW4S7a9sgwnMAr45kgj",
  "key10": "huGdfKaZT1mgag5by6EHjenzeFs9rX4JDnxa93jSxs3hE14fxVbufhYZQTTZy8GqWjgQ4jrCzbFq51L8iFMv495",
  "key11": "uURgcbuUJF1DEWXgXWFgf5XKnNkZekBBi7ocuwCAgRmwHTcLKQSswuPsyBFMWkFBXB9MGCvN6sBzjaf4Fx9TNWj",
  "key12": "2nN4JG5C4UDZJ3NyPg86UspEWJwJ7bri1wZp7LFD48QNYxSukTQFthTV5zWo62JVRQP8Ce7yntfAZrTFLvauzMvK",
  "key13": "411wnSb4YwQrv8hSku8MWHqFdErTq8PVwLFSgMfUw8edmV9mcqzSDGdw7jSFXyE9hS6drVw6nkgCFGeL6RC3sDNg",
  "key14": "59Gc76jcJzF4fQgFyKHaegihga6TvHCs6osdyUgwMVDR7DQmn56LSxAdvAMCRhUP1aEKWNbYYHv6SMA6ikvbLjw8",
  "key15": "Xu8aZjYa2FG4KUBXSPfEwf8yMbAR6LXuRrg59N2vb3Es94tMsAURYhBmy1KSBHsWBWdPcpuNDJ6cAWTFBLNKN59",
  "key16": "YHFhC1HVRhNLtMGiwMap9uGEWbjXNn3YesdVTPDKU5rxYjiH6DQwcPQPQn9xJ3HNxkpZLqhcWkG9qpmAjHPmwja",
  "key17": "4uEphxkPdioiXBfSGQFG9UKc18jPN4Zj8Q49irtphh6Veu5MrqQSJ3eoCkw2tXSQjLPmwFyJi5zAMcRRURkeoxDZ",
  "key18": "29JaAfFwTMarLoFE3usWx8QYmna72QNDb6XuUpYygRbMgTy8mcSF9vu15hgFoso7TxYLeBLaFWKfKTyhwsK1qQkC",
  "key19": "5utkq8yuB33FtaRikeZNj71NHsyMFKgZDyFPwmdBnHPs3oUEkGVvckxxtpA7ZpgzwLvvDTB3Aa3nbG5ix9khe3A2",
  "key20": "9LpBq61q3AXHYGRZQdUgLQMFHV4rokQXDY8W4UYDoUTSUsYNw7FmCrHXFTiHJu8RNzVKFjTw8VTdv4nGoMNFcRV",
  "key21": "4CSM4kk26XKsjZG9rLoZKFjeB7zXamEF3S2TzuHZAbbEa2vd7PenxrJhtgduU8fqYe4gA6c7xdayE5BvQFPyfNhP",
  "key22": "5rgBLvuoBmkNxiwpnyhRmtoxRnoUZfMRRfFuhUZKMq9ngJM4tnFkaw3FJb5ez7Ax5968QDpQKjxCSx3J22P97xFr",
  "key23": "2YHNW1tQT762KAsg6VRZbe7EuCGMNdLuEBLCPsZaXokC6NoJ1CmJDdPXYdFftnydzsbADTm633eTLZDAzJfGqPMY",
  "key24": "3q4LgrodGqkfS1moU87TQNJ13tYmjKigdeqRDKppRe1t9zgUHBfuGYpBMqq4sw48byz4b9PxSaTa5FuXWza1unbQ",
  "key25": "3ZUZjxrsUsPhLUDQoWTZVR1avvGmbzSKd8ToHWVEp7nJkB42RAjEHwJkwjRBd6X3Co7dqfkSr23hu6Jb9ksfsxxf",
  "key26": "5Ydh9xysK74yDDDyweaAanEPw613KrU4qck6dSrj2oHMGcMbtynHN5xjPDkwMBc67axNWqUV3u6qReQ6zHYFmPg",
  "key27": "4TxtCnLrXDHhvwLPGrepJXfwakjgh7f811R2jSMEfkuhjpJwiU5hJoSK7E6evYyDYzMSn3H4Z9mFoGdpju8M3PPK",
  "key28": "3UAfDfbjEiPk1r46Adukw73SYzvVieRnyamsgejLKV2zXcQgCmcfusCAQDYWooHQc4hcdiGSJsarMfNeagAU2Rgj",
  "key29": "4o1FXgQzQDhbusbPt266sHVenWv6mdDY6hUQ9qmbdqUX9QjFiRMhgpRxukHT5RybVPgDWXutkC1iH641pswVTw1L",
  "key30": "2vouzcz9yY2DDWEkBVgRgfSqtEcEWTk13G6svQriwhbdMWbXkz6xEbdYGv4n2xp3gpBda1iAqdvYvZTHCJuJHbeb",
  "key31": "m8gKQqV18VnhgJWU2AjSdeXWgULGHXHFkNr3zcuy79sFxxTPdN1y3iZvRQPin423QmPgyndF2cr7rWuE3Mcm2w4",
  "key32": "3AHfMZvvDZs5Z4KCKpjvzvKDMJhwGE5wu6uL2Zg5SkLAx8Af4DXVgvS6dhLvFYS43m2KMkvH2TTxH2HyMjdF2kHp",
  "key33": "4yiZgUwHY4oCZfvs8tm6eDzF8fVCzo9C18tEATUsccE5JND676pEz6nUH6sLnEco3ti3KDbCErqsHnXw7nm6iWtw",
  "key34": "47g6NDcSRbMdWXcdFaqWr9d96sAywQKFwRrULA4dDRVgyMrENaHT4GEAASFsFUmgk41R2Cxps9s6frAHuhqRXTSA",
  "key35": "3SHdR2WokpMeLd9S9ihqEQrnPYd4io1jxanMhgivX4oWheKMkfvP6mHbZVP8QGoWFtNUAJ5TPuubspRU7Boj8Ne6",
  "key36": "5f7eioUx2yfwws48U4n8qJLKyNUHgPmDDGvcVJSJUVpJk3bRvixUN41sGq5cqykML4UsubqDhEHXs28Eb9GSyC7g"
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
