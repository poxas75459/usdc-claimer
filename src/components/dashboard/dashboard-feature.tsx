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
    "4oD954N5hJwfS3kWXk5guZrEmqBdTPXoVXPNpm7fthiW5HhF3aPjsAGC1jdFZy3h2JoHyyavdBNobmTRxF7CvJwk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "412DntDximYxgDBEqvZrMp3X7oaPn8kmVETFnADMKw4P4BrHZQARqWwdbEpqXWmJ4kJREjhsDfZPQhjjSEX1JYmL",
  "key1": "3k9pdQKSiLZWSf4bTLRScRLNK83UTd19DBejzVfh1bDf88PnBvGdu4LfvLnNDQww7qSX7zAuWJfpgk8KXYCoc6sX",
  "key2": "2otxDBRy4praKPzRVvwdhP4MoNZwSpFnxiTraY2wt7uLueaEWYhcKn14th8XJ1Z3ySwDYYnaZCujGSZrD8oBxHjz",
  "key3": "3it6NkbvsqDeLDP5sBYzBjhs3KakWBRy9nSTxuEVimBEqRAvX2KTjquQMXSn5UAQfGcyoborytMqehKN6CekMCX9",
  "key4": "58m5d6EaeDdeJWowpw2y7eo5aLdWmYBtiUqaUfyaoe3QdivS1wHvR1GU3BXmDs6sfKLRecm486RE1pn3NenCTAxX",
  "key5": "45LXAvt6sTNDvdKK2vgeT9W4BqHDkoM1A4ZyFHbne8CCJ7Us9vedeztujbU1hb2uicoFdwRJ3wTQ6ReY8VswzF1G",
  "key6": "Xyep6kY1WpiK6jiYDsSo1PPDuZj7Dtpe8aSMsZzbTLqoSMQKHujzdpExah9MXSq4ui8g2n6ENSUoewWbtzSTofa",
  "key7": "2V5Px7eFx2Tpfmpa3ooqzRxdfDkNJWGY2PWwxysNgq6xEZjgukwXeontP2yDsrcHJnDEUUESgyr9akLq6JuBadzy",
  "key8": "mdijvNaHnrVE4fQ2tYhaZiWKARqveYpPoUYtQRx2jVLoH4xAAue3FhZKS6vqTkbECG8vpwTW7nDvsZ7ZfHoPHM8",
  "key9": "fAicspUA8TKdadyMYGd1fD9LRVkbLnJGSB8WpaKHrS6t8UJfWywbNya3azzsCZP5rqxdsmDHKHxyLyiMifL51M8",
  "key10": "4DUhmu3EYREdnxLWPhTmxuocat9cL683GhX2VN5gFuSR87GYYZ66keDKsShMWERWNn1sZMNaZsJNheqrmEKBgTgq",
  "key11": "B3ZK1MqLT1vJM2rXtffkQgh7ARAUgDxN1BLBzY23z7N51DNPTCw2SEMnzS2BZHZbbU7J3ziuWHyVxBkJEB4vBrK",
  "key12": "4PTHSr894Kjg1jSJyRrupDeoq3t4NmnQokupKiADSkPY2TQjaZpdmzDmSVABkZ6FYEvQTEf63XYBSxJQDsGV8GcY",
  "key13": "3kA6hBvMW39jhrLUxBtejdHL6en8Rx5Wed9v3eeKqFCxrewBLeKJYJwpSi4r2dQZeKcDXGX4MuuPYMHg1WxrFJro",
  "key14": "483g7kdWeLWSvEsQuuXdTFMH9wg8gRzKvV97iNu4rQYTwuheU2JHGQqW9GHw2uCCpJNMjBYWx828SoBMYCQ1BpBe",
  "key15": "2RAXurZ6X93z9VJ4ZY2xg6V9x42ZVhXPWYgSSTadHMgRasEVoip9xD5w4FaxQZWgfpPxFZkkM1RSLmm4JB7S2fnY",
  "key16": "4eH3ssu2DKJnr99Suqn9y6EDGG5wG1j22uR1sevH1pVcTBXhYY89aFt82oifod7CMo9w5PoEDG4GV5yB4JsQYrgj",
  "key17": "8pvAuePoULWjPC6Cs1dZomA2BFh7znUicCrNp2SjhRJfsgWt1RjyAB1cmNmzAYsvaP8ueTjxi8N4TPwTF1KuUNT",
  "key18": "4BAk5jJxVkDLu5FQqSinoG3XtGjHkdYTfFa9h6zozQFupvdD2S69wHDAASQaLdfwQ7XHPpt1Ez1DpaEnsyJyWQAk",
  "key19": "4MHpRLPB21PTKmfYP2mBEnUyJ2Y4yjo9oHDszU8m9PBq4t7EjpHVHmUyMYiveKf62w4r5vUQ3LyMP1QY5g6rLnhN",
  "key20": "3g54XT8ue3N52EuVQoKHsAEzcTetCK6Fbz6VSAmrDhxjaBMQr6XcagSvCUJXAokJeSYVWsfeiiZJiRzkSrkvAmMi",
  "key21": "treDn4a3KRvhpXNxKsYppVp2Sc1TP2pBa7MVqfh5dLp95uYuqCpDf3i5r8YucatbdUpAorBVyevF3D6Fj3tuWpg",
  "key22": "5FqvUFRF1tgXz2Q9cJjbJRgj85y7cXDquPMo6N845emAU9Tj8kxcg8t1NyAVNMtLnsiR2XhJspTiGmzbLxyDPhpA",
  "key23": "TUdx6dS7JPczmBtT7xe2Q29tbcLiEneoByEq8zKNYvSDkdhpSg6Qrdmf5sSt7uuS8cBUgL8931pdRFPTL8jvnoq",
  "key24": "2anZEGaCbNAGGdcBnQBvD63VmHEYFXapJuXA3fA6Z6H3EbRHMgu39Qrsv6uuCKkerGx4c7mhaoHhz1yzpUBUDHGY",
  "key25": "25UxTJFBwsSP3Z8jbvL2irr4x9UQaaGuZ6YSdcZJyfAkawnyKKiBTaTujkUo6oA8crUznhoVYnud9uXksyVVEoLd",
  "key26": "5nmSyj9ayjTvFtB7MDMVcQh3z2RNNHsNDm13NNumyuCKSud84DtboDyAsWXVH1Ehs61GMNW9oK3yfa49BxZoh35F",
  "key27": "4MuaJoqCStEJPuvgrWh929jCJtMwga3sexW7ioHmLE9Enr8MscQKJ4YnjV3LBPQhGsfLrbtzneTmiJDTY1mNTq7H",
  "key28": "3EX6VQPEjRbvjBy3gW75LT2W1S1PrN5ttkDyhAkxVEiU2r7efMEtLd2dKgb3QPF1bJSh7ehBqP9v2ki4LvMt1uEK",
  "key29": "3TW8CFeQWHaso63qptmmzvH3hZUBaCBtvuCVbGRwLSjQUYHUv8wDBtZCkF3oSy7DnC6w8ybGK1mWb1QkUJHqRrzB",
  "key30": "iUBoaXH9HfvWtK5AqeoecY8rwMes2dHT2RjoxNFT6pLcr26Zzc8VdFPcgTQvXUJcJUS9qddvsLXWFPcPwaUB7ud",
  "key31": "2GkUPrKYvbTLfdJM2ZZdb9VKVXMqjbDCEYJQ47hAFACytvD9qdqYCoU9hUEyo1gBPvAESnnAzfxXhBYLqTfVo8xW",
  "key32": "2Qpvb7iRPSuF7KfeJWsGvVvnKR33X8Be97cqLdbFjQ3dPnj42dY14Zived2Nsnajc8DdQY5mJ1m3EUCcfARHVkS2",
  "key33": "3Rmy4RYRdv3iWdzGGL9BnpHAw8vmG1SjE7Bx3ZuVKKFxQ4jWM4x4AwEm4VV1JcfBD9QpVxbdBZW6XWb5zoWMoqpi",
  "key34": "2KJx2Vh9qwAvEZhtGEZ4qB8eCawZJuMsfYFVWfXDRUui6ZVC8qFJwY1zQ9voYVWr2jCEWCuK4zGX8r4jcg27R2Mk",
  "key35": "5Y6vAHpg1xxKH5bgUWGN5x4BHn7XAwFJWVN8vj6RX7PtQV7nX5Dfxf3dtUc9vZZbbZeQqpS5mziBLZwLF4oSMV2S",
  "key36": "3eLsbAm2eARtyRwTWUBZBVH2rVqtNkVmKQiyjdQmVrxCAfAUkxyNMpvqCCMjzPAS3egL8fwoptBuDMLVdThso2SN"
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
