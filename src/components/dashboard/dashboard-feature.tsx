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
    "2gcJPinX4reEf1PUnmr35tMMQnEDjGZb2F1sfZWx5tFcu4KMueYnXnCZ5pejQCNtLHdLEmPdpdnx2FnekvRVZbfM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ewiiLVGz3tn1NSmREb23qgqu7MyGPUkdTbGWsPGmiUb38Wj768USecatMVHBpoMLQTQ8pSAHRGtkc6xrmn69Uua",
  "key1": "52Bu7STrCVvRPW7cU5wDsSgPHJPwzctQgL7Y2MGPCTKLewsL2i3mHj3Bj36NJN83LZjMGkN2B1ABRzHVVF38CpGV",
  "key2": "5UJPDcoxQsQzASQVHuSFESVUguLDaJiFN9xcQCJ7CgQzRyYimgvZZ8aUQu5F174G8rQGSJsXwJfcQgd8tMoBXJzt",
  "key3": "5v9c6XcBip18ndggLRLFUTv7w5Fbj5UtGezXxVUkyqjfhVG7Gsd4t9PkfACJxanYPs6TdUU1tKA7AE9kCSgZh1jP",
  "key4": "3fjhav4tZH1KLtUa51qKoBfzZ6ASrawhTooPWpULMz117QtjGVCSe3R9DnT4dNNYkCcpjSnqBA3S7G1eiZjLmXjz",
  "key5": "64fFNaGskU4BdnEqyedxjsotcRfqbdDWt5qMywwhoH7zJkYYtg3LXAJVUkxAKC8PYS8Ppd5DpYbtzFv9iC12PdSH",
  "key6": "3Rpn5FKbEeyj4HyK2Nb9vyRS32mL9zwUQUyrgX8ypAJYz8twsj1f8MHdqu9LSZMnztXrBHpn2TrjydT5Nv3WKAoj",
  "key7": "3zckXCMNCHowuYmL3MHABHU2G8N1u9EurGvfX97t69xDCpKU28DUmKBDcKLKmuoSxcLqCdi3uTGQf5unMivgX43C",
  "key8": "2igAWEXZJ8wnW9Fu2vjXcQuA5GggG9Lk3e6bMhkna6Qv6Tr5hKqsTd9JGw14kbmciLKeSvF4cGuS1XjVvx5m5m4J",
  "key9": "4Ux33uHPcWzL5KTbREPc5kjHP6zki6uo3JeFgyHcqRGRxnGTzogZsgD1w8NdBbrywL5uGBGocaHSmFteS4io19Fn",
  "key10": "4MdRPvGv8FGkovyHhiB76Zj1LTV4NX2NApQuSvQLSBPshJuxrUUVosjDzCNEByZic5NwUmzfj7PCrQ2YQpqQQpqk",
  "key11": "2MZUb5qUwjk2VeJbzB6BdBcrdvKztHdBnS4vBbc5oziwVMoxZZ63Dxi2rEYa55cH8PMEoHqpWc7xz4iCqqT41rNy",
  "key12": "4KuRNpHxxqCeeGcjbAWHVt38PyzcaT24EJEXa3n7MGMJK2r5oX2DYfcFiXikUsbTSn5zC9BjCPA1aupboMQjr16J",
  "key13": "YreUgidnGHmhA5zu8fRSL6wYGuBE7a8YRjyS5p56c6SghdxNDXX7isRchzLXR2FTmWh5sBhBwrUPdFzjGjcfdTX",
  "key14": "5k9wVSWE8AFcQkuLDL3jQqC49YRW8b3J58ztzQA2HnipVHDmpiSPEAqvTyLvKAhJf6yTPm63ZZDfwrTf2MZu35aE",
  "key15": "KumyG8WTA2Kkyg9m4Vosr5fKYVxQoLdYck52hYu2piS2wUftm65Yt3X7FJvjBycVtwFtoTiYie3FQXjf7GfFrJP",
  "key16": "2ZeNs3gBDmMiXtvyvT1LXwCnWWoLRJsYZhx2KWsnAieD1sznxGYZMJJs51Dt9FKn8LZ4RPLBX7CMgvNZHUQAGwAi",
  "key17": "2sxkdbfCi8fYhKJvBEbDEtARxWU1EpKvh8TWgZWBMn64vc7CFa4CGVGRRXrrMeprPPAcegcJt8fYaSVyxMhfBpLn",
  "key18": "5XeHr83RaiCwHRcKQHqjpyGs2uJtcNS3eFnbmE4MgiehjrK3r2wMoDFhA6Q3qzGK24zcr8RFpRzbseYa9CoeWW6r",
  "key19": "4Bcw4QuoBphTFeiuTN3FfxhohZP2BsNtzqNDPu5NVJc2ZDmqgvtB2mFTeLKTz1G5nDez1WwuXSZw7ctrvKyQe2xA",
  "key20": "28bw46vHfcbvbktyWu9VkTHiMtxRr3cCfWrB8yFXwyjjaqxvgA6PguWMsZQqXFMxQ9VN3jj9iQy5d23CUpMnHgrL",
  "key21": "32nyV5aZvm5QBu835gz3YHLuKWuLanMojAvWgN4cLBUJUPB6eEY15zpHuJsaQsJgFJ6b2b3a2iy4Buq8aNP4caVC",
  "key22": "3gjawnGjusjvjLUQv9tCtmLvy8j8rCvHVgmaY5KZ3vg4seeJ9CBAJSmDEUfSszUpVPEzZgnVjG8pAE6gvVqhm879",
  "key23": "9V2WhL9WjHGRBXiXjdAwP2aP6g7hdeAEvNuDTgWuRqCJPTdBrYrQK2CmbHUQWxTwMscyzDxP9yYWC9KnJdPtxH5",
  "key24": "5qjVPJS1Cmr9mc9Lk9RodqwZe7bMpcS7aJAhwzfykRT9M6bTzBgJr1sES6vh9KBCBhbJo7yKALAZVNNTQGa8zZk7",
  "key25": "34bwizC1FA6N4aS9GDC5cmGHTUHeBykXxUNHM5R9m4Nbi7eer5GFjENckWm4YB8vFQ6D3RAkMWzB47PgxPLJVgSK",
  "key26": "5UB4DXBYh6wjvsu3jw1F8uioY4MNx2UmEBUtJvujjr85NCoaBC8gDKetee5VVaXLTq9gmWCVF8j4Ujh7nz5yej9V"
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
