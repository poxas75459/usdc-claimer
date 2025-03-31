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
    "2Qw1tbMymijeFwF4XotAtEMgkMmhgPKo7NrkJtbsDbEHr28M5DYJvUbPmmwaBvrz7i9qMpjsnSqSRCmeEu9K7Gpu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3mkJ3oJFpeWYDCMdrAhAHTspbNU12J2p1XnQhvJfA7m5ZCjQWJTSXjutY4ABKH8SEWGCvnkt7ZMyDNaBL64r1x1A",
  "key1": "nptYVw6VaCqo4yYcta6UWhkXdKZjbJDqaAWFSPcT6jpurG9HrSFYBk47kL9YQtUzE95XHwfbtU5nBBU8LCtHBct",
  "key2": "4x3BxicRGB6CNXN8k2kxAaUu1bxY1kpkPcJNCYBTqZoAgSTY8pMjCXwiHyf5xrbbg3dBadeGbYkazf9KbR7jiRbW",
  "key3": "5PwJkSC4jNEXni2dVU254Hacei9w9Via4ZiPMK4MGXyEjXECygL6yZnHt8hDpxVotTvQwboM2PNHWrfeppboDBb5",
  "key4": "4Vp2SqLfLXvWXLJwEhLaUx4po3nw2x1LvpWEy1saHCw4Dz6496VeuAmAE5JQvKgGzHGTaJWxqoaNh1dqKNnaoqE9",
  "key5": "4bJLZegMzdLeCrcaUcCsTr3by2WYjzdFb8gxV7HfSHKcmV2tbN3NhbBJ3YGneZaeGu1fVtTrf5y7SMdKSpNQkfWN",
  "key6": "2Gt5R3g5BrfnJMAXe8d8V5XdSsUhLxM8HVnfYKnTGGUp1JW7aTiPcBVmLXrWMaP7FfBqR6NcgbMeoVNDccuDqUAw",
  "key7": "4CzTJAo3BnbAj5DCSqXMBe75ZJsgEeHe7bG5V2LkYpEUV9M4ZozjRgYe8Hz63jUumYFnQyGuDSZu4ZDJzjVS7knq",
  "key8": "2TfnFj3SUWG41sKCDRmN6qWsRbR5b3GnKp6MRPGhhjJUx4VMdGZWSU3739Jtaa29SyCgy2kC1cg1BjHG8YMwUjU3",
  "key9": "28UcFaCqqp5KAdmYPaFDC3SKf8RA4Cnc9HFCb8PZGqRwSuH7vqLoVnob7Bvs9QpEHo1GmwDcJ4aNbgbX6rkhTzNZ",
  "key10": "2Gfx8ThDxbXE5jS8bt2JXppeBEsUhZAGk67uXU5gEqseKfRAcK6Ja7kRsackSL7T8ydq4H9Vip52T8Cwwr9eCb2",
  "key11": "3S8bD8Gjd1EqLbWds86WWvC82Kf3yhBeBfHXJaRJsWfjgwpDivVu9t2zVfJmRa2EXmYx2hfZmsXvg9sjU5YdV5L4",
  "key12": "65h9x6MSm3VYmYboQ8C7DkajSrbyxeHVyrRuyb49xh2vhWQenvqB2xrZQPFfKSnfZFtFgLVB2zYuLgQJrFwFZ6rP",
  "key13": "4J45riiEzLxm6gLnAfAEkUznVCFTDLVmdCthBpUxiVm2yCKmuFtTFZmGEEzb2ALo2HKCATEu23cDTAJhhJgu97FE",
  "key14": "2HZksXXjY2LwMrhPeg6AUuYYoJVY2vGfh5EBtoAr9jQpri9TrGLWqLtRYZHkUcCVJPT62g4RzcTnVByYKeWMU1sw",
  "key15": "4MrYtGfUDBpEgb5R2G14vYnQVJn3jrujCVX1ACVNFLqtexWCBcf55ak4kx3eMYVh7ocCUWLY7hREcFqzX2YyfUPK",
  "key16": "4F8AaegrgaZX3xP9V2WnhCbhZ1LSv9mwj8DMFew2b6jqk2vvg7bK29M15P7Ng2c2Epm94VVpo7jAR5RZGVozKVip",
  "key17": "4jntuQYaib5jkP6jDCaJZjAPhDtEk38uqvfdEE7MKqhVSg1xyVvxbN1YXXXJvhLfUfoeTyJKB7Z3JxSdxuuZjuSF",
  "key18": "6ykgfWuQC8eqwDYTBcmKWqjZB2tGYxrrEvEPbKX4x7pJAcUUsrP7FYLyVz44xD2fyiB89seZWtJRymEHD6tCbVG",
  "key19": "ZNwsTZYiurbJHYqdqpa3NRoVWubfFAoNUfLk97NJCcwMcrBtUmQpG4zLvEDjahCMZ4rR4qHfxvyUqwrKr32cKXa",
  "key20": "2CqekiAhi8Yn6ZvvxewdPHKmDuRVPZSqqC8X59qbqGAwMQLCPWeXDrGoJRR9T21xW7LVXu4J6QvxJR3sQ6Qw3GHk",
  "key21": "4Fpxk77YfUtzpMiGxyKRStb9idT8rUSiebkE34dbZ2gn5zXuCVDVEuazrEtUHjGCvidMRv9pc9nZZ69KscJNhTMS",
  "key22": "2W6e6cUeDZYsJ1vrLNQpHZn1uFJ9ZQEZsiiiL29G3hAwVpnfcbQPWivk7bKcge7DcWwLF1GD9L1Z9J1Z2MwgV3V4",
  "key23": "4mA26XkT7e2zYMvGNv6K4uEbWMYmRGmAm8NuhRbsxh9FTwRZMhSapDKSzPYxRb3S7rwMkiCPJNct36sij5vtFJPZ",
  "key24": "2EJ21qktAsm7KEZjhb5zvMvGLmqUQH3r64DWk4R1g66DxyEhGnQ4iECjt91YR1Q2ty8VqfeM6zWt35rCoDpdym4F",
  "key25": "3mvFFfUUMw3E3gGJSfQjsG52z4LxG8JCEedhTDSGwD2aQnFeahNqDyLJ3EG7dFne5uxHNjT5Bw5hHNttGGAzLzpZ",
  "key26": "2VKmFaN8LhFALFtHHV3sv3j4hvaBLfknnbWet8LZNbuZ9pMAqUZvqmxEKGnCfkT6zm3HKC35c3vZMP1oARKB5Ata",
  "key27": "318F3jip8MXuLmMsSFTixFmq16WQ1Yv15nBWs7s8dzRCKAyEHbpf8d2iYqtM2UV1XWfiFRkjc5F6uqydUyRdjaQa",
  "key28": "3FXCi95Q8Kt2mMdYgQkWMu91LkE4ttEc5kQyTzGcyGMy8iFbkm9Jhtr7A1DZ649HtiuXW2s6HQ2W2PTN4intDLoD",
  "key29": "Ca5ziNeMJqjzHeCTSTkoUahV9qUF2CtjointgmL4WH53TVKQm6iegbQVV5iYQ7nKHHL7F5ahrCDsh47c5iffjCn",
  "key30": "5zP6omDxJ9rhCcLNp9zv3q4pytKegCXTN4uhfnkMJA9vHZmVMJHkhcGrmp9TujZBwXJogk6CciHH3iZetLKsWALG"
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
