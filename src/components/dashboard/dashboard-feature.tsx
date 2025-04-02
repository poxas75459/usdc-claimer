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
    "29iWNj2wZf8nh9p8K3tDGJKBVtPTEnDXbczvbSGVTP6knUg32QD1r7pKkZnWNmBVHmt15aCLi7XjqqxxSob8WGwJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5vLnXffbz8ZHNjRV3cvvZG7wLqB1pgNutUCm6Mksxud4zPHnsaygXutFYSKvpwanaprq4JNw8vrQj2Dq4A8Lr8pu",
  "key1": "3Ym6CMQztGBzJqXKApiUf5s1zVefkWpJj4duSZbeYoh3mzsCL6e9NyiDBsjKGBY5NPDkWST9BAoYgjPk8LQ7Bna3",
  "key2": "3Xqnn7DWerqFCs2no2amZKp3opT2h7f1s8GT4t2TwdWfbv3fg6qK2bbnwvXa7UrvJnMGE1Dv3HCfjU93bgbLRmp5",
  "key3": "5RqEh36JpvQ6BsaMiqdFnyWwLmdRdWiqZvfUo8AX34pxvJQfMcCGpj4sSLHxfscNyjHzfurLkwVS4yKHdeRVf9ow",
  "key4": "2Uwd7dsZqQNtYN6zrir3MuDDbkpkzznh31sBocgGo9BKq8UMNUT4grYQCoheKko1sTD5BgaiefZTLsMVvPCTbLU5",
  "key5": "zTkDy6LNtj61mFwMwhryiPTMuyn6rf8jtW1Q8TqvaEJLdwq8GVy6NG6ecCxxQg7etTJTNDxnav7x7ibeKkSCV5k",
  "key6": "2cjbzWaUR5xJmw6riWRzZKe4P6ZVHRD7cHMheFw3yh4mXHcgMt6z5fscd73wdtsm1cRosvFmDcm7taJpF9t5JEMP",
  "key7": "5F1QttP8rDZbQTLixWc4QviiJjNhX9nru2MijWHCYHi7xr7qY5vj3DwSGfp8sLKhYhebfuoRF5nGRrHE6tTdXVZd",
  "key8": "H6o6gHcq1owrfZrZ46VLvBcUJCaLTRywvz2BsiuHfmAnnq5hFc5hW2vqkuyepv7BMFmF4Uij5ZgAadGrBG9Mwcb",
  "key9": "2oJTonqBEs29DSBg1fLvtb6uaSD7MKx3h189HZKbeKqBf76NbjNLT44uzrVRhrgeXfSNa79ujs3ktHj1d4fFpsXX",
  "key10": "zCPt9bxUZB1ZVRKFRfJiUC3hx1cBqeMvxfiymwdgZ4XkHX6MH9VzWZw3x3SQZaGpgwWiPwua9cXQfq9MRiHrbck",
  "key11": "x1CTUPLnSaP3H3atp3DdzofPGs74S17ZWbYQCx7ugJVt2CNDKk9sR3UFDh5ziUupuB1hcPz5gFsPyqC7cKw3d6m",
  "key12": "2Pn4bQMRAgKU157fvXMf6D4G2S6A4B1Nzs57RjxmixP5DjrZuqdMkVMLYyJHHyawdSA7h5yNsgnCFWVqJ49twacu",
  "key13": "3yJCCvbxJs4PFvi9pkNogomU61xSMCfzN2EMXHR2vsThCGbxECS6uqTRhrm4ybY9TDPBzEhtQWUEPaMfnYq9qbh",
  "key14": "39nLfSxF5rjp46AonKnXZjo3B2b4VxQeAjsSRaK7V5hdHfaYTsDT1dY2aqEY1idU7cDzH3oMgP9TJ71R5YVskRww",
  "key15": "2TjoNR9VXak1KfgZXuiGM29XXh5CK91CBoutKtW8FUicqi6pb31TR8smTdU5sGsLbP6CwgBGPC44X7E6xN2K62Zd",
  "key16": "38rhxcWuPny5Jsdch3gLFEtvf7f2RdTMDqxSutMuyDdaTYLSNXE6cMQRQaV9jXbypCp9KdWwo4TaeknEkCAGiRXF",
  "key17": "5Q3RSHkD5hdWDoc6Yt34t2KviQ93tAy35moFRhNWqvHEPanHUMSNXktHPS3mu5VGrMaTioxwVLXt3Nk5Gr1puTzf",
  "key18": "4nf7xiU9E99dBWbezBEcdsHtFwNxLmc6tyanM3GATiJrnCdfTEkAXrSZg7gjtfzgeHb19prejsWTaJQznPwaah2k",
  "key19": "34cWmC32x79G7p3xcN6jn3Z2tuJWtTt2LoodT7HcH5YieDGMp7Bg9HhTAXbdpRbqVtCvtJ9Dmdto3tXhKmzRmxhT",
  "key20": "3mtC4HhX9NzqcJHyuawKvMTtTgMs5YG8Aix1dmDGE2XKJgqocQSjhxb45oohuisyFUT8rQTTPH5dmLEZTT5r3VeK",
  "key21": "52TpPbfnLRYhjZtsaaWZM4rMM3PAbMnUsGRhxRNWLdwhmAQuRJCczAxq2HUSNwdT9PPrmRivb624heMyDr138QJi",
  "key22": "2vLBNLaBYbw9NCVruy3UHz8PgctnMm2o6QcWUgihLhUJK3p2sTUNgt11LCoMrtbfPFn9xh6tGjAJmGiGDcerZahT",
  "key23": "285rmLUVE2RmoSn35drfYjixf2D262WUrZ4i1Vc9eGzGhC1NbRPCsaxF94Q8R5HccDAcS774pawCZLXomQmcx4ju",
  "key24": "5nMFRiGUtSedTT4916147CqbPQV4UEjG2CHJYPK39Khw2U7brQT1MandiA6fEMS95iubPbipFUyKtFgbuq23EEw3",
  "key25": "3QUkr9zEaaYpoHpPKfz1Vr6GYyd7Fpsny7ZXyLWa4HByyhEpayhFv7qpnBk6asRmUyawhmLW1dBnV4xDoKUPxATZ"
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
