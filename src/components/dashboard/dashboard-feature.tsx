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
    "4frvNWmFBcenk3QuCvDZGKriiiax21JMdcK5BWCXggCnot2QyPfica5nghUizbgpQGAbJMFQ9sqk3iGQksrfAaKj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "495xmZ6M3csL7DDxJX3pUcTfRz3xPCvNdb7J4WuLsvRGyRNYhxTAbd9PDCP4QBurzr1MiXD7qcuQJVtffRerHQQi",
  "key1": "4HdEyxEU1DEzqHJjpUFHW1X3NPqt3qVYYEMEhv4yFu9SdftNwcmrRn97yqVXMaUY77AVRMrCwes42Q1XCxvZMsw5",
  "key2": "5cRZHHnYrqVqv7mU1F5gZhQm1SjJV4M2MYiZNETZev3PVSCCe2CubzRTrUweYepZJayi4eEv1EJz1xNnhKBvHY3p",
  "key3": "58Ja5mGRQdVkC1EK4Kt8Tph2iFCr8THHrWa1fw2UuF8ipH7XkCk7rBeTtkTXF5NmTSwAe8TaWn9kVM3LkGfpYKcE",
  "key4": "j3PWRVtqWJFHeh8Eitf72b9u35tcSZ6Xu6d5JSTL6WYFNcoNYUx4473bNVPSXDZWaKHKQSLF3XwyxSSEq52X5Ku",
  "key5": "5e5ae63y57bkBiNZaechm9Ux4MfccBwfUjyFy5GbvpeMboCE2jtxYsPbey87Hx9pMkWb5knckfymHYuUdyhLzjoo",
  "key6": "3dQhKx7e8Z8YhYpnVVhyFmTbVCkPcyXwWQdipxuWCE5nJm1nEpAT2CYR3Ytjynh8c3DaHHNLAsd53LHSMx6bXNYH",
  "key7": "eAUBFCpNczMh9Fqbx82wsrbF54sMehR5WntFqWnQ9xbGJFTJPGHNwDs2FW4LdUhyck5VQvR1ina3415rznCn73W",
  "key8": "4kFJATax31ycfgLk2nyhjPGsvwGuKB4gFzUeTCRpYuALHpJTKUAmVPAvtM4nZmiZc961GPpac8xJLkVQtruddWPV",
  "key9": "4mvadKwLwEwj1ZudU2sXuFCUbjS3SiRQGgWPNqSZoLEzdQWtDa4x2iBiXB9MQqWUfqGYMoyXnCg5g7gDtmC52GYV",
  "key10": "5KS1b6dDRTcFBHUyjWJwBFQ5PrGdzwr1hLb3hxX7NRQLz91ydwrUwUDYMZDuvsbj1L5AL7PPovaSFS5wBVJuZ8Mx",
  "key11": "5oCGCr3aDueRQDzHHsBB6Vgz3XNkLEAKLHfVwmJjzfuM7a9zyJRz1jHqVRW1ipj5AUHTTXCvWjpFqtK2mqLSiuke",
  "key12": "4VyMYe8odmwdUSihrr6fEafq3LC4RAShX9jNhYQxKoZHrhPsfzTpJZVqZEqZAufpov5XqVRnkg2z6nr9akrwq6cW",
  "key13": "291Gvm5phwnbs2swKYkDo6nY4MagCeJoj9Mtz8Lyceb7Na9a2J1xTpYynwmduR95awUEYoeKfq6WsKf2MEYC6TQS",
  "key14": "24oQqrbg21JHXC8vKs7ErSTpUu9uRuS9Y9Bf6874z42tsssh2RaaB1DoQbwZZcZDbMMtmpqEmJ3WKyEm1aWhNWUE",
  "key15": "5PMFaCF6to85hFfTeeHubCYqJ4YdNGooMyRbV8YMXgqx7PNs2KM1Ums8WA9vQqEcYJdf1G4bBbTVKEkunEUfkouh",
  "key16": "3irpCadoQc7LmcTAkEg8K87GorqxCmYHLX4tAuw6aE7fbUp5hKtG33rkieDJrCiYfuyasPoAKXokUaaFSe6kNC2N",
  "key17": "5kRHjDuMiGsp7Z57vAPX3KZfhh5MbKqgmYPP86FpHKYDSM2QfrTiHEjYpn1wSYJphjoKnLAMJmGoQaiWm1M4JNiV",
  "key18": "5qV9EddBi6CM5hbgL5TU5up1uTVGuGdr2EXiYSScGohRfx1s8Z88FogR2JMikZKDQrK1zJRq5SHowqkSvpaa7CUH",
  "key19": "3DcXNN3jmKpx9GVaNYvRZQnUuZGEmXcQ7AdS6QWCc4CXaMEW5JCSat1vATPJXzjPFnmRnwkXVePqXQSWhLueAuE2",
  "key20": "4zhW4o4My2SonBMDNkpZDHFwm1HoUqQQPZdbTEPiFdFb6zt69C7L5CbtKnk5NofbSpb5DuARDcdwvDZWix4U5w7C",
  "key21": "3YWiE8tSaSZzPw8h1ey4FQSKmCBvFuG7rsRBnfzjKaB36FzN4J1zStZ3jcwHJ3kwmkAxoWFTso5rgCP3ci56RicG",
  "key22": "4h3HhLfgknzdYMnCpWARSHRZWB9y2gUTEupSbUQkEs6ALQsnuaogv5mwaMfJyqEJjWp28v6p1KXSTuGcHDq2nrgZ",
  "key23": "2pRdBZnsAFfwrRdVManDppDSgdfmFGoQRjCAYaregnVFyeuSiLEgFkfWi9dZtUGPbtsofeU5D7zSpgTJgxYoHQHt",
  "key24": "4ksmhJhAHoF3B69UyuFhgknPe4uf7DdAfF3v3HcBXhmrEGdDq8Wdvkq6hPt6jvabmNLgej7dVb1LN6tJDAJnHA7p",
  "key25": "3Ctve134dkuj7bayZRcx67uhbJJRo4Vuta1wVan7XZV3jTyhdyduNCEMoWfW6edTR7BKt5bKHEVXrYU1KqKAfjox",
  "key26": "4utZjC7C46UwSCSNncZngifJAbbVk9F6Sq4RFZwkAZ4yCaKrbNzPs6RY1zWAEK9KtWcAuituK7Uynz2Rcg7GyMLM",
  "key27": "5EcofaT84XRZ2yzAgYdTs4v4hBPeGS1GAn4CFULD6cTiZZnzDsfVBmxyxFGsYBKYfZvPuSRzfc6cAAefETpVwUC7",
  "key28": "2ZpNLyX9ZoPZD9P3PcyZjVKQvVQMnsbRagfDNixmbXWRuPe5TBGAhRdrTmRgi737xX3PEvuUZSiNgVWqy66q7u3f",
  "key29": "3NGXqMpBb9sJ3dt2qj8QhyYJTNhC7awbEgt1faWdPFUY9XdfA5EBiRvVLdRmHReKjuAZuUBYAkSF6HCFSABJGWoZ",
  "key30": "2irpJnK6dqiAqjgFgbLDxDGhZ67QFZhDyiSVay7phD4zkNQVayeGjA4KCPaLmG6igxGoLjLyZxtz2RgsKS3az7oB",
  "key31": "2Gt6jHvT54MDmjbVPNvqQpknDktosyeC92ThcB4ajwX73YthUYncJBYVfn7HgBwYCXiMFGnWhuoHrrG41EqXMNJp",
  "key32": "2pE3n7sQ7Ev1NSCr9H3NgkDso4LfJeWtMmU77jXLczF3sGRXEEJSSz9JnmMQCCZTpZt5DnkbAAkbfS1UnAasX6Fe",
  "key33": "2BGzhFsYczKoeh2Xnn8cjyjFAkCCtHVxRhH4U2g9SD3m7cFUhTcrowHTtYmmve9A8LEdf7Hw8hvdgDcRairbVB2g",
  "key34": "3obJmPCCzcv6YDCtwF2XhfHAtEfxr9GJ3aRpRXaAkUFDqbnLgGjAjtFfmGLGcGuhmZnoJWTDMA765dHS4hXcjFmB",
  "key35": "5uUh8ZiLohEbYNbUZPgALcMvkPQgJCzc8zEU51wZXViT3yYNH9yjoX24Z2SMsiqCLXrW67tEQALG1XcUhi8BrBMP"
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
