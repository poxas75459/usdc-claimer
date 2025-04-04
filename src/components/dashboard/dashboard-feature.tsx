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
    "27k7BSrpWnekPu2HvoZY7czP6xJE5prmy5onFidhtgrW4Dzm2APeA1ofVVtEbBpz9zFLG2VWBzD1LxZhqFCZ9HzQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "w4QVMMVqS8MXveuHUXDPuM4HvSnk96jZzfDuwNbnD4eZZyp1WVvoww5UiL7FgT1BUDDEnDoLHEHrtNQPCePceRF",
  "key1": "3qoL5NuEL9t94GXCD66YM57cWyfb3hQJQzPsKrQqGAJL5ZtBqrV3UzQvCV7hLb4aLnuxpPPt6SsuK3HHvHRbTPVx",
  "key2": "59XEkUP4hNqerQrF717YcnNeJR4oM1Y1Bn2wTXeDLpURuFJTW9izz6jPPR2Wp42e2Jict9C5BcCMpvw18GzvsUJn",
  "key3": "wHMXBb1nQY8ADHR9sRKhBnq1RuPqbfqbTekmVmxCU4z1N5TUumQBacLUizzbfqLGUfoBojM5HVuak9icRMa1QVK",
  "key4": "48NBCYS4Cjh4fNYmK6bZAf5pDrnCwAtciBWGajGzGXh8Z11WhRE2T3Rn4t3BPLQ1SLU6AQzXzLzQmeJStYpGRFFU",
  "key5": "5AyK6HL4QDHtRTvjT3myMvdH1VACzQsuA2D3Qx19UXerU7z6y51k4wXWtLBqwcCDwwnvprAe7TjHsBPk3bhREswa",
  "key6": "LASbC6uNxVGy5dZSUq3JEuwqTmSn8hg2ADEdZMeAWY44mWUFkbP1KDoMcn85LZzgCAmKR4Wd9DctgEriQhrrUyi",
  "key7": "UAZJb8sjtNKYAAWMyRFe8BohZYet4FDhp6tSviTGjFmL5oc4QVM9sabySPAMp2wpcb9UcG7PKzdvXPJrSbDh1yS",
  "key8": "DsJeJ9PzH3dLFsScJ4he3zzZsvHFYMNVDdHARq1ev4Xk2tN1KDttLRsqKhDDyhChm6RzGUZWmYjYtCGETLf4542",
  "key9": "3TdT7asJXH8N3WrKFRGSEbggtmarf6DMJWPpf5ZBufHbuPHA5xW7DMEY7YrBKHgpfHQUKmYdYb9GQfpBvMogpsSu",
  "key10": "eUf1MgUGJ1kYqZWdiEY9RWF9x41xRj9M4PjJUtrd5vPPRyBN6Hi7zDTaGYerx1zKbiEocQqJBQtyrpUtsW6qDhD",
  "key11": "5SXxgsziVdT9EJCxpeBeuShDXrDr3ZKSVWCcn5oEatZShWfertdYabWnkEjj1cQr9cBmHCYSaAX4b4cSZ5pjapxn",
  "key12": "2eMgqvHt4Z6AmQRZAHuTXdRuE5cMV5VRxxAei2TirBceisfUSG5RSUNrCXYF5T2FNjLLXTCNESxrKgLvtFpcSq4P",
  "key13": "4CsMrmud924SutQ53kdv49vsHzsF8M8iT9aPzEM98CkxkPjS2659BUt4HvyKVtDzmZrsivz6HZaLdgiGcaPzGyE1",
  "key14": "23bfgE2giLTN8SajanbQ7N9woZ9Ky5m83PZpfjW2Eq2DcnigmK58d8xyqSYvc4hmPMEfnYxgsoY8dmtChFdtQ8d5",
  "key15": "5zU9koYzG4yoCsfujKL7odv4HKYMkJfLr8bDrtB6H4HEoHD36tfpde7gq7hxEna4B6uTAeconfwzrEuv8Scn89me",
  "key16": "5CPGb9xHpeDtW2vWJ12L8zbwLN1u5imeFAyER1MzMj7DSzdEELTc13QnWpJZpEjfB222eCB9jRLq8aJKu4iFbXeD",
  "key17": "23DHFcqHZAbdQ5BRqhRG3dKL1Kjui2DnQfPDMNYwYdrysccEvZ1hfJSpb6DWJ16gResXswSVCCHRhhEEVCKBNpVk",
  "key18": "2mwA4zMVfTKzoWqqzrK8ZvsfZ9mk4dWMfw2m4ccSREH5bdddKCfWit4HhtkLA8uJfwVWLPsbDyr757rM83cBhNpi",
  "key19": "3siXs8U2W6sjMTNKRTQPeDsQrJhSsQuNgf92ydnwf8F5Ut8Q83A7rUpFUxicTvgVSoXMouh1uQ6WvUsaGMrVvuRy",
  "key20": "gKksHNbtw17BXrf6H74en6tTYvaGZcqA8vRnNwgnGRKMukH3dntAqTawvT9eGhYc76qhYtdcmoGH7Ht82daoaYG",
  "key21": "3HSUaQSEDV7iaTonWTfLEU6Sa3b6ne4b61CravVAw7wr4qacQxBznfFm8TgEqFuR5PKqsmbJMunQ9wy3j2rEAPGE",
  "key22": "2yGyRESKW9UpwPyLaXR6gEaWz49iPiU9NsVw3S3PmqQpjrfohsARahCbjH5teQG4JyzBUFWnfr597EHfTVY6CENL",
  "key23": "wEMTt3EM3Nm1w69DK1m4sFwqcW7jKBTM8gLM5ZCNPvqqnpjZQCEVdLo4TeK9fbHJvnAhgXVS9ndH4tRbvmG5skW",
  "key24": "4T1rK8UsExa1ZCjhE8pfti6E4ZofpbExE7v4gsMTxcN1X99BnxMd77vPRrB3MmFJKrJZfLfwKc2oVtcHNWo2NHaQ",
  "key25": "4fFj4AcS3feEzXSEQr3tasAVJcasiNnLiSnhGjnxjvLACNcyBoX5iXTb1WpgTM9RRS3awBxd945fBQeYRoAA37Zf",
  "key26": "5m8viQRCUXEZwgXPq3jFnm5qD2diFLXCnkhrme7FJAzxhgr2UT37vMV5L5S3JhLUhxFUonvEj7qsgCskxuVRDF4J",
  "key27": "5a76zw3WHgR3Lhu7LEELFWTuzStVVyrCiHsf2wxJL6m5qrn357SE7EELT7SVy8NhXuox6ABbAcaHKgx7vaKTGsT9",
  "key28": "4PAtsocuTyEPyb3bkRvtrvNfYFSshAbvk4wmFJ8LqN9MqbqAsTnhLYXa5NW4Ce14JjNH3oQzG28VrVhR5Txhh4kL",
  "key29": "4rW4QgunYE482UPbWtBP1upjA9foQGMcuiGFDearwe7qgwovkBDp6rWWgMjhUpzVmF7F33uyXo2UDppR3tXDqmBJ",
  "key30": "3BfetVDUJR1yUsYm4x1rj9fepdRf5LgbX1NRpwrivXhiErLhwsUJMikgxXD2qmqb2r2CeP8kurCZWSAjSeaQjzRc",
  "key31": "36N3VHba79YYszTTmaiv9BqqHreChydyxYnvrw1vBn3R36KwNc6KEAjiz66ag1AuNJVX95G7DtFk4DMEud5ySi6M",
  "key32": "4d1sTxMGyjtCXZKU6sygznNyr6UhL6NQGmK8Tg6A6fiAH9Dt8SgJizbG3CV3LRzaryNC1BbN8xaFmErHGJ7By1ey",
  "key33": "38TxJAjAz1Awg7Y5WTxKDZJXGZaSpFQoq4LGWxmB469SEg5yjZtFdmK6XpyA5Cm5FUMRL6fCsMxkiuDr1FSU4mb3",
  "key34": "2wwFkZARXPHF4ZQR8pCVx5Qw6SfMepiCEfAFnzA4MSXqisobCTk6jgnk3Gs4UmypbDBkx2JjvEPRLqHsEUUMFqzc",
  "key35": "qhLSgigBaSFdevZqoiXd3Z7zYfiVhK83aAmYCPiJoWijpYtBeV5dMJa27iWXV5fFj163srBzKNZ4QCNJnDFMGrW",
  "key36": "fQbocRLGpEWroWKx3ZYczBbWxS9B1NH88mR9n4YdSMHowqMgN5EMA89Hi4BHMyP5MnrcJeJ3e3YTtCteVmzpr5U"
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
