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
    "5Lf3xiyojCz7b6HRUPYXMfCkaU924SqhJMfbUgs6A8xg5zC34BWLmGTkis1xYWmX8PCSyWNs7FirdYfb6a9HTa6V"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3TcFrgDuuPWBoRP9V6TJViFDmB4rySXzDLmt2yqKA4kgpu5VtXihbQbvtoqPf8Dm15w38UjQJZopxjxvC52BbhAx",
  "key1": "S8QixpLL2FUs3G7hLhWLoSYXhS6RpAkCWPdx5rZDg9aCfb369dCAogNzJVwqekY19PD3Neh5Wi663oxxDmio3YZ",
  "key2": "36QhM7E1xMKDwW9bQJzoQtgztGRWpCaGqA8PBMsXFNAcSehogevKWN8TuuFbmxGtdj5FEP68NiKVymALNHHv5iZR",
  "key3": "3bFTATcgVE71SJLwNqREVSfigeRa7th5B8TownoDf9cspH1ASnpS4rwDNAinBBiekLBkZwkBJ77GKhYp2XcAg1Fc",
  "key4": "4YUiw5RveKcEMu23nEhK9dBvUeMtCMiFvANL7PveF9A7bWBzZ3fCuhjmjnpbjsRFPS437fo6KU7ZT91wZ1VtcUfg",
  "key5": "58GAM77d1C3yznmS8S8UBkeWWoB883owA4zZdCxCTKAoGUSr2rPbggkJamPBsNKidcZ7gyfeakGEH9AcrcpkF6at",
  "key6": "B32di4RbcCcKa6eob8Y5SKQu7vnxy2nDNHws6wRpzpsgmzPzPCbrSXMuusdGzSy4PPy6NDz84XrN8SoiZNNroCy",
  "key7": "393uvDTG93nXzHxmVYQBzgossBWQrJ9AZqt8MqbFBqYdPuUbTQHMBqbXhgGeo4qoc4QmJQR7P7R6z2KSFDAMQjh",
  "key8": "2CR6bsAiy67EwMGxKyLo12iWpRAsurrQFQWqC7wrbn99a4fDDFXeWNHr322YBqiUQ961KNgAXJeXhjmh4DmgBqKD",
  "key9": "3j2AZLKE8T8SYgfZq1yCcz5K3cRUAuRMZTFzsDtBMKFArCgopPNMfGJxUbKsVHGvRa47Ez88rY1puZZVcMgGStLe",
  "key10": "yNFsNkdqoCDQQRdRduRACkgQv71n2t3hmhQxDKWXN6tFq5446iGVghzjbKSSyWsJo39moWkxNdnw9xmuLfPR2xn",
  "key11": "5jwmqmCqRMUwP5N8assm1bctbGsTJ2fbCmRPBj67pZbYB3fybi6A6sA1LiixBYL96HrwV5SBrCdNacAw3DdRn66t",
  "key12": "5CdAZjU6LfsEajLjV3BSjb8jcfEEyhKZAaVngCpk1SPihdnWCwDbiCQXWGQsiuydiXwAJtZ7w21WhFfq8DfmUWAM",
  "key13": "3Xoz3cXtuiC7S39Y5cPNfTA6ZDJ7N6EspfuYY9QTxRzVYvrSw2bkh7yjP5mn2b2GsbDt97WNT8XvegAk91pqVEXQ",
  "key14": "3MzMkSMwu55FuWeKEi11162YiH24PwMNfhXZv8vNS63J9d7hAMkXSNxer3z7n7rwpFs3coGwuroqrwoYcLxuBm3c",
  "key15": "5yFhyBo9x8hyMEjCKqvB4tf69E36ryPdpcTPS6jq9tpt3mSK2gokzzN3LBt3uYP6vjmsVK45ZN2ZeHjvcmHtX8h1",
  "key16": "g3BSXrUq8LPSSVxAHXTgNbx13Dn2wEYZVCgGHfAkukcySrGXvueu4KphBscJzPE1iPprqVDnfJJYrKcTf7XbPJb",
  "key17": "oaxiu9JQB9unAFELbG9rrWYeyCcA2VoC3Ba99sRoZ4BrSxHZy5Y8pfe9jTsmYiuyydDpXz1ax4Xygyo6WB6Df4Z",
  "key18": "2Ue5VirttX9QDVE7NbDaz6tsBXbGE5eqhsiHKtvQk3DNNRk3VjCa5ztCZiMNfNna39ECfAciRutvrrvK9R4wpc6L",
  "key19": "5smJzY1LSsw5t6FCtcgmn66XSLqpyZ4GNejdcdZ9DaVQZFkRtV122hidMxxFBwPbe8oi1bhebSraWKeoQpQdUWNw",
  "key20": "3LfjJp53UMFT6hZfWTLwnLcVmUfE3gjP1UC8aESHPBKRzrrM6Vv9jBtDQAoqTdj4VaAoeruhar4CJWTjvUmPFXmm",
  "key21": "32GeuqWiBe3skzKCUPSx466ZVeCkJKnsNmzd7nhNodiMZu5tiCAxDUxRPbXFHouVxxrU9b5CDE7Y3SVXioUWASym",
  "key22": "2BXU52pozuS4jGgHpP4uhvF3h9BxQAQErY4opA3E5ABq8dhqNnvepkuksmrc8WCcPgkTqCpi82ZQyqtNLF9mSGGZ",
  "key23": "52ZK6FoPwsrsXry73GVb6pHJyGRrnX47p4pmpdN1ij75yqtyTTApqzb6p5QZzqu72icPFrsL49xgPYgz265A1QJa",
  "key24": "2BqScqn2Soqw3gQy1SZQSzEng5k22Y9tUasECDb8sn3XmWVo68hnQttZ41uyvd3HesErMmMriFyzGuZaFi5wpWQq",
  "key25": "XvvzUpToSt3d5gaotGMLbDAEorYQHnh71Bjxj8wM5UTdPMFhFmVcDV1WxsoNDGBEohv882Ly5RZ18fJ6B2EMChf",
  "key26": "WCdak39cLuAjf5wqJ9zES1JgG2ijjyoi3KtvaJjR8JZA6kJLYjQFwizVk1WQsCuMVZ2CcrUC6HddgzedTqK5BLZ",
  "key27": "3C8kvUZWy5N3UR8jvfRRTLBPKoZjp6QcgVxmTJwrAHE6KRVgdX1V4BkVftZ64h6Wo5nb8J6Aw2k8e6c4Xzfi2fUA",
  "key28": "4wruLfeYrPFwcRzTiyL3TEt5oKojZNhYVgC7ft3u2pfyT7vNab8myqHTFGkk3zaNoTVGkNXs8izs7urFZ3PJwFiX",
  "key29": "5wVn4mVVCXP28x6vZkEXMd9aqmVpzwzTcoAX5NY6awKRTD7btb1aHQCcrgbEtXGY1JkWKfpGknty1nkUctzw3AAL",
  "key30": "4iJVGokcqzUr1NAwT4yVbLi1Z2mpS53n7MyiWAN246zm4SeMq71GihvC5poMEL5LjkevF4NJPuzxFgtHAobFD7mG"
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
