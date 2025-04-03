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
    "36KbnLavZ7fgtCQRoMRhx3RSZvemAYw1cTRnqsAcg7QPaaQz5naXwzSVPDnbGSr5ddymoqPGWspyj2my4nEgd791"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3t6TPCu6xHgk2krvSueo1oVcu7ztwYAffWfpSyb3XZ4YGFFqMnjSAA3mftRJXXHPXCmcpaeqdLQSoYAFA2qBp9MM",
  "key1": "5S4sYPY5NJ6cd9XWDzRoKBGoAk4UtZfcmvTorM5QnxrE5ifnEdqkwdGpG2GMBvbnisoQJnaivM6WTkAWCwHFJdWf",
  "key2": "4Yj7oUUaYKQEoYZb5fx5zUQF13EvRSBRzjrmaE23B5HgKaNChoGqtSEYbeuk7SBoZtpkuFr7xSAH4Uq97X8mTZph",
  "key3": "3W8BzFtYeax56ych6WuArxykY32um6CKFYyRZHCKENGRSEy6FKJzn55LwnYBH6y4NiFj9HaLUqyCHv9oVh5Fjm5W",
  "key4": "3MeXDG4EmVSP2hcpMUjZETPuoyj5eb3wBKUEN2gkS7VSY8ndiXpBjti7d13fruJXmyNq7mTfJxkqNqsjnWNeDYMm",
  "key5": "4sEaY8Viv3hySBeJWRmUXzWtDtagbbCKCLPzVB9fnzUXfBkjYZNYmY5m7LXbaDEn7ZKY9nD9UWbkyCjdxbThZPnA",
  "key6": "4xN351Yaf7YPYhnEfxjLkn98NNhhFza1yBfCDWozwyabwQzH2w5xKMLa4icFKSJqGYALzuWWVzUxLkM9Nq2bqEex",
  "key7": "535Y6qUpN1CyYLym24M3MY2LpyuuAaDb9Z43Gwa7CuhRGFQzVu2pFDqUWgLjjJYwvAjw69aVnvVG7LzYLbRWY5BP",
  "key8": "2ij7jBaVZ4GbBpb8CrVYNMaaP8kPSUZnxEMKMe3LWnAPdJV7jVuVVxgWnmyBwWWTfifkPRz9dt849K1EUjDrzGvo",
  "key9": "t5AZ31VGtJaKidXhHToDVmm9eqbcXjSyPHtKuYJgiRPuM11D5EShjGyQiGbw46pXTDQdWHHrSgnQvk2nBQBsqpr",
  "key10": "29tX8h6Vph46Wvgw2TEXWSq8g8LhJ3vofW8zapDx1udXPQtYJsb7124pSsVrV36RnyVA4wtszHRjo7YZRN9W5s5H",
  "key11": "QjTnj9coCyy1m7kjGwXcbWcpM1AzCPhK6f4Jnaap1aXwV3Ac877bcWMkKr7PWDr7RkQxKUHPthckZvkdgJtr4WF",
  "key12": "5rA5Ngh1nDzCJTKYDguWxi9CqAioax2Sa9MPkAss5xX57UaT45LP1xrRFy6QUHbU7bKeDzGuDGQsBU1kpQ22L7Ya",
  "key13": "4ioawojWqngB7J6XQKZ7eRiXW78wJ3pVAGv5akSmbt7t2vUACWsWUKM3rBwxieXhwPED11LPwcVSYhg4WiT8Wzrg",
  "key14": "4rBsZftHJjJGJexvvk8M2q8ktzYYTAGcqi3stUZxtRCm2CbWEzpKwu9a9ksbXzeMsvL7sYZoFXYRiiieRJb2TiuJ",
  "key15": "2fKA1Yrp9WjAijDzNNA61L58SyAqucnRDNa9hBSDWWpbxZSvDVt8NH7aFRd3zXcUqAydn3unJq4zJdMWsJeb6EfF",
  "key16": "2dCaUevRwNtvwgTJaLUyBNS3DuqfkmWsHSHhTXxJLSheAC78BieCRhbA4cusNMrgMVAJPVuugrQWn3Eh5yHVKX2Q",
  "key17": "3Lr2sJcYzM9zK25LhFPxcwfNBe1VgBUD9xLjwsCgwS6g7xvKFQdfdhQaVSP7YgL8TQF5gYksee2kNinabE2vbEip",
  "key18": "3MgYyCQZuxA4t8f492vtZwv7aDvS2gU9JxPsGWnd9pCmdHfruGSPQpcuzvzKYB87eFCorea5heffcZXp9g5o5St9",
  "key19": "5gVv6BsmSZcZZdMSReX6uFFhREH6HrsuULsJqePyUeUwMzBZCufigsYDppEb1Zcfh58xrTH91nJdLzPDbscdNq6c",
  "key20": "2412BupQsn2jbApFsT9RRbP66Wrgk1inRE1y6N98KmXd4LZMbxe3ceAZbgwRpDaXKSAJ88WpZJuBbd5A4H794dVx",
  "key21": "3jVDVpFamRMJYLEbkSEe14RPxy7cuhqV5ACqHxku8qaCvyV4TCKW5S9jvw3VyaAREwoou7rveCDws861iQcoBu8",
  "key22": "5BmJnLwidqNkj9wwQotn3ESzQknqZoX9iFWYWe876YnAi6eiSzQgGKXxTVsQLjTEwTbSqqjkoG8Yd95CmDEnxuzk",
  "key23": "5pPzq45iKDj2MSKagTHEvaQniG8drQc5VbPitxufjZKE9xoSwj6Fme3pQ3vEq5MC2BdCm7hyajWyjch1pKrkPnVr",
  "key24": "2aVZqLBedaufz7bA5wifL4S9ZPErczRW5Wj9FpjxqsiSxVU8cwJYNR72qvS15LeLVFsHmrcyzydqtytGCpDpQF5b",
  "key25": "2KxhajvFodzG2y7xH5KBqck23gHwwXXtfcB79bZfYwET2p4fe3ruFuQLuve1CaMo2JbUBGrpegxb94xNF22VFkxr",
  "key26": "ocgifw7mx17HchutwM8Y5RcKy3RkVzwrkhX6bt1mgoFJ89B56svaZHRz8mvGKcFuAd2NcrTEZ1JGaEjWRLYf91h",
  "key27": "3gmmpnpDZY5YePEEovrQ32iT773sasvuaupQdpoCGv9nnTryuwggwKygfVNa6JgPt85hfWe4UogPtE2xxWknwCRs",
  "key28": "47VuVkuvysaJJL2PKrdsmFRWS4v69f7PrVssDKKo4wqo5zLy1hXKGqXZUQWkC1XkfgeqAspJCN8vBctGryohBUwR",
  "key29": "5w7S9Cb7iWvDpahVqBNmCbUvcKra4BxdXTx73g4w5XQa1b1aLbBr1RbP72eyjY96WG4akfWdbYiv12XMeWBtf1E3",
  "key30": "uUxPrWySxjnyf8sg5uJKfPySG5BL5FwLHo3PzPqyX3GoaukQiWyt8EjkkXZXoMHmDbKr1cpvdMbsmuN84THjb3f"
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
