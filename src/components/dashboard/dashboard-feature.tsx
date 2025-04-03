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
    "SyMkGNgczoVCHtrHRu8aqPHMUp7J8XHEYpUvPqQRrjsTp9oonRRQVbPFUp1bKNfQRvdPYyoQYhpUVARo3nijZDh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "56EMXwKwPf5VeMbcYtikioc8Ug6Kagd1RevU5CwnkL5GCqizXp5cpdXfGwekMZ6WtWjjc3TwNeqFEnMUsJF49HL6",
  "key1": "5hJE6zj7XYTQkADgJHnys1YQAzCcUnHhMTo2htg5xZHkHH3oS1Lqv2w373QFn86phUCpbmV3yuCrCxTTMW9EDA76",
  "key2": "39DqGEqcZ1Gu7M3iXLDrVx2fgDetsXSNnzZ283Ycai2M2qrDSTknmSsvG3mpkntuNS1vu18cYes8CzPPdtnrnZa9",
  "key3": "2gBamXfkDBgMmemW1QQEhXZRKSdXw5yu4KTZJsAveAxZx7U4h8E4ANgQxAA7Ze3BaJd7s7Y69eKHvFVL1piJ5uzX",
  "key4": "9eEYByng3kZJkmExzyBigHUF1zpgrGMfYrN2p6YgVC164Q8H5Wtn7V4yjky4a1ZGmE9mfGmxsMqpsrPabt1dgi7",
  "key5": "31fi7jGzYzEJ6on4KwFnsDU22xECjgUi5KADWkoXWKxRiaUoqB9ASnpj9QoGA34KhABYuru3cwrLxfS5ELXUShLa",
  "key6": "2LMuGrVbFa83hp1aJoXLdGGMk2tVsVCmp3RxWZPZeRfDeC1GXzU2QoqNXwxeSeuJJ9g5CfDCBDYWxePT3RMMyJnd",
  "key7": "5eY1QcePaZDFbySpPUNT59iWNqf3JVGq71auZcRhyviqGuMnqa3LMJ3RM38miWoHj9JW6wxfZciUpj7wthrDoNYi",
  "key8": "46btjykBtpoGBkqLuEWRqdwVRd1s8nbbJXDMiiEPYN9kKX7E7gsMxmu533WpMTUbPDQCxihKmSerDVAuW6Nf9gsR",
  "key9": "47JPuEyaHmaDU6Rhr7vCburbNvsniHzR3VSkVybN5PRn65fG3rLHLdnwy1M8brW2JmYNXXiKVbcAW5JkZEzsGmC3",
  "key10": "2gjCiAPKS9Jj2D6kSha8utNmSd1izzrvyTQt3JKDTSD9WjSr11Jt4T3HanpGCzpRz8irHesmekVhbcwSgho9RZCL",
  "key11": "V7dpRdNccm4Fpn3MDDyxVmLrALj5KCqvPjryZPgyst83hmQAVV3goystjrr1nGPKGF1u5ic9EGd1YDvJNRkFjtU",
  "key12": "5b8xiYuG7Cq1by8Y3qdpTjssMQxMXcKzLe4aZNRrDJysnxnoDJYCR9pJYVAWrtZUCY7M1W85jAdpRN4h1RYUTqXs",
  "key13": "2KoAvNFDfg3nTaFHtjYePiUviRZn1pxKwoaYgSn1yBLx2p2BK2rqmcigL6gD6zVyBf8hPhdpx252cR4NegcKMS1W",
  "key14": "3JVznUNL5G54Lro7JkfHhe7C8PRVfrAahViXj4PVv8Xzzh3nfZyfg6sMgsnKGBpMp6QVm5CQ2LdeJBnSWPqP42Lt",
  "key15": "35LT1DgL4iTZrWJjf3cQhPDTAw6yP9Qnbf6VsqUkzPM65Pvu64MhczbVBotHnbbz3BFv26xdzBKmW2CFNFefX2GF",
  "key16": "2ZjCoUFtjbzS9gLhvN3qzhjQTzEosg2UaNqsaffxSibh2cDJCTKY7JZnTMxiF6ehJAMSsVfjQjTfZ227qkqatWQL",
  "key17": "JMdMMWKcd9nvphqDFYG926mvTkRkAzzox69xkMvszLBuFSecCSdifyva5vnjgBJD3hhxbYTG5kod5hcoaptE1q2",
  "key18": "xXPKgLg5xGM1DQsUJq5bzrcHfwQNiq4BQtwbkku3Mf2XF9XYciypes3qkd2HUBbsvepkuVyAgimVt66mQj1CDFw",
  "key19": "2Hs2TMMEkUhRBf7fpj9EiXhi3RZSMBY85LHaTW7QwmewXcEzMJLBKtP9XajDzWosbjKmmepiDMxCds26iGkJwV3s",
  "key20": "4jCxgnHNt4Rsac8LL48d2QyD53frqqQMXxSTEwHKsMQm5Gsjwr8RrprpFYZFC1DS2M3D6f7pecPMx2Ht31ycVE9Y",
  "key21": "4rhN9RNq5qMQYF2is8s3dB7zrwZ7e1Hhsuko9XFcGt4mSnMR6rAfW1Z8TaiPzgoMesK11GGh9KQN1z48pG17SEY4",
  "key22": "2MT1a7vi3ZH1mH2HSVXB96wsicgyV6fAVQPmL3ShzFhkFtzNmadZGTYAFEnjbriCgjTMmgj5diiEPnpA5DUpxUJT",
  "key23": "K6xu1tQatTjAWje6BgcNNzTsHChrHnETEo4JNz8qmqQTjAVB1mUhBxjnV99aEC1XmZyXV3ctrCxSjbTgRXRs7o2",
  "key24": "2AzJKjn8ZP82eMGgUSToPYHv7mnWMjzY895jxkDHbtqcgoqGXDbmhPCFH1pAxuK1HSK5JjczQJLdLuXaecDecR28",
  "key25": "2AGrBSmFLg8h5LTvZkgGuWrj6Xed9o7Cay34BBnLaHu8tsPd2PK31QuQrTJTzAbAB4GDWrUZBKG9tdbfWTNikTdt",
  "key26": "4NzyNR3VnhjfqPDEjEQ348sPyobENTWuU9p8Qb4uJ5yWx7NoySLbFdYSJ3wwMd3ZjkeXVkPWqNSaXDcZPpcyyzvp"
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
