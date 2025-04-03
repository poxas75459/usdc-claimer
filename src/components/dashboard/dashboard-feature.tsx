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
    "3re99L16EvnB1oevgi65GWHPwCtxj99awiBpogMVFHZgsTZCe8sQrmqcsF6uDDSp4zRbaJmr6fBqrZRrGfooEfY8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2vkeGzKjYKqih26wEUf2NSwzZAqMUjcHfr28PVttDdYUnSqRVo1pmQyqPdaQQ3dc77sa3bPAnM2RkU67ZJL1pYJ8",
  "key1": "d7EL27P3WLdGyJVaBjjwTRyitQzhyYAtve4gaFgjp1JuNjS8Kr3pxoR83ChsT3eFoqwH9eFwUYJVSkxZkvrshT6",
  "key2": "2XELB3U5aJNX9AECXd6gorBv6gviPHxwHKEedMUxqTDKBWkUGBqfbAk1622yxRJZ48DRm5ij4yvSD5rUWJX13pJv",
  "key3": "4sumqjSNVSdw7BFWm4ewxrqb2EeCVDir6CdCN54tfSVh1L1fEPDXfcrTPNjhhP6CwZsLzW1rBXHeTRMGxWmtushr",
  "key4": "3NKEeJs8En5YCSMFNm76dMyayNAFiEQCCsCC2vsC8Yu6j73ehREQ1WxE5jbCCJgfWNVCubopo6qctzjKbNh8xGkS",
  "key5": "5tm12rf45yfoCx96xDLLnWYo9qWStNoomqtxREw3CYzrw7e8Y54uvFxQbFahTB8aiysvDRjdF7Q78jN3vrjPsPfa",
  "key6": "324uifQWfn8pva4peG2823cAabiFqgPny3zsCVv9JFFbY9DzMJ2yEf3JzdyVyJyds3kHSNMaKHW5JXWb8QdJKF7S",
  "key7": "LarxGmd629yhmit3g5F3opBifDKWXXzxkVu1g4xW8dwCPW44yhxe7H4hC9VGYWgf7akeQepYxBC6wwme2drxA9S",
  "key8": "3utxSEQRMHhujNA4Vu8RmcNSPPLUYuUXDgJLKPk7rCUFnLN2XVfGNNzT8a2h6cyXxdDehDcQYUXqr3fJGVxJ19tZ",
  "key9": "3HQ3DXhpuM6uVcD4jJL3ryGc4PeXiqDEA3reehBCMjfFz1sjLHYSq5fPU9EH8E1MfmNeFvjdd5MjxB8ZNDhB1uqp",
  "key10": "2W3Egk8ZGn7d2fM3jyEaGC2RPMhpBoqfEG6GSc4NznfYYoZvq881wjsFPCTh2i7aXPpanKZxqM2PnVyJRN6fQzfV",
  "key11": "2NyedyCZwmy2uRiNSEe8ERAPcdSJsDH43R5SQJbXKCB1wDCBLG1yUTakvqEPFuK3X8tGzYZKz6uW493sgiLKiigM",
  "key12": "B1b6iwCWLZdjN3mKvsDN4RcDbgngAxk5ez1CouxN3zksbSeks7odQkwkAVcao3rLMBuCUXnieQp3aLddpNan8fp",
  "key13": "4CCozicFTtnn69fT8VwqmyfQ3tkoLcGoXhP8SwAbDSBYowJa5ebLrtYZjHMPUc33wwuVQ7jKHsszKZNXnbverLKK",
  "key14": "paeyACa8N8M4Uge74U4cgKuZqZkihatRTDgQ4xiFTMHq4GEWntR3eyzTiEvSy65SCaACX6XREnB5ZCdziXgektz",
  "key15": "HEVc5UnfAX3MXA3BaCb8ZmPFoTsgia4xdvtHzNJ6ZVedqQh9YZ2qWiR9DAgPKXSckEHfbpDR73NqBM8PaqxzdV8",
  "key16": "4DZNmVDt11SJu9WDX5RbZPGEE7pUCNcUwMeyR6zZ7K6ToDuXUAaqgci83jfpZAmZRmLiKLYKuSEupte8E3rTu3Lu",
  "key17": "2Qjahdo6tMZSKCk2PkcZk5Y2Q1VXGBQeJPhureCmqUd3euuY9d9YgCoi6qB12cTxLpR1payBtJVdUHimZLvw4aGB",
  "key18": "9cuFrQ7P8oEzp8Jr4axfPFHpzRBw9Uv9Shv9Ye6CkFoh8EMRgHAx72rC6DSzh6nf8deREB3gonHWiP5BAfdMNaX",
  "key19": "63BrJ4nHDjGDHNqvB782CSWxftz9eG52wLU2g93sGv6XgWUQz6vwUrhuhqyJyeV7m6HcnoojiTQDfvsfYV7x847H",
  "key20": "4Zk6UxQKkdirFP7TU2DKybBZPQNKLU5xEHfdySwPn56pbSsaMGFfvRHFPf7dNMxMKyTqp8yAE2KVmkD7pSD1AKfL",
  "key21": "VrJniTBdQrHPvLgXZZGYTVmT33JnfkKhXvBbXR9mnDeAPE9GuC9boQHCxkTnsJApkHEAstZHx32VWKBzDPL7gcw",
  "key22": "5iNnjYMAWdSeC61pNR7jmuhCdmzaNrjt8PSCewKQNERB7S1gScKQXhKxxNRQ4ETiPJbeyzct6kDDHdYs6DBAeiKP",
  "key23": "42tF46CfB242Z3NLn1msjA3cJhcymt3cwD3CFdgipbBsU79PDxuZPM5CTpNDxMxiGj3m2bTed2F5KHmAm6uVbv8h",
  "key24": "7CVz8B984QXjmYP5gfGKm1e1vkFSkC2XvNGAoCkDyPFCgKSJJNpZek79Z2zW9MCdBfk8vs3Uwj7thBMoYmXxDkv",
  "key25": "4C9ZWHDp2e1BMYyas4gXHYPGGrdbdikmCSN693otpPhjWWqmAM7MfjpGtFxwDt8TxHLWqLaR4NQHGuRBfxez6ZwH",
  "key26": "WZ3m8GyVXTJrz84LFLUGSJnjRHJwLWqc2QyoSSpD4B4eFoxgn84vcHmnbNoHQbQHhgfhw4roSEpRsqXGUcsNCbJ",
  "key27": "Q9SAW25LJJD6hytE9K11KtdZc4jYkU8rg4WAU5ZF18Cug7q5X7f85rA9GyBGSAQGwMGhH5JSedxh5hfYF265NQ9",
  "key28": "3YnpeGTTpjycmpKaaA52ubYUDmCjqeSidCvassZbV5AvSo4MBnqqKUB8Y6Rw2xqEvS9XY5FgnRGZMakBnQ8aZyYY",
  "key29": "BMXAqKBXFoKaYi6giiVfnMVGGTrZChT8P6z1hWpMzoN3A8uABaYisWZrdW9J4VGFSWU1nL4YWCdcXEgrtvwZ5uk",
  "key30": "4MHd3PCMZn6VY5GL8tj1Q9wg6zJryGGPuLqvxEJWxVkHGxdRDLhRd8zyAaeT9oiVwm65XBiLNXcAMPJDtpRQfsfi",
  "key31": "5LtxNPEERZT5W3FeoeUCfDd2bAvW5cY55aDms3udwq2FbDsZq94r6CW7REYLtv8yLfLmwTUMfkZCfqg4pzTmERgh",
  "key32": "273HBYXoztEu2TGhJFh2p7cNWTeMoeXTLQus1EGEJouBDFwM4mR9YKRhLGd52hnvwizQFAjXrVH6s8rsFxZGxbrc",
  "key33": "2mLm5YrUBG6KqMbB8fsbRENTNacWoLnn25N37r9h1fTkouHefdoBM9X2ChA7rJk6AP52Pkc3bZjQqx65uXPZ5Z1N",
  "key34": "491QC12YmdJiLxTdp1LBgYi6UYk2XaJwf9up3w3BBTchyoJXbGErRsnNET1WZEcW9aXeGxDJJYCLBnab3ZatXCQv",
  "key35": "5Moz16AY89W6EyyVkwsn4dtwyLeZGttkxDgXH5sUir8BTCt9t48usQ2rjZNk1zvr7BrrditnzR5bNr7WDx2pzrcn",
  "key36": "iHPMrRDZrJSFyJ9PNZud7tLBGWaiWzRMrzftGjrUzmH6Perf6B783ic6Vq5RZc8A2KhpppcTvUpbPXMTd5t9m9f"
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
