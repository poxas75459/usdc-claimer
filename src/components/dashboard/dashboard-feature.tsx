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
    "3yt6PoajgFzH1Utfyv6gzJwipRAYNdSr6MUFHhe2Q9HAa86ySg4j1Up7upysrHUrdduSUUZfAGntP9x9DU2qQ6w"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "57KPKXa5MujKyjGCUutLuxmkh7r1DeG7hM82rhCixcUerxQ8PESXKJN9yUj758HLZng3xa4btYkYxS2k8XrN7JUe",
  "key1": "P3Uf46Pt4FdktQERjmdfAjkJNKwBoYAi5Mp7bK4oH2byED6ohSMHfDsVjGG5ju3ns9DSS2unjJE59mpavWAKxuZ",
  "key2": "3gzJRCKPBdx4W3RKLLa4S62zQF138zwh9uFcatLwj2T11AQhuX1aUTG9J5jJKktsSAMBPMR7tRtVywCsCxajrEUx",
  "key3": "42ZUv1JQ8oXdLoDnR5J96peFGUwrW94KvfkQ3HxL6yoreRxmUaYQCy4vUZnz6auv8ewUJgt32ScsJaGZe7YikEYT",
  "key4": "6R2kxCUmKAEXcXkzYz8KroUvcJmJ5UeWEMhN2k1fH3zCvRyZ9giqQW9aenjPrJppv4w3xWw1srisWbzAHfCad35",
  "key5": "27sWSC49v3hgAdfBr4k6M5AmyZEZfpsG7btBb7fwkPk3TgN4aRRPVA4n37m9xzmTt98FSTYUXGABjniiHofZ4j13",
  "key6": "3oLw2y3zSoXRkjewq9uATPu9FRzPLNZyn9d7XQpeceKLJJJa7J7e5ymQaLukD3Kg1rmqrCVBPa2PQEGM2cJ8rjfr",
  "key7": "4zFvYAT3sC7cudSTwti25ESVJDj1v1VS87nDvGbzUnDHysVdwP4E2TMix9M4erb3kzo9biXJrgShKrjNnPW8PYyS",
  "key8": "5WRZ4uaEE6Y8iEc8YFq1KAnLVhkmLpw38ofLzySfPoHmHuCJZqTAPZFPWVnBCJqG4o6HG9m4imV4qh1AhqJxf3mv",
  "key9": "3VHsxqtrJ2SsFkFtp3FtSwmp4XEaJKB9SR5tp4ovF6fQuxckJH5NVvuH4Ki8QeNyZ6rH7T6Ys4KpBFKpGCQdkq5H",
  "key10": "5C7bQCKAiAj2xfngqRRDGJNjjyEfmMPbPW8mLjHRk9uG9p73cYWVnm84CTKqUswQ94AeyHhcAP3egYQcKxFuvVif",
  "key11": "2FhgLx3Ny92UV9LN9rVqJyD1Pc9vnJB57Y1WQaDP3HSt9wo5LdzQrFDgAJyp9mc4fWkao9YsKsiyNseGVdEBZNVj",
  "key12": "DSBEsaZxEFe8kgMYPMrvF8Y6HC1AjRrnXBvewsv4pnqbdCMDdAVPkyBmJiWxqxdfrfSBq47518Bx8kPHDEJdWeh",
  "key13": "48XMJus7fqwdq6emfBiY9UGm8RCbHEFQZLBSX7XNPShsDrDRZGcEhHBVbcH4buxbV5tAvt9XjGTRfeo3NRKX5u8N",
  "key14": "42fCdxrsCqDCiZjSmRJr1v5XJjDNUMKHBA6UfeEGLRnRSVxUriopABEKFv3sevr2YqW3uokGVY5ncfhzx2hh7Rqy",
  "key15": "2YZovLyscQjzmX98J5rDDd12XxGAkdx8ecdeMh2heLu4YTEEAWrEmYVAKqx7kcEfUfzeVBVRBHvAN4ry8ULMpzmQ",
  "key16": "4WuSkRNVvEzzqzdTuMffLoHFPpnM9aXZUhQS2epLxbDcLEwShQCPc72NX5TR83pcCfPsqMUSL9m3JDdqwZjM4WWP",
  "key17": "Ss1qAFzjd2nXwZK5TZSPz8BckhoHFAyK3cv4F5eQC2LuLPzDRyfWk3Lh3YKKphjtnTQpWTXggkT6ecc9omoch2A",
  "key18": "4dztRFqMTtKb77F2MX7W1H4mr4EZb5VYPns7QSiJJiQYBecuZVWFVzdbhtcDooFqg6fjPWJHQpE7DXh4cFXzzGWG",
  "key19": "3vezE5GhZYqyXzcnikxbjGPAevmoLEuLv6hrMnyafEQEgWVSo9BEYJDeBY7eq4wg9Fpz5GG8oGwWp2NfmYnRyj8p",
  "key20": "4vrDTb9PFLpFzob4V2Gg5gRkTReVRQVFcqriwWS5PCyZSiGVLH7sH6Ad19QUBjpf25T9nAEXEakatfAEWPhYcoPu",
  "key21": "5BX1WNcAHD1S8hLa6E8gcddiuRKBVTnn9zSC6SJRd8YXkRFEDRHF5Wzwzj2DjWXiUmnbe8eSf7CPeqTL1LP291xs",
  "key22": "sb5GBoSMgH7utZydgaNt26JcbAMKriRZtdLKyH65fNzP4kP1G3zmoDbu9gbS145jzCTj8EiFEqhkPkw6b4cpqbG",
  "key23": "3WhHgopCst78rWp9dFeSH98VVHRWzjYygtA7oheW7ocaX35if4AGV3VqhUPfCFFRckJnZze6zjRhfKXfBdLsRHYW",
  "key24": "3b4uAPZ1TBF56fs5D6iN6UMa3DHePtXxmjyGueJi1VWgPRWAgjTyUhtqUS25De7LUUw75mBsVAvYsmuvKoVKBJv6",
  "key25": "fZkaPsQ9rzDZgEc5fBEY4czpwJAzmYUwsXkjsy8XsLfXCEHCqiGiDxMVtEB3wS25uhUpAMSAV46AjZ47Bu5RKWs",
  "key26": "3uwUP99hxkV48pEX6qbcz4EaCbMJMXQmrYffzCamfX8rPwRL8YVomfeAjGkUXw8pc2RU1eNQLVjSsxXSp1NeTX2G",
  "key27": "3zCNUY4DVZ6G4Kv985EDyFFFDMS7YyQAdkSGiK8z2t6FZbPYL9RPHoJ5VN3ZJ4ZqTFbmsCYgWrC3BPAidpGQmpsR",
  "key28": "4Wm7yNMmfTvxsTuyaZ2r2H4hmhpPHVDvdwgE9TR4tEqbUPatFsqCP3KDUwDKHvZmzAHw29KmXVN6Qc6c33yGyvNs",
  "key29": "333uqWMYLwDXVJ7ffUCBQyBkXPUo89HHqCZM8MJAPfpBhAwerYDsqxjEX1oQ1QzV24Jm6pcbk3iZFsbnHfimekLC"
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
