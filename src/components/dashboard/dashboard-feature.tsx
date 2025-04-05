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
    "BmP55bPpsmQQnwCRHUSz8uSYBZnRVrsoTdE4Xdsa3GSrjQhNPaM8oxDeAco2WSdUr1r1ZEMm1TsdvxzK1nNWwS7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Yk3w8z79H8we8tknBYvWExZLT5NgZcopP63HjmX3Buy4cUL2i5gfUN5oVMtTzWvvPSMh784WNNDP9z7J41372En",
  "key1": "2C3hUymbw8tbva7ANB89NfQMwv1hEingMWBmavJJmxCiGi9PFecBhn91aKZBbyNpnosGc89j9w8ae2YoZsfix9i9",
  "key2": "4nz92vxy1k2FJw2op3dyu2NgaMfi8US66zPvpdb4BazV5EY4n6gEnFT8zco27F5dfmKHFgww7XVb7s1Jjk7LNsvS",
  "key3": "Z5nrVMUKUaYLSgjA7e5XsQDpJG1ZSijjBN7dzp1pEtWpDwYu6cVhGUY2PK6pMHDQBqHetweasE4NYZRAs5iGeny",
  "key4": "YfaEsvHN7BwMntQTLEX3hG96MhKxkFBWJE4epNcbupxcra6LfBooavwRFi6MvP7H5rqLJyZk1UVwqYdM1DnZB7Q",
  "key5": "a4YJQg1K53qP5T4XW44ncvGwG3i72E5Uv4G5Qm9RCdy9BQ693wYnywaHeVqMLbiVaNtn9CbddNwJ89ketRCnUyw",
  "key6": "44GefHNRdAXtWBfs9emSFEtx9vuNDnSzqkED4QBuQt26hibcP9gR3a4WutHYPoQYW9eB7uXmmgei6R79TGM2m72H",
  "key7": "5FYvuWVaMBbqqb7xoKqwJxBFu3FijQjVaAKaaQu6wdtP7NvUENHQCfz2frn8kTgpBdGPVhXSGNUiw76EDAL9oYre",
  "key8": "3N6Js1qNLHZrWqRca8aUvjbDe3sCXhfr5PoMW7oWqf8uTe4kbCDh3HEDM47K6QTqKWu5zvyKWCbHgyXRv3GZcFvf",
  "key9": "2M3raKjw1j9CpgDLfysn1uWTgCKidUk46edYEekujzB521dGoEiqVYmgPiM34fyHHFxGt8cUQBGpheTbshLBDtU3",
  "key10": "5sgAgtRjLBUJCZtLnqBqanQccuGBs8KDfdvfdM56iuqCduSQNSqrFKsTxAMXv1Y383sBxdojUVu3fXqR5uXK2xQQ",
  "key11": "3K1YXix3Xnjc12XzCrzmwSYDvz3TXnyW8sKQo4sLgQ4DuGbonrSsCxG3m8FfFSnEjg6sDEtm3JC8cmxa8KLsJZzr",
  "key12": "5egiyagNboEm5oemCAsu8Rp81d1LcdqwUNd8BfciQfyqWqNz6NfFJtmR4UxGB2uYG3AqJ6mxLFS83wBpqFVSDq23",
  "key13": "5BQL3iK7Cv5GpfSNqMHcjZedfDZrhmGGoqvm3AxWg5XRYBuV42aLiJgPEUKAL7JkbQqdztQHPELh7MST21bww7Rj",
  "key14": "5EttTohEhuAZLpS7qxvwP2zzyiXCWsnLDhCCondGNvSSs197sDtMyh57kUkTpusgRFFjGuWnnBJy6RjSUU8a3UGi",
  "key15": "4eSyKEx4V8hmxxNxNV4JSQAxj4sSh683gsei8WivXtj1fQjXZb2vmkC8SNNycsmNT6Mp81ioFoCdZWSPiMd2hb32",
  "key16": "UUNdizbR1cwKQKSPw9q63SmGTEpVT7zXVpSKe5c8DUwZRxhBfDCHeptKuhQHYJusLgWbj8bowkvo4Vw2mTLemDo",
  "key17": "4onDyGHfeiQo2otbKobCEUJjYL3duKMVtvLoUd65QeKmk6FvsKEvjHQLfHxQjhuSWqyrhDhu9qRipBbFEfULYJvw",
  "key18": "erE63a4N6qNw2XXZ1VkS85wAC41NnEmdtDaR1yX7upqovze9B9q4KdAXABxVGggNRvgrgFkhB5xy7C6XAHJMBRc",
  "key19": "2X6cG1cwMhvSGj6SwcQWy6r9JTjjrsXX4HQNzsGfskyi52bNdU13SPSBYVEJkp24bAfQrZq1SWad5PEYkeS3hZ7u",
  "key20": "22HrPJdhHGQohF1hCoSJxfi4NeTUqRzxqLuDBC35Sbr7zy3DUjUbdhMAbcW6vxNSZP9NLw3xHDXghN57Xzjjja7n",
  "key21": "4bdrXGJcTo49jF5V9Q4xjyAJZCs78jqAqA9i2c1CjzzdJCpeA3MsKEMLwU3XpuLZzir9stnfQTjCUsRKSiRNTqgC",
  "key22": "3rpSkUgnY7Et9Sf2RGuvF14D9E3tepfYAARzkGytDdFW1iRbbLdise3rNg2W6dphR4rryv3mTSHKut7em6YLCfF6",
  "key23": "4bJ22YrT4WHxrznSYTBN9ikRW9QJa4tYoLFeUhZK4Cs6Ypi9UCiT6jEUDbFwpFSQWF1GqpfpEufC9EXV6tdutFe2",
  "key24": "5i3HQVZEtLyFd5XBnchUcc11rQEAhqpHanuFgG3qqRoVUsXqPVSsasven6naU2eZTxgFKdFgRCrDgoB9c6dvCgSF",
  "key25": "3qh6Cw8j4i7U8PM5X9gMdPHUZqatHMo65MZF9Y2xMt445qs78c7No2W1HLdEAb6HNK2n76UPPv1nPN53W3tWpoS7",
  "key26": "4NR1HvXRVM4Eau7VS24p5tzAxqRQTrruqxa6dteasaSm342G13JEif4CPfA8G8ktJpwQtQD2hR3HoKSovyvSwaEr",
  "key27": "4XMXb6n8KBBAFDxrfe6dgPEQQAg2SgknracPWT2D45uMDjsmyg4vdB4pzQZETnNcdQqEDE832eaAhe3nFrHPiEXx",
  "key28": "2wUdqg1SrYRdLdoXikapziWfzfn2w6TfTT86YZ5yBi33jDB5Yrhbp38jQoiG2LKKMNYb2cbLbmtMby7C4dVUnx67",
  "key29": "5Ehty2fJZwU4YXMgGmZXJvnif1vZv4mTbLANGbxQQdeQ1hU1s6tagSLq7HWVYvGNbsvXgGba4BAFfbkgpbMrDro9",
  "key30": "44i98shpUtryRUdN4vdSqPRHgJafCopwTFc9fmxSi6ULvda4zwVPFQfYrtRWz8qaShaghSvmfdzKLKdxKGqXWEET",
  "key31": "3FP4i3X5QCoWeMe6dMFCsr3qjpbwA5rnLVrvooSaXVn9MNttBBvD7C54k41vUSrPBxe3qZz1qwF66XhvKU2MxUFE",
  "key32": "67cvypAPi2XBJPG6PKw9MDEZY2uS791NgpKRjLzwJqBneLQGMhMKNN9Gm2kHg1pgoFkBfK4UzoTHknNJFoGk6CDJ",
  "key33": "4hqVCCrxQp3fm93fQp7mMeo5LSnAJCjSw1aCm5RtTrxbUQjJfzazP6CVobSHeZNREmGXoyChwGfYsSBLMvFznXQa"
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
