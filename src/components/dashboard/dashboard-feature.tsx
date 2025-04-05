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
    "4aSBXpCwhzyUjM6oydHKC95vNv4kVhEKmEmJ939DHGAu49dQZVwVXUtYYhSP3fixfJWWuimTiGvLv488c7u2odr6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "56XmzV5mLjtiPv3LbUYwproEVtEinHhxyuH8QARccNFLtLDNus1rHayWRT3bdnu33WxqiGasE9BzgaFu7ahC5rGf",
  "key1": "NAgUs18JNNbGZKG7nbe89rXNEcHqZwQZ2hRieFJoAyrxAh4PcnmvwmCLUbkocBAt7TVjhsQ2bQeRQbcC5AXcrmZ",
  "key2": "126kQ3Pe11jQjcksdLceRNLku9QRj7cQHw4ehzvBhZtU2in679khZWcxTw5gWwKKcoTbxgUUwridUJ3VkeTptZxw",
  "key3": "36zqE6cPRy2oMYbuEFVfMrkxvyKYVqeoGk7CDDH9gqjgVKbJCqsiU8XsuqLq2R5iywmM7ZUq13rmBEvJn8XQvY8N",
  "key4": "4RfgD4u12NqrX4YmDfosg6tpH8pqWU67CKz8WEuSKB78dw4SjXgu58HRkqu1Fr6nTWhpyy7n3QSg9UM3tDhkPFro",
  "key5": "4EwNkppuiZGreyWpxYFWYwjXW4WbhCJSdSmSPrBfh6d1yVtB9pyv1ixtbhBe3GPWqoxHoRZyU2cdeUVn2gsyXBYx",
  "key6": "5LFFVgUNu7h6feavY9QBv9jqMYvQiti1mchugY8LZ3bREbo3mTjQUsBTjG1hwGqJ8XJxMezeQHMaiuFqFpDJciCn",
  "key7": "3c7J6kdFYcQeMjCta6c8zJGQVdXGzETou3XherYgrv8NG3bHtTCx5ZB4zE7wBGhfu3gMypDNo9ZmdPGSqqe66qGX",
  "key8": "HzSFBjcUqoj1qPvhRrb5dAexztZ4vrnx3WL6AtB4U2CecAK2LUxvibu14GPEUnM7nsR9XpYKK1ZDcwWtPxNHg4D",
  "key9": "2Laq4zCz4sJoBx2PaLkmWpZtgkqVHK4iY9PfhGg18yzBhbkD4Q7yh9RFrR7j5ZYiphxXHJ7QQuWEXtJbXFrE4Cfp",
  "key10": "2fvWCVP8H9VMSLP6PBe5jzXi9ysY3EY25Fn2tpBJETvUJXqLHXQqqNAHMeiU17yXGNUw13msRrUPAfhobozBwv8T",
  "key11": "4dmZyMg81L2ZPbu8XpMH8moWvWoJFEo37b566aWvAZ26VTPnNQyu6gERA4S2yMipe6M21HGEPdUbyGQjADvTFzNV",
  "key12": "3sxW6jmXzQWkafNFNR4Zykj61Sab8Zoc5KqULfKLWPSUgBduQDYbbzrxohFY5tjjgx8KFKGnBnxbEaX97Tcn6rUB",
  "key13": "4kgunX8QU5t8MR84g6wY82oDbKbV4BA3buAjWMC3ag2bpiAmd1pJ4ea18WDJtAFQfz5WSY2K7JMpPoM2r1Z8fDTf",
  "key14": "RnzJ5r4EUdv5imt2LLAd82DYURWYZQTGW2yA5Kf7x4QFQgJiBZQuBiNogjU7uU4hBkfXEgMYLVhv1bRip1jkiJG",
  "key15": "22vgDDobDRT7rsAv5nUarKRjhsbPjkMcby1GPdE2dzzu17Co4m64wsgT4CWKPh9CMNP3mR3Tvu2AECJGdE6D3JXs",
  "key16": "3x4QkLeouTJtwB5FDyfqKZMuF8RhqHNaSsNUwpenMRoZT4KHxMC7Xj51chUTsuhL97HrvM5fXtWZEDPcegB1i2Kq",
  "key17": "2c6NbP6th9A3UGLL9tjH2QJBwidKu4LNoBVpiKPqetzYNxEdVXxrfqN4o4bVk4n7qJ5cTJ617f6BkgUPHaEaETyn",
  "key18": "5vqaz2yeUXxsk4mrqVUuotGzQGGbdncxUUpF1QgDJBitxJsbFDn1utaFwdtZSTXC7SvdDo8zMv6BhdwMtaWLsQzj",
  "key19": "56ipshmiUGfv4D5kUWisCEFfmQbBmsi5EYTZe6UbWtpcC3XYyCCXrJ4m3vzTmjYZf56YrvsqcWPiKWFFpKu1yT3C",
  "key20": "58tLejXFpJ6GKZ8DtKKzpwN2fSLJhei6qKaTprFR14t9pNMw4prQGBSiGAxeSpkxUQoT8A126JLa6EnDwT383rdY",
  "key21": "5zeVuQHqZxQ54j2ZFgguNuMdbooDZhmNHHX3nJFZrNzsSGdYbXVUypw6wYaAGrgLpXGFxHmuU6mMjByR5L7mAuin",
  "key22": "42bKS3rjuopqdWpr1xmXsXr4apUeRXQ9qDz3KAZFtSHVahjkTeL6fv1YeNyUp1jjBrPaTdFjjAmj4ArYGubS7DQa",
  "key23": "YbwGsyWsbbUxskmhLAKdL9sHCkwkTA3GFyjAjvC4nWrz8iqFtg9AudPEP1U6MKecLp7pbhkWs4nUzcvRpFuj5Ph",
  "key24": "22i2ieiAXcmrGhZmbZhtj72tqTt74pBgeWKZ4J9QE8SQSk3SuA8iTQUKk6qh5RUJa9pvsipPUKNtCkVHMTXWgQmn",
  "key25": "46nEtTzEoCFUCUj8pzXik1k5sCNVY7EdLD2XCwbGasGRzgjnVTiuE2MtTxtCtSxqwHjq1ugYR4sVwJoXUHxYqXyc",
  "key26": "4K6ytcx9eA4vpXvsuLzxNHTaCQyMqGQTwheQSvD8pA3Kip4NapTpvQUMbRGZGx7Q5rMU74y2MsDvBBDw6FYB6Tkn",
  "key27": "tEUi1nrkZrm7LkcsR54vvcEXMKTwfNRWyGiGG3eXxo14jE9CbJwZFHoBRBeXQGJAMonPf8JC1Cn5nEwE2zdD5nq",
  "key28": "4pTtWoSd36qZpbx51jC5vjNE1EjEErhLUaoSwjKPNmF7aYRsSrc7LenHjq1sztV5JShQZ2fHrWdZ1znLwdwoPijD",
  "key29": "5ZhvcgrJrJ3Zo8KnaaywtJtHaodr4FaienNUgWsrt67EaiY6n8mNVaFYVJnLqSfcsYAdVY28szLWxChoMMWtoe7v",
  "key30": "3xMNpEhJ38pLU6v4beHUuZnAG8fUHtr9CSD2tn6FYQ6uLUeNb4gtX13Ycs6b4Pmy4XGweT7xQV8CHnsuPi3k8jEY",
  "key31": "3b6fzfSwZP2RZVwSLwRor2VRXPCoDJnZSDG41454kqUzjfPb5b3YSKajvseXntKuPfE7RmxvrwEMiQFJ6w8Fnnrj",
  "key32": "4PuJeVpAsRRu4sQn9AJqvzk5EUjQSbJ9aEYEvRNYwNUZXotGFyTTKEZwGGzg6RHz92eSJ3hjm78U1PYCxoXWeZQZ",
  "key33": "45iD4RBMYsw69QQ6rvFhRMXQx8UP4fXfZudq3kS6GTDV3c91fWFUscUrS7HQnMHs6TkWwVi2WuuUy1sqQtpEdQLr",
  "key34": "2P6XZfGeAgV46rkRVhCWukc6MFfA1k9tAhA7A6M6wyJpWNCFiT9yRK9ZPozv6mJKzRNAYb7fcfWWsGYtKL9rFNU",
  "key35": "4PQotQW83UougNN1RfMVrUpSdS1yqRTtDpSvxwsCfP3YHAoYBTAwq4GQR3SePgBgW1yBMrkggPybcAfxpBzBoT7y",
  "key36": "5X85z3h4fV4pKNS48h3mQvRNrhRsQwH7m2HcTL8xKJhufwezh47YdVutbFNfq5LRJKjht9pJEKfJPbobrP177ztp",
  "key37": "2Y6eJPPSqo8LczTEmQtzeM2GadzGJP9ZSAPYGfdTssTAbJa7Ec2BZ8Gs7LPdMCFNFKTaoumYdnRjWWjKjWehXeM3",
  "key38": "32XaWpN7inXwXrLmoGH81s4hGPbiAgA83pCxtUSvsD9c2BKgqq7xAdbPvzQFHPaxgWtyRHdMRcUAFmESNJJkJ8L3",
  "key39": "AU6Lix9exz7PGqhz89ws5pqKk38Zi6X5frn43y5gVgsUn4eCj7JCbL1t9px9DRvmjHstSMHPDeGvKQF95mSk31E",
  "key40": "5oHGXrtqjuR2DZdDh6Q3chXYzJCjHcrX9gpSCgtn22xwqJgH98xEJnoSSkpsS8oAb8NDphmC9bUbs4dK19oV9K2",
  "key41": "5NSAqtxDiLVR2jLXBT7kSKBWmdnjdVZHz8Kfzz2DiBtDkxe3ffR4v893yev3F5edUYcJviAVuRSJ2F8vPKzNqsRz",
  "key42": "5FziVNzQtVtbgQA4GMvXXK6X5gJGd9zJwLgfm13kyBTBkXo5kH4C71bJQJD9ZMf6NK2NP3CGKMFMujFWAPqCHYQ7",
  "key43": "gubL7VgmpUFVSuGQq1UuuweAdydnQqtwVrCo4NnmzjwDNLtCZyQv13VZ5kvL4xXQdD34n7ebqAViTS2nh4k4BM5",
  "key44": "2AAXtQptUFkrMBGuhzV7PF8G1N1G8sexWExbcLnJdLYmWo7bvi7ZvEn45NYiN16dGJb62k8SRU1d6ovbdRHepNK6",
  "key45": "2vEh2K3ewE9apNS7kaAcTMU5YD853jQN1iWEDT3RBmqZw8NX6GLS7mF8MgaFpGiB6JLgfzZCPj8XSRfjbfmvuVbg",
  "key46": "5VRvGrY2Z1YyMWiomoECtNY2SrgQ1tGH9mU4UjzkXqHeZVj57WeLLyyxohDttPr8oPuahrAT9RE61TatpbJMVQNA",
  "key47": "5bDA97hrTAkpK5oaQKh2fhD9uaBQfaex5RvYr66ysgHmCP9rwfrKjTbJifJWQ7tteAjUG3v8mPkGPyr7xEaKNVRH",
  "key48": "qpHxKjBfoFpHsBUWDQz2cBv24hVNGdxoHWZ5kuykLWGMDqX4g82n5WGsRCtp9tfbL1496aMiG16tPnMzbdT7HmH"
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
