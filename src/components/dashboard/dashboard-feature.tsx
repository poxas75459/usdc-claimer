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
    "2oAAMEfsGEAnpGUsrDGroN95RLAMzG9Qj6YA9ci254jZSepDuDmctUeEqJxstB3tASv32mKM7Sr2MzAG6pn1NJK8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "28RQACBAM7urmabsZqaZaW94SsZ4pJeiQ41xYhSwqGBvuDVxLdRVout3kfaMfpXm6Ev5GJjZAQ2ZRgfuFNwXW4yd",
  "key1": "4oxp3TGU94MA1g7A2JZtoSfW5xKwjsunnTnEgUcJZN3MoW9NgjNHt3D3caaogvWDaDVWFyT3eU7P1RbVp5AHZ3RN",
  "key2": "TqrmdyJLGwqMCmD1Dw1ocJHsNE9vgHuhyTqEhstJ15tJkX78RYMrvA9JkZQfzWcxdWXeMPSYUu42znGCeVgNLsa",
  "key3": "3SjGJQU2GS8SUqLajvxUs5oxDTc4XRL613xQ9GsG9zBxz2R9RgtJCTYsRULEGQqvBg5NPcLD58QWhEqntVHZsUNq",
  "key4": "63hyJM2fjTCNZzhs7WzdzyQE3YTwRyJ95GZmct2YRVB4x9KszPyvPLEnW7N4XTCXwAA9AWwAXFAjwSZbNkGbmwXi",
  "key5": "39oCbqxcXC7v8xvEx43iWo6e4ahyhvmGgBxV8QXqy2Y4vy897tFSe228RULSKyiScPNgNcpKDXqqYfks3pu9ou8E",
  "key6": "2dE9YyTk1AXPoxExNyaCutD2uJWLuVVJ1PvPSusnnbBnvtu8LgJdbgTx6V96o9K3F1i2jMciysdiMAqErKQB9KwK",
  "key7": "gC3G6afZ3Qnf8rrbM8UJoYPTSCrdvHikjGeinmoTdagspmxejiKux8KLhtp8JqmM2PuHM6Z9aTBEsnou3GHsVC1",
  "key8": "5ePi2EtgX4SkifyLMxpiMSfgUdX4TSLDFbnq6c6MGB9mkz399PWduyxD2wMYvstiaymuPYFD7hQRpPweEMPfsP4b",
  "key9": "5kk3FL43M5BAcuFacrz29n9ouWyxd9dM2EfFvLX85KnH8SPR5r1nRascrJT6Nrbq1Pyyq1piU6dhF3nwy5ZqNnaM",
  "key10": "4Mm7hRzkpGYE9fJ2XiiimPK5xBd3mixB1RBhqV93xUUpAeWGWD1xFe9GjrLt5JLXaLgr2hw9pHsZv2BhDqB44iqU",
  "key11": "PxVLeUQsk46gyf8NpYt4yPBg8joAgDtgz4NYDEhCyog5XBdgq5uvcyKcDvymcGqJVcQUgGGAtvJmP5Y5ochqzhu",
  "key12": "4B4ALsXbc1k5hRusQpuCfehBD4ZTaDdT5xy8Y1xot8yYxVjKtAahG14NtStQPpaTVz2KvYqXDDxwKpEHMJTz1e6K",
  "key13": "2QwAcas1PkScrBUTEfZwrV1qfY3Mc5fJqZJLM9K1JdaCVsfzc1rbMmvgBznDGoXM5Fs6P6nT4nTWz18iypedMZ2u",
  "key14": "39qURp3k5KVskAQKhKaR6AvVmTMtkx9yXyvM66mshB8ACgG6eFn6caLyq6NoS3AHiLcnLnWJw2agGcF9SdKftuPg",
  "key15": "3Eayv6ieRTAf3yYAmZxGGMYrbD6TzEX73uuKPfAZfiR735vxch3aNg6jyf9TwT69ZZ5AvTiSw5VvcjdfBYAqvjE8",
  "key16": "2yCxpcviKM5zFvGtFLzuXBqXzDnTgU1F76CzjzopQs63mFAkh94GzTgxy85TNGyT6mztnQtPdwa7zJTS3fV9FYLm",
  "key17": "ogVUS5U4CwVRmCF84SyoV6ok7jg89E54neuZqu4xgS5Sgg3cGRDdjyQkyvAsJGNuG1y9qW3LuxnMKCXa2ki8GSM",
  "key18": "35LW35HUabbU4NSgmxUT2v6q6ok6wbX7n1CBd7vWfv5uKrp3dQ4PN6i6eH4sNLzbZTpGnHgkfDYjkynSFZLMpUsZ",
  "key19": "FTecNeN7fft79YLfsnYwZwmMmZE9knC7PMYbwx61zXPb13aWXvNsKMyngTDBzSz4GwseGcM6dBn25qruFRq18wV",
  "key20": "3JDA2zTpJRq2hTPT1EJnciHgX4nZt8C99wLWNy46zzoEstHuo8W5kxw1HfAuvA61JdNwdCesHMhABRD3yH7BeHbK",
  "key21": "3LkNqrYZkK4oedsSUrBiaEJ7MtxeUD2rVtbMCW5FZCe7cM2FWNvY9fAdSXTsfWUgapvKaHzdnZ3dhUkHn8MX56S3",
  "key22": "3dGZceBqnKkGKqgDNNjTU7XuwVFttP1WFfexjtdwZTnxxiMYRiXevkbTzucinLjHYpws8oEshHuidefz5qVTUbYN",
  "key23": "5xgH2bRBCHw6rUJQY4iFAPfXP6yEqNZphpaKBjtw4ohP7pJBp5wNf2j3NjAoHCY3cUWm5jfCG4gPbgpp7gquL12q",
  "key24": "qC4qy4Bbq875nfBtxBf5tDscLHJMwC1Gfp6SBfDLVssVhzHFBbXirf3ymVYUCorSDGGrfijukWdNn755GnKGhnZ",
  "key25": "TiUS6PEvMMRZCtiZjoRALNSCLQ8rhXD2JNfVQaCFepnCS2UPJAqb9BzY9TginFN3CN7kdj9NtfQ3UhKBnNq8yJW",
  "key26": "DZzu3mymREkTfdufSS5dnXwLZxu5mD7mx4zwv5pJUCnF7N925QEHMW5P4Ca8Tt3LXxGDYBNygJ5HtEd3nvNBbPX",
  "key27": "49GQpq31gvVpdULLFxPAmzehCrDp6fGWmM6dY4GTxC34KaG9JkCTwgL8SBniC8gH3dLJ1RKk5zpa6qgwnLSqHXMT",
  "key28": "3X5tMG7qz4sGqfudtaF6Ky1sJ3UaFfscwAnyxwxqADeMEvmn1GraS53PbVFAi9p9dMRZB6ebxNdAaPgr7NoGnC2t"
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
