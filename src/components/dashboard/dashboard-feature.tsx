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
    "5GEw8NKsHcdamYbWo2vP2WdcwkeVrQpP7EtiQ8erUfrQnKwTngtFMNQVHQwwANPym4M4uxCcu2JNXUubiyrT4AEP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5j1LwzZ1hSpKYabEcnpv1nFsHuiy25oYxGH6WsProDAkhRJvbioKtP4645oRmSEj1epjjYhq2Y3J9VqH6drycTCB",
  "key1": "4UCgSwJqivmbMcMZjvak8kjRTVDshUsQNjiaURcFHNvxj2dqyVdJE9Ts1qYnbSNLSmDU6ANXPa9uT7u5cAKWJJrn",
  "key2": "2UoWvCeyov18ZLQBKgEhQUUaazPnv3DCseUYexF1hLg4K2vRoqSiZWgAW9iKj9N39HQccXKs31atpByiZVM3SnMS",
  "key3": "3eUrMrktZ8S7XsB39pqrQw7k19NjHvPwiA3X5Hfc6h5XKDDbiXriqhWtjQZt59pgoWjvJU5t7od8yJffmek8ufAn",
  "key4": "5upapLxdaBngq4Adfu9TrQsDYUzETVSpn3p1rEFkmWtLW6Vh2A51dfprXinGaSFqRif6LJ8uDU1PvBR8yd9QxTkQ",
  "key5": "uVu4BBxcPFCKXCmBWhe7yRZur6r2EzyJqFqSpa7BdstTqc7x28s1mLK2nNceoT5VprY4Bxsw8xeimn6f4s4Z8iQ",
  "key6": "4cnJGDLVLU6r8VDzV32n28AtTVbh63QT3Jt2Mz2EwhniG5Gh72F5UZ5JmkfM2RVjijPrDdBeT4MpkTWihNq2ijB8",
  "key7": "4UqS56YcuQd2aCNouQqxY61mdfe9cHLJm8PtQeCt6bZKxvkTeaiwrcSkcFdejZBQQupJ5o6sLhpXTXHNiuFWnJXU",
  "key8": "217xXU1xrvCZzphBXsk4M7pCtXAncZgQADtivoMbHu92DBF9spQnvw8UnP8mFQDaYBhoDjsdNeicGEcPfsrErPMD",
  "key9": "53yPCC261w6FjAK1tr42PpQJ7RyDhW6hxQDDg6fwM7t2bmfCxyQdavcH5xrsRXxe7RC7GYeEdNFGLjnW5B2utJ4i",
  "key10": "5NuYT6JxfdexitjudA17NrxmfA6mp5TQQSkhnXes4fAwvahGtaouAgjCZjjFUyZVs4P9u4k7rhugYMxcc1s5toUz",
  "key11": "49kzWVUprSwstcWQ4KQefVUrixveC74dJJpsAUVsEPY4TSoo7ESDJMHyWdE1QvtWPwgKdsoFiU5yVTWn12K7EkTg",
  "key12": "qKM4wCzXQ76PzNcKBVZwWxmsQ4tqytSJUxNnEWLotPBHuD1jQvcqaT1i5zEES4ZxYkm6e1g6G4tr2Y98CL6k9Jc",
  "key13": "4PTbhSN2QpU44MG4EQJAmAxQHDSrEQ5VDFi9Qb7z7RU7J47XKaoAf3EF9ghbwSvjQR2ntAAGJLAoHewbZEkyCEjp",
  "key14": "4opnYKwXeF5WnBULtmnaBDVwyPvkBKURoBUNLVRSYS36vTZB4w3w1msKAZQ6155WrWJRYVt3EtLjqiKHdRegjcMP",
  "key15": "Pca3Zoy2fwbUiekyQDCSpv8msN4eR7C1BTtyQ5fAAN5QfF7jy33iVuiy6c5cVnuBhdBfArDBDhufm1xniY9WAGV",
  "key16": "4uRPYPqYkyZ2XLiQexcRcXrtE3URcKk6p4xXqooeHnoNubGYdNx2NcNQijHwE7E6LRmq8JrFQWXCnt2fNqwjfFo3",
  "key17": "5xohReqXWyoj9JsTvHXkQBXdMeDRTBMQaSGEQykoBUtqZiKpgQtnBAiGny8Ff7vx7zojevt1tsi7avP3UhixLgoQ",
  "key18": "3WZrqmo4YL6Ny5L56TH2oJ1LsCyCBwCD9YumwnJfFgSFCiQEYf6cXBHp1EeRXWg7c6vt4ThHXxxvw8H2hAP3q4BE",
  "key19": "94ThvU8zK2oqZdLBDnPh5VEMiJuUN22ovZUSe21etA7wmfx9uQYkNx2YbdFWksbZ89KA1whHpru91sUnRBYKCSL",
  "key20": "fkYmAhfHuYWJAYFS9XEoKfxqynvxK1XwG1db9ycpmUzANNv1v8KLRzDVAADSxsnpqy1JVHHesf264yyBRpKfQHa",
  "key21": "2BWu85H9QE3mfL1mPiVFi2XWxJT1YSBX3hyv7thWNfpXdGsCa9qTo8yqYf6j6Mmi2PogwoSBziHwCs3AeorpDfeV",
  "key22": "3UFg3XjMhkY51rPGZpWBcTgqSfYKLKrgpqDkRsLow7ponkwKh5wy4G2rux2b8cjfpj13UDsyRU7DT64SZoUDTJns",
  "key23": "65TMjrziB2qcWAACHqTcsedrZwHAhjv45aysT1Ao3vyJZcvawAzKBUxc9RQQim4KHubfSH9xYSW4tYL4sQ2GP1fh",
  "key24": "3fPzb4dYxemqnn6pXyNLCNTfSAeuQsgekB1qa24hQVVVb2imwZHXBYFBZv87cBLp1GgzQiEoQvYrs4o9tKvh7NTY",
  "key25": "3DmeSiFNWFPBmcvZ6nRYDN6k21MyevrdAu1QSPwCEcDES6Uufj4k5TKsqJixetrzfxt4DoYcHzcuFrDbGSgTbvQS",
  "key26": "5AVVJooaMLXu9BN6wNJ1fNX2rWuee1JP245FMLqMXJEnRez51LAsm7mWDmXnbeLJS3HGpSn6yQf96QPdMrvJERe3",
  "key27": "2sPRxb2Jm3gqV2Gn2QHjugQpJjDHPTBVe9wbV4Z4kUUh1y2uiExqPPSFMva8n9Zk1kF6dxNSbkkGaVXFxv2tpphb",
  "key28": "3boJYsupYwq8jmkT3DibJmyTXmgypnbZA4VqjbeK4qAW17CxJMByVfXoc9taCofeD21ek4LjKfoLbWfpip4xMSfJ",
  "key29": "TUA13vfYvoEmW2iqdewRdR3NXwsCVfnMWvTurXxF9Lituq8mUAZwaSj9eKnEHp4cP1Xa8YXEDEqiLxupZFoTLqL",
  "key30": "46jo69h1t5nnsUqew5sWyAuA1Jbm7CASLQnAQwnDcYkVbm62eNag377C6cztH5SSDeu6zsgfQcfB7YodLk4yjj3P",
  "key31": "5mtu6cQaHELdcGD9p28VVJv81XJnB5Wd5KkNtxqqkKXuYdL7UsFzLiWxWFDLS2ZQikCAZT8jMFckTapCARA9eRjm",
  "key32": "YUzGLDaUTTrvrovPTajm8pmo7vcFSR43qoErYnNZAXPykrzKtfocMyycA928vLwZKy3fbZvhEykDkoC7or8WGNz",
  "key33": "3kPkaYH9s1LaSh8UcgTQ2NZXturhddJxc3S3xL2P95m3fYSveftiNuhdfBk7UJGxftWc7fm89eeGZkcXtauXHjJC",
  "key34": "4KvWN65TuGAYvt54iG31BAexXTrzTJRyKdMYin2G3etJBLi4GfJb7KgU2iwPpFt6Emoc56LzTukpJBkiHCgncn9J",
  "key35": "e9bpF62Bf3MwY32G7FahG94ejM5QgofkUobrFdu4CYHf5uNCJQkMZ8i2hYikejgUijksNkvfxF8EZHKFaMG1a1Q",
  "key36": "5trF1wX9rJ4k1FUWTaXBVMdgGqdMN43a9JS84QxpTackYjSDcFiUVXHSiu32rmTG5m3chwgJqPyEvyfnqDKDxwUk",
  "key37": "wb1Z8pDjPmfN36AXZnBQ4XDEWAVMbrPfTG9JvwN7jFL3nZUhBmErVYnX41BekjekB8yJfAyXbfChE5MC2kxQita",
  "key38": "3z2JWX8QwaTb1yAWvrqxpRVBkMvMQKkBG2vhVDnE7TXUE9RfAbBGwRydcHSC87Gx1McVwtnrwo2zAPmnE6EeneSZ",
  "key39": "4N4wGpcRypAzHLzncKhBTzXGwHFiycVZ1fqzKgsK3k1JgypUq3sT3HvwRN1KAoriAMFLUcJGeLjFS8cY4tpt4iNT",
  "key40": "4voFSiSeuKzBfWbro37D8cAHJ8uNYfZxPNM3sB8TVTD6XRz6WLd1rsJCpmf7bg1yJTz6sKsmp2LeSUTMihkgUAC5",
  "key41": "4nJ8rUUa8WJVXyJJQr8ZeDeQ6umBzeAo93SxPRmXNe1WFTKzRHK43knTYDXaEbGJhiH9MbpckvKj31oza1dW8Smf",
  "key42": "2EFCwSMJ6ssoUEatydV8oZwa5XhnxYcaQvJWyujfZ6YnTPHQapKNjKSbaK22VwDbTyghkY12HLRnYGjjVymf2oqP",
  "key43": "UzBeYkjG1PQQPj4VTAa4iMDXLpwhVS9FAEJmLKkya3KK6SPgb6bQPrbWviUUeJ3MJwp27ig3DgcNfP8G6G5vPxZ",
  "key44": "DChFtSRkJxjcr7aPcLG7zdmzXyJBLWb9NTRfhgxznGfXsTk7UCYaFEZJT4WcCvBr3NwZP676Uj8CTd9xHBWRW7s",
  "key45": "5j7oMqgJT4aa5UTM2eb79ppJ5xyf1itmU3HChDqc6oRHWAjWeFnWEvbzPTfG3z9W4WWL5srGRQvgChfwzPWUJapf",
  "key46": "o1FthviSewBxh4qCFYvwUAUyhXtzoCAksJxUNVn9cbZt1rZ5dV5DvxwYmtGUEGGjhoqUY3En9B9ccDiJs26w1oa",
  "key47": "4U5es4qtjhbmqy26C7KyiELuUQ9UYJagqxQaB8fkZwvmQVxYFjf4Y3ByDxxFYNd1SymnixbEZ7VWid8jD6sg4xJS",
  "key48": "4QpgX21m7iwJdmcEj2J49YyXpb4S9Ud5JWvKKw4CAgQ9uFmUF1aHffVpUZAFpqzh5gN4Q4KC3qN4Wt91qFd3THSR"
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
