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
    "61MJ3zsWJtz3KqWn26Djfh8jz1Jgv3Nk9yG4FpJ3YjUrxnSG3QmLFZMrcA8KRq21Tihfm4J2YwXGpwhmwHHrgFcp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4E4BgxSFYf5HbheCXvpECzzHX94XY5PXGRqcahcmX5LMpNir7YeTJJzdLtCjSr4HASF1xUK3tVHb1bzhqu54w9AA",
  "key1": "3yEobNfzizkSU8ccHAkshyXQvz5qxHipknzzRM15UzNAaXD2Y5m8sYj14b4nYBhkjLNxRibGPxsMzfNhwuTm5yPj",
  "key2": "3vaNXiyMY5n9mUABQeMfHXzsAVFFtxYjgE3zviR2UHWwFMgHgbBSvwmWhAhSeiQXADmKMUSCgMtr7cPeMEdAKDMp",
  "key3": "4TrmmBu5PYBLSNv8Eb6DY3e4n4ZVmxpKfzMDgRx63prJubq452jsTBh6fFZb2hUwjRoN3AW8z85bGhDYFjipaQYK",
  "key4": "4nAhAFMAt7RM7WUKYYGdmvmaqNxP6A5rZcECuhvjQJtfaToGT83HguF2i7vcChVd2KbvQjdYyuD5AX4QgwTUdLgc",
  "key5": "2B5yuTo2wfBGtKSL3b7n7kBQAbVeVWWyz3VDdgcU7L8iFAvzH4qhCHuqu4buS4VeVCiM7DBeXz6VLN2zLrCgxLmW",
  "key6": "5hzCyooZrr26bzkoMkt1N371UeFqs7D3bH6mgiaCoLQGfe5Y5GsSbphfef6Yq1sRfi3QBjAcgMmfc3mNtregbd1K",
  "key7": "wGiYREdsSyyZKJVBKZBYiZpGJ5xZqbSbiaxQW9e1RPA5i8E3XoXuCPLgaGg8Lh17s872abEJEePsYjHpcmcCAAa",
  "key8": "EaYNXv73DSCd1Z2b3gj2iRJqgrCqJD7Kh8Kj2kmnqGopx1e9WwsQtYkELXBmvPNe2e9gN9qzi9H8kuoNN7NG1TX",
  "key9": "3rVC38gviSCH4vcubkBKkwEtZib66e9mZevrA9C89MMMiu8LVxNBamXujQgZeoKf8HePgdrVRxQ8UYhbtv1V6sjk",
  "key10": "2yHPoujEnJQF35o5YwoW1SfgfXHkuS25at3qFscJo2rJvNt2q7pMcYsfvQfX4HJXQCRjdfZcXCs8MkTJsaBhEf5y",
  "key11": "5D6QSgGTLUviUczUXDs9v4Kzh5uWpWtvSg3oisasZwXyJ3XzMgPwFSBH8wK8u8oF2iKQv1kgKvMPfafSwWXZZQYF",
  "key12": "3XUN7z3Xepq8qw8hg5QMP2fi8C75WuZigqBGAup1LhmokSDvmRf2MqqWC5xMJVsiKapZiBPkxDFV8L4hkKukyGRE",
  "key13": "4WpLQcwHa8RNEbh4BSVnWezPvpvUKHsacxxLkk1fRQk3JaSA4snNVV2Pz7331G25AvNd8HmHP7hHvgXYnbucaLG5",
  "key14": "4Fi8D7Y9pxd3q38GaxHPKU1ZCmxbRfTzPJbGW88tgqwtoyzZQ4U6JCsnL5TJZ7HxfnPkeexAM4GzMjAfvGJqWQ2G",
  "key15": "3BLNe8oqWWfD8esM8RvwRPmm42tTrdEbnotziTDHxDeZeb7zNVx7ETqkFU23VWwA6ZAXtm4WCGbqrNCQ2PyGme2A",
  "key16": "43dBw96xGZNYoZYGfqFhpaUoov1foaYA82U1b2ibX7txzd8AbrFTshoT8mRiyL2SvTxEGY1pEorU2QLzF1UkfWEr",
  "key17": "BNBwg84tp4HR52advPkZJ3g9U1uKsaWpFtDtdbg8ATwwhTr1uJM5RQRWfkAvK5QFiUeUrVUgbKikGDW9r4B6HUj",
  "key18": "4otyQe5LNWu1GZNL13wQAY2WuMgpkjxjQdJWqaGdkroxXZGJZ9Wa3TVY3At22JUsA7F46zfn83p9JJBk1CsQqgWe",
  "key19": "4BCXmXV2jbudvBpaoDfDx6EomPwSfGy365Hc9bb89YYsy1BJutcv4gEm9JdFyRnDWxHnZPwCaUR8yyV8Dpfd5whw",
  "key20": "Eumot2hd4gSsJ6H8DqcpbuPvBFQb3hSv4mQdQzGhqvCieULG54zdfCuWrGUkXk1vtSZsquVrAfvKFsH5ASt99ab",
  "key21": "5Ayw4MvjWqKjxWt32oA4PPW1nGQrvaPPz8prMWiMU7FBgPCAqxXHuD5U2b98J5e6UoqKRRXEEwFSnPgM3Q4mM8oF",
  "key22": "2FEun8J9VCEfQUaW82YekQrCEXbJ9A4gRT4mJYj11k3tP4XuTJokYXjTXHv13Rw5BjqV7zxr2vfie5vX6JH4LZfu",
  "key23": "Ce8TnH96Hvesi6urjvtjbe2tdEeLm2q7iMDbHHPJye4nUsgA4VPSai8ipsrwj265DZiP7vAh45ocSGv2dRAXSX1",
  "key24": "4FzpYEwnYEqydDanzAQw5svGeb3XL2dscrmaFHQQK4shpzubWC8FBBqCD1bL1au4sAMR883fkJodqx8bYNZZjQhH",
  "key25": "2zfTTythyv23CeqV4DHaaTcneYWHc5Ps3uz54aLu8wZhS3hKhgdDN28FALJ3KfWMup3HTMeCK7JwFt4t74mcdY8C",
  "key26": "dGaMRpzWs7rEkTn6iphUTcuBwSVC7HVrwdczWqrTUaXbQfVFV7e8n9iWRwoeQ8BYcCDxqqkGfwT2Yy3kohRgZ2G",
  "key27": "4YaYvVijtDzW9TDbWt2pGUrmFgpxbaEm8andxsDP9Mh3RfqrQrZx2H6ASwi9xP7pNXA69QNs9pcEZwMmR2T5fLRt",
  "key28": "2x1zvCJuwTB46RG6z8xUTmgwbUEsuJWZ1KUBJ9ib7fT2BqE4fuNee7TuT2V5Wy5ifQnQQHXR4x1Dd5YRvsXFhJqN",
  "key29": "3ZYKTpnEHtSbrS2EEBiQhwjmm7fvpUrGWEkCUGa6TAbvQGdhjekFQDiFSZCSW661KMqN7XwDhyXSq7tLaKJS78in",
  "key30": "3QydSMkrMVbGgP9m6qwSxeQdUFK3L2yu5E4iqmnyAGZhixPsGWJjjcfurYKRvsATveL5T1vNxDAs5vETKPWT6dEb",
  "key31": "572P2rqSaHxTpS7DwiZF1u1FBk5pZwixepwqnSFX8TsGG7eNnSCSf7FnR1KdmYeHPF16SrT5ANfiLN71nZeFi79j",
  "key32": "WR1jftnJYYsf4awnpJVg8osbN5ccU29VgWkqy2zeLCtw5msjEoeKKUt9VpCPkBe24S8y3gpCDbLLDrPLF71CpsQ",
  "key33": "4rGXh5tu2FDe92mdoUteff6nRvA4E2zsGe7yhGgRCJnFSfMguqpeUW2FzgDPZhJXY2tAE44zhSytX9hvn6n17XTd",
  "key34": "4WFFmwYfGCofMpYSUdBHp5gZSce54fAHP6bbHn4HvVYTEm9tBq2mNpSHxkeg5Tx7P413NRskULYxsisvynCGREWi",
  "key35": "2YRqGnZdwcmoSBh2osFvhgx9kT7moENG98jPeAHfF8Swu5cpQQNRpK47a7tHsDaXUxdLxBynCayLrWw7DKMAWKCb",
  "key36": "4qA61eK2QBbEX1yDPFQmxefX2dfWeuKRWu8nXPw26ikAM3xBJvRsbgNbcJhz3KrxYdDatQ8WpZghxJN5cnfX8vU3",
  "key37": "JV7jsFrz742tDE7vqJAPE3X8Jg4pTiEsWcf7iGV2R1KQDiWL4xgevnWewh4eCNuYh1TUZrwfmKfJvcm5xY8yJ4v",
  "key38": "5wNhHLdWDf5VWzJQ6RcakmfdE6UrTzXL6gjKowrcUwz6G9QSdKSMXWkXXaYXnogcwiePHQTbhnZH1P85A2jCtVra",
  "key39": "2vd3ULUrrSVXSECpMfjsFwBtCUDFsHgnHn6Hjz9XNfbPBTFKiqexg4K9WQBajPYfMheCsp8r8YJuz3ATLfk5w2Hb",
  "key40": "5dUeHCmuA459fT2CPdYzXy3jFJ95qWyzeyWKoxMpmg1rHXY1wJitu2zx8LggTkDgCYFirMyq5uDJYRM5WFHfWcar",
  "key41": "JkeEpck4rcT7t3vswNMkx7oB65dScJJ1odaSV7JT1dSxoRv1K5VKmGHN6KvPkourcLciLU2k99heRiWFnRGEHbb",
  "key42": "myrTknPDuqxHkxetN7dani7uXtWVseBFNDdznDQxBXcptzHyhMTR1Arad2ZzLkDYkPPa3ZnDPa1SEyBj3NNQzgL",
  "key43": "2pTDMNqKMJ3gsGNziUXyH3fU7JbEpM2UBMx8GWfgkjFm1bF6dTUdAEGMDukw5oeFbzURrvPasJcCETdbK1XgxF5V"
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
