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
    "2GLbBQCbo4DAchqmwHjKV9FZPoa1XWzJ2aVwd5UKCfNJXaouXaiga6ixEpRCxB2zeWtrAXeyXWT81NJJJDY3XYnM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "42CBXU2B2RR7m6yDvR6JUwpfGXPk5PAqfqAzKKb22iXoX3ZLv4qxUkHURMytvKwU1rV6wP5xu1JQZduTYt65q8BX",
  "key1": "2pEep5SLZgkesdg8G42K1g83Gy9GXgSGzCYcJb5VoMBsp2ofJkfzqgDYvGJAWAGV9mTBkv3wwGLUx8LU9mFyEhDL",
  "key2": "2hF9GAvh6qatSFvwMoeBSmVdSq3qzijEEAuSBzReGVo37H8Fa3Fr6jeNQjkj5seVeD7XXPBaqoiaSPFarxMCqNyJ",
  "key3": "4XttLrbmWRqQiZZHmrByKzjGXFjfYvaVWBZZSzRmj67dSMsbnHSoKz57PPfiYViTyMzNCJj5tz3hXw62tDQXye3L",
  "key4": "3MFmzanvpFt2NF4imDUTUGEVNvaMnCUDEs6JN8ayztHkZESgZL7ZBtB29txdheQ1QpwXEnpMbjS5zicGZcBhAodX",
  "key5": "3XqzQeGKwRkurPppDNX7APNTz8vfSB45RYRAt7HuFYQpgeG2hBd1zeXGGQ73Bot5fzErsMXQzJFkKC9HmywKPCkU",
  "key6": "bxLr3cyUz4KSrMPxfaPPsXXfrVb49E6P3EXEUmjgmHc3vMT2SFNjyAc6FJDXPSiSe3YRUNipiwvqnpDcVjCGxcu",
  "key7": "gWPtkaMdBB3m6oX4hERTvrnJHYWC7qNqiUFKqEVkFwcWuTyiXE6iz8yr8vkbeymjKyZERJ1yVnvhxRwr6n5jGCj",
  "key8": "nRjSeCRGjycmCiy3ddd9TdRjXKhXyLVx9VZnU5UtPmmpkxFkEPxnLvB5XVnc73fdGMuNhZXeqSCd3PDeZncnqwP",
  "key9": "vabLCykuuLTdSZqvGXKudnvHXHN4XafJHrmWemLf9YDLJeanoNgQ7QqKttQJMk1ohQxhUAe3MP12RyNzzugxxiD",
  "key10": "X3uqyUrFbgqK4vTzni89XJtxSfR7WwPmLbVtT6oi2tKtaPhCuyZ4p1maKriHzfuL4aaqKiTZgfvC9q3NFVtGcTP",
  "key11": "2iA7KMy8XaFgNJQnGDRkdt697CbgV61cnfTZmmvMcSyuB4fkpmtYGFuqQnbQ8v9mChSby4YvmbVWbU2K1nWi34H5",
  "key12": "4Uv7SEJA5G6bq4ukCj7UEkrjq7QySiDF4z2dgkqPHNGF6Nw2BJnqi5rzZk8rvMeJL2JqUL9zQjVQW3BHcDxBLsdK",
  "key13": "5dBRconebQbbe9bz1CgpCS6DBdMAEoWJERdKNBjCPsq7FYCbCcDGnLTKD7wSdqFnxhodXZPVn4GBi4SwzBVbVB78",
  "key14": "5gVM7xM9LQ9zJ3QBGSUNn13CW5aAMRf2yd1RZL1jVYmdVxyFTzEG5S5wzQMAubfUhUy59sJNEeV4bPXfTtajxBp6",
  "key15": "5Nn63Sw5bYFUVauVnPbXDKK4Pft73AGfAfvcZ6eUKhFdBXxcUASDrG6L3Kj9LEc81RPH2z2izuzPB7DWqaBqiiFU",
  "key16": "2zw2cDGoZatSH3f4jRxMVp4VW7MjkaYJ4DgXQjvGDbQtTJdpsCgRQTAkaimjFZUa51bMN6sG6JPUGkR7LkpJDns8",
  "key17": "3rvG1vGbhNA6dVFcjzXmuJKEvvbMt3egSib33QboeG8j83rCqenbsJjsR76Wy8YDFk8xwSBmp3gChcLiH5YA4hbE",
  "key18": "2qqBZc71sE9EvTiM3oYosQKc42hxqy7PrstcfJTkfv2JX9bTrYtNfayQK2jUu12Gm8QzkJeREuUW9YQAfMcf6zaZ",
  "key19": "4ffPP9y22MmDmdXnMFNsh3EHQLHjp9MznA9miUpeui92PHYmG2P97nton8FRJAmRNVVKBqzh7ky7ZuJLiZ8XAQca",
  "key20": "2Vd4Sh17f2uVz66VsjoEoSnyJrBWZGFC8NH5GiVMyQPkaU44enjsWpEVeSqFMWA7Wj4m8jfpBfwhxupUT4qm3N3C",
  "key21": "pKTZSeztAY1BhRdHyHJ3eC144ZGo4m4VBjpss65QVpTa7vqaZgGaxUUVGHo8eDe17ooSwLoTA4MvBnBrtto8YEz",
  "key22": "5HcwiNi2fMgjJcFh539PBb5iWZkj9Hkv49VRcLXWyPMfY9xiheLbAKmEA7DW8aQ8ymVuWveaVKwC8sNeyuj7CaWR",
  "key23": "zW9vbckjvePhTGn8yB8jf4wmFhoHrjVSjQjYhEFDznMyhJea8Do2tP6AyEP3yxZR1Nz8EH5GSLPkAN9JXHoNMV4",
  "key24": "3ea5K7w4wZv8KwJRgKTKju1scMwjdZxqCjfvCAis1c9mF1gdtZ3zfzxMeHZBwi1tR1RS2Qmr9iSfHDiHNerydv9e",
  "key25": "3GFZ14atSWVQ94CDjqwb6fd4t1QEXDixSkwDfpVUkSPhmoNFGY7P41BnY61qJwzzcNk9jAb99sJnVtMMrdo8Ts4R",
  "key26": "87vfsRu36H8vnZrkci9oc9aLSpczEbEasj8aaYycUMHBijLGSyEhwytLJs6xHYsrrgfc7wUBRE3otB2JBW5mub9",
  "key27": "2rbRDd25u9pcJWV92u1PXB9P1GgbizVzzfumXEMrLPuDL9hxjvt3YJrmzu57AiRD4Rs97QV1qLqFCBRhijZFuSn7",
  "key28": "3BkRGe8cV22mBD2KVYotu2KY99zxRrdMJuVMBPpmUcuoEbmzJ1t7VYpyf8tNBzbXHLr4oUYVZFrRc2LEnzry4TJo",
  "key29": "242j7w8P3WHsPBL3BvmyMBfrtRNZ3fuR9hqx1F4zFhp1zXL32VUD33tkYEh8JRUbh8APvDBV1x8ZvduYV9syUrZ2",
  "key30": "5B16zaeXNVER8Qkczi6o5aA2ykNUrLMTnt5i3wuaJzTrcJVVuoiPeSCQQGNHhKuX5EM7tyJGndjfRUQq8FSqkYoJ",
  "key31": "5CCyAcH6FatPsxCtRu5aRyPeqNQMvqxLZzQsHvGotXL3Ph6EfBosiV52zgUrsanpdqXrJ39mBD17muyeNcGWk1NG",
  "key32": "5copAcABJmjzkrztxh8rbaDWD9h44yZoaUj6mNWbK7mw6t1BbsfcJw5W8Rv8hofpH1UsCLn7qMkx1rJKyrK1F1Gc",
  "key33": "5ciJZqw69i8nRKhHyjedoDQY9FHczraCpjAitMhMkVCWyBMKNrLCMGbt3nF6Mzxmbb9FUXdYysiJcpjcuHmjEU6x",
  "key34": "5Bd1UfavJHZgrZCJhu1466yyghxMjN3qs1sS3UzUoyZTVTcnn8yywAk3uBZB5YZ58KC7ctaUm124JkuFEQKcJZta",
  "key35": "46mBKuNt2h7CEKSw6qNWHsgon9WGJMYFUhSB8GETksxLTRv1W8SsZFWjqdBU54d3y1tJGxLTxwH19tYdkZcQ84fy",
  "key36": "2GBZ6SEb7EGavkAJNtXbvEu7r3AxwuhSSbEwWQYP5buUyLBu2VK2tHoKE9mPF8VqsKTsz48DxHCmzA9zzNcerYqJ",
  "key37": "342pWVs8zvAqLweknTpjAbbX4nXKgcMKF8Raeqo4DKBLB813YJa9BtyCr7mWScUdcx6QpP8FzJHTvHoQ49JLCJU9",
  "key38": "4bZgRFFzyBs856Ujc2ymmAgkTKbfEdfL27hMhxiwkVbeboBJjhY6DDfFP7cQbbfwTxjRv1Ng9tdXNLHFEf3PCPCR",
  "key39": "55iJrxWFCTaVpu8QnnQaXFFcj8HoNeFea2Qyq68Aj1Yx263QDti5EFm5LgLqz6DZoJoUfPiarSMNuvdhvqQBLpiR",
  "key40": "3wCtWnifaJcTEdjCbTFW3kMNJGSXs7dKfYwVxYjxtfVPAYiuYyYoGHpX2627wYDfGJDN3fECqhcaUNY2aujUsRKm",
  "key41": "629JV58GenABtj4fJMh3WypMehEskB82FDeEZXScQ1NgbQha7eBTvcgYVT9qxJFNmy2wUdavFmQoEEbnWGdEJQr1",
  "key42": "5X3uEYuF6XLyNqSh5zvNToX8FvxUX4rA7t9pFnAf3GGZwDZeQvRa2DTaBykaAfy1d67ujUs1hUpxpuSPXk5usKAC",
  "key43": "4mVQtKWrMzFryLGrfMa5hWjbZgrVpiP2TS2yWmE8sSCaWsGYVUN1NBefiTh7D2fkuTKSheUh8QtSkhoH1gcHFvn2",
  "key44": "5c2f2Ve2MjxGJp188Aw7H3YVrJmuiiw5R5H3JwDnuRYy2aEMsUYbBqLG2pun1p4sCaekjmbhoPMTJ3zUHctpabq1",
  "key45": "5nesWmJnDUQiVsSmsB8wifcubbSVCCW42fdzme3aKasbfMatRF9e2ze1AD3BVjus7w4AdRpMix95LbJNJNKDJc25",
  "key46": "2MZki9GWqs4RrTMqa9vyhjwtn1jKn77cmonPgEvnLpadqs2HW3e2rVJaqjD2mntS5RLirTfpebhE6vbKMshaxcLh",
  "key47": "5QLVp27QKG1iNjV5a7jhMqXT5SxMbUKg9EcKCign81QP9VhMJT2arDfkwVc2Nz6NtgDvenaocXCR117L7M7xrmJg",
  "key48": "s1Zv9FPnpMCTD5nuoS19CGEzNPhLyKGJxYYi35gfaYTnRLkQF9hZRyzyLiKZT5nNVdpGUnhXuXPFfZ6VrbKcNP2"
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
