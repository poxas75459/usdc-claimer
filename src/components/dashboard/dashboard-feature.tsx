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
    "3NynPc3hCAhGXtGU7AST7LpqQMuNDtbiUkt7gi6L9ghjD8o7EYzKGcupFYjYGrNrd5QfZZZNsbpn1zb81QJSJi3a"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "59pyiYGc41huFaPQHbCK6T3ta8GMMbtdH3zd8NDnRCHkzzBosCgzTSeVh3k7gU8WDyQUJ7DECghwxUm81m4fVEQd",
  "key1": "4VZpb8rNkmS2tD1wtTpc9FoYcvUCAXAdJr6PFWvcM6NA8h8e93pvSPpdrGZCAmvi4suWWwfgNgKBpXDXZ3jrv3jR",
  "key2": "416koiHCCdo4HuaGj3YGyNiAYBfzvCXjrv4Wh3r7QwA2iopmQHG3cbeABSUQ7z4dJNYkaE6b3eAYAVfjTfFaZZLS",
  "key3": "5aBEjZLhYX4RpqBBVhWEtJxrLKMcBX5DgozyFTnSb4t19tW8zzKAzUW2nyuYsou8pRtR58uAAJTqf7ys7UJX5oNK",
  "key4": "2KEnYL1NRrFEXE3JqsmVnKcwJbYNQB31HVqmkzihVYsSijfWKVZdBjgQ3nH5XLAYesAaSDN6wCkDJdymFe9XVzX5",
  "key5": "59u4DqANfmriCmx1vWFtK4WnNbvtJbmqhFbNJ6x78TTyJnV2AxZXbEj1mdaRZurvYHr4ZH6hoERE2CDGMpPED8pD",
  "key6": "3aRawJqpWoS652ACiepokzBY8AQkooWyRLcwi4k2mMnmghL1drKB1jbckPfWYkSRB7bJCHp4SJfSmw96fddkacnm",
  "key7": "QgTDh4QUE959u3YWPtYfvqswv2DPGUJ9DgrTK7SPQn7h1ZZYabRM5nMc3A26fnUM1ipBNH7U6WApPYGYpeWKFcE",
  "key8": "4UmrjWgKbfdNUopev32jW688q2mfmWgpv9Kmh5tsUpymhxvfqdrUNeHzDsEyiAqyHYZyX5rW1maGVdKfpN69ewoY",
  "key9": "2XxP15R87Qjo6WXhbPCapiVdTRbuy6iWTXELJMDpMn32YH99qsUfYGwu5mnQsxMUbWkkzDCGX4449jWe9ZjvCW5i",
  "key10": "4MrGV6hCgAyZxmbx3fRbmV233XemJ7rvXGqSdFRekcdF6T4DduHquxf4TDgxTLmDh3WW2cxTSuj58SYAdd9txU7f",
  "key11": "spk7R82VDQ5jBEVqncmvKC1jGNW2vRL9mSyueWud3SU7bUfKTYrLko9nCYixezHnSCDnJJbWCEhFwRZkuDa4mx7",
  "key12": "4j5U9Rmkwa7ovzYMKi9HL1ncrA9JkEqwKwP4r4aTcdzjsRkLwS8sJjPo5dxUwK3wqNMXwGX2KSqKojRCXcVfKtKZ",
  "key13": "rPRC7W5A2FcNgLFfeMx5o8aVFUXfXh5Vf51QoiACcaFNtEmV5h82hjf3h7xKRpTM457txUkciZU62zYZhUu9VwT",
  "key14": "5KFVrBw7jimb5tQZb7NqDaWhocyeNR43qvnfwpfvtHS2qrCAz3aR1dBjHNSFcBRJ2WZp8bZbYnXFzDj1TEUJnS44",
  "key15": "4yZCbRwfudJRAqPKp5MTfuQFantwhP3NepWRbdb4dDWmaw1dF4kQXpnXU35TaH875e5Vt4Ukt16cdvRuXxHQSQcb",
  "key16": "YY1QfQbvLRGSEsZt99q2nMKL9QdbftW4obJzZM1ggP2hJgmEVGXKn5L5GiztqWi4gNrgV6p1NP26CUkJdPovfoH",
  "key17": "4Aez1Kc6ozoc8RneZaT8AqyUhGkkvotJoYCoYoCiHL2vFUvgsYvZ67wV7WVfkBvkNErR1gAY41ZsoSgA3vP3SKma",
  "key18": "2xmUFRF635A93vS9KSE3GTc3RWjaY1vxuiNMbLSnfJyuNtdUQcNAMVNmkw58v2csfDPK8TkbZi2g6WLy29urCWxa",
  "key19": "2dZDeNnpYNG5tKXufrRx26xd2wB8zopnLEVXCguGgpX4WdEnCiTUvs2ENQEq55pqCuoSTkqpQvz689tpHPYGznG3",
  "key20": "4mGaCdTbArHGfCCkxVoegtwsxvX1EXe7uRUuczC5H8ZEdMD3oJmXqaNHxthhtzPY7PjojZUwLt8wtUhwN4qGfoVM",
  "key21": "42ZBjBg8iF9EQJQ5PSFH7ErHMQdwC57p5m5YD4z5fubv2c9dPKeDEbR3xxXHeJT5fWUbGuTpRJ4Vapx3ZC9RAzh5",
  "key22": "3mv7eLGzT4Mde9hZi1WFQVs7Ptk9fJ4MUv9GL2ic5niY4srnqq2BBUpNDkQFRWZaHbAhF4sV2ie7fLdtSiawKiGR",
  "key23": "481jmzxU2wfnkZ4ZW6H8Zuw7e2EGLytkNShbqyjq1HWCJ2NHdxeJb9CHD4JCKUYuhKHTMyaMfqB8Zigm8QWDrae7",
  "key24": "4MzBRNkXaEvDYU9CG1gwTAfNSb7Mv3S3SeUXM2MzBkvi5YddXfvXBzpb7YvmZ2xov92PjWuqwEAZ9jo48nXW17mU",
  "key25": "5LdazHuEuHFFcV5Cb4HEmYPBbST528AwdqMUdHqSdoLmc3cvZAqCAd2DtTLUB4Be52GfYk7WkxTcaFH4jJR5tXDR",
  "key26": "26fN2UyskPfR9P8sM8QPAzVVG4a28UH1bjE2AFWiWEVgC3zPxjLVuKAuTK4fQ5DR4N9uiBU6CuKXcBFdb7omSa2W",
  "key27": "St4Jc7hhtyccN9Ggr42XhYF7DComqLKamrB6VRbYsaaLDsFSaZhS3ZEkwC8LqqTJirsc3SLwAApHHnrVizKcaKR",
  "key28": "4EgJMK7r4im6SncbTkwM9ndERjYj9av9ykU75c39BPfeic4GZenMGWTN4PiGJhXSvVUm4URoGQEErN4w74DBbr9Q",
  "key29": "49acay6hM6YCYtKadbWJiMSAL1ZQKASJLtRCLhkdEdhGFdUqZEy26MY59SwEYGMcN4bp2E3QepDPAcTt2n4eTifS",
  "key30": "36DYKha5mfXqUfZtPobUfcoFHhbvwRpV55oxdDksmd9WQgjyfwA2eYaXjqD9KDKYsabB443Ayq6y45VPqf57Qdb",
  "key31": "5vYADFzTrksvZwtXxVrBYZSnNXawgzpeJANqZBXMjhPwHMhHDqjF8k47yws74DpWQ4D6sP4eyimfmTtik8UYp6dz",
  "key32": "StnrTdEuvA5wZA1vsBCpXCxbRetNMRxjSurSxux7NNw8vbRbdLiQZioVCfoxeQeVbHpqFs3xxszUW2TpnwA7Hyo",
  "key33": "5gHSzhqE92fXMayUAxa5g1Vf64B5GpW6EqAe2HxxYvL9s8kMqgCcVmQ8LFqmNLPakmxq7kw79Tr2NWbPwBiXgGGc",
  "key34": "HcGZoWGoWgaHRG18vSbd6XsirdJnwPW7qDrgT7oJGKrdT7pDKouvtZpYQNnFVVEEGS87yrxxYRbgLTD6g3YuJuU",
  "key35": "5WyzAQedJnd3VB5BdmfQv5G2sp7nGe5x56hPZGy6HJY9Sh1YMgQCvxa4CSB8otzbyGBAt5WNYQsFQbfbmiQaWzyH",
  "key36": "2V7uvTvDE8C6phbpyaa8FhurXhxYvE2EcqQ7NfScuosu9gS8Tfrcbqfmm7DMheB5k6fiuqNdYVoHW8DteL62fBvt",
  "key37": "3FwT2kTftKdzMt9xGWrnjUnG75wY5bUG3KbLkDWf1Seo7kZ97J7AHm1ckMzxaJXtRXHLgi61UiFbiBrqSYZYMxHv",
  "key38": "YzDRnc2kmAvffomfHhX85p9wJsWrtvc76UbU1rZeZs6kVEKB3WLkqe5fq7zdk3vySPfArbS1TJm1x9x86sXxonD",
  "key39": "27trqYMQJLwozFYRTgeHtHus6SUTc7ScLMgMtfXyDg1mg5FfrU6mWBNi6aEUfs79U5GXVKX1uhDAbzi2Mq55v6aJ"
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
