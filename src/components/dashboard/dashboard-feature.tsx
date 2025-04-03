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
    "4ukBwc8SwvQExHwFcb5DDqgXP2xrvfrBp1KtGyp9Yi6ZEzrhjEx9K16uv23MkyLKouHuLmV25BR4bnUH7P6nxFXg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2NXdE8mskDHa43GbLN98EKo6n67jw2oaqFdF3vmrCzkJzwCryVTGCyRDAZQR4RsYeqK71zcWeJv3JfBNVoh9AL6j",
  "key1": "2Vur3ADje5crPzBUUFFLe1NX9ASjR1xDbBdyfszY2Zhkmh9YbZ2DdREvbeNkXFM7QumRhGreUC944yaVNpDQHKTU",
  "key2": "66X6VCqHCBAFkKUNRf4Jmid9tc5MJsSKioz6iyp2LGDyJ9SU5V1UZUC2SALgsBR6mzsiBzJH4gT8V6wQFzP4FNHt",
  "key3": "44Dp68EAUmSy8cYCaHSXWzphMyRhW6RKo8Sr99VPQ29jcopi4S8mrZQ8g9Kru6UMY9eJxtfLNKMg5ihM4k76o2zq",
  "key4": "5ptrtZFasJmDuvAg8t3Nqwsby2b4XpjDBu2shyR1V4smmD5bNv7NnF3GWTmtSWKp7cs7YgXyat3AAFCWCPbpPjPY",
  "key5": "2h7a2ARPgCmp79f4FzjFcTnZSjXELBMWizR45A9c8uBULjCQPjnLHCjuSQBL8cy9w6FEFieTXYYK4R2B6RLan95n",
  "key6": "4UNVUUpSHRE45xgoHkKfc2VNFsYncGBMjt1LbeAQc694ytYMwQ75oiatK4wSJKWuUiCbuDTGawJR992RCDWPq4GK",
  "key7": "5iXKokoPKtyerkrLTwUD1TSsjkXF9aE5hvCUTnaJ4YCbZU1n6QC74DZ1KViviwySid11w14UKVqQWfsGsbSBNJgb",
  "key8": "3LYL2iRCyGLYkFBjjtDEwJu1LGGr2vEJNUxfyMyEmhuwkbzJ81L5sqdMPpuz781SNeJKyBGiXUFg24BbBku6pGak",
  "key9": "4ePfEXsSp3zr6rFtCx2B2ipPHK8sEhKp26o6eCTMetScYnZVLawsvD4JmkJNzrgCjDMW1dV1cAfHbGDvehHN1kxT",
  "key10": "5ZujvxFodVnbbTD2fVVsoLrGL7jnL7gJmF7dkySByrwh6MAGXENf8TrP3Y8jH2XohC28R9K4Uda4GGK53oM11Xun",
  "key11": "2hvuvETgQETt5f5Kws8yVWj7YpgyskDm3ASwVCExB4uZg2nCvKA3S3CJzQcFgbUaRXGTJfqV9EFhtD1z22Cv63aY",
  "key12": "4EuU5KmsuyfJRZynhMwgaupHE3L9d7WDn4KydirTfREhCi6y8G8eGFT1fCzDkvjuVqphkcJoWLTpRH6jrqvy5Rjk",
  "key13": "5kQmrfzC9TeJiKdQHsbFSPuDSmdM5pdubBs7B7ttyMN4NdF28NLDy6N98c3yBYEmdZDYV42JpnPJibj5DGab6nbq",
  "key14": "515c5PAd24JvXizexhDRFNX3QJpD6gruUiineRfziAdye7LwACU26xST8czBU9bwxCeJfQosovDAUSWoKqnssP1G",
  "key15": "2RdNaa4FyW3e8fwwMc9wx2H2sjoGc2g2zxpNKMgNsiQZCs1MF7b6LVJWsRqNpwxQM9HRhtTRM2Szcqg2JeZfFSKj",
  "key16": "3rvsiNn3nLWCad5WNSFsaXhcQGJ59rDKtcYzmj2rvHPZg23aWZPXNUGnLTqQCiuC7pfxcZfPntFxRXRVjn2VBuzj",
  "key17": "3MtqaXHTXaaTd8wuB2nHs5VA5iaeqCcDitHoxUEg6VJe489phULtGixh3Pk6HsL5bK2y5DvZoqf7WX2ZjBRw2pv3",
  "key18": "2UnzGxeC3bdkZUjNZSXoa5HJurQn9aTP7yTxMxFPxRZJ9NpYy64huUrN8a3UEqVxq4vGfZyq4PH1e8jSwqxoucqz",
  "key19": "5LSfgezb3p4inPYvUqmjHgHNc7nsge4R2TsdxbNQKLsZbAUoDJXytegwjUrdrmpr7tu5JGEoTdkYE2tC2HauGnuQ",
  "key20": "2wmiirY3EnFkLopQJTpPkbHkBUWrjhziwsyQiTGVL5RgPbE6UtC2T5hSpsLm1MQ5hzRa9EXbNYAsXmFxPQoruuox",
  "key21": "cxNnQxdCJLojpxxqQTBJssbDRqFerK6dRpmW2VcCq14Xbf5QM2dfGFyXCtsPNSeZsrHPc7NGh3Kv2MVwA5Nrssu",
  "key22": "36zbNNi1DCeuiFQ9hfd2vKTieerGsp3PMpQZGgvbRrf6kunVqNmABsabcvw8aY279e7yMWnWCpvG7ABPGbsmzJUm",
  "key23": "4MXi7uerXeeqGYiFh81DN7DovwADP6mW3bnMSM8Fw5461LVRZEKVSjaj2MRZUAdEBmaLFo7fLiBmUsW4JzMhqEJt",
  "key24": "3W8Hxg3mJh7s476Np8v7LmDg9zNeDrDEtee87VMEnmaVNhetvEdybDfLCoHZbfhYyE6QzwDrF5iTRmwyukmu9x91",
  "key25": "3hr73nw9nKVTFdfbB8LzF8itcEL3PMtdu15uhPoRJJX1AhN1d6a8Htbdc2gJYR4kbr1Z23DGP7QF4kYpHYinNHym",
  "key26": "jiF8wCev7U2VTmw233nrZEWPgzNiXD9XZ6xUw44qFs8PkAd4oDff1UgE16Kb8HGWHBETkn2QDnfwjjEJeeMCKQS",
  "key27": "4ppckVu9xstiHBj6WT96Rcc1xNyek2jH3uTh7nyFaEMg5RidSE2h5amuGGa6VUnBDJ6oMtndyANFEr1KjhnmB1gk",
  "key28": "3JT8Npj8vMgY2BEsUZ82ufrF7iQD3o5fp6YTav9KmEzNnnAziAXt5ekeRraENAdCbFLWc9TYCRJgxmrJiJ9P76TP",
  "key29": "y9NgzAokcVeiMNV3XTL6LGMv3N6Xj44JwrDBVbhyaBKRyDT2Girwm9tVmoEKYfwnLG9oaJ326uLkRG64vFXgvZK",
  "key30": "ygWBqzrW8dkoLWYrhASD2jw9vv8YLkB47Qwnc92yxKeVjkPja8YReamvSvpLYdp5QYnp44iXXSkEDdkmWVYkRyf",
  "key31": "mqRWVB1S2r9ghC3eZ2XHB3qci73VAiqFmtkJnjMuvfvoCCzLgMKgB4aAGd1aHymr6cfnpgvHR7CajdknkzX3bCb",
  "key32": "2dmaK4N4E4jDhFLRUwDXPyaiSgfG73Brj331SjYc34RJ9f1bMBmfgj6kJRmUZ2Mn2A2xAmZi8MhFCw9qXdDsjUvT",
  "key33": "isZY5XaC2GMhJWDPZ9eoMTqvVw24D5pY4Na9ctpDre2HW76RANxjosKJr6ak9938dJiEvCGWQJ7oGrm2G82YJcK",
  "key34": "2YLBzrihgE34tG5wcxwQjH7fJdjwmxoSNoahsNXixMU6WSzjXCyby6WSAjMswkq8DheR5EoA5HsZLFXXrTVMrLvT",
  "key35": "2wyGbHcHxQKMFNzGZBeoFTZWyx4PKRqcRdb8HeivXFrCw4rULcM3RFy8YZfGfJxncvzAnMvLPuQQHsM4R69Atpix",
  "key36": "24q2KfCCAT3uMh6LkFnJQRvzzBRoucJo4SRerH1KfPowcPXAQey1dhFjvsKbjAHgZL3MjeusgM57tK2Z8DGvkALx",
  "key37": "5qU9pGWxwSL9wwD3qEMPoTNYGsdFwjpM7hZB4BKuQoNiRrs5kZxcH6i8qnHpYjKRx3FbQSND5eBie13iu2jjRhHA",
  "key38": "4aorE2HFs5L7twnmuXJubjjgCEXcagZfcHrnyzebSLpXtXx1qj54fPQE96UAEZr45tpB7epxaqT3XtQXVeWGmRFg",
  "key39": "4ZwYBP2DoqDZr8SAzDT5LC3vah6mNamF3Sz97zxjhktvu1QEV2gNTzEnNRVDzm5KxTRUXRyK5NzP248qs4hA89sX",
  "key40": "4nZrimzzsm5pSNtqmtHeVTcihi33BSpo6qtUY7TyjKgXFvkDM9Qh61rwNjSD9JVagkMvj1ibfyZAymm9jYjjd2dR",
  "key41": "5ACyR2tuRwjUtyuwcfrsjRaeVryfHNijfQ22LVAeFfAofi4fufRfbcALVvYe5rLYSG6eEiRE5zBp32ysmhKZ3ERZ",
  "key42": "2wS5ikqXxrvG212Ae8SiGXMDNcFHBkCWTK4mPJnWR5enM3gsohC3ZsqdFn5YcNNj5u1tFt17mv1pmADFxM3A29o1"
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
