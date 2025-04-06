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
    "52a2x7TKsW8Cm4XqPT1Npe7DNJLC8uhym3mhJ91PZtM3BuGgh9qhuQvj5YzozC1SBpTcPZVCCJFQ7EzR9H7niBGj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2sqZVtjhhtdHuaDC64AcFUEiJFu8dH8paceixDRUKr9iWsU2oRZebaW79gj9nWRSwsC9ipFNH4gM12fhi8kzpLaz",
  "key1": "3BxoxSqzoFiXbnvZFJA1i4b2CLPjRxCGJg2prttJ5uuEcE7nN8NUFAzSYWNMK9gyZ1uWmYX3r6cTZ9BFTZ2AxvkQ",
  "key2": "4CkfhAEgx7TMJu6RsSiUBvfieNEH4WmHH6cT3ytfSgC7U7E58qQMZujqDD8xUhr39JE7xTM4aazbDSxrWdHkwEw9",
  "key3": "2uWJAohXDAp9ofVciKukgk8zH4ixuRALY7WuCW6vnPtn1LCjVJFC8EdcbMbUs12Ht9YuHsHJAJMaR87PP9eHVqvT",
  "key4": "1zCKik8KpKSRvMekZpMg6i9RpU4vn8oieAgqsfPNK8kwG6nCxR4qAkd2YnytFTFnH4VQxUCbv7HTGZvakNP1FNW",
  "key5": "LfByrZmnK8mA3qKPb6NxkCG389zpLdxF5VztLfutWkyTZFvdwUMVpJGxSdgwzAVMVtPVHt9P7Yro5V5sCdUSWff",
  "key6": "3Wp2M7Pcu8j2m58JhL6vKybp2d7HEPLZHMH7AjiB3SsjTyZ7bQNW8smdiQnDVs2TzT1T3AgyUNHdLP7wBSZqLhXw",
  "key7": "UPpQ6PpZAavxpCzzbcokxPKXDq6hCNuRAieQZVaJJNPYx7cQVuomYtuQrByrKuzw3sZHG9gtjESzdCGx6ZFMLoa",
  "key8": "WdLBqXE6UaSr6VUjFxDf2Fxydon5wX2csz4KzUJ3h81JkcbG5MZJpQE4he7Gqf92yUTBPC4g5toAUZgrAcCrwcw",
  "key9": "39nWoDNwbbFW29RtmMMLjoBpc3Z8dx1wD4y3BoVjFUUUW47XrephF7D1PQf3giCxBEKhpfXLASNGDMsrkxKZZ6dB",
  "key10": "51KpLvqnVXizVELUbXZAXCxYiexUXizMSbLYKy69NvBcR6pf8mwhsGEP3HEVJEdtSH7qy9qnVpMGood8BvhoDra9",
  "key11": "4kzft5rrjB5eM4DnGCavavqL9yn8HB8QKzqRw4D1ucwJHht7tgJcwFd6tGuJfmK7zs9RiDkaw2jwnm2tfLFZnG7w",
  "key12": "4K1UfijSTnqxrKptAoopsBMVjWLQUUcNFzyd3QNx9FPbNmUhsXzbnaiZBS7iWp4BgPK9a5JcMeLfu1J8EEEw1A8e",
  "key13": "4nYCfe7ohYRtaDK2jwCMyjCELJuspfNy7jCkwgHDopbjzhbkarGiH6cPizivcB8vk7HivB143nkiWd1ykN5BA72R",
  "key14": "3oWA5qY1B1CmADDUWCN3EgDi8fyvE211vTQrvmnpBwZQConHjoKTMb9w1RoLaxSqpWG4ryVc8cG3Mvuwd1TWYZU8",
  "key15": "2AKCVBdxMWqdxxCrjVe5W8F5skxBfuqNSe8CLCGeRd48mxN8YKGfE1w1u4dXwhTXktg31PmxV7TJBChM2rNnjSMe",
  "key16": "3a2cNs7yF4iVawgDFB7PSQF8GySYdXodSYHqzfBcrM5nTp3TqDgd4AehiW1mq5P1yopEGxxQqeoaeesVgB9Yccuj",
  "key17": "45Szr3BejAohEVNRHVPjzDwrvm2ZCa74dSfCwpZPWMUX85r2RnSV8jGZavm1NUewK2RodiK2zUJuQe2nXySKH5sz",
  "key18": "2oPAmc8B8unzDJ4bBcLup23xBA6fFLWwxtaFHysaowNf9Yszve1wNDTKCUsjSGq9x7z3fhPrWdKbcdPhgWCiyBvu",
  "key19": "2WuunDeB6iBV79KqKnHa5Hjs3M3hLmCTUCxkSub8sBm1MHHpsZ4jQK1G9XS9SbGhFJWyDuUjgZHvUXdbBZvMxeLf",
  "key20": "r8RGAfDtEJA37wms7J1jU1qVG7po98L4sDp79vn7MacG4GBn9vHAymMUuGxbzvR389Mxcc7dAh8TV4exdvXiNtd",
  "key21": "25WKnZcDrXT8mMoWkcZZpqLSTx4QvMaJoxDfmXPKY7BdnJoLu7XPrURF28Q5AzXXNcgAyZyXXSgkcxRa9jeL4e3F",
  "key22": "2uPonc7XQzr1PAwLEvECdKjvSRhSsGyszwDtE3JNGC5vi7CtRbnVMgqs15ZHU8uc1SMfDSQzRBei1uj8tFNbwNbk",
  "key23": "4DA6EZqgovnjg6TVYnNEyjfr4rhCUJ3EVhDjvPvXVfpyL7kDqW57fwWeruBCEvnceAGHMewG3hkDX2VL7ky7tXQX",
  "key24": "3zwdPkKc4gQhQn3eV6i919HnJ1BctwNPHTK8Vf9Xqmb4bCu427zSuGXnJJAsQoA4tHWJgdX7gAPqVhzaQBtMBSfy",
  "key25": "31tSMLScrGEo5VsMoLFHoWSEKcppca1zzoESHuZ9qvTCh16dJ1yE9qfG9w9rA3xWujxgv5nNCCVVqU6kzSnttKHt",
  "key26": "2xMEKt1RDDHMGszasVvSAcZZ86nsRNrkxcctk9p9WWHBdiecWCT8kCkJL4V213Gyqb4bbJqW4cGS5PWLrsKHaWXk",
  "key27": "3x1o5gUS698mHcduxKYQXYf8u13EbC9WuUiuAjyvkXNxvGKW3iVMh74tKzZjRyAsxtxDXCtGNNrHRifJrAK2awGS",
  "key28": "3vA525s8xKEZrDzpeNjswCvpSLaEY9EyfHg6YxVa64WB3WDzZt5wjxP1o2ejYn1tgvKWCEzM7JhW5zm1jf4qLzGj",
  "key29": "2z7A63HxcGHHkdeWb64oKZspvgEA9ABRLyKWNHH32eUW97BfuMupE4pqh7sm8cfpPP9PbDZV1g8jTPz1EEQqQo7G",
  "key30": "5Y1HxEDnooQKzrFkpebRRdTZxqG2LCJP1yM2njxP4PLSUKXdjq3QaxUkyRmfgSiSEAWo28uVGwRssabzB5fHrv1o",
  "key31": "2MVHsYmsQ4rfRrs6PmKXpTxtc4THatTaqmV77Z6Ni2ETukJc5YiFxh2tvHy1Nhqr5SxEa8tAckes5XdrqCL12RKv",
  "key32": "pVkib3YkmaA5HQzUK54J8gEx4FNs4VHFNrGDS4jCDrNrZFiYdFXyskjJSQU5a5pegPhfq1gcyw8hzAAMbCquAji",
  "key33": "2hAA8GHYCwzNrp6aDMmBXkn1cCKU3t2ysKZn3KJFNABYxcGxeGQUBNB1j75pKDEAXkDksWUBhXEooyW2ErNDuqcJ",
  "key34": "4LfTB7arF4ep8zrEi2tgYt7v9PuRuruxWGzX7p2cajTfk8Ly5wjkmnWmH8KujWQMtNuKMJH2GjDBKvWPJpDbwN4T",
  "key35": "4gheuQsyD8p54g3EQzZeadTTRsZy2P3G67M5Hms5D6rYkk7y9PCgKayiYYoK9BoRKKkMa3cez4xNjzaNBNrZzE9v",
  "key36": "PH4nrQqjHHwfTRZZG79qAGFzdWM9kChUXb7vgGa63LzH97kRUjPtD39MTdDpHYfgM6KWekBuukLLMHdb5mEyofF",
  "key37": "5VSRjZu2EnUy7qbuTJieRB3x77wg9NKwSLAGggdNrt6H8uicPar1soS4DeNtEs2HW5XEsPTe5b1wERVGVXezU1a1"
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
