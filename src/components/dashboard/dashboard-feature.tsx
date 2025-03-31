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
    "Ctow6tdXsQib7hxeQ3vPERtzAtMYvzYAymuv7A98ysRYRRRbGYPEnYPVKsZAPXwbLH92JdG1t1qft2KPgBxvQEV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Lvy4oKQBSebGjemn8suFCUTR6MxYUbnTsyNPCtbyhfhJug1eLHeLjYFJRFRujUnfv52hE9K5iZFGrW79kpA99L1",
  "key1": "4144TxeQbe6mw16rneuUB4Ao9AbyTasx6k2VWHFsXn53HkE1eXAj66XMKWgWG1TZY58GfeR3AaX78CgzUH4QxfPb",
  "key2": "3VPp22J3dr4moavxQgSz6hmE8NHuCPha6eHeH3xzSV4rgnQpNG3pYHbRFzURD4pKjctdQQXhinwYn7Lzm2ULiL7Q",
  "key3": "5yowmLrLBSHEeRmhQ4gjaAgWJn3TvhVUinP8ppmkk1BVSRF7D3s3szJ86Ufvr5he7izorCoUKxajX1GYFH5ZnAUg",
  "key4": "5SPa4WnmiWA3zTpoSbEac3MpyDFezzd5q4EPiYJQASZ7DMyD9Z6bvhjZi1CPEip8kwqmzqxyNj1oousgeKhCL25B",
  "key5": "3nvCvdYxGqekCh2VVVPE5ASWEPaRmuEyUtz79n8obiqbtLVDajGwRu79V7bocEzTaQ4WGw6XDzr1xECizDncuG9Y",
  "key6": "3c7fDvqSFkV1H3NaiRDBDCcZTEEjgGUTzvSb36uzXNLMUUU9aPpzcBKaxa14NJcbbimTUjN3ZCWvkzbno7tPDXsM",
  "key7": "PWP889cejiwDkX93YF3xUW9Byc33Tzp9mg4BUVzW83Csy6Z2JbMykPKZRG7z4CKvro88ZGbhhehn1dn1B7ReLZX",
  "key8": "3gu2V9iTjrNNdfKjiMvh4691pyUd4o8sRcSNFtumqTova8mJtVcr6g2TJVkLLMh5HCrcchZedcRHiKV1NYbNUv52",
  "key9": "4eJZ7eaLvjjuqDKNLU9p8fA3b71sBt7eBD1hBVV8ZdAsFfjnwAkb4G4cFBHSAGgxs8uqhE1VcGsZo5SNum6og5PN",
  "key10": "29TfojjnHox32gqSVyK8n4bWX4tXUcdsdba4fkysRD5WshetcssQXmFZNqdFFidBC4HoqTPeKoGFA57JrmNcHFMZ",
  "key11": "3fudwyc1ZsA6VrC25qBWJQRe5pDeexNDveGSQHEBGmv575QqYnux8kDRKf9heHgpzfLWx7R8cQBpuLSRc8x1yeCg",
  "key12": "293SCqywENX2V1bDNhbEPNDbYjy3heLf9XATDpq4ksaHzwAMBvotoSDWBFacwhuCN47QA9gTiFcrQmuApAaF9EUT",
  "key13": "5EUe2XpyBrojhcBNFBN5XWfdyqWY8LgEe51ZBJuA2kpvR8yESzFUC7m6GJdGSpE89Dc9Pa3xuags2PDbNKDsFVEN",
  "key14": "34XSePymCFAwoCJ5quWyd66Xvgp5Mpwt9MqbxADFpL22oYXnEo9YSQnSTHDp5iZVt9eLRFqJBi5m5F3KEcSt1qxK",
  "key15": "57wGpy851jpDVPcf9Vw2PFwMsuxRwpxtZnDwZC32Gi9CD2Tgb71uE8egpQTXkKhNqY2ZoQpFJDm84bue91gha9Ff",
  "key16": "44DzsJWMBg9nxntf4TtegYzMk2oHFAGnFySz2VtMvxuurHQYWbEg4E7NeYj9PaXXtt3KwiDtQj7LRukj3kkBsqdi",
  "key17": "4Wr5kW6CiTJv6gGWxXxZFwg5GUXFdMk44tg28bEkiMaND4X2CLjmdcxqTtygchpW2gg7PZwhuxKCBRbLFk4BSmUo",
  "key18": "LhTcLjENNRKVcp49fsBiYPSokqoYD2wpnJFgWPtd6SPvjAmdQSaU3qP4GZbDWVQT3zjnUE3x3rvndSm3dhn1wcb",
  "key19": "2gJtvwNqB2GtQ7zgr4cEMwE85mgQoRdFtzf54aQfEZ5Cb5Kzwr8oFQ7REG7GXu4HmHJ5pUdpYoCYwowgCaRPgMrL",
  "key20": "5uNUzd8ZqDjJkxcawcCSjvgLhAkFrgGhRJfaatnXe85N8uNrLFjfUWprFFXZHXuDWbzKokAjzoqnV37pgAiLFqaX",
  "key21": "4zeTpckCXZCfq7xV2tNcDhKagpxECij36SXGPvcP8jauTnBxsNDyxZRrqWyvfC8cZx3Mg2iZhSgywL5Dkk1phMy8",
  "key22": "omvUa1Z7zBWMDVBBbnrFnfWvMJQXwLQ3vz6MVqk3HnKEbWtLsgseBceBc1RPLQ9ssJWyncQ6Cxe7MCyoTRZDgu8",
  "key23": "5g4xCwVzh6eV6ZZg2vYsqMpM4SXbFAicLeHKh4PS2sAKdAdqLhs6LTWPPXgD6NP13JsxbGEMH2RSJeMH3o3Zx3aZ",
  "key24": "24qrP9ouGCBadcQ4aJ4fVKQBmoQwGaPGmYDDkxWpCCNsEw1Yuyz5rv8mST2aWcL5gN3Ly6Fsj7ZjkNQWDXamXy6X",
  "key25": "4tPwSnShQmwcwtnrYsegdD6ymjTDdyXsaGt4dLd6oB29hNzy5BsxVd323TRb39LD7jm4aDu4yoCPA75afmnNmYMw",
  "key26": "5y3C6JRiSkFDDdnDBKMK4YgHgwnb5c45CSNUnDd15fuz3UCjEk3bHgeZka6KJtXCeDuiBPY1b2aDQ5gq95Zb4jS8",
  "key27": "27RNcyKC5LvZCXNgAjfDez26ikCCbBCQvXWJtvy5os5QmYC32x8HyGispnZkEJwLGQC82RTvJm5PeDa9zUC5Fy7P",
  "key28": "5tsyWH4XbPwfzkb6CB6TE2f9FvXCUC9EsjVKj7wEAkZVNjUjkydaxjXhDHtTtRqF3UdMyouGVDysqDDRaRwZWsTS",
  "key29": "jQ4FjFtdNiTRydRmPTSEFAj6UmqjceFeYFgM1f7LM9bN8u6Fxm3SBcf4oyQFktQsJ9QLzcmXPqU3C61JjNJEGKq",
  "key30": "4WuUmU3LwnDY6SYhHSmHCpTKNKmE5bFvPeXCu7SdD8MybkL1bfoAzG2wAzrh6HNGqwJoU4n8rtsRVy9bYuP1Kojm",
  "key31": "4BX4a9wymp7u7ysrhxRKxKesciYEwLuPxdc1XZ8gshvAQyP8GTHWRBZYVog5qPo8JoEe6H9iEav98EJxbTE7WCaa",
  "key32": "4wPVyzGvQMWfHUEdSYb32hwhhWgELRmU7SNBMKJNdpJLvcggbT3JYdHi2xfdfbcyBsGtzi6TAvqVed3RJhpy4vqn",
  "key33": "41EjP3gQye1cSHt4tj9vCp9KDWazfC65PX9PA5JXTyrimuSxKiz7nRTnEU5T12ywkjoFHWcu3urH9DWuzCL36zyx",
  "key34": "4WQnRSAuquCrvfth71nnNst6KDQLaxE65UsR4xSWE8dydHPsxmpF6PfKE2efZgANXty6kFyX1DtS7USeRniVDVtx",
  "key35": "5VhnCgJp16gcPhiN4beQNojuuhRvVKz895DQ2W4aNQyKFrFNjMw7WW3JsyvtNJ3YNdaYATYKhYXHnRhcSAZDrHGp",
  "key36": "39m72p1u7bQ6gfK48HxVozwetAM8Cp8kGic8SCXwd3FYkkBz5x8MkjCkGGcE9btYi7Ynd4RVJdXwoNpMotQ6Ncnt",
  "key37": "rLR5Pd9rRFc8nPxGCBfL3VNCGQXK7XoPiwS6dgXXavjMofeypnVGRTmhR8eJb2CjT22zZa6VDeveUiVxZqrgeme",
  "key38": "579wuqiddCMfNGpzKEMGFD9KBmwQsSaMdBdoSyAPDJUrEkq6MLYjFJj59kJLf21fZBMHJ42qJbhWckUfsjQb6MYu",
  "key39": "5UCgNcnJ1k3BfG5cRcmsgegaLNRvYVcnEwAsQG33qAmtymoxmWLVXGyLwvEFm4VPX384QzSxt9focbwQkGPuyrg8",
  "key40": "3Z3U9XkbCmHQ8hBFXNmGXSt3W2B8c5e8FuvBzpvBtnhETrGJ8MDDnHqZNFJEk2DKY8rmEvfceLqQ7M8QtHSf8Jxy",
  "key41": "4Vy1Dmj4qVP1tVmNsind2y45R2e3EnqHDRm6ebLvcEVj9DpaAtnJPsRpKA88y1vtHYXNRbf2Ax9p31ki2H6JWRin",
  "key42": "56YdQXW1xTRWrhrsY8Snx32oCKearP7TTP2G9SNK1DWd6rf1N9ehvRxRpwKSNKoLMTkG3xPsToxUZZi9ipeE1wxn",
  "key43": "5JzAoGVBRGmyKo27KnF4BiemLFXZjdHJLYKYRtAAqPTVKNJjLqbrt1FwW6rQqjMcJPrHJipF6D52m5WvyuZCVxJj",
  "key44": "Ggo8ff4L4T9HPV9faEonbUH2Ewen9gyUC2N22AF61RnmztKSDRkPGtGzigHvt2droN7wq76QCRMCiPg5EZY3LmS",
  "key45": "2qTcrf9J1beGqyNZWH6WKu6mKUTjzBCFz1sPgNNCdHiJ9BAbwvPwDn1AQVregS6Nm5VyLe22b1Py8DUfmDrss6Q3",
  "key46": "5RCLXHmaQZPa9V8pAwe8jwqRB4y7hmEXvH1evhM1Ay7t6crD47GbCCJRRDQNsDJZQk8UNzreX4BiZ5RMCMdxAZay",
  "key47": "3YyuDALrreJwbRMYdLTeCMsZgNYGxK4xUR2YrNUbvEMBfSwidvm3r36ZxZuCGUKUhi2T8F8MXufEcDXHJY54Lyrh",
  "key48": "33sjVUVfXc1XuuJtS6N9NgyGuQHQKUUrHcLPPwJKa3kavd7hb6zyDU4XqRHDw7nirkxykmnZNWAjccU65xDTXAyh"
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
