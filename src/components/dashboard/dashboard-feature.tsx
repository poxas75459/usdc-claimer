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
    "eMDVLDruw65fdipxY6bDeWs6oWG2DAeNfoy2b2F8vECEMzDLrbEpKD87ZL8ujCdU9iRVLiN7Y7PJK29vvoxQNeF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "41aVactAytt6CThuGYsv4c9tZTHg34XABgrHYReodEKhNE8JZ3vjtSbH6m2w22e7JeK93fiTjK61ho54RRKknY8t",
  "key1": "57cbu6XEfwRHvgHqAekzxomf36j3Je6H63H14gbeeWe6NwMJRZm9yboHh4ZAbvyFGKERphQZMiBrcMKY4MBdNP7w",
  "key2": "pdE1V6aDkM7vqt18RK9prFyyd7PHQ8LcAeojJBqDUjrEXhkQFScv1pksTrzsMmPP9N8F89tsQCCV9CgW8Ac5dYt",
  "key3": "5R9Zm3gtcY6Z7uMxCsrLAcbjm6sNfStZMXbhpPKoLQDBLUXF7UBKXx3vVA8YuoU39K4bz9z2sJK21fJvqTWUAxNc",
  "key4": "5fuZUooJw5gV3oV7UTBfwitncKxRe6R5t2Qto55RrLTqoW8Kr2hyK7rnrSfi9JnvGmhi5DJJcsS3xhjLoMgXgpfu",
  "key5": "4LbviTiWjQnsRukTFJ79YLfkDCsB8ckq6yMhn5ffdMrsJZ4MfJuEvdkSN5KYHamKvJBZRtsMZnr69ZrwkSvBysYy",
  "key6": "4fvY8VgFcorvZrT6CAT3Z65z6wiXJVAbx9kGRwFpFFGvFjSq6uQ6Mgj5YgxPHkgsHk1xfYFpcvTdXsfmvtXXe7dg",
  "key7": "34QomVfxTwLmtueWdMCR3GJCPB6q6ZTtChgjxs8MrM5JwcpB1K4TZDyGCM6qxJxxNJ1THjrMVAqmQqkTSpXCP4yD",
  "key8": "3ajhcQLqe31PAEANdWA3t5BtN8VXCYS2rHJDuEdKfgvQUFjhXnXmiyEPcJyEkx8drq8FmdWJ3aay55txgPD91YZa",
  "key9": "3JeeTJd1KFg6Cg43dzjWb6toWaQ3q3spyvpJSC5jzGfhvBbawZ1vXkrFJwsTsQi3wDTBChVJtJzQFk1Jd3Jn2eYc",
  "key10": "CVQiAGZ657YqDydBzfv4CLCKB3wkUH6DPKy7C83T5TCPvWgsiuVZoW73oRjzXKomCsbJAq1u497jKw215fPCSRM",
  "key11": "4ptiGHw4JWNeYnDFn8JH9iF54PTddEReiQNpKPGHrA8Uekc4omYQ68yqiq2NHPTxKLM1RW8G9M2MHahrNRZx7jJn",
  "key12": "43UwXshxhbkDa9XE3jnjGP76P8tK3gxAg2y1yuynxazVxAmfp1SLdK5P5czVJ7NDy7ANff9iRXs6T5ByTQSJn27g",
  "key13": "38pEr2iNqMhVaoecSGZH8Xsh6ERLPywmxzA2wq9KcL6yimKhvjmEN4N74HEFsB471SQJC9aKwywrEX2snV4ykSnQ",
  "key14": "4HdjRPSmHfxqUf4t1BzzEknnqQ5x2tnnmbo7BBd5UJa5JvXLxXKHUHuPfb6BAcSkvBi5YDgPnGyX81oLJgsjjtV",
  "key15": "3d3StAcUk4yj9jnSx6EsgmkeB6seN9dg1E3Cvw92G4mPzG1Rvye82swbcpLjzwf6EYhvFH7i3wkAgD8q7vcYDphv",
  "key16": "3sL6p877kEXCtoRTNFYbKTADEvWHYHgAJNfoHjNMNusKwv6y1VqCLt3dvhcW3us1L78XNdx84TTRsqdcn4v2t798",
  "key17": "3HZvXicQxXvBySRZr2J6Vnef3njwvy3EQUi7YD1sTgdTAhBjTnoj44WGnwxaKB8x9jGxYLhFk62MZfsTPFr31NJi",
  "key18": "FBaaK7BpYGohc78zwiVaGAXSDkexDYbBG72QXKzu1bvZzzVWChnGgJso1xyePPeQYbivgy5MUbPgfkZQ1wmfxkU",
  "key19": "4Swq4zLgisqXHghyjv6QpuCwp8pVnz7MGXgdXkcxd8BswFmuPSK9fndHKpUgsVx73bJ5xj9VpZaLJCNJHVeoqTK7",
  "key20": "HChX22sWnZDuUgDTQk4t3aFCCxHffsZRVJfVabGzScRBscSLfuADXRcakgNQCjeHSYwNRTHpAVvo3YZxzXqZPbU",
  "key21": "F4iFuuCD63nRmRy8H8T4FdSGjh1p5mps2eVzRvF3FgqkwGuRzBtKSeudbS4fifiJ7dRNcN3zF8aWTCT7g3qJVtW",
  "key22": "5SedPbZaHeg7buAeyxDpfG2Zd9H4E3nyWZxYmL98vXUWx2hCs1xMj3i82cyux4QfLVibRmV2fGoodS41Ff2MMJW7",
  "key23": "2THcaAEe1CSKWvhFravyzF5W7JXH1Wp1qJ7hgKXEyhZjcVKeWontSE22g9xZDFqfHAjkM9nHBMUGxTyzmoB8CC2H",
  "key24": "37wTWQdRD5WghNQQ7HheejgHMR8fmLeszDX4Fo4qbWJtnb4y16P7jQCCbBiicFBJxZVATsv1ZUzQMvQy4dmne25f",
  "key25": "3KhRuxMjuqrBXiCH5NvZUqnQr5ZmotrbbsSxB6ynYM5tCYUbzJm71K3v2LjvHiDFNHZxKJre1MSLwEZnDnRCUv9P",
  "key26": "C4fPfGj1FtidyKpgd9DeTMAR4KjgH3MwfTwCx3HjnUtawaKNRx5RbXNE8hpENB6LUra3hzjQtGPfWhc9KqTVmdN",
  "key27": "47tXWKaRkWSCqmFhkJQj5usqCejVf75Rpe6gmBW8umE5kXcciZ28pqZey2ngXbWSkEWt7vkWtXdr1ea73ocX1hRM",
  "key28": "3AXyYwsGQppFf8pd2HCs8ogezoouaxYhE6rnHXRKQQxppU6PyRewqL1gmEtnsbPtN3kFdgfeXJn8f81cmN76j8m2",
  "key29": "38Rz3DYS2SmfaVxJA5awFYAE8GxZLEY7mFKodZg8KsCZbiMPafgsWggdc8r817UcigSubfpV82pE3thW2hJEvu4c",
  "key30": "4m8wEjCqvRpF4nhVoQFjdiDU2VJzy6S3YW9MR5HVpEU5HZue1r11JRersefvnSJoCfkUwArQE4iaTSyzCh6Rz7ij",
  "key31": "5qe3YbwdGuoDz7yXyUQYqRdEftfEE22cnhTVeQdFcDdt6PXB1n5PLYrkVmEV6bLNSqjdJRi8ZjAWnSzkC9nNjj4N",
  "key32": "3SWdXrTdKUSe2qAdj6n7MfFJLTbzizF95BCUbLMMoh1R7UYeo7YSFUjJk4Mzrr7MchiS7uy9frdtognH1t7AEYRD",
  "key33": "2ShtCWAHi5dvpyRCHqfcYpb9tPYDN28yAgmyC6NXewAaL6Y1recH9Qnyengf8spzEw6bact7onaZXoAnHSGhUUDy",
  "key34": "VtH85cGw6vjCM3KFUq9QTTUnvvESasfHrWvLGFn8HTW9qkegKjuFUV84qGR6THjp6h6VABRFSvLsf8azNnbvBHY",
  "key35": "61hMzefXeWzK828ZK89Ktyx73DycAPhxBp56cV5XjFCvyfpj7KnKzhTdxqxj2H4o3z66npXC42HLZhxxZ23jEzhT",
  "key36": "5SDEamba5e6u4zvy7gGAB78cT4ZyqEuqmoYyeLdtqXT5iJ9ZN8tEKXAwjzs6gzuEWiMop8XZJr5FXNmo4uWaPo6p",
  "key37": "4RqdcekYBYefpz264LMrgGSGFPAKahTcSJ1w2Gt2MSWmLAeEnc2uT7AzkA29dRKUUDxCKMzDxbcrfRuiPRsN1zgh",
  "key38": "38UjbmZmMW6FuGhPzLhgGtmjHBTfMFjp8KdBNmvS6Xwzt3ZriEGAT1497cE6poAi3aD8jybrSUiweKTs5otZXCB6",
  "key39": "3GMfizhz1wvx2d2dTTHv38so47tvoFfUYmtqpoMzm1VSz4fkwgCocrcXrEjYBTQu5JgyGBPyquK73RANGzzdts7L",
  "key40": "35qdCJFJ9e2F9REcfRHcqSsbMTMgu3UndHFQV2LLoBJoEgyPPSrakFxh9GFpaNcuSrtMBGf6w82bAi5YtMAd3dGW",
  "key41": "3oqFTijG6nvw2DofQUhevqt9GgNrpYfuVCQcA4Q3B1BXwVApAxxrKKScTsS5JSueZAqW3pNycsn7PKxxSdERLLGf",
  "key42": "65x4E8iMjzjRZzapBZWdecReYCZyyZrty1SC6AreeNrpugE4GeAvC8ij1edGDDY3cbvZCLsCuyPfAkWFH2pgC4mN",
  "key43": "5gvTDa8wWTxTu7nBNVZAT3NjF2xDtRoWaQHFoPrpbAT2i38mJJAh9yDYSz1Qoy2AA6UhiEKAPWatE7t6dbDuqZ8x",
  "key44": "2ANLrZrKsv3rPg8s1p3RBtoUnHPHgxRaUaM7PnT4SHBgVL61pWdUfouJJcQJeLUWKcSc9GdP38Mp5phhqMtPDdZP",
  "key45": "3BeXVzfwEH9S8xYnWFx1x7cZ3fSCUK3gW7f9NJYjXHUZ12MGyG48UxjzqFFA6GJzKGdXsc2Qs3FpNnUisoG98HvH"
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
