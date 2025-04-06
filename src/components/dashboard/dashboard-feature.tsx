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
    "5HmtoApnC3uPeAadkaC4kyBYyhmuhtrFuJTkV67V2RmvZeQ3w79PQQf41MbricroeY47C76HWgF6WJ4wNWrP6LSk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Me4QNFoNmXZxkPV2kAnRBX8V4EaGZaCFFKEmvhbpuGkn2v75nmWW25RhumiHYEBMMGVtfzaPVo5W73czS9wZahG",
  "key1": "3sAZre5TVwAtiWJ9kB1KLzdRsKrZJK78Y6vRCxDE8jXgrybcZPVcjdH433twq26rV2iKrKND6hyMYaoxLiDGf3v5",
  "key2": "5bEJPQ5wvzSbvGYcjwSoB4PZPsxcZNBe3csk6BagS1eUZoy8AdrtuYBHHkS1fYNkLETw9ukar6b1i99KcugT3UkH",
  "key3": "65XZeUskEVPThkyuy6cnFicZ49ghXuKrN3DSt8CJGW2wgHFxoZhvmJvnyCTRYzz57fbZAXoT3mtv34NzvfQBzphM",
  "key4": "23vsBZTdCqpb6o1fQtefSjPBBQo74hEcqyA8VnTLGESLnP1hYVgvjNNsWsLMj3759CuqESGi2Gp2cbTBaSt6teCc",
  "key5": "3LBYdTZFJLbKF3j7k94ciAHeq2kpT43C6xqPFL2uSWqef3jiLGVMcze3FBQ4ScuGQh27oRuQpvcUB5FuwJRtp6X",
  "key6": "4ECpjECTMEaE7ugtWhAqA74WY7ASn7cPv7JmVadJT8uaeRiEnikR8UgdYEgvcQFfHQLsYhQ2SamoTAZLCTzvcRkU",
  "key7": "FeYqRvtednGtpkHLvTNqVyFjLiLp4AeAZ1tajz43u3d4JTN9Zix7qbqmEh7Y8DX5LNBkZpK3sraC3S4HZGZ2DcA",
  "key8": "3euREaEba3LvhNE6VagfxHB3aoRZZ3EQPBfWGQiZW8KAjx4Ed19f7TW7EhRcmag6ogAcruMAmVwfQhK3AfKCCCr6",
  "key9": "UMo58QTPEdcbJFeSFiDnJWShj5KU7Qn9Cx1ZSs8PdNkLwzKvAhw8P5aW1CkG6UgYds9EbgstQkYw5vQMGN2GCXr",
  "key10": "4AudNqRS28R65M8jF3YHg71Lhby4EbrLvhz9TuHjerjFaztKzFrcaMVSZbMrzL24H3dYLEG1pSj337ton7KHdWGS",
  "key11": "2eCvDKPysayLAMcUEpM2c2Q5u9fM91WEuV6Gjf2aCTSrdMmXfLM84AbegmywRWLedYbLkmaf6iyZhdu5PZv9tt6e",
  "key12": "4TvdvDHvxCV9xzassJKwEtAc3xVzbLtXWhnFHDrvmXEsSKeTyDgnA96EdvugwBkvocHGPHW338X5ZBCAFwjcLtWH",
  "key13": "2Y8uwdmeJu1HbwufDMVyK3p23RXRgCoFA4c4227bKsNJNS7nZXdConh8Me3uVxDd2C29CYES29eRH5vcGyExMHqT",
  "key14": "2UNbMgYGTgWwWdChV7QHgob6WZho5uD9fjTQeGLdj1rbRtfKyzjyF5L14CdPx2HdUKPLjdXjT4ockwdCt3NJU14d",
  "key15": "3k8fWKYSXtaDsJdZZ9jZR5szMDKu7rYuPwnyAkNXG4ms8gHQk4jBjDb55Ad8wL4a2aKEsq39bSjAW9fkkBgndEhU",
  "key16": "bFM3xCEB8zyaUVi867rAegkZwC5Ac7z7AunwB9FBr4miPSkoXt9cJiKhgB1W7ep5XgWRV92qAYmYMWTufjfS5b5",
  "key17": "qubWKNbWaZ6n6EvntEdgXXkhcAnXgJFzdPfn8gWKMy6VMEb37BotM7NxF6niJHsShJe4HBcG5U2Jb66VCnvGDcD",
  "key18": "4SHRmEaz4S5fC5dpa57wspPgcjKNhqBjzjwFEcRZ2wQMjrgcp6XsmUrsHSuv3KMZZxYo4mwDSGkfyVH2smQHKmHA",
  "key19": "2bzRLfEnqT7SWPumXHo95tgHf2YtYS5PWMkLUSzWPkE2m2VPCyjL6DCsQt2tBRyxqvs4xg3ZyHibBGvYdh6vzjdq",
  "key20": "4WpsXiTDaZfnusTdsDqwuRi6zEZsbkWrnMs9bQNvoCgvA3z7oiRBM2WE34uonnGmEHtykisGMYhVuwEanvAo6qqu",
  "key21": "5BUXh5TXxsF5WtUDiNq7p2rc7yYgoJ7MYVzRMpX8pPxMNaFqjmKFYnuJ9CRDry9z31HdjvPBsBad252vy15U5Cbr",
  "key22": "4CjmXjLCTnWdZLoqi93setVH9ebXNrqAFHQA3xNoqMDzhGerr5deyy12uZk5FxXr1Rwo8eyrt3Xye7TENy4jKF3Z",
  "key23": "3isvASWfR75SpXuCZFU3CnNrrTQyqjmDUi82ShZKSLmDAdtWbpZkKm6evsGKVxdssv1h4n98TaX5BvUXXiRMmQPx",
  "key24": "249xGJcRV1MPHxYvvRWCdKPhC9MzgUaRuAc84ToUW2q4SeAAm3bZXdUXt6G3cnM71bz7xWjDQkLZ7PirbByDTxSG",
  "key25": "5rGq75iLQA9Nog2ciALEUJF8Tt972ywyUHC9r6BHYLoSyNHeDc5ecTgmaKuYY5YRfimDzXnuzw1oUGHRyFcSMLFX",
  "key26": "za55zi54y9Ydrf7fE934auVFsrQtTiVqK54rsWyNAFjkjCfx1g3j3B5m8jETrorJVy6Ps3M1QMockVzdT1qnghU",
  "key27": "5aKVdsyDv6eVvYm5NxjVEteGs12TVDSEoo5zrxZMbwZiCWksp4DSDVdiRkEaiJAoYTQTW9Mtv3ccrGz1KqeMwHZV",
  "key28": "WKzZyuTfyWQicf7nyVwPDxETfGfVSLw5FzLfuvBeETYLJMyakiTT1HaMiJAxWaNT45r87ScnoZBNcFTrRTwMo4t",
  "key29": "2hDrYR88dwgLHGa1kttJrpTfnEk51mEJxWJEaTbbEGCQ6MANCW6qYogSKGQ1F6z1DZbkcbHkFSt6igHgHJoc58cQ",
  "key30": "27YrMy4FvPBFL3HnbaWZ9erdDpVxXRmEjYm2Tr9UvkUdBCFeQT8HFttxJf2FU4P959exG8ed8YtCdp7XpiNrJf7n",
  "key31": "24gMY2JjQzihBZQAifQs8XNroPF6xK6qi3oAVoFjMadR2SfbnJevKPDsWBmVRHexRmP2zqanT6RZzPkJFN8tDVcW",
  "key32": "foWzu4iBBw9ggaDpuT3oGvrd7t8GbV64E86o8ZrT3JakxyZKczU54vaPkqcctJ1SmpDGmozSjD8bW1MmFgkXjhN",
  "key33": "3eFrzzqUR3RnbBYzSQmHTNr9uBsVFwrHAhZXDnruD4vh9tHCRpdz7BobTbaBUnQmeSUiMGfypoNDGgTW4Bxa7rQN",
  "key34": "2SfRUoJnRfxMKP3soeA37jtvvgQBRSfaKxn6ADXjbxBzTzgfzecW2hbnzLUC1QndTuVHcDAvrEhcK8mrxhuRMR43",
  "key35": "52cbar4hZHAUcpyv7Vm6o3jd5P2TZYG9wfv1FAZxbtcumEdS7pBtaU4VPW3ypZS9eSEqHfahDYWUe4o7WpYbnBqy",
  "key36": "1KXzimFAQeFjjovebicM1c4Ebvnp37x7TNSyRVpoE8ZTSKbgPVGQXoh9NRJCdK9vV2M5Uqxr5rwjQjXzeEu1GJ6",
  "key37": "Tt6xa6Z4DtA2sbz82wwCQuszwoY1bQsZTB22Hebe9P2VrhShKPQf1Jnvcr8N8R6u9RSeyjeLhzeXoHzRrSRyB4c",
  "key38": "48WBNpMZBWNhbz5GrsbSbFtFiQySG9anbCUwDMUijR57baYERuuqb6hJ56ZRERdK2T25bvsuHoFyBXmeDbceBhJ4",
  "key39": "5bxb5B6MziDLMoNxSLyCeq6vzbhGjfaFg1Tugbsd7iWYnt24QUMZXrcL4tybSUHHeziSn7ZSVUKDrqKXwoPaYFVz",
  "key40": "4nPekFzYcgPBnACpy6RVN5Av4Kq8PmwedzV974CGwV32dqezyXPf9Rwv1FcZkm3j1zuECYKr2ovDqi1FZKQkdu7q",
  "key41": "644YxAZMjkAjyf7oQBnk3fSnRzZ2ZnNyQuMxrCn32gpdwFLNykkei1aCfwMuUKU7zg7EjJaZvUYRcKwXajuia3wa",
  "key42": "63GGN5qe4866rgqFn2diQ7cWS2z4hamjHsfQWaZem2rpoL59uqXJ6wUBADeQNy4khWinr47znjNL8fFTvWGXPnag",
  "key43": "5ARcR2npeeMLP3i6ySC2JX3LCcuJPNhwRWQdroHMKpUC8GScvJxwHEocyAqgcfJchraCPLNHwBS9oMDiG8nMMxEr",
  "key44": "4d6Zp9SyePpgpgaahXVy8jghnb13GQVGTWfxipC25sgewQaPPg8DoL8o5ihMEN7F4aEPcNvjsjEai5Ba5z4cJgpZ",
  "key45": "4gVJZ6qJeSKsM8xCqkqStFzT22Rk3Dr53W6cquWRuh6rF1cdGo7CauaaGHXy7WAjRUip89uLuQcNPuU1h8JxTtQ4",
  "key46": "2H26LFQ2ZdgPWgbwPCF8rzRFh2YGCiAUzWTfh3yAyKUUMsi3n49qBhmQ9k3acMzFSpfFhuj7G5joY8vsHZ9xc7iy",
  "key47": "2Rqv45ZKkrmKN11S9oETryyX8ufSGtoTxW9y53dxZXtjebibNnJ3SFYgxKZEy418zFsnxmAfWkE1dHUvCGbiq1x2",
  "key48": "PykbAcaCDzr3RqHjfE79CHU5GafAkZ8HeJsUV1pEsYHZ5Qf7RPhfir2V76r45DNXRUhAj6Y8crVC1uRmsPYq5KG",
  "key49": "1ESUMnXDptDotg4xeXH3FXdyRS3PJXpyoWaYwGC24fHMmwhNarihJWdLAicrMBdATwz8f7BoUMh1sxQstLyRoxt"
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
