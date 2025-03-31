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
    "4a7DVKbRhZQxp5d3DavmdorsWksBfrY64ueDq2jzugbKsc5J2ASHDrQDVipPkasDLy89by4vhAwhZQUybVHBKZH5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5qTFnqXZQ4XJNz6UTzZxsaTCrc3DNpKsoKwSiSC5VUubwSUoBSRoS3sGg5wm9RELXfe1ZDb8SmY1qwge2Dr2PhvQ",
  "key1": "46RZVARLNBY3R83R3u4NZuEsxK9EMURPVFR9C6thZ5zntmLL4LdW2fZ6oVgVr6HXdqaoz8dZXCH6czLsMZqNwauy",
  "key2": "3R7XKsB6QMbAKdycg1w4V3hg511RZ5nYKdgkr77vzhJFWzdbFWXbS4PBSUteVYyp7czgLWDgB8mEBYcGbcxE5xmY",
  "key3": "5ErY5tmN1voH9C4AZRiinSMUkVaKNu2gE9LWWYqvqDHxoP8FCXpvHd6RUtBontYSgEcC4LBYeY18CSeBF7ANryLp",
  "key4": "5N6Q1mYJJYtA6JpE2iuKXFKuhXTTMEYMszWMT83y22JEokUagVLEkBMZeA38U2fp6uNhKnEtnTtGa79XQqRJ4B99",
  "key5": "XWW51kdeQHbj91iz9E4KUaa4iWLmuARNpWTsaWwBexxLHGTaCGQdFQVa1kgUwXpw6va3Mnf7xTCzPWzTydw8kmD",
  "key6": "39iRVXbG2dsKhBRzeryr1NK8QQyRTtkFV2x3aQpQ8FRB4heb1SBSvuzaJ33jHessC5HQNw3bESQGnz1xctN65Z5J",
  "key7": "nRg4F3CjUirRris9WATDRMcP37epFipqQz3CHjhE8MqpgjqW5J1t4hJ72dABGVn4WePCq7k2qQRkAdebx7xKdmi",
  "key8": "5S36vm44mKLCECkWDkgxVzPzUYt9vSpqYT78EhGBSmTc5oWNFoLWNDTZcRgfdgz32nAUWnaNuwQLqhLXcd7Z8c8c",
  "key9": "26FknuJEfBwQxWwU89K1tCR3Sju9Zxis94wsagWXokNd2riucRPWPYPyXar1off61bdUF9KGskLxMCFE9EdXxo4h",
  "key10": "5viC6W9Z5rraDdFh7P1RMFGiVPDCbeP2LMds2ctAHQxytneshk99Dmpwwp2vcvpWZry46Twgu78kzSdDvZPFVZyj",
  "key11": "5UzpUKEQn5zoBMSjgE2nfy1rEPe2TJVSFfpxebkzuoH6MDSSj6RcGNoRN2NYSFPhou18LVEGxUygbkGG1SgZGugJ",
  "key12": "3u494gKAnkWtCeTejBMA9M5KPE7fBHj1SzCpfRNZvpcNRT1NnFX5iCiP1ba74DsJ4RfaeTei5Pnv2ftFEi6utYtj",
  "key13": "3cDgiCzL6vM3eWuZLHBAeRX1WHfeyLk4MzhsUtCnfRWYvwFxhCTmXPph12mLe2wCWzZGvDGEjynjdFx1Vf1XGnT",
  "key14": "3m5Z2WA2izUhibZVvFibotiSo7jokh17JXpVNeupChaHVxBAdYJug1Pb6pdvzUQui1ViPwsoMNh4KwBEhfZFD6Wz",
  "key15": "2AqArmZGREwvtY64dCUh3arbRAD94NX91FnbJoi1UKaxM2hPPptqFUMMMGETRrox8aKqbU5LAmt63uCDy7snv9be",
  "key16": "3aGGfa62YzoqjP642YrpCQQyQqMEj7z6XWECbVTdaMhZLC4gzKwytvCz1vRpDuXXW2XmKuxSkhcXVeijSRvGwMRm",
  "key17": "4qmDwRZ3ErE6Cm9sqAfZG5U3mKfD7rDYDCzAfD7fP2oFTBihoqRHH8Avr24q1HXzaMZMubBMwGXgmyUHf27i6F2b",
  "key18": "dAYMrnuYqyMzw3BKomkLdyZjAwiPXEN1w4kQ5sxeZNKARsZsZErCB9SKhAMDBRXUrJxWSTkiCvnMg7LWuBon6Ei",
  "key19": "66tv9hDVWpoMjewpWWQQ2nPCnY4gzcYQF1md6S4mWuCfepuNm4ZFqg4PWBPiBxDVjM1Wf9hpxV2eDhdumbzsm72e",
  "key20": "51MFWmueHi9C34P7Gcw6r5YDZh2VuChrWXzWJdRrqyjXGWD5ZhwH4b4WzDiXxoWwnn77uB1isEesccz9mp27UW5i",
  "key21": "kQbtbMV1pTo1B7e9oR3a7yq9s1rcptEoKi5Rg6gE2dsiPQytHb1UpvT1r3gLnTUXkMgjtJRmvmkYEAYTREowHgY",
  "key22": "dZhYqxMBXSoCekwYB7v1PvG3224CdJ6hq5z5bp7SXAVSuNURJWSc1qVQP8ugBZD1HEovNUBNbLHasRzJ9aHiEn2",
  "key23": "YybBcwiz3bf5oyo3YF94raX2unzc8rv7ms8sxRdg1n46xFTmpeNrrXri7whZ9QyV8uwdnC4FZnzPVXRvi4BUuqR",
  "key24": "4mqvY2nJGM1SMSqx9nxvU8B1mwSZPxWttth2oiSNURt1wJEAzFUe8j2pzS7vJ7bPKcNyVySmHSBbgCWXMZKsThvF",
  "key25": "QFZvBrmaTSd9sow4F6zg3U2N9DNEFmh7WJhJFi5NoxmRNu2oEaczUkXnfVjSCgnwm4oktBFktVZDFG2yfNnD3dC",
  "key26": "wGaAQ6sgMh9HuRT3LHuvMP2986cwJcqKrr5ZZCSxBUXvTRXgka4roHknEgqBT82Hzja78pJGvbP4Jty9ZDyyNEh",
  "key27": "4YtXcAPc81MqWvEXotEDVGJT8T3jzxxyJnwci5BQS9S44unijtnZULWca1gnfWjo1R4oFTJpeeYYvBDsEHaNKxwx",
  "key28": "5j13eCjvKYouacgkH4SLtUhhbBPaENi3EF8SpSsv2Wz5gkFfM8vxPV2J9aWzEBLAvzARx1mdzoQxZrtURi4kxZCP",
  "key29": "5BkD1ATvMassbKbtqug2C7kbbhqrsGYAnea8aCqLdQuujbd4Byw3QQudC48nwtZBM888z1AZHU8tW56vsmeqJjnH",
  "key30": "4j73N6q4NyxD8wEuTnXakd1eNRFNWCdA8UKyFwtG1E2eHahiT6xpJqc6TUmLPubLyMVcRG1XNvUgsvTrc9ebmn7b",
  "key31": "3PiM2rjdwpmgEndzjPjwKscfsAmbwHERhstyxhWZzp2kDLRyigDxb6Es5MrD2fzfHFRP3q4Zmk8enZmUeWSbovcB",
  "key32": "4T1divzzqepF3YTYiwQjo22uB933AV9PR3d7EyMaYXt8UcGc7WafXFmSEg65zy63K1Wgi42a75E2syWDjLS6trBT",
  "key33": "3vbTqQBJHdj1kZ1auhHhXjSLsPzRQ3bTjcjfiUeESPXi1BtiQ9cr9sgXV6mCue45k9HBSW82LKCRg6abgq7DXw89",
  "key34": "48MYdKZoBaxsK4JoM3D1ghrS4uoJ4doVMqc7NbyhGQgU69VAVjh4bHF7Yhrg3kwBWNLeK3JWE5HUYLypynUn2zPt",
  "key35": "44bhQZPhcfAXszKfi4KiXsT5PdwsbVY7XHaaAk43H8MBMe7iv99P5abKZrppzpbv2ComEMB3prp8RuiATZW1a5Qn",
  "key36": "3PJtag3YerXeFo3yQDmR4D9nzdyfx81DkykWwFvs9dTAH5qM65mrqfAj6awbnbC8dWbfwVqR7ZctnosmQxyiN4Gj",
  "key37": "51MpAYNWsjPCSpCnhbhr7ssxroTQBKAk3gTbgEZes5hFDs7vZ4FY4dB8s8RZWrkiALeofFjB12yXSQpwoyPPkWR6",
  "key38": "P5WieCSuSGyEYsXFRDdBMeeKZe4EohdfwjQ1exC1h22GekYH2ixfK2hyNqMPURWr57bGv3rCgU6QbGmqxLfXES2",
  "key39": "3KgggqsWSRTuiJDvZh2fVooiv4BqNCaCo26raMYRez1zCTkpBzMPntuvdyvDLuEhvfv4jcjitXPjTkiWaiQYFwHb",
  "key40": "5TAmzLiX8VConguSqNXxjTCa69JKRkMLRbQKMHHmcne5vvSG84qKkharfmo2Td47BMiEdDVwwkjg8e6whhpRW7Yf",
  "key41": "fFST2wdE8jHeCbsUMFfzeJYb7AHoeak6hRNZKBY5FgnzhWhd6puMbcsNnrSiv8YdtAG29fRWjDA5XKupo8rwFJV"
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
