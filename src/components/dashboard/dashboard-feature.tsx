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
    "54LFs28PPUt1RC9FEycP2LGEPciVJowjFAZfppj7GaYdzgXc1vNbYzjTipj3okgiB3H7J5m8F2yZd7TyXo6eGHcs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Na2qezWFzmq4etYi5xtArrHnuNxLCPLTRjMAdo5qapYP1nEFsyG9fs9Btsjn12BShRanhuvPkiiooXvwfCtBzLK",
  "key1": "HDPcapP9MDN7upy4ZoAVAWLWxQsXQHqPu9Y5UBkiWKMhkqTkFsnntwwcZY4QSYCMyvkRtVRrVME76cFFY7W1H3A",
  "key2": "3VnRtBEv3PRmEaSBkq5KAWjUjwjVPgripDLgGnKnVnGSMCdJQiQnXcBrWSw6RfsYjRmtsANBsZQcxHNQzarpWFik",
  "key3": "2zWtgHeypsWzv7U3tG3E85PrHAoAMyFQx33ufdb6KRow6wuMRi1mqreWtLxaDbxC4a8b4QThqX17AECRVpJHXxp3",
  "key4": "js8s6yEmogScLGBgwbayBqRBfxF2Jrr6UEAdtKEZEaZMyk8UAba3G2zbG6mstVZ6sWYdsKvwifDPrXxJjP8g6pR",
  "key5": "3p5D62mdY9ayFVEJnMR4i2L4mtrc4J77qJ6usD41AosGrnvSNxG1padbmbuNGbfyzFUx58m5VdRsTkzrUJUACPte",
  "key6": "5niJJ4vwJJsBtLiUFMymqpGLWzrvJyjSQSCZiRYZGsvDas3mqqskuqXupKzWS9xo4EudzKuR5mutvzwpLuKgCUNJ",
  "key7": "331pXqtpifAa78twv9Qm92wgQD1QdXdBBhZkhajkLW3CAWzgLnPGWf44uCf5udr3qPkzi4KwW9TUr29SWRUQ9RKk",
  "key8": "2S7iy2CMQF3XNA42vN6XnatziA8y3HTJdYp3hFoYMD1KcrcMKkYpM6hkQBqzH336jpqzsr7HFGHjtGrSf9bD1SEt",
  "key9": "4GKAr7JEm2gXWkRVpYhJk7Nw3Sjt8A8p7dVH3uhGpH6bLVnowzqFzp6zeoMXyo4ZbJ2hWGkptMpmwnQi7wajqep2",
  "key10": "ceB1GQUzMHTp3wegcBqWS81rbfbM9yy9jwzDtQ3t7wasM8KCoYPiLipFfh7x3CEY9khE4zNg46Ex1EcBHiX4J2j",
  "key11": "JPHNLGJTCKvBXCfQFquXUpt4svW4ViY61WWRj7DTmVLZa1qddAxppvTLftcVM83yFrsYYgT6f8QU5f3KFFkvqwc",
  "key12": "2U8DZAiDM7S5gqBQLriUeePf2FVwSPfKAhC9w3yv8PbYjgxv55H3kQeLRZoVLM7tayowDwQp5bXpgdjQeiTDC4Bk",
  "key13": "3frCoX4XtwUTKaNSQrsjhMEccAuUMzD3tEM4oR1fkwBCyk9FkmaWb8RUtPbKNivwYpi88CMgTYVGWyLEWvhsPsgQ",
  "key14": "2v7TtbZf5rGDttAADnZtcvbyniAZzL4DLbJtJoTS6tM1tJaMj7Dgjnk1LNeh8KLMp4BVygzqUh6hT53o51z7tiLy",
  "key15": "3dpvR9io4WwZ5AbGBpwC8FZvScDQmBPMN4qPwYbNNR1MsLw12ugjM52syWZqNq9JP7aHG4ttv88PntPwVJpp83h4",
  "key16": "5fdJRyBJtLnxv1YQu1g7tRd35YFFApcuDKU6u3UeGJFoyYSZR3qxEjBrG6655Yqg3u6pLNKbK7YXkvFEb9HS7kb9",
  "key17": "3A69PqMg7SggBAhie2RZZqvjzREL1wK9L3qQn8qp5BvSXpLV3ScNBqxuSAizXvqudxr6w53kcFzZzopvqufVZWFu",
  "key18": "3JEntekh5NVrKThaz7SpMa45yih52wF359jcVdf1Y81j4R5aCPR8svJ4PGUNhBP2JLrHHy3ujh8usgyFEfEfU3jH",
  "key19": "319dNJw58i6RjzSm4ZNSLxioNog6fHndedoe3aPtDfDz4tRYvANo8L1TwDZRscvHWomdUr4FBJc3NrHKhuEfv4Bd",
  "key20": "2paxbwjcMN9hrv4TihC2mGGBvSGy6CwCvifHaFyw3SNy2DKnx1JHoN8mvP1wGkQExNS8GTDkLP8KT5ypCdM5Rd5Q",
  "key21": "78sBVddhvpCorwatuRQoSUiL6HLzZrKeXK29TZNuRBjyLQ1tvLBr7gaGwFJWTjj1j85cJU43jq1YqbLe5vE5Z7p",
  "key22": "53MkYc1VA4brrKSmpBCUmrz9KRLeRFTQzBTh33oQZ1ych5hJ5iBTofqAF78iz7vxyiZn8dUGYnYAy8awmSvdwY3Y",
  "key23": "3r2tPrrZqyq5KpBpESqCbDVj4Cpz7Qr2or19WVGAXxPoLUCo58iLWz3169UcLAHEm28VwSPGR7HkkbveF71w3i73",
  "key24": "4AnMRwVQMRqxZ4hVmeBBTyW8zsQaLxxwS4wDji2y315zk1N53UW4FYYZ9vL889jbDKr4BiWofsJSG9X13RmynHCU",
  "key25": "64y19yAWBQwwyYqVqBX6arft5SBcLXsXfzS2LdWeKL2Cdf5Q5hQGyg883rxpKVk727eHd5QSdZeYApqyjbYnKtMm",
  "key26": "2mehE3SMFtE8zPzKyu8z8mVShH4YHsVRNZ4z3Uzui4rSNui1ELXougueobLQjsE1L6usAgkpUCoG3JzAoyTdPgTM",
  "key27": "29PNbKTfXf9v9jWJKYF25ioaHgXj9L5CRxbXW4jxjEPg2qbtw7Vs5bnCjUYvZbaPhopMca7sLhkwuUzQLZeqbLzP",
  "key28": "4T2seB23RqHLEGALMZ7JeUiSVWxKEdLAobqHyQLhfdQ1RDaK9SLr5frPahf9ActV2yh8t2G2nXmnWYzknrvWhYBB",
  "key29": "2ZyGSHguSKqvqJqn2GJKbM6JxJ1PgXguMUn88i9wBrqM2nsNQjAPyveeZ11KWLHTAK42JczvMY5FTA3ZK6HHzTTM",
  "key30": "48yKDGEYLHfcrZQBDeosCWEVT1tJXxUsXexgrtKdTKqBCXusoc6CAYhhjGohQVsbgXhmHZ6KobkJinTL1RiSWsQR",
  "key31": "4qB4DmLv5g23p3SNWgYzxgJXn4MebokkCoqcKLdsNrgogVLEp2aL8MSA9K1SBiwvrCAMCQ443ibsf3GBqqDivqyu",
  "key32": "Hc2dFA3tKuUdkQA8H87BvbnfsHCKV3F8wurpQAQ59MkKnP5kN9i6yf7aP257jCVHvdSEyBVwDm1Mp4Tn5Mg66es",
  "key33": "35jnKqdaTCfAk835VDqVKtE1boTDndC8iWWxGRpZv2PpdDCQ65oxpBxmsir1a9XQSrCYVXeQYNemDUwgPTFrjD5e",
  "key34": "25L7maRby2fiHL5EpnorAUR1tsb5ygn4iS98kWdjNLiqqJh8oFqX3zX4LN48zjUCN5GwcnyHPpVTCa18AMKFaxNM",
  "key35": "41GqGXsphkL7sD54q6atTXXJ2dAuXu3ws8cVEsUFpnhBo7shQo6Aun7xc1FQQKqg7CuA5qjo75bg92PaZX3K7BjJ",
  "key36": "5rjDzXdhPqo39Hnp8rWE3D6NQ3TVA5t5A7KJ39bMzMUuPff335EHf86cdyVMJxybBJtcftYrArgfPXxDJtezfTEC",
  "key37": "2yuqRMcdbfG7QHRn1WtH5QxkbwvNqDR7kFZUerCQwqFeHBEqfJuUVkVJbv4UwzEs1CA198QZ6TemtHECnJdQmK4"
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
