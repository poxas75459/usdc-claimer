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
    "2fd2CwnSsTmG5kFjpjDsYt7cA67wqD3HtUSreGBaSeLLTRMXg9GesBgocH8Go1dfDqFXBGkZE7Ffn5ZXCYWBzbb8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "qAyJSW3YxQZzrRGx15dvNKtc5FiEd7TrFmZeRxfyuEam3yZH2AeMAGZAXnKXTKqqPkc9cnSLbs3khQekxvHoQYa",
  "key1": "4LuTmV5UP5oi1oh9FARCFGdSSK71fUfzTKPoA2Fu1ZT1hiTcs5xJUhQFUnV6rSTywEqavNVBoDKoZYpXETzrkcCQ",
  "key2": "64uPUe2UJ2TS5NSdNTbssJKb8HRg4BaFFZP977RdufL4gwgJNQvqKJ4bufUjx7atHbZJbQxxWk4fi1s5gyBdTonc",
  "key3": "2gyTGeaZ3UcgaAc8qWezK6U7sbVTgtkphB8tuBLDtAzbX4YpDRzCDa7DyAjq6A7psJNNZ3uUy46CoLZdMkC86Phj",
  "key4": "2EmJafKX85yw48hNHhMTiYg74aBvHCgPTwNE2hNxrxTiZiQvpYaBpkcawFPS3LAZfXfjE7Q81aHawAHaVFZMHtQP",
  "key5": "4qoHzUVGJRo45F9wq1ZbskKuodAvkbWsqNZRQv4RJpn9LXYrfdwjZiTzqng3R1R93oQ5UAZZeAWPLJufsHmBHT7t",
  "key6": "2arr8KmGrTHBWY32UpxQJ2umAnZzMHYV7AbFYVHsF9xezttkjSXb91h8S7KoQVYy1rWm9AnSFJbjCgc9NZb7mb4Q",
  "key7": "5xSA3Fd6umatCz2bBA38wgEztapCsivKFDs1ZdCCXbPH6ePiteNEhjgfZT4qvQbHeX8iPwkma22pyQHnGNexivSb",
  "key8": "3pseLVDS2384QmnngngMce3RJ2qezCrWhsYNT8zHsL5KuD5VaT7QheC2XH3yzAZrxJGPeKpdC25tbxksQp3Cmapn",
  "key9": "22bmvBHbk88BgSDqYHtCEPNSUh5FKaxrJ4CqpCN4BZ5P7u8nEfKvXbGJhi2gYtxLMGVY6rtF5PkY3dFrE9guERxL",
  "key10": "3je5KFwhJhxPSGEa3T1WhWWBLhP4CQRCLazwp9MfjEL7WYTe9XSJN6yKJRvVccbgia2V3ssJrDkeA8UDD6GNnjhp",
  "key11": "3a4KngzCoNL2zSnTUGJ2MR3vKjKYUMGu8E9TVcwxRWkxqhSRdw18NY382YQQZN5uNoFvxtaSnEBnYt3Amub3Q9PY",
  "key12": "4US1geCszm8dxFYi8AQR7ZbYDP7vo8r2zKfjYsu8wRPvhN97qP4HdhmJejhyZ55hBvRKCHvsZBcWVWSauz9SDv1G",
  "key13": "4i1KVMgKukNicoZk2iMmG6qNLugoygW6PuP931t4i528aBV8YD6Uqezu4211wECgJo7VkkViLcoSwdif6t637xjq",
  "key14": "4osG42pRDSSg7FnEvjfS3vj3M1C1ycUDkh3pvVwph5SQNxgvfEeUAejnoxtAosWTwb36MKwPvc3T7wJCQ47E2D8K",
  "key15": "rkZBNQZvgJvZQhciDEhhpF663uJQpQefQvcwjpHA6EsqqjxaTo8Wbb39Kw8kqud5kXoQAWkWDZQnRdq2tw6X1wy",
  "key16": "2UCFfgjpWWDMHHJWtZxxBBdepgSodu2yoskpWFwCChBGDTihhqSvD9FGZUh2XVddpcMNVd51xJ9hyEvoWazQ5e3Y",
  "key17": "5Nm8VuTNBwnyNvLKF5EtgsFUtxAUPLxzMqYLW7E5agmB9pmNWTJBa5Lnjxnuf34tKKNSvYVku64DJhB3HCwqRvzv",
  "key18": "sMq2wGQiYkisX1c4hzyWxdc4Pfm6iEGEdTE54DZPUEQosrHhk2oPGrARW4tpMfqFyNo86EwQs566bPaeF4SeotG",
  "key19": "3EzQyFdBcZixqzeFiE7dtWGYWQvEc3X4s8aogMwwDjEfARoq3khAxPs3au75BpZEDWBSkf9vSm11PomvxQCL4TrQ",
  "key20": "N3uG4yehAMQHNEBbanpZBvuxheUuHSekeHHHAACJd1sJ6uQy1jMcbUyNyCXHcShLQTtn8oSn7qkUXwv4Ti4DjTg",
  "key21": "5LvXu4H667GPXtJg9oJoYVggi5fZZvsKDbYPsdoAenNRmDPXe2c7HBHPPxDvW1e2Y99QTYpDFvqVNZgSX3CteYNp",
  "key22": "53pHqTnTxLD99WGKzPETAkswqPkEhfDwT72gBDpcG82L9zrJokhbiKFStZDY4FSkzjqVcsRv6aSD4ss2SeGSzBjF",
  "key23": "2AfyDumCEbSbwpzjbagpGPyGCY2XUi7sG1LfgS3C4VVAShw8vEj9mn3ffMv6uQM13Gb2NCD7V6mGAGoTLQasAwft",
  "key24": "3yhj4264y5JQBmExNKZjmyDauaFYNShsz4TqgkdUCDjf527s4ihqywrtgriy8TATJq6mPN8Ae18F6NXzXtq8KRAX",
  "key25": "5kpvkwgmAmNfWvXUToJ4DPASXAafXKvACdisG1SLzrEmkTDrMWwBJRYNC3gNLAWp1pbiLhbQUbtgsLNXGgLY4fA1",
  "key26": "5syA7epJQs4uy6mFxNHE3Z17GSUYv5hzXHvYmo92fPQo3ky4uNrvKLCnrsn1XN2irxc9kfPpy6DX5dHd4GGcwPiL",
  "key27": "4s6RbCAv6ij76BmuH2DPwh9dntvxVa7A9Rf4PZ9PVKS2gNyr9rrw4AeJ1tLSXjhdKNdNsq7TVXQMudJfMQFhhu8D",
  "key28": "4HbJTmhHTkVYaxhGbJiwbAb1qf4ofqUYUHhtzzMbbhRPQzeqdYsDCyn4GMbJCVpRkDSeS31A5c5c85TZycyTfhvB",
  "key29": "43knaTTqsFbXCxvH5s4cUbk5cgguVmjGTEVHT5nH6xbaSkz4WQp4VVRmTdgjvsAnEhVTsXS4B5XHAs5NpiCfa6F7",
  "key30": "4BYqHepgykuNydXouWKRTR19uWKL3d3EAMpNH6UdqrByDjHiyzScuXxCB8sn77k6MW7pejFn9Pq1oUCFFYedrbsG",
  "key31": "66pBqAu8dgMxpcpK7s9XLNudf9WnZQ8SswGYCx2tXG7MJSZWhxHsKJRDHsLEfZpatu2ZZ3MNdETLzVH6Y3rWdn6b",
  "key32": "3UtnrURhgwo8gGL6Jao5MCpu11iX99GJv9vNHmdhfz2GT6bA4qyQERmyg3qH2WvHJHrrUsuT5B7uzxbAFQjFdp12",
  "key33": "3JRUjFUzNnPQmeimRe8uYQmdYfPD3F9uYJHuHSxuw7ZF1ms2b31QsnBH3my6hU4jYqhHnj6Gr1UZ5Dn7CpYxpanH",
  "key34": "3tGmWqGjL8n2U1sj8vGSMGsmQucQzMhMm2QU3naHpdy8F6xxm7XWU4k8RfDn9dYpLL4LwhDsEVX6Cx2WFFo1ykov",
  "key35": "59vEvH8dWipqGu3j9yqZ1tmpSgUJui8dqHV6mQWJBzFhA8TWNcXtwaFZZ3YcMsmVtAEVMftip9oGWshLuqnXo8Qm",
  "key36": "61RfwEB1vRD2HGY8NAcJWCc5bVpyqGprWUNwq8Xv2aA4iyFFVu5BmiqcWrEKtqpTdTSwKxycuPhQ8V6g2aumXGeM",
  "key37": "3aRrCSsfSG9Uq3nJ2oZD2NztU25vcEhHRursr3jf2yvdnsACXoZXBaLbH7DnSaibNVa7REeeBziayzy5vMwi99No",
  "key38": "2pJk3CU2ffx7AXgcs3RN7RUqL9MTEMmLkyZXqo7VPiMESjQgtNjuHDWnpLTDb8C6GjYvafudEtCh4y6Ja8GFrA41",
  "key39": "27aKHvXHKjSywcHq3aZZhrdHQQm1c6sqtS4wVBSPMdnfJfoVNeLRjTZUZHEbkKkdcPF7DsvvYZC816pBWF1REsDs",
  "key40": "3KMcaoydGPKRiUWdATqM2eJntjUy8idSrHJULB6fAga4vJe9LkY7jgxNzefoZDckwrFphuuUnrx534MuYRyWTCaB",
  "key41": "4GGoxdg1n31jtBcscNnJPzVaFknBQX4M1cqPTyfLnj9M3VB2SjLie4Sr1FXEqwPfxx2kvQKjaKUgVbFSjYE1Zz46",
  "key42": "r5Jb7rxmDZoDgCkk5ZYs5fXv2YA1x3vh6b9tVppXYWPDyPjfoKGXHYQEwZP7pzkGCVXZELWqJRpKknWhGY21HMW",
  "key43": "2LoEbFoerdg6ijNX7Kwj1azVFqAvioQPEUay2Af9GZK5j1p8LQWtZzWuDmsxWN1iu9P9rFVV7D3k4KBXMUEbQt88",
  "key44": "WAQJTWDhPAqegHYiAR8NdKgw6UgXP4C6UnVSVBsM88KDiShhsthy2uDeNZQmM9KAfo8FAVe5nGQwctyk7tNi5Pp"
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
