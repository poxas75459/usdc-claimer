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
    "67dB5pvs3MvVBNwp6qDfrLFkXv6AZ5ccLyzVbcAo7PaLkivFZmhr3Defno3h3TFQRS2SSJjopsmjHT2H6mgEyhgu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Qe2HpK6rS32DPkGFos1Muiqyqf7rXbx3AbnxeeUZ1MjDoRm6NzQ6yMeNfXmCaDbFyxWbmubEJeemkFq92KBhUXE",
  "key1": "bZ9Nob5bPgQRqDcNqSdx7U4tVgv8eV8PuuULhVUykPhWuA3Wmnv98jXT8R7ngoENnZGiMfiVYS9Qu6yVEMo9Tvr",
  "key2": "65HDyeTY1ascmXmC8t7mpGnHDtZVNeB9XcacZGeSoo6P6oThwtjRPJ61WXiVmtQNQJ98ZKK5LYtX3Mnd4we7DWqd",
  "key3": "7E65tKAUJKMtpTtCwdFzbSvKE4SjUZgpgSb86bxmGUoXse4xe2VEWBuJpw6MoSrAtXR2udmvyFa66Yaxx4wNHSv",
  "key4": "35YLsvo796ZsTfvgByB36WDyarZKyqBHWfXPBvSJTjCnYAgcB1jY5hZkNTHMXj7VjmHKAkjq77HMGme2sFtUsB9A",
  "key5": "5uCatdpnokJYeTcqd1F5xpu78EzRgSDxLKQyT9HsGPzYnLj1uwD24F6TGqQAjqz4o59fKRqS2hV2mJFsdrni9BWf",
  "key6": "4kH4Lvg3DTw3CmmUGJQXENDTHU8zPEmiuA8xQresPs59pfHdwNL2ASEzfmuN9aKnAW4wUAxii5e5DNXgv5Dqsbo4",
  "key7": "5apiSExZgvc2U9ks5xmWifVhi2fYaL1SEMVvBXTUBmS5dczGADggVdynhLKqmRcQmWNyFHe8sfT9AmhENa4qaA5Y",
  "key8": "ZUVfrBuPv5MJTmYH47jj9pZMUFHeRvJoJWJygnypeaswMp5hN46jTZ2J1Xm4oscFqRVsEkBrESbcPVjCBXWPn4y",
  "key9": "D4weT5P1UbjLJcS6s1SGvV5KTgUH56czELvBpoBX3WACPWGdrbHzuZ7xVHCBJLCNHR658HRVSCFMniza1bmn19M",
  "key10": "XPYBJBczXmJSSHXsyUZ666LpwKBnPR3YRyD9hshJkMjTbY1DjqG37NFPVAVsfrnd6AaxejaM2zXwqV5cmz3SLUg",
  "key11": "3VVSLqWnARgYSSvePbW4zhjrLyfGtH26mk5uzWjWd6puXEWxrfP2BwRNZMhUJcxeZFRSVnGDftZzar4rpmr6L2gr",
  "key12": "614XG2GvPoG9R4aDAGXB7kWkp7CcWjqcUiEc2KKXWKSor1nBEi7voqES1oKPhmycKNYpAW16s2qjuQN85GsDCmN3",
  "key13": "533CMd3BU9CY6cYXTNKMFWZ7FDTUZ3r65Za84JVb6Wqy4i2mFbkXGyCp7iwG6ycGKgfcbsZn2AKd8XwPjKC9dH9W",
  "key14": "5k6wQhviwhCNtfmq6rb9gcANV8Qpzp5ddk9GXoaE7wgCy8CYkWahWdY2qZqHmsX9mPTxnNDrBALHaXYMikExpeLB",
  "key15": "5JzM6VtcQ77hjMgG8mpJ8ucmzoADkozY8uVUDZzs9wvL5jMuersRDQbn2aZABpREWFsjfjgFoo5Z6m9xixbvXHU4",
  "key16": "2ixtXNNAWwGFNYzqyd3jC8u6jNn47xW1MXrchAmG89wzXUqGYmEL6PrBhHJEgtiK17QCQWDPf2Go3t8ByHXbDnGg",
  "key17": "98ecY6YVVwy9FvFWoLzoMuPR4PYceEywb5xGtF5xk9Kmk82dAx8woZe7i7mfQ12FSa7cSBwJpZRLZyJata2uYJ1",
  "key18": "3gJyzgJ83KuxVTs2nCEcnGiz6Euz9WtchaNRvgDAoRnVdVVpQfZb3gDtKVWgst9RZs278XfyP7gbU3YQU42VB4z4",
  "key19": "2gd37SpdfvzC7YcX91hygRhz5K3rEEL4NMWMiurqvb3Kjnr3CsxQsF25fYMBfcKwkRT6d3X2Ap5kAe9te2F8FNUa",
  "key20": "2fqpu4XwsiuHJQGecez18cGEQJTcKp36kXiRJV2BMbym8nopuUqj9tAoPJ6qyS5uQgEMw3B9hZFsZCQtAu4Nu4PS",
  "key21": "azdbxJ3or4nTrGEBnqdWUoLoNSHpjNxX6jSmnWuUUzzbWiXW5ZCoNg91dGs17HxELXoLQf21eVhPUQKWPCfjU1W",
  "key22": "jtC33qX4N1prdMdzxarKuSzyWqHn438i7LfMAsWiQBVVahLvudHsG46u4eyd61V7m6WHpNTGaJbsCw8R86jfpZv",
  "key23": "3nZKahiL8qiEBvCQr1KLsnUjtvAJGehsuJgEUUsczHA73hxbSFovpYfdF4P8k8omzgNkUB7KHX3BX4GGt7ZKhweT",
  "key24": "5SBp6sqzANiGnWWXxoLx9Eg8mFDrG6Ddkz8ZcLN2Dp8DQC11WWXW4iqhymtLiE6hHR9yhmVzS4aTdyUzwXgNYRgL",
  "key25": "4NfdMYPmXKBPUyfLt4Mzg5USdN5GatoJxgKZ7p78mX2LYPgXNPz2nGwb6VKpSR7xTQjwVzgykuSiqjdwRg2Ta7jB",
  "key26": "5eACXphTJFX5h4nU2EjpR6ZUetkmWsXJRAwGmrQ1hi9CStnSfB1Kz3HjZQXzDzz41RXm8C4ZSr6ZpjxzJTNWRvfZ",
  "key27": "2wTHi4aj3UQ7QUoQtrYzyx3LcUeNEjhDxLZ2xwYLUbNAbB8BKFgGt4Rt1vF5xKktwrcwsmsXrP5PqkhZfmDRbc1P",
  "key28": "2obomsDdkaPeMce7rPNxCLQ4pN3TiqqZNJ1oL1kTvG98QmZCJxcpkyBR8aQ1xebQJsyd9smj6FJVRnSF6GodBVNL"
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
