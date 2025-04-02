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
    "bNa2Xi3FnTd6wnsTFKY7g934MQd6YLo7EyvnJUWynXrZM3SrAjA4oF4RAMndN37U2bQxUWBxRvceujgaMGYHVK4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "hWhkQfDz8k4rNtrnh9vvut9wtazGpZBsgVTyQoFUqAJtuKLP6ndKA69X9szVmXK1t2BfBJYJ7dHjpBcKDax3Bek",
  "key1": "4jZ7dQwxEjWq5jwfqh8nJbCU2KEJ4hz7oUxbtMFQNVbMNtxxSLyfakEL6SVgCbRXade3R9K2cAgiV2ygEzDwY6yR",
  "key2": "fJCov23gycwMifA4NtBErahi1Wk4ZRo1VeR2ngwCkthpSc5AP4PXq6GrZQHwKJRVvS4spGniPYbF88xyaqiPyoZ",
  "key3": "3ZkGmPYci9inPACowuYVewEAhWrpCoJpFYxU9VkU1KaKsSgxgEZzrBNqbuBBvCNukxfxpFBfUkQtQUQUhcp1QWb5",
  "key4": "oHebb2FzSPtPKKX2MYa49btTddZjisMpNZ1RRq2mkMiqC1YYCKVHDm4gDsGpJyxvFQrWkUdgmNccQ3SKyDrFDhU",
  "key5": "ahwUk2R4dBGbK6TcFkLQt74HnU4RQfUjtQSvDkBoxjXPomyZWBkejyabdm1gsnA5GyJXqMSp5sqhMGsu8siAfCc",
  "key6": "67mMtypc9NmEnorMsKSSHQaUSb8BvaZ9FHYDMs98ZVEGQ39Zq3LX1EptL4e1dbEo9u8UvXwyGDum4BQLWwr2PC8C",
  "key7": "C1f2vH3dsFn6BE1MYaCbYnFLFSoqMPtWHB4ptH1xYeFuALbFadE6r9Jepp4JQkL1xRRLJz6ViHpXpCZmwAhKKZY",
  "key8": "3QUHxYtftMB1dfuJWDJMRKSbEyK52G9Jao3AUbRrdiH1tVVYKJw89TGWBK8PKfzVyYHCBm9uEYSWRP3uH6o5SgaX",
  "key9": "4YKq282Mrrq2jJPY3B2ubyW2yXEtjPobQYVXRTMXgitYLUT44cFPaUQZcjLMuzS3fxxWbTpydVUa13hjzqSWGL29",
  "key10": "3UocKg8coLiKx4QHKDbJ3csKJjU1A7ZhxK5ai5CdZonGGQ3ywUyLrkHPN6JCtbmBFUyK2YT22gcuwa2MTxHEBe25",
  "key11": "9uKBsvh5orB2kPKUk5qWuAezp6HHFL3Wa2b9eYcq2AUSdR9m9EDSpJhtwXFaCGZauMYfvpV757mPqLP6chDwGnd",
  "key12": "2AHfCAfrUn6GaoEhQSFFqHWvSRTc9BE2MDqk2sYEymx51J4RanJnhvehZTPR3RTTd3EeWmYWDsSdCuX4kmUJEwQN",
  "key13": "386zUtiRwgigyZ4VpqjrK2teZp8jUi4VnDcC7BWSrZS7v1GPZ5GTJzhBNtAbAw8CW7QTFKn7M6aLjE2HGUvcq1Hd",
  "key14": "2jUvWhbdQSx5odAoLxC8Mdtqgr89EGRzah6Rp9jmu3JQFHXZCCv6uxdxxK4THw36hhXMbmjzDw6JpsX5oXs8ALzt",
  "key15": "5yoSuFFypGYL1KXznYZKYwiDEMsAhiQ92XrHtS6aFkDYnmSiucUaHdeNRVqmNFzpUmVbUT1r7FZ3p3WJGWPJL4Wj",
  "key16": "4mN1p8SH2nPJj6ov3nCWcxzJ5KpFEjAMcK6M2XCucq5NiewwpHcxX51BrycM8ivUbhhsbBVBELX7oKL7MmmFupk4",
  "key17": "Qhv8Emeff8Vk5RuFyeJNMkAx2QGBijpfzwzVtpWxropmSBZFjnJbYDEP5qAdbVBnRKfEFw132dZ3dGg2nAZUvG6",
  "key18": "2Kf3TeuUwBCKGEk4XahK2csy6L95Kh24esdU1LPWNMJb3ef5s7J2U1NHMhfyiuHubkY8U3oV2c71ntvWxgQdGbU",
  "key19": "3vhw6bqfpFbi4TS33ZktLj9sGT2i2z9CoFPGPY9C6ExNPAaKZSS8g13ws62cPkRMM1MpFyTcbsdPF3Jo1f9TKtQw",
  "key20": "5XD9fG7f3Q5WZF9VJEz1MdAYEjtfEw7LXdnFNDQY7TRryMPxuzMrwdnXffa5U9YUuBGjDhxMfBfedFnGCEQtfmMw",
  "key21": "2UvsxR3Dbi5yJd2933NQ4sXBgmBLUiSysCpBXBtDEnLmn4DrkbcMbpyz2ZPQ3BzmVr3G2fTgVa5kUq2TY1me9H2Y",
  "key22": "u6u18vXMwwnYccpnxjgmRq59aJuDH5oDBCvZXdbvzSx8TTcV7BrCqWq8exAgXPDzdgA93cCpB8UQLuDSxGN8gPf",
  "key23": "28tCL4cTgFfyWs3stnSqbDTS6wKf5z8bnt8z3vwZp77muu4Yyu9vfaKxbMfFW9D1umAfZnzdn5FLpgFnfgcctCMc",
  "key24": "55hn1xzAqm4yHWwufK8AHZTPauUNXeEf4TQCbU38ktcymTNdLTey9vFXmsAud6aAB6iMoLnWe5PqNQXDDTrPFmbG",
  "key25": "bkvJFUtLM5uP45LkcZJZrsuqFmXsqzRbC4nQbLMgWQnr6Y8hAtTpWAQHhzNwBQQoHTV8nHgXLgM2wKhqBSjThQn",
  "key26": "5PisVdASNMzsr7wzchMddL1ZzG2W2XmwotpoYPKoN2S9PZ1cmZ4AC6EakSZzXpmtacJCgDZj2aYW1P5VjiTJvVMR",
  "key27": "4wgQZwHXdzNMsemYWwQEMsJ36HCJRmoxdem438cM7cU63HzQVtibbXBtKR1BwuueoAwanYnrRQtcbW9ZH3XtRZdo",
  "key28": "4bYr6Ryz4MwMbbS1tDwvYkFL8tQUmVtMiwJaueqKLRU4qL23YgVHorcgTzcs9VQnpHAgQvsLY3YR872AzCLyNmmF",
  "key29": "4LCH3dyYU4f5H7pFxq5TCyHaNNzyyd9NtTEsfGjStVM47v4cwqE1rPFWUxTweehrUQwshnmi9LvjgnYYfgCZb5xY",
  "key30": "5ncnbWnidfDG9voA7UdVM16R1FGFhsJRxdNp82s8Mp89Yz53aH25ZDzwixssTwxuSx2TMj5TtKLiJL5w55m43rxy",
  "key31": "bGTzMNHQkBJtDZv4PAS7jPMeWFKzRTy3U3SjUibfjXxRELDNHE6z9JThGBexLAqTBu889hrdqvFXb2mr9ezSihT",
  "key32": "2ghw1UsubEmoaaMybAMr9fg3fDCXLUCUVwrLi3Y4eAAhwiGNuKweYziiVeYtQwSzSZoxwL8Jc4mxtKjh9qUzzFm3"
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
