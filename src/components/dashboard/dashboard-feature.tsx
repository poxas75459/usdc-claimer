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
    "2u3QjpNqYsWQgGtScKQ4qSkWp7bZSB3tLHAunKYjxG7pxTfXahF7kDTw3L7XeTxmnfyJ4oLZYdQm1Aw938KRHVfs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4rp7Namazoe5bxQgBriPGdMVtXD2a2ZaoRvCJKiEDb2RHTNxjvMoKS3FYYf9eJeg8TXGfqCcHsSGZgL4aiXsH1hd",
  "key1": "339oW9WvPkmSsuujou6n2EKfAD3ibrG3QyiXWQ8ww2zb8QuaKJBn7YD5gs18Fv7t6opW6RF31ujRCXWC5PBL6KJM",
  "key2": "22smmhCaCrbzQCpQxNQvrBiyasVqRrBDd7y1cZXBNbFAqCMnwST2hHyhvYK92gF8W49SWvx4G9rphj9Uc8PsjG1Q",
  "key3": "5EkHRJocS99GaJStSoC1kviCVruSrXsH913ZijHRiqWWRByVVkZL4vEV3Ru7mp1gT17kB7Yoh9EenZyEwL9HBzS3",
  "key4": "3Q6UPkrLDYKaSFpKdAFWRThxrMknh63bfardPTUFkcgkm1A4XCfKbKCBJmUa8aFiJ7uq1hmtVtRSgkmpm6q8aFfP",
  "key5": "5sNxhQBSHSRsu1pSpX42zzEJyDtQL25PLStRLPBEUCKvG1MUUdk9Xg85KtBmDc1rKyWqXJv8QwUTyEB47LbMbvgA",
  "key6": "5aMtmiMxMVRozqh11wnJZkMT21rcgqzc3nisZWdVBuvSVu4CFfAiwzHVfro8UommF5wx1YZU5mVPRV3aKY8crxCc",
  "key7": "3sQbDLrzGHfaLYYAdGvCy17fgv3nG2LXXnPiPeYvDeyQBit6jtkKxcjMKPBQy2CZLchoPQZKJoAbsqP9KcdYN6c4",
  "key8": "6431UhiLxD7e5C3RQiX93FAq6sJhUYUcn5GKdBPVSmEJ4XuibLuYo9oA38PDCSex9bmNbTfpVk8EK2sWzNS13ibm",
  "key9": "48iUVQNzrZ4vcVMLQH5JKMrByY51UHS4XAcrtpKq13ZHoNjAxphqJhMB9yxj637rexWv99o4StfQcWmxak2cFVw",
  "key10": "5qCYZkJHzr61f4DXMQ54f8jTfwvyHRPavh8CsBsEcXwCGfuLCApGdBM6SSFPUBQVsraq9dZdagRAXKQLqFDvwrLL",
  "key11": "44Cwcx1rt5YKpdzCus88y2GeYCS8HvmTaxpRWpTAHUdQgPaFwZex487yJ6jjAYgKZhTGkmh7BXzudQrVJ5iiWFHR",
  "key12": "4nVkQj71BNSFvmx676p6zeuz5JtuPQ9ug3zS5KqJCQc9V2F1Nzq3tqoAWX4FQKL8ZxrPaoLXZALP5ANZxjvigUNy",
  "key13": "2Wv6YsCKbpv7gbRU2Ab1Ss1hoSBh5u6hjXiErYCN654CKQPqtFW7ChRchSYSaYF2yFa47k3T72YNCzxz2XNjwaig",
  "key14": "42pL3ij5RFD7mtXj4d1Wt7qNBsYjFtvB7uRc1QRnKmG1dBcytUsLxXstFGKRYWyWfym5eSN1nGajxbZQJe46HEeB",
  "key15": "xLXLZcx5eAH8zKr7uEUdGadiYT66bSzGemHxph8fNLYxWEUbguCJpanEFfUKUGUVtCR8qojBy4hky3A5rn6zM2h",
  "key16": "4SiXivV3SvhNFqahjYKnT3UrkoEKjvKsa7wVVEzxgrfjefk5xnuM8K76vfoMdHc5Y1DkyK77X7hMu6pufvYqgRvU",
  "key17": "5NKk7n1fZPrMKKfmLHbjGXAZwLSuCF5NHfpGAcPBT2tr6C6wijQv3aCKsymmhe5sqrS7HtBQzHPtEdgYLGSd8Jrj",
  "key18": "5BPrWyr1qFmWWhqY4t2GnH3B1kXUePVQWNJGNePurjjLxVwm8AGR6v7gWARHfPepZy5EwjDKxhqx2LAsppwxphia",
  "key19": "rffu77CgGaf4WvLVyUsBnBCSCy4uG1k7H9xK75DkZCvyP2ubABaBKSonN2xuuTsQ5h5xZS8YErPYj4Ae99H36JU",
  "key20": "5eNivgZvz5sctCkD8vkyegtkvFW43XTBA3PxV7knLEF85Po3JYgCwji7op3FqYuV6j5pdtdfF5BnKamXcBFC3mT2",
  "key21": "29h5LdU57XeynVRebmWL1SyBnbwEzbfgK4zcdrrXkqZkXUkXYgGkiNRG5SStrschu1Fb1BkfALnwzce7jiNFBFtt",
  "key22": "4WwL47emEGmPrq8T8kviwMeiv6q6t6BRcLzttdvpFwBh8sCVMTQd6roXWz1j2Uv462VFFaiW4mfA6hySmgXbnFF",
  "key23": "C5vtHwfttendfpJ9gAp6yPjxX3AH6oNvQjKmrG3VUn8yYE8gBsrxLE1DPsepybkW4Bvdv5SoUHc9cULdzdFjHGc",
  "key24": "cHFsrKDCo6Bq17jkhy1szos6ARQfPf47LknsZa3g52pfMXf4gJEHLHxnwQ2f8kHGjVuRyvLFEYLEZnEBARQ8qFA",
  "key25": "46dpZVNVziWDWd3euGY1wWw7k7erugNmQ4Z4qkCR5oqZ1x3oDyzjD856V6Qd1cwbD7i6CCjifxzLWHyas7ZpjFJ6",
  "key26": "4sywcHgeUsxqGK74VD8Ri217PdXVePt8AJrsdJBu4niBd11ptZcW6TCgy1bUGiBWM5oszLm47j5e3qKdeLYNXvVA",
  "key27": "3SoZv7uJQt7RpGneGGUh1V2JkDgadeBXJCfSRsmg2vKZz7y4c5sFLHKs8joMkEY8PC6FkkUomRn2sDNMMz9rRgQ4"
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
