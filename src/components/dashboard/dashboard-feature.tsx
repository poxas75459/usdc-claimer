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
    "RkcWp5Sd4iiq46D61pipw7Jed8p1CAZNUzQGZMBi6C63VYwK4mJNar4jHdY7Et9y25uzAiAau7sL3gUFPoKRxyQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2j4ruLHjzBGiM1GX82wLATarJE74rEEJWsgeg8x1Mh25YwSgGkuj5XBoKasjh7bL6YHSUww6YJty5SCLJetjtSSJ",
  "key1": "2YJshkRskLqG1UthdDBTzFctpeXVACkGqac6CX6yGgfycPMZTVpwstU4fwuvnerMiKkVzanc62i5yUqjfYXDC1qZ",
  "key2": "5wQmTyEVhdCrTKYw3fZkDKfPtptwD3q3PifLB9SVSvn5WroW9jbrRKwP5YS1qdkYHnFLybTJL2yBK1S5GauH6Fz1",
  "key3": "2mGnyVn9dvouSxkTsBasXhEWeJbVF65UUZAvWRzj7hdDoXQu8cpo4yksDdaT7g7cQ1NfYSRiQnG6Zus7c8WHYF3J",
  "key4": "64CeVDwdfwZBxmC5ingcDzonrMN7XzqC139BSmfJ6z78ziLjQ3HDghwnb7euxJUXwS133RpEFFB6T32f8s7C9MAe",
  "key5": "5A3vow7h1q8nAJykVs6LsJGBiDVE3u1ST3xpRVoH8DD9BnotrhbHAtWSwFueaF1dPeDbhHidycbZNEQWdxygg9s3",
  "key6": "59V4a8gdtZAZWQRqwcKDG68A3fCPxZmaAz8hasmTQV1eSHP7gY79kvpKRw4MhcqKkAPNHA8fpcAMGxDJ4zLTH6Jc",
  "key7": "9tM6Z96EqSKstT5ShMgyhc6Ey9ke8QrHSNFZronkxdTqSax7gZ1ja2Umh7Cv1WWFgdgFzrCYBipaETNfWd1MBrH",
  "key8": "4BmuVWqrenvXDXpUoh5staYMNp8BwVvMAH16LbtDkJwj2CFJVvAra7yobiZcZFn8eTHRicjNeZZqA5TQM4jSdjwJ",
  "key9": "45HxMpx5rao4hmXBrLfZRfnqsx8XDS143S54jeF65m2meaz2LuMMNz5BcoyD3DZ5WB2nCvfyguu71s6nRbVRWWDk",
  "key10": "3s9fagjSXxLH2WMKmLQKuHxdQVtxBq9iqR3eWDCp7f5YSiuHAAcZvovPmemy8kzS4vAiyLoHbxijFBj3EBQbWysT",
  "key11": "3YiEU6Q7wyiAgK6QQDGMZ2RmkDB4PaENsDb8nqvGt7KbcBAVsUQHsAUq4FBkiRYE67xJxfDgFdYX2BJkEMDgaKL6",
  "key12": "QxJD5iKe7TnykHZ63WYL8iKACPETuNkRtgdR3jh7sNhhJWtzsBcADejxZZDUg8aJ21SJtSqLbuRhjJoPmZyhrPq",
  "key13": "oX9nJEdP6NhBzvDdEfjEBh48JwduoqLf8gPgFVjM3aQDn3X8pb8oivxbA1uBryQcXw9BJHdWuQkgmZM6zEAw4h7",
  "key14": "25wbn2rYte9pLUxDXpmNKUvTGT1E6NJB2iXpk9kFDBVDaif3h2wYui82tPdg7U3AiSKk74puHio69sFXUdkSVmrg",
  "key15": "3pbBpgcAwynr8hDxYu8vhprGZh9TA5DoSELFcuDmLBJ8Nxs2MjSWhqQzXhKnLZj4cT2LqMMz3y9W3kECPezqFxhh",
  "key16": "5ddWQA25nrTynWX9j6PXvmbF7b4v8Gt8bdWMmzFLSUdfnfUB6k9JFNmpfjFHqfxzyCxK2gMwwjrqyePErqPHHzL5",
  "key17": "2Zs2MPFCnP5kk7fiuZUZMew3pUtXDn6cSTak7bg6rCB2Sx9dReaspcyEHUkKAnB928WDg3dSLY68knaEm5Rg4Y8m",
  "key18": "md8YZCTUdqgwuM3JNZfPjfmQ1LEjFZVdXCn2SFJ7QT8EGbvC5DE2pzQgMHBCYLzjBNfL3MPxCR45EQdd9AKsJyT",
  "key19": "3oMxv3zPSibPkqEp2c3dfBCFWTfsDap7DymLzUtYGUPBRin7APJezaRT5cYcQ9onWXSuiGxr5kPryMib8sKrMU1U",
  "key20": "5JJ2KwB7WaCEBQy9DWneFHXqarVaCixfbZuQGHWMEtCw5MrBWKJWJ4onomawELBFhcrnoMYE6etS5GwRBNir7rFw",
  "key21": "3VsJRAMEpAFtm9NCxcAPc2kjjtPzcuvugikKjiWJJJBZ7ZJFKSyr4oWHVh55xzTHGMJd7zRqB9Yzp82H2CSvjEJM",
  "key22": "LVmoGBmHC1b7xphAh42ZtpeYPQ7LSDbP1itAcrErSycjTowLyiE3vrRARV77NjV1er3xhAPZGsVDf7Ba5jtAMDq",
  "key23": "5ANuMpWT4MSv25RkLCa2gJdo3iv7AxWKpeqXNoNiT2wba69M5S8WM9QQSWFVaMCbqrZGiVDpz2TE8r4qX6t6Tbzn",
  "key24": "24oiZTDmQbJedUZxvZ21Z9F2rWfzbfpRsGqjgjLfojbTZxSzJimjxNRR1BRYf4Fakf1dwofDcqhL8t8n8XNYRXmE"
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
