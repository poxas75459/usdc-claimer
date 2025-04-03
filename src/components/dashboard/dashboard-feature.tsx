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
    "2Ba4i48EyPD9VAmdJjQGVp6CrVqzKga1fT4oh3ZFSsT5uyuAsCWsLwRbNP6moiwHCudAwNXTppc5Rejx91m3s85T"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "52rKERYth6rciWS7V76MWrqF95BnNjUnFrco88ZSrTP1ivobkuTHmzDxtfN2yhgrpTctoL3GgQs3WWoeJXNuPWgw",
  "key1": "3fnCn7wLZsKcZTSesRLkUPMcYknuMftHXgkUkWSHb94WmyDDqMsFmkjgwDVu8oFY6pxoosdcBQcV4J8cCd3SYQTt",
  "key2": "esVaAshADNL4YHTenEV95Kk8skvvc2Bnqd7nE67m6u39XFp6AR6Ytv1LQ48ChxBnKBKv6vZPJDwCj1Y22PidhPJ",
  "key3": "4hdNEMNbWsxHrXugWKCzk9PV7XRVjo4uBUGMLhtr3Xir1T8xj64PrctbDQfNocGRtBWkTrJceNUMbNiAJoy9TgZn",
  "key4": "3NGGtTndHBoAwHfqFFStQHnGT81QHFayhAQLVgY4XFRYjCWNWGcWvyqnmWroxGmTrmHYTdwJc4WLhcAF1BkTknFu",
  "key5": "3xYDfYeno8zFSahKXuoiAGmvNtkzWyCPgMeGxnSHcdEUsKqKnwJjvZjocxfE9XmzUM1rMqdRcPHvCDX11aj9Si9Y",
  "key6": "eWDXWGJwmRYeQbwN32WEYka3PbMKkbQ6boK8JEYzJMoDMymA4KunkA8n4V6waij94ckdjLZnU18od4WquACu2eC",
  "key7": "2BXKEFKuaLfgSVcTytYYqnNZ6AN7NpwEa5dBEYPiLfLHHqo7xuEAkEcmssPBR13QEUUyto2KfQAPXTViFRvdd7k4",
  "key8": "324wggX6EM8sNMNPfhjWkf3JyMXbcSQJeYoDM7jnbyZfWTn1TkUxEHpZp5dMe3q4mpjKcxMDMJU2HCJnXiQLaWLR",
  "key9": "2mToHkaxKJrNPipRnARSu4Zi11RHGGycGjuBr1igsQKNSvF3BE74CHcEY3nheLS5jDkQoy8d2Xdad1xjskZ7sQyE",
  "key10": "51qoBAPFygkjicCmdaKW6swR5chXUnkGrCpD6hTjfKgYm8eqpvL9CmHugWJLEGh52v9qbMKVQhYVsmFzmd1HEuQg",
  "key11": "NSiq8stJYoBZxNWZE5GnNMpaAgudLsCNEbGSNhpjtnS9DQvx8B6cNZGsuHNtFksnd1DSTKGrsXkY9wzLapCoH4m",
  "key12": "2bXAyU9fbuww5thinTwLWu4hAb2qTaoLcjcAmH6KV68oLt42sKFQsr8sG9AbcXg7KGhcQkq1jXGKoBgwjb2eu8T3",
  "key13": "2cuHELChtu3i3aMrVoeeJoB7Mr9AhhnFdXJkskX5Qmqt8MLTQhHdpvkJ28C2kXxvhf79Y3TeRpgxQyTPX5Bgifr8",
  "key14": "5MhrUdaNaNNo6wF5KszYFk6LZyhK5WELnXWqAigJhSMScgDsSgwn5iwdg68TBJCQYVf4ZJkgpeoQ65sKHDNBhegN",
  "key15": "BjZjLzKPhXgfuFrWiJqingyaxRvALML8mnRaBk2WeiadZU2XM5fpDet4QbgYMLrCvkMcQZ6U8qJrZPjG5eCDpXF",
  "key16": "x71ypXzvAMWxwy715TFdRKgAXz7sTARkanL8sW5AJgJtaJB2HVE7sGns57WTspnydNwUzpGpbvgvxmx8N3pnsN3",
  "key17": "3YxxCHnTEzzyQhPT2uU2ZX1PfP9c5Q9tqhrmoxc9YKg22VU8UDDisUSSVmdstuiLYThZC4bbpLZ4vKr4YKr9NdAQ",
  "key18": "37av9ASLmKvDBdmRb4r6Pt1wt6HR3MAy3S5wH5aagH9yE2riygDFE1bBwsz9FqeJFS5dyzV4iFY7f7mVjZNgVKXT",
  "key19": "4nsUvTwWnmZVgtCMViiDmsop1Pisj34L9BZsvT7dNmHXTgLcqGHQ6vbf4bfbtKArRhGw8iWz7PEak6nUthRt8Dna",
  "key20": "54FfCAvryi8SCoFgA712h3Y9KA4NZCpC8cpjwRdSGHzBFnCYfjuG5cqdLCakfgDpsDm1MSyCGx7ZJXW8eUDxa4zG",
  "key21": "3psmnHQfQiA3sWmroix2NDEqdeAJsUtF44eUMsX3nqdSEVqj1kN7t4o75amizmA9YRx5BncVRErds92Rwyu7sKP6",
  "key22": "2qkQbBUz5TajMy2ijRtz2QB3bdhXjA2wYD2iFGpcJ8aHQXR4ptUZQsZmc1cWPChcZSwPTYkgBdCnbsPbF9QpXL34",
  "key23": "4h2Xhv1rft4T6Q4qqQqpvZZeGKgRWHrHPvCikWkmDpsKKJUs1nzvnX5iCVMM4n9L2DJrbjt3hVX8DJ5ex8ML7tgj",
  "key24": "4Yhac5TCynG9bpbn4nWgVsaqPA2RdHEUMJDAdSTq198wNLebj8tnour8iY5Go3PRrA2uAPCae5UUEiYxMJnZyu9f",
  "key25": "2vihZpYhPL1QFkyb75ycVBHxLAYkDqK4H6Tx6jLhtyxPytPz1SR317h8Pn2UwB4Xn2dzksuCji9C55p1Y8X6D4KD",
  "key26": "5wTHLKSxPZm5QxEDYdgfSpogXJebNjnpVTdRmvX42GBsCgk39kqLbhdtjm54yaGmQKyQPAbug6u5NMw8A6mDoMGb",
  "key27": "3kNsnKiN6kD4hf258sfFSUyDvQoj9V7fkAqu2oWeTZo7nyTj7AyHQNXNiqZQLceSSdqXMRRCT4RbYYo1TwMwdKmw",
  "key28": "zcAsUSm2ozo3WKCu2qKKh46XNEDWcpFMwLFeZRH7x5KYSZPJ6wf1mHzR58c4HwWvNQGnzA27pkuBhNxebniM9rC",
  "key29": "5TLtUmqY2LtcXyrYo9iKz9KyJYhmvQQupA9XLbiijk6JbnVeuvJRkoP7dtvcjrk5uVYKdvHe7aNfVTANu971e2gp",
  "key30": "5Jz3becTuBRKKZMAyDJKjrSbfjsbXrBwzSoaGPhRyvPTDwDeYe57JtUxGPFawgupeV6B7QH2PXb2jceHZuj2s6Fr"
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
