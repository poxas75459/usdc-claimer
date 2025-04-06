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
    "43XDKrH3KbVxeaTCN9y6af9fkXLEPLufRUwc9uLBHADCzsmSohXG2DzkmKiWBbXYu8jFeyBvVVj6eL8T5sEuGY3G"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2oufXUo9sv8JcNePCJsmEUd9ivzhgmayMjoTXckhMBjMvi8G1vZaHFQ16T9P3Rx1qGQDbciZjt2pN2UR36Rrf3Qi",
  "key1": "2E74LzaxjNpK6GdPTXFYQYE2YKXUvr7MxiTeUzVFshEv55VDrHde813isDpLtSFnUY5YPqZAiT8KzXKGDV4Y8zFd",
  "key2": "4PmX7mcM3GqBGJ7VfZqVJFNDRkh1nus2eEbUHd2Wnjqt5hbuwBgvvSYmFhKYFwuX1xnkoDe9pKG5iKdMftZWurtw",
  "key3": "tjrLK5WzrEDdDxtY3Phgbdgt6eXK5yE1tuuo9DaTYQuZbaietAVvjBibgbKTcnTorpWBwPzrQsUUhXLwpQC39U6",
  "key4": "4G9gWmyi7MZR9ggqwXqP1CRBV5rbA2kYsaokSGj1bhRZEgPk1nq37TQZvvFf5Y7vDRyA3dnEqCE5N5TX5pn9Ntsb",
  "key5": "4mTr9SkaHEWgXqnEHsRrbHMwnbLSdQ6K3Dg4i7zCtAMpdYm4AZrrZrDa5K2x4v9yJT9ALrWHsSKdLmzkGfr5aCCb",
  "key6": "4JMQZsLDGLdXWE2rZit3KxPve9F2yGL1WPt5wjDrb9eZwts3i47uEbYnKVWcHT8F3GT3pAUKXt4QD9DcUSr9nVfQ",
  "key7": "3aVk53zTpRhcsVvDmfFpVrbcshM3DxNtE25Lb1FDhxirAmCaWWo9dQb2rhRe5mcP4Wrar3EcEfvY1EtXwfNtQqom",
  "key8": "2pvr9e8vkRz1f31Y1VZqij2yysQsZMtP6GB7TfDXVjZakLoxgFPLNQMw6mjJcH8heZATCVb1j8Ph7hFiLJ6xLQEh",
  "key9": "39p5HEgAvxrzg16VnYSRzoSD9MyXhe7FjJHFxkqgMewHAKrY6ipvdGrAruZDqynpd5P2e9syHdStez4MnpoVzszY",
  "key10": "Q3Mxie6awLnuiPdJL3gdUA3jMMvNS6kBpu41NYQrAH5JWzh3pwsdupwcC1345jeuNRAR18HwLieF96x1J4psAnd",
  "key11": "3QP2LxkJts8Ju3VrRHq1h1oQCsjHjLaoRB4Xyz7Qoe9hMjd9Q74FAS5vtCxiCrDbo2zFVdnW6jUkX6UM2vz75U9N",
  "key12": "3ez3XCva96jDo45uvSy9cMYAHp1fHpuw8EgyUJRfxq1Fj3PVf6WHM5Z5WYSmE9ZSMkPT6wDMVcizkGpANwPW6QeL",
  "key13": "4e2We9kHf931n6sKEfTAbGK21kywsJK22Kjcvw72WYZvo6HR6xVMakDJYnfqyhgQosEZ28LAsMQixihunBQ74EvB",
  "key14": "vQVxDwt9GZYr88byPBekf7RCUsbn9AAtJXepXMKCFFjkPZYcMmp8JqW47Mp4vrggvXbtYv6oWDDe7sv26ckAV2x",
  "key15": "3fcR1ae7F3cBAqC5XAmwH5LVnhLc553xwJnqzJce1kyA1ffrasjn6rz6GStiXE1eygLdMe1yB6PBTVuxECgx79FG",
  "key16": "46yDBRu7YjGrnnY7gAcyPWJErXZD36tYKXcCMkt78QddHYKghThwrgKmxW482w8pae5Q3fyoKNUAU42hUbnzmYzA",
  "key17": "5ZsXwdfFDLm8fqhkhk2Vvpytp5Hr3SY7Q4ETt4K6DKNBmw3QrggRKBtw27VHePmoQuUUcf7mB5yxMkgsdpZ5pSH3",
  "key18": "4BUePjDGHKjrkPPemXmzqTn4eigf8hKmaSBBYmePiTGuxFjQpZTkveFaD8xejYFY7XUUnujNTL3LvPzxEPAQDnMR",
  "key19": "5NucK8XtmuXf9ZVLkiyXsSAR69p6zGaT26c3CGYx7CwXK5geNzBhrcihSzgg1zwQPxGiEzmGNV7R7UAMpkbxAUwT",
  "key20": "3395bvK5N1TEbvpdXcqZYDRZmhZxx2YjhZJoA4zPUaFsYZryDuMX8N4ZK7R8iwj4dxVyyNqwLrzHrFFurSJJjCx1",
  "key21": "3oGPCzeKpKyTL5WWMwm1EnbF8zCCKmshnKjAdwNGyBGKEqFCiEuA2aoqUR451escibDRwzaZTwdswBg1gUmc2pDd",
  "key22": "4Cn4qxtVfbYQ7jdxoVMnx7dhUH2CX1n9EVNi47Wx9K6wyYcNB3UgXQtPzLKjPreVVESPD7nkZ9DhsueDr23mmcBg",
  "key23": "66uLcgQkb3waADqXqoyHufRw2WsKdVAsBfitYF8MdvucHaVA81ptoTbCR1ZUsse8ZGAF2o9zMHk8SAydRpvSzbzu",
  "key24": "5mYCUVCBYXDQ4MQsg4LteJ39JaNceYUzpoy1TpjPD7Bnc7Wr44Jc3pWq2ujVbS4fQqLZ5BHGEQPa3SaBg5SkzbGR",
  "key25": "5ViDAjieLNoVHEcGVri9jKWBNuMtjB7ChzFhwxycMbPRyV2DcNXtZK1kzgYCp9cqMS63RC8HfQrK2V6vkGv5QNGH",
  "key26": "39XhbEKig3gjtJRg1B8qNcAtjvbT18ovc6KqMKDSuQq8Nvd3nHyaCAEtPvwiMUXtEpbGckehhSVYAsBwXTcXnaG9",
  "key27": "2JiZiLJz2b87dXWneee95NSogxd2U3ijSU417J1wF8icCHnPeL8qSfkSbjc5Y4cEF7AgoF8Dx2HA7hTU7M3BbP1A",
  "key28": "2M8x2oZszHyMi79eVd9YEYipy2uJL1xtk2QyMhodaLa5FUoPiVpfNUvP5q1k7jV9m2iHH7D2CjPC1DmU1s5RBbh7",
  "key29": "4SZeaz8nCeZRfh5aBw1Dq72HgPnjUF7GBteJ6VN7E868HvHwwRY49EjkyhZPhqTzYTRJrFPYvC6B6DyvqMrPQQFx",
  "key30": "5EQm9kiL81XQbkcKpkxKkEuJEqL6YCNCycFMxMtemvA9Nq6zuKD4FBz1CNVh2jqag6GtM47WgVfjuKtndZwDNqLJ",
  "key31": "2mirVnjjPmMtw1kFG2otHHDo89mqo1Z7AabwqCTAw9Kq8kPafbMdTx1T7MjDDWuJXi2CNLnzQcqXdTGtTucHdqKf",
  "key32": "2qzYtpweCcNVSuuTT2yw6kbijsoGckqGUiTaiMCuV8jiQYwm5cHjkkeKrJKJTBKzbCQbACX76BLeaJovWpT31yi1",
  "key33": "2GXWqdpDpMPgb3R5bLd8zAjhKYbm4F3q9LWPLXHrQDSZM7DxQFisLd9dJskpgAXAbkxKjhZtsdwhC1xRnxWz9QxZ",
  "key34": "2k4LaoALyLmjrrXGbbEREykobwJ1SigYXitAMWpz8EkT7QgsuLk5R6Qfv93vSYtp5X5MmvsqDpTxtVjAGgTs1EU8"
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
