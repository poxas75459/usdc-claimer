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
    "MshVsd1CLcT1uZePBghXKtzhcKW13narqXSMKojtv33NBgupYve1YDKaLmRRGhHgKE5n87W5ZBeDEb9TCgbejdZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4YBYSn92L2q5Lwhhib9yTXeoZUe8SeqoZ1nf3MdeJjwD2mVkhV894v7vbxfgnKMNV7pFxtGJhNvBuPDDbA6aNdv9",
  "key1": "4bsxq9BouCrDsSf5mAko97SvTPExFWFBC9MXeGxtL8F7hSxmNHnRQTmF6M3VhVkpmb6fS9SNJAWXXNyPiS8cosNP",
  "key2": "3aaprkonDy8fgro4gmvmAGevcFX7eQWCCz3LmDQMJ7KYWbog7dcFzqCrr1kscMXKu3xTaRzCKZF3bbpASCJ4spJQ",
  "key3": "5EuWYWbr2Gj9WQFpv7FZ7k8H7v7znNXtB6L47mzwB1TtUpkKD74TAndZcY9uztSqd9NDs1PUiFZEJLid3Aw4cbNo",
  "key4": "4Nt6qp8yAZUurxMoe4SgrwHbAioCU7rvpPJRDB9q48btc5yyjr8VVc1ecf4GzY4X2VEq9Trx4xWwHwoynwS4FNAR",
  "key5": "2Wc6pxdp5GGhupsr5NfxFhYGt1B9v8TFat842LjeaFVUZem2AEz7JFzaNxXbh6ma9BHw1oPbEbNs6dG77edGTehc",
  "key6": "5JMMUoRUFg8H3KVUMsoi26JL3y7RfaLzvYVPfCgaTNhyXbvSPM2mvcbdyLYQ4ewBNPq9pnFYmA4bMKHLdXNkirZv",
  "key7": "3Dwzs7Kf3QSZ3hLQqMnWb8gbVt84zD4JPoLdy9PSfLuyadZsegmfoVyw21MNS4tAfq1hwSvN4GHXoxgkEa7Ng9sF",
  "key8": "QVi8jTg45jjkNrV2giirLvWVhzjJj9TN1TnfQVQJNNw7BVn7dHU4gNz2nLBtqejnZFLHCAEH4y5KHRucEJGpZzj",
  "key9": "4zY4xd2bSHZzshphe6EziZVmGGfDmyVXk56oPyuJ44wAhQtXEGRV6t8RBTrbaSZ3tHJ1owGYapiL1gz2dfPUBiKk",
  "key10": "23UZHaJnLRYNbRUhM4NGD7qgkvu6EPdmFyZK2pnuBTmMmz6UZKDDXuRZyCNFScmzAWcRtMhDFobF4ExQPi2PSwco",
  "key11": "52jmUmVeN91qZn6p4FCNzXupMhas5xDZBK4jAXYrFGfnNazbPskcv6iHGfzUmPgppfSUpaQYYxuKJdxpxzQdkrnB",
  "key12": "4dC6Mb8f3h2cJ11aDUbMFbsFP2tehd2CreMkRjUsA16AnfYAiYkMtMPop5CPv6ugvbwtvvnnh9TNiHeV6KQCuNQf",
  "key13": "39K4aEcvw4jWY6VoqA5iUHVrMbEXgWdrH66Eq3UBRxv9wpCoswPZfEgDdunyD3YtrqFuVTDpu8WcQXwu9NGnxt3T",
  "key14": "5NyhYmC6TRB5w4ERWefb8jJBrBmHboZ941uoBjiveQhkWspPYreghQBpHfhKC1PhWt84E4jqsL75kLxg3He8EYAV",
  "key15": "3asod5QPTztrbzkp8yStnJUm85KU4ejWZGCW4JAgTChCAFiiMmpBGeSbkiHoy91e2K3fqQm8R7nhQ8hFgpcqQeY8",
  "key16": "4U1cuoKJga5eTwHKHv85veCGyamvq5Q3TpJZMLXwbDSkjuG42k5STMdPaBMrA23tWEg6vfjBMy12j3KtPvniXrNa",
  "key17": "5nSqRVEHggJJoXsUo9xUpypE7CHDNHAjL19fwVnSYsgoijEcFRwFvgMp361BpdtcUtSxWLQraDJxrzVc6baxwR5Q",
  "key18": "RnEmYXTBVSeNJ392Et4A5xLZqrEVxyntMZ9En71LrfCbt92gXCtEWoY42H2trr8mhKs657hnUaPNgfhveQTGhNg",
  "key19": "5hAtvk7WyR19fdR9DkvP4qpPgShBpHpC9magHSzn5TCu2tZZCSryy5r5d5TZQCuFHric1s2KKLNbxHgCbBQhxGTb",
  "key20": "Z42XuHA8pkxXZ2iPmm27KSjV6KkKKzDgBjW4GvJKLLxeP3dsZqjt8P1nUooUVG2KSuS4bJEFtqmLf7Lumc2o78V",
  "key21": "5pua75azLdyt4dtvfqZCA3BH184Nb3HUYjgMWYfnB7hXTsc4vqavPm8GNny7NruyuRP98nWE4wE3JnXaQJSCe8cS",
  "key22": "5GrXTAscZG8K8AsakBqchmCM8S9sAgJScNYvNiP3RMipCiyGAQWhztLgabKUXvR8gc3ESfVFmrVhRrP1mXw4WuCG",
  "key23": "3HR97KjWyQGw8HTDBaFUJw1jtCx7nuBeDX7kP55jjmeBhwSBrZbV8rsbrqVC1zUA19Sd6oW8GdWHjfebJvk9ja7p",
  "key24": "3pgLjTXmso4AzkTC1qtLERPJVM8dxiVqrJZR23ArMHg2kXPDoUiuuKERPHS8RDBrdWJVTp6sdLigJmVAWGzAgFKj",
  "key25": "5ySqDHNx2iQmCA4W4xVWtACkctpRBnGEvFXoes1ogYXkvxUeuaHAL9yteAoBdbZ6hEaNxfKhHAprxctRZAfrAjRB",
  "key26": "2tSctbJDcz87AwiQrV9vrdBoHT1Nu9r47SNtNEnZbWS4Gm3DjWFvUXshr892MAGRHEekyTMQ84r4PkTFofrUoSL7",
  "key27": "tba2SD2ptTbvx7vg3HrVNz5tiP2jfWcWbEHBw9rprk67qFAeuuDfktZUiLCb6kgLcPzkfnxjNPMZYxHJDQXUd7t",
  "key28": "4imAm99ct6M2aEFkFazjFpN8RdJcFDrN7vSvLhj41JSFVmTMKjeyb5rbVthANAXVWvNQHtqKwmsAuFbWsPFqRuDC",
  "key29": "34YPaoiWDGQrEGytyDgXQDJQuBiCiRmBYmdXrJ651AxwE2Ye9v3JJvPqiQurMHnGbNqMEu5ThR6Aszev9Mbf9mtw"
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
