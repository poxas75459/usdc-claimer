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
    "4ASACh7AbCPzULfSFtXGgUiox1SzSTdDED6xdmE6BoC5g2nS7nBSpsHDAJRcmuRfV45Ur71MjeNMDPzzqa8zNHKn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5HeZdx45eDX8u2vEW6UZgBwq1bnhLMKK7ssyPeQRJBdPkp73uPRgmCCAyLBGGQJ5ZaoNgxjrmWm44d8yrzrEDndh",
  "key1": "2yMEQJrNax4e3ThBE1pSkgubp1C49kdDGQg4F1GcgcK8e6wJWnjxgECJwTnsan7tQsv2QXDYckDhG47SREkb4zDi",
  "key2": "2Qm2bzbBFBXpf5VZac2abtJ2LnvKvzugETwvgmvRkxy5rrnhqDfaybrJHV4MyQ7ih4m73ZUourfNhzTQNU639o51",
  "key3": "dAsYrnJKuL6nqDeGPAvqnhhyRoDbWknt1Aso9bz4Z7qNpYXD53F6H17tJ7vYoPtFCan4wzyTC3todhJuYVxnLpK",
  "key4": "664z1MHTvgomps26edYmtaxsK4ayEJXUrZupENJCPRwiFSU6pdsi7X6G5GAAXpAdYnTZZK5CpiTaVx5knLmzYP6z",
  "key5": "3fgBuwwEDp78r1c4QDgAx5wchYUwWq6AzghGHhPmQE5BL5mGEKzwd83AojTZqYQKJJBpitvVyaV9PES9BYNUqAMc",
  "key6": "EP12PJjRq7N9bichvt1USLWobUK9LfExB4cZKfVPgHqCvedyaqrQexs9UEm1oKy3Em5EpNyRKxvgPQdgmDQncvK",
  "key7": "3Kch28N8um6KtV5RA74LAf3pgMqd1u1fo9bkEwrncdkAxULvvY9Ejyz5LgacndxuWLqf9QZRU6gJuv7YvptSjSm4",
  "key8": "2e45syo6bAM5PCAByaSZZnbymYcnhaWuryDu5HsDWd7SaFKjFcdiS78kMh2Lv6nyDyAHgVmTEs8D3QRF5gz4TmHh",
  "key9": "3EC1n1GFaCGgRje89RiJGBiWZRK8ALwqSoH5ggZ2oCxADj247R3KfBFXfTy67KWqzagn7gUhhkNQoMB6VZuwVHVD",
  "key10": "2ZGNQvrU6N9j12DcZSgVNjmQgrxZ5YAgs9HZKM5ibzRGVpu1dLvn2AvRnVsc2czb9QTk4wRpjgU6hb57VV7pK4JZ",
  "key11": "5i7XyBwacnsvuvYYgZKxKokwnmMoGT4PN9A2SdhSgRY8QWhSnowsmjw12ciYjk6j2c89dRTDNYywcYeethxGNY4x",
  "key12": "37XXMwiPfvERsbb7218ycMmjmtrjUSA4vgAeyt3CQEeYPPQGg6Hvh3AqC7QyibqYgscGEfHHhmP9378az2UVdmUD",
  "key13": "2D71myZQFCQfQtXhtjrheexB23q3DvcS3PnEQaVaUNxJSALqZss5ybgnmitBpec6Rojm2JyQDXkX51qda5BHSKDH",
  "key14": "5wXBU453p33TH9qhRLRT9s88dtQhJz8V65QzEMUpcRUcSwmc6sVXuRWM48nMvW6yBwoij8qr7iDkyMZHGGGrSuCV",
  "key15": "2GdHRCyojfPNdUgdD3xH8vkKUF1rPrZUXouJFPR66sWRdNLqTKDSMK5yYbAF8GkULT7KEoxw8fjuUFpzcAX9sgWa",
  "key16": "25PzkLBARkBnmTFUVgzoibC1MBtuTUEEfDeSMENPocm2fTL1tQCuKQcvoTckf6G8MaKFQAhYFh3w95ZemmJgEibV",
  "key17": "3ZEW9MPamUahdCby4xhWsgkTYq2CVnt2KPMuu7g5vUChc9G6UZ3itK3q3UR79DESi52DKMqiFLHxzVVzs2j97FqX",
  "key18": "4dKjfCk8Fd1NWEVrGm3Ky2nZuiT3TvNWpShTn8iTsCxTcXcPyfig94L8T3dtQ1qwVc7Em8bdycjaQ9kjNRK63Vwp",
  "key19": "2sVMNhp8TXvDSToLS961rXr2Lfi74U6bijb5tRQbWp71Ycor391AmHdyc4ATfVw4MG77cBrKcZnF3N39Jwf36v1L",
  "key20": "25EdtAfXiSBDci2EVFHgUpkynYD1REKomw3gLxaeW3DjSpoEAvAXY5zi3EDUSYhfGrZZrS28wUyKzDcq7odVuBbT",
  "key21": "Beu84M7Bx5FuUgMp6Kka4spqbp1DgeitbV1XDTVpCBt21EfRpPqL2q9ZoRysgDnB3TjxrwacB3c4TdNVoLuajjp",
  "key22": "gNyeJJ56SCXnyzzcf18Kk5tU4a59RKTvMJ7qXdYV6NjjuuErDGWXCcaV2kWB67ZPAcQw2msKQ73n5YhRxKhXpfs",
  "key23": "3ScvjDa8jMJ7Teqs2tADtxv6ECAHeE4WXLZh7ibvy6tNDnpXiKPDrJuT9cCiJBKVZMKFSjSL9axzGmKVt1fTf2sK",
  "key24": "fi1bxx4VGX6uXhbBGnBtuCh1mMcNvsKeHGAEqxMKoBnfjiLojgLYAAoi9YByc3PP6he1ydKvcjaC1y9rkGtjJiJ",
  "key25": "M3PcE94Wrp2bxHaecWoKceLBT9BQb8NsJ4nsyEGFxWmsz8gndpjeNkbSbAd2DX2uvZcTF5MW8cdN45PkRWwg2iX",
  "key26": "2etWLLmHFUhdUmArA6uCmtGPmrT5v2L788NKm3NwFXnFsnLLXUkQ2jZhKWUgWMQQJnJB4GRPBDJE5HaAodQzL8ni",
  "key27": "27CV6aJh1XByq8DWW6k7hhiNXSpPDTNbGaiUWSFxUzsbgV7QZ3a24S6f28AnWp758N1FdLQ6ZzhWfu1vVs5qAcSj"
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
