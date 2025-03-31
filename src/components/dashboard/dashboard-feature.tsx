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
    "5rgEXx4foU67pHsF6jBmZUD6UG6yDUEYQbgKNSbgDwPX54kisxekqYFD3zPuFpbCdKbZ6qAnwswxnUTSN8HZN3aZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2W1t67ceHmJA2yDTHdYJBPW3Jf7jDXCciwtfgexhSdS2BoinU6L91wkMFcvsqGS11kp91DNcPF8JTDtjiDHuWLtF",
  "key1": "5au5Moqa8Q7spJJ4RXe6J3MNMLurFy6gX5JcK283PA1nQytcFuFjv6oxAXCPPHSwGVfbnL5dsjH6WpD7iqZrZeP2",
  "key2": "37o4HY7i8vynL3G3vVt6QHxNtz1x3cBeg8jMCW3i5vUNbMXQVy282KCp75fjcYnhk246vxc1z9Q4oj2W74y65Fma",
  "key3": "7Sr5jca4H2RLydusU1Q6168gp4T7Ufy2AeE81EptxpfDVksQzyoeAGhwVv4z7RiQv24bEgiKkqfPqkkUUpX4iqE",
  "key4": "2731VeSo3dBStacQLriA1tgF6ZN3Jva7dVUKvbdpbD1bb7co2bFz4iLzNNJmRBKtUpxVUXTyLK4zBBkJtD7Ey1Zj",
  "key5": "4s4LnXQNppHcSExrFzEWLWs6Nc19QcMDJWZP69MKHXLzNzk4Y32HfduP72kyCmdj1WWAknr1D8KMWeqQy5eeGeF8",
  "key6": "35YbGg6VRaVhAznGKfa6h4TtXHCQPiiLEZm1qD7r7YhBLB9t1bC5McDj94us4UGA9sDk3bJCnAjgWSU9xHcTGV5c",
  "key7": "4DrbfcWjHneUSdD4B8rtVfXEtXwRDcafnBTZiVjtT4LWG98dsKKkxZDyty2hVqWKEs4pLV7SShoPVmHUkYLoMrFa",
  "key8": "3jm6uLN6qRMgpv66W1np323yBw6SL8tYAV7TKhdk6xk55aa2CX2EziuDyfkVVAjvHv2sqNysSTGSMkNWzyvfnKh8",
  "key9": "4DhTapZB5HB5WSLEswZnWMvXcJo6tL4NPXDVQJXXxk17CVCiueU5yEDG8kfoVM8yEm4ihHw5o7fQMWt3nayZ5ecT",
  "key10": "4eMPjMa7tDRhANy8vVMy1AcKGV2F68AhQsTnVrzBRy5DQCkqzpdUb2urGDbQh4Fi2ZY4nP95u3CA8ZpZdyfBEpX",
  "key11": "g4J1kfunDYTdGRbwGxEQVwBrcXk9iotUTVY3SSLzLQZYaNU7uRuBUpjPtydnndEeyt4wXJdGbqnKBXXgCJKR1CQ",
  "key12": "3uFtvAUr6GBXXRJdDF6ZBRPN2XR2UX54oz5p6miKrjSC9MmkpCNaZ5Qp7KW9QVCR7zEh7VifqRLTgDVu7qhcias9",
  "key13": "3GNmGUCBFKqUwgZ1MuLcMtecaPcVLcpYj5LfTWcgQe1fQm5Z5ARoP589DG8CdV2WBwYzmb4u1PcF2chkc5THikd2",
  "key14": "4vZ9e5e2Tm9uKgwqCybNFWdRte3XsD4WRNyiQrQJuefx68Wj9Tm7Q64du3VuDBKnKh7QKCxNnupxT5bVZTrUtdfj",
  "key15": "33fxbVPrC77nTG47ZMhJf9sN9cmuJ7Pi9hSi2aneNGv6fAyzNh1VnbqEbo8NzbmX2J8wmGqGCa8DEpmfuTvzyhza",
  "key16": "3xvhAKy5DTGppKdASB2qR18HDk643HnfYuu5FpD3fypDZwLWg71su8GSFXL8wxCFkV2GXCScxKZuQVBvAtF5DnN7",
  "key17": "4uvYVAF5g3xVikSadnLh2MoYyEQM2DXmNBDJVHvFLNkYHMhHeA7n6RbmezCTdmsp3m6FT5esK7hndsdjbEPy4qEq",
  "key18": "5cdQn9VdD4LViHo3ndosBPwg1SH4aK1ofUTEhQMgGEtnZdrxFEhVCvsbJjjVfr8vo53wNvRfCaeKLsASPSwS2fZD",
  "key19": "bJLph3Qv5VsgtSFmSvPF1je3m8JXRA6NucGx6Agk2YmC5xZFTWRfZB68UK2wnPtkQL4uj8frhjLmQjbiYFbLCJK",
  "key20": "2fXw5SK3EpSFeKfH4vGneEaGyyWBZdcCHJSxez9JjcssvHXddXu5nXTf3AHg97uSLUnreVejFApmG8XzT7mCPsCT",
  "key21": "CnckVXXhnVAFPGHwevdF5tYukThrmmvKMUf4HVDGT6SdjVTFjkTCL6FguKnzL5DoiiS1mCh8mSvCExsjVUXGXN2",
  "key22": "2zBcBxP1fhYtG5mrRa4WFFBdYFfYS8WYhNPcbSAK32yNF2ykymJtDLrTXZpWnxQpTritXLXkPwWEhxKaiJ9bwdLD",
  "key23": "5Hd6BFdzbbt9Nd64cm2AeuetZjp4o3msJwXShMPPuxeB4kq4c5XcsWu7ijuy7tFQ7CCibYKbzawH14pNMSpyBbDA",
  "key24": "4v1Ps76CqQXA2dXXYk2h8LTETAkb9KQXmUremYPyXnNPaCa7a1PHq7CapAJmGyCFP6Ud7PrzVoq6XcqjBRuxj3vr",
  "key25": "3bLcKW9GvkSh4XAqSZQtdLSeujXmswkDfVU6kvnCtvSkVsaZ7MMDKqVUbZz53zJgXXy8LZFPc48GxuLAysAfaRf6",
  "key26": "27jSjtCH5qSB6ZX88tvxCgXSheKcps4KZ5HHd3Mav7Me5kSdjDHry9ZVavWweCDCTWAxzG4q4ZsL9fxXiye23rHS",
  "key27": "2t9P9aYuTpo6Mgr6byuijFWRtqT53ygcXsFV7JmFQQ1ToQ73ZJhf8TTGYrDis9A763ieS25vLBiLkuUNNg3jZEhr",
  "key28": "2dUNG61AaMVX7mRckrmNkRmUWJobNFhbZZRFAwy9oJVBx625eBbK5bYBPagFAHksMkyHJ1N9wSzerdaJ3dMfhR76",
  "key29": "fMkK7kvwRzxmARcduERnvLT48RrTXxPUgYrvc8gGtBUJPtzZhEFhLcnSrLnsaEdoCxJQ5TRYMUZusHY8ZE5XEDG",
  "key30": "5zTzGLUwLubQQ2QdNzN6qS5ScNZdPQtUZMHGUF9AohuxF7ZBXYZiS63sCG451FoLmSPCe15sw6jxCnERgj6r1cqa",
  "key31": "46pxMzbxqTz2QyM7XYFqNRTZhcJ4VbfrUBPNYXHrvgi86mWRjRNbwpnPPV6iiqhJWfWtg6wFX3KMJ4rLX89H2VJz"
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
