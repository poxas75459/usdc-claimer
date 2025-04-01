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
    "3ogC3rHTCW4sV5fMwFh7NzGv7JPntXHVZnocUMvvipEdLyRhhf9oBcYysmPTRuWKDtxKpbNEAcgBtGx3TDJE2mwm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5NcxcVmQtwj9hmvqJSWWxbFWCzQVUXfm4M228nuEHVs6HJxgLW4EFBoCNsyytvzXFNjxABA4bEot3f5wtkfifLua",
  "key1": "2H19YzuoB7HqbYaW578MZ85YqYy2WHCXZHsbQdbGakgrQkY4AYG8teBU1SfDdLLHomHaFwSubk9sctoD9dCueSzK",
  "key2": "2MqM1TGj8xQv8LaUgJGXEVqkDbvraN43E84B67dn1VAuuNVaUG5pc5fJaXCJ3WyNGsZ5PJaNsWf6ZeexXFr2ngZg",
  "key3": "4FDReSXoaSZByBYEhNipcvh2quR14GWg7jJGvqEQJ1UXicipzFMXnEhz7hb1WwtRFXSMBLMBzuuM9EWHHL5TXZ2i",
  "key4": "2WF6wNaGWEdkn4QQCm54HQQBcUyfTpoFGg4x5iQKz8qH53pjMUFYBcBv7E6sQrsh5NmMrcfW8sgts6xJJcq42MEs",
  "key5": "3ZDwZ4jbC4WCssXiEVGxHHNL21ahjE6pMRPseg1spxpjy7YKJoH1jUP9NmxWCtijAUTTwaZvEZBqJfk5TsyqSkM6",
  "key6": "4H866aNnyANtEB9EWZMrwgAQoNiKMRihgUUx56ACgmgUdH4AtCfKdY7q9tBK9h9rMo21a3DzswtsMchNMqhfc9Uy",
  "key7": "5bYnDJPsiBK6hVZokbPi8HXFxhMbcshxK2UKDDMfcjuf8ZN4KmUDshY54M62KwJCafJpjxbYaa3PhjCB9UX1Gg8S",
  "key8": "5h79xriGBRZHwZnkTtsqG3bTLMksFveZXs6pecjYvAJihsWJ56RL6ZMPe976R6fumnkqjYCdTtnCEy4WRhWPr1qN",
  "key9": "2oU6GmjesvZ8F2tgkcBLM2b7xxdfDMboUKiP1Q89Gkm1qroKcNcU6MLNrF1s3ubSdFXyJFV7Gmz8VqMZCbfHTE4v",
  "key10": "4NsN16onkdTTrEKJzz2k9vmy1fJH5zj6rv2RovUtjyg5YTzyj9FqrVL67K1nWUd36S4oLS5DAMghnyzYtBhsgsfQ",
  "key11": "MgbmtVpsWYLFx6b2aa9rUGZQWyM82pmrCHJv5Mi3g6EZH8p155j9hX6zHebTudZTCBy7Dybjx3TShHnnUCaDTw8",
  "key12": "3aUxw4xpKLVJaScfiocZNbMcLU4gf1epv6xiFSHm3g5nqGtA8KoPALRnxzbFtLiqXUUroqsfZbZUnyHksknUc39R",
  "key13": "5qiCjLfZB5YrURpSPhbkESURobhGQYVmYDZdjZLuCfrj4WQLJkWUtAXFafbdvamfcsv6tG7kAiQxhdWQiSkWkNf8",
  "key14": "4g2FTgpMB3LPGuaCSYkYBTsKUU7UJYRHf13mFXr6CoYdXAuuAzofZHXdQAaHBJvzJBA3qZmJjkLtBfYJ26Q4PGag",
  "key15": "5Ac2oHkrckyNxn2NLaVJFsRtA71phNYvkzdsFbJP4gY3rwTYfP5iPMgJQe5HiW12ebYwn1ViWkXUUmzcB1vb63vy",
  "key16": "5mVfdWm9rUBmmcjNAEMyeN3eoaC5vrmprHMy15fzJY7RxaVtUNppGGDWvYrj8xbn6EVCvNkquUiWAWhtcveHcnxo",
  "key17": "WQYNkGS2HFuLgxrrrsGigkaViPAXfFpFovJsEK1B4HLxgwDsmBpPBptKd8W9Tcfsd7mqZK84sGQozKc2AeB8w9d",
  "key18": "2WpPK7brTRvJUpsmMov3CAc7N8wysPJ42HWY2fUdfj4EZYbKYDSHzoKLgdWV98gC1kAuk83HyBKAnJ7MvoDxCQP1",
  "key19": "2Nqb44fffbAsK5vcN6rTs7swReoxNhqqKjwZ33GbXEyyRaim5uKwTbb9mZMVBr8tA4gkpAcKxWuwvA2fUnYtsQyx",
  "key20": "2Ca7RmfHEu95zgtQKMHpKAhz1Lnk7727qHcwKrtqd2V23LpemkUWmmnrPNYruCfgt93JRxBfueATB95vLNF2jRjS",
  "key21": "2E3xLwEdXz4kU2z6kr8VkheppW4c1tFTYxRSCXBYwhg1DobRQ9YD5QXDC31ZqqeNJ3SRrYnXDSi8L7SPY1yth6q5",
  "key22": "4j9pR6isqLfa2CvUwYXCKBMjFUAFz66DeKNJuqQ6NKHHk5Zh92hQAHmAgTibtAXR59DmoL87ETJRXNn9JgXtNECC",
  "key23": "4DsNAek9D3PnfN1idK5s3Ak5fgQMQBEfseJ787E1JMLiXfH5goPvgTkYSCBQD4ik4G5mkqqKKxFcy2J7BE5wvMcr",
  "key24": "4PAr5phYeqEpGCR1zBGggK2qYixypfhi9on8YHJB9pjZXNNZeRj7Kq5JxhXfcDT2zxV5JDqtfAKvLAjUkbvhKSdr",
  "key25": "49tJY8fYFoHgky6CvdEDaizRfwQyvedUicxztvwT8MCXXkPrKefnP8dhGAZKs6AmD9cdfSqNrxodDQvtL5sbCkPk",
  "key26": "KN3As2xbJK4QxChQmFh2FoKszLYQxC44P1RGHoUJfUuwumuGt4vx6U5xuhcmBQwbXNa2z6pBwRNnr7FwqM4ZCPh",
  "key27": "2rLECWzytmxSXxPnpFbDSmd5i3Nri8doCUtuCyi1MveXJ4UhpBYxedDMQh7wsPieJpFdTz322SdN5PB44Bh7ysJH",
  "key28": "MdeCj8voUgELeHRuKKoFHUxW3h6FrSwQF67CSsYDayZQTHhcWzSGgdNaxbBn2VKJ4yA9tgYAxxKDe3KXnBSBoF5",
  "key29": "2tcdDD4C8DN1iLWc7mt3oYS6MybYSgnTAB8Jm1CRaUSKNn3b5TQ9hezA98JJ3aw8NHjzkcs7ppExoXNYXueeaDNG",
  "key30": "48bhJcWY6n3HmuY63LShV26amHc9uivzHpAqnFwgaw2a2wR8oc1rpwEzJ8XChzf7LeMnkh5kvAMyEbPjWion8c5s",
  "key31": "287HicudxJN4rcxAts4reTQw8be5VrF6qQyeubf3LQv7gQKnfa1nCfzp59MJnbfALxxHf7nztfygUJmHVKC2tb9P",
  "key32": "5YgsAvo9JAoZLYLk2E3r8a31NvSU4y6xKCG7zxgkVLPDJKLjMBqShGfo5kN1qgww7mbYjTkSSc2Mdp81Hhp5qaur",
  "key33": "ZHCxvK5HwJQoj95jDQ3y1BQdjcno9wfe8KsunatHMbXXV2XXT47LZ5uaYMhMX4G4FG6bM66ZUZYE5qR9D62PBL7",
  "key34": "4pwGXrSAvuGFHAhBfou13y66odjbPbG5YL7RrXPhCJALTtBZYVTWHvtRRpsZZbmJYWWcUj8A6xD95RyCkdthQ3TZ",
  "key35": "uKq5PfRAtePLyVauqBy6meKxHz5xq7PGHpd1wBTinSutKy3vFhBs2SsCfghsCrwyn7G9dyCPJcLLgjhkgRxDobe",
  "key36": "4Xzj92VWxSyM3nyzHT7w9NZ26duxz3qP7mdutgXMyY7kkJZfTUkDkHJUy85ryjrnGPToMq4w6NvJrbt21kRm8opH",
  "key37": "2ZA4JVV9okhv6Dv572F5TGL83nv9Q2MFrzjywmHLyX8bmHpTrwGQjLAnfjpp332Fs4SsCHvXKSMyQWMjqabXV8iB",
  "key38": "4aNysBvFwyVD39EkhhyTzwwGv3Gr6wHdj1CpkNNeFh9bNY1WUpe2GkNKvbc2QLt43pJ3R8Rjph6kRnasmQtTgtwa",
  "key39": "4jCwKqvazcUoFqtEjtdMQbrUgAMsqvpYmJS3KQBw2neKT1wZXFBGMaNvQK24dX9P4DfEuhTnQnQ8rPeWfaM7JmQq",
  "key40": "4mJZHCU1R3CVTKBQJnjvDHJzvnNhwm1QSYAyWsQmMhzxA81qLQbGFCsjaLoS5XxULduFbRZtMNjCvJkhJFG8hNRU",
  "key41": "21LU1QgqQfB2DJ4avALkFNBvEwtwuvpKH15iFQzgEtGVrmHkZiK4yFKwPyopKJsh1HFAZms786zzSPiRqnrdTgxM"
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
