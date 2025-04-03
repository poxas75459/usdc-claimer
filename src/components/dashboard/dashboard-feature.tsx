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
    "3vd12TwL4nwNf6ciByqVujDASWsP1UykkVH3zo6FMZLypeMqVW886x6auayncUgw4FXUPe4EmGS3QCCyBFgYMfN4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "N5jo28VWULV7VKiZRdZCKcRpLYNuCprqsqGuKLyQubecfnaoeZUMu5ughnooRwqjRMwJczz2EouVNrFZir5FuFQ",
  "key1": "4EeZZK2tGVJ5ATRLwaj2V5YuNzDGTeePRcWMV78k2BrRP4SitV3sPsGu5XRGQbgtjkBqjPosTDNUHa5judihBy4o",
  "key2": "3mGSiPoCXRhG7EN39dhuJk46dEwVydvLc5Mjx4MV9RNuAYjC7W43Pd8S5RQNNmhSfqCzZ9tZbZWCFudNGfHph9c9",
  "key3": "3StzngKVMENJFfvKEv6LF1m3UqAyonZ8Fm7y7V2mee4ztTUCAYhpvtXejo3DY4uWLygsTLAYRjgyAyt6mKxhBEG7",
  "key4": "2Dnid6a1BMho36jXyok52DUEPDxhsxkwFXKfS7RPjAJRb3AA8WnyhYoAFS6QCWLZWxMGFopd6AWGx3gvg2xrcTwM",
  "key5": "3HfBG8uwbBNQmwdsSPhyybq3Jy7axrtag1hEzT8bzMLWdJfMs3bkZAMKRBaBSjrni2wa12yfoqGhi69UXydEwpcV",
  "key6": "3NsWi4TjgU1hmqncPCzWdEcoJZ9xheTUbzXUpGsNJhG2FzhchhiBjWEHbothQePRDjC6Nr1EybQdsDoepmHk4hf2",
  "key7": "27wiCkB2vKFJ9UfzKvdqH4Jxp2tjpLVKvDM8myzWvcBj6ru4UePJGSMNba3SdesHeZviqCNtc4GgFwrENDFuro8w",
  "key8": "4QSZWhYcwquKLgWtsEFY6ZhQCGvkGzSorKsqUpUBP8XRkYsswbuWYGQPnKk4cbfJG1mEb7cXxFgYFSjiaQDbMCSS",
  "key9": "5T4hXzQb3opvcrDkdtW9DGi7hfSjAGpDHXLrJt9RBA5G8mgq6MgVTv2THKJQr18XzZ868TJgdoDLT3mP4cnYXsXi",
  "key10": "4kSTW2pbu9iFXHLR1swNWq6fFUJ6NLLsJYkNgLiXXae5qqGtxq33gqKoDK5H1bsfyQCrQRSJDcaUQyuqooKBjZNU",
  "key11": "3jJUJJPs21v2Ni7rQsNtmL5gnrR7G3mADcLuygXe5BtnpbVHuqGWuTnmV2Da1Hm1hEfQNopNHF74UM6N2W2L2Y6X",
  "key12": "2hcRG8z9717hoqJt1gYU18VvD9XGdJjYLwvx2Fxon8QGepreoXjnU2trrHhqCShNz2vtneC8PmGDBmy3xyeHGkZZ",
  "key13": "4fWRqeZngKoWFHBvZ1bKCqAb9SU1pTMTYh8Xqz5DwA4wXdhMU3dkHkQmzoRNKkznXFUo3HKxe7smYMCK41gQLZvs",
  "key14": "5p9bwKTQ2iZKq5K1Jo44Z1uBXWNmeaCYgMxMVaxyW7gz5FPVKBaKwPQX7iJuLTYhoLD3fhphryxnmTWHQqbDuju",
  "key15": "2tBpgejQ2XBTH5xuqjcw7nGPfRpg3bA2Q7BG2tQucD3Cq3X5wU4Q7mPhF3uBgJyCStLgV6ZNVRGQjCeb6BiycRUR",
  "key16": "4UDYwDXHG3Gm7jshkpmpdRfgQxJB24dW8Qpc8jw2vuZG85QbNwXQSfN3PFfmQdEBLAM4xVvzrDWQjKCS2oJ7o8g8",
  "key17": "4uXDo5ozBA9Q83P7bPBRvRKSsPTHTo4bim49dmDS4Py62CeceTLXAcCGJzgAjiRJAM8brH6Pn17iyncyGJwYDHqx",
  "key18": "3YYnyf7ECQEKxfM2JhuELre47ihQLbgfDBiLT8pWkS9TMo87zMVUA6PiLT3r3LVk7E67vdTUu5sq2m3GziXRqopj",
  "key19": "5PbDv2qNLmPKfA9wfWSr3eDEFsLhSvGSUXmiCtnAV9BQ6bP1oQwNkbBSvvvtmW4EBpD7byr5LuLnnpyM35pewPbu",
  "key20": "5gmoHnWRzjVUF3yLntEnoVPBmrBodxiyGrR7We88TD9QuybQFadzHN3vVsxyBqBtznwRtgFrEv1KJsJiDudDLngz",
  "key21": "5r3rdcg5AaLaiJ1NX2jZ3HwMUQaqYARpKhmTPvYfCRwqBQ7ZhUCQTsBbkn1B8oWwqH8eoWeaX7D9cGzgbBCNs4Ru",
  "key22": "25zzv13FbNhe9ViKmoAHiMVL1sN9fqsPF6cyffk5mBSsjKTDavRAbGsCn8sjnrWrFyT6txqUMgbaHHZyyxHSdZFL",
  "key23": "2YfR3sFHhikA94dbxi2eyoatArDBhtL3mgkYxgiZwbDvupitrfFNHpRSLPjj3Pgh2zT5xMzBC9hrEDvdnth9EqKv",
  "key24": "2rJZz4Qqxxb678XGoo6Cy7LhXjmrFurVkbU1bc4caiXUupBK8HJYDN9uCYKeX7AF22vMgdzNX5xC1Ca7nYKrgHpo",
  "key25": "22EZBpCytVXK4UzZ2JY22Bz3ErsJEYugKwAeZ17PS8Lm2AfNMiW2bP2UQfmUvzN81ccQR8UYtb8TR83asjFD58tK",
  "key26": "2fYxHmum2ZbBNPhy7Xvvk5qqDEFK5jkLWz5twnwFnGrYQqtREyemzWkbRSRp2X5vn2vMscY7mu6f17JFEXBkEi2m",
  "key27": "4bD551hM569QNsDgEMcPDaGneMPths1kwueCm5QzqkagNHTVhGGazSBHryL3aRkngcGJknMzwKdyxQD6rDSr8WBv",
  "key28": "BwLiJwAE819TFWQxVcvcF9im4VqPMSnqxAhw5FUGN7ydEGm9j7Z5TcDz1HrW92WiWgJeStTnuZesFw34XMMirER",
  "key29": "GvBe5unPNia37LgcfZLS3rHCocGGv6wKqrQEPq3UGLgTXFfG1CbiwQrudpooycQFZFXKhn2gR3HQCE8E4XWieVn",
  "key30": "4cS6Z4qnySteeFH8v8fPctWCvajdm2n2TJVnDELkgbE3BBJAvLYww4NpNKPMykwzELLReuWUvsuznzKeMeZLREVb",
  "key31": "3YuYcVSmF5HKWByaoUZYwTPNQhKUM1j8G7FfsQ93xerDYi9rDPU23dc8JDUECGhzRYQmdPZz46brQVMYiUKXp3eq",
  "key32": "sG5GSDHyPHdgqi9nqH38TeEZmPDNKJRD4Ah2RzuJjoki1zwzF9aRGaVdn4WGr3mSYbc5Dc7xXx2cysfCpa89FGx",
  "key33": "517GZ8ApvPyHzRnvfCZyoounLSyHCzLeu4Uv4KXTe2RJygwHgpEYPL3cqB772wA6EBYMeuVJN6GZ9RZiquNTH8MX",
  "key34": "2TqVbZ9Faf5GnSHTbGNKu1n795ZUXDqKFmhaDCH89utwBiYSsv63eJzfZ49TzpUqRoSPD91LeTWnCnJPpMaJ92Qd",
  "key35": "2GP1TxyJqdxGmJtAZ4QiS6QGPESsws3Jg6TbgifTqSF2gBhmYjvX7UiiJBQyvfUbzk9GoQYntXKdEotBahguFFP8",
  "key36": "AtEveBNMsM9VzxoDaL4z53MHzUL4zjovs25xAajPg8jgZSij7WGRioi9Zzbk1HuLw89kvJGKFf23En6vbfuZAN3",
  "key37": "3AnMirQxrMt358ZdtzmnBAQeFDLY9S4AgYUXAuXs6SbCTKVx7dqkgrUuKY6LkK5oPhu3xKo2CwVbPrBq3dnfEXdw",
  "key38": "2UB3ytmX4Gv9gYoQjB26WSHTocVNZNVdycm6aYtwjdiNUigm41W1QsCMpYofTMquFHLJ45hjiBgaEWMgaNMkfmb9",
  "key39": "2DASv8CgBghw5EXh668ehBEJmGK9nFKLvZQ6ss1q55yUm7gDt2J1zjFUbsxWSfFWPUxh9Cq9uYfq4sGujwgG1ptX",
  "key40": "822QHjTXYHf8f6NP65Ly2nZJoTVYtLbmBJBtFh59HDpECyjtuciWAYskDS9JnZ7tNYanHUmhTYF4iC7xcbZ7mJk",
  "key41": "4G7QLUQerigms2iRXgUeUgnMYpqTDqDn9LwPfgxL1hQQQ1wdro2fZSTvXzSDnPwRgGyfRnLVPRu4ZD3q4RinVFGR"
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
