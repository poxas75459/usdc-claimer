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
    "36EN3xAT3eaiB7AmgnuTpb2Rv6wKD2RgQT8PfKMF9FZP5cAmULLNh1xP2371D36w8pfGvaMqD44LTkrn84tEjFLp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "24w3onhPjnSKBvM16sCJRFkEhAsVCTFtx6ZZZjHYeFrWqxfNuujSrwZenZHAgL51gAXTHmNEHpWCMDdPK7z6ffqB",
  "key1": "5GLFmh72MbVSfbbHSVchvS5ZcJimVF8HebmqLFWKYLACyEfWh6f48MuSYA6kHxUTuL6bgrsZZsy89Lo9yoxw1UoF",
  "key2": "98iNG1hYmXBeMkBxvhcuV5uuAnQHEPe6KDxsPyNHzCEdErY41zRL9w7zFpLdEEMydB2tex84JG67UfGH9tK3vkP",
  "key3": "2yRRCskdbKBx1DDexuKoWsrbbeGPgUvj7yekKUsXY5nf5CHHZTJbsiGY4pv39A2qZotoDZRoQybU1TLoWfpS7V6e",
  "key4": "2GDen25J4t9eBz786SDwSxTuTUfhdtU16f7C3Jy3S6KHxSrsJDH6AgB5mK2gxMYTL791HYtNzJ2UetJQaQRxxjnU",
  "key5": "G8KKhmw6ZCDfUXyvzqRj7LRV6mGhLrdrX4itnjtiA7aRk5mR6ABoLmFUrZPXJFAeZ9rVekTaMBCdMuYbCppnHum",
  "key6": "2EnBiB3jqqbPrmj5LR3txmBuVdZ8LNg9nk9nWgasXi4xeNM49MCr4MPSsdZxijVqL7gAjpDavRvuNghrnjJUDoSP",
  "key7": "5anmVqRAZ2GqDu9TN4e4AJhL7SgenqrUddY157iXFpsgT4YFAoWk7Q1XTaXY9LfobAuxnCR2ZhjdyQyoM6CmHd6N",
  "key8": "2aBbmgVTL5N6sZwBscnd32k59KZamNhDhpR7dSCAaaQrUEEjjKqhEChGMAcxq3c1xodZmT3k8hFtwdr5Sboe7J5f",
  "key9": "4tziDyXwbxgZbGkdw8s8926Rh2KnvGUmkunpU5GpiemcmEYYD68cBboALGQjxrnqgDkhEZQ3SC9DFVDhamcGFVT1",
  "key10": "4UinkbvxQTjg5dJeHVQkPCVTThy448Lx5NW15jicdGZ7p6j9ieuB9CwZ9RuJheHoacsJvkfSHLbBq8ZQ65GeukBx",
  "key11": "YYmypnjWsY2V6y4dhRp7vibfV5d1G1wy7xeXNxXLPTpsEco61TtKGvSkD1uajfdUgf6ZhejcRHjEi5HvGop13Qn",
  "key12": "2AySCGHTJxwWfoYjWzdecAzsGnmJmnmzb7jafoB8xW81mSbwbeuGJ27y6pfBLVkMiD9LDFyJPy54ZK6ea2B3StPM",
  "key13": "3Kow3f4nKkbyZ5q4kS6srQs8PJpaNavwcqkeMr6mZfWcQejMub4eHLqwbnLDki6yPBB7nDt9fxxkCBxxJpthKzdv",
  "key14": "5AvRe6zV1aGgVcgDSPWt3dbYu8gmqHBTrFLvVHCoyXsdUp4xNoAbHb6muRKPyxd5ayWXzvKJ5cbxhYD3YkTuRKsi",
  "key15": "62uNvegYXBjhYFL3vgRu6bwtrkJmLjf1QZkWWuXh8GfSkwUbs13oVzDNQHKACPee9oeeH1ceCkjDQjn2h77AjXvn",
  "key16": "61e8FLKiMqA4WJkDsHGxoggjLJpJbcFytSF1daRZFatjj7WnfVvTaiZiyJqjAvqutzgxTUtMxPunhdfEFPEanhBg",
  "key17": "kCToyhsQqAtQEPgy7RpRyy37wHaHoJpbNVYJseqxgMZS5zYkhhhsEApFQQ5kQ42Janm1ssKawo3LMDnXc5zQU98",
  "key18": "6dKkvjUgcPcFrrhKdwCQQcJgYMathGoyQY4si5zSiyK4r2xUPZKAc5bWh8e1hsNQEMW5Le33xzjmN4wppyTxBad",
  "key19": "5sDJP2xtCyZ4oSDtMgvg4r31TmiuFjwYiZGQmsKrdrvHbsjGSsoqDiTygNa1g8ETJTL6MZdhFUV2UR6eTuNpP1fh",
  "key20": "2h9wwzZjCqe6NAoSEtCuchDwpc4PrNXZFZeW2WP4sFRvcDmzayW1C9bzXjHyaFnSqCMzXey6m7zQuFqsbPZ9w4Uy",
  "key21": "BLMAi1TNk9KT4YXb7oT6GdbiEjG8SQeD7JU8wzhGRUfaETv3a8HMA99FjDTTx8sgTKnuAPGiDW2zuE2WETfYfgd",
  "key22": "T8YwZumrRqZariVb8y2nxc46qXnq3PABELqhrk1rNMLuRfjLkbkfcu92ubfNVjrYYn5DJV1Cy173D9nNEdpkqqe",
  "key23": "2q5PFSiw3emuAW5q1Cz2KMTiMtBJy2mTtnqLbj6cCzRm6Fk3xv2N4UgKSfzZMaSHk7UiojUtZWaEfQmNLspS9ZCU",
  "key24": "3aYJbDnTJEgyeB7v639tJGQGdDQ7JHvMRJxEwM2rU7oDifDqmV86s7do9TSWotseHNjha1G2NnosZyeRPmTgYVXU",
  "key25": "4u964qCT6ESVieKyKQgd5F7EdYT5RPi44UhDMn6TZML8HnV5J87z87YBEvFU2vC4jo12wDnz1yNcJCXqAPuq5ARd",
  "key26": "348kiMA8T5VEbbVXt1KKbTDjuh3BodfRqfSR8rf8izhBUMKFZAoXt8RJcF6N1Qe8o7djQ4PTKD1MF6tBPa8y8DNL",
  "key27": "4hc62YhuxfyzdRZqtYRSbGMUh1Qddprb1EXHCkcdfrW9vaqstJGVsUA93SVshqrbdc6HWY7YBxFPF9SVvVnfrtdM",
  "key28": "4SDz1tinsdUkPtv7XEvB1Atigis7u4TyHytBEkkFe9jyCJe653Q1nm13Rsr7vc5Utt5NuDNJVhK1UBKsxWeGWbcu",
  "key29": "2WUPQwWH7Uq9jdmvtcea6HJjosXZTYXq6F4UdyN5voXUx5kC1TEdkU6aMppAZrQ4qjMYqBdtUoZKirTSCQDCFPw7",
  "key30": "5hcVVrmSPVkdf8ENN6AF7aEWk54GCvJchZT5T6TrU2byr29kpWnqguW1X1TBRJRmxDeayq4attXzM6ffvdTHCQdp",
  "key31": "3EhCoaC6TJ4qh3k35by8QSf6gcKZzk5X4Poi61SwBJK7UtqcfdyBEZgB9F23YhUexbMamQ6hbXoc2J7Xhczu3xii",
  "key32": "yF3ykJe45aax9am4JFZDWuhqQdHftHgRo1hTXh2aiTxb2JwcJDn6P7vsRQ9gBBaMTBtFcuVgUGs7aZbh1znwkiy",
  "key33": "2BXSgDtaDiMuXT6ARiGDHQbsqaetFc8jz79rHhqSRxH5WnkDxH9j23XvHUVVMxWEQzjmFEmD8HzBCsbyp8C73fK9",
  "key34": "4oUFHudh7dNUVxH6vYihn3g3UD5AXrGmJ55iJjzV6tjQsyvJSDsCGTwea6fyj6iWBqC1fEGSTKYxbjmgehKNpg7Y",
  "key35": "4wTTemGHT3uAf9sSAjbwpUC343ChWcREW77StDhdwTCNLCZMMZfFSPTcmJB9Z9iMdE8M1xLjAi6UrwFgLqXtfum3"
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
