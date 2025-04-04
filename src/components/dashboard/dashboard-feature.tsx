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
    "3ovV84paPpNPRi7V9gxjmnUi1AbdHkZnqKHYtTeAV1GY8nUXJoqSpWTnmhWenLnGa9K6cMF9nuy4NpKB9Dpu1Nja"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "h67HTohshu4fY2T8KGjv3oEnQ7AZPXEPftSV2V5PDksgjoJ92KhFA7oTtWjs4RAkgttNPYDiUe1Kvj9grxHjC9q",
  "key1": "cAVt3bEiYBfzQveuvgFvn1gn9hWMYRYJEumC3FAUKc4gJTp4dJnxKyWxdS39V5cdwBXquuAzTpMG96LHujwppbz",
  "key2": "6NpK6x5H2rMq3T2XzpJtYYVAPPt3PKJoffXxiLFQPR43fJVx6LgVS5q7cwywquTAntkneYQbNcn1BfCpcSpW78N",
  "key3": "CfEXdksrVmfxVb8wmJK6XbLpvfv23dxVbDeT9Jr2sDDqTQ8R9amHSHyG4KFLKZvgTt3tuLuuwE9WiXaCuVGmiWY",
  "key4": "647zU83RJi5MQwE3f94BfzKVnX3PwkTh34cUKLXRKdjR83arEtTJb7tfVZbZxfguxaCFNn94DRfSRhSTqbKPpvC4",
  "key5": "WQz9BX9v25rX4CY6aRirzeVRsjobnWSiWDH6WHodG7obLD35NZ5Q75gG3Uv7tQfGRhfwXMnT8FHWQkdUUEmdvRd",
  "key6": "5uuBiVoXN7gEXpGwteyv6tMNzr3oLhQvSvTJtaZ9S4vkTdwj9MxGm7uYADSstvbEbs4BJgbHb3p8Xw7scESSy7CQ",
  "key7": "5rPa3fpHbHsUtDpBRYPsAfJXvefgKkbMdMFogALgJ5BfvNBGzCtrm58ouypHnQYqTqerBeJnfRXsn2usGArwaHm4",
  "key8": "8kDJTenRSLF78BRAR79tkdUf5i8FzHXVGGDwMcgZoPoAJcX8VfVg7RN828fWDKsDuGYfQnikq162L7R3XVwwxc1",
  "key9": "5DWENyLJAkgMAnxgDRXRVGKoLgTmL1YmupF1J7UHsjvjUvHtgNwa2xBgm6Bk9Fx7fsSxutYeLAmDGDYKUgAc3dhb",
  "key10": "21jojHSH9jmBUieXFryZ8GA3tiy8oYpUgnUXUDofQXwVXkSzGh553uNL5Bk8Gqof1TVCizjbg1N3o4arvpzJPuEJ",
  "key11": "2LeghECRgrDTTVZNHLyCRBGbBDpwbCLTKg3vskYx7upFRYBkhSKhvcnJQegaQJdyGfdPXUkk5DiVef3J8G6qMYzC",
  "key12": "3upSNei1J9X1dvuwzMYwV6fXLdjy19ReNivyf26LssFUbotXC9fg8WcZxhTmS3MGYCw9A1p5mm3KRdS12QErs98V",
  "key13": "D22uPVM6WXTFxi2mrMM1vG9mfo8AWzh6uftcoKQTM6ou6w6ajfFc9rqZYKT9UUUwacBYtjiNgc7PrHStNwxUdx4",
  "key14": "2HHpYfZ1wUeSsNHQMa1niowab4ATLQWUtpkBFuYSBAfUWT7STLsFp67AFhCZhoQqD5DwacM962Yku4oYo8VfUjfS",
  "key15": "4XMCNZbkrKhxQ4AvsRfZfritXcG2QjkHqSEos5n5Cjzp266rcJYJ4raw3qNAYhV55RXbVVoruNgvZSwiaGwZZw6A",
  "key16": "2fmQbFHXqZxVGPz81SMhpRf8dS7PGWUhAdmRQNTGwnWJky1vhWShPXT3ymQt8thargLXhjUbBKiNXA9G4hphWSPv",
  "key17": "3nqbBUoFnnnPrFzFc8MhSrsAvhA8N64YyVvTsfrnk8Qd76fi3mmVkBSJzKATpuyaaWFNZx6qE5andxK2BWKUCGFq",
  "key18": "54Wnd1UkUWwn67PJqTtgSV86xsFTvFk53Y3v3ggn7gXxiAidD5QSVXEWLpiuq3F4ZJ4BnTRypmcXaimezrKcEvUX",
  "key19": "3Q6SLXSDeFaX4eQJUkjhXezGVFvUyLpi7sEJYCNjQ2FZsMvW33yUQ4PsuK3cYBqA8NPM5iJHRdMywcKsRxXJKbfk",
  "key20": "49CXL2R3LFh5idwvWrsfAoTAEUadp5oQicjgR9YAiTHa76XAwEJgYDUmm1GvFWk8JXc6qRZcPpzwjTVziTMs6ka3",
  "key21": "3YMKecCeCLAzcXZ5grVaeY79qs7mxwXJqBJxEYZpVnHQnHxrUgtYPrMWZc3E4L3N1uty1zB1L6WaJTjgC3yQaGA6",
  "key22": "YR52WHTk99qfi4sP74ioFYeDK1YbM7yADneLBNbShTis7Ly42unzmBdgwDxn13biSGBNSa4g2nGBg1q88LFF6QQ",
  "key23": "5zNcPNmXTEcVs4PrfpoJA6WNic1sXdQ4T7ZQM2XQBgyKDf2hnL1VCK1CatTVukeKciTCanDEV1TQPXUurhLckdqa",
  "key24": "XFTvYd27ZiUcundJFEYxraH8iBiXnvzyWEh1tt25QbDWy8BNfmvVVAeYSaRF63a5Not4YqWEGJK321kC64GMFeb",
  "key25": "4zS1tzhPpicvSgsMRnNzmPvNHF8WQ3sMVqCTN9Nh8CsrY6jnhSHhyTp7YavfkzhNYxQAAwkpR2ZYQKgXNi1AyFkv",
  "key26": "4vCdjhMRoijKUr34JfGm6mfWobnw9ZMZo3M14qizjc15WgvTJZoRhHy7RsXH8qYHrK4gEWQyehLexQ5Azvg8fnd2",
  "key27": "4KPaaSeu3UTjNE3aa6Fq1RDYbvkz8YmJSa2XAdkHm2cZYUiqVkrABYdRmARnd9QXHpUgJYfkM5RcYjffXMdxUPwe"
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
