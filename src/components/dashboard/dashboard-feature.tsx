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
    "2QpaZvUmErDz1hhPn4oQhWgRTchDp4yxJQM2AGis1bJV1nSn2nftZVuf5a5iDagkUAVhiux8UCSnwoRUJjRYqtvi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2xF5AdAU2E7ZmD1fZfF9Jp2P6DkzpSuyp3uoQa4nh8g9NhfPX2JnFbK9G1kzkurEqv1ZesTnhLRrL92WnB54EHYq",
  "key1": "3s2w8Kktug68ocKEep4WS95LcTSPgZXtLBybPsrFuiMBM8HU41Zf7dQjVk1VqKmyopYNznbEgs2uJj9dD3s5hAuf",
  "key2": "2NjqNmP9U2gjGhAL3BPeR4PWcJvKUQCypRojkLeSLJdvv8pux3Jbag8WPVzBPDXjozXq7XwSwozxEuaqnYVjvqa",
  "key3": "5gA2Mmpb6ferpRJ5bac2DCGxMr1BNNZdwPdEyheCxC2QUdnMfrWp73kMm9N3evYMP9fwxYPHdkZhyDxpj33UN2Eb",
  "key4": "3pHJiiFBjGTtnMktDLCyTN3f28oUQFPT2FTfd1UmrzCNyjoW6jRHGg6DpFJcZ4TZjmjFs2TBfMhJihoXjHCJ2reL",
  "key5": "5CfEuFmjnYBBthvEJqiZUuE8tSBbkh6SGG83HzhWwUDBzpuNDS8GHXriPiqorQEnqARB6v76Qgz61a3Xvqd8jWrX",
  "key6": "uaaohxLf21M6V1CdB7y9JtY1DuNa514qjDaAoUQpHPM26R3c5c1By4ScRHotywsG3TPVhwJSxApudpQevTfaUYV",
  "key7": "2xNERVYmMmLS181KvtFZwhdtAK6JCQmLBT9Ds2axhmrLjJwsnsyGfabwNDZAc4WBVcNzE7MDRENR7mG1FGf6aRER",
  "key8": "45JJbeYvF2PqqfUz7rbRPrRND5Jn3UtrkWnuRppeVCk4Rv8Uc1fTvxdndQZaGw2A1HDtKS8YiCeJQJNwtfSx8eAt",
  "key9": "45HwKmbr9Dp7AHszR3jhkJJBEiZpBJxUY5xS3gc7Ux1CWiFUKs4PALhv4wdSuFa8Ue9zzUc38zSv9h1Ux7dVemj9",
  "key10": "3KnK9Hw8emdnsoUfSFB92csEiRYMXUteftfUPiRJXD6pSxgEhiuSvkXS2h4owg9QskFcNQgoBXpMPVgJrGR5KaCr",
  "key11": "4GQRfgPXXomJMpCvAvjBhKCwDV7MDBxDoNjVuDm6rgj7BNhNGzi4S3BpvNy3YYzdibsy9XgMrvMHXUVSAAQvCKU8",
  "key12": "2go81SNtQVHNLCFC5t67JWQaFjEb3zmti1SCvgcUoGZybrehkdB7nQucnhFkcM9fKCqYVPNcjj3DR6Bf1TCD9Mwe",
  "key13": "nChddz8F8o9CjqSXAtqbghu5nmGYhgcZXA5WEAULu5KmNffrpX3sqRrdFs2V76BLTZGcnVKK8F8moUB49zxngL3",
  "key14": "2CvQWZLMgSQjPXvNCHYE8WeqKpbYNyyirpJyay9ixqPFve42peTMFhKBr4PDhdXuzWq4fub1HcZgzVj161y4UmLj",
  "key15": "4mp4ASkLoUe33BKXZD2JHVGnhQvCRj3UxZATc7gwobGDJo9sS6pLTK7oteeyV9i2B6QCHXBMc7PAxVUYQHP31QTs",
  "key16": "3fHDwSxoN6Dv55eDVxZrpsjBE4ERfSTJ4jLn3BcCneJEzoYH7ZHQEXUY2nnEFrqMSPNqAySUMdpqJM46pDaxsmQ1",
  "key17": "5G7jz8kgkARd3jMU2tH2xzPo73K8fcsY5sHwDdjMggYMCVuwXQezixntz3YRGppBUuYgG9EKCsov5SwiqHHh44FN",
  "key18": "3JVhR5EE3nysjzGpdydQoJRs1ejmMQJitzzHzmXNWyMAFnski5r5aUty7mbSfdiy5ZGfqJMnVpqz8acVUpf9HQUh",
  "key19": "3Pb2PPa25tW7qWgByohsGw7fehUicyWabZkrKZP4VHGYSY9QLDBbkcKFjRxTqeHpzGUs8rHtpbqE4WqyVtvMVAR8",
  "key20": "3EH5rw4AyBNfKXWW5M6Fx3oxNyBXBkXWqYR9BdBsyM6xGo2MuKQvEJwNJqtzAMuYUZxnNqg9qQQNHLWKDQEc3do9",
  "key21": "4B9DseRHwHqwHUtgaEYp5CnLJUFiVBEAcuMVNPi2PZnXQPLmcV5wC8S4D1U8rAWUqYTwENwuik8pTCBWk52fQ4zJ",
  "key22": "5GNJCkvotC4g215Zq2pEQ1WiiRaF8XgpsmAUiokYZ8wvdN5nBaDrtDs78aA4mZ2rDLzpfxK4ZBBC44jLTLVvZjFu",
  "key23": "51rfaSjYjMBEk9GWeSE1eo2GKZjeeiyFGkrtPp1vfCktvPTmBKr5cBDUji1FoahH2ruxuJifZzuNcWdFGf4X3GQL",
  "key24": "2taszep4LKFSFVg6xjXu2kwLJ4a8Y4YCzYwhLhaX8fKuJaUhY5haeP9GDm3BttzBvJiG4SPvRFGGFNoNLgPd4J8C",
  "key25": "EKWjSRvX3oMX7gAcrTsWuFnF9paQmftgUWXTNqvUzY5HMWwfkDDn21uJnH66HJcRG3RXRyRUcYiNT7g2DmNwQvo",
  "key26": "S3voPjhGoNWVQtxLG5EFsiHX8JcvBPbBPH8csEs2G3xqxfKKWc7u4NFtNrC2E23nsUsZBYHCoGTX6YsSYYeWHQS",
  "key27": "5E1D3eSNdV6qhUD3GAiTyjkL3qTFnpvfMh5ifHCuSGdVheUpsWqXpGRNDztE3riiGsgap1h9aHxDr4B3UA39ztnV",
  "key28": "4KHoxcSj3ASiwiKJeQaNgBSdwehFgbWQqHQtyrKSaqtCzf97pGe1x5zP7tMmSHKg5Cz72QmBtHRziSJJAgYpwKUJ",
  "key29": "5AvS2XgrSmgt5ZXDFFjExTj38uXG14q7GX6E8ornaLCR2ura8y1YFG5mEZQcAee5zEr5HzFYuMVxW3aP4SLFVmMR",
  "key30": "yXzF9qv5LcZ4UmtNwvvXrwDED8uMMri12byv24tFaoKHSJwn6wcfQRfcQT4XKwriBhRxXU2rjCcQfjRNwSeyRhG",
  "key31": "5iSaokJrwnHAukqFLMsS1zfq3E4QgXkobKUS6V9YociAhW7CcesziHN1Vpur5mg4tqswtkEBhmKZPSq4rLYDTXLb",
  "key32": "HUhrTsKN9Uv1TFYhZhs9FD1XSPYQ8D6jVMaXb1FBEK8Arqx3QpMgBKNGhViZes37Zk1sCcKjDnjUmdrzQMxx2Wp",
  "key33": "2jdTkmA1bQdPQSGPuhAmSLwBhEM9vsApiPmrXTCamXQFWMvBNapZ6p8Zs26dNYNcxu4wXq3o4tYvDNxptixZyAz6",
  "key34": "4chzLVRvJnv77AWdy95v2oJ8YMvpF5GvWHf41Qc61UTchiJPyAxac14n4eGWmP4tB4tQjt6QtMtgfYcRwVtLtumQ",
  "key35": "58dBfWFbCEsy5Bb3e2or3BDwtMiqv71mCjXMfYzCZ52dda6B897U3VtUUZS3DgQznfuK2FQko7oW8wtzKVB8P7RQ",
  "key36": "UUvBiqJRjZHrxhosK2BMvRzj9Co9ag8nxUTRhGmUHDBJorjSEhHLVb5Qa5TrgQ59F4PkAFT2Xh1vtuSzhMFE6h7"
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
