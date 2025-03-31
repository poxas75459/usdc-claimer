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
    "2dyjeBkXfwugpg64Xpxzbh9u6VFwhYa3i1asjQC1USzfZJSovVRnkRNyzbPfmjwYxeya8wzYtgLDMWrypQny7rNv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "665k8miS7KnLUcMt4C61wFGkStrcMLcQiWsV9afH6rjU7qSKmrgw86V1cFh8WS6nKFwi2B8JDaigzktYHVm5X93h",
  "key1": "3PNtnTjjsDSHkX4d9WZaYGtdNurjv7yzsitQwGH6zi24zdvPnYqB9WBcMJCrnruyrZ2Dmh4UMQnuLzQGkANSd8q8",
  "key2": "5rM71iZDrnNi9NqGApQfZ9KMWKHPhpC7Ffcoa5Mn2FYnjSE7Hp1p72WEbu6r9PwQKss5TRqt7nAbJpps6VCZwxC1",
  "key3": "5xV5dw1pmna2mGTtSkhvsu1G3GtK8TB3dK1FH56Q6rpikacDcLGz2czSN23VYt4ew5YP7essszGsDRayuEYdD679",
  "key4": "3HoXaHngRcBkMSBkUW5njJS87UDnzUfdwhonAYH546qFnTXk6wF1fG9HoPTrg4DDL5t9Ah24v2Vb5VLWNBeaZX1d",
  "key5": "4mSUP1YipS1T8mGCEYTBuQShHrjmSUeyDpsRRT1gZX736EpFy5sb9qBtHWKjLQkfRL8xU1SzNr8DrHRWaqe1Zb2F",
  "key6": "23z7fE5GRwEFypPX1pM6xjrctWsTYfVdoeD6voR6wTmHnDfLRbS2g6uLWyiKMTuQ2Jngypc7bL538NEirQgUzhWr",
  "key7": "48WQWjS1H8eruEPQBBms9CD2oFruy1aQVRGGunsNVqpS1aGqLHJS6NU7A43t19eCu5KGB5JhACjmEYW6emvJgpnb",
  "key8": "8uiwJodR2kGbk3nUSaXXcGWd6PGucSCeCXvvenRnwyJ4iTCgFeZLf1NhCZ62abMdX6tRd5tY4QtHi9R74r5kH56",
  "key9": "4f345aGwwrvGzgNPLX4gBVK1P6kBo2SQN4uHssNxnpsypoKwFZ4QQjdMzsZZ8WjM5feZgszW3wYyWkfbD6SS3Tie",
  "key10": "2vtqF7j4XEU6K5eXGeGnxQ464p8C4pk6XF3SF3we3K2PBbjNc6KgK3hY5UMACgioLJ6AyeamX6RwovtptMFqfqy7",
  "key11": "3ppcsydy6SSCcbKU9xZx7X7mssGVaFjT5BLiZYLBEt4xCcGtMqFCyfZGkoEmGxeJ41a5bpG6jKBjt4eM2NsLc7Vz",
  "key12": "4oK99ZRHzniR7R1jKCRpar1EUzZhXxHH4ous8c6zVBvF8UGvvECrw5uQBEB6W37Q5A4rLPig3h51Y8vbh2Tvjqa",
  "key13": "5fJZicmpShpLfq5SdRxKx6mm6fbQSdhw48JXSrDUoPAzGtT8mH1dwBncFErFeTNLRvccbDGBz7Er2MviCaWSAtc4",
  "key14": "3WVbgnEavZLCEVuT46EWUyiRmGQzq1jkwYv3kHv6jkD4fBVgSBDtm7cfenWYAA4U28q2xe1nPtwwS9maPjSd5PjU",
  "key15": "42rDPjh6iHsP3eW8ZoBPqxoz9c9x8G25ofs7YXBW53ChP5qNGjjcSHr3TpKXKHA18Zk7szBMy4PFDngEr21mQ4TX",
  "key16": "VN3bowhn9sNz3E9RjLDNEHbqw7kPdymD8vpKatkF9depiiorbukUfGUab3kV6svrTVUfyp3wQYarAnkZTx38khG",
  "key17": "wxn2x8Rpp9GNAUaEdcLCt4ww6rR2c2Zovon8TrFATzjC9FvGZwHywT29irV4SFJh6i41RwEpsM24ptDXAqBq4xi",
  "key18": "3KqnhXnVpSnZCG8Q8AKC9ktU7vFBEDXX7X6X4eBNGn2P34s6yN2ugZpzywh6bFCzX9RNwtaAYU36LPL5ECXarRvG",
  "key19": "u9ssLccs3B1rqhtCC4joX5LBRa8xQWxe5LkDgF3Tqqr57s9tyuuo9i25vqt2TxryvfZLSYMtEeNJnp3Cc41ErMk",
  "key20": "4oGDA17TzTLGegjKkj9bA9kZMpyWF9QyUHL6KrhxX4XgfPMZ1ScB25nHo6pdWX3ENYwWUZU9o4F3yuH15LmCYPKA",
  "key21": "uSq3tsrxr4KU2Co6cdbsmk2WQHJvGU2AbpCEArjygF4PcXJKR7Z3fATr45HHYQPhAsnPboUv3iFYUfYybMxgd5P",
  "key22": "2TkGB3yJHZZ1WSmicJiSWd8yWx1nY2uZh19Qr6poCCZcX61hKmdz9WsHo8SCNFCDBszhuoRXWwFjfJ66M3iY5vqK",
  "key23": "4KafRwGx7pf19KfH8GtbVxAjntKyj8VVcPDuKtc1BWKGRSbC94jcKFECLLp3xbcxCjphREYKEFeN2wJZaCLSTUxk",
  "key24": "2n5sqsfyBLjwoKzRpUNZUZ2Hy7QARUF8gjZjB6yj2Y5Vd9HH4VVBYxtWAJjy3zH3dewDvZ48tRBkLtBDwzpuupbb",
  "key25": "5aay6rPJqJU83RwXjvbLuMHsZudYiev4wA4Cr5KDx29qTqrEmC9btSqZB8g5FBE3dofSMt9HroMb92Zatasx9e9E",
  "key26": "4Jx28z42EfPnvSV8xkBD2SAoM3AVfLm3zSjnnQtzUz96DFBmf7s8LAHhKRB8EvF7nXGj6R3kjWnU9rLcdH2FKmrK",
  "key27": "35GzcErYFhzESbX3vkQkc1ttYD5KG3wezGQzyU7HUDXfVm8RwAGqzfxVgVwgncE7BmvMtVThkToSPaZWZrd3TduX",
  "key28": "2ona8do1NFSocSw5RidPKuRga681ipP3U7c4VGuMz2HSdHH4YHPJQuKbJAQ3oJoDQePh1U2QbnHYMhJme6AmrTzK",
  "key29": "2Ma2Aejecd59KhzCbCsiumpCfSEnJH6p3DQ4EpstYSG7v9T5Hzoqjsm2DdTmb5ZA7PSJM84GYBz83gkbdtKBsXMF",
  "key30": "3yytoQAXw9VDAne2B3JdeKHvFHnFsfJUeukzSw6PnMRGwYFmYGaPX4w6FjFSY6stoKfpbSo8ELHvWE1BR3nU3Kkk",
  "key31": "4JEPyzawTSPL3pZ3CThh257AvJXJwziUxLzKHG6CJMK9VwKLB17qVT1rFPhW54g9tboFpZiZCMNueJk21K4oLRuz",
  "key32": "xKUVV1HGP5sgJJq9hqEEYVyURGSfn3mLpXuMxh3kjSHkGWU9Rd9E8aBg3NfzKoxjEt453EmvJvWMhRYs44STshD",
  "key33": "4DS6C8k54en6BiWziEDbv2pV4VGp24sAxZa7UvrLFdGuXK4V83j92z1rJnFyQXdKxaA95Bphbfpba9EsVSctc5ir",
  "key34": "4H1Dhk2gPBKRVSJPqibCymzUeaLAsidjSq63uLL9uxRNpkZjiZANjRp2wbWpKeT2CJDzjwM6jx82jajE2Mku1Uju"
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
