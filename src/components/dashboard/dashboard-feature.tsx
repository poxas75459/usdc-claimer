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
    "3QWtdWW7PBfwBSB2FGmyofVuPYHNawzC4ghTW6W1Q8UgRL5c2wr377oz55CkeKSFMPAghXAfKqbcfxoTZLYDGUbj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2nTJ7UkLBR8Yj3s2y8de8ywLZyXeU1UHCvammG8eXRD2SR78VUb24EFEE2BuE9iqLvX1tK5FfcWCRCfgLz1GPvcV",
  "key1": "XzFXqrpDg1dwVFTMrLtsmLFypvcBerUFCfL7FXqiLjwFqLo6EMketuChJQVFKPyKwYknEFrnzYW2LsACcox6mcw",
  "key2": "ve123fusxcvA3XmHqyWFRBp9CSjh3JkMW7E23rP1yZLGn3eedNCnQmaUEwxGm1JF3LnuEiK4m18jEiLRSpkRDQr",
  "key3": "3dwhf1Txevy6qKHtoXwjZWckxB9AQESK5bKRrW9gCEjgCH4gDmBy3whFy1B2ftD9iseJKrxrVJcKy5hjWXtT3JGo",
  "key4": "rfUhdJWuWJV9f5gRBLL87d3CkihQkwkB5msT8YXM54oQVhRvCPk7yMPQ65oo7dHiNrrUzH1SbnYJBv4qynXBU43",
  "key5": "21VR7QyPU8r3FCz54c2ffq55iziXvabxwaSWrxux3CcHiHL8uDJ4wNQLKHpxKfqxtFqFWBb9gp1muQva1yVbWbn4",
  "key6": "4TdAUokVbWFe8ufVUwjq2adi6HDmRSnCJ6VsjHAJDxDRHkhXf1FuQawjF1hXsojeGJk9qYhfNbhEvRW3gWuEcH3Z",
  "key7": "2VmWRH4Ahe2AkHr9TdSg3nBKPFzXkUiVTYrZ2UDH1ixayGMFSAidfZkgLQzk2fV6syK3oh1qA3RknLwxpj5sgFv8",
  "key8": "4rT24yfN5LPSyVPhYGAdMWxuJSNGe2jNo29yzTm38mfpVpyrtacXktXvL8wwGToHX1DWRQvXQDpM2nA2QDUwBZmT",
  "key9": "SihVfeL89yotpRdSEaWunjRfCbEKsDVKoK7BTraobz21xqQTBxT7gw4p8CLQtHpWEi1kyfBbhwhjVRa3THPK2Rj",
  "key10": "Djd8mnHPHqqCPjDC3UtUfjtXMDeaNgSYgrte9WW7SyFMUbXgjTGnis2iP3FK8SoBqYFoSBpdGdbvMityqdpDSVo",
  "key11": "2Ws9w1hxA54JRvXcuTCPyUvqzSh6nkHtdotWWsNRRQR8KS26qvpnN1meCMYz81JLYMpLp5r5eJVGhbE6Xin3meWy",
  "key12": "4ntVbL1URNnsmtFkxLDSKCuWFvgcy437ER4KyBbLUmSHytJAaGk5BjzwWTZrXAaPmSCfjBjWnjjjKs4Kw9rRyRKE",
  "key13": "2jyBD2j2RCs5rqULTDSH6wzEMwLSP11BVSx3zT3MfHkpE5xW8FLfvUmmtWdacYCchKcmmJgqTuidpVV5Vge8Y7x1",
  "key14": "3ZV8PuonrWhMEmcCemVHF8Q7Pu8gY14xHidnzhN14kXxmub9Z96btJwyJUomKVMfUGkrxQyKzTFUbesC1fpY5sYT",
  "key15": "7S4tuQNrv1a2nQ3d7bgwaB3aFBA1Vn3GzDMUW9B6D7xXgjh76qZ2h7GuNapPpUnBNfDzUmrAUgu8PgUncDo1jow",
  "key16": "2twhqrTAsZhLrXCys4y2YC8sLmLjqrsYPtDibuq6tKfYMtQSZ5TrabcjArXSebMfvGSAyqCP4c9ZkB4nsQjWh4Za",
  "key17": "RqesLjsMTAHs1ng9YXq9eY8fZ6JJUUZQpPNRjnSwexiC1XzHMXxFzsvUr6ip52kqfkeFwjzb1eutdRCAXvUf9Hc",
  "key18": "K6AwbTSsBc7TS1ZvLoZ2fR2v3ymQV4nfPcUyASS2c5aHwRqehouZK6nF1XafdeYyRF9phHKYpZ3NUsmLApr3hnB",
  "key19": "2T28LYggUDzJJVNzyinDAUpyQRoi5jU1d9718nzSScxP4b7DHoCaoMZ2rYvhSrNPbme5psV1K9WDuNGQhFVDwC4G",
  "key20": "5h8L5vMr3BkJo6AHm8eyoYYV1sKdbpw6v19NYUrxo51KrZHuPuNtNsDN5ugDAMfUD7jEsM35GHUGrEx7B8GSn5RQ",
  "key21": "5qP1TmRKiFrDtfR3nn4D6ZEH5iaSWTibT8EXL5uy1PBBS2rtjKZqrzbq4XVmTonZvg8FG8MoBf4Avoo41iuaBhjW",
  "key22": "32T9RDCmpsuLiEcrFHgN9Ga7MUz7wZBgnNMBRtDmdKknJ2PUwq7hYiHRvPtg1M58CEVazT58SfvczHbDpUeUocWU",
  "key23": "45382yHvumbUT1H3NYzP5YgCdSsHkQG4xLPUZH4v9tWTyPFSHac4ZsTmdMqXvo7JdQgx1kWMDvCfoy6KDQL2YoKZ",
  "key24": "4SdPUXPcHeFdounACE43RUogRgjZT2bPKb3xn2E5nUw4efxNdWSAG9RcHpkyXFfzM4jNBETpbujZBw5hdPFFQkFU",
  "key25": "62DDEjaNhPRYqjsq2fuWR2M3eBKQPGycE2Cj9DX3N4BXJvDt4W9kxk6QY5seWp8MgPiwWMpZrhCpPENNXJPLC8bg",
  "key26": "4vgE8rrDiKNXpsTQ7MnH4GYNQDqDd5ZBDD7fMp5GmhAajtYDXg65a9vR96hYHjTE6LDBjT7vfvW9aKWcXM4fgc5W",
  "key27": "2557EppZoa7QSxrs97tg6yCz4R2gBvwxVoiwKMrwbL53dt2sbY443CZ3EPF6BWGQ2P86tj8o3aUvmHjTutDD9Fyu",
  "key28": "4Fb7EPAe5KdJWGfJFYzjxLS7y34yPkfLjhAFTEg8NEbcY5sdwmwGbvDj2bKvLHsqiHsYxDb9xaVJCRxi2ncPXxdj",
  "key29": "4zuaXV3LsHwBt7TG5GefZMyG9R4WU9ZTGJLMzgz8AQW92LVuLM5UH5aH9sQbQqUELSoSdWpKuYpaa1DfktJbqEXY",
  "key30": "3Ee7nWssuH8BersgoDoxqHhKqQQyyyotyuDtq5QsUX1y47G5dX97m89d4Jr5haY4uAmbZoQoto3CNTrp352kshnh",
  "key31": "4ow4porcutBFaeKnGFcxk4PcwfmuTnvxVxTk4sRjsLBnvhPxkEoxY2Tv5bk1UDtKy2dHweXsWvY5nAyw188jddW8",
  "key32": "2ZDhEDdwi3Yov9U1LrKkYoid5qiNFyJmXjbGhpzHhhcGWzNcbidHLF919DQMzMvV1G2Br1GfJ3atBZrf5J1qKMm2"
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
