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
    "2mWKe6rTfYg2dN4pxcLdWAs6PWG4Y5sGAyvWHbSPU5rYJw2pZUpgtCQVHNZdwoqLV2Tvzpr7YhpTfGa3r9Lby9sQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "67pQjrjd93BSwiafWikcmikT16y1Hk6j3Bzbhmk16WtVCLCNH45XSuJapDukApi32fyNJzxzoGousSiLkcdSPaXo",
  "key1": "3927hcDkx4JMUWbdAbaM7kxekZXLDFyWyzTok3xdpppW9eawccfV2jpHhYSHA6rPTBv8EEHw8PcUaBRV3BoXJhq3",
  "key2": "veDBN1RuQXTm6i6rexYDPDaDV4tVKtSt9qd8haxQyHoBrEJ1fv3DkXcgcpqyrCqrALqhBi8wuEpnJ2C9x2De32y",
  "key3": "4tBpBCU9uNxbqriAq9d2PHBKZGdRnEjj6Z5j5pLTKU5e8aEDiMmHJhYuFG9EKeiTvb7d9o3xoQKFisaDktNm2e9r",
  "key4": "5YFu5FHZ9biqiE6xxyrHvfKfp2EqFy4Mn2Gs8mzQ5vse5wrfgV9mYFtvswnM3jHmdecBwnZBbZXFJMwe2QP5p3kP",
  "key5": "61daZBpttiG2xdpgqaZU1PahHrr2AFnQ2MV8tWVnUz34tcNETZoQAcasywab4cKcYqr4X4AaYCNmGnsTuvXQL93A",
  "key6": "54qdWmZwEsZkKnJDVP2uP8eSWQ7iSEHaGLoKkwJmdmZNoFppGWfMAp4HvpJhce8SspoDtpMcrwWt7zD76bEYbvwS",
  "key7": "5ZnrC7g5GAQBR1DJPfSPER9xQCd3s6vSciuvnwssLxmxvAgKDhbARVj9BL3ytaoCMrSqgqLmUrrB2s2Gk9KA7HzR",
  "key8": "4Puzwycfi2ZHJ4KQgKjGUpS96cmtHGGcuH2NFV7ufuCu2JfXCszJSGqm5NofU9WuJ5Kj3b6QBBmJzEuDSiKG72yz",
  "key9": "mjXtmjQSagK6L51K5qunDP23TnibWJ6Dj437WBbDij5wNgstoGZLVZAMnqThV3wz3C9ueiCrqwNwbMhJQCbx8sn",
  "key10": "3z4MUT34bdfyT9x2jbCUjoL7k5tMwQ5Y1Px6xxV2DG1J3prkXaPaVKkFhdfZUt7tSCLnecnzCD3cnRi8fs9k4WGb",
  "key11": "2t9RX8H1FqQXsTT8ChUsQUNoBfN6svfAigSXf7s47Vb7Kh7cnbnnkXy3NLnwhDsTDNSBTpt8wTkrZrcAoncchW8L",
  "key12": "AWgNrKuHBu4GytqTa2cY256uvTTiMs9zHAo3dqD74XTMFLgEBgckMvV9deN2j4AzavuqYNrJ9qQb8d8JKTAh71e",
  "key13": "3s37EabDfTLz468EsEsGKM425Z5q2iYtnT58co1btaKoZrWENDwRC6o3sbuNApDgoLLXCggPEgCswP4z7RuRetvX",
  "key14": "3NYHWzrLLm1gjy5ai7qTYZq5o9aTpwMCJitaXKyj9qKYPmyKE7wnS2CBDbssjDTPktTw7R95yWV6C1n3AKGnoZR2",
  "key15": "2N9DYNo7UiKP5U3MkZRmrvdP26CfZXU31HvGSz65wgdcuHNWvMTxQ16UrZ1a9SCLjYnpru1BNQNBr7oPVKUz8tcW",
  "key16": "3pcTKu5ucid62kKBh43K4JNQSqujTzYS43ZcVSQwddrPgrXioqcU6bqCbnTkFTAzwra11pFVH5muZBsgo4Rhfrus",
  "key17": "2rdzKoAMS5TPBKem6NYKsCw4r5h5k551eiGoohnjX55cJ5MXnJhzDsrfLvQseskxXmLRajnC65dTbrLw4iunp2Uz",
  "key18": "2aoQJsYunA73RM6fSDaybKqf3XZGDbxAx8Tc76vuH36DRLgAx4XcAqT26CUHixf1BUK19thRz1X3UN47yyHcjujC",
  "key19": "3FiKuGo5Y2ntjB2TRUkqU5NRhbetUvZf89aS5NJik3kWrio83jqKpRyH4JNDdjMq9aKjzPSRxxrScT5ms1kLZsyD",
  "key20": "2mikAYz1KS5YWjttuj5frGKZFARu9xWa37XGiMDVx4gGnSxcj28f1xA6cRiZyWeE5kVULf8LHkByH5Yq36eLxkZi",
  "key21": "22uDwCBiNTateMU1WVxMC1JwXPVgPrkQDEuuMr8U4FT3xiYJSM3PWH5FLm1NKQSt1iRT8kmWbd8BfHrGZD5WhUU1",
  "key22": "37aqokeGndpiJsuzFyazxbCEASLpvjKTseMAYNDsdjPrsBdoMVfTuivrGmxSsoJGhHeHXjfMatuXHEzJYVokRcgz",
  "key23": "5E1cYhkHtFy94nJfaAVSsUJjMXNbFqfc2kWrCitMoKPCew97C3oD6spJgtCaDxgyBRKcDgeT9cAtEYK4QghGM5JF",
  "key24": "4EwtaTn5LkH6EBk7ogDiF7aHEuQeyeg9qWGGn599UortRbgJdTyTJwC7BUQuQR95yoKL2MtkkgAgj52nzuNJWD1A",
  "key25": "1X2PbeCQPkeCqSsSviwMxzPsxiUmijzuJUQAczxigRj8Ev7coTsrWRD6AS43aMirVqfXiECpP4xkxGkoFLCRb6B",
  "key26": "5HrzNHDdj7pGRP4GQC7i1ubHe8jFZUwnQxJRSVqKkPWWx13FaJ9Bv69dTanCQvcMBGfV4TgTCKe3SGrsat5DBCrT",
  "key27": "59FGVxdwfe9XKRRkKJjz6qZHDh3VxKb84b1AdrqqC5cX2SEXA1qrpzUJeVJ8RgSrbB3n7pRvc2oaQiv6eD5RUeqV",
  "key28": "2vSrwzN5R5Mnq3Ar86erwxV9VLyVyzXCu5xrUyuyFoNiWGadFtwVppmCwCB3UQPSbLe4Yy2Rc5vqyfUnQuUMupAL",
  "key29": "55W7bTUc3k4mYFgDHhimfFaLtyd5UCJ55vs5aLRnaRURwTYRM1CGfpN4r5RFGQ96jfhRmDDzZNNLTAnyLtjkyma2",
  "key30": "3FsN2XexyxdRMCvKNWY1YSiKLpbqU8LeMN9A2mkV33YV5FozTmkDAKs2yRGXRuMCLMdVKjWCwCUTEGnY81ZAg9pQ",
  "key31": "3EucULP7XHqqf3kbbRCZNtC5mw9ez51itJCqABnBSLdBbBjB4H2nHAT9ma35q8wZSuZgsFSDDYgG8FgRT5XMH2nU",
  "key32": "38juWEBVRG86A5NVkVeMT6y7xXkUGszbGVSkuATkd85Z83LEnxJxihCxvZZUJMacmd3SiQTHeY55bh3RmuefZ9ew"
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
