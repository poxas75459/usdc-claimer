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
    "5kDteFJm6BsooKB41kTpBzMRAxQJnhqvdpfQrTpzTj4o9q91L7tQX5xRQ6V9BDCMMZCypy7AKGKZoYJX7LPD6y8p"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5hpGpaPgvbnjtYdKpGX1ShzQJZt12cPDCk8XoKi68Jdv9gjdpxBLgr6eeDkGHQRRZmE7cgtRqPTGHVoA6WXKkM1B",
  "key1": "374kxbSVQCQAmResEnpZZkJgAuHPMLXeiY9fQqQv274ukBn2ekXzkzwps5Yx2JcNgh9hsU7ZKQ7KwEPuumphbroq",
  "key2": "4QCtM27RGY15sYNkruLKPB5FLNHbVaCz6us63nS7LUqTPwgZ2fE5cazf5XZZgQdpExkniCLG92DA47r8JvwAAgUn",
  "key3": "28rKcPYPdu1w1DrUw1MRM6syK8ZiC1APrwv32oxBqERVZy5x9dFLUyLHqujNhKBeiFoB7PSWo7CvhJ8rzZdM8y3m",
  "key4": "3rYioJ4pMMxmgajHuBRM7TiXqQazEpe85hNSC5hPfS1CB3KcrkhKfKwhbU9xXQGzUfDhTK3K8Rzvc5xFUrD6KMtm",
  "key5": "2XZRVAB9gebrvCabjTGrsFAhwhTDamg2LGdxsDxQnSWP96xaDSuSRvDuQHSQeCumMZqQY91vv9msbNgam7yY3ahi",
  "key6": "4xCH2nJKLNTDxCGtDeZSiKWEhN35usfksT6RMC339eXsncRbvREv9SUvvBNM6X6rev9XjDGBdis6cuxU6Ez7TkZY",
  "key7": "aBghjmAGvARdMEQfuMuPcbQWb3N2igYzX6Aj3gL1CSrURZiWGrgXqSSJ56XAf9EhHA76Jbj5t8sb5jWzHqXt7NW",
  "key8": "DiVNMkMZXXariveFrHnXfEgqRTG1ykHAc9vzhZDMCFqq16tWp5p6sCXh4GAKGjhTkvjKuHcpcUdkeeSGSVSALva",
  "key9": "3vPW8rZfQAMGtL3nXamtTMbn5GWbu74hwBiFnGDBhF1v33fBUWyqFEkz7JciZF15PbCPDSh3fNaVR8rf2U3Khb3h",
  "key10": "eXEPbt7RVbbTcPsaJFU3ffkM6WgsVom1szAJxqwABVTSWy4KrHKx3ehxcBjYbka9eHSgCpcqFXX4AopK1wSYmyY",
  "key11": "4h3nZSNo9Y5digSje3yk31VCDUgiMobi9fwh2E6jNrebnCGzMz2YAP4BXLciejnoQpknGr2qWTfp5Moest2Ym8dV",
  "key12": "3sX6FwY3G875MKK7NvqoTskk321xd52XAvMs3Qo3isTh3a8JArSsbh5h2tsyQ9LtC1gfgx1gVbf4daSmgtmUnhun",
  "key13": "f3BuPfEtZ2KexEdxEaj1RkTXvi66cVdTYaUzBQaPRhz4h3HQ5WNAKdsbAzhenU7fuHoXZ5PmCFh9dzz8TzFGQ8L",
  "key14": "AQyUzba4hW5rs34jJtVbxvf399f326zdHZnf3gHmCSWGEHwrzuwZ1Dys7qiboic6hizbHfLLbkSfgr8KFB9WfZ4",
  "key15": "5xfTjWveYsXpRRCMhpx1jtn4maGMVPk4dg4dmiQ2xgPcW8b4wqoEDyUKqNLTn7CDghHdKYo8XYMLKJ6TH7TBFeSG",
  "key16": "3JEhNrnFnTHkgDDSf7CJ3ua4L8pafN2jaRQHjv6PeuT8A5Md4Wu4fp6CLWk768RSDHsycw44TQuchjNLiryGxshN",
  "key17": "4V9CBNtUNQcFAP34BJcRmw27Zko13JmZNDz47oL5sB71tig2Xq92RSLUrYH38wQDHoWWTLT4RCoxrE4LyRcehdjF",
  "key18": "2Gj9vac85SRuUziV2LW2WVtKMtbfeqzwEsVs7UAy4JUtXb637WPWYsRSSL4AmaXfcc3VZ82unfnxYhJiaKinn5cw",
  "key19": "cpRnU6iXCWsh1y92fdqz49tuoNAmi98fg7Wv9DTSwH8YdGXBf7vvgRzMUo7WEpejHQVSGAgfcuokGynHiVzNMuy",
  "key20": "53M2fprEZpJGes6RwEjXcb7PD3VMAYkzwGXJZ39z471HHkd7nhKDac5khCY1ZxvKD6qZBBF7sVBvJUkfsd4pY9cc",
  "key21": "iLsfGCocGM8d2vPU8dg43KFcrk8qmYtectymA2yXBhuAAHoXegNYW6ckJM5VmbBSMhtZERm781BXpaTvfAS7Y1i",
  "key22": "3H8tCYozyWb14Nh9QifjmHq2yhu3wRppTVAdKfUgmfhdY4woBYbT1rdKbyHqHL1AGkA3KZRMzvX9QdsaaXexoUgM",
  "key23": "5raEGmbiU82RvV6AcMeQMZGJgHnr8YHQezoqBMK5Foy25PxS7qED5BbWJQEcU51gup5nfwHvQGUfGHqQkk4J3T9w",
  "key24": "64449euiJwJj9wWNdbn6fvv3ianvJyzqaBn3j4XMkkbvVyY7KLqiQPSynbTx6seMCGVM8VepY24PM1NJi327aMSN",
  "key25": "f4brpLP346akJXDv4kQFaGzWDCB7BvH2p3JShP2cd7yKUugdE313SRL2d7paoH1nCp51rmtoLcJfuc8f7QzYE7o",
  "key26": "44YaqyPSiPD3ooJjsjGCczDHSFN1JEZqFHmvpR8srpEg7i3ZhF9o2GAykNvdG37WriD2kxc3zZhpF4p4z8eMejsH",
  "key27": "5bqHDegteagHgVmeU7nq1uPERQNaLG4wsJBATB5QSowS9EfSthmDXUtYZwTyMeCEkYU5f1nwHKNNYqwGHppm3HJy",
  "key28": "2Fg1NqAGjqBNyjmeLndyyKD47KTGSvuL2tyTTi1B4NoN1ZdcypHFjWUM86yzQ5YhLNm5xXAd5jJ7rE4Dc8Xj91F9",
  "key29": "5h6p1abHgjHVceun8rDCafzRANr7FqKAUoMNT7yFiNVa4DGJbMsbAbRo9zrXK2anf9asobDHbK8Bavff3tusg8yu",
  "key30": "4Yu3r7qFZKRQBMWbB57t7aRtkq6ShE1MKqc16d4uhkWJLC1JJyauEeacbhznGQ2LfSQWdCCxLSrgT36iAmftauYF",
  "key31": "5hqXz2RfhckHJk1TFneHFs4H9J9gLyGSGMQZ2dnk8xgCJqhb6LqNUftA8Py779n1oQu2dHdMc6cCYpKqk1z5JLGh",
  "key32": "2QpDA6y73P5f6f86pPM1p9D7wCC3uib323UdDzGMBxbuaB4Kh98aNZWdSizJKVWcpMgU3oursTedtMphrs2TusDy"
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
