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
    "33mNbUDCUpgw31BNpGjF5PWC9yAkZonCLLtRKuqD88JtqEUwp13qX3ktcBQKWLR8vVZMQPi6FUZxsBd1NeGeTNXt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "47xWQEkWjvZm8vmHaVnSiJbxLXsH1ijNQbHiF4jdPufLXxmXWhtsBYPqf9qLx5DspVuuiueXXitgEiEp2ZS2s8BK",
  "key1": "2ChoFbDDhn74auNtngWNDihkqPj3HAxnTzVSCy58EE2eCyK63pEQaBB78ndrgsZDHG1mLmKbrq26su8ZyL52tBoY",
  "key2": "7XjUaCeAYsmG9DNWaPazi6CgasUsHzpHmEXrrAm3C1oXaJp1jfXtRMLyKLbjqh4FG9oGSQijwjYWQbtvBgBHxMQ",
  "key3": "F4hCU6G37jDj9p4urLeSQNWwQUAxCB8wTu56nEZyJnCZZJUrmqV3uwtJePrApPhiXzGGHxkGjCjP3Rw29t8mXDa",
  "key4": "5SGoYZtFfnfyAvf89pAD14Bg3qfCqK3bPdqhdyaVzMjm64Cm9NQNKf5GxRXD3LiuuhZFuK9VCfucA7TCrH12Hesq",
  "key5": "m6D92Wgsuk4Ertd5BNZ1cW43uXzSzZ1cC9BNWkcoYeXtv6FK7E1hscKNKLpj82F2NQbCdw5raNkeysCchUCmabu",
  "key6": "2bcU7ybXAJhFcUHfB1tRDV7EtmpPKJn4B2uu6DLoCAjiREfNSJGGeYeSxLD6L3puPmBUBND5LQ8c8DfWZuNB3HGT",
  "key7": "6PvCLqG411UPqudpm6rhcNM6MXbbcFvoGiDPcVvfrcGdpwwedox6tM2NS8wM94vEx6vGS4kfk2sZjT17KoFNqV3",
  "key8": "LN8qBnKrcmGtFWo8dGjMsbyizE6oTRMrUe4NzbZw1qwkJg3Cx5aRzD6SeAEDiobCwuixYihyzVuXANnqW8CQq8A",
  "key9": "43uAmR317NZrQn9YfwdWgdBcy7inDcxwTPd8r6FSgMGZMujvDKWXzeLW1zSKeYaByQLRZVa8wgQyRvTpNgN5k9Xq",
  "key10": "2K3p53ARipg8T73ZoTWAwhh3DHMPWxxHT2S8DaLfpuxQgmBpAyRSaRPrBMDXK36t2Yxq412u1Wt5izdFDN6fiZCo",
  "key11": "2WXCpyiYhB7uBUZFfc2kdfQ9ZBKgnP5cRZqYrgJvWgSm6PbKvauT4gwNn3srKqFfZB2U6tikaLyHjcQXRSBZBNG6",
  "key12": "2aiqLUZfocaWJ7W421T9k8V77cVbHv8R2QB33TJ3LGmPjDrmKMpcNPNhGYZsmptK1b5cR6R11nUDYwSABx9MB2rU",
  "key13": "2J8BmNURTWswVZ3XzAUkDMx35dAK1Pp7WZXCqtNvCV5ERe6s3hspDamh9XX25Eut954JqCfiXeEuaayzUWRExDWu",
  "key14": "3oxWCxpqPiqCiRTdpvUph5ubrbAN3s2L7gjtzn1eKHGBH4hxoQyeZB1Fa4i6Fk2uTHjt2vNKRCSaM8NVMNduFYYV",
  "key15": "4sTmcCYksK62BjVTMGeJY7BJpfvoDyNJjCAX8LPw1kN4Hm4CDoTQgKRV5reBa5ZYxZYdvHDneY1TTLh9HqzjCuuV",
  "key16": "2gtcciYgJMYejuDxYpzbsZh5HJDnUr4Kv3tYxtUE8AfS4wxhuJxGJVxHvm2phQV43XWWKSRWMkZRwucBf4qdnwmW",
  "key17": "52qaTB9i6dWwo1QffYKijWjqYdxrvSTLmog5wjCD3wwJeVDD72WjgU9QPS2xyhXrg1aWn7iGgkNoFBPijg6NwVyT",
  "key18": "HBzzoTMKnVa1RaFApKMyYvFd6gQ2pEcdzjyKNz5oyAqUC9CUbxLEruxre7RPJque1hccYMtbsFA2LAaGnWkaR93",
  "key19": "3YviwCGH6nXUxnZVkKHBzuF9PnCho2tHbtyUK5RN2Zx3xhhBN3pMQcNT3BPGaToRQ4wt2N1FtuazeExpScyL98GR",
  "key20": "4xQEFdCoJYsnAc7vEA4jWunJBdtJgNV8FYVb8qvrfEydEn8vJihWhqe5VesWxixmuvsF5uR1EtHE1QFDr7dHaAeD",
  "key21": "2SvceFB3R4dSdvKQxLFXENrhfhU7o7NEndhGXawp5u833SbxH5MGfGJRsDDNaGywS4waysTVWz8Ui1u3uSF9kquy",
  "key22": "5LXANQFmZqZtmdNsfaBmzuScChZwiE4zLUng26t62rf65yJxwbkxm7ZFFgMf9mbeQVLYkc6sVvoLjb24dzSc9zNM",
  "key23": "223P6tkJFGG57eWoeZQdRmVBCQuaNMDGRNsjGLkfoJxAVHt4sftGWryb9qcZEoJKu1SuEcEVt51dCtcNMmbejmiq",
  "key24": "61rYw5oa8gRzoEgB3WVfTt5WMFCsaXehH8KXVoQU3wTLQC7MhrHb2rjwbJbC5soA3rCrui5gRt5yaMFzWsyMqQHm",
  "key25": "4u8vfnigSMCutxtGaWsWzJTRZoBJ9bm42mDVoJ7gDaMjUMZbU6yPTTQicwYfma8qzdYmQUXiSuohWKsUkw4UgwdG",
  "key26": "sfGgmeYkfmrSoh3ms19ZSx1jmuYRb75ehswz3BGRvJau1BxT6SrANtkBmCtR448Y3wJJGmFmNwxraksAMPPX8CF",
  "key27": "2wDwWXUHF5KLey1vgLYwJXqie5angDmCz9pgCscb1G6rubL3Gx6yaF4QQWCD9V3v4944ooUv319Zso6p5VV2mD4r",
  "key28": "5tL6S4DUHKqdewYpLukj6LpBwR36hHfM6tWrM5GmivAAvoZFtrp1x8D2f9PovAU8opmQouUgFmhq1L6PwZbsQHA6",
  "key29": "4V8KR2FohS8jCTQxWSPpFSCrD8dfkPHo8yNbE8ttLBnKXdMYsDoFyzjQrfAxxdf5FoeFmdLLkrWw64y42UXqh2D8",
  "key30": "CiTWn2TaKpt4NM1hgSCzsgzGaj5W8U8Y2aQaqn6F5hCcDkcTRUb6hjSoek9drMG1tjXgzSPywk5PmzJsVYbhxzt",
  "key31": "2NgG9YCSEvEo2nbpXR5XnbBXQyp26LxF78CWi7vBHmEVnwcX1t96HtpaTqKw18vQ3EaifKde4CEiVQBGD3WsLQJr",
  "key32": "2AcppKhG5c5Uq1GfPGh3cBUJ7u6Mek7CBZBGzEtzvHfEeZmYDB29G6cDbYh1E3saNPgLx41ke4F9cdzFBaRyFBfN"
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
