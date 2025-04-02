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
    "2FrPDj2wiXLJS3jJ1tUGbAmERxAP98S8i1u57C7RiDLir6vWdUTiw3DVA5VT2kt7jBrcDcA4QQHywtZAxpqV7wHx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2s9mYN2zmV6TsT86BMWHbxeV9612kBQM848fzSD4RNeewbByct9udSbTwCpHakWmPEfStLwFyr2WGYbPXYLCUbyG",
  "key1": "65yyJdVGzs7TypmTLijgzARmF3Hrac6NcsnkQER63s4LDjuQGDUoMx3qw9HrhtuPFu7gLmVUYCma6K8EN3mwo4H",
  "key2": "24E3uQNFP57YjZa9htQdZPQc2znUg9dZMmSzEDDBnmFcb1Z2myVSvqAs4GeoyTTAo6T7qzkkS27thdp57D26Hen3",
  "key3": "3tkszRjqe8TrHMLfdsuvwFLQ9rqerHv3SnJpGVsgmKZ3SpTPjaJWx4KENWRwAMNAhvjQ5Jsg2kkqiwZToKvbrvLw",
  "key4": "3bP6TiPPFEEi1WNtNU8NMbvxGxbBJroRZKNcjmbGxjtriGq5YccFDXSAmVQF1Wt12BBJyjwhCvEoWwQ229W2a3Eo",
  "key5": "2DVxaCA5sWKhdTiHg3JmuLwnTVDHvV4sGv2KM1hBHBxziTEVCVvwLD2Nss7vxyRjhVXMgrURUQBydmt82cUEwnwN",
  "key6": "kGvk8A3yR2UQ941KMVT39LsTMUwpchE8cQAcs3fvY92HHAsxz7wVp4nJj5rgBMzVPMW6LgAH8ts1Y8SmNi4RYfe",
  "key7": "5CPcvgGCWUkSbrbBhf7xgySvjFYWxZYjr8GfxLYDrwy8Yo9s9KrhR6ZVdqyKUDBEAdULJ6YiBgMwyPLDUutREvR6",
  "key8": "3inocpf3o4WM8vArJDERLnHFy2YoEmxLKMZhjamxRJySR4p5gUbQbAVLiDnzB8Be9xE1dDULQnST7qsUmuhyXAmB",
  "key9": "2UV5bNU19YUewCmPUmqYugjgoXxKhDmtv9ULE9nA1fDe8VD4zFjgkWdFZo63JnE2WMmNhz6CsJ3vfWTdvZ4vqcCt",
  "key10": "1ZtLxM8TV63nGeqoVUaAY9mHZrh2m99SyYPBXhSR2GbZLgAQSbRxbJv4fC7JtPpd5gAaSEPte5BckUBY7HH7sZU",
  "key11": "2u4L7CM8hhkRECcepuhaMZA9SYoZwVRyXQsS2F5dsrorJGqc5jR2PrU5vVqZpZrRVX8P3NYkjoqccCf3MvVjmxNX",
  "key12": "UWccNTFNa69Jndr87HCb72KLntKjVEJi47ymrt3NuyrWKAoHGD4zH9picbSQBxCzLViX8x9xC2zmgmg7HXaaNcj",
  "key13": "3oYSaF4RdkVoU5FJADgHo9f5wJUsnrPkxN3Gcd1mBQEtvyy3vVHoxnSa3pn6oAkMspcDnXQf4BDgH1Leab3pqhqz",
  "key14": "5fJfxxZW4ypk3RMhBHHbVGsFVByTwAZ4vDBZCo5EjS5JuSZ9Y9QJeCxuLEYg9Psi4CFgUQmWeVb9KK8SviQeZcs9",
  "key15": "2DKs7fQuErqKuGadN3DHEFnCw9ubU7prGNYBYm1JtgTN9CYgGq7PCJaX9eEifyahbvnVh1FcyiWNd7euELr5KTjz",
  "key16": "3zxfJC42wSn95cx3ajqwNHcvK2XbYbXVL7eenQRX1H1dGRasnggxqt5MLN3dGgEDbfyQqaq7oXLUj3eGCyLVDWAk",
  "key17": "4yFkEtMcGhFZUEsbb4UnN6dsrTGKmabZ7j3xudccAR1BfCd4ig6w18NJe1sU6hsocyPsT6exuvdEnDEXD69TMZaC",
  "key18": "3Ji6H7LucL3JXvE6uRTg9nZq1QKbEJ3pEnteBjDXyhV9nmM9vriL2QpRg7e2UU94YfJXbGrj8c1BXkGAFs3YUPDt",
  "key19": "4BrznSGSMGsFn9vmuQNv3dotFCt8XQkwA6m959bbF29usKoqnoDQpWDRkERHeCY9w7moTd9cgeBu4Y4v9NLaM2yK",
  "key20": "eVjUU8ibXUESNV2hYXSaNji5yXrVFaSzsS738PKfypZJFNMdFWZQoxh91MYKkYYF3kiuZPiSZqRM2LoxyKrrp5W",
  "key21": "ADJ5YqEeSLD7bUhyAJFGKt5YDCPVdMZ8sTjSgPT8txT1XP7WpJSNk686jx17ngPyoWnJkgxuWtGjyBHBu3qRzuU",
  "key22": "4dPZuJsj3CcnJWJ7xTpnsh7zk6YgmBRv2cwgHZyMV25FR8yAnLFjpgU2XFaSLqN3ESWrSe3Tvy4j5u2KTQ9Eu1BU",
  "key23": "31we8NiZokzK6toVsfJWhiQ65JjvwSEmHQvKX23gDB9oxk4NycVEhLbhpf5FGJ9wbLL4EZEfCPVjTo3XadDTNZaM",
  "key24": "zpSjpPmNE229LTgQhVxUA7mdEfHUv4bm1BBFUL7GLuQQVLKUM38poYiH1RGvjQSn3WCiM4HLg4buD28djvBkfcX"
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
