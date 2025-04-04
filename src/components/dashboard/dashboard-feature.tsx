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
    "4bxbQApZth88Y2LGvweAR3ihz8CK8s48211AcSwUmFTNxD1sWvCMbyZLDwVb7UGQwKcsBNAUnh2gFiidfdCv3hj3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4snez1uicfMGyU2mvaVLWanWYVUCQghExY67ZnhWAGqQqzZ3daEDPnjAwKc6cPR5V2ZAyteH4KUwELhabRti4E8N",
  "key1": "4TYg7j19tCoNAwCYPJXGxtBLLawEto2216X2N5MkuxJmPtGugWg4D9NExNqTed3NenBiNirCFNq6b6f1jnUU6oXr",
  "key2": "5KcJufGk5eKjoU1uWhTnecH4G7spatT9x8VkodVgGdbkGNBKFzf3C5bEQkKekFZQxDNo5aFUEHXLcHprypwKjuHJ",
  "key3": "VyKeUmGFqga1XgDiNBkFG6DYYFY3utk3ENu6Y2Y1mLPk472CZSaGB96NwtHopWTgUCetCdjiYSUZYSfoj6zNwDd",
  "key4": "7cHm2FSqCkojnHcJ4Q6Z9eVtFPjJPn6WgrG5wPeGv4VhtJCENpGnSsdRvLYbsMAdMDZwCiHTGUSyayf7JtehUbk",
  "key5": "3JjGNZp3PVm7oAVQ6sx229XdorJnBgr1vyTfFadAjAnyBwrVxuoTiPXagkBVryrwE1nmNndW1SexB8LaiPMVw28B",
  "key6": "5X6UKZrLRoQAWi2u6XAiEameqp6w2rWJpZ4M6pLkHkEFSDtpZAVvHAZwMA8wirkie6MF1sG88j5zCshUoRA8nnBu",
  "key7": "51bYkqRDVtfXbQSc8hTgTrxLBFxgf398LNNnBUjyyaSWd1SbAY4ctusfVwwWsskz8AGAgkhUS7hECi2CbAHCncad",
  "key8": "AvfDLCunFLbjjVL5v7zGtJ9k3rhE9KYj8qD5r6hs6zLTQRd3Fs5JWPizw4J5SF2STVBK1s6UUn6c7gHnq2KgcuL",
  "key9": "NcP2Qsid17Qit3giAHuGcix72wXij7mpUyCXZy9UYk8XebMRkEqXpn4Wq69AcSXdYKUowQ5YGGsMybe6EQwDSDn",
  "key10": "3rvfFSEp9RbTCehPJ4bwuAY5UBzn7JKCnC84NRpX1DzcPC1uHZfhr8vEH5KXRKuZeo5DG8GkDn7MajG2GU8EauHQ",
  "key11": "5crPK9VN11612VN4293tMpBHSkVMMjeofHG7eYxVWm84CFeLqKuWCHtbeLP91nHdXaCeVxAp6phRv9SNsNQwayip",
  "key12": "42p9QX2brEYt8FfxQvX8pjYmMY41J5qTM6FYmtxarcoh7XKxax5Bih5B4MWpjcNJfAjkocW9YTHSrV5h3zG9VitJ",
  "key13": "WKQaPHG1cjFY59iBej2fAsyfGGGAG2ay27PMrT6P1vGrqhF8aJfKCXXAqzgYYqwG2w1uZMdDA9FREEPxkpBifs7",
  "key14": "4bQA8oNa9cxsVqJi1qtNKAKEuyWXbeKYmUMutRWPkQ2uw6JAfDwY1uab8Cr2fSQTBd1QsxgS1miyxFShg9haFVAv",
  "key15": "2y2XbkU72A9mh2ZLw3L7hb9km2KNUNZpfJq4BuxSMYV2cbq5JL55BrzgcQnNsac1MWZxqVi9vYVUm5rqzjrzQ6JN",
  "key16": "2vX46rY35AoM3SdusLJpHZsKjgqanX9R9tCJXukFkVTT7KYy2fM1U6jh4gUd4RyhGFU7mk65QdHvrEBBdMEivFEh",
  "key17": "2Ays8Ui8CZf1ZpYgG29ECuWQ71KXnfBRCrYUNEK7S4L7tK4u36JgKWdbbY6fsY7tgeu9KYbExcsNUgo483gUAKr3",
  "key18": "3ZsMgzN8f9KrDuwc6Bb1fCr2a31SWik6BycFRzTQMxezFyiCPzNZL76xbn6HRQL2xUbahTwPJQiKvuvHrzrSY1ok",
  "key19": "2AYV17SgXyXBxrWozhYTEa5NetMEAivaFPZDjZkp7AogYjTPiWcuRUSHWi7itZMxhfGvdqd42n4NicyzjAJzPd2Z",
  "key20": "3NWEU9NQE5whJvKN29cMaVk7Q1RDPLAvXngMX1w3cNUnfPFKJ6FHcQXFYzmn4W37WaUKh93GXZBtMgohbreJB1bg",
  "key21": "32X8XBLrvh6xgNZfHE3trcyr57cWQSDtRor4L2MFumYM5DapSqKdgzQHNGNjToFn3BfFj4RnumN5vn8bc1Kc9QuM",
  "key22": "2J113mn5Ww6fsuaHWhkxeupjRyrGQXPfNz8ETSkfZVqGvJCMFiMYGBFmXbahTYTu9JuzLBjPpqiiy3AAwmyka9Cc",
  "key23": "5hw4j5egYe2ssGaVfASLegdYU4UTx88zatSBDiwEZWvHGugxnuc7EhfmkGz6v2TcNxFTFPe8NfWm1cc4GKcjPAg2",
  "key24": "4o8scqSpE5U2M5ZMHPqRCwBvXjC7sAU1qVar8UcwaWqjCQVLWGxPc6HLwUSAhdPZveiWUfDp7RHTytEXj99jb6DH",
  "key25": "3FLk1SPQT1EEtFKszjVLvZck4Kx8EUsZUfFpnZmMCeBWEDMXuBciG5aeJHw5SxjSYPiSYKXg1w2aBK9QWHwUygwu",
  "key26": "5gtFgd9mD9n6isZ65HwUmbDLaYavbdn9RjWN7WhGR1FFMQESXiKMoiNuB3BXM1cjSxegj14nsqCsfCyBY1s87g8e",
  "key27": "2zAeJzRcLaQYrF4t8iWvNGd5Nfn3uC7RqjbGDQdVPh7X8KHdLNDRPkLAbMoEB8HVVVd6bxZM7UtoZ3Bt3obermrb",
  "key28": "5RCBmxYgeShTdgVscssow5X2hKu7tC2s61BB4QdLkr1VhPj4LuFJ4DqwtFbETPH9UtcDKQ9HbH7QndZoPj38pQC2",
  "key29": "2PAsyfXVp2jq2wHT8oQt8rrWVrDdDSbkvLtCRkVrrRQK5i3LGHFqWvGnHWkMkiCnMU9s3BMLgmxP6v5XJj2gHbtB",
  "key30": "4HdtYKsJXTvg2Ea5YSRkLphuR7WUgnp8wA3WsLwotp9dV6667StkFGtvZepSEDSS2YfUJiMygPvLVfnmdtp1ttQR",
  "key31": "32Ey6eKHZ7eW5JV1veca4u12udXhgc6kYZMffYtuuqfbUg4xKwtg8qJNNABVyRKofmmm2fbzEDJ849x7z4q8VKd8",
  "key32": "2LNh1bEcT5k37Y4sG8S1ouGvvFnZQ4YmdvDzFGuEZ76MZYoZ3ktypzR3BoLBH5Y3ZBmr9mqSYYqYENHqw7YUFCFC",
  "key33": "3AEZxZ8g8ffZRUJaYdp4Wa9DRNdG1e2p3ueYABZpE4wgwFYg8Zu4bBGdqaCeqxdg9PjgrLxNvptokquiddZodZ7t",
  "key34": "3rVpoffcdAGUKjPBd55JnyXPpkSjcX7RzbCuCvb4nPe4VVdAkanbbtVBBSFaNiFPfskWNYtPxm7udv3ZLi9TNzTS",
  "key35": "2HjcV1arRnYyWKgwD7v4AZ8FBGTNC4BEMANvC1HqYnExSTqky1pmmY3jYFo4hj7bvtwrqQbcXHH888uqhghktEBz",
  "key36": "3aLUY9mQYzCfYtjjspA7Z9X8h4n6g7ts9uuqbmPzqFA55gLVgovovM5hX44B4rtGocmposyJCMxhjSwmy6jNLX7g",
  "key37": "36NMzQhYB6qrojw2UQMixPbsnzGdA1cqzDyXuZWP3ifdxQ6g7ugn8MJHLFH9x21Wtr1t1XcdaaCvDj2GFpVhP76Z",
  "key38": "AJKg2gKJGdDNMCHu6Jw4wHcge9q2iaFnHMH8Z6TwJxJLTb9BSZSd2tD3iHAVA5mcGi94wGBvVDr83ryhBWJq6xy",
  "key39": "T5ATyPkj7KsRnbo6unQfSLP1ij5pndNAoXgp6cHqH1eXaYycRaodVVwKsfccdCq336JREjbipxSa722EjR3zWPg",
  "key40": "4vA9XjESifPiNMqW3n2v5NocjovuDsNE3ZJVvSsdFUuorSvBmsBHkPpppW94XT8LySQrFR8m7RuuhQYe3ELA7gqw",
  "key41": "65vQENVnRB3yDKMigwF4kofU8Ag4C3C9yTEAx2nBuCzxsZ2yu1sfDNS2YyrHHCVF5AwAnjk9cSy5SV2nb9LuwebB"
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
