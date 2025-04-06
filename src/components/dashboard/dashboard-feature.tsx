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
    "5gfHfsZNAY5cfi6b9mktSTw1HKZPkZoS2zxYJgXcpTAg3Ce7yXYgvBrMcdH7tZMn3EfoXXhMtf6GYGK5s6EcLFso"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4rWSwdwcBdEdh79U1BN2WdWWYLXFR3VEpdFEUoat9fy55R4wYEUBj9kCd8g2dWTsyNMHFUkt7TH6LVynTL9aknLu",
  "key1": "5YG7KaKiy3hVyUwXaa7KNYpcYB3LtLgqRfQbUkDWE5TGVgfsnj8WjZSySzddpgNKACjTmFVmgoAHeD1ks7TsfXDr",
  "key2": "5ThmaT5su8EZDwip1bvZQrQ4K2r7WVPA9eTC7L4bT6XwdQUteKxXuqisQ7Zgt6X3rXT8FXmWhLyf42TYUddPhTn3",
  "key3": "54k2q6iqG6rS967gJUtWYQ5Gji7KpTMCiPkkYc9a7D6cNx4SAMKAZfZZLi66gfv7VJhC2vh34URHyEdF3qovFc3o",
  "key4": "48J8Xvxe8jCLjKBbRhPrSXceYds916AYketbFRWgsAxiTwobriPEqHxhzKCYAg11Eycg6FGicFDDgswCRvW4fJCA",
  "key5": "4rHfSvhATdnGsdLMLFh3RZQAXQ6MaB9ciXHeXg3PUvsL2oWLd8hrDuQDAYDWwUG2A54XCdQtSwi6cr8xHKRsg1bz",
  "key6": "4LP8WMeRTuyFXBpWy1Jy6oNzPypMii9a2nZdaMFAGoS9wuRtA4zQfTYKu1Hbg6oodBiceCxPFkMV5vfqMLooNQgw",
  "key7": "41bgci3YyTNChHHSZn4kxFZTU9MJLbXFHbkr1nxJbwXmhFRH26WNc5kX9QBaEwEJx7BZMf6T4fUMEHfPiWvwqoTL",
  "key8": "2J8wzF4ZvFyv3jMhboPMfyD8JdJuBNCLb2iqgTaSGtYGpKhtztHEurT3xc19UZAyUDfJegHnszfRToLngU1A46jD",
  "key9": "3xeDWBH6Z92BNiPP7d2Je424tJYTLKZZgb7JaQ942vpjTgtaYNLXXmqa6yMHDvkHn73HfJnxdW8RuHGFiyrHWC2Z",
  "key10": "eU8SqiJC14tGKoejd1UdgDBpn81f8snzBzCy4d9qnoYsRJ3pXzAksStsPfZHnbMMemp4c8tFsVPJ9TDUCxDCRz4",
  "key11": "3bChcuw9M4twqmEprMcMrjSnFo92hbuCMuRKbsfG73kfL2ZpP8bAxsZk2AaMVYbfwtQvs75ZAKLQfVApXV7KsTs",
  "key12": "125xnCksVk5SYK9LQpWrbysFzsnGEtZF8Njx2DgEf1ZwxiKTXCeYtaHhVk4KMaAAsZTCcHKwwQkscQVqRwfgPdez",
  "key13": "5To4CapQD9V5Xepj41YDJZV1UxDsbiEnT7a6hfuuGgQjpMEzGgBYNVKr9e2mMRYPCsqu6X1gZtkWxNb9NATqrUtG",
  "key14": "2JLHGB5DQvQXSWWXyGo67mYAirfk6Ax2qa5aeJxCrPugQfGYSj4bYuL3YjgYJdZK7HPx6WXXzUmQccd9dRYKtJZD",
  "key15": "3pyEMcTFUfbxYEETVPAaEeYEWM8arPGSzfTEik6kBZag5qFaKoWDpc8TtmveaobSYS7nMs5apokKq2gFBz6L7fpk",
  "key16": "4RY2vBWbQQzxkyP55nE7p6g349ni7d57TBKmDfTWQ4HzVeWGfRNbAUQYdAY6j4bdaf4fseULsBqD7AheHu8WQWJs",
  "key17": "3RjYtw3c1iZiXvMZwynWNUnmNd91Uv2Me2WzBfu1JGPpzdvPN6PBm8PAh1NHd2WCenYnmVoFusxMXDdSnyPo1oBV",
  "key18": "3HKDuSgpXH7beLJp9EtNnSfXXq7QErbnAGAkahEYgo6KcxGYQzUyE2ZNyG9ai4Lm41N1VY6tSY5m3eDenSjJxbhW",
  "key19": "65KxDAuN9ZKf19H522WZnpSiqhcNAA7w6Hkriw7hJuVXtCFkjWdcyk4d5hWEZkmaEfZxpLbopR7Ez3dXvrCBtef4",
  "key20": "3YBPoGt2N6QvgFKWMEQH6bitezChqEnfVbyMWTSC2CxwE6uUbnVBwJFPW3KVdEVFY8zZmnESfTVfkpjHLx4x6Epj",
  "key21": "v9jei5deEKbYQgwza9PsMx1z4yZS9UDmYqqcQce7Qc96X7Dk5zBbE1ZKKhZTM6dT3W1wi2Uzu26KuhmuffpbqKL",
  "key22": "58BWsBsAjssfDJEfCajPTEGCAkDxkJv6XPHs6xMBwVr77vJYSKZ7Z5hGDmCbLzNVfTAeoxLEJcoFSMnsyAW1Um4y",
  "key23": "3yNoosp5eqw9brHREoaAW1X22mHoyFTNJtTV7cCyjenJ8MjE1Rv93DK3GHgUWbQ3cmWEzGTuyTGWribg9FmuqPep",
  "key24": "2vvSjyq64ZEQ47FVCYMsfDDq2v1c1SxU4RNj2z9Hpc8ypcM1QrSJKnmQ1thuAqDGzz3zRXrpbw4ew6AWp1ENH8iJ"
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
