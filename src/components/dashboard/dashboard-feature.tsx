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
    "5vNChBnAy2a3d5Pyhctg1fYMybGvEviA8tef3EvSNkrHAQihkBn9eReG8oiEDUwWNCvz4J2py74G76iSmsoXGHQ5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ZKwGgv6M9VV32tT1eWwo8eWRFav3S4fBQy7bgWsVa9bhPZrT7h8HYmPZenN6ndQPGtFMjTDt1kSYY112XuEZtf9",
  "key1": "Ven9twXT8cEV2uh8eikk9dr1SvXvRWNnzFVjus1UyLZ6NzVb54osfvQ23TpA2qKAyfbaPPLmteFwyyWiPv49eE3",
  "key2": "3ZEhR3Y5oN7EvU7i73qw1ZUAkvbn1mjWX7NV7T1bB2t7Hq8xNMVgMAVhDyQ2NazYZPGjBgXZPyS6gdZQ4dbMe7Cz",
  "key3": "46K4dEr685AzDxb96fF39NdhqzFQAY5mgJxGVKmxbiVyvnZ55zsNQGi1n9zR6fnNJNoZLjK3etd7BH3bUhSBo5sA",
  "key4": "3kYJnJH6wxUNtNHUhU6C2yfSacYW4v3MKfzmKYAynyzVfNwY63ePKaZxiyoKxW7z3MZhv1qkqgLVuuMLZyVW7eLD",
  "key5": "2JRX8WJSxMKeTs8fNX8GnbDDfqxX2vE7vU8Cs4GMaLZ7mxRAjdtooK2KsVNBnYt5WEQwAYpZaZX8r7pPTC83iAbe",
  "key6": "4iMmXa9sxaHguaHcXRva2WYbxeRszs4HwoF2Ka7jby9ZhJGBpf559BynFtKftoJLJnZGSXouyyFcnFfn8Myk8JBg",
  "key7": "2a6gLbgp9BBF36PRpehKs8sDyACTpMtRLxqtuMjfoKvYqhygQSu1YrNrF139wYaQwNwzYwXycZrxYQwDJMSd8stc",
  "key8": "2omWkyEYP5fMAb9QyoAVJbqh6Q6Ja6JEiZs4N3WNvG4wFm4sVKoE6jzhiNzyRbSwfKXMGBsyt7ak1a53img4nPjR",
  "key9": "3jsgVYKFWk4xU3JsE6pAuJGrHy6dXSPSbYAqYFgw5u3QDmyQB2sWUjMtgRJnedTooKPmgKhXYnXjKp6F88gkWHF3",
  "key10": "5aDk8z6JcxbqeEJUs1WnGstXRwtAtefrF2qbHJwdDKZ5Pzz64qGXzitrG3grBeg5mNaZcCzyzPENwKhvaVR3zCQM",
  "key11": "53CiUPa3pe4r38oL4vRx2X2Gzf79NPS9Knj7j7hV8E4e2jWcrBSoA4diMntLcgDb1mK1px3MS6oMPpLJmPxfNJXw",
  "key12": "3YkYv2sJ9aqRoLpAr7teG1afRhozmNFYSWkRQa2PFoC3oZMuSnyhfAjeLG62D3veiendpScHm8qkujCDEdkHSiA6",
  "key13": "2tW3Bq7C9bBimZDfys7YXKMCwmkin9U35GsT9uEmtCL4FbeVrZTpaBUGw7dc5LZZVUYbbQmQMqqV4FFxiNFMMXpg",
  "key14": "4WZYMn2h6Upb64k8Tp9mw5JbnpJcqsFim4QkaDhmcaSpzBmrCyZjBCLmB4PokE4g4FKZMsTVAuiEWDNsCwpWWB8X",
  "key15": "4Z9kDZaHukjZviNGLGoM4x8RVpNqQusvJVwBDpXcz8zmpfsAX5eNsW9htmFmEsPuRgf1DGSLFWXMfn1CtQpHqGki",
  "key16": "5wv2Rfpw5mzhhbs1ydPiXjkyv2UBBkQ8cZiERgDZBFSttzLAmP7eCDpGuh1sPWQM5DjuAtcoDY9TJLb7x9XQ2ukV",
  "key17": "kuGWCLhLDdND5Atz9suyRm2bqXQGqtrj37RLA4pcGuFve1KwaDHUGoEwzYPjU82s5s4Gaado7iZaZdBkKqQsnDB",
  "key18": "3okRpZoMfFkxoJciyAKkQ7vcfgZmYQbL1bAqUpYaaVsj4rLMS2gnMBRFHyhP34Xx2wanVb4jFQfdK5p4L9jKzHgG",
  "key19": "2w5eTAnn7sGDFHMQ9Qni4yjz5GQdA6GWe3DYXzi4VoJuDxTGNgwH2vWJ7y8n8FUpG3DzSsfFH6uXoGUktjf2p5Kw",
  "key20": "8i54DdswzDKvzMNY3BQXR2dsDG53A96coywBgSW9AT7hqGETQM31Rp38kAaW3NNRF67r5DVTYSbjTvMXtF9Vqdz",
  "key21": "4zGsbVQBLnn9uNZDJnLLCdBJGnpQBLkzzPxWuxw4KA11z158sgwPnuh4AyWtG83diPvQWJTP8NdfBwac5jdeJ1Wh",
  "key22": "4VTGjEYgGhm7Q4wtjnk4si5uWd9Daw9NGeBx4QLaLwSb1FBUzaTBoCvwqkEx8qnsGPM49RxpSDZq2pWF2UdNEa3h",
  "key23": "4r8jGaPk8Bf9A5kev2i7x4N23NpZVMvSADsLpJYduqhqbYTVKga2EWSXHEJHLjuSzAM3fDNxc29YLnVg7VU7njU5",
  "key24": "FAHbtCbpmk3CYaHS8juMMMMtHs5yBnNHquEp5urq9ZuGfSnseTfzrAQ2AWeJ2gpVM3LPsVRFk1rKYa2JtSvxAvH",
  "key25": "4pCjNLTyYLmXGC9aJ5y1gdo9RxVYrJ1KDgWJatWtfMDrXcpy7tdCU3agN82bT89MoAjDuSudySHBmyPdLUkdUDzW",
  "key26": "5SKE2czWhF68qkmRRF3XNH7UyGQrTUPX7CbzyWW51npNKvmmGABLCkBERxmeVL7JkmMemJPkkUQF5ErcfHVAZCKi"
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
