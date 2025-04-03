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
    "3n3vr1rqUCLsZCGCSy1WDush3skub6c8ucp8wGVpah4ZzLhunyhZdHzg3yQtioNdJRPkn5oHCNzSbMDhMsMGTw4X"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5gT6GhPopnoLghoktYiaf6GhWoA7ASzf1J1SUMyT3Pto5So5KU72D9Dieye7aaK9zraYbJiDvYMF7Da4V1s7vghQ",
  "key1": "25Bw5rJBpXHvqX3D7oTC58UwRsFFZgKWzbzbiAEUmS3faLKVCyS24aZnc6eBgvh3JD5jTHp8cGzVULdhuq27eUPw",
  "key2": "4k3giE7ZjjBN7Spj1NejDTXhrnoujyh9DacSWmWVDPJCnAfa5Gg1nw3ujZ1fP99Ro3jfGYKSMgV2RuCdsnGprTQP",
  "key3": "4xVTHBGtiaZV7SfmW5zs6c9uAB8P3C1Ko7S6GBpYoUxajiyQYuy7p3PbJd2rt3Qsa3A4ukJ763MjqXG8ubsEa9Gu",
  "key4": "2rk1EuzLoGpNak8V7H5Nj48B6gPc3qD88XfHusXCW4YQTufmtdhw34KSD5xQWS7YV7FBRwP3iSTEwxcG1brEPUSQ",
  "key5": "51xuhESHe6TuD1NbUZMUzU3FBx8c6GycYDbrVryZaakqCuYM8XdkqK5ivQzgRWhGzJV9iResBran1kqLqTkNQ3JC",
  "key6": "jYkikKKjKgDGPzpoWq4poL1ZbsL75yAELe4VJ9ahXpeHYbz9kvXoCP6tmYo7UL25VKfhhxcZmQ5TKVZfxvACN2a",
  "key7": "33fh7Qka3vUFeSZ7J81NHN1TPNVfWVM8BiFaR1qCQNX435zT3rTwoqjB9hMGUQvccn8HTVWsnwwq2a4Qn4w11sdA",
  "key8": "2w52YfMP4beAi4x22FMzquUcSePPzvvdQDBhxDxZWaeCzrtHNDvNeyueYxuRfTR2tG35R3exjTcbF3rjYaih8gqk",
  "key9": "21yYvB8ZMVmwWpsDYZW3vAQBmZoUw4awyuMBzXvNaZFN6XRW89rXS27QFn3CLQCbeZV5VUR6SUzwP2HE3dDPJCas",
  "key10": "66eQr64TxLSKHJPpPDMo8ZHA9MyA6kJrop2kcwqA6TW4q7FbnHkPtz9EbGZenyT9H9EFLKeRP4MLQhqSt8i4zi8h",
  "key11": "4snJ5EKSPX5PgBXULoQDAzrj951BnqDDbsRCviXixwSpSPM2ZusHLpb7q8AJnq4eMaSeis9wcM38xzFuK1HtbpGU",
  "key12": "2fGJv3DiqoT3MZCoHEvDugnTfgfEaUdRf97NAk7RShcR8CDy9PRBLHF33EaDC4shuJoJnxND75K6j24MAdxPtGv7",
  "key13": "27fCeYfbTxUPT4ygTSpVB1nWfMCUMPF7UQPj7a9NDmxhzAZs1LoSewvavhU9NmDFBh1AvMhA3aSKSYAfw3EnDGFR",
  "key14": "4EiaJ21DYjNzDb7yPdhTXrMTU9qp7CF3CMNGXj5PBhv5Y1fmtXPZGdmY9T2UsBHQbspvPK6pTGjDS3kgbg8mUF3T",
  "key15": "52YzveRMzC22sgjkrMUGgvMiYRaE3AoAiLonwBzNhdXSiP11xFW1WH8oZSknee34sVnfxyDceJX9PDXHR9ETocfB",
  "key16": "5bYiT864WTUBdMmfB11FXuRUae7mXTNSxHPwQk1sfeNB1JwNkSdyqKiwWqVh19P5y4UYxPhwohSzauyDcTZN5URw",
  "key17": "4JTknFvnvPnPtrwkLsxuAQv6P9wzPrKbHaEAUMaMHUGyQmcYFGhouACe76Js5LozQaKFFVpJooLAkG5zQMVQPEk6",
  "key18": "5k4jX5vYeZM1oJDzoJttiaPyBLTqEgwepNdwfVUtYZk3bU9BU6qm7vXPiz35Y66F7ixzJpNUuvy7b5Y2FRjYteh5",
  "key19": "4njLdt3WHTc1APYXpySxPNhEUhUVDMakhURLjyNyE16mr3wsn32pVG9hJorPhgNfQKHbufQhaReKvEi8CmXzYBZ7",
  "key20": "38DenxezvxZxuodWZvmrgUc9feud8Y5rWEJvyC2CiW8msgMzpTuvwoTzMhA9We9XmC5e6isKeBjQLFFcpKcaLzsQ",
  "key21": "5XTb2eX7hbyCdCGUFVqPjtxzghSWeCRAS6EkJsqD54h8WEmRkppTdtdFCpL8GdEGeYraKs8kgBEygG35SevxMGgP",
  "key22": "3HvunW88UmrhrbUoqyHuV5gmw6xnVmEgknfT51NkmFm6MYEQRR7wB5TLoZVTzTu6fzJfghWsVHFn1xxhL22qUTJc",
  "key23": "NziVmV78mbZ6S9e9crG62RaYhcwVbeUEKNuYXiKUYoMAJqxjYHYg7bAZysSMJia6wRVTQatvKHXYCo3jCHxceWb",
  "key24": "5BSP8UnZeXpc6Udb1JdYphcGnsGQSRNBByZhWhvY9kWvgGmucYiZSePz5tvpHZMJP33WPehq91DXUDGkRbPFLrgz",
  "key25": "23NsY8S9cgBDgUZMoJHocsY3uaPWueyzqMTt8uqYA1avDxG5uMuQ6GXJepADzqaHvg66UYwZ5Sk959cs73Bv8dpw",
  "key26": "2R4nB4DjSVhGMMe5gpYRqPUdHy5UZTDAxcNeB7zxB9FTq82mc8bSGYb6ztZXemcm81GHfzXJ5gsjYFd7jFsFR9cH"
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
