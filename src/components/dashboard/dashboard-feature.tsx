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
    "z2eDnLH18cehkQjktZJzNqZ7gXv8y9sRLB6MDAxtnTGCGiNzpt36Xve4HUa7Cjb6YycDSrZsCEBXUmqheMJJPjd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "NUzZCbFTBDayYYdzS2mxcbmd2PJACzi9GrTx4Tkn13eMc26PAevXNBvnvDB6FS1ToLfwDgLG22mQwNRcuBFqTki",
  "key1": "4FeNHJPqobmqzgTgsmjbs9CuAiTFeaSCUGhdxdiJfpirPsVev4mEcro2FV8DB8hKzGMZCPYfTaQeNYjqnwrVnPo5",
  "key2": "4kbzVk5MgMvGCNj6oyfSkY7NAFkpzkZku8G61ETRmZgXnqFnjFNEgtjBjDcGndUwKVnafBhsYbaWBMdp3R8yF7Gu",
  "key3": "4aYbUXYjWhxhkSsfwKSt1tjFAwNgkWjJM6pfHfpGSUBHd6QqsyW5GvioNELK8kVcJ8kkMMaq7JPR643ZW81fk6f1",
  "key4": "3uj2bko5x8pjyTA8mgKwpSViKqrvgaSTxC6Ddpma1N4LxcRGqYPPxxjyfdxEnK6C4xZu7bZTFyUkN9X3bjjKo4aG",
  "key5": "29yCS7RftAL4R9KK49abnzKBoWKcW6BGSta9VCYpkEPqJ7keDJNb2XKpKADu3fv7BoozvgV41fmtuhdNL8gjXK5y",
  "key6": "5YzgszX2BGVmwTSDkraG352mkUgdkw3fPbLt6bhjYiKk6d716s89GQwxrvRDQ8bvJhnGLspLPdPPTzKLtCqU48jC",
  "key7": "42vXTN15K3EgTTJd883nmCfdnXBZzrCcLMaCGfzmy5dvrAyYTEWGv2u73dj2KgN9h6duE9PjXxQa8AHAqsY6wqT4",
  "key8": "8F6TXkL9tvYxYT9Vp3TV12tQ9L1DMbdQQfdjgYScz6839AQAYBp9GZLttRDKRm6gz1ek6ZK5uJMaAhtwRs14WsA",
  "key9": "F35JBdZy6M3pNJhVjYuRbcNxnYDrySwVQUXxkwmuLiNVqmSFCNNkZ5qKFGCkYi9GKvAuzh6WvJhgF4YjeouE4pU",
  "key10": "2ovhTkyEH2HbAcqdjKbT3fhAcn52B22XV75C5a2L1F4dJ4RH4Hvjeet2aazD9gtq3hPFgtZZGWbsc6H19yaBmFFV",
  "key11": "5KGsdYrsQqUHEtPaGGqqT9Ljfr5sQgEjdw5qnrNMHSqFZV5Hz8xJgGUS5NmzDvjCmVNH9jMNRESFyur8sDF82woM",
  "key12": "2FhCQZehGL8zkp5FcvjTtsdrhmJG2t865Z9ssNvT6GbScUvsY9JBucob3inkzbEbWKsd8PtAfoekRra9FNCPN7Rh",
  "key13": "57h1QbM2KiN8dA2rJfkAEGPiYfpfYXPGuS3DwKc2ZsrWm41EwQHhAKz8iPTeB37coMziQXfdZPxbRY3d9cP7d32b",
  "key14": "5uTvW56nRRzfSLAnqNZ3cHM7LzVeWuWLrxpadFvgWLJu8CeANrGdAPV24p8X9HV8dBG9d1iK22P4Y8ng1X43P2yq",
  "key15": "29hMFx8AdLh2FuCcuzEysZNy1i5LQfUgika6VzQvT4jQYi43BnbaV6nVia6JdcBfzD5v2rBFs8nLNwy6crA7aSLX",
  "key16": "Qjk8iiTGBnZMashUnFJoQrVwKURgd7EVMtrcK6kyPT6T4Dm6EgZpbAznwdBspR8pMtbU2CUys5F7T6cFCGTxuHX",
  "key17": "2yYk1XRrchJuDQtaoRW2Gm2qSMa6CKSgL54ZVDRaPDCtFv4A63qR7ikehHZqhmRh9VA2QsBguDM8KTTPWSMBEAhL",
  "key18": "3TqWrPCpfY9BQA9dtZguDNxi2e8a1YaQAHpR2TnsWQKEk2dnzDdxfZwNYsGPD9hSAZuJqfBNHreveJee8r3LbXDg",
  "key19": "3d7ESYxMAVyJPDsN5wyPyYQ125N65uN7gARsYyqy1NoBCzp33hiLMMBkx1F9wn7mFq41uXjj9mY86k4o75DdRxej",
  "key20": "3V8VUZHgjdiVBBuKqQHV1u7YHDVbeMEH9qoLH8KG7KEEft8Bv9P6ro52bGzCtZDQLn3rGBCgzViALndW4kK2HGGY",
  "key21": "4mBNPSrTXctW57J9uYfJWSHgS1T5Bi1rhBM9f1zi6iX2QozpSv5r8NT4w1mywJ8T9Cnn1LYNZEj6Nud3GfUCJo27",
  "key22": "BLEcgGr9hvpJLcXUHr9gS4aDED4AHrsWDrRDuYwUTR2vi2LvMaNQJhKq7Uta6pTytzQMywSznrKpbcgEGoYQUrn",
  "key23": "5aMedrw8gmD3fev52Aac1NbPeF6b64ShYdnW2zYMpkbmJZKFYLuJzYSD2tAejiRLQusst39HCXh3PaWcWbVRm6fw",
  "key24": "2t96FmQ2pZFdftgjjaog8YiFbkK9VEWA6vWrzHaXxoUjKGpihXaMr9MoaNngP5X4Jw2za1d2CSdT8PBG4aKnd2X6",
  "key25": "3jrjkS8DzdJpF2KctCxDs1Yv3zj6MKnYqnCzj1cJ6tPP2k3vF6riEfvPSUdETvrJrBhDECbfsGCWUUwSspkW2gdG",
  "key26": "5jjXpENU11rh9enohyYeXhMFRy1bagJ4oeoYE7c9J7Ajm2Qasdv3qMbSWva6FsrpceU2fqJq58xfujs2airZg1mx",
  "key27": "4P92wtmiEi3zV3sgNBVhXxjY3mbBEka4q1zakpygqdoWTtJtmCkSHasP2g1Ga547qa23YLxKTYk2Y62qxWzYoXNv",
  "key28": "47jAmVsMN2LnWwnddM2QuLQQo5m6MzS1uAfrfKdJ3snZiCVKvk1QTo8aoDLXvtzeWSoXGTbjpmKLwxRwvSgsTXYV",
  "key29": "4nbjBLg6npcfAHhfhUYtc1U8kEb7tyrasyAtHT38WNZZQAV29ju5eFbWXFY5W5ShUhnvE1Mmh5ZP9MKkDA9LwCBj",
  "key30": "4SJffKiPLY27TFQHDrs9f8eReakixEjMz4qzi6xp1vkVB17bdQceTjL8CSyAaizbeRDjnxjE3713xKH9GhJnt27",
  "key31": "d8MUgt1K27qWn4qPca1iDnNmP5F1h9AySk29YW5g9yxHCWp1qJXKv1Aa2pi2pVgTcd8abf3Pm9PBRKEFvQHRCgq",
  "key32": "5SD9vbDtB2h1uS1ckvExDFJbXjHjzu3ekN8w1Ghcb1v7oheq4GRFBJ9xuDsimZwiH5mbMbyE5akbDSyHcae9UKpL",
  "key33": "2mJ3ZE9VcaAoeUJPyELxxAsE4qKaSBYhMrEG8WACCZhr21n9G4fr8kwZRNwcK2iLH9MmtLVGLye4YuU7QETeYR6S",
  "key34": "iioaJif1Fd2E2rXi42rQRWL7djyjkV1jKVGrQMCUViXVazZ3WhZR1J6EozPrvBmGxsJURcVHdRuyd4P2BHTydSn",
  "key35": "4P5ysYwPEcZhQZVTwL4kvcJVHj9rYusKr6StkAUKp5XBGJcpzyyj1bZBQobhZM6n2v9Dc5ixcpysqxe9X68JTuWR",
  "key36": "3gP63XPcavHSaxz8qHHWF6E837yxprZ1fQLzTrkMBjZeocm638F6wkDUBfB9E8oGvwoLxEZATzBhes8feNLFV4G4",
  "key37": "2KFLaDmmtZXpKR6v32wsNeMQj5AiTHEpdKd8xtAiboww6P2Y4CxgQrsS8rDnhtp8GbjYMABCXkzoMaNGWfhddBok",
  "key38": "4d1j2DZPVN9Af8hocZRb7WH2ZEWHrSM4zPMCWj1ukFe4nf1uMBZRuRdW1wXxo6AXaaZkrxX5i26MD8hPaxVayX6h",
  "key39": "49ToKsMxdi58WCHs3xPmbCyigGy3SfP3KMmbrT1md7QyxWWHZwaUcQDsNBKT83DMEAHHPAst2moVkiCyqRTE4xkJ",
  "key40": "49phTbZLptaRzbLMLFbCLK4HGhD3bJKBiNGXESZfVtL6BTMQpHu1puNUXPPAAdJ25p7P4Z9vnWyzCVg2bSisMsDq"
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
