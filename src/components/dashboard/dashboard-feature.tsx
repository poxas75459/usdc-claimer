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
    "3ZAc5ZKyg9KYadfJ4DF4LuhZn7fPLHdqvq8PKLvoQVvUJEwWedgPdTGGrCUaUUuWCXpqEbbv3YxKENp5LxaVpUV8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5DZbxAZRXrdwHeJEP7AfUUEWZxReusV493J7h5PsigP9thuCQBMuoXTNkUfBN6oYz3Kb3ApBrBZDjXUpH6WvV3KN",
  "key1": "4wZqP2sEAAzGxhobJen7eQv1J72VDJRbRFdcQaEASuz7U4KpjrJjJjEVy138U2AZoim5A5SnDHqagZtHncWYUFRa",
  "key2": "fvzBYUD46oMQcJ5bHSxsQUMwoPT7d9ChCk3dqETK1dXYVadQhaKtJ6Y2qnRxUqsr7eUmTKpzwkXCjNzBegTETYg",
  "key3": "RdrAWQHX2aKQgYadRijkSpawf3Bw7G33jy9AXBT6vezw2R6eRHp192cp2rnbHDTKsapbhJ6FoSKxB3KkmekUFTc",
  "key4": "3cFZf74XRoPHgSWGwYJiA7aUvzLJCr5YMAcycESzvyfLHo12jmUqEuXPoiChGW4ZCofhieoVYuec9nt4VQE6MHUG",
  "key5": "24iuqToLgmgMHwN58bKn8bisVReL9CUzqFDvEMogHivW8m5xxfi47XEYWnMpjVfqd6YD6fum6DJx4V3p6Goe67dN",
  "key6": "EW9yGfC6vJY3hwTnBZGzsEEqRXsbvYYASmL8PumwucEbdEYg8qhyPvaxdK4g3nXjxoQwqUgrUYwZTBT6zS87q5z",
  "key7": "2jdmPh3aiY881AwXydTrm4QBzfkH6LgvCX75skJgJtV42MJRsQ4Ypntz6p39g1LXRSbsauPVx7MZAqfBAzoCShZb",
  "key8": "4UeHPLsocJB77feYrhxh5Kcwowjzqn8hDs64vDi4NSNRvzoMHrE8yi8VZTZ2ZKJsy6rSZvBLf85X8zDSTPDq6YH7",
  "key9": "5Rw7SHELwZJhzgivNvG4wMbvLC5sAeBYgRy7GNr5DKw62NLRPzhSQoi7afKtBfFXgB4jpNdc9wFDKdd6J9DouzDw",
  "key10": "5WnKSP37giAamRv6iZGJJWT4yyDfMBGbWo949CMpCrxp8J37KFWAHRaD3HGoHuZgwd1ZA6NfKfmMRTDBhDjUptQj",
  "key11": "2SUy9rPHbqXm76dwgqGv1MMhUzVnGpEb45CUEHxBUSm7vVr2Nc6sdM9aQgo19o9j9wRtBQkhdHwC18gYWNXjqdD6",
  "key12": "3fR3tvUexLu3Wq7Xed7u5FYak9EhH3R8Qh8F9i8kh7o4urVHptDwWABeQY6NbMsFqFWdfzH7ztUfsj1YGekXQ9TQ",
  "key13": "2fQQPXyPQUbdYyuvNSYqfYMtSJPdeKD7teQKo2HT9vsUdum8umfL11g3JiHMa2AnHi89sEu71KWrdZzknu8BPPPd",
  "key14": "4vhLQ9iYD4jV5zJsyzMssA2jnZZWKRU7mJH5i9Aq21C937a2xak7eq37Z9hXPtK4v1teELUB8NF3dsofB91CWhRZ",
  "key15": "DvxrW376MkAP3aVRPVxMeX8o9oRaV7hShzyjzuo5yoC2L9bF9rWtGnDcsFj9KHuoUz8Lv8NhybDswG9QogQ14W5",
  "key16": "2NezCC8VTysHZXWwAPGXzwJHqMK435VX8eE4deVga9Ggsr6UZGtAfCi2HkC1EtGPqbyHjxQ6bZgDxUoPgLFHsEd9",
  "key17": "4Eo9f7pFhcsPE1CsEL54ECPiDLeXpyxoWbyNDWAjsJGhYMmKqy2f1U3qJ6JqCGnXFgqAHGfAjSaTU51aaBmGUwcG",
  "key18": "65D66Mn5BCo4BzT7yVWPEd5h3mTMS9qv6eqZkwfvdaRQGdebyQhWaaTjfiBDAcfsLWQ7mj5XJRLTv2qKVjt8Kp5j",
  "key19": "2K6zGjjgjnjtVmyc7DguxhTy21LTFyPSysgc9Lkdg57FMNwuHqJ3odhyGhFn1iAB38TK9NT6XAa2EVNFNo8jBWdP",
  "key20": "3TUiUfHBRvGZEGUSyaTDB6iuKr4YaztaReyfRvuCyYpYQNUPG4SjLtmVrGwCY99fsicgK5hVv99zscvQcixq8yL",
  "key21": "Rfn15UsxgAg6kYkRU9tzpa61Xic8tBhCwkKtD7pPm5oU1W6ZcxE9aCdSn5fs1c39bQH1jsUZ3a5jTAUb1ZMo46a",
  "key22": "avueDZJjxAu4rzMmWnaPvQxnZznKdkEyuzHDaGX5ph9eQ2GTUx3eTjb7rWzxC89rf2fCCGgGTahSqGQFAePYrkb",
  "key23": "5i3iZZYTN4PawCB54Ev9vVvsbTzhaWdQzBvc5WEHkDRsnQmqb8sqPvg2otXfnVSTeifhs2BmR9ieKN46miEPmccc",
  "key24": "4nS6La6yjqCuq2vfv4wFdrAjr1ESsrDdFHMFTGDMSkwtHVgw6Fq2dTkSy1TiPQHS1EM4Hmm8Wmr1AWhBwAy1hWsM",
  "key25": "4AajjKM9LGpDWai1P7iS1JvdEMNsgJLaYTxRj9QdRMjiYegFd1PLSmBjFK5teMHHhnjeL8JF6McUkiFSDYUfk8Bh",
  "key26": "JDXSH3UtUNo5yR5hvszALZkgCtU2S5e94yut4ddB1xFgNUHDJWRGYVuEMWc48zmbuSZ5SazFer9LthPwDpKsuDG",
  "key27": "ovo5e1ZgCUvpiYuKU35wNHicWqda6UqKZu72FHgCmEkA3SenutaYxhkhXZ2hn16gTgWwdXmERubhYGycaofCtzd",
  "key28": "4tGsa4ntoyeRie5KpzJAATcZ9JdWCBv5v9uZYi4EcejWBodRpV1i9fSSLFFpv4A34z8kHhgKqzkU8m97ARxnafSM",
  "key29": "33rUJSmMupnAYxNfFSFJB5mKjtQoNRt5MMx9SbCpNvtryk3nBgEbqd1MWu8CWbZ6egpZDjJhrp1AybbhaqzwsQkd"
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
