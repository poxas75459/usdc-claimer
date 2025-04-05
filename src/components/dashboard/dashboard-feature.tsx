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
    "4yNdDBLaTXBNYxCPTPNPyXBY65NGKp7Q6urX8MqV7HVsvZZMneAABqqm9CdGaNyECSiP8nJyHo2BuhZGggAJrXxK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4NfWc8wCWVVf6iGqvDBs3mVoHgGqjJyCw9Qvx2jqSCaWUxLrLENzQyxjU3S6MUwmxR3NgpgzPav4RWin4yPQEqSM",
  "key1": "64Z5GnRTdtDKs4xeGjgRSjdRxV1ziBxixz5J3xNSj5xkbgDnLgVCXpHJeCVFHURrrPhNFGLqTCKrPKJ6RC6B6k7y",
  "key2": "5EUtEiosQ1xiabW9DE1SdWqYdiz91D5MbepegD2WQEnRcdBRkkx2wGdNoQ9Fc81jGFGot8YDpsbJVupjo4ZJi1bg",
  "key3": "2NZL8C84eavw3EJE3r3u7ZB9whS3yfpcLrNpvgXVzDy8guDkMG8CnJnF7FJdzGsGMAnbddxSH7du51n4umR5jdwa",
  "key4": "4BPhEgVeKwqJ91ouDwyDVR75za4LiWB4zoBHN7egmrwMBdCt6iQbdCwskyvZpFazgzz5Hp3ZVi4dSRkHQUxeRSNh",
  "key5": "4sb9UMUqhNPv5rqpc3KKahM1gS81tUe6LsBDb9ujr52ywgFxJWec1sbNcRVyagnx5eEvfAHz9iM1F4HB9WjCcGcU",
  "key6": "24Yy6Rg8c3pgKgpthn2uv58qK5n7n4cCX56DXxZkBkDYgfaW4bbiktGrQbN4JDnnNKiaq2bxv2N2zqixWBi3LCwD",
  "key7": "2kN96BGbCmuV3bdyYFZyZUVdwBqHPg6xLKDpUqfbMrhHhMnTtcNkzMaAnQ5nWdq5eMYeBQN8QKZNpif9wvrAbxqo",
  "key8": "4HUf8DNonTmPxqJFTsdp6SDqbHrTmQ5auyB6fZkRcfekSXq5A9RicDpKXSG8UvFDM48cbdRSx6frR6TjBHW7C4k5",
  "key9": "tcHAWf4e42zvPXNh69up5XwRuzoQ63tfT5RZPr73mu6GTfE6134Za1QVsy9bTkxYQFQxumAMRvn3WstfyYpSHbM",
  "key10": "3Mh36BTfHX9LZZzAmnEQsvETHwm5b3YVQxunPpVzhSr5LKBDr7Ajb4Ga6851cEqVZ5BEouV2JTqd6dCfqMJkCJfV",
  "key11": "wWEqDNqNQtwfPaDAubUK3N3ryioBxB1fXzj1VrydsBN3SutrRmGaksn34crTozvkfMKqiuhNP6y9jngz5HrDzrR",
  "key12": "2nq6MsWz8dKk1ko7Msy6kqaeZJekkQntsWQBEixB9GYp9hUELdvKvYhojuijpP4n6BdeGeS8FX8RuG8mwdRt2rDv",
  "key13": "5cs7Ntiykad2Tfkr2MvgCmBrcx4cQibnxjTnaDLHEDtocGkLtNoCZziUBMwuRi8e5nt6An94LvB7B9iokhZdaRgo",
  "key14": "rWtr5c4Ln5MvwcVgyhTo3prEKafgUbNbDBpkJvJbuKxmPc45KXBCuU7GERTaTxzrhk7ciV2Wr4tDMje8S4cwMud",
  "key15": "zUwHg1umdUcV7eWdDwZPV1TZwbFNpfe7bLPpGCx67bbaeQbXXHwdLCp4tze19yHQNDV3eLvBjWU7EknUfT2iGox",
  "key16": "5QXFyfb2VGtSWw6cYqR8tS8Chh9kibbmSdgdfJbFRZ6exdt24rVL6Dt17pCMSvtc6Xxspuv7m6SMEwCRUQSrWiNP",
  "key17": "38kHmXjkE4NZSpA2ghvVUy1wAD3ktEYLrq3jdsnPtpCFbwjtM39WZqTB9ZRbTcVe6pnjwFF2QWY1As2Me7teFbYn",
  "key18": "4qe2VtenR1TkjvxktKra3hHQ9M1f8iWpAuutV6qXca4Wn8ZiTd2jg7K8uRXuczt2Hqc7TcAq1cQCVwuJAJ1HJ2YY",
  "key19": "4qec1XdNRQdwKEWfxXLgLeB3SfEDDat9KhA2ZzRXdR497VJzNq94TMKoRFZngZTCiRuRVbxNKjE4N36VLehFk6f3",
  "key20": "5X4Qstr3rmLpmyHG85HtadoZAbjYFdB4RVzp3AxHmHCmYbZFHvD7NhQu7Zugg1ePfyjKLS1yeJJV7hYzfb9ukfLz",
  "key21": "xQrfXzm9Z4omqpRBQhgYpJvDy5RVRracWbfwRnttqoEM66xfeQLQJ6mgKDq7Ssi48M3bG5s7d2JE8pspoHtYHqh",
  "key22": "4bpfy7qtHiYt1SRUs1XwarKPMcNBXmHKKrjAK6hTbwyKJ93hf748nJ9rVfdEtQ1cajWnxCsDiKBR1JRvQkn2j8BQ",
  "key23": "2CB2CzBE8fTsZhbrWjom8CRG6861imdvDib77ELThwnSj9aQwqjGkSSeQfTPQ7r5aPUSz2efYYzxcrDvKaSmxKUF",
  "key24": "2x21Dws7mBGeYCmbdmZCpWfUNgyceRgvwgNBPrVC5LHjvEcLbv9oRm3dSVhFSbLYN5LjSoeM9275sACvDHxQpgcx",
  "key25": "d2mMzLYP4gUa3SuKQf4MRWBMG94vNXTNMLWD8HiLPPrbDZkHA69riC83ZUfY6SHxntgbWk8S5pF7LhMtLzkXson",
  "key26": "61qGHu9rZeuadVtxffEw1Qtqr2vrwTWsgnMvWb2vtWPwTyWQgjX9DzWnohGG5Yq1TQ7BgzQcuxoyY3GvJD1GBHFY",
  "key27": "2S9uM4STymYPyiRG77aMEg3fA3kYHspticurGvto5GMZrhLeWwRX9GG1D9n3AXV97kQpwr6BhC53TzvnM3kKBZDV",
  "key28": "3pxGTf34aJ3aEgrn52sneuATEjUnwAzt1SVXST4phj6bCY8QXUiQBRYMgmxAJTUY7oJqKgRAziw6fjBaS5WKfxiV",
  "key29": "5vhyGsk5oeHmqZzirAayGuPx78reVPs8oALHJrvprxLT2cYV5Y862RkhRMHLwh4x5sJSzaRTBvxqRCgzKLdwbmtW",
  "key30": "25AnwYGwtSv2V2sqtFP92uh5jW6KwgpV9afJSFUaTxUvEG9eevHUVNxGjY7C4aUP7NXsYy41ZXQxPssC6RNtFv2R",
  "key31": "5ViXGduieAnk4nErSDtiUE4Z86S1RzhseYzFEPbRjENPzSU13pWXcBPCoLbkT2BMtiyFUYRxmxeNgKGuobdjaUMv",
  "key32": "3oRtus4Usc1fqWMRv31d3PpZZygRVN4nWZRjTMHitF3iamkNiW9L1KTaRzsdBtEokqA3hkESsbg8PyHqq2rBioh8",
  "key33": "mCGYaabhvwZWj2Dyf619wWbsFtbp7TXfWSRJagspyz83vJwmuWwk1sHHkKDpf4z8bDSEx6Bmx6ddJCMNA9tg45V",
  "key34": "3YzENTEeXPqs4dGcyjE2hCVWLYoEFZqhRSPjtKZnYxkNGbXwD2RcWq9LM6VYBbLoNM1Km9jHpevYkurotvnSjWXW",
  "key35": "62T1w4L1iSQvEGszT3NWNopeFD7ULrDog27m3eV34xHs4C5EruBTpXBZWUszJQVdWhR2d67n5fCmBvX95tgx7FVB",
  "key36": "4bNc67FUSC4JRaC4nmLnzw8FA1WPndVCTt1qsroKUQTegimVuMEcVsDYQSHohjnCCd6GZkANmr5Kp5N2TzmMN45x",
  "key37": "4jJRTCwz9cS5TfwX3rYGaZmsTmup6Vi1dP9YnTxeX8NLMTfAgqTXE45SqAS5PbDibVR1tLE9GE6YrRYFBrYLdwLk",
  "key38": "4gq9TeVGRfJY96eiUjxYCnpNwVdkzv833NqeBaZkSGy4LXD8RvtK228uFEFmmpmNk4zFg7aYgqTxr7StAyXRt9Jb",
  "key39": "3A6zeTEWtTDPrrc7tUxsCSVL8N75xVmcELSDPjBgTKidueJYNqgU7eoafkEhSm2tE5s64mBLjEQXbF8BaCwau17G",
  "key40": "4XqJtQb4WYa6Hi3xifyni1BbGM2ZEweiPJeE6x3nzooEBzucCaz6BfDoV2VzeQo3LNGmWa7MX1TiwmSAyrPgfEbk",
  "key41": "RchUZ9jkGW6MVCTBPUM7kmgQttRyjJiUL4DFEpMqxYH32t376FbAPPCRpD9y4SoyXdgrqomgH6ri1efG8HiDz4B",
  "key42": "RL4R1Xv83MdJEFViEkQ8e54VHj2pdMtUeDTYXL7DpYnFkmCWkHxk97giy2KYyPgtWfoKaLKuWzrvijHD3gT5Ysc",
  "key43": "2gy4Ho2fL8ShoNSQn98wpvX16naZx7TWuDNTYYgQqxixWZ6NY2vNWmpfk6nMA2y18eirGj1Peet2BSvNKpn77FyC",
  "key44": "5HSh3YSCezaoa4twQUmwSpEdgVV2mUX9qvRQwx2Y5MD6mf4rS4ydcUUqwY7CMnrHP7tUz4TE2yqtjCG9TNBEAVGz",
  "key45": "tu1gGatAPHZfTiKU1ix8xGueDFwZ1PkRMZQf2mKcpyCDdEgHQCJB9rVcAgZKWfSSj3rDDHnub6mjrLBU9siTxJ9",
  "key46": "62tTHVFjAeCmqKa4sEbB3iEDkB9wAifJcia5DSjXNwFqhNxiHa1wtbQVXUyuxC5ADope11qtzvNaYdFqFfZoYPMf",
  "key47": "2hDPgzMdrDj7LY6YvCD7XC4APFcWtBS794SK4cSSgaTPjVdumiTSwZx11Dh4Cy45MZ8d1BtYvWw62H2gUrC7LTxQ"
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
