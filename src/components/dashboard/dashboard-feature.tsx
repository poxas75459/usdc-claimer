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
    "5fRZi435hdzaL3r8EuLJb6EGH4PZkj3EcFE8gZLCkXsavbKU4Tpw9JBcW2Af22QzPgdPWzyyB5xm8pSiAi8q9k5s"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "37DsvsSS8YbCVwqcKyd2VuHJmoJeTAaPERsqVZcw7AYx1AAom3pWUpVFvPPjBit4YgdnCkxb6bn8saa1e42YS35w",
  "key1": "zqrcNAzqrmGCNQvzvfL9sHL1bvxuDXQJrYoDcPBYGkwNCioq5pQBc9eEPVNRCrR85UjQmRnf1SVQ6qJ37bJ4e7b",
  "key2": "4geZLC7NrWHpydhGFtSBPyPXk57hawBJjGKY64BFcyBg5C3nFnpbvEiSVyPBE1caG2Fjt7w5HBokccRejT6u51BM",
  "key3": "3X6Q6DaFu7i9NYoiA5QNyu3ED8girUa7dn9KFbUjgHbKRwoRKSrFnU9u3oixtuqjgqNzRf4K2P2HtfiVjj92BmvS",
  "key4": "rpZdNNmVMk2VrALs4aMhB2HyqiJMjae9gtnRaGKNB7pJD1VVmeMUbgoiNKTLjPUWCBrtT4TwKovo3ix6MDQ9wfF",
  "key5": "5BymipcYzfYbdP7r4PHLkWgRoGboH9tv12iq2QfWU9wf1F1DdkgigjL64FggW5S1YzSvf4kmp65PDGUPgGxXnRhV",
  "key6": "4md9WzX9jeA1hM6PZK3dE28iquBXSb6Ck4g44W2NaT1B6WaZCMEeQDb3AUcoVkuF3x5VeunWJtKLHNTFcH4mQXaK",
  "key7": "3TujYNqJUaAz1NB5yM4md8uqACnoFPyFKMFU3zdVN4kEEzMKgzywRbbbkX5NrcHumynQDPDhqiEDwZXyQwg2MSZP",
  "key8": "2TPYoWktbfctJNjDiKTD55sSE1uXuJhSf8Rc9UPK13cVYWX1iPTN4tBC6RfkGrkxSsUwiibHTAQUDpkP38RT5Gb6",
  "key9": "4ohAZfkwuXBjFvJ73mAeRJzfSQp8683uwTDCxKgGMfcjRe6AFgDdYwrUADEDNxcwxyKSE2DTSJqbvSCFrjPvasUD",
  "key10": "3rg3q9HnmPb9Kkfwf6jSjWyDrEv47vPNBuANxJpDsqcrFKZk4DsZfcpx6iQaUSqLbU9ijQXSshn97AUXjJj7fSiw",
  "key11": "2HbcYXAwZQEVAXMTKG2Cp6oKbTVkBmJmevzHRsREbN1scMzRjEmQzn5thae51yuyi7zwesCPUiQCqyjDQ3eHGrue",
  "key12": "4AVmL2CipmkrUJApDSvEmriqHTvAzHwxfzu1mmA8cetPvEAfNS7iGvW2XY523QjV38E8XVbggVJMiGjrUU8DbUma",
  "key13": "MFx9evnkxGNp2JEEC9pQ1dNigyz8VSdeyWGQdznySLteAPiZpZzMuYApEdBKtGqJbZk4jdHiEwC6Lb6z9AVXuia",
  "key14": "3rTrcabVms2ovgVaTT7CpbhHsK6rQqdMuvc4vs1oLZ3yCa7pY1H47w1ub1YkuTtMjsML3DpeuqkB3JFzkR6c5izw",
  "key15": "2r8BBG3DCGhJ1r9K8RZXvs6LtyCVEe3Qx9c2irgai57v24Sfy6A9bxa32gVrcrLENe2gNRJVs6Drk4bXmdexvKoF",
  "key16": "3TZq19CggiDhcbdd17eYZHfLqwjqswC8VmNJFuyhAkxhwCppXaAp9VVHX2bc1Vky8Vw3e3qredn1utvUzX669ojL",
  "key17": "5yyC5uV5SVVsMGLgbgx8qa4Rzq819z8HTyboAAwyVSV1pBK68QR8x1XpthSF78CRek3Hxm5mkVgJrjzg7LhDvDAZ",
  "key18": "5QPT229xi5LXEyMk8kkLzqz7N4VHcjuVX4SdncFvNatNRoH8rQdP7FU4dqUV9eHMKJ8HevdtmTGKAXvAMnbo9DY",
  "key19": "x5yMmj9X9xtwXqapiYKdPADnQuSbxhCRkg1LWMfSCrjq6aY6wE4pDHYyLbbsoq2qLx9DhZbRhTPiqnbY9VQ8m3Q",
  "key20": "533zDPQzdn6NLVTsezPwuBT4AeJummtTcBitKd9JdCHR1BcPzG9ca7kU2CbbMt9sXjdDm6rPSzDi1aAfRU9ggYnw",
  "key21": "3PcxqE2NMU5ZJbdvuj2qvuDjJtRShRE9rrPSERhzEwFAfmYS6S8yT1w47ccoqFWYvuc5DUbBTrRj48VDc9J6QpZ1",
  "key22": "5swb4gxXLdkJJ1ts6FiaaTc6G2LQ7x77YojCKqrJBsNzCLaT81XzxYZAz4HHRuY3rEopQ2fNGXoTbgtEVFafoPcd",
  "key23": "GtowHeyLGuRDxX9Cg6moxte7epohdFVBmbQr4esoqErFHQPkrnqh8NWEweAtCpTkSZTzANyZTRnYoswi4vMTcRr",
  "key24": "3i2pXVZGQzXGRHz1oLaxaDxCeKsryrMzNHvrjPezyAeVsfSVC2iH2MuUJjDXz5taEUN12YAnRSJiNpADtHHpkddm",
  "key25": "3K9cDS3azv41iwvUwUht9NkxsJLeKNQavhLV3Lww4sRpK5zRRmo7uLxGPWTJX2C6tYBSThDqbmCW1aLG615EPCHq",
  "key26": "5fLK76xMxxqnZkDnRDUxTQ4jLWoLo1GHfGYcGphwBBZffBhY92mznFpmbHUtXZbWmMqQWecfBM9Pbj8Q7MTWjNwD",
  "key27": "4Kq1GzXP9vYVDktAb7y1brwzc7an2vMkuEJckeukvQSWDRZFwMU8PKmNotKt6PEbH3mnyH3GsHGuDwNLstMFKDqu",
  "key28": "2kUBin8dHHbmCz6syZ1v4GuGFwxfUdCWL5ve1kXiWvy8qMZhQ2VgXjBSFrQAVrEZn6LEA4o26NyJ3ZheMDqXvhR3",
  "key29": "48hQwntcfUbRxEzv6Uebcy3Q6GcEjW9fk2VJUGESTJarajRqpxrBt9ufbuza59iAUQfdM9oXdkjVzaAqFkJh9ZWd",
  "key30": "51UsHzR6Sg1crEu7L4i4fAW2WaKZrCYBbSopcut9PyVbDwpd83yZLGxXLpgHp1QLWsTPBGnSi4kSJhRAFbPDdkj2",
  "key31": "S7qirYZnX3AZkgDEAVq6n1i1azkxRJ1PfUXoA87FDnKygPGrfRYgmB7QExBqAF7jGyvQ8njhAqhZS8P2oMQ5Poq",
  "key32": "4uwpCWgRhmyzFp8NMsLd44MaDfHFrYdhYnH67ASm7xqbc67vU54ApqqpprCnMk2Hcb5tocovaYM3cAq9FsvFGL9T",
  "key33": "3iJjwKasfcsnp1bKnE4C8GGBzTBpANVcSZ1Hf472UgYAXTMUey59hQXPPbXpXWVZcnZB1mfMfRnRD4ZgQAJ8xdXB",
  "key34": "3M9G8q43RWhah84M6bKGLppu8Yts1v8ucFovmy6aXyz3P3hyaHUQcCdcGBXFp6V92hQyAi8RDxXDQiiNTerFnn5C",
  "key35": "5pkHAficWGLH7UphRT1fLKJnTseV6B3dH4tLo8GFJoEom9Cgy8z2YQwUTXTYZt7cPTvFHvVnZ1yW5E77aKa6Q357",
  "key36": "qMR6kDtFMiHhwzVCoyQPNEtJaXbkeh5Sxc8VWzKwcA9wfRbqGpMxn9a4cUVLW5mWjcLbp53hmpwqk2A5htdRJri",
  "key37": "3m6yM54Q2E5tNkcoJjug3uEo7Np7eC3kPPicvJFQ6GhpU4H7AsUPfuw4fDy5XUPxvCwznggpHwTpGEkm8zHFXFCU",
  "key38": "5VrqVBvcL6ZYc15wg8aivf4FD9YxnZ1VPmdvGNEkX6mfAuD1Yi1b2bSUbhCmzSg3Sw9wk1hXoqSFrH5P57Licfe9"
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
