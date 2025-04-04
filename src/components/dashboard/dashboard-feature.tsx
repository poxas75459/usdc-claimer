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
    "3JUaQaxberPwkrVfx4oeQhHez3SKRiMWdmCyNbiSjWH9hw47LDqAov3a6DHSs5q7xd9TbAgxrciKrX3zUhQqgDxU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2nd2NHG5H1CRUkRACbazbuNN779DpMZ4UKfSwLui6GHb66CXboMsetqfiVP2gz2D8CaD7pfVWjLrcy331UGM5tii",
  "key1": "4AzPEiCQXrePbQRn3GznfL9YWJ3qDgumrW9kKqd2jDUMpvAKkXmYMoTuwxCrXx2Sp5r43kXvfwEoTSCrVhxuVg4p",
  "key2": "4n98PaJmXfbrvTVyMFsaVUBy1U4jbUpQsB8JBwvbjL7ka8uT2cRTeN2nMRjZ2BdwQ1nXrPwkQFjEb2jVKfigZKnh",
  "key3": "4Uoo6jgrY4sAzbu2zhYK3SbzUyeMJvd1uqBsrZa9MeJ4NjgvC34RYhSHmCXpqoLh2ksMj8Kvnvpa7AjzhTgEPQCx",
  "key4": "o4XytwcbNveeGKiUUZj77Bv1eMtUnAkxiqzWUV2yDpWo7q8LrD5t8Z37N71W8jZPkAfDHnBkYEPuNYXYuzoXyBQ",
  "key5": "61f3gpp7c7VEvct49vGadR9ru1RoPdJCYrrxYvyE7LgSdVTdAbpVi2SUYwrGm4phTsrPLf9tuVWV7qzTiBqGpabU",
  "key6": "477wMUYoQEMXjNgEZpy2RuSaMFcu8Cwj1QVQrQMuSK9sekV3GnhyNbVgsZhYzQnukGQASe28ivLBAZegjinSVW5c",
  "key7": "3iC8h9vHAfUrvZ7tSmFZSDp7AN9ynLTa9iPt9on5hEowCURhtYLPxNAaZ2w2m8mX7WKfqEHNGrHcxW6DkRPT4Gc",
  "key8": "2vgr2ci8UUNYXzJ7tFuWSeupiNk1qSiR62pTnB14BnQ72Mm3UPgYRYdTZ1rBDgHS2meyUX3BVZTM6BTcSWk2Yaov",
  "key9": "21UhAJbobDR2BRtpWqm4f4XwMKAEi3f3tYzYKezeM3kJ18R8B8ZPcqaKLpCJbWypJx4nZj3ZKLP9mRfMtLhn8Dgf",
  "key10": "HqDfEKhG2xhzQQhfbjWKQik94scg8GNjQi14SMTxDQXXeTJC85JwuMD3nLAuSPqqf2msmoH4DbmBvzvbN1SfzTu",
  "key11": "24vG44XChLgxyKU7ADYtHAPysCUjed9vR8xPK6R9GRD8PnPVBHTkA5BDxmCBjgCQ55VH9qie3EcSaKEvP9kYSWms",
  "key12": "3fP4Rvi47QSRC41WwF1Vq4V9fs2w6ipC8yrMYv4RBb72PPRQwBQL2mGxQLmaLAtE5Z9Dy3W146q2tSr6ATMMY1aG",
  "key13": "fB9atsG45EcKMcrBozwNJTE6ePDsB6dGGH4XTDQ4UGiqAQUdpCYaZWrCxVbJ36YsLqxSjBWTnSyZF4WkEacHwPK",
  "key14": "24HghPjBYPWSQXSaAd7gpmY82GK48DdvVpVNZo49WeeWC4odRDzDS8P8hLzYSujJ7HdUSZtB7YMdkqudkKwQGV6j",
  "key15": "5H5uHamazfo3eLhgjL23ptF1va6cqcE6om2ca78qLMNm2GAVo7XHbqiJefSnLDyBSg1UtetbM8qn2kgtd3vrND9a",
  "key16": "5ZQY7TAHRGJ2cQh9CkBEet7qJGbLsQPKn6KAFy5Sk5g62tjTty2W8xmJvboxsmqZXWcsTjEE8KEvxjxMpSS3WK2z",
  "key17": "5ZACc3ykpbFus2rRL8wT12bULYiogxJd6QjWvANdrabHQh1wwLbNYTsUcqsMvqqKUTn1Wp1UDEHY45kDXNzfTfLM",
  "key18": "UfYEDbCP2MZzPokzFcxr33J7wNVRFUEGXYYHxj38PhZHhSpW57YkHtmTH76hYkBduTKmf9UUieuT2ndGwGdKZ9s",
  "key19": "4m7oSccKAJvTU2XmKfHKffhpMhcVgB2ZnKsDwnCv6AHSsc1X8DyLdfDTwVgnDNYk4xNWB36EFrtPX9CD8Mty4xKc",
  "key20": "5sPxtTJpRNguhLhLw9BZyc5BMWhfXS17mQwa5TiCkUUTWUvWRspRofurGj3KTbYcSSibYUg7CuUqLMLdhytUrsMs",
  "key21": "2ELxWWQXPFVGec7bJCGH6JbqhnMoXKRJbjAB5KXBsSKQH49dJHhpBCzJ5tc3cjrNvXQd7grKdQA1bbaG3qSMg4dB",
  "key22": "5qpmcJmSbyEGvL1niy8miN3qun7Fvdw21ZJewRD3wTdmxUes71YWo5xcRC3bfpBRUFVgsMnKi51g2hBkHbcLiWzX",
  "key23": "3KYuq5dETf39LrvZe1DUt4Jez6reApSEFoxpem1rxBEpKf6JhJRzYkg7dR2WuAMGqFPgCgxneJonDZLGRWorLrxq",
  "key24": "4LmCHYUr3gVwaUBCxEXR7Y7BiThzCp86o4bCNMh4L3NSvbjXPXdP5AKCWsPkDK6bBFmbVB2wApCC1spud6SFeBr",
  "key25": "5YHfwpSZzTBPunJdj5EiJb1dygz8qBWT86jiHjLa1ukAEUZDmJMg1PqBSUVnCEa8KaZ8A29zanrvC87EQKamec2C",
  "key26": "4HTRL46fQVia6dGLPbn482SYAcdKgehVkJL3u6oRCkPshYfDdecfy1w1h5K4BbJNDfzMpcPjSt79pey4rtdDhpXw"
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
