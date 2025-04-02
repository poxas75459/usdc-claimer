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
    "tWTGHLSLk5cykSHrE8moyt18hiHrkQHxbYi8p6gcomizQwBtmu2NdarJvpwPkyBR8GrDvQJhQztUXEBonKn4yXC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2RhSbq3RV3hUrCvcVWQxTJqFerp1Y8WnAYpRWTDtWrBbTpQXpmFfDF4kRrrjePQcwDtARBo1Gi4qNAR6fzo8TvEP",
  "key1": "Vtnec6PvLHapdXUF2EXWU79YNdYhfAVQLwHFds71bcL39Mq9BzBe41SYtwF96X9pHz9M5VEeCUpK7b618EVVtqW",
  "key2": "4CByRZa5yhqv6kb6UrrwxaqDLh8dNZK7R1oTkrTgUSMTjFW9pbmvdk8wkmUsvEvDsvaKhPip6DV1NChH2EBTARGg",
  "key3": "5jHqQ1QVuqAzDWqmYszCfnrMYNssshj1yHxZWQyXbci787QDKMR9vP9VRP2ayZd7yVYCHmBs2KtT8ZtFk6HP4t3z",
  "key4": "3N2xxY1d5rpAyS1ioXrPurX15sB5XGyuEGV6KcQGahXSsqaLmWP6o8BF9vYv7PdrfBcoUC6tFrCkEhybqT61mgHW",
  "key5": "2F6qFiMxT8aSyUELurGrVVjcZP9TBo3JYXLscN9c6NJR4kgamS7aqtCncvmzU9941RSuwH8i3UQoSyFYZBpkNuu2",
  "key6": "4v51efi2wJY4tDVqMYGBSSuJQUDYk77NMYdg31yXLPNceNgdHcHpXDYZgg44viVYMNeb16WBZNCssWJ5wFg3YxHP",
  "key7": "4hwcGMfumWaKuDatDzygaSFv8Pb3HiLKeGybLp7KgrVU9pjpEzDz5uTeWBu4yGoKYPongmjYN8LDK3usbet2Fu6Q",
  "key8": "HZoKewmB1L7JQ9BNG8oek1q2X57QPpdEAEsehwKPTYmruMw245uvk8Spsc4cAZXZ8bqdVfexxQ1DWEcpLmbWhbs",
  "key9": "3BqXZqgHgeRqxtg62e5NcVK4AKfuFQugeHJHFZbNJprWEoRQmRSTPc4ce4CWriDr48dSeUbpZfxz8FX9jJ1SsirB",
  "key10": "mqcAGyYEqpvnK44bqtwjoWxSsYfbHtpvRsi2oYXwhR65d9jvoFkatHkT8SUqtLvWBqa1L4w5ofhJ8Xj4H755Psu",
  "key11": "5KxGnrfMCrfyQ1D7KnpzXBzA43SqiqCx9X32Y2ZUpFKNHMxTBhj9RK7E32S2NHHtSfjJS9Xb1eh4TXkBmekkdJA8",
  "key12": "3KS95L3V5qwCK8bQv4ckifXGUj4bmj38Fvy9aa8RpXpb1UWbogcug4ZSjYjht5M7i9aJCsKeeRYbACxRs3mNuF8F",
  "key13": "qyHUXFWGBSVzBq3S9QDu1XZQyo7AdNkaiuLCVmn98tc4JurVBh2DR4HwemYmTwUdSngy9jJuH7hJbee3U4d8AVa",
  "key14": "2gCzHHPn1zRnvUC6Kq5zazJfc6VtPcUNJgiRkYdwbkWmRFuZCwqj3F9NTnDc2UZQ5S5J7HwqKowJHt86iKW4aPUb",
  "key15": "4f5qTmB4JQ4KHXrMxUKVBf25cUnoZMAHpNs8D4qxqmXbCk2LbHtHStxqDXvAWdci9f36MA6M8tu5fW9a1CPbjGKw",
  "key16": "pPw7NoYtvzFCE6YZLvhL8zQPTp7TLcC9vAYNrBmaLbP1i3iWb915mKMrBWLFbaTTbRdMfeDpgADczHja4WqsLU1",
  "key17": "CbFKtAM3mK12a5Bh3uq74xDgZomxTDtVLn5zfEU2SKt4auHJamufbMcsMepiU1sHkFx9BL4z2Nt5bfr3Fpbj2wj",
  "key18": "2HiSNF8VGoZCC3PUjsrkTG4sqt4TNerKJikjzA8WTFXXeMhSEvHWYkFEETCp7u86ECZmC9dqvyMPbTWLVcPuvpCp",
  "key19": "2WvA8mA3i6PgUnEaBXGSvbCQJ9xESx8171ifNttQorYvDQUFyvktFME81SE7qstgrZFWGXDtqbidTVF3gop82qeX",
  "key20": "KVrHCez9GXSYGhBNUNreLwNuXZaTC2hAT5c7gnmpinHoY72cefJSmDxBJp6twBYvTpTDpzgrck3XFFjN6y9mwCT",
  "key21": "44mMSsEqgF3sKqsG7FUfH62zzUrM6M7nfuBaducgiVnNtVs8KnudUbR6GATwsgSzRnuqZiJKab6chsUYQzrn9jcj",
  "key22": "UQfNyaNyU2SJTFcNyJd5oedzFLSnEXsazGHsLTLYiFnYaSDDhuYeK46DVUepetFjWAz6RBeQywwXLmAr34jNK4s",
  "key23": "3bNmbJodN5GbczVxrfZ3SkEQnmxoAMHzxawYwpqRDHGoF8ARddQ2efiEVBbFeCSP6FiJz5sVB6hZn9gkgUoPMLZq",
  "key24": "4HbnBBca1Pe2VM1r2bxg2jrJQscHkGnC7NAy6prZDx3UdvkaKMy9wjDmP5YAEYBFCMh6igcwie4HQg8Qfek3AN3N",
  "key25": "4ZoaEANyF4PT9nNT27hQB6dtbLDg9HXtuxE7RUWw6272LAkfxtjqhwH2BCQMVQMU1nfbzv7wAjGZDyyzt6Dme5oC",
  "key26": "z6c3ZYXyrfgPjrdaCgEZ4pJr1oUMnccYQUepjJVjEN2ad6QKzNV5g9y3SdR4pzgKqHmF2Fyx2Bjf37wYZ6qiqwr",
  "key27": "4UkDnpMnKqTNFBNnTMFG1AWAzNHWQaGFtpwfgEbGZ4ZqGePzC64p9GPY6HTSF6v1jPYesSeyTyvrrEYKJGRceaCL",
  "key28": "WfDKnfZFoNd4Zim41ckH6MU9tsSKju1FqAHVMyizcJURMZiMyEBrGXLbG2jQwnkHzUeK7Ci2AF1uQYER98uASSa",
  "key29": "41BdcFsaWcmVweptH6TxbrtTjE6SiBvhNyK52JQg2ZRzZsVmwWZfxBBjUBh78BE8ysfdRGtDuomvcziNgJx8LhhP",
  "key30": "2cdZkDE5sdfvLwsVniGHqXeK2AoZCGHnwh75sVhzNycgcm1hs7Syw7tegi5StC3hkZjf3F7nzHXkEViVcevtYDE7",
  "key31": "3sUBATMEvbKtsa3JezeyGDr2QrMzXoM1URmgf2Jx3AtdUpUBXHAsHHvhnJnzS44KvoMJMEAVpRTDFapZ1TqejMYZ",
  "key32": "29EiwYtXZ4gcKjqSguTw788VQeRgfDQ3bCjx12Vo32puDLptAejKY5zExv33yTBTKc1RpEPZAVuzof6o61Vzauwy",
  "key33": "2BLYUZCjYVroAFSTydG4nyneJ3ndU4BCADs5fBjXuhUEc4ch8jCk3uCVCiaoZpq81rT77Zq7BwTZAutDuk4DT4Dd",
  "key34": "5EM4ke3kHJqjtGAa6jb8fMJvfuDkQPsfx1H8AujmF9BWjP4sL1rF6aVmS6bJgcmkSLgpxqV1xkNtj8dLwh16DMCb",
  "key35": "5gezXVepr5oDznUWSGpd3om3GCeSLg9i8Uk6tjxPknk98gJmyoHtbG7HmLsDfFEeu4PQRTxdzpGZCS5FMCfJyrPR",
  "key36": "3sbKefRUsEoTWyjfYxXpRRBcHtRKJSR8RSsSWiSReLn4oiWqCRiphchsqa2ybVnmHf7QfGypBPL4uvV85qN81bRa",
  "key37": "58ikDxZ7AvgLED4hyotWyc2HTjbeJLQA2meaLYGq77faZe2ZiQ2vHwaArcw7CyJybG8b18GFAzaaMkXibzaLULpf",
  "key38": "5YYdUArsBwhkMLapsxtLUwqkuY5YgM8n2fwudUrJ3xorzJo477xUk3cEtpxoZtB8cvpGYm2WGAcV6gBoRnKVyNfe",
  "key39": "3EG8b5CZjsdC3Wa2sHhnhuAEYKA1GKHpx6KkggMcsMRKRvwhMHDaLgJfuRZnLgMvwB2xJGML2o2ZpnTejasP9pUw",
  "key40": "3ruspWufKGgLR8v4HB8byrcZYpoE3eh42HZ7s9LuMg2dgvjgRNg5jJFXrNekDegRMAoqcZ7YDBe9UE9GLxC233oy",
  "key41": "599MHFLh8s2bYpZGsqvBrfqjfYGhbhURyyTMWbGTXnvoy7W97mLxshgGS6iTcgcnViGEbLmf6hX7N4fPgmbhi5h1",
  "key42": "5WCp4BANviS7NhCgpwCJiwhvKLBgyX7QNkeA9Y4AwK62MzuxZ8gBaRDrUwFk5ttRSzLKm5YrrtDPSZfpKAGTi2t6",
  "key43": "2W5KLBJZDpRT43FbkQthdG4yQ3NDZXmFrUYLTxMbN2DqZyiy2H78yQjrfvZ777q82CpWzfC959MbqsT9zVxhkf8W",
  "key44": "syrNSK3Hz9y1VQsJ1952Vz8CDQC17JK1tKs5GnCMJDMfacV76uuE6RWg2i2Q5fivUsVjZfq1aUC3HrEB9nPvX4N",
  "key45": "2A3a6DaguDKgVxatmJpDjFBv5C5c8D9ZzcYaZwweRKvrCQcyFw4bCxczpsQ6cdW9Aui9hLA3BwWEnJ1WRPyw5N6e",
  "key46": "4EKVuQQSs3pPMgQ7M9wSHAEouP4Jz6FEp3QPQjgEVotRLsgx256ABceBGGJnWiLefURjeRcJcGHpdFRfcW16PPmi"
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
