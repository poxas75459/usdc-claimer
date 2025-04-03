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
    "3GWFKM95sx6BgiemJa8t2mUjUB8Poad4vNwHNNHoJ7SmqtEiqvCTbiMvg7ic6CEDjihfxoGexCKwxCVPurP18Phk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ZKbxS9bsHye3tLPzp6w6uMQ6ivcRsDEeJVX3YvUKUJXndFmmwMkehnDLyyRGVhnUpSUAfwhCixQJgMUafcbXy3s",
  "key1": "4dNaJZpfSAg6hicFw7qfKm3q268r8L5mrXfqxBVoh15skLs1hbgKhVoFUjJZcdd9qn16vLC4YkuUWbUTtZpR8YoA",
  "key2": "3nK5WdEhzKU2QRF7qVuXnq51GBymd18AnbjEefNFSwm8Z4LzAqdNkWZ9H7Xopj3wuQy891LcCeeXBr4WdVdMf3ta",
  "key3": "28UqsPGMX7En7h7J2cRBzxZEYkUHihcjqBt39Z3pSB9yDXTPZSH2watYMydN4D7UuA1Xz8XiNbJXPL49kd2cu5Ts",
  "key4": "5wt7GdgJZARZ8DZHP2HzKWVdcAq6oBbb4XJb6wosawmGyMFgZDbf6cVFQjfoLiqoSpGdQgnP1MMf3VxKbPfscSUE",
  "key5": "5gbedgRJkWYiYkMTCcnNgYAjEPawpp1WxM53sqyzU6GzWRie7kdVQuvSMu7JaHA2aHAV39MdQajmoB3oJW2X73vj",
  "key6": "1VhrB1WMzswv9ADV1aqyAyt9eEWtNU55pyJwhfbvurCFDZ8PxjHzJLkKtFeKMRsn9SJaigVSiUdR4Q6h2fv1D7w",
  "key7": "5zWf1moQrecXLSbkYBo2SS3KEXiczXJqKtEqMoSJPpj339peKirUgn9oNbY7RVRzbWExrj8hjLHGo2eoZ2ZGB8YP",
  "key8": "JZ3ejVRpdMoBnrRsVuwAQ7kG6huhAbdYeZw9GQC7w5JUmhRoDTHBH9HKhCYqy7Z3CzBMWr3wbb8xqDSs2CaD3dd",
  "key9": "PyLUwqLShYQVm3BZabgoRWDoMf8AhA1T2ZcwUCV3wd6BNAVuxHxZ3Z5ymxVe4wopb2wGUCcrumdBin6S7YKsyEr",
  "key10": "4HNUwZCHQ9M3HVztjMndzftikEHXbuB7sRR1d3HL5L9GwXAmmaSYJHQ8x7bjbdS6fbnywT5LnfiFoTaDgxa8h6Ka",
  "key11": "5ADA7ubeNtYawq7p3rmGy6i6qW3eA37HvYwmw2pEgJE7XQn7fXNEKR45Wa2LDVtcUT1AWErpME4EHX124AXpurHS",
  "key12": "2H5AaqRxff6rp1CMCJtVJhTyzqBXDSwCGgYVZoW3Jh5vXvdx6scUBCKZdQBjqfeRZFg3rqbafJNsZe7EnThvsYVN",
  "key13": "mbEKSzBdyHewDeVHRxNjocUFEXJS4Gf6GP1vAeCQQQuei3tcUJEndMqMNa1niMbpsexEn4MaWd4TtNURYeZr5JT",
  "key14": "txWziRPCuKWY8dQPHWo6KiFLqn8dtemv8oHdwynqwzhHb3fwtEu6hG6PugkXqZbPStfRBwJZEWUekN2i9Kx9nCN",
  "key15": "3w4iX9qCndZaUKxdpuBAuxsibguzW16Ek8qsBv4rHBYFPjwdkM1QBNgFT7vX3EiCGwVZRougpPEQ5eaP9qm7Jd3Z",
  "key16": "na8NKw6nRzLPAp6UQ2gKc2oVqz2qfUEMDM5NaX3mpEu8uk8MtuUgtWNERjJ4FiYVjZV8P3ttsYSpTuhAqg1zujF",
  "key17": "2TFxwCNPR5j5UubdLFBsQkZV1Ly6vnAebXwD5wgAtN5wC7mYMLn5Rn8Prby7pz3saBT7qEXEAN9TdP5UAECr1zi9",
  "key18": "129LKr95ujtjcGoZzs6i9TFfJAoqAz81gXr1KQqMP4ErATpAtG4VzDPHUzepdkbETm98Uv6rQ662KhveR76vgGJF",
  "key19": "2zVxNG98tfrWmwXQBs13CXUrrvYFp1Qc3938omypKG71wxnRZRzGB3qcKFei9uZVjQD44ixznmkjy9YEDW8KMaG1",
  "key20": "3pVNCG5zyRBHzcfSLBb3E1UCZku2ruyxRA9rsJ6qe6Eg5WSNeCUqxPwh37hJWGtKqhjqckPTePvjWB1JwcFiQUGj",
  "key21": "2JpvkhMBZVrg5FMESVgwYt66wag4Mac471jiiYugrFb7wnqKGM1ik7jYtdBHJnSD4R15JAmBXEsZoCfzw9vuBSu6",
  "key22": "34oA914wPD2EQ5LgVV2YWfY2h33s1MGAVswKtKxCQJn91LMEsjtb3Aoq6J56zVa4r5cjWi8ULfEZuSTj1E129LNA",
  "key23": "3614JxN33qxn2gEq4Qq6mpm66KshX7R1nTof3mxKzWkALTpS1A8PphAm6WRFGfGxYgvXoCiAD4t1kAz2vJYsQCeQ",
  "key24": "41bytVPLz4JHHX9cczhtuPdhGRAgjzUyE6K7JqiiuMgbDCEsuaDapgcvZXaYmgiPiuzcjJDj2oqEu1CipfB8hqvv",
  "key25": "4rTeFQuMSpL2G1pSduKBsZEuevEEpMn229dcMXEpMxWZeRFCAXXDZXkFNBGcT33wFnjADBqNxzv1RUzMVsFLexgw",
  "key26": "3UfcP3YLxUkkUJc4WSkfnCNaipBYMtDKzZ7SyhMNb8SDRPMXvTrWrXnAnkBYkMmo61YuHwgRo6ED5zwifhPY8LZ3",
  "key27": "5dVQApqjpz5YHB8baoqdxwxfVA75ZYVEneGMuYdR1dWiQnptEm8tywp8PWptzrBApuETrNwmq5jQrfguCed5bytR",
  "key28": "2bK172kDm5SvWbPfvc1g2gcNNUTZvFqiThTHbJfB7UPgYLg7vC2PdB3LohLUMKWns7MoVpSKsntc5VZBTPdmoQBb",
  "key29": "KMk3Zh5qDKjryG9wKHJqq1w1Ty2SV9UFG5SQUWAL3uSGvgwt6Q7JcRTET5zT5jgqWMVAUGmvXefPvFpEWYXsnoE",
  "key30": "5hQsU82iA4qVQnNYszFauM57HFrtpym3J22mFBn4c2RSwZUeMMJMePLk6SAniWgJ3EndUd2UXkY6tvHC6f12hB84",
  "key31": "79w9yo6uwp5YKZ2m3ZjkMA4ehwSiSuKpEo16F7uWkWFiw1kA2DDox5zKCq7yF6uFrUha9z3PVC5imCBZmeW4jUX",
  "key32": "2NCYy2ZjfXccoYTdSQQkZ8vyNo1SUQmscYAHz64uaXG3QzLRY8Xc3w5qeCbGM1Kp6AVc1Y4WR11V4ST7RsCrgdYb",
  "key33": "5Ty3LuQs5JShhqQ4HTZTA5Sx1caFbkkpy9Wto3KMvGQeowwDTbow89naZHw3GVAPk6KCgythr9ytSsCPsbqbVvPg",
  "key34": "5NirwiuLaxEb3S1vp4e3AN18DLbSzEAppprwPtaFQ6oSgjSeqszWByK6UjqZFwYoK7c6zykdxwdSYKyC2M8HkccZ",
  "key35": "4qJ5N5KD1TupTc2dm1PTm9ziMNbpFGHcUsJrvEaRk42MDkB5eYjZyZcdPrEQX7bJry9v2915kkBnJQP2MAjbAETT",
  "key36": "2gvUK82euVW5GQzvp3zRnNBxkmbmsdBSYGn3AzF96263JCi8bZ1yDjHtVnT194qk1gFtsX6pjYiz4xWhSeefEG9x",
  "key37": "2ZT1CKZAnG3nKr8U5LvdZw3ktN8gVKrUVPhQ8B45kUSkhhsvTKwcJDuqiYakNiYVvKn7ttJSkmjzUfzCu1eJGmP2",
  "key38": "4DRqzjG16UvAQYAApj7cBztJDJkbFqfzqEGfYXxqPJ81JrcFYPuF13LvLo8XPDigJChWWckRvuyzGDzDG4ZpaXnk"
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
