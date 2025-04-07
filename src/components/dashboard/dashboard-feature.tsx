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
    "3CA9n1JcuogLuzqz2szRwozw8VT6P7XBverexF6B3p7cHntLazzVPSgqRLjKwMg4VGmVujUKfasYpPD8pdaFyteT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "PXYGnY5tw3hmwD6prFY23LZwqgvaRG6TmWrJ9soMYpBsqGH1p8AVQu8TkAiRzfqqi8EL5am9Pyn6Bqm7azhYpGa",
  "key1": "3xMsRcGRQSwYtVDZsbGeRAkQCmy2oXqKYhHJQkWBD8FeWkyWsfcSfb7YbnAm5c8WRBxjEeR8rQJCzY9Dx4b1BHB6",
  "key2": "1SNgS1wjdZmQnB5wvqKdWTAzrPUw1jCAhXGqtZLGNsHnZcLWPAvXCLQwRMg2RkKuoEncSG5k7JHAeceVykjeuBt",
  "key3": "5G9rTt2eE6jWqo4VeP6hGZaHvMBR4MAzBrHBxViednooypFSFJNapG7tZH8fQhDjAqmpjf2d3M3LUf4J3riTvgvS",
  "key4": "3hMKUJTTuCiif4YHgCPyTc6bB7fPpLws1KXrzNRq1sxSAACJcfYSbfuQW7THxupigyMZFewvyU9eejPB5Pa4KFeo",
  "key5": "5UUJxYutDP6mT1cKB8JPVuc16tseisSZQgZXqUxd6MeYR5VgDUogfdqvDXdffjqgcs9LriY4o8tghXr9vjdChxo8",
  "key6": "3WLSCKTS1g7qBri5Z6S36zDSmorP1Z6ggdS4rRLv9Ytfr716jy2v9j8yoL3dXZTdsPDg4D72q52Rd25ckYArpNnx",
  "key7": "3AvPjXpyQgBDRZtx2RsqVs7rVBJv6BtimpHxmq82p3f7KiQEN9MRp3yP8mtZKyh4eybQZzqupAZYr5iRoWsvZThA",
  "key8": "2aT5KpcnjJmEM2gV6E29gbPwVobSwhBRgongSVSCxiBGEzszZFnHAPefyPjW3uh3jiwfzJg9Cwvr7VWmmn9RSvFY",
  "key9": "2QBbWPS7Loetb2g8QpbFeuQqf6pTm3kg8gqJDNrfbRh5cwuB5DXnhys5UPZhzSXuRVpkYLKU2ccDuJLeG6sCtzMS",
  "key10": "3gmEWCgEUyFLUrUpsiFHVGasSZyXePw8KY67J9AxxSshRxAwZM3mnhvjgGVESzS1zhAzomE1V8K79PYuv9gdAwRT",
  "key11": "4Pgf9RQHWwco9moCuc1DY7QGMaboHnjnEiPbnCRyxydWrsGXK7cVuEiauAQJoqHFUp9tHV5RHW6orUpj7tRNcbYr",
  "key12": "4o8CpBaBwEhP6fBXg7PkMAW4Jx3tgoAei2Pv5sfRX96Kkdquh9xCENYzcE65RzC6Eu48KaC7PKm9GEb7H9tFfxVS",
  "key13": "629cxLbkiBnedUrpjPQXTrBaaTNd1xcXccbGt59v5q14W7Cm7N8mrEupCSgxJEzByYtS3Lg9QnYorBBkeB1EVXVv",
  "key14": "4uGaAgbpnDkbQ9xrUiTYuL4yCbi5qAkeosgH1FS8XDZTWKD9ySTCxgX9qfn7oDd2SbtEaqYdD7pqeQwXKzt8h5GH",
  "key15": "3zbJK8xdwKeASWoVjieQWNsbZqZCjB4n8im7vQjhfJYzRhQ5dem7L61iGosMF677BCiNwfPx4H95TTvMzd5CoNYL",
  "key16": "4H3YN8JQRqK2psg5KApytKADAjD3kyeMRDYwhukbssEwhWbmdgM3m7j79Ru4ETTYWPhGmvrz5ERzy4CvSyyTxgCx",
  "key17": "24A6JbDFumvysCHegVAsuDLxqwYXtJD3wm6TAguMTTFtLTtVnTbDhSJNZoNVEznTLp65sCSEgzt33nQoefDdSMvE",
  "key18": "4EaVJfGfCXKvNjHQtX39GNXaB15QYtT3X86BTrC1hatdMBfSxtDWB4AHW4btjtDpeDL9ozWtpCiYyxArrjPp21xn",
  "key19": "46UiEzcNNTiJ8JkkEuB6Gmq1ygSyusEkVC9BZziqV1eZTo6jzTRzgo3qgNoAxFimzjm92RfgDkXasa9fYY591Y6K",
  "key20": "5vmZnCUp51FKYMJ4St5cTh7Wko1p4jeAiaaTyKSG2JVcc3SSfq246C4Q9h55T95w7Lts4ST14WkdmgQcoHgtpjmS",
  "key21": "39TahTp5W1zW83gnYcfTbR6mp6HGtFvPuNvxmK1baQJf81CZzFvE5dp4vxCyeKy4B88HN2nxfzurH31UhDuBJrnh",
  "key22": "N2NmE6HGeuxmqTQTeFyWubdCXr4ZDgFRWPVJxBWpmxwoFQKfxycqRTdRCW4gz3KYstABMuo5pHhrmoEPX979gGd",
  "key23": "3KfencnkrvaUneVPEV8s6skYFRnAQcFN1yZotZFZ7beuHVoetq9znwkjyYMsirLomUA8gucpUz8dERFqvTTcbKdo",
  "key24": "3Wum7cBoDN7YHgreyk8dJEy4B92TdxsdJ1erN3ZRNyxrJZBn5Na4XczuRe1JvkUhzNvF4rAtDBqmiqtPc2tdLyau"
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
