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
    "5BZvRG7QCYrsh3RTWYoFMBmsjM8yUTyu6pea8mTJEjLqTYctqzHpig3whr1qveoHoLj5TSDWWmgBAzTA5MM3mHsz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "trzfoNPDvFXNLbujPc1zv4ZNdypQoMwRDjJoqkhevpoA7QzPRahoCiCBUguYqAcUM54vrCm7LRV1bp8Xb2DWUeP",
  "key1": "2jsCHgaE1kPzv7uE63bmriywacwZJvj7wAc9gXU4aqVbBT1Zhd7kBmv11UXGZdU57eXbmYpdJpuEyi5s2ev9qQSH",
  "key2": "2N6WTJZxh1R856dXSjpqLEa4enZJ3eRido6sfso3V7fLXyzr11W9p2qPbNo4fS9hBLDyyyc77pxo5aY5cLovtirU",
  "key3": "62Mkm1zZsQZdZpVFdk18yK8dXxvj2K3R678W2Uc8WZJu66NWvcPVGexS2mLkQbTa8UeUDx9z1N3s9nbTbBxs8k4x",
  "key4": "yVrRJfQsxvnPbrhETUBnLg3SRVb9UgwazFiwKyPaWz6R7PTDSWGum7JxspiLZiQ2G95XyMokr9ExoMAB93Da4Nm",
  "key5": "4uhSxqfyctAn219HcvT2JJZZ7JsDo8FpGV5TdF7u3SARbTCuM9hBQKMV3EBjoW1cswpmeWoeZQCiaSNah7Xg7eSp",
  "key6": "2kH5ZRfy78VqU4Vp2yvVfJzCu8BGNTV3gon3BnqeKKdXqDRup2URgScddEXpZNEmDui5t5TyfdyHux6LV3Ncw11y",
  "key7": "2A1RccWMjZv4hzdXWXL62jHF1wve7s5DXV41MqAU4hVY5YAQMkKEqa5YQ7xMdcyJKQb2Wfx7wNbRVy3NBn5mDVXp",
  "key8": "2s2PGnqTLrhMyf5agxS7A2QZVWcQwZYmQTwwQ7sSnJnBCNhe2Uoc8DePRB6ZAqV457n2FPt716zTTxbmo9q12vWL",
  "key9": "5a3WjoqaixTdSspu1qbBWopKeAVU2DD8V7fvkg7Z3BtujhNugKThXdHawByWsCCMvSm9wRUv4WLETkYMVo7stzd4",
  "key10": "4gr449vRre26AFCb8JFSh4NCjcvT4HttBjkkL1YF2jsAJcB7BvhKW9oPfJHaNobBEwRtq2GxvzdDC1U2cBtEzptv",
  "key11": "5VqTDHbJmhZpEAjHbjjzftn673GpgQsB6X5b7sT7BrDzcRqbRtaSyzPUDgTg9aE2AXx9EJZSj3eJzGSZo25mHTLb",
  "key12": "3bpTL6rdJRXRsxjDrTVmfoRMo5Z5BCZrsQHdg8uVWnrHTAgBNs2VanVw7nUAeuvFjuQTsYGj5Axr1w3p8KrJV4rQ",
  "key13": "5MQEbDD8472uAN7KV52QnVkVWPbYiw6sk24j2Yt5x58dgErWRF2N2MjLSD4TrJsY9FupBBTZyJXSQ6eorisZnt51",
  "key14": "39YMTmLWdQGMpFTJNzGFwoWxgg6SVLmKTz9QtzaJJQgwHCTqccgvBqF5wU6U6uTZ4SKdpgEPqaeLv1QsSS6Fze3Z",
  "key15": "5cVwyUQUJjafYkrfJqU3KiaaaciWba7b4QY74X72VAks7owpQXNoPuogpJZbb2BB7FbcECm6CryrmhcT9Zcvfnnb",
  "key16": "2nRMvks7EkbKRukd5my7i5JuJERNfBn5mHbibDxd7ToPtHdAdRmHHMpAxE8M7g2XRLnjER1yGYRrasz8QEBqP78U",
  "key17": "2Zzy1jfo7QpHhgaTVUQXf5g4Us59qbXKBGCvweCpGMk3V9HC2rmUTNAooWnykESqVgw89sRypnUjaGHhScLTGYqP",
  "key18": "48oasa7G1DUNZd2Ck4Z9AcGzwM2j5tJAm13EK85qLS2j3yA7rzdPuPkvZg8izVHNcttrcdxgkoD7P54KmR22iiE9",
  "key19": "41qNZ9544ekBbw4qcDa1hkDXkv7h4JVtAJwcyJh7YaYuT6JLAQ5iLph5dV9XkXBhiyZNPPFPVcfKHgTFKdXJ52jT",
  "key20": "4nbvz8CPxeWAwuLuCrt5CvBUE58fYNg3hNKhAMQJkMnDt8mW1Q9SMyiHWkTqxKYNENC17X3ZXwSE6ECdhjDxmR72",
  "key21": "434p2uSyx1ExdsRdfoBrLkA1RubRby9r2dMChcAqG5Uq8HV8JBeeJH8s4WQn6oMqX2o8KutAQhM1sN36Mkv4kdXu",
  "key22": "4MdKFQGEQLpHGi2RWndy4mro67VdKDkzyswzjy2eSjLQySkzmtDBKRr6izaDgYfg3aUcPPdm8Umoopo7Pjka4ViS",
  "key23": "41djGvb68KvYyJBrQMVYhfMUCWJZJdtPtq1PXDGwfY5CZj7FJLDAYi5do4YKGy5osNCPQk4oX5pWfBCc7JV63Z54",
  "key24": "5Hb6yNAqjYrSTCvVU7cCFZuG8unfp8VbdtiqTNh9Kqu93YdK8xDbSaeA75XoJvut3Hg69TknfHKxmycvVLdP1i4a",
  "key25": "4t9PsEbAv1jkxR2Mtz8TvvEFe5EA7ALW2ohKwyCZcjAdJTPhw9z8RBzc1QmDqNDMRtiahN2Pctc3Yb22mjUCEWeZ",
  "key26": "3pws8Fvc4ufp4FDD5qLXtixCDhBh66GguunjprfiGaRkgNPWhDFdcHgiMzdevrV9SVC8UtwazF2LGCbJDqM9SaHR",
  "key27": "4Gj4J2XpzASXTDytUirPxS7y5iagnofwoJ3gdcczPeuVxQEmiqQ6GpipBrBnG5PbYoXnXmJUVBdFcvnWkLGo9jKg",
  "key28": "3VS168mr7Q8ZpTbkaE7qKBaPwdVqpEq2QNsbnMbhSpVPuKVTkTAa2WFE5w6mqMdXoMGdsmjyDFCUD41TBp9kAXo6",
  "key29": "4kwAUQAtJaPPV2jgxCDKpu75FfAqZbURTCtn4L3g4MkYy3vg9UfVvrwfKwEZrbcuYRNpfFrqsAvZGaxsLcgyG9yP",
  "key30": "5h7N2kbFiciN1pJH4uhf7WeBaTSjy1L2eTSeFqzaBib7QJVFqTbeP15GBpeV4WSwMqs9hkikWQTWjneAscdDDZH5",
  "key31": "kkjfATp7BQ1nwAthUckV3mwrsyXAjS7jsNbXeS3KZwskPKEy7ra76YHEgvcj2SfA26NY7fMWLkV7cs1cYJZAAAT"
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
