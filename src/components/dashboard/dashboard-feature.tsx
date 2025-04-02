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
    "63ShuBTRa9adzfXdZZy77dpUjE1HESXHmAXT8RVgmpeCGnonWJND1eBbDyk5o2o2J2DTTAFojSZT2xT6oTTTPh3R"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "w9wUEi4pK1GDFhRFQEPpiU5ve5SNEaVoYyte9eJxm3Yia4Nniug7DYd5kpzc2LfwdKPb7JHSaC8nuES3khwAtPo",
  "key1": "4ZeY4kCi6smCWt39xv8eCpUoHdxy3zEyTNjMoh597GTQ7Ld286393wKiK5a8s8iJNmry8myVnHN6ssDKcV3fzjya",
  "key2": "22Zfqjeri7btsTnMDAjxLuqWU79N2tKhGLbdxF4bDtSxTzbCvyu2UXQrqVfPe7q6U8qWhDu32rJWdXHXtc1MyvqE",
  "key3": "2ppGJ5YMN7ZNjojNmnqCHEKknsX7LkdVGDf62Dpc1aKV59LBDnZdPRPGAMdH5AiPjMowxEGaA68TNSBmgiacAy6j",
  "key4": "28qSG3ZfNGkwHdkZqmMqbQAX6hoHiXPPw3ogfmvKpmw39mZx2FXbRnTTbDhuhyszujPtaXkVaNzAxQtjyCo1iGRU",
  "key5": "5GUTWt8yXXZjkyKaaa5nPvekzzyNfWUvbQxhmjRxwiS1YADGxRoCQkJSd4KZ1XCPEKCF4BD2KGfMosFAWdS9pHns",
  "key6": "5RpUQFVxxGMbC5HTctP7rgwdCcr1CySJFZwconEb6DDLRReBcy4TyU4nsRaAzrMnUqTWpFGrLndsJNX1MYrXL6Si",
  "key7": "3dEseqpz1CB5yWAW5BZ6k5EFdRZX5TnhtUZRt8hrzLTw7vHPHMs4HXELYX8MRDKfDMddvfdQC1DzPoe1ox7Rsgmj",
  "key8": "5MnuLx1Db21Z5jae4WQpxouedptEGgLNY5QGCEeipegVHB3RhExJFUqn9b66tKDrmniwZUyar2So45Yn6BgAmu3z",
  "key9": "5azjMAyGUGStj7fbyJNnVLVNTebyQmHv9VWZJSKnGaAMF7c4wHG7w37bKgRFqozpkLXVbfhWdzUGSVfJqZaPLDZh",
  "key10": "2b9BLhyFa9KBuqQspRMBLwm1ak5wGDaX3Ac2ZghRpuuEjpbVeiteCe1z7stgAhZXSe6jy85fXr27E7ASj49wbVSs",
  "key11": "41thKvaFwk9g4jh7mzzLMAJPKx3hB7aPHUKPM5si39rNj7TBkKbXcGq5HrYeM5KUPpt8vPVTYA3esnWqydS593u5",
  "key12": "4gS7PopTEUZDzPbJrrPKHH9zvBXqxpyRBEthewidQ58qYDmjGzxYokvnTPcvroqBr2YttRgAhwPZpcovF4K2Jr5A",
  "key13": "32TUFiu2SV2MbvP3NAsNM2Hri3EVMvTXmpDQKKQuyW87aTS2MjvAqQCw7otNjpSjcpPAFatdFd5QKQCyMzN2cuUq",
  "key14": "3DAvsEFqJp1XtnVpr2ddFnZFHoHcDqBXVhMT9cPrV3SUsJetDVZyayQWNP5YnekEY4fTBcB42mmU3rWQyAFj9riJ",
  "key15": "4LGbrc2DWH3Rb5zogedTndR9SGe9K5NkJihWxsX7zWeynTx63cFuVs1Gg1uahMRWqA48dz1ETBuDaQD1Hppu4KVV",
  "key16": "4are6HhCwrHcsNZLXwXdeTs5yzfeBPtYL1ddkbB9ZewBrYxZtfiJQGQi4CbNusZGpdpSPHohwkbB2PzUAneXvWFs",
  "key17": "61G4W3e32UcmpjxmuzsV5i7A9vnW3veXhcLc73sLsQnusQYfkojJyWrgNaSXmq5RzrAFNeP4tKfdELooEpCDeJuL",
  "key18": "3AXpfQcjA5y4m3zvoSzeGbzgKThWe3Td79t65Gr8Vss72WdApQsfTstXiQyvNsy7cgVjaR3RDYBxgCGN4FwostkC",
  "key19": "5xWAtmJuwKr4mpBvv17u4H9KWtWQtzwNTBE9PD3tzV4ka7LNcpUHeAur9Gugee82TXQabJ1ktZHEg8bGBfsHxz7h",
  "key20": "33wAuC5hEGTabDDHyRF7Bmvp5RbejW4mnFoZmPDo6MaxzEYBhuGbg8fktpMMoRLkXb485HicAXExJF8qG1UbM8ZK",
  "key21": "V1hNAj67FBTH8dEY2mGLhQfQy8dyhTEdPWpPjqxdERWBuerhb5R7WgUJ3YkypN96qP31NKSyJeJ3YzoWeR8HdyZ",
  "key22": "46M8JVHigeTzPVRmnhcmx9L1RCPpqCJGeZ64f5FrUwjH2X13zU4L5H6MfeB3rnNtbydWs9tX928dboKRjfPN7o59",
  "key23": "5E1BGqXrTY4YL3V5Cix6QF3txu6LDjfByVPaCGwAVH8DinCX2uncrbymWS1MRVBhYFt4hR7uCoHQcBfrcdSWoCBj",
  "key24": "st5uCYsLb7RNuX5TuetgrWZKCpKr6H2GnbJELybjZXio5M3qGnw3PcNCVKFJ54CUyuqouFB63C1giN8kS2cj6Fy",
  "key25": "5MUgesMaKA9oqGgShHam8qQfxc4CFMKjYA28LwZkTD14Wo66aaBFD7zPSQ71K4cfQ4smmE6FnWsWFWcVjTYsHvVk",
  "key26": "5roBGnUVLcxNEg8eTSygQ4FYMh9XJxGnZZv5RBxDsjSQrHcPEUEVEXCraJxbbj4rzZ24RiNjCqsE6FoP3pGhn5Wp"
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
