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
    "2CBWqri3wiCF4GJrdoEAuR38nMU2cwum1wQQGH4uic5eBRFYuug3hQzinxMk1bn5pixXJGM4QK8damLtHdMhVp7f"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2fGUeAviefXVgT7tgb7VDSgz5zWty5KKN22ZnXVbCi4dKJURpEHpxqBgy44ybkXpGjdTx32DZzC32yRf4dabqQfu",
  "key1": "4ocHgsVkugJGXdBKSweotSvovmFPmiPRgDcAwDwQ2bHSLBWhFhpoD4oF1BDyRc3Dn2AvWLZCCS2kMFvNr6opVrJk",
  "key2": "3ug4HHjDXCF4VEXg2RfuUbD5BNt95EJCzbwpMSKLsJsb4vHXq99kFcwB8yW39Dt2KgqAo7ChQUCfpaKQurMYa75q",
  "key3": "5mg7b7ZdLK5sQ1qr5MJqbVbDwUvMgxYmvTqTsvLFH5VTNnqNPEgJ37Li9NjdbET3xdp8JFJyc3gojPDW8QQ5cw8n",
  "key4": "3XwWpiHsLQnmv1xGU1L6qdXRcG7oneK9TCotJZHBFXUbuUyzBB4oEqsdXGBoYqp7cWkXUzDqYeP1JUafAxDPKo1B",
  "key5": "4GgpkLDqbP9WiHovxRvSDtwsFDnsQ8uxuTy3vsmCmL844QLz5XE5oqmAgx4zbYLLLzLbAJrmLtHoTESPhNTgrN9G",
  "key6": "21nDuRhaSGroV9JYTm4ifCGtoZRM9Dj6kb3yFZBmh4X24GSVVzHxucvcMEACJ74PYRvBMj6xzgJ77AXVExwYh9Hc",
  "key7": "124vZRfnBtkUoCXh9MBo54LpkfmTjabEjNR16eAZmegHZ2nrrSSGNkyuKdp13tA63anpzCXyaxJ8H8hEAYSYiEAb",
  "key8": "5zM2WYQeZnrVfvDS4LohJYvxpaKEcEPM8ezBsMphpjEbgoT5qxSSCWo5SRkDNBqQE6B94UQUThAEirXPEfjSCDb3",
  "key9": "3LD9soXf4Z1fG6mCcDvCvf8A1rfMw7US4ehRKwcjvq8cagvuTrz1AyTjrZzrN33NzZWxYP3UtcKBi4sDfJFhdhrd",
  "key10": "kJTMGoXervn9BVxzT3wJ411oHmrE59kVMeToGbcwQjKckWmguyuKF5PdpseEcetEb2hN4Rsh8LRUUhy6svqs3xJ",
  "key11": "vFKKpb82taAHGWxuVFDkKVnkW9epBv3e7YrNUdrYeXUFCD6MVNwak7i1nLWHGHhYQ3fnZAvqivAU4k9oEVM7iNL",
  "key12": "3u3p42xJmqutyjv4GYjo99HbeijHsFUXExvFMJE7byxh7xPKVmybz25BmEkGCM5at3NnzhYrH6tUWMYyyeB5yCCM",
  "key13": "4MuW8DcQmW6Ta33TG11vq7hFNYS2rDYG7UrJw4YzNCFXTsVuK1Pou5CUq9rXMzTHREopenSbDbxWY1rEoRaKWkiu",
  "key14": "4J1Yzq5zXBZDHEfLaBEa8HKabKq56sXrEix7k1R6SKjku6jem9Am9ou8xBaeHjYMwzffRU44vkc5n2cYAwo8sEJG",
  "key15": "47VB9y9FxNCTy9ZKXKGAaLWe2MSQjh7CDXKKAXj7SvZBZtVhDVYjJf1RUqqC8Lk34PbhRpUqtKC9HeC11ejwJb5r",
  "key16": "543iZaT7gKGdvP2ZU5wHYXqxowf4AzpBeGPV3viMuxyQuF9jEAPbuw98ay78Nz4mn6h9R7C67QedRcmRhaQD9Uxt",
  "key17": "2PpEXpxLZmLQHAodEyHDRvUfmBH4LKpWhzC6S4ccyhor48vsajwWfhWRfzgrbAL2xKbR72orDrkJcRkjQyEtWosA",
  "key18": "4evmV2rrHEYBuYEAo1bQ1bnG3YYnJWcmPYuSBJUnPF12hRnFg8u7CEvxucDLyTQjSpA4prsGeroammJFgcFE8mWr",
  "key19": "59FHN3YRAhPK4VRYeYhsCkiFGofJwKmJxiDCpPLNvL235gK4BjmbXH2EtBu5D35nb1GJztdvuXR1mpFWvJYSkmNv",
  "key20": "g6XmFdJHVMwgxYL8tCisupWVykvSZKckoFhNH9oaRkCMWgGao7pKqc8JKT3ihGgERVTSzu6KPs6o2PnhV7p1EZK",
  "key21": "SPD8iqg2gj8iLwEyvwv6yzskjdWJyE8iRfj3sxFF5pU43QtUey2cnMHeXMtKtEMTV3PoZoLcVY1zNzzg1HTBpYK",
  "key22": "4ncHuxVfvKP851MgEUzGnGBYjUtd6237EhtynuRVwGzB29NN6wiQDzb46VUD8se3KunnTt9q1KPAn2rXYfxHPBDJ",
  "key23": "58FdYVpy9NqjbpLv9gj4ixj6Ycmfs4VSC2LTAqwETxtZ3VT1ueiJBne4qCeP9ZhrFsgFfJdb9xvYMRb2w8fidGdP",
  "key24": "4YH4Zq83AdRTZ72pdmJVrwJsVhwutnMHt5VJ92MN7bZ6Ac41yz8U2mUiJ6wPbQxh1rkqBKBxyccK7L6eoYYGK94c",
  "key25": "528gXDfwMZGBWH9p3WRxnNLynUU7sKfLmASSWb5rTxLwFe8pSKt7BPBeu1NDYbee9Tm7F7jJeRzpBNgjzQAqt1kQ",
  "key26": "42JBVoAkJbHpRRwAnfuaXCrjTceAGwAnkd7aDa6rsEqydBHjgWvp3tAEWhJukA1EZUGKqGoaveb1L3BPpWRPtekk",
  "key27": "5c3U89QNmQVa4zeENLAWhJWdGoEawWcB7ZcSDuifympkHJdogD3h5cAXkjvn4hLRmXRrooTPB3wYcumNLMjWxzGC",
  "key28": "vsPstUCTxrSXgqj78zXpayQsfGP43siQjEf7M2QhXvLgfw8aujqd4pGHKiNwRHxQGKpxbALd7ssSVmT8UwHhFbe",
  "key29": "QqJwi48L4QR9dHybSyMTsLH5gYzmA4TnYDJsJ1QVyEqkEoMVZHMPruKbDqoBQ3bqjjQkYZ59ewqxQAPnhjUtaYF",
  "key30": "4rMx4s1HtuVbM3Q4iurXL8sUrsuNXrpEvUwG95LNWdTP1LHxE8KyWf3kCndCMQbtBFxepxiZ1Nwg7dV1hdytqY8F",
  "key31": "3UL3UsXAJHsrpXytXXJXqCVpKTE96zt1MVDpJ1WHCoEkWKfLxBj5hMvBFUJZSrFuVhjqtk9k1Ke1gNf4zHX5scmj",
  "key32": "5t6NJ7ggC6QVma6UQPNZF1CJLtRgA78LNFKBHrg1UPemBrjm5uc8erYjNC9ZwxZBAkgwFFnXcc4fc6VYGinkN6zM",
  "key33": "4cmSN8cchKskzQaYppzWRNrTgWdNra8QqoRXSjwhbS6cLEuMCKEdHcHhuahnnHXbagnP91JyMvMcx8N9EjxryruC",
  "key34": "fyvMMSmWzfYtXH5wz4SaMjKiezQzXNrAYDTBbnNJMTASyMCXBfwFMLPYk6woFAdF9hSVkqJQ6YXV22fSqgDYF4C",
  "key35": "5yZeHDUBQg7d6w3Cy5w19owUrNL743o2exdwYcrLkozrFe8ngZbpGySneKEJmmybxpUMFedofR3bDEYdt9MvjVNA",
  "key36": "4FGpaCYK1d7EVDptXs6UYtReCQY7qoZT5KQYT2HQFjeYXC5AbPdmyyrkzSVeYCmRxt4Lt86tR6AUpdVVqo13M1G7",
  "key37": "3saikVcQPBhDpY2pM8guZLJMdFxk8FfE6PqgLizsFMRLmd6tv3nUya3ykxfVWc6meCzJgPm242urQcdSKTKzjQCU"
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
