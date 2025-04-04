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
    "5RaQZTH1afWbVXJQERcn86DEcD7rtAbLrbmWdiZsy3ST8BVTCQK49KiKja2DzNHoa67LAiZxknDATcWVXJFML94d"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5vu8zHRNhjopLotVH6yu4y9sHu9Ay9GomZKRYfvEpkw43gykmeW7rhmSnrVxki7n1dEeDxnZDEGUqfZ5BF6EwbUQ",
  "key1": "2AgBb6Y1kCzkUracn8iT9cotqzXCcCdWENQWTuLUV8mzwrCpacoVC4FxmsHhL949y7S1oqTfiUCLcdX7XVBnNxW4",
  "key2": "5utdUThJEpmrrURtQizA3Q67WWPEVmzXCL6Ni6G17xf6WC5CoDjAdutVoSH7ejo5DfGubSGH23Ek6BXzZ24EiSSc",
  "key3": "3dj4pTW84ZwFHBY8bAzcTKE1CAMk5nBYWZ8zpwE6SZA8udd7EtGRK9nL3N1ZbukYoHpPvqxnM37WHU2rtizotLDw",
  "key4": "ejL7DvrainvseJdWVXdiLghnu2jpi9LYu5JSNyGfgKHBYZ8ZfW4szEEW384Pj2j3iT9csQMyv9NX6DveY7JzGQ1",
  "key5": "3H3wr8DBYYDLBLe1akqTuixQfmCNcnB4ztK3GsdEuUosfQqKyWen71WBXKWSGFLHs7kWyVe5aLRBUyp4jzkaLs4z",
  "key6": "TGY5N5yFQaQopuSXfityjFci3RzYN4DAUQ8obnADh1tbDSet2KJvYQNC4AWFUeN6wnDfnv17Mkt7vbxv1kym9Xc",
  "key7": "2BxpTPDSrnXbWs967K5pYDc2qaeHKo9JqdwziQzeny7nkKzdm9S8Lrc5PjMBeWSrS4uQAqD7EL6h5eGznVEb21p1",
  "key8": "5TaC6ohQqdY1U8VD13jhDtLKSmWPVByhnCvZgQHBPw6hoctq4F5vj9RL8GrJJZgQzd1kd5hk88CNvFJK6M7j6nPz",
  "key9": "5H3LmSfysHxsfH6Bcd1brGBENk3wKj3Vv5oEGS1pkkcxSTEBxE2tWzUyTL3rnTxkyyhFxreHNRtY7CM7bVRoBjoE",
  "key10": "54tR1ZeKJ2LSpMZdwFkpfytfwpy56r32umYnaTE3NWoV467ViUYVteph1U1kWWhkUL8JPtqGEe1NvrfB7EuX77V9",
  "key11": "5aXi3fJKs167nk8fdXPJ7yk1oMufzBjBMwFCMTfZhDCVYSoFczrrA65A4mHM2DLSatK8ucb3SjyM6brt6kQedK6p",
  "key12": "2GqVeadFUBcw7JEy821Fp8f1Gmu9TijjcgzdGbMLMcbxxGJbdm4xo9GhmRKiYvV2dHPSQNogzmQVaAd3hLKJU5PJ",
  "key13": "4G68Z2uWGwfXyve5NEQ3VdD7hfdaeZnTGy3Dmefja3cUchiSmQQnJCjeHMz1vmi2wbywK6Pm6FJPKCdVGVs7DpPN",
  "key14": "5jwWgfv8TYPS1Zokmh2zshnc31Ac32Tf7PTqHqSZZpBbqRMuSH5gwGuXVNruPukgK7Ke8rrssED6ygYT9ujSsSCt",
  "key15": "4qyF7QL6YqXGZXJ1qAzenRtcooZR4VZv1DAxNknpZfAm5bnedaS9EFhCeVckKvYrW7z7ED6bWr8RQAmidfgw96oz",
  "key16": "5KSoaySj1wCge8niUY8b6XrMDotuQjhcGt8n89JCietgHbr59zBT8Jxr5dhJgf8VqsUTUSqZisFEzw5FMQbUuKeH",
  "key17": "439RgPr8Jmd67HiwGALcmQitiowLRyiQ1JEdM6M3qYeJWHMa5yMZiR3zSLKY6SGX1HttFSBwX4WWN51EBqdnsctY",
  "key18": "5xscz2v87BbFWkQmGiVqfttXjVWGiFsDGn2NsT6eXTSr4xMyBRqc6pciXU1FTmReCRA3hiFrWkvydgnaxuFLmTZX",
  "key19": "gh5itwoNed573BkM5eBaMarZ4qnVzFzQtCJkaqU25pX6V6YUaCLRkYPUGTsMsb9EhKGNYsC1w39au6Zbwn3Sp6b",
  "key20": "3bZbAVKeey6hrdNiHcTadmg5EqqNF1ZgdJur1tE57L7VGjU2NMSqsVsQ9ps94FiMRRneD8PqCX43hvJekzAg1gRd",
  "key21": "DvxWtwUYptnewhioJAgSqepqw2FoNn6dozdQ89r712VumGFf9caUyiR5Ri4Uz5wd8sYGfRqgD7D1YWG649BVrwK",
  "key22": "3dabgRo2BzzXgeFF6HPQTVo5iGnmmar9GsfPgCCLFgz2z8uTvThmTXM3aS8ue3NUDK5ueMbWbEBvTFV2XW8dxQhL",
  "key23": "5C7Brr6NKmAtQJYiZyVwisPNxDv6tPRo3ksCdsC2tzWtkz8it4Cbz94KonkBPMtCuYh2oKhYbmQ5tQLGVoKbeNGP",
  "key24": "HHhXAu3B3aDkq8VLoWEv7Jq81PJ3T7D1rRyDayUnFBvQ4j55aGYCkc5ptPGUZ8NeC2Hd94zU9G6mMETD3HZNhBq",
  "key25": "oPdRk7NYtVv8KksWwi9mGjCaXHv7Mg58GtccSKdhyL9TdvGC2tbkyswoWcy5DVsah7YKL7aVCc6ZfDGnKQLoymR",
  "key26": "4HKaYCshEyffniRM1CQW62TXTkTNXd2hvKRzUc5hafqBGwWS1hajLY7oa2hF6d6RC3UypJhFMgoH7wJHwctb1oru",
  "key27": "2hze7vmYctQ1TRAAg3yCEpBeszphCrV6kSzHHZn5H1tbgY7yCmApXNtuvVzSrKR81aVsbki7Nks3twCBLMu2pRgc",
  "key28": "428XvwQmMxPDNiVdshDQtvhfiX1ecrm9bFc26jAWYWaqTSUCDd1dfUubS45yX9uHfAmS3j8NbHLA7NJ8eYpyE4ys",
  "key29": "2Nx32MymukHWNK4pyCSjuLcZarjYeteUtTqiuzVuixyQBTeXQhkHoivEUS8Dc5AUEbjHoXZVBVgufFiFBiPBLorj",
  "key30": "2VGTUL3nYMssHc4mh2vbdWxwpDksHZ7wNcpzy9VLob33zrnRXepMCq4cWygTJPf3rEzAPHSrPcTMvRecfBgrCGgy",
  "key31": "3aPf4U4hc1c728r85ZL9EtRc2CYT1okkvcUTsDDEg2L3UNDPPgMY6CXUBh2HYwybGHEHGiiJtrbyrnovHJkvPNMy",
  "key32": "2zkcmJPCdCzPpXbTLFcZ6pDR9faWhPYzsxFYxkAP2SXB16tZBViJLVeRCsKfCPJFZeh7nuMun9TTHBGKPyEcqTwg",
  "key33": "5JPo78jLcxEkxAGGEhicAxhUA1xiFF2ShYnSfGdhdVK2DNE37Feb3CkMg2GqGKZTy6cMiUKZThyxgfPuDUoPUvA5",
  "key34": "5KUqvCuvRtZv84fwJPvNctPGbdnLCSnaTVb3bYGTKocBuJMGNjrevoRwetPBgKxUD4vczf3xXRpmYGhTahHJKRcr"
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
