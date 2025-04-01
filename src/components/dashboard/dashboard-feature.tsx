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
    "GSASejZz4jsBVH8X9vfvCQ4ZxDyvb2C1Adrd4bch5ePwUkC2UgoVcDkc8QLMEgcbZ4oC9DHuXNzsvb7cQa5Scmk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "JXZU9ZXeWmuGPLZnuxA4W7LqNJAMgRYBQ2x9anz39QouJxu7BzdQdjxfWEYVzDHKsx8agsx4VwV9QptL2D73PTW",
  "key1": "2AJhme2C9BAFdJoniDv5VGsZrq82xfQDU3epbxegq5akQq8CP15nbzpN3xF2k2SSUzEHXJuzJJanRH1XoZihpbFG",
  "key2": "5Jk5KkcR87hzvV9n68E1Wdn89f4dp1c6batU6ec5DfNSUuDt9DiL1FY34b5GdouXUt2i2ZncqWWyVQxHzgCmhVVQ",
  "key3": "4hPEviw1sEFiBDg2QqPZbtrHKNDnFEm1BENhgzK3xM7GvcTRENrmCW8yixojFKfJymKusEkF6V5wkenLorESgPU8",
  "key4": "3DdnwYF317L2Pwc2bw8MRJa7yevM7PTT1zwcB74yEWAYf8uCX7tsqceiPsXqW9gPAUGNquQShasciXgwnHSGvJCk",
  "key5": "67MAxQYY9iEk3ZFweCNxRTwEN32KcsoE8QruPEHUbPMjhSQ1GMEMVT7FR9bp71tYGzBbz9bTTZcjuFPEg7b4QeCz",
  "key6": "FEMKYKpsBbPguqEhJHqhSRFr4cX72Xi5bZRDPTubKPCSknD2dPdgZ1HQmMfTsv6qXJtP71TwFyVgPbztoRP5wno",
  "key7": "2Q5p3sogMWPXURUUw5VMWXvpyofrHMagHAV24v8b9s32VE9AFrPpJDTAmLX9i6wXn123Gprz2PWujzYksAagrC5t",
  "key8": "27G2ChvRtjFbXZGQdY4efB468MVZ2usV2qAjib2o6QAwSuhdyME1keuqD7g27WJViFjQoJfBkCfNmgPuiajxqviw",
  "key9": "yk6K5AMCHRd5Yc81fJcUqt3AH2yzyWvuEoPdDARumgRzq2awe7bn96aw1UmhLDrgFxcgeG4eyfGhuQK7QSCJhtE",
  "key10": "2iKPX7k8za1yMEnHPbbGdYdsomfB8XL7V4kCdAfy7ZuY2gW5TShC96nepPHoLvafTwCrC3oeVmusewA3pcpzJ6Xz",
  "key11": "3iKZzPXKkNdRP5mYe17XSqjmNLm7RN3HEgpBUZ9KBMRRhUXs2TvxD4WU9m6Sxf1fBJYngbVbvWfvLR3dGx9JQ7G3",
  "key12": "QhxzbD83i6ogBCoPe5sWgvyZvGUZd6mcLPS3ziKDDZaUevBS1uWysdHHVbWR1Yae6U3t8QJVzEMWYNRS6QA44pD",
  "key13": "4uqP1FVUpYdVkU5Tvq9paaoVrGZcik3h5mdwS77jpzWgcVjmCdWikk6g2v3Bvds6YYrKACSS1Dv6LtJ6H9kzBrbw",
  "key14": "46eTEVgqSmysp12dP3wHucrvJqdnKZ232ZRmbqMDBEDT3Z5uZwhxCHLJKzyir7T2mqQTuEEqDTkJ5aYsBBu8cJzX",
  "key15": "5g54ZsvGuzKiprv2fn7usnxPCovKnx9bADkn5ZpYJmfvPuKau9bNUu2mQ2g8KT6otJLUwgeUQi8cHa9cojXArUN1",
  "key16": "hsQKxXyojXAz7RXa9hcMM8prNJcv5tptQFsxM91GEcVtsxzGKu2cC9KpPQvLbP8RU4TXuv3sjpMDXgyetPapkgd",
  "key17": "5BkjHiARwzWe8jjwMmWCy8gRTDCHs3hgqvtJGMaHFvsNxN6LeheeM7DKFb414P3TikURTtJpurWt9GCsYueNmtne",
  "key18": "3WmcSXZ96nvZEboUyc1ojhrmcJcrNsznK8qqna3eV6aZnNu1G4HfV5ppE81iADYB8NeDB55RqDYT9imG9SSRT6pq",
  "key19": "2uMR7kcjkfa64gmk2jaQrtvc1zoJgWRdqyXqBw23iATHSS8UrivVbi79Z43GWAbZwBYxBxxAH7g7cNDjziDXm84R",
  "key20": "2bwgfSdgc14tZt6iMhc4KuuiaZidCLdDN5AjJGbdM8fht63okXoWw9NwS71XF1ccHyYUKyMYdowGjsAP6ysQuUjp",
  "key21": "29yuxiF5r2Hs952gEBdwu7ejrQBi1Xy2WmVsZr35oN8ephwH4LsGV9xQ9FmDztnAB2riqdPDE3ZvRjnU2jpc9yYm",
  "key22": "26XXubHLZqi7MxM5rpLHgZvh42veYpRrZNZUnuu1bgQYv7KRYyFC2RZCMVm9f49FXUE4DD11hYxFCjtY1MU5sQDD",
  "key23": "rw3uDrX14Ls9NqatgXDek34BV422zZLrpHAi8yKiFoezeTBpSBGx4opSfW1FJvbi8BzEt83QH7yR9eJ9aY328uV",
  "key24": "49DSKJKv51zhpPEZX54cZCjupqKAG4rMyR4xe4LHwHnUai9YgYJrTFNfnYR5PPx1QWha7DbUNAKB7SvvNDdVhrhD",
  "key25": "56cKabsmi7tBNpFtbGaTEjAFd4ZcU2NCeY8fBwsGFvpp2AjzRZDK455XNEoLbhUj7mnxccy9aCRnQra7ge7aJ6pN",
  "key26": "5n2dvEMXjN8UqBa81L1sq2JR4NWxycuXo2xd5Z9Ltx8xtX1iqPWTX8gHJwYTyx9nWvCbRTyaAqNxEVMmVCyAfSoe",
  "key27": "2i2Hxw7ABLTdJigdMM5SaRruNM4kFA7cv6kXEuPg29mt12hkruTGe3DcvyACVyhvoxfWfq11n5V3XVYxqcDHXMEN",
  "key28": "4FzxVgDMkyr3HQKpQqq1nFGoSJVbB8ieuxsM38Y7AWhUVSwuTjHebxL4xm4uaGGUCH7d5wWLVTUwmfVEmgDAuSuz",
  "key29": "4t89PAeD8mXbxSrbgTajb1ur6YcVrpbbULZgnN8d9n35rKMMxEmBiKwrX66QamxaSXQZ5nbxtLS2YQSMQYuYCMZN"
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
