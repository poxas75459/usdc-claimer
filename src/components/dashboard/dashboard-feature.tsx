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
    "5fg9mVChZHTMVCNFE5rYTo4mpKeNxYxwYKjRX9oXUdyeqPrfMWn2uiDBADy3mQJcFdyEyStEoqQBecyofnnQwktZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5YWWLX4XkvHXUVgAEePod4dUUepbt8ePFoqBPQuQz7XfduFuy1r6pP9nJSMkQkkezVBu9zmoQds4QQGknVVMfqdM",
  "key1": "cmwRap31BTemLPyLt29Sd6xEV5D6QfXRJBkEes7NK8GUCGuNicwZSchAhZxsQzUNu9Rusa5Lj2hcPUFv67uphHE",
  "key2": "i7e7e6Fa3RJWuDHAdiyXoB8c5AxUgnEWebTJMdLQU3HZRVgwDwMnaKCTA3mrkFC3uT2djHmomQ2Nwx99wbaYRE4",
  "key3": "2U2u3kMPzSqd6PPwmu1TCiwsqeCSwbr4hLczLzxiQ6yR9TRW7cMpo1GcwXkzC87kKiE78AjveVBUsC87q5b8GBRb",
  "key4": "4esbx5u6Rs5Mhec7MaSASZRKqP2rQkECeBLNDxsMizHTWFJb1YYXawHD3SDtzr2ch6dZGz5Ebzb8YfuUAJaQUubF",
  "key5": "WaZxfDxrYj2vbzUadDsVapvN1FaUHc8q2jPds5Tvi1trGZTLSAPmNyCLbFs6hbDGr67amwKMk3s6aigaNBQjmbe",
  "key6": "3ZFjtH2JUqZLtqenvkpaToiHEvuPNf1nh6adV9V6rLRqJrSSwtq1BAeMFVxr4rivTUx46TSABJgShc8XCP2BfA54",
  "key7": "9eG4Pb3KRJD5i9B8jwvgEiXeeBF3gyi5Pkdh3sLeNArurP6Mqzw5pNWsCdaap3KSCjMhaXsupQ9NojnDTTkfaeY",
  "key8": "4bvCesuA3sQSqARpkXtGCwBkZewjAEqbQjkVk9g1e8cXDeVMmteL8KFrXsxw9R52EQ5uyPgD2329UdfJyub61erv",
  "key9": "HaLW9u83nbE43BE2RDienWGaCjGTBdDFLZa66ZGfKRxDVNdUeMYWVZgggXPCk5BVYVy3B5DMt2KvUSfD4exbtkM",
  "key10": "3vfjxhaE787a9sVwz7pXRbUMnWLXxXL1yRLDz6YirYuSjwamSipJSJL1qZy8XLwtJtsboWrbyKvCVdU8zcVDfWuU",
  "key11": "4Z3GJUY9r5cNaf3hpFgyk9624w7FaraZ4XFdT7pGeRChRkpSKUefJnHmrPqbNMh921uVFuqLF9Jw2PYJppb8RzcS",
  "key12": "2yv5g3eUqTcvwee5P6yKSxu5L9cWaFtUJoXgKDhPKkvmK7vnm6BVbkNVyaAdRtKNYwNgeBpkTWQTKwtbH4jtmHMJ",
  "key13": "383XwJvU1u2w4NoV8d6h7WJZsW9iGGrb9iZB4hBDaXD5Cty7qU8NXmNjtJe2Gk1mnsqshMbQSajc7pZtLoFbLsps",
  "key14": "2zvNJPg56GL3CLEyfcjC4JjnJA54Lib2EGNqe25wkscKUZn9frvcyo9dLsE42yGFGUG9jsAdeY64u85ADiGjcngU",
  "key15": "crY4FYQ1nPCGBGTkr1o4Z3jncbDbZ8VczzUKuEJS1ZRvEwjnmHXGz3isVKp89CSDfD6e28EBnEM4i1uxnF6T4c9",
  "key16": "4a84DvoS8jjUvDDzjuHPtZqSycxLkEKZnaa8NRebaNnRAP5k53JtiQD35JoH1XVn5Mmg3PDM974Az7GAqNBcC4b6",
  "key17": "5hf53848FHFSdf26zQARdUqdDrYw1q3Db3Cokbytqtd4EVnfnG4M3uY9Kgkiv1wwVP9JGyYx4SsPEVRVcgZkCCb6",
  "key18": "yvWzd7eSmieZg7aKAunqA23LqxcGHFDTBtxmGHqtZt1Sn7qJpD6Tn2Re7nQ9bm3gVNk3aGXWN76QsMEWwrQgnTj",
  "key19": "5eANNaqQfN8PcnaVqPTXRsjp9PVHUC7PQDHEmp8RBJNZU65EU5bgQn1x14urtHVC2vRiwrr1ae4JqUb9GkDGVdnG",
  "key20": "u9FtYvMngf8nyZC8HCxZPdBFL22BedQusfqiu6oazRWMa6uqZ1jC55pAPRtbvXC1R2RUbCAGYiabFmoHMzBKBki",
  "key21": "arJfwUX2u8C467d93C72vidFFtVGJwP2bY9EMCmkG5RHd9cRxap9U4KavKQsW5HRhp5ekmTXunb9qyq3cXfx5u5",
  "key22": "2eYur1FbdrosmcK3ZjQegSBSuvJR2PKk9WP9vcgbNSNavSpmRwnD4WfbYkgfwQ2mbsgiojn62KG5PaZXFLZbyzLd",
  "key23": "3LtrjLaDhgR3yVFdWmSVyNk1QzMRyR6eSuuwbnVjtKEtMNMTnG9L6SQoPZnSjgKpxJVpFDVCKoQ1hwstr5YBuNH8",
  "key24": "2KEj9yXCnPbGgXTjLCF1FpzD4drWEbEUsZyWYM8uWTqxasB5V6GC2TqjccJJurc3tiZbJe8RApcpsidWzdNxz4zq",
  "key25": "49vs5vsCxhNCByzk7CXfwgFmh6p9z3ngTs4A16zpsqN6skwob6aaWToLVwQrAuL3cysFMWd9R1BQuh1weLNDzEoe",
  "key26": "4WdV8MuTJLR7mLC3nt3rGRQCFAK5Rwgs52eGpPEpk8mV3868rNy9LfNA3JsiaC97e6cnpNA2tVQUq4K1TqKQaktC"
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
