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
    "3DhbWQdfN1ViHDt6Z9324vQY2YpruZs5HjJu3RBQoZvwoXNUsLmf58jkjB23AytmFnfVzPQoJDCo4Tdoa2czwp57"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3PEuEupDZyR9FXQ8ms1squURVrxdsgqcgEWwy6ns5C8vcE9ifMsXpvpuMD3StUpieBfgFsLqHHhPynHDrgpjEpwQ",
  "key1": "2ZCsP8ygpzGiH2WQf7LgPi2LkKzqwVbzPdzSCBVnJRFYBMLuJNQdwxUR9MG1aa36g5sk8rn6VZGhbD9vDxVuP5y4",
  "key2": "3wfiiMDmcv1dF5ZwBxJzCVJX9MZ99SkFwsgPkKrixtrgG4TQjvYwDRTcp2KBE5gFmq6oQeeFp5E1MKxKhybyBJfd",
  "key3": "5jn6SZN9s2XqbbtEMMP5gTE21TjYCkkU7FRg1csbRSjCr786LD8uezeFoFDogDhhbwJBdiPnEsz8Xe2AwiJdSqLJ",
  "key4": "3iyu3HgxYKMkMWqKxPrcHYmmz4PETkdK9JSpwUgmN9CW4vbAqXyXkZnrHTtZHC9koDkEg1T9QwHQ34nLuJNWyE1L",
  "key5": "2wEEPCajbGvHZPZV1AXPGofcQtX17pUyQmrR4d2HPwtLS4oG4xKf7cJ3uuekMiwt34XSieTZfaBdRqKFmB5wdXKe",
  "key6": "47iFDmzSiSQhtd13aeV5UsMACm8Vej8RAeGmfirJU9mwak1GNPwwMMgfH9MC3ozEqHoKUe3mmxEv5K2U7RmcwDbM",
  "key7": "3xSVMMWWLigFAKLxekHrdpMY32FuoSUQHQx9CSfejuaDZKRBAUrA1WA2pvrSutbHSaEJEwPFAvqtRfz5DjPLTgWE",
  "key8": "5Q5sn8mubbrADqYd7Qk8DLbkqSYjFuspy7Ym4HbhUS2kCz5S4HzS2zCgk2rCxCStJXj1N92d5Vyu4YKTPE9Y1FP6",
  "key9": "5XXnjwn38723jfy18cEF5K2EDZXuWSA5mtG6H4FvU3S8TwfUEkBBkgAV8W5h3RHKYr5m78YVtEVjhdfkjaQS5ywi",
  "key10": "5yapcuHBv6VePQRdmfXFTNjVBXcBW8cRKTzpoXq3mbbzf3R2Gct6vS5MW2a28VvKSuNXv3CW87nttKPmtFxhbPtv",
  "key11": "361tYaLdNfMKpcGdf26jR1Z5qwreQmscMMXZ4iDj1n7yx6dRtuwXaS7K9j7snPJkiUMPNKxY5urFH9gDRtJfcGPo",
  "key12": "5b89q5Hp5ZEyAnLZkMD9crWnFi5oyQHFWiYhtfBgMNJXdXv4LLP5ERp7QoBmwVHSf8m2U6uWK7Qtzg86zyqKuKyj",
  "key13": "53KACwZAECcrJmHPh5Xzj72pWasLcwjoU7z8KZ4bnut5mxtU7Ef9NE2e6sGrw5nCaPPR9dMf5FMKAzapBye4w6pU",
  "key14": "4yyFcbKbTAqZpADKjsqahZ65dG6NT2jHamhcuomsYFHYWRsp7oejoaKjxgXvhDzmq4nDPqXxx4EGJrZMSfpwt2qh",
  "key15": "4C1GUJigBSFJLqLW49avm9vKbg95FLPDNv6ZYzAgjc7cfh1kbNiYcc3rmhKXvu36NnuHR8jN9hyYykeVtegfXNHM",
  "key16": "3jMxsFfS48wJtENc5zzMLx8jdBJUeaYuJHGg3gEqBPKhUkut1MCgptryz4jEorYeQyUupdrVzy5nVAzZFDYDFkqb",
  "key17": "2xnUvaSNRdxyS291ALsSAnpTasLMwT2tfsE4jDFa2mFtzbpxvaiVg86p4UdZ3JwfywFuLAEzRLLsoK6uSubeCbQk",
  "key18": "Mj2NVEQJZP57ThVqMVrGFv748iQSUqoCa6HcFVYMTL68GXmsumnL7uZKGby6868YbsSTmDoeBf7HLrdZmAbHK4A",
  "key19": "3uwGZae9GtF3FQTpqkuXgjL7UXmjGi8nsbKmfkq4CrosUfZxZdQMS1F5S9obxw3KRiz6GrR4SyNvq4qNZzKJc45N",
  "key20": "34JAt49zJLyeQ8aUz1JGvFRbtscNwBGKzrXbXuxBjnuLfqRY8LVT2RBREhca4dJkgt7qgN22LgrE7tWae9xjzPqK",
  "key21": "ow93fsqY3CdqZMtyyfECXtrDTfKTGsMUCNcEtNV3Z4vNNYGzAJrrXn9HZAiEkEZb6G2EvA7qanFsnADQpd5z7tG",
  "key22": "nqBdESEogn1GvC74vv76R6uSYvScHSr63xBdcpKQvPLE9U993twPQiR9TgxRn7YmBvDkqKjmt6uZ7xiGgQucds8",
  "key23": "RVNK7kJhiAnEJjMt3GBpuACbnQdaYLM49KyjspVohyrBNKLJy6AomsU7KFY1LsifiJVzPix7JCgW3SGdXThK5bF",
  "key24": "272dqaN894wNUAERniQUuXKdbeProxgftnhMfvJbiHHowXvgSRwWY4gUNsxPcFwtB8CV868EvxfXSJ8e4UL6oSP6",
  "key25": "48iRNQKcmNT1tSArvFT9u9bu2voe22zAY9iVY5oHZ5ar7feaJnMTu5H12EHYFpuz52HfHJ1ofKVxJnLGKRTgzPZa",
  "key26": "3zyBC9QCiSorrxWBdQgyTjajue1TEJY3ixpFHepZ7SXCg38dKLcxM2t3PRjZXonmNB4b3yG2nQkFPZNiH5UbmL2w",
  "key27": "221No97wXXMwxv9wgsd5crGyFfjL6zpsR2WpjhGHpdUYvwmFtgVNsVYCh5BKHCBUMsFHK69g3Zwf1TsSGXzSng2D",
  "key28": "4DTs6vPV5cHAxRkmiUvFdU1JaeSRbZCF2XefFasFJg2zCAvgnSUsuH1cfp3HS5Nsrk9zzKQEwQ6VgSQTqXmyDv6p",
  "key29": "hb4MdtttVxoW3P9bWgad8Npvv5VvnkPEQPe9ZSxYNstJDWhkbMxZiY2ompZcz5S2efThjBbrqi2pw9MvzByawBW",
  "key30": "2a6Jc3RDc1iXJzEp6BTc8aTKMTPyZjBLqDe2KvsqcFTK9hzx9skonDb4gJAagAZAFsUQAvm8qoStDH6B4A262cx8",
  "key31": "5qucd5qqDzerhxRy2gDG7HK5fyVNAnnvu1EJAPUDMYj8vThRm8EbKUgYDBVs3GmMLBokJFz7ZwSgegnmBiaeNqgr",
  "key32": "42293hRVUSycsAeTeQRJgmRvgGedG2DYgG48JhSydGfS4z3F2pSP14kZpyc51MSKnQnFyhERSmkW8pGkXzeQR94u"
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
