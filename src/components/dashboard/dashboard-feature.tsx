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
    "23J9izvdAvEoK6qup41E26qUfoxJmpY4r2CJNRXtNRPR31CV6EHMsEc2Q8fkRZXZ5sATnhdjG9t4vNgFYPRnqXKu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5z8q5Ag1UvmhAabwqsYC3mW8iFM3NEbn9RMMomgRVbx5hMo55SActaT51EAS48ywRypCyqvyP6vYos6q1KwPkCEW",
  "key1": "5amvGjstNSfo3egzHwEQVXRExNLi7H4RJqkqkRzs1RbvRgcpZYyqd3owqFqDxyyhaEK8DYPfQUFWcJbrAV9K416F",
  "key2": "5fsr2sdojrqvUonBXqNMEjvEP2K7xxvcfi347m8UUxS5nZuQKuAHAxm29omWLStWk8o4owXjzD7xtt3LrSP5kFQA",
  "key3": "3hgD3gDoVyDDsjajfqmXT3RtmqA6tQyAmXSE3Kz6qGBMs7qgegXJEFrsVGtFQqFAQEtoTxLo4hz77Awir7No7JMc",
  "key4": "ub7MVa2sfqkSp83WbpGd59gQ93PE7n5w48sob2BixF3YzXrWcz67PWqqjdFK1HnzxeHyDgi8vFKW3yQ8Gsvmijp",
  "key5": "3D37mVh4v8AJERk6rRvC6MSeFrkWtU33pS2tgFhFthb3cZhcKoQxq5VAgsmsMUzXoRRLNWrv918h5FKnmJhLzjCw",
  "key6": "4Zm7LQTy8QSZyxXmpF9oqNMct6HYZG6Myn8dxsnZ7BsCwK9RSLKy8uiNYarRD6TfHnJZcey8Six3p82JH58EFUfE",
  "key7": "5SqEkg63MTqi9YbgsH4jMnbuSgPZyAJ3U9m2z8yquMB82Uzjf5MauQNKPb6oxLFTawsdYqymndikoJRFEnuNtsoe",
  "key8": "QxjtCfvh7NVMruqM4SXarp3W4uNxuUSbDkDBNCXLtvvgNaVUPtXZkDTv8vy9hspJwHn6korR2PkvavtK6uqsXwM",
  "key9": "4tn9pmtJe2rPw3mrgpQY7q2tbkxaV1c4NuKFLuMMReHCD1BRPJPGHgYWKe1PFdJE9h53dxqGVNL1yE4zTQET7thT",
  "key10": "3SUF2oKyZjrsANeVrHkak33pD1tSPFHrPtfCoNECTRZPTGJeyfyqxHa7RFbJESV8VrCcWDrCHa8UGBSGW75zrFK3",
  "key11": "c6KbJDrwXD6Ci6BwLYFPM3fax9Vh3nB8h5JXAyf9ZBmyZr5giwrAoSv2pSg23NBytZTXDL3ge9GcPZGDR8PV9Ek",
  "key12": "4QtU81AGXUuztA4n7GLL5TSfbnGvCmbYLV59LjaxTWMRxojDxLfYagFAJW6q74HjJcdekXBaVmeecjaJUkGbYmSp",
  "key13": "5unhqRbMLn7DuCqtPb73kdAEpJiQZNqcgx1556LyFuvfs3XrW1Bu123R9914eKTca83bqnqriB6xxATGz7XJS414",
  "key14": "31gwgEvBQxSESRCkkTTzZyVfLLa4MLjmD4ZvcxjX4pXhtFjv3G9c3XcuSFCBv3EVNQMcaJwwfeEY2uN18o9wSSb2",
  "key15": "wzqWFHD8grhYJRqBF7aKdoa6s8HsHwVebNVAncmMgo2Bgc3BH6cgN8sK9BQdgXN2bf28A5ibtZhPybkfbLgkwh5",
  "key16": "4szDpRak5WUK4sdn9HBTuAUhepxJXL4Cs73Wg7NeUvnMwdJq4fdHye5aqrGEBCqeWcsa73QaTjvDT8Yy9aAn7NNZ",
  "key17": "4s4p9TeJCxMuAkBKrnhuDxu2zNiYmyJHAgT3dFeCKoqD39mgemeQcGq1PHBKTA2tQnDHVArdXh3oMhg1rH6fRFVs",
  "key18": "3qLE4XK9EQPXhd8K7eE1LsVgjEoR3Rsy5qd4cY98G1XFFiv73GB8EKZv8iKnAyqBWTMXboejrq8pLzoUf3pJhAPE",
  "key19": "2Fo7hL2ZX9WhbPZ4PShpSgbNcduLCV1Rdkqrz6Mu5eaNjZexDDDavd9Yi1PKyvnBvsJSi4Lp6ZzxmV93sCC2KBR9",
  "key20": "4vAhDV2bDaRTbEhUdwhSsZPgJYGGN89m7ftss6jFJPsowwstcZ3N9yzsqRoAtYUfjEvh1hMhTY3FGcNsuLoyz8Aj",
  "key21": "4NzzvRmHehautTdd4aREho6RLViWB1Q3QLaCZPfQHxKcfxy772oMFe3BfmbN26e9Sak7fWQBD6BiEzcio85XAbNn",
  "key22": "5BBPc3UVXScHtGRaLAurq8df2cr1FDVzyegcx5HBNGT5hyaQSqAowKpFWP86gxkdqw9eacds2qCDyp3TS3jYtFgU",
  "key23": "TjdFNMhWqYLX1jD9NMeafcstzEfuXzEv9zw3YZdjXuXv5uP6rX9vZ8NWty4MGGfF3ouTPC3QnjF9MuhzkvKGUXA",
  "key24": "3Xrohuv2dHBrz7KubgGwVe3gbzX93yxGKN6YbznHe5mpSAadBeDMW4saH4uuec1piVmtULFsm87T26LwrWdLoogz",
  "key25": "3bR7GEscnA2xUfqWg1w2nnMvtwmu6shMan26gLjHhYm9HTDnwsjLqWrNDRaC6EeQyFc79CHbRbxTJaFMveR67Zi7"
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
