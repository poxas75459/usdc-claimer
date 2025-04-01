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
    "2dHFbJ9a56tF8x1me773pcZ6zDTKAc7embc5KH7oUaxRJSwQrezxjvWswsF6St6Z1FW2gS7i8v35YJU72xrHwh3E"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3z5cyhdTNsa17AEyxmexcUbCJim5jp7BztJUbPwtPu95557CzwhWKKZHpKtrjsWTS9z3L6La9ZEDgeuLMwQQcgyR",
  "key1": "MfB88yBzyeUbvNsyPDjrMjP71pj9sbJDwz3dCr7euHauR3m951szW9vgtHEuPBXwGpMntSjcxsBdo5j2WkhanpW",
  "key2": "5c886DFGdwgRtKUgC64ap3E1QfkbWe65dmNVZcYgJ9VmvUZcQdBzkH8SzzJK4ZmA7yEkhCKL6kTMeTei18gj7NcH",
  "key3": "4pKVzJ1FFNQPqiTgxmqSdDMZZudzaScBVJ1ycpfFMzeahgFRYJSUGAsFssGdqPKfWg8cXtkByf9NtcfAJJ2BMGUJ",
  "key4": "5xpyUWruiBtchzbVxBnv8h592Yf3vkoyDHyZCsfHsVDLsjbWPPVRTjVHf9tzHiQFA5jLKBEqBUjeWDy1bNNKFKye",
  "key5": "5mbcLCn8pQ8oUtpFdHCbxDCXsLLUz6Mzn8dHNceXDxbbAnwK29ToiPPCRnVDoREKvmVzVWEWdHT7xwzgQNpFUter",
  "key6": "5PjrwdtQ1towk9pWyt5co6coFVJFTRkBNndjeoFy2kW1z8wUjonGgQJ2PkTamLFF7oQ2LWrKWiXaDBQ8ynjG563U",
  "key7": "2JhiCwbFmzK7sKEBTxKDLEeJFP2FokxrL8i6Fw7iVQ2xAecPuY9azWB3yKLXhbccQrGfPRw86H1PmM92EkHpWigM",
  "key8": "RvFcKJepsgm6eEUxf1z1uHrXPmAoawACeqcFdtJwcnkk4g6jSX7NJKA7ucZLX9BcNbsTRkgk1graVdYoCUqJjRn",
  "key9": "3xr5XuDYDnxPsBEkrTHrnoLAYSkCnixLDxdsQcv2dj6mQbEnnzveu9m1GL7PEhTmU1TCMmCuYQk8uq5e4whwdT5v",
  "key10": "474SQQP7P9YbCwWwdsuLzbVB8JdJmbKVmxSzsMvzMEitGxaCnBmaDwanhTEKFozHkxmeTU2cjtDdxg2v5a6WHL62",
  "key11": "GU3ALER1Pk8ZkC2YHwM4fzg4JL9aaQxaz4o7G16Z2VhiB3hF7JSjMYw2bc7o2LhAmH4YZ3yL9YjaSvTYTp1rRoP",
  "key12": "5sD51iLGCSnPE2J2QsAMYqm9jtbTBmRvgdyjZj4pPZV35duKgQoUF2pL5fxkJSC4s6zk9ovbN4Phc1miCVuVoMYg",
  "key13": "5fzmK6Qy4hKvfUNwyDXa29q9HKRQMnJS1q4N5JHZpqgwV9KV6dDxZkJ8UfWzUguDvKcE26hPGbHWqVFuMf75AMFU",
  "key14": "37Un1nNJ6Zjm8SCsrSwMZbhZyog5p4XNY1AFYJE91Y2vLF89oQfWRPr8h971WbEPzgrF4ivi6LKkHoBpR2bDS3mP",
  "key15": "ebYLY459ebCxVLAwxJGdBcsgLZqfEy3PCHJzpB6J9dNNuXnvLfys3U8gf3GLF1RT3f8qm5dpeRYQt4wrFq8sgvm",
  "key16": "4brUe8QkBiBAgmMhe2NW4KANar6pjMGpzt5HdWtfvavgLSmL4sxC6413ZBvdteA1Wyq8TSpRys2VrLGCNuJPE6ig",
  "key17": "4t8mrL6MYAYR8uTcKvPFNyiR9bhqC73PUomczQRMW9jtXx9kMHeMzJV1WNq7AZ7mvBtwbdZ9XgK3FJXBMuBGXdHH",
  "key18": "4AeyWvTJMrBzCqPLTeYkynCioWaPRSXNXUjqri8j4GDBn69mrrLP9Lxz7emTuw8Bsh4HLU32BPyig2SJeNjbdBpS",
  "key19": "yZgP7gGmBpYyYASzoMjLnxVfVzRrv6r7BjdX5FgDx8iyTKVHwYoYkbrzh4jY3zGLwFdqTVv7pfKpgLrQVGtDyQf",
  "key20": "2mvc82Ri9hQZczjQVW52TVH78hmSDo8wRAsHH5pgYrZ5rqCcNXidEmkrdPmKAhpLHAURoAQcNXyKk4k6j55n7z3c",
  "key21": "2qXPjy23wtF6gySGPj5eDZ5E1P3LiX5MYzBGzn6DL2aiKZVw2r5sMFqWh5EoRfFDZe5KrgEDnWePS59CBqRVzVsY",
  "key22": "2EWJEzcHBNxLGCNVpWkM9fMjAMwqBbL5TEyVvPU5fJou6NzhWZpK1VPU7st5GXenFYnb73PrynqX2sgSuTAzrqYw",
  "key23": "3Jna6N6ypPmfdtbRfMx37APRPSB7jrHiUa5Cqg8tDtc1Q6AjtFJqLGSue3WfvdsmTtisFFstsvMvkhUMX2AJy7Lh",
  "key24": "mnDkKWEMTX6zmWaRwAhcVEnBwSu3ZBSfrz2s3ep2t2RJ4Uh6dj5MDDFxABFxj9KaEG1zKokELf7u7JrhcXqdxuw",
  "key25": "2Kv2J5fZwF4KTgg6YYbr5hfGK1Ri6vYdYMk8XnY8YMPAXVMD8Lss7wzBd834vHbcfofvsa5Ngj8YdJYNaxdcxe64",
  "key26": "SWw21hKVbbd4f1vsdpwf48JiULnNgwYx7uH9w5jbxtpxDuLfVyKUn2Hp6353HDJqujTTQooqo4WG69WdQqRLjG4",
  "key27": "2URQzXvAaaAmXo7KAFXcZ5TqZKNaPpLbBnbtXfhpmmZP4e57cGeNDSyLhhQNcaUBUyJNhN5ZHfbjAYEp3r539h7j",
  "key28": "45ioAna7VkABLRdoS2YfUQRZMjbbdPz6z7bZJKHSfaGfAgxbt5KNkMt3kq6dfRCbNAMZwB5VHYwWXiz2HBFgxmGt",
  "key29": "45bU6kiLMoiDa1KQkzX2bAQAHASbtRx9DNSdqkgV35nCjkhAEPCFWEVLAJtvYuqupNcd4uXFuCjEVx3q9RYX6Ap5",
  "key30": "2bxMQj4s8P7CPFn2gP1QtFGbA1EbhMd9QMRstnqdEqGtNi1aCMXTHr4Fa8yNR1UT1tu5gPzvzMiCiNiA6h5nxmqU",
  "key31": "4H2HHytwhBQkC7RPf6yTgZV9We6UMq6D1wEyNKG9TtnHRhN25LdiXv4C2Bnj6AWFnwewJtF7hoqMWfoEDk2AVxFr",
  "key32": "5y9xqpcuM628wmksokMTdFi3EhVboardwh7pWh9TQtFDm6RTaSqMcLL485QoyDGMvo4jHDQ68qgAGURooPRU2HMi",
  "key33": "5wD3QG7twpf8sc8tDWDP3iSsJZfCMz9R2zcMrGtQzRZUbArTYR5htKqzzpe21Cy5QZHzdj8HR4oJT4M4eEx6Q3xC",
  "key34": "2NUuNvCQX2UgEZCTwGnEhqoyqmEaXgjHB2J5sNQdoac9S3VaBqwtJNjBaWEoNw8vV8C5tdXPmgBG5sgWfqt54Az4",
  "key35": "edokG1npxeCZhZHbArDK42WqYQk73ecNv6o5UBnw4emUVVzCCfHxY1ubs3TYMFrZkZz9fhDGs8YZ8Z1rwXE39Sd",
  "key36": "hnXiDzExaX9PqXzWPxdCpqtUnxENidHEi2EGeqh5899YscscbHHeUN79xYfd2etY6BvZzsExv2KbdLmaCstkE2i",
  "key37": "3a4xWrHNPmv523N1i9nQ4ArvtbWZqFMASfzyX2v4q6vjPpfoSymGAaUFCmD2kazKfoQ59T3CYZcfx2P6G2djSsTA",
  "key38": "2Tqv6Em46kEomD5ufx1saYnm6UF8MCTxPkx91GWMYGgpJM2EXTLd1Ycgyjm9znitc1rWcfTYMpWytDDitKxhR8Kd",
  "key39": "5WcWBxeS2cRKRhucBrFSpFi4Fye4CA7xV1tR2XSWUeWtJ8hMQ2ZgPdeeJSz5L7xRSZfD4heEq776DxU3bMFUcmpV",
  "key40": "29MTprRJzvn24annDnRetmHFBbr81kPXTzwPeKyox7HWZcU5uei5xS6WtGkJWMuS6iAhAWjKAfE7q1XogwUmcDXZ",
  "key41": "5AzYVNy6CuazDvUqHu5k1nBwSBN2wBY9Boy5mi72QqDWLrapiiiqMsDNbNAXJL32Q16t67nuTqjzftoZTKCXYVB7",
  "key42": "4E3CmoNJ3UXu5AieQXsSqSTyucJxpY3hYoYF6jtkm8NQEXSMJtyuPHhmAViBY7hZmg4nbj2shK4JkwriF1BnUBqg",
  "key43": "3CFeXWneFiuLujQay4RsJBtWnqUraotxfT4vKuc14sZsUiT3gKSGcnXnsrTAzjPWZfjutqYyqT9GyrakH1Vs7Vpf",
  "key44": "28Z7csD5qkohqdcAvBfEWSyt6ekftipuubDvYJBa4pjaGCM7m86VfDPNfj8Fj8DsUir9WFnNj5MMF4byHS4BTXM1"
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
