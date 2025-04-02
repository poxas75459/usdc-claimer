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
    "ppr16FQY2S4x5z7GFz7LTegpAYSeeRT8X29djHqTJ96ArLf4Jk8LkyZ7Tk2HyhnoD7bdMJprEYZEjrrvGaCySWL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2mgbGhqHR89rhY5WGJvcVAsbf2fNnuQW5GWP3CYe2pNQnpWg81dhSm2MxPVoY3g7UKsUYA4NYDzFYMRM45TLH2Go",
  "key1": "tdE8SeXvtn2rBxaz2BoGyRqVeksfZKUoVGjtjY8aRYtUR2E869Gpwiaxt6K54MTGzozJ4KxZG98XxnvoG3mCvBv",
  "key2": "4EQwRiqYC8oL8ZnkdK9pANYHFg2TKpipyFRDkpU2HTYzetRyHFk5L1Av9scmyNTYBy1ieDCtMwcxg1bKBCw35SVA",
  "key3": "2adQwScQvTjF6wsGLKrZYWPuaxWnfT6Q5yQjVcSTAueuuXgcmEwJHNVGV4ucSY5kyQwQANizykvRN1e5sf3EHJyu",
  "key4": "42PZh8L8Z3UNPcXkhyxSinzF1MihxSkhKpxgFcLAkELmMeCFp43qRqAvXgZoFNb5BqLWFRa94hDk5r2gEUTSPWkn",
  "key5": "5ZUQBUABZzdXbPFqEpcLKidPyAwztMXPcUDiHpWVpKXQWxdV1YyQYes91M55LkyNRefsXZAcYPVW7AXqctJddTgr",
  "key6": "4k8cEXPAvMdzzCTcvYWsjgDu8372NPZ8V1SnMyds9EBXeqWdxnHZQVeHvxcxJHsx3jKqgqT1Wu71tLBoQNABC8md",
  "key7": "aUQyGAaP94i4DDD44ZckbAEcB44gRnAp5J44ouVa5dzGJLDCxk6tSXxNmYWpWYTXZ5UpsVmAze6aQG2J5f9QgXH",
  "key8": "K7tbnctgFCTscoZDXKtHrNsjaeuMpXebc7EBtaWnhJJSay1RC3ojdevnaMEyLVFfwxqA1w24vx7nfchuntnJ3JW",
  "key9": "EUYHWbnaYdM1SbD6wRY81HsKYt9YfUeVUqawgACofssgKtu9JqJpuBqKvzWrPB4pNjja1PiijSdXskA1v6kvPMX",
  "key10": "4JYS6iYYVdfpgCTNGhA8g8YKdojSg9E9EPNMJgj8i2wij4QfEJXnazHoYNb8R1EjBbFpmjpxBcRpK4NUfUTCDiBs",
  "key11": "2zjPo2PbUdKrEjdLzBmNDH2ZQurUGY6pwdgY29nSwJeFuwqDNNTkKsV9CviTB2d32zMDUZREfm6qL2FQB8wiNXbX",
  "key12": "316VHBGxsaLh1aeefodfFUSaJAWaFccY9bULdCZNKLByQkniKRVJ2rC2qNom39ENaoftyALJS8VFYfaHkCR54aKe",
  "key13": "2UQfRQ5yr683WnXRKsU9XptxyGhqNS35UgnCtuUs3pT3TdkhvvejsUU3LfShEZxuLF3Z1jKrM6tFsgTjvQLQynix",
  "key14": "5BpojVYVW4YdytFoADqr689EKL5hkgLhxYw97vxUzjcZZ7qvJKjx1bvv3tt1MouMvupJj7KHvqyqSDMBzrm3a8Xx",
  "key15": "436Nc2unwR2kbr8yhFdVNiLR7RNGmTqGoXXME5WLTFmdE7TN1C47JzowafYTDLkRpWW5iUxgQqsB72GCZoZdE4Qt",
  "key16": "Asj7m6HvYcHEz4yN5c9QkRJPbabaQN2oy6dTgQCqpnCC2Sc5hdVCzGnfAM1xkowfvyEXhJERMmkPNtRzdmc13WZ",
  "key17": "2QGqVFpWQTGwETSFnfxcYtzdpv1dwuAf29aSB3SXUqA2ejpN2mVkgLSTnXSMi24TKLJaja4mrLEMrg4d4mVhz2px",
  "key18": "2n6qwnaZBFo1zu8SZiPaEaugpitWfrJ1QaTZPJ4Exqr4JDZv5Mme2bvUNqrgdMxKtq7iuTJzKA1ne2ribc52uThm",
  "key19": "4ov2onYEEUT1iL4WJUZB1hzhKoTzYizzUdTpGVrruSbNbzXy2zkXMumof33G2w3vNqspU2Ag9VhKZ8KKdvVAby3m",
  "key20": "3982w8YtXTEt7z3NmMhw8vhK5xkgwhY8XciosikejTraNhQxDg7mResBX2Ne6zFA8DuSTU8bxPJtHo42NJbTL8Bs",
  "key21": "uTo1YFxaw5qVgnQmA6SzuHun7bSM8eRZDjn3gr94dttcFS251EsY254zrYUJjNf83hNsxZWHsPUBFsdhaiRZiZU",
  "key22": "4oh1ErRLtEU1b2jc19bBE7wWroo8cNQArTRPNQzeYk2RGjoSjvhzhwmrHe4L1cd8cfRPUWEp2ZkkGvZQSzKrBhbF",
  "key23": "hLAkFk934YrRPhxRpXSxdM5HGh9XR6MY7qijVwwDbgqSyDqBDUbDwFQMshJ5ANfrHJQjPPdb1NYidKLQejMwho3",
  "key24": "66BiPFxovPxs4bUuY6NLhrgLyHSsZoserVDf7qD1exUdQ9B5SdRQXe2AGmQFvjE7KZZsNm68qC2Z57eaUXdL8Fgz",
  "key25": "61ouEeud4zc26FhVqYmDzuviyhK8W5rMNwqCmKVEo8NUTaM9QSAi4WouDH8DBMMAsgyho1MXBhz5oYSFt8JoaY32",
  "key26": "3pZGMsCF8iPwNEMKtedRiYUjJ7zSuu41Z4k69gGqv69Wmzs8BmgPqsyQVbZa4qyoe1hiy7QyD3K47UeE3oDcmK4q",
  "key27": "55ShY7TwsEckkuHcGi4LRkoJuuzyF6jmB9UjTaD4MAQPsVVNG3Q1u7qmFfuteyKxWwSg8uB3JmnuSzYtonVJSehA",
  "key28": "45FFYhzavUjM3PcPr4GQUhCiuxfKUGeeFo6an6dHqi6k2G1xr4fDQ7gdHuNq5W2UCiG4bYAchGPD1z1aiuLTqDjy",
  "key29": "3XQzpLYsvDQJ5LvPWhHrR8WXQh6WF6apHiPm9qcGkZ3xbXpBFS5yZHpPrcUG2sjuJgENpKA28dJJf62CEy8zfd2P",
  "key30": "2DPGZitkdt4UF1FzTmVMb1uV2dHurkaq2J3h27NqzQTpzCwaWsNDCVZyTWVgwfuyr9bBCWUDUcgrKgRveAtSkgL5",
  "key31": "5V74PnzKSfLGfks36Am28YSvEVX9ydo62SMLBQk2GgLnz9usCJith8PYrdd5xWDxpW7wwzPvDWVBFTZ5NbV9Bdwz",
  "key32": "33pp6XjDhfdcaqj2Hxb2hfjYGD36KLo9wMPHWjZrHNAKZQxFxBK52H53ZMXtrzVr6rrikyTziRRdAsuQxq4Q1S1Z",
  "key33": "5T6b46aGoAJ1k7P3QJtxJwjAMHfKqosF5UGH4K7ZXBgANPFzggymVPEvJ9R3Q7PmDL5Ncq2gawqByBp3pK1SgX8W",
  "key34": "2RhFPY5w7cWdKuyt2PthCLJuuwkebpWJ87E1wXoCKkwRRKLqEpzbazuMDEMW4QGdEUgKSwq5nxjecmjAF3w7Vn5G",
  "key35": "4WS4bPCEo2YBDjfbWRAVfKQxGRYwhyYnt3FkE4w54cjJGX74x64AFPYGZdLNNBrFbigWqtt9AorDfEg8pNi8qXaH",
  "key36": "NBYZHC7G83nR8FZsL1obg6cJKaDNF9dxrYD68gxrSa9HbkULeMycayvHKyUq8MfxTmzb9y8RzDMuvFEiPnLezpE",
  "key37": "23Bsv191eyr7BTXD54ahp2qWrVKEfiE1RuNJcL2cgb9sm5C9anSFk5jwavQVQeFMvA8NWUZYmmEeXVBUdppjKm8N",
  "key38": "4VGNd9FRkbsxS3RFzDZk6deSyyoVAkkVSvzGEPw5AgHusbwhsjC9f8Sf9Xp9TQt6p7Fn5mjxRz4V4aQX4hJXTVaV",
  "key39": "UsvtDu5jegMX1bLMc8s2Y86HwTzjFEw51JfvtBLhqoJuH1M6Wc1UmB2iNsAZpgkaG372MmcSMc8PFWoCPkqBY29",
  "key40": "2PZb5zi9VQPZPyhSZdZHw2R79JpBxDKESiLbEjuPNPJnMSQT1VLTLeqUhNf3ZyjRrpdKQqU25r5mA4LkdWc2hm2E",
  "key41": "3YPMx96817FgBN1V2jE7PCtgCSLrfjrVrH7UUzWk9igh2NSCGMA2KhUNaMnG2KZocXrSedD4mg1hh1SWkTskFk8i",
  "key42": "41QmNBfqgKo6GM4M6W6vA2kc54UiEsm2uvLqycL7Qg7FPjWVpGeuEbER55jPBgSNazJWzsXFSMucS2Mq75J62XYK"
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
