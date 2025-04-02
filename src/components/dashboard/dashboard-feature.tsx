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
    "z3ziBJ2yg49fwDLzs6WQ21EHWbeCWdFicgSKfVEvpwVPWGyTqXTeC7drvKuGv4K3aUJoMiKP7sXPSSp4zNHNnXv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "CQWdxRSvtEKTAfTVr4wyEAz1NGJPmAUwsxoMtJgo9r9tbxrV76arRPy3uNB6E38uzksvQc5BnFGwixFPYydVDtN",
  "key1": "2T2DF4jBzNFzGgMKzQsCRTKcJ8C3zbkJg2H4RbjNxJAD9oBVT5RmfW4YaibHrHgWBFHTmZJXJDFGJ1KaoQ7rP2cT",
  "key2": "3P7qWgX3ucDCBWBMyPSxBqDpGZsHJdc3meAKijoFPqVX5vfhM9aguf6P53ciMF23geRNZb5DRae3t8zfkF47RsmC",
  "key3": "3722CShgrQdKS9SwD1Pgf6XALn5YFkMVDoWxtLxg7VQUsDB4EVwVKRfjA49tmpXLt6c4W53t2SeitxRzc8MeTWgP",
  "key4": "5pfzGokhGk3owKYpfTE6C14DfjKjM9XbhhwPX5FLCpRMQEdGi9ZnXhK5yGNQeG2umsgLT6tP1GktcYymg1MDXmMN",
  "key5": "2vtMPzGoaAtqAupBLtGQvUJiw3PyzgRx4Qs8cjgissMShVkjmpZNySevqJiYiDEK8zhRcRxhnSg3vNG3aqGa2kFZ",
  "key6": "46JdqVs7D1YmYZyD659wtHSAr5Pu8DVWE9riHt3RT8pAkXMra2f2nUd4fMsw5vYRyXjAZXa4KRDSwfbmsvddKucm",
  "key7": "kH3rMYtooCpoUKngkgh77EWGQnRXnHBrgUighM1aMbkSEi3M6HEptaYegqFHjgAY63SP1DgabMBgRrqznaC7Eas",
  "key8": "4nixGp26puVMEFJZF3wqiRu5rXKonmSMu9bUAi8pPagcQxpvTah6fzGiSfmFVx6PMBjJpC7eUB4HBVBbKPsEzm7q",
  "key9": "59Pgokvv3HvaBE332yjLUh8JHGYKxF1MrmHbCWgDYKBLb6Lp1GoXor5QVYShRahjsf6SEPSYAcM8tDpBDwqBHLhM",
  "key10": "JFuyXGDCNJdUeMoR7iGa49crdDEsToWyfHdanUNv9LsPVusB1NdiP2xnaid962vP8tYLYPLj6FgnAoCuhPj51XK",
  "key11": "3x9wvgw8exjbwchyZ8DAGsUUjW79jYB5CFdw5wH9Qk9fTgx22o3a5sP5htixsLeqy2CTqg69toFQtA1eFJNyZ64U",
  "key12": "SujxqbfQiFv4qwPgCnSP9Kfz3tM4VmA27mTmFdirPSUA6ea2QQVK8Sk2dKNo113hd4qjfhqh1QrMwou4ubA5xGc",
  "key13": "5ipz91Gz4cyAoLJmEaHnNLcrx53WvemqPMAEFFhVeC3EjirZhjZjecKEvUXiQwAfRnDtyGKJziVzcbyGi3cBLdLF",
  "key14": "4gfpp6GdyyMYYe1M9FDC9SBVG7uam5JyBUy95WF1uEM264s8jHi22PVNtyov5GvMiwf7WZNkJvus6g8Kq9iyv7id",
  "key15": "5V8gXnQ8Gqn4VdMpoM7ah3zuM6FnXHCs6omRn8hvTMhUsStG9TNKt3EkLpuqkRYF5HVEMeXzrpqyj2Ng5vJMxqNs",
  "key16": "5VKf6LDNgwU5ySXUF9K1aLdVgCnYEuwvwx2ropdLuYaHrgb6VUzi7nhg4Gbhqp8prbKVPVfgJoAMZayNEy5okvQ",
  "key17": "4ked6B6WGKzcKBhwCh8jdd9C2hicJmi2MZ3B4AcYRewL7gQk3fR9iFWskErqbQgRcL9YzMaY57TiTo6niFak6bzJ",
  "key18": "5m5rsup2h9RK1tM1o4rgQJ6Qr6V7vQEcym9ZTQwhsuHnSotzbnyMBXBVyZDgvCVcL8rNyAGLbWxgLRZue5QZRemX",
  "key19": "35Tw2KjJHSDuH2YwmE5EvZEUyUFQqZoB1hQQBkDQBcsm89o5KDmoV4uDRADNGDwHCwe4w96dpWjY2ip1w6tD3j3g",
  "key20": "5eMtW25Rd97azdBjvY7Ni3Xw5sECZ2DE1gHqEdaA2uuJrRbnb1SkBQ6V5ycdFfhLxtSF8jqPBTHaG5yhnBGsiEU7",
  "key21": "42i5xuAyiKeMMLJBmahuMbamLtibape76cHz7EfqTBz6hxRP6awmnUXcJwdJG1di21G2TuPUrKyRDv3QSqbMoVEw",
  "key22": "2YMHfVJ84j2dh8h9Y3NVWdnnHPZpXRkUy8WqYDvVPaAqQU7HiLuPEBgqJMzpLE9MdXskLDMn7ZSdWz5MudHwyBdc",
  "key23": "2dnnGW1GP3SGg2wRaa54MRjoYzC9X9gwLsMducRYcJdqZgBE2qmKxTogpn3Rh8UifX3JaDctZDdcsgJPNELsLxJ1",
  "key24": "xZ6E6csQt1E6pWmsbQds7FTQnwuiTra473ucPQ945FCYSDQrZCMcXfWjAacDMYRExWyP7amYManVEumWRYCKXfU",
  "key25": "3YCbm2wGhBCHYzHThfbUsCMgTyj7HpgoGMTPSFFB326T1F2poFSWj9GZnV9yvxo11CvhFXeH1HJhtWZF2D5ScuCg",
  "key26": "49wnZyVsa5j777Et217HHYtSF2Y1ptEiCE4rTRmn99mr2jvyd9EZ2XyHhMqXGYpVuvZ5WkERBXo28JPqfTkiBLo9",
  "key27": "duYUurTiQzokuC7ALj6gSTDikFSgn17MnMwmbv5iE56Uu6H3DAT2fddnWPRXRu5PyVwLyVQiGxns8Rvvaj5sEZP",
  "key28": "48rAxdoPqjH9MsAte7E21xqAhW5XMJ65JVWmQ7BzswTFRc7hnPutCG2fvPA4nt3XAZfXhHgKEzXjAP7mTGFAjFHJ"
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
