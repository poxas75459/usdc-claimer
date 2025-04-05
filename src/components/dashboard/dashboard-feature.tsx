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
    "fh1S9s8fu6DTEGAgeuNk22ENWfQ4iAMUBvAYHQ3Jq5xjq3FQAZJJLTFu8raScgjtKSQzoz2xJTeo4ZHiD8ogt54"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "6SZEcPoJe1CGHTmFvXaC2rEx3KQtkdGcGUYrniFjw6RnGuHSbg6hTdztQ82qt5im9Jz71SjRsYLkKpEvrKzeDbr",
  "key1": "2zs8shtmZuu6gXTZ6SKkaUYH6CWCCYurrxuRn1Njum1STTUgyxPHEhAXUxUBpPbRMFDFko97MtesULPDzCqkcNDD",
  "key2": "M7sCca3fKu4ELh41tds6JRh7GbEjKRFjs6bqPu5w15sM5wV2T14d2wGa5n7LsYQsuiNYw3vUVDu7KnCd1F4JPx7",
  "key3": "gvJTqNpguL66Xon7GD611RiMMGWx3hrNmkkncrfDtYyTBtpLBmVoHENTxXLVREZzNtffUY3jhuyQNpLNqHA3p4q",
  "key4": "3jLApMkXiqJ75nA24k7PBjh9m8yV1YWJhF5yZsikSB8cGfPjB5gKYBaF37ZCcTao1KDKieRSh6s2C2vYRT14B6Bo",
  "key5": "hjdFqVZPNaj6u7fReqfmXMrqFrUTGqN6Q5DhrDzFAUXhC1DnHgZ6LioRDcsPqeAXFeD7CJh6BGN1qNhPPJcxMG9",
  "key6": "5dojBiiPS8wK8RjBB7LVBsWh8t3gNixun28hvC5HusGvQX9jisZXQY4KNGZEqcbPeJZhnArt6NBu6CxDeL9vr277",
  "key7": "2iwbSVscirJkEMuFoQg9gGSXzcRMPZmoj8faxLgFDdX1afGMwVMpAyD1KLWTWGtwHcmzt23Fj5VFpvDkiedYLo1e",
  "key8": "5jnshW8VLgkumCr3vzTwh63MyRBnqzyYpqu7mgxYuxLNtRQHKRHzMcTm4f75sEtcHPaj9FkKqZJ1sUjrXaxg3qDA",
  "key9": "3A9HkCbQMrmVqsmGh7brJkbryGfapHCHFJcwByfXVAFDGHCu4kGK84NAZErh4NJpHCT85PBzV2ocaiw5r6TPvAEj",
  "key10": "3ugfRJKWApouFeN2XQfztARW2SB6fcEiPYJJXH5hdbeWCbTdby9HWwSwgXnB4YogxQ31SNxjS4HD75R1pwqSW7Zj",
  "key11": "2HM1ezroaHEHg5aEggQJ7xdFfNZwobb8XvVR8zsrdqfJXQVTSaDdqHFPPUvPzoMcDyVZrLChD3TpktKQyZkjHiAN",
  "key12": "5SEULxiDHahQUw1Sth45DeMrALuz5KnkFdPQTsY9zaDvL5W2qQWXrdvKXe5KdrHG4D6TERRjrpGSsYUXm4Pr9tNb",
  "key13": "4wn15ydv8THZDLdbvqsBGvkDZJ7XcaXNXw74XsUE8pmuyTwFACg3f6wVvnQ9YPSE1qo2TNSK4yETphbSmjHmmvP5",
  "key14": "49akDzXBcQmeXCN6jSma4yBZqBt1ZJJSEXEeqv8MLaj23T9aCnGWyxxN8uWkBZP5qzmhbhSJvhpWRg52ZnksqttN",
  "key15": "yaghTKiTDSvu3pkutJWb7trzPiePMcHJUj376hL2vNkWExMGeFA5HKUyS5ctRxUrNuaECmzdLDb47QSsy8t71HK",
  "key16": "62GxdkcisUZaGetJF3Hx24jXWUKGUkXezLFewkq9WoSTzhNaCYdARaN3nz83vQjZNpPFEm1S7rsEUJHV4dvExPhu",
  "key17": "4VpbZ8cbc7gwH3KBqpZvDEda2mQKNqndrtSzTU266UEdkRPzY74M8TzYzWqVnEhs3eF1zskg78k9Pf8PwEuwVngJ",
  "key18": "4WKSgXZW46aU5mTY9N27p8YKfhpfe1jjFVZJAjUgCnN4vHxEXTTi2SW7hSvb3sVijujkZsJ4HMTKWGgr7kzsXVzj",
  "key19": "3UgMCDsDiwuKiJExAcaXa1VgrynDHZZBpCygyY69tfsMqbJAsjboh6WKTpPq5MAeSYUaA3c3pqcs9XNmz81HwzNo",
  "key20": "5K8BWVDhVjgYtxoBG7dgg4LXfuuh4gi4m41cSKLFDzqGsvANqupfd39CnKEaek6gcwc6crcHhihRL9s7FDw7kpUE",
  "key21": "2k2GhVkKXgq2tPgyEj6RqeSsxgE14eKYPeWeTiytXoi9kXSbHUPcsxTv7htaJQuuW3Ua1hUqruvNwuUATxfekb3P",
  "key22": "2CT6wFtvKS3ZyQskY7fTRnsYbSE6bxo32kVrF8PiofpBve4v2aaHLeKNiSgu1CUoKWQ5TvPFAwi22LAw7P362iq6",
  "key23": "5kYpHGnoKx3ubc2xyzhgnWVk8WkAzSo1YqhDwN3KbV3eRhBzkRXfY6oCbmyDn2L1rhbKbGJyDbytGxrbaY2FJcnU",
  "key24": "46MN2fqKJreBFFY2zbHrmy5A6HjkgPTb8Fsw7nT4dbExQZdMiUk3uvZqrBYaQyM38uR3oTxshYWVgVDhWx9w5ieo",
  "key25": "2hZZ2XT5urX5ccZJCUyJdQ5GG7dtb12UJ5vzsadFALTMNW3ZfvSLht29BYKqZ17tb3fP2g8N9Kn4ttsrTfbD1zLk",
  "key26": "3VzB7bRuTKVEC8bq11nDdDzxDzjNjTVvwK5whtHrevH3wtYsA3oY8TYZiuqrUZvJ98gXAnju2sQ43975vfuJgbVw",
  "key27": "2vLEMvjgpv7nMr48VT9sJYy2zZrZMAcKE8TPDvUtX1zwjxkxdqfS7rZGVpRfpp8wBHzMRaZuHXTxf7HGFu2ReMvk",
  "key28": "3GeSE7dA6VwogzU7pPd33o6o1JASJzfeFewnmtQxCQgDoUwkgdy59oDzWYWxw9buoLzN2apukdpk4zpt9eDCDRCM",
  "key29": "3stcjrcv9CaCp5RufGRTc7YYASJjkaeeqfmmrE8svG9J3Sig91gPRQfkFVqjeiThH2VsG7UBwUmaXqD8PVRFKoPe",
  "key30": "rwyaFHKnRi82uoixknEd4iCrNe3w4YSe4qwoDG8oaZrvFatHDBzYi48LwtkpaG79DJYLw4Y4CLkpdXViZEUR9L2",
  "key31": "2vJdFGbe5Wm5pSTLnUkLmGTS5iucxLJwVFBZYoihk3DAL6FoSzKx18Wvbq8VJKNHoPtyB5hJ9S7AVVQSaNQ6LE5R",
  "key32": "2F9ttBRcSvnLAg7vWRudDpr9doocfLMmQdcigGGLx9xNLnq2kmqJUuohpz8QH4QiyQB8PrymgJ1hebWv5nJWRVV9",
  "key33": "5LFJdFaWMjLtmktX6H1CTfNW98sNnMcxYCvGUuLVJd8tfsUCcDzQXciC6Lohsxh1c8mkxaeCKBopCNzsrzEGHFQV",
  "key34": "2X3c2Au9jyh8xDCnmq8FcKRHMcUsZY5fR1TXPT6U186caJQkLxSLkPb2XjE4Nnf8Xa9iTq6UVfsc1rNVQkPCaWJN",
  "key35": "2Nu4hX7ioxiUiYak5bqztTHZ6UHrd6Bd8UJ5iqef8RnNdm9YFUNvDoF2ACu2XdpTh4jUA1rTqPpytuqrsTf9GPBT",
  "key36": "3aCVXiLj5bDxAPnwixik1YTpkVrRB4pFBZMi8RXKFZHZ3QmgmrAdicWZEKq7YrY8F3vcmwDMHbtvbwnW9XssnbWd",
  "key37": "2U64ibuD3m4y4H2LYU4Cf4mNwboxpMTAtv6pWGjcc6AJ2UZkj5Wj6EDg7Ne4ywDJRYVJL7mCWF7Sqp46dvssF7ED",
  "key38": "3WCzhJ1JbkaMDeWPGgKFt99hbEDmjSiXEaNV4J3NooHGMcfFMRg4HRQvRHit98BKpmyVRtpWU2juVDX9mSTzRevu",
  "key39": "5cB6Spo3TvxpngQGTLCLbm4oUihZT2oBMriQu4vds3QXRo7gKHdGUCi2yCVbjqdy5CfPVC5WjhrHm8XLHrpsfzin",
  "key40": "5UQhKQgj8453fv4MP24hWqX68G6vYgNiEu586CPbf8SDjMz8mdZHDnykT3XyC5FSuBAph4yqwy271ULuqsQtvYtE",
  "key41": "ehYii2XKRJQ8cHFVfw4PKBy3YxvbGtzr3UEe8fbw5FSkpEbRNqdrDVSFuQUAuQhoX6QGQfSuAc3pBUGBgENyKqB",
  "key42": "3AEMsWj62wtLJzu7f6AAU9tvbXqkiyF8fE4SG19Qiy9XBwzgJHrkmPxaTZUrhBpGdd6YRKNjJN88N5UKeg1Rqbdk",
  "key43": "2pdcFKxVjYYHesj79ggSuKTvW7NZS8ASsDvnqt16cwJo7XPmTduUUbc4Btsn3kjkvX43gKni6Us6JXfbDJABgasK",
  "key44": "WELsw2SVZpU5ut8z1RnkcPAh2n8NkSbhqc2Uda2nTABc6Ur6LkHFmQ7VMg312BV8gxgNBRQ2cQBqU8UsHXkpmgp",
  "key45": "PymobbTFhSJupXAKuTWpCaHK1vJMDYzftC74gmQhJBbG49DfmnxJpHt2RLNeB3tHEaDM7gy89vRik7dpSvpPnSK"
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
