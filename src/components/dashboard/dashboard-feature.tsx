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
    "47CTuAHyYfrkqiEEMHJbaPKWVdo6wDARdMQ9KunSU6ZFyt6osfwYmpXV18hvhWsYyiAz3VVPQ46ixfAzsDnVDKhP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "37HVxtitqvFWdHQwCdznaZntb6LYs4FhueyCgGvGbMbF67hXd2vnFCPGfzDdcppdXRMcx6i8E5oyJsLhSK1DBKkP",
  "key1": "4rgCrLEKpR2htLVhCuKSKNsZs9G238XuC3MaY8nXASPjYrUG6bwSi1tyeP7hDtKrKhYqBQVLMnktCwhT3X7zoKei",
  "key2": "NTqwVUiVcK9MXqwgsMo694vfPLs1CU1VP3KEEx6844oZUFU1zeWk3pz6i4dTEzVsJBom9HKUnXD7MwVkPLxeVWE",
  "key3": "2iv32dfHwXTKb9FDDzf1ZNNUjLb2aySD4UAccCc3m8PQZpx61gA6AqVbArPaTPC9SCcEs3Lq3cE1iWFoiSFR7PEA",
  "key4": "dqw6g7HWcHEa4YJztV5g6TeTn89L5KQmwfm2ExMTPfXqaQ4Pbo5gh5AwoL1U2LqRW82qrfWcLdqqcUMnGiuvoaQ",
  "key5": "4Zduqob8cXGXi7kc9MnvWHWjFmaFRtPDD6mi85emjachvMUdzNAZby2myReiSNgdwjwaEdvMEfLQecJaKHfDJjLP",
  "key6": "3nFuY9DQPQkhjyzPjucnSTrtHczV4fYQJTZZ96YB1TCPKDNRfWBoE9bZ82WH8sWFDzDXbnDXhQLJ5A2GpPu28KYX",
  "key7": "128HfBNAnh6DDedyhc4QNc1G6XLPAxMRjqhnwgRQLToi5i8X9WN1tiT27YqaFtFW6P2uacFtNULrSMfTBmxgqmt",
  "key8": "2gtjXbQeV9HuA5fGaSArtHRtBRR8eBjseJVk2GLwHxbPZHe3AnvUYfCZLAFhMdbE3fuvHsnLNkrZqKfzKpY5YMCL",
  "key9": "Z1dhZRnnhTY4Q6cwKdsJnKvfbHix3RqKB552Ey6qvbu7z8PLJv86LuPAf4CoASS3846ra4XuDA1mypiaEjiCdVX",
  "key10": "YYTgEszfPHkuEBzF7LnLwbDGdBgdZbLGqUJkFeKWUrrTChKiL8teXD7667dGKphQx6NEDsE3QUmUmzU38PYVVSC",
  "key11": "HA76gW25SkDHJbzLYPXqbYTpVX1n6CPwSzjBzwLwywmstknHoUshqcihfNqUg9WjdL2oefiyy3QyM3fQ6VD3Q8A",
  "key12": "3He8nfUFcbaFDAR5DJPmGCPiqgn8fnGpFbg2JMCtSMaobqXLxVrqrdo1KgsXu4gdr3fKDgLRKcbw51xTd1BLux6R",
  "key13": "wUGm9rn4tX23LawstfTRF4LJZQ24jc4EnZErmhpxdqZV1EbBSypPmYmbNXPd6tnHdRhcWy9qx1mHHqJoguL44PE",
  "key14": "3DdmtyUGpgMwHBebxDi4RVpcb6eD5eLvS17CH81Ug8cdbgee6e2Y53BCyApnkxCuBnfziKSVRk7X2V7KXNuXqHTB",
  "key15": "3tMjGNRgYgDNLCzqxEn9xxPWajbr4Wps6zAytMh8sm9KYK9xxCrGz8K6Ngjx14jmnzgEdpuBwrU2a23Pp9gx9Qyn",
  "key16": "qxfoK5KkY1jTcyMaEicFR6yJimki7KEVs5djZLZWqfCAN9g3fi1xUsuDE7TyC52ZU4mdkjUD39NGFqprZGDxwos",
  "key17": "SvTdyswkHRn3iNcGoF7ApJ6JEVRg5bg5f2z76i5H8JXBfXQifzz9ALrJ6vbdgBY8QewFPJxexuKMd1Ar4o5Ek9e",
  "key18": "4BGKwJrfRQmcxHYPfRgenmNtBA2KJVJYLua82YaM4KqC5r1ZxCbUbcSjVjpV6BQ6bQUfrZMAiafqvxyJunGGA5LF",
  "key19": "4EM6tVATWhdKQtojc4e72AP7gWZy4EyEUYDqTFFE4mW8esd8krQzxxen4wjxZVp3BJPhbRK4nMSdZcfnN4DUByxF",
  "key20": "nqYbpsEUeLftreS4f2Xv1zW2iPDh5dYHt7ZVz7LjmDCBhjh8YQxX5zBsuyBEi2PzJiJncTb26nUiRwWsaE4vzDa",
  "key21": "5ca6hw1Wktg5iSFXXxN4e2vnZwBTReLiTRhr2rc6b7Zx6tjaUz5qE8Skfupt1Vd8bFXQ7yDdojfkJzaNvcJV5Dvi",
  "key22": "3NXwi7gEBnqf3pkMGiqMPgS4FagXiFmwx1MbakRepTR2ih7PJwYPq96FLoUxWF2BYPV56N7adHvCqfyjeoFKew61",
  "key23": "5BgQMygSMUHXfG3vrQheWWNAh9JhYsPVnZ3agfue6sMRaZhXQMZ61ZjigJaHLpLxmj6dpBfZqXjcaqozFdjW3pUV",
  "key24": "5qC3N1mJvUL8xfWAEbmkYU2Y6Zu5tsQdnbmDsREs9nqdXusuyv3yDA9qdaiw8caRu2houWzu3LPmUV2JrcS27JFG",
  "key25": "gTPXSaAgBWkq5vzGCi84q6qzJVgqavg6xCKGuwY7h3fbw5aiir3jbc4EvaQLPed8B7fShS2dSY3WTWWGUDiyVxd"
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
