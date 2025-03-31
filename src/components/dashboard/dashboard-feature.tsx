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
    "5uwRE2RhEYCmPPrw6XDccFSN8ANdi1B8FEukUmerT7pkCtj1qRpQpqqZiNjgTs7RcpDXgHPfpoaJiwitcVc5FACL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ksD4uhVKvNXiZTdWtodgGW4et6iS3X687qwnN7UsMaBrbZg4nmFvaHqAu5uHm2kxRXtkdpmR9DMH7xSQShtM9Hk",
  "key1": "rErZbdxZeLy5d1cpqRZVKNcrpEwFU7azaue5Cph9oRZM4stREEn95HANxFDDdgFbiqqiaKjrEtvbkRX5j8XhJZ6",
  "key2": "WdGJ7Lf8jgJCd64zXCXtLEuzuBfiUWLbHR9bwvSEjbJvq1GXWXvUfVndnkQdigrtL9N2KVqMXRnDapSbicBP9y4",
  "key3": "2Mq3rh96X295VzKB5Hf54kT6UmcJX46ztdamL1gdwV2eouZP2957zHQBmaYuERufdy1LFBt2LX5jaajXR1z8f5T",
  "key4": "4ura4HurFm2xaMqTzR5QComGrGq3DtEGgjf5WPu1wyjknS1tzfgK3npCfNYeXduTQUNpq3yhNTcgzb6qArMtszdC",
  "key5": "2ckCjSib4MBhpsQFyEQCvari2HTmGZSuQqbGTo2wPFWmiqMtHbLMuxwoK8oqPDa9RAzhnuoM4rq6xfpvXU26EbtJ",
  "key6": "4ineNnfDvX9dHM5L39SmKYsvYK6YyjbXGT6FXwosfVxxD1teSktXga6pY5f77KGbKhejdnFypMCMmHTUsXuaAPFJ",
  "key7": "2D5MfSXX9WSPQwHp2oxCvHqfQxu7c9mgHWhxBj6h6F5Z7gvUe79chVLAWsihBToHGBzLUJpFGXiUnHfAYfVVYjC3",
  "key8": "4u4RG895ftXRgzR4r1HYBpQSbiKJmDE5T27LHT2e7M7YTYjYnLS6cTbw2VdwcsJzsZxJnw82GkvfYBK1nG73WwAf",
  "key9": "2Nt7MJkdtguXus4i1W15xviXXAD8XpYgASftzie4BRb8a8ML4BT3qNwDn2KZFaZgAcXTNm79EkXGRF8ZNWBXsELT",
  "key10": "cWmu3W8cTq7v1qGKuK6sK6ExwB3hrDxDKcE2gVy7RmURkx1QFVerJuj9vEJCMzEAXDT3oC9C4Jb8UprVgFUYwJ6",
  "key11": "49XidznDT4Xo9zvv3b2K8uVwQ76cJb2qReS2BYYg69pZCpaoGq6bfTsBq2mJt9vxMVQvUV9n2kWtUeorpJJ292XX",
  "key12": "4kVDq1ZrrBwsqDu9LqDERMT4Lt4ALSAHVNCZ8zvDT1bmeZpDWdCfW8Ka4wRnkmEV23BA4WFmNQKfrzHphEaS9YUp",
  "key13": "5qz5R1cb9xYBtgDs91Dy8SdWqV41ZrbXuZZKNTiGnijHoS1yrtZpy31Cm6rWPv4NS8dpSqx1o6r8kNZZ8Y8wPk5Y",
  "key14": "4zwk4fH2K6EqEBfabKKRXgtwFwXuy6MMorbdxGk4GSxzFUS8Qr8apHbVfCTyAV9ptRYy5w8NUn4JpiYCoTgsWZqg",
  "key15": "4r3GF3J4pYJx87SQxLfRP3UU5V6bcxD9rduYT1hw1k4RVgECqRsGFfF4aC5pHJa1PEV2KJLUeHievrNW5ZNbuTpt",
  "key16": "4PzVve4XqjNphRP8SgpgxQARvssRTo39RKPtnuEVLFK5ANQHdXS3kT9ZxpMSH4TfkRMjK6at8cPye1w3DARjE7HY",
  "key17": "4qhN5Px4o9kfzhCq4igAMzNGzvGqvyXhrRPz9JiCvT9vFmyPzrYZdvznSZMD6b5KU7zK6K1biTgPyQYzGCZNqnao",
  "key18": "5rNWQraozJY6L4GKxb9ufvt1NuhwseNwo2mJ6uXb5ZVK9oCAytV5RGnzoBqXRuM1APs7oZBkSyFhC3rJyhL6U5Xk",
  "key19": "2L2bdU5eANVNWuruK72F8k7rruQBRQzppYKi1YFyjopnKQkQExT6d97BS9Up6vKBDpVdjDziHEdt6Hcfi4CwZHgZ",
  "key20": "56UbBaWevgLEEkA8Dpt3gpRHZCBK4E7pqSfP2rZ4PWEfrsYLpkepWQkfeS3bmjeiC5Km2NM6Tug4JYZWbTvVXxfJ",
  "key21": "4ffDrfZmSD4ETdQ6u99kc1NHQWWnXZTY8b9SHrai2TCSJWpTdzw4rTXquVkGCbiUX3tLfA2a7vCsRYRR3JcuYakm",
  "key22": "5ibCYXrEKgAegkP1QztCAR9qPHLe3cZa4VUTgcCgKc3PGandQWLZK2UuWKENmD6joAEkL1p9ZGmt47bM6RrAuq7p",
  "key23": "4Q8vySPJw4K33CLfFXTBBoNqYWSA98KXDNNXFuEUiPETNiv7BGNtnmfn9i2ZQQpdFWsRnjLZtuv3u6mQkF7TRb9e",
  "key24": "2T5xXu8Z25FBMiDSX9FxQF36yZaP9UGC5XJRvwnyRQHH8MpUBuJC6sqRPo6GruyNfEe9LEcywubmQc1GPPTHanCw"
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
