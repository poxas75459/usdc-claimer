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
    "KqVTGT6zyW5GJcDhEdQhLYVPgtTKKQgLv6zBbbVCDP1KHbEQ7QjQJ3SbNvGvPdTD3eWwsj3uaafjUxs8CyrrfHj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "56cBnhVhhdBvHhL2dKRuBk5Ty4DskYftKZ6zQsJo9rxuTDeioyE2EcPJwvYVuh1xTZhsU5kD489CHokMbiL6321W",
  "key1": "54vrKfTnxCXtZwfA4gahhhv9nh9xcZnC3cCyFzpkgsqfwb2rgY6Vzjoy9FuhSLV4uVneNvGCTxaRPWtaRz2oGyfy",
  "key2": "5ub9Vr4SxMngjyPVkxW1xcVgu8ttNLZD9yft2qvhbjXo6Eq1sy8VwpLAXScRQuQmBoQqwzWKSvnAaU9n44YaPkum",
  "key3": "f8f4BpfJk3rKVN37e9X7BJBJobDMrmfLrJLB85oh9bLBFikFwN96rGc5mL7ksXxPqUUMvn3AyggVhodS9DXzYFc",
  "key4": "4bo8Lo3Gc42LWGSkt63V6vKDfn3Kx82RhBUVEPKALZHJKZfaP6UUa2a8nEEoSSxPZZW274kN9be3gEmyRufz4SRc",
  "key5": "5J9EYw4LCgtuTTzL27DanM4ee24hV9yXsRJNU9EfgScBqRPoJv8eczGH4z1zsuayDEM6JQqf3emhcnKzu2ah7A5h",
  "key6": "3iJPUAZjEMPiCznmADaZfoU5tkDguzfHabdhzW67hLERb5tW8qWWLX9UiK6PG8vhM2Hu9tHzLzZpwpsxPWmyPyKg",
  "key7": "2r58DBZuFZTJqzA8ghtNJperR9nekq2EQ4Yz3pnaNZjtsUdxLdHEV8YSi9SxLjrnJEr2Ee5MeZUY29kRb5VyFkjw",
  "key8": "5qQSBLUxZNupdsiV8RdUE4cg4DcAZG2JpiN8C53pH4HFz7itB3ma8kaSnAGqzRh7D48m1T9FvtrRkpqZaEATmTt5",
  "key9": "5WbrKZxxKKbaNs3JpEXMiyDJuGh6WjukCe6ZmTLTXzCbw1Jkox2FRQMJ6ZEXsYY5NkqPRrythTY2pQFSkR6dSEDM",
  "key10": "4hGtvHQkZQ2w762vu82VGgrRpmR46tcBiCaLVnHazhmGwz6KZjTGdeRZQjvYgCwCoRd82eMLndgJkucNKixamPJj",
  "key11": "3PStUZaqiiFjheY3U8vaTkK2JL8vxivPvxcsbfhDjkAgRk8oQbN2Lv8zRi4JiuKHCeS3t6EpvxM9cy6D7TS6vPXR",
  "key12": "Lq3UVrp5uARE47R5UWu4VCPtifA5Kv19zXhfugSTa2kyJHPieEpXnAxVWkhkUrfBMnaBdBNZdjDBLTWTbvRDYSJ",
  "key13": "2JC1vDiiCmAL2cvjn5zyxvNJRTicySfu2uSzJSAdxk3i9XkAHiZh9ReMoUY1kKy9LZBzqdJUbMzQkHRdSVN5fW8y",
  "key14": "5VeuHYWANCMLQMDCoEt7pNoEspveHrA1WQwpgKxkaPV1jf5LsAVsDXkR1QZepW75JdALzb7GTjfHQzejMHGRD7B",
  "key15": "5JnSKNsCQ5xtLhc2j1AdUZJtH3Efe7Ddp2KQigWtrcoEznFDXutELL8spQ9cA65xdAWFa2DNcX4wZfPpY5yqq2Y9",
  "key16": "3rsqw51FyVP8coCmAVDgY6dE72dZzG6N4sUMaf5ipTfc8VmPPFEzJERDavNojfjnJVYbuY4AMHbw6JHUUh1g4wBr",
  "key17": "3qXnEtArsTDxLDw6oS2d4Dc7KtpYVteThWE8rHBtTKaPRZh2YyT5GQMLZGQZe9S3nnj9EzAkCDkcD6UvdpNS6mrh",
  "key18": "vAwwuMhtNo4ybCNLeC915VpED8rbTsPUr81dLmTqV1r69ik6tv6ArsXD1bNd6wqcFXiL5xnDeSkyASF2GwBA15S",
  "key19": "3PcxtuxK6K7yzNHSiCNyDeWg8JzhhntTxL4ZUcqULp31VE6GHUwrkcuTxpkqzSUsrsDXTdFH3EafMKqVjj7EXnFg",
  "key20": "4cvn2j2cqNiyrMgnvAzg5TuXfkaRni1duS7D7re2spX9RcXa7Qe9ZgzG3WJVtxDHEeaRK8g75R8giTP8TxZu56tx",
  "key21": "Y9P2VRYs89gPUmaWiiPtf9T92VuFaAowQV1p8biDdcukQtaS1vk1fm83oxgwJRQ4Am9Qj9krCt8si55yduUX7vT",
  "key22": "3KuiWn12JrqkcV3Vsu2GTwyydqQu7zjNvm2PTRYb5tq4bF1eYAaWoYGqq5QgmGaA9bSLkeAJvYWXkSgX75sJ29KD",
  "key23": "3oBQ3J6x7RZpAhL3is6EZaEdWEXhNFCxLhzw22x5Nwp36EcMFDP3TBQf7MgNjpeHUnJne6RPaU5ZMAx1iU9269fw",
  "key24": "q5ZVWCBq68YKQxrahzGgsZT2dnbf4LoETMAVwGrGwC3QiSGrrqZfu2j2kF4Lff9wyMUYityDhw5a3qd4NLv4L3K",
  "key25": "w2mnzCtDSgNKL67xEhsbvNriJoQGGn99WdXE9HYv8NDvFGH8M4HA8eKobdvQtawxMLXEZDnZtNQ6qMdfx3MKN8A",
  "key26": "P2JgrNduLqStkya64Yab4ApbCGiPpV12bdjwwaC6bP2aYbFE5Hxfx9SjasRmM9BeEg65cNDPFuekvWgTAZTNeER",
  "key27": "3qkZwGHLmhyn3h1wuFP9keWzSxjZyxNDRTscGybC9kPi3aAabFTMZkfP8wnzbQ8Q5Z6UwvYRcpWVj7YFUU8QtwSm",
  "key28": "5vXyFPdZFnNzUbTXoRdmYGkLb8grDidGwgii16fgdqQSKpwa3Dbp9uvi1mvchGrjYgMkmnY8xXboyncjUa5XoJnG",
  "key29": "5Pm1Uundg2HDb7n5ycDHw6XKLTzonqKNAa4W8DSmP7XB41nceh3zL7N3B1eex4zRhFFNt4M5xPXmyRo6Vh1koPw8",
  "key30": "3ewNDRRv9evUvZyVYFta1BKtVwby3L7Aw75M8ewm1pkgDmXiaTRg6JQxSN3oJ8RSKQoUnwXFQKckwurduVtU665y",
  "key31": "2EtyahAJKtaPscTzUEWfNASoQRtrUHoEQyXq3ukJEUJwzbbrxu1bEpS4a43fX3cqycCP1bDgbvfWoRb1FF8vCuuU",
  "key32": "2VCKkkJV6a1Zed3kDaBuzNDLYMgqvhFJex7n1Sufqj1hiqeCrD4rsbJJTGyNQiNxoB9wW5AYdmb61h9ofLdwRLJx",
  "key33": "KcPvMwEVcWuCZRjvcghTCMWNXzrUpxHwg3ocFnYmQacdNHFiLdX6at2Gd1zrspLC4CfgmZT1d1t7xWGpb8vLCgV",
  "key34": "48RvgPgnGWh3M6h2Wjpn3AphdUgpyCCd4mao7QPgN8dooZxzw419LT8uiGovvjG8F72B6D74i8UoX9TFPppEpxts",
  "key35": "3XcM1TzDAe4stSvPtnY89RZgAYsiRC1K7oN7HL2RP6X5EG1ftyVAQ96pteTn1JWC72BwkaXmTryBTZagZuYW32HG",
  "key36": "4x4JXjGYVM8eELcuzWiR3xnTiDogocvSew7yF2YGajzv2wCbC1qDhxBfuUyVENzqbX33R3dQq7yRkX7yGGuSF6FG",
  "key37": "4jGSjHovscYJATCVC4RtwFMGU74V3ndCf5rF5pCpdbGkfmW1aHQDiGK77UL1NNfQuAtDKHZfER8UunvZi9YNEKzZ",
  "key38": "5mUHM2BuWKm8gKvGMP4bYXF5h3sW3Y66cCnY44n8Z5AWDtGJqArgxhcDRovCnershWPQd9p55cGpjbyKaeroxmU4",
  "key39": "5SxZ142ZBDqQ7vMKTA3CZcKeTyTPJ8yr8Ydedv1GWAhemLRsWzLxCE2ExjUBUea2QZ3heH5GcTCmcjuVomW2qX1a",
  "key40": "4iiFziepHvmNj1dvxA3pEmb2gM3aGCMzxSMjfoAm3KpPfenCr6tTcxTF9Fq1wRBSEcLN7GguTgtvrADHd32sMStR"
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
