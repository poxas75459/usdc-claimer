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
    "2yYBKxF7nzMVQwCfPXPaPZZQrA93sT1huXtWnCL8C7baEwEgnhr4UXTga4jWmvkm1sCzt7fP2c5LG6dZeyR1S1u"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2i8nMvDGCVrfBnTsdGK5zTzJ4MAMHwqrbkD7KdwfesVwv6fDTJGU83xT64hVaGbpv3XN5aVKr1C9mnmjiBPz6Q6L",
  "key1": "5xFks4befarbvAtCYUipvNZ2CHsWF5C5mXSskVE7Dax51sY7MgHcuANdmNTrVCiCsdk6wAUJHJuT8KKWsTvthC1f",
  "key2": "MRqmT8BxaGkHrscy6rgcc7MJc6PdtJUNibnAiUvVtv71bfPTMuPrbvykgdbqMybJvwg5UfjEG5QmEDA3zqWHURh",
  "key3": "475TPidS8pwvMd3P3YZVCC7ZXtr3CmrHnDcHb5aoR8muWV1961JMWpaKUHmFsjkwsoEWCfvBxQGqLJMA2kP7jFEt",
  "key4": "t8MqAW9QvecG81KReGZznbLZxaCZsghnND6xNMgVSfCBjPN5QM26dP1Rur37PBTCNGc2g86vRMUSZU4e6TLsW3y",
  "key5": "5o8KuhXPuy8foo7LHkT7Pe8jZzSyYU5Cx4GUZHSzDdqUsqMHxYXXjVTLDj4h5FxEmEctkbfgyQZkDiRRXTE2se6R",
  "key6": "4JyABGmoG8bHLc8PqEFh67dETLKfrQKPZ5eZ17oGjPHapHCSeL1UAzXa91fBMoaT7edBJNKSpwZTzXha6j2ygmZj",
  "key7": "yZTdmemMZ3PAuiCgVxbDhppzL3bMuhuW3GuQh3PmrmD23hV51ta4SJgcemKK8dbefY7BeG7UtnH4rX3WnenyiwX",
  "key8": "7yUsNA9uDUbqfj3RXxDjtBgHYX8uPqqa222EWKfhfcnmPACnULkMif1NNuHEqfnW6xRg2pm6c6SwezDiZ3xYbWD",
  "key9": "5u4yc2JDyUWNeEeMhy9itujPsD2Jb3kMQi22jUXW61tszp5NNj8rn4JwdyzgdQ3nmLhKf4hL8aBnXCBpxCjD6Pmx",
  "key10": "4eCFrxB4HR25xCcpfjWFBAotoaWvwKhB9VQXLvcXQbZD6DZJhdaSi4ctGF6sqJqNxsPuZsKxQkrUYc8vVAQj92VY",
  "key11": "2XqkghjeTpF2kccZsiMPfnaGzBn5WvbBtsoUEbUm5phoegrJzAWkGrPqoECiVcYPJTznVk3ggVzNGzvzpjPap2DA",
  "key12": "5XPEg2PV3QBdSpKgANXbhWfjiwq3g9fs7XAtbCFFVfq3Ezb8BmaDeKZRU9C4nyQAZwN6cmht9bPJgUFkTXn3Qfv8",
  "key13": "3Y7MaHW1MHD9F3pQQfAoz6ed9JFzL6JxZwFiKzEX9uFVfkEGUPHBFehv5fUfhPaQNHbYnRJgE8C7W8Rg22dUKBCq",
  "key14": "45ugtz8WiwCsUuyouj4fVUwQG3HkRdcD2FcUonFxh6YK7fTVXMYMjvT5wMTUzWcMyauBB3FVH4JM76M5YkaufNBn",
  "key15": "3KL5uU2v2SfPRdY8g8KgzDwAAXJaPRmBKN6UbietTEbn9Wao42HeWoRFWjBjYxgRdLSRmsZSgbwSGFCQFyVkqx4W",
  "key16": "3LxiLvUKuR6D9Wfs3hpW8ZDC2w2whBT2e5axNeufmqn6b7LqtWmrGBjUjqB5vjLiyTYdYC1fkbrLjScCJ4gCpoS6",
  "key17": "5JVFaBaKMySbXQjKFfzAL2DvohY8sx4CMPJwtFT1jUfLyuj6JnAZJavyE9dJM9JbgBSYide3mffzaqdfUgkZ2Htn",
  "key18": "33uJSgdTANA7o6hTPjThv6vkheJcVHLDBU9gGa1Q7b158cjBoSW8qPHXLiFqseG9jpmfNyRj1sVdSAnPVc785aU2",
  "key19": "2SCk1TDB5FzFLyLXJoC6UvsA6G3tVsutKKp4BBKxGsrSf3nSdnVa6UY68Qz3Lh4Wjbe5QzGnhHoGaSvVTpjvbpSR",
  "key20": "4Woj8TCz3hUpozW5FfSgAKCoZSSF7nwb8cS6V6gqn6E8suYKvgetmM2EZr9RBbf7k5akLX3Txsn9eNBnnEhqP1BG",
  "key21": "21XCEe4cKDZFpbdqvpfQx4prwrpgkkxA3HssbJsh9m7g1uXpHCKtYhkX3aLWnpvrUsuQ7QuxvCZyUEmbChL6UnES",
  "key22": "P3254xMSu6AMUnCAtyutWJyBEYKMSsF4px1Vw6UR1D6wRQyVMbtDpapzrYXvZcnG2KBvfR8yQxjvtMEWLiPDiwU",
  "key23": "8CP97f6Rfq99eZ9r1yg9EZiokeSfTkfo9ERLjgkfutRNfnfp47AXkNXmFcUy97wAjZTxhMWU8k5ZPtZMtW7DVh9",
  "key24": "641cC8oFxYvMhMqpvtgfpycMsWMtUte3snwVbLZk1zAXpKwiBwscrtQhKsjwu96rpQKpZYniPAekQH1MVQLvXmsD",
  "key25": "55YJfvCV6L4czBNQdU8zcUPYcADb4rSmZaMkRnJdRwxqnfoimjjjbWMbnFyvPxgAMQGKoCtve3xXzb3bBiJYbGMP",
  "key26": "2TvB6c4c5wD6thteDQxpujWLwHhQqv7zne6vwLWR5VrZYuRD5LM8be8TLY3VNAdjgmQTMe5yWTA9UGfrM2V5LtdG",
  "key27": "45LvTwGnjYgjJVzkEc4Zhoh1wAQNf59MSRbj6ogySoveExH8wH2XZnjT43B2A4Lskce6ghMzacKFuAMEaKSHpdxF",
  "key28": "2RvM3LG5bPiMK1jKw4mrAMwXpzWTFyFfrZQrfpgm6nSmWnt4YEvjtfnUzL1vyP4dPpNZrKh2zrug8JyqktGKBJmE",
  "key29": "5n3xUt2jLkhs1gmKVtt36QJs3jiQKowJRCYh2TtWtCY81tNADLwVgp3GjY8KLK8DNPWncWhcz7ZZQHaWsPstMYcy",
  "key30": "4qfyMoMgcnJctEZCSVygcRy535oBYUnKLWQXuN9bRndtUwKdyrD1xw8BsqGr4Skkrrwj7uaEB6g5g8wSwSQzNhHY",
  "key31": "2oiNJLEtmHExD7ogqSsHNzJpCRHcCTrPJT1SUSBEb8VVrTgLgi48ojBWvDkRRhpkouMDvHgqFPUUZD5jCPLrvrnb",
  "key32": "HJWWyS1P8rM3TzCWjAymZog4YApshXceh61AHm2MdccdthspmigQoHyi8gJjfi9D5MQW9d33KyBQMtfHMQYV8Bv",
  "key33": "22LjGEVK88cdcHHrTTVuYW1JRSAmsEqAL8rjUhSDBjNBas6n6e9BB6n9NyV5GigXcvfSSHPJeCERurKJCfySGiLJ",
  "key34": "4Upn7wUBpVRWUBLvxcnfhUkfn3e6AgXrZyArD8Ur4qwzQEtA485C1tPs9HU7ESvTjgkKKaVsoeyg4Qyjirpu4i9L",
  "key35": "44ZSe631jpy6pPKEszEtbyWJoJbCmbmn4eiygG3E37Pde1Yj8vuE4kKRf5BN1Lx58iB2qZPiX6uzgXGyuiAiuucb",
  "key36": "4KEDLB5sP6wEwE3NHrsTKcZmzREQMMGURgTsy4YjnAJpKkMYNZeUP51NtE7WiNmAHWBifeRw7qcquS77URPuWNkm",
  "key37": "2E2EWePjhvKvSCWK32vnvWgNQnEwozJhSsp36Sp1JXphojVVhz4guNJeqVzkXYf3XyYTY8ArcFSdpztk5XWDep5t"
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
