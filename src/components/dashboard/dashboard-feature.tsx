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
    "WuMNYKBiWM8KzVWmAkeLtVtaBPcSsZGr2wTc8NNQ26g7YV6QzQJpQ8Ta9JUSPKcWHMA64B42dxDxCpAeUPyq9eL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5hMXLc55WR3S73XpXJTUkhkwcgjuZqgqTju6rGg2iXRyZXPw72xqa33YQz5xWmkBYpX6P6ocq7W4y7LFxKx8Ay4G",
  "key1": "4TPceeH7QbLoNNhLRV6HJqt9TeAR5RTT76C9rfLmivcN4Zhwkr6dGFHk1AZ3YS7AhTaTzUYKT6ALCu97xr35SYBd",
  "key2": "3zg4CpR3CEDWTb86gDqqCsYpcpGsDGgQJ1ZhrLoa4RCer2CNz5sLE4xR1ighhCTfA2oScdp1pnUaow2rBenJi6iE",
  "key3": "4EQ9CrtihUWmA5B4iHiFM3n8U5nh9gtzzAya86RrqGHnmXvY8RtSJuyfXpNSauLiz2TfYtg9htfxDpw67jLgfsJM",
  "key4": "3Aa3R3JR19RWaoc62FTwaDxip1jTtQXaX94gNRx3ubFtUNAhGDRnN5bLQ4QjRWk9Uc2zdCHMHk77waGj94TvrZNE",
  "key5": "UzqtJRgD2oH2DWGXAEvizuDs34b5Whr5S3SFy2rRohP5Frbf68XVEEueu39qBoQ7zNDqT9jzBeH3HbV4g996xqi",
  "key6": "4YwQuxjp7i3FDXUjTqs2e3YRysUC91PLQC8qBsXL7Qi45CcdSw44eAqUqjNJoVXh5NpYqB7VyVbxLLNhpSToD4e1",
  "key7": "3yC4qenF4y4eJXaHPfjyEDU5238ZZpzUN62Yer7ypa7d9iJQYqzwYSwCJXfYqLScEy9mrAxetWh8YE6pfsEw2DwV",
  "key8": "caeX4r7z9zg2VDEESSUs8LuZxvnSS1EWQdaZbVmjkjHFyL21DF8fPw5SrXviJbTjKmuDgKuztT3RvPTMmVPeYGb",
  "key9": "8GBHQMTYgQYZPkVWHFTqDrD64W9PtnYAp4SnataX5HNhwL9Lr8CnTCVEq9GAtoEM1o4auPbQBV9GWsjwNTQKyVu",
  "key10": "5vJScxzhv27SU7BmM28ZBTWFzUjs839m2vtmLKiykuckvzYjDCJD2zZb98Pz5fw5nsnZbmiz317zPqAz238ZXo2W",
  "key11": "37LxsY1h1RaYukJcd6qn7ySNeHjB9XaYwWH6vZuuV44BKj1p4UBaKBnXhReRbhyVa1aDJQdq2uSJ2XSMhBdtr13K",
  "key12": "2NeV4xaGnHescMvsKuserCiyK1ugx1NWCTnWZTvMwWHTaYNHweRz38NSky6tWARiU9kH1Fupk3R7LVsjbmTWzVru",
  "key13": "3zDCNaPqdg8n4thLQM7oRyA8dCDvTkUME7TD4D9ZuVuEKNiHqNNiuj6zQtDuuFzVKSnG1FomA1yC3g2gP9wvbrAi",
  "key14": "NYEtua6RoVnd51StuYB7AfcJrUYknn3wxydawNiXCHbhZpS534j9AUNZcdDB6j9VuvfH3cJAtaZo4j69jfksBQS",
  "key15": "LMok4bjzPsztLpM8EV8CeTE5XD5qM2GqidXvEgaRYkAzsDMV8K94HYSA7Wh5wxHAjrc1vbeKnLonsUVH2NDyn27",
  "key16": "3po1W75821maFBypTqzjGJBNYzqCv8oL8TEYmocszzDzyvrxd6bxXyMb4Ayfh7sJPCAP7i3t1QCLgiq7BW89bCtd",
  "key17": "4EmEPiY7p6eY9VczbUqubEfp5ZUzNwnJXnUA2ztFMbwShHgTL1jtEsGw47zLpWxVZcjwxS4Tn4VTyya6NdiT27N8",
  "key18": "R1gQtRcWjeyKmAqAadis3ssAAmZ22KFQcPv667PUB78Vzrb9eBQhsdmmqRXZjoNk2riLwFSFTQnGz5DJbJ9YNWG",
  "key19": "5Z1de6ahtzRs9keKi9jsqFuocgGrJKH2c5LqSgjwnQ4Y82JkJBTU4Zw2HsUWibTgqQX11tLELBP8X25CGRvZDdQP",
  "key20": "3AbhT7AeXQthmCkc23CDnKT7yGxu3AFdfPXQohUKHSKuPZ9RRujzhD7YLMUgbrrfWLRDD4wUtVFg2kE5cwm3knL5",
  "key21": "4uUcbUW1NPevJc6L8nwmoE3v6rjJTdTx3ckJnmjjUJgnCHkHYHVdrBi9NqXdCUVpACEMMX5VV4JWSTZFCQ4mzWmP",
  "key22": "56nMuiG89ysg5FTFLy5sBgwTWMVMaoHR4uNCJ7rcVP8bbKRdVJLYRtjeHZrGBctxvRcVeZVbbLeAVGGWDadnknVh",
  "key23": "4Nh52q9cobX2Z89mXGd258SmKJhKHXh49CpTVzbHgaehFe9emYesUNF3uMqdBaBBWej4ftEez3i2QNW7f3XQssGP",
  "key24": "3FqGEPvbEX8KaGzoQWPEGBa86GGGWqzoQs4tx14M4F32zKp4nxoi8MmunHUG2mzp4bhvkBZTxeoajLBQGY7kK56b",
  "key25": "4ENEAogCNHmr9gSdJQhCgak4zuK31mCFNrEh9EpNezGVmFzT2ntdMXJJ2d2g1KqPBSaDbYLDRYwouYCTwunBoWbF",
  "key26": "3FS55sECYrobFbVMEm8NJbagTVGJMsq2CuWqc8FiTq3ymokuQHn7AiAdPEQxJ94mUvh2L1yRsKYGsM3YFLNbpifp",
  "key27": "49kGKLyyZ5qoXaFMpd3BdqFtRUv6SMeWAqUyHyqNrGxzYihi6smXiZb4Cw4FNBMsUfh8MtmoZg3kbrLXSH7fZ9iT",
  "key28": "AbCi51atNHxTgQGDR53opcvatrrZdXAHDrbEcDxTGBDgjBMKohYodQ1PEfEFEfBam37mKsMXMfF3ziHhJ1yh8Nr",
  "key29": "2uWNM4eConv6Cv9cBKJ5PjydC225pA1ryDDGP53NQoQ99aMyZJKXy3XtruArHVMAZaVn4BMXJkCJGDukKTD1TV7T",
  "key30": "42XQ1Di7rVKfjHybEzReo7T6Kc7uT5uMfd85uZ61V6yXnGuBYMP1jKgCpXyLHd8447MSFQLHf1jFx18TagYjJFDe",
  "key31": "3Vho7QueTLat32GJQregNoJ78EcF9qRoTZ1pBRCkbyRj7LKchLyGJAMBvYRmgWrDLcFz9JNEfJFWroebQRhrYCQd",
  "key32": "4ECr9YALDeKAVtJ8GasUAhHqccMsxqqUuqNG8cYtUGQ5SbFaxmVWNBZ8oy8j7jZKdoUCBBVyrxf9wGVa3PVmWVRt"
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
