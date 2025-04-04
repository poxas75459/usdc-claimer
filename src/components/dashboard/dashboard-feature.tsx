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
    "2gfdZdcEgH1srT7TVeuz9SMZbYhoa3PRt8jMx4xuC9ZwmS6EV36EHZ5ueDyPH9U3ijS8EKjGeTGZbmuCJ8oyySdw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5wyH6snaNF7F9vvAuEjMDQuSCcisykdR875GZPk8c3mgKJuED5jmZfk2mnkmjTJPZWXcc3Mj1ZWeUtQFvNxdugFM",
  "key1": "2jBU8CbTo6CWwrLSMoUfgJE7iG4iSZYcyv8ipJinb1Rdh2NUy3XjFm6EH7GA7m7nKwfUhNitAF4Ua9o9gfJVy1h3",
  "key2": "urMJLQtCxJCbLusGKouUJpngjs8eyS2aftB5NdvCvZW2cEdXGjiNhddosKY9E4pq4UfST3xKg9Q6YdgKJzngNN1",
  "key3": "5m5TxtUNti8z2EEz9kAKanQwMBgXx8T12yxdmkgDX1U8kdiJ6KjHwt7ozXvyY63mTmpEdYbdmpBS6xdutU433bVh",
  "key4": "2PfEB4jNSpo2CPmCCaVKFKf5tsAjPUKo31ByN8FCsQSqcajPraJgk6vWZPR1EH3S3QFPX8dh3yzQooQwoUM3Tpsa",
  "key5": "WCYa2hRBYbCegx6sC9Npmf7JpuQeNCxzRbmbsXiDSxiJJpyucNjHgZqFPFiqWXTafKdSiLCDmNK5YGRxXLo6uvn",
  "key6": "2H6A51qfgN7MGjpkf8FJhKD8EiM1nWNy6cxeqLn71mLcQTJdjxYBNkHuogSpWUr2kvfUKyEnrdybws1eqpuG4Bpv",
  "key7": "2FTVekf1cUdaHWcAUS7ZQMZkpaCVqxxwCAfMwqs82cMZxTp8So9XuHCsC5k9F6G6D2CDGSioFxMm297RqDVa1pWw",
  "key8": "2h5TvEC5ZAzteddMNQ47ZfVLKi8ANQvAR1DUhhyNmFENG1c3zHwDJkfDDukRqGtXRb5bieJT1NesSFBW49aFjLR2",
  "key9": "2Z1nyp4Ne8qg9Q8KLXJ9Fv7x1gwfLVh7tLDMXZcvrAVwixJbCfMyEEefysZymx1VXkT5vKiRTPvtA6p1bWnjgcmt",
  "key10": "2WNACLQpFmRGCHgS5yTB6V1efytB1Sgno3yaANy69v1Hg6AWj5HXEFa4n3BaK3XQTwzEhFbXzUdsRxarCWFYzexb",
  "key11": "4Yg3xHjsvn79coVNijUjbVTJTiN5BCRTwChhyx9eweFND6dK5oHt2Sv1aQu2qkT73DxZY9LcBcseDkm1NB97DdrS",
  "key12": "5R9GaxzGFK3PH7GckboMX7ceaYD21nUYYvCMKPfeepKedgd1xxvTfFMj68j2UkWLBcAMyFe5mpPGDbgv6YopKGwE",
  "key13": "3TkJnFGTXt4pPH4YE2MghYfcvBthZEusrGzRVNRfSE2TZLkB6nDhipbUZXaJZoh4upTUzSSidvi6uLWvZ9rCaGW9",
  "key14": "4g9ZiW8jUXvxy8P9RvY9MVmrX37ZG4EupcYASywW3q3LYyepTvrTeQuiKLv8isGym4J8Ltb7G5ruAo3sErgkM96G",
  "key15": "5wMhCNwk5v7qGdRbxvumb7U38jrVpzuG5Py2Lp2ZCqeSy2kSTyQ8oZRBvYKpN8nNF3pCBbcA8EZ4tDHaQZTVv5bp",
  "key16": "4hy6PAT4YHzdCN7dwbmxBHiTox19QucppnVxrgHJdF6uCLaVqKyoNWNJ64JwjK7sPje6viVwCCTeKW9rwe5v1oTs",
  "key17": "21aWAU4X2zxipV7oDWC7C13U3mEtm2Nc8e3nBSSAp94P7eyetwfmJ8A6xCiioRxLo6C6mFA1Sh7fUzKUs2fQb8ZP",
  "key18": "5FGMiXHr4kUgjSnpeWcmd4aDg7ggo4yKWxXjSBtpRtTm2pdVtJ2WR9EZfkptfSBzrXFfmY1ZEg8Yos3Uw5DrRNcz",
  "key19": "5u94TQEcPSEyXuTjbTJMB6sCSPdus8VMUHbQjMdPaCEzUsECYn6CBeB5ycHzbfco9364G2y2Wjs2KhBtHgQnhW6n",
  "key20": "8NgcadeFnWTUsGMy72pbCmwEkfqWbXR8iqn7WQzg9tQBehajY5XtL5Y63LAeuJ1ufFQA5ZApGjEqSzN5bLo68bp",
  "key21": "5zRycMmyHhBR1q9wM6wKJv1vvzaPtMDAhiFkLavoQMvB6591Cb56wtyuSDUJouNNEWsEMkXVCUc7HVGToVAZiJso",
  "key22": "5GWh2LwM9zsCLzmRFZL8R2NmdSwrv7gGyyDYN9tffwzow7jrxnAJ58y7KuidVMu4gNfenyHDD5Lv7mj5keQAdPaZ",
  "key23": "4fWDV1raNy8BneV2BGQwNybRJvHvbKX6QJjWB3QP2RmHnpHi7CJojFzhaD8vMnuBWZMW15MUbWpjBThsiNFNgDNj",
  "key24": "3G6fojToty6sBvbBBTK7Etvhf2peFtmLsQPs6PzYo5z6Dd6bDWNxTCxthWrpXRraHwnKdMcbgeeQHmjAT1XZEN7R",
  "key25": "wQaVi3HSYBJxaTes3ydG1bVRQgK3S6ieoEP8A4XEYrtmw54AqpAxK8yNCwkUBdYhFhRoTZYK4jXRmJsq9VZErf3",
  "key26": "3gB2DcvUrDW62D8XQM8tkQoN6E2k2ZcSorV3sunRAnSMxfgDUFA8mWs2kWodyD81VVqSPNcprfHJP1KGC3xoxy1W",
  "key27": "2cBoHzThrpkqQGMfunX72UTPXPiYb7cGCaodAv7xKkLE1Losk9xa32rQCqL5657nPbeaLRByzB7PigHdzzqMZC3c",
  "key28": "3yvMGHhN78i8jkL21SMuuAD2NWYMEdYYkVPYQzbFvdyAoP87tXJRYMSBdakkxK21ytoCM6HuwEqtTpNczUMyFv7T",
  "key29": "22xNe84UMKThNG8QTTD29JgxWvi5CVCGrKegF9U8gfLACwxk8dVG9EFQJ3rqppTP7KKfuShXrjuXQjx76Nyug4gy",
  "key30": "27z5vQnH3GVjHpYUeqQiotrSuHc1tT7NXo57hzqX4UviRYbW6z9J3YAa8BEPbYk42BfuJKWPwdgRvgeKNWRr9jZn",
  "key31": "5yAyXb5xhJRLocQDyzo4fMmPniNCSUqsYgXFzRPvBpJ3JPkPqLJDUHZad9rVPX1vw313KrbXeRofJe5EuJCJnHfr",
  "key32": "58uDJDrXrCeoi6SYSonunVqihUH3hYYMJXS8jhEVmcgGHtT5TuokJgcFjUZYvUQsEvEpJUaP22bvUDpt9Q68pmC8",
  "key33": "3ELdLcnxVHx5m28Ycqkq6tuc4RbfqgJZQRt4JvNy1QKpTL9JHDderc1hiMi5bbMS4zyJLtkHM4reXqi981uhtbYH",
  "key34": "5XDAeAQLYLxAEUFPQsQhKRJiDzJh83CJnSLderSxY1cPE7oAYctR6iz6KAj6jxjz5bScvJvKqFwikoZcNSx8con3",
  "key35": "koE9TnsnM1PxjqU2LUs3HkfDAZBCwcUo75bvCy6sKMNisWQGXQaJ3JSXTRY1Z76WB2oZaoVYygWMkGnUnf2DtKC",
  "key36": "2kGhomjyxPhzWu25KXj6m7Deh23a7BF3HP5cm3dFzTMFeXhiXQytWZkeYMBfYQqCetJjQYnowELFaPaLGEic5kLL",
  "key37": "xgqVjo5GzkPYhH7LbkT1Qt6skhWnYtHL3snNEgknKuMWBqVZ2BrSVV9DxgNr7YBHEoLmk63zZdqtVhBPDD7Squj",
  "key38": "5SmXgu1JvdbCFGSByisHybUP4YnPGKSyBHiMMd7d7Di5PXFFpgGWU4QdPbWLocSnpoeoNR7UfArM7gg1KdW5y6tA",
  "key39": "ymKmQMrJogPdEuzcHbk5E1s8e4kC2xCSt7yYiQkscXZVDrFK5z87P6AQpi16eoYYzBBB4yWhuzrXAerS1AP2myt",
  "key40": "2UdtZZ8VVNVsNJ3fg82htqU4MasC6ym4KhxFyRtT8hkSxUP7xia65muCULVAWaD6KyG3cZcs8DUGY8ogZRPYcA1i",
  "key41": "2akT85xBRLmJJ2VaNdcwfWo32zXfXC3o491zsVNNhVY4AC65YB2XD7QZMRYTJFuPqWrvJKsyRiojhAWWubXY15ps",
  "key42": "3BnJz6hm5Xvgfv9Zzf22h4FuXMwRKaVSx8yu39Mm6v3Wwj8tiA8xpFFaayqz9WseUjWRFHGe3nG6zvSAEvcyfCr7"
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
