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
    "8FC5nqzVTAtW2gHXLig4jH9QwJZ6CjLTT47JKXV8FNS7hUkE9GSRsEC6ncUGXzkzp1D1jpBJhB1duaXaC6J5q2m"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "52g1cTrmVo2m2LeKdsBktGNZdrhueQFbtqde2Tv8K3dmmn3S4xEeAeDiKSb7djX9cAd5YYrKZXfTYWN9Th1ZF7VD",
  "key1": "65ZcuzR8ecFn1kYacWvFzk2UkhGdr8tfs7U2St1UsiQT3Gxaq1WdZ8FLfUhnkaP6vy8udEqtzwypdjhMDbQtjmxR",
  "key2": "idAVEBjBkbXYcsWptNUbHHoqQtE84ZNtKWCZYDBVFaychPYSyoca25QTsaMQ6SPfc8NpvkvL4nBwgYM8TPXbCd2",
  "key3": "xXfoZV8puu1nkyi1FWHNmrNYJ2Cu9hQZmSVpARn2EGBG7rDymnWNFazZhJgiDeq1PBjc6zVf6YFwjLrjthMLrHb",
  "key4": "r7SGFV2BuYEe5QjEA37ipyqvTYK9QkqhYKUM8sFpkKeYHhs2tmrZQ8dDDCq6Gf5ezhcrZtgahtrF8GMLo7Xhgkt",
  "key5": "eiBaPeaEpDGkb8gi2KUmscqjU2c6bbtCQCHfV3TX7EAVKCZSMWbPELnr4MrF6CjbF7z9qdrMez5YmcyrYWG9zLH",
  "key6": "49fiSxXFjLPkVesk5BiEhaaHNC6v3pSAKGggkcyezrZFdjYEyJasphmJM2Acesm7CZzzQP2dgTn2Squ6yPemjneR",
  "key7": "ztRpmNFFqjHhn8NGgUkFm6aqnEsHX3d4uX1usiht926XS4pqedGcPzX62ocxSi9ce1x1cEzV1e5y6ieV4DUXXwE",
  "key8": "ab3FkHw3kB4CioCUTKCujmKF81GVc6Goh9UBAAPzFsm1dHvGQZseknbVjC8D6wP3MkKqi5YtpbnwUu12fkuSPqH",
  "key9": "5PKzATHKXj1erCR1psrq4Ef6WxMutj4yoy3znCb8Ac76qggxY4HNvxB2PbjUHiL1mwHLfgp1uWgyxgwY4aTpAUW",
  "key10": "45D8S6EgqRan11S3N4rG5Tx8AGokDkEZwmP1vkHLfkD1ZhRDcSg6o6vZi5512mGhP9NBDHmSv3sQBHqUd8eXGZYr",
  "key11": "hCafMhvpPfdjHRXa6B72ATtis8Mj7eM2PKAW71Bvy9bWP23SJG9gGdPczxRsGWJpHJHQm9UfKwAZPG8QunwbqxY",
  "key12": "ELqkDgkfLJ4vpjUMPzN1aVrPR5faBJ3ahPEmh5v3dqghS9rqzqTjyXoswfTyhyeWQ1nYJmMnT8YzUXhx73axJ2P",
  "key13": "2VgyTp3RCyPRUKtpNZd1DbgmSoNZNWFoDbnmiE8ZaZeG54dfg1q7nwuiYJu3xBMt4PVqwW37rzXP2yZKWhMQWTfM",
  "key14": "3SvJfwJeFbmqw45FExerPMFUDpCrHQQ6vjynoUvZ2aUToyGbTe2es1fsh5xGk4WLizycCbT4qQKktN58mJncWwnM",
  "key15": "66X74B9p6Lb8XiM1F5RnukqbYSWUSgvzoWe1UojT4ZdmCXXySC4UnVcvHX1hJZx6yve4cYobtXDPGpDYVDDV7Emn",
  "key16": "49j6gDaHRWskyP6HpwXgBEmc7sqGGWi6BA32QbjeP6WmorgajK1pgpqftSfpB75Nqpq5ji56BH1P3E8J43pCkYXr",
  "key17": "cq4wh1XE191kpxpAhburPpbpkKk2dG25cEoCNdQQxeWZ2ob8DR4RH71yioYumuZcWvzZrdVgHPpvpkExse8dckh",
  "key18": "5MZLdzXxHgQFrre158FAsjpff4nfd5ySj8LwFkLaozhFY3vEhkRjRaWRZC5vYbA3Ft9Gds5NigAPGEksoeY9hdSZ",
  "key19": "deET2xSRgzVEpH5o81wL7jt4S4dt7J76JKDWQcQjTq4BuXo6p4u2bvPBLLnuDcRjbndxBr5fS78UC3KkY86xxMQ",
  "key20": "4bMPheGmsvQh1yL1yad22BAG2pWtUjniibhXh4pzg4ZRT4jJacUTmPMaESXYj6FBE69bZ7sW3DCpNobeEyYWhQY9",
  "key21": "4HdrabbYvydWCYhdnth35zKddEPaj9fEen9cQGjxWBi4es1x8CbckGcUALSct9JoBXuL42pvNuzQ7jxxWLhwm1Gp",
  "key22": "28gwiSHFwA4NFbFgyvxpeHU3ae42ekPHzWJBpBUVJCiSaHxySWJxZxLMJmRxYyWxCBsSzUot4HPdo5Y33oK8X9ka",
  "key23": "2ZTK5q3L4qFtGZFSyD8u6VgpzrmRjnFSfJRg2h37fgyHxXjiV43MyUxJbthentMNrWeXQNUfXkzyakZRaWcy7KxR",
  "key24": "4BgqqrHRAhVBhuyQfJkjepE59bvcMheowbGeGmmKRD1wVJ857PCscAzaCDRgX6s8UAWhSyWfHUQvWJA7z4AKr77x",
  "key25": "Esf67v64N7MhBXFkny2cy1GLnchr19N4rtxwdpFmoZgzQFH5o3ud5emmRqcyQ7dkdkdGfTdBL2UjSnDSfoxap3p",
  "key26": "4S3vWbGNtdPyQ8oqoKecjBrdW59p7bG2HPBM8Ak5B6ETvRKN3tfT5GZsSKaTaUD89MRsNc3udiLRrk86SvR134Hv",
  "key27": "5nsjoqN2H2UTGCf6zurAj4kPjr8ZynRXUcvXVpwo5sfq3GUZ7cgzZzxhpWTtdV6B78pSX2EivU43HmotQiuk7Ttx",
  "key28": "uVKAXU3PJC6p5KsZma5c4yQ9Hkpinn8mc3EEM2scWz5iSKse8amWjSHNDwYFgf8eeENE2UPMq6yhxu64jeBLrf5",
  "key29": "3JqcL1rdLuGL76J9temHZZrZyAt3cdNkzU1ejyinsEWu5XnU696RVY4JHbytSV1xLcapYsqefzag8C1ZWvkbnTwj",
  "key30": "iGcLcdE3thhVN5ZutP9tJE2Tp7MnkfekaY6X5W6o2fiYqcLAZBGV1FAUrneYDJcy3k3YzLhNnSVYdgRAYuLxUAD"
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
