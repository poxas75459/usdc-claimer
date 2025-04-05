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
    "4mpq8DfwG4t7D7AtyKwC9z4aSoNXiznNpCBVN87r5Mzdd3ptP8vvDWfdDk3aYkqWHbSyFLeG1sjZS76bTnbYLZNx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4MfSpaNRQHLbg2XWNjnqRfhZKAHDRnfQwgWkQFotNvSNpXqAw2MbheKwTG3Ct4JNxnGcKKFS2n68kkNPVtAN2CWJ",
  "key1": "4AT4xuVFXB7Jpo83kLbMJDNjUuw9RRGyTCR297U3u4xh3GbtGojuHaFaKpXEz8kuY2cd8meiLCSp3BiT9EHfwzhb",
  "key2": "32Chdqrdpf6nnKfvtribWJPrJX96MUWkaxJscpm7mLSnCoEaBWw3X94dQZGaw1r8p3Ajw2QjfAYycqGEcqwC2q7y",
  "key3": "3ZuPumrFzujkTRPZ5XbonrAu1cJTUZEEaMmnqGfYmygy2rEpmz8qFeWy3kao3dSQfDwrmKRCKVNisTS1sTgtyafW",
  "key4": "2d96KtLgENqQ1nZdPn1LGuyEZHQGXCkPaFMcikTzsN1DVDiy6gMeSaGyPDqjyyiEfrxdLQayNkHSSiYcAv2HCTEj",
  "key5": "9ykhbvWQpou3TYA4PC3nbXe5b1UJEGfnokkw9hDX6N3vSA31pHk7ibGgyL69h1nn5ExFp6ws8Zcs5us5RaAtzzp",
  "key6": "TcMR25scGGuGZwhk9T8G3csEq1LnGdpKuUYYYmzquTCptTwTLY8Sz4jJMrHFoey5mcfzxRcB6HZ8TifNFJudi66",
  "key7": "2fe7ShBjFZ96HyHi5EUjqurw57ovVqHHbu97KSSTaTbuZUeo6TVaEnc5EVN1qmZbtuWfMdM7QJPiqJUnjvusZGQJ",
  "key8": "2MA9KYHMecE4LUDAvt4LwL1TyPqs2pTKRBBDhxPvCskuy8d1PPGCj3mhFmAMY3P33p49bD3V11uLnGhJRdjYYiDo",
  "key9": "5WV2xxCG4M19YUNYSWfhLnf84XBAwTLzamzb914wp4AUa1L3i7gSBPqJmTPoYesDnX65jCCMJFb8EVDJRN8wSdd4",
  "key10": "FAV4XwQG894tBoJRsrRCUT9Vm4bLZa2DJibfCi1oeTvBEHAhKXz8DWxawyREAGnfdFnkuep9gw9iChmAfhDm7M9",
  "key11": "ox69yi1gAWaKoaWNq4RLyFmyunhQ2NZkXWZ96mMmViGE5BdBXkE88HeH5gL8fwcfnnNrXUMiEiDyqog9tB5q9BD",
  "key12": "4UgE8mqoGmgkcup62wUwMm7CKWNeTHeYVP9F1W1Hpx2r5vzUJoAvkX85x4HXrQjg9jX46VYB3mwxL27ZmYDWG3Qf",
  "key13": "5SviT2qLHxzNfmSfMV3iZGBftWxkuGetRehAuhJunL8r9ifkxCfez3SxiMv9KP4JfKAKzkr3SazyvYBarQXfmipx",
  "key14": "3TECEGE4R7LGTfxJVnPjCzBjm2uti3gVJuqqY8Ahu6gcnKuCMCMtFbHxQEtJRqrbDC9MQXyqmmZGDD84kYyyjR1q",
  "key15": "4NeZgu1oFPcyQf2jRKo9pp4pXBLKcPxVEmpx7ohWVFa6mLS1fUNR9SPbS9vTGaU5JJ2yUsPjprFK5NWb53h6DcU2",
  "key16": "4jQHoamv7Y2DCBJYUFcw77wQFSrBTkqQ1cfHH4qW4MV257xtsQ74c7dkhwX7Qahx7YMPqTrap36MWk8cRKfxezwk",
  "key17": "QqSYmzwAMJx8noBgBqZzemT7A695An3yvRd3Ck3EgRM1NAe4MPPWX9bhE3XELFkwr3mA26rr9YNoRC6AGLYUFJU",
  "key18": "48Lp94jLeXd2dMC8WN5f5fxHzNRuj99u2iLxfB9Jf3wRiDsuLtha9RV9jBXF1TB1KQytzWvBzHxEUdFvX1T8TUEV",
  "key19": "4naJyxAWa4YK4yjzgvTZUb9U72jNMGbDginRV4iCGLRTow6XfEquozEkvCepMdrfebEik8bukh6N3nSeBBBuYM87",
  "key20": "58RBUDHEz8gRBBeK4jhtNQ4ULQfa5TbESipJAy7Msqc3ahNnUxBLMwoyarLpDVKTchbGdcht7evv3joZSjHv6tnT",
  "key21": "5V9YxAQokisoVzzLvZ6Sg5tsDhPtgzEuEFJmxp1Pf6gZso4kEmxjMuPevKQUuSFiobAyQDYpT6Sa184Rc4952gP6",
  "key22": "4f5H12bAz1tDrtxcJupzJEDjmp6QAJSQ44KxfHDChxfvjMjnkwBjgiV2HGS4Dfe5tLtvJtXJJ1BTukkoAK9bhdhd",
  "key23": "3GcEEuckZeZo9vEDp7SNvGGVmKs7UYKMguqBt3Y8HeuHdQG769Z7m1qCCnChwCzE5Hz8cmMRuiJuGKy5REFSLxSF",
  "key24": "5aZ6ff1YeLwQXdp8b7BDet4pRjBpFE6KFZmUC5MQTgTPFfDwQv2JsDUhrKh2wLDMgeBtgpfbw4bvkLqukaKp4ahK",
  "key25": "3sZ94UBCPzo4ngHCeLFxNYZ4C7hh6zpFzRjFVvq3DAyPAbxs7S6Bku4CKESfrY57rt9YZoiaXrHuweFfJQZU26Ma",
  "key26": "5g4p4wpvruPLKFjZuRFRWiTwLYiesZZw6nRhKdqFjZMM1jXtwqMSx2x3jeErFKZmQw9cNzoATbV6DEdohbsZvinP",
  "key27": "3DoMCc7uhRF2emyPdEKJsy97f6KK7E5C8CsBT1rK8HKWCJvdL2zx6zoy8TyHPHRYsqSBAJ9cTgHshPJp6f5XqJPg",
  "key28": "5TVRsBsN3LPfSRhCq7JebuKMdseTpiRZHLQT9ekKM1wD2nMYpQvx8PZX2GZTtibV5obYCyhDFqu1yZjPzygQgLvk"
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
