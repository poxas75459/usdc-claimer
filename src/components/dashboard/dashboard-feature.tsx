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
    "WK9YJs7Bvn2qrnjVdQBmGSmJV1h3ve1SoufPZX4y1StiufJyznmt4ht8Lkf86wKmxr8XjfPVTLMYbBn7NZUdLMU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "65AfhPB6nKXxpsmhWt3GDdffhz6msaTU6gFYSfPpAghRFvFm2oggjqTDDHZ9h8QN3ospuBAF36yBoBr481hAQzfa",
  "key1": "5JjpGMKCt2Vuwekn1ZG9hvkfLvwRPT2wehicCoJ3HuWkhYeWS3Qdv2xw3H8qkjS9oJwQrKUjLmc8PEeaes1w9cfY",
  "key2": "2q428mKDKuHG29kWDTFSLabJgntZxqJHpDHSH621p5mAc9tGBopPBorRsDYBht7r9zWyLYDzfW44jubg2wRuDJ62",
  "key3": "59WW57fZSTuBXjbc4BXiUTCDUmeLMcLV3kKCAp4nbqfx6gKiAPxvc7ax8Hqz31ZNXJEUv6mmvzDAnjZ8DcuFtdwv",
  "key4": "5BssfvVBtFzsmDexecVvEKzUHs17rK4oHhakWEH6jtn52qtnQXD73JZkcLC8R4f6GkZZ7ayw98saBw88kGtvZN1F",
  "key5": "5ij9sm2tNj9YztnE42dtw71dtUs2cVJmFchSxo9icFeNaQjzCZWNXdfGFXBNPWWgSEXU4YzyhLKg91nxkEp7nC71",
  "key6": "XWWX1SWPnh6vScfVhd4P7SbZSCuvS23L66hBRNP6ax9KcfxaUpqYwqiE4w4So7dJd9SJZQ9GNqP6LcZGVvvxEBx",
  "key7": "2rRwvnCXypZyzu4G2Uv59znpZjPmRoxWUAdPU9csqRhophWFYmFoWwPe5ppQaEqH3SVVLKW5w1H3SceaiDEyQ5Fa",
  "key8": "33k89YY12LVsUUzqaJPr9qvZKfL4QnzWu6hgqKTe1kQi7y7NobchD6fBNyD7mQ6nt4wXHqto75Y6Z1iK5kbzWko9",
  "key9": "5C6uE1g7Z3wjrXincrxur9hrABZkJ8KmFTgFhTTQH1MvaPYNuttwhDi4Ph1tbg2LJEeRU6r1uQd3iM8QvbMShNHC",
  "key10": "8HjsfdxEmUEamhK9tV7zNp77fmmLkZQsREgRY75DgPcyMRjMRwNfdpSsfnYQ5jAAmHDYndLAKM7nQLZTdrnWWi6",
  "key11": "2KbWJp5JzxwT9XJ1Mj43L2ax7n5VNgLEUpF37aFpjrkveNg4HaLb7yqF1fZ5DM4F4EdvdCVFLu5xSodERf5zT5rT",
  "key12": "5DxujcC3TxmGJLk473SEhJvHLUN8TDtn9Xd2yZPYzDq1YhAi8gFHyLF1uDYEBWxmnG9PwgYWzm2vfXbhCSTHe95m",
  "key13": "5JYWXM5Ezff7ViiZuf6M4Wn7QnoNEqw6iFiZ6rcCVsrm9RmnMac1wMuNomit3oofownj9QWYqsC7PVdy4ffekA8N",
  "key14": "4nKx8m2bo5RAepMJYHFvvLY7tdk7r6NFSba8Ad4JDusCD5Ct8ne4qrWtijNmWTdvdm7d7Q7kochrJrmTUkMHfCBe",
  "key15": "5LxA8PcorbR22gfmMTUTRMKWiZK5YhkVCfanE3Nf4RWTJi8DieQCmd5YZz4YbUcMGNmPkX3jBpWQg7R7Sosa3Wo4",
  "key16": "35fFJ3CQSCZ3Tc46khsHQrnThSgdDnsu4AyUK8WsXD7buPDKU5QMpPF3ngiHdSkjPAXvWNdkP9fH6MVUMTabgykC",
  "key17": "2hFn6mLg38FDFJbEhpT1RKkm6ph4G2T4qvMX1Q8nHFVrjqPt4KHeMP1dXGq9adpUiyFbSomSRBRWY536oSjtpcw5",
  "key18": "5S6Kyg5Vs1dCiDbrL8QAgkzqm93eYMHNyyhGg8ds7F6vnhhMhed1NZV555WFJ1ckoiNGiZwnqmZp977L62hLGgvx",
  "key19": "3kKRfTP1ijWVvVA74ZThP1CsxaknmyrMFH4ASyzHWHvagL9JdhxiZXuG8rh9nwLfTYhGAPXWWrsVbAjmvoPBvYzn",
  "key20": "3tsgQ33LyUPZGobzWgnprLgkTBdhSs16NEtzKg3x66MpgDbbNt9UUZXwGm1qBq4DbsgkK3Hh9EFxxr13qrnxma98",
  "key21": "mVkQ9zAcgm11Md2BFdJ4zchmbDcuymPY3j41cBYH9JVUE7VfTzDRjWmt4ku1b7f3u2PqL3sbtzCte9zrFUZ8NvP",
  "key22": "2BBLedAyTjE5myCPLAHZgtqmGs56vnEymkLGfLd6x6cab4JotydjYZbxeEQGTXkHkb6BoPb1PuGHWyC2yDYubm6Z",
  "key23": "GSDJGihV1LHhFnAF5wC44AosCbciN4eWXZbYtvp6Fh2bZydTks7T5QteKQzKpKBGvxvVCRg76guXgbBepiN6HPw",
  "key24": "3JmEff7N1ebKPPuvgxPgf1jJQjgALNN4yZB2b9afqnaR6XfE9S1tg2HoojULMj46bYDgrf89Ma3XrwFVhP22xNXP",
  "key25": "2Ncv8r9DCXoTyA7Z4wEDzRLPmg5vKd4NH5kAfJmBUwb2g9b7CF2BvNG3refZ391RkdcQPWs9RnrvkcHJ5g5K6zQa",
  "key26": "YmnSVSwuZMeGfdPbYFyrv4q1J1yK23SiKfCXX7a6rD6qe5QR2mcn9tWKcw1jBxEUqdyvjp3Djf1JuMH1et91VQU",
  "key27": "4kcsist1Gb9xSopGGg2PuHTJa6vaFAE33tfZa4shDfCjtX6UNJCKZFFmCM2ZNNFUH2rTqenXPGXHuVYinECWftuQ",
  "key28": "4jCUo74tHL45Tm9Tiv6cVxdWKrwWdrWxyV4jUoqYwnzTFeuFy6wuZuSHX2kCNCFTZv78UAU75rC8qsUpjSoZXJBJ",
  "key29": "sYoc5ihzK8p4HWiaeB6Uo1N2fhNv3KiiCppRvYTg5X1jpTNqdbfgBwhZxPXBCKD73rsSkoThgxyHtErw2GtfNjd",
  "key30": "C3MaX4M68JMeq9C7txizZH4aQuSGEGdTjsaQFna93FZaVY6vErMpaXmW9Mk3xxXHEiFpAx27ad7FTTrDquE3vJX",
  "key31": "4Uyev2Dbk2xhxwtLqabSxNniwSvt3EDNrchhQxbXsszvrGsjSWfW8jcX1ZKDHrQJiEvWdXnaSExVuiyu53Zfeth6",
  "key32": "3gGhohwd1gtjY1wNumtyNTMhXK1coG9Ga1M1qpfzqEvcLUGJQqwWLGmQFcCDouiDczwBHXJqmU8RAUEPhcd1Ewjc"
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
