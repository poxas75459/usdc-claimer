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
    "3nahZarZbpg7AHtMATht73aMPHw2Yvy2iY84augHpF53oHuNJxwUyE4Fdyc6prdmnFvoKMvh19GyZBHRTTfGwRNk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5KyF7MrGdZUarE75yAJXFxajkFMTam9fdzTBrhY3tvDkbEYf51woZCw8J5CFuVTw9kpk9tRP9mXydJvoqy5nLH56",
  "key1": "5vybmC5fSTaTXRUxucab3DGZHkRQHvfieZhvNT5iKN8JPW7LQ8SwJep8TdXb2ao8dQy583SVr2wTSkZHkuDTmi6f",
  "key2": "3587LWajrcwhfWh5JSV7j7pJtHf9TeFsZPihf8cBCpBqyGrbuQBspRPpwEepQU99eKDviQT7cTPi1LtxAyHK5ExC",
  "key3": "39j1CoZxPqfsVt7kTEnqg2eVQwKipaSE4GgoydSX3DQ7cw4Wy2Dn73zS9TTBru4dDoFwMMDn2Ea4tHxxq6WP8Ywv",
  "key4": "5UiKr2aEc64k5WWwZcwHTz6ghjjSNT4MkhZTr41vfJjv9T9iULiuNvGGDiZttuFVYLaqb6kRjgnYax34BJiGmNQA",
  "key5": "5t7DwopbxTHbSmPaq4k2B2pUGUpaEVjU4QqnuEzmr3yCmaX1TQgy9h533nK2GhNa29fpidCAiSqdw54w6JedfoxR",
  "key6": "5a2YBc6XUu75vLgDDdsvQKcCNX4KjgwjRzvBhXdZ2Q8yfw5JgFxcfWp8oV5e74bHMuPGReY6gXBWr78wzgqfwpTa",
  "key7": "vyaFqu31JvrSUskNmC3839Jw4DQwr3CP14YWfYvG431fpkR9xPj4aZUi3Wbfx45yJzFBkhsRzyMPY9SpBder1nx",
  "key8": "4WanWL1zVp1MKnWnmNiucqfvifexinJ76vEPk7GfrYAmmjBycdEtcPWfHLA24DTcToTGzK51yCZ5JQuuio3qW8RW",
  "key9": "3zxb6ASMWe12uudGKhfjWWrz9pTWXazjsb9LQAreJZ77RLHMjJ5dsfeGo7XfrXX1DXwXB1JzaRaY1xL1EPjMoSY2",
  "key10": "3zoGgduHAQBhQdLVmU3pWcNEmi7WixMhss4jQpNhELomHxeWvfDgh6HfohMeYKiNo2UNEH3yA8y4zoCGrS3DpJEB",
  "key11": "4qRFjhM1zM4v63R3LS1VZZU3pBLW7FBoRiJK1357Hmzf6zAPrrTMN8XUeRLaFEwTJcWnr7sRdSCmfQFopQVwQCQV",
  "key12": "5vPBHYyjzsJPYaU3rMuPnRdvrE2xA6JFDRcsgYRXs3CBM8DQ84UtUWyXgsi58g766j72gowCPf9kFmT9xfW7X4cK",
  "key13": "5ixLzD6Mr79BryXtiZVmq9t2agAPhhi46V5FyN4HmejxEo1uZKLCmCebmcbqFN663AboW2Ftaiq1cMejNdrL35Ee",
  "key14": "2MHRrjDd5XsNA6ahn4HKcfym2UfwBGCFj875rjXtVyF2wUVV3AT1xRLyeiizBqzvQkYwwy5UK8ckV7hwQo5ZRhSf",
  "key15": "dDRE2WjLzNtauPV35mKHkJrx9CmGfjBU54f6xYvWo1d6GogVTEwwYVMSWu5ZSUJatgfSYQ3xZVMiud4eBxSbcGQ",
  "key16": "4FC5V8uE2GhGpGEtUfKBLgZ4qQSs6k2uX5EwMhoMzPoyV1CtBr9or2ACL2gCV5LG8jEMJTVgBCoGGRmTszmbNtAT",
  "key17": "rDL42NzyikXnF26B6fPuQS39y5z9qR1Xd8xixRL97m3qUdCfkQQfSiojgYziR25pRXWMBeZUHBs4feehs3dZEw7",
  "key18": "Zb5TcuK9VYRRMEf3yPeF3EM4n3YXWMs8jfp7q7e62ikkwmCVgatQ6SzwK7D3QAqbVbkTsL4MQHj8n4hTgyBDoay",
  "key19": "xLvCURaTvJErsExfPfExV1DFHahS9hTqkhVvQ1MeLnLZCXnwpHvaR7ht7QC6tz3dVVKsUDXxDPxX6UEGovUjvt7",
  "key20": "5JemHfgStpX7RExjUNskiw7uj6GYR5eUmfmC3vrcV9SgVJS6dBD4MqSHNbZJUgFZJGSwD9ZDHAxVqdWUVtPrFuvt",
  "key21": "5W6rkDnVnH3komP7KV5tQ911wHytTLm6stRy8MTBipgG3QZvxPQ7LGZGJvMMfdvsw4tisu9ErntuA92V15Z1vyoK",
  "key22": "2GRZS56bLkCgyus3z5TtVBGqYtbarFTFsB2Mh1CU1nXMJaUgkpL2AWxmrJWhKYMqjhxPjfi9J62p1T4zKNernvD4",
  "key23": "5k8bZJDBxjjZwTBurStp8WH9bv8qZfDgorQP288vCCQaFjy7Q8je7Nak63knNeACjjBpHZZ5sGJeJfWwJeLp4mGi",
  "key24": "3pQe6dehHmk2tKDHLgvSv2ejenSWwJPzUWQSTRK3CJfKZU6wzGo74bZ4w6vtATSoQSYuxsSQdoJVCfPz9r31ZGKj",
  "key25": "4iAhTZ7DzEUpkWPVxos8ktvgqWKoCpmix7Y1bT8NQErY4PMbjd6rUJmWaiku4xUVBgALcfsE8WrznHnhCAiMLHxd",
  "key26": "3VStngzo46HLoZu2yUcDNA7TX9NNWQyUs2Dr2G3PjfVVpjBAkQHmJhuJMTc7aJkjxzfEhpPM2DtHkV6D9MdMod7b",
  "key27": "2ooVAfiRiQrJ8K8KPWf8MToB7yoDsCnrgLop6tMM9JfDhrTFEZK4pXpwjpcdXCTn2qi3cPZRbKiVJbH36qyJiBXY",
  "key28": "5SehTEusJd6BzpRYbmdwpAuix2mX5po3CNyFXyhJKATtTPrY28uTPfANEZsVtPH7CRXFCv3xCQkHrn73ue98oF6n",
  "key29": "4AzdCdq4AXtzwCtt9cJEaQ3dWshJcNsUa3bHEjoVfnsfVDMoAFpYuckTPPqLdYi5oqW1i9kh8SArheGusB8kZQdP",
  "key30": "5E3Db9Xk1g1bwL4MC7enYBakp1U5L864EZdK1mK3rjrhtuBnLewfPCRKj2BMWCQVGowv3oJ4nn6WTyxbbAwqovkx",
  "key31": "2kBwRvT7PjgtaNFUnkyzReEP9fPc8CBaEoowv5JcKBAsmkLU2Ta4sjutkdQr2Kewn8dRwCVsrp891jeqbghNA5QP",
  "key32": "2xYoZAUBazNkq3PrWYRoa16qeW1eC5F6xiUScmJ7FNgaBoddzqXwqaKMJbXaXAwcw1TVYrpiey7M4NkVD6KpWUCd",
  "key33": "3BEzrtPkkyYADURCDDtSDTXkCruw4wuA8oxXUYeDXqTF1QQdniWupvSPHtcNBhCbR2EjU1mHSQ15U7jmmycoZWFR",
  "key34": "9WtbqBGFm9Xc4EDrJwgy2J6iGhAHuF4h5RdVXhoaTPaKUhXHvFWRDuJTWWbgyfumgX7mm7PXDDBV4uQtBXRFHHF",
  "key35": "3RXw89XAZqabD3Erdso5oFLEzNn23cNc4Ei8ecPuV4jmJzUaMEVErrj89ExEeKKxgUiViJ78JdX31vMcUfdEkCnf",
  "key36": "3i6jZjzAp8nTAKE9qqcxXDkUXLxDLK2GEDoVhBfbQc1h5AkSagkrvKtq6juKtMRKf8uvLLT5aKB7nUGvcnFsq7Fh",
  "key37": "3Y2fzKXWxEg9NqrcDjtuuYhBoYt1MyQhkvmG3Lk2CdPctHDMqdTXtetFiiPCWERPk3ASGKavCHBmQ9tPEd42NTDA",
  "key38": "5QKBQvctDrbKuiJV3FQWEBCzvf7LkCzyo5PrrnTxaooRx4oA3nZXCBuPc2v82ADYYUEkaR3zXVu9VqRMZF8FunB9",
  "key39": "3wqJVJtBVHwtDJgUDf3Xz7PqJMYnmGhNicVK68f7a1gvkd6acyiKGKZ4UW9vguiCZJHRbCxkcr1mtx46NsMcZE8W",
  "key40": "3j34uFBJaPY13o2WZg4rp44VdS6CezCxwYPC5UKZpM4pgHf2xtN6GiW64MWe61tP3HVBxqyn9kqdF7zVVhuwTdda",
  "key41": "nom2KXCxrBDPw1ZCpCB2JVQxde6JeBf5SXjjTypnDCNdyTJ1Ad3vcEQxHbC4Y8W1xgYywcDp9z49Y4fDXZvTiBk",
  "key42": "5W37LSZX5MGN6waaBU7BaEiKYMrGCNrcxzyZB1Kn35DJHr39esoJnFQuuyV1DmLKQJCdm15aJDCMrDjibtZesifa",
  "key43": "kFmjaiyrxRspeuBU5p1bDodtdcPnYWK7kDfbykkthVLCMnvpK7Pckdovf36Q581jDMn7rRaj7hzV7QzCDHmmD3Y",
  "key44": "234k8PTMRq1mJQQVDvu1vvkKRzKmtyFCEdpLwCS1uRJdcDmDrR5tvWcZyJzckrrzpd6oqkQEXXpBkWHjsTVKR4Qd",
  "key45": "5S77KTDuwgVhqJ4ibqbhnkUjBqnRHr22pNr3SeUaUGMuzTSkuKFLEtkua8RNzCv9tPsyhp2jfBw26EUJ8vNHZU65"
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
