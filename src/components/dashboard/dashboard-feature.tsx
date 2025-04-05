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
    "3cLYCCkaRSqnGL9XEqTv5h2WVzaRuY3hcvkhXQq3vEWMnGjnTkg6wEDyxcrQ6BK2M9ogDtoZActwczUDTe65MM3f"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3qNmkNkFugvmp6tk7yEn9wGLBX9bD2dQkNRPhPjV3heWDSD8czV9GtnZZgWzCDpLb2zwYB2F2n3pV49aXAU8Ybbh",
  "key1": "5tojsM4P36kkZtmdhBZQgUSSU4cHmG9h1CjYP2bXnQHh22R8C78Nm3X98xFz6MEUd2bf61AbzSGCNc2V82PGCk6U",
  "key2": "3JWvRvxQzLLmMhSPJYDBacVd8e9pFfgaZ5xbjmsdrCtR3QN5o6db6YcMQ4YZy2EhadWSyj5Xcu43xYhoDFsBBXEn",
  "key3": "2VKMsChY35TSqKpJGJKD9i1B6cwp9oa6QLdgo8qxCoKf4BsUwkJFHkd2Z2q4NDqCYsTBbPqE95MuypMRCXgd97XA",
  "key4": "2rtfckXazzjfFAgxHSkGpxNAMYwd3eiH5R9cPexUkHn1ysUuxsenbdoPLKAGsZ6sQpmgUtgz97SoFXUwuKhavhfW",
  "key5": "2bNkYkVdRZic2JjRavRJaB9L6G796awRdDQgMmXTe41pQGxKok5mcpB6mJvdGJECLyBjycEaTqCHvKspzqPbf3wc",
  "key6": "3ESd5VtzkxvLVY8q9KzufQNuCANu5Y5LEBNfTtuXG7hBnMcsBkQpT267NXSQqfxD2VKueRbjAzW3VYVAvz7oVi8W",
  "key7": "4dp1C171v97r3AyfWVchNW9hfPPonfgEvH3u7tCbfMb689Azh8ahicxpTgBP3QBCGG2Jhtn4X39uGoNmxwQJyTp8",
  "key8": "2iJRjzNRP2ygHwsGDyiaK4nkfuDqFddf673rMcsdb51prNnr9HRKHa9NM6vZQu9vLQCp4Xpzrwzc7SCcpfj8erTA",
  "key9": "4EH9TrmZq6TmPodsSxfHwNrKvmgXPp8eC94exgMk87i4pXNsQmVDS12nvWgKbBwmfPwBsmV34iGd3JMH6DWfyVmM",
  "key10": "2EUyMnkkaBFHcRZNb1qs8MBAUB3gFANedmRrh7geYU4Ks9URRk7BFvqturCVi84CVVma5vvaYhvRa3sbxcdUi5hR",
  "key11": "1s9DVJ3pXvMyqn8zspKLLtjbF1bAmqtA2GckV77CC9yCZTev5YNndZLrnh7Wz5pW2BhoD8XBjjvL41f413jMyXc",
  "key12": "2L5Qq1WdxYP6EmmRvFNQy7mPRwCVyLoiM7rP4v5ipRY4NTGNhvCg6DdX7ytCgUMWJDb4juFdrH9SWtjHNvPWBhyc",
  "key13": "2QukwcUJbugpUJS7i5463gBrT4ZwmoSnTCywzMxK6ToQPhgw3TBQ7PxbwM14kctewUESgiq8QntjQpUj6uTw1rJU",
  "key14": "5dXQunZRb5qT4buizn7QUjuUVfT6SLxRLJNm65G7Q87bWvxZ4Pp7FtF8Hd9nxZqkqZyn1v2C7CeBM2QtBABCg6vJ",
  "key15": "3MXZYb3xCcNmxsnYCCezNMnz3v9eL1z6PNx6SyGNwFSGwe1zeJAhLKKSCCaRrKuj9nAgYWoNXEGoJpB65E6PCFww",
  "key16": "5bxMuN66og5cpV9oQr1QCH9FYmu2wyBJRqsTutJa4ySfKoznMWtAHukZp3Uk6bGXdC2S9EP77KPFHZtGxdLLBzNC",
  "key17": "3v2wSh31Nv354VfZhg7tXxEJDsRXHR5iHf13aS1TGiN2BiJpQBJadW2gQ1U6pjfCNMGKjPLM62F4QiMyiGiRATc3",
  "key18": "LWzTbq9W4vKwvkU1yWtqFipG5q1FvrNL7fB2BP2zTh9BwiBK2TyygBp7ouBKSQi8uwJSWjvJnX3RQn6nGWjHrtL",
  "key19": "3mEQ4iZZm8DEArAmn8KHBX9RiLh3mrXNE2AoMTQhLF9eGxjUJySsLrnkkXgZj8xw8T1NE9KPwcMaDmkDEAinxwFV",
  "key20": "43nGTD8qo43RAA1aZZnNKVKAPQdE9PgrJRKo2ERfB4Fyercgy83xgqo84dzXpkTyCYzkJZkibSCheM4GJiTHMchN",
  "key21": "4sWeALdK5amYD16nbfosLx338guZXnSsCGVnLGeW1c4uWNAHF7vjDyTzPExm3tocRiWg1sgYNvGGe8nLX8ZkeTg8",
  "key22": "3VG1KBXmhtXhep8pJb66BZgMpu5cjxXwaY2x9qd8KReG1tQLFeXTUmv1t7JFJYjej8JWWYPPp5JYjxaG7KHopLiq",
  "key23": "42PfdeKtFgpBUWr1njHebuQU5zpKBDFVjKj3RLVo1VNvPTzZP5DdQXBsswwThypMPZqfS7bZVrNki7JJdq6zWNui",
  "key24": "BfPgU1muhdc8ZeLBdWWXxUETrWD7Y86KKdYZw4hKwDvtnWCsX2YbE3K9e2GP6PueEhxiNbkewTG6riW7J3LV8tD",
  "key25": "5iRTKkKzZ1R2AawYP5QfuMm3oDvRX1rKXYZhjPJqCAgYDsH2jjx6TcjnQ4rq4TU25j7c6i6ute8tkCASuryscHNk",
  "key26": "4yYX8Gnq36kLJwibZxa1KucZkb6Y6p9E2AJafMR7BjqdTkKJ1mR922uAtQuty588unT8coyNgwAK2bnQ87XRwa5x",
  "key27": "4tzDJXfHRXZA7dag9KTHGTzbm5CDyX2uKsEuo4uLzQn42iZvw6HKhsmRoYLZbVus2dDfGe2UQVGR7uzkVMnWhHJm",
  "key28": "XGcAAbtKYzoicinyC7JfXWwRGsU4roFTcK95dUSnBvQgf8JsBPPV4VhH23poApX4vEh3kEy7XSazKp1iurrUoun",
  "key29": "3v3uejnhZpQWgfjWVKdQUf64nM4KobxHhdDZuwQBznJRWZfSz5i15JCDLCLJRZuE876bVDrtpKHVW6tzYUeiNMzC",
  "key30": "4i3pVZxaStLaD1S6dJoAvszezVcftjq2LqCukfcQ3HsFAmQuC6QFczxnD22STEzkiAoez754qaZx6aNGjgTsmKYs",
  "key31": "2CARoKKvGPUKBAMQYPFkMKuAavrFa476pipfTH16hwKtzWeKkqMyo9qp3up1Lk5uz3aWJFUotvupcQJpZwnnRn5v",
  "key32": "sZ2UsTpQ2LinMMS9BkV7q3uwfgcR5DHRPM9XqFx6SMfhR785aaZmp56qZm3SFqWV8zhtQUp79vZs8hZ7Qxzf28f",
  "key33": "2iGpdVbiCZyQQ5WvTipHpCXRiwGPKu4oqzUYTMWugU2gp4qQSgrcmTaeBRSDnWw2rnKD9LxLW4AkgUmRT24B9X7m",
  "key34": "2KwjcTKD7oa1TBPbErEYmBsAC2hgWb6aev6PVsjaRiNkc23c7xAd9iRCozRWD2vEE9Kgk4JMrF1yu5MgfcJ2utQj",
  "key35": "5w3WJjHvFaAdEAq69oGYZ1X8rqk3jQZe3B4mAvLyuXAFUKxwnCdc9TdqwwvxpJEqgbBqY76reZnofU3en4MpwZHd",
  "key36": "5xx6fGDJKBXA62mP71DanPxAmTsXRfaYjoYfgW1LFNDoryu9tpC7y1WWsc71LABy3knEMfptBFQmJJ37ShV9nKCJ",
  "key37": "65tqysDj9yQrEjdr1d5977TG6vjztNpFoekNsygPCaceUYhmHtWVV28dtNjaBKMYk14aJ8itNX9QAfH5B6aJkoG4",
  "key38": "2XNriJppuLNEviHi6ACnvTPanVk717wLHb9knM54GkAvUiZoxJWkZYRobfrrj6S5ndAJaB1woAfBaugUCyJWbfXX",
  "key39": "4xu2jWkoeAHLtf5ZLGipTpW611chmVNbo9dVSUjLg4EMPSt9RcNnV5P6HXusNBBGL3GGHMUMVBshaRo7bXPPnD5z"
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
