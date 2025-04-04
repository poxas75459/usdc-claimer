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
    "XrsrNGQrmGtdH82x622rKx5Qj8LpKSRw5H2R1xQMpV72zab5qQ7s9C73SfgrTrMAcApJ9XCCVRn57AesmrBerDB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3fnCAqbBdRLxnCjgBitVwGHaDFriZhgPnWAingdsNenTjYvN6DbDQ7YyHee8tQEzorHoFZXCBB69pvmfxhp5hvPf",
  "key1": "55znq9PmKzyBZpki87izGkiwfCfpgwFoJq3zxuJDWn9iLtQvRUL6PP8P9tAzMgshxuWJcFzeKJ3AGHRnRmsYECL6",
  "key2": "rDhHqZ1vc7W13GkCKqQq1oDFroFnEL9BXarGaUPFktxaZ99gtx34sGUPrkyF8iwhohYzJAKQ3hTWAnugUVVi8NG",
  "key3": "4bEnJgefEqikyWChkSnCb7upCPhkLPe3WjoeAS1GUUYmD8onWs7c1orrNVrs9FqRVWToibaxcgi7YzumPPaBofe9",
  "key4": "654rSjVuHVtugNt3KRd4xVm6C918Ut9e1K7kKjNYin1kVLD4Ae8U8joam9hZL5NJdPEQ8ufjyMaBghu6g6mrbd2p",
  "key5": "23JVoSW5MRvtFpaLK29tkAHpDDWQmBzb6scdgqijrvXmwXDMGuRhgC91NrQ6WDoMGbakVmLNACf8SoPjEXWC9Fxs",
  "key6": "3n4y968r7GYvfea7HE5TheJVboR8fMFbUqc7X76GQswEU3mAL4eUwoVFHXYLC4pYrBLLGvibcjXWXzEnc8YpSqw8",
  "key7": "3KrDwZ5RYAMo6xbNJQYnVe4BBcSUXyzzMfHDspRNGQvWSRR4qQxZFQ2vAJ9TcgXCcMmz261g2Ggx7w939w8dvW63",
  "key8": "27y4wfF4ywjHkriyj3vpw1TXyxkQGReNNnGbtsUB4krSdC7MeWR7nBokydzHhvX6vdxajfoQ5MD8hm3SoNKnFfn4",
  "key9": "549SQ8wTjEY3qg3srSeKGpPRUsbqQmWoyJ5SXj7C4GxkgpvyKB3E4ENwSirUBY3TMyzDS4gz4bnDNjgJFygZCSzp",
  "key10": "3cR8zb8X2c8AGJdQC7ykUzWPnWSC2bvpf8F56SYkuithWdJMC3B7zyq3jSx9UhZaPN4qgdXK84JVUNvymsgH3E3K",
  "key11": "37YczgeERpT5YhBbPjpSux3LyPqELzwk3R3aDH5b56huUAfPGosGBzzSqdCDqoc7aEHBTsmbyBRWeZWWjAbs7jNU",
  "key12": "2qEEiHQyMhgH5s55YqjTVoix5dqsh39ErrZKoo97u8qhFonrM6L8YRwh83odchsa4viNf5fLzt6rY9phEC8Ypo9h",
  "key13": "5xLV48sXa39GkJHJgHgmMRaUH52Qwo7NLJ6aZFkqL55RzfqKtAkLbsJPemZAUN7QQeYSNiUZUxk65mmNFyd9Uqy7",
  "key14": "3zuqvpiyeBhvwadFc8VnvU3DKNjfmoEipjEcBbUnnydAxUMhmg9ko4ZczpkazBtFMCpNm4c5BD5T3VYvk7DZ6Wf9",
  "key15": "5SivteMgbhyjG3Ppww7HQEZAtCP6j5Za7eznUFCekvwFhCnntq4ziBzfuYqSrCNGzANxpGEBC3q44Zt9s3vHoMLX",
  "key16": "3xDVnB8Af4NrVni8RajbKk3fNG9NkznDiAincTq43HS2UsjLxNnTaGmr9RRWE4thrFZzRCubV23mJUsC1qFfcKPP",
  "key17": "5RYdN9jGC2PMBrWYimHxurD4WMEyH6FtvRicnuQYso54c3oM2bfaKzkKzHADX9EkjWwwLeJKuttpNL3JxwoZBqaY",
  "key18": "2YxAs1CQTstjd1dBUjEzzaEBhpd8KyfbcpP9UiENadM8N2Hqc3MJQW15MceJU783ABJRfQ2jejfa2nEMUgbV5H2e",
  "key19": "5WBFXGhsdXuFtN98nanL2qJBp4cbRSdbjGfNz8Hn2nyxKByrWZfdfxNTCqgWeoeFPe1QTY3LM1JWgmJHBxXTFStK",
  "key20": "5mcYec2YztRjbYFQTDHXXWo8DAk9Srw7Cagqenz6Kz2WuoRTyaKBZrzSGR1inBve6XJndP1MPKuX8Ct8Hkry8c4E",
  "key21": "4wnpXcq9Y3H8XCpToidmmjqPtyp7WkLCgK1XoRkRiVgAc2VdzJMETpnM6MhGVLmoNA4n6J7Mx2Q3nabU9rup95Pg",
  "key22": "4tfQjRoR5U8DDN5k3Kj9XapsPzyNF2NANeNsvjZm97U4cDzEAnQdUcRCVB6hVdrC5dfjqyP3ZgQgLKmbHRTqnwPp",
  "key23": "cQNoV3i74ZyTaEroZoyf7gqfZ745gaswspzorvaaNS2NA7Zwfn9JP8QoZmcd5VPPNLvYKm9YmPMwQg8Xi2pTn8d",
  "key24": "2QJyRoHRN7EUEcjkSpKxNy3f3ww6iMPyProGqoRvhoEstKXXaiQ4Afg7waorkFxn5CwuTkfSwten6TDYdfimJRW6",
  "key25": "4tchk9d4L4HgdDD5586zpxF9AoFSjUYDN1qacZ8Eymzdpgtd66XYfNBbGTH97YgaYPLbpd2PxsKZKKMrZipun1HH",
  "key26": "5QffWfgf5QRwVdkwQpuyaNokMdojhDB2DCsiEunZApKQQh6w5tfhNgZCCqPkADjUNJiJyAas5e858S8quGw4zZst",
  "key27": "61a44ARskor3iQyLCmpqdsXArnvQnwWXDaPChfMKT1ctEn17C7BcZ4PpkmoGDFTkwKK114S2F3VZsBsHaKhTUtr2",
  "key28": "3suAHimmStLAuujjb6sH9PKCbvJczpJvZe9P6qBBu6gQPGJgCc1DP8WJVDtpTV49KauVFygcjVioM44yxnRDBki9",
  "key29": "2Kdv8tM31MttWnF3FJEJKRfSavEzX4fLCVHbsjkBKZD9wCv836PRu8h5jMfaNR6BEr5XfNtNd2D4ieJAdNH6FHuX",
  "key30": "AhHp66Ad9jRXZkQQn6WmBTH63A8Lvd9Ud8ZZUuwy9SVv4dSAfBYy7TTZYfjAbkmhYoV4gSYC6zCHY8PmNREABu2",
  "key31": "3XCMfnU2ftAomrmReGsV6PjReMCPBPFYq4EZTam6xdut86WgCwCtydQiiNuDLotEUQp1ZE3BMcJ3Py7gsaHv1BS3",
  "key32": "2ujM7F12fxoH3a8nZds4ZMNt1NP4CqhxpLrc1F5pRH19jrKiPzLfas1TGri92UqZpBDwkH4g7PJWiUrDD48Y9sNf",
  "key33": "5YxDMeEnKtgMw5WZAQPr79uaMCAppBY8s7ng5ThrqYZgYhxZssHtQgf2mhkph5duMakzkAmU3j5JkE2icmNijdfL",
  "key34": "4iZsAhzsGnN9ZQshGCocKqJQFUvvga1p4iSv7ZstxQ2f8t9uUMv9JYB3mGzJNZN5swwMo5tY4mHEnzCA6kMouVSV"
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
