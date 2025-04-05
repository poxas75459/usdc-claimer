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
    "1Muv5UAUdMRyb9qa5BANapweEq2TrgKqNaJT7cYE9cZ1vRpJMGdTmKXxiP3kmBDCTtFReSJRJbhJ2m9AYWvQtrb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4j9yzYREeBAraCzbrRFTeHbMjAWGDez5Ldh6UTVjaPkD4qsgCddjWPGR8G6judru34edWbFhgHfk4vCqXvehscPG",
  "key1": "57JCRsAWacBYHPid4tfuMwygDZsfVmTvJ5VuZQENJmkdPTyXstvphwN4Vi9BTjAcpFJX4xtkHNsUu7eHCYSu24VH",
  "key2": "37ewTW6PAE23zqKCLPKkpzdkY6Yx8uKdRhXLJ5AzzHUhkV7uMr4Uzj27ExHQVGJ3FLrTyLbU8mWRHnwBh9CU5C5X",
  "key3": "5X5ZmdWgtneFck8oVPxHHjFT1NVgLB35kkRgBxhJpMTe4CPB7TfTD1yXKycVJpLwHG7Q2yZLjyiAfvjr3uSLw2V8",
  "key4": "27RYBVbBFzuNsZsKqQqs9cR3VPBtgwLVQvjEmgAEe8nVfus4XTPogiLrjfRo53r8SjoQfp7b6UpZi7hi4CfzgFwL",
  "key5": "2GtArwFLStaW63WFuUzRCzHQhB4ELQc5Qg1Q4HYwdnyLnNdNNBuxMgRkp3NruKbgog1wbjeYtZsdH6ttSu5SoZYA",
  "key6": "4BGYNF4HPYAUUsHLCyMDdyniugwoPpWmnZazKenSDXvvyg2EYy5ez7PUAJi8Ra4X3n2mibr8vNDnYv1KwDnQwFbE",
  "key7": "5h4XJUP589GRJ42yPj4NSvjSCVyjhKDBuHNYPqNuhmQ4GHnWRw9C6y3Vr71aWhvkZJbdfXFEoEfJQVEgzYjxp7Uw",
  "key8": "4n4LvV8r9RHqfMEa8aJizALEDhU86GrfrRk9RimbtgYuh4XZ8ZLogvwKPsSGytdutfs27UT3wFFVhaqqC5vsCVdk",
  "key9": "enA2293EzHx7kbxmiVhvq1Kdraq3vXdUpqhbzbeytXnnJZx2jivuj177pKYAaZnJB8aJK9onPAuv9sScJvAWrAB",
  "key10": "2pan7DvBFEawH3jM2mJcYu2ZPi9nbQit1QCarEEWfTxPxjSZhLtD8CCs3bPgHWuWnaoprDe5mmt1yPJFJLQR9fmK",
  "key11": "2efkiM3M5cv6f4X5JE6zRBhdg6LbPPLStpo2BpkJqfdyfHJ5k2wmgKBVeaqGdhrX2b8cr67VvgBq8afArXXMzGb8",
  "key12": "5dxYbb7Da1qanVYaGcxq5CssWCQsBQ8qzmYH3KvXG7WgBiJXZJF3fUGFuB9GGxyNpSTEiZ1CzA8GhyuQXipgCJx3",
  "key13": "XWjrGDEKCAian3aHZizCoACgdGbxjGzAVGZZvy8dVM5Mvh48eKhvypnZYdWJ3cjbdxG8jdAknM3Y6bMjJbHdWSf",
  "key14": "54dsiWXshh8F6CZyfa1MemwcFpNsnsH14RE1vLZhi3C3XKCxJ9gEW3ZrPH5R57y6uU1vKk4Jd5w7fUKZzv71B61E",
  "key15": "39hRiUfL2KKLotGjA9ZxXn6gErtUPymmskdZoUZCctZKkhgtmRAGzBTkWrbkvma4tUuvUamxx2gN8nPcPButbRdJ",
  "key16": "hmxKh6y6BFzkN3yEMFFpDVtmWCTXx3WLvnzaP8Cbjx6YZm5spFaRrsLUkEX1XNF1ZXR3Q1TyyDB8bqW16VC3a5R",
  "key17": "w68toPakvgmod4BkPviypS3VAmV9XNPeuUD35rcZC1nuCNWc3B4dWFBm7J6o8sgKFRLwAK7yBvaDPsDCVKc9M8q",
  "key18": "2iSJfSt1BbHL6SKL4AcXjsNnvYLRvD8rxsuJWmkP9bzoVTL6TcNGsRkNvERNtj162q53EDAbXbQhwbLsDtBDBadu",
  "key19": "5tMbKpVrVAvZQ8ZoqKSHSmQVh2kvvx3Sz9UqtXv6xhqwFkFN87x4jCp4Y3hsQSPLEfmWUjG7XFdPtFZMjhyjrrMv",
  "key20": "41Ch53Y3xiRr1b7eQex236S7p79qxda5Q9w6DHdR4mveGnvqRUcqoXwdA2e1QRwqEtnPGhmM3M2MfcS8Ysb3NPKv",
  "key21": "9zfZxrVdnSMVCv9m4Po5WCGJN3rMnwFhvZkFaS8duSswB4VP6oTWDqTffa44S2fuyzJ7oEQjNDJ4MKRrC6VQr2D",
  "key22": "4ncDtCsM92RD5R5zPCtpERhTmrAH5Hs87osodx3LoZ3LKmVpTTab2s4AAWgCaMnh3gmSFuSZnuN82MJDngwUhcxP",
  "key23": "ona4CUpjm9JGMDoo1aFLD8MoSktVRihQkPhDowHmCJpo3ddMYBYEPgohHxMGiSCFpf8Q8PehpKgBZFBybrJEdcH",
  "key24": "3T3WxJaa9D8TS5d6UkF6fkJebc6hiPGUD3KKaUMoVDL2JKRTJMmd83GQXf5zJG2uDiQAk1qGKj44u87h9x5JjMSP",
  "key25": "3TuV71pnRvVX1G9bbqcjshhZup2TZydL4mVPC4LbW8sTGk8CKKNUd7f4VDNtMVs6rmJ7TBJ6PiFjjpr3vWyDCPLD",
  "key26": "2hq7FJTwdFTfuZ3PrkLyT9ZoF8ZSBQgcKjnDGsUZjA2FhdbdaR3VNbQLm1vp8XDSXPc4meaaMrwGQty7bG3KmJ6Z",
  "key27": "8eu4LxfYp2ZyhPFMz3h3PvvJggU9NokZd7opcLnn4fpox17Smy9bjNxpGoR5qoMi5Bo64t3rBxtQgSms6h3djTR",
  "key28": "3inQdiyPW43FkmrCrNhsZ6HQSjEnQZ1kVEBttqkeQxajjvfxwmpegtVRqkhb7PyAPffdAB6uwR43QHbsBtEae8tx",
  "key29": "4KBtoMebRw9AyyWoFeXkTDZ2Mf8sYPNsBfwc53mjmiuGuLukR7zjdH6jzsnMqkBtufoWkv2mFbKtvhPNdaPrNWZm",
  "key30": "fgf9XcikdsfR5JUWS1yuPauJEpnhzYYwxZVfTYgTx3hqj9F9s4CKMT65aN1zJr2pPcskT2pFQrWbVyPELzaGndp",
  "key31": "RfQoTVoeA9fW8hGcvB94KDeCLJtH5iryMKXKcNMxdrPTDQW97pC1EtN1q4wTMaJqzSHqebQGPTXuqvupVJS3tEv",
  "key32": "t5KX9fZnb6yRUP6oAWed8st8MjhwVLtekWCwxgkD2koGyMmB8oNQF41E56J3Vtb4Phgse3z8KvBZMN4pGnBZYYX",
  "key33": "eTaLG1stzTTYnzseBansFKvBdgMoWN5mayNc7tyQ2DzqDBRQAmLEqAQRUB97y2gfMRXxYACNp8iGEtUXmaso6Bt",
  "key34": "38Ga4w4SrKtNAX9ZTxYUnXEToW8V6MCAKK5cq9vNak15t87sVRFAZcqwebAdAe5ro5fdnmGw8rW5v7fhP37aFPmN",
  "key35": "5t6w2BZL8ZsUtzQAya1ff93ohGanCUUaFhvJxVAUnEHME3FYmPToa4ERatW28QaghLSXLGno8N8qx2mKegcV4LdB",
  "key36": "5e6pr8cLyveDFLYPRU3e9iSTCai7jTD2NQ5LzN75454GnUD48f5nVNfdo8kdLwbPL7DU8VMubnJ7GnC5k6bQggip",
  "key37": "4Sk56FYF37XK2iSkSo5rsk6RyJkNC7LerUDUV5FthyE5MbebXCKVoQKNsRpmFxxRJbpcCZHZgynPv8y2LpMaGc7j",
  "key38": "378c4FuoRhTqTP3iQDDu1EnQDntu2Qi9jYvLZMVbAweCc3cixGp6QpXVENAoSeV4BjAyrHy47CpxTh3JZQ8ZCGnV",
  "key39": "5kvmyp1NziuPojPYskSCMXLyyN4z48UDnbMsmwfbpteewAeYfrYvvkDLDuGJGxss7fj3KfFEpxaRmgpZKvsvQiBA",
  "key40": "3j9QziHeLHFjWbsnHpizuHpBWMq13CfNFChtXvMyMEkaaqGuWnkVDWe6fvSpgzHdfmpL265v9ZMyKZVZxg2SgN5Q",
  "key41": "23ZNFKLQco2vHcydM2AQAZwkEC1F4Lfcmma6FQ6QuDcngfc9Au8Dmq3DsYKwF4WiMrVbkCeEPbKKFxX4a913n4rG",
  "key42": "3AGVFEoVrXL76WY22YtDsqrYHExpe127N9NRxVX5qG4Y2zRPm5RM65qgv2EP2FtYMRCfDzQVMGMTFDhHAgYj725q",
  "key43": "371JevhLNuJ68Qdb9J7co9roJauRPiUm8nTK1CYJGzXA98yjQ1seK2o1q776yaieqLzMjvMehWgBP1JWE7eVvRKE",
  "key44": "3BCfJqR7tsX8nY6AXomAcCAAXkA95L5M3WeyHnUjkWbAwqGKwNPTW5ubue8F3GZkWAmwGSVV7PQ72VNU14FamsD5",
  "key45": "5ftz8pZH5qaKzhduvBSrAvUXUspjz8hGkBRJVf7mnjSKsyU4gLKRSiSNXcJCMXBkDAek3qQenf5EJdPzCorsEvpN",
  "key46": "37mjkfHJhv6qGMHHEyCpnBPJXTwkEURfGSjTJXtevrVTzUaBQ45vYgyVRPBHKXU6fT95M1sWeP3q8bfkQk3q9bdo",
  "key47": "2jyVnLnD4nTDi32yBXBjrqeswgzg3kkD5rBPxYAJq28NAcYCdTigahvDLRKdtBi6Vd916nBua4uKa9qnquavKZ6C",
  "key48": "65YBLdVi8d8rtPXo9qGLBv8EADjGU9Fhnea4kFg5jnfNk7KC2Ye6BGqaNAHayczeLioauAwHrRYnkMibLzkb59HQ",
  "key49": "5pSwq8bTEYVe3b874zDP8dJfajSTVEvkmiJk3t8V9uSvzd9sUtJyGgDcXqtAymm2g2BJHrqdy44WNcUqk3pyKixo"
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
