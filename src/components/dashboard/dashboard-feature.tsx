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
    "4gsNr1NApgojBaG7j41JuQ6BzWEE33WMjKa1mFkZTGtAk896zHti6GheiM3x6z4VQngC1y6QshwD8CiFacxCi9oH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "63XWsnwbpE8No8ZjCXmR5drPwV1m43U8DgKSVE4XHfPF7isZ3L5KX5gDpb6joGbri1JKUxwsTUzvW5dxr64K7km7",
  "key1": "5nWUhQm4YS4ae6fy79NQz5HeGjFm8D6EFDYG419FxJW5o9Sm1Te4VXkU1avGheUXiJr3RgzgrmPTRTKzuqeNcHfX",
  "key2": "3w6EaEp1AoRjm85uASxDfYccxmY8rLjhSV4nA1tnwZ79KHhq3cnHjedhv2ois7opuh6i4GBrozJ2DGe1rgDaCXeV",
  "key3": "3YqNJemeBG8zxTDrBcYjznPx86nEfVpTdi9vLJu7wKqpzNPLfibEpn517htP4WqLm1ovwpJurjpAt6mZejn7Kefz",
  "key4": "UJfWcvmDDtj676BPYkjar2KhJgbrE7WuSrBHXw6B5taUDhk85cYjfsoeFC21GbWR95p6MJ4Fx7EZYP1G1ksZdCj",
  "key5": "3C5qdrYpLc8xKyZDttjfqMckQcThkVj2s5rKPzDncF5yd3CveEhgrfLkSoHZTLTnBBEpt7h7PoNJ3JVQ4SmxU1As",
  "key6": "32fPyJaCqaG4fXWApnDmxesoGNziVsKh4jPtbY8jMsG77sHaaLGwQiWGLP5e5eE5ChNUjWTaoYFXWzcxrmMm1uwV",
  "key7": "3C64vMLbFcKqEQ6V1Cfu3YpiWDznDwGx8ybE8pB7QkoaFLnfQ4UBUjd19yuwnKij1UzhAi8q4RTpARVQRixhitbR",
  "key8": "2Z2aQXCnxHDx9pGKnTxTF6SR5aLwmgRRgQwsU9xC7Eaxv5K7AkRjAJZFEGdGT6RwHM9pc7QrLxdNssD6CG5UtB1r",
  "key9": "2H3nCEw7wu1rJbuGUgsVQkoi5xKVv7JhKTrVAbpcExtekKdmuMQwWJrFfxrs7rR7uWRiKFoWPVSNTRcZMLPVH8Dm",
  "key10": "2EfjTbDrKSfRuLedeSPTALe84so8bCYPCxufGcYmqjHkyib14DeuJMwkfB29sTWNwngRA6trmLyt11U1EqJXJnpZ",
  "key11": "2WUsVZhrFHvLhpaUp5HGjhyTfKnU8quqm4XVvW9fk62GuLyhtzsnowR7tVXa84m3jxbJuegpZ2jNsz4EzqFLqe33",
  "key12": "KRhcJrcUrjdc2jmCbnMh8gAng7WgAf1EEM9oBW9pVErBYfoEVgFt5jZwTkGobX84G4BMpsXquXcYoa6avLUm9qk",
  "key13": "5ykTgYFxwiLr24uo9jNbE9mTZzK8gGsHGhcYDCVuAJGTpidhf9kEZeNJzWPXzJWThBgbcBdQtAHWyzNVkbg79kk1",
  "key14": "4kP6XpyAKJXnHfVKWZtLW818TXxDFcSY9P32LfL2kKSdFEVmzXNLEaJ8ZnPjvYnDeGME7M8j7y34RWxwVM1x516q",
  "key15": "nwD8mCvTcxrW7RDe5vKWhL9pCL6FSVcUMi8Ksuvhdv15UZXThCpxdargytdVavh1AKrSFLJrZthDEPcvWHryuer",
  "key16": "3iyrFuuJvdGedAbWJ8ovfnGbb77bMq1ErKqEkGedx5YMz7sk1QyL18nAH8bgDwN4fUKzcAd76cyqwhZbnrsVQvNc",
  "key17": "5s6bKYTecfmNZ4AZPwCCin9fLgt7rTC5zkGM1trzjazRC1YQAknYUrki7fq1QZgpLNbdLNM6RDdn2ynF1kZ7C6p3",
  "key18": "4S53E4SXQAnFGd6RvM47Y3XJgwcFBSUb2kwzg2Mpft4brN5r9KUXpYVknygPjZWScf72hX5WXuDMGxokFoTnTYM3",
  "key19": "3GZgsjDm41eX7gzeHnpA9xiQ66nvSzi6GyA8Sz9WQHZS7QMifMPAmE5nw2RBcFYdJ4TFgtkUtcN7PjRyKXBFnjtU",
  "key20": "3Dc2yH1mPxsyMKwX27AKPks4nF2Zta3Yp4QP1UnA232wV3wuFjXfaDBPAdbtFaNuzC6LhC36tQ3fyaSNSKGchphJ",
  "key21": "5LT7pRrquCFFC7frWuvh4sz4M2Gp6vtmxXoead287JLf4mMomJo89WszcL7XakiGzNLUMzWM9ieLSZvfp4oYzJsn",
  "key22": "4x6LAYeaaaQp8o4csrfN6J7Kg9P4umJKxaWuxPPixBSgW6tkbAFZLyLJLGjgH5mpEt9RuEPWRY16WsqTueETeAKq",
  "key23": "5EfemPphJ3HrN1iVPmKGgxHLdawVFwfLHGZRKTmq5d41sTjjd6faArdmxMtYYsh15a2dUqTQqwePiL3DK7FZPVoy",
  "key24": "kcudrwDC4XqgjG3dAWtsvi4P1MtrZQATVr8weLLvtqPsU2UurKpFg62KczW62y2tUJ8rJPC6FL297TTG4egTvqb",
  "key25": "4m4HF3VunYyqEX8eahyeWQnjiVof4ZEBRnHv2k8fKkHUD9N6WxCNUfoQJrCcRdLwHX7r9CoE2Vfyirtq7oBHeGve",
  "key26": "jwabwBhqS53EaCGadE4GeTHRPyVCbsXfdzGsfRfXMKJ6G4m4h89anQz9C6UztaCvzJ2e3ThoKhPKqyyPT1kcnUa",
  "key27": "57hCzCbMBzHYyocdCFNULrcWopWbzUqpSUpKu2YpDm5PFLjb79o1G6DkRp8YBpau14iQiua31axY9g2Fm5iGTknm",
  "key28": "2kSLP1yYAceBLRojzqSu5nJYps4ncLXABWZyiEEQbHTRmi7wuT8qPvqtEX3hTgik2KyYwLuA6F7iDxTwk7oic1B7",
  "key29": "5b9MSkeEf864dSxrv1nr2c55xL9ysFeLEauVDMivsq9J6vBL6usyAXsLALKy5gxF4SyPF2BPnVFaVarXkdu1hidr",
  "key30": "ZsJpAB1UxQoRLqAgSCkYQGBjP7S1iYKzsNVf2GkByrjw66igL1kt1m27Q8pcXaTHubRZt38zcyK2LQgr7ceSbLq",
  "key31": "4odthHYgo6xMqrWyvMfkqnwuKuK1Zvz6jYoNipMqDrb8FJPCaTsiqXdCG7dFtQwfNyH3wPoDkpjPSqJjozAAwCRz",
  "key32": "2XPsVEXBCy5bjkWao4NXGmfKBgDDS1CyF2aVnFCoacsgjWWmHWQkxiC4kiz36N3hBsNieb7cDWMFThQ2TVUhFwpr",
  "key33": "vCoi3xT8HwrnP2EMAAUm123Mbc8N4XtZpzLsKLSdRZdd8EtWoPEd2qf1pBsKVFfQmY1YxDzCC6ZKknUDX2g5gSS"
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
