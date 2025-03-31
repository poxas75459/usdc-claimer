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
    "FxLd7p6XMp679woXkDWbdVRQSg6RLpTe4wcbVoSbkD1fF86oYVb5aQd1t5SxPunZGAMcTQEx3gGGCjoTFX3bnbS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "32uFedWHwMX3WXWqRU3f6iyDmXtPAw9XbwSqgaEeWAqvA4Mjs8zWuJmSdDmdAaPT94sjKLeFi7xxwwu4Hi3DrYFj",
  "key1": "5jgr3RUtoBT8KXxmCgfXPXWhkcC2P6n5CYBEKscPHk2P8ji5VEDExWGN87fwPoUcmYrB7XgNw4qp2dWKuotXvTp6",
  "key2": "3An4sQH2JZAwB7tapLkExf6f6s9PaKizi6FErn6TVwaWqptS5La5ugkVBRoaBkTUbwqAaFVScnjtqNWHFcLtFpxs",
  "key3": "dz7rrFFRjQYsoMotoXxjyVFLkfk3xaNSqRWXNjJKmmcJ3tYWYpyTDd9W47LiTGJy84eopr9MqmPrvteRcHDATWH",
  "key4": "5KFzaWUkWmiV5N9x6WBLQdeLWsb4Gxh4Hwz2zQHRPmhEM8kQ8SG1ZFNRkPFH6FQin9kW7DYFi1B14MkT9pUToEZs",
  "key5": "5yJhqRkCRWVqoo9x6RMigSXAA3Q8v2Dqx8owv82MY4FtCRBmC186fqAQ1ccUiH3RKFJaVNKU9gRcfRm7bMSTQTBP",
  "key6": "5paEo37oTB8cDauTDwWqwbebTT6Qmj6ur57RAqKmeXt99yub6fhhKQduvqBauDryxBUD4RR2nvudmAktbGkXWdNu",
  "key7": "3dkWVpbLZm1skccW4M9XY62ze1YyBkPPUfyv8REafXthNbEZF9gqDe1fmYF2HynSSJtXXgVXwibpQ3wzi4PjeFU5",
  "key8": "pRMKeHgbFus1hEXLrjB5rs5tmNVf6zzAeQLmjubsqc3JomvXt2WVfX4LJ27eXDXXM24KfyAei3nXcpbeRCPG5VZ",
  "key9": "5ULPunHB1p93oN3EhB86rQNHk3D2iuKehcHnoWPnntvaoHJk8Hi622itkEfAT5zTbtLymJXgVDxzVxWea6ygb92x",
  "key10": "4g6xDnaZtLUFiBj9ooMKAJVymy9g8eQZHSKpRYsbi2ehXSqMDbxocRHhBtMSAd5ZE6ww4o9JRzyXUnpSnRJRptXZ",
  "key11": "64dEty1uqA6YGoPduYH9XWzzRLggpFS5YYrV2gX3NRZk632aiyj8nNdTgVwhhhwDu8zrWHPnSKjcMSKLdHw2gxYu",
  "key12": "5jDaBcisaU9wqVjHMVVA15hKuUGEuLnizdE4Z34URuYaseQzpAuQRBmd2whz7h5FsSQcUcpAuVFj9jS6y4Ez5CpT",
  "key13": "3pAL2KK6jLGxjFz5XDPSzaZhAFz2BD9yvY6nS5ZWNuCVxcQZ42Ge3L29fxHwkUNdJXJWYMazXfQKXd5NJDSBiNhw",
  "key14": "5GTRZNPovAJyD6vMU4UKvV4zk29X8YWqdb7jycizW1kL5DdmUsLcXbpo5HvtEiAe13bknHv46XcWE6LbRVya4kw6",
  "key15": "4tRMeXCRLh24Xs821gr8QVShPtUCRmMSRYRtfuNQy4xn5Skmf9pJf7KAtc9L7JChozkAa1JiJdKoz4LWvKR59aEN",
  "key16": "mFWY1hP6Lh2n2MgqXLKTb3zHT9gRnpMqgQYHXVR5pAGWRk4U5X6smCvDKsW2929SfUqwEFKwbNLJihzMB22Hhgw",
  "key17": "3HrPZiwrcTdVJqUMTyoHscfBujzbZWg4dMdbkdB5n9wEMki1aYsoRKsNBgjBfzwt8BwxKDuHrH8Pt1AzeuNUDjZe",
  "key18": "3RnPRvfR8s9BgSxacUbGRAKuyACZxrAxNooF1Md9xFqjDCmEWbYpsyC5i5nP6V1PnCUJT71MVvRaZLo4GL2FnpkF",
  "key19": "Fq7BCpTEtUDgvBDC6rDb189VeqPTAwiSjsysHJgv2bAxCbUgBC7s5K13XCvfzbFDAyuBdodmMQRW2KSxZVChtEX",
  "key20": "3er8gTFZKQMKNjXcX8vPKfZNgjHVogk8a7cDNJ4QyVP4ZHL8SBreLq4NVZJLvggcdeJxQxzowLt7fa8T7uH91X3Q",
  "key21": "3XqLDjusccadLjEEazdBbFZecrqgM72cgchorYPEFpDiALKoR5VuhKpBam4DEhc4m19SGw8gKuFWkPnkCveXNzXV",
  "key22": "4zLT4HWJStdtjUb5eybdh8MsQZdnGQT9ihE1rAYpCcPe3BYFUkMbQHcen5vTsBqAbU5dtRRWdmDUJ7RBQo3RQqiT",
  "key23": "5HVxAKXBZJGN4N1mnP1oeJotMtqThukEWYxUEBD413rt3FAYVX3Rf52ZQYPEiQsPzFv5YKRhpbr8niLm8KqtVbwf",
  "key24": "3pVErTdJvbbAdwZEACfxMTvp8XBu8Vpp1bTY2zfnFQDcS7kwpViLAH335v2B52M4AE5sQgb7MbQqAuq96mKyyNyS",
  "key25": "4m3Jr3rVEFAuAKnsDVU3GaiEHPVn69PuhMvGRgCssmfx9Xpm36XWsFYLFg1SHpb26KF7JSxCjkJBf4zGrxJzPNze",
  "key26": "5noeaUB7Ds8HdDQVFpuoZjfP9NHndkR8vzdk7K12wWwdcsm3zb8k4bQfio947dWdnGhf6mowiSCVw5MoFSaiCKGb",
  "key27": "4eL1c7oU5xvTSMdm9NoX26tWhRe6MRej8uXLqBWpCpCnmPYXdMAeRCK63BUijNRPC56uLzZARgWmcKxNi73ckQZy",
  "key28": "uU8LczWDebmjsSw3ucYHoPtYBLKN9v4VFYpMcc4CJyopqU4a22uvAoeJv8HrpRdXsHcLzL9XV389JdoFKZxTB7v",
  "key29": "3Bry4wCiNeK44e9NdZ8CNgrgFaDMvhuEHipXYBPJcVSHZwiH5dE8tBkhkgKvF3weGiXn6rukkfxJNhagefkmxU7V",
  "key30": "2qQdRkCcny9NYSpFh4e8GuLcvdsvkeuWDqCPoGbcj3UdXBeNPYTNutFrhD8ti3Ttx1tW1g8XmJv721W42fxqeXe5",
  "key31": "4rXsonDzsQC1qL3HnpEkf2Hdmj2o68eZybEELJ6Fua34YSwT5mhNwC7nimo2s6gEedQLrZV1VDexQuNvXMSiTiHU",
  "key32": "3QboQKCh1sYk6Wb6inrScPs32gLg6LezTweahA6GxChqkmv2MVn6KT1PkeAryde6GxYYQ5WSJhgqsh7s5SgDXdux",
  "key33": "4qYLbkRir5CPgNLDJBZruhGhB8B3E8NMakiAT1WYFPuGtoFzmxqXroQXAiox53vh92sfhYP1SDond6Wvzhua2z8h",
  "key34": "4iLKgqM3bxpRusf1KN1iMGm7aUuoHtrnFYVCatonB4ujCsU5SGbjpGYXDucQ61MUkNrkpoGsrMuTuwXvP1vYtkb9"
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
