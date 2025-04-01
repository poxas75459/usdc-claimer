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
    "3Guf5MxCUwtm7iF4PdqXZEzEy31gQgXNk8XY7amCYsFYxYcsz18VN3VrqYZRTX3z5KLqsuLMiJ69SeC6wxofBfgh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5tYBBhimayL6KrLnnTz2SDonus6DfTmHCn89zvuqNEjTg53XLcRoMTgAhdvnjyxbeSMjStZrJgWLify1YMWUgZLU",
  "key1": "3eCYfeY2EkoLkaMvr1F8mpVc8qYTrMSHC6hwYPV5kCLTa2zWYrdBvARZ91uQBwEW8QZU4f7UYpK4pHQ2k2cvPMCF",
  "key2": "hgAqjygeqE1BpFoyHMyPH7kVanVW41znoDyrEXNyasLaj8wFRmJsusyyDWQKWpWD9D2P2ptYH28FiTfXVSWhK8Q",
  "key3": "5pguUZ9MSppf54whFkHsPypH9tqo3ytQKkpaRy4MPSkcpoXw1pUct6vWSsjPYbGt6CxMb8DAx7JLBZCPh8cbhPS5",
  "key4": "3p6dU3gHYsbxQ7aBFDBTSfzbxjn4uXg4ExJgHKyyWUQvfHrKmmiqtDScJj5fy4bQm1zK7qDTpbbfQx1shjeLtFPj",
  "key5": "4RAh1tuBU76geD3NEF5GcUkaSbLryYBAyQ1D4BC1QMhG2Fyx8iD2ZJaCxsiFebCV4uJCug2otf7auAVceFpp8whG",
  "key6": "5xTNNxKdcEqNsJjsZYZL7nq3T6rBgkKErumRbUujSXZVDvQ2N3qJiGFdipfSmTBP5vTV9S2YjSPXYNPPGJAm4A88",
  "key7": "5b8KQCS51uuCfgfnxH3hXAtMhQz87wZoj5hXp2nfZTxWKEHKQD8SY2pQ1m8HtYcqjz7yHnwKySNn6gb5JQ7xmnPF",
  "key8": "3sstaR8LzgTxH2kSmDifPwECw8N7ViWPQaUENepptLHT9roefHZn4g2XFvnWdTA7neA4tcE7mzsjn6tkZLBBrptv",
  "key9": "XMBFE9a4SAh6B6Drr7Bj1TrqHBjm1PtcqZPqKhynxgVU8Qjdy9J3FaG7L7LU3JTxTokARGYtub4kGnjXBQJRsdJ",
  "key10": "4y7fqyYQ8k49UGVftctBqknD2dBdCPJ7bU1ofE7C2HXEAqZZRva5FvxPv1KmXoqXQzAdS7Fdj3ixEDm6MqKCcThQ",
  "key11": "5mC2z774NxXgbWs58AFVTot89zXBzbRLzuoSQu2BEKBJfhaYxZ8qi3znyF3UCF5okb6kKKAisiYUv9u6ikkNqn5N",
  "key12": "4jmpTrAiwNvaDGybiyBCWRLftb23e5Z2xPgkLZJ12D3vB7Zdgmo6h6mrE45aor8mVqivH9UzaTFVxTgCwz6rcRVg",
  "key13": "3xjBg6NHiqCq4t6LqjmCTn42wn2sX6k6nz3DYehjWqSqf6sbhtHEajfeEgemN1ZkD7Z3uFcTU6hMiLomoGwCQmUh",
  "key14": "5aP7CuPyXrqZ74ZjmeHoEFuUb8XTyygJ1orNMo6a86p1NMdsH4a99WGNTpr85bNxckR65zvACArLzY5VQgzhp6y7",
  "key15": "5jkWXcT6FLGpMEPEv2BcVw1EQbnazT7WZnTYXUiZnTiZpN48wvmYRCLuoxY1vYii9n2yT5xix6siTNbtA2ogh8vw",
  "key16": "Z5jsjEu6uWL8sUwo63pXPc6YsAnpNEQGoH4NnW9D1ccMzoLRMYL82RH2EtWn3cKPc7vyTxf6UP79mTLANs8zatP",
  "key17": "2hAKCGYHEqAQWYM6t9UycVtUaqf7T1inyXRNUtYuUzMvach9RMNZBe3LYQwv676WAK84swXbqiKCuLdYZcV8UV6n",
  "key18": "3gWBcJ7H1GAQ4pfsNRDgFUpof7dKxD7zogaMD36FNZYdfJvQEWo9TYUqNrZ5zbhmgPf93Kig6o4Qq45cp87ZAawk",
  "key19": "3NxegHhqNtgWcZNWtaEYEWUWypi21jbPZQe8hZFkDmg9MgtwS5veoboRHrBxUo66WHeXAGQvASF7RTMv21iZcY8Q",
  "key20": "4F2CL6rEeZT2jET19iytTfPWaBGvR7vhLhADTo1YKCV6JrWGf3zt9UVEDDWbSXgkHU5vyDdJwZtskWH4hEP9Pn3N",
  "key21": "3o93rUoL4izrsQkR4nCitGMsFuWakDJ9S7zDUYH1QVsMBYizpqGAho6fzz26o9wfum9JUWTMbQZEWwYxLKgQg19D",
  "key22": "4eXrARJuFXua5gmtGYeWRZS5KKcm57rLZ5TY6UHiB2gwp9i2tdibbvL8R6BP6bfWC2ouK2P3k1k7JPmf5CNxeo6r",
  "key23": "2CEYrhctw8Ve9k9H2GmqLvFD2NLr5drjRRubR3nxkeDShDGsMuUrJSmrqH691MNuVFYYUcdMSof9EBmFeSJYpYrf",
  "key24": "5NMRvQcGLwPbxk6z3VmCq3gZZzYAC3diwbeKLcMFeHRkwGGkcPQVBwxfzHv7XJzNbmqkywCUGadvXhKbugzaDcRi",
  "key25": "MasVVwWHqJFSAVped1PiaMvpybUWhzc7zjihNvgrkpAMKzrjR5cHi8mz9TpGCrhEKqXX3V46Tjakz9ptqqcSKDK",
  "key26": "5wWU96dh6RkDdh7Dbnxa6M9e7i1yRq4VHh8RYqQDgLPdyvxoQY6jnS2p7NG7WAJ1UaRiDUtfhvFDwd3NsuHW7x92",
  "key27": "2o9bU1CiPNdh2fnQuwEDP98J3NusNHPzJrzhS533vorp7Rmh3FGXDp5YbeFSEgPfSPRrvxfTM6Qwpu21SMKHcTLH",
  "key28": "3obXpwAGcv2ZAJMTpzxdi5FsFtJC2w2kVjS9y6jfd7Jmu1WMjk4BeVzWoaS9PEqLJT2uPuzMBZMXB6xz6QGYx66a",
  "key29": "KYvjCWAuJYAnGrEYREJyWEeoharkjnc98EKWeaM3NprycVC62ijsHwuDs2mAw2NwUTgeNy1wqLcKrFD7wiJwFgQ",
  "key30": "3oyq12sYEquj3TFYLsV9mAkBJPrYuX5enNtEG1zU56s9frSKDyC8ttN8EsrjYbhKyt5GYL3t1M2tAA5P9AgpcEF8",
  "key31": "AEazM9ffGH2N1ccc5aysZLBp7aCbu1G3V4WgAxeXis9qRV186D1B3NCS4abTTSu2YV87QdvmD8mck77DgaRvBxp",
  "key32": "3X76zH19gLkwSxEHQMZzTYKmoPKGwEh53za3Pjr59aoYCQf7C3QA56H1kSvqiLebBsDC7e7HLZAL43G6SCEpScuF",
  "key33": "PgM1bL5QAW2gvWsPHADizDgdY7cbwJHZ9A7x9UE1Z35rygdXdmBMZXaqL1cRyxPeBYui7TGKpVBnLKLVeYyeDhX",
  "key34": "2rC1fMPVyxKg9SeFkgYn5YvRBdNszRvtpw7xsZzzg9LtSApgHnLaUADcuTjV9fDQ7yWtrdqGh8SVxLShyJ2xkigx",
  "key35": "4eQGQwFyDpPJFXeXjFraLugJWKqPvGyGEj3NLhqVKNtGBMhKyq18dkRNK7PWknMdx6MjoMy5YPun5RtzmjJhF1yR",
  "key36": "4UooDBztWVeEHbZgdrNZgyDXQ9pZBkv3R75DMwAoBs6H9iw9xw8QzsnBztTmnHRUkzC19LCkCoXKwzpZFfyawLbE",
  "key37": "4D6yyouTmLr5SGQbp3mc5WqtgkKJwVkLq8AiFW2qGvrXnakhkdAYPyxx9aoMDiq6pv6m6ZuukfysmDJMCwu7KkCH",
  "key38": "2nRTRHUvefMCkDHfcYFVmxNPXmSs4REgE5JHS4aDqChhe3GoVkUQevVwbAofwB2h93KL5HVF5sKt9aBJfcLcCVuw",
  "key39": "5Nmx6wLymp33BVnY64JAoBJ9yn5zKtUxAKApYX2yJVsXUT18fhvVFX8PWcngpJk3LG6yRqKXvqnBtx2Hx1Cr4HiS",
  "key40": "5aTyeLjEUZuhU6gV9zeVf4vqUbr7hwGprUxkPDYHb3rrqUdoQXzBZ1S391TqA7fACvLbTd6zsBjikE6FdBUYJUtv",
  "key41": "swLzxwMNDGZbNhFU7CzqQu5Q1YLhDeCxLRvDRwwXJxQBmBmZtRRXkoGR2q1CnVxg8jysovkDuGPRJS74MNcRzDi"
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
