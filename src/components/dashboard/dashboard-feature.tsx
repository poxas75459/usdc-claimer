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
    "4nwkcPx7BAHgQYi5xpg33zzhFnTTX7deUWhZmGUbzPoHSmxKEGyq4WJq6nFtDAatsr8KL9kauRRMKCcUJtDn7dXf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2rFmYdhwoerNtQVrzd4UwRWdCPe2CRf4rtgEUmvSV1b2P36bs74kQE1YodS64oogua6J3dRGu45AkN2hoiFoP3nk",
  "key1": "FuqQyAa5sjRrhZpn2URjMjsvcQwiB5Rxt1JZNDdZ3JX3kGRokAFvobWcP6PtZYWFr91zv7morkJW9jegAh6CcLb",
  "key2": "4ULfS4wvGTAqSuVuWY4vwEcw7YhKrexAQ8EQAJhLc1jq2FR119HtLZcdGGKtapGnvdHYqWDFo48t4hHFxK2bXh5t",
  "key3": "QwW2QNdhoTLR9MAJDEjjYRFyMbiGRDEovDFy3qbtE7abtpHTPHuU22L2oy424VbYTBYoeeDjcLxB9pBgqrdLEJv",
  "key4": "49hufLpeXy2eY1GYN4pYfAFzRo3PAubyPjcVE5xrm43DjRf1sQ3pAVgkcQ5b1s9dbuGtnXRWKKkfxDZ6DM49i8Tw",
  "key5": "4m77o3vXAksMSMkzLqCvFfcBoHh1ZJHAUmwvnJMHysMyjuZfbKS3nHT1d4VpCUQo8cnjNK6sRDEKggw7JodXzLvg",
  "key6": "4sEsrHyBfChSvy7iUSqjiLn5owy4L49XDyGXwphuEHLQSfeVH2eFewVt8H5zi2PUNu6gMjdpaQnQEk3GqueN94xb",
  "key7": "4WbtooHzqbUk7oqaimattycWVhSyWLZYFZHCpeCmzPNzNjXQnUnM8GDtVxj19naKUaFJi7AxhjgSxDoFbWNhpdSa",
  "key8": "61UD9MT7NppfpDNv8dyLerXYn7iPNZhArywnmBjAv4WeMHm72Q5uo5ucCeRmc6cxBtYw3Lvmg4C8dzgVvgujm3y4",
  "key9": "47X1kLdDjzCBgHSZsd28ZwLkgAiS3Fw8Uz3e93BoDnj919kazQ2Pd7tuYVCm8Xi3tbzXyNtTNMf81hLjZKLz7rgo",
  "key10": "2RGrL1XuwsVRfUchWuWQwbi4fqifssXrcbGtTn7eBzw1LVCThAFkZgrx6XxvqQboPtD9fgfqQkKxsDWyEr2FRyDp",
  "key11": "5B8nVnRB4WsC8QoW3opgp5K7XsrkTNvubJa7KJR8RWhBauwGv6uiXsLE8F97W7eULDs4QTKEZGXEekffQVb776Uy",
  "key12": "bP5foQpAjnKnKssNqetseQo5zaCJjs3BfLjmTzTWcsAKHEHnirVkDeHMZujH8S9TFmHFDEoJNYg9SrUyNJn4qCM",
  "key13": "QEGoG3gDbhDxFC9WMezdHZTcrf1nxy2U31RVURA4D8C4u2Uqkbb4VaVhMKJi2jdekETgKEbcsij8kpp4784xqaC",
  "key14": "3ut1nxkaScC3T6LkJnpqTuE5narMbLwmrdNFZSz2UWenxybyQBAxHSjpW2pUg1B51pomC2fMviCNNqFXfJ1PBSTe",
  "key15": "eVCcibV1TaTMwv9mpTHmQ9Rt2TRXRZSHGQNtLmVSqjqCrfzWwsBQ1GhSefZ8d87pyXtjPmLGe8dmdS9QcbDia1r",
  "key16": "62PRLVfgm83gu8fJ5adw6iz9xDLZyWHWMf5ZdChDmPoFBh6Mz44ykg3bCJ5unVtExQjUkbz3PuTKDEFhx7U3KM45",
  "key17": "cJATs1v4FYkEwt5uGcCsHZy1hg1fnnatsvWWGjikn1i4DXZPggFf85L9UnjgANGVHFwYbeJqe21CFD4hVTLAXmc",
  "key18": "2q5YyVoDNDDLekvLcrpYVwGXpMjx6M3SqGNx18mxtZHwZzBBs6Eh679BdF81PXXPW8uNkzKKQKsx1r7NCyJdFJ3v",
  "key19": "4A9wzbJwUyFFCCXbYXsKQjTdujUaGceDNfoAx6CewXVAsMvCv5aZy3GkRjGHJgAtBHYXaShJV9iaijmy1cxoQpu6",
  "key20": "3HSWwRaLWVAkVSWyjcw2iB9LBYubohc7nWFupVrVXxB6KiCQVmPacurfY8AuGi2p3kfXuLrvwVu4aaHJnjoxrJ6p",
  "key21": "45fwVwdRpDhAfsj1eAD9v2Fy6s3vF2znMatqYraPMMyTxW9bf5AVmqpoTwsmZFCdh6vzEXQ4CksuZT3jK72fDH1J",
  "key22": "ptPYukK9vwqgFQ2vaqR2JZNVgMsEU6J5SzEjzad75tcA4tadV6xhj51VkB4oHRudZpVKSwEiWC8FdwiYxfy158F",
  "key23": "4R4D21a4hC2f21g9NeGC8hHNPvKvZkv2EiGTJ3qNNu33R2ucUsrkVk9rhmv1GSPapXRhW6skD8zgTV234LTZbkpF",
  "key24": "3FTH24KB4rerqs7595ZtmLVMDYXvhtcoi38dRrVQsVirx6jW1U7nEshWCGWTSgpwJD1wnNZM9d7KW9PXPrMvtjdh",
  "key25": "5Zi1ieuBECyD2jzmDX9wHbX5xHH4GJ742FJULDg58Wvq3TZwz9ERiKxTzn9by2iLrYEYz9YerzmMmv4EhEAawHmM",
  "key26": "GaiowwR8RswNyDVwUuCCsVpjdNWzHD2q8gxvG8WmMrwuGRDvmpo4y3cokwJs1zT2E9Jg5MJSdJ23zkq5pRND2gd"
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
