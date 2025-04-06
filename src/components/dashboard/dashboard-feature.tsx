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
    "39v798ykYKw9sVLA1k3GZCXLpQRKB1diQCEL72BuB4giCdohfE8xCoEHknsq61A3jZn5VKH3XhRmkGpo2qY5DZre"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3UxXLZgHZyRtiMwnRbNkdrEy8FFyn8TbDcTS2R2DmdujAJKL996jDFu6KxA5PPkjuuGmMVSTzwP8p7xYHjk1rcBM",
  "key1": "3Wv8ouTsuSHsK1DxzFF3creCDAcM2Zi6CZwuctJykbWtax3RZ3Ff9emgdC7UjAAzCDREvbHxxjS9uNpQgp6V3cdn",
  "key2": "3jmeF5pTPjY8LMrGPqGhnEy35Bi6E2A3kf1Jx3nziwWf5AZgrwrjy9SjaNj15tpUpy1BgXGK7n4cBW18Yr28Gx4C",
  "key3": "4yLZ7HEp3xpPCWNRhx9Q5P1c5mpd7Ktr6KNcnFxcqfqRXm6BDjpHrnFG1XqKFFfVjb4jC9vWk3udScZ4x1PQEJYH",
  "key4": "2gRdJ7wxU8REPtnmCG4bKKkH4kgq3cLJR1ELjas9UjDogRK6Rbn4AJhuVyh5Wmwn9QHHftRrcG69wStmFy2o1ufa",
  "key5": "2dHm9szwAWgRYQxrmpWwpCPJeMy9T9xh3fZmeHatofhT9krxs5TbAToytBRufuYEhmXB2PHSyrTzidHesEjnwHYd",
  "key6": "aYuNWpz1xtdea16JFSpVkuqirvXvjJwA6yh8iXLQyCwRbWg2LYnkc9nJzKHr7ZRoLP5AfhA8Cff2WeVbWR3Ruhz",
  "key7": "25m5YGmGLoqFKrJZMoosYtg8ZjVD6T7tX3b3wQzTZ62AL3wcivqEXkec4CwYnR4U43CAxSF68mnLpiFyNkFYvzHM",
  "key8": "2CP1U5xREn4sn7Jby2Dh2SyQVm6txehRta9QngijgtKZSHxAbE2MhbyWDontYp2ezP9ePhXnu61cgjFXYgwTmpTk",
  "key9": "5xtBsjtof33KmTKBa7ZEhrcCotvpVkVYLXRyV6FpheSZD7HR8ufADuRjN6Hhgze4aw9yzqtTu8mUJ7eBxQQAVi1W",
  "key10": "2mTA1dmqGLaDB6R8kpG1cGLvf7neVgSSWecMAU1nv4w2cXhMynkxDqDA5o7CtPMMkaKEteKJQfN76oabvpL3EwR2",
  "key11": "31hzUnpFvX2HMpVJHG949v7W5fnnBnqX3SHbq3Ho51SSzSkxGQp9jtiTrebH4g6CpmXp34jV6HLb7sYrbijG4wXA",
  "key12": "63GzjdUML95NuhE2DtQgUTqkustd7Rh1LYhhmdvhjmyfuYXjXLWDB7Awj1QdkgtsutC1SrURFhFj8ir7oqe4DYgi",
  "key13": "4oGKQVPhv4bGo91w8Xo4dama9VGdfwse6TUMVo6KbXyAm7EdvwgoA5ag6ybit44dScKmZSMAdENTCzj4ZtkVpn6h",
  "key14": "26TZ8z7LWRz9P35UwV6WLeiVfPXJN4hju7BRxAbHrR8fS9xwaM2KnTFHvAto6poKYmK5qUD167yDXxSZAezrknQt",
  "key15": "5FhWipf94LERvcKrDTsip9zMgYWGvuXHCux82ToBS3LhpRiLPcJFQPz1x7B42Ae7wfqwy5ydbXZMT8EiXbzSvtZf",
  "key16": "5GLWfYm8osNgdjkwTvThiyU7tEwDJrXiM71JVbAdGBJPseBDeX8i7HFfgcXzbCY3WhDWCGbj4aXruHcMQHmw4gf7",
  "key17": "3Z9H3vdY1CyPfbTGCh1sWaZuvyg5EQhSX9Tnj3VNoujP8DkGRdDc3AwHeU8S4GAHcof7u2k6FZoSWCveudkmA3qw",
  "key18": "41tg54XXBMbaokP3sFkaJ7QsTVqrJBngLpUDBSCD8C4WPDAH2hvQJsEUhgprCm9SFiUf6bRzGsUt6KrmipGGPKgr",
  "key19": "uQXK7pqRcz6GdM3i1sSsNQMxE5rr5pAHFCCUfj1xV1TtqyQzsWcVwXqrJEeKnWhaujSWGRpYWTpkCqTupL3HrdH",
  "key20": "5mtzmm4kYBEEDoFqEqMkQFvbhDojWuw8V5KmNxfGGZhSXribHac6ttUs2YoCQbW1jFEyj1CwdySBrjho3qWbnuMi",
  "key21": "3CiUuZtRGfh2YerMmyZoRFnEcDei8a8JzPzN9Chr8AH3UdoEVjGyUi56A7dv6UnQagHMnVfuGSEsEMJCAmZKD22g",
  "key22": "4aTG5mPYZPWLWrm8HTuHJn2xi7ovAPpJSWTzqai1ZcQuZTroJv59qhdPAHdmSu5eV3xiFmuGCwfz5MuCD62kPQ2S",
  "key23": "3hpY4tLzdBmkNthmXCbNmRc458cPkJL8d1qrjoKo7nYZDvefKjwyNGtKaYH6m7Use6cP2dnnUNHMkegkBwY6R8a2",
  "key24": "yytc3L7mnPBz5CNyxgiGWMeWjZfmfoWMAfL7gzQmGWsSpcNFt16ibUfiw1QfVKMV4K5mbwN2oVq4QR6suwe3Afh",
  "key25": "4ufyaw7U8pAXiRRnEv45tr3gmZ8yxNrCWemPsq6HyLArBL4fAkab1iW6EvAYjrGYseXAQyt3XvGwo1mVTdK5vHQz",
  "key26": "5FUZvfLkdyVnUjQVdZ9roYVYHEW7tk343UNJXdLn74VpwD2aEg8stZAREBjLcrHfGWFk7GhTkiwu9m13VgQ3Ax4e",
  "key27": "5E4zwZTARbn2tQZ1Jo5mE6qxJWDcBJsfp7FBpCwxgcUpfzhvkRxDeDvphd7qk3GvkjzqmPUQFpnYQ4UguEAEGaWD",
  "key28": "2ntN7qpRYxmaP7XJr4p87yoBrKtcPWwwwuc3YpVSyqUUHVX9zM6v2JyFYibd6ykkr5FqrYTC6ff6qu14pjKNmKZ4",
  "key29": "4ErKWTru5PTWAtNF5Gp9xfn5rgnmos51LfbBdDauPjDQ8XLv1xgdAXRvZLRMQoas9CLkY6ce7QY3twg5CgvZnLNi",
  "key30": "62vfUxL2aEnDBpQ52jpdRrbDQYxutGe82TYDGXEJvQ6dtddWafS8c1cyzRtSXoLarYpAH1GWhbtTkbrzTsdbBUDX",
  "key31": "mN6DvpjG6FudEa1XSvfFBjtogx2iwjgf787CvZ4rkSEnahBDa6ThDTZCuN3NJgyYAr8hAwp2zLaDBqznPbZyj1a",
  "key32": "5LpSnDLe7joLZvp2qRL9Zp8hXFUkQcxBPiPkkGotGu5uM4rAYGjFEtSwGKBdqccosRjNBLmNycQ4CsGcQKMPaAeN",
  "key33": "2De8tis9GXjVHaJ5BsRm69QRAJekXuSgEKocfkK2gmvmV67HVwtLcZ5EQ3iMneLZPvdKquTyGcx1Gc3TmR1DRHM5",
  "key34": "2hjPBTHcwXQcso7M4qWRXDA5zApQ5FVPKf6qt778iVsAEHaeCEJjsKU5hH3vJkKQwuecmrYQRozGuVh6CL6hs9XF",
  "key35": "2eK7upCFY6FpVKVZNWxYgJh4Pw6iTEWBoCqDxEkTR5RjVt6L9YeLsBh7U9o7yXnHdsuJgc7HfwXibiVvUWWSV1Lw",
  "key36": "4ghTbJe8LytYptPH6Dym8JbKpZxXe7Uu5iJrZiPngBoGEveTuv18u8uqp93FjgxxZmd4Cn6Yb9Ft6vhtZQkqD19e",
  "key37": "3XV8UGnB8tvLkA6koo1HquxTKBAhZkTKcNhJ3ABX86QAh4KvSpH6dSifYrrNryQMd5DTz8XUfNfEcwbDMyffdP1",
  "key38": "w5yBQjJJWJQFZE4PEzihyiHUUuRnDDWsoKXGKpmdAgRbs3CK35uFvrjyNYCsff7nSb6CZ6UYR4SR6kkzBthpDDj",
  "key39": "35ynY88b8XWKcSzyjgC5DNkGq7xemhwJbs5SZiy7a5z8vKi19QJz9w6EpFipM2sjCgrjc1XR725VtD4oegXiL4yo",
  "key40": "Bmv7ZJUicrCx94wRTawKUSrEtncf5GeDcxu5RhMTH4Nhei8VK2bj9Nw8CekYh5EEwpeKLkUaeJv387exASEvLvf"
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
