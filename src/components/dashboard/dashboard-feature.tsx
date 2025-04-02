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
    "2z2LAZ7nTA8eb5wG7DMMDdnBLS8RvC2eaYHcx83aNW2aS9qELNxBYJAqKzfXHJZ4sK99p3wp1ugW1iJug8wY4Fnu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "34CZkooBgiTQ9jA8dcruwWpTMhUHoBBESnd3pTNC2eYuNToADcV4ZL4oKiSqXkh2WdGUBZBTqygTrf2w3CxehPsa",
  "key1": "34W9MNr7bZujzbCDrhw91PNWSoUPAmszsHGDz7dx74SsYwQo5GD3RiF8hiU2Pg7B5vjMNa4acNwJBBoVaJHU3T7R",
  "key2": "4bjm4NeCCus6vSaXcXWZM7sYm2NdLovHssLgayCiTu59j9AH3HuGzLcKD6gAmzuywbxVK4EPNzvFc7H83o6fMhQR",
  "key3": "jSinQtbQDncYsX5i3Ht81Lnq2EAhiE8r7rnKTWetXwvkkDaucmrPR785eJpszUaHYK8HR8PzsSfsMNe9FTyGEKL",
  "key4": "5HGqwrr66c9oq9BMESGUxBKjAcDKCW8vsFGZLtSqQVkaM87wCjNq8geT7FoXwbMnCmZKeUzBeep4XMVaNoArjfHh",
  "key5": "btxW8Jv2Uc3ZXVPGsHrpH6AAaoTyJ9DN8174piwwqSerViaGTNsZsfW3nmfTZJhMjwvbZc3UxQu24LCuvka2fgc",
  "key6": "2yz2Q1xHJ7vBbEaeazUQyfKkCkb3sAW5Luvnv38snHyreh2XHZtSLgqWcQbB8v7JoYpTcRUKjinUYVv7PU1YWPup",
  "key7": "2eAamZ95paY5QvJKFfvoRffpbLBkDrqaftcDDzZkZqN4YDwVP4rcGUKLx3mMoRKccxFkrY6Y61AfWzLLv2GtMXNW",
  "key8": "2qGQMcyCy7q3KPBY4adJmUCGUj94DEcR7M35ABtx797cLhFDMjXw6XvzwQjH5agjp3YajrVZhEh8PfCM5HzdRrnF",
  "key9": "Av4qvy5oE18p92MnDyBENyEyFDdGNqCo4Fji8gL2SY3uv6d3xUB8oRVFft1AUu7dXpkJj7ZdLR1KHR2JuP4GFU3",
  "key10": "3PVjKfiHcoKAKcBRn3mSvJxhEC83uNQTnFWx4zRQto9kUxbRKFZjQSu1v9bFcdYNFWytB2k7ZXQmQrrQ8TofzfiT",
  "key11": "2g2xpc8qHFSgnbRaDkiSW57hCqChAAjb83yPCBoN6YrJ7Rt1343vpnT9gCP7dDp16SykrLnuna2GyfKivLLqUZzT",
  "key12": "5zuN2226P8XonFEU4JSKn4hPm6yLMwgJJKGk3USf2BFCymTgAVCmybpTE3eQgTjKBgt7vhHyMeKcgNG28F2uHLqN",
  "key13": "34o61xcKRZESvktXRusgjfJLxN48cidMcrZJC4EdA1Y98C7TcP5gh53tLaSUNrH4tv1mCAF5uosPKEmSMtPwfg8m",
  "key14": "4EJJp8xdoTNCPGh9UWjyjDAbFBTxfpTpS3A3G46QTjWWpSNTiTxrHznrPUfu37JrT1V8cvH36L2PasGFRF86M9Ud",
  "key15": "nabdBFSkSy4anHaFh7yEQen9iR7Din5CUimDwLotWKuXbV3maurYN6L21fSheJs8DXmR4D2WH7HL6vyzrhf9Cug",
  "key16": "vGgSPeQ9qv68MKfgnHQzAmVvZVwh2LcooDpx4DBsg86hANfJMhdkRBCJVU7jkfbsSVsXPbwiM98TU1aJJXhTvA7",
  "key17": "3KtHs1avhRJihZgazGegtCaQkToknkZ1mz9txjCSMnEeXzQwWyKbaZ1XEmdbDo4MdJ2bN8LSt2nxWskniE5tM2oN",
  "key18": "4sakiXGVx3yjR4Tpqqahh61xMNHCAtXfTU75BJRroE2Y71niKYWuAxggTpk33wPnfXkrsbkuFUeXRwZ7LBBtsH4T",
  "key19": "3jDVNA1qTxLS1fac4QkjX6tohEPuP1SsdpkJtL6hDBQqWaeHzsyCDvY681Q657BUZAiAtqGVnodrazkz9LiZoExH",
  "key20": "329kB8W3HhYtfUDw589zAYaZmqsx8TNNLPj7bmHyW5RKEEb7fBWhN9QXra8m48SzxF8zUMJ6LaETEWTYpwqLkxqT",
  "key21": "45FaNanAuUZGNqMUtepna72f211f2nG7fY9fNkWMrdkaKA6eygV1eYovvdsjQU3X4Smmrs9WQs4yNVwDMVinqo5D",
  "key22": "2aqemrvWQmDaNRfixLWfUSpFpaayQhvM1VM2LoakbBndMHWK2VmLo9NWGhKXHXAugvsWoKLAGcF8jfaeXBQUq6Ru",
  "key23": "uwi6KCw8RHoTGySoWRyEqTNruEESs74PaPcGfiVwsFzdw9cEm9CQQSkR6f1bTq4Z8RHWcS1kyhxkXquVphDzPCm",
  "key24": "5AsJTqm6UTev8W1QWatEyfpyZDfWuSTD1qQrTQqFnjG3UBwR9g4gNUdSyPVrjwLcmHfiQgRm1nikCyejMcrg6yWN",
  "key25": "41LgcUX8Fa4c93T7goziYoA26aQQdi8E7HHPcmgTtmEnecyTWQnuars3Y6EVuoHS6bRgAAguwdu5hqkuPrdtoLHA",
  "key26": "47h5PZtASsXYhC8tSDn8Na9jpEVJCrxnRy8p5j4tQZXVckyENagh8tPvWBZLSjRaAoMrZwFKvJv3QmsKWvTmwZmN",
  "key27": "DcciVLuDhjoVPeEKTmpGkxMFkGNS7fmSPrvSgCdnMxzYe8z2nD72Knwe73VgEcNxPKeyNFmcY2QhmKR7RCUi7Su",
  "key28": "4TJzFb7otc9LPAq9snywU4mhy6mkBnrHkbW4herD8ygjQFqQDkoSzZBMjQ9heWBFLtoKqrxmc1pDDNc3sQQRn3TV",
  "key29": "byqDNTBVMbsd9pibycpvQvr3mduNYdamgDtY7uhiPcWXLGhBdPv5GKhEYPRCbQTfL325SRK21rBZzmaniCWMUbE",
  "key30": "4TbD2N4sduTptySt21Pow5E7rGQ1QBzkKfXgdKxXayT6v2853BK7pRgbJafzrVjbMduLzRoGNCtVdNDJQxAyQF6",
  "key31": "4quo1Ur45rEK2qMZJEJbofsnPDNtvVwzsGygVgLMcQifNaya1ioP81wAN7noFMwGwzR7BTVhhfX55HikVnHsczs9"
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
