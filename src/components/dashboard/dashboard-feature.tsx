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
    "2sSRXXR2HxmBtUEJrSjepRJeGrXdsQnBd54Ti3yrE6q2V31hWeATXcpGqFg3aHzQwLBeiPE67QkR1cQKnKe6fNZS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4mu5W7GjNiqWe1oz5gAQaK6KGCxJctn1emRcyvUX6F3ePQxYn4L423fNdPNuxyZfHKxeJyKcTJFyrh7LoWQQMV6p",
  "key1": "23quZwkRiCjxxs4ZugkJnfPqSaAXQd1srML92AXRVvTUbkSZZjEdgGypYtn6q7AygCHj8A7XykaFfmSfHReZKBEv",
  "key2": "3c5PpPYMiSTayeEsRxDrBqCnXLezoQoQ9cfyPFWBZxGh1fmgfntuwxvGLKBLTnVjous4qjx6R6L56H3TrRv8UWiY",
  "key3": "4F5ikPBDD4x8mvRPjyzTFcwXbS8xEDzSQNyPxEAQuskxzLxUnmWTbdMXwKUrpN4qJXxxqcLz8AUWjqHUhegMrVQ",
  "key4": "3MA423hngJ6yEk64ss6JAvwYPsjSy56eoYLRo8XfYJ68C13ScQUJQhrQgXEostwsffffucptYLiqz5jbryHiGbGP",
  "key5": "4Dr4z7iA4sBwk2V37S6YBDwuKPgobtYAKXpfv85t6mhxmFyZLHeHSt1p2vfSdJh72PqMrFBoit3XuvPLzawt1iYa",
  "key6": "324YxZ9xfSCG3zYySd8jTVacrTqxjnuSgq7hADKyRCDz3Te3JPbPZXFxHEQqrHzy3jDXga2X9PypMHLMzpeu3jiU",
  "key7": "ifMyBX1b6zNWUwwJpRGXoDRBBwSL9Vf7yfmUBiyRKDJdLEpFqzd4Eh2UEB6Xeg42cos7GRoUtwgfx4kymbFQA86",
  "key8": "4wLZ6JFhWbAVKTwoSQZCSxENiofayRgZZJ74bsYktN6VCfffg92BEmv3gZVvzXZ5VyNx6iNfkP7u6tSyzwYjteJ1",
  "key9": "4hWAcJzX4Z72HhVRMXyXDj2a4PJhDccXNUJZghoHop2adBmbaVfgyGXJvFbambBkVMQGXuuoB831XdjJJGdT3UCQ",
  "key10": "3Rpf1SDXSmq3cenuMTB7T8t7SiMXs81haukVyfDvrneduYPqL2w9zoL17qZXHDjoZT1fad1Mm2AArRww3rpescZa",
  "key11": "56CjaMFxGppyBELzF8vYSgvaY8Wao4YLUzpyHKYNxNzc6CFPaZGg57ZA5Wx3n9yX67Km4QpTZa248UChnNevKe2a",
  "key12": "5HAM4ktbMx7CSqsiWBK51sqTuPuopo2aZtGC7inYAbR9iJqEwgPMA5csYEyqGPzHMkYa1a4Dakumwpz4khThB5tU",
  "key13": "5XLBSMQr4CTou4f7esmyzBpadhSAzvgANkpmQCyqo5jDCaMevjVUo8VyCnsEvV21xxSnXYfjNjjtzFhszsNWWj5C",
  "key14": "4N6TBkr5XpXMGcMo12N5Ezx8NGKsiUg8eZw2cTmcuBY4hHfcK6DZsoZ8jk3y9hw9bYG2dydJY9yCCAd2dbK8q5Pb",
  "key15": "31MN8iSSXXBfyJoERRp52YkWEr1WzobMfG4LkbWJx2pMWm8KRbDFpSE2j5ybHNGEMCY1Ttw86mQKHSs35PvCFAtD",
  "key16": "32rsa3qomQCSfBnn2bGFYTofBxuUQGbDwvsrFhRgR5VvKHSiUndHkEZDMdw6cT3zPNPLR1aNNfsxhLUZHPa7NtWP",
  "key17": "JKd12dNkCCiEYHoN2nvhEJHeiUXoT7LMGDUdNuEmPjFp7nRBxAxHCBiLMMMTh6bDcs8aAkZZoJEE1sS49LwDmxy",
  "key18": "3FpQ3MQcz45CRbb9h2Fp523AHHfEPdeFyN2avaqzuXH8qmSFKNL2JhYDWAcU4VPPkrsZZXCnZSE6rKVtV569sFFP",
  "key19": "pzsjS1idTFgGk2oAZKkdevSXE2tKBqPC2aMTDe15EL2PfWJYYfYGLu2ujtjyEXbNqQn5LtvDkrTpA4xnLpxwe75",
  "key20": "4z4gVRKwg8KhYD3vHuNv5Ga3nBNdxwde93qXJ25H3mKzFBZakE9C2E4Ng6ge2qXmgHcYJpLdtA9PVYhGn3P2DBKk",
  "key21": "629jaGQsXi9vgomBCZMiTSLXgC3YdWcMKWcbFishyzKJcrPf124BAE7eTRupiJ1NkNg2it2awsAwkJeWE7uVh3ix",
  "key22": "2zqca3pPLY6VhJmkEmYT4D2RHwBRXnihD6AqYehNwKcRT69AusgewZj7sT6NknntP8QU3ehq9jwp44xH655VerjF",
  "key23": "TAZtPbXwa6izFz3BTgrNrMSHENRoNyaW3d2PxjepAwwYUxqCLGonBGCkF6x1JY9A3cXPnkxZMponF7CyedqV3xu",
  "key24": "27QA51PPNGPn5yZmaok1AkXPzkFt7qW2CAez2S91ZGXh3JHAqNme3tJJ71cc5mmZGC8UsBaTVvXyUXi2pB8s2No4",
  "key25": "4prGuxTidqZg7JPwWe8ffFrNxCJawS4rKQaFrpUzompTtNAvME7gnd1SYv5DaExAJtLEiZdiuzuwB392Vz4nCuXv",
  "key26": "2ieYBzbFhWG7g91nebmiPb4LztVHWyREUvbe9ooYCfRYynnyoUuQCHHUprvpURBqiGHfgCchnCWZYkDuvJ5hXgm9",
  "key27": "2HTvWrFm4zjgev5T2cApdkujCMbFDhBCNohX8VyKc5xdq2zEMEtz6jnhJovMJnVBriwWkFyoi3ks2Tw7TcTWuihb",
  "key28": "2KzZebfh3ubMqjqbYzNWtHtCmDYbkwGKzFXNaGvH468n6MqgK7bsQkxyoeDaRJmpxwanDUK5S8GMcT6HnSzWAGhp",
  "key29": "5CxZTMnGKbe5NHthWFfKVFyDqmUFpqGkozTVgaVokbVoWLtCAexRNd3N3aSvcikE2249EDeLyFms74zYAUHk2Pr2",
  "key30": "5S39dykf7f7uBaycr2BJ6NDBrTQJjTryLQ4B4bBBAs88AA78H7oin6Kmfw7vgUvqH9KkZZwVmyqvoRiSiHiQBYDB",
  "key31": "sppGN3Jxyjm51YCRpgK4DDemB4bqhGRJHAkWLd52q5DnhjKsH5zpHaVzgxcjPYKYcyXnRLnaZSGkE8JfPT4sDgp",
  "key32": "3kp1bqiXn2jcJBQtyAe2NEXDDE4g8xYoBcXafkQmWviye6nYXLE2K2P1XYJpE7nNznrff6g7RnwtLzUZhbco3Hk2",
  "key33": "3aW464htEHxYmrgyrLgEd8yXiUnQqecLf9jsMVLutRvGRUjpcZTmpCHgyVneDEvXhQiyEuEX6knvmjDTqXJkr9Ec",
  "key34": "3vPM5rY7MKxEKxi3NEYNTyHMRwPZvPDBAGmVAfwk7yhwTKmjuV4qoJyY5Bupg4Xmt7BnhUkpc8HKLjvKnQJzZcpY",
  "key35": "5c1PyspWLGx1jbkSrBk9iVUZDCHm4AZLFwSKgiE1JcW6JR549QJQLjN8J8swv8j15onkzA5soTGzsqBeg7CTLr3H",
  "key36": "MPwpv6YfMJvACRTHF4GUT5Dahpty8c6SmSz67axkKqEdUMs4dXG5Ji1FYJmi19erX8RarDubhefe7RbSqC9zz8C",
  "key37": "4ET3znEVU8fjU8uiDUDgwWLbCaneqLoTgxP7yuVRz3M16JY6DycKHkj2yvefKj3PRCxo1gw2aiJjukH6B956J9Ck",
  "key38": "ZsEk3otgxyY2PPL9u54mTCZ1KuCQ6xURAxrmAvVA7uVfbemLuA74Hvxst5KM35dCmeK6dWmAdsJ1gzAQzDBK1Ay",
  "key39": "44Rnp59GmuzTRixXSBt6riukSRLCBu6SEsDvJzcQub3Jb8UHHuaB9PKQH3G2end3DBmfUHanmqdYJsfYXCcxTX67",
  "key40": "4Rr8dGXqJf86zSHD9fboMWHVBF1KK9WqmLuLFZLKvS5HuewCh31aqUkSTHLCGGinfaMRRwMkkjmJPEsQrDg9fUYS",
  "key41": "X8R5zoGJdpRBzjeVkaHRG43N5D79tkN5kiZERumKEKDPWKuHXWpyCb3bc4GosT2RKWyQdkiAjFtL5SuRwTuRzKp",
  "key42": "25VenUSRzuP2rKVveSKkLNNcAXAGK76utC4or18BuB7j1e5BP5ws3gywJjcu7fA2cguF6x4BdxaHZg9hPjrkJ9Kh",
  "key43": "5EMpg2vKHStFCofCT5tKV3Mc2xGb8SQoaZiaAdViBh54Uwn5m1qUTZybyXeh7DFWpnsnN5omPm2gP7Z7iabGhJXG",
  "key44": "4x15gei9aD3M9BB7Udkgjpi5dWUFRj5qVH3T7D13yNguqmJgDL2NvWntiTBLbZy7hM9mhtew13TAp9TUhLV1y2tp",
  "key45": "4yDHidmqF2yCCwgfUDJrkXoQR1L1RGZy1A3QfVdgn28tmJShVN792mS8MEpjziucL1HAAFXcwgJK1MhwRRBFjgRs",
  "key46": "5SEwCEnjdkaqThAw1BCH6hW9soHMucTR9LxKjpBzFUBQnjNt3Ec5Gq8uFzRS9UFYMYGurKaDkAanBi9K3Bk3DrdT"
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
