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
    "5KLJpcsqk29sbhfoA6w3QFUZRNZs12XR4STtGJPSTQ2PwKmA9zCBLRCmbb1VipDvh1meFDpAArbG2WDhsVvNzku2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "65ywqUTGfh3v616gxNGU6s3QaLVwucihWMua3G8eHSqUEp1YSTv6TbWpt928TmdQr5QXBDnCALsUPvvd97f4piqs",
  "key1": "33nNahkg2V1GWppKwBFwBQeexUsUGxuoJ76g6jgc3143433BTEg1HKo5ZWgc2rCpq8ch4SWPZZf9XfGC9YLmikMZ",
  "key2": "4CHdZAdV5T2V3jEfYuQMg1zmsLYNF4k7wvGtT1F8YGz2EQP1RCJCfcmbYeNWucCLdWS2cpCpt3fhP9K8GvwXAhtx",
  "key3": "3j9fexCLFFR91cW9joxmtDFDt8UXHfaFiBvMQLtEMLUsTrpt3wGG74RgkeHgGy2z1mjCti3epBBsBP2pSExqZf4N",
  "key4": "4LY9XYnPusfYLqCbsXWU6L7x3nVeRfRoWoBhdSjHajhP3PCTQUasZTN5FtfdGxqGfPEJscDbEZo1PCTShrmELryx",
  "key5": "jHXFQJqYcriiikB7AtTUEKM15ZyEf8JYBwsVuP4bvZN93ja7KpG9U7JGshRYV3YW8RFdjNL2MapNZK2CLa13VDF",
  "key6": "5GmexgA1ARpbB9xypwdXJWjzhWxwyhoDNVMYUZU2zHARP6gEggCxQcFTaVDSfxcfM1mJAsS27rzwrCTPxv2jDYuK",
  "key7": "46XnktF3eNzYbKMVAahfoH8b97DnrRLuSm5Hf4wwcFcgPvzS9NkDkYAmu3EuY4G8tJTgYg87rdCkj9e4GaHaB41C",
  "key8": "4VnKBaPZhHvwg363PKP94LYmrDPjh2rmS6DJhKDbKdrvGhozDMYhsuAviGi5P1wtsPbGmoJEuqxcQDgTdxqE3MHU",
  "key9": "2HPG1Psdjfrgx8Q4UcUV7cbP1mfip3VfLCmUeXaPa13MtnYfwo3yF2ahwKKhqMQfmVeoqfB6TBf58xGrKK9sy9Rf",
  "key10": "2dgNbGWoMYZd1Rv6CD8tywokW2FP2wWU9QMkwYe3v9sEacKp5eHgifxwJgETuWokcdQm2nUeHEc43hqzuzJajLp2",
  "key11": "2prRj4jFtdByhKXRtkEGSXju1Y16LXnqigxjzdUWtxSSSPrtYxQsDQxmakGTnVD1t2Ntpop8EbceNyYSNqkuzi79",
  "key12": "5qBSJ8P4281wwFiXR68jXeFKRFu6EaRcgAksXbSqEg8KV4KrmoiUcUMJb8E3oXMcowJQ1frKxJrPHNcsoj8kh3ay",
  "key13": "3BpMjr5FAfHXHJeLj4gJ6d5DPMBmgX4o7vrgjPRUU3b2vvERWVkU3dMSTtmpBq8yVFy8vTTFB4TGaqx4nta9gMqk",
  "key14": "5EsDLNsVeKupG7Eab4b2x2gYT23YTRQqF762LfnrTPde2yrcgioKo4ALJGAmjPvNePQrMnKtTrv5uaoCkB3kJCzE",
  "key15": "3gHvDUJrBDi3dqKgSYitVbZPWvYE2WU2fhJcsE9dzNy677kcSemA95jfig6inwswa9WfmLaEVN96WBan1sBud4yT",
  "key16": "5mCgVy3P98mA79wmdb7yTNDV1LxsNpmXkVEtTeLpw94iN125a5PjBwGRrZav4x4UgdpkT1PLTP8atAgVBCDZJtAN",
  "key17": "uqjc2N8ZkUygd1bod5DWreneGEhZ193GeZd49zfQHt1N3V7D3RFpnddzpGTtjBXoQzPgYNiD262XVK6Nvxn4zp1",
  "key18": "3T8q6SXt3UjNPNWjSUEKeKbLkkGcZ4gzcn1iF1AZZTi8V9s7McBEXbPvQrhP1QUKP1kpqEfRNo6fTFr1ZnisDNc1",
  "key19": "62yedRVJ3WF3X6KKQaQ5xAeBqoq1rvyebtPKneE2BNSS5gyL3yRVNvYRsaZEvQQ8bKDoMA5674JAnMzdk59zzwo5",
  "key20": "FgQ2xbkWjkoLJu6sqFBAYFJbeChw7wPkYFcGz8NQ7xt7yDh5VGbibGUWkh4KdmKG6mrfGQ9RmX39zWvjruLsB2S",
  "key21": "1L6hyRTDhyiGNe5DNPuHM1YhsUtTWZzndNQPGw3KGsZKk5qAr39oq5WerQPjLouPGMMpxQRGGdm3GRJiQ5qasQ1",
  "key22": "5WYxbDbEmrsvkeKVZxUqJarHAjcX61Nr7F9fkRWbja44XPTkhVmytHPzYkXyzhgGzVtEeCZ1XFTtsjVvrYPUj81E",
  "key23": "3ZmBu3ViXVLENJA5gQFSsb4ZcazLtXXsQF3Y5mmHQP6wwzXALnuYkcVMDqTeWgV9b3TvUvUXaAcEQ8bD4zzqEEGR",
  "key24": "222YJie9Et6eKEFZSCCwDZCfrQtYeQTSi4pVQ4PQ1r79Lx7Xp4YH8ZN5hG74UgfaczdD9uBAos7jgrgkL3cskTzr",
  "key25": "5ZxMBgbxeCWGtNWqxFYUcXk6YYrivKyB9UqauoEACn5ZEeJ1QqRJ5SbSMjQ14AT5GuJoK841YMUe3uSJq7ey3Cuc",
  "key26": "2ijEyMKX6FNuvmMqKHZ5LhF67pEU343wHU4XAe4P5Bum9tVWZSbnYsEPL5KDC73f9cV3NKM1cbLEq37Pj9hwkjSt",
  "key27": "53XsNLYmSFxaVxaTWha7H3kHUwxmhrPn2kfagS6gQ6SbRjSLoraCrFgkxYVxMjnDnypVDcPprNqpYLXhEkxeZeag",
  "key28": "5zrx9zEyQWv9j34uLn88e7Vgs4zgdgbXEWazTDPsb6gjG5voRLekgX47r4p8qeCo4YVhtddVkbeea5AQpMNsKMtE"
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
