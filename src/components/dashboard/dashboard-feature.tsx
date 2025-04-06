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
    "3LbgWXH4DNQViGV2zoMyaGq5jfa6xH6rtgSVNYocprrr5AuKqYsB5LWmYcmEPHs3uvEui7rBqG4CiWPQg3GzFnoU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3yXDCwunHCdEkpAhRVAYMpV73qZ43b8mSVLeN2J2Sy2zJLhJd2xY6RuL9H2HmiGjs9GPKtxHgwtyk6PC9h3o1nAi",
  "key1": "5MRXcNc9Uj3vBYzcmXwRT6RDDT4ZVkXnR9H98yUBezzzeH9PvP7oNWvEVFphkvWMsvXigtSBe75p2sdk8y3hJZZF",
  "key2": "4JtJipVU4TKNNYZZ3MgEdgptWnYRWa1FP28vQJxhbpfWzcTCz9HpE9djgdpAD21C6JS9QuabqNVgaixxYLm1DyDM",
  "key3": "2M91DijFSwLQdnwFyqemkciPpM2ANHnoiA8MT2nnBbZWheAFkEvArCwww3Kt3NrZaKyG34M7aS5MBFJj1Wufds37",
  "key4": "5CBjScdPPNAdaTyQwPFsBSVgp1TydKrU8ryqqZuTAQynZosK77LE1rDHatnEGJ2GuZEeK1ENynQ3V5LrNxcSeTXt",
  "key5": "3tWsAqND55oHd7gjNmkWcqjefbqYwXD9a8Qzj4cFX23MAqcvxao2D9pUXzeqzqGxs31ppvovqqU68DqzZpH5i8NB",
  "key6": "64PosMcwDCsvPQZJ9H3gv8qDthQxWk58bw9ezUqCdoAZHGYP3BYNTaaK7ji851oo8v9uRYMR1F2yVnwADQgtFE7G",
  "key7": "f2Ee7TsXeF2oUMiR8wAEdxRaedVo6s4LuEyKfHfJCn4NBPh8wuy7c7pjuisFTy8ZNAbogDcuv2MZcd8V5Lviv1L",
  "key8": "5x4oBKLuRMnyWhqqecjrwMJNRv2VThXcE7wFZGNuE5WAvmgUVmCHdibiKLTFt8EDKGoAnYVTyi2Qm6nPqwhoBB7P",
  "key9": "4zGRjJxRNH6Crn2HAGLBqUGk7mkzxHfducbqt3r7w2nsJjQznWqU9uuVV4rbmuaj9mqQvebGcxzGXXsB2fAKGg4X",
  "key10": "5Q4tmzZ3carLQixES2rQ3aFpSTwbQgNcggR6QxnnChrDufEMeWfhfVeUpeoGimBuejaGeYS4s3esnZ8v4h84sFy1",
  "key11": "zis15YsSVgz1StUyede3K4Eo6SGhDmKfSCreByGv5xqsKvmGBcc8nmH17vqgfaF9R9LbA3J5GmxwfxosDGr5Z1B",
  "key12": "5xLcZ3qpjKnyq8sHAAV2acusBh68kzud5SrKf8iZTY83KtttZMCgdjgVw3HEju7LfbNmvHJErAJegSUvJLXX8v62",
  "key13": "5ARSXBeCFfgRhvkXgV241jkkCVMDBMJGgjBjwAdRZ6F9thx86sT1rAtT5sQPUUgVKcrfPUFJFexsc98i8oQFEUfm",
  "key14": "4syPuWWdJbeRztnj9RRaxiiwDCcuwn8b9q3iqjbcQV2XiJu4AhhbjyCFmM6Q1pSYPjkDN573uirU8VBF4YGx7BXj",
  "key15": "3N9tg2bEYiSjKDS4nTW5C4TPdvimFM69ZncbknEAvAixLZLTYshfm4QgJgfAPpoAoNxYdQ1Gr4tpL7nWew3NAsH7",
  "key16": "4t7ky5nvKhNpJDfWTf1kjbUyCNitNhhNw2BHAabQayuoNAoJMDrhQoLFTqp3qFhGVH4tyqcpRmZS2xfmX9xXvWyx",
  "key17": "2xJ8AnRtmbXVwQyrzvMJuGwEX51N4mZgP1UfBhwKBuAa1dmvhbC8gNrpzNGk89UGyzytxXbgpWQvMiYxw4spgg7e",
  "key18": "37UPVRKXbuEAjAGSLMSxC9vP2Ts8mv5aeSzaWgkRkFTBm25HJqoQsg3phXe971H8KTfTJRyWH1ZJnRV1xZuUA3Zh",
  "key19": "5ptUDAGoQ43aPSmQV3wRQ3bPPZwL1ZFWfqWmbapk3M9dMzTRUBoksvSiXy39qaJoCGqRwrgze6s6aDjEhURSfPDo",
  "key20": "8Zxcn2waMQktyGUBywxZd1korJcQqxcodnTDVpDc1Ri7jRjUZ5bn3DHBQdxTmUPXt5r4XU2vmxv1wMxFCoqhqyp",
  "key21": "2yzsdbv7f79Z88t3eT4FDsk8Pxo81jdUn9h8ymqzAXavvHBW3cLxdNFEkiiGk93md2CVthHTx7NZiSbCLViQUvHw",
  "key22": "3UGrjk3NGQ3QGihyq6wYpbDTt3nXHpDRWBVBNMu9CzHwfXuRR59kfpjmBWxnune8h4NyZrNk195vHBVe5G5NjnnD",
  "key23": "kyBuxZ4VF1LuscrzAdvcUsSgHVoSi4mLjnr1Sp29VCNMtHdrCkL1r4Zb18Vn5SjCK4wzkdGh3okHN3qXCX6US19",
  "key24": "1vZXhB5zJ1rPApm63WuLzGGcfRbeNoqCfEhMNtCYds4RPDKRmtp9siRbxC27bPsTJmabCdP8Ft2v8VWD3w7hDD2"
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
