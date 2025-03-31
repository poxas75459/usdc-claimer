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
    "3QMdvjK5sfBo9icHFGya7FT6iZE6B4YEXBCTABoQutoKagC1RwupXUGutttTPdmz9bM1NHRLYiVsnXCDEh7ujC6i"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2YQM3bvCfppg6d1te3enyw8gvBd1BAqXWG1nW4rCkzudedS7USGja8FFDqd7gLsVyAb9pPDf4WfvRHvpyoQ13eUV",
  "key1": "49u1KisipdDFQHpGCMSXUMDSsmSbNY6x39DE3TmjeE6ondZmjsZhMxBAY5NbiM6PQiQ7w8nSnDtAd6uw9bp9zqVj",
  "key2": "3u4jky7PTDFULpkowqAWEQopMQdABYHWt5mkZffn5fK8egYPX8oQehgWPu9skKhKYvUhbrFtktzfDConwQsNEAMt",
  "key3": "T5xEx2BjJU3xJEeiitCBGRmfC8dd3G2Kahf8zHonkE8awbnUrnrLvpFKJWwgckNfnx65YwcY5e3K89UyExtGwbc",
  "key4": "RB6eMM4D8ngv13EkMoqLtcDa3Lmqq92Z4HyYWRy5WKZ1ukzyM6V85VF16vfFTqNk2G7YmC9NjKj7Wu6ohMbn4Bf",
  "key5": "TsHAXpZPdfcAeSfPSWWk3UkzHBU32MeAM4JYPJd6VMF4Lq7sV2vukUoJPSYPh13VeVAzkKZnYnFjTDVywePmsRx",
  "key6": "3mfS4DmzScJWb1vFkZUUDZTVgZJjasMMTcEeXYKPnuQQps4EHq9MFRi3K7ud7WVRguDordM61gbQBRDNRQPu59QE",
  "key7": "4nfCRBmQdUgGkKeGXhGKELno1QrrtxQ7exhrvf5m98LTTw2kuN84cj1igryNs4CnDDwjREkkPbdbB1jtXVsY1XAe",
  "key8": "2QHfCGiUSLCyGVsZxBfavjCy9hPnDhs4SuEwxE21Mf92iz9NhMYkHbUWGqDnKHZHoyoL2VkrfV3f9GfDVAUfU7go",
  "key9": "ii9ixjPBs2xnobXj5vHD4JxAUijGZy2366j2nww95tGKS1YumM57PqkdzgDpt1Va6sToFbTLikXqGPJoWTa5mW1",
  "key10": "5n2tAgr5hDdJm7NmivubdWxpFXapmuC2rSsPb8TJ4X92qgCrSL72c8jsTJqhhNNyS3GZJ4xTEdw8JpLr3HFDMfEL",
  "key11": "3mHz6R6czsr8wL3XXhGhTBg7ifCQTZLUkP5VQH3insj23gxu2792URsaGEGCnxPDDAY5jBWYVZ5E1da1iSjTN2R9",
  "key12": "5fr3gThPPJs1Z9Xr1y5qiEFcexwcrVbPMYExxGj82PPwgi5j8K3KN1KQeUSrKSLHCM59JVeCsXHJVZmqgPAsF4m5",
  "key13": "hwCmNvxqx44aS9EMTnez1SoxD8QPZrDCHK7RyACrtFXccSaBTNW8rLvn55otzzdVEBGVVW1P4ZD2kwpaJRoj6zL",
  "key14": "4Vo3kry6JszD69UYbagZmG39fjVXGgPupx4ZGvWW7ddpmrkyrNXvkbhYrXhZaUpR992WaQkR9g8qBBDVX3HnWmqF",
  "key15": "4sHyLCwv1zYqJ84HHrLb4Wg6tP2G9noDtvDgMx4UMitCuoPSExzMvDL4cacGsSdwrtGqCcec8zic4FxC6xpdTTuL",
  "key16": "5Hsyfkw4xPWue8n7h4QjGsoPzUL1Udx3MFaR9u2DyV9K76WTxxXNjbZYJQgrEEKcp8Nt7DjHRvrqkkpCu3uERoVn",
  "key17": "56YZHuuABRJw8NNhYnTKAY9J1np22otUVK3SfdahpnscEKxzUs6wPWURW9ep4yXy7ZoY3K46xaQgAWiUszKUdSNb",
  "key18": "JeWtsBF9SVuSUw9PKcsZFfLf5KmtPTkBRaWb8qk4PKXfX6pgcAigT2uAtunKpQY95LxDf9b1bHK74XfkXV2cTwk",
  "key19": "5wzYQm9QwSfL6UgAXHDV58FpWmQjzYhZUv5FpR6fKiki4SSZPp1UwWMX4ukXB2TpQLvGuhi5zMrcitTagtzcMCaK",
  "key20": "5214P1mKrWejzv6ag6zuJRZBE1v2rJTCM3Spsn4KGTz3jonhKYQttSWN1wfKNnSj5StsrDHMqL82vRh9mijqdzZV",
  "key21": "2z5nTXxDi39v8DizkvWmksCUj8zmNbnpXWhJwJNRkSDoqB6ATYoh4buUPdBgqoTfTb3BGPrgmERcPBgqvpkm9ZnD",
  "key22": "4h7uC8TRoeeqJ3PsVDDdtwDT4SSiH7hUg6wiRF6kkAvQnNrGe2ZNPQkxghZ5yuKtryvv7BByX1wYXs5zjEVngz1j",
  "key23": "fGbTf9HEWzyBQp4ZYK6RdSaRFfQzE5HbAtbfoxZHVBQvjguM74QVtS7nVFn3vhmRtBbKJgXu8eJKBgzSYgWWngT",
  "key24": "2vw926bK2jzJ56cvAK51aNZBN7xeNNnGcBWx6vxEWAnikHZfR4sCPnUB8NcPUVxsrZPFXaQsg9FZUZWcmY1NALut",
  "key25": "43cPsQ34sU611LJGeHSkFoNyodSWKtCrZoE8BiSpcHK2hiJZygMoFukRhieJuE9t4L8BNcBgVVgzED8YiyLSaQv8",
  "key26": "5xoKmraDwVEgq1cYi1mMEnWY92AQGxkDX2WXj1oy7T2ZuBudFUtUYseWPxRgkYzkV2YbHtyHp39CEmgQ6pLkP9wL",
  "key27": "D1Ejr69STrVF3exZy5hjb6qdnJaUpN7owNM75SRjCRoDq8aSFYAnEGPpapE9hDUN4UrZPbKhebJwe854XoQTAbk",
  "key28": "353qHctpsKT9PwpbaFJg1cFt3r5hqDmd8fyVwi6pw5QZ4gYEHA41mb9FtobA6wCJGNko3TAYbtHJSeLTN7414htB",
  "key29": "5ovGBj1FMcptxnJ3y8xTwabP1s6Kbxq9QFBpZ2NTWDmaE9JRtyjqSYzCtVa7RxeDBwAxFKvw51hTrQd6FEXaQGwh",
  "key30": "3MhYqRPtJHgUo3dTkUnSTb4MNWXZ9NmyYPKCK9a8G1YgPG48XgYdyUY12BqbXuz6VDzjmqZWqrVaXmaBvE9Fhwpw",
  "key31": "2uXkZriQrn4Fit5BiS3fwNDko5Nd16cp1oZcuq4pGqVk6xgtBGbJKmsoqyXcmt991bujASwPhHcT3oPR5GmctRjU",
  "key32": "5JsneL2qc5q3F3h9fCk2oGw1QroV2K36tUXyhmZzJfKA8gBBUewktw8MvGJH7en3T3T9BbY5UYfxFsbq1HCwZc7E",
  "key33": "hBmfGwUhYmwmdF2BufpfWWrAnqFdU1zGoweDt8ymHQa74zPzVha5WLz27S8DWC7YUuDuQNPxJkUhy2t8KPgQjuz",
  "key34": "2p7kDAceJGgZWTXCxxo12Txv6gVaqZBwVAmLFeG31xr6TsGq5kGauWsnDf5vxpkR9aV6krrB32jFf8AFDsMndKR7",
  "key35": "24rrp1q5wmD1yvrRk5JXfuEP8P31T1XZm9yD4cVyhLeTboFGJFjjCGrCsCNhWUjPM3SrLujmh6MQw32Ny6e89xzB",
  "key36": "3ekZA3sxsWDB2XqS9zfYjeG1QVCfmxzGdhpSQEaqfA3SSTxcwqSmKCAtVe8B72g1Y7oXerjn7ao3izxzNY6mVDoF",
  "key37": "3435mLdkUCbF27JVGozSU7oZstn4D4Nx9ZNB7VbuNu1tnSvezb6EvCWiy1SbDe3FTb1NuhWazWJadBe2AFx1iTyq",
  "key38": "T1MRyqss7rLJsqPctX3eEMnBjXbRgUAsTQ4r4wmrSBAZ7qKofQH5dErNTubVKnUsi1kv4UnfSg3ZQcYHdDT8BsA",
  "key39": "3b96LwyugZVt5irjSDZ9Qya99E3wbSTpDLWAS4xQ6xDWbWygPLK5oqEYLqggkmrHSPA65HNZaQRuLoDScrVLSUTC",
  "key40": "5xa8RoJYX1UP2i4fkTvrmrnE6y6jWfh3r26Vua9HPQZPz3sw2LWK17FKsJ3BLa1QLkk5PtXM4eyKzLQ8sJ1jUXs7",
  "key41": "39xoFDjvK6zTQVnAEXKQGRS75nyL7kR8sfy8uojsDHFAn9Ty9LNNXtbovR6DAC6Gw6gAt7FYPnXBibLVJGG7EYyp",
  "key42": "4UMYatHWX9353xZaK98WuupmcbWXG7kHD4xFqgGL7PzCmoTEk9Mg7yA7vzpxWF594TyV9AY633mYLX2d2DGGBAM1",
  "key43": "4riH5sS5NCbXnwgPktGyS5dEkE1ZAbvUByzfZZ7B5ot7kjQVeVypdtGcska2mJpv5NbXrSaicPbtU6QxpyDMWSta",
  "key44": "5UtR8zrXJXcfQC4CyxoRsPebaMvzsw4iedLS3VFibnNp2k35hRBTmqghRT5R1enkPQ6gy79oE2XW7q5DNzDpY9SJ",
  "key45": "2Y7Rg7xgRPnkLaDSSweGP1nWEEzcbTpcj9MZYi3hZPwSR5d2esH6AQ468DqxErhKCbowC8xsms9ebuCDLZRQXk3m",
  "key46": "2xj4XZckWur3fUs9E11B4xBuiy2ktNaniGmwHH3mkRtpKTu3ykw2uEFKMFSTNoLm4UNd5S5JMH7E6MP8YG8BejmM",
  "key47": "3TPKvB9HR8b6n1rWkzVgqxsNRsJNhudmmjxerwJoEePimdi759eMQp5AVLGncovfCKtJ4u7dcjVt9Vgh1pHFPGy9",
  "key48": "cEKA9Jg7UKVHgdu8LwJPsuas9PY5xXALbkpDbbzPWP6sRHSjEWPMZYPQw99tpk1RsFLvjWvkfDa2um4C3q4C9yg",
  "key49": "316biHS6gdY8wC8qUxr32veBf875X2pNfxKGZWGye1r6BxsX5SDyFyamTSt36TJeVDpzZBnjkyG3mT1jem7zAGKd"
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
