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
    "3zcf17xeYyU1U1D1ESKMu6kru3iXhGuzum3a4dAKc3LD5gkpw9jKLnWd5tjPcg69MYF4fHiQvG937Prx1KbDdUTw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "QR8PrgxFCeuqMPfG3nGuJRvzF7gMEFeQcyDMMnKsbhyCMVRT7AWToRKfsh4z4ftkns3kGHZMEzwX8KZAjo2Gua6",
  "key1": "3aRpCF51jpSWcNBvK5kxc9XZUR1CjXwghnprvP98Re6tVfoUpJ6tuHfY7anoT9MNrMPqxATwhyc88ar7TVcBLEQY",
  "key2": "4JzfCHqJvnwgqyApnCcQRfrSS5kA7soaunZJApkeCUjQSvhoZmB1W2hAEyvDse9HW7gDQDArBHdagoYAYEHftBZ",
  "key3": "4acdsQT7AMNfgSSnPiiZLPgkcTaoWrNvrdn6FxPDBmzD87xX9aF5Ho1sitetCGR5EY5f45TfSXdCbwCWY9HWUXDG",
  "key4": "2Xd88SD3YU46nNWu41cjz1dXzc2JtkDM3tDom3Ja39TJmExEjtuLm1MXuSWx4HhhWb6jDMCxR6uUqHCRzvMPaDWH",
  "key5": "3tqeexHFBbTtpX9wrhX4inGdo5iNM5mvic8nx7kirmoj2qygBimz2ebSftK9VLeYBPFzkKg7KxvQS7TfvJC8ect6",
  "key6": "41o9hMccpCELN66XMt6AKrGmDYmawLTMBhbhvWajEEEbJX9195YLzcewQuV26VGA7LnZV4dENXttnmWbsUtbr5Xy",
  "key7": "3xzfSteZR8BLwGXjh3SoFDeAz2BNsGjTMWNXA6kZvBp4LieBxs1Z19cYvqfPXnhQaj13YRB6LDZYrPnjTaMkKhk",
  "key8": "5sFJx6KW6TPFo24KDGUNkoBeJSZqtyarWriunDaR3EU9XSxnkExHXv483vDcET1u8LV3t2SSHPEPMMUR1LTFG2gV",
  "key9": "3WWrHcRDUnSaKR1WqKktYGgi9g8u4X2AWkrS7XWTN53kbocJzajCXsj9R9xUHr3PgHXDsk2i3B3nAEzawtyqoeMH",
  "key10": "26iX12y4FZfhjmSADsuEt2c1oEWF9Es4djpMszYx2MYkST7NN9hD4xTmKcUpRrwT9r3sHR8HNnTg8Vwnwwko8gnp",
  "key11": "4qFKup8yR6f6GfKAk3GobuBzvEsMA9b15yPQQzpJ2xykEwg4ARKP7Eh96MvpJsS62gE3ayPL6S1iARvgPRYW6XBC",
  "key12": "3h96hMgzXFhLz99AywZZSkmTomqgBgfWQiNteqtvXzhjW2vb2GrJaSi3d3ioMcduezVzZVVkWPyxasyo9D736sMo",
  "key13": "QsDgQQLM5BUbjJ11GmvXn4GtQosSNNUHQ4XauhzhMmEm31u3jYqBvLh6c7oRLVUUZ1VPcUbYEtyuTV1VQNgvhPU",
  "key14": "3ndDcTPakRPJ4UNS6g2KRTArGhPgZ7WapqzQEF3jDhzUDkLB1GwmsrQqtfauxc3nooNeTkF9wsLFN1krVUrS2puY",
  "key15": "umrrLtUWpB8xEMPzqH9xNJEDdS2YKfVHKSnFk7LLuRbVeyPHjfYYXjM7kANN6YMTxHJgETMuYVJFndcuBx9G2hJ",
  "key16": "3X2RFBWQ12SLRymBvS5wbonwkTGCfBNcBe12T58BoH9iukZtcz7UuqocpiwaMS4wogvzr6RYz8dBgPNRfKMphhkM",
  "key17": "2gqUYGuVueYgSrmafuQj2FZbJc9atozmtwrdh1Kcj17WcPJcR7AERdv9dgYgyhhFGVrqx4LDJwM6MnS8GucBXbwA",
  "key18": "44SZwiLPuZQNLJYfSgguaSrtRGxLZyAnAAa6CL32Hc9EDmTQhqQEjfRgKXqmLPT4AfzxDZSX2ckYf9FYoZ2aSzbX",
  "key19": "5vRkchfSJaaBx7DoqE257ePKDvHH9wNFY96kWeb343n9SrnaV4qnnsYYp4Bfvk166rmQji3aJoZTxBPuzEJXH7pF",
  "key20": "5ESmSfxPJV1uv5EMdT8ZXSjP4Rgm1khTRT8Sym3Wgfqm6xYTPbTDJrmDf7X4Nvn45JJJ5PrbSG6yYY9iRWAYmbGb",
  "key21": "2XVVA8E3EyDPBHtLM9Qua4UE6Aex3ET11YHJeGesKMNAHpaTZVjH6xwS5GA16pDzQorNTMhxUowmhqzWYnXBF8pC",
  "key22": "3vjJjBfUi4695A1fS5omUmBbC63Wg7a5mciGGToas34MaecXKQXx6JoibVVG6aexNS22p5FeB5Hx8SYbUVpKCZjh",
  "key23": "4a925STrrKqv22zYDAR6bVioUpqr1emv5Y2ByUJjsBrvGVUb5LUknvNp4pEGzv3rCnYDn18Gpy68o11QDPzRCL6u",
  "key24": "2fR7JUVnkFntnS5MDD8wRWDMsBV2GBn5pH5TcuJ4QYdXyN8TDioAL9od2F7RUyXwxJWZjUSjT7FQZ3wVofuxD1dz",
  "key25": "4QkB7SQ1B3Z3HMGUMDSAAHiRXXxEwYowEtdsrV8TyAeWNK9k4t9LKoojk1ud1YxV1aMkfvGpZBkT68LHWPewmaBA",
  "key26": "36Yzn49xbxnHSASAdDNgmXD6SYXJBuEH9DkKMY9LUeXAinGuVYH7yeHNdqfiZoSNgShgTPYt3jjYTFjD654VjUKK",
  "key27": "21u7DCLeDVtHRbFF7zPAxUmpDzNuu34v5JkGhWbxo1FnP2CvKDo3Uv85tHGsCWXhf2FV9SMavta32yC2pHZ34vnA"
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
