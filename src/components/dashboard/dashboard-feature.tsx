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
    "55zGdKWk9XrskNAbnCK9SL9ahUT47jhygvdk8K97ep9AQRZmvh6g3i4JyJWTSoAeFRVjnxYScrzZcYHLhzBmbpXC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2i34szg8TUUsCJnRn5VMgqCdNk1VuBfMHGRwWbwpifGKbuKQX9NBMqL6ZbKSmSmeHwQSZXoogfhefafkyn6fEBaU",
  "key1": "fxjyjeNX8D6WXfMP6VSbhVgrP6jh1fBRmxQHH5ZLYa3D7GQJdcoU439eyj1Lpk6sbabo42tEieGfEpzmU8XujCS",
  "key2": "2i6tDMsaMgP3UaMiaJMHYG6Xoo8saxUytX9ASzPtBtYsLz7WnPQuEyDTaKXTUr95bAqzzYuADUvqCxCmdWSmneGz",
  "key3": "QMXis5opAUVPbvMe6yxVV6B3FJffGv4GCrTPpuZ1THW4iNLtCiTn5hyxRs8wdMXuBZGx58ytQWCgvhQcvLk4saV",
  "key4": "4UHsHqjWT2Lf2MHG7A7Hh5NuDBRDj7QbAoqtP37nBmETvaBPgBbmckscKGCxGGKCDpMRQjF6Yi3fxeX5YmiuDG1d",
  "key5": "8hxmc7HV5suyUdYEdEk9cMwcbWLwXxzR4mqgUrUwbGDWCgD4hwrg86mK6dj4nTXeV3NMHj2zfGJivvnJaAdkiaD",
  "key6": "2FXoYRKB6MtyK8e6fLEUBcckf4NhbAhU5ozU9NGfQhva8csyYJGKHoccL8tqkFoTGmkTsTC5AzJtm9Pwt6rviiG4",
  "key7": "4HEXBsMiZQXvNTaASgoP4XhwNHo6yBEvRYxJA9s5uVuCoLaTnS4Nm4CMxhYjZDLPT6FHnmVPnVWtuqkububjFMty",
  "key8": "3y5jahqgyY468LYwuwgzzN8Rfa2cp6PzRHG5JtVXMmpVaNmzvLUj9g7ccbhP9uvh1ukmwwfZSAQYLYPt5SQSBAVM",
  "key9": "2EDvZDpKP1K1HcpyVg7j9BZYFG2rtUzgVTsd3KrT9Eaov7xmQBghFjNPjJhhqZE2B4WjNJyyqqHgAzaKoKRA7S13",
  "key10": "AsuRTyB6b46Dx17VVSdkYV9hBSH2uZajLaNqUHHMcdjj1UxnJiRPxuoeySBPWuMgJJSt25uEhaJEPPjxtWSq23f",
  "key11": "3sBHyx1KahfVu9UpG7S8SYBKKjihtXeJ8TpAvFjDjuer8widuWhYsraKeYQNbMct4yT5pYCRCm8xoJ89MaHtq4UZ",
  "key12": "3q3jf7HyXZm2M85evRQ1xVjsTj51cYqC7MvTgrT2t2FJWUE7Uf3iiNN6gsQXmw6GonnfXEyrCVDHfMJ9MxVd4a6M",
  "key13": "29UaRB6fL9Jh9rmyVtpVmcEFZk97KA3jTr3Gd86eJ7F4v6MyinkcAYoodUFHYqLgUbGQ3vc2ZLnppmcq6DLiCnHY",
  "key14": "39QxgJTVVzCJTeRQt5M137t3dJwoN2ecadPt79P1NMyVpG4MMRG7wonvfgHdHNcbUmu8WHTf3kfTw81LxW9ywCHL",
  "key15": "2TkhLKPXdJaHwBeFYHh3L1HPUZSsbWQPyJ4t2EZDykMqknwEzb996MotnAjqH5iP7WDVEGyhSXsHpd8jHEnreEZC",
  "key16": "53N1NussW4PNL4j9aESrqB1LAvFHmkS4PkNPSVqweRj8qWZUVdrYWFNVmct3WtSWNERi4kmGVEgLKYX1Z7ve9fmN",
  "key17": "5bBt6SkQJ338C19evaixDm7RbaexSfXWyzKLMMLaa7rLAs99N7qaXh4DFBdXcGtvCFbGrz7KoeQSyghJXH3JG6ay",
  "key18": "3XWcmgTn4PG8rnXXrnKHG8yE79Jd8QnUFRqAxyMyrzGvSSuBU89B3TDuJmboCKxiCiSTY1ykU91hgt4kzTuECqnb",
  "key19": "3DhqWSoAoN5rEKs5iMqmsLkiy3uJiiY4w4ZGz5iZUmBmq1DDAZPuJ4XcVDWSm9zbWxAu5Ad9cGHyQXSQzepcPMuW",
  "key20": "41UKan37V1LxfXRM4wGhsovMhqVNSAu6pa2PvAGKWNLzR6pKLTiU9t22N4UYDW9EjaXJPbTrRTSxcbtz4ynh3ro5",
  "key21": "4pNQmWNuRMCCMHNK3i7zaD5zAvWvZ6VENCgcvwKvRvsaxXmyfXn8zNRVTFfxTMEAKT89QeUiNEjW1B6eGGB1yq7q",
  "key22": "HdQqoc4Wy6UniH2vqifjpk1ZT85uDnctekVQdr2ZfE6ZrpURHr77pYcL7taohusYgVSmjsyNqWjAeUVVVaXJt9x",
  "key23": "9NQY1NPjQPedGy3ZfPhRDp9ErDc6Ph2nWrmw9e8eDJ1fXr5uaZHaY8mdJ6XsXvar5bZ7GXUk5jNv8HA4urcYUdu",
  "key24": "2a2Lwx7rYa5yB3EVwgxCJb7jktQd8SzbqSJwMERusGjEj9QCCKDRVCpWPiaJ6nsQWAAiVPXxNYRjP4wdGF537Fwi",
  "key25": "5vWwKR9NdtHp1NktvmppuMUimPnkvYu7VMuSEiUzfW7xU6X85p2jXPKYELQhH9UjxQS6h3o8sKJSNGjm1xRFkZST",
  "key26": "HZu9AZUX8GQyWnUvZcY78CKUUMzdVdPBoo8UpkYsZMGyixLXLQ4jJL5JY4CpBHraZoa6aWDRxGJR4UVf4QiX2Gi",
  "key27": "ZrhVFnPbLocJjUA4jxZTY8wgMyTso3FasBW8uso2P7fnKpK9o2GDyAA6jseyZwz2n7WpKLnthYW5wuAsV8JubxE",
  "key28": "5T5PgcQDNt7sDbyF7LdNekzncwaMbX6kNHpPAeNBzmN1VZFTBExf75SgoCtQEonwe3mgKLVy5Xm4v8nmv6pbNkG9",
  "key29": "2toULranrt7gt8NcRZ18LUDzKzSycjWX82iTvfr4xggWpW9x516WhqxT7WdSEVLRTDrVf5W5J6vWU5u7jaRhUu7m",
  "key30": "5PE6fWMXVuWPmQcuNAeVbfRGfEiLm7vBbxBo2NyDkvFDm7nwHE8BVcif4MjgpPfJuAUJitkgoTWpfjRk16eXyjpd",
  "key31": "2ruEvwgEAgzZMu9CQn5mtXkRaS6sfJzDvHLq8hy5W5o9g4BLVMyUR2ZaHoa8mLst7fD14vJSyTLA2GsXPNEU9QFn",
  "key32": "32hx9WGKmCKbt9WFJsqBciWsXX9cHXmgfgo1sQgFgKk7nRvR1Eq525qibMjrtZ7KQ2C2zFXc89rSuWkGtUpbV89X",
  "key33": "9c38cqX9hjJSr3Gfv1aHZYACFRN95c2GCCJ5H62u5AbLBCdammC4RKZgVyPjHpXdX3QNxrNd1Wkg3Rpaa7GMRwT",
  "key34": "3pgqF7zbwTj7mjyHoBXRoSKomk86kicWecwopQArdcmKESkqndV9M8PpUGGJcuERd43qRHfKP9bopPuSD9vMTf84",
  "key35": "2h9WL6VqxxYCTnMCobXzVFWp2YkqvsmvzVBQK1wcyQZaUCT5ZAFLGm1pq95cGBBM6FZPWNERiAeRQd11CBMo3ce5",
  "key36": "48mDdTuguGS7LeBrC9WECfKhxuqtTKSRQKVviK32pMwpodsZkaQUq5J7ydX4UYhKSmXyJLkFUncujfMC2WKT8UF6",
  "key37": "81eotd8JEwE5d4KTHVVzbHVTs1CnDUyGWukXEg8GP4Uj41NAHCj8KES8d8qn2Ec3tcXTQ9SZekV7qfZbJPrfj7K",
  "key38": "4xjaFwToVb2n1r6it3NYrivmqMz8ebq3Td2quQryefnEfz4TfCswCoYzb5UB129CMb5x9y8bi5ctvQHAhtTPDVFf",
  "key39": "5j3sxikFDi2GdAeZ24iTNUBHQT6JiN6g8SN8Lod4gaspTXduk6RsS9inMb3Cfx6y4jfgRcNqZVgsnfSzC67VZ8FV",
  "key40": "5jnckh3Neun3U3DEKrRKADgA5Nww27bSjoojK6nMBYLDzZmuJ4NhvniSncj6w5WuFzapHkcbNy8pAUWqvqa6AT7r",
  "key41": "5E4FQbvt8EGQShfEJTCvEgwems2HQ2d32Cf3CqhhnhAgqhStweTFhBjb6oksjaodq86Nc6j7iH5aNUeukwXdWMyx"
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
