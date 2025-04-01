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
    "5JNK1HtuJD3RtvktndgTGpQ5KabbYUPhDw98fJDS6nXo4YVNLpdy7uDZNz9RTVV94usVuR9JVqHu2rYmh8AnZqiZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3K1U25oAG5cY2pis5VRm6ChFYin9UzX95rwV541D4ZTxHL5gujy4sbxPq4nuf1EEw5niHptfkc6dZKuKEMi8j3nr",
  "key1": "4RrmSPFYYXbrmu4LvpEBjVczUbAwxwabCLiktg1UDWpzFDNgzssAGJYGyZQUd7vSD2mtRJ2P6LWtQXdQ9Rt3UAwi",
  "key2": "3V7apspdh96m8MzKrXwX3qyf5oxxiX6JhETWUHnuMkTgTjA6WGthzk47RBbVeoz6hbL1h54LarETKgHu9X9aguDR",
  "key3": "6iFMFZjXoVG3WRy6z118oUG476vsrPLx5wJgRjAeMgQo25Es44vgFfBTmZ69Pi3KShu6YqRMHQBcAxMHqqi6juT",
  "key4": "QRk25d5j4pZ4w4pDCE7zqx9hqaV9memHR9A65E2G1AF1AHwm4itsyPSmz5CuUrctRPptukHLV5943gUej1cuoT8",
  "key5": "3A8e7ndLuYAF31wNDisF3tY98kg2kmGXmaBaV9SfJuJU2iWzFHnNS2YHDhH7YPpMKncXd5UjHQswrinVS6WWUeaH",
  "key6": "4b3LzzLMouYWeupS2RcnyJVGcJkNtbzLrJkrmnS6pEjyKTGZo6Y4AuLDazNfx5J5iWxgQCTmb6QXz9DJE5LfibKv",
  "key7": "6575XKAbbQ1ubt2ykgxAqPAnjh4AeTorPc4aLv5fneh4b5Gv4FMXVA4qkEPK43dxPZFE9tNPfoZTNFpAmC5KyRXR",
  "key8": "3s6NMNhV9u1QMPMcQtaMSHS9heYVhu8QsQpgjdXVHd2muuThH2JB5KdNitKgv83sGnjd95jyL6wRPWvgEVsJB7zU",
  "key9": "4VLKKvop1Ytx373fm67u6XG8SHGbhqc466dyansJu4R6SMoHYuwuuhkmPVYZ7hsvn9zMJ7cReiU5FnBMMsszxhgL",
  "key10": "5LmSuChbHvQwqyPTn3B8BRW4LpVxiJY5KW93pYrjN1bGGuJLTjmYs9wi6xjCydbHGC2zjcfdRaCDQSM1vWhVrGEu",
  "key11": "4m7onG1Zu6CzA2QsDeWVXQkkxjmMt32fMrj5Ssa6HpyrtgkQvKmSQW4xf4PTc35ugwKXGxUjbGoFBgmMnJwXTwGd",
  "key12": "3nLhbrfZf493Ysd6YV6rgLt2rXzFaD97KyVvCsFtVDQBpEo115fmwKCBgrEivnNAzQXrTkX9Wqx7p9KzcFQQLWCV",
  "key13": "4QCD7uuUZTQs4c9hQrZu8Q3yzrK2puuRxJHZHQ1NqD1YjKXBGK9v5KmUnoh1zwzdaFtmhBEkDcypemsUMcT4h3at",
  "key14": "4mU71Qx6Bcc2GkPHxLcB1M2KSttuX8FuLk4kjJarH57nkgLYEm2mrCpqsJHgpgpnBnU6zkRbCYCEpY3pN1caNy5T",
  "key15": "2ZmMu7pf2Vpec4PyE3Yo6xVu4aGorGC3T6zWQmhPEFdCXSrsT5Kkkkr4CBbZpkTBuB3mZPhcraUgyVLYgPBgUdF7",
  "key16": "3wVo4Sb2oXpVzdu3Ko9EFgqpLXCJxHJDFb36N3PNrLeDubUrWoo4tbbNDWVSR6j3bPdBREfFrTKK6KiDYTAhjqHq",
  "key17": "bHrSAtyHHoa9XuuJHnUgCjuPqMQaK8eVifRw86vhSVLK1aEM8EiUzow5pH73cR17yckNMvrTBb2ejdw3xZPc3te",
  "key18": "5HFLu9eeEnBDn8PR9Y7wYuhYiTHHDJ4vkJ3mHpUyhd3egpGTerVGrGFHWYR89nd5r2Vrm9QcQ3qmvg9xc5W9YbsA",
  "key19": "4RWM6U4LfQhvhk4yzLu6PuuDokYeK8G1EY8bSS6nWuxAyESWaffvuPcsvsJreNuBLMmK6ZEh7yG6ydhTsmQ1ziQ2",
  "key20": "mbWyhXbvzaBY9yvbKgYEEWtk1d7d4XCRAP1Bkfo57hmaLzsFVy9JdmH3Bk25NWcefC2hqHMeNazq5NkNAeUVSxL",
  "key21": "2Gei7AhiS1dZF9pXHZiJGjZ7NUMqWGeyqvx6ZcCUMQ9BTyrbGViRFgSRMypk3v1pF9gHbXPMb4ELpTCezSFD9tGZ",
  "key22": "61xpbfcSqTL7X12N35AxyBKXvYoJKacNfS87eNJDTv48GBvPy6SEbaj3mWbJCVVNLNN9XRLD1fTfegaH5GPGG5oc",
  "key23": "3uB2cdWXcmioNG34F6fScth2Wvo6qm2zeyR9E4e3YqEmkHWGSvody3SW18pyYaGrh53uBZSMH7dZ9qstp5dN8fDM",
  "key24": "2TJeyTUMCt6vS8mYCvG5qciyjRmPPKJGtoBUmGAg4csaaHDjfhJEvdDE291RbAYqMuNBmcmC3catZwZb1Aqb7ZkM",
  "key25": "2PQ5du9PFjAv4vquENqrGn8Ay2MybcGYaTiKtUJwSxJ7SKZVDVVoTD8gbVYApp7Zpnucnf5e5t2daeDqC734G8fs",
  "key26": "55CXzEHTXxmyVfA4nSQkyE4yhQPq4d6bvo5kY7XLzkG1JiAMz794H7g6XCMaUbe15j5voAfUKvv4uGZakCpj1zaH",
  "key27": "3hej1LgZJRzKqRMThp3A7CuqFT4xS9QF74urUK3G5kyeadPveNMuj6cZ3SFDfqJE3qpJM5Q8mW3vKrr9ouDDxEps",
  "key28": "3jmS8rUkkJSnCypWWNWfimnt3pd95YjJjDehBuGS3K15XdQJ3nVYrvHmDujFB1CzwZRCRC4gY6yFPpSGjQY1obf",
  "key29": "3JBhzmrqGMzQWtZDdzMiiZ5waHFQvT7UvNNivHXq35WFcPBgE1yuGJbtDfJc6oNu8CkZ1wYkLY6ezqnzXskEqUU",
  "key30": "56PWHSAEeXk3n2V5BaiqxYZaybb14627PYeUdyhsSTy7LnySkWtesQq4tMG9ZccYw995oi76dDhE9nDKhbGFCQm6",
  "key31": "3CSzR2jJnYxsVrbR8zvc4B8agpscMmSTNvj9PbJr5xV7LXJ3v96dWM6HWaBXUzsKi7BguB5bCJ8U5hm7LfrNYcEB",
  "key32": "3Ta8ynRr4tA4qrT1pWyShbhxTtFLExPnGeYXLcLzR6EiNxPMhGzBdUedfkWQuF8pBTVuXRBaGRzMmPcUuh3zuE1C",
  "key33": "P1JnhKphZTMr7bF7jroaJtGT7ZHxrCiRykW6uxdBFSDVcXzh5xEqnKnjp9obvabty5b6Y19GKJd5gfE9BhyrhGr",
  "key34": "2aBJczbPUSUoDqJDz1RvJ9D4vxAC55ByN12icPrD2czX675Apc64Y1crCv9SDGHCDKSuu8ziyimBbwKVHFtz66f5",
  "key35": "43nYbJTWoeU8bSefBPspptGHtDY4CeEQ6YkEmpwVFv3sE11LTDgyk5ZWisL95rXFrCA566g5gDBhnfmPSd52GSSi",
  "key36": "3Haj8SUteXgG4azR19T9iGiNFXDTWMn7Wzo9g28ZXFEsLJeb4mr5gfowL1fg42Ek9xx4tj5pEzpJZiRFmqUwQ1LD",
  "key37": "3E8rLyAVtFSYwft6q7suh3Hp5sp8CmrXMWjX8auMs819HJiMQvUaRg1vpYL9ACm9sxL7sZpKyLsNsoLoVNhAhhto",
  "key38": "4JabxDk2KqtbsRvUonc7pjGvTTQWNxsq8mNqUHgf4F8mmaHh5rHYA6TFojFAAH2RNn42eoqo27NhwWaKbgHZXbPg",
  "key39": "3ovUiHfyNhr42nXFugwTCd8eYDbxnA5AoW9BDMLZLsVY5NahfzuHy7HjB99rbDgP9yCts1VsuxPRwnJdwxg2kvRo",
  "key40": "ySxQogdYzTFs96EP6mFicktskiAT9dJLchXe3njX21WtyTUotCUVP7Jgo7nKNawVijjgrqRhR5F3WypUb1pkKef",
  "key41": "3321q6SK8x3wpgsTjoXu2qW4WC4xC1sPNRSL8yWrSYeSUHpXYhf7ZpLhbRhceqKvemvhzzdSZziCUi7rdKXS2J1g",
  "key42": "31asYkNAgxSA9iVN69hCy6L5pJoxUsGnBiopsVhvrWNSCjJR7qdnH4eVEe1TrqoDtmoGfPYsD8CrrGMH7dCMLbRZ",
  "key43": "4nmdAMbxghQwAgNZLph1gJ7QAKqwuEVctEGQBuR1eqbfa4yszeWhYWhDGhqYgoktDdnATi4evCDgBiFZEC7LHfJQ"
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
