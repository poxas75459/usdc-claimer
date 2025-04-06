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
    "48vna37qqWz3VgWZVCwEbhe42e1TQnwZExmYBiPfzYnrDihK4Vp37B7p77HubRCFf6P1DCwtwKLLNWuZcGAVxsmb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3SWGKtsmBqCabjvhfsoUisVd5aKDPoQySTsWFeQvdyLU6at7iqFCokuwjfL6tfpf6etpLqfXfAiHrcrnTW8C49WJ",
  "key1": "4gyqMWNmqSHJNvY9PC5gyU7KqMX6UjsSPTvxPT2hiFf6GeYwEKxWSC9h6q6g8E86TDLwfSFhSTZCFvPBSioEygEu",
  "key2": "eLVpFWyjoqVpRvMYNUhg2WGRNsq9ieuFcDZWDmEdLLGkkAXkh6WrXtcu2wPVwe87VpLg7xEnJGCFvUY9XFwmH8y",
  "key3": "2BzyDhtw88AiCcoBiskPPRwF5TbAEthpUxu4Vpd2hHeqzcr82uAfUhC8txcEBH3MThpViVd937D5FjktQcCMxGj7",
  "key4": "5jkQ6TKFjMjwj4rZ8ikKfoYrS3YKF9v6kfeHHyn1X2D45syWVZ418foqGYADJ6zB8wfDwRYCuJYLDjFC6p1inNiN",
  "key5": "49dgVdVSyf9KzXZZYz7roBeKLFzL3GSKW5awnUHSrvM4umj7MR1tar3SvdZFP6pp2Rpb9yhd1cy8NTnXbePFtpdt",
  "key6": "4DYqwzF9tk8Za4sLWrASaG2hpsC7tJXXc2d7FzzkakPzXGyG4sNPQX6fu3zBVWUWN3w6iNvbaskZuSu8GbhFi9sP",
  "key7": "5C8jQaaMhPboFHTGHy8EEpWPth1yFJTvxtx2XWzAtqNnAbPBthRTF5oGychMDJ3sx4ofPHJSPfbKyyQ7DSyar2vp",
  "key8": "S8zhtwoEcC66DXr3MYZVXidMLwwueZyUe4iSX1xjQbRkUYcU6nT7zdTQZ7ZFE6ygayEZni1U7aUK49YwjKYdi8E",
  "key9": "2uVjCrJKCorNxk7aeHwLUMaUB8jzcv5GGgEWCU2cKczVzkjKUNC2jQEakwp1DbHBVZW9zviaYm28To4RunZeaJfU",
  "key10": "4LpFbE16v59oGfr4A5dPjCT1Rz8VoxkdmWpsi9jMqb7xDJXcnLEmBJh5Y9Kbi8DobZevdGtECe4CZhvSPXxMJY5J",
  "key11": "4amPGMSKU2Xbn2R9iaZkN1YCiYcmbrrCcT5mkiGY3ASLWoiFLD5BE8LJoKjPY452EcKZE55CGGrCwbnUYmDofVaR",
  "key12": "3EF682896VdrLJ1nR8V3pooxVkCqEwR4ZGqxtHxzX6U4cs9UbjED7fwHrfvBigHDnnaSZux4DbBGPt4RhW8YW3tz",
  "key13": "41fXibGcS3PWsi6mWTguVU12wzAhN51cwgW9iCbr8zdJNjNCm8aWsCV5tVE5huHMHvWaVz5nNHCPsZTGvydUqALy",
  "key14": "41eRnArBUTQXFEbZ8Dts7xcHT4AW9vidiPBJTSC6VpDVM1p6xq2wJd6nTEcKXPJQ4W2RDQfU2s37XyjA5FAdxhmu",
  "key15": "3dP5T5biJwEbk3ApZCWaNESi373MUaffRoT8LpYr74X4RFgizpv4kotiZt9ziz41L6bb1VmN22Hyg3yH8WaERUZb",
  "key16": "5YT62cZQ85YiwuNC1HzNgz8LYcE826tFdeMtVkiCi44iMDCb5WbGha34aPZqcUkVN2dsR8teNkcqozbC9QozRUbr",
  "key17": "5WZZhDqdfQp2zGctpvXPAZ2PNPKBAeQNLsSA5URAmZZwcFBXBMdZcU5zMhVCZYTnDYfVXEp64exy8RLeqm56J2B5",
  "key18": "EH7vba7F3BQbp19cxVpCdcUo4sXEcGSxLG2qBuL8vosKeTztLn8i8kxVpTdnZjYJeB1tcB62bd8dZV8rPYcW5in",
  "key19": "3DX1PR6pD4QBA4TukTjS7pw8j7VHN2ustnGPPz2Gn644eqPgTemWh4LxCsqiuf3c9ZdcGyAGNXaEMw7Qg6nWFMjn",
  "key20": "bypsfbknJ8SKz9ePr373deZhKjnH4DgfZbHiuooVfCiXybDnouoUVxzf4wgKHMwDER7i8iGoWZ7NF3MQekhCWpo",
  "key21": "58ZcGdnU1jKzvX2WJ5QrTg2c8gHv6Jtq9284jPyCmjoVDLjQYuzdnF7MMnd915sRvVPFn77XKj5G6wYBRe89kMf7",
  "key22": "3yo42J9bSTa557DtfWq1MrdNdta8Riy1g4Er5tZ2D3AsLt4ycTLnxBoGUTj3z6g87rHSEXjMQgVvUJB2J1AM9tUF",
  "key23": "5RTm4ZesL1Mt78UC53v328rug1Anpyig6fUdWdMPre1dDjjaDXCTNgFUJzW3VxM38eERdY1AkhZMeT8jZwVuAADc",
  "key24": "3oPFEo4oBaBkCPbCJAkdKBxbjHfurTVwXZZp1mJexKijmJ6ytTx36CpgfxLLmW4z8bqWPzbEmK9FkZxMVc7hUz4k",
  "key25": "5sL3sPMnzF8Yn7hL2hFpwreZGEV2FA6pKEHYjg4WuyySu3YCoG93Cx5Np7jt6zWqiw5S8ge9Ljh3MuqLmiKvAr7T",
  "key26": "4J59bFRF4Pt5crgDSRuX9FMy7MXqjka37MwfEBBV6zTQ4y5ybxvtvDrm4cVDJasbyK7T1NwjYwTeRZHCBy48f3k8"
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
