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
    "3eSRUqQB3Hqg6JSENrXt6K4vhTGF7CUbrcFGDBTM84LDDWwku33TwB6r3mRjtmwENosHKDmWeKsn7MTung5nmQhb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "gZ6R4Rr3En8TxnDgmUE48mx3CEE9yfwjjBaPFUEETGynX8JD6QagpiTmkEDztdH29X91REmjvWgoQoPdBm7T4Zx",
  "key1": "2Z58VwsqWuPZ1wGtGXu8CBeupaEZwAriipE6ZwrH8NatPfSyBW3JFYzaWXmLr1KRVWS9qybchMZoBZSQQ8JAHgQC",
  "key2": "26mtWwB8dm7caeEs7oz3j8CgLj1t5NAHhcMo42P4UaRMANRFPs4W2ErGCStWtSW9swYuakkjaZvoAtmjqvdr1fKJ",
  "key3": "5QGcsXMa6D5dtu1aY1CfjymQ5p9wnWiRpaMKseZSKUmBUq4wASKRuTZAU6rpKutSY4EP3PAgM3nnmfSRPukH17L",
  "key4": "5TX2u3PRiV1KEUBFJCTsFHpFBjDGzTE2a31uXsNwkrRHehVTTBP4dERcqRwbxZuK2BfyKt4fQwwqJW5bYxcofmpr",
  "key5": "5HEKpZYFCghENpgCADw5nN5DneRb3EZfvw61K9pdihUuCREoUzimssSaqZKEstW9GABxDnXuvAgXnneozVAFaHDY",
  "key6": "4WBrRR55eyimr7D5kS6V6JM9ZLyDPqRSwz4nqBNuaq4Kj2aRDVRjfk2pT5kn38JoK2x7rDtVJMLB15rHDANqS7UB",
  "key7": "3v8Xw3Lf1Vsscz3RiTH6CkYsb1tE37gSPC8oKvWt1QZYyizD8659FkjA8Qk4X6w5m61qAmJWgy6kuDUJsRgJH2Hb",
  "key8": "NbmVVRgpPNCAQQxonYsN9EXqvyrrXdx8QTWnqL3tsHYjYvc3SzNwDpwUxk6pkUSmfFBwo1BcQ22ZhmFZCQM2D6n",
  "key9": "PcZCP6sZEBFucEvHhL7uouSjkB6PpyPAGEYb1xsxVkJBioaX7L5aS9aHesLeRA1JQzryFELw75doUn5e26uZh5h",
  "key10": "5CCXefrhdg7sAgeLkWWG1xrA4qVkN3g8tqzb8XwEnBdTnJJPs9gK4xxR7WCZ3NGCzDVmdGRU4QcYHn7iip8giD2e",
  "key11": "2naYaVkFxPj1r15JJM7SGnWQUfgJDpNgjX61e64K6HDUrVGe7mJwwqK7TUV96p3W2nRWwCXVyQhF2Taf68k9ZXpT",
  "key12": "3FPfZypMzB7bPzeV8RXdwmp87cHJhXdYEkZQhXzjx4VbuYjVBdimW5gnzr7x1JJE9oyipw6hy3ThbyeKVyhkgAwe",
  "key13": "597zJAgyT4htFV8WK4YnsV13oy8foR4x2QAvpcC5ycoRci4qkkdn8d61aTRGzAbdSFuGtzLR2irScSXxHysbGjv5",
  "key14": "4x9fYbDpRgRpCh3U5cqoxi9WGNxVZoHbCvrYbNRHCqgJ5y54NPAXn3BFL5TmkkV6mcAezvGrUzuZYMSvmqZLE5Gn",
  "key15": "636JszD75QmqHXyoue51dAVJnz1Ub4hanuA2WV15mctGxRADqMXXgHWn6BMu2CsJJnQN7jXutB5n4THpmBnDWhg1",
  "key16": "2mXwiULU6JyLroeMRNMohZUgPb5q6mJPdiduu2XJmP5kv4TtzrxWJs9C4CM31u6kCVrkMhcYBgTQ3Yp52DDyWLw6",
  "key17": "129j7dfGxceewosFN2fHkXAJYMmArpzCLvv5Ar5D4vecymPq2J6oBWU6JyGJuo97UjJfqCooxSVpN3pGoMJs36et",
  "key18": "2SPqx53rVX16jhkDqrwYuS7BBcw9x1cytsb5eJeCu3RehBnh4W3YRUd5TAz1NvyeQkBiwyKDsQQWEzqG6zLpQTru",
  "key19": "3XUyfFj65kfa4GySC5yVyQ9g9zBFC1X8Tnh2aWzBQjTzne6EboXN5AoDYRdViZGmpPnXLngtMMucL9QCVhrgaroY",
  "key20": "gk7tcrviQrBYiBWrThGVWUSPCxPbPVsQQmYUfY1DaZ3swfNwmUjpjFeBsVsaHyo9famwi6ZHwYZ78Bmb6kiQvzZ",
  "key21": "3QQ1nQPHL6bbNjBa1Tu3hcJJx2j71iTtauR27UCB1BXj6wAmj8DKChCUA8UoePr6yCzq4pyFqf8MRne3JH7mcU27",
  "key22": "3uzR53BeiAGuAyXNaisWWdE9Cx4AvYRRuPQTvSLLfEFEPcVNLm6xUYjHZZk3LvD88n2ciXSymP2LuRjssj6epkXG",
  "key23": "5APL5np5AbeW2EAahs4QRVGSZPKxKLKFHbBCbBHgtADHC1Ra63AEKp8BiQ5jHeMdpspDMMZgJTHrLyvW5giTQ39g",
  "key24": "4WpvoiaZpfkv8xYuvPvZ9rgSH7UaiHufXeyjJNgUBGE6iWksmSURsgwfaNfXoQ5VoLaWdZJPw6zDethUjmuMSub7",
  "key25": "3EFcWENX4kCLbgZiYjfwiVHYgWPeXqWU9MNMLxWPXxo466UJMXXC9rfgXzBHyU6mMgVedG3DR4H2jMkm8ynkUrFS",
  "key26": "4F9YMHZmsRFkqxxZASjLs2ffp5sqrDrFk1FFhajtenfU2KdUu2EiExrtaCE8zew3tTiK3tpwDUCwLdbBJJvxFCPm",
  "key27": "3FJAwBine8dt96vUS1D7CMEwVMm2niJJgqoE7Dz4HvqxnQE6emz7MxygdpFnhQJLcoNeD3oeMRDjjuAwAKBXEJni",
  "key28": "3vFzVGn2EQTKzQJN6ERgt7th2dMU5LRddXcqsLdcb3sbYm2g6pAjxrU1iQaF63yoNttnpE2QQ849ZugSGY6HGhSr",
  "key29": "xY5QEaopQTgUjFPAY4zomEqu9EFMU47eqt6TPUQuZtWoBVHzCpTJ4ATtb1igzBNd4PDy1rkbibZuJs9p9UZAP58",
  "key30": "4E44racwP3BDCerFdyVziHxifM4k8nTKAUUogVJGayxM8qtH7HhDegVkT8ebdrwxSxi32NBaCmXce55pcEaaWHGz",
  "key31": "eGrnZnZipWYhU2mFYCp66LtGtVoBgG2fPpy2pXcugbPcrqcTRd6M3a1vcZ6L78f6S7JtLv3KQfJ22Adt2ymtgtL",
  "key32": "TkrRct3WfSfKXqWu7tNyxLzk4nAuybHn7riyRktvYh4CmLHGGuiLHUAzLVMCtoWdcq6duEJa1pzw1RVBssAWrTc",
  "key33": "5jksixi35H4ssvCiLSgJueHQL5KjAGLKwhmDsmaXagQnfbHSUS74cmNz43NB7DPCNHmrk5dJZaHaeoaZ47tqbAWS",
  "key34": "61kbY7oqHWK3QNnioiGC68anU8hGdrQPHCRwGsBsAApFHQ7vCS1Tr1WmmQNjSM69UVts6DrrCcEeWEfgEBmywP2j",
  "key35": "43J5uotsXsW7zY6iH8sagfNwvTGmjqqUyFzFmVTioo9WPp2N6f5duXMfMQ7mXWHGpQywbPgN9G1p1byEpqzvK3ZN",
  "key36": "3NfxLatrsE9vhks8NrFDfbECtfuuDbxqzWn7PSDNeGvrKWBfB5G9U48AR2YEg7yi1n2SwWAsbhgWx7Tr18Hmuf7J"
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
