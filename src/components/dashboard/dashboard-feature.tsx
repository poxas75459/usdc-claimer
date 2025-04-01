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
    "2DnQheuiH4m69Yg1w4mRqckJ6TunrcjgYrZxDxHWVWqxirGm6voHCwMHcVzMg2mCkVkMptvWaL2sV9Skoz8htqzH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5YGTML4aKZ1UZNBfSHnyDJmSo6LmShwAynEAv868tVCBqYrKK98FLzX1oXXSfzgwENLsvgMuuU2X5TunVHVQa2Pj",
  "key1": "3pW52o29QSrobLzj57kBWrBWL9KVFWZVV9Upichq1wfbhHPei7BhmE14zhonsHWe1VSPeMHKNAUQCNQzukmt72dR",
  "key2": "2Wft9EJG77MPm5AR7TqeNgSTApXTznDvSbMxuT6u7iQtpwx8dX3SmrUaUTjQainHD2DgSi9iimdfY4vaVEbsiaUk",
  "key3": "3Jf7BBwRQuVG5ZWyxrhrZe4SZq2TRQax3suP3Uf74zXAmNsFDFHStEBzLecVdNMtZqtLrpSFRFrhyZTsZXeVf9CA",
  "key4": "46EbjZs4b14MKHtyLVJjeQw2BMrFw1E95wdu6nbaJN6kVHQG4YCsTKdsA7GB47ASaZA221Q1M3o5SYhVLJ8GxBMd",
  "key5": "4k7bMNvFANm2qGBPhZHAvdTRChi6NhZFancpyJKeyPEeZZ4yFNETfoH8W7h9RBEBw4YuBQQxFjxLVuJRrfjnUbmD",
  "key6": "p1NRMqWJrpKsBUqeN4PH1VyXrvCHhvKvFCA94JNM1ct68wq4Ga6aHzaWJGBDUg8pFxdUzVX8Dpw7g5WidJQ2TpS",
  "key7": "23t2yAibEEwQyptybwyy1SkS79jGHh8ybWCnmVHgVGZhLdY4bQbtGJk6mH7UERzHy56qxDrdrDntnkRvUhvDvqLw",
  "key8": "4BbvaShDZKDDwSHQjzdt6sKP7VYuQLvi9ARs2bUCbiXB6hNUWvssxTVto6YvUhXnduk7kbaQW53PYbCfoANFboua",
  "key9": "EE3BoHhhXH7ucaoGRLrW75qnZGsUecwhqtgmyv1Ho5ZzqQHo8iixi8FHmcXwwUvSFpdEWe4zTP2w4SgALmAEsXm",
  "key10": "4CkrAtCFTct5nBAf1vDBtdHKWZ3vnp7rcEdtHPSutRDYjTMXhuF7RNxd3C5Ttjhhy91D66fu9omrJHibBZWfiepJ",
  "key11": "5s7yrhB7Ks2rdDwcd5YRERp75TdCu8iVe94jhB6ReF7jZeXHaaRs6Sy89V22wie13QRWDzseY28eYK1tyJJ7Fymc",
  "key12": "4tGQTTdsuwkE6iK1J5NuBAfxgYd2BWZtwf9AGubHvjR3YJp8vSzHMuz4RwZR2Nhst5tm5aodo34Qin7ncA3j6yhE",
  "key13": "qhh5yXTdCjHUST7ri6KsPSrTquezcXV8gt3bM2cFRFa6fCYYgrNUzSAEHmgFpzBLtdEcbTCXnyFJ9y5EfpuVj6a",
  "key14": "229HmyKHukaZgsBayonQzRqAs95DDZvxyzDqLJXCiUVJcjmnQZdDFwee528Lz1dWCCMckLoY8kehasfm1w9gcHHZ",
  "key15": "5DN54soqP5RsSTs5KekGMaChETpQrRSfoAHvxczKFfCsNqQtFnjd3KDZN6iRpu78vGP1w2apT58P1xvtBwvC3EGB",
  "key16": "4kgrdEVECGvdHWphtH8ZscZa4xq7WwYSgLoApupD9JkvBCWUp8eEL6cEJ7tnG3Tpboz22X3Szr13UhA2oCa6r5dF",
  "key17": "39AcC1nfFH7FLSTPz6D7wY6h6Qt7zzqKFyfLr1tdgDnqpjpxdFyDGF239hGMpQKYS2mNQ55ENqcMjAsZWqUUxgWV",
  "key18": "21WtAU4nArWiCrwNK7DhdrQJjb1ZdStR1sL6Cn5NYP9TyZMYzHFeZNFnFZQsW754GtpMorhEHZYGF629x6dJxG2U",
  "key19": "3wEUmVMrzbJmpRuPYyF9wc3AkssmNgD7e5T92NtrdVhmMYLZ1kVibfQaVzZ9omjACuLDqESCWDxtyTD6DAmkwaZ9",
  "key20": "2wqEJNWusH4sn6dnt2t43xKi9YdCs4KRG2HExBrw7qFGEaZvNP5K4Qm8ZUgMD7nX4MJRqxwAiQoTcMNfcqpyQ9MC",
  "key21": "2ySJa7JcM2MM5xsxBobEMewmzLB8BwD6Bpetuy76xCN7Ci6NxCSuTNY4CVdAy61fmcL8k9eK3kWwUW695pBgA5MY",
  "key22": "3hG4RDXFz7m8WDXfttVRYq6nTraf8q6N3DmU2dU9JQ5yMni7VrBkj9ZCf7trUP3r6r8RXRj3tvD6TVDApaoKsJjc",
  "key23": "4KUZhGoci7rAKewGUCWKBXyDFqbpa5bQSePMtynGAgnsNjsRmxTQTuDDpdy5z2vKcgK4mgKTRZWd9Z1zGExHJJaC",
  "key24": "27k2NwnKb8E47pE89ansTTHHScFoRaUmLYo7W8m8EHQVxysPuG2xSUid2HxbNVqkqwDFtrp7AcZ2j3tjjoVkVzdj",
  "key25": "3eEVX8zt9nSX7KWx19sFiSjt1f6rPdut2pMcphcobEeJUM545pcGWe64wjFmJquMfWTbN5ekmNnapdyiBJbb9N7",
  "key26": "5GuQF38bHcYyQiwmoveioXLLNmczF2QxMmyNoQqN97EMdjTzccNAte9nYZ6xVY1RnmuJuKJQB2p5eKK2r8uZscoY",
  "key27": "4FaSg5rY3zxSb69GmksibKLvLcyEeRYs4DEV7E6QHbAQSXywTtfzAJvtVTuJ3BzDtSaL4eLv3dpkPq8yks9u2cpe",
  "key28": "4SrfJ2ULKFwkgEgkW9MXzbcEbPZE5aTizrXR5FNUzmwvgKVabisvRr3FNM4vD3q4PMK2BqVaca3WxHHTE4M8E3dJ",
  "key29": "44FHutXbB2c5A9PECWV9QVW9AMfbq6LuLfH9eryJzPHrBcuxfkEccXLvWbY17tWQoZ4LRk9T46YzmMHxELnmV1ka",
  "key30": "2JYUi5wsMP4ntkrpbzFiB9cxteBVCf6SYG3wG9Lnv93iKD3vzdri7QiZDpTKTa5hJPENzTy5sHDStikwDNjHX1qF",
  "key31": "4vvgS6ZncbPDSe5SBhcSFBPZ38gBU5XMFJ5pPbATZe9KxoMYfNPBxF9yAnkBS6tGwKABKsbefaeyoPF4FHmYpnDP",
  "key32": "58CpdYjw5szB6qNFfzLQLggrUq2K41mM2giq2pdRfRbh8sC3tKdVTkBty1koHoErkUKBTLY8G1rtDktLLYLn6r3o",
  "key33": "3babpYgjuztw8seCYg8WiefF9Vdxh3AaDbqzQUjkLETFpfskbpD6knmuS8fZ1wYduqEy3bJECkkmH7m9nE1obZGf"
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
