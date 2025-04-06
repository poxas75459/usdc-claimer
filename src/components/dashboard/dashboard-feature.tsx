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
    "2ErfLN7wGXZ8DcTy39HZ2YhJWar8YKLeZx3AQ2ZhppB8WhSr6FpnXAQhExHr28USMvYhCZz3Wj8ZpZAFkwr3S7ti"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2kiYfze9i7QrDWbF2LLWxEhwqGdQ4NJd6iimHzhKkUQy4KGmVwrqmoyxpRiNNMuSzZz899tDPmoAdppL6dNXjVkt",
  "key1": "eboVnTx8ro28eRnRzj4UGecb21TnXjWRNiamM72236wvwN1YKwmEqYFDfvFLAhVCRz7WxxnJFHBjQb5MraAtMtw",
  "key2": "4YiZUonzKXnFJEJ9KL4EWPBz9926NGndimiJXSyv1KRm4yCP6GKpZomVWWbn8KJ3daC3eh6EN37WWhLzy1XNYLQw",
  "key3": "JyLVSLJKbBrcRTuW3foyTnT98hg2LAfGnE9pLjFUg7DZ3D7xf618cDmvbMsqWzkjnqt7ZGX5Uopp6vaQXR9mZgY",
  "key4": "5XkMvHr7UyyAag8qViMDVcFvhaY1Q52fRY1ZqKfyZ2pb7fGsv46Lfv2MwHowSbDjYRpmB9DDw5VAxVtD8rPHUAR1",
  "key5": "2uEBHT9zJiz4DMvd5UwuLCk8HRs5tapwxVQTQKbB2jBv3xRk839fU3ZoBh6dN8sVwaL3Px6gHcCDQ42tgfJn9nrm",
  "key6": "JtwwvarRodcR7Do4dxHVAKJoJBH93A9Nyw8dbf7V8hko7yJHF49AE7dpPwxkFi8EfXGcqb8B6UXLSZAKzEGWa56",
  "key7": "5jZsNnYZ2W2YHych3u7BbUEfh6w419TapF1JKJ5fZHk5r5BBnBkVzsmp7pobwXXSja7rgunTAoUXCxLMvWc7hkGe",
  "key8": "4ePwK4Ty8ab8hcjMyAhvdrL6iGTU7KtJLWanRzhvTnf8S7b8ipUJrGBJTusXqiGtyXRiTjm7485mugWZP7sG8EQw",
  "key9": "nyGnTAGbcPjnpFE6avdTX2iCYSr9RFTUoQtWT8WAusNtQeck36GLbARnCgzyBey9wspovhY8NXGAb95i2aPZTvQ",
  "key10": "2KL8vTaed4uznvpToUkzD5evjxyQG3KBTW4khez3kUgF65fyF1Wixob4RtWCDfk2hqAj33pb6Bx8KHCpMUjggEA3",
  "key11": "5xRCUu2QgpXJYtwGJbQGW6GZYmzwigkBGVMTAk67rV6WF4gkVyo5PRJdiiLSRLnMuuu4ZM2tP3yWFhtiNgmiNSVB",
  "key12": "22dVcoUE6NNYXZ3eMitqyUTMT9cynchGLHPeZ2DzMqmTpRbGQtYMryDM8KsEYoQGEnZRuaLF2CyMhMe6ZDSxwi7k",
  "key13": "28ZXFMCUko4zqhuewsRvvNqmEaEGs6LHXSHcFptVdY1CWdC2ENQH4hnqiZnUmNmSyiTuq92zjPtQa417D13AxW6q",
  "key14": "5PcebY5ZeYJhJ3F7uTrQE5a6Nh5eneYK85wcnBPGKQU7VpCZaRehLBfYaEohiDJBFEau7yfCu2dy6Leq3vf7ijUR",
  "key15": "5YuDiJwbqYdcpx5d72NsMVnhaLxw3pvAJjkMsDag78gbgL8seiMbU6w7mQeZz99BzQFrHM9XTWST49dDz9kHYvnK",
  "key16": "3Kv646Mqxa5Q4vf7U6A7sGV7WBo93BLUDNAqnXmz41adoFhL8tWCgUhCqZ1BDRhUK6ZUrn3RjZHrS1MoSgkBHq8L",
  "key17": "5b8CvqEgwYXhhUuS6Rt9sT3TSEDJoQGqpJZe3wAEDj4P83BBmmAkH6P35cmEeXQPqDxQSycm5BrQpygHGDby2CU4",
  "key18": "2hjcGTQk1KcrACXS7fANX3QS5PsXEJJSAb3vqwfVRBe5FRWBePKGku8LQGwQWYwXFXQofxELDAiJSdDS7rTAauk4",
  "key19": "2UNXzf6QKQ7U2a7nzzLoHNEWee4jNGDzsXJ3bSt1h54zWLoX3gA45VFgvehp9cUqyAXE5yxyNXgpgU9TbNGae8t2",
  "key20": "4KDwQfRkxwEVX57f4o3gFMmwnX2fS7ZBBV7EJA5MqNdsyxcfTp7Jk58ovx1M5SmXgiTZfx5tTBmx1KMwee9rcrVj",
  "key21": "2XbR1Q4xMyDRLHKXvwLwgirzocZ9ZfMCYxydcvseUyEk57Rt5Yvwyv2XpgAG8pvdruZYdrRJ17cbLVk7rPkirfRK",
  "key22": "5YVupRarrJVV3bNtNbxsuKn64vfWRwEUjupjU3aFQE8MNy1VxyAMVubtgDrEZGBjK8YLyLejJ1jtMQvcHrdsDE2",
  "key23": "3i7w1YAmX6qkKjUcZuGEbJFz5SbFCA81JYaHe1yf2EnNVo1rtHMeAMCs5AS5tU5DY9uaiRcCEGJQFVW5kwayHT3B",
  "key24": "2yNqRBNhGaY45cEuPCC8KZeAXmMcnVSP58w1NBzgirpf4yGJ9zpNwufnxRfk2AabwJBPKWh414cKm3jQSijxfwe7",
  "key25": "4VRZUQSixAQwnZnBctkDTs7FXP7WHKmTbSJN6pwfrHmGKSkJjmFvKR6RDZdQT3h7NS2QZyjWCLBzZGa2c1NGJNpH",
  "key26": "4wWbJabPcdyVWSdrGwjwuHRu6yF4sNGmusTGJMQ4sq7kV697oBuit6b44BKYsPMNj7ZvJkp2fyFpoQJEEbwX6TeC",
  "key27": "39awaEf8hcmPwRtN4b2PabcrHSwZswdhY8GUu48pinbLSvRKshoKVh8wX4vow2dKF6YB5dyEHBsqu8oSvZaUbMr1",
  "key28": "3wegYtwfrmL5q4r58dVXCefBBbrCQCbtZJ2zsP2wjZfubpPLsmMbzU3St1HNYV4yFrUSGSL1pkme7i6GHSgnJNkA",
  "key29": "37nXqkHKuduj6CA5w4DKT8knf54qXMDZNRyVCiSfXtWwStbnPCfmsyXM35siPwj9kPcRnGVMyqPdM2DNJ3ee7tKE",
  "key30": "26faAYr3yoiCYN2bnvjX1FWGz9pK2mwcmMCaWxK965C1AbBpax88BD3GSyE2QW9bBx8HkcVjCCP9QBkAmYdkoD5t",
  "key31": "5oZFeKwzeDiaNPDtiYbPbBYNqVz7h7nDGV27d8CvZ3jtECEaPsUdky6Hp2DUsxBXV5pqbXzJkzqE5wfF8BeASN27"
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
