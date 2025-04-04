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
    "2D8uvDnnhS5AHV3iz3skMjLoRJc28v85guZpccgBhfEWBNDAjQT12aMXWofjajX2uoT3QGYSc4cRCHNgFTDsJcoQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4qUUrCS5xJqDM1YNYa4KvCeadXdUBf5JhTNs9sEqNKhhosmT9uddRzfc9yAsxy2d8Vh4rRboEYGYUGokt2p5BoPN",
  "key1": "3hfEvji9ZUawPBPfXfHhX3JEMjAobrKfSXS4f5Eagy2u885UtRZL3oBziDsuK7A41hS6kDcyEJJ2m55jicrL5jAQ",
  "key2": "4DWv9NPQSVz4TxQmQ7huEKbtcPjTq1NqZb64AgdE6sJcaaS5FHGn1u6b3gqR4DYiRVWC3UHEKFH3rMM8GXgA94x2",
  "key3": "4RfvGjxFzFEuww6Wzan6EqPE6kcQM22oTToJztdqDqXd5ruiAVjjnKZSqLm2PYtP8jgvwnJYduoimgFbmrvk44GL",
  "key4": "3o17wXRWVaTWRBeqwbfKf1LK6gAqa1YBQejrwK84zg2oGu91zyCsUQ6Cobiw8kSQXvH9RfDsRxrxDu5kTcRP6iTt",
  "key5": "4dVMY2pmik69oZHayGQZyeLAeKarZdndyYcjCr5G9aSeGhM8xzqqCdVnwjUSTP1p49w9tn3Kn41FrcuAuWcsNxbC",
  "key6": "2LG5onx2DJHqqrE3C946SK6H7HQ3BadXxbxT7k5FW5pWNA9uqaeXR7yjcZGDv8K1fKdsaTFWMZ9jMsZGffr89Hf3",
  "key7": "21PRGatn8dousyqgaxegj2LFFXGXvQ9uHVZRtGgQASGhpvdnNYpMJSSaEALdyYp2Ksm7R73wi7yDHPW6eU4ScAAf",
  "key8": "4dA4btzDoC4x5QPCcPPf6Gq7budwcBgpedMcAUbw7XN31cgyfRyLAXouusJDPXq2iXM85YstDSEq4XkWDYunnwE3",
  "key9": "4jVjMvs4Lb8hmS1h8DSUvZEFPNPCWja6d7evrzV9VuLU6vYbGgsGYqk7uQUxcYoduiD8pJAb2m2e8hnnkkjvp5f1",
  "key10": "5e7NkLTSg8adhaBDvzyr1CMQkvMR7qMRuBRz2q8HLuSm8wD9iV9xFPHjLAuBAbKY4uN1cVdn36CrDxD6DjX6Ds8c",
  "key11": "34qcFBCTr9bGuWCXyTLpoGSsYdhoHnAFWRJRRNj57jsazk7tgjd79uAf7UqZBPRWnLzVPWbSHDjuYZhTkHirHS2H",
  "key12": "xbwZF1AajM2DFihipFHvewWM9Bf4tTm2qDm4amFxRgwVBG3hAmGqKK6FqrWdtMKa6jfDMAiePsm2KbVt6vN7r1o",
  "key13": "5snhFnt5mZtW6TfR8qdWNY9pZ6NBVVUHS5JR5w3Qy4S1eK4dP38aEfunQYXUn7VFQmTNKzAGrcJc3wEGjr6Na1x4",
  "key14": "2Cuccz62kiXhNXk6K2wTih7zAHvbtYMjPBDM9X26pq2DABHxLCsD6igovzjcrCemWwbvQ1yVRpP2TJyQeXMfvhYr",
  "key15": "9ZoXiveoNJPbA2KmzNfiEsiR3w5dB92NP5eHbjCrfFxzPDHYP87iHX6eT37NEbcknZ7FhPkYgKvxgJUzymdyNe8",
  "key16": "4Vb4gH8ggfRX5EWizojDENcV9dVfPrtZudZsUDjyZzQgoRirvQ3CDAVU6MdK1EJXZNMUHcg6uk8USEsBny1ST3e4",
  "key17": "5GpXtHqqCEHMr5mWz44TjLQEFVq2Nearac1UApX7nH7Whw9Ts5g1iKcUgwjSdtjzkb5oRPWGNpLVF7pF812PQfB9",
  "key18": "4eSM4jpATvFPxSJgnWh7RkGVffXXUqP96Kdcawa6hNLCpem17gKif7hhm1hsGDiH7qT7tBJQXeUj73Kwbc2UTPbi",
  "key19": "ydjtvWT3JGKvrZmi5QVeiSRBcdYHEfMyti3mnURTsZ8bVa3qG2t572Divj1r1fquNu71qjvPrgTHumM4Fhhto6a",
  "key20": "k9o9TSTthpZtkaZvGu2dYeEm3jZQG69bvGJtcVGL6TzPw4QDsifYzSSxFu6iL3htvXLdh6MqanXybTKTqEXRTRL",
  "key21": "NSpZev78EdgTaLgGeh3U1AvDAcJnQ4A4nXLHdmfgo6VrFv48wdHvHRWb3ydK3pNkWQyhzAprmM7bCEYdwBcjhDR",
  "key22": "w1DfvtUVALcTQePxh4N2K5wzHATN9V133ACCanc5xELfVQMf2Q8uEYHGWwMG6Ld4eGFcCNBAAsRJoXcjFvKX4ng",
  "key23": "rFvbMaMjkPPRby8dZ67xmMK9SUUPrutg3zvcfsZybNU7pFgNRREarCAJgPatmC7HQ9JcoCBaYVMAbtJNNGsvkzF",
  "key24": "5whemmAPx5f5sQ53ovZhKKASZ2fggNo1a5Ar2b3DKn174bYxwgVdemfgiHba9516A33tnu4KsauRZt37UXAc9McC",
  "key25": "5FwMtTTdpCuEzoUuqAx6oHzmCx71JJdxRTV5hMFU213ZJmKcqYtLmfV6HWfW8a6woR69nHHgMD3w5g5S3Vgk37Tx",
  "key26": "37JYYDHh9yByVKobEiNfmxxVN8swo7oteNvixeLjXuCHwWHe4DyF9v5qizCkXyF5bFkQ6uafWkWDqDLQ4G4pgxTu",
  "key27": "7XCPmoEbfSxCZMuxNhAs1Ay272e2114oqYmoY3qtoZ3MtudScWZTNV5fkpSZWJFKXXBmDNN8mRJkVCBDV4xfaBF",
  "key28": "2wYiqXSwgv8kKbvgkViS7cQ8XbcPdtkt3yA8S5uhayVjMievBcUd6GXkJ9TGyter25aq5GhhoZ5Ry8w6us6ZefMG",
  "key29": "4qrourpfeeTS6XwUYvnRsXKP5swTPHy8C2vkJb91tynJieu4e8q6VwaPQrs2iL1d1GFwyv7cK55WyYTJcC1sBFeb",
  "key30": "mVAoYa4JjxxTWMvVGRkkovE4vZ3pV8U5GLux8UbhvoV1bqAFjVANT1iAwFvAJdKGpLQAWDT5tZCqka2mYFXr8e2",
  "key31": "2SJU5RVfhtnPC8bN3ztMv8AeVn5BVoaEqJ8J4Sy4Mf7d6mdR8VJhAgpMU99osiYbuZhQgFTLJ12RQiBSWRrQJ8yq"
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
