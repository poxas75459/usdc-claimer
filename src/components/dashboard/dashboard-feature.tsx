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
    "3PDxjGtF7LRsot6UWYYB5g17Vx7byrkKVFFHQ91Rcdv9b4cX9jUuJF9LeJSvYspdguAr1FssBzurhcSjuCGqYY9F"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3GAZhbMGwrvzxhJbBKhp1UKCDmGEVZZyXqPdW34oeLjEyjQd6PRDQGgnrr3HMayeTbApUZYVjTp7dyY2cDgzsJPi",
  "key1": "2sHuaddyWXyGx8fuqh3gzzPyRkKBuGtr6b2cYfNUxyd5ff5RDukkBZHKnPYC2J1pS3gvorsiyfGfXZQ6d8887csY",
  "key2": "2FVguvsL5R5RTesJin4ikTjCuzQrVKzR34UoSgS2rm7Pu4HvZnkySFWYAV7HKYX6ju9wjDkgBbaWRqss4fNLrMdR",
  "key3": "28WzRp4aDXT7eJAN4PRohYCFigXKF1jQYaCY897wUrLJJJPq5tDoCMjfZHJEq39AYrYEn244FsyC3SmBNi7Q15Yv",
  "key4": "4YQYwfXhj8HaNzK7grp5RZ61ynts4VTP9ycjMhyK8HCQS3D45AoDAdsu3ihFndhn6GP35ZN96xKwrMoBGDJG6Kf6",
  "key5": "65ES4wBFkCpJm1wovQoxQLa8ztuJ5fJgNAtJeQ5FFZw5XWR1PkQLn1X1L6HvaD6Gfb5HvSJQLrHrShqJN3VmECXS",
  "key6": "3kKKfL51ncHQej7rU1vALdeTmhixT3uB7bKjGBwfBR3kwM5BRSq1rEncwZuF1E16mp8a5eKwhMQGgEZY9hGYksw5",
  "key7": "5JotUcd9LWtSshuK4qfX8M5qRj5FYuQR43iwhXNV5tjDunRvmc4FraTHJBjqPejAmEz78nyQpnxzxtzgSAtexWH2",
  "key8": "1QKuGqLyGwhtc9D5Bpd7amc68MrnpoPda5PsckEc5RaRfXjFxCu3oqhvq8q1jkdRgRzSX25Q8y1VAmc7jSeka6y",
  "key9": "3mbirf2pL2rNfxVCL1MStP3LXYD6e5u4SWiLs7e8yzgHv6GnegocZwCivckuptJYmddrT67Fb7dhmP8HEsXEtemw",
  "key10": "2fW1WfDPwCf4EnwtZmuq24zxYZ2YjEqQ5Yh4Q6pCQHmQKg8i4suoXC5y4Q8PbyWCgW6PL8RL4EkQpaGPwpA9ZHKX",
  "key11": "3hLPTdsQYBzLsNovB6Ha4GHaEnthMyCjpXYT3LX7WN9bJuMHbWxQ95QDQ4yXM8b2gSL5kmU19MKsdzh8yBj1z2cg",
  "key12": "4zDfjwtHTWkL45pZrwVeM3BUKVu1T1jDWFgUpBJSqS2NygGRPaQUgppw6rQtknN2EumCf7hqtSBQvd25uGveXJMp",
  "key13": "5KjsKuX6uJj7T753iikqFSt3V1UfRqnft6NoVp7wYeRg4g9dYJ5yZkzqL9q1aphSR9onoV5Wbpkcj7ei6n3dnqt6",
  "key14": "5pBZNygTKoYkPHgKixWEYgCoRtNkpMhKFCXUDgiQRcFcZha8GnpiGQLPNAnDXVKy3zcDoSrX6pF1Y7tgTkSs4ZXJ",
  "key15": "25iz5QsDsbafYcPw5oZeAk35CVqp7kDMRZS8h7sCShSAVRXX2es4KiSJPos7WEefRbDYsfRoPRwaJze6JFu79apy",
  "key16": "4CEd4PyKFqRP3gFBk3ZqWhQhPga79C5KsETBUTtrJdjTe4u7uAww5rz63Kev47iU3GbwAQ8kkpBfBLoi911uB9nb",
  "key17": "3JS6s6ixtjrcUerBniWbuMzLB7pnYhwuLv8W4QE1UbUANqornrFU4wBBL5b4Rd9VbfPcHo5oEVqcWMbBZFFqBvKL",
  "key18": "4DnT98SiKcGDZdj9tQuh7RA4d1EGsYM8AhoRA3wQ1R5e3BRXUXThhXQexwF2d5zAWVddzrdSV4tQiTKmkamqrMpr",
  "key19": "2iTZEpnrZtQNtjTBAKuMCHQh3EYWy1ZrG83PSwNPm7K6mby5uchkhREL5vKZCCkT1gsMHmgzjyyno5Hx2BD6CXJn",
  "key20": "5ZZiJYknmR9kqQ9d3af5Yq7RdCkdFUcC7uop9MwvqTzM721yVLNU5Q6ThtGF2rRbznKpeBYNibjzPziytic9an2D",
  "key21": "4LwQmRd5NuyyQjSEY2bUjHT3rd49ML8GcGqpc4dw29YLa2L1TRNnMnbEvVAKy66YbPR9e2MD6CXeFuZ51dYaiTtP",
  "key22": "kxVtEkeG8f3XsGAhWyP5qeydkB3FfSXDVjDXWadotmxztKd9jvTMbesyUc3UVrgGP2gM8PwSSNCVFPMQptSEyJM",
  "key23": "3rZwS7DUaYcaYPT7VpGnPscynQ2cf66H5JFQPZz5dTKRtWKqdf57z4Yv9XYD1q6Yg4JgCjTjDZHjudUqv3aZfZ2",
  "key24": "5pMbXj6vE2wQ6kBavzw4u1n86c4bCGfEinP3fBQ2YpgmJLuKAtsrfG1EJqFbnocSxcsddYdjxyKLboh1JUJDihow",
  "key25": "2k43gRWGuUS1EBajDid51YZVZmkktKrN44c9gQVfaSaDGbbThTmcaFELd5N7YkgTUq4PR8n3eKGNabT1SmPcN6TP",
  "key26": "4Vc2WoX3XCU7ekdWx7GdoczRoeRnvhHevHqWak7ktNDCvNHVBenYMoqzNVBSU4XLgGE88txB4vTpXN49BBamo1n1",
  "key27": "4AczzcjCk9BnkrfVmpkVN8JryuhiB6PVSiTu8ooEdga2WL4qxG8rE1XHhnwf7tmGiVMoeBvpMb3EZyuD9BeqqTHC",
  "key28": "4gENKkVCViSKaQvvTd93fQ9ysfaokeZNErrzoHvKpmF16vxtiKrkfiDCV2oiVD5FeBR5mnSCKSuzyBEEqyERwaDv",
  "key29": "4hfaLNyzNeewMfXFLP26Hh3jx61x6UAVnzUJ7ozj8sWB7Nyj8pTzQ6FTVr6n5GvMQ7wZudB7CoWnfMgLCgdu8Fch",
  "key30": "3pyWpDB86kJ3Dds72dVhNTf9vMQsDunoqCjiUtjV74yVcyzzt8T3BHVnZnM3oJMYmRLEeJJKpHGPzmURPGxSZJ19",
  "key31": "3rjFmwxx4JCJkCTWJqGQkMARLWeHZ1QQmWrj42B7PYdc3JV7FqauAPwfbMxVuHZhS92Ysdfk2VimnfPjgYJo8vJu",
  "key32": "316Lhzk37DsiswUCHSWiwHdncfdqdLmRcY1Vruh3NiiDZdsGaHymQihMoAz6613TFJTUW7qRt7YKDsFsBdeFsMiz"
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
