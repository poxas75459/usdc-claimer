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
    "g4Lk6TUaA6WYXA56KeemR7wWrFNHmvGiSaJbLeVTPoFHCcV9mUQ6iNWF5QbX6P8ekSSi8NwTCWHPhFgPDAhV6ne"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4CfHMsiTKoZHchHierVZcVUbwcinRfnzqRsw779Q44xHALC5noFUpt8ZmMLBMcwBTEqVM7he2KFXTdmjsJ4qcP5x",
  "key1": "36YNeoXqmieYAR2gYYd6mxM4tStqxaZn21iCUDpxis45RVvqU9tS3SS82M4wqeSBdTnejDd9zf2MhLTynXqh8TAA",
  "key2": "3PKBef8iEzipjLJc5jZKuPrSZN99K8wm7Aa7PiSX1Z6AuoyyeaTv8iCFTxG98NNnW8qwH17qRcVSZ15DzF71695n",
  "key3": "4BA3CJGxJNLyF6Cu4xLkegg6Viq1DVEiZJjEhETXdEsH8LeQsJwWJBPZTAyXHLufZrjBVvCR3QX3nQNeyQKGjyHK",
  "key4": "2B4pZFZ35dvwXVwBjygHWTRxY3eJgq869fk6riKeZ3kmwrFNH1vVat72ptG24LfPEWCeQZQpfNJA62UrT8wq8QnA",
  "key5": "2h5QoPJa1NT4JY4TPmMWYc6kfCBsjHR1Z2woRd1qZUCmN1RVNot4J3qJrXcmuUoyrt6Rh6LQ3E6rSfroxudBBNtp",
  "key6": "2HcjRFavfxtyR1eZF2RUhX8kLAPhRB7NKd2RCwgJxPWzEGscfQKPSWnkZw5nDEszedLgEsvjhhZm21xdSbeWa9ss",
  "key7": "5BC7z4XgRo1p64hwZsqd4cbAVTxAPn9R2U8DGCKCipXnNgVdLobUHfZqLTaNbT7vmKCCoqeDBkvnPaxSBWKns7z8",
  "key8": "4dnqzv4ix7QQ3SvH9QfdBJWWhYZ7kNAZmTVP3JmYZTkytKWJR4ARh6bwdHNbhx7mU25AAUxSHF49RjMaKzm14iZn",
  "key9": "9RUBZYYszBN4QH1XyRKcfmPYmoSHnj6hnbxVrF26DiH46DJ4a21tKkSNQCUNq8iyVY2wxxYBSTZZ4ZWNQmtiTxo",
  "key10": "ZUt4tYghtg7zTz6KdaCpnxeu2TKjXEzcbNvaKFJeLK6MWQfGUXEFwpUhdderXNtgdb9BYs5nYob99xKo57DgKP3",
  "key11": "637WiwkQ432mGWerpaHA8AVEuizpvq4MNqaCD7u3g4MadbCW1Tr9UzpSagzWHwX3Jqix2HWHwfiiVeZFFGTAyZyv",
  "key12": "2NuJYX8uBFaHzGbAqutNJCyxT4i7WtCRybdKYwnauMyN7HgM9oRwKcZVSHF1asefcu5EJcoScWrHfnfVAe76KECy",
  "key13": "3a5TLzHFP9DvqibBcHPZfwDHTKTx61ZrSE29gB3fCwXF1P6JkuxcNY4hxepKi5AMaJHP4ezcgWoxcJ7wUqRhYCdw",
  "key14": "5bvBwmasHSVxYq8NJJ62YUY1QgnZ1EKcCFnCrXzDguEgjqgTb6CCEnnVLp4C4VKNDfM5hDAuTvJnja1sg9J7Yh9q",
  "key15": "dGSG1dJVYaHuroBUHXYGBNyTfo8pUaN2Ez623nNfRwXjs6fizpkQzFEwygPzgpqkcDGad2DxRCodNEq3vDQaVaM",
  "key16": "2RV9xFUJopYSiFfyWTfM5LT7VrXpkhzeabXut4qAsPG3gvhFoDTUTpnF96SRNWEJedscTJFwQByk4jKNhqBoo51q",
  "key17": "2sgjBQRvBsxUXfN23j2UPd8ccNPKL6VPXZtaSzhShtpRbw5BNYyFbYxusJ4xL7ybRYhCJisfSFk8QqU7Aq4QDfLF",
  "key18": "2jytHVbQMy2K6FwYapkDeb1LJe4hJvdiisUs9kmX8UBrKeZ3gJg6AiTqXAXfsX8XSgH21q2Q6r6UXUTW54Ltr735",
  "key19": "2om8CogT566PaJounaU9TXiXp8pVBz4ovEPoDEejeWuWc82MX1V5cbeqhAdnH3HhuUYQagW6RFRQrXWzPd5uLFFd",
  "key20": "5iKhAwCWEL5eXXWk2hq8QNfrXu15fMdpZTuEmMsgxXfTsvPoCLkyYoBkTaFey6nfAG6Z5Pma6tJ8pyMgdNR8KH5T",
  "key21": "3uxhLVZdMeVWKPZEZH2WtNsCxocgmsp9PYp2GhqJw7F7y1trjDSxsRHAiZq875YqERi3JNyConQ6Hrm494ypK4HU",
  "key22": "4nAHE4EXkNXuFKpEUqdkzikNBbaHVLbX29wkeSDbvtUjfHDBT2jvwwBkmMQgMPnWsM229Qoj4q37cdZXVXybUyeo",
  "key23": "3zs8MDrNB1oVJhpXRbrwDr9rnneVcwwbTPXNYB2msUP4MrcpVGXF1iVHbhosNjq6tNCVV3ntAPpHh5aBgzj3D36z",
  "key24": "28jY6gW4ir7uLCkWufdJxWM8oad8JzqAoWoLZ2Z3FjJBTVLXttEsWWu71D4Q8cJLadD44PZeeoTEaU1VzP6s1uwW",
  "key25": "2j6Xr5z3SNMNJW7GZpYVqeiCW7FEbmyQ22jw7wYfscbXggf5RUoc4pKCo9f6w34ENx7eM6NMA7FhNsSmRG1mWH6X",
  "key26": "2qcQHi17FrzWujf1577yrENp5eRcLMJC4kPh916MU9YLUc7UVvx4PKJj87puZ2w5YEo8DKcLBGEsDAchpRKb1aH2",
  "key27": "3JAsAV8KhAeqgEDdK1tLrCDRhTeWXTyoAuNDWEWAzwvimj6d1KABepMov8ekcKgM1JKdbe59XZW8civuZwJLvaVF",
  "key28": "3B8B3jqwbMZT4Vu9M9YbqYDn82YY6bVWyRFoW6RJ1M4qeq8ExKTWyNmZxQadmHzCLkwQ2mx8yig68bhAUeFmQ8Tn",
  "key29": "7Qff9eUZpGz6nHngnyNRq12c7UbKGJZm9NY7jwGbHcSaRPP28Ycan8XEaN2qzov9HQdcjchJE65ew7B76aVRGXv",
  "key30": "4iV5BYcUAckKt2EmJCX4MfNrZhD7JYVBC1dcUVpgh1z7tXTZqUbKhayShbrMMDSb7jR7oSBUYVeub1W6ha5Y4Y56",
  "key31": "ThpEBnJXW4X3WUxZv1fyVgcFk2ZmAH4ATTCgvWV2wjwNwov2QUruuVaNAK4N8XhWUXMPVmYgA1QAKav5qrAintR"
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
