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
    "2aZNfgJCGqNjhpro2Loxijkc2DCnSePpVKhJffN7iBwjYMRpQmLdxqUHorkhBR1rzXK7Mqfxmyma7f4JLcpBtqEw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4L7SWomSt5VtRtmm6MykGQnegnduGDu2oiNK4pdnx6ARvuJPDTyurkKv53edAcp9hUWCKhTmJRKkRYP4Z4Rim6Lp",
  "key1": "5pm1P4suZ3FEBHhTPmbqdiwa3hgdKR1dvdf5R9BbYDdTj8D8F2FwQsXwMPhycL5hHGUfpDVmT5Ya6dmH54MrW1yA",
  "key2": "37MZKTPx5qtsm7icikdtVRVSmCvo1hceUnF7FsPj4wDCA2Bw9VqwySd6uQBm2LtkrFTcK7F2ahunMiUDLWVgBo2u",
  "key3": "227aiKzppje2sxskqPtXeQphovA1U1Sxnnk36Z374tEXKjARKrhBdUcMKFpqShhEd1gziWzunhLpGTMFZFVTFBL9",
  "key4": "3By2vdh4jXzXueRacFkP6BJ1QWw6P21XRpD1Y4FWjGQnetWdVerqcqYDQB9ZzNYsNg6pjWxr3DGpfFVazLLN2KaF",
  "key5": "3Mcvmr7172zEmxrRKS1f1UX7beEnZRaJfDttxnct8Se7ifq3bQgSBxi9t38tNXKEK4D9XJLhjtQ2UiKbPETutkvi",
  "key6": "4rR73CMwth6W78QxowbEGhj6zQYyVWuw69YpWLk5tYtrWo3PKKxiHXb2j1k5S8DXYQ44dz8uH5b9pUqYTviyCRFN",
  "key7": "3pa9dgb2GBGmJSkC7okQG1nVmatw9JLTFMQ6giKDE8XTjb9vQnxwRhNDdwefjyGtgf5ycvqu37v7wPMDfkpCGCFL",
  "key8": "3EL6AociWbormFgrzmMpF2Fbhx1ZUXNpYpZn9cPVe1uqf5eBdJjycQQgXb8rgk69tG4VtKYRctX7v8QE5AwBG9QR",
  "key9": "nxFMRSVZHeQdf5JUXkEwBVt3a33Zt94TECc3k9j7W2UK6GWJKjedYGgi5BtPoMRjyXDsHknVKFzCkn4P3mtkQin",
  "key10": "4NvNKroZmvoZpWTdbBdYokLWA1NkGkPxomMfQ1QJvHoWuC1ff8DX1k19ZpK8ysim1u1G9LYaUdsNrXttw6vjQgCG",
  "key11": "4amP7LTkXxGbrNM3WoMEkGt4XA1xmzweZfQG8GuPWpsgY5gtb12RheqD7omQaEWNZNVLJMrz9B7rhCpdiFEu9EdM",
  "key12": "mYWe7h5VeFC2czkUp1KjC9Le54q87jRByj2CoKzMMPyTWus9XEkpWqsCZFVsjBFVWD7uEK5r9nBV8kU6GyKD3fA",
  "key13": "3e7QnEwsvzjMRF7eoVAGRsCVmiVfG3XfZRWkstvYagVrH7tiicGvoBcat5xJJ4qVHK2bVppsM1GA4YxLqEmshQ24",
  "key14": "dkkZWqb9RKSdAdQPsMey96Dv7TzbmRWfZ8uJKerwTw6Y351BnuU6RQGiqUqNuMvdAVJ7mvHuRa8pviiqwMNsyeP",
  "key15": "2BcL8v4hzc8h5Xfx4am9sfg2gEq3iiEbHPreWnorTnoEYqqH5VLAN2BN9pbsqVtabtKuP3YsW46Do998ZjUD8E6r",
  "key16": "4j6Ea2tTm7KaXibUUmNgyazVDWnFpigJq72PcdYPwWiAiKTnWHqag4rEZ342rZ8nuVg8YYXGoJjjPZbuaeKo21qD",
  "key17": "A7ZMz6dQRaB8U8hvFrJta7eRs5EESL13FeAaWccR7eWMLN8B5JWRayR8oEABNv8UckCnCd1MwbWGgZCaqMydSCy",
  "key18": "5PTmBQYyrEmqETH9mZnJTVnvjHKfngr79U2B9WvCDpfh6JWbfKe2mWmc5Z5rS5vdZHQwCUvQqjhxQfQXkUqBPPX",
  "key19": "5vPNXXgseYSudXjRkJLuDjfoie9B9EKLuwehN8B1amUjyowe2xPKmncHwYt6osh5GVn5w9czc7ZdnF8S1S1cArTP",
  "key20": "211gdp5Awn6CZxzhYsDFCNoiLAAYatSJSgHSQgBRMQ5SSYhptEDYb62b49YphZ4XVhjgNDnLFwMHC55SduRGZc46",
  "key21": "3ekZFACpCo8Zn56u84wNtQfzSCGBxQFuyEUPoabzb5TgS8ozYFTZxgZZxBG3627cqy4brzBzKpbXPMvf4pQpAkVS",
  "key22": "5ufStP5euAHCjBS4TmUSq8T9xUUdYGAhBRdQtyqCbR3gKdRNuV6875CdxMbyRgRoH6b7SRF5vVTtRYtQzXY9kfC",
  "key23": "3xJPXyTd6veuw9NrJL9kMrNUism1X6Puu94dUibPNfGuC8XgjqcVBbwNsK915saUSL9k6847aynVPj9qfPjQScJy",
  "key24": "5UpqfvXqbgRRprsRpkvMUAYSVHNCgdp25ysvEnAWhxtKXejiLrnheF9qk8h1rUUeKFe4rN8BLQHbZLz8sK3XC3Kh",
  "key25": "2VtBNxWZ12eTQVv3cFXKtxTMYWCqpYQyc283hdpncNJahtVRf9L3BegUc9oK8xrhqmskNuLXpKSbCkERcizCN3Wp",
  "key26": "5tWJCp5ondwam6TWevj2D6SiPkmNsMjEBXEbZzpWjmL5dYxG8DdwHKoqkt4qHr8ATDezVPLG3hPTvPSn5E55wdz5",
  "key27": "4xMLb1zDAWAjfkjvTLk4rEuCs69TGqprwjyG2T8KnAqHxhRy4JofKnP2BjfGThZW3dqiawDLuiyvnoYo6ikUNNXH",
  "key28": "3dNQZTxzDdUSnSfirBNqQrtUw11aUs2yG5zB3LnTSionEHh1ExKFD6xCTDg9HwA7MHG6jtadCXQSw53LuDgdVyzm",
  "key29": "2iUFbQgVa6UnReQ7z8Ce8JpfWeLqo6s5vwzmS5JQabCeke8A5VjHNCDr9515nU6aQXwtxeweAdqQa7TWdwzK8Yy7"
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
