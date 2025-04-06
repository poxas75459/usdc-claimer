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
    "5Xe2zBKT8da3s1Vuj9aNo4Aw61sFvtWiW2h9ekRtPp3eogTNjf17DitiYyytB9xkPT9psHecY463zwARVNpHfy7r"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Q6w1JbbAXKpfo55ggqNedGtxQLek1uMpG31rtsA2ubFu61FhNrTzQ8Ua5USjAiVXmPRFZh5hp5PV2Nz1oxR627k",
  "key1": "2ZjH4cTFsb6oEPg6mPriDSpSPKZjdB8ykomeVjY6788ekPta2RN93ZbFJWMBvHzTpSieqxQ1P7x6vDxrMACSeTpM",
  "key2": "24tLBVASScDKpBUM9m96n8LeBwxk32XB9XEb8SKBHLZ2VhYPZVNoGfnx2A6TApkREXD6GtoqdWV347ki5dcK9NvA",
  "key3": "3Z7UktBgUtjCVh5HWmvhRM4ewBvTCsr2arN1bySdEpHcBaqSY2WRiaSftycxHuR64ctSNNLBZQsJksDtqokzagg7",
  "key4": "41en6bfvtssxYhUrJ1MfqdqAapneY2KQyN7vDYdqhFchSTaWt8aSSdUHU7sBhKEe1dfujQXtArboyGiPhNdsGVgR",
  "key5": "5Y7ws6TfL5nkhbHybFThMiSq5aHvUGqLSWor2TJMNf9Lnnsg8tLMTBJxe3hZ4MFyf89kFSrR1z27nsESC2PemZAK",
  "key6": "31GtWDmuutd8DVfk4u3NKs77XWg1yMtvygjK9rUvhd7EzZxExKjHKnyoaWUr1YtEG1wxe6tUkdUtGaKF9xcHdP8F",
  "key7": "U13ykJETdcgV3KcN1tLJMmgoy2oTeeSZRwBFsSfTned1isVXc6ujyidDm4oQDcubR4BY2yay4z73V4b4THM1cYP",
  "key8": "38WWJjQ6D4D7kszzZ6AJA2W26wAXj6Z3Ehuvr5covuzgSgryhPSXXckz4XFWM3BNTyGBDhbsbY1dWU5a1zFtDnUT",
  "key9": "3xEpg8ZmvxQK2fsoxvKq5sikV6YFiG5Gxs9Wv3tjzXekwxxexHMkV5e4wx1nhoNqwqsD6cFAM3RyqbtDFDonPo9C",
  "key10": "4TJhpNurbjryxMMDZ2eerxzBQ9XZAJJU6RTBaFeaQWmYfNaSNBmuM5kUviqCVG1HMhZuk1Pc4T5MCwS1Lq2TSVTB",
  "key11": "618naxiweDMQx4JAUhHSzuqxdtr5QxXH8bwxCpU8T1FNpyswjAeqKgkJnk23wNpkHb4Hm8iTk67RiZx33n7zZNEE",
  "key12": "4asePRdKvYjxJP7hKRXJ7epASPccbc2MYrjvgr984HXQdwboEXRffkRHeQNGRoBBhmgt9uCHiZtBfHwAa5Pt6aTL",
  "key13": "2WgKq72HUfkLDS7SmgsyqMQDuMxbG34BB3gjhcFKtxXNWTFFH4VYWszjmV4viW5BSnrcDzVSNcq1pMdk7SxGCJUm",
  "key14": "3dsqK4VKgQbj5zziG51fcwSMBo2PQtQ7FgyRA2BBNXTFtGYuRbj7rYtSe7z8MMjomtsCmamd8KGtAYUPYGDWpwye",
  "key15": "2k5gmZir7poHxnGSuEz5K3g4oYWkNqox5cA1uZbvwMViiBTaZpwY4PLWs4LqUdpV44DhwHt4Pdk1TeaZ7r5xh8j2",
  "key16": "3fYRUzuwwxXDvFd6t7SowLuV4UKzKMZqBemn93aheDiTUhHTh3vqkfgWWKWLUXVEJZaba5yozhRJJwjoU6vpL6zD",
  "key17": "3RLMj7CwDQM55znPPsRk25NqCmJkZoB3LSgmpKtpUgzg7sp7uNW92V2Ugg1qD8fE26z8iFiGzeB6enCq9gr3pCEf",
  "key18": "P71iEK1nQJQPeyigLxLT9X6QKHeW1KvSZHhvfSttZDxi1dmLTDsHYMThq57Mwc1gYbnMLBy35LK71jrcYsVd9GY",
  "key19": "2sz1vZFEH1nVMv6hEnhL4uPgkJwE8VtrqSU3f2mGwjD47CbJVCZ6LbbPPDLnP6SRUnob3QmKvBZXpPoKVb8AYNAN",
  "key20": "injMKgg4pShR53GNHQHMuExCACEv53qi4S9rkh1LRyJ4w5qjdGizLfD3h7bBYkHKyLDwRDk3FvjmDgBofrjeYsf",
  "key21": "8YeM3PYpGPmwhN96ubULNMdvMNvkuGUufee6D8c7Qytyt6hgwKM75M1HGLipEENRyHRGtKSxaacAKoVBZnvUrY3",
  "key22": "561jZbLKbSVuuT452JRrCpCoeQtrgGK9wfhDoJKvQWp73D4ouAxejKJ7HXqHyvM8YgbgWtK126E1QSJ6ZE6HyuQQ",
  "key23": "2wCqELVo1nrAhtcaAEgLARESQUzQqTa8eznP391PzVHZHvfCDkHnAJBsmp5i3y5DA6cbCsJ6GDG3s7kSKKV5YTxF",
  "key24": "63GYrdoQUjwPkrKoNgu2AtwtVQ2ftaL9SnjbvKTev6HsCUXcv1CJcPqvzYbUpXKvrhRHuKQpUGBABJ15Sq9rifUm",
  "key25": "4HnZykH1Wxpdus8RDvafddvhq2H2367JCVZWi4sutWjvWLyttoVHRDhWm5U1SgheChrkiecXFXK6Qd2o2KQJLb9c",
  "key26": "5hNVkrCjZnovPzSL65JWLbciMykfQeWBpWR7hrjPve73XZjn19YjD3iFZLHTEjVTN2Q6rh1pRtNF9pZetA4JiP2H",
  "key27": "41ETcB9LSTqm95NZssZdczsVLVtueh68mNzjvM9xgNYnxnTW1vhQhSCEKgPGenuPVny6bTSo3KQczRwrevWteT6Y",
  "key28": "63y7bc6irrbkLQzcZBGqCQLbL2UMGjdNC3nSyjA1h5v1DSHs6Hh44a9XYMTWc5qVja9effHZRCebjpDuiSp4VRCP",
  "key29": "3rqA68CmQn81PijBzCsioTjCNrVmVmCTnQSrqxST85wpMqZbBo2zRBknYW5YHb9LKeeCzyxL7nzigLuCDEfbuySX",
  "key30": "4VJ4xkvhaQxzg8YLHjcijepRjDjHRgPPHRsTAEqGPRXwefTpk8UpWZP2v66UCoHPJ8FHGm3ChMiQCLaTBecNxrJB",
  "key31": "3ZqFQp9WKtSipjhPveicVPcPYdjGwbguZ9Hkym4JH5MmjHPfcpUNr63FJ6QS22gArmCXgUZnDafjg6qMUiU1Pi4L",
  "key32": "261XSozLsbSRoA87vyf88PTKVR33nr7YY6wX3MTVnA2tnj7PpFSZycqgA4rxA3eD4QusQkrspwSUFQwu7LrBJDLg",
  "key33": "59GCX5mSqQKM9MgghF7GfKyw2UrQkvuG3BP6usCm8rdErqjgaRuMJBcoYMAZLbx3LtSiKMQdoKreVEH16q6FvsNF",
  "key34": "325sXHBzqhY1sBxARf8ykw3KrAoD6ezEZxxnFCoWEBCZyK95m2G87WVhxrb1MBnbAveLJj3WL9dnMf3eZGTB6UKP",
  "key35": "4pEwWhRZET4hNAWyuwgHwRffUNMvyYoJP5QPpTWzoegKpBknUy9979MKS8WUMxNAdrujENsitMgxVh9LnRrSDpnk",
  "key36": "5mkaq72rNjGrcstDdY4kqV5JUj18u1UgETUmLK3Asovhhbro3zWdKa1Z1moKQBcCEJkHBmPiRPC3C7FiqXysEjWM"
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
