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
    "3vT7LXhvpZqRgpALwPVkbjBUQEKzThKDVSP3uSzxa2TUbw5Zc8xkc4g4CS64pHAurZHoyLe1YAuKhXPWoRH1ZzSw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5YUJkatRLPerMR51yAi1puKcBF2k48Uot6LqaNWhueEThFvveHadCWnxD2SCAkvibPadQeZX69hpqS9Tu6ta8wWr",
  "key1": "3zPqBovuiEGUDw6TeDB5518r8j9UTBuDvnPWA3cxRSo62Y6PPDPgGCPyYqBGKWv4xAW2fkgV2J79H2LC6tTKE1DQ",
  "key2": "D4nbxCfZZHkYM26wibaX7P7YgZHNf6BBPmF7yzAADR4FrEFQNw9rEiYUkZ3JuBE2V3YMBpMobFVr3ZX3FQ7feyv",
  "key3": "4H8FPFjCnvP4C9TXPnwZRQtiFrBKfpJ6S42TMKa34FbizkZC7CVyPmRNYh1v8d54ktyeiWLNQFHJDQ1bE9UK35ca",
  "key4": "5uttUfNEyVYdhvD9KvoVNpoUiDAJ7Xo9o6WT4rUrHEzqsyUPUfD1rWF48WLztGD96oPqEB5CmMXi8sjxAKhSBwY3",
  "key5": "2hDNoAydVh7utayL8hyve4JaUgVYW6TXesb6YzeEgqFys3czDJSq2R5ijRApAXVfnHDTXnf5QRnycB9NdxDQE9Qn",
  "key6": "5V5ShVX9Xkf3FDanXF8A3w7xzfapLcom9UQuLknWYcX6YXz4KY9wu4Gsi71YxacXenRzdCasPw1n1UxgfnZ3hvVd",
  "key7": "3bAQAVLzFvw98EwHEx6auNgqVK1TBzroJQF92ghCsJdB6Fq89hcPePBqbaLhcGH9p5hof5nxb8wDEcdX95MWTVht",
  "key8": "2juCV9d9u8Co3yVQ31zg1mdJkgvtWB1zQR7nQu1jares1To5zWGB4umBPGfH8jUoVGCvYr58wBdvX3CgnbtfwLJs",
  "key9": "2NojocdhFhiPHXRBnATNU7eV5mx2r5ospF8LUnvoaqdbxvuFwaMRpawy1bgVksozSNoy7LMKSvUm4yh5UPUQ9BhA",
  "key10": "5HNrBgfCYmywqA2bjLGUmnDVuEwCJ3nA6QJAdJREg3dCyDcniRmFMCpmc9cY2ankoebdJj7bxoiQK37vYfqkRHEg",
  "key11": "42NFg3jJhffb5WeqC1p5wGziiRxd1jRDsVrLMUWe4aKuU3FUnZTdS7aocXvRTL7z1DbTALCyYYx6A28iMZH3sEwd",
  "key12": "3SbA3Koab82YMPqxa69XM2bzS5kuPH7FQZ7X5FbpHCzkrE7jB1TiRv7CHHLz8nDgjSmgC2fSbPfUPufWs1vTcMtX",
  "key13": "YQash2xayapcFp6MzC1bug31PEJ1Pmy2JBZr5K3VPvvjiMyca3nM4Tj1JoHZRTaGt8wnqR2MG3HGQ671vatmUbT",
  "key14": "2CAjYTBwae8ehFGqcsFs4cmfDP3eceqnookQHXoSkwAKw2xBn2WMSg9a2QAniX4ZurYxNzsEG48QN3PND1KRLyL",
  "key15": "4jTXDa72VvshZtoDqXr2rsP7KvvRbgFZBwVtEjper3GNw6U8Ga3w7wVpPDL3SVhkhoMUwdjGqRba6rwfoqZXnCpL",
  "key16": "EXB5h62bYMyH9LtmiMdNoH9HV3NtrAQskVhtT3qfGjHNgWQydz5Gzifc7pp6pfvbkTXqf6knihMB2CCwyqvrvkr",
  "key17": "2nALVNToxaXSPyZAxrctZjhgqXnzf4oS8MuppEFjY8aiTHon6915RZoTB1DbcCn6YxiK6mfwRdWoyqCB3Pvr6yPR",
  "key18": "278h8nQ3CsZoxqz4MkpGiq8nCT2geSyBibWVmur7cvnuvvJoERVq7QwheRwpUi13JpEqqDHrRrQ4wNbWMqLx3Zyp",
  "key19": "7LRU3o7kG2DH4K3dt8vA9Y32SLrDDFXeTJYmmv6aLaMosJ45XREarj8SWvfSF5FsqpFgMKoqPFESapxs5RyP851",
  "key20": "4GT4nbAVJ6n8Ed7dffvfobFgTFfN39SCqJLs8pmHJ5jERcK9q5XEBsGRrcnTKA4Fr4eYmD2PeFneVo2WcxtEaVvy",
  "key21": "2bL9Lxd837GeXaVP7LGZ4Yq8WAgjZoMyQNQTPau1xxjyE5JyWtVsMv8tmYcqy8UzYqYN7tp76EhuJzUF9WpRgDqC",
  "key22": "2jsFCciLzPPmcrqjHKjjUK3ftaYswqFumnPqcgxFWKfTtSTMoeBxM82qZtmSvgTzyna48gspZNatDTcCtd9eY4Ak",
  "key23": "4sTYaBUVRWv9k6aZmXp22T5ueF92k5TNH3YEkRN92xD8BC66jMp2XmTLVx5fePVr4S4B1ovmG5TG9CCnhM87Usbs",
  "key24": "3peowYgQapwwAo2zVwzJWhVnGy1o1YsJi23Zru26ZjkKK1uVWhFQoa9xdHzn5RnpZ53LtaKddEjJudKwufCpowju",
  "key25": "3ApdudUvDQWn9TCs7bbM27xtwzCMNvBq7dRgRorQxVu2532XvLDxLxvkRMvzZ62E9HZuaqbCUzigG81NskDAnjUN",
  "key26": "3JMbwdNs5N6E1zhqShSGujMFu1yfXyChhtcCJit79sqVYdywK71pXBVwKzXneoEXZP2qh2ot1m7dHxnKjLwKZ8cy",
  "key27": "4K5Y6NrNLvqcyNqpuyDkWsyC2FPpUTmASzGGdb4QMjfH6RYvMPGdBTtvdm7uk2E4WxkuDVDgYfa6SmpiykmnbbGP",
  "key28": "3gYjc8r5GEbJD8DVvdtBgvABBMyQvSee6Dn3ZAfN6zT5mtNiJj9icFnxMaASTGtXeLgiPHmiX4Jpn52XMsNjSnTP"
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
