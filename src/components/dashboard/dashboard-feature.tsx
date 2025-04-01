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
    "2fRag5o3495Emvujws9iCabBDZBnrUWjB8EAfgik567WDi9zXCXLzZrjTmS8TU2ADozp8iUXd5tgQX4ivEJ7hXPN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3yZ52e5F4ii1HSs1dtf3LQLEd21Cj6QzZn5D5wqWcXmwEVuuzgZtyxGC8832J1zm9tuZy8GEhzahXUZbHpbTASXi",
  "key1": "3WfqWqMnXnEs7v9s1iAb4EKo4WBLQXFgfCmksVC377rDb8xp8BTy8t5j2FLucMdDhij79ZShxzHyCJrFhPMu432j",
  "key2": "5st1KuobKotbuRvRbViaJzb9LXVsGbraFoBGyVD3qYMjsJnhrbLz95e841yzfhrXNeybrbbF2jg2xeUpbWUikoo2",
  "key3": "4FrDunLJru5rqww4cJYtxkneuKh6eTw4WWhSA23KTGvCZKHpn5t7HKyrmiVsDj3PoirmVifZshWABhXEwuoPYb5y",
  "key4": "321vbjjfP5Vu9eJZ5EyDva1irMjNdRtiN5Lwvzg8Bg7NkWeRKoFPkSthjtDQV7C884kYydbteNT2R3bPZ4aY3NWe",
  "key5": "2Mi1Hd6oB88f2x8iVnjSiNfUxb49t9V31XgZdGJ1iNZb9PMCKaW1msQebJWTzYaRnHR43fpHPfvSXRX7yQZcN8N2",
  "key6": "3tVp4TzFJUUUxnXsuAZgmb79og3oiTmMkmLey7YneZKKBHqTq8yBBRUMQ9pedKgNuS2HLBVP9sFVAZhBnf6v6Yzc",
  "key7": "4cffLmgYAUiSbhrGN7PcmevnrAoTSfubDC6keEDEicADdbW33zQZgm1J9zWwYqJvHRGVgvaef7f3BHK9zt3QnLv4",
  "key8": "D8TYXtoN8zdVUHZGgdfGnHP1n8ifhEA6rE8nd2csnbuWXaV3nDtPrT1oPqNZPNfnxij9vRCS75f9DJDZXV33k5E",
  "key9": "5tHbzgrBXbJzpk7i5N8bvZDCmSwUPVWMmSKyeD6ZbCakV6qYf71GxkgGZqW3rQDdEfwCfhT1noxVGAGtTdJ4aXGp",
  "key10": "2UoV98NSSqpFUobxVZMgSx36ZA9Z4nNgPrtuMXXm4iZkFjkAu6XjcEKDwekUxb3VuPYUKYgZGJiH3b4qhXXnyBFv",
  "key11": "mDGz1nipjnH5hXJtVwsewTroKUrKipW1HbWomsnqCxT5Faa35q4zPSCZXNq7haymghuRQpJxFsJBhMj6ZtXgU8H",
  "key12": "4hcFhXPFkS5uoN9EHzXcj4zb13F2uwqJ1mSUnq42tUMsuYam8w5KJpuuRf4UBKfWeufcom5N2KKMr2LHNfVQpzJU",
  "key13": "4mqLe3R1mG6FkjUyyRLTjN6tgudPzMcDqTeNb3JrPvsX7FwpLxvXkjGUyfftV3mspYXEpYSMMW3SdgCaetbmFgAz",
  "key14": "4Q9H3fR1QWXr53BsLaxxvkXDju8qsYyj1jCF81rqnKdy4ztvT7AjPvF4B8UGR2WEJwfjYT6pCXorB8EWS8u2eexN",
  "key15": "4Ag2ozNAEJGpjA58jKmwwtdtXobs3KcWbRkup8tBDt1vySzbJr2Ae1QJ5Gg6iiWXmGXaGJB4EyC75yZTPQjg69fu",
  "key16": "5HgQsU318bbv1JqneM67Zn1FnZgSxP2SyWhRmenCtHtdfDBhUURkbxRsuNWcLYkwpEp1x63PLf2eLtyGEPkrZimY",
  "key17": "XPNxe88BFavhAUQBn1oQR6FMNgCVu5E2vFZxfMhmHwkzkYgg5NMZNNmDs18BpDJ2dDXXs7fiWWW8aEwdNWcC5AC",
  "key18": "24FbyoerwLzTHgCYqLGPRPbfJav7VfLXGCArTHEBVChZFbuRmCS7JAQjgYrase8tbsdPkHbj3owqTWDiTfL19sFe",
  "key19": "4RYG28BMXcdVZhK9SNqNNVdfiR2Ewxfdj69FaxcVSySFSKtyfoHQRdaDU3e2LGE4EMy5BEZDmScrJfDUK8qBozec",
  "key20": "4BVqN8CSpoXaS9FKbV4PexDYC2m8HAN8Qw3CZbquqyi5Y1HFQ2X4ph5pXwEx5mFLpPq7Au6RWPBB5iQuq81SM5wC",
  "key21": "5UYcrjCyJGPZUyCEjG4aCRZchD6YKTuaxRzy3rsjji5PXK28ACwxGB8iVfJNJqofC8jSiYLJygsCgG1vJ7i2zGDq",
  "key22": "51UNNveuW2btA5pYPpUD4F3s3QxTK9CsbQXyHhwGYNHe3z383VJKTPnfYcXktkTjxYsxwjoYC4vRibmmfQizdMzC",
  "key23": "4rJQnE1WW4B5v1octs8Lnh9F7xMDpQASF7WBKimdvHj93PgXrtzSnVbFSBH8m1hhXJWUZfkJMvAgPGExW1D2qt99",
  "key24": "4XByPV9xZ393K7UQHPGcesS7tR6Xn8GM4Ghm2mkB2xSdWzRKMQDpeGMeVi6DM47fCBEsdWYwZaYdjJkQjSAi6nUn",
  "key25": "3to4upj3AQFx3fK1cteynsSQ35Nd3RCo5mcjxT8reGFbiq1eE2r3mJNbZnMG1pPEB1ZDYZ2k6tdeAhRqCnyQcd8h",
  "key26": "2rqcm7pYVakGe2tMb5uWZ6YSaB8JCP4QSZGeCYXgBs62ZzB7cm8R9ho79bLthf94PNrwE9QST96NkQgvanFdPKNh",
  "key27": "5WDKTUDoYiUyx3BhjkmTcgn2pYCGuG6zti1ACQmu48dPS4XUc5vgn24TNBvbLQEqqqhyjpQkJQZfpg8CJtuDhKSb",
  "key28": "4REr1oo1MNj3D12GCUBvsfLUAAwnXHcsaAqZDRQTPssUgSyHkFtivEiXBg9nvZWz15S86gn1DJRcwaPjbWEAXN88",
  "key29": "2SQ22uZWFedvGQ1qMSTjiSTvuj5Ar9ADcL59YkdbTVzNVsCnzCAcLvb6TdF4Z2CauCZ7v3bCrsoau9EpDTjXbs6H",
  "key30": "3x7ZZknhResq7VGjadeGLWfdDphLTuFfE7V4PgRa27qhhLYV5EBu9AYykRDm6WPx7wmxTSj5Te4joFN5XUPRsLyk",
  "key31": "3gFzcY5b25TAobBYQydPBpCTq8WUfgSsZthk3a1g5hPE7UtUi4XXHoF2m2zAH45qm9kcTKE7wSd48DVzvoM1JqCH",
  "key32": "66q4VkKMZ4YPbQXuwhcnJGUqi4EY74yx2BBnF2motbfRmiKLC1ejHrnpfDpf9YzSdZDHV7BFUGpRkiK2M8HifKyF",
  "key33": "2oyguVmay9UbMixbhBMc2kJCBVpYuRbb6bk5y4UohnV3YdxnPwBTagz9Uj67CznQLss5w5LNz7Nghq55FtB6ETqL",
  "key34": "4zrhYcvJdqbEuY33GnQ4WUFPZCHfmVS7YKudJJq9Cmvp67KcVRxEXXBfqanCi7Erekn65aSCauvayG2H6vjzaUBF",
  "key35": "4n1WMyFzdchhWgFHuvsqq14DfWFNFXQk2KfAjBzqGwHUqFRP7TakaPgr3yinp2j4t6D4SeNW6YT2ceVgW6Adp4jV",
  "key36": "5jVoyvNDXXnpuTHkYbRJcJujpugWtqPG55exjPB3p3e7NQDzYtq2hHD5A4a8TrFd7ws61u384sEswVx4fTHz1TmQ",
  "key37": "4Yk6Zegcdn3JKcY3RJL4ECbdkDn8unjNqrE4v4DnVT6nWy9CYFWdyyahg9dTVn6gBdzJjGcJ59XDCWQtWfaT496j",
  "key38": "3ovgN1ff9MZosoLQRuLU5jXJ6MQuAcZbEDuXED2KzkGvuSi1e4kN9TDUcAMT4vKq6CvjZGaTjZzbk92H2PxwBL2a",
  "key39": "3XimxwTncCeD2MoQ4AiEs9haAGaNwEm3oKsmmGCshjSsMRdkNhjYnpKbyGmgUDdBPJ9NgWR7FFEGn55y1xAfA6eb",
  "key40": "3fXNAy5zRyMZcSXAS6YCQQCf5MZBDfSvAkxjsux2d9e7pgr3ueJTX7s5r7oBy7dwY3MUNWAfiosHgNWegp7F6GqX",
  "key41": "43EZdhmEnhFZSpkNZsptTjjdEsg8SoKa9fFrktKX5FZmXt9aYtV4aX7r5vmjytdruG2FWzRwnGvLQCw4wTK4y6kc",
  "key42": "8ErkW8x31fjxk34u6ZhBXQ769fMsgR9NUd5Hgr2PkbDLTY4GkDGpx2T6by4y1NWadJnu2BqnaWL249VmaE2SE29",
  "key43": "3r46KcdT5GfCdS3R3f6uwmT8Yu1gNq9qERv11S7xaPrmAB1KWZFA2tgaaNd1c6GV1oFNVLxP3rHs4tyunnt2ZLK1",
  "key44": "33wpcb4hhGwP1oZB21v5NBeFLHYfxg7FXLT37HFxRooUTS7qvTv7vw14Z14Wp6K6GTk1ERRm6f2132zKCBPTZmYA",
  "key45": "5K9YyPaQu3dvdKmcDxVWN8inDRZ7MP8TpP46eSPw6LYwNG5gKEvXCRJ6nvWERo3H6YmQG8G6bgUZ3NMsFxRk3MNT",
  "key46": "5du75LmM3ZouYEDds7xsiic4B9AFjCB5bQ1s3w4NHHmHwJys8GZYEn359tfb2imLSP7mATLoCahXSPcEPd3XpaXm",
  "key47": "56yMK16i8rXRSqBztVoWxQqrMio41sbj8EsFwER8a8rfZd8zowMVrodz9SupEbuFU12iGLwegaqfRoQburpAPGP5"
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
