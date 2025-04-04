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
    "oVdGzfRktjGv8TwUJiAbLTZgAmBC4jkDu8mY74YCm5gbPVc1eb2f8nGGVjmS2ErmFEm89fd89sK6nu9rYBf4c8U"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "BmPTLYgV8EzpMsAyUnBJ1cj6VWanzCdsgm6FZ9asnhd7S8LGTyE7KYTCyqokSuQocHykE3uq6XQE8Yr8hCZD5tt",
  "key1": "b1hfanCLg8mKgCn9BqpkARMvgqh5hSjyd1jERceSg7nA1qSwG9GXrN2savUHDxA8n7QNE6gB26RMys347fqisw6",
  "key2": "fzqxF1iasHCX31Xk8g4vLQH48DqQGBeZkkr2GUwjGPt3J78q7ybHxgiB91iEZiBb4SCkU1617y4TejAwWwrnJ5V",
  "key3": "3Ra5LgxbwqiQBCpnG52BjmqUGZsWzvZG8gc3JqY1HNux4SxP3iTQBoaaK6Kp9fA7YuEByhFWqzm5g3sMZcXabrg9",
  "key4": "oP2dGMsEysApB6aXbpjfMTuNtLtxNx7Kro6L2sDZe9cye5EFYsXPMffcDqs92fshLFV4sW2BZu3pXNRDzsbzYyn",
  "key5": "3mN6xtgo6qQPZMrsmf6zmQ6wSa2bi35Ti2J66w1D572eg1Vph1biosiRw33ee1ThDUujEsR3wkHDc8tWYp2jEuhr",
  "key6": "5cxpWPXMFWtSHpAtzS8EQL6ztj4Wzv5LXC1odBGgDGzVmnx9fSbvMLZebL2EX72gmsfxpYbDqG5A15GUPfsUSye9",
  "key7": "2bfzxRPJT6oy8UdZNLJ781JV6DTPjYS7PvsHw6e2zNtLWReVDe6n1krCT4U9jsh15HFjXH1AR7zb3iG3sgDxZrPL",
  "key8": "EqzazJVfDiDDGfWwZyWhMYZUs2E6yws197i92KF8tovDLPtT5SFGzPLJZodUkh1cXyRHHBgDJtVqyngV23Wzyno",
  "key9": "62QuwceDiXbb9w9FZLvTcWC35vgArNNKMe2tEi1BJNnUUQFHtYW9ypKztSsee1zjcP4k47pS3RUF4U1ghwEuuVDd",
  "key10": "4rdFmxJLzc2gGPrq2oPtoRRqzCDERfebY86CNPchs1qo8xvuMbMSJxHq4eb8kHeKJFBrpj7pk9WBAfvneBBfD585",
  "key11": "3LPLu3ymmf8NHwzy8vBjeoyFYEvgrBCcziH8kHPCMEq289caL1Y7TEZTdQog1DnuBkkJtJ95Axt6eiHAQ4YTGnfR",
  "key12": "4EaMBVpUZaNTkqUjmCyKBRyTZJL228JsR134AfxVE7z8ezta1JeNDMGNbo2vAaRoibWnx4aurwXohq2gLnXpjDjc",
  "key13": "5oEhfn85JZPXP7ggjMGWYnmoyYwrEF4usZgL4GwXbwHpzb9syZu1VLu96NG1qaQE9tiUUk4KaBvPbmXAtGwxt5wB",
  "key14": "2RQtwsmq7zFgrrAB2oikiLxhtEgFPZKUUBCTmvTqyxs1iGPExJrvJ9vPtWnxgsjJVj78ZnX67g3Mtrn1tS9u8EXS",
  "key15": "5oc7kPWPyzFWBD7mn2SoWaP71grzh3cc9yg2A2wx5ZcHwps8dWUWMUt1EfvRMWwNsbD9DNT4YPNtTsK5FQizMhbT",
  "key16": "2isK1TsL4B1U3876d7cZQsd4BrBpnLJGe5xERgKTFwwrqT9yMkhM4rH4QReojoBMyxMhDvo53pknRcbZkYaf4F5C",
  "key17": "2tbjMxzWnpjyRFBimD6QuiBC2wiapWed7iqHqYxSdZQPcR6zuSKDXQJn3WPnpu8yVrodEGYWYajoRoMuy4PjT3dp",
  "key18": "4hRTtCMh19KCbLrEApqhugVtHHj3km9V9wjEJ836VCMaYvoXLS8HZXvTvgnoiTHM4DCevTg4WV2dQd2qgETiwDtA",
  "key19": "4uaGqSuknZKm8WkM34fp85Vmd8nTH3QbjVxDQ8JTq6dmM94WGp5PB6gCQBEN2ygbEzX2p3Nu8KtWfCufiroJiU5H",
  "key20": "5b2jRpZ2BvVJh2Q5GHrXP6ce7myXfy7YYTPnxc5cc3FCSC2Erp6cbwSWgbz4mUmQrcSiAYeoRyAaCD2ZoDH9Akgv",
  "key21": "37VuPgMnv48Aj6M9Y8M4kkKasyNuCBLbnCCPSJbtNMDe46RrNNV1CZYJAR3hxaCVz3BCH2t5yNSJAj4k6VsCMroh",
  "key22": "66fnKTyDgNu5EUyHdoWjmiPHY8KSLjzsk88d5ZLc4YjYy5sZKDBuBqaJ86STg2tAKPWckANCqsauDQJHgW4ChQGL",
  "key23": "42xhHqKvJnFonCPPWC3PX2XWG4BkpXE3ubkTHj5zLDpk42iDdYE1iK4HZhTrbRPRysEnsKZwom4NfkKB37JY5ekS",
  "key24": "H6R2yeQsVpSffaJwECrSZMVoL3yBL4v3Gswb8uPxFzXMqWRZeoaGfaWQQU7khaoNS1j8c6wWZJ22uDc2tstDEiL",
  "key25": "CeCSKSnwxXodDgaz1h1YTXG1xbn2XB9RKmwjR5eshG3rC1ngxXC5wFnkFmFuMNTV4iXrtXAox4KvhzEopadAXbK",
  "key26": "2Wy5cW2uAtyb56Y1ncaxWmb43u8GVtC7SQd9vuKjshGDLwN24jrHrajh1WmNXqNhjdq1YWB8wfeuQxH72rTFo7LE",
  "key27": "3QbY8HWWUxCmu3pZXwayzU795iJKdfCY3zK8QWF76QUCgfyB52aXEqoeuNQ9YCUDUmwbKg71avJqfmEMkYXamAnB",
  "key28": "2e6soj786PPFVRk2Skc2u57kYeWwqsTHevNiWUMEnsKoD89jd3mraRGekcYbF8aSEKKQQeJZSn6ifqZhctBqBtc7",
  "key29": "5WwkHEpvzeBmp9XxjowStjnD6pMPpX8nk3kFGvPoKRQF8jyFqWUokmcYUo9csUwPRuvxfiAiWk1ceSwCsMCU1M5M",
  "key30": "121SMEKSc9wk4v7ZtwEuRWQuYqtQwA6d2LySZQMMPH3MhHdvGkwCqV7iEUHYnGMAzBW92Ukc4g9FQdkEyxaAYgYK",
  "key31": "3379QJerCukmyGew5rX2ecm3Gsu4r2Tx9d7AcaPSRa8gTJUUKVekZgn3sEoqzdgnbjS136kTXuRNrFi4Fc9GgnVK",
  "key32": "4fLAoKefrh3Qi5YWP5epEHJnbgUXmbRyhcMrkvtJx8kTnNPrwPij77rKzSepQTCFAW7nBgyDrNoAeQrdTjak2LNy",
  "key33": "32jZnqCZR5U1pwGV7xX2z5bqUND4fdVCDVJZFoNtqNeJaNUz58LWJzJH4FsetnJRk4enz1n5ghDuoW2kHitPPzgY",
  "key34": "5wcH9pEbbdgc3kQbhNZtQwnphDNvC7S6mXLaYwQELvNqTabVpbS6rq9r8K1EcMDvmndrER4RRApFmmHxmy9sj7ik",
  "key35": "2n57WEHToSRwWK5akJ2uLBeKES4CKW74bpUmHcuDnftdR5aRPoPVoadUnVneByYrjYC8UCaGT8dnA3sNjv3Evb2t",
  "key36": "4nARCwbqeWkiS6t9QvkHQhUvQBAiCoM9mmLaepMaW7myETGP9u6ADcBHen4AoxeXRSKQmqVmsY2tC3gbL2e5Mqpw",
  "key37": "5jRNhrnYLDgBfEwDsdELQxpgLgPMidQmbzEuQAcpWvocLv8hMbRLnT1s2TnTN9f1onZGQH1fkN1kj8pVVJNphrWq",
  "key38": "42maTj2vnoQn2G91zrfujho6YQRJw1ougy39Uiib925dd7E6YcqEPX7HHbXf4BBAqA984De73vmgGnvwjftLwT1F",
  "key39": "4xNpzYtUsDpaYbtyjiP5EANRaMTyY1Y1zZd7PDThTw1Qk6YhoizHTCcfpXhbh3p73UH2teTBSq7fUWj3XjP5ip34",
  "key40": "h7sCJZipcVtorHoMccQ8XyPKZQJ9QWr5fYv7UUd23PTtwHRGyEYKhsNa59UCycPMs6AV7Vy9pYU25RR9djGvRYv",
  "key41": "2UmwBkbAx5xGXzdqzJFgr5VMT79pyhoc7w7aLs2bB6GwrPtkTMoZjxLY7DYZBkKfLJnyjZYmgAYLJvvaKLxLbanM",
  "key42": "2buHJT99ParrQ5GKD8neCHDuKRMxaU2sgFe2T8ofJNGhrE7Jd9NtoDPQwnbG7xVH8tCqLgemmEzRLUV9GXuKviH9",
  "key43": "2VeQZ2Q9bYWsNSTFkEQNr5iWA3QaffEz7P65aMcGW5F6Ex8ePuy8SvKBSv2kBqqexNCSP9Sz7KhetT7q9LAGh26Q",
  "key44": "3bCnKfJK9UjN1C2W9jKrYrYSSc1J3yB4W8Bc9a3bp5ZnU7qGsZszLfRHa4oAvUSkTtYB9seNv3qQsT7GK3GeqK69",
  "key45": "4n2iVc1iGQD53aiMygUfZDmmdotCFWMxiaeziBazzFU6nHs1ChBsthXaeWEToxL5rWkGZ6BqfMYsTBf2ZCpuLFPU",
  "key46": "4Uyg3JdumFceL1BVBsSYVCVmyi6wc6Ffm5kGLrAtCKW4npv5J1xENU6VJ4kTCtahYshH5j5BoiobBTPybVNWZ3Sm",
  "key47": "4gcVu3k4gEK9JMzsBodcwHn2382caZFqqLLf2MuFJjcFL34ccASpMkd33RwwkogP5TJwPEW5k6sqbRSi2QzS5Zjz",
  "key48": "614ZarCMGpV9PkRJT5xXQGvH9T5XXfLiPhuCzkoB9hurcYYy6nEJbRSA6VnnyVeSfaNZFi8U9M2NdcYzmWsQgcBg",
  "key49": "kHrhavHDs2mVvR4sQmw8jhS4Nr3zWY3HU396285nYKYpQDu5WPqJQBvSR83ujbJN9NHz7Wd5TvYjRbPE67KkSSM"
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
