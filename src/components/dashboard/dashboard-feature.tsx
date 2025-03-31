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
    "5NG8DZxCEzu9gnRVhUJV9YhEPHYF53s9m9HrkEg8Q9z5YQDPBDtX5U5j6Lt7ceCsQNE1K3jVDZxv3RSTp21i4wmT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "WWQ8zYtdZBZA4MX9oSmYkZ5s5gfF17o7rP1b9qxaD3T6jNNoghorE1qvwznPBnruh9RmCComDkQ9iVAMujXhveo",
  "key1": "5yvoU6pXjJ2MhtA1Q78kwfjX2CD2VhCdo3VSJGNT42xj9qWKPQnimFwdLwtZ4p6MHxV3Cx2S2MTMTGknMUu68wBQ",
  "key2": "4hsgug9DuZA7kiLLqzKL83UcKnyctt5HXaKdoqyPUXJkGjeNWRprGsTy7Gz1n6Sg1m5qQ8rUGXteaW1JjypcKpWp",
  "key3": "3RWXF3oe6s2pnK6Qr4AMNsxbqGAi9FY7MiDfqBQcaEQUuymQskLnYq5pXFCt86ULndheVyZjwHiFCsQkCy1fmgaB",
  "key4": "3TVtBxtyCYg4kgU1M1RgvBRQJW9urMgCjH91nWztAdh8BC6oPU4Jtz7qnDndTcKbVUxJyYnw6P6jtfCZAyzKP44B",
  "key5": "5iRG373d7xwcwmXyqQ4wMfyiqQKUMxeh1ZKEhd8yU2CMYub9Mr75MjJUbWWJgLmvNaDF2zhbNgKforsfQghQdBSa",
  "key6": "3NztiPKymTDGK3ZypUZc2tB9Hifwf2znsPz8RUBxghhyUZRwZuqeci1VMwkAMNET4gUX9H16LGyBK4GhWUnUU1pU",
  "key7": "by3tHR7sifXAJjeXujvwNfw1vpnubcFEQsqXeS347TtJEcUQVvwyk1ux8BtrquCb8eiAZ6gTHat9GGn8C2Y3gqj",
  "key8": "3Ho8dCWp8nkie1f98nkeQAdud77nffWU3iKB7dfxFeW5dFAiCgQp4CED63GytKxtS576v68nNazwj8VHgnMLbfWH",
  "key9": "wbk8kM5PmeJLuYRDpnrBR7b3equAJviKQyGiKhktU3UbouxNJecLQvWwXU44WDQ3nzc8HwSwQ6WdShwAXzEJRHK",
  "key10": "4Kh1sqXXRpZpi89NqPW5tw6AJyuKZfGNJfwq9dCZYvkQFzLzRYAvvsx2EbBZ9x1mZunCXUuGbP6U4W5U5UTo7zmz",
  "key11": "3owsE8QktQK472M5gsdymuxb3dGcpXpxke78pMrVi2vmFiX6NywomGpiL2z8u67JDwsH5j62SdZ6Eipn6DcsJemt",
  "key12": "66291chHPtGAhnTfysJ9rJVaauySfv44idAACobY9i7wYvQStGmcCaQvnCNgQ95HvR4h1tGAx1APfLThfFhDssXV",
  "key13": "4kgZv88HXvo7x58SjjL8JrakDDvzPx89xh7QzVBfKGdbHpULmkwXXifTQQ8ksZSHzE2qiD1L744D3zH29NKexz6T",
  "key14": "4DFsKU4JJFbGjT6FYjHgyfdjq33oQvjy69s93KUvwQtXazSFYwGU9Ngn1aqhwgeYr81L1qC51JUDg3SXfCT79H1n",
  "key15": "u6ffDQcGeGgPshyMUE7uAdDMoeWupxeM5uF1sZekGRTMqKGSsGaNMN1meykhQQtNDx2CNWWh7vsgikvfQoyXSkk",
  "key16": "3AWikS74m7RpJRJDww3SSUuYb5SRfyZJMHGMQMirnBh8vdvbK3evXYcKb5UJdPsKnuTxHi1zJWvYyn7ALAh9LyLx",
  "key17": "mhHhjysmyNcbAHMkRdXLkoHTTYD23eLU8sfb9UKaL3wLdrVJ6udecm1WFUmTcen1TSV2fLEFKzhK49JAJNyKWkK",
  "key18": "53cRv1gMSUD5A1217vAchSoNouDooVMZM42P1n81LdcwwmVbNUujcHgz4CdFzKdpKMJFVLnq6bikZAZM6mNv5Wx5",
  "key19": "4scPBox2L7YisUQ6S4a2AmAU4HQAALVf7L2TCdLLB2irDT5yhUXCtaLJSWxkCNafFHQGJo6nY4hNtuaEHt1rGyrb",
  "key20": "4Uxcj57ooLMpqJFiGX49HgDkvY24ZDttk1S72NedpAGUCDxWoxD1LpPesxX35goDdSVFRVxC4uoMRxbEZtfbLLFL",
  "key21": "3TD5Lc24zWQLaRSqK7DhaCpKTonPB962A3Un8ctDomsYixzRYY1p8HzgN2vVAkk69Jgp6Jg4au7KpLkVL3eS3Brv",
  "key22": "4AjK9yyaPpjChPnQTkmnanS9MiCCwVUTCABr4d2vzuYNHfxqbnCtDR2v6fWSv7TmWDLwDhx5aGAm943kyo4aJ6pS",
  "key23": "5dkRPMW182djKxFD8WR3w7hsJZqUopu6LVUiDERXDbs9PbZtUs5wCPmMTJ43XPNgjbHaSTircRLdrwoB7pq4E8Hh",
  "key24": "hrMkn78buYaog2tApAgfeV9xwW3VLB1WaQNWQertkjqrcUcurLua21LZ3xw3B3vUJANWXfbbpifnzY6BgiXjMsv",
  "key25": "4MEBKFiXuF66eaa2CNaNa8CHtv6TsdYPZqk8namE9YRrwC3gUiLFCz7tunCzHEFraYWkUa9zGLCiWsYtr8s9iJeM",
  "key26": "fTtPJ8nj9oRzE1pGBHJ7LFy9qBQFkz9Gxc2htHXbgd7KS3PyyTpmBfnm4Tu3kNh9ysYKrSEPchH4o27Fg5kTDq9",
  "key27": "4wENfdvKwUtAegURyMQuufZGNgJpB39taGDRocqhR5TUGPqZgXvvBxUVGBkkY2NmKMHsvHsQw8XYPwQSPwoP2SNV",
  "key28": "4vQJuzVjCQeLjnPfUzavty1VZ7cBZoFya9hwXdoGgT8DCDmf1PqHDtMFhFkDAfUcurYTDuLNA3SNNyXGksthMgBz",
  "key29": "2pNQjD7rX6H7xVZwim34U78pbZjsydNkBwf1aYpBo4sHKjmXBYGELWusWPqW3zmUoXjHy7pF5MXCuoRB7Ly33Xva",
  "key30": "4QqBaMPeRhRWtKeKvzmPj2Gm8W2fcxBCJbYxoSGSAfdXpWAnNGBXgMVtMmm9nAkU44mVpLHvDVUUJR4guSGv5MNL",
  "key31": "46RE8YkkHxzHfHZVRQydxCRzuvgQZ9Vq61GoZchXiys3dAqjmbtx34c8Pc7AiQkKDyqFpZ5nbdo9Koj6LZvjSz1A",
  "key32": "3ZKezoUvau9ZtKfeDzTRbxt7SD1AkHN29ij8Wzx7zYKBPWo7HRYb5xaZwRF7M79b94CK2crtLBSw2Y5RNCnVDgrQ",
  "key33": "5xJUBnbiLrunVhm1cda4i4uArtFtYNx9NCEt6z3TRqxkRKiUwEyvVzqM7FxXevFeZiLqpARULYHhNvdfqKVjFvpY",
  "key34": "34tCCs1EcJ6ZdmRS2RUso5uJSQbp3fyKuzfWbobm4nJnvx1kmRrCLHsjVtVvnzNYBzmdzQDmiTBGagExgy7cpoxr",
  "key35": "MwaJVrs2e87TfTF3zbypFmkqnijZdh83i1nj6BMoNyf45FW6V8Ukcb8c7riXWBWqxrr1Do3cG13WFYuyEFZ256Q",
  "key36": "2xXDGXbNYY8Hzqjogi2DZzQk8oPDN9iX2ewWzLv7jQLrrJkSazdCF3JkpXJRgTQ7pef69nECe67F6eA8YiqARPH6",
  "key37": "5yUDvpYqEapwwYyo3wipSqKnGj1zyf5boZRNzawqsAPkvrPCHvZL6PYmfde43z14fd2BFCurUjAS6bQQBRqykGmr",
  "key38": "4GDjgekAyWWthsUiWPA4gGLt6xKvg6uuapdEhYRjwwK2tofu2W57QbTJDic8oPeH2dmamdGrpQ4ZYgmHHNe8Dtbt",
  "key39": "TaCM3HQRU8CivrvR2PJKLPUo1DgpbdSu37vD1QvqpzL9MWBrCNicAY2niiCKyHFsAqaNTBFaxatmTjKa2kspGj7",
  "key40": "3eSmcbSEPhGX7ypJ74gSVgbzBdvgMh178o55RVEDyhT7knTqagFtwy1r1W3mgVQHVkyL8nBir7bEd5brciq519yk",
  "key41": "VtLZwkBcGLy67j96H2uiK39gsweu3SzJgJaYjzrveNsd9tCeVewqSWiFE1UYVVg8ThJptU1sXBtJG3asoNn9DKP",
  "key42": "2zRvYVZbHfagnjqEHaHVrNtFJHKYRjx88WqLYWtPv1zvUeujN73sG2gnmurxuDJN6J4T8p12Y6HiHtHwxV2D5eMn",
  "key43": "2ED9B5mbZ22aSefRaFZbkFUc2PxZBRCGimmvKqAjot76mg7cY3KdtDHePrczxkY3J4d29Zwbr1JEU81C1oqvuMp"
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
