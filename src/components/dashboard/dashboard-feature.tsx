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
    "4U3FS5gHz9KDHr2qsYLQsrtxmbJ4WQNHTFuJHDhiqhXi4MVk3ULDJTFG5hmrzj2vKK2w3qcJDrLmnigDEc381UrE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2HAzgdNkH4cq7ZT9WXN7qR5JtQvUhNvXzfpPxmf6knK8v3vtEiGECsZtAnMxaGy8FyaBAV2VHQxAhzaXvHXtpDt6",
  "key1": "2dZRTVyu711AMrkVkK6vfx5F8gYkdCfZrwAYnQGfuGMzqzZAU3Pq2MzgfK4FNFuKpgQTHPBdstyXuN3t2w1jc2yt",
  "key2": "4DVNf3Xv7YQE8tHAa6URBZJSdtQjsJnLQB72e3E9BTcss3NzNQD5TibXgBshJxqco2n6PnvbC2EpsVZBpmyscgJs",
  "key3": "28MmYeA7xLnazFgtep2ccpFe8ZFPoW8U7L2APVpwgTqwH3PUuTdePKsrZCN8dNbmJTTQBP4oLKZuovZjJ3MvqjKg",
  "key4": "444vKpQT6ku7EsoHArk31ov2XTLShDxa4kYJdx5KWTB3LJN3G1KbxmQPUs5QzwJPFwet5DiV1ff3Erd7kfrZ4K8j",
  "key5": "5PmWuEdKCjRSvSFVGU4ANd35ZGTAr6n3D4LgPGYTrPaAjYceobc8LMFG7AgqESE4NTn6kRRa1CSBzS6YudkWsVAn",
  "key6": "2jCS2oX8DNRnuk1HzstSEqnetUuHnqAjEvxEu23qxpFgGT8ujrm8dA5EWBoh32VNDdBkFAVQ8A9mv6ZqwmwTK2Fs",
  "key7": "zd34j61tWRPFk8ppP32zhurV6J8DJEyVfiYyd3gkxA2Ntf6Y9t744MMYYjJ8eBVeyWtpvrLawbzCFuSrpgsk4KZ",
  "key8": "3MxtWusMJq5W7GXLYtpvM9C56daY25xLo52j3mY1NYHm2z8aC85TXmysETVR9wfsii4yYudtDMHKQT5sywYhTGRK",
  "key9": "38fwLi6NeHBUmipzHUX7F3bzS5uYLRA8vofcPAKreCfU1Ym8QrthWiuNJhs8MAEZUFUMStYCmuptQ12m5s3VTQqG",
  "key10": "5TepmM8p1LiqAfTXNLAaiCtMToQPCT2Y1Xoi3kFQws3bnEPR1U6hVCPmfQk9rUYohozjsMk3MEGMCxizrxx1NvCF",
  "key11": "46KnDRYfMLfquku7JofcyG7A3doegK9UMd33saEY1bbYzApa6GT5mMotxWikhqktK7jkc6F4GBVHTM6wqNKLKacm",
  "key12": "62k2BkUSwnsLNCgmUm9DDGULWuwxpFn1KvHcmdwS7M9gYKKh9TjqShJs1CB9VYbkAiSNg5UaQkmpFePv135hNvT2",
  "key13": "URm3ngEcR3AVU8T22DxMwV12YpUaNrkANYKo7uJ8stYJCmabQbQBJ3Akzsacp9NYCJrKAKKUQXCRGX7HRtYcuef",
  "key14": "2AYKBjbk4WScJpc5JH6NwBnhJjYL3tDWsLZmXPWoGQE4KJ57vi2BAL6DxZB9QMGEcPBJzn7htCTMoXJuDVX4cMFb",
  "key15": "3eb8mYd63j4GtcCSLZFG8pGPbupfVH8SPFfJsjvMcVgwoPiM1w3hoeyVdMjvkEMqspTCiZS7RGURFxMRX9L9U1DL",
  "key16": "5THeWKSw3rm3oMcBgN2ZJpRB8ytQMguzuij9q81LXjm11dYdC9JnYcQs4DkMSkKtRd9kmaEshTE5gzQHxTHDqYgq",
  "key17": "3gvDUPEJqYq2VB3LgGUmDa3GvcmffJU9pWrtocTrE7ENkSnJeJE9Gq3d3ZVwWrR8FRK2wtqr5K5Qnybz4SjMyWgq",
  "key18": "3RnwpU7rnKFTtPjrkiix6PMJgzXwhTbGaNJTGvom14zycKKjbDxWBnJb3RESfjCza8VSVMpx7kSigyCHQC8dXQiU",
  "key19": "EbTjeQU6FwSMyCTSvDvSb4yPhk9HGaNjkgKeBKiNoZBcxSjwcVrTS3kcyGR5VpotU7jp9Gh7zT8wAvGT7JXR7ay",
  "key20": "4BTpzEQ6Rjz2PJajWZz636Gq2SavDFoXKcu9hqxXCaFgDxWArwKBSA2MLG4YRJ3ChtJAcaxXcsFcBTA7dfPH6W5P",
  "key21": "2GCzxopr5gyMy8iwFsLk3n7ai6UmiqWhFZcXyRkxAj7dxeMRerDe8XooD2NGBtqCB8iXLXkriGJNLp8rragLHQ5R",
  "key22": "5kJfWnGyhNJvecdaLSGkd4SUnFMRte1TUk9tBnNudVHfnR2yyUC8EzE1NXNeYbhHU5zdxB6iPAqei97TznzHG4PG",
  "key23": "2miwcmfyYALj7dLLWJXCmdU6Wj58EhqN2DpUVknVvwV8xffuDbK9PdW59dWHYxHce8t8D4pZLTzLMMa5UQtrxBAB",
  "key24": "3fUgJoU7ZHoSLPGe48xh3NTHA5uetuNG2n8mdxFqZ5GDeM1gpMTPR9v8wQAY1UR7oQaNTEYajWvpLweqrqLG45yx",
  "key25": "5gfMZWPA5bQP4k8yvjzQ5fi2ytQJxCCfpaPYDBRz8irbdfvRcV3QujvHrs6gCFXXrgRaPXHr4AYpMN1Ej14dBio2",
  "key26": "2jTTfS91nSp2i9uod1nRbdYsSfG2nnUnyfaUPcf4jsh3ZL8jSnDVX7ZW7zawZMgmhZkeBAu1598frUo6xaAGiZ1B",
  "key27": "4WbgrJVfghEZMxoctG94dQYXEYEu9rEXpsbgDTaM35RHECs53nZAetRkbzepXuFsn2vuLFBjbSHuQ5ZoNKUXVsms",
  "key28": "2Qema7a9vH1qZf8wFZvytXXPZ4joKvD1THBPhmU6N3VWXum8kBxEYDcrFHmRTBAGsFmwuGHACUoedk1j4pEj9QPV",
  "key29": "35rjceH2WvApPnsMGUMXSGz1cxtmb3cAKbYFhcm5pvxACpj2rJSzW6ZPViSGxJiPQPLjmm62sXDjpgdiwPH7P1gW",
  "key30": "2wTsZDTn8xMmJYukQ2XgNEEurairfnN8b75Ypagps6Zrri1gxFeJMR6s2eHHXtqVHVR9sFswj8PeFfQPtYWnHrHm",
  "key31": "NY7trmhGLdv3aEZG11Zhp46rn3p3Sf6cqBnMD7DcRSL9RCgoAqcXGmQdXkKyiCGY3DDW9EbhrVRN6bx3CAcgut9",
  "key32": "2Sj53r1w6FN9pf6K8BudEZx1JMBrbwT5gkbwoF7QMGTMBNwPWSTUnrtiZACf7Mzv6i4quWAgNsjd7TDmtUJLZdmc"
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
