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
    "4m5UobMrpR5tT8J5eX5p2EbTt3HfHBpkd9YyYqtSvoy19vppdBrFaKGjkmLmBSuA5EypVj6i6b8cdeedydWvKmbZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "km82ZC8p7fWcGfTJmLw4xL2kxDUMv9QgBaTKW1GnGYhkg1wLeFSXUAPxafZRku99GcUJBtQkpp3LPyyRffXvNvX",
  "key1": "t7qubUYwepVPcVX2z8xN3rNiFoNAbrJyUC54iKbz6TVEzme4MSHdLcCnBfxxfQADKqY2evwLuJj7RP9WLxtundf",
  "key2": "2MXj43iY5qWQQxeGnGypsuxmiS792fYE7ksf8di18MM4Gm3NAQSHyHyo71EEZCpGyep29CGpSitxQRAYGvFBknCe",
  "key3": "2mEjuiRzfV444hf13y5FmzBJSDtWzkLHYwZFbCiTE5ovhu2d3uzEErjATKNQSXUfJga4bgDWbJjtiGMBcVoA8Kbi",
  "key4": "5W3quWt4D3FyTmvESKXt7QJgLhm891cyGRYqJHzwbm87gMjaAxKGhm86svV1oUGyZ722TdJwZe5AVGMUh6e5E8kt",
  "key5": "5cuCCcZyDewR9Keh8VMTegKEA3mz6rajDNkxg8xcCqLZGZEtdQL87PjKhazpdsKBR7DwbbEqXMb8RBHWSXYzWwHs",
  "key6": "5L4HDaA1VQN8Gvw34RVvxYkpCYNptEPUXpLjAEj6UrUtUoLVKKh1wyaXjRFfQA6hd7V3jH9ucdUuwmDCFhgvhFWw",
  "key7": "5o3T4DpCSTT8Sk7Mop32wZPHEGfkxUtWvpDjEXpB9TdbjoqoCUjsfgs5kSx1LUxaLLjNNXquU2p3xFdTca7zbx3b",
  "key8": "2mXxPX9TwWMNxUnJ7B5MqsVFmzYanWVm231SmqR2qj98QbvquP9VN9RtVj3u7C1pZbnJtwLfAzzismFmHpDF1X5B",
  "key9": "5Gp8oDt7un31rcKYPuFuMcSojyZp8JvtCWcp4Hq425achC8PeudG13WRAconNac9HDDoBGShL1DyWUFT5djHJSYt",
  "key10": "NXTkUhfbikL3UioCZngNFzoSgDbxbDqH7fugC2uLD1s47bzTP5iaFhQxZ2SpxNGBVvoUA4ZvQG5kL2YQkN3YePi",
  "key11": "67TE6xsJ7dScPMCxnEcsPKPM4fDYPbiCjsT5YKJLAJRa69e6ZKgh32fszXgQ152URaGrmxbskuL6Cb4wx7GtFKYn",
  "key12": "5HtycdFJQWEonhS9JcYea21KzuGALqcgpXBZwPyuR2xXzo2VYcygx2mKCkch9JxBQeHUABvGfr9xkKdiAWeHBarM",
  "key13": "674NFKYyZBVARUTfqvP4gBm2WfkJSEex3Lrnwb7bbByanp3u11bhNxfmZLKLGRm6hbktNVqcyRXsDBd3bQFQ2CNB",
  "key14": "23XUGwRbgoyJ7bpY4H4J2Z2Y9d3M3yHCkSJqS45gzVgjj2mHdsuuhLp3MhyDNgCAf5rYCvVM2SawppCyWLPSneE9",
  "key15": "4882R7PKUFVmj5R2jeSSxUD7DBkrSxP4Uu4GLZLP51fMPntvrhyi5aiibqjQwvgoHJhqP1GxmENVp187qmvQ5qCZ",
  "key16": "3YUFnzDHTHseohDjFJ35Fh587rTPwEhkSYWNL23FKPZgkmJYX7owPyRDVggBM83sVLzgJB12f4Qx2x5NJLa5SzMV",
  "key17": "4KQvTyycPj5Pm6g7LF5UomgyDTYsSBe2zisMSZ6KX7npUnFYTn4ZEBjxyVZNrSCwU6sfHxXp3b3zv2hQLHWvpuii",
  "key18": "4KHPn4deAWd9ppGnUB4mxUJMofuUKUd5NYCgWTrT2TDzqFTnmaMuH5x1LumUWvE9V7Mii5GjeQw6S5ovKCgvXQ82",
  "key19": "465VYFQZoWrdr1iZU8diD5dW99FqnVmekfPVnPMJsCmREwV7msMuuqguvzkgeuMFm2snSoGXTyXrvCSzW5kywX9m",
  "key20": "FSvoTKDR8AGHqshocmtu4vwbYgDL3YtPUahGMFnKduk2unAe1jxngXmVHS18JSwbKLwqx89zqu3b1DTTq2HQKTE",
  "key21": "55vrucENt4XzP7nh9fNLJBLgNVkknapwTw9GfH74JYJ4g1wUNwoL7BeunyYPAsoQ6xfK8MdR1faUxsbinbkMwyz9",
  "key22": "3fjYWCJN48wBVDsNN5jztt9j3CFcuBWzbztKPuHCosJazNorHzBafYMiJGiMzWJAu9nuHPGnsJb6SVigxeGSQvzB",
  "key23": "2ezBQzVYvRUjJgdg7Qd6g6KyvFwfms3qnHUTnqrbHQ8vh37ARFuoftB2B5zfS5xkGy6HXn5R2j4pyDxNSR7xtCPg",
  "key24": "3av6pQcSftoaGsALdH5z6rVQzgwLZXwKcmaEXDR2gfiVta5Neo7cakrgpCV1Tu4uXPRdVognVSqDgwxWGLF9U6oo",
  "key25": "3E5zxMqaHoi8Pnm5HGq4hCT1JBkysh6y9tHVWEBRqtNrKbwoMFYBMEZxZP1LrZATRbh9a7MS46NuEDSaEgEhM3UN"
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
