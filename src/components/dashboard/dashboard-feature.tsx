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
    "awE6pMdBSsFvRskwDcaR2fQaSbQ1qLZg5kY1Cvzj1VTQq3ox3aUtqwc6BV88CLyh2TTJ6RomQQYx4gkyfPo2nAk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "CheoXGTGsCghTJTe7jTtx2gQ4uYAgiEYQbpp2KfkYvKarps83GsJmRiAnhGJ1FLrdCk9EW13MdXPZVcgfx6b1Yr",
  "key1": "3PvAyYeYbLuT76y5LEm8X9G6vwHokYFaD6DYDaRuZxZ4HNxMeSTbL5HVG1F6QtXt97uipLykxGsz4co5koLxf62N",
  "key2": "4Sdoq3U1RMHrCXvCPqxFhisHWuYwXBDxL7wei495mq3pXHyxM2TuTF51RsABLpjRsUwKmhK5MQsDxkxXW9VFwp7j",
  "key3": "4RPtgEMKG3Sz85Zpzqo7iuur4x7Bci3Bde15LtPGvXMaNv8iUqFGKEe93CvqdNGUSvz7ELSiqhip6pdmVq6Avewf",
  "key4": "3YNkfUZYYYTDGJcdVmXP3nmCpESK7qHV91NkY6WPrivuyh6StAfbFW2Ty4vzeVSGXiUawDkNnv2yUg3Ux4iLmXgx",
  "key5": "2cTjF76HKymUip731uwF2x7RPPSLcfiEk8VxCAGNPFbThMqxhEgAGwcWhodR2RYmLAxpu2GeaEv358xf2VqLYMLw",
  "key6": "5E8Gw1WAVNqxGeNe47aaAh3CewS3LdMMh1qvNCykoiwpLPacfLq6mMf2RPpDimzraNmY71FuPipRFHBJmkoZbdqu",
  "key7": "53PP8iHrYzuiXJ7QQoUvz7TPYqUAsrni3hVpnGqyTTh16f9nX5HTznpaKm6yc1AWyZZEr7f4rAgmYYKHV2UEpmsv",
  "key8": "4vxdG8TbWYn1hGzinbyrGZKemsrQ6gf1DYa88iuU5KBKRVgS5VdVN6avH1qZ8P81sTvcY8BwLMAXgoyhAdcrnL96",
  "key9": "w9U6X2Rh3jGT5q2WcrKGffnvxDTES8FWNhfgoy7iwFCN9PCNEpe3etcadixG1bDWubr9wtgbT3EErufyKpS8bcn",
  "key10": "3cLvGR2x2TbTjUj8WenTwtdBXmgdKsR8dUPosYJaz6NF6RVoRjVJPuD3oytSahoUYRNdEu7RhnaqXxgrnewRdReJ",
  "key11": "7sracbNnc7JrKEzWNSqXmVXj2Uebvt6WJabCSC7S48tECTUAVSUMvcesbRtQtaMNJnwbvNWAewPQo7K7iVee7C2",
  "key12": "2x2QyAoCD2MjmUYqsDiuka7maJj6oSZBsMPt8u5FHmVsyZX9Axdu414Q2v2g5kwadZ7d6aAEJdwN5oEdFNbsV71J",
  "key13": "226ZUHLgN1yAkCbfXVoo6i6kJLMMipGDomeYmYnhBTWa3b4t1hpNpCnWjaGNd7ncaphh5BAGf9iiw3t7wZYttdNT",
  "key14": "2U7UYumrQ2dZeGKeui27PfE6GauRn15Wg6vdjKDJm2PGfjoxu57PVVVzNrLHCmkD2woEM6aSJAerpYwBFmueifwT",
  "key15": "3h6D9WxvV8rzPnTtGgjwmcYWZAhydKGyzzcBGs8xTvzpDbvSdqSzLJK9WAhx1HhgynYw77Qv8dyVXsYXXjZk6f4P",
  "key16": "4AHUgKQMM5wFAyXTC3HPUQVxt3bJepXRNkFPPZn2BwHDbSo6FVtMnEGJSxe64uKYS8iV4GMt1f5nc7CRWrPh5CGJ",
  "key17": "2WR6JKaWQciWu89jBdrvb8qdxkrHM33ttwPPJcdPPTkRYHyCWk89cSq8MxCzE746aDbKrsYdG4B3k91Uvfz4JsaE",
  "key18": "5XqsDXwCDToFqECs6QqfApj8GB2HBRiHF5YHximYdb8FmhYWDDGCsmo254NPELsZJdwF2EARqwKBkLHE8uRdXghX",
  "key19": "2PKwhe4EytRVDdzD2wjx2jtkACvTjz3qvTZKWGuMbKHgQmot6yYPd8ABq9SBwm9fD7KtHdVP3ys7narCDDVPnGk5",
  "key20": "5QaKFs5R8BUzCAMXsVUG1fNmtB6pBUkXUUYgEgVyzr2P4eXpoo9GjutWZ8rDZYBjM6BAf9o7NWUH774sU3RWHfwU",
  "key21": "3RvWH1vXnuxNQGQ1gpbtqm5db4EsSsDD1z2Z7ncmybw974jn3getV1ebEMoKqeU55Ebvd2JxjuoPYY4D2DS7KFrn",
  "key22": "x3sZiQ9ZquRc2dYHFkYD41Ki9L9XqcXm4ck5ig5DbmPXMML3PxDyfavhEdpKjLqaFxmLHWCB3FZYBFiKGgfekmS",
  "key23": "35LeWmno5RP1KBH2jsqT6qXmogShMLmmFgruAh4Rjb1BsKZTq1wavWYgesbUiHgosvzR4hR5VCeHujHcmgo8HiMv",
  "key24": "2hPX38vq9a98Qyb1YizUUxNSGvXTQJFhoCLZYJ22z8chQM8TmaX4u8H4eq82Hm4jpo9njQtVvtfgJy8s52iaZ149",
  "key25": "5S9tUoCejivyodibti4eUenDp4XNqHBiyfnFN4AS9QkmepyjtkfSkbNbLVD2G8uGwyiXWiGwbqqYoVPZtjdZwQHG"
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
