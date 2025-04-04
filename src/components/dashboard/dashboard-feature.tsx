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
    "4tD8wSd75sgH2fGrZWJzvfagogE7psZ39oT13pHY9ov4sH1SxLacXuevh89nmpJCTigNCcZdktf4byXwz7VZX1Ua"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4djUeeqEnZgnV7eScrcQVefYmvSTwGZyNwz4bJcnwxsWjtPqpdhg12RRVur1nP3vX3rrF9K3Z9Ye6HHR1iVFhUrc",
  "key1": "2Bq5u6WWqgbeo6vEGMnSXzEneQC7UENcCDuP2mGQfGuQZqnBvniFobwuyxU8pDDByXge4reN4a3Jqgv8htyAsuxN",
  "key2": "3pHe6nimkeNh1EcvDjRb51H3XQrmdf3Ab6S7RPPwB4LHo5PkAQTNiY8nr1DFBtTMJY4H6hm6TqjwAdZhM7iWcvvo",
  "key3": "4eqfDKS7NioW7gTT9WnQwdLZJJnT3SXY161o6vD9ASdy5msDHoENdo8tHM4ErTMbog9AxgdcRJrN6a5cZ1jG2mNQ",
  "key4": "4hzWXLz3ruRATWoNTkNm4E63inDztfC39ubePE7th1AByq72ML8RHUuMZDAn3RXi9hoG72ebASa4UXKGnasJSRKc",
  "key5": "59ZpxvoVTwcFN5X2QzyTtG65FsSnBoohUa2icnup9TaNdDzY9Cdrizm7DidJCpZKysQ22MG1VSsfwXBTCupWReEw",
  "key6": "3hc4vgYn1YUfFA859Eyv5rybHm4NkcXNjarwj6Xsm7ZqG3QLj6A7bQ5SgNYywGNvUpxJ7ZHVY9TYcCPkY6odpULq",
  "key7": "4rk3tVKKoZGZijv4gts1f6TV4wmk9QrfTKfHVDRXyt85id8dUSDutGrBCU6AxC5dRTRPyQ9aY7QnXCdN2rgVahCE",
  "key8": "4jW7wsX8wHuUrUC1XqoutPft4L1SEHXPSWLT47xNDNCEa8FhTCmHL6JQcsUvbFR8TR9yDhn752HpVFwahHxALk9y",
  "key9": "JmmbPe2vvF6KSGrGUcWBW1V8Ro8nbrEnS6SGu2jx1Q9SG9n6kG62HcAFk7SPsJzVXr8VoWj1Tv2dAyxMDQ2ADpZ",
  "key10": "4ig2CAWPh6UCwWeAYi9Jc6tZQ6HLFiNPYATPn94t2YGmPJ8FUkMNavLEhzPBYcoEVGYh3KrEAEtsUJoydkgiTWsd",
  "key11": "5Xy93oJ7Kxe2qYXpGWddGNqCkgEcbetdZkgiV8tPw5VoDm6zPy8xdmPmhoBmfmNbWMfkGWVFVaRcE4oed9UjtX4V",
  "key12": "5Nz5RLmWAAY2rFz9A2g44wcsNi3b3k2w7Yi9VGzMTw6BQiCxGqHx9GQmbTHhrGpugHKY5mP75sZ1zHf9s8DaurwN",
  "key13": "4jA4LUnrBaC42JJrnb9nh2AGdnhY7eztRfwuRXH6gakGqrBNwaCge58HHz5Lzbh7M5dDihgStYxiR1Nd16Dh6XHM",
  "key14": "3x9AVKZWWQ6Txx3BL32XrzNC6vcR31vBcjupCpdEtwt6CiGkX1UV9utQFuh7NbZFbMGpt4Gfo7Vi7ZxcGpHLKT6t",
  "key15": "FdAkSVQ5yWZfDMgWdDG1USyF66ZYKZJXzs7qczucAWaF7NASRLDKTWhzuwXnbMVrsjrMBUJH5hMfT1vCKujWera",
  "key16": "58DxWJ34suuFTZRmJfQ9noTNMFkVysDrkGqFu92QT8tULtwGcVTKrZ5E8iuEhjfquaLvgRAYMkoWdbKLFVdP2ufW",
  "key17": "2xUxRD42S2QVyk4xtdfapLmhLbXeBsXoKtjeF4HVXYRELsjj795XaYJfKkNvU7DBoWJDJLGjoja85mcfWscyu42d",
  "key18": "49CVMvPP7hfhag5FTv8SGLAawRXi68czWPBJiT4Tq5NUEZ6T1JVTPbmqc1dtcmxqnDDoc9LmAFbCkKsx6hhkRnEt",
  "key19": "dBjgeXHQbNUQxWaTAgT3e6X9124g1TtdmHhsUjoaBFtvqdAUA2GRgiwtr3tbmcebDnUNgp98Bdb3ApAy4ZzvWpP",
  "key20": "2RRZ7MpkxknnpkKypahb1C27P3EercbS5ngYdzEA8KvPhtiBZxW9vmVGf1k2CGZg3VyFzRECjaj3fXZr5Nho5EiL",
  "key21": "2RdPTdQTKZAZdWtVeUPaJfwo9udaEzcjukLHTD2zeVruNTzo9ye8ogCKRBWWjT9texcgxfox7agqc9nfpCShtoYA",
  "key22": "5Ha7wyFKvV47zyR4cJyF588TP28U61KAPa4cS9g5yaETRDAmdmfFkyr3zKcSqx42AMExCexDFvsTR7FwnsUPWKwj",
  "key23": "3nDKGCbNLTwitmzxogfGNLHfNZv9CcX2pMqadF1L9xmtUruVGpHEvJexxDmUYG2MfJXpLJ8aWsjQP9HNoRS3Q3TA",
  "key24": "5kELjACdrNqFzHDsckEs2XLsaXXh7E1b936G1P7UBEoVRgoVhZR22CaHn2RkNTDdxW4UtJe6UYD1BKzUHRxRL3Xg",
  "key25": "3hkbFAqRwdTNhJPYYMdccD2XqsStjXZPJCTN9Vm2whMcZosyzny6Jckm5jGrsmbS1dzLUnUnFbvJwhVmnQj4zc43",
  "key26": "5aCR5ZxDSFNbThUFcpPVUn4qANWbJBMwoSfHrHZKM3gdC8uKGtyNPua6MZdfRSxdqtRndf4NJBwK6KpjGT5D2fLs",
  "key27": "3vy2zc5kbuoAcrpRefEuDJwSAwVfxxvgCCpdTK2L3Tgf5PExmJeBGyMUM4CB817LGx24y4p1kgBdmJrM3cxRgBXA",
  "key28": "397CbgveyyKpx9WpMDKFnEwrCcjfffVwqXadjtfkZATgkNguqLsVT7uEB1EjZYwLXLvgQCbNcACqSVVqjWVvxFXH",
  "key29": "2FZNKyhuYXtx8JQyRG8NCMXLi4cE4ZT2YQWfanBMViaFh4kqqnCrFHRu92gipKq9oeLM1wcZFyMrJpiQru1Guez1",
  "key30": "42xsgmN9PpdKDPyGu9c3xJd9SzzV2RrwRWDC3gaCMUJcihJuBkzVP1nxCxuYhyjMejgJnxLxvYSe4gSH1BYb9ocd",
  "key31": "3MoRUugZg3oX7bNCjjmQj6ihT364cSxnshaMhzf6A4fNorq4zcCCJN6KDnPNHBLn1v7o1isX96rC1qWvQcNsWMA8",
  "key32": "5HHdbMRMLRqQZfZ9EjdjhEhowSQ4RVwTAEjCUaVKDBMSQThfJF9CNtJGbxxLq3ycxUre4PP8DByH1cJQpGa53AU2",
  "key33": "3qYJMhPuYfazvkTFboTZW3Lus4kVAEXtzdVE8uhrevoCgvuGAQudq7yEnNKwRsVoJ6i8v9bgcT2PdoBjVmhdfCBb",
  "key34": "5vyFqzrUJYbzz3mvnJ8vy6G3JuHsYi5fdHh6qGHSGkNtbUDkJiU63uMmEfa4xWSk2k1xrmwhM5SFDuGTWFSfuhU8",
  "key35": "4TkKA5CzPjtC6WiqfswGdPtRKZvUQLqTmrCCBFQVbuLnP2rZ4sHVBeuDpHhkv6SHgqfF6UgoW76ccdk4cQmw7xyp",
  "key36": "58HCXTYm2N2Yv7twb3MDjXbbv3BAj7Z99xMxgmWTZrPCf8Fnqw2M3yauaWk3czX38fqboYeS2WogCfdExdd1LjLp",
  "key37": "2srdZ73LfdHQWNS9p8GxmNCxQJcBSA568MChQHwPvPCEWevfUqnTZJqPyVCSdYwh3UDDCYJY8QV8DKCyP3KKMgYj",
  "key38": "3FMrxawimfD6by1mCR8bbpmWMgpiQyH2aMGNGsp7y2nj3cZrrbtwJT54QZQ1Tv3bEDzYon5FQxxKpbfwFX3M1odc",
  "key39": "HpCVbcyo6WKJjGvgjMr5HwrNsNAmFUPGXoaZsUXkZiwQcbxQ4pfTidcqQbQUtegtRcGZTs4yt4QPYZDd9m2eP7y",
  "key40": "2zyDi37CHuJPJs8oeDm3p1JuUpTNr9e7fk4D8HsUwRbMmv9zi5moUx4S1TjT95zn2YPseRx3Wtr83T4WFfD2Xwd",
  "key41": "oLd7RMK3sEHeo5YAL7qdmLNjwqyAg7A1GLrNtZMQ7tbmeUXkXAsfUMYVPPuTD4pSprqRCGjJHP7SgS9bEq55mrV"
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
