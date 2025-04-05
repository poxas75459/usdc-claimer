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
    "37ETbaqCPtHMrzc7soJpYier3jWBk9pNQS1pu3N6h1j1QAoZ5Bqg2JBWJ7V8JTFjnPoAjAtMFr6aD65DV9F554cr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5oE8u6yjRDnygJk9sSXaM2XsnKmPM7EaqFBoKgHTNTg9q6uwDDVyMFkhsMyy6GXJm6RTFCWMtXS6sdqAedt3m45y",
  "key1": "2bk6UPMd1C1uPXatUVmKGJVgaey5YiS76CvawXskhS4vEFuEZNC9uninbMexAEtroSggL5fWTf94aT14P5FP9468",
  "key2": "635sNSwCx7aq57mFEB32EoTuUoMbPNaCZ15YxhBqqgDGRAvjDfWqGgEo3R7p2SRr2m8hQjLwYQiZawowzWusaHsd",
  "key3": "4ArZ1YWFbhbwAbXaxcKFEZgu5gh36axfiSq5AH2N9Amy1yXa53CdAonx7UQCQqko2qGrf4zZYYkmHRGt4JFQuDyy",
  "key4": "2MaN6aaSE4y4jEtHub2XUKptE5VGrogD8sU9sHG4MbePRzpRXr8qLGVerDLWbz2Nq36ixPDX5ktW9FoLc27uJLWJ",
  "key5": "5cmxhr6UwGiQa8Z95g5YLmsRAW9YJQzhyyKStQwKwAGg7HzpY6pJGu3ar1NZ5RvRkAYcPFLqka2ffScNfUGoXHD1",
  "key6": "5pWTVQcdC7a7hYHqyZ8EwKeCU6zT1voCv41Sebjxv7mQsF1AHp1PAxmLR286PNnUWJJrH6LLwvHcxU92AuXQbNm7",
  "key7": "5ck76A3iFpVbfNiFm5ecgwAv1VTae6ppNhPwNF8XkkghGPbipkWQQ9WwJwWNhZiBKaEbW6GYmZijLtGsuuSSddkV",
  "key8": "46tJ8L4mEut6QeGMKNJJLcknBa4xDUryqnTs7bxs1NDtQFfqQC8W4ZkZXrhXb4FmBpRjDE6DWvP1Duyep4ibhDBH",
  "key9": "4YvTeHsocSA5Av54G8D6UZaEucP7kMSG72ptYLHt8QMXJrtzVFBKwrM8ZHPSxmnH3yYaRWha74GEvFTWnfriG33n",
  "key10": "4nJG7odbEzhZpWJTPC5m9Kx3T7M8tAsavg4WNHd3tbU4n1Su7JnfYgxoMkTu84F6du37tGh2PBCNPZvXyCsc8Zyq",
  "key11": "51EtWjE6neAJUj5eMtGUo5nGmAAb93hvmzLJk559nuRrcdSZ8Pz4ExWtSBQHL3F8Bmppmxue1xHvakFtV1JwV8vf",
  "key12": "5cS2fa7WVe6hmXmD3gNTp4pyTnRpLQejCregJe1MDLDun61YnPFKHRzjKBkvbutEPXMBiDCoSFEdUciSAbfJmb8y",
  "key13": "4jnRN2jtwb1snvtPUf1ckUmrJcneXf7GQngxez66mnaP6rdR5x7T7PGvvH9SgMSWjo74yvmvgxUBNv1fwDLPp2x3",
  "key14": "KKEsvJgft7SWGuoaUkTP3tX1LKSrWzNVTNxENmxPEzFPPx5zmeFbnMc6au6LLnPCcJacMxfdQBA5Qzoa4EPUQSX",
  "key15": "2BARJa4X3N7oKyHzj8j3RdA8ewDNeSABZbNaC4QbBbBeoaMfQbfXTJFNDLG1XGkiL3aAy3eZnrqrovWhGwbYaJfD",
  "key16": "3tXz9bJoTfbnt8r3LwfEQP817bs5wxNEs8MsdohYvLYdUfDJrkLnZbieAwcdtfctcguteDH7WnogxjADpHPM4VY9",
  "key17": "7p5K3mKPksQuW9NF1dHMSuPdvouaXVgE98Q9pLBk3USpZ46RrNopW3a5zvZYS68iQE7EzrnEnSCA1z4iGHzNtLG",
  "key18": "2BDKPCqVTbXo9q53tD5LYqCjFpKLGdorEQn7ADGihRS4ezg1tkJ6wQMqrNRUQtXsR2u73okvfUzE4b2Txeps7Hu2",
  "key19": "54dnvsxzPYmCdiEGQoDG64HHtfMa8apKG3ahseD3ihmkyUKjcQDAYyrfaW8mWbMWVCzAdxhqBzpoQc7Ltq445g4u",
  "key20": "2XLKwLLvdACZ63iHcYeCtU1bw8gwzU4R9rPrgpkPsPiZNXbd1yJ5Kk8KZqhhzgudqAf4t5tRLVfdmi4nJNLdwgEj",
  "key21": "4ArEofKwf95MMkqtP2q7nsp6CQRbnsVt5De1Gj9UF8UfZ1H1HdezzT2nN1LRgTjEMfWhQMtBrPzpArtyP73nELDh",
  "key22": "4XnrMvbsWjfoTB235wiTunkXcAD6xEyR4r4WFTMJZQH9gy5Zte5HEKJgGV1xBLBMGMhWnXisqqnGBQik9D64f14e",
  "key23": "3oxd5hmuZDWtfxTBuDiNZS4iWwdtBY3evS3WWQrsKXXFZjziZ4FWuLH2GHvYYLPuFfA4EaGT73ZDUykNq36jJMwA",
  "key24": "3rEywS1bSRcwUwkHXaNeznGizZaau2RFjrLSAbWhgfvQZQxPQcYMaJrmbHuaSuubSdvAk5nwxWjJFCwXNg7oTkJc",
  "key25": "5ouAvLrEURSrLVxZAYuN2vgzfsNMmatnzHESg2Bhh7DK2kFeiYNosgGD8eiaD1iUWdUUuJZPdBb4MvnuPFfQZUNm",
  "key26": "3Lv9uuChwKdLvBYctoskew7m2c33yNCXnTvpjjRGyHtQxfQ19TzUQa4gURA6bFfsLhLs5HTxREXgxAcaLbC7B273",
  "key27": "3QXHtBEMW1rPUQ5sadp9PkHTp11DCcbUbXFpoc9fCZzpDsmTKotFKWuNetFjky1bReSWFZrcx64wU7cLqtpEcfXw",
  "key28": "5dFJvYVoDrQt8ZoKWxKmShXkDovr5PYq8aN24Y8TQAszmDtB8cnhFvsNg3qApmgYeQCsgu7HcuRtQ1L57RumgxYf",
  "key29": "2SBgEJhqrXbPJGhgPmfHZMERFddU5yc19JWfTzWwJTqR5ghftqpKBPhkEYSWxAQrTJRfqDd3kT6sx9ve7BGn3j5F",
  "key30": "2QGLaNg1Au9TdbgRELFG31FaiDk5BvBALiq448JTHCEirJnMjSUZ8KcufUJwiduY6pcGdhU6fPQGbRPC6BpAY3Z7",
  "key31": "5MbiFMbNY1ma5uXZLYsr8LUUAEpAKbeB83y5zv9eRh1uBAFW6Jjbju7P5WhLoPKN4TbsAzJ1hyv2DTQ4iBfgDREs",
  "key32": "mPi41NKnaSRAtC4vijRDt2fiwHVVVAP1wcZoKj2ikSGWvDHa1hTQDGEz7oB8E19n3JKuZFywXb1VS7TRybobGBf",
  "key33": "2LLqQgQhU5EaBGBfjYazYnYMwNHkXs54jEJC1TmS75C79W2BEaXuFuthEPhjvcLdcxB7X3mxKcq4htsMqf15DytL",
  "key34": "oyG495HwjvF9BCCcoxmdTpSiob5i1FnpSLM8gPbvPs2si9e4ABcnNsuwNodE2Xn6BNn3GyRcqXGdHk2MbZjiFZQ",
  "key35": "4BEVjJHRqjFdpzKURzoCU6rkqvvjGBD2LHteSNEoMWG6K4vws4v71SyG4GED4G5EEtaqSYsUsdDetq19kzi6nQco",
  "key36": "23GDwHc5KTV8paBPjMZXjZ5N7xNKH1awrQCRPhSGJCyyHQ5AKWEphVrDGQsa7hFjSm8SteYbiq7fBiEMkm4Lmpcn"
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
