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
    "2kKXQB91URY3RRtitQ5CSmZ39pEqCrspWVXmmjBBf2P8UVoAvoXMApZtdwwGMyTVRDAXDCbsThhZD9QMERZaXwiY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5NmzfkK4zVthZVPDvwFhiTC345QNvhgG5QTMpZx4KNnDRqnJpeJ2o3EqNAhFakM2wab56H9JYkfregWBvoAB6tma",
  "key1": "3GwxQKT39nHWHDy6CXGNVXTyB7UDLWL8zouz1Y8KYmBAQsMFnTmRKZHYfh3zpsppepPcYJRwoKFiDXex8xprzjw8",
  "key2": "5XEdnGtWXZjE23ubPh5XXBW1gwapveC6omYcx5VYEuEjfEfDJmFnbdMeubYErQSX1xdBNvMBVdL5gRvdkPfr4t9R",
  "key3": "3nXsvj9kY9REFFiesKDAun68gHmeKss8G7NAF1tQUzLLrT1MTgvuc7c4ar8QEAdCYRtLsqX7SbjTk2fi7svdi61X",
  "key4": "4kAazbBxQf5YL85ar4AMZtptJWjNNX1Z4iRzXsH4pnd5eCsBn27HQc7zK3AEHJgAsuzkkaZSMVpWjF2Kqem8RJH3",
  "key5": "3bFfr32ZTTz6NL7N3wmHaJTKBoC7hiPZDcbUhigHb48ScrM49puxSyWgpQ1xbGXLDbB3uAeYGZsw53FRFeHGpyjt",
  "key6": "31AwGtQFbE7D8UuHwPkBGsd7Lk8irgtAqoCQoUaSr5hAUjen299A1dHhAGnj2Dap2xmRMANyfZyct5aUDL8VGb18",
  "key7": "3GupTfqeuBiJVbAg7ZFEYZfXsw5ZpXkxDLdSRM6bsE5PBK4pbMb57pMEWSvAnB6mqJKe4y1dET2kCogYDhC98FB6",
  "key8": "sQDtvqeaaFsGV5b9KR7KugVwQ7bpSY3tb52RcFQNjTTU3f91mXTEnwqaptAKLvFQveJMiEC4qdSAEy681MsD21f",
  "key9": "4WHxh3wUrboo4fP8NgxgVLGTfhdMRKrCaRT6nWUsDaTrn6bNNa2Mwxs5Re1tZKsMFy3A5xdqdxv9GtxLRgXY5odz",
  "key10": "55izqn7ARJqtxJbdEXWW8HUKMUk4hHuFpdnAo8sEZao8HJckDGYzcmW35SNV2N9T9L27sP7S2yVKZ4AMzUsV57if",
  "key11": "65JFgoYwqwUfMEW4742yzDFYob9izQBp3bkCgVrUQbkk2Ai5YAmg2XVf2sCAcZgft53mpTFMPbMzWhVcPLFTRaQ1",
  "key12": "NVFppZoggRxXZRjwLMjPEgTMZz9XpT3zxqUoQaU5hddD2Vo9riWPggchDn7VCMdCsGaFGPV566b73AiX52cvfqj",
  "key13": "3dPkJaemsJP53EDLLnt6SEBFvytn6nhbzozqXEXsRudko1hxaMwGk2FnpYjhW9JidHsuy9SZHW4yct5qacRvfDFT",
  "key14": "38fMZvkrCrXnvFRfEPWW4EEDNfCo1ziPo9EApKa1uejuiuEwvcUjMDUzx5jwPY9kG3AMt8NwcStY1eucyq1tnWXs",
  "key15": "4VtHnrzoNTPs76wDMJ5kfr3KrHXEnTpmbrxQGh2JaozupY9eLaoS7wRKB76Aztka9q2xZVkjeDjpCnvSWPxdre76",
  "key16": "5VPk9sZNfzUnmG4WpLWAERZfWa2wqZW7c1rwbT1CozvYDa8GQco7mRhcPVcEmrkVcg5HXsJusWYhvKY6RogrMm18",
  "key17": "4omjR1tdq93YTNTkkcMgcZ5SjDvdxcUpREJZkqK65wRGkCvAeFHEMeXUkGNBQsKBicaSFWMvV9rQVrHAzGaNtmxz",
  "key18": "5Ua2KeTEEQ24xpySD8nodSASgueEvFQcHRSk5m8gCdv2ywA6rXKSSoB72CuffwV5iheYrNmViXBSzRc3XPGNWgQ9",
  "key19": "5MXMeP853ghXqQ1dm4KNMktry29z7SnPKwUKbH3VqLjmZ77toCThARgf2ohFJ9dxcYGbaMr9NTMBSFjFamfZXpgX",
  "key20": "63xs1q1PcNg3T4MJJTyWQYops8a8RJLDhGkukL961jbWscRu4rz1BHdCxxho3xPuyckHHdG7C5EcDg4ny8BFJGzo",
  "key21": "2zXb5oo6PKwgoyvhbLQsYV31XDmsYzf9Dm6Doo46PK51HB55VRysisQAvCmxeuzmGPDrWa5aDT6uQ7N2uREpgG8F",
  "key22": "52L9JHmuvkBHm6eJ3YUtT7ajBZzA2xcYwRhXtRg7XrM42jaeNKHSus1exMcYieNAdDHW6haPuZLCrfotifVYA3dg",
  "key23": "E7xS9hnr1reZPYVr77tdn4FUPeucvHjzsFuacESZXYtQFbB2DzH3fWRjqpEaKtgkXgVxxXVeQCQC31h464yQsfB",
  "key24": "5ewq7EjMSoQgwDF9R8EnNSQH57unuf9vDXXafvjZrBmTZB5CKotXsap8dT9SKoC21gRTRKkBBVpTU8kAR9cjWQPZ",
  "key25": "5GwPz5wH2vvzDM5KhpDaMMfAz8QCeL14M4C5GXVSkXMqhQu2EYCkEsoDmHEeZoGjThcqwnWq8dPMt1wRivL6jpJ5",
  "key26": "269QLZDsusPYvKNSTBh5pNRBq9fXkazYAz73vmGBm8v5J7VVV9aEfVdXpf8vEvZA6B7nJhZKwv9irmWqW9iUk76j",
  "key27": "64LzQfAXY6NEYNUmtMj3x24Vkddhm4EyuikvEDWGyxAJP5M65HT1gnJLuGDQ6NdAH1v8ZG8kVYYyQ1wFqGfkkasA",
  "key28": "rJ87sncMccN98ez83ZZNDAmu3RE8EzULBk5sUj5bXJjiuBZ9Nb9okpeW5HZhwV88CSvNTjVTBQhZi6j3JpHy7UN",
  "key29": "5315wcKtSYShERRwaaZebMewPPzJbbyGVeVzsS1bMcG6oE15c8ACERLRQikMEMA8sP6o4haeLKMjUc9NLuE4nDeb",
  "key30": "bWTjsfWe2uKMN4bfBDydKwDmDFwyTS6WgX6rRtmcnUZvrbyhJs6gto3BKaL7XbfU37WbkAotibaiSdpxcr8qdG8"
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
