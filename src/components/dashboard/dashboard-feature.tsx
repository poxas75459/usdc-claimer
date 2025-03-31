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
    "4DovjE9aqnnZ8AXbHbbu8edBW2EoZ2zywTRbp6zuEXcDdrqf6WZKmeZAW1JHK1gEBMvWfhk5RHaWUQ2hbhC7Boe2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4m1kRCwvDq2VKcJbWXpGyNCwEwYm2752HUCANWybWtoM1uiivE8FhWgM5iPAo9947zPHA4cETCYgQvEVZygYPrtt",
  "key1": "5UNJb9K61MiA5Tfp3WzHA5Acz2HphZ8CbVq1x2izxe4G2pxA9UbUsy8UNQh7xf9EWkk5pF6e1LktRYGz2JVHta1W",
  "key2": "2pT6B2aXeqinqjPwYuRhWBcHvqyiqQ9QiDMd2KTjaUMoWhzCEftdS5cMC9QjZXT6Wh6bnuCEVfzgnQVaqQVRCvVt",
  "key3": "256KbLGYLJE1Q7JbbiREjFQ8fvE6Du218FmzPwTYAkosYLqQzanj7ZWpCGWuSmruWJMmeUGapRb9hSdZPXsQoYrp",
  "key4": "4Vcb8U44LRtdFgpBNqyqjmcvCFukPxaTbiZvipLvCvpzZUEd5icwaeBfZhtn11RpyMwh2a7Y1Zw9Rc9phnpbJt2v",
  "key5": "4LPsGGQ9hXoQZ4hEUYUs8DLfWgYusANNfrUuGh5tXE83cxN2FWvK2LKU9qB6VFS6tptBz2v1MWHMhgUdNCazzauQ",
  "key6": "EfL1vqkA13oX7RVCXsArWVN7AWgu6WYSjkryDwAiRV5ReW6gdkUKhSpcupYuiZZTaGXRfdoE5WhPo22R3ni5K83",
  "key7": "5yChWxScFbqUrPWVVEuDjKJN9j1fB4y8pwJTRZQzcSYQeve5XsBKsxsnMjg8Hzd5msu2zEFyroNenQiL4Z19p742",
  "key8": "5cHZuaYnyMLWWKVv2Bngcxhzt7KQeXmfpmDfK4vj9UpgSJBz86gHTSRKZ2BbhYY2wGsKebuHoTF83GBZ1YEGFFmg",
  "key9": "4zcV1XY2M1tAyY4N6tP8h4gkUin4DLbUFxQh652HeRN9xNRbyiiZzJvfKV4gSEErt9KCu9XHDzYffEma34wU8xhx",
  "key10": "3n77ubN3c4aavQeqN3qxz1iE9122jL4WrYUMmvWMtzqcVsz7tqAvDnv9XCvgcvb2faeg2SwcfgBjHwjvQqKprY1e",
  "key11": "4C4wL8cJBpg44QPZNNuQhcANktqGYtY3Q1ufbctxd5PNouoYWv8F7Domq2RZaWpSrtq8pbX2NQfNyfwQWpYwXaZE",
  "key12": "4SHzusPUieNtY7kDBZiK9GSJsh16XEPQ5JRivKBmjR9aSPiBXQF1NzVD1ycv4i9zbQXUQ8cBoemmKnDHLCFGDS6s",
  "key13": "3kV7JciRpkpi4rgorrn7XsLnDWWjZTsMjdDtL21AH5NDy3LpDrLn5dYTVZA1RRS2KaEQZPdkYCGgycnBNgvbiRLU",
  "key14": "2SwFQZhTKYnuWw249jd6FosDuJpLAapc7fsMXnttf8oLxzaxkD9xvrMZoooKrJivtvFmrHBZQvpEe9F8hGJY62Hg",
  "key15": "3fV5C78SrXPuwKmgBq9WHjnoQurU3zDz5DHWHvMNKoZaa9Pg41WiLweRgXtFRmqPCJS1GVU7mDfDjuHPKkNNRez1",
  "key16": "qTSx1ChS6HhCvQZdyznDq99LD2X4fSaAbafEZY7rdcn5or3Yk65jQqo6N9bWxm8GNCgXR5G6esTbJMNVo6pZae3",
  "key17": "5BuGNFCBdZUCp979889bBQmNzp8AVzvctYY8bxYW1TXwcQ6ty6usTwqfCBHDyswDhwFCXtXp6WbFqskmD1E543F8",
  "key18": "3kjEEkZF2f2hkZDSv261SQ2LQBVDPFCKYt7Ysts5EeYrD8NgZJg4obd1ch3Qr8dxGBufyxE2Cex1KFqmAa6mFQRw",
  "key19": "C1KVGfza9qf9muuNBdDL7bCcfPrVZvf1CZgsjAcUcRZrcHrKeQ9DKRRRXPNH4oAukN6omZrwQ97Rci2YacPMEHU",
  "key20": "f1WiZu2uaVYH96F3GyjnmTiPNbnUcskHFDXZei2VJv1xvqFL8XaUB4yoq4fHcam3WAsyA8iJ4LRFWATrJBkBXE8",
  "key21": "3Dbr45CYegHSQ3n4Ziz7fL7FkV8a83CgApaxowLceoE5Mzerib3XY7uhiMnaeyzWDAdotCwwFRzhaiYZf3jaiQCA",
  "key22": "T4i78BD3YCexQSoMB6o17Z55v9dDk9Y5W4474uV5LBaA78sRZ9NH28GY8fGqE4UvkYTG5kqqBKawTusqGBBzM3L",
  "key23": "5fdpG4Wqug6mJ1ZCfibVLPCJ9evLTkx4g6REnPePYvnjjRX7pfU6cysxKdpZKfr5Ci43AjwcwZTEdxdPbcpEFCoN",
  "key24": "4EwSeyL9wCnNXazMxaXZ1WVowoSnwmwBTmyex6kuSKbfcvcaq53nYRqbXwNig7FDWxw3Pq96CyLGr1grUwSuCBam"
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
