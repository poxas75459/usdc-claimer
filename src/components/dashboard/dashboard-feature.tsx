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
    "EHBnYVHx5Ww4jiYq1aPneL6bBCSSCyRS3JFJMyBjdsZDpGLuH5ut56mLsVtpgCHo8poT8ooyNEuLgGQZ7w98wQ2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "r5wFLjbyhc7yCPe41wo72SrnYzwqMNorofNj7W5hiWGs2M7Krrh4G8FYWLwWD93y6arinWiJudQF7s5SkNY1j3X",
  "key1": "7LSvxDxvRgKWKLBTBU8kzTh2jAXqTuvPANdRXG6Cymx8YNTUsfZ1sDhADCSjTqB4NWT8a6z1KrLS3MfqtQ2YBt2",
  "key2": "2KYVVLKgh6TYZnv99ruBM7iuquZ3GEWsV1t4PNpEdy4xunQycT4cRPVEjGGBpyd2MnKmBjuZXei3iSNPH2zb3TzZ",
  "key3": "LwRzML49kKfxZrPs4Me48TKixVn4zqQ3v5zt4BJUJE7d6J28zR8LazvSjfAh7kpNPjVnBnzq9jh9pV447gLZjp3",
  "key4": "3ew5yT2FizqudUVf5YRyNhUN1tEqCy27nyahXaTBcrjw8pL9J6K5yN1EXKNXwXWRBy8tiRpvwKkcHLbVuGCXFxC3",
  "key5": "4KpFnFSFJqHEVXUyV9BPUkt7CXiydN1RawzaoVWNVoYFhL6LAj9RCWYBsMKmh9NwN4EtHEnN9zRVvawwjkPxVRj",
  "key6": "5YsbipmWRgdZqq5QNTYRftcKnVSjeJ7RX9gA511QWfQqCchHzQJCCbrTySVD2aVfgYdhotsYRDXPMV9zB46L9GQi",
  "key7": "2NLjXkhkYTxEYyc5aQBFCiyCx9t5jh8fRZ5nTzRbMnQbXRRK1o5ktoKM82eT3tELtwVNQKXu35ofCaW1byEbasXF",
  "key8": "2HGfm9fjxA17gevVCo5UJQwMuE8xD23Di5MjuToTVYPyFA9iL2eC6Lvjph1SRNYuo9jgtx9NEpAjoxRCq8j8Ago9",
  "key9": "4DY7CAvf4MQ2KVfAVyLMCjweyPMDEeDf2GX25VdtLwTUTxLA17RhGP227Moo4AwqHVS5WKffwckpQAQCfKzHTLwN",
  "key10": "6j4NLcrutNSKDkSVyrsMmyh9ytki4BgGMv5u74AstJNk3oym8AMyGwW1Tffjr1uhg4Fr7kZzhotTiKmBh1xbW8H",
  "key11": "2CM4YKfbxoka9ekzzngbWs9Gf7c3YkS9xJE2RKjSNTWS875QpUYB7dTJtudCDD2dtjHBDUzw18eGjiKTBueN6VVB",
  "key12": "266pFqh2jGzJnym8FAeDM3EQ25GyozAhvLapJnKPZWTza7XxPmeM32VBVQhdzSuiZK2h7tzst4ue1i3bBUoa9MLD",
  "key13": "3mDeDkQwgdjBNvMKJQmGt8iyRaKoYDeC3858Kcem1rUoSQcrhBG5HdMDoZZ72DM7eVwoM33df71qaSvZ23qXG8P2",
  "key14": "563dVH5m9Ys6e8gFXQ7gSLrkM6vi5afdxEk2pBqrPxzWXrHdwsx6Snz48V8S9eDsWiZk8pSwZJY6xZHh5m9bgLdy",
  "key15": "48KzCDevDoeztLqFn9WZajj35i8Qd1EoBGYtHWXj7km8eTFQTHgLM6m9dyZBsvk3LJHamBHsDnEGNMNUN5qmMGSG",
  "key16": "3xzQzMxjnr7erRKSXoXMbNPEUNVMqCGZWYfyeD9SmZynGCPyPw9XvQ59F5aPnXgmRQ43arZLuogqbKvNgytyy5UP",
  "key17": "3QniR9TbhppSxRVeprKbDJtfYrW684hPxcP3UjHYESaJozdtTj3BzY5pT8Mi3kMoaUjoFaGt9VHrsCBN8XPiMbxU",
  "key18": "23v6cpQVaQ7ks8RH1QtZcsDo5hTAEKNrG8VsNb55PuCYrBvhTcxrHTy8o3jYPnooBBpkRRa5h3QNYKCPJZpDDhTF",
  "key19": "2UDfb7oqt9i34yihBttL8kYqiiGGZ2L761THGF6NiFnKoPo1X4hdse6bNLs3zbQ8hATA88XpngMftC7VcuzTHtTh",
  "key20": "3tN4gV6EFumno9VAecPJQiayUNErFAR64Grb9bhvApbdC9zHZRHQ61aA7AwMcWvyxiKEk5ZW69kusnAM9zMs4uvF",
  "key21": "yL12x9nRdgLLFjYBaUzvyQu5nDr2CoHeo4sgXsj9FeXrYcudTbsBYKsA8fCZVXQwkSTdyAMp2Lpr4LGmYBccKKM",
  "key22": "518npnp8dxffXdWZcG13uUbRDYzrfwEHRmHpmwg4KkJh8YPuczMmkdVp5sVhJJRLWFEJ5wNX7kk6UCLSFaJtWBbD",
  "key23": "4imuj2YKP5MMfvvi81pmQWvnRJzT8EfoFXp6Wdx9fh74SbNM7GpwtQw6oV924QAfmEobvhF5NYMdfVCnDnnf7nQV",
  "key24": "4dPbg1wjXyUc4n9r5WZjfQrJShUX469E8UhNvP6hQXoLtT3E1FH9FCgWd2KyMdtXEnJ5gukgnDWeKdcqCVQjdNZn",
  "key25": "3TQecYfyykzoJMJYCcDEqQo1XNtJYxw3mHaezGArkbhPCFAMmphJ5EwbQtFZt9RQMU69QhNgweXspQedNWPRxzZu",
  "key26": "u8KamCrCyemRq2U6TwowA1vNqLPm5TbzUiRA3UE7h5SsUMPNU7DjVxzHxp4sCrfquEthdztkPGmZP3utF2jKB9c",
  "key27": "3eK9ZztsZuiPvGRjn9zuFoxeeXcuGo8qqLjydETYWdippHEWQF7UZWfQFV7heqiScaFLG6Meozc8eYNixHLthwnm",
  "key28": "4unK12CxEP86b3B5dTJs61mtM9y2hMkphxk76oNDb9PQWzt9z4bVsMCFD7S2BA6t7SZY6YbWgnEaghvRZnJ9PVJ",
  "key29": "51dJsYs7aZTqRYcAxLQM6YwNhEb9HGvdBPsk1qgywckXqKC64m7wPM3cSwYEgPEV74VVD6uEu3tzKJ3PA5uoWtZd",
  "key30": "2A5h5TuAeEZzoE4BcbJ6Ga74GxAg4ZzihhUuptYzDD4drvtN3vuBV34seZfP4rnfqVu4pK3UeMzLbaW66M3LZny4",
  "key31": "KaGKBQDzJnMDK4Mrig282Vg3qYJZMSD3cUWSwqjivDD74pmCEn5HhyqtXYvEfio44S8kVkU3wZJbEavSVKKwKnr",
  "key32": "5oJq5P2FcJ1dqqi76CiE9WuxPBPG94ZLBsnqvN65M6qXYHuACandbaixzEfvcfeZqjk5up6ur1hWH6Hsd1idjEcC",
  "key33": "2fQsbHqx7tDRQuSu1FE6rc8VacVH5rNRpXMapmdHLS9JV7Xdfi2Fn3gvQkV5vJpbQaiCPC3jPq3VehL1jtrUWGp3",
  "key34": "2LkdCV5GkNuosuLzdxK4tmT2Rz2uxD7tz1sd61zjJwKodZ6Jp95uRcYusJhwa87LuQW4ZX8SiU3ogUABCZ4h5Rfp",
  "key35": "4SrpvrWcUMhJd94F8MxKBLCSnzn9WZreicrziMFURsFL1ajHnw6kGusrHpT2BG1jsibLCvXATM2S3CR5mAM2yDSS",
  "key36": "Wspm1QAXoRkzs46o2C6FHEPch62B27SgZGT81VpErScfwNaBn4pJHDtiWndNXLz9F26T3Z5oxNkFx4SKrswb82E",
  "key37": "GHTQpbe9vp7WBvfDmunDScVBAkyvB2GzcTsfeUbN1LLQLdH57UfRHRd22qx36rRn13YdL3FBe1PiGNGHisATtWX",
  "key38": "4V3j2xsoPJpV4iyB4runfvzbQJJHbDBf2oeq3GW9CrRTdoMceFCmVEARUS16YR9Eucm5GAL9f26yCCc31cujNpj4",
  "key39": "4x7b7LWoWWHgBmmCc7XP8vqvhETywyUziLs89hLNSnC5NCSe3YtziieoKLJXHw6CnJnVkSUG2tnsdvKGmqMYKpCA",
  "key40": "4q6kakcQwKYbYNDpo9Z8kA5ZJ9H15f18Xb56t7Zg2B6DRNBEMAws8eVPm4mq57gs1fpkAyip4qwunv8A3hKvfKYr",
  "key41": "56Qhmcx5nyDJ5LcQ2mYD1AM77UVC3YwHMnnS41MXHUx2C6qi1zqngco3S8zoTzVkcLCjsuT6oFzJyTejjYwbyW5E"
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
