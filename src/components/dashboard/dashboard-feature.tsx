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
    "5xVodGzXvKRZ1ZcrLHtRRXJhyDzZfMnDdn5tJNPHLRV7HZLLBQ1WivYLxTVL4isGFjvnNypXYGvJZqhpwVk2fZ18"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5D1VTc8jbfoeRvbAPi6dTWgoYTFjLWMBcLs8yAXVGQRUmqFn9NXQEuxMQr44HUeYkJVfFq6PaESX78X8AqiHDp8V",
  "key1": "2k5T3JREbR4KiuV73dLS4dBZewH2GrTrGn5P8CWrawKebSGMf66iSbjv2WHHnYsurvn3DQY3YzVv5oJPdxJby2dV",
  "key2": "b2Sd3ghQGE8hmZTYGNRVMTQyh3sgZG5JkPBabXH8AD8n4ChAaFMPD3Dm4TZN7var973Yj3wHNLbixEfJpeseBsw",
  "key3": "ifhGHevzZKo2Lrdj6htAvahJSP6fFjinYtZwngF8pJjH1uJ6gaj8XYymxCdCZ9yUL2CFv4yzT7NBzuJwk3R468u",
  "key4": "66WNbVqbWTSSfVqTHucb1ZwpchSYGeUrPnbuSWYuzcPUCxJyT5ifKEesF4EYiiSycDgYZc37Km5XaaNMhdJmRfCr",
  "key5": "2BsDoQ6Awz47RDNHbteePz58xrnN3eTzt7DALQ2s63McDKWH8qYPa6NGaU2j8LRdwj3vbVegRbBij2bQUNapEUum",
  "key6": "3ceFNNrJR1FVBbHMX1hwDVkQxUPZSh8m6QGhjnZteaKzQ7S3fWpTGpXzrSJJQnH9aJu1ieDqieWMMUT1S27bZuWC",
  "key7": "D6drE5RV3Fj9vrWhqLfT5HXtezvfMma5n2w5gjghW9jsidbyZM2Ykz5KGZ52aBkjvybVXe6kr2RgPPoLcKerqbE",
  "key8": "5h75McT7zm9Eqh59gtopLVgF1JUuv4r6CTbLjm3NPFYKq3oXSngxmf6HGjL2ieouh5Sdjctv68hW8SV2S8LvSrij",
  "key9": "4KtkB7fBc6qVK8E7TyqVXnxt9di12gLAPfp2ipsXWaDmehXkXn1WFRSCEwN2ee8tkwTC2zuQq4dHZ5znsTrmTHUv",
  "key10": "5qVAGcB54XyjyF7LmPXWFBhWfMkP3F2YRDMoWs4po9HfDW3JbHsyyzq5mSZFAHCRt1X5SuJivR8KgrYVvsMv5gFk",
  "key11": "XmDoKVGNdhXBsNEgYoiQ32Y5BBBCzuzDAtFwRQW1KrP4h2jtAjeCZ5p71em7LXzLMU3TDqYdmydmfmu4EV4yY6H",
  "key12": "2HaLPDvGNwaszWUpWo72QfVook17hQGedWfHUBSbPk26a4HA7mEirknjhymiMWtfcZm5cPSaFCyoXC9uSxiKLfKD",
  "key13": "na2NM2sAPHXAn8EB4a8Mvu3Z6tDSLMEDZFkpkVayrobfgN2dvz5Pwky4382aHMtjsUVXR8aBYPVUAFkHsU43XgL",
  "key14": "4uQpiS642NtJoGyv1xGE3aV9WL5zUX6BTERAKLqnpHpcaqZVsEdYY1To83AQPeDyPATrTzxNi4nEkgY2qYCn1JPD",
  "key15": "uykgWdNp4RCR6Uju4tDdG7JxS4J9TuXiVXyEqGX1yfE12C2hyJ3rvM3JKTmePWSafpL7Vm3PasDSRNhYhSSTxuL",
  "key16": "42J2KJrP8J1NRuYUDLjTARyCkRH5tsyPK7FwGVtfx9Mx3yHAha6fX6rd3zcXXYALZVBwWmk1mtNTi74bHD43UriT",
  "key17": "5fi3Y7rPHopYrxy4QCwVYExGUZntRFVQ53wpcmxDShsmgmqGBp32kv1W1g8anPj7Qe2V7rxgJnV2Sv7rB8u8tenU",
  "key18": "4ewJBPdKBF1hMS3yE1bCvHiJ5FNAfwiYcRDYW2KYvmoa6gXX4mTzgcGwUCiSN7CLTSo1MTkrwQ5ULCts2DjhUYqh",
  "key19": "5mfqNdS5xvvjVsSaeu6dDgcAyKbDRDPSLarTynccuWytVbwGKCfDgkXJyLQuYwPbsyMFroTcYMHmxtmBfhtrKHik",
  "key20": "5jLJonon77NtX2q1PxGb7B7hA2E7WKkGGCArH9CYyrsBAPy2siYQkT7TZHjeaSru8V534wDTyfYF1dEUhRjEB16o",
  "key21": "jq2h7uNeHGozFmv9yq7Bq9Mm2SyKUJArvenwRUqLTb6MpYiVsScHwpUv44D1gJdgJpThet6xg4Fs15SQQ3RHFXU",
  "key22": "2kqCEYZ2H4AxYWWEwJPckvLZBVhUujeiuAJopLmk6Sadtb3He1fXABuGE8e8WjoZ5MC7D7Daa1d15Ue8Km57Xfkt",
  "key23": "41yhvDU2L9wGg4QdNTPzQaqWYd9L3fcpKSjchp4mx4JWRWcbHTvsHYDEfqBQKNVvk6U75ruVWoExFudfUwgH2nA2",
  "key24": "65u2vbiWeJVEUg3NDyGMSMvd6xbrYJZy9DBdPjJ78PVri5eztRvVj6AP6HvipKjb5SowDnMfg82RNtTvvy6CL67F",
  "key25": "2qgyifDsJLqENwEksRPhqSeWpQF9dFwpToyMD4Hy9qi4xSbaBCgZCAdsTAKQjD69af1HpLa6TnPDS1YEqZ3WkcPq"
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
