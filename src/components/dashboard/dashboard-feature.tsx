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
    "3UcHKjFUhw9t4tbA2bcH5z94SpsVseqMaeKiQerTk7dYKR3YVKXcQ7o3wxbXZiAF67Cb7mKh8NNKFZJbLGjAj3Em"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4pBzs8uGXey4eAusaPDM3XbKHYVv79QctHyFyDe2BoPT5KER3ixh7TbDTEL6YRKgiV9zuHVgvpjntK38ziwSyvn5",
  "key1": "4WYFrA6WRZkCSDi2xxG9T7jdJXXt3zFQeyWDd7WGLtFDV1bS7ayHax5DEQKaKwrEDtK6FmHU8jYBrTze7ZCR9g36",
  "key2": "53hPu7ARBd4oabhkUmEMZ1HzBXA6DFLGRsdp7GsaZpY3eiwGMPKypa7pvVfgvnhjwqu1QiHcwB7eHzoEiQtRA9Ls",
  "key3": "4RkNFSnN5xSrCWVMQbEWBfzpDzjueS7naVZ3oVpmaqJYdrNGZrvDGLq8ZdnRdoakzNveg4tPiAsroXxgJorr8zhv",
  "key4": "yU2vGA7n8YTWfLJXLs5H985a35NrKvXrUNLTHFuaG2MQAexq6WkGyDmHuptavskYkQ4pWhtSvaH7eTRkBjonCfr",
  "key5": "65AFEXh6MrhvNpS5dv87vt9VPhKoKGPbTta8HgvifnMPc9GMaycvPx4TZoT2qUufgr68cC4YaVrJDysKcz43mRib",
  "key6": "UNLsX5aLpWgEs1CXLrjTd3kXJ9wjdKVheUk7uQH3G8aLMTReMgPVA1ChcukBQRHkr2xqHN4tPQHsCu2coPnBh1y",
  "key7": "CWx2a44MVdy32GcTThYd7mzc5jyspxTGQbCZApQAxZEzRyoH59CjiPiEhqxf4JfLD97gWNRbQmFq4DnJ4SDTrHK",
  "key8": "5W8qHyNyai7DNW3Z8h3Z7ycMh13scx4wQchomBHdpxo1MEN6FA4YHiCzsLjwRHxTj1L11Ag4wFsPr8GXPtfkPetq",
  "key9": "4sk883u16TnBDX5EEJUDZsrMkVX1r3qTBTRtw6ZPCec31Leva97rGv5NjosYUX3TW9B9K7prFaSpCh1AsgYkU328",
  "key10": "3T6v7R92Y6B4DNchPLb1wQ7ZuQ1KZULWZfoiBuLFu3an6YUiWwEVWMrcsaTudZZfb39sgWRonLc5wPQeEmpfRrNL",
  "key11": "2j9n4apnyRpFMfJdnDYkpyyUhyG4MNa6XND1VaTc35wiqmcnK8AmZqG7BJns5y7jDE6ewvc1jKVGsStizY2oDRJZ",
  "key12": "2khkMgGLtVw7QHRyHkmRHcsNJLBjxusLWheSQhK9Rs53ZrFhHpUYDaaEGjzyYCFAqqZMidCywN7dq669qSwDKiDb",
  "key13": "4b3HE8zDL7pD7XYBograsUc5bTv3XkvUHQ3ANrqiU3suJb1sj4uSX6goQXf8cpgY6QWGYU4SAFp1LxYVgpB5Vzr",
  "key14": "3siVBx8jCUvh1GDKt92wNgMrXuHepiuF1YUtqzkyeGQNwpmJQNuvbZChrT2TMHfDzRaUgeCu8VtEXj38KUv6nfvm",
  "key15": "3XXpCEu5LTq5hHUjQskYA7eoeZVr2ohiH6ao1ajZECzHV6Hbbea7yi5WqP1EiwAifiHqPVD6VfzzUssJLCNKWNaK",
  "key16": "34icsSyVNbntg7dYXTspNkJKRkimz7BRSuCZdeWG8GAZSxJPEeTttLyBcvmSgt2MfVjNeTEXUsaNqoKmci21h6ov",
  "key17": "2bG1e6LomKVHwajyp5sDFuh42DL7uDHE7zosNq5peYprnzsXHPFQKvftPhpRSZJB49NvU5Ct6TNPgJdTsqXYz85m",
  "key18": "3dgJ22zRutTWYr9oiy1NxKuZ1WAMJmQV76Zx9QDJGWVe496rQAvx3NeAViYAUtCvfWJP3qCUeFkkwdiapZ7hsma7",
  "key19": "3T9Frz1ZpM8QmJ2B3CmeELeh9m4TbD6yVy5XhBTWdN8a6hpiT6LV7BPXxEKipt2wYCV9PU92RA2kvumhBPWVkptm",
  "key20": "4goNbqeXyD2449cnBBKr445z8AoYons7eLhDXrUBrqTWjobFTJausqJFnBbDcinrUvNqZWfD7WB28FmuAfCKEfST",
  "key21": "kCtPJ53XpEY4gzXc7PDDHoW3zeEBJkGR2n9WtDvxogD7LgZy2YSffNxxhVc8kLCh382xcpJurLWiyjkx3vVL4Da",
  "key22": "3SSHY8DWN8syejeUB5cnV1h5FaDEqPydigqvJsyBUMw3NBrWSXBkdJm9oACErQt7Rc9ScSEJ9QiNRKjqxDEkZZ2M",
  "key23": "55tsDQZpEResKG5P81QgGZwkTW98PiqSbeWTBTBCtuypeubLGxQpc6XSivybCTn1Yc2oCVo3DRneLEnP84tVZFo9",
  "key24": "3g8cTm8MzDbP6AkfmUjVQRrnPKBqau9sGLxcck1AnPGmVgvshhscnWcgfdvxWf6BTUamARvVMfEYuZaM94CG1w45"
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
