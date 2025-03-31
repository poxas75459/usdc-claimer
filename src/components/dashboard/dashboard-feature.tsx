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
    "56q3g9EvXUfE39BvGeZd73XLYGphDkBceMbF5cyTy27UpRUoqkttznKiYaMULBbchQtiEk9TGjMqvLXr5Ni4Zh9w"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "irobY82HJNj9Yfz99r9ixSrkWamMJknKJRG5VMEKUfii9MtqnPtjgzvdoqiyvNWAfEyGJpzsHeEpJ6ceGtV3fV6",
  "key1": "2D84ESqhRGNvnH5Sc7a14kjZ9u2ESByrohR8NZT3xtaMYK5jty3Sab6PNJChB4MWiaupcMSELVAijMRQQ92ttK6F",
  "key2": "31Y8X1iW6Ydu2vdbVEztqzouPXVLgVeiH3zDzowWP2zWne1e4eSqMbsxyWwxxeP4p2Hp62ehW9WoJNf18jDY2Aco",
  "key3": "45oR9EcwfdbMjEPaD18dTwjhg8tkzwjsFuRgE1LSgiPrttakb8o5VMcYauoQusAzdLDhLfQofktsH6zLpd2xyYNM",
  "key4": "29Aw5SxhuHYjQdMW5fyzXXQ1BTFbanY2ixaaZ9b9skKJB1RrhmKKjbTnQzda1dFJuUNiwurbsZi7xTdkEU2eV42L",
  "key5": "8VDNtNAzYQiNMs9AM98yrTnQSPEDg3KzBPDKWcoMxaaYhbky2kW182sHZTLZCVxe92L7gLa4L2MHyJZQN7FS3f6",
  "key6": "23T9aSfFmohpSKT5RWvc9nCzsDXjnY7j6AnWRFFMfSLzVrgbmdTLq63D8KAHvpFfy6iww6UeapQ5Rxtrjq6JJ2vG",
  "key7": "5E5aGevXGx7Rfj8tdektUtqjg19NvCpmeWyYZVbmThYRBG7tX4V4FtwpHpU3e8LvFBJD1CnwSKHKrCbsRrHBjQ8R",
  "key8": "25kvEXgJFd2ewvhsrSDmBwBEKejhMGhL2ghazcjY9ubfm1niXE6dpg9d2rb8kkJid84eWVakg2W5Cns8NyZz8hcn",
  "key9": "5pxwiRL3UVjvCzxQvxYToqhLpcHy5iisi1aoUM6QKHk58YyX6ZNB8LjAYRnKwnZy8FyKChdyFTiidQ7v9HyXxjxi",
  "key10": "4G5Ly8MRvAeYK93z85k6wb9vUwYTctoYuU4ayYoU4T1iQR1dsbrdFxpxwPrGAMvKgcgAvh2AVDHYBWn54tdK95Ah",
  "key11": "3fADsqUwh9m4a2noCvgccRhKnZVk2uh8SCkHGtgJRwyPq2atiDNzApCRHdKhM8joY77ELXV676531o485eF2uxkm",
  "key12": "3nFwnHUBBQNuAnVELEEjuk8Rz3aqU5NKFu1fuTyJkoSHT8fqZjHEBQf1yH5nwTJ2mD6zn5XAJJLYXP1SqMa4GA8C",
  "key13": "3HhtGsdNaZ4QBrxKJ8MzW7QFvbQrGGq5j56AqmHfftJdj5Q3JX7pNFqsSPfpudthbjohN665aQo8BRWQ8bckVKVR",
  "key14": "4gTZWMWCw8jKvRDDNYjXrtPdkb7wwLQc4m87BRXqvXPETSt1MHNTp3SmgNgBRuhzSwAqN8aKkwYFTUL1ZuVypjMZ",
  "key15": "2QYifdACeasdsfqY3hQ8MzYmeStxBoRwFXpFwKfTdhmNoAqQJuYjC9uNbTRqsZxz34UBZf66arXQN8FXpbN3uD58",
  "key16": "4mdwitLzAYR48BVxZpUvGJTsmNVc2MiGKB8mGfuKRPHoSMfVj1k1oNhg7Vj6PWQwbtHZMB4xWnaa9YLWMFVCBATo",
  "key17": "5gW8kRmudoPY6nNAskHATiR72rWYezZvzJSyN25RT1WsypRMpo8ToFYh5HMzQCZNGSeApnzR1kp7hNpP9SWRPAL5",
  "key18": "51AJvPMf6BYvPfu3AUMy5JVxB9y2F5jZ5iEMT4BwSpQfnL4CJAU2f5amJkgnzA3HRTB9w1tabM5nWnu7jCdTip8S",
  "key19": "Ww3npDsqoxCpnqB1LMqqYu32ExXMCCC4BNnKaCmgPsKjt3yG31mMDow3T3MNGbMzvQkGUDb8y4kLVBZxuQZBo2T",
  "key20": "2rWTELCSstkGdL4ZPtFaRTYYDeNntWnh4WGEdYf9e4p4aUAr77RuonYX5BNzma8W8mEgKexknC3LZci946aHhpzJ",
  "key21": "57duo2vBWKZHqcMLpcsH18jL6WquZdyBRbnK87seMcRWXtzVtHpm2H1iMecW3hpw3SSQpcaYNP2XhksYyfDWjR1a",
  "key22": "xt6XPPmfonmNJ3yu8SgEezmDc5hG1rt3MmAjh9vRHEZmEUZFnzp3JpV6WznMsRLkyAMNjbUjag7oRX1azQgfSiq",
  "key23": "5mtXHTofeCt6VTxhsg2r2HnVHnbDJHQC9fGiKkX8iLFuQPxGj7DAMARgwTT77DBgZhxkcUxqqyXQBq5ZT3GawUmW",
  "key24": "2sL29rbmMaRissaGXZNZ92X1ygvaiEEUVgrKAJAnMpdmQaSbo42jZ3ZQc3gDrLvkYnofP9VtDDL64fkr3cywKNMN",
  "key25": "2YmAHnPsSvFDWWBKGcqaQRuVU623VPtU83Vv1oUujGorok4mqdrnFMSx832HDFnkv486RxunafeRcqXGCzx8Fj1y"
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
