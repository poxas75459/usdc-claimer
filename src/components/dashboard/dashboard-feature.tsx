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
    "25mSjFX2w6gcW2DvLCUB2a383nd9XxaUuHdoaAtFq4f5bMHtNK8eU5RMd4yfhavNxWRiGbSDM3DaANXt6F963UjM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2vkKoDHEFxUnSN3SFA8PAYGcwJRkptSjYEvg1ZZ7MGcN2sXYPpMZu9naDcX6mw5E43tik3VU54bY8JxmTcxzvCC3",
  "key1": "5qEqRVW3KJQM1CsY1i4TNi9TStBnkU8PBxjonGRJCFNA387Ve4eGYHt6L7DBAc5ofJXg6YqXd4JNxBBS7BiwAmyZ",
  "key2": "5sVfkQwb7hWzh4KNrQpDALQBphHGxsxQgZfy7BNkrkmxHCkt3eb7hCqHFxMdP2Q9Bzqx8LcnNg884rTbGUkckt5i",
  "key3": "3QR7JzBaVzxx7naeCXAx4MZK3zL4R6cwkWsbobc6JMc4uMxbHd9Z9yCjGsTUahqr22of4B631d6NsAcLg2uoai5D",
  "key4": "5bMdCWLqpaWvrY6TJ2Uto4RKVKmwtZW5tk2VNwztR5inz62qbKPk7ap8zm27bpVm5v3VLtCbveJtU1aWHXvsuM7L",
  "key5": "5Q873uGoL5N9Z3eU3wD7aPu12uUw8QHSChTan4JtADEUAZyry46f2YudvsRpcdn1b4ktwAVMaZVW94ZjEhbGMWB3",
  "key6": "o3P7EujR19b6JwGHgzx23HjTcCDq4pK79TTvAFHAVY2mGXujNSFT94STJZpSc3zkEwz9XSY4H1cjjwSCjQephFE",
  "key7": "5s5Ame43GVoUAMRMpNBnw7sMJDwyqv7WXVXZ6RvzkwCZ2T2PFoKGPANxs6HjgjE5xEsn9vSd4RpqrpRAEGndUpt5",
  "key8": "5wxNWHzDaXChtpxw6xp8oZS38HtV8XaXsfQxYAUZEy7d3KudqDS2hGqC4jb6yUHv7K9oreb6mrPKeX9CkoSAQvp6",
  "key9": "3upWctjiSBZZuaUjii2hCGYSZSxkb1SaZAwmVHyZtVUn3ZDasmpLJMKTyug6JZmqL4P4Ry3rsnMm6euJN4wQW3JS",
  "key10": "3gZZ9j4kkAB4rwDcnvUARzX7kN5mqzk3qeJRsgdVovxzPNGZuos4ttq2SgQ1PhR5Kipnvx1xdAXgLDMwGEZDWwht",
  "key11": "ajijvSNR9uwPCCrUKjNtaznYJtXtVZ53EqzbiMyccDbfsDhe7wb3fGcH6S9W9gntEiBz11u9WBvxhKEXUnfvsm2",
  "key12": "sCwrjSuq13eovF7UV1urXvDXbrU7miEmQKcbpSgyrFNXF6BSSTAwHwk3Uuwhw7Y2AyeRymzfijSRuBYfgsiLRBZ",
  "key13": "3xFCFr4ZjkXBMNEDvENMAXUDdhvP6cUZ63gd3GJxQztgdhCa7xXqyfzttc5MW9giEoGiP5b1Dd5UdvzGWKdRw55b",
  "key14": "4B6fUWU8vkiHszrRjKWsFWcQvzSRnhUwHJQrthfXdYCi2ojDsXMz46GQ7TfquZp66Uuoinmo5w2pydAdJ3oiGqfx",
  "key15": "5C9nK9CgUn7jk1vxwhNvTf64Br3EHScGpYYysRQwx7fjonVSC5cRVzvbgcwYddDvktJ6PywknBxMqHcokhMEdqAh",
  "key16": "2wsyKbF22VeN3vB6Dop366MTKEhRCqKEgxg6ygn5ymYmi6vq9JGTkMPqLUTKYhQbv7AL7HiuzPgBgL2nkPLfxYd4",
  "key17": "2Dd3ivUGtS9rttFJ8YCygd6F21xUVirZNwsgbagxAK4e4TbZhXaGnRwUTKQsJQZbYN5ZxFV1dAr8aGxzpg3qTCGs",
  "key18": "39DiU623ZQseZQCqsZViKJUqercUoLhf7PVD11fUemDut2KgAwRLCDEsTdWcxejdiwfvdJ7Xah2cRCCL4pqz46ft",
  "key19": "39aNvwLgJ5fhmqHQ5y8RYnVGPSjbMZF22SVWg75ggWZeHZQxMAhuYJ9NpRKbKWNAZcypiUrsg5t6opETFs2ghEx4",
  "key20": "3RKytexnqZKUSUk4oPX7PnzvswkLtUwW8jCaRgd2dbCUDaRoeyJNiAUsqUigHHH2kGh7QXuZMvxg8YpesbDJLRG",
  "key21": "3edmvchMMLQg5cW9bKd6th2rSrq58G8CfdG1DDfry2zAcCTVh1qduUtsT3g8ESVtu2obXsjb8uWbVXzFiEbQCrey",
  "key22": "2eowX5LcdTRPiXXp7zUprNuLkeRDR8NZUpbrxFJk4WKtR5PVkS8oq2EogXMwcDZhdJ1z2tvNHJT6scZFz1bpHYoJ",
  "key23": "5KNoRf3cggSij1RnBjTyseiHgXixwLu5A2vo38tbDrXzNEndb4gftBB45z12RUWVh3ViXLYbhK4g9TAEXPG7yhPA",
  "key24": "YBnEB6LrtSxzZodNQJC2pz9gjTK5wd8QSk77CeqQ9VNuV92N1C1fnUXuyNVHCjckX2Fq2ZSVMBG3ffwjPyFBihP",
  "key25": "7gfSYqA7Vk82KXV3LaVmmySrQeo6wueLJZxoiDUVRkeSGd8Dv6wffhxfBES3Q48LyYM8nuXTGuoJ3aikBUz6YVG",
  "key26": "4rtpMqZ3G6GaLZmucvFEoxcdXkYsKsWoGZPDuXFMf5oiWXfnFRakSBEXgJNZkVVtwTfda1oEcgyRxPCByqr7SZkU",
  "key27": "5YzyqXKRJQ4Bxbi3fFa3t4JvPAqpikE2PNfJGoJwPtBJ9tqxz6gXqH7Z8uQT8ihNHXScDeTVfuEYiSMBYUGs7Zei",
  "key28": "2m2gq58cUbSjnLab1PN2JFEGgFdx1Dm9HuYjNHFWEuKjn5GjEByMvAFYwuwUuvDUwHkzymt6ojN8wRzrko2jUWhJ"
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
