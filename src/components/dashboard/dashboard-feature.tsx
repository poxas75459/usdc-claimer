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
    "4XCtu6XnQp4w84xMKfNNYQ6XesRAvRdnUzzb8xY3DQSdP7DZ2kcq89D5vASJREKZKqVWVSTPtxRQrWWwSX6sHNdW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2QRNxSMUsFUHsPeiQWmHh9yYyAt7JsvYb9U4r6axohBHpFKQPkCg4YHgUtF9P4Rm21Y3gWpV1BdSHF9pmiyBGvuG",
  "key1": "5WBZsemh82fjQJy3jzNFYLfytVeZKoko5f9YGdHK4fomXbpBxQYkS6bRHdTibtkjqbgzZxrUPVN4P2Qm2sDw1Tzx",
  "key2": "4jTRTE1ECtMfWHXNm41PjJAqYdZCDJRTD4zSGgHyhwMowidHSgoKq4LoMwoZPuBhgZNznXrnoRLTnLw42Hui8K1u",
  "key3": "3Qhh43AbzTXhoz5STDqwTKMcwqMfTsM3jrKQGV7Jp6M1sS87hMHeLEekwJ8QZn4UWnFomiuePMdJcMH1W2fHBgBS",
  "key4": "5jzntWWU5gzSTCAFeL4VfrsvbugBuiXToyYjXvB2mWdgeY3jUiiiPKYf9pAEHn5XEdHaAa9SShJD3U2jUxQqAtnK",
  "key5": "4ymnYq8U4LQZJg5ERkvXMofajZgxpUv45zXSA5kLhRfDZvtyaYoTh3on4C6DMh1Tfm3LRaWkUiqFew4LqB1dLQx1",
  "key6": "v82Ni52kN2xQGiR2Wsk9Sqrj9hWD7eJVF4v7Qh2jNJdTWmdcjBSSqxcBatX4DmQRZXL9oHbn97PKtb7H6ZWP5DK",
  "key7": "5nK9jiusV5bvXLFHHr6g17kf89VgbFAG3q85i1c6VjYUaXqKUL7m1v5T2Bb39VREj2VXfBMBaXb62tzXq8zXrsTH",
  "key8": "2eZVXnn7Ux77xaPYrSzw4vs1BBNnGPK65rqzJGDMqtYsJG5tmjbM9oQSPdKhqygHaFeLL7BF6Br1GLkQPMRNU621",
  "key9": "xrBEthfYAXeUBYpZ17EPRTwQY5GYrbfyzFdiWjbeENwaAF5irqAtHUdor1W1rWCxgDXy3vy6qpGEFGwFkUNFjwk",
  "key10": "4quqJXSLuTGGVeeTVGDTSff925uePQCqiPgdTL5r35ME1DdpbusAdcPjq6xzonFR4XSS37qDkLnfkYmUcpFx7boG",
  "key11": "4hiSuQJK11oMqTSCGdMP4JUXGGr6rG52pmYxQWsxxTGYJ3XhtKjGRvoV9pPiGVWQKdKxMqmQKMqaiEidiU8BDLuR",
  "key12": "2sVqFgwRS6UZCNfpFkkL57Umqkt1ZZrDEgAW5sR1Yv2rdCFJGXKwRkhsd8gQcTEvSg3kFsTqnBaTJFJZfvThuFpr",
  "key13": "5YLmRYuq85PTSXH88fBvpGqcwWYW9mjEy859Bz9gEJhKAmoA6hrU394LsLZddiho97gx5wRfpV1VR3MQe5cE5QQR",
  "key14": "4oW4C46biy4J6Sq8PM73WrtJWf1ebGNEyjoXUWW9KsFNxT9vR1jm1qNYKUeNgtrfcVXfg25VB2H7xmNJ4moQzvwQ",
  "key15": "4Mjnw4A6gU3zs6sZGaUC7B9huCZTzeLWRXQc2arL88zsHQ7Mn87SKDJbUjieZEz2Jkw89Ur6r6msrXJW8Bk4V6pw",
  "key16": "5KaAzWLSAdyPiMwMawWuoCJm4rhYaxjzRz5PCBUEhywp2jzGmraWGN5Hx51hQ3rtArKCRDJXfan2VVwj3CZB4JGK",
  "key17": "4zDLE9irfH5wcJA6kinAWnZt146sUHSuzQSsGcwHAa8RAqEGsyYKDY2bbLK8T3qehcotXTvBwJbrDwmz12uxV7ER",
  "key18": "3X8XB28jhCYb159Wxiwz5bQ66hjK4151ifD9tw57MjxDbnTTsWDJ57ErmAptP6hykBrCuMDkRH88TVdNaB6Wd6qv",
  "key19": "5e22XkxVk113DK9CaqEpVjfRbs5djf9fK6JFALJd8C4MMrn63iJgzNEAySdtyiYJpMyToFEdCKQ3iehvHqbFFEPQ",
  "key20": "4Q3e87d1D8KTBrVvTTV7iEyByJGEBDN1ALLRHRKRHissUtQBbh8XQ3p5CEN9jERzPzW3KbjGKegtBGVH85vppUFM",
  "key21": "5nsHWCEguJp4zvkASWcJpAN6SqkVhgzm45SGoY5E17XtTqJsFjSAPWroRbKTgwX1GEuYasKqiSaf6aoPfnUrtP4F",
  "key22": "5FEppdwinwZ8u4b5oEcfTHFhchRjMD7nvTJuVeGVtoyxLbhgj9zUy4w7nrhopsksv3UMp35iEjV19emTbcD5hNeA",
  "key23": "3SpFBDFkRrP3ZQhCPz9E42qEcoSZVs4rMMWSYmsDwc1YXUtnfPnHwpJPGyygLffnNJbrVCe5EDGQxtWziFKSt4Ta",
  "key24": "98GF6iXjonfm1n71KdE4CYKVTqWDVbpYcepPS8g1bv8UVPFyTrgWqnGXSWcwbaC7VFAsGLULSwAnUVa3dkSDbTM",
  "key25": "36VkV5gyriy4nBBK1B9EwvW9cRoZaEZw3mwk2fdVwGH79vcpQNVskp1hfnxQ4mwKEmyiqSnkv3BbaxHqeRvi9S42",
  "key26": "2xduzuFcKVv9HBvmHXoDzFrH5RqgpxLfzRZA6BcGnuA6vjDsTTWjxqxAmMXPwN7jnBPLTShNy8VpfPZixUw3ZxL2",
  "key27": "583TZscNdGfBrfpUiFMhnzdjgk6NEowWcvagkE3fHj2u2dV4SkS3aFxca3o8yY7gDwp7PtCgnLLRdWf4HLUHmVH8",
  "key28": "4Bs52nCgnYNYefftAg5fFxcFkZXCXY1zrFf64ChvjSrjzL3Yj7TpNxSShe3GTwHdN5XucamHk3ydzxw5BMa7NbQS"
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
