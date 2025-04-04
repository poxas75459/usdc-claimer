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
    "nv4M1GYHrM8AejKuShxfaXWnbSVzxEjnV1Bu5pjqAyTujp35sLyVFsfHUBwniCFKJgfKwc3GRdgyVbzArDCxW9N"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "62dB2dq2Rk5ppLDQqjFZRczDGSVWhVMR7mz3dXiSshqQ2Gzxi2g3UmqpHL3QExxm2ZVVahqCM69R71QY5onESnDX",
  "key1": "2U3dCETDEffzwo8gk1V1rf2fkC9n2JofE7cgcCRJuB2vxAPi3Ks2jwcX56ZTVxy9KtnXdRLa8hw4467NQMFE6n4w",
  "key2": "3UD7GKMU6C8qaHBULoTKaKWz7oibydMW7RG21fKAGEnVnytwuViGfmpiRGmJ4NCtBjiG1dAGSKREjw4GyJVdzr94",
  "key3": "4K95BMoV3uqn6qnwhfLZSQEniX2AtxBzR2QB4maK8Juzy9EMaCfbMNNtyPaWZDwPG234Fm5upAPr7NBLJ7H3ELBN",
  "key4": "56FrShzitvWsRwjAR7JjARues2XodRmhcfUwxStrovymyPqkqf6QcvwxJ5FNUvRhVbEQS9feoKRQA8rn1Pgvxnjg",
  "key5": "5dpz3iHx1WaPHMJoUDycT2V1bBrRrj2nUHefSiuZSB4xyQkLJy3XxhBcZzuppRTCvdabJ29uHcYyKHL5WNj5Lz3e",
  "key6": "3JxQ7WVNRfTg5k9cxTvv4teSoSw1og4LN16k8UvX5oS33APYmm8YFpWG7th4s9fSED6yWendorgzpsKv4h6UMWxX",
  "key7": "4BpiYgkk3zHHcJLGKeo56LJ4stA8FAbQ43mFdnjr1pJChzyLq5zLuty378uozMf7sTUfEfhLpfpDK3GNLy6HoDVX",
  "key8": "33Z2QTcHKMKh4vssvWpphCYoHUkwjLXJqwQKXxwdNHGwep1KsZm1i1TnPcxeV6bn1zDN1WFx1PJXzyXJj1ZzvQnt",
  "key9": "4DYppPSBhfiztxEbd5bXBrBx9kapm1D2sf7FwGVcgvYtL6UFw8RCwEjkxRxJAMNLig9yVEvG5hc6zwaHxjhjuxgF",
  "key10": "4FZXcSoEZfGE7ghd8WhBXhDt1Fvbi4MW6LnaqReGVtjY6KUxPbXmWMAEwWsA1tJsGCouujvAyPskBHcXpfjukY77",
  "key11": "2aViMYhDqiBqxPqc8QCA9dpkBhJuxDVnQPW43BGgUsRqLVaYb6qAtyQTS5oYy2EA9Y73mfLNzQ1ioZcqWM4ubHgb",
  "key12": "66zzTNavb4v6w9EzEwxiGDcviFzSZKTmQRmyy1vgpGqVeCZwLo22r6q9AwSLUKPrVDtEYyBD8neTBr3oF3T6Xiww",
  "key13": "3hDx34LFVmknEseBMUNvVAREWGRDGTwQetLqxGpn9WcxvoHVNW4xtxdw1NbiarB1Fgm35vxQmyMUjzmQUgWi8Rer",
  "key14": "4fEHdnKkh1Vcuq8veeZNgjBCC5Jk79bovkTY7fDDTQ27QHD6WsbrAAWTskVUKMmMcJsyr8XjWagYbGFVHNuHFhr4",
  "key15": "3TxbqeTrrtLq5SGC7t48kMZc1viPLfh7N4R9zcPq4yjky8XePr99ZLh3KLphngtsFwEttbbcygtCeEgy63dTypzD",
  "key16": "3Y6hY3MV1t5Jws7czVf1reahVdiBQxYB8oSrTc6BTTKpcESs9EQLsxsqXogfJGWpUJWqRzkTmqjKsYSAgRyVSciW",
  "key17": "Lfha7g4jBP5UrF7crkCXqWPJtAPp7t23PDYoaTfUqwSWrnqyM8ceduPAkXwN41snFzSrZMhw5SunRLb7TPm4iB3",
  "key18": "4eoWq8PSx8AVw9Nx4b9H2QHaM5apYxPswVsi2YbnKtBoiiwCydjtvMkXkzUNZ9K8gUPhms5DrtQELhtnA6J8yxDz",
  "key19": "AviZX3oG1xDXV8fEAW3kLzjQXSTQZkL8EAc8Rov5s6SHyvXSPrsvGYi17f8mBcSzysXVjNnTSY5gcpBBRQqB2pF",
  "key20": "2ycENxc3D4zAMJQseErh19AmDqHhgxVGySjRciMkj6S9pyoFUjs8qPCvtA1tsoXicC9H6KU5B8cD96MyXEoVGAwX",
  "key21": "4xdK9UUauBkkperaBMRS7bc23kQpTKP7sLsmum4CVWUckoRyGxiKeQvqLdaN4q3mM9sEEUNgHLN6Hap9kmySa98r",
  "key22": "2tAGTFq9K3XFcQodxSPa4kCyh2EcYMosuRu4kqwxpxSRQHTN5Htt5LyyCKYShXCPvqyQFgxSBJmqqydfiN6nTHZo",
  "key23": "4EcgRba8QbaV1uC28HRxPvenc4dXJNY5AHWp8tvbpGDFeocziv4yktSVfwidhkRv9qm5sGpqYyejkrLVhBSkUVer",
  "key24": "3haqdrmdSPCRrTzYFUtLz9JC4yWrosyvXT66GALigbA7WNMAWFkyKvKM6FLN9x3fTGFgB2tpEJWcRw7LNKfMPdK7",
  "key25": "5vVbUiKotugoTi3RBpQD9kvrK48v1tFNxCReTMPpUoRJm5wHA87ZTgiKYYako2hqvqh2BK4vCaCQNuB8Jsd7ApoE",
  "key26": "4iRifmBkGVKfvasCYugucPMrV3fx2rPb2f26dUZTv37FJwvXpJdbrj8eMvVN1tyit6VPF7oz62CM5PLKdqrMzTAD",
  "key27": "4Jq7YTHsvfXmG5uPSvguzcTCHkHGFu3zGr7ZUxnvso2FE6kKj6xBWV5fp4w1V6cdxCKwKFRAnG4CoiwLKVsenVMw",
  "key28": "2wQFByd6JZHXzDJmwmNYeHePE4CxEN6unwpgPdD7iUT44MJ5w3WUcS3pPfV3syUzosD93aAMECqtgVdjRTQ1urww",
  "key29": "4RgYeubUoG3EGhV3CLSLMtkJv2SsZddQUX88qTBReiB1hD1UgWesd58t9JeE7W6dFE1tc7EzhP9wdY9GoRv7F3wx",
  "key30": "RvsNHsRvs4FoNkv7Db7KWV1NhfkWvcTuvB8ijLjC4mkH8Rkvaqj8C5tRUQVnQZzUZEgeErG7hqDDiiVbncPWNBF",
  "key31": "61MPR3pPQUz6UGBbNTjDheudv9pwEufJ92N1LgYDUpyYB8ifteEkPz3FWCa7pzA6gkLvQEtSmdqMegUJx4d6hxxz",
  "key32": "hpP4UzMg9utKthnQTYvLUYHt6646KoZr3iDuJQGrbqo53w1XYFVozqzz7XCcNY1MH1Kn1m66SyQqfiJr1XDHoad"
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
