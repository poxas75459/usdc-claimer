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
    "3zfLjxXRScWNxtyh7YjRLswmija53VmqSAgucn1nFPKgxtJBTe2nwiwtFAA6ZebRTppCu5waF5ZoqVc3CQqJ4rXM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3qkw6URpV35e4iTH1HYSiBgUyBCHGk6hS7pG4DoJA7qGFZ5itNdEBj1Mr6Rf7RJokANVeDokPo1iQAEfHRyEetp2",
  "key1": "fPdTGyeAuUm2V35iR7vCtHBFSxfYKGs6Ru6WSQKwY11X5PKX1vcVScYNyXfez9DMruimN2rtLuHweHo3Azbc81s",
  "key2": "4gP2B1pnkxnF9VKLU362kRiYcpRKKTbF47iDJSHhmfTGkNF1qZK2g2v1mr1g61LNnwQZjzP85ejPRpqkMe3JWYLv",
  "key3": "3xqRq9iY3xJ2eHycbZp5C5sCwi2xEQ6Leok1ehJXKxfsXN26xMMJGNfBbKvB9dXJqZZFUGQZqwGbhHYdKPSbD5SQ",
  "key4": "3gV7Y9C7ABZdkUzruscCgyBaX8GeH3dfmvNAe4DGH6jaJ912oNfVa3z7V6z5Mjn7mgsYEdo4jmmgymiD8m4YTbm2",
  "key5": "37JSnWTMoi1UM2HsSsTHYF6roGemmw9QCMeiTGeuN43qeJXqTNhcRKkpbx4d9SFro4BsYAhJjSy74z3g73csBZZg",
  "key6": "BioyxisBdGLxcCvFSJx8i7EixH4UGs2BJTybnmC7Now5yL9AUQfPSPkmGRWD1dvgR9wmQ8mYgVBCeDVDCzQFEVe",
  "key7": "2vceQS5etcwEbECqMw25JyKHxybmuYehBb4Zg6Wfm14KhoYsXUpD3nqjhY7DhT7qqUjRgvPPWjPnRXsqSSkVmV7Z",
  "key8": "t2dcRm54Y6KCfmP8sMxgS5XCKhhEz1CjzY13hia5eWqXgMQj4xLoKBdj1ApeKFhgJmtrfDvhuLcon6X7PVYqAvb",
  "key9": "3Bhwq5m8S8xSDsEcNuPBjAGV99HoeH9SYJWnKVfGUN1THzZ3qVSPbKYdWaeGEC9t4Nt4G6L2xi4F9ZMP4mEwCrK5",
  "key10": "3n4cMPFebHr6BkoF2fxeGvysGYi11H4yjcMRPPKgqjBmcrYAVNZTMKVUQMyWUfXk9mDu7VMW6AGUuES9vmdEbbx9",
  "key11": "5EUTdvBHQbtz47pDL1NqbXX1Pr7sKxKFV4GQ95KHYYhNE1pt1AgE87EFfTK783KyYB5bU32EgkooecBNZaBxYTYn",
  "key12": "2NDREhfmv6Gt4vEA6DzivXJnPjqfCmcu1GjPDdbPezkhhmd8jsB2F9LNU6k32rX7wrSb8FArwhqP3nouKenieayB",
  "key13": "21wZEcmtktBEpmP2EGVn6qHUe6kVHVCv6osMrBzZVwa6ecMhMsZxbEkk5EjvzBEUsCbdw9uZHCtn6ZzBbZ7w5chd",
  "key14": "4Y4fY6uhApw3jTomryAwSXwux2MAaaxJAG3kZxSPoztiQ5YE34SBvfCZEkQDkX6BBf99dzM7e9zW3VxGUrGAcAeH",
  "key15": "2icmRCyf7VfcJdpRFgszanpcWWQe9vWSmJKrkXEEkZYbFgctUuGurULrRkcVkvrHDSH7LgH41kci6t12xizqY1Ae",
  "key16": "cCjWoy5KStkjvcm1xXkB9v6zTXZqYHLNhxMpzyGdjx4Nu1tzeSp4iYHiDFNuksEDPeLQ8eDGf3W8Z1ZExpQm146",
  "key17": "3yvVavfkxNvyR3osD4jUAdBU4JFJGvwKGy7yck8rTY9sQj2ssMy4iyNCwxCwKbfZqZJvZ9cNAMv8XnRNPvhcfiXB",
  "key18": "5uHnbjecn2pBC3xjJVbAynMSDh9MdkapUH7zRQS11RU9mjoNZfTAoXJxxEAw4fMBPT6Jx4kDGKva5jWXHr3kkUDe",
  "key19": "35YHYH88za9qN4Y1VNfwBw4nXodBMQdNDe8hgaeuRRVYVjeY4XmWf8iaB7oPB43iU9iQjZ1uFmDjphLy3UjXHP8o",
  "key20": "4CtCwHNp39u2o5Bp3r2F7erpVStGxrsdmqPa4rvW7SpdUyi9dHMb8iT8NH1ojDmf7R8MkbasMZHMRhzwWLczGLVp",
  "key21": "2AogNu9MKnyQjtmtZNHYrFFS6bFkwxFppM3qZJ4xUUzNvvdEJ87bkx29o8tpQmtBsqwQQVusjbXySohkMvGHV3tT",
  "key22": "4YwpxE84SSHMC2nSj8uTryFjhmMUrjdgg2uosKgGa9WrGdo8Zu2pp8EFFKcqUPNK7RcuufKsahErVEbgx4kZaVjC",
  "key23": "2B23UnSL8xHQ4iMyEvPYr6b6Ay5rNDMDhz8akz5Soh794VERqNheDpSfAvB2PaGxf9G298kQCFuyfLAi6XnQFLjq",
  "key24": "5LkxWVPjARmzXqHxti8KNPNqTiVq6cqTTfCkfMLzNkinSNK3hyRdKgusbSP3hCZq8ocwKJndYhrHms5CvJQgnQrC",
  "key25": "3fnQcMXmZnzv42fRcwPXnWHDGzMkP4wyP1FGJoGtYsVN5ndUyGz7fidrnJdzrtR6UQa4QwiBmaXfH9vvHFzWePvy",
  "key26": "KDwyoN1XkHEuTs3G1Y2x9QP3N5NcvzVxNPeCeuCfQrsZ2d6V5QPa5xHcLGwepFv4vN7mT2933o387uZzW3Vadk2",
  "key27": "YpzUPqTXde9edSoZf2ME5eUMJjsVLikmXiBdBvoQecZAuoTfgakQvoSd2BgWPrbCNPkWU2GRhwsJYC8vSwCVRwW",
  "key28": "3c5YqfZMfYCwYVsmVi6eH61uCytuBmvt4L1dmdRpzEC2eDyR6QkqB3sdZYHK3VsvuoWGjQBY4w33hdk6sbHi5k9d",
  "key29": "Sc1xEfhUUgZ1nApUMEqV6THBTv3oh7AQcXAyD1YhFgAdJgMqWMzYj739Ci9QWRPynQG5QGrySBMi84fNv7eUrDt",
  "key30": "LjDDC6M9cqcbA8mar6XQyr1pyYb5W9Tubs93n1Em8hQwseg7n4smo2AS4sWENTmPfkN1sMgL2mmJZBcQ2SaNur4",
  "key31": "65aTGMDjSf6Yg4RofRsnejsgUwfYr6TmvUg6mM4eRYdMiRAsrqCjkSHy2f8CimVkB1VPA9nQL1v88QC6pNPswvwc",
  "key32": "kNU4kxhM9Aw7FcJxmLJmJut3Jj3CqAffyXq3TQSUaLXxozJ5DGbwUw1Bwj9iFHfgJdMG27ssajeFFxJHVhbdPTA",
  "key33": "5D1vR7dC2jZPFA3M7ysgftYrb7uDdP4nf7EnZPXhM5YmWetnRpNXCwVWF2QQS2HdX98SWzfDxLAHtd52e8nGj2WK",
  "key34": "3T6ZMc9UJpmSQ9xXBbwFJYuojYKKyRCwp1tvccV3x4HEo7aksQjFo9R1KY1DGkD66cap2kzA3BNuXh2GeX6c98qm",
  "key35": "3rU9WLkUTvYr9V15Hymd6S5wzeNr577sRYfNQfmY13poTThxjF6BDyxiW4CTMFkbx55Ku9mRGr1YLkERJtctnZ8N"
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
