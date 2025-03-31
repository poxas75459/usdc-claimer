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
    "q4M1DZkFDD74iEep3xmyH78WcZjgQamfrrNPsW58m83G8rMGvxHAmsJfY54H9FqsAt7CRbFSJ1wwkKYBnA4FtSb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4wbWchfw2nM1mijMFsB25roV5SYE6tr7mXfsa84QuvmZcxfvdw1r74BEqkoPCK2kqpDwZADyqvVX4XLzY8hfMeqB",
  "key1": "RnvS2owA4MBHKLPPLTV8WBTx47UuZG5rH1kwCDvNGtbyaQPnNTzZm2DB1o3Hh3ypWSLGruPy4kL8quyLpkQDZZF",
  "key2": "2x2qA9sLP83bRTTWkAYjSkZaqhjcGeFZAETCz9ZX1XDsdrAxgYh8vDdzxQMsE9JX4Zo2qbGC5YbLDavuadxveLrr",
  "key3": "DmMXPJT59UE2mttqRrG9Qt4GzrJvARy8u57EJM6FD1BapBVijrVTeXvKERmYj34pjykdn8cagVhwM5XFUd76iHg",
  "key4": "4Uzxt8SChXGW9yUpoTQjQhhrRSWqDE2naQS7c5SbhoRX18Gr361FmMFGyUjCcTP9E3aN5Cx6iLuykD7MdwMAfLiA",
  "key5": "2J9rURzDA31WxrW6QyVCVGKo2AuJFikSHse2gdKiwZTegtxMGN7ZXWkyrwLGAYUPZNFJ4qKHgJXejnpZKfWxbLx2",
  "key6": "58Le6kwdWm3RhTw9SSA2dKGQ5W1sJTa5mRaLVTaXkC5WdHBTDSZ8RRXJ4npo9WV4vn4Fx3aaaKjpzQdWv2es52ar",
  "key7": "5NGmYbEKFm2hEdfTEZaBqLDX68Fggk7uP5VtSBh4CmysQv9z6oqREv9jztTmVik2g94x2EsJwyF7uaBgvUY7Gy9e",
  "key8": "5CKREa4GXzDHCDhHyHvsffGBGC7A8Dzdnqckno3gnUa7gndXYpoGRsAXMKg5Rfxpwcpcd59MVM2bzNBSwr16w5HQ",
  "key9": "3nzVRK6ntiAZhjVrA5DSw1rBrnNv63hiApj8hYJ2jj6SH1A6Hyy7cbJRfFSUCFXNfGZxF1k3z4KidtSmo9UfqSXs",
  "key10": "3GfWbd4kmqqCiBDQynWDDxfpvh9f9DXwGcRj5u8sRLFg24rSgqoyvtU21hzX7JovRKWNyUUeUbeT1wkm8e3ZNCkC",
  "key11": "3imhx9r6H6ge9TQxvUqNhzattRzmr8Ep8krFUypTTLRXCxYq8EiotMCcGDaQprLEKkmZ4262u5QUL49ZTQ6v83Vq",
  "key12": "4n6vcKRs4f7ohemedehJYryf6jU9dzskiKHCQvipZHnPdnSzKtnL4b1k7wwgd5SXA9crtRdFC9MJXiXsFmnp6Muz",
  "key13": "4x73MFh2QQwWQGXUE9NB1GBhFDesTegBvzVzGMMSGQk6X72bzJJ7bBumvPp2gSVdeP47CjgKZvHkYRRQBYdxNQJ",
  "key14": "1r2WRa4NSD8mhwLVv4YvWjATGCNYaZyPN2aXCBKMYqmRNC25YG8nFhkWtKVyJKqH2mwtKwMdcvzquxYCVCpAp4y",
  "key15": "wcsC7TWgyoNjGo6MpXrUqqRkxuWYgJXhqMTo3HH3L13J1rwWMqrd31etsnhvyQxz6zsyKf9QLRoHBXLUeJGQ3sV",
  "key16": "4SZRKQxjC8oYRb2xJVbWCZUBwzUHpE4Y1bLVTSp1wZtnXLoAY6K8M5SSz2tt6itQqghQ5KUB81kUnEA4cvGSkRF3",
  "key17": "5C7NbTw3KiW4L7NhzWDPuVMWMqQQ8Wz1gLzaFj3fzVo8qmyg3eDzTw3N2HTyxx7M65G8p6PPcUybK1rsrYxnptC6",
  "key18": "65NW9JWeeTETL1v4fSpG9B4gbseuEXTZuuwN57jtRTbLAQ43k2Yc8YhuJU9Trj9ZfCpov3zJyGdHAxmFkjDzG6wE",
  "key19": "2JswL2c9CLj9CgyM5rPGfALpdkbz3zytT2Wc8FGUXdyHZShjFrYnUdMCzsFG8RDW62ug9z51e6sgePzPXJnoNgSW",
  "key20": "hh8Ub8PoxWTvZJuty9V7msBAUPBtZu3JZUtthUwEiYYjvV5FSmmiv9i9aCpb6iKDz3xqGtwt7Q46Da3m84UkNoB",
  "key21": "5PhbbSp9C7RoRgdcNFqK71eSGBBwzRMUaUG4sbAgTxM9abJmNHTdAWGdZjHLra9efduwAnBX2F7HUi1d6RYaC3UE",
  "key22": "5NqenDMhnWcDAWSmJeAmoRQyQcU4QSJEHf92ViCesafsfrwj7ChPSNLJAa7TD81rhrsiJC3HgYtvuJVm7BpZ5i28",
  "key23": "a9R7PnUtyUne67g97iQABqZB5PbpLf3vSpDsKYeMjY3pk1Bw7QY2LVDnfxPYN1meLiUHfuWTtGDc61LpT6jmz97",
  "key24": "oGKaUDGGV2S58MUxe3JcKDJmHB2QJ1nCfR7Hzirq6Me7baG63ex3QvLQhTe9qpCZdQTLRravuADg85rYCZRhsk9",
  "key25": "4KBcDCqNWiRrwQpQbMFWBFAWXuwxJZeL4SxQyxCJUHWhKBC4zYdVu1ng1hCPE7JaEhTsCxheVATZUsCEGgpXV7Be",
  "key26": "4VV2s6FS7njHCFwmbG9R5KXyqtihStyWXuzi7pvSm6BpmnwbyowJU6orsLFyy1v7axwQVfr152woiHhBeDGckywN",
  "key27": "3okYYVhLZ8J36tdnFzHg9EZSdRX7SqUABKMSF4GqxxhvWPhjiMVbpCDbhKzoEawgf4v8r68hvd8FPZktC3PN1vay",
  "key28": "RhxMXKg5TU44QGioVThCpi8UgpGEcweHpVBQaYnsfqaWmsXTwXW4iD2uucJLmHGCP14yimzrwQPC3p51aCkHdmq",
  "key29": "3YRRGr5Gpx35TUKmyeBqR84JjiKSMPb1nqShxd6QamXkJsCe9oinEZJSh99ZEjTJ3KpMVSBLH8RGMbdEsa1PYYHf",
  "key30": "3C49YPoxPfNHoxzKCkpGDopyszZFgN3K4g1EVXfmMTPhqZmy9deGqrucXPEdmpYxjBghMT2rEqKpDtsg9MbVootZ",
  "key31": "42ECkVXApMsJ32e3BJoDimFRtuEXzHNUyQfhyW9rsocrcdyZr1UPRPgFkXDduRLQin1jCiWBjChvN4ZemET4F6kq",
  "key32": "3mRg7cAqvvAPZTwuaiZhXhBuyq8E2aygmnPpgXSbzPxwqk6hijADL2AXdCvoAbBvczQe7B5E9wvDLhnea1vDQEtj",
  "key33": "5erdKt4qaFBnRJmBUAGc89s664GcyoWCfYsgtE8EFzoW6RPGy9t5CxTB6fVqvfX1ULeLLzVCx9Jr4r38BSfKFjnU",
  "key34": "4DLLsEGUrqRVHhpxNzY84j8dtM4MrZHTAKAH8fqoocdUs4AEiwDUBqNRfCLhq3nBALYmpkDuQgXhpwnZ8fw8PFW1",
  "key35": "3CqpAUBns46si7z7ZX7Xuykru6i4rswzKdZrHdwNoa4FEmbRAxG5rGjfT7aXPKsizK6CAyj6trvTqkFmEPs4xog8",
  "key36": "45BPdB2fBtkpZvfqnytJ2Vjaukp8YHm7fJmBAeT7qRUnTyqNMzMrF4PCHhGGpaGQfetNS15TCKvVNvPBX5SKBSPL",
  "key37": "3tdAE89GJ9GjMcExFyUbsRQZmyKfzasQYD8nN3QcnwYkZRiKzhrAwzXhstmLX2BM8HZfdWTbokKd8qhn1syoK7G1",
  "key38": "4cpLgCEEPwiAHighf1LgEco7ThVxynAPzVt9LH9DKQn9tXL6J3fYeU8LQSaVBKk8vd7tEUR86Dp8iyapo34xYmQv",
  "key39": "3SHvS66uoRW9J5c1bs3BoaQb4Ko29oAJSGQKGFrzKmjy32UuK8KbqgsWrdoaYu8L89wCdnpEU4Q3SgrTvMkbJQfk",
  "key40": "3DqjxYiMaNSfzkiFkwJFDV12ncdvJWD1129dwHSTtAyFQgwPbVZEJ4KwUCyneuchEP9SFpJWddYYTsseUx2pKQDB",
  "key41": "5WgL5C6EnKyK92WvkgzNUzhbZhFWVs9YgnBTrkdvUPcYnUACYpx2ruATH7RNJXD4rj1GjFdT5T4C8FJ6sNS5Fior"
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
