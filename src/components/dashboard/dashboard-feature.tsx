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
    "SfA9jRfHwcoDHL76dRBYbxLpodA3Gnb8MjewWwE83yi86gNpYoWpPkeAnCEwvp66jNgRfXxTX4AbghoF5se2tim"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4abT3qFHSF4Z2Y37ZDeUGVm9bMvqKDEGVoVMwSobtj9C98jMuRphfXLD2722CdbhsU4HC1sjSf7cuPr53LiJzc6u",
  "key1": "5gytNUTPUsE8FQT6ffWnLyTPNXvqMsEHJCnfZgVvCtz26bAiseoW3Rpybs9VUySaEYntmVKsyLgfo7nM1roif4wH",
  "key2": "vVbpuY2jcpqhWBkegyCZeWzenSz6G5K2EPzgfSkVJhqndSBoHyDpdaLvkrLHTH69J5nvrH4Lr1jRNRrC2MMU7ff",
  "key3": "xscCjYj7yibfUJhE2ppBSBPAeoWNiyou2tpe7DaobLBWp5jwePefhTU8EKmVoqRpyWFmBrpNphedj9AzhpAaQkq",
  "key4": "4XSDwMnUrPFbzLHYNGd3p6WfpYypAP52UwfVNhiZPA9UAFMGb8j3n7v51HgnS2VFo2SuDFD9p5YRqiCVaXRhqSUK",
  "key5": "5xzN3Hwz3AoXt9TVJTP8ebRdzfvZCWXD4xSb3c5UqKZXZ7nrrx9h8Z7pPWrB7sNiXLR1E1nB2eGidvjjeJ4cmocM",
  "key6": "cpXmWZU8MMEPBJUKfx4dr2fWZz4bbWQRoFTzcyVLTGQR7tRBVhdnuNQH8SNBsxsSRp1dR5BkNpm6iv4zvLJgKeC",
  "key7": "Ls7nBvXqi4iA5JLcY2fzenBeNuyTR2PBLFxp49V8MG4N2yVapCQboz8J974BRPD8DxVANK3zdxuBqgszsapaPRp",
  "key8": "44aitB7k3ostY6Tm2aAUesLPzqcCUgfiTGTojUWBoBc7PQhAHgq18uUpzpbV6dV8Q8e2YVS4sggK9XujviXPTujm",
  "key9": "kinimywbj9QZYkayR56MSMTEr2DAQ6frVtbJLxvtNc7qey8aZiJUsyAKQED88QGnGPQvASfYUVCdU5mBTrYrjDz",
  "key10": "5sPfKAJJadGgNCHthHimcvHDVRwq8qbwT7A5CGRkzGaGQDDsmHnRX9QMnT8DLF1QzoWtCGts7kcM6W5oVvat8KQX",
  "key11": "5uNEPqyyyckxwhRwL1BZd2GRfsmHSfmBtkLQtygYQN4teTMtF1zaqdPwRD9QKYcibKNbznGpmvsRmdVmKxVeAk8H",
  "key12": "4bCWnf2rSueZ7vaKRqLQX6rTdJWLRXiRhdo4sSTgob1A4EkydW54hpbxTaiAPRW8VTgjEwpNb6yMPpmwWJqnzqxB",
  "key13": "w84kL1Dw3fceK6TLuRoPsP7q6a3b5RWuLLgT4QdR13TKAwxcF9qwEFfRf3HUGAHxS4jZtM6QMNKvp5V1qEBESKN",
  "key14": "gNe8x6P8eYYjFGBDAG6phurMwWRQug3m31vq87nUDh6fxxXmQ2YzuSzYKA5fqLNHB4TJVK7mHLv13XYeJ6Nb8A9",
  "key15": "3X477ZvhU9HLVLYLa8fRoxF4C669Pt3jfejR2sGcBHbFQubts8DJnAQp9PbHQedJptzmy3jdM49FdggwDnnbkDLv",
  "key16": "2wq9DAcyMZW9e81MwghTmTe4n257Q1iivCWEMiy71n84pPz96yd5DvChPaMhFcF3xQwZbZUPNFkFTrq9727fszYF",
  "key17": "3Rg4n6djEHzEMWUWTdK9KQ8oa7dcmAkczS5sPWJAzBqwcjoaFdHKbUPkbJWF8a5UcMBEPMiFyDvRHpvJbpEDWSH",
  "key18": "sb3m4RxroGkti33q6do81KobebQUwT1YjHiHwSDqRhFnkUd36UD49zHSkEtJxA3Zd9iwrSqvHsVtMiA1w8BAMsM",
  "key19": "tb2TWL2NQjx1132yWphFDmocU6uBRpV5hcCdj4d53P92xmLSg6VKjrGKtV6KYCS7YRhyERptnPSrDQJu6etDAGV",
  "key20": "55HNqEmbChzNjy4U9EW8PaewrfhD4h5wMtCFFv7NvFyHQNMspPkNJHsV3SeLwr1jXgEWEYTuoRpAZxArZVGkD2i9",
  "key21": "3zt2ThYqqxJM3M9Q3LTMRhqwxVv6UuumCWycySiNe2KAvjgLN2DkWWWCD7nH4FhzTYX7Wgc9tFQXGhrGdLDeg8F6",
  "key22": "4w2wypgngqe1JF8NrRQyYGhQ4vNgkhJRRZdzKqUCz7txxgrWS844TBdT2S5veK88YsrhXtHzLjna99ipuZhYqNyu",
  "key23": "5rVFQyv6794c6RTdpHM83Eh8DCYkuFXmBq9eLjVQjKW7Xm7iRJY43qESyegC3XDCHExGrF8iak4PPk4u61d8ebmA",
  "key24": "5odtFSG4t232fbLWeHeeCyNUhdztBQuC8AP6ZWk3xDNgdbSvtKuDR9Zfm3Mb4kdqaSaLaMCp8uEZbufXmvUeCnYG",
  "key25": "5FB7s2CK4umCmDxiTT2hVU6pXAr5ccMsLo8zgLZ34TQUhWc57BSv2ohydurvvLBwiShziNg3ScCxaKVEKy9e8idC",
  "key26": "51aiqcWr4tpzdmzunESLUyVvmA3ZHvHwNuPDA6kuzNUtmScUFiVjaGftab8CZEThXnH7fDtGR2ek7hpWUqbUzURe",
  "key27": "5X5EWnTAGqLMxdyv8rzBQr4s6LfRBLwu5Q8rBPARboSSeUXJfko195ccUonSPgSigWi6uzNnLQq3jF122tt7CHUe",
  "key28": "2PiNVs4hFep9bo3VyyUhktEkCn22p7qkHLvbT45MFVyecSy89vrjQSEoipqHzaVVxLBRWff7vCd6yMb775aoTXVQ",
  "key29": "664ETNreA8sHgJAm3yhZ2dFpdc9fVqE4EcYJuSphNaPyqExaPgqgjzhL2vZiLrUZhd9cdnWA32ehrRZqGwtPFqPe",
  "key30": "666Q3q9j3JTpz2MtkbAvxyqiWi4h9P2padoG5axh4BUHeEESR58FwNEMmApGi2LFSGSvjoUDz1eHyX273MKuBehY",
  "key31": "23sVWvJhu6eAHNNe2u2CHKCwYTcVfFCetgk2gyXzU6BscwXZqeyH5SXQA1ddCaFxWCMqeyCwji5nLe1zb5UNmzuD",
  "key32": "bUvaerWX4yiErpJ6dZDRpTAeVWtszU3sjmS2y2v8KprLshkNCS5ma5LQwXXFgJbFHn1Bqy8QzzCy6k6uLvfrkge",
  "key33": "4hDRKNa5SEcQA2xPwgUsvsnU2WEUxAUNVAM6BEvheHQdH78SfzynhqnbsgPPnzF8Qc1BoiW4XZNXcCfmbLD3crfP",
  "key34": "4s6CZ8mB4JYpFT4e2MwMbQHqqPENPUV5dHREcfHD2PzEVJR7ibtR9QnH1tr6avgcrgDmeHti72QyHfsMKd5FTyxS",
  "key35": "3RxrswxaNGMBSyWMA1mnYbNteLtswQHKw8bZPy3Au5d4Cobmc4Tw4Ls1bEZq8LGmJCLUyPp1wP4JVcYep3ZBK5sD",
  "key36": "XkoU7fyZsKSpsNb9kz38TURaGMLDNRtBq4ui7HrjF8AaqnN6Sp44Vy9Yp9DYEJu1c2V4uN2tbnATbDU5vnqp64w",
  "key37": "4b6tpwfcdcsFDvCyRvHwJan8A182ZJbCQJYVP8n3pZB3Dsa8q9iNcGoD2kCimmsZ4MznqFUeEFXzokv66MkXM8ow",
  "key38": "4q4sqLZVdo9F9sAcLbqffWsqVbjcyg81JPifKv1qKwtZm9Nk3u3hXQDsuncNjCLYRTRRKJq4qNGk8KeiZwveZAoL",
  "key39": "4EBovj7nvUGQ7ZifC9PcTUoiH7QhsNpMVRzfoUVhUuJzgeaCDxxfmycseaTrprMGKzpjR83t3KrDGa3ZX6Zg3xhu",
  "key40": "37HSHNXbj2W8qUSCusXnUCsy2GL3t4dD9kNxhxdFSyRqcgTP43zmo4Ur3XLYxqZC3jLZt8pgutwSkzJtB7cbA7p",
  "key41": "EoEpwrhhK3bq8ZJ4cpC48xVy6JpJ2BfbJFb2VkKRYeiWQajSCMZZcFKhZGxHaD8hSdSU93FtKsG1qm6j3Z62LFs",
  "key42": "4zUD4BFkQVF7k4vBKp49embuQSbtCpwvxLm2iJEGnGiFP5GaVB77UtFNcTyTnncE6sVev5nCATKZHs881ohWyUDo",
  "key43": "64mbty8H3VTo8FtVkXxftEpdT8iS4hHuQAyDUt9eRoiDCxekvUu6eCnWUZpR78d3UFAHd6QchVthX1fbQdGRRxKc",
  "key44": "4RnavG2Rk1q5FvZooX8phtJKf3589odKE1SkKU5UkMUTpCdGadg4Domu4qNsUjYeBjG5mK4vdAbr1PDrtoGp8ty4",
  "key45": "26FoRCd1KV8YyW5EwrNSyHnugsdnbs4mNRxmXJaSqkAAdgFphDkEafJP2Ppcuti8CGdEpFLnFhd7JXC8sY8R37n1",
  "key46": "216Xhjc3da5VgUQN4f5u78nfCj3Z63wutJBrYstVXUxgMxNeU9t1XdkAg813Bb2iXpnefj1o4w9GMDdw1GhFJE8b",
  "key47": "2naYcvS5GUoSaeMrnt83sFEmz5vKQoMoN68YQHdFJ11uyFnM3JViE6qDxCQe64gi44QRzz9d5e9b3BVQxThHHrKG",
  "key48": "4VtPFco1MebLK971Gw3ho9zgHd9k1sNxutcDQ2pHZSw5L2PuUYMUGqCx2JJgsHkWFWr1UnBu3Pt6NRv1K7ojoT34",
  "key49": "4nYS9Lwfc9gAM3E9Hzo6AdKwMUhT8UFSzDSBumRtfgzqNRnEXZ3Tp5MgwP2XNsYfTkvE5HV8puaNSDs9Hs8gSWLM"
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
