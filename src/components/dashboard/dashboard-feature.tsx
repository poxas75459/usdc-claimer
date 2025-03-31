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
    "24P99vjwvvULW4GyeHTnenhuxQo4CDdxAm1LEN62Mr4QprYTK8Vgx5SKqr8yNmGeiamdvBeBz7kRXFyVd3ZC3nip"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3uaDCn6xxwcbtevYcbogzpNmS1FFvYHntBmtD5WvNAo4DSJhX7bsiW6ZJDiCqQt6KD3ycwuRbL54kmpUdM9k2tgA",
  "key1": "5syfbp7oZGg56LZWi3ka7fm8KNGsPRnUPmyNTK6aQ8MYTjHxr8bVPESGv6aQezT7BFfMFcbqhTkZrzQnEFFdMj63",
  "key2": "2sFCUBFFHj6aVvNJt7rde6nwaKWCpsvt4A9NHoT5MudABx2wmqUheCpxhs4SY48k3mvQcoWy28ZGVUhXXZpWuvvM",
  "key3": "65ivouGu54ZGpDKvebH9fefTCZjB5HruKfyoP4NKMKuiW1BYaNqrxoqrq2zseWCcsYrxNW8qqN5Npwa3eMzSsGo6",
  "key4": "57Y2XdkVRVMt6eerATtYjkwHaNqf6RBR5pd7MWPBgtBeGVTDH1WyyN3Z5vSHEVQqsGvguyYSfunmbq6UvgJbDjo",
  "key5": "wHrDpCYgihMMsvXZYxEeMVA6DT5BDEebH1w3X6uGswJqvhWQmQEEaVpK5DrK9QR3mrexpexVQTwihMnv4DZbBLF",
  "key6": "2hX7z1eJ3PshG22EXFVTZfMm4e2nFHkudXytVh1rNpT7bsUxppCjtBRqtLtVfgMdvdU7BPxRYp8i8qGyHu2vQQ8k",
  "key7": "2my3Rp15Zd1yP6oYMPmBAZ2iVHeSavgBAxKDq2F5CjP7gYaa9SMTJmdGZoJtMvXGG894svV2biwVS22M6w3Tq94S",
  "key8": "4pYa8ECtqs5i5yLP39xbizxnsXydpVQj5bEMhBXaWAjib6ecnCqfdesEcpiqfTffuoieMmkhJm2bnYSftoHCEicH",
  "key9": "pUHZX9qkHha2QfFSfFn671KStr73FDgbw5v9p3g6DF7D6wy2SB3954pT3PVAEYgPz5q5PvPGFsr8tfoiAQYSEBB",
  "key10": "2GkzSQMNbVrhU93bkLjTA4AZBja8o7WPdqfZEEeSo2JmmhaQmVVTaZs6CzirniEBoy8ataXm3HKCXAbhQmnoBtHb",
  "key11": "2dw5tM4yZQHuHU2Ao28UvbBbMzjKnWYqiBDn5fwYrq8NJpVgEjqmoHXeKxHrcmauR24ED9Bhepjq5jvNiNSnHj7a",
  "key12": "5LfV8cppv46syM7iFTZfifnRXLWTwUg9Bk4ufySmNwGyRxe8yKmz2qks9e8bpAryBGyd5NUasFzaszhmFC7399vS",
  "key13": "3yAZEvC3hyBiNN65GGibmohRE49YATRS3v6G3J7tbbZZupoo6c5GhUVzDU3HTVndLp222BYFNoAw8PBD3AMStJSv",
  "key14": "22SzFtMtvnrudjjzHTZFvMt5sfjEX6TTJgkFzwfYgYQCqduidbAkZB2ECbrpoLfjT7FZJD9LSdHLXUNaLcCmaz7V",
  "key15": "4fdwAPLjua1zQGbc511zrKUX6PTH4ZYLormz4wvSEuqJQnnYZo93tw7NEkcX3uKtE3jyxxhafxeRu4bVPWfAZ5ZH",
  "key16": "AiRhwrXUQxVMgmZmeJ32h5XvgsBS1Zoamv4hbmX5LkbAms9g15tZGx2sdM1ntMVvXqXJukkURyhfrAQcBXsbiQ4",
  "key17": "2cr374DKc2ULeDmWhaPsQrJDwDeT1oaW2XjSRpbtccd64k5rvGQAamniFVoZDS9p3LpjS7RBHYrwZ7er7ewXLVcp",
  "key18": "5AVbGCbByBBdergZUQ5Ydv8Sq3rXGyHPFrUugBtNybbUGBC6QnmJnmikgDoCLeCzLbmMkDGtfmFjGt3Vsg9cTAW6",
  "key19": "3tSTh7g6fB2URoL9JmGUVFGkur3F4Qh1Q6PmSqmxYhzGnw1bJNm5Cs9YWZTmgZ7FW9ZpkKFmeMgZyUDo3MP8H8Af",
  "key20": "3nYxXtih24pDegRteAZYwisUrr2Tc5JnVzf8TBr2TjaaffdEKLXi4hN6qSDqBE87MPZqkWpDym5FZSyoCDm8F5sP",
  "key21": "4HRJ1JMEUa115EmK96Sb4ArtkkhUb4qKJcNz7t8jsqnmLqWEqXZ9xuvh95Hkf3LZyoMzLo7cKuB3qmbLK1YLp1Um",
  "key22": "3tQzffgtM5JAZiN9LKGXMzBDvvz46B2wHUQVcGUoBECRKr16e6hHa1kiXu3DgVgkmVRpqxbijw2pxrZY91VeAkUy",
  "key23": "2pQWc6WFmwa7LM4gGPxLTYshzDjjYANksggg3VWevN8pApzm5cLt6AoX88phRAyceFYk66cMH7qd5yFtSzk4qypb",
  "key24": "3Mc6qWWdPwhcGhx3TWkSnb3prPZbTanpfRWSPtZPbGtyZABkTfxU9GCkA6KCv7SFKT72AdkGoYrvV5KhcD2V7TrX",
  "key25": "4atBL5DzfNPzAaaU4M9xUW2fp5H4BgK3GzV4hiuzYgSifGL24iCEqDAq7TcDCn9Sm6CtYfqAdrVyzVrWJ1zVrPqo",
  "key26": "4oyHGN9Jma3opyvH4MqqnZfihpvtKXkPBVFDAdy59NDSPnQbaGSSHC9DcDA2PgAaWky1VsJfy5NHaqhk3VbR3Fj1",
  "key27": "3i6XuQyfYVTs1G4bp2zcj9krLmaYXLJkNZC4UC3wdv6f7GrUZV5Vtt2Sbu6tRxXBbkHNS3d1xPqxecAP9wRZXJ5K",
  "key28": "5o5A7r7qm45tJwuasbQDxqdLf2AZ5RQ5r7CZiSTufWRcXAwQGcgpPiTtoa5kJf72UQEW1VZ3D9N8oEUrwt3ZgqDX",
  "key29": "2nAnDu6dRndZoxzHFscpTESGjEpCxjgHStXrADVWm9HpGXUoDhACrdN7zKnKihPJTAZnHsbU5ZTFK84sGKeijUxR",
  "key30": "411sSbaeziXyFn3uBX2g6ytqUU1X8toEWvVx3Jiz5JainjW9bZ2LSEX4fj2BRH9jKeT8PJjnJ74P2dcH2iyhqoK8",
  "key31": "67G8u3ELCHAxTH8XZWa33tX25R2ADJRxvvZoeDpXgTgzE6paE37Yf1v1KkyYGH3uAVqCnQVhEFC94yJiiYXhqFXX",
  "key32": "372sfjm27K7AzAAnzGFvM3P7rt7HHbwMXm6LCkKyatEYBHhzT5QF463kP4pyjBENCV5ZKSmFfpuY3V1YmUifSuDo",
  "key33": "oPYFHokEA25EAvs1fgek55pdZh1F6tZMovAotg68LyeU5VjK89HjM5gqDmHwfwsaetJG3yfreg3NCGJx23kPTX7"
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
