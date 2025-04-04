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
    "4dZ7iFa79s8bvb9CUMNScR5smiPifEaHSqyskMr1nqSFXLMmPxnHNe4fkkPoMvJaWfzsMFrygVLNR11MzmdLCCCV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4CAbqFkJLcKLhXkdDt1eBLh8o6xa5Kv4XQU4PXv1taGRKNznZxXQwXbpqLoEmf98gK355itfX8aCv994NHn8XXPz",
  "key1": "3DKez9hSG9pSPJwjLb6JhCiL4FPkGZVbgc3Q1sH32JDjD2rwqeTXzWkFg4Jn4jceNs3r1aKcGGWFu15WrvuXhS4k",
  "key2": "3SKM2CbfDvWrF4wBwKiAsa5bHkL1tjMzxm7qeexvpsEXWczf56X6kQM3uPkJE5XhsdP37FRixmwH5a26PzrVAsnm",
  "key3": "2Jg1SkbC73E8jrpmwKVXzWTW2vr3LMkBoFT3UDzB9oCBMYpt2Q6qu4LyYG4t54uWXFaUSqNGYe3QwtPCnPW4bVdY",
  "key4": "w6TrJATv8Zding7n2pywxku7SQ2LLZk4r8J66fx64zysikaf2WdGGRUP3DZxuQAodM2CTTZgu9irJuLfqFp2Qyq",
  "key5": "2CEMSnSbeYnB2HkpiLLQDZCcJ5opsnKWbqu3QfZAXfaG3JFEuQrSg9RPvUPXEgxnpuw3cjeEzPauGfznDB8VBrkV",
  "key6": "2QKgfXWx5nYVds48W9HEjL2wHXby6nSZVQGFhbCiuW2cDjPJZkAjtRbarEYGqHfz1sa3CVeURpk21YGMszAHY6m7",
  "key7": "2RCighbTPMuhZ9BTm3xBnn1EwbFK5suLAPTF1qLdzZqtJQytEsUYDrweiki7kNpx3DWuMRWPvm5RQkvzL2RdvdGH",
  "key8": "48ji5kYhS8AZgCyamjmBdGJqpD9GwE5mpa7n9HMK9wtHixMCUqRkFzGLReJFaRAKmgXoXgQWvorPe8bg5tAQbsF8",
  "key9": "482kHq3EWbcU3dZtdCk5S1JpFUkcBwVAAVibLb99fMYbBHogxN1n5J4xmgVrB8EViLZBjJ45Exdsrp5s6w9rJs58",
  "key10": "4vhV13aTZuV9j17HXSffSS8En85oohg9oV7cc7gb6Lrc4ns3HKQCEFNmyr1BNZMJyufkdA1eqbe9RciTSotKPCDv",
  "key11": "593xntmmXcRs1o2Ec8kLqMT1g9PMY1QPqEhNZN63ZmMXzyD87YiPRRnQDiRgihhLW7jF8fCbKAH4bbV5jqmHwb3s",
  "key12": "7dTkbySUGx7nHYhB27tAWMai89ELqUnt6rH9naeSzS9q8QQqpHVAf5vkn6M3D4cK9s4q3mJtbo88AgXuVHtJGnL",
  "key13": "q4StpK6EmfYX1GeQ6GRSHVddmWnmHDLft95VKmXRK8JXMuu5vcUXUEZtJF6MavAVhtRK9uiiFCniByoRs3i7Z6s",
  "key14": "5nMoi1XRdJj9vvE3nxDy8pGRTrA5fu3q2s2Wensh3CcT3ZBpFrVkxo9CsWFygAE27aH4wTiJkLhpCSJzFRPAKTc4",
  "key15": "64RDHaSSwHLHz44LPkDkCLNvm2jB9YvbD4ufMeByv2r1vaRkrAMkHxCRrsWMFm2DhfacwSEBnS6EzAyKHaAM4kqT",
  "key16": "ahL1aRiyMnwGLvspBn3wCTDFsgBYVbUWfpyBaFE3FZs7FJ2UhYrNUxJ5ARBEkAYGmknDUBxbz9rFTkmm5tj9Dfj",
  "key17": "5akT3g1GQQA5kPb97yRRKSs64UumgNGFMpUum6rGdCb2ZLtiwAHhHVXZ2gKt2hnq3KVFZ2ufTyKAVukfDetXJFt7",
  "key18": "5YiPj3Vgy3fDikqrkj7aFhfxEdqfN7knz39P7gj6ZU9cZDyGvUMqnzTsvUvvmC4guNfDiqWxmFEVXTUXU4owYtZB",
  "key19": "4ZBvrfe5kiUSkiMhoaRejiJ7UNULdEA86YZnm9korn9zVFCdz9dbxspZxUGgfavR9o85h5KLopA3oCD2iNEXgMx8",
  "key20": "38EPqSTSCYVXJj1iZ24Uooue66fDP57FiD4zjzw1YAsFzixSCvPhMBCNkbgsVsRnZBU5t7p2eK5hXSYhwMN1LrFY",
  "key21": "VJPYjGiSPd4P31bFVWscW3oggXMMBwSF2wrpAzja7JuntmwMaHeahV733wgMFa8wPDFCRcmxdFPJGxAmQRGtkQN",
  "key22": "LCFGnD1iuc2cTd8NVuhQkTMqroWH2UcnxTu9836S3DKJJNs8Hs9bpYN6bkyKYppPJLBNnd7PAqax37whvnJiyPd",
  "key23": "5qT2x4vmjEEsSCLmxAKNUL646ZnqHXs7RH7S7GpHDAqCUzg3fcFL8FrbvVo74EiFdS3KL65vBttqzeEtZmt5G88P",
  "key24": "3zD4BbnUGR69TsZ5TQbPRwQqhi2j1dFo64gRaJPzCpZ3xkmWSXo9kRMJwXnrCGq8MFXa2mEjpAfQMxtEAPpVPRzh",
  "key25": "4hrsRwCwoLUJzLzE1oaya6ZwmE9ideKAyZawnL9JPkLqT72Kh3rSsrp28Z1jN34dVKRwzrwDdH4wFt4vJ33BcRR5",
  "key26": "66NRZHeu6Yse1FYXD4214KGLKYUEUmSfXgJ8tVDrZu4iLD7YwyYmBpiHgKj3dkfCpTWVFNi3vGWgAsgnCdmaXNqU",
  "key27": "2CWruJscXPK8danJuEH8ErbTFnKVbhM1Q7grdurEjNGEdwf7a45HQ39w2vZJ6XLybAdnP5vxhfsxQj3ZAwp68UC",
  "key28": "5mmfsUfqbe15qUbhWhEWANyfXdQY3sCmVpQhJCcLMDspu1ShFn5WWjUoktVKGm9mCvLL5tLWKUGgDZJasqpsuMw3",
  "key29": "3VX2BoWXQfXtzJYEtssz4SHwCjYBonMhcBXnpAo7kY7dmMFeugGjpJMGMs3gYt5HacXSjxtUZwLJhJjeKnmLbfnh",
  "key30": "42arKdD8JKAfhF4zH2TnZP4WbNMoEQAvxu2UT1nGN3MKf6xaevYUpwHm7gTQN5gqUbMhbg4H13vUdc2UboP2Mbst",
  "key31": "kR6aLw8pJbqRcCPTCLDwzHVd5C2C5jBHd8rEbPKApPmtgu4owaPxj64Q5gVRv3HPLHCJ2apuwhTG2gnvcLx89Gf"
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
