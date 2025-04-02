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
    "3DgwVZmmvx4tGY8oTbhatYMAyQXXN8PSzTPpJEU9Ky9SNBASnnAcxr1dx8gZUb8whGjPkKDmyegBfNwm9owDzREv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5JmCrDryfDHHfD5Lv4CuqAnxLTesyz4mCEe3y6KZEEBQrTL9LaBj6LaAqHgHpbkrtMZFf9TsFNqYXamZdKKsd5au",
  "key1": "sef1jB9eDhMCbp1pQwA5crgFRTT4bMg6KrvvEUZrgaNmUmRoDFN71D4ARS4S1Lnbg7qgByjJxZ7NuUHkUrmAKjj",
  "key2": "TUfMkvs699goZSptRPNe5Sxd3qHeDZ1BYbCgUKFniVBG9JAPLTsMgZJBPyVVKF5wvVLkaztkkL76R4bPAPBDpxo",
  "key3": "4FHo1To1F4rXDBJMDA3GZC4FMDdCbaHEpTgtKYBaFFG2LNdhLRrg6sjDPjMgRWkp1PtsTV6SSs3ZFYb2EGYydjMU",
  "key4": "5GecreqZR1iqv9giPPtPoToaacB22fFRAw8Ea1btSEUTSyGTe9ccgNyNFaqUhY1WJUm35N1BEtETz1CsTYZe2GaS",
  "key5": "63GwNGuiafToaDajrbQfueCMPLRL8Gk9wGtvexw7cPNdKRXW1SgtRySahxxpJCcFoKhL3WZATAYeJjt35tSf1nPv",
  "key6": "5jswvMEJWL4WNVw37F3bZM9aLTwvw9y9T53VM6QzX19tQims5NNw83ToazyjRWVGYUHvY5f9ak2etdHKYTY3A2PA",
  "key7": "4vM12KZseLNUVK3xTuzQtuira88i3Pynvzf3hJ5txVhWbkPCRqEKNwKR2N1pBNxKnD9LBzqtSx7hCSw2sRNNfpZi",
  "key8": "3m2P5NwvBshmLyQz14wyY7rEeMyTVrh54az5Lt9vsboxvxgeDByD59dTMHtGoXBjCKTPh4EnANFPua2YQ9EumMfs",
  "key9": "2rYpP5z1LXCo3zJC6KLicFe3nCTqGzd1Pp7x3Qfsck3EeP1avQibmowobDGm9XdoGLVuTgoYALuEC4xVV2q8rb7v",
  "key10": "2iwcqg3yHLt3rCHiHHshbEsqb9XTn2BY78f79oGmtQThQLgkmCoRVE7XS7dbYfQCpXZy2WCf4MczDbVKxKhYhfE3",
  "key11": "3DESwLESKuALuhLoZLMv8YByYpBTRG8vFV5WzNDbGfAZv1qmuowJufZjWsr79LE3JTwANkgs3QfcPGETpAe3N8TX",
  "key12": "4QX66qRWzSeGMcRNyXqNEoBpGM66KhvKs3vUgP9QfP2V9WsGeUPNJoQ99sxfJybQFG8MsGb9SG48RiLsjpVMtrbb",
  "key13": "42QUDco3UrkEKv4fngw1pf4yp4V9N8NfjuGtDZjwgZMH6VmqGgpbxYCxkPGEzjePpPZcLLKxrdrdvn18xcJDFzKu",
  "key14": "28CwqcnLYje2ybqKtAaSbStL5GodxtqDiRrPLL1V4mp9Gd3oU7gvSwvMRJGNdfqwk1HgfKaJc7un1dEr1nrtxox6",
  "key15": "5E86aKnPvuryPiUZvrc26XLuCcHkQhAc1AbwDYhPfhmztzgFHUHMfd4ztYkaXVVEmEAvXzsygF2axUE7VMKpLLar",
  "key16": "Lkri83N4DuL3y27LsCtzP8mJ4bXryELZ1et2urwPpcyUoTtKLBKMWTHJ3338RG8JSd9ZfDxrsndMv6QDzG8Hh6E",
  "key17": "5hpnNsv6buoxpqd5BZ6JnDGcsWVHqfK55Gh1psPMXidFWeMfJd11YM53iFWq7EQCY3B8T2Sw9Yxp3nn4h7hZQZvJ",
  "key18": "2rWVDJBZi3gUbQcjWJM8HVBrz2sB3v3frTr7yPAw9ZUwjisC9yDX3QCKwZnb7XdUWyPweeyUyzvpUb1FDMN5SMpr",
  "key19": "oQDRMHNNMr21Bmhnx8DbEmfur3vVZTWWcGMcv6uPTK7Mi4FDjurxbVeeeek8nLVX1FR1UM4kmvvbkf6qnNfrT3C",
  "key20": "4o9wbX4qBjmiqok56yrcgVBLwYDzHETdMQqvyWpRiwCtZwnTuzgpQ7KCy4ggQcerfhU2c1fGKPkrQT5F9pKXDaCm",
  "key21": "4VMAWYEN5gca7aDTpc634abN7skZKNPYYEzkjMqHkYigv7PMaYDmquj2BY1g42roD6CYX8oAm2UxVfBpAN8KGT3o",
  "key22": "3Myn5WMERe1WjKggSQd9nY3w5sQnvWYzNjE3zdx38W1ysvJFGa5KLeEQLby9CgYbrkV2vJ6RPN6KTrLEHtF1bHD7",
  "key23": "3jqH4GF1y6JaozJbxwGdYkDgf3rCeGjrCsvohZwAP3rNQh5RMW6S9czmNG4QhPmHR1VcC8KZSTmqa8BBBVhfbiwn",
  "key24": "5iQVP6D4EmMDBbQE97AfAS17fQwbRdxEfrSuNBsTaGbjLc9QLRS3bWGYjdzybMSkthiND9xtFUDWMpfxeojWfCHp",
  "key25": "eCucLSnCV8sh56bg746WLTLgzMXUsuBX6FTK9RKeVH6s8jgyJMfSH9YqUGExWVRTeVm5kGxbULG9HtcEhAEKLt3",
  "key26": "3a24zqkeMYEkrPiyJudRYLT11VH8MEiVeBFVPTUy9aGaJhtppoSohTTi1Z18szPtgc7vupKQQMKzzPDwDnsKHMNk"
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
