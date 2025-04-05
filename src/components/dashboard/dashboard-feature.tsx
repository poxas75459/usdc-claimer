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
    "32QYAQwGbU8dAsJVoY42Hwz7WnYz1oYZeBzdQPvEAMMVmHWSTGT9yx92QwtAKi6nJjfbjm6P99LPUECM9F4DtNJs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5rTUverhXvbvtNoekb7mHuivRCeXiEtU5z9u1bZMxo5oM5NSdt4PKww3ePWx35oufv81a5aSvJdkTX2aR9gL9pLd",
  "key1": "4bAZNWh8f1Bw9rVVX4E3tRiYNDtFH3kMo4R3Ac36C6EeCed9XS8gkN9mTp2HzEkD4hTpmTPhjiTzvn7awRDcXbs5",
  "key2": "3htPyKPKCn8jpuK4iZwu33MSwQJ9Fg8vdrw1vuYvQZ7WDo7f37H2LHUFZXTjoEKDUKGJQPR3m1A45XiiHkqsjg8F",
  "key3": "4N4vuDUVjfmD8GKj8hFBedbMZLUbkoa9k6R7xUcE6JaMuSPbsedVLM9RnmdeqJCerqA13oEkpPHBsUWXvZ7vF3sK",
  "key4": "3N3zyWHAPXJvH1GLCxBYgxckZcnxYSDoTTFofxtVriAjfwadJGkZN7wDgUZrifcP4XXSbUdJ4WwVm6Srd2uuQd89",
  "key5": "66yJX2fhm73u6SyjJrb8Arrvozc3nDHy7Kr4mQjB8JTRRathCSBvE1JsirYNpHGMNhGzP8zQ3foUbEGDcbd81hKd",
  "key6": "3xUVuJG9iWaTBSeNqfS2oCSbewByWEPW3NegRq6pkeGD4MTRL9kk2sP1TGXePSa7iPnXGWqQkPmctaBnR99Ltv6P",
  "key7": "2JZUvBmnhPgKxcSgrEcEfFkep8ya53K5Fm6LEMpcCojmBvPy1VCyDU6a1phRQoSd3xPwQXNkAVQDoZbHwXe1M9Y9",
  "key8": "36hNACXCit1e8UNVdH6P3KstLsg5qLzyF9ZZYD4jhpBAzLmLsx9z2yCCHyrWGvocXPj9aiDsZFbzHc1dQ5DXVD5",
  "key9": "4kGY4YTYU9LAbjpw63TChrHGGvVVTNhDfnLsCJDuhG2QmX2nQmYaRdQC8KMozoakZdiyYhoQHc5ae8YPmJgD8aVt",
  "key10": "4L48fTDtYeb7ABzuJcZn37KgwbMNyRj28dLU84Ps3JnwsdHUitypEr2mmXBUBEEekhMY3sSz5vcimsUUGeZA9Zbf",
  "key11": "4b5Bq7GiZ24C94zqR358arr4kbeyuhd8wXeHs9AGdJNGYwQSamQYmJn8ey7ToPitaxM7yBFPbXD9NCDwHHKEEREh",
  "key12": "3X7UNcrFx2eaPuutkMSowRMsDJbD9Py1CWwhoP3Hb2NB6njLu2DaqK6nsd3snhUW13or9Tq9WNU5DgTRZSfJKVEQ",
  "key13": "2PoXX3HwjnXgYjUZG4Kmnyu8s3W2LABogztHJEhZNCd8t1cadSa2c4s5GBe3UUEzzRp8SANXRzHdmYcC9yPsP372",
  "key14": "3GVonxWVsxUtuhG3aw8MYczTwJx3xCtv8NVgc8wp7HASGseTRBzsTUBpViQUQyC4fXghSgjiavtsqT7jb5MqVGcd",
  "key15": "2byVEE9DozBtGvU67TbBRutXPWErzM8TyvML9crLUmM27979NCCF9Kv2trDYpPgxB8mGC8KrLXuF8PzdqgjSrmXu",
  "key16": "4r4NeBDRw51yKBZrF3d931eimKPkrXTSds7UuDD3EkAWsGP4keQt1h4hcLKyvdRQ8R5nJ4YgK6ysRntMnbTQhZsF",
  "key17": "epfQCQkUZ2FU2JPspd9cn1afZ4qY1gKwMrRLg2ivKpaThqYoqiwCt2mnWPwzPLG3Ysnzdm4vpVt18yrkckR6q6N",
  "key18": "5VLxNzPJyDniEPWMdU5CAchUxrHA4GnoC98Xo4nvoaN4LznyqHYkYYsKMzdioojScaxSbpsYxU2Lvb9n1QGnspTW",
  "key19": "5fZjFaF8ywbw5pu6J2bcoZhMsgs1EFSFBrySxs9vQu2gwj4tqhVHmYRsxQRvFVnpz1E3rWfWoTp2dmTAYjyPhZZE",
  "key20": "5Yna9YdrTu9znUkSty5f5qV377k3LqK8DRzmj6QBWfpdyFpTCotNMUoyvCuvqGtsto4Zn1WKNsv1daKbdwoWAZnq",
  "key21": "5mk1Cz9PQaX9udFuyYK4eos1k9DWgj37qVBKMhECvPdJqhZVqr3z43ECNyKFgNTgC4yffZDeeWz8H9F6MDQfAgdx",
  "key22": "4bHmMhFnVLmyZcyAoSSoksjGbEoGXgp4s4J6Pw59wH9coGjBW8jwzMPD9DzMqqvB9XFZx7vAH314GJqm3qhZBzpq",
  "key23": "2vxtNQXA9ZjGiVh7E8txYhR9vmbHUYWNLyZkgb1DbhH5DMYxSV9Usyp9n4VqqM5kSfuzhLR89vDjFausgA6YnsBh",
  "key24": "4peRvs6sxWJVrWEYBAEKjMmZ7KZg3vbMHZ64YEbF85gjt5KCkeP6Sb3TeBxG1mZ5BAbaVht2TvraSQzdMo7FUNMi",
  "key25": "35xWpfFJGsuWFM9Ay5r6t4S1sMydDcpesHHJVxKzpzLeoQ71B71dtAeZLBmHoeyhf7rCtrUaXuETsSxy7Y4VDHoj",
  "key26": "5iF3mzR2dtzKVRFs52RYcyqTFryPgDKXFsUP6Q2q5VcZoRb8GhzSKGqjvd2CoekzyN5fZNAHSxbzFmC8HENdWef8",
  "key27": "5ifKyRVGuLtsBGBBAiRB4G8xyH7juViQYeLCWajfiyqR6WKSPcNJ3Nh98KQixMXoPuqDnQPrvdubcAmfDt5h4GdZ",
  "key28": "5NgVrkH1DCMjGXjWVr2H7riVkYwmrBWRvyfrnfbFk3ifQLZR7WdB19Wb8VvfSpvBjGakw54mkJmCTTdHjwJ22paN",
  "key29": "3XsZ1w3iNG4p4bTpNjupcvvYXSDvwpNAAYG64PTPBAuyD3hnLn81vNy8wEYK3ZWWqrdEkkqBFL8GpV6DQibdWMhB",
  "key30": "5n3s8Ss9fu8GqegpUdn98nQKNNeuZ5WtGh6PWp9Fz1DE3R5YxdZfmWxpssBQbrUB4C1UEJw9mTntzpZQvjEcCtMf",
  "key31": "65kgQdbuH1ceNjkUy7SMVWYNJtigTYZKsFVBrbQzcB7zq4WH9FXqShLCCfLM8ZoXyj7UxqZGVN666VX9jUcQn3pJ",
  "key32": "QJqBGoiA9cWjQh7gcoSCyewKbejXmfsM4NMDUkMXJM3QHrFfR7Ki2vSDs1AVjxvKb1zjPfRjko5eMgvMn6G54kB",
  "key33": "3jft49ZZfkF9k9dK7vdLcYA5sCqwpipnQHoMopQr2SZLVCoY1VCoMKioHhisLFaPFqi78scg1vUGkXBJB1xDxHxZ",
  "key34": "QT5USHHZy2LUcWTEScJH8zfwcN8TXJWLZaGnueudgkdnMMiJay65Zd2fi3LWhrGMNtmNW7r5W8S1A5BzqCao5oe",
  "key35": "3bjZegobEN4SgkxcreoDthaBaP7GVesKX9upun4TRpRAibYYiVa9kNwt6EBQCQ7fLmi9raaNiwVbRKsREE9UHFFv"
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
