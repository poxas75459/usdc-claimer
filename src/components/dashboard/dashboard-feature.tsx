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
    "2AVqDq4wEQwzf55zN1SvpagQwAWxQwS9TVxqWUteavyvjnni7P4KGQYNVDFg5NRwCWix6mCE836ZWmWxuoKVBPJj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5YYM6m3mHdDNKg1vmvUmHihezkEyCxbtzYJeLmfJNDog1t9nshpje2hX5twD3ttjHjqTZfeBawf8oL8tsJ5a5w83",
  "key1": "3A8XxnVNEtjS9fH7DqEdyqsLZzSiHLCBoVLgVKbr4uVA6Hb96ea6HGcqtj3mAkSY6JvTp9Zso43b3bavdRCT1PUT",
  "key2": "2cDX2t68AEqF2J1bSUvyLRTc1wShMi9se4bZf2y84N5fzGvfo4mnuPT38cKHC3cbw3wLwY3CDydiUw4oFNYCWcKP",
  "key3": "MkZAM7ZrThqH9fnMJanyCw6errZxvURFtqaaG2EPWUi6icRY9xD1EETQgZRDBN16rJA6zQaN6WBj36XMGWm9vdk",
  "key4": "KhMvnSHVH5xbPwZzkpqpgkSGERhcnMGphCDWipuACSPQsg264dtop9CKztjXYjuHkCxThaacGR8KzXUVdzD82Dg",
  "key5": "3fKXgWLfwgo4fx8sJSCMbcJgMbTCPezLuzBRK7CAzkfHEwSXmMawdWLUzvUeukNEQwyDSciqGhwfSKH8ot8co31Z",
  "key6": "5V3djHLSQsqs734RpyYueQuwmNre19g6MWdv2iu84qVKgMXtpLC5Wy6trYUMYBR88Tcb2TmyedqnU3Gqfzo13Wkt",
  "key7": "2L4nP7D9oKN5Y5QearzMSWYSW8ZW937sPHofcadbLooi8yj7J3h3Qj9omzfqj8UdV5z7eT9ibFLQCbkDZyVPboUt",
  "key8": "3zfyYPcZow4Ce6ctru557aEDr8V4Fo2DecEZoTkMJ6kD34awtan8fjkyZ8LhQiMPKbu36ByALrNxAzy4WqGiqrev",
  "key9": "5B95YpHxYsNFeXawiRGXwAZ8JCercq9YJvyRaLuGWNVh7x4BXBSNLvCYzeZQHAeYVwMjiaBQeuAjh7oZDG5G1rDf",
  "key10": "3QhjpiMWmYsGq5rFU9KRgLexNnTbauT3d874zgjvf9h6wLAnvd3jnEVfdJ9Vie7rqpoVk7ArgGxiaaN1YuonF7L9",
  "key11": "2Ptq1PwLqFaumzR2FivhURkiUiG8nxxRhjDAXj9L7QGjZ4Rqj8ktuTEXn616zEC6RGY4gRNtuC9B4ckc1KkzBvPC",
  "key12": "thciT41WDKZgrWe6W4P2ubQovQiANUCRcbGeqs81xWXWVS7h61BwnmDtoMEmK6fM7aYWkPLU9cBE84sUecbJwTe",
  "key13": "44karbuneah7SkeFHF7WaSZwFHEmiyNakykWVu3moEEL7KuPP7dXDc7YcsJRZwhM1Q5eMu1AnnZSbjfZizpe47Hm",
  "key14": "5Re43zcDcDnaRRZXvzi3WHtG6eosueu49JGPqgYAyzi4PrwwyFxXw9FvkuFPvorN4kx113xjCFcbdvryVW5VGz7G",
  "key15": "RAN9wDnhpGmvLxmVRwkbEpegGtkg2g8dQKsVPQ8H1CQyqUScS2aHfPH2R83gdf3gT98p1w7SMbqVpPGGpBoyvNy",
  "key16": "vttTjawMyVrAy3KzW1xYPkiBwfCxDYWb5MUJyz1VjtfJEU3Qidj3bA2GeLpFmgMBrFPmbJ8kqk6joyBftumUeCT",
  "key17": "askMGKFZvQPcT6yBq8wTXVsZdQrcMmnXStp6zQ7tqWG4MYANUgssfRpMHEhcnUMLXdjdPkQvvBantPws3cmfN7a",
  "key18": "3S3hQZVVARvjaYA8U2PgWLpzhgbCACRqFyPBYFy8egz3fRkaHBe89TPoJqZ1rD3EomiUW7Nvwy4iFrgRUhcg3bzV",
  "key19": "5bcBkSyDZjKsxszm4XtJEaukUFY5QUVSWpRr4xMzQviQbSRnquDDLeAhJswLz7xzdntw534FrKUbKYbGc3ScvQoH",
  "key20": "K2i1CpWkxzuY9EZRhv5AdAW8o8hGhe3fh6kwsqWqeFt5LmGkjJUHYxJ9PuHP6xYiFYCZ8nmBwjKtwsbqwP7BTz9",
  "key21": "2gEvAuwPFL7TYdziJejrjCGKdM5RkxZx2d5V1AL5QFCZFrRoaiY5iW7XENy1Q1YrisDLgtfW5hEg8Xx6JUKe3hRS",
  "key22": "5bFxJNqQDuAPTZmVFWbL8qtzvei32RxbBNEr9drCdrjUD4edPKbXytifrTpKks98VdfFD8LKP6j9jfQyZ7C1X2S1",
  "key23": "3LmEFeMq9iscvKqF4UV5pemcg5xi5spQ5eJVkBB1xBcPA2mjtrUbBGmaAFSoQx4hTK23xAyWGxLjev3arXhPc8gy",
  "key24": "5uR4U3NhCyEXKHjBMt8T9hJgahfLg7ec1XaxdvgQak1WbmSFnpTtGQubSumgqMqZ2qB5EvMMtmdgLuDRK4nui2xq",
  "key25": "5KMj3QNKZrdh9VhrCqWyGwykdKbAqSdXbBDEzVQ2FMNjhRZD4jyMFR7CtPTsyJoD1Sym3nXEfjDExXbvF5TWUfBz",
  "key26": "2Lk4bRUFVSTEYFwssdfLaM3FRjcmJHVQTkBht6esnenevzrgKZA85v7TwsjJU7CMUsSqv4UrLm7eHQtSEkFWmCUK",
  "key27": "62CQwsdNzQbzGCN3BCvVPdGRdDZbkKQYfPJ1ruqWSRNhpfHfkoNFVGk7apSkz5orD8bTuEGEwN4WbdaF5LKMH9TY",
  "key28": "3joMf8DPB1ixjaYXWZNiiebqXsvn6Q9aUGtyWJgvSD3vktjyPx79TXaupmJx2gexxjYoDJ6uycdVyskE88s687a",
  "key29": "445YmvozxuTP4g8TG5k5cXoYNqMoHJNAVisZqjK7Gy6eZamVRmyBMY14bbq6ipfEAR1o1ShopGoLZauj4Bqmc75U",
  "key30": "7cyitqYeh1irYi6sTTnUMJZYbfZ1EqNfLb8vwFdpd5rRu47JWnhrKh67UgpRV3rU8QqsC7ZnmMn1rT8S5LmToAE",
  "key31": "zPjaVpDKmAdLjLWVvCnCojbnqzwbsHbiXyhD4meG5wJ9tq5BpLZqAgo6nQJhLfW2iBBSE2JaUwZV3UqLW31rTQ6",
  "key32": "tr86hbu9vCqxeJB4ueUFATrgzveyLH7prFr95NWU9koVNrXQ3jmrHvXZ52wrTBtj7P5PoVgb41ywaaj5htVKEMN",
  "key33": "5wpExTgbh8T6pW7293xXNGoNdpHXcS7GqCYn8qoJxkyRn5prT7Aoups422grK6DTVijvAvYBg2iHc8uNcDLot2nh",
  "key34": "5zkHQd8Rqmytn52D1QwfdCRXosWpbJBzrBeB554BPwB4QVLS7dowpB1Xhqiy3Np4nx49y29zac42bRQP9Ch4C6qw",
  "key35": "5P97b3tjaCmh9efqXLope43gTHbsTENvszbLyShuZkhvNHrsrFKRxpaLgRW29QvmvknRMmc1m3xAH6v1MnbWL2x6",
  "key36": "2HqbeBZvf3F5s9ztGtXNMzjP8o8zjK4VKvdxcDMvmaazvH3Z4QMkRHh9TKbZ2hxZwaD2rdw1ZczBPUtJ9ouZkjmP",
  "key37": "5Ft7oA3h7Ua6WQNdrUWrYm9SGB6Miis1GkXLr7YqqYDRFzjvpcwnkapyLCmPaMQugUzaStdtKPcx9cdMvzYtrBow",
  "key38": "2mEUThkPzQGgQELkNhET5Z5Zf1ACVgki1bwwp9s9U7Be86rw15RBsoi1vkSH9mVdphF4GX5YMwNKKbFjVv7E2nNc",
  "key39": "5s7hWEXnpx2ZrsdN6yhNyFwSo9v982gs2nWmg71xR6exmf8QMcnXae8LKDKKgh6AmfyCHRcrSgaZugWxqnFu24W",
  "key40": "G2qTVCLNVXniESYhfinZP3ZeyqaVLojmh8Q1fMsupysiYHQrYzoPp3UND6VcVvrDeWJxBdxRF1ivXr1wQwMCt3b",
  "key41": "D397wT2EAWaf6uQt64xV4pzkaiqsJEzC1UMrq281WYRik5AyjDHpgysTA77xXTyLNV4UK2scZNBfr9kXmZTcXdB"
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
