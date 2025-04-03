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
    "4y1zaRtSW5eivzyKhGG4qPXTDWpzB5Ev49H53nPPRVJxJgAeXA43yJStufbXereJy91snAVZjpBKgH53fozRibxt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "24srxXsZuJQLREWjotWroBMGQXbamYmo47GxLVttnK7hi8UN87RGatReZZbo1Rq2nM9hJdDPsSvsQukEdgszzxRG",
  "key1": "5hTGntJNxkzyBNv2ySx1LsoFc6dTTCDDi5pDYfCu118Bu4M6Dxbz8J9HoXy3d2oJGjM3dfA9v5WJPizbNCbZ8B5z",
  "key2": "58bFBfyt6mCRHRPiGRvgFjPmAz7iqpM2crmgxXfHvfycmNDDG1P25gCfHSBDv3b7chQzBdMLPNEhQX7PKE65N4U9",
  "key3": "RFkc5g3hZs1uVxUXpEqVkTjjkuG73v9ooHAzp2wye8w3yiiccHLqKXFLik3nktZQYmZxoSoXQzmAVeSbvpP8dET",
  "key4": "5RtYS6GrFPqrhJ9FTe76gEav4eDLEmtDm89gMEm2Z8WcgZJ1zxKPxNS2ZghqxukXBik2Pav4MNLRPXYg7ctq9Hhk",
  "key5": "35vq5RNabEHJoTBCXxYfud2aMBTxQUTbyxMCNt5DtgKqsW8fgAAFeXiLndLo5Qg7y8hZ5A9SyCu4UXjLdRtjwW1D",
  "key6": "5quFQXzc878ew5z7BMejGpH1X96B2YgFjTmeNbBw6g77ns6kXH1x8CzA8ydaXMUR2TwnSxb8F8fnVWbC8sytxauW",
  "key7": "3K4oxUQwDnDv3uj64mvZHXNovVYaCo4dA9TDKKBLNaJhNTJUwLSB9WEnHf9iJF52DCjH6EpatEzjsnD6B55WMcRF",
  "key8": "4bMVXoFz353aryQDzmF2p5DcjEHH8augkfurupyZm7iWuHJ9H5UCmUP4J4qsLrYYkwCHukS7d49dbtReJpnYKKFC",
  "key9": "BUzMcZwiTrn7jT7Pok5YKQyLe3MuFta7NNwhFoFJjVDsMhwMKmyRpw4zJVqiESjGhGMQ2RJ5Zwn95ostDVhokND",
  "key10": "3yEJCrThMkZs3TfNpdZZjsZru9fa8239UZEjg6GFYajzVpYWBux1nnqD7bz3xvV7cQx9iThSKK3uToAgDgvXa5T8",
  "key11": "27krF5B8S3h6CDKnACeyr9wDeKsn4psofTnvj2hYPcJsWcV4wXrnMzjGwCmZmWf277Jj93BHkTqiuusij2F5MgWy",
  "key12": "eVU1Aa21g2BihS3beHtAQqYQHfUzzA9GhT7trpxQQCb6JAwxZfPu4pyX9tiFPy8pn1nXcmfjrNMn7pvtNW4bu2z",
  "key13": "3TTeJTRpnVTz9X4bpeQ47E8Ppo4wTVNKqEkpkFe9ivJy5jtj9X4H2BgN8QsLtQdgupuoY2YEA9ZjN8gpqzcxGCFo",
  "key14": "5ydS6GXfgETPx9vJQaRM8SBLnN6X25UcgESwU7zs5kzdShvzqFNDNqRQjasnG7xZ6PmjiKByHUWhskZ61osdeGi8",
  "key15": "5V5S5L4h77WHWAJDw7bPsiSdHfDcaZjprYWPdrzjZfXk4zvStXThm1vAUTpFPdr2Lqvxxa2j4b7L7jvrx5Cj7D57",
  "key16": "2sr9N7mErmRjLFcrQH4wCewBtaUoSqFquViZxsu1EPD7pD1LDWUUF8cSc7PfKhHe2pQtBdqkCkX8LxdcFyzQ1QyC",
  "key17": "3K7u3wvmLCxK35Z6TZ5ifWBvQckaTe1HAJMhXGyCD5n8E86PBgFFQmL13iNktVX5mswLJi6u4Maq5M3VLdKuhijH",
  "key18": "5ceiX58LLiV2crEVrZBkKWbGAGzJgau8hHmunFpAFNiATkgZqZKM429NkbtPDfve41EanQjPHiGdPo7ErdZy3npa",
  "key19": "4Dbgghe23qSkx7dSSJM9UAUdUtekPimpbJnHHFDdFVgMcHb9fogoWp646xkNcLFzS3aD2bRvVcSxNJ7chtvzJU19",
  "key20": "TAFTJgV59Am3WsMdAQLrtyWwZBomxREhRV9sRTaWSHqiib1iosz5KPX7E9VjRwYpzbtGRcDrbSkapKVNTfeSaiZ",
  "key21": "4Q5dt3zR8JitozHTXiXo5Np9ckPsYrY7hLCm7AbEu4NvTgbDMrqFV98FYGCDm8MMLTqnmiBGdUBDwTLuqpDf4BPi",
  "key22": "3jGvqVNoHL5qCP3DC2u2MVTqCbfaF2kqkQoXsWJ3dHKgT6nqVWTfVEg1Q5PA2q7TkXr4HXasB5FBKFowz7q67uw",
  "key23": "4Qq6Zx8pCy5WqaBJkXqEek1hHZFDunZrg5YpzGBf6BkGBP36u7PojmWs6X2GvVTaxSqxYqgsM5v8DWaBL7PpXjQz",
  "key24": "zNmw4RvBrcfWPJhP63yKY1jrf2Qv9XRSEse6jT4CQkTqaLnNpqLyBsLK5Jv53B97pTnydnLtf5gZP9AaJfEkMSD",
  "key25": "2EbGcaTJJMMXynRKRV5SdQg6miHAZiyEdGR1QE6xKGJhDJAHmwdR97WT2TBjo1LjsCx2S2BNYJqvPpeoVGDNhuMD",
  "key26": "2cbB6mfdKyqt1Bd8pg5UvzDMfQ3ou7ZVua6rNk9hGsmiu6WsCpQdn8mhJCwexcNQukzdw9JPVXjh9W7qTyP4Eqhp",
  "key27": "XD1EetPkRn76xqh2sVjGMg6k6MYsboFCXrFymTwybqFd7NLUjxu1J3bTxqMG8jNg4VrYr5JRSQqPWvGHXtKoPXw",
  "key28": "2CEYD6MK6t6H8sxN5z1a8t7aCgUyaYYhpkJCKb9QDguY4upAiiPHu9CXpPPVKSj7vdm2XLSzgGnrrEVE5Cxgt7U3",
  "key29": "SL1q5R89gz9wtDJ8nFn4JeBdKUN82am7ZZgWCDQh9gCshNHLzaQX9YgiiGCFJGEDJNHJQEGhKYfedZnXC1kRkmj",
  "key30": "22d4TuTmfvCeoCr82ywcGMYVkz9bS3aJAoTCsHkTwXLt7nKicYGpchcD2wbwA225oYUeWTshbzvwjeLnwEZKRXCq",
  "key31": "4Sr1WM6DZrSAGk77nhpZt4NSSghDRPAMKJDdncnhAVYtuvG5dg3BGpxuxrnNkvR7XwoZhn42vNjsrgDjzXGvupCk",
  "key32": "4vCnyRdg1LtrAauR2meuRnPLCiGe9GbNp3XKpfe3DzumU7ZLHzuSj6NY6AysxnxwsXnNwdtiscBEG7pHHPJt4dLr",
  "key33": "vuamhsSxdPwkh9hKb4kzeNe9CxUo3iar1ijfqPzcnP2U9SJseG9zhzP2n594ZFSLzwst4CVj453ciVuvX69par5",
  "key34": "zbmQd9zs1hn89XBaPAcZQN1EUUVyMV6GTrb4Ad8C6ojgMtXqTyUrH6yhMCPQLHCa3SEWyLCs7Zj5VuXo8yzi97f",
  "key35": "5YM3RFNLAJVk43TmsAUvRTD7krPsn8tMjG3EWW1BF7TBpNw3xLsEzegcmMsYqzgt6b4zKWpT7M5WSFqFnvtt2xFU",
  "key36": "aQafsrSCCwJmZUxxWEptjURLkSFXBytphgcCpyDD5i2ovvN6kpaWtYG3Lty7PXAL6DHZNbdkK7kSnuxcFDu2Dok",
  "key37": "3QQLcHo4X6XZJzGEnWKcU5qLhBJjDuQ941vBy35Kudga5MDH7oPQW1UYW9EgkdN6jf2RKCkBYogc4BHL7W23YjxM",
  "key38": "9hQNuskjXYYkaGi4rkT2qo4NxHE25H7JJSY8fa325LUUCpeewKXQGVNqPympnKj7q4VR7zzNfXb1faJMaNBPHt6",
  "key39": "5S4568ksF3TYQBrhjGZgrrsKzmveiCj2Nvj6UWTx829oBCrJKCzqVHKtiKx7hRAPcUf4t6UuWnzrtBwkz79wUYqJ",
  "key40": "GfoPRSpXivzoehxFcQS4fg63zAt2hV5T7E9ztmyMepBK1X42J9F7JhL3HgwxdD36q7tQMY7xjrwwvSQ97ZbhYPw",
  "key41": "4hrPcRmEH8qqMRptSifkY2CfHfJhpauCW5VRY4or82Q5aQLNUj4AigPvpmkLLuPS3oA4Hjj4TURuzHtXCCYcUee"
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
