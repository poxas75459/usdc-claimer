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
    "RZnoyjibZWC1TX4sr8WXEEegDcCTESk19eUsqnkZZbemhyxg7gxEzy5EiTFuqhUxmtyPzVgescw7rwCuT5gyJ31"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4EzbpURU2dGx8HnV1HkePzn6M3F43gm38C9rEabvNZy1zdpWxqE56cJRBWVLgmEgxXAqx7KQxhFMdy4qd2ZMAKn8",
  "key1": "526GSfeBcqMtYWetehSyzrsnGMmwPb34dejSkWQTrtUu78SJmHXvS3jJVAm65nLEbMm97Eb9h6mm2nMHAjZGf4L6",
  "key2": "4tuNz3T5FMe19KYT5YcCAkAedY2rgivWKCYGxyKASoqHuY2ASspdnkbQGVVfgz9HqPLu8NLbXyeowdVRWaf8sJhz",
  "key3": "3X2t9L6ZetfcREumtdz99W5CBqQiLZ8xma1ETBeh8oxsrQcfGA3RTQqEwh7jj9bTKL4VbQEawaUFz7ALKR6r1Wej",
  "key4": "jb1nrTSaHec9TLPM8ziVreNWRV3fKikTLU6Lc2hnDSCUrs2efJ2CmkmPFdd99Gp2zjWA324C4RvCxdWCouAe5m2",
  "key5": "5cZ1toy7RPXzi5KcuAZMRQrgQixddgqgf3cwQtXcPPGVVbNhxb1yzsT9ggDJfFYLeWUGg4B9TiTnEQtvwNYT3N9w",
  "key6": "5tk336nc234UKCB3CoyEtiXHydC6aDHiEB8UbHMYxcVTLd8wfCv6w8uABDLryqz8pLvEkUqNXmMCHCyaJPXXoniY",
  "key7": "5DtvyA23LXCmH5zU45XEmjDk9yFNGNhGC1hz3Rfz3BxNe72S2WZHX9Wnmtkoksxew2Ddx14Wst9Mjg9hChQQMV6P",
  "key8": "4pnHT94pVEN2QTL7vdcSGMTeGmstxT9zrrmHr3vpSweHo584AF677L1JjHufP6kGxZYNYGcxkHyxevXxRWmEH7KM",
  "key9": "2enDw4WG9syP3DkD3sQ2vWo7UVPAA32pHTNc3FrbVGUhSSERNgGuX7CjEwPmSApS9MfvDqMqoH2mM8cPGAjfJoaC",
  "key10": "3Sy99g329dUxggfiNipVvWmCna6dvAJJMUaGiGNPahUoaqzf3dMS1if8hEmJKbtQRFnk3WS9XYB53AjvJSKt12VU",
  "key11": "4d2t36DxMj2oz4MsHu2DhSwkJ7PMx318KYmgJqnjBSJ4RSNmroERDGDX4568Dig3kB8UgdgdcNBLnhBiMYy8JFYo",
  "key12": "5mvNQLBEdtTZwNYAqpcBvWaiBHYQskhTjVBgs1Uf9gRmxkFrasYgqaq5e9wh1YaVWJskUomMXZkxyTUBbesMdM9b",
  "key13": "5jKgmVtwCjbUR1ScjaeydpYWbbaQCrGRexNU7HMFEB3xgeB14g9ZiB7MLaYaFUcLoPF6cZ8DTKFt8S9ynRVg81c5",
  "key14": "2ectP7X336ZSH7gqit3BQGjCz31KvgdRdSVDEw28XVUUsxypeByjCew8c9RgcQmVMxAZ51HM38t1j7hQGnWnKrvN",
  "key15": "2dvoSE4RdbJYRa2mugyEB1RBmuyssQ2EtKT7UNDfroNXitTKWBFM6i3CiSA4Vt8KnVg1UBTuy35Y2KQWsKjmjMHq",
  "key16": "43w8iWFcM6y4E7BgkXmqvSVqrKF4DQdfLS1GdFkkqS7JmMBCnxhpLBGvZGatiDfDso4MGnX3vvbmx8ynZXCi44Fg",
  "key17": "FqMkgwBbSKBqLan7eBLXgBTSh1LeE31wBveeTVXc7zwAd1sLcypAuqqp3cEm2JSRBbTHjQHgoE899seyQQ6Rpmh",
  "key18": "4LiSwf2R8U4QiscYSaMrHuy4zAAHvEv1q6iWeovQcttgKL68JokLnEM6DZMqHiYPbCzQCaxrjiBdXkJseNitFSpE",
  "key19": "2M4KnrsgXgKZvuckkvgbiYX3Ufz7GVpgcHsFjZVZvSf6YSczW56D3UnmWqbHqnC7eCdaLsMV161RRoqoNQ8G8iF",
  "key20": "E2PhGc5yAdVUXNRpjGH3j6nhKBWj4dZypq98n7KoShaypUS4QfhwzgDna5U65MWGaWY74JHSzSkmTC83Vczjvi8",
  "key21": "3z3JfTk2guWsCw3bSV69Jt9tD8sCXYEJCxCdtxaakBUDWHGHn3VCCSdcjNchXfR4EKPGYcTtExHuaXLS2josMai",
  "key22": "4pzKQ8521KrNRrdve5CrVyqS5swyHjNLtteiG3tKgmHtHgZRUpia14bPvk5pza36HYqMHvMNhMnDPA4KXZksGnuN",
  "key23": "EWctByF6K2xxopitFrn84dtjv5uyWx8YejwyWBYgdJAiB3Pa39dUwNRiyTbLgAruokanYpCobHvV6NwciAq4vrN",
  "key24": "QMohKzt1pq22BGPvx3sEsVXkVGCSKnZWs9RASQsTiKmdiszQePE6NEY1b32RvG7yv29YzwzLgjNh6y4hkUna3e8",
  "key25": "9F2Mo6mL2UqWDWgRS3zyMuUekrkMk7bqxDkUz6fAHe4kEN6yaH67GtzgsVmVofYH6JaSN7sV42ZtFbgwk4iBBFn",
  "key26": "rKNWeiJhE6eSTNNp9B5LRTwgTa1WvMsL6EeGTGAZ7Vj1zuFUFfovpvqMSWMva1oeHyN91u2RGuCTLtuQvhmCoah",
  "key27": "HRhuHhVKVgXWYninP813eSpbFYDqiLHh1KVfwtBqX7GAUrhVaycnc8c3CfMxVKCAWXKjs6S6cipPLUPqDnqVLAQ",
  "key28": "4cFhyi3m5it1Sgy8ayMpgSBKpPRcudWAbQkLRYiwXQEUB5nuyPuKySkdaJaYnZ4k58GcVjLT1DvC2o3DeeHo9YZg",
  "key29": "34dZoeefMhH5jYorap9Gah5ge8jNqiBYZ35PgrZRs6E6akU8s4xJqY9SHFFhP1E9YkzA68jfNggW2sYRU2bbpN1D",
  "key30": "wB88J1exeuKPYracyu8m3divWCv8neQy87994Q3gN8pXMQCDrDeh5DXutJc3A7LrMLS1219fQn7YiAXkcJehuG2",
  "key31": "2JhhrGCLQcJ1ykeE2CGZxQobNHcHQ73Ver6tbtAfoSJZkGJMaJrPfSC5iMFHVY6GBUNPsHTUHhRRoEvCukXSV2cU",
  "key32": "36LXawBvuATM2YTS7k3gM4VSnwvPPdv4ygmTE7K3i6zeQYPKpuhx2bXHV79G8PYQDD25muBh2Paz441ybNnDpVa8",
  "key33": "2ec7f6pigLxYJcKMA4Wi4JdaXbAfuanPPttqVRPMaYZT5dNXUo7rxncwQf3qT66ca6krSrb2FptgBaTyMqPovY96",
  "key34": "258YBuTnGoHZZJvbz6f8nreYWZWmCHvdTZ1G4cttThrZMba4JmfNbqYm6ojt42FGDEv7xpc34ayyf5KAHuyHw4PF"
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
