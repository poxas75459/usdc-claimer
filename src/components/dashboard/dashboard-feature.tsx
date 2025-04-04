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
    "j2VSJywE53Nc8AmfDgo2pgmX9xxe51stQsKLvSfQsMJimPfNXwxGgJEF42LyL1zPZwyhPZeQhiJu9JR8N7NsUqp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "PV5o6WZ3rsVv19JebFSQTdcgfPxN9qQJFbtPkAbH1nYczyTBGL97W4nmPTmNnisxLkwZsnjFQXqFrVEahkush6Y",
  "key1": "PvnrcS5rdok8X1zEcUGCP1BHYVMoAd1QY1SVhtMbueHMyVNfzzt7zDBD3ozbyPjMsr9dShS27EQz9eoYe54RaJn",
  "key2": "uokWsWgAj25sgPrkopAHNpmKakyxNW7vfNqe2QyQEDextsS2NERuHVvsW8FKJ4vEyb9UsFdPq8822KTDzesCFsZ",
  "key3": "5WUuteKtJWZ69BR88tjf6y8HrY7hRbbj8vbqCuLU4T4ZG39rvpw9Pwm3e3j2Eu9SFgMsrSVitEGoakk4reNwjbFX",
  "key4": "jNQEC3SY8x5J7PK4wyCfvjcZBYt77v2b1NMA2nEkPursqUEGhXdA7T1DyYayWof3eGJCNgWdK6AvDKEZ3DV892k",
  "key5": "2rmocjMFDz7593jNZgYMHJV3znfDR4mHk3BdmR3T63KVdJrco9pB7nyFHzx8RxWdKZBJmEM1ouSpTR9kHpw1xNbA",
  "key6": "5HCuEZSJoqUELihZJsCf6rQXicKYv5iD5kYWcmc6pu9fp7MAJD42d5BcVo1QrZB3yfD5BFFcDh4VLYr3aqMxv9mD",
  "key7": "2yZiv2d8u4d4Ha6x3J7xbHCguQUCfZaGDUaJw31Fgn3N89FRWZB3TN98gDwsctZsd1ftquSVGg4fgCSaqXw9QZ5U",
  "key8": "25ncMSs4yeh7knK4LLpV1Snshvz3wA8ayyDKaxq82KkxTba1rUbZXdw38JLp3DFjdhZZcs12QVU4KDiikWZCkKrV",
  "key9": "3g87e3XZ9wJr7MZLPd7sUiMxTgYgB6APDazTKsEz6ArhSM4M9D6Eu2t5gvUc17xN1AN3e8v5dVRcH44KU49eW76H",
  "key10": "n7r6trMngnTW8QVo3HZ2VRDms23RZKZAi4kd6RbHto4PGQQeHzqS79qzKYKLW9jXXYt4HEhJJtGr9zq8ECem2F4",
  "key11": "4ntmQg9BSKkRHA3h659at3jHEei3eh8wLKUJtf4PLjwWaHcTPCyiwhdK8z9g3gJfdg7BzAi6wYXVRdpNEHe1KfFM",
  "key12": "jw1mocfFx14LyxuYmMHLdaX8xmcA9CTSMxBzWeQubR5U4fNSiyauiJKNaCzJVj2iFdwvknic6gQfDBbiYhWX6FG",
  "key13": "23CUhtCMn6g8V1E4fLnXJAWuLm4AXcKyssJ3ixAozuiWitXHKxNJcdooryEofSSJ6qTWE6rMJdGB2uBEz4NdZD6i",
  "key14": "4dWt8bjpgRenuR2XWLGm7MYmDQpg3w7szCBPK6tAF8Kpz6WGV27yXtmdAMnMZxyPX6t47dW24FNMNcvwhaB2iaU5",
  "key15": "3wLJe7gBstn3sU7szTSF4v5xsvKbmgPi1P7cseysL9Gx8DJxGSQJYPBgQjkYoBKD2o79LynTiLxR5LtJFi9fjeQB",
  "key16": "5cWCuiFdHxeh2ZDoRxoaJ9GpgNDkS2xkdHTVJeMD1hWoWLv1iLdrCptbZEPN3ymwWEdbseQbgkb3EL3Zb9XfRPsx",
  "key17": "B8rZ6QV5ysKHGi98SyZX7xiKW8hR9vvfrkhLgu7FGewXDURjY8v34mqVEHamhSNWwyfxbFQYEP8X7yYtnrRuunP",
  "key18": "618CBhN5ZQkDtUgKzgKsH5DZ8jce7i41DWmeQRqpytmgQ3NYL1qEcpnXuxwY4AxeQcabXid8wNGr9XiicWhm9DpU",
  "key19": "gqDrSDECFuiZDtnQTBpbikJuNzzJW3sAEm4NxrmQJJe4UWT4apZCvLqAqMDzRfKoA7aPg5EWSQFvLKxPUshJqKt",
  "key20": "64ko7bbadTcFygjV9HpxFQL6hKC8wavcSYWTJAkF6qxGe623d3KCxLcjpLWwcVuZNg8AB3niDo7NXaj71q5NzFZN",
  "key21": "2gr9jNMhipHHxXAgN58K4QHoGWQ6DDyLnqng9VKevhN1g9SDwxdXhQPjfNabSN2LoVoMrBGtFcGghYhPw5s96P7g",
  "key22": "63gsoGMyzQR5a7SMC17gfFLQakP4qZH2cz4XCeeBfhTn9nX7i1wKYefaUa46bwKmkMHyVAkJChKUHeLw6jft2baP",
  "key23": "3NtSN1fF2cKxBVM9GiCpgsVE6CRoaXPZ2t4TzC7e5ZumLdqep7pCeazwGP7Zs16yg5SD3aZzb2K3NLG39CHnf9in",
  "key24": "4ZhzcaPUiCDNdS8SmnJE4DCiyHLKwuaqKPweDvNdjdXeDwLtBDu4icUy1tAvSXn61r2rXDdzTPhLy7YWypWvSriJ",
  "key25": "4btqfMoWmzoRJCusfsHKXPphGcs2838BTUnNvWxf8xF57oSQYSvWBjtbPJ9ZHSWUSzB1mAkTFoPjfdDZgGYeNJ1a",
  "key26": "57kT3xyPSNrShJSyC69wXy4cvgnwQCw7NBTz4ubBauUwkeZenkJ4vBBp9Df7aDd8ipAg3VybM31mXU2mwXEGKFX3",
  "key27": "3BwBdXfNFpKMVp8vLQUbKYrNnXHNBms6hbTztp5Hz8hqz9XHy9raNBnLKWLd8Li6tAdwvE5kKe1yUHJoxZPfAT2z",
  "key28": "YLUiDJXmAnE74CsLRyMBmau6WtGZWRuN1zVcEZtQZaBjrw93v32BQ3T3RG9R1CGA9RC5SZ3wWf3gSxKuKKpfUDz",
  "key29": "24cxy9tvahv1WYuGFpyfrSZUGYBcLHNys1soys7ovBnnnL6jN1teWpkDxKJDiz6rPkJmERYdDKBp5UChD4cPhKbB",
  "key30": "5vK5djaVmsWYjGX5Te8eJ3pMEWGd7rY3WtCWkLef7nq8Ae2yxtnHuwkcnkZ5jwwXwR599jCoCY9swo5qy5SUSVgZ"
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
