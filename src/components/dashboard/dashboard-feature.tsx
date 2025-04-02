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
    "5r4rFeYSBuh8dQj7WLvHE49JMoJgaq65Yzz4eS9wkr5ZoYPyH2UWdN33qQXTaSqAea8trDUuDxUouJBZTX87GxNd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "TuE7zCn3BuxrRCrVEWyHitWvj9SPU2qCa4VcAKPdqC6SB4rNvm1FYjgimnoHwnjYvkdBE1ocR8JxWqawiNTmZ2S",
  "key1": "5M9jXY2X2eXGw7q1cUm8WUKrviuj2sv76sepmiQzAKmCRm3y4EX7RNB3MMPL24TQiT8Q8CXRkBDansij5PtZcziQ",
  "key2": "3LFSvrpNDi4B5K8q4GxXfG9muCCfFeihVtS4QNf1HeCiVNhw7ZGeR2pGNQkb3feLGdhrzMfueFykoV5ApL28SyTi",
  "key3": "5Ct3JM7fTVMTdw1zUWR49GYbazqHsGgV91SfVLnnvuu2MV8QAUkUdXDSj5wtFQmBtWPcY4PGiWqb6Hs4NaUsirhs",
  "key4": "45QvbNgcZwtB4fhqTXvgbYjifN2ojt5savcJxbN1UD5tKuAXAuiRkavcWXUzP5XE87RQBMPvnGYXgQ7Fag2u1mus",
  "key5": "338Pevv2gLpSPiSEFysyXqagSncdiTF7XRT2k1pTLu9hrApBb6D2HECi7PkUbNax3PcSj6i41aa8Jiqgxg6SGoSM",
  "key6": "4WCs5641CDogwyk2H4PUTkHkocS9PUrwxDgfNQMik1PqTaevVPnU72sRmZ4TRcX7uf6s8q8CcHmU9CMcetMqezyR",
  "key7": "329wojqAM64wvgQ8EAtdPiCEjjz244UhZv1LnyWPsZcGTTKvkyKD4dismgezYkFhyYAgtPWxtUxQwCvXyJXfqt3z",
  "key8": "5p9oc9KGD6KimUn7NmUK7omk67R63r928SUDNSAfAzH9742GxCaGmWtWQBneudkMyrKt1wuzvvE8xkJRtX5RcYTx",
  "key9": "4gC6F8TH2ELFqmvMwSeQkJAa2ydd8sVZXDyFSZTCoQiyvLWvCSkn7y1ZCzxRUJ5hUtrvNn4yeZtCx8k1jFMP2iZ7",
  "key10": "3yL6GHdQvBgVcp1cqXP211niPFAkGCr1pDhuAqHQ7hiD5YWFG7bMsBpuaAxP9vyiMnMYcevtzCYoyjJZTMCyoknX",
  "key11": "29KCMfYGCCCSvXJFa28rHTQbFwCzsWhyzSg5eGvVyPWwBcjAY9dQZgjZHQWGYcE4VnmH8fLmTs5h9CaK5QWYuxYJ",
  "key12": "KrjcbdDEqtatdk3rxwHmMpcVt9ch4XLKPNLzGZFu7JoUqDJAsTuuALsS1NVzSnYkVSRCHhURmJxG4kFcJdNTbRq",
  "key13": "67nJm4cLifQkcL8xgsEo8mkbX5RdwgzQsXvUD29sTegdWMSScqqh22xziTTmATKpmLJxuiaFw7fogQMAhgNvNjnn",
  "key14": "2j8Cco8E5dM9wepDfBj5bcsVdv2WxTYcNkDyQMnoVB2kso9ia6td29X24s758sT87CcBbHkR3YBcb8T7xy7HJMac",
  "key15": "4f27xqfXuZxxSu4gpjrpq47PPja63kRoD9gCg1znxq5UW59bZVA1N5HZRcPJmDe1YPSYeGWgsChAW3xmwcyGZE7L",
  "key16": "eKtTHnTWjyo6LWNMPSo25z6YMxydroQYPiJP48eQrthaKpaaT33suDBJBiiHzhzrMV1dDwWLN72DK3EW88CLsK6",
  "key17": "65wKNDEJQdT9g2cT3Jx3X7r7ceJqtQMrkFWbmnYXPC3nPjBRk4HkT4YQARahXGLtfqTFPn9w14cR2EAJDPAGVRPD",
  "key18": "37xu3YCUBcU25rSVj6F6oh93VPvvKX6Nk9L1MkrmoarAT8ZrmWeQsyjNBLTSBcnpwpyBmon8d6og6WVwW2F9oqf3",
  "key19": "qQZqv3f4qVgKkSvo9dnoKi1WRxdNWwQXLW4aDPaHCd1mnkQyT1Erw6AweDvy2bkCuQVryRmoSrqVEaPjYt5qv4w",
  "key20": "4TcUiSo951zadz2TFXYkKyvKKxkwU7NaMDgUoNwbvnRBmv38bQLfCiXzatC6oWEwSjt5ZDzchJcB3tgideii3RcT",
  "key21": "5pf4SueM3e6dChqP5iZEy3TkwH9M51Au27K2Q3vm79vJvVbuWN767yfbBvc5e2ZZKdoCdDxn8rC6UmS7iPxu3T6F",
  "key22": "NFzP3yFj1yyBxmzRq8pjKkF4pLXBZsmyZsnSN5t2nuEK9mynxKHeveN5J43dpy9ZjEQGnqPBcLBpU7y4rtmMgVV",
  "key23": "5auvrXsyWSQophGhYAPvxTtfdn9CNPttjduz5ZQmcBW5wLzvFYAjk4jr8pxtp2nehcMqe7qcMo1Pd57cKLxKtb3s",
  "key24": "4T4q8RtPTsvFgCi55vMvHMwW2M9cwokXJn8umACz57UxwZabCzm8HGYz8vb6FxZdMZ4X4jXkJZ2aZ8s84HD6f4AF",
  "key25": "2x5ZJJZUGSQYoMAVNZdFSqMJM63D6iZDMAdiswSSoAP4pogGJhxVWwq5JuzGETJZvn9UfYqhcfmz8DZyWYAckLVr",
  "key26": "4MxzGxg4dmyJ4P3D1F3MKZ3hnz2vMHyWtEYDPVkJwJx67iHd9taaae6ZaSURZL6JPtrSZPXMgv3iyXrHV7rKfHag",
  "key27": "44i6xuJQXsHvgD3HCMHQ1fsLdMNT7JtNQhZbKSkEAYWLqGs8D6iGxMSe1PsyUZUfoBDL7GEVCJxf2SyiMBduEboZ",
  "key28": "3aPVDCY4ZizC1fGX5gD7N2P8qACmnME6Ww2GiyqMXYB3GGPEwFhc2b26GbeBMC7DiRruQMRB6KNSiGLFAJZbYZD8",
  "key29": "5KqJasQJuNftXVxoWBqbtnLySutDbVca8chmXD2KJ2i96urziCyVkcViqpZPQ8ZZ8pGzFhh3eb9CaGZ1PgdzJMGJ"
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
