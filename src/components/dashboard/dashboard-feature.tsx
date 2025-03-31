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
    "3VnjiTsvvksx6TnWiWnaTj9DYMyLd2YBEUN2stbxUjXTgmnosKo8mthRWfHBXmvxT5sk8nSLuwQ8jJsDYr2G8J66"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Ezcs6eVzEhBmXuzLAf5eS5mFBLdj8nTdcLMEzCaoN2rBGHTL3yRaKQm25pkgxvYUHjnfzY9EB49kY6wdRGS5CgL",
  "key1": "3JLAhqbuwEtkrxEfinMPT1HLm12QWEEkvNHb7ArVHToGs8jvPrw234Zm9MZgUDP2pEFQP2mU6GTE89qqpwGx33LD",
  "key2": "3KYaYfaVUpwQwtpd4GR7Fa19mBZhgryhRVvHqhcrj8zgN1rGCUtHLxLL31VUrL93EHvzLokrmhtJ5q7Y6SYpSJ7t",
  "key3": "4AiFWXNSdS4GkJLsLef7NXdduR8hREa9dAqx3Asn3QtFGEbJpc8zCLnUCHN8CEbFQ1SrWx8tnuDDmwoLBqfAzJ16",
  "key4": "5mobU1y239WKuaQV9dffMvRGCPtv1xsa3hFxhhqWBLfdqrHRc5LtVnGYZwRnww2xeTvEBda7fxctNZeZh1WC2mws",
  "key5": "L42E9PVScgdQT3GG5xNEPESWZYEGetDnNmXd6mweb2djhom3FNEVm1MNqEzirBu6Vt3SbS5bAcE7Db5yrnBnexg",
  "key6": "3c8yRSnhhYaLyN1uNawi8fo1z59Tx2ozgdr5dmP2PfV6H4gywP2cY8BEck9tgGfs4EPFH2mHqxPgX3KsxRaGYMRY",
  "key7": "5nceSdzKSe3UYBfGwVM7eMXuyHyqQoW1e46S2P87dSL9oaa6DaTQzTdWiAM2RDsmCRnig5951DuaJeYxMGpjC4Lq",
  "key8": "4vxMg6CKH1JX3zEesytfLTiPNZK7s2oknF4vCYMEEzKkjJZudbToPkRSjCmCGgEqiB98puBPdnr4yFuQTEA5hSq2",
  "key9": "4N7XypHzmVzJcXJTUMvLgtmSxRkKRkyNSeq5Eayu3ejiipSuaF998ZajAABJP4DVDwW49hZfZZV56MxTByiGUEcE",
  "key10": "9BWTwXTucRzswMqJr4eDHSgmddfGTbcfwPbt4Lvu9E8XE1N5jpjFdFD8u2uWYgTkoFeVY7MkMLKgmwCsGVkuhbR",
  "key11": "5fj5MB1LRNVLNRzQZ6PMUQApepSXqAnM9vfe28Dm1JTVKG95yU5J7nToDNZhRZ8jZfZ6TWhtwbv3FVEg8mhb3SXv",
  "key12": "CVq4CKFjV9EDvzEa73JYuJ9NAqVmKUvter3H1sAppiseyEHkWDH6PnzUvCKHTx95Y7u6xeZ3xn51r64ZJP1PheS",
  "key13": "4uVSrVrXSxbP5tFgbNXHuPjTGHyWdNo8gwYWMXNghEASLSYcqKzpb2us2hFA9FzpxfBekfUEZaiiVzczTn3bNE3V",
  "key14": "63R4HhrwnLLREin69PUjEV9Na5PtiuHFhKHLCJoshX3R5Dripg252neLuSxasKzyHhc5UTCFjHXKqNamx8SDx6VC",
  "key15": "5sCfRqwvz1hAPs5QMPpyXNW2b7qWTXUkWB41BgjjB4oeNxhi1V3qVcjqUp42vXySp8Nup8qh78GmUeYrX5aVdQzW",
  "key16": "jmLmMjcxv16iz39RbqzDJ8n9TT5eyoTjSo5hECekdMEuJhHU1RrZt2sTRXmFUtKcANa7us8BgQJMt4EcpDDB3in",
  "key17": "tMj7TWvHxwX6sPWU1LkFjY31azy93q2hfUGcEwd77wqvGAqHjimabCkQiYmqRDiKgQcandEepE2rMDvBR4R1aXy",
  "key18": "4oT2yTVKP4DFc5cjqeogBu5fjCBtKY4GqpSpwxHNpwTSmw2qwnXC7sxoPoWd592atR5ozuLAsNfByw3ZH1SXMM9M",
  "key19": "4YU8VYZQbYoheQoxm23xpo4KH1J9E5vjUNW4Sz48kYSsByhjWkStM3PfuhqPmmSBRQxKuePgrdhUtRXzRs18QWXU",
  "key20": "5oSnhve5FWX8evQkJtNmaq76K3KMJG9GscrrtciZf3vuLA3LXFUvkHu6WRztXnUCSbCn4k7UwvUSb8VEykdW2EEk",
  "key21": "2VGFchN7JhQsVCKZDxjPiYSuUi466moaMgo73RfW1AAGvsvNg2Kba5hPZNFzPM9eEi9C9zW2TKJgoc6PX31Yb1Hp",
  "key22": "ZbGyrpzMDqr1mUaRN2es62UTu6adnYmne5ahH1egt2DHfpYrJLp3NPa8YVvdEjkSrxehRrcYG5VshQz3otb2Spi",
  "key23": "3HY521RepQ7cpY8aa6ZJHzGhtbXUbn4eSAVF7TqfnzAAGnP9H1M5UuuK6fVjTg8pcxTY4zADeuULFDj7k9LxmhXA",
  "key24": "3inrnNg5p9scsF7svWLodA1h2Kt4gUcUkkJD5pAKG2pUhPPPVFz7PYTyrAvpjLMPm5CsZADGEzab37cPupq4RN7S",
  "key25": "5qayxMz1sCV5qkmTEmSk782XNhtDuL7Cm1ehsGx4NEyDoC5FE7gJnM5BNY8HsLKdY41RV287DfGivMVRAqiFpbWP",
  "key26": "4F6bmwTGF9JPdBUQDsJi7EUcJUPEGG7AEh8ypN7zeMPtV6NjzykB2Zp7qWhT7ToQ3syDRUFimHwcKXQ55TTJoym8",
  "key27": "4nnmgkTUfTaFvzAKufUngBtKFSFFAPU2pAfPtvsvZY5sGscB5SGQ62fAwAenVdLqnBkCEyfxS1neML7Qx4xQ6zmK",
  "key28": "3frBzHDoGV9x97Z1utvcQEdKj7Rf7TcuvKZ8cSnYrPcAoak628Qu2zPBPSAmZNutdYvQPhsDVGghXu2g4h3LSH1B",
  "key29": "2SqrwEHhfr5Hx2T2MuD66ktuhDfMYGXi4dL4ao5JEqv2ztZUVJbPqPNJJcVwypfUv3WqeogpQ65NwA6PmZJ754jj",
  "key30": "dBh1Rac84qNacRokec4hW1Z5uhfUsFz32rAucRtUgFcXSD3f1JCMGwRqRbCtV42zuWxuo8J668Mp39e8VtrU7UL",
  "key31": "46KEgcFn7YvLs6Lm9LrY6EJZqZaLCBixs16yZgCqovrCAmJ2NyKhQh1TdTyHULQRiZYbk1tEkWqXuYg9sHmvYbAt",
  "key32": "U5X6fAe7QFbD3orgi74yEqqUXtYizReHvm1qKQzNULe4LcdXQkNRRcC961tNLTiipaoDk18j5YM3oav54ab6KKp",
  "key33": "f3r4YUMjWBETKg1SAcWnKWWqJcMncEHbtA15k3oqkZSQoxtPUTHs8VRdy1sWUMNZTfCxpakEXo1MiBVtvQhzUAH",
  "key34": "PZVqFNdP6akyN1KpFgazipNz8vXCvauM836s9Hd1znZ3dtVtB5udRq3n7GECRDBWtvc7FSFkQKhnt5NUBmMZjkW"
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
