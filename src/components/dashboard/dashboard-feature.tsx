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
    "3GbGfoH3TE8u98JZH9fJ7R1Ra3TmMvRsbDhg7MAfy78Ua4oDJNV1SALw5vzC6oNZCFcPWAwXPSXQRG6Dyc1Gf6jw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4QaYdDgWy6Pfpxhxh4FXZKBioT53GCzmGkYeSwou4MeAapz93JJfkDCmGpGUbxow6Yua4cy9wyHFYuqAneLuGhki",
  "key1": "5CZvgm6YbG5HQrKUcyFkz3482LdMTc43xAH3MfHpRggUMs4utVAgXX3po54MxrzR8py5qwxcfDq9HbeDs2HSJSTx",
  "key2": "bBoqzw48ko2KhDBFfQjYqZbNHs7wZExkX2GMoDp2aPFbxfqGcH3qNxFXmD1pGJRg9XCDYNCgbetnsf6Zsrkzf8b",
  "key3": "3LwVbFrNnobYmGoTiq9QCx6grG2VrGLLWMPMcuWAM1D4NnfKSxffURRvREGaYJ6QHb95nR1R5zQGanmYC1TfuuoZ",
  "key4": "2uySqrTBbVFYaH3VaidDNxttBmxTF3TVuCNzdiXafFeMJcVxwZhEHpweiYaWDVp978MAKXazLAdDgPtya16kQzyW",
  "key5": "2BCE6RWEqerd36iVJhER4uhmuXsvju4bvDTgbSSP9H6m1rzXjeSvmHv1HpCn5TRiNaeQeeQfkxcfKKnBtpK2iGKS",
  "key6": "5Xg3hgYJsjxBQRRrjgY4YwkUG1R5aJpBe7rbc2H1N2SKBwym71o87o2Y4MsmyYyT8kv2KdoNoEgWnkTTPiD23PRh",
  "key7": "5UjwbvFVDns9pYwsTSWJmruSitTXji3M4qK1HsVDD4h7yndnQeKwFfoYanhNj6fxsL672aSEWJ8VrTMyLzxR3Tw2",
  "key8": "2cqdNdUHtb2t56VQoX58GkHULUyz1bbj6xebrudcD3fwgo5uCC9cSH8p5WDWEvfirgqY8urNxBJxVyPDyS8EaK4S",
  "key9": "5SiyHPR6LNCMZrbdcCgRozZrH5agZnXWZxJv1zYLQWhFhYNonpFBrgSA4Mv7PnWCU3UdpEUBMouGu77t94544nzB",
  "key10": "2tTCxMRaXdKSdh7PEe93Hrm6zP1GWfJNFfn87eVRu56bqB4E59UV78UXEezwcuqPAC5qet3nwPHJGqQMwUn6xJa",
  "key11": "4ruXWDPTsiKwEHWVY2RqFKEUKLczzvM4dd31sZvbfoEqD5RT3GLzTByZUGpgPrRyg4Hva8H6bXZvuS5Jz6RLQaCq",
  "key12": "oQEFxK1hQXDoXRDhjhT2qByHAZTD6svFP49WnP34w3WAENyCehqoJXeGUyddrmn7VyN1VE6a3kA6BqjQNmP6mDD",
  "key13": "5xMahRGhvGYPmD6kcTjAhGV9rWYmComr6g9tNbeWtdC8ETH7coqcwwfhUJFE3UjxUrdP2NRyHFhFZfexcQPaqnZ3",
  "key14": "4TG1ekbpNSd8cu9zgER9wsyjsFUrS4ZJz95B9WisEJrdUNj9T5pJWz89vMhYkzgHbQem6QtogLGRVrYd6XD5xjY4",
  "key15": "4Wn4JKM7uiEW6CLZ89wwpQ5XoZnKM6MTcDEjxENxfpzFCQNsV5GshqN2ykBSb2xxFFhd8eQN6GY4pbu18TbghHPd",
  "key16": "4ksHNc793i7jGNyDaHFPZmwNybmKdAvMctF2c7VYP44cd7uvXvPiKR8coAeQM91HU4JhJkfmMULY5B3uaFzA3ZQn",
  "key17": "2PuBom5xbuDyf1xmbRgVuR3YWqWdwsKrmF7be7HVFx82d5N3RQUJmCMGmvdUDZ58oXd7cyPFb8fSSV7w499UuVKy",
  "key18": "4iMk2zy4feXXgxQ4eo6v7eGPtBfXYhF9c3TcMD2Bf83iqeVkSsahWjEKSZCMeokuT4gtUYmeaVwnurrzXo3w5XCp",
  "key19": "3rBztHcLXJD4ent3dasuJWDeWP3ZEJpyux27VsiBfFVRo5B74f5rrDhZnUig9uHeWw6fF3Vc5XxccacPNcx9m4ZY",
  "key20": "2hEvYKuTBbE9DZfSRtuXPenDkEW8NRXgJtVHdxZGEcx422JhoSQWWDiBPdmxdMCtBceb26LdRFTKN36VP4HeKs2Y",
  "key21": "649XqQxawPUTXwywKArKZGk8ZbfauFuedNJq3q6S4J4UoeyanUfZesjaiQcpB7P4poR1YgKKZMEBKiXL14TqAJsH",
  "key22": "qtdTAf2EtFHrMN5XDvbwHnaAdyM99cYdrqyUZ2nhoQpt93pbFQWLrpJY1YeUXdw37HUQ5btr7FxW963yWeamdPf",
  "key23": "5Xj22LJLeMuHMZSJ5b67UtB8Hkya6tPfmrBykWHzmsB4m6CNWUgES4F3XgHnWJWzMdbDcDzPUGd8NT4RgDKo1szQ",
  "key24": "3pFc3drwETagtdu3iSQ3ut4z5LVWhGyFy8hPeRgFEiptGN22rYnp72vgghPEDyRzjrqQ6LrnvuXeT6kb9RDaWtXQ",
  "key25": "5sviMHerzD8TWuteJymC1EvhpGQ1L4Qhxc5ei5gwe86zaxC7jU5vcnc7uyB9AxB2JjW55deSzxCioM5sp7R2R3V",
  "key26": "5F2rKdMaPkPPLPGkYeJCHurp3iCXkfAo3JEzjb9thTpVRQ7y2KmUurZ6vGgkT6i9dzrHD7rEeLGzo9dQeowtm5ii"
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
