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
    "5GjFmLfHwXJftjXXWxu1Efn9v1XSCrrK9MQnv7xBhDK57X9JXzBQ2K3LRZzvgtyn7QcifWX1kz9gsiWTCWa1DxSL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "a3xAfLVXMCR8URZrCejyau4YYR68QLykctNWrhKjSu5JE6xVv4ZsETc3k2Hvx6jVihuDQEBRw7hArnwGn4bnQgk",
  "key1": "4djxF9NErmQTR9Z1UCKYFmJAvyHGBuEsVzJy5dT4ZGTqb2GkycgD6aopTAkttQ3Qfe1ky3P2BnbLafQkiQG8iQ7S",
  "key2": "4KGcgVVaZ83DP19MV5vY7MeBWPhh4tYe1B5xGJjxYkrXyp6153eyobXJ4QtUAjeKXjsrGnEgWFygfJmeFKWKRvSN",
  "key3": "54PGAsSM9758mPE9eSgG8yhFHz9nQEjVkCKayi83pfRnLMVyM7K8FaF7fTfqi5PRfCrYKSBT8RrJgZRvM14URMgK",
  "key4": "38GezCuV5DVwbg7R59B6LhmpQxroVc2uD395FtPofiWU3Jy8zVcgNvLHmmW7aQHNGDTZSCEkcuyCax4JJeoo7NbT",
  "key5": "jGbbNZFyYSLwPLFw2w3Ae5mEEnsHLzmvcSYr8ynAR4CzWnk8hj1PsQboVcxamgE6t9fqY3dp3Kdn2RN9Pb3L4BT",
  "key6": "2S85VXkw1dzjRfpKXaEbafEFnJrkGeMAg9XxGSpStRDGTmExXijFEsSJyhpdobRkVJDUWFgUhwTaGBEKVHswwf1c",
  "key7": "3UA6k8AcdmqfDSF5Zpy5etD4nfDMPqSnZCFyDwAscr3EodxiSDyX66mBEQgL65SQ1yz91SE9usyMW1fXhnbeheYr",
  "key8": "51mPSmj1TjKb7FAGCatzKVZoYAPHjzEqV7aWP7Ew7fX59A91k2xMKKq2jsa32ydvpNSZzEPmEmUrxQVkhZU2Vy2D",
  "key9": "3r1R7Ht2QEFVbJsGf21jDo77JcvGeKeS8SMEpEP12ADizywcnoWRHbPNueahk4isN45yyAYpt9qBz2mKquERRWHL",
  "key10": "33df4tQsLautk2rKXVCVEzSVDy9q4fkkV49h9utYj5BvxMSYGYhacp9SnBjmh6a97rbDegBQvMpqADwxfrHbHogC",
  "key11": "3Hrh4MBE88PLSGf7YnZZjU3HSETNG8jUYBXM5yqo8ZSNvPCfi9tU5ghRP3q3bTxKPzZ9UuchADs1xMcQjeqBcbkh",
  "key12": "519ZbXTBi4XG9C8pTkYgXe1LML7wLgeGuPMp7dpMcxAUPnpQa4Pb9UA3Uqs7HhbdbS9ckcZM6r1ar95Bk3SLkun5",
  "key13": "2MCDjwPDY5eXJQ2nwhRZpDwZLedp5VAHhxj4T3RzepMtGvczukXzv6TLyTV77fjSt6DMme3t7qDkXx6yyASL4KN9",
  "key14": "5VazXtzZ6MBL8duLDervVDn9i5jXCmJbQS7hawfLgXy4hqiRJuyNrJqpZTswvSq3N3okY289e5ouEoescaFhZndX",
  "key15": "mShPGn8uDphSQEiFzYniyNeaCuPya8pBVrbQNfD6oCNirb5PL57uApuXkybULHwvKfJknv42Lp5kaqwKeGwT7Hj",
  "key16": "4DSmzUyq2Y2Q4vwvHwPQUDaVvGokCTzWUxtE3fYTYRrKKCjT9eoXA8v7qVjXnMxS2ceZHKq5PGZyYAzPGDEnjCmd",
  "key17": "3ayYCFjaK4YmAH4FZ8NwAYL85netM4DpbyP6jZVYUWNKBsr6Up7x36NRrG1RWTQgvtrrhR5DhAST3pLvHw36UwFZ",
  "key18": "2kq94TKF45t9HoUpm3bHhvsJm7LJ2eCq1ePEofraH6LVdunVkV8qS9eoBmG41pX5TT5FLm6uKovpvXjMm4peajVB",
  "key19": "3jSntYmaeF1rwnUxm9j7VAYYAfedi1gHNrdCsnTU6DHcf2QLKdqBPFv2RTBnLN5bUZMDF8CKtQuq3NEHVPqoX4Jc",
  "key20": "3gem2M8v7mXdcK1A2j21dgEVTPULRt1V5Zw439rKNdiE6c9V51m8umYKdJFFNiVpLeSkrowuMUSti1fgQBZ6tgxo",
  "key21": "3cQFUZ3RXpcks14K1CYuvFubTeWvno3BFtnv9iHZb3gMysbhYZp56dggGtnJP41sTHCZwFGJdd9VXJMeyMYfGnfw",
  "key22": "2Ce9wJP6buBpS9sxoR9QY1Seoo8ieQmBZaKJVXzJMhL9KjUGFJ2XcvA2J4sTnt5QpbsxDnAqEFavLCz9AT3iuuL4",
  "key23": "4HheSHgvZyJC6sh6boJqB6scT3a4F4K9bsvbD3ngNvnz9cLwF2NCABsDjx4uvD5ucyB5dehHPCrqv9i7DikikYz2",
  "key24": "3EJDfKL3av4jBGNtPAAKwUvUWgZhoBSJbJk5eb19DoCt1ETpNjj1BEDR7rwXW2HomW2Wz2o6c83PNubvjGaYzfBS",
  "key25": "62GuGEGEnfjmERXeUneFS76UBWhKWr3Fh1Q2DQFpx5Jg59kd114M3ugzwk9Pur4fxP4zTNdBdn78Y7ZgvsVmdgdR",
  "key26": "264SVZn34LoXFFHnCa1mpANP5yK9cTJkNHB3DicQqMVpxYdsvkg2Pxr9c7rLryLDahaLwZ7y7nDEyUpZGCTi717C",
  "key27": "2gsoP9Uz22cA6QL5AYmcrkUv8bX3mHJRy8AHbWoAeSr3tPxxhF4TBGkWyYoMCHS7wJ8T64HtNWPHdH83YJ5UrpTa",
  "key28": "5FwyeUXzzcRWy5vKJqbQxaXxUzoLz2Z4dUDwZbvC7472z4DvhUfGs8X7iqqwupgfz6EwRG8FgnNGPj3yY27Nu4Hk",
  "key29": "ZAwNh12iawN2fmeqZkkmTTGv6o9t8R4m41PCeApkW3ZGtPFkJ934P3BuuBTQXBSfYaWtMQv8t1D42ujiBxELnUN",
  "key30": "32axSrYfEx9awG46WtnaWQziMkSxq7zwtHiHjXakX6BpseBjokvMKtjZUpJPd1fdtEqQJHNLm4MKfhSYzPjbwNKW"
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
