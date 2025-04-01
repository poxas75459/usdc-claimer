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
    "4GATjgysxkn11941acY85KL8qWTEBgCTBRxJ6YnB5rzh6etGeM7AU84Amg5JCTorFJj3MfdVxAVGNphMaW7yTSut"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3H4WHXSMpcrSJgbAErhXyGLTLPSHHvzMTVg58xQAJ8HSSS3hKLmLLXAmq6drKXaC5pafUkQ6yNTvJzTg8QC3r35",
  "key1": "UWLdj2fPpY6VbZLtgZwfqn5PFfxk1dnxTSrcevXUWCwsbLsyq4smRtZJTV6Nh4WRcZzE6xdU4QC8vByBw4S4csM",
  "key2": "TzNpxJFSzcAHynERTx4DRvgBsxp2um3AwQwkr6xWMDe2pHYFLoUitEvNahnfczXvRsNXv13Kb7947qJwvQ4EdLq",
  "key3": "5ovvNFbA2yw3upNZ2J3nFKbX2Y8XAiu8nE8CGNRyGD4UqssyfxZGCVgcAqXHbuYErnNG4pZKt8XqPEw1RyRroM3D",
  "key4": "3ySEn76mcpPKiRXkM8Kp83xSTG6jMyoSmHF5QCoqjxeSQQaw74EQ4MndY8jqv78Xi5dDyWTbgn9giRn9XyzNyzNe",
  "key5": "4729qvLLD9MuyzdcPZpX4qbGL7ps5ocwp3SZPZtRamPd23or653uMG6f7WWr92JM5AwdZDVRCnKQE4e8Qa6YYj4o",
  "key6": "63wDXXs9Xc7MqN4ZbqihHGw1TFBo8XkdaAHPftfQNuX7phKt4h3PDxj3i6qegCMAXQFgyeF4rMkc1g9mopReGoqL",
  "key7": "5AXtnVCuZKPF39BLhJwvpUmPwy1VK1G3mW9fW6tuuw7fHnCDDwBeS15GDwN7PJr5GgnXjaJrtqWqnrzbfn6Y26x1",
  "key8": "3Swf4Xq4z713ZVw6Dsbx5aTQNuvBGoCfEVwtaXvXuxR2UaPtBhnLj37ey4ToWzMJqZ25Nb1473P9vqe4SkB6ceLJ",
  "key9": "5mRALymR5uf8nNCmZup4WpjMLg9mcZoqoW5M7WfUL1L7jba3sGLLFroX7jwDXRThKv5oHjWDkUvLCexcuZGrRfnp",
  "key10": "4toTQL6tun8BP4PUxMc29Q3a1qMLMok7KL4GpTmSX5VQnty4D3SX97jCSW6qWQZ7XiBMMhdv3bR2dMaoYeFByAF6",
  "key11": "5f3cHLrxdguvBKwa57fg2P2w54T3LVcg1G5YZZ2tihQnXr5NFobrLBTAV3B2jLJLr7mmDmYJoss4b1ZKeghx2jJR",
  "key12": "37CdafgShWQcF5fohGrRGnt1KNXt8cPNH3C8ENBE3qwc9kQFcTB7JrALtq9ngRFAnCdTBPqC3epA6yX9u7SpHqi9",
  "key13": "2KrKwNto61XfN6fewAhPQTSf1JJfuzmZFRWPYDxP5DheB7Z5zmPnnC57r9Ug8RNfijBWAyjtjCfaR2ybtWvi7hcG",
  "key14": "sdC1E9t4EGqbjdR36PwJHdbS4jQ47EzmQqaDG8Qmt75tBnww2X35C7eTor86NHRLKXoVF7DJxi2dfjRwoAUYLo3",
  "key15": "5eZ7HLUmqjX2R2aRKtXaiAXBh32U6eTjs4uGr618w87nSQgCwEC34smJcwob3935E6AYRWbVWgsHLrJ3z3vCQzf7",
  "key16": "2f8AcoFppEF7kTvdzUetpbyEuhJUs123kSqNX3uF3wEbQkzDF9iyEkhN36hjV8ywjaeuko82zCM1u6Hi5zfYGXEF",
  "key17": "dvQfzu8xUewYN38VTD1zZp1YLQcE35x98JDxbaZaVy84iLuGRoT6iSwrowGxUQ9ABNxP3tFUURm2pR1NVEwfUaT",
  "key18": "1bCgftgLUQZoRgSYU8UgMaGuN5PChm4nFSsoNHBuab7JEASEFeV3WEirpLixFfcBbX8RuT4pkiuoZ8AAzbnNvML",
  "key19": "5RdT6d7zq8EbGyNXLHKRSgYrGHseb9ySeKq9EKG4pTq9hns2Kn83ywaupf4VBAf58cPFs3rn94MdpNUxBHBrEuta",
  "key20": "4HxmuZH2uDx4VtQ4xgBY1pJY2G5v1himPHUY6A48sWUBjT7UKJF2nQ26LdR7G1J3AyHUh8X65HmhSMJqV5Ej6h4C",
  "key21": "5nLnhN9aDMDiD2MfwXCwMfQDNpkEYXzc28qwy2mXSg5bmYDp8a7ih6i1y5cACCcGBAjpivMtNB6jtkGrDWuaJ8ai",
  "key22": "27dcF81q52pZZ5ivh6Gdt2wc7LP8SY1anfqyRh8CXNHLD9BKm8iafLPWeKUWWgmrZ99E7NDFZ2Nh9feZf4bsLifW",
  "key23": "5DUBwYV6vuoXm6E5vT8Gu2sWWsScuBzuYbUepPdKcLV3ot8XhHULbJGS1kiy4y1s1Wrj2pLb9tAhuPq6Kh3tTSfK",
  "key24": "3W4rJvBReCD5tfrpawNtvueMiMUZU51cDjspmAa8UY9ETbpHDtPMD1ghC3gafmFxdnH19F8qCBbgoUyj4XRxvdsR",
  "key25": "MRGJVvVAxdoGQsJ8o2kpNbQRpfPzXXWPcgDRCxNHHHoiwsmZMMGjPJbnBaWiNMdUXPzEsWTqZNzejYV6DJ1R65F",
  "key26": "fkTS9UKRVUeLk36esZTrX9FbtyzV7J8YUPp4AQdEpFPrbHgWLyZ9eHTsQtk9xbsybfBKhWTLZ4KmmL9uD7i8Hd6",
  "key27": "3BWo7PkbuWRnHnJ4myMkgCDLJfx9Wd6HgH7qbvh94K34Aj31tqZRHoy1eJhj6n5u92bKeW4pcsDToajVkvgjx9yf",
  "key28": "2Y5hg3hMYp5a24BhoW16A9Y1NvAgiPJHQVzs5JC7Gb2yjJ165gLCq31WsTr1sKCMRQXueyS3QJHuEMk55cm3eGnV",
  "key29": "5hnR5fVAsvckTQ18tzJDqsaUzviVRaWi5nj6BczysX7DEV3kFkybb75ZSEoY1SHjRHXayQm4EJscfBpQ55s5zqGy",
  "key30": "xuCpUNR2KxFu3hpbVcsJ3yRfhnaGHqdAFdBEfnHiZggmk8U6rHVRdcGmkYxZGyc79buJWQT8NtRi8RQeEFg2ct3",
  "key31": "3N1GoavV67ofwGrhdqVg4aqmZVfreZ9Hm8hDFs1xigTeqB4fkL8YUqKXZYcLqj8XcgYGjSz7eXAuVSN4VvhFmC2W",
  "key32": "2M62CVcbfgZVmaD5AT6Mi9Wjjc5DUYTtJGugZUfAL6tb5i7cJfRCvQQMat6ue9LmpQDjKGggQnMjudtAu2HPhU7W",
  "key33": "KKzfkAH8CyqW1GqptsWrmje8RR78ocu6Jq6mvyTSV86c3GoEKd51C8ZUQjtxYHXbPXhWQJCHaFcacqcdAReXsg5",
  "key34": "5jta9ochWUf3Fo5P9Vk7y1XoXJL5WE33NwmWBTrf7Gf8Y48d7M3oDccMiS8b7ukiXA9CFNiQWJidKGDP62aG6Sni",
  "key35": "3Eqo8EkGBzuJGPgLWGZo9qvyLn8kFPhT3F4v8YFixrwDBSMMUKGNxPwFaYgwVy25Q9iJKazqQrsFvoxRnzLLEJnH",
  "key36": "ieKLLH2VcheZCq2FUzYKmXV4aJMVVyex5W5prS4hcxBDtHC7L5zMBxe7ahCpf8NyGag3GABgomPH82KYk8cGcgd",
  "key37": "2jUDyMaEPVYFUhT9sQ6XnZCHWgY4cDXASkPWPtxL9hNrkVGgcHcH3xVqU2tFBD3ov1Nh7dqum69p11cCdS3tJLNa",
  "key38": "2kb8vakbzjwyPkFsQtSS95dF6oNEWnqvuNY5ScUEe86AAuTi21z1A4g4dE5xiLjhWM862ntUSx9y4K6qF4RytsEV",
  "key39": "UekcQe7GXLmaJJuS7wXd96rqNJB5LvDqgqr9q4FiuPtZjr2EDGaDiifvJKKToVujjQ7wmi4XCgPkWAeUagjouun",
  "key40": "eitR2aGTSbbwyCKk8Y2y5ED1U5mvK2QVJ4BfQ6L2GHXcy3ivt6qUmbmgjfaGmeWGKbHcmBBBPsPPTGS7m9LVqGk",
  "key41": "5o23BxtGad35wp1FDsWD8xwPoTmYnN4ba5wo6hkcN7BS4qeBrbjqmh4todm7f34ucp1kKvAwP1mpcR9Rgw19Hex6",
  "key42": "64GebWjreQMKPacegDdoNvuEHpSuKFhmLYUndLuoJ764jSFmaQoizgzTfjjNts4j7iLT1613axvUeJ7gDcdK5Ss1",
  "key43": "4LGPjjHb86EjSyJdU4hLtN7zkfchBJ7yCrMMxiJJZoRVYzYtvWH7Y4N4dg7VFK4MW1Zwwx4nuC3r1xYdUnNdcqnG",
  "key44": "3eGGCCBQKeXUYBrCtuZGZn44oQRxnT7wGdQs46Qg3ixey63gdQ4hEo7TnhNKkJwHteYeinerii9YGz7uWEUeKSy2",
  "key45": "eH1feG99dq8YsGquKCxQAo91Rr4rPq6enTfzFc7QhThDMQBYLM42QExE4PwjnBMneb9TqNmHjqxWRLDoGczf6Sx",
  "key46": "5mXavc2vWtsHq1Qjguj7WWHWxxHhZTDa4cPmnUG34piGUSSpCtCPCL1H572d5oijWoBi6Vfiqb45nuZYfhJy1SFS",
  "key47": "41LEY9RoUhVcCqKa4QXeH5W9Kx8mGkArQqU4tRBHvScr2B1uAbhf8U4ijm1GWZgP4USNAzMJ4EtV44SdPqtrr9EQ",
  "key48": "t5ZAKkYdcRzYkLBccMaueaYnDeKwHV2kUCMmbgDtphs4XjjeikhDE9Q2uwg8ZZ4v7NXQk4sSbMKE4MaGTmAtyU9",
  "key49": "4hA9kHXcsbPznubMzvdYBw6oEfwjyMFuwuCM59JDhCWVVTerE7tozk3ukeqZt1Sis3haiXfi3WW54m5mZAj2Ucww"
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
