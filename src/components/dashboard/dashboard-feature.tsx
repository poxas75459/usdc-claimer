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
    "3X9SNCyqWsSYe35itUYxGTEHSkGJTNYpH8tgdTKW8x8cH53pxmdATgydpv2Mn9LRHKzbLGDkTdgRgtA16FQenpZT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "22CV76znxXPEqNQqf5KYkZtF9yApEb3KvGEAWhHS8hjFpHHrVNhsCLLhr6SoLQChTS5TwGf85Cxf8Nq27cuReD8N",
  "key1": "2dHwrPpv3PTx9gESRSWzTYzU3Pt3NA6DDByA9tCGKgR8bJKn2ygkPDWqqWyd6bHP2EF9czT6NeaPnA1cMALr84Gw",
  "key2": "5z4whngXk5wprrHVSDZXv6zK8mMDqMXGHfVvtVtQtzRSLgsgXcKym8GeW5AnELeSjYtzS7kUYGGeB3U1Q4Ue4iqz",
  "key3": "uNYvipkwAjzG8saUavxPH1ivtbh3DTmQEKsrcwDEcqBHe6P9QQZ61EJK3DBSvWBqvXmJXLmSK6vikVKrQXgiWZF",
  "key4": "5rrxKa6HFKDDoQQRM4EpEX2b6xxYCiu5PKdQd1thBtpUxvHgR9aadqnAssAkv9Ky1NTehjvqsice87yKuPjTBMHm",
  "key5": "2e5dZf4q8AcLEhzbxsieDQ9NjCNu7jSkQt4mrRLVFAhij5Rh6neJvegE8Cp6K6PdZLcgioQuytcGCu6Ay5CsZzjk",
  "key6": "nMXztBQd7KWo2hpjKVvnfe1S2LabmLnoctTcr2U5bD9Xs2mHHsqgVpmHX5acXQEP2cvzRDXwME6AevfxF49Bczi",
  "key7": "4LMHWgPmgVE7XjtH1yybQdvrMp1KZmcmkijSC3hBjbVnAoPSYLogf6YRtoJoNdR2BErtvMF3ex6PRAUCrQe21Dg2",
  "key8": "6GtMFmRFiygSVFxNF9uRMhaUuqqszuD5whnuSDixUNnHazTXJbqNdhKLEmVfoj3zAvKzq2FUA38oaJNSB4cukW7",
  "key9": "3krqKV7xhtE1fgtfrnx1Zg9JittCojTiJFHAemrbZrctNEmYt2N42PnRsrhqBdrhZSA5XNkzh7UA9wT2gHqjmhf8",
  "key10": "cstvNaYGJDucgSmNHLgzKDjZs3abJ6JS6Nz9axyFCGGAwTVZmouszieEYbgxu8BZA1s5SBuhBSnY4dJdk39N4db",
  "key11": "4xPXHuzGwfUCxSqKHkFq52w5S4qjA3SnAYNXJTANgnW2AhXv8BnVNbGqG7bJieCgnPNhzuq5XT8U18n6LUafac1x",
  "key12": "4adQpNehRDsPF9FPdY2RT2Ur5Heufic3Cn25dRxxkP6h9WmSPctUGeu6FNuNm2eL6mTVTqKMiPCjGMJk2ybf1TV",
  "key13": "2zt4WFdjnrm93jsqLmd25vxs2Hyi8MPsUZUMhvLtAzDLyTcfagRNkKVthy6cxjSSABGq9bz7qSKtRoyMCuyDPknf",
  "key14": "2Mxf3ayEUNGb3eyHmKcGvKDSvDENCd81t29EKib5nR4Nsh1u2vVBVeYbZiGtMg3Vg8KtkbqDTGXviyj4YCaNrz6w",
  "key15": "3VZQRwmBXe4UTfp5Sy9o5gnpKFtHX2T23XBz7ffwRadiTGMKyTjtpPL5AVgRF16h961xAMqz8joedPzx5xmndwrf",
  "key16": "3bUxSvbE5Pxf5vALJBG9tULAyDKiNHMK2aVwzA5UrkYwbUj7sfeb5kzjdfXa9bZDPht4KTMvLnf1z9oXn1T2XYsc",
  "key17": "26rfyC4McyDZzVaExs2snPVoARcZzmxFKfxU23Q1kfMirYs4YQY2ZLAay7kwN3RD2F19efkzwgXUYz12Mtzty95m",
  "key18": "3v4GFWJMNzd6qjpw5mdzSu9tsUX7FWEUvky4zMQ4eW4ZbngkefgvS7UNo2xaRKofGPWHoV18njGpcXwXtcspg4Bx",
  "key19": "2Us96V5weebMmrYMhFa7N7yW9FD2AE4dS1LLadWCvWsdXqEMaDJWy1uV3SVNqSvnRGJcPZ9oESJwGYBTKpzu6MBr",
  "key20": "cwTuVmEgQBbNHBdubri1uXbSL6jPVRxJ4kTnyuq71VZzagyNRmHrrVfZsw9WcmoikPfuWH1vAhNXyuenopy5j17",
  "key21": "63u1fU5mFJ1CF1S9ovx2hhHRLQDC3rGHNgKmyMYnRFSAGC2KaQoEJRjDdWTvqw9LZCveS5TJTKBscYU6TT1ZgBay",
  "key22": "VAihYQ43oXAgk9kUxBxk9z4Ap2FyTb3F1BTRpZam1qViMEdFhgdEzixgPLxg4BFg7tvHUvHeLo1NMzTD8jrVRN4",
  "key23": "5bU1xtzYq8BvhP5U74kDrnQHbPbX4FeEsoAgUjuqsthzboyw9v8LDEBNKdtWcuMFgXa4jRF6wKUUnB1mPYKjw6JE",
  "key24": "4jtLFctKPPxi8YzLFjFquzdLCRpgCsoCVtDMccaGSX52omLLasrgDWUmzWX6mZMxKyFCCPVz4WyozStN9txMTn97",
  "key25": "4XmtCRxgu8g3tbG51beScgPRzUTpm2YrnQpcFpZN1kETM17F2YfppAmK3wFsvif9RX7y4Y1bh9pkw3cwHvGFXud5",
  "key26": "5G5GGaHCmddWXWEXohPx3Sq2TYr7vDWRRHVddkZxjkbiSQuwoh31YNGoSefnZbEK5XCd3Abb9wmmcahcictsSFaG",
  "key27": "4FksSxqzZE8QWrXqsPuhY4GGUDh18dpmgzP6NB3xYo8T4F5SUZmXjXbuMQiYDznFg127utCH1GDdXNGatdS35efP",
  "key28": "3uHUaPjrvC3hxZQ7BHYfRFhkcVyXQhB6QhsAfrEggg439zkBpqxYwEB6Xhrcq2YkfnQbU8wNEdW1hgZmcomGADzt",
  "key29": "4YrJ7dMmguUaBkzb2DjnwSvjPZqTmrHXdzL5MpvTnRf75P5bdAbdaGjiL6DyUhaPdjjryE5qDZqXjkE24grugHPR"
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
