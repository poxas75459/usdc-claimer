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
    "fDTucx55UnFRitBoT3zNAukApHJ4wE4ApqsuRr9gyuf5C9pFErEhW8ecRe2kdyFa7H8ncmHaEerzWyPi6U2kNBd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3nzqwWY2vaW4nFZuNekMdntrxLM5WHsy9rioy8tYKiM251u4BHLTp1UCuzotFnoqsH4zEKNhKmaso5td4yTdvGFc",
  "key1": "3jvj7KnEaTCjBT93iS9xTAGbiaoYzaPDVuBBds3MQ2MN2JTebG2hBnKB3PdgjG2mUYYFP7vVALsEPPgDhEBvjWKL",
  "key2": "53WthrvEVEfHxKdNW9mkATTjWLkpDDNtLvnA3wLph6NbvjgJcRJGr8jBK2NF83YZxVQL1ndERFqHUQkZhZB9NCgu",
  "key3": "4Qf5zofiL76s2u46wziNWiy6VzV83Db6uBQ9rjrWspLpn3An4co8AP6GJG3BmeCbNhZETRyWDGh4qJS88iWueuJ5",
  "key4": "2emY9S2EZi39N8McPD6F6vfEsfDTbGTKkeKj221rbCV9PMuXa6MLVNSh72nHY5pxG1uhacxSxGFUFji7U7oTE34i",
  "key5": "5s1SeL1WbTYm5bfNsNKai4yb3Wu48GvA56TwAihzMaVqvSLkxDdNaWamQddW7B6qAjETeHKTagcAAPfzCP8cs2q",
  "key6": "4E1MiJTn1FP5cUwQJyeJ1CPcXnXc5fadW24NhVDke54rHt9atJHxbxVmKRQ9iAbCzKa7F4bGv4hx2zYXFvjm9nuD",
  "key7": "2pzkJPAWmi2zR2tXzgwb5ZMnH4cXVWL8CqPR9iXVSn542ihMN7jdFyETnPVrUcmW5aBJ7hXkG6L23BGkuBdviBER",
  "key8": "oxTCbTADViUMpTBYYjnGzdSkdgYUtyJjCiTMaY93tNBgYbdRHJ17JBYB4SDgydmPiaiq7MYVgMJ8sVN1PnR1A7V",
  "key9": "63Ev2AkiyZGasKgPKKpb8Eh7YrtEZnXEPjRC6pbYyAJJBALLdpEWxmoWyqw4Rrz7fiZvcGWmABERocjsbzd1GzF",
  "key10": "5HAiqmuo6vaUh5bcmvdDTkuwMbnsmZnE5PPg7Ev9pQuRoXUAmpTQiJXyPQ4PZDYagwjDyjHN2FPVqoW3ZTiPoKPs",
  "key11": "XQQjHpU3LsYfsqRNPaZGkNwBiWgafDnxQAsgHf8BqpcLN9HMw1a5Cuq2r5RNwwLZbqt7oAMWEVC8sZuyXcPmXXa",
  "key12": "6vHkPdStEo3EPCi4FF8wtKsTyMDp6N5hpC5GMAdwpLnxP1jxrYMzgKyfvdcgWmfpurjtPDn1nafEzJUf2xkp4LQ",
  "key13": "5W7pDszR97ksPgeGoEcNtcqCdwL3kSYw7ckKgiG94dQuv5omwsPH689UwyDCuo5bMMh8Lw4pzocqdQRFeUXmJST5",
  "key14": "2qHEw1H9cQn3akUng65AkBZSvToM1dSzouzsrRoJukCDTEQR7ei4nEZETXVevctkwjVG7Z8TYZZEizCYJF45JCXX",
  "key15": "2dz6k2yL3Jfj6oUhfjJ1urQ43kYJ2JQQRFEZa2nUtEqCjvyLpphJmLzs23HH2tgNxtY7ReBqqqz3RTaAotU74q62",
  "key16": "3aJbZ3Dk7HfH67Lz88Yomi7iK1DDGUjQUrMC2zyouh79uQFxNU5E83Xy4ZFJWgQAmFtpksgDPwpJqtoc485J8Anc",
  "key17": "KxomkKX5KFwdveHpiSNqMXVynhAXziWmqWxrz8k2tKCxBSju1SZwUNxNVdDYVvms3hKSc6pLupHM1L9aQzfX5JG",
  "key18": "agvi4phK53LgxLwT8pekeXaBo76MKWVGrkMgxsabEChZ8KFBY96XYiaFDBR8EJ7iHAsndqpSy2ABcQ7wNDvLDGA",
  "key19": "qYvVmzUG8sroASfEXhEsNSSG7PNomjbBvGDMiqiJUyJEAbehBPUS7MwkX4fddZhoTao6Wcz5zBkZ1sCWAQtsbj4",
  "key20": "63YEwkXbP7GHh3eBkKuBhmES1MA4guUzWp1LUaHVH4ovGiTBj7XJ8fMvd3oSJpNAfWSau3faJboXAAE6MLVteDsD",
  "key21": "25i1dka6kLWHqC882GMc1KHZjyrTQcUV1FVMTVZXGyFVxWudruBZotqKoRay9qcorWtfwcUrsvT1L7JmaWTepyyJ",
  "key22": "T5uoGaLDyVEj2dpV8BvsKazg4KattzYBK6xYmipV6D6VPiWuBFEH7x8idmAm5LJ2jFSjXHmncR3xWEXjn5kErxx",
  "key23": "4Euih9UjaTG9qLGX9RSLDm6bj4ykEB6HRZBxN3BwT4TYrJVtBCjzuZ5RKYZiKkAUDPjow1qgNhY5aGGSn4ZkYoqJ",
  "key24": "4W3Vr6d6Qa7P1jKQf9edtBEQHrneKkJRfwAcbaGd9PwFdjwxkin6EbyPXTf2SEwDotFPLoyNWFTFNep7EGGaukCY",
  "key25": "5nWmV9ABawaYEy16jN1eGXxWWCkQk8TiV9yVyh67DAca86HGx2EpFjDhao7k4JeaXtoMZomMk8JEDxXd2rTNDtdA",
  "key26": "2mQccxpqU3XdGZAMbjohpin5ro3zQ7A8zhACwrwxEoxwMHEXAhnJ837u7TimQW7rGeYKX81KiFh8Hi98gn3uqnxX"
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
