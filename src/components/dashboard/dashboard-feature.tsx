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
    "34Hp8i28E5VfuPkKeRw1xm4R1uipe3jGy7sRXcfZGuvkkYovCU5EmbLK6TXxmpZj6roEBmGwq88YEYsWgFKcZhTC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4gNNyafkL1DJFF63bM43FTPFVXckseqrAnBHMY3bZWLhweCs6ddo859unBBws2o9rGxrc7PUYS1U365vBtbqTTCR",
  "key1": "4RruXpVcWC4oFUXwZha9Ppaet2P7R1pckbvvjoV5S6kXYWcpJGe7fsDQxkaLFLSGWFJbrAwoyUroZ9zKGwZbNQ92",
  "key2": "4aTprrPuzh7rJRrFjLSfq38paJa7kBpshV7Ln3isw9oBF6ezKEhd2aBngsup63tw3erLRgoE9cx2n1879LgqjaH1",
  "key3": "4hj9kMAzMbPu1BtnpUYXEgbkPQzddm6fc2XMAUo7cU3dSLjyFSNyVr9jb1iENBcYB2GudMAJGo1JSLLGv7176aqz",
  "key4": "Y7KZC813RPsyFWk6fVMaGBe62Xa1173xgux4cJjuHhtH9HEz6wYd3tDXa5KEGsziKkGG9WqhxG2TVfvawEpMxpC",
  "key5": "3Nehpq2UFXhipETUuU6Xxv9FjChmLMEphPqoWoN5UWpNJTYrhAE8izCQKyMDAb2Gu1w84MBmwKUYXF7maF1LpnZZ",
  "key6": "4RdfUE5yPY58BQRnR3MQ6WVzu8252C2NJnjVzXnnjiYoED9DCVLjGy3RW3zr3DhF6M3fLfZYySXCcgRJW2PB6uvC",
  "key7": "2gARUBEttLwCUWkvBgHW4FRUB49bZugqhLq4nZM3wDmbM2fhHtwnjhjjTQrw57e2ymfNbqZQz3y6CTcq7v1QZyQe",
  "key8": "36qhmSgawBZ377BbwuoETp25hz53x9j5WMZbnjoMXj4RBu8dxExE8oi8w5d8cVSvK1ngpPRnvGMEcUbANaLqgCGX",
  "key9": "4ZdxM6hRiCF2dsYmwPhgAARnrqvTVZZHMmv86214sUEzGSLwaVPgVDaVkpQ1G8Ct3npUYKkkDRrY7HM5gpQhYy87",
  "key10": "xLh9RZ4198EXANYKZXKj5btMmwC65eUbvhtfushcwwGaESENttkqvRredM7zKdbNQWVJq1iUzoDMESUeWxSVKa1",
  "key11": "3VHHvb6d5RkPXkNpMyB2v96QcoXY7PXJ6sRNHoYvWMYcgJ4vJbbNVBT8MzAqW5X7X4CqpzdGS6NCj1JmjJSTQYni",
  "key12": "2Hd9KTST4PX9hkATcy3LWg5v2wjQvTdKr435XLpgR1f3MBn5GrhDZXUNw8sf1dwUFcXvickv1EWvZZ7V9GV6sP3h",
  "key13": "GvwF2ZGmkgRkW6uU3ucGSZsfJSndUteuXPMPF3BvJAAUvPxDjhVCZFzLGQ13dpjtEYQfkoawRS8BrRPdqNfpjVV",
  "key14": "21CgBHMLF6krRmjLG5MAhuV6DuEd5PGos3xcyqbeAY9PhC9aBXLp9jcfYXRtCxvKx5YSf21kNfzNyBeTyaCpQJpw",
  "key15": "5mp22nCmAHsP6TPTNWeiHxSFNmZ26a8w12XbNFfeXSRAbsXFRy7bXVY5RnpHg8atMAuuVEZqa85ziuX6T9FDhzs",
  "key16": "2btttdqhsknxRSByXRwpKU2movK2DjAfCuJ1BZP6gEfyxTDxsJxxiyhFpWXsiDNxmN6yGmYRD1uDzRk9RwZ52ZMq",
  "key17": "4mAG2X9Z1UKQWecpCJUmAu9dCmDdpnxqnhfKpnjqWZPScGCxgKfKCMW5sMfuzCwbY6qH7cPGYMeREaYRnWifCnzE",
  "key18": "4qKxtmkKjvWUW2eUr1d5zjUYQpEePvsKsJSP97Rso4QCDyAz3xxdiZMqFLCwSD5GpzsPj5RVgZFRk5wVBo9cNCHD",
  "key19": "3LAmjc8GNtFcgWGsuk18Fm2yXDWJdhSSfnjLWP4ae9eSnQTx1qD4vkQRdUXKVjC7iqDdZCtQoXLgk8ZUA3KQF8mE",
  "key20": "4c2Bwpnuu1BaYKRa84PKdthb27GEdYbfkVhR1t8eshUB8RVzfUWM5ksgavuhuieGfJvPCzV4DB617nBnQkYBiG43",
  "key21": "41bNpB28cht8Ni8E597oXFtHmSGF5s37rDEsFUPjwxYE3Qw73TiT88TDn97dwNfbAvLqL7wZ1eqLeic2VSSGBvXF",
  "key22": "3ZCkCHL4zbbCk2aH7Aa1u5JeH4puazTLNJ8asDA31S4babyzyLDVbKtC8grhS46Z8kTQy4G133yw3ywd8XsyMGAZ",
  "key23": "2XjocztrJPsPikUjxqHHNGUxngm2gv7Q5abWSF6Kym5Lt1jC58eB67xrrcHKuP71T4CvTbPnp8RccDm88MGCRjCe",
  "key24": "5ao2MgJ7H2FfBkMhsbp3oo5axwuBSKB81K3W1E3BX8uCxEAWZgdtWXwSnQhkWxUxsygkiyS7he8aAmKq4D83bHxZ",
  "key25": "4wKJSUvEBHx1QEC45wyeMJeeK5wK6sTv8dDiZdXm52HCActtAern3HJAZo4i5F7NTVBFnpTXhZ3Xnr726jSyLmM1",
  "key26": "2LPUp2B6RcerWqrJupdTHUhTRaZ3nnDQP15Eqq7AQXkyE1Q9NTWAAdfvFPGJufoyX4mJYrZgiPWXMEuZKz22eSiJ",
  "key27": "4h7WdLh4Hq8y77ayZRgGnHNh7AJAhnKemdoZyH1MYjNDtoTGaMdC8ScAZRLAKkJQxoR6hnMJZcZHMELZb3veTsUf"
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
