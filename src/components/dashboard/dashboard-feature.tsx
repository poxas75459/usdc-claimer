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
    "5GaibjvrkSmjRvppBQ5j3uP3ixKLh1f96iaUbkVC1RR2BRgDE9NwiaHzzERA8sNgKiRsmz77ydC4gqTdjDS8YBj8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ctAeYYRymV1dSEt5VhVTbkFQKMRdTpu4qmx2LvptWeippaikrNbTZv8ZX4WJp4pRSiFx8mCq7Rc1C37sz3RvwWm",
  "key1": "64DBDsQfCVYvSGPUDg9oPxtGKemyTKD2JnynsvCEziwxe1SuDXxSTdyfiovaTuE7PuZ17NMCbAZ6CCkamgxeFw1m",
  "key2": "3bMmX3KNgAdJy8gHHtegwQU6jv8Ss4aAPKQU13RcmJTtbNSaxdYSQsvWCVLU5oEWS1iX54upuRSaBXCCM3RTMtcp",
  "key3": "66GqTK9X8b9nqHSpnVvCBhUJwBGPGoNQaTEtgVgoiE9ha9zw6xaFDr3EHChKUA57wd8raKSMYKRg8jMCY1K62mVa",
  "key4": "55Zs51XdFub27UnoUqduL9eDQZ8QWLnE7nbHkbbC6H4ed4cuApxSSSaQdoETnjfDYeGkRmDdvbzWbJpqWpkUj7h6",
  "key5": "5cEtAozQGRqoK3kvizevMRxUkG67mUaEbbJqWAqRd4krDG7zF9bEaSPQtqQjyj9jExDScQpsDz1cyPjkrwiGZ9An",
  "key6": "2C4h3KviyBdWbcSYtGbpBNRCMouRC3opt8fkEg2Uau5hZvZjQekfFYGpimRp49w8Nt2PiL8HXmWFr21nvtVsMb3j",
  "key7": "3RVgxc8LRqPdtUD2QydKeSweqAtjyjwT7jKY9CXZon1QmeHmornH2ag3pytL8fLQqkZFv39RUTyFXeFkTeNGFyRi",
  "key8": "3mgfAY39Hfq4mH3Fr2qM95iRLciLZvcaNDTi4612uJudeepvPmmpYJb13YUKbhezh31n5MF9H7EEwee1wtEt5go8",
  "key9": "39HBsaUwMYZLgqe3dVVke4xPUhwAcYMgSbGBkiusBZxdyQUm5Th317kT3XUbBHGUZLVj3F5LaJogY64MMULp6Tnw",
  "key10": "5xkDLbp3rPgtCwSViqYmGpqN31X5838j1ga1MKq9tm3qq7KT32vynNU9g9Svvj8zZ1RZkn7xch1Eof2JFMwh1x77",
  "key11": "gPoUUUtFzvfmLk9nNkDeuRPz2QfKA8EaCbY6sSyX7G7LQZW9LgkCZe32LcEi8AWGudHYoRGjNG7otKKrqTxfHRF",
  "key12": "3GVrniUR5A7Tf6oeoGLhnAYqUQoMbWUc5A3JkeKNVW8tFczbwCh91GW7LN5z5UsMVdjK3GPHBMzaGYjP7DUv22MV",
  "key13": "ETPa32y7KjRm1hESK1qFt8bmnmd2dTUta4LWXCTMfvqzuAFr7bcWNQQs4RnRLFUZ7T77tGqdDV4Z7CgE5vhb2ZW",
  "key14": "HnFmPKb4zyYZY2tBtC3M5oeLAE9R2jnsshLQFhjQnEZrY898BJ37TrkKSkfDCJjpFt93cfE3zTNSESskQZEby5s",
  "key15": "r6zpmhFdRcgMa8LTTFLdn9YQfyC7bQWJMeYyiqZBsbNg61A8ux31HfRgVkTRVTF2bH2925YF197o4xXi5DTB11f",
  "key16": "uvvjsZSVg6LVW1x5s3qYRwmDUfuzcF5MSfG1dyrHCb5K8UsPPJuEomko5c9KhJT48oAABDHbJT5CBHtq3cM24Sj",
  "key17": "D3BiDUyxf78wXvJu5m4Rg9bGcNiLY39wJqV6iVSrxRFL2WZUjWbGfcWpVeXGRLLK1q3UbcVkVWoiGFk7Pgs4EFQ",
  "key18": "3oGr1jQVdFuBfs3n3AqNpifxZYR7yWmGytYtVZdysPG1LtjhUGP1bQvFmuy5CfP2CsQ9DW5mgENRq3vXXZam7yXS",
  "key19": "2CMTtKaWRKgxqJyY4Ae3QG1caB6sMbT5hNgWY7mUAz4Ep2x3ytVLnfkqyvRGXj79SAwijVYhpKqHEpbUr6NserUb",
  "key20": "Djm1mDEcDPNuqGWDmhix6JtgmQEjZicDqFNy7stNTmAoXaY1FQQJFK9qVphWwgttfpV5nnFY8xHezEJpfahEPod",
  "key21": "51YyThTzmdw2d7ujo7a5VBHQHmtdH2z8i8J8xPkT1UNXY4M8u7hmoB91bZ33G4DvVXHVrC33zKFNR5n2z9AnGRjb",
  "key22": "YrgLLE5JRPBuQsJGPYSB41xid1FkjYdUxXb67d9U7GBm9xjJYKEmGVbmJSozCyeV7ha1VfSo2TLvP6i1BQH9PgE",
  "key23": "3KX1Nnb1Cm2NzCBoW4qNUNWzRPL5MgHHSnwhwz6GS2TAkzz4A2kreryYkLmUvv8Zu8cxgmur8Wrp8mLemXUiFyaY",
  "key24": "4SNLi4QKNMK4sAuemtU8ALNN2CUEP59A55ZoiKBzvRcrpbzbeDX1TYJcJnGuW8pUSYmN31K2Wm1FqipxLrPFaYga",
  "key25": "3ekC5pEwQ81Bc78kkPF5TDzq6NDVMfWnhVr1U4bdhHkGdku1MMG6WUW8V5kWYEVCdLQCc9keAhQfLEFnRpVziLfY",
  "key26": "66Y6hFbxuakWUnxPXg9nehD6WCuEwmksyYtqSe14Toy5unbayazBAXihbyS7BBa13dULNhYf8W8zuDB3FHUwDBpn",
  "key27": "3MMoVDCZjDYgbVh16ExkwHpfYzxXcgPmTEwSbJykydtZkDU151vHiAJuQGCNSvQ2FoLgGf7uzmT5ShSwe9U2FYwV",
  "key28": "38yD2AT6Y9c4mU3wetNijXvbfg9RVwt5R7q9nt2aQQaW2HTsBDhVdjNN938LVJ5owaxMt7hw4Kr9SZRjcgsaVW2J",
  "key29": "2T9Vo7rBGDANjhF7Xmp5puk96kdmovfTknREzTGMUDtNrits11HWHWfC7kB1uPkoCFqBgZD7uqcnDwDZp1NX4JXo",
  "key30": "58yghTMZJbmeWDPkovgT7vnhqpfWajhLtZJJQxEU2ZGP6CcLyeYPMzp8vbttUA5cHTnusYDnoxccg7R5TDrZyuK4",
  "key31": "3vxWr99V2KKdN2e7d6tYUUPbh6PnUAr8tNbi8tnm1pQ8R8CPprptq8W1ybpxv7R6iVFx1D3Nu75UXaXnXngJUZmx",
  "key32": "55TENGpFL2CvZrfm8StQiLPSnNN74wDU6Gtb8NFXTMSeeYPdqzKHkSghvXDzzUNuomoeybkJWB51yPdyGzMZJqhL"
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
