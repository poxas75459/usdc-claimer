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
    "4s6DsXEVQqgN2aQczAwuGGMPY2pmKYVyHUaQdZSQT8CDYYUT4iAESxcEqNzm8Q1Rucyw5EoRmqCyEn8NmUPTeg4w"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2zDH7JtKdnEEvJBbnUyqEMLuqFzXuZY79ToGB95LdaoWBLGeRgurseGYJVzNxb1H8UndQY7zuDtzHpgxLZBd2cvZ",
  "key1": "3AqrMhMgsF7T87E5JGYfCvtMGq98uDpyoZChuN5ma7tUSUm9K7oZKW1Vhmow9dRvrRCSRT54Ffs1CixN6iBHUJxE",
  "key2": "xhukpVEvmpvzJtwD15HHENgqVrgRE4uYyvay4JauKn8wuYxMMLEiaYo9M8Va4S4cdwipw4SuEF264ESNa3pZURf",
  "key3": "3t2PJoSJuBXEiZfZ2BPW6eDHtd8qKAXYz1SqckmZexqPdD6fK8RQYEvCxqxZEcskXWthia6EHT5kYd3EwSKHtUR9",
  "key4": "55LYY7q4xkrHcY9KeaFNnFmxkje1cy53rbVugYhqjaWbjuHDReMz5ReweAC7Pyn7uCE9Vt7ZJpqXqfC1WTUUrVUN",
  "key5": "4tghumPfm5RmM69REYJ8MtmTjHUkKsv5oZFwTvZAAVGQdbRyTCA8bJNt3UMYrqCDMjhXxk539GuKyYGPzMLPKVda",
  "key6": "3H2jHdPGjT6xBkeo8EvNWMAEUgdCr5eiWVH7bjuY7Mu6ytri9KdhPAj3pcPtESgiZCx6ZHayt7A31tFQX5SGC2wf",
  "key7": "43SA6PrVnujk6Ln4EpXD3PLQFZxHTnxj5qLEpMEN7NLUqE2htGCZdUuJN5bKj4CHhsuZKBtAbkmF3zzcEifUi74f",
  "key8": "5dZd47AWppN2gV7BAAnQvoZH46cAap7S59CX5RxibgjtoP29jcJdjEUNQZuaPVWgCpAC7z48jbRmkmCjUaEFiRA7",
  "key9": "Kh2DNLDC5mtMsTyWxwSyhzz8zUoEEh4H8cWdniw2AXhZrTQFXTU49pAKc6RjD53gbVXmpWzK322yAyTMzgcFiwC",
  "key10": "458obnfgDkAjtBQnhxqdfsqYZTXcu9NcYRE1YJF4x2ppt4oWmctx4e21KUMVArJPruLNC6i872qH9zhApczdMG6T",
  "key11": "5698RxXKtyMmmA8y5Gz843MXJBJb43DxQK6ndX9uvroQxUAxRKb3pBA9NZHEJY8pKDFZiLrZBagTRxacZQR3fW7q",
  "key12": "3JZsraB6qqkrtyKyUw8sHExbEVkRpBPP6a5nwMyeuLP827W41mpMRvFBxjFARwqAci6aJMerKF3JihZAGinVEZvo",
  "key13": "25oHHK6xjU8Pxc38BksD31cTixLEqggiGZNqTZKW2gn1PBj9FfFJxdyXJsJQPw9TeS37Jx2UAUKZteWB2B1ZGHmQ",
  "key14": "4jYsiRs3Qi13LWXRgbN33MHDy4W5e8YpKHPTLLUSLFKcnTfyd9hTZ65D2qFW2Gj4NrZFgisq6MnzrTZbQ6MSEu8s",
  "key15": "qb44RdrfXkHhv3nPMLJx2VTgoWgz6CB8rqeQum49jM4yJEcotwnjmDkXfmm37LDhHPjBB4T4Pb2W5Uq4feJTkQL",
  "key16": "Fiv3XeevTuTiNgDkZh3gprAeWuTNnWzjKoKJurzkre7er1RsJ3frjqiwCZEDf1sUGmHTVVYKsWgjDG8dBZfisCd",
  "key17": "39H5whBiKRxCNVK179PYD4nFtmAkzTqtV3NaZSgqdcxZfGWzrGhbUiA3hxrSs6S3znZ7ntEqKnVgfDjSfmFKYbZd",
  "key18": "2EKYkt9hUgTpjgFVm1h36Nfb5M9KvmPMDbrn1FZw8AWKqT39zLjoxa8dCQtTEHrmcqkqpM8dxiS8jDYTnoKqcRj",
  "key19": "2U2WEQ8eJ39Gx6fvzbTrLvY3pnc1ecVUo5PbPSbGgHen2ebhhfs2zKF9HChSKkAJ2fXfMmGUWdyYyZdcbu64Ufhx",
  "key20": "4EjBTg6wiUT5mkCnXwjmhyi54kEasAyaANBNLMQFjGFT2ApqTzsYm45zkTytWA6WmnGWTo2jdo7SVyfk98vYt8Sj",
  "key21": "5bAJtiF4SnG29gyoZAUUeeQjw1JwEcGt4j9qCXqqS5QWKjQAnt7btDmK9YGt7Agwh67CUHx2WvfesxGMQMVHe8Vh",
  "key22": "5paVohwXbQqxB2RFTBF4c6PZV9sruTh2nDPo8S8kdUV5zWyEApLtafTDBwmKDKnZ1L5TLP2qbvUKdhadHP8MWxh7",
  "key23": "3WTQa2C2LRRXnjwyTmPZe1qMRNeKE67r2bWYwnDCbTsoWXtsJ4X8SmXE6gyfZiHg6WiGUKASiCtEGExMD6YGkNz2",
  "key24": "39T7msMaFmpYdz1YepxCTjxWEd2iEPXb2yFCG3ti6AizUavTebQFuVD5DCZPwSBEDZHhMAF9w46Tv4toFPu9MGT1",
  "key25": "ZB6o1VUTSm5F8P7EdF4ZkPTMww1dzdNT94iK1yAVqg8JtSLveWXYwBBoys8auZHJJMfnCumZM2Tz98RqxuVpsNC",
  "key26": "5uLoh28hMNBCdx8KfRB6Jn1c2fJUtDMSqFfrzZmB3cabksySinkmE6Hivi52ZFXoCAK6fxJyiFxVvgVQzLogVH9w",
  "key27": "BTbXKe3RjWrvS9EkZXmj5MULLRPUVdh5NKuwhBr6YMRA48GK51PR9pxL5VmZh2Ny15QymffGDYmW4BDzPT2fRMf",
  "key28": "2yhuynHdwuQXr73Gsv1hnhHUDZjkrdLJ4JyuAjft85enfXYpxKbvJ554FXjSpeyU7nCGk3Vsjn989gND7PArimAi",
  "key29": "2o4cjnpPfiLvjeHv3jrS3WmwXhvBERkaUjukQTuKFi8CGMCBfT5nMPLAVqjhWhWiL53E8hfU1CPDb2QUD4tDU8Bu",
  "key30": "5tcbrLecgrguLXqGhdArUhRny14LcSbEdAQjqQ2dkzd93grMcPLtRfAiTv7nK6JLBydBSYMYMgWW7B4ydKw7CRaz",
  "key31": "2t3Wi45rTG74mAh1chLrGxUkcwsgTaoCiT4zVPS7YpM6U79msDQf9fCbLS2zL6tcK1aHtN3Rxv5cptzwMK7JsnV8",
  "key32": "2gN5ZMkJRo22evUiiCpTPWidgchRpNtiYk8SqKBMTgwGwfCfpgrGBATT5KWNKSw6Qf3uTskT4S7JrcNNuPWSrH5B",
  "key33": "3N7whJjzs3ti65reykJm3w9teQ5JpSagXN9PV9Xp58WcbEgGRAqcRX2SX1avdC89sroXUW4gou2vwue2s6Ea8jUC",
  "key34": "61LesUeyrndvauRQkrpWVDDCoiBwS4L5ViPPixuqU1Wc1Co61qibfxdmwWQQRGDebfnBxmfsJdA44Xz8xHNV8gjD",
  "key35": "5FJgwjZcGdqtPQkSaEuAdPiMmWPT9sMnuursPBALuciKgRjhs2YZEiVQMHnAsbKpKabLTW5KTJxC81LaKnTEioGR",
  "key36": "64sd6WbfdZqh5zLNnpGJ7agke8wDjwFBBDRVnR2DxbRyWMktvv7qtgpnSBsLqmLm8fqbfFfQYDddmkAqYu2qUnJm",
  "key37": "3GppnkxZPPSpHs3w7oT1McwMV7HS871gRrUoihLiRHUg6hdktnCEvVFiJMbuSnG98ke5Y2wJZEWnRVNUuc7WBnHA",
  "key38": "5wmjKA9ab4GQ3Cc39QrSaW8sXcUDtmfG6DtRjP4P3mUJs697rjHma4KeXwKEW9cr6sounFQLkQdBPA8fu65BTfQo",
  "key39": "2xH1GYvm8i5A8EE88Xy4V6MfXmAyywAchM9GYx8vGTnkQDuLdozA1NcpD2E4usPn43gnkfieAGdivgsHbm4tnNAa",
  "key40": "5MpcC2bcGvAhJ15HJovGQ7ZdkL3FrC28tMHxA6xbh5H8rNFr7VMppzgxGStDvUKoPFxg3jfkSFrwMH618TY27wto",
  "key41": "3N7nvCxDvEwfcL8zz9CzjaccWtRp17oPUzWESEmSfDkRVM39YM8Wd33vdApbtLTUjqFeypRLaW3DEMDEgqCBQGKb",
  "key42": "4MihFG7nJY8YEb5kafAFtPgUYTsCP3UVWj7u28UpMjjcocqXYchEgxMwwGb4XNRBBLRaeW2Xhih7kJquKXQsGhhY"
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
