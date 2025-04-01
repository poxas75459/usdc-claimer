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
    "31b1qm2rFe7fhXM1i7rjdhRMJgsANPWYZAkNv4wqtCWUE2zJWG9zXHvUXGZtHjkSNMHBPW9hH6TPcVm68GvbtPA8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4RKLRAe87DR2HVGz1hXuhpLXjoVQUe8J3ob6zgGcSiz4vbuNw18igSZM6r5rbew9bdDyRBLVmMxPVYqEhn7Xh4eY",
  "key1": "3fPmPgZnESNwsGTHrvRhdepXkctSqMukQP3Tr1Gj8CsNmmR4FdfZv5YxfhYtfmNtbHrzP2EvFtugWrxAUBz941p4",
  "key2": "52bEPMN6HudiAG8ch3mqcJ2fNJPVaaS5CGaTUbB6EUsGtckfkJWeWLex2vEGuRqCr6VzXBJjEqejLhXqUtnyyzTT",
  "key3": "4b4EibHiyWWhJ8Vo7cgQFaGoR5yjWDnURoD79tm5xFUBCkYHghAvQvsycVYFA5PLJQ3vuQVEbr3sMiJRybtfL6Aj",
  "key4": "5FwQNLruUYgionkPraaj15m8GZhU7TRKq338ArEYNB8rPaME8sssqYMWfc88aJwFdhDJ6XV9wKY6LqMzzYUMc6zD",
  "key5": "xrqr8KJgHPgtyBd8PSEW75U4xSRksuzbtKZt9fMfek6hyuN3y4414bQyB26X1dttwuMmqb6hHJNe135KZYBfz9m",
  "key6": "5asWYksUBkkL3vsmjwAYseqjg1aDA5FYDoQfUcTVEyqa2oCKq9ZVUi9EEgezZoqRTvpadn7YhWicqL7QdX4XAe77",
  "key7": "3tZ2oTJqfrf9nv3dXbBJVf684rtPvGspiGmfUc6teX7HWVvREjC9nc4ijeVqTU81GcXyaBzcj1NAAyBe4cmV7zPm",
  "key8": "6gzdm2cgojVijK35NmDhWttbTNrhqnFyCmvEWu6ZxcneNfnmHvBoKwEiHeE5uS7AUkakPqRTuZw8eDME2FxCoFe",
  "key9": "3jZo1sjDGRcTd43zWC3YRnvT9Hjxo3CXrARJDd1x4uidGziv5FNza4kvGTogAUrusdRVmKPirsdzbsgauG9g3otg",
  "key10": "5bbs1yPdgmdPR6qPKREdQ7jxPGY7evEVnJ8fmps6mZYnVKSigHzhVkdNsSvXYPXFWn89y4bfzYB8KFrHWFNfYSCH",
  "key11": "33ftsmHuwsMmucERHkJsyShrEt5n6SG9fJS86YBNtU5zNqKRML2LpQhCzG9URsYZ4KmWfeQ2zc3iKWjyftTr8Wek",
  "key12": "3oM6xFhLJgnEtmaeEvh8CMJDVRwA5ZEW1Hzzc8rjEWh3nfUQRuhbTRvt11RQq43f9AV3v1Bfwj5J9SfnksHzLfCW",
  "key13": "PhE829RNozbYF2Xc5c8BaYvwRYc1YE1XA6PcCW1xQ3wGzUvUnKpNWWYqJM1dkK96QcJZAy27YVZH4orJrufJTJy",
  "key14": "2fwwJsLjYSEaR9qvrU6irds3B8XLDLpmbAfoH5HyhVNJQFTPoPbyimke7xw1fLpTEFyDR5DzVxdR5qPXuWLPVZyw",
  "key15": "5QnvVx3SmeU2ha8i9tWeGgdv2RHoTyduESCHLadSLGvTLsaNMYkzC7BrDvrnzuvtChophtp9YJhyw3sK7Mh2Y9AP",
  "key16": "7nHGxPsxWhvLN6tCzJf7Cf44MqgWQisyZSmkDCXY5PXG4qeEMTiBhQYMVXS7CrYj9Hi4RR5LnoRwmbbUxtAeq3j",
  "key17": "2x2BkmKwuUiVpfMXVaWYS7QdVHnapJVfHPcefQrqjMMsjid36tcbRagR8nKNW4pdkMumA2UEGoEKJbrRjFUQapLT",
  "key18": "4A5sZAgCoYgALB824pLJP6L1o3ts4iifhYAE6kmVKYJcgeGTgnq2Y9Uk7UgsZXGBzjUeGcS97TKhm1J7F3DgqAA3",
  "key19": "coT5ZucyzitotEQFmiyGfQKt4ZNk6CyixTK8E4jdohVhrw7nShYrBA2BkEsCyBhSJDnyM7rpqAkxwpiGC3T3ipw",
  "key20": "4kmD6jZDjzGMhTburSdhnqinw2jZBJwoei2yqLeni5CBiuSEbvMrPCPyX6De1fLcsnpuaFxFv7pPdMuSh6xzNffb",
  "key21": "3uiRaSsh8WJrVccgyXuqtZF7udfUau6dnrekqiQHqMZjmECJWJCMiEmhkVMtvtH591tX1NjLaJr5hNTiq1WyEp3G",
  "key22": "ZFjZ3Azk7W2BKdM43ZRHc2AoqfjYxnyNR9yVNoc1tYJAuaYj4TcMq1aRjKRYrJwDCW6r4pnUz9dGDjuHvmhrhSN",
  "key23": "41J91PtpDhmHMaSpGmdGn5JUBstNzk6znkqUe3nyoaHaBTK2zQyeYGe2emr9A4RPJ7Xi8czr8xdE2nPX5jRNRG8E",
  "key24": "2RU9DaJncBxSdv4EdgMwy9hvHJUFJtgMWu3XDY3CVXB2DnGQyViWS8nTwWfCevgasWuvWU4EktTbAZyceaVtFPjB",
  "key25": "5mxcqQ1KK1GyKpgSk83hijfRkgaFwsKZYoAiUouWGZ2yot7gEberg4dhPoNQXWDYschqzpdUKBajGeZFX189de5U",
  "key26": "4TbBxid9ef1WMKMKLam1XC9xuhVAKGQ3idNV1PP7PZFkcTzjbZSJTbUmChFgXCKfX6espwmmtGRcfYuuJaYVckmF",
  "key27": "2ZPssnArdxuU1kiTdZ9c9gGszJ7RWMh3tX6kTd3RGxEmBtHBYyrFXuaUVFSJMnE6JRdFhxU1nFJ2p5VpuXMDDAuk",
  "key28": "ewXPRtwn8e3GwP4fbAKrFLA2VKDKWgZkswUREfiu6AoNykMH5Rf7iQdzrQec29SZXxHiwxTy42yNvn5wSijzBAD",
  "key29": "2FDbJF3YbD9UUax6YsrLreMccGK2euYrr839q4jaqXnKsxKGHAm52NVgQRx9B5LNA187iRxgHu6nBvfQbYgD7v8L",
  "key30": "29djswCBesY6a49cmzMpTy4Y6wjecDAKi2dDAN586Tz4pMJrmeudLm2BEJVAjuFb6kAwKfAKvAdp4sy8J7zp4gRw",
  "key31": "9muwTDc1DwU2HfUGbz2czimuWnxL7AV2DLewq1f6nGhCzH8T4cPzBcs4DfoBsMNpS27pCAr9UjLrUNwckTJLDHa",
  "key32": "4smQxrdqPB3PBvP9aL4VHvuMvWEyiSKHBv3RqNoaVvTXA8Sx1YzDkg1p4RmNRVe7zmQFHudn7Ez3YcAFZXjAmXZ8",
  "key33": "4g2j9PjqXXXERRNunzAiPXu59iWayeYfRgWfGMgqi732FBE3UdNjvB9tMXVwFXnFH8kH2adAFFioCYTDA9KgCNUa",
  "key34": "5MVFbmLGsmJUanf4x2Yf2BkUhJWACFQogZpPk67bQwDLAJp78fbD6Nx6LdQLaANnv4HP4QrXcudB5KeFhrPReJ7P",
  "key35": "3QccZvEkCSjPbAEaYkNmZjngf3mY4zu6pZWrTwnNhnBT9iMtySenDQUAxqqr2EVxtZyHXGgsNX3z7RLza4iD8QQY",
  "key36": "5EZQMK97y1nntFnecZVg2qvKeD1V7TQsBWzKy2uREA153Efp1ysT2UrLgc1sXJP6JLYU8F3wvwj5m8J2dZniC9n4",
  "key37": "xaQSP7czo5sPZRGyXom9pUvjisQ7YBGBUp2ZPJMALLQffNKfszfNSDkaQWcyu8t6gALVYaZWfss3PsnUj5XSxGV",
  "key38": "5dAR8KbjUgMVm8tm8dPQrVhjYi8nySyFXamtULVBMBSBjbWNv5H3dnSgRjxRTqw9s7Kh7reRqxL91QUy9ozqzA7j",
  "key39": "XTKkXaxzQkXVNKmwN2eLo7DSeSZXmcdstwnYZm559X8TWgQrYXE3YKmTtxvy3T4rg8CHzBdtQqGQYyGUuoutaPw"
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
