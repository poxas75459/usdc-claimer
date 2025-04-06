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
    "53tnLLxRGSxbo5N6kA2QPGz3pQXuBEKQsJAbke7i1MisrtyQnrKzyWd1vTkAwfy54nCwonXw2yQLffGHYgPo8e3v"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5sMYApCKvQtyDXvvZikcRAvDvvrgoZioZX45UJ3qSoWUV3k1feRekNKdNH3u83UQyeLS2VCnFX9ewf4ej9cwANiw",
  "key1": "43YwguamYwuYHGXtSJNPPkWes2gUoe6PFrZNn1BfNnR7WxJu9qyJwFEeNfJqnGfV5eDxitSSzdy55fa1djUC75ZX",
  "key2": "51peMmH3Rdr1BFGm2Uq35ohwLMMEsNkg8jStb8eYwiWY1upvB2g6Q91ZU6q4kpMVKLzXtxyP6EhyoJbdBqkoCa83",
  "key3": "3Syhcv8cYWUxyRU46gzU5BMYgDdMXSyYJykWvk7DMQrrPDjAM43iGZ1rZySNGo8C4npmt15urDGaNRS2hk4Beyv7",
  "key4": "2UdHQbu1MozQi1PauXCMrBbHs5LTmggpMdXQSBpuVj8XieATfCn1n5pTKGHy64mRKpLJ12rxCU9Y324TtawgvBSY",
  "key5": "4Mb1PE8MznUjrBoFJbBXKjVpJKzyM5gRWNzwnRj6AxqRu5bXZXX3P6CioD7RVJTxjvfH9tqoTYhYjVaEFTGYd2uN",
  "key6": "BcKhaBmUbyeBJHUYzbispi4REY5tJqM4y9hn5FyGM9mLm8YLMXcQdXVAziWcY2Q1PV4LGngmxhxgRiXzwbhi4RW",
  "key7": "Ko2rHbt1XDZe6egNZNiGypfrMJPE8vjHhuFE8nw6CmXqKRnWZj6Q3EDFathZynBDr2HP7DKpGxyybyHvmcK2CGi",
  "key8": "5snqZ2Btfm7RAMEvNL4NgM3fbA3gknPMoyPDyGCY515NxdFhJB63ftVX2f2fiegugVbE9iR8pqCahng3oHE5by7R",
  "key9": "2TtqcXL8Z5AtQgHpN7afq1fJAhDYnKxpdPy6WH9cDoMgoUWLTft1k9sDz3V21VnKABPz3ni9GH8nwFo4pE8CVD5Y",
  "key10": "31iFTNHHPnFkKf8wgJ7ZbXd6fAogKAaUUFRUU3pVvswroYsNVPoNGqkJntJUhtRhKHxyEwid6Kt4GULmb1QCLy12",
  "key11": "W2rc7zb7jaJE67a7FPvzA2w2qK18xBwNWK4rsxaTtpzu94vMFSwsUPRZhsSHqAaJqCjLD91kBXbuErqRMDUddqu",
  "key12": "4TqdMhyteV5DJqWDckJWUhrVRfDT7zhFKWtdZsBpRiwiczP7ckmnkZtFSYQiYkApvtoXtCbAsBed3xtjSAiy44tt",
  "key13": "ns71oqRB5s9WuGQ79h5985X4n7JKQWVvQxQ8MfZ4dbEBBSp6rGCJFGgw1t2iUzBMSnuAzAirwTnGaAULHKNSsRs",
  "key14": "5EdxGGBYeFouVRm1B6cm4ddtTCJNEtifmzfiG6M1pyq7NTbz1rPcdSw9EazKPFs13tnE13yNoSBg45X2Y65ri2n7",
  "key15": "63iFVpVRgskEvoqPkc7dwfeGPAMfx1PkovfbWY3dFCQf3UEF6GjzKpmU1tFhZLUziReksiPfLCmH9YStE2GQPvww",
  "key16": "4GyFbqyZDec7iyoiQiJDzqmUVBBpuDyu7EpUjq33ckBsCLuS6XGzY549B83TzTUc1oYAp9rwaKaowTNBhyeTH8N7",
  "key17": "rFhJk9iQPGqrqUYtZjqixvYYESb2DqSC6CNCJGcH5iDxA8dHhbxJtwqnDpyS8x6tCnNaEaMYggZjqCZuDSdANY6",
  "key18": "3AXps1cHfVXCnAtL6w4vG54B29vWE7VJwkbF2L8AmWMSU4L68SDd3kbPCQTwbE3KNSjXWb4YvrNUJK6R1ECmdSw9",
  "key19": "2dMmKS798XNnzZAfR2twrF8pbzvfjMjHUyzfAnWoP74itzhQTjfYsQVx2EEx9iNV1FUkRpN2FtPduFudWUAPv8XT",
  "key20": "3yKXW7HeH8QzKAt1mJRyhDuAJzFD1QHCh4Xpnigb671gkZWsuJVe1HmV7myT4b4Wvf7pA5aUNefqYxQDG6utZDXy",
  "key21": "3aRH1zKdyndMP9uwtm4QCojPSy1GYVfcg9mTUn9DeSBnUSw2eDsh1jtVsiXqxGBELaHjm3JMDMsrYguXEWR9af2q",
  "key22": "5hgJngwbHFAv4dRuHTEuq87LmjmVQhmkGYtUpExgXhj4ahGJpC846wRwNAqwCEaTWFKpAvunZYYtve7tHRn4VPcQ",
  "key23": "3BAK4xheye7BSAGTozzBKh7MiykecfUumJiFwniCNZQAwCSNXPKzwToSehiFzU6zDxcUhRSiJUf4eeMpsnR2BuGg",
  "key24": "2SQvGZK4eN1hgJ459a24GstKVpk5riikBvHtbhpY8KdT4ao5nkHscbEV2PAanLNBBDQgP8vJqZiYZME8uHk9mkxH"
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
