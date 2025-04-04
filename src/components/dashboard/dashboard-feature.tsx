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
    "3pXWDMqkbhu8YnnxfRipyTfSUMBL92gFt8SmaysmH3TnGrE4msPPb17jah7iNXFTj7NtZgyjC3fhVKEjMCBZGBde"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3JoMFrqzBsC1VavVH9JKH5gJ3RawATgDNx3GuJhnsv12E6j9MjJoc4zKg4roPSuou1WoFY6A6wH2uMkqqWquG4PG",
  "key1": "3sDxcsRZjE8dBSxVovSTUzRBaFjae2cJ27Nj6WhPzDgd9kTkkBsYkdvWYLuKj3Xm8P7D1nhpc3JoE5fMhWHYSZLJ",
  "key2": "5jGf3ErKMYgXtNj8VAb2s1yVFCLHrYDtJMGUKV4QRBRv3SAgZyNo4p4qpykTfjsuDKx949RcXcDJLR6mpcLDJoUq",
  "key3": "3T4svHNauLgqNUt2VWJp9x78d4rXnqjq4Eeroe4QyyRRysFBxunTvL3XUgt6X9MA1vtrGKXiD8qKHL16oTT3stYH",
  "key4": "5QSbVqAHrYQ94x859jHTBAKg9VZt4ADA1RKv4So4aYWUMC9upfBNmP6EpYMKihkXijVWYKPUUg2DhB8h8nZQxi4",
  "key5": "qrueoW6UCZsWkiZHXxyeZxpBQVkDPUUzcgDLFa8qfdZ1hsX3e5sxEH7NbwCUeHFWxATQrs8UbqYa6MJmTnAWEq9",
  "key6": "28MTThZsHrKkZcuyJwe1hAXsuLyDFD2z32SafEd7G5dbFJYX3D7ZauGG3t79c72TFKb5ANFspJfwwSPzEwANxWw3",
  "key7": "4kBqwb8bygExKoRBeosnrid4HwiX3np6VePRdfvdKDjzHetob3fVtxtfkkxk3iNGzF2Xi4mLZ1BF5Q3f2Dmfkseq",
  "key8": "nnyFDTBUk9Rp9paWsG3mA4ng3em3jjZRinCGLCAjv5rFLXn1TvfWE3dDxewRXPZuL4cUR7VNaDMkDuh9UnM2LgF",
  "key9": "3s89bpw5xSNBUYdv6ncntxyahMCEQC4HZmMCeo2Q7K5gZfJFZ8USAkNsRVJf6Gv3tHL3uyZKpkAjk5vZVVQVwSUw",
  "key10": "65rA3skb4G8esreen4HHfSjLWVe9cxdnMMQwjYLQiiax8hThoPHnJWHF1P3684vuq4iPqbDmebNx4ECDw9vkBqWn",
  "key11": "23HLWWMTNqMC6TMBpX1R67NB6jdNLqyGeqL3YyueLAWNzn2ixtX9g7Liys7ZACZPACMS5oH89gHAANvxbz89ZvFY",
  "key12": "5g2MWR4CSXSg8UvZCMWeY9wzQ1RDmDX1x8MXwchmYMb5W4twhy47aEPYpBA6jmUKiMN9PTDGEEeo9itKXViPpg5t",
  "key13": "2d3mQfr3tbPghem6ekVAvYPQpfbXe1R9SYGNi2MpZ39jqt2c9QWhzyGWnRzVmXZFzamUFkShkRXuM99NciuTdmVW",
  "key14": "3Cx8QnMQqT2nV62HukQRktLDK3H8viHJKUxS3Eu6trtc1vVxdm7kJGASYpnXjDiSfxP2JfF3GGdkR1o2BMvoB9PL",
  "key15": "4vKWcG5rtXLxi2vhAJLcAb7Jf6EWJMhbhZoVoEA3dyh1ZriB8dsNfkLVMonme1RAoSUyReUQvHymnsYRF787JVjb",
  "key16": "v2s7zTiUbrs5Ak39BbghNVUvjVMmkV6fPCuKVc4fX6rHCGuowtpptMivQETCETit2pPRyCbGjFgqHRAokHqBrs5",
  "key17": "41SQJnS8MJatdF3bqQtgz43RCeVpsHA1vUdXJrTR5W75RgEBuiUMxyaPcmdFTa9AbH2BpC3tkBRaCmmRdqqPhamT",
  "key18": "4jjsUde51U4iQAaY1yzi1wLiqVctgSQ2LhmHZwZ5RAQykGS2947FrejGXSZ4g3u6TPMTYTNevDyCU4tgm8caVUGf",
  "key19": "2oobsCvE7CcVEVtenAvJrAfnfne5MTJqR5Fa2LEimXaCcivFsWGPJRTtwkHLJL2uxXPdCggMycvEyu8UJGf2Qxm",
  "key20": "2njVwZN8ZLExrMPqkr8szcf2ATAeZgib2sTLRn2HheWbiWruGe5qewHZAtrF2Gu6wNh3XDMzzmW372w8Z7McHD3h",
  "key21": "2fkXeUps16or7iNdrFCHDpdx9ZP2BLEACvXvecVmK3qQW6NsDJFawJxx9PpUwkSCu2jAynyDSERk1kzHhWnyetp",
  "key22": "29zcZUocg1Q8spH7bw1ETqZEN2342vp1AVHCjrnRmdcBY8UPG4dHFmi37gsAUyRp2KPwH8Dt2LUJAdXce711C889",
  "key23": "3oDxKd6KB1TDTEazL4uCpzsnQ8mQ7h8hUYzG4CADe23RXTDTDFzochHyxhpTE3izRoCLbbTXm67dpQzK3iBu6hcZ",
  "key24": "4w6PBUKr2NWtReQpkST8R2rxFv9exnAUYHFFNUYgU6XYyb5WLoh1GCMHMMFKoZbSbhkLj1uWjN3paUADAxvbZCw",
  "key25": "wHqmRpGDeRdhHpg9sB9kBy5K7L9BkBh7GdRjfvE5jaCaN17Uvg1P1Y2QLYV8TVPa75THfXpyArWErPtQRTW9xQk",
  "key26": "5ufw5YNAu6nBDjqDFMrWmKAxdwwd6NBo1ub16A9WgiE2AFCR3qVR6AqYDEiQqNZp7fbatVPXLn3pNi2HgXUY7V4r",
  "key27": "514McHsZq3CfPHFEjsxLxGoSphdxj7ADKARS7U8URUxfCb1QDWPEZ6LELn2KtzhiVVVsuB4rWyoEMPQUhttK7EBC"
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
