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
    "2kAR1DM9KVqoezB9DhDYrjfnaHWWBWk1DNrFnTc98CA741hTH6UMD4J76te6huSeNdx3yGdFryauewd5nuSoEjft"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4JznM4JsNYGRbeouHLq2RZAtFAEFPAe3EBG1Hik4PPLLhHJgXeZkH3nSM8FGWGG6CLxwgDNZp9a8Gy4AjFydRBs7",
  "key1": "3e11Gq3TbD5bpfP3YXGvJcMbCqhwQX31XqaWAeZQU4jvVJc91MV9w3CzH7Tx79b6AoPDA8nHoH3rsT5f2PuhnKWM",
  "key2": "51cY7oSej8W1uHA95wtXjzAmFuDgn5NtJVJrrGFRiqAj8h2zEwQY2Y7KySQar5tvN176QdjafKRNq32TYphXrzad",
  "key3": "57AcEq8iCTDLS7tNxcyHN1CDR31uc3jVpcA4nxUR2NkHVhEPbMBTRSjTaZNk86H35J13w6LmFqhX3VbaKks8VVHp",
  "key4": "5bNYCNn1kCumNogJnTuKj54CSxi4T8Pxka5dBHS86wX18c2uEzqrx4tzfazuvFBCAx9gyiyYX6WvjffabS7Uj1te",
  "key5": "44aUtZgJofpoVgT7P6VcmKFwL8BsXTB4eM6ew8mKq4NYTV7zzwBaVzruWR4v6yikjcT8z165N4gc8Nq4pK6Q3omQ",
  "key6": "5vx1Ry7TonsHY1yhuHdsXSoyHNRgTQsuMXsuS3CD4sGSbsQvoRtCMeVKxrr2divvMdqCutxjoEwpJXob8PTL7krW",
  "key7": "2qSnar8nphjmJYMUNeDtJBAT2TUeWxoEsJnd3vLRzLWcPG7JfHXEQ7LTbSgFbQ8QXxKXW1rVXVUkxCjpGhQFEDpu",
  "key8": "2L6ZE5XULTH8prREwUTV1zPUCHm8YWtUNBAWM3jEvvWW7E2ph9cHDXzX4Rop82QubhEkWJozWB1GDacMdeSyX29E",
  "key9": "5U2tnmYRMh1s83kYHQVA11LJ3ui5gV2gCCaAAzjMtqqNsdiVpxr2rVN1ksAqQdR4jpUSZcDei1Gg51YpdNt8iaTk",
  "key10": "4vme4wtXPuYCHxWZHNWPS4C4WV1a2eV8WpCcTdwtXYcnEUVDg4aGP9pMoypx3Rincb6oPtRxNpd78RDsXtMemX5c",
  "key11": "qRdaDufQXkwxU8nn5j46oyXNFH771DqCLtffExnK42xXPgTuUCneaNoyRVg5FdZx5Af46JG3YPeqT3Bj9DrCtvF",
  "key12": "5zAsMRMRbNcYvx35Fma45Ne6F5dqDAwjNmyd6WDPYN4f6fKsLDWbKz98XXYgLMKnhJtsnNn5iTSyV2GxsCuhuYy9",
  "key13": "2wQAYrQpiTUsmxhoxmvZekNUFVrzJiKhAY2ZD5br1DN3f7r54LFJ8AXzhbvjMxaLf52omyfWRU9xWi1X7w6jKDqy",
  "key14": "5jE2pPGjg7vnz2BvLwcc9cGZ8CQgAs3kbcWQkBkDjsCZpyE8LpgtoLrUjRuZc5L5dzbs2KZAqb5arYdUvfJMdnk5",
  "key15": "4wqY3A6Hqfvq6qHH2hV3QNf4SKf76Xm7DjCwUXduPQHH7HqSukGYV1G3gKvJKuYE3sYXic4GjRjReH4dVZdiQmKV",
  "key16": "5jmuvcCQNNbrMgLe2nsKE1PrEdvhqLqzXFJ3M239KBaxHNsmgPqipTYEU2txd4mSsBMRdXTTYbL84oNTugvtSQXT",
  "key17": "BUafhawtSdn2GcghrexmkonGuojZawEUg3fhtivDdQiSFGM4xWUbg81qEbJSw23UfjXJLXeU3yTW8tzePXQbtC2",
  "key18": "5gqepfyVH4y3gDFzEV7ZLotJsd1VQaABV1BufyqRbuEvYfpdZviodCArzbbZm5YVTizziEYz9LLLkbXebNHbBbPT",
  "key19": "5p3LD6HMY3WU35VwcVcxr3eDPcUGiaUs7zVjNTgBPW9XSQ53pqTiry41wkfBYrDeG4tksf8bS9TQzCmJtwhQjgfc",
  "key20": "3NvZfVLFxeXmztGAD6PBHhFNcMRZM2N4c1ggHVPb2pRnTPCNy7pZwhcPCDqJMcAL3TDwHeYAaLyZ4ETV4hAcCj5b",
  "key21": "2RRaK8KCpEz6xgRL6Ev5Ln1ivEw3nQvnhE6bUgGNWv3SNSEdieKZaxTmHv91SX6A5a2X2i9Sb6zJf6rhPc4mh71N",
  "key22": "4T7Ewm4B2JkXwxuVunKyiFcQ5GWDhdMFB22Lrsui63hwraCiMhe4cC9R9DtQRXdocRPUARqgpuBZmDgmsAXS9CdT",
  "key23": "gdFyBodxcfYZy5UnFS5MA7Lo9o3LfiXcyfTMtK5QF2TuidfukhjHLVdE7EBVjYWLusdaQdmAAfDMkyVVEafzP7e",
  "key24": "2P6V7naqA6wstN4iZVKUXHLevrBy7umpaupgefnNZeJkbB8knVHssq9ydCgGZvtVTJ4dPhXHo7sVGy1UUxWXzf1S",
  "key25": "2vLauDNqXGV7aJx9iU8H7d6iVSpdUucRXqQtFkrfK3hxghnGCPhTeTv6A5go3h67padMZEKuMWHwyb3Ca2fETAS5",
  "key26": "4Kue5Ut4EcY2jGL2K7vnpZuHB9sBjXAQhrvyLqHx7H69uQUebFhpREaYKKpRs2f5nTMnopoBKHd17cZzvVpyKVmc",
  "key27": "65962Qi7yFY2Qp8mAXhNp5RR8g4S8mWLNo6PAkw9JR9AW4N6MkKbABsEPj1X7rv1ib3wKXdnjBNPXocpbxbC5G78",
  "key28": "2BDNcrXsDCU8STsfotekSvoh255N778ncpYmafRrmyeQyNKunVaYnhu2e8yu4frtZM3szZkcaVwJ3QCMXCPYKnKc",
  "key29": "64rhpji9v26UB1UUknnDhyAtj2btongRyixo171Tsaymq3ec1ixAeorwLHXuBPELWa3f2hHpdipSSCE6BKrRJm1V",
  "key30": "22WTeKVVZf3dFJREGW29CxjKuciPN6df25ihbjpCtSsiKbUrzN3NMAP3J4TdunmqKyrqt3xC66UZcvsW3WRKUd52",
  "key31": "4KcdtQCwp6iSFkgYntj6AcExifhm8dwo1DhwocYh554MtWDWKqWwydNoFXGjw1YuWDvp5hJhptdyk7rusAiZCtij",
  "key32": "5Nfouz4KaLA44Z73iuuk1cjcB72jiGXxCrXAZ46nRsBuH5RwXCpJ5poXZZovs9Uuk9gvCLRcSk3D9qxL1kLoNDPb",
  "key33": "34veptnVWkpigcN7VjngQwj1KzStwp15NM7fFod2xtXdYqKJBc8NY31gHAPHH9tdXyn14wbYDYezfqQaU1TEiVrx",
  "key34": "27EfTowB9XMYS6yHwB87uxCWWb2KVVuzbXtjJRggaPJTAsaMdFevvqDyqN7XE5CbN1Sh6QNKfSZQ6Kgrk26sWEZF",
  "key35": "4NKjt7cuUDGK2XQpi3smmYhZJ8AguZV352xAGsfwhpVTzu9f4jwnTqbs4DzE8ngBk68qsaxNPHFfPBsLhve5UfeU",
  "key36": "2DayqfBNZXJiNtyuPdvmNNnHmpg7hf4R3U46He795nE6hwV8yhSJdbbdp9d5RNo5YHCmWEUVCfcTrB8aG4NeQ7hZ",
  "key37": "24Tq99QjYxJuU13FFsFokRuNZfqkVeiKMEzzh9QsUCXnAG9MyS7CpPZijGVYBjcBT5JenBj53WuFLZoH1VZwx5LH",
  "key38": "5UKTfcHnCQ6qefQguxigHbWzTd7dQJXJPz9d5HZmWNcf8ncBG3JwYmZxtB1aZV6F8UaZUcesMcPNYNoiLqKaLQmM",
  "key39": "2pPKwpsDQWhbbAf1w8dgJQf9LHL78E3pLfraua4CAEyjwMLacCEwbtuESPncHVueTMPT4voAfkk5kdngyMagiyz6",
  "key40": "4Vsbf2exi5HE3PdRe56ftdAsZCRNGCV4tEALkyAzEC5gPV5S91hDHiHqYZbh35DM2fpbkWLWCaFrBQxQWVJF9koA",
  "key41": "23gf8cMvzYepgnyeohxK8oQxG3RpiXFjEVLYnS8Vp29tW3JiTHA5dKCpW4EMctrMoqA9Pa6RpKtF7evgB58BT9zT"
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
