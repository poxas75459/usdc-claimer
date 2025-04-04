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
    "36i2qsay4Bfe5KRxSpA8mu8k3cJ6aVKeLVJKrvo32h3zhhSz5UbRXb3kcXstUHL6ghdWhTYXkhZxktj2GojMxEBM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4uosZ4ReG9USx5Hs6fUBSHtgxWKtfJNdVhHnYktvmD51uXTtqXF6aEJReg4uqcRxXR6gqopq8JJSLVvbsbfg3kPc",
  "key1": "4NhM4njt6yagESGZ3qzJ6X9Sm2PYhPZanRQgqCHo2424yfj5yyqgbeVfzGdVc3NSGSAHtgHWV8QFwZVnTbk7KfvY",
  "key2": "4gewFagzFha8H63yzKxh2GK2Z49k2hJdgVJjTkat4Bb5keNkbuCqwwtvhkZ1LeFiUBF2UEzLzfVYi7akjgTyr7hq",
  "key3": "4zEKBLCR9TaoAUJpF387NNSTs6yEP4YTiy5WKYovTntnR4qjz7kqGeVbgVT97BtLrjn5Rm74EnGg7Rxzb7hHX5Qe",
  "key4": "3ChNQFMDoyo3WzmUV1CxqDj8xkswgcHo74xpS8ehtrhfkPGqYJ7APKFASm7nyTFEnguWt9xQ2NpfEV9Mr8YUdBPy",
  "key5": "3ptB5HKGUtQyKiueHQmTSnJ3wZMUL5uTpWQmHvgS87EQY1KSHYrvvSPpqWWqZCxC2znEtPa5auaEtSjpDELDf4Xk",
  "key6": "4wazSrkagzKqLCn66pydynDQUC6YWbyR3w1xmdBLqvkPTX7E2Cfr6CzbZKq2t5DWJ6nbmdWcFjJujQqZbBqqTHSA",
  "key7": "3KruUjJTK6htAvPk3VNMZYaWv4oq6W9XwcpW9tkBnUS51jjp6pJarHhpNCxFTRJvowoML31G8tK9fzoDE4uTFRfk",
  "key8": "1gATPkHYL7yodh355899LmPZf2fc6jgTmaf63uuf1bPG1N7x7KhDuo8mYk4Km4Wj2Xpgw8Ws5rGayaJyhED7V3A",
  "key9": "2auoZRj4Pn85NuDwf2dCNAYhewGBHwS5BmvZ1sNgSqUYEyprv5p6BnbefkrBZ44xXUDromMAti8onofhBLYJBhdo",
  "key10": "53Ltpaoptt1sg2TUH6dp92yD8Ws5P2ro4E3bakaBx2Csz4UT3ZcJNhMfKSQPwm9CNpTLNRPYDhmunoQni6BFZ6gi",
  "key11": "24opGXsT84meqFUF24x6Mb2QSRLmDMgzJJ3aiXunNBYCJukKytKdS8WLzascvAzQdWVeTb7QXXHEpj9uojxxwFHv",
  "key12": "5K2BsBFRpHxCdK3rz9MTstSz6T7LaDzvpKuke8i7UKWACHwkAamqFdMyqvbrhk2aGcTEzmCiahHxajscqG5dbJXo",
  "key13": "4b1Uct1Q6jS4UQ4SFnijcfGVgfiFthbJYPiickyuctELWTHvbko5aUPDdkRxjgSxUUm6yDybzRK1BeQKao61qNfb",
  "key14": "65jW1jPaqpruiJqZ4eFgwYL8mHgsHWzZrjQB22pksiBkNpMTWwJYBVaL95zc1ZHAiiETN9A8nZ4GDSbEsuUgKN7J",
  "key15": "eTayWzZShyoveDsVeQuVFx6DuuB3RyivtR2b9o7ru3Jg8KoJaP4GqDM7qYzyPWMxuAirS4wvS9wm3MTvSegpcHE",
  "key16": "6299g7KSTEA5kPeLvfsTB1Ss5NTBnuEGwBBEJs8XkrtA7eydQLjAbAtqBExp3BHibUh5Mmi8x71vSAgePhStZB8c",
  "key17": "34P9Z5yDyTky1K5hKAVP7XbbUAWghnWtK9UGUnTxFXbbHWUmVzq6f2ZBWwbHCKgpcV3CTiceNT33VAx6ZePXrHv2",
  "key18": "2pJ8t1YByQ5XRDxfNUJjZ658y2pf82Lk89cyfzEhThPFHgzzi2qaz2GVgVmZX9zCShoJUJCFGHdS42SshExij3EV",
  "key19": "HeJQud9Pbi3GZs1AoXCdgzeq68Hd5M6bjwjmsyohpbR9gw5fqmzVhUTrDSDa92vqXcrQdMgRNQu7C2tHgZyJfuU",
  "key20": "3keeAokc5xfoCQ76DRx6XfVnWKykbLbNw4x7nfFG6hxqosSAffQpvrUVpVJvyz87XV8qJEFLf9pDm8n59UsmUeBr",
  "key21": "GHz1SKxEbiZe2wuuPX17MFFdUjMTy8cXVkBeWSyo9pVYZuBij8MX4orPZDbZWjmhXaiZwnK1TEgdFQphsCj94us",
  "key22": "2345mPykfgUVpQB47JhJZeJCVXSgmhVewPtTn5ULpG5B9jUzhdqZTpQqTBxZnVAsHGJdxoaAJgWRjXgtfuWJer69",
  "key23": "2pEMM96RrvQyNUUBStsXyFUqwV9tupgidp7Jde9QRY8An44iRfbCq1C58xhcvgaR6B8ACk7wUTR5cVo4sYEdWgaq",
  "key24": "3EdQV9u2KTv5kzqzSNyYu7d5zQRb5V6pnnVqzGKLTdyjYgPinxm4TTmJ63Q3U9RD3EPgHyy8G3XhSngoMaYSd22",
  "key25": "4B443ePPi1P686FcrbN4SigXyWc44wzEtWdVYAyDEHS7hyfnpdPjAgsNTrCaGNAguhKfv5BE1V5xtuMWgHGzEt3G",
  "key26": "3jXyQRMSfHwAoLYVjm3dLJyrn4ZWyLRC6GshtWnCsrrksSH3Mm7ZbRvQTN4Ck9658Qoj7eur9jg7gMhCV28Nd5Y",
  "key27": "25KfShVoGYFoQZR2PdrS65T7iB37gnrCj43RbJNi82oF5eQpofzahUUN2iUrjZsBZuoU5S1wKmpXeypewwGkye62",
  "key28": "2ZW6d5EtRzDJoCq6LKKzn3HF6u75JJhVP3yPmyrsJB4DmmVxHHZgXk9od82bTaSgD6ftzubq5jgLhEA53WeTvc6V",
  "key29": "3KqreCPiFYg6cPnXJaZXKaG5owcX2E7huVjVsJQNPAroZ387psbPucGKLAjEKsTgwz5wZEG7WnJAHSWU6d9gCtwj",
  "key30": "4shBvWVU2dDsRmgGJYMTixuoj76eGeHYqUhjfCJaKJf3qVeHnZTLKScY1ut2RoTJYmXzKzu4aSH58vs81ZpUKZ3n",
  "key31": "3ZHv1PHZTzRF3pJ4PuN5Fhcr3QoZNBjh9hFwFZUg7DNajKx362QCxBSAqBzc9tnrpunvoaSAFhgRdzMuDvJTXPHf",
  "key32": "5uGS7mm5knYYLz6w2AQNuDqjCYDezqAsSdty83ijZFysd9KVKzBoMPtDQKWfJEQfvrry2bw5gWkTyAHn8K7YXK54",
  "key33": "4or3hpX7vERYkKhntVT9WZQ4eLodTEddShKtJGKzU2Rd6eVpqsqDwwTfHFmZq2KWZa2Dqg144wSg6cPZ1GKortkB",
  "key34": "5uxKy85A9GPmyNgKTo14bYbgYm8Y6j6ThtoxwTq5uFkYU64FCHX1emRYVDgYa7R61eVWQisVimRywoBsKd1Pw5Dq",
  "key35": "2MBN3ELpnpRPscwngzNgCK98FbVyazWi2UKprTQqXAz3Ad4ZW3LWGfHpB7B4GSCkS9swWPScXJf4vjyZ9D5m25hR"
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
