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
    "4RYQdgFnGriDjnnXiZ2BcyKM8bGe2Auk4cocZ8zsSj7eknpXQaqZLk56GZrr9oAoNpUJY7L54GNg2s6vFKCHmqp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4wLNaPfMXjoVCDUty5QErboKwn8vMhu788LeMbxPim6K5Zh66cmZ1jMkqUuNomezqAjjxCtCu1YjkL9UzWKiUsbV",
  "key1": "4RjSpMjgiX9QRRtgUhn15LK7ccvpgj2a1h4wtL9xJmZogsiZ9dVLq5KSRnmh6gQC9ue8UKeeVyhwDFKxP21poNJP",
  "key2": "4wRX5djBJPRj2oCn8EYWchuXLsKaUe8X4knLdSdkKJ2mGw2WS3X62FBjzyxKCz27WktG1gDqSwXjerSFpHVqkrAo",
  "key3": "4YJXAMy3dni7yxggqgMgust6nMApEzR63Wx65Tshojdm6kgX13DbqntanpFh2c16HZQtMmhJNA1TtcKwFGAFKWUJ",
  "key4": "3B6FsALAzCpe4ccUL3GBNFbWTug9nnBzhj21Hq26H3Ve655XrsXJpPj93i6dV9pPHhgCkUwkhd3Yfx25ZcfpiTB",
  "key5": "3QfGTPkGJh1Y5URum2qp6VKjh6QYQ9n3n6qRjkpydFCyNhyWMwosQuBJtm97NvxVAj28w7E5FdDP7P3NSCronbpA",
  "key6": "42BagtcoWMVLAS293HGqAgsKepUWTfZfthzSP71KCsf8KF2QSWRNrknQ4jWBHEFt7XM1ztdwjo7jmmw3cB8x5j52",
  "key7": "3GSdgarqJVRu1fba9NPMqsPpEBR5ZXFxrW5NmaT4nTEnJT2RCVKZu5fCwiu6zRXuQ1SgTRQ4gw8mTNxXih8Qjhfu",
  "key8": "aaY2GYheqZkP1Q3q83u8GJ4qmUPrE8xyhdbXoQD7Zu4GDZxvZV7RsZtB8JZ2md2Nd2mB9T382Uf6uhLW5Xx6wm7",
  "key9": "H8uq6xTbRB6nuGXz3qcEasNr5TphcaLHcmk4mfxNWENTrLxhFhvSaiBvhw6wwpETxcHwy9QH9Z4m8CSBcpzP34i",
  "key10": "3U6Dn9hn8WKUZEnP3a6SEEezr5a3TDf3gnX4wro5yVSDCAQ8wHfcPcSiLQR1rMS8rAbByabz8qYyQvsDkeaW2uwa",
  "key11": "3RNeUgFMoYaQd22yyWt4xG7b9NHUbH9QMCuVF1aNLPPneT7kC2TFDEqzME8gzPnNq3y5QrMHY8sX28LSfMFSTfkm",
  "key12": "4zcjkCNQQ1jvknBQtLfaMNrSVnqGZ6dwrHZAdZyejxUYGTmP9tGnss5r8hBNo3HfPHV474upbP893pBJEofY8XQA",
  "key13": "25svzzGdbVeyDfXPMyAvwjxYpSeF5cpWyjwYkjkjc5V36MSrvJJawS85e3iw3TtFAo9gVv6VTEibtNdL4qZp9KPz",
  "key14": "5hcLXh3BASMhhuKjFNrb4UtMG3Z49Rd8eJmSnjgvYoymHV3dSYiSb2sGK3Pch8uxrEHVcM3f1BgMffPQYxxnmHNb",
  "key15": "5U7JdxJoBBYvkgRPPrU7peJTdTUDXKcbdX7rFU3hQyWdYtGbprGCDnEtiLDm6qmSgJU56uWowLKkKjhxDcaRjdR3",
  "key16": "2eAhK5cjxx76KwXEQ222VmvMwa5GU8taEfjhBopBJjcgDPCwigNNusx8GL2Ygs1MmhgmdfDPangNfGBL5oLjHNf",
  "key17": "2wMuv1gVYocuCRsVzZVhEC4CZBYXEw7jq9o2P8tytm1cEsRGZhbWzWL3dGTAAKhppKNnvyMWE4UinNm9UoE8xG8b",
  "key18": "4ohbvE8S16vCGa21gc5B6aR6kcd5Ekpq6r8mBD36EbNoGVojirwFgUKbzVzG9G5W68D2UpSsv1pkA5MmQnCPTom2",
  "key19": "5pNLHMJR8TXapzGHMdLMr4MQhDdjxPdcSBCJv4sfreGpRTykUqhE2eVdrq8mYqWmU6EEz1D2T9GfcmBsp1e6FNAG",
  "key20": "4GN16XTFHKjGt3ZQAmSYE9JpjkpVhT8deGhspeYJBEwG4xUUBbg1VdMyPE2TiHPL4KeyuD3svgx7gKVAimpDxk8z",
  "key21": "XD5DUvJ4BBdrj4RzfXgvzM8oiYrssmbLJUVbZfiw7LMPZqJWNRRmDs6aUWAvGN3x7LTqBwVbBjfDbPbytBwtiuD",
  "key22": "3bfcXkB7Nx6kzrdLP4a2KiceKpz6iy4Ho2Trqerg4zv7UcvE34Q4nRegkHAh6AhAonexskM2Lnhw5cMit3VxoAuJ",
  "key23": "6292rFJxtJooHfaMRSHQhECUoyHB6sHYPR4JY5j27NmTsQ6QAMLPERC3cvHmtCdXo7Ak7KNeooVBWVBNR9ykpUr8",
  "key24": "5R17iAARFZ5y7Skvew1Uh7JXn9aiBso7YRPv4npVCz1Fx7YbzEb13XaA8XUyc9eprRGR22UaxARYsUm1pJcPQjbp",
  "key25": "5gMvh93uj9SwWp8wfWZP85614cRdrw1TYZRf12q64hNqJoFrCphPSXXXZZmWHbyTTsKTgqMg93FWT2YvxR7JqxVV",
  "key26": "2pmevyD5PYZ8Eyt94R2yW5LnJ9YoUzoprDAMQkvG9fsCyJRQ3KHJSoa2tEmQXPbdhes8jdvvke5eWHNEWcnZZDw",
  "key27": "45e568nDJAaHwa2weUZw9SsKju6QmbXXem1x8969mimGmQG96dxjR3HvSTdycdKozYM2mL8zLdYBHwGxWLb7mdc",
  "key28": "2jx2MgWbM2BprjZ8k3GjwCE5YGw3EfxUhLNaG9iVcR7SkP4j2KJykf8NEjtQTbfWeCHwHATiKLNkc26jgdXEveRv",
  "key29": "46t4pi32gajVAQcSttxiEUdDiotusqsFaP5W3bWpqp2NNohmV6hvoixbbSE7goydQ9MFtbaYw8z3FtFe1kKVBkQ7",
  "key30": "aaXytqZwdPkJdRQAtT11FwnrFMWEVVwiYqc4Z7ioaJk1PfhJqsvf5cbrzVWFsU5xMKeetBwrtvq3UsFjo7XJKTa",
  "key31": "QNmspmdqxk5M38c82a9XCJxe1qHVnvZn4uKf3GZXyNx4FMCmZCRWCapMeCcx79zCwnYTLFaf1yV8t1rrbdFPUoM",
  "key32": "hpbMssy1XSkCaWLNsVsoeeWux9hFpXf2Zphe8WGkoBw85gHKBVueZptmzL74TnnjsM3fuhMS9T41tyv1KNX3YQj",
  "key33": "5WXxxbpLUgTVevNErPqbKC6gaHz8JvjDPimsjWStx7Dq9xiStnVx9BPGU6qvEkX7935q5URKU3M4SkVRkVnVuc78",
  "key34": "3AWsaAzxFRN4eg6pmqR6SiYrU8pEzswzr3E2pFDt5gy8ySfrAgoXuD2dodY4dB1UcwXAFBbcHu4htD8DYuzAJs9Y",
  "key35": "3k9cmCZJoBXt12UsKneKSwX2YDhcPJRyaXNDu42V5z6eMXtSAm7kuNyLnpjWAhuG6NZC13GTiP8sxXVo1BkE27Gw",
  "key36": "43cH9ejzM49MhpNKh3kGHYnRj5WGM8YqkFXENWXw4Q49EaANEYVVfFwgtnNYYaMDYLyBL9cgif85tMcLmiq1QcbG",
  "key37": "u2DuU4HyERnUrN3uWRc669SaF4cXHJBm7YRX97ztvQUYa2en3nCJwQMeiaBzs8FmabhoZcQ3dQ2c5zJcfYrMGtN",
  "key38": "hKBnZCc9TS9Y8TvfqURMLoRpQCT4TB64mWuZZQbbd5EwvRkg9La8st2iKUQ91BDLPYrcdMY4tQWeMdMUGcVWSYa",
  "key39": "4dofzJ8gouXdAAnjF3X5Q58wGT2Gmapn2bQap8xakCLJD4e25zaaGuUgbNsVDUq6zC6BNMVK6Ubwrt26uzH7vQpU",
  "key40": "4aDWAnjW5Kj5ngoH6szakHCPDVtP6JEJ3B98Y3vz4LXX7z7zDSqzcDNmfjuMKJ2gJEFtnSjR9ANdXv46zKLfHepN",
  "key41": "4zx9nbyoWGi3uazFepjLAygtm72wV2FFdwEoYkFXVGCX5zn4u7arfCcFj6pUfTU4m4WxS3q48m58hmmyFyu1Vycc",
  "key42": "3qy8cNWQgPaqMKpdQgFrEXr7wLEuyctHpjyAHCB79kBQgRGNar5UdyHq7WEtGJZf8NPkJ8kzQUomwaaQS4CRpTFX",
  "key43": "5jbF7YpavK9M6CzfvY9gsmAyV1A8QZbycXvmSGb4ZQG62VXE3LZJonxEHCpQJmFiXUKY9r9cmLQWcNHLP9g8canc",
  "key44": "32VuFebXMKZcRhoGFzxe7yMnWnn8R2xtKtTVtb47R13eqSV1XryrRHqqAW7uJL5g95R7qhvgAgf4zjZwtnM9ToTF",
  "key45": "bUV6R5yATeEe5Mvisf3VXBdbnF9LxMLWSyUfjno4RVLoZWbi4R7wcjvzEm8HSNnB4Evd39idHW44myWxU7pgRL9",
  "key46": "2YLoaFrvYUP3d48Gtt5MfRWuz3DEU3eD7oh4i9aUc9kBKiKL6fTRh5YfaCAYonnbH4mona6AmkA7qaxNPbGWC5Wp"
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
