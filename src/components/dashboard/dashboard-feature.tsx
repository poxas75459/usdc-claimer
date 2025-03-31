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
    "5kXo71dNdrATKXJz9qNkGsn4ERMxdwjKfU2EdhZBwN1v3bpi7p6B6CMjgrtSWprh8P6kjzHCnNztfKGqHbVZbGns"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "h4x82L1Gri6qyq9GnCDKjSSxrpnhkN5gwFRMdHTJGfFoe3pEfBseNEDN8L3Jafc8bMiMgjrjYQ5AvijybMDmFfR",
  "key1": "4tQeoA2Mh8Rs1UTBPaa35137H3dKKCSnMsfRT28ThEd2qFR2b2M6zBajApyrdvBWeonMV9Ehe3YRCmoRxayHTuXC",
  "key2": "D5vfSZ534Kd9tQiq7KKmUnAT3pvXjcrjYhXerrkxAK2m8qcuxF9Ysy4ucgEbiEpakM6ekeuPBXqNj4iLP6erRyk",
  "key3": "5ZCbL4foVJoygk4Gp6cCmnT5kbGWG3q9QSzsHCgaCLPBfizPrw5cXB9c2SHg4tkbCjrSqapVZXa7qG9NTr2yTxBh",
  "key4": "PSLgz1MKYoQ17jciP48AgAKX28a7shdzMRpdGM5qqXzAeEiNM7VfYcXr5fKmQaospw1C5RzcHrkUTU83CXnUT8t",
  "key5": "3a4juwvv74cm68xi23p7Vqp2DyvX3A4rfpQAMP6UYbBBQM7FHncPDQ2KVtUZNxdmnpvBTiKuYpSboPeo3g5fauJT",
  "key6": "2e12jx2GCvZ6XvURmGjwaN44ypXdTCp15bocbTfN4YixjrSKJPTqgVXsGUQ3v2ckJz7ZLToDHrooMZBneocthLi9",
  "key7": "54gZWKtqCAZ4NZD7wKPvBf1a9L8q1NPdDApodTZS1LjQ3TkaACVVq5jnELXQxAj1734Akp69quc4bMbqBJn4ovx9",
  "key8": "47sEUAsPWf8jYaGDNy4k8xtfhhLc4iJzhuRWZAjLXyrqia4zopXGfomWkDTUzfj4XfThiCrspysuLDqac5GABiPd",
  "key9": "5bgQqKGziXTXj9cJHWYyJb7vNtwUNNcyVQaLyyvWEF1rgTL79iyToiVhoJq6HT9C8zgVw6A8MFsmbRcRSMbAn2N6",
  "key10": "3nYGKwVurtyADsNP1NMUHCZZ1gLmrJsRkMUGAkpMPv6CWobPkH8aHF2QM72jBMhLkDz767ZfqhA1RhbpSQEWNJ5e",
  "key11": "65BkmnxDQqjGT49dc9RNqGB5yFrsrn9xmmszYxcPzGAQCU8osxw3au4peBQwXpmy8NN7PB1Uw4ZjETVmy4cy7BnP",
  "key12": "3JdKHD2dTjQkcTfSs22hqJUMhJWTVvkgtiPpr446Ty4b5cwxiVgJih74Eiu2h1GwP6gXTuCZWSs35eJLt5wEZxqa",
  "key13": "dmvXoZUSuim6sXM1Gbogon3LcAuDdP9WjjRbgjSLwWzZsdNAkcyPqtLsLG55HBVDpUV5VHYu1ALnVTqkHvoGE3E",
  "key14": "3WEuM6eKTu798wWPxwQtzB665otBAHZMcudqGZv23Mj1r9VX5KHUhziJ3hHPmquZr1KzipryhDhqatnn32yazSa5",
  "key15": "43Bv4Kpkg65Tc7bTLMUkqekqV8X65qJ2ABcwUsFf93WyPrQKM4vQ5jmH2tmPmV4ryL4R3GcPSqz7Nrmun6WxHrvz",
  "key16": "2RJ7YUygMtqnfBAEMx8S9TytQC9onMDoMUkT8aq1FvRiHBD1YV9BdwRHMEzvQXmi8k6J77A21WsrFghLm8hoRck8",
  "key17": "512VXRWNdPGvNDeJ2axvgiwYLzqaMJUEayDgBXc1oBDfeNMs1yVbdUPrZWbBz1FqbPFLHvx9i1dLyFh6hXDs2qby",
  "key18": "2a1YWL4eitL2GiPFWkpNFiDAfnEZbcJSjipSkPX6fvHLmW1idtJ2JEdAB6eiS6nRW6fukHAiFDUt7K6vtHS5Vpia",
  "key19": "bRJaVPo7T44HksREBqUMMBFFyCt8gGPRpD3kPj8orRsezdwWUvENXsEDmj46H9t8t3HxLvGKtwsgZF8Y3nf28MV",
  "key20": "3wVCuuj6nXKcaoSAfz5cyCBhSfqT2Fu46KZcPRi8Tu7BmMsKWeDDJiSvDTDH17HBx9fFcJ3DHJHwq1wFUA8WY6J",
  "key21": "35JXaxcvRpaPwXj2sCmaWo4TbnFattyKw1C7YJ1QX2idreB6AeuuKSt77pgZcA5ue8bUQ3gNg5CRvvp54C9sjMkB",
  "key22": "vndkHxRFjRqFDxWofsfMS7AmWGJJe6NdyWN22CZf1a9dAW6XwfrQJRYbKEdby2mPxzAQU3RzhEFzJgeMArXxo6V",
  "key23": "5Y2umpXKFqaJRP9e9eqM94ydnA7WfxydimoTs9YZ5XSqpWfTjGmXC9iz7FTaHK1m7vRDA3L1BeB1Grk9fzmDSkFC",
  "key24": "tCgnmKbCx5metzZSY9CjakcYs4gFkDTS4L9YkfFfEaPKux7ga6FGvh5S1gms9EUgcL3hWsQ11w7XGy7mvtXxuqk",
  "key25": "wU2Yz6T5dxaMdnsHRXo2w9wFMfeaDEwmbPT8NYaggNAjK4nqjfxzGeVi8STbVmieUvUQHybx79anFQz5Fss7QMK",
  "key26": "ecS3sZSQFzphXM9pQVGDDw7wTCVXV2ikgqjUyebuPEktj2CQdHoQig9CgULc4MoCpG6831NM2ZL76CrDx3epLs3",
  "key27": "3sbyW1N3jFQjbUEKmJqLo376kesDPSyjP19ymi6S4Uubx7QyQ9u3SJP5DdedcvKjWCifMo1b1kiLbDc8938nqrgB",
  "key28": "2x23mAakQdVf97QSzxCfRLfAdmKpMv9u7mFNAHFhkY8D7uMwP6NFPwfq9tw7W1HFZo4ndmeB8VyxVMgrECK9xxvm",
  "key29": "53HD63TdZQUD2VycdU43pekFX3o5TaZzLfNpBSZErxKMZ4ULN5C4irr84wzfdS1rtEvLXE3YY9xmDELUqA9PHfhq",
  "key30": "2w66qxsfpMBHEh8bJ1sy45ESVRYYG8uvRAiFNUBSNLuCeFQXAeSkB3Zw7cSX9pRwEkZRzAeBEV6cv7dwhFJpK426",
  "key31": "cg26G78LYmGAMzZ7NnA4MudjHvzjK8oFTRdtM2DVSFKrVjWPmDqQrQE8AxUAi9moeXGktTE9NLYcKcgaUqDVPj2",
  "key32": "2kGxBbJtYUrNiV3Y6k9rrtGDcCKi3pMHuBBw5SEqbASwjaDDmR9CeGepaKCjzFvgDsYivPYbzhpoWhL4yzxN8ir9",
  "key33": "2JRDruqGaXvaopG89fZDe3ckAjyAuJkEzr9WYEqsQVxJmcpZYBj2oGGk9ou9QMLwreKHL2Apa3XXGqzo6L82HUV6",
  "key34": "vzzhqmniyZPb3xLeN5Arxx5wkmgrYYYb6MAvyYhZcmBJuUg9iBrRHHeG6eu8zUUk91CrLHRE9r3bYGHJWcK8uxn",
  "key35": "2PUG4GzAmxXczmfS2gYeMfsqZxATnsndwhNKCVad1urcq5GcYrfhfrvoR1L5EWnksfMqPbPzcAdH1h8rVRFtwhvc",
  "key36": "2BabPFj7B6gxhkbhSEMoPFhYNhj7H5ainj8PpZDVNT1MboYTh2mu3g6XtpV28Ao52zur4BNjzjpbcBp64PdneyCZ",
  "key37": "5AdZZuw7dKJqKsAhzfoy63TuRMERUoXiYXLWnAgzEtEfJvbKZNCNSuNZWZVv3QrQhJbRKawpJ6tM3rH28P3SX1eF",
  "key38": "4aFvyJgmxyUxkvAzXxXuFzXD6caz6rVeqm4VgA5Qk9spVtBPrT22st1H2dc7LR5SAsxAB6oBZZTrEN5fg4LgiZL8",
  "key39": "LJoJaSDmrbhvmvcfVm8cxoq5EfPUiwWpDniz9ZQkrasAiHVTf4RcCQ6teBiRdAKaC1yYt2eGK5PCmKwX6MSeuqV",
  "key40": "4D3aMrbuakdP39F8eyjNHTQUVnB86d1qemAJ6QyAWSpbY1VN6MQtxZi8XToxXZwBRSUL8TegustW9FMPaR81NqX5",
  "key41": "57mHr3c79nMVQTKUfbAyNWfg8YFf6CAhRh5VRWA6pRFKG6kepiRVv7q4cTMBTU4sqcYZTm5XYwF2noirj4pPUv41"
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
