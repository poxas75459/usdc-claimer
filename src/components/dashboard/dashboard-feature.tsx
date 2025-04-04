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
    "5YzBNccm49DMqwKc1bBYWm9ZXnf6DK8AGafidnZcdyeCJ19aRva8114hjLH7Ky2mXxoJP84QjAd4ey2ZU1vpfeP4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "nK5EhrML7T4cPGoqVyZjaLWPW4udZRN4851fmVA6Sp5bghfgxChR8bSDUpPHwZamLGG6zPUJu9rXieSaTVSyuNK",
  "key1": "3ss9SGf5iTyzZaExCDFB8u6SbgrPtWZ4jsWVY4pGHx2rQF49MjUk2aupkMmCQb5ypJpKut5Jtydrq6K5GzAuLvhd",
  "key2": "59BxRmzhdFPKpRL35j2JdhpWz9g4Q3QC7zn4sxtULYtZW1KVh4eArRJrUD9NJZH69k37ik1CdZBcXZH1mFFkKVoZ",
  "key3": "2pwSpDTL1A9NaNbApAfVmGFitR7AThxVvpoGeVsTu7GAdnH6ySqMn7ZkmctWJx9Uzkrw2hbRhCiTmrqVZgjHUQdu",
  "key4": "3Cn87msmNcVUawsRf8xN6b231NAqT98abmKee7xwD6bxb69QfQKaZQg2hdybWJUdeFkcBKcXjXAG2LeUm9HYaBsm",
  "key5": "3wBpQ7xJsmtJT5ifAhb1TwEX9MpmN2fCpszpveVtMV7dU7v9QvtzN69DWhZg3PEj93PxTPtwtRiNDXWHjNuV5seC",
  "key6": "5Pro71fRQryPHHcmUQMEK8y7Tg3Pt8Bvi13yn2QJotLGkEAx3VxMkNpbuMR8iUqa11k1KaywK3aJXC4Rc5KDhvdx",
  "key7": "3uAfbqLim3Wxi62AUpGVKywG1BYtcLodEsSKxbWcr1KKWDcCYYhwyc8ENAniyufWN9RZPrmEz3t3HH2X5XY5Dm45",
  "key8": "JMh7fTvWQtDcrR7Mtj7dMw5sViuk1ZhHqUoENU4h5Ng9J4xAzdVeQcvJMaRnjoUmLA3qgzMJJ4BkK7dYQFgGiZS",
  "key9": "5eAGWic1ShUyKfe6VqisE9Je4MkDhndpgCx6GHNXAzc1aaXheBaFMuWB6meSVCVBTBiiejFQ7k8hdFtNdy3BmEFx",
  "key10": "4fLhHAZmGuprstD5D2rY9VYkAJpqFPg2wxZyGUCs9n5E2MRrA8H8JZsZpy4SQvy7RLvFTCnfbtYiiceHxsP2py1d",
  "key11": "67b2WjQK9aetJ8MFacmczdU1ZdsMzU1EXwap4yA9Wtp1TXXptjsYp3YQ6Lkpkfx7KAYeVFsBafgaTGYSMYJyrZ7h",
  "key12": "4nncwX51m4avtFXr4xoJYQsWE6YmqELhrnBv6yPpM4Sxt64EGwfGKUzXvj6wV5qS8tnboa2iLu762xNyVRRkAY9Y",
  "key13": "3pKHzRiRm1adWMPXUUDTC7kWemJBNYTGzHsf3XTfhxpnPfTg2Nuk4waf1kcpY9D2egzNH3o4Q7v2QfWx8YpeNem4",
  "key14": "5Y36v53pKnNWGMNj3bhLZtfeMBqj2sieCxUmKikRirE6xZ3y2dFnCDT5hJ8kSRQrvRoKHuCp1iaJWEfAdmiJQne",
  "key15": "Eq8FVgu67WrkGWJ47X94dqi5vn9NWsev9ogqPFRkG3GiBxKWyrSZy2fUGcAuJrrQ9k9GArMg1cyZKViRS492fxR",
  "key16": "2jkk1JygUytW9zfDHgUtNvmKhfn3DKBXJr8izaz2omtz4sHxUABnF8uUsGyGFtyZwgjdhYHp9Vi5YjsEUXhAfkdT",
  "key17": "5u2Tac3bAqRP3XdVkeyQCQE59E9CcmRCvN1qLeWW99LDigFRPkWT8kxAeSHg6Qavd4gYho38s7SH28QBYb9PCXZn",
  "key18": "umKg5pwqTNZJTXPVfK1R7TpC8vep4V3L7ds6pC74JxE6bwVwGrrAWtsVKPZkfzUdxbm3RRZzrLvMxw7L7SogYEr",
  "key19": "3dTYWZ7hbUYnrPnH2ciVKE9K44PYnemN6GK6XmAFjuGc1YxtzcnVNv5wTjd2xGs9gQzXJRexKjVubCnSCJB8TbdV",
  "key20": "2H26kxRWFhf2Xyxk3DvaX6SBtzzNDyCE9ve2nZfBQgtzkpisGu5KecGjEnXKn2hF5rheUTqRmjyaSXaZxR1APDYM",
  "key21": "4SfyCLWTs55Sx2cNAcEs7y3wyJ4P1b3uWubY1SicBr6TYFSYpNLRscXYro7gkAvTpbrQqL5WBg3SvFCArZs6DoBE",
  "key22": "3yrNwoAGMXCfpgCjQMprkzgBi2FLxY6oY7PmtHLYVx3knsiUnkgYmQeai7E3AEjT6yCDSog7i5pUqt2QyMua7LQw",
  "key23": "2nMeLLc447bZoe4EZMivv3c5siNbQMzAQQrgehCeWZDfxsn354WGcq47Hdg3z237BNg9Bw8dB86XkjtZgtPxo6cz",
  "key24": "5JVfpCLfugzZcCXLHX1kangmk12ZmiZNJgMdWaxWQ3pXUZieJbVUpxJnqT7tyY3eFQvgh7VHBc8iErtkn8t62g2T",
  "key25": "5qXbSVP5NcEaDLbZ2opzvQE6wazHJAdCrgb47hxFKxWLUtrzcnfd3CTkzvL8yMfwPiKqk1sRf7XiGgYHd928pqn",
  "key26": "51ahfxZ2u3AiRs3Uv7X59L9RyLpoDiHFrhQRyJLcLr1DLypVMe5w8mFgA6Gt6mSZ4Dqx1e94sUUxEbz2SxADSTmr",
  "key27": "QZRT3RapzUrY7DBLBXSBrDQ1i7xWzrA76z4HYZsZAmgpJmpLke58vFGDKiczbcapxbiB8PJX94CbHuCAW3m4THF",
  "key28": "2Dg1Xxi1bUoJsSYTudyLiJ8gpjR4ArexMs9wz3gk7cdGwLN6HzmoCSrWyrMgEiNj6rSnDAjyeMW21w4XqZLCQGUY",
  "key29": "5oFBiEPfJqvr9gariRepE4M87P2J7JSh9w9ZipBNvTFzcyDjXQsEqKwSZzr6yRYqTACLNbLWFpWD5g3ZBcynzbeq",
  "key30": "iuSCqyWUWTpf4U9kSBUDjq8MQtoZShHRA7j49vuP7h3uCQ1oYU7UD2eMfzqtnat5kBM5ZMv1SyUcebJFoAEud9N",
  "key31": "3LDLmnBiAXozpax2tkY6N63ghMu9JGzm5ikF66heAJ2BuKrUexS3xkZhcnKNB7xPDT5cvb7tXWAUpQrdUkxPh7km",
  "key32": "4DQYQm8Wd1fVC1yQTVocz9QsK9kJ5C78647CXAqoFXnwE9zk6CDT92pyc4RP5thjBcXV8PpqxfbmN1yjQ71KnDty",
  "key33": "2kzVh24xuDtYRXk1VvvpAQDJq15kAkY6jMj7y8XGuy4arSefRAZ2gQvmvpyauXyXaCYyWZ29vfN8GcwTc2e7qZ1o",
  "key34": "4qM3K3P3gGGr29BS1V6LrLh7FhJJF25YYbHRfqGrE3G6oCRCMzqS1dCdKv4QxVqLBMpYaEBSNFWCPCsVanpCL79s",
  "key35": "2CXf5CRFLFy35gnKzVCARcik8ApucB7XYATJtkcfrMek9Gyq9947x2QYXZ1UrgLmMWTdXRNze6htwwkBR7otpYkQ",
  "key36": "2Mk2C9zd3ezmgLbErfWdjWSQLHMyGyvrfCE8S68gifdhvHiBo3JKFMX285sXz1AdFSkTfXsYGbmGzTxV7awRcxZR"
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
