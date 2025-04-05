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
    "59TBTGBRd3MW7e2xwWjWJeF8f33HxP5oTkzyrafHLTrCoKMVLbYxd9xk4RbHEt37hfcYu5P624Vpca338i9Z3w5x"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2hzLzuy6HDBpYstWU8mF2dP1i7LF6mnbCAA6AJfgfh2f2VtSVtdu4PyZavQUJ3TA5uKErhXufEUA4S53k8JpX1VP",
  "key1": "3VtWgH1mcxbGEWu7XgrprcXzDoEh3xgp5B9KNkkrULGrDBE6BXSD5Jo2VAQMbK4MSm9WSyEC2ZoHDtiDG61ca3C6",
  "key2": "4D1ztJMQB42zQvPyMwy9wycPXCsC5VfepZ8j7vxJ4q9u8SBj95tLKz6zDyVr8XXuqeprzv2iuaLeJjNCNtxd59nb",
  "key3": "5HoB22RXrpyEVCneLanEVQGhnFE2qE7pzR9fwTuLkvdTBEFoswBmkMvgPwk5BfBnWNgHvzAiQCxqfFZLHhDjs2Wm",
  "key4": "4WELiTqd3A3XBcRVV5896RtTDuv8s3G5TWXMR2doVR1rcZJo88rekEgcW3JSRtcSB9omkSgqKCxtunBrrKEStkh6",
  "key5": "4DyoZn45oap8SLGxjBQZEz6Pz517p4ETjd6fmN85oX7FDjWqwQ2heD47c1fQbJrzpMKFwcNv6FjZPWEgpn1eAb93",
  "key6": "3KvNHQVhpXghvQo3dtstVJKM49odfCQrPTxykxJbB6D3LoQC3eEKiySxWJBCHCfnTe9EYWyXEZrS9piPwjGQ5vyq",
  "key7": "4tJiUas7M7RRWxEZupvusjjVoXeYdXKhhsWZtotxW6VVD8Wb8Ro4ZFx3sBBBxB2zCS6yQpNd5k9NQWiv2D5sby6Q",
  "key8": "5ppCGU4mxksyJURuT33vJzEtneJBAvabGjejxKHvst2nYefcbfn1YPd18cMcLXpgbxEArK6Z3K7wecwRXPciKKK4",
  "key9": "3GBCpkY8zV6s9jnFxmD8Rxr5CL6sSp9x3gmcxD8sHnWchQNjG8gpLH36sVYZMkTMK92dp2M62JVCjBF1fxUYajYs",
  "key10": "5R2jJKX4z3TojCJSM1t3tAxHV2XCoG3W4kjNrc3eDVEcfqXvkaAuA25desmXGk7Nq2KEWKMxWVp6quvYXjvUbNGT",
  "key11": "3zRSB2PFMXeAmX7z1YAMMMZmC9jJkLuxVuts88tCdYTerRozj18isXxBCaAEAtxN7rcx2jYditNpsfHzyEe8539k",
  "key12": "61c8XGUAn5yqcwNFx6dhxpVnCx1BSExHYJgi54d9bfXPU7mFd4eeJtvgMXXLovD7car8NbTBqiJk7Muans6W1Jh",
  "key13": "4i8r9TW9Qs5tm83Z9RW4c76iJVCfsm3pUTuaUBFEfTzFgTjjHf6a8QCpqaQ1oTqDt5mzKsCYcEHixLr8EPruoBdC",
  "key14": "KKjqLu4AMuhKjaDcmsEQtUW9e2iY4MLQcUqx5VW3GELxbVhfwsbRBpkyJPRAbhRDRC8XKx4MZ5qMkfRc4MQDFJP",
  "key15": "2UTzoGyiYVN4fJbUzM5i4iVFLr6apudSxcdNpff2MrgmiGtgkvgs9hKqsHQKJKGo1yrdXsGMd9bwsBQhtH3CvjwW",
  "key16": "Y78KGz9CzNbqQ6mjrFshPkNo1zcNnRJcfcmysWfvxC9WtphuyUQysENNBL6hmMvc3A25VAAvLn5mnE4q39BJr4M",
  "key17": "3TxL7Ui2ziWiJ2k9c3BjtGARxQ79v2axozmHkr6iw9Yw9pn5Rg5zGnKUWpnLycd2otfzztGquDPrU4QyE1K8UrEY",
  "key18": "3HUeGaYdCDDFzbvipqLb2TVxUDoMzv2Mx5ue6tQCePCExMtNzB5P6UEFHNNW9LhbUz1GW2A1q5LGJUPd3cRjRZGU",
  "key19": "5d92bfkEx9YvgUG3G3UBWz1aVzQZvZZUKVM4PbzkpJA33JnTBsMGQ8nLBk7JPVtogj6AbwxP9HruhGo7KLG7zn7d",
  "key20": "3ufGsxwUJpMKEBc3hPyTmG5SF7paKDY3wZLks3qdjHZgWnkNUyW2kRY2YEqRCSEeUV38Mr3qqn4nowjNQSvWA545",
  "key21": "4jRbY99Z4WpV1rMxJeHQNA5VWNbdYyL7JCddLNZHqVjRjxp9hBWVuKYPUBBapSRHkAY6phGRggPhhtYEH7ocMrQm",
  "key22": "2bXrv8E14aworqCJySLnca1h5SxgHwneMhiJeAP417JJuNCUBHDr49wsoSijNhs8GT33f1uzBPeF9eR5g7Mhf9F4",
  "key23": "3nMUxGadAMuy69EwDnetiZXoLABfs6zgsJz9xcBquXbex8G4vjABEbrKvHYQXyqMvZSmqmsM2ta68Qz6Aumz7V9t",
  "key24": "ugUgRpQJ5aEv9wPfa3KKztUWEr9PCMzfMrWgozaWvSwSBwD77RKvvGEFU2GMhEfH8Ucp2hZhvVc83rf1FecYrDX",
  "key25": "3N4GfhxZ4VC5ZnpjGDv2acaWRAczzgzEQAaaKxRVFbTdaLEoUSwimgopHWr2ggzc1L2JrZ4zE2YQ9YdftwBpF3HW",
  "key26": "2PPAM1JpVozDvMX1GTsyaJZNbv2zfFBiTafM96zhLeuPyPQE6kAgKDeSgiJoiFg7yA5VVJTA68aBySCfxYtB9mo4",
  "key27": "5dLeUC8rFh7vPw6jwoRF2nr1GPAG6n8X7LgycrSCakks5PM5rhntYc1uPLzeizJyKdmYwCWZCYGBoZwbm5MZG2YY",
  "key28": "4DQXLwCpJ6ToSFgj1342V5Z4CUSrwmf75S5gnvnxpZnzV1YM3RGHDJE2d3rXhsjag9of83YYgw9k4Y95YDZx9VWX",
  "key29": "5Jk2AMj5WcHBL6dxvMPW8VSL78Vchg5qDzAqck16FH7hZ4tpYJXkPF7hLqiksKtUUswpPPMbx2NZBtoWxCNiFPcC",
  "key30": "5XrhNv7TT3EjFgU9yB5gyejDd7AvQnqhfWwgW6KYAFVvgH7B6xWkGCBSaDrWdf5mVUGWCFZUJApbBWadVNPzR5pb",
  "key31": "36566YTKppfP1VwVqykHcKwUkGp6oUyR8y5NzG8u6Ki5k1gE98bz1jM34cyRbwUqrdB4AirLRJeiFtmdvC1Hy2QA"
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
