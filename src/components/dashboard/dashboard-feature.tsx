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
    "2SMz4pWzA59mXWAHztVuQSuL8W4T8waz9iu95RYB8ABCWhvcqejKpNTovbuJG2Zvpc8SvTzKnFsa5NEZ9ACWmV7u"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5oLYyy2sg7jc9aEk41kh6TEowfej2bWfEN3uMne5RCVZ2nDdeWLn6FMev83GzzjR5Tt6cYXDMu4kPwB3ppjSniQ2",
  "key1": "5AdPosqou5SkLNQygiZHL4WxvLQT7huskwDaMiXeZrJuDYrokaoZCTJX4CHfVF3eEUX8zDe3Yh5Mjh2zVswrmuDT",
  "key2": "3XEvXjNHPBBM68qzcEDjoYExcLczMiQkTBumBAU4syNQaZukkejieuvhntkDHRLWTe7kTjBDY2GD3DDCpvtkrBsB",
  "key3": "4heAiZdtdzHwAA4htArkiFUdcpoxTmoU4eEn4NMA7AEgkfX6b7vs6nXzHjZAJ66NjRjTWevuAbc1dRgJ76B67kGn",
  "key4": "28Mo24yXwkDKufNPJ5UZtWxvvwL6qXxqyjq4zxzgqbeeNzhp4jySnqktUJVBPzgMuggab3pyWBPnuTPwdPqzgmbL",
  "key5": "46QzDZ6rYtF54zZUmzwKdCzvWZDbGWBKyQpioUBAMQfFu4QHbPyKYin4rLjT59poKcY8A3yJGDRAYWMx1NZP6Rdm",
  "key6": "2DrCDKdgnzHFe8Ci72Rn9pzcE99DBZ5A2wTaZg6myQxYWt4soe9q4UTLuQP9TU4pqNjHEQBZqydBiyUYJY2XcoWj",
  "key7": "y7Kdq7Urkfdm2FuE2Vkj4EVTBxm9JStkw43eP25SwbYqzSwhvg4tRqSMGPaYq3fB2J9CxHXsMCw85LfiqfVUCSv",
  "key8": "3hddZNcGwHBhWdKpDZXsyfVfG76LAqwAVgyygrSv1k2775JNqRHwt3JF115yhSMsSJrYiRgmdAbRC5xZAs7mX1R1",
  "key9": "3taNxmbzDSooswWPhDNSGf5xUn75aTnMdVFfoKchcrsE1bksZTrwt9fZ4SdMvcAX8SHrvssvBXR6etSAoGAqnJdp",
  "key10": "2MBLZMWLMbcV2FzWZFEAB6gBQTbaDXaN6ebPUTTMwscrpwozFxCGeHjibWMMU49PcJS7THeQB6pDj1rDT6ANLkme",
  "key11": "3WKFhMSZEVb1AGRXktU5t65gNmYMCU541aBgkxk8MNiRxL4TEdnNvbuatQzXbfTNLsDe1hFviWcRuTxzsPVPDmxM",
  "key12": "5dKzR1o8dGYDH6jnkVoHZn8vtTQgraPs8SCwe1AeQGshMa9fzVc665wf9JXhiVjRfaqZEU2zgwUnMzEjVUUTcZGZ",
  "key13": "2vStbiwxqWRdQZ6pWyha4GxjwezGsvobQXFhgdymHe8ESTtH49m9rsixCzrMDWugFjaP87vSX2BjHVfiehosJYAw",
  "key14": "Me3axZgNxeBiZZn6FroiR4vkmX8QwALfRsDCaxgbCHnvUFdKX1HHtiEmamNe2yd1nH9TRLeRkuJhSPgyJVqVwnK",
  "key15": "WMmEErDPXu4fW43qdQU4sZTMKkjSw7B7uo4kqYk6fPMHpprmwk9qHYFM632ED8n7x3sXr5DVufMaU5iZyXnFtyP",
  "key16": "2tAn8qHDDe9Ee5f9jeGxLNBg5hb9AS5CcHbWKvvNEoyQ8KB1y5V6Zi3FvBQ7aUiZ47n3SRGJZp4VDZuR1riF61U2",
  "key17": "2BMLgF3CkWZcfp7PzwShgiNBZgqzp9cibqEieZKWBpHDomzUN6XTb4jCnj5Ep8nQdUzdaMfexsZpfFnBDULTpKyn",
  "key18": "4JiCL6foMPazhnRnKii4y12xpARBwKiBMa6oqhX78EtPDUDckrWWV1vty3xr4NRqMAWu5AmgQDPqec8q2ELgqX27",
  "key19": "5ViLRXvWiRq2L3NzBngusChns8qwsTb1sHquWnjCQiBmsJ4GVbBjnz6PJRBt4Szbs1cSTMnnyigSfabsg8q9TpCZ",
  "key20": "2skFEBcS7c46JMhMCPZ3JkVw4o79dyaxyKvykAi1wnxbVzSdDmeZzDpn8XBFAwpZEi2MdYzEUkEkxmy9gYj8a7ig",
  "key21": "cKPXu77eo5drdMHJAk4LhHAJ1RdG76RVcWJ3kKvV7dUUrDcqzLGSwaNEYsTJQ8jG79qvi5wvmnNBw2o4X8tNeRp",
  "key22": "Q7tKU3V5TYTHySDNgPkscniGz1AfmNm5QAswLubWACdg512yy1z2XfQx9pBQpYirD997LbyHD86Hqe2QsaZ3Jze",
  "key23": "Ax1ee79aQMBWcnvrvqngX9hUG5bBf9vCH9RrmAYHz2Zz2N7sc2r3Dz24VR4kxChra2iQTGR7JxDPRdFFuMXiD5R",
  "key24": "jA91wZvL1Axni7feyMY2dfrRWmT6ULHgEG6ABdvssuYTpFYveLUAj5qUCvyQJf9q3cJiRxru2VNjiU78mCzpT4v",
  "key25": "5WaV2hjbhv8mrW8ax5f9aUSVSNzTmXcahtfUEXrvoMaHYBvjY892vzR9qWUg12yDuCtNBCk8DmTVCAGTcv4fFQh7",
  "key26": "2cJDJFAfH1iSxyU8Ypqz6SSbtJibBWRsQMBtFXySfjGuJ6cpm2e3mUyobGWzo56qjjEhpUaw7BtyvcCtFamcHbZ1",
  "key27": "5sES2tiarqCDhGHY3iMABrrjrk4oegfWTEdQWnvepD7YWGHtnEdyEm42ouM3MS3v8jtSRzFjk5FtNQsfedxkE23h",
  "key28": "5ghG9BpTvQSbRh88H927Dzu8d4ABdnwyScudeNvqpqBHAxMviXFaqP98uC1VQcMhEudPB13RSSanoMpi5kBAkfT5",
  "key29": "44uiqJb4nnSCspNnw6ddJjTkiShuUByqcovEbznKiEuzpFh9PtDqo6nQP4TxCQKVx53T72uk8zMJwSw5bhLbojzQ",
  "key30": "5J7CXvj9Y5WR4T8WfKFdUD9UTmawaEnsfBXpkLDC2b2TPkrLLwKy6dGh57mbPGuYYW13pt73YYaXd9zSjV8BEoxt",
  "key31": "541mdEnk8sRBgVzfT2LUzroKPKa9sENk8JGvve9JRYU72mNZ668djzn8K2Xdg9psZHMDnzkG7JuJkJk2AhFLx6xz",
  "key32": "5dLxrYjgSDLtd1d56SdR46cFzGn5YwGQp7u1R4xsw5TeoGZpEAs4HwX47b2trtErwvgdmZrJbtKmyesofCwUnczH",
  "key33": "3eiVyDpLkYN5Me5PQjeLJ7CjVhUAVZdmLeeWZxerKchYoEun1AyAdhkKBxUVXM6MXkNcLa6FU9sjH7kecWCWCCNS",
  "key34": "46AkfERJJHiAqbyun591EfY5GJNUJ8aCog8x7zMTz6CzxWbFJbPgkpshfLYRxNYxSiNKbUph5jebZyc2ixMysaNq"
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
