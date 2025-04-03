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
    "EVykasyu6VzYbGXc4q5cYQeFgi8JRzhgr8Yio9mKiRchfot9P5h7b6AdMbMbrgADNcKPF8HLu34ddt3ggzuXwBJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5LNqbDB2yai4bWq8GnhRW2xbfitYEXXgewTxMqbZtSDHTRp1NroEgdfTiK1E6sMrzbf4pkKfMXZLMdzvnehLzS4e",
  "key1": "3YdjQmY3JGeFLsbbmtQboa3xoWbMnpzGkVXE8Xus89pXndjyig1JrauM783b9Tk1LKSEorVPusuqK1z6JA8BBvge",
  "key2": "3vo3vmtLJapUZ1erjsDVMenxj3trnApMZFcJLyAwVAzARH9xxwDMX1LSYFwFzeW4kKsDBNWrY2wC49RUaxBNCK16",
  "key3": "2FAVEipeE1DzxT8T7BUH5Qz6eu5BcvzEUbYCJUr9uw8UMKr8Tyh1wbtwStsckzwby8EJgY3UMqAFMH7zwRqNpsNV",
  "key4": "48d3huuivjHoroQh4mQ51LziiRco4Vp5E2r8zwQ2ApGMRQda2AgHM2wV5d6o5yWaisreeW75U8Ud4saQmLn98TWu",
  "key5": "3jYHRRFi7uQjmaYrY31QtdckeeQ3ecg9qZWCKDwcfrQmLZ8JnVPauzctVq9LW1f8BqBHRRg4hmqxKzZrMoG3Dxxo",
  "key6": "3ofhQdZNKM9MRESGRcUYzsAZ2vmgboBmaBg21DUaSuJmuK6D7J1uaJw4FkwTiykaDavqd6QCTduquW8mpqkjwMXS",
  "key7": "3dH399yHDYSBF5XRb8Jxf37f5sU9aaLM1xqgXWQXqTtj3PezoTkwGsMShQDUz9X7g4PhzijqhH1bgR1sEqRPkL3M",
  "key8": "5seyLGxG9UsNV7dU8RGQnEfjwoAaqZBPdhSjTx2Xmqwo12KCpoPzbtnZFnYMTa5TmWbUv12iwaUVVgTEiEdepTxp",
  "key9": "4eT3ZjxLaGXq9cKJdAQ4Fb1TjAz6fzbqAzsxhs9scRsr2uwjx1A2yJX8m5qSZ71oyD2gF4X48wFWGCVUUeJ4a2LR",
  "key10": "5DoW2FqxQDqhTDY7qbq2Gzbi6dAyg4GXFEPXaxCPCHjvc7rYjZk2s1VGGxkCtygz4mQwR8P92BJZzf6x4FuaxYSH",
  "key11": "3tZ9QwAWAd6tFJ6deTnhgrCK2qeuXptsVWsDm44mbc5zEDsARawxLh1oKJJiuw7kESm6rcuhuPffvF9r7bBUZaPU",
  "key12": "5CeiKmES7M8SL4ZyBDh5pXGjZqHgpPwDx44QpbxcZ8sLWZsHeqz7Q8XL1dR4RhLMHE8Qjs7qYb5kU8C2Zecg7WNq",
  "key13": "4xsNhLS67sQhRJjMicR34xZUYUZW63ABoTkURzkxEBwkgWBUjuF4ELjPPYZi6irGKJnpG1fZ16Wmya8iPLZjdGAR",
  "key14": "4PbxKn8uC9SnudVKxoeWUa6yEBtytxNN8u2VrjSxQ8Cqc3oWQdYBK72GWk1woRVCRUAUkDfXKD2XZTY7bDY75W4D",
  "key15": "Kt6gi1Lnw1C3iceU13mPSqRcLdVDHa8qJBT7pYbBJzBvYvp3i3x8MkcbKCktQUXKH1gSe6TS4cDbhKwwbFD9ZAT",
  "key16": "tZnDjExvP9JasHrnK5Zh5ZF4y4Hx1hJpkXETB4VryD5TazqohBeeRc8AEQXZs5aSnVzehyEzrHRh113fGr4QxbV",
  "key17": "tUDgPLDMmJp4gnwy7rrMY7xB3Yir1odLLtjLHLNzgwEFGqejuS7G4BXpDyUPuwbDGAovTw9BFZqPSdB2UK9mTTK",
  "key18": "3WGeuz7uLWVaFesiRP1BKxpJEF37j9h6Nv5Tq95uErTGAMuuntCF2kkdrs5mudUziXYBkLkubnoXrEATHZdAmfNe",
  "key19": "2KYaUqgVvtmTAqoPmTsD54pFuTsQqvbqM2CEL8X34YbnRXFk55yLYwK3mYFogfSiDv5FR7JS2Na3D6i6gNc55ZJh",
  "key20": "tPqjDSHVJN12de4uszys3Zj1BG9QUbGdociwVRxaazZJ97nnT3FaFT8eJyTEPtisqY3up7w1yyLFoxp5ygRq6S4",
  "key21": "FmZDvTKXpb3dGyEVpQq19EJvAVq7NJ2vgvVWZcJsbMVdC5eMd4RVYyd7vM4VYMYL4Y5aUThSjkw7kjKb2CnEQGq",
  "key22": "5m5CFTyKjPjjSdifb5wsPyhamN726iEufm7efiRz62U7YdP9pDAPjNaD75rRFtQPp2tpzCDx3N9qbqNEjy811o6j",
  "key23": "29EphwbDvAn2bL1WhZhCf9maPVSTSxcXsVyQHzo1yQYgQYUT5dUjMA7gk8iogw4CGnVhHQAZfBrnYntRgGTkkRuH",
  "key24": "5i6QnC2sv7CSvYvDEANrd7ibxW2tZrwCtvKMoteeZ3itF2nHL7wePNyZ7y3odLeaeDFBwao5VE2uyAAtneMviy6c",
  "key25": "47aVix6kQLjjCwXTKqd2iJyjpPZT7K1oDj3m5QjwmLhz9ew3gDTeSQUq3PCqjZ4SrKHA8p71XNZYh7TM9xTaNV4U"
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
