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
    "3Uuzm7TsVvHPLQ5Xd7Vp5tz9wXqhHSKRGVnPzPwo2VaurTijJHjBmzEaWpBwLVgSggQUknZPAHmKKadcTYazHrA3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "6eLthrte76rSU33QG5XrMVBQCP2UQBvuNNvRHpfasMCfmxCaaPq4KkXn1vyrHxqRybHh3yWw6WRzWY8ehTwRc9x",
  "key1": "59kGQWyVK7LP2Kpx6fz8YAvqqA3cR67473vUdiP9xyVdmd22Ngaj1vEa4zw7kjjdUqxFiusjwsu6A8beWvRX3Xx8",
  "key2": "VG2kKJegm16u9EHz1p4ATqSjry1vMCynHWNX4TCTuhoupM75oomkUrtGsS2m6Ez7zaq8TomY3rFmc6XXkoovnTF",
  "key3": "5rTHNqV3FMouLsQBk3kJ4VcvWdvxk8Tr1KdaRDQUhjfZAJYg3i4kyZEvHXnHRbZKxMHpNgZ2SUE2ZGajuAj4Let1",
  "key4": "55cpjUsBipTMCpZmxx39WeoftdMdW17fAjgXsRixGoatNKXSbeC6BiH7PS3oU8CEizsuqrQJj6ofNjdAAYRKkzGv",
  "key5": "3Nq4zybV9QEnfWP6qNCFgGDKzjA5tsd5UDpnPijKpQkLLEwGRjmqzyoJHNg6mq7saTVy7icQP8dqytQuotdymE6z",
  "key6": "3KZUVsdiaY86qK53BgemsomAPchGNVaWr3HYFsyYhuaARwuyxonbZH1YNMUuryeE5gpSietGFo7xuBoHcMnVh99h",
  "key7": "3gZ3rsY9VvnZ4yYUqug4xMgcy2mbf56oYTHWA46k3oXGwtSPX6vczuUEZJG8qTeeHYxWcm5ghJ6vTagocZAf3FGJ",
  "key8": "3c9f6K45Xb6hsVPVZtXvKChRfbkFbfNYjvNrFkQVQSiPXau4Qy1y6ALuit5sxJi95RnG8LQVHCpNu2aXzxeQk7Fu",
  "key9": "5st3RkbU1fFeJn8uH9xUmNm5Cgrt2PhS2CahYMH6LdHVPdkJ37ZDZ8KXQMPownU8gTbYLnyrQm8PrKDvi7Zuk3mL",
  "key10": "5KMaNAPy2wSAqya2NugYkbzB6EJsfk2WwpjnNjKFksJSQBrXdFiPuMbfyziwJKf7Rgnxa88TWEYmLvY9cayRc7oi",
  "key11": "4DfBGtWnP6WL9Z2cg9NSqj4utzAkBPpXk9wAb19qj68CkHADwXheATrYShxkhhTXnYir9ey55NQGK4XGruYzkgNy",
  "key12": "sUpEHTLcUD1HYmfhbMx1zrE6fRxSKSiWQQoS2keakvcnhp1QSckpgH7m7W8hd6L8QbVqLX2dxSCkn5GeFQvCbxk",
  "key13": "3nRBTCLEgjWzLG4ibmWmiktRYaA9J9JS5tRwn4rRkLR6dQtfNgbpJzWAAqim7NzJGHUje8KCrqfKivmna81oQNC7",
  "key14": "4WBcx9LXjyMDWpxwFqk2aGqxBYt8uoThGmUzYVtr6anx3h3nr5rQ9uxqenCFjjE1qaubcpowpbN8hyQCdFE34kQs",
  "key15": "2qLZnaGGXWtAfjqFPXGmCEzkxdgXkYWktFBeCE24z8Fy86Tk8o8nEeRk4vD1wensDmB43g8rKxBHCiP5zMinBeaM",
  "key16": "4Sijh3grhHDxDLCniFjFE8Y34wQhr55HcfHqton9VkSRMWkgscGEncqcHsqhSN9Q9Heh5MHpJD5iNkC22dPWkRR6",
  "key17": "4BkDpFyiECaL4gQ3xdYs4w5S8qEjqaPhQsHHJaeWcr7pdMEuSz2tLxkTjeovN1ND25Ef6yrd62AkfMXrs73egjZc",
  "key18": "mmXM32nFTbYd1d1ptR5GAp1viUnTp1e6eZjggrbz7stmwDJ14723LQpgBsowJMeGhhCHK5NpWQvBtazfc5755qZ",
  "key19": "2ZrANoRBj8e2DB77RhamFbq8warNKH3Fh39VBquD4ngwKjkRr9uU8FVXQ6vu2gYhHz2apVuhGpb6yPvUgpf7tHy6",
  "key20": "JvixERpSdDgcv1dUmFsRSWBW8LSPxtXfVBxDAZvVXmUh679WgTwVLXyB6uDScw4t1sVCjWSVsLadP3buJPsTwji",
  "key21": "2piMyd5gaSXWAYPstZo6mEyyiZe8pZRAK51aKUf7z5JXqJxSXqPBkzdKKbQLgMsXWqh49AzWKsQHnX246hcS5yJB",
  "key22": "3sSTKYH25fdkWYDJvNPdxErQnHibV732MQwmo6iyYd7Gx3tMfuZM9JoAsBHSxXSm9zoeE1HjNTYfzCVuQViBuytc",
  "key23": "khw1umAMoeWXfU7RyfWaM7dzWZujQQhJDGzjSUov3141P2ZdchM2hWpGJXvvTQ45cFmmccqFYLP2VDncAtegREf",
  "key24": "aeK9sdN2YYWELocMofkJ6QXiYZ2N97J4XK4L5BE2ybtmxJfSqryJN45eNXNF2oyusAqMEz6CfF9pQFK3yycYZ9k",
  "key25": "FBeGcSk51YrYyN5nVpVggduCGEUsMxF24zFTqSB89LZt4T5WW2xbHtZcg7CBYN337yg9FSfktHy6UcZWHhpvrzh",
  "key26": "3JXmsyQhgyzogFH3PidrRs6rXnKerWhtFCVght3vz7gg9po96EfatsznPLZNTRUnujfTJR7vrkqGQLJGg8un1B42",
  "key27": "WdVEcLsYjthYs9ook7bBRy1wkJZKKfvXFRiPfw3jmMHA9gn4hui4pCt2Ex6hN62ZYJWKER48twzrr7EFNVAqvPz",
  "key28": "4oKv28namhFuBpyQxGTPbGNkkKJVtYuF2FDB1foJTxZ8cM31E5ieSk4HUxH57j1qrsLfGxQmUo67Jy48wkSEiZpi",
  "key29": "48f51yXYJ2x2EUsL2UUJXwWhe2pS9mAwQ9yrtpYo1XWJYo6TNuzR2GaqE9w7MMMnTm61BiaxRYLXL5PvpjHZdWLp",
  "key30": "TCYNF6zEJdSKAvLvGBu1ZxUYNQo6ydtGood7f3LvDiq3Q4H4aafeeDZB8PPzp9gfygTx1Cvx7KCEwLtS9CRfqn1",
  "key31": "293huRePBB3omE5ArX9yc949Ed7ts9AjeYrKxcvKwJeaVyUe3p4Qt76LbDYjMrEhv6CLtE7KbyoGcv8an1sQWZ4y",
  "key32": "2HmRn8vEmGvHWngGR3LPdhDX1sMJtwUtoby6syobFEMps3mg3TEcoMW7ZzpWJDmpP6nbFPnwnWhSjNSGVhAVxj1X",
  "key33": "4nt3zu7mQKc79D4MvG1ukVEA1YCfPrNRkVsgVbiMohF4J7RuZBhkvKeBvWM7ucrXhkekLDWWRAHCvW3nWHz58eFv",
  "key34": "2grdSb8iLcGyTVTc2iQRNLH5hFPigkmDrBJXrBFRSK56vurYgASFjuNFB1SirRdHfuiVnQzdXLhvB9a4MZ7mcp96"
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
