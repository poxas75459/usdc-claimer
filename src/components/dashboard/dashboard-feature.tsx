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
    "2SzYyjXhGpMS7zq4dwQFUdV1rM4pku6aJdvPYMyUqdP9mNThXM7wonLhajqqaBmth7q6dKnT4WJ9PDqhAPrunbjm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3yfnr2MpE7JQxYZVTwU1aTch6PLMLPVaTjuY4fvfdjsq3bKsfFyuo7FL6wgk8PRwf585a6ykzmmzcn7dg3NoFM7L",
  "key1": "2KtfFBwub7XcEr5Yd25gWgfx2c6SWvVSN48bpYYfSaBP5TtHjz34MtmUp84gfP7djpfqpcKFtVEe51A1Rg2oc46e",
  "key2": "3xuYesxda5ckQ4cNptmA5QunEQx1fi8K8G1J19BhGAtPbrkWrU9SgEi6hduSk6f8MW4iNKsjDZ57mSaXa1W7Ng2b",
  "key3": "3VZtAvGmHuvfdujRSCuUMnJbK6C7TA8LW4w8aBRgo74R6eXbp2LUx6xXB7X8ALYCiEKGnT3X9Y14RA8LPNirHgvq",
  "key4": "3ZwFQZbVspn4coNTgmpZaTTUoxfSs8WzJEsoJoYrmF1wmD9nox37heJeEztLqrAhYJxD8mpvFXcfgNfxSWhPTCT8",
  "key5": "5SSx316cQRnAWB97GfZibobWfbVYrJEZxL2bVBTWhBeGeKKh1fivged1MKUdzgKYBCe9MRRzrCPPdUoUFQofzfxK",
  "key6": "3UhBrqnLfoWRbYuHEvKxWB4WrpTZP7UNmGvtCRn6TuTCAnYqjW42b17SFLoCz41QpjcZK48Fvpg1A512YzZWfPpr",
  "key7": "4U4Rvn1PMJvzq8DxvmC1WL7czURPvy8DLRZPB5w4ACqJ84x9EZR8zh9dyX64ZQx6SYNR2Vtum3ocHVXUTgze9XBs",
  "key8": "5zWJGVV7AtJWCeRaEtqtBH63WFTVCt1GxmBqg86MBr27VNsowHHEyabyQJ7UiM3w5NjQUrWSB97Kg1EZaXucWGjb",
  "key9": "4XqqjjeCtGTKRWjr4QxB8iSbWHTjmZjJWF7pEkEXGMuMkgbuppKMMN8RcAeLQDdK8KcznGGUmSGQ6kGkf8B6GpjB",
  "key10": "5zHjMniZX4PYLQQyJgNMZ4iatBHmV2kNa82ReNYLv41AmkqWyF73Yk1w7mhUq5EMuL5fYDfcQS2t5ZD48cZkAiCw",
  "key11": "JZgKnwzNQcAnThc9GqK4Z39dDse8GpYgKMGj8zfVnTPh8Gt3hx7BqJ46n7Kx5mUhCXZVNz7rnCkYxZjWJrm6mBM",
  "key12": "5KvE1ZoTXHyyonsjYrFba4cyenb2WDTX3VPvpJfu1Mu5YZV4bWaNUXFLj1roKPsbGFgDwJwCnfPdNDLLXjn4UTRa",
  "key13": "5i1zvV5FHtXykgwZbLyXGuZ9XAsqFNrV6fBVq8GyTiDcJcVi7neMiuRyJpzG8M8rXTwJPUJGUiWhcEEvVRfofg8d",
  "key14": "5f7TSsiZaXvQaxA9NLFLEpfvmzsAf8AV5SCBYEke4iVNeqhPnidCz98tonMQiEQfUBz7fBSPfc41ynVpxuR3LWr5",
  "key15": "5erz9Vqk7aU1VHFHCU2xNK9EXTaVBzSdN2YqSrSMhDCgfR28WVktpsB7ZkzJgVkiXkCiUp3GftVBJwt5Q6S81T2Z",
  "key16": "PYpxgscpuo9cY76tonQKzBLHf89DzsiiTpuFUahv2Uwq3Vb4uvXY43q3v3B5zdKMMZTydgXYd6xGEjNZTWAorYV",
  "key17": "5KcHLsznLu71AoaDKuzGEaJt8dkApviWhbtc1rtgUBgcEF9Tnq7zEFSKhxaiZ2Gdz6ptprpaYEVMDdn32pRM5UEx",
  "key18": "32xstVogtJCtrBGCKT33ZY4VKYu73VFfScwzT5DNQN4oxuYRrpbYGvcmqyHgTKT46SBtk2GvLzK3NAX8etgNvvUQ",
  "key19": "4FfEzLm7BdVf4ZhVhvsBsYbcZ5164nvskJnCdyCKZtQEYUVP6i25uKGpxpmFUA7yT8LZui3BXBybpnGPdnC3pXM7",
  "key20": "3PV17QAJFtfyDYNTAMMvEwv6NgdpGezJ7USUGMkumRKC61H2FHNEBfir54Kk5L2kTJNvzjoee5Lj6FxVhHGB4rEk",
  "key21": "5WLAF4YNRhpP8ibG4eXDypaQd4j263CmHhbyi12SjV6rXwYzpecM39RYbCDBuuBiW4sZJvRojKs2UVsf2vZkHdB",
  "key22": "5MJCyUkw7LaD9EzkutGAD6PyXTmd9qFZnk29yYD33mMFWEu3AznE8iB7JRzYzEaR7FUBRT2jdmDmCEse14ygyukY",
  "key23": "2MAGiKGJEJSe44JTUqQnjUZdULR18LqLF6ZnhEYqNwzMi4HG2vKi9TW8PLC36E65NoKwJeq1iUz5tqb8W7ASx94D",
  "key24": "EEzLN9o1TFiCSCxXA9SxRtc4df15NwrwCToPdWtuSXyYtQJVJTKrRCwXVNFgYfovb6YzzP5PXsyHPFPnhmfvkHa",
  "key25": "42zDBawdiLmUo5b7fWM6bXkhB7rbRzsaQAa5xskFkKrsYbY1XZFF6tUB6J1k7hTGWgG7zUBBdWf4GW9MaTnAHyan",
  "key26": "4BUYCijv5RFy2yCLARbXG8DbQMQqYrKeJ1DuyPKirPTBzghcXutXAdkmpT5iF9i71DN1PAwxZF5GxR1uXgGRquB1",
  "key27": "5R78gwKo71XXdfjxjpSn4JwDaRtV6xHkwYTuxsREGBVnFjdirreGzkmdD1bBR37yBMkCCLpWpxaJunkpfj6QgH5m",
  "key28": "3z25fQKnAvpTZ3Uj3KqMWnLwjEwdMVBDmjDpb6xvzG3o6prYs8webto2vDDP2UZnp1T2wiJTFjpxXkjXdjUVzc1x",
  "key29": "3iPXie3BPfr9LSRmgVzBQrpXTgTNqtPSY8iYE3nt9nxZEj9hTV9gtttRX1naPJyk1bcGFAABb5tgLJVxK3TPW35V",
  "key30": "3TfYzBaoH7vH4pTbXnrVxGK9yYK14Y2iub3n7EPkMzFrHznw4LsZWpxRxXNDAUxyE6UNqCaU1uV83e56CvRu3CCU",
  "key31": "2xbVLb9vykHTLv5K6syjW3ct7nHfFCrN7mYWbv4rz9Jtusm7thiBi781e9xkosPqRwnUtxKUdSoAMrJ8fkhCv3uC",
  "key32": "3sYQ6VD6sTzzhxpXzndXAQH73kf1qSZ22sxKh6ERmRd9qr9SJjUnZ4AXugj8TFfbF6V2h2YYHFycrzsru6VpzE3C",
  "key33": "5GsqJ5hGMR1icqdtrBE99EyxY8nZDX69j77jCr29umza3ecFabcqexr26hu57i3JngvNQscYsbebh7CLFqWpTD8C",
  "key34": "3fokpPV8imAvTd6qB7yipHkX6EjWm3kcwFvEhc9DMFtZt7erVLheHS3aviHrqDESQBTQVPEEDb6zTbxsYtLp7dME",
  "key35": "4XPfhvr8jszCdKhLfGUELg8Nz9RZgacvHNU6Nup47JzbGe5sKnjh9rzVCusu9cRWfMifWuqshVhBQUDfAfU2UQwE",
  "key36": "3qAfEEhwfe6Fxn76qZZVftdiYaHvdTWE1miz2szj5tR5XcmeTpsAPsanBcZnRQ33vFjo4jtkRswxNcpbHBiVYdJ8",
  "key37": "hzygL2SME13bxTqXWnqcZt19v9dcuCYsbkhvwSEbqaszWm4j2cSMLjPBuFWuVVpHNdHGA9ZrE2DKfLf7iT29j7c",
  "key38": "3CZyRMKg52ZXahULVURH7STFHeSotgEVpKcjGJ5UbnQPCYzgUPeBU5X2z7i8NgD9sm2Jut8hTPW1MzQDtAM4VXpc",
  "key39": "2yvWrZSX6Ung9pSZAgbvGHfyWNeB1WoxgHyF32e4LQoXcfukDFEpsPjdWWDUE8di1jjbHLvZJXFUkzLi7u4hZWb9",
  "key40": "4YxJW3PD6vLjV3YCKXSNijFi6iqtmvqCiz8t1FcgAYHjLMPUzjMTs12mjYFqsBqd8Q572MhMJe4YTcKiprhj24Li",
  "key41": "5F8BJYxPNu9RrsBY9VmmVwGoDNgcJoLZJasCBxNDW4rBLyVHkwqpXfWozNEzk342syqXu7nBYT89ww5FLdbcH11X",
  "key42": "zH8oudCCxkfmS5g8PauwAxKZdqbuSf9FTXANZDQbDogvozXf9CWX4EkLevSZ2CzGw3SKpPCdMPJduLuoqonQihZ",
  "key43": "4sVaau2M5fGz5VP3B1tinV1UyJwnPrALrHqKxxE2SqfzfuTnn5XtGjgxGwf37gAcv8EWdmfWC1GrhBi7wL6Yc6sL",
  "key44": "5L8Z4Seh7E36WGWLVYhzCrrgrpF65qhGRybyNoybTe51ayuffLjSdEJ5dP9CmoTV9zhBfomAY4gqyEQRdTryvy8s",
  "key45": "4Pag1HRyrQ93zz1gYK8N5ay9bWDvPQBsKNxzvTMfwfmxe6pmNJXd28Gz8W6gSuMCA3mSAX9rTru261de9c44RecF",
  "key46": "2efPdW2FmzBFqKWHdWpFPz7cRQhrCPq4mQtGGv4GvS4rnxhZvW9VXq9kVSZkr3dVkhwd9ATzK74ewNY8FqJBw2zL",
  "key47": "4Ab3cJP3dqNhDwK8BhvJK5Hpii1i1M5SCUnmo7gGZFRsQA66HoX6N7t42SStrodBnpFcHLK6eoeRuCzc93dYZ7pr",
  "key48": "5aCKU6A2cS6opTotva4XAT2zWHDuRnrPBFNw8YQw9VkE9dbkgZXe93XPkMVXGtAsWtvCZRbaTEbH1iAiL4iCgaFj"
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
