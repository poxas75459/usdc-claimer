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
    "3FMQ1HzBAJY2ap3E9GFymS6wTF4AWUaJdxmn3WkMNq6BchTq7EEd5o4KdZcw3wkdieHr6fEokopCzuHTBrXiEWCm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3uYAG2S9LibhcVJ7RWRDiroUr1UDuSmT7VtfJ1SvW21H6KDbGG6Pr5B2Km23xApMTeAkdx5uFki9VVpCP9pcyeu8",
  "key1": "5ifrj16VUmpZYJibCNoR8e8hbdw1hgen1QLo1dumaQDmtk1E7uktGQyv6oo53qu1CmgnpaMTbqcqxo5EUtyKygD1",
  "key2": "4uLzqovzyzxrk3sdmLaBF25n9Ss5U4aYM7Y6woae52ZY4Sho5yiwUshmo5n58w4LJGPQqBsfQzjfWeAz9PP9jwuk",
  "key3": "478iQnAcSL4yr2vL62t5BM26D1Y6rgMeq23si4ZPy2TXEnq4xT77mpR3gEqsMYdNctP6vw6ukikNp83skv5gqGQk",
  "key4": "2uGopWR4hzDzEGmpgkjXphb5RJkTHcDxg8DN9m1ogSrT38r3uT5ZbUzNnKhR4wfPmhVmuq3rVdXNa5zo7cS91EcN",
  "key5": "59N13e48uf8fDbCRTUZKYewToBYYx69zEci4wn6VVZeThhdBimPxhwggjbfP6V8ChR3bSWKxK5bqQbeTKeshQpvX",
  "key6": "5rX6qh1hJyHjdtJk1AirusYym5gYji8TrWUBmCPWztAn4xvSxExssmAiewo1FTbFnCVW4cz74aqzZBs8kUThLNcL",
  "key7": "3ZzzEW7m4ShpmgjDKbqBCStEQddNwCMGPpC1iPjoZec6Uhi1oe14SCiXPGaA14dfzVdcMQfu2ZJV7dUJeJkwGVVN",
  "key8": "67c8hQK98f246H9o5FX9a3Yauh2pK8TXXUUx86k46U9NUbyK4k9YjgjWKfwe19p75guEQXYE8bZGgLa9ja3UU8Pe",
  "key9": "AKzPyr18TF5SH9KjXDj95aFCG8UgpA1U1eM7sXkCfKnBkAoZAAhE2geVsGqVFFi1Pb6NyTSJuRb8iHdYxc7KzHY",
  "key10": "2cZdm4t7d3ZvBeVSHoXPVDs9jb4haaAizd4YmivA8Ze23VKh4QZb1xZ6Rp56bStQLQrJpobDvKsjcq3Da4WYaDyV",
  "key11": "4hxdr1yEVyizcjwAhj9CTTwo6pkJaHvGnvKtKsmkM4JttgRb7QBHDjKwya5kEKLfWxsuPNst5EzCCMzwxLuMYnrN",
  "key12": "5kiwCjebpYvJbCFhUbGsxvte4KmAoy8FvwuHV3gFnJwiuy4e1kiGPSDHw7GwEans9BySXL8tEkocPFWKqUDPSLLe",
  "key13": "2pAd4Kp6FfHug3CNpgbHwnP9QHbJgL6or2nisP4PzT26QLk4NRGPMrEHMAzoSxu9D1DzRacbwPhM7usmESVJSpfQ",
  "key14": "5Srv8j5vPnrwAogdwyuFc9WiXieWXUydJAgNuXJgasG6wGK4CLS6YhwP5rQQWeZw6wyQzVBeYnyv1gZNiNMWghi7",
  "key15": "s11wZM6RLbrk2cC32YjAi9dhyj2qp3j2wE32FZhe1Uv9qAHX8KjvyJ86Td5NrDPM5uqQB55wEmEbS12jnHZw9rn",
  "key16": "2nBMNvgg1TPMAXiqtG2H3cvSNXrbR5Y3FvK3zUswsGHVXUM37qks8coXdbBSNs8CB7QmkyjDJCtCj5H2S53QyNHG",
  "key17": "ufZNbkTn3jf72g2rZPnqXCi6WGs76GJFtdEgD2Jsix1uRAAkiPN9o7oKisXmq8EEW3N6MTegmcXMahEPXbHhixz",
  "key18": "4RardNpwJwcyQLLfyWvHjXsXMQGZyHJ85pqRSdPSUpaZpZvrEKfrjGc7fo4YYThcbHeFr3oySyAeW69TcJb6cQs2",
  "key19": "4KMi3RnyhNtf5FWbU77GYZtfpy1Z6vxXTry7gJWYqjm4dbQBDuQPngEyY9XDM4APUNfyeeUrgQ5FziN1LfjmVF3H",
  "key20": "35poEAh1WELgEaCEyTWeRpiTrjfhNEDZBSjQRDk4jQobbsdWH4tRRTpHPrMTLf8ftL9Tcpb97hWz4sB1ePidjjrH",
  "key21": "JwbibZ2AovkWrUVXxWd6pzjTie2obhimP2q528VJc5DZEDpR6RHsu1qyHuBPFufYkwN3eCdvDQFpX2ikEx6PdVg",
  "key22": "5DpzwfFaonSzMndFAMTAWXBS6TfJtTUHrax1CA1b81tDdEreQQpKfURkhG2gc6rUxgvef3bLfrvAkqVuQmN7SUXS",
  "key23": "5Tw52LFZdSdR76oibgdNdftkaKjKtnLhjTzNCuuzJBju6ku6qZPPgE7TNjQZ2yW3j1LXgU4SxFTTXKNviZg3schc",
  "key24": "ebrKtdVmNVtJb4H9d6xRbMnJD6EEN4qcLYbCWymzUdFy93mwp8QNynVxnJ58mTHQpnZVD8efjyb2wWxChm9HKKi",
  "key25": "5UYxJpPeXNNvXc1nfSmJe2HuFJqE8DDrE28bPxPfiDFc1H3YMkftB1n1z1qkp9u54yqtWKfzXDmXoGMpukSxfjmv",
  "key26": "5aWT7caM15P2V5byHsPPk6WBBYGVWQmpa5rBmew5Hjy9bSPB232TBEY12Bd7oFUtEisG62azttJMEHjaBGP74pMR",
  "key27": "2ifM31h2yXUYTFFw6oaBG3BRUAkYfNsyn4ZAkRTaNfCCSBR1K1MiwJAEcnZj4nPzgm2zgzJiawj3EZejiLHfBqvd",
  "key28": "64frRoeP29rGi1pJG8kFEJTcE2PST4a1M1GZ55WNMiBGarx2aA6kvZrGKLPinKGe9akreQaPVEL1kocGiNTwZEK",
  "key29": "3v2dbnb7qcTTHNKHCWawxtE6fFpspeyRfQBZeximbAXfjnj8HykgTdyp8AE7KWFTRyWgGZQpXBwj4LJM1XqBa9GZ",
  "key30": "5SN4hYptTue4Hc5xKegYH28gSpuTTXjqnaAavHeN2dtsEwGCwiSXjEsYadvoBbsFjir9jRjYTbf2fy6wRyBtKnPv",
  "key31": "5A2BoSSstmG8mk2CtwXLzyYzQa1pKfLPzQ2s6JwwP96nFQbGrszdET7kDXtym5wEMzkNzShK737i1izQ9zreDi2u",
  "key32": "2o5Pba8Jw1qS7iTAZ9aBZ5H4uKnBDJY6zNPckQAaLMut69VAyQF45WXfRemN8RXRvUDFa8PLGUE88sxes5bdrogp",
  "key33": "4Ha4WDnie5hS4ufQfYARe5KRjLXbzX43ZstzE729yf4Mf4NhzhbTDjb7U3uj9fuibqo5HsNn4Hi816LPt3KXBMag",
  "key34": "4jqTFHwCux1n9nDgLTSQhtEvhrrBc4GeU5pqsgTG1TPPDivbjHfKiWcMMHJaQMUi82A7yPkcAcyJvpi55ek5kA6B",
  "key35": "mLVBS57JrY6J3fnjjsvz1Z5h3D4AWYhnfWUEtUa58s2uUihynWuJ36zDK8m3b8XKVELS6WEyp4PEiFa2q1RYfVX",
  "key36": "2tauAoZhmVYF8KLDAcMfAHrmV9STR183gfuRtQBsbNXgMr13u4DgiwZwhK4P9kGKjkYDYCqB6hZ4Y65w95iTqtuz",
  "key37": "5ujNonTL5739XJivk4wscRov8kA3dKgeKNnifZe252f563f8HAfXjJC2XmYskeWETQEKvDsw5aF3518Vd2vWM3Yb",
  "key38": "5ngN54yDBrqDtJb3WVWoBv2nEjKvAjPj17duSLMTAxjmp9yzAsvoc7A6ineW6gB7fPFDYkMLMnVUyoBd3gpBYtxz",
  "key39": "4hfD3GLKm9zHkLG429Bsg7mFiZmDHkMBqdmMXh7uGSk9xqLYRgbGQyWdsWuiVzguNprnK9tBDmCGqrKD62NdWZK5",
  "key40": "2yJRebt5hobhMhnmCkmzVpCrv5DtXmqqaMyYYKjBouffF5AR9u4yxRbLPydTJ87qcSe6ZRHZRLsYjhVgeBBdwSfd"
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
