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
    "3xMhCTMZRHrU2M3qS7U6G9HkH2qRSuimfjn1UunE3jbJX1cUJQpX2rh9nWU3X33ekkc7cpExbVpX1wPnjrqthCXf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2cmEN9XWPhgtRioD6dhg8pKfipjFrBZs3EdMteCXi5nNbJ6568pxpu4jL44MwpFfTEhJueZGGs35ZcRY2NJjXb2E",
  "key1": "2sQcnmhggsBmuTBUxVnzeCkjh8ET5WduViKLkqTwaFGxkkGap4y2jvXHWu939rrw3AD1xWfHeyKq4wvoQ1dxJC9L",
  "key2": "5p1BSfe6sLBMLiCwdeAbTWeSBjEF64228H8Sym7NiqCAwkCVVCJmUb7gKGCnvgqyVM5Y1gRM8CuM7sNuKEca8ZFj",
  "key3": "v3vtYMPFzrTpVgV7UFZRqyHH87JtZSxpYfX3q1N3pWs4row6s4LyBE1ggadErWur9oQftUH8e49yryYj6dEYv8t",
  "key4": "sFXe8QUoRoA57kKEXW96C1czkDVs2n1KCcQtuXZLsunAV3B119c9MUK4NaBBGruZh2WBp2faEabtzudHmFEpUJp",
  "key5": "4LEcUkD6vCeiH7i6HBcUKvK9VzkcTVzBvJbXmu9gxe2D7UxrzyimuNCKWony1CcpJDtPKVDvPUhFY3yytKoF24tt",
  "key6": "3CLAeRaDLampnjwjzec22EpXuZ6U7XwDc1N9iL879g7oix1gzutipfaZVydjxLnpnfxjX6ZQetWBrochqFbbDnhi",
  "key7": "2t7UR1UZ3UXBFGZhnBXjQekCZ9PCpHq1iC5274BS9brnFxeYHAwzQK3pGxwraUdR2iezJqnPh4K4VucdymjKYiAU",
  "key8": "4STjB5x9j9ZM9XmZZDyGp7oCeSeiTDtYYmvsaws1oZFTTKq8DNdDtsWsMZYsSAnGD3jNHozdCjiruw2LuvaHHhpk",
  "key9": "4ytBCyWcvwwFgkmknzSbw2K3Hqb774ygGrsXY3pFWFaurJZfEZhyUJV95eg4FWLn8xWTriHeCYQvF8mwmLhDCwsD",
  "key10": "4ncHauxmoqTjTduy2svfHCXiVdL7WdQXtLbzDtBWSnptMuam3UsRvRHRVuiA392gpztfiv4StPC9aZDqLKJneQEz",
  "key11": "3h7mCPruXdiXtxk4eXVAbYnAi2D63doTjnXap2opsBsAxeqG1MFJtnmwwZGvwn4duDPFrQYeYF6vcA8nJSAKpJrh",
  "key12": "3izEsR5w4t3dVD9MdZy4vg9Mye1C9SZwt9AtyL1BENb1YfmUK4t5U975bxwRrwcsgEqEkvq4tdw7RBcm2deZKY4V",
  "key13": "5r5E4Y6u9aGG8viL23xEz4B8bfLiQxyDrmVfuhz57qavzoVMbAvrjEVS7PzKYs6PxMgkAsVhhmhqUbonY48PB1Gb",
  "key14": "57JXZsKGntEfU48zm1mKxJi2Qm2hh56u8hhVCQtBJYYvd78VdgKsiCyzomhZjrkU5P1AviKwBNwXtrHAgFL5XTAx",
  "key15": "NuktPzkT4zigojdrt9cKM8SzD2B74woqy3vBramsQuTjztZxLoXtJY8ZpVFcb24hN4eg4d51ug9ByFibu1yZhmF",
  "key16": "2UbYosMWnfU6de7KreVHWMAX4xbjDJ8YUbjn2o54tqqxirb249nkqzjQXQnDvsrVFoKW1P2XxyiPqwczA2budR6z",
  "key17": "454mAzMDuZ3r9Nsj8BZxsi9aAVudHCcw33w1cwrxnPzSxFGzLMjS631h4MaAwVmJRpLCGzL73dPZYhNTCbR4H7di",
  "key18": "2RiJxUhTSw3uuKU8jL1ge5MpfuFZCf2iaT2bqXLEMtK8zFToRHLUMca9hn2J3pmGaLyZar6Gtn4Gy7zaFkPDLAAY",
  "key19": "DD5s7Nt9Nui1G1hkZCDZBmR4EJtqRayjXnia4Utd9wWiqyk2ZSMzjFE5AYwprMbRKRW7bdJyqtd4bfupmDSuPVc",
  "key20": "4BvU2pkWWhEGfNFHP5bu52HHdatfrH2Zk3VfeYVsXw4j5PF9Y6T92Q4RrrSR3Q3FCq6rsVTFy8S5ZQevULCCUeiw",
  "key21": "632vXtCX7mSv5VFZRyiuKpsnrvfCKEC1tUhbuv6taVDjTt45Yqtd8XroWdokq96bbbqaGPcw72AKLSrTpy15CUhx",
  "key22": "4Jpvqcc6BLfdKYpB9ifDXfznGCE3zQi8R4SBiV5K2NfdnMTdQUcNDCunhi12vXxLHfTJM9w9n3Tb6rgLyMbb7aj8",
  "key23": "5uRhhvWhHdsb38xHzEitWCXrB7hK53ZLLXdA1qixcFbsWdFguCCMmUoE2wNhTGttRBMrtDLfe6yGGNofyC7THhrW",
  "key24": "4DNk3efM6tfvK4CQZLLZF9hyCj67QpYS8LTKKFrabv56EnjS4ZXvteAavwqj29iYYdF6zgHk5BhAwPcAqNaFJCLc",
  "key25": "5xtLwWjADQHtzRkjxiHzPFjaqg3YazooK7WhwM1A6MNYajaBs8w1bw14Wu8b8bcE1ErcJd3MY9dy5kUYnZq1B9JF",
  "key26": "3CsxGPBdsSBYYrY7bSDrYdSoUZqbsbnd6uJUqTZHqXwVnM4aH1ndJxRKGaatouJ9vopxJT9pWJdM273WJTAhUgxu",
  "key27": "23cfW91x8EwiJ8Yr988E8ADS3FkX7cB2wiMTiGCJrWF3Qe6ShvRHv1z44goHWRkNqXv33Zwop5p12M7k3iBbHXKt",
  "key28": "3XksnnTq4DQWWKAHeWEjXBQz6edqu6gNw6gNBHcPK99WXzBTPgQQrLpZLWX5XtobakVMKApxig2CsuCK8d4pc9bq",
  "key29": "2TPHycayyhmA7Fe8UZr5wHd1Fv1onVZdEVJifRGwM6Zg5LnbWGVW9XkpKMtSgWKj7q13gEJKdow2Sg9zqEJ4fUXS",
  "key30": "28VPxtgGSge6c1o1pTTnjfqBaLT4yPhZr7GSHL4iM45rj6xJPFvB3QvLoWkxwxWB5yrT8Hh25CE2ZwW69ivXSHWc",
  "key31": "217V7wW5YKbPeL2owhQTKEGgXdjCmpm3DkFodH12cjnCMkc21pJro2QpEFySRb1YX3Hsz4Mfj71xhDAAft7q8iq5",
  "key32": "jyYDoXhBkn2QkPHKV2hJWZ2cZkvz1detxQQux9qo7DbNCZUBrAoj566ar8XAocrskJdi6UAV4doHVaD1vn9ja6s",
  "key33": "5wVh3qKccYuPRqBKbbHTQBXhdjAjFa3XPrUm7kFwYaMePDEuQTFJjxHHfKczfaa9jaJ4mUUHSxTUNSuZR6Bv8rdg",
  "key34": "3e1j1QnUN4Mh2vabr6VwZdoRkCW24r3vdYTUPebDFPZoD1bHnXrFNVyfPtCbJoiAaww4uCho3mVwzxcc7LhnrfHv",
  "key35": "2dYcAVJm1UHRUMZugsSTjscfZiMneJ3zRQLWppb3qEPhySS3zTPMNAy5QfUHfnXYiJrm6JjsvHkgzwHY5qkDvbkh"
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
