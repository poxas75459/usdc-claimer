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
    "3GerDBPErxhPspaWFxmfNgF3AKXyoLdaNvfJQ4vx3XT9sYNnCQcVBbuKUHCRLRL4gmt8ggm4t8yFDdLj1CKt38y6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ie1L9agbviBASpVSiCsUjpE6Cyh3pQ2HfdgnB1qRsR5EXLLe6XwHfJmWxsPA2rcEYphBQ38nmJ388xiTVx6pDnQ",
  "key1": "2QFBxcQUmPWb3NLo8KBytW2tuGk66HRP79wrwHRF62pjx6NYeSehgxMzTmEEB8A8WTnXS485tP5JU4mX2ztzJ4da",
  "key2": "25dcDJxWmHbyvqwSUJTX6oB4R42g6Ax1w3b4PoKyJ52bdrcbETrGGMk9WUenmRc9gsT1P9tW78MNNo29U6QAYGVN",
  "key3": "5tvFJef4JFRxhJABeVw4bjHkG6mEQSoatEUpqAVVvrzi3ucd38K81h5MdZ22VbUHQKU1PWLYwWc61Q2pKCRG19dh",
  "key4": "28vP6jgxHBsYePNpgeo4DVXR7Cti12NttmxYwi1okyeyPdbutxmX2BsfACdoEqHQ6DCGdGZiSZ46nrE1H8t9UpiY",
  "key5": "5domQNgKDroYiG9u1iH4ncJBRV9wsoHUV4P59dCUD3rcGgiysGfeBekqXNswn9YaLR8yu1PtbbPDgVthPGWbV67n",
  "key6": "3eGczHveStaZH1or1PJDaM6KkuA8Gv3Yifc2awdXjXTpVL4vFGBpuxxr7iM31AJoDTZD4JBDwLTQwTrhtMzB9PbL",
  "key7": "Xf6ohfWo2EYfJMrqLZtFdRM8yXVTvErM4Y3M1wVi9po74TPcuVaJyYraqoS2q3iqFFDyy3QP5XMp2MbFW2J6CQ1",
  "key8": "o7HUftWaXJU84RjMF8UngNhsw5k3qigZh7L5Wq75rAmB52LfMQnpBKqLjqVnXfHAoEu9YCX3JV9pCQeJodgpfci",
  "key9": "4ggSrq25tGyU2bnwmQN7nQ71BJdpbguU6uV75visuiKgak8aiGDwJaqLXAKTAu3199sjENrLA1GyagGXy2a5XGSu",
  "key10": "NEtgbpb5jQBjndeYC3K8iz2GakGXFDZ5MuBpTtjXAH92NSoJaWvzbbKSvpMuMgTXcfqvexJx5Ck3rFAMcqUjURd",
  "key11": "3fZheaDqqDpHz8LKBnVSKWZgHA12B6iC7K8eCAoJEPTkrq5c2TyQvMq8mcrXzSEg4oV7XXkm4VxAaKfNUG1DxYyD",
  "key12": "269bM9opkqY3ZsCfe8P6f9yGs54v2bGUUuAe7LuBKYDTCQymJa5MKZbhuk78h7pr9ZoKFz1BKs7pu5MyM1jo9Sd2",
  "key13": "AAhCUBGtWhLW1W5txnZBNs4qGmAwthZEZa4GqWcXc9mXe6BxRPfiPxHKfGsf6w7695gXNqjFNFqLgaBzPVKX6NY",
  "key14": "3KT2hR2mbA28NSq7wdnnvp693UDhTE6ikFbj7dFUTy4gqEbhY5W51CtyUFG1UQEnYdW2jDJtPQ7JgLSzD6CDk8FC",
  "key15": "5UTUsFxU3bmbL7eMzfUGbTV3akKjRFh14iUHfopBEv7nLGdrPC9vcYn2ZxD3pW3SHQppfuvRwqAC33tLQc9jKVzH",
  "key16": "4q3AQRXLtUq1SRbEPgUjBm2vq7Gi8WXTgLHBSKPk3JnAYatvM8qywdh5CGnUTuXdpD5VtG8AeHivxRXiCLvVL36B",
  "key17": "39srQkFe7hf72eMhMqRHmRQ4Tr1JJM4AE9J1y4V2J7pZKpDvPDZvd9KJt8a4J5aNfUJFVGwA6HYpbiBiyEXHH73J",
  "key18": "W1XQhEi3Xhd25va1o5teNxqoSJfxCwh8sKtiic3R9hbcTx55rv9GpfiCfxyFsc9wkBecuhuMPAQNYnjvLv87TdC",
  "key19": "3ThiqxqDSXNEputNpBc7kUDkpy8m9JFf5qFXasMRTtK5khRUfvTaLtMJL1nnm3ipGnGo34ok5GEQDKBgEdbniGfQ",
  "key20": "Pv5ehVasjZ2ivUTp8HoxoL3eermm6Qv8a3L7RzrKJSVx8sgP6Vp3W6DP7w54HWCAyXXKZT8i2jWP32KYazTpnJD",
  "key21": "3X73eB2Mh7YaX6CRUGWJGfm3wNHANz8KyNB1rbdLh61oNGivrtWYg1TGxVvc1tmNEGgvjaWpP1p5XBTC8iAgAsgt",
  "key22": "4B98NtbBHenTo4iejpJGyRpNoieowxdjG5CwTwZQTcugBzCUsv3kvSjsTyyopLZdJtWw3AyXsPmf2i7sTjCAdwkS",
  "key23": "5btWqqTfyjZJsUL5yUM4ouK8ep1LzkrbcsyKbvPpe1BUtWxRs9zeCN9SX8xzUMcq3udddSBSNHcfiZA2aHbXJKGL",
  "key24": "35ijgNkFNrMmCWdStwc7Geh79CPN9zcDWiLkYkFbMYSP5FNWT44dossNy93wkQv72YW4x6xGgHjc2Vpqkh4WRErP",
  "key25": "4z2sv4EzFS2qoiY4PMhLRNHgmHYkzdJg6NARweFkYpcLCWRuMPMmJiJJxtyW5wmF6Thng16kseTeLbDBHD1usT2C",
  "key26": "F33JzJFBoY3cpRLSf2diXgZFoLKL7Eu1RE93xLNqKpsLLy7432qVV5jvCbMMBckBvB2U5aEeHP5JmVvEeuG7dTh",
  "key27": "25u3Ek6hCip97zTkzxACDrdKeE9C6MmVZVgZe1B8kiD4VHE6aFXdfqKnM5o4TeYJNtAZFBYCthUEFMEuqGKpzchq",
  "key28": "2n9o4rsiirmtM4Ee4MZzTqxrNG6wtnXGZivcvBtpok5H4r6dFHkzNAL2czxeV6XWNmTTyyKs7NgtW8xcV9sKJA3B",
  "key29": "oGSt99SzwLWVFqqgXtAbxfPQiX7zBZPmrH7d1ca11N4sqA6RpQTMtM7c9hEBUPZv7vua5vzGJEzLXPaD6noS9je",
  "key30": "3PCfqr3u2ih6CjqNUHN5kTMiMo136bxR31ZGjW9yb7JdW3Jju4MspGcNftRJ51zJSue7R7MFTPs2UWap4FtCYmcd",
  "key31": "2YeJGnq4WwYCmgq2uFc2oso8kMCZzDtydWBvJwjqYCzVf9NiZp6SLhcMxrLF6JuqeV1PjoPqt1qA4tfnpNHgxyuv"
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
