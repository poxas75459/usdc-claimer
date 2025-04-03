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
    "cXhYzc2PSLKKT8eCXAeZe4BmDYyXeW7PGUm4QBhNP6uXLjbtfiNfFsvFLUXFhdbLzvsLGNiSeooBiWdLfLbvWrV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "AchGL3Mk35p5NuDLJTVFZb9dC2xhBwAGP3dUxAwWzBwooTvgCnBc5ssj1bRck88JdBqiJs28fBxe57dQVBNF2eE",
  "key1": "D6prUKAAqneEXSDxprRMVaBfGytGzWPbCcUmJRNAcWauoAkyxmCdfZsTJUNtn556raqa3nwXhcoR9UMkDdwnz6K",
  "key2": "38RzRvv4N3TangUpQABQ5MjMv5fdiTgi387PbAttEDeArXTNUjMcRTZsgDJX5o7MttrBKG6TZWoeeYJcoYCCZYym",
  "key3": "3hdp7iNQneK2AnrtnrXpTpUtjghusb1Vv2uZDwsDypF2GTuKL5aBE4p2eDFBvovMRm4cDLXTQyKghaKRcsg2S4Gx",
  "key4": "3GNCiytgGsKUbeYD3EDa4wiqcRcfLMyd54J2eknrLb7234A1Go9wZxVePVXTYEAYA4KFPaMVqBBiqVAy1SfiqnH3",
  "key5": "61yYJRcqhBgj3Y3BPkpb9yo1nym3r7TsPPgPobiyixj3hV8GnnF6gWNsf6GHrCkm95PAkuxaBmW13d2mNGJWoG9",
  "key6": "4z4B8JnxFkVjup3Zjf3PW2RHKZVZ2tAx27h1rnw6z2VDU8SNEqmTMacWU1TXFtBgKhrDGeJ1zD15sdQpxop2K8Wv",
  "key7": "2Y8wZ7vDsknCLw7o6yz9yW8bbkdrbhVQXBAfGMgf8NSwKGPyJAp3AkayWj34LvAUH9P9FpW9aQHNNSowAShBMNKZ",
  "key8": "5zujPRnhqJ1ndeXQnjaSC9V6mzyURCt1y7iSGvX11BcTgHsoHib7t67AkepeLdmSLaHVWDdBoskdujbcE75Ai3p2",
  "key9": "5Wf45WVFiRKyNAemV9PyhBcwH2agCkVUPs2mSTMab9msnHEEmvw8ziRGoD3xTnLJVEKZnEeDWuUTe8V4N5ZoigGE",
  "key10": "FZCrcMsEzY2NdHgX1g3M5DbFo7V9gVkxvdUFqTPzei63kfxsTRZmM77ZLcYK7X88AeBrNXBRmoG48rGqrykqdEy",
  "key11": "61UEDJQv8rVsAcwQ945dhceiusrcPDg3VbaCfehg9z7MpNJV6bviVuf5oEBxUWYsPRrfptLfA7GQ6hGSYZWGxtJg",
  "key12": "5cRgVFSDbjjUfU4h1mXYbzmUDfXjKG9sEwiXeYe5Z3NnG3L7ZAAwLYxtgXPQ4hggRapifH7YwSBm5vAjSXw4X3u",
  "key13": "X44sp1kDXqfQLqWZs3zCkQqPpRCaY6uxyaL2cAGhXuAwrWjGhZVXjWujsxtNV5c2oQ7PfaWjqPpr8GuNcBZpbSu",
  "key14": "2YmKKYPbXE52nkkSYzXNU2diyRbwtQyAMoSAbWP79BgCdK5QeGoNAsrdcggB9bFiytCL8De1UGTArTS3EYBQZVMy",
  "key15": "3skc27CVxiGBetRQuEBiLgKV8cPGfkSeKDBnMZDJpuTfVwosY4HiXKwXsbVomojXC68SqDRKZ6YrCeDcE1SUnKFM",
  "key16": "PdknmbqT7dLrmvuMzppmysM6sVPzP7BVFtWV6XPBQ1q2diH3FF8Gw9T5eMDGBHZNPSoepPRNXoe9wMWbmrtbv5x",
  "key17": "2xzceQ1iFeVakiNsH3B4AtRDTxe6Jod8hHsZT8nPLAdVNNirfY1kQPTCiLdXuF2crjTiMNa4EdtQsPUjGzKVxuUb",
  "key18": "3A3Kk2sGp7dy6yBady1r4piAgpjkHq7nDtfrzkcKUMTrZ8hcot5peqCFAigd4F4vfsZaf55F7rvPPX2noUiCeDrS",
  "key19": "8X3gJPHuqnUHdU1sAAab4738JUajY2R6zfZp2jcJnRXj3erJiP5pXv7c5JWF5m2TXcHziBcn6QuqdwZVyjsZjJZ",
  "key20": "2X1vj5RE28taW5sSXQqiAPUgdLpVW5eH3F3EziPV7n8eG8Qm2ZuF6Vf8F6HfzKngsSSsbtNxcStdgSbaAPRTeGxW",
  "key21": "54vyHgo1ekhDUo2qiRYs3qpFmdPM3HnNturonNSX9FLoiAnH1kcvrx4M9ywkS3qLEX63RVCEN6UEfG2MnnpHNRFy",
  "key22": "43ihwtxRZKhNiXkgJpssbQmFMjQ5xbtL7xAUpU1XhzCWxMkBXMS688gifqiYmGcFai9GAQtdXFEhDWbPNioPDMKq",
  "key23": "gMiQWD7VirvxorSZQHjojCKMNTLw9so3vjAG5xDT2ChYM99bsdfN946sKhYtuw2Bx9kT1EdAm89f9YVjp7yhGqH",
  "key24": "56J3yD6ZVX671Jc4W8za3TZW1MUQjTkmZBPskU2dDCsfFUqUmCoYq1g9bE9qpgd8US1PKozMMrxpkeoCQtv7Duj8",
  "key25": "2LR2NgF63Uk7wbEtKSfAJAv2awp84K7sa9aS61gWTiE8orBadpFF88PjaYy8hLa5DXdGNms5EXkzgFLEk1cRndsk",
  "key26": "5B5DnGvL88V21Lt9ZmPewwYuwuw1PQ1Rf7QtM4xhFSaoYzxpXWuUCUauEYRotuqErjKeiJaoT1kdHg94i17qQEy7",
  "key27": "5QbJdHcDdZ4MXqN1p72sSrNbaTezna9xBuWQfg263mXhUQ95ctVS7zyMRFzBa5cd9c1mRJ4tanQNtxEn9anF9bvP",
  "key28": "4RaSedec6L5RcoSbcAxsg4X6viUuwAPZfBy57MEJMhMcF97LJfVEZt24EPhzM2HfXbFmwY15ARXqj4xv9S1A77iv",
  "key29": "5XWs178qt4Z9pp3QV32tqZ4Jd4mVnLJLDijQY468QMACW8WP7FiwED41mZaTbzeBe3UUGnkB2dRpiRPYCK2MdLqK"
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
