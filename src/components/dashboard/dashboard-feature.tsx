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
    "5NpmUAkpn82FHPtvoby7LJy4emA9i2GaU46pFBXXnvUiLUrvxx6NACLGDv6wCv72mH4972PsHuZNTdEtBoPMSr84"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4oLNhP7FbQKBQ9yyaW9ipNvnMfhjGc7cgmYSiXAFDRiwzJMWWshrBmtpteDjAkZs2uAWLRPgUAHnNbf8aF5uN521",
  "key1": "mwYXtNCyyk7bY2iU24pJff6JUpdKp1poNQa9ooRtpKpNKsK7t81n3heLNaTcnpd61NWwnftWCwSJxz5V5vgqAX3",
  "key2": "56LupLXvYr9vZMRP6tCYupHveSCD1uPvTqGLoZVE3e1TLyBrYRfQVtyaNbjfepobz16aFLcnRAuqoDfwiQuEPapS",
  "key3": "5HkRQR8wqJQVT5hTyc8ChbUp17YHvotcM9ahr5V8zNcPETXhmkT3GJK53ysrYKoEPowaz3hSXS3ejp3xMtc2SDCJ",
  "key4": "5KLSc76ErCmsz2UwL7ccSYFH1BMGwb9fFphkctX3Gqh5G2XSK1m9enetofThe3cy6L8XppgUqKr9rUwATjZSxE3r",
  "key5": "dFB9FyhjZtrreaqZTTey8BFhgbNNPFUFVM2eQySiVrmtUT2y46w4edDDBCXEknTxHCjzhnHxU23BSe6ovuuJhpF",
  "key6": "4woiEW8nvoUpKZU2Z4ezKBBJbLZ96bePz8nXbytViuvuviqRUDYQE47e3Jm9E4NQMfyiQUtwvkD3XG6KoKcPe3rk",
  "key7": "663fvo9erH4qbMEzaXyJUKEYWed5PiVVSGMuY9QeR4wf1RKyn11nP7opok6tayYiDGyqKjhyKftRsuAqH3w4RMhj",
  "key8": "2iUnCGGFV3LMX6bDTzUjUzvMqZm6ssHprXJEYUETnH4s9UgGbtUFU62j3hdWEGDy3U9p22J2d9TaK3cEqxFmPgz6",
  "key9": "65VUnbdVTMV8uGqQaVkhqH995mL9miX7dAKRcwV5XEKxCum7HXmXpoqrtY8CUhb8cFahx6WYYYwmYSwSyCTGmhp1",
  "key10": "5FKLL5yErknGfqaKhjqsAF8LzAsM2pqCkSLREbLUyKg6rV6VhGjHzMR84F9JsfzeWNfv9VKgTtQKZTtmLRkB8XEP",
  "key11": "2HGXRMmW79ixHqHs5LxAM3CXbJ6X8xjKg28a859cZX99bzXiJdzxT8ZKo5yNnzBCWrYvPhqQi3DwtYGWySpjFt3e",
  "key12": "2ZD2p26yyxAAxbbCdYf9oqME5oJDiPm53xgjpmTE34tivBq4g8TUP3Uq6XzmHtR2k2iz9WPyPkMuD6Kg59smEVAj",
  "key13": "54vkSdmUgWSNjgXkvVvcMfAFhPcfbPedVG4gnWiLftCqrpF56QGkFpr7EZgQ8kFufGpQkYB1V4KejGtkVe7rCeA7",
  "key14": "34aHeA21SyuUo9iaH5otvWrutDvC7XmfvNp7xZvEKJsnFjJqJXR7syZSqmKE6sKm5LS2iK9C4KmxzFWqfDn49dPx",
  "key15": "3T7wL1ZK88QNkx4D7E3BPrNE1tDkzgWYFMATHc18u7YKtu4VqbPVSq1fQxMuwoLXFHXV5VtxoWTi9aBmeGyFRbuf",
  "key16": "4sceYZShGM2T649rH9vfEBbTJ21bSrUCPgUmHt9RJGg6MEY2k3Xk7osy1tMuTewtEg7JSpHLEspTQmvGLt2aGB2z",
  "key17": "2jLHMG71GUv4p8MQbTPdWmkv6J3ef9XJpaEVy4SDM9u8sKpxDHa33dPqdySf8fHpEuspis4CwctQNN66Xp5ikLkU",
  "key18": "5mz3M92YdtDihNeiKfM9RghCG5j39MoiKzwM9qQmJvyBZwtnnHmvqxESYZU2PWRQrRWWFurxkysNoYgKKTnJGktv",
  "key19": "35Njv44kd3uekEYoJNoe3H2c61AhT9VjNBe5kz8YCGqoTo7DCKySV1ce4gsZPqDbCDkDpZUqYKuaixFeSUzvGZk2",
  "key20": "HDctG92vSWuX4c8azg8oe4996a1NeaaBDqjDwN5DK8YL2aT4e1m7qtFR5qhzJAxQ3PFX5m4xp2MC2HQLpyd9vWo",
  "key21": "5dU9HHf8J3pA4FNEAC7UUbGGyaEt33sMyFDp148gK77gKEuGTUujbyF7zw5Y3FPEJT9CCXsbx9FkjEh4yTUxqXcz",
  "key22": "4hVYLBJ7zEhKhYcb7h3czwiFgH5kdLfvSD1Mv8AaZPCS7MYva3rsvFgrNqosq5aRE4BW9AMinJjULgV4fiPVVqvN",
  "key23": "2jR6svzyMAUqToyMkzcgLHApUQ4ZFHJZLX1B1EZ8QQ7vUfdi5mYNpGv2VsPJoJwvqJ4SBtWoivjbL73UX9c9bctm",
  "key24": "4S2ui2esZX3X4peNaq684qxocPT2f1iwLCcfM1JtonqmrvuyMtuPqa7i164uCg79fA8EzdxBy8UZ3CFxGh4d4qVm",
  "key25": "2LRncrY7jEbnNoPcsjSF9puHDvKRaXDn2fzhEmHWhDc17B8kZTCiLbL4zGJfw2cuzRQ7rrTcrSAivFGwxB7CZqJx",
  "key26": "3omqa68GNbSPNVZ1CMuYtpXAWMpCEoSKJgU76Kc5gz168v31V2wtCEx1V7cLEyJm2QoeGnxQ8K2XCuA1EJP5CW95",
  "key27": "4FW7tNH7UfbFKbFJz1ywxJiU9s1q1A2N93nkK8xUFoHLGm7Fj6JhE9xUJNTFsRJEvwrBTnFhCE4tb5ArvH3fcifj",
  "key28": "5eZEB59oPiQMSWuZtZ4nxbbjXytrRPVZc1bSjREw2yJVeWGaSCPJ4BKwHwcjxhqFsDhQQpgQAwJxEEq5uxiKrMJD",
  "key29": "365gRWXEeovv1QWL5KL6H2yE1S2dRDrb28gMb6GvSkRr8JKmQovxr4HNxqePeuQVzFwcfbPcyYUxUBJqPfX63hjS",
  "key30": "4nMUNjqPCcPmGxsMaobVS4RrYhJPqK7FArZDDr6kxxJCDDGVZoKkvsJwGo8hyyRFFwhXHsPi9QHMdeTHaG1QX6ZQ",
  "key31": "41z3mxsJx6W9MLyGWYP6JikRKytBUS3bDQ9umsLKin6ugb9bpjmXAdCoZ7FoRh7YxoND6UD4Bji5cU5xiHTFe3Ck",
  "key32": "22vCgmmjN6x1WdYZXpNNgpEvP7by8PzDkrHKhZWGrMrpFmB9Xgskg7rS885sbLZxmtvrYhTSkgHaSetUiMu31WBM",
  "key33": "49nAFhcH2DMzSbxmthC9mq6Up9oE8Q1uvWjSfzuiZdmDMUSd8X91iFctqy4ysK8jrobZUwP8WhwiUCf1GJc8dHog",
  "key34": "qRykQYSf7rjfaeFzcU3d5S3Yo2aSWzRXVYsM5FqQ49mCfshVMPcpUnp1niR215VAfFYfMM7PjyUBmAKd5SFXiyq",
  "key35": "5rnm71QuuGoZXbK7uwkrw8yCCESbqkRSu4U8WDLpWRuFhzkzM7EH2u2oGb6aSfwtTi1s2PcwXd7M1aU3upj8gp5c",
  "key36": "3Tq7f9EKq2aDc9nV28QUWCnaHzRJ6XLryU86mmroEZ9LMMtJPxz2rUvGVJw8BLR5Up1DZxfAAczBiiXJQkL2BK4x",
  "key37": "2F9bTJk2yLFwfwuAN5n2GTf4ch3B8N2uPQ2xq4e3Uq1WQqXruf6AjMUnGoSNFS2JojwA2zVfGgr3kdKGNJP6hxjX",
  "key38": "2sGhjarA7LDJQbrUcVN5Eav3DVFUmi2BUyESFKhwg2dS7QfgsJQ8baZuTTY34vJwP8v2dXSWGvyNcXF9zjZ7WSLQ",
  "key39": "T8MDGVEr4qoDsteeN9AnzHmzWTFbYKkPWPTnsJ3CcjZV7GfJwGpew4ccMgGBKGcHeRBVBXAwdjPvzKrSmtNzzmu",
  "key40": "4JDEqBXKteNnrfQsgQQS3JuPQpSdAAuNoctgS3NqFQA3PLDvxJvQoks26vBRNMakE3foTJgE5Rw2B3p2tsMm3peZ",
  "key41": "2ZYnW96s7JHSvQnxeRvZ1TcqP6aYzSWQ76dZcC3KZLLNGZueKxv4sVvXyjouZzDqKW8TaZEKqvajwVCX1m7BtZHd",
  "key42": "5cETRJruVMvcWbBy7UYTU76wunnB7nfaivx8YCYpLKpUwrKmUveGJi769WzVWkuNgabhSKz7SxX72Kzg6PQ5jvPF",
  "key43": "5h7y8dUgSPnRB9JtcF4zySBVm6Z9gXgzm8x5CiNt4i5Z32PWtUtnaAzccu7QPZgJ98B76xvVNXy1E8cyLNpTRb4i",
  "key44": "WdjAeSy9fZDy6oCaobPuc3UtawhLh46ErwsvE3tDPLnuyByW3GhKRdB8pMomUAYxdPYfMK32ZWDErTpBn7DWnqx",
  "key45": "4Wtb7A3nPRn1kuBJkXH8bxpf9TY7V1TkkWsY1fUqKe22qAbqeMdELVS5E9fZWL38pXuaZJgsjpr7X1KV5TnG5bwt",
  "key46": "bmZvGCUPdFE9S8wzsgKGFEzrexRpfhuAnLdoQ7L6YBR4py5FBccfp2sn4Z6d8mG38vMkZKWCwxPjWtDbTbWvn2K",
  "key47": "2g59V3gLyYBaX5AJS2Avmc6aJBDQasU7ZZsbCpANqHBVFTTjWruRUyaPhaUE3fDBF8MGGt146CY9dzrnjv8Q4Qv2",
  "key48": "4vAraeHHwCzzNg3TCKW2uhrx2fWKYqT6i6r41jvS4QkCDDJ7MR7VCbFeXjDFWcEFRUhvGQaP9Bx8QE3vDZkuWwNi"
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
