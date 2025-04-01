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
    "2Y8aiPDAAv85E5Qfr2LAYXovqTkMsETGjDWRNgQnF34k3zgi8jevoJCKHfUMqTy6Qp2nfxL8gHL6q3guWfAvqaiT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3QaLiGGiAEGMgVyW1efXkAgfHaBC98Z3VvtEB1V1pceQcgpivpq5BcTLWY1aSyQHrSBPFUQUyjXvgaZgkjZGwZPi",
  "key1": "4tL1GTwMs8qC7W29jLiZ8gq8pzU1fsF76BrwRiDnPKziCcpECWtWnJbvceX8R1FBEUGe4eoKqSDaMN8Kd2cVxXoB",
  "key2": "sMrPwe8oh4Ag4G3EKv67KJD7iTm3xkSZQ2QtabQFwZpSRXLwdNyvV1P9YzQxyR688LzSQsNg4NKshSLxDMwu1DB",
  "key3": "35dGWB5eqQK7pUESktPZAEAs7aRqQouTe2uMLXkg5zRmB6i8Yfkw4yeasTtNpSFmNyK8k72qPfcJNFYYKhmhGPnv",
  "key4": "2EhNop6V598UqR1B6P7aJkMu5svQxfwtQ77eS4AueJQi2iz3MP56UGptrfph64zMx5dkGSuJog4W1WwgM4Bsuynq",
  "key5": "9mx1TVjQFZAePWhDDxxiatS23Yoc8PJ3uPZxhv7mVw7ReDcdWXm7YH42Qs5GZGUYGiS3XxVFifEx55XWMMPjFdt",
  "key6": "4T38AbSK8jDZkckBPnW3bUsFai7GcMrrUcPjKJ9J5nwfA2dcwQs7rQgVzb4Srgur1ajEKQRmoGM3jAJnXYyQdgFe",
  "key7": "3cP1rVSNMVZ2JmxquTGYCeFQejbMXqEQFKqGG9MPmNTT9gpr9tAeiXFfA84ytv9ZgmVamVRvcnYHV9PHnp1ABYbN",
  "key8": "3bmkSXQRy7foMtL5zUgAgvVVSgK5m6DnGnv26xYqCCNpMs1hd4g3VpZzEHTKj3H6yqaUWhb7frnFiCT6sy9kXqh3",
  "key9": "264oywVGY2cmifCzBPGU7fRn3rfwx6ds49bEficNGcNrEUjCoghXWwrM93gcNRYLn3kkYkiERedxyTh4HC6FgCGQ",
  "key10": "4Mh1gykHdwyG3jD3LYUV3rNozxzzkwG3eZkehcDMMYjemyXypoMA7wfmhnnUhFPfwXtPPqMp5wa4uw5jALtPBUSX",
  "key11": "5cUUpBNvmbYY23Mhd88VMGirsrumPTE7RACccUshJ4L5CQJ4U3yWA6gvBN3ag8AWtUZPF8apcQirkSA3oQ8kenq5",
  "key12": "335z7QeJ3FTyBHQzSH2a6iArp9tGr9TD4F4KQ7JUh1QkeppTwD94SP26YTAiJJGddZ1RTA1iLwSUe9orMST7a8TQ",
  "key13": "3CYYqze4vSqriVtPzH3So4T4LUEZEf2mc2ZgQdW6gxgWb4jJns1PB5JVucepgQQ2pnbeR3wdmYWBkcuZro7QeZsE",
  "key14": "3RbZyPqxnN5mUtNLvbtxKHKarqkPPTT4rMLXXpJDv2rxTmXAtmijPh3eujzyXazH143GWcUyZkrsARGCo3w5FgQe",
  "key15": "4anY8AnkJTnfRabgKQjyt8Vow881T7QzAcJKvFNGNEQijsLJjnnxFJtLmGJXEb2v5hgfNgLEpAvKgMHpEyWLpHY1",
  "key16": "21n7WU8HJwtNKoqivmK1v4wspEuCs84eTyCuxhQKa3b9qMmcA8QhmKQQf1SUN1ThfJUz9SRYgyUfzr29j4oaCrW9",
  "key17": "3r17i3kQTFJLUopaRkkCtLfi6w7B9wadJrJbfQ3LDPFJWrfCcaUBRpPETa5P8GcUBWLqJUdBL9Hz39tTb2GshbuE",
  "key18": "LhWWM8xb9UC1FZrjoHGtr6xhKR4Pe572Sz35waArHBMcxmt7863njshGogxW19utJJ7VsTJ1k6VnpuN4msuND9T",
  "key19": "31oXiE7eG65LDxFnB3y6Wk2R2QGM3TFGipMXxbaref6D88EtgDZ6HAUmYUGc6BE9ueBQQTrBsDnQdtLcLBEmvN8B",
  "key20": "5mj4riR1geVaa7yCiM63mZWA3cLfZuoUc2bYMsahL79U8pmsggdMdeXw7EFpW6LYMGrfD3yWHUAQTPsPvCpkrDmQ",
  "key21": "4vksmnUojNNyFXEJ6PrWUvUo2vLnAJNNHweb3tmLvHDxjsCei9CKBTwbwAn2qrPVFkVqtqv1cE4cX52KSTxNn3vf",
  "key22": "2tCXKwM3X9wgKcn1t6JymTaMnJ7pgDqV7HoXt3mtBgM7pk7dbdgNetXYghUNbkoW9oVfRihzfs4WLVu52G79eytf",
  "key23": "QwBmv63ogDcHErEzw9ay5yyx9tEMzLS3b7MuvA13g1YKVtkC7Ubpf26k4oDyaLsfnNw6Loc7dyDYfaeWvnaNSvP",
  "key24": "7SbCqijB75WmNzp9sTtFDx3X9r1YrT1Z48p9i9C7Pkg9h9dtBev43iLq5yiMSVfJfRjkZkUq3T6yEEbRKttH7va",
  "key25": "ExkjBFnA72uNhYND9KJyCwokuEgkUXzcps1XycPErDn1TjMhKyDVSusj4VXSNDGgZ4egcxbykyx4WTPM6sTWkUZ",
  "key26": "2cW1RHgy8kw5u9CRpJ3xpYt3rJeFdfKCPRu1BGK2dESURmNpX4srR7wUYCRia7M85c1QghmA84QbMiAnDELZs5aG",
  "key27": "4hkjrdF8AXzjG9o7MLhLsWJeAHXYZUnDeXzukWrRXhqTJrYo7hAUzJxM69qeWjeTWBDFezwzhCcGLjtLMKW5TGgd",
  "key28": "237ZxUTnvSeEGaievZU1kBipDWSZ7FPCEqUVUc1Zt3Rc1jSYhSM5mJQ6h3MtxjUtR4emwvHJLWnJjWtDmtQxeYHc",
  "key29": "3mdEMNdv4gtukMtanv6XxgViFH5y98TpFptgYTvNSK7zwcZtSrZaoX8y24sMgJKtBPDNKeFbZY4PXHKDY21UkGWw",
  "key30": "2ij6KWwwwLt918kXP7MuqYDSGNUAj1ybQ1kZLxGn6ZVCgSyDgeywrGnWBBdfhmP2rfA5dr3miVYSNceQoH6VAh9t",
  "key31": "662y268S8uC6YuoeDnvzjndZFSfHaY5U8z7qK1jnniZEVjbu8TVPbE6NxmM9rJuPsgxztJJHiMCczNRkgx89XPkV",
  "key32": "4MkbGKbDJ3nASPQnHzwo2HdixgNyMGHwK5gnSEChbpVjc5LFtJWum6JQGtCgXWV2wuu9Na4KaZuJPYm8EWNNUAFd",
  "key33": "4TDMzPEDeGDdHuDf6utvb34ZyhrrwiYvrs8vfPZf6i5rgcu3rft8Cf85zZUuHC26Kzfcrqxmn5mPSZdLprhA1eC2"
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
