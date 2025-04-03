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
    "uZLXgsczzDSpuwoj2ccepHYtHHASWB8gxQ7Wveph8QbZUWmnJTtGpWAqZNUQDohY8dzoJtLt7o5EdVv4Ga4g4tg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ZsBEmb58WbG2uAZnmwtWxNjDH9kQKjR8NdSysB46nVsCiWNdaPViX7z4BzxJnwW6asJDGUL3qTuJvZrTyY3FMpP",
  "key1": "28yLr7G5ZvnnpZHuQFpN35ps8Jt5uQZx6BMbZdqEW7eZ5hpPSJP6cvNqsYmLerQXivZbPTNkqziL4vzvBwx41PuH",
  "key2": "3fh4Ywbvt2rAt5uAVHrTQfQfLsdTNdaqfz69ZdPDbzRZo7QFQoJGZHgQAgtUocCpG8Wn7w6CiNYZhN1szM1gjpfB",
  "key3": "5KPJ8DENhe31eP9kfmwdWCJnFa6hvBj99wrn4aZ5MYMs7aM2ATZYL77Ps8yZkbF9g7txTz7LMafS7Z8ZPaU8Lga6",
  "key4": "57kAWiUBtabt7QSFkpREKAkgf7vBQKZSQzcXcgesyEvccuf2rDA1am4PogDPK2tnGpRUu3BDraMjBMpXi8VuAJoP",
  "key5": "2crmdQDZWdNY7cYpM7vZeeHRXM46bTfcEz2npWBEubLkXdQxrs88dBdZ7nqvKnb9wfetgf169Yqs6XLpXrue7W4q",
  "key6": "61Mp5SaaiNsd1n791s78PW3kaUHwy51kHjjp78Fes5c42hXnaHqmS3W1F4y8sJA7iYVepNAi7RbEcBJqniYZncFb",
  "key7": "2zcKXjBQCiMMn4jBQYofKzrfv3WU2atYb69eUFWAdaNGFWDjbXB1RZz3opR5kNb3p95QDU6FsEeCXtTPiBvqb8Xf",
  "key8": "3JuR41ANsjji2EYpU7SXvhJHg8RbWUzP8DFhfwgCzYA8VcPQecDGrDPLYLyzPXFNEbjTsab1jWkvbfBcCAxswhww",
  "key9": "4BpPrqEYnyHwzGjbrND7hZ2SNRyLxjGs6iir1Bi9RFtsBsFEcCcgKivvjttGt1rsBgd9fwRatniPU2UajrGHUgBL",
  "key10": "P6ERhEJxkD6SfDz7nQne2SFfqNxsYZ3wVFktyKaG7XNs9ACH6YKebWLGnQHJe5eteqsNoZxiaMbWoFC6NZ5y9VA",
  "key11": "2QchGYVZ5A1Q7XGDiCmaK5L2uKz54uJnQe2E154SYKrrdCnDXwaJKT2wt9HiCafoYgFbkVwsy5sqz4CtGX7LP5Np",
  "key12": "nu2nuvukzqdxzGekZvKErETevvH4KsWasU7uMoLx2okJdzvjpJ11UzN57gmMcHHPMurRhx84BQsnLaELfd5a3hL",
  "key13": "6778f4uycyfrNaUAjgZEekDR5stXQMMyXEGANXguLfd5peMzpyua9AuUqXiB2qc3nHj1mU7SfaR8QYCDzGjHAaqU",
  "key14": "3h6DbTtqENc3FYG5wbVXwG31HEfHbhU3HAEogM1CM42J51gQLxx6pCAuk5hexMbh3CmGqN34SDq3HACu1ji8Qqst",
  "key15": "3Toyid7d9y6Q3M8qmKowPumD8dCHm2x8dxtA5pc3Qyxiv3m9xGCUxeiEcuxkq877wi2xLxonBVueZMCeSoWxtPzz",
  "key16": "3rDU7BbL1KNPq5fPJ6TtbbMcECDU26z45Kb2rFAMq7rKyf1QZhum35SzKykKa9Fksodd5J2ipxT699153r2164L9",
  "key17": "5F8rUTqLyZjuusYJFFiUC9mD43B4qoWwUM2So1fjmQfacS29PHfQHXRr6pk1ewbVEBnBEHuznnADHKFiagUwGerU",
  "key18": "3yhEnWWWraLGSUxdnr6a1AihFdFG91Gev9DppA9sNT86263DQZS8SuEnk328CyUVHZjtpGgvv9bthtu7DnVw28hs",
  "key19": "4tCEZG8swaqTwVXZxtSV26uPC1d1VfRtHHhFs9usu414fsaP1eAdpivi1AbPySWzsNVovi4HiDR2u3U2reTAVxbH",
  "key20": "5PzVfn1R3rUQMkUDFdLdUAQLk82YwNday7rbaMmEYZU7LUjM38rS7vriacJRmLq29tXrtsk49ficLxsQ13aZ5Yu4",
  "key21": "5GzdMbQuY95zdp9emiZRQnZeHSpTBsfRznsw8H3mbbk3VKYLBrtL3GfffPqKQQRZk56CbdGCHuV8spB1Fy1F2bhY",
  "key22": "4zm5Z1XiAHUxwwzUkqtkqHDu4Yx1pcVkndWtByZ2a6NXL3RmHLhZafyLK8D65bSdn43GwyXeGxVuuvmsDgYg3fjW",
  "key23": "F17TybuwtYCz8qxA2F4pdrFyckgaAH27SyNpPPt1uJ1UdZ4QqPYVYRtSrY3RPBG12XqZAdASbV6peMVzGJcDVYz",
  "key24": "3fTt3oFqY5KQfFwriVnAq6ATisPM152Z2r8AsKx8Jwac4tXFAfCGjsJ2gaB6bJWTaU5LCgLePU7EB8Fo1anZaJr1",
  "key25": "3JbfPyjrNUzjbB8AXfkVjTWv4nAijJRhMcLEEj2KBqKSThJP8pYocLnk7KfRHgTkgvkkqbUZtBWKKREBLsWgGpgS",
  "key26": "3D2qRrBzdkDtBswsCV9h26PSxAE4fwroVjbTz3vpHhTgYApDDecQQJ5HEiSrgJwFMztHJJ6N34N2ZywT8Tpcr8CL",
  "key27": "5jMkbsy66NMs1ALf5za2qBRtuCUZagCntREEMDdN9Fm2TeEoiTCHr769N7scqC3YTwkzTDis5CEoJtiWkoUPzdRE",
  "key28": "3oJq4sHGZZpZjyVeR9wLVaWeQThrDHj7yu3xTi4Twwkw4HZdcBJmb4GK5EzVHBrUo2LwCnfaPKXLzui3iA1wsYYn",
  "key29": "5CBGV2ue8Siv8mRBdM1YPP4djv5DHajWE7egjMEabChoaKoZztnYLBx7XoLsfpX3mzHt3SdsoC9ERBaRB63k7A7s",
  "key30": "32ws2p4J3kAG8rF6pumF7D8ghW7X94YceAu37HEhJewZLBMJoKSdYiEjYK5UFGuNdzyCFXqqYMrpSNp9xNrpMPPB",
  "key31": "5nqYJXXcu39TKNqnQyqfEAxayksVh1aJTvn7ag7zKp1QRZtdwdMnuGrwk3vptQzyB8fFQ9PjPrqaDRr4jCmynNWK",
  "key32": "5W3cFrtG3m9pHfSF29Jgk3wsSXJCeEVR1aLWZpBWXcv7Fzzv4ADRG5ALcZKQGx1Dx4zMgD7Gw7e3awswzS681mha",
  "key33": "59bxBWtZVz6HYwhx7wpmTGiYqsFDjeCt8ziwDtFzhhv7Y29GzK9YCUqo4xcsxRrZezEjMXnrPYTbA75bjaMND6zY",
  "key34": "3xDiELoAAzg1uK1KAwZtYxiZsCdTmX8FM7C5Kdue7jGjd9VmdSgTFVxN1P1RBsZFgeY9SASizuKiRjc3BzLiL2JH",
  "key35": "5V3yix2NdtWkBN8Si42NwQ7iUHVZVDbUYWWVXJN3AYq16DWMr7mAQZaSNyrrhVk35GkqyAgVRMNM5SvmVVEtddxg",
  "key36": "51dwUqHXLZyrdqL9XBCg9u99S4EDf2CXJkVFjGgX6Qfx24wGWZudFkZaaMbvfW3qJf9eXbZWSJqm6hmrqZiravXG",
  "key37": "2CVcAR1FErJMc59dUXnHnJszCQ93vuLvXBjdVnCoH7u3RM9NNSGNRuo22EdDcNUoY71EsdS5AeHW9tRJVWtspsL8",
  "key38": "22r8npd2ZsRjWAwtPqHhBRtKTS9rm8E885m535hn6ASsEm6hGKNWcxTEFAPg7jAXSz38Trh1JwcxcuRg2fJ2jxbo",
  "key39": "3XXMuZWPo4LiRZpQ82BF8WRDBeqzA7wkmSJyVEwJYTkTgztcj3oXbGNZHr7onaTTqKAKcxDtYAeU2E4BpmDcZGm8"
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
