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
    "oeqQig74wNsBeM9pALwFrTrvoxgbW1vHvsP7VKxi1MGtWMdFvf4uGBD2ea2shktnnjAZrYaFrArPXSVGjiaWc3S"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "EBbs8oNcXnL5yX3Xk1RSMCx28GgRiyhbAmjxQLSysLsczr8r1jNG67GpDg5f3VrWjhtmt98aSwTrWz46FSM5XF3",
  "key1": "3zdGRv1j77NVJ1QzxyuTZm2yh9vrso7r1FBSTr4R7u6UAHictFiBCfm4tiSnee1ut8r6ouZghAQen5UX3qFMx78y",
  "key2": "4xtiTCwfkswXTzPwWAsHeFLKUbQx51oD3ueijRzSBez9Rsu6QP6xinfAo2nSXwaN8zVwja8gPQnBusTWbY6d5rep",
  "key3": "BJ7ZKzMMV6HxEMEtVrjaKpDzKddyQ2fM9Bvbi88mq8CkLEkxMXGR9sLTVqg17KnmuP19DbVv62k3AjQ11icdK69",
  "key4": "44C2uL17YyvLoXZUiRFDniazDUisjnvA6uxbMFNWax7ewgx1peuXbGXRhbnyiGMnjMKYn5XMhgQP69kJVXsTh6AH",
  "key5": "5GHmxnvf77KGS69LgdAUpzDr9bmFjvtgk2rDM6UWNdPrBN5L33PC9LLeAWPTKafMEtHwZraac6bdWiwA6xfSaCGz",
  "key6": "3PJBFSCUybsABjdBfVUzXfcDeLTRQG2NePSGUYdjiBSsVpqJ1UcGFiHit6YM3Xyv6jYn7kLNRbwBoyBuqiMJckir",
  "key7": "XDtfEcEZfDAeWdUfAJjymJ9xS7BypoqsFnijyXUQGSeP9mPnaeDf3pchCASwePvjqbEy3DVqzaJFdSDdHavSDwn",
  "key8": "3JRDLtZB3yJGwZRDE7m4PXWhww9s1RWz4fDR6eTcGwSkaBLTyA69h4bTPo6Ttvcr3G7qs9o8Ec8nukTE19wF4tJS",
  "key9": "4isXXTguYDDFYpkwja5LGXkPA3eudxCS5dnswYJZ3yZZY2miRvUwtcytEV2UBFKQwYfWkZqHCzUbZdvxrjYAjEXU",
  "key10": "5D7ptf1ptMAEt3bG4Tc5oDwiWi2yE2Lx9otjRH3aEgVGxMpvQ1deJxD1r8bBuTQsW4ddepF3BLpVp1YqSfTzqyEJ",
  "key11": "2CWkt6ZKk7f6CBW1gdFX4jqEr3Ytm26LZq2Gc7xeubiPfYapNsv6nW1pCz6UUpUhA2NFExokAgqj9M3PJVVeuLVC",
  "key12": "2z4Y8SMApbq7tYHER1SscoN1i3im3V8PvcsiHwahUNcpp6WhyvDQECmQkRLeUdRMd7HL84DYEuk7mR7pqbzwzqjK",
  "key13": "2oFvz4SuzuqxmN4Me4G1hKpgUvuJBJgPkKnszVm4g18aRacnYKTgknAq2QayZ1M5ZYVVVY8F1ymZeZ89dVqjqEJc",
  "key14": "38G7dmrrukDwAtToUnJP93XxFqe1SBUUbp11kTZeAGkgnj9GF1xs4w5BxGJsgsiBqtwSvf196JKsYdcVpKSE5Vah",
  "key15": "66XqktCJVA6Kf63yu1AXJj2SoX4T313xSVwZk1YizCM51VPhJxT8RwyY4yK4A3yh2MzTNL5Gyb6sCKHd1wGKnrUB",
  "key16": "5ogjG3pMQPLHNaUmZQpmZKFPvziHnYHt46c8tDRnkoDbPASJiLkw2oSJ6KLDV6TyV3fjXYxHMrFDFh3Hy7meNaKp",
  "key17": "2CSsyD6THtKh8v8RaH8jK85oEpLKhhhs2LiBGjC2aESuaUDvSymGDwu5QsQDJ8tx8Y6fgJ2yCKpAyn4QY24G7D5g",
  "key18": "4aCFce2fonz88hGA7CtfQN2ve5RQZLSWfZLDJ2E3SGspCdf3EYKqwmvirsthE8XNEC2xDk2i2NtPJ4xCbGMwnrqc",
  "key19": "3hB5ovLDwFS4AdZBaroZygSrqFwWVunXxUvZi2Z5VhhDZcdmUNjfWmJuPWZVb5qrPZxwkgT2FGprNqaT1as2d6M7",
  "key20": "AQdg5ywxoWz1yLtaa8hdjgLxGoMrXnp4scfvMgG4a9CaLrfzctKn5JxJ5nyXjFipe1vew4AznnxVhCbySfpDpgm",
  "key21": "4v12ZYJbqgxaaZj4abvvfu28jmnEs7z3cnmfHMYwRsgjVxw2C67ayxfhTqjNLc93zKGJoj2XYgARUDQ6mvZoFjEk",
  "key22": "4oeUgXzgCMmvJF5sNS2xBkqdHSDNQF2yu26avvJScQKU5Gtd51owbFJ9uu1jd1w7WcoYDAqdXsTk8inuuo4chcLj",
  "key23": "52R4PfkyCqk8Hj4CFWBRqRUmXsYDoL76XVkJFsisBvkED2PcQsL2NNG5RK6rkUB9nwqKv13dPuHZWLwhX2Zsh8qR",
  "key24": "44KQirobPeFb796LFnh9mdM49srXgmuHBwRb13eb3BokAHtwUWWpzjxR2Hg9cb1EtdqGECXGtGmdbvk94StXSxUE",
  "key25": "4fkW3StGp7yzYwP1U8di9Wuf16BWxV7s4P69xhqukhrMXXCoQKGVewJcgpvWN47uTu2ksAG2bsZYJVSWk5phaBjt",
  "key26": "4FVPwoYRBvEFZaxsoRwev3hkx49EU5z85sq9PkkppM52cebkjWNHkTcoZCECc6EPucwjAnnR8SzxmZYZAVaPWByS",
  "key27": "3oGMfQsvGnRpeqZvHz7VyfsCqYk4PDSmtwFsr24yKyLoaUbgzbYKeRNReVMY3tWovm2pTqDfDe9qYshtEYckXFaw",
  "key28": "44EQHApDeeQrgdcN6Rj5CVJVdQcajkZ7UHZDWMiaJ9iqTkapsrBoUzhKKbuvXa58Ubx59ST6FFcSUiRNuK4PoxFP",
  "key29": "6gw8isZqwzuMqF3K7TMQeZGGvxkchTHVF4tSfqHmUfELgWgdbPRBA58wTVqLzxLqd4uKSQ1aWbs6jVazpGxumaf",
  "key30": "565EosToypD7U1qqSs3eFjVjafodk53rwZeFG3FhnSABhECKrYudeG9z4rhHLQ8wRqzs35aHxo9ADQdvWNXV1K4j",
  "key31": "5dbNAUmanWexDH3Ztt9p2kMoVQiMVYBNrns2tV8PPRtqhp3GmpMQvFtmKUZmokHEU8cGRLWRgFgkjomZYUHgWcpL",
  "key32": "3H5QYvvR4hnqSe7xafdyWUs2CUNCfrcoBKywXVhdEiux2psUpaDdXVBtTqXUDq9wafuTpSzUdGnA6EcWSwYxUYjb",
  "key33": "4NeZ7zGaq73C9JH9Rek6zCtbw1BzXm1HNGuLWWjNBbN24S4STNQpHkujUMuC89DdaLSeKFtkKFncY5rmQuz8A4Td",
  "key34": "5BSeXd7hN5HAZjci5CBkjw4dUifkV6iWPz5ZyECAtMYk52LHDnecE3K6Ej2BV9RNmskQyb8N8Zad6b5X14MR3pz7",
  "key35": "347AnKc2rxs6CWQvriS98Fy7JoaFSP5xuLvHr6CogF71n1X6QkNWEMiv2hKgrrVe4ytwjcxPVwqHCJQVhtCK2kdo",
  "key36": "2oqFpGhAoaWY7rMWe16gP8MceR6mpLfoZSbFyGNbDjkoZVbeEs9rR7W7C4LXxn7U8WtGkxHNyrvr5xBzhZVChmr4",
  "key37": "2JFxfbTHY4Zhza9jq9fAn3YPMWrt4oMqyvvU1gy1nsSpxLZJ6x6hzMiFimTTsw9JemZa1Auckzwz5jLaEMXeMoWs",
  "key38": "5o897KGZBcpN8Mbnc4vebF4MuKPG5pL58Nxkgwp8H7wHEuSuTfyridBZypwYggnDJRN6PNjCzC7XJNPZ5thVXJoz",
  "key39": "2KYJkZRbK95CTKbwZ8ZxHLr7cQjVbdEjPXzq9fUh7bMGvHwsCdAWvfHA3cWVPc3XD2yPfNEwuLjwr1vjzS8P9QZw",
  "key40": "2uNSLbxH8VQEAGiKBVTagjj5ETDJbwKhLE4M4ayZDz8YXfG6jU84g8xYNtr7A2n4QJQixrLendV3W51k6TyB3BhE",
  "key41": "2QY1W2U3revsxzo4fwX433kzKUW39JAAKNNJevt17zyUEjN6FNLuF47biJXxXAXHnRjCQF5SSDcrYHoCfgb7AnBq",
  "key42": "53HjEQoQBaXjYwBnqWqfobLXnVsHjMiYNZAKj3iTHfXS3Ete8BguxHZ2ej2v7NJ2FUjruhb81NvnHEeEJ5o1XzfX",
  "key43": "EjeQt8eqbVaqa2dCr4Wbn3hHVwYf4VkvKm8nKVaB9JcN7rU5oSjAJZjvQvo5VLaM5u8Y4Ku8fbZFqbyQEGBmMXR"
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
