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
    "5SSwBLyx6jzubQ2yAzHhdynZgmyTu6a81jobZNaXxmn1CoYrVibEyxP8dErg6kKaXxHnQFsUs1NVzmh5eGFXcg9N"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3mvY9smKob7iqDVvaeYnsV62AB6R99aDyFDPe8C217ZNio2Q99zVGWfiUhVntnZANKfqWQhb4hFD9gCYHEGmeRB7",
  "key1": "2iJ9VTJrJecFg7axYknuDFxzDmyqBL6TV9BmkGwGSbUBLgoDZYTtJthJATydi6W6APDoUMqLvHdxKj9rpdGYMAhu",
  "key2": "LJMf4sbh1rgtEER4zv66npbt8L7dUCaJDmfyjs4Rht26CzUf9Yxs7cFJ74G3Yw3RnmDkFdyEpFfvH7xqYHE3PAe",
  "key3": "Fo1owRBNMSULuaZYmzhdGxKhxjsQkj8JqyKs3aqCNrbbJopTtYRfTCn61tirR8KuG1h7asSKmX5RU59cxgja9UQ",
  "key4": "3TJY7haeBN3YbG39ifX2XDZLTCgP6t59m1uUs1KTXvsKmXcijBcnQYLL1xJCPH4rd1dstY9yTqoCHkTm4K3LUMdp",
  "key5": "4gxDLCHodBpdn7bFiWzNBGprKUbaEM1CYpJViF1e29vxDKGJ1YVyWBvwktnAckG2tBsYvjzzdWihURiTcpHmwGvm",
  "key6": "Tvz6BGVyGWitG1j5jbMRXtSCTZJWW5v1R8ka6uhBorMLHvRN2ALDFZaB6sne8ur69jKZ5P1f35UNPSvAAhhPUKA",
  "key7": "4Z8uFwsJMoo9vpR2fuoJ7UqQ98Dv7FZVuaqrjrR3Djowm7J5FhJhBSdmXWFNFdsXLe932nZXdneKEE7BCuSeVesE",
  "key8": "4CxFtQRtNkcARwUkspuFwHL55ZXK53w7sa1FyWoUxtNvCZfJgTC71kivEHsfjipg9SG5SMhbiJzQ5xJnZALmn5Ts",
  "key9": "2TY5uG3g6rNSpqsWRh3TcgfeYBEjdnxzVW44XE4FctjxVK9LCSR1r5kDtHcPpuK7TSYfNmejpPDzr3cuHrtnCPwB",
  "key10": "4FmF2zsrc1D9tB3CQvPuNBv8FjYkv9XCo81HbPFg1i7TVGCozCFs915VJutEcTLVDGVKC4VTr6UFHYo124gyTv6r",
  "key11": "3krqqPdu6LkwA2CYoRTB5mY23YJeJRJfPj6tcqDYXFgcuJKPUEkB1KRL7CJpTuN1e5WLK7J4cEXc6XQcDuM6qEDt",
  "key12": "5tZVpmMUiVk7V8YgsZZbqmopneKCwqG7w5GesbBjHJhj2dovog4itCWrPC1aXGCNmchXKEf5dAwPS5wvt2jrMK3T",
  "key13": "5cYLCvQryHjUV4xwi3BBhjvAtJW3Xmez2db8yj7NzgaNHrmhs7pmeKczVfXVXxocdhCoxqgtswowEHA24FoX1esK",
  "key14": "5swQrcNqti4jLNfPsfGcQ7CXo16drCjwcsnR4JnSjCW41gHVUJUtYzmKBn3n5JWNrGA8y3tChQLmqFGkpaDVp8Dd",
  "key15": "5fz94P4CqQaD18NwPhWYr1yP8nKbAkqpMKxWt4wtoprKt2Lj97frEguUSXNk686WRQGCZTNSK83NRLWKnrjHXf1B",
  "key16": "3PjeVrSMYX41HG5AWw6vYzvKRx6uvkisvmfFbKu7pFm8gYp8cgG3St8f6ScpDPrRVAZE58wrcpTpvun8AzbL9A37",
  "key17": "2dv5UV28eFE5FM9vg7tDttnAVx9G4Zitkk5uYbJd1kqmgQPS2oatqrgFSzoC6iCavSCVwSkvPA4fYu8zmkVjFU5",
  "key18": "4RuZ43HQWdGnjXqhXcJWxE39CCBtANUzj36j89qqkj4YNSfGJjB87ftUComjZACvYxbjLMTJQYZrXq9Jv8MjZaXF",
  "key19": "3MeicMftp4qgcNMLjKi3xGjySZqcyjQ8bkPdTb1cXp4PRyvUvnRSg9C2y6aJwEtXhe95Jh2i96vmcF6D45yHzDXD",
  "key20": "66eqjMPiBYMXWsAu11qEnaCGFRFht9sCk1LjgW2WaL7WYUrHhfwPKtbVpyjfTSUmw7AXS3jEWPSPosYeTwxD3H5X",
  "key21": "5kEzgEuxU9yAs9US2kc2cuqKjcYkAXnQa2zPvGwrCDVCPAJpRJixFXAo3PsceYrcTaDL8yZ4LhT6g2C1bEiXRGyp",
  "key22": "2c83q3jwvKaWNn83g27Rwdw7L1RBfsiyWjUmLm1QJN2MLEyHEJdtnQifHNtJouxxEotzrQyWWtLReDtNqPZ9THtE",
  "key23": "45XA7ZNM5zzKbqZrzAntP81B4ShSvfH4FGTV8pVgEsCNx2WZB3zzfxAiXZusnEGmxYyc3hmWD64ezgafNjNKExf7",
  "key24": "4fXLWMrWXCWkb6mCPKQKvjzymZ7WHUhSjx9QoLJuxjacjraHDi9UrhxSuShJZu3UMcwAt3KLPTZQXoJEZYMk6dC5",
  "key25": "37gATYVkn1xuTdVfaMGAYPwEJKe86monFS6av7wbViK4cd7CMHaAo7QG7xDdqX97iXpVkTrSfJHfNgYKLvqHFWk3",
  "key26": "3ekYvnG5nogPCGWWCYpkCriQLQCStv1g2gVRBoDXouhgYU28rKSMvatVfesvkohy4QMP7DdfxbUnuQg193wEjXvD",
  "key27": "4TLFEZu37CzUcK2fqKKWiR1bZZ7wo6XdrAkQQtdGZXqA7RYFdd2pNG2kZSLrA3kkv9PjhmsEp4CmE6HPMBzCruR1",
  "key28": "2WHxNCSHyfZZyoCEwudugPx2k7Gju8h6im6cAqMQ54FVngrSoW5poR96BdjEkKV3QbyMFEu44SV3me838wALE2fe",
  "key29": "347e2PktAtapSpFysXFnNwAezAYzCedfTroNoH1ZmjCZWYie5K9hhsTq9spV9srB1vJ1GFx4nFziNVBz22FK8DtE",
  "key30": "5u1zBQwbamyEeK7FGEvA7igPVmF56eQtYdMrXHiuQUP6EDoUTWWBYsVQzc8weoHS5AfoUYr2TD27FmPaWcdaXNg8",
  "key31": "5wCXcC8J6pz83tamHPAAf38KNw2Cgmv3ZmAvRvBGQ4Xcu4XEFMifDBQ1J1Yyr96PvSB154Ra6qieTbU2MrSQHyVv",
  "key32": "4xKKB6nKFs5mdJbdPSiKhCKcwd2c7WjXByHzRU84C7BkVEV2vWdRnfqnD7mbDdDja2aYNWQSPjsMzCJ6FTTwj6Ft",
  "key33": "2o9vakjcuX5UVvE6cM6BDadxKrUNUVsiKZL1XsM3gmUivEUnpJ8YwRSnhPUL6EbLo1Z8NSzmxMTbXcjmNNNiy4RW",
  "key34": "4PGiq7Dm75jrYyShsWP25VR5m1EwCB5bpxwxKB9PRfhG2u6vEeiW19Pv29aE8ZWPe3qLcQDU3Wb2VcB9xDLJAxet",
  "key35": "3hWyiWKj5eACijjCRJe88EHBaGX9LeaNd4GxJ1wdsqr4n9dyLJ7XkgAaWD3yoVawW8qwdLVy6bANppx7d66hMwmL",
  "key36": "24knfLRvnLP4VtqmP7e6PbUuj2j5pHrYAcR3kS5RhuGJ7nFpZ1f6KrXbQfAk6uUKue87RYW25aeVs8VLDKLZPRdy",
  "key37": "3Xn5epQTEtYg3EyL89r66cmWHWHYj1FSrQYWMryLrgGkWu5YowQgdoasDooQdfHEsCNcmBgy7MCMkRyNejmPmQrY",
  "key38": "2Zh79vFPwbrgha5JS5runwYu4TirHM1Trq2UncuCNCmv1UneEraQ5pJxLoJpZqjtJLzWXSfCX7S7Be3mUwDPFcnF",
  "key39": "PC9jfWnmgEsBY4z5iLPJcDtCLuQwJ4MsZ7HmyEks5jvrLaAx51CRj8suBdmqWGSveTpLBAAhDxcydhSjjvNX24Z",
  "key40": "3nk47w2CepS8BizFfXHrUxx2QzPKMvCB3xvksvXeDwbdjHEJVyeHgjfHs7hrCb3NJCq4fGLZREizuBPgQAFQdNbK",
  "key41": "3PqmhyqZpvcvSrdPytY8P2pRy865TimjBxHf8Y4PZvcwD6wMRV1JQR49u5N1pBqQqPUrF6CS8W8fq3NbxV7LW1L3",
  "key42": "3HT9aMkjHqH2PQSmeiTx1FaTGFHG2JVYzhYkjr9GmvaPfMUYHEHN9YSgjEsGkm7N5QL8xA2bsZRYmYbe9LGwLVhf",
  "key43": "4NBXMePXBX9Y1Dmckegdg1Rh2o14XsUaJ9dSERdTuGCt2jAdE4BnH23AYQvscg8FpmFEEASC4TJ4XWdFcY7kBKdu",
  "key44": "PQXTvK5sC9Sw5yzc9oja9WKG7QSkFh5Thd3xGnYUf1pPRTBULcacKhZidMcFCGeqk8kqvKUpvahGiXL5dEc4GC2",
  "key45": "89MngbWFXZEuTvBeyVJGSTx85TbNqkGjao45CeRZNv6FeF3AThaQeeiDjvktegcsgRkbRnUNLG2wudbXoi9zzic",
  "key46": "4bi1n3A3S9qAyGA5iurBo7Loj8ULfwgPrNSoG6i76xcq8fr1JnN91bP9678Yxi12e536p1XwavhS4m3TsPNT6Tbt",
  "key47": "5epyurQwtJSVNhxSfWVTmNcHJGQntq7MgC9vg25CFuyQBxPNMTbU8iF5SVLEo5jBRLC4d5GU6cBR1XonqnWwYfkR",
  "key48": "4SZu2tbjA7AffA4977GUAv3UcpcXFXU3w5WBywibundbWtjSQ2jQUUwrtxzbZogrkkYJVNUbbYAYa76AEuD6sjw9"
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
