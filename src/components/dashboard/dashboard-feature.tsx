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
    "iwy8UcbWVnSM3sjYWSkaT834HCe1Mvrn2dRnVRRvEZuvSAwwaoeWD1PCS3z5NZ6v5pB53CYokjFS21bkLtXUwwF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "41d7NaN8ASmNBTkzmbJCSNwwfMJEh5N8SG7FVPmndWrs2JWmiYcnic6o6Vwx4u7NBAs3BTjN5WDftir9VH61M9qm",
  "key1": "45EwEg5x7qikuPAix5c2cEK7tmvYELShPuWJVuQDqMj2wn1SEB81n7e4nM2FrJEqffirZvDFt4e2GgVugUpr5YbF",
  "key2": "3nGG6bU2omfJUcpaQhyfqfhmmBgj2o3VUp7xWZSutoXeof1gtxwbUBRWRwcuFaXYqxyDWz5W7mSZ3jRbFMf6vQAT",
  "key3": "1Yz7CMZmiq3Jb6YhHfrm84NTFafMCxk71L9KCdoVuJorucQXgeM6LJhRy1dsF3BzbRpb6ZYLrdAJ3Du1PCpszMM",
  "key4": "5pTXpq426hVweq4uQTjQFLGdXHgwukqzwkoC8259Trbrj6eAiyVjMMit476Eaq2bTiLVdEfNohjebs9vYyTJycra",
  "key5": "5meYeDAfhAq1GJGFq6aKrLtox4tPAhEqv5TsxvRGnLPuZuGNFJec452xfojkX9CWiNinU27oovC3igxTBQsP1dFC",
  "key6": "37KTGZ6Gmp7KKftqDk9FQJdQDiRzTQSN1b9W5kbhEUyrt5wfKfgQqiN4vWiMHPqkst29gBrrqcq7WtxMtWbvw8CP",
  "key7": "4CFc3oLoEp6hf9s9bQZGz2ceSUfejfaz4vG32rSySAMR8GaajAzSgAhWgimUhMWD414x8yZy3mJ4sPJdtkajQvvh",
  "key8": "57yA6wa5ctWDXDqM5yu9q9gfMGHYAeTPSYEucgpuUrZ1g4SVD4mW1nbZDfipbiGALmni4ejiEh5cf8QWBAibszAU",
  "key9": "3MBS1yxbMvzQXBxhgLeUjaqZeXrFxCfaWw3DzMRHNnodqiSajyRZPbX72FRes2NSB7x4ayLR25aRMFSmyhMgKyDj",
  "key10": "366Z4EA2AM4ThUh3rbXAPsqPLsaWkHTGbaJCJo59KtBgppCk7ZxdPL42veybVmNgZb77Gdq9sYKxGHDf19d1ShzV",
  "key11": "4vGjMxJ84fqniWDrPn49Rf8MCdWbCruMzjKuyys6RQMULCZHX7Sfm3LsjYy1JEyZijXLuKj15BUBnGSrWH8Nhhkd",
  "key12": "3CDsBDnE6gGTNAd1AWzMMqcd1ThCc7oQg7pW1URhuWZe8zdFkhXz8L99yCxpqwnEqL56vZi4yypxu1NXovdxQA16",
  "key13": "59NjyrnrLc8xPVLicVKKw29SgdY27HJGupZpHnHxbGss6mkRsojMMrJrbSCWicmsAQHiHrfTKmNo2XtWWYEQvLhb",
  "key14": "5wZyjGm7Zyfqv8vSBbL6gQamwE84cRYGfPBrKDTDoTFBSZozSnLTfe77fDu8gPCDsFaiA2MdbYqxpX5Vns13K9Ro",
  "key15": "5c5jjvAQ48h8mJCWxX9qnZYQKHqTRSE7XfagxiAAJG87qEAk4RviXzZ7VTMpw5TSXpdMapAcTAzFohHaSdGPANiX",
  "key16": "5EqJYx9Zf2PHgNozBYFFva6NCooi2MS54zsFPrhR24tUvAHiM1RaaTtVEji4NDPJR367aH4fRTVqJJc5rHVXfiMK",
  "key17": "3W6WT78jwayWKubdt72Yvfwktn62YFewNbsTpYYzxNNPmSiz73DdhkCPVJSYxNRXChTKobtwCe7iZc26YZBc5SG1",
  "key18": "wVvbKN1QQyn8szmwM1syfcP2AkTm9VULBEHG2mV45wvHKxYH9Pd6tkiC22E5xVAMsAvrDYiLPr97d8fVVEUQMzq",
  "key19": "2h7vKrhQjUACLaDzQ2KQ2YPtGm6nxrc7Erf33KsfKtkpHuZuYHdgwKRWy3AvByf6sG7KwzwPULak5QVgskCvZAV2",
  "key20": "3VKpKG1crHDYDFbXHZV3XXAuEERYJeSPfP7UNnUwXMv9uvxVSeanF34srkpyj9BEuMB3PRLP5VaeRZ4RKsaGrNN9",
  "key21": "4borhjCRW6TW38up6B4Eh4KNUxsaNrwqEUfGtgekXCDvWprgYAc7Ldexghi4ZHBygqmWcafWdiqk69UMRKVaAfQy",
  "key22": "5GVZdVz3du41PyZqWEEE7KYGKMQT8yrcGxFBnNsBVgVS32ag7RSPAuxxXJmGkt5u1T3xykzwoRsGzBDwVCMtBqtW",
  "key23": "34sUXuiCyyMkMk5BsuM1kyKF9C3vY8HbpKpGCbjxnwvXSq4mLTH9udDTXAa5dwfJiguaAnJgoYGhSLRsKvDhUa7M",
  "key24": "4rPaSNSRoJQGYmD5iJztMzzgmTpoHKtUuWnVrLEHVJuDYR9ZzkYXyAsbuG5VuquxjG8ZegeocjK8hmUPiLwG2XkN",
  "key25": "4mSg7QZ1yekawVuPjoGngPbYaNZeM8vStYZSCbK4iTaP57waahTVEWP65z31QLGh6D1bRyDq3hNjxSyL2feirfBL",
  "key26": "3bP2zUBAuU8qkH9TEv3LZjJRV1VBsYjMB4tcRtSxKv13HBjQEW4sGaxpnVb6pKbfsAdzHGcFosUxfpeiwKKqYr7J",
  "key27": "2g4qJfuFjFuQDLdwo9kCKRet3vLuZ1VAFd3AKNj56USy8V8UayQJbRAnyGgo4Ey9joC2GUkCngmLPjLdDDmayKew",
  "key28": "37TMcEZVU4JBuhGPNabuozNffCLGaRiRhYKmwqXR2Ei3vdzSxGYnXEgZFMWeuJ55DP2KQhtFPXvntoawTbdgtjh8",
  "key29": "48K5TbuUddnsXG5CaR95Dy3vEWAZ4RotmpvY6okdpZgneHyGKUmnFwMVFGQAJFNKUsRyMem1EhWNiyFWSQhYT8x6",
  "key30": "yLErnPrQBrbzV6b5PvFWmC8ZY7CdrXyzNUzeyt7H4KJ8PF4vAMVNQJiwikwAaBnF5VC6NXFQefE7mKtjw15eu15",
  "key31": "vExsMmBVn5ewxxnHXhFdUbfGdB8mduhLyR3kwXUmtMByq3YYh8uSZCkcTCDAjaaedpy3ALvzYviZpCEM6eT8UsB",
  "key32": "3enrDbrTbSVEYmcN3TB3ftxLGGoRDa3pxP3xX9vzaHsuW7GD1rtZkdVpYqmv8uAeSaWuKkaMmCC3ZE2iZAcBq9n3",
  "key33": "3SJqUZGmG9EMJEAig7FScw4oLh7YALT2UDgE5irhKfLsGghWtZrGbtxJAJhoZmdRrwFeNXC4fHvypyaVbYEe2nim",
  "key34": "3Cn29U66R38A5nHSdtYqgCFhQgghXi53JhTMhnHcA5SpvYDC5HvFnua9iX5JFTc58V7SJyqtw5zJrzf7mJVVfk5p"
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
