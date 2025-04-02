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
    "41XWHuywQKxpsymAgNndXHdbgmer5cbSvxkBR9tBUXgKKNCsUPxcnpfe9bcxvM8cgLpxY54ve7RtkQ9xZJSzbaZa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ioRnNAUXeQuJHU9Zuct4tR7iFxeesswcjRpqTstpriXFu8evXpgTEueyRtb6FWi2U1hWCedJBE6o9o6N7df8fgT",
  "key1": "5HoLU3hpDU5bPhxRwc5PKUf1vwYfQKKsVG6zR4GLq63PLJZ9PLdfxq6U3xiuPGk4JmD9YvFFmTcEAuoMBLZFwo3i",
  "key2": "23MCXvT4MMro4mVC658JSCUL9BZfbnUK9pKDJSHeiAL1UmqPLc3RrWMmMuo8a65DLJRqmQoYEtNTxtDjrg7Bt7yS",
  "key3": "2FFRxhSNa6s5zknwWWXQZiAHScYMVVWqr43LYi9HWmHRUcm9KMrQjux3AavESiZLJkV2bK3qEygPAyYrAF1epqLg",
  "key4": "5R4Jdn8qRWzzxPXng6iP2HoBmiBu2uhqntHTnuxLJwQvSsW8ubT6GGioJWEqQVmbk5pfQA3XWtM4KxqLzxFKUbu",
  "key5": "24zMb91q5vP3aCksawUzj3oedeLjn3TYRvZrgfQEmTt5YEWcm5e8c1Tca2xNcTXSC4gWCyMLyqrzC2mNjRfad9qm",
  "key6": "38eHubk2k1umGNKePgvoStgWqFJuiN4Ynq5cuHeFJUwabADfDwV81iBS7df9cfQQdLv4yYfz8pC6kt7yxdKL7Cbv",
  "key7": "3MBHmFPxHH7g6xEey8dmr4ZPLJ68z4r2oqmsPUoJNaxg8oizhHE38eYW1Ten4jkpZ2CMqzwZqFVs54UADuAQiXaX",
  "key8": "4ywsiFk3a7xT6ksSfhjM8RHsmjFMLEoJMFqWsef6n8USQdAvGcqgjmPNCGFJcwisDavHi46hkLidF6oW3AZrz5RF",
  "key9": "4fxywBNtfB881FsBk5dBePBzAeiF1xNgpBN8EDMGZow6H2Yr78djUcSyEm5maDYX7fW1QAEEddQV3imKMq9bmcBc",
  "key10": "3FcQxRdtJ1x2xtKrNE2WXwuxpKn7a8gkMHCJnivgLKNY9FbYA5WpsJkzNTF88LvCahSbcQD43UomSm368iE3TMme",
  "key11": "2S6Crekw23sdLzRyNLJgT9CXK56kkczhJUzukK2uUCeZJP2pEUqmrPHEHmESzbjmNttK2V7RDQzfzhLDZ1HjJBg1",
  "key12": "446PTUY1pFZNxDaSm92XZkcFAkgsBpMZVLoEeo4J3Q8WrrusaEnz2Ghw6dhc2mfE1bebx2jwa5ZpA4YKdh41pyaX",
  "key13": "5HgWAVUx9rAKKWU45bd2ZYezf12yqPLtySVn3u7ci8mW2nuBrvEgJme8M17SeY7k9gFcWY967CQsy5EnjrJ6c8VG",
  "key14": "3PyAPLtkMUG2LuCLY6qsSkcjCVwvGFrJ1G48dr6aLycrFW2uzEJ5ydpjonL5ZSHkWTh51nN5DiVrt18GmrBpPArL",
  "key15": "jLfRdKWRrZ7b6QnZPyVXDrRdbUztDEFcpV4h5v9GmANJ2N6WBTcTSeuxeoVLdjct5xpnyNNcmboJnHZPYpdpNiL",
  "key16": "43ReKw4tz3EUfrfLTThHTvfUx527YrT6cUKNmoFMymQ4MGb2R14u3Ur4SDdMjr9cEFZ31EdGuqj1uRwBaRfbys3G",
  "key17": "5413uS7QBxDfn6SN3Ve6CtqrkuLtXoAtU8fPLRNDCYRvc2cC4YaYrYKF8JRH5aWuxhdqAZ9iKXJWLB4j1zfz7zyb",
  "key18": "5gT2FfBYtrU4iEGVDo82CqnbyMjcE7r9SRfJ2tVdjdJY2GGX9sAz4nK9oqHuinYKhNpPqt1HczC6JTDzwTetKAe5",
  "key19": "348sxJoCYYtAnSymtG1KYHXUhoFEG2G6ZYYdLu7ziksknbB35SNVuTqNEKMQxPnDNW3fhYCbALkDC3PRp7fZPUez",
  "key20": "4G364LkyC7Bd6MfD7U1cTxTBTHJwJU8EzSDDrhN6wC5FgmTbTxKbVPSziTjjRv5N2gkQb2YLzebVW2b9gs1qJ2np",
  "key21": "CJrNSR8Pdwp3xxCYyM1mHWCvirdhMBJmkkvL9FYHp8yi1ZME8FVcMtyAiNR45zLESSLkkQ4riKxBuD4K85jeGS3",
  "key22": "Bb3Nx7zfVZzRzebxgenDdcAebvgqar7V7cfebVX665EFUvo8BwRhvUoLpxvgqK35NvyECCJgn9nVGmyRCwXTyQ2",
  "key23": "4St6n5yZfYD8sXeUwYN476R26BYE7VkwRaZvJEzpnDeYvMKLNyoUv9jCE3K3pDfUTJp5B9poyCy6p4xjNLbsmxFE",
  "key24": "YQ8WFhGKkb66TuLDb64P1cXLchMCepDdXCxANNEWfxSXFst2aL9HrsneMxeFpifV8qUm83Bx6igCcGrESmvPaQz",
  "key25": "2whKuv9NBfwwtbm8NcCnARZos72dDuAwbm2wsnnfP8Sp9G5et26HAxwL5MJhVk5uHLopxyFgxTeKdDbADPbm513a",
  "key26": "2U9AD67QsHUvJHBiF76yr9kPkuTVv521dXySUgAWFBFaGfoF8f9K1nRmMM9jG8TRAFuQMTRNMdxF4jsLQBuckead",
  "key27": "2yjyrK8cmipXmpAXbh93aRwuKbB2XGMVL8SsEDvbxkK2ygknW58LNCY3iex8czC8v2LHuAuogGJa5iukHZg8taxA",
  "key28": "5VuNEfw1FWw9aN351qTADAWnaHJbKZuBoZR2zFTrXBWJoV6qRLkj2gYoeZzbtdhZKWSrxJDj3U67Yhg9PPehKB3M",
  "key29": "2f3GHub2LM4CAiSgQPVAprVwaxxFfmmKGMwU496HJFpHn8XdB5Fq4uMe6rRGc4naxdndaVydPs48rJKzQUUZPkWc",
  "key30": "5yJeDc5A4vE96Prr342qFgefKkEfE73mjvqrWZTBx64teTEBKr5f5Umpe7sxL2w4yXDGjzcF8AtxKaLVPaxsUotV",
  "key31": "5wxau488Kag77pY7RpkyKvcGUFwQBYvsnVcLjQm5naRJk7bmZCcdLSAni2Yduf33ZGtvu8Kr5uWB72ntRV9E3Bho",
  "key32": "2rBP8exQKn7kTNZbcqEBgqPajFbjUnnoXucttkyJbe5VxMRQBTPgYzxMJ8pLZP6YcusZDBvAxvTGJaX2QmRvhVX4",
  "key33": "62RczWb4swTR4UNnxLPvLkzgtKm4SNz32p4QRZsH5ay13THBSbeajYioWh3YtfLgxVGoxZeQvMTKRGrt8vfeizu8",
  "key34": "3FXqVzdFwHh5yuLjkj1cCkxjMqoD32nnAQwKsLTDVHozDzNMYD475uENQJw6pVXSnMVTyDMVw1jCKnjTi7egvDKT",
  "key35": "4HAK9gGVuXWziH3AijXZA9CdSGCwNFdy8eG22NzRAm92fkrSjQVDqrShGUvrVhHo41BBSQAhLGKdUetHUUUooMyL"
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
