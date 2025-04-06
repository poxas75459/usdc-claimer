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
    "2PuM2vsZwZgAAVxKHdkSnAYm9gFE6yaTCEG93ekGvYXG4DBraie1N6goHouQDbGg4Dt8fhEmfssK2SCVoV1GN3eH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "BpN36AQRJ6u5VFYEDvLjkJgjicM4QThZxuBEQR8zx5tYJVvYRoMPnre3wzmQRoPq5b6r6wEUF9P15qvPS1bhnYx",
  "key1": "2VTHd885s25dqK931wwPifxzH5gyWcmjheMEv3o2rZWCVaBskmcYw5V1aRVuaQaoyvVVgYDwdDhcBStM3VwWBDTn",
  "key2": "W59jAcLAfnmedRET6uiVYEhmXF3j9KHYs4AYm4pN85TSLRcoXmnVex6KpJNyN6MCZx8UXLBRuWvLXwDAnkSXamg",
  "key3": "4r5jMqSQfA5R8sTt8rkSku6zfwVdNQRLxJdpvMCoFYRmADPoB2qsYkHbPNZx8C2KSMxn3ZuAKybmJhcaJkiaHEhq",
  "key4": "448FaRmcGqieCJWCDngakmkTK3ra1LLznarBdkQK2wNf9AgCAxr48VcQw5RienjuyG2zn9USTFpvr6H2LBrF6TJG",
  "key5": "63iGoG5EE6cL49hepPQTDfLwgQ5hKDxCsb2SFe6FpW9LyzUA9c9amr1BaT7raX6iVPQdAiGcgeyHxQayBaqh1DTF",
  "key6": "3KV113W2edmFwf36bQJ2bTFsuQUnYh5LdubYKUo7SZCu8RobCYZnNAwkvrL3YpSDTKRXn1npb76WHzPhQ9RAWxdJ",
  "key7": "4yTV1MRu3czAmqstVZudQZrJVoZBe9L6ozwM3qErLbpDriQJYmaW7rppkWeaMNpn4offnRf64fyNBvATHSqBDVzz",
  "key8": "3qBNiHrpCCxVJhrNtFszepB45SZehjRjxC1smyF4p2eqQKAx84pgWzkpEFUtSU2wLH2ZwzJ9LHQ82r2HdvuvSKEq",
  "key9": "2E8TUivSzY78QWRTWxv9bpG1Ewcss9r9KQVFBBE76TJbojmpiNCP4G6q8C2rQQ3DmcrDrvxVpyBTwpwGWkv2UWa8",
  "key10": "gDoAfSTaHY9vu7zbyp1TwJ459MC8YnmJZTBFr4BMY7n3F5nZxp21paJ8rsV4MMHtQVMiqsFQRMd7LBKmPSim2RJ",
  "key11": "3FXpaVv9d2EyvnQWKuza2cKR2vuYFkmru7JDecQgN8XfKDwXwovkQF1pdj3e6eNmPEx3jXUtkoN5dXGpZb6jmp59",
  "key12": "3gkMQztgZa337VLP3yJRVxMbGjGb1YCNzfMmxFYYd14gcVHvTcWZeqnid9c3irV9SREgRv3ok8Mi2KM2QGnTpNZG",
  "key13": "D95rMFFvS8RNjYo5xJGahh7hZyXfhLxvmm6WpAC5onFYqktwN4YL9WSE2VoUT9evXZNGQvvrk5TEy1vZq32oY9d",
  "key14": "4Kmt4jx2jjJU5cu1MYWC9JvommJvytzWem7uKEQWSwtT56Ld67vF7cgHsZGHyaTstHciWTL9pW42eNJ86SfKceYK",
  "key15": "59jfwMFoh6LxswFBLZJ2X2KSBqMgdXiuYy9MSbc5DKs4h3w4z8bfkk7dUjjYgzNXLzsxuWArSfzLRefJXEJ4wmET",
  "key16": "2XD4mntHJK4L17zb4c74wAcinCwQwiE1jpHvvbwfGpYD9xK9XsqMpmLGYH2kW34gNh7SVUYwFNzHLbD3DWqHFJ1x",
  "key17": "vPtVYmFaQetF19WmSAt3ymT594UpNibsU21pf8QitiKWTTGXseYJe56saD6JgHqkUbCVaqugrzJ6DwhGMP1zpdE",
  "key18": "2dQs97BN5CwQp9M5US9145yuheBoUYMoJQ8sQ4QrVEZNDYhnsdSCgd61c42HDx2oKunFd75DJKkS7nwTz72myb55",
  "key19": "5b3PUe7h7fpgLFVXUYkR4mt8bDDtGszKeDpDBizWuQkVprkXQXP2kYXjueC3Rs9b1779JTCritUy9BU5UksAsU5w",
  "key20": "62iDcfca2avqkRjda8jzsEyTJzcBhucXBzxTYdGoomHvTZAZ31tMBE9sN1XhikXNcg6c99q3fUEMdTeFq4Eodtco",
  "key21": "2eQ6rgrDpiVnNSYtkmE9QYhzLbSrksioGcuopATgx6Czm6ZEiN9Fu2rJGh8xg9yAboJn5ibNt4Jf8vp3dbuWCAGs",
  "key22": "nk9ypc9cQSNxLKR94Mp2oyacYRXfKB1gbEocn7FtCDSr7wUiPm9TRAUfZyHPA7ymBw9BMCf61nngKwgLxjP9vvG",
  "key23": "2UzEVdYk27pvimjs6DVq25vhzjGErT2TjsdnNzsAT9uHB2fEccfimoSqpM1ebVTntJXwUVFE2AHaTR7qriVDt9GY",
  "key24": "3t2n5nt88j7nq1KQgHENuvTwP8jkGJCnW9WhhweqsaDrEosYECRnsqeU2pbgzuEVPbZPzrqR2uTj3petFwMVhxfa",
  "key25": "5cX4GmZdvTThyEwSW8FH7BpAdd8GtLapPBvpDmPYqJxF2PRcfsXJkim4vViM3t1txpKSXQaVYnLuL3Fp1xi29R4J",
  "key26": "2CDbQWpgKEWASw1M17KNWo52RaVUEUqh95NvCgKSL75qE6WyDnpGcByWSnJZa6mb68owHV9jdmY1q9hiDY4Wy4BJ",
  "key27": "2hL75Tu6gXyyExzDX4kKjKR9gzQVbKcgYBPtxZPxxE4kAsNAdQ5jJ86TcYB3c7kc2A8BguqqH6MXu2EPBMcDh5vk",
  "key28": "siDn1we7Rwz1dkRMZyqdiKyytfqGoeKVbZpLsDnxmF5c9iqap94nMAXLUSLmfacgx3LWeM4YX1udEDgdYXuUsjf",
  "key29": "d6GdznFh5H8uhrbCKrdxtT6d9BkaxEafWnQhsZzZcouYCpndE9nQaJ3tu31LD4TT6dDs3CtXUaS6qaavbj28Woy",
  "key30": "XeioZgqEMYHhprEbTqc3PRQ2T6WP8UmdJZKmDMgs8MKDdJhazULYNZwoXA957uaHKpX96ZrfFBTKCUbnh3vBF1P"
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
