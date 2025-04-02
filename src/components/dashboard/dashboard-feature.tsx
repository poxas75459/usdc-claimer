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
    "dCqH3SsJ3YE4VvQeuivkxBq28bXMhQBPeCALqWX4Kbw6CSXsYNpsJKhtVaWXzEj9iGis9APG6t4LbxUeoCaCDTe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Y1iMR2yd5XEX83EZ4HLmRhQ9WDazbH55gw72Gy4RxNXDuBXmUCMhi6Bhp4P1k2Rcx1c9kDyGa3ULegSHahjaQyd",
  "key1": "61oq7EB27V7xiFjZzV5dCmJ3VgpM7jNQfUDwRrBD7fc3iD7bktZENZbcFXsbUh1j2FtTqSWNMdLhy7HYAqKSfjLQ",
  "key2": "3ozD8HGKjJZHvJYM1j2uGN8eyv3cQL9dsK97RdvNUuvtqYC6DY3jopGMAZPbvFPrpEP7Jq96mUZk5h7i9ZR954Q",
  "key3": "2jdST7nV2FkvhS6PiQ9drQQHL3E4epZjLctBHgNtRDeDa9KnsjJYbnz9hnFr46kQ8BEiTccpiTJWmQDzVhiqYAyf",
  "key4": "4HyuaHMSia837euApi4cESTD7oEggmwJFdGJTKAAYQjCJn6txyqSCHjchhPmHafShqZKBRaXnfa5SoefwEes475W",
  "key5": "33rPR8i7ra2y5LssvNG7vAmRtmbnhveWowFqtWXkRsTp2BsYKqnTKLg5yEWPYw4Yo1WAZ7ZydLhq35Lea2gfrEPs",
  "key6": "5VhmLio7UuuGMygrT3nWCrAViae8HmYqq6wFHQUECbLPKa1qG1kQwtZqByXS6vfcvtsbpDM59GP2Dc13z2s5Zb5m",
  "key7": "5mkn89U3DHGZgrcK23zQcTGE71vg37DE5gptAtbvgvhLtjH8zqX6hn6Q9iX1Rf7fDb1xtvRRGrQExYR31XU1iUSX",
  "key8": "5KEPm8pneWnCACng3dKMGLHmVfVXUVhyU7xXeBxydNagoe6x6JPuEbg6pyEsn6K3GASxoxVgdKJoH8hPuzVAqssG",
  "key9": "4GhwLdaEmwHxMkin92bvwYaYEruPBfgdmdSKVfqo5EpE1DvimKHCwG3yL17UNVDHm67fJGUcy4ngTeVLXg7WuMim",
  "key10": "51yLQivv6vxGEbUcQJWvCnAr8VRZVJuwfTvi6piPpoajyqVzHzGrynQUdwwAe5B8k5Ztgzfh7PZPKWDULZ6kAFiL",
  "key11": "47C2Rmezs8PKje2uTcbFrTHbSSPotKyMi9dSim5CUxJvnD1uT6CWGCN14pZEtbBTwoFBeADW6yHikgxTanikUCfX",
  "key12": "2QEYUjSfohtDzX2JqvoEm9Xf3HQCuTPcC2xXRes3epf6fxkdcxNofnS7oHXJWvNKscBwqhVURfF6WPmsAKfSCz5c",
  "key13": "2HubRjiFTjg94xZrChWzsVVoBVJ49DpLxB5aPjh61aTQ6MFr477VgAYvekGovGjEZjByqZuhc6GHNzERcc7o16xr",
  "key14": "5Y4pk9W4oxUcWrhSAnD6M8wxU9Hp4A6wTGP55Q447ofXvwNW1tegBksnHSHBaf7Y1J5kV3iLxnh2MhDXcKMMY8pJ",
  "key15": "5zJ72YNA1JFYTs3dP5cyu5HReyG41qCe68trQ8Bj9unsMPyTra4CEx5ucYcALoBUDGSyS47tL1hGcZSn1NoBmEpd",
  "key16": "4ZuRKZWDYdzMhhmAj5LQa5wiUstE14X6QGyQmBZSEd8Surypa6DQpyyiBCixzQqLFJfKbauhDtUCbfgfAVNXGxg8",
  "key17": "5j3Xsk3yri6r7BdW9v89YSu4ghnhfS7xP4NwN1hJrKzFMKm3chm72drNzxBzSdeDVPuhczgYC8NtgocUtaNGnDmp",
  "key18": "5dUUufLSeg4Upz1H8aPCNJdaTa5LjrSUWUjtybZnBdsSfJ7GnPEgWHWyWQrmMTnGuS7ife5AiMEwdfdgxjofqyug",
  "key19": "5NGBpwcoHXAWnJ8sBE2LUahrDLZwtVpVd1dZ6F9oomkzqpmtz4CoYL2vYTTDFhsEQcbpTsFuRU1brZWdRwp6Dzw1",
  "key20": "E2fQpjxDACWR81UnC5RAbvMyvvNPYhUHkiWiGGMCPKjknLeYMkALs2zQLbNoEioZVAMpr17pDBbQ9jaNnatu1Sf",
  "key21": "4e9XWs7vG2Y98SZ9RQ1zk66cAqFrx6gyvVfRkCdwqZEHySAhkfH4EwfVwbeHsxBzacqhJT3Xndp7kgJL4VyvFdnJ",
  "key22": "M6WQ1gdf5UaHmnybaVdRunHfN3qabcN5qatg2wU6PwSXwQkczDUReCtioBhPMVkBDbKCxqnzaLNpjcp2wy28u9X",
  "key23": "4SJZL2hv94LdhbxrZ9gaHyvmNx1eNcYA2PgHgXytcUfqURmsGnZtBryXjqdoLaAZTsTWZrtpGsNWtzXaHA2ZFN5w",
  "key24": "fXnvYeYBnENtvfQ2CznEqa1B2WzxxqYqCxmRqEnWrFwwS7nKZBnCXibYy4VDPwQJAqakcZC5Un5hpmyVDvkqtrP"
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
