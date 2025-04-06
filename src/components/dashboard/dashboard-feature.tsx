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
    "khVHyXPNpX1yuJV8jQ442SR2sGytmKMNGoXz5sgN8ZCiM1RD5RvosMopWWZEVoRnfF9HFJfy78QH2WYLsYWMPYv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2oAvpQU8NWbv1BU7BpbwJKcRiycsDrzHndT8djXdgEujxarAtuFtYgEMoSByJPXf8e1V98uAwk497EtUyaubFmso",
  "key1": "4tntpGRnrWbH6xhZK1zB4LXGvq8pkSNTYV7CdatBBHmXST95GhtJx5WfUEhNehVFV3cyS1kdhiMNjvk4tDCoXcyV",
  "key2": "4HuARoMrRr1xgnxGkLvyLM7m9ETjU66MRhKcJLf52VUrm92wNJbzpLLtbZRS9S7RhVnpgLYtASuf1rejTkbjxpJJ",
  "key3": "2QSA15BS53hZEafjoJTGMN5q5MFp24jbasoN7uZ2wiaVCsE4XHw4CzvfyNvFRJiLEC59hgSp3Uv9cFanFZS53krM",
  "key4": "idKih9mtBe7BnaZSPCyDk635FzSKwtgjESpXECoG5CJePkQvLFLWHVZjQSVUf5nXwbFmNnMsXywi7PDApMicYnA",
  "key5": "5oMJQbk7f6SVRFtoJ2EgWqqcCpnfnbdWXcsSCMHEXBvekRUScNwqEFdP8NQ8PJ153M3bGxDbY8PpzmHcz26CfxM",
  "key6": "LENYdYPVpYxsiEGRxhMyoCYjaUaq1i97DJDkaD8PeMusxkcovyMWshseh6yptxTaYHGKcCuQs1T3yjYMvACs2Qh",
  "key7": "4Cta57ZuKJiZXrKGSv9DiztCx7DoJBi28QNB7mGm9Rei2LNLZgJfaG6LCuLPQpbexUBaRvTdhe3co7DZ7BaR7WiJ",
  "key8": "2BvNBAwcHcEmRshMgoYaTjubCwq2wggrFuGf31GzJ7x1sE9dm744ZFXHfjxaWtyXzBYmKL6C7ZpkTBagVUjvKxh8",
  "key9": "4kobhNmppxfHc9xGztcgETn2G4LeZYAE9HrYxqJ3jSxVLgkoYZ3Hs73Wuz5d5U2b4k1o7L1e4q1DqKyhJdGFnTFt",
  "key10": "348Etc4YtCaTFkt2yhHwKEVSoYXsf3RQRQ1ukPNVP2MEKNxaVCcN95mCyA7A2UfGQuSgzcwTpKKLuMkGM8faKQb",
  "key11": "2w7rNs5e4ma7z8sPRV7Wme4hBbRawrXac3TdX1TU5DtB6ugmkzMpsHPfzSSKdLac18vFPov9gwe7GfUoJXdpRYUr",
  "key12": "4JUpmYx1yMH83tqxphVEQXdd6iCydjmFAyumwte16MT6LXUKzcgRbvMUNrNG66GHhbfTB6UcgQ1u8CiUMc9n4Q7B",
  "key13": "3BzbQj6MBSMMqP8SE8C1yTUCJ4Ug1S5dxZHE8VqhxaRKw4UNevbx9QBVvAQyhentpbepNLGnNAgCCFzhdramYCyw",
  "key14": "2ijVZD8pXWpsYsoJfwVKqts6PgExbbm5UAkwU4qkhEKE323JxyYZ2sQ3kUHn1fXGtzwnc5hmBtJUzAQMByMvcAdg",
  "key15": "3D8s1UGwAhNgUxL6yujqmiETJ5skJrZ24udfJiSmx5BVNaaGwt1Z1fvNqvVpcSTrnUjRK9MUkcWtF4FCwPbid3o7",
  "key16": "2ig1oU9eqPxEBFw1g7j9huxEqQXvc5DVe3mCTs9trafFA7mRrUEXK6brfAXKQJNVjrvEyqMiJR5zKpnNn7cV9xfK",
  "key17": "q3ZVdsFawYwWbkfgbfnZZPfhQEZ1GErzYpPsxXkyoQnF33zunBFwG6hYfgHhaGbzmYMYWg6zABMCjvBiPKjUkVA",
  "key18": "25JQa1xAqyKZs9rt2TkrJopFWBsgdUbivcqSP2H6WRYNMi2rMemiFG57JcqvtCEjkyu6BGUQKoLoBVYgfGEzXuuo",
  "key19": "4DxdzhoCuvSf66soRvamaZAQ9PY8TrrHqLed1X17TmSmRVcrndiLxWUR5krCXuoknAdci9LUFYZjkbH5v2NJZV5q",
  "key20": "38zh6HfyDRSSR1NJCNjxrjRbC4kgwty3tYQp17cn9fgoydeh3o745fPjqY9ch5jAGUj35MhaNgMKAn93dRkgWqv",
  "key21": "4MXrJtCUFeFuGctGfRkPJe4UVw2qdVqPNeWxrVdfKfvC5g4ks9yAxxzA81u2G2PQrF4sCkzcDxJvgLhwfQ27Jj69",
  "key22": "bf4V2ZhrncqsLotEX2EXTsmazhMDeQ1anXet2N3EAH2kgwnRsYhM7B62zNmn2SmecH2VMhrv1v4vVVav9RYUwjA",
  "key23": "3z3cpsa83oTq1T9iZMv3G9wawdHzH2S52uHpLYPRKP6DVCt9DWhEjrMD4sGDGJ2oKPbq5RpBtwJ82ht3H1dDcpjU",
  "key24": "5WuPGKtN9BtPwC1qcJx5YJbUAkRKseUoYZRs9qYhazCA6hPPQRcjs1EX9XKgnr8ba1D2cDm5FvAmoyZuS7uNwwWN"
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
