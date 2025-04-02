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
    "5rmY5aB5cUkRcoVeyTVTfyPKVWnexMTzE3u8ed1Kx5df1KiNbdKhjHGb5KgsbHJyjJ4eiPo9P9VT7s2tLhyXwNmq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4pzjf453a8ZCSe4x4Wsu35CVsVSqeLaSuzAhWJVKqy82x5o3saSVPuMspkk5HWge9P9oUEx7oaKH9V4xEgrV32J1",
  "key1": "2Wr64LRTa2JAT2fcYY853JXmpJsV8DnMZWW6X9f4Ze576hxRWT7zRd39J1qkCJoXwN68yygFbauSpw3stcEuGoFR",
  "key2": "5A5Eu7ceDJeXgWJKt8Jpy1S8DLuNFeApS5XURzm2mgfRdoP6zq15jsz2GPQF79YdMFtvuYu1woYDLKeBgbWfR39v",
  "key3": "29UhHgdxvj9Y55xXzmRViYFBkiGny8VV2HxtohsdEJ7Rbjm9wJwYCCNJQrNopjKUnxSKE6xtohHH78psJZYaghyX",
  "key4": "2XbL4JzdwhNcF4PAxy6zvaAh5kSGookEYmPEEL4edjWG5Rh7dwVRUYdETiuL4vKgF4GMvFmVWX3qd52cBj94wavx",
  "key5": "Rm2fWktgWaNAwDi2de9rhRg1SXigSCSCWPF2ac5TBuLhqTPyjouaZtPH8cuj4jr7g2nr6z549CkfR3zdpq3oHZW",
  "key6": "5GcUcMntXbvvgZTE5R7hYaNtajbx63F4vUrWSkNMwZ3oYyFF7oDp1Pf9Ka1sJDQj5Qgs1eg9rvZdnTkWZz2LXhGw",
  "key7": "5KB9CcvoWAWuRxu5T6PgSAH9j8B3ZV5URoEi1m3zEaGTFFSeEe4ET5QRGozGnJiNxXPmUzzXnaoLwrLHXbnNkj4Q",
  "key8": "5y2Q615A2TPfwt6vWnkgMV72Fg1RYXEZFELmY2jRedrVim6R2MXwes5o71iC1yjoFRZZ1dv4CmcCYPYz4haySP98",
  "key9": "5JLsM6aVqF4v8VrdEmYuWbPeRw2hPMj4vJ2rR4vBtpK4ZzPH28L54RoSertKmuhPibatGFYieKJYFzZh5JtHJ2hh",
  "key10": "3sRceu7B4yCRAt9dPjq6FT8GCnT5dGF76NgMV95xKKLVM2zhx1EpvLm2SytHfkRUMhbs998x7h7QUaJ4M6p7CZ6p",
  "key11": "CDX4BK4KT9PCymJ3PuhRboMUb5Ax2NoeoxJWLXtov4BrzZgzM2c2p83E3XN22w7G6kSZMDX1bCVm6Fw6SZa7jpZ",
  "key12": "5oaGm69vr74FmMgZ2SBiH4Xq38M8P4VMyf2DbrNzVJSFdSfENL2FJRj3WZuqtm2nSUysembF4zFf54yw5zp3w2pk",
  "key13": "yQFcxKDHXteM7Pbf52RvnCkpypgQQtcP2h2G87ydHqQsnMigpQzi8npBAbygqWxoJnVuxJpkzo2Qcck9Wz1BGVi",
  "key14": "4VYca26ZGYqwQkc5TirFvyg8NAweudMrkXCpVnq2Lbm2U82fGWvK8oG8ERW4C7h1abn6iDUHB1QxtoNuEqGtPvJH",
  "key15": "3qqYZCmpmiEhnnQPa7vbKAQ7tuR3kYtkXh3rSrpBcpbwzwfeDbdrgzTRSneyfSydkfwwDTJg4Ukz2GmwrKAUGBiA",
  "key16": "3eEsbPsRKSVYJgyiFseKjbPcDMKwDwzVdbB7AiENekXDnhn6nD7B55piCo72Tk5RYedJyz3qEX2pfms1iFqycpE7",
  "key17": "58ANyX6wr4TNjsKGRQ4yNU7vNraUR9EUHxv4wHfyVDSQbv9t9WZJ5HdujEpB6WTWvbLcBefnUnsHLtcG7QYtMg7i",
  "key18": "5xxMqCWbfL8gkeRLk2RQMzU1nKye9RKLRXzcQWcZhWeN8jjW4SojEKDiTWE32793Q8a7ku7DrBppXFTqV1oSP665",
  "key19": "2uq8QXCL46EDvNwg7rhaJYvz8Snh2oC8dxoGcGTgkSo5X5NP9jXKPycDUj1ynuuwk349iHJgwrnjhqPQ7fcrsr5w",
  "key20": "29FmyVpBHEmQJvKzGQLQYzzuzzjsfpstb4GCLx15cTYdSPTwppmQrVApy4qbJJtKc3giEEDPLanDzZAV6rddN62A",
  "key21": "34qMD63LS1XfgegeRHdLGYVmUQeDzxU43FD6uTQYYs7PyMVZk27rvgrPCJPgCmqjHPDunSUnswo4wUV2tR1a87BZ",
  "key22": "4PMqRoZJttC6WyFe359QAcxsKzmipFXnHazBjhJHAmDpyLosUKjtQhvyxG7R4ZNnhxmTuMeeGfXaTfrUUjHyhioW",
  "key23": "5GBXUW1jjern2hv6fEQJmt5UqDRwLw5Nwno78GBXoLLUK6jrYsYmGFw4XpCdyKDuDBhKfh32so2B2C5cBwTWwcmh",
  "key24": "8MoWmWQwmdkWwoeNCAAAsEn1igyb5yB5dJZjYQKX7JDKgq27ShX1p8hZcHKWrYAGBAJTTqrc4TPjfPbCHaCPJmY",
  "key25": "oXAMwxTRDSwxPofuLPE3jFwz5RUPKtpu2ph7mFoAjAMRuFtquxxqkPiywWpeyp7uunWHyvmYYK9ihkyYqbgqhgM",
  "key26": "JFJMFmkh6Mv5JKijnRmCg1r22MdLbfPJ737ibXX1noXhEkDhGQZexa4rxookigFHoK3WY8aToRqHsDecpP2Tqs8",
  "key27": "3pAeHEt7LAdbfgDY6vcJ4UscY69ZaCVYHHSmnuJYdXcJH6g1YkaNXmhk6jLkQhWLxbkeFiAKhQzNCgjFBzJS2uqa",
  "key28": "3rchC6oQLVjz68QgKnsdGKYH2KyJYzCdjyg15DFzPriNk2bPAmZ4N8JXXRfCAGjHHVcJVRfgyXDNWzQmoect5QB2",
  "key29": "4Jmb5YifDhHjVmzFu1Sos61xwyWzyXwqS8vNzCxzHPRbWwgNNWLYBYoUSe8JPegV8GvBe1paYUukdekXM6ub6N3d",
  "key30": "4AS9D19MLCYzkxZ1FTirJcXPNyE1g9729hwGUqT12e6DT2VzmNWroFQTcXFxfoRTWtyZ77qaV8t7932KeZzMJLF5"
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
