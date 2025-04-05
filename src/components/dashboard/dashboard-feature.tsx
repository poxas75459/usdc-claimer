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
    "Jh9ws6qS6aQYQ27Y2DC2dNbwEydGDtcGwJQeDSkBXEPt1ieCzWMYb358pA1GNwX6UqM5t4VXBVSWKWGZHL7jRRq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3zZP3w6w1s2qDHRexX5pusYNai2UnMyyFMyAGbPoDDi5f9EWfA1XY735TaVTWSFzaz6Vi7MZvDUdm8qKHufDr6Wh",
  "key1": "4pZzbL3AodrBtxd2gVpgwzFADqHP9q8xHVVkifKcC725SDQ4GLCUHJxnGXDMYWM2p1U1UPJKx8ebJNTJ6LSXu5au",
  "key2": "57k37dsCKyXX1kmbwQcq6u2qEZcvwj4tuWGCW6cbJuWvqUstXFqybNzLdyGzHEhP7Pof61pRB4obYxJkCq6Z6gMD",
  "key3": "LDjNhtBpcjpfyyr7k65ZjNtqxwhoVfYQ1ywYpqnWr7EXRt79a5RpJ5ewzycWctJSh2KF8YtKh4HsPXAcRgFtVBV",
  "key4": "3cThyKTwPc7maiyi7Wc9oNuL2Nh6rf15tE4oDJTwNxvkoqW82kfADXoz6k5yWYpqg8TXU5vjkbNrmrka4L2GSqdH",
  "key5": "4oo6p2dUAH2GtWT5zcwBdg19nE3VdVyLV2adVjPRfZ3ySGrSAeHUPqWm75hBAmFJTRVxWZLHXre7GaUk2WuFMpT3",
  "key6": "RskSxGegBnpF3cTRaiWJHuZZPX9izmn35NthW7puMHUJWnJwSpDFfrD8TxdkndtkB5dSTqrMGYdajGKM3E2agB2",
  "key7": "5A82vpCTpUMpLq3o3d9us319ADtHhS2ihHPiA8Js6NcHStmDDZYCL2fgLQc42oBKa2ZwWBBE35r6e2jBSZu9cUnk",
  "key8": "3qQb1gu31U8TPcuvXhLfP7XeorQz7m7WHBg5p365VyLQr9AtL6Zdig7G18WV4fJ2uFc6D6Lsb1vdrK1U4DdZihdk",
  "key9": "5EibPEyGSjvneqshchjndC7XH5BRm1muUwY3LJvyWjrbhoE3ZTCWs5bgspxAUEmoE6uSoZhhE8kGyhprJAef2WhZ",
  "key10": "j7ox2wAvh2bEHuiYbqm5ANDbLQonqN6bxD3JeRtbAg5ZKQUMqEeLVdXnuzNrkmb15VK7Fax4jwjj1Ms7JWDVVPF",
  "key11": "2Yp8iBHcMARoG2TGBYTn65hFcsPLNaDCmH2YpBYJxSrNxWn7JhUmHgb7apAWSaJP3CJyZEL8VeVh8ysPznK14pLs",
  "key12": "5tHjdPD3TNcBR1ubP711v3Nv2Ujydr7FAXBrGD7VJYsWsaFRvRYv5WxssBMQHuBe4ho4mJ7SzZVnqZ5xnS9o5hb6",
  "key13": "3t1awjP6mycQr4E4HX5xWesKqCe7Uwbn4tMofcsaC8GtcdQbAY3EuD1yqokAMgKodhsFT8xHPmEZMgZivmpJtVEZ",
  "key14": "5X2HnKsnT2DDkYQjDd819zz4k226oPmAGrq9KSaNk4qvcj2C88d1pf5rBM7QtX45kwwUcKqSnLhRNySW9fL65w4s",
  "key15": "2RXXnL4XhkXTy3pJhBgcnH9tk8wALXaN8JZrtNL5dfpAaccRxQf9zKViCR9KpK4Vh3Q3bfkHDoArcyxjN4QyePTv",
  "key16": "4hNjxpwa9UCRkNSNVCQCjo5jWD5JuswBMNUh2AEudFRNFhbr4UK9DBgf5pUeF3cZTsHzjDmu45EHWaPB92mktd2A",
  "key17": "2D3hdXuSkd78mPMcpHqA7283bCCqrMaodeo5qkC5vRQJs3ifzEpkNCrPtyoKKkePUPqDfMNyGV2jPUfr54vV8ZjQ",
  "key18": "24rfjpmtVas7MYER9v7dYvDFco7XUhC2RFifudUaZdoTTsQq2hcNjYb2iDWrDCEET2eoqDzFbspB8Kmpj5YByx9Z",
  "key19": "qGgjvETBQvQpMqf3CMv7J9sZDFJZwPHFaTchGv3EYoVwuJWGxjEkB8QJUFpJACzd4MxPa7tTWWL2K9Lozom1XCz",
  "key20": "3R2BJd1Zif1PKv19iTP4CjXxjzgPZxMckscnAj6HLEqEM3WdzgiT42Fwvr9EpSbMhQv7hZLAwehZvq66Xck6jyTK",
  "key21": "34CfSzAwCsxK8Ra5fKyYBbiQ9sfxUoHuwEcEJZPah7Dri9wo2ts3VmPkYuP9sQ74jRzAh9ekEh5fmzHzpCvxFYCn",
  "key22": "1UrvqZk5wRFfnzFagjb5CoQENkmn1xy8zxAfP2RbUg35MbZN4czoCtHYNheirdTJE9G3k9yi1aqvd1cHhpKMvDn",
  "key23": "373GGExkP2gSoURXowqHnzw2pYBA6eMorJjqMhPNTmqcvgsL2HKsdzuZJDzo9TqHFZSuGmnaw5feEFY5cRKnHD9d",
  "key24": "2sax7av1SVUDLJDYFs71dpcns2BL8YX8HXga5Kx3HS9qRW2fsNgh9MDAc1Ht2MFgp33oVm9PdFZdG6Ryd5y2w5Ay",
  "key25": "3QE6jqPPrY3Tt6gdUrMwCboNpt6bnZLSjxb5SGqLAE2vMvuqqRHcRNTCX4pFePEWiZiBEgLRLCj9iQtQxBCCFBc8",
  "key26": "x1P2JtZYr1wjsvkmPWiyzimFXRoQPq9XpmYEm2AEuGEUFKV4Xsz4MhWq6UCDCii9Ehb1ANNMdgor9QZjCXv1YNz",
  "key27": "5egcqSYuR7x5V1KMdAmWwTo5ZJr477Lys9qjF3SY9R3yqGE8osHa9esLimxg6M9s6NipSyDgr7vGqypezbqTzFmQ",
  "key28": "2EZaW6rZqKhDbRtERUMwmfYpdikQyPZSKAB7qVBvzxiNPTe3nrMFqMDgux8PP4mfm9AqpS66NuQtqdr3zUJ6ePAE",
  "key29": "2NiRt4gYUvNNkz6oEfQhwXPUWBLzwgAjNatNmZCA79mZfnWeuzAoXb3b62ztmmHUgqgHbQ67mB1D6rMp8Pmnbzob",
  "key30": "mXpnj8T2FKNrRw2x5xWJXbFU22H5oZB2kpZ7KJ6XLX9pSTwYNFFR9GwcyBGjhrVYryaHqwsEWiNRApsDjPrBKeA",
  "key31": "4eenixxgYHJgztgXkkPjuuWubTLtUhnKbirtBpzjefpM6jah7UN7uExRepdm1nxUpZDy4HkXBSCLmREWuM5RXWNp",
  "key32": "2XDj34rkViJzP4YxqqFHYRekqLqGefnvMUVjX16BtV5r7rCrmhgK3DfMTqNN26tgwRPkkSEmED5M1SG1zN8MgNsy",
  "key33": "ofvX8xLqbYHEGZq7m1Y7QmoWjEyebn46JoHwVznZMhYdDfnAHw6cwCuXCnkuA7gxe6T5gRriYzRw7Nc6SGGmjT8"
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
