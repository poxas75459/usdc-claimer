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
    "4wqxgLhUkdXyCjo914Fw9bjXVAW68DrykiyEE8A3Po5tkXEDNyFSPmTDBtDoJeyppxuGRGThPqEaH8RrKHrXFKGd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ot2y2B2qHN6tCbNB4oByo2QMCs8dXim8nkHBy5zUHNeh5qVq9aiWWjZ75D6UjknZ9R1zHzrZUnCV1BRWJPFdPh",
  "key1": "5frvgm8tw6cYcUuTFxTnk92iKzi15SgnoVgydfv6aMiHHKaGoiVaGCq1dSJKDLYbKqnJnRmDFSHjVuboZBYMbWH9",
  "key2": "BsV142mWZmEHe4AKxcqcXEMx3wmwvRrAqycA9JhtVmTKjVfGi23MHrnDnKwcD45prTSfbxifojH9zxnxh65NciC",
  "key3": "2RJund4iTZgWsNmJQoR5bL9q6pp55PFGrmffqUh8mBFZ5LbwkAvQj7pc3sMdBQSMoykSnHKs8LJJ36czrP17YA5w",
  "key4": "5RsVRbn5Xtga6hTeiSqGiNdnhzFCpoBoj1RcsQTAGAfypGrVotXXdhtgCFQcTvP1wnCM5GbqJcDmHxWWAuQyNfRV",
  "key5": "62m4t6mkeC1rqmnq1Cq8k83GHn8Geo9Eq476WJa4W5pj2LmA3d5haBQQNcUaBanrvWU7nSCsX8QKSgU7c33rVqEf",
  "key6": "24eKgsdCiEChnBEhHUF3PMquRRBzyCWRe9Wp2PJjL63hEkoCgB2G7DEfUdWDYruDVt7EGdQ2SJcD1w6CriuwLWtA",
  "key7": "2srRzY1WribmKHQXRxezkchRTvsEsgrSbgPU6PGt2v79onJKsNiQxkWr2xmAUUwaptKxcckWPRr7ua3UVUgEDaif",
  "key8": "4XBKMh9AHxPEQ4HeWjMPsKby9Psoa9iqXadjos7B25KHGSuZnouCCnZYpw3KABsLZL6qsgxKWKtfW32fEFw2ZkGi",
  "key9": "2neMeBiwskDJr8NDETQ4roThZGaeJXYRtdhYt1A7wttmFL6vhA7kCAb7wWerLvpso9TcZQbRnkrjVkaJWfVgdsUB",
  "key10": "Mm2CNCgTWmDGebMnyjcY2KeR9RU2LpbXStLTdFR9w16C38aHB2YRBu6dRy9kJjm8d7sQiibGe5sVwKeLZLgBAhL",
  "key11": "2vok1ZEfeBuF7YHDVZqbL9TRHtaY8VdnpqvVQa4qvQWYsyZwZEBGDjwWbAFWqB7HffCKJEmf4CNX5UJU6yMKaARD",
  "key12": "5gHHfknf3qkevfrpMFs9eeFbJtyAoyUyzkj8JhdKFTQzb6rcbbfEfkC8edtAUV17XrvG9mBnzuiVK2cdRfffhTHQ",
  "key13": "2DLpHfLCQzxXbcVmBCz8nxTkZdSwkFt72Tzs7awhew5tNgKMViAeRnugjkwotkPbKj3Vc2NED19nLNqesiozwZWX",
  "key14": "22jezcTTRk7ziEYmyCVWYK9uPT5dDH1ydEGsnr78Knpk5GNtrJPpYvXDbbCHwdoSmFKNHVvScYa15DScHQRmdBU2",
  "key15": "2qK37uPKFiszSxUaYXJmab9nqWu72ynY7mEVvn6z2S5gxV3wHEqxyMEZETnzyf2kWWBXNcjKx55AP4KaVjPBGV1n",
  "key16": "oMs8ekds2Gu4Zf1Ua3DRVzSUBmq35YyNs7oJq4FsLPNT7U18RpHwxyei7D3zoZZpUNV9Z5xSVuoc7HXyFVbQcYk",
  "key17": "3eH3Z4XoK2FVj4ETZU2EYZVr9JeAFw6Xz9iK4qzXdjg5YmEs5j3EGJfMfRLnQY2jEGdgU2aoyqrkf9LkWTUBYj4c",
  "key18": "5QV95VUZQe69whmBqKGTvpFaWNp6WCAymCM34nrBK9V73U9gWYj314cSF9sCWTT1WXVGXRu1DTeWcTmEeTk1ChVn",
  "key19": "2DMPrcF1Q2L2YrDEk9UjNTdqfBQD9MmEsuHt5sdWtXkuJWR7mqg7nRzRJKomVJoMaJrT1F6bL8TfV1oHZWw5WDo2",
  "key20": "4e1uTidspfjiyt2BUEVAsy2iK4PyoynRjyWNvqrRZJ8hPgEQbCNurBiaB7xFy2cGCSA4tK9SXeTBx4z45oefjneB",
  "key21": "5RWUYvRaQLxXDXm2C1UHmtG5muN55ShtV2WYtD8TK3Du8zWmWqYe79Wfg6tNraYxXQksB9tLjrBjsSgmthsBhwCW",
  "key22": "4fo5pVhd7HnGSg9Q6AttBgcNLjZQmRtgW6VDAhZ6zaooC9vtwr95RWSPzoiR4JtK9WYkuhSMaBCUrupYw2VUjCeD",
  "key23": "5Ehwhcy2ffoddCt9fVV6JfjyGDWw6JD89uDjB2poVdm4nKCraLnMyjjpgX3jcL7ty5pBvF4FEu6QPFAxLHvhy4ST",
  "key24": "2ospRHsDSbJPBeaEucixtjFhsdj2tP6G2ncksAuPRikaBsYjx3MnXixKaa9MnKnqfyodPLBqexmmYWKpEpLSfLPV",
  "key25": "5NW8Lr6yRAnBXNcqphzut3rNMgvUy149FPj3J98HDyaCyFL2U98mj3nnzVknfkC5aCeAxbHG5ZU39wmXWLL8AnPo",
  "key26": "5hQcQhBG5MpqV1auNoLo9GUL6jRVqhamD4Nmc7w7R3XdSTxZfNiXHfhLeX95mTotdyLEgg6cdWcJppzHTvXgpZXD",
  "key27": "LUnEzg1mq1sRd8DfS7zxvdmnRLy5zNffJZyodxee42ibeA7PywkdGNX8vzNzrBKpW8bWVM9kuZvraAs656xtijf",
  "key28": "cgfDRrwae4fh67J4aVPuacjmfz5PW9UYHBRupjE7Q1L94ZiX6TtJKbGh5AbNdr4VvAsq8JYkWY6338s8bAgpcdm",
  "key29": "22kae7ud1ZiHVpEw2bcVgtvTkRMhjiJrVwa2pgoBztC2jiS2JLPa1eHZstfkqRCexjm8bmXv7ZnkoT3exVbc5GkT"
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
