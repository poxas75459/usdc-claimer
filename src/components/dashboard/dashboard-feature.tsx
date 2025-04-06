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
    "5Q1ubji4SG8inXkPoFCjpGVQR96M2ZCB5nVo8zciZ77vLGAULnESatmNbimARUXUW76E4b6RLpykDV3YLTENoGeZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2vu8upYFmV4P9RRYFy62v3Tb6oKjDFofPjdfCaFxRTqgaoUGURgh8RzVRwp29THVcRchrsgSq6tNdrwWBYyG4w5w",
  "key1": "jsRaGg7UkeTSvnNJyaBMoXdEsFN1Ki1fCAJ8tMGTjuYTU3mpUQDLXNX7EdVtSFLWYRZJqBk2a6xrgmMGTEoo72V",
  "key2": "44snCru22euocHxtdYg5HSS2ETFhbyvS43MdnUYmvs6JhFy1Cfg7K4o384q7xoz2o1Dxy1DMczqzM7SiHDV2SA8i",
  "key3": "4VeavTjyewDenwXLeN74Ku6ttHBYdjQje3G8Z2Cy9xHVnBzH3DUYgvhLy98y31xct2SU4pAgrPFqea3aEJVSoNNK",
  "key4": "5Y3CfRkJDmTkNSdGb65hEneaSQgCN4JsmG8rZhkpvLiWqtifcZLS4uUG8fyRumkDeos7KZG4BdrrQrJkq7zZRHRD",
  "key5": "4scHVSjXEtMD1X8PCdEADwJUfN9pCxRxZq2S77VSeUiH4pckL961r6ttgBo19HUktB1BUDkYk6tQzN9FY31Pzg5N",
  "key6": "3EnyLdqBBLAyAH5miuGH3oSR6ACyhgVRv2GoU5Y3vuZRPdrUs2t9Fqu7UzzhMoWUapfUKG1GVVhY1nzBNvFU54jd",
  "key7": "2EQMqbVEyC8pUo74ex8FuhTqmmTS9qvJm7h7ihdXQtKu1BTge7FnacJvV23CsMjgR8So74UvJvG8TbqqH8EDrZUc",
  "key8": "gHPFvmC75j4aRxKfNYA2Aw2XauL8mnjFwxvojPeExyLYBhinwWUZNYTCzqBPt5cmcRwA16Ftr6Uirf9gmXgdreK",
  "key9": "2r8oigUxTszD5PFmedB4NF4YoWdafAMBrPGt5q8yPC23EtqFtrWKBpf3vMtawu7ngLU7DEhrHxxmcdEoJ5L6KGP2",
  "key10": "2oJ2sha1yyu75un8VmZnnnUaY1Jkh7hynZX1LWvkTKYMvqhAZMs8GAFoexjSntpRC3sv9faGWezCMiXdS3ie9GN4",
  "key11": "xyNBNN4JZhtuS4rukKgpQSnr695pZx7RNREy6ukwv5M9YwUta3u6nDV5crexHgpvHnL2c42tzq7HzjaPCnyNGG8",
  "key12": "5DQPoHB5QN4PuMxApgiMcbzkVHD9QVfMNKizuHFhKPC4BSojGaUk71bNv1fJbHwMEqFAEX6kdj2XFuMB1aLhP2hA",
  "key13": "zXABUbHXhSenn9otDyYTD5fGUkqFbPEDSKjqKdnMXuXHDq1dsAJLEehRXGxv53iRV4PV2FnDcw2ZGyFEDYi2JCv",
  "key14": "3B5UrhwvRJet3aD2NASTtm6rTWdo1zsPcZMLZsGxVUVUakHwASo6hCJjteaA8VHHAk78DJ9uMsqqvTGbqZHF1Gw",
  "key15": "24r5VUdepuS8HTiKjb46UKANPx87KRos1MA3nM3bvQ13fwYf5fowQv4dkvQAKEsWxvgriqmGuzF3abjVMXKgfppn",
  "key16": "5ofdwDAbPe1Aj9vojQwcWwxYqRBF3JBH3e9vUSPwW4sNDh7WjS2n9kzvPuNs9MSUeuec7UqSBGUEcBspQUTRr3So",
  "key17": "3jLp1LkFGD3spnYH3mjzAYSmVTfogexTAvaTRBnzsXpRr99CVEMiBsQBS6Zxp14ewSfQkadapcCjKvyZTR2d3BD6",
  "key18": "26BrP4Zy8zaMPBkdYZ82Wyfsc6sQHSHDwvuHF3tSgH7k88W8fLL1rJv88tUnEgwS7ezcY6DNKcPVWHxRWuthCkcn",
  "key19": "56w2undMXz1Rqy7HkKmkaMbdApHDYAXhnyntVLEYf579KvQJcBpyzEcUJGHGDTcfu3DAhK5i2VbUUqhYXP2k1Q5w",
  "key20": "41n6xYHdWndJJEm7KZAX9mTL3JHkLDjPqtfLEtqFamviyd6xymq25hD19pQ3cSmSQdoHNzR17kjThpUd9rMYeW5j",
  "key21": "2HQ1C8KvC1ueXmz8Lsktg3SmHb1o5pDNeWpUR4m8PjnrBHVNC8N2SP4J9mJy66jWp7u3WqwzNQzs15GcaTZQCZ8c",
  "key22": "3XcK8CSxLT1xJpyjqR6iBY3g5wqvjujS6NUq7CjuvJ1CjaMD48ndUPPAYKChJDjerHLBBv7226yKUpEyVn1oKvFS",
  "key23": "MfrAo8L1YL2vGoLkB9vNicphUcxQhKQ3J8YEZmHazdZFfHNiK3KCnfwk6PW4umkmnyjP1n5kMHYRuMYuuy2RU7D",
  "key24": "4BB6NH9T9UY7FcZDvFqzWNVcHZELPX17SGUxazjo5jEATnSHEFsrgqzx7GwAGXcCFhi9FpRvTaPHu7tkaC11Rq3v",
  "key25": "5F4dUo8G6HE8vYzSoU6BTw89ruHmtNp9GRc8PZCv6ECawnnxVbVPgznUxVLw3GXJZQGXVz4eCc2LQWZdzDpjo8u3",
  "key26": "3RX2g9Q9HU4QekP94arLXBiEpdPLwPTcXkHEhjFazYDStUjLRM12Vmq3bPC8tA9CFsNwTWyjiFE9otk9wnbLyWEt",
  "key27": "2GiWydmCx1pWAFcmH6SxbQy8rEmqM8UXcbpJ4T19m4bRWtFdy7Z3cHXmUDLCwLsmtRfW2QZqJQXPihEVvjU1xqeR",
  "key28": "44Nn6nGAaNKhQhMZxQ5hiD8hfVErXZuFpDaAMxGU1fGEuFbz19nCPMk9FQcDEZqTAoB3kcah7qsPRPaEfty1wvYo",
  "key29": "2hwJA6ScBHgB1XkKvKwdNj7rXouhgjLvKrtdnnvb6W3ycFHc6MGHwKc9iwfDbwhnVgY7yJYsdFuLDtzCW6ysB16C",
  "key30": "4jjWZthYidXwyVxzGFJemDG5EpZm4Ed3Pn5TC4EmQze6DaeVhjP7CGCc2MZo9GfcbB6jBPf39avfk9Kte7MPwwn",
  "key31": "5XqHGCw9tm3tifZ8zyLsHkwUGavjRgWezF12azZJoZzKAt63FntyisjxHNgeQMebgELV3yodq6B8GT4v5ameKxcp",
  "key32": "b2W1MVhWX8e44QmuwYivGsyuNgW7ktoTXb8S3NNMJ8vbz3dPA2KVnqTMSB79aux91kvTgLL3oGqqrpP7oy8M3pg",
  "key33": "ENYLp6ouVjvu9aeqUbPiFQpXSq3bov91xK84BKJ92mUVEHAiaKUjNS9oNPrc5aQsMcp8esbP7fWBS3fVjFwfPmf",
  "key34": "2NXe1F2qrh2cs5qEt8DsptfxsdhpDpz9xm8D1XusUgcP8RjQuxPT55wHz6RMFAerZpURHMha2yFebpn6Nk4ycLqt",
  "key35": "314Y8SE6MtwasxmXugicAKSFAt2uRHUYBkCUuHtdm4gpnJGT8DsgpbdBpKX1m6sUrYtGE2ZYyM4xYbKPbf3Ed6qw",
  "key36": "oA9qwQUcAS2wCHfmamxRvcBEkh485vrZfqRCaNx55rC1zJqZMgaZmqWzuSjogmToVweCQ6LPaefmAon9FtQ7zRH",
  "key37": "28rGt85y74LQMwvaDqTk4XiduzWym22mEpnb9z7jdp71UNknDW9T5GNEG4xt1GgpWpRKk8mfSEfXjmbbTzFgi9YL",
  "key38": "5Pd17xL7mJvQb2JZCFZXzxZamKmWoWSeZwCXqPXGJsuiWqJRJzYNeNLTan513UTLqJkv5E2exdDLxVdW8qpbo3Ab"
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
