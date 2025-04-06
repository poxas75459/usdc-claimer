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
    "34LP81CQGRwac4PugAAnJsgY95mCkJmJ6J1pyAy6JJLqQ6B2PoivRx8Z2kGPQkzNNdwsCibNvnJLe2GGYewqadUv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2xs1GTyqR8iB2iiqCVAebhz5wbDoo9NA69d7gBDtj2C9hoYigz2umRYWfWhkkpcbKNsHZZDZeYqhE6zYzQcx4X1P",
  "key1": "4infJLLXqwA3VjV9Lb3kyUKkoyMPXE7EYxbp3vPEfkA6kmPsdk5AUhGPhVdx2i1QLLQRJsF8q78xSWDzR23KkkG3",
  "key2": "2aKQUizg473ki1C7WD3NCn7zc5iUneqXuVLfGvRaZciWMYoBXp3YtcSBLyu7PMr5Qj6CXzmfVVo5HcmMTA5bGD3D",
  "key3": "4jSkk31Sq5K3hyKidDvEFgGa4qtmjxvCNTMmL9qUrYY9SrSLYicjpFxrvPzvxqPwzzjCdayzqnYr1wA9727skKMZ",
  "key4": "2ieFiD8bmtRSCEFXSFs8fVxDKH1viNwydSmNoYbQGYHLzc5mY86xJyMW6DLbXdTbDzkbN3BxtSPUh99f4uJApHcD",
  "key5": "5qppBstMDpFTFqrqvuc7Ey8pdTfAxz5ynHNYFSb7R1ubo5iTyUfVMrSwsJmk3UV2MbvJfRVhJvh3cfRcn6LyLAjP",
  "key6": "5Tw5YD1A2Ke9DPoNsJfvDxnDpQNNfdo2jo7EvEWvwfsenQHrvKnG3T1UAcnFD4VZsrqtj8qQU5KbvzRiwxYY7cnJ",
  "key7": "4cJGqFYfKbBmAmr6ovrfChy4Nfp4YWzWWwQnjFp4DjF98eoBcvKZJTdVFBH43xyjauPobRWNxngwWoF7jPd2PCtC",
  "key8": "4Ss3HMBzUuTUsBkhkYsezukejRC2GToUu6cojq8v33nL4jCet7tM8hoBkr4z67zmnKPdKb8upTEiKete5eUzq1Lv",
  "key9": "HkKYv6XM4wEdkMtR86Jy7V3GKpuzuZFrD29YnzTFXFADrmdYQvvmRnHWbZF2bQotGWqRCi2dBnSD5LpQuJBgxpy",
  "key10": "655wGiTjKeXctRNdZBytKqQcD1s2ecgAgc59osriqt4b4odDywQ3hD7Qui4gmtnHLvAwNyLohTTdR2gTF4jWafRw",
  "key11": "3mK8ma24zNrv1WaZyzDJxAVUcHQqzNG9KwsTDoDzzPq2jB6rL1X1vRh5Rb5a6dpTyxKLvo8wr5EU3ePnC5NAMFaF",
  "key12": "2GH1dqd9Pkv6hMvtYJLR5UE41nTEL8Yz1TpU82MySTQv54hBtLK9H6kUcdEUDwVYzany24c7HdseBDofitqRYk8Q",
  "key13": "3wuUghuKeU5q4mKVgtXLsojKsyCC1SmVhQjoAEjnmKxerzfwG2kB3eeXdv8JTwim6BnsP4EpNZE9Zj9qHMTgt8YG",
  "key14": "4JAwtrDhcF4TUCnnYuSt5pHHc7k1yQu2aXdQ8i97P4NsUMRxBqGAmVJHtWBFa3LnBrwrb6yyfM5VWwA1xX1URsGA",
  "key15": "4jg7UjvWrFKJXNWA9H17BPZnNnc7Jnn2KiwxjLrDQTXmRRHVK7MikhPcGtTNwtKzY53StpuPq7u8HovYdXqaD2qA",
  "key16": "5B82uVczF6puVv7Pj5bKr2anKkKgSBgiAvvtzFh7cEry3mcrcM3MHUZQubTB7167wsL3UoywpRycersMPzoQRMJM",
  "key17": "DV8LdFQhKSNXVdzSvJHmWWecXeEgwGkZF8Busun926Khzr5HoLBs8p4VeA7RMRy6PTQT4KajbyaoRGvV6LZtgrg",
  "key18": "3FsJAQ3Vg3BNR8g9KBkB9epA7w12s85X6QYop1uhvcdHWTM8AnwYfNMDcj681Zk6atETMweUVWfoT4V3Krw9umdE",
  "key19": "PiytZvapwTJ5gdNaAdGsQaWGPiuwvWhpf5iWsVC221zJbHc23WfzDsRFGFsGisHba9VNet6i2sgTT2VY5buewU6",
  "key20": "4XcQ5vq9tAUvFYTShgYmnqG8MxGrWWcEwZ6ULTqrA7qa3jXbXQQ4VyujnuJCpLa8kW9gfbxTkUigGbY1oJUwYLwg",
  "key21": "5BVhYiqocjS6GPxc7j59S9hgohcucdtYRpDN18ugWkpGo68c1P1tRivE2JCE9sahWY6ZUQDsj8tVydtnetJfHNb6",
  "key22": "31viBGfLrazzjZMSnRvXke594MKRNJhX48zjN6p6BNyyb4FNsqNcx2MFNik4EZMsXHS7y61WL6Paf4UcSw3SwQbx",
  "key23": "2TN7Md3dTA3cCBxfh4Fkgzo3any6MSuxiTFVNLLhZx6zFsGzxBLehEwRq7vzgwAmDHC7NZQqKqkDPiWmcuBCKsY7",
  "key24": "5zd6bG2XtordsDMQbQF8Miw1zHpPjgcD7GdkEYapTKXMi7wvyuzZ8cbmqNt5M5mRrb43TZBnCnK9GWyXRNKJotDw",
  "key25": "2Tfa9BumCKnjmDaa87Ro21TJxFAB1u49fggDnpz2DcyLG9RiPeetfAzR7XCbp4YyBU2D23idcqQNcsuNZ57ABNxZ",
  "key26": "2ZHsvcdTBm48i9RNhBtfjcxBPGPEaTPB6LUzr51zkYBh6Ksbt6gKDKqqqmyH7qGQwqPVvH3oZk77T8SWXui4MTaR",
  "key27": "wFR9HhKU9qiP5PJ7aPAHEmpvXX8948HRSrbvjWDpwTRk8urswuA62VjMZtkPyVGzqgXKKZqEj7gjLGCsVuvQ54V",
  "key28": "5J5BX1LaB7ETaYmhQX9sWYgsaTzHdkqVygtC1vZP99UPdPsVAs5bxLbUVSSxSeQP66ebWjD3vhxtp3DgwwhHLPPQ",
  "key29": "4RF8ykj4EbbgsdZ3GbezUdF9r73UkWnbsqtWr28eWy1kkBsuACkatKidna5iBLqHgpbSik8RGWuC1vz9vj5EqaqR",
  "key30": "4nc9RyW4pBu2kqkYR3hjUg2E5FDSd5bTpjXxnvpwuCgoqrzLbQ15Ygxqp7nT4uNf4gofCpstFk4iFWWQijkVS7fk",
  "key31": "beVf1UTz1CZ9zKBrFdT56hyoVjJEjfsgTBzLTkNE4bZKN7RpEhaw2pEspA9YMty5mutrDrovr2w2kBdtXUF9RaQ",
  "key32": "39gTx9GWZHmR2dWLNLS1G7YYwXon8hLsuqBAJRW5CdqP6W8GGzabohcbkMUTFbUtJPue3jQtMJs2psAQFPYiMNqp",
  "key33": "Pja8NaZRQQEXYRPQuGWTh5tpgsN9EmnYAU87mmXGzpWvfS8xF7Aw6MKrmUeVjbPFQvwTNmnbBC15Lzpwec6eCej",
  "key34": "36Cx3iAp5k7KZE4LYtqHh5aa7hNVFko5xju2ziZqRvjE3TySjdLHr31fkigdbCQqPd7MZwXKcKrTMoKm8gsy9qja",
  "key35": "3DbzGYVx9SqDvmpvx2wdzLTh9A1B15xh1vJu8zNQmZV4nTrjEbCNHHCzKCr4cmx6VYeyTkVi5HoJpWp35YnR6FXK",
  "key36": "5f9NFAjH3EL54jJR74S5H3uPx63PMF2nkkS6dJwwUtyFFXFC8rqAXyx4CsqEigt5F6qD48RGtGNtqt7JxetSvHA8",
  "key37": "4f2EmLSj3BrtNnTeoNUEjaTfgyzMxWhb9X27k4UuwPHAso6TaiDznyM938DU2TmAakNJ8KNSdfiHk7HJX4vZ4EFq",
  "key38": "4AdkoZRU9pa9iTmftJ8VLi26Mth8Gojhhe9jipbQ4PFRdyUy1dMV7aa6fvs6WSGr7BaiafqdYTvkbWLYJzAzUqAL",
  "key39": "5yT6LidbayMuCZ4na16Qkwiv5Fx5m8aSBsbQpkxuPXCzdjHAiFmDDkiaDviE1WZa835LBMYmtyoFf8o74eDkKNPJ",
  "key40": "2VxDDN35sjxQJhDC3WTpFpG1etaAr4a3qLT8h5W6jznqEib8TZii1dR2sAh6CqhCG2ikkMiU5YB6SK7XrJkYgGUa",
  "key41": "2dNtD3WqQfYbjFas2o9ppKkppP1Lp3DF4xjpKpZ838ExyyfoaiP7y7v8HPRe1AdyPvB5Ss7bBpmnsHUCiHpyfzYt",
  "key42": "eqihjDJjapY5JWbMNbZyVKVtE9kfagTMD3h7VeHDidZ3SEVNtA1j2USNLeCNtRRPpCAuftypBTFxsLYPxC7Tirk",
  "key43": "2pWCUoMZDayy25xUc7sFpXwypR41wH4rgA1DpjfAZT2UZBATKZ417Wp8s8fvgCbJgE8QKJeVFm8Mgb6puY1e89VJ",
  "key44": "2Af5nXKy98PeXLBFkADyxE7XmgfNpKTbWQJPAi8VoReJnaJdt2kMttySNHkAdmkjVRyj2TJY6KBsMb5PkjRn77px",
  "key45": "3voP253mN3oRFew8y3xdn3f9JHd6viZtafoWCCezD5DMq8QWuuvUPs2M6EzJ1KCHXdezsJfX8rN1sQz9uRx3pKhk",
  "key46": "43pAw5NfeD9PujPEvQTrjNrwBwmRPJeemEWeQj1Wwt5tDRCKGwPij7UZpk6jWwLEJS3tbR7iwQ8kFWgvbWhRgcdQ"
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
