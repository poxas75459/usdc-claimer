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
    "3yuqmqAJw9nQqd5bE4ouLEoqjgQn9wGgRokXxgy65HuiKnfQCrLqdjNZ4Tfg8YzNc3VoJHovVLfz1AF6yAiY6E5x"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "xbDXofzpruA4Cyiyk1XTvwciBXqntW4fM4EPwnLS7cnEnkxDoSY8yZmcp5YJj7gq7rsqfQ8sRpvD1gCawRGcGTn",
  "key1": "3dNxDG1DwQJgRZufBGiiBs45wQUuorfuCh1W3CbCnWiJTM4KDvA8u7SonY9LudyasjF5mXmxAwGTiEHtzaL9mb5k",
  "key2": "wjgyRmC6AuCrMVyhSPifcq9R9bFTULe42E74txJ7ejyYyhUwGw1hzeUXsHa7tcbXikzGQhCT2sF7d75272XX57n",
  "key3": "2RyLwzwTunLvdjJZp9PYM4MfFfXAk4Ro5m3DWKCEjZTYkh94tfa2nFVUFkSxnNpU26qVVboBtVw1vgVmWVxzd3PD",
  "key4": "JjqUsHw4ZverBdegjmWxjzVXahrjmzFPyztRyoo7gfmDzQFSdkhkFuyXDMdviSE9gKKeA7YUN1M7umchzPVV6RV",
  "key5": "59N2fUGAmA8D3qKxeAbdkvceVi4CAkzvEvKJ8ScmHpoMimaRrCjMk4ZPKj5iJzs6z2H87jZzfzFat7vALVsyKvr5",
  "key6": "2r3Kjo44dPqmV15umQFvZQJTf7uPbTa67KiSHf6tkE9EWEyPeZpzA7NkSGj3D133RNis3jgxj7GkqiyTntJJRGoq",
  "key7": "3nP2shghyDAzEgEd1WNpHBHUX37UFkfhpFyiKjGAjk7hB8deg2uQKwMQ4FvdWydNtCwRocNJuUJfBuQ2pcdM9JWC",
  "key8": "62Froiix9Hcg44PPEifiaRVGrd57v4ypmbDQ5gmFevyh8JV13Rta87JpPvaeZPAFm3ttoZV8YrENQmG1wRxPu48F",
  "key9": "4AHpuxKDBhM4hfSoSDNbyk2xGmo5MTvRSBR1NcJ7ewtrrcyG5qsr2izWAtZBif7WCkfWpVuuryyKyTZ68S4vbufQ",
  "key10": "5rc76zha4GkWiqmCgDSNuh8Um4DBSHTvoRFGXmrLhV5LimfiPQYwBnbEMBELe88ckpRNxYCYA8dxMUN9ThFbwv8K",
  "key11": "yx6rDA5dBuM7xD8ZoiT6hPfjo34CGwJN8EWxkNe6YmS2EH24W4ddGRBt6bLCepL2zhckmqj3Y7ipBxRjqyaGQkx",
  "key12": "27UJvobArgKKdGooh6ivCD5ZXZS1obZvoJM21NFHXo8CD8XidqYb34XpuYgb8NWJjjGrRGxetTs4RgJDMvgRvmQy",
  "key13": "xM9d2BJYH6w3t2LKsAedsjbVBbZjahVaVeFTeGrJbSzYu54ugnsGbnGoB39f4ym7YEX4zqXzvD5NX2uzYMyFu2p",
  "key14": "27etk6ZR9ry126x7bnDFAX46XqzV5kN1s9j2mqYwCsWi3ZWzrNFQFSY4mUjXHxFoEPF2LDwNSLVKxTsmxBzRCHAm",
  "key15": "EdeQJGCMt2fsnkfKgVXw46mtPNyebYLLvgNNQfcMky4Mdd86nGhBjoJcKNg2BYLWJUb12JgJJizj3bNZRx2MNMZ",
  "key16": "3HidwSyDAdbBtRvdFsJkxi2v6ZcTSZ254eW8j2eDyNyud7ToqhacL5XKoCNBbUAs9yP3b6siKL6MQ4nWrYpEnFjY",
  "key17": "2gpLYfsD7Jq9EgCugw1XwRBeGzAJr9mFNu641AuTUPGZjGj8Koz1ssfSchzmKptgBAJC743DwQsvaKjrB29uD3s2",
  "key18": "5y2E3e7arW6VNEqvYXFtuNGz7oTnPZPpTPBUK6jHLpZHWX37QfB4wfCUeEV8RiRGbZVsyEvJzBskbYkknGEb8aGm",
  "key19": "3Cd8uNoqEkhpJqZKjpZaHxikTTtMEFcYJd9DB3uML9Vz8NYrg8kFQwj6Zw8B395WVLmV8CRDAgptGzorrzCt3L38",
  "key20": "54Wmu3VXtoJLLw4EmCkaXWabKWkMokNuEkrRYm9x73s4VDWpnonqGcL2xmmHFYXDYdeVymduGGa3aEp8TfzcFCT",
  "key21": "48vHHNJTduxzWDbe5Eg6Wm6aN6igiBLMuiTTpWN8Zv6insjrbg5ur1cK1Bgqb72VHQNSU9YqCMTLXav5CzGyv4Lc",
  "key22": "26F4pLrPf7hQNevoLoXjVtT4Z8nQsrBG6LR192ZdDSmbMCKCDjRE1K14D6ssWnNTgnofDiqoECrv6zUjXEmvppv5",
  "key23": "2pGkyzGS2wbiP3XJmLZ28oAkPtk6kV24HHtEYYbyHNEmR3HAyu2Us13oSATmjrrht8YSAz2kNv2hTZfuLyous7g4",
  "key24": "5p7jZRzMYcrNhZK8ErtGVSMwV1xzCFx8zdFd7cDAWmJnmmxiigRWLKK8uZnmyeZQv5cf7ggX5qvSiUiEGUsCCP3",
  "key25": "YdGRG2P3kcYPdgCZCQi5Na2DpSUCPzhARCHDdbErKKDH7JRdjMAPeFnmeeanatBY1tpJRVh6tZHA6LV1Ni9bto9",
  "key26": "3CHhbkTA3ssJCN64y1Dr7ASKKPu2NTP4YTEAZMwqG1ppb6LtxwUrXy8UXkmWmAuKEnVqdB2u8KDW3vRrKMmPZbPp",
  "key27": "UoDPs3gjZGb2jDE7iBNdrCBSN447qXUL1LE4r4koQELYw4xoY2xABr9YASKf84VFPKFkXVH2JPC24Umbnj1YTDe",
  "key28": "4VKit8FhTD5PUZ8k5zDvhCem35raG814aVuarqqoiz2Jhu7vjFZjeht7XVBDF5tAVr5VgKpQ1FSMrqoPjabwrcDy",
  "key29": "5dcZ3oXUEVhKAbzsR22JcSzqwVAQWNwJytcNsfcBoRhUdTjs4xy9V3QceQqRi78rJqcs6WpGK9cBPYXYSX2dAEGJ",
  "key30": "2zE7a3GS4S9HvWPuFvw2tg3SBFUFAh1U54Cu9cwG27Vbi9B9SErU8YDdXMkJRQAHLs4dsF9caHyFSK8mMwD5dxaB",
  "key31": "65fz4HoJmQQQLBoaXY2Eidkp2L3d2ye1SC6ZZmjwLtAfBQmgNHqsWdDpJitUvNAfMBDHK8JtVs5QxctBKfNs1im8",
  "key32": "4cgmSormZCmFsDZ2EEdHapqo9vttP3xnWvFJj2kd5DMYwypX2M1MGeNCdsXUk3HZpDXevLTYQaEVGrCeEe15Hckt",
  "key33": "4FKakttbCbDT2HZuX1nqqBRsaTjhXKxLwxHngq9jXB8X6GouPg8DfWFFUwTwXBbW7NyU39gJHjEPsdcoiMVr6iwR",
  "key34": "5tKauVLUZQnnNqNQ2cp4JrjyYNYGWWyAkMMYNo3rgDVrwgEhWixzew9kY2L3PhDquEZCBnTpMrP7eK2wSBSNGCCZ",
  "key35": "25nicb6TZDh2DAtmMe1jUtjX7vAUfH2wuMhtyFsVuGgnCuaERTqpW2dbgaSc5YiL6CfNtmcU4A3domBcScBXstwC",
  "key36": "5mZoJ1Fh3s93ioDFyRnK3SzDubQZgZ4YebZUjoeTQb4LaAJcyHgLF7meJnvt5mSuHgVv6LB4D1NUj1BCLjtLP8VE"
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
