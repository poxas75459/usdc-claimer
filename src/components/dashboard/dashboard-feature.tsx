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
    "QnU5F6WWsWGQyudspztz51PUcpGrgcp1gbrqLwTeZqVgYywNBhYSWgZ2owksMF95vwvyVN45aPicBVPcbRUi71s"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2GoaQHe7mjgFoTGrxgytrRs2GBKziQisZofjiLFoSx3N8ztTMnryW8RCZ6mDenhGR4nZ9PirBcyp4Ec7BqugkGc1",
  "key1": "4ddmSW3ANbFkDrmijmpTXpZiJqS46rxoxdvipLxSy3yERFUPH2m3MyqZb5Mhq9CpiuJCJSpcTCQNUvRPMxdDw3UC",
  "key2": "3Gwkj29ax6m3Gqggh6A8ouY3vueuGVKBzG5M8QoDqZofndKySkBok1tTNi8fA73XqhgvW9RxSGw9dCkdseKu8SoB",
  "key3": "59kRP9bmeXDK2Mchq3gSJF2jornD45Appn6SaWbSZh9JYvuqy64NPCsPp7mGXwQ1quVfT1fa8WRgJSyjPAUosvqq",
  "key4": "32WNWewyuMVhEp1gGLLGpzkJyP36PtAPjRoZR2zusGSjU9NYnP4NusKQo3qS2FxwJx9XZkCMCV5rZ2XtcijwTmv1",
  "key5": "4tKD19NrwdaAbyiFoW4e3Df9CjYMtqXFvErp3oR4Put93z5eR98BMTAuqHrs2em23M8MKqLiP5PxDwc4N1QsWxgZ",
  "key6": "48KZV2h9dHdWmPi886j8VzFeug9nEmD3cXpNJbyQfmhTp6ufxcVKbJrQZgGyxkxQLUmasoc1BMmd69Uw8rTXfGsJ",
  "key7": "5RiMjikNigGaStkcfJT5RHpRQz71HtLfgQi1zM79ytYm47zzVLcCUnvnbeWyECPpHCGt5ZzbZNh3dUCULJG3EAV3",
  "key8": "4nfF7LGtTEFWJ1o7rsV1UTJ5Rd2VQdYvUX4LqKY1nMzqW37zSkcW3Eh1b3etDk4GCjB66gDhXLV5NbWDDBdN5pLv",
  "key9": "2TMEDKZLKA69yHuo8vZEaqCY3wH6D8nGLY6pseMe7MTkk1abLLmHiMQpwZQyGgeM5gwuo59bzzf8kngz7Gvbsjbp",
  "key10": "5KaQSd2cYZGScCTaeksPPMaaQd82DpZbmXWaWLqHfZT3d7auWvy4uNojY8FDTYfF5KskRpcsNgpHXXFv8sZBxt4y",
  "key11": "3mKneXRF72s4Rz16dqj2kjXFgUs5NmYbQCHUwC4w3hp8etFNe79yP7E4Y5aR5xhsuBBALUwwqphzsq9hT3GCNFpU",
  "key12": "7o2poMrwYYcovSU7dDYVviefNsiz4SdAJQf2TiUNFDjn7urKa5vr8CStwE7HhjiBeEdgcJdYRLf6LBrjhksXJwy",
  "key13": "34hMQSaKVeXyKM5uVc248en9m2ZBpUYF44bhyYsiCin3NFCoJYgXEjkuz72NqnHGjxe4QG6A8YqpHf6Sw9JoiCPE",
  "key14": "57Xwt1a5mczfq6vyqbEbkEpyDWPV7giU3SQHu2qfL2EJEbfh8YimEr4ehFUH1Dcs27QVmo3VgcnHxrzaxS3LBkHY",
  "key15": "SfRcEoiNHSjDy6Rhke6jUjWsEJdzMTci2wZATDfQspJ54EGDjkLLHrxH9Q5CHJKcwLt7cq7kchmmANt5jL6pcDk",
  "key16": "2VEG9bXSNTKqMyZo72LziDxn2NmtX2dSJjb1Xtt34Hp5totm9wD7KXUHs5k4P3z9Vv8kDwZ79jfXLpw93bJwoyJu",
  "key17": "4GJrgzjBBfnpLL83cqdR1XKCGcoFaPK5Awy3YD3rYYa7jTTUXts71DRfYtgyG7sBeLQx1mZpDBag7oPGSNCzfncD",
  "key18": "2pwGTPPwHxwNofrEXdtyNPxCr6TxXNtbCcN1uXVydcNFuw1nz8FvnvL2UdMe6kazH7wDYevHZbXVrSVHPmmeP3Ti",
  "key19": "hZcaB8otvXsaMfgh7cqT8DSNVo5A6GjiMNrwxtot3VcN6syMsvWUoqUX4AXN3CEi6kfe6q9dfUMcFkrq35RbW34",
  "key20": "4aSoLPhiwangKWFWkHrYJyr439fTmh9aPS1iSJWJaCN3Aq1B9dNaK9i8HdPdFKZLujRKQVU17CgDBQBQC2ivnAtP",
  "key21": "2LtoVcRwfHYWEM8M5dDMsm58AS1bCedRTfdL8nxyC5dKoM7fn2cSxBAqKiu3RJa2sumRUt9bYMdJGp9qM1TNJLor",
  "key22": "63Nqa5cqNc8CbaHvEVXqen3dhBvt8M8fc3Nww6Zesw5iZdTp2LLQ8boYeobSqdVgyuoe47g86DJDJBZBnbiTnijY",
  "key23": "4bkokXbVPNJWyJMyczjyj6WpR3oq1GHAwjK26vqZAHTMcDVEBFNts6jPsC2jVqj6Aw3TSXnBEBXgHyRZj9efAd2H",
  "key24": "4Q3jyfAY6QNxbvYU5k5Rgw84KxZHPMiEwLRWopBZreY7rMrNjpEqsceoZnp7zxy57Ujg6UnpX9dDEv3EaXvmexCf",
  "key25": "3gPT2qWtjwCsYSKakULt5rPqP9YMgDpFAEq2hgL3V7cN87FW1Po5yuLr3uPHNok1cgwfj1dNtrZzFXvQEGDh1VFs",
  "key26": "3BEJRKjrmDWrajjaZC2C1QxvXheKqgWco6ENgmm7SdhPVb1472mz9NRaE9tQn5UKaQk5aYeFYMUZGYwkmgzZS4b4",
  "key27": "2m6LwDjmkTzLyRSdmfrR4bRqygB6nGoiHwdHs3A7uBxUEEj6LaWrQTRPGbEw87fzRa7X8reEZyNCQ9747iknYXEm",
  "key28": "2iP16DSmPFJavks1Cuuzb3mjmzubrq9s5zHBAysAkuxx8sXaEecsauA6T8562TqDbKPDbd9KFoqkgi4z6nrnqnMn",
  "key29": "4FgRsbBmmwGKEPzBfU9xnZorYRQUAHfvxWY4ncp1nG7AiciuJZJ6hsRUxqWEiHQegM7BdQiGMh8ZW5JdK1YiJUyv",
  "key30": "5mJVFWkU8Cz1L4qDn3gBQnt77ArK1tCXqpfLCcwE51cKe7feYejuZeTcSpJYa6i1aCaZAxXdn5rQxamKqmcNedkc",
  "key31": "aHe2KLcGJfKUvypV2FHJqbhbQvyQwq1kpGjzXaUp1qLxsCAPsBLvRh3ZNKnGwkXjVB4ZmbMp8jt1dV1t1NvNxbC",
  "key32": "51rzXQ8aMzCvBW4mLnmBjvKpQfPnB35UejGudTNou11t7DVWN2Wa5BgDExH8rk3DLXj5JU9trdsrzEv3XvnVjeT7"
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
