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
    "2pwdLcBDwZ7PPVbfpqLm6s8ssVWdX3j5gLPYYFuXTW48ATkhRTcpRU1EVqZTKvSnrUL1L2nB9F8hAY6U55rEX27F"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "eczyB6pkKASSa6RhneAUZp2xhDQP2YQ7a7RN4R6axFxGa6xDVEqHYwPzDgXUEyW6NoT5RfVMwi3tbXAedjBkCMZ",
  "key1": "PWYuFoG4w2rEGNCiCuWQqVaxTS3ZU7nmtwduMHTUnxdoWHGYKD8PshPK7qzN6w4knp32m6UwetkiZjnivajfuco",
  "key2": "2wbftWKXVdiTysnUdQXQH7owikbxk3GwM1J8QfUkXb52892bwU4mzAPkpaqJWXKMWwkbG1UikxxpZVFSazEGfGuo",
  "key3": "5v8itS9ZwftYuEJ4kVZfqjUcaK2MTUNfaFdBsDpBmDBdHLNxsaD4EpJsspZKBtWjGdVErVZFh2NTP6BFCdd1D9xT",
  "key4": "3A8EGyJXes8qRpUGsjMNnSZq4xxynNpjp6m6VWre3fzX6r8vNUY4EugaogKicjEoJS6dpZ3n4ByWqHvKzpTC95Af",
  "key5": "2nZPj1kSCgFQVkc1M4fY3NAp4GDg2dkBV3rrsDY5AUXdSWqY3GyLLusTTaBVHwAsDMWJEjxZXBzmXvWeKfJxj6mt",
  "key6": "2JGrrNxdTNwKoXrL66ibp7Cm3sKTQVwNPtEAUanpP3wr4NT9CZQbmyPck3ddmTZiCN2JVYANQJhbrFGSyPEGVJJi",
  "key7": "54PnJNVpUswDTTQXRTFq5RKPKX8ZumZtPcKjjMXLJ5PzJ9eYYe91Y69UyxjDkyx7E3oubrwuGvNk6oMK6BstxtWx",
  "key8": "2qjpbDgDvkpFtjy4MCFJMxSyttx7DB9htkcsEShpjHAcLVmdspz5oF65aB5zJwp3TJaGvnkskqBtBrAK2H5947CP",
  "key9": "2bkTNHFbehodg1WiaVyVqSpbcFRpxBv5PRQNeZsrPjaLsR7zCHDahQGgneMby5JD5U8oXn2CrhiboULwwJbBB4Lk",
  "key10": "2txUGKaq6o1VfgRUnbdfnqMnzDeQj9BjsFEZ8mjNpVe4ZMT181EgNwywv3Jwi2yTEtag5U6SQoAYZzBS9WMQvTkT",
  "key11": "5DVS4RWFqKFKNx9X52AMfoqsRRaPRnPfywNoRFsYDo76LuQTKB42NMo71Xs2pqdQVhXTpxMUqvCsAftYhARnfYL2",
  "key12": "2BZcd2efS6TorTCYxjthff7VWXJp2a5PiYMkarq7LY9a91Puoug483gePneeYPFdY7x9RLi2zHAf8qwajwkDsKan",
  "key13": "7wuZMJqAjo9RNQt5xfiZHPNPA8kJw96DRmkmaSTYVQ94SgsQzxeWZ2Y2z7MQLuStJNYSn7Ti8fE51Ge8fecP72M",
  "key14": "4bfHAafCHU9zbhVfnEFEqfnGqmfbkb8E37W3GFKbxuT16wcJZREX4naVTZGesz5PVciMLYn539h2XXpwwYk2gnt3",
  "key15": "2sUFfHQ5BAK2LccZpN8pW2v3wjMCiWZtxzgYZ1MAGVRVXKrn1rQUmhPydKhT9AKGUHWrbCFZY8srUutZyQA5pGWn",
  "key16": "5eaMUqGb1Q9Av5JRLsjXqpJT1C52hVKp7GthK8jjrDTMCsub4zBPiLUibvZKxa8Dvu6ZUqHLo13jpyBmcz6MbJvD",
  "key17": "5ovf4caejffW8HSVEMdjbBpqPphVmPgcStPZ7gqX16Pr1ufh3LLJmfmCmKqTWWSv6HjNhrBBJi81xhHfE6UxF8Nx",
  "key18": "4br85vC8Hfs3BD6FUiMwrgU9PJjhwkuDJx6KqE34oXcEAzGbXZBxqiRtKeTBwjV3HrQ74Cwb4xXBRthG3AxXXHvV",
  "key19": "5FxibHnyhK4AT8SBSKhhcbFor4fRyx639HR7MwXUda8B67Dqvq7b36AMN8YHkYuUe5YAfm4ijAgd8o3dcQswFEvz",
  "key20": "qEhgH9zvKped7sUyL6HTwWnMmVKQHR1EZY8rtbMHoy6kzby2mJ5mz8tCi8z6UPhpLAeBZMfQrty2CfWMqfj85a8",
  "key21": "3Zvq2PooUsxsJrWe7hL3VoyFqrwEbGNLWSJKrVZ7XDDke2Q1VPCQoX9kFe98bzar59yDzbVD4anECEbgURBWAC8C",
  "key22": "3hdRGWtBZZxyXbHLtx8fFinK91z9Gx5cRbcAmUaY8kuseV7H7cHNRUND8NQjKiZnZXGnDXKV7xkCdZ4oa3wM33yA",
  "key23": "StUFMoSV9nEtXn9JV2msJLZarwEXCRxBVxA8cypm89x5zh9xBmEHG2nrowwjr1mAiXhGMTaSHNWZaKQv5Ya791g",
  "key24": "3tGskLK6aeanvQ4Co6AackynrW2EZqTCPYK7JgKZv94QbwCvcUro6pdj5uCnG8ZWL4nYCXVohrX3WQEdgF3WbufE",
  "key25": "4Ler3oXtjeYRbRuktBM5kNpBmothWPG4P7fRAKmX4khTfTREcbtHdBe8rvHibSYoPEfz9T2QSBfR9VyQz4N1vUFQ",
  "key26": "2ZnQhUjz4o8fgX45ezF3UaQHTAeJrqrJg15CQYzLRrc2DC4yao2eo5Bhxn66d5DkBUzkvaawP4XMbGeygL47Sxbi",
  "key27": "cHakFVe7986qjCUQ8pse6Rj8MYdKSvHaUemUwXbY4Jc8q1hvMBf3QQ6yzE6PdnTVuNTzMoUyRfAfZUY7zhVnUGq",
  "key28": "GUHzq3fZeRYxi4jTTqtdBxB6KasybZ2Wq4vV4s1XvzL9KB4zb9AxCv1VHj2piiwiEjQc6kRxSy9T38WUGfjGrST",
  "key29": "5G2VUM4kXpf2QUqTK78dumadJcKxXeAGL4z9Kzffmpgkhc413KoggzJpKJhiFs6kp1CRzVgoG5jeMkjzQwtEHYKo",
  "key30": "ToBfSibzdPF96yJ3NPqRWmVVhYfsK8Kzaw6q9V4KndXQkYEr5ApjcCKZ9UDpFgbmzNbXhtP4Q8B1rYwzr74akCi",
  "key31": "235eNuXuyprmfsASuzMCpSSxn6ckBrPq3YAqVGuDcj7tPpLpKCisxWBkFiYDYKhxEsKdcatM4K6eEResaDHSg5V6",
  "key32": "4unBDrNTsvZi6E76ZDnvYhHmiNCRNZvMWV87Yu9XqKme5oQUp8PdxSBgmSzMmmoqXFf1iFiXEDYAiEmoAEHpNayy",
  "key33": "3CZFP9eq1SRiwRYfgoraZpvotXF8sLDExWyHmWZDcP4ATHFz4uR5Y44kS76jWcej12TqG6KqWPXjXtyqdM6qW81w",
  "key34": "35zrJN3gBoUZRnJGWc5j74xJjc6PVFiGeDhpUvJeUfUtCBii4kcRK9x3YUdiKjipiMPXST3XtkcBmihUzLdGhmnS",
  "key35": "5MCbLjdFrf5RtRoQZGNzaTnmfNcdqtZrJhiN7pQoDJKC2yoGP7q8SqNvVJwZBQL58XyWgyrr1XjtchuhZWwfgrua",
  "key36": "49zAh4zh4giW8vYQh17a1Rao2Ppqr8Fz4gQUrRUtFC7tt8xMqtHDrRsQvw1cLrYfNqnSkB76F5X5TXmnZxQgVzkv",
  "key37": "Y3mhiCzNApS7tcEpufuEdjXZTurkhqK6EFpUzD79Lz92xpkJdv5jKUUfLE6tFfEtoW3pGHE7uGpo8kv1BmXWMp3",
  "key38": "fxvMjr9LqT4N8H1F512WSiV5JWgi4n9z23xDKLAaT1nyezyiakbYu9TbjZX8xz7UYF9qiY1RMcKbt8dQe57VZsq"
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
