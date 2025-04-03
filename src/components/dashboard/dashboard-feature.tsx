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
    "4W2fc4KHhtqqNDkzyBpCV4RKARmpXuqKqJWjLDGPbKCq8zv2J7T3G8cBzh4Mnm43RWtcPqXPngo6uhgaY4FsAhiR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5QoR48me9yF895YGtpUiCX3Waqm8jV65bbNA9mpVHEy6ZRotoHnDf21NjFSAaTEHnQvoBnCuNyCL7VamKaTfTBv",
  "key1": "4eTef24W7W19SNCfTH8tG4D2bnLjoE9smA3goXcshqtmox6RKzDKut58uv26tWJMUJCJhyJ96Jqm4ytYKkptKrgi",
  "key2": "2Pqa4Q2rGs8wTD6Ks9r2mtUb9LjsVLXzYp3CMpNH9HZ2zQbDE53o3rRy5L2EEMbMWvbwiaMWnrFMnp7gLTVbHe2h",
  "key3": "pHwzARUf2zg6Sgq4TtUQ2iSXEpoeonmjRxi1qoaHDTQwPNoAqeQqxxoV6GT96goP9Lk3LbkExpLHH8kahqKutJe",
  "key4": "5WAuRUgy5YzF78mFr9LPPECxkwnEZEyQP6JimQogHAqnjRoaoWundgtpBY9GrKLy9CsmjDCPkkoKzqAe1ou8GqSv",
  "key5": "4EGT9DG7fE8NcQeqaUaw7gMHXBkzSUU8EhvAsCVZ7hkcH2Kmt2j7TJpervpWLug398UVjXA7cat8vVRqGxRxJHbB",
  "key6": "2HpLe21dTi1jFde8FUs24EcSPCNEsfS32BSHCcGYLQedGLXeHvWBTQoSvyBnMqj5fwCUWGrPd4fK1MeC9JUeAe8Q",
  "key7": "2K95w7jRujN1bGcdVsV7PU7SNwtZoa7DxG3y5MsyGjH56p4KcmZwNUHh1MDbhih1fK9aw8JHaXfGcK8UF91TJqfi",
  "key8": "3JamdC4xFLhSijLZvyDAQSxchV1HhPbw1LyfcZGZTEfUm7DPTa967pcbCKHeuY4mwLJac3g7qSKKBqcmhLa3rfTf",
  "key9": "5dMpspHeXnVbvJwL7vexvWyCrGegeuuRjcqyhCYXZ7p7JtG2zN5mH9MtJ1tB9s9qyUgSUYk4bCTdZBK8T9hjjtQB",
  "key10": "3ccTUwxThJ5wq9t2YK8zT1NoJTBRQRduiUw42GzX4cL6TBiKgASm4ooNKsKaSiFGDux7gdLn1vhHbB4SmCYM8sGn",
  "key11": "2dbp4di53Di4FzcVLMtjz7afP629HdrmNJ3tEAZXVbtfDAgYrMyY89R2qxj19cwnWVTeVc5LBwqriS89rtqujNT7",
  "key12": "3vK4Z7gQ2iaNGsuFR7Rgf3qrcojSjFMKnSW1pq6PpGbVBK1EQcQEWiReMeh6MJhvS1u646SJkg3ba7Nn8j1T5oWr",
  "key13": "2kxFdY5WRJBQdFrDVuWttZPi6FUPS8Nhi6SHoq6jpgE7HxJD4Fv1k4ovj9M3szWhm9kPfxjy8C3Q1BxCAmY4Vz6i",
  "key14": "2cTuc3CBRhZFqLE7WiJd3ccn72H3Z2yWwjQdeJPatw9rfdnhjUnbPkQ1M4Dpyqb3fJFEw7gZiU8Qd5Z7q5cdbH7W",
  "key15": "2tYhLike2Ff23LUDXkHfxErhrUm4NAEjMcJK4kDLHQzRdV2MyGYKiHSDX2mW5XQnCbPb2HdzyRpZhiqhRvFFRUtk",
  "key16": "zcwxKMcTyhpbZk2U7XBjdDuLLFxLMnRRmGwiQbwu5AR9D1Mm9saLK9uUxXLe1xPPMdsjzfb6rGjBLP7LuU3pzQL",
  "key17": "4qohP4bpUirKr2Dcvq2fr3SBT2J39qLoDxUuZBDGMtndmaBYrUPnLHA8kPCzymDYTt1DdaJVRng4DsWuxZPzsxV1",
  "key18": "4EzbXLTs41Pn6n2FJMM3EaK1r9kQZgYxGLPJRqGRFRjkFXtuUTRAJepeXj4Gx89nB3io7ySLzHj4P8B9Kr6nHcz8",
  "key19": "qcJytM2JrHFkDdyoh2sJamXPsh6Ur1vxZYGkBmbFY5rjQeMTArr36PaCCuDyJhc8WTjayCdgKYMKd4J2cfob8cU",
  "key20": "2caqrqAyRdLhBg9LkRNo2ULwtciukMkJp2ogPU1vKzqN1E4g7TpSFom8B93Cag4dxG2Nm2XpjimvrD826vHqhE7n",
  "key21": "2wc4F2Ehtt7ZWZTYuhEDmC1XqEpb3VuQgSpUXMNGNXnpS8huKAt3JWjz8yctQL9qGJEKhbbo2CEkLEfNhyTBjrpv",
  "key22": "Jz8SgUWEUUj48sWoGbpdP2RL5rT4EGTg1CzF9J2Mkbw9WAtkbKZbHdVBTYugvgH4sNrmtUzYFckJMNr8ajsLxR6",
  "key23": "2VTnHjGG3TNDSXAve8F3Vn9PxmiKHHYvfpa3335q4are1QMV5axwYsmwGEtueyUKskQdYx4tWb7KLee3hStC5FLP",
  "key24": "4xq5PT5GAkkiWRG3ZJG8fjnEjzaTkMoTLC37pmu79HXM8tpvK3vP41bK43wP93MfV7Uju4axMg4yEeprrMnQgzJ8",
  "key25": "4dejRXmw3yWnoLzxo3idwbsLRUZuwvoXyqPZVfHb3gTnL4xVqRE5tV5hKRLtH9cTAfaYUw8nt8BDVPRUWizELHEd",
  "key26": "394U1xDoYpWABvhtKqMHZBvLy3KqxgD245xBvTnrKYqetBMGZFQCiPLWrrBzP9JW1TieZ3xLg9TxPMYjebottaNS",
  "key27": "5xy6yofFRB67zFJBvbVwwUqAcm2L5MyRZEiN5xXFRRwSkhhCg68tavFKgN53JjMWBW5s8iaWpZ8x7CLgmxJxgN3R",
  "key28": "L5Hh1buNqqfd7r2oBgYYUcowGK4RmJ6unRUPtM1gUvqK9QEfBC9LVwT4SV6Hi7Qc7VZ4BP8TnEYfCBm68maCnJM",
  "key29": "3wh62Q75poyWpWg9gaE6sjnuBVPvPXuZf9syky2iXipnPm8Gyor5zNp3KGpNnEvBQNJQuzQWapBfJ9jJgoBWmym9",
  "key30": "5ze1DSV5qsscy5TSMtc98ji8KfAeuT7wDn16ATLLtXaVnVgcXthXVEiJTfn1wXcJyjpkmBiNGTEwdZHUiYhHW1aq",
  "key31": "5LGPbws9ux5MGaehqLYrTD52jBbWSx5CbHEevJkDXXywfSLWrxgyock8XEZVAJsEaHzeT56xapENBYeQe17k2QGT",
  "key32": "yA6D7hUHNvrjyogMkMVRo2VLuNz2mWdKyHDUiiuCGVovRBuJqQWn6dpBnEnX7FbTs5Bof8EfJKLeNBqc3AZcRFX",
  "key33": "pomonetHQRMqtBjQJBWKGQVhbhCHbyLXCvsap3u1QjdviQz1vr4xB2rPW1rYyvg2phCozJUDm3ZewJ7WHFu5Xh4",
  "key34": "2PWWXxWhbYTrhpmgGnVa1U1HAUAdo33eXftdcRwM1rj91FNPJfPHHhpC5D3d1yS9tMNUHfKd4puzk2yR8SEbYqFu",
  "key35": "2Ec8Ne6kopCGZ3G2A6TbC8Kn6Ea9BjtVxnPNqga6QCC9wQZo8xCiiM5eMNu5KDFhvWBva9hRefp9a3Kjc9f5Zn24"
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
