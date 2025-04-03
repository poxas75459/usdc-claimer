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
    "4N6dhUVvwBmmaVtxEYqTCSLEkRtmEX5dn8UPJKVywnxRqRyTp5gnV9Mzu2cEXSNS8v2zf3ueAyPSYruSNLZypAwC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2pQ5B1Ww6DmjmtdR5bp1LB5yZcvTN2NPUY3eiRriEWEupi4dspJrxVkTMr4HGm7oLDT3WhM6iuV2DbE4bAVFVrFy",
  "key1": "43DwsGKP73aHRYUSKin8h9z52MKZDGwgApEw2cVi8HTaNmb8UKMjT4d21dZVJ6ufwW6woYF31UaH3juoJMRUr1VB",
  "key2": "3ECeXKCgnwhPt7ZspnVRXvoGGq9apAgnqaUDzXVbbafQSPsyVSqXHCtjQ9J7SU2zXdjX9gpsVGg6qcdzoC7SbmyV",
  "key3": "5B7T3tRsJSx5wVERxHCbnk3yBwQgvz3dXdz1m6JEsnA7CyKW7i9283JE65KVrGjkWYUWymHuomzy7WJdat5cHpPu",
  "key4": "sNYVWzW8V7AmARAZt9NTqeVieTe5E6nRBKSC611FXKSLzMop54W8nWPTjvM6Ab4cF77oeAAss3gPDwhQ6tAwrmo",
  "key5": "2mUpgGuBcCGCg2sRaM1dvCcNNour6xxn7ZAdKjnLXc1XBs99eYJvAtyVGtr37vaf9x5bi8RtcSx4XXP63ypmysge",
  "key6": "2cQZjewhDpPjasXYuoVr7dbQCyS39Hc549VsQmeaxFTxRwSBamCSmU2QrqTscTkTjahWVrnEhCmkE1WhA78iyTAQ",
  "key7": "5huoCNchpZJGn77VZoiAhiVQhygnnum4crsqpUf2Mhw7cSGeYkUzJbTRHZsVJjGfTx5XnYjwRxrdntHoujSNmL4e",
  "key8": "3fqeUEJdnRLSqcW7bvPoKNdHmhvxitme57a8Nc3vkLAwuK4sqiQfUxZjjqgRAexFToQtjHVVcCuteSZi3NUiTQak",
  "key9": "4ZW9En7pX68fT44oeMjgqanhhSLAths25NjqCcRzzkn12mzetSs1sKimua1Xx9hbAnZLKwLzy6uCkiXbMTNwHVRC",
  "key10": "5mSsChNbrNmKrnwn19YzjFVdocL352zAWkoWsqV8Qot6Bcfv2gjsV6q7dQrNWwja61D9kobt7vmcB2xCDknfLSnr",
  "key11": "2MXMbEnSY1HxUgcVUf5bFoKp6WJvpFcq9uSnQiY7VuVJ4ftRhfpjXBaLDJNnTNvj55kpu4JP41nSjTcrLQD1hCfj",
  "key12": "kpH67nrxXWSGBhkbbArYcWbzZiXhiAu8jfY5KfqCQLChjZG3CXjBa1c2XwZahVoyQ2KK6oWXAk6ucQhEsTAuUh7",
  "key13": "5qJTaaBqMXEnKLdeKBY9aAB87w8UtXntCV7tdUKGspHEcn71eWed8Vae2oJ9HkLtARn6BGfgSnCdqNAmrM8X74TN",
  "key14": "61nVpxVLgDcYQPUKYTu9aym7fwVFVhuKoS3XyxFB2cDTARg9xESWELCxnA8eLKq8n7Fu6KGWUoVUqpzLwNFBYgY9",
  "key15": "M7hKk73PAGU415NfJo6Cj6rHP41cVPfFrdHsizqfcpkXTor9vWRfFtT38E18r9JhgGQ8LR3Y6RHYfvd5T6ny3gS",
  "key16": "2YuXPKFTXfRehbp2GTtVEt9dU3DmiMAynbjWyxm5Q7Vd3WiSDVZWw7uVTJ1xYAyhQoX28V5xGXaHh5yJSF2Wf351",
  "key17": "3WtnkERhzFPkzu8i7tftJc32hhqeRhxWBQpPwpPGDZGRvFv6RZ3NRdKo2mQN5R62cs2TxtT5MR1Tco9G6GiCAQa8",
  "key18": "5JS8unnvMiFzSZRHqAv5dcQxYBKmLceExPutwPDbB3MoZ3MKoLcLvzV8duUNessLLCBA6SJ7cVvxFAazUUuHAa6m",
  "key19": "kQXTinSYNHFAZHoZYwVRiUrZnsQ1HrwxpvrBuDYc37YqV6TEjH7quveMWNET8VBozkkBcXzY21ShPyjRkvCHzx7",
  "key20": "36esY46QEn61BsgmQGBDazwU7Y16ia2CU8x6wpKoANrzsRrpPkpYq5RqZM3LepSGGciEknddt2gBtSeegVGJw51H",
  "key21": "4LFdFj4jztoRJWN4N7W4WuHCV5E8oaECVD4Tar4M5FnJ8CTiKTWPkoupvsAyTneA4HZ73W56XGecn76QeiVyKm9Q",
  "key22": "5bqmZZrwzmvGK5VFtS43B3uaY9RPrjiiaBbXLYkKhRYEb8joZ4vhAFtY2RTK1JGDnETgLCAHFEhNmqfq2DmryusC",
  "key23": "4dy4VuPcUnTTwWB8qevUGzBLDkwgcBCVBGZxfx7cpqBXajFUr1VzEFv5bjLb1LvKEYAu1HmdKzRkygTWiGmRCU6N",
  "key24": "5171VCS67XMPxt5MhED7DMj7N6QN7966Dyug7FY1Dyzf5GUXaQRbN8FU8W1n1ZnfKacYBa1aVoW5Qgtigxe2cM1Q",
  "key25": "5yUdqHFzQgR31mXMWWXUfDpx8pmepJVLWSskDLgxFjWqQMfAuN26AjfXy894ULNdN4iy3jqwpzbRFiZCTsNiXLVr",
  "key26": "2fAk418qMTqbVSjiA9T9krGjPk8T11Hi5hcUEcNiFXoNKtoRYJ1xhZRxJwvAhsWX8bkZNYE7eyVED6v4beCwEpDd",
  "key27": "2bRsGvWkMYbYwqbwdMnfUuiV1ze3g5gh6gZYczEy7tpo6wZAHy2PHTgmuDdCYJnjA2KTajsVtyU1Jujty9Bk5ThT"
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
