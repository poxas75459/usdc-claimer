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
    "2EWoAEwXtiiQk24ZRu4xwfgE8LuAtMt2ipX2Y8K5eY3ra3NB1YpwpVYiuq8gFkiWymPtLMiF8Jer6MByzVSrQygF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "54QLdgkKbDngAraoY9xuX6JJDbhMcycpTQkJPyjEY5K8VZFHcgP3eUJr14Fxaxdgaeavxw4k4oPWWeyQw8LbqkML",
  "key1": "4gK9ectiRtRxBTw6WRAsm4XRNMJXUdT5CAbTKk4qoXbxFZn7M6EoDHuCc3MKySv23BX1f4waYTG21SwQKGzwWgtK",
  "key2": "56ixV7zrRYneyyW3FGNyv7X62xSvnz8dyQ77srkDTgefwwXVfFsfzK4hhfJrqzPRkDp7HC6fMP1D2GD9ZpJiBGBV",
  "key3": "2xG3oJRssB2B3pPs4fMPkSVD4eK9EW5SC3TEbQRFiv55YDpan1Mmxc5XcphG8CuienehD8xtkhPqExcGyP2KpfTu",
  "key4": "2MZyQWqJakj9q5J5yCPXfWE1Z7UGdqCMZ2URUgroQ5pCNwaZRNDLpbLdyhMtZHqenTtVcisr1NKefCzeirm1fCWc",
  "key5": "43h24K92CPEDnpxhRv7HSuVvPBYgcvCfomu3VPx9FFvok8CXjMuRzKxV14cqU2bv14w6zVV4XZn1PSK9j21uoD6D",
  "key6": "t7bdHzdiWRVYZ3X9FeYaXtbd8MTtxAgMYvxVxDXdnPCY7enz339aNsKNaCScKPhS9FVJoUjVmaKtwBpex6dGMjv",
  "key7": "5DNC2asAkMYsiMB6yu6wEiZSxkpbbYFnj8aGTjoJjZUVkEsvDacb1TECtafkditCAq2UsLENFnCbyb4gcC6ZVqNe",
  "key8": "3ieek6ELMrTKWJE5ebbYjTQjhj2H346SaeXhkw6sG7pV3gmZ9m7fBK4s98kKhrMimaUKcSJthWYwYLCSQ4McsNMu",
  "key9": "3YWvFPsdh86emxATzKcR1ekYbQHUuvAezjk2HuvHJSEsyMAjTJwCwChZi1VoNqiqFRZCGG4xVmSFnnijgEznTLop",
  "key10": "4Mqy74tMFq6xEiwfviwoUiAHZaNQaxFvcRbxtkofWqNUB3dLiHb5Ewk9qoAoEH49c9yYDtwvUTLbxu9a8q38B63u",
  "key11": "P4MCvZuiXhEuSTbupjc6VMbZ1kW66o3RrHYh9MsFfVa7RygdqnrB8mhdUkx3xLgftUT91ph5ESsgULFoDn3WCrv",
  "key12": "44taob1CCfaZdgPvLm7yVr9jrx6bnbTAPQaw9J3K1vFuLUvoEDXYzCAw8XV8MAjn1k9Xu56DiUQPJUbdpfVZnYEL",
  "key13": "5iBWGNNrKT6HojT8yyA2JF8afCpopSoG73ynzvXXDYfmvpsHBDpFYrPvyxq9KdNu4A7EuSnqxBsy7HevAYB7yaQV",
  "key14": "2JjjAsy4V99KEuJ6uoYPTc9GECBRmAYjFXo3C4qkqDRnCVue6YUHEhna3emxps9nm3wSjDBCtKJpZnEJpogKCktP",
  "key15": "54apFJuqiaRyH1yeKfzRAtMkRah5Ab4SUgxxnsqX63gxzo9raBdLaY1bEYq67YJb8njVqPuQHGvgNBfMkQ8tZgsD",
  "key16": "5sJbzgPJfw8FFUnLVQUa5xqKWN6mjMLss6AJRnKmXp2zWbY6wbppdtRpo9V1pVJe9i7ohqfZJKJyHgjto8DX241M",
  "key17": "4o3q1qLj2vp6b3ZeDrw318VSdaKp7qDnXgmvT3vTKjVy56dzsq9dS1aBAS125895VTNQjLe8qwtDW9Kz611RZrYd",
  "key18": "zk5rEhqxcS34rP92uwVXmxtADzWsbfKGu6mJFcfjkKDBncA6QytV8K5Z32gL4tFvgBFKaxRAoQPMbmg5GdvpGbx",
  "key19": "4gXDhMa2y8z93P1darM6y5ZV1UGZ6bzU7Me2ZkfGYpiRZ7J6NSeuLSBAqqjuzRt8Tz72XhWGvqggtMqAM6yXw1si",
  "key20": "3kByG1nnCnX9ziPu8dxyx7484JaFDRcSgV9iCuARxES73mePjS1MNnQJmmibvVwJd7hK96EAX4BCqyC3c7sgHm7b",
  "key21": "41wWf6dwotqYek7S5c2PZczMVTKedbKGknj1TvCa2EQtcsoX8EKUX9jLEmCtQZChBhaXgjizjkr9XqhUEmsP8qsD",
  "key22": "2j6NHjRDgwrTs3RRZWzaM8W7PnvfxyPLYEheG7YjpcVv39Pn1QPAHCwBTt6iZfkuCyuz5FVanR5cpKfMcgXo97jR",
  "key23": "2kjjNkYWf38a6Gag4rrn12gnV3EUqA9FYaJTZVWwhAUQaGNR8MiM2jnDwrrUNbrj6vvnaEwG6xmGyLG4UH1y9UrZ",
  "key24": "4o8SV8hyPkQu6oapeXTKCPW6dn1oPqGHUBFUDUr6KDTwgFLSUZZAEdZ4DCvxXsdfVqmsaHGVrZt5HwQuWNUtWtna",
  "key25": "3qd2UB5hvxza825bByUBGuWSPSHSCwkz8TJuz1QbCfPYVjLEtnAkoNdTK2kE5LjfTWW3fPsow1EEXi82jtZQ7dAq",
  "key26": "3UbXSMNJxcrbHwKnRvStassgHVKLZ5FWPLrPrHhsg4zedYs25YZwVSMj6aE23SQy4P4NXqvN5a8onP4TCmi9GbdA",
  "key27": "47yMuxk5pMsjGmk5cgcc9MrXvwKLQWucmFsHcd7eWKxWNpkWK8SGinkZc5mUtjWJvojKZTbUvazjnEpQDrTFSWxW",
  "key28": "4nWkQii532gpfKqSf2PknoPn2Np8wHk6Vftb9KyXkthF2yUty1poAwDSrg3vbQDd3ugne1mMhs555q84bBDyTQzM",
  "key29": "22ivfBsCJrpxEAw9x74JQKC6h8RD9v6JndsgwuUCW2LHtjcNQR164SqTACizzaBSAsAkRB78ScLuFmFd2rALbs2v",
  "key30": "3uaavd6VtNMqE6icBaYGSnRzkZr8XdEgWExwRJy5toN3CsjCthMLpxX49D8pNBGGHgKou8vZUgJHt1mpt7TYp9Uh",
  "key31": "2bXFfBBNPZ41gy1uaJHzLHKEcgwdz1kJzXuTJpmgPEN2Mq9pgaJK3SqWuHf7Mt1EB6BhVwRtdbbywF28uqv3vezK"
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
