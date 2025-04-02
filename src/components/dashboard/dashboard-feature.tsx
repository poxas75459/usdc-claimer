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
    "5W29J1vwNko1VHpQNrhADetdbXpCmwwjqYBN87HSAJsuoTt5FmDSvLMuYD2n551bytBd2Yen84ZGHrZaYcfEaXe3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2rrSpvFPy4rQuYcwBwHhmNSV8AwWH1SGx79SWUj34jue5doGmcGH9JSg1TRWUN78jRvoHMEotyhEMhT7pa46j1nN",
  "key1": "2dYZwbxqPDwJ6n2beW4TLavnoFo9KFZpYVShgnKhRVRR1Qaru2F18W7Th5jTepEQP7FHEqfySrxDnRT1XQqMe9St",
  "key2": "2F3Sq4Bx4DWXBt4yf2ubUrrP9niNnKyjxjEhQQhwbzHYwAW9Mvp4SW7TDAdDoSi3Ug1eGFKg16NGmC9Rc9f1ymih",
  "key3": "44EegACWH3p41FzgmW4DroPLjUFrDPy5zkxnvEk3GxyMNCmiN5PrNcr4btwkmA1UxM9pXEknUpDv2KHbRRFp8MM7",
  "key4": "3Bq5AAUoUUtgPSiKHjXxK4auSPKfUm8ELbXoYJeknKZcEbxaq5NzndmudiRF5W1kAFsL489ZKWZgboJWSBREa6o",
  "key5": "36zhqWNMmPrMs99wXMJg7usT9PMyMc1t4pBHDtDJsByFr1viX5uNqC24HehpaB1okxX1tioXfAbXsn271oNipxwm",
  "key6": "Mo9iRZuVegNW2QxYCn9dGVWMv7aXs3snWB6bu1sBCderxMNpAYgapwknVGSxCBSPTDSUQeyAkGBjPz77qw9Heck",
  "key7": "3QKbtZAQ4s1kzSDHCcLTrqRFqQhDJVwxycXU44twcz7xxV1GrVyuWsCfBNB7mvQUrHmN7CJRGkfRLf14no4wQzPT",
  "key8": "2JMXn1feL7MKUnL3BpWm4ga4xVCiPQn9nia7EgQQZDYi1Pdd15DZb9jJsX6MGnHLkDmYWckTAJSUE6P6gL625vwm",
  "key9": "4HCaPjNjTFaf4hLPKyVb8ysP2cso4DLToCV76bnJqWFuCcT7KsRbXRpDajicmYc4pndfZ7DMQKzjpkep4qMi4Udy",
  "key10": "Hb8P4iFBRHEjLTTDhZgK7LnuvXSLeU2qrcQPZRdLUAx2oU9jN52XrFrasrgMJLgUrT5tt3fVBbpCskWKvHfoeFF",
  "key11": "3Ur4sGgFVAuc4q3GTmk47UyLRiNgcJaaf67fmbyxYTWrT7jsRGML9mq4iX7QPMXDqC7ccB5vPFv1aKPZF9GouvB6",
  "key12": "37sSPHnn9uNqCQo4tHPnR9SEh3vyiv1yyH14ymDNhLWyaX4rqh9AQoDq29uzSs5hbhP3Wq6LFC5QJaUB3SPTHdKL",
  "key13": "3frGPDG29bi4mM9oSHBt7CCUJdzPjvE7vnMBSYgztW7SyLrmiX42U8pCRbtn2BthNnBVUfoWNoQFjqpSq7XpVFyo",
  "key14": "37Y5YzjMS9h7yiqWZfhe9gYjwC2CtpJexd5Hd2b681XnVCf4YvxvHr6fnRa214fgcnBLqtQgt6LgmGihBv7DGJZN",
  "key15": "7UH3tavcbst2NBgp8cYpT2Wi5479ucNPudGyrP4d9bg47fH1H2fA5AMnWD3KaokLjXU9YRk3JS15RtBtyRCyCwr",
  "key16": "2wjEgurfBgzbigefAtSFRhbYS1ug6oTyfbWk1F57GZydDxzLzxnWtYuUmej4opVDJNP83dPGMkQ61GCDwVUyQWB8",
  "key17": "3XkYcUByi7vMBb3UaRP6xx3EMPL5bimkgXiJNC7fvzGoFPpV94634CJkt3pnBCtu6tDoEL7nfRv98iwyLxCh3yyU",
  "key18": "4P31z1puSZKZ1NRjyt5EHXyrHtobn1AtKVN7tYa9v6PX3qHpyPzxmbjDCymmzht4eAjiLNxrTmiRsQkEv3xtAhxJ",
  "key19": "2tvyqzCTzcewT1qo5z8qLxHW4dQVb4mUL42SUTsWVou5bTuWkJksYcRoQKSivhVuvV3h6wbfMWYKdN7NFHG33niR",
  "key20": "3yrpjZW6H1rJqbnQUai2Wqk9Cwyr4pYupg3Khs3RjTbT2p9hRCorBixcXMqYn23J4VEjH2JyeCCZ4Y8HqYKnogFj",
  "key21": "4x66Si7J35uPdaGiCb2dLdYh91toZ4VStCz2tQxcqDLmVETvn8FmNy4q7eNwk1CWcdeW3NWCtMXbfg9URREeuVv1",
  "key22": "5QMX4FqoBAHttYmfubrDPnoht7sgGK4JmjtQC6hUL8DqNHpqSm5Yvym7UC6QF1SBPb1GoExKYawBxQfLnXzY6JbQ",
  "key23": "3ioCvcHmMhiDT6LSgaJMME9ciGbRynfAve8snLr44MQ8JZdWX47qgoRH4Qxr1kF6hXrdHgAXpyr5um5BpxyFU1Ze",
  "key24": "3K3PkJb4kutnYUTBxL8go57gNFBF37QdyvTFWpvVDBmaFZyKpNqNoL5D9eTog5vDXpJyXm2bPYm53S2ZQwchcBn9",
  "key25": "3RprPR1N1SJDwyF8ubSza4Xou2rxSrCJU2BH3BCYt5f8VquzK9r7XhKzLNCRKsmimRXcb3mDemoiBxvYpwNzCdiT",
  "key26": "4XSbd8YGt4w9jJ1VGzoHVajV2nYZ7r36kiuji783bqYHNqvVaKvukpuc7CkgyjR8k4pmkkyKHKiT725Jo3SH4qKt",
  "key27": "Gc918NTx7t3RVaQNWAnZrMcPP7LMA7NmjEuCq6mUv1XcPHeV95e2RRZE5BtJCzjvgMT6YsKGaaxHSMkX2nyKvam",
  "key28": "3cC5N3iYbTiP2dTw24r7h8qeZ8yLxgmYnPKQK1qvTcAXd3CDYnNWLMNPQuL9DW7Sz7fvoCs6mWcFjZeJdk3Yk3az",
  "key29": "XmEw3azMJt3UDv92k4bc3B2ZF6u3tAyui3qu9xpV78bjhfpV2FxHQn8KyRU1i56s6hjFdV8K3rkynNcBVnCn4JW",
  "key30": "5j3dZLbWLMwkUnc3BG4xrMo7fgi4hg8rRgUhU6cCLksdyeSkrmgaA6QRu1jUBmLFP6uj3MEiVvyy6n2nGrqgySD3",
  "key31": "wM4gpWfGoeJTiWd8hyffm3CED8xVBDDK75LH7YFtfeUSrveAc9oEFxtcuMqaxTyBR9iSG8RHxdSvYd8awnk3Vih",
  "key32": "2ZWjUo7XSNqNYVYiFvnMkyhZwhFkmzvvQbsKwE4vbdjYXfMwjPhwp8gBxwt9AXKzsgm9eKhJxUC35wiL1BMB8U43"
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
