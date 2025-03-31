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
    "5kFe4LgfbQmm7sokFovUkWPb3HmT7hNPKtuEAUP542zjmSpcNEMJ3hbNe7DqJZCVAMoqFXLAceGaER1UZj5FNJnz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3c16UkPGaBz9jUqtv4mfs3nFwq7NA1dRFJvrDn7Gj9hMXoJP1FEYn2zH5MFHWr8sDjLzfH7dVRqK2MzdKE65Dc5y",
  "key1": "4Y66bXikK32vV8tzDvZdTcDAVcfi2rL6o3aWJi3KuQP6wj7pv9PvAQKmnMQHfqFPECCBE4sgWriQ7yj5MrwXLe42",
  "key2": "52kcVafQjnNqNPdHZwDqKVtYx37CooKYm4pjRp7P4RKWvyg6XXzfzGQgmxiPyKiSkV3vhs3FEW4RnWMyoHcDg966",
  "key3": "3kKP9ajxi8VsUc2aM7WYJsocYgTRVgwgN1R7EyXYFbphrLcmMsw3R4i9Wr81q5neYwiZCCP2JmEXNaYSPqAaJbHV",
  "key4": "4yCkZ2Fepui6S4AJLzFz4S6SLFEtDTwYBJ1UWp1hr6QR8gzhfGExyido76jEApSNipyU5v9efamVe4KEknN1AsaU",
  "key5": "GZqgStdn1B9k2Pj4B9rRGxQXrG4EmSAP41na6y1j1vgE9fa8kkh5MBTdY4yZpZJz32yp2Pzg4KXaoABbYPLG5W4",
  "key6": "4EvnCs22KhjiWkCmzTPfDdhjhwPTXC4urSe7tREpTnWhf2hcU8rE5Yz4LfYUWhm1m38xVqLedtgP3GFhiSFJ6BTo",
  "key7": "3GZCr9maZJeUFjGCejQDU8MgxripMPWh9sppLX1XPbEQBB2khuHAEC1Lx9GivWy57MEXjGhAXXGvzij7Np3d7Xca",
  "key8": "4r8YGF34ojMqC7gvREdxHfnbHJpm4tjVv1q7BeeAaskEYHaNsiEQ6x4sxWTLJY8vdmLyc9nkV8nEv1Tnek2wbqCT",
  "key9": "Jfi6f1p7PUQy8DW37AHuMqvaZxdWwCbnhM2nfkQyAGoCDprkZdpQCHRQTA9gJwNBVUgnE624WNmUiftgwEdjAbA",
  "key10": "rRsg3s77ishCcegB5S9wC55KFVvLTkZJQz2UDNH6NordJTBsnYFqgHHd7b4TQYGgHHLD175ZQUGMgcG1E1qqxAx",
  "key11": "4u4mmVLokC2kn8rD9A7vkfR15NNchqaRDuQfFai6mGxsZLcRJLxqy5Y3RptTtM62khgXJCPLCG4ptZqPbfdzeoz2",
  "key12": "5z7LPyvgbcF4M7Aq6chCAYpQ7C48b8t7i8twW7BvePPEvjrznHg8m77BoYC4nK8EeJ6fq2atTznaTA6gZx77sejZ",
  "key13": "21JSYHAYa3m7poKyo9YSVM5Mbaf4SCHHArdK1JL4LpLPqQTXz1gRiiLpBcbV9jAHsXhoTViokLn3NMWXy97Jgm9W",
  "key14": "s6Jedwy9eML9fxbVq2vHjtejtdVarG3fCLEPc5km2nP5apmByPzoKKGJnf19YrsTk1ZNQdMvhgLRSnsWnEbFrRX",
  "key15": "4aAzeAPvLC43yceitV6vSdRtdSdjSKBDPvKTvsyjSkx4jc24gneWZyiJKHGYSv1uyLkRPKLGNg5qQ34UDgspPUM",
  "key16": "ss2DtAQiahy5rMQhkGxMqtVjjEvdsC31WHWSPjTG7YuBoAdegph9hvq6MCd3JZNQDm4rVxp4z4Bj7ztvTveriEG",
  "key17": "yiUqPuWLNCpcgUxPwS1i1StQg41iyxG5xE2kKHcFCTG7PDvKCuPUZ7aajT7CbccTCEt5YVC12DQEaeXUeBpyMYW",
  "key18": "2FeV7yugvu2oJ2PVHjQvbkYaPRAoRtPxEBjSMG1XDjaAwEMDYifRmsTknMS18JuNSPVBNSXs5VReNn6g6hcsm1sP",
  "key19": "2VBc6Gw3dhrFCbS4Zzdxi75MnRAtskm7YcaAnmEffBGtWJBDvdzqvht3v5iB7NnAyUzq9UvHS7Mj8C1uM84N6dw",
  "key20": "v5yTpNNNTEwJcGzhWqUGAaJ88wcvweEmCAPgGYP6rxyw5XxUH9fTTKdJP1b5wU4j7PC6pRUxYXwYSYePnMBbV7W",
  "key21": "beiHKaJdwTnnFWkFdZgDXP5v7G2fu4ks2cenuSwVvCUHTUBrcrjfpHtFtVm3qryqK5kSh7aq4rNFRcoMXaZRLzJ",
  "key22": "3EyHQ5MHsQnN4dTHWs84jrdnsLhAbLMgZ9HLjwuuHUdYc7f9Jpm5oZ5jxnRpqrixAERZ2PmHQgbnZmh7j2LCFey9",
  "key23": "3GQrraGAjJyWA3sCc9SHFghMVUcR3hYbsQqDBqU8HpePB1tdWGxuAfJtQS52EtRDHG5n4xhXPte9VZB3F8Vth7f7",
  "key24": "4Nzosc7aYeCrg4C8QCPLJEBziEQdMFzYVYk8BhZvK5TA7UPwda1KxaCYUe2HhVxtDcKY5F7rm7b6eormB1Xs2zRH",
  "key25": "3ei33Xa5GaTQXtxM16iga4jSByYeeQoKoZVSA6CppDUNtNoFAogP9syb33MBQawdAetxe5q4JC2J6VU2UvB66WC6",
  "key26": "4oT6RG3W7i1ZVPUo6wH6bs8p8peN5dZWt31hcLkbMerKV8u5bW47vbngDFBk4AHNjc5cwtWaC72mojfEz5eAg7oH",
  "key27": "2s21TRd37sH1zvQxPsw62sdR1X1zNUGAZLbh5ZYi5dKKcvxpyNihrAreUyRhk1ZgsTLhy2cUqqHbH236WCU4wFz8",
  "key28": "4AkT2s3axvkqzpZWAm5T72NZcXASyJS9GXyaVgUvDtGeECkYWZ8X3MD9mAhgZoPuvNRWWxGdyhfWSTczniarMtDL",
  "key29": "3cYZK1GKytnQekpyNHBgk5otG1L8LJtnMXYZxrUq1sr7Y19FwCtUSjj7eaGU4HGi3KU615gjYup34zBsojbqGoWt",
  "key30": "5aVB1yatPf1jouufZ5TghovYRmsTtgUa8rvrddBBT8gjEjHtLfJDmJFjXaBGpogSWeusmtX3KXYDvG7hzjSBpFqX"
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
