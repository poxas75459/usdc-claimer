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
    "2GeuUxyU4iXFdvXxpi8rmL3mou1CuW1M76UqG2XCpAQ3TPRhrx2JXPKRUenjTGgYLjJypxhPN9PYQXQWTrhw2uin"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4u1zs5XHN2Sdqa89F44Yhwjfb2EwUhQEMospunmz68DAeiKrRjXqtTeRWpxri3WpA9g6j6KVXZQCrba2WtV28EHH",
  "key1": "2jB5K9kPWNkzq9eHSTGqQbye7z35QJxwq6BNXUggmNZNEjFZyjcFuHJrtvHjCvYH1KAE9MefYt826BdmSE5LpWBv",
  "key2": "2Sxrogchx4DYuZHzUD1sDfrGSY1Jg5hRBvf9p8SD9HRvftGb9UqPBPqNHdKtJhi4UsrfzJkEmEFaKkxJyjzJGKPS",
  "key3": "5RhDQRcN5HFLTiMjcDpoi6djQay3qRvQ3qnL1Lx675gKmN6jG3df4cLTn44CbC3QYqasHfz299wvTLidRPqQLsXX",
  "key4": "4DUvFD7W7s9eQVYfgMRJNf1K6Swb6xtCXvJi9oPEfHMgqqmjJEbpBbuvFC6ZeFE2rw38JkN7u6cwqHT4emYN3QiA",
  "key5": "5wCH5ddBhV4aCGth37fwNsaRkLbjdSWM8CrGwnsdLo9xyvrABX64X97WDp3wRaFxw7PhXw3sv8qnJey8rsLsLii6",
  "key6": "2SibkVFVz5XyFzffAzL788TnSNAuVPa5mesZREbAY9xH7Wxn6ncZwVuMrxrSp3WbdPAKKLbkWWo7ubyVgMGcemB7",
  "key7": "3b8xBkAe328782nvMy2Z4uQXPBEJ2KccWzMmqcMzTRTF5Eq1hi59PfDHANgk5Y1PikzEdDKmmvXM1XLF9X5Yfwym",
  "key8": "63LiqABvurRnkhHA77Ypj9kLxwbjwRU7ieMjGkLLoc2YGEooaEML7t5WJ8NhcTyMhhfttm8UDbWwnUheVSAXM5ak",
  "key9": "2xM8LNSAncC2ce5hDMDuAnPAG2BR4kTvYcjNHtRcqTmmnufiFS6nBZXADzDePH5sfzfcf4imwK4tpV4Q7yc98pQ2",
  "key10": "5TVUMW6zXreEBQ1RcX522dPNSp8Nb6mDXzSwFWVBezt6qwa7KjwAyUHPbsUH9owvaTwtLhC6sWT2W7qhcahJF1oQ",
  "key11": "62BicLN9zxHTzGKEbDtrNrpMFhgdMkw8Ap6CbmCSNWKWPX5FLaY4fP5sPZ2CPV7k1osAogq5u6TmmZaEYckuqh3S",
  "key12": "2rxdYzfJgjCviuwqPUfGEJJVCc1aGSNXYbUbMoJ1wKbjpgxorknmH5FTyb1f6N7xWSbdXqfGSAyBASfUpYTvu4dK",
  "key13": "3m86QPyvB6e1f4jpYzRji2SxMThbcDRfHYMtzpKfKBbpjeWSwwkBxYHXc83uHZLrFcCtGzNcPj2zMALbDcLSJp2v",
  "key14": "3LVrUhVWtGbqvfFQxbdSm2C7CK4KR763dzPgzEBvG6hnRs8kxYzm3bpHwv9JfsXD7DnZgnjF49WENgoSuEzHsCmW",
  "key15": "63vB15ivCeMiVWYkAS6cy9wG67bBx2VHJEWPfM1dkkeUt5fVSzUEggsfHpmdAmU2ws5ystGLydquZ32bzpzVPSQE",
  "key16": "3swbg7xdzC9kby2CV7Rk3F6LkPSA9HL5G8TcYmYeXbiUinHeEJHtT57vwJ7ioMwWXNLWn2kq623QC5BtaaAAs6o8",
  "key17": "2sQsX8Yc6Rpn96kJ5331on1xGiCsVii4JHWXEU1zNpQTBPeQPPkDrcTFJ3xpD58yr1MnMefs8uNsddQaACUjZDw",
  "key18": "4VVbJ5GEeAmgZUjihC845VcPL5hEzwJofx1sRFj1RmF8x2fMs9DfVsix3xCguE2615t7ZoYf3CMYq36Gyw9xS3vq",
  "key19": "KGhCvYVkdtbkjyVdaP5vpW8X5Lbxv7GgpxEJVD6W81Ziz8BgzU34VaHC4xvps4D6nAL6nijRrKNhKyNpQFoBjiB",
  "key20": "47vip9Ry67DzVeUCzA2wHN49HTfXdEKVv8DwEeB9FUWVLNkGpMAXmTARC4s9eidcUhdRqRwvtKrx1AjiPQbQJx8x",
  "key21": "4yM2zzgcq2HLb8716jUMNjGhH4uqKAeN52BPQbP6GNm4L2SyyJubzMZpLE6CPaLxFNvXsjQEn2aUWemUjdWRMXeS",
  "key22": "41JY5SvCTMbjfh6V7WdnYwnsGrAuFNaCUEAr7yqK3ksDdve2z75RMBjE7f7QGWu22PXf3bVFw6Ka6ZmdDLTGxtCW",
  "key23": "DdpXrDytYCN7Mq4DvTiRq8e1HBXH5Jazj9Vaojtq8VvSMkoQ43w6binotLAtUn6kQj4gaLNVtiHCc3D8msDL3Zt",
  "key24": "bJpQKcTzefHeQKkrB83nXonjLafJueoKEMf1rqGTt1nvWJWsaX4Lcs6wSx7MpBxv2HZga5puFKT8gCy21hqqbir"
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
