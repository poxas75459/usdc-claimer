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
    "3UzMD4jHn1G8E2MAKYQErc86k42HzEVqJGUbtfQQyuSdGoKQ5BBGgwMCKKfRqM6auHX9arhfzcq8WHeTifGuHFYT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3re3eir6ukcFaSwErNCA3oWJBEw6U7icLvftokCMz7Wt1Y3dnkA2LsNpmeCNpzYUjheUwiTowtgKFUtggbcM4Cn1",
  "key1": "4LSfR5yHU6QRvBP2wF5rMnavNKgVuK8qKj1D6Q5rFmRRMbYyZTifSUZf6WBGuYcZP7hYuYidJS38gKUQFxyYanBt",
  "key2": "vgiy1m6d5Gu7NU45EdMZNBvgpoGeWQWwikXAjMyk9eDky1gufiRyqnFgho6RzKttvytjDreUxCKGzNqgA2bnm2Q",
  "key3": "4zj9n6MXz7DyMjef37Gze9b2GHzbNXcJhnApfbHisCRA4vUn6FF1uqdaSfdDrHhoUMBocehPftYb8dCPcs2oz7sZ",
  "key4": "8ZV66bNJ5DTaYMxG3wTqgN3cChkpukpuvka2qkBomedFLWyw1PsPxUFhk8Hu1NWCMScq2TXfif2s74b3GnG5e6r",
  "key5": "krLnPok3asaCGMHJZGaBsfAk5APuVq6LgWDt2xETtLjNCndGHALbMAk4dWm3vy967FNK7nLufRLmXsT8LRLyr28",
  "key6": "2aPaam2My3FdC9DJWrVCa8KbpLpMbu6C6s14HF5wWC9ypARfoP5wyDWUHx5wEDGqypdn8h9ckgijBPEXHM2tXWn8",
  "key7": "C4mctvAJSkwj91yTZFcaZz4mFVnyUmaTiHC4tyhtuSXLKEsMdkwMTZuWCyXBEFM7nqZsaCrvUJpe3f5vH2kZ3zZ",
  "key8": "5TPbkrdmrQzfWTXvdVmxh7wjCksNYhw7nhFLUGPbnTxQ4DucpCYDWD4ENmMVV8ZuKf6oGuRnNesj98WS21v8tpya",
  "key9": "4H5uvCULdtd2qSBtr7G8e1pxNLvrc2K8dzcqv1DsSGAGN79AnzmddN1TjcLKBBK6CXvcx4CJmVjdRZrXGpFbnMUZ",
  "key10": "5yZtj39k4ZuntZb1X8d3kWT4k6B4fJuyVuFwMpjuVEfAeEcf3VAXQKLKJGUWDzRNLCKTh6MjLe7Gd2Ee5M4aA8YT",
  "key11": "brNvZWLZXijrhcp9N6BobKuEShEvBe1193QX2ct8vLBT1DG2DjDNsungCGbVSSGGBkkzEtTc3uuRnRsckFftb4g",
  "key12": "4xHYreSosKHuaz7vJW47q5NDV2Yj1RyJyKNQobRcdQCwE6hYX83hD76qpFHn2iFC1WcaRmMDqTZAGNkUFTGNrGQ7",
  "key13": "5A4YWxPXYmV3Fvmv8CJQ4Xk4SykSECha7QmacCHqGf5ZjF7JQwzYjsnEyPQqRynrEMi8oVAzEJ48SigSTDfPYrvW",
  "key14": "2mY4Q7nnBBiNvuqDWzQQ4ZbxXtHk2kBXNLUhRzZmiFJLVMFkmSKbyQjDuueBbZSgJyJusYFUpVHn3pF7cQPoraWm",
  "key15": "4VA89FUe6YgGSQmbKvRzvkyHqgcmS6WwgzA6G8BsAzTwkP9uyzLc6YT1qYyVSv8SAGqyFhryvh2AvaQJDzWsqUGm",
  "key16": "5qct3KZJqKvHTRrLyL7EMaUtPu35517TmByYT5HCXvRdbD4TWUH2sWuXGLbJRq9MaK1GAUKutdA3U3tRdKDybPeP",
  "key17": "4BeyxXtKjN8cvSu7hwR4vrhJowKCSsbPFN2gNT7MgyWNV52cDJvbWNVXubku6THLc7oH4GzGpNJUxvP5qGo3vbaZ",
  "key18": "5khEyiJDp6hdTc3aA95RbtGan6YmrbPWm486DWJESUNDxX276P4LZTRFdE8Hhc85ueSpzy1BWngpsTL8BdQnamfZ",
  "key19": "3ychiA1PBaBRXewoeHrD9bPX958FTTkAmKgFrDRrh2pQ3aCc28e3oyqRH9w6JbEQytn1kSigCA9CUsUUAZv9a71U",
  "key20": "ZeWaAqALChLmusVGafWE976tYNzv66EkHZ17va6UTUGYfG2A83X6rcDNsyWSQB4wjK4J1ZRmrk7jgaGjdTdpG4L",
  "key21": "6o8wrXNdmwHpeiDnKTdhinGQwdhs15qhFQ2Tm8LTdcrzqeMykNae2175k62zjaPw2dGcSui4Fj3Zkk6456n1VeK",
  "key22": "4an4wmX82zReVCUPWoxsnDt7nq9jGRLUWPUq1pWCp3Erp3FW6pnANkwFK8ww1JiQ1GWNzxaBXG5bhb2JGpRmpxxG",
  "key23": "2n4Xzb9rz39ghmDLJnUJKpMVZaZiW9LCS1rDrDXoTXpkEVYx1vnq3Au9LLZXoedPpcCYA2kZNQ8CT4rdvjWDvqPh",
  "key24": "3oTUHYYcdZnBvdu6Q24zdE93jkVCDn1E5GNDHy6d62xbcA7Bq1zGzEpf4WSezF3pxatPjaaeDPpDUCx1MKjvcxoP",
  "key25": "ZxHCpwR92F1VXi3VyTFgFg3urX7efYz7cWQHwKzFwA6THepUWqCpJRm2tn7NctEJfWDAJcGiJq1EfTa28kiKSTg",
  "key26": "4JkLECQzm5x1UZF5Ypm9J83pGLHftsFEtRo8eo8Bs59jyCHoi3h28htMaGYzNV1KkZpV53714qV6Gc2EpTi5BfTW"
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
