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
    "5jd8VpDmEJ9bf9K3kx1QqhpwuXrvF4wHzmBJGHmwhrsxuGEyAhx4iRAyfmFmoJUGBrpcRkm9NKYDX1mHq5pmTvb5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2mBD36GvfRVQWUq7Uo2veuDUzARgaKQwGXBheB1xhQZwdWFSWBzWfJf8j1ofRuK15t6qT6WNFrWeuFndLxhG3df2",
  "key1": "5zhqVsz9VVzv9Gwme5ygZX5JXEgJUS8tsSGDpMjC4RSEnyGB1MwXH7913pYHJUVjgAqbDeUhkiNuX12yhFstCsqn",
  "key2": "2oVMhJH1v7Ugsbeq3o4n9xnySd3X25nQAR2Yj1vTKq23HoaJw8eiveK4Tg1K1sQN1ZoNUN2JF2HF2HMFJaNkk1gf",
  "key3": "22a3CfkYAiu4dWGSutJ9QbrBYbKPEMGSywXtpjVyEvayppQqpQBZXCo9gBLKwrfE82fExT5QXJErAfooatNRY9o9",
  "key4": "3vbHci9YTcphZvrtdzX2EC8zFf9atnNTnkMP9emjGZv3HWi61ZfxfxCgmgWFHhGWiZ9289pF2pB6Mz3HcZypwQTu",
  "key5": "2nGWHJ4AqqjKXApDuDDZg4WYrBj5pyokDkE3aqwvKexREsotUWuzoHmrFrA7pa4pHvdyVHB3M2N3L3qxLH1vMBTX",
  "key6": "3e266Jyyx1JVtyDXHWxyUCLW57f3T5UT7ahpYkZ2h3pttYVqkcUfQubYhqLNkADHvbxyxYc1AhjYKaoGUqTovDLq",
  "key7": "3zRbfMA9aVGPcH4yLsmukKTQ265GuyL7sKe1XRRpXaMEmfEFkGiZtrNDcs92xYWZdWpfpXVY2yN4AZMqBR6933PL",
  "key8": "4j89Htr1KW1ZQwaZChMDUU2NMCnGcuapGDRnQphfxcE4kmgbVXrCayndEMBWUXESLospfsXnR8SDbh2zJy8RqefE",
  "key9": "3r5v9vQhdTD7YoNq19J6Exw6Jzs6aiSBB7bGFzb4XWKs4L2bXWuCM1rWmSDx4egaU4LqCJooBmsfShKnvpBshoia",
  "key10": "3pVGg9Jdry5jNyx56SwCGvte7MkB4QvNGX6y69Gr2moBJ9oy4CTp5jUUGNjx6wdh8MSa8nUvqL1C5F4V8ZD5rHk",
  "key11": "2qPZqVEFahzQzU9PJzUB4uLNK1DZU3ar4umTWzWS4ULhxXnscnUHAT2EHZoF7hF9YCkUvph9GCKkspWYrt6Mx3S3",
  "key12": "5xjQTszEweZQqx3arQqYB8CY5WzsN5nbHAodjaS9YXgdxfK8XM6KgB1wwSDfN6TnSLbFKYq97Z81NX9fWCFXJE7U",
  "key13": "5paLMsknknrNmRx4LeMB4ihtfs1RuNFVfttEPa2LME21LLEoNFWypdsj7C3f3jyyoL3R8d1p6D7u96y9gRruW9Ra",
  "key14": "4bms51sfUVWho8PPTxRCkii8ZNZCqT88WP9hSbGYPNAEpZRYc3j7wpXdLtWiK2znCeWqLKAXehtA7mPtt4QifmYc",
  "key15": "3mvg5Q8kQKy1KSG2gzz9C6mPAVm2CsucJHPfgWbG6DY285uAAgmMfywJo2NJR8Srv57hWtEvHEbDQbmysZFBFsHD",
  "key16": "25k1dH6cwHr76N1RNB7DFoxJn22ieXNbbM5Dq6yPuEhid84mJyYCgykyPqbet1pit298h3RQgpwdi3dEyqociaQ5",
  "key17": "3BHjPevLtpc9QL3ChJmp1QBFaLcHkHpMWZUFvcbxuuiyXJiLPQQM3qdBrjThtPcQ1ScHE9T1wJCY5iuY73z1G5Cy",
  "key18": "2uL3ANtzQZaPS815CJ5FAjRP5xTd9Zo4Y2G8vKNLzosXftQE6BzF79cTorFarh6vKaeMutYE47VothvtysXM97nK",
  "key19": "26dvQspdd9W4sG7ULxbk6dd8v8aPhDuCHZgwyXwBD9twhrdmXcVPLCAFZqkZyPEKTbJVm3vcc73vDd1mwc5Rvb4P",
  "key20": "4zySasCoP8wEJ2JrwNYrAdRTRmuzZuPHK2gfDcHKvRsC2Se7MXV7xMxFD1tLqdK7yXpiiA7NY2VpXF5ZN2yBJxat",
  "key21": "55QeFzXCjRRvRCMDEkcR1SD2iwJm3B2HCvMje1w24tKqH2BSx4pRrwyxGt2bK322s3GDXvXogMx2r8sWNBx27S4Y",
  "key22": "5A39dzXH73FNvRL569LjqqDS3CHREVpQWAqsa3p9BuNxxi3PTWTgZDSQVtohaMnBTnJqKFpz9MBMDkXiUc55SmGS",
  "key23": "3vdnNHLXexKQScatJdfYtX7s8pUXypxoDbeWLfYNubwrh7wcxdyV1AzucamB91nw3Z2zQTFPEDFeGrYRipJtkMyE",
  "key24": "3JLK25n8yqE86QXrEEiinnZ4vqPYL2r5LtgrPfJSoHW41NUocd5JjbqSkWj4x51cZ6uH5XoN6AqaDJCH3nKtBtDZ",
  "key25": "5gg6pTuWkwkEoaZRBiinWzEmM7p5ZEvPnJMWxSaqY1haku5ndRjwt45HTukHswqVTStXxzTCGpmDnZB5arXP281j",
  "key26": "DM3sdd2fNX6n2YXqT4HpHuccfZ6Q4499cU5y2oeeGp3MoFVQojfJykZ6URQFD9hcndrm5uyz61qHwHHmqPsW89c",
  "key27": "3dztYVvXiGdHZRiNJbDHymnB9eQcD5AGYMX667N1PTaMLvvWyge5Y1HVarDbry9sVbBidrryEadgGLY8GFjyFPnW",
  "key28": "22ysfnXfMmTLX64M62XccuNXeepBqjk7bGprEh5hUqwrHY915LrUf1kbHCh3HUd8VQmjGuwC3yy9a5y2i2wNo77g",
  "key29": "Cb3avmzxXgSVaQTn4S7eptz13LzNZWyYmon2QbJDo3dVnUBNsGCq1LWArrNMjSfGBu4r3gc3aZN1U3antKLStCt",
  "key30": "45SMb7pDceXMSKmGuxcJe2AJnbHu6hgpScajyjrBR1kdp5oMB8wHXBEEGvpDBGe51tGzLssvAPNLpdNCDUDAddYu",
  "key31": "JpSdmhLegyr9Lhh3ohY8HvmKadoRwqsRh93X424AgSi72HTRbWSBjsqo44LrRXntyh2weGMsdNNCpEDF5G9fPRA",
  "key32": "czG6QcPGYVdkSCmqUWa2H8d5RxpV34Ctpff1UEqGEhLVwE1rp3vk3gVtPhuc52FFnEEaqdS5nTde24LVwfhABgo",
  "key33": "4ugoRaR5giuXeWo2sVQuGQPH7oe58mbR2CLire1FCYz81NnstNKwT8qzCnXnKYUo8wmBhVqEYmizgoLGz9UWJViL",
  "key34": "5jcnqa8QXExN16DjHBH919fPgd5EpFttC5jQ6xAZnvFkcaqENYHkrvHPKdLvJ4BF8dDjHmacj19jGfjQ5LzufdBU",
  "key35": "47YoEcapKLmrNDGYBA7g1uLwwQkc6HcrrrRaBooREFxwFRdqCsZSmvVRbvc9WPNqrT39zo17SjenPJSwXPid8eF2",
  "key36": "5tKYxz6oncMfd8aEhLWT4ySXpXrPAyrtMHKb4ifyq1Eo1ZGbs1yWuR7dhwDgJXXmFhJapbJtJsJm3wTkN7W65qij",
  "key37": "5SpucFxdVeoBMfvZVpfe3pwXeJV1FNFhEDRaaoE9e8PGtdSYHSVXg4rhTByuNTrK4RmhjnPL8gahHGHaNsLdkBn1",
  "key38": "4MajehaebRSzRt3JSZH8duTPhoESfxNqfcb79DC69LbkBjaqTMN5UHqfAMWJx5YBNipzNFtWztdKK6GfmbWxytWD",
  "key39": "2exrb7M3V7F8f7kJxzfuwgWVpRUSHxk9Y6LMQGL5Y64edembQDhVErWtTy5tHpMSZ6wAxb6QBXscgh7MqfiFreM9",
  "key40": "39CtJ7P4GLosjzKANCwAEkzDV9WfQZEDEFSLxkT8T46heUQUgS7ufTyLUsurqMypAPPVkJbzFhgEDGxcmbgG8tcP",
  "key41": "sqtv8CtVDV9kFA2mohuF78SkddF3qrGZMMk5xg9UTg4cCSxf3mEKWVyiJTirvEmtv6kYQnWAMpnWAs98Nvyt9pd",
  "key42": "3j7ouNg33GV8wfab7WNTawWzUSTKn5RirLG5R1fF4CALtWF5SqHhBwBet4kmX3xXfvChVnDgSMeRiDrb9oV5VyrN"
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
