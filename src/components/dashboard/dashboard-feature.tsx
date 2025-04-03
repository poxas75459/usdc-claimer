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
    "5eLsC7XHbUdSgXVtmakJuF4YkHiYFJci8BQQzYPz4eA7GehSWE8yZAtKe7x5rUyXNkTJtrdBDR3aZPdxkGW6VmzR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4GxRJnfE83hdPyQkbUZptAc7VKMPD2TD9DxRhN6kNZEXy6xMhz4PNw9kt1ihr4QpTKBQNpg6uzVjsx8MgzdJht2H",
  "key1": "5dWLBWFWssm2zhwBKy1JJsamGQUdhXa4R4gk25yEX5qmib96urNhS9qtKxGQd4Y364Vj7tyE8jxFCeEgTrmkthYk",
  "key2": "2CezBS7fmNQFLWZJfcz9jroGNc41pPof5KnChh4rsNAvHJUtEmRPDX5b5EeXk1F6mmgn7fhf3ZXqSsGChq4b11wa",
  "key3": "4hVRRQT2FbfiSuHrZ2UZVg87o1XLjdabdycYLNoq5BobigeJeNuyYNWRDU5AcKHfgHnhgowXkEXvdw62U8WuhoUT",
  "key4": "2VDoY3hcoHBWSBNEy9en2Azb1S3YpBU3nGXpt4D8W6oC3AJAPCxJqckXVL5pyZ5PwKbcgA5MiacyLdUmjrAr1MCj",
  "key5": "4Dah4ixkvZGM7Pz4KVAQMCuTuDJfQxL8ajmo2J9EUGsMjtYrXu3esqr8jvrDvxomV3S4y6HMMfSDpx5abZmy8ToA",
  "key6": "61e1HA1YMG5y5yuFyuRjpKSDh5QdYBdjiWVuDkS99vu7NYmjYC1n9BysfQn72vzjKFDkJAAKPU81fEQRZpPkgW4P",
  "key7": "3wMgq7ZFzWQSdHkbJ46bqj6cuc99qyfiJvKKrHSUsrP9gNNM4UgjfWqDCWT9QsNpaxoLJyqFm19dcWK2aswKZtWm",
  "key8": "NCtqGnBTjvQN5aEqZoFv4d8hX4C32XDPEKMBBGaVtkJZXLKieVraPtX9XuTSCnqRie9jxvrxJFcZNaSUDHhvm6t",
  "key9": "SrUDN4P7xCN5pTrpAtMAt45nm5smZ3bKmDGptooMgyyuZerpCZdDRaWgjdRnL4FMY4xjAERCfYzCDw8Zy7bpSBc",
  "key10": "472t3gTVxkJQyfPmzmWDRc1v1RsyZq64RSZL3KJE16fJFjcHoxBC4P3QjG3xWtwt2MdLcEFWZkXsBrs9gv17EC1Z",
  "key11": "3ymCLeGNgLVS7sbkcGmor9UKcrMYA5k5B6fWnV5TBuWV2WiFTgkfXYEKGpB8yNm7VtAQBcoAkm27SHvmk6ggBZ7T",
  "key12": "4tGMDjCr7da2WpfR3CzH6HuohJFSYDBSFNeKarZ8KD3YR5dXpuXeziFr8sdWgczTG9E3BkhpLmteWTA2pxiCS8uy",
  "key13": "4eBcS9aJodi6zEB6jtLJBr5kt73HusnMCyv6TRfNCJ3kDLPZ6DXkW2maEmqsVvmMLHtDJv11LZreQsJyidHDnREX",
  "key14": "5zs3qqqPTaMDj2ccJf4KQRvqCJixZxdiAdC82QfpCD85aTGAdKSfEnckGpTGqafEaGfXJShMuGJgNimkGH5y5Ct3",
  "key15": "4NcKMUBty1SLhwcCN5zgTBPTaGQ3LcvvVZsr9iZCvLMqdq2JsxmZXK5z4Vzc8oAEuobKUAFmS6V8Cted6cYEwkiJ",
  "key16": "4U7rDVpM53r238NfwcuGVwKgha8gpbt4RVv9mCJcFb3NGgtpAVfDMaLb18uoBgq6Ves8PmrZJCtPE32D6wW89V2Y",
  "key17": "2HqaKdFGGiUNgjBkE5LCszYCc3DMrB82mbof57cPNvnctSAm9cQoEuHqGC3GgHuFsf6MJY8B5XmYtrQ5WkmMGLCz",
  "key18": "4bKv3Bz3MBsKrW5JtL19Pn8s2FrpPwkhyiPxJUfD9w8Krr5FTgfxztdWfpgYWZmWGu2EoCGwvHe3cVBX6HA8VNXE",
  "key19": "5dqxsVfoVB4Dfj5WNt3fN7KP8gzYEQtvS32bbNurTZyerov6y4xgjCenfnZxFoDWk1DrJtPVhWwxbXeeLFpFXE1r",
  "key20": "66QS84UUmL8etBSWDtyG9ipyep1oLz7jrm7GuFzMDAd9StsX78C4AEXGpiV6fekPQH2AD9SDopc8u2rYUoiR4yyX",
  "key21": "3SN5Qc6wFT5sJg2XrgbHV4Wdud1NeCBwV35sCS2jzMFTeFCkmDHqkBJDVLbzMHzbc962HfqPKaSNRw6JB8X3t7ps",
  "key22": "gfweNjhv1Tvg53ehseivWVwU2eVxP8kWiTV3knymg16ZABH1x5LX8YJrhiUcX3rVxZBQsecdaG4dDaUH65NRzdf",
  "key23": "4wSAC7zs5RveKBuJ1SBY7oK5bJd6oiuzSo3kNTAZDdQAHRYGLtCUheTCknZMdwb5c66PBHBwpsC1UujzZw8T48xx",
  "key24": "2YKZYeJyP6NyhzjcFK8yTTsm7mkSnD3jnLe85cCKKRAfb6z6PSFYUb9arFwcCAh3qcwfa1u6nCe9R88bHoiHPje",
  "key25": "3unJFjoqfjiNd9a9ueeaZHQc6zw4LDmYfVnG21x3H7ULauf3A1WwhWS2FqicDBvkqKxMMtR5tM7nkGGZB8swU49Q",
  "key26": "3FMFQcsL3W1Faoq3YQNDJb7TCcQY6PyQR1VpiHWGnu1Si9drSiT6tnzpPW823MGsibFwar4L9QsNBH4kj4XC5Rqu",
  "key27": "3FbZuckswQ6Rpwk5JoVc3f3qVSr5BoM4LBVcHpR7TsJQVdWvQGGu6g5y6xpU6bNJ47sV5pMa4PtwSEY4V5GNdzXF",
  "key28": "44vZU7VmuYC1s3abQWCg2wEH3hgzyuUxy5Lbu2J75CaRX8EzkWHa1n3BXepmqKJ3v7o6ugjGUc6fuKd3YM8QfUqM",
  "key29": "dhTxpn8ekyQopeo9VrNC5NbiSafK7fzMSPjDq3Zj6HFx7sZnFw79xn9vSh643HNrk3zspeyHZi1aviSMzM7rSh6",
  "key30": "5sLmn86qc6cKRAvyuep3yBZEpYSimrQyjzHXjqC3bcr76CqksX6GamqUkrqNDaLQbtVDAcns6X2ksv5hZ7Zwfvn7"
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
