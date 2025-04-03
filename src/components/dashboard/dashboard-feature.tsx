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
    "2oFkQ9MmgdhpckFLfSJDb6Zg1oh4HKdeb4wCz1pCAHBRE8yackrSfmQR76GHmCc5ZXraGswe7MXHyTSkrchagX8c"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "585vmxQ7pdsdmLd28PhwRcqYS74nzmybBJKhvxiHErZabxydGDnnVaRN2YvBqdPNpe6LNzXLGbBHkRuu3D5zWMMs",
  "key1": "3bE4ML9HWygfY9zAQFzyYfr5kDvzgp58YDdND7aVVzXB2TEJLVQdJeoBj4u3x3E8HuTEfa9qUPEmkFBnu4UpCNtN",
  "key2": "2SkFQSfE5JttyL7erkHHAsNTKzQmxPwLyz5F53TtpMqCCMuLmUDKjHu2pQRzwwHwGcKSRK31reWsrvH9DcAHjpg1",
  "key3": "4f9oenEkAW7djJwCBMiGWe38y7aJkJDaHMXStcWLpNnK6Txoh5sK7qqK5ujeS3uJTHeCL5Q9qo85wzeYMQVFgX12",
  "key4": "N3fb9N4JM8NqwDELPQpR5wXFfrEynpWU7b3BkjCs2PndjrgxVUoU6AsZxdzSLUPADBCQndq6DfuJoWLBw1ykMR8",
  "key5": "3Eo2gkdfoyQmcRuTbHGWjTgygautHN4ZEJjrbMqoTjcxBTj2fESJ3G6r3z1RVXTvF47Katq8X4wszeHmknEUf4AV",
  "key6": "5jHL2h8VUZgGUy8MxDgWxUoy3wvQQr4PikxoCNkEFgjitCPx2dyV1kRVWWTVp3Gw6zrA5NvckNS6scvBuAthAqHd",
  "key7": "5NniTnUR68ugRUeePtNMUZLbpWVSMEtfuMsybKPzVcb492HjbdRWPCtoyLVdAAePQSqRV7cefWvEGHtc7DznNDd9",
  "key8": "f7SYh7EmdVwkvY34f9h5yoTzqSGKPVS46SBoFzQkJ1sWUUmSFNENQXP69t2ds5mercuuxdWJkf1rWwW4yTyu5o9",
  "key9": "3GaKcz3du8FRUgyhGFXMNm2fHNxvwQEmx8AzH1H93zXSph1t1bdsFHciMhVqS616GZT1WDNJjVqZhqExhwJKFBFH",
  "key10": "3PLVQPqnNAW1Go35N9TbsyYEDEm3MQScGbDQ3SwWTEjaZhRE4iKoRqH14Y9qNzKcf3hYfYAFpRKvy63Gw2yLYcxs",
  "key11": "5QSkc5xsHK1fj3cWWfUg6etubZvLaWn4cPRoPosTEqZUxpYHh9W1kThjG6DuQHZPZxNAYWGZgvDr1R4dbFfg4hdc",
  "key12": "CqCM9aqvjJxoyt1iG7UirccpJPeu4Nu7XCWTyqSfAqcffmdsj4Ud8ni2Q6L5VgYouFfap7RZhQpECUAAC9uvi4g",
  "key13": "2dexRCNvtFoBxRy7c3LAjac1HBJwUvXSKXkA6jqUBbvuN7BXpQotbxpp6kRAPDqW9D3QVJt9hkA1ikzHURCLnChh",
  "key14": "4LYRv4S599S1WNMkZkKSbt9dAH868h4xZgxbKzfvzWKhgF5mx1wXeFHNDiwKoRXt49W7T9L2yEojF2FB569f3s4d",
  "key15": "5hMU9PmxjHzKfDkeSJq6Lvfm2VUB8hBj1dMajPeB7N8Xd2fQEn9Szt7SGpDxdecVd2BhfwswVJiNkMsGkxuhuhgh",
  "key16": "T5UtwEq317TKBZoKcJRAgguoAxJFjUgx5wqVPwQm5BgchMDbs6PQs9KA3amfvrQHodL8gEvC1H51dMqxeUNcoGb",
  "key17": "5QrRi1WRKuPzc42pZLR1oNjX2c1WJ3SfymQWC6BqRe88cbAew49K5xCTB9wd3x1yBLXdyVDoR8C4scXa52FZaKUp",
  "key18": "3rKXerbcYF3KfnmqEc9XxyQz7YUmrCyxrDRq1WmwZ7QsKQ8UmuvKM2koPmpQURZQH2o6vQwtM6AMuVhjT4p33G4s",
  "key19": "61v5UaQyvcPR4HEwsNLqLfKjFW2ACZfYDZ4BuxTMyJEzXFBWNZ92UHj5pnLThsP5m7AfNFcsGwzcbhMCdPzQNYTM",
  "key20": "2Lc7iAAkWjN2ZgsURCa47Y3STXm5gN5XPYgMpTYGxypwc34NpDpsciL5zP4B2G26HegzqTp1ezbCV4yp5AGDBMWY",
  "key21": "49vmtficX2GTQ1UsMesVKFVx6tXzxAb23RuhgMbKct7wGQLGYdXKByA1FxU4qeXe4UgdrMG9TCJp52QtY4ZSZrZz",
  "key22": "gfx8BDvtmyhkkvvcjWfP1HKm2BXUvNgNBMNMREfgVwCWHrLaYhbuWMCxDAydTHqXPb1CwCa6byVzyoLx67ravNL",
  "key23": "37YtavsuTyVmrWx4nNphDNsuUV6pmZc51EeMRQUs5tK9PCrEkGTBxNixqgUCwUHZqcsL9xTuuG75HT4mJ1aamzWr",
  "key24": "J9uVShR2URDoNhHWDtR3B4xhA13JA37ZPho2jcA2jCbCWgJNUinUHcbXSibLaXQR3n96uMNfxpgcuxFGS2E6u8Z",
  "key25": "5QzwoRdpTfysv7zYJGj97Z49aXQCjT6NLJ9HFKoYWkrJ6tXcN11ok8GCxkFLjigJAChPdMtjJki1ynuuQGCrWExF",
  "key26": "3bW7XujGFgnaiM8hoPt8x7Zs6AZV3oGhTjSQ3LpcR51Aa3n71eCGd2EjvF4BfphenF4GxvYWDjzC9bRdkohDVh2e",
  "key27": "2HE2146MSqjPbSmSsYjpcN6omtECGrMuHdwjMrcJ1qMJwYtXx86xAbDwo7r9wtz6KYQ6aNpxXHquCzMvfktdU8L8",
  "key28": "59Vg4sH7Y57Un8CMFQuTShYVMRGuS3Ue2cWfCpYRPQF8nPavZsV7SemoAmLc5x4HU7dUSJySRwM9nksWiDTWpX67",
  "key29": "59BrsBML3LetNDoDue84stipWtvKiif5c2g1Rb5h8zYZKFhYyqprnxRZHBZLNuRqLLVk1RDxdtswrdjNMmwrzACv",
  "key30": "vCP1tvt4gkfZh42gXP9T8o7nECDhAGuXP1q2Ge3sbfmMA9teDopafa7HQMhNQBgrXedprGgzTfPdFY2v8WEh36w",
  "key31": "52qwizsNLffpdtZo8kZJfHGdE91whFfoasPiwSFhbP2buKBrw5GDSuS2d4oqHKTdubn38g1aLeDDMYCPsKomaXFi",
  "key32": "4zPkZw8hijCtZGsV5x3szJ9PeY7WfzAssibhcwpX6zUXdzarV6gWu4wfX9AC7ikYDthuYXruZkJ4kt9VXbm8J1NN",
  "key33": "3FArNqB4wKZukPzehUgveuMDcrtTKsWqNTbgjigpssMiSLjjmKHkM3m4Czfuj8kJ3ijXXRJuxr9qgk6LgoaikmDP",
  "key34": "4bTs5g1vbp6psi2uVNHQUUcCT8JvuRNxvb5GP6HcGeCg6MHYut8MvGk4eRDLmMC4EzRZBKX9nWGTeKfY5mSbT3so",
  "key35": "3T21mBCKwCTruYnJRVScPWrVHpCgmG5j61ytUyXfdDe8yf34GbF52qPTtiD6RB7QMBtL9bHJrqPYMHSnbuT2SuQc",
  "key36": "375rB9Q6DHio36jTNTkM5NVsMmZcxKw9AEeDmyjkGNc5SM2q3N5tYUdR6wzJdXeAQ255kgP1PwmPpCUF7r3QCsVx",
  "key37": "38eqdUgeqdW9XizM6k4CYgVSWe4jvhhpgEDBgVqgS2by72EBEBLxSGt86zMqc3aDwKJ4fBRJP6Mohvz7D1XSij9m",
  "key38": "3Mnzp4dS7frvvDQiEcJdr99tgREJK3FQwWoheCkJk2vMCtkfoRPyMDqSyXJgtRRyyd1XuDaFZ94FeZwKHgWsXEB6",
  "key39": "3EfuGa3qYMNDbiPKdua3xWA1tNMbNAgn3HDpyU4Mb6WG43X1XLEmtCnSurBDwGLGrGFAkkQPZhnwThVV7TBXTGCf",
  "key40": "56PYwyKZYXLpVwqmePinFj5WQ7Afu1u6oNbUMFfrB4uYRRywCEU5gTMZqXgxg6RhV1QTEidCCuE4eKMd8mLfoFAw",
  "key41": "owzJp8Rmbsa1oPy7veStq841x9JSzEgGLKZUXiGMouMhqLfPn24aBqcu7Nw9z5HC5mg5H594m4UjLnf6PNMjUah",
  "key42": "2S7e8YLTprfJCw3tPdYRQHeG752Ke2Sfax9BJ1Yh6FgmWX2wUM4p4wZe91YVQHMxrnLfwbp4GThLAu4evkTtaVxv",
  "key43": "4C7Ybe9RS7PeQ1BAtKiXGQjhVFgYjgh2SHdxzf6e2xKSh41NAmWk3KFYCDEWd462LFZMjgyd4n2RxCboK3ThSaKA",
  "key44": "5RQBCjMdThW8w2Dm1S5xeUkGVkd4nLciivgqzf4hhGupJeK915yYXPGPdsZpTGQDqkGWfQeSPsuXaACHR2Z7HpsQ",
  "key45": "n5EesfBbxbL8mpz2SPrNizhafjfagQL6covXmEyrUzhC8rxSpy3G8vfFhcTRtQJd5gjdsAasdACCXSG7UXNFeMW"
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
