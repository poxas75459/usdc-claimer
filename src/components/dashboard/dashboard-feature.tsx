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
    "5PLnzRs1oXwHYTqo6sK9oaEGWygy8G9DtwTe8tBNZmnac9kKa3YVvYsrawEHxPwG7qYr8t8qXv1i5Rf3Fk1Mohju"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2qd783ckfg4jEmxbZq2EeVpTSd9jwbq8NWWo5YXprAgScn6TDxSHndUr9Y7G9iFSwwyUmTv5otMsy97w9hPqH5es",
  "key1": "4MVU8Lrh2PvPiJzAcemJYzEDVePPNYMvv8kk5iGYoQ4VtsyWKvPTWgYAufTmfyDk29LKo9mUHEiaW2TeJaguqK93",
  "key2": "2spCYj3SXfX8N3xQstbzm2cGMojdu3sDEne2UmJk4YLosgA4GM6XJjquv4LmETb8GmQ4e1Lj3X6jbywyURwKwCGB",
  "key3": "2q8CarPGC7vGT3xAP628FbSXLTp7cwuYDs6sA68ebivFkJUvXaDXys7KKh2JjWVAoTUfe3aJH4ogE6UPcPzaEaEC",
  "key4": "4xzGgwem9gtjTriQqMnEtS56w9PhmGYHBKQSXUsRPxj7rGuWVBbrhDq3BMUpNrVAYYXPFP21NoDaJu8eutpuMWSd",
  "key5": "4jH3zHGGpVQxZhkWpSMjqbeyYn838DpwHpsnCAJtymtLYnVc5j48v7sbKscKuE3dMMPZEJa8N2HCUsh8hEj36xqt",
  "key6": "3Nv4mpcLG4GVUAvTThYmKckT96VynTnDpQicCVcKG8GBkes5S9hpTNMy7ocz5LRhc6BVafCWXqPbv9j7KEPpiGkG",
  "key7": "4k8CTt6Jkom1JejsCbWdiB3oVzRoAur9LSuoEFetTM7jZ4fFQr6NTGzrN4zV3u9xvwXz4ENHUUndo9LSorEvBzQz",
  "key8": "4W82SrMY23Z43zNGmTWRjTqETNrQfYvLLfvDot17LpegBjCBBqmJwaMtpGETeHSKcgmBBmN3PV6PPat6ixBTLo3n",
  "key9": "yyLdVoFTnxYXKKjjnymUTyHqKtiHShn7L8ApFS7jg9XC1yd8RJotc6FVKnd72K2CZ3DJLwMK2U6rtR179mT88rK",
  "key10": "4YMiJ7KroZv8Ruh2wxh2SUHKF9CpQyvNQzoGE2MEnQbEUdq6yvAKqPnLzBxwsXaVTni9Nk8aZPtoDNi95yArRM1D",
  "key11": "67hkJypyML4y81b5rz5F7sGviUmY4oUQ37kS6edxR4YSRhZyK37XjmScZxEfiALxqGLYevvBuujRwGi1NXEUYkqj",
  "key12": "5BNMinWboXLBp9599UwFYAodnp4LzARGJWpdsEpPXSibKydKVWRDMJNbqLoq64sDEwnFa6Nw7kwQ115WLhZSbWvE",
  "key13": "5HF4uGWWwtmPD9VJj2Ee9huH7NAJuMuEw9SqdNBWxVCDy9NQ7CWp6mTCEzkXJbr2a2vskQm5sccMZUmLuvZy2Zs6",
  "key14": "3ZBm8khSpBTAjkpJFjFWeTBAkZ8QsSTo9MJQekQPkp6qKjCoQSYC75x3Bz53GsTiurHmKg2xSJBigyZoMmbCLEG3",
  "key15": "3kagqLXEUNy3zSWRN5E5ThEUbuen4qtsN451V8DM5FnxMtjf98Q7NuupNGcrPs5BRkBJ37wTjKY11bsEW3ttVwLJ",
  "key16": "5CMkM482eyw4maJxRpRNJ13gYkJQYHPiNkYAbk8o6hhP4ZW1MHbBkPxUgNd3Z6hrWmXeCJrNBSJL7RNQAoLa4EVx",
  "key17": "4hfQ62SUZ6641mg4Kb9BbcKWA5fhMmNYQRE15am8ogg5vQactvpYBdY5KoQHTyx7MPt8JRM6AmzLj61G6SYyLCpJ",
  "key18": "AJUxqCK2r7Y1kM5rUGFHd6iGkCaARgh6BZsuMEZ4NiiYrvFXpVRnZtFmA8jrjMNv7CQiGzyFwyFfbPtrKwuLxY3",
  "key19": "4U6Yz1PNRGCcWhH8omY4jeSAAw8AVB7NW8UeXoBqPHEpnhDFpdkcuNBYmTzuRJ9i3XPFYym8t2BQdHVj2W5YrBPk",
  "key20": "hvYwnPet2HxDdkCpjNoU48h75ggpoM9yHyHjGdoxU6VWNGQBZB7rXFmHbH7Np7C2UkMUgVNTGb9M7tN4SQFXXPi",
  "key21": "4TJXhbjbHyN5vbjRfG5vGZJAuve9QKhBFSVMGA4TiL4tEZ673XENSNGAKZVWy7FnY4cz6ayTQFLXQBWH8ropvqoe",
  "key22": "5ppKAatNrZxUgPc3UnKLRxyycLc5t3ZSckMimbecAnaSvAPGxMNSWnQhc62RiT4o4rcv3at8XywKeok9QYxJby9",
  "key23": "3hcQcJLdQXxh9MsWHF6kBJj9hDa3hJQpRzeQw9cfJLw9wv4cccaJUNrMRSpRYLT7pTaWLWdj4vvo3kRi7rTgtKeM",
  "key24": "3QvWr6REuQorSpUH8mAFSj8qty8B7XdgEkjHYEdAFDDP7jyNpqR7wMEfJCgiscJCJJdpEu5RRoqLbuKcjXdGVina",
  "key25": "3PRMN1pnTKK4pp3LAVwneuNw867BqTo3b4jHeJpcQUa4Dtqky5shLEsPBKVP3TzpmTgwL9V6UQg48w6dm65v7Nt2",
  "key26": "4nucCMFnVWUHhPTqd3oEaLU2FdwiejjpS7ceYsG3pA1tRmueDMY5vcVkkxXnsJcFRMbmfben3DgBarfAXULpen8F"
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
