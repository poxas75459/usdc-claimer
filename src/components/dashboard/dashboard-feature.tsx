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
    "2jpuSiRtBqafCSGKo4C8FmPGBJtRUiW4prgajaJcTnkQdTWA7UbFAwCmNPAhX1sd6fXT75LtzMyUmyh1LAt7znsy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3qTs8DcPMZQxZyPSJez2VUBuHm2tj78jBsBAU5azDfGK47qBC8Z1NdsPTCJC7zt2f1CWgKWDNWD4LmHCsdgA3J9M",
  "key1": "Z8YfRovfReaafAr8vQm7ajQ6qNoC9WYt6tgmw5kn8DkE11CMP22VMf8B1puTqjufzX8NnzxcQrWRgf8g74SWXd9",
  "key2": "3EhCcXtgoNhUik4HmdD8AwCL4y4rNggVqnfFKVTKrxpF9DrZmJYrzc2qbSvuFx3Mnnj6UaeUrHhgdLpvZV265cuR",
  "key3": "6794p4KsrWDSbNN8kk61ECC1GyRYiKk9izyK3i5wa1tGvy45w8w1Zi6o5qzQNCXYPaVkppS28NzZvbhoRbanwuMh",
  "key4": "5FCCZBNkFFTeMzhR6TnNFe78MNbVCdNMvGTVSX5J2qHWQh2nUTfdfyvTB4e2PmVqU1uj24uybERPqn4Rhg2HjZca",
  "key5": "3nSghWXmAQUUxqwCvPh5W4kz7GVuf7Gdu6u48MPTxL1h5WvwmjALmPLt7M5KmneFe2nkhqUsVbVY4akffU2HUYAM",
  "key6": "2LSz9bqCrw9fWcgsshkEeyjJuMCfrbpfnTouexh3NFRYRx3LcE1RnCn9UDSmHzF3QFv6KcC57cErRvz7ta5oRR3v",
  "key7": "3gum32FfbFAKxHPfP8USR2B1TAot37gT7D1PyRd6uqLMaKuqWfTfQWJum9mMkYa1vhtocQUmje9UEGJ3PzYg92W3",
  "key8": "3HaDVKpf7odLvdg32GJYa641Qt39pkMSvN4gFkdKdWhbdT6RBMRfb7ALzLUiVg7F7WQnCsvopbjRQqdipfv1Yunn",
  "key9": "ZMNgzrfdk3wGr2VejTtnBbxCMek38Bak8BGk9kRG4QL1BjWvTcWN6F85nXY3i9uSCYMTg6xMxNS33F6bysFj4ob",
  "key10": "67GBGVAqTdr3BwpK2iJwSTLcLreb7eWMNiEemyMMxQME4n72X1T6TPZPNgAhra5t43upUrchYGL2tuEa5XN8Bsix",
  "key11": "3TVo7B3koC9FDkr24Ewx47PdLAuxT2bUsqz6DXd5RZ9x2GcBcZBzpbkM2suj24xgAFkWwchjxgUK7P5hfudpmpfe",
  "key12": "3mpbHwC7bJcoBMKVsff2BrPJFKBkWwwQri3LWNSXqiLjA4JNGu9E7rc24VCP6Z23DvMsZuEz4FrW3n1xMmFB9EQR",
  "key13": "61KJeQzk4qCuRMQATYFDvC4vboNBScqWpwmF19KRGWLbYMXsD8kS4khgN3geX8Kc8QvtAcrKpahNK4yL27uiRAeC",
  "key14": "4ESzDbGLqAduudENmeypXRfZDnEo9U8BoUqqT29iQxyqhThzpxtP37NGSTpcNXrZhoxHmUmvonXLZGCXTysSZ8sx",
  "key15": "5bCNQJpSqKVoo2jGmHMMhrLkiSjh9GAToGt78pPoXVAURg39Jza3CrFKcYif6hxEBXFdE4VYo3pPvwU2394HkBQz",
  "key16": "2NMsgqCB5k5fCVEzJhsVVhJQYAPBytAgUtRLdUGpE1sCJrRyMU8He2UAzm8eE6moPgxXjp9sXsq2Y4AZya7JYLaB",
  "key17": "3Xq1orj5cPkXGpoEA9LC8YjEg5sRe8qC2YpxnDgGkuxn9qhYrBKUvdJwuJU54ioTUxadoao2rw95NdDjFKDphda8",
  "key18": "ABiXrrc2RAH8vsHExRAsVz94hLG4GtV1bkHhqvGFsQ94QxiikbyPKMSR7xJhcDVGkY4ZrFfUkGMp66anQ8iTrck",
  "key19": "Dmon8iQc4AdmRpVfSHiX2UV5v76j6yKqGB8s2TpoKNPuFzNUFW4UyPfXWvFDeL14CmNr6uC31J1LDDgWX9pzTLK",
  "key20": "3o7UcYE6C89WhMoqz7V2MBov8wcUQghNpjJ5q8nFPVDK23T4MFiH7fisBx84kJqtk6voMKmYEdLcJc9T7Wn7Jr92",
  "key21": "4azxcEnCLJrhJ5sSnJLXXgqJsbFnLtDtFdVRXsFpchxDhnrp96jCUjZkfMuet3cFrMLTbCWWNNhxQ8EHcMmAygdQ",
  "key22": "ChRP9CTuRvwrUr1mfaxUhFzKAh4qaUBJb8gKkbREvvJA9fWfkcctduZUuudxHnZ7JBp9arXuss95bt39PvtAhHd",
  "key23": "65Uw3k5QcGertFosyZ2VBx4m5vxPvYDHRWr1b4kwEWjonp1NXRrAoDo8xUJkN8Se2kAaz76obRZ13LMZtv5k5Jky",
  "key24": "CvzdYMtkRAoTaTMX1kJfxqodVyknVYReAzizN7idPGEdCmWfsNf2fbrR9MWXTVM261FUM8NHJeZKqQHknWuvfAk",
  "key25": "2T42wLvoiwrvsN9SmjGXkQNySZ8sSMRm7FwR7hSp7nY9wYBwYcTTXHpkFfbbJt88i5c7m2cvYwEf4Updz6GBcuBm"
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
