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
    "3YYYtFCobUGnX9QYZSY4TLEaHTDcNPr9sQVb3KfNjH56oBSXvJYH9WLV2uFDKYxWBCjcYXnzmYwse3cJ586ntWDA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "23oAm7fLfgR8waNedL1qUJ2xPhLqfGDGuQb5Q7YZwG4VnifihbxTS8N2az76VqVfQmYkhNpxTEYuD3kimNbuaRBU",
  "key1": "49EvEme3zPtdg6qDdb5ENpE8u78Pzp8qsbsSqZ4GeGLvm58iEUAR5LNiTM1txJBzoPmLvbJsPEoB19Lef31jxA5E",
  "key2": "5uQ8RzKQ3Z58FPpiSucgoJyiXUMNsK4JZNxvJNFpFShUXzr7hdoepRbevWY5bVy8wztwMKnsXfLnkB4SUHcyCHV8",
  "key3": "4YXqwtbuiNsiVd6ZJjfEmPjrZabUJGd373DyL6FQNEThZvhpM4kcwkCod4VMAQL1gTC8DzmYCmCdXmDVuF7x254L",
  "key4": "3uKQfXoaXk8pyfZmCZ2bJv93BGRw8EfX3gW8EPJpb2EXKRAJFYfgqUJjGKfz912ZFkmKLDqt8srVQEkmNuP1cFtp",
  "key5": "TvZTtwGDWTKX2BUFbqn8ADxqHC2CaiQ5mSGDpfVdfGKwm71TkFxobBLw8EJyaJTKe4b5SbW2yTAYxpoNU3H2Vfx",
  "key6": "3ZDjbT83a5BgkcCog8dUi5jMLxbhJ9EEBe13mYJqRaj6yj3XtPjYrtbEFXFtdRZCZHsVUxQm2xG7vMtTxoA8c6ge",
  "key7": "58kP8k9HHRKMqoqUyReck1jde7xeqDRecYf7RWwncWexZxCPWXAoZRbzgKAKiHLAgYs1NLcFBP8AnzWvhvdEHTj2",
  "key8": "38Ex3cjqd7dcdePHWFmikmJXBSS1Fa4YovVWgr3gNrkAhEkGBD1BhrtAb4h4JYMDFdLbJU4B8epGXmWpN8DtSqVB",
  "key9": "4jY8z8z63UuRrdsBD342StVhrspWTMpjtNWKBjRFKB1CXJZYijP7HwdvQ53rPBYTs4KCW5Q15A5QnQwvRX86Unm3",
  "key10": "436eGJPJ5EnmCaHyrMbfgq1j3jBgjbZuaqFDewmL1JjMyyYW5UNJopYjKRfEQX6PDhpeuZkxDDwpG8AuocNbEjFu",
  "key11": "5utGsyhMDcrF2izffuEWA2ZULHZBR9ngxX4FYetnZisejvWLfqnidBqVqymB2nWqbToSgSiGZ3YtnNujuBwNEv1Y",
  "key12": "5x5cpUmkqWBvXK1a4CjsEPGTP3wt9rPrnm4xDG79Tk65vpK6MCA3dgLuHJfXbQD5zYPEQAZSHZBQNgcFV5cT1R8X",
  "key13": "tZFZnjuRjGT5hWpha7xLyrQ2M2bUfWSrpvx1W99mEJsuPaXi4zNWt2UKavKgVEjXjxGfebKFQXRUK7VySVjFFkF",
  "key14": "4yHnAZQjqyNuTAfqMuxB36hb2SAcvc8KLefUUYDPzJ1VozZ5pk9x7RAJKVVqjzJYwNmYbQyKRRuMYZVnJMSS5A6C",
  "key15": "42fvoVo3i6TCNTberwutudyuMbo2ZJut7NSR23crBfV1aCncWubqJHGnw56g9ZmdUHZTmZmdDeBbM3uNwgakMyzd",
  "key16": "3EU2Zt5NqH4PKU7CYpvUMmPHs7iXVwVRaosajEAieYj5wt6kGP3s3jQHRr1fUFMtxvGFF4NgZmwPFny3Myv9iRu8",
  "key17": "4sqxVZNVherqzzHoYQovgwQRRR54bEvxHy4NKbnR9Tnw8Hrx5XLZz7FmxqS77r1pQ1E6MU9dEDWF8aaKHUdfp9t1",
  "key18": "64VLbPchzw7y4WUAAMuef1grLyxjsgrbDC9BzcxEQGRAeUYY9EffhBhacT4UtLeZoaBfsCzmBGQtgWsxpLwvAmEu",
  "key19": "63nhYP4iajKp1HY7HSjUhE1aTEjHaSCaw5WTh7A2zXPiYXWEHggcA26D2oX91PeMkJGbvvJqrdQJjFKunNnMAXve",
  "key20": "3mWqSC5mesXx77gCG8dsXNhpDEkrNyRjiHAL6kGMb2WUbNoY9kYHNBSTCwwxcegG9zwRWtfoL5N1hXxhi3eVUziv",
  "key21": "5481twyzPi6yhKx3ifqrtKzufgnRkihZLyZ5Gk1P928bSwmWmtKXnyNRtxnL95qo95nsNtgRMUPxS3fQkidG8Adg",
  "key22": "2eBa3ta8XJC1Q12RGbUC4tpA4oYWzsYLB4XcWCgdzVqbsYYe1GieJ83g3HHLZnHTuLVECGJc85Cm1mqXJJfsjnZZ",
  "key23": "5HSchgtdoeXWaT6SQW8uP3h4pqNXMGLY2n9QoorSff6sPgduv1uwjvj9RDpqyj7j3uifoyg8guxxaMSA4WCbnJof",
  "key24": "3dXGBwKa5NpnkHqti7yWTGm3rFJjHMmjPaUJm6ekds5ukxhakWFJpvLCJKEj8vMV3PArEQNFxQxy54HQkkwj89Fp",
  "key25": "2ndH1khY61N2N65x4iUAGdbtNktpAxLxJZruASFx6RJS37uRMtfvvH89wc48WQLXU3cZ8HmtF3CLinQhFxoxZibe",
  "key26": "4EYNpFLYTRQ2ydmLnBQJ6rjqGTystqPyE6JP7oRFshzY8mz7EEzXYwQsDT56oagWHruR5ssYhMBPWb42Y86JCrF8",
  "key27": "4r9qjrcdNZZMrSfAQ913E4TFiF883SqdhqmLjbaHVNrKa8Moy5JGfFDBwBCQvLS5B4RbEG3wg1jy3BXoHmDvb6z4",
  "key28": "5eDvumND2HybcgnebNLXGCikRLcBEnggoCm2mWkgCXvGhZMxr6DF78FckgbeuCGcJCuhvpaWx49UjzC9Fn1LVrPq",
  "key29": "6427qfVptdwLaJAEduqKZo3HAPgwjiAtj9rqgaURpKa6nkscJm3Eoj9ifNRy3fmkc7couGNr2JmGGeMCkaxk5ozQ",
  "key30": "63qX6JL4HMuP82iq54gZvdK1CC3eNuCo87DHGwcXk7ECA3r53KWQL3B7YZWs58bedti4NArZAer1ukUFGWpcier7",
  "key31": "3PywBYFYBUpzk9TC1LevDKE6XQz8GKe9Fym2Jun1rvYw2ujLzfMWGyAVcGCZJLmPoszRydNXvBek4vg68HbfMi2c",
  "key32": "3rvAzwsvhNnopFthfRWeSCpHkBBDr3vHUAwzeFsYkbtwxi5kcH2VPqfZ3SZWN9TfcrAKmSsv2pc4TkR8BxxkmVHj",
  "key33": "5411VCPbCq8J1NVp2oBypD2L6ovc3G9fkBokCH3Qiz6kWhQVKb6vsqTtTRsyUbaisRRfHuJspq5PqSXjXdMnhpN",
  "key34": "21L3xh49oKhUPt1LC4WJg5iwaoGDC6EyPtb1bHQP4pWqQTpxTsY2cE77PjzF9mdzhNgMayTQrmVHK9yedJVUNkhy",
  "key35": "3Hf8BVsinKmTZbGkD9yqzuxbVbvLWpSsshRrMrmZePGc2uteAm69rtc6gPupA19WPgJiRXmZxJFWxypGM3sS1ZNB",
  "key36": "fk5Rtj6WFjzoqLUURqUYgrfgVJ2P1c6BoxUAcnwrguhYqW6eUPi1x8aLaDYsLXtiVCz5EN9ZkWNzpVYMEc7PCnr",
  "key37": "44TK4f3eAU6TLapeP7H9ANJmWpkAx15ThFZJL6ezb6k81vE7sWsYzKDtNpYUqhRzKTGxun3wCuTDGUcjNVkkh6vw",
  "key38": "5Z9RGqUeu41JqwhiWuxHV7z2V88s5RZJyithu2DfrUdaVPnG1MnTim5cyPhMQeQ4LhPbXSqSL4Gh4ALfwemiuAWw",
  "key39": "2YbjmDk9u2G9v2h3qX5f68isRYU86qVrmSdodUwjMCpf2dy3JHpCmBKE1hM71355EPK65nVEMYwddDSGbHMkaVos",
  "key40": "2Rr19RQBxdpdtu6NBpHvaTEQTQSyd6SsNxhadpn1fg9PgR1MBZenM3dRKsQUjAuoTdqsWm4D66mpbh3ih8YZrrC1",
  "key41": "GKAmwQPEuJbC4ZA1sGKq9WRJKPsm2FJ2nLbUBJbDYYDg6G41EtYx3iPwFThJ4uPGnjQoTodPP7Urw4jRCcbxyjS",
  "key42": "3xiHgksnHHqyyjFpqDhNUZdqq1sKQgnchGqn2Fr54QAw9Qtxt1WHBS1SJKKpPfmMAbbv3kB7CrxC8fNFif7g7QMJ",
  "key43": "2NaX85D4AtHAuV8JPP9aMqb5zf8drRLuXJVH3gVQjYxtjxjqaKmQGKtYHHBJbXY9geLMd4qrrskNaUAWEamsKXJj",
  "key44": "3jtLos8ArwzfCb9TNQDQKUDcyPY5fgQFtnEcHosy6VbrbfyLDk93hXTyRp6KQQajUcECbhuLTcZXzoQ55ir4qdeJ"
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
