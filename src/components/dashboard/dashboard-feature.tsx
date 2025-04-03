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
    "5gFe6cEhSKXSPh9d1sfuWkxaw7QkwAcCkNhZhFxDPePEksezwdJF92nLTLGC5pzLUPGCEJ91cADhsMxixRQ7v4Yh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5TVpouMQbpkzjEY1NZVoDHaPB8pbHDFcfFF9RGBwVrmM1RTKAdMpnQugYAqmgBpHENXTFvrhmY8sy3RXChyhLLQp",
  "key1": "29spXXTUQU9nc63M4pq1dMu1dgYcm3JiCd5Wff7MCwHKykYkp1MVTha9jsFA4Hav2Gj7veJgqBTudcBTeD9Q1GnZ",
  "key2": "3S9Qm32UwMASKGTSCAUK7LA2nZv6CZN6uu5LerkuDweiBrAo5a9pRoXeJLEpWd7FP9d9QPxuquNcKga2C5SN796U",
  "key3": "4mEvLDWBDZEM9wTY3L7EeZ4exg7EVLX4SFQScxh1FP2uULtcAowHiaS3HX3oweeNgRo83k1WqABzuTBwDcGmTutm",
  "key4": "3yGH1KepGvcJWBWbSvHjbkhEdHG7xdeqfehTLTQ1TmtfhXoKAfmeCTZYAcbxSDaaZFouTbYsPbX2k9ktNq7AQ2UD",
  "key5": "NKXWEGbZaU85wJW9wBuBZ23YDL7B3MN2AbmRGDbGFCWcxofibV9GuFSzp8RgdcHuCHG6R2vrseyDG6S1YQY1Kq2",
  "key6": "36TzzgKPy8zZ8hZzSFwz92e8DMY4UuaGtXypYo8zMVcZ91pvyu6EZyVfC3XmwoCqWKd6ZZ2RDRVBPtyoLfB82S8R",
  "key7": "2MUvCJPBECPipjVYmyDzzQYEf3GdmRkqiU64wmR5kZMqrLxKAzmy2p7qTHUmSX7jmkb6F9d7yMDfHkUwjtF4UZzA",
  "key8": "55CrpH7k7MbB3B1Pe2msoi63DL4sd83n2qdSJXSATp48gKZkTwPJcwrs8JuWuokym3DBwvRSgP6bwmTr1U7RfbK5",
  "key9": "4tcPJso3ijnUngUsXSq6Z8Gr3NnFrtnrYjTS5k8MXH4CehH52THvgykda47wzVHwKhP2q71swpdyZmWfZNLznUo8",
  "key10": "45BCh74aoiJChALL9iDF9fN6jYFjnLHR8R5gdktWLAjtKLc9GvwtyDdKENWL4treUmvrAe4fo3tneS3MGaZ8uv3d",
  "key11": "2c9DonimXNmDNSj85JzbHp125krQ6wX6XpnDXJxDY4V8f5V8wjHExGPKjusTDXLnB1B51z5zUt8mVxxn29YkKLDB",
  "key12": "48bapDPHFTYsP6dBGSTWQosnWjBjgZUKHbXJnvAioq5uCwiW1rVLcfwJuH13mveJBQtyQqSLAzkqu79apozToqzT",
  "key13": "5X2uM3iL5RMF1y57vd7LLNLXjro1AUhkKVmDYG9F3rz9eLzPyxRx1QN74tMtCRAnChJGZsCmDUTF54hF4dtUtk1v",
  "key14": "3ZFeuHWrxM15ezpw9tnHq6yRBomP1XsToKbjL5FYojjNZroina5z1MUibv1dNTpuCNX2p1x2vtwuKAz7H6wn9p3A",
  "key15": "28Vyd8F3bqentnBQ2mcx3ynEVoEXGLRFZ2V8KGf2WaVAuXsAMZVrBRAPL3wvZ2HfX3LYtv1iykusmAwLMh9sVX9i",
  "key16": "4XgNwTTJc72UKQV8eP1AAFKKY3U2dZui1z7eFd33WXJM1RUgRU71xupQ5qYJe6nPuTWHiqbNs9mDvbkUoA1Bv7Dr",
  "key17": "2SDxuZYRNjbbTk62vvmSjgwyhTcFHqFGiRvTocmFHQjmnES7Y3S4fDoUastazY2FM7uszYAJw84hnnBbbS54kTWv",
  "key18": "653bJcQXy2JBEhvEhFZSMTAHaEgSCk9rUw1UsTYZA66739KZ2Qv6etR2V8q6JBZGA6jV6DaHUU78ib8nE9a3pD6U",
  "key19": "4Lrjq9exKAXBB1mV45N9zix96vXN1oncT2bvQPSSyTtEua5ziiRPaJV9kbsvZMVj5wbgq3aA7GVHbuhmprgxyCP9",
  "key20": "58uLHM6v6KhzPJ74GAnmJjoSp1jUuwis2ACpDAMAXM7o5U958hJbdMAonKgGqqsFcpYH8W8nXbZNwUyXG561zVqn",
  "key21": "4PGBtWzuJs1oKWRJcpRtF69KSsFF45pftHyigszLoQQiJ6QMAkbd7PFk38yXFxDE61TQpL36N4SFDvLTHZpvhxXU",
  "key22": "2r5vhUbdbouw4KyoTka21xbW166QFkf63pZK5dwxVJfntSSsCR6nK3YYyoEi3tCn4BsDqEwxpYKxJozsTukGF6W6",
  "key23": "FNS2ANVtQjc8AeR8JUCf8zXBjvHDNJSAAfHUGwBKFTZVUsuKgv2znYSTTePUhdV1aig3BJogPntZXT85e4qBHvU",
  "key24": "rjQnX6nq9T53sXySbBH8AK4YgJ1uQLvXqbWjEsmVr7vmKffN36rXaSPaqTBZNHbpHPkoCZHnKnREUtLydKFqpzj",
  "key25": "57AKPGzELAi9iWhYwpcSfWMfo9kXJb6F279pezuczKbe7spLqLWcg24v4HDxeNLyUhHmeYtXnDioeQwwQSLny3Te",
  "key26": "2xCChhLax7VseShTDpsgLt2okYuq8V3hv1HoMtWL34abiMon5LVt8KmfVMeWbcpJ2EuJ1hvAVYBoUb6oMgMFYmgV",
  "key27": "mqaNkhbofZA83o93Kce3FJcrb2cKU7VRDdeR3TEFmQiU6LM9iU2TyqvmhV3jrMVwtsFviwiDPhxEtoJZ1qynFeM",
  "key28": "4vpYtdu29RwacGqjhyahRQo1Q2SfDa9y62VgJRdg7TekGZyKPh4z13LCGX5W5TumHbgx7MsrNTRpsYvbC1ovfu8k",
  "key29": "5okms6noy66fZocBhi895Yym6cD7D96FZ9zyu1ekgcK1Ki1QjcvDSNRnWozwwx5y25yBP2JUo1D8Y5AiuwEfWGRw",
  "key30": "5hhWvLwEjKEzYSGufruNTLNGGuNJ3iWQqjo392ToHnFAiQA8RSwvbzG8KVWmR4E9sVd5W5oNbr6VoZpyDroe4kvA",
  "key31": "uZwJAxXBwSRgtezGjvoYah8PdD94EcFuHiqLDQA1so78LV5iMJtKVk1rzyFfZZrNkiFuM3dbPpYf5JfZyywUr41",
  "key32": "3Q7vxGGNZ4QwkhNHvR4cRDnxeUcsq6B9ve7gzf9Jodqgvq9YHUUswgJiq2gnDfMYZ8SQTCY6kAjHW29dth4GdU6X",
  "key33": "5GXDDkQ5pdzTBnxFo4sHZTkDZuhjeX4SqqNDf8fpUTeed59jCKDr2y1qhmrbSkBsMx3SFaWktZTULgLhi68JAwYz",
  "key34": "64eLCSDAixYu6AJegzJGayyGCQ4CXYaXKRibxHAA4WxE8jt4Taz23RGLWqrzRUekhGG46y3oGPzF3V2fmYSUtC6p",
  "key35": "3Rsk4qZcBk25nMnKXoB1DYgu6SBMm4iJfuE5P8ykWH88LdxUwL5p8iZSzCYkDVeXHBXpVVRPiZsMfTE76HGi6YE6",
  "key36": "4qckariQnRrAf3tZAGLUsDm2vjT6sQUquRsJpyq43mjH85k3nKpEKzBX1wgLfPZCGi8pkz7PkeWZ7VkNmfp8DoJe",
  "key37": "4LPBKv3doe5u3H6k9DQUtQ3D69TctK6qeTAVPkaVv3dC6GH5pkuCmGyacafnobXYbUXBizKW6KWPGZN4JYffSW51",
  "key38": "PXi7esXQ3tY7AbZPtroaguoP5SJd1aGWP2ZLF1DgpXmMDNrxoCZTQJxrf2Bw6pX7WBHnwkCrrisJQ6Pw9KuKRdo",
  "key39": "2o7ihV5QYyRmrVMqtwLZqUt9YSnWpTSheYEDNb6t96caqDcvXs2xRmGTykW4Qj46RebZ26ikigF8uEMpV55oXNdM",
  "key40": "A79nDHYcXLE6h2ePZDv2jD7BF5aiHGwAiDUqnDZpiJBhnVsHCPN8w4g1X7zQRDyttYpXgnq3mRR5m8xkgxKbNbP",
  "key41": "2BHmmGdjQrgqcbxgNsU2qyxnbFeLms5CbzARhh3U8RjSZDyqsFa6LHB7mqKq5SScdF9fHHUS4oyLV2vxsXb7VQRM",
  "key42": "4fQX977duwPZGGUcyiH8iMarktBWTpA1hWfMjUThxCehm5MwuGjQhbzWnZXg31XEopKTnVkLWC9pyAxJMVPp2dSv",
  "key43": "2LpRu8vbrwTSpiRQ6wfeCoTdwsCD4XTVpex24UFq3VH25H61o4nHQqCNE9TSSnxCNBvPUh9SYaFxowErgKnrKJvj",
  "key44": "7wXNbCXkk9H1GdMvKUtii5rQuWMVTTAWNQy9C1EPbiK6MhxB6TchDWPR5HwXjfwHiHkfCkivhuXUACapjkfuVLn",
  "key45": "2CaiaHBYT85ACDS3Yfwjg4cJyzuimD5i4qfzudhUC4wmzKsxhCA5vzPrPLXJDsmngAPxrw8AhC34UYv2o5mPFK53",
  "key46": "2bBjute98XCAW6PtUwZSHX3Rzxmame5YqozqGeYnXyJDga9zhNNxaBK5Bik8oBE7ZgSABVLnfF2JBL6CikF4bKsH",
  "key47": "3fAKkt5PPgaAhrVyvsi4mLz5oH5xRtDwh9J4UU3NNWgAAwGkCAFwhhN3KagfNZp5RXqPePTKErkfGHTn7Q54svPr",
  "key48": "2oQ9F7vAYsueCzXiAqQdTofw9N9kwHEMAb6s5ka6jJhpp3umcP8hcFBj97m54p3MTRU4Q3B5AhWGJHDfXSpM3WnT"
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
