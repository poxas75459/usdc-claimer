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
    "4ks7XLfA4umKyWgRemEknukJWaMZyNuHWuvtwAbHRQQb6gd9Nw2KzQM6ExB6r5G8Y9eSG3t6HPQ2eMQ3Xakdi3y4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "9riX6ohgzNDDkpWXt2qtc8P45Wj7SFroMa999HYWGDRnRNQYz61idFHZxPzuzxCw1BCGappRCDV8aFhtwZavam1",
  "key1": "2zau475BMrtTLW9mKsMEKhAX2iNLjBPYR5QWjZS69Q44fuf6hseoEhrg6V6LQmTj4mZwYEhgafP4XCYxKanC4ova",
  "key2": "2XcXnXBzF4xMJw2HhjyuEbrDnatCaymgKickUdyHscUwyRmdrqQWqvV8kMjA6qd22vUmiWEnhFcBSCNKjnhbB8nT",
  "key3": "1HtRnVCzjnwTXLF3obXeegLGc8uYJGbZVWf5EKRSM2UTvCvBtu4tJLvKvf66ATXT1kHfqyfB8U1qvvk3QSQA1w5",
  "key4": "5RQhjAEk6JayLmckeqJTsdMGr8Ap5EUEAPF4DApYC8MeV7XbXmN3tsms6LK4wQgmsQF2NSGi77cPcTqXTYTos7Tk",
  "key5": "2G81JryKHYcwVEcE1aPNZCSFqVYjZph4SXGTytnSanhB5CM6TDEaAQhKqdnjGsmJnmMSFyWbZfoesWypH8a8ffvV",
  "key6": "43fTK4G9x2oXLTta54KH1z4zLj8qVmyYM3kfjSU62E9EX7FS3p2Z3mTdiqAiFGLJrKem4Cj3UqMTWKNSPCBvKbMj",
  "key7": "4SgjsVGoEkEHthbPPvcJLLUPaZqF7UYoAPfNpfAZa1mwd9tSukZi3xffe5rSim1wnN5uYW71AEJZJEw5br7Fm1dk",
  "key8": "kFcQ4iZJq9JHYXK6yqBi1t5NMW1nuDpPDBdn8g6GAF2skz5dSidq6zDss4XVyZteyg2s63nhJQYpLBGqxAGaCni",
  "key9": "4GH8AVmQvspd7rKyLc6X1GoWHuLMXHwzo7iP44chKm6Kq4RLTn2o1NQB6McYHQLeAvEwh5q37x8t8rkmYpqci8ri",
  "key10": "5RMmpKwRCwFKgdRw1cQjNjKBuHBFfRKw1fh7HoACbXdmmF97qCi3sgxLyLg4AZavpR8aw5F3VbFQmHYvfeKNwG61",
  "key11": "39vpWtNTK65NfPHugif1fpMFL3k7822MLgbtQ2pgHDzdhdvBux75m7WHXphjnV9KiW5qDXJQR3LwTBcXwoz1WCaX",
  "key12": "4h3vmwjDaCGjeH9G2841ZaPjfW8zPJheauJnVZajSE91BTUh9xjUFy5KGupDnPmNdbj1bnhzNfK5xumYockVALjM",
  "key13": "3y1v5GZ9kDZWEVekS4jahCMMUZZ2kWFNFMWsC6oZGGiqSJBHryS4VXjUHZ9DGgkLiFUujpbzLPGFo4sCWDTYU226",
  "key14": "PBMT8SmEYQ4PBLKxMh2vm7VVFVjop8TuCBh6tNFLtavaHX47Zy7NcNpWy5PTfADE3Rf8eAiR78W4YwqFaaZbWZG",
  "key15": "33zMpNiNK3nd9Fa6SrkwJVgZCDK6sGzwi5rhcAFtoc1JS3UGFzNqKEagKrSfH3kxKd3xKubSuG9gTcjgRchmLext",
  "key16": "3q5PmvMXNRBvsx6TEVURfS8bTyQpHZocqwQ49vjUvTaynQY3GFb2wGF5YKwYgXJaPvV8MuFXpq5ihRtfFU2g5SX4",
  "key17": "4trd5mndpRQ6FkiWePkbipMdgzwfVAYpw2wC7W3be3REVnM1m8QK57PZpQ94QJoACf2boMR24dbziku4Sh1ehsH1",
  "key18": "mcahg4yuCTyhnsMkpCB7ABBS4dMTpDXgK4RUpQXuoLEa6kcvmVfxt6QyuiWr76tZ7znabPngSUW5pM9YkJym1sr",
  "key19": "2cwcwZR3h1ESbWyHPPzcM6i8n2UAETSamv3hjYFEzFSAzQoMGTz1nxeeVH7T5m9uLZfjxvQTev6sj7Ks4GFXUB3D",
  "key20": "5Jidreg7jYGxU37XB2QHwcQQK94d8spAFzzupzKb3px561r1VDyupgC3ms33MHJPAqG1oy5xM7xe4KUksAJ3hZ1e",
  "key21": "cmgu8Nj5r3dQYKaaB6BMAJcsvQifzRR5MiQxeWTjK6wiwHopiX7A9zG4Co5dmy6qv47PYZxowzn9KihCnn7hnWY",
  "key22": "2y28rBLaXgoHsfia3gFWWdvJ6CiaLC55injxFp5dcc4JALuxbZwkuTRRozkbYeqZjNxUiNqvbjKuK1R1VKyLApU9",
  "key23": "21gNV2XADMcq8TmucYE2T6sbqJCjwKFBUeYuyGDPtYtGoeEGxGBamksAH5k5XGrMBzKojp1LVD7iQw8cjV1ZyuQi",
  "key24": "58DMSc8CZBsqAf1jrrKiKYSuhCUpi2P2zCcsL8rfvAJ8MPF1XEPmtSdVffYxBQEYQfiXqy6wM9yW2gA7LgspSyFK",
  "key25": "3s1tZQ2WKZtqx3F5SMN6jcCXfkSbmJk38sJKuakh7oFWaHjhdQQffCtnujfNR3ExtkFUEFRU2pW3BuhRv8ka1iux",
  "key26": "5FJ4mMLa8a1stp9se1EKeWZtJc3po7V5B96jdQoKJP4GdMwLF4Ha29FawBx9qZbeqpLZtopE6mwdkJK7g6tjEKJK",
  "key27": "3zLp42qpJY858dxvUhNrBETMAnbvzDFDSsZi2jrpEjcczjwD4faDdHkjFR67kk58VxHWXGGgkWFq5mrTt4HVS6dn",
  "key28": "2pHJa1Zw4k59n1oZyAVBzad8oDtY6Eq4RZ8VyyyJxrwz5S92JWoVpRHdXYPxvDiYRt4tuzevDpW2Kxv2EkwqXpUn",
  "key29": "3Gu7S2Vnog9xMdXE7J6vYQY9Xi6BU7LgRCyrAaSBJZhPYZeHW4uVPSmXFPeD3Y6KmK2ifGUdof8oRrY9oWhT5uTm",
  "key30": "2bjjT2RGrpCGbdJvtsgXFUqsq8XNNJwDGNCuJHUitz1wCRkG9HAXE1doT7bxfbLh9jWgGqnXhkzCoqE1eA3xyQv4",
  "key31": "5F7AoTaJ2Z4DqTLC1hQ5hZjLX59XPZ9JVAcefVFduUgfRBhV9mnxmVkFrToyMYSUK7dbjbqdYB9bv3YRw19K6hWV",
  "key32": "2Sg7yQtfbX936V3a9Wvmw4hijhJw5szFjr4hDywA4qEgR939pG4ZxVmTESwggWFSR961UCS8UYBBhyy4D3JKLGpQ",
  "key33": "5ViRrHXXr1wkY6QzveegeJLaQ8WNoEbUdxPKLgt1R8tKZQ3SiQyoyhhesHmceF4CywzTkSc7AhGuzL5Rpw4WVzM9",
  "key34": "65BesAs97fjE8Lpq82noQhi3bGZbZ8UMXEpKhhqJaJyAjEwBLQCJXdENrPxPNKghU5DEpGRxyHgNegqmwxtANG6Y",
  "key35": "2Cf5KXTfZWh7and56pBwErqde4zGVS5ZkToSpjeMo6rxWt9Z6cTDujXJMk7XXdLJfa2fcqtXoBSspNKoSvGjijK",
  "key36": "AEYV4EpXMJKhwBH3b2kWYvKqMTiMBebbxqrFJukxNJmarLXeJoLTFnc36LKh3pwShtTzxmTq3GKTeNgsDLL23mQ",
  "key37": "Xhvo8g8RE7SANMCFdv2NHRRq6oAD226LhKoxQCTkm9WnRfoBJJcV9N6EC1zEvGkpzCpd3DJ4uCLav4RtPdf9Zec",
  "key38": "64EFiniaK8cHA1xC9Dpad8ht4ndqJ6Yc7XRorm7Z1V9vaRRL1fe76pCTMRRKodRsy4XgaW7FKQad92FYSdnTzTBC",
  "key39": "dgP6CeAP6v9XQoiQmfQTcSGcfqGGRQMvfjQPwfK8k7SittDnUfWxobnjGKZooQhp7P3JesZK3zPgpSpnEUs9D8Z",
  "key40": "4Z8boarJmT2rdxwtkp5NYzk1kU6WnAdZwhHYh4ZanPGaWd5D8Qee78ovWdbwTo6iyvkQiMdtcez6oBZ4Fa7qrFfo"
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
