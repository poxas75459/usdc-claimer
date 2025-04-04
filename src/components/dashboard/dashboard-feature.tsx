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
    "2bM5CcN3w11FhRouf6vwDu4GbY8FmRjJ5YiRjvU4hszgHcZhPtFThVLwwzAVtaXok79iTpVPN23PvJjRYEkgxkvN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2KKhdhD32KUFQn1y1opqFsfyZczdfRfyXvcD75yvPPqzvCYpTod8CK9sgPk7iREAHBA2EV7fVMJES7kWMqxiM2ky",
  "key1": "2sgn8wujGLXfuv1BxRBmhiC5UKhm1gAv74sGWvbV8WQ42wLkuBi6ZU4rvUwq1E9ptWPp722EVAR3HiRk7xzkZmpr",
  "key2": "3P8kK8vSrqXJc6EEMcT7UTy7o5oUZ2yyiPXw6MTPZRXUX8DKkMRZvQH32xv6y8dPBriD3W5dEdWFidhaGQ1EWn6J",
  "key3": "5qm5vqZALwEcLRpoBFeVih7iTZyczqjXQBBTk2JBnHX5yvqXktHpidSV5m3MYrJfKcSCq7sJ8362dNrbdbTdWPfv",
  "key4": "2fEcEUrtP3dtMVEEh7qGjBDNWFxukdhdioYddU8afBXfZGVRc3LchAZfERfbJ6deXxnpU2njT3DFw4Nj8yKUoxTZ",
  "key5": "3DG64NBbCz2F1ZpCsVH1aYHmhut8jf2gcTDsZ336hCu2VKQBBvEC7VydYk4megAthwSppijdUWSFdcuQAEhb86fo",
  "key6": "4vQF9JShXiJQhbrzQiju92wf8a6jVFmnQPXv1ayr93PsRcSkYhjHFDRjgVFpW983MYRDoBmxR28HFSWiktbPxPEx",
  "key7": "YKhd5ExE2bmCWu1wGWCh9VFhgcJewoYE4i967sSk4XJBXzpxW3RNax28KdaX5vahhBz7arc4MM4umf1HScXerWf",
  "key8": "3VAHsGiYhrk7eRVoN6fVhFibf8H1SXzxScRH6e8syF415KJTtyhusPses1bGjWVRhM7Cn1qEms4dWuAd5cYgTpbZ",
  "key9": "46VGA2Mfg1P7cy52jC6UHtFb6wd66KGTyNP4KY5XGyYtX94sKtQpeZnfG5Cge4mxhLNWsioaXsUGAZAVS8xXA9TM",
  "key10": "5nzmXX9x4JxLbw4eG2FwGSTWTnTZVTZJpi7SSxmze3mXr2JSjTGoF3cBokXPrvWeQ9YJYX5Xnk51WKEq4qkKQ9c2",
  "key11": "5Es23VM4orw2oCHVU7Vj5GpzwNhyTVxXNHJVy8XwPkUE34CXtgfEAF7EaQ36U6Qp3sffgg8kc87dHNLGcgN7CYXE",
  "key12": "58dNc553DtYtFjLaqixWTXKGFSTZwd9i92jbgxJLTVL82ETy5UjCGF3F9GexHXm1MHUxE8fd3nwnmjNg1vfqiMXb",
  "key13": "2ACEyJBsNi5KK1WnSfJyEcvG1qsBFimi7QDaCUFU7PVyXfXq3V9ELdzjfwtyCjBb4LYTTrbTwPCCo39CzDXGm4Ma",
  "key14": "4fjZU4QhmbwhuZtxQxrCMesn5xKBBSa3eFbKKJ9NMvV18GFsppvHrs1XGZtt4mjLyf6yoJ2zibY9PYog7i55fnDH",
  "key15": "5Ubra5e5AE1Q1pqHqZMgfoL8TfX8t59KG7hhfz4WRdWMwgJujjZmCLfWc3K7x5D37yUfrcVZNFhP3ExsRrJgBUMS",
  "key16": "5W6RHMVAJqCVBcVDaKc6udkTHRmqhMLnEvAvvHtc7Ck5qY8ZbAS2HEhuuxncWw1XSHHCBSNQfQCP2BhRLiLqbgfb",
  "key17": "3E6oWQi6L7bLKKaXfUeZzgHYfSTFvNqGxcFNxCSPiNYnYbUHZgB1T9QpuQafDmCReNF7bQjdtyVGMd3ytvTQY9Ht",
  "key18": "5sBfb85KNLCSgdCFQzJgwkAsRT8SeGcsn6mzVo2pMDC4AVcRuT8DRg59xFqtM2NQhUWXZkXjwXfHHsuPhPNRGTF",
  "key19": "2WDP1YjQ6i5wzuiRWnD6eKUx2rt4KmhmW7Aqx1zR4j64uejCVkQ3DRfMuS59gXUFSeTZRKsoGojZRWYVTSAG9ssH",
  "key20": "dG7HoWstfyWZFFLiXBBJTQeMY5b5ht6gK3e9EekXfWe3vjSMTzbwnVFhBHAmfqaPQji31szbvm9vptgN66LQcL4",
  "key21": "os9shitA6aJ6bfMzsFHcPnSoXGumnHtdwkmENvoqfechSZt4ndVEdM6LGBiAKyc5zKdttrzzSqoARrRwcQMSeLk",
  "key22": "2BsnvfrzTwxKw1Nghh8YLgi8z1XG5pfVLog2365Ci8QSEZxnBd5QNALGeoiadwu8Z1mdF7MQtxoHqo8xEHJh6bud",
  "key23": "5rrbNQ6kegfa3orA6tuhdTYrUHVnXou2DwQWQyWe96qMbZGjJxZJa8F8FyhMkF2dbH7vpWMd9Bi8jaAoUwDfaz4e",
  "key24": "4UY4xYt85DyKDXYZCihzZbqAZWh49mTAWVoRay3REHKmZ4AB2GiWb6R1dUAjW16nNaUcwT2Q7C8xhELoQ6wX7TTb"
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
