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
    "5SK9CY3DJuc4U1uzs9a68kNZ87tTmLErGCvm9i3VB6wfkH857pxdBwGYMesp1rz4txcx5qifPKZMX2vkPNcKiCck"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4vuvBchuEwQ3RJ8mtuFUqimybLxsS4gYM3vgTNZyoG6z5Rc6vZ8pkuKcyTuVRDvhGh7ngFtaQk6PiazgHFcvLxDd",
  "key1": "3bNDxfFG8ChzuCfnyVcPjHN6YuppQrHbAMVvWXTMzDrPQ68W1GHvv1bz2R97qAy8BN5zzHz1RvhbeGSgaebcdzvt",
  "key2": "5UU7YSg9UBzvCcbe47vrvX5PDiPe8UprKYkSWaR15qvRRrXzLYysQwMXiSywj9jX6DgYNwFYtTQGjF8XJEdZ7TEn",
  "key3": "5TaqCMo6gLukXtB6XLd94NJw1ySFEmpeih4Z3FbUECwr66ffhLXXK4eEKQK9QnMSzmUNtc1inEFE5WDxySJABQ2V",
  "key4": "4R8RubTgYT4TnVgbviiPBCFU8PgAch1KM8ovunUz1oqeLxaxMUe5vYz5vryeNM3atfKkq3st6Xdjy8xqDsQGd1XE",
  "key5": "Bym5isumGpVGrWerUwwgSXeSNjrBg72jZDAaNzDPcaF9UMrV7msTcVVNn7XZmzj7mPpYzXLwEAEDDNaFc2ZD6ER",
  "key6": "Rc8hWvj4PfSby9G2utCCgV4FY6fcPkigTwnd2pwsJJNu62jideJT1s52HNd2SvFeUXW89m8DKpMV7WUd5r6tkKx",
  "key7": "4N12Yv66NWFnddq2WHjtx1hAyGwPXW6KQZJNVKwvJPxwP8UEgFVWjdPrpph7KPj1dNwVSqvYrJ8DjaDYb6qEV4bb",
  "key8": "4YrUKFY6VHsyxaYUNFnbPPqALBhaE4xbMx2w5M3sdGi5ogWrhTerf1GozB3wbLvQgWKpEupkKAnTCm75tfB1zAQd",
  "key9": "2fVdt9uz2aq5WvCekD62WA8AFaTYpSxNzeGzEmxFK3QkrNXp1iJAKTJMAxucopU35rxfdtGVoVPZxEh2usaRs6ci",
  "key10": "5ErCR6tfjMYo9ZLaRNJ3nqB2RsgraGVHJ9weF5AM92cYm2ciJTYHz9hbDn9ooYrDGEcCak6Z58UiDWB8BBotxyPb",
  "key11": "3pFkDZJoYLSQV8NkQUWtpLeUD7pHc3bi4UmsNTuEgphuDxjkWY8WQcLyRtFLxZSLN59EKK6VdkgcKwCATa87oPr9",
  "key12": "2RkANcrUZecniqg5KzzpbK4acbWz9KnKsqq5ZtrPnMnvubvCaqqjs1VseDadSHgzSV49B5UiJ222HS9bq3NHjMhs",
  "key13": "aFPhv7DBvdbKQbHiPX4fTnwaNa3tjDR1pHkmubGZjSu5kBaUJieqyrnF1m81o89CDBEXQuAs7j7je8Jhgv51kHN",
  "key14": "4JFgnogc86ddhyMDfy8teavYkqvMe7vqricyEEQT4jDrdyJPw9WDjNeX3VW4tpCrMPzLHan9F8StAAZusuqfpa28",
  "key15": "GeWBW2hoj8akASSJhAmxLXmQ6WR8Z1hF22JByGHNFbnniHcCuJSTepcB8MtBLjs1bzzB1uagKVEN8t2gTwpKdnL",
  "key16": "5m6ZZjj3v8ZCKKqQSMrzCB8t8oW5XPZ9eg3rvDg2Gac7KqaHL94tJBAj1aAKb3Pp2gF9zR6QgU1nYJLXftC3uDGn",
  "key17": "3XG95wxLYxf3PQAyQQ7SxmknX5g3uEQD6RSJFpPJuxyKFrCu31Sv6igW8Gk1LMCpZ7GQCtTK2GDUDN23Q84DzJX4",
  "key18": "3u1gMMyiZT6tVyEr3Vre4AiTxjH4CHxjZchCTtwR88tkKcEGxMrJkBjPu3ggeGxBjK88VS9MasTtFrW4nmtjDLGi",
  "key19": "3vLFsmAdoitQUT9wMCmLXmfB9QNZpxiwGMenCbn5BPa6V7TXGTZxxNMsDzfo8C9KUtuToJmghpE5VQ6oTy96LFF2",
  "key20": "4a4mZkBaGDrM5ua9fMGMXmRM2dAXVcM9xTf2eRUh6XuTJQEjQdWLJKya2U1fMTXAbZAbG4WkezwTSCL7QkoxtNGZ",
  "key21": "4wkLqqeVDk7eoWVTgoAy7AyPQVGXU1GbLG9VPVuR3mKGBz8JKFhAYfnkq4d3Cek7GD6XqDR4FYrHi1fLRdcVFFZm",
  "key22": "5REPyJZtm5nW6mALTQPfruPADTheLPRgjXXhxGhTbXVQ38nPT7yCxsnoozncfqYFWuvhp9ih3NbqGPse9BooXF18",
  "key23": "4mVnAK3C2cUD1fawkv5dBMRmVjGf9DFDRcuVqK1564r9JnH73xyLETikqhjJXN9b9UbLMMAF6BNgxr8KRDUccNkB",
  "key24": "4TGfYcnrH74GqVYj4FQki1wo39UMDXumM482RRnBxi77heE2ALUXQYsRgRe1iFeeg6NyWsMFeGQ3afKeLpVr6HFs",
  "key25": "65RCPUvHKJztm1FFTrwVJg65mg3YbwkVRQ5r95idydYriTGJKXJHKABqM3jfXef3GXqzBCSack5GhUUDoe33Jqi5",
  "key26": "h1pKHKEg5VuKC8LydTeqyBVRVGH1VcWNWabQeEFkmAZVWDS8whHLZ4SeUjC6GYZbK9m4BXwHBM58AxYp5xYJcyC",
  "key27": "fZXn64MHGSG7UTdap74PUkAVDgBo6pZr4qKa9BGmUdLqsDK2NJTpmu9U8Yk2MJ5iLbcwHHe5ENBamBhHsS9sAcn",
  "key28": "4Fh4iBRiCXk2SqWj9grkQDBFyyphrVyr4fLibicxyTxMLLVuuuz4aKTviwKPH98WKMPktdxddrxFkeMZZnSK3BSZ",
  "key29": "32qrQGnc4ShXKTfCBwMY3TbPRTjPgtovbwwF8ZzsdJy79HXCwRDBcdRJ5sZFVm2dRH7c8HG5KsJexgPsQDMWg4Mm",
  "key30": "3APXoezsGcRyRAw8kjKriy7TFshjacLkck8HXKNaYL1p8tbKKKk1Z1twsjuKqm9a8Hg7fmGE913K4HroAC72Vfyr",
  "key31": "65ttQDLayUZckAjKFw64NEguzi3oBhJ5hxL5btr4ud6hxPzyemAfbcRf4zp4JLjKRN8BxcaEqeQLzLnWYGxR97MS",
  "key32": "2PDwWhsvwXKoFRrWpWJZydMqykqbYV1WYjnFSD5khnhGPtbi8KpbxPc8pG6bodvjYcz7SVYaBLogt5co6PcgmeDF",
  "key33": "wMMC9bCkDXq2MDZWkJc83EYrBxc4VHWJTtJmoGBeeqDbMbAqxgfUZz5c2AWSLsR3f5d1ogNCFSrVpczKikrdXAq",
  "key34": "cvhuHbV5CDQuXxMNPj55SC8z6GTvHFNc2Mmwr2KrETmfJJPWCyqu6sYPdgTajyunhvtg51E5EUhwMZtyJzXGP48"
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
