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
    "4hkzNV3qt1AC7f4GQKXdEQDsPt1qD17DDxnseWYPxh3DZQtfQ4ndcKkpVNtjA6zT3RwBBq8WKEaLgUsnK68rgAri"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "RLdGjkVbZiQR2XLiaWWVrkrg7ccgWv4BU4ZMg4coTFSQRSn9CnxZDsmrUzgjoP1TyraLQevqU4MLr54sxM6CUq5",
  "key1": "2c6M53JWoVTPsjUhTnUB7us6jj2BFHGL49deEn1mvFRj9F85qk9W449Ydp5uori58Hbi8kZAWWwpkWxyA5gM4uQh",
  "key2": "5HMVaSmDxnRebhpd4mm9s9db9Byppb4M9VTay9rspr4ULByL7mvBhYZgx1VduSHKoxrA99TANqButYKN1kVUpuE6",
  "key3": "4HvFRF5aHFKRTuzsxK8DEkgCLc1DJ7HTvpf32euBvqS3y1B9aVS7HFhT6aMci9U7f35uoEBevKfrVL3oygXruzMJ",
  "key4": "4gBgzA2UUQTyW7SdzjXPypMMWVZk31cBw2mr2so7WBGWBRvTnxu13vQjDXx9Lmz5cWVJsJpejj32b2hnteNjovVY",
  "key5": "5kNemP5XudiX5oY2VjnRjJBU4HJa85sqGndMp1cB6KvrAneB9G3mmaXC6yBQ642LBZvTPJqFLwPdLCTiLWffpbr9",
  "key6": "5m9eRFhb6vDD399kFz5FtwG7Uu7mwrf3yWu4TXGjrXEBugzzuajequhREYV4j2VYgj5uZe2De4swheGYDyUoTKM",
  "key7": "4gf3euZpUveSfstnxVmzqaPrsRpiKGdzvGTJ7L9QLeYcNxP17WFZACnUFCnPzbX5yQHCk9kHgWADoXuVZHEZHtxz",
  "key8": "5cyYx4bn2WzaEMqGnC2KB4LxjQcR9bwbXEgqbpeLAnMqojHnroQHYUGdMu1Wt1yCwVscA4VuMMAp4CWJVXu2S7J3",
  "key9": "2ukrtJjjXmjtHXSyaBNJ4NCnsJ5HdVNJVQpqZgh889YM967JDL33vdd4fqjgawUNbjh5rMfqCFUWXw6z3nK3V6Db",
  "key10": "2ukWLFkhRZ28mGY2doHKEV9zDznmrdLkWPeuo7MuMvRamzyZ4Ev1QfPHmXdXd6aT1BHKdQjFcXyyTNaW9jbChTYD",
  "key11": "5AoPyCifLuYqYCUutnqPz9qrFvFJUYMtSL1E6YbJE9f8uSvbH1fnNYo12Zd3qe6M37M3j2Ufg1ELvRodUCAN55zo",
  "key12": "32QeoAgTh2p38yfHRGsgsTiN43vrDV4PzSf54F2WSfvjNV537sasPdJDgEAe17hxmVRLQj1TUR68V6zvwLpPxmBj",
  "key13": "4RA1YDN6fMgrM7Tuh8R4zivmEpKEffJxRR1JpZ916jQGyVqk7s9yH8hR8q5yFwZ3PvnMHrE4fCjDuVoeHBtXtSry",
  "key14": "4htEVs8hFfu1fRPPTsiqcMCTcC9igCNRrMxSfvJE5pqMmVbwZhg9bwWsrpumyqXnvRoNeNUCBKLPpCc7Yfv7BFLZ",
  "key15": "hUKwZkVvi5v4L9t1d8xmoC8LAtyZHj6Pivv8pbm3XAhy24yjW2frDZnKgnbLkZw4fxVWxyvoJHpYbm7UGMKe6E6",
  "key16": "2x7uYCwrydWc5BeDicnGGfbEjUa1eAkURofYSCrEFD77NbvDouNQ84VAFsQDVcoVBbSZKkDmc7uVaoLanR2d93V1",
  "key17": "RbK4RQicLk3e42C96zpnNkf5BL33jhfo4KXeTArRjcssaEhSUAcCfwZQKTzT3yvZZ7re6NEbMCyEtsqTEUB2oC2",
  "key18": "3BtCH6p7MV3NRW5viKULD6P22BAqC25q1yNUSbRPirCv8tAku1F3fHXGcpzMEFTWGvEQb7evLtPz2ELHz6cNJkPw",
  "key19": "c7kf2B3BAg6i7Zn4ABA7JDqHDQhmK84vfjsoSKvttJ4pRjSMheJiiUszip3xciupiaTDfwV3ueym62auke8fUWt",
  "key20": "4jw3XE8qVauRQLV16b7rJeEZoBK87bTWdWzN98SxWGp6dmCMDtzh1GyX4A19eFLuDJ2BSB6DjPpvmYqk9jTFTnCp",
  "key21": "iiZU826MrsDUEarrSZGBambMWaGyM3qhhUGTw5vymSqzdYbD531oh8hEZPePmnUZephbW986cvuBXF76AXbAUNf",
  "key22": "4kLrLRev96iib2vDz9erHAcTAPnmpvxEbwVEZkaR9rAz9erVNorWhZ1GxjV1DVTRRCaFVSATMD6c6FaErrF7NGpA",
  "key23": "1bGGbdLZSdhHKQyJd1V1ZPK1gM8GbQ8Fb71HfLSRHtb1ZwRefTge2pcFLeAoCxUuVhfCrXiRVjXyUJpMTnDA1zm",
  "key24": "5rSru7Mb53MTSPoGQ1QommCQ4k1yaEL1rF2o2KLEXegmqr6oxKEB15HNYnYJ3ZTZeRzTZ8WmCzMKS7MHqh2qd3DH",
  "key25": "2DBQexaYh2tFevK18HoerZPXGK8WbNtNFNsNjMdPB78QDjEp5AjAKW3Ci8Q2Gy9xfyGWhK4TSB1xLi3UxJrsCykn",
  "key26": "21ahLog38xeMNTgQ1hBZ1JncZ6AfNG55NkU3C7K7FP4kPSnunTm9CJZHQ4CNqiExHP11JuVDC96kJ7rBiziGVBEz",
  "key27": "61mLPxWuLX5Jf2DEv1xtZnxU2bkbq2ijqUaGCCXvV6vQ4msE5jLxD4WS2fFNEnUVjR2pokjAmgXQi9CfDWshNDY3",
  "key28": "tRyiMb4MCtaQuSaFZejz25KWALVvPTaKa6aCeNBJHUbFr1PAaniAjPXYkfvFW9AAMzFMfZoDDjSiVoy3VaKzTXX",
  "key29": "56e9ySwbRSo4gm3b1bUbrZEZaGsMTdHoghLfGA98YiK35cuynXPWgjsmCFFboiZvH9gikXDUNdbPaoQ4x7MxK2hV",
  "key30": "31kLKDzZNTwXrzsNzYmLsjqB7EuQtJH7pSxsxD5XtmyJNqUkvrywQC77tPaz6Q1vgabBSFr5zTvTYhiZM59XPaa6",
  "key31": "45tSRAvcTZExDb6Zu4gFwyyuDpbpddeSuzTQnz6WwLUYuzgWJpU7vyD1ntzwDMSaqhNR3dv6pTdyL1yKYR5AnYbL",
  "key32": "Uf7kvZX87vrZjqYWeKiWM4Xh9VKw1EkWttiu4UPo7fGMYfHvFAzjgSEZHMDxXmUru9xi2Nk3kj5euRs47mswEVr",
  "key33": "2U55vGPbwZ5CpwJxUPpA1UKmfjEtW9kyK4is9w2gG6vfKih1s7fAuoaeCUmRcufFMQjUk7CyppZpQQga9YG4NLKq",
  "key34": "377iiwr4hKoHX9cGYc1tL5jimcSZHmCeeSzx48tmJpHmhZTgBmccLm9sg2g9qsvQHjEBWxqQvSWzZsMUqRAenQDD",
  "key35": "4Kzw7qAn7NVUp3NqtxqMpBfbvASdAehPzQ6YmhTLHEQhV4VdhdYfTeNtZ3oM8obbSrLRWJhmH92DZMZHd8hv8rvs",
  "key36": "5bmFrrLxsA8xTmCYEBVzSRoaawFDZW6sHAcBg47sUR29U9D9qF4SBYTjiqAmBRFrBxKnjWm49LJ6b52ubakQy7A6",
  "key37": "3cpXGQ2NPkfFpimF1n2rwwUwTtqeVAHTvkVYQvESqEq3V9AMxd3gEp2gUUuyoYAoNQUyP6jpE29MP7K3DmpiDMvv",
  "key38": "5UtP7GZDN4t4zm2YGSVYupgXtvuKhZpn6PPomKUbsWL6SsaY3Y86B5QqYYidCkz3cxgsfT5JihNVp4ogsQrLUFaV",
  "key39": "285sedTJZb66bMfk9g4mQaAspj3fB9PHu68rx1pVJcqiF43NaGj2yLg6tFhBoyrS4DHi7ptmxh4gzpvvsgCko31D",
  "key40": "2TpZyxJwnyAEGLHxhoVyKGDp1n6U3LD3e3vRpvf5tCavUsW2nmQwqSCAYYsknARe7uVgRRnT9663AESHyhEMbaSD"
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
