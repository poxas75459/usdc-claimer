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
    "32YEvGi333fAxjjYjUp3bNXCreZAF3JXQ1XSbQCxgLagCypQhqNAczqxKcZmCvJiKqaJi6MmwQpPLeofLE8J23Tt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3zkMK6xm21zLzQkWNy1uYGHxzzHLMMGqq7R7hjQkkXQqDmdwHVzVcQpEGYuVm5bGWVvksggN4WbqSXxdDRsjYjBC",
  "key1": "eWgox9uuE7sgqg5TntT1p8wnaYMqhsAQZ9LPCpqu4LqNf8AHmroaAnh457CjtxeokBs23xJBEVP3FK8WptakwzY",
  "key2": "66WpKduB3cSGD8kDPs2Ejv9SqtHiD6CwwYUUsfYGaFuzAP95AQHzKcKTjoUcAPBydVBiJZgZh9seZWwDQGK5j47D",
  "key3": "4KA1jrHwysHfivsQDhwoaeTL9CNeZQPFiBfHxPNwGrxQTmV3LniyGZ2Uz2H1s7npdW9DpzjyahqF7WP9E8pxETaN",
  "key4": "65ARSH7BaiBgFXvj4WqFhvvi9jAQ14V59BtSphML32EvYpBHNwrAo3aZMrb49zLEXVi2nQh35VJQ8YkTg2rDx3hz",
  "key5": "2pBQSrzFuSgKwfx5vqJ1QPgDJd1qqDPE1hREpJ7y9BeKYpZv9zyxnFJ7C4NLbNDdKsG28Bpni8WHwSHqzgQF4izk",
  "key6": "38aWNi2gEjkpB94KTLnikDqqmc2NrXmaDNT3wXT3bHErZFY1gmnvEyr17P9HuEmT1ME4wj7EfSfHhPbL9363AhX7",
  "key7": "5arCCnjoPQajuGbdSfAYyoVBpVvTto39yNxxvQ3QRJyNcExkiqEs2Ji6vCg3kp5vWJGUqvmcjB7bQGo6jHQn8eZX",
  "key8": "g3vtmTFpV1mUN4p7kv27e9t5S5BTDLs9Dzsfk1NpvA5LxS8h6ccK9FU1SVasrHujiky4tpVeWgjJnmyTAn1Hnqf",
  "key9": "3SmVmcHDGLgFMcMmhghtWdTEFT4u6e6WJyJcDBijUKLs63THgvjogY1CAN8HBQRahgT3TirdvGPMv6RFmWFdGpCd",
  "key10": "2m8ahkDcZWyhADQHZJYubPbAuKobAvhjaVMQgPoUGUFmWHBXREjRzT74P7kFeheGbY6eimA4mUnFzMHHFrfCrkMx",
  "key11": "2gMUkgKPojJC5WZYPkNVU8okMs5vFW1jyvRgFBrDTu3YEPqeARSt3EtEnFhZPAgEqojwSiCFjhr9uzm5io3DAGxF",
  "key12": "2QGZVPSr1bdmZ12nCdTG58pRH7j5pvuiXPRsn5sL6NzEeWXfUkU6z8U4LxV2xWesnqDJikWsEKhVaGWCUrj9GN93",
  "key13": "3oSZ7V4EtfFLSCdpvLeAQeUJSi7nfKpxszmiCo8zJmCJvqEAEKdaQww6RYcwjtyKPuMGxkcAYQt5cJu37zuWw9rx",
  "key14": "5SLFvsvogUEPnNyG4GD9eKUqjkSo1xCRch4FTyp3puWJGtRrW1MbR6HmSybeecmQ9i5d8eZjVGCdQsU3YLbFETMw",
  "key15": "5SKu6S7kMwAPW2fKfwkLMAi5R2Sd3nPss94RFQ24KgkkeuZ2tqqoSueBmdJxyDEXwKWKpvj7KrVk9E1BMzax4PMH",
  "key16": "4Jp8sz5TNszw1VskPDKrBdSmXVzEWYt6YWqvrE8ZKRHi65UBfsMw21oKsS7gDWaPZJBrdB14vfv1Kg1vaQr5HP2Y",
  "key17": "64NmtxbZoofMysUZoAaDvJsfzz7gnF8WtYeNJySo6uDMKLDvFrVd93PWLqFrbHYrW46QAL2iU3J53ZSacx8EHyjV",
  "key18": "5MoSPrZFzbko1WXHS61LEktzG7zdBVyZaHbUekZ2HCxf8TqMSovnbkJ2zgzWtSAs8SSgfEX3UkM5YUbPvSu7Cy6u",
  "key19": "5gV4d1mMp1SuhySQsWT5szh7ysqoYtRW8PJZVQMf7FTY1ropDZGwrT4cLUoTTZsThnSVqzo5MBC6aVKsGTNEK3wN",
  "key20": "x7LFFJf5psu83vy7Sm8X3iy2Wi41GUwCwWsGf8tDHXQXvB7S3TLdHMd7r5oFNC45UD5ScATFs7suzyMqzb34ykC",
  "key21": "35g9HTu7Z5J34SDPmFD68pZXW9GvFS9bxEDBEBkWKYkewmozumHYV761FGiQM8DFZHhzjjujnA6GCNjzssmcqygN",
  "key22": "3bmqZjKsXymU3H5XAKn8U3ne39pQDELB83vPst5ri4oKiYYdefVy9pQRaBiq2EsZSDDYiZnyvJ8raxCD2eN34YKx",
  "key23": "64aLYxQCQYYenDAA4xmDxfY9kEX4cdknphzqyL4mC8egZXDcGDts8BC7ihNMNUzHEq92Z7uUDtv7vvPNNRGzACj4",
  "key24": "22K8te7LVAUY658cWQ1aTuZaCnMETUjna4En4xhbNECTafY9RM7dah9gDw7NUS3KTWJYTP3njGmi7JWgBaxoWQqS",
  "key25": "3A7oXAF8yZfVehF8vDF3HmScTzEBFhwHYaRYQ7G1oAC2k6MQCdctQdf728oa9NBNCsMYNSepLpiQUFWzMFEdw3N5",
  "key26": "6aB88JYhcE2ojfPG525AmCMzHz2rK5nkiJwn6sCdwPam5GoaYW8cCdGc2FcFszBzU4nZdmXeeYQNKviMt26nfMK",
  "key27": "x3rTt7Up1zJTtP1mzq6VN3y92cmzPKzfpvGLBc2N48LruUq4p11H3ZfNjzrHGszNKM7UK8N7pXdxsWs9gV7D6qN",
  "key28": "4jAxoCxNDQZAsJTpXroboAHdAc65e7n2nAjuRF2aHhiAfn8uSPdqrByEYr5trvwWWGucz5rQ9vinHvYdTsMCHNBC",
  "key29": "f3JE69ne9Z39fUFxB5b17XuZdjadcAwc7aNK8UJgSZtNZQjRAGVGE6818h7An5ZkMBoUzwz929xzewdLagR7KFX",
  "key30": "hD774QFR2pmaqRzdXybrZpr7jFca6LqHKidtq8hkKEpy2knwVZoNvBtUcUfu1vGePZwNv2xA7j11Ce2cRi5nnv4",
  "key31": "5NyBzXdMtK9Azrb3ESvMjW4ccN9UmE2bf6GfrXbGYa5mhKGrqr1AnrwToWwW5QFtCmHJcmEFMSfzf1psL5KRR3Bs",
  "key32": "2MeuKqE4M2XSrr9UdJrdDUa5M44gAKKVsLgGFbzcPxrknyB1e5eTS8rgxRjdUH17GhxXUy9UXjHpbNf4V6rpfsQR",
  "key33": "38vq1nELZ599DToxvRxfrkY7ZKtKSnuqKcFzrCVy6rcwrRi6oTYyNuenjPmFjC9EW3dGKBbvBokaAFANtr1Qtf8T",
  "key34": "5sYCrJUGBhM2M3srt5Bu4SXNzaUYqpB5J2WpfATbz2ueBYKbs7Bbjd9R7CVw6JjyyqDxtwuW37ZTuz9gpbrMQQ8b",
  "key35": "AXxM924GBykYfMMnGZ2kdCxmHe7PgMs3LmHE7BcfsbJ7Cx1zf6ZdPAXLkjieioCejR57bmLUvUnTkwW1hFn8fnN",
  "key36": "2SyTTDvzDGppUeD5CxNyUQtkpydDm6zupbRri2j5yawtkreA82ESCVWVJgTALo1sufnN4sh8Ji8kFDRu2rHLEo6A",
  "key37": "4gF5qmz16gHLAnZtbz38pr32RQSx5BFN4tczRxRXVpnVak5cxpxnNNP39dJh6R68C1ifEYLpLyh6PzdEyFA8qsES",
  "key38": "oPRF3CEGK67sPVptBfoE7datxdgSv5Mu9tJnz7D5CKS7gUtJ2hTwKRBQhnMHCRRna39GRJvtikwXq2ZZc9HTc7Z",
  "key39": "56oSkFqDjUvMxaT8XbA9Fq72zgh275q5fNqSEU5mhjGv1o7GGS4vZ9L4h76w9eMqrNDXwpbCGK2aAJUzUK4JRdDP",
  "key40": "2txrWnPrNtKpmZkqELbYBGRyYcDRkTB21dF2QXqFYySXu2mMQuHdoEtQiKphk83Bkx1ijBtgpjExo1dYTsw3KmrG",
  "key41": "1HkSfRgH3Ud9mABBf7vgmXVWAZqU9FjZn2JRVJrFhXf7tA6e7GSoPTpR1ZdCzxEP5dwPK4gcA2FpArR6ui2LcjH",
  "key42": "52stPnj4N5wjo2sf6SDb1zCaWRuaf98NnWArC2zCESHiApxixinxYt391gUGxiR8jkXRjb9kELfZ5N4rMEmCrR9H",
  "key43": "594YjZauHwA5QEgBgwsbM4EBLph4LAuGu7LTHgzTVowhTa3MNbU1dVwmXaBbBFEbzjpe4nY5pVY7YzsgQ2B1atr"
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
