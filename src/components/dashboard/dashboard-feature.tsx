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
    "ohusaK5Az2ByzXn1uzAR5hHWZPSK9rEPnKDuXiuh7YhHguQ4x9PVZbpCCdjnthkq3QJJXvARi44LAWoXoCX3ax6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "7XebVhh9BtX6AqSFYpv2rNCnpim2MFJYY9a1c95PP73ahPAGN1Ku1MTdy2Uz1cMEye1qEDkG9WviLB195JkwcyP",
  "key1": "QXFo6BkJA1EiciBnXWV8DXYcz2izgfW4gjthDBDpNbea5QwZ8nEYDYPvqQBYSYD92KZoKfxHu9TmWTkfcCgvdeJ",
  "key2": "4yJrPPCcKMAYnTQxCAuiki5uN4w9Lqp5C6mJypwsW7yS4eGtkvfaN9hmDbPM8qx4Yn9TWo652V8cDS6qvy5Fw3bE",
  "key3": "kKNMJgcibwmYGX95rB5WfN6kHahKjaqLbi878BGk9qLSWggMWo3S5Jt4TNxCzd6hiQrTVNUY4Mdd2wXo576uagB",
  "key4": "3hNoUccgsTpDExN9KCVCu8GgiJvjoQF38oAWM4sU3mMPskynUTFnwygQgUXnJYjYM9Q5hZHq4Z3ufhcqKoCoNS5Z",
  "key5": "5Gzj7rniFW9wiuoRqtM6TuFx6DFFRTNNUDVKBoUgXhHLDk9rXNny8YNgmLtF45q5C7ZjwXs8rtvYpu3835oWEEng",
  "key6": "VTtBnhtZW4yz29cQTFmDWRFYM9JXNFUVFFcVNqcGT1f2NkNedszc9f84QXwRB5c6JjUTkZSNTPgVMjgSauLXYfw",
  "key7": "37bU2e7WH2cv8ouWzSQzc2hgWBkCrTaiGeSbQ6C3ua5Bd2oFNR5nqTkW7NCkGiHdi5hD9BEk2c4ALR2Z2xMBjXBB",
  "key8": "5L1nv4No2QUXMxf6MwqNdbgEDsJc6rBbV7fpJe94hSSwdKzCvMh23WwYYX59Yf65GY4CWaWBPq1JgFMzL8omrCWc",
  "key9": "Gh6t9NyRJ3EGjbJEcYhiwh5d1zr2n5fTHThDjxkzSsU8uFicF3xH9Y2oUbMU8CzFNX3hjMRdx39DVcyydyvpYy2",
  "key10": "3ykPoQY388pP2AE3ww7aUb4UnMSMwgDqnKXLCueK5x5Gcj3Xjo9pKYio9QEVfUvZueZAozZJcXpKYEZDYCqh7Qd5",
  "key11": "3UoxPbmtzFB7woWP16jCejjdpEDEA6HBkukzfpLSGWjqDJzYAD76CXQ8bT2JEFLH7h6cfJ9bvsYNFA89WcSxQtfg",
  "key12": "3zVJq8ahKrr723JQhyfr7LEdqLaMXFCfWMmRnjvWLTLwpWq1XsXaMpBACoLnuZd7bHyvibQep9MUuB6X9AayfNn7",
  "key13": "57GTQmBbXmzWG6PbpgH1roNnSJG3M4JfgT47EZ8a8fM58nNTnwM4vbuWMZq1YoG7qSyWpvMepN4wbWDc4XNsiBja",
  "key14": "2gi87RKjm3RdDxe5tqrRhKcGd7fG6x6LwiMiS1vrnTcFA8FLF53LvsAGNE2HBevvKH6ptpmi3Fn89UzzjTCjrXgD",
  "key15": "q2PshDHUwit25zBrVdBB8VQSL1XuDxikjvrw6s2wddGqmkwQRooL4HcquqZR2Mc7WJp5564xWSqT74EvCbjLUXT",
  "key16": "5AxSXyyqGYzint6gogjC4jgdDJjNiWtpMpjYwGqs1X5HwN1pm3zzVVvUDQa6psog6SdyjWTxVRQibvnDkz1KT2k9",
  "key17": "4xfSSaNdGXbLqM1rg9oczyvvWaST4QgTZSR5Y3f6SqyE7JBihJ58URzfwWfe5dcJmPc4G43N7BvjP4d2W8nXgkhq",
  "key18": "3qBFWoW7b6X6PAZGRxx4qcNf8voV8y7c5yLdzmLk7EEDi5veNfzRuzXyNCNb4iastFSM8HqsTB4xhq4Z54ePBoQ5",
  "key19": "3G3MPvwVXoMtkx6eBjAzd9de9ZawCnTqJNCM92RN3ciQ5m1z1CifLztg7eGHMtT1rZUxr1mYTMGH4vxSDUgDwrnz",
  "key20": "ZzxJ5oHYW1FQALHLrsyybDHEi1WFxt77puoTiqjMHL71qkZ7PRycBSbhKqmtjai3PLz2bvcy3y78brvuot7cc88",
  "key21": "V7Yh4djzH9aAadQW3x4jib8dmQUQ1esgaZSQELR3gsDfmhWVAkSEsWB424x82WEBopxnRLgSrT78amhGdzw3FFR",
  "key22": "1GcV8C1JfDUEw8ZJaHwzNeiNZHAoCXEDAh1uDZP4z6VpF81mYLaM1VGfdECPyEKrBY4GcgWQyPVzaLDSCy1MX9d",
  "key23": "3vBMENRCf34ofR14bCi82BD4uog2UdxB7uym2xMxcNBvWSafwNW4Z6EET1giAnWgmqqvmKwuoRwYD8AsSVvWYqox",
  "key24": "33pdwsgX6Fe5gFjDs8dsGDMpo9oVZ2pziMcuNESVkuadfsbidA9TaLUCEkS7mGMsYxGeT5PS4ugUxwGX1euQp4A4",
  "key25": "3HRLPiCANwQy9iXh3AKFrSWknVwV4NRnUK8Ybf9TSVRL66aoiQTZsrgcByLA1oz5buxVobDoQDUNGyHrvzrRGswu",
  "key26": "5hnPNFGpzXwDW2WMgWA9T5BgFtN7y37AJpmvX6GHnTMdmoXkhLYs7PfDG8y3XL65CyJZCjzJoeJYzhNRTG3RsGwj",
  "key27": "PvfvB2Jfc4ZRJPgUGowqoNpPeADKRCUKSnSSp8Rzs9QFHzf4aJ4e4GtvRDbQF331HzgxnAh8Ni9eACBjLr82H94",
  "key28": "2ZdYUGYcyLY2LXMn5Dq8YF5Dj1YigJn4Kn2Qw8EyWaf3AactWWQVY4ELQjiERzXxAQyAzsYGCQkqFBWEiA7R5BwH",
  "key29": "29R3mTXpJS1YXSb5GziyNEsGwuSSZJFGLJ3sTvD1TvZxCMzSNUvG11MHhU4rVpjHH6aPnrgBqEi3PqxFhmXbhZho",
  "key30": "8p9pMHsKyzEEv9ky5PBajCeynd5q1c3tqJZA6YyFGEmqDkNK78FmjNivTUGBzFPPdG44UUBvxV5iuAPu4gcf9hK",
  "key31": "4PX7U9to38j9gMX9Bk1quXpejQQqmpA6YB8CoBNmTZNau1SXs25S7c7io3eo8GNWyTxTdD4i4CiA87XSimw9nt1W",
  "key32": "GUMLitqfbJzTABv4c1aXXUMnCwiV8JVDpXf6tthese7LQYBrDapdoq9ZDhBxDKNQixU9bgZCq5hquRr9N43Sava",
  "key33": "571BYcqT9b71LDQDruZnr4t8kcHqYuC7DjMKneqLStifAm5kcR2zGRF9riE2PsTuTGWmmRwyN2LPWP15266WrNqg",
  "key34": "2tHg8g9ULAiVYgCV3TaC8HhnHZE9xTvH1AkniiwWsTczHn2xsSTkGKSf6bBFp9J33fUEQFcAjHuJWiGJpMECoWBd",
  "key35": "22sB3WXjSAt8yFvyZtKySYReQbZkjbFPiJdaK7kk3jvMAKH3iRebPf1W1hGsMoGnYR4WXEJRdE6cDdFh1QAWK5DF",
  "key36": "vJReGe8WCXLojp1mDBtvq7Xq7pKXtGpKnSJsZecchpytCaJgsnz7ErVGY83UXBfy5B9snSfe35Arb56a3a8AVi5",
  "key37": "56KWo1GZk3rKcFxGEEuyygXAqBsuXK87ho7KtGTTV3pY9UMDgkDF4uirYHQjGiZsqdMpK3gW5pidELRdprk3rp37",
  "key38": "5Y5ERfktKdNdG84MEKtaMmGgCBVmUWvLwmbhxq2ocKTf21kFvByf29HSU19uGaVvjcVBoe7FHMuACpMF1CZedMVG",
  "key39": "5aXjQSKUK46FTsuczYgKHrrEG4rVhAuQZgjGYYJ3U6s5ounUreArEt4goirx35d6UstvUeUdyN32Qoq6xazqKGDk",
  "key40": "5464kkBFNYCUQzUmgC6bLGE8bh2PBQhDS4tFkNACXvvHwTcdLheifRV9HChzSwQCVCGBvik6nscVEgw7xsq9eWsV"
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
