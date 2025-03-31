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
    "2n4JkhSA3t3ApfnDPME62jAv3Y6B1JDzWVmZLxTBGj9gRTFYJpUHRD9fPPq8PiBLfn9CQVSE4tdpFthVizCiHtRg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3NXzMd2MeFZCW1rT41k1sWBv43J4ksytVqo7fzYnZnaEp2f3n5oFwzeekpjMisz79pBtNErodNf4VAp9LQK89qGr",
  "key1": "4bDTmREpvLiAcEWwLCWErniFNT9u8QTLWxnwJVFfpEGxCtsJDUiAAkjS3cYXQHrG5FCstCzSyJxnWaTtpxCS2w8a",
  "key2": "5zDHqRsJ4avoXMMVUxJAoTyHB7yowBybG4qp2y38FsjQ1j64QCxJatQmVxPht8k966zynuUkJ4bVjCAdEz2JsPgZ",
  "key3": "3HGjPzTK5f5oSxURMMaZSULvNJXQE3zpzXECtSy3nA8zo6CwhmhrDhwSYBHuBPNYKADerdPckvi5PXBFAuurZ1Lb",
  "key4": "4FqpcBsG5BqNW8L4WEZQpPDshdwDocjQiUK9rQWiwp7fjGoejMQXgvY9TJtm9U5u3X8gSgBJLdQefkH2rG8wCWEA",
  "key5": "xRU4wT3EiPAuy6P3qhnGA9xLWP7TM9Zyz2mEScqE8a8gBKbxzJZMj7Ejajxn4rpxCKxcA6iWuqwi1yGCJQqi16i",
  "key6": "3qti3dvF8Qt34Hmqg4VpoG1XAvJMsoseMmJRT2ErXqCv1PhZU3XpxE3rcp7FUwbsAmgFv3Dn1KRjGfmsv86kzzFW",
  "key7": "4e3QZjA15r9KwtGT2NS8iMnCWiGHdmNbkyfxz4i8jozxbnWkqvkNR7eiT2CkTyJD2iewHC9WNon93SP24c5mAa1b",
  "key8": "4u1hpJ6ghn9298PDDtvKQUThBd8ToyftiEWF7QSvk4DjAzcTeCeuNnLRHesB1K8RNnKDMMckB4jP64AQ2RiTTwNy",
  "key9": "4PK94Ub5h4f8hE4hfD1UALFMK48Dh7fYT8yUaRdv4qZCvaczRvryPyfZySsWN9u7HZKoztYXPLantN145G8Jsans",
  "key10": "3j5YYRM3mABCpxbREAEafcrSyPz2nPSJXRsQEogPw8xFUrgbEFzERPe1z6WbizpLXg71XwRX67RZge3DnE8qd83e",
  "key11": "3Q2VPtqVbCi84uCJgH1Qpk1iLW8p6oerKFFnwdrBU6BYzPtDfr8rdHLb9G1TnzpjF4gBUP7gVNzMSLofbxKJ2tJ8",
  "key12": "2xQMBAF8t9229VKK6Pwb3HLA54wGxbetSL7BgzQG5CUbvcUd7SeZ9tAt4FnqtasUQRfjLzGGT8cVt5F1rdveFGFx",
  "key13": "2LJfd7pYmz4J3QWwqwDugPXfQmpThw5qs6cJeaQsR9V1wYpDb4gXhYF77M8YNbufHhAFx6ukeqv9VZAykrsfupkG",
  "key14": "EQispGShrYopK9sCGRHQxbx9wtf7PCX7CX4RTFGY5mMy68rYCiZLBzMeWoA4wLaNYfqNBLPbALQv3qfZK1hE81A",
  "key15": "5Pss4hor5Wc2TspsWPfsY49EamAd4GNgAWZkejtwugY4acyShMknXDfJsu8dtZVBkcsSs6G6MXnmSV8F11z6vZQ1",
  "key16": "5nj52FnPVjuwq9Gr7hxVyLKCmEkBsuZ7bJagz1y7sWxaReed7zxdkTz7Ya1MkFmq39RkZyRmgCDPuKCAoFpdBPu6",
  "key17": "4yp8ZNGkvSWZp22kFWXT2QrMB19qrBcYDo7i8vZ6qjdiWRjQhS7gk5xkc1ispituPiPyaVEUzEyS9MSD6xvD5jWa",
  "key18": "Dq6pBer9gFdWvyiQXZmUcqEmcVcaHyoB2uXXqpDFc1RnRxhzU68Q92GfcjY6wFMM2p1GU5MkycUJSjr5wg2FEWE",
  "key19": "j1UXhgjKgyzr2STEHL8QdcyrzkTiSyd5cYVs3mQNV1pBWYPdybRL2G852imawyWBac4Qf8Nbm8n9QnGTaHPy1YM",
  "key20": "r2dNwtJB2HgPaXBxfov7SyjYkWEPmBmX2NVt3u8qQDe2Q2oBjWEHtHpmhFRKLzHfvNfEoDxfFiGZR1H56wWxf8g",
  "key21": "4HQNZ8bJf3SnkKrioMMWqv5wQyHed3xRmQKchRznxJB6ouw1g7gFkUdzEkUsGR81BbXGwzs5tszFzXKmKJXL9WNv",
  "key22": "3ZyTJ1woofCbq9QqgbyL9ANC3C2vmscorEoYbV7mvUdCQR3299GpV3Z4SDQ8xom2DcLoe53y2QPDGxLGsGDk7H3R",
  "key23": "3ncTdk8KVnt8nsUZhoba3n4tRPtYWtvdzQuyz4FXkjoEmGFk6XSo9oUHUeiMdcxVFG32Y9iTbfAAgsPQ3BhDqbY9",
  "key24": "kWJfYVHb1FFK2qcniU8phcNJWqE2iGoHoNTLtbsSNHTvRHcAqxWtUkTdSf3xGbpkudvfgYPFbb294mHE3yebGy2",
  "key25": "3ircSzGB99d9rMbVRuVjfGK93ETDQbckv3j94bWGwLq3auPV9RsL82xbis4PcRGPsXPxoAePWAEKyu4B8iABjG8v",
  "key26": "3JgtAYAVqn2CeD2sztGPHVLj5CVdHVxCeRPbtiYDekCy7i1fmJzTiKxdufVebmwbGHXr7LeEcYoDA2v7GbYyXyua",
  "key27": "4SLPkp5jnHbbGjgYm6TpvaATsBo7MYLX1nbj72vs8mSdDZEzHry3J9qFCD39Rs7vnKLGzGw4Tqf2JykhrGj5x812",
  "key28": "24sJ2gCp1XiQj6zKMYpzbf13U2psKG3ra3VhtfRZWFjmtQtfssKyfyZFvFKekUe7At7Ascnatpop3eDJ1obAv6Fy"
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
