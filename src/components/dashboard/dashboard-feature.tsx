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
    "K1gXYWqH5yj1eMduPZgzasqFusKV7YQ8Rm5CUWA5n92bSfFVZq3h9L5YsmmYiZmJyzLGKFuue2xKXB3CUzaT9Rs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "449yJL3DPtjV9TJ9deThZdZH1v3xhokwL2wwksXKysT953sCc4PceGAbi9dfDLni9rYamkTnCzdtZ59kVpCpqw8J",
  "key1": "4DWhkktaP8oBvCY2TDefYZMex1p1Z1QXfKd8vEWjyt2m3iHEHRha17kJ3dTuaWkU6yz4vNMqnR6pqZXKgPHijU85",
  "key2": "49zJEXBS58f9JtcpAM3eBeTnXNDzm4Kun4PSBbf9JjvvV8DCc2L1VJ4tUMayzcY7mCU4y9JRaQPbEU1q9ynwhQu2",
  "key3": "5MK4MmuAoPG7xv6Cz6TQzDvp3SWEP3REyeXLevivTcMWUBMLkGyvBoPBjj8HjfogmGEEtvC9n77F5RmLwUpVkZKz",
  "key4": "2ypra2NFBmUH4hPVHXsR2HBfii72fEWaNaQUNo4XYN8e74w1wNgM8XPy2JDfBeHhcfFYHzpuFTphCJQyVan4t3m4",
  "key5": "XQV6zpJMdKySZuRCBYkNqgQ5mtXQuDWJJamPVQdo25JMJUFjma5oZ5J1z6Yj553YE71J9dHPdLJfnZBfBmGvUzA",
  "key6": "4hMBs3YurjCt5T5tRLFkBj7faaHEsoXZxg5qL8xoVVAk3UfGnqJiNXdHiZ8gm9VkPBicRscc5e7DqC9SdwNU6aUV",
  "key7": "3BUVCcWdr2SkUtsSGA7akoVLeidFMSaasCjazDZUjZjbEdYGAmPbrt73STtNqEkv9Rgr6HMbMUqKGohstCeHUuag",
  "key8": "5vUXokKBLY8yQcWpnD7ttvsbb7jEUPBP6utmeoJXqVfefWL8EBVKXAWHYJ8Kop5ARfz3bngADd8zF4yJLD6wJ3ow",
  "key9": "5aurGhi3smrZkqeW2DcrvwrefdpS68zNydyx3V5qLMxseCa4NhRhZwg2MdxeLNRMwpY7XryUJbZ4PQSWPGrtd1CT",
  "key10": "4jJ4CDYFiAdppt557duv6qJMRBs3xNvXbNE1ffkUsjuzkzMQcp356JmNMqqN7tD696etWAju5AsPSe2XSfzA6N3W",
  "key11": "5FfrcAdriKouWfXff6sPAQx6dbXMmdMFNfxvYCEdNKEbauGHh2Cxy9r66QEGSLkUoHpo4eSwnSmmoqpGrMc2bbDC",
  "key12": "27Wg8X6oWodsr6kN9wfQwaNpq9Cka3B2GYHBTB4fEuG1paKYM4ki2FV4EhkAP1ehk4LpTXsgzAFDp7c7mxQUFTkZ",
  "key13": "65akxdkazCTMS3UU5isgBeprC64oYAaU1NoX6BZ2zJQySeSu8WKS1d6Mebm7CzCHoKLNTxK8ZWK5jeug5yLhvmL9",
  "key14": "64DQ6xykzPssRNunJ1aT3DoUzAKmkB1FamXaBdixCkLfmJ2P6hCqwkE89CSEvgbvzHKWpn3VJeEqGA5KHvhDV7mn",
  "key15": "5re5bWDJrAhpvTi65UDvkKAkVVKyrmtdxQgHhybKickhfM5ueE2qUo8ahFmzN4fquu5fUKk4KrR64cYveiehyK3j",
  "key16": "517RMNorgtUcs1Fzv247p7qhWhoEDiSDCBLSJRY57wgX3cU5oWnWvdnYtBosGhS42vzQ4qNMrK9X5TEE1eo4Aio7",
  "key17": "b93vgBMaVYiS43yFgsriGHwuwafCmRYExH4qy49PqJvwKtkzDihuxhYpsmQiswn6wxPZz5jW3xgnBQLPt4kri5i",
  "key18": "5UWvo1774ZdG6BmXMUsNfkAityVhR9ZScWAnvtK4BECLmBeLgKTRsoWxgVfEZHUxkaniwbXkSr9kA811zmpbusVa",
  "key19": "2JkSCzPge6L861oxUtVdGx3BJYMYMNCuNppLFWJDyeTM8jReYrbHUPRANhe15io85reFua1HiDnL8m1Sd4Dreiss",
  "key20": "3vVAuQaH51kYmuxmFd3TALUUuEKo9n8ckxp9RncV9Q3KfBcm38CobWk9JuQGuBztxW3trudqF46z2aSc9QSgfPes",
  "key21": "4oYviwVvnJySMHJ9k1JWRnbKAqeQCSXAZ4uL7cVwuBkKN7PvJGQaDzx2scSAs5JR5qtPcGEnbJ7fKkdLE6D4sShb",
  "key22": "31yBjekS7Z9R9cgfNJsCjc1Rg7usNz8gTaiDxBkXGkwjx8FQjTtaqPNd2dnah9ExFQjnw21FmC3QReyY6FBymtTf",
  "key23": "2srjBszWY8UVPX7QAEkciaWXg7f66M4kavYNHKUqpoBaw4ZQKAdJW2JQsRUwuGPpmwhQXXghnsmxN6g4eqgFL4Rp",
  "key24": "DJ4yEhjW9GFGJJNhEdMWjY7LdsUV4RtSgxKQE6Dgku6GaDZWc4ir4APgajtSbBUkm8r3zuRPYJTYocEZtxLxJR2",
  "key25": "BuJSRYhhiqGjhEbMh5U3s7kyAVPwEZkJej6nkvM6z1g7jXTQ2NV52xzHwTL88tjMfoxbLGY5srVrCZkArpzsaqh",
  "key26": "2Fcq7s7cZbjQfx6PwLUUhsmNa1qpDJgYjyTjb9rxvETSTKwY46WvyhFjLay5fWQnsr4xEA1gZb5kANy6oEqbgkAk",
  "key27": "3xBSNaDLYJi6iEPR7H1fDKucyixA6r5TZLzUeM6DkrLqjVgMo1SoSd87TobEERDcZ8nvvkCWeg6ZCm79an5oaPft",
  "key28": "51b1fFXbFEM7nyzuWxqZLWamgQ3A4khVjTbAAZSDzAKK6AwnNAzE8Rhvt6GPwKoMBoicMC1zxKLo7jt42bKmPzmD",
  "key29": "4TaCvcz84WjrnWdkFfnJgDqy1g9Ue1xLyYvj5ZPgvhBiQQ2cd4doSt78sxahCQG72av91ipJZBWMLK8r2oRB8pVr",
  "key30": "3aqZ2mYFPW8s1RqGX1BstUPi7CJxTEyQoPjdFtbup4m7hmHmMPoqgwen6sSn1jFxqhj13ieXjH3Jw47EjSy1RpjM",
  "key31": "5fvKQarnwvAvMD9xs3sKiHobcJm9sVnUnkS6gwmhZG9aAYCFyp1YP7YLWzzKQFBTLABYr6seiUXsbzeqm8CHVs3L"
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
