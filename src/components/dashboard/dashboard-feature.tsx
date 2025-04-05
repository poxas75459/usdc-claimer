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
    "3drAx4UpFRqizLpWH2XbUh95Ftk1rN9UpMsWrZv3KvKdEx8TUb2jF3u8FQbQfmSUBZnNUUzR5uUZjnqjZ9js7yaY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3cb8B4qHTrxXbCFdHtGfboRKUv6NBPcC55aCL2VRUMtcVKJJxu8mxg7FgVUiPeNw5id4BTCQHTYWwBPF8GS89xDj",
  "key1": "5hQLdBF2FRJwRPkCRL54zwdMSkfaaadGaLaNAD7yezx3qtWC4BDmb9bNEcPVoBffeshdSMm1A946UW4CAGNFkk2h",
  "key2": "5d2rfAvy1yQG3hnB7ofTYmQYT52ah3vzEr57mPcdxUrod7VrgJCxLBmhRGYWUP1ppYkmePyj15cuy38XDpvK14Eo",
  "key3": "j1tx26ffC4MkjS9aYY3ntd1hc4RwFANTVBz1DUS8YrTc67i7nAPVW8s2Priv8VyztZwVhvYdrRF5Eb3XYH54uz8",
  "key4": "5LA36hzUvDLENabDiJjTrHqH9j27TR7VFUL86fka6ETkcr3P4xrV3pajM8LBpaJbvUnakMi68Stm24iM72BBVSfE",
  "key5": "4JbSVqtHM8SZC6U7iF9R2oQrnxmfhzKpzRkcdHP7EZLq7g2dyBHuNH4iSqEYsXqK1CBg3eUzUFPhnvEAdpB45qDZ",
  "key6": "4J46kKgHbQX1MgCp5PDkb3f5cgxAdM8F6VmUo9x6mfHxtiJxpauApZJ6Wdzhiib6KPM6u6czjKy68TUGssn1REUH",
  "key7": "4AqYjBoPqdrxBdRcLD7P86ZvSnYTbJRQJ9hJTnj7XMSrn64H9EoQGSz2pnf6C7vEp1B6VnwtxZekKY6T7HCSueyQ",
  "key8": "5eENFZEvNii8ZJGN3yKQKsHj56H9eKeabruNs1976SdqJaCKaEvDS18o3Q4pnYTMh374FZgJ1MNazeAoc74xcrEr",
  "key9": "5rFQ6TFDMJv6UsZ9W5w95AnUwpC7FgVxvFXnMhgVtvy2itwPsckwfdxi8UBCkvYQV4ZPLG3dLVZN8hTSGGq4th6e",
  "key10": "579ydSddH5qCpeFEC4t1VsE6HtMcna4b4SvVsKxC3geyMasp6g2oYqQHTs6DyX7uF351ob9rev7nTxftojXbTGuY",
  "key11": "3AjXjkTF2MchZFxcyTfr1HzDQxZ7yMvfVTESVMQr4Thmdrn1xT42R3R6AspmUea6KP9N3DS9YdgNWamzvSsaWCoB",
  "key12": "TAz2PdTyg8jgaop2PCyz9Gkeex6jTDLkqJyMzc5kkBmZ2EcRf4Lj5nUsCv4xqeSbNVGjwy9farpwKMKr8eo5Nvc",
  "key13": "5kVz9jQhs7gifSYSLXuvy6a7fuFRxg3e6Xjdv9AVxg2bvNcRXaC1mynRpiHNCA6BoqGrejrfMc5PWzd7WXfPGLcU",
  "key14": "5E2GPw4ogEEvPUa2845nVHva5Zv7UcNoLCFZL1uQCBJB9tgbZm3dGAvEBKnTkbncK2kYT7mdZvWinBRk3tbmLyuz",
  "key15": "56yrqqSGhCqKuCRntA67NnafP9uM9D7JbNuHTyGtQ4MhSXCUGYmHGYt62gmi9R6L3tJbwwK8ScaK2xWDzPnmUwN9",
  "key16": "42qQp4QoHeNqeS5eC4KGzyfYE3BqvdSanUgCxz5LeBKYLXzzmq3rzHy7YzUuRrMmUAT7q9ey73GVTBHsDcAnhscY",
  "key17": "b92YH1kP7iM4SaAPYFsc4XaC3cEAzUGcp8ax8SjehX1ifR2Qg4rnUGQ4eCur536JpqsbUqUXgb7MqNmmzUdRfLr",
  "key18": "2Sjx9VMSVRbhSASUszYZRffSd5pwRrxu1zrHR1CxY79UACC8VusSgWp1ZgA57eZZubsTwaVkwmRu5Zs68eAjmcZ1",
  "key19": "3AgcPn6NLNwp9jpy8uPzkKCz6JcpoG6fzugbYQyS3E2syx5HKD3uzXnZ9wcyJaMmRKUpwe2tCggPXzArW3NJaDGz",
  "key20": "41f4NwEt1dApUmSgxyYBA2E76xwm6gxq4QkCoFk2PULosdGgURPwDz285bqkBJUeHXZtrNiru8RdSwTtCrTuKPK2",
  "key21": "4aGgpXMHPf1DxMeJb6FPFinXneK4DpVNdHCrssDaztaduVE6Tff6esMptopnD6RmmF7PRVqnipWEuqe75koAsWUw",
  "key22": "2eYbP6PZUnyNMwr7mLJZk9LP6Vdh6mhzUp2PYcw3bYqsNSRCPXZdBZKzbBQDEuaE1L9b9JDqHYxN7yfy8rRkebRk",
  "key23": "BxidVPZFVHdbSVendCM2CCG6hxHdFEg18hAuDCuqekqkWYkcFGir1gbUE8yvE5W5nD8yMcgC6dGgVtwLSZVtKMR",
  "key24": "bz5hRyKnwYY6kzzvuCcV6idFwfADyRDqeodxjTxJWJDQjZLiCDySNrS4VZhBtou5r7ceeZTf1XYXF2KxM1q27Ff"
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
