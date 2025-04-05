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
    "2BMYahJUTvqarXykPLPyagrnriJoiFhJJnz3rrgWvFvQprfYjQ96nGH2oSKRktdWFbF3ZspRdThXV7c2UQGk2XKY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3kLmVYJ5RoUKP2PbynHPSUVjrzRyKagJwkuqXLgFqm9fEvkwrv9KN3GXAhyMDyqNsUMg69NEkXotvYNyXJtaguVr",
  "key1": "3Wvk891ARC5UihfAVxHBiy9dCjLcJ1eFdrFAUt8dXMFb8uypCYGYnj4kLhFQXpUEqjTYaWozMCfM3rGzNxxGZjsH",
  "key2": "55dWmbpnzMVYcoivTu1sL4MdoYDL7Z1ccvJnd1NLiRTzybUKemxcfs2zarmeK6G2GREEjf6ZRbGucuhXhZSgg3Eb",
  "key3": "2JJKX6M3sPbvEY6NwagzaZ2p89Q6N5Qt1wWmTAyhaivwdmKx4simJVGEntM3yJamJqjG7DuKs8qryim1a8PisC9R",
  "key4": "3j21NLmACSqmuAv7sr1pU3Dot9SnEuVAGTjVg6K7hqX9huBAmiTRV52mS3bHcjBvdsLPJdri827PJcQZEv8RRsWp",
  "key5": "2T53GrPZenoRz6A9vXZQadZRsEcUYaP6CvHDeJyhksEAquXmBHRX3P8QVSLwfJJw1ekutaiTBi1sxyuB8TJKZQQs",
  "key6": "4TPGPDB1iMreAGxzaUYsKdiS6wXR2DuspusjhvEkcMr4mnTLz22ZcSVDHA6R5dtKCSudv2DKq1wCcLGqbwW8BDtj",
  "key7": "322nqjBHRPkuSuFE589EXC5ooQa9KhTKmqAi52rUkpXptHJr8mV4nMqzjzHzUEKW2WtmdSqgCdjZcUinZg1q8KKE",
  "key8": "YnUtKnY53rQ8mYdkjdfDiiGM29gHN1THT5UFQezbohU2REfF7pug5VuCMdVX79EpyweTVfrczTDpQrX8iFzjzNy",
  "key9": "4fsRVBw2Trnw2LfaoKvZZbEJ51vdHibEtxgNcWLiZg4d75PhEUCwVTBkKr9ajbarqSEXKVL2rQC1fATMrJJC5Mup",
  "key10": "4mZGnPqbyzSW8vc4GTKEkErdx923maqoqtL8muUZBR5VBxveufgAvH47cQViSeLxh9vHQTnuGLcHppFqSgjN4SPN",
  "key11": "5UBsPEUfwzHL69whEXsGqKVG1f79RSUTD4BB8kiFhqTHzxwZ7amLqDBDS6XBW5paeVbrYMy4s3pbr68oTKTKxUsc",
  "key12": "2rg5aoUjDpT63pqoSJeMZsgoPYnk1z9Zs9FcjHrtZvgBJDXqXrMoHdidXReZpFZtBKMgzG1mt8K8vm6crAL85MYF",
  "key13": "5Rsx3LkQ9fotsS3V3h1BQmWVo7w5XgTQKn1GjLvJM3tzkiLysGWoriRvqA4fKeE2j7yWyEkZR3xDvVAJqMchsGeQ",
  "key14": "X8HxiGyYGChcCh4Ej1exByoiHd6oKxHny58Z7i8sFKUBNuYnc1x6x5C3fyciVx4JFxhc2svGoqrZLPu8V2S6szH",
  "key15": "5xGQKXr5m7mvERtUBuHawXe318weFgKmipkUN3jFRi7j58cnumoz3EjZijkpRuKwFffcnkoFq76ZYnzEyhho51wS",
  "key16": "2AHp3Znhw2wjrsurtLzGSBt1Ag8xvZRn2RGyzT8FgD1tc145FPoFq7ipCQ8fTBhdeZp6Mdrubufiqiq2ykKSjzQv",
  "key17": "36h2FZ2xnrozQFkk6cxuDQjnecAY56h65xizUQqDREpiGjpzqpcwxXpn3a4rrQn3xh4TmjMRm5DGYmqPemUhTMdZ",
  "key18": "xsHMMFkPAiKqP1HohrqTZgC2b8BqR7zaRMwS4AtQn5LkpnhqXcLAQpXVrYSstduqHTkF8ycp8FVmXTGnfg7hzNk",
  "key19": "3Mo4koAgUKqZ8knsFDZw7pRiragNgWm24E1tmrm9jv7ERi65tqEbdGJQppXJmSvt7bYvwLQxWb6XgkXShJDE9SV5",
  "key20": "3Ug7AbAQYX2JWM6tWXqKT7JxMhrewpKTD7MyBMFCKz3MAWvUAcGYZ7Xd3pqAKbNFVQLjTfaPoT85b8JMwGJxk1Y9",
  "key21": "5rCoDbMk4jmk1LRQqgfKhTnTgEhGCM9Ybbsrv3Df4jnKfxSuSmeRZdepNTodiWj27rHz1W6aiA27PP4Lavnwi7Vg",
  "key22": "2Qi3ykfn9mtJepWfwZ3EdynnMLaqG4xhUqbE5CAKASK8hDwhucFNu9xFQhK98DNnbqpJ1aLxWuiky5gMR7bQW9Ac",
  "key23": "4Y4WW4ALkMBGm77fEY9oGZmBYudjeVU1iDja8Yv3221YLRXP6G4nukTRShBDvJ1JXHZ3yV9NQeWxq9EphKbxijNd",
  "key24": "53hLEzHcoeNrg8ebfVJwJKroR1jwpms7Kg454r3XS3dPLvZrWezSJENYjS9oAN6przpKARGFbpZ9oYZFLZ7kJ7tS",
  "key25": "5JRz4Dqtu6Qf6Zoro8QQ5N1iZLEveFogos7S2dN4iabiDqiNciKS65WCUy2KzEndKowb4HDZGSKSqYcjrYHZ38k4",
  "key26": "PeoBi6mPgQumxZsz1k94DBeYDEHBL2qXbXGkAzf5ZmJDYREjhN8urYY7zFVjwgoT6SU1hb4mxxNmKYYq6wyBuRj"
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
