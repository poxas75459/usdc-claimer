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
    "3Ax4BGZYNMCjX8mejJRNVhqdMMifqVo23n4cv6yzFzGZmyqyzKnRuSiahNUeXK3Ba2YAY6q8wrKsNvpSU2SvStQ1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "43LkQHXFYJjY2rcteJq8nQbgVFr8kJ9KHaJajMe8qkDM1YVWVKE9aL4aBT9qKsYHj7jXDnYeVHCC3vfXqZaG46rj",
  "key1": "22sefJS8X3U7kriX6buzLLMvWuAwhTVpiXmc3XbqaA8pAdg3QpQU9YNumpg9NLsZG3xP5uhiWRha6fidPqgKHwbV",
  "key2": "5aGpDovCksTQnCwJQbzGaDR99jnHFtTMyV82HRihqcQLZFApXx7Nva9i1Scih1yqZhHyT8bqWyw9vZvKqEUVj81Z",
  "key3": "3zDJ88v1WXB9RNp7tZdNQhmQAa5a93YXMUrAusfBpPjoEtTdhPF6EN1YV4CB1AD4nLecKvBSjsav3m3LfEiMXw42",
  "key4": "9Eqykc4QHSiVVqrKTJP5KM81Sm366KtL8u8UmTVMfHcmKgbhwjTZDupib6BDPnSQhtwepxBKYEcgrSHSYZ8DySq",
  "key5": "5vsMYmMELmkiWmp8DY45L9fxkiW1KE5a46sgPsDzgzdSP1yi1hbRpsEx1q4BbAzMn969xGFFnXfF6khz4w8w3ZB6",
  "key6": "3woTDfBYChMMyvXdqaDwGG79PFXUqT7YenRSnpuqxhrg87ogVwawhhPj8QC93LaiWrfK4Umt8v1jB1KzXVijNH1X",
  "key7": "7numdDarqoRfS8YjFiyupBgAzaZXX28LJjqwog3VcZEGNAyNtRvgJye6n3Gt6MbwiBiG5sFF4TnxUZQ2ttPj8P1",
  "key8": "531aMWKMyFA7FZesyDQX6fznZFYb16M7TZR1gwUziLMp6CiEPhJtea77zyotGwxpYbNWiat5DWvCkZurD1YUTEnE",
  "key9": "2mUSrohRMshKvC8grUQFgKNFamtNCD3yPpthzay3ZRyCbXTby76pthNizuJLKe9d76RWVi8dJXgTXfS5tuE3tcut",
  "key10": "4bhHYYjCMLRTeNJmzEMn4zDVgVEwYTghiR15JrJ6kcSwkrUytfG7TwJm27GYr7ygxQCwLTWfumUa4am7p8moCUrw",
  "key11": "5AeZah4r3ZvZ9cCBFvXLBn4gccEx5Bnqh9vM7XJecogjs6fXqVn74ZXvmA87HRAATB12sAZaTyeMSeb5XWr4ufsn",
  "key12": "43BNaZkWANeWRDG77TMKBKvWGtUwagEVbmLJzrNgUuX264ie42ZgBU47VxdtZjsi8g64QLGd6v4Sb5JRGHLtGphb",
  "key13": "4drkYFAz1XnVe6vYQRMTFFQNRnwust1krs7habFrzfZtg3bvnE9aCHWnnL6YZUkP5Ruth6E8SrY7ThACTzcfGDZK",
  "key14": "joVPuriDA7kVmWie6M1kAYtkqRgevc5rc9pbA1PbRbXqTnmqqBSBg9CE2yekU4EtrgyTX9YRZ5UfWHHt61VViCw",
  "key15": "cVeXB6s4ve96AoaTXF58S1cjyqD33fjm3VQb7HswfDrGmm1aeP1DMpkDAbsNbXBkJYo4uZ4pds4M8hrPvTPkFXR",
  "key16": "55KCV6tJHfE77CqLx5FJisFU2EVyh6DcFTYNfZKKXeE5GmVxTuxfaUG12zsh5jocd6ry7TRF2VWaFrPbHhdCzMtC",
  "key17": "5rrXmCopnJKrfHv1AQmWXFVRgsW8C3JQyMYVto9N1Dk5CeJHv4kLVdoKHaKefQyWyRxuBywVYMwM4LV5wCVozv64",
  "key18": "4hCnBPyVyMruzDRR6FumHTL9u1e8Z7J6QY4KSoB8H8PrCbzXuyNPZWa7FfNg6XQCsjmuS5nrjMAvyepwSxCmsEcM",
  "key19": "27QN2yTfGtHY7P16bD21e8GjYK64qUR5JkEWxrBfDKvnuEGZ6xbwGuequsvcXHVYJVc3Wa2co68TgoHLWFtd3YrR",
  "key20": "3ZgGLTfwp91EhJm26GuPczVJDj2mXsDnot1JSpGNbaifpUNtJzkUjQSRufCriTRe6eyRw3ZigjwjJ5Z59ZxuiUhW",
  "key21": "3De6Ru6UbeyKUU8yXWZAiPeiQkE66zJd612cbt92Zqmsk52sU2SZZU8kGAcZ9uvcetZCiLn8q4S4ppLMsrJRrjT9",
  "key22": "2A8UWh9ePWqK3pkf8S6fanaaysVZGTg32rgCDfKJqnNn4q4A86ai23w34MsZzQVDNUZFJ9WVYpAB8pvzTa6jKgQB",
  "key23": "5AGz2kqnUfB6zLWzcGGbkgcTnVX6tEe7gtgCGf9Dh3C9MtWGTt1SE7jDCXDGcPtQwUWeS7rfeDg1gZZ8bmcRj43L",
  "key24": "46UdKk3R6PHHk4dEVTFpEdFZ5iGJz14nvP5i399ofBLtgMwQ6C2kn219ZqetANMzCrn5xQKKqnnAJemhpy7SoJAx",
  "key25": "2GYCfoTCgFSi7jLAiGMaG4yHxtDksQ7Wdjqm2mSfpBxYTnw9x83n25otPpBP1z9ECXNzXUwU6XoFqdSPbYMmpYbo",
  "key26": "3mNiPiDH5SkEvszFwXeGM9Q39MJJpc4F8tDhQLTxJTru1RjUDeWgSQG7YhJNyjZ12MbPeL1csjgbC4QYdmtEyB4K",
  "key27": "3Srch5AuWjHLThhf9HMityNTycoCAVSKEFeTvRVNVZk5dbmEqSqQN54jNn4EiMgtQna418Hde7EvnvWEu3j8irn1",
  "key28": "5n6VCgNGMWGuzE9MFH7DC4WeT4HTjXsnaaKAaZyh7YpRmjyHx9vAbrwp3kFhpcrn9ELb6FMYCS48aRHRbxwBxZ3v",
  "key29": "3SNFpt2WdNUdjtXbsFzdy7D7gMxPr9rkSCA4FGJ39HgdR3RspDPiRaiQZWoMSqJuSq3En63mcZ8coN3oGvGisSMz",
  "key30": "5PhuB7o2xtKZogSqSdMtRxFUiybXSAh7hjJ1hFGoM6zV3qdGokMUu8nSjRmbSfPGNssbvcwx3Pedcki8YFkgDniD",
  "key31": "4v9kxUo2Zq9guFeXmP2cx49HLbudBJMc85HFj7pfiEjtE5JxU9eCpyj9iVDuGBYRb27pYFxS19K5LwFXNW8kUwQG",
  "key32": "3ZHzoBJNC2Y5omAF8UKJeyzM1su6fY3HSMpSHeMqrLA1AbRN4vz5EAFxUEBGpoLG3nPt7r1KzszYF2Gz7W3SabHz",
  "key33": "2K1xRgQvx825ffNLy1jS4GHBpv3Uqgb4qZhwaTqr5sUt3WXUnStMm6FH3Xw96qA7s2gjmXtRX4WFQwDqpHVxBi3E",
  "key34": "4VcBviduH3asMgnqPNymFAkutXUJ6p3AbPbxApZp5bYirGcoauwSJzo21sGGzcx7pi7kujs5GPnyJyoVQyJcvaWW",
  "key35": "26M6pMYEM1nhDe9oxX3GxDfd2Yet9QewTT9USJE6Rq4UoQPVWBt56SxrCWUK7JuZWsXxKM7cEZyfmopAQtNrsFS5",
  "key36": "2huKybmu4c1i8vSgqd6zQQRSqQKu8o5H3HJDnYbWXzenAoJnG3BfDYtcdHUnVk4hrZPfXY3uE21t3S2Rpvtjm3QS"
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
