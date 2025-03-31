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
    "2M3SzQpift48WpyEkHuwY3mHmNqUePE7XRaWiNDKGnmozcBpMf9QjknztTg6r1VaAFPqFeznSRhydyaJBkbajQAv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ZLJV5XdYTfpKqtTWj7zKYKbYjuKVmsKFQHCuJ1sDLPZBUq97iFH2iYh4ZPcoWnehCb4F1SLTURZ9grYzBfCvGUM",
  "key1": "5CZF5zunXbxkLoXZATYLNJVxU7Z1eaCBDkYog83vqsHqd8aHZPP7Vs7LZhoqHLVp5qwprHDDfPYmbkrKZt34T2x7",
  "key2": "28DRQCjDzvohZ4YwREyrReEBsAW5pkwbq8Kf1CmQ1D1AQDrq5xX76SEmdUc2MD9i4YpHyqN3qP4gL9csDJQFpemF",
  "key3": "45P1TcVbeitUA66ELPSpC8Uy83CzqnXrKkf7q2EtS8e61YMuZFVHN7LWjAuSvJdSh3T6vz1UYRyRYZyVgHHwdiAb",
  "key4": "3YvqqFrmEva83PS3EiUGNq6rjZRvoEwePS4fXnBB7F7DMPYxxWwWnX6EHGdu4NRQz8MmVNmm1Fnc1yVRqPgNhm4a",
  "key5": "4ZNcEN3yQ65oE9ciyCXkdnstQL9g1AbKTyZrRR6bBLVjKjnKiquYc7AMb35wbuWppBmr3cuwk2AcybprcgymsMKd",
  "key6": "43mbzdiAFS4obL8X5rJgHwTQKHpYGQ1w9yTmrzRQX4S58t2rVxiGD7LwJSTwr4fTK41bP27js21LVusUPMAztK3A",
  "key7": "3vYJVGdN5iUySzuLsmEPWLsr5vDnmh2gx4GAmHM1F5U5dUmLasRY8UK9WjkMcUPXCqoas7tCP23ggtsoPmLK9BMH",
  "key8": "3YsZm8UdF1LFmcSJPMP3zGy8rpKSJPaDbUtYViYvCdHCFFUJpYd3mXAYRaYyacUGtqMxdwwMQiabX67QsJu97Rm8",
  "key9": "5PotoWsn4WGVEByP3KsZevRvYecXiccvZ8UJsLR8K5fzmEwd2bmCSikNRCZSwbrZcmtYg2BEr6boLCJgN7SwP3cs",
  "key10": "2rWro5SDRcMZB7g1jhoqxNgkFoLAiQ5EhXjU7eG4qv6Gz9Lyv2Q56eU4aHMUKWj7GAXBfitQfipVxxiXssk1ucGi",
  "key11": "vVGXg9tvuT89RUPemWVeG6SK6WtvvqKuFbDC8UQ9uevn72K8RTuMPoZJPLChHrbk1E1W7Sde7bGuX7jfjhotwZn",
  "key12": "S7c576FD2gmvJwudSHs4MHbUraD6wMijXzCZVxbJTBiGUyoxUgahtepR5SdyBcwar5K4dsBN3oCzUw9Quyhtndq",
  "key13": "5hPmzvZmvkcQtwTRcxp2u1exdE1h3cnWkFBNzJQhrctJyZ2b63pzR5oc2Ws1BmBhpVBdPgT9msQBrQRheX7P5xKX",
  "key14": "mt3ZpxAnXgWBc9MCdoHjznpoyK5tmJKbakuKfGvD57JpLz4VCAPjEs73p5vY25smpoQvxWL8grvJX2YzNvLhDHA",
  "key15": "uZDbsQuNgCDkghiMC2T8tnnwZ8qUwBBy9hJyRvaQ8ntJwYQ3n4pubQKmF8yuBA1ANn6AaWtuR7zcTohLS2tgDYK",
  "key16": "eWPJZKUTZmDHayDLExweYKD4e6TAqBqjHL3HKQXRydCssQxKmZX4B1Yu5ZE5HNAJYjTm8f8SDD4qbehiQvpCckf",
  "key17": "25LVBAYoXnQLpJvn2dY8ouJFCyDK2FgTxtUMAnJp1NoGL1ph4YZkrPmHY93U9jQ8KakSiwenwhTcsJ6Hg5CyotCa",
  "key18": "5pcZuxsrCcJgMZJw9CW24mV6ar2uhuBgYJC6ZUWRbBM8XUFbdsaZya15CxtdWcKc9xbnHQgjyKBtvWkd9ZuLgqKV",
  "key19": "2E5C2eQCwdu4oWvuDNwd7FuXmgfYcjHjpPgWKoFiv3a1EAwSkqp43j8mP1ySPiZvv4ykNprNUQarfoFA9a4S1Aij",
  "key20": "5AEL4zjtaesK2PH1fKLHXXqx4DXqJuHa9WkdjHNV63x857mjvEQmAL8mZKfTS993n3i2Vdcqu9p9tVtHUKgp5TmM",
  "key21": "oX7spepDU576J2HPBNQ5J1VUEXTKuFAAhkKEqHip3w9sPuRGamuAUGiefMZsjPGeth7URVW4HZFjanTBBkEfnTR",
  "key22": "4GVeTaHA9EWaq4hi2Hnk7j82YL2kpf5CKfsvAQSzggbU1acNpznM16ku2Uqtm2VcSdwJXtW9z6nht6G9ro5PXRre",
  "key23": "3LY6wKSUGJ7BrKr2Tefs5d8fiG7UJS6hJksgMZrzra554Tcy5BUjvJ8YDdWvXzfLK9CQkWTcovhZb5xcnVvf29Tg",
  "key24": "4vnJ4ifg6RMwttr6uMAWVWsfr1V8hPZpdtZL1ZBfHCaVsaQiPbUkdDdSich6NGTWwgMWBPjg5bvzmJmLRXDYHWyG"
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
