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
    "kZmGLGkK6rtE9BS1wsbtWJmDBfCLUtaYfrRxmL4EfanFD2nb1a7WuD8rVW2xMXJhXoKcsbXDx7HMvENqWxT3apS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2P6r2J4SqEoWNkgYH1BfvjZE6Cw1uKdUGtXZ4uT5N6EetcxXBk2en8HfjXQ9VPGMLSc8ANGT66E5MunqX7N9wHzT",
  "key1": "qNJGAiTy2inJLL5SJPjSt3MRFgYBbW69JJDiUymRK4riR4Y9YFvHSvcyDSiCvQ1jmZbxkwoCyeC97XupKCdcpn2",
  "key2": "2PXKzcSdE5MtX5LshzceLMYNpFcMot7msGL3tA65PSJjZ8MjQZFRxtPx17tGy4ypz6c2HBC61gwVw1pS72v3A9d3",
  "key3": "2eYfCQqJJCbNaayYRnnavbfYk2LwFYw1ej6XpfgA3YiMz71EZkkSmT5jznwotwDkJiLuWYSLf1a1CnmxKnDJimsk",
  "key4": "sjF5rHu1SxK4Z1CruiF1wzQFetodeKxZ3QWRaF9tSfT6QhH3nkjzBXkDSmhx38GVDCPRdD4kaRdmVTRWoBkGtJf",
  "key5": "4WGbtPHx7MMt3tVm5wzZFQbSA2zFX4t1K1pEpdFygPZzwvkrPaTCf9qxzBDMab6wxFJeM4Bm8pPNTkLQ3nrWtmrT",
  "key6": "fcwxPCEKPrP7ZjpeZ8bvEJAPsHZr38MgrFw2ptq6RBr4G7wYbaW4qFesDKdzyLTzPQgCnzJganikBAD2SktxSkV",
  "key7": "5VVBPJ2DQVtQ1U7jJsYmuHvTapdN1V9aURD58TukcL2v9R4Z6qHSXF9QDGc7PbWdk4BRTWauQMSL7GrskWfqzTaq",
  "key8": "5qioW3QxDeMae4NYEAJQtMyMVdg6UfQinb9x8V91rGfFaYeUrFs1aPLZ1AhPW8qn6JGyASZas5JNnnsteRBqabNU",
  "key9": "2SyYdwASB1AafLxgcN11dELNDboer7K5Ccj4KmL3WL3WwKFgcYjcyvjTQwqArqXFSF249sGinwF2zZ3ekwk15cKx",
  "key10": "25c5tZvkfVRFzpTBKjfi7LN6kGFA9GiAmyYNCWcotmu5cAFLbLDZQfbiopXG8aq5F1NFM38xpTRPVkJxs2j4FtTW",
  "key11": "545D7GdXakbLJtWpVjPYxT3HeTjTfraXkdbWrkcP4mcLfJ6Hcjvy4Z8BnP5zwReTpv9QAQ4DyLLZTFe8Ps1LV2Cc",
  "key12": "4vbL7PYKs9C9aCqiQ36UG4sDjW1t8zKXWS7jLpMPvRNHvuiP78EmZEDhmW9A57hzqvXXWLgPVbPcosB4gHBSC8tV",
  "key13": "58d3GyH7WVgGJgDBqkAnLvfMNiGjWHyj8kDiJaWyPRGXGyUhkTCC7YgYfU89HCZtsQXLfqrx9PE8qnMCVmMxpHyW",
  "key14": "3NoMxrfQhKArn9a96pTW9wREJcEnAeJkeowCgTBDaeuhaZ4P1frUaaFP7mpEkhfhsqvenDYLpzhkQxif2w2MPnwT",
  "key15": "33YgnsMq9gp1XARSXzu2iJQNpyyeZsTJcPVdf6ryGSBUXC8BtbD8RxJLT4EzTxekoUY5YSuehqw2Gbu4U3TNq93U",
  "key16": "3K2db5DcFofbzruWJ7yzeKXpwiw8oCtQYCJt8hk2mNo6JsTii7d6crLyReb6GPBMj43uN774wsauzUtwUHZ4rgBX",
  "key17": "2Amoax5CSKeh46MP38t1kBERyHazH3GdKqzefvCMNY1sA512p8kspMBRyGepR9BGyXbUwbtf4ZXPcsDm3wSx82Dz",
  "key18": "2SjqPsJGYDx8QjLaFumQ5zLc7Sbkhpd5bsn2WdF4k9pN8uV66H6esuEdFnr2HcR3LE1g3wnbj275ggG369w8LPuw",
  "key19": "5UZtynLv2chPteD156yWmUggJjidaQvtyBKVjx5kn2XGwK62BtCJFogbsyeJBY19X5a7qy7LvXzvtCtxaquvL4nY",
  "key20": "4mJkA4N3MnphJTsehFRL8SQWrbPNpLFViDz6SV1ksfkeYL3t83E8fByxT7ihQiH6XSRGj2kbBq9TDx1a6fJw8MF6",
  "key21": "44fmo4uiNnEUUrxNVKuSH8gYbZrtqbdxD4TeZ67bKNVZ6Ck2itWJzPhxjDrDjgFtkkWSnd4C1ZKYNw5ZG6zAqsd8",
  "key22": "3x3YC8fouv1wuPBZVeGuqH8BNCQFhJaDcT9AkoofckTjZ8erL9nwUyz3XUKS4HzkrBavMUtcY5ueLh3b9h5PN3bu",
  "key23": "2LWoj1sut6fNombrMrSqypziH2TkfzFBzyd5AgrmLZUuPvoD5EjvcjjsdNe6GEjWSLkBsUejMHTCeAvbrwMNfAsW",
  "key24": "2P7baFvhmnh2CU3k3aFJ9XkgZ6x7ot5F5rLQVPMGcH8eSzGA2LioV9rxYtQH6wVW6oUeW4PYm95aYfgJhJ83SsuM",
  "key25": "34s2dEFwrVsqGSvqT6RGvbWPCnigWdxaCLAEK6o5dX2umjdhFb3jmCNH6wfwtaXB9Fs9UbUo2xK2S1DWFKPXf5Rz",
  "key26": "52kdazJGU3PYdZ5VDgjMuu8tWL3AjPHuYvqDtcvCHVT5jTL1y4dmqMAWry95mNFTWb52WZgqWPQYYLhZXPMhBsP3",
  "key27": "VdqHxu4ufXc6spGCHWdgJbmtRpXBpaqTy1LykUvT42j5LqTzqjS6NS1VyAMn7fjGsvD1mHiSogMmuESYbdM5oEW",
  "key28": "2gDKgaM4qcExCex8zZ4bZuQjsG7jsZRLpzPmxe77W9tjhxTPY9yezp3rkj3RgjvKc5DD6uiSsVSncqfjNStR3RkZ",
  "key29": "2fzkQqKYGmm6XWTGh1BS2bCSaKCFRqk5n7a2japg3iqzMnp3ryW4nmcuSiETBWZJcLSU4VUrC3u3CfKuag61Sg89",
  "key30": "3Zjo7jjz8CYf9u6uzax1dEnQ74GiUR3ZF6WxgTM6SvhLfgFTjdqAByCSd4AvppyaUVh4U8SdAe88QUsc7g27TdSx",
  "key31": "2mArxf4iwbbEXLhR6kA9Wq5krUhb8w689cWd73MYYHdz7JdzznJChmRUbH8ompE81uPB2eAvHjwBNCRhEESXDLcd",
  "key32": "BdK3SjgKohamQpEPfwS3eBHN7JJrExajoaVNkgqdL9yfXfcoYgLJ6GhU7KTvjWRTy2AWaCkxssnd6WWwE37xNLy",
  "key33": "3fMu8R4U5cbWLVJSTsWkKRMKoByyPBnTt9gXoiV8TsrYKnzDhhfanYkNBSvT1DNL2eTrTUcJTcM67BC8yxmWY2uP",
  "key34": "5a4LsCe6mXS7knVvq5efWBGWpvGAeGrHf9LRhqLE37NKRLP3YgpvKSGkoxMrn5m5GqwKi4FRCQVba6UuU7LPHLu7",
  "key35": "31RwRbJKunnfxGWotb1yyqzPXnNJdhvu141zyMzqSC2sCdeUHcmWSqGk5wnXVjogqBi2ytdqhxf11TvdqP3nKUiZ",
  "key36": "66NwkcKobqVWd8H1fUomuVicSXJb2V9tcqWkZhx5bpCK3Up2sbTdRfknDFBPeGP9e11mwF3cmtYkBnVKhYTRH5cb",
  "key37": "637yqetmr8LWxFKRFbqYrANmrgGKb3SKaiQMvAM6EumExj3Pyu92FRBrpBBck47CRwzfB4p9Ga5CsmL9anoXJzTU",
  "key38": "3eHNDmifyAMCBbbj4wRk21LKrUSG5sMZ4kBHcf34Yzvgpx9U4MzKddNXJDvA6VZjEsjJL8SvegT11opK4xa8zp3M",
  "key39": "48yivJKERM9ebiHsbDxAWvZ5jGzu75AkLAsnDX7CJjhJtnETMWCYECPc65KNVmeB6VirAFHytAH9KfFV9JaS58zb",
  "key40": "PePMvSBRML7n94hnEsfWVL1jKr4bJEi3sAc85RQXyZVw2f2APhdNeMw6CSGd6Rxd4yDNiWnjhTe3w1qSoX17BSg",
  "key41": "4Lbesvgys59Bjr9wQHTsUue9Bov8pA3qfR7MpSaf8AyCYREm1xRuk5AGdNeLvvfNcXqVCdSijWty32vKYBW6yKkd",
  "key42": "o4pDoXx3UguktddxJMUkpKZnT2s4vVoi6FwHRD2rNESsruhmMTqqc2MYrhWqpZWvH6nbevm4R8aEQaCXBR7wUC1"
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
