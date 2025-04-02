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
    "4n4ZkE9AzfJoQ2uUs2bJuqmWHdUHYCMMJkGiedNRtTFJPyqeGy7asDndFrdTkwPMi4wWZQhb6W58qbNsVLBpWsgx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "66WgwNGin8HNrXLwCx38NmqjsaQzCkXUXd97Mt18AH1xB2RMJdtdMtVDgv7WQgPv6V5CfK6TGsj4aeV3J6RSMDfe",
  "key1": "4PCdHRHWCS8iaRB6XfWRc5oS7jwq7mMS3UGLnd7NGzbfAjaZMpiAVeaKtr5AKDVttTSrzSJKwXZAd6pyZG6pGCDn",
  "key2": "44FLXn9w8R1tFED88UrVo23NEbLZrqnTrSXPsLymMMTmmVCVD8iKykLQPkELbPNqVosp42tGgyhXMjwtDtS1ws28",
  "key3": "THUMSNzxYANWkTxzxcVo3DJS8RYRLshwRntu8yzUNGGE7rDkcRfYxismt9tgabUhr7CN1eEJHNpjmaxNib36bBb",
  "key4": "GpQk61UxeMaajYT9GrtK77DazAJxKEHujFobateGDEk5cySjZcj4qZ9Q4rauzTf15Y748DFeE2rESDiBV5GEaHV",
  "key5": "49n65RPDS7o8yNsqv9rXv47DvARsY9XtZGDratmi3SqGN3tdhvxBpeLbQNzHa5mtvkT7qAHcHJCeEV25hhAv7ksB",
  "key6": "4V2umEpDoFciq329djhot5jEjerEzoo6UknGQRLZZftYDa4ZMriXxBQ4aFFALA9WrijNV6hMLocxCMEQkyJrGQsk",
  "key7": "2REohMobzCNDxEytTy6FqrgC4GLi4XRqJZ9jb2B3UH4M2z1kxTjtQ5AtpDCeAft9dLo2MnLHXoyumvX5heKRDWPQ",
  "key8": "35CtBW1vjF7CRfeXZanXCesWFEBMAKiBkESpUQ1tNkuMeofifWvQKaKgogAjUiySP2TE1G2Cu1EuVBVtAVo8FZXy",
  "key9": "3XDun57Y9PjzCAbvCgFJHm2uN8uaqNXxacLnnJxwzFbdrMoZtjqwDUXLjKHrbnvwyJxiMdZhW3KW7fYguJc2dxPF",
  "key10": "5MsDrb5cdFcuUvS6ECQ4eWmTVAf1Z8ebeWD6tB7SDWp8fRWQyVunyawnydahQkLwraxiGh5QBXvx9c7Hnu82zRjc",
  "key11": "5f9XcFrrKMvNityoEdLJdsRVADVwxtHzGfEGxnqzLjrNFgzWw8KtzwFqdgdw8ZTHLMhzEDNdccv7FiTQXTBAMGwv",
  "key12": "48eeNb7DcYBHDnXv3Ne4bLReWEzbAAw7zXE843pMx8TKEnk2dk484u56dRDKYSoPoZPAi2V3aAYqU9o32NcZSixC",
  "key13": "2B6d2QjC36rbMLjk79HTjGiko37pSvVPt6GKCqUAnGrpVwAoqg7f71MVoqfwwRyX4EwotHe3yCRkYCX4iArKQt5P",
  "key14": "49Ru1WCgHzJedkbsBHa7FsxRaAsXLas38TWnoch6s58ik7S92FSZx4JYKybMz1Hqr62eud5nnnvs7UnrKdz995bB",
  "key15": "38WzXZc8zJvi5d29e6pCenhJLqmNG3LrLduXG5L2mHQFvLL43doG6ymMJLyTPn25BH1mzoPLhEWKG4icyDVufjXJ",
  "key16": "5NoXdJQjwqRK3RkL9K8VmTPF53524SXnZjtrKR1s3KjGWAP6TrhFayhzADpQpdoejbF2QUEU49sMMC3Wr9coWAXX",
  "key17": "4dEWsLBqtb4wP1wPauzqK7PBRU3GEfZhcWB3cPMnKiBva31WbHqCAFFh1YbdVY3cLgXSmuXVQGEFDhqC5RgAChTp",
  "key18": "55y8JntgL8BtqihfD6HVweUm3Qm7jzhVHMBNXoRo889T7hNhoK3XN3dW4nVgNuBpmXokhxdFzYJYhJARt5PArQG3",
  "key19": "2FoHV9vvtjZ3GaJYdyo17EA5kuBC5FG6sDs8t7xZ9QfoQRp1PSNuW18B37EEdZ1ixu4SBX3wR1KRcgnhLmyceQvQ",
  "key20": "4QfQyHqatTgnnDkdUibj4MKgXeakDbxqgRT8MYRGNGqeJhf4fVywGpQCPgwpCDdmfHpRpuU1hSasrkUA6e58VDp4",
  "key21": "4EMQugjH47wj3JhShQS6QK79RvY7Yku4bG1yzX5wN3gNdEgkoE8GtWNxD4ozUJdjb3tVNo8GYzG15u5XN7QAw26i",
  "key22": "5xPHUrqBxxupQA4cJBkkzd2VJfeh7tTFgJV5TW7kNMEnP7zVB9UjHtuWzwxu3pxwjx8RvP8L2Z2ndazprHTE1SEs",
  "key23": "2saQDKmokiaoEcUmVWKhFQ9nD77wEKAGtm6cCgsrPTbcfMA9YR7YVD6qon7CajUiqVKBCV6LFtSzB2Ngk9KK8E5t",
  "key24": "2CHByqwqwdrcoR8SzQ7CrAnmSosYSJrEVx5dhScor5j21Dgcb9efaqMbNeSBAEmkdUPh46Fa3QfTs1kmSx2gAYGX",
  "key25": "4Cag6ccFA6zud2jKyowVmxbJHaUhc9vCYPXwEcwrTTVJyUPTxsM1V1w5QRmW5z4cVDSyh9Utf2S2yzUf5cLiArrt",
  "key26": "2KBqeE6PWQqHNv9CUpH8KT6jC2xbKvn3LU5nTPCZRTqMQzt3a6yNfqzy28Dpt9EbFTbYqU8hu6KYYGde22smBoPG",
  "key27": "5KoHJC1GBmXBoS2ZddrGTdp6RcgwTzxW1qv2kBgsegoj5iVg7NARuwYDBQ8XCavgmoZ6VyrR9N3mKYfKKoSGgNYP",
  "key28": "eyBi5kf5H1neT2hPX7ZiaTcThQGF37jZ3eUfJEs36J4dSECVNQqhui1aZmi7fEiyHbjSdH2G2AMCbKtF4DbhqCa",
  "key29": "7V4qRzJP8UTkNaBQbdJWb3Ng5GdhdF3684TeZZnNX6p9rEQ4hd2T3sqpDPzJaczMt4DNwoq4dsVQ2gp99Fk5dEB",
  "key30": "5UUePL9TArR4eHSV5S4Npm3oKEzZ5yhbNJrsHZz2ZjpuHbhcwi4pqSxC5tg21eRJ9QCXbRDyqDUzoWugN81ubj31",
  "key31": "FjmLXKbjjQUAzepr32qpMr71Zy2oF3QEjbs9c7Q2vUREPMKLpcjQxWtweEd1pozMhof2AwuhoVw1rJBA2h4qkDm",
  "key32": "3i8Z3xE6Lx5D2VC71K7YSTQgWn5XX2pmoTnK8USpPCwZ2HFULeNga1ppsa1xj6pbpcjXAyYxqNKHFtVPjKQLFNW5",
  "key33": "4UsKTBqDhJhrihfkdw2x1nLDLMnRq9RiVcdN4aQNywU2z6SjhqMG1zX93YDBhQKowy62gSsdMvLXxNgeBY3U1qP",
  "key34": "4X74C3ZsgS2oaDC33AEJrz4Wrzig4fXJxSnXtqZCqwkChEFNy5koWPCyovsxvEE6AHQEwzrampAfdmRLxnvmpB4a",
  "key35": "2f3x13bigmYNfokbnqXf5zG17SycstrixJ9nGTUwVULqtYsE6Uc3RG7tvumajXJv8p3uWGcG1Uye5KDTdD9Vgxgb",
  "key36": "2uBtwxsYQUQDo94P7aSZrwefP9UzL3imfnzUubfFTiGwxvzzTGRkN4Ccj3Evzp1fi4ahX3s8HB7KyVC9LtuArRz8",
  "key37": "3mAecwauLQTztVSGDkofE5JHHckyjHWdRcQQPABmg9DFazuD395KCqC653EqNjbjMQuW8VCdQociSA9RcUF2dQdf",
  "key38": "Egt9NKnAXkfwq14k3HGxM8PTfrkt9kQQUWGr696GBuRodo2RLGY36G4mLkJ3vVTv1VgZvRWNks9qrJoVF4NqH19",
  "key39": "35pWJmqCM6xser7iaQEaqijV5nXUARWktU86Rb2BghDbc5SpqJ5C32FeexrSdiMTenDqSuqYN1ULhTw6v5PP2mJ4",
  "key40": "2ZxuLYaxF4hv3Jk621GG2uHcQzXfx2Uuaf9peSBuarT4LHPgmQ1xh9PYHzdZcZJ8EsKnnchZ3prLYGLeDTeFJL3g",
  "key41": "3R3ro9XGwbJeMTusC1cTiTtxUeBPicqnDkGj2ffLgyUnPQRrvLYC1W7SqKEyRgYL8gASRAK8TdmNswCH1jCK9XPE"
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
