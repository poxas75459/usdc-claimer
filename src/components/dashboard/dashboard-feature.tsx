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
    "41b75WHHmmh3ws3SKwdmMubRNcvAaZfzT6UhcQw4mUzXdj5NufeJhVBfxeQnM2KeqhgbPy9Qtf7472yRkJoDjG7p"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "i5Y6Rt9mXZUSbfG7NA3hekuDhauigZFbysFUsYCYbGjaeLSShZinSbzFji8im1pVq6AxTYBCG1HCzEnsYV4cwuW",
  "key1": "zx71i8MdtsMrvVevhEAUSCoduuVqQJ6CTA5j6FUc6P6L7SckauToK6QoaAqaXgPip9QAkFZogQHGRofMN1SXrBS",
  "key2": "44AAZVD8Kacc1A1CiPfDHrqrt85PpHze8oRrvxbzdSwWgmsDTVFcRepSDEpnseW2xBduLrwas9u75zBkRa1sb9eu",
  "key3": "Py6F16GKyTZzfAdNvuDGeEsUqV3duwVhcx5Wg4FTATVwKQPffVao4KuACEw6F1AnL6fKWgeDzL2iXX8byU4g9Um",
  "key4": "NwfkC5x3nfbT6Q7NCCTSuPvj6LhE8ojidcvW3vkghuYyikQPv1PhxTrLt5ZpSCczzSv8Wy9Caq3w4msSHn72F8H",
  "key5": "279wXJxhqsW9wpH6dNFBhA13FrHmezATzVBQwFci8McEkd8PEHptNZthXYC5SyFdzvShmv89wtNZoGAxRzefa4Bv",
  "key6": "HmT2XLKe7mDhRr8pgELhskU9xSxAanCJQV7BrAgDZsdmcTDsJwshJBrELvERVrYQwGCs5wcDfMiJVbMCLnnnqkb",
  "key7": "5RFpZB8k3XfpM6MrvFyBiwgQNELJub1QCd2MQDUafY31uL1veKSN6EnmY1GtraLrsNH1MatqtrDnVR3KBEuTJho9",
  "key8": "VPH5pkpBDaxD1kvSRuzqTiEeue5oKjVTPUYGeeYkptX12kphrY87MKzYEvJod3F4yybUZRCsDirjFtGryikRD54",
  "key9": "2UVansy375CTpVAgyMNtNQJUaxxyWHFQLmn3iqN23JxvKAB5W7eZcKPrfiELcfFicbFZKnzaLHqMVtHN1tNqgXUB",
  "key10": "NhCP4LtgoppjW8AZcd2mbAFh1TrdKwf3EwbyAPbieuWcXx76fBAj5k5kw18iVmkJbpDWwcH6vQbZ95hchuqMWYx",
  "key11": "bQdvJ8pqLKgMpq8ZTMoUTGKFR9bTufo9dC1dXuq8SaXruvA7q4QcnF8tCXWi7bSQk1i8WVZ9yxBPj6Zu93Mj4e7",
  "key12": "4YVwTGhi1S8SKAjKgNfVGBUtWWwJMt4cF1sSjSExA7KxNQZcDGdBkoyBZ2MYfCbjm8M7Wkw5wMNmUrrwoRRcgyrZ",
  "key13": "3jmxppvaT4pqXB4bXtTewoiBXXkC25dWEBrVFXEhsv4sJwN8mrmbZmq6pPBFmnuecWw1cyxdna5h3nr9ftWRGNAS",
  "key14": "36tNm228wngj9kG8FdpeYokfMhhZYBNF6xinaSN4ayEbJ5ZyX5WqrCtP3vjGqo41RWHgqscJMimeG7821dyY7eRQ",
  "key15": "3BmWZRuFjpVguZ5LPPZVnfJMV4DHXpgVUbhQyVvxPwKo6VP7niA7uMASdRBFxcSkrQ3tQC43FupG9kaFjbtmJ25U",
  "key16": "57dMY2CSx7juccnnw8VhizGYDa7T6t99z9CChgbWPfbLgCNUH4LrEwckVsTPcJLbujZZyDEg3XpoP5zpZ79oKrav",
  "key17": "4LAZyAcBmjVE7E6MBT1BffDoec3ymxUJHef529M3EA6HLP6rt34zcFvrV42ZxQNp3hbFrdbkTH5ouXaNy4NjtA7b",
  "key18": "57emC1TgEfNkL6iteRTJ77vuUoRfXgZ3FjeL9Keks8wqE4UdmAkJwg4k8YDeNb85LJfPJB2FSFeve4XhJsDMwBp7",
  "key19": "2gf1jKZT4hXsRmKNc3U6r94LHkztS8TGmvShX3Re8L759xYchJn6zSjYWw7x9LAMGTWWc2kQBGcdqcfoqYVzF8HB",
  "key20": "2Dq3xZtkaH1t5EvYRrT1epJmVWPoQzXEpc5m6MGRCJGUGJSz3Fm7vhf7CTXEzjyT98yXcwDL7ZDhKhsbE71N5VPC",
  "key21": "5dX5X5d3DAsnwPXx1qJFSbRQVZs6mh8SzD75cRUmbWFpVWsz7etMWstGsfntPMQ4nktdYTC7RwYtRBwtjhQNaCzq",
  "key22": "3LdWyrgTnA6Y4b2RMg9zAtf7caL7AYd5XHE1f6ZEyAvqbKFPBfcHjTBUt7XJAJGBtZLuJP8H4EEHJLNGFu5BAFJE",
  "key23": "4QvvRTbMvA3JkU7jEDpu7H577PtbPxWShNKEYX7qNDgbrCX366YmPHafUhkFXDaxLXNcBtgZU7Rz777S5sjALwgC",
  "key24": "5RnMe8F4ZA3Z5VZVd9sZqsTMihS4J8X4nhMjuSfno1N9s1vKb1wbkCUxaEVvE7gpZ3MnpHWRBQTnGYt9YfTAcgdh",
  "key25": "3UyNqLRDJ3QcdZtK4Frb2knchm2iYQcEDqWHtZXovNs6rzF8kbEH5nCzYmhbFRgPJMBrrj5oUKpif13r3NnGC6eA",
  "key26": "4c5GAwMbJF3mXNdYEKbpWyomyPnsqRt1eveGS79eJBd5PxVE8vKAuzC5qNPAUcHcaZ3vZXdHe7bcY2qpkHdGa4Sp",
  "key27": "2A8XNiDaeCMN3hcR97kQU8m7CaJxtoa8AfuUXtpRSr8f2UjKyrbdsvSz9xvgjY1yiohRLtvbRA3ZjSp5BcCgnf5E",
  "key28": "3ghi3TEZ36mQWeNCADf8NBUNfhrAH5VRofuBm9q3A2xGzgBMVA8kn9i2T9pUSFLxdERrDW9doZDh3um1KkHckFJe",
  "key29": "2W32iZqoJcugYYVmAnSePiYvWgawFkXoJazbjCYBpwRTJRQBXmysxLQf6WHv548JbzS7y8EtRBv6hzVo8sv1mXqs",
  "key30": "2oBx7LTzq2X5vi6EY9WcJXigmyTv5rx2iHe14YtRw5AdGXpiQRS7xjt7pmCSZzr9XTbMmmQ4rXW8pwxZFNYoQiH8",
  "key31": "3KYn7HDP9dS6nC1Zen15Hgpzjy8H1DoAT6NxUK8PTJDwZ5B7686SBeketWX1DsCNzC5skq1HvHLMBU8aKM6YpbM6",
  "key32": "eUMQMUC6ZPhq65voC2oQnGNKQVDJtAmteoou5wuVfHqvm3jk4m2b3BbaucQ2V7XLkgGutPJffoQCGNvmCDyrhRJ",
  "key33": "5NWUhi3tqrTHMFssD9vjbnVE97to37THXdYh2G3HoxZfos2uhrVSNurFmJ8y62GsN2n5daJEki5Ux7jT8TjJdtBp",
  "key34": "3gKuERJENWmocpbHxJrHo4F8DDHYh3wKnMjvEq1sVq4QW222L1kPNTRbFPF4XR5RdqseuepcPfCFZJkQEcvwrCL1",
  "key35": "59HvWxGkCkDJw6NTt9gXpdNHbD6BPTq95YQjDg1ytBsY72CBUNttqbMGMRR2oZRd6JvdYyrpqyE2bx9KkQW1L8Rg",
  "key36": "22XvoZY2Vrtppjjnbgkn5scjjRWbm41DFJM9h71USSVS28cnovLADJPUchkU6nB8nAosFrT3f3Wv5Ff6hv4QQNJq"
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
