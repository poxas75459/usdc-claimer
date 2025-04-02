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
    "3UZ5ChWBB4ndxLoPJrao2QYeV5nHMgpJgxBs88v62LMiZysHpd32M6rbrTDTREzJcaMEjrdJ9j4vtoY5HmPS4TxX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4St76WLuENQ4eV867KXc2zXNaM8Zcu3UaQbe1pj9DUKjVDrJD1UnVvDKV27JzyNgTCrYpqXXN5Miyb53Wkhg2e5Q",
  "key1": "4L8A7oyiZBfUpDYe4b8AqAmxUtqFcWX8HAKtjnbRkUcB2ZenNEs2zoMhsykY12a1hkSzyQGVzbsAxHnpZMGKp39A",
  "key2": "65ckaeBYdX5HgJhTShDMKE8pqjhk498dTwugNHFjpZcgATrCPpR9doVDu9EgKKqAzdVwxy44nyWU93wuRubxqRbG",
  "key3": "5nDomddTujjRvRVhurhh9FWcY5rPtzLFRcZ5e15rKCbxBYuKv6bH1AxvoBCXhF5H85NeGob8EmPcxiphDnTod2rN",
  "key4": "2eq3s6VpVP5PLdTU2kVbTKTiTJtVMcBM82dg9fuahs5ENMNCH8BrZehVAfDoM1LpEYHUqPQQzTTE8nBcoPot9zq7",
  "key5": "ATwoQP84nqYnCKxBR7wUpsXKE4ZThUb3S6SFff3kzLdQVTEstb99ybqKUkJSWA5zBMcAJrt2ye69Z1r6uvhubAM",
  "key6": "Wtj7eAxPxVGHJDKext1nyUPAJyVB3FSFtFzXPpsxxnejzNL8AUwibWLZwNqL8KLritfUR4poVko33F6dHt21hE6",
  "key7": "4ojRHLujMcFVE8Nko5LXdN7YMvRQScg5kqqcjziaRakJN2Z4PK29v8cPeARxHo1CfijfDQKNASsRGmNjWynFKvmp",
  "key8": "5qvYK5byuvhMyNfnMtD5pS4wVJkZP5WBHMXZB5Wpg6Fp6K8mDmBw7TVff9wYkpLUj5yzirNo9q392oThA2an8gh2",
  "key9": "5E1zDoJQPgLAhA7NkgZSQZq3CBkN1xMNiAftwtzmTeSLSgJYnKpzoS1oXr6dwYc8Tzfii6tM5YEPE3nzuz3iosqE",
  "key10": "BUPWaW6qf4SGANHY46Pp12Yzab918igwzZsKB4amTddTMDpgF31scgocLa7wh3oRzoQMGNaFtZgQX2aJhsDLF1b",
  "key11": "3mV7krnWRr9QtB9QTBQUET43KXDRM1WfQ7i3aPxspq5pdPYaMk5hvhti7Tx93quvPph7pCQWV6JkEmbNCCsUqmo8",
  "key12": "jTfvW61q2Dsu1N9GqASiJXSCMZ5MhW7hjUKkdEEpdwhdu1PBVG9WwsR7ZL2CHmnuzMqeriV1gV3Lik7MH7tfF5u",
  "key13": "5whS6gFGYXJMt9ir76WgGDtDwSvNqsf1rQchohwrEZfpRNjWCMxbUko1Mp8P4ewTFyKDUSPDbSPoJmCJicqeyFyx",
  "key14": "5PocdSS8bJ1VZJtavVjFcJqPgxZQBkkEwwNgdMq3PSgwsApz8zWpSgPvQXJdm6bm1RUEqziVF6FWooT2h9o5LScf",
  "key15": "63h1zs7RYY3G5v5AvymQbPNi3i15d53rAygG3Vb1sbU8CjJyKXBX8hcPUs9j8LGsawNESBTaGUqUi7RSyiPuHXai",
  "key16": "5nbtj45crumhXjnWjRXZmNrDMg3jMu3Exxd7EU5pvmVHu7vBSQtV2PrRVCEkp2KpSoN91Dd63JxJfmFTgBEGE5BX",
  "key17": "3K5L7yMoL2X9A55L1y3NioMwPfACdTAfCxHKbaG2M1fkF3Pi4GhZ12jw1MkphMdoxK7o2S7edJM27aNRC2kDXstS",
  "key18": "MbRzz5z6W1tPWQhv8i3PsiX4jKdchWsQfJzgmz9wrDkTrdPESMjP1EhwJ2SPp2ZfhUfyoJhZLcmsAL1pY7g3Yk1",
  "key19": "2svfDwLTSkLzhfNZYJgYAS8S9Xmm37LG4inHoSVwYsAzbCQj4n1jXtxDkJfvvN2TNmBA5rwGKYfEJEFipXuypQLC",
  "key20": "JMUHeEUY4YsZSCkWQEknBGxochKfNEzmsdWFSMHsFRQcNSvTK7dyLcNQvtXyz8WP8P4YQvqXoWrVUf1MNGvi5HJ",
  "key21": "q8pnTL7aHmSPiGBe9mTdmACM7SohZnYrhVuFYFxmJFj1BNXoTXRwyMtcYq84hb8WFnW9Ng4CCgfgcWbK9DK6ggs",
  "key22": "pskKMqbx2GbJPsavreAzhCfcud2r6SjzttNLqJFSDpddKe2f4QAjbNcqkEVdgXc1yvKX1GTZb1wewyUuFajn5e2",
  "key23": "3jjo42nPH57ZG9thKTxUPZmbsYiCa1B914Cwed6D2ATJzEtnosG68x3CemV5u4uM7XkT1NguC5Z8JD7Ajgkds4nf",
  "key24": "5VwGwLdLHj2caxtNx7dHHd4eGUy5wWkCdn5Zj9955Qj76DukShDgLzqpmVMGvmRja3W6yiiTCcdzgaTMgXgWLv54"
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
