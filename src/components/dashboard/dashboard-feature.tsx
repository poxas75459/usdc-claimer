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
    "4DxHvoLxh4Q31wKeirdVCPYsMz8jj37bSrZPfe1HHrmieMfzf7R1MSWpnWpH3mkyssZsG1At8E9xHhgmdCAuxRJ4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "oZ93i2tBDESGz2JvavbEkRF7aearGndqidgJtXurJ3F8uBjtuxhJb6Zac9mbpRq5xkDmE4x88yZSUeYNs9V3rKE",
  "key1": "4x4VpH2XqQxD31ADBviX5a6iD8pGEgtZBt6dqdFU2eiXFxHFdENLSimv6KuhTWYywn4mKiYtw29iutoMojuamo2b",
  "key2": "3n6M61HfcxvwDzuNrhTJEgvLkEpYnkNxzpg1uKMpsg45aKUw7mwQ7LDEN99KT3sYeofK9VrpRkQUdhXQ8j1XeJWZ",
  "key3": "2BFKEkqLR94S72Me1cdcv6SZ1L83QijrdwAwQV6oFt3tY7fCpkFMqNQMFG5HMX2C5NUxitUrpoPYdRtKe9i2RrSv",
  "key4": "2WU6YgN1HZmDwVqhNq5NpVkVrYz746payXJcy4aSGnDmyKdXbtdoyiGiKw5VbRGh6Nky5yZHjdEwPfmhYsSS2cPe",
  "key5": "4Xhx9qBkCSiZL2P17hFsugYf4Pm4ePqJWWsGuj5PWnWyfhMcWrKmDuyoqeYesyfHVZ2DjJ15cMhPeicfhicKt6gm",
  "key6": "gBqgS27ueyiq6DZsjxkFZjBNXRji4eovzFzuB1zYKvVBS489UxetwLz7HcuvVgjhhTQhvxCmHm5hB7DZaVYRj9E",
  "key7": "5mRPwK9zUAxvoaAzgV14ZSpCL99k8EzwrTDvhN7Aa7hsnTxkchz7Gxu46DNqqw4PrxLC1TrreityUb2fAJ9NMfst",
  "key8": "23QQdKxCwyTdVwB5WxQvmQVQWj7k23hp3JtfegiB4cGiY3QaV1DbjToWq18TbMrUCaUJGRevQEF2fymFFk9SFS12",
  "key9": "3EkYqCq2kdqGgYchp37okL3dGNLDehRi3f4cNWa45jE2c2m3mVwGdiqZf4NR83aYtdXJLCqPwM3rzL7bLFNFYMyE",
  "key10": "3mZEDZQsUSqusDcKW6BhypGikdHHgSTznHgizg3yLVYwp9KBDsoA2wxJoVXt1S2hLdKgm6JXaGYmonkBSVc76t6d",
  "key11": "4uyv8rVcTVmMETHkpvSshwwio7EtrX6xDUXGMYz5vVkb9nuSbnFY3EyTp3raLVRo9foXY8j7nwDR46MWbCTBpc7M",
  "key12": "2RbUojxwXaLbdXS7rSE1pvFAW9fpEAZzphNekcJHUyEXdLZD4UkhgpM1eL4hdhobE1HX69UV3JfCiJJJNB8vDZJx",
  "key13": "2UBdzfCmTTyV67evR258gf2uFSzK52T7WTc2kZ7X3rnXvJumt4szuFyy8YtBJ5nuY3Mzo2D3R6Ag26mH1KVppaX3",
  "key14": "5UHyC2fePCYWGbApwhCxsLS73bZDsToWfVq7cVEudWmya6hVrAcLD8uMsH6DhKLC7qqjKAqAJ5BJhScdUxRs5eMR",
  "key15": "BV9gPcjyvTMt9aQwFCiENy5kJnXLNS3kV79n6ezTUuiMjvtgBF32bLC6y2AMCz91LUZkipn8y9yTuAjqsZhvS28",
  "key16": "538XCvKfo1ArXJgnBnBN5pWt11JGynmKoVBGBXCpQ5rAUm4fNphBdyG1nY9oykyWHEQEoYPoiHiitKWwFYhfMbjp",
  "key17": "5GWm5hA9326NbZyDPwnXn2GFLXE1NAP6ih5SWfLfJdjrCbaVscYwHvyDd3HYAGHk6Bt6vbsxc7KQJkfGNKDqgLK5",
  "key18": "NgVoWnR917zyrFaRWaE91w9BiAmEhD81LGp4aQDtJgioyLdYFPKd9HMwychtvjdJ5tRicFfv4Vb5s8UULhSg8zL",
  "key19": "3FnRx4WJbT1t1kRGkUvhEkWoPTwfL9JFCJqnCSaJqADB8DosEk4y54ro6aCQ2HnhJAwkLti8CwYSJZWJB5fNXadR",
  "key20": "3dTbthQTEJkHgu7nvELP82DGthsSmhHgmMg9RdYp8eSEFkfZ9YLCD7ErJZEUxKhQcM6z2xjy2JjXJHJaCadBHc9c",
  "key21": "KrVUqksGHwmgtV8Wfv6iXM8wPwWTfGzuWybMrVWxBMCfCmPJZNMnNCW7c4BQRpx1AZExGtvfZRr6yFQpnt39TLX",
  "key22": "21ZVMRLXUMBQifB8ZkDBtKEgtMCLXAmEy9b9HsF1TLHh4aW3BkcMy4Tj27qv8vRdNK5JJ39kk2aef8W1a6R28mEB",
  "key23": "2DR3s6xup9VjhGuPbRm6TKn8h9LWAME8SXHLSph3VFknMfT7Y2hhnh3BvhqoCBTUM7yvyLGQMGkkb79h2ahyw93q",
  "key24": "2xjdx67F5QfgbM5EAafEc9V2C7KMgMqym7qSs8w4wsKvfwMMiSxVHUsBKEBrMB1xH5ookxUvmsELDMVQZ3LR127i",
  "key25": "Z6sLAN9irVix722PqGM3trFTMUVgrtPKbEzDjo29rVCsKf3Wb1Ue8MLCZ8G9FN7uMYHhqLpLYAjoZXHrk41NksX",
  "key26": "2bdVk9ax86uwtYwY9hdUrPvRrGF2R3SneHYWL5fRpJC9Z6hYLrJnCgLj72SzLrw86Zr18cvRXrMXdHFh6t5TKiye",
  "key27": "3ouG1ucghGxgioPAyThfthL4YNi414isMZF88pCoCBt9sqLgmCCAipKEAn1zqGEcCD116HWUpkareCCQPdoniUyT",
  "key28": "3ctyiT3JLVYopJ2es4z3rvaXhe7YLAN3fowdsvSHQWU6Q2dFP437HBw4phr5C8myU8f3MU3kfLNCkDb6LkzMaUmN"
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
