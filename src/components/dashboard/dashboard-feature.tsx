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
    "4rAbWuMnPzU3VaZs12aD2vJUepEoow5smdjC2YJGoek7CQTvsM7kq5zjNuxRKJtkQHrd6kwYP4ND2YVT4xsZ5SnV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2zQX5VXXLgCqHBqrcaoYmiFhu5kESrjGm8wdMs3MYYCyj95qqmZPSb2YKxaBKBFCFSqFbdbKrvBskq2X9Bo8XQJ5",
  "key1": "4DGsSjcVazqka62dxKH75XCn4oPMW7XV9zyVrWBg4UxMmnpbsm5vqvHPBZuEaRgJXnfmuy958yBLNj8GrEKniYaA",
  "key2": "3kQqfMdGd8DDoUnTHb4ssP9DAgmUmdAx53i2PyF2MG7oHs7u4G88HAoJmgQp5uqwEKBfUdAR74ny23cLaisnMrU1",
  "key3": "3CZM2kNQz9bZGLBTGJzyKjzX9gYS6iWqQcdHRRqhyBiUDr4uwpZF2TyzZhJkSXc7FZVP27iNwVNH8AdrULs55MVt",
  "key4": "44AdnD5JDE6hd3xvysjf58AM3Ga9bXf1KxmE4Z82NX2J66NE7dwXYRdAFUFCoKKoupBnYj5nkux5PqM2ts4TN3P2",
  "key5": "5ey1wNjd3ZC7BaRDUFT5Nh6nE6xBWnjUnxwZmUeutKbP9vNkV4VL1VmkEkWXya2D9FHeG4ef5crCTjqmfqL3HxCe",
  "key6": "ctLi3S1qtqTT7ahNtpqRsmAQGA5mewziyu9zmwpgcg7ANrVobEea3XH7D2HNi81ky15ocTjPGYaMFBKSezq2AJd",
  "key7": "3CFNBD4PbXVauR3EiLgkqS4WKwHoQTvyrNKVSRa2j8qbEKDpmm5xZVHBKWGwGD4Kk2za95MQ4ZpMpirhufXAq7zM",
  "key8": "2J5QmwfKfX98BLTLLPvGD62hYKjL4HHp5LEh4eMWAJYaHvw3fLFwAMVusGJLHKrotmSHdeyE9pM6en4uA6LR5f7",
  "key9": "2xVxBiQ1h7tZs4p7vmj3MNHfeNvdanh1jWzbPbGj2Cjcc6KkvojVSB3Ewh9722VZcfJA2LmxBk8VZn76E4z8jv1L",
  "key10": "3VDafxtH39SVcHHTxEkkY8hCVin3fADuEccZSBtzjwtutTKYCYhax1e946Q1p8eTKVo1GGNuQWxXqJtUMxoSASy5",
  "key11": "5Kk3EdMVbALqggeZRQd9PYN7nHUvPfHSPZiPoy515EX6HzfHJcvbuJXbQ8x6MuSbKEWNeff1Uax9i2hWb3u44UGp",
  "key12": "T6WrQKD3ZZ137TsVn64P8VCnXXxHmcGU78RKdTw5wpQyPU1nesRfX66qp4htuCS4kZZbSmw5WGZ2DtFitsuRAqR",
  "key13": "5qE1PAw93tz3pMmBfqXbg5Q2HSYhMz8UvfbKh9XmoVEYwLQKmJ4z2hrmNNeZBcZdtJxHNA1svtFy731dAnRtwk4k",
  "key14": "tPKK35LLUg1zrtTSZMYj4716hrLs3cVUcVTJUsFkhkaj9FTCLik7ktAtAfonmKHAjPuoRXKhnZ1sSmta5uETmiH",
  "key15": "5DKoWW3nMXJgCEAf2NqrWsz7oHXP8NnkdRvc7p89CVvCLDEXUmCaqCbqsFmxCVhAqaU5Pkf7onG9XmSWTz2qeg5X",
  "key16": "2fQC1TKqF7FFouaRcFt1oSi4FPx7Pa8U5EEVKtrT1e2H5kvSGjiWrKPF8vCA1yqaQYJG7GvPbc46GJNEwYtR6VEp",
  "key17": "2XcFvdMeR8FHUz7HAj8y7v1fEQMQFQnuAGy34oDkkb4XTjyBNcin89cCSyqKRYh882nVkXEDWVqXsN6usoY9u1tY",
  "key18": "qjFXy8rPcU2EzQvMJAviYZ3SczbcXpsVm6uXf9pDfLXYz931jv6wajZ29b5HvgNo4fhC3DD7mQvcF58Y1xxyx2P",
  "key19": "DEFgkLasXdVbMEfwWQzM2hdkJBwrBPqxPCbccwv6TeybvMvjj7n4SbHAMSNRZya4PqvN2tzuHtFCFHk2NgiV371",
  "key20": "2AMQmKnJRtAAfmF3ZDjUeueBnnvniG6hD8Ft6QjvEaqnUUhx1PbW4kuhmvu73ZdEJrczQugEtzbevBrdHsbtDgcp",
  "key21": "4nKzPKhznM7JsduABccAtZQhiMeXrqmjHsxMCJpoK1iaqQbrCmTYgGEv3pYsL7S8RvvE24fGEFjA78haP4xYtjf8",
  "key22": "127FQnX7oHcYmFJW3STDaJTM9p81afaNKZ9YSLNyxKxNA1PFTaiexULzxHEZaecD2bpKG66AwjjobNCNrpvHzQDn",
  "key23": "gsCYQrP4Tzed4VEqCzHqiirSGv32HnSaT7VKaQDkkd5QLZXFeKvtaFhMzLt942YZSqqyHX7D3FdoZGnrnWyzcg9",
  "key24": "63i5PJC1P7EGqjFUkHnxkMuN8YxXAPyUtKUzYGWrCPFHQzXDz4pN4AH62bBn44nbGQbLUgWcufCD3aGwGG81LoaL",
  "key25": "2b6QwsiiGNpTHrqkttrrdHzubh3i5DJy6oAmPVMHx21mkUqKzJz4166CyjN6w6uGwswK4UHmtMws5h4Y8chCja4e",
  "key26": "3mkLUPA3mzZXw6MbD9Yy3Xfbs3JkuqCFQBjBfP2eYJ2A5DPRsNbzqhwAfDxbyZNyD62ksos8ugWTuS9FnbVoBg2i",
  "key27": "3mAoWfwbbMZoVSJYWVR59iSkhR6s56kbr48sJmVBpewmdPeHT5Tpwidseqq2pstP2Xqzvygk73tGKmo18ZK7gYKj",
  "key28": "4VBxJqvN67fwpwJbjvCxPp2X1mLfSTKnhnZSoWLWZFEbtxPa5UXHfYhCqusYj6RfKqu1qFofEjv31KEn5kUkeb94",
  "key29": "62BregssGzuzkUuKrbmB9VT5SqXAkP4bBYuhx2tzdvWmijynpgdcrpzD5SUukiDth9osUSZqH8NUvzLqomVSw8aG",
  "key30": "3wvGuW8zSxxUoAmK11vE8XcQLM2JHo1GXuExmb13MJYbwJocvVPrf5d12hVMT43ufAFn6QiPZxC1s9Gw2VRWy3FY",
  "key31": "4PUW2EoQjbhLK7Q5DP1VtecDeB4dZ1eDMt4L1YrgFiakSFEoRaBAbsMmWNf689UVMHsXK6UfUmb5FqqFPzYC8V5A",
  "key32": "2opUJUg7y8sxzsuhkJFMX9Ue1fep8L2k79VnjjruF7XizPsZFRxasRLcKopePnGrQwrD8aVdcd3CvU2ft99VCxiq",
  "key33": "2yAZ75GBbGnWDTGbHdf2FqU2j1ZwPHhEK7JwzcUeqS9cKF2ok8gb5jGxV49H72Au9SPKjVMAhoSYHEjzci9sGwsU",
  "key34": "2No5DegekuVPfm7gPppQw7ucogWaNrRKmspF17UjTBRhz7qxzuBRaWqDNjzrbn2UVdFjiQfGt7H7robLAEXwqCGL",
  "key35": "5jrtWoi2u2pqi91S46KudEbWuZr5SRwkB94Q1vPSmR8H8xoMhRP2nBhSZfyx38UhSBfvQWKTFeDaMgzfjMgnd7QG",
  "key36": "3VdxjmgkUqvazVweSKzez2LoqNm7P66rHXjqCsD6ZqejzV5Xaxyth5UznRWcj1g4yjjNovTXgUHmskDDx2pinHUU",
  "key37": "2npCiKpwoc8jMQWP8SHcgrhUahY3aiRgMwRApMUD3aHjg4VfZtFDfZNSsm5TCZ2nWyu2SYmuzcuzKE3SgEs6nuY1"
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
