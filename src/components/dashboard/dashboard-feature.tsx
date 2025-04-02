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
    "uvdk5vfJwo4LoZUfrwZjYkRMpa5Q1Uoxi75QJJzrLa1Jahk6XNLVA1YhfcoSaFtp6po8D5JSCWTsgHMn7cwvauv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5pfVKooyCVwoPSa8DLtXrFu9tv44vo6qKjniPpTCD3UBUc9AtZ5PZwrcR5p18HRLhQ9GP7jHs48vXVvr8XJdWFdf",
  "key1": "3cuyZrgxNumwqcPc1urykADyR798YRFzPZPVd5wKn6WVSwd9Dw7Mmpk2scmFtre34rtfL7cqbcXQWsxasHvUWMP7",
  "key2": "MGvFBXrHk5vTFXgd6iz3yEGAZU93M3PXzg4pVagjoGQbP1tpFxk2Gvq5TakRv18Q2u1JmU9Angwxr55kBkSazwc",
  "key3": "acmXqhLTeDNQ74UzMRgAGkqP1du4eZSJtBG9ituKYJBLSMaYyNVfeXGxFa2wkMZSZYt8EcReXvJ7pgVRRFcBcbi",
  "key4": "3CjjMLTo4ZprZKESjaGv3ncJkP7BdNwDpjEtkiK1Cmb1e6g2r9VpCczGbXkeCe8xpqrWQHFXTL49AwCtUewc1jrk",
  "key5": "3u61U93ivPWqkitxNCdwcfTSvthEh64AuJ9VCa2u9n9WyozCS4Dh5sCKibDR328exTegScY7mej4DMEZGAKVxRE1",
  "key6": "8Lckbau8HzdH9s1zdK43Y6daUGNrfkhcRPtkiBH553GWEZUQbBHRiHesVBjDq7oJvfEarmRrwHJtpYUWZpQmn8q",
  "key7": "dAB1SPrRMPngsNJFPrARPzNsQo2kVgK3UJgV1ZtMSMqqU5FfCGkxQsRTj95FC7kyvWVtHjdAKkDiJqV2wLoUeJN",
  "key8": "46vBp3pNVn8qnGSUNnTkKKReEHtGb2HqVs9iLPRMHAWyPfeA9rqoY8tLRaid2cFiQn7zxw2gyPiaRF5i8tV8dw1S",
  "key9": "2NSbxnZYfRN6XgYp86FTKN56UtcfWYLHKWKQzowDNrQYmmtH2r2TzqWqqTkwoxmuzi7d1YMfHNc7tpALY3DcgHjG",
  "key10": "3KMM981VPj5qa3pYyxWUR2DuaNNWbpmDqFtUm4oKGkE22f87ykWdmB3oghoAzKTit6LxCDvPe5PxHwFLwUL4ErGc",
  "key11": "2H4CaenwUuSck9oWTPWeJdGBJdTeQErjDKhx3QzAoYdprmFcqamcsLUyEHX2moXVx6Un6chAPHTt5i789MnyDzjB",
  "key12": "5BTDXZGwvprFhUnhy2Zs8xmczfr1SSzvi32B1ZWnX56x8QfTgCHaEiiXbzVZKxzWdk48Ds1vxJpVMKrUTVTw3AEr",
  "key13": "4PuwAwHqiqhPhtNN1kvpFC47tjhC6cptFtkNpqLCEsCpS3Tq7S4qsShLHxCuoJG58KzVZzkwKgn958Cbs29pjEp4",
  "key14": "4VXqvQviZJtpTyugJTinR4AoSqx18SkMqr2pvUhHRgmxb1fSzZnXMC7D5D9zLmnPZk3kjrg4KUWsL5Wdj6fZA6VJ",
  "key15": "TVRJRN91t6jTFCwhb4hT4TKmmCZMfGwwMpm5ZAfVfryaMo1AVrGQuQbSKoUjHhcjrMNvwcb8x3cfCEPnWUmgPpL",
  "key16": "GEFNCZ2xPbBr5JF1J4PuzBoesPj5Hv1H6HWP59CRZSWjBvnj5BskZbsoRYeG2crJuy3XhwXjSKFH6NmHNaHPVXU",
  "key17": "3oJd9y9ePXNeyDi23KpLbwMeCMhkhFkRxTk76dRTXDt4PJ7w9KB8KfYDxYeQ5425btpK4zDwBn1BV5Ac2sHoBSKL",
  "key18": "5RfxFjS7CjmTFMrZp4ZHKDBmHFwFfe8Um8RomE3QbjpHy4osfrqULEJHmuWsC2pXb9b4CoDiY1uYYPXqpKPf7DdL",
  "key19": "3Hc1wCQEdcHJXgmvhm8jdrcDWZEToG4Q8j4YL6rXHTWazChYrVovoDkDQzPM7yMq7NkFiSTBus6yY7TsfoqrwjHx",
  "key20": "4Fk8bXVm69tXc2YKAYx1wSgzwmgUH81uTWSgvxpMZyTqMCsVgqWgmkeYyQgvXQJJkHBnGa3ZknMfx7jVg3bZHVJn",
  "key21": "2KjQvyUqZWezTekzCSXLVu5EnAezMMGaAi34aosTxZxifPBdHaud6K6PJw6KBg6kUH7ALqgbBAQ48QEvwvGxc9e4",
  "key22": "5wMxzsbxUaoUjUfEdTnMYDMZAE1DSptte1k24qVqguKmiFkeM24LXJAhXpD5sk3RjyFtAjyLmB6Pfxz7D11udgtc",
  "key23": "62KcCndk15x8FoKtT4XU5cRmE5D3PNeTfkUShnyeufu6yuskCYZyhkWayHJEPn2rLPhK9FvEyaAatvD8xxnxvtDs",
  "key24": "YivajZbGgGC1GbiX7fBjawrGitdK3357ALdjKPDmZ6Fv427EmoM88WpdUpNMYmQmR6F5k5MGAuK2tkCpBH8y73f",
  "key25": "35ayhzWZ9QPX22QCKnPbCx44AfXnGcRd7z1o8nWP12t33UjHZidHbnfEaVguHrgXBUngNag6tKWKfDVZePBsvfBv",
  "key26": "QAsJ2hpWXnxwsnw6JDFppR1XnkmKEX6A9qTgnPNP6Fa3z2pA6MerZnDiQzow5EikTfEQWxNpq19Am8P56teFmVC",
  "key27": "5JbcA4rWtUBvaeEBhXSEWLnnSn8mUiWaTJvfCfVGroHQ5qMy5jWEU7L5XNWYKq1zVW4ykqzCxh9F4AN8ukpDX1Hm"
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
