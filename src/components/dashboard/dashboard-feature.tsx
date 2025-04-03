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
    "F5mqejfKRdUUC1Ynu4uEXYRK5GqfT4esmkuESwddQ8MdudLugs1yowVucgTNLMuQaeVQubYCzPyBXdvBJ2BrHwz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5e1Zkv4jKbctMw5x4vHP5Nn33p1gE2ekkYNxEmQkiKN6xU3pePa4vD2UmoucKf8jx1AgPhGABdzEycPAiYEa68t9",
  "key1": "3UEo16i2NiH75np9aBaAq4jHj2jRTDpfhv8imEt3akgw5fTijAfJLN6sCwd3kNWzcHvnSYpkWgGpom1QrmMJywtS",
  "key2": "fGYbgYsij38p9v57RA5sFXeiByg4hGYsKogSDZpg7NxdKRPTAW4yPk5Gy84QYBvjGhqJWHVm5gA7sWrjMXZhBtB",
  "key3": "pm3ikXNcR3kwXtUfEJvEZvkEsZfMR8pmgxGjowq3P6ELsnRDKbzPJXT1jejS5qTbDLPpfAgDqYbtaj1qsjQq9sJ",
  "key4": "4UuBvSuiXXeAwTW3j9QDuW9iHFRWSkkbPNPy4oRhMXp3Cv7RZAUjCd22aZ2MRkuoNz3bXw1nCG57GeYSFhWBCzeS",
  "key5": "3Ti6mmTWQuFDXMVXcUZfqTZZjzo7DFhKGc6djtsu97NuDx2whAKPXieLdrxrcPRFxYSme9oB8turdqqngSWRXPpi",
  "key6": "4JRDWG5Ees2bcRXzeXFPzhDqnYgwRWhytHbpX4Z9egpGLPaBwGDaY6HssHQm5e3btyTsqUtvf7pkpPFB18AAt65M",
  "key7": "3EQMaiG2JRG95T3RLqP73wy2qcBz3tpkeuRsCSYSPAfsXyveiDKRngtET8fQUEgDQrvsv45xY2Y8Y1ang76zmFu4",
  "key8": "3ucPAMro8qT6G1JGPF2C9Roavks1KGC9etyhaQirLeLzz65Ba3iND6QkqFxQCZ9mzaMCEdvd9UaSjPexTA36MDof",
  "key9": "N8aHjuQGaiRQoZPAFJoJ9fw7ZdbhNS453wie88j2TsnJhnk7XCsC9SZrucXEne2PPBpU4thP5tabbHJyL3vGZ2E",
  "key10": "44P9GZ4Js7dneAzCg4nvGAAWW6cKWhpvzdbEuCdY5j91thUybN2mCYfR2LuHHPRBqfESHCmSYScSNofDXYowcZ2t",
  "key11": "5Vzq17pydCmuXKq4YyCxeFYLixDWsMABKBRWSaTTZiqyvfXs5xAFcnWioBMFJT9YNhm16mLj9zSNBgC38zT261yj",
  "key12": "39PPMuytuqvWm1XqAd4HvHxa7zNsWeEuzp2oxpZWnjVYxhEHe2w3wUYc8NfKTMxWG3PaDSmx5xffFhUhKsyL29Cp",
  "key13": "3ZJEK9Xp2hnoEnkFJtsoDbxjUfjrQP72XrXDb2C4YDXnud95k5Jrd7hneuYgqwCxp4rhoEFxfiKy7f3rgE6x9Q61",
  "key14": "2KcZryKCMf39YU7qkDvuGSSmA4fEoiv6pANte4B8bWD2H4AJQdRz9QmPBZNtDvetkKeBZzjMWBbAa1XLVo47hrhq",
  "key15": "VvP6tRZ8jj1reQkdLKh9HaKdhYabMDTxrQFZ756EcUWpSVPSV62CHALRYd8AHnr2xrn1L1FP7JmijjpnZiyGDAU",
  "key16": "4H2ZAYsRgmwTb6ioH9Sv9VphvYbeNmS68oARJCrvSAKa2k31XC1gsjbQfmavQocNrwERDV4vBHAT94Gh5uGD3QLd",
  "key17": "543wEnHVGo9h4biDzj4pdtPVowVQEPew4ZrjBtTb5Jtxs8pLaHXaTpbtFQfpzDHbjmNst65TTGCah5L6RWAh8Jai",
  "key18": "3jncYXWMsQVBCwU9NoakzkDtcoFMMKd6MFwFc5Tsgy9Ts5zPFWke8FQjwrnyvQKK9vLxJCXHFwcPz2RVBN1hxGCZ",
  "key19": "2MKDxzX2xC6BHd7wtmqAuyGLPAe6jathQMG3PLcoTbfUkmTRjdqXawmKS4648SMSHxzwM2BiwaThLYXdPXHM6ghH",
  "key20": "2scPQoyTe6D9qKZpSzws6Zj6nPpL3ZgATyPUmK2HHgzoT7FLVR2kRT96wMwVjtszRe3DR5usWwy7NSmW2pR3mKc8",
  "key21": "4T9HAEzy2mhwMxv5DSCV1vJcjVf4EYBrQgAYDQ44WShAzv6vPvyZRdGuR1XPdLn8jNnz3Qma3rV2bwvooeKpLC7q",
  "key22": "4jqA16NsZNPc2hdmctmRqWkVh9QjdXXemkjLWicQ9fweMCHfCmXP8u5UFApuQkJPMS7uhBg6xW9RJ4LK6vqzrK95",
  "key23": "2xJf9EAGDNmsmh8aaqmQ1aLrWuER5J5QXX3pY5NnMYdiZMTd9g6X8gsiD46RP4qGQpAFfVPzb5uukNmo8qnKuPJp",
  "key24": "2H1VEQPHyF63dTnBbodvS1w4CnhHp2DoBzZxu1fMh7xDtWDwxWQHLzVhVYBss4ECuSxrTxrWNoMQnziN6MjKkCW2",
  "key25": "4g1s1JSmU8zCbjMA3mrc3dCCUn7tv2SeET9DMqrH4URKsSuRy6UkeWZWVQohigLbUWTRKFVsrz6gvQfsM27xHyMG",
  "key26": "542kuRfWQdxxVksAEBtwcwihyUZLF4ERGChxBP438WxH98X24B1zYJLphMCWdXAn3ZkmBdKjngacVDTjRidRcNqi",
  "key27": "3sDz5cfBwE9mGDfVsob7JZnuhG9Xnf3qgSF4ZHpCoaSqwELSf6XezmhW6WgEm5ehh7X3oiKgALnGvB3LfTWWaHzp",
  "key28": "4Ttyt7sg6fMSWZLuZ6L8nSfobwmu26eLNr7xAs4ZpD7GGCyQFu5KkaNR7snxLWEwfb8rznHRwN5Wx82sCr3RLxgR",
  "key29": "4LehGDUUkCn717ZPJH78LcvCWnZH9YhCEnEaVdcPFX3uDBnTgwCTg5MJJ9x7mYEPNFyJSZ211UQsxKJLHEzaH7pt",
  "key30": "2HNdg2575UVR9EBwDLqmYQztXxmfRRaSWjE8J6MpNkCgFJJEZzeRszgQU8HEP4iWpXMz1qXWabxJLZ1nScBJDYhi",
  "key31": "NNLfcuUANEjKpGqVWcjeaDp3daycV1ySG3CzN8a2vG22dcXuBrWFz1A1FG6inDQ3UJabGzk38RD3vfagVswa7gp",
  "key32": "5RnJpBBR4fGx7bshGyr2u9ryWTht9C8ghZZjJeNaXab3eZyCCzL2G1bPRLzx7tACKKoJPbNcuKfVtrwdSGJvw8vJ",
  "key33": "42g3ETsT9RcaxVJbQgkVCdWvF2RwS8XZFkJ76GvVucNmFN2b1LXmpTcd16REqqjpaJ3dATMDBxCuKMXAAh2L3hpH",
  "key34": "2AbKBMtvcJNwYMWnAtjCWE1rRMLDGAdSsQQhYLHYgKbdtQVg4LhwVPdx8QwNwJf1RazCH17UZPjiY2LHi4wqzP4g",
  "key35": "4rp7GBzieNt7G1NA4HHLDZeev12VG59g2chbxaV3wMu9mTsbh9SmfSezk1XcCtJRi1Fa3qMprZLhaWcqnFbMBURi"
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
