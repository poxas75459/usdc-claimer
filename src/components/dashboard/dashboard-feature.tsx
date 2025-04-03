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
    "FV1HtCFQy7rYSSTG1rhBNNSqn4EuDshKyk2o25kjfwBkdNU2Vi2uh9gE22E9UFuD9DAm1uyGmWfmqaGEx19WvUh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2XuPfuFnduy7JHjTXT1SAM8SGz9rWuvL1KroiwHstrSqWn6rkQf98SPHxyRk68qBK6BszYza5fDNkGv18i4wjVic",
  "key1": "5tkfTykSvDRWrLxJf7ky3GJpx48Ur991eomurswN2NpP35p2MDTJHA7Vpm3k7fYHQ9kQFBwK9uaK5Y6LKWsgtxMm",
  "key2": "31LepZTnJjkoRkGgwESVfBRSoQjohcqzdhuQPQUTTC6CcuQVxxf8GiWi2jb3sFDR4Gemy17J8x8gZMHAes3xn7Yo",
  "key3": "N8wo56wEEWkz9zbf6UigjjcYYivGFijnx4Uy3a5m3jPWbrK5vFMjmrDpFJDiByc84QLaLShEaYRFM3W7osjM5K7",
  "key4": "5jqsb7EKkmSKwdyC5WhggDbWYXs1G3i3tBTDFA9qUuwm4vF8khKaVUrRb6BYDKdTJQTUJTeLzAvJimYmbE4p75vY",
  "key5": "2eXXeeY6vwhy8KTPdwrMdBbx1hvFrLRYK4LEYoMBbaKLtkRku72gY828yBX5SKT8uPCQwr7f8kMY27GFiDXeGqy2",
  "key6": "5Qq73z8EaD4DoP6cojVJKcKtkfPq6yzC8Rx89awavLMxi8nMBTbmfw491rfANmNVrcVoHgeB3b6otzyYmW7VqhVm",
  "key7": "2bADo3SFBTRwY55soZ86sdypLKcbdbX64uxwnkPSD46HrF1ScaCUPnyEg9hE32buy7DyEZe2VGP9rtvnZcrq8h1N",
  "key8": "5FBCREhfZbLhZfYFBQRJVrV48vBsj6kVwyMSXWkfuGcBz5A2oFsD8gYNtZJ4jFeajrVqHwWFY8H7F6k68szyjNAm",
  "key9": "2qUa4BSh2FmhGCZgZrAGAatBSjV7rmLGWgFrwk6SfcgR38KhVWQKhWLVxDr8xEF6zSjNqDXZWPvqEPkgUD48E1zd",
  "key10": "3ba2nFjUBh2ynbErzYb58LsXEKw69noxsib5y21RCmFiaZ864LBPrpNLoDsrLTN8V9HTkLuaLbUAKKWasAjFnw2R",
  "key11": "25DF9e9v781r9WLxwSJapSW9wqsDzqeAiYMjcURttiVZGzNPMqs6RRKtfWrdzXn5TcMMudhZu1ejsRao2AU87hAp",
  "key12": "4Uxnq121gjFmYN29GHWTJxcKNUiYxoTuZhMc6sRw81FekSPkiUgVfotoR6oDB8d7rvP1VCQeE8uKSn7d6vPuuaWS",
  "key13": "mh6is8GcSaCqiEN2VuHP76cpswARLPRHbF95ga89nMRBmw1Lxej4dEBCiWTjkWgadu57Rt5RUJWgqu8SvrRzLi9",
  "key14": "22hdznfQpX1j9pd5rphLs1U1DnxMAbtzR9pfKwuwjh9PGXVXgqf3rJ97JybJUdAQt9BYWhXJS16zhmXRFrZtRbsk",
  "key15": "4B1D9h77DeqgBpwmWyjZDfyW3WYTYn85PF4S34adfjGjwVcK72s9x1oT35RTG4FxYAdXpoeEncDDrsD7PhEXoUc5",
  "key16": "2kZ6QSuYFJb9bT9TUgkkHRYbSo2zHujPtXoujYvWLvYKzM3hyKbi2ypgEHR3pgX4dC8Xe7jD9dPhG16CE3Pgt8PF",
  "key17": "4fAr6U2PpJ5zFmZhXR38fpFfXP52dSQp25rneqfmjA6Ex8WYXUaGZKAQJQj2iZaokcfTJoBJmiokjcT1LNQMHhK7",
  "key18": "rCRMNfZDmeSj6kt585THPXB64hAwPcqz5dKaWCo8hcY7QJgduEDvAEQXAgAdKystTYEPrHvGct9CxWgWUDKf8CN",
  "key19": "2uRLwSMR27yjRFV1b9aj74E81zAYnuxKwnqjDuJjrY5AwSMHihHEwcvHDHMYz15Y8m6QWSfBbW7jddRxuu5g1yqS",
  "key20": "5ixQyxuRqCMhkC9WX9gyyiQwNjKXx6BfkQRyFTCrwwT7ae4vub6wwG4SBLSPDqmUYmi9rsdCsuASCU3sUqpm2y8a",
  "key21": "4dvDPxXSZQ5u4kcHrkvqDav8N7MHtC9y28g639s5NNYmc83mgxMsfCVBkR83qjYyVekZvZearHJFcS51GNtBnvji",
  "key22": "oXGx6ApGsATH2E49fxwGeKWyhWJiETHPLTY42AQbia4CAg6K2kSyXRhviXjCGVrS8tCpH3uz8gVhnNHtiHufvLy",
  "key23": "43TJ3AKPhnBB6NYA1fJrLD6UPEGBbtjatXaZCySivTYTWp4cbwCJzVfjBdNPAJvjwNHfKe3iA2LWqDG4FFeW7mJi",
  "key24": "ZrDpMr2dhvkXFBkubzhfuJiJFTm45AWhDLuhGtsorjXGpzABj56VZRz3CmEwM39ob7UAwDe4VLa9E6PE3h9DnJA",
  "key25": "3WxSVvjnd3vKjT36EjdaYu4mReDfX2URqynpnPG28CNLX4g5xb2FryG9WvS6Uzmi2LAE9d4fRYbAvu6nAUyKzbu7",
  "key26": "2XPTymRBeN2utKwVZwvyGYCNHVCJ16HAsdh4iwLC7YYD4uXKttQSHbk5j3jv2mttyWq8xSQXyyWZ7pbE6APTrHjo",
  "key27": "4VJxBZEMcybMifFXN5u1bF21eF5SkMNAsm4ZGZyQRJkmsuwxgcDiP19TcJbykLsQJjRrnSCGdBYkVVzZpmHTDBAj",
  "key28": "2JhQfhN3U5xFFkB3H44vmaNDULjrWc5XWs1n5iwkhtFAtTGx18b6izMS3jgaAa2APM9yV29WoD2ZpnN4KFBhA3Pv",
  "key29": "5KUXegco6yZqvoiqPcEifSV9y5grNYHMsaLfN9PruaMMwhB8z9f7nqE55aN2Qz42SSQwQszXfbggVZFbeBXJZ7Ff",
  "key30": "5hwzbL6dsmX9CEBSiyF2ghg3Jt2ihee1WTTiAhYD88pdqUpABYdcjD8oB2E64Q4rQJoAEzDH8iah1r9hZFwCKdxL",
  "key31": "2utScXCFqVeZJMXnbt5ctjmGB38xRMngfiruX59RM4vSBoLmj9pA949mM8Vsj5sYGvwcBY8GjQ9xkQFJH16YbLh6",
  "key32": "5i4jrbA4oukpQgaY9hV77b22Uzad3hGrkUjFohDm2V6SqyR4uh8aTY3JaGr1MSPDF26jR3Brm6Yb7FhjT6dsD9Py",
  "key33": "qQRvxMsB9JTKAXthmxXjZLhAWnNVy91PbB5pW3RUqPBacF9R66vunkpGby462bmixWzaHHNTHFTrkiRTapzgNvw",
  "key34": "46YR7bCUXUvbxDH8Rf7W5vYB1ZB3rSz8xLUKVpS2ZhcKgPurPBjFfvA7edZPmi1ain6QnPM1317usJCUx9ga4BCp"
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
