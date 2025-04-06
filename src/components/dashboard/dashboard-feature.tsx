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
    "4MWcLMBpfvtnkMuYCPZe1qjr7YHiFMcQTBn6uBh94TQt3fJYTStYNWN3ZATy1ALgTHGk1eiAUCjx3eXwwZH4oz85"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "49SMPKDXXQMidZyu5pWBD81e2gNjFUHRHFm6sHoDPWQuCkese2E4aNcsxzPta9YKScVGZvY9nhgAz9wNdNkyVsqH",
  "key1": "63gb5Wd9gp9SRmXVyjUqEW63xWYjijbRFDAhY65LLFansst1qofrCtdouTrJz12aFTNGwK8RvaiVwwrypoyN1kcC",
  "key2": "4iRBT6Mio894BuZh6pPxe43QR8JUzob3XJTmMeHziN6wUCDH2fwFrcRwn7iNiPdNM7VTV2dVhwxjTv9yL5GPKzW1",
  "key3": "5XoYvCM1R3P1Vqcm2sum38zWnM29sfVx3xYD5snkuV6BrbLzawCZ5AcHqYPFpXXbYwGTV9PGNm1x7cKPiGs2jHqK",
  "key4": "667YB1i78iLqkA4orx54Jpbuq1C24LGSoF8bi2QoovQifZzn4R5T1B1t25NTfxS8Ptm2UfJHaMdL2JeStw1PK1Mc",
  "key5": "3QhaoUVduoJubUrGgL4XgDtrobXKpwCT52pfpwK9tzUba5nB3vLmvUQztxCtrnDGRSq6PCq1ZeaofzR9SgDA6aww",
  "key6": "r3UWsbxKfXhSkLoNc3G2Em48Ydna3usnWREf3VAZbWdyy9sFLiYZFkd3hANMTpkHNtL4U71ziZLXT214NYebNrt",
  "key7": "5dqqsPR3G5y7QgXMPZCyR45jvr3vDYycTHHwp2RVgtBUkBoM3adEfm9GC3DwjWaACLcDbrhKtLY69Q4tpTLiqZxe",
  "key8": "2yPkACmVrawncTgfGyqfMFuA7hs1RLTRUhf53kokFE6n2eeCktP68qNpR9TC84YoaMZRq9p8igJnAqpHwuS3y7EV",
  "key9": "2nFBhvwW8RBnqYwaNu81nbQMEZZysp9Cz8CcnPH2jkafqcGZQ6kJ7iWc1tvrca8xb9h1k9SKT1U4CGpEhmEj2gUf",
  "key10": "w8izHhqGTnjKKdQQ5DPXmxRx2bwYpXQaKGNNx5titBwpXnXpuwshtV8SZb8pAhf9N51JhLzY1G63Q5hVU1gTqeJ",
  "key11": "4XF1dpf6i8NCTtVMWwMgzVpaVSuKMAMU6PMnEsyv7LrcMgq9qcDnhkwgWo3er5dU4GwYVCC2JF8veHc92ToQ6JzE",
  "key12": "4WJ3eVQVM7fmfhNrNkrsFij8H1AoiqsWC2B2Y12FaZ3w7E1jXczRBuGjk8fsmce3SdWJLWC2QvBjWB4xs7DdMzTb",
  "key13": "yvjB6V3hVAWDzDV8jyN1oDMECtrbdoiGCyNPCTU2tYk4P65WuwPXy93oeeTQvWqWHxy77ZphA4e4v1T9aPnEdsT",
  "key14": "4BzQj1MCtLjRksi99fSUxCayYDnvBXmyx9pywEcuZoU1aM5joicsGzWP8JKn4nx6sNYT8bna1WaPv1Ygh6o5gb5N",
  "key15": "34KwsB7deHvV4RNsCZUWTYY7RFEpSSo3T5CauJRSggJk5skMvbXD7zDpY9v2rdqSttbieDGjyA5fGgLX6diQ9r5",
  "key16": "4oFqpmi6QPXEMLvA3KMY3gcQaok4sU2WpWkgK51dJvEiUYKajatJp5BG8fPiz1dPFYb7HaNDwniugc7EhYJPui7H",
  "key17": "3tYSRPahEQJM378JRx63UmLRFwyW3ZJ7FWiCE9GEXhLgzMN8eGDNJgzaF3PctkU7SbmyvE23GcAvSQz5KH1kbm4v",
  "key18": "2mzXTKyKUJCWAjHD5LHb3J8VYf1HHC5ZZ5Cfj4CCGRzGjwgu5Zjez8QioDyXq9m2JJiwwEGjc6QFZH4ViaCqHSx3",
  "key19": "3J8ypkQh2dmXtesSypWahPt8nspFWjzev59rUboreLAuZizVBzTWoKP6DzfJR5x29vRqQQwHCJq1HC9NrhVa5zwX",
  "key20": "3Ky5L5kTzuP9RPYuDa9iAepqKWi9tLZfWioABT8v8ALojV4xXrhaH6D1oBvmoqq23YMZQU3tmE6uZ7XrJTECPqBK",
  "key21": "56AdmK57Zz1KM4weGirHrRa88ojUMP5H6HsWqkGG4ondbiUkgNCfM9kJ5y8WW4Lyz9fMLXpVwGDw9Cw89WzEmYBm",
  "key22": "gZC7jWn8ciH5ZZanA26Q9MYHgR4cmjMnABcEgxZdn3AhPToNkBAYaYvDDTNRaB4SLjcu2L1WzdzZ2zAiaJSsP9p",
  "key23": "4jQMw7QFQFLgfxZAS74VZEBADU9ksjRjTnWQhy5gYTPaK9oKfncp1krZJLpMVCEfy2dvKD6Wgyxf2xfYo4acR3UP",
  "key24": "3kt7F9zHbU9vABDDzrJ2enAgWsnY9fuBo5khzCjnmVS8bxBYB3Umvzx2URdXwhGXnHn4TsxrxorngbS4d4B2cbTW"
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
