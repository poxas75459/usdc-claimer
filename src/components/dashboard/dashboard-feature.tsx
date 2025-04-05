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
    "64vcj6cJgTHJfVmNbLhYbSUcuHYmr677VGXXEt7jxszjx2BRPD2GPrG6EpczFGWVNZbnnynt8E9qeovykREepdz4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3qkZ2PHGiFBp6yoTQNyw34i1NFBvfyFXeMyQYEXMWSNTkVxTMqTTH78JuJqp4fAMfh5S4dvwPS3bY487CeNpJMZa",
  "key1": "kv1exQzubGESNwzcb1N2toHvKpXB73sZuypeeZpgpU9taU9UBx1rJ4geEPgBikwYkBZNZNQKcELuFHyDjux5hBX",
  "key2": "x1UtZyMbRde7JXJmAJ8Rn789tbuwU9H3Ro1LqhcmSrYmMouS5o2D5bvcjv1Xx2C9r2EzrfEdX2LRH8DacZ8HXNz",
  "key3": "3sVpJnGbXCaYFg125MMDZ5CjLHRSMPz1PXF6xaAMwStLb3ZC7vQamgwWaLJM2YwgDGnCzemyD3QfJsSPtMRw6Fj9",
  "key4": "WtzPDYUUyjRAVb9nyNqk2yRs7vhZKtbHsKnxvuqarFwbwTe3MoDGW25pbbADYBtHW5YVa9eBi2wBw3r7zKpMcZC",
  "key5": "5Ug3LRTYUbvrmuR6GfCLosvwuVwHb4TnXFULascAfuCWyQPjXSjDF9CUqsf9pfttCSdNXtR5aCmqpCH4jsH6i5JV",
  "key6": "C87nrRBRjVAd1F729V9vhRJB2LucdGsqj1mKjNTf4jKp1XsouVx87cmeuP9bHeLYShCZJuyVVNXNxaK6yi8xUfg",
  "key7": "2Jjdhie1H6tWAuZFmCNP9Au3wWms8Es3ZQnfAjJhotBY6P8kiQAEoFera7r1tZ4xvow1USBo959awtQZQr2bbtcZ",
  "key8": "5taCpY5foH7ZDAXk7biCtXRvFdnSversXdwB2Rid1Nj6stbwAh6aB2NVTCfcMWpMAbSsumHAQG8euTYZfR6ppc31",
  "key9": "bjynqqpj8CqydHTWFTpBeKanpThRnPN6LpWSX2dn3pHLu7evhv2PLoLoMxPJmor7GhSViFAvAb7qPtJiP4ytaNd",
  "key10": "5Hs4BhzV7XWWbu5cnaYrtjVrCs2fmkQgDaeZqTebD9742zhVnCESZd8bV41xrfoSZM4awuaz9xqCs8JUyZWSbnBG",
  "key11": "2mBNUbBKpgbhrRuLthVpbPXP9bF7Te2LbLB5fNYPp2o43t2mYtvYomvcr4iUcb9JjERhDV34Z485x5atMgkX87NC",
  "key12": "5xVPq4S25cJnw4ZdgCtpXgAQXHyeZrkFNKkkhNGfCt5qty2SitJem3GVxQrEnnDqTcXhpHh5uJ8Aso4CrRrGwiae",
  "key13": "57pcJ55KYTHt82c5SnWtB6jYqsEgu5XauMCyKXGdAkqDupnScqeB8mvErKH2WrHGdEnAptWXbLYTAoyBy5r1AU4Z",
  "key14": "GPvZBsBdUs1KzAHqfqDv3gmeakvgm1RtVBi8uUMM2WELrs2s2aPryzQGuyfNMeSoyDZGYzC8pKDJ9Vm5BKSBXW9",
  "key15": "5xJiWRqnLALRRXKs8sSwk9N5B3D2Ko5gWqPKbEYTeEBSBwWdjr3aYbCRgthjwmRkB98AoEw5ro1KDgZHdhndmgyk",
  "key16": "62mvjGVhxCQefgJavfnPafv6XEWc66YuwBaFjkgvNMSuYJq7DDy7qPYyG7jXR8WwcrJ8VZ1n4VFWmjm84qkwrbKa",
  "key17": "5P34FeJuzYAPB8soC4f9dFoHc519DtjcS83TH6XZtwquP1TdHRXGHCbEHwUfL5WBDxM7qudQ2vEubB6gkBoADQRQ",
  "key18": "4DdX8SEQ9RrMFFqJu8Va2hoaePjcx4EhmGuKY6JZrM6N1aiRTfotjsZGxWhJdgRfCEMPG4Jn5g45CGmMZ5XZNzgD",
  "key19": "5e9CQs8hzKBRweya9hWNAGyen3FPFDVSKpRnoDTVaVCKXqba3DhAR2ePNufM4PACXGSKWTivENkrVmC7xLz879sw",
  "key20": "n7DGKYdhB6xkoYRUnvpUy1BtmrBrt8RWr6WAnm4tDFufVCwUS91xTZS8USMhuZvYH8JKmvGx4BF63LkWMt2hhRF",
  "key21": "5qJS154jiENfLHHh7736r1ZKMSGmhVSzMZwQv4LVsWkabqQiH5jQqfXKhzMa8brKLa8K6f3nhBkkFiJL9dD9qc8n",
  "key22": "4jG8brTcnoLZCPMme2nk6Xf21dwsoED7s3zwLMxLB5vpNQFstcysYGTSGzfd7meH528AZXdUqfDGHzgMfKkkXfKw",
  "key23": "2YoYNxw1qM2trgKm4ZHJgx79jsapUFUfTQctL2aUQf9Aexnhs1dcUSy8r6ukvHSQfKwiZPevFkiYXx9ruhRhym4",
  "key24": "hgaF6rKXM2FyP8KTZEhzMGug8DAk2zE6XhBfhtR7DmHd6fvsY5rTdhWMew4Eug7ab424mn2MRVontMtQiCBr65Z",
  "key25": "39wgMivAA2DpM9rFvQTX1mBtahEEMtQDGvHwQLkJtmbk56MoNAuDrUriY3mUMzZEgPJPRWXXufttUYaQh9xncrGk",
  "key26": "2ZniaMbozELVgXPGWvQGUqCcc5YBVGn5ZdXRcppT8ihrWA242LTyxWzj4MQpfaDEv9Rpgc22xkVYgZ3yzFyxfwNJ",
  "key27": "53K6EXBSNMxyhCZ44ouvEtadepJaTa8UmTx6HrfK4Mq7z5thGsUon8pLvDtY5qyS8cdsLbmNsAuAJfXrgrcFMRoz",
  "key28": "4EiTG6YjVrw9a4tjwSVTFVy4HpsXsQuybbPxk8rba1Lj4F5EEyQMYVKZknr6Nx6hqewsKKF3wPFtHyugHXXoacqj",
  "key29": "2wQzYW4dgQErEDyw19H3tQjAY3H79iBFscLbtyA5sohjk5Dp9Lc4KCLiysTESKSdbrau3xEKC1CNNpFu1KuiZ5s4",
  "key30": "4apj5zpqC5Dk9XMegTcDYhRyiX5qpNhiLet3iLVNDjkXWdwb1pCefu2HD78eYFPnq6msmrmPQpNxp2AhufP8uRQF",
  "key31": "2HEbS211KwoGMc1PNyFrLqfJW55fb5wLUq8zksFnmQ2327T71UeTZfwpVrQVnZZR8jkWKRoBaPXxqHBMVv1tusVz"
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
