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
    "d2m8dGssnhjb8zCxFa1giWSwWhsotDaXnjV6vxLx6eHfw5JtyDCn21hNxoesqkoomc3Q2BZ9TMpMUKoPXy91uAj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "xL3nUEEZAJ7uFKHGyJvsLjsGa5LLUSnLsQeDSRxv3Qamf2mKRdb8hEtAtKiVVieBsVDXxY1CAgw5Dt87Vp8h8iH",
  "key1": "3LAy8AxBxHL2nMYkQYMyu63ZhdMqqFGL3JEu8unYp58R3z1xQAzSxPScw2AcHmr2oFLH4YSGRiEcXNZW1zF1s2v1",
  "key2": "2URCE9k9ScQzY6Hy9JmG1rFGRCz7e151QTNTUgfaap5gxfqNqGWCKtq593fdoPXpizqkaSkY8U2f6QML5KJeDEv8",
  "key3": "f8DH8odA5tta6J6U1Jq5njRwAjjtnT1zoHQJL8rv3foLqnU5pVbjCwM7y9Gf8yaZeVEi85iCtZYu5PbAfjceQqa",
  "key4": "61KHx2N7JeRkM5ubU7Uc8DMuy1MbgDMRGfvDdjCC4t4mEY5tBnqbE3NqT8UjGXHuM9eJimzD21fmHK1U2dTgET8h",
  "key5": "5v48Eei5P3MWRtzHP4SSQX5LH2phCu6CZ6JFzuafQNpv88qkTJaabU8KXZDT5uUxRzbNTgw2NFsR6jXekhzCntDG",
  "key6": "3mqY9CphU4yZhPyniXaZMZVHz6VLwUntSXqoKEpyRgQRkWP2hXYNgcHYsYijAX8Dk4MQxymV31VfXRWGPNRobhNK",
  "key7": "wyGyfFMNmrqAqpidDkJPQLzEniANwZb6ijK9LqnqyFN9WtR879P9BRsPnbfpne8vBfAFELeJavNfU5B17J5FRuq",
  "key8": "2dMwrgecHX3NUYMVJGe1zHB7KooNzPvSavRJZM3BnentwQ1CE5XjWyC91rKTNKUjat16X1To3GHfkcR9vwxCpHos",
  "key9": "5cHGzQUtGUd2U5sb1R9tr1Va8bVsGi7FRW4BRmDrm14a4NT5Q2uj6Fujp7DUxcFDdnC1sE8C56CAcn8GebETsL55",
  "key10": "4BodUqQk1LJh9u3TX93vscYQS3tBAo7mdCiu2vhvJN8gqjbij7nDfPxAXCXc177n7hdDyBa5j9HRsY5d4uoWh5aZ",
  "key11": "39kDhJoBifoG7y3zsxEw7f5roc6d2YjMsVnvJTyQsb4dM7CtHR1pFFXUYmZbteoX1ndyKqD3AxMtPkwGxHjpCymM",
  "key12": "3gHQh2EB2P3pauxy2voMDWR4h5oxNuebbZePLDnBXgN2Ab7pQX6D5ToWTabjUNHair2iuwk2PGrLkPdNQaXi3Tf1",
  "key13": "JDFMyNbQvz6MBYJnKXd89xxHCCJJmRmfatpYZ9Vi3EUGpqBaiYAzai9TpLfgx9Zd8kMDM2UPNPvHUZDXbtUz4kp",
  "key14": "hMjUQKVBUkpZ6YP7qFpr2p2CsM73qZmJfRjgxdTNgG8iLxWwxVfDoGnDHNhp43LJxjCSyEGLL5WKVFzMMR8d9H1",
  "key15": "2GqCAKF1sKBBH6vNTzVsW9BqZzAaaSNixnqP64NPaEQkgraCdNnLukWJejHyoGzs3HESwPXrZBC2DXWjr1DAKFXZ",
  "key16": "2bfnCLF5BZt5c3NccK4xrVjqWbi3gSvGhKf2BPzQYMyFxJ9ySVygmpYiE9RKqxVQL4RCR1gjswdTsS9w72udkeXm",
  "key17": "qkBhrzVxfFeL3bHWaxfbts38BMnx8xnsSHWZqtAPEj5FKYcBUA751LdmHwKSV9eMJCFrVaRn8UvGXnz92VaTcnG",
  "key18": "2Nb41kGnRyVd7R8V5putRXPHshK22uHuR4kwYwkHmypwhCpbPhLn5EzDZ4gsAqnYzzfSz3KrfCuH4he6xfT2FAzq",
  "key19": "267bkievuLfeKNNSLGqJaijdRXDvqmJvCjZDSVv8n1ppJcx8aG8m74KXqvMj421MvFWMX9Jd6V1Luu7cjsQYAgT9",
  "key20": "4mzcaw4d2RGwALCTjEHBeDP8En8zA7nXUjimgzscrnoc3XLtz9Ek4B9Jn4ACiCL8Ao6Sps4UJneks5hYrcB4pSQF",
  "key21": "661zXCwjccaYN318d449nsUGjpjnsDfgamNx5fm3d3tnbwc7XH1vXJhuYDy3ZsFqis6rK1r9pQ7qiFKKsNxoGskN",
  "key22": "4gB872hiDiczd5CheB7i6VKd89gBaEAerhPWVE7y188sPyMKbC5T1tcM5eddoYt5JRwuDjbKKzg9va4umkNGmmsC",
  "key23": "iHRJJpfzvUBsdhn3Ro1WHxVzzBNr924eHUbrH5PsTnwpunwWy8r3ge7BiDHA92siXA6BEJyjggymkXdfhGLcLTJ",
  "key24": "5TffkNwygajsX1SNhPYgpxU1dRpzSfbB8cLBDXsjn97kSH1qLPqAjwjY1DqV6qktsvzYwu9TC6kDUoL152LFvPPi",
  "key25": "23bbo3zqpMXZtnDjhYcFymFRd9KwSUFgfukEREC3mzPcZReUkk4W6C6QScG94CEYqcudUnqB1FVz79qQgCFwCPRM",
  "key26": "bT44T3UB2RdrtgMq316j4xbe2ZLyjFvWjP7fDXcjLHFS8URZ8Ji3tag3YqBSRGQyHdugwfWSGuGBJzM66tkvD9s",
  "key27": "M6EtRDQshDkUne2xkEvN47nsFAj1fN14qot4rXqK21iqqwGWnBFQCPjFxCQzszL91CJUwkmrm1vedhyyKofvKth",
  "key28": "SJhcAmMdZq12eQgyToKjijJK6oRFtvD7sXdRfnpCLY5idRtq57f7YtjgixBjtRBFCKfjYwkfgm7t22SKo57EP46",
  "key29": "4Lnty2AdEnEz7hWVKmxj2ohhFvNHfiX9624qve4yMmhbC2ppUVyGqGKburuTkWQDxrYJhb5vMjsKTZdtsy1bPdZ1",
  "key30": "2jV4mRthGitLAFu2VCnDyys1v5RrbB7xiyM12prSwUtS6xgRPPzas3tA279ysaZ94aN7pta5PDc42QzSkC1mcEJA",
  "key31": "41K1cLvgVwHgC1seSi8oWPF6ZErdsSc2snLZUgJ97okuHB4cduiVryj6wZEYFtoFAM6LsvJUVidTrMPD6rLh11dy",
  "key32": "5wZzZPrJ5vE1HypvJMnUEcMRTPAwu7mKiWgaqvgrjq5G2RBe14i68hGdFMAAhL81ekUyibWE8ddm7rHS94XiAPoA",
  "key33": "2EFXTCC6qruYra6TmSh6DzHc8VhCwWqRWBjEhttvqvvwK3WovUn3jEycSV1hi9rCPwAoJfVbDE8xTWMk1kwNM2Qh",
  "key34": "4KzLx5bfHj1isg9538NTakvQZEYmRggFVwCjygjWmCvnNZXRurrG9QM2KFQUeGuW7ZbaRGFCQgrGNRx5CX47S9Xh",
  "key35": "2kSxcxXVGRSBN2BfvQBQCyeGSfZVFFwwJBnxvRxjo55ecGFANu13hXntVDTWV5dT4ePx7ABASjyK6oL8rKYPeVAX",
  "key36": "3dbdZUxAdD1xaFYLmDp3u6auM9FT52sLVyTURqfyC9RFvFZanjNkTuabVcQF3bn2je82q8SzWXB9dbPf6bPdoTSK",
  "key37": "2VRJEHQrdqCnfYCpgLpKRiYeqMpvVG67PNiiz9AA2EwQjrYZaR2pWM1HeiTVQnagg9uyGdhHQksm5r1Rjvw4GenG",
  "key38": "LFEJy5bcTWzchmtxSXHSwtPReBb1ZhdKWHWFeBPqrw4ncaDdwkAvLrdK3WjFYHyy9sN9rAA6AnqxhYMAKSRxjEJ",
  "key39": "3X9PYJK3iEtvVFCNP8YEh9Vp5vQ8LVgCjScfxAtsNZmKnqzXiwEzEte9yymCiaEiq1LtmtbYWd49eS6w5r49icDA",
  "key40": "3B2ZXs4gus69ji7g4A48erBhLK8yB3jWJv6eiumzsJQWrLkc1WzSEsnx9ffrvyMuCbofemPk9myDR9pwxMFT4bLE",
  "key41": "4StrBZVycM9HmKbFay1wcyHiMFqhtU9uNiH4au3gQM1KoyzVbEkCME9R5vZAWjuqbjdwAJKXgTLnnfxdtKx7gz2o",
  "key42": "4vZNgPuvRvJ9u2TiTZNVmEKsVUA4vG8p5yy1pztJLKC8EmSwSrwdgushPuo5qWN6GsGngH3bsKe3BVin7KKA9P73",
  "key43": "GdcXLinh22Jpx24TJbr728pagBs8CREzfE3t9DWFYJAq3p1qVmpd8gS9kbSERrDxFkYUUGPcsyMWfP16ydefouF",
  "key44": "4KXKCnyTutgEomRnPUQYZrPs28kDrZECw7Y2GNy78CWutZZDmw9urJxRu2oFLY9WPGNFALcG7i4vDP7KEhSuYBnt",
  "key45": "4cEZKaAwjDo9dp1Z8JHrJE4XrkjekB7UXsp1i9UgxgeadE4dXz6BbyfQEiuTZw2Zz5ZHNb8x4fBYYuAYXrFVpUqd",
  "key46": "mfJW5k6M383qgaJTvjMZEuAy8mHpn5dYnbERqFFCbNzJgVpRZmfaSsvTrAbUQrTf9yqVyX8DPTA9xbt5pra8LsM",
  "key47": "5oDr2gdYFaYKRNHRnxd9yyD7UExzoWycrs9PfZpNamf6mVuThNpRehcqS8JAN5cVYzDwD21vnqaPjZffUWoB2Kyc"
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
