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
    "Bs2uwZKyoi5vqHxGCrQKQNX4BcJ44RYSHrvGiHbG5DRYabuYPc8ptXVJqBtkbAZ2xdFC87xiCk814LCmN6K9YeG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3EmhqvPHpNXXgjhqn1saDHNKnjwbMPNKwuo4e88mNFzxsFN9sWW7icz8d5qbdddMnQowwdP9FptPo3gETj9NFDi3",
  "key1": "2cPPjZwiCGijXJq8NoiWhCREQ7g13SaYz7PhwtjcDYYdseBza7HoMjSzFJt799tNr3TLmso5kXy4iHrnZ1oQ3dsM",
  "key2": "2nbWtAV6XEmL2qGqDF3YVsXpjekDZjQ6jFzeTdbUyqE1kiq9bFKzriDfKR3G1jhzxQJcj9Ej76rQ7FaQqHLeoth1",
  "key3": "5LRdqyooV7w2aVWfwuumuAatywSbLJNoCq1iSTkz9cXQVFABZz1ae8tyDBYus2WdLursovxSPkXuhvLTrTbzGbGj",
  "key4": "54arySygNrRVKc8tzqzeWfuWXy3GLpkBANk3WpnKjhgm3KoMGhBjQgzmCM8mNTD1hnPGQGinFc3S2gm2eWREHJWm",
  "key5": "4YoLHfKQGvNRDxX5FoNoBMmR96oSmuzexgC8zen25P1KnYTXZAuz9hNZv6otY2Et6jcRZXfG7kmt1MApvNn1K3mE",
  "key6": "42Nf2skFBEzDBamT1pzgiJ9Yvp5arggR7MCsZwa9bDqiK2iT1aQk32kaGSAxBDeJhSJJrp1nF7kFov46A4ct7Rtv",
  "key7": "3sNyTuo1VoECTQZp4vdGdTfcd4fQz57ZBs8pchkpxHJePrmWWjBWPw4nxedZZmysaCDmq1YUF51ThqS6Vis8V8NE",
  "key8": "2GqF1h8DpQQa5BuSodtpoE5762Fa6umaitBhKHkt85ziZDBJyx3kZsRdjfeBELYcEHgBiJjkF9a5m5DB7azutpgD",
  "key9": "4RPBGUC8z34z4ZFkGE4R175x9pY7PJD48eTFGhvseCx1VgvD4vMgmhQ6LZgU48eGoco4CDp8ugAbXcyncrJgTc5s",
  "key10": "2hDCkB55JUUeCKiy5sb8UbeTE7RCaKJagPdzGiFS4ZpdF49rgK2erpPj5MAjrAi5b49JnBqfmzfX1Gkc65JF6V4F",
  "key11": "4vTpXV5osCGQfhv3cch2Af9KUV7ugQxAigYZE4j7bhzVSDyAbY7Y8faMB1dJibRiCCCZv5w9zz9UE3ezDQWH3xE3",
  "key12": "2S4xndz6UWN9Sz1chSuF9ZvtZVkchoW41ZgoSwDt7i9TNM2GkWgebhqfbr3M9rr3JmmobdSm2VtkBtK26AxMbJ2",
  "key13": "4pjSh2ByLKpPHJV4qPzdCpePUenj9waQq7JmkmtxLqMJb1QAu3GG3Y3F6AiCr2YTf8tnpZwpxky6ijchoDnXjsQv",
  "key14": "oHXNedwR48Gpk9XkFgjxXDBdbjEJTmuA8RQNc9u8AQxYFfLBAPLob9ma4GHqPv17WP193dqzRuu97zcdCUJfqZB",
  "key15": "PBbDqXsZoe1Wn3jGJacnSRdpjUrsMEkixsA2PiqPi1J4AhfjoHGAf3iQ3PbvsTsYge5DRhbQPAGmQ1wk6oXDLJZ",
  "key16": "5WUj1Pmh8yMoDGai2AqKUt93A9u3UPpC4z9g6kRgtx2X47EXSNyespUomMpugQmT9YUBsodBh54enJ65MRzSUTJd",
  "key17": "2R6HEhaDVPjQzm61CMwSkvzshQuc78LGuZm2gdHELUKRVx24g9ijmdgE6PowaT8poKGMFiUPFMSgEcxdJh25eq5d",
  "key18": "5wt2pPkrGD5TzTcSPxDAXdvXsMjCjgzSzYi6p2r887CrDbeCJFUoWGYDcZ4h1zm6nkEMF4BV8xio6ssniGdx3DoQ",
  "key19": "65YUwqSTMQLdiR4qYdATmb7PFYvjEn9vu3KDLb3yc8iPzsDrUKht5YTENoq1pNgW9Zv3AjneKRXAkv1xXLzGrxf7",
  "key20": "3xPiKMNXHVK1yGRqmNynXoSD8rJcpn7h9dZuTGVoVaX22yebaBSJdDtHrE4pLFH3KKy43VQ8EjHsH2rc9PZnYjnq",
  "key21": "3vUMDEW4RLT4J8c5aApYb4Ys4kDLSZiKm5KXmdmuWtzUPMCo37d5CeF9JHNYWBaW9tsVLQvjh49cw4fyev6WDpmT",
  "key22": "63UH4FfuTzpcW4DwL6cAHQMnd9ytnJE7n2qBk25H68TuxJK1BbioAP1uHZbWj5PtYxVFYJwq9cMU5BoMwRn9Q9QZ",
  "key23": "64kmNHVBm3dybQZpR4Qx5BscNhyVqvCc9ZanpCAatnCkjb3JCcPNuG74hhwW8AMYBhFCfa3CNix2q7EXjh2zxXcs",
  "key24": "gGoybGWQe7bRzyWZCcFeMsSpCxuwZS2y5gi6dMp7L9fadLWwpyCmGiEJqQKsuq2XMVudNd3FJm67azGduPsEiEh",
  "key25": "3MkeJP3htxQL41Cuh8RR4J2FkGs2qDKgAuQ7oTYgaUTEg7Kd9FrZaM4Ag1dE3xQiZLALMMr9z7ucFrXNSewLvNQ2",
  "key26": "5aiBNJ4a9LYp9WCaorEPdj2i3x8sbBz6c3P2iXZnJTNCPrX4zB6nirMUYEyFcKgF5ru1frieNBRFcbQ1SZ2vAGBx",
  "key27": "2PUZ9u2DWiTtqJ2z4xxPWBx7MpqButrQtEVv5ZkZL842q63Mh1GFhXd2pcVd1kGTYbGyCRgyX11EdFG3AspGJzRS",
  "key28": "3EQuKhFasricQWQx5qRhEJf8B3WAYiVVt97E6S5bFgpdvLfRWfDSW9ymcSGDZg1JWpY7LvC6GVbUiSUm2qd13NiM",
  "key29": "2iPTDyNjgrBDD2Q4E227NsS3Ui8xnsDo8wuk8CnRFcFfwkodXD8cWx1fTYf4PVD3X3cWBQwwDAJiapAs2HpK9HTC",
  "key30": "P9i8rQXH53bpBRKuNHGgBFVa5pAbaBof8de4qy5o8n45xqQniRWWwhrm7VkZyLqdW2GeX8PhZe2fgqbxtQq6o1a",
  "key31": "4UJ88MUJ8fP9hVHrJ9XS7pySh8awYvnqYNqg9JhfqfgHkRTaVMrMRSsKTkKRfLTpAYr7M4PvNTm1CF1fELAT9o31",
  "key32": "4xfgiC1PRXhg226jgjdidDKg1KHmw1K5xY43v2KNkj3qsscFo71sRe7exzGKNmcm3BY37TMQgWNYrCcPsFeNVLVK",
  "key33": "42ZKGFC1y189qJiWd8xoR5sKhUUx1BDUU8bDigTPeBw3skzv1LK2ZQ3KdLvFboD3EaA7cCNW314jCpVqr5V6sXFe",
  "key34": "21C1nXR4VZeSJrCQ1PMWEarW4k421eDB4htkZS4W1wMuw6qgTgmmPSKX9kAkApYR6WPmTVP2VMKv8h1DEshf3LUJ",
  "key35": "5SSovxtDCsKEbtpYE9J7sGBqiMpX65vCmbGQKrW4PYtjHTEnfivh1RHnWd5xqqiVnfJPVAKTAHj57CjmQqMpLbdu",
  "key36": "521rJmesZroPq8idQXFA6k2ex3PRBJwAzFJMEFUwdSShacyVQhr28VaB62Aty2YBEutAJSs2Daqg8RwvBdJqbrWv",
  "key37": "3TZQUbAGNtgh8D5HW962HsVLkVs4txmJaSGcHvGBGQCKVuqw5Z3KWK652AdRktt2czrew3iAAJgkoHnKkREY48dQ",
  "key38": "5moUiw7biSAj2rEi9gXq4dzssWThKyREXABpeHByzxvmYVNiqHkpQTeTuiHecd8rR5RKiWpPU9KH6uJvkvAARKh7",
  "key39": "Tbvy7DygFg958qvUXWk2J7pgPAjuwVCX5gumMfQYQK8EZcXFFS3jXFju3fQpCKKxbr6zndr5qj46YZPS72hB26M",
  "key40": "4fLcjE4EAGTH7ftYHbji9bKdbt7ZZbNnJcid9nGXo9GStgHEsNPHEuECNCQa5Eci95Hn27K2QfxfTVYNutET9Twv",
  "key41": "5vNJJtw3jQjrNYBaCB4FKkh6BQmLWTrpapHMRUKEd178EekSCnnrYhGYHTs2VusXCCguy3uw3H2t8zYj2gbLzt1q",
  "key42": "5MYZKvDg2rj6gRudZfs6XjU9GwNv83cm1ozs2qBtT8XjsPcMCaraK9vBjK4uy7WdasvbZNUzGhMvPRoGcrVrxjU9"
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
