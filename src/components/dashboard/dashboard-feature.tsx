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
    "2uUjEqwohiBg8vi9bcHfNQvvSbZREYe1wBn17TjLTuaEsMkTt5TpTZ5r5nSwxE8ZE77VLEi12tcN5jiLKYKFdmxo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "31GkvU55PJSg9meN4G1SACR516EdSkomu86DYwpZbPUFBuw3dauyUvXm6ZpsfvH8ut2XDZTa4CVc6EDFh2W2EkUn",
  "key1": "5GMDjo6pnv3ct9UdPFd7chcLiGkS3NLe5Jr1s6DSCGbQ8WR94HQAsci1wGkEZDFBTCRDU99uWZX1sYLTxWvAF18k",
  "key2": "44JL1rpGrZzKsoYY5ybwia3BnTMTQNvSCqDpD69r9uABii836fAsj39pUc3oj5eArDzX89RJ464T1pcjRUjsdbHD",
  "key3": "4swekpvjE5ZPzozeffB5quRJhjmrZiZ56i5rd4cqpkR6WeNh8XEyRytmfw196QcMrTrLrkpk5aeA7fXSQL1bwnYK",
  "key4": "AVGiG5DauixMHzXT6xKuQGDJYxLnu2Qcx3bPeeN2UazHLgMrFtumJSyJaxHdeYozEYjPdNWxvadCYZPJbSaap5q",
  "key5": "4De2zpzuJ2ydHdeTcUECn6sA47757G9tsiCJRoKh4HTkrsesEuqvvVmuDeXpapYbiT7UT9gFbdi3uZ4ZSqcTKPDr",
  "key6": "4a2izMAr8LWjheZYLxVDoDv3GmSKweHwhzEqxgebLevRCdmpKSxW9Rzpjgv3xtUD9ct9Jcw191evpkq1aMfc6ZEP",
  "key7": "43PeuEgy4Cx4XHiLzvoWWZsTEumxYZk3wJifDGMrfUmju9g7Wr9fmfnPJhLzR4xK9JNyhJoKBtoa7SpHY5GosmwP",
  "key8": "2UcGcAbuRZtrMg1LT2XjtqDDSKC3rFZixxjH9tfzGJDyDx4kLsyR7AUm4CCadYinz95Wvqgesj7HDYr5HpnrKh5",
  "key9": "3gkKoJZy96XVJVtchjT6rJ1oHtrYRqxQMWbyddgctCzEkzAamWh8A1WKHaJk6D6qxDVkzQqRakTyVLkJBnbFpPNn",
  "key10": "2n1CeLjL4PFU7SvuinWFQUL5EsKm7VH9Bv23wLJU1dPNPMRitDqvzdfThEvS3vXvTVLKUhMDaZc1Hn2ceTQCYWfw",
  "key11": "4rrcEd7EqZVxkNLsWF6eQeV67ksbtYS9JWRbV53zsjzTWHeUrvVmSdainrFtZp6YUbFseKZJAndyUmxHysinji12",
  "key12": "3uaWNc2y28soouqyyApiBPPvUs8qmKCJyjZPuwhzR7Z1JwTUirgVA6z86md2afjfLTpXa9LNS8gFzH11PZrh74ha",
  "key13": "EP9X7te5TKXsg4s83UDfo6Fwzi2U6mZtV27EEbRbSE5bio3ve5kEMnucDBVBh8JP12H8FmytHVm7AzscX934xEC",
  "key14": "3kA4LP23gBJNZLEozHd2rtBS4ajdjozX3R7zcKAvDT1xmyYc58JPQk6wcmanDB89GJguRg8nvejZF6GfHK1N5nj9",
  "key15": "2wWyPekKg8buYo8FgHvNNSzURnnPoNTq23niHXLGQ6NfHpRzPkXCvJyx159GJwWhUqZ9nJidhGRP4D9BkUB2XWMq",
  "key16": "3Y6mtjAN8D6pRgtCC3XqC3BWQRCx5s6HHm6fSmW5h8zPzqgLeef1V8j4ZtU97nPmjWTtzWP62SjLQZbfDgURxmMq",
  "key17": "3h5oKFhNdzCsxBKvu6F2QBcdXqieb6gf9LENW2Aw1BsG8WJL1riQEbqRytnsqLP5cL8W6bDHGVG8RtMwJ5C84NAJ",
  "key18": "VMG5NchCuoS9TYeAxLXzPFRMouSHFQjyxutKRmnLgaSPdeMxzSTVqTT6i73KQmLbuYF5JvcQwusrkzPSCMkgx5R",
  "key19": "2euXPTYmKQmnxhZ8eS6Li1AkdhKzUqCCtazYotsmFnkJKFoG4n7haXNYGrmCZempweaKMV13q2KsbkqxuDt3LuEX",
  "key20": "65kv1aBMoVUbwcEGeXXNp7gG7GB1Aq2avRRRZ9notsCeiVPiW6VjEekxsRcskZ7W7nojVM7zGW1umMA2yFZWhUoC",
  "key21": "3wajbGG7KYtFuddFaUUGWEXTHcGi2Z7MVY1tDouSL9qLTbQDi9tgRhU57Kii9iWdcvEJocuweF52foq3zXSR23cV",
  "key22": "4hTbHKND9GPthQafthrnXWBqqca7z8YyAMQAwe56KaTauxHrvoXBVfYnBW57sSrnJ7dMQG9YijvgJ8cpzbogeWbC",
  "key23": "3GCu6YmnCb2p58SNMwTMdMUiq2scATuJrXzNC9FBjGdu8gqw9ULTzrKNkLPBvip2bYfARSVokexVmcK8knjXGL5f",
  "key24": "2yppj8mJfoETPVHm7QDRMshb6nm3KskTeeFAZn4XAGyHPP45xr9dEqiBMn2sbMwJMPqYRP6Lz62ygQgK3LF5snjS",
  "key25": "4639BTa5v5cwpEhBPPUwLPS3ufc7HVLcVjiqDis5BNw7UrRr44DruGwoYqByFekRyEfkQETweo3edmbcUCaWnnqV",
  "key26": "3n7DuaMD9PDKAS6S5MzGF55npUfz6kCSccTqQvYGM9LZPmRJEYxKgXzT7f7zypC8kSvMKs9HmNDrpdakoU2d9eyN",
  "key27": "1oQzwXRDeKNydpFu1RwBdtT9t2PfEMSHLcmnmRd3q7ijYWVRox4d4MJRGU97tn7CRte3rdXbvYxGs5e17DS2X7J",
  "key28": "3LZ9RsuhwrWHHzJmFaAVWWePt657NUmufFnMKQ78fwULc55mn2sGfMTfHaweBKRxDPzHhwjHUxXs8TV6kCCtofEV"
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
