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
    "4kW5FDvhf21NZckS66jbBM8459FSeufDBXqxkrs7QevvWc82sx6Ea7HSA4JjEPjkf7BxaMHgWKbxYmqHYWC7KLjE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5sPaHwqpY54HAesCGQYSMf4n2oC5YYb8wSXMRki6wY6rFby1d8wFBwNfRrjwX9VZLYAyHmN5cneEtDeT86eyRntT",
  "key1": "4uum7Ban9Fy9p3BDbpgGZKMrHyRekCCFhSykiQrPKPUrzBKCfK6oV2MEbCUqr8Ka45arhNrKFaPzPv3iPhXGUF22",
  "key2": "nDrUCbMgxU6N4SFRLtytcxiyTeCKgDqdTCpy1jDyS3zFrGaN8yAme2buovaH8hsV1s6aZfSSFxjSHUxJ8anKtUZ",
  "key3": "5C3hGyz14uApX7KbieP24Q3mT73bzQhLJqhvWn2yiMhdgGNjrioM1fjEXRDuqGF8ihSmnwidbcf4nJz2GABQiqwX",
  "key4": "AmGeFdTHdGmvZyxgnACFqwKGzxUXP69bFh25gRz33VCQEvNJidCzhx4RAHzgk88BiTNKBfjrJ7vou27nnAnDLDf",
  "key5": "2rCDB2cFrY3qas88U3jSWbkdZg5UnxLpWWPxYs7h7gJH1anUHcB149APKQwd1Xyh2cRZHd5LdmVhjHsXNa8kJ3BE",
  "key6": "3CqsucuC86gyxVLVE5V4idTKiVRA3Z9KdeA6MkCWfEcKPK4PwTQPQwdez9G4JRSEJyLWuNVdYXCq58XSrHdW9rSG",
  "key7": "2YXeKmH8Zr7bp9hVCkJSp8Neoua4miRASdLuhNhDCufvfDgQMTYrnJWufUujv1GmxZoGWTSdwddCHB9pCR75GRFx",
  "key8": "hru91UdLmHgRyjCNSFRV9kZb9JMc8jiSVha81Lty8AQnYcKcQ1Rfe2LjsDhYG3Nwd2K6tykbGQUxbktUzqfVRqA",
  "key9": "tZE391MoGuAksegnHcz611qyuqDW6zd2EfFBw6n14zfwxQ3B7oXBA3KXQFaM1Q3daapAzhi5im557aF9eaKQEMr",
  "key10": "2fNzxyDUGCMGyoV7uFG85cjvXzLeFSEjgmd4Vvu5cgRu7wbChDCj8SY5Sd3YdMdvQye2m1Tfs1FywPgK6SPcZNd",
  "key11": "3r5eizgZW41719SZf953raWyrQZzPmbc5VLSoELB42NrSYcUoNkbmv4tjRFgEa5qE4jYUDEKwb3ETWB4H1Rs4D53",
  "key12": "57YK2yNzoZYetmxJE4nji8o3XMFFwDUojsyeqAbKAWurqofR86n2WWvMqTLLjKjBMgZ3TscK8Hs6ANwDi1GJS4J4",
  "key13": "5tVq9wjkp4hqgbtPk7oTQykGyyx1YycdsnXdKLZvoNjjnW2QJUrYNUUgaZA9MBaGXAaKxcmhUW8QPTuwZAc3qSet",
  "key14": "ro92vbYNvFwBCGEuMkEPjkXQzJMTLc1JupNhYzSVcdU4iSmFfbHJebgyxnSUAdFtGbhnUEENhmLGmxq4cFKgvpJ",
  "key15": "3duSMkx4q52Ex6H36FpyzWAtCZoso6o18a7RKR6rTsLyavmMmnAEL9QSUReZz6CjsUZQJqc1apbbhWbRpkExcHJp",
  "key16": "42LZzSZb9fLwWjXvuQVLaCGgUrb71HmFuMnKu3tfPVrYX9XU9xL77RvrReGwvsbQuaE84Y7veWZFyfM8bakE6EBk",
  "key17": "57zg5Y2Rjjo9Xf2WkGN1s4dD4cKpFJjbz6oZFXR1XG2u8dxSKzh79PdoTRg2VgKmtoHUj7RjobAqdqkbnvxDnvmi",
  "key18": "2fsv7YeedDhnzn9KWtxFZ2gBcQD8shh4N9MYBDP6dM6z2o1GkzD6Kph5dEUBPd85YBcnCMtY5CAoxFs8JMw5ezbW",
  "key19": "61dg8XMEmjSwNZjd95K5FW3xd6VtY2HUB578N7hy5dzckW3pkJFMrmYLGZWYrWR6yNdNkHCh9WZ3jrXKi5zGN1pj",
  "key20": "5axoXkAh9PKHpZJV44aRQZENd7E8bnMpDGfiUGW5sAoCcopY4GjxCt9Ey29yvVzb6nSrP3BUjGJW7xaRYdJvUQ6Z",
  "key21": "3te2WQdn6XBau4gVLS7gj2WWBK6xtmJvFhJ5qhm7yCiZ6Rgi1ktU8CEYo94D5X6TBDxxgfiA5ACzpAL4Ncix5aHW",
  "key22": "2kugpF42KmdTT9wrpYsEPqRuyA31wBp9QJYbm4PWV7j598Bnv25QBs7x9LMNVqBRcaQ3tMfRh8ehKyFKmNdkytrV",
  "key23": "4MN4pX8XBv5CUGFSiEK9oWu7ALDL23jzwQReji7cCoKE2MPfkFQ8RibNPcoov7MQLefPMgjuhwqdrLTSXiXMRZQs",
  "key24": "1PWszsvcdXyMXpy5j286rQR4b4unwxuyreGAooAPfVzE32HUsXNBjtbPJsHQpEunYxGpHS1ifB5og6xw1TKTEhd",
  "key25": "4wpJCnUA1Qd1CX7BxtEP9hXQFzPkmhZHHVypA2PuwCDz36H8XmPVVnXoGDyU6LBYL5TtRnj2JLfxTUfTNtN9pz4x",
  "key26": "2z4YtkTinZ8YGy8QpxNrJqS4DDkjv8Dk4LBhh3UbEpADtL2L4iu2PTGpfAWZDXGKZCyEdWeMEUeC9YN4KUAHjzEU",
  "key27": "62yJqgnLHuWXkCSzC4FNmn4KpDPw4V8xRmigN5SgAyd1ntHW5Zxs4X35YDUst34ey2JcpjXVNxkanivcvSpoNcFN",
  "key28": "34XdZTWJtrAa8P5JHHHMmJPMKLpt8Q6vtjkLauLcLu9LGZUUc9RRBqurdpknQqYANE4SvGJrget123b4jfAdYSLF",
  "key29": "hWSWRnCGZyfBwqTPw3odFPVsYMafgqEHQX3Q6nxJVbUznFAHGZa8esxrXRSHsyjYhGC4C3vC1vBGfJ2tMAsja1G",
  "key30": "4fQQGAiVpX96UMMr7X6UxsecbZRfaQD6rz3pARWPqcC4T3CqUcGbuZERcd3hD3BmE51wFBvTyyBvBkKf6HZW8X9o",
  "key31": "5nfmtAQ1QQVJjnRp1sr7jxt3VT1zg9Sd7gCj9i35fugM198eu4SdGF3V3Z98tXXKeuPpY1rRmHsRPN6TV5UfBqPt",
  "key32": "4bwt6JK5UghnDE13m55NJGScNGjDkkhQwEnrbLPUjfisxbvdVkYMJDZ9jPYVrbQK2Gj5CE3MXxsf3sGmF8MSoLmm",
  "key33": "4k7ctgLST2qLJYP4KcxSrJaL2GPiJy4Wdm61FztBGdYDFiVvfvxHfSWzNjw75e6EtfdFZFZZuD59Ar84YjMcsiVt",
  "key34": "5qydJHwPa6Yjwc6hxPGNAogVRVojm7NNj2SHX5Prn4BGbgqrGAct9oTFog26oMXgM7LwV8BudzPCwgx8jCR6NEJD",
  "key35": "3yPiGh1zr73fxD6PiHHyueqTqMDmZLgUZEEkMkwSghY8ZKbZDvmAtA9zmRA1Bz4ifPcn98z151cA2MPmXw5zZkx2",
  "key36": "3FN8M24tn98MdD99vqGAFY72UfCBG1CVGhwBxBDJuLXgKF1yV42qy5eQNzwn2H29Rhv22acHeaRpQKhqE3rV5yJL",
  "key37": "5dBn1T8Ger4TFrWhr3xPgmhhCfV3dNd188HKMmpNY7JdxQC28DUJJAamRt7zoe9yHnHSAMEqbonAeJLft7i12YxX",
  "key38": "4uGRi8ZQfy7ZWxvNwJ1djtxFpeSLesqYpo4AKdYxh5E2QRDihJ2Jko1Jz2z46Fzo1AVKeS6129ZRZi7uHUwQMS86",
  "key39": "53FJE4nugJQhdzycwgfadeESs1d7Q8gMrrXsXvRiWqYivRyhCLNicPAjM48PanpLMAjHZsxTJrFsjMAKTozzGKai",
  "key40": "kgS84Sr7aBBkErCMq5AwRxfRyCohKVePzrwA573GKLMEUjBVkCdVaacmkNc46dj1oQVd8cSpwvBghNLccLhtnJk",
  "key41": "2uYbbArwUzopjH8vkd24gid28mw9SQpZfQ63VDEiu5dDZ2b4YHAeY69a1s3AwPpUjvjnCvTFw2ETswc8GkDLQaRH"
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
