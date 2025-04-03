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
    "AJVDu422X4i4iwazCXuoNVgeV78HtpBY2FmiMRKSSixCXPpi5jwXoh2Qjf6xUFEmcigvbDU1ACB6kSV3YK3CoTF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3B65Df6d98PEHxz5U5yADtf9CCBLkKpKQe9TH7WR6KEtkueLRoVrGohsoRiiYvvmH3fC6T4YMpa4mGrkHx33y39A",
  "key1": "HvMHkSPvmyD415at4fSarfvdNiWMT8DA6LXXAsTAeqHhWV1izKHAvJeQWdCirgCGWzCkVMp6Bce1i7ns8aGVSHn",
  "key2": "ZXvq3grdKjTrs43Yd3XyS1EapxrR8sUgh68bJBscaZgnJdt3H6eo1ASP8MFkMZoqbnpaAZiwogXFjwanS2EH4Y3",
  "key3": "4gYwAMqQLw5VfMvHXuK6sBwTpLteRwgM85kGaEfnPegUYfoBRWhxEwvdqZdnF1SKJitn3zU5KxwWgGUCctvzx2cG",
  "key4": "4G12Uvf3TAYhTfDsfNGszX4xvw1NsX5DNpWWQSdkVV7chWMB8zvqVF2iBYe8vDvHZVRCihDZfwNSvpRQNCj2cz8m",
  "key5": "2JyRz2hCAxFzQ1CvS4qKdfbwsBr6CZvDYfFbpekQzNySuu9XUPyspUBY7zbJ9rAXKcaCA6Ut4iebiYorWy8Qjgcf",
  "key6": "4C1F3cLQXXCLd75K45moAaDrmTg9FdKxtXwE9SKEzxdujpnhc8DL3sgrbbHkXyEwFfzgFdbZD8vYCQTEXouBBaXU",
  "key7": "4YUHHXhfFjbsW8UJVZQQjKjqAV9RyoDUAiK7CCS28LqvqKf1nGP1Sa7nP8nFdavCtR6HawgDMyFTRdEhwvFuQGzx",
  "key8": "4RFTJeqvtmcbnMz2b4RVpjDu583FUiHkD5Y1NmtQH3SbM5hs8ZjPCnRm19WhpFLWDD3HwCxx2x4TRRXNbV8RJz8s",
  "key9": "233dxwLnsddF8BGojbMjQ9JZrx3zJ51gdGpgxKiT2SqdsGX4chW6ShafdWj5YhZiNjfpXsMA7hgBK77w3SWNDCJL",
  "key10": "nsAL6awxhV67FSSg9NeFRd2KWU9XvxrF3vwcMUncEoeiAQJkMv1643ukk65YKbh8ACUBwDaNBvYJSDTqEhoCe3D",
  "key11": "doNPDQ6jDdv4MKPvRNvx9nN3ipzMfwpVWu4ThsNsbxwNJv2jm8ZoYQ8HGdEKbkBUCKV8CCNywFrLGNM98K4C1ho",
  "key12": "4npkGXnr2jnoqdvecfeNPDht2RayTanimAEgzLx2bcdpiWxY9fYmRP5NEfWYdozzgxffRdEVZjPtyamTy9UtVHiQ",
  "key13": "3E8rVMtsJUJEBe1XHtjyhcBvStZkuEdTt6a6sXwhTpYPuwYDAUWsHwn3qZM7n9WAoPcn7diyw2bXL1YQGXWVpmQr",
  "key14": "23ANeCTRL9K4xz5BsC63M6Lbetmop7CtLXfuhtNfQcqmmpFPkLHLsYiVFi2EmjFW1RLEUWaiq7X5rYVWgES91cYZ",
  "key15": "4q3zq7WdZawYKVh9qLAPFhTGb9Auovp18Hs2QNzw2vNBagWSAcZ7tUUwjsimoifa5m3Ly5zTML97A9aN1wrrfxhR",
  "key16": "5Xoz8PKuEQ7hcLKLsmBTWbpf7Ac2rwTdsDkWbWtgwEwTzeMT1szAzFnvgFR7VWc919NDmDLdJosc5Q26K19ST1TB",
  "key17": "4i8oSoAw9tQSMv4fHzZ9eWXxqWm7QK7yMvkHSKBTQAWCoQT6NuYwjfQRZNM9nyPvTkRjMJBytPRTLxcwwhXf3xKG",
  "key18": "5MKpkYfyfPoQwxLK5fRLU3rrvzXLtnpL42oVP9j7tnp4CD7Wg5oYABrWkvhLfpuKfeUMSG4msS5BAQ4dwm9Sw2vT",
  "key19": "3Xn7qsjab49QrnTZcyZt5rpkWDVgPc2XDxkHs8sNvrAtZTzZvbsYsyyd1xuP1mqXEmA6BnzPLVXcePkH54ZbDbsN",
  "key20": "2fh5XbMNEPHV92v3AfCQsEu45eQ5XU8QwZpCrTYTkUN9ikAsktjewxn1ASqtT8TiZKCS3MYJCBY7pwoAoWVbENuc",
  "key21": "3poK7vwGRua8BKGbiqvwU8hj8tvgmJ1g41MGPmXRsrS2V99yfMH26ukeTHCHhEqAXjaXxj7gB4MwjdfVu7ChpgMu",
  "key22": "V3iHcJftVvMKf46Ui8CPGxVi2SawgZjnZAFDh1MQoxiRPE8yv8QtjyNfEB36cjoroHmr8ycw5PjyKo8bzQvhFXG",
  "key23": "3MCiAkc4iV1NoDdSDho3DwXD7buanPwLQq2PPHYKKW71fCj2xhQZviVS9HLiqCyWrP7MTUHfdKHA62GByUudduUQ",
  "key24": "4JC8yb7TbH7oy1wwnbSbXMXmfU8xQZMTPfoocty8xZAQmgWBWB3FMAfDkNu32X36mz6MPRvfWhrboLPg3mJPMi8w",
  "key25": "2YAMRCsnPEWod7q2EtySNnpNJWprMAbMP7GsjuxVK6ZpviUdtzsHTD5wowkvTDdb8Y6XpNQ4N1eLY2HtRQYJdduF",
  "key26": "2tyii3x6zU6KSQX4GSwdcJfw2ehzV991by1BXoMd2fDLRDrkbgoDw6f3Kx89trPzSP55bVzn9AwgcYGPDFuQ6CLa",
  "key27": "62dJYhWZuJB57r9tLvj8F8q5RGog6wHs6YP9Gtpw9rCEoL6PeXPRWyeU4RtHNQYQH23tuL5aqX7VP9H8kWBC2kvm"
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
