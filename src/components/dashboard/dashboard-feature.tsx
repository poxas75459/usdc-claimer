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
    "3bGmn69GtcmCoNtdoHFrT8rz3fKkcMTUxEfrFQLkqDWbmdzKBXJjVJbV8dFkhRVgQ9LWjqZshWQfTc7DJGABxR9Y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "iBHugAsCJ2ND6h8AD9Vg92s8af2N9FaC6NH8uYgSwCbLSk9RtkVd8LkZEXrNzXNmCQcWSjrQUgmA9HVNWaNJzcM",
  "key1": "3G1CfwzSmwLXWQrPvYN5MwW7owm5g33WhkkbE4oRn2FZJDUCmoE2LERwVnNsZqho37x5ayc86Td4crkvKbedFW7v",
  "key2": "BDy6imLxBCrefbTTTYAm9qWjaHeLtjEcJRYj3muDsjMwx4nvFmBcNzsHxe6o5SBaZWPx8jAwcfXqjS2uvUNxKoz",
  "key3": "24RfBE7f59hzAVMD3v2EtUgLtHiutgtnvsUqdtNLha6hZS9UZd2eNQwFxqWJhM69N9CsqjP5kynr25r2YTAXXoGt",
  "key4": "xaKi1oKjrCQCvDhqw9mAbrmeta2X5TcN21obCXandsWEGWWw8kQpxiQJMnivrhmyVCgq8zwQEgJGwEK9fRadfot",
  "key5": "2TrARjPj1625RFVntD7Rr9K39VsxvbirQrRgmsY9wSTqsb4XdavWEqQgcx21n6xZcxuGYHoExcQpJsqYyrVi6YqC",
  "key6": "34DoM8dT2Qf5URtiACf3wL9z1rgRSM4DGcvu42fSP62wnUbBKxhitTCX8wuFHi9hQ66WEBabrEm11R8Nr2YRFQSv",
  "key7": "4VeFqMpW3oWSMrPmfeuMX6NY2gZLghuXmfT5QUp95huJsjP57hCvPVWSKurMasifnpcBjmT2eUX2NfSsirgyVdia",
  "key8": "561zphPLiNSyQU32ETC27EZTnujkWzAjCz1FeJ9tfCVzBM9ME3of1kVpbUQLZYwKK9SreLcad8JcgsZHFRhTyzNM",
  "key9": "4FcaWfJFKf7W9QWEj5eBxKsr27YTXa3svnYZdkDwuXsXuGm9Xx7bhjfP1cEwSi69LqnCKaev6pDXYvNMBARjxbpK",
  "key10": "128fojyxjouXBLzi1M1aSvcEkiTCqPu2684yWErR8iNwxKYSWpiV6PxFQrNgv74A9pAMFG7JEFH1AiZLykQizeW8",
  "key11": "jESB4WnaBrFzugYVBZS2PVtiQariLXXUuVsKwzB8noBXgmEVUf9Qh4hX9qa7yMVZkczhfQ5HQmiZ61sfgho47xn",
  "key12": "QNxSZwYcxdqPcAgjpSt8gBxFCQVvKBHgVuBGapVzVmroKDtFfY5Td1PcaSojWtPGGKmuoj2La6ZGiniLPSjyUg4",
  "key13": "KEV4rqDfsSpmQCXCFTgW6kzNMaYPGFUGuR8jbUT1WW5oQ6uPkpfSAM8FYS22LusUc9iY7g1ysEGFWD7eF6xcSSB",
  "key14": "67oUKCPXmKHn98oLQvZAPcdTCpgrEciGBtBWMepyEp8J2EEQDSNVete5PWqiDXAZimdBvsoHdLbVP8ob6PWyKteU",
  "key15": "3CM9vPjpxcs5jeuuJVrE217Lnwg1YwqCix5FNnRqodUMGkwLYNyWQYRjbpp1WsjAkHcVr2AgG2dGrWT4rd2xpBhN",
  "key16": "3wTs6Yj7qFpnQkd3NkFT2vXvDTLnQjYDHQruqGFVeb5bNHDocYCxYTk7kxXRGSZgb9gwFzNqQYKSLGfV9NDNfU2R",
  "key17": "5p7oNcnQPN2U3LvBfHgwMeA8Tur6PBNis2T2qnzfpPnGqifmUS7kSCDJhswBWzzadYSXg4BbRBTNqBt5z41KspvE",
  "key18": "2m88xK5C9ZTMhSJMWjsYWZJHKt4Mdy5ZWMJm1gsMjzp755tLfyeyh82qnma6w2Y3JVSAebgYohHLMFd6FBiypof5",
  "key19": "3AZwdCvT6jx9WP5zJ4XRMPP9AfdGDWejAxuNJ8hXtCoCqvffCRUN8qZEGNRcoQwWD2VPG46vU68N5Asi4WkdjVFg",
  "key20": "5gsE75JyCeVMnFWuisvwZm1yuEwFzbor129LyWeNMhM4qhRVcgS1YAtoZ4EZP8e57HDQFZQYAn5cs5v7gp9vDkMT",
  "key21": "5RAsFbw8QaNjVY61fikEzNPnbjC12vZyDfEDm7PTwZotfEyS5vgTYoJiUCU5RSwBLgf8GSiPgGMxG3vkmvvWstLA",
  "key22": "2B95xNcmWzWenLKCC467UsqvYGuzxA8Fg7JoHXeFRdJ6MNXSGsgbc7R2CZfxuddwhs5T29VszMixe7duXuzMqwmM",
  "key23": "3nFwE92MrE4UwELPA15hbBL8PycG1jvSKqEPPWwkFW4onGsJwfZFUdbBP1891jXGgNCF7BqBdsMT7ReWLWxq7k8S",
  "key24": "zKXeNLoZunGxNe9VtrtCBKu47TunGvjYaiAXcWM9AbQKnJZyq9q84NDkXvKQDHoNquVaWPB3s6PDhEKjY8aceCj",
  "key25": "2SEeFZALbKHgL6cogXCGqrgrwR7oRsPnysWer3BUkoUF9SMH2PxYaqFugc7hV73VNWySh4DabPKB9m54YC22YVKS"
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
