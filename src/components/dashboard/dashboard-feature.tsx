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
    "8fkuvRStEKxf199NedxuLrap9AvaisRHWUZBRLvyVCw4dqp1CwyK1GSy9JcUUoZaHCEmuoBNto9GVK5fcpXSffa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2XaEPoNBFyYNxcKTjZPvPyCgBQzNJZEKMNKNJUqxjXKgh5rB39NdgGqJt1kNy8hHTLgapfZNifSc3VhNf9PsEQAL",
  "key1": "5fVfWsFMwiREQuB39N5at7caSr48LmpR2XHLXpiMkdBrkfJawt34wujQh6ah5ghpsXNiNa2drMU7XA4aBAK8zbxt",
  "key2": "63XZpCYNet2hrWqzat2FFwk34WF42e3mEHnd4vs5cHBmkXnnXPAGPW4fiYKWbP5zsDgdLVu4GF2toaP9e7wWVUUx",
  "key3": "519z3aqFATniTbRHUnPvn5S4o26FJMwE7cir7iBuMs64SLNhVzt6jiuaWQG7v6ggWbzXzZt1AvV3WmZgXjkiY1vB",
  "key4": "oa8iy6RWfaHUbxJcy8uGkZmoYzNxV6sKVNDJdmEXVfDKCksyGruAo6WSjcnDcCTFKyvyvpQnn9ZP2VRSC7niKGb",
  "key5": "25wHjBdUgsXJfFSKQ4xB5RjKiPCdhB6eErCHMfbL19iwZGS6wf9GPrsLGKTPLpQBpVMuxB87agS7U3owW2nYUGwB",
  "key6": "2rhQjRM8c9jaGE63gZNVS3e1mpFd5uX9Sq3VxsUkBhFDiCK7PD6av27xC3RqZj9jvUUYpZMaSJF9kqHkX9dBNK1g",
  "key7": "3E2ecEQ2SX6M3vvJvQ214zXK4EfJpxgT6GUAZgvEVFXyrRF54JDezzn3KbXMCrymqV2KGMYV5PKcu5ZJaZDiU4TW",
  "key8": "5f3UY44gZBiuUs3jWxCg8VGmja1H22cDuSGa2CqtiBxEV56LxmwogYTk4MVUG6t44LdzrAbDn57ixCatnXuEZYh8",
  "key9": "CPFKKLGZ4cRZ1xKiXW1tuQQJ42stU3QbwYso7iGh41anrHydmZqLiPNxpsfUHQ8tdZtNHtzQgzxQtbAqMAGAXAm",
  "key10": "2NTXArNF1Dm9GczrsMZ9qXFukNi8QkWLVmhFD5sLYJTGW7XtDN5GtUCRVGuoiZGQR6jrybyTq9Fso7erygdz8sFH",
  "key11": "5tJMbWio7MJ7zXg9BVRt9cXWj8AKgkztKi7fhVKbbTgjVZ9M8D2bPXchnEro37pxifEc7b3AjViGZYanq7SbE3qT",
  "key12": "4Aopq1E1Smg8A6PDUzQ9rbrstiD51NNLZyPkg1wcTERpwzCi9Liyj1yvTvfjWSpg3N5HbqAL9LDLboRsmNigjv1P",
  "key13": "35h95vgbRmn1ch2Kx8CLGK5nkre8WU7U8CYM8jjUDToNhu1Tqkmf1DGD7ubF4RjhCYPXo7jzjpn6nJvoyE5oZrmb",
  "key14": "EA4RuUESr9Sz5PQTqWLMLiP6WHd7TWM1ESdiUh8QVqo5KrchZhKjoazz2W9xCg2jkihFgGRvhBsuPGsJXVSG9Ux",
  "key15": "5uTyRHvSCTekvnQuRVD7Yv3MKMsYzmikWwHGS6Z6hPpSX4eNQHRXDe5hctXyxxHqBKArypaqKHa8mf3KH6qNCkmo",
  "key16": "2PHNYJWEyjFKi2tWXncGjW6M3HLQ3aMfXx5Av8rnasvprAQd3kEqkjvPwR9ZGECxuR8kanRZ5mEp7fAP94pKfWpR",
  "key17": "2X2CEh2PME68uicysgUKLXd7SEhhXo3Mhkx6H8UkEmmaQ4y6WickTp5DxkFzEXBBUDwpe1rR47r74cEdoSQhyKz8",
  "key18": "4p7VA2ZHSU5TvCh2MbwtrJbFMUybNmkk5K3seNTj7AFWPppfJ26eNeNeGm1HgM5i4j4S3ndbSz5Ro5zu9YczTsXV",
  "key19": "5jWeVg79Z5RdNWbmrYnZQ66XWSTqXEgTpDt1LwJkH3h3kHuYhZUU1Y4szKjJgdsibyad2wNLsAdZbR98nejmxQA2",
  "key20": "3noFdXnWVmRjPDXzCdkhU22UNr9LGdTEv4EuJGbJZksBfjfLEpW8TnD8GJ7wWaEP5hhVHQTeEys8bJYs26Bpw8M5",
  "key21": "4CwXKkvAZ1j6wpS4RZ7XUKzAgNUtstE38W5oWRVfZz7CtrJqp1cxyARSAD2oYaS3iF5uBYFhnYT1F7ZE5qye1Vey",
  "key22": "rFN36QpyAjkLAUR8PZN89ZD2p55gZ1mHL62jsTfvdBU21NjE7CCWxkwcHRNVfMo8S5NAFmXG17oQArERSjNWB77",
  "key23": "4DAXAmidGVQUBodtmx82JidoPbACPSiYqm9vDfK82qj2wuCNQMYgcC8N1q8WAMsy96MhTmqmHMm1VET6poDgiLHM",
  "key24": "61RBoxFe7HyhBDjAZBGYnYkXrQGFGZzp27D1hkRYaiqDrPBsZdN3D1hMDernB6HNPuwBWVGpUuRNE9375noju5Ns",
  "key25": "3jNkQ4wrqMpttFPM4FxzR8FpSv4kbpA9sM7UPsafqLr6gCDBUZ5HjEWwJASkPs4LWKLSgT2Qro85Ca5omj9c7Pxt",
  "key26": "4rVvaGgYhYtWapjVUEV1ctnRHuJ3oBCZdBrX1dDDL2MfC4LkeRMR5R9JKkPGtJHLwFxFCYe5YqRt4V3LtedEddc8",
  "key27": "5uBu3wyBy7R3A1rMokc4CzKUTbEodSPEyapqnLHWXvG19SnovVF6HFLsk98ppVmCHmjzgo5rRLGMy7g69N5TzFcq",
  "key28": "2NTwbvjzjuHw8DiG3ksixURZ3Dck2SGKsUXJLQ4qCrLjhtoht5CxWHrKVRYwQz5DKrsembbmzffxWYyRtTJp1exQ",
  "key29": "4G3KyswfU5vPNjfrXGFhqXvetgq3zKfDkXsE8aWGJ5iza6h4J1bMcZDv7jHi73UtGTV4NSefJCojrpRknuD6uHVJ",
  "key30": "qH3zQUeQmKdMSYMtuYt7AokywyTBbcTZVokfp1McjBYYJ9jS2avE7GevBeVMsSnfjhi1NDNS4o2btr2NV9zwtWQ",
  "key31": "3M5pBSbTJFP7RdPq2F4GEMkzAqXPycw6zZhfZnLAPPjbTtW17uTrV9GgyAU5PTpq4FGVENn6hMtCELsXBVTFx9tu",
  "key32": "3t4yLaR97tCnkwJSFxbHinZ7UVEG8vgvNBgtX3TVe57JzZb4f9v8MxgVmoRZfHR7amHoviPfoD7SPdfZc1ZF6BPB",
  "key33": "jqjSZNVJhNKaRxqpp1ATxuxxMB77GGkoz9uHegZyDX7FQ7ZdRHo6agWtaR6Pd9NjHojBWbVPEXoNYxD9wzitM77",
  "key34": "pSLtbBs4j6oHyvHW5hMwuYHi94egNBmkzzSr88ar61xJ3tPZ1qPmuidiCShDPUv1RtKwnp2vqjn8yFTwCkBBQJq",
  "key35": "5StiKNmAfdpJSkoXv3vKY8tnB9sCwRtCrFvoiwnp4G8p3H93RdR1h91pHTKMxGmuD2AxotYue5wrAvatmYqV7Q2G",
  "key36": "2jekvKfhBq1KYNKq2gTPxV1gfX9ZSgcy6YZPf7byNUa4cez7L5Pb7qrruHAdVs22oTxhbqGznH5BdWzKUnBojbfi",
  "key37": "3TpdrAJ386hzUJiJoAdDLJMVS8euoFJMmSDVzd4WfsBG5DGHb63rpcKEhzDcstUFGcG4ZNo4AsRuRnFJpmDah7B8",
  "key38": "264uieo7LzBLpzzbNcC4mEEqkHq1uY2LuyBhkWm3SVHdzQNfndT5bxoFB49yVhGwusmXaYjQN4i2ZrQRm2SB6Pgq"
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
