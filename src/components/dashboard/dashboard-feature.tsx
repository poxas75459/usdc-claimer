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
    "281HU4Zf9YXUHLbWrRhkM9HkjV3LoDA5PKyNw6TnRwhEvJ1XWdmLFHDWQrnZfiXSH5iGPcHy2HmWZa76BCHm6cpq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3E14f4XXN6TXA1dFkMrCfNH5x9zKitpVvxTgEG892Xnhi5vHxbdjszwuqepXAnszGnDR4PDp4bf9DW1JAZCD9bsp",
  "key1": "3k2D38CM6t5PEUo3zto4nBTk43Lj8hnZpVKTDbSCDXjmN55ZRDvwZ8cJMQczqM9ZXf9HquDRKCxbn9nQuj4pTBqb",
  "key2": "2wt1z3QtscoLnzmdQ3Cwa7J3vKHyTwLR6pyHCsgBorzfQ9EzWtTsh89DnnP9Q5qX6sryBbEFXtAZnoBNW1w7Ro8t",
  "key3": "3u9z2JeXzvSabghvY8zWos4M6a2yF9E7WDcetfM6qH9hFq91ETFLycneg56ZBupDnesELmoTtPi7efyUDX1HDwSc",
  "key4": "2pW49AhmGwcPQcwgR2cf8kh3w3Huwnsn3LCgHKv2wcVb5SusiWc3SYNGc6nAGZBg8dh7F7p1sBUEVwctu2osFPr2",
  "key5": "3Vm54U46gFsXquzsSag1uvcQwiooU16FT3pcR96vFx9oREQAzU63g2sCdMHdx9EAHVCPZUa4rEjirMmPbzwF7j4t",
  "key6": "zHA64zfrrHz3PVSqXkXHruDVRUKPKyQdKXHLbvsa3KXNJ8UYRbPdjuzDeLozmUYcRx8W65kwHHJuGS3DTBuxjrG",
  "key7": "4vBQMvbdarDnhe1SXoH5BNxz9AF5UpU6ptxYGpgFt5KmzYTqFFjhoC55LzL5T7N8RyyEicA1XCZEVReipfGo7fW4",
  "key8": "3U2rZ4faiKUVvvBme6xDsRuW4zPpQUo9pGZNghqMvtHAoCnCE8Uytr1c9SjURDAt7bh8hVbyLynvDQ2BxJiBAQRz",
  "key9": "5DfobmWQQZ1Q96WgzstBnVmmRJP3H8EZ9xJYUPnF29G7dtuJ4BrdN34tZRAAujjbyAJupzySQ1Wa27rihQmaFLcu",
  "key10": "5LBfFw7t8cfUWT3odvuczXcJEUJvShUgEsBb2QjpxZHAY2PViYcEiisyTNS4wBV1x3VZe1w7VsTfS6qJrTr8v56G",
  "key11": "4bEtALMoLDWFiH44kGL98LNZ5VMmrbdtmPAHDBMqewKCVRX14j8xB7hZQDTv2NM4dBBbxMrRrKNHd8hRFeB4YsD5",
  "key12": "5Sor61SRYeb9UgdL31ZpN5cxg9jaVUQTf2rB4UknVVHAdGZDezhfmwp3FGS9UKsxELQsNZjYEB4GoZyR9WVmgAnR",
  "key13": "CrK5StGUCbqaUUeKd2NR7s1JHw7LVVd4Vj7a5rh5cXQSWZJ22sSikAz2DLNonYRzRJxPNWiQ77D6YfBn3xppM78",
  "key14": "4G2HCyxdXNtB1KAL2iZmZbERF3q147FqzP4QgGRhWFMS2TW721hghpMFboJx2MUMoM3uxAWvKQWjPbc5p6S6PmE7",
  "key15": "4Zgz32Ao4bzNfLWfnAsstdVJJPjpa88NytdC858Q1QLFfqQ3YF5ev14VGiCWapmm6RTzeWqQF6hkEsbQ5WwGWZWt",
  "key16": "4UEgc4ipFd5rF9GFWsC5UmD2kXyrrwbACp3whKnG8cjjLDi3Ai8kbYB2C4WXLQd9U2RCD81oJwXkAuoJviVsm47D",
  "key17": "D1dHYYBZTj3oMQdiHutPf5nQ4F6JsqPZAPmJHoFrZ6wtf9ZnqAGaw6CvthCSxkGGqmq6nXYHY9nhWoffnsby6g3",
  "key18": "cUrRx4oeyG1dWdK4JSUjFnzi6XHbrTFRJ3sMNrF8YMX284YGAn9LTFv5LoJURd59wRZWt6HwgTLou97tqpfJtJt",
  "key19": "eAnAxwDCo2ei1sA5Yu2VDDEiffs5K2YVvif6BdxTjf9Ng75MRvyAJiDPeBs4xkLDjizH8dixk5YGJLbnVshVYci",
  "key20": "q3sLnQHTnXsZB1XngU5GT1doXD6N4XAbZywmf8aHUn8hJDpqZJQZMJysEXhg9c461GyVX8zT1b8PzDvKeQVdWPY",
  "key21": "2JvRM2W19toRy7mE9sX7xr51tiKxCjXbPsAimXyR3uZhoe1dA8Lm6kUHP2wE9FfSqDnbG3KqTNy5cypGtLyegnTK",
  "key22": "4rJ1DeE2BdPMeZEm54BmqzKCUnNecgYJWNf9Xxj7B3jNMEJUyCZSU55ggrWiQPK1Uvp84YkNreuwPoWkLEVAovEF",
  "key23": "4987gN5XpaR3Lcmb3qmRhaSGTowKo8V2LF5EdefUtZq5js9SmRoeXjW2Y7txwZ9ayZMDPNh2TudiynFB3Axc7uqk",
  "key24": "PbnBqvr42YYS34XoW7eqmjg6VMi2LiBXV7rm5eFVJk5zhHLCFUk2F2znW5HaAGx5GpdX4qJEun7HjtwXFbGJaE4",
  "key25": "4wT2dPNSEgRMEWn6PFFE9ikiRAU5RP747pMo93rDnXAcm58n4vCeotq1MfmiehXYGsUAC3DsDGMGogfzLfA4cT13",
  "key26": "ng7KeTExFZTy4nyJos25SmHBcqaekqhxQDDE3yac5W4jca3V8EeEugE21nBVa4UdfuHneB6fv1HnUsGH3v6wKXZ",
  "key27": "3LtZ4PfwDinrqpG7fjUrFyPSi4iSkURvFtrpNNNFt9VZMe7DqXoN4i74gZqraEhxBSP3TS8bZQFe2kKhqPmg8nkq",
  "key28": "Z9fZtCQBjy3SdhNbsCR3LMgGfTj4pRSu3NghayprL1xWkE2HMjBZoB59NKBWjrFm53M8pR8JQz6in1A4aRS7k1M",
  "key29": "8voCscNEd2oMb2hKoygGGYnZtUJDcPjXuA98SaEeT1buy4x1vEUABBMpRdwrH5PecA5zpug4fZVUEhCMndC9t9r",
  "key30": "51PEFXGeJYRfuyz8KDU9TZiPDkGmhJP7wsCDj5PiySjg7S4HSFXMxvxPiQFn4ApSdjiDUctsG8taxLxAJ7sqt329",
  "key31": "4eNGHqXs3pntpBeL9rxjFkpomLmQaBDws12xXgPdRa85fqYeuAVFDoycnDhAHV86u9Uu3XaDokSy9EQPMrvZq7hv"
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
