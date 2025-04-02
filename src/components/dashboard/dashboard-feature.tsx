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
    "3TZUG9SAQuifGU3f2wSDBHrj4e9pAP5hgxa4H1qqtrMCZw83uHd1wQFycC7ZbrK6VYi1sTJiYh9SjFqLYbqNTLZv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4UddRGEZoSsGhNovVAtuCJgWcLYEz4baZ6Z9iYsJ7HWjqwphC1WoUKZ7pR96DG5gF1TmRgi3Lar1hpxkdDE6244F",
  "key1": "4NqVCyN7sXBcxQDAUyPiZjSAa7S9giFkofpUS4DGvpkXUg6yEwYS2mqz526eTp3rmtGc5GhFGgy2ad8oAZYqLkvn",
  "key2": "2cyj6dqLwiXr5f18xVGf9VezwwmGxwxkHbnb4pmbATi9Ks32gCqBZj3kiFy47WxiKUQDoeh4pYMmDr1N4GnS5LGV",
  "key3": "4tRXELhCw5a1LBx8p8YurVchZyAafvRcNdcnzZNGZwodA84Cxjx9yeENZRPiYNgCwKzJfAdbFZ9wTNtWbwMWAoRb",
  "key4": "4k5Q45idFgX4Hhd4jGQMC5w1WKcon2h1K4CZf2c5VspdQ3Tq3eqxWZVuRcVWjEJkMLHSJ9xrS2Gpneyj9r4gx8TZ",
  "key5": "4btvHmtfitZMjXkwPWTptDyFzUNXHLqU3Nde76kRuVoyxD4Efa5c2UcZAr4DDpQ2SVHSEURfa4epqkmmjgu9M4ZQ",
  "key6": "3fPSSZNjfocJwngR5ULFM1UcNZsVk7drUkfWZ7jUeHtn1HN5Y2MWdJFDPFuNDGu79VxiGUEHYrEjQJAEiMgy2Qez",
  "key7": "2aAmzKFfswdv5hKiMgxj1vRC63JhcuESNYcJErgvcMRk7Gnjo7BHXG2YdNsdPyQTgGZUtQA7APVLoUSBAdJ3hfKW",
  "key8": "JjoKAZmZ284QDTYWKzM5uFqMvSePLNny3U5XXsCAHte3K9BhtDwtZK5LWuGHFFZDqNEy8ut82xpqbnnf3AyNp6i",
  "key9": "2GeMqApogarpr4hk7LqaXBRprqTpB83AxUTfqXu8bEdg1i7xJBkRBtCEwpQawx6MxVgEamsPAbWUZzm3WTq4Pw6z",
  "key10": "2ANviDiL9TQL6JjqDSKbCQNe5yazfxh78JqeMXs4AywHyUki1MtH3BHRBBYL6LeLNgsBwMQSoL93DkdVWgT5Hcri",
  "key11": "5vgCffNUjcgGF2c48oYnfZmETX7nN36ibdcpcf9DQ66JQXDhWMeZk8SC6z7e2x7tMFqRW2Bwd4LB8Nmxneb316SV",
  "key12": "25T3d5kXBuXpzdkZc6CZfRa2eR3Qs2vy6YtNoP9hcYUxyyUafZSu3CCMvbUVq8UovJqeqoc4JFL2PJvK3rQJSLaB",
  "key13": "2hqkHou69f8pXwry2uR2ixZKfE4rCLA2wSpsYmoC6qGU4xKfKb4ho4ypab91FmyWdYyTSXArhVQRTimvgqsiKYCH",
  "key14": "4uwAySsoFLZaJyQ5qFfFoytdJS3KZrmtxnHL1D3Si7n4rd3TLFjJ2ks63LDax89VEA4x2LZEtVx61StD1pcRLRdn",
  "key15": "8EQvozM3gYh6CZxjJSQDJXZCTDUpKyNuzKy3MnT9f26ww3fGa6kG38WKFLoqCJHGJDbnp6HjinoSRCY56CgjRJn",
  "key16": "2PxsaidEPx78GszYNgpnC7WPBURQadoePrL5pkWDvum3j4B6gUMFjWmh1ZEgskdkc3JJYMQS7TecAEifMNDsQj7u",
  "key17": "3jh5hjovywUwbiAq97EjP8tYSnMszqkbqWUY4kwCWHVGNo3BvZzyFTQ32YKkVkwGy2P2Ai7rT3Vs1znNjCv6trRA",
  "key18": "3nXoXFkJpKMThBBy8AzGw3TbSa3aNaiPdhoLghv6nkpDgMBTRnC5L5MPEy81YW5asnst8jYd3RJtP6CRpa2MPVJu",
  "key19": "4uB4kNZcDoBJmttvRfRahoNx39LZf19FuPsb84wazFzoK22wPPSnfN55U3yhJQVGyUDDdPx7rW2vafAXuBY1Dk9E",
  "key20": "4KqCRmdxpovxZLe39t8P4yTixeSX9vd7jYeWbUbrgPoLLrsJ8byvn69E1ATkGqzQ3cYzTM9acqpwwMyAhUBWa2wm",
  "key21": "2NLnDrWH9BuDC7RKM1ottn8ktAHW82Y2BW486aVLG5LuiSC1Uy23KpjZzSVVvjNjCYs9JFDQdqqjAy7tPLnk59nZ",
  "key22": "4epJjwasPW7JJyCHVLsBcbGWsKBa3B99vqP1ewVD5cgV9qcoCihq1k1AEegAk8vXMjAywKsVKG2vVGMtYXRgiVeL",
  "key23": "Dv8U7yZSU5YSEhgfCcKKig5WYukFy64WqUW3Sn8ceYf5JbPeA3U1UWpgkYkegZZibFe4aWLTZNgbR5P5B7aBMdq",
  "key24": "2Vt3Lej4fZQzL2PwoyrpraVuWcARuE8eiiA7qQni7Q8z75ZVrZSjfX27obgH9nyrGCE5XioWsX4MBADjXkPWfhxW",
  "key25": "4EeDNXZDW8rZ2js7NYQEtVcuaxBCFoeVPC8PnCS3odFEiNcfq2P3oDV5CExL2e2jrgfNdjrri7y3nuwnACZ3FbrD",
  "key26": "2Ee6uZgEQSYaVsKS4YKc94uuLHEkwfZGBasC2FujEVmyqAZVeqF7QaQmGZJtjf58mqqVdzrmkDrt79Ta1tPu2Vpp",
  "key27": "4NqetKxXmgVCbqgZwEiPMDedCi4xFyGUKhPZfp24DHuKDUq3wharztKfkUQ7WksCVu5XrWm1eNhbUs23yVh6mQUW",
  "key28": "4KUrybpymGtZ6hGMLB4V6hUEyZHQgCzFVxA4hvDiCuDTF8fbQyXkM2ANpWjzFE83wZEB3kU6wcqh23jiuydSNLS6",
  "key29": "5ore5oJ5tcZivSEZWccAUBuUmRYmpSNevpnUrcdtYU66KqYRytQgsuhRzYmFdHdANe6xK4mR57kFvGGfaT9fYgR8",
  "key30": "4NfAw1eNXkRiWnVQ1U6YCmUBQHbh15gCJnB2Haq6SWffqAdAf7YeLCRw3nsSwpo7T5D9iPK5qX1mDtfyaxP3XbZv",
  "key31": "58XDzGrUsuR2FLjiujyV8vPtsdH4uuBd9j8jDNEeECkL7VPSGSfms3Yhpd8egXyJP8MX4uGd3XjGb6hwPLNiZNVg",
  "key32": "4F76mvnmaUwkTbBggaL5NztLxUxD7aiVpg87xxYu9KR1eKyPNcDSnY6ZnMHdSRu9V3cJpapYaAG5oCpQ7REAcJND",
  "key33": "rAiAfVvL3mre2f3J47GADfsHcJw25eFsPJXGRpJgpFQaoxDfNaDMQpTQgqKFizexnLJ2bbVraSfCRUvTHwGbvL4",
  "key34": "21kQkQSnF6srrTKjeR8dxRripYTtvBmCoMKDJBUySEyiJLFQHYc4E58cStibWFGakL7pr9Bptau3MHauP5hZxw7o",
  "key35": "4ZM7KmZDU6MseJLieahUcSzA8F8SPxj8z4rLRjoZTWuzVZ3c2xxLdvWrWASzcKuVwn8GMr3BftHSKBBaRvBZWVN5",
  "key36": "wRh1dBghq4u3nYzVVyUniNzhKzJRtAeBM9sVsCR3ktYQGEVHYUdVLabnUthCmyZa112JP3D4Tz4GCyZ8M43M1wD"
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
