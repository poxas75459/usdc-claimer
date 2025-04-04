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
    "RBvf6o2sTQkDhdKJcxQ8BNmDYfCbSWNivmCZB879UACBSoBaSH3QtwG2aQohyoJsvQbm8NSSP3i8bJJKrek2skQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "31MzVmmQj5NhFmXideve41sGeJffJsLN3fqJKSSA3hpehwH4mhUCoiEbHX4eW67QFR7NiNYznRfjocoLSsbVD5Q2",
  "key1": "2Cz43zovdE9FiuqKx6kmWxcRjfeWrct3MCDcZ99NqFx3PBmbfyw8xVSfmU36hNzcAZxvGVJ5KFWjJYAG33GQFNgm",
  "key2": "2TUbaHjjqjZa8DVfzVsJmFEDrn7QyVXt5rq3Vo2sUkQtyqF37X3vfCehNPWSqKuJniHSJYQKbCp7iu8qj7q2ktq6",
  "key3": "e7BccLZuUL2YhGEDNBpwcQV69PKUQQH1eSzgNUYfNXhgu2WLxeAiKhxHvgxc7whdLxHFKteyf9T18ezwHAEQcUX",
  "key4": "2gxJ73Jrb4otGpLVwnBxakXqnkgqKDUbX6H8WuwBPKBuxZp5KYs46THCFwNCAGCodpbX1b23AoGxQZmgbkJhCvmU",
  "key5": "3xMQjpjjNr7dm7WfUdPA6rn6kWEp3JrSHQ58frLzYs5UNTTd3DZBrry6rAJg2y4tJAxqDdY4mn7cSN6iWRsGRs1f",
  "key6": "3t26dGHzhi8AagSiQGEtzg6xgk4FEeusVLqGheCgVzJEoGbArYbPaixyH2Y8pYHWEiFyP25Q1qHRgAQg9VhcFiYy",
  "key7": "32TFJwVhRQXWVgEh4MuKQTMwPGAEmtuTN6coBz58GoU3MVCCgDHiFb3vdtZudq1Zx8uE7n9gDaYAB1tZCNBPgcdP",
  "key8": "CCk67zKWcd2ib8mPbQ496sp2mcF16utCBS4gwmEqA8NaLvvh6XmVmgTnH73Ndp16tJEgMyJD8LdqULDGmxavJ2a",
  "key9": "5JMwzWA8rZHCdxt5MX3oubz5bLcdiewvimQr6eYjD2qRwCgAUAqHfHdnqPy1WhbyvnnpMx49Zy3rkE6yJwFxpmui",
  "key10": "kwse9eaPRV4dQfrjiVuU7uUXaveqEdM7CtyA6FmAdD8ycgSVwQNA5XyJdD4HXW4Q4BXDJgJQna9w7XFfziZ8pgm",
  "key11": "4VNcZ2UbPAtMZ4bE1an3yAbnffAxZndmFA3g9pfAAm6GsrS1zNWbtSa9Ywh4ANmSrxYY6rgLKmZnq5Rc8zNtgtNm",
  "key12": "PtPGkiEekyx4ZXr1HRDPF9WYWeZ9WvM3yBci1gpemKLW1dkgSR1oJEK58HyqhqNXPLhRpMT4KLmLcEzTqY8E611",
  "key13": "4ec8SD1QdFqV2ST99kCwZiWQF16Zbz732jTCYHeTWdvimKXkMDFRXEbAZGoPjZ77T28r1EcmE2maamf1ferafcZ9",
  "key14": "2w42YkGULmvk6ej89m2aT24rks7dLaU9q5jRcGPkbvu7HWCCfxHrkaCxDaraKB3ccD1pKNZwxTQErzV35WNJciw8",
  "key15": "5TpFLEshx5wu41C6desFZWoP18YVL5HodnoRp4r5TfdiRhbG17efbTmJmSRQ5ASfCX646BpZuUTfxG4toi4RE1i2",
  "key16": "23X66kUshfH8rvqJfjngHj4M9sHip67cbhocFbMjdaeTUVtDKnBTNs4DPGuTNXjn1ftDZFYGKCnNRPYTgSzeCo4K",
  "key17": "2UThcUinAHj4vaWyuNXUjj2ZxNDgQywX7LqPDYv2C9RDLGak2ppFp6AxFzBgRnFGZs6R15yXLM6FPWmdtFks3Jbe",
  "key18": "2Z7Tzx62AySaqGk55MopWw9KDkrwQJBVAXxk3hPyXWYbfbE7sf6N242SmTRQq7A4q9vxdh1UExHx7ET1sdsQ4ZSo",
  "key19": "5mmVzXuJSFmCnBp89k6UQuyfVGQUKoXrEH7qpVFBJWvpHq1u9M8esjkYYPrZqnMLqgBgVB4GsVnhGr5Ca6uJnd5H",
  "key20": "sPn5oCQJZsy9dT9tjMPgn1t8bxNobEGUu94a4evZJ9HRi7zXHk5kJkWyQ1Frkkx7v86ofKYf5mikRwe47o1Rb2c",
  "key21": "2agXWk7RiuiKvAhfWSTSBo84ztRwi5DW9SHBBHjjTerx4mmtVEVt6HkAaSe29GqrPKMNVydoPkcHHnvTaWXtkekr",
  "key22": "Hz36XDqv9Ceqh9AyxeM3iLt5DZ6p9VKBdPQSdt1wp21G5pxxRBg9HHMHVBdTnY2R1KteniQdaWuwfGih6hAPh6T",
  "key23": "3RDwZxDSsNk4DCV87ZTChgkgMbBrxUPqA41qBQZYXnGUJkazJzaxPgcr2SJrm6kjgGK8XUbrSitGSq4RHazxjWXg",
  "key24": "5fB9DRHZtSXqmGR6qzDYgTic9A8FraXUtduidkax4HeUrXZ3nCjkL3LPbThMM5g6hy7eLLZdFsjKriUEKznPrqvo",
  "key25": "3mgaT9WecLFWcS1JukhUDpgYrw5xBNkeFuTjDxdvNnrCyCm6AHk4RNrMH73x6RbRKihoQewVnhcPdfVzpwjJkbT3",
  "key26": "5AbiwFv4zSMfU3oA22zHpQHkvTqt39bifNEsQ5oj8TNmRu6AEptDHCnVAtqutfMUgU3cNpJBUVAnJzpaAePbJz5P",
  "key27": "5pY35WZC6KMw75Seyn9Gp8E8jUGCm2KkTG9HcyrbswdULSjNyqtVyQp5SPPJHuepEEyp96T24Hy2ebVi6JnDKsmh",
  "key28": "33dj3uPBYAZRH5hcmMYGzzyovGKELYiUTUbjHmgyomWFmWpShMU6bTkr7SY6URfr3mdGUZ6pYprBhGYtv2oq4NHp",
  "key29": "2VmW5ZRqYTpZNWdayEJdsfzPNK4bmBs8Y6ZnRKtXzv5RW3fqwbQFrkpGgMNyKa7y9N64CfTttt9rKd3FGmX7G3yo",
  "key30": "4WU9fFjxerwqmh4i8azHamYrQtuvPZdVVHo7J9AgEzKGmVgEHdujcmpt3smXzJ5D3E2HTPFwivvfbD49WyuMrREv",
  "key31": "2WRuEKoYHyn278Ji5xKE7HdsW3o4b1Zeh4ZKYrS9d9NzAjLTgczkKWqTbSbWnx56j1NPn4pnQ4UopweADqi29cQw",
  "key32": "5DcDC5KyLT9ZTejyUNfhhmFSnM7QzAETdYHiuCCvf62QyWHYtAUSaqNtQJSuZu7PaGUH3pWggF3siStNKWmYrnsn",
  "key33": "2c3EqEVQNEoL3TRm1kkm4PA6AuRD9EQdZfsUon2FSPSpWtsjUVPVZcU54zy2K3zVPbzGdetQ5R1bL23Qv2jM5afw",
  "key34": "2vVnBAME9J4cqPZWsHwxVQ492wju9xGUVQkyTukVyBwaeaT9qGxKNyHJ2MHoH6i4Ki3R1SQjuFoPGeMMJa14fgHD",
  "key35": "2qf32HohewGs1M2x4sihJPg7Sbsj69gmLjS1i8Pk8sgfn1HL7Nx8wFAKvnkDSrSkvnj2sT2BKxgb2k5GMPGRX6E8",
  "key36": "66G8bu8xi1fo5x69ft4L799H7YRdFJYSDmxkuuKKeh4ByYtz34XhMXJs6Sttd3z1JJPsL7bJzwqM4YveeY1fUb4r",
  "key37": "2iBYdb8sMqkgSsxZtMhCMuJbxPWXasmrMKp3x94mBB8Y66AA8vYkJ2xiZN8mzRYm8FC9VipsVXN81XAzeom4v1bB",
  "key38": "2KxCbRgPuP6zqtUSoRSDyKcW7fvHKktpNp4kZc198F8vQCP3p6PiGdeDktjTKTEV3t2LewPo5Wtp38c5CNYFMX1r"
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
