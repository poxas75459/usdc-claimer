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
    "QnoTL8S1ubigaZTJ9XhA4CSRzLgf7m5PqrhutmKUqmvJggd6VVty7RSt8qxxipts6aAFPfu9AzqnP6hPQ78eLRp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4yEd9ME1Pt3iTNv5pnPPdoBDiwcpgCHHdDYVgFk1Lrk2hQr6GL94RyQ1f6e3DTApzk4ZpL9GnaN3WvrEFYB2FnZT",
  "key1": "4Z3GuV8m5Z7BjKMZRW9VfTRVCx8LWbyQG4kotwbniqmQxjjwbdFSCg7HSiiyt7ZgAzbZkq3TX7EcKNKFSNbvi6ro",
  "key2": "2T5RnTKQdGmGc4QBxFqSsAyUUzyocX2TxPQuFgkesW2geRvXgYsKSXgoHFqyob3Qhn6DUSZXh2G17vCxo6QzPnTG",
  "key3": "4ACW8BCHk2HkFDLBeRBLn1KLsw6E6oL9L1BabTYnpCRyCSZo8N7N9X61MRZjrMParLWpxFEzmmQvuDKwoSMPsbMe",
  "key4": "3QUw8KykViUXPvBCAox2hy33VBVSD7qzgKdSSBfpuPjFknx9su4egKtJoZjz7wUBYqaa2K6TTU2tSC9jmnD83No3",
  "key5": "25F7BdD1YZZMZZEmUKwfiNijUXy3gKXPHMwFm45CLwAFV8K4tRT1XHdgkre9qMtRKQ2dUXyZwq2uVa7ADkDFoEiA",
  "key6": "3n42BwvAyEGtMpRrtobSvrHFtNJKekvcnEKh4XwLK9Xhxvvmu4CkX5iP17FexjPJCJMYFfCfBfF3bVGejwx1gBJG",
  "key7": "5QRtxMnyUq8h2A4QTya3DyN5p8HbcSdkfy1ZzhXNFtQawzt1TNckdouyRL5nH4sq9j8EkFA2cE8xSyP7oiLX2CnJ",
  "key8": "hjgKjdB1KAq8KeoKH3LgjsCLdKNs8AvNW5GcwCJNCAxwmUbM8zq14SK6HfGMqdtdq2fHfgNr4e5YQ5o81mK4VMh",
  "key9": "4LM2XkwNtfqS5Df3Np765YXqPJiLH85JyoFNLGz1sTrWXRi339i3uWHrKDj5MtDHNo2SH9enpBa5EEG5uiUoLgr8",
  "key10": "42Z6bFVzC9zzjiA2ZEUKor9iiA7VyygAMvGmZkisritgvvRyEq8pBoHaZ9KgyGK1eZGfVmhGVXanzq2VGDzNNNPR",
  "key11": "3W1NJzv8pMyKCsjW4bxQntEhhefBakZCmTH6iujky3MNWVNmXRNEoTwGaTqmz6ZgkUxcpwWfyT92oDcBoDfTPeQ5",
  "key12": "cUqEkj4kLgipPzT6FFWWud7m2pMC54U3F5QqwwZE6rLbbxL8gsoxz7gmtZTstsGeqSmAxPJP3BAkiF696yekftN",
  "key13": "4zjh46vzMQTeU7g35vTLfB9mWPdsxdFowHWTPtdBu6bnFAqrQ8pCTQ9bJtcUVxxqqmXmfB9f3F1bksPbnred9Do4",
  "key14": "3EVCL5E3hnhVLtPyahL4tXxJaoE7hTiUkNwS1eKdHRujmHAXXVSQDdMSSw2nWnvwtACs6iwo6STtg7BEjGBDkPW7",
  "key15": "2wLNDKdCaoutxfEdFf4CVP53dQrHsHuUXKE5fmcMCCL6xnepVVvWCm9kdr4pin3tTQwbD5MDpfPUETRdMMuAa79t",
  "key16": "5wd6K9cPkq1bqr8y8zkVQBSSqR2JfU2abUPfAAhENv8eSwEqXdgJwP1EtRSgWFEUCUDkfFbTHLSFBCyPs2mmSzHi",
  "key17": "4xrtHVNf8M2BKV9VchUAbT43P83M1BGXsuCRwTnT5Bhu2kBYrA6fN1bLjFHcAziBpC6c1GR17QZL5ChpgxHxdYE6",
  "key18": "2jP8rao2hnNLpGdBHXmnJwBPFs9xrj7EhmyfJ113okgQPXuuR66B2Pv4U9m32BgTLnS5YiFiUEXxyqAmYu6ip6bi",
  "key19": "5G9jc6FsgknAFas6M6oa8EmJRgcMyGjhAprWGkn7G1mhy6GqF4krKGyEaxvYuHSawnWzwQ3J1McFRzkrrf891wSz",
  "key20": "Dy1n11aZ7hZ8xnPJG3YFcuaWFSo76mdM9ray8SpHEp4suXvQGpAVP8xrFVTFC8nheLcgJXAbQEqLqDDSGyKjXSb",
  "key21": "4uGroy88PcBL6qKw2y2NP3gZ9NQdoZVpnpb9ZWaknmv8EV4D7L4ywfV3koxGrxzVB2MefibbZrKj1nfTdKTrmvDM",
  "key22": "4j1tMwS2NMqekHA21E5iqq45ym4GecZQiSSSythsc8r1HAXWC1QJm5E7nrTpTYibE8Ad8o39xGtzjsjAsLrpdbhQ",
  "key23": "569VHC2GaXKBSGT1gWXarRq6y6ThyECifb2QgjE8mBgJXehhpGsfKkDC8biUa5xVfLtDevNHNPoG6UtUAUGCGzRx",
  "key24": "4itcU3zNJS3z2QkVazKpKoAQox8YbstG6Qw62eb8N6UtZF8k1CvsLSfQMscotrKfn568Xmn9NbvTZBnF36quCdMW"
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
