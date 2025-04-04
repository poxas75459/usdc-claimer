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
    "5ZZ3CnRK76ktmp76cWzrn8Re8FDTydhFuHDcZ6At5QLkE8pJU2XHXebzMURnkcsAyRRCE81xKT26LwZ1Ht9W9BTG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3pczb7E4MTAbzddabgALLFWAKApZEt87QGQDKCGZpDpDAApRCfDaU7k9emv4FM9P7RgBGEkgTGPXY9K8t4vATYUN",
  "key1": "2aoyQRcsUsUxueLFVrtuu1ogXiQboBS8u8GgzNAJfd3E1BRa3A2vzwmwd8cioHPk8W99uck3tNxbHahRcwmriy32",
  "key2": "3NawYWhqeJA6iZaoPnR3tQGrhCg5zjZZrj7LmLMYDApwJb5nPQcqbrUZ8i7PPL6hs4mPfuZgWJU7Nob2bQRw1Ypx",
  "key3": "2st1jbfki7mr5pFSeQxJNTwpCjSnmCNY1ae9wjb7VeBYCgrSbTxAxzQ6xbfqAnNXdLkBJ6bnu9tjXymZbWLCk65U",
  "key4": "fA92UDCxmiroE7dSsPnsdDv3ghgsa7d6H23iF2yWt8paq7RYt7eULrCm5JoixHbV7WBBhmUmP585ueqDhTFsAk8",
  "key5": "3vtnDR4KgfnkdwoVMSLXmwgMKeb2FPiGusmFhJwv2VRiTNPZ36rjLRMTxaiHLnAMtFBgcB64GgGHv8EyhqCxX6Ha",
  "key6": "537RKdrjtpdNFJCor1PWg6u3k2BfGuvKhoUtEsHXrpv6PVA948Cf6y3X9FrwTgyc937oRFRf1sUFXABzWKqqUs32",
  "key7": "eGCFB1ChxuWUMYSAuiTSZ5B8CxiYtEJs5jwuVNwTGNzfJc3vMZmGizR7hKP3pjsAuDaUAfpTBrPSPTARgBytg88",
  "key8": "LZbhXyBSd8rsTrT2fMhnDwQrSUDjQHDzJCt8FJWpCRGJfb4noSCbuKXFfjooLegiK7NKRfWUa4cqKV4xrSgevAM",
  "key9": "5JeXzdogyq9xUvBhRWrkG9JFR1ytP4r216FU3V77qwC1687GYcpwhoJcbSaLFJEW2QeAJw5fLEoDxd2wiRstw74b",
  "key10": "3nQRXGpA3M8MYTBZdNu8z28uDjt8knKeqEWaXkL9wgVi29sx3dqDqheCp9Xqjbu8eoTcJkLqhWxYpcc1vaNNpLDW",
  "key11": "5dNxt18fbMhAXH23YrK767T9jLzGnaJM326fvg7j7MkZtdTYjpihYBf8HzzvcspJZi3ZnvjtXWzKLuXRqVoGSjiy",
  "key12": "4xpoyA1DCUTuq7S6PKeQMYCuxkCTug88qsbeMhDo56XKJCLhSa6vxgPkkWH9MNTvz3CWXNtkwk1QRPUqoU2XP4Cj",
  "key13": "2oryFB3pYTivdocUJcPG5wDoxkt1yDWZzPhC4mXYEkE2Zd9PxYMTgadd3GgyhPLDnWuCSF456H51LueFzMadm9vx",
  "key14": "wmJJLMbDgDiri3NcE5mvMQZ2hg1zaUCwJPcNBdefEv2eTsCfYXfHY5WpgGtwoE2LLMBzghkyfK6kmdshaNse4yQ",
  "key15": "2ymCZfUeE21z3KrireLW8HHXpAHD7ws3BFvbpQuDzVxvt1rp9A4thGRzhdVuA4m1vKRfMvE8P9hGfZkMX6Zoath3",
  "key16": "5NeGwrVkXUEiomnQLVJJxEvdvNTRLeXkRDCpa7NLFAUQy9sYEqeuTGCdR5KDcxiYhxuzNLmAo2L2gNd51WHWJPCN",
  "key17": "48gehwRjzK51L7SioodBQUfmnwiKMzSy7a4K8Pkn8weR3XXns7RLjUB3MnEQeXypjWQgndAyotUvdb9HddARGF3W",
  "key18": "5cZD1rn6ovAxjJqSk2sfRc2HJBYgTfE8yz2cJ2KbfV7bEAUczxZ9HjpddHJthNA3Rbu4EiUxA3n4CUXqr9Yp8c96",
  "key19": "5wFqXQVde81v4zt6G5o9uwJyx7JaAVwb8ueMQAzcQPDdGdBjtPCvMKiSkSvoDJZ1d2AVWP3apmxddoHrZd2JgYMw",
  "key20": "16iEgHpoap3XfHW6r8LaiDBHUSZeHHMbL1Udqz9DJZuAftSC3qtmaDsUPCnxm6WeAQjFFwumCCgG9AsMtodhmVb",
  "key21": "542YCacMfHGWCE6NmoP52atBGmPAAtDrLgJhzHHHVmzuQUy9LsxSZbyVaWeHkPBZ8tRVzaKmzyvPnRmWkdzCDYza",
  "key22": "3L4ubtW6EeDKWGtiXRvE8wW9arCUhWHNL4B6oPsud96yEU8UmYMbe9Q6Sgahs2GF3zh93PfgkMA2Z8ZVWbH6C9ec",
  "key23": "3rLtbZp7oikQjee4fpXfi9CGBHJR2tWJg43TxfXVbXbdB5JpkxExUsGmSdw33sBhs5SbhjyK7SaqvHoKPamwBmtn",
  "key24": "2zuy3n5UEgDbHz6ipdn8c2FdQYTRzPLJzcx6osAcpnHJnnBgx6PZBmv6bcV3oqYEaUNjycTohaJ6Pkkk8Wxyc2p8",
  "key25": "5B8uVWxJhNay5vwV2VSsXbJ9LYxX5uz9BmyMnbwBbJmrxLur8SNu6PCwQMpMZbChQBFH7Cv6TCivE3GqknbSAgTv",
  "key26": "55vcrWkciV4tXWnp8DbJDTRiSNtP8AMEq4iTQqgkyUXKZmwVsS7E5qMujJtuVB79Pgjk6VEQRDBReKTyTNEypkcR"
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
