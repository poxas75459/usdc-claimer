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
    "4w2momJr4FQu9ydB1GGKnxjUxgtBWy7ucixpD5sTjBxReikqpPFaFLk7LYagda83dz6dBx9945iqj3Uau2dmeWCx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "vfTsefPPKQo9SNKv6NURzPXzpcfqXNBt6kRfs7m8jZZ3sKZioFR41mw29GYyvMKBdaADHR86pQVtRPcvtrUYVVJ",
  "key1": "doSAJYzwMeTKhxyT9er27Lkwr491fAFVrfZepE61WnApCsSQeTGSUTdgWrv575W1vMEtRM36PviNCCu6p5XZxuo",
  "key2": "5HSTs5D2D3fYw2SR7Gd45pnMaz3hhZTfRQU6KuoN4o9CMPTTxufApoKLfENqvDTz6VZtXPc643fhaUpo8d1iQ36T",
  "key3": "5a6ZL4wkrMrRJPqTK7wYn9AGpfxfzaLa5TR96rKbUAfsxZjWhFZUQA9G6wCd2gefstDtJ5PQrzbeF7jfy4HddZWL",
  "key4": "oi67RRoJ2iCkJ2PfP8eZTXPTJVDMDJsF515XC5MadXC29uhofUqB5tty8xr5ewAfkpgHmwNJWiXaqHwrkHvQjTM",
  "key5": "38HbyqUUBv5MCSsk7GV52BGST88uV2iaSJ8MFgXARakUnTHg9CY4aoQFc2GhZdSxyRgjHPfC1wtCMJ1pWuKeR9Cg",
  "key6": "3PWRHoAJGFrEru8k8mfH2fpzLoVPsRAu8CJycKyzTdeCJ37jTjvhnK3sWUFyuS7TJY7iep5ob3EuG3aXPs3HxVWQ",
  "key7": "49UtGmhX1FXNFzzwNQzmrMMShfhLhj2eoedviaiN489m6DvwujtgkoVYRtQBn3yDnnuM1gwQxemRHmAexEqjT8yr",
  "key8": "4azr4BGAUzyr3FxA6xwHcV1VvcxbrERjr5FZZA8ePLU1BAcH5XTLEnGHKZY1JHmX5KqHmriQmESdvy3sKHSiKpdQ",
  "key9": "3BtHR95ZxCZiQSSrd4b5VLKWsJWpdypxbpDMu1pRBbap4hpQdgEGhGE7z29Pkbj7QVieCqVddxjR8b9JDHHeUH2B",
  "key10": "nELfHnkFwM43qn4Njhc3jdNugM5bLNUnAmEpSwXpDiyrW2G8mMirV8tostVP8hTAdoPcbiUumkYMBAFcrHm9y6n",
  "key11": "4Tnr26yGEyR6yjNcjbHtAYvx4gAAYaK9XRyynLqHLCaAReKs69oiHqJeCCHx6Ja7bu4PrRZsUoS9fGUtmgKXpTrj",
  "key12": "2k6gnWprGJ47Lo3NKc87aKbgG1RZPzcowAJ99zEgbePHRUAu3JZchuxwMn8MmpQibzaTxZuNQG51Zvzo2hrgydUe",
  "key13": "Z87CH4rghdjyQFrv21H4hVVir5tpJvCgfzJ9F6ZQ4zNZWVhnTNK9wXssRdbgiCe8rTuumipzA47jWenXPhJi7Up",
  "key14": "5PzMzk11r6LnYCEaajZWdSeNKgRNdKPPEK5zyoB3f7DzYu9kQ3oGQAUh5EUUqfVuk5in1zsv628GWoTRNP7QkgKv",
  "key15": "TgsJY5CXFstUjceSMzxMbx5tDagZhARGSAwCRFSTFQgAZNUVthgizUFGViGb3u1Ysqdp3YKSP5bvMRZXMP22KHy",
  "key16": "5dAZJ42UbcXJqhZufPUTt2T9coqrTjETe4o11BshshycTGB8F3EmH36RKbqqETc1znSQ2b6xUL2mdigrMJBkAXXU",
  "key17": "2bucnDn5TBJUXmXSXf8ddukyqjZ7mDmTNZugqWHgZ9hqcGveMKiPTsZAVoW29FZVqkaMQ8bRseSebVK9UBQhwHRG",
  "key18": "4wbK7ToMgfso25fG9JQCuqLFWMKd71kPfJif2Di7owqcYh6WHSvZx7JSnE2RtrQX34hW6EbJMGiBob56jCRfehSH",
  "key19": "2SqXyCsM1es3UkPzyUwWeLhHrNjfxkmLUyd3STeYis7kqov2WQmJhH9mQVfqbDK2i9ryoBYa92onKK5Lozt2NfBg",
  "key20": "4t56Jeo5MxvuabsNiXbLh88PiMQ1FyBhWNbYCPrRDYX91ewWDNTuTLgN9r4rovesRiiFb52SgbjiWxyeVQmfE1kM",
  "key21": "3jE3w8YLLDfSrecNpQm7n75o1rb3apabVXwJWK1TJ1XKAeDAA2XCQrpsebs4h1dMqGp981cExv18xRQwPiUEs8o2",
  "key22": "DaYHaD63bxxQLDxTL7pEz46vMZ7aFktNv6rfoUETiHQjmZVYp7XXqNuWTQ5SYhUuyir6GD2xq8AUaCf2CJzmdcU",
  "key23": "4NHZKvcENgkDFHUM5ra3u73dzcgaEJ8yLgfrHXPxkogs5VjPJkfVNHt55czjw9mHjsVgexmwRtbGEoXhPRyUzzRH",
  "key24": "5a2w1hrKEMS4oPzehhve21f9JNgXUtqggWcVFYiqtuyt2TAgw7FoJ4JxERMTh7xPZsGML5D2ciVBCqGYyxS5sQdq",
  "key25": "33hRZk43JrZN3q5VyLNoXDTgTQsBaosg8wFNdSEvzZYiyV9Z3wSd5du6o2tL96dNrWFHgQ7tdpDtKjLq1FuzsTdh",
  "key26": "UnDtyV8fHhsD9DgefiURcQzvAbZf7crV57qmXZGKnCh1wkccEVWeRw9tNrByCZk91gT3GyUYqbXMZVzZH2NmuyA",
  "key27": "3r8R1t2Nogimx1d89RQryyskwAs51kCm4GUTaXT7NQu8HSAwxbrHdetgywSrQcR4YnDGrhXL5o8TDC3eu4MWaBNp"
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
