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
    "5ySYZQFgmTV6Q4uFak2qwGCuAZixng8NPeuPc7K532n7vPmqMGb19vpojUmMWpCD3DDfcR1xQxpfCsshqmD3jESp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2k6icMs3xhGxxX15Zg91GLbAK5UZfTJsETVHqgNaHVjaiSPMVx3851fUbNSZuJ2JgJDouCrP7oJfKf2s4bxxJmMY",
  "key1": "2dpDrG8LGJyam87miTY6G1wynCGgJeWXzJdDTiDDiZwp6Z51Ppwp6tcdTcQ7snKBGi8KkzqaUysQ1mpM9vmSvHX5",
  "key2": "3XWJY4FmJrJCbCz1nueXWK72zgjY1iLcAqaoFxKjsGgzBsjEEEzkgRsVykQRj1fYnZX946BFb85M1iWTV13iqvAp",
  "key3": "2XmhJCkYEiMvJmUEV51yi9BfzAYUMHB5wWZeahuiS798X5xSBC9SwjiAdkjmMCfYiW872CG9zJ5qEZ94pUnEv5gU",
  "key4": "32VVEErar2p9KDMjUxrwMPGpseWGJaAEvMn3JPpK2fRczBZ2Qv8avzyhAMukB9qXTbHC7BSL4B6Ubob8EZX3NCm7",
  "key5": "4hGjqqZDf6wcLMgvzuN5hH9UEctdkzYWvtB2xygdhbUpGvFm4pWvkPRAx54wk6BRX7HLqw5jaA7YuwYd2D3mziiT",
  "key6": "UjBcky557zF9WdVwFZHExjwCGehz8jJgrwv6ga4NYpu1xan6sXt6FkHrhMs8hc4cF9oW8b55P4Raz4C795pd4BX",
  "key7": "44C4nDeUsB8x4bEZajqwka5DJF5QZUmCiVXkJDHUkpXNsCyo1pWfH5D4m2AD633UrzFT4X5cUNtcZhyQ6FaDij1Y",
  "key8": "3q4jacwfEeLLpkS7qoLJgDwBepZHQcDwLn5cxpLVPNsDcnyM4qha57FoUfeP3STrSP6EcnjwxeChPB4VeJwZVrak",
  "key9": "P5d97eQznb7DA48gw3dBLs7AmUY7AcDWSQSPJm5nZUbqEPYDydS64WzeRdmKnuxKiEVU7Q7gyPc82ivastjBoxX",
  "key10": "YLycfoU69BHydiQh48SwAuZLS6dDsHqaASqiiahn5JJ5wv8izg3ypWLoTjUxco58cP2qAiforgTr5ZuDzrTbfxK",
  "key11": "3WKFUnYCrTH5uNK6U6drxtXH5SZiUkbaHatnBCdXXooCbZpJM7v4B9sDwLN9wP3VbyCcPDuRJESWnGexiUexU8r8",
  "key12": "3wJBUrjAzfQWawaAuayWCGb82iGFj5rsw6k4pqHTx97BpgZ3nqYUCiDAS4xpUpihTikQKkR2JHm2NKEpouTSoRvA",
  "key13": "X7vFN5qsx57Z945p7cZa2mBX5i8fFHsMZjHCEhFNK4WJ8YedUhAa9bhcZQtoJFrKvpWcAsR44LDQXniiBG3ru6N",
  "key14": "3RaUA1M6GrydNVs6QWzHx7KzQW1DSTYa4S6zvmqAGzU8GAB7oZ2Theek6vx3ysQWNhSqZPjvrXsqojisvZaeZYnL",
  "key15": "B8bXE9P2P53DirCnPsvnFZySJSws7momXg2tnfcXXPSxCRTh29JHoy2hJoVriWojzi7wv5B3K4ChhsztyRn11Fk",
  "key16": "2dEJi7cMswzURrnSyJe4n9hELE22VEvNa5GjoEZLa2f2kLcTfTqnwLq5EdMfez418nPBykkSUewhhFNuGQiEacYB",
  "key17": "GSbnfAdXbDeMoyd1n7aHtucFTa4SsnTvWQpWxNaGaykDf1sLt6uU5bL6BbG6jynpB9By6cV3A9VPTeXbmodDJ2t",
  "key18": "5JD67FY4vxgwV3CXr1KYqqXjGc5Fhs59x3AQVnaoZEVgZgUSHDyaPdyNjCgu1o2XZsG6QJxywjwndCU68z1BbFTP",
  "key19": "34G5XLCZGcadD9hW3HuK9Buw7Kz6Mu3fSzH1D6KsCUdamt39Gt1evUg5e7guQWrohFw4J5Ku6G5Vwst1fbCBxzw4",
  "key20": "56Augr4QvK7sUKCBox7hM3s72kfZBdk3mhP8UnmUoBv297Nte6JR56iNorGrAyKSirwpnjM4ZMAZKzChmmEPXWzp",
  "key21": "XrThxLBUQtkCoVadh3Lz3NGmHzZotLee79NoaxHsPXqUBU88T1GNxCk71c8f4xgPHe3TDarXaDtGpNrA44dMAMq",
  "key22": "3bbJCVpL66t5jaRowteebH8gpkrkkpaBwvAahwijibtjau25dRq2h5RAQM8DdpLsvqyEpYjku4too3mBnT97Xosn",
  "key23": "DYboZFk7jyWYwcjw1YDLT4ryr1Hx5qJ3VY6dRrTjmpQ7mCNHSux3PqkEBs3wwWhBe61iiEvK2dbRKX3MhPCGwwg",
  "key24": "caLW7h8hUvoEjH3fSdVoSAM6Lb98iac6kKpAurdqDgqW1QvHX91fq3EXGm7YGz2RiwwkNuM6C49ueAS4kPvgzcW",
  "key25": "5Hm3ZWrMb2zKdzL3wA4ggk7ZkL55uqUku7xtCAkhVNw6NBvuHcwbR17TcwkdBqPYy4rer5oXEMU5SckLxLzoYmBB",
  "key26": "5EWHGeLzoFeGYzTHbVbhxC4QnLacDtPnxvHnitn3UBUjaYaj78843pDUK7xQVuBoRZnDyjpssQbKWy34bg9SMoLK",
  "key27": "53z5MHeT2QHAprDzn2BBfxUdGpPgx1Y2zgFYUU1L9zBdqTCKPSzWCToXm4PHoVBKs2njyvWHrTqLg7HPVWW7zroV",
  "key28": "4ELtbKo93RfjGntXqKjEV5QhpVgHAgHScBw5nDL7xKinGVLvL37k5sC5p2qyp8mR6KRtfzgwmiZ9FH7bo4d6k8MD",
  "key29": "4J1e58eiipm8aHVNA6TyqZvvbr4GtK3qg2pdyDhy4TXSwhTpBv7usSbSct195DnWzrer3M4uD9w4pMoK64VhZUEc",
  "key30": "2nKUiVYN3Z3czMKjRSqSaPB64dtjjRt83opBHiSCqqjMB2KNQnoNJ4gkByqxLCTrBd3QS5CkrnCBVSZ5pzPNnDaX",
  "key31": "54MTunKDqNRK5zM5cypGA1YgJZfKAzFyyQWnwFtSCafZT6j2GZ6XsyEpvssSeMcoVzFGPWZwWXY5eeQhzWDuDTM4",
  "key32": "eDumxibDpnLmpeuNUgG6vGFcHvRvPWsgMJbGMqFgse64dMZoEp4HVXutg91GrtwpxmBwA363eEC3NBtHy1kNw1r",
  "key33": "4B1W63Q2P98EdSfuRL3UW1BpsxFdYXuehSmBG8b7uLi7mvY8m3y5mNKRHR76UbcYVnfNyMPzTZTF5nZ586YrhrUw",
  "key34": "39yfA7bjcNFkEAsL2a7NR4vyNcn4bKE2zA8THEbrmtqHZ5LJoLiBrQ2ruB9FX1VQ3Rps4Uu5cWiwTybirh7H5XYZ",
  "key35": "xXhKKvPgXj1YdsBzzFaedKmcgKNSc5AVN74uNTSy9BPbWx1ZHkn1tJ9gNcophzoGjPo5Q3dVxFuEbyPoePypGkF",
  "key36": "o93KQ8buhoR8grNa139UXVHiteWsH6N9VwW4tVQjvxGB12WRMifaH8zrwCDDN9qt78HRMiUbPmQyk6gZhQS7oPL",
  "key37": "64Sx7Txe1zuGnC8F28Mobqt1K33Ter1nsshmTYMS8Uo1tFXAQFFLMfKaLDKGmervSV43LRekaCtrNU7VA484MmrK",
  "key38": "YfDYjPZfeR8QHw5SRdoRvBcZkNtPRYujcvqMr5uqfBnhoXGrYxcGcnSxW4rXKUmQNWgaRzCA9od3xXeHWi51NBq",
  "key39": "3wsSrHbQNGNJiAaj6CfQuccpbLXPRL8Us8AQ5WFZ9w8GGruxXkNwL8xeFq4iTLmbH6WtSynSfeGGEq9CgfV7kLos",
  "key40": "4WuwZFE83r9w7wNT3pQSMjGnP8aN8QUhJYgW4Nx2rhsafA4jq6KncFi3FwKgnVD9pLDmfjFFF7jkUe7XZARh2yk2",
  "key41": "4XeLAsUTynpQTQi45X7cAw9NhGc4UxzW8N3zyNoStttjqVt9XkCKkdrqyxa3CZEhdYCmG1h1qtEuuokmJimDgf8V",
  "key42": "4g129qashiJRASP4g28jrjr4cdvT9cgYDfW4YPzWvBD98WftKRy1r9KoGqphQb6ZkA227gS2bT35w5QzGrXeCf3T",
  "key43": "255rsRbiUSd2BFQ7y9T6cyFeEC4egxniSX6hGb8Q1sM8xCAServzDW9CxaHG3ZTbiR5K1v4LcfFdbzXkvJqQqH3K",
  "key44": "2SRckQfRobkQZnwZrvNCMLvNcTefvDNnS5zuqGbHBvYTVLK98nXnwvUW3oFtU2wiV9Utsmf7YjHBBoevkhTCpyU5",
  "key45": "5MciYcMeg6Xb4Ky9AxDGREDHSw2Ua5YYR9dTwxiB7AcNMxjSBPvhVAdFUDwwpKmDrJ41kCutZBXhLBm2DfBXrJw8",
  "key46": "4geKAMXuQd4aJEhXJRhxnprENjNgUCfMumC5LqV6yJw4J6NY7byiMCL7qoPFLuRK34Ew1furem1Qcj98JMGLGFW3",
  "key47": "3312w5uBDU6d4Dmb6gkajArVWHEzaPwwEVsFgZZ18Z8ipR44JzuTqc4uvPfdmeehCkMkgLCEF1QtPmGeUyiXtAj5",
  "key48": "5CAiyPSmy1cuUH9cUZmv3QUXnsj31NAD65eDofve6bKTDBY8eZrMUJdbKwvvWTXkhRH9ixYJwJXNnXnLhioGyL7K",
  "key49": "5CLVDwmWWQLv8xLBRBEstM2fFMwhaSgaDNa32yuKHRBbz7Qok2sBgB7W7jD941JXWTEGkaEJXG9pVpeFeLreCaoZ"
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
