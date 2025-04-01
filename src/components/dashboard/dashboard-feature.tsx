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
    "37pqzX9GaYPE72fFWUyRser9tuLpLPhcfC2JcwN6riiZCYstBsFUoMPWkhaTZqfyJTu4fxnL3fDhkHGFmYSdffAw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "XACuYbVp13PP2pv6hwoagug5fDVak9ybC9g2mzwA5uPSSN86GctwdBhN9aCMasNXKddSWNiL6jnPWVgaEbjyFsK",
  "key1": "3CnNoL3KWFrth4J9VherKXJpeHzceLmjERQk34M9E3SgyDcw8vdfMqovRgycqvtTicRP6ZtxF1RkfqpboJcwkq2N",
  "key2": "3LamaLw93LDvVHDhSEYuiMc6SMMLAoZcMmSZz31WFuAgMZfdRcY16GrrouKFMiJGiSmVy2ehamQ2j3QUaZhc5wRi",
  "key3": "46dAidbeRqduqp9ch4UcP9bZEehaXXy9upQsjqqRniVWpmoJ2ceT6zg8Aze28ebGbZ2YZhQqDU5PWrDRhTUbNVBF",
  "key4": "4fH93bAWkLjeEBKBP5TiB8fNupC1VPY3k5XJZXpMNXyCrFuoBBciBFPDAHX2LajfGvGsDXjFNjitkwP6MHu9nWpW",
  "key5": "5uUvs472FvF8uxbQg91jrEbr65Dfg3hKYrsYoRMgmUbFrjSQpicz9zJqyqkfrPoPZMiouxfVFStEvofdd1329SZT",
  "key6": "2yMre8AcKLmyuDKyY3AC9FciUqBsTGJeb4yeTDbydcBybFyHsCdLynVFFzZDPHQ9k9DJToDZGWY61jUzCr12RBK3",
  "key7": "3NbFx3S8qy28b7kGKZnWCU8X1A1q2pu29YXxXgpGQnstxMLpCpBbW2LAiX846Yod2PZxyefevMEXtWkDndkuNMDY",
  "key8": "36hU2pGwj6V7e8keAUWDLs3GFXmvZ4Wpp46jMXgYGW7Jjbi8Q6L7VmPbgdrAQXZBWuNf3TCkZoVc8VqD5gbKw6jg",
  "key9": "3eBnZBBFfFEmAWtmwBfUkF6nbXwpiZxnNE7J8UAhPkr5RWp9DMWoLKu441pHBRBd9C1ngizgdoQHY8nCqYp2Febq",
  "key10": "2Y1j5gLtmczmJbUgdBPptpDn6P8KwaLgPDz9gEuPj4oVQidZ76jaYGcYxifPqVi2zs1iJWQKeBzCrvTAmoThbiwW",
  "key11": "2Ud9T7aneyoeFEB6nwnbZT5jemEH1sknezB5xkryuXn1tNuS6oV2xkRN4LwCmeZPNMJXYqYHq7HaNPXfidDpwBSk",
  "key12": "17QCT56WDcqqUCfCDHJ11nnBuPeBVtZUB65nEy3G7ZAriDVDy3TdEcXYpuksSghsotDujUi66opzFv8erFduURk",
  "key13": "5whctY1nkkScBynNkfczKaX3F5XEPMAydTw82nn76PUjJpo1BM2hdsx4Zt8SD5fema5TA9hsqRBkqbCQoBnc74Jp",
  "key14": "3twkSuvo2M1E9smRsg6acKoP4KCGvnrGCd2oxBP1dfnQBKFwVwCEZFMc1RVj8MWgnf2cXwtwuq4gozpqULwN8Pcp",
  "key15": "2RvWN9zVaPwwNokg8kYZBxWShUx2Y4vqvqUgCM2xX4EVRHuy6VTHarrarjWZBNvFUps3hnTxuq5qhKm6kSJ7dsRT",
  "key16": "1fudcQ6ysjRF5iize8G3DXe6tdxVjceTXfXW8JGt18bYJKHv7htehpCqSxG7yWEsE9GBR1MwLyX3fJxK7VZAnKu",
  "key17": "qxdb77ZCoLbodsZ6ca3uNYhdGEYotcNaiEkWoUrymr6rbNDJvwbDAJfwYPad1WcLUW6yYM2APrQoAdG8WnQq9pC",
  "key18": "5z9f4Cge8rpQeVYsKoPJMRPuCzCFBomjiUxNwna112VQjwP25LASZXyffvPzUPwLDjUYmSeKAGnjudoFpxG4YkHx",
  "key19": "3c6gXySjDpayMjmvs3572EV3Y3aAmoz1gYPtJQA5kUTPBeGuAxx1q59xy6ve8XMbBSKBaZhQsQR888rbNzaiKvbt",
  "key20": "3MyDxidDYCQbEJ6YnyUHyfWC4mgkQFNRQN1yy3hvXsjL2UgN3ndcuiwgxLQGKo71VEY9xGViNtYvvNQPrtvxw7qe",
  "key21": "458YLUyv1MsM3ybYNNxuQmQmBvxnjqL84GCR6iWwmJceytFggWRkUP56ZA7G7yYJBticSg8dcVsm3ZXVmtmd9ytz",
  "key22": "2cDx4f2aWvtjRiy65EeXZnpW4hQ4xAb6xhyidK2eCS7yt37dV4yLE4JSGjDEXsY2LiZJX4ndJGEshMg4GLcyHAvT",
  "key23": "3gTCejvb6jBTaB5rYKSmU6qgNRfxKcadKhmvuFeHobFcSsVYCjxZ7nh4vmRkf3xutH8A292JmrxdT6hPqWidg7CP",
  "key24": "32Udx2Z8nE1jPrER39EoLk57fQZhB8R9prMAs4Gge5QSeHrigHCpS1R5FoBCigjeX5RTcyjXcGYpsnr7f38sKgqN",
  "key25": "5BNDbSmdACZCTUqZc9qjBQEd1AkBdexwHdhzyQuDnnV8KBZraN22FM9vfSJCsx2i6JLq942Uqw7N8MF61CWmG7Wg",
  "key26": "2cTBP24BXFVzgp9NKen5QLvoxUkxcMvikmWqtVZgf4N6A2TRpDAvtRpopTuEWmctgo4xiPewUSWM1maSMRsejmRS",
  "key27": "5mYVTGkgkJ1XHsUcNFHe7BS7VHr1yTa7EqTTJAvcWoisVzoJP4RBd98C2GVPCcwdWiSya9XfFCVWeJ8nVaRW3zx1",
  "key28": "2viu8RMVHtpfBatLC7dgUQcDTBBpufu4r2jxaGrBJbW3NBAPUC63U7f1q5q6HshYKHtvFGZGnjqmeMQoN5bGHj3M",
  "key29": "3ebmijW44m4WYnX9qdUEopAXgxD9wypJzKomunsmL2ZNF7RTeEgDJ8smb5yoZ8gE1dueejh5perv9rHqQRSsjkSC",
  "key30": "5YaEF9JfWsUf6JPzbAHvGFjzYpwaLhAgkPigg5Cgy3pJUAk3E5H23xFskJ4jPK6po59WPv7jqdqxjf9P6PDEKr3q",
  "key31": "4j2iSUj7BGdoYdxdLFunvx9PfQ5s38yku6aeJ8DKXovWQiZwznpcofUNPEhgbtyNUQJvjJ5G53aXLfYo7GS4pqTL",
  "key32": "3hwqcNqbWv2qZgWXj6ShaUvE5aqPRXxxwp5wr2hoidYKBpZP76Yzi4dhMJPnUMK4SxeeNqHLfpbdn5giz8A6pgtP",
  "key33": "49tDBuwdEiZ9xJMMRcT1YTeUHmxem4Q1j2Fp5S4eXGY2CsQUqUyfHN7Kj348o4CoDCEFD4gG7NnzV9aFY31wkwi9",
  "key34": "3oP2NFQqofjUfA8a82G1HiftHwU2FsJE89cvjW6XuXE2cfdMzC73ykNz7mitCzcd7QfkDDDQhsjomhoT82JvNsuL",
  "key35": "PZS5Hoe2CftPbXSXZEgtXNaxG71jRD7qhwMAStzkTPZNFDp7EQTVaXz78mkWiZvtnWZ7LWgh6F8jkD2xjT258HT",
  "key36": "3g1e4jYuUhqC1s8bmPPoEKssLSgwVtqQ6RNif3vFRzJucFZ3rNZHtphn79XJxgmRjjpJ7zqGf1VKhcuehxb5J9Bz",
  "key37": "5vrp2MWsr2uoyohWv18gB4UPsKWHvfqV2p5eFLLGTsiM5TxqT9gr6fqhwKt32yRVmZSJU7Bu2SKn6ADzhtNAr9HC",
  "key38": "61rr4gcBaFFupck9YcPwhoCN42SAYiWUL6h9eVQP94c7AwGU9bTCbt3RLUR7iCnnPVRZ8VZKhjx6nY3sHUJAkfCp"
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
