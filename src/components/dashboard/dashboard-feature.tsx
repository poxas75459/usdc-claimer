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
    "2yzewgAMingC9XXqsqzqhCMCYFzQSzEve4X4Za2AcvzHfmnNtQyt7RRn89Fisa9j79yXuta1V8kPjLrFH2aYQvmt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "aqGyR2wWyqsKghvK4Hu4L2mn5H2ZCDFApPthDHwqwaobLFMkkFU9rRBr9rNbkBZ8CeESx99wSdaDW58Y9U4ohYs",
  "key1": "3F7MG9dZDTRwKcTPMrVxd2ZKaup7SfpBXeSmyKhXn1owifJBzuQKYBuSa8RyWtkmJQkjeJpVdkp2dpTSkt49qc1b",
  "key2": "4PLGKoyFLrjpc2wj9pxVoPW1TZWGJpQSKnms1enshnEZpos2cFSzioH2Ds3MbspM27TGfFzcmy4aYxzBhZyu3tJq",
  "key3": "5MA7evL6WTGao1EagboDxtnf88WmD7PqcGLaghtxWVwZYzvddY6GhPVbjPXc56qDTBDHpJNPBiiSMHvuGhyjDBXk",
  "key4": "5zpyjfaJtXE6WK3ZVsgTtUBghasXcucwbN1v8mwCqV9drjrasXwbepRxUFNTcryt4MNvxdE9bAU2CjDTbVjdS7Wp",
  "key5": "27ctB2xi71MwwnTFjVjcZjCGS83A7psGDEhUYoDJ3q3JCeHo5y7Jh4bM4s2Wi9GLyXsxCfh4FEk45EemFsw7bj8s",
  "key6": "5daXgxD65h3h1AYZjLd9qMnguWqS1uSKc4pRgUDNxZQ181taDwWh8Z79b9VkBUznxzi3cLJesFzXM8uzvjBDZ2N",
  "key7": "5NNYyrVGExdGVPcGNNmNzyvwCPu2P82dxNnbQvwjYvwEELHDk5n8YQLfNF4aMKy9MN7pvySLEpQWJjtXkZHE7Q7G",
  "key8": "5kxdaSAcadaEUKana7os737GhgtMp3vGPwnXnxBqH7e6H29sfdkXaPwP3tfN3yvc7JmijXSdGomYCqsyEQ3e16ij",
  "key9": "4Xn79aWNKzX7VmMprex79nJmA1nLR9CpiyWkWNBLm9PTH3UqZjfo52Jg3NDbYH4SDHS2df7VojF1kW2E4UoJv6Kt",
  "key10": "3zbdFaE4cYwV3V3oKwCu8sJk3MxP57kwnf5WdpeHfboNL1hJoxJ9oQyjF78SvpqWu8MomBmGAJ5kB5R91GCQCxiY",
  "key11": "3un1SnceREcoLZ851p66GxNhKjbtAuV7BVMAPJ9hYkHqfQ5WgusQP4FJY76fng4y7TNyWAymykZi39vvRyJ9cg7e",
  "key12": "2WwjFFrz5xmejtqVeY6NiZzvs4YcMyY3jDiWa3mJB8WX1LZ2iyRGpPtZfVsykWjkHdUZ8EkTjv1LAcmVhcE9eYF4",
  "key13": "3e53zSvYcxpvRHW9p9oQgx1EP9F5cf41EzCvnoMVQyRXW6bj2VE95nNSPdwVAfs1PdAECrPsQS9jjCqXsPtxmeHv",
  "key14": "3uusQuayTkgUTqMuzgNhsGPYEXq7RFwqSWx16gzc16myRECMCqSswNKbXirwDxqPBzAY5dy66VB3ETmKM3bC5wg3",
  "key15": "2MeHf3LoH4mnnJ18gPk5vfUKJqaicsau4932gE6Tft5Ts75jtr8Ft5QeeJSafUprdRE66J3nxjqDoCJAfZzPYLDv",
  "key16": "vH9EXQajf3BVoqK85fd5xGZFhiFq8KU2erhghLcKKxmTQ3oG6HosJntQaxodLdnAK3ZnxbbMenQr8TuZAvE6p9o",
  "key17": "4aMUpoMgr6FjkUeVhcfQW2ApJx3EGCCJdmd4hnCQnYrCPSW3xWAxFZJ1vj4bZWXrf6evoTNZyp2rJrVDRSFcJgB8",
  "key18": "4QVHHG7tuyxE11bMZkzXckvv2MRmKgdUZwjohTY1BXYqRrRZ8siRycLkQwGE6SZhHV3owHBYchRoXgCvKV997sh4",
  "key19": "4F8dRR312vWJMeNJjDUiAXYnPPNijpnmnZdnkdya6QjTUmFSDDvhGJLQLMXBq9Cv9D37953XQ2qh94CJuoyu9H2o",
  "key20": "2WsUdQp9NfBj9e5pkgQDuaLLuQ1nusnQWEknJvP5SJDtoEUhpTTZGNMRLeaNJqmYMGarcrVPY4b8VqZNFR1nFm8r",
  "key21": "49rD9q2yJ2XLYYxoN48muRFm6xBi1WiQvC7ZfDbfpPyMiv2Arq5VMVAvBH6muwPhAAxWoepJgYe6t4BSmNuM7v4x",
  "key22": "3nME22hdMvYw1JQHWjUq6atiAQK2CukFLaZnhL9PfbeNwSZsCaFzkCW2kRZYKzNsHheYGKMXNzTrvC1bSQtPU9Nq",
  "key23": "49bpS3XkFLgj7uDZr69sHnWNA8BpXV47KexJpQfhf5PV7g937xfqF7BXRYPEcqRiZiyxRJqqkWXeSuX8KCjCXfts",
  "key24": "7p1swuTE9S6CpsHSVvWAdxYa3cHGHkx4hHw9rWF2Upm2FoGYAvekz4Cp6v96phV5caRbQKA9gexTga7HKwQohmj",
  "key25": "33uNzwrWcN6b1ffBPiJW7kByFi2dPzdr9HHWEYZxTNiovn1ccGLMhoeKT4dyBxAdSVWkYvX86qvQz2wKJk2WKMPk",
  "key26": "nFvDjWf9ttrdri2ihBQkRU3W3tsedfU1x3bbQKZTRFMpaHdfZun1ePKVZLeJEwFXciKmmyziWDwEvePeTZt6PGL",
  "key27": "2WXc72NDr4YD4K55w3s3kQ2JPo7cbnJRGxDaBR9TtGgg9igp3uiuuU11wPTxJym5Xo17Jszsje9AjYfoZXRZsLkR",
  "key28": "3e535d8Z4Mxc2UvqNPMEYcp4SMZC33UvNDP4XhTn5xD5y6PX5FdmjhE1aW8k3xWQbJ6x5kkzHvyY3Jc98eKbN1Su",
  "key29": "37vHGGfkjS81p2kFqDFbFwdqkRF81KwzC61mJE2NYH8tHaJFxh47nnSc6vxErUtY5GzmKfWMixsHe2ZbM8h8tYsT",
  "key30": "3McJioUjtjp3ExxCbfJBSQfDhMEzuqB4mxvgpTLEYK5FyTEQcAtXgCVuYv12Xdtj42Zcyqd4ywMipkWUCDoMeiss",
  "key31": "3Sv35FTXF4Hp5Wj2cuHyMYeT1Qi8oBXDADtoa77xm6aYFLKjAg7u3j6bfweAVGEdnzuU2gZN1AySVTdU28VUeSuE",
  "key32": "2y9xfWZzER5tgg95tUZEnoRQMKxbktpmUxkku3mjxCDinaFGTuUbahfcddf4KFZXGijubUdpUBKryk7SZttS4u3M",
  "key33": "gerr89zhjhzWKs8eVQZzJdyAegbcGuEhYxLG3fhXCA697tWijAtp2vbko2jAtPA3VoZdwLjWj6YHsB4AJakFna4",
  "key34": "65Yvc2MdWviHaBvSbPF5EkXcMei8FRRCgTjtwNqSpjBU4AQKEP5vQ673f9QSpRFHXvfEYSdD7oHyQyDWpAZmw35i",
  "key35": "3oaj8Xqm93oXdsY5PRwFLUN2EqkWPMzRPhjPxiZ5NCKk1C6SZss4PkurbTLW2Z7hD2Pucq1nnLxM8CBbyxAJWJwq",
  "key36": "2bXsFUEDjXRiiE29VudeaRQmYSdDhKhQcf9PMi82Yy7fTFZCocsNbwiqUnWXjdTubu4oJGdRCbtTPJYUv7BmKdBf",
  "key37": "3FxSk1JcSpEzvec5sNPqkDxjNdAs1QVR5soGe5AVSQfgCAPEmdhbZ6d9tJuYFiA4mkhAy2m69snKk6nJT7DkajN8",
  "key38": "rd2vfFD8L51wL9EMX4DrNkhNcT2pNpupkKWZZFWLqNnvqdpcu6EGNKexu7dHaWb6kp5UJRSbzXqFfzAKvQcsrAc",
  "key39": "66GLaVJGMntVSwv432WFNM4YcvwVth3fU51nL8tcQPBPaAh9P2ASqMBkcoUTESrup3roZtUHWFoVWurkTNssaiLA"
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
