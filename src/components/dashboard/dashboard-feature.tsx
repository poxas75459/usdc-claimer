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
    "Pe8m8K5honiK7ZF75VbtfF46DazSQ25BbbBWajRLNs7Etkzvceuhb4Wpwkds1QtEhVbigAqrGg2WeXWuiaSAbY6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "eBkXJavEpvhk1qidRXwWKzWN1djeWcjueyjaGo4xjkkbErbc9GytDUGPfbRr3JW5VUJS5jDrefSyrRWiAk47XDU",
  "key1": "3GtDckSwNzwPMFdoMFvo1EdBfmgm7TDLsFgPLKQDH1bEq5byQh2j4c7imJCfGsb4CKiTvNxWiyQ2uD5btByVLyM8",
  "key2": "4ffMYbEZTBnqTiuMm2idngUFzhkNbeBrynYBTXVT8bYcwPTKqrAepwHHb75cxc2qSbQ8AoQL4FitQnWzdPs9Nczj",
  "key3": "4GjBAeq5T7ZCfEsRQUkumqtNaZeyvEVoREdq2TZgzQFwEBBRdo5MnKdbTEcxFE9XoTdkKn4AnP6BQNaRSnGS96qg",
  "key4": "nBwQgccVfcj7zuKQmNW1SA1CY4un5bcWPSX5Yrvp1CAd87ZhDFkC2mszVPWrU8HewmWUduWSbSiTUa8jxEG7xBM",
  "key5": "3dxtJ7RgcgC7it86tq54ooBWVWW27YCAhhzwQBuZ1Mh6duLAhjQ5cD7yPYKUUJaabBsC2fGAPK5JEmx8kvJt5zvc",
  "key6": "2PPmDYregdHY6A4ZGeqTjveKxpfVqYppAyFMSMFFHehSq5wbPHzeNBxK6Fn28Tiqh2ctEYoFDoL5mxpd4scFWau",
  "key7": "4qTU6eE3CDYUmw6S9VHjyjFN5x6ktZQPRdk1gziPeaJeNG1t9KYfDWfpRUkkCXGEXrrv1gkyHY6FhVjGk1YcwWaB",
  "key8": "5bv42BdEHvkbqWTqQy2yoVjpUE3S3cB86v1ZFSntYmvRbLPAoTm3VKNSwCkXX54pw1J5U1uzb1wzibLjzuxSsFh2",
  "key9": "3RBCvNupfrR4MingVRCTTBB6ctdXqbZyhSq87svhgJuRKswJhhuwyge5g3dwKAK7rovFkUeASiKc7bEEEiS3Tx7c",
  "key10": "4qCiXg8AjkwoMcsbEyzCLAG18Bq5zwmaNpBqDJ5mgU42c2wMXmzHc4XdZhW4HzRTQKSXtHLq2Kaw4q7pHCFWE7oF",
  "key11": "5CcJKCkCK4gSrTCkdg1xj2j5hesPDTT7Yi1bhENCnDdzvuG7zLRPdsYqXHJXTNykBkZmmV5vA266EjTHHt5BXcGa",
  "key12": "4NgHarBBdNcPdk9j6dMq8hA9s6g9ZCnxJn4nDKruDv7xapqTpLbXXRLyJHZBRcNRJDXRtNj8XLJMHBwjwcKBe8VP",
  "key13": "28Rpqv3YSh7DGryT2ZGMqtwCYyucVJSaUTdpHMRAzu46vCrU4jHGPfycB9e2RWFpjuw1jADBtLGP9cocSBBthTD6",
  "key14": "4B8aECmf6zSuXo1p1GNt5z7dvYAiZP55rnJEFQSZezoNuU4p2zfhzEifMFwUTWEst8FL6CoQm9u52EvcAJRf6PWA",
  "key15": "AjnmDmpzb2JM4Y2DaH5ehWfNHxnJ3cPmN7U5SFhfMMBkBKrr1jN9vDWA2scDpNp9XwJz8dw2YsYydGLXhXqd7Qg",
  "key16": "2yD1pmU2hwpj5LPVxhC7XDaYcUecs4TiptVroE6JUHgfzh415nJzvs4LneCbQAQu8svLZh3rvt3utdn3gdctemEZ",
  "key17": "35oeHFVBxMGaY5vvvo258nXRgJwKEhJWWfx9Y4sgKr9aZgDMEmBnSBN9zXnQw63Hi4vi96roznVaSkeHt7ivjEYX",
  "key18": "4AHwz9kg2BRxE8HKB1ZJfnrtB3ZHMQkQ9QBe9A3XH74KSR8EF57Tt28pdxm8QY4724wxTQbaEPMpV5UjvxwCiwRM",
  "key19": "25MGQUzSAejy2UXuUpJWxLosWMHmJwsPLAaVyyNMkPY6HxPto7ax3uaQdWsSa8Jqs5no3ZhsuJUpSEhhqKjBxuph",
  "key20": "5TDD7tdRM7L298dY93RyEy2DfWqi6pWMb3yy5JowNbryH8DZur4eMG4x9h4MhhwGegqhcdqhV8JFETQYQrq1B6FD",
  "key21": "4XbXctpo5TiEGhJDnVNJMD7SK1X7avc4JFC8qC5cPpKzctf2Gh3aJCPaMpy84QVY2PzqNZnMj26JoYpmm8wMb5b8",
  "key22": "39njB9s1Zg5odQJUqhr1gEBhQF95QDwX9XwqtS84epN6ZXXBEukebAAeNG1brJ4sMSjDoK93X7DCZyF9zGfvJJM3",
  "key23": "43MA7P3wwErFrbxHTpUtHsQNhgG8jEy6pwu2vd838t2dcLBqAmQ9qdKwF5NeSYzM5qRFE6DFCjoWto8r9eE2YQWT",
  "key24": "5jyUEi8rxNAuHDAsaY9f79KhGAT1kcSUdkfQmoTaZ1d92FeeMtGYLSd2kCf1tBho32AHovJ3keVBfosjdFENPzLG",
  "key25": "27TwzP8VsSoWQVnRXLF6oXjXgrbuMKbWaSo1NTrBFgKZSP7CLpLBC5EAjBZAVZYLVLYb1ZDpsJxvz3wvsRfen1mP",
  "key26": "vNwBXb2Us3VcoazH2aa9e3d529JdRK8JuECpRVfF4f3LV77MxjLqQjs4HvSb9qmqUxQDuF9caz84TXjZiL1f41j",
  "key27": "BSiLmwrzNdmkVk7QsYqBP6VH7qRVQ84mYZxe7MuRgzGKh6ncLtBAuNjmMsQSspvZQ9xUxf3D3MU7yTk4bcSdzkw"
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
