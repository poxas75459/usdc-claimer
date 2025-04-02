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
    "iUa7KnAzMdic4DvwJxGQ8LD6XUg98L5vkRTP9QrsQaqcfgnu2aEYaM2ZeGED7Rznm1XNvHCBvp57fWVBc2Dxgzv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5zfLpWudBhB5JgSpMDaxdEozFUNXS5VvAqbK3dDM5svR4EbhDSFXA84nWV5TjSR1Pz2xdQopb2NVV4D3HrthneRf",
  "key1": "7nmWyYfWnk788wh6rwsdBEhV5HFAxnR2R4nmMM9uqRw3djjZpWNKGYaavS3mn3Y4mciSgUKFEaZuW341ghyE7pd",
  "key2": "ftTVkUsg38Z7cZGq9vNgMXtptZ1XAbXhZH3vnFgDPo5dk1PCHysqDdAsb9yEdsH3AuvXVTi4bPpGMvEbq7uWLcD",
  "key3": "53cJg1udhXh2qsh86tzc6ij7L7HqtugGD4RRSQ9CwaCSnN2xCLKo2jjqhPU4Mj9BgU6YHYb3h5y3RihihLzc89Gj",
  "key4": "2oayGdiVTa33xjs2zEmDr4ydk1Z6hVNncY4yMtBhpEojzVS784FN7pwa8dBkH2fZETnYSsbWD6EWK5Xjz9SL6ToB",
  "key5": "4dtFkEvuvaGE3HqyQmqoSyj7gAKUP5HTBYCHD65wQcqGzaRC16EdCHAAQVtjHkgT7HWYWyP1AECtKE1NV8W1nKMk",
  "key6": "EA15uJhLCiyN8VfTzfNSixD27spHwTJ8gqpYChaLRMJMpyyn9vw7w8UYqtqZmRGVMJfXqF8xBycQsFDZ4DbXjAZ",
  "key7": "5bS5PRnNUcvAz7rs5T9ZdR3j3iN6BFNL6GGTbCtfPRpb6cAsDgCbMFE3dd516oNZXqLH7V9S9YFFracB4ZVd76Ra",
  "key8": "5BHivjBzF5y6ft3zvadu4nmrsU87CmYakNjmjiSCUjFN6Ttt7asMP2Ap3y955pAVXobXRcUTQRBRzP4dNapztus4",
  "key9": "22VLab7Tj2KXwSwJbyiNGWM8EYc848oSzvBHoePKqs2ryKUcwdPVX1GhkZGJ5puMF18h1NPEKaExgcQmgeX48B7c",
  "key10": "43o9xYkPWENQLEHAc1pgSQ5fesV5peLpE6yRzVwtQzh6iMMNKkCbjkNUuT9Rd4bUxvE76JWMMdQ9ck93pC7zShYw",
  "key11": "4Be7TC9W28BVFyS6YaF2dMbtPPeg1VQ5uE3RgRyKDX34TgiwsHswgs1sktXdxpi4uxJ9jcDMj9kufwcggVrQBQmr",
  "key12": "53asyA9Kbs75uvB2PxrTcbVngQxxAqNwY9FUXxv2G9sM895tgdA3ucEgRopNv3RK53GZF7427ZH6ZB13M79Kc6So",
  "key13": "3YsdLKXfSk6m38FvYvL4ZfCRQwdQmK1a885NUfRXo2S4FUYSdv7P6e7oaDUvZoHuJ1CHPr9StvXojhBDg5WRHsLF",
  "key14": "5qTZkBUSUSw6T28F6usJBPkYrjg6XvwXbvLrUExQw9FbBrJ9h5WYkNUXrfTS6cPbgfezszSZtvdQdseMi8JoCDLD",
  "key15": "vVE5w5SF774S9yGvX1Cb6PdDn5BWMxPyez2RkcmVgYqwjkuWKp1Pmdzw6EqLitr9onPUbrSnQCyPPR1ptpiEofv",
  "key16": "673QireebnGb6h4g7bKoVAhmTdoADprKFcVU4WP2jLUrA2AvQFxpN6zQiUsacbTm6NrG6f2eQVBJoq2tnfhZiVJS",
  "key17": "3HH5wSwrHipksDWJSBiJXa5oj3ayUKvcb77G1XtzLrTrQ53x8VTMXrSEmzLXhXmSyk2FFDTudq4RLXjK8WKsW56b",
  "key18": "2ojnqe1L9Xw2UsLY7cEuDmbgzvEU7RmSi5R8eiCCSyvXkitBskiPLzPiKwU5XL8pQKp8yxF1AF6N2xN2duYTU2T",
  "key19": "5S6thtSm5Cpyzsic1nD4uTN5Pobn3cXuc7hrUATbjcXdGTjmDq4MnBMcUuNBNAVgpz8NeTjWXHL6tQcKwHoHnP2S",
  "key20": "4sr8myDMF2suY13hrvyExQzEwXxBzRrnPgegA8Y2LgWk8ixJxXjUNuUtJse4auBbRESaQjfdc3ahUmC9iDGbKBhW",
  "key21": "5LvTnNXAATC3sjg4CAe8CgQEbP32W8CeiMdaLvHvvgTnLDJRvFBGfTmX4HDL1U5xSZ2yV91H2NRqzUyrsPqxJ3Ck",
  "key22": "3GSzVQLKMFeJu5n2zjWo69ZNDA5fQVtXg46jZfmfS2Afs3wdgqkZfxrUTXX657TCy9qJbo6ea7psc9qmcvmc2bn3",
  "key23": "26vzqjSRUFbSimEhnXuYf4s2qoNndMVVHNGLvp9Mti3G8UqVzqChRadAqvRyS5AQoR2iMmBrosEZpcWYLUMEn7xW",
  "key24": "272rN1yCZATC451MwWAiTwbppwQh9FrEnZRMCbaPB8ezTubJTPav2y4Lmov271VayLCtKSANgUybfhGSKftJAtYG",
  "key25": "2DyW6bAXURJSgH8C9G7pVCZpPMrDeYf4pz1SLb38nhdEzUmy9vb6wxqg4wJqPuLKins64ikgfRXaNcR5X1dskGRW",
  "key26": "4KRRgjmzcF6XugqSkQ52yXAhsB5XKN4zjvxGB6j7tT64tZKmVZEGcaZE9G1irw6uuY9mjLq7gzNtBC7nKw7awoa",
  "key27": "5AYpeQci61ZQjmNxQn4jMmLzpRetjQGgvvbBgkp7jTGUKnsndfbKjBa2aZbxjr2NdUBhSxANkCwkhcPLhXTJjGvz",
  "key28": "3CbS7WY9yUo63jVE6wtw4BkaR6FtSM8Vcpiz4NuEt7417fMXKS13g9jEPHEKNf44mM5weerty7WUdZ1EMEK8GJZm",
  "key29": "2iH35dswPJtb8WWQkUpF9fCJYGvhFKMaqCzJ1d4889yGpzvQ1MDgUkNLZSWAvbJ9vHPCLxfra1BEPtQBmC24N8y",
  "key30": "26LGJrxKWHLNU5LjR1AHtDWsdNHwnTji7DD1wLjupeWU2ZxkKA6Y87EXuMWZihvZQZMscVfDMSD1YGMiGkWuvk3v",
  "key31": "4hP1pjXng8bAbMmz8kSFZSE1dpsKwALELPDNnYqDU9bfbJScqaFkapa9sfoacMeHfCwvjqYt1ZbhSYzQXYK8aqvQ",
  "key32": "3dA4GeXoWGgWxmguJ7VGZLfSS8UwdMjvdjMdX5tN16HMrc4EvSvWGWidUT1yGysySCXzaomRXVs3Aax9A9gsWsU4",
  "key33": "2iHFtk9XxkKew5vn4E7bu7D6NTFBJVaV1rEdvmhX7jVtyDrkn8JaACprwxGKVByv3W1dmho9HB2XupExpJBdR2Wp",
  "key34": "5ydb6ckYhRjmYJPtfMS5iWhSY97dzsmR18w8BpvMWJdCapgxrBoX79dMA23bULjGu8PuKfpDX8rksZnQhBArXn3g",
  "key35": "2ZGL2TBodHMeGbq1uLY4KxqZqzWxRUDh5o8zvovvQX2abCAKn2gS82BXFptRVwmzP4qUdxTEKMAU4v2DtjBdWgBu",
  "key36": "2LGcig5aGJt6qNPYiwSqpge8fk9qUBhGs19XtwKrSbtHx7skgJkqzie1APnnwomrav38Ky8RDctRecyav9M9SAsF",
  "key37": "4C3ogxZyso1tpddZbUTKAzGYjegBZ9DctCakAN8bx3G7YL83o9MRDVZLZ6fx4L62yJ6bi3v5pTDRaiBeBtGjnkP1",
  "key38": "22pffx7fcevugukdvHF9DqwUDYkFWMjyk2T5Z6EXqhUe5uLbzGbbMaYgkzxKNyqCm2AvNvAWiSFgukyFn4cQv64G",
  "key39": "51jBamsnBPvzkspKkp13EdxBjGsDEXwDL3ebJrg1iEFAYpiKLvvfy2wUbn8kyFiG3HfjCstUonwr8VUuArv1XRrB",
  "key40": "4CPbxUepPCKRs2r8eu8UZJCFPZS8PbLLj5jDZcgZVtF43gKvKHWCi3TFAxTUgxMnY32n28Ne3TX5LLYp4ka22QBJ",
  "key41": "4rLVPeZMXffmqfg5JwCx6RcNyoA8J5NziKhhvofCGftbVSWr3VCffq3S6Mmbs3RDAGh9M1XuE92uZDHFXE6HFNKq",
  "key42": "ZNUJzUVLtFeWis5VW4RsoJZfBBAqhEH78tUUfnaT2tWgEeaQCBxqUvti9Pp3kVydtaF49oUrHWAM2XPYXxUNtJh"
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
