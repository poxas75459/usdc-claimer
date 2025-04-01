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
    "5bZW2Vq8SuuSKXgcbpBBMBxn8NgEXdxqkf8mTQyP86SMVfuWsieEZtLYZTpRXrXBW6o8RCGKsX5xSy4wq4XQ8L54"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ish9Tkr1npJBtcEhCA5Vkx7eY2tt1Lw2ZV7MDLN9iHEc3fXApf4JPNrNFjv4C7W9cZgDJXEoZ2vx4j2P1W9pGg7",
  "key1": "2mtMnThq9kwATj34ZDGqnX1tkW8DDrR6H4qPYmVzwRZFbEBLuWRvWnRFcSffbC9eXtpPuLDgLnoDBfGZDYjpEWTo",
  "key2": "3wCj5KcX8uk8Loh3yQJ9MqapQJSVTQmFsnc2cCdpi1awTHw1xDDuvu8JvaErwCUd485qEe7jjyJFbewdvWVvVrdD",
  "key3": "3VzAygZHsWL9PMWnNxfQUwPqNuG4ys9PsBVLfub3YYpt7o5bb5WUVwCBaiWkCeNmjPXQ6uhfeX1HSVc7ytkzF997",
  "key4": "45QaCAKjmXjt4DmTfKrfityH9AF7c8PRkepKtdN7iBzMJZoUFM3tT27jNLuayHJvPqjJUXjiZQ1YiKejAqEs7PtG",
  "key5": "5g2CNayPfJ4imsCWUJXfDiovFyWvtXU4DCx64xWctRZDnNxRH6XWKER3VeAzq85L6eJKqiaR3aRFL9B7Xjo9tevz",
  "key6": "34Y2ZhiKjGxNcWz5UVX56Ds9rbZ2EqbNWM4Ur3qoehVhQQqftBg3AsGPidBDUbywviEt4fungjv4u9hjj9Ma8jjm",
  "key7": "2P1L5GQuqeGfMdhcyHdqENTXXwuN8tkEfx9rCQS36eh5x5CPGvaXqjXdHznhGoi2Zoo2NcXCC8e5rZGEQmnYPysY",
  "key8": "49AaE2FWkQLqxgV6xho8mhZh7F3oEf1JoFR17388vWWqastenYPYvSR3mouHsuUVBMsKBRYnNYz313HrizRWwSc4",
  "key9": "2BGDAWaQUDsbZMETsBp1ehL2RtKt16y3pYYJcT6462aPCYeNvtPGn6TKx5rzHV8CJWbGCH4V9vYcniGjP9sFMdBZ",
  "key10": "2ix6Sr5jvsCQfzwNertVuo3aHTa4ojJQ8HrNJFX1yS3s7cnk4qmTTrmqCwthXAPtYFHqT583XPE5tKBVYcQvQD2Q",
  "key11": "5xGwvp2SjYXBZsYrLggfRyvdUUkiG7bNRJeD8edPFMAdDZtoUbaZdvt8qHF8imiRKRQ3p4aW8HQivCYYeUshLhYV",
  "key12": "52Drbi2uPw4kNk1SvsXARrwfCNuNtZfZ7QRG28rX3Q9DVpH2n9XzRLB3vyeQm1pKfYk9V1rGf13geU6iCSK4dvGL",
  "key13": "2hfeXaGfWFh3eRkY88i12XJBG6aNF4BRxg5ckaggPu1n16bt1CbFyoekQJg7E3UsAfrVX5GUPKRNofVikfdyd7Cf",
  "key14": "3xsC98MMFG6627gmfq74NCWpUXFqBgR8LJzsphh4GRJCYzEaWuP6FpNkfKSEePzF8YUd2ohGuD4JwRA755336kg3",
  "key15": "4yXbJqvJGzAYD6Vx5vw89ayPEYjhdFnWqeQgT2oR9C8sNVwxetepXQG62wzwy2hWmT2DusKC9AUe3VQ3AHdJm5SP",
  "key16": "4raFqyM7uH6SEDnGBezspN5MQE3FEE1XuWp1D68pRGroCenuHnf2jVYDEZE96amKxSMiaPqbHS3atJ3aewxwBtBC",
  "key17": "3X1s6ZwNBUvYjzyWsSjuigsRDvGFJfX7qieakkimSexW4aeRqd2uA4kgPRWMYK7YL3Le6ekoaPNmxDVdZnj721Fo",
  "key18": "3DjdwHBwVLaKPxjbVUSv57xQaeK9p9WruMXeV5TD6r7Sn7cbvi7cpbC3bhNqKkwvTTPNhXTD59E4YSGQrRZJSc57",
  "key19": "3Lonb29e9ajRZzzSx3L4o7TEJ2MoW8YKXoEYR1HDDsBWxGqUV7xG3fryfeabncW1GR622PRcEPJtsraovMgMs1u1",
  "key20": "3Q7jzucRUey5Us2rjHmEU7KY8yugkuMo4kSGyWgnYDW4KMShJrUzVVXcaKP6wmmwendWoV5Tk4gdxGqrqRTeViLs",
  "key21": "26ZQwUCNEv8eiC3XJzqAmHvfCfX8Mnb799EQQGiVByc5q986mXKhVcJZJo1hFMKXjVMQp2wUEYWHLtfwygaffhyX",
  "key22": "y9Yeb9NmWfWSwNfU2cdg4fH7Mcvur3y5y8CntHECUQ7cpozeNnBtVkYyLayEr2A4swXqkSX9jhGie4fRWMknTb8",
  "key23": "59bQxQ3mWDU4LHi9Rae6S2pwzwE25LjfYP3MuF8FSRcxSxbt8nbp1M49BPgjivdUpyn7HjiN7c6WHhi4GTeoUi7r",
  "key24": "4a5Q3c2CdvmiQ3hrk7NAAF9XDTshrwR7UwNXj79ooboY731M9MVqmkAKrjD78na6TTQFrngZVQM8LMHs3Nto18Mz",
  "key25": "2VVFJMXR7SnpcETpAdQVHV356Kw5vECHaJNbbzSQVL8Pi1YjKgNabJ4fNVapomdZTyKoE8sX5e7ZpQdCJL24tRJG",
  "key26": "3BNhfni9S7q4gdfXTQAcUPW4ZW8rfwFKkeGfvf824fKfiPjRgXMghd9EdgnFy4sFwh2mdzAz3A78moYbU7XKGgp7",
  "key27": "274UgWfwB4Fu8ZzRNzDv59WJTZDUSq3dPP6obCTRydDSQduQnnnrL3AYANzHTfudaZwBGV5aDF431aXPZMZL3wvZ",
  "key28": "2NJbUh8d3eSx5PFMTmQYvQPHUZ2k24YLTH46USNzBMitBQsLkK9Dd3peVBVYandf5pbLYcKqVrbWUyfuetZpPmsW",
  "key29": "uBVTK5vDXycBSEtpJoghJa3m2L3ufgCnMgvj8YmPbizW9SEz3SaN1yFrXtVz6MwDmcogWEHsBjbeRokvXQ8dcY9"
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
