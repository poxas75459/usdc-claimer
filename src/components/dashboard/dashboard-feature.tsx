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
    "3CSgJLW5Rx2HgCfeTGn2zAUAEbxPKJyWSvcVVSFbYKD8EgCZxCeT7X32REV4n2sEgnTwiJfhbYm8VMU4PAg6mmUL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5LjVJaJuJ5gfeiwBjuAm8xp3fYMUsEkfvHY5oKiYikJN6prYP1ZHJUW1peK76sR3sjWx7iGYYH17aeRu4Rd268EE",
  "key1": "LEtVU743EPhowkDoQuzkGdmSTcWcgkUEcx6n5Lxz4Hw1H4zGH1k8SBJUosg5srPhDVcnnhnevwM41MwMcmx1bcf",
  "key2": "5rfN9nitXC7rSHNThT4Bg7LuR6cgiZKeew853CYusCDDh13RVihXCbvLPZZrLjjsQXFpqgKrsp5i9ALVVokFbRrS",
  "key3": "3A8EpSALANESVTRGyPdPg6EdJPUqJfmjvXftZWQ1vcVeYentMYAS8sXBiHw6DwpEdKVkt7qVAfdhjisVURmDbCEN",
  "key4": "9V5TRmQtSwcyWNfn7Rmb6qkMRux3Nj2VP8D27R1bZbv8GBBVJPzQuuJdkhwrUS4qDEYtuTNKSHXvMVAvyJPGg5v",
  "key5": "5BEM7ZgnVcCjNvJwCZjoAVaZoN4CkyCUzf8oys7E3VeMVDwqFMM147RQDd8GN426as29ThCSvNPkRda5W5j4Fkua",
  "key6": "gYipW4g2iTuUgdKvNva4f49uQDsocY9NLuT8MmjgkR7iKGMGwapafYiatUNmqPsoPYSCg7nXKLvvG33xMBn9fga",
  "key7": "3QFQvtgRG1Ro6KMN5RskvdhPhv7A9PKwgKFsvN4527ZihbK4so58vcfjMRZdzUTpxrRnyEJtPmoQ5thjaxvme2Us",
  "key8": "FAdGdBu1stoqQ9VsnZdCbLqDbhbdhmVNciStUNQsR5UsqLavQY91LcdE2vMJjJCGn4yXiyTy3VjozwB9jwQPZRd",
  "key9": "4ZcgQY3E9PbqkTCXUkzgPpdXj9mCdBvp5UgL98YSwViyi9ZuWmZwbz8oD5UbDvrWdibaDa6cEH29AFPffusAGjjy",
  "key10": "3zPAY9FZ1jTnszTSZMLbRc5osRFMsDQ3sw8F3v5HEgXVqYNbEDTwrR5Wcivr9MNiJt6ic2aqzeEkhJbMAXtejiPN",
  "key11": "3nxbQSRnzUwm7qAL1GFEAeqRLk5rdgBUVmFs7wddyspkaj9F2LZ3LLT1a7QBx93SMxQXqLSfQefGZBHndAYazdMX",
  "key12": "3SYtpaFKMavGHTpu7E3EChiWbPQJ2XUwoWvbhqft7s3UZuUaaoRNkPY7MXDXG2jvADdzYYywxNp2MSNEvmgxZAt8",
  "key13": "25yXzCVFgbXF48gmizesWD62pXgM5PtoyjetU2ug3cD3niis8MFT6EWKnmYmh5UhugtarYT4x7LLD2oakD8dGH91",
  "key14": "4CuruysDtr9fi8eWPfyuwpr4ixkSYc7MQ8BjsmWhHUbs3iahtpU5k1eQRK7dUNPSaktfeT4jz1yCTL4E3nsYsEYi",
  "key15": "gKh4GXvMATdNJ3yxdwpyivaAap9sqwYBGhG8BJ4a12ZgNbpqsXcsAMGzKVZthJH1RBHPyHNxVxm4rhnbK3Ecbjh",
  "key16": "46xUNSV3psUsxTuaqZLqub3rPpkP67kKPFYZYdu7bHvt3Cp5XUowHt3HDvkwqPqqPeQHdNX4pkYCjPriWpBiV6y4",
  "key17": "3RgC46pekfi5bxwk27oq19SQku7afHoYuozizyjnX9uYTE1oLi7Z1wrsbNfMgiZahrHsS3eaq1Vx6AGpF4VNt2T",
  "key18": "4BEVkK6ud84Q5DStihAe5xxhpaRYZ3CBR1acHMoJKTcxFHwns8BLSdE3aUsqQRUjZCyo54m3PoMjigpMWDgom8Bt",
  "key19": "5KsaitFMJ3YoE2X5GeRKa1tTNjoSrEiDWnCpiHCgnWJtAPs3ESEyCAZRF9xohWnyokRzDk7kXHg9cKftQvW4H99h",
  "key20": "qp9af2vPQMX4MiFHyhU9Hpb1nPyJRjV1xuG3Hbd3Bgxh7c48DhEfCz4Zvw7y7nQzGYF72SMk6aM7usWCfNfSnm4",
  "key21": "nCZcC8YcYPczGT85TgcmPG6LmyqwpQBLanX3Gy3NTaCARsWke99XB1zhsa4btAVZmVgSE476EY6hfPJcXJ8AwZs",
  "key22": "5GkmAJLN5p6k3WEj2X4HVpZoG453P24qGwkEPcPr1KzrEeHcpgKRbKupK9y8Pf9e5NorytBDXkd5k5gGwA2oi5rX",
  "key23": "4LtVvJx3H3QAn5f1egoq9Hs2fBtmFNgCFh5W5VXfNXD8fVhXbTuQ4re9LmkeKKzwvwdyLwE31eZhZYVrqy5zbBvL",
  "key24": "3zcBSkEGRDoxG5s5N25XuEjhxhqkyyXbzMKqNzQvmXRUheUeZEuMh54uyhzCWtfuQrp8rX4K4VSj8rM9CznZFTHb",
  "key25": "4bMBzcWojput872i2qA2UpTBYyjNN6q5Cy8pYSscc9xbgHoEojAdji6Dow6ur9QxzCSexMgCK8oeMgZ45p8H4Wjm",
  "key26": "2Jk1J96F7y9kD836y5FKfcEYvqLxzJwADMWyySgQSER47nSg8iesmFJSjS7fL1aDMudoQG33ZWUVBQtivXMetsnv",
  "key27": "2dn9ETqHd37xLHeJ7XVtBgqy8fT9A25jf49xEwfFxsXjci8d9v5WonrJnJgigPU6z7GbzHmY1nUwS9fv2DuTzmb2",
  "key28": "49YYUtFLAmkNocb8dV8twbpnii5Mwf5qL9Vrr9RF8EVtpaAiUxhsr9PBEVgiagiVkJ7vRFeNAWJgEznHQwPXV9bL",
  "key29": "2zTTRppEUP8AeCxFmb4knecNPdBGFQufxbsxYtPzBxYrUp59TM5FhvvSktR8X7tyCBVV1MKPv4zcvz3TdRJ5LGc3"
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
