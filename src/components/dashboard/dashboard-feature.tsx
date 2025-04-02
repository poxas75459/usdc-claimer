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
    "2FYHe4JRZvVLYzxfg65q1kE6kpamySobKSyM4E9hKZ27UBa5ZVXk9NfXmUagXi4zusZhtLpbttxzX9QopaoDxfT6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "CRQtdSgMAL2gpL3zhPwxB3i1dJZckKtEfReA8BTtErstwLn2EpRRMzudLiCrmpy3TwhcvSY7kDzvfPvooxLdZYE",
  "key1": "onfxeSparaCGSRDe4g4TTo8BgCkxLTbK4Zk8n81XKBYeneq9b9KgauyhdadFHK5fXixKjryPTfYjtJdXaNdbT2j",
  "key2": "3cKms37Vh4C8qVguueGU3ACjhTWfdLGCxyE7EAbE2pqNE1bDdFDhG9PjKoSvXMa4GQgvJYmqqfNH9iZcbPoJRkxJ",
  "key3": "MFxfEfukARLTjA9yn1Uykvs1mfqvRuY9PDJs2mtfg6UxinngTVy5bBsxQMT71kXZ3HS22pcTiqoNXkyPLQmtPxe",
  "key4": "5uQBED9unfhtRnWU7EpKaZsQJbmXNwpU66KrpTg4n31SK5V4Qfti9jCVRX7RaGchF7tWB4fcsC39sikYD5MVa2rN",
  "key5": "2F9EY7cnV9JrxumsVCnNCyLjANzYY6b4yNn31zCQjxaF2ETxV7uSTKei1NH7F827AsCVzVf4k5VtZVGo2ok4crfm",
  "key6": "58iqRJHvakKSxWo7KqQEUn6T7jNYnD8eCwhqduAL6U7h5uef38Lmj7AJu9paupN9Zsnky7Xu2SF19zpXiZFA9TML",
  "key7": "5wa6HqZTsjULv3FUxgs5fvAtQD2sNiFet7vPsDuUkPGauJbxrQXXNDQzqaHSGJpLsrPWuZv6hqUhSnRREqtRykwQ",
  "key8": "MTVGGi4MTLDaiWVdmi1Yqa78UEnSKKfXsjoFfim6Q5yFxoKU2qu64o3NGVBoWqVGiPgvZgPfJwVS1kCveJ5k2Bs",
  "key9": "3Wodx5K4c8mkkoGBe5HKFf6Jq2sqYxb7jApGwaFivJnNsSA8Ht5XZiCmoEZxhCrPwfVGMy1JExN5rGwhhPbm1Hvq",
  "key10": "5hnq45yTfYwE4cwzAvgvqmZkLSWb936x4Kd4PjennpFCREWCbG7pQidB4eoncdSybS6Xtvd4Gm3CBEQv9Pej4ri2",
  "key11": "4tpmX6KPkBa7BHpLBq3Qgw34GPvyQvD8cFFwqaLqLdu8gsGnVau3Gmd9VnU58b6Z2CkJjdpQ27vM3D4EJThwRptu",
  "key12": "5SMB3ZQUHbQJmgCNwGU6LuPBZew29mfsRzLy8dYmhPwUksMe8naRMwCQio2EYF5FCMTSJRcU6Porz7W4Yd9qQmkE",
  "key13": "5zFWk25MiQkoHarg3opQWfWuLxW1otKP4RDcNzAsyWCEWCfrGa8N431gXg7dK1R9zXLiFaaWTunos4sLJk99CY9N",
  "key14": "2r3Kbbo4HaXYwWmAjXGqq94tRdfj4ARWAA39XoH3v2swszus2UQ6Z7sWnaZYme1cyvAA8xR78sXmq2WkjAv5t4zL",
  "key15": "2GVEndoWNC5GiAkNd3LhHJhpMU9LxAEpQvvF7PFshjxUaNRs9V2Pgw1vTwKX438YWAgQ6AmPy9aVgCeHtaKTdd7n",
  "key16": "5uy6nRabKNotcTV4BtGJRZ9tar8879h6WRBMzfZj6uQm2GFdNebMbvSVs3UiDy6z2XrT7euN1MkeeAFur8z5ivzW",
  "key17": "46Co7cLzfbTLkEKJHQcARdNNQV8iDsZA4oNrWyvQMxYEXjDsQBRNHAHCESCPpwpQ9CSVttyiYcWfPBefsBNj3wSR",
  "key18": "5HF9Ma9sRCPRHkwGCdqfYvWwbFHzqRj2UoksAUibCSyt5xSjf6nSXhP2RHFCiSToxTSr7xXFGgGvpwEtivsdU3sY",
  "key19": "Zy64gpGwkBB7QWzTxnkszvGmcyFSCE4JuqgcZiZGCvjeeCom9Ki4BeYJRLBVsSqm1arNw5xpavLuEwEoZTHo3fX",
  "key20": "5nEvkhCz87siatq3qpDhNaQj72EH1gFAnzvSCzE39H9h5rHdFzdiG6a7S6A2DUMu31M94tHMpewdUF7MpoWk7Hok",
  "key21": "SRfAoQ7s9jRDbiCKiebvycyHesLk4F7J7AujLsUwmbXaJ2HawF5PxfJDVz1t1R3tqMfv76ccXDQfDdwF5bJ9fuG",
  "key22": "2LjUZRfJPQw1FW7SkamGTXmucEYgNEs2BQswk6MFHwz1EMukbVEyuU42Sz9DL9gw5hGZpuaQxeTocGBjrCV9ouG",
  "key23": "4g8AEk1ZHpBh91vsobpsQpSvmJDQ4fstLNvif4NTTzg1iJcdU9W2dFNfTRjeA1WKuRLXmwT4BSRyLt6T7NPagSU6",
  "key24": "3Xy3BRGTHeyEC3kHFhCtFKXDAYWSBHFCf4t4hBry5QwbegTPFJEkPR3sxQfqtcPcKWpnNNknym87r5kgPyhXdKko",
  "key25": "5sABxhSEwMWCrB6pXPyhTj34Qm7ciKCvgPMh8tXuFsk2e81nt1kipRDMp9Qsnr8dbevq8nVtX6LiudhUG5rrJvj",
  "key26": "2kQYpf33RGryanSYaLKZnS6Kkf81MoBoXdz1QfA62PLYp6D14a4GQMQMh4gx5TexFTwUMujvb8kozMXRDtEMwWqs"
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
