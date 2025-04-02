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
    "669XzyRxFk3FPqkqjnSkL2G4mhcbQWXRffjr7M1VdqXDXSMa1fiwQTsv3r3WKJ7yzbDk1fRqw1gxKetmJANyvqGP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5FCExiuVRVxPDRjBTUAbLTbFXNjHZwbCfBEtkwUTqGCdVTRzcDVZe2Tc7Z4sXXzMdJgqiEreZU2aou3TrFZjar7a",
  "key1": "3i2t4MiQDiygKASXNGnNpxKDtM1Gq7U9E3PDcyScMh98reY6FBru3T8ahU915gLCZCjWDoKpcjfHtpCAnqAXtccK",
  "key2": "5K98ZmvuCC9gP357Tyq1UvQM2Mtk1LJUzCwB6ky4YkAejEYKBmRa3VVpAHUVHfsxmb7qn9RLnCCCaCExB6d2M9Ui",
  "key3": "5yjEjWNidWgepqXu4z4kStRZigviWJzEvEoSY71kQmuve3okWC5GB9BdBac5XT89tQeg5S6vjY5H7YWAroH463Cv",
  "key4": "HLD4BpbRzSVqmsQiDkx4vHAHs42cUuYhDxuWTbvrVQby5U3cPYTwHDwT1VWQntmZsHWr9dQVoCM8HfjqRkP5YuB",
  "key5": "3PVq76TBqxqjeNPBa1hA5zoR91YpJuKGSM5iY3x4Yc5PFhA3FS1FruNsEC3zUoHK5Zm6PkaUYVyZCUrctYhLirKX",
  "key6": "55iw179kdX2SvZDna7uEvyt9qAox15GTVkkjgbWgSAYmpdkSPFYiLxQ1w86CYnijavQJkufsZy9eCwRA9nqQNYyr",
  "key7": "42fvZmh4SLUBArscrwiV4fQ6GubXDs3vPMZHnY7s3Q24oDWVbJvAQL88dZgEwZfCNkbGpvYAyRY18yeqg9nBjAT5",
  "key8": "4S4V2LADbtMoM2eDPQP187mWxavhcSTkHnur1bEqaxjMpG1yMY2NzEfEsXJvzeVqUGL4nzsaJXXVcqtcVnPf2igw",
  "key9": "5sWd4ZTQMPQxU4ZHFgz4ZM3mDdc87EAH3iit9TSMhmNjVUnPGZgkfHSR5MjycfvibCKr7tFp67UooWUvG2Xkhkzk",
  "key10": "65LADjTTxfJ24iPCZE3imSGnwqxRCwyy1v99YyiULxjifEXnfU1hBhoDCc6mzePVV9ruLhoHDKFcRT5RQRYJrDg1",
  "key11": "NeZsdtna7XkhdEBCKN7WHC79NxaUF9bhJTu8mPo5uciG8JprrRZHvFwo6cXqvHpPmKtjbZe8Kiji8ePrR1zXkUk",
  "key12": "3kGGgwUc2VfBFK74oME9ZHYTBJbXxDtCPbYmX8aWZtNNxkt3dWMPX9RxRwywmFi7RPcKueY9SPeQozzsHgEVG3UM",
  "key13": "5pcvHxrXDLWVN9MSJVez4WL9gjozx6UkJ6HjbjT4RaNUci1e38XEcQLXNr4sDAVVfL8wnmWojyzFn6EThi6ze3HC",
  "key14": "Na3rCtZZmu8aDn6bvKJViBRgzH6HGWCC6wcK4FoVaqYWdvedz2kDttAKqZ9t2CTY862vmCvmrhkkbtjXCqFYWWf",
  "key15": "3zTrMaY2YJufJpEgTCsFK6hYM2eMJTPpGQ2dacV5HHx4hPvLVga64kQxDXcUswmoxn7gPEb4BPj9SEK4ddCFYfrL",
  "key16": "4peSiaWZj4qcjzPHnWff5PFWZepbbfgtEqTvfdPN6W8Rd8mu3xDoHGHCXHPKni98vC2AqxZ15VwpToepFeNEUGzW",
  "key17": "413xwNbUiqwj9dZH7hrh5x8pT1eyMMxNCoqbKPUMiX4ywAMpfvGHS2P6BfDHShUdMaZgYnmHxA9UVrde6c437RRy",
  "key18": "5MMsiBtjmRyauqHhmGtKLsXMzeZ224un84b7a55Bc3yxxk1AdmyURNpvWDLxtPycupU4QL756KVxp8ta4jqZuuLa",
  "key19": "EHWjoGVHAsYyg19by5bEvnZvCWH72TMhRzTyVxHb9VvC4zFekEWAvvMLjsjcGcrU3FRCmpPdk7rfKPbQRAR57PR",
  "key20": "5T7yUB2GXdYhh5RnLVYYv5mAwFMqM89pBxc2nMj947r85mamYtZN18eJLm1psnxfUhiUCGkRrJMnWKHUnUs2KqG8",
  "key21": "3yGd69Und5XpnYcf3dF4fxiaSd7YGMQFrkj8byJVuneSJLNZ7wL9DaiXJSyDw4H3hK8gJZALYpNbibCegjLoc7GN",
  "key22": "3XTAbS7hB4rwJ6ZDKrjPxMAecj2gWsTnyU7dNYarxvca5V676usBy7qnSpwVa5ocUkJT3DEunZwWXQ7b48fS4GBc",
  "key23": "3erfrVJjxTZm2bNmhLzwMZKTp6ThcdiJwksxF8g2HuAGjY1o8gsqch85d57euTmjPrFV7JN2XJMJDHdjxbYgT7oZ",
  "key24": "5qBtBi6DvvMwbfdHkysPg3WGAj2vQUp4LZ3twTDHCV3MpHPUfbLVPMFCQXHiAMWaCbkeJzt3ij45BfkpU78zUvZQ",
  "key25": "5S6tB9ncdGiPtts5JpaHuknov1wErzLFEirtvGMNvTCNKWenKYJzufZ9xbiyJkgWJo75HpuLwR5vKqNfGh6BA69P",
  "key26": "5g7v5YrSMnpYnv9ZMS9YJiLJE5w85YMGQTLf4FjSRha3tVkDhL5P61xuj5J8L9YeYkek1Ff9oqdDQMLGCYRg7d89",
  "key27": "27xtYEPZHHrnM1pYRjXxiiRukHuYJuRSUtjijkGh9SBfF8ioHA7MqvN3BA5gMcQgbF482TnjY6ufN4SQTpkorYX5",
  "key28": "tiXqpQcEqm95wB7xX3tCKWNwB7GGWiVLwoJJuXTxxwghEwUY7vYz1XKXSp4kivzxuK4LhdA3oJEH32SmR5uDDTk",
  "key29": "3f1siZ1xf3QnC25X5sFF85CXG2fmEa2bGZKaDUuw92zXKfHD6JJwGApwbDuf7fxqcmT4bUEkDVVzs8fVvcMcrS8X",
  "key30": "5GACkJ7K98WhaLcyyEHeYwF1T2Rn6Z3nDpBRUF28MMEvPhz4FLaN9ti18ZBaADBogBATfm6Vv2Wydvj11MZ7cBU8",
  "key31": "6CfctJ6HEtEvvhnvoD4frw6q7NRqvPSxHEacf1UmtgRGwZ6rT1PLJWGpWgTNsCKbEyvpBdxNj4RHFCztuwvfiGe",
  "key32": "2HTWQXLU81GgRWYqHnv1ugoTqPXUZ3ECkWtnvii7a4hVQJ9n6BMA1NEpwJLa2vtFwXwJ7YESGBCNnW6Ffp7A8ZTZ",
  "key33": "3vRRvCjpZKzxoHT8nW7ZcYhK7i6XN5gdkew3WTooZUqwRRn1f9ftyoQLqQ9PXQ8sPUWQRuthyXNuQpDzXyJ5a3jg",
  "key34": "5QPh57C5jKU8JBsn4uMSdfde6JSu9hQMJ1T9vP1qLvHRS6jjQx65W41vXTA2w821EZZxrbh9r4xCnTDBhdGA7dxF",
  "key35": "5cuKQ1y4iWgELSBDrSs5DFnE2XUZr1sJVTB12MRAaMbLiP8j8cMSEihDG968NKd43vDNeynHge2vQGASDvqQtRj9",
  "key36": "3JJo8zGWxyRo8uaa3aseLeTugafBBoLpwz9EUZS47hGsbrniUBXsSRZor12fjqaK62SCkG7xLwgjXjTndfzzM3WW",
  "key37": "2VMtY27YXXsZc9aA1ikqjq4GYibz2rv3gbH3ppKP9QjG5osyKSd6aQhCrFZydhR4C8LKA5d5FmifzQZKJz9zGL7j",
  "key38": "45UkfHi1x1uctkqvgGWRuY2YuwZKHSsjAvXkFDEjCHqkEg1dUdEHUyQjzXakRN6x7MBSSRY2fxK5Bkf4vxRjU3L5",
  "key39": "2BLrK9yduXfBLk18aK2XP8VU6N7jYfvA4EcGNAg642fkUctxws6cN2ApbLx3t3nbwNTV3DqXKSoxuJGeb9vVaHSR"
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
