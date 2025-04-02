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
    "4sPDDdkTbfCHnkesB9KxCisaKWvRVFFPaYUhoHBnkRxRvKD7NDrQGmhxXZJKAv3VU13xKVBKQ6UfG2njNk12p98Q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4e9VDQcKqd3AYYDkGD1oRLWdZkVt3Usb4qeb5258QpishZQzB8vwgbar4pg1JeEeVgpTJhCG7faHxj8afpDoexPM",
  "key1": "2B18ff9CtMDrvVCkM5xqAaTN8w9tQYj3qvcVYrRAeQundzUagdpmkMhtRUGvVsqLyidVUknYnYwQCY666K1UV4qx",
  "key2": "3uMeTxr6xCmufn4xkXWNjexczS8mTnuUKU877VWzVRkCD7kQ9KLKRuUxHvR1Avo2y6DeHasaCnH9mAKeZ7So195q",
  "key3": "2Nu7srqEHcdgmnR5QSGjmR3XLYihURKy98jnzygZoo3GKVpHCuFUpSGbmjdPWincDE7WUC5g2FcwZP9S8WDQUP7Z",
  "key4": "saSy88RjxgmkFJotNLG2qfKDnXxh94QjboaK9rgebCqWy2mmHKtHmhyN68EGYiKRqeVXwdpaJtiCiyMbsVfCYWL",
  "key5": "5htbA9djsDad1dnSpEMjTpmYyfqjgukbYjxvx6Ajd4QF9c9tmBzeKakfy5JvYQyS8tyAQLvpZHN2UxqaStsGqkva",
  "key6": "2JiGxxgcQQUNZpaGz1cfNCdZbBRM85ad14n2HWwYAkLRArTgqRGEffj2pwUE2MaLrEJ5bJeSuG6cPS1LMPDWVm5A",
  "key7": "4ELbUrvTnzWZJoYfWJ3sxg8BsvVAWp5w95eWiCBGZCxjezRAobARjk1rNUfbEebScajv1rGEjKHsM4eNBXq5ZbSz",
  "key8": "3cKL3XV2Pe1C67rtUnU47ZRmcVC9vo1YU54HwUrW4DZxdj1kwV1gPDt52XFgjWvR5Jf1XD3kazDGgDvhQnQintPt",
  "key9": "5XiLooWLivysS1kznHieRAoc4SukwpmXBm8Do7Z3vEPwJ94azUJX12PnhxL21VLkCCfuF4AmMoqPuKZM2Yctew8Z",
  "key10": "5P8KcrWeDiEwjafQZ8BBtn69neCvW2k9dvzLGahbVkmZZuWDmCKTXCoE4BExAuU4iUX9srD5pwmpZ9kr12iS4LBb",
  "key11": "3eXcstfVfK71H9jjTGhuak1x4n8bcinEXeQuJtn7xeUumgFaDSkTSsnsuXYLftwfktKCA42UeHJKPuCxxj8TQpox",
  "key12": "5JiGeqcworHJMqw5SjG4vdptLGT6idwk6FuRgZpR5E9F6Z9uPfayqLMAoB9yRBjF9GnKNgxqy97FKHCtF4ggmVjx",
  "key13": "3NbioFQcP4rCfZ3PfwZm6VPZgim1uyQrAiHAk8NmXUc3yN765VXYnS48ia7qKiFrBFtVWf3JckUpfpJY1KmmBi4X",
  "key14": "3Qq2Dg4rh2rfs5Mwu4teHaUuiSHiNm67hqZycG6utuRB8R69NXNmRbfzUtvNMT4LFCv7ogzb3fyXuXdPTtkp9w7B",
  "key15": "39fqxZJUfY6286mxVvxLSfvs3uzsStpt1Ao5jmQjnwWSEBk714cHSJCeqDAPrZeLrbev4o5i1U7vmsydVfjTwQDv",
  "key16": "5VWZxmf6Dssf7BBwgcMzTp5TQ9m4ToBag1p4zki9MQ3wMyNgoLvufXUj3erypn9pX3gryNGp2rkYcYNBVJ6mNmCY",
  "key17": "3scL5o1Mh9SMvkEJzVv9MMbAwJ82tFQ7R9aU8FPqMF5hGex8F2NpnPQrco8QYvMNiGqptoQ4CwPPcSMs3TdaCC3V",
  "key18": "4jrV9rN7UyBLhzZm7Xss2v3xUmX9uKVoGGbJQ6gjFC6uosvEHRZwpgsdKuXihgt3faqm3rBGFSAZppPRkzxjzkvW",
  "key19": "5ohDm1wRn3pHtM7NuJFfSVwtdPkSxtvoRkodYTLyrdHVncHCMm219N8QUaqDupdhU8bABNtMLw5sLeJwyPRpZsQG",
  "key20": "5hmZFPZPWVmHnJg43iTBBtKfkCjaHVSoxkcceK39GGzd2XcXV6YRvnoaoVK5Fut6CkWo8n3wXFc75pfg2erzPZx2",
  "key21": "39m8kVuSihHYwjJEFGQygUWiBVPu5pv3ZN3oSuKpVyxhGkEqQj28EWVXpAMSF69xs9BZGes582WANFPSaz5TeutG",
  "key22": "56dPbvcC1a7ytj7t3T857nuRyWvut1GJZqGDKNsnJiui7N5NH4anVwGEYeh4HXYFGtaDHHjb7XYYKy1qkohE7DBn",
  "key23": "5rYX5D2G95L2Gzt2rXp5nNqPPzi15sgBkxeCNX8bc4oYFq7gZq8GrqyWQbnkVJAWSpy88yPmsZVgqWLU62djb6sQ",
  "key24": "5FFp6e3LSRZaedFNNn6arDAT7zgp9yxNU5477TEXsgFuYkcRguPnwTveCAm1ibcRgC6pJTBwYbPodHXCMY4RSADU",
  "key25": "QLRaqkRPHdYMT5XTbfRXqzp8ZZW3nGau7uN3LWYT3Thc1Hmq69SXdv4UdHU28jbAK8BndysLXB6ubVv5uEF2Soa",
  "key26": "3VMdPJdYWM23NxdaotmCYnF2rRw7Fqk6kKkK28KuL1Kh8pAfZwbvUZ8eCcG82p4GjDxHMH5VKewHEUEBUUWrcnRu",
  "key27": "5U8893bcbGjiNwDLscNVstAiWq3d42UrBkh7CHJnUE8MRnmF7qvJzEMqom8BoWBSe6LGKWK584kqShmURxAt8NgE",
  "key28": "296wzQqQgoXP5pJ6TFf6KVZJEWNekL73HkAzCC1uwBTiLgBKNbcDbXai7mntuxF8xa6C6KGb3i8kmNBfFiB7YXDK",
  "key29": "yigHGNc8TLJFfHgbwpK19ds1b1r2FHMASx63nFr1iu4cQ27Zsw8sn4NoxnxqrdG6AqmZ5Nt53cUq1a6EqedSZ9w",
  "key30": "4zWndDFLqW9bFLDkWtYMLc39QmbYniM11KtEYTeJ9iLvHevdPaR2xntZjCtwQMGkoAMjk9xwuFZPvtAkutRyihjN",
  "key31": "3ioSoqpjPLVbQSSbfdZbLWvBCtE7L6SSvKyaZJNcn54kCbq6nPVV5jTAiHPCUJNdAhp4sddZWnCLbq33VFA7mSgt",
  "key32": "5X1p3AT6cHpDei7VHAZyCB2YEkzF9QwQgKhp7MSEmZKcKscS31Mkmj8B2dov56WxFB9R1zGUNsv5nS5qbeKvTkMX",
  "key33": "2VA9gq8UK5HL9Ke4ALtgRZmt2729quXkJnpZBkaPGrvYbTEeD4Nf831xNZ2UokPmwBqzh2Yzoah1DzNtvrpVLqSC",
  "key34": "238h1kLeLe6fZWdvuqnJwLYa3oYxgdAggWKAwdH1u9NJs46X4QRBzMw4tbENGCJaz7FDAraDGvzM7ArWUjAKDMK7",
  "key35": "bSaikhj5Rbb1n83b3NNUH9dC5fBBSLoCDrzAL66BGNmAELaxcTX8oUdXgj14DPeQbhfXoDh6vKT1FNNhUYvcZGY",
  "key36": "4BMCU1b7Ry4P8eDegtPB8HNpoQRMd6Fg4RUMxCATsPBV6DLLsDHPPyaeS7ESVtr8w9bXoor6Zn2Fu8tX5u1CMKgx",
  "key37": "2R2nETdMpvYXtAagDHRCTrZzdFjf1YHcp3LSaPeCMMCD4tRJD9K57KwNSBuEd2HSd2z6SRWBFasyo24shFBqcauf",
  "key38": "3JmQZrnjkNCekxW5advrE73t8D6D8VdVoJiZrgYgSK5i7FU76KLX3dH8wMrDnhwEFnjz9feZXv9J3gs7Nti1vDFZ",
  "key39": "5rPv6mjheJv9hMxWbgmjpjw5x6C6TaLjUZBRTLoMvhkv5PuoJbETnyPLzhzyJwNmTMcoHLtL9MU7tsfDLGcYTbiK",
  "key40": "3rFfe2zdkma1h5cVBWJeo46sZRYsTppoWs37ZwHpHxp75an9TYTAdXgVcVj9Vx8eUVPgobwcQa1WequftnZiey7G",
  "key41": "9kKEg76kdEkwk9o3JA4vppCyfhkJ3BtzxNc2Gj1X8ESzB9yQgFasvaTSoRi5ehbvGJeXbEQnKpLTVV2Fdo9Kz9P"
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
