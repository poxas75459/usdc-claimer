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
    "58ouNqXVqEfLTVcvTT36Ex9pj2a2cptwCCfeKsMHGVYAA2oW3ob5KhHaWp9bosUkP6jKD3cwy7MYYUfwzQqgNToF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "niHr9WqiQG51Vu2xcxZCihKoz6G25HBV4cyVzkc32VVZkZknYdLe7SMWvfR2sRCVkXXcUFPQnt5F2xSiZbBMMiG",
  "key1": "4xgFUKtDttiEfkV3BgksBaMG77yupjX9fj6hroq9SKAcVySDJNZXw2aeMqhv2yNULwKax1YP3Hr6v2jAnzTPn1cu",
  "key2": "uoXCEvCCo1shYW6mNNF2EubsTdt3xzHuPpP9LfSVR213cUoqRCkjskjp5Uy5jZVvGYq6d8P15mt858xh3WyF4ht",
  "key3": "5qFG3bHZCmbwdzGL1D5fQv4PuFzmsGm1fbeH8NqPH2xiVB5xSf574UYBKLptrcjqrCaYrR9yFPE4JnQ7dM4LpyFs",
  "key4": "4UMLfFbe1QrAPScPAGVcKBD8QBuYVogLSvwR61YMhtfd4j96WqrjZ6hUGY8531C6vgddbVqw97LcnCEDgpB6ZVwu",
  "key5": "5KaB8ccRtpuaVgrHWsz2DRb6aLQhfNPanfqYGyLwWcSU9uFnPJ9LBHc8KLsMNaEUts4ypUBr36MNnfM9Le8UMB4r",
  "key6": "KHBanX4ZZys9nGMNoMuPurGxM9BqDAGbDTmV4ibUXTsorV5MCDiyJS24twgnuq1Copo4DALvh3Kb4LqPJMXBJtB",
  "key7": "23XmxWhGUMVehTLj37qu9UkCQgRK6C8D3zux39zZ9PkYbavJHePYADYZCkufPCovfaL5QYjbWVmGx2YVNcEP41U1",
  "key8": "2AcEmKkZ8Y6M17sTzayHQxKEGwDpnBKe6feHy8cUG38WLc2VhX2FhU4z5gU9We5uGPYbEzw5Cw4bzuhNvfpEX68x",
  "key9": "4CDCd4AfLrgqPQy7CZJtZzVmG2JdqTfSJXe71vrL7jEjLfiN8xNywPzGUZFXeV1S3uC5GTJ5Fg5rX3fqFvyUBJ1F",
  "key10": "56Dceovy9W33nnnGLd1pavDDPbpdkaeuVmYWib2P5agDoYjuajkYFvUvZPy8v77sHugLDJS8eFkuoNSANRkZekNX",
  "key11": "4dKumaD57JBQrVbRBbp6aDRP8XtBq3TQThZiNewFkA2gTUbQKswVBN67yZ787bqwKGbEg7Cnb5RooW7UjtCwVvUe",
  "key12": "2uu6YCks7waR7KDWijWApEnd5Zi4sc5A7iWYu1J895sQ1Y3WmGCX5gLstu3JiBn3ybV6VFeP1kCYN8zdNwdFB8t1",
  "key13": "644cKCUYToWAD5ucfJSJ3qi6na7iKySeuK1Sq99EZgKzZT8bLY96vDThcLdVF9hCEHmVTVBeKqDBYL2mn3VpabHE",
  "key14": "4cB5kAXAvxsJw5p6Tgo14viPMi3NfFqY1tQEDxM6YabqFnwrn6x1DcphwZYvTnyQMMPUP3U2bXcjTyKbRf66ysjy",
  "key15": "5uoVXWhF1qFXqWWP2g4p7V3r7a3cuWYd2rGbMmLxQaFHrHecmEGyKwZEUZb1a4oceP3ujCSEAmrxQJUGGwR5XubT",
  "key16": "38GHHCjMNjuWD6yfo8FYzibrUj6sBBp97bqePY2c314yDm5sqThurtUULHXRW7hogEvyRVFMKdEtf9zqHqSvfYZd",
  "key17": "4vyVLJF75AJN1CotAmv4m6MEi2tjz1oqYEtNFzoJLjF7e6RPxut9VjZVWpLaT3HwnvpfqHZxn8NgCtQgzjrNkzEM",
  "key18": "3Xr87e36rniatEJz2woZDfX3jtShDrvvFRU9UkVUjuCAjRFJ8GQit8pbgWpFAyU1XUpnkRj7JYNgAR1a7EtFTTeo",
  "key19": "5i4jsrscsrT2BmrmXUzKZsj1HjN6gyjKDWFZVzV93L9dEChzYWDK3VDYiz3K3eYjo3phyaLhhcFRi1NeQZiRQ5Vu",
  "key20": "5Krkr9a4e7T5zZtGgYhFN257dBhJes58ocuDaXhg9sbKhLHGa6hMrQ4dqoYq2VTk4TL9c3XatcFaqj7s81sy2Ybk",
  "key21": "62CALYErTV445tHJckQa5z2HDtbh1EmrKXMY5fqLpkFN81CyPJUPrtCC1VDZzdwUbLf14aiUudi6EdD5NQPA2foB",
  "key22": "NP6M2oKRUV8Xa3UFhX4pP9xm9Gwb9SryNdFcQVKgggFGt3Zrpt8tCYhAPWZGfwcMTQVLmSa7J1U2p4ia3SgUYAi",
  "key23": "2xdGFk9qWgwJYhbdEXDqQu8Ehh9XhfWJj12RUMsemV6debvMHn6erSy4x4Tp5kdNJ4u5DXxVUMnAzwSboWzcgHzo",
  "key24": "23aALPjp98h86PxsthXfydpWzJPfayx7Xakvp86yGTPDiHQ5x4Qxcv9TarsfvRLzCyj676h9G6EBPEFvKDQGVUGn",
  "key25": "61WLySgpGu1hk957kBBGp5CzWfJoFvbzfYNMVypqxDaE1CjmFcBYdf7Kn3mphabWZnwqRSLsUibreNejiXB2m71m",
  "key26": "3UytgRk9n1ELiYdCkmJEP1Um2i95nqekPsm3TE6Bp96uHeaG5QfJSL7rsLMphUtzwzg3XPBNZrXgwfqh3K31q6xT",
  "key27": "5V2Qjt1skTZDWKDDZobha3RZxDdtS71cdCECkHMbodnpTKqge1htVWJGAUbcExNHSYquAWizirW8Yg2GRD9U6ak",
  "key28": "5jPAh8nEesEfNDgqbEuk4oQQHqTrK8gFU1nYS1QaKS14E2bws5Lq956nfpFeaA29yQaRKi8miEiThkmgxuN28Byp",
  "key29": "3ydwtMy7EZqdk6RYrT2a5beTDYW5NxV2aZjsTCTHSQfTxmRHAPDyeumsPwQ3188u77tBU3M9A1CQhYcC6e3im1qF",
  "key30": "4Krm9iong94S8kbKvh51cqAF96CDfJ6J5H77eDEWc11tFry2yJbGEGkQCqwnsPbFzFJSV961Qk5A7KhEePrnfzT2",
  "key31": "5MsH4S4nu5zf1VH1vpijhEfJYv4FqBguSxoQWLAbTtKpn5rtGdqRax7rbjWNL8rVDKbq6AAAPt2B3TDyVjnT9dzL",
  "key32": "2U1pauRJA8fY3bp35eRqCM1ifTi8UuSUc7Kbof6uYb2gToDXC16XA9rVnLHAbQdYiiuRmA21E42xhX2V3L1Xx2Fu",
  "key33": "4VZKPCS5K7SpJwPkh7ohCzhaVAptkB9HwjDtJxr5yfnbQoG7x8BxRcF8TvKNsQwuBJLPm2nLRYSPFR2SU1X6jV4F",
  "key34": "4dyDX9yqNFmhucKpur1UNMCiGWEEccrmHpuCuhRfohqJieBA73k6ZumKHD8DeNGGZ9eariB8fej95sifANxHw6rC",
  "key35": "3X2xqnunhH3TQaa714g6ijEGJB1rjQfZrKYJ7jEC5vFnjzFePgVC7D39KgM6QPW9F3jbKTPx8SfVxrsMuc7PWqH4"
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
