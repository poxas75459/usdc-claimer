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
    "3dbW1iz5yhPfBRVxtN4nKGv9QUJjqbpuJaDCRdYBgpRjs6Cb3aJYDJ969QhBAxioRech3UUJvhDQKGrsRBRkrNZv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4UVJSMP1iJ7UwvE5t1KEU9acKK6PcHiyx2ePFBBck7DyizpKknQ8vAurLneB4LyFyty7xsufGS9iYt2B9CWMbmwB",
  "key1": "3MwqMZkZC4hSh65G7sWAUUX2eke29Tpj8PzGeM88R81rmJn1pRwFbdT2pTU2kgtxVRZ8brbT7sJZemtXT3Y3QPb4",
  "key2": "3gTVLaKBxhHKCfu4rvfZxD1CqxiCQ4V6eLnyWwam8ngiXov42wwSm4pyZrzQZGrQCxRnyGjt5Z3ECXSJNM2ts3VT",
  "key3": "49x3XBnU5h3F7QqrTryDxH5yJ3rMA1oQjetEBUMMiKUf6LVH5MaGw66r2ZQitzJC2hAHCcn8vqanh8VayoxpNg1X",
  "key4": "wStQxhBpenS4E7zFkRiw8P27JXrnwgfeK2Zp2mjbbZCXoM1ttGfDeimzzwf6LyCfZFCsPjdbHm2BcgVxxCsx73F",
  "key5": "3j8A83WkuRKDiWeBonJvuPatW9g46Ugg6HHG6ToXV3wvrGXNEJ8TFMB6G8pbGqWi4AFxX7tMdcsy8gHje8x6L6fU",
  "key6": "44jQdidk8mkrWFC8CQWyzQauxxbtGi4Anv6Fc1BrSLYLnWQD1oEZgqwuVAopxGPewDFF9aVYzF8HqXMy8Ko2keXk",
  "key7": "3VtnxTSw5NTcYKHR56eQhQHw6sKj8QMNMNXa3fMWUSDGptMEBx1jVzv6sjb3EziKQCAKW74VjuDVd3HD9ARRtACh",
  "key8": "2wmfP9yqLqX5ysNpctk42gRzYPs2XGsfmPmzh6sFiz9rttBJ851TEVg61vvwnhDCwSKRLDtSmZ32roPPUwH3yrJR",
  "key9": "fPY6rz3xewE7GzpNhne1UTZcJgccySAjDehNdqX86Edz75NmVEipCWvyooTcwgzcKHNbvDzmoTWPDChpwvihSn1",
  "key10": "mnoTgHV5cXRWjkdZXM6U41vFz5tuvY9aasEy53J3LjGfwFXfo32U1jh8zetAP1HsQoaRo2CNFhhzyHNh1rQPe6T",
  "key11": "48m1tAWAzdH69B7R7sXqaiNQUahHD3y1B1PZwpDWmWkdwGA5tByQm1kgPYDVHiKk5nqmreaBc6YUHb859aZzYV6u",
  "key12": "hR6q3yf1LpzqF4qQaZpt9u3rdh3nnLqrtnEwGpwjrFvcaQ2tBBgsP1JvoX8DH2Ybv3bxeNbCeXFctBnDjTfqY1b",
  "key13": "41qGBYMxevLJKeA6kFjScC7XsaCyQg5vngYtwKh3KZjU8o9s2YD845h5mMd93gBn34FCagFpyCovaMPxxZa6X2Qt",
  "key14": "dKnU65edcwYhRTechdhUJ6cSKQqNQqHU4aXaQoGwTDBgyhHGXapn7ruBcuJZvFWDEDGwQT9iYttetv5dKo4MpSJ",
  "key15": "2NAm7oZzJ4XFzC74eiVWmqS3QCetRMB9ueDFuCQogmumqyVV9kdgyYnDGK46xfNmNu3PeKAHVRVuKXgiLvmbLW5v",
  "key16": "2AFZrfXVovmupZHzJDSqdReCnfKcmjQhvWeWs5PgGAz6ogNoRM9gGZUSvdhaG924rVVpYQekBSStkRLptYHT7AFr",
  "key17": "2nRr7i8FHSgnEAva87tGdUyU5bkfdH75r8oT6G3PcvvyX8BxioaHGDwrbrtiXXkWUHQTdHkYW1rspDjtTeBNG1Lr",
  "key18": "2nmCwDsGGYsS9yEACeks5rrBiTgM4QjTg63vmZ8Bht8KhUqtxXKUDxinBvjohSZ6w5HEeXsyUoKAhJPxQMAD4Cvo",
  "key19": "4sVwg9NX4j4JaHguUWXKsmmAHZjjMJMKZK83k8dMc6B96hPAVNRzg2khVQa3AxQ8sXvDjXZ9B5jTKqDs1J5YYtMK",
  "key20": "3dG4yUWG9MrgonD73F1ZPtANez9yU4BChAkgD96dfYTTkvLfzJvLnXLKKxyZJNgUPuKjDjAVjzhshmyGJ1oN8tTA",
  "key21": "65dFwzpUfJmqKpBevkehNb3qRtRmW1sBKBVMTTVizmDPG8Ymb4NSNc8uuQL8rNwbe1x3s7dVxwaozw28vZBo5Bo6",
  "key22": "3W3gGJC4cXPEMwTCPXWnNw2nGd1uMQozeezDoZSA1w4KorTzFsThNSpSxa4rFyyKzmnRVvb3T6he7Y6pgwjdMeqv",
  "key23": "2diAKQqJnhiSLkQKrn48wb8VyYgCfTArYe6oK2HzF4Jsj6FTXuYVnmScSAESH82DfdQ65HrR26h5sn3cAEC3EkLW",
  "key24": "74uF8RZQhtYrVeUhCyEJYUSFVBZXqAAsGofeY4oBrf393zVdCpvmrYXm7CHHfexHidCun5yHdYKbK9P8vs8HpHU",
  "key25": "2UfNW8KVeT7e6WgqSSKzMkdWRn1kFSZMo47JWRiRZ8wpjpKbtQAianzb5wGntJucgCRPqYberLNRRkv7mrEtrTQp",
  "key26": "2H9eQTh62niwSQ21KN4xGs5TpZoa58R6ASzRYzxhT5vdcwE2XyYXFaGehzukBsh191bXoANmaVD7hWvwkXVosDPs",
  "key27": "JnVwssuFvUNwyjdFGWbtMuw1bE7F1GXfD8XP33inXACiENZAZ2GmWHWBK1qSZaKRrWMByPH5sCvCQV585ueF96C",
  "key28": "R1r4nwDHsQ4p3sQjFq2gEutABQos15jayVAmUujrve87hgZj4YDL1MPEzDh94QFAbeERixr7C3xrhiz5gcNYCKW",
  "key29": "4iqgcdeaScKj33KdiBs2XCrejZrwoxC6MB7FSHRUyFpMjqdS1D6bZWxvnaEdiqKEmPb3rRzQUUuxGcjL64d9uViR",
  "key30": "3xDY4ipsNwjT7eNaMn6FsSxLHnYwhaYBVjpYJKzUEHstYdeqVeVKjge4KAssLf5hHaVErkLoLE5f7d86RLqgsPZh",
  "key31": "W6pgwVJytvg5M9HgiZ2JK4JUg1SAWWpXgqQJast6uPoJc6JVW5prVNxMy2MENAowqnzfbecSSuKbLv4s99vZQ1w",
  "key32": "44dMais4Rsyjy6iSLbD4Qe6MTv75guXKXd64DE543jWfarYFV7mZ4FRgnhTZ2jB249YQ5hkqCbj8cgMKCT6Fudn3",
  "key33": "nwfsbCBkvgqbD1rvG6hPWCgPsvYz1NiJWnknVBueg8LtxfHvTe8NxYDyusUsTenpq7ucjg5JqEM1nh3Wx3MiDKJ",
  "key34": "3aMazyKfaFyK8kqKdE8QRhyz6h5iCkKKiHErsdAF3h8pRoz5YQJFAziJCa8hkDFsYL89JQkWLtYGaV18TeJnvSm4",
  "key35": "5wQLf4avnZqxCRe2nZ6PavEWVusHisEQqtvFg41qGyKSj2vPh5Gjw6AiD4Soqn6qDrZtd3CVDKBkg2dT79iw1RqY",
  "key36": "2KSKYFExXx6TccGHMbpd97kH8ZBc6M4afr9EzydghrhmncDhuZeSQ2hxtKz6NsoZGfv6HJx8iSU5kE5G9RZRC1d7",
  "key37": "5hxXCs4KjcrmYRnN6gLuWeu8mgyqN3CyTMSvqaZq9NPGxYKEX4wcSW4VR3CshF1iAxBfqztgtYjBh55igF6aPY4Q",
  "key38": "2YxbLhq9NjqFe4H8Q9w7AxSXm2LvQLJEvxEEFQ2sYoKJid3J3ECr9zSvtLXGKj8Cj3WqLyTsgzTUYjKLs9eBWS1c"
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
