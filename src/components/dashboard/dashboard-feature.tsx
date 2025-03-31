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
    "MLRqrHomLF57nwt3Z3ANcvYsTaBCWRTU5pxLSnSZCF6R3qG1JAowkCzFaMTp3Wmg1wX6CpoVzUF65J1DDba4n7f"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "nmJZq9vp5L7JxPGBv6KDZgU4YvyomYWcYdBSPAt88N8ZGHJsUoEtvd45emH5kwopGEPjNsvrZjGmanUwPwSYtk1",
  "key1": "ochs2UKtQNCSYu56gURYBvDoe8DFwpLrCzQNnuMKPTMxNLcpWNZk63o6dMgvtQu8ZV8zdT4iyDKxXnCs8HdHTDy",
  "key2": "3qLkNXoJTCwasRDQbCx9Bk6uuAAGJvsKBpjNVVLvuSUsRjS9vhz67jCW2jYYHt4Lw7VUnueiQxKuWsPHH399oznP",
  "key3": "HVKo84wNoVHDnPbHdcrPCeHtwhYEDjccdmoxvwp2iJrTwVQ5duU5cd9EMNU2CLH2vySb18s7XpwvRnPwaWvVNFf",
  "key4": "63SYdH43VWRpCqCHtCXmp1Ep9CRXo8zbiXUDfQPg8BeFVcq11aM9efZ19SGk4Fc53DTtWrGT3RcMNejcGu2KYgXz",
  "key5": "63n2TfW3uHDYJSKqGk9qoHdEmSZ6HnBdYMa5L2fQs4NQp4TgEuUSDsufNmFRocFmDXySVT1ee1GucEKRzqcsePnG",
  "key6": "J7JxFX1g72LG8BkMQLXdSs6o5MB28z9Q74XnaAwtJgMZMQ73qaEWx8uFL5aXT4hb5XLrw2EA4iKLe9QaUkD4KYp",
  "key7": "4UoAxHJwXdXGyMtKP4krbp6t1whgHjacDmR1TbuJx4oteUhcbiRmc4BvN3jdwJP5BHBjrNQYK6LM92C6JYhFAhEc",
  "key8": "5m4NbWqoKbkgiSQMgRPPgiYJoCiD5bv2vqP7gNZJJG8zTPzCwjPHMT4bTecXQCTJey7NTvumpWaNbJtgYDj9t4Bn",
  "key9": "3Tb92i6WgfvT3vjxQKCBmPLT5JQH8wjdREEGqSFHPhz9oPk4Ye5odEHjYygUDQV2iiBvm8EZrk3YvxgyE4TYbCrb",
  "key10": "P4QBu5u3NSzTcBTVZKjuZt25tJnaWwpXvgEmhbn2DAcRyvUTko4dMEpTWcmDpQfZAJGVBHkzxT6J3MsomTGyFBA",
  "key11": "5DZ4AnJoDehW2odiZJ5M79BzryWg25upyb6o6i9UZYUBZEx3PcWokamfGKLGgHWSgsLtTMMj3gqvE4PTsrRCBf6a",
  "key12": "12z2hE2n2W1ZfU3VtTvnPF6UXbnRZ2kxaTecPANT9YxLP9hjGxwfFYaMJeDMQxsWHg2TouT33zZhRepLz88R58L",
  "key13": "231bmdj6rTri3fjApbzMEY9o5rKAext6tdSw15jHzPLXPoqLyGHThYMsXwGKbKqChj8Wubhe1VdRLNraLbuhA14i",
  "key14": "24wE6odBy6GbVkJdm5h6pXaUfsinpAgiPMUXCiFQe2QNWZe4KEaJGLhXhx1sfsBxRiQTTCJhsbc5GFyUspVqwV6X",
  "key15": "JARDh5AsmdzEYEyUB87kTiJXKz6JASRc33K4GquUhvGqFWEH4JGk2AdVS8C8okTfCUTCfDrwkiQZHPz9N3Fk7zP",
  "key16": "3ECC27iv7KAAkNTHMc8bngxLwVu2BZK4JJWNM7dZ5fhsChKLauL5DpgFX4qC7HXRsnMyfkGhpCVm1v6PdWbCG4gq",
  "key17": "4Xr3rAD8UiYUZe3Pi7hvouocpTNVueW8b6dAcSsx1gbSme8dMaCeMMjZagspjZZttQdFY6xWgLJ5knbSZ9KshYFf",
  "key18": "49Zc8LnBbmcTSog63MDe6rfutJshEgKpGgCd92dthqm9t48NeT3EhauMVX2c6VCxgWzDNgQ8q28n1Bgd2hNjG9UK",
  "key19": "2h5xbHxYHveN7fGuW6JxBkFffS65XkcSWMgyN7ZJkZZfzMWZXtWbgpb9eYm3wVRRQHeFLCSg3GhgCV2bhJ7P9r4h",
  "key20": "4wRA9mjfnSbstDYJ4hyLT5jkkBKvcqbaUDB2yEJDEQ7ZX2XJxU5ZjThrozmxzmCMbidzRAW9ZKvS67Fvjt82qR9u",
  "key21": "s4kesMSVBGUEnxzy5ZuMw1AKLrrh27qXUEAUHM3j9aCi5yqF7Ymc61C9DuJuvXmvS4gjxZykfpP74JnwgJErAyD",
  "key22": "yprrGdic3AhGNpE219VEhQCXaSu6LLPufmauojAMKjdowDhJUEwrBNEtEMq4WwcTsaiv5nogAeiawZt9T4Qu2y6",
  "key23": "2udjbYGCdPD9DiVuuoMY1zG2tHf1odZgHNTSUZXYWZC3j6P8cVEzTs3Vpmza7eovA1C1Z2drqtUhXcVf13zSRMNE",
  "key24": "45wNWBKZsxUiw47Kgtx4c7L13yCM1fz2ELNJD3gLRT46T9xTH2n1fCSorBLfxeGXNTSBkiqbw8MKDkdi1RX4R5FN",
  "key25": "4SBanKzpRWHpHc2WoGafkunD8wqT96BBcYXuJAxs61urJk1RH4TKqjTRXsq4WGLW1r8e5fVsvnC5o5knqzATkLNw",
  "key26": "3nHX5QzEfYwn4Hm8bYTtbParY5to88iWrUmvoaNXbEJ1JzFMr4wxzASYbsJHMJrJhLAyzTbSg2Wthhut6AMBfwVA",
  "key27": "3W198AFxiMTkewbAk1KiU3VZmj6uNeAwc38z6zCYWEmMcSqJHADJvqTeQPPSyYBADGRhwefxxWHSzjH5SPpEmfL9",
  "key28": "671AzumSbxTb9ttkEZTPzHp8y2fWPn2cN1Jir7EueUxjTjN8GC536RG1y8yrgKUYYMUeSGRap6yL6YBHHeEpkL4a",
  "key29": "4NNDFTCoasVY5k5TZ5iRTgEQoAxwN4rZB5dNhgVwAj1muwqNXk3V1of9weiFWZe3Dyouo4ZwTUEGyDCwAVydpBNW",
  "key30": "W9mEuUgxWKVAeozhjs3bbKkU8Zg2VD8ofaau21nPMnGAD7VAuAmcnKYjdB6vadzz1mhggX9pghkJ9kUtpy1vekg",
  "key31": "xyTJMYPyDZWKFVNAmDbwFAyXmtR2L19sZgeVvNJzG1EwcWZrv7Kh7aqmrEWQpvWgDq8YeWhRwMchAW71VQJuyS3",
  "key32": "Yk6htWtJx3KHpDqpgFMZ3cnfisYPbWFfFj1SWzSbd7MmTdA6SiC4Fq2HjsfNuvTXogEY4YeDxWEp6k8gwBJmEr4",
  "key33": "2oeC5ZCsgprCYpEoem4TpSYaayeaoic41ib3VNUoWSvCDhWS37EYGjabQuvRrY8yQPBTwG8FuJ36SHVpevjXKZ5E",
  "key34": "4yvvmYt4z4vkiD3QixWvUYpmQCHXA6xTydUkN96pBvDX9p3LEV4rzkH4w2PpbgmTk9QWoFTXdoR3wvGni4jDPqGG",
  "key35": "4115egopqaEJnDEPGpXkC1PHEXPi87tg8CzLKLwBBBaLhfc1EaUfGQioca85bpJcXjRov83gJhQpfsoNUrUzvq5k",
  "key36": "ZoRt987YJTKSEKqfiTxhazsYhfMdnUYhi55xkZciGqTBfwfbUJFnWKakJYp9iP1fjNYN2iLJJ7QdPMWcrBAf1x5",
  "key37": "4iHU4zcZ22fhCbFh6tET2MkMM8njA93nYcwrTXeAHnBnCZ6ZvtWSTAWndgS368k69oDGJm4iDnYXMz3fqwWJzn7d",
  "key38": "5QrUAotRPuTfxSFmsmmCNgoK3GB66aM6nuUBnGsSLNwofJ3QAza8a5MtpH2Sn8ammdZh7vHU7LC5uNtY9e98TrWB",
  "key39": "9wmxmSS7xx9AstdqnLG17vuAdGqbSXydd7VzHeWgane7rz2n4b37HboAHYGrbJ6mnA2GvYKtYQf8AWVdF2uLcE5",
  "key40": "3U5nwvbW3xpy1YXYvyAvjgX6geZP6PrHm51e5Jy994JD73kBVGGQcJMs3UG1SPMpcUF24WeEt3gcGUfihiW5LHra",
  "key41": "4MzkWGDPTG17npvd4n5tvxgUfQwjiq8otPuH6xGBz9Tz3fj18foPyKMV1yvqFEN5WheKxxzW55pZhidDnRthuy34"
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
