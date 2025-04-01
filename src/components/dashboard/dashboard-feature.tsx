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
    "2RL8UYktpVWwGBt4E6YjM57Eh6UnG23r1L95heNaBTXVwJJ1doVL3vGcMA4YtJ93FL4TMsYqxwqmin7irsrRtKnX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2WKmQMeqjV1Qpe53iWw7N4vgC8va6DTaTaYKaAFPP3nz3bt7oGY67VcrQ16QXUJrGzTGXNXVtwjtiC7DXPxh42Gb",
  "key1": "2vgyAD7Jc5ChVfTDCRidAVfRFNMucU47ZXERPNSVTBqK2rCCbGk49eRAwHnTSossbKz3nZ2C9mYwt2gHBy6Ub6q6",
  "key2": "5JENYySiUCHwVM9MJo6B2ugtaJ1yx7QPUPXzrAtwRfXhEjNqRBupm1PNnsaURqAHJdKbK49k8AAqdgeD7zbhsnZc",
  "key3": "cRgqEmgETF5HAMZg8adHCgySsbatsi1kefsZshBUzCAtNzXhH1ALfNm58EsFr3xVDD5uBbJMm6nKPqpuJDkuWRc",
  "key4": "54JqWjhctmYTgAvqGf6VGCASBFKrvYo9wVYTULSzYmdPH348jGg5zune59LYKnST9PNEL3QCpCVFkPDaqrJCVqru",
  "key5": "29hSnCmrXaVMkMZ9ASzGCUSup55QJRAi3CMabsUZFiC2G2DvYqKmyjC8rycED8ktZi1kbGZDgxJMVfUgUjXRrDu4",
  "key6": "4WjXqSaEHqB46Muk51TdGjh1RUiNJe2cWHSW8Y274yqMAS4F7ExyQCRGzMPNVnrCb24LLnuPP6uDjo3fiho2ei4p",
  "key7": "2QgH7wy7j7m5VksHF1Wn9W2xfoRYNJZEYkjrWvi5yH6TPqvNv1VuSQqrHncWAniNBtXxJUHdzJjKD469Myt8Ni9m",
  "key8": "oYpfU3tT5Wj4GS6pdqnuTTJUxzixm1Pd3vm2vHRXK22XrQTfonsR9W4khiJYFBf9kVqPiMsBZZdm1UC8n6Nc6kw",
  "key9": "43aTKsHvVhMSYaNuCS7CkKZahq8VJiadYLbmCVCdQYM5MfbUq5fgeLJHcfBsWC2pbUztke6zhCeWSWycLFJz9frK",
  "key10": "5Gx7YivhMmbdq3ZTvoxaZMvBWNxYpSeXkR8UJqjhkGpsUopPjuXyLvuBaUjPRCNz7oqocmZLN5qjvEmaHRcuYPc3",
  "key11": "2F6YHsZ23pej5c3rBGdeGdNjAZDSYqbpcBryGstifisYAkGFhy6NZddaay9xRoUaZ7nfnRaBK8SWUBRNJ5J7pfue",
  "key12": "2MJeqC11gXKnd4kxNy8xxmrVghvxp8zEn8GmjoVmRCcZuqJ5mTnfVaQANF7sYGVJfKtBXnBDJH76jx8ih8yMUFHs",
  "key13": "46MyYkyVEidYXY9fN5LXusPEha86boR1T9tFUbuA2TCUXHxCQjdiRKMz2kVjnThkRsZyR6S9XqQf5h1duimXFTYj",
  "key14": "3PQtRTgWLfPZGZxgw8aTLZnwPcZrPqDWrxyRaFCMqi2SMBUBb9e4cyikEJAVipbv7cUpvrY8BV5t7381QzDasNBZ",
  "key15": "4GpXTB43SeX19HsjrhmEsuELWp64XErW6C5B17g3wnV5mSgY6znZZ1Ec3q5oJWfnr5UyQG6kVChU6ZrxCAbpeeKY",
  "key16": "3QixZR9YukkTqbXExwYoqKYQnZp5rrdk852c486rDbwo75B3wXcgMxBUxepGfqnDrxgVzPiA9uFRw5kEYbFMvWA9",
  "key17": "h8e95bqBvd5vQqbSjJWAXpuxKbiiG74vVZZfta1Z2p69snAqo7Jourtt4fq1RFJ3HMkYzwB4e24VTxu7w1rnWGU",
  "key18": "3keFFPmPqZV2vPq2xGJb6tnfCJSTp51QJ6gXMt31zV14uDLNyyX34bcspF5Ev3jKggKEyUxknsqYkkDstA1a7iwH",
  "key19": "61CvQrJkGuN1AaSzGTsCafB2obLSs6a7VXFgj1FwuHMmNZt9BKjWiDcWk6oMoxi7w9ZLBuK4kLci4Ebr2uXUKJX4",
  "key20": "2Mb7pHJNtPQHjZPCGdexVGxMB76YQXCHLiorR82QkWDSkGV6M4euQw5fuhTRkprjjEFftioSdeo1sfGp419wQvtC",
  "key21": "4TiPHfezrQX4mdnjW54NDJ4ZWNVk6rEVzpKDYHmCgbisWqmCMdykFECKXHDwgaZBpT5CijBQZx6wCiBvqJoSF6nh",
  "key22": "4WFnerySzSybP36yUjK7RXm8m9dqgpmFWMAUSbhoFWyxhn3rr4UC7mxHFJ5qPmp3vS6XXtT3ptRkaU9c8tX3eQ1W",
  "key23": "5NxScEhitVDFpvzwySdEwcofUGgAFYis7gUCgufu8DvjsfYWTtVzf2AMU4V2HS5SMR5rgZQWKozDbPs9ATtCeKW9",
  "key24": "3f4Cb2Kv7NkSs8BF3SZzw8WMjSf9DdoVZhyAc5WJDf8Wswmcv6FNpjPuuwYdzba5JAoTQDTjdQD8v9iyAJt5AUpA"
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
