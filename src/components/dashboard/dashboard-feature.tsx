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
    "7fPnu34b4YSD1T5ULeP3JqXCP9BVvHSmniCZSLX7EmvSycAEPousmak5fK69KVaZgk5i2D1UXQ87c1gMRirSfxb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3RxSXzZme7fgMBaRBd1qPvCQGmAJbkN4dZQM3dSdstKVY1USjafpJni2pKvrBR5KJfgu41wiqJpe2NsE5RLfBub3",
  "key1": "33dnHtrRETKuMzpHNL6VKMMZYnngaHFKP1YnbAJPGxmV1c4wCBPfAoYAWdUwFB6T4nYsRRgH13LngqKJVVbGVJ25",
  "key2": "4DKrc4NNX7V9b16jjvtja5We2f61AcsUxvDxfiVovswKWbKBJBwTPSJMM9siY1pt9qCcjqMqwegAnmNo5nQsrz7x",
  "key3": "5GVE1APCEVxkn5biqqbYnicXvo2x38vFd6mjPc1W8dbKc5CygyfyWf5ndJjHdiDQnok2Sj1PLkD9MD5WErprWbkY",
  "key4": "5hyduhpfLtFGpgGxfQJRhMWkPECoxD8bEA2kjGAUFxati5LBg2AmKdkd5Gm4ZRc28VpBn2SRd225mwmGdVxoGT1e",
  "key5": "51H9SU2PFMuRhmEu7hdEKHSKYJjvMkVxCq4jdtqn6FAEoAJeWz88sE2PrzpBZACsjraJnj8k1jRUkoFA6DPiZyfX",
  "key6": "2MdcoxAet4D9h1ZysebEUpohmqnvq8FhJUkkqD2wLfkpsEPDU7mapVwENDtEXtGupip3GPntnFvDBcMm1aCehtRG",
  "key7": "2o4T2Bv3dNPc6HMQffjnR94PciiF9Gk5KFtkqv8hgW5HxfTK669cr8xW8RDfrWPSjQhScQbWz3mFhfMRPD4cXrgc",
  "key8": "52XfAt9rk6hPqkjUq9J2F24J1BeHFfpAJSSjgP8scvXs8quMHwCveG6aPQGFTMVNuAA1x7Ys5zps8GCUwfLh2Ywp",
  "key9": "4EsRNkdDh7k7tVoRup7L3pcB22YaV4Wfjc1a5F7cL2WCSc5he4pm9bnvxt5uGCKhSSgQdUkEcM4k58uBqqpFA3PR",
  "key10": "5eTT9eXYP2orpjAArSBmsoYgjGtmYNMrV9pjdMcSgGyVJwXFMAkopyL71R8fRLWm3cj8Vh2NE1UoaBb9bJhzX31u",
  "key11": "5H2SkYcd7Sfetbav3UmabUfmpeAGhH3YAUHCSRZnFDCq1C5NJSnmXYo4MphsAg9Wj6bfTeQhBvYpgTQ1r4onkN8r",
  "key12": "4EDmctTzbe2PrNa5V4NPNnkA9Bt9VXuDDm3MfoKdxxzMuW4m1PZfJuLo3Csj1Q18hHfYnH3c3WAEGTDPFo48mY7i",
  "key13": "5AQYKWVyboQfn9GWSVTVNpS9krNxSsqgZFrdDk1vKiyhwjjyxmohrJaojQAjkgBa6ovgD4XvEzaPR7sWUkxuFuWD",
  "key14": "63rAnxTGfnfZsYgSFRB34WUWRTy3aZDgcKejxp7rGw2EeCijrnTAvyjZhr7HU1dfWT8qh9fQDHPiitxPnrTSMaQN",
  "key15": "3aeLXD3fTuveioyUC6PEd5GQaWzfioXKGsTMBEJZRbqp3buBHWz4Wj94ey2fFX93PqFJPgRiqz5XJitSniekXZWb",
  "key16": "mY461RynCnGSqDficDqnWMwPgBmunwr2uE1bapfYkrAiz2ZMHoexyuC8cFLJ38e8abBpS9G6VNhqx77oAoFozbj",
  "key17": "4PNTZuP3Wqr8bAmJZb3szM9u9E4dw5LwjL9XBm5rnwsG3oWCwp973PGemREreSEvs4ZwVnxRmkJahZ3W3JSwiiq7",
  "key18": "45izjVmQqFkjitL9PAhf2i6AxWLvxzyuzTaWm4bbQ1Lqqmiugj65HVoxe1FqDxYbWsFkdw8giQmnWH6yRfTPBKsn",
  "key19": "44gyNodJrWma2u7NG8cvSLVrfLdAa27YXo2qgvWoVbFCiAxYMNA1vCtMyi5AXps2qaZ1C5NHTT15caBjYBD31qhc",
  "key20": "2uqYNq78mbpLjDG3Ypd6RZgPbQt1voy1v4XkMxMJob7GwyJyu25AuqeMXrsM3ykodpRHDrVt6e5n7kUoT32Hr7M1",
  "key21": "vt9BFNhZ16vtD8U34rRJPoyX7yJgyBnYKfgMKReNdcinnKcVbDnXtWMtzGSSkjAxSwaNSGYfHurjbimKG8Edk6g",
  "key22": "2iCWGZmX4KVzsLDTqg84GHoLtDHTA5AbQWE4pbANhHdeKvWcLCyvrsdAkwPkPv8cYCYYxpauAmKe95vTHbvu254Y",
  "key23": "3kw3SLZg2jQA5wdkLrPtnHLLfBeD6vVYpVwgsVXGtLmV2YzXxiDVrw1oL16DFQtutCP6raTK7RxzBYd4usT5WYBR",
  "key24": "4Rn2Ph48MP36CuEr2Qs4NtQMX7H548mF6qZgcMXaWKewH7Nhhr4kDZQxvxzPjtYv4wV63tbVMHDMYf4VrbPrVY5T",
  "key25": "5Rn1QRGXRNcaLnx3ssEZGo3iVeJxSTKvKZWcUaomEifBWm5aJexZjp4HC6N4Df4fdTx4BMhNmzF6Dnoo3Pq2HD4m",
  "key26": "4Guj5DVkWcctCaT3YkD3cVf2MvUTEzmLu4MPBX7pcQD4zqst74LeyjUgGr6WvDRC4JhAb5NoSyLGUaBaoDbdu9Zk"
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
