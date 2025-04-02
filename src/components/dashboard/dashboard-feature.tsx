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
    "5LgxdKerpKWk3BMUFU6oP4vdHRLBA2yc297589knv7UDsR8wqJr96JKTVkcRwK9s6aT6tbYQrMugxvHcWqUwiT55"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "47sVZppqit8H648ZAtCmoUGXW7Mtiq3WtXN9SfPUtTQipmVrPziY1gggm2M1NGyGdenVpJrAMBhg7tsweXoprxWD",
  "key1": "5JMPQUY3BW8jnkhTyUW5xZKCfppfxQNzJCaLMd62hvn3crAqWaK81cytW2U2p2qwfDS1Sb8YfCN36CgvqYuqJZq7",
  "key2": "2NUSiRLa7TwFsTAsZJY4Qy8cFAChyC1MxXTc296m3MQ7f734tvmKdPtwuF3whkF5BiAiLPWCN8FRYeLrLgojBU91",
  "key3": "5mP3Fv3APBksVjs78qxdsPfe9mgErkabL6PgqtGcNhJPKjL1GSGEt8KNiAHY9UpH3Bztm5eN3YoB8VnRatp4csMf",
  "key4": "42wTuQPBmmSFPs74iN16HnmaXqjgs6gkyTECiAynVG9DtVpJXA6H73MPR5zJvTVUHPz1iUqQTsf4Go8Tmw8qXB9q",
  "key5": "4vX35NBSciNx5RNnqY2rCbzJqZGTQyGLF6Z9AXRoNRyAakpUZ8TarmJBhiwqGBkgcP2dkNyKegfWdv8vs19dcx5i",
  "key6": "2sPckiAjKRnHwK4YCPSoNWatK2MnssGdQHQdmhi56Tk88viX2bQkXM1JeP8K4CD3pmE3hypkrarF3nTNPnwxv74U",
  "key7": "XM5maLfxq4yiLbo1Lygjc6Tdno7BYWjKEgrPi6CPjRxpL5fFDoDhSv44hXGdDqpKDF8GWXXvaa6iWPtjm4vvQGW",
  "key8": "4q7S7mZiM5ZKMt8hWmmrKcuejBVEfVefRZfdHwJtjcZHZiMxXAH4N1yPcRENuGQrFriokGcaH4pPVUciDxNRqzQT",
  "key9": "52FCSWEhPwureoYayvbQVp2DHoL24YsxfjkoEFxmN8N5ob2Adk81MkyuXKeXvSDRFBSVE9vkLJxhhnAaNSAZHx5B",
  "key10": "44mnvWNHN2yaw9mncc8pNrxpXi2sZxd1jRE6Zage5tEiKGmx9afr15kSBy67apmjM4VJiokyNrxZHStk8K3bcwve",
  "key11": "2yZjwiFGHokMeWXPWBhwCYMyHgtpnFziz7LzVuw1aDoW4cuMqb9vikwh6QAqnni2yQCHVAuMyW4FZcwFvMhW25NK",
  "key12": "2XHRtt7MxQUgkicC7hscUd72GiFShUT1gd9izkBBivjzUN8Cv9Q2WLbpfE5PU1pWrf2Lw5VDYAnjgH2oycexkaLh",
  "key13": "5w5htKv9qkJGYRKvjYTrHCJ3p8yhAbB9ERcuJUXCRj5YuG9dJJnGjz4j5cibXcMvcVo2HaKRiva96zCfsUzBaExB",
  "key14": "3Q5qbaKeqp5m9VApybgUiuEW6QBs8qcsRWVmFVHdDocfRjsSoAJXg6LiJMKrokruZQMsZckbVRQUykGXQ1qo42dz",
  "key15": "nQBx91nVHNGaWMPQroPdLDvRMbbZS88zHYtboYyHo9CR5CNHCHLtSykE3ZpX3KGVUkkNzSSeXpVZUNT7rJK5gm4",
  "key16": "2nfSDuJdkPggcqaf7gWwmMrdtYeK5T1wvAYCB6TV93JDXpJSJD13aLdxSwJBpmqrtoWxhfFURdVzBdFmeaE4axGc",
  "key17": "2DMo82T7TCmgia8ta8uDF1DyRDat27FKuUBRDFCVh6swFS5WKU1RM5x32Bey8mocbakJZLRPy6881XskWEpMKGpq",
  "key18": "2LTW2DhmkZ1cStJuS5rzEUyyanf5dmMrhAaB2KXqe3AZnJVZPbLVL3uLk49QHGkdwTX3hjgwjbCTYcfFG8uNHaLf",
  "key19": "LLbzXX4e8WpZu9su7Gh9UVdWpEPTBE4W6U7JppBgnmfqXbKKpiLLpN9YtjLxXwdDeKst3RY42pRgQQewNdeueEd",
  "key20": "rVWH2uAAR4HHFHQRDNyizxqTcN84GEweYPC7q8xDQ6RcLewpeayvG1ddTNBhvLeca7kojWcZfZW4UEDbUtb4onH",
  "key21": "4nQPukCbpbC2nYY7Ky1RK8AerskCmHcHGM846dveQjNH8acAeekg4PY4ezrYhjP6B7Nqb2RsJDyYdcjYc6z2YwxN",
  "key22": "4Z65r6q9SjW4oGgfU4w1hY8jGe2gqrBXJCpKz4suhMNGwDWUzXjnHpVTk1Viiw6r88tZQpAkTfz1Tfmf3PyWAhSx",
  "key23": "39gYdsBCsdK3AMJqLJbV5DLFy9F2yVPm1zxozCDaXNgtELVxCd297j5vWJ5QtwVaAEPMRx672Di9g8666Yw9FnwX",
  "key24": "2eVYKhGPZXwnToFT5LAD9Z9i83miEaXbwrdJuNYb8tYwSbEoc3XAj3Py8ynn7aFQHPhSiZ2QDFBSS9DvVJGCKyZf",
  "key25": "2homRV5MXbgVBNZ6Nbqu9rLWotyhhwNHg64n6Z8XGcB6QF6eHNJKMGQjB8TCNkK4QX2SxKgS1uUzXT2WotwA5zB2",
  "key26": "4JEtBBnnwThcWLzJSMUuB4B5ARyCDyyCjjqpFUD43mN4txuQqH5vfL3xHMKZgfJHdRyYYQV3JHRDirU6E57modHe",
  "key27": "5cFaBSC69briBsiVJwEJLEzX6MFhkXbnkZwqjCroU6G3436JMkF96RpuEqqpnUEep7CcT5sHWk2SGhnY9CxgZ36B",
  "key28": "McFNJ2K6b8rTumuz6H2EsZu4RewXbNEYT8YS4hBJWdghonUPUaXsydL4UAvMbaMG9Ez6bFSBCt2rHm8VEhwFRbP",
  "key29": "5xMHtnTufG7CuWWNEPqfWTqon58qptgtcqu15QvRs8BLXN7LCN2mZCQy3PUgqgVzEK9VvHv2zHFMD7WUoWQf1B1e"
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
