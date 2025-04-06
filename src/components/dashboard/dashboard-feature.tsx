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
    "yP2rFdqQJt8mMoJLo3EhqWER8HwkVKhBbSZW5uGfi8TLNFon1kFRXfhukr7gTR3LVpk4nM46hd2cgzSHJzsWMPV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5WucxuFg7UCN1FbmQd9grbfzh7jWMxNSR5h2Vthz5bxF9VYn6e53qevfcr2hWhqH2MERZFKzn8w2Bm2epGc5wC5M",
  "key1": "poGGJuNLWbXPeMGffVsJ2PHc2amPSACsUdftX54nBf9Hhd142HX37GCkDhwdPACsKJWUSW2X7dDnE88DYsicnsZ",
  "key2": "kj1E2MfjUUaNMeCGmqC74VjDDozZ6Sma49M3JktUXiHK8taofpmoxMVDSR7ikfutR9RWbo8aJ692iARkfB1AGCS",
  "key3": "3QvEoZ3cb2Gj6Ptcp7sva14ZSCu1CCJDVPVks2nBjANjNYsZ6UXS37GUYx7w5KvuXdMk8Y5vH77ZHG5xnwCk7MMZ",
  "key4": "K1W4v2CBgpDPuzRmxUUHc52HYgcDqXNEh3gEAaCx6mjnU2joW6zGdDetnabkmv5BP45d2bg2mMJfps8Qq8mc5iw",
  "key5": "5qf1X4jtCB45nJYUTeRq4dWX9Ns1uQJGjK9Loo18muK6rw9c9uPXugUcpSbLmv8njc6N7KhTzvnUvQ2Pooip2kPC",
  "key6": "4x8swmVnvJqAe4gtim5ty9yFxhhEddFyyjiohtu5A9SkWsVDBVTc4HEr1oiig1HEp2TBiBV3eHp2fuS95qMLrKmJ",
  "key7": "4QmVTnrwtbCR4wWgEsL9HqSBGgnZNYCoEwK8yU8K7ksCJbo7yvBHtEJa8fhme1zT6tZwfj1kEGFhGuKZ6SUiQBkX",
  "key8": "49Jvjdnj8Qcj8mBxyN9aHP3edQzNaC9GozNcr8Ew7ekaryJbi7mMwevU9npcrrFvZPraDcSMQ6FVxhPDxptsY3fm",
  "key9": "2wb2BmgDmzqGDEDqT6EbG2LF8mY8Tpuow869hvLnTgUQm1QYqiyh8PKfZ1yGWPj77pr6TvdLmCZgoqMroXUdFCW7",
  "key10": "5brm6hJjEndgV3sfDGsqVavNsEo7mYacRJSacbWoCAPbXa3hR9poxRkMSxYqFqz4zprx1C7meRC6oATCQF4rxqU7",
  "key11": "5HXSyTba8zeCxycorpNgu2KsS92obDv2TKNrcGpPgTAkNbam5N2FCZvGk9m5PtLP3H2gnQAHdW1bkkAsHQdAhgi3",
  "key12": "qB2t58FbE4DsgLgoGbQrxNCLLBCvKyt5D5tHEaHqaktFGi4iiuGXsi26GE3oqpC6qXLdgxcr8uzprfA6W9w3Egj",
  "key13": "5JMm9k5BkomJMtUZhKuTKqpX8fYxhEin8HpbqUoxFqWfsEudqyR1g9uKgtxdb6ZshmsLKhcykJJy9byL7nLRq7SU",
  "key14": "N1VdfEmAaftP6KPyUATuE5uq3pQ87pEB9mx8zN9YwHwX8ejoEoTKaWqJWq68jNPucp99ZDEZMB6aVPkqLK3gaZR",
  "key15": "KMfnA5EQnGDrVeEfQwMix2Udh4vu1UrGqQge9aiU1Kf22r6sZXM3W65mHtQtN74H2VWpLMgLdfg4xM8qiUXFJJ8",
  "key16": "5Ftngf9crYuEK3zQ76Ageakiovu9zYW3h1WMNBeYaoaXSHv8R2ck3EptyKn64cd3mUQmLvtYG2C33VrQdVqFWADL",
  "key17": "3QjyZa7oz5sL1ivpSLmGyF14ug9EPjMsHec7dRdZkLuAZbDhRuGSihfWcQr7rZMGhFD1Ubjkp4usND3FyTbob7Dz",
  "key18": "38KT5uqbSbdNaRMztHZumqxoyWFKQEzCgKCLRqj2dc9ymPZA9ARAPKAix1x4USBSuqPiyUWvxzGUhefr3Ec7fUzh",
  "key19": "v9A432hXQqP6BWSgEkGwVCz2E2m8qBJh1VqBSAwuDAVcWnV6nC4bWuHfPxv5Ry6SDCZow92c768h9wr4d3NXtcF",
  "key20": "3oG3zspFNm2TcktqNj6gWBYjViSLWEhrNmENpJ5W2wgyLPXqcb1kuqm2Fmx2Q3NTMcpP7FCa8FuJFhDDBofVbgyF",
  "key21": "8dKuVC3eSB9YxsE2rviAGqY2CJ2oJjmwXVmPi57LQ1V9nCRCXfzUp92MEPStfpad9iHDsHD57Pfxsb6f6riYTgi",
  "key22": "28NLJVu16qvJVgQhWZXcMoNNVcm3qdHMZ9ujHuqs3ttkuTRwhMWFeNPkg9qpo8z9PProgspm6f83wFx5PWJPhADR",
  "key23": "2DM1ZLJ9R3CJ3xTRNx5YXyqBuAQazumJQ22Sp8Zhcufszz9g3bmffvvApm5vCuo9RM7x7EUJ2Bgshu197ciZwY4r",
  "key24": "4hFNA3crc3j5QqZnYjqTcfFu5tW4sCWWnr4ovTCsqNt9wMihyBUL61xbJhFPWSJmYtp5qY3kC428W1b9jx64bbZR",
  "key25": "3cbYGRHSisWhA4ANgmVkCeBJhUaRSxMKNS8qSBMVCpdQTHyFnDtZWFBczJQNn9wnkvrQpkwsTHAH6D7KbwZEvFwj",
  "key26": "21zf17gc2DsunZQAW3tKs3DMtCGKZphdaXd1jhrwDq2xt6WHzAbjGp4X7ASZbXesU2pfPt7w9hXM1zXfh4iTFXGo",
  "key27": "4Tsqs45gHWB7FEc3WLNF5xiyqWns6Mb1h1iRVS4GLcjsvvVRLW5mDedTaYKaAaYTnxEV7ynPQorETEmjisfit79S",
  "key28": "3zkmcKELAvGBKKDcNHyUwEgBgRBXELWAG9UwZuQGzHkx2MYpyNMhcrTYfVB36WwTa41HWApiNhTer43BfVrHaFXc",
  "key29": "2hm4P6KdoFtZ2n7ef3gWzbL4rYDxNQsGxdAZ7BMxHfXBz5LnVJqqKpuCH5wTVLNw5hqQBEGzpUB8fWM9Xgv9D7ko",
  "key30": "4s1Apcj5CtefX5BQPEv8yxjA5rZN5E4PLTgQ4yiXTaxrwix46Es88MvLbzuo1vFvrJ6tnrZi7LCE2W5pcBwt3U6T",
  "key31": "2TjtYs1BUYa5iuCUMFq5Z7QTANc1QuZYsNduuhKbEGwdBLDVm3XwxHT3Vfn5DFG7Kr6fE3qaWAag3tzp8wMQZaV8",
  "key32": "48tSX4xij4iws9ZrZ8FY9Zxvv9uSnQ6v5RXfeCi45wc5xvP3DRpyLQ9gY47qSkwzAx6a3wRLYd9BxZAb4Tm1yiXh",
  "key33": "4ZnWwTTsxBdwFJCJF7frapqt255srPNiw43B2w4b3KQCtq4kXSHajTN3CC4B8HXHbLiGe4nde3iagr3pKf3t68mA"
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
