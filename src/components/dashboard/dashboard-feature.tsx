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
    "4uzg7Ft1j2e6ruZ7QVSNBAF4m9cXh1m59DJMfQRgU6G4MjdqHfqtD1Ys57pZHdKiTPkNCqPvgugfovn6AnPScsr9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2bTUBLAW72s7NwDsc5GFqwdmrb55jaVLGpFynfgmGeYfemTZaNo6woUFztwnHyLACvvqW1iHP2dcsts3rbWURFAT",
  "key1": "5rrPBCBAfqKJdJT2P8ZZ71t6HHDQ6hkm9vzsnNBAq7gtYVWHsfNX7jBnpgy8Qmq8ZrbiRZA6isMSnhB4Q1AGS31d",
  "key2": "Au4PqutsTJH5GM8jRbfx7k1miQgFqzMcEgpVxjjdqSieGkFq4iuuSh1QnF34Do73aWW9acCuGiyFEXm5UPRi98Q",
  "key3": "3TgTaBhHvdb4Bkz3u2eZBTMenbSEgqF9yTtomr62AZiEme4VzxjB9xhzhCpZtzZLjc6EmBrgF7vXQxrGuLNKw8AL",
  "key4": "3uEhGLRFbxT8YfvD22YAQ9NqAhb4Ksr3V5ZdXDZr87p7XW27CbszefnsHN68BQR6dr84RSnVgoNYACE6GTGQsYVS",
  "key5": "2ohVdu44VpTgMi6VguzCrZCm6PSGNmR69GYL4aPWTatiT2MeXtsxhyofCNZAitzkGiYpDG9J35N4SvUbpW91BxjU",
  "key6": "3WSh6vcmsGwTvRupF26q6VidY8cEUJgPAHBxqcJdwEhNR4nwE1D1QXhApqRiMY3Gtrh4Jgdo6Sg6jdVjQCBreiye",
  "key7": "ajicAqREENkH2MBUmYB6sjpFrf6tTqhwwSnMGiZg1sVw26FXvr24Z1tTFGCTcYixhhye7cPJyHisL4wT8aFuZhx",
  "key8": "3Ebr1UeYcAGjRwuCX7Uzk1gaKNdS54KJiYgX8Gd3EwimTVPqGWp4S8523dwjSLdDdjQ9VNpdcWJ9qBRLPXNMj87f",
  "key9": "2MKsDCtmW4VRjwkbkkvfHFpEHDvg6P9v6tepnyHFnCaffEKLxc7YnR7npv9Xn1pTqg4uAvVoHcXAXU6CHjScxtRw",
  "key10": "3ihrMWXBoRU4Ez1729UDfPDvPsG5CDouLf468oZ3joQCpAA9tXmkRThWue1HY14gKFeXTDqp3hhn8sLTULtm2EiB",
  "key11": "43Gz8jrsvg4iCdKzjM4LUvTBB15wHjwhFYF2KgD9Z4VC3uWcx39WPmrYKtNtzaR9RWj3aUYMhcS2FNbLN1KSAhJ7",
  "key12": "4VS2qL3becahKiRnmToSg2YPpkycnzkKrVZVgHxhZhdBoK8J4FwSEPPif6AB85gkbnQ67q45qHtjrvnkLYDh68Sa",
  "key13": "Q9hCV4Hd5UKhFtz3fcRsfWHq5HFiLScSxa59oxUr6tboQ67yGW2XBiBWphkEi49gxgy9PDiWLfcBUvTMH3s5zFA",
  "key14": "47YPxCAzArBZBgHWugN2dmy5o1SaUNQf3HMWsuzvZfFfntBcpHDg3HLFewzYPtoUus1nUvKZdLFz5uq139St8cEy",
  "key15": "5bV1WyNT9g91AnrEavzgeXERbEdDPmci3ovrXY79BYmdC2g7JEWa6Fyjd7TFSyY1x5uQhWNVULgNovM1MXNGdBva",
  "key16": "BwGHJH1xPKCEsckm559c1sQ5x3ixo3djc9S7f8u2VpGxWhLSpGreUzrhXfiqtPWeMpBQZqo7d3d6B8rGv1FfV19",
  "key17": "5vn3LRkj617ew5cZHTVcRfryZbYbzs9SZs69Jmwjoq88o849bwJ7F8NvFdzUygaNiboApLAuRrn5fKw2ErSdSGCd",
  "key18": "5X5XFAnkKeY48PZyQNWck1JrsQk74yXqA5nHjjiw43FL2zCnpR16BU5KbrdEYPpUtyafNbP92QsqSVKMHJCUmXSB",
  "key19": "3TkSxMMBwpeCRqyHQz6upRR9z2oriaA2Fbz8nGau94sJYZCMhmf5eRQDVKvUb9bn3CLeexCkG6EDfDY49tx3GeND",
  "key20": "YXsFZn4Nk5YKHZvZ7qcfpL97fkuKBnnwCoHJM7TvBU5PEBBVJqRGbGr9PcfufnNbVPQ8wXF9y1s8AgCHGccdf9Q",
  "key21": "9p77wWCBVc7UbaZbzgTT6WNXZNFp7SbWxx8ZTtH4MTxzWNW6uxVdtSnDHeTdjAgw6KAvd4rQxhvWnaNbsNc1h9r",
  "key22": "3moqGto58bzaqFKDL1wFqHkKzKMT3U5WebFmTaYQECenp76rWN6xMiCh1HcL6qxg9f5r7mYZS1eNb8w1mcSCMoJa",
  "key23": "5tfjTnjB28pWR65BRjF1qEo1Y1RVCwfiYYSfiLWVVyahy5Xu3XiWWFTQq4JDq8GDwgz1mjScAybdRfkWynCjKYz1",
  "key24": "ek6xjHDXyGUFNpQEB3vdUMQpaHVxWCttp1yCNQorYHrdDkPjfs99ZR6nfV5XXpK6msmN55unZJVkcNxKZgQX3Fx",
  "key25": "2RMEhgJp3T2CArUec2nvcpX9UH6V1mbWaGMaoKuHX7hXFhsWdunA62LEm86sH1YaaNdwBRzFxrrgWnmpnj7BQN2u",
  "key26": "kxMxfczwASGY2Wfz5sWvTPuZdNQprE1pfppPtWxaMu9KdWb4rf5YXRkNddKeK85n1e6fqnYxutwMTTDk1syHcP4",
  "key27": "9LrMrNuvQsDW7qaY57vT9xdaJ7zxn2FFGk6PQw941kBk6a3uxES1pn4Qhh24fHDQeKra8fHJVB3UATydc84zJn9",
  "key28": "5GjmYZ6RAayacDKw2GTvgZD1QE9admKYkaAyaGJY1WqUT8GH7LujZGCdUVHfjnCK2LeQRgkB2nbSvDTmJgXCqx9R",
  "key29": "2ZhfdjeuT1WLiiCU7h7eWvYQ1JNWYgjWAoinZZa8q1bqnaggyqhfTSjSxRKAvkFb4ZAxSbdMBm8F687gGBWvczYm"
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
