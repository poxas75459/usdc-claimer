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
    "5etZ5g1QpLgiAQpSeXwajsQjvpm1eAARJeDK9Du9kcf9ejmj4iA3QvXQXVmqw7LcLZizviveHg61i6CieJmAEQX2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "SFMjKk7vnyy6XHmUKeaQe7TxR758Ky3681XNWDVkDKhuZZJusm5MNxLxRSUffzwcFVdLRBGeR2tNTPAYfPAFq85",
  "key1": "5DmTqCqJjH8dZ5LVx51UkfC11GKhp22UMNP3Rs1Y43nfJYgEc1A3nssF8MAT7sQK6fgYBfKUuMZoJoV1AoqzZs9C",
  "key2": "3bzU7iL4ctgcaVK2YUZeWkA5ePoaEePTY7P98hGLoSt23uJLtmNoHEjQ7Hdf98mKbNhc7kx7c7p1BFFeeW6K8kJi",
  "key3": "2wLLMeAGu1UE48hiZdx3aG1hsk8ZwERUDmb8CzNwGaM3uwXZ5ktfwyVep8n37C4XPcp1rEKjMHjFmzWCQT7Xcs38",
  "key4": "jDZfQsD7nahs74P3nKfYXdRV4WGwQhJqdGKBoDrj3rN7bisH3B88zYauN31gxu9YWJQ1KaugeLNQgj4x1mmKFPX",
  "key5": "3H2HX4TndhcLUB9Tc8ExbQVxjwnELxaZdBXbbVHnhdvtMA9GAXeCUw92eknvSzwovBgEk4cTGx6mxkcrRGf2MYs5",
  "key6": "3oWxL8MgmbErWGWtKy5BZnuxBurerv2CaTMHTQwBPuAd1VsTBSAxHqkZ3DPWScDY8JrCKLekqtuAqxHtU8WqnSXz",
  "key7": "25KtTjo3JsMFX2XhkM2TgXypMnmVRs35AvRQ3a8NLYfupT4pmjJc9VJ2jbsfcTbGaB6A6o9Uyve8H4uEJQ7T9bEe",
  "key8": "4gUWcs4RvUptePoo2vfJzkDiwmMH9SLFykwMsRMFn77ouHgpigk7h9zJ4UMZXRJtHQB22YuhTCgnt6uG53osfiTK",
  "key9": "yfQXwuHKB8GFMc7cux6YM59CjWKBBQRtMe6X5JKy3i3mM2TQihGVjMe7hF8ivwRuRu9b59ZiwHUQNbhZE3JyTHW",
  "key10": "Cdaipt47MCaV4QuE7WfiKVuictAT6xhhzP7Nn2RtXv8TCHzeGFGyfdcfjcvAp8jEVLZT8AHYXNm7ZQGsq6kvBPa",
  "key11": "4eGtC5qvSCZ7sC4DayNMNpQtHswZEnSsdV9AA7PTsEnj5ExuzM9SNpuL96WrgkxoKFYSCgdLXiLoNFdskvaAFrwL",
  "key12": "591Q7TcUHSi98LjpJh9KYjdVVtWrxQs6ar9D5i87tbDYuKziPvQMeLx9jtXCX38USeCgMc5R6DQhqRqK1f8oNYbE",
  "key13": "5niRvQSHicB4VbKwcv8Q3hNPXXLk2TMxU6S2ey2eaeYs1RNejU3PTyXKk7SjtNUADNYrtvHkb4fU9pokysDoeLnV",
  "key14": "49ZRP9LrLGyuuFVNxEmk4AWyNSeKF85U4r5x9ZRovs9vYyTmb2YPA1tuk2iLE9visHkxB84hYcWuy9L735ewNncb",
  "key15": "3TH75ydt7h1BPiBpBNsnAc9Z66HjVBfe9YTccB9KkuiLuS4yMDD8e8empKwVksWXQit451pYHWL2M7qtk8muFRB2",
  "key16": "4NWzLzjNuAb3FXzzVD8rxg1wM5r1MXyQapUKeCL2BLg7qLX7eBpT3kkjkH3zbUovqb5dxfbhUM2rw7Jjeq4zp3VN",
  "key17": "3G1xUpjyWgo7PekB4xb1FHv1nzqzbBf9HAT2TRMWdbaVZqVrwD61cbEfBq8G91gKNahfqqCMzmDzbz86L1x8TXXf",
  "key18": "3jBdTRi85tYd5j4v8s5NZb8MB6VEjjHtEENkUrDpy57KU2mKpmyGEeb2bWAq2p9xVUXKceV8YsCHLZF7TaRfdFj",
  "key19": "4HFTXV8eQCZK7Vk5uPi5KgQQCwoYVYVQwBRMCrWFkD5dNx5EnJNcJzz5bVsmLUypP21tLYU8Zt1u2mXyvopyjTxG",
  "key20": "54NHLBb7ANjtjjZ7TFEkGdDfR7k63xtUyMPeYk5Lzcy2TPrYFEh8kZorssYFMeYQkeupe1WWA3EUqqMYDPNEop7V",
  "key21": "E4x7vwmtADSp3n8oC6zkD9xid2Bmqw9mw9kfsDAkYk1MQXyXdCeUwzMWZNjX9dJPA2XTM3tpQkiPN5KPgbYreWM",
  "key22": "BxfFhubGz7VjyGuonQKSpNXTboYaeT2aKas7gTB6VKmdWdUq9WDJvGQ4ZNhacWx9iU1Jqg8cJQyKV6BKHG5JxBE",
  "key23": "3cT5hfutiC34uxWrM2eMQYAa38JgFXJ9jZHKCasvSmePLvNW1Vpecs6UR5XYtTrsE4CPprbBfkn2ikCPhFfid1Xo",
  "key24": "2LyQmac5oiBrxRi3vv2hc3jz7DVMV6SeNfiexgzr3qk34xtnsEqfkQvW5n7LQZsjDQjRtmaGueW13BQd8qZ7w8XS"
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
