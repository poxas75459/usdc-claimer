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
    "hriDDN34WtwtVjL86H9ix9C93UJR7vFjS7dve6V5txosJhbpjDdSH1a5TALg88vJTx1tff6Qhgh2BLexfTTLKpA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "A6QU8eT6z1w2FcmZiLGaqCygDNoxdKxUThGzkkmgMXNzd4hLhEC7rkhLC9wcGtNQgLMegm5KY3J51uPmvqxLKzf",
  "key1": "3mtpkSySEhvtceGAqdLAbnMWzfaC58PVAP4HPwWbtxuMcoCWQebNGk8NYybaQHx9Hi2qiw8uEM37VC3YoMyMjWiS",
  "key2": "5D3NVJ45TXcdy4x3eZVLtNTRAXkEnsA1UPzM8JTzV33MzrssGz1fbSCSPRXkRZk13m6f48X1pDFRhcpWqeVRTHSz",
  "key3": "4L7xJ5uRanG56cpuabmuMoPD8qv9nYZpTCZq8aQCi8gvrkKdyVwj2G22wYxYuz61Dn3spfwcXuoVqYUr6NkidjwB",
  "key4": "2iQX4tF1BFmWqRy7c3f1oEh9YjNa4YM2eB63x5aek2796QT5MH7bjnyU8A7pJaKNnyzJdSgpTcmcuDfDyuik9Wes",
  "key5": "5TScPMakKQ2cdqqtiDQhEV2AFaUFS3z2oefrQGUuHYGuuXVEFgs4ii2Ek3W5HXrytAy12sQGi6cczH1qN1awn3nL",
  "key6": "3THDgoT8FDK4aMCZ1GwHCgnhMeicSVHZYmb8CNCvTiEWurZ8uwRHXJV45VxhLH55iP4pWak79hcrXZguNvXiRsJN",
  "key7": "3HDLfwjkJqSiNKCJiKeUcZk2edUioKwmDaQ6h4tyc6ACnUF9EFtGrqjC1br45ZYvEX5iSoBKsT8v9DL1Czmvttdz",
  "key8": "JXyBPp3HvBNcnh1S2DP4UzXbcD3fgeceuQSRmA1ZQQhUrVAEYxYd4rh6HZrNS7NFRKMkt7qvd2355NfYZAmwS96",
  "key9": "6728XJCaemEy6mGY8fyydAobnu5g6NkMbacTKArB4kgwvitGuc7avabN1ArBtPNVLoZGWNLqYzkU6YuGJWB9MxwB",
  "key10": "3zEKH8ik1WE1AVbMuWSqKGbxCRGu98Kb8N6Jrs8cciB2KYHRA9ruunRxjZMmHZUZX2PsAtK9dpyRp3NBuibb2bzX",
  "key11": "49wTkCrLzZn899dhjCkx1RA97cC6AJ5MyJwtLcfBiy6bUpcSxait2JnTTav8CHubp7DiZ48bhEvvpWsa1JccXUhi",
  "key12": "64s3CWRhGuu5n2nZepc9qJ7SXHQJyo8TCTLrUqXrainYZDhXSTKAYJAynWsX6eGDFADiWkqeRDfEXUydycbSe3ke",
  "key13": "g6rk13H1fsC9iBcyjANmjw6uaS4WoFpQDwkubEf9jxHSwU91hFp3wLHg7sM1G2dNwSLPVGtUrs6PaRM7K9TqPw7",
  "key14": "5B7xkDWAzz3wyvyqMbdPRSejkrwrR5tXLFNDxpxxwy56Ba7MMBu4CxhU2FQvw8F81awY7SouYrt7yCKDx9q3GVPZ",
  "key15": "31vGw2FBd7r9JM3XNaSxmZ5nu8KN7BP3anhV3LGnnTY95r2KZnggzNLACXvN71f8UKVfZahF6Gn5hKqSWEWvTLvg",
  "key16": "5ZLauYRno1m5LCJWFqBzG2wTBA5pQk2qbWxiVB2Nkq6mG8ZVWNUJcM48p1foPMj5G5BS4p1LNnJpDPV3V357RTvg",
  "key17": "43pjrJwDKgwgHP67Dd5RDokKvwAM5fe6PtxvBD3PJCvdeV3T5Fx932QqPuMqcb1favtk678fkQqeVqDn3ovzfy74",
  "key18": "3XhpWr1swH8XXZvsZRXuRMdCKLCYUhQzFk1sXqwjNunPEj5uMhm6PXrU4mJCetxSsyFp18EJhS7sctmrg6dCy75z",
  "key19": "2r8nxcygSN6DZ7bHSetynEJygx7zNMS1VEZzLQvxjZvkHiddj7vLEztR6k46DwK9xaBooiAHq2LBpYf97ac4n6vu",
  "key20": "JCoFqYBDEqt5jwRK5WussbeF7Yon7xgFVjwyuyLsE13YB5aBxSTvM1oxmFgS383XwWQkXRkfQu7Jaa2gA7oe8B3",
  "key21": "b8m9LTTbD3ztjNDHGPkso9X38eT5iHotH9Pn77htJ31QzGN9RiBeqiQGgPS3xpyanJKYwMznjUrAnvV7B4uVmDc",
  "key22": "Tsk8xBNNLoV6togpEkoHHUvucHzGWomPgprYsCKtf5TNXNDA6gBWD1tRtoAjQKspkSKvzDvRp7tatzUy1w7PtC7",
  "key23": "2fb6ssmCWmYgReDJV8f7tmFDBGtkK4M4vtGuHufmtKgjuGXguvE2SDqZbfGpNN8CkenyCuWz2GpdBvSrN39Q8KLV",
  "key24": "2SfnFcBNjRuXynrJfYoSkSbKdcUEso1PsyhvNFGxR5ViT4zW2nUDryWMBrMSfDfsne8b2iU5RmwfCpJLvaDGZ3fB",
  "key25": "5JmBT13cYYvTfsTeknZuFXmxgNyxJjuAJPVFPJPbLf41XtMaJswxeJZEwekY87chkZFdLK2ZoJnp2KMzzVY8i6vi",
  "key26": "4AgGZv6SSEoABHp17zDES5QxfCXiL1UyXo3cG8QpqCnSYDiFUKJhEmFvNRFdJVCgyDQBD7KFNRy54vipyswPgTXv",
  "key27": "4JHREZv9hvdHGzkR1Z817UREb8cg4raxM1vqvSSLWbAkf66c74YB15a9LsyJrnAqQXLec2AigZxJRxR6ST2zWuog",
  "key28": "3dryXB851RaBRhMs7mozZbKQKVzcvp7GWJdDzTXGbZTsd6TasA54v61A23x26YfvsgGbcX55L5VZKXn1RoR3Sij1",
  "key29": "4C45TDenf7pY7eWmu4i7JVrgEG1gpHf5hafAA89KLaGG5cSGr8k7HCMGqNUWtqFTuxvFtUucB7rYjZjPUw4MRBpL",
  "key30": "3kHE3uj6iWYsRpke1fX8pkjuCce4MXa46h4SDezmoh1mVHHNgUkRni53qLCUdKjmpPhQFp1YK9DpRMJzcqAxmxqD",
  "key31": "5Lk7hstSjBkczW6gEmnqrmaBWVQWgn6zYySxNwdmmCxQSK2o1aA3KgnxAYV9eBV62zBe7Wwja6HCP8aXDJ99Be9z"
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
