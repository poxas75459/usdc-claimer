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
    "48dGAM1HYBkJbDnmF2RWwmrSgSJEVrBqsRoKwcwS9r2H6mXHDUqbQt48MecAXc8jWniBUNM2Xe3RxobyLmopPuhV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3rhoGZJAJgLCJ7oM79cgEVjZkkfY4EuSNy7UpuRPAYhx1NNzTwFShL8Kbud7icpXoYYhjopJuG7pYsdp1RuBfq9w",
  "key1": "4kcfHHjsocc3wxvyqB6FQWbahfMYey3WdjZvNq84D2JBiCgg5vQiY7yFDddKvawE7eBou75tEkYAritm8SKAQSmX",
  "key2": "54vZvZUxL3MfTZRSvjwB25nKU53mQiHckbLC1i5btKyUkb1uinRMw5svD721zGNHbkewURJEPozbzg7W6kNzXLFD",
  "key3": "4ZkucBk8mPUK7AtWUEiqpaGUL3Y4GJejqac81prNJ6L1mwsafy88udVBTEysPXC2tFZ1X5wiPCw9qVtpAwFFFvHr",
  "key4": "yuubcPvdWZktgt3mNkuc837fYHPnN8UpWJuE6C6gAQYdJ8iNi5zMbxaDsceXyG7ZD75UzDrkcuoVrjXmoCGfsHC",
  "key5": "23KbM7eNpBbU3kG9M35uH2hcSduYPnQJX48nocmhtCaZuQEv3WdRzYPLjP8czYgjNaXmCUvQNCjmxY5QWNKGDL1P",
  "key6": "4Xy5tErDog5jPUfJpL3MQnUkpHTPrUsdfYGXwXiCJUrriABMMAr8nnrRrufs6odnTwFNX13CEtTNfbTYyXA9qShF",
  "key7": "2pSuBV7hRefNzGyvBPiLCt4x9XHHqgp1VdBYzZj5pErySRNejT7dh7MoZu65Hjeqjv5LjfzpCtgz99nDbMNzfEGn",
  "key8": "4FfpCo3YiXVBMT28PpMXyfL5wuhhKUKpViYLdRtYngwFukrsi7TCDiA48YCvkJGrb1WkRW82EqeHireeDNS31qDk",
  "key9": "3Qwgwou6S4oSACVboQ72L9pmncB9MEo23ep9qA3PmqZcHVBDtqXXZ2GADupeDLkFJiZbD4EwbU1Ys2NbTtBYsVfu",
  "key10": "464XpUatVjdZ31xbZGY3aVQ71Qq6euWeNeu9WTb893qJNx5NG8BJndL3fK84euMpYu5QST4FdtYDcn2qkKViWbg",
  "key11": "5g2TRihJGdq5iG7V9N8irioSKXs8EwGpwTUX85Q7JJcRuFbX2mHh922xkjZhS39kxkTXJn1nC3Gg9NQJCi4pmhS5",
  "key12": "2GB1wVm7K1aEFAcHhLvnQaFe183KmGAH3esqhn7FxPNhm31vULQhrhFVUkYMrT2CqY1ZpnT3cLnZjDWuEyDaCxfs",
  "key13": "5znUdCHt6HHBbg5u3Wdd7xDAXEH4EzML5YnAA7UCo8sGbVY1QQBFGvBNvgB7T6uTSHbaQ15HLAUyn5N3KJwZTVqg",
  "key14": "2CXGKPSQxHrLS2Lh6REZmh9apqHCPKv2NR8Syg6Dp7ggNLaeibdU3PZwJfKYGSzL1AuRi2Td3P4AWezuzrtRXVCY",
  "key15": "2v3tVqDzqxF4HA2VYcYHdQp9PVsmEAbyp8HBaPWZz5twdojRwB4TpAYL9XKb3QVAVpBS9QbEtoPWRmzHfrQgJGQQ",
  "key16": "3XytZWK24j3gTm4UHtAz1Q9THqK5JoJz8N567biSyHkjdmr6SzEuUCbiDPbCYRLbQMhR11Gz4qeAjDQucmjb3o2b",
  "key17": "5ezaMkMhfFd9zPnZEEtPP5297uWaR8pavUFQfZRTWV6oEfM9vpFPNrMqYXTEvG7WoMBnTGwfvuRAJDEJckC9MhCt",
  "key18": "5tqfWh3z6Tx1U3hACBqAdUVeyp9bkbwsxiAdhGQ3be4oz55BMffX8GeZRYVqarxLV542BYnfxUwNwaQ77MqnaJQf",
  "key19": "43WdecPx3fRKU1kLpRtUT2zywJHQavDXsbj7TmURG8nz128kuGYbYEXdMCDY3mvaLzSvd8Zdz2YEykf6SFycKZpL",
  "key20": "5fMDoPiq5JGye28ZK3N5N9RTfLrkYj6FJTVgW27DaUiemAkv2pXMjnikVGhBhYaftTq195UJyv3ahBCKhFsFsAkz",
  "key21": "5QtTL8EAXEe7aJEuNNEo1Km5nVsoKQkvAKhyVHpVaTyuZq93utHLS4t5xz8Z9pmF4EvYHUP2mPpDLGc5Eq7oyVmG",
  "key22": "2d5yeVMf7K6cN6QPBKYQ2knSFakUGa1tNtmsvcwoGQpKeDUZSH4kPSg3CihiKDePikfX9MeMgJjVNZTfJw3N57x2",
  "key23": "56yytxWBa3r34idw27hu96EaiEK229QWgzcFrrvdbBYUTAp3wHJ5FvUyywXBzUcF6164rAooFDevrak4xhLhTUCa",
  "key24": "2wKmz1NVgL3dGroSuDQ7PNg2HAaSfNCaakTpMyaVYKN1BwuVVJgREeES9gWdDC2SweMUcpkAQbaHsCnZdGjyXXXW",
  "key25": "33P6EbcGp2PTo25bNjXAzn7qEPiofQkewAo6AeDVatPXnTkSPMkq6spfXFJP6c2wYx8VXfvMXWKuD9nXXoc17B6C",
  "key26": "5cFyL7ucu8FRXk57fD27YEQod9HzqTiMaqwtjbjq1QRENVC1M7LGzXUWsro8xLKTXpbmWdnBjhupzcwT8hUg7Gdv",
  "key27": "3tKoyAsVQZJuJxwKMX7tdx4hXYsVgp4Pxa2HvPPnzWseUssze6iUJF79DaWZ3hLPTYFReNcDpwHoCa68JbqHJoCv",
  "key28": "3gow1RNfTca5EuPZCLMYHrGjnoPD9iw61Fkp1rVPyCrtKBSfdQViche6m2F9jGyycNQLm5UXcwuTJoZLBbZsLMkF",
  "key29": "3keK4H8KGHM2FaLNBBS2L7XQzQY6DWBDNeeuRTkawdZRN9iMUMvEfaczgVm6HoVWpcreyuohswaZNDgaFbC7o5to",
  "key30": "4iDHZgM87C4ZwaMtwACuY3nWEpCDYNfeB5NGha1FJ5WT6L29MqTmqexdVZr32fP3M4M5Vxse6TxPvGE8KFitc8S",
  "key31": "5ZM1uXgpb9S9GVEwdMuCvyGftkNJ2q8kzYMa8FPS165A38zGEm7iVFW6xEfVhAaNG4Lshm62BJMswLhBiTdTDd1k",
  "key32": "2VoFcD9h1we416rxd47xyErgqQ64m87LpfDuGUWMkZDY6FpSZeabYX3fgsgitnDihmJtmmF3MSVH1sRyCzste8Fu",
  "key33": "5zL76ebGwHqTa4ZuwwfuuymgPNb91F7Z37cqDVE2MkD2c36byAe4kA4RPM3wwY6VUUPd2yjz7Uh9CvQLwbC56d8A",
  "key34": "5ta8M4kVgsqa7QXfwrB3qckEgYmHM2SCYtThAqT6ZKcsJjZekCGQLHQ4MG5tUkk5NrBtZX4X9QzmffYQz5zUKnyR",
  "key35": "3bLfVfiUa1ZUV8Kptgr6K8psrJZ3TuE3qm7prsU81M1LrXHwBQHAyhcyyNK5rLFus86bsejFukQ951VyioNFfs5H",
  "key36": "64tccfg6mJbS554NqTLvnVQFxeKNHpa8WRqmai2kcNyaej71JfrHuVeejm5thrS8KogwuKeeegiKtDgan69wijVs",
  "key37": "gk2qyi1J7ULkVNYhPfE8kfbJkjoRsXSfEPfZmutpnW2xwnnf1vPiZZSdYo2D8bhb1HMMyUCEWTjZYUwEZxgCTYt",
  "key38": "5t5VXgZc1Uy5HHbKuufbv8qzk4zToVRjHFztVNtz78RsogzUstWJc1PeJQpmoxUU3JPCyJxog6U4MYA1tPqqkPLs",
  "key39": "rXmkWCLpdnVdksNPSjB92fL72hWNgKk9cckXzEHHU6PJ93HdNBK538wDMi62BCqXhiudUjqs2h5iPKsaddQJfBa"
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
