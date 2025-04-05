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
    "2ihPL4uG66BFMGPYceEA5YBk9YMkBoGEarerGNGBLeta2RFsgZ2yroFCnG2o6vxDAJ4LqgpkBYHaURVUNHN4jwYa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "eK5dfSvEtfyzVW9ZELHU7rfH161tWogBexbJ6xPd9xP6U6Voqu3qGPW7Pj7SzAreBW8bp5JRReuSJ4owuie9H3F",
  "key1": "3KYiUtEDSAySdgm6HvDXTzoBy3ZHTT8ft6V5sZKExpiYvhp99iqPsCbdgiiXWwD1tUzZoWoCvTw5zkJNMzFbpqey",
  "key2": "3uJFptLwWaFqJproU8r9qt7KjG54iS431icjNMJSJEhBQDVWvzFLLMyUvkmgFgZqAsX1Eph5DswL1nkwUAku3FZn",
  "key3": "28c4kFy7FkkYk1XBdKGVEqaiivnuBiAbsu3puhfq4RDS2vB9Sr7iRcAxh8rUdJCFMqZ8BHqpdGFdZDYfGHzzGNSC",
  "key4": "243jTR8DdbCT1yw3oZGYrUGJJ9M1nuMs2RXU7vMegpVQkxEVhXDAzwDuzMEaHChb3WuoeepcQ8BRXCaxqJCFNvum",
  "key5": "4ETdYfVJdiuupYfuvkXrJzkuePXju8UZGHYusVRizV3rMSz1MozKZbBxSPAawJkneAuYqB4qdNSqbU5PWxPWMJCm",
  "key6": "ZFZ94VnwkZsX51Fw8hekaCHF6v3c7vhociJvhTvcpxVjNxrnbaVFcwZ6DSozyFxcMXqTT1SuPEc43d7DhBMcrHU",
  "key7": "5xRKUDC3sK56MeXimgbiW6YH7sYhnk7dbHxG3G6wzYdktKzJzfunjNY3HmwCYXHHv8sbwaCAC2zEfLQQP19uupCG",
  "key8": "1s5ockQpGsUTfyFBWnjWhkUrPvSqroE8aMwXuSvWaKmiAr74sBgbBnKg96UELEHzV7ZsUaevTCT6K9xV7qyc9Jx",
  "key9": "kbU9sr4h3hosSuWCNBB1LkQGPxn9QTEA4vePEe95HHFriTaT2FQAZp4oEtyWXTbNS9eHiaEVNWcYGULJaQ9ucpG",
  "key10": "2K2BuWvi1ZU11bkhfADbf2KrNzpMW8sSjZZSZSs8RRNWEuU6Ykcpy3GdWmsqVCiTftxKMWQQq17uMxf9B2Kc94eT",
  "key11": "29T7UDYZFsYZ1NVEsFiLfvA8W1cg7SAuA9ByqKaYiSDnXTr46yGro8hBCWqtm8DazjcGWVvRexzdwDwKqx7sgxsh",
  "key12": "45rdN4E9ht1Fd37DdKRRyzSvSW9P4DZcJomwyPueFTfrCqX6CHE3fN5kpkz2nYzsWgdypFoCQMt14owYFR7eEXBi",
  "key13": "3W1pdronrMzfo3FK6W66nYME8AKkgbpnogGy5R3wBJna5wr5wUZ6iNzzqLkyuR7Crjr7J92VGzY7WyEwruGumbnr",
  "key14": "2G6eBamCw288RaJ61G5L7xNfDsC6uoUubLGWhmSn7kkUNPUipjhuyXXMFW5bq3fheMCaAyJ43YVzQntsX5SvKPHm",
  "key15": "4kvyTzXVopiR86HGoeEjyfKkWrq5BUu6kozyuwAcLMi1daWtLXYf5GZZhpZYCzDKaFCZzycghtPdzb6CYbNpTCMe",
  "key16": "3iedmDok2n668mZCXZ7prcsJ8WbbTB4iYXjWydSUjjh6p9zkoJvs3AxCWvE4LkUk8HqmZguFo1vgfy7wuGfTUmuw",
  "key17": "4kvDTXZk7DDmLkyrhho8Qx46deyA5HVLcFa37kT9SvxaKisEdobi6TB7PM7WLrMnpEKkMfPAbE56YhbeJowKc3gU",
  "key18": "34yZhAvbEYnpZyh7hLBLPFEArEn3pHJxoK56xt3ReX3GYikAciqyW1adLnBJiKhBwbspwh1ErmQ6upQMNqVSxE8Z",
  "key19": "2LXu1y616vWc41YdWDsbMnJr1NhMt3jHH9614PEojjqvQhxej9BcbivZhMrx15CWope67JGzxBoJZnvPPrg68nqa",
  "key20": "JmBU9NgjaYbqTpRnHvtCDgQFnwWRPoyztAzGp8S3WpBHwkVRmHfGMwv9FNjv4RG1qaG8Sm2jEa3NsLL3GKi2qpG",
  "key21": "4p3pLGep6V6gtaEFfio4M6SaFsVcZsWuaqY1aMWB83rB4XCgNNA2KcMaWzbV1E5m8qTtHhndShnqfFPMHXKfgr6W",
  "key22": "3cBPoHZk9nv9YGxxCrWse564fhHDr9MWiN7cVovAZuRQJi97p97s7xUpqiFrd39cWidmaWrnzmFPMmFFoexFCPxo",
  "key23": "4jeLHSpSVuzsjRFZn1ZKLXAkGUyEhEFqHoiCU39FEBw83X1aQ42TwKwhoW83g468mGRTdd3ywM4crAAwcWhCuuA4",
  "key24": "5Hh5YbjiYLNx2R385f4zTgtigMpXCU8cLu3sB1WYPGXQPY2EMEz779wV2dRxoyrR3zm9D5ggRDf9AodPSMfmdMvV",
  "key25": "EcP1jZFingTkeZgupvnELkd6sDPSKqQbkoK65UnqNzs8end1rU6HptfQPZGfEog8z9xXyxVtCXRHWmcPojSreLM",
  "key26": "5GkwPMpEhkrs5tacxpS51zfgZKrtrZMCpnjMYwDbKueFKXmFsLWqiBBu6QwRz47RjNVDK1eEKi33BnHjATYw7iQd",
  "key27": "4iTnjYACJfTMLQW6ny2iMmgfEevoyoCCoAZTWpAM4zbhq6Kq1XC8Pn7tLPZzYpHp3FWdsb892ULDyXEPSsY3wynK",
  "key28": "fYALLmENYmsDT4vGe5rqpZTUJVz3NgpZfJ25bKZ5XKM6jafLhvTNKNR4LrNZg2CcnRsKxa2vzPNAHUGueFhPJ2J",
  "key29": "57M11GyyU1RNCEHdoGpRNGU2e5zaqDSdXWVkc1LZhEdRsg9AfCPrXM6sDtZFYQW7mhszow2MDAmUdcDqGvmuzSgC",
  "key30": "59WcmURbscmNL3Zh92pA3thS9S3MRqk8WKtzb6R95NsTbQJs34tHVWK9m95khjL1Q54sdaQxNoamZEUTZthPjqX7",
  "key31": "GivMjr8oNmuZAjXVmRqiDQQhm36vJEMQUKRjKygse55wREr2ergDpRkAZGkXtKGzBrYGVQQiU6N1FSz9hxxpdiR",
  "key32": "5aAuEvRq4jJ452vuiKDUuQH8D6DMh9JhVxPALKyUioN7rtTb8h1TttS5So3TLvXvBTLDtX6Vrmbtyo9at6qDmFAF",
  "key33": "5TpohEUnfRsvCJNveqTwuawYeern5XAps2muwKDXB9xhTMP1gBtiBUomXNDkEBaiwBE2RtBD5hc1DjZgwU6vJS2Q",
  "key34": "4odtycx1StnE8PyTTjZoHbU9MSw6cyTx8oZworhR59b3vDPdSoYh2KQ95VeAgMTrASPZesU7J75QER7yGtPGvn3s",
  "key35": "iMYNd2oLcETrYGhk1hqumzx46xF4gScFjG5rGBinzWrjEyicB2z2YJeC6yhRcbVuBSYkV1R7kLpxBoKxaiwsyrW",
  "key36": "5Ho7qSoCVohfooVDxyxXvyy4yYujnNVJjgq7AbvjLhjzJ4h2PYXokswFH3ochDpaEgwfqyhP15XcNco88DCRsoME",
  "key37": "2ixwWgPhtfAT6E15AU97gp4biH2S2LCLimQrLQZVydG1MXaZxvBBBNUi3krwRULr5ycZNJVnHJiBqva7qe2Bah5T",
  "key38": "TCp3QQUN4ard8zTg2HgfR18mSP9PeRGvjuE3TVKposs3R3WWv5yJ9H5eUSnMFMU374A3PBTvzYHHf4Wdi49hUWj",
  "key39": "3kyvW5m5s78vEUHfKqSL1kSEj8QZjoQ8Ncb6UZWyHvtpme4oEeYPL4eiyNVtDPj97yWktc8FY6r4snbLM7CoH6HN",
  "key40": "9FPnQbLggjqj6jNMPmFEHpaQj3RFmPf6nSvaCh92tTnDEGy2rhXSpCzaCpMWCYdAPHk9jvJ2Tsd85xakCAtX8WM",
  "key41": "wmAA38Af4cm1CMdfrHaVexQLoZ9rLUZfWEyvimdFwx2wgLdfcx3ea2tMSGaLVp6rr3heunCbRFH2gcZrvbQLs6S",
  "key42": "3kg9ffVTH2UoajVvQpPMerTtDPhiG7jM9MWTBst23iSSKozoRrP39tzFrmaMS2Zm7amkQdVfjLR6s3XzhQeqxXJv",
  "key43": "5WP6V1bNPkAKgRGod2FPZs4iBPaD3eBcwh1LHboS9HbjVxr4Pey8sEcV7tXMv6hg8eGV2xAe2sjRpQavjULPcLVX"
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
