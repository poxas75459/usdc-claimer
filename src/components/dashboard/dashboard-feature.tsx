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
    "59ZcAgEw52yX7YM4CdxxS4LZE4ESNZbwf4xDQU8QYLiyBsuUnJPoE79cFzpjjbKTdPP3NXib9cbRZ6yE4m7DEmtW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "6y3XmMS2y1r6mhTgMgyjg12cwApnnU8FERnPsApnPZbQvNk3AndLYfXRhugkXRTje1WmZig1BW45bDxX84astGL",
  "key1": "4S5FnL2Y4PVsguvknhnbBGv4cJuBKXbUCZU3QbqYusgqcVAfSW3LixKCmgYMT6doLtpFXvS2dLMVAe2jGvU8Yiqi",
  "key2": "4mYNyHDz1LuW7RhyQhdUEQTK4eC6DdLee7a3DxzVtPUzd9KP9JW46TbRrdri6mno8oRgWVcpTDqYMZGsDHkSazac",
  "key3": "5gUg5Wuk8t9B1sFogSuwRHV3ZggUVyD7BLDSeEZVQFVVLrGhNDmNwp9AMJBAaKSYvU2xmXVpM5c1S7zngeUjPohK",
  "key4": "3iZNqLdXxKeHP7gE6SJnqPZoj7iUBJe6anCAk5X8eEbKvF26bdtVSKeEDb6ZWYoz75k8KgZRKwJhmd1mnJrkWNTA",
  "key5": "2u9KeY4y6MGYFLZSqxLetN2cdKKYLqY9B8Jk3sZartr1Ehg2Gfy9R41yq6cfarA6GfV3oFrhAAv6ejbYQiKG2HZe",
  "key6": "p3bLKcqP489cnKHgoVdSSxVJmTYP3MLJGfiKYeKH5Y5zwUreurBpQBH7j3khNooonLziyZLR9Q5qo98tTogJksh",
  "key7": "2XY78we11d3iehc9Fx87tbws4NEZXAPm7uLvoqEiU3fehqSruk21DQNEQyCFxDsNBnz8FKWQReb3Cd7roYPfGndN",
  "key8": "SehymCs9v19RpGDDcdXTNoS1sH69HGhxsrUGCqVptrbveTkL8uJ1FTCC7XP1ScrSJ6Da5FvVyRisTHZSpW6NhsR",
  "key9": "3g5Px4MHE211LuUby5TMnpRQuAxiKEH4CevbvmfJ3YAGBFUhUFJF7DzMevq6EbBGtahW6gzEhAua1dz9KEexB86z",
  "key10": "3RUiM7xqvmYSDrVAfTirSdVQE2bfaTviKhpw9xjCkvu32zBZnn3sNZ3VC7cWQNtPVNEauMoqx66gwQnLN8RGEqHT",
  "key11": "zfe9yEXAHbSX6rWLx1NqPCXRjonzXxuUCAA6pQfQ4W4v2vYXes1nk6AHvBE92Prv1Wx7wfp7UdajveXn2xm7evu",
  "key12": "34x3A1XkEAEnJHS7AApqWEQaStqJAUkxuTwf2aduryoo6rZdHkLqqvxhiYp8LraV6UAautDTwCkNkAozJaZjpa2P",
  "key13": "2gU63uWK9NaQS6yuQf88PN5BfqAiGd2BUV81ogtAadTrFXrjcGouuq7puf7a33AZZPCor7E33YB3vmm98r5rH5uz",
  "key14": "5c3tJLaxSia8p3psXZu8Y5HZLiQjAhBbiprKdxLyYG2VqRt8sEsGeAih3WkAnmp9p5t8p6Rhft3t7CDvcobnyRcY",
  "key15": "3LBdXUFetND8jyKvviQt7ECRAJTTUDmuhfSKxNLyLqNuxM3oXCTe8G8aAygPjhdjEMB36SbRRHaLdx1sTa2wX936",
  "key16": "4rw65DeBJkLAerXMRpj79HRDo2mchV7VnamYJbtXfPN4iBSfg6hXvEqJJZM7zbAXYiobZZwteUi9VDQCQDTE1PhC",
  "key17": "2sfLQnmkxpdArVBqrnV3p1Agid9wUWj5GM1UKaY7u2VGnBhEebSqijvqpKQoxC15MNsBpXvLRzrsQP9RaeD11PYc",
  "key18": "67PBnPcMaagZ3UWWQ2ggy2tuQYyM1ytgJqLuMtN3YUJ9zVLmo9Z5iRPNrgxbncd5JLGY1LEAvz5ThA8Qpt4PHDYT",
  "key19": "3zKzDLDL2rpc8N6s6oWgp3FTcBmWwwamnFymYPoVq4uDCeRMpc37FbuNYTNpjjDsMmugraGkBomFvEKP2UZXno9Z",
  "key20": "fE33aYzsgDSfX1q4tZvB8DvhvbxHyu6vkgrnwAffGntdDD2F5w7tm7pNBiUCEGk6MEzZf8re6EWHGfFSZMtQ17X",
  "key21": "2bw5fLzPTfXDpFPRHA9nK4ehxqB7XCxwsPY5ycXnwn4nefT5XW1RUEPSs74VAtcPYVmiLaK8QzmjG7zBfQuSQKsn",
  "key22": "25QCz2nTwzHAYbK9ARLwurSakSK1GitE2WQVDopAxaPR6iKDE7PJiYfHXa4dagukhzawTW2VyimCDgCj6PvPSxMC",
  "key23": "5rkyG2d4gP61EZAxatjK5z7ZnZGuyZpPBUw23Tgiqq8kGFAQxQrqa4So7mLQuZa8beJzP8wX48YVLT62g1JYwQqr",
  "key24": "3AzXpDbBu2nck5ygkifVxJc1wa4CuxXE7xKjgt1BAppmA81T8TDZp8TZmQkRCQy9ZPwuKry7FZjot9Rp2A3etoWs"
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
