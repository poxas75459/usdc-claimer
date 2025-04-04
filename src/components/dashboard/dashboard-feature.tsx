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
    "2DMBWayPX5YfwLFYnc4pDAczWFcyZSJ4NJVnS6zL47xoeU77iuikSnytXqoyv4DnshZcNeyuPMTyW6Jq7chKVfsK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "21D3ZZ5TbyAU2CYqFyAWPQGwWUiFPLPu41TuKi3Mwhh4Hs5AX8wWKUSPsi4ezvzEMi3ycA6TtWQCnCKv7eoiThb7",
  "key1": "4CSuUBbAmd2LnXCVUtFduc4vzv85pW9YP2ZdGbEtkgKzhHmGkShUazb79hCLdtzMLAuEsWtuSXMhb1um7jDA6XEy",
  "key2": "3kCkuPuQRuPC1fuoNrweNEXqKq63tdPyi5nWfV58P7te8RnnMPCg9AwBe7QHRBWY7i4BpmFnLk75CY7SAxAimnWX",
  "key3": "5VmJN5JLMpYmqMbkcGFq5zjdLRkNpmeXaU8s2ck5WAAfwohLHPR3S2khyaCczPFmUeU7vVHEdKmU4hDgQMrjiQAA",
  "key4": "3u7JspS4GX5Gj26KWK5tKvGMYxtTqoKmuDSLtTuuiPaTg9fRBbSp1q4o7qzfXW5uZJrVtdkSjnVQnjCjUmT3wMa4",
  "key5": "3tsVMujWbDcL5DYmMHbtVkSXYb5smE4SgFWSWWu3txfBCJNYYbBvd7gbPrn4rkkKgZpEFqhjz5MRMvAYWZXtf8cD",
  "key6": "wAP29EghuPaCURyxYNC3vfuR2QPwpUe4iDgjJeRVQBdLs3QHdEmXY8YuR6eG6SMuRrxUTbvSxprdj6hU911gU9G",
  "key7": "3bmU7ykW9Pfbp7NYYJFH9yki8oDhVFKCPLL5CNNQpKZDX4jhu8ZqjLvUzWfJURALSjnouCCueDXMh9WE1hkitEqB",
  "key8": "4yFML5tyZRf5BU58HwCbsS3q6oFGoQRv5kFm3AedjqyoCz52icJ75BpUjT9Qr1TDK8HUZSw93cZJaHn86zytvGWv",
  "key9": "4qCnMTJpLxJZjiZHttv9keuHc643CRjHktoYpZZbTR7aFgyHkNdj2xkLdiq8i4ER4zSBG3yDuqNft2jBe9P2yeyB",
  "key10": "5e4EFLDEb8wSsJEN9tJStCMQFwnk9UjccrLTYhL1mQZGsn5VkL9Do9jUEgGa5SAcPA7iZCsyj1HvfeUVEjomVZ1U",
  "key11": "5o3m5oU8Rs68rjy9XsHkg2LjpArLhVQPSaMvH3YshArYzN9xQwkQrsTqE3NmaPfVceEgnMMn96N2DY8G2E2f2xPq",
  "key12": "3UtZcTNCCLq7h38XnaTn9YSafkrqS7u2UEmAV79LXTJn243HeyZjTGqZrDQrLuMMLHWyiayuYJdNaevv1DBW8tMP",
  "key13": "54rkmwVrXWCbgDoGoKbVwcnyXY8jb2UPsnyCuL1i6LXy77NaCi3aAYH48JMiBuc2AF2iJZWcbZ1EYCf2mkod9VVE",
  "key14": "5gS7XwBD1vj3diLcwjLsuFLrKs9P4FRd4RZjceYzEbgspvcKfKwzBZW6c4V3x6JwHzxB1Kbsb3znZtSuWWroHCaL",
  "key15": "3nn64gGRqAVMwqJTseDZtaV7US8gjafQuhoSu3wSQKCp472wnHsCyYw27irEMKtZTGQZNMafLTLzhnbYeqCx4b5i",
  "key16": "3icvCA1PuN6gJwHhQkXyVA8fjD1VEB2vNfWb16jvgdutbqypnPa9PobL5rCihAC4oN4tcJhS4athpN9ii3TmAHgR",
  "key17": "5A8TtcAnQKkfEPwbBMZuKcwDhdyhefoPZHjAqLsjkmCgyZNoNVPgtSHyg23SmW9qKeDgvaBgecKpgq1VNCKv7af5",
  "key18": "DVbxReyZzKRYC85RVLxqBTynqpyjRxbBSmVM2kPmNq3yCGjFgrA3jKQ3NNmrMyfqyYj6xnfTB4wka9GQszVXiqN",
  "key19": "4NyRsYQDMXGDPDTSUXrXT3H8JN9fUB41gJjaxhYkywdkx8y7HW7t1fjXTzpsezRPXw7RxPnVbNmc251T94nxifkf",
  "key20": "4VHirRh2YZRPzccwS1MiUKk5amDrAT88sg3EePonLikncdp9PgK8R33LdUQMy4orSKuVBxVYHyZwc2Ee1Jiv8h4N",
  "key21": "2biB2im8W97xSDJMShWP7nsDWvvZ7V5c3FQaC18rxLMtEGPt6qcw7qk9DgJUoZUMpmoh9VTjcsosbXDNVnNSw2EF",
  "key22": "5DvGxcShaQ2XBq8JWWvihL7go6igf7uCNaQKwi8s3Msm2weoiaixiajpGzvFiipK6g5DJC5UkU9ad8S2CrAuGJgf",
  "key23": "3z2jMqizfamtWpDqv9rkYashQkCP9CH6Zqey6H27a3z14Y1HnVxvQmVn6MYNWt3ZqXbEod5bRqYKTAVWdSwSGqqz",
  "key24": "3oHbRECjz71znWB35iD5DiWwRsdUTwujeYuEwQnFLngGbpjUegXJLJSdYMUjPZ4aN9sBM5DMbMaXgrSLDxoWFbtY",
  "key25": "647CRbjMdXV6HNqppX2QB6s75KkwXEujSDVdPQmzejierXQqD2gj9e4tMhwyB6PGzeTKWhuLBrDKLTecjDmSWcMc",
  "key26": "5DuPkgq5YoQYA5x5QKxJP2HBJPdSjTSU7AxMpvJ3smJB11YYpUB51KzdnPfma2PwCJPVdNDLYNvvbCqwUgxro6zM",
  "key27": "KNJ4fnEciR3Qva5jmJMhRhjAt2TLdpcd6VSxKiBaedNUQyvUQD1GPWghzn3HGmyCsduPA9JZc3QCbMYhhWH2eZ9",
  "key28": "5LwJycvhjQmL1X1L6VuW84T6zi86id369yPBApJ9BDytKc1vBWfBcihL7y77XXwXKhmcobveZgvdd5ur8xX9CRBm",
  "key29": "21DQQCPKXzD1gfheV5XS8uutVAACSynpAo89Gp93pmMNqGLu7LfCbwCpeitotxY589JHK6JitTV2ugFFKY66jbCu",
  "key30": "WZ9Xhdw4kWDtRmn84fWGwCvjnnjK5vCUAdVhqn5JPzM52M4C7e5EiS2YJUm595CwhhpVPF66VWy2GHEFPCfEotE",
  "key31": "66YLiC3UJ3YPT4t3b7idAQqMLDYXQ94nzBeS9VcaEVbp7wgEuaigV7HbwUFDHxk3kLZFReaBbYvjghxb5AaA1uen",
  "key32": "48T3dvx9BWomY9ksFF486JVB9TPNgHYJXTmBdcJWofDMgLouqc2rWALi23zM7uzPrY4n4EHfxRZDRe81STpf16KY",
  "key33": "3fZ84x2j2SmeQLy56RPPQqpLZJxjvWkNKmZk4tv4563bgACSc8pZmgn73Mrm2uMsaq1wXB4aJU3BEpjr2sXrBrmo",
  "key34": "3RCnTZjGdWkDknvvabgvs6gSoPxb4kg3Qq3iEpXz222SVxtQDdDPCQQpHLiJ6e2w3WhxDGb2vsubhRWEm2iSbgk9",
  "key35": "2LF8C2knJX4ypgXJmsZ1XqnYGZAiboG7zPQ96AZ1sNy5EpyifrzLAiKuFHyZJMXNwNEjd5ywYjbaNpvBzN37gnkJ",
  "key36": "5opVGmejZVLEbfwuyU6ajz9Ra4iKFgagrCKvBWUtZcDSTShH8XBfiRkxgYqYpPaBS25RyFnFJb843SjRJtNA9KVS"
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
