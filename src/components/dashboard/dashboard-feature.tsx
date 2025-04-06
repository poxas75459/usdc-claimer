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
    "4ymmkvGPedoi6EXM8hJLxtfbjWam3Wmc57k4pgLzb7VJBNXaJ3USUswSAthjT3HEGuJvuHyfpHxJPMRkjA5sgUsz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "BjtRSkdL1od12a4PqLimxd1CMcHbPSTfWEZuYbbqZqScaCdg1mW7BV7HKEK4tchzM5ZYuKCvX2FQydtiKoU3iEf",
  "key1": "dVitQyXJxWR4WmkkwLCcnV7Pjr6YodwmPCmHA73iEKKM2kbvqrMSUoAtkzxkc3Dm7sokgLHvxTd1eaU9VFN6StY",
  "key2": "38JgR7qrx7zVoJ61tCc18Wmdc9NMnq766eZp5EPAuqhBsx8LE29oqAd8SdQwtG6G2LWm98Z6AfcckngR7TveNxp",
  "key3": "Z7EckabmpgyMV4Wbi31n5u7TyvbmN8ZZthwfepmMp1JEgXkogkAzc1JLbr5WUoSvtXc3XanhD7Bh33yNeMvRQH2",
  "key4": "W3gZqCSoRoAqQjxHKbQuaWz7RtJdgVmY75FBBwAurj2ZgWfiGeQWQUM55ERHoNcnZ4HvynrrYmeiXW87UVzg2iB",
  "key5": "4oFCAU6mKGMK74Z7AoL2TkVh2NXM1zQvXTLchN6W88kepTPPgBqjRECjzLWK1VDCpnMFRS8HnAX6K7cBuupzt57a",
  "key6": "4HBBesBp9DirM4groBPssZThv9smYH7PP7bZjs9UbXZ7mHPF2HVVRoyFqbDsVL7wokEhc75Z81W4YtbbZRbzL52v",
  "key7": "34qs4fjvyxgG9xgSA7fw7BNrPXUhXaefcQARtf9mb8wVbbk3SgD6rsxxqRgxZPeAiHuy2aE2DiWuCivrajc4LrdL",
  "key8": "3QAWV8LoHnGnmxLUVhR48a1oXiXHgWhgKKSncpT72gPvJo5qViJX8gsRDPkRZg4uT9iRvoJGzvaiwK6JGg9aqMjV",
  "key9": "5SJo1VGK3xvU1kynpevpaQbKviaJttf6FFK3CXVEm9tveT2rRmR6nMDadLm3ua2rNK4tqWsrcWrcVLaCVprLgVCj",
  "key10": "kGTSRDaBTKoqbGviuREgUBmUND1X3XhgxFohKAnpzt8XR7ZFQC6VaauSX61zdni3PGCeQXYiD8ayktrCkhVpeWV",
  "key11": "ykQF6kJUHXx2Jz2zJa7d5aWVaJKSNmDrG7jbZD4EVBn7z4zdN5Lzf9nQNRc9qzx8ABwpuYFfrQtLwj8DbFMFu7K",
  "key12": "2j73rJwiyycFyB1NcAmWUMS7kECYUjzHqB1GSCkN53UtwwjdMMAzFTGGcJKX2G6ZMpAQ7WGhZbWkRu71u7nQAQMB",
  "key13": "4ADNC5VjsBpyJRotPnMn6Jjxe9sAAcop1cqksADpkZ7wVdJXefRADBFcGs36VGRcy4q4AcQJUSpaiu2Fcb7ricW2",
  "key14": "3JhqRoXp39oELWkdCxRpKQZefwVJ4QMF7t2WYGVPGehNP49Mqkjy82EisA1DALxVHEvXfXG9TTAheFGxK5gWuS2a",
  "key15": "2CShk8rGN6RxCxSNGoV2S6xhAKd1xVhYodWaeQba8B4UPKZTP8Hiedm2S3vKjCHEsChVmzcoHHN17dUSPWn8FnLa",
  "key16": "4jiB7aTDDDaiuCdkEWvtrvogVSR6F31aZYTQWVN3vGnasNd6ffP5s6vQzxxjyKMWfsqcT64AprbBeikSR5iUyCPy",
  "key17": "ktW5g9drwaJ6yjRTaMe6Xh9gEhpV8KZnZfQWk38fDrLc2GFypUWfgRKKdvf64LLCAEWFje6M25kPipCdjPbssNH",
  "key18": "3m4HNgPK3wZQ7GywrJZLmnH8rLBTg1Wq7umEWbh76GYEkC7U6SorUzYT8nTaV3peu9QgYpfMmDoZjuW5EDu2dZRL",
  "key19": "2eYj7g3QsSPW7VgvhVzghjhiSEqhW8Z6dugQVxeVkuW7NwZysA2wE5PWyEgTEdTC7XtiriTt5HwuHwDpd4f559XE",
  "key20": "VnbjqQKUVUhQG5ijBVKWMM4MGWKJ3ZGRU5xC9hHEZhZTbxvtHzj2kZ5Jpz2PF64XCDMcRHgnmdobGG4XehHy5sj",
  "key21": "5vmZb5E81NZBaVX3PTLhJjMLNTdmTBB7W18WkNnqqeR2Kxp88RCAMvAtibFn3GBFzsCHFhFqVLGjgjv27tm2xXSy",
  "key22": "TbFtcmadAfFzBGHNYHdHDWp65Jnor6vh1KCsWt2QhhhSHCVwhYRTGg1K5B8CaMEC3Wu5VXRB7FzfqDKwiekbKEx",
  "key23": "4NCwc12Qfcxo2PLNeZwUkCxf2vxLuLM6e95Zx7jee5AjNWoz666VuJxTb96HwWNJ9NNjc5aHSbSZhoG2Zf1hX1QD",
  "key24": "53kuC4jsjwfThZrCootZG7NXcSkdvJhWQC2V8cxUsuBV97BjJxSDVSMtBbYMVWgsDBnDhsPQfhcNHGV2Vh2fPqtU",
  "key25": "2GF3qitZRGxdM2B4CbuC8oXiTazh2NadMpFGm22byyDzxtnc743dfrnvKZrfzFQ5zekByqXywnjxu3ohW7E9aWEG",
  "key26": "5BpAJZa8v8CQY7RHHSFvVnsng1v96FZyrjfpMJhBMQDXb6n6St3V3gZzHfNCvS1PoLmrgnpE4dzpFupkZs229pvy",
  "key27": "585EQG4mfKiHMRhTokxdQJxsw291yFgK4T96e5CC6GEnRGWWSjuFK7JCuJt1XHo7eEMa5Xu2YXT8aq8YRHGHVQUQ",
  "key28": "2gZQFTZ5hgvp6sTNHyu53cFT3sUzV7i3MhZhRjmhSxTh6fDbrCmFNF2k8hHvQdQmJ7Wky4HCCrUFtK421WVudagg",
  "key29": "4Dz9o7Xe1Tu1irS55uyDJhjuEGcktnh1JxwtRRzwRSKQrAnd127bMy9aX72ZeVmFyvafVLuLJfmK2iiSd9gG4u4K",
  "key30": "2mYocKBDWiPCRrkbM2RLW7edGdSFLAAEyiU4Nt8h9FAYZmPWVrLFAZUe8w34Mi36YAXUpHQRTNKZNNMCxsxQaDet",
  "key31": "1usuAZrvsBJi5YTM6WG5QH4XSnh1UvirWjEFGJsMHkzEY41TYSd83NCBARZh8bgc6fjYTcYrX2id7SsEQLvxCrA",
  "key32": "36AdvSQNSQchFKVSGyu5Eypp3sjRGpSj9nCm7LvNimZtjcmuMZny1nY7nFG3gF7BgYadrTg6hiqyBMwL4MXf9FEU"
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
