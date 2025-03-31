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
    "4g3fWWmAdTVf1MRbmJwouhBz9digYshxJHvYKmHHzHTTRBET2Xm3E4EYnTi3CEPbzB1p4KQRLsfcp3QBGr76ECad"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3oAjUJHmiDapqTYGwBNcTBMVpi13vzGZBtcwhDYzvsbBHryg7hX7sJzsub5P2DiGkXEJoPHadDN2BD9UztvPe6dr",
  "key1": "414yMNecQn6y4fYRi6SX2KE2XDD6FzgHkKEUDbRawuYUuuazb44xHETbDfoxCxBZfTSAEC73vpRQMFbjTYZALGzn",
  "key2": "3hX5MuqxvRwKhYsFBN3Zymc2TrXqKyJBWdQVJ6twrJqC3EdG6RwrdbrNEPNfaDutGhs95HqdZGKhP7gVnEiB4xUT",
  "key3": "26kuEKYToXVC3eKgpkQrZN9CpFSxwNnrWHToTMgrwohJYNRTxwgtuSvru3i44f1VMh9rUogTXiLpKhZ5KRke1rph",
  "key4": "59R12hjMcG3kK6awrMHqTncT1HkV3P2Kx16tFH1Thoh5yST5iyqNEWHRskanJfVvYZdmCHz9hmUit4yqKY7zJB5g",
  "key5": "4Vcc4b5kC3hKVN53jo9g9CcxgDpmZ1251oni6uSTiMYy5KAKw6Urzdcjg8zfFZF7636rHzUyuPcZ2f4jtVbFwwtQ",
  "key6": "3FqZv2ufjPuEMxqEd1UjgnCHZbYUe1tse65gf91QMZcj7gFdPqmT67yExxMp3HmKqvG4i5wvbfahsphhqM7zpZ38",
  "key7": "2d45NGaKea4wYRFJioMZGUUzWn7uERXhmbDcUFahkWcY6hdQr3h4bjYzGxegZopsPsQueGP8a6XqxKGCPjU8BhAz",
  "key8": "4bYrsamyaMGWPZePWG6NFTP2uyfnHxX98H82gd7pxw4iueXxzepiA8a2QNbsfMhPaBgKDxxYX1LG5PbJ1q3HNjEk",
  "key9": "41owbA6WuGFhdFuD3YvdVhECCs5qTnWjotTvgC4wXP7nkp7v8cEv43AAio9AZgMLAFcyjDxh6mjbPJAsPR7Ctkf3",
  "key10": "357uVyNMa66TNcr6bWUDUqmnoHQXumqtzjWwUcuHhSHeu8XgwunQnWyuuqD6bfv1uqeEraG3WUunPKefiHxu2kyb",
  "key11": "37u2ho62GAu568AKVRXbR4UGUnm7nQWhNdfaVnW22A3Lwv3Bp3X5tKpeLr24dcmAFVJoDeo3wR9meyLen1csr2Nc",
  "key12": "7DNkhFSMrPW6F9pLBMzBtBtq2Sip7XepFR2bc8g3BJfJGmCWyreLK7byLE9wfUeNeaRwwDoPPubdjGh995CJsMQ",
  "key13": "4VnxnAAPM7EYct6KozAr9Vf3R8rn1r9SFBQWkDWZBb5XLXSxMWPPwS5E87RNtYztoAhnb4xakSeFegJruA1BDLB4",
  "key14": "2xW2QmvncZHFj8QCxcAbU8u4Q56nkvqXcMTtTPq4rZs6fQve4zTNCohxA5QsL7tAZ54mv2BUQQ21vcEP4iLhmucA",
  "key15": "4sFHFA2TWrd4j5FFHFA7tGWfMH8svF53bPwNC51VSNLBN8pZXaz569UynEUgFDvtuCjwr3UqkGAYgrEmLA4dXtph",
  "key16": "5VH7bvwLwpw7G16wuSwKtmwveANgsJvnNXC4iSNkhC9maWhj8HoiT4vnt2yy4Q8xCoQ6Hvq4emMperLf5E6xvZ7F",
  "key17": "5LQhdfs4Diq9QZAwS4ToLbLZn5FDS8dDRTqC1B6Ckg5Qwq3dBWJcKGQMLYUUJhUPRNFwBaYALh9izF9Kh7MTWVXg",
  "key18": "PGKbupnJGNgFVve5NcBBqFrAe3Lkw1RveucDigmps6FG24yYhWD4PT5mZ43Rd8vw3itk164iXKS5XqdseTtnndm",
  "key19": "R2oqUkfwXZC9NS2UPjF1Ujk2nBsYaYU4rJBYDj3RDKVzgL25rvQesHkYCcyjcbwkDQwJnSLDfFbmSsAfe8hr6t4",
  "key20": "5EuTNTfJH3QogyAjBX3NHSjBXgiWJruUPuXTAuSpSdkqZfmuZ4sw4PF8QKPzGEmPQVGFj7D3NL8ACytoqLPz1f4g",
  "key21": "46phrvXBiDRdhZXNxZ18C1pFBpKAhpd9QyxDnxgMQyjEwB74bYPPCcMVs6eRStVhjPCgjUwWJw2UAXt4q1fq62Hs",
  "key22": "45FRDZc3zBbELRSKFKhyoxLnFgep4SPNAHBYziRC2yXfr6UTB9j7BcZJ4b7JH7M2Bie67TWkWLp3FXtjsESWwKQv",
  "key23": "5hpK9swW3WhQJ3Vc12BggenkvZHudisv54rGUhQjGuUZg9zEbnHWDGkxP7dunwWj6mV1MNHEVtiNoCVnHzG27PfB",
  "key24": "4xUL1MVAVSMaNaEaoUZuVhZLoxxGtyJdeSM3ioDfkyfwwP62HGRKfY75edw6knLbuuBx6BMNYrZCoCx4CvaBMkpJ",
  "key25": "kgxbrR6JdfgD7pxfU69dHBRLhfg7LNbpHd7q4wykzAerdNwC8X967W4xYZ3USJoC13YstqBR7GREsdwtJJh97Ww",
  "key26": "428unP1vrrLi2qwJW3fkDrcZjw2CoLJBMKSnmJTfzoX1Znan6xUhNpXh9VJYPaX3XGfQQTMxo4BiXx4YiiLgR6Vr",
  "key27": "2TbASpCn8KLL75nUrsis76tTBzDSTfFRqG8HFZHcqKFFSqW9AAM7Nn4eWc8qESwhciJvqTkS23arE42csEVrV6SX"
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
