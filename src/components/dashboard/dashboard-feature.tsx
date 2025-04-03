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
    "4scY3jp6WdD2S8XGgHyGHzw13GvbtNzjkNUitBHiMiU6jxMZ2o1WThynw7MuCcN2qm1cvVci5YbPZeQiZQq8N9Fr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "wJ9U9HpEptSKc7xxXMc1BFSS383DDESrSvCPJRghf6sTX2cNxAkyhVUYeiWZoBTim6B29BBf8Fykqov36wB9gLJ",
  "key1": "3tFrubebFK4Uq31eDxu6GeUZFscrdapKbwwHtVwGY9vYqUcVtmof3NyBHH5g2yFnL7Au6GS5aF8G6DpmNczadyAE",
  "key2": "L5GnpaNjyxjqkLCyRjfEnRVejarr4VoKwfzZuD4YFg9gTqo3zbW5pvMRE9C5Dt3YmoPxXhBURM5LvTAgPbnH7jQ",
  "key3": "4MPgMen3oJcBdau7RPC2qwEgNem1grZH1RojsEXNPhvXpkC7TYvVrszLhX5T9dZQU6z5ndmpXpLCstAZgyHEANBc",
  "key4": "4aX32sFrUN4wo5EagKwPn1wjwFBSS7onsy4hJHhbM3myYgQGaxQqnMd1ANy7PCwfgRgFPcXVCQzAhF4kMm2nz6AD",
  "key5": "3wKTLtjs5bVrK7hCGSVxJzvoJYrTpwSBNNVRRK3KRCFoLsSZV6dQq6PvhWWi5HLMQpg2aoYWmewRfTqGeyESrxK",
  "key6": "3UwADypBSyu94fBHniHfJbwqoVMi538qqWQweqXhiuLmJPMB2YKSDSv1KAgDG2CLojbSK1cUKaCrbf13eG7cfpM3",
  "key7": "4houQeaGZVzTeT5nQPHxpi4GYKMYf849fFevK7uKCkUm8Cj4BfixTWjZKcnr74ZT7wUs1VWyi9KMsSuzo4FNcbYK",
  "key8": "4qrK6dJFnGJjtk34kUVWbgfzkqYPZxs65DekDtbWYJvAr2nke8XGjw8AWu1yZiuR2i6Cfhiap9rV6r6KU6iq6Nbr",
  "key9": "3HQnnSdm6GA65kJ9FEizhT355XSLaSBLZnHVCcfFHWkHjQY7NGFpAXxNU5Q3TcmT5MsG36ZVbs8cMxsKprAdjFdC",
  "key10": "34gkree1AXqgHuetUyRVTNFVisZCuER14EHh1ZDmBKBEtB5GwgE4CRD2VT54QvWBvfLn5chRLsttfyYGHqLakQh8",
  "key11": "2FTBHeGCYrjZvQ1wEvFkEHR4esDYc4wcZ6CEAo54UNTfufStcwfh636LNPDwK8u1KJcCsL966k9iYKG7fhvWk2pp",
  "key12": "5DRupSQrxufnbtBnNeWG6xdcUvFL9Y6RUX4i7YqbmrSUb7wN5HLvKpaj15eAKKdWKhgbDSuWRxm44uEnFs6aPGHF",
  "key13": "MRy4cEV9FHgFvRHwtZTYyHe1TSD4hLjqRzh2EsdWiRG3KgLYiSbjRVv7ueTE6SWHuySgJ8SDvAQP6fvyeKxoX8Q",
  "key14": "4qCEVSdF2yGE6PE9fBp4DBmqk6p72YmMb6Noq7G7vDpcpAj4UYbbp3jiheu35YdfNSx1FadWSwPEuFa25eTv8KTt",
  "key15": "2gog91gkVznpdpKNVzjyQ2VpC8VTbCu3wrZxa8jG4Dy3W2iLK7fcadyU7qJK8ochuTv6Zy9WrtUQocp2BPRyP12Q",
  "key16": "2mS8GCz2y86BtMWHZi6iPg2MSL4Jt9F5VWuH7YTj23z1yHHkbjpdmJe14eRC7hxmY9iBghJpMp1LshuoNbLjjnuN",
  "key17": "NMPK4sj1zwkiFa1fY8VRJ6oK8g5CMoXtjdTbUxnJKpPMqMUEax3k2ifYXxEdQMWVL6D2EpyrsXVzsV6vfcnxC8a",
  "key18": "nZ5MfxKxHXbsxjuzRZq9kdEfV2LsjUsbWUrdfRg1cpSpNHm5uQEbnyYCfFBnk9qo1Pdj6K3Z3ovFzW6N1Vw8KS6",
  "key19": "2F6c2xmh77f9YK8rFqbScxKfemsGYkbriodPEEFc2gzV1GVFb1Pmf9rQo2mmD8a9fhDrmhUDovWYTpKsu12e7643",
  "key20": "2TGwiJYVW13UX8mpu8atcQpKoG9sGTiBiMrsykNQELsEr64TGCJ41cKm3GeU8VF872BB8k3DUK1SfPvHaRMuCaVu",
  "key21": "5ozoVREn7YcqKTHFmUF8s9wzbijJz5BkvyLEak2LAdgSjMi41eKQdDK7YcL6Jvb26yacSpg9edCLvNaMa7jcmzfd",
  "key22": "3ubNw9UAmovBxPw87keWdGDUVtrT1654BCpwVk8h1VPQxmrEnfMxctL5N9p3ui2jvkaym5T4o2EdcYfmnXw8S2je",
  "key23": "5PW3o7K5KaNVVQkigqVcAX5mMothp7RTvS9BLxapptyLuTqTwVP3nMFe8dMMTJ2n9c2Fy6ztrHkHaCku482iXqUu",
  "key24": "5v82fWrSkX8UwSukkmijerAQVXrsgUQf1SpUhgNXH3kLUu6kYm5H9GmTQcg5WCBhtyVY7YucETLqDx54aMk3gFfA",
  "key25": "4dAFXyxo2f4QHzscpWBNQyaQVtW8euJaS7bLyyTrXJxbUvKhuYBoAkVZ6WRvGiirZMuqhZPFTB7hhxoNfX7z9ugs",
  "key26": "VauoS4nMxs9vQnkjyos4ReCBKq1dPAwhZq5y1nSDEnhM4pzKi1qMvjkD8qg7cgxZWyFE7J6NqyVLDZHQeFqcBXc",
  "key27": "3QEw8KSuFbb3Uui1h25YuTwYp6DhZxi6W3KMkiYy7NzBvcnvJpDNGoSVmK9kxALCKuX3R687matSLrq9BX1VZZtt",
  "key28": "3Sgn1GcEXUFU9eK2W2wGVfWgBhCehduCMdStFxLV29C2ZbUCX1EYMYHSyjJLouQEvHbcdcpNTBDETW6aaBmbtEF5",
  "key29": "3mpRB4WHFiamXgQTaScf9b4p6smubt5zWthcRSis3mFS4CYYmam1G2ysw6frHZoGKCTQkwB6ywM2S78CLvF1vyC7",
  "key30": "5YhTmdxnr9RG5UiWh6qVen4kuE4efiNpHAp2eunHMtdFFY21jbD6nENZXZQmWQSRkLF3HFJZurqDQu5vo1x7Q1F2"
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
