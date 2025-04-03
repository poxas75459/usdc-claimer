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
    "363GE1PSq5hbyVTvMcAP82CuScUTyb1S52xEWSuEWadM3GWBg242DhPu18tuRQdCyvVEW1EWm4CweXTQuHcPzWtP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4oZAMBnvme7ERt89FZ3gsEVQPDbAxV84WBX1kYBPRws9Y9y6Rt1zrjo3YtkDk3j8nhAymtAHMpDxdkN5KzFRppJy",
  "key1": "41WGhnn5mQdeU2GGCXWv3Sh2mno5Vm7W8QREyRSgj88kL2SE1eWe2koncdYgdcJPqYk9NkXtXnw3ipt8wbPTnh8x",
  "key2": "4MC9PVKhRu94dMdjrBMbLXu8nm2nwkB5TYhNFvcvfDpP3A6owXkAZhAqBHVWfjSSjSYmTbW1jjqpVvxNCD5Ni8rc",
  "key3": "3LMaEExXJgsh96LzZQF3akTFQhAKonWXhiLUBMi6bCtybFXywSmKiEMJvBdkmUfQzUcVvqAG3iixChVzhoTrPvKH",
  "key4": "4HzcaRjegeokuMSoTpzrcmmBisFFwK1wT1JoNQ6iaRDPeb6nanfdo5VTAbG66sKCcQbaGJ6bspK6NyhgX476RTLM",
  "key5": "2MBKY8R4MNYfxG6kH47ZHoimrqLoMQKRvvb8CvKd4XFfC15DLFVStQrSc2Ywvq4miAfgj9QtRgDDsEaaMsV7vRs2",
  "key6": "4zvXmbEH7S5f7CsFeA7WPp3mc5evNePzmjNUsT7m1qosCK7cY4NaVu1btd8gF2ZrSXwiM9S5CLas9g13noL1BoSY",
  "key7": "2RWYeLp9rajRQbbP8yb71cDnRefR22oQAZZ8DjL8rCnfQvFn4USYR8wAoGbJhoUtUsuiQQcPAQAMo1os37TYEDh8",
  "key8": "5wTwwx6y6R9cGMPuUQ2PNTaKnHYyTqnMotdWBwgXc4tzBGTSGU4S8HetCwXZzQYs6KxDF9eqix5gHHjsw5g7WhS2",
  "key9": "2sGY7F28JAPeGQ7ajKQeahY9FsCeqA1jeSRGCLJxDELmtBK122GMjA5x7Sn6Qx85S36Gt4qTLeZNc9dPrJENwMZx",
  "key10": "65Bm64Sn33t7SC1g3ERUwWrqiv3Z1S2muxuLCSbChAHtUtMzBRskXYxz8SoaZjmanSRustq14sff92jjGH9Mia2W",
  "key11": "3ngaEyEfP5W4FgAQoD8nxAqqEemHnqujewN7PkZNu1D5JYGCUwmuiyMHjDKMv9tnucEjEtmYLVnfNF4SjPkWq7vA",
  "key12": "2tfJJ7juwu7PDpi7DPYvU7gboukb6aQE981mYWP4EyDBChjaiSV6CRsrZ7Zoca6NkRAkXZoYAZ3D6zD6pth71FNd",
  "key13": "47WpmzEmKR5K7feXMGmnC4sC3FTh5SwiQQTjvn7gBcuwUZKKs97THop193woLDUhDV58AjoDEpJZ5KzuBoSGmEey",
  "key14": "4LBes4DmViomL7nBia94gp84uRS1MYxiVSXdfjw9VGgMFvxe7w9xiCMAGQsWsCKGNgFj2n84hPdK7AKevribLLVg",
  "key15": "39HtGE5Lp3FUb2Dx26t4ChzFVQawTJ4mK4KfcV9R7LM8R3X771aiWiUdz7gBNgGmMBynCjDDqYvjfjym6PeiUQaZ",
  "key16": "21QtrqiDaKSHwgX1oUQ4Ri8WkZ4aCwN8TS2hPu2qCXrEkigoP7jSNqh2W3LccmKxeiqBQbmYNHDHpJLKW3gqYYJu",
  "key17": "26XdkJoYx4eB5EUcJeZNHLDRjceQSA6vimwfv9wABUgyxjLYn6r37iJL1y1TtN2hpdVZPnR9xj3FM9zSxuWpigq6",
  "key18": "4MUYYosyqEKzL1Gxru1PKeVjivnJGFj1avc4U6fzrw5rePB9xteiwSicgWDeZmoKRvetaApnhXAVg5GrA5fomiz5",
  "key19": "45S53DLtS2DmDCTqS9faSZKENT9aUkCWx4zHzeaYhmUvRSb5jUjc2Dsv3xk1Ss2hed99NPp9brCFoocmxPaMq28A",
  "key20": "3xhPxMEJNgAx9jC2vvJF6SriP9teFJ6oP1VWqoiGcGFhMuKG452vhRyHYaJJUyKybpDKbszYKDj6qJZNJRwZBcWF",
  "key21": "5BVmytmYt5h73uXegXJeNsiWftBumX1rWAb6DLiJ8Hyt7PSz2CvBed1cdKWtPna21kGsFN47VeJwn24kFbsgksco",
  "key22": "J3D3rvMzHSDHnmHymf8gg7gjBrZ1BdPUyrubfk2dsEJeLNbALd72Hzqa9vFZvVyKzB8nBHM7G2SQqWNtS92FEtm",
  "key23": "5dd8XuPDFwgMG9akV2ePWdQa8NrEYr1tjaQ2vm5FeqTkivXk2Rez5Fm23banRh9n7Q23NcQFQzz5tuLGUP6Exg7C",
  "key24": "P65pBkWH3CAnHYZmveY6VECv25dWgoWba4MJjEgx7fQuZPMFxkj4bqmEKM391vaAFPATJR9QXhiXYsD2C9yq2oj",
  "key25": "57RhbMUoTTYTHRP3WmKW2VbbYtovf7x875fkiyHLnvdBXuemDSi4V3qQbS8SrYpmnEZfQFUzfWm73cvPTUouUmEL",
  "key26": "4jzMFkiToMN31eBjjpH1XnTwub3FUn8dzbkWpGhXEoboQJPZbJNNbxVHQymr67mAuacxYkbU45otyhwrXiqsHvSi",
  "key27": "DP7aBPPu3oqMnx49prRYmrRLD7LshtnkTdrkVMGZc22S4ohhZkxepFXNJfr8PjdNATMDCXA8ZxREpsir4Ekexbf",
  "key28": "4BQhy3t9uWeAs2JJT42R5nQmsvjS8eAj4hN4ekqWrzsR8eA5gCrj4NDjwEBgJcreE6GKwri7BJfYk7ioXwYj2i9o",
  "key29": "37G9M7CvU9h6z5gPMErmsoNvwjvJ7waJ3fWQp5p7U6TnbeBkFRxEQdsxUxPxzM9fhbNEfjJmxW37oAsk3s137b2z"
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
