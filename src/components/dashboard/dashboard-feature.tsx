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
    "5jiFudBThEadaUnvG6S4H4mWdR11CBRERL8X7wTK4Xv3XCa49NwasunMyG7dPLAmvBB4cwxyGEaSfDyV1VKDjEUs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Yq4bjgkhBJBWGA2spUuEe6k4gwtop84LzmaFWzeK87x8rMwi5R15A8i6a12bvK3s43kYaE8dunpCrqtPYMvLmtx",
  "key1": "2EWgfwKsX7XQ1GqpRNV1gdSA5ExUi6rbxfoyx8VrRWWKx4SC97cutzxPCoCuDEZxTDCPCWwuchnGftSjtkKJVVCA",
  "key2": "4FcvxAHk6yq2C5RTFpuJi6mcWaGqZfVQNhPaCL5Lg5syguEry3Y4mhbK2WXQqw92HXYMwuaUY7jUz7tVUF8GqhQk",
  "key3": "2aVZQkMJTeTquzQRWZW7VAD4NJDFnovq5DPKMe94EgzwJiUBiqpGTpQemQbAWuzmJaE7qvtbXk3XZcMwSkJWEnem",
  "key4": "46soPTRpB7wiZJ3c7pXWbjZczqgg4DmnNftdeNs8ZZ9JhRh2EDfQ1aY6qkBgdEBUBZVyF3UU12pK76JJvRjUK7rd",
  "key5": "2k9DwVKReJk1sGVosevTSAUXne8HFgGuXiK1vfXNEAZuNSZdfV2Dehdwg31EPPsPtbbMQspcZxVUYuf1iqrnCcUG",
  "key6": "TDCkTFMTyEXHY1K6JHVTrFDw9vhQYTkfjrGN8cxaCcfDQi9C3quewMGhqVsS8f6y2XW4K5TdTgguAWEkqUr83Mv",
  "key7": "VghjejXYAQgThwYfM83stkhhxeXBaCKRkU9fTFzBLa1yp8yts8XbEX199cmQMNHLdUMf9D1svLou1ukNRFa5iEB",
  "key8": "4QhML7idEhYiiYTxLCFmZgViCSbjDE7frw1994BwS5KDkiBHbFxPhF338T6F2x89S13WAuU6PpU5ftab8ACfrGHh",
  "key9": "3dXbwEKCCjHEQQL7pTpmfUwVmXaGoWAMPyAi1wW7AvLKpf9mPqD6qr5tqbapXtdnJnV64agV7Nqn3uKXz89qPCMd",
  "key10": "2xDfkHR98QGRh2sEQ42hkbQLbVaZ4WVNHHBd9tqjKDHXei25cnmpBMuaHeUW4NKSB94k2nuTioeJHqiGfQs71JYo",
  "key11": "sfBCiMLmJ4GcvkiKRGG5gDGYCHSvSceL9GSpWT65h7kGMxCZR4xQGi5sVQU688krAQqF7UgxNRYB2edQjVX7vHT",
  "key12": "3aSVDYpcRsbm6K1kfTPd6ZZ84mfnxpDFGzAAcCARKYd927Rc8K2MbHx3i2tAfH5sBMcLX1v51FHUZXT9gpoxQ1y9",
  "key13": "25mPz8RRBTYmgm2w4yNNSXqe7X5YgxvUGH9xg3YDCC8QaQQ8pGodkyS2DxmgWmVRtmm4sL4r5PfK9sVAyMWvyH2t",
  "key14": "4nZFxv7B9xkPUxrWa7dFmhZBMoi8qvHwr6hF9qjKj6XZFynMFP1S9Mjo8F4UiTCuFYkqGnZ9hTqYqoeSwcHFcHtd",
  "key15": "y3zB3ePbUtKrTFkRCt3uu3CuwHvrnC4KEfTJi53wZ6Qa9t183vWxuis72m8Ftx3oKJ5XzpfRsoj4HBZgiNpZEso",
  "key16": "xzdmrqynuTgvzsNWgLpZPGyAJ2eXsCgb6jEqH1otRguahHhCeVB3egkhHDTBoKbn6WPbNMKT84dTG6vASbNmnYC",
  "key17": "2CzNFQzoaR3fctBTf6ptH99dGa7ghicuFhdrpns5Fe6yD3kvBpaC8nkFZ7F3DJMDHHgQUa77s9o9Rxey9VBTzFUh",
  "key18": "5Kcm5hcZrkfABQ7Ws4NP6uPULr96F2rNpxwRphGijLmfZqLfK18Zs7oGPjoAhcMGCAySsKaX4cHZaZdooydUfT9T",
  "key19": "B42nmss1xWtu7MSQkvYDL7RKvDBJMCjoYRyQrBkK1CqrARRJZgGPE9jcxmNx5y21StSb8sCxSEkWPCe7dip8YbH",
  "key20": "5vXMgovy1CJqp5DjujxamabQGkT1nkqiHQ654vQ7b55Lk2J76VcXjKmXx9iJ7VxppbdVeVgxAMDbTMLQbXvQ3zVz",
  "key21": "2j3CsYmkuj8z62YCk869XQkSm1o2RRqtTYLXCqM5kreULhz5ZGBmhy71xRzucqLWSVtb7ioC4XtrUjq9D84rRA1M",
  "key22": "5p76N1PAtXqVe5Du45WAq8h2sU46nHanb73oU5ZD8dhjWNubCwAnjWCPsJa3ET9cjgCuDD6okq327wFLNmBr27w",
  "key23": "6iqPRQx7mmmAwE65tj4QEgNsakkYXAcnxVmYwbw8HWyzCoMNwMnpsM3FELbgHVqSLDnyUiTvUawkGmP48MKdck5",
  "key24": "5RLano2dJQKTfHea7HRhqCipCsKiCNoLyf95CyG38byoEJXw5zPkbkN5S4oah1WJ1Rke8zm7Q2ZUXHJfVfR5kFLc",
  "key25": "5wYzy7jyn5CZF3SFFLbtJk4pt2wZLpwWYNKhKNMfhcp9jzaQ1xLzhKVmpCWYcKFd8uharzq4ysf76hd25xu9DpYA",
  "key26": "4sFJUXk2yppEk3FJfXDMkx5R3YazwjkRdFCtVuUGePWDCwJTPLeBgGF1Mb7HJTSTWAKcq7hhYTACe2PsyG4LNvKg",
  "key27": "52HVnvzvjVtBWbsRJ9HfgRDMzuRcXM4cefHxs3Ey9aRK3z2xBuve6wEEsch9VQMTPpfxxJYYXSHhTd6Kh2pxFm7A",
  "key28": "3fkspLgibAyYN5WoAu65CQLfhsHRTHbUQEBSoaoYrWyebFiAZaPZhRqczT8TH6cEYEhERmhh6iGVA9fwUSuUW5MW",
  "key29": "4PikUforQzfp5HwwGtSj1UwEXiXK7Tcs5nGYF42zwGMGHy1zBtxdUqu9suQ5ScbtMS83u3sYM4Jp2r23XnRsF8Dw",
  "key30": "6fKA8UZte2iCov1NiN2Vqg3XvzDHFQhU3pVPq2MacowsUyx5V8RYa1TtgG6RFHfwjHGqZ1dbEVemoj6bxDsyRqX",
  "key31": "3zwpM8U2xFknacgHiBhQxRutSNr71QXS5ychPE71oQShmiz5Dbx7jZDRKLhWdLzsrADN9AWgE2nbhnAffhthxi2f",
  "key32": "4sE517z1RW2vt9FbTbrfDvoXkoznP9kh5ejkseJgz1fheMoTNBVxZhZD6k3GRvsKxvsrN3hZB3JubESGGaJvKZMY",
  "key33": "3DSUofjFXqyQ1GtMB8QGdyaPvfianu5BoemHYMkoyfT38CQTSpYG7bTJchbnwtqe6RHNtsUmrMU6HA3Aw22FnytY",
  "key34": "V9YEavHex3ouX8kHQ6wJFZByiLj4UEbq6SQ6pbwwdstp1N43BgQ8Daiq1sQ3bwRmQFCrj4b92S1i7jadqd6BnCW",
  "key35": "3iE4v5rCVJLmPNGotp8998xQWFntovgSqgF4qQ9MjFZrLr7yGG9HeGnDMi3oKnRaycecP4b6yawmXP6GsE7QZCQm",
  "key36": "26NmtAdSXSXCgTArXPnXbxgsAWqrJzXDUgJkyCFu1eF1QWw9e37tHLhsgM79ZVkor61FZ9hgXuvjX8oSGKSLSP2A",
  "key37": "4sLBRamgApzVzFFPCCsPVDTz43EAH9ndeFyRNpZogpPTXGxu375Evv7nJRH8XNiEywZv7KkN6PNa6o4HQ7waAEv5",
  "key38": "5s6tQJnfgUxKjpxToDSTDWLMD7RGH96X4f1QbJC9mfFMhDE8c9KASE4Rf3fYMZDojXZZEsUhodRb8dhJi32DGu4U",
  "key39": "4CSZxSoUdGmTENMaQvPZBRGbcm8M4v36JWrum2YfvbzhE1N5B63XLKvvyvYmCRzHkahTPUSJzt3Nh9aKFibncwA5",
  "key40": "5dZ8UdP8ZczL3hHRAK2v9xFxnTFiEiVJUgGojMNicJN9bFrmPT325jkDBKzpesLR1bAWeG9WBt7RLmvhgWATeJMd",
  "key41": "57VjFDe8Qz1m1S5pCpdPVoXZVDjYR5jYUTrrNWBj3VGL6TbdBn45FuKEGWMd3PmRyqMoSy14sNH3QYgCq1cNCFZP",
  "key42": "4WDgpk9UDfRoYCioA4vNUUdcxPrU8JDDbtTABhEYBTPd8q2ENfsENWCM1jXnQUnrRMUVSgF1ryF1M9e5AdyKDVtf",
  "key43": "hjB5u1QRzVCkG7qVri72tqZ2gH91R1waCk6YEPAxc4VcD2chVPmb3qJmxKnFzKfVJ1KMq8PLvVVfRzEuuhe9aNF"
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
