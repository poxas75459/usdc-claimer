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
    "2MiqkpLsqRSpVfMhD5uPeEFfVrLiAjzbyAbYJjCgywxXDvcCP5iwXTpRQXgYYrJvD58QovRRP3Mo1L7rUaBYoiww"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5QknB8rbB6rmm2Eh9SDHQvtYekLpghRA3s4ymTuLtoqUSuBoJE1U2JBdcgC7ZNLehLWuTFDhto4TnkPMsPZQsfJk",
  "key1": "sKY8xbok9St3MgoBxVNXgfEdDZ8QF2Z2UdoF2tG5urJ6AK3XbWQd15qupmqF3Qi5aYZhSoNW1c1TsG6465h6Fss",
  "key2": "xoUXdmygAjkiH4JAqn4gxxA4RSW4xqwSXC5CRt2v9bhvLLWjaATyGJqtr7GF86zQE79ZAyev3rqoTGM3o56pefY",
  "key3": "4BfHXtASEBaKhM6E43HETMa9GXHnsHBPCBgoTPvKrhdc7xHHteHPWqBsyVBJmJF4aCnbapqrUae1cUBTDDduqdUf",
  "key4": "xccs5wDbeks9QFYzzLD9mC9cUnJypPm4h3ZTyHKUBUHfQpZ4xvzfsaXSZAndoXQMvx2fLhsdeLG5i6KNPHdFT83",
  "key5": "vHqKEZKffKRWPR1tSYSSox8iHbdi3kUxpkUWojm3nzsPeUzEBbwcH33AXkSfSpjZnqQpAfdWc2Gir4AKWTcFNfF",
  "key6": "3RxSnFqFkRQrpnymkL7998jScCcfEFGzaCxeMs55TZA2m2eUKRm4o5yG8hhgAbqJhYwg1dVYmDTMiYwHy9HL7FFb",
  "key7": "2PW7GNSJjaeA2LZjs5LrHY5HXX6BeUvKPTwT1hZpVeudNC7pYmd7CQdKUGxVPb13NxPTbxtcchjwG6H6qB3p7CEc",
  "key8": "4Qt8TkzfUmYZFDPuEU9dCNnhoKxqokzVgVk3v9UMVvmQW3fC5TCQ2KCubq7fpcU8ePnZm4ohbFWZ8eLaaKKxcHdB",
  "key9": "5YcyrHKhEthp19k92DpKA6CEJUBvXS5SPWsGgRAyHdQL9A5qCeSajmyCX2Tvt19WQnh9xFkpS9AhhNbHhh11rVVi",
  "key10": "oyJYMNR3CAXKsLZHyTqBEuMJpJCcV8Mj6X9kFLzopjixem9RjjVgGGjucufHzjsFYiKfaLJPm31zXxyj6oPXvdw",
  "key11": "42aXwiwpvVdPnGoNXNNixyuLtnMbKKDdntccEZdP7B8w19dgA8skWoZQz6oUqEqF44L4HLEmif9vXRA3cP3ZU8GN",
  "key12": "4aQ93Rxz8nu39xJG1G1aWBa63CrH1gMEWvDmizsp21kMRgZZNa1X8PNYx8iQsT29MXLzkDGG4W8MtwjZHaZTQRWw",
  "key13": "5y9GKQShxpBdaj8D7Pc4Y6FEZpHWaLpyXCtwunxtjPGGqf5jaaULy8s7SZ52VYm4QoiX9CCQZ2zXv3kyTSRjSV29",
  "key14": "2exM7aQsEWcyqhnzq7GRWmN2pnM59BhnHtCGEhbqaGh29JDhyX9dMf4z5tU9U9pn5aDBJsXmSrJHeoP4WdSTvMjp",
  "key15": "LL6semgXgybaZvxfQUb6RWpaAk4zYcuQpihae1hAeYAT4NfxL6JnpDRzefEibkQRoix1NegyaWuPdXqZkgF8ryy",
  "key16": "qFEb2rEcWFtFQrUnBjXYALgJ6p41qmSgXcj7mYqy69phsoyS8Wc2vssejyz1Qy7142WmK1Q5R47ayzNuFMp6EqW",
  "key17": "4YTiCFg3kJm1T3dkYw4kgTpsWrpjrF7nSx4fX4tMxD4VhNDH99Dxm5CLGVmDhVQccjKLF4dcvSGpY7vYwteP61Cy",
  "key18": "59defG6KvDXg1aW4eavh4KWTevg6j6qpDP6LZD1e8y39Eowc2Be5jTHpr3g2JQaRWCc6Jq9yCgyAH66NnNqeZxio",
  "key19": "5UaCiPS7LmfghjeJwH4jJBjg62e2Jx6WFhVzdxE1XiLwX6R2qWjJYzHzQAecXtxzVq9BAFV9m9YXTari1MZBwMYC",
  "key20": "3a4TmBQ5b3mR9LeY9DD1PjbMmXejA2pGuatGdS1qCx6QbzvaMMaAeVBbB1FZ7SgJPr3sb8HmN64CyJf4op7RPBUy",
  "key21": "kP6oFjqLv7hAToJ1JZYTFBQ7pop68Y42QussCLFaKnmWy1jV6jbSZR8kzRSAya8ypBqiiETNdrdnS4PpTiRgLiN",
  "key22": "2wQKgknQFV3JPzfF4LPaZN4qhwtvmfLupHBfGWzP8LG5YmAzXYF1J4DHwLpNocvyWP5e3QnAVLwvdNfaDHw2pJXL",
  "key23": "2soPP3CtKzEPbcDDGPJSy9ZjKLaJ687dsvY8eF88YZ34bQzWRtwyt7C5uGnXsw7ptZQySp6dpDGSR5aT73gNvksX",
  "key24": "29z833P2h7WrPQq73xsu5ixTyLq9UuEKK37LtfazdM2VJKzxyd6JgJjo4hR3JR2emT2PCektJLAXtNDBWAzZKnYj",
  "key25": "tK5A5CtgCt1mQGS8LnhCZ5br2NjWPfS7KyN2RhFNhaqK878UXxBs1fn5qU6kLVoD4ZJg1JZT6NbwPVg2Xs7uk87",
  "key26": "4Fj56AZC2T2Uj9kuXFLSqey4cdhnUrgcDv3bP4taboVC7VMb1DqexZcZFGzjQmqoUtS4KcmRC1omD39VoNDFPfv",
  "key27": "4xAUR5ry7FxAMKSUG4E9womcf94Y5NLtGUZ9jiZySoPiEqwvnc9P7EkwnNdjijvWRW2GdUp7wMBRseGvZ9YoxTGv",
  "key28": "5CXNvzRx2NwfGPwUNaAjtszLhRfjm4m71qrKzLaxdKj3oREbDEtwWGGww7tcqCD3fDJdfehsQRrRf4XWLx895SYo",
  "key29": "4BhJyK8JZebehZJWriy5Sj7j2JrGCizVkN4X7y2c9LjHE439E5wzuxvUjC6LDHDvh3QG5q2V52g36tQDPWGBfw2G",
  "key30": "2uRPURhW1QpkA5ASiXmfcZtsgpFmL6ZXdnxQMhAB3bQAnbU6jVJV8EiNBYHuTEhCCtQPnP2wZq59PnzLgXLe3nqE",
  "key31": "3Fufqngmx3KN88wFM7JKUH5NU2HbqQqNDvbYv5CeUrcKQdYxtHLEg4DdC2R1evEmEL7g5gM7iuJNpmkxT2cBjw1k",
  "key32": "5vpVktoCyEP2Jj4V9riKmL8TzMHMptZDnV3LBRpQPifKiiDXL38Vo147ghY7BXnMSM2EX5sSRbn45A4YmNw2LBit",
  "key33": "5hr6pFZZQiUTpLuK3CwCK8Qo33yGSGBJkbTsR2DV5hdrWmu69NDwFU1ZXCRJfXNZUyqdH7i1CscQDPpYGTA8Hb7R",
  "key34": "4b1qit9EQJdrdegdT5v8DvsEKrLgBNqH9qSjNgjuoEgvcuMPcYrRZzJt4mFjPUKtUhmGe16xeUoNFbPHxbyxXixJ",
  "key35": "3xn4J1tWxpaBGXfWbtv3D2jnkKjhiYBvgf6cmkAWiJXYR9gKTYaPQZ3rcMz3YD1tDHJiffXT1ckFhFBJHDWeMtkU",
  "key36": "2Khxi3FVAsBEnCU81wCT4hZzwpaaLgr6iBJHSwuDaGaANXy1wxobgYJg6D2g8oKRuJCYfzqNcjvwHzatLsmAaiE2",
  "key37": "2DGDXpNgt15oepXGTFrrmbjZeibYPQPbyYeTqnVdaF8XzVacMocXXQdQ9Y7r5scDNM5Qc3GyAKPymquAS5Cowr6w",
  "key38": "2wrxs57pxm4SWzMLHSoF9iaXZZTpSxXG1po6SV5VBC2t6jdnhePFdoVXwBqZ4oFppgULkC5Fx1vNamQ3LTjUTbQY",
  "key39": "zx6VUHhaGCWDHESdmTqJPc8tZCaWNJ8LxfJayxKuAh1gpfVJkJgvmaQpP63iQUSNNu1pKsGTZ2JjgAoQwgioEPq",
  "key40": "HNeZmNbYMjbJRfVWpZPajyQnkumKQnDHj4bvojGntZgDGmP4vjPgjxVWwgqC94zqZje1BK9BzsrA9CyLXY2gmhK",
  "key41": "3oBZE2iQQCJQvPSYGt3jzZT8YWbS1CU9GSo6X2ewYbtXJBGrbA8t1dMwWppzKC221c6EFvCGNGUa9GLPyczkHdHB",
  "key42": "5HXeeF9SNggZmUozPGa42yDhFbEiQzE8Nyp7RDjnS7USJtSW56eHGQF8BjmX9mQjzTgVmrKGTHv5Ukzb2x8m7ZQa",
  "key43": "52gRTXNnhgs4vShornTGzJZBoX2CMqmTKNeJYDfQ2bNiDNCCzUswd3igdFDneBenoRDk4SDcQgFsbTKZrtMP5onJ",
  "key44": "3TjKRo4R2UcvgF2WduegV4h3XKsWinaQDaQezRiFXzjZxuNccoSMyvKh349PFgUNBtBCLK8YkWA7EpEybrNeWCCB",
  "key45": "3u8XyNDyDRDxWd7eEb1XwoTrgpxBQmNJS72YQugzkxLF2zYyAkLEMeTK3cGFHvjNRgtF7GYszqakfj3FDKw6rB9D",
  "key46": "57jc8gxbZCDU32eNbykWRBmmVjAwoEEsxQHsLrVH4NGgPPB7dmftHpkxoGDKZQjGk6kKUmTMx1F4Yeo32qosZiaL",
  "key47": "fRdrB2n5LXmUSqP2SMqBweVinvNCNHoNporriLeSJMB8UJMMGs9WZAjrpzxhJREajNdpEHHrmttBcudh1cJzgnZ",
  "key48": "4oDySqZwE6SXNP1jsReXzTDT2nseUgo5P6x3pZfeoQ4ftNrPWwngH6bnmQKEbUAJDrfT8DbnkNYrLqotJ8RAV5Nb",
  "key49": "5JjFX6w2ezbvZhCLEs7p5EPispdSwa25mFcqUAUhwEcaoNCZGTx9bL7Zee9FZxfpyv2dzE9oFF6pXYLbQ6zvYKbt"
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
