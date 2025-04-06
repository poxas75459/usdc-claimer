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
    "LPFYyRckd9d6HuPCfmzy23iN4U9wm9fyfvmbAPs54knLGbEUd3iNAXwaDTo67vSEU3afYxuvex92yRNtbwF1HY1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2fxYxkHQUVp6PgFfeXo64HDSxBck3vt1iV4Vee6ZkWt7BWcFYKAPinyfc8Wab1czGMhnRx2Jo5gwNs49KXWXtYkf",
  "key1": "3DeBGvWYvqWUrMM45nrA9MYe3yYtUjpoge1AXdqHCUWrvrdTambJfnfsjQf1EAoEkLMgtoWW5p9VQJ92RbDfGfNk",
  "key2": "EGJeAhXTK4ZkbT7yHTqeGNqw3vPvoKmd2LeACS3KbYX86jRzbK8KK8C37w4sBgRhMLKSvWCGxmrwNe8hzL9DRdZ",
  "key3": "4XGrh7542JfC3xEXeEyuGT1u7ij5n3Qqb5CTcCy82a3oadWNavhbs3BFmsNdTM117Lxkhvyb8qzgYmnG4cSe67eV",
  "key4": "2y4FezZumQaHKw1tTHFjurvqf37mj1ru1DEnFzM4bVAUekq71jq1A5yyYGJd1E7Tp3R1pqTAxHALtX3ztGELDRMU",
  "key5": "2WinuzchkV6FNXo1zM7HBtCa1wW7BjaWEPEmBv5m8uJhzTxPhMxS7dWbJMegPA78RMbDUV96ETDpr2jSvrfU9n9R",
  "key6": "5aDidJVvtPbPWBpZ89vXyjKeXTVMgaVUyPG8rVqmCDPgfSJmPxPAq92yXkT1Gr2CouKavGB1zM1HQsJtdYhHuqHw",
  "key7": "5VsTDTiBCZ8oBxeeiemWGqwv5sohuFpNQfh1TaNYZXNVi4b8WDwb4erMuEwLUSBQ8ZbBPsSsZLHM9yCBP8KRSenx",
  "key8": "35e1KojtUEp93syJvs8uWe1TDM3yPU1choQ7kp4P3yqL8ZXFVM44UsH95fVPMNFBqJ4Zd8KCnhUXvVRmJdBdtqVD",
  "key9": "3binrgMBrY42yReVr8Fz2e4bkMLoStrBMpsziMwmKa4oknQ9Vcoks6gmxHXwizc3Y4LCKsthdGCEEqai3KP2RsQL",
  "key10": "YJZzGscMXPic4iNxwoQz9Xb9Ue8ox28PZJx71ErfbY7ebXMbdQetTnY2bKdza6oyPZw5bKbXEsRzEZmmxRepsdF",
  "key11": "3feKE8oE61HTwTEwNwjQE9GkFoDkDSKQRmFhP4mP38Aj9FPUXhXdQE7RtK8vTXRUunZcKDXo1eQwZBBwSzeQ4XJG",
  "key12": "3KjDh285B4PeKG5ZhCxkZo9jSMWNkyWJFfvDQgFRiP6psBbUDb9AUjb647nRmjZj4BUcTpEEJCBWmBH7najWHirS",
  "key13": "2xDXQN2TJcC9CJRD52NFvUQMv2Y5jUu37DkRY1vxzpMoE5nCvvbNVFS1baNYjbbT6Qj9jp4F8ptsF7x9ywRioXLA",
  "key14": "5ec5MR4Bdchg1crAEpPJb9nw9yiFZx1Jti9bKuBwBuR3hExSZZaDvuMqkNGxx17qNYdimJxwtDDk4VLoNzbUXTRd",
  "key15": "9z77HVsh3E49ih7aF7aYbHNcLZuQHF6dUh9GM6TxQNV9CiYMxVRYA3JnpxberAbW664nd6YdGDt499nCtQ9t8B2",
  "key16": "vaXhyVFQWnF6rvd6pNsZhBWwHS1zvLixp784qUbGKodTPZQaErJPVuuE8tcvpPZVa4Be4kQBVGyDhCXCtoZkxpp",
  "key17": "3Z3hSmcbHTMiiQhyyrMYjqvraUBvWpaLwV8UsgMFHRaKCC2D5CZjcED3PmTNddpwvYRAfZyA61Xa4zA3cP88sYH1",
  "key18": "4EkmizgpnPymEVbVVe6UHGGR75GnrnKNyzo3Nh9DfBqScqTBzoRMazrKEFCqppDN4BTAoe8bT7Yt6jE9R2fbFgpt",
  "key19": "3wXVQTQvjCvAZc3Sb62aiBCwg8q6sP7qjU3ivVbL5jTPYFP8JHZU6idhbsVA5ga41KApZ1GBXrtdfyNEiPwfyTwu",
  "key20": "3LitCfs7R2a4MawSRrDHboVSarSjFK7A7kwPTh9JaFKQebYaMZ9AGew5rHRkJkJBmRUXLzrd7jRJSK5UEFp6LQk4",
  "key21": "2b7UejxDxsc4YDGXbCqX1FqX7AJABLgr8CS31g5bS4uJkJJYBpGTzE81VhT7GUSSXWPJhSKbJ2z8ivCuzDYZrEGn",
  "key22": "uSW5qnBuPttxndZTBDAZvrFeZv98R2xQS6gRqFee4fxcWe6BkGuFTdDE7FgFdKiUwPK8Anjm87bqAFHWAYhoWYz",
  "key23": "3evn425WBYar1JcLtWR1Ea6Ff4FBrbtd2GSYpjybq4cHgD8meCnpFXEXW42CczVAQqtXwsxFMQEADoR1qMzGKj7C",
  "key24": "5eDXZt8kwzS1yL9Qa1DSCuDbBbPzsEBZYiM7zwrPH2VvWFE6iwcFWjSb2QmGzUikyZNDZYDKZi3uizwnBvVEhScX",
  "key25": "2mxexjzMzaUuzbZfs5qUiHdwfXQxqV3kr2cKbcEbx1QrpNiufkVLzTNnnUB3qtgt58PfGVxxtnS7Ac9ZJDNmTh2F",
  "key26": "5Rw3dhzZBmXrqV1xJCvYgbQaRryRJLVXbWCndJtxQCx6bRVE5pDxDyFjVjtXBULHusc3S9wxRrKQEupqMPYmPSef"
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
