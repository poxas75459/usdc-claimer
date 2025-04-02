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
    "27FuHJXJ1VDPJBE6U2BQsDT4Pa3j4rYHaiG6qvM363TyVPgUox63AxAF7yiMxbawLuvAgQoysSCnhRVRywnRCRUx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "aKUR45f2zMojfiF46DJMYg2tb63VsfMjLrAwzqQnXCX3QBdsFEVFtWY1Lz2XR8yNEoPogKqcYpx8aEHuUM93JZV",
  "key1": "4h3WqrXNV5HYnqU5VxsepJsKNqhq5AR5sn6nsNaQAJMcLmWrFXzj4sEWzRN83pYS8sa1EKedFQsyKNyzrsnb3qZN",
  "key2": "32TDy5wdqRoEs5wumyeGcC8sEzwudu41ekpHop25e7MVsSW26Q3B4ZZwqqZX7iZAoKfHwQf9bPdQYNXQUgHNfs7f",
  "key3": "M5JzhSHpbUGJaZMMR2kQHAQiGjr3nR7sZyPjAQp99pKKzpX19b8PgUoNxxVXr2hwZzgL3w65kTvs9vDc2eXqkck",
  "key4": "49KwQ7mzTYitFBtyod8gNBW1Nivq3BNeX4cWEb9mFN6pv6hiCsGCgVDjSvQ7TidpDbyuNnVyqD1PurLEs8wN4jzx",
  "key5": "fFW4Gipg5PteEiHvpNCuyz5cFjUrLZMLuTZmvbafaLPWJmUwThC1u1EfYLdjgqqVyoBzRbw2aZ1sUjXtWSm4zka",
  "key6": "3mi5xgdTsEwdGWGsEVnem1aPiSBuEmRCsR6zWFDadEYo4uZGzf3ZCToMo5HPsAVaCYSUFiFRdNDS8Xjnf2DTpDW9",
  "key7": "5DfKP6Z9bqJSce68S44hUNXJkYWTn7B5xNj9gh6SW9wsA5WMip4AcvSE5NMC59QWKrwQg1TvJN7GsKAVhBAXK1By",
  "key8": "YjnoXNSiKqjCrUTZYvrQDF43nHvZC4Jxm1cEGvFP9KC9QmybpGA5kycMGGnNqv3PqJgfxiGVKxDkpZsRdLnEWvf",
  "key9": "4pVSxzzLRcEynkCcbi2GmXnPzb8RzwLSoKXnCXmdFBCE32kWeZttRxTGhEeK8dMrxq1V7gPKfWXoVzJX9VVgyrpe",
  "key10": "4fx7aUAKNpHysAvUoe33xappHmk2YxhUBbWpmGm9ivJMLNzGjj2GrLKwZkzikkXXBVW9Z1FLPRXK2AN1pfkyoonr",
  "key11": "4HyTvoEFK1xHan9cP1ns7GsrmScoRxJkc8E3zqpZspyr9Ry1vNFxi5jdnBgzRAoDyHJ1495ikQAwVUxEZMGUZW7a",
  "key12": "5J6XVMDvW2E42NTac3W82hUMqmSyJfc9SLYfhx788EYqQ1ohiwWfUVpWhFVjRHM7p99G3wzJboV2xrzvJj2G1rt2",
  "key13": "3wCwSxsNPk5ScevKnNT8su1qqRjyVtNAMmHETiSN8xrLuEAyhoZPQ4oEfFz1x4Ch5fEXUx9DnE7eV6jAfcjeHt3J",
  "key14": "GNgAkkg8cUtoXyWVBrtQFbcx9bcXCDB4EUYxWTDfdNsTJiwWhrzXmZJHwBYXWvMA1vZx9nwJq82QP4ywE9Aw3wD",
  "key15": "3jBv7XRN2hEhiC2TvSHWiF7nvKDFrQHznSXRgCZ7ibzUYKrLCuD6m425aVGrstGvPr6yLFgnRyvJRUpPuMsY867m",
  "key16": "2E3sT5xN6i2A8AUYw3bZrpKLLzfQ1Q6qeGe4NsjxbynpuukNEe8CfLWGejsyoMSXDxAorGiqzAymovCfTLVL2R9Q",
  "key17": "59iVv4spt2jkCJLB1vVeF9a5NQDRqebGmC7C9FH8jHW5mkfPKXwHGLnrg5C6HLhasSz2uykcezTdWQh2Ndh7vQz3",
  "key18": "5k9GFrLD7NYxNfJimMqyqerARYc75cqmNL7UTpJwuHtBfBhKwQQxdAtMz6v2z2Bdtp7pCuKPrvKrr1Tw9XSsdWBB",
  "key19": "9kLq1wSy4RmEXViDVYgDMnotbxXcrvFTmQvFS4ZaDpPC7q8PGkiCsEGnSTZgm8YLdp4bc4GG749oYHry3w92P8q",
  "key20": "BW6jFtqUGQnpaLjgJUYX1NcSJBfvSQoXgam1iedS9GmPX6HXNJQ55YkNecjqSEzXtwaXuuByT6rypBPCyQLZsqe",
  "key21": "2zByh3y9coHWtiF8t8vRzoBDUddahtHEnkoSUnzfTExjJfDaQrjF5X2ZtwMaAqR4VZxMBi1DxHsHfTtuNM54AmG3",
  "key22": "X2C171EeLF8Be67foFoiBK2WyKYpjU3JDHUTwBEvt5Do6SgMzGFV1wvnvxSjzKgimVQLZeDJBMik9tJpQACn9rX",
  "key23": "5jZ6w1X8D1YbFCmSX5tmuQk2Dx7bY7jitR2RPCXCwtAmT1jHWxHh7pgfH1GEjJsz5DbYNS9HsdaY89DoHucQp683",
  "key24": "5b5txTtiSUK6GotC9jKSYe6UzULFr3ovorWtgNsAf3WYaHWe1pAmdBkp9y3zRrGtgJuPwz9j7fDRpUV4cqSxq4Au",
  "key25": "5vAzgNc3ZxdCx1G47NK8xX6xLg6Dc45sABXDMGQzuRSbp9NgZ7Kt2CSYvLFyvz9YyztKQNHZJV1mN97rjVaAjkjG",
  "key26": "3LRXCiwcF1Nc5DLzNpaoWf3SBnThmFpHvSDr1nVPFBV848Vv4qt5GrBEctEaNum87opbJZmnFAxHhMYzsxru2Sp7",
  "key27": "46A4Bg71fr7mTUCDm1iAs8ERRH1tgMRto6vMjAJyqxFK66L84yN3PWkqsahq26GVFN6xPXzq9TFbSvtw9RSmELym",
  "key28": "33Jiv8rtzGz3b7Nhhs8ZPiXEnzNagqnPB4TXyBFFk8g6m7Ms9BNtyXH5Thi8eq3rP3a2o5hZvdiT6zKCPZ8VRZRN",
  "key29": "5YfAFbmoZTPBhQqFUXdzRgzLWnYVoVrosP3iR5qp927LBBQoo6rMfttPH8wCVSmPVGrq84rH69LE661G58BqGxCg",
  "key30": "5BW2sipPFZBbooHEZAAkA5srnKTdA4uyHeQAHEy4i9sPpLokNngErKpFju9tWejD9h78RNgH1iYgqNYrnutjAExd",
  "key31": "4xrsCNycLrrCUt2geFK8zYmutiFnLKrvTCvQG55AeePjEteTQE91eVkro2YUuNL3CdTKb79xmjGR8QuCYcRMrcaf",
  "key32": "2sn5Bd98ayrMpcEAbk1n6Budaeqnzgiq2kBoRa3F69Z2MfQ61EwRkrUMg6AWBpe9pXGRSTxJJrNodbPcsXbyCsX5",
  "key33": "3j3LEiqQM3iJ4vPiJa2gFF6gBp4B6TyRti85AfkkzZwuMDhzpQovZQwod1csBmHapCWGsDdeFqRbVv5D5x8bQpYn",
  "key34": "3wMkPa3xueGDUMLfWdPztQCFNB5WyBbs9VwJ8rHbRf9pGyv1cuo13XnydfHzqkUjTZUFKRkw92Kwnh9GWc746Co",
  "key35": "5UVvUWnztgPVejqca9carK69bkfQ16sERuRoa1KJP7Vj1T8ofYwzdvzucfCjf9xDDWqtC7bZ5USwNCiGS4NP1eWL"
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
