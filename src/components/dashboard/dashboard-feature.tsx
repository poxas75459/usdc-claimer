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
    "2WVPCNPUhLgWWG2jz6ZNbRLUtjKBZcesb7tvNiAXZ5r2pqLH8gq7iMnS3RsqwhdQhTACZF63qX7eKiZTPa6LnNFd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4wSAMctkeodRs3o91MJJdWDsV8cDimfimbQLVQv34sRKihvoLPBeqwdc4Du2Fnc79N1vy3abLNJG1GaEE8qiHeYL",
  "key1": "51fKCefzjum2NkUoXwN6n7AmyUcGraqq41xQxWpEscgLiRe2YgMRZ1h1crEmq8xd7FjKv6fVPDHeaLxXz4ouGM5k",
  "key2": "4do1agVPU1dWHyejLArYb2ZKtysfdp1vgDdsWKAsb1K1voBVHpEX4U4r7d5ywTQc8uK1h4Wf5eUqDNjtXZjjhXv3",
  "key3": "2xCuevuCsqWx5CnwfYVc7dCiCX9MXHyNeeama6cAK6PANfWFMZ3CGrtRrtsaFbzm9BALBejAt19iZ5dimYBufFLg",
  "key4": "2dwRyP275e5EiGuVufBRdXmEj7sLhnQxjEkc32iqmJqyWprSbLC4o3GWmfxvycQ9ww7fvQ1pKdMcZEMC3rj6KNoT",
  "key5": "N2wuhkPULm8TycHKFHy8x96mEHZ6fyCuguqUvDoALtA5LLtrRTWcswJ8irjZrZmGoT6ppvrT6BYEzLbzVTcKo2v",
  "key6": "vsWQGMEK7LkvhwSxA5zoNWgTDyYiVrghUDyEcKicTAPgiXkGM62o4zcKrcJ7yDyw9CEKGnp2wDJSq3Ni3gGmj37",
  "key7": "4vsDYMVXNT9QccnCvuPPD5CsnjEqnc5P6XvmHL3CSXdPLKxxUXf5RfQmVnkoSxycsM2GjTjaUPyeWaRh6TwcotrH",
  "key8": "5Kks6XwYe3ZJ4nFs97vWL9bLqcsgV5EszxpzQG9RfUeFcT99vkwRe2yQHD74AHpVYQzXFu3bKCvVHRDh3heQXRY8",
  "key9": "57ViUnqYXe89u2EbraYnaLk71XhtQvH7b1ytCaLyZMC1gC7kDQELbjaUKqfq3F1npP7xj9bSXU3Br6pRR2opLAEZ",
  "key10": "5mbFoxpVVo7Jfmaq94Un2oTpr5Sog6mizasfBaPNHweQaqmBR2C9p1chvXchucDuGVEMgTXzQPF4b2uyWHakLvmi",
  "key11": "3PMye3hTRJv8q4c9TSNcgh2y16SmbVkimziQH2ZFXZ6jVEpARn37r16yXFwFGPaVKYmnAxB7cR4MzRWpg4oruuBZ",
  "key12": "3vwMHDuVoP883cYBk1rkpU3X8RT2gS9uf9vZcbm6bRuVmwipaSNXq4SvLLFchCBz7dTCEpzF45XJFYa63FcTnAcY",
  "key13": "27RM9PfYVR9cmDJZwyQMuDiSnZRcK4aQj7jvhH4mbuRQsZmSnjFhyuc3VMHHxa7BS3uQ8un7WygKUua7tASDa7AD",
  "key14": "488kCCRtFEef4WXMu6MNNGBH6EnwZ441UrT2oAntdMvmzHMZtBWaeWahu8fa4vcmvnwGW3FNx87wMPpcX54yvJ75",
  "key15": "3nUGs8mGiubCqw7RNFUkUTYPYYJQcQrnZZGg4oobubeSFhxX6B7y9BPeY5gmPsXDmo3WwnKsvPvzDrC7iWAH969B",
  "key16": "5RZHFtkuj1gAvPiPaHAdvi4Lt1GtztMGHvCkLyfKUGyd89LfTaMHnAWcc5Ws8gF9TxXs16eKtQQCA3QYMmCPc5RF",
  "key17": "4DffRmPYMZKMLfpquDwqxvSME9GNCWkBYMdR2CoRYbGxsJWn1VhZn2YGJyzbABMiaqeECzLh9qQVKRGQguGTkumq",
  "key18": "26JACgKQFScuLXqEuWSY2yUPNEaSqUC3SWs191EcXbENzdTrZmBqsjRCCjwoAk6sVRFdircnAVB7JBbQSndSsBtt",
  "key19": "5xY4NmcCD16KAFkKj6iobQzc7urBa1XsNVxKH24135N9yiPEPqycq9Gdj59ifwzwgVnMuqJWKqGKqtvcrZ3eQ9kK",
  "key20": "5CKqwuo4LyDzW4dTKAgLmJzjww3r63krd4dswNLBg49NJyN2y5JX9cc9661Kg91NKnZP6DesA9S1kX4qmVze1UdQ",
  "key21": "RBPLA9pEFEb7GuADz3dpUjfZpi7Gnpvj9SJV3bJpJXRzdABhA5zRMg57wGXtmngzQaesEYUN2yzfsH2WjnK1Q7Y",
  "key22": "uxjqp2bXupuwgaZd5UZUTG1YTpPtAKNtu6353mDXFkamhEBCgz3rtqTEfs4rwivHdc5VPpLvjfP8URcm3ReiTSq",
  "key23": "eeJFeRkNnCSc8oHujskSpfPAXky4q6kh8TSVyzqCp7xU3V5BexxKV1xfZJjRAY1omHKVccDiGnWEybM8yvHQaQ8",
  "key24": "4DuSQiVpw6zgsQLC1tNwY7DcNUB9WsCNgPDH3k2Qaob2hAawpsD2ze5c3gDStkWRuCEQLWYcDPAnZbL4Eme5KK7a",
  "key25": "fNdVqAZZ49StZru7pVAKo9aje1tKiEgMYuXQ4kXjbaiXS3Mur7Ko1A3i8ys9Kdi2BTfXUw3Fo2EiWdNZ8FrJS4Q",
  "key26": "5d8VscmSokn3gvrhhXbAb3xJ9hUCZSEiHLKfupPnBNUJr4CVyLkb3cxNaZPg3QEp3sp2eytkTJcmpgqsTCRcJjJ9",
  "key27": "5c2Cgkha9TFaqo4VDPPuJYbtDPCZUSYCrAJRuvoLyrYmDrRCKTsjQgxA2SMJpePGWBWUUy8697RbYsx55y3aQZXw",
  "key28": "tvPtZULLwp3B23FpKvYqvgZtNBA9x1wtRBZboFxGinKC53yF9jS3R2p3yCbEZ9ycXGpVVdjci5R9kB11ZJbJpBT",
  "key29": "66trU5taJEtA4PR5Kua2k9hCuHiXx7fdHAz9PgNHC4Cr8L4VkyNi1JH76D6CqvJ3PmiaixwHTZDg6biRURALEGiv",
  "key30": "3YbKduBLqgURyxeNSUAFyyzuzxbG6Y2HkePgyChy2W63Fqpr5KvBSEofmuzPo8Prn4YKf1aFejaWDAkaWXqS6QFN",
  "key31": "4pBD5gE43AGqLAYyHSTcGafWNPsDmUekEMN3nrnQhp5WMQrLKdb4cVdSPwYvQrzomRM7zu4byNQsVq7mCf2ZyxCD",
  "key32": "59HiSxJcwuiQ8PK9wJga97oGDuM4oT8vXTBsH6sjbqXqzrKGyokrzJVEdDFquDrJLRbsNgqTuHBXgLMFp4Rbae81",
  "key33": "5PPthn6QTqCA55dVzQc4VsnFLoPzFF4ggMb8K4Qybh6WjPBJAUXibXzgh4DbxSpzmfojgFbXUz6oQNuGzeJqmoR2",
  "key34": "gk8BDpWNz2Q3bjz2fMPYFgDxxm37WXUpbrQCKhfHVuoghMroJJGQdEWADDYPKhuvCKykKazngXkx5GpQKe2KXq8",
  "key35": "5NKkCnSSu6ERmWMT6W5fRDXrHUTw5nmwLuxUrKq4rVTszYRXtTWqHv1ZSqxrXGM9Mw9ED6SifAcPd1tdhrX9MCmg",
  "key36": "55b5HTATPrJLnFN9jPjcZ225SbeUkHqHUv4SVavavXd2f5xNfkTCUia1oJ6tYz6B55ZmzTMSWEMoRDcr4gs48M4N",
  "key37": "4MV7j76NbURrdEiXdbUBmTD1EnGobeNqiwJvqXx8eeNdWUzmb61aLaegcUX1yhisTg6Ygr5XVukoa8jra3FrwW4q"
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
