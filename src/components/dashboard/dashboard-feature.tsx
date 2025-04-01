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
    "249iuJfiSF2dg66HJ1bGFpfGhXqDH5yM7xAjNTMVz5jJe228RVpce4MNiStmNKpFRB2uUGLmgLGDe7Ub82S8WgCo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ZXzLyXbuaLTRhAwFKoJrmuvf7QmxMnEN986pac9wqMbfge9ASquU6VHhLVb8XbUrFouf9GnphEg9anhd8KWKBqs",
  "key1": "4eBJLZv5fdnP93FNj6JzCA4yZQjFn6Ea6xK7BWDvAZggzVxmYYrt6q3a9F1cpja18Gy9s9BNoLi82pBLRq7PtVL5",
  "key2": "5BfxfzbgHf2zcy6cUjiJiZwNwHfryUvAXmipVs67kqayT7Z8znbT9PshghUJgEBWuuDRDQ6cVUN83J68wkCJA2er",
  "key3": "2v1PJdcQ1Un77vcCzCsCsKWRcgvtA62v38PweS2xHeMFvNnNUWoUJ4aAX8LsPS9NFviuA1fvoSGk1zyQoboVmV1J",
  "key4": "3pLESqounoZDEgYRTRvTjaKvSP4rbk7Q2tVaAMgRrQrjsoM6rWEV2bDRTKwmsZiPcWMAb53RRtaVEqrX12EgKLGY",
  "key5": "5QB5hgidSpCSUqHGuXHRCzGrzr7rc2xpK7ErHH5PqMaVGoNhJrk6AmRGM4qXYTiH8LHSJrAkg4pPz3CyZJPHSxoo",
  "key6": "2ZtFva9oFdMKktzawxuHGV2TbwFexMrm3DuAL5iXhZ3it8qC82vqgR8Hp4SbXxCKHdeW3G1Y9ZabcF8rAs1Lx3bv",
  "key7": "2uLLW9DmPmVMNSDYQfRedAPXdKxgantchSqbB8sxJfNboY7afdBSfj6tjzJj6N7pPtb1r5T8qQydjUNkvpFvjvvd",
  "key8": "3wB41SJUHTEA3sJAub7cKohaaUDU64fdT9UKPXC48o5YY3YZjiQErphBmj9YKcWS6DchKnyfoufBZB82CeZe3i8e",
  "key9": "4fxgq3QficcptuzF2vHdAaYcBEjWpRGbeYXk1Qo5MBmGr9oyJ5qjax4Un131nq4dRQpE23DNRdQ1t2WfRWDmpBQM",
  "key10": "jLy5acWxJQB8FycrBiJ7YPzszM9t2wcrefx1pq16vfNAr51H5Ef4LntJh2BzPHoWprxvXvLZgZcoSKxJQD1fPiY",
  "key11": "5jJJ6DhTLTRtrPdxht6nDrCCjRSNXTAjUtdChh6wCuPGwCMgA26J8WE4nbtCJaE1NbFSjUSzAbQ3K1tRCkqDhVc9",
  "key12": "cYZ1y5NCiAiVN5HUtwdeyFZVHGpeuYmutaVMVACnCPMLHauopfWCGKXvbwTbxp9QWc5RvTTA3tA7uNvJemf1SHc",
  "key13": "4pjnYCtsmLSwXg5UUjFRfH2V9ZgeTWsTHvJJcLJfEFQoYMu9D8zZieBQ42nvJX7GP69FmXzqJDdmnMBFX3hh2Ryq",
  "key14": "4t8cxgsmWmaZDLLdp8T6fD2BfU8JyrZosd9boKnjeBP3DiQcUNJXmBEdHmhKynVb3TjCzKiSZYUedFoo1xmV4Ahx",
  "key15": "2LwwZLrj3yFHJAhSFcKMJPN1UNTnWsJvVpYeotPa8CyQw1QynTEdoxyCJYmx8dwuHT9Y7z69JEJSBjwLbzXmioBT",
  "key16": "5DzDBbaHu9NM9NieV9dM82Te8PBg3ucqRu7JfjPFQY2Euag1Bo4jQBcisLSvXEpWPQNjBcHWWnvnUXmfrXrTNTem",
  "key17": "6r7uyJCGd1VmrySWZYMyECNtpyzcTvS3gc1wvBrexiyRsYe1HrChcNYPjiB1T2piD7MBYA3xUtXdm6cSYgeQgbP",
  "key18": "5BuJQSQ9FvVJcq1x917VdzHYU7Wuy2xDhQ1bFvUTDi4pzQS6T9Zzit1wdGfEHd5CNnTu8rBRegvRjwLXrQwvP5e7",
  "key19": "4NqS5L5bh5AxgUd8m4kGUksFZJD7ma1Vhs7VeCSu53oq7synMXxhaJ5r9Pzf378NvWgLeJoPFVeyrQikqgDPGUeN",
  "key20": "5ApDSiHseMKgmwqu6J2ykcm7nnw616AffU2Gd4yVpCuWsXKserTh6szL5UPdLghXtbd2dqWfrcDW31jxxm8PiFrs",
  "key21": "3G7oSXsPvbGozuMowpAahnNYSELFNLJB3eCg9zmxf8PfC2yZToSq6MeVK2Jr6k5D5CiHuQcbWdJQKq77JoTFnk36",
  "key22": "4CmNyXcrfhtRfQpxp6whCnRViub8ZZcsMKvKJ32P86xJ14Q42iWD6nc5KryzzVeuJBoj2SgoNATTi5WMvj64twP9",
  "key23": "3NWKyt12Nyj5cfzi5hykwM7gCnFScTFawKoZiKk4VQeKxSCRDLBpxEMYtUTGJcctWD784MW5AE1NVen596vhCjG2",
  "key24": "5mtD7jzfuMDhgZg6n14TVRXY8X7u7tNmVw84Csxv3qeaSw65ss3RJn2CzHrJeciRJn8GtFKRFVe94NamEooMKgwn",
  "key25": "Qsda4t6rgiSGVUDgs5avEm83TfHFd6ox4XPgJKzzfFDupZKsKkqjU6gVN2K9JTorrWjmm63Z8yF8GKYdmDHB5dq",
  "key26": "3MrmdPdFtuz19ffVdMuFC9Fm86HB9AbLPxwFwDUwYmXbPfXKwAJSkY2wG8fUJUUL4WqoheX6XtbQdS3QAvzPRU24",
  "key27": "aQNoedZiZEgiTYDcw9jiHnPZdW8pkRGuN4gGD3S6EfLUq5qpD4QNS9dKiWm8m5WcY22yqPMvBkKehTMxWmHvXkW",
  "key28": "zvGWZVi73mQLBh48HhWij6MfgN68inxdU5GrxPW6MsQQZ4PjWnF2kWm15RnDTmMq5NX63vdaLmaVoViovYdAigG",
  "key29": "Fc1fUoyqDBdyDE3rf7Mi658XVNLZhBBXhFR7bj2MZamHRtkUcGmJvR7yQq6d4mHq2kWQ3W7deehHTQuEbb3VnEo",
  "key30": "5m567bu1i12YZtCXqd5hTD1mA8TFrp4hFT5LyUkhGJEZZTohaPh3sjAr1gioxGqhhcsF8p4VC2okkgevoHiZmB3k",
  "key31": "6FnyodRD9sjSSKKPKdzwCUnHfUQiKRCJpvojEkYiC9KgbeRL111yNprgsW1MbbQBQp6zSznCo7a7kDwKur99RTJ",
  "key32": "5ayZg5eKz7YqYmeDp6njNdgTES59ewuyi484EJ69N2nS9xMSxpqM7HDJGmAtNsHkySb7j72SjAnjLJqV9YFXb5Nq",
  "key33": "3FoJYeQoLfyvMg98KFpWHjRoyEe8PJd3pfpa5r2a58xcCUjYXK9BFsF8f2cwrcYZdge55twWZ8cUpnUbPe57Vman",
  "key34": "4Y8mioCAqdW5wrh7DhafiNnYiwf9TXKVmwDxkT8CE4cmraVRhCcKX1KBzwEgqjXi8c9mwdZyNz1XA7YmaveGywcT",
  "key35": "2XNA3T6guqT6CvXADKoBDZTD9jMgTtUBtqrfwHZR84kCdbwaXi7gbSoWUAFpKWXDg78B6ANn9uUfivFFXMSmmzd2",
  "key36": "HjvHZpbJU1HBoXbx2HpVr9aGeXc9SHcunHDsG9PUiNvERQB7wZwMk7gthHYPsYyYA6J8bZyhMzPYgtPKuRLALza",
  "key37": "214dAJ4mFeD4EGiNy3VixLdeQgvgejWwV1r1kMbGVbyWdfnwPjSSoJygnQ9wu5cTxsAEUS368BXn82UzcxBA2AAn",
  "key38": "2bmeeCPjwesPLyS5g31oXMLq6hEDuFETHW92HFgiArAKPSahCi1ch1o9Ft4qZ7gkAmjQD2L6Hi8Bdy2gew62miWa",
  "key39": "5oSHuiYw3eTniRjyxYcxQBMHLmhzvsFhNcveVheuvH7ctpCp8Cxk4LhpaLfMpfgEWDq6Y1gjzudn4NmDS1p9eEVK",
  "key40": "2FUMEX7F4rwAU9fe2cYpNcHAM7Q4YuQBWLCg38T38cFsURPeJ6SPeG9pd5XsDEmJMEjLvEvUmGFWjg8bURqLyEDT",
  "key41": "3LDvK2x4FkRaqgnSbqos6SzGTq9G8t2u1TBmBbXCeT576YyeAGrMNvUVTSF3XDuY2M7gTAcXXZWeGFfd2vv8hCmU",
  "key42": "63CE6N9o2MLDQQkEoBkvVkUjKaKF1cvcyrfMFGFwobGjmBSjqXoZTNKrsUHM6NooUZWRRcrjc3JFhi69KMZXsBoX",
  "key43": "35uNUxmFV3mY2oPbR11PqzWdRUbeig9JMMVrqaQtb4UZhhbxYika48gwEquu5LFyNUcJRtq4xmvSNcDyHPXYoQer"
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
