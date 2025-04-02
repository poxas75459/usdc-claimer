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
    "3a85fyC2Bgv5xW8FCE94dZeuWSCjg7Vu8JmU2vvznYazrTSKxGXvgDsTqWyb6isShZ9Wq4qTGaJ8x15J32331aoY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "jUpqqaVadHq6E2sz29FGsMcaiamGAfe9dK7uG4cSw42oS9ukKjQh4bQyvg1LmTeFjbcaU4uoqNLuSRZ2PHPEopE",
  "key1": "4VT82vQxpsFUfA5Foq8aZWnhFjBYMn8CAVNXXXPrwhKEfWmwsmCz2cjbW1UnkqukYCoDzoVVmqs1xo9ssgTbpsMg",
  "key2": "3Z2arpem68cA1Tj6o5BvfUphgivK3QAHsYhmW8jnQN44JESHCZdEWEhBFwCXwAabRBUm8yGYpqr6z3BEg81zwWgf",
  "key3": "TZhyhTacbq9Lxk4SbYUe7VKmuaMuLrqVMbTGki9Ydrv4hfHwJAVUVnHPAutapAq9wH541G3zCLLqaUYpprKesbM",
  "key4": "5CkiaEWpBppdHAJ5HxfZEbLzLaVmya8QtMJfDNP6WoWTMeDRzu4DCAytThBZ8hNdutexzKDfXR9NKehtywc5K7Wu",
  "key5": "5ZXv9BzkEuczAyEz88sSW4zzu221k45koS2k3RgzFKLef2Z2ir1gR4mffkKhranRT2strPXtoUXkxWoZQ8oSMzh5",
  "key6": "2JgT8i9Z28YwLS29Lj9S6Qk9y3amPG1FzysjPWjfXa2noLEEqiqfr1DMhMdCZV7EXjPkj8xH4wcXoMHgN833WzUz",
  "key7": "4eCqY6bbuhaNHMWqKq9uHPqcXVAAB9iqr78zbXnRFenpoiztS8ztP3AG447xj6cLndGtxmYvFyDFC7Yazp5Z9Jxc",
  "key8": "5Tjdy8fuvT2n56BAaatE3aWR2JishtzWZ8VWywChRoA1bASn7Agat2hvDPAz1pSAMMfRh571xbF5wG7EE1ppNn6t",
  "key9": "3YxPeGbwZBrq429c6PGt9to44EKDNkNnVQvRsCxnuy1nCGPfnCNcZ2vjPwLgJ8UPNcxiy5btLCCodqbni3JzpxRJ",
  "key10": "4B2X8ZpoDuozjLyu6PuoBaEXKqe4utrqQaMm4fAGEcuSDF9sKPo62jdegDvqczig6v2TcKMQW1eFHpC9svitD4Kz",
  "key11": "84LQVw1VMDbmFkLwJikwNFZRAtwbT4frppyuZsR6PLerm6oUdwc5hx5byHyAWb5ppRitDB8qGitQXgu3bKi3CVw",
  "key12": "ohwZRMwMi6xhpb494mnwdBmjjd2phV6Doa2XjyGAyGxzL3iPz4sSt8WojtE8bzpFwP3nM9yoHRJBaCFc8wQghHC",
  "key13": "2PhNaS77o6iHK1BpTgYxiY8kdyeCd1NXZhaPAXmL19YC4m9jgRXb1RDc9LYhLMax4Qa768sFeBQNVpgGaCBNkjMA",
  "key14": "3o7pGqEKubS4DPuywGT9LFBVuSheqAy2MsyNLfrRonRAg1nxAxHbDobJvwgGxCqGiF7vrqoaKwqMMhNEKUN4ArZ4",
  "key15": "3VYXCtfQJyVyFpamy7geU5sozkphC3ixaS8zQSqc16i3Xqqv4UVpikmY9hGicSEwm2zZTGRyYWwZqCeuSLZQmUx1",
  "key16": "3oMezdzS7A394wZDyRVtbzK8Sjwiy6w4tv415fvKpoGFxfjMCCKMbaztTit6Hu4GP9WkR3THK9xDQ8MjKkM2iQDq",
  "key17": "528BmbWJZE33YzyfhPT9qFkPX6iE7XyEy9YiMZppW2yMhpeDx4VEBaJZzBT3D5SRNpU6TQEmxmJfdbNSUxbjKkCs",
  "key18": "zbbjeTJfEv8nV1hoNuyzH1obMvBqh6F7q9mhd51hMphdr4pXM5UQF6774EDWpWp22Kn15SUyKUD4Ra5pnj8BcDP",
  "key19": "5Ar7kUGtwdRQzw4tMHopYebHtMg8Pn2JXg3Z4n57uea2yzxn2CvF2P3BSnQd6mYD71NVqQ346tE9iuyyLjWwXtyi",
  "key20": "4VZiCvm69J4tBXAPyJGrbhz5ZD6qskZa9BhMpL2JEz5WT5WVybBAqPpdDCtrMZUgKbMj1WNQyTuJ94gyQL5SEy6M",
  "key21": "2CnvMqLsSr3f6bwJWAbNRcdC4dY3RKrPRswBAXYvwkoUWW6uTsjGHc1VveYU1uuuPePNVVSF7k7VtKZSmMwsdvC6",
  "key22": "2RfUwhTjjfJtnb9fWVcWcwdSLhqhGNGf919TYLwKVHp3vehcdYwncPdf9cBxN6jHP2QhG4nC3oc86CqYycq9S136",
  "key23": "35btydjxsKDWF8GpPk3zxry7qaDVrsZ1ou6cCTW5n7AEau62SjbqXfmawNtrXw6LHEocrtRT66YX8mCiJaoVXH5S",
  "key24": "sEJrzEpVhWqjfD3bbZK3VERkdRfkF2eF5GQ9J5L6z7hEADkuuZpoCuADkDbaDChUrUBavQkqYSyM6S2tP8c48M9",
  "key25": "4UCS92eFRy1mUHpPmkcT6fcktGDe4sV73TPDLWxzERdTRJxdFRyoPBTKfN859gDjGWKFpDHQpxTexViRbNvwcPUH",
  "key26": "3r2jiqVS7FhkhngBA3tvJaJcHby44gmaWWyQ7YDbotzV8xzStvZNZLontNFJn7CKiDjivZncThLp8QM65cEn3qFH",
  "key27": "3TboskMJ16HVWJzRvCwjad2kEmpo3mmzBoaF3deeS3Vpfw1iancEDLYqLQXNqrM18ZfxZdw4SYYMeBtEsmtemLd3",
  "key28": "4nf5gGCEQKrDERqWfCRdk2nibpprTEy6dXz5Rwm19FA8tjTZhgBvTxZ4BivLZbcFFdBgwEyALjUBx3ueqcMfGdpk",
  "key29": "3sBhoLL8ohj9yh499tGkJUEAEvT5k4aaH3jVBjEv1QPmub7EtzASSQR4x9gqE5rsLFVUa65GzGBpcP9N5wpaeDxC",
  "key30": "HTjjo7VLGPKYcB6UwUtQeexNURUdbqoiXwdjybCNnf9JdgjjLEzcY4DrJN7yPBKdDJLBTrtauLsBReAF756SEPt",
  "key31": "4ru9DVdHjS3ZzxHkGHUxLjGtnoCpetPs74gTVtvzmgAKMyaZNBseAMZaUAc2nHU44ZERYVTumuyjcTBNZzRsiLBV",
  "key32": "5ye9Mogo2bECFm4XioE1iX2CVgcRic6q6qBLTpCkevjihQVqpet3FaCt7XGER7N1jMu6BRb21rX7ZKqN6MSD7Zc6"
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
