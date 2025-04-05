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
    "5ZTPLNKjP9oXJeUr7g8EAJbntL17dyPHYmD1XHvmyNkFhSyZTS9mg2Zv56dd5o25ZqhAC3qLdzrVhMnnBUKpzAf7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "zi9BvvrYf6GavWaFsaRGuRUgCBhFzbdTuMyjbD1xEbNsbvJXfdjAxyepLFZP96QErjf7Z74S8pP8Jkkh7oGptkj",
  "key1": "L7McVEfhXcqgxLbphgB48dkxf6yFmGCRQMYcqKhuPSPVgRznNv6FbsD9ofNFmMgivRwA2dsoRoesHx4ckZSKQP7",
  "key2": "4wcXXjXDiYJzmmDNAsVaBwaetz1FnMk9okMrk9KMxcrsabvGQCGKicLC2uFixCHQDZVunNHVYUHMqgq9WWtjH9Af",
  "key3": "3xh7rNXb4tEE1CJJF9mRok6yUqv9kgyfzPU3EzcT7SXtjv2o35pCyHPmzjjAMBZ7aHFGjtQoBNfYLH4CdqAmUP6E",
  "key4": "5Bmyz6FKe9KerVH764xbRmd6UtfAVdKufg3btbQmtqBBD9jSvNRXfmWBEBDi3XMhDGUZat2Z7Y2wgxnqivwnV2PW",
  "key5": "4M7EFDCX3ZoqmzDN8uekgnnfGYgJrbWEHVNebE2gyNoLnaxpQNBk9F5rAByKrNUF4TWM7DxxcK18Stz6U9F3CYF1",
  "key6": "4WcdEYyBd4wg8QBUbeqehzTsvn6bbeJHrPPzcmYNF4VTDuoNctGHFRoeV1wRZMDnmw5DAFPGcqvi1xSBqTrx6SF8",
  "key7": "6Edd2Z78aB6bgvJ1Pes7M5c4ZWPDA93vvaSPvKq3mVC18UDW66MC1ZmU7P4rCf8G9HhfJJ7HSLpHJoCEwWt7bvC",
  "key8": "2zrSenKjvKXGvqquHre95iLZaMC6ste3pTAqMtagx1D4dGpKUnoXrAicKrkgTPcKqhqLetzQ8nSxFTeWCSgAtLbS",
  "key9": "4iZU7FYnmFSJP6EGcD4DrT1ojbjvjncuSJnC2gAz8KDwGubnCz2cvUQ6zgJPxMh3tD2D5VZjDoJmwD2NrpbsQo3s",
  "key10": "4rdTeFKzTaU3asDmw4bq7z1z5SJgoJo5HSFnHjmVTX9J4qYr7W5qiGEkEMMnQgaBcSSbGhBHremsA1YwGk2RGRpx",
  "key11": "5jKimCkRf6GPZzeggTXhTN4J4VUwzxiNiYMWKSCGPiVTrhHsKfnyAmunfGkJdGXzjDxLeFXMsywLvxaRjicu1MX",
  "key12": "5tAyyVW3CYKEEvUnTSAhV1HeBXjjW2JjPMcRkbLzjAANzqdACurSPMjvFLg6s4MSUN4h4kfLrod1bFjA46c9sNPG",
  "key13": "5xGHKnTzrnpG1XYcz28kS6cFZJdy1y9Aq3QjmhjtepdxCx3ECxMSXBe29qCngytFFDq6VyoNRRfKVdPzEYcYndRQ",
  "key14": "2B6SnuiN1bG34qD1gGRNo9DUDTiv24d9hdrrY1cjCNf9H6W6h9SP2WfPdNQGt12bf9PNaNKCAne9MrPh4dxACHBi",
  "key15": "4fvXa81WcV1oVF3JidLFEVUVNm6uCfedpFQfN5V8B2MJDcTL4gs3NKYMp3EBeaH3zQvkbDUEuY6bj9DgecgoDenA",
  "key16": "8NosPZKQVbAVFTXeWgGPqy6nNz4YvkwDb4Ja6fkD4MH7GGQAKehxE8iewzaXrPa6yFDyC4fY5qTXr7MMFKeDYhy",
  "key17": "4WRUbSDfffGysKtqCcuNhnDdRrNgDD1WkEiuiEhU6MLQcUN1DT177t45V4q3bvRNXFU2qAJxVxYMSS9Swp6w5mPC",
  "key18": "3CAcNS2JAbQcFrbGvNWxnc2wBbg1PBcqenmCQsbjBNoqM8M3gCxmsc9pkaoWVZrR4nQAeyFzTaxVYWhHErwRcKZz",
  "key19": "4RpQjHJbY9gHSCTdtuPqzTYtDeapfurdN3fy5vw77f12cRQCsDjWUgEk7fP5tSz3Z4qTgMig3F7UHq38Jj3M1H2h",
  "key20": "2xr7yo6gEKdokGRstRinxqWTTX1nNrcXTiXGCzk6Edo6uYoXGswdq4MFPomuLxm1GMinFfmb9TpZYRQjyXSFrkvS",
  "key21": "41M63VnvWs3fxu6ewCF5z9ChHrmmbBED9ZoKeDE2yiDnGZRcWRA3HNGxUF9bfZV7kKrmeAPxf2pL9ATQvS5d8Se1",
  "key22": "5oqSZ9idQ9ZVVPYUdKrc65hpUJhTGdUsY3LKKDUmFyYZZV4i2gxujbw7xhVhowdWeCgEUA47hGxnwznE9UR9MTCf",
  "key23": "55XyFtFtrDgU26RStgVw735pBDTGJypNggWGWEHCdKVe9xtYFe6KFfTGcom7Vk5xfsKS72WT1JPiwhrUgTiqaPpV",
  "key24": "2WuzWaVYJQ5aHLcXau9ZzfT1etvfoqiqoKaXCnciDpJwomB17mUpnjwAfpeTKMKQQWu1Rg4cg1DzoxyQVL4CFVSj",
  "key25": "5LAd4Bx9tuPYLTYtzh3zAaFu2LVAEKRxCnFvj5rgTZY5kC8QgFmeBkNb63uSjrFMjMxYfQQWRaM8iK24Qfrxmdu3",
  "key26": "igpVz57bj9q4ymnt4ogDxNWvghW7wGya7V1yEsj5xvXge7tVhewXoPMKBh9LWuSxn5QLtBK5g7nGh5z7WJWELkK",
  "key27": "doeD34dGBgJphhrPFP5d5fPXX1fArYBD84uQM8haAVUY6HGVrWRFNwXWbTvuQoqa3Fa3dL5SEScPXkF9wxwLjif",
  "key28": "5bo46vxayCVJBMnzSaGf7vm3AP6EkFZqrqihehPd8tAU3pdHXhZvTzJa7QX6DA7hmG3kawMjeXdx2nusHg2DyipH",
  "key29": "4CNftvXiX19tTM3ajZtGiybYXqt9iMtdVLzFnbU3UvNb1LEY2Q3puecAFLqpoTQjcyb3akCMRoBVhUujExRAG85K"
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
