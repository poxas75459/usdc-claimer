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
    "2g8QasSYwPNuSMcsK6ZAesJnhg5oJ2TYW42QJsFZxsizeGtvXhS2jed45seTBTfwoJCe7miFprZHieQVakoidcK9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "34AQ8oVjjwpMJGd8RLNBfR5ZQS9J1FEPpYMgw62nsMK2HEvcPqKg9Es2MPAmVqduGDtRwJ4cQ3p3LxTMEehhrEKo",
  "key1": "4WJfPjETs8y2HWcTenueJWxWjXt8mcU5VVtLRWe6wYfjjKr7m3cqJTW2cjvJ7Zbzoga97gumgzoYCbuphyw5hx2W",
  "key2": "3EQQUcr1oNUtP1bKqxcHF1TY4iVrVgEahH8dMAH5z7DVyYX1cq3o41i5htsXdiMzRJAcSnWHyKfvxCajkkK3NXMn",
  "key3": "2K7zBQbkTUX1g4ME3X6PnybYJB5MJA6PeEBozmakgsVqQXHYPQKp1ZgVzJt64q2QoQsZ9Xqz3NfXEGx9wMhHKjB5",
  "key4": "3SWzQiKYyZCnwm46mqUVQakjN2YpdZJ1AjzoxRWgLGYrgNwmXhEnewxpQGxYSoE9sGH3aFyvUx77DArx6YssuZTE",
  "key5": "KD1jwPadz9kyb5izNkrV46wEPC8R1CaTMdLE2AzWxeBEQhXtWXoUHVy9derbK4hZb7dBZzXRkruyeBKdzMRXXdb",
  "key6": "5maxV91Wu6xT8jhpNfU62rjZg648j1PMGNx9bC8m2tvmGj579UxuAWmN1h3JxUTKxPtx1H1pVdKnTwoSq1czzbGB",
  "key7": "SXv3fSvwDiubR5UPUkxVM9cTLebShJfTBHpwvBUijuFZ3ZNpzaMVxkrdEkAYxkZzYiUB7HAt6i6qYgsvP4uZu5K",
  "key8": "3EH6a4pHUj9Fg4enpKnvKTgxiGc6wgf16vBAT8wiit3w5vRmdMHYyfrkzQJoKxcRZ2KiqpQXC8ADt19YPKcNvrP4",
  "key9": "2cALZKqJMkVM3N6g4VPmwY3goEouscKkKQ2ogDrFQ3yMrMQKKJeoKaF9SK5rKcMKCXp8zJv8psder55mkmjQxcik",
  "key10": "2n7P9puJL64hb846pSeatdqhYtNMQQz3MmutoUSk41ykUUURpXYxE8dUDt56vunTsX8PtcmK68wFFe2uQx5oBZ9a",
  "key11": "5Nvwja2oi6FDL85HpHaZsMYWJrpy7s7cCz28BWmYbxbsgCJknxwHrFutxjxGZigh89t9R4a7XgG2a7zXJBc5bP9z",
  "key12": "2k6NKbk3ii9JjmaWfPvPUpXV8CKr8dt8RA8gmCH7oRDCjx4vAAfg1ZxfMZ1chLTJdRShdRqmCcfB2jbN67PZ84wY",
  "key13": "2ET8R1XrsS6c7eFzzNnv68Mw2MBTcfG29eW7h2BfrypU82VNdV1Q9HvgrtrrxY8SR9bxmLVPWo2iB8qdUDVyxeuR",
  "key14": "369fZDGmf6CCCuX1vMwrT1fXsuYGtTVygCDjtYiqLMYXPARbwhgHB3P7A921QSAhMHwNn4fSn1ctEvyRxUBHctJ5",
  "key15": "2339v1QnuBnJ6B7QA4foSkezZFvZHjA3ZfHNuS376B1wY2CVA6q2hQdoLjybn8ar5b3AFFbv8K3PxC9vgNwFsMbj",
  "key16": "2bm6zG5xvE6e3zdTuXxpRdDyLYxDjnViR5YyMEmmnE8idUYdQsiuZ4qBpQeHVHFhY1LAP8mXxP8ynhfrKZi15h4p",
  "key17": "wmecpTYNyrr5gN1E1AMe5zQXXSMu1nm7xQ7rCkK1NWwB1HKfgX7CpHUePfWANbdLa4M7hkuEJxdeKhAFrGX4dBQ",
  "key18": "5W3Sp4FNGQJLmJi1jnue4kLp2M3xNRerLd7DhZz64NJtW7qb3cYx8Navr9z1cFtN2RdTVimEWPynoTxgWd8QujaF",
  "key19": "4oYbDyQ3mGqWLDBxGhUuKud8m4rx1QaJDWMAoVL2SthGHCWUGEpoZYciFngHEwGrzqSKX1ZnZZK9aTUzwLMw9TRv",
  "key20": "2a8we2p8JpP8SQ51mpWEJ7Nr7Pk7FRjSNs7i7hRzaVpMrV4d5CG2sWfYwR3ojWtVqFZzgE6ipCkPQH7eh7WXprb1",
  "key21": "3XqvG7Qkv3S3Czz3NCPfYrFMupRsH5gNstPyYp9fZB5wfncy3YcpUzkXqfy5xbDagzRFUUJgBk632GQye3GCAGoA",
  "key22": "5dR1XUJMFhcDH9tpNdSWvTemaji2ZaCgiqVqHQpx7WGp7QUSZYurUvHcX1QUZ8AsQV1XrKfhEi5u2F3qiJhi49Xt",
  "key23": "5yxqRzfdwk9DgQfMx9xqD3FRUix57Qz6y64mHW4yt7iPPTQm4aZTi7JfBoXw1XUsznpMYaZTUYb847U3aA4C1JwW",
  "key24": "5BuT7kxSgPEacp2LCw7bdsiuc6bKznydjytMzAJrzoVZ6vkSanSKyhFWLGTkmzJN1fdc7PkekBqGaxhoVxGaXyaT",
  "key25": "2PiRCpTDamtnYCCrFcH1GFQXJn3GfiPi193zLdeEhU4b4s6oADfiRwfAEX24tXQnhuZRG4KhCid4hWwcfqcXG8ZP",
  "key26": "4XWcyyJ6oVHXqXs9Rv5ZxzmctEYWdNKm4rrpGtm8xMtugCqc3eLRt6bfhLhcfG8Fkb2CTDhsAYNXbLiMLRABHBtf",
  "key27": "38bYnH49G8QMYRqqn4dKfxEkm98vmbhe4Z5fS6LwHJDQ6dT16SnuAzPJEaQ9WuZG1z9TMx49A5AWFc4j4vRqfXWE",
  "key28": "TEHGrearMngKabXzczsYwUYahoFidqtfceq1F7VewYsyWXQAwzBxtcNYghEFR7fsno4pD7PHyUJUVyD5uka1oVg",
  "key29": "2HY1u7SAwYwiYHKjfoPeV4FQAonrh2ai5hKP3LXbmfmUVNb1gv2eho2LWf25ahnYz2kcDxmTRGoiMHoCmxuPVwo",
  "key30": "3NCSrTMZMAf8MeEC9ZFzQ356Deg63YNB7cvwZ8U4DDXKLJtr4MaPVegtezBmWeVsUddYtNPZRqxoZbfnTVycopW7",
  "key31": "5Zp52WF7kQTvFBAkNm9Dtd86aRn3uHeepw8y5MJj9SfexHFzFwsFyVx228z7P3pMGBQtnHQsoW1qBPmqKCbi6gR6",
  "key32": "cvf6w2hkvQtxrRoWGmVYhwDfK5wTVXZMqipcWTh9uUWdj88W1YDy7bXNgj8TJ7mj29eAdzQUBSF8cZHMHXp17VF",
  "key33": "3NdArrVjnWo91yn8rCzC548LH9VvfozS2Nq1VKvP4BAUy1QWUEtsijqqxuK78gwuhqLx22AP44JYF8ND929wqXiP",
  "key34": "5mRJ1Ehn8TrosaKtH5tzxbuQ3pYUrkQ48fsB5QuVqdwG5H7DnNcycmCdTLYgbNQ4gLh7Qn95e9aGL68qQhRDQeun",
  "key35": "5riyABfyrKuj1mARGpXN2fzEHVXWbgUNCoMiNjodi3s4isepfFBbL8Cdh8EK2rgUcsLEnBRbfsdayQAHzaCr9RQH",
  "key36": "3Acu5uU9m9VSeqTboDJEzuqtPm8uSck3Lk2ToMSbZMZg79cMVD7GDoLfi9yVnE2SJaTGjEWpjymzPzyBjCxtFNUr",
  "key37": "4CwkbqQEATFk2qRPMWpSCPmJ5GBWcBpDzJF8sXHH25dpczNpzttCxqbp66Dxz7MCw6iqR6favP9FEku1LNsdZzp8",
  "key38": "57kkPMJzaJHVPkQCD4LUPk4Ru3z98c1aDj75GwnKddWdWdVvVJjme8JE27dn1Zffyt2B18im3bXPEs9F3tdue7js",
  "key39": "2YT5zMdryh21wNUtekmgCtXwiDphdfeREae3x6HdxVeQYMGzjnvLSxk18cCXYV1FdkkVv64P5Q6G4aKGzhbF6etK",
  "key40": "5kzXaqe8JFFhPeF94iBcQqw37TNpmPB2PYBeCSNyHV8AxnDsZeLtNqEPgkQdFabHLjhqfEgTxRmWAaWDQsHQ2mMv",
  "key41": "2UryjMSAN2wijR3Aq31kBFojeQL5TZLhbcZrVmsRAhJVS4925HiUk1zMmYyFeyqyJejmNu58tx9GSbgZtRg5YCsJ",
  "key42": "5k5DdabweMXdAq2Rfi1cM8WKQ85Q11rtrLEweoed6miBmsbSfXG94TknWmz2Q9JiHaWjpSjAZfki5KsnSEMnpoBo",
  "key43": "4unhUZzKdo1soALBzCiLJZAPAYFsqnyKVCDtGrNW7cvMLPjZX2NidqY7ZCe6QwWfQ6AgYmtojGp5izVjzvUhx9E",
  "key44": "3zLyz9cxaWjwRwEQQv3XD2QwEqSz16VAjZ1EeYxwaWxFkkoeeTMudWnzrWStwWqNWMQ1qpmhRthJicn9px2EQX9E",
  "key45": "64GSyM1RpADXxWgdjxDpDShjvEPyFdwXSSAJxyXC9rtUGmB9U8fwKfq8Y5cMQT4PiZvY7y3QSkdm5MgtAKwvyvTo",
  "key46": "4JkZESZuKkBDCrgygkhpmh2kEp1jd82wQ9RRNPPwR47K3FFYtL8i7Df39UrvspFchMrnZdFRXuzFJU6xzmNyuki1",
  "key47": "RfavaQRuGFBBS6KQbGCSC9REMVSZZZwJUbW5uPmiFBnsnC9PfNy3aX2QTadf6GyfhVD3zMKMK5izby2FAs4f4qc"
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
