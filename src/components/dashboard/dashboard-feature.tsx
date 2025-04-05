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
    "3zqUQt5VktwPwhZusgWNz2hUzEARDMSWQ9NnacJjF3Po5MJe24tPnSdwUh5QdiT5XN3ftWbQVZXoirfWTDNEoH3Q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3bKM7B352bgbatv3DMkGpPk9FqrLCZPsGxTyWJYVJwRfuSjWxqvt56zL95jT2RzDbf39rgUT5ebiWEfj5esQNdie",
  "key1": "3LMUTivDuZQdHDWq9f4BoG3vTAjToeqXzZtSz6ayTLkF3bcUECX1eua5A5FhWMKLMUq7iBZNQwRpw3e77w91x2bA",
  "key2": "oUCcCAL9z9moMpkS8w89aQ5RcbwDdTEqdxKtC71mQdxKbmMKByoPf4LQq8HdznWhS6fQtmhx1H6zCjSXn3vUBNk",
  "key3": "55e1yyr2q4fpfZkvDwTCk6aqtXZBJAS8jnTC6q2UhVpmudo3caXtCRkPqUCY1bo2cBzAY1PSpj1yhZAWj3iqjSac",
  "key4": "5Yr29sRE4iSJZ5iWmmhoYDjqEWX15WXsbo6WoMnFX46bFtn2y9m8hxuPLvrQQ9KdPxucFuSGVypRsXxKV2LUR8hd",
  "key5": "3XhXfSAWHnLHFrfHE3WVnzy38d2wHWNBpFAS2vRov5V6uGtMhMmtxAZP73gByoGnXrap6R2YCMUa1WW8fzuPDC4t",
  "key6": "4oUz2KaymKq1TpZFTPhAihsGJfNaE5ZkD9pPPn1AjuyXuJhHAQE4TLzE4Vr7hHkmknjpVdQ6wsGF9iFr43Xhomjx",
  "key7": "Gv2dkKwk36ysGY7iAj2mzdLMHwHqA5ZNeYtE4gxk3gmCw3yeiUSU6uXV2j7D1uwAAmQZ2T17xG2qhq5svXahZQQ",
  "key8": "47B8mPjRvmeJ1TjD8ejyEvNknJeLwnmai9KpkKTKXako3Y221ZHVibtor7eiLtz5ckTcAny9jKd4aHLxbSLvxcn3",
  "key9": "fLtFN78u4oeFN4ZpNKJajEbc5U4dfhyfoiCkC8gpz6wBY3LcKV5QF5uuMXLeKfxsZDdcBcLw6eGswfykuTJukwv",
  "key10": "2uMDoDVVZgSVy9rKjetLQW6R8cyUveRZgJTgeFBTgcgJ3sDqL9U1x5xDgzrLLBoxpBbvKDW9jrg1A4auwwQXu8Co",
  "key11": "4by1QQrv7ghk8ehHKnKNqrmkr5nLW3S8o3df1EyNtSBtjs1vh8xpn2YhENWYFEa1JK1XpYPCWyFqExbxcqmJPARK",
  "key12": "5xDBUXZ4sK6eLtGgDvZVsyP4LtinosqCbHgGE28QFFW7yoz39t2RuwVGrPQnb7snN6jdBwYRfuRpPJEMGWkMYfxv",
  "key13": "5hXNPs2tTJ3cwRhPj6dc3eXiJ7qfM18EMq52MGFJaZzdv9VC8tZvgoUe9EorTZWqwwVF4axDnKQ3vzFPFUd469e7",
  "key14": "3mnzea6eBrtNiawfDLEt3HE45dLW9bA2Afau7zoZg6DHJpNfdguy5P1tQbLyLT288ScXf18bsPnk5X22ZEUWotSq",
  "key15": "5bVrWxYzpmMNC2G296nwY62Bsmsbui4rdFa5YM5thjwCakfwXFM2RfQCpg4VFkEvPqSBRoPzEJ7j7P6bPmAPxwt2",
  "key16": "5mN9gux4N7APMKJLCqkB9jdAff3PtYXzdLb4Y3zsPC8wV3LGUHjufekfzPh2xUSWhuAjt67Rgchs7zH5gZoicJbR",
  "key17": "44VsRUP3X9Nw6osDMPtxztYBmZN1dHWPiVhw6HfgAiW4BrRiy6Gszkv2MufN6PVGjjXtR2GRE4YWfBoM3Az6S8ng",
  "key18": "2d1T3LW3gA6gzBJQWKM4Lx8XsjtWKGtzJR3JsFWPrdY3pEzbDQ2aY5vpAqH4DPQxzkrKhKXwrLSBaf2KDgVbobh7",
  "key19": "3mVpu7C7T5zx9YxZXwnsM1Wav4BuwXX79Z22k5GVE7FFWMemoXTvcTWaRzEbnSXp79GBJt5SpH8JxBFi51s37QxK",
  "key20": "46MTrYyDjTFgDkbF1oAucqNpGPfm3Dvr4VLewwhB3smpTFo9AVbExaj9esXtUZAznF8UbXu9Rfhk1L6zevL11pLH",
  "key21": "mqFUzrYGSvPDrvdC7wUNBwEozfpV6xmgaBqUBTWHm3JDk2FnQWrPh4ahDMTn3iiB6cdyroJBYgUKVg1QqQgSxyj",
  "key22": "2fiJE5cpjXWPcTKBtqa5Q3ENpSfMu7LkioFRv3AM19RkzLAwF9ab8DHk6yWqegUN5NaYEq3ciaxcuhMc1A7pKHsf",
  "key23": "5cFH7yPRbKeRzEReHR6ustzr9P55TkuUFjn35pwKgjgiicxo7pc5JdgjqZBWCWhZPyPJSsNMJwB2vC8Ch1UGEw2s",
  "key24": "5RMxJH4a6P7zoWDDSDUBTnG9ZPdYTZzJDCGiM1WeNa4Qiqrk7diSWdmW7Qqj65o6iLR45aZw9F7KTZpfhPvyhY38",
  "key25": "1KRrSoizQKaKYNo8mL47pHCF93AeHiBURLopZKHpMRTYRQ6H7VqPvhHak4WwsqKarggrS9tBmbGMiwrNLk41uXV",
  "key26": "3oVLoxVdTdDVzDqVK1y822r8oveSaE57XWtoQnCE5NWjtX4nYFFFgjm4q24XyP5RmYdA5jzLgu7JBhmAr2uBiibc",
  "key27": "2jTyYYTfT3Nfd2wv7aVc6bBETX4CAdB5WZfjTbmNuyAPixvYHsdrSgcDaArV1gLRPuMzU6p3wruPQu3H75tpycTk",
  "key28": "461Jr5M2oDa3CSmDjYc52bgpzKB3EQD6wjM8MNvBhCyT8FeLd1vkyVjLy76kGTs7uPjWuehBx9mauxXmatVQ7MTb",
  "key29": "zwmWmQUijNQKcrNGT2G2XyZd6K9jKwzDjuushQkqE78mqWi3oesW4ZZhqMSXD3HvF3uKjZ4o2qbpCKdNDHeLhC9",
  "key30": "3yit11okRtXzJ8fVa8jXGYJxRpDCHMPQjEqyVPvmMtaqG4MXSY1iSmPVLZqV7dJGC1ZB8zQwVoJPwzAj5wczJvMC",
  "key31": "sUMxKLVrLEiQt5hLJ2eXvSxCvfxwVKCwK8J1b6AkF8qpb8k9RVKbAtqLd8ucfGabiytgKYb8FZVAzGhbNxobfSF",
  "key32": "3UvrwJc9qW78dzD66uLz2hCEaBQxmRuujN1KBDqzchu4vGUyF6k18fpJx7W7saRpqdXNXSHo8cMHcgWPGKoKSPhw",
  "key33": "3qu3V8CSSGjc9BhU7j1QCnmsfpPZGKLNgBEz3aq6997kSGk1KficavhLwSSsYsxuF2Wz2DRcArGYoxC3qfsRrskn",
  "key34": "4GsfZK1AnMpHTVrnf4CkYWLzWS3cqbAJ7qNHyD1NV7taLhTi66Xw1diu9a1HMESeJr7GNZFtnoARPRx1Y3iVLEBJ",
  "key35": "33q64Cz6pxTdNotNXxc39DhP8B6B52yYXZi3f6H7FznRg263AzG6qdkURnyMUx4noYzDMmrJQh1vRNT2PkGWp2JG",
  "key36": "5omDXj6wST8WEFcJt1A7yTF79km1C3kUkqj9RsVjumLxk4NAgmi5kcJQtUDKk2G79o2A4dnqGkSkenLJ7Bk9bSmJ",
  "key37": "ZKxLwTRzNtcPBn3uiMJ4n4KJWYkjn1PAEo5ugcbLhTG85Uqt7h5eedykELmAaezyiJDyreZA5LJtUzLkLBV14WW",
  "key38": "2m2Wpcg4AritPYAedLKxHSvjtzPNSThWnyMoS2HC15UnC8ram1ZzSCY2kEEWSPZuzEj87zt3UsgPcMMum7EypCc",
  "key39": "doesxTQJMD8v2UZbaqp4zJx4X82yQphEAhVDcm7ccrSVNoJgQ817VxpvDW3m3AxdtqqeGNZoZVZwQTqtJHY5zpF",
  "key40": "42nzh1Q8aa4wfyzU2CXKVNCHGoykjoSCDrEWQhhCRUtmJRcHxob146iJGLc8PNSXY7cprHZ1GWVFMftf9fH3bpTP",
  "key41": "3E43GCh2tncNsXpc2rQH5wHmByQLktrP6chFdPFyoMbUSSqdpFBGk6uGTrvgT5JC8qc3HFJvaG2UyxQhUPzhNser",
  "key42": "bVesUmTDE3dydNjqMXtgFKmWB6SXgEdu1uCLFeeyKFAFH7dsFhP8XDNKqYaPdHgQodLBAXBH9EmYUG1tWpTV48H",
  "key43": "4B3B2QBNYqrF5cLrZz4ZqEpDY5LsmDuM4RpiLM6jzSfDnVJDemULFik5o3sukVrGLyDzJCi8mqNVWD6HvMHeNNfL",
  "key44": "9FfCF3bLuGY3bP3JrDTqXeQM81cjHGH3dowgsDfHfLs5Uz9pLbiXVNEKxE5oomxPZVQad6kXvMjaKNMZvN8ehAi",
  "key45": "WXYVQwPg6LmXanFToJ1zKCHGFqWCWxLLmmJNU6BVWKAzgqwsFEZp27zs3Bbvgn84Yuu3Avebvyg8gHJHaWY765E",
  "key46": "2h5zjpevg5pP3nDYn6yYVCAXRMKdmRsgVYuwQXaA9qN7iSbDEmvV6fa7dQcsoMaZev7pCgBSxHQCjx9UhyJzPUSH",
  "key47": "5sVUmAtst1saNBhSQ9fgZHeTyFeKh2zQddU2TeK5TCd9hP1A9uvvJV2WAEQ56eh31sEAk4FqwpJ1ySex8Z9dz3La"
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
