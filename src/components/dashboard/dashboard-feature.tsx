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
    "5t4NVovBtERcNUQuAx7WDnaScQeQkzcFafzQbZs7UtJQnHkVKcmVvoBSR3cwAZQZ2nCJgop9YpA4YJHcmkPMsVSw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "i4nLF1EdcKCmKY95QuFpcwGbbyMoapzZDkdmpcdwEpGH8MDNkXA6d4yXstZY4aeSsXdgMdkwiwbynA2r14a5ywn",
  "key1": "676LJgkneAHhdpyp6MKQiJnGD5v9UEaVkrpQRqMwtVuSgq9P1JPsaAUzNKTViEPEUEuj2SLzQU8cJhxCV1TawRQo",
  "key2": "59pL2aCrFCoq6n3WeF4D3o41spDNqEGwgKi1oz58oPdpDhXZ6cPNZsoe8ii6kMLmzBafnzejp3wAbyX1KLcLus4D",
  "key3": "5dUKwVvxk82FeBrrCxBsCeoczAKEMskxTuRvKRpvUa3RczxGNyf5CXArXny3Kj4w2XZoiUZyv8fqcrR7wNcx7EaT",
  "key4": "49bBTz4Av3XNoMvHJiHWJ8Zkbv4drGtELet7KAEtqwPTRmdckejwxHJPKXAjiwPFn5LyLCVca76KtASFznKu3dtG",
  "key5": "orM1egi1Mu5vi9P1aAxnDvP3N38rtrcEJqgZjzhmsn7rZZH33HAZqqGeq4CMiEwccLC4ZGmwUKUKCpZbkKwvwoG",
  "key6": "3MBhvfRmfdoVo4ygB9HQ1rFKZrCy45Pf8mFfRbR6kzwusUbhf44kNbEe5gsAmsjWmVfzBTmNymmFijdogSdA9L3t",
  "key7": "5mETFjoFwrTMQ1XWz19HyiEnexGePbqaV3NtXyXogezvy6EhWNqeAPm753HjCMJie2uSHHHktgZn5fhBt9voPsND",
  "key8": "4aPaBLBzkjBkFNTm8HRvmBRMpd1VBDUC8A7MgFaXinxam2LtkZNAGmdSErzvF3yczH9MbMFC7GmJhbS1r1jcDS8y",
  "key9": "2BHsEXG8iHfZJFH8x8NQf9qkFKqyR6DMSMESxh9W1zYmbKvRzakMHSqtFvNGDUJJ4GLcqGBPNQ1GWrLBuxMna1LE",
  "key10": "28Hhw47auijyFcK7BUGzmX5BTjM2g1MgUQcXsnsmJB8WWGEA53w9DxVVbjawu3JoVaXdAj1b2H4Lw7n5hpdzjF9t",
  "key11": "48VToRKBHmoE51xKCZk2bLoyYVrEyCqZqUjyRmj89yNeVF3eua2pXAtbzYpKtas3fAPGydNzAwULbnXVrLyfZ4Uu",
  "key12": "QYLusSKwSg9jS2LJGnmhEd4S7ik71KCUgCK9bdKo89BpSSRTNCyfVZew9Wzbn3NETuzfbGM5st6nRcA7NL2orq5",
  "key13": "91FkEH4udRAexPV6MweZSYNd2TX6tsTNVf2ZNkS6HgGB9voazRHWBPWrcrqRHu2Wou7H99neRMK7YkoVSVVAv5T",
  "key14": "2YshqGaSzHzdNoVKMMsMK2b2cZQ1zWFrfMa6Uvjjgf9mgNFS24eZXXuzRxTseDXQ1A42eya5zgkB8JedgpGWnJw1",
  "key15": "3rqWYrzc9H6H7X9i2xiksBXSECgrfX8FzQweJTQ577vZCEsKNscsmQwdkiETwDdPp4ZgYqqUergMSXnaieEuSZm8",
  "key16": "3UV9FEU28cVdXAiEHUoeuFwxver3tvKXa6sNvkr6dpVzDk93XpLNXSDnTEQfJj13Kwi6ogyuCss68FYUWvBoKP9q",
  "key17": "3LhLTR6VLnJrLdoUn16Hdf7QT8SJ1TSeP98g2BzECvNRJjBh6hiUqELktryWgKEZpSHFdp7bqpJ9s8w6B2h6WFpC",
  "key18": "4qA7Swv9pEtm1hvACK1dP631Jv4ahdgj9t4ki6DTukrmXJ2H8ejfdP2Dvpfq1uRo1eh798jNprLdJ3vtveDY4NMk",
  "key19": "3PiURqAAyE2ujzQ92Tn7zh4tZ3rLnBUj1jEtmWrEthxfsc5mRaWyDEVrkk61EdePXJzzviF1MwLkcxU8yJsm655t",
  "key20": "3Atso5KSow6W7nwHQ2FShtqRsQKco92UBfWTzVDLAWXiM54SWpcYt8PrxPMCTDJEPKThhmdJofsy5Z9SmXZkJfdA",
  "key21": "4iPmixW1MYBKtWW5YdJxw8tMjLmbxZGUq8TJf5gKCFRKxtXaw6mkCaFsiGyDtuuPrqiF8zyuvaSq19WV81VecaZv",
  "key22": "2jQNkQ38JRRkEjsYytmkAxUpdtKtqzUng2b8RqczHJHP2E3DzzfzzM3ThEEQzvctjqXugtRd32Ks9xPdnT9fbSFs",
  "key23": "3GFFNEXVtR9VpvsHhjYp5ZyhDJum865BWk2hujAxsi5RjCnbyYD3FvsrxgLw7fMtcde1zsTWgPdRxkSjXZaGHs5e",
  "key24": "2ZWjjzWdZWh69dJkQ9kxMzKVpfAk3mcB8YbbWvp8wwamA8oogn9QfWLYrdcNsrme9dFDveGh2xF23DdRjA9CNh2q",
  "key25": "3AKdGX29T3bxYJBjNxmbdQQMG8EUyU2QJmgEzMaYfrrd28T1hKqCs1125vpbEsoAYiqt2diDKffH2EjqdeatKf6s",
  "key26": "29T5RsYbC2y2EdPsD6U1CbhAwgJ49mcoH65gvGTwywnW3vMJytyMXJ1X12LfhcJyobcahb5RxipNGsnPtwTHZD7d",
  "key27": "2hkpVrDyhvpp83FzFrUWyWsfcZM5sfyy7kzRprEwdUAbpdNrEHXKrejKHKkbYih8VykgwYVX21FJHUs1nXNuPXfh",
  "key28": "2fwxTrQ5TYVqNfZtq9dS4ihpjm6giYiUpWZRETyodWizNaE4d2Mrb9w3ERDGRbvgE9stAzCLPfQopDw7UrTECDak",
  "key29": "5MJr1StFYRCLjsi53Kfi7Av2NdGTdVmFTUSPA8FQUzeoDuxiDD77TRBmShkCQAFeLZxHKQMaDc4QASYpywXUzBaj",
  "key30": "5JP2RFwBUxqPdUAua9jHxUdT5wMKcine2HuX8RXn9oBwEMiN2GKEqDQLtj8hhSUiJzd1FibStbUZFg4ctX2LNabW",
  "key31": "4tcmdETfiggF1V9n9uCp14JKdVUKwce167SFKCTVLVUNLx1S1sLf6jGRRKJXXm3EGCzWmSHXNvbCSYPL9b8LwFow",
  "key32": "64uemokTZUvTRQ2k8pRZjPvEkEJaedY9EVsf7HueG6eurNGEjWbhXQbLKwYJHCBv1pf13frZhDmD7xcgV8763MuH",
  "key33": "MWL5gjtfe5bStnMKNprzorw3fuMT2ThtkPQnfgHZ1XfqtzxAtJuCJMenjYo73AuYsfHBc24z6midpSF7PxjozHi",
  "key34": "2HfvkJT2BwV6CHkrqm1ZPRSqCPHMMQrYDGgnypBdW6prmdDybqCQnVENXpauKRBVKerFP7EQiPKeFsNPLjAPg4j4",
  "key35": "5F28M4F8b5nZmjxTZuK5Gc84oQHJhxouHoJwstDWyWEK3iKR6veE3QmJoChKw5N2dHfQXM5ZYjcnY9Lnm1JTD1Y7",
  "key36": "2LseV2on12VCKThiYa7onAcHnqiU7aXjotPAUeenjffxpjN9PD1ubwk6HKc1FBqVQnzoyr4DLEoa4cJPKEe4em7i",
  "key37": "3Gcw9c1JJeVQR236eoQGa3ie4gY6JeZzkVxpExe6e9T2LJXAU2dqdSvApmzfJe7dfo7whJW9BHMtMoPL7zZZLxCz",
  "key38": "454eA5KBKtzxYKBZn8oMpwRotYXXQ9DMeSTNkkpQLW98uf4pL9ijEiB7SiZSdoEtbuHVQ4oyZT3YEQVGkjKYN4EN",
  "key39": "2tLj4NR46KoqjfQ2LEkQ1q2ef3ahZN2cBonHCZcECNTqpz4HwrATxSmKNuRMxgvFEdkr8KpoPshLRRCCHPztboey"
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
