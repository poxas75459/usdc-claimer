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
    "2ATiFJKg3DF5rQFYgwFZqSNgfGCK5ytY5r3axrwrKe6pEBMRvLPEuKGqNqZj2NTjpwAdGfCQse5nQ2zu38GQbvTK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "fn7gqZK9VkZmnfPSMbjEPrQMNbNyXB1Vg6PjLekxznVurM3dj4NXKFbzHE1R2tJra7xktu5keKhpemagmMjhHbr",
  "key1": "54JyW5xznrD8QNAfEE5ksu4zKWxzX151b9EVsSQbKfcrtmysrranwi4bHtr2H5CxnASZHyF8bJQF3QmbmSMEhoqY",
  "key2": "MEBbkHUkSxdd92oQ4kyvzzKmpJHkq6yHoyzyhdtq98paUuHC6Js81NsyKyFRSjndpBwNadY64W1HNmbHHFcThFQ",
  "key3": "Ktcg7kDoUHxH2hJpLgAWD14aSVGvvD9PD2cL1g6RYmFYfNLTyAs1Xpu7x9JYjugid1rnKk12sVbpPA9b71vSUKM",
  "key4": "4RT5rWW2J4Y3XsQXD3jVJqTX2aX43m1ckRR9rchiGd8kB8WdXng8Bk1GK8L4pZxSvn7tmKVpCuNhFiPVGSWJAiUf",
  "key5": "4ZAhnkBcJMSovBgyRX9dhu6KZroFxRK6WeucEbjMDak1uUCxhJHkYQ3njG5sKXcGkLKegh7kaJMesX1ghaq68Fpm",
  "key6": "2Ac2dCtfBgw4vjnYYMfzQY7ovgvy8QJkVd3xRvy76F81kXetMgC85n6FBeC2EnwuoTb9AQUhDd1VdLQg5FMZiWQd",
  "key7": "5Znr2WxSkRxW8zKpxAFFtmGmSRwkSQJ3ohVikLisdNKdkJi12rKYYVhLCf7ZG2UNKv9tQBFMc7wtdWVfoWvPGXf7",
  "key8": "5nRV7uw8domtgkqCoRxYJApzzc6E1LwoGJ1zfdcBweiB8RMz7RrYdC4nCTocNoTghvZA66cvLrqbWWxWfyBrpGSx",
  "key9": "4XPpTi5A97eJ8B6qvacTiYrRKEKp7q6tjYCoUjvhUmBg5UiK15c34dzpn6ZgmRCxfQkycMoGv28nUWbgaEWLbSmc",
  "key10": "3LD3t73CMHrcUeVaRgJmy8AwLGUgYfX2W3DmuUae8guXawFmdW7oZ3w4YmvzhR89S1eJeaBjkX7R7L3yvpo6HsgL",
  "key11": "4kdGg1fWt12vG5vSD12YEDJMCFBQx1QTnvdA96TkPePGSbSpM6kfxychijA7L5v4fBEULQbXmAY4Pc1CX2d9nQxo",
  "key12": "grMuR6TgiHkCYbNanGeVaDDbPoxPcXXVJcPbyjWsVttC4TKqLQCrbc5R6Vtnzybaigp7GGwSwCuz719NS2qKi3C",
  "key13": "3fns8q9ncNfcnvVk676qt7pKJavUV72NJcb54nPNpSdW8sH529Mh2nFJ3dWXTcJC4SVBEbfPeor12ERvoKUiKCV5",
  "key14": "GvKsKQaDUN5HLyEHzdCwbEbiUYsK92EuBayJrpTg6shGQhwq2desYzQKnyLZKSoK419ebyPuom6Fzz4QjDps1Cc",
  "key15": "5fk4QLr5J2Pti7ANr5H99ug8RyAAyCPJzcRBDERAaxZrxN1Kmv678Yzx1MQrWE1jynrEXbZLLvAfuzdk4o1bzQWt",
  "key16": "bSvtGWiDwqY4rxrnKeZmgAeCTAMAk1JkUgJtR68F6H8m6Xn9KdtoN3PRha87YGQekSJgaNYru1fExLwtauNGPMN",
  "key17": "2FPGQBMxLDugBLaTbjxXL8JAnTdNt5wA7iPi5wtM2JVGbjQpBFW4NXn3pAq4NydbfEoLitT8Ak8jAZRS64nfLzLZ",
  "key18": "38VpgiFRchayu8DBiiRLddgZ1uX2XwrVGJBfZxsig8WJ7vvANED8QPqig9g8dDtVdrBVVNSuJvrnAZpvrRgTnRhj",
  "key19": "3PSLifUeN9TNQHr7Z2AUtG2PY6ptTJVG9suiEYYWCKmJQkxTwb3o1iJwnGwv9472yxx8HcAWuGvBhtrGZfQhh32E",
  "key20": "4SKa9y1yomcnfChA15ozhKbkWZoPRz4F99TcxGCbgqKYGboV3dsnjQd5WkaKeDWyN5BrabAdQdvNatkRN4jj5m2c",
  "key21": "3auS2Qq5aYXZUvZA98zNdJdZvTc8y7qr5hJ78c4jEDi8GC34MuiuEaFQ93iXhwLXSBd6zHeWgPGS32yF4BehAhVB",
  "key22": "3Gub9Hi8uAmHCXRsz77g7qjpXMYLSDL3RNwVsugMSVaPicmKmHs8NXKXuhiv5uGcaMh58H7EdJFnnoebxQvej9cy",
  "key23": "5Ut9P4poj8HCQut1znAGFc2V8DJ7A2W6xinvwMXTRsyRBM5Gi8ehE9e8yWeoVXAzqi8GVRTsvjhBF9ZMt5NWw9FQ",
  "key24": "2HJPNhoBagfW1stZspCTdY2bMDwRDyeNnvakCLYDgZTbdb4qSS63YfAbUpGVxRfCEctW5cdAdi33qXWAfhBQCNqp",
  "key25": "4ujAGo2Z1iWZsLv9hgu19JRLRkKTmWzhMN143sQzcL8MgbCUF53tfJ5mwvGpkVCMdizSx8DYJQK6Qqa4FLFgqKfZ",
  "key26": "61ZnH1UQLE4oXbn7iKSAw5Fm75g5txReLHeb6QLjBPiR7Es1qMWTG8jStuo9Wj95prbahyFk1ZM8SqrhJ2BLK6oa",
  "key27": "48b2QdAHKCZdFdbDd6ZjVKYeV3c9bA4Tz9j2BkneSYZwat23u1va8xy5xryr1HMat6LMuyvAqnvENMCaozSzLTLL"
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
