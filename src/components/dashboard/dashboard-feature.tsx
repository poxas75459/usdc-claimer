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
    "4u4N7HTtwfBjy6nxa58at3jByQga6JujCyzLzLpRAgcTNkrYd6jLKxNHStSB58yopuTMt2uCPvorsMeBkmEhJY4X"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "mdTa95m7cfoX1B45kXv7cZCdLsNLWFihB97nmAqN91BBK6kWUWzMqTvTEtG2vRzjs7hTBUFsaY76Cofj1NqWxjH",
  "key1": "5JDYCwdaSPjB1FDaRyMBKt2sA8xhQoA7EmuXTvpJPKVuALAN5EFz2w3AUynjDxjYQ7CvE4Qb1FYfWArVpACq4yYc",
  "key2": "2ZjNMRVMq4yQH1WMHy3mLqxjYVcPsLz41ukPTXTqBdHEhJTcKWs85HMxPyeabN7BvMUKAR9TkWoxUtye2bChNzqT",
  "key3": "5uGXDTTLRimZ3PchjyHD9JceXsoSY6TxdC1j52Gr5d5jzR3R2vwp76aBEu6UiPbSAWtw4xhjqBitkc6wW7hEpn53",
  "key4": "8z1TBeMYLwUq8eKEshoLwAgKXn2FFLm6VhUYQRjht2rVdAJyNLSDhYJYVWBeGQS6oKeAT6kFAjZEib5K7ubDjr9",
  "key5": "2baKsip3WPsj5SnvbWa2C7CDWbcoQLYNT8xsrE5crGr7f9t63VU5E9YRVenmSPADakLTDRmMBxjnoQvFQv6hx9uN",
  "key6": "nip7UZ93noY4QZLatiARWt65BXyrNrzCobRkPZGZBjqELPuvxqfJLviR4EiFbukG2UWsf7yTUzfMdWAXxbcLpe1",
  "key7": "btHexwE2FunW9ESCx8BL4yTHn83EHbjctXgiJzSysVS73XNS3tt9tECeKakCLeYYjQu2E4BFXFVJg1QP2kuRtB8",
  "key8": "g5qNVXRE74Az6pX7yY2U4mBesbEjP7bLu9p4xXxAScc1H5vv23C9FDvun4r4tUB9DH2mtSJqPXbTbjuNSormbEH",
  "key9": "5NG1Cau7zmNCjUwkqJVFSj4AC2ZzxwLPnHNPKk85jHQv3epEErn7nC5gz5G1YSpZApyaj29dgFrrnc3A5xbVapAc",
  "key10": "4CKBSq5rJg7zC2UMQ2sFwzpuNGwsHDzhzUgm8F9fRAEpt2u9nrwTj7hGZsuLPPdoi6xf58BwUpD2T1JRWPP7n9dB",
  "key11": "hKY4YFQrw1YWFMsuz8UFqYrDfnKt8LLhDyWNrfbnw8KU6UkEkuyNbG4XcadA13Gh4nept3Qp4emGzkkUgBoLxS9",
  "key12": "65eUSwUyMqaGgHPLr2DM3LZ3LqP5RfDT4ohZsPv6P4d9LewYjwBcc6Te9qDpaaQdb7uJRU7FGjdNMPwRxEYnjhgZ",
  "key13": "4p3oc631UPaR9okf553dgRKrGeSksbErBqxMWB6pWdDQkeJk3CfEoPv8bRQ5esvxbTmLEnJLicowgHEf5a8ddTj5",
  "key14": "5YenHXsGs4vfS34QhvpjPe3wuZeUkRhGZXGcABy2orumVt3kKmRT2wtQyUotTz63Gsy2iGsKV4hmCkgTbdjEMppP",
  "key15": "4RXX3FajyXK9qy8fUff1e1rAYWongBhh8waxXPHkyZAutdidXsKLznkfT5DaW9aLmysG5yNivfCxS2NBKG9SkuL",
  "key16": "obCEr1HHirmNHu8iuQtrRakc7bxx7KLvDjahmNinRkjhViqZSs6zLx7mx3HiMo1ZQRpaVTwmLgjLATDpDbXdRtb",
  "key17": "Pb6ec5JFe4cjp76eo21RbwaEFoKNfzpQE7Y6FKCxrYw9V46z8Hpt9s1oR4HkiTyZUBp8pHoCqAPyFi495vUTRuE",
  "key18": "3m1sEwfe2LnHfN8cqMQj3qzaLo5zXcQcXkeFqqkujCrthGqpbRRkwbFtWWerXAFCiFXPpZmBLEMHSoznpg2kBz3w",
  "key19": "3kkzPqoXGDqoZEbR9sX2JZzKEhkFEb2VrB32S3JUXbMgL41X5SCvgNFxchK2et7MicDwW5TKfwLffgPoqkESS7Ry",
  "key20": "5zcac5HHpgFVY1y3LCrVkNv3BagSZbcPVgqbsRYoJbU3DJ3P7g2emr7qwy38y8gPGgoVmiAFjXVMmyUt3dQNjtdm",
  "key21": "2cKktFk6moPU5xaqQpeARjdVEXLQLXggAhsi2CGM4HWZpVydP2aP5LTqXMuBHjNwpg1tf9JGMMEz7bA93woZVCvY",
  "key22": "66TXFMNijgUVADVZKctRP6798fjKKcMq5nee6aFfsQpdj5FvrXfWoS5t4ywcv5zBRwDzP3xkEMDTWiNeTnHNSw2J",
  "key23": "PVtV4Dcn1uUmJt6AJrejWboKf9DDRs7kpjQvdgm9TjF4wvxUExjJLP5XV2dNnPsdky2gw1BZxxPqBa342hDH7kC",
  "key24": "4ek9r1gJ6caHPMx4nvpFAs2WcVcedqLDVa5jdBXrMDNWzYpV9nND7ep1fs6QbXT9jkExPxZttxFz5BZ6apLJGSbM",
  "key25": "2zosczmUnQR3Lvz5RBi6XMnY75XmW8D3BLzgkgCy1ZwtnmUoEGK8hx12YNWAwhVvrpW8hv969FyNpoi9Yq2ViJCJ",
  "key26": "iR12Ls7biqioai2bqGNXV2Z4nqMmMefYvd66pEkFn1zWFPkjYeJaWpa2PfaXhr52o8RJ3sGTPutgmuQiHRUULkw",
  "key27": "3grwYWWYXJGnj9HpotvCLcCgWmAzBjZR2JHsipe3cPHacbPVGPnXjn7Ui3tiS6DGX25x2gNYva8XofVSbrhrQSJn"
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
