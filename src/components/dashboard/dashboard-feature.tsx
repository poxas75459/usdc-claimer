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
    "Xm5ZRSfBYCadURSxzrTjKiyPAHBg5u57ayHzgvVPdKwPcJJCKiub4rbL6voeikei7xdvZQvQLk9PHeuAHT7Rrcs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4zAuGXA2DsL1dqxAFAxunXTmMcMJTgqf8jsuhwtcnDeWfpPYXGTQAsanVJvXD3n95iwJtbfHxYbMrJt2byoULoMZ",
  "key1": "2FqcaUC8PU13DV9S84tyniNRCqy81o6j9Yg5KgLSJZrGYRensq3rrpwhPtGgma1AGUcihKmiNTaQXApyoPguaDKn",
  "key2": "4UkZxWQ82yMKdzwpzVEMhfd7cJm6Mqb7GiuGDfnRQ8P9aPiyn8R7bq5TecpQS35QVb4dFa4PJQzSLNC6E7TEeeHu",
  "key3": "5JKZZXEB6577ZGYgnADfqS3NL4x1gZAYijGTfZAJLAwL5BCm3sxaieCKZB5kwF53zW8e7xCT1GdGWxtFrQ4fXQ48",
  "key4": "2KRqrvPX5hZ5cw8FGHxKT5uL8jyZD65Pcam28qmuT3eu5H3aLCVTHjaismTgzHfUNScKrgR8BppCesUdr5FPdZw1",
  "key5": "2zeFR8CtGwJKxQ2QcmPTLvQ9BpBUq5SuNPSY6gCZ8b3xvqjifihxit4G9yJcFawcDbw4BmK9RwLukaBCAyKEGdbr",
  "key6": "58NbnywpofkXgjeBiooZFQCeFW9NYVF2UbYha264J2fWFE1j875i7BHJCKjgzEpQ69JX2aUMF5Gu4UbaJSd6DFcW",
  "key7": "2YXrMbDAqGLwB3TPMSYbidUajzCUw61WBqDeK6X2C7FXYdxn9qGdmYMJiBJMdNaMvNj2X614jTtLmXHZEfVEMDUZ",
  "key8": "39BL1KwoMspLer6c9vtNpCGjFTtm9p6omjaEe2rvqmvA65MnB7ytZG3KXgNF8VWybpshshrZ41vPkpXp52Q1hqvX",
  "key9": "3AnxZHd38fuMoj9cuuzR3D3yDZHxTFkcZfoBL6T8Ef7sEM4FNfVdyeDqk4DrYYphqnhhpGUb1m54hfPVXgMrL1Q8",
  "key10": "AvswKRgxD7bkFoKN5TeF55YR5ZZBdwfDCM5bRGXd8Lp7nguAWsRgawbsUsbRj8y27jXSo4tgD4tQHeotYgisRUu",
  "key11": "3Tpe6qwDMx57DWjF3FnXKb2hph5qs2T53rMf2bRFYt73Z3svKRmpWrKKSGiNtxeJ3ADA5wf8UDtLPLd5fc9YnnvR",
  "key12": "55ynETzAHUTDMV78au1Rce5yM2SzzvXgK5TmQ8VsYAvBFWkJL3vmJ2qv9WEyt7obS3EZJUxxA6Tw3DNbJQPWtzWs",
  "key13": "6SADT2MUbf3kXGRkk6ZkrzVNhoc3TAE5uf4aFZBmV7prQ6SgYEgE7ypycqZsPyRitVZZFC8pHuwWK7kyL8swszA",
  "key14": "2MaFmp6141UCoiP2va45Fz24EhaJhedetBzBA7HRYjH9z1FauFT3XyjWjMW7hz8ZQ5Y3VDp9XtrtCXZok5kccL8y",
  "key15": "3DBW5BCcQmEFKtBWxJxQSQuTVFp9qVJk5TKrEpM5dMM7aZ9ZKVoj43kisRoyDBkap4V1DztwNPN1ZveFBPvJnavi",
  "key16": "5ALkQsmWpKxnn66DL5ZE17HzKNWppKRFie4k2pSLAuUTmfiSqWsckDAHQ9THmt41Fkh7eKvhMgfkQX7Q837evFcf",
  "key17": "2NSm8jd8bBtp6KGpJmxMU5fsgJj6Wx2rkvffyBob1AcYwXopgvPJKZuYFBqjd5TTx2dtWPhUrb58KVdpkTrsBWec",
  "key18": "4uhK84UHfPgpnC7D7jESWJ9jSem2PNGxeqoZYdX56uNRG9ygb9MUFU8ZKQ5Yib7emaeHspfNzY4qYYr46fLpnxmf",
  "key19": "i3C7jH4YdaUeu3tJmYMjdkD5EwqFT9TL1eYXduyAg19B2ESQn5gUoyugPH9dTzDuAdm76J23XmRMiDwYSigXR2W",
  "key20": "33nCMvRqVqSZLa2o1AALMx1dUaq35fChMagYcAbTaVbU7Qeij1NqSGHRLFTjy3mDGNfHGfzQWx1x1XPCbgSrfbGV",
  "key21": "26GwJLxyjpwxx6ZwYPi7GaiafPFJudLv1poqJYV3KFD9XCv7x5ck7hTLK1uouZhZUMi8Le2tdaxTfZ9DNoJucWkA",
  "key22": "5nX9oWsLLTzm9MdB2qqqRVYS3NKTtNMQoK6Z8AZZsW7QpnSb5a5tTwFaK4SdwcDh9R8myKi4QkYLD3vNmgU1Y9jF",
  "key23": "4kpAujdeHwN3za7kpn87Ad2TkvN9Kz5JFrcW5yfKHeenEn9dxs5eEr6gL72KFQcytkXeydNCayLjfVwPJ4hPJ9dT",
  "key24": "4QQdTF7WkeAhHEVhUr3YAfbTq7Tp1DGVy4XKcwzD3aP4NioZByW7hKkEkTdcxub1MWRDzcH71TuYcQ93K2rBj3LK",
  "key25": "4AS4QeSfQBACfosD2D5dXc2NruNdQ8cQ14RyRiW1GsLkVKY1ye1xcSELZyDQZ2TpKRGCREAkKf2niFoeLjo5D85b",
  "key26": "2dynwgAwWWadvrp4TEw7CKr7NJhP1NHkPHAxkfpVBKzLmMNhPdSLCCWpMVR8q2YREtNzzQytUnE8rrqGp14PzRE5",
  "key27": "4Ym7vY9kVhSEJv8BoJETUy8hKGrFgBEYyh1VnMnDTBVP8vSmrES1N1tEVBMMkPFi8PxYtLRsGAa2qffW3CnPpj4e",
  "key28": "PaRs516TC6HTNhWzgsUqmJJN8TTjRghnw46tza4e9edSkbb5A9mKnnUaCJSHNkkHSpq427JxkDiju8dM6WieFEV",
  "key29": "2uXUB1No1Mm2DKB3cDyyLMP4vXNamdATK2aH5azxtyV1mskCez2SW75exSbZinMWiTJhGMhLUNk8tyVAo9KXZxmD",
  "key30": "HzKZPUY4yCsFX6Z6nUS5bkJSUQFZ7AQ3ZDWAsyL34x3gEZyzwZc62eU4NCmzS3NCn9aJttjw1Nsq1dtBSEzBRuU",
  "key31": "jMUBE24mVFE7YSQG55dc4FumJbmEjyACpmoFQfdeubHoQv3FbuvrmkV5iDXBpNnX1uJdeeAugfssWuG1J2vZdvD",
  "key32": "tJsmWipixnkSVXNn4jc1oHuF18NaocgLAMDH1ZaGVZSqfbvaiBoByjRkCKvUH1vRsjufEYsCgZgXd19B9qQBvWG",
  "key33": "3c4qVoz3JF8GLQcbyKB48LrXGxAY2C8oQUfid69WnEd7kEsB4FnW1Hvb9XRkkkFnT81rEhLVa1EDMb3DDLuAhPRM",
  "key34": "5aSHEFpiNtrjHKnxQ8rjURGBCzzbrpDXmUp4HP1A4UZfnqsDXwKmXW7GiTBZoPRHkcozn3LE5GtEBrjGbUxCh546"
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
