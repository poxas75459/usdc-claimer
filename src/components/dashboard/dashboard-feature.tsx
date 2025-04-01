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
    "21QQW5QZsRH3nQXVdn2wwt19ab4FgECx63dPdCpuVT4suP3q1XGt7dWx5fyGJZp7dBzMFokD2EVSPgyu814ukpyK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "GzkEjJ5q2Ydz45MPEqDm8hWkbYCDossEDQphRv4Guq4ufgxc2w3QeBHtaZ4GKrY2iPovorVBEFZkrWDyroBsQbH",
  "key1": "3bys2A7cMxEyJ3D6HJ5UEHe74jFDGjfr1BiTin3vW6QJbfrvQfgEAxCY1RkYevSFcY3ViTy3uBXJZNho68HtJrcP",
  "key2": "4zhhJp8Awxxai3dUcScmXin2uGrGPWs4zYyJAv2uGLYH7wTEE9VbTZpaUoiJXpUSv8Baf9ggP9xN7T5fuW7R8Kbk",
  "key3": "5eSB4ARFbjRRiSmJdgrf1KxkTjbmvJ7ZQq3EnpNR83Bf6aHqgmHjxfKANMFCjs3JFJ48qVtmoNVS17rqCdweD9vh",
  "key4": "3BSGSryyKVVTHyMCv5vUyxx65kW6cEXLYMH6tWjfiAJza7fQvLUdCz9vGs5daS1ymZP8Q6dXqMphnCJ5LqsfMFR3",
  "key5": "e418xU8URmkYZr4Dhj7Pyi2LESJBhMUTcMiL3nZeX7g5CpLfTWkhLmL9VA14Mtw6fLUhrDYFQBmvBPUJ5rgSkdu",
  "key6": "3NKrTMJvd23WUWLoFXr9fRLiWB288dDaX9PfnCC3ZE1deDCt8JqKCcpW9kkh63kNXUzyWjuaDt13Mi8qGQdsjzwK",
  "key7": "QH1bDNaEA91yiWokNsBbJ7ohkv4AyuJGTYKDvhkJoDqeLtksHT9fM9LdhzERCPFQfTVbtF9Fsc1hbDAZvLRRYba",
  "key8": "BzshiiRcc9UojXH4BmrMvS4BFhbUM538gUSuP2EbhQp1MRnRwoMoujik6BjCKEqsXzXGcdFjXuQsXZGRTdM6THD",
  "key9": "LJd1tqtirjTuaP2e4ednZRw1ZZaMGTHYaKyeHRwbAA9xvCnqRTi8kx1y8n9gPxTEg9CxCJ8TYJiwRdXaCvUmqMr",
  "key10": "f4o1WXzTwTy7rxsBzjhxR1RWvv9ioZexULU4cL7soYKHBcddQCh2uq4GB5r65Pmz5szCU4sYcoS3c7bk8m3wpBy",
  "key11": "iqkFit8f8CZSXgEBojwwfpSFhnbZ9qeCw6enM4yL9Zrg2EcT6wB9pp2HUVFzKCGk6tzy754yCfjSdFzQD5EDabw",
  "key12": "3JKZJE8Ah4N1fhXJouuecbVoCgCZiX2veziZugHQdZpGwVcQRoUnCpC1swesyZ75ip149QS1G8nCQd2TfQoKkChw",
  "key13": "5WYwLnDGjfpApyV6CCHvwTnW1fx9ooPJFZESobhK7fZPgY3zVj6Mp9waxRfBXNBSVhbS3tyW48LCnREbbfkdj5fe",
  "key14": "ZFv7rkfhHeFKXd8wiMue5h6MbBCdVdvP1TMfq38gt5sLjTiZC5hvoNJrs2n7LGQHdSAL5smjSoTAy7eLtiTZSX8",
  "key15": "TzYP2VwVdSsy3TdsXYDMf8xX6J5s2egSfVBQVXJgbwHoqnFaNZndEaEyVRpHYE6R5n1g2VBt5sZh5KJce1GTHdb",
  "key16": "4iwNiRoM2n2auN3SRwuMXNhg2265DBQ5wGLigEt4qSmZZcLunKLDFwDEPXVz6xnNUA4qC7vj8dNfbCAJnVqumcLt",
  "key17": "H49gfV2QqszDMNTBLurVEsxYaD9JNbHgptFCXgSaEKaqGtHm3wTvWt3iuFsj79rrCjLf3PAoUJ9xzpSBmd84pL8",
  "key18": "31KrZrgU5hKGLjZcsd2KYVZxwsk5x4DmBm3LsJ4aaHicQsxr6QUdWsByn3hqj4swzx8y9ucuQhQVbXthcXxNxD2w",
  "key19": "3jxrSEayPRniuHmmDBoqPX6nfHPGQRUD6Ehgs9eUfWKKkdV2rmRWvjYcaMht71w1BdBTubtu56VZmMYxu7W6HjHy",
  "key20": "3RLHzBbf4UzGuTbfHEwdX5ErkzCzjqsn2rA6EMSMSGbX7NoJyXe91mBc1FqEmpEvNoC4Eq9H7aE73VYDjxkJE8DU",
  "key21": "35thtbuX4VNemNv383X7cgeF4RNmELUxVs8w3n8CUPN36C9vU9xYfkFGD4zPdGun5zwQMcKt8wbSZcc9p9u2npoq",
  "key22": "4AmasZqfDUwH8dZo6ucHMXmFvS9qVY72gZn4M43sPt7Z2sRaafgHJn98SXftbJCAyJHZuVcRb6roCEAKkUeBwUaS",
  "key23": "4Tg61pbAFHCYY37tH8Cu3N3TCct2yTtQY72t786E7aQ88GaUe89beN4H9pzLq78gL5ktZzqnzAVE8eNR9ssYVRv6",
  "key24": "2yzoQt1eDmNQTMXPKKb5aYSKvpHc2gzaCjCTTUqozqMoDbB3msv6sCzLWDvEzi1oLu8jzXV3xJ3YUTYNXYRxZEAx"
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
